if (self.CavalryLogger) { CavalryLogger.start_js(["YhRBi"]); }

__d("ImageExtensions",[],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={GIF:"gif",JPG:"jpg",PNG:"png",ICO:"ico",BMP:"bmp",WEBP:"webp",BEST:"best",PNG2JPG:"png2jpg"};}),null);
__d("PUWMethods",[],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={DRAGDROP:"dragdrop",FILE_SELECTOR:"file_selector",VAULT:"vault",RECENT_PHOTOS:"recent_photos",PHOTOS_OF_YOU:"photos_of_you",METHOD_EDITOR:"editor",SUGGESTIONS:"suggestions",CAMERA:"camera",COPYPASTE:"copypaste"};}),null);
__d("VideoCreatorProductType",[],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={LEGACY:0,UNSPECIFIED:1,CORE_VIDEOS:2,LOOPS:3,ANIMATED_GIFS:4,SLIDESHOW:5,PROFILE_VIDEO:6,SPHERICAL:7,LIVE_PHOTO:8,BIRTHDAY_VIDEO:9,STORYLINE:10,FRIENDS_DAY_2016:11,FRIENDVERSARY:12,STORYLINE_WITH_EXTERNAL_MUSIC:13,GOODWILL_VIDEO_BIRTHDAY:14};}),null);
__d('Bandicoot',[],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=5*1000,i=10*60*1000,j=14*24*60*60*1000,k='Bandicoot:',l={ACTIVE:'ACTIVE',INACTIVE:'INACTIVE',CLOSED:'CLOSED'};function m(){try{var q=window.localStorage;if(q){var r='__test'+Date.now();q.setItem(r,'');q.removeItem(r);}return q;}catch(p){}}var n=m();function o(p){this.$Bandicoot5=k+p;this.$Bandicoot4={};this.$Bandicoot1=this.$Bandicoot7.bind(this);this.sessionID=null;this.sessionStartTime=null;this.storage=n;}o.prototype.getCrashTimeData=function(){var p=window.performance&&window.performance.memory||{},q=this.sessionStartTime;return {duration:q?Date.now()-q:0,tabs:Object.keys(this.$Bandicoot8()).length,jsHeapSizeLimit:p.jsHeapSizeLimit,totalJSHeapSize:p.totalJSHeapSize,usedJSHeapSize:p.usedJSHeapSize,elementsInDOM:document.getElementsByTagName('*').length,uri:window.location.href};};o.prototype.getLogTimeData=function(){return {userAgent:window.navigator.userAgent};};o.prototype.logCrash=function(p,q,r){var s=Object.assign({sessionID:p},q,r);};o.prototype.logBrowserUnsupported=function(){};o.prototype.logTrackingError=function(){};o.prototype.startSession=function(){if(!this.storage){this.logBrowserUnsupported();return;}if(this.$Bandicoot2)return;if(!this.sessionID)this.sessionID=Math.random().toString(36).slice(2,9);if(!this.sessionStartTime)this.sessionStartTime=Date.now();this.$Bandicoot2=setInterval(this.$Bandicoot9.bind(this),h);this.$Bandicoot9();if(document.addEventListener)document.addEventListener('visibilitychange',this.$Bandicoot1);this.$Bandicoot10();};o.prototype.endSession=function(){if(!this.storage)return;if(!this.$Bandicoot2)return;clearInterval(this.$Bandicoot2);this.$Bandicoot2=null;if(!this.$Bandicoot3)this.$Bandicoot11({status:l.CLOSED});this.sessionID=null;this.sessionStartTime=null;if(document.removeEventListener)document.removeEventListener('visibilitychange',this.$Bandicoot1);};o.prototype.logKnownCrashes=function(){if(!this.storage)return;if(!this.$Bandicoot2)this.$Bandicoot9();};o.prototype.$Bandicoot9=function(){var p=this.$Bandicoot8(),q={};if(this.$Bandicoot2){if(!p[this.sessionID])p[this.sessionID]={};Object.assign(p[this.sessionID],this.getCrashTimeData(),{lastUpdated:Date.now(),status:this.$Bandicoot12()});}Object.keys(p).forEach(function(r){var s=p[r];if(s.status===l.CLOSED)return;if(this.$Bandicoot4[r])return;if(!s.lastUpdated)return;var t=Date.now()-s.lastUpdated;if(s.status===l.INACTIVE&&t>i)return;if(s.status===l.ACTIVE&&t>i){if(!s.loggerTabForPotentialCrash&&this.$Bandicoot2){s.loggerTabForPotentialCrash=this.sessionID;q[r]=s;}else if(s.loggerTabForPotentialCrash&&s.loggerTabForPotentialCrash!==this.sessionID){if(t>j)return;q[r]=s;}else{this.logCrash(r,s,this.getLogTimeData());this.$Bandicoot4[r]=true;}}else{delete s.loggerTabForPotentialCrash;q[r]=s;}}.bind(this));this.$Bandicoot13(q);};o.prototype.$Bandicoot8=function(p){p=p||this.$Bandicoot5;var q=this.storage.getItem(p)||'{}';try{q=JSON.parse(q);}catch(r){q={};this.storage.removeItem(p);}return q;};o.prototype.$Bandicoot11=function(p){p.lastUpdated=Date.now();var q=this.$Bandicoot8();if(!q[this.sessionID])q[this.sessionID]={};Object.assign(q[this.sessionID],p);this.$Bandicoot13(q);};o.prototype.$Bandicoot13=function(p){var q=JSON.stringify(p);try{this.storage.setItem(this.$Bandicoot5,q);}catch(r){var s=this.$Bandicoot6,t=Date.now();if(!s||t>s+h){this.logTrackingError();this.$Bandicoot6=t;}try{this.storage.removeItem(this.$Bandicoot5);}catch(u){this.$Bandicoot3=true;this.endSession();}}};o.prototype.$Bandicoot10=function(){for(var p=0;p<this.storage.length;++p){var q=this.storage.key(p);if(q.indexOf(k)===0&&q!==this.$Bandicoot5){var r=this.$Bandicoot8(q),s=Object.keys(r).every(function(t){var u=r[t];return (!u.lastUpdated||Date.now()-u.lastUpdated>j);});if(s)this.storage.removeItem(q);}}};o.prototype.$Bandicoot7=function(){this.$Bandicoot11({status:this.$Bandicoot12()});};o.prototype.$Bandicoot12=function(){return document.hidden?l.INACTIVE:l.ACTIVE;};f.exports=o;}),null);
__d('FBOverlayBase.react',['React'],(function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('React').Component);i=h&&h.prototype;j.prototype.render=function(){'use strict';return c('React').Children.only(this.props.children);};function j(){'use strict';h.apply(this,arguments);}f.exports=j;}),null);
__d('FBOverlayElement.react',['cx','React','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();var k=c('React').PropTypes,l={horizontal:{left:"_32rg",right:"_32rh",fit:c('joinClasses')("_32rg","_32rh")},vertical:{top:"_32ri",bottom:"_32rj",fit:c('joinClasses')("_32ri","_32rj")}};i=babelHelpers.inherits(m,c('React').Component);j=i&&i.prototype;m.prototype.render=function(){'use strict';var n=c('React').Children.only(this.props.children),o=c('joinClasses')(n.props.className,"_32rk",l.horizontal[this.props.horizontal],l.vertical[this.props.vertical]);return c('React').cloneElement(n,{className:o});};function m(){'use strict';i.apply(this,arguments);}m.propTypes={horizontal:k.oneOf(['left','right','fit']),vertical:k.oneOf(['top','bottom','fit'])};m.defaultProps={horizontal:'fit',vertical:'fit'};f.exports=m;}),null);
__d('FBOverlayContainer.react',['cx','invariant','FBOverlayBase.react','FBOverlayElement.react','React','joinClasses'],(function a(b,c,d,e,f,g,h,i){var j,k;if(c.__markCompiled)c.__markCompiled();j=babelHelpers.inherits(l,c('React').Component);k=j&&j.prototype;l.prototype.render=function(){'use strict';return (c('React').createElement('div',babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,"_23n-")}),this.props.children));};function l(){'use strict';j.apply(this,arguments);}l.propTypes={children:function m(n,o){var m=n[o],p=0;c('React').Children.forEach(m,function(q){if(q===null||q===undefined)return;switch(q.type){case c('FBOverlayBase.react'):p++;break;case c('FBOverlayElement.react'):break;default:i(0);}});!(p===1)?i(0):void 0;}};f.exports=l;}),null);
__d('XUICardHeaderTitle.react',['cx','React','TabBarItem.react','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();var k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;l.prototype.render=function(){'use strict';var m=this.props.itemComponent,n=null;if(this.props.count>0)n=c('React').createElement('span',{className:"_c1b"},this.props.count);return (c('React').createElement(m,babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,"_38my")}),this.props.children,n,c('React').createElement('span',{className:"_c1c"})));};function l(){'use strict';i.apply(this,arguments);}l.propTypes={count:k.number,href:k.string,itemComponent:k.any};l.defaultProps={itemComponent:c('TabBarItem.react')};f.exports=l;}),null);
__d('XUIDialogHeaderTitle.react',['XUICardHeaderTitle.react'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();f.exports=c('XUICardHeaderTitle.react');}),null);
__d('XUICardHeader.react',['cx','invariant','React','TabBar.react','XUICardHeaderTitle.react','XUICardSection.react','XUIDialogHeaderTitle.react','joinClasses'],(function a(b,c,d,e,f,g,h,i){var j,k;if(c.__markCompiled)c.__markCompiled();var l=c('React').PropTypes;j=babelHelpers.inherits(m,c('React').Component);k=j&&j.prototype;function m(){var n,o;'use strict';for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return n=(o=k.constructor).call.apply(o,[this].concat(q)),this.$XUICardHeader1=function(){var s=0;c('React').Children.forEach(this.props.children,function(t){!(t.type===c('XUICardHeaderTitle.react')||t.type===c('XUIDialogHeaderTitle.react'))?i(0):void 0;s++;});return s;}.bind(this),this.$XUICardHeader2=function(){if(this.props.type==='primary')!(this.props.itemCount==null)?i(0):void 0;if(this.props.itemCount!=null)return (c('React').createElement('span',{className:"_5dw7"},this.props.itemCount));}.bind(this),this.$XUICardHeader3=function(){if(this.props.link)return (c('React').createElement('span',{className:"_5dw8"},this.props.link));}.bind(this),this.$XUICardHeader4=function(){var s=this.$XUICardHeader1();if(s===1){return c('React').Children.map(this.props.children,function(t){return c('React').cloneElement(t,{itemComponent:'span'});});}else return (c('React').createElement(c('TabBar.react'),{activeTabKey:this.props.activeTabKey,defaultActiveTabKey:this.props.defaultActiveTabKey,onTabClick:this.props.onTabClick},this.props.children));}.bind(this),n;}m.prototype.render=function(){'use strict';var n=(this.props.type==='primary'?"_5dw9":'')+(' '+"_5dwa")+(this.props.type==='secondary'?' '+"_5dwb":'')+(this.$XUICardHeader1()!==1?' '+"_3s3z":'');return (c('React').createElement(c('XUICardSection.react'),{className:c('joinClasses')(this.props.className,n)},this.$XUICardHeader4(),this.$XUICardHeader2(),this.$XUICardHeader3(),c('React').createElement('div',{className:"_3s3-"})));};m.propTypes={activeTabKey:l.string,defaultActiveTabKey:l.string,onTabClick:l.func,type:l.oneOf(['primary','secondary'])};m.defaultProps={onTabClick:function n(){return true;},type:'secondary'};f.exports=m;}),null);
__d('XUIDialogCloseButton.react',['fbt','React','XUIDialogButton.react'],(function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){'use strict';return (c('React').createElement(c('XUIDialogButton.react'),babelHelpers['extends']({},this.props,{action:'cancel',label:h._("Cerrar")})));};function k(){'use strict';i.apply(this,arguments);}f.exports=k;}),null);
__d("DOMWrapper",[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h,i,j={setRoot:function k(l){h=l;},getRoot:function k(){return h||document.body;},setWindow:function k(l){i=l;},getWindow:function k(){return i||self;}};f.exports=j;}),null);
__d('Flash',['DOMEventListener','DOMWrapper','QueryString','UserAgent_DEPRECATED','guid','htmlSpecialChars'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={},i,j=c('DOMWrapper').getWindow().document;function k(p){var q=j.getElementById(p);if(q)q.parentNode.removeChild(q);delete h[p];}function l(){for(var p in h)if(h.hasOwnProperty(p))k(p);}function m(p){return p.replace(/\d+/g,function(q){return '000'.substring(q.length)+q;});}function n(p){if(!i){if(c('UserAgent_DEPRECATED').ie()>=9)c('DOMEventListener').add(window,'unload',l);i=true;}h[p]=p;}var o={embed:function p(q,r,s,t){var u=c('guid')();q=c('htmlSpecialChars')(q).replace(/&amp;/g,'&');s=babelHelpers['extends']({allowscriptaccess:'always',flashvars:t,movie:q},s);if(typeof s.flashvars=='object')s.flashvars=c('QueryString').encode(s.flashvars);var v=[];for(var w in s)if(s.hasOwnProperty(w)&&s[w])v.push('<param name="'+c('htmlSpecialChars')(w)+'" value="'+c('htmlSpecialChars')(s[w])+'">');var x=r.appendChild(j.createElement('span')),y='<object '+(c('UserAgent_DEPRECATED').ie()?'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ':'type="application/x-shockwave-flash"')+'data="'+q+'" '+(s.height?'height="'+s.height+'" ':'')+(s.width?'width="'+s.width+'" ':'')+'id="'+u+'">'+v.join('')+'</object>';x.innerHTML=y;var z=x.firstChild;n(u);return z;},remove:k,getVersion:function p(){var q='Shockwave Flash',r='application/x-shockwave-flash',s='ShockwaveFlash.ShockwaveFlash',t;if(navigator.plugins&&typeof navigator.plugins[q]=='object'){var u=navigator.plugins[q].description;if(u&&navigator.mimeTypes&&navigator.mimeTypes[r]&&navigator.mimeTypes[r].enabledPlugin)t=u.match(/\d+/g);}if(!t)try{t=new ActiveXObject(s).GetVariable('$version').match(/(\d+),(\d+),(\d+),(\d+)/);t=Array.prototype.slice.call(t,1);}catch(v){}return t;},getVersionString:function p(){var q=o.getVersion();return q?q.join('.'):'';},checkMinVersion:function p(q){var r=o.getVersion();if(!r)return false;return m(r.join('.'))>=m(q);},isAvailable:function p(){return !!o.getVersion();}};f.exports=o;}),null);
__d("ManagedError",[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j){Error.prototype.constructor.call(this,i);this.message=i;this.innerError=j;}h.prototype=new Error();h.prototype.constructor=h;f.exports=h;}),null);
__d('AssertionError',['ManagedError'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){c('ManagedError').prototype.constructor.apply(this,arguments);}h.prototype=new (c('ManagedError'))();h.prototype.constructor=h;f.exports=h;}),null);
__d('Assert',['AssertionError','sprintf'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(m,n){if(typeof m!=='boolean'||!m)throw new (c('AssertionError'))(n);return m;}function i(m,n,o){var p;if(n===undefined){p='undefined';}else if(n===null){p='null';}else{var q=Object.prototype.toString.call(n);p=/\s(\w*)/.exec(q)[1].toLowerCase();}h(m.indexOf(p)!==-1,o||c('sprintf')('Expression is of type %s, not %s',p,m));return n;}function j(m,n,o){h(n instanceof m,o||'Expression not instance of type');return n;}function k(m,n){l['is'+m]=n;l['maybe'+m]=function(o,p){if(o!=null)n(o,p);};}var l={isInstanceOf:j,isTrue:h,isTruthy:function m(n,o){return h(!!n,o);},type:i,define:function m(n,o){n=n.substring(0,1).toUpperCase()+n.substring(1).toLowerCase();k(n,function(p,q){h(o(p),q);});}};['Array','Boolean','Date','Function','Null','Number','Object','Regexp','String','Undefined'].forEach(function(m){k(m,i.bind(null,m.toLowerCase()));});f.exports=l;}),null);
__d('VideoUploadFile',['fileSlice','ImageExtensions','VideoCreatorProductType','VideoUploadFeatureDetector'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j,k,l){'use strict';this.$VideoUploadFile1=i;this.$VideoUploadFile2=j;this.$VideoUploadFile3=k;this.$VideoUploadFile4=l;}h.fromFile=function(i){'use strict';var j=h.getExtensionFromFileName(i.name);return new this(null,i,i.size,j);};h.fromFileInput=function(i){'use strict';var j=null,k=null,l=h.getExtensionFromFileInput(i);if(c('VideoUploadFeatureDetector').supportsFileAPI()&&i.files.length){j=i.files[0];k=j.size;}return new this(i,j,k,l);};h.prototype.getFileInput=function(){'use strict';return this.$VideoUploadFile1;};h.prototype.getFile=function(){'use strict';return this.$VideoUploadFile2;};h.prototype.getSize=function(){'use strict';return this.$VideoUploadFile3;};h.prototype.getExtension=function(){'use strict';return this.$VideoUploadFile4;};h.prototype.getCreatorProduct=function(){'use strict';if(this.$VideoUploadFile4===c('ImageExtensions').GIF)return c('VideoCreatorProductType').ANIMATED_GIFS;return c('VideoCreatorProductType').CORE_VIDEOS;};h.prototype.getChunk=function(i,j){'use strict';return this.$VideoUploadFile2?c('fileSlice').call(this.$VideoUploadFile2,i,j):null;};h.getExtensionFromFileInput=function(i){'use strict';return this.getExtensionFromFileName(i.value);};h.getExtensionFromFileName=function(i){'use strict';return i.indexOf('.')!=-1?i.split('.').pop().toLowerCase():'';};f.exports=h;}),null);