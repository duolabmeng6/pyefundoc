(()=>{var e,t,r,o,n,i,a={150:e=>{"use strict";e.exports=JSON.parse('{"type":"object","properties":{"auto_open":{"type":"boolean","title":"默认展开一级目录","default":false},"navs":{"type":"array","title":"导航条设置","items":{"type":"object","properties":{"title":{"title":"文字","type":"string"},"url":{"title":"链接","type":"string"}},"required":["title","url"],"additionalProperties":false},"default":[]}},"additionalProperties":false,"required":[]}')},69:(e,t,r)=>{var o={"./en.json":[302,302],"./zh-CN.json":[508,760]};function n(e){if(!r.o(o,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],n=t[0];return r.e(t[1]).then((()=>r.t(n,3)))}n.keys=()=>Object.keys(o),n.id=69,e.exports=n},804:e=>{"use strict";e.exports=React},907:e=>{"use strict";e.exports=TopWrite},215:e=>{"use strict";e.exports=_}},l={};function s(e){var t=l[e];if(void 0!==t)return t.exports;var r=l[e]={exports:{}};return a[e].call(r.exports,r,r.exports,s),r.exports}s.m=a,s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,s.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"==typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"==typeof r.then)return r}var n=Object.create(null);s.r(n);var i={};e=e||[null,t({}),t([]),t(t)];for(var a=2&o&&r;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((e=>i[e]=()=>r[e]));return i.default=()=>r,s.d(n,i),n},s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.f={},s.e=e=>Promise.all(Object.keys(s.f).reduce(((t,r)=>(s.f[r](e,t),t)),[])),s.u=e=>e+"-"+{302:"d6e207",520:"c0e0ed",713:"ed8b99",760:"403819"}[e]+".js",s.miniCssF=e=>e+".index.css",s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},o="TopWritePlugins = typeof TopWritePlugins === \"undefined\" ? {} : TopWritePlugins; TopWritePlugins['theme-default']:",s.l=(e,t,n,i)=>{if(r[e])r[e].push(t);else{var a,l;if(void 0!==n)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var p=u[d];if(p.getAttribute("src")==e||p.getAttribute("data-webpack")==o+n){a=p;break}}a||(l=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,s.nc&&a.setAttribute("nonce",s.nc),a.setAttribute("data-webpack",o+n),a.src=e),r[e]=[t];var f=(t,o)=>{a.onerror=a.onload=null,clearTimeout(c);var n=r[e];if(delete r[e],a.parentNode&&a.parentNode.removeChild(a),n&&n.forEach((e=>e(o))),t)return t(o)},c=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),l&&document.head.appendChild(a)}},s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.p="",n=e=>new Promise(((t,r)=>{var o=s.miniCssF(e),n=s.p+o;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var n=(a=r[o]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(n===e||n===t))return a}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){var a;if((n=(a=i[o]).getAttribute("data-href"))===e||n===t)return a}})(o,n))return t();((e,t,r,o)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.onerror=n.onload=i=>{if(n.onerror=n.onload=null,"load"===i.type)r();else{var a=i&&("load"===i.type?"missing":i.type),l=i&&i.target&&i.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=a,s.request=l,n.parentNode.removeChild(n),o(s)}},n.href=t,document.head.appendChild(n)})(e,n,t,r)})),i={179:0},s.f.miniCss=(e,t)=>{i[e]?t.push(i[e]):0!==i[e]&&{520:1}[e]&&t.push(i[e]=n(e).then((()=>{i[e]=0}),(t=>{throw delete i[e],t})))},(()=>{var e={179:0};s.f.j=(t,r)=>{var o=s.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var n=new Promise(((r,n)=>o=e[t]=[r,n]));r.push(o[2]=n);var i=s.p+s.u(t),a=new Error;s.l(i,(r=>{if(s.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var n=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",a.name="ChunkLoadError",a.type=n,a.request=i,o[1](a)}}),"chunk-"+t,t)}};var t=(t,r)=>{var o,n,[i,a,l]=r,u=0;for(o in a)s.o(a,o)&&(s.m[o]=a[o]);if(l)l(s);for(t&&t(r);u<i.length;u++)n=i[u],s.o(e,n)&&e[n]&&e[n][0](),e[i[u]]=0},r=self.webpackChunkTopWritePlugins_typeof_TopWritePlugins_undefined_TopWritePlugins_TopWritePlugins_theme_default_=self.webpackChunkTopWritePlugins_typeof_TopWritePlugins_undefined_TopWritePlugins_TopWritePlugins_theme_default_||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var u={};(()=>{"use strict";var e=s(907);s.p=(0,e.getPublicPath)()})(),(()=>{"use strict";s.d(u,{default:()=>r});var e=s(907);var t=s(804);const r=function({models:t,components:r,activate:o,deactivate:n,messages:i,locales:a}){let l;return l=s(150),!i&&a&&(i=e=>a.includes(e)?s(69)(`./${e}.json`):s(69)(`./${a[0]}.json`)),new e.Plugin("theme-default",t,r,o,n,i,l)}({components:{app:s.n(t)().lazy((()=>Promise.all([s.e(713),s.e(520)]).then(s.bind(s,520))))},locales:["zh-CN","en"]})})(),TopWritePlugins="undefined"==typeof TopWritePlugins?{}:TopWritePlugins,TopWritePlugins["theme-default"]=u.default})();
//# sourceMappingURL=index.js.map