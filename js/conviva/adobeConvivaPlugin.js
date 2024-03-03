           //plugin
            videojs.registerPlugin('AdobeConviva', function(options) {
                function log(m, p) {
                    if (!p) {
                        console.log(m)
                    }
                }
         
                var prod = true; 
                var adobe = true; 
                if (!options) {
                    console.log("Options has not been added, please add the options on video cloud")
                } else {
                    prod = options["env"] == "production";
                    adobe = options["adobe"];
                }

                var myPlayer = this;
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

                var integration, convivaIntegration;
                //Setting Up Conviva Configs default as test
                
                var TEST_CUSTOMER_KEY = options.testing.customerKey; //'69b93c2f8bf26c0edf513501a13f4da18556fb68';
                var TOUCHSTONE_SERVICE_URL = options.testing.gatewayUrl; //'https://telstra-afl.testonly.conviva.com';

                var convivaConfigs = {};
                convivaConfigs[Conviva.Constants.GATEWAY_URL] = TOUCHSTONE_SERVICE_URL;
                convivaConfigs[Conviva.Constants.LOG_LEVEL] = Conviva.Constants.LogLevel.ERROR;
                convivaConfigs[Conviva.Constants.CUSTOMER_KEY] = TEST_CUSTOMER_KEY;
                
                switch (prod)
                {
                    case true:
                        
                        convivaConfigs[Conviva.Constants.GATEWAY_URL] = options.production.gatewayUrl;
                        convivaConfigs[Conviva.Constants.LOG_LEVEL] = Conviva.Constants.LogLevel.ERROR;
                        convivaConfigs[Conviva.Constants.CUSTOMER_KEY] = options.production.customerKey;
                    break;    
                    case false:
                        convivaConfigs[Conviva.Constants.GATEWAY_URL] = options.testing.gatewayUrl;
                        convivaConfigs[Conviva.Constants.LOG_LEVEL] = Conviva.Constants.LogLevel.DEBUG;
                        convivaConfigs[Conviva.Constants.CUSTOMER_KEY] = options.testing.customerKey;
           
                    break;    
                }
                


                var viewerID = "random:" + Math.random() * 1e9;

                if (adobe) {
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

                        buildMetadata();

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
                function buildMetadata() {
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
                    if(!prod)myPlayer.ima3.settings.serverUrl = '../../Pre-roll.xml?sz=640x480&iu=/7414/TEL.AFL/cx-on-stream&impl=s&gdfp_req=1&env=vp&output=xml_vast2&unviewed_position_start=1&url=[referrer_url]&description_url=[description_url]&correlator=[timestamp]&ad_rule=1&cmsid=2513968&vid=[mediainfo.id]';
                    buildMetadata();

                    //kill all old sessions                
                    if (integration) {
                       //integration.ConvivaIma3Integration(myPlayer,convivaConfigs,metadata);
                    integration = null;
                    }
                    //start new sessions
                       integration = new ConvivaIma3Integration(myPlayer,convivaConfigs,metadata );
                                
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

                    aflSitesArray = new Object();
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

            });
