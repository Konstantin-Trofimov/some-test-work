(function(t){function e(e){for(var r,o,c=e[0],s=e[1],l=e[2],p=0,f=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0d8b":function(t,e,n){t.exports=n.p+"img/traffic-light.bc69ecb2.png"},"495c":function(t,e,n){t.exports=n.p+"img/cartoon-street2.c622ef1b.jpg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{style:{"background-image":"url("+n("90c2")("./cartoon-street"+t.backgroundNumber+".jpg")+")"},attrs:{id:"app"}},[r("v-traffic-light-img"),r("router-view")],1)},i=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("img",{staticClass:"traffic-light-img",attrs:{src:n("7584")("./"+t.trafficLight),alt:"traffic-light"}})])},c=[],s={name:"v-traffic-light",data:function(){return{trafficLight:"traffic-light.png"}}},l=s,u=n("2877"),p=Object(u["a"])(l,o,c,!1,null,null,null),f=p.exports,m={mounted:function(){"/"==this.$route.path&&this.$router.push("yellow")},components:{vTrafficLightImg:f},data:function(){return{wrapper:{backgroundImage:"@/assets/images/cartoon-street.jpg"},backgroundNumber:null}},created:function(){var t=function(t,e){var n=t-.5+Math.random()*(e-t+1);return Math.round(n)};this.backgroundNumber=t(1,4)}},d=m,v=(n("5c0b"),Object(u["a"])(d,a,i,!1,null,null,null)),g=v.exports,h=n("8c4f"),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-lamp v-lamp-green"},[n("div",{staticClass:"lamp lamp_red lamp_dim"}),n("div",{staticClass:"lamp lamp_yellow lamp_dim"}),n("div",{staticClass:"lamp lamp_green active"}),n("vTimer",{attrs:{seconds:t.time}})],1)},_=[],T=n("5530"),j=n("2f62"),O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-timer"},[n("span",[t._v(t._s(t.seconds))])])},y=[],w=(n("a9e3"),{name:"v-timer",props:{seconds:{type:Number,defualt:3}}}),C=w,x=(n("78a1"),Object(u["a"])(C,O,y,!1,null,null,null)),F=x.exports,L={components:{vTimer:F},methods:Object(T["a"])(Object(T["a"])({},Object(j["b"])(["TOGGLE_TRAFFIC_LIGFT"])),{},{updateTimer:function(t){var e=this,n=setTimeout((function(){e.time>0?(e.time--,e.updateTimer(t)):(clearTimeout(n),e.$router.push(t))}),1e3)}}),computed:Object(T["a"])({},Object(j["c"])(["TRAFFIC"])),mounted:function(){this.changeLight()}},E={methods:{signalize:function(){this.time<3&&document.querySelector(".active").classList.add("blink")}},updated:function(){this.signalize()}},G={name:"v-lamp-green",data:function(){return{time:15}},mixins:[L,E],methods:{changeLight:function(){this.updateTimer("yellow")}}},I=G,k=Object(u["a"])(I,b,_,!1,null,null,null),S=k.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-lamp v-lamp-red"},[n("div",{staticClass:"lamp lamp_red active"}),n("div",{staticClass:"lamp lamp_yellow lamp_dim"}),n("div",{staticClass:"lamp lamp_green lamp_dim"}),n("vTimer",{attrs:{seconds:t.time}})],1)},A=[],M={name:"v-lamp-red",data:function(){return{time:10}},mixins:[L,E],methods:{changeLight:function(){this.updateTimer("yellow"),this.TRAFFIC||this.TOGGLE_TRAFFIC_LIGFT()}}},N=M,R=Object(u["a"])(N,$,A,!1,null,null,null),P=R.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-lamp v-lamp-yellow"},[n("div",{staticClass:"lamp lamp_red lamp_dim"}),n("div",{staticClass:"lamp lamp_yellow active"}),n("div",{staticClass:"lamp lamp_green lamp_dim"}),n("vTimer",{attrs:{seconds:t.time}})],1)},U=[],z={name:"v-lamp-yellow",data:function(){return{time:3}},mixins:[L],methods:{changeLight:function(){this.TRAFFIC?this.switchTraffic("green"):this.switchTraffic("red")},switchTraffic:function(t){this.updateTimer(t),this.TOGGLE_TRAFFIC_LIGFT()}}},J=z,q=Object(u["a"])(J,D,U,!1,null,null,null),B=q.exports;r["a"].use(h["a"]);var H=[{path:"/green",name:"green",component:S},{path:"/red",name:"red",component:P},{path:"/yellow",name:"yellow",component:B}],K=new h["a"]({mode:"history",base:"",routes:H}),Q=K;r["a"].use(j["a"]);var V=new j["a"].Store({state:{isTrafficStopped:!1},mutations:{TOGGLE:function(t){t.isTrafficStopped=!t.isTrafficStopped}},actions:{TOGGLE_TRAFFIC_LIGFT:function(t){var e=t.commit;e("TOGGLE")}},getters:{TRAFFIC:function(t){return t.isTrafficStopped}}});n("f27b");r["a"].config.productionTip=!1,new r["a"]({router:Q,store:V,render:function(t){return t(g)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"5d95":function(t,e,n){},7584:function(t,e,n){var r={"./cartoon-street1.jpg":"9a19","./cartoon-street2.jpg":"495c","./cartoon-street3.jpg":"fcfc","./cartoon-street4.jpg":"93ec","./traffic-light.png":"0d8b"};function a(t){var e=i(t);return n(e)}function i(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}a.keys=function(){return Object.keys(r)},a.resolve=i,t.exports=a,a.id="7584"},"78a1":function(t,e,n){"use strict";n("5d95")},"90c2":function(t,e,n){var r={"./cartoon-street1.jpg":"9a19","./cartoon-street2.jpg":"495c","./cartoon-street3.jpg":"fcfc","./cartoon-street4.jpg":"93ec"};function a(t){var e=i(t);return n(e)}function i(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}a.keys=function(){return Object.keys(r)},a.resolve=i,t.exports=a,a.id="90c2"},"93ec":function(t,e,n){t.exports=n.p+"img/cartoon-street4.087080f3.jpg"},"9a19":function(t,e,n){t.exports=n.p+"img/cartoon-street1.ea685b22.jpg"},"9c0c":function(t,e,n){},f27b:function(t,e,n){},fcfc:function(t,e,n){t.exports=n.p+"img/cartoon-street3.1684e0d1.jpg"}});
//# sourceMappingURL=app.807c8328.js.map