(function(t){function e(e){for(var a,o,c=e[0],r=e[1],l=e[2],m=0,d=[];m<c.length;m++)o=c[m],n[o]&&d.push(n[o][0]),n[o]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,o=1;o<s.length;o++){var r=s[o];0!==n[r]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=s[0]))}return t}var a={},n={app:0},i=[];function o(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"b8cabc56"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.e=function(t){var e=[],s=n[t];if(0!==s)if(s)e.push(s[2]);else{var a=new Promise(function(e,a){s=n[t]=[e,a]});e.push(s[2]=a);var i,r=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=o(t),i=function(e){l.onerror=l.onload=null,clearTimeout(m);var s=n[t];if(0!==s){if(s){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+a+": "+i+")");o.type=a,o.request=i,s[1](o)}n[t]=void 0}};var m=setTimeout(function(){i({type:"timeout",target:l})},12e4);l.onerror=l.onload=i,r.appendChild(l)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,s){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(s,a,function(e){return t[e]}.bind(null,a));return s},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var m=0;m<r.length;m++)e(r[m]);var u=l;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"09c7":function(t,e,s){},"16a4":function(t,e,s){"use strict";var a=s("69ab"),n=s.n(a);n.a},2856:function(t,e,s){},4654:function(t,e,s){"use strict";var a=s("09c7"),n=s.n(a);n.a},4678:function(t,e,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=i(t);return s(e)}function i(t){var e=a[t];if(!(e+1)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return e}n.keys=function(){return Object.keys(a)},n.resolve=i,t.exports=n,n.id="4678"},"500a":function(t,e,s){"use strict";var a=s("64e5"),n=s.n(a);n.a},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("097d");var a=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("topMenu"),s("router-view")],1)},i=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"nav"},[s("div",{staticClass:"container"},[s("div",{staticClass:"columns"},[t._m(0),s("div",{staticClass:"column is-6 nav__links"},[s("div",{staticClass:"columns"},[s("router-link",{staticClass:"column is-2 nav__link",attrs:{to:"/"}},[s("span",[t._v("Home")])]),s("router-link",{staticClass:"column is-2 nav__link",attrs:{to:"/about"}},[s("span",[t._v("About")])])],1)]),s("div",{staticClass:"column is-1 nav__separator"}),t._m(1)])])])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"column is-2 nav__name"},[a("img",{staticClass:"nav__img",attrs:{src:s("cf05")}}),a("span",[t._v("Linfo")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"column is-3 nav__search"},[s("input",{staticClass:"input",attrs:{placeholder:"Search",type:"text"}})])}],r={name:"Menu"},l=r,m=(s("500a"),s("2877")),u=Object(m["a"])(l,o,c,!1,null,null,null);u.options.__file="menu.vue";var d=u.exports,_={name:"app",components:{topMenu:d},created:function(){this.$store.dispatch("getData")}},f=_,v=(s("5c0b"),Object(m["a"])(f,n,i,!1,null,null,null));v.options.__file="App.vue";var p=v.exports,b=s("8c4f"),h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("nearest"),s("upcoming")],1)},j=[],g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"upcoming"},[t._m(0),s("div",{staticClass:"columns is-centered"},[s("div",{staticClass:"column is-8"},t._l(t.items,function(e){return s("div",{key:e.id,staticClass:"upcoming__block columns"},[s("div",{staticClass:"upcoming__block__img"},[s("img",{attrs:{src:e.rocket.imageURL,alt:"rocket"}})]),s("div",{staticClass:"upcoming__block__content"},[s("div",{staticClass:"upcoming__block_top"},[s("p",{staticClass:"upcoming__block_name"},[t._v(t._s(e.name))]),s("p",{staticClass:"upcoming__block_date"},[t._v(t._s(e.windowstart))])]),s("div",{staticClass:"upcoming__block__description"},[t._v("\n                        "+t._s(e.missions[0]?e.missions[0].description:"No description")+"\n                    ")]),s("div",{staticClass:"upcoming__block__footer"},[s("p",{staticClass:"upcoming__block__time"},[t._v(t._s(t._f("formatDate")(e.windowstart)))]),s("router-link",{staticClass:"upcoming__block__more-info",attrs:{to:"/launch/"+e.id}},[t._v("More info")])],1)])])}))])])},C=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"columns is-centered"},[s("div",{staticClass:"column is-8"},[s("div",{staticClass:"upcoming__label"},[t._v("\n                Upcoming Launches\n            ")])])])}],w=(s("6b54"),s("c1df")),k=s.n(w),y={name:"upcoming",data:function(){return{launchesTime:void 0}},methods:{},computed:{items:function(){return!!this.$store.state.apiData&&this.$store.state.apiData.launches}},created:function(){var t=this;setTimeout(function(){console.log(t.items)},4e3),console.log(this.items)},filters:{formatDate:function(t){var e=(new Date).getTime(),s=new Date(t).getTime();if(t)return k()(new Date(s-e).toString()).format("DD[d] hh[h] mm[m]")}}},D=y,T=(s("95df"),Object(m["a"])(D,g,C,!1,null,null,null));T.options.__file="upcoming.vue";var x=T.exports,z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"columns"},[t.nearest?s("div",{staticClass:"column is-6 is-offset-2 nearest"},[s("div",{staticClass:"nearest__label"},[t._v("Nearest launch")]),s("div",{staticClass:"nearest__time"},[s("div",{staticClass:"nearest__time__timer"},[t._v(t._s(t.viewTimer))]),s("div",{staticClass:"nearest__time__date"},[t._v(t._s(t.nearest.net))])]),s("div",{staticClass:"nearest__name"},[t._v("\n            "+t._s(t.nearest.name)+"\n        ")]),s("router-link",{staticClass:"nearest__more-info",attrs:{to:"/launch/"+t.nearest.id}},[t._v("More info")])],1):t._e()])},L=[],$={name:"nearest",data:function(){return{viewTimer:void 0,timer:void 0}},methods:{getTimer:function(){}},computed:{nearest:function(){return!!this.$store.state.nearest&&this.$store.state.nearest.launches[0]}},created:function(){var t=this;if(this.nearest){var e=(new Date).getTime(),s=new Date(this.nearest.net).getTime();this.timer=new Date(e-s),this.viewTimer=k()(this.timer.toString().toString()).format("DD[d] hh[h] mm[m] ss[s]")}setInterval(function(){if(t.nearest){var e=(new Date).getTime(),s=new Date(t.nearest.net).getTime();t.timer=new Date(s-e),t.viewTimer=k()(t.timer.toString().toString()).format("DD[d] hh[h] mm[m] ss[s]")}},1e3)}},O=$,U=(s("16a4"),Object(m["a"])(O,z,L,!1,null,null,null));U.options.__file="nearest.vue";var S=U.exports,E={name:"home",components:{nearest:S,upcoming:x}},R=E,M=Object(m["a"])(R,h,j,!1,null,null,null);M.options.__file="Home.vue";var A=M.exports,I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.item?s("div",{staticClass:"container"},[s("div",{staticClass:"columns launch"},[s("div",{staticClass:"column l__main"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column l__main__photo is-4"},[s("img",{attrs:{src:t.item.rocket.imageURL}})]),s("div",{staticClass:"column l__main__body is-8"},[s("div",{staticClass:"is-12 l__main__top"},[t._v("\n                        "+t._s(t.item.name)+"\n                    ")]),s("div",{staticClass:"is-12 l__main__dates"},[t._v("\n                        "+t._s(t.item.windowstart==t.item.windowend?t.item.windowstart:t.item.windowstart+" - "+t.item.windowend)+"\n                    ")]),s("div",{staticClass:"is-12 l__main__text"},[t._v("\n                        "+t._s(t.item.missions[0]?t.item.missions[0].description:"No description")+"\n                    ")]),s("div",{staticClass:"is-12 l__main__bottom"},[t.viewTimer?s("div",{staticClass:"l__main__bottom__time"},[t._v(t._s(t.viewTimer))]):t._e(),s("div",{staticClass:"l__main__links__wraper"},[t.item.vidURLs.length>0?s("div",{staticClass:"l__main__bottom__more"},[s("span",[t._v("Watch online: ")]),s("a",{attrs:{href:t.item.vidURLs[0]}},[t._v(t._s(t.item.vidURLs[0].split("/")[2]))])]):t._e(),t.item.missions[0]?s("div",{staticClass:"l__main__bottom__more"},[t.item.missions[0].wikiURL?s("div",[s("span",[t._v("Mission on wiki: ")]),s("a",{attrs:{href:t.item.missions[0].wikiURL}},[t._v(t._s(t.item.missions[0].name))])]):t._e()]):t._e()])])])])])]),s("div",{staticClass:"columns l__bottom-blocks"},[s("div",{staticClass:"column is-8"},[s("div",{staticClass:"l__comments white"},[s("div",{staticClass:"l__comments__heading"},[t._v("comments")]),s("form",{staticClass:"comments__form",attrs:{action:""},on:{submit:function(e){e.preventDefault(),t.addComment()}}},[s("div",{staticClass:"control"},[s("input",{ref:"user",staticClass:"l__comments_input input",attrs:{type:"text",placeholder:"User name",name:"nikName"}})]),s("div",{staticClass:"control"},[s("input",{ref:"message",staticClass:"l__comments_input input",attrs:{type:"text",placeholder:"Message",name:"message"}})]),t._m(0)]),t._l(t.comments,function(e){return s("div",{staticClass:"l__comments__container"},[s("div",{staticClass:"l__coments_item"},[s("div",{staticClass:"l__comments__author"},[t._v(t._s(e.user)),s("span",{staticClass:"coments__published"},[t._v(t._s(e.created))])]),s("div",{staticClass:"l__coments__message"},[t._v("\n                            "+t._s(e.message)+"\n                        ")])])])})],2)]),s("div",{staticClass:"column is-4 l__sidebar-wrap"},[t.location||this.location.name?s("div",{staticClass:"l__sidebar white"},[s("div",{staticClass:"sidebar__top"},[t._v("\n                    Location\n                ")]),s("div",{staticClass:"sidebar__body"},[t.location?s("div",[s("div",{staticClass:"location__name"},[t._v(t._s(t.item.location.pads[0].name))]),s("div",{staticClass:"location__links"},[s("a",{attrs:{href:t.item.location.pads[0].mapURL,target:"_blank"}},[t._v("View on map")])]),s("div",{staticClass:"location__links"},[s("a",{attrs:{href:t.hotelsURL,target:"_blank"}},[t._v("View hotels")])])]):t._e(),t.location?t._e():s("div",[t._v("\n                        "+t._s(t.item.location.name)+"\n                    ")])])]):t._e(),t.item.rocket?s("div",{staticClass:"l__sidebar white"},[s("div",{staticClass:"sidebar__top"},[t._v("\n                    Rocket\n                ")]),s("div",{staticClass:"sidebar__body"},[s("div",[s("img",{staticClass:"sidebar__image",attrs:{src:t.item.rocket.imageURL}}),s("div",{staticClass:"location__name"},[t._v(t._s(t.item.rocket.name))]),s("div",{staticClass:"location__links"},[t.item.rocket.wikiURL?s("a",{attrs:{href:t.item.rocket.wikiURL,target:"_blank"}},[t._v("View on wiki")]):t._e()])])])]):t._e()])])]):t._e()},N=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"field is-grouped"},[s("div",{staticClass:"control"},[s("button",{staticClass:"button comments__submit"},[t._v("Send")])]),s("div",{staticClass:"control"},[s("button",{staticClass:"button x comments__cancel"},[t._v("Cancel")])])])}],P={name:"launch",data:function(){return{item:void 0,viewTimer:void 0,location:void 0,hotelsURL:void 0,comments:[]}},firestore:function(){return{comments:F.collection("comments").where("launchId","==","".concat(this.$route.params.id))}},methods:{getData:function(){var t=this;fetch("https://launchlibrary.net/1.4/launch/".concat(this.$route.params.id)).then(function(t){return t.json()}).then(function(e){if(t.item=e.launches[0],t.item.location.pads.length>0){t.location=!0;var s=t.item.location.pads[0];fetch("https://maps.googleapis.com/maps/api/geocode/json?latlng=".concat(s.latitude,",").concat(s.longitude,"&key=AIzaSyB9mTKYAQc3t2Zu8xI8fylHqOp4xSHj_AE")).then(function(t){return t.json()}).then(function(e){t.hotelsURL="https://www.google.com/maps/search/".concat(e.results[0].formatted_address," hotels")})}})},addComment:function(t){F.collection("comments").add({launchId:"".concat(this.$route.params.id),user:this.$refs.user.value,message:this.$refs.message.value,createdAt:new Date})}},created:function(){var t=this;this.getData(),setInterval(function(){if(t.item){var e=(new Date).getTime(),s=new Date(t.item.net).getTime();t.timer=new Date(s-e),t.viewTimer=k()(t.timer.toString().toString()).format("DD[d] hh[h] mm[m] ss[s]")}},1e3)}},B=P,q=(s("4654"),Object(m["a"])(B,I,N,!1,null,null,null));q.options.__file="Launch.vue";var H=q.exports;a["a"].use(b["a"]);var V=new b["a"]({routes:[{path:"/",name:"home",component:A},{path:"/about",name:"about",component:function(){return s.e("about").then(s.bind(null,"f820"))}},{path:"/launch/:id",name:"launch",component:H}]}),K=s("2f62");a["a"].use(K["a"]);var Z=new K["a"].Store({state:{apiData:void 0,nearest:void 0},mutations:{getData:function(t){fetch("https://launchlibrary.net/1.4/launch/next/1").then(function(t){return t.json()}).then(function(e){t.nearest=e,console.log(e),fetch("https://launchlibrary.net/1.4/launch/next/20").then(function(t){return t.json()}).then(function(e){t.apiData=e,console.log(e)})})}},actions:{getData:function(t){t.commit("getData")}}}),J=s("0ff26"),Q=s("59ca"),Y=s.n(Q);s("e71f");s.d(e,"db",function(){return F}),a["a"].config.productionTip=!1,a["a"].use(J["a"]),Y.a.initializeApp({projectId:"spaceapps-717b2",apiKey:"AIzaSyAKILBPMs6LXBN19BpQcC9NVaZkZLtYuiE",databaseURL:"https://spaceapps-717b2.firebaseio.com/",authDomain:"spaceapps-717b2.firebaseapp.com"}),new a["a"]({router:V,store:Z,render:function(t){return t(p)}}).$mount("#app");var F=Y.a.firestore()},"5c0b":function(t,e,s){"use strict";var a=s("2856"),n=s.n(a);n.a},"64e5":function(t,e,s){},"69ab":function(t,e,s){},"95df":function(t,e,s){"use strict";var a=s("d49a"),n=s.n(a);n.a},cf05:function(t,e,s){t.exports=s.p+"img/logo.ec699a7f.png"},d49a:function(t,e,s){}});
//# sourceMappingURL=app.f759e4b3.js.map