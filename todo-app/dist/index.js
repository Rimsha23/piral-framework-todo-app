//@pilet v:2(webpackChunkpr_todoapp,{})
System.register(["react","react-router-dom"],(function(e,t){var r={},n={};return{setters:[function(e){r.Fragment=e.Fragment,r.createElement=e.createElement,r.lazy=e.lazy,r.useState=e.useState},function(e){n.Link=e.Link}],execute:function(){e((()=>{var e,o,a={722:(e,t,r)=>{const n=r(905).R;t.s=function(e){if(e||(e=1),!r.y.meta||!r.y.meta.url)throw console.error("__system_context__",r.y),Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");r.p=n(r.y.meta.url,e)}},905:(e,t,r)=>{function n(e,t){var r=document.createElement("a");r.href=e;for(var n="/"===r.pathname[0]?r.pathname:"/"+r.pathname,o=0,a=n.length;o!==t&&a>=0;){"/"===n[--a]&&o++}if(o!==t)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+t+") is greater than the number of directories ("+o+") in the URL path "+e);var i=n.slice(0,a+1);return r.protocol+"//"+r.host+i}t.R=n;var o=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e}},954:e=>{"use strict";e.exports=r},880:e=>{"use strict";e.exports=n}},i={};function s(e){var t=i[e];if(t!==undefined)return t.exports;var r=i[e]={exports:{}};return a[e](r,r.exports,s),r.exports}s.m=a,s.y=t,s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.f={},s.e=e=>Promise.all(Object.keys(s.f).reduce(((t,r)=>(s.f[r](e,t),t)),[])),s.u=e=>"08191de9.js",s.miniCssF=e=>e+".08191d.css",s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(c){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},o="pr_todoapp:",s.l=(t,r,n,a)=>{if(e[t])e[t].push(r);else{var i,u;if(n!==undefined)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==o+n){i=d;break}}i||(u=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.setAttribute("data-webpack",o+n),i.src=t),e[t]=[r];var p=(r,n)=>{i.onerror=i.onload=null,clearTimeout(f);var o=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),r)return r(n)},f=setTimeout(p.bind(null,undefined,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),u&&document.head.appendChild(i)}},s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;s.g.importScripts&&(e=s.g.location+"");var t=s.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&!e;)e=r[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e})(),(()=>{if("undefined"!=typeof document){var e=e=>new Promise(((t,r)=>{var n=s.miniCssF(e),o=s.p+n;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=(i=r[n]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===t))return i}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){var i;if((o=(i=a[n]).getAttribute("data-href"))===e||o===t)return i}})(n,o))return t();((e,t,r,n,o)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",a.onerror=a.onload=r=>{if(a.onerror=a.onload=null,"load"===r.type)n();else{var i=r&&r.type,s=r&&r.target&&r.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+i+": "+s+")");u.name="ChunkLoadError",u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=s,a.parentNode&&a.parentNode.removeChild(a),o(u)}},a.href=t,r?r.parentNode.insertBefore(a,r.nextSibling):document.head.appendChild(a)})(e,o,null,t,r)})),t={826:0};s.f.miniCss=(r,n)=>{t[r]?n.push(t[r]):0!==t[r]&&{246:1}[r]&&n.push(t[r]=e(r).then((()=>{t[r]=0}),(e=>{throw delete t[r],e})))}}})(),(()=>{var e={826:0};s.f.j=(t,r)=>{var n=s.o(e,t)?e[t]:undefined;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=o);var a=s.p+s.u(t),i=new Error;s.l(a,(r=>{if(s.o(e,t)&&(0!==(n=e[t])&&(e[t]=undefined),n)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,o,[a,i,u]=r,l=0;if(a.some((t=>0!==e[t]))){for(n in i)s.o(i,n)&&(s.m[n]=i[n]);if(u)u(s)}for(t&&t(r);l<a.length;l++)o=a[l],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self.webpackChunkpr_todoapp=self.webpackChunkpr_todoapp||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var u,l,c,d={};return(0,s(722).s)(1),u=document,l=s.p+"main.css",(c=u.createElement("link")).setAttribute("data-origin","todo-app"),c.type="text/css",c.rel="stylesheet",c.href=l,u.head.appendChild(c),(()=>{"use strict";s.r(d),s.d(d,{setup:()=>n});var e=s(954),t=s(880),r=e.lazy((function(){return s.e(246).then(s.bind(s,246))}));function n(n){n.registerPage("/page",r),n.showNotification("Hello from Piral!",{autoClose:2e3}),n.registerMenu((function(){return e.createElement(t.Link,{to:"/page"},"Todo App")})),n.registerTile((function(){return e.createElement("div",null,"Welcome to Piral!")}),{initialColumns:2,initialRows:2})}})(),d})())}}}));
//# sourceMappingURL=index.js.map