(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3454:function(e,t,r){"use strict";var n,o;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(o=r.g.process)?void 0:o.env)?r.g.process:r(7663)},6840:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(6264)}])},6264:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var n=r(5893),o=r(5007),i=r(3784),u=r(5615);let a=(0,i.xC)({reducer:{books:u.ZP}});var c=function(e){let{Component:t,pageProps:r}=e;return(0,n.jsx)(o.zt,{store:a,children:(0,n.jsx)(t,{...r})})}},5615:function(e,t,r){"use strict";r.d(t,{TA:function(){return a},eB:function(){return s},fy:function(){return c},yt:function(){return i}});var n=r(3784),o=r(5934);let i=(0,n.hg)("books/fetchBooks",async()=>{try{let e=await fetch("https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=".concat("kDGpvojMoFGxW0GXn9MpSXh50Uev1R4x"));if(!e.ok)throw Error("Failed to fetch books");let t=await e.json(),r=t.results.lists[0].books.map(e=>({id:(0,o.Z)(),author:e.author,title:e.title,description:e.description,image:e.book_image,category:"Fiction",price:10}));return r}catch(e){throw e}}),u=(0,n.oM)({name:"books",initialState:{books:[],status:"idle"},reducers:{addBook:(e,t)=>{e.books.push(t.payload)},removeBook:(e,t)=>{e.books=e.books.filter(e=>e.id!==t.payload)},editBook:(e,t)=>{let r=t.payload,n=e.books.findIndex(e=>e.id===r.id);if(-1!==n){let t=[...e.books];t[n]=r,e.books=t}}},extraReducers:e=>{e.addCase(i.pending,e=>{e.status="loading"}).addCase(i.fulfilled,(e,t)=>{e.status="success",e.books=t.payload,e.error=""}).addCase(i.rejected,(e,t)=>{e.status="failed",e.error=t.error.message})}}),{addBook:a,removeBook:c,editBook:s}=u.actions;t.ZP=u.reducer},7663:function(e){!function(){var t={229:function(e){var t,r,n,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function u(){throw Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(e){r=u}}();var c=[],s=!1,l=-1;function f(){s&&n&&(s=!1,n.length?c=n.concat(c):l=-1,c.length&&d())}function d(){if(!s){var e=a(f);s=!0;for(var t=c.length;t;){for(n=c,c=[];++l<t;)n&&n[l].run();l=-1,t=c.length}n=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function y(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new p(e,t)),1!==c.length||s||a(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}},u=!0;try{t[e](i,i.exports,n),u=!1}finally{u&&delete r[e]}return i.exports}n.ab="//";var o=n(229);e.exports=o}()},3771:function(e,t,r){"use strict";/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(7294),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=n.useSyncExternalStore,u=n.useRef,a=n.useEffect,c=n.useMemo,s=n.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,r,n,l){var f=u(null);if(null===f.current){var d={hasValue:!1,value:null};f.current=d}else d=f.current;var p=i(e,(f=c(function(){function e(e){if(!a){if(a=!0,i=e,e=n(e),void 0!==l&&d.hasValue){var t=d.value;if(l(t,e))return u=t}return u=e}if(t=u,o(i,e))return t;var r=n(e);return void 0!==l&&l(t,r)?t:(i=e,u=r)}var i,u,a=!1,c=void 0===r?null:r;return[function(){return e(t())},null===c?void 0:function(){return e(c())}]},[t,r,n,l]))[0],f[1]);return a(function(){d.hasValue=!0,d.value=p},[p]),s(p),p}},1103:function(e,t,r){"use strict";e.exports=r(3771)},5934:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});for(var n,o=new Uint8Array(16),i=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,u=[],a=0;a<256;++a)u.push((a+256).toString(16).substr(1));var c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(u[e[t+0]]+u[e[t+1]]+u[e[t+2]]+u[e[t+3]]+"-"+u[e[t+4]]+u[e[t+5]]+"-"+u[e[t+6]]+u[e[t+7]]+"-"+u[e[t+8]]+u[e[t+9]]+"-"+u[e[t+10]]+u[e[t+11]]+u[e[t+12]]+u[e[t+13]]+u[e[t+14]]+u[e[t+15]]).toLowerCase();if(!("string"==typeof r&&i.test(r)))throw TypeError("Stringified UUID is invalid");return r},s=function(e,t,r){var i=(e=e||{}).random||(e.rng||function(){if(!n&&!(n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(o)})();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t){r=r||0;for(var u=0;u<16;++u)t[r+u]=i[u];return t}return c(i)}},3784:function(e,t,r){"use strict";r.d(t,{xC:function(){return eP},hg:function(){return ez},oM:function(){return eV}});var n,o,i=Symbol.for("immer-nothing"),u=Symbol.for("immer-draftable"),a=Symbol.for("immer-state");function c(e,...t){throw Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var s=Object.getPrototypeOf;function l(e){return!!e&&!!e[a]}function f(e){return!!e&&(p(e)||Array.isArray(e)||!!e[u]||!!e.constructor?.[u]||v(e)||m(e))}var d=Object.prototype.constructor.toString();function p(e){if(!e||"object"!=typeof e)return!1;let t=s(e);if(null===t)return!0;let r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===d}function y(e,t){0===h(e)?Object.entries(e).forEach(([r,n])=>{t(r,n,e)}):e.forEach((r,n)=>t(n,r,e))}function h(e){let t=e[a];return t?t.type_:Array.isArray(e)?1:v(e)?2:m(e)?3:0}function b(e,t){return 2===h(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function _(e,t,r){let n=h(e);2===n?e.set(t,r):3===n?e.add(r):e[t]=r}function v(e){return e instanceof Map}function m(e){return e instanceof Set}function g(e){return e.copy_||e.base_}function w(e,t){if(v(e))return new Map(e);if(m(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);if(!t&&p(e)){if(!s(e)){let t=Object.create(null);return Object.assign(t,e)}return{...e}}let r=Object.getOwnPropertyDescriptors(e);delete r[a];let n=Reflect.ownKeys(r);for(let t=0;t<n.length;t++){let o=n[t],i=r[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(r[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(s(e),r)}function S(e,t=!1){return O(e)||l(e)||!f(e)||(h(e)>1&&(e.set=e.add=e.clear=e.delete=E),Object.freeze(e),t&&y(e,(e,t)=>S(t,!0),!0)),e}function E(){c(2)}function O(e){return Object.isFrozen(e)}var x={};function C(e){let t=x[e];return t||c(0,e),t}function j(e,t){t&&(C("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function P(e){T(e),e.drafts_.forEach(R),e.drafts_=null}function T(e){e===o&&(o=e.parent_)}function k(e){return o={drafts_:[],parent_:o,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function R(e){let t=e[a];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function N(e,t){t.unfinalizedDrafts_=t.drafts_.length;let r=t.drafts_[0],n=void 0!==e&&e!==r;return n?(r[a].modified_&&(P(t),c(4)),f(e)&&(e=A(t,e),t.parent_||D(t,e)),t.patches_&&C("Patches").generateReplacementPatches_(r[a].base_,e,t.patches_,t.inversePatches_)):e=A(t,r,[]),P(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==i?e:void 0}function A(e,t,r){if(O(t))return t;let n=t[a];if(!n)return y(t,(o,i)=>M(e,n,t,o,i,r),!0),t;if(n.scope_!==e)return t;if(!n.modified_)return D(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;let t=n.copy_,o=t,i=!1;3===n.type_&&(o=new Set(t),t.clear(),i=!0),y(o,(o,u)=>M(e,n,t,o,u,r,i)),D(e,t,!1),r&&e.patches_&&C("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function M(e,t,r,n,o,i,u){if(l(o)){let u=i&&t&&3!==t.type_&&!b(t.assigned_,n)?i.concat(n):void 0,a=A(e,o,u);if(_(r,n,a),!l(a))return;e.canAutoFreeze_=!1}else u&&r.add(o);if(f(o)&&!O(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;A(e,o),t&&t.scope_.parent_||D(e,o)}}function D(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&S(t,r)}var z={get(e,t){if(t===a)return e;let r=g(e);if(!b(r,t))return function(e,t,r){let n=F(t,r);return n?"value"in n?n.value:n.get?.call(e.draft_):void 0}(e,r,t);let n=r[t];return e.finalized_||!f(n)?n:n===W(e.base_,t)?($(e),e.copy_[t]=L(n,e)):n},has:(e,t)=>t in g(e),ownKeys:e=>Reflect.ownKeys(g(e)),set(e,t,r){let n=F(g(e),t);if(n?.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){let n=W(g(e),t),o=n?.[a];if(o&&o.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if((r===n?0!==r||1/r==1/n:r!=r&&n!=n)&&(void 0!==r||b(e.base_,t)))return!0;$(e),V(e)}return!!(e.copy_[t]===r&&(void 0!==r||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t]))||(e.copy_[t]=r,e.assigned_[t]=!0,!0)},deleteProperty:(e,t)=>(void 0!==W(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,$(e),V(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){let r=g(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty(){c(11)},getPrototypeOf:e=>s(e.base_),setPrototypeOf(){c(12)}},I={};function W(e,t){let r=e[a],n=r?g(r):e;return n[t]}function F(e,t){if(!(t in e))return;let r=s(e);for(;r;){let e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=s(r)}}function V(e){!e.modified_&&(e.modified_=!0,e.parent_&&V(e.parent_))}function $(e){e.copy_||(e.copy_=w(e.base_,e.scope_.immer_.useStrictShallowCopy_))}function L(e,t){let r=v(e)?C("MapSet").proxyMap_(e,t):m(e)?C("MapSet").proxySet_(e,t):function(e,t){let r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:o,modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1},i=n,u=z;r&&(i=[n],u=I);let{revoke:a,proxy:c}=Proxy.revocable(i,u);return n.draft_=c,n.revoke_=a,c}(e,t),n=t?t.scope_:o;return n.drafts_.push(r),r}function U(e){return l(e)||c(10,e),function e(t){let r;if(!f(t)||O(t))return t;let n=t[a];if(n){if(!n.modified_)return n.base_;n.finalized_=!0,r=w(t,n.scope_.immer_.useStrictShallowCopy_)}else r=w(t,!0);return y(r,(t,n)=>{_(r,t,e(n))}),n&&(n.finalized_=!1),r}(e)}y(z,(e,t)=>{I[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),I.deleteProperty=function(e,t){return I.set.call(this,e,t,void 0)},I.set=function(e,t,r){return z.set.call(this,e[0],t,r,e[0])};var B=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,r)=>{let n;if("function"==typeof e&&"function"!=typeof t){let r=t;t=e;let n=this;return function(e=r,...o){return n.produce(e,e=>t.call(this,e,...o))}}if("function"!=typeof t&&c(6),void 0!==r&&"function"!=typeof r&&c(7),f(e)){let o=k(this),i=L(e,void 0),u=!0;try{n=t(i),u=!1}finally{u?P(o):T(o)}return j(o,r),N(n,o)}if(e&&"object"==typeof e)c(1,e);else{if(void 0===(n=t(e))&&(n=e),n===i&&(n=void 0),this.autoFreeze_&&S(n,!0),r){let t=[],o=[];C("Patches").generateReplacementPatches_(e,n,t,o),r(t,o)}return n}},this.produceWithPatches=(e,t)=>{let r,n;if("function"==typeof e)return(t,...r)=>this.produceWithPatches(t,t=>e(t,...r));let o=this.produce(e,t,(e,t)=>{r=e,n=t});return[o,r,n]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){f(e)||c(8),l(e)&&(e=U(e));let t=k(this),r=L(e,void 0);return r[a].isManual_=!0,T(t),r}finishDraft(e,t){let r=e&&e[a];r&&r.isManual_||c(9);let{scope_:n}=r;return j(n,t),N(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){let n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}r>-1&&(t=t.slice(r+1));let n=C("Patches").applyPatches_;return l(e)?n(e,t):this.produce(e,e=>n(e,t))}},X=B.produce;B.produceWithPatches.bind(B),B.setAutoFreeze.bind(B),B.setUseStrictShallowCopy.bind(B),B.applyPatches.bind(B),B.createDraft.bind(B),B.finishDraft.bind(B);var K=e=>Array.isArray(e)?e:[e],q=0,G=class{revision=q;_value;_lastValue;_isEqual=Z;constructor(e,t=Z){this._value=this._lastValue=e,this._isEqual=t}get value(){return this._value}set value(e){this.value!==e&&(this._value=e,this.revision=++q)}};function Z(e,t){return e===t}function H(e){return e instanceof G||console.warn("Not a valid cell! ",e),e.value}var J=(e,t)=>!1;function Q(){return function(e,t=Z){return new G(null,t)}(0,J)}var Y=e=>{let t=e.collectionTag;null===t&&(t=e.collectionTag=Q()),H(t)};Symbol();var ee=0,et=Object.getPrototypeOf({}),er=class{constructor(e){this.value=e,this.value=e,this.tag.value=e}proxy=new Proxy(this,en);tag=Q();tags={};children={};collectionTag=null;id=ee++},en={get(e,t){let r=function(){let{value:r}=e,n=Reflect.get(r,t);if("symbol"==typeof t||t in et)return n;if("object"==typeof n&&null!==n){let r=e.children[t];return void 0===r&&(r=e.children[t]=Array.isArray(n)?new eo(n):new er(n)),r.tag&&H(r.tag),r.proxy}{let r=e.tags[t];return void 0===r&&((r=e.tags[t]=Q()).value=n),H(r),n}}();return r},ownKeys:e=>(Y(e),Reflect.ownKeys(e.value)),getOwnPropertyDescriptor:(e,t)=>Reflect.getOwnPropertyDescriptor(e.value,t),has:(e,t)=>Reflect.has(e.value,t)},eo=class{constructor(e){this.value=e,this.value=e,this.tag.value=e}proxy=new Proxy([this],ei);tag=Q();tags={};children={};collectionTag=null;id=ee++},ei={get:([e],t)=>("length"===t&&Y(e),en.get(e,t)),ownKeys:([e])=>en.ownKeys(e),getOwnPropertyDescriptor:([e],t)=>en.getOwnPropertyDescriptor(e,t),has:([e],t)=>en.has(e,t)},eu="undefined"!=typeof WeakRef?WeakRef:class{constructor(e){this.value=e}deref(){return this.value}};function ea(){return{s:0,v:void 0,o:null,p:null}}function ec(e,t={}){let r,n=ea(),{resultEqualityCheck:o}=t,i=0;function u(){let t,u=n,{length:a}=arguments;for(let e=0;e<a;e++){let t=arguments[e];if("function"==typeof t||"object"==typeof t&&null!==t){let e=u.o;null===e&&(u.o=e=new WeakMap);let r=e.get(t);void 0===r?(u=ea(),e.set(t,u)):u=r}else{let e=u.p;null===e&&(u.p=e=new Map);let r=e.get(t);void 0===r?(u=ea(),e.set(t,u)):u=r}}let c=u;if(1===u.s?t=u.v:(t=e.apply(null,arguments),i++),c.s=1,o){let e=r?.deref()??r;null!=e&&o(e,t)&&(t=e,0!==i&&i--);let n="object"==typeof t&&null!==t||"function"==typeof t;r=n?new eu(t):t}return c.v=t,t}return u.clearCache=()=>{n=ea(),u.resetResultsCount()},u.resultsCount=()=>i,u.resetResultsCount=()=>{i=0},u}function es(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var el="function"==typeof Symbol&&Symbol.observable||"@@observable",ef=()=>Math.random().toString(36).substring(7).split("").join("."),ed={INIT:`@@redux/INIT${ef()}`,REPLACE:`@@redux/REPLACE${ef()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${ef()}`};function ep(e){if("object"!=typeof e||null===e)return!1;let t=e;for(;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function ey(...e){return 0===e.length?e=>e:1===e.length?e[0]:e.reduce((e,t)=>(...r)=>e(t(...r)))}function eh(e){return({dispatch:t,getState:r})=>n=>o=>"function"==typeof o?o(t,r,e):n(o)}var eb=eh();r(3454),((...e)=>{let t=function(e,...t){let r="function"==typeof e?{memoize:e,memoizeOptions:t}:e;return(...e)=>{let t,n=0,o=0,i={},u=e.pop();"object"==typeof u&&(i=u,u=e.pop()),function(e,t=`expected a function, instead received ${typeof e}`){if("function"!=typeof e)throw TypeError(t)}(u,`createSelector expects an output function after the inputs, but received: [${typeof u}]`);let a={...r,...i},{memoize:c,memoizeOptions:s=[],argsMemoize:l=ec,argsMemoizeOptions:f=[],devModeChecks:d={}}=a,p=K(s),y=K(f),h=function(e){let t=Array.isArray(e[0])?e[0]:e;return function(e,t="expected all items to be functions, instead received the following types: "){if(!e.every(e=>"function"==typeof e)){let r=e.map(e=>"function"==typeof e?`function ${e.name||"unnamed"}()`:typeof e).join(", ");throw TypeError(`${t}[${r}]`)}}(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}(e),b=c(function(){return n++,u.apply(null,arguments)},...p),_=l(function(){o++;let e=function(e,t){let r=[],{length:n}=e;for(let o=0;o<n;o++)r.push(e[o].apply(null,t));return r}(h,arguments);return t=b.apply(null,e)},...y);return Object.assign(_,{resultFunc:u,memoizedResultFunc:b,dependencies:h,dependencyRecomputations:()=>o,resetDependencyRecomputations:()=>{o=0},lastResult:()=>t,recomputations:()=>n,resetRecomputations:()=>{n=0},memoize:c,argsMemoize:l})}}(...e);return(...e)=>{let r=t(...e),n=(e,...t)=>r(l(e)?U(e):e,...t);return Object.assign(n,r),n}})(ec);var e_="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!=arguments.length)return"object"==typeof arguments[0]?ey:ey.apply(null,arguments)};"undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__;var ev=e=>e&&"function"==typeof e.match;function em(e,t){function r(...n){if(t){let r=t(...n);if(!r)throw Error(eB(0));return{type:e,payload:r.payload,..."meta"in r&&{meta:r.meta},..."error"in r&&{error:r.error}}}return{type:e,payload:n[0]}}return r.toString=()=>`${e}`,r.type=e,r.match=t=>ep(t)&&"type"in t&&"string"==typeof t.type&&t.type===e,r}var eg=class e extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,e.prototype)}static get[Symbol.species](){return e}concat(...e){return super.concat.apply(this,e)}prepend(...t){return 1===t.length&&Array.isArray(t[0])?new e(...t[0].concat(this)):new e(...t.concat(this))}};function ew(e){return f(e)?X(e,()=>{}):e}function eS(e,t,r){if(e.has(t)){let n=e.get(t);return r.update&&(n=r.update(n,t,e),e.set(t,n)),n}if(!r.insert)throw Error(eB(10));let n=r.insert(t,e);return e.set(t,n),n}var eE=()=>function(e){let{thunk:t=!0,immutableCheck:r=!0,serializableCheck:n=!0,actionCreatorCheck:o=!0}=e??{},i=new eg;return t&&("boolean"==typeof t?i.push(eb):i.push(eh(t.extraArgument))),i},eO=e=>t=>{setTimeout(t,e)},ex="undefined"!=typeof window&&window.requestAnimationFrame?window.requestAnimationFrame:eO(10),eC=(e={type:"raf"})=>t=>(...r)=>{let n=t(...r),o=!0,i=!1,u=!1,a=new Set,c="tick"===e.type?queueMicrotask:"raf"===e.type?ex:"callback"===e.type?e.queueNotification:eO(e.timeout),s=()=>{u=!1,i&&(i=!1,a.forEach(e=>e()))};return Object.assign({},n,{subscribe(e){let t=n.subscribe(()=>o&&e());return a.add(e),()=>{t(),a.delete(e)}},dispatch(e){try{return(i=!(o=!e?.meta?.RTK_autoBatch))&&!u&&(u=!0,c(s)),n.dispatch(e)}finally{o=!0}}})},ej=e=>function(t){let{autoBatch:r=!0}=t??{},n=new eg(e);return r&&n.push(eC("object"==typeof r?r:void 0)),n};function eP(e){let t,r;let n=eE(),{reducer:o,middleware:i,devTools:u=!0,preloadedState:a,enhancers:c}=e||{};if("function"==typeof o)t=o;else if(ep(o))t=function(e){let t;let r=Object.keys(e),n={};for(let t=0;t<r.length;t++){let o=r[t];"function"==typeof e[o]&&(n[o]=e[o])}let o=Object.keys(n);try{!function(e){Object.keys(e).forEach(t=>{let r=e[t],n=r(void 0,{type:ed.INIT});if(void 0===n)throw Error(es(12));if(void 0===r(void 0,{type:ed.PROBE_UNKNOWN_ACTION()}))throw Error(es(13))})}(n)}catch(e){t=e}return function(e={},r){if(t)throw t;let i=!1,u={};for(let t=0;t<o.length;t++){let a=o[t],c=n[a],s=e[a],l=c(s,r);if(void 0===l)throw r&&r.type,Error(es(14));u[a]=l,i=i||l!==s}return(i=i||o.length!==Object.keys(e).length)?u:e}}(o);else throw Error(eB(1));r="function"==typeof i?i(n):n();let s=ey;u&&(s=e_({trace:!1,..."object"==typeof u&&u}));let l=function(...e){return t=>(r,n)=>{let o=t(r,n),i=()=>{throw Error(es(15))},u={getState:o.getState,dispatch:(e,...t)=>i(e,...t)},a=e.map(e=>e(u));return i=ey(...a)(o.dispatch),{...o,dispatch:i}}}(...r),f=ej(l),d="function"==typeof c?c(f):f(),p=s(...d);return function e(t,r,n){if("function"!=typeof t)throw Error(es(2));if("function"==typeof r&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw Error(es(0));if("function"==typeof r&&void 0===n&&(n=r,r=void 0),void 0!==n){if("function"!=typeof n)throw Error(es(1));return n(e)(t,r)}let o=t,i=r,u=new Map,a=u,c=0,s=!1;function l(){a===u&&(a=new Map,u.forEach((e,t)=>{a.set(t,e)}))}function f(){if(s)throw Error(es(3));return i}function d(e){if("function"!=typeof e)throw Error(es(4));if(s)throw Error(es(5));let t=!0;l();let r=c++;return a.set(r,e),function(){if(t){if(s)throw Error(es(6));t=!1,l(),a.delete(r),u=null}}}function p(e){if(!ep(e))throw Error(es(7));if(void 0===e.type)throw Error(es(8));if("string"!=typeof e.type)throw Error(es(17));if(s)throw Error(es(9));try{s=!0,i=o(i,e)}finally{s=!1}let t=u=a;return t.forEach(e=>{e()}),e}return p({type:ed.INIT}),{dispatch:p,subscribe:d,getState:f,replaceReducer:function(e){if("function"!=typeof e)throw Error(es(10));o=e,p({type:ed.REPLACE})},[el]:function(){return{subscribe(e){if("object"!=typeof e||null===e)throw Error(es(11));function t(){e.next&&e.next(f())}t();let r=d(t);return{unsubscribe:r}},[el](){return this}}}}}(t,a,p)}function eT(e){let t;let r={},n=[],o={addCase(e,t){let n="string"==typeof e?e:e.type;if(!n)throw Error(eB(28));if(n in r)throw Error(eB(29));return r[n]=t,o},addMatcher:(e,t)=>(n.push({matcher:e,reducer:t}),o),addDefaultCase:e=>(t=e,o)};return e(o),[r,n,t]}var ek=(e=21)=>{let t="",r=e;for(;r--;)t+="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[64*Math.random()|0];return t},eR=(e,t)=>ev(e)?e.match(t):e(t),eN=["name","message","stack","code"],eA=class{constructor(e,t){this.payload=e,this.meta=t}_type},eM=class{constructor(e,t){this.payload=e,this.meta=t}_type},eD=e=>{if("object"==typeof e&&null!==e){let t={};for(let r of eN)"string"==typeof e[r]&&(t[r]=e[r]);return t}return{message:String(e)}},ez=(()=>{function e(e,t,r){let n=em(e+"/fulfilled",(e,t,r,n)=>({payload:e,meta:{...n||{},arg:r,requestId:t,requestStatus:"fulfilled"}})),o=em(e+"/pending",(e,t,r)=>({payload:void 0,meta:{...r||{},arg:t,requestId:e,requestStatus:"pending"}})),i=em(e+"/rejected",(e,t,n,o,i)=>({payload:o,error:(r&&r.serializeError||eD)(e||"Rejected"),meta:{...i||{},arg:n,requestId:t,rejectedWithValue:!!o,requestStatus:"rejected",aborted:e?.name==="AbortError",condition:e?.name==="ConditionError"}}));return Object.assign(function(e){return(u,a,c)=>{let s;let l=r?.idGenerator?r.idGenerator(e):ek(),f=new AbortController;function d(e){s=e,f.abort()}let p=async function(){let p;try{var y;let i=r?.condition?.(e,{getState:a,extra:c});if(y=i,null!==y&&"object"==typeof y&&"function"==typeof y.then&&(i=await i),!1===i||f.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};let h=new Promise((e,t)=>f.signal.addEventListener("abort",()=>t({name:"AbortError",message:s||"Aborted"})));u(o(l,e,r?.getPendingMeta?.({requestId:l,arg:e},{getState:a,extra:c}))),p=await Promise.race([h,Promise.resolve(t(e,{dispatch:u,getState:a,extra:c,requestId:l,signal:f.signal,abort:d,rejectWithValue:(e,t)=>new eA(e,t),fulfillWithValue:(e,t)=>new eM(e,t)})).then(t=>{if(t instanceof eA)throw t;return t instanceof eM?n(t.payload,l,e,t.meta):n(t,l,e)})])}catch(t){p=t instanceof eA?i(null,l,e,t.payload,t.meta):i(t,l,e)}let h=r&&!r.dispatchConditionRejection&&i.match(p)&&p.meta.condition;return h||u(p),p}();return Object.assign(p,{abort:d,requestId:l,arg:e,unwrap:()=>p.then(eI)})}},{pending:o,rejected:i,fulfilled:n,settled:function(...e){return t=>e.some(e=>eR(e,t))}(i,n),typePrefix:e})}return e.withTypes=()=>e,e})();function eI(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}var eW=Symbol.for("rtk-slice-createasyncthunk"),eF=((n=eF||{}).reducer="reducer",n.reducerWithPrepare="reducerWithPrepare",n.asyncThunk="asyncThunk",n),eV=function({creators:e}={}){let t=e?.asyncThunk?.[eW];return function(e){let r;let{name:n,reducerPath:o=n}=e;if(!n)throw Error(eB(11));let i=("function"==typeof e.reducers?e.reducers(function(){function e(e,t){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...t}}return e.withTypes=()=>e,{reducer:e=>Object.assign({[e.name]:(...t)=>e(...t)}[e.name],{_reducerDefinitionType:"reducer"}),preparedReducer:(e,t)=>({_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:t}),asyncThunk:e}}()):e.reducers)||{},u=Object.keys(i),a={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},c={addCase(e,t){let r="string"==typeof e?e:e.type;if(!r)throw Error(eB(12));if(r in a.sliceCaseReducersByType)throw Error(eB(13));return a.sliceCaseReducersByType[r]=t,c},addMatcher:(e,t)=>(a.sliceMatchers.push({matcher:e,reducer:t}),c),exposeAction:(e,t)=>(a.actionCreators[e]=t,c),exposeCaseReducer:(e,t)=>(a.sliceCaseReducersByName[e]=t,c)};function s(){let[t={},r=[],n]="function"==typeof e.extraReducers?eT(e.extraReducers):[e.extraReducers],o={...t,...a.sliceCaseReducersByType};return function(e,t){let r;let[n,o,i]=eT(t);if("function"==typeof e)r=()=>ew(e());else{let t=ew(e);r=()=>t}function u(e=r(),t){let u=[n[t.type],...o.filter(({matcher:e})=>e(t)).map(({reducer:e})=>e)];return 0===u.filter(e=>!!e).length&&(u=[i]),u.reduce((e,r)=>{if(r){if(l(e)){let n=r(e,t);return void 0===n?e:n}if(f(e))return X(e,e=>r(e,t));{let n=r(e,t);if(void 0===n){if(null===e)return e;throw Error(eB(9))}return n}}return e},e)}return u.getInitialState=r,u}(e.initialState,e=>{for(let t in o)e.addCase(t,o[t]);for(let t of a.sliceMatchers)e.addMatcher(t.matcher,t.reducer);for(let t of r)e.addMatcher(t.matcher,t.reducer);n&&e.addDefaultCase(n)})}u.forEach(r=>{let o=i[r],u={reducerName:r,type:`${n}/${r}`,createNotation:"function"==typeof e.reducers};"asyncThunk"===o._reducerDefinitionType?function({type:e,reducerName:t},r,n,o){if(!o)throw Error(eB(18));let{payloadCreator:i,fulfilled:u,pending:a,rejected:c,settled:s,options:l}=r,f=o(e,i,l);n.exposeAction(t,f),u&&n.addCase(f.fulfilled,u),a&&n.addCase(f.pending,a),c&&n.addCase(f.rejected,c),s&&n.addMatcher(f.settled,s),n.exposeCaseReducer(t,{fulfilled:u||e$,pending:a||e$,rejected:c||e$,settled:s||e$})}(u,o,c,t):function({type:e,reducerName:t,createNotation:r},n,o){let i,u;if("reducer"in n){if(r&&"reducerWithPrepare"!==n._reducerDefinitionType)throw Error(eB(17));i=n.reducer,u=n.prepare}else i=n;o.addCase(e,i).exposeCaseReducer(t,i).exposeAction(t,u?em(e,u):em(e))}(u,o,c)});let d=e=>e,p=new WeakMap,y={name:n,reducerPath:o,reducer:(e,t)=>(r||(r=s()),r(e,t)),actions:a.actionCreators,caseReducers:a.sliceCaseReducersByName,getInitialState:()=>(r||(r=s()),r.getInitialState()),getSelectors(t=d){let r=eS(p,this,{insert:()=>new WeakMap});return eS(r,t,{insert:()=>{let r={};for(let[n,o]of Object.entries(e.selectors??{}))r[n]=function(e,t,r,n){function o(i,...u){let a=r.call(e,i);return void 0===a&&n&&(a=e.getInitialState()),t(a,...u)}return o.unwrapped=t,o}(this,o,t,this!==y);return r}})},selectSlice(e){let t=e[this.reducerPath];return void 0===t&&this!==y&&(t=this.getInitialState()),t},get selectors(){return this.getSelectors(this.selectSlice)},injectInto(e,{reducerPath:t,...r}={}){let n=t??this.reducerPath;return e.inject({reducerPath:n,reducer:this.reducer},r),{...this,reducerPath:n}}};return y}}();function e$(){}var{assign:eL}=Object,eU="listenerMiddleware";function eB(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}em(`${eU}/add`),em(`${eU}/removeAll`),em(`${eU}/remove`),Symbol.for("rtk-state-proxy-original")},5007:function(e,t,r){"use strict";r.d(t,{I0:function(){return w},v9:function(){return h},zt:function(){return v}});var n=r(7294),o=r(1103),i=r(3935),u=function(e){e()},a=()=>u,c=Symbol.for("react-redux-context"),s="undefined"!=typeof globalThis?globalThis:{},l=function(){if(!n.createContext)return{};let e=s[c]??(s[c]=new Map),t=e.get(n.createContext);return t||(t=n.createContext(null),e.set(n.createContext,t)),t}();function f(e=l){return function(){let t=n.useContext(e);return t}}var d=f(),p=()=>{throw Error("uSES not initialized!")},y=(e,t)=>e===t,h=function(e=l){let t=e===l?d:f(e);return function(e,r={}){let{equalityFn:o=y,devModeChecks:i={}}="function"==typeof r?{equalityFn:r}:r,{store:u,subscription:a,getServerState:c,stabilityCheck:s,identityFunctionCheck:l}=t();n.useRef(!0);let f=n.useCallback({[e.name](t){let r=e(t);return r}}[e.name],[e,s,i.stabilityCheck]),d=p(a.addNestedSub,u.getState,c||u.getState,f,o);return n.useDebugValue(d),d}}();Symbol.for("react.element"),Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.server_context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.suspense_list"),Symbol.for("react.memo"),Symbol.for("react.lazy"),Symbol.for("react.offscreen"),Symbol.for("react.client.reference");var b={notify(){},get:()=>[]},_="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?n.useLayoutEffect:n.useEffect,v=function({store:e,context:t,children:r,serverState:o,stabilityCheck:i="once",identityFunctionCheck:u="once"}){let c=n.useMemo(()=>{let t=function(e,t){let r;let n=b,o=0,i=!1;function u(){l.onStateChange&&l.onStateChange()}function c(){o++,r||(r=t?t.addNestedSub(u):e.subscribe(u),n=function(){let e=a(),t=null,r=null;return{clear(){t=null,r=null},notify(){e(()=>{let e=t;for(;e;)e.callback(),e=e.next})},get(){let e=[],r=t;for(;r;)e.push(r),r=r.next;return e},subscribe(e){let n=!0,o=r={callback:e,next:null,prev:r};return o.prev?o.prev.next=o:t=o,function(){n&&null!==t&&(n=!1,o.next?o.next.prev=o.prev:r=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}())}function s(){o--,r&&0===o&&(r(),r=void 0,n.clear(),n=b)}let l={addNestedSub:function(e){c();let t=n.subscribe(e),r=!1;return()=>{r||(r=!0,t(),s())}},notifyNestedSubs:function(){n.notify()},handleChangeWrapper:u,isSubscribed:function(){return i},trySubscribe:function(){i||(i=!0,c())},tryUnsubscribe:function(){i&&(i=!1,s())},getListeners:()=>n};return l}(e);return{store:e,subscription:t,getServerState:o?()=>o:void 0,stabilityCheck:i,identityFunctionCheck:u}},[e,o,i,u]),s=n.useMemo(()=>e.getState(),[e]);return _(()=>{let{subscription:t}=c;return t.onStateChange=t.notifyNestedSubs,t.trySubscribe(),s!==e.getState()&&t.notifyNestedSubs(),()=>{t.tryUnsubscribe(),t.onStateChange=void 0}},[c,s]),n.createElement((t||l).Provider,{value:c},r)};function m(e=l){let t=e===l?d:f(e);return function(){let{store:e}=t();return e}}var g=m(),w=function(e=l){let t=e===l?g:m(e);return function(){let e=t();return e.dispatch}}();p=o.useSyncExternalStoreWithSelector,n.useSyncExternalStore,u=i.unstable_batchedUpdates}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(7875)}),_N_E=e.O()}]);