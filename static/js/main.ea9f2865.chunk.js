(this["webpackJsonptik-tok-clone"]=this["webpackJsonptik-tok-clone"]||[]).push([[0],{33:function(e,t,a){e.exports=a(60)},38:function(e,t,a){},39:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},58:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(23),c=a.n(r),i=(a(38),a(7)),s=(a(39),a(25)),l=a.n(s),m=a(24);var u=function(e){var t=e.channel,a=e.description,n=e.song;return o.a.createElement("div",{className:"videoFooter"},o.a.createElement("div",{className:"videoFooter__text"},o.a.createElement("h3",null,"@",t),o.a.createElement("p",null,a),o.a.createElement("div",{className:"videoFooter__ticker"},o.a.createElement(l.a,{className:"videoFooter__icon"}),o.a.createElement(m.a,{mode:"smooth"},(function(e){e.index;return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,n))})))),o.a.createElement("img",{className:"videoFooter__record",src:"https://static.thenounproject.com/png/934821-200.png",alt:""}))},d=(a(46),a(27)),p=a.n(d),v=a(28),f=a.n(v),E=a(29),h=a.n(E),k=a(30),g=a.n(k);var b=function(e){var t=e.likes,a=e.shares,r=e.messages,c=Object(n.useState)(!1),s=Object(i.a)(c,2),l=s[0],m=s[1];return o.a.createElement("div",{className:"videoSidebar"},o.a.createElement("div",{className:"videoSidebar__button"},l?o.a.createElement(p.a,{fontSize:"large",onClick:function(e){return m(!1)}}):o.a.createElement(f.a,{fontSize:"large",onClick:function(e){return m(!0)}}),o.a.createElement("p",null,l?t+1:t)),o.a.createElement("div",{className:"videoSidebar__button"},o.a.createElement(h.a,{fontSize:"large"}),o.a.createElement("p",null,r)),o.a.createElement("div",{className:"videoSidebar__button"},o.a.createElement(g.a,{fontSize:"large"}),o.a.createElement("p",null,a)))};a(47);var _=function(e){var t=e.url,a=e.channel,r=e.description,c=e.song,s=e.likes,l=e.messages,m=e.shares,d=Object(n.useState)(!1),p=Object(i.a)(d,2),v=p[0],f=p[1],E=Object(n.useRef)(null);return o.a.createElement("div",{className:"video"},o.a.createElement("video",{className:"video__player",loop:!0,onClick:function(){v?(E.current.pause(),f(!1)):(E.current.play(),f(!0))},ref:E,src:t}),o.a.createElement(u,{channel:a,description:r,song:c}),o.a.createElement(b,{likes:s,messages:l,shares:m}))},S=a(31),N=a.n(S).a.initializeApp({apiKey:"AIzaSyCMh678yYIU2sOODl6AXXVJr_27jvDLnpk",authDomain:"tik-tok-clone-eb635.firebaseapp.com",databaseURL:"https://tik-tok-clone-eb635.firebaseio.com",projectId:"tik-tok-clone-eb635",storageBucket:"tik-tok-clone-eb635.appspot.com",messagingSenderId:"602358408631",appId:"1:602358408631:web:a32f1830ccc2d942f2f432",measurementId:"G-38YHL3X30F"}).firestore();a(58);var j=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){N.collection("videos").onSnapshot((function(e){return r(e.docs.map((function(e){return e.data()})))}))}),[]),o.a.createElement("div",{className:"app"},o.a.createElement("div",{className:"app__videos"},a.map((function(e){var t=e.url,a=e.channel,n=e.description,r=e.song,c=e.likes,i=e.messages,s=e.shares;return o.a.createElement(_,{url:t,channel:a,song:r,likes:c,messages:i,description:n,shares:s})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.ea9f2865.chunk.js.map