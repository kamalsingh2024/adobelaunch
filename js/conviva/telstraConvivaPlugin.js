/*!
 * TelstraConviva Brightcove plugin v1.0.0
 * Replaces: adobeConvivaPlugin.js + ConvivaHelper.js (Adobe Analytics / Launch removed)
 * Player:   Brightcove Player 6.67.x (Video.js 7.x), also safe on 7.x
 * SDK:      Conviva JS Core SDK 4.9.0 (conviva-core-sdk.min.js must load first)
 * Syntax:   ES5 only (no let/const/arrow/?./??) so it runs on the v6 player
 *
 * Registers as 'TelstraConviva' AND the legacy name 'AdobeConviva', so existing
 * Video Cloud Studio player configs keep working without editing every player.
 */
(function (window, document) {
  'use strict';

  var videojs = window.videojs;
  if (!videojs || typeof videojs.registerPlugin !== 'function') { return; }

  var PLUGIN_VERSION = '1.0.0';
  var PLUGIN_NAME = 'TelstraConviva';
  var LEGACY_PLUGIN_NAME = 'AdobeConviva';
  var VIEWER_ID_KEY = 'conviva_viewer_id';
  var DEFAULT_RESOURCE = 'Akamai';
  var POLL_MS = 1000;

  // Same site to playerName mapping as the old plugin
  var SITES = {
    'afl.com.au': 'AFL Network',
    'fantasy.afl.com.au': 'AFL Fantasy',
    'tipping.afl.com.au': 'AFL Tipping',
    'afc.com.au': 'Adelaide Crows',
    'lions.com.au': 'Brisbane Lions',
    'carltonfc.com.au': 'Carlton Blues',
    'collingwoodfc.com.au': 'Collingwood Magpies',
    'essendonfc.com.au': 'Essendon Bombers',
    'fremantlefc.com.au': 'Fremantle',
    'geelongcats.com.au': 'Geelong Cats',
    'goldcoastfc.com.au': 'Gold Coast',
    'gwsgiants.com.au': 'GWS',
    'hawthornfc.com.au': 'Hawthorn Hawks',
    'melbournefc.com.au': 'Melbourne Demons',
    'nmfc.com.au': 'Kangaroos',
    'portadelaidefc.com.au': 'Port Adelaide',
    'richmondfc.com.au': 'Richmond Tigers',
    'saints.com.au': 'St.Kilda Saints',
    'sydneyswans.com.au': 'Sydney Swans',
    'westcoasteagles.com.au': 'West Coast Eagles',
    'westernbulldogs.com.au': 'Western Bulldogs',
    'womens.afl': 'AFLW Network'
  };

  /* ---------------- helpers ---------------- */

  function safe(fn, fallback) {
    try { var v = fn(); return v === undefined ? fallback : v; } catch (e) { return fallback; }
  }

  function str(v) { return (v === undefined || v === null) ? '' : String(v); }

  function readStorage(k) { return safe(function () { return window.localStorage.getItem(k); }, null); }

  function queryParam(name) {
    var m = new RegExp('[?&]' + name + '=([^&#]*)').exec(window.location.search);
    return m ? decodeURIComponent(m[1]) : null;
  }

  // Test mode: ?conviva_debug=true, or localStorage conviva_debug = 'true'.
  // sdsat_debug is still honoured so existing QA habits keep working.
  function isDebug() {
    if (queryParam('conviva_debug') === 'true') { return true; }
    if (readStorage('conviva_debug') === 'true') { return true; }
    return readStorage('sdsat_debug') === 'true';
  }

  var DEBUG = isDebug();

  function log(msg) {
    if (DEBUG && window.console && window.console.log) { window.console.log('[TelstraConviva] ' + msg); }
  }

  function warn(msg) {
    if (window.console && window.console.warn) { window.console.warn('[TelstraConviva] ' + msg); }
  }

  function getHostName() {
    var hostname = window.location.hostname.replace(/^(www\.|m\.)/, '');
    if (/^aflw/i.test(window.location.pathname.split('/')[1] || '')) { hostname = 'womens.afl'; }
    return hostname;
  }

  function getPlayerName() {
    return SITES[getHostName()] || 'AFL test';
  }

  function getTopUrl() {
    var inFrame = safe(function () { return window.location !== window.parent.location; }, true);
    if (inFrame && document.referrer) { return document.referrer; }
    return document.location.href;
  }

  // Viewer ID: GA4 client id from the _ga cookie, else a persisted random id.
  // Replaces the Adobe ECID (s.visitor.getMarketingCloudVisitorID).
  function getViewerId() {
    var m = /(?:^|;\s*)_ga=GA\d+\.\d+\.(\d+\.\d+)/.exec(document.cookie || '');
    if (m) { return m[1]; }
    var id = readStorage(VIEWER_ID_KEY);
    if (!id) {
      id = 'random:' + Math.floor(Math.random() * 1e9) + '.' + new Date().getTime();
      safe(function () { window.localStorage.setItem(VIEWER_ID_KEY, id); });
    }
    return id;
  }

  function getMatchName() {
    return safe(function () {
      var dl = window.dataLayer || [];
      for (var i = 0; i < dl.length; i++) {
        if (dl[i] && dl[i].event === 'matchView' && dl[i].matchName) { return dl[i].matchName; }
      }
      return null;
    }, null);
  }

  // Conviva custom tags must be strings: copy primitives only, stringified
  function copyTags(target, source) {
    if (!source) { return target; }
    for (var k in source) {
      if (Object.prototype.hasOwnProperty.call(source, k)) {
        var v = source[k];
        if (v !== undefined && v !== null && typeof v !== 'object' && typeof v !== 'function') {
          target[k] = String(v);
        }
      }
    }
    return target;
  }

  /* ---------------- Conviva client (one per page) ---------------- */

  var clientReady = false;

  function initConviva(options) {
    if (clientReady) { return true; }
    if (typeof window.Conviva === 'undefined' || !window.Conviva.Analytics) {
      warn('Conviva core SDK not loaded. Load conviva-core-sdk.min.js (4.9.0) before this plugin.');
      return false;
    }
    var C = window.Conviva;
    var env = DEBUG ? options.testing : options.production;
    if (!env || !env.customerKey) {
      warn('Missing customerKey for ' + (DEBUG ? 'testing' : 'production') + ' in plugin options.');
      return false;
    }
    var settings = {};
    if (env.gatewayUrl) { settings[C.Constants.GATEWAY_URL] = env.gatewayUrl; }
    settings[C.Constants.LOG_LEVEL] = DEBUG ? C.Constants.LogLevel.DEBUG : C.Constants.LogLevel.ERROR;

    C.Analytics.init(env.customerKey, null, settings);

    var device = {};
    device[C.Constants.DeviceMetadata.CATEGORY] = C.Constants.DeviceCategory.WEB;
    C.Analytics.setDeviceMetadata(device);

    clientReady = true;
    log('Conviva initialised: ' + (DEBUG ? 'TESTING' : 'PRODUCTION') + ' key=' + env.customerKey);
    return true;
  }

  /* ---------------- plugin ---------------- */

  function plugin(options) {
    var player = this;
    options = options || {};

    if (player.__telstraConviva) { log('Already attached to this player, skipping.'); return; }
    player.__telstraConviva = true;

    if (!options.production || !options.testing) {
      warn('Plugin options missing production/testing blocks. Add them in Video Cloud Studio.');
      return;
    }
    if (!initConviva(options)) { return; }

    var C = window.Conviva;
    var viewerId = getViewerId();

    var st = {
      video: null,          // VideoAnalytics for the current content session
      ad: null,             // AdAnalytics for the current ad
      active: false,        // content session open
      pending: false,       // new video loaded, waiting for play intent
      metadata: {},         // custom tags (same keys as old plugin)
      inBreak: false,
      podIndex: 1,
      adsManager: null,
      lastBitrate: -1,
      lastAvgBitrate: -1,
      lastW: -1,
      lastH: -1,
      lastDropped: -1,
      lastState: null,
      timer: null
    };

    function mediainfo() { return player.mediainfo || {}; }

    /* ---- metadata: same keys and format as adobeConvivaPlugin.buildMetadata ---- */
    function buildMetadata() {
      var mi = mediainfo();
      var src = (mi.sources && mi.sources[0]) || {};
      var isLive = mi.duration == 0; // same rule as the old plugin
      var title = str(mi.name);

      var matchName = getMatchName();
      if (matchName) { title = str(mi.name) + ' - ' + matchName; }

      var topUrl = getTopUrl();
      var path = safe(function () { return new URL(topUrl).pathname; }, '');
      if (/telstra\.unily\.com/.test(topUrl) && path.length > 0) {
        title = str(mi.name) + ' [' + path + ']';
      }

      var md = {};
      md.id = str(mi.id);
      md.title = title;
      md.url = str(src.src);
      md.live = isLive ? 'true' : 'false';
      md.durationSec = str(mi.duration);
      md.streamType = str(src.type);
      md.applicationName = getPlayerName();
      md.assetID = str(mi.id);
      md.channel = getHostName();
      md.playerName = getPlayerName();
      md.adobeViewerID = viewerId; // key kept for dashboard continuity, value is no longer Adobe ECID

      copyTags(md, mi.custom_fields || mi.customFields);

      md.viewerID = viewerId;
      md.hostname = getHostName();

      st.metadata = md;
      log('metadata ' + JSON.stringify(md));
      return md;
    }

    function contentInfo() {
      var md = st.metadata;
      var info = copyTags({}, md);
      info[C.Constants.ASSET_NAME] = '[' + md.assetID + '] ' + md.title;
      info[C.Constants.STREAM_URL] = md.url;
      info[C.Constants.IS_LIVE] = md.live === 'true' ? C.Constants.StreamType.LIVE : C.Constants.StreamType.VOD;
      info[C.Constants.PLAYER_NAME] = md.playerName;
      info[C.Constants.VIEWER_ID] = md.viewerID;
      var dur = parseInt(md.durationSec, 10);
      if (!isNaN(dur) && dur > 0) { info[C.Constants.DURATION] = dur; }
      info[C.Constants.DEFAULT_RESOURCE] = DEFAULT_RESOURCE;
      info[C.Constants.APPLICATION_VERSION] = PLUGIN_NAME + ' ' + PLUGIN_VERSION + ' | cfg ' + str(options.version);
      return info;
    }

    /* ---- session lifecycle ---- */
    function startSession(reason) {
      if (st.active) { return; }
      if (!st.metadata.assetID) { buildMetadata(); }
      st.video = C.Analytics.buildVideoAnalytics();
      var pInfo = {};
      pInfo[C.Constants.FRAMEWORK_NAME] = 'Brightcove Media Player';
      pInfo[C.Constants.FRAMEWORK_VERSION] = str((window.bc && window.bc.VERSION) || videojs.VERSION);
      st.video.setPlayerInfo(pInfo);
      st.video.reportPlaybackRequested(contentInfo());
      st.active = true;
      st.pending = false;
      st.podIndex = 1;
      st.lastBitrate = st.lastAvgBitrate = st.lastW = st.lastH = st.lastDropped = -1;
      st.lastState = null;
      startPoll();
      log('session START (' + reason + ') ' + st.metadata.title);
    }

    function endSession(reason) {
      stopPoll();
      endAd(false);
      if (st.video) {
        safe(function () {
          if (st.inBreak) { st.video.reportAdBreakEnded(); }
          st.video.reportPlaybackMetric(C.Constants.Playback.PLAYER_STATE, C.Constants.PlayerState.STOPPED);
          st.video.reportPlaybackEnded();
          st.video.release();
        });
        log('session END (' + reason + ')');
      }
      st.video = null;
      st.active = false;
      st.inBreak = false;
    }

    function setState(state) {
      if (!st.video || st.inBreak || st.lastState === state) { return; }
      st.lastState = state;
      st.video.reportPlaybackMetric(C.Constants.Playback.PLAYER_STATE, state);
    }

    /* ---- QoE metrics ---- */
    function reportRendition() {
      if (!st.video || st.inBreak) { return; }
      var attrs = safe(function () {
        var tech = player.tech(true);
        var vhs = tech.vhs || tech.hls; // Video.js 7: vhs, older: hls
        return vhs.playlists.media().attributes;
      }, null);
      if (attrs) {
        if (attrs.BANDWIDTH) {
          var kbps = Math.round(attrs.BANDWIDTH / 1000);
          if (kbps !== st.lastBitrate) {
            st.lastBitrate = kbps;
            st.video.reportPlaybackMetric(C.Constants.Playback.BITRATE, kbps);
          }
        }
        if (attrs['AVERAGE-BANDWIDTH']) {
          var avg = Math.round(parseInt(attrs['AVERAGE-BANDWIDTH'], 10) / 1000);
          if (avg !== st.lastAvgBitrate) {
            st.lastAvgBitrate = avg;
            st.video.reportPlaybackMetric(C.Constants.Playback.AVG_BITRATE, avg);
          }
        }
        if (attrs['FRAME-RATE']) {
          st.video.reportPlaybackMetric(C.Constants.Playback.RENDERED_FRAMERATE, Math.round(attrs['FRAME-RATE']));
        }
      }
      var w = safe(function () { return player.videoWidth(); }, 0);
      var h = safe(function () { return player.videoHeight(); }, 0);
      if (w > 0 && h > 0 && (w !== st.lastW || h !== st.lastH)) {
        st.lastW = w; st.lastH = h;
        st.video.reportPlaybackMetric(C.Constants.Playback.RESOLUTION, w, h);
      }
    }

    function bufferLengthMs() {
      return safe(function () {
        var b = player.buffered(), t = player.currentTime();
        for (var i = 0; i < b.length; i++) {
          if (b.start(i) <= t && t < b.end(i)) { return Math.round((b.end(i) - t) * 1000); }
        }
        return 0;
      }, 0);
    }

    function poll() {
      if (!st.video || st.inBreak) { return; }
      st.video.reportPlaybackMetric(C.Constants.Playback.PLAY_HEAD_TIME, Math.round(player.currentTime() * 1000));
      st.video.reportPlaybackMetric(C.Constants.Playback.BUFFER_LENGTH, bufferLengthMs());
      var dropped = safe(function () { return player.tech(true).el().getVideoPlaybackQuality().droppedVideoFrames; }, null);
      if (dropped !== null && dropped !== st.lastDropped && dropped > 0) {
        st.lastDropped = dropped;
        st.video.reportPlaybackMetric(C.Constants.Playback.DROPPED_FRAMES_TOTAL, dropped);
      }
      reportRendition();
    }

    function startPoll() { stopPoll(); st.timer = window.setInterval(poll, POLL_MS); }
    function stopPoll() { if (st.timer) { window.clearInterval(st.timer); st.timer = null; } }

    /* ---- content player events ---- */
    player.on('loadstart', function () {
      if (st.active) { endSession('new video loadstart'); }
      buildMetadata();
      st.pending = true;
      // Test VAST override, only in debug mode now (was open to anyone in prod before)
      if (DEBUG && queryParam('ads') === 'true' && player.ima3 && player.ima3.settings) {
        player.ima3.settings.serverUrl = 'https://kamalsingh2024.github.io/adobelaunch/Pre-roll.xml?sz=640x480&iu=/7414/TEL.AFL/cx-on-stream&impl=s&gdfp_req=1&env=vp&output=xml_vast2&unviewed_position_start=1&url=[referrer_url]&description_url=[description_url]&correlator=[timestamp]&ad_rule=1&cmsid=2513968&vid=[mediainfo.id]';
        log('test ad tag applied');
      }
      log('loadstart ' + str(mediainfo().name));
    });

    player.on('play', function () {
      if (!st.active && (st.pending || mediainfo().id)) { startSession('play'); }
    });

    player.on('playing', function () {
      if (!st.active) { startSession('playing'); }
      setState(C.Constants.PlayerState.PLAYING);
      reportRendition();
    });

    player.on('pause', function () { setState(C.Constants.PlayerState.PAUSED); });
    player.on('waiting', function () { setState(C.Constants.PlayerState.BUFFERING); });

    player.on('seeking', function () {
      if (st.video && !st.inBreak) { st.video.reportPlaybackMetric(C.Constants.Playback.SEEK_STARTED); }
    });
    player.on('seeked', function () {
      if (st.video && !st.inBreak) { st.video.reportPlaybackMetric(C.Constants.Playback.SEEK_ENDED); }
    });

    player.on(['loadedmetadata', 'resize'], reportRendition);

    player.on('durationchange', function () {
      var d = safe(function () { return player.duration(); }, 0);
      if (st.video && isFinite(d) && d > 0) {
        var info = {};
        info[C.Constants.DURATION] = Math.round(d);
        st.video.setContentInfo(info);
      }
    });

    // contrib-ads holds 'ended' until any postroll has finished
    player.on('ended', function () {
      endSession('ended');
      st.pending = true; // replay starts a new session, same as old videoEnd logic
    });

    player.on('dispose', function () { endSession('dispose'); });

    function onPlayerError(evt) {
      var err = safe(function () { return player.error(); }, null) || {};
      var msg = 'Error Type: ' + str(evt && evt.type) + ', Code: ' + str(err.code) + ', Message: ' + str(err.message);
      if (st.video) {
        st.video.reportPlaybackError(msg, C.Constants.ErrorSeverity.FATAL);
        endSession('error');
      } else {
        if (!st.metadata.assetID) { buildMetadata(); }
        var va = C.Analytics.buildVideoAnalytics();
        va.reportPlaybackFailed(msg, contentInfo());
        va.release();
      }
      log('error ' + msg);
    }
    player.on(['error', 'bc-catalog-error'], onPlayerError);

    function onUnload() { endSession('pagehide'); }
    if (window.addEventListener) {
      window.addEventListener('pagehide', onUnload);
      window.addEventListener('beforeunload', onUnload);
    }

    /* ---- IMA3 ads ---- */
    function ima() { return window.google && window.google.ima; }

    function adPlayerInfo() {
      var i = {};
      i[C.Constants.FRAMEWORK_NAME] = 'Google IMA SDK';
      i[C.Constants.FRAMEWORK_VERSION] = str(ima() && ima().VERSION);
      return i;
    }

    function ensureAdAnalytics() {
      if (!st.video) { startSession('ad'); }
      if (!st.ad) {
        st.ad = C.Analytics.buildAdAnalytics(st.video);
        st.ad.setAdPlayerInfo(adPlayerInfo());
      }
      return st.ad;
    }

    function endAd(skipped) {
      if (!st.ad) { return; }
      var a = st.ad;
      safe(function () {
        a.reportAdMetric(C.Constants.Playback.PLAYER_STATE, C.Constants.PlayerState.STOPPED);
        if (skipped) { a.reportAdSkipped(); } else { a.reportAdEnded(); }
        a.release();
      });
      st.ad = null;
    }

    function podPosition(podIdx) {
      if (podIdx === 0) { return 'Pre-roll'; }
      if (podIdx === -1) { return 'Post-roll'; }
      return 'Mid-roll ' + podIdx;
    }

    // Same keys as ConvivaHelper.getConvivaAdMetadata (Adobe midroll beacon removed)
    function adMetadata(ad) {
      var md = st.metadata;
      var pod = ad.getAdPodInfo();
      var firstAdSystem, firstAdId, firstCreativeId;
      var wrapIds = ad.getWrapperAdIds();
      if (wrapIds && wrapIds.length) {
        var n = wrapIds.length - 1;
        firstAdSystem = ad.getWrapperAdSystems()[n];
        firstAdId = wrapIds[n];
        firstCreativeId = ad.getWrapperCreativeIds()[n];
      } else {
        firstAdSystem = ad.getAdSystem();
        firstAdId = ad.getAdId();
        firstCreativeId = ad.getCreativeId();
      }
      var m = {};
      m[C.Constants.ASSET_NAME] = str(ad.getTitle());
      m[C.Constants.STREAM_URL] = str(ad.getMediaUrl());
      m[C.Constants.PLAYER_NAME] = md.playerName;
      m[C.Constants.VIEWER_ID] = md.viewerID;
      m[C.Constants.DURATION] = Math.round(ad.getDuration() || 0);
      m[C.Constants.IS_LIVE] = C.Constants.StreamType.VOD;
      m[C.Constants.ENCODED_FRAMERATE] = 30;
      m[C.Constants.DEFAULT_RESOURCE] = DEFAULT_RESOURCE;
      m.adBitRate = str(ad.getVastMediaBitrate());
      m['c3.ad.id'] = str(ad.getAdId());
      m['c3.ad.creativeId'] = str(ad.getCreativeId());
      m['c3.ad.technology'] = 'Client Side';
      m['c3.ad.system'] = str(ad.getAdSystem());
      m.adSequence = str(pod.getAdPosition());
      m['c3.ad.mediaFileApiFramework'] = ad.getApiFramework() ? str(ad.getApiFramework()) : 'NA';
      m['c3.ad.advertiser'] = str(ad.getAdvertiserName());
      m['c3.ad.position'] = podPosition(pod.getPodIndex());
      m['c3.ad.adManagerName'] = 'Google IMA SDK';
      m['c3.ad.adManagerVersion'] = str(ima() && ima().VERSION);
      m['c3.ad.firstAdSystem'] = str(firstAdSystem);
      m['c3.ad.firstAdId'] = str(firstAdId);
      m['c3.ad.firstCreativeId'] = str(firstCreativeId);
      return m;
    }

    function reportAdFailed(message, assetName) {
      var md = st.metadata;
      var m = {};
      m[C.Constants.ASSET_NAME] = assetName;
      m[C.Constants.IS_LIVE] = C.Constants.StreamType.VOD;
      m[C.Constants.PLAYER_NAME] = md.playerName;
      m.applicationName = md.applicationName;
      m.viewerId = md.viewerID;
      m['c3.ad.technology'] = 'Client Side';
      m['c3.ad.adManagerName'] = 'Google IMA SDK';
      m['c3.ad.adManagerVersion'] = str(ima() && ima().VERSION);
      var a = ensureAdAnalytics();
      a.reportAdFailed(message || 'Ad Request Failed', m);
      a.release();
      st.ad = null;
      log('ad failed: ' + message);
    }

    function adErrorMessage(adError) {
      if (!adError) { return 'Ad Request Failed'; }
      var parts = [];
      safe(function () { if (adError.getType()) { parts.push('Type: ' + adError.getType()); } });
      safe(function () { if (adError.getErrorCode()) { parts.push('Code: ' + adError.getErrorCode()); } });
      safe(function () { if (adError.getMessage()) { parts.push('Message: ' + adError.getMessage()); } });
      return parts.length ? parts.join(', ') : 'Ad Request Failed';
    }

    function onAdEvent(e) {
      var T = ima().AdEvent.Type;
      var ad = safe(function () { return e.getAd(); }, null);
      var linear = !!(ad && safe(function () { return ad.isLinear(); }, false));

      switch (e.type) {
        case T.CONTENT_PAUSE_REQUESTED:
          if (!st.video) { startSession('ad break'); }
          if (!st.inBreak && ad) {
            var pod = ad.getAdPodInfo();
            var podDur = pod.getMaxDuration && pod.getMaxDuration() > 0 ? pod.getMaxDuration() : (ad.getDuration() || 0) * (pod.getTotalAds() || 1);
            var brk = {};
            brk[C.Constants.POD_POSITION] = podPosition(pod.getPodIndex());
            brk[C.Constants.POD_DURATION] = Math.round(podDur);
            brk[C.Constants.POD_INDEX] = st.podIndex;
            st.video.reportAdBreakStarted(C.Constants.AdType.CLIENT_SIDE, C.Constants.AdPlayer.CONTENT, brk);
            st.inBreak = true;
            log('ad break start ' + brk[C.Constants.POD_POSITION]);
          }
          break;
        case T.CONTENT_RESUME_REQUESTED:
          endAd(false);
          if (st.inBreak && st.video) {
            st.video.reportAdBreakEnded();
            st.inBreak = false;
            st.podIndex++;
            st.lastState = null;
            log('ad break end');
          }
          break;
        case T.STARTED:
          if (linear) {
            endAd(false);
            var a = ensureAdAnalytics();
            a.reportAdStarted(adMetadata(ad));
            a.reportAdMetric(C.Constants.Playback.PLAYER_STATE, C.Constants.PlayerState.PLAYING);
            safe(function () {
              if (ad.getVastMediaWidth() > 0) { a.reportAdMetric(C.Constants.Playback.RESOLUTION, ad.getVastMediaWidth(), ad.getVastMediaHeight()); }
              if (ad.getVastMediaBitrate() > 0) { a.reportAdMetric(C.Constants.Playback.BITRATE, ad.getVastMediaBitrate()); }
            });
          }
          break;
        case T.COMPLETE:
          if (linear) { endAd(false); }
          break;
        case T.SKIPPED:
          if (linear) { endAd(true); }
          break;
        case T.PAUSED:
          if (linear && st.ad) { st.ad.reportAdMetric(C.Constants.Playback.PLAYER_STATE, C.Constants.PlayerState.PAUSED); }
          break;
        case T.RESUMED:
          if (linear && st.ad) { st.ad.reportAdMetric(C.Constants.Playback.PLAYER_STATE, C.Constants.PlayerState.PLAYING); }
          break;
        case T.AD_BUFFERING:
          if (st.ad) { st.ad.reportAdMetric(C.Constants.Playback.PLAYER_STATE, C.Constants.PlayerState.BUFFERING); }
          break;
        case T.AD_PROGRESS:
          if (st.ad && ad) {
            st.ad.reportAdMetric(C.Constants.Playback.PLAYER_STATE, C.Constants.PlayerState.PLAYING);
            var rem = safe(function () { return st.adsManager.getRemainingTime(); }, -1);
            if (rem >= 0 && ad.getDuration() > 0) {
              st.ad.reportAdMetric(C.Constants.Playback.PLAY_HEAD_TIME, Math.round((ad.getDuration() - rem) * 1000));
            }
          }
          break;
        case T.LOG:
          var adErr = safe(function () { return e.getAdData().adError; }, null);
          if (adErr) { log('IMA log error: ' + adErrorMessage(adErr)); }
          break;
      }
    }

    function bindAdsManager(am) {
      if (!am || am === st.adsManager || !ima()) { return; }
      st.adsManager = am;
      var T = ima().AdEvent.Type;
      var events = [T.CONTENT_PAUSE_REQUESTED, T.CONTENT_RESUME_REQUESTED, T.STARTED, T.COMPLETE,
        T.SKIPPED, T.PAUSED, T.RESUMED, T.AD_BUFFERING, T.AD_PROGRESS, T.LOG];
      for (var i = 0; i < events.length; i++) {
        if (events[i]) { am.addEventListener(events[i], onAdEvent, false); }
      }
      am.addEventListener(ima().AdErrorEvent.Type.AD_ERROR, function (ev) {
        var err = safe(function () { return ev.getError(); }, null);
        var t = safe(function () { return err.getType(); }, '');
        reportAdFailed(adErrorMessage(err), t === 'adPlayError' ? 'Ad Play Error' : 'Ad Load Error');
      }, false);
      log('IMA adsManager bound');
    }

    player.on('ima3-ads-manager-loaded', function (e) {
      var am = safe(function () { return e.originalEvent.getAdsManager(); }, null) ||
               safe(function () { return player.ima3.adsManager; }, null);
      bindAdsManager(am);
    });

    player.on('ima3-ad-error', function (e) {
      var err = safe(function () { return e.originalEvent.getError(); }, null);
      reportAdFailed(adErrorMessage(err), 'Ads Loader Error');
    });

    // debug handle: window.TelstraConviva.state in the console
    window.TelstraConviva = { version: PLUGIN_VERSION, debug: DEBUG, state: st, buildMetadata: buildMetadata };
    log('attached v' + PLUGIN_VERSION + ' to player ' + str(player.id()));
  }

  videojs.registerPlugin(PLUGIN_NAME, plugin);
  // Legacy alias so existing Studio configs calling AdobeConviva(options) keep working
  if (!(videojs.getPlugin && videojs.getPlugin(LEGACY_PLUGIN_NAME))) {
    videojs.registerPlugin(LEGACY_PLUGIN_NAME, plugin);
  }
})(window, document);
