(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(7),l=n.n(o),r=(n(15),n(17),n(1)),i=n(5),s=n.n(i),u=n(8),d=n.n(u),m=(n(20),function(e){var t=e.className,n=e.faces,a=e.onClick,o=e.value;return c.a.createElement("button",{type:"button",className:s()(t,"-dice-".concat(n),"a-dice__roll","a-button"),onClick:a},c.a.createElement("div",{className:"a-dice__value"},o))});m.defaultProps={className:void 0,onClick:void 0};var v=m,f=(n(22),[4,6,8,10,12,20]),h=function(e){var t=e.addDice,n=e.onClose,o=Object(a.useRef)(null);return d()(o,n),c.a.createElement("div",{className:"o-modal"},c.a.createElement("div",{className:"m-card",ref:o},c.a.createElement("button",{type:"button",className:"a-button a-close",onClick:n},"X"),c.a.createElement("ul",{className:"a-list"},f.map(function(e){return c.a.createElement("li",{key:e,className:"a-list__item"},c.a.createElement(v,{className:"a-modal-dice",value:"D".concat(e),faces:e,onClick:function(){return t(e)}}))}))))},g=function(e){var t=e.onClick,n=e.label,a=e.children;return c.a.createElement("button",{type:"button",onClick:t,className:"a-button -secondary","aria-label":n,title:n},a||n)};g.defaultProps={children:void 0};var b=g,E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number.MAX_SAFE_INTEGER,n=Object(a.useState)(void 0),c=Object(r.a)(n,2),o=c[0],l=c[1],i=function(){l(Math.floor(Math.random()*t)+e)};return void 0===o&&i(),[o||0,i]},w=new Map,p=function(e){var t=e.type;"string"===typeof e&&(t=e),w.has(t)&&w.get(t).forEach(function(n){n("string"===typeof e?{type:t}:e)})},_=function(e,t){return Object(a.useEffect)(function(){return function(e,t){void 0!==e&&null!==e&&void 0!==t&&null!==t&&(w.has(e)||w.set(e,new Set),w.get(e).add(t))}(e,t),function(){!function(e,t){w.has(e)&&void 0!==t&&null!==t&&(w.get(e).delete(t),0===w.get(e).size&&w.delete(e))}(e,t)}}),p},N=n(2),j=n(4),O=n(3),k=n.n(O),C=Object(a.createContext)(),y=C,x=function(e){var t=e.id,n=e.faces,o=E(10===n?0:1,10===n?n-1:n),l=Object(r.a)(o,2),i=l[0],s=l[1];_("@@ui/ROLL>DICES",s);var u=Object(a.useContext)(y),d=u.setRoll,m=u.remove;return d(t,i),c.a.createElement("div",{className:"m-dice"},c.a.createElement("div",{className:"a-dice__info"},c.a.createElement("div",{className:"a-dice__faces"},"D",n),c.a.createElement("button",{type:"button",className:"a-dice__remove",onClick:m(t)},"X")),c.a.createElement(v,{onClick:s,value:i,faces:n}))},A=Object(a.createContext)(),D=A,L=function(e){return(0,Object(a.useContext)(D).getMessages)(e)},M=function(){return c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},c.a.createElement("path",{d:"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"}))},S=function(){return c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},c.a.createElement("path",{d:"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm9 12c0 1.94-.624 3.735-1.672 5.207l-12.535-12.535c1.472-1.048 3.267-1.672 5.207-1.672 4.962 0 9 4.038 9 9zm-18 0c0-1.94.624-3.735 1.672-5.207l12.534 12.534c-1.471 1.049-3.266 1.673-5.206 1.673-4.962 0-9-4.038-9-9z"}))},R=(n(28),function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],o=t[1],l=Object(a.useContext)(y),i=l.dices,u=l.clear,d=l.add,m=L();return c.a.createElement("div",{className:"o-app"},n&&c.a.createElement(h,{addDice:function(e){d({faces:e}),o(!1)},onClose:function(){return o(!1)}}),c.a.createElement("div",{className:"m-actions"},c.a.createElement("div",{className:"m-actions__secondaryActions"},c.a.createElement(b,{onClick:u,label:m.clear},c.a.createElement(S,null)),c.a.createElement(b,{onClick:function(){return o(!n)},label:m.add},c.a.createElement(M,null))),c.a.createElement("button",{type:"button",onClick:function(){0===i.length?o(!0):p("@@ui/ROLL>DICES")},className:"a-actions__mainAction a-button -dot"},c.a.createElement("svg",{width:"100%",height:"100%",overflow:"visible",viewBox:"none"},c.a.createElement("path",{d:"M25 108 A1,1 0 0 1 191,108",fill:"transparent",id:"curve"}),c.a.createElement("text",{textLength:"50%",className:"-light"},c.a.createElement("textPath",{startOffset:"5%",textLength:"50%",alignmentBaseline:"baseline",href:"#curve"},m.roll))))),c.a.createElement("div",{className:s()("m-stats","m-stats__substract","-bg_primary",{"-inactive":2!==i.length})},c.a.createElement("div",{className:"a-stats__label"},m.substract),c.a.createElement("div",{className:"a-stats__value"},2===i.length?Math.abs(i[0].roll-i[1].roll)||0:"X")),c.a.createElement("div",{className:"m-stats m-stats__total -bg_secondary"},c.a.createElement("div",{className:"a-stats__label"},m.total),c.a.createElement("div",{className:"a-stats__value"},i.reduce(function(e,t){return e+(t.roll||0)},0))),c.a.createElement("ul",{className:"m-dices"},i.map(function(e){var t=e.faces,n=e.id;return c.a.createElement("li",{key:n,className:"m-dices__dice"},c.a.createElement(x,{key:n,id:n,faces:t}))})))}),z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function P(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(c.a.createElement(function(e){var t=e.children,n=Object(a.useState)(!1),o=Object(r.a)(n,2),l=o[0],i=o[1],s=k()("dices",{}),u=Object(r.a)(s,2),d=u[0],m=u[1],v=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).faces,t={faces:void 0===e?6:e,id:Date.now(),roll:void 0};return m(Object(j.a)({},d,Object(N.a)({},t.id,t))),t};return l||(i(!0),d&&0!==Object.values(d).length||v({faces:6})),c.a.createElement(C.Provider,{value:{dices:Object.values(d),setRoll:function(e,t){d[e].roll!==t&&m(Object(j.a)({},d,Object(N.a)({},e,Object(j.a)({},d[e],{roll:t}))))},clear:function(){m({})},add:v,remove:function(e){return function(){if(void 0!==e&&null!==e){var t=Object(j.a)({},d);delete t[e],m(t)}}}}},t)},null,c.a.createElement(function(e){var t=e.children,n=k()("lang",void 0),o=Object(r.a)(n,2),l=o[0],i=o[1],s=k()("locales",void 0),u=Object(r.a)(s,2),d=u[0],m=u[1];Object(a.useEffect)(function(){var e=l;if(l){if(!d||!d.date||!d.lang||d.lang!==e&&Date.now()-d.date>36e5||Date.now()-d.date>2592e5){var t=function(e){return fetch("".concat("","/locales/").concat(e,".json")).then(function(e){return e.json()}).then(function(t){return m({data:t,lang:e,date:Date.now()})})};t(e).catch(function(){return t("en")})}}else{var n=window.navigator;if(n){var a=n.language,c=n.userLanguage,o=n.languages;(e=a||c||o&&o.length&&o[0]||"en").length>2&&(e=e.substring(0,2)),e.length<2&&(e="en")}i(e)}});return d?c.a.createElement(A.Provider,{value:{lang:l,locales:d,getMessages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return""===e?d.data:function(e,t){return t.split(".").reduce(function(e,t){return e&&e[t]},e)}(d.data,e)}}},t):c.a.createElement("div",null,"Loading locales...")},null,c.a.createElement(R,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");z?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):P(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):P(t,e)})}}()},9:function(e,t,n){e.exports=n(30)}},[[9,2,1]]]);
//# sourceMappingURL=main.63e4d72b.chunk.js.map