/*! (C) 2024 Conviva, Inc. All rights reserved. Confidential and proprietary. */
videojs.registerPlugin("convivaPlugin", function(n) {
    n.i = "BrightcovePlayer",
    n.o = (bc || videojs).VERSION,
    new convivaBcIntegration(this,n)
});
var convivaBcIntegration = function(n, i) {
    var u = this;
    function o(n, i) {
        (n || void 0 !== u.t) && (void 0 === u.v.playlist && (0 !== u.t || void 0 === u.t) || u.v.playlist && u.t !== u.v.playlist.currentItem()) && (u.u(i),
        u.l(i))
    }
    function t(n) {
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
    u.t = void 0,
    u.O = !1,
    u.M = !0,
    u.k = !1,
    u.P = !1,
    u.j = !1,
    u.R = null,
    u.S = null,
    u.T = !1,
    u.B = !1,
    u.q = !1,
    u.L = null,
    u.v.ready(function() {
        u.U(),
        u.F(),
        u.D(),
        u.v.on("loadstart", u.G),
        u.v.on("firstplay", u.J),
        u.v.on("play", u.J),
        u.v.on("playing", u.J),
        u.v.on("ended", u.H),
        u.v.on("abort", u.K),
        u.v.on("dispose", u.Y),
        u.v.on("error", u.W),
        u.v.on("aderror", u.W),
        u.v.on("contenterror", u.W),
        u.v.on("ima3-content-pause-requested", u.X),
        u.v.on("ima3-content-resume-requested", u.Z),
        u.v.on("ads-ad-started", u.$),
        u.v.on("ads-request", u.nn),
        u.v.on("adserror", u.on),
        u.v.on("adtimeout", u.on),
        u.v.on("ima3-hardtimeout", u.on),
        u.v.on("ima3error", u.on),
        u.v.on("ima3-log", u.on),
        u.v.on("ads-pod-started", u.X),
        u.v.on("ads-pod-ended", u.Z),
        u.v.on("ads-ad-skipped", u.en),
        u.v.on("ads-allpods-completed", u.tn),
        u.v.on("ads-ad-ended", u.an),
        u.v.on("ads-pause", u.vn),
        u.v.on("ads-play", u.rn),
        u.v.on("adsready", u.sn)
    }),
    u.U = function() {
        var n, i;
        u.h.customerKey ? (n = u.h.customerKey,
        i = {},
        u.h.serviceUrl || u.h.gatewayUrl || u.h.gateway_host ? i[Conviva.Constants.GATEWAY_URL] = u.h.serviceUrl || u.h.gatewayUrl || u.h.gateway_host : u.C("gatewayUrl is not present in the plugin configuration"),
        u.h.toggleTraces && (i[Conviva.Constants.LOG_LEVEL] = Conviva.Constants.LogLevel.DEBUG),
        Conviva.Analytics.init(n, null, i),
        Conviva.Analytics.setDeviceMetadata(u.cn()),
        u.R = new Conviva.Impl.Html5Logging,
        u.S = new Conviva.Impl.Html5Time) : u.C("CUSTOMER_KEY is not present in the plugin configuration!")
    }
    ,
    u.F = function() {
        null === u.p && (window.ConvivaVideoAnalytics = u.p = Conviva.Analytics.buildVideoAnalytics(),
        u.V ? u.V.un(u.v, u.p) : "function" == typeof videojsProxy && (u.V = new videojsProxy(u.v,null,u.p,Conviva,u.C,u.h)))
    }
    ,
    u.D = function() {
        var n = {};
        n[Conviva.Constants.MODULE_NAME] = "BCC",
        n[Conviva.Constants.MODULE_VERSION] = "4.5.3",
        "boolean" == typeof u.h.enableAdExperience && u.h.enableAdExperience && (u.g || (window.ConvivaAdAnalytics = u.g = Conviva.Analytics.buildAdAnalytics(u.p)),
        u.g.setAdInfo(n))
    }
    ,
    u.cn = function() {
        var n = {};
        return n[Conviva.Constants.DeviceMetadata.CATEGORY] = Conviva.Constants.DeviceCategory.WEB,
        n
    }
    ,
    u.G = function(n) {
        t(n),
        o(!1, n)
    }
    ,
    u.J = function(n) {
        t(n),
        o(!0, n)
    }
    ,
    u.dn = function(n) {
        t(n),
        o(!0, n)
    }
    ,
    u.W = function() {
        var n, i;
        void 0 !== arguments[0] && (t(arguments[0].type),
        o(!0, arguments[0].type),
        u.v) && (n = u.v.error(),
        i = u.v.errors.getAll(),
        n && n.code ? (u.C("MediaError: Type: " + arguments[0].type + "; [" + n.code + "]:" + i[n.code].type + " - " + n.message),
        u.p.reportPlaybackError("MediaError: Type: " + arguments[0].type + "; [" + n.code + "]:" + i[n.code].type + " - " + n.message, Conviva.Constants.ErrorSeverity.FATAL)) : void 0 !== arguments[1] && "string" == typeof arguments[1] && "" !== arguments[1] ? u.p.reportPlaybackError("MediaError: Type: " + arguments[0].type + " " + arguments[1], Conviva.Constants.ErrorSeverity.FATAL) : u.p.reportPlaybackError("MediaError: Type: " + arguments[0].type + " ", Conviva.Constants.ErrorSeverity.FATAL))
    }
    ,
    u.fn = function(n) {
        !0 === u.M && u.u(n),
        u.k = !0
    }
    ,
    u.K = function(n) {
        t(n),
        u.u(n),
        u.k = !0
    }
    ,
    u.H = function(n) {
        t(n),
        u.fn(n)
    }
    ,
    u.Y = function(n) {
        t(n),
        u.u(n),
        u.k = !0
    }
    ,
    u.tn = function(n) {
        t(n),
        !0 === u.k && u.u(n),
        u.M = !0
    }
    ,
    u.$ = function(n) {
        t(n),
        u.v && u.v.ima3 && u.v.ima3.currentAd && !u.v.ima3.currentAd.isLinear() || (u.F(),
        u.D(),
        u.p.setContentInfo({
            has_ads_started: "true"
        }),
        u.ln())
    }
    ,
    u.nn = function(n) {
        t(n),
        u.v && u.v.ima3 && u.v.ima3.currentAd && !u.v.ima3.currentAd.isLinear() || (u.F(),
        u.D(),
        u.p.setContentInfo({
            has_ads_requested: "true"
        }))
    }
    ,
    u.on = function(n) {
        t(n);
        var i = "ima3-log" === n.type && void 0 !== n.originalEvent && "function" == typeof n.originalEvent.getAdData && n.originalEvent.getAdData().adError;
        if ("ima3-log" !== n.type || i) {
            if (u.v && u.v.ima3 && u.v.ima3.currentAd && !u.v.ima3.currentAd.isLinear())
                return;
            u.F(),
            u.D();
            var o, e = {
                has_ads_error: "true"
            };
            u.h.toggleTraces && (e.adserrorevent = i ? n.originalEvent.getAdData().adError.getType() : n.type),
            u.p.setContentInfo(e),
            u.g && (e = {},
            i ? (n.originalEvent.getAdData().adError.getType() && (o = "Type: " + n.originalEvent.getAdData().adError.getType(),
            e[Conviva.Constants.ASSET_NAME] = n.originalEvent.getAdData().adError.getType()),
            n.originalEvent.getAdData().adError.getErrorCode() && (o ? o += ", Code: " + n.originalEvent.getAdData().adError.getErrorCode() : o = "Code: " + n.originalEvent.getAdData().adError.getErrorCode()),
            o ? o += ", Message: " + n.originalEvent.getAdData().adError.getMessage() : o = "Message: " + n.originalEvent.getAdData().adError.getMessage()) : (n.type && (o = "Type: " + n.type,
            e[Conviva.Constants.ASSET_NAME] = n.type),
            n.errorCode && (o ? o += ", Code: " + n.errorCode : o = "Code: " + n.errorCode),
            o ? o += ", Message: Ad Request Failed" : o = "Message: Ad Request Failed"),
            o = o || "Ad Request Failed",
            (i = {})[Conviva.Constants.FRAMEWORK_NAME] = "Brightcove IMA Plugin",
            i[Conviva.Constants.FRAMEWORK_VERSION] = "" + u.v.ima3.VERSION,
            u.g.setAdPlayerInfo(i),
            (i = u.Cn()) && void 0 !== i && (e[Conviva.Constants.IS_LIVE] = i),
            e["c3.ad.technology"] = "Client Side",
            u.P ? (!0 === u.j ? u.g.reportAdFailed(o) : u.g.reportAdFailed(o, e),
            u.j = !1) : (u.g.setAdInfo(e),
            u.L = o))
        }
        "adserror" === n.type && u.Z(n)
    }
    ,
    u.X = function(n) {
        var i;
        t(n),
        u.I || (u.C("Conviva Event Handler - - handlePodStarted"),
        u.T || (u.F(),
        u.D(),
        i = {
            has_pod_started: "true"
        },
        u.h.toggleTraces && (i.podstartedevent = n.type),
        u.p.setContentInfo(i),
        u.T = !0),
        u.p.reportAdBreakStarted(Conviva.Constants.AdType.CLIENT_SIDE, Conviva.Constants.AdPlayer.CONTENT, null),
        u.I = !0,
        u.M = !1,
        u.V.A = Conviva.Constants.PlayerState.UNKNOWN)
    }
    ,
    u.Z = function(n) {
        var i;
        t(n),
        u.I && (u.C("Conviva Event Handler - - handlePodEnded"),
        u.B || (i = {
            has_pod_ended: "true"
        },
        u.h.toggleTraces && (i.podendedevent = n.type),
        u.p.setContentInfo(i),
        u.B = !0),
        u.p.reportAdBreakEnded(),
        u.I = !1),
        u.an()
    }
    ,
    u.rn = function() {
        u.hn(),
        u.g && u.v && u.v.ima3 && u.v.ima3.currentAd && u.v.ima3.currentAd.isLinear() && u.g.reportAdMetric(Conviva.Constants.Playback.PLAYER_STATE, Conviva.Constants.PlayerState.PLAYING, "CONVIVA")
    }
    ,
    u.vn = function() {
        u.hn(),
        u.g && u.v && u.v.ima3 && u.v.ima3.currentAd && u.v.ima3.currentAd.isLinear() && u.g.reportAdMetric(Conviva.Constants.Playback.PLAYER_STATE, Conviva.Constants.PlayerState.PAUSED, "CONVIVA")
    }
    ,
    u.an = function() {
        u.v && u.v.ima3 && u.v.ima3.currentAd && !u.v.ima3.currentAd.isLinear() || (u.F(),
        u.p && u.p.setContentInfo({
            has_ads_ended: "true"
        }),
        u.g && (u.g.reportAdMetric(Conviva.Constants.Playback.PLAYER_STATE, Conviva.Constants.PlayerState.STOPPED, "CONVIVA"),
        u.g.reportAdEnded(),
        u.j = !1))
    }
    ,
    u.en = function() {
        u.v && u.v.ima3 && u.v.ima3.currentAd && !u.v.ima3.currentAd.isLinear() || (u.F(),
        u.p && u.p.setContentInfo({
            has_ads_skipped: "true"
        }),
        u.g && (u.g.reportAdMetric(Conviva.Constants.Playback.PLAYER_STATE, Conviva.Constants.PlayerState.STOPPED, "CONVIVA"),
        u.g.reportAdSkipped()))
    }
    ,
    u.sn = function() {
        if (google) {
            var n, i = [google.ima.AdEvent.Type.AD_BUFFERING, google.ima.AdEvent.Type.AD_PROGRESS];
            for (n in i)
                u.v.ima3.adsManager.addEventListener(i[n], u.pn, !1, u)
        }
    }
    ,
    u.pn = function(n) {
        u.v && u.v.ima3 && u.v.ima3.currentAd && u.v.ima3.currentAd.isLinear() && (google && n.type === google.ima.AdEvent.Type.AD_BUFFERING ? (u.hn(),
        u.q = !0,
        u.g && u.g.reportAdMetric(Conviva.Constants.Playback.PLAYER_STATE, Conviva.Constants.PlayerState.BUFFERING, "CONVIVA")) : google && n.type === google.ima.AdEvent.Type.AD_PROGRESS && (u.hn(),
        u.g && !u.q && u.g.reportAdMetric(Conviva.Constants.Playback.PLAYER_STATE, Conviva.Constants.PlayerState.PLAYING, "CONVIVA"),
        u.q = !1))
    }
    ,
    u.l = function(n) {
        u.P || (u.P = !0,
        null === u.p && u.F(),
        u.p.reportPlaybackRequested(u.gn(n)),
        u.C("Conviva Session Start Event=" + n.type),
        u._ = !0,
        u.k = !1,
        void 0 !== u.v.playlist ? u.t = u.v.playlist.currentItem() : u.t = 0,
        u.L && u.g && u.g.reportAdFailed(u.L),
        u.L = null)
    }
    ,
    u.ln = function() {
        var n;
        u.g && u.v && u.v.ima3 && u.v.ima3.currentAd && u.v.ima3.currentAd.isLinear() && !u.j && ((n = {})[Conviva.Constants.FRAMEWORK_NAME] = "Brightcove IMA Plugin",
        n[Conviva.Constants.FRAMEWORK_VERSION] = "" + u.v.ima3.VERSION,
        u.g.setAdPlayerInfo(n),
        n = u.Vn(),
        u.g.reportAdStarted(n),
        u.j = !0,
        u.g.reportAdMetric(Conviva.Constants.Playback.RESOLUTION, u.v.ima3.currentAd.getVastMediaWidth(), u.v.ima3.currentAd.getVastMediaHeight(), "CONVIVA"),
        u.g.reportAdMetric(Conviva.Constants.Playback.BITRATE, u.v.ima3.currentAd.getVastMediaBitrate(), "CONVIVA"),
        u.v.ads.ad.currentTime <= 0) && u.g.reportAdMetric(Conviva.Constants.Playback.PLAYER_STATE, Conviva.Constants.PlayerState.BUFFERING, "Conviva")
    }
    ,
    u.hn = function() {
        var n;
        u.g && u.v && u.v.ima3 && u.v.ima3.currentAd && u.v.ima3.currentAd.isLinear() && (n = u.v.ads.ad.currentTime) < u.v.ads.ad.duration && (u.g.reportAdMetric(Conviva.Constants.Playback.PLAY_HEAD_TIME, 1e3 * n, "CONVIVA"),
        u.g.reportAdMetric(Conviva.Constants.Playback.RESOLUTION, u.v.ima3.currentAd.getVastMediaWidth(), u.v.ima3.currentAd.getVastMediaHeight(), "CONVIVA"),
        u.g.reportAdMetric(Conviva.Constants.Playback.BITRATE, u.v.ima3.currentAd.getVastMediaBitrate(), "CONVIVA"))
    }
    ,
    u.Vn = function() {
        var n, i, o, e = {}, t = (u.v && u.v.ima3 && u.v.ima3.currentAd && ((t = u.v.ima3.currentAd).getMediaUrl() && (e[Conviva.Constants.STREAM_URL] = t.getMediaUrl()),
        t.getTitle() && (e[Conviva.Constants.ASSET_NAME] = t.getTitle()),
        t.getDuration() && 0 < t.getDuration() && (e[Conviva.Constants.DURATION] = t.getDuration()),
        (o = u.Cn()) && void 0 !== o && (e[Conviva.Constants.IS_LIVE] = o),
        e["c3.ad.system"] = t.getAdSystem() ? "" + t.getAdSystem() : "NA",
        e["c3.ad.isSlate"] = "" + !1,
        e["c3.ad.mediaFileApiFramework"] = t.getApiFramework() ? "" + t.getApiFramework() : "NA",
        e["c3.ad.creativeId"] = t.getCreativeId() ? "" + t.getCreativeId() : "NA",
        o = t.getWrapperAdIds() && 0 !== t.getWrapperAdIds().length ? (o = t.getWrapperAdIds().length,
        n = t.getWrapperAdSystems()[o - 1],
        i = t.getWrapperAdIds()[o - 1],
        t.getWrapperCreativeIds()[o - 1]) : (n = t.getAdSystem(),
        i = t.getAdId(),
        t.getCreativeId()),
        e["c3.ad.firstAdSystem"] = n ? "" + n : "NA",
        e["c3.ad.firstAdId"] = i ? "" + i : "NA",
        e["c3.ad.firstCreativeId"] = o ? "" + o : "NA"),
        e["c3.ad.technology"] = "Client Side",
        e["c3.ad.id"] = u.v && u.v.ads && u.v.ads.ad && u.v.ads.ad.id ? "" + u.v.ads.ad.id : "NA",
        u.v && u.v.ads && u.v.ads.ad && u.v.ads.ad.type ? "" + u.v.ads.ad.type : "NA");
        return e["c3.ad.position"] = "PREROLL" == t ? "Pre-roll" : "MIDROLL" == t ? "Mid-roll" : "POSTROLL" == t ? "Post-roll" : t,
        e
    }
    ,
    u.gn = function(n) {
        var i, o = {}, e = u.h.tags, t = u.h.convivatags;
        if ("undefined" != typeof Conviva && Conviva) {
            var a, v = {};
            if (v[Conviva.Constants.FRAMEWORK_NAME] = u.h.i,
            v[Conviva.Constants.FRAMEWORK_VERSION] = u.h.o,
            u.p.setPlayerInfo(v),
            v = "",
            (i = (a = u.v.playlist && u.v.playlist() && 0 < u.v.playlist().length ? u.v.playlist()[u.v.playlist.currentItem()] : u.v.mediainfo) && (a.custom_fields || a.customFields) ? a.custom_fields || a.customFields : i) && (i.assetName || i.assetname) ? v = i.assetName || i.assetname : (a.name && (v = a.name),
            a.id && (v ? v += " - " + a.id : v = a.id,
            o.ID = a.id)),
            !v && u.h && u.h.assetName && (v = u.h.assetName),
            o[Conviva.Constants.ASSET_NAME] = v,
            v = "",
            i && (i.viewerId || i.viewerid) && (v = i.viewerId || i.viewerid,
            o[Conviva.Constants.VIEWER_ID] = v),
            !v && u.h.viewerId && (o[Conviva.Constants.VIEWER_ID] = u.h.viewerId),
            u.h.playerName && (o[Conviva.Constants.PLAYER_NAME] = u.h.playerName),
            v = "",
            i && (i.defaultReportingResource || i.defaultreportingresource) && (v = i.defaultReportingResource || i.defaultreportingresource,
            o[Conviva.Constants.DEFAULT_RESOURCE] = v),
            !v && u.h.defaultReportingResource && (o[Conviva.Constants.DEFAULT_RESOURCE] = u.h.defaultReportingResource),
            v = "",
            i && (i.encodedFramerate || i.encodedframerate) && (v = i.encodedFramerate || i.encodedframerate,
            o[Conviva.Constants.ENCODED_FRAMERATE] = parseInt(v, 10)),
            !v && u.h.encodedFramerate && (o[Conviva.Constants.ENCODED_FRAMERATE] = parseInt(u.h.encodedFramerate, 10)),
            a && 0 < a.duration && (o[Conviva.Constants.DURATION] = a.duration),
            (v = u.Cn()) && void 0 !== v && (o[Conviva.Constants.IS_LIVE] = v),
            "function" == typeof u.v.currentSrc && (o[Conviva.Constants.STREAM_URL] = u.v.currentSrc()),
            e)
                for (var r in e)
                    o[r] = e[r];
            if (t) {
                var s = t.split(",");
                if (s && i)
                    for (var c = 0; c < s.length; c++)
                        Object.prototype.hasOwnProperty.call(i, s[c]) && (o[(n => {
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
                        }
                        )(s[c])] = i[s[c]])
            }
        }
        return u.h.toggleTraces && (o.sessionStartEvent = n.type,
        u.v) && u.v.playlist && "function" == typeof u.v.playlist.currentItem && (o.currentItem = u.v.playlist.currentItem().toString()),
        window && window.location && window.location.href && (o.href = window.location.href),
        o
    }
    ,
    u.Cn = function() {
        var n, i = u.v.playlist && u.v.playlist() && 0 < u.v.playlist().length ? u.v.playlist()[u.v.playlist.currentItem()] : u.v.mediainfo, o = "", e = null;
        return (n = i && (i.custom_fields || i.customFields) ? i.custom_fields || i.customFields : n) && (n.isLive || n.islive) ? "true" === (o = n.isLive || n.islive).toLowerCase() ? e = Conviva.Constants.StreamType.LIVE : "false" === o.toLowerCase() && (e = Conviva.Constants.StreamType.VOD) : i && 0 < i.duration && (o = "false",
        e = Conviva.Constants.StreamType.VOD),
        e = o || void 0 === u.h.isLive ? e : u.h.isLive ? Conviva.Constants.StreamType.LIVE : Conviva.Constants.StreamType.VOD
    }
    ,
    u.C = function(n) {
        var i;
        u.h.toggleTraces && u.R && u.S && (i = (u.S.getEpochTimeMs() / 1e3).toFixed(3).toString(),
        u.R.consoleLog("[Conviva] [" + i + "] [DEBUG] [SDK] [BrightcoveProxy] " + n, Conviva.SystemSettings.LogLevel.DEBUG))
    }
    ,
    u.u = function(n) {
        var i;
        u.p && (u.C("Brightcove Plugin end current item monitoring"),
        u.h.toggleTraces && u._ && ((i = {}).sessionEndEvent = n.type,
        u.p.setContentInfo(i),
        u.C("Conviva Session End Event=" + n.type)),
        u.g && (u.g.reportAdEnded(),
        u.j = !1),
        u.p.reportPlaybackEnded(),
        u.V.cleanup(),
        u.g && (u.g.release(),
        window.ConvivaAdAnalytics = u.g = null),
        u.p.release(),
        window.ConvivaVideoAnalytics = u.p = null,
        u.I = !1,
        u._ = !1,
        u.t = void 0,
        u.O = !1,
        u.M = !0,
        u.k = !1,
        u.P = !1,
        u.T = !1,
        u.B = !1,
        u.L = null)
    }
}
  , videojsProxy = function(n, i, o, C) {
    var h = this
      , a = (h.Nn = [],
    h.yn = 0,
    h.mn = 0,
    h.An = !1,
    "");
    function e() {
        var n = h.In.audioTracks();
        if (null !== n)
            for (var i = 0; i < n.length; i++) {
                var o = n[i];
                if (o.enabled)
                    return "" !== o.label && "" !== o.language ? a = "[" + o.language + "]:" + o.label : "" !== o.label && "" === o.language ? a = o.label : "" === o.label && "" !== o.language && (a = o.language),
                    void (h._n !== a && (h._n = a,
                    h.p.reportPlaybackMetric(C.Constants.Playback.AUDIO_LANGUAGE, h._n, "CONVIVA"),
                    h.C(">>>>>>>>>>>> received Audio langauge " + h._n)))
            }
    }
    function t() {
        if (null !== h.In) {
            var n = h.In.textTracks()
              , i = !0
              , o = !0;
            if (n)
                for (var e = 0; e < n.length; e++) {
                    var t = n[e];
                    if ("showing" === t.mode)
                        return "subtitles" === t.kind && ("" !== t.label && "" !== t.language ? a = "[" + t.language + "]:" + t.label : "" !== t.label && "" === t.language ? a = t.label : "" === t.label && "" !== t.language && (a = t.language),
                        h.On = a,
                        h.p.reportPlaybackMetric(C.Constants.Playback.SUBTITLES_LANGUAGE, h.On, "CONVIVA"),
                        h.C("received subtitle changed event: " + h.On),
                        i = !1),
                        void ("captions" === t.kind && ("" !== t.label && "" !== t.language ? a = "[" + t.language + "]:" + t.label : "" !== t.label && "" === t.language ? a = t.label : "" === t.label && "" !== t.language && (a = t.language),
                        h.bn = a,
                        h.p.reportPlaybackMetric(C.Constants.Playback.CLOSED_CAPTIONS_LANGUAGE, h.bn, "CONVIVA"),
                        h.C("received caption changed event: " + h.bn),
                        o = !1))
                }
            if (i && h.On && "off" !== h.On) {
                if (h.p.getAdType() === C.Constants.AdType.CLIENT_SIDE)
                    return;
                h.On = "off",
                h.p.reportPlaybackMetric(C.Constants.Playback.SUBTITLES_LANGUAGE, h.On, "CONVIVA"),
                h.C("Subtitle track selected :: " + h.On)
            }
            o && h.bn && "off" !== h.bn && h.p.getAdType() !== C.Constants.AdType.CLIENT_SIDE && (h.bn = "off",
            h.p.reportPlaybackMetric(C.Constants.Playback.CLOSED_CAPTIONS_LANGUAGE, h.bn, "CONVIVA"),
            h.C("Caption track selected :: " + h.bn))
        }
    }
    this.N = -1,
    this.m = -1,
    this.A = C.Constants.PlayerState.UNKNOWN,
    this._ = !1,
    this.wn = 0,
    this.Mn = 0,
    this.kn = -1,
    this.Pn = "",
    this.En = null,
    this.jn = !1,
    this._n = "",
    this.bn = "",
    this.On = "",
    this.Rn = !1,
    h.Sn = !1,
    this.Tn = function(n, i, o) {
        void 0 === o && (o = h.In),
        h.Bn.push([n, i, o]),
        o.on(n, i)
    }
    ,
    this.xn = function(n, i, o) {
        (o = void 0 === o ? h.In : o).off(n, i)
    }
    ,
    this.qn = function() {
        h.Tn("onContentPauseRequested", function(n) {
            h.C("onContentPauseRequested", n)
        }),
        h.Tn("onContentResumeRequested", function(n) {
            h.C("onContentResumeRequested", n)
        }),
        h.Tn("abort", function(n) {
            h.C("abort", n)
        }),
        h.Tn("loadstart", function(n) {
            h.C("loadstart", n);
            this.ima3.settings.serverUrl = 'https://kamalsingh2024.github.io/adobelaunch/Pre-roll.xml?sz=640x480&iu=/7414/TEL.AFL/cx-on-stream&impl=s&gdfp_req=1&env=vp&output=xml_vast2&unviewed_position_start=1&url=[referrer_url]&description_url=[description_url]&correlator=[timestamp]&ad_rule=1&cmsid=2513968&vid=[mediainfo.id]';
        }),
        h.Tn("firstplay", function(n) {
            h.C("firstplay", n),
            h.Ln(n)
        }),
        h.Tn("play", function(n) {
            h.C("play", n),
            h.Ln(n)
        }),
        h.Tn("ended", function(n) {
            h.C("ended", n),
            h.Un(C.Constants.PlayerState.STOPPED)
        }),
        h.Tn("pause", function(n) {
            h.C("pause", n),
            h.Ln(n),
            h.Un(C.Constants.PlayerState.PAUSED)
        }),
        h.Tn("playing", function(n) {
            h.C("playing", n),
            h.Ln(n),
            0 === h.In.currentTime() ? h.An = !0 : 0 < h.In.currentTime() && (h.An = !1)
        }),
        h.Tn("waiting", function(n) {
            h.C("waiting", n),
            h.Ln(n),
            h.Un(C.Constants.PlayerState.BUFFERING)
        }),
        h.Tn("timeupdate", function() {
            h.An && (h.yn++,
            h.A !== C.Constants.PlayerState.PLAYING) && h.In && !h.In.seeking() && h.Un(C.Constants.PlayerState.PLAYING)
        }),
        h.Tn("error", function(n) {
            h.Fn(n)
        }),
        h.Tn("contenterror", function(n) {
            h.Fn(n)
        }),
        h.Tn("aderror", function(n) {
            h.Fn(n)
        }),
        h.Tn("loadedmetadata", function(n) {
            h.C("loadedmetadata", n),
            h.Ln(n),
            h.Dn() || h.Gn()
        }),
        h.Tn("loadeddata", function(n) {
            h.C("loadeddata", n),
            h.Ln(n)
        }),
        h.Tn("durationchange", function(n) {
            h.C("durationchange", n),
            h.Ln(n)
        }),
        h.Tn("seeking", function(n) {
            h.C("seeking", n),
            h.Ln(n),
            h.isSeekStarted || (h.isSeekStarted = !0,
            h.p && h.p.reportPlaybackMetric(C.Constants.Playback.SEEK_STARTED, "CONVIVA")),
            h.An && h.A !== C.Constants.PlayerState.BUFFERING && (h.C("Adjusting Conviva player state to: BUFFERING"),
            h.Un(C.Constants.PlayerState.BUFFERING))
        }),
        h.Tn("seeked", function(n) {
            h.C("seeked", n),
            h.Ln(n),
            h.isSeekStarted = !1,
            h.p && h.p.reportPlaybackMetric(C.Constants.Playback.SEEK_ENDED, "CONVIVA")
        }),
        h.Tn("progress", function() {
            h.jn || h.Jn(),
            h.Rn || h.Hn(),
            h.Sn || h.Kn()
        }),
        h.Tn("stalled", function() {}),
        h.Tn("resize", function() {
            var n, i;
            !h.Dn() && h.jn || h.Jn(),
            "function" == typeof h.In.videoWidth && "function" == typeof h.In.videoHeight && (n = h.In.videoWidth(),
            i = h.In.videoHeight(),
            !isNaN(n) && 0 < n && n !== h.N || !isNaN(i) && 0 < i && i !== h.m) && (h.N = n,
            h.m = i,
            h.p.reportPlaybackMetric(C.Constants.Playback.RESOLUTION, n, i, "CONVIVA"))
        })
    }
    ,
    this.Hn = function() {
        var n;
        h.Rn || ((n = h.In.audioTracks()) && e(),
        n.addEventListener("change", function() {
            e()
        }),
        !h.Rn && 0 < n.length && (h.Rn = !0))
    }
    ,
    this.Kn = function() {
        var n;
        h.Sn || (h.Yn = !1,
        h.zn = !1,
        (n = h.In.textTracks()) && t(),
        n.addEventListener("change", function() {
            t()
        }),
        h.Sn = !0)
    }
    ,
    this.Gn = function() {
        if (!h.jn) {
            var n, i = h.In.textTracks();
            if (i)
                for (var o = 0; o < i.length; o++)
                    "segment-metadata" === i[o].label && (n = i[o]);
            n && (n.on("cuechange", h.Wn),
            h.jn = !0)
        }
    }
    ,
    this.Qn = function() {
        var n, i = h.In.textTracks();
        if (i)
            for (var o = 0; o < i.length; o++)
                "segment-metadata" === i[o].label && (n = i[o]);
        n && (n.off("cuechange", h.Wn),
        h.jn = !1)
    }
    ,
    this.Wn = function() {
        var n = this.activeCues[0];
        if (n && n.value && n.value.bandwidth && h.p && h.A !== C.Constants.PlayerState.UNKNOWN) {
            var i = 0
              , o = 0
              , e = n.value.bandwidth
              , t = h.In;
            if (t) {
                var a, v, r = t.tech(!0);
                if (r)
                    if (r.vhs && r.vhs.playlists && r.vhs.playlists.media ? (v = r.vhs.playlists,
                    d = r.vhs.playlists.media()) : r.hls && r.hls.playlists && r.hls.playlists.media && (v = r.hls.playlists,
                    d = r.hls.playlists.media()),
                    d && d.attributes) {
                        if (d.attributes["AVERAGE-BANDWIDTH"] && (o = parseInt(d.attributes["AVERAGE-BANDWIDTH"], 10)),
                        d.attributes.BANDWIDTH) {
                            var s = t.audioTracks();
                            if (s && 0 < s.length)
                                for (var c = 0; c < s.length; c++) {
                                    var u = s[c];
                                    if (u.enabled) {
                                        a = u;
                                        break
                                    }
                                }
                        }
                        a && d.attributes.AUDIO && (v && (v.master ? f = v.master : v.main && (f = v.main)),
                        f) && f.mediaGroups && f.mediaGroups.AUDIO && (r = f.mediaGroups.AUDIO[d.attributes.AUDIO]) && (t = r[a.id]) && t.playlists && t.playlists[0] && (v = t.playlists[0].attributes) && v.BANDWIDTH && (i = v.BANDWIDTH)
                    }
            }
            var d, f = Math.round((e + i) / 1e3);
            f !== h.wn && (h.wn = f,
            h.p.reportPlaybackMetric(C.Constants.Playback.BITRATE, h.wn, "CONVIVA")),
            (o = Math.round(o / 1e3)) !== h.Mn && (h.Mn = o,
            h.p.reportPlaybackMetric(C.Constants.Playback.AVG_BITRATE, h.Mn, "CONVIVA")),
            n.value.resolution && n.value.resolution.width && n.value.resolution.height && (d = n.value.resolution.width,
            r = n.value.resolution.height,
            !isNaN(d) && 0 < d && d !== h.N || !isNaN(r) && 0 < r && r !== h.m) && (h.N = d,
            h.m = r,
            h.p.reportPlaybackMetric(C.Constants.Playback.RESOLUTION, d, r, "CONVIVA"))
        }
    }
    ,
    this.Jn = function() {
        var n = 0
          , i = 0
          , o = 0
          , e = 0;
        if (h.p && h.A !== C.Constants.PlayerState.UNKNOWN) {
            var t = h.In;
            if (t) {
                var a, v = t.tech({
                    IWillNotUseThisInPlugins: !0
                });
                if (v) {
                    if (v.vhs && v.vhs.playlists && v.vhs.playlists.media ? (f = v.vhs.playlists,
                    l = v.vhs.playlists.media()) : v.hls && v.hls.playlists && v.hls.playlists.media && (f = v.hls.playlists,
                    l = v.hls.playlists.media()),
                    l && l.attributes) {
                        l.attributes.BANDWIDTH && (o = l.attributes.BANDWIDTH),
                        l.attributes["AVERAGE-BANDWIDTH"] && (e = parseInt(l.attributes["AVERAGE-BANDWIDTH"], 10));
                        var r, s, c = t.audioTracks();
                        if (c && 0 < c.length)
                            for (var u = 0; u < c.length; u++) {
                                var d = c[u];
                                if (d.enabled) {
                                    r = d;
                                    break
                                }
                            }
                        return n = o + (i = r && l.attributes.AUDIO && (f && (f.master ? s = f.master : f.main && (s = f.main)),
                        s) && s.mediaGroups && s.mediaGroups.AUDIO && (f = s.mediaGroups.AUDIO[l.attributes.AUDIO]) && (s = f[r.id]) && s.playlists && s.playlists[0] && (l = s.playlists[0].attributes) && l.BANDWIDTH ? l.BANDWIDTH : i),
                        (s = Math.round(n / 1e3)) !== h.wn && (h.wn = s,
                        h.p.reportPlaybackMetric(C.Constants.Playback.BITRATE, h.wn, "CONVIVA")),
                        void ((e = Math.round(e / 1e3)) !== h.Mn && (h.Mn = e,
                        h.p.reportPlaybackMetric(C.Constants.Playback.AVG_BITRATE, h.Mn, "CONVIVA")))
                    }
                    var f = v.shakaPlayer_ || v.shaka_ || v.shakaPlayer;
                    if (f && "function" == typeof f.getStats) {
                        var l = f.getStats();
                        if (l && l.streamBandwidth)
                            return void ((s = Math.round(l.streamBandwidth / 1e3)) !== h.wn && (h.wn = s,
                            h.p.reportPlaybackMetric(C.Constants.Playback.BITRATE, h.wn, "CONVIVA")))
                    }
                    var e = v.hls_;
                    if (e && e.levels && 0 <= e.currentLevel) {
                        var f = e.levels[e.currentLevel];
                        if (f && f.bitrate)
                            return void ((s = Math.round(f.bitrate / 1e3)) !== h.wn && (h.wn = s,
                            h.p.reportPlaybackMetric(C.Constants.Playback.BITRATE, h.wn, "CONVIVA")))
                    }
                }
                t.mediaPlayer ? a = t.mediaPlayer : t.dash && t.dash.mediaPlayer && (a = t.dash.mediaPlayer),
                a && "function" == typeof a.getQualityFor && "function" == typeof a.getBitrateInfoListFor && (l = a.getQualityFor("audio"),
                v = a.getBitrateInfoListFor("audio"),
                void 0 !== l && v && v[l] && v[l].bitrate && (i = v[l].bitrate),
                e = a.getQualityFor("video"),
                f = a.getBitrateInfoListFor("video"),
                n = i + (o = void 0 !== e && f && f[e] && f[e].bitrate ? f[e].bitrate : o),
                (s = Math.round(n / 1e3)) !== h.wn) && (h.wn = s,
                h.p.reportPlaybackMetric(C.Constants.Playback.BITRATE, h.wn, "CONVIVA"))
            }
        }
    }
    ,
    this.getBufferLength = function() {
        var n = h.In.buffered();
        if ("number" != typeof n.length)
            return -1;
        for (var i = 0, o = 0; o < n.length; o++) {
            var e = n.start(o)
              , t = n.end(o);
            h.In.currentTime && e <= h.In.currentTime() && h.In.currentTime() < t && (i += t - h.In.currentTime())
        }
        return h.Xn = i,
        1e3 * h.Xn
    }
    ,
    this.Zn = function() {
        for (var n = 0; n < h.Bn.length; n++) {
            var i = h.Bn[n];
            h.xn(i[0], i[1], i[2])
        }
        h.Bn = []
    }
    ,
    this.$n = function() {
        h.In && (0 === h.In.readyState() || h.In.ended() ? h.Un(C.Constants.PlayerState.STOPPED) : (h.In.paused() || h.In.seeking()) && h.Un(C.Constants.PlayerState.PAUSED))
    }
    ,
    this.Un = function(n) {
        h.p && (h.A = n,
        h.p.reportPlaybackMetric(C.Constants.Playback.PLAYER_STATE, h.A, "CONVIVA"),
        h.ni(),
        h.ii = !0)
    }
    ,
    this.Ln = function(n) {
        if (h.p) {
            var i, o = !0, e = !0, t = (h.oi && ((i = h.In.playlist && h.In.playlist() && 0 < h.In.playlist().length ? h.In.playlist()[h.In.playlist.currentItem()] : h.In.mediainfo) && (((t = i.custom_fields || i.customFields) && (t.isLive || t.islive) || i.duration && 0 < i.duration && i.duration !== 1 / 0) && (o = !1),
            0 < i.duration) && (e = !1),
            h.h) && void 0 !== h.h.isLive && (o = !1),
            {});
            if (h.In && (e || o)) {
                var a, v = !1;
                switch (n.type) {
                case "play":
                case "waiting":
                    (void 0 === h.In.playlist || h.In.playlist && -1 === h.In.playlist.currentItem()) && (v = !0);
                    break;
                case "playing":
                case "seeking":
                case "seeked":
                case "pause":
                case "loadedmetadata":
                case "loadeddata":
                case "durationChange":
                    v = !0
                }
                v && ("function" == typeof h.In.duration && (a = h.In.duration(),
                h.In.duration() === 1 / 0 || isNaN(h.In.duration()) || (a = Math.round(h.In.duration()))),
                a) && a !== h.kn && ((h.kn = a) === 1 / 0 ? o && (t[C.Constants.IS_LIVE] = C.Constants.StreamType.LIVE) : 0 < a && (e && (t[C.Constants.DURATION] = a),
                o) && (t[C.Constants.IS_LIVE] = C.Constants.StreamType.VOD))
            }
            "function" == typeof h.In.currentSource && h.In.currentSource().src && (i = h.In.currentSource().src) !== h.Pn && (h.Pn = i,
            t[C.Constants.STREAM_URL] = i),
            "{}" !== JSON.stringify(t) && h.p.setContentInfo(t)
        }
    }
    ,
    this.ei = function() {
        var n;
        h.In && "function" == typeof h.In.getVideoPlaybackQuality && h.In.getVideoPlaybackQuality() && (n = h.In.getVideoPlaybackQuality().droppedVideoFrames) && 0 < n && n !== h.En && (h.En = n,
        h.p.reportPlaybackMetric(C.Constants.Playback.DROPPED_FRAMES_TOTAL, h.En, "CONVIVA"))
    }
    ,
    this.ti = function() {
        this.ai = 0,
        this.vi = 0,
        this.Xn = 0,
        this.ri = this.si.createTimer(this.ci, 100, "videojsProxy._poll()")
    }
    ,
    this.ci = function() {
        h.p && (h.p.getAdType() !== C.Constants.AdType.CLIENT_SIDE && h.In ? (void 0 !== h.In.currentTime() && h.p.reportPlaybackMetric(C.Constants.Playback.PLAY_HEAD_TIME, 1e3 * h.In.currentTime(), "CONVIVA"),
        h.p.reportPlaybackMetric(C.Constants.Playback.BUFFER_LENGTH, h.getBufferLength(), "CONVIVA"),
        h.ui(),
        h.di(),
        h.ei()) : h.A !== C.Constants.PlayerState.UNKNOWN && (h.A = C.Constants.PlayerState.UNKNOWN))
    }
    ,
    this.ui = function() {
        h.ai = h.vi,
        void 0 !== h.In.currentTime() && (h.vi = h.In.currentTime());
        var n, i = Date.now();
        0 < h.fi && i > h.fi && (n = (n = (n = h.vi - h.ai) < 0 ? 0 : n) / (i - h.fi) * 1e3,
        h.Nn.push(n)),
        h.fi = i,
        h.Nn.length > Math.max(8, 4) && h.Nn.shift()
    }
    ,
    this.di = function() {
        var n = h.Nn.length;
        if (n >= Math.min(4, 8)) {
            for (var i = 0, o = h.Nn.slice(), e = 0; e < o.length; e++)
                i += o[e];
            i /= n;
            var t = 1
              , a = .25
              , v = h.In.playbackRate();
            !isNaN(v) && v !== 1 / 0 && 0 < v && (t *= v = h.Dn() && v < .5 ? .5 : v,
            a *= v),
            h.A !== C.Constants.PlayerState.PLAYING && 4 <= n && Math.abs(i - t) < a ? h.In.seeking() || (h.C("Adjusting Conviva player state to: PLAYING"),
            h.Un(C.Constants.PlayerState.PLAYING)) : 8 <= n && 0 === i && (h.In.paused() ? h.A !== C.Constants.PlayerState.PAUSED && (h.C("Adjusting Conviva player state to: PAUSED"),
            h.Un(C.Constants.PlayerState.PAUSED)) : h.In.seeking() || h.A !== C.Constants.PlayerState.BUFFERING && (h.C("Adjusting Conviva player state to: BUFFERING"),
            h.Un(C.Constants.PlayerState.BUFFERING)))
        }
    }
    ,
    this.li = function() {
        this.ri && (this.ri(),
        this.ri = null)
    }
    ,
    this.ni = function() {
        h.Nn = [],
        h.ai = -1,
        h.fi = 0
    }
    ,
    this.Ci = function() {
        h.mn = 0,
        h.yn = 0
    }
    ,
    this.Fn = function(n) {
        h.C("error", n),
        h.In && h.In.error() && !h.oi && (n = "Error Type: " + n.type + ", Error Message: " + h.In.error().message + ", Error Code: " + h.In.error().code,
        h.p.reportPlaybackError(n, C.Constants.ErrorSeverity.FATAL))
    }
    ,
    this.C = function(n) {
        this.oi ? this.hi(n) : this.hi.log(n, C.SystemSettings.LogLevel.DEBUG)
    }
    ,
    this.un = function(n, i) {
        if (!n)
            throw new Error("bcVideojsProxy: player argument cannot be null.");
        h.In = n,
        h.p = i,
        h.C("bcVideojsProxy.update()"),
        0 === h.Bn.length && h.qn(),
        h.ni(),
        h.Ci(),
        h.li(),
        h.ti(),
        h.Rn = !1,
        h.Sn = !1,
        h._n = "",
        h.bn = "",
        h.On = "",
        h.zn = !1,
        h.Yn = !1,
        h.Kn(),
        h.Hn(),
        h.N = -1,
        h.m = -1,
        h.A = C.Constants.PlayerState.UNKNOWN,
        h.wn = 0,
        h.kn = -1,
        h.Pn = "",
        h.En = null,
        h.$n();
        var n = {};
        n[C.Constants.MODULE_NAME] = "BC",
        n[C.Constants.MODULE_VERSION] = "4.5.3",
        h.p.setContentInfo(n),
        this.Dn() || this.Gn(),
        !h.Dn() && h.jn || (h.Jn(),
        "function" == typeof h.In.videoWidth && "function" == typeof h.In.videoHeight && (i = h.In.videoWidth(),
        n = h.In.videoHeight(),
        !isNaN(i) && 0 < i && i !== h.N || !isNaN(n) && 0 < n && n !== h.m) && (h.N = i,
        h.m = n,
        h.p.reportPlaybackMetric(C.Constants.Playback.RESOLUTION, i, n, "CONVIVA")))
    }
    ,
    this.Dn = function() {
        return /apple/i.test(navigator.vendor)
    }
    ,
    function(n, i, o, e, t, a) {
        if (!n)
            throw new Error("videojsProxy: videoElement argument cannot be null.");
        var v = {};
        this.oi = !1,
        this.In = n,
        this.p = o,
        this.si = new e.Impl.Html5Timer,
        i ? (this.hi = i.buildLogger(),
        this.hi.setModuleName("videojsProxy"),
        v[e.Constants.MODULE_NAME] = "Video JS",
        (n = {})[e.Constants.FRAMEWORK_NAME] = "Video JS",
        "undefined" != typeof videojs && (n[e.Constants.FRAMEWORK_VERSION] = videojs.VERSION),
        this.p.setPlayerInfo(n)) : (this.hi = t,
        this.h = a,
        v[e.Constants.MODULE_NAME] = "BC",
        this.oi = !0),
        v[e.Constants.MODULE_VERSION] = "4.5.3",
        this.C("videojsProxy._constr()"),
        this.Bn = [],
        this.qn(),
        this.ni(),
        this.Ci(),
        this.ti(),
        this.Hn(),
        this.$n(),
        this.p.setContentInfo(v),
        this.Dn() || this.Gn(),
        !h.Dn() && h.jn || (h.Jn(),
        "function" == typeof h.In.videoWidth && "function" == typeof h.In.videoHeight && (o = h.In.videoWidth(),
        i = h.In.videoHeight(),
        !isNaN(o) && 0 < o && o !== h.N || !isNaN(i) && 0 < i && i !== h.m) && (h.N = o,
        h.m = i,
        h.p.reportPlaybackMetric(e.Constants.Playback.RESOLUTION, o, i, "CONVIVA")))
    }
    .apply(this, arguments),
    this.cleanup = function() {
        this.C("videojsProxy.cleanup()"),
        this.li(),
        this.Zn(),
        this.Dn() || this.Qn(),
        this.In = null,
        h.p = null,
        h.N = -1,
        h.m = -1,
        h.A = C.Constants.PlayerState.UNKNOWN,
        h.wn = 0,
        h.Mn = 0,
        h.kn = -1,
        h.Pn = "",
        h.En = null,
        h.jn = !1,
        h.Rn = !1,
        h.Sn = !1,
        h._n = "",
        h.bn = "",
        h.On = ""
    }
};
"undefined" != typeof ConvivaModule && (ConvivaModule.Impl = ConvivaModule.Impl || {},
ConvivaModule.Impl.VideojsProxy = videojsProxy);
