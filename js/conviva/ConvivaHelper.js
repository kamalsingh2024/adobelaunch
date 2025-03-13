// Initialize conviva & integrate with player/admanager
// Uses videoElement to capture experience insights metrics
// Uses adsLoader to listen to adsloader events
// Uses ads object to fetch adsMnagaer after adsloader successfully loads adsmanager & ads object is also used to fetch adTagUrl (Needed only for this integration).

var ConvivaIma3Integration = function (player, convivaConfiguration, contentMetadata) {

    var prod = (window.localStorage.getItem("sdsat_debug") == null || window.localStorage.getItem("sdsat_debug") == 'false');
    
    function log(m, p) { 
        if (!p) {
            console.log(m)
        }
    }
    log("<<++ConvivaIma3Integration - " + player.mediainfo.name, prod);
    
    var _s = this;
    window.convivaIntegration = this;
    this.videoPlayer = player;
    this.contentMetadata = contentMetadata;
    this.videoPlayerContainer = player.el();
    
    this.isAdBreakEnabled = true; // set to false to disable ad breaks
    var convivaVideoAnalytics = null;
    var convivaAdAnalytics = null;

    this.initConvivaClient = function () {     log("<<++initConvivaClient - " + player.mediainfo.name, prod);


        Conviva.Analytics.init(convivaConfiguration[Conviva.Constants.CUSTOMER_KEY], this.getConvivaCallbackFunctions(), convivaConfiguration);
        Conviva.Analytics.setDeviceMetadata(this.getDeviceMetadata());

        this.checkTabWinClose(this);
        
    };

        this.checkTabWinClose =  function(t) {log("<<++checkTabWinClose - " + player.mediainfo.name, prod)
            window.addEventListener('unload', function() {log("<<++unload ********- ", prod)
            
            if(convivaAdAnalytics){log("<<++reportAdEnded - ", prod);
               convivaAdAnalytics.reportAdMetric(Conviva.Constants.Playback.PLAYER_STATE, Conviva.Constants.PlayerState.STOPPED);
               convivaAdAnalytics.reportAdEnded();
               convivaAdAnalytics.release();
            }
            if(convivaVideoAnalytics){log("<<++reportPlaybackEnded - ", prod);
               convivaVideoAnalytics.reportPlaybackMetric(Conviva.Constants.Playback.PLAYER_STATE, Conviva.Constants.PlayerState.STOPPED);
               convivaVideoAnalytics.reportPlaybackEnded();
               convivaVideoAnalytics.release();
            }
                
          });
        }

    

        this.getDeviceMetadataReal =function () { log("<<++getDeviceMetadataReal - " + player.mediainfo.name, prod)
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
            //VERSION: "NAForMac",
            OS_NAME: navigator.platform,
            OS_VERSION: navigator.appVersion,
          };
        
          return deviceMetadata;
        }

    this.getDeviceMetadata = function () {   log("<<++getDeviceMetadata - " + player.mediainfo.name, prod);
        var deviceMetadataReal = this.getDeviceMetadataReal();
        var deviceMetadata = this.getDeviceMetadataReal();                                  
        deviceMetadata[Conviva.Constants.DeviceMetadata.BRAND] = deviceMetadataReal.BRAND;
        deviceMetadata[Conviva.Constants.DeviceMetadata.MANUFACTURER] = deviceMetadataReal.MANUFACTURER;
        deviceMetadata[Conviva.Constants.DeviceMetadata.MODEL] = deviceMetadataReal.MODEL;
        deviceMetadata[Conviva.Constants.DeviceMetadata.TYPE] = Conviva.Constants.DeviceType.DESKTOP;
        //deviceMetadata[Conviva.Constants.DeviceMetadata.VERSION] = "NAForMac";
        deviceMetadata[Conviva.Constants.DeviceMetadata.OS_NAME] = deviceMetadataReal.OS_NAME;
        deviceMetadata[Conviva.Constants.DeviceMetadata.OS_VERSION] = deviceMetadataReal.OS_VERSION;
        deviceMetadata[Conviva.Constants.DeviceMetadata.CATEGORY] = Conviva.Constants.DeviceCategory.WEB;

        return deviceMetadata;
    };

    this.getConvivaCallbackFunctions = function () { 
        var callbackFunctions = {};
        callbackFunctions[Conviva.Constants.CallbackFunctions.CONSOLE_LOG] = function (message, logLevel) {
            if (typeof console === 'undefined') return;
            if (console.log && logLevel === Conviva.SystemSettings.LogLevel.DEBUG ||
                logLevel === Conviva.SystemSettings.LogLevel.INFO) {
                console.log(message);
            } else if (console.warn && logLevel === Conviva.SystemSettings.LogLevel.WARNING) {
                console.warn(message);
            } else if (console.error && logLevel === Conviva.SystemSettings.LogLevel.ERROR) {
                console.error(message);
            }
        };
        callbackFunctions[Conviva.Constants.CallbackFunctions.MAKE_REQUEST] = function (httpMethod, url, data, contentType, timeoutMs, callback) {
            var xmlHttpReq = new XMLHttpRequest();

            xmlHttpReq.open(httpMethod, url, true);

            if (contentType && xmlHttpReq.overrideMimeType) {
                xmlHttpReq.overrideMimeType = contentType;
            }
            if (contentType && xmlHttpReq.setRequestHeader) {
                xmlHttpReq.setRequestHeader('Content-Type', contentType);
            }
            if (timeoutMs > 0) {
                xmlHttpReq.timeout = timeoutMs;
                xmlHttpReq.ontimeout = function () {
                    // Often this callback will be called after onreadystatechange.
                    // The first callback called will cleanup the other to prevent duplicate responses.
                    xmlHttpReq.ontimeout = xmlHttpReq.onreadystatechange = null;
                    if (callback) callback(false, "timeout after " + timeoutMs + " ms");
                };
            }

            xmlHttpReq.onreadystatechange = function () {
                if (xmlHttpReq.readyState === 4) {
                    xmlHttpReq.ontimeout = xmlHttpReq.onreadystatechange = null;
                    if (xmlHttpReq.status == 200) {
                        if (callback) callback(true, xmlHttpReq.responseText);
                    } else {
                        if (callback) callback(false, "http status " + xmlHttpReq.status);
                    }
                }
            };

            xmlHttpReq.send(data);
        };

        callbackFunctions[Conviva.Constants.CallbackFunctions.SAVE_DATA] = function (storageSpace, storageKey, data, callback) {
            var localStorageKey = storageSpace + "." + storageKey;
            try {
                localStorage.setItem(localStorageKey, data);
                callback(true, null);
            } catch (e) {
                callback(false, e.toString());
            }
        };

        callbackFunctions[Conviva.Constants.CallbackFunctions.LOAD_DATA] = function (storageSpace, storageKey, callback) {
            var localStorageKey = storageSpace + "." + storageKey;
            try {
                var data = localStorage.getItem(localStorageKey);
                callback(true, data);
            } catch (e) {
                callback(false, e.toString());
            }
        };

        callbackFunctions[Conviva.Constants.CallbackFunctions.GET_EPOCH_TIME_IN_MS] = function () {
            var d = new Date();
            return d.getTime();
        };

        callbackFunctions[Conviva.Constants.CallbackFunctions.CREATE_TIMER] = function (timerAction, intervalMs) {
            var timerId = setInterval(timerAction, intervalMs);
            var cancelTimerFunc = (function () {
                if (timerId !== -1) {
                    clearInterval(timerId);
                    timerId = -1;
                }
            });
            return cancelTimerFunc;
        };
        return callbackFunctions;
    };

    this.registerPlayerListeners = function () { log("<<++registerPlayerListeners - " + player.mediainfo.name, prod);
    
            
            this.videoPlayer.on('pause', this.onPause.bind(this));
            this.videoPlayer.on('playing', this.onPlaying.bind(this));
            this.videoPlayer.on('play', this.onPlay.bind(this));
            this.videoPlayer.on('loop', this.monitoringSessionInit.bind(this));
            this.videoPlayer.on('waiting', this.onWaiting.bind(this));
            this.videoPlayer.on('timeupdate', this.onTimeUpdate.bind(this));
            this.videoPlayer.on('error', this.onError.bind(this));
            this.videoPlayer.on('loadedmetadata', this.onLoadedMetadata.bind(this));
            this.videoPlayer.on('seeking', this.onSeeking.bind(this));
            this.videoPlayer.on('seeked', this.onSeeked.bind(this));
            this.videoPlayer.on('ended', this.onEnded.bind(this));            
            this.videoPlayer.on('abort', this.onEnded.bind(this));
            this.videoPlayer.on('stopcompleted', this.onEnded.bind(this));
        
        //if(this.videoPlayer.playlist.currentItem() == 0){
            this.videoPlayer.on('ima3-ads-manager-loaded',this.adsManagerLoaded.bind(this));
            this.videoPlayer.on('ima3-ad-error',this.onAdsLoaderError.bind(this));
        //}



    };
    this.destroy = function () { log("<<++*******************destroy - " + player.mediainfo.name, prod);
        if(convivaVideoAnalytics) convivaVideoAnalytics.release();
        if(convivaAdAnalytics) convivaAdAnalytics.release();
        if(this.adsManager) this.adsManager.destroy();

        this.videoPlayer.off('pause', this.onPause);
        this.videoPlayer.off('playing', this.onPlaying);
        this.videoPlayer.off('play', this.onPlay);
        this.videoPlayer.off('loop', this.monitoringSessionInit);
        this.videoPlayer.off('waiting', this.onWaiting);
        this.videoPlayer.off('timeupdate', this.onTimeUpdate);
        this.videoPlayer.off('error', this.onError);
        this.videoPlayer.off('loadedmetadata', this.onLoadedMetadata);
        this.videoPlayer.off('seeking', this.onSeeking);
        this.videoPlayer.off('seeked', this.onSeeked);
        this.videoPlayer.off('ended', this.onEnded);
        this.videoPlayer.off('stopcompleted', this.onEnded);
        
        //if(this.videoPlayer.playlist.currentItem() == 0){
        this.videoPlayer.off('ima3-ads-manager-loaded',this.adsManagerLoaded);
        this.videoPlayer.off('ima3-ad-error',this.onAdsLoaderError);
                                
        this.currentPodIndex = 0;

        //this = null;                        
    };
    
    
    
    
    this.ConvivaAdsAnalyticsInit = function () { log("<<++ConvivaAdsAnalyticsInit - " + player.mediainfo.name, prod);
        convivaAdAnalytics = Conviva.Analytics.buildAdAnalytics(convivaVideoAnalytics);
        var adPlayerInfo = {};
        adPlayerInfo[Conviva.Constants.FRAMEWORK_NAME] = 'Google IMA SDK';
        adPlayerInfo[Conviva.Constants.FRAMEWORK_VERSION] = '' + google.ima.VERSION;
        convivaAdAnalytics.setAdPlayerInfo(adPlayerInfo);
    };
    this.registerAdsManagerListeners = function () { log("<<++registerAdsManagerListeners - " + player.mediainfo.name, prod);
        // Handle errors.
        this.adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, this.onAdsManagerError, false, this);
        // Handle ad events
        var events = [
            google.ima.AdEvent.Type.AD_BREAK_READY,
            google.ima.AdEvent.Type.AD_CAN_PLAY,
            google.ima.AdEvent.Type.AD_METADATA,
            google.ima.AdEvent.Type.ALL_ADS_COMPLETED,
            google.ima.AdEvent.Type.CLICK,
            google.ima.AdEvent.Type.COMPLETE,
            google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED,
            google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,
            google.ima.AdEvent.Type.DURATION_CHANGE,
            google.ima.AdEvent.Type.EXPANDED_CHANGED,
            google.ima.AdEvent.Type.FIRST_QUARTILE,
            google.ima.AdEvent.Type.IMPRESSION,
            google.ima.AdEvent.Type.INTERACTION,
            google.ima.AdEvent.Type.LINEAR_CHANGED,
            google.ima.AdEvent.Type.LOADED,
            google.ima.AdEvent.Type.LOG,
            google.ima.AdEvent.Type.MIDPOINT,
            google.ima.AdEvent.Type.PAUSED,
            google.ima.AdEvent.Type.RESUMED,
            google.ima.AdEvent.Type.SKIPPABLE_STATE_CHANGED,
            google.ima.AdEvent.Type.SKIPPED,
            google.ima.AdEvent.Type.STARTED,
            google.ima.AdEvent.Type.THIRD_QUARTILE,
            google.ima.AdEvent.Type.USER_CLOSE,
            google.ima.AdEvent.Type.VIEWABLE_IMPRESSION,
            google.ima.AdEvent.Type.VOLUME_CHANGED,
            google.ima.AdEvent.Type.VOLUME_MUTED,
            google.ima.AdError.Type.AD_LOAD,
            google.ima.AdError.Type.AD_PLAY,
            google.ima.AdEvent.Type.AD_BUFFERING,
            google.ima.AdEvent.Type.AD_PROGRESS,
        ];
        for (var index in events) {
            this.adsManager.addEventListener(events[index], this.onAdEvent, false, this);
        }
    };

    this.onLoadedMetadata = function () { log("<<++onLoadedMetadata - " + player.mediainfo.name, prod);
        if (convivaVideoAnalytics != null) {
            var dur = (this.videoPlayer.mediainfo.duration);
            if (!isNaN(dur) && dur != Infinity) {
                var contentInfo = {};
                contentInfo[Conviva.Constants.DURATION] = parseInt(dur, 10);
                convivaVideoAnalytics.setContentInfo(contentInfo);
            }
            var currentVideoBitrate = this.videoPlayer.tech(true).vhs.playlists.media().attributes;

            convivaVideoAnalytics.reportPlaybackMetric(Conviva.Constants.Playback.RESOLUTION, currentVideoBitrate.RESOLUTION.width, currentVideoBitrate.RESOLUTION.height);
            convivaVideoAnalytics.reportPlaybackMetric(Conviva.Constants.Playback.BITRATE, currentVideoBitrate.BANDWIDTH/1024);
            convivaVideoAnalytics.reportPlaybackMetric(Conviva.Constants.Playback.RENDERED_FRAMERATE, currentVideoBitrate['FRAME-RATE']);

        }
    };

    this.monitoringSessionInit = function () { log("<<++monitoringSessionInit - " + player.mediainfo.name, prod);
        if (convivaVideoAnalytics == null) {
            // Create content metadata with essential attributes.
            var contentMetadata = {};
            contentMetadata[Conviva.Constants.ASSET_NAME] = "[" + this.contentMetadata.assetID + "] " + this.contentMetadata.title;
            contentMetadata[Conviva.Constants.STREAM_URL] = this.contentMetadata.url;
            contentMetadata[Conviva.Constants.IS_LIVE] = this.contentMetadata.live == 'true' ? Conviva.Constants.StreamType.LIVE : Conviva.Constants.StreamType.VOD;
            contentMetadata[Conviva.Constants.PLAYER_NAME] = this.contentMetadata.playerName;
            contentMetadata[Conviva.Constants.VIEWER_ID] = this.contentMetadata.adobeViewerID;
            contentMetadata[Conviva.Constants.DURATION] = this.contentMetadata.durationSec;
            contentMetadata[Conviva.Constants.DEFAULT_RESOURCE] = 'Akamai';
            contentMetadata[Conviva.Constants.APPLICATION_VERSION] = _satellite.getVar("publish_ver") || 'Launch PublishDate:2999-12-31 | sCode version:2.1.0';
            //contentMetadata[Conviva.Constants.ENCODED_FRAMERATE] = 20;
            // contentMetadata.appVersion = appVersion;
            //contentMetadata.tag2 = '100';
            //contentMetadata.tag3 = 'false';
             Object.assign(contentMetadata,this.contentMetadata);

            // Create a monitoring session for content
            convivaVideoAnalytics = Conviva.Analytics.buildVideoAnalytics();
            window.convivaVideoAnalytics = convivaVideoAnalytics;
            var playerInfo = {};
            playerInfo[Conviva.Constants.FRAMEWORK_NAME] = "Brightcove Media Player";
            playerInfo[Conviva.Constants.FRAMEWORK_VERSION] = bc.VERSION; //this.videoPlayer.getPlayerVersion();
            convivaVideoAnalytics.setPlayerInfo(playerInfo);
            convivaVideoAnalytics.reportPlaybackRequested(contentMetadata);
            convivaVideoAnalytics.setCallback(function () {
                if (convivaVideoAnalytics != null) {
                    if (_s.videoPlayer) {
                        convivaVideoAnalytics.reportPlaybackMetric(Conviva.Constants.Playback.PLAY_HEAD_TIME, _s.videoPlayer.currentTime() / 1000);
                        convivaVideoAnalytics.reportPlaybackMetric(Conviva.Constants.Playback.BUFFER_LENGTH, _s.videoPlayer.buffered().length);
                    }
                }
            });
            this.contentPlaybackEnded = false;
        }
    };


    
    this.onPlay = function () { 
        log("<<++onPlay - " + player.mediainfo.name, prod);
       this.monitoringSessionInit();
        if(this.contentPlaybackEnded){
            this.podIndex = 1;
            this.podPosition = null;
            if(convivaVideoAnalytics) convivaVideoAnalytics.release();
            if(convivaAdAnalytics) convivaAdAnalytics.release();
            if(this.adsManager) this.adsManager.destroy();
            //this.initConvivaClient();
            //this.registerPlayerListeners();
            //this.monitoringSessionInit();
            //this.ConvivaAdsAnalyticsInit();
            this.currentPodIndex = 0;
        }
        //this.ConvivaAdsAnalyticsInit();
        
    };
    this.onPlaying = function () { log("<<++onPlaying - " + player.mediainfo.name, prod);
        if (convivaVideoAnalytics != null) {
            convivaVideoAnalytics.reportPlaybackMetric(Conviva.Constants.Playback.PLAYER_STATE, Conviva.Constants.PlayerState.PLAYING);
        }
    };
    this.onPause = function () { log("<<++onPause - " + player.mediainfo.name, prod);
        if (convivaVideoAnalytics != null) {
            convivaVideoAnalytics.reportPlaybackMetric(Conviva.Constants.Playback.PLAYER_STATE, Conviva.Constants.PlayerState.PAUSED);
        }
    };
    this.onEmptied = function () { log("<<++onEmptied - " + player.mediainfo.name, prod);
        if (convivaVideoAnalytics != null) {
            convivaVideoAnalytics.reportPlaybackMetric(Conviva.Constants.Playback.PLAYER_STATE, Conviva.Constants.PlayerState.BUFFERING);
        }
    };
    this.onWaiting = function () { log("<<++onWaiting - " + player.mediainfo.name, prod);
        if (convivaVideoAnalytics != null) {
            convivaVideoAnalytics.reportPlaybackMetric(Conviva.Constants.Playback.PLAYER_STATE, Conviva.Constants.PlayerState.BUFFERING);
        }
    };
    this.onTimeUpdate = function () { if(player.currentTime() % 5 <= 0.25) {log("<<++onTimeUpdate - " + player.currentTime() , prod);}
        if (convivaVideoAnalytics != null) {
            var currentVideoBitrate = this.videoPlayer.tech(true).vhs.playlists.media().attributes;
            
            convivaVideoAnalytics.reportPlaybackMetric(Conviva.Constants.Playback.RESOLUTION, currentVideoBitrate.RESOLUTION.width, currentVideoBitrate.RESOLUTION.height);
            convivaVideoAnalytics.reportPlaybackMetric(Conviva.Constants.Playback.BITRATE, currentVideoBitrate.BANDWIDTH/1024);
           }
     };
    this.onSeeking = function () { log("<<++onSeeking - " + player.mediainfo.name, prod);
        if (convivaVideoAnalytics != null) {
            convivaVideoAnalytics.reportPlaybackMetric(Conviva.Constants.Playback.SEEK_STARTED);
        }
    };
    this.onSeeked = function () { log("<<++onSeeked - " + player.mediainfo.name, prod);
        if (convivaVideoAnalytics != null) {
            convivaVideoAnalytics.reportPlaybackMetric(Conviva.Constants.Playback.SEEK_ENDED);
        }
    };
    this.onError = function () { log("<<++onError - " + player.mediainfo.name, prod);
        if (convivaVideoAnalytics != null) {
            convivaVideoAnalytics.reportPlaybackFailed('Fatal error occured');
        } else {
            convivaVideoAnalytics = Conviva.Analytics.buildVideoAnalytics();
            convivaVideoAnalytics.reportPlaybackFailed('Fatal error occured');
        }
        convivaVideoAnalytics.release();
        convivaVideoAnalytics = null;
        Conviva.Analytics.release();
        this.contentPlaybackEnded = true;
    };
    this.onEnded = function () { log("<<++onEnded - " + player.mediainfo.name, prod);
        try {
            if (convivaVideoAnalytics != null) {
            convivaVideoAnalytics.reportPlaybackMetric(Conviva.Constants.Playback.PLAYER_STATE, Conviva.Constants.PlayerState.STOPPED);
            convivaVideoAnalytics.reportPlaybackEnded();
            convivaVideoAnalytics.release();
            convivaVideoAnalytics = null;
            Conviva.Analytics.release();
            this.destroy();
        }
        this.contentPlaybackEnded = true;
        } catch (error) {
          log("<<++onEnded1 - " + error, prod);
          // Expected output: ReferenceError: nonExistentFunction is not defined
          // (Note: the exact output may be browser-dependent)
        }

    try {
            if (convivaVideoAnalytics != null) {
            convivaVideoAnalytics.reportPlaybackMetric(Conviva.Constants.Playback.PLAYER_STATE, Conviva.Constants.PlayerState.STOPPED);
            convivaVideoAnalytics.reportPlaybackEnded();
            convivaVideoAnalytics.release();
            convivaVideoAnalytics = null;
            Conviva.Analytics.release();
            this.destroy();
        }
        this.contentPlaybackEnded = true;
        } catch (error) {
          log("<<++onEnded2 - " + error, prod);
          // Expected output: ReferenceError: nonExistentFunction is not defined
          // (Note: the exact output may be browser-dependent)
        }

    };
    this.onDispose = function () { log("<<++onDispose - " + player.mediainfo.name, prod);
        try {
            if (convivaVideoAnalytics != null) {
            convivaVideoAnalytics.reportPlaybackMetric(Conviva.Constants.Playback.PLAYER_STATE, Conviva.Constants.PlayerState.STOPPED);
            convivaVideoAnalytics.reportPlaybackEnded();
            convivaVideoAnalytics.release();
            convivaVideoAnalytics = null;
            Conviva.Analytics.release();
            this.destroy();
        }
        this.contentPlaybackEnded = true;
        } catch (error) {
          log("<<++onDispose - " + error, prod);
          // Expected output: ReferenceError: nonExistentFunction is not defined
          // (Note: the exact output may be browser-dependent)
        }

    try {
            if (convivaVideoAnalytics != null) {
            convivaVideoAnalytics.reportPlaybackMetric(Conviva.Constants.Playback.PLAYER_STATE, Conviva.Constants.PlayerState.STOPPED);
            convivaVideoAnalytics.reportPlaybackEnded();
            convivaVideoAnalytics.release();
            convivaVideoAnalytics = null;
            Conviva.Analytics.release();
            this.destroy();
        }
        this.contentPlaybackEnded = true;
        } catch (error) {
          log("<<++onDispose - " + error, prod);
          // Expected output: ReferenceError: nonExistentFunction is not defined
          // (Note: the exact output may be browser-dependent)
        }

    };


    // AdsLoader listeners
    this.adsManagerLoaded = function (event) { log("<<++adsManagerLoaded - " + player.mediainfo.name, prod);
        this.adsManager = event.originalEvent.getAdsManager();//event.originalEvent.g; //BC ima3 admanager
        this.registerAdsManagerListeners();
    };

    
    //Ads Manager event listeners
    this.onContentPauseRequested = function (event) { log("<<++onContentPauseRequested - " + player.mediainfo.name, prod);
        this.allAdsCompleted = false;
        this.contentPauseRequested = true;
        if (convivaVideoAnalytics != null) {
            this.currentPodIndex = event.getAd().getAdPodInfo().getPodIndex();

            if (this.isAdBreakEnabled) {
                //Send podstart event
                this.podDuration = event.getAd().getDuration();
                
                var imaPodIndex = event.ad.getAdPodInfo().getPodIndex();
                var adsPodTotal = event.getAd().getAdPodInfo().getTotalAds()   
                log("********Mid-roll = " + imaPodIndex +"  ***********adsPodTotal = " + adsPodTotal, prod); 

                // get pod position based on https://developers.google.com/interactive-media-ads/docs/sdks/html5/v3/apis#ima.AdPodInfo.getPodIndex
                if (this.currentPodIndex === 0) {
                    this.podPosition = 'Pre-roll';
                } else if (this.currentPodIndex === -1) {
                    this.podPosition = 'Post-roll';
                } else {
                    this.podPosition = 'Mid-roll ' + imaPodIndex;
                    this.podDuration = event.getAd().getDuration() * adsPodTotal;
                }
                var adBreak = {};
                adBreak[Conviva.Constants.POD_POSITION] = this.podPosition;
                adBreak[Conviva.Constants.POD_DURATION] = this.podDuration;
                adBreak[Conviva.Constants.POD_INDEX] = this.podIndex;

                convivaVideoAnalytics.reportAdBreakStarted(Conviva.Constants.AdType.CLIENT_SIDE,Conviva.Constants.AdPlayer.CONTENT, adBreak);
            } else {
                // convivaVideoAnalytics.reportPlaybackEvent(Conviva.Constants.Events.BUMPER_VIDEO_STARTED);
                convivaVideoAnalytics.reportAdBreakStarted(Conviva.Constants.AdType.CLIENT_SIDE, Conviva.Constants.AdPlayer.CONTENT);
            }
        }
    };

    this.onContentResumeRequested = function (event) { log("<<++onContentResumeRequested - " + player.mediainfo.name, prod);
        this.allAdsCompleted = false;
        if (convivaVideoAnalytics != null) {
            if (this.contentPauseRequested) {
                if (this.isAdBreakEnabled) {
                    convivaVideoAnalytics.reportAdBreakEnded();
                    this.podIndex++;
                    this.podPosition = null;
                } else {
                    // convivaVideoAnalytics.reportPlaybackEvent(Conviva.Constants.Events.BUMPER_VIDEO_ENDED);
                    convivaVideoAnalytics.reportAdBreakEnded();
                }
            }
            if (this.currentPodIndex == -1) {
                convivaVideoAnalytics.reportPlaybackEnded();
                convivaVideoAnalytics.release();
                convivaVideoAnalytics = null;
                Conviva.Analytics.release();
                this.contentPlaybackEnded = true;
            }
        }
        this.contentPauseRequested = false;
    };

    this.onAdEvent = function (adEvent) { log("<<++onAdEvent - " + player.mediainfo.name, prod);
        log('Conviva captured event ---- +++ **** ' + adEvent.type,prod);
        if (adEvent.type == google.ima.AdEvent.Type.STARTED && adEvent.getAd().isLinear() === true) {
            this.onAdStart(adEvent);
        } else if (adEvent.type == google.ima.AdEvent.Type.RESUMED && adEvent.getAd().isLinear() === true) {
            if (convivaAdAnalytics != null) {
                convivaAdAnalytics.reportAdMetric(Conviva.Constants.Playback.PLAYER_STATE, Conviva.Constants.PlayerState.PLAYING);
            }
        } else if (adEvent.type == google.ima.AdEvent.Type.PAUSED && adEvent.getAd().isLinear() === true) {
            if (convivaAdAnalytics != null) {
                convivaAdAnalytics.reportAdMetric(Conviva.Constants.Playback.PLAYER_STATE, Conviva.Constants.PlayerState.PAUSED);
            }
        } else if (adEvent.type == google.ima.AdEvent.Type.COMPLETE && adEvent.getAd().isLinear() === true) {
            if (convivaAdAnalytics != null) {
                convivaAdAnalytics.reportAdMetric(Conviva.Constants.Playback.PLAYER_STATE, Conviva.Constants.PlayerState.STOPPED);
                convivaAdAnalytics.reportAdEnded();
                convivaAdAnalytics.release();
                convivaAdAnalytics = null;
            }
        } else if (adEvent.type == google.ima.AdEvent.Type.SKIPPED && adEvent.getAd().isLinear() === true) {
            if (convivaAdAnalytics != null) {
                convivaAdAnalytics.reportAdMetric(Conviva.Constants.Playback.PLAYER_STATE, Conviva.Constants.PlayerState.STOPPED);
                convivaAdAnalytics.reportAdSkipped();
                convivaAdAnalytics.release();
                convivaAdAnalytics = null;
            }
        } else if (adEvent.type == google.ima.AdEvent.Type.ALL_ADS_COMPLETED) {
            this.allAdsCompleted = true;
            if (this.contentPlaybackEnded && convivaVideoAnalytics != null) {
                convivaVideoAnalytics.reportPlaybackEnded();
                convivaVideoAnalytics.release();
                convivaVideoAnalytics = null;
                Conviva.Analytics.release();
            }
        } else if (adEvent.type == google.ima.AdEvent.Type.LOG) {
            this.onAdLogError(adEvent);
        } else if (adEvent.type == google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED) {
            this.onContentPauseRequested(adEvent);
        } else if (adEvent.type == google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED) {
            this.onContentResumeRequested(adEvent);
        } else if (adEvent.type == google.ima.AdEvent.Type.AD_BUFFERING) {
            if (convivaAdAnalytics != null) {
                convivaAdAnalytics.reportAdMetric(Conviva.Constants.Playback.PLAYER_STATE, Conviva.Constants.PlayerState.BUFFERING);
            }
        } else if (adEvent.type == google.ima.AdEvent.Type.AD_PROGRESS) {
            if (convivaAdAnalytics != null) {
                convivaAdAnalytics.reportAdMetric(Conviva.Constants.Playback.PLAYER_STATE, Conviva.Constants.PlayerState.PLAYING);
            }
        }
    };

    this.onAdStart = function (adEvent) { log("<<++onAdStart - " + player.mediainfo.name, prod);
        // Create ad monitroing session
        if (convivaAdAnalytics == null && convivaVideoAnalytics != null) {
            convivaAdAnalytics = Conviva.Analytics.buildAdAnalytics(convivaVideoAnalytics);
            var adPlayerInfo = {};
            adPlayerInfo[Conviva.Constants.FRAMEWORK_NAME] = 'Google IMA SDK';
            adPlayerInfo[Conviva.Constants.FRAMEWORK_VERSION] = '' + google.ima.VERSION;
            convivaAdAnalytics.setAdPlayerInfo(adPlayerInfo);
        }

        if (convivaAdAnalytics != null) {
            // Create ad metadata with essential attributes
            var adMetadata = this.getConvivaAdMetadata(adEvent.getAd());
            // convivaAdAnalytics.setAdInfo(adMetadata); // can set via setAdInfo or reportAdStarted
            convivaAdAnalytics.reportAdStarted(adMetadata);
           var currentVideoBitrate = this.videoPlayer.tech(true).vhs.playlists.media().attributes;
            convivaAdAnalytics.reportAdMetric(Conviva.Constants.Playback.RESOLUTION, currentVideoBitrate.RESOLUTION.width, currentVideoBitrate.RESOLUTION.height);
            convivaAdAnalytics.reportAdMetric(Conviva.Constants.Playback.BITRATE, currentVideoBitrate.BANDWIDTH/1024);
            convivaAdAnalytics.reportAdMetric(Conviva.Constants.Playback.RENDERED_FRAMERATE, currentVideoBitrate['FRAME-RATE']);
        }
    };

    this.onAdsLoaderError = function (event) { log("<<++onAdsLoaderError - " + player.mediainfo.name, prod);
        this.reportAdFailed(event, 'Ads Loader Error');
    };

    this.onAdsManagerError = function (event) { log("<<++onAdsManagerError - " + player.mediainfo.name, prod);
        log('Conviva captured Error ---- +++ **** ' + event.type, prod);
        var adError = event.getError();
        this.handleAdError(adError);
    };

    this.onAdLogError = function (event) { log("<<++onAdLogError - " + player.mediainfo.name, prod);
        var adData = event.getAdData();
        var adError = adData['adError'];
        log('Conviva captured Error Type ---- +++ **** ' + adError.getType(),prod);
        log('Conviva captured Error Code ---- +++ **** ' + adError.getErrorCode(),prod);
        log('Conviva captured Error Message ---- +++ **** ' + adError.getMessage(),prod);
    };

    this.getConvivaAdMetadata = function (ad) { log("<<++getConvivaAdMetadata - " + player.mediainfo.name, prod);
        var adMetadata = {};
        // ad asset metadata
        adMetadata[Conviva.Constants.ASSET_NAME] = ad.getTitle();
        adMetadata[Conviva.Constants.STREAM_URL] = ad.getMediaUrl();
        adMetadata[Conviva.Constants.PLAYER_NAME] = contentMetadata.playerName;
        adMetadata[Conviva.Constants.VIEWER_ID] = contentMetadata.adobeViewerID;
        adMetadata[Conviva.Constants.DURATION] = ad.getDuration();
        adMetadata[Conviva.Constants.IS_LIVE] = Conviva.Constants.StreamType.VOD;
        adMetadata[Conviva.Constants.ENCODED_FRAMERATE] = 30;
        adMetadata[Conviva.Constants.DEFAULT_RESOURCE] = 'Akamai';
        adMetadata['adBitRate'] = ''+ad.getVastMediaBitrate();
        // first wrapper info
        var firstAdSystem;
        var firstAdId;
        var firstCreativeId;
        if (ad.getWrapperAdIds() && ad.getWrapperAdIds().length !== 0) {
            var len = ad.getWrapperAdIds().length;
            firstAdSystem = ad.getWrapperAdSystems()[len - 1];
            firstAdId = ad.getWrapperAdIds()[len - 1];
            firstCreativeId = ad.getWrapperCreativeIds()[len - 1];
        } else {
            firstAdSystem = ad.getAdSystem();
            firstAdId = ad.getAdId();
            firstCreativeId = ad.getCreativeId();
        }
        // get ad position based on https://developers.google.com/interactive-media-ads/docs/sdks/html5/v3/apis#ima.AdPodInfo.getPodIndex
        var adPosition;
        var imaPodIndex = ad.getAdPodInfo().getPodIndex();
        var adPosIndex = ad.getAdPodInfo().getAdPosition();                                       

        log("********Mid-roll = " + imaPodIndex +"  ***********AdPosition = " + ad.getAdPodInfo().getAdPosition(), prod); 
                                               
        if (imaPodIndex === 0) {
            adPosition = 'Pre-roll';
        } else if (imaPodIndex === -1) {
            adPosition = 'Post-roll';
        } else {
            adPosition = 'Mid-roll ' + imaPodIndex;
            //send midroll info to adobe
            if(typeof s != 'undefined') {
               log('midrolll ********  M'+ imaPodIndex + 'S'+adPosIndex, prod);
                s.contextData['tmAdReq'] = "";
                s.contextData['tmAdPlay'] = "";
                s.contextData['tmAFLW'] = "";
                s.contextData['tmIsCC'] = ""
                s.contextData['tmMidroll'] = 'M'+ imaPodIndex + 'S'+adPosIndex; //midroll = M1S1 or M2S2 etc 
                s.Media.track(!this.contentMetadata.live ? "Live:"+player.mediainfo.name : player.mediainfo.name, player.currentTime());
                s.Media.play(!this.contentMetadata.live ? "Live:"+player.mediainfo.name : player.mediainfo.name, player.currentTime());

            }
        }
        // ad tags
        adMetadata['c3.ad.id'] = '' + ad.getAdId();
        adMetadata['c3.ad.creativeId'] = '' + ad.getCreativeId();
        adMetadata['c3.ad.technology'] = 'Client Side';
        adMetadata['c3.ad.system'] = '' + ad.getAdSystem();
        adMetadata['adSequence'] = '' + ad.getAdPodInfo().getAdPosition();
        adMetadata['c3.ad.mediaFileApiFramework'] = '' + ad.getApiFramework() == null ? "NA" : ad.getApiFramework();
        adMetadata['c3.ad.advertiser'] = '' + ad.getAdvertiserName();
        adMetadata['c3.ad.position'] = adPosition;
        adMetadata['c3.ad.adManagerName'] = 'Google IMA SDK';
        adMetadata['c3.ad.adManagerVersion'] = '' + google.ima.VERSION;
        adMetadata['c3.ad.firstAdSystem'] = '' + firstAdSystem;
        adMetadata['c3.ad.firstAdId'] = '' + firstAdId;
        adMetadata['c3.ad.firstCreativeId'] = '' + firstCreativeId;
        return adMetadata;
    };

    this.handleAdError = function (adError) { log("<<++handleAdError - " + player.mediainfo.name, prod);
        if (!adError) return;

        var errorType = adError.getType();
        switch (errorType) {
            case google.ima.AdError.Type.AD_PLAY:
                this.handleAdPlayError(adError);
                break;
            case google.ima.AdError.Type.AD_LOAD:
                this.handleAdLoadError(adError);
                break;
            default:
                break;
        }
    };

    /**
     * 1. check if there id an exisiting ad session, if so, report error in that session;
     * 2. if no exisiting ad session, create an new ad session with no ad metadata and report it as ASF
     */
    this.handleAdPlayError = function (adError) {log("<<++handleAdPlayError - " + player.mediainfo.name, prod);
        this.reportAdFailed(adError, 'Ad Play Error');
    };

    this.handleAdLoadError = function (adError) {log("<<++handleAdLoadError - " + player.mediainfo.name, prod);
        this.reportAdFailed(adError, 'Ad Load Error');
    };

    this.reportAdFailed = function (event, assetName) {log("<<++reportAdFailed - " + player.mediainfo.name, prod);
        // create an new ad session and report it as ASF
        if (event.getError && typeof event.getError === 'function') {
            if (event.getError().getType && (typeof event.getError().getType === 'function') && event.getError().getType()) {
                errorMessage = 'Type: ' + event.getError().getType();
            }

            if (event.getError().getType && (typeof event.getError().getErrorCode === 'function') && event.getError().getErrorCode()) {
                if (errorMessage == undefined) {
                    errorMessage = 'Code: ' + event.getError().getErrorCode();
                } else {
                    errorMessage += ', Code: ' + event.getError().getErrorCode();
                }
            }

            if (event.getError().getType && (typeof event.getError().getMessage === 'function') && event.getError().getMessage()) {
                if (errorMessage == undefined) {
                    errorMessage = 'Message: ' + event.getError().getMessage();
                } else {
                    errorMessage += ', Message: ' + event.getError().getMessage();
                }
            }
        }
        if (errorMessage == undefined) {
            errorMessage = 'Ad Request Failed';
        }

        var adMetadata = {};
        adMetadata[Conviva.Constants.ASSET_NAME] = assetName;
        adMetadata[Conviva.Constants.IS_LIVE] = Conviva.Constants.StreamType.VOD;
        adMetadata.applicationName = this.contentMetadata.applicationName
        adMetadata[Conviva.Constants.PLAYER_NAME] = this.contentMetadata.playerName;
        adMetadata.viewerId = this.contentMetadata.adobeViewerID;
        adMetadata['c3.ad.technology'] = 'Client Side';
        adMetadata['c3.ad.adManagerName'] = 'Google IMA SDK';
        adMetadata['c3.ad.adManagerVersion'] = '' + google.ima.VERSION;
        if (convivaAdAnalytics == null) {
            convivaAdAnalytics = Conviva.Analytics.buildAdAnalytics(convivaVideoAnalytics);
            var adPlayerInfo = {};
            adPlayerInfo[Conviva.Constants.FRAMEWORK_NAME] = 'Google IMA SDK';
            adPlayerInfo[Conviva.Constants.FRAMEWORK_VERSION] = '' + google.ima.VERSION;
            convivaAdAnalytics.setAdPlayerInfo(adPlayerInfo);
        }
        convivaAdAnalytics.reportAdFailed(errorMessage, adMetadata);
        if (convivaAdAnalytics != null) {
            convivaAdAnalytics.release();
            convivaAdAnalytics = null;
        }
    };

    // Constructor 
    //_s.videoPlayer = rmpVideoPlayer;
    this.adsManager = null;
    this.podIndex = 1;
    this.podPosition = null;
    this.initConvivaClient();
    this.registerPlayerListeners();
    //this.monitoringSessionInit();
    //this.ConvivaAdsAnalyticsInit();
    this.currentPodIndex = 0;
};
