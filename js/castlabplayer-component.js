var castlabplayer = Vue.component('castlab-player', {
    props: {
        options: {
            type: Object,
            default() {
                return {}
            }
        },
        w: "",
        h: "",
        id: "",
    },
    data: function () {
        return {
            currentTime: null,
            lastPing: -1,
            pingInterval: 300,
            eventNumber: 1,
            duration: 0,
            firstPlay: true

        }
    },
    template: '<div id="parent-video"><video :id="id" :width="w" @play="play" @end="end" @pause="pause" @timeupdate="timeupdate" :height="h" :options="options" crossOrigin="anonymous"></video></div>',
    mounted() {
        console.log("passed" + options)
        let src = this.options.src;
        let type = this.options.type;
        this.pingInterval = this.options.playerEventRequest.eventInterval
        let drmProtected = this.options.drmProtected;
        let viewerId = this.options.viewerId;
        let license = this.options.license
        this.player = new clpp.Player(this.id, { license });
        this.player.use(clpp.dash.DashComponent);
        this.player.use(clpp.hls.HlsComponent);
        this.player.use(clpp.crypto.CryptoComponent);
        this.player.on(clpp.events.ERROR, event => {
            var error = event.detail;
            console.log(event.detail)

        });
        this.player.load(
            {
                source: {
                    url: src,
                    type: type,
                    drmProtected
                },
                drm: options.drm,
                autoplay: true,
                muted: true,
            });
    },
    beforeDestroy() {
        if (this.player) {
            this.player.dispose()
        }
    },
    methods: {
        pause: function (event) {
            let currentTime = Math.round(event.target.currentTime)
            this.sendPlaySessionEvent(currentTime, "period", "pause")

        },
        end: function (event) {
            let currentTime = Math.round(event.target.currentTime)
            this.sendPlaySessionEvent(currentTime, "end", "")
        },
        play: function (event) {
            let currentTime = Math.round(event.target.currentTime)
           // console.log(event.target)
            this.duration = event.target.duration
            if (this.firstPlay) {
                this.sendPlaySessionEvent(currentTime, "str-start", "playing")
                this.firstPlay = false
            } else {
                this.sendPlaySessionEvent(currentTime, "str-start", "playing")

            }
        },
        timeupdate: function (event) {
            lastPing = this.lastPing;
            let currentTime = Math.round(event.target.currentTime)
            if (lastPing != Math.floor(currentTime / this.pingInterval)) {
                this.sendPlaySessionEvent(currentTime, "period", "playing")
                this.lastPing = Math.floor(currentTime / this.pingInterval);
            }
        },
        sendPlaySessionEvent: function (currentTime, eventName, playerState) {
            var playerEventRequestPayload = this.populatePayLoad(currentTime, eventName, playerState);
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer " + this.options.jwt);
            myHeaders.append("content-type", "application/json");
            var raw = JSON.stringify(playerEventRequestPayload)
            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
            fetch(this.options.playerEventRequest.uri, requestOptions)
            this.eventNumber += 1;
        },
        populatePayLoad: function (currentTime, eventName, playerState) {
            this.options.playerEventRequest.body.timestamp = new Date().toISOString();
            this.options.playerEventRequest.body.originator = "Paragon Test CastLab Player";
            this.options.playerEventRequest.body.client.buildName = "0.0.1"
            this.options.playerEventRequest.body.client.buildVersion = "0.0.1"
            this.options.playerEventRequest.body.client.envPlatform = "webplayer"
            this.options.playerEventRequest.body.client.pageUrl = window.location.href
            this.options.playerEventRequest.body.client.playerEvent = eventName
            this.options.playerEventRequest.body.client.playerState = playerState
            this.options.playerEventRequest.body.client.streamUrl = this.options.src
            this.options.playerEventRequest.body.client.videoFormat = this.options.type
            this.options.playerEventRequest.body.client.viewingSession = this.options.sessionId
            this.options.playerEventRequest.body.progress.vod.position = currentTime
            this.options.playerEventRequest.body.progress.vod.duration = this.duration
            this.options.playerEventRequest.body.progress.eventNumber = this.eventNumber
            return this.options.playerEventRequest.body
        }
    }
})