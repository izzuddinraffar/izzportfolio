(function(t){function e(e){for(var n,i,s=e[0],c=e[1],l=e[2],u=0,f=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,i=1;i<r.length;i++){var c=r[i];0!==a[c]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},a={app:0},o=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"854e429d"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(t){var e=[],r=a[t];if(0!==r)if(r)e.push(r[2]);else{var n=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=n);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t);var l=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(u);var r=a[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",l.name="ChunkLoadError",l.type=n,l.request=o,r[1](l)}a[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/izzportfolio/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("19b3"),a=r.n(n);a.a},"19b3":function(t,e,r){},3123:function(t,e,r){},3976:function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{class:t.path},[r("Navbar"),r("Drawer"),r("v-content",[r("router-view",{staticClass:"pa-4"})],1)],1)},o=[],i=(r("ac1f"),r("5319"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("v-app-bar",{attrs:{flat:"",app:""}},[n("v-app-bar-nav-icon",{staticClass:"grey--text",on:{click:function(e){return e.stopPropagation(),t.drawerHandler(e)}}}),n("v-toolbar-title",{staticClass:"text-uppercase grey--text"},[n("span",{domProps:{innerHTML:t._s(this.$store.state.app.logo)}})]),n("v-spacer"),n("v-avatar",[n("v-img",{attrs:{src:r("915e")}})],1)],1)],1)}),s=[],c={methods:{drawerHandler:function(){this.$store.commit("drawerHandler")}}},l=c,u=r("2877"),d=r("6544"),f=r.n(d),p=r("40dc"),v=r("5bc1"),m=r("8212"),h=r("adda"),b=r("2fa4"),g=r("2a7f"),w=Object(u["a"])(l,i,s,!1,null,null,null),y=w.exports;f()(w,{VAppBar:p["a"],VAppBarNavIcon:v["a"],VAvatar:m["a"],VImg:h["a"],VSpacer:b["a"],VToolbarTitle:g["a"]});var _=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{attrs:{app:"",value:t.drawerOpened}},[n("v-img",{attrs:{"aspect-ratio":16/9,src:r("ab851")}},[n("v-row",{staticClass:"lightbox white--text pa-2 fill-height",attrs:{align:"end"}},[n("v-col",[n("div",{staticClass:"subheading"},[t._v(t._s(this.$store.state.user.name))]),n("div",{staticClass:"body-1"},[t._v(t._s(this.$store.state.user.email))])])],1)],1),n("v-list",[n("v-list-item-group",{attrs:{color:"primary"}},[t._l(t.drawerItems,(function(e,r){return[e.divider?n("v-divider",{key:r}):n("router-link",{key:r,attrs:{to:e.link}},[n("v-list-item",[n("v-list-item-action",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-item-title",[t._v(t._s(e.title))])],1)],1)]}))],2)],1)],1)},x=[],k={data:function(){return{}},computed:{drawerOpened:function(){return this.$store.state.drawer.status},drawerItems:function(){return this.$store.state.drawer.items}}},j=k,C=(r("a42d"),r("62ad")),V=r("ce7e"),O=r("132d"),$=r("8860"),T=r("da13"),A=r("1800"),E=r("1baa"),P=r("5d23"),S=r("f774"),z=r("0fd9"),I=Object(u["a"])(j,_,x,!1,null,"621d22dd",null),L=I.exports;f()(I,{VCol:C["a"],VDivider:V["a"],VIcon:O["a"],VImg:h["a"],VList:$["a"],VListItem:T["a"],VListItemAction:A["a"],VListItemGroup:E["a"],VListItemTitle:P["a"],VNavigationDrawer:S["a"],VRow:z["a"]});var M={name:"App",components:{Navbar:y,Drawer:L},mounted:function(){this.path="/"==this.$route.path?"home":this.$route.path.replace("/","")},watch:{$route:function(){this.path="/"==this.$route.path?"home":this.$route.path.replace("/","")}},data:function(){return{path:""}}},N=M,D=(r("034f"),r("7496")),H=r("a75b"),R=Object(u["a"])(N,a,o,!1,null,null,null),B=R.exports;f()(R,{VApp:D["a"],VContent:H["a"]});var F=r("9483");Object(F["a"])("".concat("/izzportfolio/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});r("d3b7");var J=r("8c4f"),q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container d-flex flex-column justify-center"},[r("div",{staticClass:"d-flex flex-column justify-center col-md-6"},[t._m(0),t._m(1),r("div",{staticClass:"d-flex align-center justify-end"},[r("v-btn",{staticClass:"white--text btn-width mr-5",attrs:{"x-large":"",color:"error"}},[r("v-icon",{attrs:{left:"",dark:""}},[t._v("mouse")]),t._v("GET STARTED ")],1),r("v-btn",{staticClass:" btn-width",attrs:{"x-large":"",outlined:"",color:"primary"}},[r("v-icon",{attrs:{left:"",dark:""}},[t._v("email")]),t._v("CONTACT ")],1)],1)])])},G=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h1",{staticClass:"text-uppercase blue--text display-3 font-weight-bold pt-2 pb-2 text-end"},[t._v(" Welcome to "),r("br"),t._v("my portfolio ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"darkblue--text display-1 pt-2 pb-10 text-end"},[t._v(" Experienced Front-end Developer. "),r("br"),t._v("Skilled in HTML, CSS, JS & more. ")])}],W=(r("cccb"),r("846f"),r("8336")),K={},Q=Object(u["a"])(K,q,G,!1,null,"97b7bb46",null),U=Q.exports;f()(Q,{VBtn:W["a"],VIcon:O["a"]}),n["a"].use(J["a"]);var X=[{path:"/",name:"home",component:U},{path:"/about",name:"about",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],Y=new J["a"]({mode:"history",base:"/izzportfolio/",routes:X}),Z=Y,tt=r("2f62");n["a"].use(tt["a"]);var et=new tt["a"].Store({state:{app:{title:"",logo:'<span class="font-weight-light">izzuddin</span>Raffar'},drawer:{status:!0,items:[{icon:"home",title:"Welcome",link:"/"},{icon:"person",title:"Profile",link:"/profile"},{icon:"dashboard",title:"Dashboard",link:"/dashboard"},{icon:"view_module",title:"Projects",link:"/projects"},{divider:!0},{icon:"assignment_ind",title:"My Resume",link:"/my-resume"},{icon:"share",title:"Repository",link:"/repository"},{icon:"info",title:"About",link:"/about"},{icon:"email",title:"Contact",link:"/contact"}]},user:{name:"Mohamad Izzuddin",email:"izzuddinraffar@gmail.com"}},mutations:{drawerHandler:function(t){t.drawer.status=!t.drawer.status}},actions:{},modules:{}}),rt=(r("d1e78"),r("f309"));n["a"].use(rt["a"]);var nt=new rt["a"]({icons:{iconfont:"md"}});n["a"].config.productionTip=!1,new n["a"]({router:Z,store:et,vuetify:nt,render:function(t){return t(B)}}).$mount("#app")},"846f":function(t,e,r){"use strict";var n=r("3976"),a=r.n(n);a.a},"915e":function(t,e,r){t.exports=r.p+"img/avatar.26618f30.jpg"},a42d:function(t,e,r){"use strict";var n=r("df5b"),a=r.n(n);a.a},ab851:function(t,e,r){t.exports=r.p+"img/material.ff63319c.webp"},cccb:function(t,e,r){"use strict";var n=r("3123"),a=r.n(n);a.a},df5b:function(t,e,r){}});
//# sourceMappingURL=app.b79d41e3.js.map