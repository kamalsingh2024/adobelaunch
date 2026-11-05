/**
 * @fileoverview Generated externs.
 * @externs
 */
var clpp;
clpp.AbstractBasePlayer;
/**
 * @return {!clpp.net.NetworkEngine}
 */
clpp.AbstractBasePlayer.prototype.getNetworkEngine = function() {
};
/**
 * @return {(clpp.ITextDisplayer|null)}
 */
clpp.AbstractBasePlayer.prototype.getTextDisplayer = function() {
};
/**
 * @param {!clpp.net.NetworkEngine} engine
 * @return {?}
 */
clpp.AbstractBasePlayer.prototype.setNetworkEngine = function(engine) {
};
/**
 * @param {(TimeRanges|null)=} opt_delegate
 * @param {string=} opt_type
 * @constructor
 */
clpp.BufferInfo = function(opt_delegate, opt_type) {
};
/**
 * @return {(null|number)}
 */
clpp.BufferInfo.prototype.bufferEnd = function() {
};
/**
 * @return {(null|number)}
 */
clpp.BufferInfo.prototype.bufferStart = function() {
};
/**
 * @param {number} time
 * @param {boolean=} opt_includeGaps
 * @return {number}
 */
clpp.BufferInfo.prototype.bufferedAheadOf = function(time, opt_includeGaps) {
};
/**
 * @param {number} index
 * @return {number}
 */
clpp.BufferInfo.prototype.end = function(index) {
};
/**
 * @param {number} time
 * @param {boolean=} opt_includeGaps
 * @param {number=} opt_smallGapLimit
 * @return {boolean}
 */
clpp.BufferInfo.prototype.isBuffered = function(time, opt_includeGaps, opt_smallGapLimit) {
};
/**
 * @param {number} index
 * @return {number}
 */
clpp.BufferInfo.prototype.start = function(index) {
};
/**
 * @param {number} severity
 * @param {number} category
 * @param {number} code
 * @param {(Object|null|string)=} opt_data
 * @param {*=} opt_error
 * @extends {Error}
 * @constructor
 */
clpp.Error = function(severity, category, code, opt_data, opt_error) {
};
/** @enum {number} */
clpp.Error.Category = {NETWORK:1, TEXT:2, MEDIA:3, MANIFEST:4, STREAMING:5, DRM:6, PLAYER:7, CAST:8, PLUGIN:9, ADS:10};
/** @enum {number} */
clpp.Error.Code = {UNSUPPORTED_SCHEME:1, BAD_HTTP_STATUS:2, HTTP_ERROR:3, TIMEOUT:4, MALFORMED_DATA_URI:5, UNKNOWN_DATA_URI_ENCODING:6, REQUEST_MODIFIER_ERROR:7, RESPONSE_MODIFIER_ERROR:8, MALFORMED_TEST_URI:9, UNEXPECTED_TEST_REQUEST:10, ATTEMPTS_EXHAUSTED:11, INVALID_TEXT_HEADER:12, INVALID_TEXT_CUE:13, UNABLE_TO_DETECT_ENCODING:14, BAD_ENCODING:15, INVALID_XML:16, INVALID_MP4_TTML:17, INVALID_MP4_VTT:18, UNABLE_TO_EXTRACT_CUE_START_TIME:19, FETCH_OR_APPEND_ERROR:20, INVALID_MP4:21, BUFFER_READ_OUT_OF_BOUNDS:22, 
JS_INTEGER_OVERFLOW:23, EBML_OVERFLOW:24, EBML_BAD_FLOATING_POINT_SIZE:25, MP4_SIDX_WRONG_BOX_TYPE:26, MP4_SIDX_INVALID_TIMESCALE:27, MP4_SIDX_TYPE_NOT_SUPPORTED:28, WEBM_CUES_ELEMENT_MISSING:29, WEBM_EBML_HEADER_ELEMENT_MISSING:30, WEBM_SEGMENT_ELEMENT_MISSING:31, WEBM_INFO_ELEMENT_MISSING:32, WEBM_DURATION_ELEMENT_MISSING:33, WEBM_CUE_TRACK_POSITIONS_ELEMENT_MISSING:34, WEBM_CUE_TIME_ELEMENT_MISSING:35, MEDIA_SOURCE_OPERATION_FAILED:36, MEDIA_SOURCE_OPERATION_THREW:37, VIDEO_ERROR:38, QUOTA_EXCEEDED_ERROR:39, 
TRANSMUXING_FAILED:40, MP4_PARSER_ERROR:41, MEDIA_LOAD_ERROR:42, INVALID_TRACK_TYPE:43, UNKNOWN_TRACK:44, MEDIA_DECRYPTION_ERROR:45, PLAY_NOT_ALLOWED:46, UNABLE_TO_GUESS_MANIFEST_TYPE:47, DASH_INVALID_XML:48, DASH_NO_SEGMENT_INFO:49, DASH_EMPTY_ADAPTATION_SET:50, DASH_EMPTY_PERIOD:51, DASH_WEBM_MISSING_INIT:52, DASH_UNSUPPORTED_CONTAINER:53, DASH_PSSH_BAD_ENCODING:54, DASH_NO_COMMON_KEY_SYSTEM:55, DASH_MULTIPLE_KEY_IDS_NOT_SUPPORTED:56, DASH_CONFLICTING_KEY_IDS:57, UNPLAYABLE_PERIOD:58, RESTRICTIONS_CANNOT_BE_MET:59, 
NO_PERIODS:60, HLS_PLAYLIST_HEADER_MISSING:61, INVALID_HLS_TAG:62, HLS_INVALID_PLAYLIST_HIERARCHY:63, DASH_DUPLICATE_REPRESENTATION_ID:64, HLS_MULTIPLE_MEDIA_INIT_SECTIONS_FOUND:65, HLS_COULD_NOT_GUESS_MIME_TYPE:66, HLS_REQUIRED_ATTRIBUTE_MISSING:67, HLS_REQUIRED_TAG_MISSING:68, HLS_COULD_NOT_GUESS_CODECS:69, HLS_KEYFORMATS_NOT_SUPPORTED:70, DASH_UNSUPPORTED_XLINK_ACTUATE:71, DASH_XLINK_DEPTH_LIMIT:72, HLS_COULD_NOT_PARSE_SEGMENT_START_TIME:73, CONTENT_UNSUPPORTED_BY_BROWSER:74, SMOOTH_INVALID_MANIFEST_XML:75, 
SMOOTH_EMPTY_PRESENTATION:76, SMOOTH_MEDIA_PROCESSING_ERROR:77, SMOOTH_INVALID_VERSION:78, SMOOTH_INVALID_FRAGMENT_METADATA:79, SMOOTH_REQUIRED_ATTRIBUTE_MISSING:80, SMOOTH_TRUNCATED_MEDIA_FILE:81, CANNOT_ADD_EXTERNAL_TEXT_TO_LIVE_STREAM:82, INVALID_STREAMS_CHOSEN:83, NO_RECOGNIZED_KEY_SYSTEMS:84, REQUESTED_KEY_SYSTEM_CONFIG_UNAVAILABLE:85, FAILED_TO_CREATE_CDM:86, FAILED_TO_ATTACH_TO_VIDEO:87, INVALID_SERVER_CERTIFICATE:88, FAILED_TO_CREATE_SESSION:89, FAILED_TO_GENERATE_LICENSE_REQUEST:90, LICENSE_REQUEST_FAILED:91, 
LICENSE_RESPONSE_REJECTED:92, ENCRYPTED_CONTENT_WITHOUT_DRM_INFO:93, NO_LICENSE_SERVER_GIVEN:94, OFFLINE_SESSION_REMOVED:95, EXPIRED:96, CERTIFICATE_REQUEST_FAILED:97, NO_CONTENT_ID:98, FAILED_TO_PERSIST_SESSION:99, FAILED_TO_REMOVE_SESSION:100, INVALID_SESSION_STORAGE_IMPLEMENTATION:101, LOAD_INTERRUPTED:102, OPERATION_ABORTED:103, NO_VIDEO_ELEMENT:104, CANNOT_LOAD_SOURCE:105, INVALID_CONFIGURATION:106, INVALID_LICENSE:107, NO_ELEMENT:108, USER_ID_NOT_PROVIDED:109, KEY_LOAD_ERROR:110, TIZEN_INTERNAL_ERROR:111, 
CAF_INTERNAL_ERROR:112, INTERNAL_CAST_ERROR:113, CAST_API_NOT_READY:114, NO_RECEIVERS_AVAILABLE:115, ALREADY_CASTING:116, NO_CAST_SESSION:117, CONVIVA_SDK_NOT_LOADED:118, CONVIVA_INVALID_CONFIGURATION:119, CONVIVA_RUNTIME_ERROR:120, YOUBORA_SDK_MISSING:121, YOUBORA_INVALID_CONFIGURATION:122, VIMOND_INVALID_CONFIGURATION:123, VIMOND_SESSION_ERROR:124, IMA_SDK_MISSING:125, IMA_INVALID_CONFIGURATION:126, AD_ERROR:127, BROADPEAK_SDK_MISSING:128, BROADPEAK_SESSION_ERROR:129, FREEWHEEL_SDK_MISSING:130, 
FREEWHEEL_INVALID_CONFIGURATION:131};
/** @enum {number} */
clpp.Error.Severity = {RECOVERABLE:1, FATAL:2};
/**
 * @param {(EventTarget|null)} target
 * @constructor
 */
clpp.EventBus = function(target) {
};
/**
 * @return {undefined}
 */
clpp.EventBus.prototype.clear = function() {
};
/**
 * @param {string} name
 * @param {(EventListener|function(!Event): *|null)} callback
 * @return {boolean}
 */
clpp.EventBus.prototype.off = function(name, callback) {
};
/**
 * @param {string} name
 * @param {(EventListener|function(!Event): *|null)} callback
 * @param {(Object|null)=} opt_callbackScope
 * @return {(EventListener|function(!Event): *|null)}
 */
clpp.EventBus.prototype.on = function(name, callback, opt_callbackScope) {
};
/**
 * @param {string} name
 * @param {(EventListener|function(!Event): *|null)} callback
 * @param {(Object|null)=} opt_callbackScope
 * @return {(EventListener|function(!Event): *|null)}
 */
clpp.EventBus.prototype.one = function(name, callback, opt_callbackScope) {
};
/**
 * @param {(clpp.Event|null)} event
 * @return {undefined}
 */
clpp.EventBus.prototype.trigger = function(event) {
};
clpp.EventTarget;
/**
 * @param {(clpp.EventTarget|null)} delegate
 * @return {undefined}
 */
clpp.EventTarget.prototype.addDelegate = function(delegate) {
};
/**
 * @param {string} type
 * @param {(EventListener|function(!Event): *|null)} listener
 * @param {(AddEventListenerOptions|boolean)=} opt_options
 * @return {undefined}
 */
clpp.EventTarget.prototype.addEventListener = function(type, listener, opt_options) {
};
/**
 * @param {string} name
 * @param {(EventListener|function(!Event): *|null)} callback
 * @return {boolean}
 */
clpp.EventTarget.prototype.off = function(name, callback) {
};
/**
 * @param {string} name
 * @param {(EventListener|function(!Event): *|null)} callback
 * @param {(Object|null)=} opt_callbackScope
 * @return {(EventListener|function(!Event): *|null)}
 */
clpp.EventTarget.prototype.on = function(name, callback, opt_callbackScope) {
};
/**
 * @param {string} name
 * @param {(EventListener|function(!Event): *|null)} callback
 * @param {(Object|null)=} opt_callbackScope
 * @return {(EventListener|function(!Event): *|null)}
 */
clpp.EventTarget.prototype.one = function(name, callback, opt_callbackScope) {
};
/**
 * @param {(clpp.EventTarget|null)} delegate
 * @return {undefined}
 */
clpp.EventTarget.prototype.removeDelegate = function(delegate) {
};
/**
 * @param {string} type
 * @param {(EventListener|function(!Event): *|null)} listener
 * @param {(EventListenerOptions|boolean)=} opt_options
 * @return {undefined}
 */
clpp.EventTarget.prototype.removeEventListener = function(type, listener, opt_options) {
};
clpp.ManifestParser;
/**
 * @param {string} extension
 * @param {function(new:clpp.IManifestParser): ?} parserFactory
 * @return {undefined}
 */
clpp.ManifestParser.registerParserByExtension = function(extension, parserFactory) {
};
/**
 * @param {string} mimeType
 * @param {function(new:clpp.IManifestParser): ?} parserFactory
 * @return {undefined}
 */
clpp.ManifestParser.registerParserByMime = function(mimeType, parserFactory) {
};
/**
 * @param {(HTMLMediaElement|null|string)} element
 * @param {{abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), conviva: (undefined|{customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), enableAdInsights: boolean, serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, offlineId: (string|undefined), preferredDrmSystem: (string|undefined)}), enableEnhancedSubtitleManager: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: boolean, availabilityWindowOverride: number, clockSyncUri: string, ignoreDrmInfo: boolean, liveRefreshPeriod: (number|undefined), xlinkFailGracefully: boolean}, muted: (boolean|undefined), preferredAudioChannelCount: number, preferredAudioLanguage: string, preferredAudioRole: string, preferredTextLanguage: string, preferredTextRole: string, remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, source: (Array<(string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string})>|null|string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string}), startTime: (null|number), streaming: {alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, durationBackoff: number, failureCallback: (function(!clpp.Error): ?|undefined), forceNativeTS: boolean, ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, rebufferingGoal: number, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), youbora: (Object<string,*>|null|undefined)}=} opt_configuration
 * @param {{containerEl: (Element|null), containerTag: string, controls: boolean, crossorigin: string, css: {container: string, fill: string, hidden: string}, disableContainer: boolean, mediaTag: string, moveCssToContainer: boolean}=} opt_viewConfiguration
 * @extends {clpp.EventTarget}
 * @implements {EventTarget}
 * @implements {clpp.IPlayer}
 * @constructor
 */
clpp.Player = function(element, opt_configuration, opt_viewConfiguration) {
};
/** @enum {number} */
clpp.Player.State = {IDLE:1, PREPARING:2, BUFFERING:3, PLAYING:4, PAUSED:5, ENDED:6, ERROR:7, UNSET:8};
/**
 * @return {!Promise}
 */
clpp.Player.prototype.destroy = function() {
};
/**
 * @return {(clpp.ads.IAdsManager|null)}
 */
clpp.Player.prototype.getAdsManager = function() {
};
/**
 * @param {string=} opt_type
 * @return {!clpp.BufferInfo}
 */
clpp.Player.prototype.getBufferInfo = function(opt_type) {
};
/**
 * @return {{abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), conviva: (undefined|{customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), enableAdInsights: boolean, serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, offlineId: (string|undefined), preferredDrmSystem: (string|undefined)}), enableEnhancedSubtitleManager: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: boolean, availabilityWindowOverride: number, clockSyncUri: string, ignoreDrmInfo: boolean, liveRefreshPeriod: (number|undefined), xlinkFailGracefully: boolean}, muted: (boolean|undefined), preferredAudioChannelCount: number, preferredAudioLanguage: string, preferredAudioRole: string, preferredTextLanguage: string, preferredTextRole: string, remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, source: (Array<(string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string})>|null|string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string}), startTime: (null|number), streaming: {alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, durationBackoff: number, failureCallback: (function(!clpp.Error): ?|undefined), forceNativeTS: boolean, ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, rebufferingGoal: number, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), youbora: (Object<string,*>|null|undefined)}}
 */
clpp.Player.prototype.getConfiguration = function() {
};
/**
 * @return {(null|{audioRobustness: string, distinctiveIdentifierRequired: boolean, initData: (Array<{initData: !Uint8Array, initDataType: string, keyId: (null|string), periodId: (null|string)}>|null), keyIds: (Array<string>|null), keySystem: string, licenseServerUri: string, periodId: (null|string), persistentStateRequired: boolean, serverCertificate: (Uint8Array|null), videoRobustness: string})}
 */
clpp.Player.prototype.getDrmInfo = function() {
};
/**
 * @return {number}
 */
clpp.Player.prototype.getDuration = function() {
};
/**
 * @return {(null|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string})}
 */
clpp.Player.prototype.getLoadedSource = function() {
};
/**
 * @return {!clpp.net.NetworkEngine}
 */
clpp.Player.prototype.getNetworkEngine = function() {
};
/**
 * @return {(null|number)}
 */
clpp.Player.prototype.getPlaybackRate = function() {
};
/**
 * @param {string} id
 * @return {(clpp.extern.PlayerPlugin|null)}
 */
clpp.Player.prototype.getPlugin = function(id) {
};
/**
 * @return {number}
 */
clpp.Player.prototype.getPosition = function() {
};
/**
 * @return {number}
 */
clpp.Player.prototype.getPresentationStartTime = function() {
};
/**
 * @return {{end: number, start: number}}
 */
clpp.Player.prototype.getSeekRange = function() {
};
/**
 * @return {(Array<{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string}>|null)}
 */
clpp.Player.prototype.getSources = function() {
};
/**
 * @return {number}
 */
clpp.Player.prototype.getState = function() {
};
/**
 * @return {(null|{bufferingTime: number, corruptedFrames: number, decodedFrames: number, droppedFrames: number, estimatedBandwidth: number, height: number, loadLatency: number, pauseTime: number, playTime: number, stateHistory: !Array<{duration: number, state: number, timestamp: number}>, streamBandwidth: number, switchHistory: !Array<{bandwidth: (null|number), fromAdaptation: boolean, height: (null|number), id: string, timestamp: number, trackId: string, type: string, width: (null|number)}>, width: number})}
 */
clpp.Player.prototype.getStats = function() {
};
/**
 * @return {(clpp.PlayerSurface|null)}
 */
clpp.Player.prototype.getSurface = function() {
};
/**
 * @return {(clpp.ITextDisplayer|null)}
 */
clpp.Player.prototype.getTextDisplayer = function() {
};
/**
 * @return {!Array<{endTime: number, eventElement: (Element|null), id: string, schemeIdUri: string, startTime: number, type: string, value: string}>}
 */
clpp.Player.prototype.getTimelineCues = function() {
};
/**
 * @return {(clpp.TrackManager|null)}
 */
clpp.Player.prototype.getTrackManager = function() {
};
/**
 * @return {(null|number)}
 */
clpp.Player.prototype.getVolume = function() {
};
/**
 * @return {boolean}
 */
clpp.Player.prototype.isEnded = function() {
};
/**
 * @return {boolean}
 */
clpp.Player.prototype.isLive = function() {
};
/**
 * @return {(boolean|null)}
 */
clpp.Player.prototype.isMuted = function() {
};
/**
 * @return {boolean}
 */
clpp.Player.prototype.isPaused = function() {
};
/**
 * @param {(Array<(string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string})>|null|string|{abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), conviva: (undefined|{customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), enableAdInsights: boolean, serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, offlineId: (string|undefined), preferredDrmSystem: (string|undefined)}), enableEnhancedSubtitleManager: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: boolean, availabilityWindowOverride: number, clockSyncUri: string, ignoreDrmInfo: boolean, liveRefreshPeriod: (number|undefined), xlinkFailGracefully: boolean}, muted: (boolean|undefined), preferredAudioChannelCount: number, preferredAudioLanguage: string, preferredAudioRole: string, preferredTextLanguage: string, preferredTextRole: string, remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, source: (Array<(string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string})>|null|string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string}), startTime: (null|number), streaming: {alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, durationBackoff: number, failureCallback: (function(!clpp.Error): ?|undefined), forceNativeTS: boolean, ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, rebufferingGoal: number, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), youbora: (Object<string,*>|null|undefined)}|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string})} configuration
 * @return {!Promise}
 */
clpp.Player.prototype.load = function(configuration) {
};
/**
 * @return {string}
 */
clpp.Player.prototype.namespace = function() {
};
/**
 * @return {!Promise}
 */
clpp.Player.prototype.pause = function() {
};
/**
 * @return {!Promise}
 */
clpp.Player.prototype.play = function() {
};
/**
 * @return {!Promise}
 */
clpp.Player.prototype.release = function() {
};
/**
 * @param {function(new:clpp.IComponent): ?} component
 * @return {boolean}
 */
clpp.Player.prototype.remove = function(component) {
};
/**
 * @return {?}
 */
clpp.Player.prototype.resetAbr = function() {
};
/**
 * @param {number} time
 * @return {(Promise<undefined>|null)}
 */
clpp.Player.prototype.seek = function(time) {
};
/**
 * @param {boolean} mustMute
 * @return {?}
 */
clpp.Player.prototype.setMuted = function(mustMute) {
};
/**
 * @param {!clpp.net.NetworkEngine} engine
 * @return {?}
 */
clpp.Player.prototype.setNetworkEngine = function(engine) {
};
/**
 * @param {number} rate
 * @return {?}
 */
clpp.Player.prototype.setPlaybackRate = function(rate) {
};
/**
 * @param {number} volume
 * @return {?}
 */
clpp.Player.prototype.setVolume = function(volume) {
};
/**
 * @param {function(new:clpp.IComponent): ?} component
 * @return {undefined}
 */
clpp.Player.prototype.use = function(component) {
};
/**
 * @param {(clpp.extern.PlayerPluginFactory|null)} factory
 * @return {undefined}
 */
clpp.Player.registerPlugin = function(factory) {
};
clpp.PlayerFactory;
/**
 * @param {{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string}} source
 * @return {boolean}
 */
clpp.PlayerFactory.prototype.canPlay = function(source) {
};
/**
 * @return {(clpp.IPlayer|null)}
 */
clpp.PlayerFactory.prototype.create = function() {
};
clpp.PlayerSurface;
/**
 * @param {(Element|null)} element
 * @param {boolean=} opt_fill
 * @param {boolean=} opt_prepend
 * @return {undefined}
 */
clpp.PlayerSurface.prototype.addContainerElement = function(element, opt_fill, opt_prepend) {
};
/**
 * @return {(Element|null)}
 */
clpp.PlayerSurface.prototype.getCastElement = function() {
};
/**
 * @return {(Element|null)}
 */
clpp.PlayerSurface.prototype.getContainer = function() {
};
/**
 * @param {boolean=} opt_create
 * @return {(HTMLMediaElement|null)}
 */
clpp.PlayerSurface.prototype.getMedia = function(opt_create) {
};
/**
 * @param {(Element|null)} element
 * @return {undefined}
 */
clpp.PlayerSurface.prototype.removeContainerElement = function(element) {
};
/**
 * @param {(clpp.Player|null)} player
 * @param {function({configuration: {abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), conviva: (undefined|{customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), enableAdInsights: boolean, serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, offlineId: (string|undefined), preferredDrmSystem: (string|undefined)}), enableEnhancedSubtitleManager: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: boolean, availabilityWindowOverride: number, clockSyncUri: string, ignoreDrmInfo: boolean, liveRefreshPeriod: (number|undefined), xlinkFailGracefully: boolean}, muted: (boolean|undefined), preferredAudioChannelCount: number, preferredAudioLanguage: string, preferredAudioRole: string, preferredTextLanguage: string, preferredTextRole: string, remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, source: (Array<(string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string})>|null|string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string}), startTime: (null|number), streaming: {alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, durationBackoff: number, failureCallback: (function(!clpp.Error): ?|undefined), forceNativeTS: boolean, ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, rebufferingGoal: number, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), youbora: (Object<string,*>|null|undefined)}, description: (string|undefined), image: (string|undefined), title: (string|undefined)}): (Promise|null)=} onItemWillChange
 * @extends {clpp.EventTarget}
 * @implements {EventTarget}
 * @constructor
 */
clpp.Playlist = function(player, onItemWillChange) {
};
/**
 * @param {{configuration: {abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), conviva: (undefined|{customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), enableAdInsights: boolean, serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, offlineId: (string|undefined), preferredDrmSystem: (string|undefined)}), enableEnhancedSubtitleManager: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: boolean, availabilityWindowOverride: number, clockSyncUri: string, ignoreDrmInfo: boolean, liveRefreshPeriod: (number|undefined), xlinkFailGracefully: boolean}, muted: (boolean|undefined), preferredAudioChannelCount: number, preferredAudioLanguage: string, preferredAudioRole: string, preferredTextLanguage: string, preferredTextRole: string, remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, source: (Array<(string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string})>|null|string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string}), startTime: (null|number), streaming: {alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, durationBackoff: number, failureCallback: (function(!clpp.Error): ?|undefined), forceNativeTS: boolean, ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, rebufferingGoal: number, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), youbora: (Object<string,*>|null|undefined)}, description: (string|undefined), image: (string|undefined), title: (string|undefined)}} item
 * @return {undefined}
 */
clpp.Playlist.prototype.append = function(item) {
};
/**
 * @return {undefined}
 */
clpp.Playlist.prototype.clear = function() {
};
/**
 * @return {(null|{configuration: {abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), conviva: (undefined|{customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), enableAdInsights: boolean, serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, offlineId: (string|undefined), preferredDrmSystem: (string|undefined)}), enableEnhancedSubtitleManager: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: boolean, availabilityWindowOverride: number, clockSyncUri: string, ignoreDrmInfo: boolean, liveRefreshPeriod: (number|undefined), xlinkFailGracefully: boolean}, muted: (boolean|undefined), preferredAudioChannelCount: number, preferredAudioLanguage: string, preferredAudioRole: string, preferredTextLanguage: string, preferredTextRole: string, remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, source: (Array<(string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string})>|null|string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string}), startTime: (null|number), streaming: {alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, durationBackoff: number, failureCallback: (function(!clpp.Error): ?|undefined), forceNativeTS: boolean, ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, rebufferingGoal: number, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), youbora: (Object<string,*>|null|undefined)}, description: (string|undefined), image: (string|undefined), title: (string|undefined)})}
 */
clpp.Playlist.prototype.getCurrent = function() {
};
/**
 * @return {number}
 */
clpp.Playlist.prototype.getPosition = function() {
};
/**
 * @return {(Array<{configuration: {abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), conviva: (undefined|{customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), enableAdInsights: boolean, serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, offlineId: (string|undefined), preferredDrmSystem: (string|undefined)}), enableEnhancedSubtitleManager: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: boolean, availabilityWindowOverride: number, clockSyncUri: string, ignoreDrmInfo: boolean, liveRefreshPeriod: (number|undefined), xlinkFailGracefully: boolean}, muted: (boolean|undefined), preferredAudioChannelCount: number, preferredAudioLanguage: string, preferredAudioRole: string, preferredTextLanguage: string, preferredTextRole: string, remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, source: (Array<(string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string})>|null|string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string}), startTime: (null|number), streaming: {alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, durationBackoff: number, failureCallback: (function(!clpp.Error): ?|undefined), forceNativeTS: boolean, ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, rebufferingGoal: number, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), youbora: (Object<string,*>|null|undefined)}, description: (string|undefined), image: (string|undefined), title: (string|undefined)}>|null)}
 */
clpp.Playlist.prototype.getQueue = function() {
};
/**
 * @return {(null|{configuration: {abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), conviva: (undefined|{customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), enableAdInsights: boolean, serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, offlineId: (string|undefined), preferredDrmSystem: (string|undefined)}), enableEnhancedSubtitleManager: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: boolean, availabilityWindowOverride: number, clockSyncUri: string, ignoreDrmInfo: boolean, liveRefreshPeriod: (number|undefined), xlinkFailGracefully: boolean}, muted: (boolean|undefined), preferredAudioChannelCount: number, preferredAudioLanguage: string, preferredAudioRole: string, preferredTextLanguage: string, preferredTextRole: string, remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, source: (Array<(string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string})>|null|string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string}), startTime: (null|number), streaming: {alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, durationBackoff: number, failureCallback: (function(!clpp.Error): ?|undefined), forceNativeTS: boolean, ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, rebufferingGoal: number, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), youbora: (Object<string,*>|null|undefined)}, description: (string|undefined), image: (string|undefined), title: (string|undefined)})}
 */
clpp.Playlist.prototype.getUpcoming = function() {
};
/**
 * @param {number} position
 * @param {boolean=} reload
 * @return {!Promise<undefined>}
 */
clpp.Playlist.prototype.goTo = function(position, reload) {
};
/**
 * @param {{configuration: {abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), conviva: (undefined|{customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), enableAdInsights: boolean, serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, offlineId: (string|undefined), preferredDrmSystem: (string|undefined)}), enableEnhancedSubtitleManager: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: boolean, availabilityWindowOverride: number, clockSyncUri: string, ignoreDrmInfo: boolean, liveRefreshPeriod: (number|undefined), xlinkFailGracefully: boolean}, muted: (boolean|undefined), preferredAudioChannelCount: number, preferredAudioLanguage: string, preferredAudioRole: string, preferredTextLanguage: string, preferredTextRole: string, remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, source: (Array<(string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string})>|null|string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string}), startTime: (null|number), streaming: {alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, durationBackoff: number, failureCallback: (function(!clpp.Error): ?|undefined), forceNativeTS: boolean, ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, rebufferingGoal: number, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), youbora: (Object<string,*>|null|undefined)}, description: (string|undefined), image: (string|undefined), title: (string|undefined)}} item
 * @param {number} index
 * @return {undefined}
 */
clpp.Playlist.prototype.insert = function(item, index) {
};
/**
 * @return {boolean}
 */
clpp.Playlist.prototype.isStarted = function() {
};
/**
 * @return {!Promise<undefined>}
 */
clpp.Playlist.prototype.next = function() {
};
/**
 * @return {undefined}
 */
clpp.Playlist.prototype.onEnded = function() {
};
/**
 * @return {!Promise<undefined>}
 */
clpp.Playlist.prototype.previous = function() {
};
/**
 * @param {number} index
 * @return {undefined}
 */
clpp.Playlist.prototype.remove = function(index) {
};
/**
 * @return {undefined}
 */
clpp.Playlist.prototype.start = function() {
};
/**
 * @return {undefined}
 */
clpp.Playlist.prototype.stop = function() {
};
/**
 * @param {string} id
 * @param {!clpp.Track} track
 * @implements {{bandwidth: (null|number), codec: (null|string), drmInfo: (null|string), height: (null|number), id: string, originalId: (null|string), track: {channelsCount: (null|number), frameRate: (null|number), id: string, kind: (null|string), label: (null|string), language: (null|string), mimeType: (null|string), renditions: !Array<*>, roles: !Array<string>, src: (null|string), type: string}, width: (null|number)}}
 * @constructor
 */
clpp.Rendition = function(id, track) {
};
/** @enum {string} */
clpp.TimelineCueType = {SCTE35:1, UNKNOWN:2};
/**
 * @param {string} id
 * @param {string} type
 * @implements {{channelsCount: (null|number), frameRate: (null|number), id: string, kind: (null|string), label: (null|string), language: (null|string), mimeType: (null|string), renditions: !Array<*>, roles: !Array<string>, src: (null|string), type: string}}
 * @constructor
 */
clpp.Track = function(id, type) {
};
/** @enum {string} */
clpp.Track.Type = {VIDEO:1, AUDIO:2, TEXT:3, METADATA:4};
/**
 * @return {string}
 */
clpp.Track.prototype.toString = function() {
};
/**
 * @implements {clpp.IReleasable}
 * @constructor
 */
clpp.TrackManager = function() {
};
/**
 * @param {{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}} track
 * @return {(Promise<undefined>|null)}
 */
clpp.TrackManager.prototype.addTextTrack = function(track) {
};
/**
 * @param {(Object|null)} filter
 * @return {(clpp.Rendition|null|undefined)}
 */
clpp.TrackManager.prototype.findAudioRendition = function(filter) {
};
/**
 * @param {(Object|null)} filter
 * @return {(clpp.Track|null|undefined)}
 */
clpp.TrackManager.prototype.findAudioTrack = function(filter) {
};
/**
 * @param {(Object|null)} filter
 * @return {(clpp.Rendition|null|undefined)}
 */
clpp.TrackManager.prototype.findTextRendition = function(filter) {
};
/**
 * @param {(Object|null)} filter
 * @return {(clpp.Track|null|undefined)}
 */
clpp.TrackManager.prototype.findTextTrack = function(filter) {
};
/**
 * @param {(Object|null)} filter
 * @return {(clpp.Rendition|null|undefined)}
 */
clpp.TrackManager.prototype.findVideoRendition = function(filter) {
};
/**
 * @param {(Object|null)} filter
 * @return {(clpp.Track|null|undefined)}
 */
clpp.TrackManager.prototype.findVideoTrack = function(filter) {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.TrackManager.prototype.getAudioRendition = function() {
};
/**
 * @return {(clpp.Track|null)}
 */
clpp.TrackManager.prototype.getAudioTrack = function() {
};
/**
 * @return {!Array<clpp.Track>}
 */
clpp.TrackManager.prototype.getAudioTracks = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.TrackManager.prototype.getLoadingAudioRendition = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.TrackManager.prototype.getLoadingTextRendition = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.TrackManager.prototype.getLoadingVideoRendition = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.TrackManager.prototype.getTextRendition = function() {
};
/**
 * @return {(clpp.Track|null)}
 */
clpp.TrackManager.prototype.getTextTrack = function() {
};
/**
 * @return {!Array<clpp.Track>}
 */
clpp.TrackManager.prototype.getTextTracks = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.TrackManager.prototype.getVideoRendition = function() {
};
/**
 * @return {(clpp.Track|null)}
 */
clpp.TrackManager.prototype.getVideoTrack = function() {
};
/**
 * @return {!Array<clpp.Track>}
 */
clpp.TrackManager.prototype.getVideoTracks = function() {
};
/**
 * @return {boolean}
 */
clpp.TrackManager.prototype.isAbrEnabled = function() {
};
/**
 * @param {(clpp.Rendition|null)} rendition
 * @param {boolean=} clearBuffer
 * @return {undefined}
 */
clpp.TrackManager.prototype.setAudioRendition = function(rendition, clearBuffer) {
};
/**
 * @param {(clpp.Track|null)} track
 * @return {undefined}
 */
clpp.TrackManager.prototype.setAudioTrack = function(track) {
};
/**
 * @param {(clpp.Rendition|null)} rendition
 * @param {boolean=} clearBuffer
 * @return {undefined}
 */
clpp.TrackManager.prototype.setTextRendition = function(rendition, clearBuffer) {
};
/**
 * @param {(clpp.Track|null)} track
 * @return {undefined}
 */
clpp.TrackManager.prototype.setTextTrack = function(track) {
};
/**
 * @param {(clpp.Rendition|null)} rendition
 * @param {boolean=} clearBuffer
 * @return {undefined}
 */
clpp.TrackManager.prototype.setVideoRendition = function(rendition, clearBuffer) {
};
/**
 * @param {(clpp.Track|null)} track
 * @return {undefined}
 */
clpp.TrackManager.prototype.setVideoTrack = function(track) {
};
/** @enum {string} */
clpp.Type = {DASH:1, HLS:2, SMOOTH_STREAMING:3, MP4:4};
/**
 * @const
 * @suppress {const,duplicate}
 */
clpp.adobe = {};
/**
 * @extends {clpp.plugin.AbstractPlugin}
 * @implements {clpp.extern.PlayerPlugin}
 * @constructor
 */
clpp.adobe.AdobeAnalyticsPlugin = function() {
};
clpp.adobe.AdobeAnalyticsPlugin.Id;
/**
 * @const
 * @suppress {const,duplicate}
 */
clpp.ads = {};
/** @enum {number} */
clpp.ads.ErrorType = {LOAD:1, PLAY:2, OTHER:3};
/**
 * @interface
 */
clpp.ads.IAd = function() {
};
/**
 * @return {string}
 */
clpp.ads.IAd.prototype.getAdManagerName = function() {
};
/**
 * @return {string}
 */
clpp.ads.IAd.prototype.getAdManagerVersion = function() {
};
/**
 * @return {string}
 */
clpp.ads.IAd.prototype.getAdSystem = function() {
};
/**
 * @return {string}
 */
clpp.ads.IAd.prototype.getAdvertiserName = function() {
};
/**
 * @return {(null|string)}
 */
clpp.ads.IAd.prototype.getApiFramework = function() {
};
/**
 * @return {(null|string)}
 */
clpp.ads.IAd.prototype.getClickThroughUrl = function() {
};
/**
 * @return {string}
 */
clpp.ads.IAd.prototype.getCreativeId = function() {
};
/**
 * @return {number}
 */
clpp.ads.IAd.prototype.getDuration = function() {
};
/**
 * @return {string}
 */
clpp.ads.IAd.prototype.getId = function() {
};
/**
 * @return {number}
 */
clpp.ads.IAd.prototype.getMediaBitrate = function() {
};
/**
 * @return {number}
 */
clpp.ads.IAd.prototype.getMediaHeight = function() {
};
/**
 * @return {(null|string)}
 */
clpp.ads.IAd.prototype.getMediaUrl = function() {
};
/**
 * @return {number}
 */
clpp.ads.IAd.prototype.getMediaWidth = function() {
};
/**
 * @return {number}
 */
clpp.ads.IAd.prototype.getPodIndex = function() {
};
/**
 * @return {number}
 */
clpp.ads.IAd.prototype.getPodTimeOffset = function() {
};
/**
 * @return {number}
 */
clpp.ads.IAd.prototype.getPodType = function() {
};
/**
 * @return {number}
 */
clpp.ads.IAd.prototype.getPositionInSequence = function() {
};
/**
 * @return {number}
 */
clpp.ads.IAd.prototype.getSequenceLength = function() {
};
/**
 * @return {number}
 */
clpp.ads.IAd.prototype.getSkipTimeOffset = function() {
};
/**
 * @return {number}
 */
clpp.ads.IAd.prototype.getTechnology = function() {
};
/**
 * @return {string}
 */
clpp.ads.IAd.prototype.getTitle = function() {
};
/**
 * @return {!Array<string>}
 */
clpp.ads.IAd.prototype.getWrapperAdIds = function() {
};
/**
 * @return {!Array<string>}
 */
clpp.ads.IAd.prototype.getWrapperAdSystems = function() {
};
/**
 * @return {!Array<string>}
 */
clpp.ads.IAd.prototype.getWrapperCreativeIds = function() {
};
/**
 * @return {boolean}
 */
clpp.ads.IAd.prototype.isBumper = function() {
};
/**
 * @interface
 */
clpp.ads.IAdsManager = function() {
};
/**
 * @return {number}
 */
clpp.ads.IAdsManager.prototype.getPosition = function() {
};
/**
 * @return {number}
 */
clpp.ads.IAdsManager.prototype.getVolume = function() {
};
/**
 * @return {undefined}
 */
clpp.ads.IAdsManager.prototype.pause = function() {
};
/**
 * @return {undefined}
 */
clpp.ads.IAdsManager.prototype.resume = function() {
};
/**
 * @param {number} volume
 * @return {undefined}
 */
clpp.ads.IAdsManager.prototype.setVolume = function(volume) {
};
/**
 * @return {undefined}
 */
clpp.ads.IAdsManager.prototype.skip = function() {
};
/**
 * @interface
 */
clpp.ads.IAdsManagerFactory = function() {
};
/**
 * @param {(clpp.Player|null)} player
 * @return {(clpp.ads.IAdsManager|null)}
 */
clpp.ads.IAdsManagerFactory.prototype.create = function(player) {
};
/**
 * @param {(clpp.Player|null)} player
 * @param {{abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), conviva: (undefined|{customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), enableAdInsights: boolean, serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, offlineId: (string|undefined), preferredDrmSystem: (string|undefined)}), enableEnhancedSubtitleManager: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: boolean, availabilityWindowOverride: number, clockSyncUri: string, ignoreDrmInfo: boolean, liveRefreshPeriod: (number|undefined), xlinkFailGracefully: boolean}, muted: (boolean|undefined), preferredAudioChannelCount: number, preferredAudioLanguage: string, preferredAudioRole: string, preferredTextLanguage: string, preferredTextRole: string, remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, source: (Array<(string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string})>|null|string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string}), startTime: (null|number), streaming: {alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, durationBackoff: number, failureCallback: (function(!clpp.Error): ?|undefined), forceNativeTS: boolean, ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, rebufferingGoal: number, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), youbora: (Object<string,*>|null|undefined)}} config
 * @return {boolean}
 */
clpp.ads.IAdsManagerFactory.prototype.isSupported = function(player, config) {
};
/**
 * @return {string}
 */
clpp.ads.IAdsManagerFactory.prototype.name = function() {
};
/**
 * @interface
 */
clpp.ads.IAdsTimeline = function() {
};
/**
 * @return {(Array<number>|null)}
 */
clpp.ads.IAdsTimeline.prototype.getCuePoints = function() {
};
/**
 * @return {boolean}
 */
clpp.ads.IAdsTimeline.prototype.hasPostroll = function() {
};
/**
 * @return {boolean}
 */
clpp.ads.IAdsTimeline.prototype.hasPreroll = function() {
};
clpp.ads.NopAdsManager;
/**
 * @return {undefined}
 */
clpp.ads.NopAdsManager.prototype.dispose = function() {
};
/**
 * @return {?}
 */
clpp.ads.NopAdsManager.prototype.getPosition = function() {
};
/**
 * @return {?}
 */
clpp.ads.NopAdsManager.prototype.getVolume = function() {
};
/**
 * @return {?}
 */
clpp.ads.NopAdsManager.prototype.load = function() {
};
/**
 * @return {undefined}
 */
clpp.ads.NopAdsManager.prototype.pause = function() {
};
/**
 * @return {undefined}
 */
clpp.ads.NopAdsManager.prototype.resume = function() {
};
/**
 * @param {?} volume
 * @return {undefined}
 */
clpp.ads.NopAdsManager.prototype.setVolume = function(volume) {
};
/**
 * @return {undefined}
 */
clpp.ads.NopAdsManager.prototype.skip = function() {
};
/**
 * @param {?} delegate
 * @return {?}
 */
clpp.ads.NopAdsManager.prototype.start = function(delegate) {
};
clpp.ads.NopAdsManagerFactory;
/**
 * @param {?} player
 * @return {?}
 */
clpp.ads.NopAdsManagerFactory.prototype.create = function(player) {
};
/**
 * @param {?} player
 * @param {?} configuration
 * @return {?}
 */
clpp.ads.NopAdsManagerFactory.prototype.isSupported = function(player, configuration) {
};
/**
 * @return {?}
 */
clpp.ads.NopAdsManagerFactory.prototype.name = function() {
};
/** @enum {number} */
clpp.ads.PodType = {PREROLL:1, MIDROLL:2, POSTROLL:3};
/** @enum {number} */
clpp.ads.Technology = {CLIENT_SIDE:1, SERVER_SIDE:2};
/**
 * @const
 * @suppress {const,duplicate}
 */
clpp.airplay = {};
/**
 * @extends {clpp.plugin.AbstractPlugin}
 * @implements {clpp.extern.PlayerPlugin}
 * @constructor
 */
clpp.airplay.AirPlayPlugin = function() {
};
clpp.airplay.AirPlayPlugin.Id;
/**
 * @return {boolean}
 */
clpp.airplay.AirPlayPlugin.prototype.canCast = function() {
};
/**
 * @return {boolean}
 */
clpp.airplay.AirPlayPlugin.prototype.isCasting = function() {
};
/**
 * @return {undefined}
 */
clpp.airplay.AirPlayPlugin.prototype.showCastMenu = function() {
};
/**
 * @const
 * @suppress {const,duplicate}
 */
clpp.broadpeak = {};
/**
 * @extends {clpp.plugin.AbstractPlugin}
 * @implements {clpp.extern.PlayerPlugin}
 * @constructor
 */
clpp.broadpeak.BroadpeakPlugin = function() {
};
clpp.broadpeak.BroadpeakPlugin.Id;
/**
 * @return {boolean}
 */
clpp.broadpeak.BroadpeakPlugin.isSdkMissing = function() {
};
/**
 * @const
 * @suppress {const,duplicate}
 */
clpp.cast = {};
/**
 * @param {(clpp.Player|null)} player
 * @param {string} receiverAppId
 * @param {function(number, {abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), conviva: (undefined|{customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), enableAdInsights: boolean, serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, offlineId: (string|undefined), preferredDrmSystem: (string|undefined)}), enableEnhancedSubtitleManager: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: boolean, availabilityWindowOverride: number, clockSyncUri: string, ignoreDrmInfo: boolean, liveRefreshPeriod: (number|undefined), xlinkFailGracefully: boolean}, muted: (boolean|undefined), preferredAudioChannelCount: number, preferredAudioLanguage: string, preferredAudioRole: string, preferredTextLanguage: string, preferredTextRole: string, remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, source: (Array<(string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string})>|null|string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string}), startTime: (null|number), streaming: {alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, durationBackoff: number, failureCallback: (function(!clpp.Error): ?|undefined), forceNativeTS: boolean, ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, rebufferingGoal: number, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), youbora: (Object<string,*>|null|undefined)}): ?=} onResumeLocal
 * @extends {clpp.EventTarget}
 * @implements {EventTarget}
 * @implements {clpp.IDestroyable}
 * @constructor
 */
clpp.cast.CastProxy = function(player, receiverAppId, onResumeLocal) {
};
/**
 * @param {function(*): ?} listener
 * @return {undefined}
 */
clpp.cast.CastProxy.prototype.addMessageListener = function(listener) {
};
/**
 * @return {boolean}
 */
clpp.cast.CastProxy.prototype.canCast = function() {
};
/**
 * @return {!Promise}
 */
clpp.cast.CastProxy.prototype.cast = function() {
};
/**
 * @param {string} newAppId
 * @return {(Promise|null)}
 */
clpp.cast.CastProxy.prototype.changeReceiverId = function(newAppId) {
};
/**
 * @return {!Promise}
 */
clpp.cast.CastProxy.prototype.destroy = function() {
};
/**
 * @return {undefined}
 */
clpp.cast.CastProxy.prototype.forceDisconnect = function() {
};
/**
 * @return {string}
 */
clpp.cast.CastProxy.prototype.getReceiverName = function() {
};
/**
 * @return {boolean}
 */
clpp.cast.CastProxy.prototype.isCasting = function() {
};
/**
 * @param {function(*): ?} listener
 * @return {undefined}
 */
clpp.cast.CastProxy.prototype.removeMessageListener = function(listener) {
};
/**
 * @param {(Object|string)} message
 * @return {(Promise|null)}
 */
clpp.cast.CastProxy.prototype.sendMessage = function(message) {
};
clpp.cast.CastSender;
/**
 * @return {!clpp.net.NetworkEngine}
 */
clpp.cast.CastSender.prototype.getNetworkEngine = function() {
};
/**
 * @return {(clpp.ITextDisplayer|null)}
 */
clpp.cast.CastSender.prototype.getTextDisplayer = function() {
};
/**
 * @param {!clpp.net.NetworkEngine} engine
 * @return {?}
 */
clpp.cast.CastSender.prototype.setNetworkEngine = function(engine) {
};
clpp.cast.Player;
/**
 * @return {!clpp.net.NetworkEngine}
 */
clpp.cast.Player.prototype.getNetworkEngine = function() {
};
/**
 * @return {(clpp.ITextDisplayer|null)}
 */
clpp.cast.Player.prototype.getTextDisplayer = function() {
};
/**
 * @param {!clpp.net.NetworkEngine} engine
 * @return {?}
 */
clpp.cast.Player.prototype.setNetworkEngine = function(engine) {
};
/**
 * @constructor
 */
clpp.cast.Receiver = function() {
};
/**
 * @return {!clpp.cast.Receiver}
 * @this {(typeof clpp.cast.Receiver)}
 */
clpp.cast.Receiver.getInstance = function() {
};
/**
 * @param {function(*): ?} listener
 * @return {undefined}
 */
clpp.cast.Receiver.prototype.addMessageListener = function(listener) {
};
/**
 * @param {(clpp.Player|null)} player
 * @return {undefined}
 */
clpp.cast.Receiver.prototype.init = function(player) {
};
/**
 * @return {boolean}
 */
clpp.cast.Receiver.prototype.isApiReady = function() {
};
/**
 * @param {string} type
 * @param {function(!cast.framework.system.Event): ?} handler
 * @return {undefined}
 */
clpp.cast.Receiver.prototype.off = function(type, handler) {
};
/**
 * @param {string} type
 * @param {function(!cast.framework.system.Event): ?} handler
 * @return {undefined}
 */
clpp.cast.Receiver.prototype.on = function(type, handler) {
};
/**
 * @param {function(*): ?} listener
 * @return {undefined}
 */
clpp.cast.Receiver.prototype.removeMessageListener = function(listener) {
};
/**
 * @param {*} message
 * @param {string=} senderId
 * @return {undefined}
 */
clpp.cast.Receiver.prototype.sendMessage = function(message, senderId) {
};
/**
 * @return {undefined}
 */
clpp.cast.Receiver.prototype.start = function() {
};
/**
 * @return {undefined}
 */
clpp.cast.Receiver.prototype.stop = function() {
};
clpp.cast.SenderTrackManager;
/**
 * @param {{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}} track
 * @return {(Promise<undefined>|null)}
 */
clpp.cast.SenderTrackManager.prototype.addTextTrack = function(track) {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.cast.SenderTrackManager.prototype.getAudioRendition = function() {
};
/**
 * @return {(clpp.Track|null)}
 */
clpp.cast.SenderTrackManager.prototype.getAudioTrack = function() {
};
/**
 * @return {!Array<clpp.Track>}
 */
clpp.cast.SenderTrackManager.prototype.getAudioTracks = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.cast.SenderTrackManager.prototype.getLoadingAudioRendition = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.cast.SenderTrackManager.prototype.getLoadingTextRendition = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.cast.SenderTrackManager.prototype.getLoadingVideoRendition = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.cast.SenderTrackManager.prototype.getTextRendition = function() {
};
/**
 * @return {(clpp.Track|null)}
 */
clpp.cast.SenderTrackManager.prototype.getTextTrack = function() {
};
/**
 * @return {!Array<clpp.Track>}
 */
clpp.cast.SenderTrackManager.prototype.getTextTracks = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.cast.SenderTrackManager.prototype.getVideoRendition = function() {
};
/**
 * @return {(clpp.Track|null)}
 */
clpp.cast.SenderTrackManager.prototype.getVideoTrack = function() {
};
/**
 * @return {!Array<clpp.Track>}
 */
clpp.cast.SenderTrackManager.prototype.getVideoTracks = function() {
};
/**
 * @return {boolean}
 */
clpp.cast.SenderTrackManager.prototype.isAbrEnabled = function() {
};
/**
 * @param {(clpp.Rendition|null)} rendition
 * @param {boolean=} clearBuffer
 * @return {undefined}
 */
clpp.cast.SenderTrackManager.prototype.setAudioRendition = function(rendition, clearBuffer) {
};
/**
 * @param {(clpp.Track|null)} track
 * @return {undefined}
 */
clpp.cast.SenderTrackManager.prototype.setAudioTrack = function(track) {
};
/**
 * @param {(clpp.Rendition|null)} rendition
 * @param {boolean=} clearBuffer
 * @return {undefined}
 */
clpp.cast.SenderTrackManager.prototype.setTextRendition = function(rendition, clearBuffer) {
};
/**
 * @param {(clpp.Track|null)} track
 * @return {undefined}
 */
clpp.cast.SenderTrackManager.prototype.setTextTrack = function(track) {
};
/**
 * @param {(clpp.Rendition|null)} rendition
 * @param {boolean=} clearBuffer
 * @return {undefined}
 */
clpp.cast.SenderTrackManager.prototype.setVideoRendition = function(rendition, clearBuffer) {
};
/**
 * @param {(clpp.Track|null)} track
 * @return {undefined}
 */
clpp.cast.SenderTrackManager.prototype.setVideoTrack = function(track) {
};
clpp.cast.TrackManager;
/**
 * @param {{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}} track
 * @return {(Promise<undefined>|null)}
 */
clpp.cast.TrackManager.prototype.addTextTrack = function(track) {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.cast.TrackManager.prototype.getAudioRendition = function() {
};
/**
 * @return {(clpp.Track|null)}
 */
clpp.cast.TrackManager.prototype.getAudioTrack = function() {
};
/**
 * @return {!Array<clpp.Track>}
 */
clpp.cast.TrackManager.prototype.getAudioTracks = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.cast.TrackManager.prototype.getLoadingAudioRendition = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.cast.TrackManager.prototype.getLoadingTextRendition = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.cast.TrackManager.prototype.getLoadingVideoRendition = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.cast.TrackManager.prototype.getTextRendition = function() {
};
/**
 * @return {(clpp.Track|null)}
 */
clpp.cast.TrackManager.prototype.getTextTrack = function() {
};
/**
 * @return {!Array<clpp.Track>}
 */
clpp.cast.TrackManager.prototype.getTextTracks = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.cast.TrackManager.prototype.getVideoRendition = function() {
};
/**
 * @return {(clpp.Track|null)}
 */
clpp.cast.TrackManager.prototype.getVideoTrack = function() {
};
/**
 * @return {!Array<clpp.Track>}
 */
clpp.cast.TrackManager.prototype.getVideoTracks = function() {
};
/**
 * @return {boolean}
 */
clpp.cast.TrackManager.prototype.isAbrEnabled = function() {
};
/**
 * @param {(clpp.Rendition|null)} rendition
 * @param {boolean=} clearBuffer
 * @return {undefined}
 */
clpp.cast.TrackManager.prototype.setAudioRendition = function(rendition, clearBuffer) {
};
/**
 * @param {(clpp.Track|null)} track
 * @return {undefined}
 */
clpp.cast.TrackManager.prototype.setAudioTrack = function(track) {
};
/**
 * @param {(clpp.Rendition|null)} rendition
 * @param {boolean=} clearBuffer
 * @return {undefined}
 */
clpp.cast.TrackManager.prototype.setTextRendition = function(rendition, clearBuffer) {
};
/**
 * @param {(clpp.Track|null)} track
 * @return {undefined}
 */
clpp.cast.TrackManager.prototype.setTextTrack = function(track) {
};
/**
 * @param {(clpp.Rendition|null)} rendition
 * @param {boolean=} clearBuffer
 * @return {undefined}
 */
clpp.cast.TrackManager.prototype.setVideoRendition = function(rendition, clearBuffer) {
};
/**
 * @param {(clpp.Track|null)} track
 * @return {undefined}
 */
clpp.cast.TrackManager.prototype.setVideoTrack = function(track) {
};
clpp.cast.ads;
clpp.cast.ads.Ad;
/**
 * @return {string}
 */
clpp.cast.ads.Ad.prototype.getAdManagerName = function() {
};
/**
 * @return {string}
 */
clpp.cast.ads.Ad.prototype.getAdManagerVersion = function() {
};
/**
 * @return {string}
 */
clpp.cast.ads.Ad.prototype.getAdSystem = function() {
};
/**
 * @return {string}
 */
clpp.cast.ads.Ad.prototype.getAdvertiserName = function() {
};
/**
 * @return {(null|string)}
 */
clpp.cast.ads.Ad.prototype.getApiFramework = function() {
};
/**
 * @return {(null|string)}
 */
clpp.cast.ads.Ad.prototype.getClickThroughUrl = function() {
};
/**
 * @return {string}
 */
clpp.cast.ads.Ad.prototype.getCreativeId = function() {
};
/**
 * @return {number}
 */
clpp.cast.ads.Ad.prototype.getDuration = function() {
};
/**
 * @return {string}
 */
clpp.cast.ads.Ad.prototype.getId = function() {
};
/**
 * @return {number}
 */
clpp.cast.ads.Ad.prototype.getMediaBitrate = function() {
};
/**
 * @return {number}
 */
clpp.cast.ads.Ad.prototype.getMediaHeight = function() {
};
/**
 * @return {(null|string)}
 */
clpp.cast.ads.Ad.prototype.getMediaUrl = function() {
};
/**
 * @return {number}
 */
clpp.cast.ads.Ad.prototype.getMediaWidth = function() {
};
/**
 * @return {number}
 */
clpp.cast.ads.Ad.prototype.getPodIndex = function() {
};
/**
 * @return {number}
 */
clpp.cast.ads.Ad.prototype.getPodTimeOffset = function() {
};
/**
 * @return {number}
 */
clpp.cast.ads.Ad.prototype.getPodType = function() {
};
/**
 * @return {number}
 */
clpp.cast.ads.Ad.prototype.getPositionInSequence = function() {
};
/**
 * @return {number}
 */
clpp.cast.ads.Ad.prototype.getSequenceLength = function() {
};
/**
 * @return {number}
 */
clpp.cast.ads.Ad.prototype.getSkipTimeOffset = function() {
};
/**
 * @return {number}
 */
clpp.cast.ads.Ad.prototype.getTechnology = function() {
};
/**
 * @return {string}
 */
clpp.cast.ads.Ad.prototype.getTitle = function() {
};
/**
 * @return {!Array<string>}
 */
clpp.cast.ads.Ad.prototype.getWrapperAdIds = function() {
};
/**
 * @return {!Array<string>}
 */
clpp.cast.ads.Ad.prototype.getWrapperAdSystems = function() {
};
/**
 * @return {!Array<string>}
 */
clpp.cast.ads.Ad.prototype.getWrapperCreativeIds = function() {
};
/**
 * @return {boolean}
 */
clpp.cast.ads.Ad.prototype.isBumper = function() {
};
clpp.cast.ads.AdsManager;
/**
 * @return {number}
 */
clpp.cast.ads.AdsManager.prototype.getPosition = function() {
};
/**
 * @return {number}
 */
clpp.cast.ads.AdsManager.prototype.getVolume = function() {
};
/**
 * @return {undefined}
 */
clpp.cast.ads.AdsManager.prototype.pause = function() {
};
/**
 * @return {undefined}
 */
clpp.cast.ads.AdsManager.prototype.resume = function() {
};
/**
 * @param {number} volume
 * @return {undefined}
 */
clpp.cast.ads.AdsManager.prototype.setVolume = function(volume) {
};
/**
 * @return {undefined}
 */
clpp.cast.ads.AdsManager.prototype.skip = function() {
};
clpp.cast.ads.AdsManagerFactory;
/**
 * @param {(clpp.Player|null)} player
 * @return {(clpp.ads.IAdsManager|null)}
 */
clpp.cast.ads.AdsManagerFactory.prototype.create = function(player) {
};
/**
 * @param {(clpp.Player|null)} player
 * @param {{abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), conviva: (undefined|{customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), enableAdInsights: boolean, serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, offlineId: (string|undefined), preferredDrmSystem: (string|undefined)}), enableEnhancedSubtitleManager: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: boolean, availabilityWindowOverride: number, clockSyncUri: string, ignoreDrmInfo: boolean, liveRefreshPeriod: (number|undefined), xlinkFailGracefully: boolean}, muted: (boolean|undefined), preferredAudioChannelCount: number, preferredAudioLanguage: string, preferredAudioRole: string, preferredTextLanguage: string, preferredTextRole: string, remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, source: (Array<(string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string})>|null|string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string}), startTime: (null|number), streaming: {alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, durationBackoff: number, failureCallback: (function(!clpp.Error): ?|undefined), forceNativeTS: boolean, ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, rebufferingGoal: number, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), youbora: (Object<string,*>|null|undefined)}} config
 * @return {boolean}
 */
clpp.cast.ads.AdsManagerFactory.prototype.isSupported = function(player, config) {
};
/**
 * @return {string}
 */
clpp.cast.ads.AdsManagerFactory.prototype.name = function() {
};
clpp.cast.ads.AdsTimeline;
/**
 * @return {(Array<number>|null)}
 */
clpp.cast.ads.AdsTimeline.prototype.getCuePoints = function() {
};
/**
 * @return {boolean}
 */
clpp.cast.ads.AdsTimeline.prototype.hasPostroll = function() {
};
/**
 * @return {boolean}
 */
clpp.cast.ads.AdsTimeline.prototype.hasPreroll = function() {
};
clpp.cast.ads.SenderAdsManager;
/**
 * @return {number}
 */
clpp.cast.ads.SenderAdsManager.prototype.getPosition = function() {
};
/**
 * @return {number}
 */
clpp.cast.ads.SenderAdsManager.prototype.getVolume = function() {
};
/**
 * @return {undefined}
 */
clpp.cast.ads.SenderAdsManager.prototype.pause = function() {
};
/**
 * @return {undefined}
 */
clpp.cast.ads.SenderAdsManager.prototype.resume = function() {
};
/**
 * @param {number} volume
 * @return {undefined}
 */
clpp.cast.ads.SenderAdsManager.prototype.setVolume = function(volume) {
};
/**
 * @return {undefined}
 */
clpp.cast.ads.SenderAdsManager.prototype.skip = function() {
};
clpp.cast.ads.SenderAdsManagerFactory;
/**
 * @param {(clpp.Player|null)} player
 * @return {(clpp.ads.IAdsManager|null)}
 */
clpp.cast.ads.SenderAdsManagerFactory.prototype.create = function(player) {
};
/**
 * @param {(clpp.Player|null)} player
 * @param {{abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), conviva: (undefined|{customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), enableAdInsights: boolean, serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, offlineId: (string|undefined), preferredDrmSystem: (string|undefined)}), enableEnhancedSubtitleManager: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: boolean, availabilityWindowOverride: number, clockSyncUri: string, ignoreDrmInfo: boolean, liveRefreshPeriod: (number|undefined), xlinkFailGracefully: boolean}, muted: (boolean|undefined), preferredAudioChannelCount: number, preferredAudioLanguage: string, preferredAudioRole: string, preferredTextLanguage: string, preferredTextRole: string, remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, source: (Array<(string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string})>|null|string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string}), startTime: (null|number), streaming: {alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, durationBackoff: number, failureCallback: (function(!clpp.Error): ?|undefined), forceNativeTS: boolean, ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, rebufferingGoal: number, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), youbora: (Object<string,*>|null|undefined)}} config
 * @return {boolean}
 */
clpp.cast.ads.SenderAdsManagerFactory.prototype.isSupported = function(player, config) {
};
/**
 * @return {string}
 */
clpp.cast.ads.SenderAdsManagerFactory.prototype.name = function() {
};
/**
 * @const
 * @suppress {const,duplicate}
 */
clpp.conviva = {};
/**
 * @implements {clpp.extern.PlayerPlugin}
 * @constructor
 */
clpp.conviva.ConvivaPlugin = function() {
};
clpp.conviva.ConvivaPlugin.Id;
/**
 * @param {string} eventType
 * @param {(Object|null)=} opt_eventDetail
 * @return {boolean}
 */
clpp.conviva.ConvivaPlugin.prototype.reportAppEvent = function(eventType, opt_eventDetail) {
};
/**
 * @const
 * @suppress {const,duplicate}
 */
clpp.crypto = {};
/**
 * @extends {clpp.AbstractComponent}
 * @implements {clpp.IComponent}
 * @constructor
 */
clpp.crypto.CryptoComponent = function() {
};
/**
 * @const
 * @suppress {const,duplicate}
 */
clpp.dash = {};
/**
 * @extends {clpp.AbstractComponent}
 * @implements {clpp.IComponent}
 * @constructor
 */
clpp.dash.DashComponent = function() {
};
/**
 * @const
 * @suppress {const,duplicate}
 */
clpp.drm = {};
/**
 * @param {string} name
 * @constructor
 */
clpp.drm.DrmEnvironment = function(name) {
};
/**
 * @param {string} systemName
 * @param {({audioRobustness: (string|undefined), distinctiveIdentifierRequired: (boolean|undefined), licenseUrl: string, modifiers: (undefined|{certificateRequest: (function({abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), conviva: (undefined|{customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), enableAdInsights: boolean, serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, offlineId: (string|undefined), preferredDrmSystem: (string|undefined)}), enableEnhancedSubtitleManager: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: boolean, availabilityWindowOverride: number, clockSyncUri: string, ignoreDrmInfo: boolean, liveRefreshPeriod: (number|undefined), xlinkFailGracefully: boolean}, muted: (boolean|undefined), preferredAudioChannelCount: number, preferredAudioLanguage: string, preferredAudioRole: string, preferredTextLanguage: string, preferredTextRole: string, remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, source: (Array<(string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string})>|null|string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string}), startTime: (null|number), streaming: {alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, durationBackoff: number, failureCallback: (function(!clpp.Error): ?|undefined), forceNativeTS: boolean, ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, rebufferingGoal: number, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), youbora: (Object<string,*>|null|undefined)}, {allowCrossSiteCredentials: boolean, backoffFactor: number, baseDelay: number, body: (ArrayBuffer|null), bytesLoaded: number, bytesRemaining: number, bytesTotal: number, contentType: (null|string), currentAttempt: number, endTime: (null|number), fuzzFactor: number, headers: !Object<string,string>, keyInfo: (undefined|{iv: (Uint8Array|null), method: string, url: string}), licenseRequestType: (null|string), maxAttempts: number, method: string, onFragment: (function({count: number, data: !DataView, end: number, length: number, start: number}): (Promise|null)|null), onProgress: function(number, number): ?, requestModifiers: (Array<function(?): (Promise<?>|null|undefined)>|null), responseModifiers: (Array<function({data: !ArrayBuffer, fromCache: (boolean|undefined), headers: !Object<string,string>, request: (?|undefined), status: (number|undefined), timeMs: (number|undefined), uri: string}): (Promise|null|undefined)>|null), startTime: (null|number), timeout: number, timescale: (null|number), type: number, uriIndex: number, uris: !Array<string>}): (Promise<{allowCrossSiteCredentials: boolean, backoffFactor: number, baseDelay: number, body: (ArrayBuffer|null), bytesLoaded: number, bytesRemaining: number, bytesTotal: number, contentType: (null|string), currentAttempt: number, endTime: (null|number), fuzzFactor: number, headers: !Object<string,string>, keyInfo: (undefined|{iv: (Uint8Array|null), method: string, url: string}), licenseRequestType: (null|string), maxAttempts: number, method: string, onFragment: (function({count: number, data: !DataView, end: number, length: number, start: number}): (Promise|null)|null), onProgress: function(number, number): ?, requestModifiers: (Array<function(?): (Promise<?>|null|undefined)>|null), responseModifiers: (Array<function({data: !ArrayBuffer, fromCache: (boolean|undefined), headers: !Object<string,string>, request: (?|undefined), status: (number|undefined), timeMs: (number|undefined), uri: string}): (Promise|null|undefined)>|null), startTime: (null|number), timeout: number, timescale: (null|number), type: number, uriIndex: number, uris: !Array<string>}>|null|undefined)|undefined), certificateResponse: (function({abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), conviva: (undefined|{customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), enableAdInsights: boolean, serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, offlineId: (string|undefined), preferredDrmSystem: (string|undefined)}), enableEnhancedSubtitleManager: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: boolean, availabilityWindowOverride: number, clockSyncUri: string, ignoreDrmInfo: boolean, liveRefreshPeriod: (number|undefined), xlinkFailGracefully: boolean}, muted: (boolean|undefined), preferredAudioChannelCount: number, preferredAudioLanguage: string, preferredAudioRole: string, preferredTextLanguage: string, preferredTextRole: string, remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, source: (Array<(string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string})>|null|string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string}), startTime: (null|number), streaming: {alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, durationBackoff: number, failureCallback: (function(!clpp.Error): ?|undefined), forceNativeTS: boolean, ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, rebufferingGoal: number, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), youbora: (Object<string,*>|null|undefined)}, {data: !ArrayBuffer, fromCache: (boolean|undefined), headers: !Object<string,string>, request: (undefined|{allowCrossSiteCredentials: boolean, backoffFactor: number, baseDelay: number, body: (ArrayBuffer|null), bytesLoaded: number, bytesRemaining: number, bytesTotal: number, contentType: (null|string), currentAttempt: number, endTime: (null|number), fuzzFactor: number, headers: !Object<string,string>, keyInfo: (undefined|{iv: (Uint8Array|null), method: string, url: string}), licenseRequestType: (null|string), maxAttempts: number, method: string, onFragment: (function({count: number, data: !DataView, end: number, length: number, start: number}): (Promise|null)|null), onProgress: function(number, number): ?, requestModifiers: (Array<function(?): (Promise<?>|null|undefined)>|null), responseModifiers: (Array<function(?): (Promise|null|undefined)>|null), startTime: (null|number), timeout: number, timescale: (null|number), type: number, uriIndex: number, uris: !Array<string>}), status: (number|undefined), timeMs: (number|undefined), uri: string}): (Promise|null|undefined)|undefined), extractContentId: (function({abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), conviva: (undefined|{customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), enableAdInsights: boolean, serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, offlineId: (string|undefined), preferredDrmSystem: (string|undefined)}), enableEnhancedSubtitleManager: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: boolean, availabilityWindowOverride: number, clockSyncUri: string, ignoreDrmInfo: boolean, liveRefreshPeriod: (number|undefined), xlinkFailGracefully: boolean}, muted: (boolean|undefined), preferredAudioChannelCount: number, preferredAudioLanguage: string, preferredAudioRole: string, preferredTextLanguage: string, preferredTextRole: string, remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, source: (Array<(string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string})>|null|string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string}), startTime: (null|number), streaming: {alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, durationBackoff: number, failureCallback: (function(!clpp.Error): ?|undefined), forceNativeTS: boolean, ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, rebufferingGoal: number, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), youbora: (Object<string,*>|null|undefined)}, (Uint8Array|null)): string|undefined), licenseRequest: (function({abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), conviva: (undefined|{customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), enableAdInsights: boolean, serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, offlineId: (string|undefined), preferredDrmSystem: (string|undefined)}), enableEnhancedSubtitleManager: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: boolean, availabilityWindowOverride: number, clockSyncUri: string, ignoreDrmInfo: boolean, liveRefreshPeriod: (number|undefined), xlinkFailGracefully: boolean}, muted: (boolean|undefined), preferredAudioChannelCount: number, preferredAudioLanguage: string, preferredAudioRole: string, preferredTextLanguage: string, preferredTextRole: string, remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, source: (Array<(string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string})>|null|string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string}), startTime: (null|number), streaming: {alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, durationBackoff: number, failureCallback: (function(!clpp.Error): ?|undefined), forceNativeTS: boolean, ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, rebufferingGoal: number, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), youbora: (Object<string,*>|null|undefined)}, {allowCrossSiteCredentials: boolean, backoffFactor: number, baseDelay: number, body: (ArrayBuffer|null), bytesLoaded: number, bytesRemaining: number, bytesTotal: number, contentType: (null|string), currentAttempt: number, endTime: (null|number), fuzzFactor: number, headers: !Object<string,string>, keyInfo: (undefined|{iv: (Uint8Array|null), method: string, url: string}), licenseRequestType: (null|string), maxAttempts: number, method: string, onFragment: (function({count: number, data: !DataView, end: number, length: number, start: number}): (Promise|null)|null), onProgress: function(number, number): ?, requestModifiers: (Array<function(?): (Promise<?>|null|undefined)>|null), responseModifiers: (Array<function({data: !ArrayBuffer, fromCache: (boolean|undefined), headers: !Object<string,string>, request: (?|undefined), status: (number|undefined), timeMs: (number|undefined), uri: string}): (Promise|null|undefined)>|null), startTime: (null|number), timeout: number, timescale: (null|number), type: number, uriIndex: number, uris: !Array<string>}): (Promise<{allowCrossSiteCredentials: boolean, backoffFactor: number, baseDelay: number, body: (ArrayBuffer|null), bytesLoaded: number, bytesRemaining: number, bytesTotal: number, contentType: (null|string), currentAttempt: number, endTime: (null|number), fuzzFactor: number, headers: !Object<string,string>, keyInfo: (undefined|{iv: (Uint8Array|null), method: string, url: string}), licenseRequestType: (null|string), maxAttempts: number, method: string, onFragment: (function({count: number, data: !DataView, end: number, length: number, start: number}): (Promise|null)|null), onProgress: function(number, number): ?, requestModifiers: (Array<function(?): (Promise<?>|null|undefined)>|null), responseModifiers: (Array<function({data: !ArrayBuffer, fromCache: (boolean|undefined), headers: !Object<string,string>, request: (?|undefined), status: (number|undefined), timeMs: (number|undefined), uri: string}): (Promise|null|undefined)>|null), startTime: (null|number), timeout: number, timescale: (null|number), type: number, uriIndex: number, uris: !Array<string>}>|null|undefined)|undefined), licenseResponse: (function({abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), conviva: (undefined|{customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), enableAdInsights: boolean, serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, offlineId: (string|undefined), preferredDrmSystem: (string|undefined)}), enableEnhancedSubtitleManager: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: boolean, availabilityWindowOverride: number, clockSyncUri: string, ignoreDrmInfo: boolean, liveRefreshPeriod: (number|undefined), xlinkFailGracefully: boolean}, muted: (boolean|undefined), preferredAudioChannelCount: number, preferredAudioLanguage: string, preferredAudioRole: string, preferredTextLanguage: string, preferredTextRole: string, remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, source: (Array<(string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string})>|null|string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string}), startTime: (null|number), streaming: {alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, durationBackoff: number, failureCallback: (function(!clpp.Error): ?|undefined), forceNativeTS: boolean, ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, rebufferingGoal: number, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), youbora: (Object<string,*>|null|undefined)}, {data: !ArrayBuffer, fromCache: (boolean|undefined), headers: !Object<string,string>, request: (undefined|{allowCrossSiteCredentials: boolean, backoffFactor: number, baseDelay: number, body: (ArrayBuffer|null), bytesLoaded: number, bytesRemaining: number, bytesTotal: number, contentType: (null|string), currentAttempt: number, endTime: (null|number), fuzzFactor: number, headers: !Object<string,string>, keyInfo: (undefined|{iv: (Uint8Array|null), method: string, url: string}), licenseRequestType: (null|string), maxAttempts: number, method: string, onFragment: (function({count: number, data: !DataView, end: number, length: number, start: number}): (Promise|null)|null), onProgress: function(number, number): ?, requestModifiers: (Array<function(?): (Promise<?>|null|undefined)>|null), responseModifiers: (Array<function(?): (Promise|null|undefined)>|null), startTime: (null|number), timeout: number, timescale: (null|number), type: number, uriIndex: number, uris: !Array<string>}), status: (number|undefined), timeMs: (number|undefined), uri: string}): (Promise|null|undefined)|undefined)}), persistentStateRequired: (boolean|undefined), serverCertificate: (Uint8Array|null|undefined), videoRobustness: (string|undefined)}|{individualizationServer: (string|undefined), licenseUrl: string, modifiers: (undefined|{certificateRequest: (function({abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), conviva: (undefined|{customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), enableAdInsights: boolean, serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, offlineId: (string|undefined), preferredDrmSystem: (string|undefined)}), enableEnhancedSubtitleManager: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: boolean, availabilityWindowOverride: number, clockSyncUri: string, ignoreDrmInfo: boolean, liveRefreshPeriod: (number|undefined), xlinkFailGracefully: boolean}, muted: (boolean|undefined), preferredAudioChannelCount: number, preferredAudioLanguage: string, preferredAudioRole: string, preferredTextLanguage: string, preferredTextRole: string, remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, source: (Array<(string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string})>|null|string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string}), startTime: (null|number), streaming: {alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, durationBackoff: number, failureCallback: (function(!clpp.Error): ?|undefined), forceNativeTS: boolean, ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, rebufferingGoal: number, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), youbora: (Object<string,*>|null|undefined)}, {allowCrossSiteCredentials: boolean, backoffFactor: number, baseDelay: number, body: (ArrayBuffer|null), bytesLoaded: number, bytesRemaining: number, bytesTotal: number, contentType: (null|string), currentAttempt: number, endTime: (null|number), fuzzFactor: number, headers: !Object<string,string>, keyInfo: (undefined|{iv: (Uint8Array|null), method: string, url: string}), licenseRequestType: (null|string), maxAttempts: number, method: string, onFragment: (function({count: number, data: !DataView, end: number, length: number, start: number}): (Promise|null)|null), onProgress: function(number, number): ?, requestModifiers: (Array<function(?): (Promise<?>|null|undefined)>|null), responseModifiers: (Array<function({data: !ArrayBuffer, fromCache: (boolean|undefined), headers: !Object<string,string>, request: (?|undefined), status: (number|undefined), timeMs: (number|undefined), uri: string}): (Promise|null|undefined)>|null), startTime: (null|number), timeout: number, timescale: (null|number), type: number, uriIndex: number, uris: !Array<string>}): (Promise<{allowCrossSiteCredentials: boolean, backoffFactor: number, baseDelay: number, body: (ArrayBuffer|null), bytesLoaded: number, bytesRemaining: number, bytesTotal: number, contentType: (null|string), currentAttempt: number, endTime: (null|number), fuzzFactor: number, headers: !Object<string,string>, keyInfo: (undefined|{iv: (Uint8Array|null), method: string, url: string}), licenseRequestType: (null|string), maxAttempts: number, method: string, onFragment: (function({count: number, data: !DataView, end: number, length: number, start: number}): (Promise|null)|null), onProgress: function(number, number): ?, requestModifiers: (Array<function(?): (Promise<?>|null|undefined)>|null), responseModifiers: (Array<function({data: !ArrayBuffer, fromCache: (boolean|undefined), headers: !Object<string,string>, request: (?|undefined), status: (number|undefined), timeMs: (number|undefined), uri: string}): (Promise|null|undefined)>|null), startTime: (null|number), timeout: number, timescale: (null|number), type: number, uriIndex: number, uris: !Array<string>}>|null|undefined)|undefined), certificateResponse: (function({abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), conviva: (undefined|{customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), enableAdInsights: boolean, serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, offlineId: (string|undefined), preferredDrmSystem: (string|undefined)}), enableEnhancedSubtitleManager: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: boolean, availabilityWindowOverride: number, clockSyncUri: string, ignoreDrmInfo: boolean, liveRefreshPeriod: (number|undefined), xlinkFailGracefully: boolean}, muted: (boolean|undefined), preferredAudioChannelCount: number, preferredAudioLanguage: string, preferredAudioRole: string, preferredTextLanguage: string, preferredTextRole: string, remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, source: (Array<(string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string})>|null|string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string}), startTime: (null|number), streaming: {alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, durationBackoff: number, failureCallback: (function(!clpp.Error): ?|undefined), forceNativeTS: boolean, ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, rebufferingGoal: number, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), youbora: (Object<string,*>|null|undefined)}, {data: !ArrayBuffer, fromCache: (boolean|undefined), headers: !Object<string,string>, request: (undefined|{allowCrossSiteCredentials: boolean, backoffFactor: number, baseDelay: number, body: (ArrayBuffer|null), bytesLoaded: number, bytesRemaining: number, bytesTotal: number, contentType: (null|string), currentAttempt: number, endTime: (null|number), fuzzFactor: number, headers: !Object<string,string>, keyInfo: (undefined|{iv: (Uint8Array|null), method: string, url: string}), licenseRequestType: (null|string), maxAttempts: number, method: string, onFragment: (function({count: number, data: !DataView, end: number, length: number, start: number}): (Promise|null)|null), onProgress: function(number, number): ?, requestModifiers: (Array<function(?): (Promise<?>|null|undefined)>|null), responseModifiers: (Array<function(?): (Promise|null|undefined)>|null), startTime: (null|number), timeout: number, timescale: (null|number), type: number, uriIndex: number, uris: !Array<string>}), status: (number|undefined), timeMs: (number|undefined), uri: string}): (Promise|null|undefined)|undefined), extractContentId: (function({abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), conviva: (undefined|{customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), enableAdInsights: boolean, serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, offlineId: (string|undefined), preferredDrmSystem: (string|undefined)}), enableEnhancedSubtitleManager: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: boolean, availabilityWindowOverride: number, clockSyncUri: string, ignoreDrmInfo: boolean, liveRefreshPeriod: (number|undefined), xlinkFailGracefully: boolean}, muted: (boolean|undefined), preferredAudioChannelCount: number, preferredAudioLanguage: string, preferredAudioRole: string, preferredTextLanguage: string, preferredTextRole: string, remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, source: (Array<(string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string})>|null|string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string}), startTime: (null|number), streaming: {alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, durationBackoff: number, failureCallback: (function(!clpp.Error): ?|undefined), forceNativeTS: boolean, ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, rebufferingGoal: number, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), youbora: (Object<string,*>|null|undefined)}, (Uint8Array|null)): string|undefined), licenseRequest: (function({abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), conviva: (undefined|{customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), enableAdInsights: boolean, serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, offlineId: (string|undefined), preferredDrmSystem: (string|undefined)}), enableEnhancedSubtitleManager: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: boolean, availabilityWindowOverride: number, clockSyncUri: string, ignoreDrmInfo: boolean, liveRefreshPeriod: (number|undefined), xlinkFailGracefully: boolean}, muted: (boolean|undefined), preferredAudioChannelCount: number, preferredAudioLanguage: string, preferredAudioRole: string, preferredTextLanguage: string, preferredTextRole: string, remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, source: (Array<(string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string})>|null|string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string}), startTime: (null|number), streaming: {alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, durationBackoff: number, failureCallback: (function(!clpp.Error): ?|undefined), forceNativeTS: boolean, ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, rebufferingGoal: number, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), youbora: (Object<string,*>|null|undefined)}, {allowCrossSiteCredentials: boolean, backoffFactor: number, baseDelay: number, body: (ArrayBuffer|null), bytesLoaded: number, bytesRemaining: number, bytesTotal: number, contentType: (null|string), currentAttempt: number, endTime: (null|number), fuzzFactor: number, headers: !Object<string,string>, keyInfo: (undefined|{iv: (Uint8Array|null), method: string, url: string}), licenseRequestType: (null|string), maxAttempts: number, method: string, onFragment: (function({count: number, data: !DataView, end: number, length: number, start: number}): (Promise|null)|null), onProgress: function(number, number): ?, requestModifiers: (Array<function(?): (Promise<?>|null|undefined)>|null), responseModifiers: (Array<function({data: !ArrayBuffer, fromCache: (boolean|undefined), headers: !Object<string,string>, request: (?|undefined), status: (number|undefined), timeMs: (number|undefined), uri: string}): (Promise|null|undefined)>|null), startTime: (null|number), timeout: number, timescale: (null|number), type: number, uriIndex: number, uris: !Array<string>}): (Promise<{allowCrossSiteCredentials: boolean, backoffFactor: number, baseDelay: number, body: (ArrayBuffer|null), bytesLoaded: number, bytesRemaining: number, bytesTotal: number, contentType: (null|string), currentAttempt: number, endTime: (null|number), fuzzFactor: number, headers: !Object<string,string>, keyInfo: (undefined|{iv: (Uint8Array|null), method: string, url: string}), licenseRequestType: (null|string), maxAttempts: number, method: string, onFragment: (function({count: number, data: !DataView, end: number, length: number, start: number}): (Promise|null)|null), onProgress: function(number, number): ?, requestModifiers: (Array<function(?): (Promise<?>|null|undefined)>|null), responseModifiers: (Array<function({data: !ArrayBuffer, fromCache: (boolean|undefined), headers: !Object<string,string>, request: (?|undefined), status: (number|undefined), timeMs: (number|undefined), uri: string}): (Promise|null|undefined)>|null), startTime: (null|number), timeout: number, timescale: (null|number), type: number, uriIndex: number, uris: !Array<string>}>|null|undefined)|undefined), licenseResponse: (function({abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), conviva: (undefined|{customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), enableAdInsights: boolean, serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, offlineId: (string|undefined), preferredDrmSystem: (string|undefined)}), enableEnhancedSubtitleManager: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: boolean, availabilityWindowOverride: number, clockSyncUri: string, ignoreDrmInfo: boolean, liveRefreshPeriod: (number|undefined), xlinkFailGracefully: boolean}, muted: (boolean|undefined), preferredAudioChannelCount: number, preferredAudioLanguage: string, preferredAudioRole: string, preferredTextLanguage: string, preferredTextRole: string, remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, source: (Array<(string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string})>|null|string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string}), startTime: (null|number), streaming: {alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, durationBackoff: number, failureCallback: (function(!clpp.Error): ?|undefined), forceNativeTS: boolean, ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, rebufferingGoal: number, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), youbora: (Object<string,*>|null|undefined)}, {data: !ArrayBuffer, fromCache: (boolean|undefined), headers: !Object<string,string>, request: (undefined|{allowCrossSiteCredentials: boolean, backoffFactor: number, baseDelay: number, body: (ArrayBuffer|null), bytesLoaded: number, bytesRemaining: number, bytesTotal: number, contentType: (null|string), currentAttempt: number, endTime: (null|number), fuzzFactor: number, headers: !Object<string,string>, keyInfo: (undefined|{iv: (Uint8Array|null), method: string, url: string}), licenseRequestType: (null|string), maxAttempts: number, method: string, onFragment: (function({count: number, data: !DataView, end: number, length: number, start: number}): (Promise|null)|null), onProgress: function(number, number): ?, requestModifiers: (Array<function(?): (Promise<?>|null|undefined)>|null), responseModifiers: (Array<function(?): (Promise|null|undefined)>|null), startTime: (null|number), timeout: number, timescale: (null|number), type: number, uriIndex: number, uris: !Array<string>}), status: (number|undefined), timeMs: (number|undefined), uri: string}): (Promise|null|undefined)|undefined)})})} drmSystem
 * @return {undefined}
 */
clpp.drm.DrmEnvironment.prototype.setDrmSystem = function(systemName, drmSystem) {
};
/**
 * @const
 * @suppress {const,duplicate}
 */
clpp.drm.DrmToday = {};
/** @enum {string} */
clpp.drm.DrmToday.Environment = {PRODUCTION:1, STAGING:2, TEST:3};
/** @enum {string} */
clpp.drm.KeySystem = {WIDEVINE:1, PLAYREADY:2, FAIRPLAY:3};
/** @enum {string} */
clpp.drm.RobustnessLevel = {SW_SECURE_CRYPTO:1, SW_SECURE_DECODE:2, HW_SECURE_CRYPTO:3, HW_SECURE_DECODE:4, HW_SECURE_ALL:5};
/**
 * @param {(clpp.drm.DrmEnvironment|null)} env
 * @return {undefined}
 */
clpp.drm.registerDrmEnvironment = function(env) {
};
clpp.events;
clpp.events.ADS_TIMELINE_CHANGED;
clpp.events.AD_BREAK_STARTED;
clpp.events.AD_BREAK_STOPPED;
clpp.events.AD_BUFFERING;
clpp.events.AD_CLICKED;
clpp.events.AD_COMPLETED;
clpp.events.AD_FIRST_QUARTILE;
clpp.events.AD_IMPRESSION;
clpp.events.AD_LOADED;
clpp.events.AD_MIDPOINT;
clpp.events.AD_PAUSED;
clpp.events.AD_PROGRESS;
clpp.events.AD_RESUMED;
clpp.events.AD_SKIPPED;
clpp.events.AD_STARTED;
clpp.events.AD_STOPPED;
clpp.events.AD_THIRD_QUARTILE;
clpp.events.AIRPLAY_CASTING_ENDED;
clpp.events.AIRPLAY_CASTING_STARTED;
clpp.events.AIRPLAY_STATUS_CHANGED;
clpp.events.AUDIO_BUFFER_CHANGED;
clpp.events.AUDIO_TRACK_CHANGED;
clpp.events.AUTOPLAY_NOT_ALLOWED;
clpp.events.BITRATE_CHANGED;
clpp.events.BUFFERING_ENDED;
clpp.events.BUFFERING_STARTED;
/** @enum {number} */
clpp.events.BufferingReasons = {SEEKING:1, NO_DATA:2};
clpp.events.CASTING_ENDED;
clpp.events.CASTING_STARTED;
clpp.events.CAST_STATUS_CHANGED;
clpp.events.DESTROYED;
clpp.events.DESTROYING;
clpp.events.DOWNLOAD_TRACE;
clpp.events.DRM_EXPIRATION_UPDATE;
clpp.events.DRM_RENEWAL_STARTED;
clpp.events.DRM_SESSION_PERSISTED;
clpp.events.DRM_SESSION_UPDATE;
clpp.events.ERROR;
clpp.events.LOADEDMETADATA;
clpp.events.LOAD_START;
clpp.events.MPD_TYPE_CHANGED;
clpp.events.PLAY;
clpp.events.PLAYLIST_ITEM_CHANGED;
clpp.events.PLAYLIST_MODIFIED;
clpp.events.RELEASED;
clpp.events.RELEASING;
clpp.events.SEEKED;
clpp.events.SEEKING;
clpp.events.STATE_CHANGED;
clpp.events.TEXT_TRACK_CHANGED;
clpp.events.TIMELINE_CUE_ADDED;
clpp.events.TIMELINE_CUE_ENTER;
clpp.events.TIMELINE_CUE_EXIT;
clpp.events.TRACKS_ADDED;
clpp.events.USER_SEEKED;
clpp.events.USER_SEEKING;
clpp.events.VIDEO_BUFFER_CHANGED;
clpp.events.VIDEO_TRACK_CHANGED;
clpp.events.VIMOND_RESPONSE;
clpp.freewheel;
clpp.freewheel.Ad;
/**
 * @return {string}
 */
clpp.freewheel.Ad.prototype.getAdManagerName = function() {
};
/**
 * @return {string}
 */
clpp.freewheel.Ad.prototype.getAdManagerVersion = function() {
};
/**
 * @return {string}
 */
clpp.freewheel.Ad.prototype.getAdSystem = function() {
};
/**
 * @return {string}
 */
clpp.freewheel.Ad.prototype.getAdvertiserName = function() {
};
/**
 * @return {(null|string)}
 */
clpp.freewheel.Ad.prototype.getApiFramework = function() {
};
/**
 * @return {(null|string)}
 */
clpp.freewheel.Ad.prototype.getClickThroughUrl = function() {
};
/**
 * @return {string}
 */
clpp.freewheel.Ad.prototype.getCreativeId = function() {
};
/**
 * @return {number}
 */
clpp.freewheel.Ad.prototype.getDuration = function() {
};
/**
 * @return {string}
 */
clpp.freewheel.Ad.prototype.getId = function() {
};
/**
 * @return {number}
 */
clpp.freewheel.Ad.prototype.getMediaBitrate = function() {
};
/**
 * @return {number}
 */
clpp.freewheel.Ad.prototype.getMediaHeight = function() {
};
/**
 * @return {(null|string)}
 */
clpp.freewheel.Ad.prototype.getMediaUrl = function() {
};
/**
 * @return {number}
 */
clpp.freewheel.Ad.prototype.getMediaWidth = function() {
};
/**
 * @return {number}
 */
clpp.freewheel.Ad.prototype.getPodIndex = function() {
};
/**
 * @return {number}
 */
clpp.freewheel.Ad.prototype.getPodTimeOffset = function() {
};
/**
 * @return {number}
 */
clpp.freewheel.Ad.prototype.getPodType = function() {
};
/**
 * @return {number}
 */
clpp.freewheel.Ad.prototype.getPositionInSequence = function() {
};
/**
 * @return {number}
 */
clpp.freewheel.Ad.prototype.getSequenceLength = function() {
};
/**
 * @return {number}
 */
clpp.freewheel.Ad.prototype.getSkipTimeOffset = function() {
};
/**
 * @return {number}
 */
clpp.freewheel.Ad.prototype.getTechnology = function() {
};
/**
 * @return {string}
 */
clpp.freewheel.Ad.prototype.getTitle = function() {
};
/**
 * @return {!Array<string>}
 */
clpp.freewheel.Ad.prototype.getWrapperAdIds = function() {
};
/**
 * @return {!Array<string>}
 */
clpp.freewheel.Ad.prototype.getWrapperAdSystems = function() {
};
/**
 * @return {!Array<string>}
 */
clpp.freewheel.Ad.prototype.getWrapperCreativeIds = function() {
};
/**
 * @return {boolean}
 */
clpp.freewheel.Ad.prototype.isBumper = function() {
};
clpp.freewheel.AdsManager;
/**
 * @return {number}
 */
clpp.freewheel.AdsManager.prototype.getPosition = function() {
};
/**
 * @return {number}
 */
clpp.freewheel.AdsManager.prototype.getVolume = function() {
};
/**
 * @return {undefined}
 */
clpp.freewheel.AdsManager.prototype.pause = function() {
};
/**
 * @return {undefined}
 */
clpp.freewheel.AdsManager.prototype.resume = function() {
};
/**
 * @param {number} volume
 * @return {undefined}
 */
clpp.freewheel.AdsManager.prototype.setVolume = function(volume) {
};
/**
 * @return {undefined}
 */
clpp.freewheel.AdsManager.prototype.skip = function() {
};
/**
 * @param {(clpp.IPlayer|null)} delegate
 * @return {!Promise}
 */
clpp.freewheel.AdsManager.prototype.start = function(delegate) {
};
clpp.freewheel.AdsManagerFactory;
/**
 * @param {(clpp.Player|null)} player
 * @return {(clpp.ads.IAdsManager|null)}
 */
clpp.freewheel.AdsManagerFactory.prototype.create = function(player) {
};
/**
 * @param {(clpp.Player|null)} player
 * @param {{abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), conviva: (undefined|{customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), enableAdInsights: boolean, serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, offlineId: (string|undefined), preferredDrmSystem: (string|undefined)}), enableEnhancedSubtitleManager: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: boolean, availabilityWindowOverride: number, clockSyncUri: string, ignoreDrmInfo: boolean, liveRefreshPeriod: (number|undefined), xlinkFailGracefully: boolean}, muted: (boolean|undefined), preferredAudioChannelCount: number, preferredAudioLanguage: string, preferredAudioRole: string, preferredTextLanguage: string, preferredTextRole: string, remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, source: (Array<(string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string})>|null|string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string}), startTime: (null|number), streaming: {alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, durationBackoff: number, failureCallback: (function(!clpp.Error): ?|undefined), forceNativeTS: boolean, ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, rebufferingGoal: number, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), youbora: (Object<string,*>|null|undefined)}} config
 * @return {boolean}
 */
clpp.freewheel.AdsManagerFactory.prototype.isSupported = function(player, config) {
};
/**
 * @return {string}
 */
clpp.freewheel.AdsManagerFactory.prototype.name = function() {
};
clpp.freewheel.AdsTimeline;
/**
 * @return {(Array<number>|null)}
 */
clpp.freewheel.AdsTimeline.prototype.getCuePoints = function() {
};
/**
 * @return {boolean}
 */
clpp.freewheel.AdsTimeline.prototype.hasPostroll = function() {
};
/**
 * @return {boolean}
 */
clpp.freewheel.AdsTimeline.prototype.hasPreroll = function() {
};
/**
 * @extends {clpp.plugin.AbstractPlugin}
 * @implements {clpp.extern.PlayerPlugin}
 * @constructor
 */
clpp.freewheel.FreeWheelPlugin = function() {
};
clpp.freewheel.FreeWheelPlugin.AD_CONTAINER_ID;
clpp.freewheel.FreeWheelPlugin.Id;
/**
 * @return {(Element|null)}
 */
clpp.freewheel.FreeWheelPlugin.prototype.getAdContainer = function() {
};
/**
 * @return {(HTMLVideoElement|null)}
 */
clpp.freewheel.FreeWheelPlugin.prototype.getAdVideo = function() {
};
/**
 * @const
 * @suppress {const,duplicate}
 */
clpp.hls = {};
/**
 * @extends {clpp.AbstractComponent}
 * @implements {clpp.IComponent}
 * @constructor
 */
clpp.hls.HlsComponent = function() {
};
clpp.ima;
clpp.ima.Ad;
/**
 * @return {string}
 */
clpp.ima.Ad.prototype.getAdManagerName = function() {
};
/**
 * @return {string}
 */
clpp.ima.Ad.prototype.getAdManagerVersion = function() {
};
/**
 * @return {string}
 */
clpp.ima.Ad.prototype.getAdSystem = function() {
};
/**
 * @return {string}
 */
clpp.ima.Ad.prototype.getAdvertiserName = function() {
};
/**
 * @return {(null|string)}
 */
clpp.ima.Ad.prototype.getApiFramework = function() {
};
/**
 * @return {(null|string)}
 */
clpp.ima.Ad.prototype.getClickThroughUrl = function() {
};
/**
 * @return {string}
 */
clpp.ima.Ad.prototype.getCreativeId = function() {
};
/**
 * @return {number}
 */
clpp.ima.Ad.prototype.getDuration = function() {
};
/**
 * @return {string}
 */
clpp.ima.Ad.prototype.getId = function() {
};
/**
 * @return {number}
 */
clpp.ima.Ad.prototype.getMediaBitrate = function() {
};
/**
 * @return {number}
 */
clpp.ima.Ad.prototype.getMediaHeight = function() {
};
/**
 * @return {(null|string)}
 */
clpp.ima.Ad.prototype.getMediaUrl = function() {
};
/**
 * @return {number}
 */
clpp.ima.Ad.prototype.getMediaWidth = function() {
};
/**
 * @return {number}
 */
clpp.ima.Ad.prototype.getPodIndex = function() {
};
/**
 * @return {number}
 */
clpp.ima.Ad.prototype.getPodTimeOffset = function() {
};
/**
 * @return {number}
 */
clpp.ima.Ad.prototype.getPodType = function() {
};
/**
 * @return {number}
 */
clpp.ima.Ad.prototype.getPositionInSequence = function() {
};
/**
 * @return {number}
 */
clpp.ima.Ad.prototype.getSequenceLength = function() {
};
/**
 * @return {number}
 */
clpp.ima.Ad.prototype.getSkipTimeOffset = function() {
};
/**
 * @return {number}
 */
clpp.ima.Ad.prototype.getTechnology = function() {
};
/**
 * @return {string}
 */
clpp.ima.Ad.prototype.getTitle = function() {
};
/**
 * @return {!Array<string>}
 */
clpp.ima.Ad.prototype.getWrapperAdIds = function() {
};
/**
 * @return {!Array<string>}
 */
clpp.ima.Ad.prototype.getWrapperAdSystems = function() {
};
/**
 * @return {!Array<string>}
 */
clpp.ima.Ad.prototype.getWrapperCreativeIds = function() {
};
/**
 * @return {boolean}
 */
clpp.ima.Ad.prototype.isBumper = function() {
};
clpp.ima.AdsManager;
/**
 * @return {number}
 */
clpp.ima.AdsManager.prototype.getPosition = function() {
};
/**
 * @return {number}
 */
clpp.ima.AdsManager.prototype.getVolume = function() {
};
/**
 * @return {undefined}
 */
clpp.ima.AdsManager.prototype.pause = function() {
};
/**
 * @return {undefined}
 */
clpp.ima.AdsManager.prototype.resume = function() {
};
/**
 * @param {number} volume
 * @return {undefined}
 */
clpp.ima.AdsManager.prototype.setVolume = function(volume) {
};
/**
 * @return {undefined}
 */
clpp.ima.AdsManager.prototype.skip = function() {
};
clpp.ima.AdsManagerFactory;
/**
 * @param {(clpp.Player|null)} player
 * @return {(clpp.ads.IAdsManager|null)}
 */
clpp.ima.AdsManagerFactory.prototype.create = function(player) {
};
/**
 * @param {(clpp.Player|null)} player
 * @param {{abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), conviva: (undefined|{customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), enableAdInsights: boolean, serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, offlineId: (string|undefined), preferredDrmSystem: (string|undefined)}), enableEnhancedSubtitleManager: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: boolean, availabilityWindowOverride: number, clockSyncUri: string, ignoreDrmInfo: boolean, liveRefreshPeriod: (number|undefined), xlinkFailGracefully: boolean}, muted: (boolean|undefined), preferredAudioChannelCount: number, preferredAudioLanguage: string, preferredAudioRole: string, preferredTextLanguage: string, preferredTextRole: string, remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, source: (Array<(string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string})>|null|string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string}), startTime: (null|number), streaming: {alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, durationBackoff: number, failureCallback: (function(!clpp.Error): ?|undefined), forceNativeTS: boolean, ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, rebufferingGoal: number, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), youbora: (Object<string,*>|null|undefined)}} config
 * @return {boolean}
 */
clpp.ima.AdsManagerFactory.prototype.isSupported = function(player, config) {
};
/**
 * @return {string}
 */
clpp.ima.AdsManagerFactory.prototype.name = function() {
};
clpp.ima.AdsTimeline;
/**
 * @return {(Array<number>|null)}
 */
clpp.ima.AdsTimeline.prototype.getCuePoints = function() {
};
/**
 * @return {boolean}
 */
clpp.ima.AdsTimeline.prototype.hasPostroll = function() {
};
/**
 * @return {boolean}
 */
clpp.ima.AdsTimeline.prototype.hasPreroll = function() {
};
/**
 * @extends {clpp.plugin.AbstractPlugin}
 * @implements {clpp.extern.PlayerPlugin}
 * @constructor
 */
clpp.ima.ImaPlugin = function() {
};
clpp.ima.ImaPlugin.Id;
/**
 * @return {boolean}
 */
clpp.ima.ImaPlugin.isSdkMissing = function() {
};
/**
 * @return {(Element|null)}
 */
clpp.ima.ImaPlugin.prototype.getAdContainer = function() {
};
/**
 * @return {(google.ima.AdDisplayContainer|null)}
 */
clpp.ima.ImaPlugin.prototype.getAdDisplayContainer = function() {
};
/**
 * @return {(google.ima.AdsLoader|null)}
 */
clpp.ima.ImaPlugin.prototype.getAdsLoader = function() {
};
/**
 * @const
 * @suppress {const,duplicate}
 */
clpp.log = {};
/** @enum {number} */
clpp.log.Level = {DEFAULT:1, NONE:2, ERROR:3, WARNING:4, INFO:5, DEBUG:6};
/**
 * @param {string=} tag
 * @constructor
 */
clpp.log.Logger = function(tag) {
};
/**
 * @param {string} tag
 * @return {(clpp.log.Logger|null)}
 */
clpp.log.Logger.prototype.createChild = function(tag) {
};
/**
 * @param {...*} message
 * @return {undefined}
 */
clpp.log.Logger.prototype.debug = function(message) {
};
/**
 * @param {...*} message
 * @return {undefined}
 */
clpp.log.Logger.prototype.error = function(message) {
};
/**
 * @param {...*} message
 * @return {undefined}
 */
clpp.log.Logger.prototype.info = function(message) {
};
/**
 * @param {number=} level
 * @param {...*} message
 * @return {undefined}
 */
clpp.log.Logger.prototype.log = function(level, message) {
};
/**
 * @param {...*} message
 * @return {undefined}
 */
clpp.log.Logger.prototype.warn = function(message) {
};
/**
 * @param {function(number, (Arguments|null)): ?} interceptor
 * @return {undefined}
 */
clpp.log.addInterceptor = function(interceptor) {
};
/**
 * @param {...*} message
 * @return {undefined}
 */
clpp.log.debug = function(message) {
};
/**
 * @param {...*} message
 * @return {undefined}
 */
clpp.log.error = function(message) {
};
/**
 * @return {number}
 */
clpp.log.getLogLevel = function() {
};
/**
 * @return {*}
 */
clpp.log.getLoggers = function() {
};
/**
 * @param {string=} tag
 * @return {number}
 */
clpp.log.getTagLevel = function(tag) {
};
/**
 * @param {string=} tag
 * @return {boolean}
 */
clpp.log.hasTagLevel = function(tag) {
};
/**
 * @param {...*} message
 * @return {undefined}
 */
clpp.log.info = function(message) {
};
/**
 * @param {function(number, (Arguments|null)): ?} interceptor
 * @return {undefined}
 */
clpp.log.removeInterceptor = function(interceptor) {
};
/**
 * @param {(number|string)} level
 * @return {undefined}
 */
clpp.log.setLogLevel = function(level) {
};
/**
 * @param {string} tag
 * @param {(number|string)} level
 * @return {undefined}
 */
clpp.log.setTagLevel = function(tag, level) {
};
/**
 * @param {...*} message
 * @return {undefined}
 */
clpp.log.warn = function(message) {
};
clpp.media;
clpp.media.SegmentIndex;
/**
 * @param {number} position
 * @param {number} durationDrift
 * @return {undefined}
 */
clpp.media.SegmentIndex.prototype.adjust = function(position, durationDrift) {
};
/**
 * @return {number}
 */
clpp.media.SegmentIndex.prototype.getDuration = function() {
};
clpp.mse;
clpp.mse.PlayerFactory;
/**
 * @param {{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string}} source
 * @return {boolean}
 */
clpp.mse.PlayerFactory.prototype.canPlay = function(source) {
};
/**
 * @return {(clpp.IPlayer|null)}
 */
clpp.mse.PlayerFactory.prototype.create = function() {
};
clpp.mse.TrackManager;
/**
 * @param {{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}} track
 * @return {(Promise<undefined>|null)}
 */
clpp.mse.TrackManager.prototype.addTextTrack = function(track) {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.mse.TrackManager.prototype.getAudioRendition = function() {
};
/**
 * @return {(clpp.Track|null)}
 */
clpp.mse.TrackManager.prototype.getAudioTrack = function() {
};
/**
 * @return {!Array<clpp.Track>}
 */
clpp.mse.TrackManager.prototype.getAudioTracks = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.mse.TrackManager.prototype.getLoadingAudioRendition = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.mse.TrackManager.prototype.getLoadingTextRendition = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.mse.TrackManager.prototype.getLoadingVideoRendition = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.mse.TrackManager.prototype.getTextRendition = function() {
};
/**
 * @return {(clpp.Track|null)}
 */
clpp.mse.TrackManager.prototype.getTextTrack = function() {
};
/**
 * @return {!Array<clpp.Track>}
 */
clpp.mse.TrackManager.prototype.getTextTracks = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.mse.TrackManager.prototype.getVideoRendition = function() {
};
/**
 * @return {(clpp.Track|null)}
 */
clpp.mse.TrackManager.prototype.getVideoTrack = function() {
};
/**
 * @return {!Array<clpp.Track>}
 */
clpp.mse.TrackManager.prototype.getVideoTracks = function() {
};
/**
 * @return {boolean}
 */
clpp.mse.TrackManager.prototype.isAbrEnabled = function() {
};
/**
 * @param {(clpp.Rendition|null)} rendition
 * @param {boolean=} clearBuffer
 * @return {undefined}
 */
clpp.mse.TrackManager.prototype.setAudioRendition = function(rendition, clearBuffer) {
};
/**
 * @param {(clpp.Track|null)} track
 * @return {undefined}
 */
clpp.mse.TrackManager.prototype.setAudioTrack = function(track) {
};
/**
 * @param {(clpp.Rendition|null)} rendition
 * @param {boolean=} clearBuffer
 * @return {undefined}
 */
clpp.mse.TrackManager.prototype.setTextRendition = function(rendition, clearBuffer) {
};
/**
 * @param {(clpp.Track|null)} track
 * @return {undefined}
 */
clpp.mse.TrackManager.prototype.setTextTrack = function(track) {
};
/**
 * @param {(clpp.Rendition|null)} rendition
 * @param {boolean=} clearBuffer
 * @return {undefined}
 */
clpp.mse.TrackManager.prototype.setVideoRendition = function(rendition, clearBuffer) {
};
/**
 * @param {(clpp.Track|null)} track
 * @return {undefined}
 */
clpp.mse.TrackManager.prototype.setVideoTrack = function(track) {
};
clpp.mse.text;
clpp.mse.text.SingleNativeTextDisplayerFactory;
/**
 * @param {(clpp.IPlayer|null)} player
 * @return {(clpp.ITextDisplayer|null)}
 */
clpp.mse.text.SingleNativeTextDisplayerFactory.prototype.create = function(player) {
};
/**
 * @param {{abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), conviva: (undefined|{customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), enableAdInsights: boolean, serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, offlineId: (string|undefined), preferredDrmSystem: (string|undefined)}), enableEnhancedSubtitleManager: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: boolean, availabilityWindowOverride: number, clockSyncUri: string, ignoreDrmInfo: boolean, liveRefreshPeriod: (number|undefined), xlinkFailGracefully: boolean}, muted: (boolean|undefined), preferredAudioChannelCount: number, preferredAudioLanguage: string, preferredAudioRole: string, preferredTextLanguage: string, preferredTextRole: string, remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, source: (Array<(string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string})>|null|string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string}), startTime: (null|number), streaming: {alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, durationBackoff: number, failureCallback: (function(!clpp.Error): ?|undefined), forceNativeTS: boolean, ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, rebufferingGoal: number, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), youbora: (Object<string,*>|null|undefined)}} config
 * @return {boolean}
 */
clpp.mse.text.SingleNativeTextDisplayerFactory.prototype.isSupported = function(config) {
};
clpp.mse.utils;
clpp.mse.utils.Dom;
/**
 * @param {!Node} original
 * @return {!HTMLElement}
 * @this {(typeof clpp.mse.utils.Dom)}
 */
clpp.mse.utils.Dom.asHTMLElement = function(original) {
};
/**
 * @param {!Node} original
 * @return {!HTMLMediaElement}
 * @this {(typeof clpp.mse.utils.Dom)}
 */
clpp.mse.utils.Dom.asHTMLMediaElement = function(original) {
};
/**
 * @param {string} tagName
 * @return {!HTMLElement}
 * @this {(typeof clpp.mse.utils.Dom)}
 */
clpp.mse.utils.Dom.createHTMLElement = function(tagName) {
};
/**
 * @return {!HTMLVideoElement}
 * @this {(typeof clpp.mse.utils.Dom)}
 */
clpp.mse.utils.Dom.createVideoElement = function() {
};
/**
 * @param {!Element} element
 * @return {undefined}
 * @this {(typeof clpp.mse.utils.Dom)}
 */
clpp.mse.utils.Dom.removeAllChildren = function(element) {
};
clpp.name;
clpp.native;
clpp.native.PlayerFactory;
/**
 * @param {{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string}} source
 * @return {boolean}
 */
clpp.native.PlayerFactory.prototype.canPlay = function(source) {
};
/**
 * @return {(clpp.IPlayer|null)}
 */
clpp.native.PlayerFactory.prototype.create = function() {
};
clpp.native.TrackManager;
/**
 * @param {{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}} track
 * @return {(Promise<undefined>|null)}
 */
clpp.native.TrackManager.prototype.addTextTrack = function(track) {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.native.TrackManager.prototype.getAudioRendition = function() {
};
/**
 * @return {(clpp.Track|null)}
 */
clpp.native.TrackManager.prototype.getAudioTrack = function() {
};
/**
 * @return {!Array<clpp.Track>}
 */
clpp.native.TrackManager.prototype.getAudioTracks = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.native.TrackManager.prototype.getLoadingAudioRendition = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.native.TrackManager.prototype.getLoadingTextRendition = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.native.TrackManager.prototype.getLoadingVideoRendition = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.native.TrackManager.prototype.getTextRendition = function() {
};
/**
 * @return {(clpp.Track|null)}
 */
clpp.native.TrackManager.prototype.getTextTrack = function() {
};
/**
 * @return {!Array<clpp.Track>}
 */
clpp.native.TrackManager.prototype.getTextTracks = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.native.TrackManager.prototype.getVideoRendition = function() {
};
/**
 * @return {(clpp.Track|null)}
 */
clpp.native.TrackManager.prototype.getVideoTrack = function() {
};
/**
 * @return {!Array<clpp.Track>}
 */
clpp.native.TrackManager.prototype.getVideoTracks = function() {
};
/**
 * @return {boolean}
 */
clpp.native.TrackManager.prototype.isAbrEnabled = function() {
};
/**
 * @param {(clpp.Rendition|null)} rendition
 * @param {boolean=} clearBuffer
 * @return {undefined}
 */
clpp.native.TrackManager.prototype.setAudioRendition = function(rendition, clearBuffer) {
};
/**
 * @param {(clpp.Track|null)} track
 * @return {undefined}
 */
clpp.native.TrackManager.prototype.setAudioTrack = function(track) {
};
/**
 * @param {(clpp.Rendition|null)} rendition
 * @param {boolean=} clearBuffer
 * @return {undefined}
 */
clpp.native.TrackManager.prototype.setTextRendition = function(rendition, clearBuffer) {
};
/**
 * @param {(clpp.Track|null)} track
 * @return {undefined}
 */
clpp.native.TrackManager.prototype.setTextTrack = function(track) {
};
/**
 * @param {(clpp.Rendition|null)} rendition
 * @param {boolean=} clearBuffer
 * @return {undefined}
 */
clpp.native.TrackManager.prototype.setVideoRendition = function(rendition, clearBuffer) {
};
/**
 * @param {(clpp.Track|null)} track
 * @return {undefined}
 */
clpp.native.TrackManager.prototype.setVideoTrack = function(track) {
};
clpp.net;
clpp.net.NetworkEngine;
/**
 * @param {function({allowCrossSiteCredentials: boolean, backoffFactor: number, baseDelay: number, body: (ArrayBuffer|null), bytesLoaded: number, bytesRemaining: number, bytesTotal: number, contentType: (null|string), currentAttempt: number, endTime: (null|number), fuzzFactor: number, headers: !Object<string,string>, keyInfo: (undefined|{iv: (Uint8Array|null), method: string, url: string}), licenseRequestType: (null|string), maxAttempts: number, method: string, onFragment: (function({count: number, data: !DataView, end: number, length: number, start: number}): (Promise|null)|null), onProgress: function(number, number): ?, requestModifiers: (Array<!Function>|null), responseModifiers: (Array<function({data: !ArrayBuffer, fromCache: (boolean|undefined), headers: !Object<string,string>, request: (?|undefined), status: (number|undefined), timeMs: (number|undefined), uri: string}): (Promise|null|undefined)>|null), startTime: (null|number), timeout: number, timescale: (null|number), type: number, uriIndex: number, uris: !Array<string>}): (Promise<{allowCrossSiteCredentials: boolean, backoffFactor: number, baseDelay: number, body: (ArrayBuffer|null), bytesLoaded: number, bytesRemaining: number, bytesTotal: number, contentType: (null|string), currentAttempt: number, endTime: (null|number), fuzzFactor: number, headers: !Object<string,string>, keyInfo: (undefined|{iv: (Uint8Array|null), method: string, url: string}), licenseRequestType: (null|string), maxAttempts: number, method: string, onFragment: (function({count: number, data: !DataView, end: number, length: number, start: number}): (Promise|null)|null), onProgress: function(number, number): ?, requestModifiers: (Array<!Function>|null), responseModifiers: (Array<function({data: !ArrayBuffer, fromCache: (boolean|undefined), headers: !Object<string,string>, request: (?|undefined), status: (number|undefined), timeMs: (number|undefined), uri: string}): (Promise|null|undefined)>|null), startTime: (null|number), timeout: number, timescale: (null|number), type: number, uriIndex: number, uris: !Array<string>}>|null|undefined)} callback
 * @return {undefined}
 */
clpp.net.NetworkEngine.prototype.addRequestModifier = function(callback) {
};
/**
 * @param {function({data: !ArrayBuffer, fromCache: (boolean|undefined), headers: !Object<string,string>, request: (undefined|{allowCrossSiteCredentials: boolean, backoffFactor: number, baseDelay: number, body: (ArrayBuffer|null), bytesLoaded: number, bytesRemaining: number, bytesTotal: number, contentType: (null|string), currentAttempt: number, endTime: (null|number), fuzzFactor: number, headers: !Object<string,string>, keyInfo: (undefined|{iv: (Uint8Array|null), method: string, url: string}), licenseRequestType: (null|string), maxAttempts: number, method: string, onFragment: (function({count: number, data: !DataView, end: number, length: number, start: number}): (Promise|null)|null), onProgress: function(number, number): ?, requestModifiers: (Array<function(?): (Promise<?>|null|undefined)>|null), responseModifiers: (Array<!Function>|null), startTime: (null|number), timeout: number, timescale: (null|number), type: number, uriIndex: number, uris: !Array<string>}), status: (number|undefined), timeMs: (number|undefined), uri: string}): (Promise|null|undefined)} callback
 * @return {undefined}
 */
clpp.net.NetworkEngine.prototype.addResponseModifier = function(callback) {
};
/**
 * @param {{allowCrossSiteCredentials: boolean, backoffFactor: number, baseDelay: number, body: (ArrayBuffer|null), bytesLoaded: number, bytesRemaining: number, bytesTotal: number, contentType: (null|string), currentAttempt: number, endTime: (null|number), fuzzFactor: number, headers: !Object<string,string>, keyInfo: (undefined|{iv: (Uint8Array|null), method: string, url: string}), licenseRequestType: (null|string), maxAttempts: number, method: string, onFragment: (function({count: number, data: !DataView, end: number, length: number, start: number}): (Promise|null)|null), onProgress: function(number, number): ?, requestModifiers: (Array<function(?): (Promise<?>|null|undefined)>|null), responseModifiers: (Array<function({data: !ArrayBuffer, fromCache: (boolean|undefined), headers: !Object<string,string>, request: (?|undefined), status: (number|undefined), timeMs: (number|undefined), uri: string}): (Promise|null|undefined)>|null), startTime: (null|number), timeout: number, timescale: (null|number), type: number, uriIndex: number, uris: !Array<string>}} request
 * @return {!clpp.net.PendingRequest}
 */
clpp.net.NetworkEngine.prototype.fetch = function(request) {
};
/**
 * @param {function({allowCrossSiteCredentials: boolean, backoffFactor: number, baseDelay: number, body: (ArrayBuffer|null), bytesLoaded: number, bytesRemaining: number, bytesTotal: number, contentType: (null|string), currentAttempt: number, endTime: (null|number), fuzzFactor: number, headers: !Object<string,string>, keyInfo: (undefined|{iv: (Uint8Array|null), method: string, url: string}), licenseRequestType: (null|string), maxAttempts: number, method: string, onFragment: (function({count: number, data: !DataView, end: number, length: number, start: number}): (Promise|null)|null), onProgress: function(number, number): ?, requestModifiers: (Array<!Function>|null), responseModifiers: (Array<function({data: !ArrayBuffer, fromCache: (boolean|undefined), headers: !Object<string,string>, request: (?|undefined), status: (number|undefined), timeMs: (number|undefined), uri: string}): (Promise|null|undefined)>|null), startTime: (null|number), timeout: number, timescale: (null|number), type: number, uriIndex: number, uris: !Array<string>}): (Promise<{allowCrossSiteCredentials: boolean, backoffFactor: number, baseDelay: number, body: (ArrayBuffer|null), bytesLoaded: number, bytesRemaining: number, bytesTotal: number, contentType: (null|string), currentAttempt: number, endTime: (null|number), fuzzFactor: number, headers: !Object<string,string>, keyInfo: (undefined|{iv: (Uint8Array|null), method: string, url: string}), licenseRequestType: (null|string), maxAttempts: number, method: string, onFragment: (function({count: number, data: !DataView, end: number, length: number, start: number}): (Promise|null)|null), onProgress: function(number, number): ?, requestModifiers: (Array<!Function>|null), responseModifiers: (Array<function({data: !ArrayBuffer, fromCache: (boolean|undefined), headers: !Object<string,string>, request: (?|undefined), status: (number|undefined), timeMs: (number|undefined), uri: string}): (Promise|null|undefined)>|null), startTime: (null|number), timeout: number, timescale: (null|number), type: number, uriIndex: number, uris: !Array<string>}>|null|undefined)} callback
 * @return {undefined}
 */
clpp.net.NetworkEngine.prototype.removeRequestModifier = function(callback) {
};
/**
 * @param {function({data: !ArrayBuffer, fromCache: (boolean|undefined), headers: !Object<string,string>, request: (undefined|{allowCrossSiteCredentials: boolean, backoffFactor: number, baseDelay: number, body: (ArrayBuffer|null), bytesLoaded: number, bytesRemaining: number, bytesTotal: number, contentType: (null|string), currentAttempt: number, endTime: (null|number), fuzzFactor: number, headers: !Object<string,string>, keyInfo: (undefined|{iv: (Uint8Array|null), method: string, url: string}), licenseRequestType: (null|string), maxAttempts: number, method: string, onFragment: (function({count: number, data: !DataView, end: number, length: number, start: number}): (Promise|null)|null), onProgress: function(number, number): ?, requestModifiers: (Array<function(?): (Promise<?>|null|undefined)>|null), responseModifiers: (Array<!Function>|null), startTime: (null|number), timeout: number, timescale: (null|number), type: number, uriIndex: number, uris: !Array<string>}), status: (number|undefined), timeMs: (number|undefined), uri: string}): (Promise|null|undefined)} callback
 * @return {undefined}
 */
clpp.net.NetworkEngine.prototype.removeResponseModifier = function(callback) {
};
/** @enum {number} */
clpp.net.RequestType = {MANIFEST:1, SEGMENT:2, LICENSE:3, APP:4, TIMING:5, OTHER:6};
/**
 * @param {(Object|null|string)} source
 * @param {{backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}=} opt_attemptParamters
 * @return {{allowCrossSiteCredentials: boolean, backoffFactor: number, baseDelay: number, body: (ArrayBuffer|null), bytesLoaded: number, bytesRemaining: number, bytesTotal: number, contentType: (null|string), currentAttempt: number, endTime: (null|number), fuzzFactor: number, headers: !Object<string,string>, keyInfo: (undefined|{iv: (Uint8Array|null), method: string, url: string}), licenseRequestType: (null|string), maxAttempts: number, method: string, onFragment: (function({count: number, data: !DataView, end: number, length: number, start: number}): (Promise|null)|null), onProgress: function(number, number): ?, requestModifiers: (Array<function(?): (Promise<?>|null|undefined)>|null), responseModifiers: (Array<function({data: !ArrayBuffer, fromCache: (boolean|undefined), headers: !Object<string,string>, request: (?|undefined), status: (number|undefined), timeMs: (number|undefined), uri: string}): (Promise|null|undefined)>|null), startTime: (null|number), timeout: number, timescale: (null|number), type: number, uriIndex: number, uris: !Array<string>}}
 */
clpp.net.makeRequest = function(source, opt_attemptParamters) {
};
/**
 * @const
 * @suppress {const,duplicate}
 */
clpp.npaw = {};
/**
 * @extends {clpp.plugin.AbstractPlugin}
 * @implements {clpp.extern.PlayerPlugin}
 * @constructor
 */
clpp.npaw.YouboraPlugin = function() {
};
clpp.npaw.YouboraPlugin.Id;
/**
 * @const
 * @suppress {const,duplicate}
 */
clpp.onboard = {};
/**
 * @extends {clpp.AbstractComponent}
 * @implements {clpp.IComponent}
 * @constructor
 */
clpp.onboard.OnboardComponent = function() {
};
/**
 * @param {string} name
 * @param {{baseUrl: string, fairplayUrl: string, playreadyUrl: string, widevineUrl: string}} config
 * @return {undefined}
 */
clpp.onboard.register = function(name, config) {
};
/**
 * @const
 * @suppress {const,duplicate}
 */
clpp.persistent = {};
/**
 * @extends {clpp.AbstractComponent}
 * @implements {clpp.IComponent}
 * @constructor
 */
clpp.persistent.PersistentLicenseComponent = function() {
};
/**
 * @param {(string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string})} source
 * @param {{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, offlineId: (string|undefined), preferredDrmSystem: (string|undefined)}} drmConfig
 * @param {...function(new:clpp.IComponent): ?} opt_components
 * @return {!Promise<undefined>}
 */
clpp.persistent.fetchLicense = function(source, drmConfig, opt_components) {
};
/**
 * @param {string} offlineId
 * @return {!Promise}
 */
clpp.persistent.removeLicense = function(offlineId) {
};
/**
 * @param {!clpp.persistent.ISessionStorage} storageImpl
 * @return {undefined}
 */
clpp.persistent.useStorage = function(storageImpl) {
};
clpp.polyfill;
/**
 * @return {undefined}
 */
clpp.polyfill.installAll = function() {
};
/**
 * @param {function(): ?} polyfill
 * @param {number=} priority
 * @return {undefined}
 */
clpp.polyfill.register = function(polyfill, priority) {
};
/**
 * @const
 * @suppress {const,duplicate}
 */
clpp.smooth = {};
/**
 * @extends {clpp.AbstractComponent}
 * @implements {clpp.IComponent}
 * @constructor
 */
clpp.smooth.SmoothComponent = function() {
};
clpp.text;
clpp.text.AbstractTextDisplayer;
/**
 * @return {string}
 */
clpp.text.AbstractTextDisplayer.prototype.getBackgroundColor = function() {
};
/**
 * @return {string}
 */
clpp.text.AbstractTextDisplayer.prototype.getEdgeColor = function() {
};
/**
 * @return {string}
 */
clpp.text.AbstractTextDisplayer.prototype.getEdgeType = function() {
};
/**
 * @return {string}
 */
clpp.text.AbstractTextDisplayer.prototype.getFontColor = function() {
};
/**
 * @return {string}
 */
clpp.text.AbstractTextDisplayer.prototype.getFontFamily = function() {
};
/**
 * @return {string}
 */
clpp.text.AbstractTextDisplayer.prototype.getFontSize = function() {
};
/**
 * @return {string}
 */
clpp.text.AbstractTextDisplayer.prototype.getWindowColor = function() {
};
/**
 * @param {string} val
 * @return {?}
 */
clpp.text.AbstractTextDisplayer.prototype.setBackgroundColor = function(val) {
};
/**
 * @param {string} val
 * @return {?}
 */
clpp.text.AbstractTextDisplayer.prototype.setEdgeColor = function(val) {
};
/**
 * @param {string} val
 * @return {?}
 */
clpp.text.AbstractTextDisplayer.prototype.setEdgeType = function(val) {
};
/**
 * @param {string} val
 * @return {?}
 */
clpp.text.AbstractTextDisplayer.prototype.setFontColor = function(val) {
};
/**
 * @param {string} val
 * @return {?}
 */
clpp.text.AbstractTextDisplayer.prototype.setFontFamily = function(val) {
};
/**
 * @param {string} val
 * @return {?}
 */
clpp.text.AbstractTextDisplayer.prototype.setFontSize = function(val) {
};
/**
 * @param {string} val
 * @return {?}
 */
clpp.text.AbstractTextDisplayer.prototype.setWindowColor = function(val) {
};
/**
 * @param {number} startTime
 * @param {number} endTime
 * @param {string} payload
 * @implements {clpp.ICue}
 * @constructor
 */
clpp.text.Cue = function(startTime, endTime, payload) {
};
/** @enum {string} */
clpp.text.Cue.direction = {HORIZONTAL_LEFT_TO_RIGHT:1, HORIZONTAL_RIGHT_TO_LEFT:2};
/** @enum {string} */
clpp.text.Cue.displayAlign = {BEFORE:1, CENTER:2, AFTER:3};
/** @enum {string} */
clpp.text.Cue.fontStyle = {NORMAL:1, ITALIC:2, OBLIQUE:3};
/** @enum {number} */
clpp.text.Cue.fontWeight = {NORMAL:1, BOLD:2};
/** @enum {string} */
clpp.text.Cue.lineAlign = {CENTER:1, START:2, END:3};
/** @enum {number} */
clpp.text.Cue.lineInterpretation = {LINE_NUMBER:1, PERCENTAGE:2};
/** @enum {string} */
clpp.text.Cue.positionAlign = {LEFT:1, RIGHT:2, CENTER:3, AUTO:4};
/** @enum {string} */
clpp.text.Cue.textAlign = {LEFT:1, RIGHT:2, CENTER:3, START:4, END:5};
/** @enum {string} */
clpp.text.Cue.textDecoration = {UNDERLINE:1, LINE_THROUGH:2, OVERLINE:3};
/** @enum {string} */
clpp.text.Cue.writingMode = {HORIZONTAL_TOP_TO_BOTTOM:1, VERTICAL_LEFT_TO_RIGHT:2, VERTICAL_RIGHT_TO_LEFT:3};
/**
 * @implements {clpp.ICueRegion}
 * @constructor
 */
clpp.text.CueRegion = function() {
};
/** @enum {string} */
clpp.text.CueRegion.scrollMode = {NONE:1, UP:2};
/** @enum {number} */
clpp.text.CueRegion.units = {PX:1, PERCENTAGE:2, LINES:3};
/** @enum {string} */
clpp.text.EdgeType = {NONE:1, RAISED:2, DEPRESSED:3, DROP_SHADOW:4, UNIFORM:5};
clpp.text.HtmlTextDisplayerFactory;
/**
 * @param {(clpp.IPlayer|null)} player
 * @return {(clpp.ITextDisplayer|null)}
 */
clpp.text.HtmlTextDisplayerFactory.prototype.create = function(player) {
};
/**
 * @param {{abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), conviva: (undefined|{customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), enableAdInsights: boolean, serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, offlineId: (string|undefined), preferredDrmSystem: (string|undefined)}), enableEnhancedSubtitleManager: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: boolean, availabilityWindowOverride: number, clockSyncUri: string, ignoreDrmInfo: boolean, liveRefreshPeriod: (number|undefined), xlinkFailGracefully: boolean}, muted: (boolean|undefined), preferredAudioChannelCount: number, preferredAudioLanguage: string, preferredAudioRole: string, preferredTextLanguage: string, preferredTextRole: string, remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, source: (Array<(string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string})>|null|string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string}), startTime: (null|number), streaming: {alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, durationBackoff: number, failureCallback: (function(!clpp.Error): ?|undefined), forceNativeTS: boolean, ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, rebufferingGoal: number, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), youbora: (Object<string,*>|null|undefined)}} config
 * @return {boolean}
 */
clpp.text.HtmlTextDisplayerFactory.prototype.isSupported = function(config) {
};
clpp.text.NativeTextDisplayerFactory;
/**
 * @param {(clpp.IPlayer|null)} player
 * @return {(clpp.ITextDisplayer|null)}
 */
clpp.text.NativeTextDisplayerFactory.prototype.create = function(player) {
};
/**
 * @param {{abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), conviva: (undefined|{customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), enableAdInsights: boolean, serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, offlineId: (string|undefined), preferredDrmSystem: (string|undefined)}), enableEnhancedSubtitleManager: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: boolean, availabilityWindowOverride: number, clockSyncUri: string, ignoreDrmInfo: boolean, liveRefreshPeriod: (number|undefined), xlinkFailGracefully: boolean}, muted: (boolean|undefined), preferredAudioChannelCount: number, preferredAudioLanguage: string, preferredAudioRole: string, preferredTextLanguage: string, preferredTextRole: string, remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, source: (Array<(string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string})>|null|string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string}), startTime: (null|number), streaming: {alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, durationBackoff: number, failureCallback: (function(!clpp.Error): ?|undefined), forceNativeTS: boolean, ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, rebufferingGoal: number, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), youbora: (Object<string,*>|null|undefined)}} config
 * @return {boolean}
 */
clpp.text.NativeTextDisplayerFactory.prototype.isSupported = function(config) {
};
/**
 * @interface
 */
clpp.text.TextDisplayerFactory = function() {
};
/** @enum {string} */
clpp.text.TextDisplayerFactory.Type = {HTML:1, NATIVE:2, SINGLE_NATIVE:3};
/**
 * @param {(clpp.IPlayer|null)} player
 * @return {(clpp.ITextDisplayer|null)}
 */
clpp.text.TextDisplayerFactory.prototype.create = function(player) {
};
/**
 * @param {{abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), conviva: (undefined|{customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), enableAdInsights: boolean, serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, offlineId: (string|undefined), preferredDrmSystem: (string|undefined)}), enableEnhancedSubtitleManager: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: boolean, availabilityWindowOverride: number, clockSyncUri: string, ignoreDrmInfo: boolean, liveRefreshPeriod: (number|undefined), xlinkFailGracefully: boolean}, muted: (boolean|undefined), preferredAudioChannelCount: number, preferredAudioLanguage: string, preferredAudioRole: string, preferredTextLanguage: string, preferredTextRole: string, remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, source: (Array<(string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string})>|null|string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string}), startTime: (null|number), streaming: {alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, durationBackoff: number, failureCallback: (function(!clpp.Error): ?|undefined), forceNativeTS: boolean, ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, rebufferingGoal: number, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), youbora: (Object<string,*>|null|undefined)}} config
 * @return {boolean}
 */
clpp.text.TextDisplayerFactory.prototype.isSupported = function(config) {
};
clpp.text.TextEngine;
/**
 * @param {!Array<clpp.text.Cue>} cues
 * @return {undefined}
 */
clpp.text.TextEngine.prototype.appendCues = function(cues) {
};
/**
 * @param {string} id
 * @param {number} bufferEndTime
 * @return {undefined}
 */
clpp.text.TextEngine.prototype.setSelectedClosedCaptionId = function(id, bufferEndTime) {
};
/**
 * @param {string} mimeType
 * @param {function(new:clpp.ITextParser): ?} plugin
 * @return {undefined}
 */
clpp.text.TextEngine.registerParser = function(mimeType, plugin) {
};
/**
 * @param {string} mimeType
 * @return {undefined}
 */
clpp.text.TextEngine.unregisterParser = function(mimeType) {
};
/**
 * @const
 * @suppress {const,duplicate}
 */
clpp.thumbnails = {};
/**
 * @param {string} imageUrl
 * @param {number} time
 * @param {number} duration
 * @param {number=} opt_x
 * @param {number=} opt_y
 * @param {number=} opt_width
 * @param {number=} opt_height
 * @param {number=} opt_cols
 * @param {number=} opt_rows
 * @param {number=} opt_gridCol
 * @param {number=} opt_gridRow
 * @param {(HTMLImageElement|null)=} imageElement
 * @constructor
 */
clpp.thumbnails.Thumbnail = function(imageUrl, time, duration, opt_x, opt_y, opt_width, opt_height, opt_cols, opt_rows, opt_gridCol, opt_gridRow, imageElement) {
};
/**
 * @param {number=} opt_width
 * @param {number=} opt_height
 * @return {(HTMLElement|null)}
 */
clpp.thumbnails.Thumbnail.prototype.element = function(opt_width, opt_height) {
};
/**
 * @return {(Promise<(clpp.thumbnails.Thumbnail|null)>|null)}
 */
clpp.thumbnails.Thumbnail.prototype.load = function() {
};
/**
 * @return {(HTMLImageElement|null)}
 */
clpp.thumbnails.Thumbnail.prototype.raw = function() {
};
/**
 * @implements {clpp.extern.PlayerPlugin}
 * @constructor
 */
clpp.thumbnails.ThumbnailsPlugin = function() {
};
clpp.thumbnails.ThumbnailsPlugin.Id;
/**
 * @param {number} position
 * @return {(Promise<(clpp.thumbnails.Thumbnail|null)>|null)}
 */
clpp.thumbnails.ThumbnailsPlugin.prototype.get = function(position) {
};
clpp.tizen;
clpp.tizen.Player;
/**
 * @return {!clpp.net.NetworkEngine}
 */
clpp.tizen.Player.prototype.getNetworkEngine = function() {
};
/**
 * @return {(clpp.ITextDisplayer|null)}
 */
clpp.tizen.Player.prototype.getTextDisplayer = function() {
};
/**
 * @param {!clpp.net.NetworkEngine} engine
 * @return {?}
 */
clpp.tizen.Player.prototype.setNetworkEngine = function(engine) {
};
clpp.tizen.PlayerFactory;
/**
 * @param {{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string}} source
 * @return {boolean}
 */
clpp.tizen.PlayerFactory.prototype.canPlay = function(source) {
};
/**
 * @return {(clpp.IPlayer|null)}
 */
clpp.tizen.PlayerFactory.prototype.create = function() {
};
/**
 * @extends {clpp.AbstractComponent}
 * @implements {clpp.IComponent}
 * @constructor
 */
clpp.tizen.TizenComponent = function() {
};
clpp.tizen.TrackManager;
/**
 * @param {{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}} track
 * @return {(Promise<undefined>|null)}
 */
clpp.tizen.TrackManager.prototype.addTextTrack = function(track) {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.tizen.TrackManager.prototype.getAudioRendition = function() {
};
/**
 * @return {(clpp.Track|null)}
 */
clpp.tizen.TrackManager.prototype.getAudioTrack = function() {
};
/**
 * @return {!Array<clpp.Track>}
 */
clpp.tizen.TrackManager.prototype.getAudioTracks = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.tizen.TrackManager.prototype.getLoadingAudioRendition = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.tizen.TrackManager.prototype.getLoadingTextRendition = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.tizen.TrackManager.prototype.getLoadingVideoRendition = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.tizen.TrackManager.prototype.getTextRendition = function() {
};
/**
 * @return {(clpp.Track|null)}
 */
clpp.tizen.TrackManager.prototype.getTextTrack = function() {
};
/**
 * @return {!Array<clpp.Track>}
 */
clpp.tizen.TrackManager.prototype.getTextTracks = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.tizen.TrackManager.prototype.getVideoRendition = function() {
};
/**
 * @return {(clpp.Track|null)}
 */
clpp.tizen.TrackManager.prototype.getVideoTrack = function() {
};
/**
 * @return {!Array<clpp.Track>}
 */
clpp.tizen.TrackManager.prototype.getVideoTracks = function() {
};
/**
 * @return {boolean}
 */
clpp.tizen.TrackManager.prototype.isAbrEnabled = function() {
};
/**
 * @param {(clpp.Rendition|null)} rendition
 * @param {boolean=} clearBuffer
 * @return {undefined}
 */
clpp.tizen.TrackManager.prototype.setAudioRendition = function(rendition, clearBuffer) {
};
/**
 * @param {(clpp.Track|null)} track
 * @return {undefined}
 */
clpp.tizen.TrackManager.prototype.setAudioTrack = function(track) {
};
/**
 * @param {(clpp.Rendition|null)} rendition
 * @param {boolean=} clearBuffer
 * @return {undefined}
 */
clpp.tizen.TrackManager.prototype.setTextRendition = function(rendition, clearBuffer) {
};
/**
 * @param {(clpp.Track|null)} track
 * @return {undefined}
 */
clpp.tizen.TrackManager.prototype.setTextTrack = function(track) {
};
/**
 * @param {(clpp.Rendition|null)} rendition
 * @param {boolean=} clearBuffer
 * @return {undefined}
 */
clpp.tizen.TrackManager.prototype.setVideoRendition = function(rendition, clearBuffer) {
};
/**
 * @param {(clpp.Track|null)} track
 * @return {undefined}
 */
clpp.tizen.TrackManager.prototype.setVideoTrack = function(track) {
};
clpp.utils;
clpp.utils.Abortable;
/**
 * @return {!clpp.utils.Abortable}
 * @this {(typeof clpp.utils.Abortable)}
 */
clpp.utils.Abortable.aborted = function() {
};
/**
 * @param {(!Function|undefined)} onSuccess
 * @param {function(*): ?=} onError
 * @return {!clpp.utils.Abortable<U>}
 * @template U
 */
clpp.utils.Abortable.prototype.chain = function(onSuccess, onError) {
};
/**
 * @constructor
 */
clpp.utils.Mp4Parser = function() {
};
/**
 * @param {function(!Uint8Array): ?} callback
 * @return {function({flags: (null|number), headerSize: number, parser: !clpp.utils.Mp4Parser, partialOkay: boolean, reader: !clpp.utils.dataview.DataViewReader, size: number, start: number, version: (null|number)}): ?}
 */
clpp.utils.Mp4Parser.allData = function(callback) {
};
/**
 * @param {{flags: (null|number), headerSize: number, parser: !clpp.utils.Mp4Parser, partialOkay: boolean, reader: !clpp.utils.dataview.DataViewReader, size: number, start: number, version: (null|number)}} box
 * @return {undefined}
 */
clpp.utils.Mp4Parser.children = function(box) {
};
/**
 * @param {string} type
 * @param {function({flags: (null|number), headerSize: number, parser: !clpp.utils.Mp4Parser, partialOkay: boolean, reader: !clpp.utils.dataview.DataViewReader, size: number, start: number, version: (null|number)}): ?} definition
 * @return {!clpp.utils.Mp4Parser}
 */
clpp.utils.Mp4Parser.prototype.box = function(type, definition) {
};
/**
 * @param {string} type
 * @param {function({flags: (null|number), headerSize: number, parser: !clpp.utils.Mp4Parser, partialOkay: boolean, reader: !clpp.utils.dataview.DataViewReader, size: number, start: number, version: (null|number)}): ?} definition
 * @return {!clpp.utils.Mp4Parser}
 */
clpp.utils.Mp4Parser.prototype.fullBox = function(type, definition) {
};
/**
 * @param {(ArrayBuffer|ArrayBufferView)} data
 * @param {boolean=} partialOkay
 * @return {undefined}
 */
clpp.utils.Mp4Parser.prototype.parse = function(data, partialOkay) {
};
/**
 * @param {number} absStart
 * @param {!clpp.utils.dataview.DataViewReader} reader
 * @param {boolean=} partialOkay
 * @return {undefined}
 */
clpp.utils.Mp4Parser.prototype.parseNext = function(absStart, reader, partialOkay) {
};
/**
 * @return {undefined}
 */
clpp.utils.Mp4Parser.prototype.stop = function() {
};
/**
 * @param {{flags: (null|number), headerSize: number, parser: !clpp.utils.Mp4Parser, partialOkay: boolean, reader: !clpp.utils.dataview.DataViewReader, size: number, start: number, version: (null|number)}} box
 * @return {undefined}
 */
clpp.utils.Mp4Parser.sampleDescription = function(box) {
};
/**
 * @param {number} type
 * @return {string}
 */
clpp.utils.Mp4Parser.typeToString = function(type) {
};
/**
 * @constructor
 */
clpp.utils.Platform = function() {
};
/**
 * @return {{browser: string, browserVersion: {build: (number|undefined), major: number, minor: (number|undefined), name: string, patch: (number|undefined)}, os: string, osVersion: {build: (number|undefined), major: number, minor: (number|undefined), name: string, patch: (number|undefined)}}}
 * @this {(typeof clpp.utils.Platform)}
 */
clpp.utils.Platform.getInfo = function() {
};
/**
 * @constructor
 */
clpp.utils.PlayerConfiguration = function() {
};
/**
 * @param {...*} configs
 * @return {{abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), conviva: (undefined|{customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), enableAdInsights: boolean, serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, offlineId: (string|undefined), preferredDrmSystem: (string|undefined)}), enableEnhancedSubtitleManager: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: boolean, availabilityWindowOverride: number, clockSyncUri: string, ignoreDrmInfo: boolean, liveRefreshPeriod: (number|undefined), xlinkFailGracefully: boolean}, muted: (boolean|undefined), preferredAudioChannelCount: number, preferredAudioLanguage: string, preferredAudioRole: string, preferredTextLanguage: string, preferredTextRole: string, remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, source: (Array<(string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string})>|null|string|{drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string), url: string}), startTime: (null|number), streaming: {alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, durationBackoff: number, failureCallback: (function(!clpp.Error): ?|undefined), forceNativeTS: boolean, ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, rebufferingGoal: number, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), youbora: (Object<string,*>|null|undefined)}}
 * @this {(typeof clpp.utils.PlayerConfiguration)}
 */
clpp.utils.PlayerConfiguration.create = function(configs) {
};
/**
 * @param {function(): ?} onTick
 * @constructor
 */
clpp.utils.Timer = function(onTick) {
};
/**
 * @return {undefined}
 */
clpp.utils.Timer.prototype.stop = function() {
};
/**
 * @param {number} seconds
 * @return {!clpp.utils.Timer}
 */
clpp.utils.Timer.prototype.tickAfter = function(seconds) {
};
/**
 * @param {number} seconds
 * @return {!clpp.utils.Timer}
 */
clpp.utils.Timer.prototype.tickEvery = function(seconds) {
};
/**
 * @return {!clpp.utils.Timer}
 */
clpp.utils.Timer.prototype.tickNow = function() {
};
clpp.utils.Uint8ArrayUtils;
/**
 * @param {...(Uint8Array|null)} var_args
 * @return {!Uint8Array}
 * @this {(typeof clpp.utils.Uint8ArrayUtils)}
 */
clpp.utils.Uint8ArrayUtils.concat = function(var_args) {
};
/**
 * @param {(Uint8Array|null)} arr1
 * @param {(Uint8Array|null)} arr2
 * @return {boolean}
 * @this {(typeof clpp.utils.Uint8ArrayUtils)}
 */
clpp.utils.Uint8ArrayUtils.equal = function(arr1, arr2) {
};
/**
 * @param {string} str
 * @return {!Uint8Array}
 * @this {(typeof clpp.utils.Uint8ArrayUtils)}
 */
clpp.utils.Uint8ArrayUtils.fromBase64 = function(str) {
};
/**
 * @param {string} str
 * @return {!Uint8Array}
 * @this {(typeof clpp.utils.Uint8ArrayUtils)}
 */
clpp.utils.Uint8ArrayUtils.fromHex = function(str) {
};
/**
 * @param {!Uint8Array} arr
 * @param {boolean=} opt_padding
 * @return {string}
 * @this {(typeof clpp.utils.Uint8ArrayUtils)}
 */
clpp.utils.Uint8ArrayUtils.toBase64Url = function(arr, opt_padding) {
};
/**
 * @param {!Uint8Array} arr
 * @return {string}
 * @this {(typeof clpp.utils.Uint8ArrayUtils)}
 */
clpp.utils.Uint8ArrayUtils.toHex = function(arr) {
};
/**
 * @param {!Uint8Array} u8Arr
 * @return {string}
 * @this {(typeof clpp.utils.Uint8ArrayUtils)}
 */
clpp.utils.Uint8ArrayUtils.toStandardBase64 = function(u8Arr) {
};
clpp.utils.dataview;
clpp.utils.dataview.DataViewWriter;
/**
 * @param {number} position
 * @return {undefined}
 */
clpp.utils.dataview.DataViewWriter.prototype.seek = function(position) {
};
clpp.utils.media;
/**
 * @param {string} url
 * @return {(null|string)}
 */
clpp.utils.media.detectType = function(url) {
};
clpp.utils.obj;
/**
 * @param {T} item
 * @return {T}
 * @template T
 */
clpp.utils.obj.cloneItem = function(item) {
};
/**
 * @param {...*} varArgs
 * @return {(Object<?,*>|null)}
 */
clpp.utils.obj.merge = function(varArgs) {
};
clpp.utils.strings;
/**
 * @param {(number|string)} bps
 * @return {string}
 */
clpp.utils.strings.bitrateToString = function(bps) {
};
/**
 * @param {number} duration
 * @param {string=} opt_format
 * @return {string}
 */
clpp.utils.strings.durationToStirng = function(duration, opt_format) {
};
/**
 * @param {string} str
 * @param {string} query
 * @return {boolean}
 */
clpp.utils.strings.endsWith = function(str, query) {
};
/**
 * @param {string} base64String
 * @return {(Uint8Array|null)}
 */
clpp.utils.strings.fromBase64 = function(base64String) {
};
/**
 * @param {(ArrayBuffer|ArrayBufferView|null|string)} sourceData
 * @param {boolean=} escapeStr
 * @return {string}
 */
clpp.utils.strings.fromBytesAutoDetect = function(sourceData, escapeStr) {
};
/**
 * @param {(ArrayBuffer|ArrayBufferView|null)} data
 * @return {string}
 */
clpp.utils.strings.fromUtf8 = function(data) {
};
/**
 * @param {string} str
 * @return {number}
 */
clpp.utils.strings.hashCode = function(str) {
};
/**
 * @param {string} str
 * @param {string} query
 * @return {boolean}
 */
clpp.utils.strings.startsWith = function(str, query) {
};
/**
 * @param {(ArrayBuffer|ArrayBufferView|null)} data
 * @return {string}
 */
clpp.utils.strings.toBase64 = function(data) {
};
/**
 * @param {string} s
 * @param {number=} opt_size
 * @return {!ArrayBuffer}
 */
clpp.utils.strings.toByteArray = function(s, opt_size) {
};
/**
 * @param {string} str
 * @param {boolean} littleEndian
 * @return {!ArrayBuffer}
 */
clpp.utils.strings.toUtf16 = function(str, littleEndian) {
};
/**
 * @param {string} str
 * @return {!Uint8Array}
 */
clpp.utils.strings.toUtf8 = function(str) {
};
clpp.utils.url;
/**
 * @param {(Object<string,string>|null)} queryParams
 * @param {boolean=} opt_ignoreQuestionMark
 * @param {(Array<string>|null)=} opt_keys
 * @return {string}
 */
clpp.utils.url.queryString = function(queryParams, opt_ignoreQuestionMark, opt_keys) {
};
clpp.version;
/**
 * @const
 * @suppress {const,duplicate}
 */
clpp.vimond = {};
/**
 * @extends {clpp.plugin.AbstractPlugin}
 * @implements {clpp.extern.PlayerPlugin}
 * @constructor
 */
clpp.vimond.VimondPlugin = function() {
};
clpp.vimond.VimondPlugin.Id;
/**
 * @param {string} authToken
 * @return {undefined}
 */
clpp.vimond.VimondPlugin.prototype.updateAuthToken = function(authToken) {
};
