(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{6435:function(e,t,r){"use strict";r.d(t,{F:function(){return c},f:function(){return u}});var n=r(2265);let a=["light","dark"],o="(prefers-color-scheme: dark)",i="undefined"==typeof window,s=(0,n.createContext)(void 0),l={setTheme:e=>{},themes:[]},c=()=>{var e;return null!==(e=(0,n.useContext)(s))&&void 0!==e?e:l},u=e=>(0,n.useContext)(s)?n.createElement(n.Fragment,null,e.children):n.createElement(m,e),d=["light","dark"],m=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:r=!0,enableColorScheme:i=!0,storageKey:l="theme",themes:c=d,defaultTheme:u=r?"system":"light",attribute:m="data-theme",value:g,children:y,nonce:b})=>{let[w,x]=(0,n.useState)(()=>f(l,u)),[T,E]=(0,n.useState)(()=>f(l)),j=g?Object.values(g):c,k=(0,n.useCallback)(e=>{let n=e;if(!n)return;"system"===e&&r&&(n=p());let o=g?g[n]:n,s=t?v():null,l=document.documentElement;if("class"===m?(l.classList.remove(...j),o&&l.classList.add(o)):o?l.setAttribute(m,o):l.removeAttribute(m),i){let e=a.includes(u)?u:null,t=a.includes(n)?n:e;l.style.colorScheme=t}null==s||s()},[]),C=(0,n.useCallback)(e=>{x(e);try{localStorage.setItem(l,e)}catch(e){}},[e]),O=(0,n.useCallback)(t=>{let n=p(t);E(n),"system"===w&&r&&!e&&k("system")},[w,e]);(0,n.useEffect)(()=>{let e=window.matchMedia(o);return e.addListener(O),O(e),()=>e.removeListener(O)},[O]),(0,n.useEffect)(()=>{let e=e=>{e.key===l&&C(e.newValue||u)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[C]),(0,n.useEffect)(()=>{k(null!=e?e:w)},[e,w]);let _=(0,n.useMemo)(()=>({theme:w,setTheme:C,forcedTheme:e,resolvedTheme:"system"===w?T:w,themes:r?[...c,"system"]:c,systemTheme:r?T:void 0}),[w,C,e,T,r,c]);return n.createElement(s.Provider,{value:_},n.createElement(h,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:r,enableColorScheme:i,storageKey:l,themes:c,defaultTheme:u,attribute:m,value:g,children:y,attrs:j,nonce:b}),y)},h=(0,n.memo)(({forcedTheme:e,storageKey:t,attribute:r,enableSystem:i,enableColorScheme:s,defaultTheme:l,value:c,attrs:u,nonce:d})=>{let m="system"===l,h="class"===r?`var d=document.documentElement,c=d.classList;c.remove(${u.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${r}',s='setAttribute';`,f=s?a.includes(l)&&l?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${l}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",v=(e,t=!1,n=!0)=>{let o=c?c[e]:e,i=t?e+"|| ''":`'${o}'`,l="";return s&&n&&!t&&a.includes(e)&&(l+=`d.style.colorScheme = '${e}';`),"class"===r?l+=t||o?`c.add(${i})`:"null":o&&(l+=`d[s](n,${i})`),l},p=e?`!function(){${h}${v(e)}}()`:i?`!function(){try{${h}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${m})){var t='${o}',m=window.matchMedia(t);if(m.media!==t||m.matches){${v("dark")}}else{${v("light")}}}else if(e){${c?`var x=${JSON.stringify(c)};`:""}${v(c?"x[e]":"e",!0)}}${m?"":"else{"+v(l,!1,!1)+"}"}${f}}catch(e){}}()`:`!function(){try{${h}var e=localStorage.getItem('${t}');if(e){${c?`var x=${JSON.stringify(c)};`:""}${v(c?"x[e]":"e",!0)}}else{${v(l,!1,!1)};}${f}}catch(t){}}();`;return n.createElement("script",{nonce:d,dangerouslySetInnerHTML:{__html:p}})},()=>!0),f=(e,t)=>{let r;if(!i){try{r=localStorage.getItem(e)||void 0}catch(e){}return r||t}},v=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},p=e=>(e||(e=window.matchMedia(o)),e.matches?"dark":"light")},2601:function(e,t,r){"use strict";var n,a;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(a=r.g.process)?void 0:a.env)?r.g.process:r(8960)},6851:function(e,t,r){Promise.resolve().then(r.t.bind(r,6685,23)),Promise.resolve().then(r.bind(r,4129)),Promise.resolve().then(r.bind(r,6056)),Promise.resolve().then(r.bind(r,1287)),Promise.resolve().then(r.bind(r,9394)),Promise.resolve().then(r.t.bind(r,4053,23)),Promise.resolve().then(r.t.bind(r,2471,23)),Promise.resolve().then(r.t.bind(r,1479,23)),Promise.resolve().then(r.t.bind(r,5982,23)),Promise.resolve().then(r.t.bind(r,8483,23))},9103:function(e,t,r){"use strict";var n=r(2601);let a={title:"Dav1d",author:"David",headerTitle:"Dav1d",description:"My portfolio and blog",language:"en-us",theme:"dark",siteUrl:"https://tailwind-nextjs-starter-blog.vercel.app",siteRepo:"https://github.com/timlrx/tailwind-nextjs-starter-blog",siteLogo:"/static/images/logo.png",image:"/static/images/avatar.jpg",socialBanner:"/static/images/twitter-card.png",email:"daviddidenco84@gmail.com",github:"https://github.com/Estiknok",twitter:"https://twitter.com/Twitter",facebook:"https://facebook.com",youtube:"https://youtube.com",linkedin:"https://www.linkedin.com",locale:"en-US",analytics:{plausibleDataDomain:"",simpleAnalytics:!1,umamiWebsiteId:"",googleAnalyticsId:""},newsletter:{provider:"buttondown"},comment:{provider:"giscus",giscusConfig:{repo:n.env.NEXT_PUBLIC_GISCUS_REPO,repositoryId:n.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,category:n.env.NEXT_PUBLIC_GISCUS_CATEGORY,categoryId:n.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,mapping:"pathname",reactions:"1",metadata:"0",theme:"light",darkTheme:"transparent_dark",themeURL:""},utterancesConfig:{repo:n.env.NEXT_PUBLIC_UTTERANCES_REPO,issueTerm:"",label:"",theme:"",darkTheme:""},disqusConfig:{shortname:n.env.NEXT_PUBLIC_DISQUS_SHORTNAME}}};e.exports=a},4129:function(e,t,r){"use strict";r.r(t),r.d(t,{Providers:function(){return s}});var n=r(7437),a=r(6435),o=r(9103),i=r.n(o);function s(e){let{children:t}=e;return(0,n.jsx)(a.f,{attribute:"class",defaultTheme:i().theme,children:t})}},7817:function(e,t,r){"use strict";var n=r(7437),a=r(1396),o=r.n(a);t.Z=e=>{let{href:t,...r}=e,a=t&&t.startsWith("/"),i=t&&t.startsWith("#");return a?(0,n.jsx)(o(),{href:t,legacyBehavior:!0,children:(0,n.jsx)("a",{...r})}):i?(0,n.jsx)("a",{href:t,...r}):(0,n.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:t,...r})}},1287:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var n=r(7437),a=r(2265),o=r(7817),i=[{href:"/",title:"Home"},{href:"/blog",title:"Blog"},{href:"/tags",title:"Tags"},{href:"/projects",title:"Projects"}],s=()=>{let[e,t]=(0,a.useState)(!1),r=()=>{t(e=>(e?document.body.style.overflow="auto":document.body.style.overflow="hidden",!e))};return(0,n.jsxs)("div",{className:"sm:hidden",children:[(0,n.jsx)("button",{type:"button",className:"ml-1 mr-1 h-8 w-8 rounded py-1","aria-label":"Toggle Menu",onClick:r,children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"text-gray-900 dark:text-gray-100",children:e?(0,n.jsx)("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"}):(0,n.jsx)("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"})})}),(0,n.jsxs)("div",{className:"fixed right-0 top-24 z-10 h-full w-full transform bg-gray-200 opacity-95 duration-300 ease-in-out dark:bg-gray-800 ".concat(e?"translate-x-0":"translate-x-full"),children:[(0,n.jsx)("button",{type:"button","aria-label":"toggle modal",className:"fixed h-full w-full cursor-auto focus:outline-none",onClick:r}),(0,n.jsx)("nav",{className:"fixed mt-8 h-full",children:i.map(e=>(0,n.jsx)("div",{className:"px-12 py-4",children:(0,n.jsx)(o.Z,{href:e.href,className:"text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100",onClick:r,children:e.title})},e.title))})]})]})}},9394:function(e,t,r){"use strict";r.r(t);var n=r(7437),a=r(2265),o=r(6435);t.default=()=>{let[e,t]=(0,a.useState)(!1),{theme:r,setTheme:i}=(0,o.F)();return((0,a.useEffect)(()=>t(!0),[]),e)?(0,n.jsx)("button",{"aria-label":"Toggle Dark Mode",type:"button",className:"ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4",onClick:()=>i("dark"===r?"light":"dark"),children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"text-gray-900 dark:text-gray-100",children:e&&"dark"===r?(0,n.jsx)("path",{fillRule:"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",clipRule:"evenodd"}):(0,n.jsx)("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"})})}):null}},6056:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return b}});var n,a,o,i,s,l,c,u=r(7437),d=r(2265);function m(){return(m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function h(){return(h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function f(){return(f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function v(){return(v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function p(){return(p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function g(){return(g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let y={mail:function(e){return d.createElement("svg",m({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},e),n||(n=d.createElement("path",{d:"M2.003 5.884 10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884z"})),a||(a=d.createElement("path",{d:"m18 8.118-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118z"})))},github:function(e){return d.createElement("svg",h({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),o||(o=d.createElement("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})))},facebook:function(e){return d.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),i||(i=d.createElement("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})))},youtube:function(e){return d.createElement("svg",v({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),s||(s=d.createElement("path",{d:"M23.499 6.203a3.008 3.008 0 0 0-2.089-2.089c-1.87-.501-9.4-.501-9.4-.501s-7.509-.01-9.399.501a3.008 3.008 0 0 0-2.088 2.09A31.258 31.26 0 0 0 0 12.01a31.258 31.26 0 0 0 .523 5.785 3.008 3.008 0 0 0 2.088 2.089c1.869.502 9.4.502 9.4.502s7.508 0 9.399-.502a3.008 3.008 0 0 0 2.089-2.09 31.258 31.26 0 0 0 .5-5.784 31.258 31.26 0 0 0-.5-5.808zm-13.891 9.4V8.407l6.266 3.604z"})))},linkedin:function(e){return d.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),l||(l=d.createElement("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})))},twitter:function(e){return d.createElement("svg",g({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),c||(c=d.createElement("path",{d:"M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z"})))}};var b=e=>{let{kind:t,href:r,size:n=8}=e;if(!r||"mail"===t&&!/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(r))return null;let a=y[t];return(0,u.jsxs)("a",{className:"text-sm text-gray-500 transition hover:text-gray-600",target:"_blank",rel:"noopener noreferrer",href:r,children:[(0,u.jsx)("span",{className:"sr-only",children:t}),(0,u.jsx)(a,{className:"fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-".concat(n," w-").concat(n)})]})}},8483:function(){},5982:function(){},2471:function(){},1479:function(){},4053:function(){},8960:function(e){!function(){var t={229:function(e){var t,r,n,a=e.exports={};function o(){throw Error("setTimeout has not been defined")}function i(){throw Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var l=[],c=!1,u=-1;function d(){c&&n&&(c=!1,n.length?l=n.concat(l):u=-1,l.length&&m())}function m(){if(!c){var e=s(d);c=!0;for(var t=l.length;t;){for(n=l,l=[];++u<t;)n&&n[u].run();u=-1,t=l.length}n=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function f(){}a.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new h(e,t)),1!==l.length||c||s(m)},h.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=f,a.addListener=f,a.once=f,a.off=f,a.removeListener=f,a.removeAllListeners=f,a.emit=f,a.prependListener=f,a.prependOnceListener=f,a.listeners=function(e){return[]},a.binding=function(e){throw Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw Error("process.chdir is not supported")},a.umask=function(){return 0}}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var o=r[e]={exports:{}},i=!0;try{t[e](o,o.exports,n),i=!1}finally{i&&delete r[e]}return o.exports}n.ab="//";var a=n(229);e.exports=a}()},622:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(2265),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,o={},c=null,u=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,n)&&!l.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:a,type:e,key:c,ref:u,props:o,_owner:s.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},7437:function(e,t,r){"use strict";e.exports=r(622)},1396:function(e,t,r){e.exports=r(6685)}},function(e){e.O(0,[685,30,971,596,744],function(){return e(e.s=6851)}),_N_E=e.O()}]);