if (self.CavalryLogger) { CavalryLogger.start_js(["e6Bus"]); }

__d("NotificationConstants",[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();f.exports={PayloadSourceType:{UNKNOWN:0,USER_ACTION:1,LIVE_SEND:2,ENDPOINT:3,INITIAL_LOAD:4,OTHER_APPLICATION:5,SYNC:6,CLIENT:7}};}),null);
__d('NotificationPhotoThumbnail',[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(j){if(!j.media||!j.style_list||!j.style_list.length)return null;switch(j.style_list[0]){case 'new_album':case 'album':case 'application':case 'photo':case 'video':case 'video_autoplay':case 'video_inline':return j.media.image;default:return null;}}var i={getThumbnail:function j(k,l,m){var n;if(k&&k.length){k.some(function(r){n=h(r);if(n)return true;return false;});if(n)return n;}if(m){var o=m.relevant_comments;if(o&&o.length){var p=o[0].attachments;if(p&&p.length){n=h(p[0]);if(n)return n;}}}if(l){var q=l.attachments;if(q&&q.length)return h(q[0]);}return null;}};f.exports=i;}),null);
__d('NotificationTokens',['CurrentUser'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={tokenizeIDs:function i(j){return j.map(function(k){return c('CurrentUser').getID()+':'+k;});},untokenizeIDs:function i(j){return j.map(function(k){return k.split(':')[1];});}};f.exports=h;}),null);
__d('NotificationUpdates',['Arbiter','BizSiteIdentifier.brands','BusinessUserConf','ChannelConstants','JSLogger','NotificationConstants','NotificationTokens','LiveTimer','createObjectFrom'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={},i={},j={},k={},l=[],m=0,n=c('JSLogger').create('notification_updates');function o(){if(m)return;var t=h,u=i,v=j,w=k;h={};i={};j={};k={};q('notifications-updated',t);if(Object.keys(u).length)q('seen-state-updated',u);if(Object.keys(v).length)q('read-state-updated',v);if(Object.keys(w).length)q('hidden-state-updated',w);l.pop();}function p(){if(l.length)return l[l.length-1];return c('NotificationConstants').PayloadSourceType.UNKNOWN;}function q(event,t){s.inform(event,{updates:t,source:p()});}var r=null,s=Object.assign(new (c('Arbiter'))(),{getserverTime:function t(){return r;},handleUpdate:function t(u,v){var w=c('BizSiteIdentifier.brands').isBizSite()&&!!c('BusinessUserConf').biz_user_id;if(v.nodes&&Array.isArray(v.nodes)){v.nodes=this._filterNodesBasedOnBusinessUser(v.nodes,c('BusinessUserConf').biz_user_id);if(!w)v.nodes=this._filterNodesBasedOnBusinessID(v.nodes);}if(v.servertime){r=v.servertime;c('LiveTimer').restart(v.servertime);}if(Object.keys(v).length)this.synchronizeInforms(function(){l.push(u);var x=babelHelpers['extends']({payloadsource:p()},v);this.inform('update-notifications',x);this.inform('update-seen',x);this.inform('update-read',x);this.inform('update-hidden',x);}.bind(this));},didUpdateNotifications:function t(u){Object.assign(h,c('createObjectFrom')(u));o();},didUpdateSeenState:function t(u){Object.assign(i,c('createObjectFrom')(u));o();},didUpdateReadState:function t(u){Object.assign(j,c('createObjectFrom')(u));o();},didUpdateHiddenState:function t(u){Object.assign(k,c('createObjectFrom')(u));o();},synchronizeInforms:function t(u){m++;try{u();}catch(v){throw v;}finally{m--;o();}},_filterNodesBasedOnBusinessID:function t(u){return u.filter(function(v){return v.business_ids&&Object.keys(v.business_ids).length>0?!!('business_ids_user_pref' in v?v.business_ids_user_pref[c('BizSiteIdentifier.brands').getBusinessID()]:v.business_ids[c('BizSiteIdentifier.brands').getBusinessID()]):!c('BizSiteIdentifier.brands').isBizSite();});},_filterNodesBasedOnBusinessUser:function t(u,v){return u.filter(function(w){return v==w.biz_user_id;});}});c('Arbiter').subscribe(c('ChannelConstants').getArbiterType('notification_json'),function(t,u){var v=Date.now(),w=u.obj.nodes;if(w){w.forEach(function(x){x.receivedTime=v;});n.debug('notifications_received',w);s.handleUpdate(c('NotificationConstants').PayloadSourceType.LIVE_SEND,u.obj);}});c('Arbiter').subscribe(c('ChannelConstants').getArbiterType('notifications_seen'),function(t,u){var v=c('NotificationTokens').tokenizeIDs(u.obj.alert_ids);s.handleUpdate(c('NotificationConstants').PayloadSourceType.LIVE_SEND,{seenState:c('createObjectFrom')(v)});});c('Arbiter').subscribe(c('ChannelConstants').getArbiterType('notifications_read'),function(t,u){var v=c('NotificationTokens').tokenizeIDs(u.obj.alert_ids);s.handleUpdate(c('NotificationConstants').PayloadSourceType.LIVE_SEND,{readState:c('createObjectFrom')(v)});});c('Arbiter').subscribe(c('ChannelConstants').getArbiterType('notification_hidden'),function(t,u){var v=c('NotificationTokens').tokenizeIDs([u.obj.notif_id+'']);s.handleUpdate(c('NotificationConstants').PayloadSourceType.LIVE_SEND,{HiddenState:c('createObjectFrom')(v)});});f.exports=s;}),null);
__d('NotificationStore',['BizSiteIdentifier.brands','BusinessUserConf','KeyedCallbackManager','NotificationConstants','NotificationUpdates','RangedCallbackManager','MercuryServerDispatcher'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=function m(n){this.notifications=new (c('KeyedCallbackManager'))();var o=function p(q){var r=this.notifications.getResource(q);return r.creation_time;};this.order=new (c('RangedCallbackManager'))(o.bind(this),function(p,q){return q-p;});this.graphQLPageInfo={};},i=c('BizSiteIdentifier.brands').isBizSite()?c('BizSiteIdentifier.brands').getBusinessID():null;c('NotificationUpdates').subscribe('update-notifications',function(m,n){var o=n.endpoint||k;if(n.page_info)j[o].graphQLPageInfo=n.page_info;if(n.nodes===undefined)return;var p,q=[],r={},s=n.nodes||[],t;s.forEach(function(u){p=u.alert_id;t=j[o].notifications.getResource(p);if(!t||t.creation_time<u.creation_time){q.push(p);r[p]=u;}});j[o].notifications.addResourcesAndExecute(r);j[o].order.addResources(q);c('NotificationUpdates').didUpdateNotifications(q);});var j={},k='/ajax/notifications/client/get.php',l={getNotifications:function m(n,o){var p=arguments.length<=2||arguments[2]===undefined?k:arguments[2],q=j[p].order.executeOrEnqueue(0,n,function(x){var y=j[p].notifications.executeOrEnqueue(x,o);}),r=j[p].order.getUnavailableResources(q);if(r.length){j[p].order.unsubscribe(q);if(!l.canFetchMore(p)){j[p].notifications.executeOrEnqueue(j[p].order.getAllResources(),o);return;}var s=j[p].graphQLPageInfo,t=s&&s.end_cursor||null,u;if(t){var v=Math.max.apply(null,r),w=j[p].order.getCurrentArraySize();u=v-w+1;}else u=n;c('MercuryServerDispatcher').trySend(p,{businessID:i,businessUserID:c('BusinessUserConf').biz_user_id,cursor:t,length:u});}},getAll:function m(n){var o=arguments.length<=1||arguments[1]===undefined?k:arguments[1];l.getNotifications(l.getCount(o),n,o);},getCount:function m(){var n=arguments.length<=0||arguments[0]===undefined?k:arguments[0];return j[n].order.getAllResources().length;},canFetchMore:function m(){var n=arguments.length<=0||arguments[0]===undefined?k:arguments[0],o=j[n].graphQLPageInfo;return (!o||!o.hasOwnProperty('has_next_page')||o.has_next_page);},registerEndpoint:function m(n){if(n&&!(n in j)){j[n]=new h(n);var o={};o[n]={mode:c('MercuryServerDispatcher').IMMEDIATE,handler:function p(q){q.endpoint=n;c('NotificationUpdates').handleUpdate(c('NotificationConstants').PayloadSourceType.ENDPOINT,q);}};c('MercuryServerDispatcher').registerEndpoints(o);}},setBusinessID:function m(n){i=n;}};l.registerEndpoint(k);f.exports=l;}),null);
__d('VideoPermalinkURI',[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={isValid:function i(j){return h.parse(j)!==null;},parse:function i(j){if(this.isValidLegacy(j)){var k=j.getQueryData();if(k.v)return {video_id:k.v,set_token:k.set};return null;}var l=j.getPath();if(l[l.length-1]==='/')l=l.substring(0,l.length-1);var m=l.split('/');if(m.length>=3&&m[2]==='videos')if(m.length===4&&/^\d+$/.exec(m[3])!==null){return {video_id:m[3],set_token:null};}else if(m.length===5&&/^\d+$/.exec(m[4])!==null)return {video_id:m[4],set_token:m[3]};return null;},isValidLegacy:function i(j){var k=j.getPath();if(k[k.length-1]==='/')k=k.substring(0,k.length-1);if(k==='/photo.php'||k==='/force_photo/photo.php'||k==='/photo'||k==='/force_photo/photo/index.php'||k==='/photo/index.php'||k==='/force_photo/photo'||k==='/video.php'||k==='/video/video.php')return true;return false;}};f.exports=h;}),null);
__d('NotificationURI',['BusinessURI.brands','URI','isFacebookURI','VideoPermalinkURI'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={localize:function i(j){j=c('BusinessURI.brands')(j);if(!c('isFacebookURI')(j))return j.toString();var k=j.getSubdomain();return j.getUnqualifiedURI().getQualifiedURI().setSubdomain(k).toString();},snowliftable:function i(j){if(!j)return false;j=new (c('URI'))(j);var k=j.getQueryData();return c('isFacebookURI')(j)&&(c('VideoPermalinkURI').isValid(j)||'fbid' in k);},isVaultSetURI:function i(j){return this._areEquals(j,'/ajax/vault/sharer_preview.php');},isAlbumDraftRecoveryDialogURI:function i(j){return this._areEquals(j,'/ajax/photos/upload/overlay/');},_areEquals:function i(j,k){if(!j)return false;j=new (c('URI'))(j);return c('isFacebookURI')(j)&&j.getPath()===k;},_startsWith:function i(j,k){if(!j)return false;j=new (c('URI'))(j);return c('isFacebookURI')(j)&&j.getPath().startsWith(k);}};f.exports=h;}),null);
__d("XNotificationsOptionsController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/notifications\/feedback\/option\/",{notif_id:{type:"Int",required:true},undo:{type:"Bool",defaultValue:false},server_action:{type:"String",required:true},biz_user_id:{type:"Int"}});}),null);
__d('NotificationUserActions',['AsyncRequest','BusinessUserConf','NotificationConstants','NotificationStore','NotificationTokens','NotificationUpdates','URI','XNotificationsOptionsController','createObjectFrom','emptyFunction'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c('NotificationConstants').PayloadSourceType.USER_ACTION,i='mark_spam',j='turn_off',k='undo',l='original_subscription_level',m=false;function n(t){t.biz_user_id=c('BusinessUserConf').biz_user_id;new (c('AsyncRequest'))('/ajax/notifications/mark_read.php').setData(t).send();}function o(t){var u={};t.forEach(function(v,w){u['alert_ids['+w+']']=v;});return u;}function p(t,u,v,w,x){var y=c('NotificationTokens').untokenizeIDs([t])[0],z={notification_id:y,client_rendered:true,request_type:u};Object.assign(z,v);new (c('AsyncRequest'))('/ajax/notifications/negative_req.php').setData(z).setHandler(w||c('emptyFunction')).setErrorHandler(x||c('emptyFunction')).send();}function q(t,u,v,w,x){var y=c('XNotificationsOptionsController').getURIBuilder().setInt('notif_id',c('NotificationTokens').untokenizeIDs([t])[0]).setInt('biz_user_id',c('BusinessUserConf').biz_user_id).setBool('undo',w).setString('server_action',x).getURI(),z=function aa(ba){if(!ba.payload)throw new Error('No response from notif option!');c('NotificationUpdates').handleUpdate(h,{hiddenState:c('createObjectFrom')([t],!ba.payload.visible)});u(ba.payload);};new (c('AsyncRequest'))(y).setHandler(z||c('emptyFunction')).setErrorHandler(v||c('emptyFunction')).send();}function r(t,u,v,w,x){var y=x?k:j;c('NotificationStore').getAll(function(z){var aa=Object.keys(z).filter(function(ba){var ca=z[ba];return !!(ca.application&&ca.application.id&&ca.application.id==u);});p(t,y,null,function(ba){v(ba);c('NotificationUpdates').handleUpdate(h,{hiddenState:c('createObjectFrom')(aa,!x)});},w);});}var s={markNotificationsAsSeen:function t(u){var v=document.getElementById('notificationsCountValue'),w=null;if(v)w=v.innerText;c('NotificationUpdates').handleUpdate(h,{seenState:c('createObjectFrom')(u)});var x=c('NotificationTokens').untokenizeIDs(u),y=o(x);y.seen=true;if(w)y.badgeCount=w;n(y);},setNextIsFromReadButton:function t(u){m=u;},markNotificationsAsRead:function t(u){c('NotificationUpdates').handleUpdate(h,{readState:c('createObjectFrom')(u)});var v=c('NotificationTokens').untokenizeIDs(u),w=o(v);if(m){w.from_read_button=true;m=false;}n(w);},sendNotifOption:function t(u,v,w,x){q(u,v,w,false,x);},undoNotifOption:function t(u,v,w,x){q(u,v,w,true,x);},markNotificationAsHidden:function t(u,v,w){c('NotificationUpdates').handleUpdate(h,{hiddenState:c('createObjectFrom')([u])});p(u,j,null,v,w);},markNotificationAsVisible:function t(u,v,w,x){c('NotificationUpdates').handleUpdate(h,{hiddenState:c('createObjectFrom')([u],false)});var y=null;if(v!==null){y={};y[l]=v;}p(u,k,y,w,x);},markNotificationAsSpam:function t(u,v,w){c('NotificationUpdates').handleUpdate(h,{hiddenState:c('createObjectFrom')([u],true)});p(u,i,null,v,w);},markAppAsHidden:function t(u,v,w,x){var y=false;r(u,v,w,x,y);},markAppAsVisible:function t(u,v,w,x){var y=true;r(u,v,w,x,y);}};f.exports=s;}),null);
__d('NotificationInterpolator',['Badge.react','React'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j){var k=null;if(j.entity.is_viewer_coworker===false||j.entity.is_multi_company_group===true)k=c('React').createElement(c('Badge.react'),{type:'work_non_coworker'});return c('React').createElement('span',{className:'fwb'},i,k);}f.exports=h;}),null);
__d('TickerController',['invariant','Arbiter','AsyncSignal','Bootloader','CSS','DOM','Parent','UIPagelet','Vector','$','emptyFunction','ge'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=1,j=2,k=3,l=4,m=15000,n=null,o={},p={},q={setActiveInstance:function r(s){n=s;},getActiveInstance:function r(){return n;},clearRHCplaceholder:function r(){o.pagelet_rhc_ticker=null;},registerInstance:function r(s,t){!s?h(0):void 0;p[s]=t;q.setActiveInstance(t);},getInstance:function r(s){if(!s)return null;var t=c('Parent').byClass(c('$')(s),'fbFeedTicker');return p[t.id]||null;},isLoaded:function r(s){var t=o[s.id];return !t||t.status==k;},show:function r(s,t){t=t||c('emptyFunction');for(var u in p){var v=c('ge')(u);if(!v||v.parentNode.id==s.id)continue;q.hide(v.parentNode);}q._doPositionChange(s);c('CSS').show(s);var w=o[s.id];if(w&&w.status==i){var x=(c('Vector').getElementDimensions(s).y||0)>0,y=s.id==='pagelet_rhc_ticker'&&!c('CSS').hasClass(s,'hidden_rhc_ticker');if(x||y){var z=c('DOM').scry(s,'.tickerPlaceholderSpinner')[0];z&&c('CSS').show(z);q._fetchTickerForPlaceholder(s,t);}else c('Arbiter').subscribe('Ticker/resized',function(){if(w.status==i)q._fetchTickerForPlaceholder(s,t);});}else{var aa=c('DOM').scry(s,'.fbFeedTicker')[0],ba=q.getInstance(aa);n=ba;ba&&ba._poll();o[s.id]={status:l,callback:t};t();}c('Arbiter').inform('ticker/show',{node:s,callback:t});},_doPositionChange:function r(s){if(c('CSS').shown(s))return;new (c('AsyncSignal'))('/common/ods_endpoint.php',{k:'ticker.render.switch.'+s.id}).send();},hide:function r(s){var t=c('DOM').scry(s,'.fbFeedTicker')[0],u=q.getInstance(t);u&&u.hideActiveStory();c('CSS').hide(s);},hideStoriesByClass:function r(s){for(var t in p)c('DOM').scry(c('$')(t),s).forEach(c('CSS').hide);},hideStory:function r(s){var t=q.getInstance(s);t&&t.hideStory(s);},replaceStory:function r(s,t){var u=c('DOM').scry(document.body,'div.fbFeedTickerStory'),v=q.getInstance(u[0]);if(!v)return;var w=v._findStoryById(s);v.handleRemoveStory();c('CSS').hide(w);c('DOM').insertAfter(w,t);t.setAttribute('data-story-id',w.getAttribute('id'));var x=setTimeout(function(){return q.removeMarkup(t,w);},m);t.setAttribute('data-timeout-token',x);},removeMarkup:function r(s,t){c('Bootloader').loadModules(["Animation"],function(u){c('CSS').addClass(s,'removedStoryMarkup');new u(s).to('height',0).duration(500).ondone(function(){c('DOM').remove(s);}).go();},'TickerController');},undoHideStory:function r(s){var t=q.getInstance(s);t&&t.undoHideStory(s);},insertStoriesAtBottom:function r(s){n.insertStoriesAtBottom(s);},_fetchTickerForPlaceholder:function r(s,t){var u={handler:function v(){o[s.id].status=k;t();}};c('UIPagelet').loadFromEndpoint('TickerEntStoryPagelet',s.id,o[s.id].pageletData,u);o[s.id].status=j;},registerStoryDialog:function r(s,t){c('Arbiter').subscribe('ticker/init',function(){var u=c('ge')(s),v=q.getInstance(u);v&&v.registerStoryDialog(u,t);},c('Arbiter').SUBSCRIBE_ALL);},registerPlaceholder:function r(s,t){var u=o[s];o[s]={status:i,pageletData:t};if(u&&u.status==l){q.show(c('$')(s));u.callback();}}};f.exports=q;}),null);
__d('TickerRightColumnController',['Arbiter','CSS','DOM','Event','NavigationMessage','Run','Style','SubscriptionsHandler','TickerController','Vector','ge','throttle'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h;function i(){var n=c('ge')('pagelet_rhc_ticker');n&&c('TickerController').show(n,k);}function j(){var n=c('ge')('pagelet_rhc_ticker');n&&c('TickerController').hide(n);}function k(){var n=c('ge')('pagelet_rhc_ticker'),o=c('DOM').scry(n,'.ticker_container')[0],p=c('DOM').scry(n,'.ticker_stream')[0],q=c('ge')('rightCol');if(!n||!o||!p||!q)return;c('Style').set(o,'height','0');var r=75,s=c('Vector').getViewportDimensions().y,t=c('Vector').getElementDimensions(q).y,u=s-t-r,v=c('Vector').getElementDimensions(p).y,w=Math.max(Math.min(u,v,h.tickerMaxHeight||425),h.tickerMinHeight||225);c('Style').set(o,'height',w+'px');}function l(n){var o=c('ge')('pagelet_reminders'),p=c('ge')('pagelet_rhc_ticker'),q=o&&c('DOM').scry(o,'div.tickerToggleWrapper')[0],r=p&&c('DOM').scry(p,'div.tickerToggleWrapper')[0];q&&c('CSS').conditionClass(q,'displayedTickerToggleWrapper',!n);r&&c('CSS').conditionClass(r,'displayedTickerToggleWrapper',n);p&&c('CSS').conditionClass(p,'hidden_rhc_ticker',!n);if(n){k();var s=c('ge')('fbTickerClosedEd');s&&c('CSS').hide(s);}}var m={init:function n(o){h=o;var p=new (c('SubscriptionsHandler'))();if(h.enableSidebar)p.addSubscriptions(c('Arbiter').subscribe('sidebar/visibility',function(r,s){if(s){j();}else i();}),c('Arbiter').subscribe('minisidebar/show',i),c('Arbiter').subscribe('LitestandClassicRHC/loaded',k),c('Event').listen(window,'scroll',c('throttle')(function(){var r=c('DOM').scry(c('ge')('pagelet_rhc_ticker'),'.fbFeedTicker')[0],s=c('TickerController').getInstance(r);s&&s.handleRemoveStory();})));if(!c('CSS').hasClass(document.documentElement,'sidebarMode')){i();}else if(h.enableSidebar)j();var q=function r(){p.release();};c('Arbiter').subscribeOnce(c('NavigationMessage').NAVIGATION_BEGIN,q);c('Run').onLeave(q);},initRHCTickerHider:function n(o){c('Event').listen(o,'click',this.hideRHCTicker);},showRHCTicker:function n(){l(true);},hideRHCTicker:function n(){l(false);}};f.exports=m;}),null);
__d('tickerPhoteSnowLiftOpenStatus',['ArbiterMixin'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h='CheckIsOpen',i={registerOpenChecker:function j(k){return i.subscribe(h,function(l,m){if(k())m.is_Open=true;});},checkIsOpen:function j(){var k={is_Open:false};i.inform(h,k);return k.is_Open;}};Object.assign(i,c('ArbiterMixin'));f.exports=i;}),null);