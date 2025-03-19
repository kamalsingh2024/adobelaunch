/*! (C) 2025 Conviva, Inc. All rights reserved. Confidential and proprietary. */
!function(t,n){"function"===typeof define&&define.amd?define(n):("object"===typeof exports||"object"===typeof module&&module.exports)&&(module.exports=n()),"undefined"===typeof t||!t||t.Conviva||t.ConvivaLoading||(t.ConvivaLoading=!0,t.Conviva=n(),delete t.ConvivaLoading)}(this,function(){var lt={};return function(){"use strict";var n,s,V,k,o,r,F,e,u,g,a,f,c,I,B,H,G,j,K,W,Y,x,h,i,l,q,w,X,J,d,v,E,_,R,Q,p,A,T,S,O,N,Z,z,C,$,tt,nt,y,it,et,st,m,ot,D,P,b,L,rt,ut,M,ht,at,U={};function ft(){var t,n="";for("-"===s&&r(n="-");s>="0"&&s<="9";)n+=s,r();if("."===s)for(n+=".";r()&&s>="0"&&s<="9";)n+=s;if("e"===s||"E"===s)for(n+=s,r(),"-"!==s&&"+"!==s||(n+=s,r());s>="0"&&s<="9";)n+=s,r();if(t=+n,!isNaN(t))return t;o("Bad number")}function t(t){return t<10?"0"+t:t}function ct(t){return E.lastIndex=0,E.test(t)?'"'+t.replace(E,function(t){var n=Q[t];return"string"===typeof n?n:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+t+'"'}g=lt.Constants={version:"4.7.13",CUSTOMER_KEY:"customerKey",GATEWAY_URL:"gatewayUrl",LOG_LEVEL:"logLevel",ASSET_NAME:"Conviva.assetName",PLAYER_NAME:"Conviva.applicationName",APPLICATION_VERSION:"c3.app.version",IS_LIVE:"Conviva.streamType",ENCODED_FRAMERATE:"Conviva.encodedFrameRate",DEFAULT_RESOURCE:"Conviva.defaultResource",STREAM_URL:"Conviva.streamUrl",VIEWER_ID:"Conviva.viewerId",DURATION:"Conviva.duration",UTM_TRACKING_URL:"c3.cm.utmTrackingUrl",POD_INDEX:"podIndex",POD_POSITION:"podPosition",POD_DURATION:"podDuration",AD_TYPE:"adType",MODULE_NAME:"Conviva.moduleName",MODULE_VERSION:"Conviva.moduleVersion",FRAMEWORK_NAME:"Conviva.frameworkName",FRAMEWORK_VERSION:"Conviva.frameworkVersion",i:"Constants not yet configured",o:"Invalid : Did you report playback ended?",u:"Invalid : Did you report ad playback ended?",h:"Player cannot be null",l:"PlaybackAnlytics already built",v:"PlaybackAnlytics not yet built",Playback:{BITRATE:"BITRATE",AVG_BITRATE:"AVG_BITRATE",PLAY_HEAD_TIME:"PLAY_HEAD_TIME",RESOLUTION:"RESOLUTION",BUFFER_LENGTH:"BUFFER_LENGTH",PLAYER_STATE:"PLAYER_STATE",RENDERED_FRAMERATE:"RENDERED_FRAMERATE",SEEK_STARTED:"SEEK_STARTED",SEEK_ENDED:"SEEK_ENDED",CDN_IP:"CDN_IP",DROPPED_FRAMES_TOTAL:"DROPPED_FRAMES_TOTAL",DROPPED_FRAMES_COUNT:"DROPPED_FRAMES_COUNT",AUDIO_LANGUAGE:"AUDIO_LANGUAGE",SUBTITLES_LANGUAGE:"SUBTITLES_LANGUAGE",CLOSED_CAPTIONS_LANGUAGE:"CLOSED_CAPTIONS_LANGUAGE"},Network:{SIGNAL_STRENGTH:"SIGNAL_STRENGTH",LINK_ENCRYPTION:"LINK_ENCRYPTION",CONNECTION_TYPE:"CONNECTION_TYPE"},ErrorSeverity:{FATAL:1,WARNING:0},NO_SESSION_KEY:-2,AdPosition:{PREROLL:"Pre-roll",MIDROLL:"Mid-roll",POSTROLL:"Post-roll"},AdPlayer:{CONTENT:"CONTENT",SEPARATE:"SEPARATE"},DeviceType:{DESKTOP:"DESKTOP",CONSOLE:"Console",SETTOP:"Settop",MOBILE:"Mobile",TABLET:"Tablet",SMARTTV:"SmartTV",VEHICLE:"Vehicle",OTHER:"Other"},AdType:{CLIENT_SIDE:"Client Side",SERVER_SIDE:"Server Side"},AdSlates:{BLACKOUT_SLATE:"Blackout slate",TECHNICAL_DIFFICULTIES_SLATE:"Technical Difficulties slate",COMMERCIAL_SLATE:"Commercial Break slate",OTHER_SLATE:"Other slate",VPAID:"VPAID",REGULAR:"Regular Ad"},AdServingType:{INLINE:"Inline",WRAPPER:"Wrapper"},DeviceCategory:{ANDROID_DEVICE:"AND",APPLE_DEVICE:"APL",CHROMECAST:"CHR",DESKTOP_APP:"DSKAPP",DEVICE_SIMULATOR:"SIMULATOR",LG_TV:"LGTV",NINTENDO:"NINTENDO",PLAYSTATION:"PS",ROKU:"RK",SAMSUNG_TV:"SAMSUNGTV",SMART_TV:"TV",SET_TOP_BOX:"STB",TIVO:"TIVO",WEB:"WEB",WINDOWS_DEVICE:"WIN",XBOX:"XB",KAIOS_DEVICE:"KAIOS",LINUX:"LNX"},LogLevel:{DEBUG:0,INFO:1,WARNING:2,ERROR:3,NONE:4},PlayerState:{STOPPED:"STOPPED",PLAYING:"PLAYING",BUFFERING:"BUFFERING",PAUSED:"PAUSED",UNKNOWN:"UNKNOWN",NOT_MONITORED:"NOT_MONITORED"},Events:{USER_WAIT_STARTED:"Conviva.UserWaitStarted",USER_WAIT_ENDED:"Conviva.UserWaitEnded",BUMPER_VIDEO_STARTED:"Conviva.BumperVideoStarted",BUMPER_VIDEO_ENDED:"Conviva.BumperVideoEnded",AD_REQUESTED:"Conviva.AdRequested",AD_RESPONSE:"Conviva.AdResponse",AD_SLOT_STARTED:"Conviva.SlotStarted",AD_ATTEMPTED:"Conviva.AdAttempted",AD_SLOT_ENDED:"Conviva.SlotEnded",AD_IMPRESSION_START:"Conviva.AdImpression",AD_START:"Conviva.AdStart",AD_FIRST_QUARTILE:"Conviva.AdFirstQuartile",AD_MID_QUARTILE:"Conviva.AdMidQuartile",AD_THIRD_QUARTILE:"Conviva.AdThirdQuartile",AD_COMPLETE:"Conviva.AdComplete",AD_END:"Conviva.AdEnd",AD_IMPRESSION_END:"Conviva.AdImpressionEnd",AD_SKIPPED:"Conviva.AdSkipped",AD_ERROR:"Conviva.AdError",AD_PROGRESS:"Conviva.AdProgress",AD_CLOSE:"Conviva.AdClose",CONTENT_PAUSED:"Conviva.PauseContent",CONTENT_RESUMED:"Conviva.ResumeContent",POD_START:"Conviva.PodStart",POD_END:"Conviva.PodEnd"},ErrorType:{ERROR_UNKNOWN:"ERROR_UNKNOWN",ERROR_IO:"ERROR_IO",ERROR_TIMEOUT:"ERROR_TIMEOUT",ERROR_NULL_ASSET:"ERROR_NULL_ASSET",ERROR_MISSING_PARAMETER:"ERROR_MISSING_PARAMETER",ERROR_NO_AD_AVAILABLE:"ERROR_NO_AD_AVAILABLE",ERROR_PARSE:"ERROR_PARSE",ERROR_INVALID_VALUE:"ERROR_INVALID_VALUE",ERROR_INVALID_SLOT:"ERROR_INVALID_SLOT",ERROR_3P_COMPONENT:"ERROR_3P_COMPONENT",ERROR_UNSUPPORTED_3P_FEATURE:"ERROR_UNSUPPORTED_3P_FEATURE",ERROR_DEVICE_LIMIT:"ERROR_DEVICE_LIMIT",ERROR_UNMATCHED_SLOT_SIZE:"ERROR_UNMATCHED_SLOT_SIZE"},StreamType:{UNKNOWN:"UNKNOWN",LIVE:"LIVE",VOD:"VOD"},CallbackFunctions:{CONSOLE_LOG:"consoleLog",MAKE_REQUEST:"makeRequest",SAVE_DATA:"saveData",LOAD_DATA:"loadData",GET_EPOCH_TIME_IN_MS:"getEpochTimeInMs",CREATE_TIMER:"createTimer",GENERATE_HASH:"generateHash",BASE64_ENCODE:"base64Encode"},DeviceMetadata:{BRAND:"DeviceBrand",MANUFACTURER:"DeviceManufacturer",MODEL:"DeviceModel",TYPE:"DeviceType",VERSION:"DeviceVersion",OS_NAME:"OperatingSystemName",OS_VERSION:"OperatingSystemVersion",CATEGORY:"DeviceCategory",SCREEN_RESOLUTION_WIDTH:"ScreenWidth",SCREEN_RESOLUTION_HEIGHT:"ScreenHeight",SCREEN_RESOLUTION_SCALE_FACTOR:"ScaleFactor"},AD_PRELOAD_FEATURE:"adPreloading",AD_TAG_URL:"adTagUrl",IMASDK_CONTENT_PLAYER:"imaMainContentPlayer",CONVIVA_AD_MODULE:"convivaAdModule",CONVIVA_MODULE:"convivaModule",MEDIA_ELEMENT:"mediaElement",APP_TRACKER_EVENT:{TYPE:"convivaVideoEvent",INIT:"c3.sdk.init",VIDEO_ATTEMPT:"c3.video.attempt",VIDEO_END:"c3.video.end",VIDEO_PLAY:"c3.video.play",VIDEO_PAUSE:"c3.video.pause",VIDEO_BUFFERING:"c3.video.buffering",VIDEO_ERROR:"c3.video.error",SDK_CUSTOM_EVENT:"c3.sdk.custom_event",VIDEO_CUSTOM_EVENT:"c3.video.custom_event",AD_BREAK_START:"c3.ad.ad_break_start",AD_BREAK_END:"c3.ad.ad_break_end",VIDEO_METADATA_CHANGE:"c3.video.set_content_info",VIDEO_BITRATE_SWITCH:"c3.video.bitrate_switch"}},(a=lt.Client=function(){var h=this;this._=null,this.R=!1,this.version=a.version,this.p=null,this.A=null,this.T=null,this.S=-1,this.O=null,this.N=null,this.g=null,this.I=null,this.C=-1,this.m=!1,this.D={},this.P=function(){h.p},this.L={},this.M=null,this.U=null,this.V=null,this.k=function(){this.g.F("Client.makeIPV4IPV6GlobalSessions",function(){var t;h.I&&null!==(t=h.I.get(y.B))&&t!==N.H&&h.A&&((t=new c).custom["c3.IPV4IPV6GlobalSession"]="T",t.custom["c3.domain"]=h.O.G.indexOf(f.j)>-1?f.j:f.K,h.W=h.A.Y(t,null),(t=new c).custom["c3.IPV4IPV6GlobalSession"]="T",t.custom["c3.domain"]=h.O.q.indexOf(f.X)>-1?f.X:f.J,h.Z=h.A.Y(t,null))})},this.$=function(i){h.g.F("Client.updateConnectionType",function(){if(h.M=i,h.A){var t,n=h.A.tt();for(t in n)n[t].nt(i)}})},this.it=function(i){h.g.F("Client.updateLinkEncryption",function(){if(h.U=i,h.A){var t,n=h.A.tt();for(t in n)n[t].et(i)}})},this.ot=function(t){h.g.F("Client.updateSignalStrength",function(){h.V=t})},function(t,n,i,e){if(!(t instanceof f))throw new Error("clientSettings parameter should be an instance of ClientSettings.");if(!(n instanceof x))throw new Error("systemFactory parameter should be an instance of SystemFactory.");t.gatewayUrl!==f.rt+f.ut&&t.gatewayUrl!==f.ht+f.ut||(this.R=!0),e&&(this.version=e),this.O=t.ct(),this.T=n,this.T.lt("SDK",this.O,this.version),this.g=this.T.dt(this.version),this.g.F("Client.init",function(){if(h.I=h.T.vt(),h.I.Et(),h.C=h.I.get(y._t),-1!==h.C&&void 0!==h.C&&null!==h.C||(h.C=P.Rt()),h.A=h.T.At(h,h.O,h.I),i)for(var t in i)switch(t){case g.Network.CONNECTION_TYPE:h.$(i[t]);break;case g.Network.LINK_ENCRYPTION:h.it(i[t]);break;case g.Network.SIGNAL_STRENGTH:h.ot(i[t])}h.k()},function(t){throw new Error("Client constructor failed: "+t.message)})}.apply(this,arguments),this.release=function(){this.m||this.g.F("Client.release",function(){h.p,h.A.Tt(),h.A=null,h.S=-1,h.C=-1,h.g=null,h.O=null,h.N=null,h.T=null,h.m=!0})},this.createSession=function(t,n,i){var e=a.NO_SESSION_KEY;return this.m||(!t||t instanceof c)&&this.g.F("Client.createSession",function(){e=h.A.St(t,C.Nt.Ot,n,(i?g:h).version)}),e},this.createAdSession=function(i,e,s,o,r){var u=a.NO_SESSION_KEY;return this.m||(!e||e instanceof c)&&this.g.F("Client.createAdSession",function(){var t,n;e||(e=new c),m.gt(i)&&i!==a.NO_SESSION_KEY&&(t=h.A.It(i))&&(n=e.custom[g.APPLICATION_VERSION],t.wt&&t.wt.Ct&&(!e.viewerId&&t.wt.Ct.viewerId&&(e.viewerId=t.wt.Ct.viewerId),!e.applicationName&&t.wt.Ct.applicationName&&(e.applicationName=t.wt.Ct.applicationName),e.streamType===g.StreamType.UNKNOWN&&t.wt.Ct.streamType!==g.StreamType.UNKNOWN&&(e.streamType=t.wt.Ct.streamType),"undefined"!==typeof n&&n||"undefined"!==typeof(n=t.wt.Ct.custom[g.APPLICATION_VERSION])&&n&&(e.custom[g.APPLICATION_VERSION]=n)),e.custom["c3.csid"]=m.yt(t.C)),u=h.A.St(e,C.Nt.Dt,s,(o?g:h).version,r)}),u},this.reportError=function(n,i,e){this.m||!m.Pt(i)||e!==a.ErrorSeverity.FATAL&&e!==a.ErrorSeverity.WARNING||this.g.F("Client.reportError",function(){var t=h.A.It(n);t&&t.bt(i,e)})},this.updateContentMetadata=function(i,e){this.m||e instanceof c&&this.g.F("Client.updateContentMetadata",function(){var t,n=h.A.It(i);n&&(t=e.ct(),n.Lt(t))})},this.detachPlayer=function(n){this.m||this.g.F("Client.detachPlayer",function(){var t=h.A.It(n);t&&t.Mt()})},this.Ut=function(n){this.m||this.g.F("Client.offFocus",function(){var t=h.A.It(n);t&&t.Ut()})},this.attachPlayer=function(n,i){this.m||i instanceof I&&this.g.F("Client.attachPlayer",function(){var t=h.A.It(n);t&&t.Vt(i)})},this.kt=function(n){this.m||this.g.F("Client.onFocus",function(){var t=h.A.It(n);t&&t.kt()})},this.contentPreload=function(n){this.m||this.g.F("Client.contentPreload",function(){var t=h.A.It(n);t&&t.Ft()})},this.contentStart=function(n){this.m||this.g.F("Client.contentStart",function(){var t=h.A.It(n);t&&t.Bt()})},this.sendCustomEvent=function(i,e,s){this.m||m.Pt(e)&&(m.Ht(s),this.g.F("Client.sendCustomEvent",function(){i===a.NO_SESSION_KEY&&(h.S<0&&(t=new c,h.S=h.A.Y(t,null)),i=h.S);var t=m.Gt(s),n=h.A.jt(i);n&&n.Kt(e,t)}))},this.adStart=function(n,i,e,s){this.m||i!==a.AdStream.CONTENT&&i!==a.AdStream.SEPARATE||e!==a.AdPlayer.CONTENT&&e!==a.AdPlayer.SEPARATE||(s!==a.AdPosition.PREROLL&&s!==a.AdPosition.MIDROLL&&a.AdPosition.POSTROLL,this.g.F("Client.adStart",function(){var t=h.A.It(n);t&&t.Wt(i,e,s)}))},this.adEnd=function(n){this.m||this.g.F("Client.adEnd",function(){var t=h.A.It(n);t&&t.Yt()})},this.cleanupSession=function(t){this.m||t!==a.NO_SESSION_KEY&&this.g.F("Client.cleanupSession",function(){h.A.It(t)&&h.A.xt(t)})},this.getAttachedPlayer=function(n){var i=null;return this.m||n!==a.NO_SESSION_KEY&&this.g.F("Client.getAttachedPlayer",function(){var t=h.A.It(n);t&&(i=t.qt())}),i},this.isPlayerAttached=function(t){return!this.m&&null!==this.getAttachedPlayer(t)},this.getPlayerStateManager=function(t){if(this.m)throw new Error("This instance of Conviva.Client has been released.");return new I(this.T,(t?g:h).version)},this.releasePlayerStateManager=function(t){if(this.m)throw new Error("This instance of Conviva.Client has been released.");this.g.F("Client.releasePlayerStateManager",function(){t instanceof I&&t.release()})},this.Xt=function(){return this.O},this.getId=function(){return this.C},this.getSessionId=function(n){var i;return this.m?g.NO_SESSION_KEY:(i=null,this.g.F("Client.getSessionId",function(){var t=h.A.It(n);t&&(i=t.Jt())}),i)},this.getClientId=function(n){var i;return this.m?null:(i=null,this.g.F("Client.getClientId",function(){var t=h.A.It(n);t&&(i=t.Qt())}),i)},this.Zt=function(n,i,e){this.m||this.g.F("Client.updateCustomMetric",function(){var t=h.A.It(n);t&&t.Zt(i,e)})},this.setUniqueIdentifier=function(t,n){if(this.m)throw new Error("This instance of Conviva.Client has been released.");if(!t||"undefined"===typeof t||"{}"===JSON.stringify(t))throw new Error("Identifiers are not set. No action taken !!");for(var i in t)this.D[i]=t[i];n&&(this.P=n)},this.setUserPreferenceForDataCollection=function(t,n){if(this.m)throw new Error("This instance of Conviva.Client has been released.");if(!t||"undefined"===typeof t||"{}"===JSON.stringify(t))throw new Error("Identifiers are not set. No action taken !!");for(var i in t)"false"===t[i]?this.L[i]=n?y.$t.zt:y.$t.tn:this.L[i]=y.$t.nn},this.setUserPreferenceForDataDeletion=function(t){if(this.m)throw new Error("This instance of Conviva.Client has been released.");if(!t||"undefined"===typeof t||"{}"===JSON.stringify(t))throw new Error("Identifiers are not set. No action taken !!");for(var n in t)"true"===t[n]?this.L[n]=y.$t.en:this.L[n]=y.$t.nn},this.getConfig=function(){if(this.m)throw new Error("This instance of Conviva.Client has been released.");return this.I}}).version="4.7.13L",a.NO_SESSION_KEY=g.NO_SESSION_KEY,a.AdPosition={PREROLL:g.AdPosition.PREROLL,MIDROLL:g.AdPosition.MIDROLL,POSTROLL:g.AdPosition.POSTROLL},a.AdStream={CONTENT:g.AdPlayer.CONTENT,SEPARATE:g.AdPlayer.SEPARATE},a.AdPlayer={CONTENT:g.AdPlayer.CONTENT,SEPARATE:g.AdPlayer.SEPARATE},a.ErrorSeverity={FATAL:g.ErrorSeverity.FATAL,WARNING:g.ErrorSeverity.WARNING},a.DeviceType={DESKTOP:g.DeviceType.DESKTOP,CONSOLE:g.DeviceType.CONSOLE,SETTOP:g.DeviceType.SETTOP,MOBILE:g.DeviceType.MOBILE,TABLET:g.DeviceType.TABLET,SMARTTV:g.DeviceType.SMARTTV,VEHICLE:g.DeviceType.VEHICLE,OTHER:g.DeviceType.OTHER},a.AdTechnology={CLIENT_SIDE:g.AdType.CLIENT_SIDE,SERVER_SIDE:g.AdType.SERVER_SIDE},a.AdType={BLACKOUT_SLATE:g.AdSlates.BLACKOUT_SLATE,TECHNICAL_DIFFICULTIES_SLATE:g.AdSlates.TECHNICAL_DIFFICULTIES_SLATE,COMMERCIAL_SLATE:g.AdSlates.COMMERCIAL_SLATE,OTHER_SLATE:g.AdSlates.OTHER_SLATE,VPAID:g.AdSlates.VPAID,REGULAR:g.AdSlates.REGULAR},a.AdServingType={INLINE:g.AdServingType.INLINE,WRAPPER:g.AdServingType.WRAPPER},a.DeviceCategory={ANDROID_DEVICE:g.DeviceCategory.ANDROID_DEVICE,APPLE_DEVICE:g.DeviceCategory.APPLE_DEVICE,CHROMECAST:g.DeviceCategory.CHROMECAST,DESKTOP_APP:g.DeviceCategory.DESKTOP_APP,DEVICE_SIMULATOR:g.DeviceCategory.DEVICE_SIMULATOR,LG_TV:g.DeviceCategory.LG_TV,NINTENDO:g.DeviceCategory.NINTENDO,PLAYSTATION:g.DeviceCategory.PLAYSTATION,ROKU:g.DeviceCategory.ROKU,SAMSUNG_TV:g.DeviceCategory.SAMSUNG_TV,SMART_TV:g.DeviceCategory.SMART_TV,SET_TOP_BOX:g.DeviceCategory.SET_TOP_BOX,TIVO:g.DeviceCategory.TIVO,WEB:g.DeviceCategory.WEB,WINDOWS_DEVICE:g.DeviceCategory.WINDOWS_DEVICE,XBOX:g.DeviceCategory.XBOX,KAIOS_DEVICE:g.DeviceCategory.KAIOS_DEVICE,LINUX:g.DeviceCategory.LINUX},(f=lt.ClientSettings=function(){var e=this;this.on=null,m.rn(this,"customerKey",function(){return this.on}),m.un(this,"customerKey",function(t){m.Pt(t)&&(this.on=t)}),this.hn=f.fn,m.rn(this,"heartbeatInterval",function(){return this.hn}),m.un(this,"heartbeatInterval",function(t){var n;"number"===typeof t&&(n=m.cn(t))===t&&(this.hn=n)}),this.ln=null,this.G=null,this.q=null,m.rn(this,"gatewayUrl",function(){return this.ln}),m.un(this,"gatewayUrl",function(t){var n;!m.Pt(t)||"https"!==(n=t.split("://"))[0]&&"http"!==n[0]||-1===t.indexOf(".com",t.length-".com".length)||(this.ln=t)}),function(t){if(!m.Pt(t))throw new Error("customerKey must be valid");this.customerKey=t}.apply(this,arguments),this.equals=function(t){return this.customerKey===t.customerKey&&this.gatewayUrl===t.gatewayUrl&&this.heartbeatInterval===t.heartbeatInterval},this.ct=function(){var t=new f(this.customerKey);return t.gatewayUrl=function(t){if(m.Pt(t)){var n,i=t.split("://");if("https"===i[0]||"http"===i[0])return i[1]!==f.ut&&-1!==i[1].indexOf(f.ut)?(n=i[1].split(f.ut),e.G="https://"+n[0]+f.j,e.q="https://"+n[0]+f.X):(e.G="https://ipv4."+i[1],e.q="https://ipv6."+i[1]),t}return e.G="https://"+e.customerKey+"."+f.j,e.q="https://"+e.customerKey+"."+f.X,"https://"+e.customerKey+"."+f.ut}(this.gatewayUrl),t.heartbeatInterval=this.heartbeatInterval,t.G=this.G,t.q=this.q,t}}).sn="https://conviva.testonly.conviva.com",f.dn="https://cws.conviva.com",f.ut="cws.conviva.com",f.j="ipv4.cws.conviva.com",f.X="ipv6.cws.conviva.com",f.vn="conviva.testonly.conviva.com",f.K="ipv4.testonly.conviva.com",f.J="ipv6.testonly.conviva.com",f.rt="https://",f.ht="http://",f.En=5,f.fn=20,(c=lt.ContentMetadata=function(){this._n=null,m.rn(this,"assetName",function(){return this._n}),m.un(this,"assetName",function(t){"string"===typeof t&&(this._n=t)}),this.Rn={},m.rn(this,"custom",function(){return this.Rn}),m.un(this,"custom",function(t){"object"===typeof t&&(this.Rn=m.Gt(t))}),this.An=null,m.rn(this,"defaultResource",function(){return this.An}),m.un(this,"defaultResource",function(t){"string"===typeof t&&(this.An=t)}),this.Tn=null,m.rn(this,"viewerId",function(){return this.Tn}),m.un(this,"viewerId",function(t){"string"===typeof t&&(this.Tn=t)}),this.Sn=null,m.rn(this,"applicationName",function(){return this.Sn}),m.un(this,"applicationName",function(t){"string"===typeof t&&(this.Sn=t)}),this.On=null,m.rn(this,"streamUrl",function(){return this.On}),m.un(this,"streamUrl",function(t){"string"===typeof t&&(this.On=t)}),this.Nn=c.StreamType.UNKNOWN,m.rn(this,"streamType",function(){return this.Nn}),m.un(this,"streamType",function(t){t!==c.StreamType.UNKNOWN&&t!==c.StreamType.VOD&&t!==c.StreamType.LIVE||(this.Nn=t)}),this.gn=-1,m.rn(this,"duration",function(){return this.gn}),m.un(this,"duration",function(t){this.gn=b.In(t)}),this.wn=-1,m.rn(this,"encodedFrameRate",function(){return this.wn}),m.un(this,"encodedFrameRate",function(t){this.wn=b.In(t)}),function(){}.apply(this,arguments),this.ct=function(){var t,n=new c;for(t in n.assetName=this.assetName,n.applicationName=this.applicationName,n.streamUrl=this.streamUrl,n.viewerId=this.viewerId,n.defaultResource=this.defaultResource,n.streamType=this.streamType,n.duration=this.duration,n.encodedFrameRate=this.encodedFrameRate,this.custom)n.custom[t]=this.custom[t];return n}}).StreamType={UNKNOWN:g.StreamType.UNKNOWN,LIVE:g.StreamType.LIVE,VOD:g.StreamType.VOD},lt.ErrorType={ERROR_UNKNOWN:g.ErrorType.ERROR_UNKNOWN,ERROR_IO:g.ErrorType.ERROR_IO,ERROR_TIMEOUT:g.ErrorType.ERROR_TIMEOUT,ERROR_NULL_ASSET:g.ErrorType.ERROR_NULL_ASSET,ERROR_MISSING_PARAMETER:g.ErrorType.ERROR_MISSING_PARAMETER,ERROR_NO_AD_AVAILABLE:g.ErrorType.ERROR_NO_AD_AVAILABLE,ERROR_PARSE:g.ErrorType.ERROR_PARSE,ERROR_INVALID_VALUE:g.ErrorType.ERROR_INVALID_VALUE,ERROR_INVALID_SLOT:g.ErrorType.ERROR_INVALID_SLOT,ERROR_3P_COMPONENT:g.ErrorType.ERROR_3P_COMPONENT,ERROR_UNSUPPORTED_3P_FEATURE:g.ErrorType.ERROR_UNSUPPORTED_3P_FEATURE,ERROR_DEVICE_LIMIT:g.ErrorType.ERROR_DEVICE_LIMIT,ERROR_UNMATCHED_SLOT_SIZE:g.ErrorType.ERROR_UNMATCHED_SLOT_SIZE},lt.Events={AD_REQUESTED:g.Events.AD_REQUESTED,AD_RESPONSE:g.Events.AD_RESPONSE,AD_SLOT_STARTED:g.Events.AD_SLOT_STARTED,AD_ATTEMPTED:g.Events.AD_ATTEMPTED,AD_SLOT_ENDED:g.Events.AD_SLOT_ENDED,AD_IMPRESSION_START:g.Events.AD_IMPRESSION_START,AD_START:g.Events.AD_START,AD_FIRST_QUARTILE:g.Events.AD_FIRST_QUARTILE,AD_MID_QUARTILE:g.Events.AD_MID_QUARTILE,AD_THIRD_QUARTILE:g.Events.AD_THIRD_QUARTILE,AD_COMPLETE:g.Events.AD_COMPLETE,AD_END:g.Events.AD_END,AD_IMPRESSION_END:g.Events.AD_IMPRESSION_END,AD_SKIPPED:g.Events.AD_SKIPPED,AD_ERROR:g.Events.AD_ERROR,AD_PROGRESS:g.Events.AD_PROGRESS,AD_CLOSE:g.Events.AD_CLOSE,CONTENT_PAUSED:g.Events.CONTENT_PAUSED,CONTENT_RESUMED:g.Events.CONTENT_RESUMED,POD_START:g.Events.POD_START,POD_END:g.Events.POD_END},(I=lt.PlayerStateManager=function(){var e=this;e.Cn=null,e.yn=-2,e.Dn=-2,e.Pn=I.PlayerState.UNKNOWN,e.bn={},e.Ln=-2,e.wn=-2,e.gn=-2,e.Mn=null,e.Un=null,e.On=null,e.Vn=null,e.kn=null,e.Fn=-1,e.Bn=-1,e.M=null,e.U=null,e.Hn=null,e.Gn=[],e.m=!1,e.jn=null,e.Kn=null,e.Wn=null,this.release=function(){e.m||e.g.F("PlayerStateManager.release",function(){e.Cn&&e.Cn.Yn(),e.xn(),e.T=null,e.g=null,e.m=!0})},this.setPlayheadTime=function(){},this.setBufferLength=function(){},this.setRenderedFrameRate=function(){},this.getEncodedFrameRate=function(){return e.wn},this.setEncodedFrameRate=function(n){e.m||e.g.F("PlayerStateManager.setEncodedFrameRate",function(){var t=b.In(n);t>=-1&&(e.wn=t,e.Cn)&&e.Cn.qn(e.wn)})},this.getDuration=function(){return e.gn},this.setClientMeasureInterface=function(t){m.Xn(t,new lt.ClientMeasureInterface,"ClientMeasureInterface"),this.Jn=t},this.getPHT=function(){return this.Jn&&"function"===typeof this.Jn.getPHT?this.Jn.getPHT():I.DEFAULT_PHT},this.getBufferLength=function(){return this.Jn&&"function"===typeof this.Jn.getBufferLength?this.Jn.getBufferLength():I.DEFAULT_BUFFER_LENGTH},this.getSignalStrength=function(){return this.Jn&&"function"===typeof this.Jn.getSignalStrength?this.Jn.getSignalStrength():I.DEFAULT_SIGNAL_STRENGTH},this.getRenderedFrameRate=function(){return this.Jn&&"function"===typeof this.Jn.getRenderedFrameRate?this.Jn.getRenderedFrameRate():I.DEFAULT_RENDERED_FRAME_RATE},this.setDuration=function(n){e.m||e.g.F("PlayerStateManager.setDuration",function(){var t=b.In(n);t>=-1&&(e.gn=t,e.Cn)&&e.Cn.Qn(e.gn)})},this.getStreamUrl=function(){return e.On},this.setStreamUrl=function(t){e.m||e.g.F("PlayerStateManager.setStreamUrl",function(){t&&(e.On=t,e.Cn)&&e.Cn.Zn(e.On)})},this.zn=function(){return e.Vn},this.$n=function(){return e.kn},this.setModuleNameAndVersion=function(t,n){e.Vn=t,e.kn=n},this.ti=function(){return e.Un},this.setPlayerType=function(t){e.m||e.g.F("PlayerStateManager.setPlayerType",function(){e.Un=t,e.Cn&&e.Cn.ni(e.Un)})},this.ii=function(){return e.Mn},this.setPlayerVersion=function(t){e.m||e.g.F("PlayerStateManager.setPlayerVersion",function(){e.Mn=t,e.Cn&&e.Cn.ei(e.Mn)})},this.si=function(){return e.jn},this.setAudioLang=function(t){e.m||e.g.F("PlayerStateManager.setAudioLang",function(){e.jn=t,e.Cn&&e.Cn.oi(e.jn)})},this.ri=function(){return e.Kn},this.setSubtitleLang=function(t){e.m||e.g.F("PlayerStateManager.setSubtitleLang",function(){e.Kn=t,e.Cn&&e.Cn.ui(e.Kn)})},this.hi=function(){return e.Wn},this.setCcLang=function(t){e.m||e.g.F("PlayerStateManager.setCCLang",function(){e.Wn=t,e.Cn&&e.Cn.ai(e.Wn)})},this.setMonitoringNotifier=function(t){return!e.m&&!e.Cn&&(e.Cn=t,e.p,!0)},this.xn=function(){e.m||(e.Cn=null,e.p)},this.fi=function(){e.setPlayerState(e.getPlayerState()),e.setBitrateKbps(e.ci()),e.setAvgBitrateKbps(e.li()),e.setDuration(e.getDuration()),e.setEncodedFrameRate(e.getEncodedFrameRate()),e.setStreamUrl(e.getStreamUrl()),e.setPlayerType(e.ti()),e.setPlayerVersion(e.ii()),e.setAudioLang(e.si()),e.setSubtitleLang(e.ri()),e.setCcLang(e.hi());for(var t=0;t<e.Gn.length;t++){var n=e.Gn[t];e.di(n)}e.Gn=[]},this.getPlayerState=function(){return e.Pn},this.setPlayerState=function(t){e.m||e.g.F("PlayerStateManager.setPlayerState",function(){I.vi(t)&&(e.Pn=t,e.Cn)&&e.Cn.Ei(e.Pn)})},this.ci=function(){return e.yn},this.setBitrateKbps=function(n){e.m||e.g.F("PlayerStateManager.setBitrateKbps",function(){var t=b.In(n);t>=-1&&(e.yn=t,e.Cn)&&e.Cn._i(e.yn)})},this.li=function(){return e.Dn},this.setAvgBitrateKbps=function(n){e.m||e.g.F("PlayerStateManager.setAvgBitrateKbps",function(){var t=b.In(n);t>=-1&&(e.Dn=t,e.Cn)&&e.Cn.Ri(e.Dn)})},this.setPlayerSeekStart=function(t){e.m||e.g.F("PlayerStateManager.setPlayerSeekStart()",function(){e.Cn&&e.Cn.pi(I.SEEK_ACTIONS_TYPE.SEEK_START,t)})},this.setPlayerSeekEnd=function(){e.m||e.g.F("PlayerStateManager.setPlayerSeekEnd()",function(){e.Cn&&e.Cn.pi(I.SEEK_ACTIONS_TYPE.SEEK_END,-1)})},this.setUserSeekButtonUp=function(){e.m||e.g.F("PlayerStateManager.setUserSeekButtonUp()",function(){e.Cn&&e.Cn.pi(I.SEEK_ACTIONS_TYPE.BUTTON_UP,-1)})},this.setUserSeekButtonDown=function(){e.m||e.g.F("PlayerStateManager.setUserSeekButtonDown()",function(){e.Cn&&e.Cn.pi(I.SEEK_ACTIONS_TYPE.BUTTON_DOWN,-1)})},this.setVideoResolutionWidth=function(n){e.m||e.g.F("PlayerStateManager.setVideoResolutionWidth()",function(){var t=b.In(n);t>0&&(e.Fn=t),e.Cn&&e.Cn.Ai(e.Fn)})},this.setVideoResolutionHeight=function(n){e.m||e.g.F("PlayerStateManager.setVideoResolutionHeight()",function(){var t=b.In(n);t>0&&(e.Bn=t),e.Cn&&e.Cn.Ti(e.Bn)})},this.setConnectionType=function(t){e.m||e.g.F("PlayerStateManager.setConnectionType()",function(){e.M=t,e.Cn&&e.Cn.nt(e.M)})},this.setLinkEncryption=function(t){e.m||e.g.F("PlayerStateManager.setLinkEncryption()",function(){e.U=t,e.Cn&&e.Cn.et(e.U)})},this.setSignalStrength=function(){},this.di=function(t){var n,i;e.Hn=t,e.Cn?(n=t.errorCode,i=t.severity,e.Cn.Si(n,i)):e.Gn.push(t)},this.sendError=function(n,i){e.m||e.g.F("PlayerStateManager.sendError",function(){var t=new L(n,i);e.di(t)})},this.reset=function(){e.m||e.g.F("PlayerStateManager.reset",function(){e.yn=-2,e.Dn=-2,e.Pn=I.PlayerState.UNKNOWN,e.bn={},e.Ln=-1,e.wn=-1,e.gn=-1,e.Mn=null,e.Un=null,e.On=null,e.Hn=null,e.Gn=[]})},this.setCDNServerIP=function(t){e.m||e.g.F("PlayerStateManager.setCDNServerIP",function(){e.Cn&&e.Cn.Oi(t)})},this.Ni=function(){return e.gi},this.setDroppedFramesTotal=function(t){e.m||e.g.F("PlayerStateManager.setDroppedFramesTotal",function(){e.Cn&&e.Cn.Ii(t)})},this.setDroppedFramesCount=function(t){e.m||e.g.F("PlayerStateManager.setDroppedFramesCount",function(){e.Cn&&e.Cn.wi(t)})},this.Ci=function(){return e.Hn},function(t,n){e.T=t,e.g=e.T.dt(n)}.apply(e,arguments)}).PlayerState={STOPPED:g.PlayerState.STOPPED,PLAYING:g.PlayerState.PLAYING,BUFFERING:g.PlayerState.BUFFERING,PAUSED:g.PlayerState.PAUSED,UNKNOWN:g.PlayerState.UNKNOWN,NOT_MONITORED:g.PlayerState.NOT_MONITORED},I.vi=function(t){return t===I.PlayerState.STOPPED||t===I.PlayerState.PLAYING||t===I.PlayerState.BUFFERING||t===I.PlayerState.PAUSED||t===I.PlayerState.UNKNOWN||t===I.PlayerState.NOT_MONITORED},I.SEEK_ACTIONS_TYPE={SEEK_START:"pss",SEEK_END:"pse",BUTTON_UP:"bu",BUTTON_DOWN:"bd"},I.DEFAULT_SIGNAL_STRENGTH=1e3,I.DEFAULT_RENDERED_FRAME_RATE=-1,I.DEFAULT_BUFFER_LENGTH=-1,I.DEFAULT_PHT=-1,lt.ClientMeasureInterface=function(){this.getPHT=function(){},this.getBufferLength=function(){},this.getSignalStrength=function(){},this.getRenderedFrameRate=function(){}},B=lt.HttpInterface=function(){this.makeRequest=function(){},this.release=function(){}},H=lt.LoggingInterface=function(){this.consoleLog=function(){},this.release=function(){}},G=lt.MetadataInterface=function(){this.getBrowserName=function(){},this.getBrowserVersion=function(){},this.getDeviceBrand=function(){},this.getDeviceManufacturer=function(){},this.getDeviceModel=function(){},this.getDeviceType=function(){},this.getDeviceVersion=function(){},this.getFrameworkName=function(){},this.getFrameworkVersion=function(){},this.getOperatingSystemName=function(){},this.getOperatingSystemVersion=function(){},this.getDeviceCategory=function(){},this.getScreenWidth=function(){},this.getScreenHeight=function(){},this.getScaleFactor=function(){},this.release=function(){}},j=lt.StorageInterface=function(){this.saveData=function(){},this.loadData=function(){},this.release=function(){}},K=lt.SystemInterface=function(){!function(t,n,i,e,s,o){m.Xn(t,new W,"TimeInterface"),m.Xn(n,new Y,"TimerInterface"),m.Xn(i,new B,"HttpInterface"),m.Xn(e,new j,"StorageInterface"),m.Xn(s,new G,"MetadataInterface"),m.Xn(o,new H,"LoggingInterface"),this.yi=t,this.mi=n,this.Di=i,this.Pi=e,this.bi=s,this.Li=o}.apply(this,arguments),this.release=function(){this.yi&&(this.yi.release(),this.yi=null),this.mi&&(this.mi.release(),this.mi=null),this.Di&&(this.Di.release(),this.Di=null),this.Pi&&(this.Pi.release(),this.Pi=null),this.bi&&(this.bi.release(),this.bi=null),this.Li&&(this.Li.release(),this.Li=null)}},W=lt.TimeInterface=function(){this.getEpochTimeMs=function(){},this.release=function(){}},Y=lt.TimerInterface=function(){this.createTimer=function(){},this.release=function(){}},x=lt.SystemFactory=function(){var t=this;!function(t,n){if(!(t instanceof K))throw new Error("systemInterface parameter should be an instance of SystemInterface.");this.Mi=t,this.yi=this.Mi.yi,this.mi=this.Mi.mi,this.Di=this.Mi.Di,this.Pi=this.Mi.Pi,this.bi=this.Mi.bi,this.Li=this.Mi.Li,n instanceof h?this.O=n.ct():this.O=new h}.apply(this,arguments),this.lt=function(t,n,i){this.Ui=t,this.Vi=n,this.ki=i},this.release=function(){this.Mi.release(),this.Mi=null,this.Ui=null,this.O=null,this.Fi=null};var n=function(){return new ut(t.Li,t.yi,t.Xt(),t.Fi,t.Ui)};this.buildLogger=function(){return n()},this.At=function(t,n,i){return new tt(t,n,i,this)},this.Bi=function(t){return new D(this.buildLogger(),this.Hi(),this.Vi,t)},this.Gi=function(){return new nt(this.buildTimer(t.ki))},this.ji=function(){var t=new at(this.buildLogger(),this.mi,new et(this.buildLogger(),null,this.Xt()));return new nt(t)},this.Hi=function(){return new rt(this.buildLogger(),this.Di,this.ji(),this.Xt())},this.dt=function(t){return new et(this.buildLogger(),this.Bi(t),this.Xt())},this.buildTime=function(){return new ht(this.yi,this.buildLogger())},this.buildTimer=function(t){return new at(this.buildLogger(),this.mi,this.dt(t))},this.Ki=function(){return new U.Storage(this.buildLogger(),this.Pi,this.Gi(),this.Xt())},this.vt=function(){return new y(this.buildLogger(),this.Ki(),this.Wi())},this.Yi=function(t){return new M(this.buildLogger(),this.bi,this.dt(t))},this.xi=function(){return new N},this.qi=function(t,n){return new st(t,this.buildLogger(),this.Hi(),this.Wi(),n)},this.Xi=function(t,n,i,e,s){var o=this.qi(n,e.custom["c3.domain"]);return new C(this.Ji(),t,n,this.buildLogger(),this.dt(s),this.buildTimer(s),o,this.xi(),this.buildTime(),this.Qi(),i,e,s)},this.Zi=function(t,n,i,e,s,o,r){t=this.Xi(t,n.ct(),i,o,r);return new $(e,s,i,this.Yi(r),t,this.dt(r),this.buildLogger())},this.Ji=function(){return new it},this.Wi=function(){return new Z},this.Qi=function(){return this.Fi},this.Xt=function(){return this.O},this.Fi=new ot},(h=lt.SystemSettings=function(){this.zi=h.$i,m.rn(this,"logLevel",function(){return this.zi}),m.un(this,"logLevel",function(t){var n;"number"===typeof t&&(n=m.cn(t))===t&&n>=h.LogLevel.DEBUG&&n<=h.LogLevel.ERROR&&(this.zi=n)}),this.te=h.ne,m.rn(this,"allowUncaughtExceptions",function(){return this.te}),m.un(this,"allowUncaughtExceptions",function(t){m.ie(t)&&(this.te=t)}),this.ee=h.se,m.rn(this,"storageTimeout",function(){return this.ee}),m.un(this,"storageTimeout",function(t){var n;"number"===typeof t&&(n=m.cn(t))===t&&(this.ee=n)}),this.oe=h.re,m.rn(this,"httpTimeout",function(){return this.oe}),m.un(this,"httpTimeout",function(t){var n;"number"===typeof t&&(n=m.cn(t))===t&&(this.oe=n)}),function(){}.apply(this,arguments),this.equals=function(t){return this.logLevel===t.logLevel&&this.allowUncaughtExceptions===t.allowUncaughtExceptions&&this.storageTimeout===t.storageTimeout&&this.httpTimeout===t.httpTimeout},this.ct=function(){var t=new h;return t.logLevel=this.logLevel,t.allowUncaughtExceptions=this.allowUncaughtExceptions,t.storageTimeout=this.storageTimeout,t.httpTimeout=this.httpTimeout,t}}).LogLevel={DEBUG:g.LogLevel.DEBUG,INFO:g.LogLevel.INFO,WARNING:g.LogLevel.WARNING,ERROR:g.LogLevel.ERROR,NONE:g.LogLevel.NONE},h.ue=h.LogLevel.DEBUG,h.$i=h.LogLevel.NONE,h.he=!0,h.ne=!1,h.se=10,h.re=10,i=U.AdAnalytics=function(){var e=this;function n(t){e.ae?(m.Ht(t)>0&&e.setAdInfo(t),e.ae.fe()||(e.ae.ce(e.le),e.ae.de(!0),e.getAdType()===g.AdType.SERVER_SIDE&&e.reportAdMetric(g.Playback.BITRATE,e.le.ve()))):e.p}e.Ee=null,e.T=null,e._e=null,e.le=null,e.ae=null,e.Re=null,e.pe=null,e.Ae=null,function(t,n,i){e.Ee=t,e.Ae=i,e.T=n,i&&(e.le=i.Te()),e._e=n.buildTimer(g.version),e.ae=new l(e.Ee,e._e),w.call(this)}.apply(this,arguments),this.setAdInfo=function(t){m.Ht(t)<=0?e.p:(e.p,e.ae&&e.ae.Se(t))},this.setAdPlayerInfo=function(t){m.Ht(t)<=0?e.p:(e.p,e.ae&&e.ae.Se(t))},this.reportAdMetric=function(){0===arguments.length?e.p:1===arguments.length?e.Oe(arguments[0]):2===arguments.length?e.Oe(arguments[0],arguments[1]):3===arguments.length?e.Oe(arguments[0],arguments[1],arguments[2]):4===arguments.length&&e.Oe(arguments[0],arguments[1],arguments[2],arguments[3])},this.setCallback=function(t){e.ae&&e.ae.Ne(t)},this.reportAdFailed=function(t,n){e.ae?(m.Ht(n)>0&&e.setAdInfo(n),e.ae.fe()?(e.p,e.reportAdError(t,a.ErrorSeverity.FATAL),e.reportAdEnded()):(e.ae.ce(e.le),e.p,n=new L(t,a.ErrorSeverity.FATAL),e.ae.de(!0,n))):e.p},this.reportAdLoaded=function(t){e.p,n(t)},this.reportAdStarted=function(t){e.p,n(t)},this.reportAdEnded=function(){e.ae?(e.p,e.ae.fe()&&(e.ae.ce(null),e.ae.de(!1))):e.p},this.reportAdError=function(t,n){e.ae?(e.p,t=new L(t,n),e.ae.di(t)):e.p},this.reportAdPlayerEvent=function(t,n){if(m.Pt(t))if(e.p,e.ae)switch(t){case g.Events.USER_WAIT_STARTED:case g.Events.BUMPER_VIDEO_STARTED:e.ae.Mt();break;case g.Events.USER_WAIT_ENDED:case g.Events.BUMPER_VIDEO_ENDED:e.ae.Vt();break;default:e.ae.ge(t,n)}else e.p;else e.p},this.reportAdSkipped=function(){e.ae?(e.p,e.reportAdPlayerEvent(g.Events.AD_SKIPPED),e.reportAdEnded()):e.p},this.release=function(){e.p,e.ae&&(e.ae.fe()&&(e.ae.ce(null),e.ae.de(!1)),e.ae.Ne(null),e.ae.Ie(),e.ae=null),"undefined"!==typeof lt.AdProxyMonitor&&e.pe&&(lt.AdProxyMonitor.release(e.pe),e.pe=null)},this.setAdListener=function(t,n){t&&("undefined"!==typeof n&&"undefined"!==typeof n.convivaModule?lt.AdProxyMonitor=n.convivaModule.AdProxyMonitor:"undefined"!==typeof ConvivaModule&&(lt.AdProxyMonitor=ConvivaModule.AdProxyMonitor),"undefined"!==typeof lt.AdProxyMonitor)&&(!t&&e.pe?(lt.AdProxyMonitor.release(e.pe),e.pe=null):t&&e.pe?(lt.AdProxyMonitor.release(e.pe),e.p,e.pe=lt.AdProxyMonitor.initConvivaDropIn(t,n,this,lt,e.T)):t&&!e.pe&&(e.p,e.pe=lt.AdProxyMonitor.initConvivaDropIn(t,n,this,lt,e.T)))},this.reportAdBreakStarted=function(t,n,i){e.le&&(e.p,e.we=t,e.Re=n,e.le.Ce(t,n,i))},this.reportAdBreakEnded=function(){e.le&&(e.p,e.we=null,e.Re=null,e.le.ye())},this.getSessionId=function(){return e.le?(e.p,e.ae.Jt()):g.NO_SESSION_KEY},this.getClientId=function(){return e.le?(e.p,e.ae.Qt()):null},this.getPlayerMonitor=function(){return e.le},this.getAdPlayerMonitor=function(){return e.ae},this.getVideoAnalytics=function(){return e.Ae},this.getAdType=function(){return e.le?e.le.we:null},this.me=function(){return e.le?e.le.Re:null},i.prototype=Object.create(w.prototype),i.prototype.constructor=i},l=U.AdPlayerMonitorImpl=function(){var s=this;s.De=null,s.Pe=null,function(t,n){d.call(this,t,n)}.apply(this,arguments),this.ce=function(t){this.be()!==t&&(this.Le(),s.Pe=t||null)},this.be=function(){return s.Pe},this.Me=function(t){var n,i=this.be(),e={};e.error=t,s.De&&(s.Ue=s.De.getPlayerStateManager(!0),s.Ve(),s.Ue.setClientMeasureInterface(this),n=null,i&&(n=i.ke()),s.Fe=s.De.createAdSession(n,s.Ct,s.Ue,!0,e),"undefined"!==typeof t)&&(s.Be(),s.Ie())},l.prototype=Object.create(d.prototype),l.prototype.constructor=l},q=lt.Analytics={init:function(){if(this.Ee,arguments.length<=0)throw new Error("customerKey must be valid");var t=null,n=null,i=null;if("string"===typeof arguments[0]&&!m.Pt(t=arguments[0]))throw new Error("customerKey must be valid");arguments.length>=2&&"object"===typeof arguments[1]&&(n=arguments[1]),arguments.length>=3&&"object"===typeof arguments[2]&&(i=arguments[2]);var t=new f(t),e=new h,i=(m.Ht(i)>0&&(i[g.GATEWAY_URL]&&(t.gatewayUrl=i[g.GATEWAY_URL]),i[g.LOG_LEVEL]>=0)&&(e.logLevel=i[g.LOG_LEVEL]),new lt.Impl.Html5Logging),s=new lt.Impl.Html5Storage,o=new lt.Impl.Html5Http,r=new lt.Impl.Html5Timer,u=new lt.Impl.Html5Time;this.bi||(this.bi=new lt.Impl.Html5Metadata),n&&(n[g.CallbackFunctions.CONSOLE_LOG]&&(i.consoleLog=n[g.CallbackFunctions.CONSOLE_LOG]),n[g.CallbackFunctions.MAKE_REQUEST]&&(o.makeRequest=n[g.CallbackFunctions.MAKE_REQUEST]),n[g.CallbackFunctions.SAVE_DATA]&&(s.saveData=n[g.CallbackFunctions.SAVE_DATA]),n[g.CallbackFunctions.LOAD_DATA]&&(s.loadData=n[g.CallbackFunctions.LOAD_DATA]),n[g.CallbackFunctions.GET_EPOCH_TIME_IN_MS]&&(u.getEpochTimeMs=n[g.CallbackFunctions.GET_EPOCH_TIME_IN_MS]),n[g.CallbackFunctions.CREATE_TIMER])&&(r.createTimer=n[g.CallbackFunctions.CREATE_TIMER]),this.Mi=new K(u,r,o,s,this.bi,i),this.T=new x(this.Mi,e),this.T.lt("Analytics",t),this.Ee=new a(t,this.T,this.He,q.version),this.Ee._=new X(this.Ee,this),this.Ee._&&this.Ee._.Ge()},release:function(){var t=0;if(this.je){for(t=0;t<this.je.length;t++){var n=this.je[t];n&&(n.release(),n.p=null,n._e=null,this.je.splice(t,1),t--)}this.je=null}if(this.Ke){for(t=0;t<this.Ke.length;t++){var i=this.Ke[t];i&&(i.release(),i.p=null,i._e=null,this.Ke.splice(t,1),t--)}this.Ke=null}this.T&&(this.T.release(),this.T=null),this.Ee&&(this.Ee.release(),this.Ee=null),this.Ee=null,this.p=null,this.Mi=null,this.bi=null,this.He=null},setUniqueIdentifier:function(t,n){if(!this.Ee)throw new Error(g.i);this.Ee.setUniqueIdentifier(t,n)},setUserPreferenceForDataCollection:function(t,n){if(!this.Ee)throw new Error(g.i);this.Ee.setUserPreferenceForDataCollection(t,n)},setUserPreferenceForDataDeletion:function(t){if(!this.Ee)throw new Error(g.i);this.Ee.setUserPreferenceForDataDeletion(t)},reportAppEvent:function(t,n){if(!this.Ee)throw new Error(g.i);this.Ee.sendCustomEvent(a.NO_SESSION_KEY,t,n)},reportAppBackgrounded:function(){if(!this.Ee)throw new Error(g.i);this.Ee.sendCustomEvent(a.NO_SESSION_KEY,"App.Backgrounded",null)},reportAppForegrounded:function(){if(!this.Ee)throw new Error(g.i);this.Ee.sendCustomEvent(a.NO_SESSION_KEY,"App.Foregrounded",null)},configureExistingClient:function(t){if(!(t instanceof a))throw new Error(g.i);this.Ee=t,this.T=this.Ee.T},buildVideoAnalytics:function(){var t;if(this.Ee)return t=new v(this.Ee,this.T),this.Ke||(this.Ke=[]),this.Ke.push(t),t;throw new Error(g.i)},buildAdAnalytics:function(t){if(this.Ee)return t=new i(this.Ee,this.T,t||null),this.je||(this.je=[]),this.je.push(t),t;throw new Error(g.i)},setDeviceMetadata:function(t){var n,i,e;arguments.length<=0||0===m.Ht(t)||(this.bi||(this.bi=new lt.Impl.Html5Metadata),t[g.DeviceMetadata.BRAND]&&(this.bi.getDeviceBrand=function(){return t[g.DeviceMetadata.BRAND]}),t[g.DeviceMetadata.MANUFACTURER]&&(this.bi.getDeviceManufacturer=function(){return t[g.DeviceMetadata.MANUFACTURER]}),t[g.DeviceMetadata.MODEL]&&(this.bi.getDeviceModel=function(){return t[g.DeviceMetadata.MODEL]}),t[g.DeviceMetadata.TYPE]&&(this.bi.getDeviceType=function(){return t[g.DeviceMetadata.TYPE]}),t[g.DeviceMetadata.VERSION]&&(this.bi.getDeviceVersion=function(){return t[g.DeviceMetadata.VERSION]}),t[g.DeviceMetadata.OS_NAME]&&(this.bi.getOperatingSystemName=function(){return t[g.DeviceMetadata.OS_NAME]}),t[g.DeviceMetadata.OS_VERSION]&&(this.bi.getOperatingSystemVersion=function(){return t[g.DeviceMetadata.OS_VERSION]}),t[g.DeviceMetadata.CATEGORY]&&(this.bi.getDeviceCategory=function(){return t[g.DeviceMetadata.CATEGORY]}),n=t[g.DeviceMetadata.SCREEN_RESOLUTION_WIDTH],m.gt(n)&&(this.bi.getScreenWidth=function(){return n.toString()}),i=t[g.DeviceMetadata.SCREEN_RESOLUTION_HEIGHT],m.gt(i)&&(this.bi.getScreenHeight=function(){return i.toString()}),e=t[g.DeviceMetadata.SCREEN_RESOLUTION_SCALE_FACTOR],m.gt(e)&&(this.bi.getScaleFactor=function(){return e.toString()}))},reportDeviceMetric:function(t,n){switch(this.He||(this.He={}),t){case g.Network.CONNECTION_TYPE:m.Pt(n)&&(this.He[t]=n,this.Ee)&&this.Ee.$(this.He[g.Network.CONNECTION_TYPE]);break;case g.Network.LINK_ENCRYPTION:m.Pt(n)&&(this.He[t]=n,this.Ee)&&this.Ee.it(this.He[g.Network.LINK_ENCRYPTION]);break;case g.Network.SIGNAL_STRENGTH:var i=parseInt(n,10);m.gt(i)&&I.DEFAULT_SIGNAL_STRENGTH!==i&&(this.He[t]=i,this.Ee)&&this.Ee.ot(i)}},version:"4.7.13"},w=U.AnalyticsImpl=function(){var c=this;function l(){var t=!!c.ae,n=c.getAdType(),i=c.me();return n===g.AdType.SERVER_SIDE&&i===g.AdPlayer.CONTENT?w.Ye.We:n!==g.AdType.SERVER_SIDE||i!==g.AdPlayer.SEPARATE?n===g.AdType.CLIENT_SIDE&&i===g.AdPlayer.CONTENT||(n===g.AdType.CLIENT_SIDE&&g.AdPlayer.SEPARATE,t)?w.Ye.xe:w.Ye.qe:void 0}function d(t,n,i){t=parseInt(t,10),n=parseInt(n,10);isNaN(t)&&isNaN(n)||(isNaN(t),isNaN(n),!c.ae||i!==w.Ye.xe&&i!==w.Ye.We||c.ae.Xe(t,n),!c.le)||i!==w.Ye.qe&&i!==w.Ye.We||c.le.Xe(t,n)}function v(t,n){I.vi(t)&&(!c.ae||n!==w.Ye.xe&&n!==w.Ye.We||c.ae.Je(t),c.le&&n===w.Ye.qe||n===w.Ye.We)&&c.le.Je(t)}function E(t,n){t=parseInt(t,10);isNaN(t)||(!c.ae||n!==w.Ye.xe&&n!==w.Ye.We||c.ae.Qe(t),!c.le)||n!==w.Ye.qe&&n!==w.Ye.We||c.le.Qe(t)}function _(t,n){t=parseInt(t,10);isNaN(t)||(!c.ae||n!==w.Ye.xe&&n!==w.Ye.We||c.ae.Ze(t),!c.le)||n!==w.Ye.qe&&n!==w.Ye.We||c.le.Ze(t)}function R(t,n){t=parseInt(t,10);!c.ae||n!==w.Ye.xe&&n!==w.Ye.We||c.ae.ze(!0,t),!c.le||n!==w.Ye.qe&&n!==w.Ye.We||c.le.ze(!0,t)}function p(t){!c.ae||t!==w.Ye.xe&&t!==w.Ye.We||c.ae.ze(!1,-1),!c.le||t!==w.Ye.qe&&t!==w.Ye.We||c.le.ze(!1,-1)}function A(t,n){t=parseInt(t,10);isNaN(t)||(!c.ae||n!==w.Ye.xe&&n!==w.Ye.We||c.ae.$e(t),!c.le)||n!==w.Ye.qe&&n!==w.Ye.We||c.le.$e(t)}function T(t,n){t=parseInt(t,10);isNaN(t)||(!c.ae||n!==w.Ye.xe&&n!==w.Ye.We||c.ae.ts(t),!c.le)||n!==w.Ye.qe&&n!==w.Ye.We||c.le.ts(t)}function S(t,n){t=parseInt(t,10);isNaN(t)||(!c.ae||n!==w.Ye.xe&&n!==w.Ye.We||c.ae.ns(t),!c.le)||n!==w.Ye.qe&&n!==w.Ye.We||c.le.ns(t)}function O(t,n){var i;m.Pt(t)&&(i=c.le.hi(),m.Pt(i)&&"off"!==i&&"off"!==t&&N("off",n),!c.ae||n!==w.Ye.xe&&n!==w.Ye.We||c.ae.es(t),!c.le||n!==w.Ye.qe&&n!==w.Ye.We||c.le.es(t))}function N(t,n){var i;m.Pt(t)&&(i=c.le.ri(),m.Pt(i)&&"off"!==i&&"off"!==t&&O("off",n),!c.ae||n!==w.Ye.xe&&n!==w.Ye.We||c.ae.ss(t),!c.le||n!==w.Ye.qe&&n!==w.Ye.We||c.le.ss(t))}!function(){}.apply(this,arguments),this.Oe=function(t,n,i,e){switch(t){case g.Playback.BITRATE:e===w.Ye.xe?A(n,w.Ye.xe):A(n,l());break;case g.Playback.AVG_BITRATE:e===w.Ye.xe?T(n,w.Ye.xe):T(n,l());break;case g.Playback.PLAY_HEAD_TIME:e===w.Ye.xe?E(n,w.Ye.xe):E(n,l());break;case g.Playback.RESOLUTION:e===w.Ye.xe?d(n,i,w.Ye.xe):d(n,i,l());break;case g.Playback.BUFFER_LENGTH:e===w.Ye.xe?_(n,w.Ye.xe):_(n,l());break;case g.Playback.PLAYER_STATE:e===w.Ye.xe?v(n,w.Ye.xe):v(n,l());break;case g.Playback.RENDERED_FRAMERATE:e===w.Ye.xe?S(n,w.Ye.xe):S(n,l());break;case g.Playback.SEEK_STARTED:arguments.length>=2&&"CONVIVA"!==n?R(n,l()):i===w.Ye.xe?R(-1,w.Ye.xe):R(-1,l());break;case g.Playback.SEEK_ENDED:i===w.Ye.xe?p(w.Ye.xe):p(l());break;case g.Playback.CDN_IP:a=n,f=l(),m.Pt(a)&&(!c.ae||f!==w.Ye.xe&&f!==w.Ye.We||c.ae.os(a),!c.le||f!==w.Ye.qe&&f!==w.Ye.We||c.le.os(a));break;case g.Playback.DROPPED_FRAMES_TOTAL:f=n,a=l();f=parseInt(f,10),isNaN(f)||(!c.ae||a!==w.Ye.xe&&a!==w.Ye.We||c.ae.rs(f),!c.le)||a!==w.Ye.qe&&a!==w.Ye.We||c.le.rs(f);break;case g.Playback.DROPPED_FRAMES_COUNT:var s=n,o=l();s=parseInt(s,10),isNaN(s)||(!c.ae||o!==w.Ye.xe&&o!==w.Ye.We||c.ae.us(s),!c.le)||o!==w.Ye.qe&&o!==w.Ye.We||c.le.us(s);break;case g.Playback.AUDIO_LANGUAGE:o=n,s=l(),m.Pt(o)&&(!c.ae||s!==w.Ye.xe&&s!==w.Ye.We||c.ae.hs(o),!c.le||s!==w.Ye.qe&&s!==w.Ye.We||c.le.hs(o));break;case g.Playback.SUBTITLES_LANGUAGE:O(n,l());break;case g.Playback.CLOSED_CAPTIONS_LANGUAGE:N(n,l());break;default:r=t,u=n,h=l(),m.Pt(r)&&u&&(!c.ae||h!==w.Ye.xe&&h!==w.Ye.We||c.ae.Zt(r,u),!c.le||h!==w.Ye.qe&&h!==w.Ye.We||c.le.Zt(r,u))}var r,u,h,a,f}},U.AnalyticsImpl.Ye={xe:1,qe:2,We:3},X=U.AppAnalyticsHandler=function(){var r=this;r.Ee=null,r.fs=null,r.cs=null,r.ls=null,r.wt=null,function(t,n){r.Ee=t,r.fs=n,"undefined"!==typeof document&&document&&(r.cs=document.createEvent("HTMLEvents"),r.cs.initEvent(g.APP_TRACKER_EVENT.TYPE,!0,!0))}.apply(this,arguments),this.Ge=function(){r.ds(g.APP_TRACKER_EVENT.INIT)},this.vs=function(){r.ds(g.APP_TRACKER_EVENT.VIDEO_ATTEMPT)},this.Es=function(){r.ds(g.APP_TRACKER_EVENT.VIDEO_END),r.wt=null},this._s=function(t){r.ds(g.APP_TRACKER_EVENT.VIDEO_PLAY,t)},this.Rs=function(t){r.ds(g.APP_TRACKER_EVENT.VIDEO_PAUSE,t)},this.ps=function(t){r.ds(g.APP_TRACKER_EVENT.VIDEO_ERROR,t)},this.As=function(t){r.ds(g.APP_TRACKER_EVENT.VIDEO_BUFFERING,t)},this.Ts=function(t){r.ds(g.APP_TRACKER_EVENT.VIDEO_BITRATE_SWITCH,t)},this.Ss=function(t){r.ds(g.APP_TRACKER_EVENT.VIDEO_METADATA_CHANGE,t)},this.Os=function(t){t={cen:t.name,ced:t.data};r.ds(g.APP_TRACKER_EVENT.VIDEO_CUSTOM_EVENT,t)},this.Ns=function(t){t={cen:t.name,ced:t.data};r.ds(g.APP_TRACKER_EVENT.SDK_CUSTOM_EVENT,t)},this.gs=function(t){r.ds(g.APP_TRACKER_EVENT.AD_BREAK_START,{cen:"PodStart",ced:t})},this.Is=function(t){r.ds(g.APP_TRACKER_EVENT.AD_BREAK_END,{cen:"PodEnd",ced:t})},this.ds=function(t,n){try{if(r.cs){if(r.ws(),r.cs.name=r.ls.name=t,r.cs.iid=r.ls.iid=r.Ee.getConfig().getIid(),r.cs.clid=r.ls.clid=r.Ee.getConfig().getClientId(),r.wt){var i,e=r.wt;if(e.Cs()?(i=n?n[N.ys]:void 0,r.cs.sid=r.ls.sid=e.Ds.Jt(),r.cs.sst=r.ls.sst=e.Ps,r.cs.url=r.ls.url=i&&i.url?i.url:e.On,r.cs.st=r.ls.st=e.bs(),r.cs.an=r.ls.an=i&&i.an?i.an:e._n,r.cs.pn=r.ls.pn=i&&i.pn?i.pn:e.Ls,r.cs.tags=r.ls.tags=JSON.stringify(e.Ct.Rn),r.cs.vid=r.ls.vid=i&&i.vid?i.vid:e.Tn,e.Ms>=0&&(r.cs.cl=r.ls.cl=i&&i.cl?i.cl:e.Ms),r.cs.lv=r.ls.lv=i&&i.lv?i.lv:e.Us,r.cs.fw=r.ls.fw=e.Vs(),r.cs.fwv=r.ls.fwv=e.ks(),e.Ue&&(r.cs.mn=r.ls.mn=e.Ue.zn(),r.cs.mv=r.ls.mv=e.Ue.$n()),(e.yn>=0||i&&i.br>=0)&&t===g.APP_TRACKER_EVENT.VIDEO_BITRATE_SWITCH&&(r.cs.br=r.ls.br=i&&i.br?i.br:e.yn),(e.Dn>=0||i&&i.avgbr>=0)&&t===g.APP_TRACKER_EVENT.VIDEO_BITRATE_SWITCH&&(r.cs.avgbr=r.ls.avgbr=i&&i.avgbr?i.avgbr:e.Dn)):e.Fs()&&(r.cs.sid=r.ls.sid=e.Ds.Jt(),r.cs.sst=r.ls.sst=e.Ps,r.cs.st=r.ls.st=e.bs(),r.cs.mn=r.ls.mn=e.Vn,r.cs.mv=r.ls.mv=e.kn),n&&(t===g.APP_TRACKER_EVENT.VIDEO_BITRATE_SWITCH||t===g.APP_TRACKER_EVENT.VIDEO_ERROR||t===g.APP_TRACKER_EVENT.VIDEO_METADATA_CHANGE||t===g.APP_TRACKER_EVENT.VIDEO_CUSTOM_EVENT||t===g.APP_TRACKER_EVENT.SDK_CUSTOM_EVENT||t===g.APP_TRACKER_EVENT.AD_BREAK_START||t===g.APP_TRACKER_EVENT.AD_BREAK_END))for(var s=Object.keys(n),o=0;o<s.length;o++)"object"===typeof n[s[o]]?r.cs[s[o]]=r.ls[s[o]]=JSON.stringify(n[s[o]]):r.cs[s[o]]=r.ls[s[o]]=n[s[o]]}"undefined"!==typeof document&&document&&document.dispatchEvent(r.cs)}}catch(t){}},this.ws=function(){if(null!==r.ls)for(var t=Object.keys(r.ls),n=0;n<t.length;n++)delete r.cs[t[n]];r.ls={}},this.Bs=function(t,n,i){try{(r.wt=i).Cs()?t===N.Hs?n[N.ys][N.Gs]?n[N.ys][N.Gs]===N.js?r._s(n):n[N.ys][N.Gs]===N.Ks?r.As(n):n[N.ys][N.Gs]===N.Ws&&r.Rs(n):n[N.ys][N.Ys]||n[N.ys][N.xs]?r.Ts(n):r.Ss(n):t===N.qs?r.ps({err:n[N.Xs],ft:n[N.Js]}):t===N.Qs?r.Es():t===g.APP_TRACKER_EVENT.VIDEO_ATTEMPT?r.vs():t===N.Zs&&(n[N.zs]===g.Events.POD_START?r.gs(n[N.$s]):n[N.zs]===g.Events.POD_END?r.Is(n[N.$s]):r.Os({name:n[N.zs],data:n[N.$s]})):i.Fs()&&t===N.Zs&&r.Ns({name:n[N.zs],data:n[N.$s]})}catch(t){}}},J=U.PlayerMonitor=function(){var e=this;this.no=null,this.io=null,this.Ct=null,this.eo=null,this.Pn=I.PlayerState.UNKNOWN,this.so=-1,this.oo=-1,this.Gn=[],this.ro=null,this.uo=null,this.ho=-2,this.ao=-2,this.Ln=-1,this.V=I.DEFAULT_SIGNAL_STRENGTH,this.fo=null,this.gi=null,this.U=null,this.M=null,this._e=null,this.co=null,this.lo=null,this.do=null,this.vo=null,this.we=null,this.Re=null,this.jn=null,this.Kn=null,this.Wn=null,function(t){e._e=t}.apply(this,arguments),this.Eo=function(){return e.Pn},this.Je=function(t){e.Pn!==t&&(e.Le(),e.Pn=t,e._o())},this.Ro=function(){return e.po},this.Ao=function(){return e.To},this.ze=function(t,n){e.Le(),e.po=t,e.To=n,e.So()},this.Oo=function(){return e.so},this.Qe=function(t){e.so=t},this.No=function(){return e.oo},this.Ze=function(t){e.oo=t},this.ve=function(){return e.ho},this.$e=function(t){e.ho!==t&&(e.ho=t,e._o())},this.Io=function(){return e.ao},this.ts=function(t){e.ao!==t&&(e.ao=t,e._o())},this.wo=function(){return e.Ln},this.ns=function(t){e.Ln=t},this.Co=function(){return e.fo},this.os=function(t){e.fo=t,e._o()},this.Ni=function(){return e.gi},this.rs=function(t){e.gi=t,e._o()},this.us=function(t){e.yo(t)},this.mo=function(){return e.V},this.si=function(){return e.jn},this.ri=function(){return e.Kn},this.hi=function(){return e.Wn},this.hs=function(t){e.jn!==t&&(e.jn=t,e._o())},this.es=function(t){e.Kn!==t&&(e.Kn=t,e._o())},this.ss=function(t){e.Wn!==t&&(e.Wn=t,e._o())},this.Do=function(){return e.Po},this.bo=function(){return e.Lo},this.Xe=function(t,n){n<0&&(n=0),e.Po===(t=t<0?0:t)&&e.Lo===n||(e.Po=t,e.Lo=n,e._o())},this.Mo=function(){return e.io},this.Uo=function(){e.Mo()&&(e.Ct=new c,e.eo={},e.lo={},e.Vo())},this.ko=function(t){(e.io||t)&&(this.Le(),e.io&&(e.io=null,e.Uo()),t)&&(e.io=m.Fo(e.io,t),e.Uo())},this.Se=function(t){if(t)if(e.Ct){var n,i=!1;for(n in t)if(e.Ct[n]!==t[n]){i=!0;break}i&&(e.Le(),e.io=m.Fo(t),e.Vo())}else e.ko(t)},this.Ne=function(t){t?e.do!==t&&(e.do=t,e.Bo()):(e.do=null,e.Be())},this.Le=function(){e.Ho||e.do&&(e.Ho=!0,e.do(),e.Ho=!1)},this.fe=function(){return e.no},this.de=function(t,n){e.no!==t&&(e.Le(),e.no&&(e.Go(),e.Be(),e.Ie()),e.no=t,e.no)&&e.Me(n)},this.jo=function(){return e.ro},this.Ko=function(){return e.uo||null},this.Wo=function(){return e.Gn},this.Yo=function(){e.Gn=[]},this.di=function(t){this.Le(),e.Gn.push(t),e.Si()},this.ge=function(t,n){e.Le(),e.ro=t,e.uo=n,e.xo()},this.qo=function(){e.Le()},this.Bo=function(){e.Be(),e.co=e._e.create(e.qo,1e3,"PlayerMonitor.update")},this.Be=function(){e.co&&(e.co(),e.co=null)},this.Ce=function(t,n,i){e.vo=i,e.we=t,e.Xo(),e.Re=n,e.we&&g.AdType.CLIENT_SIDE===e.we&&(e.Pn=g.PlayerState.UNKNOWN,e.Jo(e.we,n,i?i[g.POD_POSITION]:null))},this.ye=function(){e.we&&g.AdType.CLIENT_SIDE===e.we&&(e.Qo(),e.Pn=g.PlayerState.UNKNOWN),e.Zo(),e.we=null,e.Re=null},this.zo=function(){return e.vo},this.$o=function(){return e.we},this.getContentMetadata=function(){return this.Ct},this.Ie=function(){this.no=null,this.io=null,this.Ct=null,this.eo=null,this.Pn=I.PlayerState.UNKNOWN,this.so=-1,this.oo=-1,this.Gn=[],this.ro=null,this.uo=null,this.ho=-2,this.ao=-2,this.Ln=-1,this.V=I.DEFAULT_SIGNAL_STRENGTH,this.fo=null,this.gi=null,this.U=null,this.M=null,this._e=null,this.co=null,this.lo=null,this.do=null,this.vo=null,this.we=null,this.Re=null,this.jn=null,this.Kn=null,this.Wn=null,e.Ue=null,e.Fe=a.NO_SESSION_KEY}},d=U.PlayerMonitorImpl=function(){var o=this;o.De=null,o.Ue=null,o.Fe=a.NO_SESSION_KEY,function(t,n){J.call(this,n),o.De=t}.apply(this,arguments),this.getPHT=function(){return o.Oo()},this.getBufferLength=function(){return o.No()},this.getRenderedFrameRate=function(){return o.wo()},this.getSignalStrength=function(){return o.mo()},this.So=function(){o.Ue&&o._ContentSessionKey!==a.NO_SESSION_KEY&&(o.Ro()?o.Ue.setPlayerSeekStart(o.Ao()):o.Ue.setPlayerSeekEnd())},this._o=function(){o.Ue&&(o.Ue.setPlayerState(o.Eo()),o.ve()>0&&o.Ue.setBitrateKbps(o.ve()),o.Io()>0&&o.Ue.setAvgBitrateKbps(o.Io()),o.Do()>0&&o.Ue.setVideoResolutionWidth(o.Do()),o.bo()>0&&o.Ue.setVideoResolutionHeight(o.bo()),o.Co()&&o.Ue.setCDNServerIP(o.Co()),m.gt(o.Ni())&&o.Ue.setDroppedFramesTotal(o.Ni()),m.Pt(o.si())&&o.Ue.setAudioLang(o.si()),m.Pt(o.ri())&&o.Ue.setSubtitleLang(o.ri()),m.Pt(o.hi()))&&o.Ue.setCcLang(o.hi())},this.Lt=function(){o.Fe!==a.NO_SESSION_KEY&&o.De&&o.De.updateContentMetadata(o.Fe,o.Ct)},this.Ve=function(){if(o.Ue){o.lo&&m.Ht(o.lo)>0&&(o.lo[g.MODULE_NAME]&&o.lo[g.MODULE_VERSION]&&(t=o.lo[g.MODULE_NAME],n=o.lo[g.MODULE_VERSION],m.Pt(t))&&m.Pt(n)&&o.Ue.setModuleNameAndVersion(t,n),o.lo[g.FRAMEWORK_NAME]&&(t=o.lo[g.FRAMEWORK_NAME],m.Pt(t))&&o.Ue.setPlayerType(t),o.lo[g.FRAMEWORK_VERSION])&&(n=o.lo[g.FRAMEWORK_VERSION],m.Pt(n))&&o.Ue.setPlayerVersion(n);var t,n,i=o.Wo();o.Yo();for(var e=0;e<i.length;e++){var s=i[e];o.Ue.di(s)}}},this.Qo=function(){o.Ue&&o.Fe!==a.NO_SESSION_KEY&&(o._o(),this.tr())},this.Vt=function(){o.Ue&&o.Fe!==a.NO_SESSION_KEY&&(o._o(),o.De.kt(o.Fe))},this.tr=function(){o.De&&o.Fe!==g.NO_SESSION_KEY&&o.De.adEnd(o.Fe)},this.Jo=function(t,n,i){var e;o.Ue&&o.Fe!==g.NO_SESSION_KEY&&(e=null,g.AdType.CLIENT_SIDE===t?e=a.AdStream.SEPARATE:g.AdType.SERVER_SIDE===t&&(e=a.AdStream.CONTENT),o.nr(e,n,i))},this.Mt=function(){o.Ue&&o.Fe!==g.NO_SESSION_KEY&&o.De.Ut(o.Fe)},this.nr=function(t,n,i){o.De&&o.Fe!==g.NO_SESSION_KEY&&o.De.adStart(o.Fe,t,n,i)},this.Me=function(){if(o.De){o.Ue=o.De.getPlayerStateManager(!0),o.Ve(),o.Ue.setClientMeasureInterface(this);try{var t;o.Ct&&o.Ct.custom&&!o.Ct.custom[g.UTM_TRACKING_URL]&&(Array.prototype.filter||(Array.prototype.filter=function(t){if(void 0===this||null===this)throw new TypeError;var n=Object(this),i=n.length>>>0;if("function"!==typeof t)throw new TypeError;for(var e,s=[],o=arguments.length>=2?arguments[1]:void 0,r=0;r<i;r++)r in n&&(e=n[r],t.call(o,e,r,n))&&s.push(e);return s}),""!==(t=m.ir().split("?").join("").split("&").filter(function(t){return 2===t.split("=").length&&t.split("=")[0].toLowerCase().indexOf("utm_")>=0}).join("&")))&&(o.Ct.custom[g.UTM_TRACKING_URL]=t)}catch(t){o.p.error("PlayerMonitorImpl _createSession : "+t)}o.Fe=o.De.createSession(o.Ct,o.Ue,!0)}},this.Go=function(){o.De&&(o.Ue&&(o.Ue.setPlayerState(g.PlayerState.STOPPED),o.Ue=null),o.Fe!==g.NO_SESSION_KEY)&&(o.De.cleanupSession(o.Fe),o.Fe=g.NO_SESSION_KEY)},this.Si=function(){if(o.De&&o.Fe!==a.NO_SESSION_KEY){var t=o.Wo();o.Yo();for(var n=0;n<t.length;n++){var i=t[n];o.De.reportError(o.Fe,i.er(),i.sr())}}},this.xo=function(){o.Fe!==a.NO_SESSION_KEY&&o.De&&o.De.sendCustomEvent(o.Fe,o.jo(),o.Ko())},this.Vo=function(){var t,n=o.Mo(),i=!1,e=!1;for(t in n){var s=n[t];if(m.Pt(t)&&null!==s&&void 0!==s)switch(t){case g.STREAM_URL:e=!0,o.Ct.streamUrl=s;break;case g.ASSET_NAME:e=!0,o.Ct.assetName=s;break;case g.DEFAULT_RESOURCE:e=!0,o.Ct.defaultResource=s;break;case g.VIEWER_ID:e=!0,o.Ct.viewerId=s;break;case g.PLAYER_NAME:e=!0,o.Ct.applicationName=s;break;case g.DURATION:e=!0,o.Ct.duration=s;break;case g.IS_LIVE:e=!0,o.Ct.streamType=s;break;case g.ENCODED_FRAMERATE:e=!0,o.Ct.encodedFrameRate=s;break;case g.MODULE_NAME:case g.MODULE_VERSION:case g.FRAMEWORK_NAME:case g.FRAMEWORK_VERSION:i=!0,o.lo[t]=s;break;default:g.APPLICATION_VERSION;e=!0,o.Ct.custom[t]=s}}i&&this.Ve(),e&&this.Lt()},this.Xo=function(){this.rr(g.Events.POD_START)},this.Zo=function(){this.rr(g.Events.POD_END)},this.rr=function(t){var n,i,e;o.De&&o.Fe!==g.NO_SESSION_KEY&&(n={},(e=this.zo())&&((i=e[g.POD_POSITION])&&(n[g.POD_POSITION]=i),(i=e[g.POD_INDEX])&&(n[g.POD_INDEX]=i+""),t===g.Events.POD_START)&&(i=e[g.POD_DURATION])&&(n[g.POD_DURATION]=i+""),(e=this.$o())&&(n[g.AD_TYPE]=e),o.De.sendCustomEvent(o.Fe,t,n))},this.yo=function(t){o.Ue.setDroppedFramesCount(t)},this.ur=function(t){this.Fe===g.NO_SESSION_KEY&&t!==g.NO_SESSION_KEY&&(this.Fe=t)},this.ke=function(){return this.Fe},this.Jt=function(){return o.De.getSessionId(this.Fe)},this.Qt=function(){return o.De.getClientId(this.Fe)},this.Zt=function(t,n){o.De.Zt(this.Fe,t,n)},d.prototype=Object.create(J.prototype),d.prototype.constructor=d},lt.Impl=lt.Impl||{},lt.Impl.Html5Http=function(){!function(){}.apply(this,arguments),this.makeRequest=function(){return this.makeRequestStandard.apply(this,arguments)},this.makeRequestStandard=function(t,n,i,e,s,o){var r=new XMLHttpRequest;return r.open(t,n,!0),e&&r.overrideMimeType&&(r.overrideMimeType=e),e&&r.setRequestHeader&&r.setRequestHeader("Content-Type",e),s>0&&(r.timeout=s,r.ontimeout=function(){r.ontimeout=r.onreadystatechange=null,o&&o(!1,"timeout after "+s+" ms")}),r.onreadystatechange=function(){4===r.readyState&&(r.ontimeout=r.onreadystatechange=null,200===r.status?o&&o(!0,r.responseText):o&&o(!1,"http status "+r.status))},r.send(i),null},this.release=function(){}},lt.Impl=lt.Impl||{},lt.Impl.Html5Logging=function(){!function(){}.apply(this,arguments),this.consoleLog=function(t,n){"undefined"!==typeof console&&(console.log&&n===h.LogLevel.DEBUG||n===h.LogLevel.INFO?console.log(t):console.warn&&n===h.LogLevel.WARNING?console.warn(t):console.error&&n===h.LogLevel.ERROR&&console.error(t))},this.release=function(){}},lt.Impl=lt.Impl||{},lt.Impl.Html5Metadata=function(){!function(){}.apply(this,arguments),this.getBrowserName=function(){return null},this.getBrowserVersion=function(){return null},this.getDeviceBrand=function(){return null},this.getDeviceManufacturer=function(){return null},this.getDeviceModel=function(){return null},this.getDeviceType=function(){return null},this.getDeviceVersion=function(){return null},this.getFrameworkName=function(){return null},this.getFrameworkVersion=function(){return null},this.getOperatingSystemName=function(){return null},this.getOperatingSystemVersion=function(){return null},this.getDeviceCategory=function(){return null},this.getScreenWidth=function(){return"undefined"!==typeof window&&window&&window.screen&&window.screen.width?window.screen.width.toString():null},this.getScreenHeight=function(){return"undefined"!==typeof window&&window&&window.screen&&window.screen.height?window.screen.height.toString():null},this.getScaleFactor=function(){return"undefined"!==typeof window&&window&&window.devicePixelRatio?window.devicePixelRatio.toString():null},this.release=function(){}},lt.Impl=lt.Impl||{},lt.Impl.Html5Storage=function(){!function(){}.apply(this,arguments),this.saveData=function(t,n,i,e){t=t+"."+n;try{localStorage.setItem(t,i),e(!0,null)}catch(t){e(!1,t.toString())}},this.loadData=function(t,n,i){t=t+"."+n;try{i(!0,localStorage.getItem(t))}catch(t){i(!1,t.toString())}},this.release=function(){}},lt.Impl=lt.Impl||{},lt.Impl.Html5Time=function(){!function(){}.apply(this,arguments),this.getEpochTimeMs=function(){return(new Date).getTime()},this.release=function(){}},lt.Impl=lt.Impl||{},lt.Impl.Html5Timer=function(){!function(){}.apply(this,arguments),this.createTimer=function(t,n){var i=setInterval(t,n);return function(){-1!==i&&(clearInterval(i),i=-1)}},this.release=function(){}},v=U.VideoAnalytics=function(){var s=this;s.Ee=null,s.T=null,s._e=null,s.le=null,s.pe=null,this.release=function(){s.p,s.le&&s.le.fe()&&s.le.de(!1),"undefined"!==typeof lt.ProxyMonitor&&s.pe&&(lt.ProxyMonitor.release(s.pe),s.pe=null),s.le&&(s.le.Ne(null),s.le.Ie(),s.le=null),s._e=null},function(t,n){s.Ee=t,s.T=n,s._e=n.buildTimer(g.version),s.le=new d(s.Ee,s._e),w.call(this)}.apply(this,arguments),this.reportPlaybackRequested=function(t){s.p,s.le&&(m.Ht(t)>0&&s.setContentInfo(t),s.le.fe()||s.le.de(!0))},this.reportPlaybackEnded=function(){s.p,s.le&&s.le.fe()&&(s.le.de(!1),"undefined"!==typeof lt.ProxyMonitor&&s.pe&&(lt.ProxyMonitor.release(s.pe),s.pe=null),s.le.Ne(null))},this.reportPlaybackFailed=function(t,n){s.le&&(m.Ht(n)>0&&s.setContentInfo(n),s.le.fe()||s.le.de(!0),s.p,s.reportPlaybackError(t,a.ErrorSeverity.FATAL),s.reportPlaybackEnded())},this.setContentInfo=function(t){m.Ht(t)<=0||s.le&&(s.p,s.le.Se(t))},this.setPlayerInfo=function(t){m.Ht(t)<=0||s.le&&(s.p,s.le.Se(t))},this.reportPlaybackMetric=function(){0!==arguments.length&&(1===arguments.length?s.Oe(arguments[0]):2===arguments.length?s.Oe(arguments[0],arguments[1]):3===arguments.length?s.Oe(arguments[0],arguments[1],arguments[2]):4===arguments.length&&s.Oe(arguments[0],arguments[1],arguments[2],arguments[3]))},this.reportPlaybackError=function(t,n){s.le&&m.Pt(t)&&(s.p,t=new L(t,n),s.le.di(t))},this.reportPlaybackEvent=function(t,n){if(m.Pt(t)&&s.le&&(s.p,s.le))switch(t){case g.Events.USER_WAIT_STARTED:case g.Events.BUMPER_VIDEO_STARTED:s.le.Mt();break;case g.Events.USER_WAIT_ENDED:case g.Events.BUMPER_VIDEO_ENDED:s.le.Vt();break;default:s.le.ge(t,n)}},this.setCallback=function(t){s.p,s.le&&s.le.Ne(t)},this.reportAdBreakStarted=function(t,n,i){s.le&&(s.p,s.le.Ce(t,n,i))},this.reportAdBreakEnded=function(){s.le&&(s.p,s.le.ye())},this.setPlayer=function(t,n){var i,e;void 0!==t&&(n&&(i=n[g.CONVIVA_MODULE],e=n[g.MEDIA_ELEMENT]),"undefined"!==typeof i?lt.ProxyMonitor=i.ProxyMonitor:"undefined"!==typeof ConvivaModule&&(lt.ProxyMonitor=ConvivaModule.ProxyMonitor),"undefined"!==typeof lt.ProxyMonitor)&&(s.p,!t&&s.pe?(lt.ProxyMonitor.release(s.pe),s.pe=null):t?(s.pe&&lt.ProxyMonitor.release(s.pe),s.p,s.pe="undefined"!==typeof e?lt.ProxyMonitor.initConvivaDropIn(t,e,s.T,this,lt):lt.ProxyMonitor.initConvivaDropIn(t,s.T,this,lt)):"undefined"!==typeof e&&(s.pe=lt.ProxyMonitor.initConvivaDropIn(t,e,s.T,this,lt)))},this.setAdAnalytics=function(t){t?s.getAdType()&&(s.getAdType()===g.AdType.SERVER_SIDE?s.ae=t.getAdPlayerMonitor():s.getAdType()===g.AdType.CLIENT_SIDE&&s.p):s.ae=null},this.configureExistingSession=function(t){t!==g.NO_SESSION_KEY&&s.le&&(s.p,s.le.ur(t))},this.getSessionId=function(){return s.le?(s.p,s.le.Jt()):g.NO_SESSION_KEY},this.getClientId=function(){return s.le?(s.p,s.le.Qt()):null},this.Te=function(){return s.p,this.le},this.getAdType=function(){return s.le?s.le.we:null},this.me=function(){return s.le?s.le.Re:null},v.prototype=Object.create(w.prototype),v.prototype.constructor=v},U.JsonParse=(k={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:"\n",r:"\r",t:"\t"},o=function(t){throw{name:"SyntaxError",message:t,at:n,text:V}},r=function(t){return t&&t!==s&&o("Expected '"+t+"' instead of '"+s+"'"),s=V.charAt(n),n+=1,s},F=function(){var t,n,i,e="";if('"'===s)for(;r();){if('"'===s)return r(),e;if("\\"===s)if(r(),"u"===s){for(n=i=0;n<4&&(t=parseInt(r(),16),isFinite(t));n+=1)i=16*i+t;e+=String.fromCharCode(i)}else{if("string"!==typeof k[s])break;e+=k[s]}else e+=s}o("Bad string")},e=function(){for(;s&&s<=" ";)r()},u=function(){switch(e(),s){case"{":var t,n={};if("{"===s){if(r("{"),e(),"}"===s)return r("}"),n;for(;s;){if(t=F(),e(),r(":"),Object.hasOwnProperty.call(n,t)&&o('Duplicate key "'+t+'"'),n[t]=u(),e(),"}"===s)return r("}"),n;r(","),e()}}return void o("Bad object");case"[":var i=[];if("["===s){if(r("["),e(),"]"===s)return r("]"),i;for(;s;){if(i.push(u()),e(),"]"===s)return r("]"),i;r(","),e()}}return void o("Bad array");case'"':return F();case"-":return ft();default:return(s>="0"&&s<="9"?ft:function(){switch(s){case"t":return r("t"),r("r"),r("u"),r("e"),!0;case"f":return r("f"),r("a"),r("l"),r("s"),r("e"),!1;case"n":return r("n"),r("u"),r("l"),r("l"),null}o("Unexpected '"+s+"'")})()}},function(t,r){return V=t,n=0,s=" ",t=u(),e(),s&&o("Syntax error"),"function"===typeof r?function t(n,i){var e,s,o=n[i];if(o&&"object"===typeof o)for(e in o)Object.hasOwnProperty.call(o,e)&&(void 0!==(s=t(o,e))?o[e]=s:delete o[e]);return r.call(n,i,o)}({"":t},""):t}),A=U.JSON2={},"function"!==typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+t(this.getUTCMonth()+1)+"-"+t(this.getUTCDate())+"T"+t(this.getUTCHours())+":"+t(this.getUTCMinutes())+":"+t(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()}),"function"!==typeof A.stringify&&(E=/[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,Q={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},A.stringify=function(t,n,i){var e;if(R=_="","number"===typeof i)for(e=0;e<i;e+=1)R+=" ";else"string"===typeof i&&(R=i);if(!(p=n)||"function"===typeof n||"object"===typeof n&&"number"===typeof n.length)return function t(n,i){var e,s,o,r,u,h=_,a=i[n];switch(a&&"object"===typeof a&&"function"===typeof a.toJSON&&(a=a.toJSON(n)),typeof(a="function"===typeof p?p.call(i,n,a):a)){case"string":return ct(a);case"number":return isFinite(a)?String(a):"null";case"boolean":case"null":return String(a);case"object":if(!a)return"null";if(_+=R,u=[],Object.prototype.toString.apply(a)===Object.prototype.toString.apply([])){for(r=a.length,e=0;e<r;e+=1)u[e]=t(e,a)||"null";o=0===u.length?"[]":_?"[\n"+_+u.join(",\n"+_)+"\n"+h+"]":"["+u.join(",")+"]"}else{if(p&&"object"===typeof p)for(r=p.length,e=0;e<r;e+=1)"string"===typeof p[e]&&(o=t(s=p[e],a))&&u.push(ct(s)+(_?": ":":")+o);else for(s in a)Object.prototype.hasOwnProperty.call(a,s)&&(o=t(s,a))&&u.push(ct(s)+(_?": ":":")+o);o=0===u.length?"{}":_?"{\n"+_+u.join(",\n"+_)+"\n"+h+"}":"{"+u.join(",")+"}"}return _=h,o}}("",{"":t});throw new Error("JSON2.stringify")}),O=U.hr={ar:"0123456789abcdef",cr:function(t){for(var n="",i=7;i>=0;i--)n+=O.ar.charAt(t>>4*i&15);return n},lr:function(t){for(var n=1+(t.length+8>>6),i=new Array(16*n),e=0;e<16*n;e++)i[e]=0;for(e=0;e<t.length;e++)i[e>>2]|=t.charCodeAt(e)<<24-e%4*8;return i[e>>2]|=128<<24-e%4*8,i[16*n-1]=8*t.length,i},dr:function(t,n){var i=(65535&t)+(65535&n);return(t>>16)+(n>>16)+(i>>16)<<16|65535&i},vr:function(t,n){return t<<n|t>>>32-n},Er:function(t,n,i,e){return t<20?n&i|~n&e:!(t<40)&&t<60?n&i|n&e|i&e:n^i^e},_r:function(t){return t<20?1518500249:t<40?1859775393:t<60?-1894007588:-899497514},Rr:function(t){for(var n="",i=0;i<t.length;i++)n+=String.fromCharCode(t[i]);return O.pr(n)},pr:function(t){if(""===t)return"";for(var n,i=O.lr(t),e=new Array(80),s=1732584193,o=-271733879,r=-1732584194,u=271733878,h=-1009589776,a=0;a<i.length;a+=16){for(var f=s,c=o,l=r,d=u,v=h,E=0;E<80;E++)e[E]=E<16?i[a+E]:O.vr(e[E-3]^e[E-8]^e[E-14]^e[E-16],1),n=O.dr(O.dr(O.vr(s,5),O.Er(E,o,r,u)),O.dr(O.dr(h,e[E]),O._r(E))),h=u,u=r,r=O.vr(o,30),o=s,s=n;s=O.dr(s,f),o=O.dr(o,c),r=O.dr(r,l),u=O.dr(u,d),h=O.dr(h,v)}return O.cr(s)+O.cr(o)+O.cr(r)+O.cr(u)+O.cr(h)}},(N=U.CwsProtocol=function(){this.Ar=function(t,n,i,e){return e.seq=t,e.st=n,e.t=i,e},this.Tr=function(t,n){var i=N.Qs;return this.Ar(t,n,i,{})}}).version="2.6",N.Sr="/0/wsg",N.H="0",N.Or=-1,N.Nr=!1,N.gr=2,N.Ir=-1,N.wr=-1,N.Cr=1e3,N.yr="sdk.js.1",N.Hs="CwsStateChangeEvent",N.qs="CwsErrorEvent",N.Qs="CwsSessionEndEvent",N.Zs="CwsCustomEvent",N.mr="CwsSeekEvent",N.Dr="CwsDataSamplesEvent",N.Pr="ok",N.Lr="err",N.Mr="clid",N.Ur="cfg",N.Vr="evs",N.kr="maxhbinfos",N.Fr="slg",N.Br="hbi",N.Hr="gw",N.Gr="fp",N.jr="csi_en",N.Kr="CwsSessionHb",N.Wr="t",N.Yr="st",N.qr="sst",N.Xr="lv",N.Jr="seq",N.Qr="cid",N.Zr="clid",N.zr="clv",N.$r="pver",N.tu="iid",N.nu="sid",N.iu="vid",N.eu="an",N.su="pn",N.ou="tags",N.ru="sf",N.uu="evs",N.hu="lg",N.au="hbinfos",N.fu="sdk",N.cu="pj",N.Gs="ps",N.Ys="br",N.xs="avgbr",N.lu="cl",N.du="efps",N.vu="afps",N.Eu="rfpstot",N._u="rfpscnt",N.Ru="rs",N.pu="pht",N.Au="bl",N.Tu="url",N.Su="caps",N.Ou="pm",N.Nu="w",N.gu="h",N.Iu="ct",N.wu="le",N.Cu="dftot",N.yu="dfcnt",N.mu="al",N.Du="sl",N.Pu="cal",N.bu="ss",N.Lu="csi_n",N.Mu="csi_t",N.Uu="csi_l",N.Vu="csi_v",N.ku="csi_c",N.Fu="sch",N.Bu="br",N.Hu="brv",N.Gu="dvb",N.ju="dvma",N.Ku="dvm",N.Wu="dvt",N.Yu="dvv",N.xu="sw",N.qu="sh",N.Xu="scf",N.Ju="fw",N.Qu="fwv",N.Zu="cc",N.zu="mn",N.$u="mv",N.th="os",N.nh="osv",N.ih="cat",N.eh="caps",N.sh="t",N.oh="seq",N.rh="st",N.uh="act",N.hh="skto",N.Xs="err",N.Js="ft",N.ys="new",N.ah="old",N.zs="name",N.$s="attr",N.fh="seq",N.lh="err",N.dh="rtt",N.Eh="ad",N._h="csi",N.Rh=function(t){switch(t){case I.PlayerState.STOPPED:return N.ph;case I.PlayerState.PLAYING:return N.js;case I.PlayerState.BUFFERING:return N.Ks;case I.PlayerState.PAUSED:return N.Ws;case I.PlayerState.NOT_MONITORED:return N.Ah;default:return N.Th}},N.ph=1,N.js=3,N.Ks=6,N.Ws=12,N.Ah=98,N.Th=100,N.Sh={Oh:0,Ot:1,Nh:2,gh:4},N.Ih={wh:0},Z=U.LibJSONInterface=function(){this.Ch=function(t){var n=null;try{n=A.stringify(t)}catch(t){}return n},this.yh=function(t){var n=null;try{n=U.JsonParse(t)}catch(t){return n}return n=m.mh(n)?n:null}},z=U.CwsHeartbeat=function(){this.Dh={},function(){}.apply(this,arguments),this.get=function(){return this.Dh},this.Ph=function(t,n){this.Dh[t]=n},this.bh=function(t,n,i){this.Dh[t]||(this.Dh[t]={}),this.Dh[t][n]=i},this.Lh=function(t){this.Ph(N.Wr,t)},this.Mh=function(t){this.Ph(N.Yr,t)},this.Uh=function(t){this.Ph(N.qr,t)},this.Vh=function(t){this.Ph(N.Xr,t)},this.kh=function(t){this.Ph(N.Jr,t)},this.Fh=function(t){this.Ph(N.Qr,t)},this.Bh=function(t){this.Ph(N.Zr,t)},this.Hh=function(t){this.Ph(N.zr,t)},this.Gh=function(t){this.Ph(N.$r,t)},this.jh=function(t){this.Ph(N.eh,t)},this.Kh=function(t){this.Ph(N.nu,t)},this.Wh=function(t){this.Ph(N.tu,t)},this.Yh=function(t){this.Ph(N.iu,t)},this.xh=function(t){this.Ph(N.eu,t)},this.qh=function(t){this.Ph(N.su,t)},this.Xh=function(t){this.Ph(N.ou,t)},this.Jh=function(t){this.Ph(N.ru,t)},this.Qh=function(t){this.Ph(N.Su,t)},this.Zh=function(t){this.Ph(N.uu,t)},this.zh=function(t){this.Ph(N.fu,t)},this.$h=function(t){this.Ph(N.hu,t)},this.ta=function(t){this.Ph(N.au,t)},this.Je=function(t){this.Ph(N.Gs,t)},this.na=function(t){this.Ph(N.cu,t)},this.ia=function(t){this.Ph(N.lu,t)},this.ea=function(t){this.Ph(N.Ys,t)},this.sa=function(t){this.Ph(N.xs,t)},this.oa=function(t){this.Ph(N.Ru,t)},this.ra=function(t){this.Ph(N.du,t)},this.ua=function(t){this.Ph(N.vu,t)},this.ha=function(t){this.Ph(N._u,t)},this.aa=function(t){this.Ph(N.Eu,t)},this.fa=function(t){this.bh(N.Ou,N.Fu,t)},this.ca=function(t){this.bh(N.Ou,N.Bu,t)},this.la=function(t){this.bh(N.Ou,N.Hu,t)},this.da=function(t){this.bh(N.Ou,N.Gu,t)},this.va=function(t){this.bh(N.Ou,N.ju,t)},this.Ea=function(t){this.bh(N.Ou,N.Ku,t)},this._a=function(t){this.bh(N.Ou,N.Wu,t)},this.Ra=function(t){this.bh(N.Ou,N.Yu,t)},this.pa=function(t){this.bh(N.Ou,N.Ju,t),this.Ph(N.Ju,t)},this.Aa=function(t){this.bh(N.Ou,N.Qu,t),this.Ph(N.Qu,t)},this.Ta=function(t){this.bh(N.Ou,N.th,t.toUpperCase())},this.Sa=function(t){this.bh(N.Ou,N.nh,t)},this.Oa=function(t){this.bh(N.Ou,N.ih,t)},this.Na=function(t){this.bh(N.Ou,N.xu,t)},this.ga=function(t){this.bh(N.Ou,N.qu,t)},this.Ia=function(t){this.bh(N.Ou,N.Xu,t)},this.wa=function(t){this.Ph(N.Cu,t)},this.yo=function(t){this.Ph(N.yu,t)},this.Ca=function(t){this.Ph(N.pu,t)},this.ya=function(t){this.Ph(N.Au,t)},this.ma=function(t){this.Ph(N.Tu,t)},this.Da=function(t){this.Ph(N.Nu,t)},this.Pa=function(t){this.Ph(N.gu,t)},this.ba=function(t){this.Ph(N.Iu,t)},this.La=function(t){this.Ph(N.wu,t)},this.Ma=function(){this.Ph(N.Eh,!0)},this.Ua=function(t){this.Ph(N.bu,t)},this.setModuleName=function(t){this.bh(N.Zu,N.zu,t)},this.Va=function(t){this.bh(N.Zu,N.$u,t)},this.ka=function(t){this.Ph(N._h,t)},this.Fa=function(t){t&&this.Ph(N.Lu,t)},this.Ba=function(t){t&&this.Ph(N.Mu,t)},this.Ha=function(t){t&&this.Ph(N.Uu,t)},this.Ga=function(t){t&&this.Ph(N.Vu,t)},this.ja=function(t){t&&this.Ph(N.ku,t)},this.Ka=function(t){this.Ph(N.mu,t)},this.Wa=function(t){this.Ph(N.Du,t)},this.Ya=function(t){this.Ph(N.Pu,t)}},(C=U.CwsSession=function(){var _=this;_.qa=null,_.Xa=200,_.Ja=5e3,_.Ct=null,_.Ps=0,_.Qa=0,_.Za=N.Sh.Oh,_.za=N.Ih.wh,_.$a=[],_.tf=-1,_.yn=-2,_.Dn=-2,_.gi=-1,_.nf=-1,_.if=null,_.Pn=I.PlayerState.UNKNOWN,_.wn=-1,_.Ms=-1,_.On=null,_.Fn=-1,_.Bn=-1,_.Ue=null,_._n=null,_.Tn=null,_.Ls=null,_.Us=null,_.ef={},_.sf=null,_.rf=null,_.uf=null,_.hf=null,_.af=null,_.ff=null,_.cf=null,_.lf=null,_.df=null,_.vf=null,_.Ef=null,_._f=null,_.Rf=null,_.pf=null,_.Af=null,_.Vn=null,_.kn=null,_.M=null,_.U=null,_.fo=null,_.Tf=null,_.Sf=!1,_.Of=!1,_.Nf=!1,_.gf=!1,_.If=!1,_.wf=null,_.Cf=1e3,_.yf=0,_.mf=0,_.Df={},_.D={},_.Pf=!1,_.bf=null,_.Lf=null,_.Mf=null,_.Uf=null,_.Vf=null,_.kf=null,_.Ff=12e4,_.Bf=N.Nr,_.Hf=!1,_.Gf=null,_.ki=null,_.jn=null,_.Kn=null,_.Wn=null,function(t,n,i,e,s,o,r,u,h,a,f,c,l){this.jf=t,this.Ee=n,this.Vi=i,this.p=e,this.p.setModuleName("CwsSession"),this.g=s,this._e=o,this.Kf=r,this.Wf=u,this.Yf=h,this.Fi=a,this.xf=f,this.Ct=c,this.Ct&&(_.wn=this.Ct.encodedFrameRate,_.On=this.Ct.streamUrl,_.Ms=this.Ct.duration),this.xf&&(_.Gf=_.xf.get(y.B)),_.ki=l}.apply(this,arguments),this.Tt=function(){this.xf=null,this.Fi=null,this.N=null,this.Yf=null,this.Wf=null,this.Kf=null,this._e=null,this.g=null,this.p=null,this.Vi=null,this.Ee=null,this.jf.qf(),this.jf=null,this.Tf=null,this.Nf=!0},this.Xf=function(t){this.Ds=t,this.Jf=this.Ds.Jf,this.p.Kh(this.Ds.C),this.Ps=this.Yf.current(),this.Cs()||this.Qf()?(this.Za+=C.xa,_.p.info("start(): assetName="+_.Ct.assetName)):_.p.info("start()"+_.Zf())},this.zf=function(){this.gf=!0},this.$f=function(){this.p.debug("initialize()"),(this.Cs()||this.Qf()||this.Fs())&&(this.Ee&&this.Ee._&&this.Ee._.Bs(g.APP_TRACKER_EVENT.VIDEO_ATTEMPT,{},this),_.tc(),_.nc(),_.ic(),this.Cs()||this.Qf())&&_.ec()},this.sc=function(){this.p.debug("end(): schedule the last hb before session cleanup"+_.Zf()),this.oc(),this.rc(),this.uc(),this.hc()},this.ac=function(){this.gf||(this.hc(),this.fc())},this.ca=function(t){var n=_.sf;n!==t&&t&&(_.p.debug("Change browserName from "+n+" to "+t),_.sf=t)},this.la=function(t){var n=_.rf;n!==t&&t&&(_.p.debug("Change browserVersion from "+n+" to "+t),_.rf=t)},this.da=function(t){var n=_.uf;n!==t&&t&&(_.p.debug("Change deviceBrand from "+n+" to "+t),_.uf=t)},this.va=function(t){var n=_.hf;n!==t&&t&&(_.p.debug("Change deviceManufacturer from "+n+" to "+t),_.hf=t)},this.Ea=function(t){var n=_.af;n!==t&&t&&(_.p.debug("Change deviceModel from "+n+" to "+t),_.af=t)},this._a=function(t){var n=_.ff;n!==t&&t&&(_.p.debug("Change deviceType from "+n+" to "+t),_.ff=t)},this.Ra=function(t){var n=_.cf;n!==t&&t&&(_.p.debug("Change deviceVersion from "+n+" to "+t),_.cf=t)},this.Ta=function(t){var n=_.vf;n!==t&&t&&(_.p.debug("Change operatingSystemName from "+n+" to "+t),_.vf=t)},this.Sa=function(t){var n=_.Ef;n!==t&&t&&(_.p.debug("Change operatingSystemVersion from "+n+" to "+t),_.Ef=t)},this.Oa=function(t){var n=_._f;n!==t&&t&&(_.p.debug("Change deviceCategory from "+n+" to "+t),_._f=t)},this.Na=function(t){var n=_.Rf;n!==t&&t&&(_.p.debug("Change screenWidth from "+n+" to "+t),_.Rf=t)},this.ga=function(t){var n=_.pf;n!==t&&t&&(_.p.debug("Change screenHeight from "+n+" to "+t),_.pf=t)},this.Ia=function(t){var n=_._f;n!==t&&t&&(_.p.debug("Change scaleFactor from "+n+" to "+t),_.Af=t)},this.Vs=function(){return _.lf},this.pa=function(t){var n=_.lf;n!==t&&t&&(_.p.debug("Change frameworkName from "+n+" to "+t),_.lf=t)},this.ks=function(){return _.df},this.Aa=function(t){var n=_.df;n!==t&&t&&(_.p.debug("Change frameworkVersion from "+n+" to "+t),_.df=t)},this.ma=function(t){var n;_.Ct.streamUrl||(n=_.On)!==t&&t&&(_.p.debug("Change stream url from "+n+" to "+t),_.On=t)},this.cc=function(){_.rc(),_.Hf||(_.lc(),_.kf=_._e.create(_.lc,_.Ff,"CwsSession.startCdnTimer"),_.p.debug("fetching cdn ip timer started"))},this.rc=function(){_.kf&&(_.kf(),_.dc(null,null,null,null,null),_.kf=null)},this.lc=function(){_.p.debug("detectCDNServerIp(): For "+_.On),_.Bf?_.vc():_.rc()},this.vc=function(){try{var t;"function"===typeof XMLHttpRequest||"object"===typeof XMLHttpRequest?((t=new XMLHttpRequest).open("HEAD",_.On,!0),t.setRequestHeader("Pragma","akamai-x-cache-on"),t.onreadystatechange=function(){4===this.readyState&&(200===this.status&&(this.getAllResponseHeaders().indexOf("x-cache")>=0||this.getAllResponseHeaders().indexOf("X-Cache")>=0)?_.dc("Akamai","header","X-Cache",""+this.getResponseHeader("X-Cache"),""+this.status):_.dc("null","header","null","null",""+this.status))},t.send()):_.p.info("xmlhttpreq is not available here to fetch CDN Server Ip")}catch(t){_.p.info("Exception caught in makeAkamaiHeadRequest")}},this.dc=function(t,n,i,e,s){var o={},r={};_.bf!==t&&(null!==_.bf&&(r[N.Lu]=_.bf),_.bf=t,null===_.bf?o[N.Lu]="null":o[N.Lu]=_.bf),_.Lf!==n&&(null!==_.Lf&&(r[N.Mu]=_.Lf),_.Lf=n,null===_.Lf?o[N.Mu]="null":o[N.Mu]=_.Lf),_.Mf!==i&&(null!==_.Mf&&(r[N.Uu]=_.Mf),_.Mf=i,null===_.Mf?o[N.Uu]="null":o[N.Uu]=_.Mf),_.Uf!==e&&(null!==_.Uf&&(r[N.Vu]=_.Uf),_.Uf=e,null===_.Uf?o[N.Vu]="null":o[N.Vu]=_.Uf),_.Vf!==s&&(null!==_.Vf&&(r[N.ku]=_.Vf),_.Vf=s,null===_.Vf?o[N.ku]="null":o[N.ku]=_.Vf),"{}"!==JSON.stringify(o)&&_.Ec(o,r)},this._c=function(t){var n=_.yn;n!==t&&t>0&&(_.p.info("Change bitrate from "+n+" to "+t),_.Rc(n,t),_.yn=t)},this.Ac=function(t){var n=_.Dn;n!==t&&t>0&&(_.p.info("Change Avg bitrate from "+n+" to "+t),_.Tc(n,t),_.Dn=t)},this.wa=function(t){var n=_.gi;n!==t&&t>=0&&(_.p.info("Change dropped frames total from "+n+" to "+t),_.Sc(n,t),_.gi=t)},this.yo=function(t){var n=_.nf,i=t+(-1===_.nf?0:_.nf);n!==t&&i>=0&&(_.p.info("Change dropped frames count from "+n+" to "+i),_.Oc(n,i),_.nf=i)},this.oa=function(t){var n=_.if;n!==t&&t&&(_.p.info("Change resource from "+n+" to "+t),_.if=t)},this.xh=function(t){_._n!==t&&t&&(_.p.info("Change assetName from "+_._n+" to "+t),_._n=t)},this.Vh=function(t){var n=_.Us;n!==t&&m.ie(t)&&(_.p.info("Change isLive from "+n+" to "+t),_.Us=t)},this.Yh=function(t){var n=_.Tn;n!==t&&t&&(_.p.info("Change viewerId from "+n+" to "+t),_.Tn=t)},this.qh=function(t){var n=_.Ls;n!==t&&t&&(_.p.info("Change playerName from "+n+" to "+t),_.Ls=t)},this.Xh=function(t){var n=_.ef;!m.Nc(n,t)&&t&&(_.p.info("Change tags from "+m.gc(n)+" to "+m.gc(t)),_.ef=t)},this.ra=function(t){_.Ct.encodedFrameRate>0||(_.p.debug("setEncodedFrameRate(): "+t),_.wn=t)},this.ia=function(t){_.Ct.duration>0||(_.p.debug("setContentLength(): "+t),_.Ms=t)},this.Je=function(t){var n,i=!1;_.Of||t!==I.PlayerState.PLAYING||(_.Of=!0,_.Cs()&&(i=!0),m.Pt(_.Ct.viewerId)||_.p.error("Missing viewerId. viewerId should be updated before first frame is rendered."),m.Pt(_.Ct.streamType)&&c.StreamType.UNKNOWN!==_.Ct.streamType||_.p.error("Missing streamType - Live or VOD. streamType should be updated before first frame is rendered."),m.Pt(_.Ct.applicationName))||_.p.error("Missing applicationName. applicationName should be updated before first frame is rendered."),_.Pn!==t&&(n=_.Pn,_.p.info("setPlayerState(): changing player state from "+n+" to "+t),_.Ic(n,t),_.Pn=t,i)&&(_.p.info("SetPlayerState(): to playing state triggered urgent HB"),_.wc())},this.Cc=function(t){var n=_.Fn;n!==t&&t>0&&(_.p.debug("Change stream resolution width from "+n+" to "+t),_.yc(n,t),_.Fn=t)},this.mc=function(t){var n=_.Bn;n!==t&&t>0&&(_.p.debug("Change stream resolution height from "+n+" to "+t),_.Dc(n,t),_.Bn=t)},this.ba=function(t){var n=_.M;n!==t&&t&&(_.p.debug("Change network connection type from "+n+" to "+t),_.Pc(n,t),_.M=t)},this.La=function(t){var n=_.U;n!==t&&t&&(_.p.debug("Change network link encryption from "+n+" to "+t),_.bc(n,t),_.U=t)},this.ka=function(t){_.Hf=!0,_.rc();var n=_.fo;n!==t&&m.Pt(t)&&(_.p.debug("Change CDN Server IP from "+n+" to "+t),_.Lc(n,t),_.fo=t)},this.Ka=function(t){var n=_.jn;n!==t&&m.Pt(t)&&!_.Ds.Mc&&(_.p.info("Change Audio Lang from "+n+" to "+t),_.Uc(n,t),_.jn=t)},this.Wa=function(t){var n=_.Kn;n!==t&&m.Pt(t)&&!_.Ds.Vc&&(_.p.info("Change Subtitle Lang from "+n+" to "+t),_.kc(n,t),_.Kn=t)},this.Ya=function(t){var n=_.Wn;n!==t&&m.Pt(t)&&!_.Ds.Fc&&(_.p.info("Change Closed Caption Lang from "+n+" to "+t),_.Bc(n,t),_.Wn=t)},this.Hc=function(t){var n;_.p.debug("togglePauseJoin()"),_.Sf===t?_.p.debug("togglePauseJoin(): same value, ignoring"):(t=_.Sf,n=!_.Sf,_.Gc(t,n),_.Sf=!_.Sf)},this.jc=function(t,n){_.Kc(t,n),_.p.info("sendError(): triggered urgent HB"),n&&_.wc()},this.Wc=function(t,n){var i,e;n[N.sh]=t,n[N.rh]=this.bs(),n[N.oh]=this.jf.Yc(),this.Ue&&(i=b.xc(this.Ue.getPHT(),0,null,-1),e=b.xc(this.Ue.getBufferLength(),0,null,-1),i>=0&&(n[N.pu]=i),e>0)&&(n[N.Au]=e),this.jf.qc(n),this.Ee._&&this.Ee._.Bs(t,n,this)},this.Xc=function(t){_.Ue=t,_.Ue?_.Jc():_.Qc()},this.oc=function(){var t=this.Wf.Tr(this.Zc(),this.bs());this.Ee._&&this.Ee._.Bs(N.Qs,{},this),this.jf.qc(t)},this.Kc=function(t,n){var i={};i[N.Xs]=t,i[N.Js]=n,this.Wc(N.qs,i)},this.Rc=function(t,n){var i={},e={};t>0&&(e[N.Ys]=t),i[N.Ys]=n,this.Ec(i,e)},this.Tc=function(t,n){var i={},e={};t>0&&(e[N.xs]=t),i[N.xs]=n,this.Ec(i,e)},this.zc=function(t,n){var i={};i[N.uh]=t,n>=0&&(i[N.hh]=n),this.Wc(N.mr,i)},this.yc=function(t,n){var i={},e={};-1!==t&&(e[N.Nu]=t),i[N.Nu]=n,this.Ec(i,e)},this.Dc=function(t,n){var i={},e={};-1!==t&&(e[N.gu]=t),i[N.gu]=n,this.Ec(i,e)},this.Pc=function(t,n){var i={},e={};null!==t&&(e[N.Iu]=t),i[N.Iu]=n,this.Ec(i,e)},this.bc=function(t,n){var i={},e={};null!==t&&(e[N.wu]=t),i[N.wu]=n,this.Ec(i,e)},this.Lc=function(t,n){var i={},e={};m.Pt(t)&&(e[N._h]=t),i[N._h]=n,this.Ec(i,e)},this.Sc=function(t,n){var i={},e={};t>=0&&(e[N.Cu]=t),i[N.Cu]=n,this.Ec(i,e)},this.Oc=function(t,n){var i={},e={};t>=0&&(e[N.yu]=t),i[N.yu]=n,this.Ec(i,e)},this.Uc=function(t,n){var i={},e={};t!==n&&("string"===typeof t&&(e[N.mu]=t),i[N.mu]=n),this.Ec(i,e)},this.kc=function(t,n){var i={},e={};t!==n&&("string"===typeof t&&(e[N.Du]=t),i[N.Du]=n),this.Ec(i,e)},this.Bc=function(t,n){var i={},e={};t!==n&&("string"===typeof t&&(e[N.Pu]=t),i[N.Pu]=n),this.Ec(i,e)},this.Gc=function(t,n){var i={},e={};e[N.cu]=t,i[N.cu]=n,this.Ec(i,e)},this.Ic=function(t,n){var i={},e={};i[N.Gs]=N.Rh(n),e[N.Gs]=N.Rh(t),this.Ec(i,e)},this.Ec=function(t,n){var i={};i[N.ys]=t,n&&m.Ht(n)>0&&(i[N.ah]=n),this.Wc(N.Hs,i)},this.$c=function(t,n){var i={};i[N.zs]=t,m.Ht(n)>0&&(i[N.$s]=n),this.Wc(N.Zs,i)},this.uc=function(){_.qa&&(_.qa(),_.qa=null)},this.fc=function(){_.uc();var t=1e3*_.Vi.heartbeatInterval;_.qa=_._e.create(_.hc,t,"Session.sendHeartbeat:"+this.Jf)},this.Qc=function(){_.wf&&(_.wf(),_.wf=null)},this.Jc=function(){_.Qc(),_.wf=_._e.create(_.tl,_.Cf,"Session.startRfpsTimer")},this.nl=function(){var t={err:"pending"};t.seq=_.Qa-1,t.sentAt=_.bs(),t.rtt=-1,_.$a.push(t);for(var n=0;n<_.$a.length;n++)"ok"===(t=_.$a[n]).err&&(_.$a.splice(n,1),n--)},this.il=function(t,n){for(var i=0;i<_.$a.length;i++){var e=_.$a[i];e.seq===t&&(e.rtt=_.bs()-e.sentAt,e.err=n)}},this.el=function(t){for(var n=0;n<_.$a.length;n++){var i=_.$a[n];i.seq===t&&(i.rtt=_.bs()-i.sentAt,i.err="ok")}},this.sl=function(){for(var t,n,i=_.xf.get(y.ol),e=[],s=-1,o=0;o<_.$a.length;o++)if("ok"===(n=_.$a[o]).err){s=n.seq;break}for(var r=0;r<_.$a.length;r++)((t=(n=_.$a[r]).seq)<_.Qa-i||t<s)&&e.push(r);for(var u=[],h=0;h<_.$a.length;h++)t=(n=_.$a[h]).seq,e.indexOf(h)<0&&u.push(_.$a[h]);_.$a=u},this.rl=function(){_.sl();for(var t=[],n=0;n<_.$a.length;n++){var i=_.$a[n],e={};e[N.fh]=i.seq,e[N.dh]=i.rtt,e[N.lh]=i.err,t.push(e)}return t},this.ul=function(){var t,n=-1,i=-1,e=_.jf.qf();if(_.Fs()&&0===e.length)return null;var s=new z,o=(s.Lh(N.Kr),s.Fh(_.Vi.customerKey),s.Bh(_.xf.get(y.B)),s.Kh(_.Ds.C),s.kh(_.Qa),s.Gh(N.version),g.version);if(_.ki&&(o=_.ki),s.Hh(o),s.Wh(_.Ee.C),s.jh(0),_.Ee.M?s.ba(_.Ee.M):_.M&&s.ba(_.M),_.Ee.U?s.La(_.Ee.U):_.U&&s.La(_.U),m.Pt(_.fo)&&s.ka(_.fo),s.fa(N.yr),_.sf&&s.ca(_.sf),_.rf&&s.la(_.rf),_.uf&&s.da(_.uf),_.hf&&s.va(_.hf),_.af&&s.Ea(_.af),_.ff&&s._a(_.ff),_.cf&&s.Ra(_.cf),_.vf&&s.Ta(_.vf),_.Ef&&s.Sa(_.Ef),_._f&&s.Oa(_._f),_.lf&&s.pa(_.lf),_.df&&s.Aa(_.df),_.Rf&&!isNaN(_.Rf)&&s.Na(parseInt(_.Rf,10)),_.pf&&!isNaN(_.pf)&&s.ga(parseInt(_.pf,10)),_.Af&&!isNaN(_.Af)?s.Ia(parseFloat(_.Af)):(_.Rf&&!isNaN(_.Rf)||_.pf&&!isNaN(_.pf))&&s.Ia(1),_.Ue&&(_.Vn=_.Ue.zn(),_.Vn&&s.setModuleName(_.Vn),_.kn=_.Ue.$n(),_.kn&&s.Va(_.kn),_.Ue.ti()&&(_.lf=_.Ue.ti(),s.pa(_.lf)),_.Ue.ii())&&(_.df=_.Ue.ii(),s.Aa(_.df)),_.Tn&&s.Yh(_.Tn),m.Ht(_.ef)>0&&s.Xh(_.ef),_.Cs()||_.Qf()){_.Qf()&&s.Ma(),_._n&&s.xh(_._n),s.Jh(_.Za);o=N.Rh(_.Pn),o=(s.Je(o),s.na(_.Sf),_.Ls&&s.qh(_.Ls),m.ie(_.Us)&&s.Vh(_.Us),_.Ms>0&&s.ia(_.Ms),_.yn>0&&s.ea(_.yn),_.Dn>0&&s.sa(_.Dn),null!==_.if&&s.oa(_.if),_.wn>0&&s.ra(_.wn),_.Ue&&(n=b.xc(_.Ue.getPHT(),0,null,-1),i=b.xc(_.Ue.getBufferLength(),0,null,-1)),m.gt(_.Ee.V)?t=_.Ee.V:_.Ue&&(t=_.Ue.getSignalStrength()),n>=0&&s.Ca(n),i>0&&s.ya(i),_.hl());if(o>0&&s.ua(o),_.mf>0&&s.aa(b.xc(_.mf,0,null,-1)),_.yf>0&&s.ha(b.xc(_.yf,0,null,-1)),t!==I.DEFAULT_SIGNAL_STRENGTH&&s.Ua(t),_.On&&s.ma(_.On),_.Fn>0&&s.Da(_.Fn),_.Bn>0&&s.Pa(_.Bn),_.gi>-1&&s.wa(_.gi),_.nf>-1&&(s.yo(_.nf),_.nf>0)&&(_.Oc(_.nf,0),_.nf=0),_.jn&&s.Ka(_.jn),_.Kn&&s.Wa(_.Kn),_.Wn&&s.Ya(_.Wn),"undefined"!==typeof _.Tf)for(var r in _.Tf)s.Ph(r,_.Tf[r])}else s.Jh(N.Sh.Oh);return e.length>0&&s.Zh(e),s.Qh(_.za),s.zh(!0),_.xf.get(y.al)&&s.$h(_.Fi.qf()),_.xf.get(y.ol)>0&&(n=_.rl()).length>0&&s.ta(n),0===_.Qa&&(s=_.fl(s)),(s=0!==_.Qa?_.ll(s):s).Uh(_.Ps),s.Mh(_.bs()),_.Bf&&(s.Fa(_.bf),s.Ba(_.Lf),s.Ha(_.Mf),s.Ga(_.Uf),s.ja(_.Vf)),_.Qa++,s.get()},this.ll=function(t){var n,i=_.D,e={};for(n in t.Dh.tags)Object.prototype.hasOwnProperty.call(i,n)||(e[n]=t.Dh.tags[n]);t.Dh.tags=e,_.D={};for(var s=0;s<_.Df.length;s++)Object.prototype.hasOwnProperty.call(_.Ee.D,_.Df[s])?Object.prototype.hasOwnProperty.call(_.Ee.L,_.Df[s])?_.Ee.L[_.Df[s]]===y.$t.tn?(_.D[y.dl+""+_.Df[s]]=y.$t.tn,_.Ee.P("End-user chose to opt-out of personal data collection")):_.Ee.L[_.Df[s]]===y.$t.en?(_.D[y.dl+""+_.Df[s]]=y.$t.en,_.Ee.P("End-user chose to opt-out of personal data collection")):_.Ee.L[_.Df[s]]===y.$t.zt?(_.D[y.dl+""+_.Df[s]]=y.$t.zt,_.Ee.P("End-user used privacy settings and chose to opt-out of personal data collection")):(_.D[y.dl+""+_.Df[s]]=_.Ee.D[_.Df[s]],_.Ee.P("Data collection successful")):(_.D[y.dl+""+_.Df[s]]=_.Ee.D[_.Df[s]],_.Ee.P("Data collection successful")):_.D[y.dl+""+_.Df[s]]=y.$t.vl;var o,r={};for(o in i){var u=o.split(".");"{}"!==JSON.stringify(_.Df)&&-1!==_.Df.indexOf(""+u[2])||i[y.dl+""+u[2]]===y.$t.El||(_.Ee.P("Data collection restricted from Conviva back-end"),_.D[y.dl+""+u[2]]=y.$t.El,r[y.dl+""+u[2]]=y.$t.El)}if("{}"!==JSON.stringify(_.D)){var h,a=m._l(_.D);for(h in t.Dh.tags)a[h]=t.Dh.tags[h];if(t.Dh.tags=a,!m.Nc(i,_.D)){var f={};if("{}"!==JSON.stringify(r)&&(f[N.ou]=r),"{}"!==JSON.stringify(i)){for(var c in i)_.D[c]&&i[c]!==_.D[c]&&(f[N.ou]||(f[N.ou]={}),f[N.ou][c]=_.D[c]);for(var l in _.D)Object.prototype.hasOwnProperty.call(i,l)&&i[l]===_.D[l]||(f[N.ou]||(f[N.ou]={}),f[N.ou][l]=_.D[l])}"{}"===JSON.stringify(i)&&(f[N.ou]=_.D);var d,v,E={};E[N.ys]=f,E[N.sh]=N.Hs,E[N.rh]=_.bs(),E[N.oh]=_.jf.Yc(),_.Ue&&(d=b.xc(_.Ue.getPHT(),0,null,-1),v=b.xc(_.Ue.getBufferLength(),0,null,-1),d>=0&&(E[N.pu]=d),v>0)&&(E[N.Au]=v),t.Dh.evs||(t.Dh.evs=[]),t.Dh.evs.push(E)}}return t},this.fl=function(t){var n=_.Rl();if("{}"!==JSON.stringify(n)){var i,e=m._l(n);for(i in t.Dh.tags)e[i]=t.Dh.tags[i];t.Dh.tags=e;var s,o={},n=(o[N.ou]=n,{});n[N.ys]=o,n[N.sh]=N.Hs,n[N.rh]=_.bs(),n[N.oh]=_.jf.Yc(),_.Ue&&(o=b.xc(_.Ue.getPHT(),0,null,-1),s=b.xc(_.Ue.getBufferLength(),0,null,-1),o>=0&&(n[N.pu]=o),s>0)&&(n[N.Au]=s),t.Dh.evs||(t.Dh.evs=[]),t.Dh.evs.push(n)}return t},this.Rl=function(){var t={};if("undefined"!==typeof navigator&&navigator){if(t["c3.fp.cookie"]="undefined"!==typeof navigator.cookieEnabled&&navigator.cookieEnabled?""+navigator.cookieEnabled:"",t["c3.fp.memory"]="undefined"!==typeof navigator.deviceMemory&&navigator.deviceMemory?""+navigator.deviceMemory:"",t["c3.fp.hwConc"]="undefined"!==typeof navigator.hardwareConcurrency&&navigator.hardwareConcurrency?""+navigator.hardwareConcurrency:"",t["c3.fp.java"]=""+("function"!==typeof navigator.javaEnabled)?"false":navigator.javaEnabled(),t["c3.fp.lang"]="undefined"!==typeof navigator.language&&navigator.language?""+navigator.language:"",t["c3.fp.langs"]="undefined"!==typeof navigator.languages&&navigator.languages&&navigator.languages.length>0?""+navigator.languages.toString():"",t["c3.fp.maxTp"]="undefined"!==typeof navigator.maxTouchPoints&&navigator.maxTouchPoints?""+navigator.maxTouchPoints:"",t["c3.fp.plugins"]="","undefined"!==typeof navigator.plugins&&navigator.plugins&&navigator.plugins.length>0)for(var n=0;n<navigator.plugins.length;n++)t["c3.fp.plugins"]+=navigator.plugins[n].name+",";if(t["c3.fp.mime"]="","undefined"!==typeof navigator.mimeTypes&&navigator.mimeTypes&&navigator.mimeTypes.length>0)for(var i=0;i<navigator.mimeTypes.length;i++)t["c3.fp.mime"]+=navigator.mimeTypes[i].type+",";t["c3.fp.sysLang"]="undefined"!==typeof navigator.systemLanguage&&navigator.systemLanguage?""+navigator.systemLanguage:"",t["c3.fp.platform"]="undefined"!==typeof navigator.platform&&navigator.platform?""+navigator.platform:"",t["c3.fp.product"]="undefined"!==typeof navigator.product&&navigator.product?""+navigator.product:"",t["c3.fp.productSub"]="undefined"!==typeof navigator.productSub&&navigator.productSub?""+navigator.productSub:"",t["c3.fp.vendor"]="undefined"!==typeof navigator.vendor&&navigator.vendor?""+navigator.vendor:"",t["c3.fp.vendorSub"]="undefined"!==typeof navigator.vendorSub&&navigator.vendorSub?""+navigator.vendorSub:"";var e=_.pl();""!==e&&(t["c3.fp.canvFp"]=e)}return"undefined"!==typeof window&&window&&("undefined"!==typeof window.screen&&window.screen&&(t["c3.fp.availHeight"]="undefined"!==typeof window.screen.availHeight&&window.screen.availHeight?""+window.screen.availHeight:"",t["c3.fp.availWidth"]="undefined"!==typeof window.screen.availWidth&&window.screen.availWidth?""+window.screen.availWidth:"",t["c3.fp.height"]="undefined"!==typeof window.screen.height&&window.screen.height?""+window.screen.height:"",t["c3.fp.width"]="undefined"!==typeof window.screen.width&&window.screen.width?""+window.screen.width:"",t["c3.fp.colorDepth"]="undefined"!==typeof window.screen.colorDepth&&window.screen.colorDepth?""+window.screen.colorDepth:"",t["c3.fp.deviceXDPI"]="undefined"!==typeof window.screen.deviceXDPI&&window.screen.deviceXDPI?""+window.screen.deviceXDPI:"",t["c3.fp.deviceYDPI"]="undefined"!==typeof window.screen.deviceYDPI&&window.screen.deviceYDPI?""+window.screen.deviceYDPI:""),t["c3.fp.dpi"]="undefined"!==typeof window.devicePixelRatio&&window.devicePixelRatio?""+window.devicePixelRatio:"",t["c3.fp.secure"]="boolean"===typeof window.isSecureContext?""+window.isSecureContext:""),t},this.pl=function(){try{if("undefined"!==typeof document&&document){var t,n,i=document.createElement("CANVAS");if("undefined"!==typeof i&&i&&"function"===typeof i.getContext)return t=i.getContext("2d"),n="conviva",t.textBaseline="top",t.font="14px Arial",t.textBaseline="alphabetic",t.fillStyle="#f40",t.fillRect("undefined"!==typeof navigator.plugins&&navigator.plugins?navigator.plugins.length:0,"undefined"!==typeof navigator.mimeTypes&&navigator.mimeTypes?navigator.mimeTypes.length:0,"undefined"!==typeof navigator.product&&navigator.product?navigator.product.length:0,"undefined"!==typeof navigator.vendor&&navigator.vendor?navigator.vendor.length:0),t.fillStyle="#069",t.fillText(n,"undefined"!==typeof navigator.maxTouchPoints&&navigator.maxTouchPoints>=0?navigator.maxTouchPoints:0,"undefined"!==typeof navigator.product&&navigator.product?navigator.product.length:0),t.fillStyle="rgba(102, 204, 0, 0.7)",t.fillText(n,"undefined"!==typeof navigator.deviceMemory&&navigator.deviceMemory?navigator.deviceMemory:0,"undefined"!==typeof navigator.hardwareConcurrency&&navigator.hardwareConcurrency?navigator.hardwareConcurrency:0),O.pr(i.toDataURL())}return""}catch(t){return""}},this.hc=function(){var t;_.Nf||(t=_.ul())&&_.Al(t)},this.tl=function(){var t;_.Pn===I.PlayerState.PLAYING&&_.Ue&&(t=_.Ue.getRenderedFrameRate())>0&&(_.mf+=t,_.yf++)},this.hl=function(){return _.mf>0&&_.yf>0||(this.tl(),_.mf>0&&_.yf>0)?m.Tl.Cast(+_.mf/_.yf):I.DEFAULT_RENDERED_FRAME_RATE},this.Al=function(t){_.nl();var i=_.Qa-1;_.p.info("postHeartbeat(): Send HB["+i+"]"+_.Zf());_.Kf.Sl(t,function(t,n){_.Ol(t,n,i)})},this.Ol=function(i,e,s){_.Nf||_.g.F("onHeartbeatResponse",function(){var t,n;i?e?(_.p.debug("onHeartbeatResponse(): received valid response for HB["+s+"]"),_.el(s),(t=e[N.Mr])&&t!==(n=_.xf.get(y.B))&&(_.p.debug("onHeartbeatResponse(): setting the client id to "+t+" (from gateway)"),_.xf.set(y.B,t),_.xf.Nl(),n===N.H)&&t!==N.H&&(_.Ee.k(),_.If)&&(_.p.debug("Send enqueued urgent hb as client id is available"),_.wc()),(n=e[N.Lr])&&n!==N.Pr&&_.p.error("onHeartbeatResponse(): error from gateway: "+n),"object"===typeof(t=e[N.Ur])&&((n=t[N.kr])>=0&&_.xf.get(y.ol)!==n&&(_.p.debug("onHeartbeatResponse(): setting Maximum Heartbeat Infos to "+n+" (from gateway)"),_.xf.set(y.ol,n)),n=t[N.Fr],(n=!!m.ie(n)&&n)!==_.xf.get(y.al)&&(_.p.debug("onHeartbeatResponse(): turning "+(n?"on":"off")+" sending of logs"),_.xf.set(y.al,n)),n=t[N.Br],m.gt(n)&&(n=m.Tl.Cast(n))!==_.Vi.heartbeatInterval&&(_.p.debug("onHeartbeatResponse(): received hbIntervalMs from gateway: "+n),_.Vi.heartbeatInterval=n,_.qa)&&_.fc(),(n=t[N.Hr])&&n!==_.Vi.gatewayUrl&&(_.p.debug("onHeartbeatResponse(): received gatewayUrl from gateway: "+n),_.Vi.gatewayUrl=n),_.gl()||(_.Df={},(n=t[N.Gr])&&(_.Pf||(_.Pf=!0),_.p.debug("onHeartbeatResponse(): received fp from gateway: "+n),_.Df=n.split(",")),_.Bf=t[N.jr],m.ie(_.Bf)&&(_.Bf?(_.p.debug("onHeartbeatResponse(): enabling the CDN Server IP collection"),_.kf||_.cc()):_.rc())))):_.p.warning("onHeartbeatResponse(): decoded heartbeat response is null."):(m.Pt(n=e)?m.Il(n,"HTTP timeout")?_.p.warning("onHeartbeatResponse(): "+n):_.p.error("onHeartbeatResponse(): failed to send heartbeat: "+n):(n=$.wl,_.p.error("onHeartbeatResponse(): "+n)),_.il(s,n))})},this.bs=function(){return m.Tl.Cast(_.Yf.current()-_.Ps)},this.Zc=function(){return this.jf.Yc()},this.Zf=function(){return this.Fs()?" (global session)":""},this.Fs=function(){return this.Jf===C.Nt.Oh},this.gl=function(){return this.Jf===C.Nt.Oh&&"T"===this.ef["c3.IPV4IPV6GlobalSession"]},this.Cs=function(){return this.Jf===C.Nt.Ot},this.Qf=function(){return this.Jf===C.Nt.Dt},this.Lt=function(t){_.Cl(t),_.tc()},this.Cl=function(t){var n={},i={};if(m.Pt(t.assetName)&&!_.Ds.yl&&(_.Ct.assetName!==t.assetName?(_.Ct.assetName&&(n[N.eu]=_.Ct.assetName),i[N.eu]=t.assetName,_.Ct.assetName=t.assetName):_.p.warning("mergeContentMetadata(): assetName was not changed.")),m.Pt(t.applicationName)&&(_.Ct.applicationName!==t.applicationName?(_.Ct.applicationName&&(n[N.su]=_.Ct.applicationName),i[N.su]=t.applicationName,_.Ct.applicationName=t.applicationName):_.p.warning("mergeContentMetadata(): applicationName was not changed.")),m.Pt(t.streamUrl)&&!_.Ds.ml&&(_.Ct.streamUrl!==t.streamUrl?(_.Ct.streamUrl&&(n[N.Tu]=_.Ct.streamUrl),i[N.Tu]=t.streamUrl,_.Ct.streamUrl=t.streamUrl,_.On=_.Ct.streamUrl):_.p.warning("mergeContentMetadata(): streamUrl was not changed.")),m.Pt(t.viewerId)&&(_.Ct.viewerId!==t.viewerId?(_.Ct.viewerId&&(n[N.iu]=_.Ct.viewerId),i[N.iu]=t.viewerId,_.Ct.viewerId=t.viewerId):_.p.warning("mergeContentMetadata(): viewerId was not changed.")),m.Pt(t.defaultResource)&&!_.Ds.Dl&&(_.Ct.defaultResource!==t.defaultResource?(_.Ct.defaultResource&&(n[N.Ru]=_.Ct.defaultResource),i[N.Ru]=t.defaultResource,_.Ct.defaultResource=t.defaultResource):_.p.warning("mergeContentMetadata(): defaultResource was not changed.")),m.gt(t.duration)&&t.duration>0&&!_.Ds.Pl&&(_.Ct.duration!==t.duration?(_.Ms>0&&(n[N.lu]=_.Ms),i[N.lu]=t.duration,_.Ct.duration=t.duration,_.Ms=_.Ct.duration):_.p.warning("mergeContentMetadata(): duration was not changed.")),m.gt(t.encodedFrameRate)&&t.encodedFrameRate>0&&!_.Ds.bl&&(_.Ct.encodedFrameRate!==t.encodedFrameRate?(_.Ct.encodedFrameRate>-1&&(n[N.du]=_.Ct.encodedFrameRate),i[N.du]=t.encodedFrameRate,_.Ct.encodedFrameRate=t.encodedFrameRate,_.wn=_.Ct.encodedFrameRate):_.p.warning("mergeContentMetadata(): encodedFrameRate was not changed.")),t.streamType!==c.StreamType.UNKNOWN&&(_.Ct.streamType!==t.streamType?(_.Ct.streamType!==c.StreamType.UNKNOWN&&(_.Ct.streamType===c.StreamType.LIVE?n[N.Xr]=!0:n[N.Xr]=!1),t.streamType===c.StreamType.LIVE?i[N.Xr]=!0:i[N.Xr]=!1,_.Ct.streamType=t.streamType):_.p.warning("mergeContentMetadata(): streamType was not changed.")),m.Ht(t.custom)>0){var e,s={},o={};for(e in t.custom)_.Ct.custom[e]!==t.custom[e]?(s[e]=t.custom[e],_.Ct.custom[e]&&(o[e]=_.Ct.custom[e]),_.Ct.custom[e]=t.custom[e]):_.p.info("mergeContentMetadata(): custom."+e+" was not changed.");m.Ht(s)>0?(m.Ht(o)>0&&(n[N.ou]=o),i[N.ou]=s):_.p.warning("mergeContentMetadata(): custom was not changed.")}m.Ht(i)>0&&this.Ec(i,n)},this.tc=function(){var t;_.p.debug("setStatesFromContentMetadata()"),_.Ct.defaultResource&&this.oa(_.Ct.defaultResource),_.Ct.streamUrl&&this.ma(_.Ct.streamUrl),_.Ct.duration>0&&this.ia(_.Ct.duration),_.Ct.encodedFrameRate>0&&this.ra(_.Ct.encodedFrameRate),_.Ct.streamType!==c.StreamType.UNKNOWN&&(t=_.Ct.streamType===c.StreamType.LIVE,this.Vh(t)),_.Ct.assetName&&this.xh(_.Ct.assetName),_.Ct.viewerId&&this.Yh(_.Ct.viewerId),(_.Ct.applicationName||_.Ct.playerName)&&this.qh(_.Ct.applicationName||_.Ct.playerName),m.Ht(_.Ct.custom)>0&&this.Xh(_.Ct.custom)},this.nc=function(){var t={};if(this.Fs()||(_.Ct.assetName?t[N.eu]=_.Ct.assetName:_.p.warning("enqueueEventForContentMetadata(): assetName was not set."),_.Ct.applicationName?t[N.su]=_.Ct.applicationName:_.p.warning("enqueueEventForContentMetadata(): applicationName was not set."),_.Ct.streamUrl?t[N.Tu]=_.Ct.streamUrl:_.p.warning("enqueueEventForContentMetadata(): streamUrl was not set."),_.Ct.viewerId?t[N.iu]=_.Ct.viewerId:_.p.warning("enqueueEventForContentMetadata(): viewerId was not set."),_.Ct.defaultResource?t[N.Ru]=_.Ct.defaultResource:_.p.warning("enqueueEventForContentMetadata(): defaultResource was not set."),_.Ct.duration>-1?t[N.lu]=_.Ct.duration:_.p.warning("enqueueEventForContentMetadata(): duration was not set."),_.Ct.encodedFrameRate>-1?t[N.du]=_.Ct.encodedFrameRate:_.p.warning("enqueueEventForContentMetadata(): encodedFrameRate was not set."),_.Ct.streamType!==c.StreamType.UNKNOWN?_.Ct.streamType===c.StreamType.LIVE?t[N.Xr]=!0:t[N.Xr]=!1:_.p.warning("enqueueEventForContentMetadata(): streamType was not set.")),m.Ht(_.Ct.custom)>0)for(var n in t[N.ou]={},_.Ct.custom)t[N.ou][n]=_.Ct.custom[n];else this.Fs()||_.p.warning("enqueueEventForContentMetadata(): custom tags were not set.");m.Ht(t)>0&&this.Ec(t,null)},this.ec=function(){_.Ct&&m.Pt(_.Ct.assetName)||_.p.warning("Missing assetName during session creation"),_.Ct&&m.Pt(_.Ct.defaultResource)||_.p.warning("Missing resource during session creation"),_.Ct&&m.Pt(_.Ct.streamUrl)||_.p.warning("Missing streamUrl during session creation"),(!_.Ct||_.Ct.encodedFrameRate<=0)&&_.p.warning("Missing encodedFrameRate during session creation"),_.Ct&&m.Pt(_.Ct.viewerId)||_.p.warning("Missing viewerId during session creation"),_.Ct&&_.Ct.streamType&&c.StreamType.UNKNOWN!==_.Ct.streamType||_.p.warning("Missing streamType during session creation"),_.Ct&&m.Pt(_.Ct.applicationName)||_.p.warning("Missing applicationName during session creation"),(!_.Ct||_.Ct.duration<=0)&&_.p.warning("Missing duration during session creation")},this.Zt=function(t,n){_.Tf||(_.Tf={}),_.Tf[t]=n},this.ic=function(){var t={};_.Ee&&_.Ee.M&&(t[N.Iu]=_.Ee.M,_.M=_.Ee.M),_.Ee&&_.Ee.U&&(t[N.wu]=_.Ee.U,_.U=_.Ee.U),m.Ht(t)>0&&this.Ec(t,null)},this.wc=function(){var t;_.gf||((t=_.xf.get(y.B))&&t!==N.H&&""!==t&&"null"!==t?(_.If=!1,t=P.Ll(_.Xa,_.Ja),_.fc(),setTimeout(function(){try{_&&(_.hc(),_.fc())}catch(t){}},t)):(_.p.debug("Delay sending of urgent hb due to missing client id"),_.If=!0))}}).xa=N.Sh.Ot+N.Sh.Nh+N.Sh.gh,C.Nt={Ot:"Video",Oh:"Global",Dt:"Ad"},($=U.Session=function(){var e=this;e.Ue=null,e.C=0,e.Jf=C.Nt.Ot,e.Ml=!1,e.Nf=!1,e.Ul=!1,e.Vl=null,e.Re=null,e.kl=null,e.Fl=!1,e.Bl=I.PlayerState.NOT_MONITORED,e.Hl=!1,e.Gl=!1,e.jl=!1,e.bl=!1,e.Kl=!1,e.Vc=!1,e.Fc=!1,e.Mc=!1,e.yl=!1,e.ml=!1,e.Wl=!1,e.Pl=!1,e.Dl=!1,e.Yl=!1,function(t,n,i,e,s,o,r){this.C=t,this.Jf=n,this.xf=i,this.xl=e,this.wt=s,this.g=o,this.p=r}.apply(e,arguments),this.Xf=function(t,n){e.wt.Xf(this),t&&e.Vt(t),e.xf.ql()?e.Xl(n):e.xf.Jl(function(){e.Xl(n)})},this.cleanup=function(){e.Ml=!0,e.wt.zf(),e.xf.ql()?e.Ql():e.xf.Jl(function(){e.Ql()})},this.Zl=function(){(e.Cs()||e.Qf())&&e.Ue&&e.zl(),e.g=null,e.Ee=null,e.xf=null,e.xl=null,e.wt.Tt(),e.wt=null,e.Nf=!0},this.Ql=function(){e.wt.sc(),e.Zl()},this.Xl=function(t){e.wt.$f(),e.$l(),t?(e.bt(t.er(),t.sr()),e.wt.Je(I.PlayerState.STOPPED),e.wt.sc(),e.Zl()):e.wt.ac()},this.$l=function(){var t=e.xl.get(),n=t[M.BROWSER_NAME],n=(n&&e.wt.ca(n),t[M.BROWSER_VERSION]),n=(n&&e.wt.la(n),t[M.DEVICE_BRAND]),n=(n&&e.wt.da(n),t[M.DEVICE_MANUFACTURER]),n=(n&&e.wt.va(n),t[M.DEVICE_MODEL]),n=(n&&e.wt.Ea(n),t[M.DEVICE_TYPE]),n=(n&&e.wt._a(n),t[M.DEVICE_VERSION]),n=(n&&e.wt.Ra(n),t[M.FRAMEWORK_NAME]),n=(n&&e.wt.pa(n),t[M.FRAMEWORK_VERSION]),n=(n&&e.wt.Aa(n),t[M.OPERATING_SYSTEM_NAME]),n=(n&&e.wt.Ta(n),t[M.OPERATING_SYSTEM_VERSION]),n=(n&&e.wt.Sa(n),t[M.DEVICE_CATEGORY]),n=(n&&e.wt.Oa(n),t[M.SCREEN_WIDTH]),n=(n&&e.wt.Na(n),t[M.SCREEN_HEIGHT]),n=(n&&e.wt.ga(n),t[M.SCALE_FACTOR]);n&&e.wt.Ia(n)},this.Ei=function(t){e.wt.Pn===t||(e.wt.Pn===I.PlayerState.NOT_MONITORED&&t!==I.PlayerState.NOT_MONITORED&&(e.Bl=t),e.Fl)||e.wt.Je(t)},this._i=function(t){e.Hl||e.wt._c(t)},this.Ri=function(t){e.Hl||e.wt.Ac(t)},this.Ii=function(t){e.Gl||e.wt.wa(t)},this.wi=function(t){e.Gl||e.wt.yo(t)},this.pi=function(t,n){!m.gt(n)&&e.Yl&&(n=-1),e.wt.zc(t,n)},this.qn=function(t){t>0&&(e.bl||e.wt.ra(t))},this.Qn=function(t){t>0&&(e.Pl||e.wt.ia(t))},this.Zn=function(t){e.wt.ma(t)},this.Ai=function(t){e.wt.Cc(t)},this.Ti=function(t){e.wt.mc(t)},this.nt=function(t){e.wt.ba(t)},this.et=function(t){e.wt.La(t)},this.ni=function(t){e.wt.Vs()||e.wt.pa(t)},this.ei=function(t){e.wt.ks()||e.wt.Aa(t)},this.Oi=function(t){e.wt.ka(t)},this.oi=function(t){e.wt.Ka(t)},this.ui=function(t){e.wt.Wa(t)},this.ai=function(t){e.wt.Ya(t)},this.Si=function(t,n){e.bt(t,n)},this.Yn=function(){e.zl()},this.Wt=function(t,n,i){e.Ul||(e.Ul=!0,e.Vl=t,e.Re=n,e.kl=i,e.wt.Hc(!0),e.Vl===a.AdStream.CONTENT||e.Re===a.AdPlayer.SEPARATE?(e.wt.Pn!==I.PlayerState.NOT_MONITORED&&(e.Bl=e.wt.Pn),e.wt.Je(I.PlayerState.NOT_MONITORED),e.Fl=!0):e.Vl===a.AdStream.SEPARATE&&e.Re===a.AdPlayer.CONTENT&&(e.wt.Pn!==I.PlayerState.NOT_MONITORED&&(e.Bl=e.wt.Pn),e.wt.Je(I.PlayerState.NOT_MONITORED),e.Fl=!0,e.Hl=!0,e.Gl=!0,e.bl=!0,e.jl=!0,e.Vc=!0,e.Fc=!0,e.Mc=!0,e.yl=!0,e.ml=!0,e.Wl=!0,e.Pl=!0,e.Dl=!0,e.Yl=!0))},this.Yt=function(){e.Ul&&(e.wt.Hc(!1),e.Vl===a.AdStream.CONTENT||e.Re===a.AdPlayer.SEPARATE?e.td||(e.Fl=!1,e.wt.Je(e.Bl)):e.Vl===a.AdStream.SEPARATE&&e.Re===a.AdPlayer.CONTENT&&(e.Hl=!1,e.Gl=!1,e.bl=!1,e.jl=!1,e.Kl=!1,e.td||(e.Fl=!1,e.wt.Je(e.Bl)),e.Vc=!1,e.Fc=!1,e.Mc=!1,e.yl=!1,e.ml=!1,e.Wl=!1,e.Pl=!1,e.Dl=!1,e.Yl=!1),e.Ul=!1,e.Vl=e.Re=e.kl=null)},this.Mt=function(){e.Ue&&e.Ue&&(e.g.F("Session.detachPlayer",function(){e.Ue.xn()}),e.Ue=null,e.wt.Xc(null),e.wt.Je(I.PlayerState.NOT_MONITORED))},this.zl=function(){e.Ue&&(e.g.F("Session.releasePlayerStateManager",function(){e.Ue.xn()}),e.Ue=null,e.wt.Xc(null),e.wt.Je(I.PlayerState.NOT_MONITORED))},this.Ut=function(){e.wt.Hc(!0),e.wt.Pn!==I.PlayerState.NOT_MONITORED&&(e.Bl=e.wt.Pn),e.wt.Je(I.PlayerState.NOT_MONITORED),e.Fl=!0},this.Vt=function(t){e.Ue||t instanceof I&&e.g.F("Session.attachPlayer()",function(){t.setMonitoringNotifier(e,e.C)&&(t.fi(),e.Ue=t,e.wt.Xc(e.Ue))})},this.kt=function(){e.wt.Hc(!1),e.Hl=!1,e.Gl=!1,e.nd=!1,e.jl=!1,e.Kl=!1,e.Vc=!1,e.Fc=!1,e.Mc=!1,e.yl=!1,e.ml=!1,e.Wl=!1,e.Pl=!1,e.Dl=!1,e.Yl=!1,e.td||(e.Fl=!1,e.Bl!==I.PlayerState.NOT_MONITORED&&e.wt.Je(e.Bl))},this.qt=function(){return e.Ue},this.Ft=function(){e.td||(e.td=!0,e.Fl=!0)},this.Bt=function(){e.td&&(e.td=!1,e.Ul||(e.Fl=!1,e.Bl!==I.PlayerState.NOT_MONITORED&&e.wt.Je(e.Bl)))},this.bt=function(t,n){!m.Pt(t)||n!==a.ErrorSeverity.FATAL&&n!==a.ErrorSeverity.WARNING||e.Kl||(n=n===a.ErrorSeverity.FATAL,e.wt.jc(t,n))},this.Lt=function(t){e.g.F("Session.updateContentMetadata",function(){e.wt.Lt(t)})},this.Kt=function(t,n){e.wt.$c(t,n)},this.Fs=function(){return e.Jf===C.Nt.Oh},this.Cs=function(){return e.Jf===C.Nt.Ot},this.Qf=function(){return e.Jf===C.Nt.Dt},this.Zf=function(){return e.Fs()?" (global session)":""},this.Jt=function(){return this.C},this.Qt=function(){var t=null;return t=e.xf.ql()?e.xf.get(y.B):t},this.Zt=function(t,n){e.wt.Zt(t,n)}}).wl="received no response (or a bad response) to heartbeat POST request",tt=U.SessionFactory=function(){var o=this;o.Fi=null,o.ed=0,o.sd=null,function(t,n,i,e){o.Ee=t,o.Vi=n,o.xf=i,o.T=e,o.ed=0,o.sd={}}.apply(o,arguments),this.Tt=function(){for(var t in o.Fi=null,o.sd)o.sd[t].cleanup();o.sd=null,o.ed=0},this.od=function(){var t=o.ed;return o.ed++,t},this.St=function(t,n,i,e,s){return t||(t=new c),o.rd(t,n,i,e,s)},this.Y=function(t){return o.rd(t,C.Nt.Oh,void 0,g.version)},this.ud=function(){return P.hd()},this.rd=function(t,n,i,e,s){n=o.T.Zi(o.Ee,o.Vi,o.xf,o.ud(),n,t.ct(),e),t=o.od();return"undefined"!==typeof s&&"undefined"!==typeof s.error?n.Xf(i,s.error):(o.ad(t,n),n.Xf(i)),t},this.jt=function(t){t=o.sd[t];return t},this.It=function(t){t=this.jt(t);return t=!t||t.Cs()||t.Qf()?t:null},this.ad=function(t,n){o.sd[t]=n},this.fd=function(t){delete o.sd[t]},this.xt=function(t){var n=o.jt(t);o.fd(t),n.cleanup()},this.tt=function(){return o.sd}},nt=U.ld=function(t){this._e=t,this.dd=function(i,t,n){var e=!1;this._e.createOnce(function(){e||i(!(e=!0),n+" ("+t+" ms)")},t,"CallbackWithTimeout.wrap");return function(t,n){e||(e=!0,i(t,n))}}},(y=U.Config=function(t,n,i){var e=this;this.Ed=n,this._d=i,this.Rd={clientId:N.H,iid:N.Or,sendLogs:!1,maxHbInfos:N.gr},this.I=m._l(this.Rd),this.pd=!1,this.Ad=!1,this.Td=[],this.ql=function(){return this.pd},this.Et=function(){this.Ed.Et(y.vd,function(t,n){t&&e.Sd(n),e.pd=!0,e.Od()})},this.Sd=function(t){var n,t=this._d.yh(t);t?t&&(n=t[y.Nd],t=t[y._t],n&&n!==N.H&&""!==n&&"null"!==n?this.I[y.B]=n:(this.I[y.B]=this.gd(),this.Nl()),t!==N.Or)&&""!==t&&"null"!==t&&(this.I[y._t]=t):(this.I[y.B]=this.gd(),this.Nl(),this.Ad=!0)},this.Id=function(){var t={};return t[y.Nd]=this.I.clientId,this._d.Ch(t)},this.Nl=function(){this.Ed.Nl(y.vd,this.Id(),function(t,n){})},this.Jl=function(t){this.ql()?t():this.Td.push(t)},this.get=function(t){return this.pd?this.I[t]:null},this.set=function(t,n){this.pd&&(this.I[t]=n)},this.Od=function(){for(var t;"undefined"!==typeof(t=this.Td.shift());)t()},this.getClientId=function(){return this.I.clientId},this.gd=function(){try{var t=2147483647;return Math.floor(Math.random()*t).toString()+"."+Math.floor(Math.random()*t).toString()+"."+Math.floor(Math.random()*t).toString()+"."+Math.floor(Math.random()*t).toString()}catch(t){this.p.debug("error caught in _generateClid()")}return"0"},this.getIid=function(){return this.I.iid}}).vd="sdkConfig",y.Nd="clId",y._t="iid",y.B="clientId",y.al="sendLogs",y.ol="maxHbInfos",y.dl="c3.fp.",y.$t={vl:"0",wd:"1",tn:"2",zt:"3",El:"4",en:"5",nn:"6"},it=U.EventQueue=function(){this.Cd=[],this.yd=0,this.qc=function(t){this.Cd.push(t)},this.Yc=function(){var t=this.yd;return this.yd++,t},this.qf=function(){var t=this.Cd;return this.Cd=[],t}},et=U.ExceptionCatcher=function(t,n,i){this.md=n,this.N=i,this.F=function(n,t,i){try{t()}catch(t){if(i)i(t);else{if(this.N.allowUncaughtExceptions)throw t;this.Dd(n,t)}}},this.Dd=function(t,n){t="Uncaught exception: "+t+": "+n.toString();if(this.md)try{this.md.Sl(t)}catch(t){}}},st=U.GatewayControl=function(t,n,i,e,s){var o=this;this.Vi=t,this.Pd=i,this._d=e,this.bd=s,this.Sl=function(t,e){var n=(this.bd?this.bd.indexOf("ipv4")>-1?this.Vi.G:this.Vi.q:this.Vi.gatewayUrl)+N.Sr;this.Pd.Ld("POST",n,this._d.Ch(t),"application/json",function(t,n){var i;t?(i=o._d.yh(n),e(t,i)):e(t,n)})}},m=U.Lang={Md:function(t){return m.Pt(t)&&t&&"undefined"!==t&&"null"!==t},Gt:function(t){var n,i,e={};for(n in t)m.Md(n)&&(i=t[n],m.Md(i))&&(e[n]=i);return e},Xn:function(t,n,i){if(!t)throw new Error("Expected "+i+" implementation is null.");for(var e in n)if("function"!==typeof t[e])throw new Error("Expected method "+e+" in "+i+" implementation.")},Ht:function(t){var n,i=0;for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&i++;return i},yt:function(t){return""+t},Ud:function(t){return Math.floor(t)},cn:function(t){return Math.abs(m.Ud(t))},Vd:function(t){return Boolean(t)},Pt:function(t){return"string"===typeof t&&""!==t},Il:function(t,n){return"string"===typeof t&&"string"===typeof n&&"function"===typeof t.indexOf&&0===t.indexOf(n)},ie:function(t){return"boolean"===typeof t},kd:function(t){return escape(t)},mh:function(t){return"object"===typeof t},gc:function(t){var n,i="";for(n in t)i+=n+"="+t[n];return"Object{"+i+"}"},Fd:function(t){var n,i=m._l(t);for(n in i)i[n]||delete i[n];return i},_l:function(t){var n,i={};for(n in t)i[n]=t[n];return i},Nc:function(t,n){if(typeof t!==typeof n)return!1;if(t instanceof Object&&n instanceof Object){if(m.Ht(t)!==m.Ht(n))return!1;for(var i in t)if(!(t[i]===n[i]))return!1;return!0}return t===n},Fo:function(){for(var t={},n=0;n<arguments.length;n++)for(var i in arguments[n])arguments[n][i]&&(t[i]=arguments[n][i]);return t},gt:function(t){return"number"===typeof t&&Math.round(t)===t},Bd:function(t){return"[object Array]"===Object.prototype.toString.call(t)},Hd:function(t,n){if(t!==n){if(!t||!n)return!1;if(t.length!==n.length)return!1;for(var i=0;i<t.length;++i)if(m.Bd(t[i])&&m.Bd(n[i])){if(!m.Hd(t[i],n[i]))return!1}else if(t[i]!==n[i])return!1}return!0},Gd:function(){return"undefined"!==typeof Object.defineProperty&&function(){try{return Object.defineProperty({},"x",{}),!0}catch(t){return!1}}()},rn:function(t,n,i){if(m.Gd())Object.defineProperty(t,n,{configurable:!0,enumerable:!0,get:i});else{if("undefined"===typeof t.__defineGetter__)throw new Error("JavaScript runtime must support either Object.defineProperty or __defineGetter__");t.__defineGetter__(n,i)}},un:function(t,n,i){if(m.Gd())Object.defineProperty(t,n,{configurable:!0,set:i});else{if("undefined"===typeof t.__defineSetter__)throw new Error("JavaScript runtime must support either Object.defineProperty or __defineSetter__");t.__defineSetter__(n,i)}}},(T={two32:4294967296}).jd=T.two32-1,T.Kd=0,m.Wd=T,m.Wd.Cast=function(t){t=parseInt(t,10);return t>T.jd?t=t%T.two32:t<T.Kd&&(t=T.two32-(t=-t%T.two32)),t},m.Wd.Yd=function(t){t=parseInt(t,10);return t<=T.jd&&t>=T.Kd},S={jd:2147483647,Kd:-2147483648},m.Tl=S,m.Tl.Cast=function(t){t=parseInt(t,10);return t>S.jd?t=t%S.jd:t<S.Kd&&(t=S.jd-(t=-t%S.jd)),t},m.Tl.Yd=function(t){t=parseInt(t,10);return t<=S.jd&&t>=S.Kd},m.ir=function(){return"undefined"!==typeof window&&window&&window.location&&window.location.search?window.location.search:""},m.xd=function(){return document&&document.referrer?document.referrer:""},ot=U.LogBuffer=function(){this.qd=[],this.dr=function(t){this.qd.length>=32&&this.qd.shift(),this.qd.push(t)},this.qf=function(){var t=this.qd;return this.qd=[],t}},(D=U.Ping=function(t,n,i,e){this.Jd=!1,this.Qd=null,this.p=t,this.p.setModuleName("Ping"),this.Pd=n,this.Vi=i,this.ki=e,this.Sl=function(t){this.Jd||(this.Jd=!0,t=this.Zd()+"&d="+m.kd(t.toString()),this.p.error("send(): "+t),this.Pd.Ld("GET",t,null,null,null),this.Jd=!1)},this.Zd=function(){if(!this.Qd){var t=D.zd+"?comp="+D.Xd+"&clv="+(this.ki||a.version);if(this.Vi&&(t+="&cid="+this.Vi.customerKey),t+="&sch="+N.yr,!this.Vi)return t;this.Qd=t}return this.Qd}}).Xd="sdkjs",D.zd="https://pings.conviva.com/ping.ping",P=U.$d={tv:4294967295,nv:2147483647,iv:-2147483648,hd:function(){return Math.floor(Math.random()*P.tv)+P.iv},Rt:function(){return Math.floor(Math.random()*P.tv)},Ll:function(t,n){return t=Math.ceil(t),n=Math.floor(n),Math.floor(Math.random()*(n-t+1))+t}},b=U.ev={xc:function(t,n,i,e){return isNaN(t)||"number"!==typeof t||t===e?e:(e=m.Ud(t),b.sv(e,n,i))},sv:function(t,n,i){return m.gt(i)&&t>i?t=i:m.gt(n)&&t<n&&(t=n),t},In:function(t){return t=-1!==t&&-2!==t?b.xc(t,0,null,-1):t}},L=U.StreamerError=function(){var i=this;i.errorCode=null,i.severity=a.ErrorSeverity.FATAL,function(t,n){i.errorCode=t,i.severity=n}.apply(i,arguments),this.er=function(){return i.errorCode},this.sr=function(){return i.severity}},rt=U.HttpClient=function(t,n,i,e){this.Di=n,this.ov=i,this.N=e,this.Ld=function(t,n,i,e,s){var o=1e3*this.N.httpTimeout,r=null;s&&(r=this.ov.dd(s,o,"HTTP timeout")),this.Di.makeRequest(t,n,i,e,o,r)}},(ut=U.Logger=function(t,n,i,e,s){this.Li=t,this.yi=n,this.O=i,this.Fi=e,this.Ui=s,this.debug=function(t){this.log(t,h.LogLevel.DEBUG)},this.info=function(t){this.log(t,h.LogLevel.INFO)},this.warning=function(t){this.log(t,h.LogLevel.WARNING)},this.error=function(t){this.log(t,h.LogLevel.ERROR)},this.log=function(t,n){t=this.uv(t,n);this.Fi.dr(t),this.O.logLevel<=n&&this.Li.consoleLog(t,n)},this.hv=function(t){return"["+this.Vn+"] "+t},this.av=function(t){return"["+this.Ui+"] "+t},this.fv=function(t){return"[Conviva] "+t},this.cv=function(t){return"["+(this.yi.getEpochTimeMs()/1e3).toFixed(3).toString()+"] "+t},this.dv=function(t,n){return"["+ut.rv(n)+"] "+t},this.vv=function(t){return t=this.Ev?"sid="+this.Ev+" "+t:t},this.Kh=function(t){this.Ev=t},this.setModuleName=function(t){this.Vn=t},this.uv=function(t,n){return this.fv(this.cv(this.dv(this.av(this.hv(this.vv(t))),n)))}}).rv=function(t){var n;switch(t){case h.LogLevel.ERROR:n="ERROR";break;case h.LogLevel.WARNING:n="WARNING";break;case h.LogLevel.INFO:n="INFO";break;case h.LogLevel.DEBUG:n="DEBUG"}return n},U.Storage=function(t,n,i,e){this.Pi=n,this.ov=i,this.N=e,this.Et=function(t,n){n=this.ov.dd(n,1e3*this.N.storageTimeout,"storage load timeout");this.Pi.loadData(U.Storage._v,t,n)},this.Nl=function(t,n,i){i=this.ov.dd(i,1e3*this.N.storageTimeout,"storage save timeout");this.Pi.saveData(U.Storage._v,t,n,i)}},U.Storage._v="Conviva",(M=U.SystemMetadata=function(t,n,i){this.bi=n,this.g=i,this.Rv=null,this.get=function(){return this.Rv||this.retrieve(),this.Rv},this.retrieve=function(){var t,n={},e=(n[M.BROWSER_NAME]=this.bi.getBrowserName,n[M.BROWSER_VERSION]=this.bi.getBrowserVersion,n[M.DEVICE_BRAND]=this.bi.getDeviceBrand,n[M.DEVICE_MANUFACTURER]=this.bi.getDeviceManufacturer,n[M.DEVICE_MODEL]=this.bi.getDeviceModel,n[M.DEVICE_TYPE]=this.bi.getDeviceType,n[M.DEVICE_VERSION]=this.bi.getDeviceVersion,n[M.FRAMEWORK_NAME]=this.bi.getFrameworkName,n[M.FRAMEWORK_VERSION]=this.bi.getFrameworkVersion,n[M.OPERATING_SYSTEM_NAME]=this.bi.getOperatingSystemName,n[M.OPERATING_SYSTEM_VERSION]=this.bi.getOperatingSystemVersion,n[M.DEVICE_CATEGORY]=this.bi.getDeviceCategory,n[M.SCREEN_WIDTH]=this.bi.getScreenWidth,n[M.SCREEN_HEIGHT]=this.bi.getScreenHeight,n[M.SCALE_FACTOR]=this.bi.getScaleFactor,this);for(t in n)!function(n,i){e.g.F("Session.getSystemMetadataSchema(): "+n,function(){var t=i[n];i[n]=t.call(e.bi)})}(t,n),m.Pt(n[t])||delete n[t];var i=!1;if("undefined"!==typeof n[M.DEVICE_TYPE]){for(var s in a.DeviceType)if(n[M.DEVICE_TYPE]===a.DeviceType[s]){i=!0;break}i||delete n[M.DEVICE_TYPE]}if(i=!1,"undefined"!==typeof n[M.DEVICE_CATEGORY]){for(var o in a.DeviceCategory)if(n[M.DEVICE_CATEGORY]===a.DeviceCategory[o]){i=!0;break}i||delete n[M.DEVICE_CATEGORY]}this.Rv=m.Fd(n)}}).BROWSER_NAME="browserName",M.BROWSER_VERSION="browserVersion",M.DEVICE_BRAND="deviceBrand",M.DEVICE_MANUFACTURER="deviceManufacturer",M.DEVICE_MODEL="deviceModel",M.DEVICE_TYPE="deviceType",M.DEVICE_VERSION="deviceVersion",M.FRAMEWORK_NAME="frameworkName",M.FRAMEWORK_VERSION="frameworkVersion",M.OPERATING_SYSTEM_NAME="operatingSystemName",M.OPERATING_SYSTEM_VERSION="operatingSystemVersion",M.DEVICE_CATEGORY="deviceCategory",M.SCREEN_WIDTH="screenWidth",M.SCREEN_HEIGHT="screenHeight",M.SCALE_FACTOR="scaleFactor",ht=U.Time=function(t,n){this.yi=t,this.p=n,this.current=function(){var t=this.yi.getEpochTimeMs();return m.gt(t),t}},at=U.Timer=function(t,n,i){var s=this;this.mi=n,this.g=i,this.create=function(t,n,i){return this.createTimer(function(){s.g.F(i,function(){t()})},n,i)},this.createOnce=function(t,n,i){var e={cancel:null};return e.cancel=this.createTimer(function(){s.g.F(i,function(){e&&"function"===typeof e.cancel&&(e.cancel(),e.cancel=null,e=null),t()})},n,i),e.cancel},this.createTimer=function(t,n,i){return this.mi.createTimer(t,n,i)}}}(),lt});

//Plugin 

/*! (C) 2023 Conviva, Inc. All rights reserved. Confidential and proprietary. */
videojs.registerPlugin("AdobeConviva", function(n) {
    n.i = "BrightcovePlayer",
    n.t = (bc || videojs).VERSION,
    new convivaBcIntegration(this,n),
    adobeTracking(this,n)
});
var convivaBcIntegration = function(n, i) {
    var u = this;
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