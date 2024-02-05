
var root = new Vue({
    el: "#root",
    data: {
        assetId: "",
        id_count: 1,
        config: config,
        showPlayer: false,
        jwt: "",
        ttvIp: null,
        contentTypeOptions: ["dash", "dash-h264", "dash-hevc", "hls"],
        contentType: "dash",
        playerOptions: ["web", "ttv"],
        playerType: "web",
        drmType: "drmtoday.widevine",
        drmOptions: ["drmtoday.widevine", "drmtoday.playready", "drmtoday.fairplay"],
        playerEventRequest: null,
        assetData: assetData,
        drmLicenseURL: "",
        players: [],
        drmHeaders: "",
        jwtinputs: jwtinputs,
        jwtentitlements: jwtentitlements
    },
    mounted: function () {
        if (typeof (Storage) !== "undefined") {
            // Code for localStorage/sessionStorage.
            if(localStorage.getItem("uuuid.sandpit.dataviz.live")){
                this.sessionId = localStorage.getItem("uuuid.sandpit.dataviz.live");
                console.log(this.sessionId)
            } else {
                let uuid = this.uuidv4()
                this.sessionId = uuid
                localStorage.setItem("uuuid.sandpit.dataviz.live", uuid);
                console.log("create new uuid" + uuid)

            }
        } else {
            // Sorry! No Web Storage support..
        }
        if (window.location.protocol == "https:") {
            this.playerType = "web"
        }

        else {

            this.playerType = "ttv"

        }
    },
    computed: {
        jwtbody: function () {
            let body = {};
            this.jwtinputs.forEach(element => {
                body[element.label] = element.value
            });
            let entitlements = [];
            let e = {}
            this.jwtentitlements.forEach(element => {
                e[element.label] = element.value
            })
            entitlements.push(e)
            body["https://vimond/entitlements"] = entitlements
            return JSON.stringify(body, null, 2)
        }
    },
    methods: {
        uuidv4: function () {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            })
        },
        onChangePlayer: function (e) {
            if (event.target.value === "ttv") {
                if (window.location.protocol == "https:") {
                    window.location = window.location.href.replace("https:", "http:")
                }
            }
            else if (event.target.value === "web") {
                if (window.location.protocol == "http:" && !window.location.href.includes("localhost")) {
                    window.location = window.location.href.replace("http:", "https:")
                }
            }
        },
        populateAssetData: function (res) {
            response = JSON.parse(res)
            this.assetId = response["data"][0].assetId
            this.playerEventRequest = response["data"][0].playerEventRequest
            this.assetData.filter(i => i.label === "assetId")[0]["value"] = response["data"][0].assetId;
            this.assetData.filter(i => i.label === "assetTitle")[0]["value"] = response["data"][0].assetTitle;
            this.assetData.filter(i => i.label === "categoryId")[0]["value"] = response["data"][0].categoryId;
            this.assetData.filter(i => i.label === "duration")[0]["value"] = response["data"][0].duration;
            this.assetData.filter(i => i.label === "isDrmProtected")[0]["value"] = response["data"][0].isDrmProtected.toString();
            response["data"][0].alternativeStreams.push(response["data"][0].recommendedStream);
            response["data"][0].alternativeStreams.sort(compareProfileRank)
            var filteredStream = response["data"][0].alternativeStreams.filter(i => i.drmProxyType === this.drmType)[0]
            console.log(filteredStream.manifest.uri)
            if (filteredStream) {
                this.assetData.filter(i => i.label === "manifest")[0]["value"] = filteredStream.manifest.uri;
                this.assetData.filter(i => i.label === "drmLicenseURL")[0]["value"] = filteredStream.drm.uri;
                this.assetData.filter(i => i.label === "drmHeaders")[0]["value"] = filteredStream.drm.headers;
                this.drmLicenseURL = filteredStream.drm.uri
                this.drmHeaders = filteredStream.drm.headers
            }
            if (this.playerType == "ttv") {
                this.initateRokuPlayer(filteredStream.manifest.uri, filteredStream.mimeType);
            } else {
                this.initatePlayer(filteredStream.manifest.uri, filteredStream.mimeType);
            }
        },
        createJWT: function () {
            var myHeaders = new Headers();
            myHeaders.append("content-type", "application/json");
            var raw = this.jwtbody
            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
            fetch(config.JWT_SIGN_LOCATION, requestOptions)
                .then(response => response.text())
                .then(result => {
                    this.quality = jwtentitlements.filter(i => i.label === "quality")[0]["value"];
                    this.jwt = JSON.parse(result).token
                    var myHeaders = new Headers();
                    myHeaders.append("Content-Type", "application/json");
                    myHeaders.append("Authorization", "Bearer " + this.jwt);
                    var requestOptions = {
                        method: 'POST',
                        headers: myHeaders,
                        redirect: 'follow'
                    };
                    fetch(config.VCC_ASSET_API + JSON.parse(this.jwtbody)["assetid"] + "/play?extraFields=alternativeStreams&profile="+this.quality+"&contentType=" + this.contentType, requestOptions)
                        .then(response => response.text())
                        .then(result => {
                            this.populateAssetData(result)
                            console.log(result)
                        })
                        .catch(error => console.log('error', error));
                })
                .catch(error => console.log('error', error));
        },
        initatePlayer: function (src, type) {
            options = {};
            options.debug = "true";
            options.jwt = this.jwt
            var token = this.drmHeaders['x-dt-auth-token']
            var optData = JSON.parse(jwt_decode(token).optData);
            options.playerEventRequest = JSON.parse(JSON.stringify(this.playerEventRequest));
            options.src = src;
            options.sessionId = this.sessionId
            options.type = type;
            options.license = config.CL_PLAYER_LICENSE,
                options.drm = {
                    env: 'DRMtoday_STAGING',
                    customData: {
                        userId: optData.userId,
                        sessionId: optData.sessionId,
                        merchant: optData.merchant,
                        authToken: token,
                        assetId: `ttvbo-${this.assetId}`
                    }
                }
            if (this.players.length > 0) {
                var element = document.getElementById("parent-video");
                element.parentNode.removeChild(element)

            }
            this.showPlayer = true;
            this.players.push({
                w: 640,
                h: 320,
                id: "player",
                options
            }
            )

        },
        initateRokuPlayer: function (src, type) {
            let live = false;
            let fmt = (type.includes('dash')) ? "DASH" : "HLS";
            let debugVideoHud = true;
            var token = this.drmHeaders['x-dt-auth-token']
            var optData = JSON.parse(jwt_decode(token).optData);
            let drmParams = null
            if (this.drmType == "drmtoday.playready") {
                drmParams = {
                    encodingType: "PlayReadyLicenseAcquisitionUrl",
                    encodingKey: "",
                    licenseServerURL: `https://lic.staging.drmtoday.com/license-proxy-headerauth/drmtoday/RightsManager.asmx?assetId=ttvbo-${this.assetId}`,
                    serializationUrl: "",
                    appData: ""
                }
            } else {
                drmParams = {
                    "name": "Widevine",
                    "licenseServerURL": `https://lic.staging.drmtoday.com/license-proxy-widevine/cenc/?specConform=true&assetId=ttvbo-${this.assetId}`,
                    "serializationUrl": "", "licenseRenewUrl": "", "appData": ""
                }
            }

            let headers = {
                "x-dt-auth-token": token,
                "dt-custom-data": btoa(JSON.stringify(
                    { "userId": this.userId, "sessionId": optData.sessionId, "merchant": optData.merchant }
                ))
            }
            fetch(`http://${this.ttvIp}:8060/launch/63218?live=${live}&autoCookie=false&debugVideoHud=${debugVideoHud}&url=${encodeURIComponent(src)}&fmt=${fmt}&drmParams=${encodeURIComponent(JSON.stringify(drmParams))}&headers=${encodeURIComponent(JSON.stringify(headers))}&metadata=%7B%22isFullHD%22%3Afalse%7D&cookies=%5B%5D`, {
                "headers": {
                    "accept": "application/json, text/plain, */*",
                    "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
                    "cache-control": "no-cache",
                    "pragma": "no-cache",
                },
                "referrer": "http://devtools.web.roku.com/stream_tester/html/",
                "referrerPolicy": "no-referrer-when-downgrade",
                "body": null,
                "method": "POST",
                "mode": "no-cors"
            });
        }

    }
})