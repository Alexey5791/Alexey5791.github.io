/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=111},127:function(t,e,n){"use strict";var r=n(35);n.n(r).a},128:function(t,e,n){(t.exports=n(38)(!1)).push([t.i,".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}",""])},129:function(t,e,n){"use strict";var r=n(36);n.n(r).a},130:function(t,e,n){(t.exports=n(38)(!1)).push([t.i,".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#3b8070;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}",""])},131:function(t,e,n){"use strict";var r=n(37);n.n(r).a},132:function(t,e,n){(t.exports=n(38)(!1)).push([t.i,"html{font-family:Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0}.button--green{display:inline-block;border-radius:4px;border:1px solid #3b8070;color:#3b8070;text-decoration:none;padding:10px 30px}.button--green:hover{color:#fff;background-color:#3b8070}.button--grey{display:inline-block;border-radius:4px;border:1px solid #35495e;color:#35495e;text-decoration:none;padding:10px 30px;margin-left:15px}.button--grey:hover{color:#fff;background-color:#35495e}",""])},133:function(t,e,n){"use strict";n.r(e);n(56),n(44),n(45);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t){return(o="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(t){return r(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":r(t)})(t)}n(48),n(93);function c(t,e,n,r,o,c,l){try{var f=t[c](l),d=f.value}catch(t){return void n(t)}f.done?e(d):Promise.resolve(d).then(r,o)}function l(t){return function(){var e=this,n=arguments;return new Promise(function(r,o){var l=t.apply(e,n);function f(t){c(l,r,o,f,d,"next",t)}function d(t){c(l,r,o,f,d,"throw",t)}f(void 0)})}}n(68),n(70),n(73),n(24),n(75),n(53),n(74),n(98),n(110);var f=n(0),d=(n(80),n(111)),h=d.keys();function m(t){var e=d(t);return e.default||e}var v={},x=!0,y=!1,w=void 0;try{for(var _,C=h[Symbol.iterator]();!(x=(_=C.next()).done);x=!0){var k=_.value;v[k.replace(/^\.\//,"").replace(/\.(js|mjs|ts)$/,"")]=m(k)}}catch(t){y=!0,w=t}finally{try{x||null==C.return||C.return()}finally{if(y)throw w}}var $=v;n(112),n(113),n(114),n(116),n(118),n(119),n(122);function R(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function S(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},e=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(source).filter(function(t){return Object.getOwnPropertyDescriptor(source,t).enumerable}))),e.forEach(function(e){R(t,e,source[e])})}return t}function E(t){f.a.config.errorHandler&&f.a.config.errorHandler(t)}function T(t){return t.then(function(t){return t.default||t})}function N(t,e){if(e||!t.options.__hasNuxtData){var n=t.options._originDataFn||t.options.data||function(){return{}};t.options._originDataFn=n,t.options.data=function(){var data=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),S({},data,e)},t.options.__hasNuxtData=!0,t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)}}function O(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=f.a.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function j(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function A(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).reduce(function(r,o){return t.components[o]?r.push(e(t.components[o],t.instances[o],t,o,n)):delete t.components[o],r},[])}))}function P(t){return Promise.all(A(t,function(){var t=l(regeneratorRuntime.mark(function t(e,n,r,o){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return r.components[o]=O(e),t.abrupt("return",r.components[o]);case 6:case"end":return t.stop()}},t)}));return function(e,n,r,o){return t.apply(this,arguments)}}()))}function L(t){return M.apply(this,arguments)}function M(){return(M=l(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P(e);case 2:return t.abrupt("return",S({},e,{meta:j(e).map(function(t,n){return S({},t.options.meta,(e.matched[n]||{}).meta)})}));case 3:case"end":return t.stop()}},t)}))).apply(this,arguments)}function D(t,e){return U.apply(this,arguments)}function U(){return(U=l(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.context||(e.context={isStatic:!0,isDev:!1,isHMR:!1,app:e,payload:n.payload,error:n.error,base:"/",env:{}},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),e.context.redirect=function(t,path,n){if(t){e.context._redirected=!0;var r=o(path);if("number"==typeof t||"undefined"!==r&&"object"!==r||(n=path||{},r=o(path=t),t=302),"object"===r&&(path=e.router.resolve(path).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path))throw path=V(path,n),window.location.replace(path),new Error("ERR_REDIRECT");e.context.next({path:path,query:n,status:t})}},e.context.nuxtState=window.__NUXT__),e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,!n.route){t.next=9;break}return t.next=8,L(n.route);case 8:e.context.route=t.sent;case 9:if(e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{},!n.from){t.next=15;break}return t.next=14,L(n.from);case 14:e.context.from=t.sent;case 15:case"end":return t.stop()}},t)}))).apply(this,arguments)}function I(t,e){var n;return(n=2===t.length?new Promise(function(n){t(e,function(t,data){t&&e.error(t),n(data=data||{})})}):t(e))&&(n instanceof Promise||"function"==typeof n.then)||(n=Promise.resolve(n)),n}function B(base,t){var path=window.location.pathname;return"hash"===t?window.location.hash.replace(/^#\//,""):(base&&0===path.indexOf(base)&&(path=path.slice(base.length)),decodeURI(path||"/")+window.location.search+window.location.hash)}function z(t,e){return function(t){for(var e=new Array(t.length),i=0;i<t.length;i++)"object"===o(t[i])&&(e[i]=new RegExp("^(?:"+t[i].pattern+")$"));return function(n,r){for(var path="",data=n||{},o=r||{},c=o.pretty?K:encodeURIComponent,l=0;l<t.length;l++){var f=t[l];if("string"!=typeof f){var d=data[f.name||"pathMatch"],h=void 0;if(null==d){if(f.optional){f.partial&&(path+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(Array.isArray(d)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+JSON.stringify(d)+"`");if(0===d.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var m=0;m<d.length;m++){if(h=c(d[m]),!e[l].test(h))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+JSON.stringify(h)+"`");path+=(0===m?f.prefix:f.delimiter)+h}}else{if(h=f.asterisk?encodeURI(d).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):c(d),!e[l].test(h))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+h+'"');path+=f.prefix+h}}else path+=f}return path}}(function(t,e){var n,r=[],o=0,c=0,path="",l=e&&e.delimiter||"/";for(;null!=(n=H.exec(t));){var f=n[0],d=n[1],h=n.index;if(path+=t.slice(c,h),c=h+f.length,d)path+=d[1];else{var m=t[c],v=n[2],x=n[3],y=n[4],w=n[5],_=n[6],C=n[7];path&&(r.push(path),path="");var k=null!=v&&null!=m&&m!==v,$="+"===_||"*"===_,R="?"===_||"*"===_,S=n[2]||l,pattern=y||w;r.push({name:x||o++,prefix:v||"",delimiter:S,optional:R,repeat:$,partial:k,asterisk:!!C,pattern:pattern?G(pattern):C?".*":"[^"+Q(S)+"]+?"})}}c<t.length&&(path+=t.substr(c));path&&r.push(path);return r}(t,e))}function J(t,e){var n={},r=S({},t,e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n}function F(t){var e;if(t.message||"string"==typeof t)e=t.message||t;else try{e=JSON.stringify(t,null,2)}catch(n){e="[".concat(t.constructor.name,"]")}return S({},t,{message:e,statusCode:t.statusCode||t.status||t.response&&t.response.status||500})}window.onNuxtReadyCbs=[],window.onNuxtReady=function(t){window.onNuxtReadyCbs.push(t)};var H=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function K(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function Q(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function G(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function V(t,e){var n,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):t.startsWith("//")&&(t=t.substring(2));var o,c=t.split("/"),l=(n?n+"://":"//")+c.shift(),path=c.filter(Boolean).join("/");return 2===(c=path.split("#")).length&&(path=c[0],o=c[1]),l+=path?"/"+path:"",e&&"{}"!==JSON.stringify(e)&&(l+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),l+=o?"#"+o:""}var W=n(81),X=n.n(W),Y=n(55),Z=function(){return T(n.e(2).then(n.bind(null,141)))},tt=function(){return T(n.e(4).then(n.bind(null,142)))},et=function(){return T(n.e(3).then(n.bind(null,140)))};f.a.use(Y.a),"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual",window.addEventListener("beforeunload",function(){window.history.scrollRestoration="auto"}),window.addEventListener("load",function(){window.history.scrollRestoration="manual"}));var nt=function(t,e,n){var r=!1;return t.matched.length<2&&t.matched.every(function(t){return!1!==t.components.default.options.scrollToTop})?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new Promise(function(e){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})};var ot=n(82),it=S({},n.n(ot).a,{name:"NoSsr"}),at={name:"NuxtChild",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0}},render:function(t,e){var n=e.parent,data=e.data,r=e.props;data.nuxtChild=!0;for(var o=n,c=n.$nuxt.nuxt.transitions,l=n.$nuxt.nuxt.defaultTransition,f=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&f++,n=n.$parent;data.nuxtChildDepth=f;var d=c[f]||l,h={};st.forEach(function(t){void 0!==d[t]&&(h[t]=d[t])});var m={};ut.forEach(function(t){"function"==typeof d[t]&&(m[t]=d[t].bind(o))});var v=m.beforeEnter;m.beforeEnter=function(t){if(window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")}),v)return v.call(o,t)};var x=[t("router-view",data)];return r.keepAlive&&(x=[t("keep-alive",{props:r.keepAliveProps},x)]),t("transition",{props:h,on:m},x)}},st=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],ut=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"],ct={name:"NuxtError",props:{error:{type:Object,default:null}},head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}},pt=(n(127),n(13)),lt=Object(pt.a)(ct,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[n("div",{staticClass:"error"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[n("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(t.message))]),t._v(" "),404===t.statusCode?n("p",{staticClass:"description"},[n("NuxtLink",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._v(" "),t._m(0)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}],!1,null,null,null).exports,ft={name:"Nuxt",components:{NuxtChild:at,NuxtError:lt},props:{nuxtChildKey:{type:String,default:void 0},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0},name:{type:String,default:"default"}},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||z(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},beforeCreate:function(){f.a.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},render:function(t){return this.nuxt.err?t("NuxtError",{props:{error:this.nuxt.err}}):t("NuxtChild",{key:this.routerViewKey,props:this.$props})}},ht={name:"NuxtLoading",data:function(){return{percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}},computed:{left:function(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy:function(){this.clear()},methods:{clear:function(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start:function(){var t=this;return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout(function(){return t.startTimer()},this.throttle):this.startTimer(),this},set:function(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get:function(){return this.percent},increase:function(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease:function(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause:function(){return clearInterval(this._timer),this},resume:function(){return this.startTimer(),this},finish:function(){return this.percent=this.reversed?0:100,this.hide(),this},hide:function(){var t=this;return this.clear(),setTimeout(function(){t.show=!1,t.$nextTick(function(){t.percent=0,t.reversed=!1})},500),this},fail:function(){return this.canSucceed=!1,this},startTimer:function(){var t=this;this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval(function(){t.skipTimerCount>0?t.skipTimerCount--:(t.reversed?t.decrease(t._cut):t.increase(t._cut),t.continuous&&(t.percent>=100?(t.skipTimerCount=1,t.reversed=!t.reversed):t.percent<=0&&(t.skipTimerCount=1,t.reversed=!t.reversed)))},100)}},render:function(t){var e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}},mt=(n(129),Object(pt.a)(ht,void 0,void 0,!1,null,null,null).exports),vt=(n(131),{_default:Object(pt.a)({},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("nuxt")],1)},[],!1,null,null,null).exports}),xt={head:{title:"vue-spa",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"Nuxt.js project"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}],style:[],script:[]},render:function(t,e){var n=t("NuxtLoading",{ref:"loading"}),r=t(this.layout||"nuxt"),o=t("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),c=t("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter:function(t){window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")})}}},[o]);return t("div",{domProps:{id:"__nuxt"}},[n,c])},data:function(){return{isOnline:!0,layout:null,layoutName:""}},beforeCreate:function(){f.a.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){f.a.prototype.$nuxt=this,window.$nuxt=this,this.refreshOnlineStatus(),window.addEventListener("online",this.refreshOnlineStatus),window.addEventListener("offline",this.refreshOnlineStatus),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},computed:{isOffline:function(){return!this.isOnline}},methods:{refreshOnlineStatus:function(){void 0===window.navigator.onLine?this.isOnline=!0:this.isOnline=window.navigator.onLine},errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){return t&&vt["_"+t]||(t="default"),this.layoutName=t,this.layout=vt["_"+t],this.layout},loadLayout:function(t){return t&&vt["_"+t]||(t="default"),Promise.resolve(vt["_"+t])}},components:{NuxtLoading:mt}};f.a.component(it.name,it),f.a.component(at.name,at),f.a.component("NChild",at),f.a.component(ft.name,ft),f.a.use(X.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var gt={name:"page",mode:"out-in",appear:!0,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};function yt(){return(yt=l(regeneratorRuntime.mark(function t(e){var n,r,o,c,path;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Y.a({mode:"history",base:"/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:nt,routes:[{path:"/about",component:Z,name:"about"},{path:"/projects",component:tt,name:"projects"},{path:"/",component:et,name:"index"}],fallback:!1});case 2:return n=t.sent,r=S({router:n,nuxt:{defaultTransition:gt,transitions:[gt],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?Object.assign({},gt,{name:t}):Object.assign({},gt,t):gt}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,r.context._errored=!!t,t=t?F(t):null;var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},xt),o=e?e.next:function(t){return r.router.push(t)},e?c=n.resolve(e.url).route:(path=B(n.options.base),c=n.resolve(path).route),t.next=8,D(r,{route:c,next:o,error:r.nuxt.error.bind(r),payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0});case 8:t.next=11;break;case 11:return t.abrupt("return",{app:r,router:n});case 12:case"end":return t.stop()}},t)}))).apply(this,arguments)}var bt=window.requestIdleCallback||function(t){var e=Date.now();return setTimeout(function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-e))}})},1)},wt=window.IntersectionObserver&&new window.IntersectionObserver(function(t){t.forEach(function(t){var e=t.intersectionRatio,link=t.target;e<=0||link.__prefetch()})}),_t={name:"NuxtLink",extends:f.a.component("RouterLink"),props:{noPrefetch:{type:Boolean,default:!1}},mounted:function(){this.noPrefetch||bt(this.observe,{timeout:2e3})},beforeDestroy:function(){this.__observed&&(wt.unobserve(this.$el),delete this.$el.__prefetch)},methods:{observe:function(){wt&&this.shouldPrefetch()&&(this.$el.__prefetch=this.prefetch.bind(this),wt.observe(this.$el),this.__observed=!0)},shouldPrefetch:function(){return this.getPrefetchComponents().length>0},canPrefetch:function(){var t=navigator.connection;return!(this.$nuxt.isOffline||t&&((t.effectiveType||"").includes("2g")||t.saveData))},getPrefetchComponents:function(){return this.$router.resolve(this.to,this.$route,this.append).resolved.matched.map(function(t){return t.components.default}).filter(function(t){return"function"==typeof t&&!t.options&&!t.__prefetched})},prefetch:function(){if(this.canPrefetch()){wt.unobserve(this.$el);var t=this.getPrefetchComponents(),e=!0,n=!1,r=void 0;try{for(var o,c=t[Symbol.iterator]();!(e=(o=c.next()).done);e=!0){var l=o.value;try{l(),l.__prefetched=!0}catch(t){}}}catch(t){n=!0,r=t}finally{try{e||null==c.return||c.return()}finally{if(n)throw r}}}}}};f.a.component(_t.name,_t),f.a.component("NLink",_t);var Ct,kt,$t=[],Rt=window.__NUXT__||{};Object.assign(f.a.config,{silent:!0,performance:!1});var St=f.a.config.errorHandler||console.error;function Et(t,e,n){var r=function(component){var t=function(component,t){if(!component||!component.options||!component.options[t])return{};var option=component.options[t];if("function"==typeof option){for(var e=arguments.length,n=new Array(e>2?e-2:0),r=2;r<e;r++)n[r-2]=arguments[r];return option.apply(void 0,n)}return option}(component,"transition",e,n)||{};return"string"==typeof t?{name:t}:t};return t.map(function(t){var e=Object.assign({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);Object.keys(o).filter(function(t){return o[t]&&t.toLowerCase().includes("leave")}).forEach(function(t){e[t]=o[t]})}return e})}function Tt(t,e,n){return Nt.apply(this,arguments)}function Nt(){return(Nt=l(regeneratorRuntime.mark(function t(e,n,r){var o,c,l,f,d=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!Ct.nuxt.err||n.path!==e.path,this._queryChanged=JSON.stringify(e.query)!==JSON.stringify(n.query),this._diffQuery=this._queryChanged?J(e.query,n.query):[],this._pathChanged&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),t.prev=4,t.next=7,P(e);case 7:o=t.sent,!this._pathChanged&&this._queryChanged&&o.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return d._diffQuery[t]})})&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),r(),t.next=23;break;case 12:if(t.prev=12,t.t0=t.catch(4),c=t.t0||{},l=c.statusCode||c.status||c.response&&c.response.status||500,f=c.message||"",!/^Loading chunk (\d)+ failed\./.test(f)){t.next=20;break}return window.location.reload(!0),t.abrupt("return");case 20:this.error({statusCode:l,message:f}),this.$nuxt.$emit("routeChanged",e,n,c),r();case 23:case"end":return t.stop()}},t,this,[[4,12]])}))).apply(this,arguments)}function Ot(t,e){return Rt.serverRendered&&e&&N(t,e),t._Ctor=t,t}function jt(t,e,n){var r=this,o=[],c=!1;if(void 0!==n&&(o=[],(n=O(n)).options.middleware&&(o=o.concat(n.options.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"==typeof t?t:("function"!=typeof $[t]&&(c=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),$[t])}),!c)return function t(e,n){return!e.length||n._redirected||n._errored?Promise.resolve():I(e[0],n).then(function(){return t(e.slice(1),n)})}(o,e)}function At(t,e,n){return Pt.apply(this,arguments)}function Pt(){return(Pt=l(regeneratorRuntime.mark(function t(e,n,r){var o,c,l,f,d,h,m,v,x,y,w,_,C,k,$,R,S=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return $t=e===n?[]:j(n,o=[]).map(function(t,i){return z(n.matched[o[i]].path)(n.params)}),c=!1,l=function(path){n.path===path.path&&S.$loading.finish&&S.$loading.finish(),n.path!==path.path&&S.$loading.pause&&S.$loading.pause(),c||(c=!0,r(path))},t.next=7,D(Ct,{route:e,from:n,next:l.bind(this)});case 7:if(this._dateLastError=Ct.nuxt.dateErr,this._hadError=!!Ct.nuxt.err,(d=j(e,f=[])).length){t.next=25;break}return t.next=14,jt.call(this,d,Ct.context);case 14:if(!c){t.next=16;break}return t.abrupt("return");case 16:return t.next=18,this.loadLayout("function"==typeof lt.layout?lt.layout(Ct.context):lt.layout);case 18:return h=t.sent,t.next=21,jt.call(this,d,Ct.context,h);case 21:if(!c){t.next=23;break}return t.abrupt("return");case 23:return Ct.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 25:return d.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(Et(d,e,n)),t.prev=27,t.next=30,jt.call(this,d,Ct.context);case 30:if(!c){t.next=32;break}return t.abrupt("return");case 32:if(!Ct.context._errored){t.next=34;break}return t.abrupt("return",r());case 34:return"function"==typeof(m=d[0].options.layout)&&(m=m(Ct.context)),t.next=38,this.loadLayout(m);case 38:return m=t.sent,t.next=41,jt.call(this,d,Ct.context,m);case 41:if(!c){t.next=43;break}return t.abrupt("return");case 43:if(!Ct.context._errored){t.next=45;break}return t.abrupt("return",r());case 45:v=!0,t.prev=46,x=!0,y=!1,w=void 0,t.prev=50,_=d[Symbol.iterator]();case 52:if(x=(C=_.next()).done){t.next=64;break}if("function"==typeof(k=C.value).options.validate){t.next=56;break}return t.abrupt("continue",61);case 56:return t.next=58,k.options.validate(Ct.context);case 58:if(v=t.sent){t.next=61;break}return t.abrupt("break",64);case 61:x=!0,t.next=52;break;case 64:t.next=70;break;case 66:t.prev=66,t.t0=t.catch(50),y=!0,w=t.t0;case 70:t.prev=70,t.prev=71,x||null==_.return||_.return();case 73:if(t.prev=73,!y){t.next=76;break}throw w;case 76:return t.finish(73);case 77:return t.finish(70);case 78:t.next=84;break;case 80:return t.prev=80,t.t1=t.catch(46),this.error({statusCode:t.t1.statusCode||"500",message:t.t1.message}),t.abrupt("return",r());case 84:if(v){t.next=87;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 87:return t.next=89,Promise.all(d.map(function(t,i){if(t._path=z(e.matched[f[i]].path)(e.params),t._dataRefresh=!1,S._pathChanged&&S._queryChanged||t._path!==$t[i])t._dataRefresh=!0;else if(!S._pathChanged&&S._queryChanged){var n=t.options.watchQuery;!0===n?t._dataRefresh=!0:Array.isArray(n)&&(t._dataRefresh=n.some(function(t){return S._diffQuery[t]}))}if(!S._hadError&&S._isMounted&&!t._dataRefresh)return Promise.resolve();var r=[],o=t.options.asyncData&&"function"==typeof t.options.asyncData,c=!!t.options.fetch,l=o&&c?30:45;if(o){var d=I(t.options.asyncData,Ct.context).then(function(e){N(t,e),S.$loading.increase&&S.$loading.increase(l)});r.push(d)}if(S.$loading.manual=!1===t.options.loading,c){var p=t.options.fetch(Ct.context);p&&(p instanceof Promise||"function"==typeof p.then)||(p=Promise.resolve(p)),p.then(function(t){S.$loading.increase&&S.$loading.increase(l)}),r.push(p)}return Promise.all(r)}));case 89:c||(this.$loading.finish&&!this.$loading.manual&&this.$loading.finish(),r()),t.next=106;break;case 92:if(t.prev=92,t.t2=t.catch(27),"ERR_REDIRECT"!==($=t.t2||{}).message){t.next=97;break}return t.abrupt("return",this.$nuxt.$emit("routeChanged",e,n,$));case 97:return $t=[],E($),"function"==typeof(R=lt.layout)&&(R=R(Ct.context)),t.next=103,this.loadLayout(R);case 103:this.error($),this.$nuxt.$emit("routeChanged",e,n,$),r();case 106:case"end":return t.stop()}},t,this,[[27,92],[46,80],[50,66,70,78],[71,,73,77]])}))).apply(this,arguments)}function Lt(t,e){A(t,function(t,e,n,r){return"object"!==o(t)||t.options||((t=f.a.extend(t))._Ctor=t,n.components[r]=t),t})}function Mt(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?lt.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(Ct.context)),this.setLayout(e)}function Dt(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||f.a.nextTick(function(){var e=[],r=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))}(t,e),o=j(t,e);r.forEach(function(t,i){if(t&&t.constructor._dataRefresh&&o[i]===t.constructor&&"function"==typeof t.constructor.options.data){var e=t.constructor.options.data.call(t);for(var n in e)f.a.set(t.$data,n,e[n])}}),Mt.call(n,t)})}function qt(t){window.onNuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),kt.afterEach(function(e,n){f.a.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}function Ut(){return(Ut=l(regeneratorRuntime.mark(function t(e){var n,r,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return Ct=e.app,kt=e.router,t.next=4,Promise.all((path=void 0,path=B((c=kt).options.base,c.options.mode),A(c.match(path),function(){var t=l(regeneratorRuntime.mark(function t(e,n,r,o,c){var l;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return l=Ot(O(e),Rt.data?Rt.data[c]:null),r.components[o]=l,t.abrupt("return",l);case 7:case"end":return t.stop()}},t)}));return function(e,n,r,o,c){return t.apply(this,arguments)}}())));case 4:if(n=t.sent,r=new f.a(Ct),o=function(){r.$mount("#__nuxt"),f.a.nextTick(function(){qt(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(Et(n,kt.currentRoute)),$t=kt.currentRoute.matched.map(function(t){return z(t.path)(kt.currentRoute.params)})),r.$loading={},Rt.error&&r.error(Rt.error),kt.beforeEach(Tt.bind(r)),kt.beforeEach(At.bind(r)),kt.afterEach(Lt),kt.afterEach(Dt.bind(r)),!Rt.serverRendered){t.next=18;break}return o(),t.abrupt("return");case 18:At.call(r,kt.currentRoute,kt.currentRoute,function(path){if(!path)return Lt(kt.currentRoute,kt.currentRoute),Mt.call(r,kt.currentRoute),void o();kt.push(path,function(){return o()},function(t){if(!t)return o();St(t)})});case 19:case"end":return t.stop()}var c,path},t)}))).apply(this,arguments)}(function(t){return yt.apply(this,arguments)})().then(function(t){return Ut.apply(this,arguments)}).catch(function(t){t.message="[nuxt] Error while mounting app: "+t.message,St(t)})},35:function(t,e,n){var content=n(128);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("b675d82e",content,!0,{sourceMap:!1})},36:function(t,e,n){var content=n(130);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("17cfdfa9",content,!0,{sourceMap:!1})},37:function(t,e,n){var content=n(132);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("aab9a468",content,!0,{sourceMap:!1})},38:function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var content=function(t,e){var content=t[1]||"",n=t[3];if(!n)return content;if(e&&"function"==typeof btoa){var r=(c=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(c))))+" */"),o=n.sources.map(function(source){return"/*# sourceURL="+n.sourceRoot+source+" */"});return[content].concat(o).concat([r]).join("\n")}var c;return[content].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+content+"}":content}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(i=0;i<t.length;i++){var c=t[i];null!=c[0]&&r[c[0]]||(n&&!c[2]?c[2]=n:n&&(c[2]="("+c[2]+") and ("+n+")"),e.push(c))}},e}},39:function(t,e,n){"use strict";function r(t,e){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],c=o[0],l={id:t+":"+i,css:o[1],media:o[2],sourceMap:o[3]};r[c]?r[c].parts.push(l):n.push(r[c]={id:c,parts:[l]})}return n}n.r(e),n.d(e,"default",function(){return y});var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c={},head=o&&(document.head||document.getElementsByTagName("head")[0]),l=null,f=0,d=!1,h=function(){},m=null,v="data-vue-ssr-id",x="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function y(t,e,n,o){d=n,m=o||{};var l=r(t,e);return w(l),function(e){for(var n=[],i=0;i<l.length;i++){var o=l[i];(f=c[o.id]).refs--,n.push(f)}e?w(l=r(t,e)):l=[];for(i=0;i<n.length;i++){var f;if(0===(f=n[i]).refs){for(var d=0;d<f.parts.length;d++)f.parts[d]();delete c[f.id]}}}}function w(t){for(var i=0;i<t.length;i++){var e=t[i],n=c[e.id];if(n){n.refs++;for(var r=0;r<n.parts.length;r++)n.parts[r](e.parts[r]);for(;r<e.parts.length;r++)n.parts.push(C(e.parts[r]));n.parts.length>e.parts.length&&(n.parts.length=e.parts.length)}else{var o=[];for(r=0;r<e.parts.length;r++)o.push(C(e.parts[r]));c[e.id]={id:e.id,refs:1,parts:o}}}}function _(){var t=document.createElement("style");return t.type="text/css",head.appendChild(t),t}function C(t){var e,n,r=document.querySelector("style["+v+'~="'+t.id+'"]');if(r){if(d)return h;r.parentNode.removeChild(r)}if(x){var o=f++;r=l||(l=_()),e=R.bind(null,r,o,!1),n=R.bind(null,r,o,!0)}else r=_(),e=function(t,e){var n=e.css,r=e.media,o=e.sourceMap;r&&t.setAttribute("media",r);m.ssrId&&t.setAttribute(v,e.id);o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}var k,$=(k=[],function(t,e){return k[t]=e,k.filter(Boolean).join("\n")});function R(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=$(e,o);else{var c=document.createTextNode(o),l=t.childNodes;l[e]&&t.removeChild(l[e]),l.length?t.insertBefore(c,l[e]):t.appendChild(c)}}},82:function(t,e,n){"use strict";var r={name:"NoSsr",functional:!0,props:{placeholder:String,placeholderTag:{type:String,default:"div"}},render:function(t,e){var n=e.parent,r=e.slots,o=e.props,c=r(),l=c.default;void 0===l&&(l=[]);var f=c.placeholder;return n._isMounted?l:(n.$once("hook:mounted",function(){n.$forceUpdate()}),o.placeholderTag&&(o.placeholder||f)?t(o.placeholderTag,{class:["no-ssr-placeholder"]},o.placeholder||f):l.length>0?l.map(function(){return t(!1)}):t(!1))}};t.exports=r},83:function(t,e,n){t.exports=n(133)}},[[83,5,1]]]);