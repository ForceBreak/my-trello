(function(t){function e(e){for(var r,a,i=e[0],c=e[1],u=e[2],l=0,d=[];l<i.length;l++)a=i[l],o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},o={app:0},s=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"962a0f1c"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise(function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"1c6a8a77"}[t]+".css",o=c.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===r||l===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");s.request=r,delete a[t],f.parentNode.removeChild(f),n(s)},f.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(f)}).then(function(){a[t]=0}));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var s=new Promise(function(e,n){r=o[t]=[e,n]});e.push(r[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(t),u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+r+": "+a+")");s.type=r,s.request=a,n[1](s)}o[t]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/my-trello/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"21bb":function(t,e,n){"use strict";var r=n("eaa3"),a=n.n(r);a.a},"2d09":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=n("bb71");n("da64");r["a"].use(a["a"],{iconfont:"md"});var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-container",{attrs:{"grid-list-xl":""}},[n("Header"),n("router-view")],1)],1)},s=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{"justify-center":"",row:""}},[n("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm3:""}},[n("router-link",{attrs:{to:"/my-trello"}},[n("v-icon",{staticClass:"star"},[t._v("stars")])],1)],1)],1)},c=[],u={data:function(){return{}}},l=u,d=(n("6370"),n("2877")),f=n("6544"),m=n.n(f),p=n("0e8f"),v=n("132d"),b=n("a722"),h=Object(d["a"])(l,i,c,!1,null,"75fbf591",null),x=h.exports;m()(h,{VFlex:p["a"],VIcon:v["a"],VLayout:b["a"]});var y={name:"App",components:{Header:x},data:function(){return{}}},_=y,O=(n("5c0b"),n("7496")),g=n("a523"),k=Object(d["a"])(_,o,s,!1,null,null,null),A=k.exports;m()(k,{VApp:O["a"],VContainer:g["a"]});var B=n("8c4f"),C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{staticClass:"boardsParent",attrs:{row:"",wrap:""}},[n("CreateBoard"),t._l(t.ALL_BOARDS,function(e,r){return n("Board",{key:r,staticClass:"boardHome",attrs:{name:e.name,index:r}},[n("v-icon",{staticClass:"removeBoard",on:{click:function(e){return t.removeBoard(r)}}},[t._v("remove_circle")])],1)})],2)},E=[],j=n("cebc"),w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-flex",{attrs:{xs12:"",sm4:""}},[n("v-card",{staticClass:"newBoard board"},[t.isForm?n("div",[n("v-card-title",{staticClass:"createHead"},[n("h2",[t._v("Создание доски")]),n("v-spacer"),n("v-icon",{on:{click:t.closeForm}},[t._v("cancel")])],1),n("h4",{staticClass:"text-xs-center"},[t._v("Как назовём доску?")]),n("v-text-field",{staticClass:"input",attrs:{solo:""},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addBoard(t.boardName)}},model:{value:t.boardName,callback:function(e){t.boardName=e},expression:"boardName"}}),n("v-card-actions",{staticClass:"justify-center"},[n("v-btn",{staticClass:"cancelBtn",attrs:{flat:""},on:{click:t.closeForm}},[t._v("Отмена")]),n("v-btn",{on:{click:function(e){return t.addBoard(t.boardName)}}},[t._v("Создать")])],1)],1):n("div",{on:{click:t.showForm}},[n("v-card-title",{staticClass:"justify-center"},[n("h2",[t._v("Создать новую доску...")])])],1)])],1)},V=[],D=n("2f62"),I={data:function(){return{form:!1,boardName:""}},computed:Object(j["a"])({isForm:function(){return this.form}},Object(D["c"])({ADD_BOARD:"ADD_BOARD"})),methods:{showForm:function(){this.form=!this.form},closeForm:function(){this.form=!this.form},addBoard:function(t){this.form=!this.form,this.$store.commit("ADD_BOARD",t),this.boardName=""}}},R=I,S=(n("dc49"),n("8336")),T=n("b0af"),N=n("99d9"),F=n("12b2"),L=n("9910"),M=n("2677"),P=Object(d["a"])(R,w,V,!1,null,"c149ab94",null),$=P.exports;m()(P,{VBtn:S["a"],VCard:T["a"],VCardActions:N["a"],VCardTitle:F["a"],VFlex:p["a"],VIcon:v["a"],VSpacer:L["a"],VTextField:M["a"]});var H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-flex",{attrs:{xs12:"",sm4:""}},[t._t("default"),n("router-link",{attrs:{to:"/my-trello/"+t.name}},[n("v-card",{staticClass:"board"},[n("div",[n("v-card-title",{staticClass:"justify-center"},[n("h2",[t._v(t._s(t.name))])])],1)])],1)],2)},K=[],q={props:["name","index"]},J=q,z=Object(d["a"])(J,H,K,!1,null,"0a48c6a4",null),G=z.exports;m()(z,{VCard:T["a"],VCardTitle:F["a"],VFlex:p["a"]});var Q={components:{CreateBoard:$,Board:G},methods:{removeBoard:function(t){this.$store.commit("REMOVE_BOARD",t)}},computed:Object(j["a"])({},Object(D["c"])({REMOVE_BOARD:"REMOVE_BOARD"}),Object(D["b"])({ALL_BOARDS:"allBoards"}))},U=Q,W=(n("21bb"),Object(d["a"])(U,C,E,!1,null,null,null)),X=W.exports;m()(W,{VIcon:v["a"],VLayout:b["a"]}),r["a"].use(B["a"]);var Y=new B["a"]({mode:"history",routes:[{path:"/my-trello",name:"home",component:X},{path:"/my-trello/:about",name:"about",component:function(){return n.e("about").then(n.bind(null,"a87e"))}}]});n("7f7f");r["a"].use(D["a"]);var Z=new D["a"].Store({state:{boards:[]},getters:{allBoards:function(t){return t.boards}},mutations:{ADD_BOARD:function(t,e){t.lists=[],t.boards.push({name:e,list:[]})},ADD_LIST:function(t,e){var n=t.boards[e.index].list.length;t.boards[e.index].list.push({name:e.name,index:n,tasks:[]})},ADD_TASK:function(t,e){var n=t.boards[e.boardIndex].list[e.listIndex].tasks.length;t.boards[e.boardIndex].list[e.listIndex].tasks.push({name:e.task,index:n+1,fixed:!1,done:!1})},TASK_DONE:function(t,e){t.boards[e.boardIndex].list[e.listIndex].tasks[e.taskIndex].done=!e.done},REMOVE_TASK:function(t,e){t.boards[e.boardIndex].list[e.listIndex].tasks.splice(e.taskIndex,1)},REMOVE_LIST:function(t,e){t.boards[e.boardIndex].list.splice(e.listIndex,1)},REMOVE_BOARD:function(t,e){t.boards.splice(e,1)}},actions:{}});r["a"].config.productionTip=!1,new r["a"]({router:Y,store:Z,render:function(t){return t(A)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("6879"),a=n.n(r);a.a},6370:function(t,e,n){"use strict";var r=n("8a33"),a=n.n(r);a.a},6879:function(t,e,n){},"8a33":function(t,e,n){},dc49:function(t,e,n){"use strict";var r=n("2d09"),a=n.n(r);a.a},eaa3:function(t,e,n){}});
//# sourceMappingURL=app.1b8a5701.js.map