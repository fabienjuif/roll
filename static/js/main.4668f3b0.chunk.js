(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},19:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(5),r=n.n(c),i=(n(14),n(16),n(1)),l=n(6),u=n.n(l),s=(n(19),[4,6,10,20]),d=function(e){var t=e.addDice,n=e.onClose,c=Object(a.useRef)(null);return u()(c,n),o.a.createElement("div",{className:"modal"},o.a.createElement("div",{className:"card",ref:c},o.a.createElement("button",{type:"button",className:"btn-close",onClick:n},"X"),o.a.createElement("ul",{className:"list"},s.map(function(e){return o.a.createElement("li",{key:e},o.a.createElement("button",{type:"button",onClick:function(){return t(e)}},e))}))))},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number.MAX_SAFE_INTEGER,n=Object(a.useState)(void 0),o=Object(i.a)(n,2),c=o[0],r=o[1],l=function(){r(Math.floor(Math.random()*t)+e)};return void 0===c&&l(),[c,l]},v=new Map,m=function(e){var t=e.type;"string"===typeof e&&(t=e),v.has(t)&&v.get(t).forEach(function(n){n("string"===typeof e?{type:t}:e)})},b=function(e,t){return Object(a.useEffect)(function(){return function(e,t){void 0!==e&&null!==e&&void 0!==t&&null!==t&&(v.has(e)||v.set(e,new Set),v.get(e).add(t))}(e,t),function(){!function(e,t){v.has(e)&&void 0!==t&&null!==t&&(v.get(e).delete(t),0===v.get(e).size&&v.delete(e))}(e,t)}}),m},h=n(2),p=n(3),E=n(7),g=n.n(E),w=Object(a.createContext)(),O=w,j=(n(25),function(e){var t=e.id,n=e.faces,c=f(1,n),r=Object(i.a)(c,2),l=r[0],u=r[1];return b("@@ui/ROLL>DICES",u),(0,Object(a.useContext)(O).setRoll)(t,l),o.a.createElement("button",{type:"button",onClick:u,className:"dice dice-".concat(n)},o.a.createElement("div",{className:"faces"},n),o.a.createElement("div",{className:"value"},l))}),y=(n(27),function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useContext)(O),l=r.dices,u=r.reset,s=r.add;return o.a.createElement("div",{className:"app"},n&&o.a.createElement(d,{addDice:function(e){s({faces:e}),c(!1)},onClose:function(){return c(!1)}}),o.a.createElement("button",{type:"button",onClick:function(){return c(!n)}},"Add a dice"),o.a.createElement("button",{type:"button",onClick:u},"Reset"),o.a.createElement("button",{type:"button",onClick:function(){return m("@@ui/ROLL>DICES")}},"Roll all dices"),l.length>1&&o.a.createElement("div",null,o.a.createElement("span",null,"Total"),o.a.createElement("span",null,l.reduce(function(e,t){var n=t.roll;return e+(void 0===n?0:n)},0))),2===l.length&&o.a.createElement("div",null,o.a.createElement("span",null,"Subtract"),o.a.createElement("span",null,Math.abs(l[0].roll-l[1].roll)||0)),o.a.createElement("ul",{className:"dices"},l.map(function(e){var t=e.faces,n=e.id;return o.a.createElement("li",{key:n},o.a.createElement(j,{key:n,id:n,faces:t}))})))}),k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(o.a.createElement(function(e){var t=e.children,n=Object(a.useState)(!1),c=Object(i.a)(n,2),r=c[0],l=c[1],u=g()("dices",{}),s=Object(i.a)(u,2),d=s[0],f=s[1],v=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).faces,t={faces:void 0===e?6:e,id:Date.now(),roll:void 0};return f(Object(p.a)({},d,Object(h.a)({},t.id,t))),t};return r||(l(!0),d&&0!==Object.values(d).length||v({faces:6})),o.a.createElement(w.Provider,{value:{dices:Object.values(d),setRoll:function(e,t){d[e].roll!==t&&f(Object(p.a)({},d,Object(h.a)({},e,Object(p.a)({},d[e],{roll:t}))))},reset:function(){f({})},add:v}},t)},null,o.a.createElement(y,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/roll",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/roll","/service-worker.js");k?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):C(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):C(t,e)})}}()},8:function(e,t,n){e.exports=n(29)}},[[8,2,1]]]);
//# sourceMappingURL=main.4668f3b0.chunk.js.map