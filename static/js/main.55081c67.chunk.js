(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(7),l=n.n(o),r=(n(15),n(17),n(1)),i=n(5),s=n.n(i),u=n(8),d=n.n(u),f=(n(20),function(e){var t=e.faces,n=e.onClick,a=e.value;return c.a.createElement("button",{type:"button",className:s()("-dice-".concat(t),"a-dice__roll","a-button"),onClick:n},c.a.createElement("div",{className:"a-dice__value"},a))});f.defaultProps={onClick:void 0};var m=f,v=(n(22),[4,6,10,20]),b=function(e){var t=e.addDice,n=e.onClose,o=Object(a.useRef)(null);return d()(o,n),c.a.createElement("div",{className:"o-modal"},c.a.createElement("div",{className:"m-card",ref:o},c.a.createElement("button",{type:"button",className:"a-button a-close",onClick:n},"X"),c.a.createElement("ul",{className:"a-list"},v.map(function(e){return c.a.createElement("li",{key:e,className:"a-list__item"},c.a.createElement(m,{value:"D".concat(e),faces:e,onClick:function(){return t(e)}}))}))))},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number.MAX_SAFE_INTEGER,n=Object(a.useState)(void 0),c=Object(r.a)(n,2),o=c[0],l=c[1],i=function(){l(Math.floor(Math.random()*t)+e)};return void 0===o&&i(),[o||0,i]},h=new Map,E=function(e){var t=e.type;"string"===typeof e&&(t=e),h.has(t)&&h.get(t).forEach(function(n){n("string"===typeof e?{type:t}:e)})},p=function(e,t){return Object(a.useEffect)(function(){return function(e,t){void 0!==e&&null!==e&&void 0!==t&&null!==t&&(h.has(e)||h.set(e,new Set),h.get(e).add(t))}(e,t),function(){!function(e,t){h.has(e)&&void 0!==t&&null!==t&&(h.get(e).delete(t),0===h.get(e).size&&h.delete(e))}(e,t)}}),E},w=n(2),_=n(4),j=n(3),N=n.n(j),O=Object(a.createContext)(),k=O,y=function(e){var t=e.id,n=e.faces,o=g(1,n),l=Object(r.a)(o,2),i=l[0],s=l[1];p("@@ui/ROLL>DICES",s);var u=Object(a.useContext)(k),d=u.setRoll,f=u.remove;return d(t,i),c.a.createElement("div",{className:"m-dice"},c.a.createElement("div",{className:"a-dice__info"},c.a.createElement("div",{className:"a-dice__faces"},"D",n),c.a.createElement("button",{type:"button",className:"a-dice__remove",onClick:f(t)},"X")),c.a.createElement(m,{onClick:s,value:i,faces:n}))},C=Object(a.createContext)(),D=C,A=function(e){return(0,Object(a.useContext)(D).getMessages)(e)},S=(n(28),function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],o=t[1],l=Object(a.useContext)(k),i=l.dices,u=l.clear,d=l.add,f=A();return c.a.createElement("div",{className:"o-app"},n&&c.a.createElement(b,{addDice:function(e){d({faces:e}),o(!1)},onClose:function(){return o(!1)}}),c.a.createElement("div",{className:"m-actions"},c.a.createElement("div",{className:"m-actions__secondaryActions"},c.a.createElement("button",{type:"button",onClick:function(){return o(!n)},className:"a-button -outlined"},f.add),c.a.createElement("button",{type:"button",onClick:u,className:"a-button -outlined"},f.clear)),c.a.createElement("button",{type:"button",onClick:function(){0===i.length?o(!0):E("@@ui/ROLL>DICES")},className:"a-actions__mainAction a-button -color"},i.length>1?f.rollAllDices:f.roll)),c.a.createElement("div",{className:s()("m-stats","m-stats__substract","-bg_primary",{"-inactive":2!==i.length})},c.a.createElement("div",{className:"a-stats__label"},f.substract),c.a.createElement("div",{className:"a-stats__value"},2===i.length?Math.abs(i[0].roll-i[1].roll)||0:"X")),c.a.createElement("div",{className:"m-stats m-stats__total -bg_secondary"},c.a.createElement("div",{className:"a-stats__label"},f.total),c.a.createElement("div",{className:"a-stats__value"},i.reduce(function(e,t){return e+(t.roll||0)},0))),c.a.createElement("ul",{className:"m-dices"},i.map(function(e){var t=e.faces,n=e.id;return c.a.createElement("li",{key:n,className:"m-dices__dice"},c.a.createElement(y,{key:n,id:n,faces:t}))})))}),R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function L(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(c.a.createElement(function(e){var t=e.children,n=Object(a.useState)(!1),o=Object(r.a)(n,2),l=o[0],i=o[1],s=N()("dices",{}),u=Object(r.a)(s,2),d=u[0],f=u[1],m=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).faces,t={faces:void 0===e?6:e,id:Date.now(),roll:void 0};return f(Object(_.a)({},d,Object(w.a)({},t.id,t))),t};return l||(i(!0),d&&0!==Object.values(d).length||m({faces:6})),c.a.createElement(O.Provider,{value:{dices:Object.values(d),setRoll:function(e,t){d[e].roll!==t&&f(Object(_.a)({},d,Object(w.a)({},e,Object(_.a)({},d[e],{roll:t}))))},clear:function(){f({})},add:m,remove:function(e){return function(){if(void 0!==e&&null!==e){var t=Object(_.a)({},d);delete t[e],f(t)}}}}},t)},null,c.a.createElement(function(e){var t=e.children,n=N()("lang",void 0),o=Object(r.a)(n,2),l=o[0],i=o[1],s=N()("locales",void 0),u=Object(r.a)(s,2),d=u[0],f=u[1];Object(a.useEffect)(function(){var e=l;if(l){if(!d||!d.date||!d.lang||d.lang!==e&&Date.now()-d.date>36e5||Date.now()-d.date>2592e5){var t=function(e){return fetch("".concat("","/locales/").concat(e,".json")).then(function(e){return e.json()}).then(function(t){return f({data:t,lang:e,date:Date.now()})})};t(e).catch(function(){return t("en")})}}else{var n=window.navigator;if(n){var a=n.language,c=n.userLanguage,o=n.languages;(e=a||c||o&&o.length&&o[0]||"en").length>2&&(e=e.substring(0,2)),e.length<2&&(e="en")}i(e)}});return d?c.a.createElement(C.Provider,{value:{lang:l,locales:d,getMessages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return""===e?d.data:function(e,t){return t.split(".").reduce(function(e,t){return e&&e[t]},e)}(d.data,e)}}},t):c.a.createElement("div",null,"Loading locales...")},null,c.a.createElement(S,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");R?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):L(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):L(t,e)})}}()},9:function(e,t,n){e.exports=n(30)}},[[9,2,1]]]);
//# sourceMappingURL=main.55081c67.chunk.js.map