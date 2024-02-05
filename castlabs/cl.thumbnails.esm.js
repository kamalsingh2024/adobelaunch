import {clpp} from "./cl.core.esm.js";let g={};var _ = clpp._;var f=function(window){var Yo="No thumbnail duration or URL specified",Zo="No thumbnail found for position ",$o="Position is out of range: ",ap="Stream configuration is invalid",bp="Thumbnail URL is mandatory",cp="Wrong gridSize format",dp="clpp.thumbnails",ep=function(a,b,c,d,e,f,g,h,l,m,n,p){d=void 0===d?0:d;e=void 0===e?0:e;f=void 0===f?0:f;g=void 0===g?0:g;h=void 0===h?1:h;l=void 0===l?1:l;m=void 0===m?0:m;n=void 0===n?0:n;p=void 0===p?new Image:p;this.time=b;this.a=p;this.src=a;this.duration=c;this.x=d;this.y=e;this.width=
f;this.height=g;this.c=h;this.h=l;this.f=m;this.g=n;this.b=null},fp=function(){this.b=new _.H(dp);this.a=this.c=null},gp=function(a){if(!a)return null;a=new _.Rj(a);return a.path.match(/.*\.vtt$/i)?"WEBVTT":a.path.match(/.*\.bif$/i)?"BIF":a.path.match(/.*\.(png|jpg|jpeg)$/i)?"SINGLE":null},hp=function(){},ip=function(a,b){this.time=a;this.duration=0;this.offset=b;this.length=0;this.a=new _.nj},jp=function(){this.c=new _.H(dp);this.b=new ArrayBuffer(0);this.a=[];this.f=new _.nj},kp=function(a){var b=
a.b.byteLength;a.a.forEach(function(c){c.offset+c.length<b&&c.a.resolve()})},mp=function(a,b){return lp(a,b).then(function(c){return new ep(c,b.time,b.duration)})},lp=function(a,b){return b.load().then(function(){var c=_.ef(a.b);c=new Uint8Array(Array.prototype.slice.call(c,b.offset,b.offset+b.length));return"data:image/jpeg;base64,"+_.pf(c)})},np=function(){this.log=new _.H(dp);this.h=null;this.b=[];this.u=!1},pp=function(a,b){b.reduce(function(c,d){var e=d,f=!1;typeof d===_.$c&&(e=d.step,f=d.preloadWhileBuffering);
return c.then(function(){return op(a,0,e,!!f)})},Promise.resolve())},op=function(a,b,c,d){if(a.u||b>=a.b.length)return Promise.resolve();var e=b+c;return qp(a,d).then(function(){return a.b[b].load()}).then(function(){return op(a,e,c,d)})},qp=function(a,b){return new Promise(function(c){if(b||a.h.getState()!==_.Cn)c();else a.h.one(_.Vb,function(){c()})})},rp=function(){np.call(this);this.a=null},sp=function(a){a=a.split(/\.|:/).map(parseFloat);var b=0,c,d={3:.001,2:1,1:60,0:3600};for(c=a.length-1;0<=
c;c--)b+=a[c]*d[c];return b},tp=function(a){np.call(this);this.o=a;this.a=null;this.g=this.c=1;this.j=this.l=0;this.f=1;this.i=-1},up=function(a,b){if(!b||_.C.I(b.horizontalTiles)||_.C.I(b.verticalTiles)||_.C.I(b.width)||_.C.I(b.height)||0>=b.horizontalTiles||0>=b.verticalTiles||0>=b.width||0>=b.height)throw new _.J(_.K,7,7100,"Selected stream contains one or more invalid configuration values");a.a=b;a.c=a.a.horizontalTiles||1;a.g=a.a.verticalTiles||1;a.f=a.c*a.g;a.i=a.a.durationPerTile||0;var c=
a.a.width,d=a.a.height;void 0!==c&&(a.l=c/a.c);void 0!==d&&(a.j=d/a.g)},vp=function(){np.call(this);this.a=null;this.g=this.c=1;this.f=0};ep.prototype.raw=function(){return this.a.cloneNode(!1)};
ep.prototype.element=function(a,b){var c=this.width,d=this.height,e=this.width/this.height;void 0!==a&&void 0===b&&(b=0);null!==a&&void 0!==a&&(c=a);null!==b&&void 0!==b&&(d=b);c||(c=Math.ceil(d*e));d||(d=Math.ceil(c/e));e=document.createElement(_.qc);e.style.width=c+"px";e.style.height=d+"px";e.style.backgroundColor="#000";e.style.backgroundRepeat="no-repeat";e.style.backgroundImage="url("+this.src+")";e.style.backgroundSize=Math.ceil(c/this.width*(this.a.naturalWidth||this.a.width))+"px "+Math.ceil(d/
this.height*(this.a.naturalHeight||this.a.height))+"px";var f=this.y/this.height;e.style.backgroundPositionX="-"+this.x/this.width*c+"px";e.style.backgroundPositionY="-"+f*d+"px";return e};
ep.prototype.load=function(){var a=this;this.b||(this.b=new Promise(function(b,c){function d(){a.width||(a.width=(a.a.naturalWidth||a.a.width)/a.c);a.height||(a.height=(a.a.naturalHeight||a.a.height)/a.h);a.x||(a.x=a.width*a.f);a.y||(a.y=a.height*a.g)}if(a.a.src&&a.a.complete)d(),b(a);else{var e=null,f=function(){d();a.a.removeEventListener("load",f);a.a.removeEventListener(_.Ac,e);b(a)};e=function(){a.a.removeEventListener("load",f);a.a.removeEventListener(_.Ac,e);c()};a.a.addEventListener("load",
f);a.a.addEventListener(_.Ac,e);a.a.src=a.src}}));return this.b};_.B("clpp.thumbnails.Thumbnail",ep);ep.prototype.load=ep.prototype.load;ep.prototype.element=ep.prototype.element;ep.prototype.raw=ep.prototype.raw;_.r=fp.prototype;_.r.onPlayerCreated=function(a){this.c=a};_.r.onPlayerWillDestroy=function(){this.c=null};_.r.onPlayerWillRelease=function(){this.a=null};
_.r.onContentWillLoad=function(a){var b=this,c=a.getConfiguration();if(c.thumbnails){var d=c.thumbnails;d&&(void 0===d.enabled||d.enabled)&&((c=d.mode)||(c=gp(d.url||null)),c&&("SINGLE"===c||"GRID"===c?this.a=new vp:"WEBVTT"===c?this.a=new rp:"BIF"===c&&(this.a=new jp)),this.a&&(this.b.info("Loading thumbs configuraiton",d),this.c.one(_.Qc,function(){b.b.info("Initialize thumbnails provider");b.a.init(a,d)})))}else this.a=null};
_.r.onContentLoaded=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.a||(d=(d=a.getConfiguration())&&d.thumbnails,d&&void 0!==d.enabled&&!d.enabled)||(c=c&&c.find(function(e){return Array.isArray(e)&&0<e.length}),this.b.info(_.ad,c),c&&(this.a=new tp(c),this.a.init(a,d)))};_.r.get=function(a){return this.a?this.a.get(a):Promise.reject()};_.r.id=function(){return"thumbnails"};_.B("clpp.thumbnails.ThumbnailsPlugin",fp);fp.prototype.get=fp.prototype.get;fp.Id="thumbnails";
hp.prototype.create=function(){return new fp};_.xn(new hp);ip.prototype.load=function(){return this.a};
jp.prototype.init=function(a,b){var c=this;if(!b||!b.url)throw new _.J(_.K,7,7100,bp);var d=_.Gi(b.url);d.type=_.Gj;a.getNetworkEngine().fetch(d).promise.then(function(e){e=e.data;var f=_.ef(c.b);e=_.ef(e);for(var g=f.byteLength+e.byteLength,h=new ArrayBuffer(g),l=new DataView(h),m=0,n=0,p=f.byteLength;n<p;n++)l.setUint8(m,f[n]),m+=1;f=0;for(n=e.byteLength;f<n;f++)l.setUint8(m,e[f]),m+=1;c.b=h;c.c.info("Appended "+e.byteLength+" bytes. Total data now "+g+" bytes.")}).then(function(){var e=c.b,f=_.ef(e),
g=String.fromCharCode.apply(null,wp),h=Array.prototype.slice.call(f,0,8);f=64;var l=0;var m=!1;if(g===String.fromCharCode.apply(null,h))for(e=new DataView(e,16,20),e=e.getUint32(0,!0),0===e&&(e=1E3);!m;){l+=1;h=e;g=new DataView(c.b,f);m=g.getUint32(0,!0);h=m*h/1E3;g=g.getUint32(4,!0);g=new ip(h,g);if(h=c.a.length)h=c.a[h-1],h.length=g.offset-h.offset,h.duration=g.time-h.time;c.a.push(g);f+=8;(m=4294967295===m)&&c.f.resolve();if(1E5<l)throw Error("There was a problem during reading BIF entries");}else throw Error("The file is not a valid BIF format");
}).then(function(){kp(c)})["catch"](function(e){c.c.error("Error while loading thumbnail index",e)})};jp.prototype.get=function(a){var b=this;return 0>a?Promise.reject($o+a):this.f.then(function(){for(var c=0;c<b.a.length;c++){var d=b.a[c];if(d.time>=a&&a<d.time+d.duration)return mp(b,d).then(function(e){return e.load().then(function(){return e})})}return Promise.reject(Zo+a)})};var wp=[137,66,73,70,13,10,26,10];np.prototype.init=function(a,b){var c=this;this.h=a;a.one(_.qd,function(){c.u=!0});a.isLive()||this.m().then(function(){b&&b.preload&&pp(c,b.preload)})};_.w(rp,np);
rp.prototype.init=function(a,b){var c=this;if(!b||!b.url)throw new _.J(_.K,7,7100,bp);var d=b.url,e=_.Gi(d);e.type=_.Gj;this.a=a.getNetworkEngine().fetch(e).promise.then(function(f){if(f=f.data){f=_.hf(f).split(/\n/);for(var g=0;g<f.length;g++){var h=f[g],l=h.split(" --\x3e ");if(2===l.length){h=f[++g];var m=h.indexOf("\x3d");var n=0>m?[]:h.substr(m+1).split(/,/).map(parseFloat);m=n[0];var p=n[1],q=n[2];n=n[3];var t=h.indexOf("#");h=0>t?h:h.substr(0,t);h.match(/^http|^\/\//)||(h=d.substr(0,d.lastIndexOf("/"))+
"/"+h);t=sp(l[0]);l=sp(l[1])-t;c.b.push(new ep(h,t,l,m,p,q,n,0,0))}}}})["catch"](function(f){c.log.error("[VTT] Error while loading thumbnail",f)});np.prototype.init.call(this,a,b)};rp.prototype.get=function(a){var b=this;return 0>a?Promise.reject($o+a):this.a.then(function(){for(var c={},d=0;d<b.b.length;c={Cb:c.Cb},d++)if(c.Cb=b.b[d],c.Cb.time>=a&&a<c.Cb.time+c.Cb.duration)return c.Cb.load().then(function(e){return function(){return e.Cb}}(c));return Promise.reject(Zo+a)})};rp.prototype.m=function(){return this.a};_.w(tp,np);tp.prototype.init=function(a,b){this.log.debug("init start");if(0===this.o.length)throw new _.J(_.K,7,7100,"Player does not return any thumbnails");this.o.sort(function(c,d){return void 0!==c.bandwidth&&void 0!==d.bandwidth?c.bandwidth-d.bandwidth:0});try{up(this,this.o[0])}catch(c){throw c;}np.prototype.init.call(this,a,b)};
tp.prototype.get=function(a){if(0>a)return this.log.error("Position must be greater than 0 but is "+a),Promise.reject();if(!this.a)return this.log.error(ap),Promise.reject();var b=this.a.findSegmentPosition(a);if(null===b||void 0===b)return this.log.error("Could not find segment index for specified position",a),Promise.reject();var c=this.a.getSegmentReference(b);if(c){var d=this.i?this.i*this.f:c.endTime-c.startTime,e=d/this.f;a=Math.floor((a-c.startTime)/d*this.f);var f;if(0<this.b.length)e=this.a.findSegmentPosition(0),
null!==e&&(f=this.b[(b-e)*this.f+a]);else if((d=c.Ba())&&0<d.length){var g=0,h=0;c=c.startTime;1<this.f&&(g=a%this.c,h=Math.floor(a/this.c),c+=a*e);f=new ep(d[0],c,e,this.l*g,this.j*h,this.l,this.j,this.c,this.g,g,h)}if(f)return f.load().then(function(){return f})}this.log.error("segment reference for specified segment index does not exist",b);return Promise.reject()};
tp.prototype.m=function(){if(0<this.b.length)return Promise.resolve();if(!this.a)return this.log.error(ap),Promise.reject();for(var a=this.a.findSegmentPosition(0),b;null!==a&&!_.C.I(b=this.a.getSegmentReference(a++));)for(var c=b.Ba()[0],d=new Image,e=b.startTime,f=this.i?this.i*this.f:b.endTime-b.startTime,g=f/this.f,h=0;h<this.g;++h)for(var l=0;l<this.c;++l)this.b.push(new ep(c,e+h*f+l*g,g,this.l*l,this.j*h,this.l,this.j,this.c,this.g,l,h,d));return Promise.resolve()};_.w(vp,np);
vp.prototype.init=function(a,b){if(!b||!b.url)throw new _.J(_.K,7,7100,bp);if("GRID"===b.mode&&!b.gridSize)throw new _.J(_.K,7,7100,"Grid size is mandatory for GRID mode");if(!b.duration)throw new _.J(_.K,7,7100,"Duration is mandatory");this.a=b;var c=this.a.duration,d=this.a.url;if(!c||!d)throw this.log.error(Yo,c,d),new _.J(_.K,7,7100,Yo);this.f=c;if(this.a.gridSize)try{var e=this.a.gridSize.split(/x/).map(function(f){return parseInt(f,10)}).filter(function(f){return 0<f});if(2===e.length)this.c=e[0],
this.g=e[1];else throw new _.J(_.K,7,7100,cp);}catch(f){throw this.log.error("Error during parsing gridSize",f),new _.J(_.K,7,7100,cp);}np.prototype.init.call(this,a,b)};vp.prototype.get=function(a){var b=this.h.getDuration();if(void 0===this.a.duration)return Promise.reject("Duration configuration not defined");var c=Math.floor(a/this.a.duration);if(0>a||a>b)return Promise.reject($o+a);var d=this.b[c];return d?d.load().then(function(){return d}):Promise.reject(Zo+a+" at index "+c)};
vp.prototype.m=function(){if(0<this.b.length)return Promise.resolve();var a=this.h.getDuration(),b=this.c*this.g;a=Math.ceil(Math.ceil(a/this.f)/b);for(var c=this.a.templateKey||"$index$",d=0;d<a;d++)for(var e=this.a.url.replace(c,String(d+1)),f=new Image,g=0;g<b;g++)this.b.push(new ep(e,this.f*(d*b+g),this.f,0,0,0,0,this.c,this.g,g%this.c,Math.floor(g/this.c),f));return Promise.resolve()};};f.call(g, window);