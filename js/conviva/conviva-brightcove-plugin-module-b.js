/*! (C) 2023 Conviva, Inc. All rights reserved. Confidential and proprietary. */
videojs.registerPlugin("AdobeConviva", function(n) {
    n.i = "BrightcovePlayer",
    n.t = (bc || videojs).VERSION,
    new convivaBcIntegration(this,n)
    //adobeTracking(this,n)
});
var convivaBcIntegration = function(n, i) {
    var u = this;
    adobeTracking(n,i);
    function e(n, i) {
        (n || void 0 !== u.o) && u.v.playlist && u.o !== u.v.playlist.currentItem() && (u.u(i),
        u.l(i))
    }
    function o(n) {
        u.C("Conviva Captured Video Event - - " + n.type)
    }
    u.v = n,
    u.h = i,
    u.p = null,
    u.g = null,
    u.V = null,
    u.N = -1,
    u.m = -1,
    u.A = Conviva.Constants.PlayerState.UNKNOWN,
    u.I = !1,
    u._ = !1,
    u.o = void 0,
    u.O = !1,
    u.M = !0,
    u.k = !1,
    u.P = !1,
    u.j = null,
    u.R = null,
    u.S = !1,
    u.T = !1,
    u.B = !1,
    u.q = null,
    u.v.ready(function() {
        u.L(),
        u.U(),
        u.F(),
        u.v.on("loadstart", u.D),
        u.v.on("firstplay", u.G),
        u.v.on("play", u.G),
        u.v.on("playing", u.G),
        u.v.on("ended", u.J),
        u.v.on("abort", u.H),
        u.v.on("dispose", u.K),
        u.v.on("error", u.Y),
        u.v.on("aderror", u.Y),
        u.v.on("contenterror", u.Y),
        u.v.on("ima3-content-pause-requested", u.W),
        u.v.on("ima3-content-resume-requested", u.X),
        u.v.on("ads-ad-started", u.Z),
        u.v.on("ads-request", u.$),
        u.v.on("adserror", u.nn),
        u.v.on("adtimeout", u.nn),
        u.v.on("ima3-hardtimeout", u.nn),
        u.v.on("ima3error", u.nn),
        u.v.on("ima3-log", u.nn),
        u.v.on("ads-pod-started", u.W),
        u.v.on("ads-pod-ended", u.X),
        u.v.on("ads-ad-skipped", u.en),
        u.v.on("ads-allpods-completed", u.tn),
        u.v.on("ads-ad-ended", u.on),
        u.v.on("ads-pause", u.an),
        u.v.on("ads-play", u.rn),
        u.v.on("adsready", u.vn)
    }),
    u.L = function() {
        var n, i;
        u.h.customerKey ? (n = u.h.customerKey,
        i = {},
        u.h.serviceUrl || u.h.gatewayUrl || u.h.gateway_host ? i[Conviva.Constants.GATEWAY_URL] = u.h.serviceUrl || u.h.gatewayUrl || u.h.gateway_host : u.C("gatewayUrl is not present in the plugin configuration"),
        u.h.toggleTraces && (i[Conviva.Constants.LOG_LEVEL] = Conviva.Constants.LogLevel.DEBUG),
        Conviva.Analytics.init(n, null, i),
        Conviva.Analytics.setDeviceMetadata(u.sn()),
        u.j = new Conviva.Impl.Html5Logging,
        u.R = new Conviva.Impl.Html5Time) : u.C("CUSTOMER_KEY is not present in the plugin configuration!")
    }
    ,
    u.U = function() {
        null === u.p && (window.ConvivaVideoAnalytics = u.p = Conviva.Analytics.buildVideoAnalytics(),
        u.V ? u.V.cn(u.v, u.p) : "function" == typeof videojsProxy && (u.V = new videojsProxy(u.v,null,u.p,Conviva,u.C,u.h)))
    }
    ,
    u.F = function() {
        var n = {};
        n[Conviva.Constants.MODULE_NAME] = "BCC",
        n[Conviva.Constants.MODULE_VERSION] = "4.4.1",
        "boolean" == typeof u.h.enableAdExperience && u.h.enableAdExperience && (u.g || (window.ConvivaAdAnalytics = u.g = Conviva.Analytics.buildAdAnalytics(u.p)),
        u.g.setAdInfo(n))
    }
    ,
    u.sn = function() {
        var n = {};
        return n[Conviva.Constants.DeviceMetadata.CATEGORY] = Conviva.Constants.DeviceCategory.WEB,
        n
    }
    ,
    u.D = function(n) {
        o(n),
        e(!1, n)
    }
    ,
    u.G = function(n) {
        //add buildMetadata here
        buildMetadata(this, u.h),
        o(n),
        e(!0, n)
    }
    ,
    u.un = function(n) {
        o(n),
        e(!0, n)
    }
    ,
    u.Y = function(n) {
        var i;
        o(n),
        e(!0, n),
        u.v && (i = u.v.error(),
        u.C("MediaError: Type: " + n.type + "; Error Type: " + i.type + ", Code: " + i.code + ", Message: " + i.message),
        i) && i.code && u.p.reportPlaybackError("MediaError: Type: " + n.type + ", Error Type: " + i.type + ", Code: " + i.code + ", Message: " + i.message, Conviva.Constants.ErrorSeverity.FATAL)
    }
    ,
    u.fn = function(n) {
        !0 === u.M && u.u(n),
        u.k = !0
    }
    ,
    u.H = function(n) {
        o(n),
        u.u(n),
        u.k = !0
    }
    ,
    u.J = function(n) {
        o(n),
        u.fn(n)
    }
    ,
    u.K = function(n) {
        o(n),
        u.u(n),
        u.k = !0
    }
    ,
    u.tn = function(n) {
        o(n),
        !0 === u.k && u.u(n),
        u.M = !0
    }
    ,
    u.Z = function(n) {
        o(n),
        u.v && u.v.ima3 && u.v.ima3.currentAd && !u.v.ima3.currentAd.isLinear() || (u.U(),
        u.F(),
        u.p.setContentInfo({
            has_ads_started: "true"
        }),
        u.dn())
    }
    ,
    u.$ = function(n) {
        o(n),
        u.v && u.v.ima3 && u.v.ima3.currentAd && !u.v.ima3.currentAd.isLinear() || (u.U(),
        u.F(),
        u.p.setContentInfo({
            has_ads_requested: "true"
        }))
    }
    ,
    u.nn = function(n) {
        o(n);
        var i = "ima3-log" === n.type && void 0 !== n.originalEvent && "function" == typeof n.originalEvent.getAdData && n.originalEvent.getAdData().adError;
        if ("ima3-log" !== n.type || i) {
            if (u.v && u.v.ima3 && u.v.ima3.currentAd && !u.v.ima3.currentAd.isLinear())
                return;
            u.U(),
            u.F();
            var e, t = {
                has_ads_error: "true"
            };
            u.h.toggleTraces && (t.adserrorevent = i ? n.originalEvent.getAdData().adError.getType() : n.type),
            u.p.setContentInfo(t),
            u.g && (t = {},
            i ? (n.originalEvent.getAdData().adError.getType() && (e = "Type: " + n.originalEvent.getAdData().adError.getType(),
            t[Conviva.Constants.ASSET_NAME] = n.originalEvent.getAdData().adError.getType()),
            n.originalEvent.getAdData().adError.getErrorCode() && (e ? e += ", Code: " + n.originalEvent.getAdData().adError.getErrorCode() : e = "Code: " + n.originalEvent.getAdData().adError.getErrorCode()),
            e ? e += ", Message: " + n.originalEvent.getAdData().adError.getMessage() : e = "Message: " + n.originalEvent.getAdData().adError.getMessage()) : (n.type && (e = "Type: " + n.type,
            t[Conviva.Constants.ASSET_NAME] = n.type),
            n.errorCode && (e ? e += ", Code: " + n.errorCode : e = "Code: " + n.errorCode),
            e ? e += ", Message: Ad Request Failed" : e = "Message: Ad Request Failed"),
            e = e || "Ad Request Failed",
            (i = {})[Conviva.Constants.FRAMEWORK_NAME] = "Brightcove IMA Plugin",
            i[Conviva.Constants.FRAMEWORK_VERSION] = "" + u.v.ima3.VERSION,
            u.g.setAdPlayerInfo(i),
            (i = u.ln()) && void 0 !== i && (t[Conviva.Constants.IS_LIVE] = i),
            t["c3.ad.technology"] = "Client Side",
            u.P ? u.g.reportAdFailed(e, t) : (u.g.setAdInfo(t),
            u.q = e))
        }
        "adserror" === n.type && u.X(n)
    }
    ,
    u.W = function(n) {
        var i;
        o(n),
        u.I || (u.C("Conviva Event Handler - - handlePodStarted"),
        u.S || (u.U(),
        u.F(),
        i = {
            has_pod_started: "true"
        },
        u.h.toggleTraces && (i.podstartedevent = n.type),
        u.p.setContentInfo(i),
        u.S = !0),
        u.p.reportAdBreakStarted(Conviva.Constants.AdType.CLIENT_SIDE, Conviva.Constants.AdPlayer.CONTENT, null),
        u.I = !0,
        u.M = !1,
        u.V.A = Conviva.Constants.PlayerState.UNKNOWN)
    }
    ,
    u.X = function(n) {
        var i;
        o(n),
        u.I && (u.C("Conviva Event Handler - - handlePodEnded"),
        u.T || (i = {
            has_pod_ended: "true"
        },
        u.h.toggleTraces && (i.podendedevent = n.type),
        u.p.setContentInfo(i),
        u.T = !0),
        u.p.reportAdBreakEnded(),
        u.I = !1),
        u.on()
    }
    ,
    u.rn = function() {
        u.Cn(),
        u.g && u.v && u.v.ima3 && u.v.ima3.currentAd && u.v.ima3.currentAd.isLinear() && u.g.reportAdMetric(Conviva.Constants.Playback.PLAYER_STATE, Conviva.Constants.PlayerState.PLAYING, "CONVIVA")
    }
    ,
    u.an = function() {
        u.Cn(),
        u.g && u.v && u.v.ima3 && u.v.ima3.currentAd && u.v.ima3.currentAd.isLinear() && u.g.reportAdMetric(Conviva.Constants.Playback.PLAYER_STATE, Conviva.Constants.PlayerState.PAUSED, "CONVIVA")
    }
    ,
    u.on = function() {
        u.v && u.v.ima3 && u.v.ima3.currentAd && !u.v.ima3.currentAd.isLinear() || (u.U(),
        u.p && u.p.setContentInfo({
            has_ads_ended: "true"
        }),
        u.g && (u.g.reportAdMetric(Conviva.Constants.Playback.PLAYER_STATE, Conviva.Constants.PlayerState.STOPPED, "CONVIVA"),
        u.g.reportAdEnded()))
    }
    ,
    u.en = function() {
        u.v && u.v.ima3 && u.v.ima3.currentAd && !u.v.ima3.currentAd.isLinear() || (u.U(),
        u.p && u.p.setContentInfo({
            has_ads_skipped: "true"
        }),
        u.g && (u.g.reportAdMetric(Conviva.Constants.Playback.PLAYER_STATE, Conviva.Constants.PlayerState.STOPPED, "CONVIVA"),
        u.g.reportAdSkipped()))
    }
    ,
    u.vn = function() {
        if (google) {
            var n, i = [google.ima.AdEvent.Type.AD_BUFFERING, google.ima.AdEvent.Type.AD_PROGRESS];
            for (n in i)
                u.v.ima3.adsManager.addEventListener(i[n], u.hn, !1, u)
        }
    }
    ,
    u.hn = function(n) {
        u.v && u.v.ima3 && u.v.ima3.currentAd && u.v.ima3.currentAd.isLinear() && (google && n.type === google.ima.AdEvent.Type.AD_BUFFERING ? (u.Cn(),
        u.B = !0,
        u.g && u.g.reportAdMetric(Conviva.Constants.Playback.PLAYER_STATE, Conviva.Constants.PlayerState.BUFFERING, "CONVIVA")) : google && n.type === google.ima.AdEvent.Type.AD_PROGRESS && (u.Cn(),
        u.g && !u.B && u.g.reportAdMetric(Conviva.Constants.Playback.PLAYER_STATE, Conviva.Constants.PlayerState.PLAYING, "CONVIVA"),
        u.B = !1))
    }
    ,
    u.l = function(n) {
        u.P || (u.P = !0,
        null === u.p && u.U(),
        u.p.reportPlaybackRequested(u.pn(n)),
        u.C("Conviva Session Start Event=" + n.type),
        u._ = !0,
        u.k = !1,
        u.o = u.v.playlist.currentItem(),
        u.q && u.g && u.g.reportAdFailed(u.q),
        u.q = null)
    }
    ,
    u.dn = function() {
        var n;
        u.g && u.v && u.v.ima3 && u.v.ima3.currentAd && u.v.ima3.currentAd.isLinear() && ((n = {})[Conviva.Constants.FRAMEWORK_NAME] = "Brightcove IMA Plugin",
        n[Conviva.Constants.FRAMEWORK_VERSION] = "" + u.v.ima3.VERSION,
        u.g.setAdPlayerInfo(n),
        n = u.gn(),
        u.g.reportAdStarted(n),
        u.g.reportAdMetric(Conviva.Constants.Playback.RESOLUTION, u.v.ima3.currentAd.getVastMediaWidth(), u.v.ima3.currentAd.getVastMediaHeight(), "CONVIVA"),
        u.g.reportAdMetric(Conviva.Constants.Playback.BITRATE, u.v.ima3.currentAd.getVastMediaBitrate(), "CONVIVA"),
        u.v.ads.ad.currentTime <= 0) && u.g.reportAdMetric(Conviva.Constants.Playback.PLAYER_STATE, Conviva.Constants.PlayerState.BUFFERING, "Conviva")
    }
    ,
    u.Cn = function() {
        var n;
        u.g && u.v && u.v.ima3 && u.v.ima3.currentAd && u.v.ima3.currentAd.isLinear() && (n = u.v.ads.ad.currentTime) < u.v.ads.ad.duration && (u.g.reportAdMetric(Conviva.Constants.Playback.PLAY_HEAD_TIME, 1e3 * n, "CONVIVA"),
        u.g.reportAdMetric(Conviva.Constants.Playback.RESOLUTION, u.v.ima3.currentAd.getVastMediaWidth(), u.v.ima3.currentAd.getVastMediaHeight(), "CONVIVA"),
        u.g.reportAdMetric(Conviva.Constants.Playback.BITRATE, u.v.ima3.currentAd.getVastMediaBitrate(), "CONVIVA"))
    }
    ,
    u.gn = function() {
        var n, i, e, t = {}, o = (u.v && u.v.ima3 && u.v.ima3.currentAd && ((o = u.v.ima3.currentAd).getMediaUrl() && (t[Conviva.Constants.STREAM_URL] = o.getMediaUrl()),
        o.getTitle() && (t[Conviva.Constants.ASSET_NAME] = o.getTitle()),
        o.getDuration() && 0 < o.getDuration() && (t[Conviva.Constants.DURATION] = o.getDuration()),
        (e = u.ln()) && void 0 !== e && (t[Conviva.Constants.IS_LIVE] = e),
        t["c3.ad.system"] = o.getAdSystem() ? "" + o.getAdSystem() : "NA",
        t["c3.ad.isSlate"] = "" + !1,
        t["c3.ad.mediaFileApiFramework"] = o.getApiFramework() ? "" + o.getApiFramework() : "NA",
        t["c3.ad.creativeId"] = o.getCreativeId() ? "" + o.getCreativeId() : "NA",
        e = o.getWrapperAdIds() && 0 !== o.getWrapperAdIds().length ? (e = o.getWrapperAdIds().length,
        n = o.getWrapperAdSystems()[e - 1],
        i = o.getWrapperAdIds()[e - 1],
        o.getWrapperCreativeIds()[e - 1]) : (n = o.getAdSystem(),
        i = o.getAdId(),
        o.getCreativeId()),
        t["c3.ad.firstAdSystem"] = n ? "" + n : "NA",
        t["c3.ad.firstAdId"] = i ? "" + i : "NA",
        t["c3.ad.firstCreativeId"] = e ? "" + e : "NA"),
        t["c3.ad.technology"] = "Client Side",
        t["c3.ad.id"] = u.v && u.v.ads && u.v.ads.ad && u.v.ads.ad.id ? "" + u.v.ads.ad.id : "NA",
        u.v && u.v.ads && u.v.ads.ad && u.v.ads.ad.type ? "" + u.v.ads.ad.type : "NA");
        return t["c3.ad.position"] = "PREROLL" == o ? "Pre-roll" : "MIDROLL" == o ? "Mid-roll" : "POSTROLL" == o ? "Post-roll" : o,
        t
    }
    ,
    u.pn = function(n) {
        var i, e = {}, t = u.h.tags, o = u.h.convivatags;
        if ("undefined" != typeof Conviva && Conviva) {
            var a, r = {};
            if (r[Conviva.Constants.FRAMEWORK_NAME] = u.h.i,
            r[Conviva.Constants.FRAMEWORK_VERSION] = u.h.t,
            u.p.setPlayerInfo(r),
            r = "",
            (i = (a = u.v.playlist && u.v.playlist() && 0 < u.v.playlist().length ? u.v.playlist()[u.v.playlist.currentItem()] : u.v.mediainfo) && (a.custom_fields || a.customFields) ? a.custom_fields || a.customFields : i) && (i.assetName || i.assetname) ? r = i.assetName || i.assetname : (a.name && (r = a.name),
            a.id && (r ? r += " - " + a.id : r = a.id,
            e.ID = a.id)),
            !r && u.h && u.h.assetName && (r = u.h.assetName),
            e[Conviva.Constants.ASSET_NAME] = r,
            r = "",
            i && (i.viewerId || i.viewerid) && (r = i.viewerId || i.viewerid,
            e[Conviva.Constants.VIEWER_ID] = r),
            !r && u.h.viewerId && (e[Conviva.Constants.VIEWER_ID] = u.h.viewerId),
            u.h.playerName && (e[Conviva.Constants.PLAYER_NAME] = u.h.playerName),
            r = "",
            i && (i.defaultReportingResource || i.defaultreportingresource) && (r = i.defaultReportingResource || i.defaultreportingresource,
            e[Conviva.Constants.DEFAULT_RESOURCE] = r),
            !r && u.h.defaultReportingResource && (e[Conviva.Constants.DEFAULT_RESOURCE] = u.h.defaultReportingResource),
            r = "",
            i && (i.encodedFramerate || i.encodedframerate) && (r = i.encodedFramerate || i.encodedframerate,
            e[Conviva.Constants.ENCODED_FRAMERATE] = parseInt(r, 10)),
            !r && u.h.encodedFramerate && (e[Conviva.Constants.ENCODED_FRAMERATE] = parseInt(u.h.encodedFramerate, 10)),
            a && 0 < a.duration && (e[Conviva.Constants.DURATION] = a.duration),
            (r = u.ln()) && void 0 !== r && (e[Conviva.Constants.IS_LIVE] = r),
            t)
                for (var v in t)
                    e[v] = t[v];
            if (o) {
                var s = o.split(",");
                if (s && i)
                    for (var c = 0; c < s.length; c++)
                        Object.prototype.hasOwnProperty.call(i, s[c]) && (e[function(n) {
                            var i = n;
                            switch (n) {
                            case "c3_cm_affiliate":
                                i = "c3.cm.affiliate";
                                break;
                            case "c3_cm_brand":
                                i = "c3.cm.brand";
                                break;
                            case "c3_cm_categorytype":
                                i = "c3.cm.categoryType";
                                break;
                            case "c3_cm_channel":
                                i = "c3.cm.channel";
                                break;
                            case "c3_cm_contenttype":
                                i = "c3.cm.contentType";
                                break;
                            case "c3_cm_name":
                                i = "c3.cm.name";
                                break;
                            case "c3_cm_id":
                                i = "c3.cm.id";
                                break;
                            case "c3_cm_seriesname":
                                i = "c3.cm.seriesName";
                                break;
                            case "c3_cm_seasonnumber":
                                i = "c3.cm.seasonNumber";
                                break;
                            case "c3_cm_showtitle":
                                i = "c3.cm.showTitle";
                                break;
                            case "c3_cm_episodenumber":
                                i = "c3.cm.episodeNumber";
                                break;
                            case "c3_cm_genre":
                                i = "c3.cm.genre";
                                break;
                            case "c3_cm_genrelist":
                                i = "c3.cm.genreList";
                                break;
                            case "c3_cm_utmtrackingurl":
                                i = "c3.cm.utmTrackingUrl"
                            }
                            return i
                        }(s[c])] = i[s[c]])
            }
        }
        return u.h.toggleTraces && (e.sessionStartEvent = n.type,
        u.v) && u.v.playlist && "function" == typeof u.v.playlist.currentItem && (e.currentItem = u.v.playlist.currentItem().toString()),
        window && window.location && window.location.href && (e.href = window.location.href),
        e
    }
    ,
    u.ln = function() {
        var n, i = u.v.playlist && u.v.playlist() && 0 < u.v.playlist().length ? u.v.playlist()[u.v.playlist.currentItem()] : u.v.mediainfo, e = "", t = null;
        return (n = i && (i.custom_fields || i.customFields) ? i.custom_fields || i.customFields : n) && (n.isLive || n.islive) ? "true" === (e = n.isLive || n.islive).toLowerCase() ? t = Conviva.Constants.StreamType.LIVE : "false" === e.toLowerCase() && (t = Conviva.Constants.StreamType.VOD) : i && 0 < i.duration && (e = "false",
        t = Conviva.Constants.StreamType.VOD),
        t = e || void 0 === u.h.isLive ? t : u.h.isLive ? Conviva.Constants.StreamType.LIVE : Conviva.Constants.StreamType.VOD
    }
    ,
    u.C = function(n) {
        var i;
        u.h.toggleTraces && u.j && u.R && (i = (u.R.getEpochTimeMs() / 1e3).toFixed(3).toString(),
        //u.j.consoleLog("[Conviva] [" + i + "] [DEBUG] [SDK] [BrightcoveProxy] " + n, Conviva.SystemSettings.LogLevel.DEBUG))
        u.j.consoleLog("[Conviva] [" + i + "] [DEBUG] [SDK] [BrightcoveProxy]  [ ***" + (u?.h?.tags?.title||"title missing") + "***] "+ n, Conviva.SystemSettings.LogLevel.DEBUG))

    }
    ,
    u.u = function(n) {
        var i;
        u.p && (u.C("Brightcove Plugin end current item monitoring"),
        u.h.toggleTraces && u._ && ((i = {}).sessionEndEvent = n.type,
        u.p.setContentInfo(i),
        u.C("Conviva Session End Event=" + n.type)),
        u.g && u.g.reportAdEnded(),
        u.p.reportPlaybackEnded(),
        u.V.cleanup(),
        u.g && (u.g.release(),
        window.ConvivaAdAnalytics = u.g = null),
        u.p.release(),
        window.ConvivaVideoAnalytics = u.p = null,
        u.I = !1,
        u._ = !1,
        u.o = null,
        u.O = !1,
        u.M = !0,
        u.k = !1,
        u.P = !1,
        u.S = !1,
        u.T = !1,
        u.q = null)
    }
}
  , videojsProxy = function(n, i, e, C) {
    var h = this
      , a = (h.Vn = [],
    h.Nn = 0,
    h.yn = 0,
    h.mn = !1,
    "");
    function t() {
        for (var n = h.An.audioTracks(), i = 0; i < n.length; i++) {
            var e = n[i];
            if (e.enabled)
                return "" !== e.label && "" !== e.language ? a = "[" + e.language + "]:" + e.label : "" !== e.label && "" === e.language ? a = e.label : "" === e.label && "" !== e.language && (a = e.language),
                void (h.In !== a && (h.In = a,
                h.p.reportPlaybackMetric(C.Constants.Playback.AUDIO_LANGUAGE, h.In, "CONVIVA"),
                h.C(">>>>>>>>>>>> received Audio langauge " + h.In)))
        }
    }
    function o() {
        if (null !== h.An) {
            for (var n = h.An.textTracks(), i = !0, e = !0, t = 0; t < n.length; t++) {
                var o = n[t];
                if ("showing" === o.mode)
                    return "subtitles" === o.kind && ("" !== o.label && "" !== o.language ? a = "[" + o.language + "]:" + o.label : "" !== o.label && "" === o.language ? a = o.label : "" === o.label && "" !== o.language && (a = o.language),
                    h._n = a,
                    h.p.reportPlaybackMetric(C.Constants.Playback.SUBTITLES_LANGUAGE, h._n, "CONVIVA"),
                    h.C("received subtitle changed event: " + h._n),
                    i = !1),
                    void ("captions" === o.kind && ("" !== o.label && "" !== o.language ? a = "[" + o.language + "]:" + o.label : "" !== o.label && "" === o.language ? a = o.label : "" === o.label && "" !== o.language && (a = o.language),
                    h.On = a,
                    h.p.reportPlaybackMetric(C.Constants.Playback.CLOSED_CAPTIONS_LANGUAGE, h.On, "CONVIVA"),
                    h.C("received caption changed event: " + h.On),
                    e = !1))
            }
            if (i && h._n && "off" !== h._n) {
                if (h.p.getAdType() === C.Constants.AdType.CLIENT_SIDE)
                    return;
                h._n = "off",
                h.p.reportPlaybackMetric(C.Constants.Playback.SUBTITLES_LANGUAGE, h._n, "CONVIVA"),
                h.C("Subtitle track selected :: " + h._n)
            }
            e && h.On && "off" !== h.On && h.p.getAdType() !== C.Constants.AdType.CLIENT_SIDE && (h.On = "off",
            h.p.reportPlaybackMetric(C.Constants.Playback.CLOSED_CAPTIONS_LANGUAGE, h.On, "CONVIVA"),
            h.C("Caption track selected :: " + h.On))
        }
    }
    this.N = -1,
    this.m = -1,
    this.A = C.Constants.PlayerState.UNKNOWN,
    this._ = !1,
    this.bn = 0,
    this.wn = 0,
    this.Mn = -1,
    this.kn = "",
    this.Pn = null,
    this.En = !1,
    this.In = "",
    this.On = "",
    this._n = "",
    this.jn = !1,
    h.Rn = !1,
    this.Sn = function(n, i, e) {
        void 0 === e && (e = h.An),
        h.Tn.push([n, i, e]),
        e.on(n, i)
    }
    ,
    this.Bn = function(n, i, e) {
        (e = void 0 === e ? h.An : e).off(n, i)
    }
    ,
    this.xn = function() {
        h.Sn("onContentPauseRequested", function(n) {
            h.C("onContentPauseRequested", n)
        }),
        h.Sn("onContentResumeRequested", function(n) {
            h.C("onContentResumeRequested", n)
        }),
        h.Sn("abort", function(n) {
            h.C("abort", n)
        }),
        h.Sn("loadstart", function(n) {
            h.C("loadstart", n),
            buildMetadata(this, h.h)
            //test ads if needed
            //this.ima3.settings.serverUrl = 'https://kamalsingh2024.github.io/adobelaunch/Pre-roll.xml?sz=640x480&iu=/7414/TEL.AFL/cx-on-stream&impl=s&gdfp_req=1&env=vp&output=xml_vast2&unviewed_position_start=1&url=[referrer_url]&description_url=[description_url]&correlator=[timestamp]&ad_rule=1&cmsid=2513968&vid=[mediainfo.id]';

        }),
        h.Sn("firstplay", function(n) {
            h.C("firstplay", n),
            h.qn(n)
        }),
        h.Sn("play", function(n) {
            h.C("play", n),
            h.qn(n)
        }),
        h.Sn("ended", function(n) {
            h.C("ended", n),
            h.Ln(C.Constants.PlayerState.STOPPED)
        }),
        h.Sn("pause", function(n) {
            h.C("pause", n),
            h.qn(n),
            h.Ln(C.Constants.PlayerState.PAUSED)
        }),
        h.Sn("playing", function(n) {
            h.C("playing", n),
            h.qn(n),
            0 === h.An.currentTime() ? h.mn = !0 : 0 < h.An.currentTime() && (h.mn = !1)
        }),
        h.Sn("waiting", function(n) {
            h.C("waiting", n),
            h.qn(n),
            h.Ln(C.Constants.PlayerState.BUFFERING)
        }),
        h.Sn("timeupdate", function() {
            h.mn && (h.Nn++,
            h.A !== C.Constants.PlayerState.PLAYING) && h.An && !h.An.seeking() && h.Ln(C.Constants.PlayerState.PLAYING)
        }),
        h.Sn("error", function(n) {
            h.Un(n)
        }),
        h.Sn("contenterror", function(n) {
            h.Un(n)
        }),
        h.Sn("aderror", function(n) {
            h.Un(n)
        }),
        h.Sn("loadedmetadata", function(n) {
            h.C("loadedmetadata", n),
            h.qn(n),
            h.Fn() || h.Dn()
        }),
        h.Sn("loadeddata", function(n) {
            h.C("loadeddata", n),
            h.qn(n)
        }),
        h.Sn("durationchange", function(n) {
            h.C("durationchange", n),
            h.qn(n)
        }),
        h.Sn("seeking", function(n) {
            h.C("seeking", n),
            h.qn(n),
            h.isSeekStarted || (h.isSeekStarted = !0,
            h.p && h.p.reportPlaybackMetric(C.Constants.Playback.SEEK_STARTED, "CONVIVA")),
            h.mn && h.A !== C.Constants.PlayerState.BUFFERING && (h.C("Adjusting Conviva player state to: BUFFERING"),
            h.Ln(C.Constants.PlayerState.BUFFERING))
        }),
        h.Sn("seeked", function(n) {
            h.C("seeked", n),
            h.qn(n),
            h.isSeekStarted = !1,
            h.p && h.p.reportPlaybackMetric(C.Constants.Playback.SEEK_ENDED, "CONVIVA")
        }),
        h.Sn("progress", function() {
            h.En || h.Gn(),
            h.jn || h.Jn(),
            h.Rn || h.Hn()
        }),
        h.Sn("stalled", function() {}),
        h.Sn("resize", function() {
            var n, i;
            !h.Fn() && h.En || h.Gn(),
            "function" == typeof h.An.videoWidth && "function" == typeof h.An.videoHeight && (n = h.An.videoWidth(),
            i = h.An.videoHeight(),
            !isNaN(n) && 0 < n && n !== h.N || !isNaN(i) && 0 < i && i !== h.m) && (h.N = n,
            h.m = i,
            h.p.reportPlaybackMetric(C.Constants.Playback.RESOLUTION, n, i, "CONVIVA"))
        })
    }
    ,
    this.Jn = function() {
        var n;
        h.jn || ((n = h.An.audioTracks()) && t(),
        n.addEventListener("change", function() {
            t()
        }),
        !h.jn && 0 < n.length && (h.jn = !0))
    }
    ,
    this.Hn = function() {
        var n;
        h.Rn || (h.Kn = !1,
        h.Yn = !1,
        (n = h.An.textTracks()) && o(),
        n.addEventListener("change", function() {
            o()
        }),
        h.Rn = !0)
    }
    ,
    this.Dn = function() {
        if (!h.En) {
            for (var n, i = h.An.textTracks(), e = 0; e < i.length; e++)
                "segment-metadata" === i[e].label && (n = i[e]);
            n && (n.on("cuechange", h.zn),
            h.En = !0)
        }
    }
    ,
    this.Wn = function() {
        for (var n, i = h.An.textTracks(), e = 0; e < i.length; e++)
            "segment-metadata" === i[e].label && (n = i[e]);
        n && (n.off("cuechange", h.zn),
        h.En = !1)
    }
    ,
    this.zn = function() {
        var n = this.activeCues[0];
        if (n && n.value && n.value.bandwidth && h.p && h.A !== C.Constants.PlayerState.UNKNOWN) {
            var i = 0
              , e = 0
              , t = n.value.bandwidth
              , o = h.An;
            if (o) {
                var a, r, v = o.tech(!0);
                if (v)
                    if (v.vhs && v.vhs.playlists && v.vhs.playlists.media ? (r = v.vhs.playlists,
                    f = v.vhs.playlists.media()) : v.hls && v.hls.playlists && v.hls.playlists.media && (r = v.hls.playlists,
                    f = v.hls.playlists.media()),
                    f && f.attributes) {
                        if (f.attributes["AVERAGE-BANDWIDTH"] && (e = parseInt(f.attributes["AVERAGE-BANDWIDTH"], 10)),
                        f.attributes.BANDWIDTH) {
                            var s = o.audioTracks();
                            if (s && 0 < s.length)
                                for (var c = 0; c < s.length; c++) {
                                    var u = s[c];
                                    if (u.enabled) {
                                        a = u;
                                        break
                                    }
                                }
                        }
                        a && f.attributes.AUDIO && r && r.master && r.master.mediaGroups && r.master.mediaGroups.AUDIO && (v = r.master.mediaGroups.AUDIO[f.attributes.AUDIO]) && (o = v[a.id]) && o.playlists && o.playlists[0] && (r = o.playlists[0].attributes) && r.BANDWIDTH && (i = r.BANDWIDTH)
                    }
            }
            var f = Math.round((t + i) / 1e3);
            f !== h.bn && (h.bn = f,
            h.p.reportPlaybackMetric(C.Constants.Playback.BITRATE, h.bn, "CONVIVA")),
            (e = Math.round(e / 1e3)) !== h.wn && (h.wn = e,
            h.p.reportPlaybackMetric(C.Constants.Playback.AVG_BITRATE, h.wn, "CONVIVA")),
            n.value.resolution && n.value.resolution.width && n.value.resolution.height && (v = n.value.resolution.width,
            o = n.value.resolution.height,
            !isNaN(v) && 0 < v && v !== h.N || !isNaN(o) && 0 < o && o !== h.m) && (h.N = v,
            h.m = o,
            h.p.reportPlaybackMetric(C.Constants.Playback.RESOLUTION, v, o, "CONVIVA"))
        }
    }
    ,
    this.Gn = function() {
        var n = 0
          , i = 0
          , e = 0
          , t = 0;
        if (h.p && h.A !== C.Constants.PlayerState.UNKNOWN) {
            var o = h.An;
            if (o) {
                var a, r, v = o.tech({
                    IWillNotUseThisInPlugins: !0
                });
                if (v) {
                    if (v.vhs && v.vhs.playlists && v.vhs.playlists.media ? (l = v.vhs.playlists,
                    d = v.vhs.playlists.media()) : v.hls && v.hls.playlists && v.hls.playlists.media && (l = v.hls.playlists,
                    d = v.hls.playlists.media()),
                    d && d.attributes) {
                        d.attributes.BANDWIDTH && (e = d.attributes.BANDWIDTH),
                        d.attributes["AVERAGE-BANDWIDTH"] && (t = parseInt(d.attributes["AVERAGE-BANDWIDTH"], 10));
                        var s, c = o.audioTracks();
                        if (c && 0 < c.length)
                            for (var u = 0; u < c.length; u++) {
                                var f = c[u];
                                if (f.enabled) {
                                    s = f;
                                    break
                                }
                            }
                        return n = e + (i = s && d.attributes.AUDIO && l && l.master && l.master.mediaGroups && l.master.mediaGroups.AUDIO && (l = l.master.mediaGroups.AUDIO[d.attributes.AUDIO]) && (d = l[s.id]) && d.playlists && d.playlists[0] && (l = d.playlists[0].attributes) && l.BANDWIDTH ? l.BANDWIDTH : i),
                        (a = Math.round(n / 1e3)) !== h.bn && (h.bn = a,
                        h.p.reportPlaybackMetric(C.Constants.Playback.BITRATE, h.bn, "CONVIVA")),
                        void ((t = Math.round(t / 1e3)) !== h.wn && (h.wn = t,
                        h.p.reportPlaybackMetric(C.Constants.Playback.AVG_BITRATE, h.wn, "CONVIVA")))
                    }
                    var d = v.shakaPlayer_ || v.shaka_ || v.shakaPlayer;
                    if (d && "function" == typeof d.getStats) {
                        var l = d.getStats();
                        if (l && l.streamBandwidth)
                            return void ((a = Math.round(l.streamBandwidth / 1e3)) !== h.bn && (h.bn = a,
                            h.p.reportPlaybackMetric(C.Constants.Playback.BITRATE, h.bn, "CONVIVA")))
                    }
                    var t = v.hls_;
                    if (t && t.levels && 0 <= t.currentLevel) {
                        var d = t.levels[t.currentLevel];
                        if (d && d.bitrate)
                            return void ((a = Math.round(d.bitrate / 1e3)) !== h.bn && (h.bn = a,
                            h.p.reportPlaybackMetric(C.Constants.Playback.BITRATE, h.bn, "CONVIVA")))
                    }
                }
                o.mediaPlayer ? r = o.mediaPlayer : o.dash && o.dash.mediaPlayer && (r = o.dash.mediaPlayer),
                r && "function" == typeof r.getQualityFor && "function" == typeof r.getBitrateInfoListFor && (l = r.getQualityFor("audio"),
                v = r.getBitrateInfoListFor("audio"),
                void 0 !== l && v && v[l] && v[l].bitrate && (i = v[l].bitrate),
                t = r.getQualityFor("video"),
                d = r.getBitrateInfoListFor("video"),
                n = i + (e = void 0 !== t && d && d[t] && d[t].bitrate ? d[t].bitrate : e),
                (a = Math.round(n / 1e3)) !== h.bn) && (h.bn = a,
                h.p.reportPlaybackMetric(C.Constants.Playback.BITRATE, h.bn, "CONVIVA"))
            }
        }
    }
    ,
    this.getBufferLength = function() {
        var n = h.An.buffered();
        if ("number" != typeof n)
            return -1;
        for (var i = 0, e = 0; e < n.length; e++) {
            var t = n.start(e)
              , o = n.end(e);
            t <= h.An.currentTime() && h.An.currentTime() < o && (i += o - h.An.currentTime())
        }
        return h.Qn = i,
        1e3 * h.Qn
    }
    ,
    this.Xn = function() {
        for (var n = 0; n < h.Tn.length; n++) {
            var i = h.Tn[n];
            h.Bn(i[0], i[1], i[2])
        }
        h.Tn = []
    }
    ,
    this.Zn = function() {
        h.An && (h.$n = h.An.readyState(),
        0 === h.An.readyState() || h.An.ended() ? h.Ln(C.Constants.PlayerState.STOPPED) : (h.An.paused() || h.An.seeking()) && h.Ln(C.Constants.PlayerState.PAUSED))
    }
    ,
    this.Ln = function(n) {
        h.p && (h.A = n,
        h.p.reportPlaybackMetric(C.Constants.Playback.PLAYER_STATE, h.A, "CONVIVA"),
        h.ni(),
        h.ii = !0)
    }
    ,
    this.qn = function(n) {
        if (h.p) {
            var i, e = !0, t = !0, o = (h.ei && ((i = h.An.playlist && h.An.playlist() && 0 < h.An.playlist().length ? h.An.playlist()[h.An.playlist.currentItem()] : h.An.mediainfo) && (((o = i.custom_fields || i.customFields) && (o.isLive || o.islive) || 0 < i.duration) && (e = !1),
            0 < i.duration) && (t = !1),
            h.h) && void 0 !== h.h.isLive && (e = !1),
            {});
            if (h.An && h.An.playlist && "function" == typeof h.An.playlist.currentItem && (t || e)) {
                var a, r = !1;
                switch (n.type) {
                case "play":
                case "waiting":
                    -1 === h.An.playlist.currentItem() && (r = !0);
                    break;
                case "playing":
                case "seeking":
                case "seeked":
                case "pause":
                case "loadedmetadata":
                case "loadeddata":
                case "durationChange":
                    r = !0
                }
                r && ("function" == typeof h.An.duration && (a = h.An.duration(),
                h.An.duration() === 1 / 0 || isNaN(h.An.duration()) || (a = Math.round(h.An.duration()))),
                a) && a !== h.Mn && ((h.Mn = a) === 1 / 0 ? e && (o[C.Constants.IS_LIVE] = C.Constants.StreamType.LIVE) : 0 < a && (t && (o[C.Constants.DURATION] = a),
                e) && (o[C.Constants.IS_LIVE] = C.Constants.StreamType.VOD))
            }
            "function" == typeof h.An.currentSource && h.An.currentSource().src && (i = h.An.currentSource().src) !== h.kn && (h.kn = i,
            o[C.Constants.STREAM_URL] = i),
            "{}" !== JSON.stringify(o) && h.p.setContentInfo(o)
        }
    }
    ,
    this.ti = function() {
        var n;
        h.An && "function" == typeof h.An.getVideoPlaybackQuality && h.An.getVideoPlaybackQuality() && (n = h.An.getVideoPlaybackQuality().droppedVideoFrames) && 0 < n && n !== h.Pn && (h.Pn = n,
        h.p.reportPlaybackMetric(C.Constants.Playback.DROPPED_FRAMES_TOTAL, h.Pn, "CONVIVA"))
    }
    ,
    this.oi = function() {
        this.ai = 0,
        this.ri = 0,
        this.Qn = 0,
        this.vi = this.si.createTimer(this.ci, 100, "videojsProxy._poll()")
    }
    ,
    this.ci = function() {
        h.p && (h.p.getAdType() !== C.Constants.AdType.CLIENT_SIDE && h.An ? (h.p.reportPlaybackMetric(C.Constants.Playback.PLAY_HEAD_TIME, 1e3 * h.An.currentTime(), "CONVIVA"),
        h.p.reportPlaybackMetric(C.Constants.Playback.BUFFER_LENGTH, h.getBufferLength(), "CONVIVA"),
        h.ui(),
        h.fi(),
        h.ti()) : h.A !== C.Constants.PlayerState.UNKNOWN && (h.A = C.Constants.PlayerState.UNKNOWN))
    }
    ,
    this.ui = function() {
        h.ai = h.ri,
        h.ri = h.An.currentTime();
        var n, i = Date.now();
        0 < h.di && i > h.di && (n = (n = (n = h.ri - h.ai) < 0 ? 0 : n) / (i - h.di) * 1e3,
        h.Vn.push(n)),
        h.di = i,
        h.Vn.length > Math.max(8, 4) && h.Vn.shift()
    }
    ,
    this.fi = function() {
        var n = h.Vn.length;
        if (n >= Math.min(4, 8)) {
            for (var i = 0, e = h.Vn.slice(), t = 0; t < e.length; t++)
                i += e[t];
            i /= n;
            var o = 1
              , a = .25
              , r = h.An.playbackRate();
            !isNaN(r) && r !== 1 / 0 && 0 < r && (o *= r = h.Fn() && r < .5 ? .5 : r,
            a *= r),
            h.A !== C.Constants.PlayerState.PLAYING && 4 <= n && Math.abs(i - o) < a ? h.An.seeking() || (h.C("Adjusting Conviva player state to: PLAYING"),
            h.Ln(C.Constants.PlayerState.PLAYING)) : 8 <= n && 0 === i && (h.An.paused() ? h.A !== C.Constants.PlayerState.PAUSED && (h.C("Adjusting Conviva player state to: PAUSED"),
            h.Ln(C.Constants.PlayerState.PAUSED)) : h.An.seeking() || h.A !== C.Constants.PlayerState.BUFFERING && (h.C("Adjusting Conviva player state to: BUFFERING"),
            h.Ln(C.Constants.PlayerState.BUFFERING)))
        }
    }
    ,
    this.li = function() {
        this.vi && (this.vi(),
        this.vi = null)
    }
    ,
    this.ni = function() {
        h.Vn = [],
        h.ai = -1,
        h.di = 0
    }
    ,
    this.Ci = function() {
        h.yn = 0,
        h.Nn = 0
    }
    ,
    this.Un = function(n) {
        h.C("error", n),
        h.An && h.An.error() && !h.ei && (n = "Error Type: " + n.type + ", Error Message: " + h.An.error().message + ", Error Code: " + h.An.error().code,
        h.p.reportPlaybackError(n, C.Constants.ErrorSeverity.FATAL))
    }
    ,
    this.C = function(n) {
        this.ei ? this.hi(n) : this.hi.log(n, C.SystemSettings.LogLevel.DEBUG)
    }
    ,
    this.cn = function(n, i) {
        if (!n)
            throw new Error("bcVideojsProxy: player argument cannot be null.");
        h.An = n,
        h.p = i,
        h.C("bcVideojsProxy.update()"),
        0 === h.Tn.length && h.xn(),
        h.ni(),
        h.Ci(),
        h.li(),
        h.oi(),
        h.jn = !1,
        h.Rn = !1,
        h.In = "",
        h.On = "",
        h._n = "",
        h.Yn = !1,
        h.Kn = !1,
        h.Hn(),
        h.Jn(),
        h.N = -1,
        h.m = -1,
        h.A = C.Constants.PlayerState.UNKNOWN,
        h.bn = 0,
        h.Mn = -1,
        h.kn = "",
        h.Pn = null,
        h.Zn();
        var n = {};
        n[C.Constants.MODULE_NAME] = "BC",
        n[C.Constants.MODULE_VERSION] = "4.4.1",
        h.p.setContentInfo(n),
        this.Fn() || this.Dn(),
        !h.Fn() && h.En || (h.Gn(),
        "function" == typeof h.An.videoWidth && "function" == typeof h.An.videoHeight && (i = h.An.videoWidth(),
        n = h.An.videoHeight(),
        !isNaN(i) && 0 < i && i !== h.N || !isNaN(n) && 0 < n && n !== h.m) && (h.N = i,
        h.m = n,
        h.p.reportPlaybackMetric(C.Constants.Playback.RESOLUTION, i, n, "CONVIVA")))
    }
    ,
    this.Fn = function() {
        return /apple/i.test(navigator.vendor)
    }
    ,
    function(n, i, e, t, o, a) {
        if (!n)
            throw new Error("videojsProxy: videoElement argument cannot be null.");
        var r = {};
        this.ei = !1,
        this.An = n,
        this.p = e,
        this.si = new t.Impl.Html5Timer,
        i ? (this.hi = i.buildLogger(),
        this.hi.setModuleName("videojsProxy"),
        r[t.Constants.MODULE_NAME] = "Video JS",
        (n = {})[t.Constants.FRAMEWORK_NAME] = "Video JS",
        "undefined" != typeof videojs && (n[t.Constants.FRAMEWORK_VERSION] = videojs.VERSION),
        this.p.setPlayerInfo(n)) : (this.hi = o,
        this.h = a,
        r[t.Constants.MODULE_NAME] = "BC",
        this.ei = !0),
        r[t.Constants.MODULE_VERSION] = "4.4.1",
        this.C("videojsProxy._constr()"),
        this.Tn = [],
        this.xn(),
        this.ni(),
        this.Ci(),
        this.oi(),
        this.Jn(),
        this.Zn(),
        this.p.setContentInfo(r),
        this.Fn() || this.Dn(),
        !h.Fn() && h.En || (h.Gn(),
        "function" == typeof h.An.videoWidth && "function" == typeof h.An.videoHeight && (e = h.An.videoWidth(),
        i = h.An.videoHeight(),
        !isNaN(e) && 0 < e && e !== h.N || !isNaN(i) && 0 < i && i !== h.m) && (h.N = e,
        h.m = i,
        h.p.reportPlaybackMetric(t.Constants.Playback.RESOLUTION, e, i, "CONVIVA")))
    }
    .apply(this, arguments),
    this.cleanup = function() {
        this.C("videojsProxy.cleanup()"),
        this.li(),
        this.Xn(),
        this.Fn() || this.Wn(),
        this.An = null,
        h.p = null,
        h.N = -1,
        h.m = -1,
        h.A = C.Constants.PlayerState.UNKNOWN,
        h.bn = 0,
        h.wn = 0,
        h.Mn = -1,
        h.kn = "",
        h.Pn = null,
        h.En = !1,
        h.jn = !1,
        h.Rn = !1,
        h.In = "",
        h.On = "",
        h._n = ""
    }
};
"undefined" != typeof ConvivaModule && (ConvivaModule.Impl = ConvivaModule.Impl || {},
ConvivaModule.Impl.VideojsProxy = videojsProxy);

function getSafe(fn, defaultVal) {
    try {
        return fn();
    } catch (e) {
        return defaultVal;
    }
}
function getHostName() {
   var hostname = window.location.hostname.replace(/^(www\.|m\.)/, '');
    if (/^aflw/i.test(location.pathname.split('/')[1])) hostname = 'womens.afl'; //add old womens playername 
    return hostname;
}   
function getPlayerName() {
    var hostname = window.location.hostname.replace(/^(www\.|m\.)/, '');
        if (/^aflw/i.test(location.pathname.split('/')[1])) hostname = 'womens.afl'; //add old womens playername 

    let aflSitesArray = {};
    aflSitesArray['afl.com.au'] = 'AFL Network';
    aflSitesArray['fantasy.afl.com.au'] = 'AFL Fantasy';
    aflSitesArray['tipping.afl.com.au'] = 'AFL Tipping';
    aflSitesArray['afc.com.au'] = 'Adelaide Crows';
    aflSitesArray['lions.com.au'] = 'Brisbane Lions';
    aflSitesArray['carltonfc.com.au'] = 'Carlton Blues';
    aflSitesArray['collingwoodfc.com.au'] = 'Collingwood Magpies';
    aflSitesArray['essendonfc.com.au'] = 'Essendon Bombers';
    aflSitesArray['fremantlefc.com.au'] = 'Fremantle';
    aflSitesArray['geelongcats.com.au'] = 'Geelong Cats';
    aflSitesArray['goldcoastfc.com.au'] = 'Gold Coast';
    aflSitesArray['gwsgiants.com.au'] = 'GWS';
    aflSitesArray['hawthornfc.com.au'] = 'Hawthorn Hawks';
    aflSitesArray['melbournefc.com.au'] = 'Melbourne Demons';
    aflSitesArray['nmfc.com.au'] = 'Kangaroos';
    aflSitesArray['portadelaidefc.com.au'] = 'Port Adelaide';
    aflSitesArray['richmondfc.com.au'] = 'Richmond Tigers';
    aflSitesArray['saints.com.au'] = 'St.Kilda Saints';
    aflSitesArray['sydneyswans.com.au'] = 'Sydney Swans';
    aflSitesArray['westcoasteagles.com.au'] = 'West Coast Eagles';
    aflSitesArray['westernbulldogs.com.au'] = 'Western Bulldogs';
    aflSitesArray['womens.afl'] = 'AFLW Network';

    return aflSitesArray[hostname] || "AFL test";
}

function buildMetadata(myPlayer, convivaConfig) {

       // Delete the existing tags object if it exists
       if (convivaConfig.tags) {
        delete convivaConfig.tags;
    }

    const metadata = {};

    var viewerID = "random:" + Math.random() * 1e9;

    if (s?.visitor !== undefined) {
        viewerID = s.visitor.getMarketingCloudVisitorID();
    }

    // Basic metadata
    metadata["id"] = myPlayer.mediainfo.id;
    metadata["title"] = myPlayer.mediainfo.name;
    metadata["url"] = myPlayer.mediainfo.sources[0].src;
    metadata["live"] = myPlayer.mediainfo.duration == 0 ? "true" : "false";
    metadata["durationSec"] = "" + myPlayer.mediainfo.duration;
    metadata["streamType"] = myPlayer.mediainfo.sources[0].type;
    metadata["applicationName"] = getPlayerName();

    const isLive = myPlayer.mediainfo.duration == 0;
    const adobeMediaName = isLive ? "Live:" + myPlayer.mediainfo.name : myPlayer.mediainfo.name;

    // Append match name from dataLayer if available
    const matchName = getSafe(() => dataLayer.filter(obj => obj.event === 'matchView')[0].matchName, false);
    if (matchName) {
        metadata["title"] = adobeMediaName + " - " + matchName;
    }

    // Custom metadata
    metadata["assetID"] = myPlayer.mediainfo.id;
    metadata["channel"] = getHostName();
    metadata["playerName"] = getPlayerName();
    metadata["adobeViewerID"] = viewerID;

    // User data
    const userData = {
        viewerID: viewerID,
        hostname: getHostName()
    };

    // Merge custom fields and user data into metadata
    Object.assign(metadata, myPlayer.mediainfo.customFields);
    Object.assign(metadata, userData);

    // Add Conviva-specific metadata
    metadata[Conviva.Constants.ASSET_NAME] = "[" + metadata.assetID + "] " + metadata.title;
    metadata[Conviva.Constants.STREAM_URL] = metadata.url;
    metadata[Conviva.Constants.IS_LIVE] = metadata.live == 'true' ? Conviva.Constants.StreamType.LIVE : Conviva.Constants.StreamType.VOD;
    metadata[Conviva.Constants.PLAYER_NAME] = metadata.playerName;
    metadata[Conviva.Constants.VIEWER_ID] = metadata.adobeViewerID;
    metadata[Conviva.Constants.DURATION] = metadata.durationSec;
    metadata[Conviva.Constants.DEFAULT_RESOURCE] = 'Akamai';
    metadata[Conviva.Constants.APPLICATION_VERSION] = _satellite.getVar("publish_ver") || 'Launch PublishDate:2999-12-31 | sCode version:2.1.0';

    // Add device metadata
    const deviceMetadataReal = getDeviceMetadataReal();
    metadata[Conviva.Constants.DeviceMetadata.BRAND] = deviceMetadataReal.BRAND;
    metadata[Conviva.Constants.DeviceMetadata.MANUFACTURER] = deviceMetadataReal.MANUFACTURER;
    metadata[Conviva.Constants.DeviceMetadata.MODEL] = deviceMetadataReal.MODEL;
    metadata[Conviva.Constants.DeviceMetadata.TYPE] = Conviva.Constants.DeviceType.DESKTOP;
    metadata[Conviva.Constants.DeviceMetadata.OS_NAME] = deviceMetadataReal.OS_NAME;
    metadata[Conviva.Constants.DeviceMetadata.OS_VERSION] = deviceMetadataReal.OS_VERSION;
    metadata[Conviva.Constants.DeviceMetadata.CATEGORY] = Conviva.Constants.DeviceCategory.WEB;

    // Append metadata to the provided JSON object under the "tags" key
    if (!convivaConfig.tags) {
        convivaConfig.tags = {};
    }
    Object.assign(convivaConfig.tags, metadata);

    log(JSON.stringify(metadata), true);


    return convivaConfig;
}

// Device metadata function
function getDeviceMetadataReal() {
    const userAgent = navigator.userAgent.toLowerCase();
    let manufacturer = 'Unknown';
    let model = 'Unknown';

    if (userAgent.includes('iphone')) {
        manufacturer = 'Apple';
        model = 'iPhone';
    } else if (userAgent.includes('ipad')) {
        manufacturer = 'Apple';
        model = 'iPad';
    } else if (userAgent.includes('macintosh') || userAgent.includes('mac os')) {
        manufacturer = 'Apple';
        model = 'Mac';
    } else if (userAgent.includes('android')) {
        manufacturer = 'Android';
        // Extract model from the user agent if available
        const match = userAgent.match(/android [\d.]+; (.*?);/);
        if (match && match[1]) {
            model = match[1];
        }
    } else if (userAgent.includes('windows')) {
        manufacturer = 'Windows';
        // Extract model from the user agent if available
        const match = userAgent.match(/windows nt [\d.]+; (.*?);/);
        if (match && match[1]) {
            model = match[1];
        }
    } else if (userAgent.includes('linux')) {
        manufacturer = 'Linux';
        // Extract model from the user agent if available
        const match = userAgent.match(/\((.*?)\)/);
        if (match && match[1]) {
            model = match[1];
        }
    }

    const deviceMetadata = {
        BRAND: manufacturer,
        MANUFACTURER: manufacturer,
        MODEL: model,
        OS_NAME: navigator.platform,
        OS_VERSION: navigator.appVersion,
    };

    return deviceMetadata;
}

function log(m, p) {
    var prod = (window.localStorage.getItem("sdsat_debug") == null || window.localStorage.getItem("sdsat_debug") == 'false');

    if (!prod) {
        console.log(m)
    }
}

function adobeTracking(player,options) {

var prod = true; 
var adobe = true; 

var myPlayer = player;
var isContentLoaded = false;
var videoDuration;
var mediaName;
var adobeMediaName;            
var mediaPlayerName = getHostName();
var currentTime;
var isPlaying = false;
var videoEnd = false;
var bitRate = 0;
var isLive = false;

var metadata = {};
var firstPlay = false;
var tmAdReq = false;
var tmAdPlay = false;
var tmAdBeacon = false;
var tmCC = false;
var tmAFLW = false;

var viewerID = "random:" + Math.random() * 1e9;

if (s?.visitor !== undefined) {
    viewerID = s.visitor.getMarketingCloudVisitorID();
}

function ABDMediaOPEN() {
    log("++ IN ABDMediaOPEN TOP ++", prod);

    //Check the metadata is loaded
    if (isContentLoaded) {
        log("++ IN ABDMediaOPEN content loaded ++", prod);
        //Get all required metadata
        currentTime = myPlayer.currentTime();
        mediaName = myPlayer.mediainfo.name;
        videoDuration = myPlayer.mediainfo.duration;

        buildMetadataAdobe();

        //Open adobe Analytics Media Module	

        adobe && s.Media.open(adobeMediaName, videoDuration, mediaPlayerName);

        //Check if video is playing
        //if (isPlaying) {
        //    log("++IN ABDMediaOPEN video is playing " + mediaName + " | " + videoDuration, prod);
        //Play Adobe Analytics Media module from beginning.
        //    adobe && s.Media.play(adobeMediaName, currentTime);
        // }
    }
}

            
//Used to reset the variables as when the next videos play, the play event is called before loadstart ...
function resetVariables() {
    isContentLoaded = false;
    videoDuration = currentTime = "";
    videoEnd = true;
    bitRate = 0;
    tmAdBeacon=false;
    tmCC = false;
    isLive=false;
    adobeMediaName="";
    tmAFLW=false;
}
//Used to build metadata 
function buildMetadataAdobe() {
         metadata = {};

        metadata["id"] = myPlayer.mediainfo.id;
        metadata["title"] = myPlayer.mediainfo.name;;
        metadata["url"] = myPlayer.mediainfo.sources[0].src;
        metadata["live"] = myPlayer.mediainfo.duration == 0 ? "true" : "false";
        metadata["durationSec"] = ""+myPlayer.mediainfo.duration;
        metadata["streamType"] = myPlayer.mediainfo.sources[0].type;
        metadata["applicationName"] = getPlayerName();
        isLive = myPlayer.mediainfo.duration == 0 ? true : false;
        adobeMediaName = isLive ? "Live:"+myPlayer.mediainfo.name : myPlayer.mediainfo.name;
        tmAFLW = /^aflw/i.test(myPlayer.mediainfo.custom_fields.competition); //check is aflw or afl    

        //when live streaming append the matchname from the datalayer // may need to be fixed up
        if (getSafe(()=>dataLayer.filter(function(obj) {
            return obj.event === 'matchView'
        })[0].matchName, false)) {
            metadata["title"] = mediaName + " - " + dataLayer.filter(function(obj) {
                return obj.event === 'matchView'
            })[0].matchName;
        }

        //when unily grab the page title as well
        var top_url = top_url = (window.location != window.parent.location) ? document.referrer != "" ? document.referrer : document.location.href : document.location.href;
        var t_test = new URL(top_url);

        if (/telstra\.unily\.com/.test(top_url) && t_test.pathname.length > 0) {
            metadata["title"] = mediaName + " [" + t_test.pathname + "]";
        }

        //custom 
        metadata["assetID"] = myPlayer.mediainfo.id;
        metadata["channel"] = getHostName();
        metadata["playerName"] = getPlayerName();

        metadata["adobeViewerID"] = viewerID;

        //createConvivaSession
        userData = {}
        userData["viewerID"] = viewerID;
        userData["hostname"] = getHostName();

        //add all custom fields 
        Object.assign(metadata, myPlayer.mediainfo.customFields);
        Object.assign(metadata, userData);

        log(JSON.stringify(metadata), prod)
}


myPlayer.on('ima3-ads-manager-loaded', function(event) {
  log("++ima3-ads-manager-loaded", prod); 
  //myPlayer.ima3.toggleLogger(!prod);
               
});
            
myPlayer.on('loadstart', function() {
    log("++loadstart * update *  " + myPlayer.mediainfo.name, prod);
    //if(!prod)myPlayer.ima3.settings.serverUrl = 'https://pubads.g.doubleclick.net/gampad/ads?iu=/21775744923/external/vmap_ad_samples&sz=640x480&cust_params=sample_ar%3Dpremidpostoptimizedpod&ciu_szs=300x250&gdfp_req=1&ad_rule=1&output=vmap&unviewed_position_start=1&env=vp&impl=s&cmsid=496&vid=short_onecue&correlator=';        
    //if(!prod)myPlayer.ima3.settings.serverUrl = 'https://pubads.g.doubleclick.net/gampad/ads?iu=/7414/TEL.AFL/cx-on-stream&sz=640x480&vid_d=600&allcues=60000,90000,110000&cust_params=po%3D0000501303&keyword%3DxAFLTestingx&ciu_szs=300x250&gdfp_req=1&ad_rule=1&output=vmap&unviewed_position_start=1&env=vp&impl=s&cmsid=496&vid=short_onecue&correlator=';        
    if(!prod)myPlayer.ima3.settings.serverUrl = 'https://kamalsingh2024.github.io/adobelaunch/Pre-roll.xml?sz=640x480&iu=/7414/TEL.AFL/cx-on-stream&impl=s&gdfp_req=1&env=vp&output=xml_vast2&unviewed_position_start=1&url=[referrer_url]&description_url=[description_url]&correlator=[timestamp]&ad_rule=1&cmsid=2513968&vid=[mediainfo.id]';
    buildMetadataAdobe();

    //kill all old sessions                
    //if (integration) {
       //integration.ConvivaIma3Integration(myPlayer,convivaConfigs,metadata);
    //integration = null;
   // }
    //start new sessions
    //   integration = new ConvivaIma3Integration(myPlayer,convivaConfigs,metadata );
                
    firstPlay = true;
    //Check that metadata is loaded
    if (myPlayer.mediainfo.name) {
        isContentLoaded = true;
        //Initiate Adobe Analytics Media Module tracking && Conviva Analytics
    }
});

myPlayer.on('ads-request', function() {
    log("++ads-ad-request - " + myPlayer.mediainfo.name, prod);
    tmAdReq = true;
});

myPlayer.on('ads-ad-ended', function() {
    log("++ads-ad-ended - " + myPlayer.mediainfo.name, prod);
    tmAdPlay = true;
});

myPlayer.on('play', function() {
    log("++play - " + myPlayer.mediainfo.name, prod);
    isPlaying = true;
    if (firstPlay) {
        log("++ First Play via played - *****Video Start**** - " + myPlayer.mediainfo.name, prod);
        firstPlay = false;
        isContentLoaded = true;
        ABDMediaOPEN();
        //integration = new NewConvivaIntegration(myPlayer, convivaConfigs, metadata);
        //convivaHelper.createConvivaSession(userData, metadata);
        //convivaHelper.attachPlayerToSession();


    }

    if (videoEnd) {
        //user has restarted video from end 
        videoEnd = false;
        isContentLoaded = false;
        ABDMediaOPEN();
        
    }

    //Check if metadata loaded - needed to make sure correct video media module instance is tracked.
    if (isContentLoaded) {
        currentTime = myPlayer.currentTime();
        //Play Adobe Analytics Media module from the current head.
        if (adobe && currentTime != 0 ) { //resume from pause
            s.eVar63 = adobeMediaName;
            s.Media.play(adobeMediaName, currentTime);

        }

    }
});

myPlayer.on("playing", function() {
    log("++ In Playing ++", prod)

    //convivaHelper.setPlayerWidthAndHeight(myPlayer.videoWidth(), myPlayer.videoHeight());
    //convivaHelper.updatePlayerState("playing");
                
});

myPlayer.on('pause', function() {
    isPlaying = false;
    log("++paused - " + myPlayer.mediainfo.name, prod);
    //Check if metadata loaded - needed to make sure correct video media module instance is tracked.
    if (isContentLoaded) {
        currentTime = myPlayer.currentTime();
        //Play Adobe Analytics Media module from the current head.
        adobe && s.Media.stop(adobeMediaName, currentTime);
        //convivaHelper.updatePlayerState("pause");
    }
});

myPlayer.on('progress', function() {
    log("progressed - " + myPlayer.mediainfo.name, prod);

});

myPlayer.on('resize', function() {
    log("resized - " + myPlayer.mediainfo.name, prod);
});

myPlayer.on('seeked', function() {
    log("++seeked - " + myPlayer.mediainfo.name, prod);
    //Check if metadata loaded - needed to make sure correct video media module instance is tracked.
    if (isContentLoaded) {
        currentTime = myPlayer.currentTime();
        //Play Adobe Analytics Media module from the current head.
        adobe && s.Media.play(adobeMediaName, currentTime);
        //convivaHelper.contentSeeked();
    }
});

myPlayer.on('seeking', function() {
    log("++seeking - " + myPlayer.mediainfo.name, prod);
    //Check if metadata loaded - needed to make sure correct video media module instance is tracked.
    if (isContentLoaded) {
        currentTime = myPlayer.currentTime();
        //Play Adobe Analytics Media module from the current head.
        adobe && s.Media.stop(adobeMediaName, currentTime);
    }
});

myPlayer.on('stalled', function() {
    log("++stalled - " + myPlayer.mediainfo.name, prod);
    //Check if metadata loaded - needed to make sure correct video media module instance is tracked.

});

myPlayer.on('timeupdate', function() {
    
    currentTime = myPlayer.currentTime();
    if(myPlayer.currentTime() % 5 <= 0.25)log("++timeupdate - " + currentTime, prod);

    // adobe keep alive if video is live
    if(adobe && isLive && currentTime != 0 &&  currentTime % 300 <= 0.25 ){
       log("++timeupdate - keep alive beacon " + currentTime, prod);
            s.Media.track(adobeMediaName, currentTime);
            s.Media.play(adobeMediaName, currentTime);

        }

    if (adobe && isPlaying && !tmAdBeacon && currentTime > 0) {

        //s.Media.trackVars+= ",contextData.tmAdReq,contextData.tmAdPlay"
        tmAdReq ? s.contextData['tmAdReq'] = "yes" : s.contextData['tmAdReq'] = "no";
        tmAdPlay ? s.contextData['tmAdPlay'] = "yes" : s.contextData['tmAdPlay'] = "no";
        tmAFLW ? s.contextData['tmAFLW'] = "yes" : s.contextData['tmAFLW'] = "no"; 
        s.contextData['tmIsCC'] = "";

        //s.tl();
        tmAdBeacon = true;
        log("++ In timeupdate and adreq adplay update ++ " + mediaName + " | " + videoDuration, prod);
        //Play Adobe Analytics Media module from beginning.
        s.Media.play(adobeMediaName, currentTime);
    }

    if(adobe && isPlaying && !tmCC && currentTime > 0 ) {

     var tracks = myPlayer.textTracks();

     for (var i = 0; i < tracks.length; i++) {
     var track = tracks[i];

     // Find the English captions track and mark it as "showing".
     if (track.kind === 'captions' && track.mode === 'showing') {
         //track.mode = 'showing';
         s.contextData['tmAdReq'] = "";
         s.contextData['tmAdPlay'] = "";
         s.contextData['tmAFLW'] = "";
         s.contextData['tmMidroll']= "";
                     
         s.contextData['tmIsCC'] = "yes";
         log("++ In timeupdate and CC turned on by user ++ " + mediaName + " | " + videoDuration, prod);
         tmCC = true;
          //send info to adobe 
          s.Media.track(adobeMediaName, currentTime);
          s.Media.play(adobeMediaName, currentTime);
       }
      }
    }

});

myPlayer.on('volumechange', function() {
    log("++volumechange - " + myPlayer.mediainfo.name, prod);
});

myPlayer.on('waiting', function() {
    log("++waiting - " + myPlayer.mediainfo.name, prod);
    if (isContentLoaded) {//convivaHelper.updatePlayerState("waiting");
    }
});

myPlayer.on('durationchange', function() {
    log("++durationchange - " + myPlayer.mediainfo.name, prod);
     myPlayer.mediainfo.duration > myPlayer.duration() ? myPlayer.mediainfo.duration = myPlayer.mediainfo.duration : myPlayer.mediainfo.duration = myPlayer.duration()
});

myPlayer.on('ended', function() {
    log("++ended - " + myPlayer.mediainfo.name, prod);
    //Check if metadata loaded - needed to make sure correct video media module instance is tracked.
    if (isContentLoaded) {
        currentTime = myPlayer.currentTime();
        //Play Adobe Analytics Media module from the current head.
        adobe && s.Media.stop(adobeMediaName, currentTime);
        adobe && s.Media.close(adobeMediaName);
        //convivaHelper.updatePlayerState("ended");
        //convivaHelper.cleanupConvivaSession();
        resetVariables();
    }
});
            
myPlayer.on('abort', function() {
    log("++abort - " + myPlayer.mediainfo.name, prod);
    //Check if metadata loaded - needed to make sure correct video media module instance is tracked.
        currentTime = myPlayer.currentTime();
        //Play Adobe Analytics Media module from the current head.
        adobe && s.Media.stop(adobeMediaName, currentTime);
        adobe && s.Media.close(adobeMediaName);
        //convivaHelper.updatePlayerState("ended");
        //convivaHelper.cleanupConvivaSession();
        resetVariables();
});                            

myPlayer.on("bc-catalog-error", function() {
    log("++ In Catalog Error ++", prod);
    var error = myPlayer.error_;
    var code = error.code;
    var message = error.message;
    var type = error.type;
    //convivaHelper.contentReportError(code + ": " + message + " " + type, Conviva.Client.ErrorSeverity.FATAL);
    //convivaHelper.cleanupConvivaSession();
});

myPlayer.on("error", function() {
    log("++ In Error ++", prod);
    var error = myPlayer.error_;
    var code = error.code;
    var message = error.message;
    var type = error.type;
    //convivaHelper.contentReportError(code + ": " + message + " " + type, Conviva.Client.ErrorSeverity.FATAL);
    //convivaHelper.cleanupConvivaSession();
});

myPlayer.on('fullscreenchange', function() {
    log("++fullscreenchange - " + myPlayer.mediainfo.name, prod);
});

myPlayer.on('loadedalldata', function() {
    log("++loadedalldata - " + myPlayer.mediainfo.name, prod);

});

myPlayer.on('loadeddata', function() {
    log("++loadeddata ++ " + myPlayer.mediainfo.name, prod);

    //integration.collectContentMetdata();
    //    adobe && s.Media.stop(adobeMediaName, currentTime);
    //    adobe && s.Media.close(adobeMediaName);


});

myPlayer.on('loadedmetadata', function() {
    log("++loadedmetadata - " + myPlayer.mediainfo.name, prod);
    if (myPlayer.mediainfo.name) {
        isContentLoaded = true;
        //Initiate Adobe Analytics Media Module tracking && Conviva Analytics
        //ABDMediaOPEN();
        //integration = new NewConvivaIntegration(myPlayer,convivaConfigs,metadata);
    }
});
}