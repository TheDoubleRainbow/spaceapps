(function(t){function e(e){for(var a,o,i=e[0],u=e[1],c=e[2],l=0,p=[];l<i.length;l++)o=i[l],r[o]&&p.push(r[o][0]),r[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);f&&f(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,o=1;o<n.length;o++){var u=n[o];0!==r[u]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},s=[];function o(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"b8cabc56"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise(function(e,a){n=r[t]=[e,a]});e.push(n[2]=a);var s,u=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=o(t),s=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+a+": "+s+")");o.type=a,o.request=s,n[1](o)}r[t]=void 0}};var l=setTimeout(function(){s({type:"timeout",target:c})},12e4);c.onerror=c.onload=s,u.appendChild(c)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var f=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"16a4":function(t,e,n){"use strict";var a=n("69ab"),r=n.n(a);r.a},2856:function(t,e,n){},"500a":function(t,e,n){"use strict";var a=n("64e5"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("topMenu"),n("router-view")],1)},s=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"nav"},[n("div",{staticClass:"container"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-2 nav__name"},[t._v("\n                Felix in the space\n            ")]),n("div",{staticClass:"column is-6 nav__links"},[n("div",{staticClass:"columns"},[n("router-link",{staticClass:"column is-2 nav__link",attrs:{to:"/"}},[n("span",[t._v("Home")])]),n("router-link",{staticClass:"column is-2 nav__link",attrs:{to:"/about"}},[n("span",[t._v("About")])])],1)]),n("div",{staticClass:"column is-1 nav__separator"}),t._m(0)])])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"column is-3 nav__search"},[n("input",{staticClass:"input",attrs:{placeholder:"Search",type:"text"}})])}],u={name:"Menu"},c=u,l=(n("500a"),n("2877")),f=Object(l["a"])(c,o,i,!1,null,null,null);f.options.__file="menu.vue";var p=f.exports,v={name:"app",components:{topMenu:p},created:function(){this.$store.dispatch("getData")}},d=v,m=(n("5c0b"),Object(l["a"])(d,r,s,!1,null,null,null));m.options.__file="App.vue";var _=m.exports,h=n("8c4f"),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nearest")},g=[],y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"columns"},[t.nearest?n("div",{staticClass:"column is-6 is-offset-2 nearest"},[n("div",{staticClass:"nearest__label"},[t._v("Nearest launch")]),n("div",{staticClass:"nearest__time"},[n("div",{staticClass:"nearest__time__timer"},[t._v("5d 22h 58m 69s")]),n("div",{staticClass:"nearest__time__date"},[t._v(t._s(t.nearest.net))])]),n("div",{staticClass:"nearest__name"},[t._v("\n                "+t._s(t.nearest.name)+"\n            ")]),n("a",{staticClass:"nearest__more-info",attrs:{href:"#"}},[t._v("More info")])]):t._e()])])},C=[],j={name:"nearest",data:function(){return{timer:""}},methods:{getTimer:function(){}},computed:{nearest:function(){return!!this.$store.state.nearest&&this.$store.state.nearest.launches[0]}},created:function(){}},w=j,x=(n("16a4"),Object(l["a"])(w,y,C,!1,null,null,null));x.options.__file="nearest.vue";var O=x.exports,k={name:"home",components:{nearest:O}},$=k,E=Object(l["a"])($,b,g,!1,null,null,null);E.options.__file="Home.vue";var M=E.exports;a["a"].use(h["a"]);var P=new h["a"]({routes:[{path:"/",name:"home",component:M},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),S=n("2f62");a["a"].use(S["a"]);var T=new S["a"].Store({state:{apiData:void 0,nearest:void 0},mutations:{getData:function(t){fetch("https://launchlibrary.net/1.4/launch/next/1").then(function(t){return t.json()}).then(function(e){t.nearest=e,console.log(e),fetch("https://launchlibrary.net/1.4/launch/next/200").then(function(t){return t.json()}).then(function(e){t.apiData=e,console.log(e)})})}},actions:{getData:function(t){t.commit("getData")}}});a["a"].config.productionTip=!1,new a["a"]({router:P,store:T,render:function(t){return t(_)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("2856"),r=n.n(a);r.a},"64e5":function(t,e,n){},"69ab":function(t,e,n){}});
//# sourceMappingURL=app.e71e867f.js.map