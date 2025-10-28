(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function X0(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var $f={exports:{}},Oo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dv;function N_(){if(Dv)return Oo;Dv=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:a,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Oo.Fragment=e,Oo.jsx=i,Oo.jsxs=i,Oo}var Uv;function O_(){return Uv||(Uv=1,$f.exports=N_()),$f.exports}var Y=O_(),eh={exports:{}},lt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lv;function P_(){if(Lv)return lt;Lv=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),_=Symbol.iterator;function S(L){return L===null||typeof L!="object"?null:(L=_&&L[_]||L["@@iterator"],typeof L=="function"?L:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,y={};function x(L,te,pe){this.props=L,this.context=te,this.refs=y,this.updater=pe||M}x.prototype.isReactComponent={},x.prototype.setState=function(L,te){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,te,"setState")},x.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function I(){}I.prototype=x.prototype;function B(L,te,pe){this.props=L,this.context=te,this.refs=y,this.updater=pe||M}var R=B.prototype=new I;R.constructor=B,b(R,x.prototype),R.isPureReactComponent=!0;var X=Array.isArray;function k(){}var F={H:null,A:null,T:null,S:null},J=Object.prototype.hasOwnProperty;function U(L,te,pe){var ye=pe.ref;return{$$typeof:a,type:L,key:te,ref:ye!==void 0?ye:null,props:pe}}function D(L,te){return U(L.type,te,L.props)}function H(L){return typeof L=="object"&&L!==null&&L.$$typeof===a}function K(L){var te={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(pe){return te[pe]})}var ce=/\/+/g;function ee(L,te){return typeof L=="object"&&L!==null&&L.key!=null?K(""+L.key):te.toString(36)}function O(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(k,k):(L.status="pending",L.then(function(te){L.status==="pending"&&(L.status="fulfilled",L.value=te)},function(te){L.status==="pending"&&(L.status="rejected",L.reason=te)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function w(L,te,pe,ye,Ce){var ne=typeof L;(ne==="undefined"||ne==="boolean")&&(L=null);var he=!1;if(L===null)he=!0;else switch(ne){case"bigint":case"string":case"number":he=!0;break;case"object":switch(L.$$typeof){case a:case e:he=!0;break;case v:return he=L._init,w(he(L._payload),te,pe,ye,Ce)}}if(he)return Ce=Ce(L),he=ye===""?"."+ee(L,0):ye,X(Ce)?(pe="",he!=null&&(pe=he.replace(ce,"$&/")+"/"),w(Ce,te,pe,"",function(Ye){return Ye})):Ce!=null&&(H(Ce)&&(Ce=D(Ce,pe+(Ce.key==null||L&&L.key===Ce.key?"":(""+Ce.key).replace(ce,"$&/")+"/")+he)),te.push(Ce)),1;he=0;var De=ye===""?".":ye+":";if(X(L))for(var Oe=0;Oe<L.length;Oe++)ye=L[Oe],ne=De+ee(ye,Oe),he+=w(ye,te,pe,ne,Ce);else if(Oe=S(L),typeof Oe=="function")for(L=Oe.call(L),Oe=0;!(ye=L.next()).done;)ye=ye.value,ne=De+ee(ye,Oe++),he+=w(ye,te,pe,ne,Ce);else if(ne==="object"){if(typeof L.then=="function")return w(O(L),te,pe,ye,Ce);throw te=String(L),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.")}return he}function z(L,te,pe){if(L==null)return L;var ye=[],Ce=0;return w(L,ye,"","",function(ne){return te.call(pe,ne,Ce++)}),ye}function P(L){if(L._status===-1){var te=L._result;te=te(),te.then(function(pe){(L._status===0||L._status===-1)&&(L._status=1,L._result=pe)},function(pe){(L._status===0||L._status===-1)&&(L._status=2,L._result=pe)}),L._status===-1&&(L._status=0,L._result=te)}if(L._status===1)return L._result.default;throw L._result}var ue=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var te=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(te))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},de={map:z,forEach:function(L,te,pe){z(L,function(){te.apply(this,arguments)},pe)},count:function(L){var te=0;return z(L,function(){te++}),te},toArray:function(L){return z(L,function(te){return te})||[]},only:function(L){if(!H(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return lt.Activity=g,lt.Children=de,lt.Component=x,lt.Fragment=i,lt.Profiler=l,lt.PureComponent=B,lt.StrictMode=s,lt.Suspense=m,lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,lt.__COMPILER_RUNTIME={__proto__:null,c:function(L){return F.H.useMemoCache(L)}},lt.cache=function(L){return function(){return L.apply(null,arguments)}},lt.cacheSignal=function(){return null},lt.cloneElement=function(L,te,pe){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var ye=b({},L.props),Ce=L.key;if(te!=null)for(ne in te.key!==void 0&&(Ce=""+te.key),te)!J.call(te,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&te.ref===void 0||(ye[ne]=te[ne]);var ne=arguments.length-2;if(ne===1)ye.children=pe;else if(1<ne){for(var he=Array(ne),De=0;De<ne;De++)he[De]=arguments[De+2];ye.children=he}return U(L.type,Ce,ye)},lt.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},lt.createElement=function(L,te,pe){var ye,Ce={},ne=null;if(te!=null)for(ye in te.key!==void 0&&(ne=""+te.key),te)J.call(te,ye)&&ye!=="key"&&ye!=="__self"&&ye!=="__source"&&(Ce[ye]=te[ye]);var he=arguments.length-2;if(he===1)Ce.children=pe;else if(1<he){for(var De=Array(he),Oe=0;Oe<he;Oe++)De[Oe]=arguments[Oe+2];Ce.children=De}if(L&&L.defaultProps)for(ye in he=L.defaultProps,he)Ce[ye]===void 0&&(Ce[ye]=he[ye]);return U(L,ne,Ce)},lt.createRef=function(){return{current:null}},lt.forwardRef=function(L){return{$$typeof:d,render:L}},lt.isValidElement=H,lt.lazy=function(L){return{$$typeof:v,_payload:{_status:-1,_result:L},_init:P}},lt.memo=function(L,te){return{$$typeof:p,type:L,compare:te===void 0?null:te}},lt.startTransition=function(L){var te=F.T,pe={};F.T=pe;try{var ye=L(),Ce=F.S;Ce!==null&&Ce(pe,ye),typeof ye=="object"&&ye!==null&&typeof ye.then=="function"&&ye.then(k,ue)}catch(ne){ue(ne)}finally{te!==null&&pe.types!==null&&(te.types=pe.types),F.T=te}},lt.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},lt.use=function(L){return F.H.use(L)},lt.useActionState=function(L,te,pe){return F.H.useActionState(L,te,pe)},lt.useCallback=function(L,te){return F.H.useCallback(L,te)},lt.useContext=function(L){return F.H.useContext(L)},lt.useDebugValue=function(){},lt.useDeferredValue=function(L,te){return F.H.useDeferredValue(L,te)},lt.useEffect=function(L,te){return F.H.useEffect(L,te)},lt.useEffectEvent=function(L){return F.H.useEffectEvent(L)},lt.useId=function(){return F.H.useId()},lt.useImperativeHandle=function(L,te,pe){return F.H.useImperativeHandle(L,te,pe)},lt.useInsertionEffect=function(L,te){return F.H.useInsertionEffect(L,te)},lt.useLayoutEffect=function(L,te){return F.H.useLayoutEffect(L,te)},lt.useMemo=function(L,te){return F.H.useMemo(L,te)},lt.useOptimistic=function(L,te){return F.H.useOptimistic(L,te)},lt.useReducer=function(L,te,pe){return F.H.useReducer(L,te,pe)},lt.useRef=function(L){return F.H.useRef(L)},lt.useState=function(L){return F.H.useState(L)},lt.useSyncExternalStore=function(L,te,pe){return F.H.useSyncExternalStore(L,te,pe)},lt.useTransition=function(){return F.H.useTransition()},lt.version="19.2.0",lt}var Bv;function Bd(){return Bv||(Bv=1,eh.exports=P_()),eh.exports}var en=Bd();const Y0=X0(en);var th={exports:{}},Po={},nh={exports:{}},ih={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nv;function I_(){return Nv||(Nv=1,(function(a){function e(w,z){var P=w.length;w.push(z);e:for(;0<P;){var ue=P-1>>>1,de=w[ue];if(0<l(de,z))w[ue]=z,w[P]=de,P=ue;else break e}}function i(w){return w.length===0?null:w[0]}function s(w){if(w.length===0)return null;var z=w[0],P=w.pop();if(P!==z){w[0]=P;e:for(var ue=0,de=w.length,L=de>>>1;ue<L;){var te=2*(ue+1)-1,pe=w[te],ye=te+1,Ce=w[ye];if(0>l(pe,P))ye<de&&0>l(Ce,pe)?(w[ue]=Ce,w[ye]=P,ue=ye):(w[ue]=pe,w[te]=P,ue=te);else if(ye<de&&0>l(Ce,P))w[ue]=Ce,w[ye]=P,ue=ye;else break e}}return z}function l(w,z){var P=w.sortIndex-z.sortIndex;return P!==0?P:w.id-z.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();a.unstable_now=function(){return h.now()-d}}var m=[],p=[],v=1,g=null,_=3,S=!1,M=!1,b=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function R(w){for(var z=i(p);z!==null;){if(z.callback===null)s(p);else if(z.startTime<=w)s(p),z.sortIndex=z.expirationTime,e(m,z);else break;z=i(p)}}function X(w){if(b=!1,R(w),!M)if(i(m)!==null)M=!0,k||(k=!0,K());else{var z=i(p);z!==null&&O(X,z.startTime-w)}}var k=!1,F=-1,J=5,U=-1;function D(){return y?!0:!(a.unstable_now()-U<J)}function H(){if(y=!1,k){var w=a.unstable_now();U=w;var z=!0;try{e:{M=!1,b&&(b=!1,I(F),F=-1),S=!0;var P=_;try{t:{for(R(w),g=i(m);g!==null&&!(g.expirationTime>w&&D());){var ue=g.callback;if(typeof ue=="function"){g.callback=null,_=g.priorityLevel;var de=ue(g.expirationTime<=w);if(w=a.unstable_now(),typeof de=="function"){g.callback=de,R(w),z=!0;break t}g===i(m)&&s(m),R(w)}else s(m);g=i(m)}if(g!==null)z=!0;else{var L=i(p);L!==null&&O(X,L.startTime-w),z=!1}}break e}finally{g=null,_=P,S=!1}z=void 0}}finally{z?K():k=!1}}}var K;if(typeof B=="function")K=function(){B(H)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,ee=ce.port2;ce.port1.onmessage=H,K=function(){ee.postMessage(null)}}else K=function(){x(H,0)};function O(w,z){F=x(function(){w(a.unstable_now())},z)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(w){w.callback=null},a.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<w?Math.floor(1e3/w):5},a.unstable_getCurrentPriorityLevel=function(){return _},a.unstable_next=function(w){switch(_){case 1:case 2:case 3:var z=3;break;default:z=_}var P=_;_=z;try{return w()}finally{_=P}},a.unstable_requestPaint=function(){y=!0},a.unstable_runWithPriority=function(w,z){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}var P=_;_=w;try{return z()}finally{_=P}},a.unstable_scheduleCallback=function(w,z,P){var ue=a.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?ue+P:ue):P=ue,w){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=P+de,w={id:v++,callback:z,priorityLevel:w,startTime:P,expirationTime:de,sortIndex:-1},P>ue?(w.sortIndex=P,e(p,w),i(m)===null&&w===i(p)&&(b?(I(F),F=-1):b=!0,O(X,P-ue))):(w.sortIndex=de,e(m,w),M||S||(M=!0,k||(k=!0,K()))),w},a.unstable_shouldYield=D,a.unstable_wrapCallback=function(w){var z=_;return function(){var P=_;_=z;try{return w.apply(this,arguments)}finally{_=P}}}})(ih)),ih}var Ov;function z_(){return Ov||(Ov=1,nh.exports=I_()),nh.exports}var ah={exports:{}},Bn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pv;function F_(){if(Pv)return Bn;Pv=1;var a=Bd();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,v){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:v}}var h=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Bn.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,v)},Bn.flushSync=function(m){var p=h.T,v=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=v,s.d.f()}},Bn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Bn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Bn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,g=d(v,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:_,fetchPriority:S}):v==="script"&&s.d.X(m,{crossOrigin:g,integrity:_,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Bn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Bn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,g=d(v,p.crossOrigin);s.d.L(m,v,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Bn.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Bn.requestFormReset=function(m){s.d.r(m)},Bn.unstable_batchedUpdates=function(m,p){return m(p)},Bn.useFormState=function(m,p,v){return h.H.useFormState(m,p,v)},Bn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Bn.version="19.2.0",Bn}var Iv;function H_(){if(Iv)return ah.exports;Iv=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),ah.exports=F_(),ah.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zv;function G_(){if(zv)return Po;zv=1;var a=z_(),e=Bd(),i=H_();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,r=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(r=n.return),t=n.return;while(t)}return n.tag===3?r:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var r=t,o=n;;){var u=r.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){r=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===r)return m(u),t;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(r.return!==o.return)r=u,o=f;else{for(var A=!1,T=u.child;T;){if(T===r){A=!0,r=u,o=f;break}if(T===o){A=!0,o=u,r=f;break}T=T.sibling}if(!A){for(T=f.child;T;){if(T===r){A=!0,r=f,o=u;break}if(T===o){A=!0,o=f,r=u;break}T=T.sibling}if(!A)throw Error(s(189))}}if(r.alternate!==o)throw Error(s(190))}if(r.tag!==3)throw Error(s(188));return r.stateNode.current===r?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),B=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),k=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function K(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var ce=Symbol.for("react.client.reference");function ee(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ce?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case b:return"Fragment";case x:return"Profiler";case y:return"StrictMode";case X:return"Suspense";case k:return"SuspenseList";case U:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case M:return"Portal";case B:return t.displayName||"Context";case I:return(t._context.displayName||"Context")+".Consumer";case R:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return n=t.displayName||null,n!==null?n:ee(t.type)||"Memo";case J:n=t._payload,t=t._init;try{return ee(t(n))}catch{}}return null}var O=Array.isArray,w=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P={pending:!1,data:null,method:null,action:null},ue=[],de=-1;function L(t){return{current:t}}function te(t){0>de||(t.current=ue[de],ue[de]=null,de--)}function pe(t,n){de++,ue[de]=t.current,t.current=n}var ye=L(null),Ce=L(null),ne=L(null),he=L(null);function De(t,n){switch(pe(ne,n),pe(Ce,t),pe(ye,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?$g(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=$g(n),t=ev(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}te(ye),pe(ye,t)}function Oe(){te(ye),te(Ce),te(ne)}function Ye(t){t.memoizedState!==null&&pe(he,t);var n=ye.current,r=ev(n,t.type);n!==r&&(pe(Ce,t),pe(ye,r))}function ct(t){Ce.current===t&&(te(ye),te(Ce)),he.current===t&&(te(he),Uo._currentValue=P)}var Jt,V;function Tt(t){if(Jt===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);Jt=n&&n[1]||"",V=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Jt+t+V}var at=!1;function Ke(t,n){if(!t||at)return"";at=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Ae=function(){throw Error()};if(Object.defineProperty(Ae.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ae,[])}catch(fe){var se=fe}Reflect.construct(t,[],Ae)}else{try{Ae.call()}catch(fe){se=fe}t.call(Ae.prototype)}}else{try{throw Error()}catch(fe){se=fe}(Ae=t())&&typeof Ae.catch=="function"&&Ae.catch(function(){})}}catch(fe){if(fe&&se&&typeof fe.stack=="string")return[fe.stack,se.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),A=f[0],T=f[1];if(A&&T){var G=A.split(`
`),ae=T.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ae.length&&!ae[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===ae.length)for(o=G.length-1,u=ae.length-1;1<=o&&0<=u&&G[o]!==ae[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==ae[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==ae[u]){var ge=`
`+G[o].replace(" at new "," at ");return t.displayName&&ge.includes("<anonymous>")&&(ge=ge.replace("<anonymous>",t.displayName)),ge}while(1<=o&&0<=u);break}}}finally{at=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?Tt(r):""}function We(t,n){switch(t.tag){case 26:case 27:case 5:return Tt(t.type);case 16:return Tt("Lazy");case 13:return t.child!==n&&n!==null?Tt("Suspense Fallback"):Tt("Suspense");case 19:return Tt("SuspenseList");case 0:case 15:return Ke(t.type,!1);case 11:return Ke(t.type.render,!1);case 1:return Ke(t.type,!0);case 31:return Tt("Activity");default:return""}}function Xt(t){try{var n="",r=null;do n+=We(t,r),r=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Xe=Object.prototype.hasOwnProperty,ot=a.unstable_scheduleCallback,tn=a.unstable_cancelCallback,$t=a.unstable_shouldYield,N=a.unstable_requestPaint,E=a.unstable_now,re=a.unstable_getCurrentPriorityLevel,ve=a.unstable_ImmediatePriority,Ee=a.unstable_UserBlockingPriority,me=a.unstable_NormalPriority,Ze=a.unstable_LowPriority,we=a.unstable_IdlePriority,qe=a.log,je=a.unstable_setDisableYieldValue,Te=null,Re=null;function Je(t){if(typeof qe=="function"&&je(t),Re&&typeof Re.setStrictMode=="function")try{Re.setStrictMode(Te,t)}catch{}}var ze=Math.clz32?Math.clz32:Q,Le=Math.log,ut=Math.LN2;function Q(t){return t>>>=0,t===0?32:31-(Le(t)/ut|0)|0}var be=256,Ue=262144,Fe=4194304;function Me(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function _e(t,n,r){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,A=t.pingedLanes;t=t.warmLanes;var T=o&134217727;return T!==0?(o=T&~f,o!==0?u=Me(o):(A&=T,A!==0?u=Me(A):r||(r=T&~t,r!==0&&(u=Me(r))))):(T=o&~f,T!==0?u=Me(T):A!==0?u=Me(A):r||(r=o&~t,r!==0&&(u=Me(r)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,r=n&-n,f>=r||f===32&&(r&4194048)!==0)?n:u}function He(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function st(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pt(){var t=Fe;return Fe<<=1,(Fe&62914560)===0&&(Fe=4194304),t}function Ct(t){for(var n=[],r=0;31>r;r++)n.push(t);return n}function Fn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function hi(t,n,r,o,u,f){var A=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var T=t.entanglements,G=t.expirationTimes,ae=t.hiddenUpdates;for(r=A&~r;0<r;){var ge=31-ze(r),Ae=1<<ge;T[ge]=0,G[ge]=-1;var se=ae[ge];if(se!==null)for(ae[ge]=null,ge=0;ge<se.length;ge++){var fe=se[ge];fe!==null&&(fe.lane&=-536870913)}r&=~Ae}o!==0&&Xs(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(A&~n))}function Xs(t,n,r){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-ze(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|r&261930}function Ui(t,n){var r=t.entangledLanes|=n;for(t=t.entanglements;r;){var o=31-ze(r),u=1<<o;u&n|t[o]&n&&(t[o]|=n),r&=~u}}function Br(t,n){var r=n&-n;return r=(r&42)!==0?1:Nr(r),(r&(t.suspendedLanes|n))!==0?0:r}function Nr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Or(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function tr(){var t=z.p;return t!==0?t:(t=window.event,t===void 0?32:Ev(t.type))}function Ys(t,n){var r=z.p;try{return z.p=t,n()}finally{z.p=r}}var Zn=Math.random().toString(36).slice(2),ln="__reactFiber$"+Zn,Tn="__reactProps$"+Zn,Sa="__reactContainer$"+Zn,Ws="__reactEvents$"+Zn,Wc="__reactListeners$"+Zn,Qc="__reactHandles$"+Zn,tl="__reactResources$"+Zn,nr="__reactMarker$"+Zn;function C(t){delete t[ln],delete t[Tn],delete t[Ws],delete t[Wc],delete t[Qc]}function j(t){var n=t[ln];if(n)return n;for(var r=t.parentNode;r;){if(n=r[Sa]||r[ln]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(t=ov(t);t!==null;){if(r=t[ln])return r;t=ov(t)}return n}t=r,r=t.parentNode}return null}function oe(t){if(t=t[ln]||t[Sa]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function le(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function $(t){var n=t[tl];return n||(n=t[tl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Se(t){t[nr]=!0}var Be=new Set,Ve={};function Ie(t,n){$e(t,n),$e(t+"Capture",n)}function $e(t,n){for(Ve[t]=n,t=0;t<n.length;t++)Be.add(n[t])}var rt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),et={},pt={};function Nt(t){return Xe.call(pt,t)?!0:Xe.call(et,t)?!1:rt.test(t)?pt[t]=!0:(et[t]=!0,!1)}function Yt(t,n,r){if(Nt(n))if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+r)}}function Ot(t,n,r){if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+r)}}function vt(t,n,r,o){if(o===null)t.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(n,r,""+o)}}function ke(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Qt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function wt(t,n,r){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(A){r=""+A,f.call(this,A)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return r},setValue:function(A){r=""+A},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function bn(t){if(!t._valueTracker){var n=Qt(t)?"checked":"value";t._valueTracker=wt(t,n,""+t[n])}}function Xi(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var r=n.getValue(),o="";return t&&(o=Qt(t)?t.checked?"true":"false":t.value),t=o,t!==r?(n.setValue(t),!0):!1}function _n(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var ir=/[\n"\\]/g;function yt(t){return t.replace(ir,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ln(t,n,r,o,u,f,A,T){t.name="",A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.type=A:t.removeAttribute("type"),n!=null?A==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ke(n)):t.value!==""+ke(n)&&(t.value=""+ke(n)):A!=="submit"&&A!=="reset"||t.removeAttribute("value"),n!=null?gn(t,A,ke(n)):r!=null?gn(t,A,ke(r)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+ke(T):t.removeAttribute("name")}function Hn(t,n,r,o,u,f,A,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||r!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){bn(t);return}r=r!=null?""+ke(r):"",n=n!=null?""+ke(n):r,T||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=T?t.checked:!!o,t.defaultChecked=!!o,A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"&&(t.name=A),bn(t)}function gn(t,n,r){n==="number"&&_n(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function rn(t,n,r,o){if(t=t.options,n){n={};for(var u=0;u<r.length;u++)n["$"+r[u]]=!0;for(r=0;r<t.length;r++)u=n.hasOwnProperty("$"+t[r].value),t[r].selected!==u&&(t[r].selected=u),u&&o&&(t[r].defaultSelected=!0)}else{for(r=""+ke(r),n=null,u=0;u<t.length;u++){if(t[u].value===r){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Pr(t,n,r){if(n!=null&&(n=""+ke(n),n!==t.value&&(t.value=n),r==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=r!=null?""+ke(r):""}function Li(t,n,r,o){if(n==null){if(o!=null){if(r!=null)throw Error(s(92));if(O(o)){if(1<o.length)throw Error(s(93));o=o[0]}r=o}r==null&&(r=""),n=r}r=ke(n),t.defaultValue=r,o=t.textContent,o===r&&o!==""&&o!==null&&(t.value=o),bn(t)}function Ir(t,n){if(n){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=n;return}}t.textContent=n}var Rx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Kd(t,n,r){var o=n.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,r):typeof r!="number"||r===0||Rx.has(n)?n==="float"?t.cssFloat=r:t[n]=(""+r).trim():t[n]=r+"px"}function Zd(t,n,r){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,r!=null){for(var o in r)!r.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&r[u]!==o&&Kd(t,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Kd(t,f,n[f])}function qc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ux=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function nl(t){return Ux.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Yi(){}var jc=null;function Kc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var zr=null,Fr=null;function Jd(t){var n=oe(t);if(n&&(t=n.stateNode)){var r=t[Tn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Ln(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),n=r.name,r.type==="radio"&&n!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+yt(""+n)+'"][type="radio"]'),n=0;n<r.length;n++){var o=r[n];if(o!==t&&o.form===t.form){var u=o[Tn]||null;if(!u)throw Error(s(90));Ln(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<r.length;n++)o=r[n],o.form===t.form&&Xi(o)}break e;case"textarea":Pr(t,r.value,r.defaultValue);break e;case"select":n=r.value,n!=null&&rn(t,!!r.multiple,n,!1)}}}var Zc=!1;function $d(t,n,r){if(Zc)return t(n,r);Zc=!0;try{var o=t(n);return o}finally{if(Zc=!1,(zr!==null||Fr!==null)&&(kl(),zr&&(n=zr,t=Fr,Fr=zr=null,Jd(n),t)))for(n=0;n<t.length;n++)Jd(t[n])}}function Qs(t,n){var r=t.stateNode;if(r===null)return null;var o=r[Tn]||null;if(o===null)return null;r=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(s(231,n,typeof r));return r}var Wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jc=!1;if(Wi)try{var qs={};Object.defineProperty(qs,"passive",{get:function(){Jc=!0}}),window.addEventListener("test",qs,qs),window.removeEventListener("test",qs,qs)}catch{Jc=!1}var ya=null,$c=null,il=null;function ep(){if(il)return il;var t,n=$c,r=n.length,o,u="value"in ya?ya.value:ya.textContent,f=u.length;for(t=0;t<r&&n[t]===u[t];t++);var A=r-t;for(o=1;o<=A&&n[r-o]===u[f-o];o++);return il=u.slice(t,1<o?1-o:void 0)}function al(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function rl(){return!0}function tp(){return!1}function Xn(t){function n(r,o,u,f,A){this._reactName=r,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=A,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(r=t[T],this[T]=r?r(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?rl:tp,this.isPropagationStopped=tp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),n}var ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sl=Xn(ar),js=g({},ar,{view:0,detail:0}),Lx=Xn(js),eu,tu,Ks,ol=g({},js,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:iu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ks&&(Ks&&t.type==="mousemove"?(eu=t.screenX-Ks.screenX,tu=t.screenY-Ks.screenY):tu=eu=0,Ks=t),eu)},movementY:function(t){return"movementY"in t?t.movementY:tu}}),np=Xn(ol),Bx=g({},ol,{dataTransfer:0}),Nx=Xn(Bx),Ox=g({},js,{relatedTarget:0}),nu=Xn(Ox),Px=g({},ar,{animationName:0,elapsedTime:0,pseudoElement:0}),Ix=Xn(Px),zx=g({},ar,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Fx=Xn(zx),Hx=g({},ar,{data:0}),ip=Xn(Hx),Gx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=kx[t])?!!n[t]:!1}function iu(){return Xx}var Yx=g({},js,{key:function(t){if(t.key){var n=Gx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=al(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Vx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:iu,charCode:function(t){return t.type==="keypress"?al(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?al(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Wx=Xn(Yx),Qx=g({},ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ap=Xn(Qx),qx=g({},js,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:iu}),jx=Xn(qx),Kx=g({},ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zx=Xn(Kx),Jx=g({},ol,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$x=Xn(Jx),eA=g({},ar,{newState:0,oldState:0}),tA=Xn(eA),nA=[9,13,27,32],au=Wi&&"CompositionEvent"in window,Zs=null;Wi&&"documentMode"in document&&(Zs=document.documentMode);var iA=Wi&&"TextEvent"in window&&!Zs,rp=Wi&&(!au||Zs&&8<Zs&&11>=Zs),sp=" ",op=!1;function lp(t,n){switch(t){case"keyup":return nA.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hr=!1;function aA(t,n){switch(t){case"compositionend":return cp(n);case"keypress":return n.which!==32?null:(op=!0,sp);case"textInput":return t=n.data,t===sp&&op?null:t;default:return null}}function rA(t,n){if(Hr)return t==="compositionend"||!au&&lp(t,n)?(t=ep(),il=$c=ya=null,Hr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return rp&&n.locale!=="ko"?null:n.data;default:return null}}var sA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function up(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!sA[t.type]:n==="textarea"}function fp(t,n,r,o){zr?Fr?Fr.push(o):Fr=[o]:zr=o,n=Kl(n,"onChange"),0<n.length&&(r=new sl("onChange","change",null,r,o),t.push({event:r,listeners:n}))}var Js=null,$s=null;function oA(t){Qg(t,0)}function ll(t){var n=le(t);if(Xi(n))return t}function hp(t,n){if(t==="change")return n}var dp=!1;if(Wi){var ru;if(Wi){var su="oninput"in document;if(!su){var pp=document.createElement("div");pp.setAttribute("oninput","return;"),su=typeof pp.oninput=="function"}ru=su}else ru=!1;dp=ru&&(!document.documentMode||9<document.documentMode)}function mp(){Js&&(Js.detachEvent("onpropertychange",gp),$s=Js=null)}function gp(t){if(t.propertyName==="value"&&ll($s)){var n=[];fp(n,$s,t,Kc(t)),$d(oA,n)}}function lA(t,n,r){t==="focusin"?(mp(),Js=n,$s=r,Js.attachEvent("onpropertychange",gp)):t==="focusout"&&mp()}function cA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ll($s)}function uA(t,n){if(t==="click")return ll(n)}function fA(t,n){if(t==="input"||t==="change")return ll(n)}function hA(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Jn=typeof Object.is=="function"?Object.is:hA;function eo(t,n){if(Jn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var r=Object.keys(t),o=Object.keys(n);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var u=r[o];if(!Xe.call(n,u)||!Jn(t[u],n[u]))return!1}return!0}function vp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function xp(t,n){var r=vp(t);t=0;for(var o;r;){if(r.nodeType===3){if(o=t+r.textContent.length,t<=n&&o>=n)return{node:r,offset:n-t};t=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=vp(r)}}function Ap(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Ap(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function _p(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=_n(t.document);n instanceof t.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)t=n.contentWindow;else break;n=_n(t.document)}return n}function ou(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var dA=Wi&&"documentMode"in document&&11>=document.documentMode,Gr=null,lu=null,to=null,cu=!1;function Sp(t,n,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;cu||Gr==null||Gr!==_n(o)||(o=Gr,"selectionStart"in o&&ou(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),to&&eo(to,o)||(to=o,o=Kl(lu,"onSelect"),0<o.length&&(n=new sl("onSelect","select",null,n,r),t.push({event:n,listeners:o}),n.target=Gr)))}function rr(t,n){var r={};return r[t.toLowerCase()]=n.toLowerCase(),r["Webkit"+t]="webkit"+n,r["Moz"+t]="moz"+n,r}var Vr={animationend:rr("Animation","AnimationEnd"),animationiteration:rr("Animation","AnimationIteration"),animationstart:rr("Animation","AnimationStart"),transitionrun:rr("Transition","TransitionRun"),transitionstart:rr("Transition","TransitionStart"),transitioncancel:rr("Transition","TransitionCancel"),transitionend:rr("Transition","TransitionEnd")},uu={},yp={};Wi&&(yp=document.createElement("div").style,"AnimationEvent"in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),"TransitionEvent"in window||delete Vr.transitionend.transition);function sr(t){if(uu[t])return uu[t];if(!Vr[t])return t;var n=Vr[t],r;for(r in n)if(n.hasOwnProperty(r)&&r in yp)return uu[t]=n[r];return t}var Ep=sr("animationend"),Mp=sr("animationiteration"),Tp=sr("animationstart"),pA=sr("transitionrun"),mA=sr("transitionstart"),gA=sr("transitioncancel"),bp=sr("transitionend"),Cp=new Map,fu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");fu.push("scrollEnd");function Ei(t,n){Cp.set(t,n),Ie(n,[t])}var cl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},di=[],kr=0,hu=0;function ul(){for(var t=kr,n=hu=kr=0;n<t;){var r=di[n];di[n++]=null;var o=di[n];di[n++]=null;var u=di[n];di[n++]=null;var f=di[n];if(di[n++]=null,o!==null&&u!==null){var A=o.pending;A===null?u.next=u:(u.next=A.next,A.next=u),o.pending=u}f!==0&&wp(r,u,f)}}function fl(t,n,r,o){di[kr++]=t,di[kr++]=n,di[kr++]=r,di[kr++]=o,hu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function du(t,n,r,o){return fl(t,n,r,o),hl(t)}function or(t,n){return fl(t,null,null,n),hl(t)}function wp(t,n,r){t.lanes|=r;var o=t.alternate;o!==null&&(o.lanes|=r);for(var u=!1,f=t.return;f!==null;)f.childLanes|=r,o=f.alternate,o!==null&&(o.childLanes|=r),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-ze(r),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=r|536870912),f):null}function hl(t){if(50<Mo)throw Mo=0,Ef=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Xr={};function vA(t,n,r,o){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(t,n,r,o){return new vA(t,n,r,o)}function pu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Qi(t,n){var r=t.alternate;return r===null?(r=$n(t.tag,n,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=n,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&65011712,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,n=t.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function Rp(t,n){t.flags&=65011714;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,n=r.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function dl(t,n,r,o,u,f){var A=0;if(o=t,typeof t=="function")pu(t)&&(A=1);else if(typeof t=="string")A=y_(t,r,ye.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case U:return t=$n(31,r,n,u),t.elementType=U,t.lanes=f,t;case b:return lr(r.children,u,f,n);case y:A=8,u|=24;break;case x:return t=$n(12,r,n,u|2),t.elementType=x,t.lanes=f,t;case X:return t=$n(13,r,n,u),t.elementType=X,t.lanes=f,t;case k:return t=$n(19,r,n,u),t.elementType=k,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case B:A=10;break e;case I:A=9;break e;case R:A=11;break e;case F:A=14;break e;case J:A=16,o=null;break e}A=29,r=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=$n(A,r,n,u),n.elementType=t,n.type=o,n.lanes=f,n}function lr(t,n,r,o){return t=$n(7,t,o,n),t.lanes=r,t}function mu(t,n,r){return t=$n(6,t,null,n),t.lanes=r,t}function Dp(t){var n=$n(18,null,null,0);return n.stateNode=t,n}function gu(t,n,r){return n=$n(4,t.children!==null?t.children:[],t.key,n),n.lanes=r,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Up=new WeakMap;function pi(t,n){if(typeof t=="object"&&t!==null){var r=Up.get(t);return r!==void 0?r:(n={value:t,source:n,stack:Xt(n)},Up.set(t,n),n)}return{value:t,source:n,stack:Xt(n)}}var Yr=[],Wr=0,pl=null,no=0,mi=[],gi=0,Ea=null,Bi=1,Ni="";function qi(t,n){Yr[Wr++]=no,Yr[Wr++]=pl,pl=t,no=n}function Lp(t,n,r){mi[gi++]=Bi,mi[gi++]=Ni,mi[gi++]=Ea,Ea=t;var o=Bi;t=Ni;var u=32-ze(o)-1;o&=~(1<<u),r+=1;var f=32-ze(n)+u;if(30<f){var A=u-u%5;f=(o&(1<<A)-1).toString(32),o>>=A,u-=A,Bi=1<<32-ze(n)+u|r<<u|o,Ni=f+t}else Bi=1<<f|r<<u|o,Ni=t}function vu(t){t.return!==null&&(qi(t,1),Lp(t,1,0))}function xu(t){for(;t===pl;)pl=Yr[--Wr],Yr[Wr]=null,no=Yr[--Wr],Yr[Wr]=null;for(;t===Ea;)Ea=mi[--gi],mi[gi]=null,Ni=mi[--gi],mi[gi]=null,Bi=mi[--gi],mi[gi]=null}function Bp(t,n){mi[gi++]=Bi,mi[gi++]=Ni,mi[gi++]=Ea,Bi=n.id,Ni=n.overflow,Ea=t}var Cn=null,qt=null,bt=!1,Ma=null,vi=!1,Au=Error(s(519));function Ta(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw io(pi(n,t)),Au}function Np(t){var n=t.stateNode,r=t.type,o=t.memoizedProps;switch(n[ln]=t,n[Tn]=o,r){case"dialog":At("cancel",n),At("close",n);break;case"iframe":case"object":case"embed":At("load",n);break;case"video":case"audio":for(r=0;r<bo.length;r++)At(bo[r],n);break;case"source":At("error",n);break;case"img":case"image":case"link":At("error",n),At("load",n);break;case"details":At("toggle",n);break;case"input":At("invalid",n),Hn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":At("invalid",n);break;case"textarea":At("invalid",n),Li(n,o.value,o.defaultValue,o.children)}r=o.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||n.textContent===""+r||o.suppressHydrationWarning===!0||Zg(n.textContent,r)?(o.popover!=null&&(At("beforetoggle",n),At("toggle",n)),o.onScroll!=null&&At("scroll",n),o.onScrollEnd!=null&&At("scrollend",n),o.onClick!=null&&(n.onclick=Yi),n=!0):n=!1,n||Ta(t,!0)}function Op(t){for(Cn=t.return;Cn;)switch(Cn.tag){case 5:case 31:case 13:vi=!1;return;case 27:case 3:vi=!0;return;default:Cn=Cn.return}}function Qr(t){if(t!==Cn)return!1;if(!bt)return Op(t),bt=!0,!1;var n=t.tag,r;if((r=n!==3&&n!==27)&&((r=n===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||zf(t.type,t.memoizedProps)),r=!r),r&&qt&&Ta(t),Op(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));qt=sv(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));qt=sv(t)}else n===27?(n=qt,Fa(t.type)?(t=kf,kf=null,qt=t):qt=n):qt=Cn?Ai(t.stateNode.nextSibling):null;return!0}function cr(){qt=Cn=null,bt=!1}function _u(){var t=Ma;return t!==null&&(qn===null?qn=t:qn.push.apply(qn,t),Ma=null),t}function io(t){Ma===null?Ma=[t]:Ma.push(t)}var Su=L(null),ur=null,ji=null;function ba(t,n,r){pe(Su,n._currentValue),n._currentValue=r}function Ki(t){t._currentValue=Su.current,te(Su)}function yu(t,n,r){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===r)break;t=t.return}}function Eu(t,n,r,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var A=u.child;f=f.firstContext;e:for(;f!==null;){var T=f;f=u;for(var G=0;G<n.length;G++)if(T.context===n[G]){f.lanes|=r,T=f.alternate,T!==null&&(T.lanes|=r),yu(f.return,r,t),o||(A=null);break e}f=T.next}}else if(u.tag===18){if(A=u.return,A===null)throw Error(s(341));A.lanes|=r,f=A.alternate,f!==null&&(f.lanes|=r),yu(A,r,t),A=null}else A=u.child;if(A!==null)A.return=u;else for(A=u;A!==null;){if(A===t){A=null;break}if(u=A.sibling,u!==null){u.return=A.return,A=u;break}A=A.return}u=A}}function qr(t,n,r,o){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var A=u.alternate;if(A===null)throw Error(s(387));if(A=A.memoizedProps,A!==null){var T=u.type;Jn(u.pendingProps.value,A.value)||(t!==null?t.push(T):t=[T])}}else if(u===he.current){if(A=u.alternate,A===null)throw Error(s(387));A.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Uo):t=[Uo])}u=u.return}t!==null&&Eu(n,t,r,o),n.flags|=262144}function ml(t){for(t=t.firstContext;t!==null;){if(!Jn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function fr(t){ur=t,ji=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function wn(t){return Pp(ur,t)}function gl(t,n){return ur===null&&fr(t),Pp(t,n)}function Pp(t,n){var r=n._currentValue;if(n={context:n,memoizedValue:r,next:null},ji===null){if(t===null)throw Error(s(308));ji=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ji=ji.next=n;return r}var xA=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(r,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(r){return r()})}},AA=a.unstable_scheduleCallback,_A=a.unstable_NormalPriority,cn={$$typeof:B,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mu(){return{controller:new xA,data:new Map,refCount:0}}function ao(t){t.refCount--,t.refCount===0&&AA(_A,function(){t.controller.abort()})}var ro=null,Tu=0,jr=0,Kr=null;function SA(t,n){if(ro===null){var r=ro=[];Tu=0,jr=Rf(),Kr={status:"pending",value:void 0,then:function(o){r.push(o)}}}return Tu++,n.then(Ip,Ip),n}function Ip(){if(--Tu===0&&ro!==null){Kr!==null&&(Kr.status="fulfilled");var t=ro;ro=null,jr=0,Kr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function yA(t,n){var r=[],o={status:"pending",value:null,reason:null,then:function(u){r.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<r.length;u++)(0,r[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<r.length;u++)(0,r[u])(void 0)}),o}var zp=w.S;w.S=function(t,n){Sg=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&SA(t,n),zp!==null&&zp(t,n)};var hr=L(null);function bu(){var t=hr.current;return t!==null?t:Wt.pooledCache}function vl(t,n){n===null?pe(hr,hr.current):pe(hr,n.pool)}function Fp(){var t=bu();return t===null?null:{parent:cn._currentValue,pool:t}}var Zr=Error(s(460)),Cu=Error(s(474)),xl=Error(s(542)),Al={then:function(){}};function Hp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Gp(t,n,r){switch(r=t[r],r===void 0?t.push(n):r!==n&&(n.then(Yi,Yi),n=r),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,kp(t),t;default:if(typeof n.status=="string")n.then(Yi,Yi);else{if(t=Wt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,kp(t),t}throw pr=n,Zr}}function dr(t){try{var n=t._init;return n(t._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(pr=r,Zr):r}}var pr=null;function Vp(){if(pr===null)throw Error(s(459));var t=pr;return pr=null,t}function kp(t){if(t===Zr||t===xl)throw Error(s(483))}var Jr=null,so=0;function _l(t){var n=so;return so+=1,Jr===null&&(Jr=[]),Gp(Jr,t,n)}function oo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Sl(t,n){throw n.$$typeof===_?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Xp(t){function n(Z,W){if(t){var ie=Z.deletions;ie===null?(Z.deletions=[W],Z.flags|=16):ie.push(W)}}function r(Z,W){if(!t)return null;for(;W!==null;)n(Z,W),W=W.sibling;return null}function o(Z){for(var W=new Map;Z!==null;)Z.key!==null?W.set(Z.key,Z):W.set(Z.index,Z),Z=Z.sibling;return W}function u(Z,W){return Z=Qi(Z,W),Z.index=0,Z.sibling=null,Z}function f(Z,W,ie){return Z.index=ie,t?(ie=Z.alternate,ie!==null?(ie=ie.index,ie<W?(Z.flags|=67108866,W):ie):(Z.flags|=67108866,W)):(Z.flags|=1048576,W)}function A(Z){return t&&Z.alternate===null&&(Z.flags|=67108866),Z}function T(Z,W,ie,xe){return W===null||W.tag!==6?(W=mu(ie,Z.mode,xe),W.return=Z,W):(W=u(W,ie),W.return=Z,W)}function G(Z,W,ie,xe){var tt=ie.type;return tt===b?ge(Z,W,ie.props.children,xe,ie.key):W!==null&&(W.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===J&&dr(tt)===W.type)?(W=u(W,ie.props),oo(W,ie),W.return=Z,W):(W=dl(ie.type,ie.key,ie.props,null,Z.mode,xe),oo(W,ie),W.return=Z,W)}function ae(Z,W,ie,xe){return W===null||W.tag!==4||W.stateNode.containerInfo!==ie.containerInfo||W.stateNode.implementation!==ie.implementation?(W=gu(ie,Z.mode,xe),W.return=Z,W):(W=u(W,ie.children||[]),W.return=Z,W)}function ge(Z,W,ie,xe,tt){return W===null||W.tag!==7?(W=lr(ie,Z.mode,xe,tt),W.return=Z,W):(W=u(W,ie),W.return=Z,W)}function Ae(Z,W,ie){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=mu(""+W,Z.mode,ie),W.return=Z,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case S:return ie=dl(W.type,W.key,W.props,null,Z.mode,ie),oo(ie,W),ie.return=Z,ie;case M:return W=gu(W,Z.mode,ie),W.return=Z,W;case J:return W=dr(W),Ae(Z,W,ie)}if(O(W)||K(W))return W=lr(W,Z.mode,ie,null),W.return=Z,W;if(typeof W.then=="function")return Ae(Z,_l(W),ie);if(W.$$typeof===B)return Ae(Z,gl(Z,W),ie);Sl(Z,W)}return null}function se(Z,W,ie,xe){var tt=W!==null?W.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint")return tt!==null?null:T(Z,W,""+ie,xe);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case S:return ie.key===tt?G(Z,W,ie,xe):null;case M:return ie.key===tt?ae(Z,W,ie,xe):null;case J:return ie=dr(ie),se(Z,W,ie,xe)}if(O(ie)||K(ie))return tt!==null?null:ge(Z,W,ie,xe,null);if(typeof ie.then=="function")return se(Z,W,_l(ie),xe);if(ie.$$typeof===B)return se(Z,W,gl(Z,ie),xe);Sl(Z,ie)}return null}function fe(Z,W,ie,xe,tt){if(typeof xe=="string"&&xe!==""||typeof xe=="number"||typeof xe=="bigint")return Z=Z.get(ie)||null,T(W,Z,""+xe,tt);if(typeof xe=="object"&&xe!==null){switch(xe.$$typeof){case S:return Z=Z.get(xe.key===null?ie:xe.key)||null,G(W,Z,xe,tt);case M:return Z=Z.get(xe.key===null?ie:xe.key)||null,ae(W,Z,xe,tt);case J:return xe=dr(xe),fe(Z,W,ie,xe,tt)}if(O(xe)||K(xe))return Z=Z.get(ie)||null,ge(W,Z,xe,tt,null);if(typeof xe.then=="function")return fe(Z,W,ie,_l(xe),tt);if(xe.$$typeof===B)return fe(Z,W,ie,gl(W,xe),tt);Sl(W,xe)}return null}function Ge(Z,W,ie,xe){for(var tt=null,Rt=null,Qe=W,ht=W=0,Mt=null;Qe!==null&&ht<ie.length;ht++){Qe.index>ht?(Mt=Qe,Qe=null):Mt=Qe.sibling;var Dt=se(Z,Qe,ie[ht],xe);if(Dt===null){Qe===null&&(Qe=Mt);break}t&&Qe&&Dt.alternate===null&&n(Z,Qe),W=f(Dt,W,ht),Rt===null?tt=Dt:Rt.sibling=Dt,Rt=Dt,Qe=Mt}if(ht===ie.length)return r(Z,Qe),bt&&qi(Z,ht),tt;if(Qe===null){for(;ht<ie.length;ht++)Qe=Ae(Z,ie[ht],xe),Qe!==null&&(W=f(Qe,W,ht),Rt===null?tt=Qe:Rt.sibling=Qe,Rt=Qe);return bt&&qi(Z,ht),tt}for(Qe=o(Qe);ht<ie.length;ht++)Mt=fe(Qe,Z,ht,ie[ht],xe),Mt!==null&&(t&&Mt.alternate!==null&&Qe.delete(Mt.key===null?ht:Mt.key),W=f(Mt,W,ht),Rt===null?tt=Mt:Rt.sibling=Mt,Rt=Mt);return t&&Qe.forEach(function(Xa){return n(Z,Xa)}),bt&&qi(Z,ht),tt}function it(Z,W,ie,xe){if(ie==null)throw Error(s(151));for(var tt=null,Rt=null,Qe=W,ht=W=0,Mt=null,Dt=ie.next();Qe!==null&&!Dt.done;ht++,Dt=ie.next()){Qe.index>ht?(Mt=Qe,Qe=null):Mt=Qe.sibling;var Xa=se(Z,Qe,Dt.value,xe);if(Xa===null){Qe===null&&(Qe=Mt);break}t&&Qe&&Xa.alternate===null&&n(Z,Qe),W=f(Xa,W,ht),Rt===null?tt=Xa:Rt.sibling=Xa,Rt=Xa,Qe=Mt}if(Dt.done)return r(Z,Qe),bt&&qi(Z,ht),tt;if(Qe===null){for(;!Dt.done;ht++,Dt=ie.next())Dt=Ae(Z,Dt.value,xe),Dt!==null&&(W=f(Dt,W,ht),Rt===null?tt=Dt:Rt.sibling=Dt,Rt=Dt);return bt&&qi(Z,ht),tt}for(Qe=o(Qe);!Dt.done;ht++,Dt=ie.next())Dt=fe(Qe,Z,ht,Dt.value,xe),Dt!==null&&(t&&Dt.alternate!==null&&Qe.delete(Dt.key===null?ht:Dt.key),W=f(Dt,W,ht),Rt===null?tt=Dt:Rt.sibling=Dt,Rt=Dt);return t&&Qe.forEach(function(B_){return n(Z,B_)}),bt&&qi(Z,ht),tt}function Gt(Z,W,ie,xe){if(typeof ie=="object"&&ie!==null&&ie.type===b&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case S:e:{for(var tt=ie.key;W!==null;){if(W.key===tt){if(tt=ie.type,tt===b){if(W.tag===7){r(Z,W.sibling),xe=u(W,ie.props.children),xe.return=Z,Z=xe;break e}}else if(W.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===J&&dr(tt)===W.type){r(Z,W.sibling),xe=u(W,ie.props),oo(xe,ie),xe.return=Z,Z=xe;break e}r(Z,W);break}else n(Z,W);W=W.sibling}ie.type===b?(xe=lr(ie.props.children,Z.mode,xe,ie.key),xe.return=Z,Z=xe):(xe=dl(ie.type,ie.key,ie.props,null,Z.mode,xe),oo(xe,ie),xe.return=Z,Z=xe)}return A(Z);case M:e:{for(tt=ie.key;W!==null;){if(W.key===tt)if(W.tag===4&&W.stateNode.containerInfo===ie.containerInfo&&W.stateNode.implementation===ie.implementation){r(Z,W.sibling),xe=u(W,ie.children||[]),xe.return=Z,Z=xe;break e}else{r(Z,W);break}else n(Z,W);W=W.sibling}xe=gu(ie,Z.mode,xe),xe.return=Z,Z=xe}return A(Z);case J:return ie=dr(ie),Gt(Z,W,ie,xe)}if(O(ie))return Ge(Z,W,ie,xe);if(K(ie)){if(tt=K(ie),typeof tt!="function")throw Error(s(150));return ie=tt.call(ie),it(Z,W,ie,xe)}if(typeof ie.then=="function")return Gt(Z,W,_l(ie),xe);if(ie.$$typeof===B)return Gt(Z,W,gl(Z,ie),xe);Sl(Z,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint"?(ie=""+ie,W!==null&&W.tag===6?(r(Z,W.sibling),xe=u(W,ie),xe.return=Z,Z=xe):(r(Z,W),xe=mu(ie,Z.mode,xe),xe.return=Z,Z=xe),A(Z)):r(Z,W)}return function(Z,W,ie,xe){try{so=0;var tt=Gt(Z,W,ie,xe);return Jr=null,tt}catch(Qe){if(Qe===Zr||Qe===xl)throw Qe;var Rt=$n(29,Qe,null,Z.mode);return Rt.lanes=xe,Rt.return=Z,Rt}finally{}}}var mr=Xp(!0),Yp=Xp(!1),Ca=!1;function wu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ru(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function wa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ra(t,n,r){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Bt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=hl(t),wp(t,null,r),n}return fl(t,o,n,r),hl(t)}function lo(t,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,r|=o,n.lanes=r,Ui(t,r)}}function Du(t,n){var r=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var u=null,f=null;if(r=r.firstBaseUpdate,r!==null){do{var A={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};f===null?u=f=A:f=f.next=A,r=r.next}while(r!==null);f===null?u=f=n:f=f.next=n}else u=f=n;r={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=n:t.next=n,r.lastBaseUpdate=n}var Uu=!1;function co(){if(Uu){var t=Kr;if(t!==null)throw t}}function uo(t,n,r,o){Uu=!1;var u=t.updateQueue;Ca=!1;var f=u.firstBaseUpdate,A=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var G=T,ae=G.next;G.next=null,A===null?f=ae:A.next=ae,A=G;var ge=t.alternate;ge!==null&&(ge=ge.updateQueue,T=ge.lastBaseUpdate,T!==A&&(T===null?ge.firstBaseUpdate=ae:T.next=ae,ge.lastBaseUpdate=G))}if(f!==null){var Ae=u.baseState;A=0,ge=ae=G=null,T=f;do{var se=T.lane&-536870913,fe=se!==T.lane;if(fe?(Et&se)===se:(o&se)===se){se!==0&&se===jr&&(Uu=!0),ge!==null&&(ge=ge.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var Ge=t,it=T;se=n;var Gt=r;switch(it.tag){case 1:if(Ge=it.payload,typeof Ge=="function"){Ae=Ge.call(Gt,Ae,se);break e}Ae=Ge;break e;case 3:Ge.flags=Ge.flags&-65537|128;case 0:if(Ge=it.payload,se=typeof Ge=="function"?Ge.call(Gt,Ae,se):Ge,se==null)break e;Ae=g({},Ae,se);break e;case 2:Ca=!0}}se=T.callback,se!==null&&(t.flags|=64,fe&&(t.flags|=8192),fe=u.callbacks,fe===null?u.callbacks=[se]:fe.push(se))}else fe={lane:se,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ge===null?(ae=ge=fe,G=Ae):ge=ge.next=fe,A|=se;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;fe=T,T=fe.next,fe.next=null,u.lastBaseUpdate=fe,u.shared.pending=null}}while(!0);ge===null&&(G=Ae),u.baseState=G,u.firstBaseUpdate=ae,u.lastBaseUpdate=ge,f===null&&(u.shared.lanes=0),Na|=A,t.lanes=A,t.memoizedState=Ae}}function Wp(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Qp(t,n){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)Wp(r[t],n)}var $r=L(null),yl=L(0);function qp(t,n){t=ra,pe(yl,t),pe($r,n),ra=t|n.baseLanes}function Lu(){pe(yl,ra),pe($r,$r.current)}function Bu(){ra=yl.current,te($r),te(yl)}var ei=L(null),xi=null;function Da(t){var n=t.alternate;pe(sn,sn.current&1),pe(ei,t),xi===null&&(n===null||$r.current!==null||n.memoizedState!==null)&&(xi=t)}function Nu(t){pe(sn,sn.current),pe(ei,t),xi===null&&(xi=t)}function jp(t){t.tag===22?(pe(sn,sn.current),pe(ei,t),xi===null&&(xi=t)):Ua()}function Ua(){pe(sn,sn.current),pe(ei,ei.current)}function ti(t){te(ei),xi===t&&(xi=null),te(sn)}var sn=L(0);function El(t){for(var n=t;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||Gf(r)||Vf(r)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Zi=0,ft=null,Ft=null,un=null,Ml=!1,es=!1,gr=!1,Tl=0,fo=0,ts=null,EA=0;function nn(){throw Error(s(321))}function Ou(t,n){if(n===null)return!1;for(var r=0;r<n.length&&r<t.length;r++)if(!Jn(t[r],n[r]))return!1;return!0}function Pu(t,n,r,o,u,f){return Zi=f,ft=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,w.H=t===null||t.memoizedState===null?Lm:Zu,gr=!1,f=r(o,u),gr=!1,es&&(f=Zp(n,r,o,u)),Kp(t),f}function Kp(t){w.H=mo;var n=Ft!==null&&Ft.next!==null;if(Zi=0,un=Ft=ft=null,Ml=!1,fo=0,ts=null,n)throw Error(s(300));t===null||fn||(t=t.dependencies,t!==null&&ml(t)&&(fn=!0))}function Zp(t,n,r,o){ft=t;var u=0;do{if(es&&(ts=null),fo=0,es=!1,25<=u)throw Error(s(301));if(u+=1,un=Ft=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}w.H=Bm,f=n(r,o)}while(es);return f}function MA(){var t=w.H,n=t.useState()[0];return n=typeof n.then=="function"?ho(n):n,t=t.useState()[0],(Ft!==null?Ft.memoizedState:null)!==t&&(ft.flags|=1024),n}function Iu(){var t=Tl!==0;return Tl=0,t}function zu(t,n,r){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~r}function Fu(t){if(Ml){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Ml=!1}Zi=0,un=Ft=ft=null,es=!1,fo=Tl=0,ts=null}function Gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?ft.memoizedState=un=t:un=un.next=t,un}function on(){if(Ft===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=Ft.next;var n=un===null?ft.memoizedState:un.next;if(n!==null)un=n,Ft=t;else{if(t===null)throw ft.alternate===null?Error(s(467)):Error(s(310));Ft=t,t={memoizedState:Ft.memoizedState,baseState:Ft.baseState,baseQueue:Ft.baseQueue,queue:Ft.queue,next:null},un===null?ft.memoizedState=un=t:un=un.next=t}return un}function bl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ho(t){var n=fo;return fo+=1,ts===null&&(ts=[]),t=Gp(ts,t,n),n=ft,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,w.H=n===null||n.memoizedState===null?Lm:Zu),t}function Cl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ho(t);if(t.$$typeof===B)return wn(t)}throw Error(s(438,String(t)))}function Hu(t){var n=null,r=ft.updateQueue;if(r!==null&&(n=r.memoCache),n==null){var o=ft.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),r===null&&(r=bl(),ft.updateQueue=r),r.memoCache=n,r=n.data[n.index],r===void 0)for(r=n.data[n.index]=Array(t),o=0;o<t;o++)r[o]=D;return n.index++,r}function Ji(t,n){return typeof n=="function"?n(t):n}function wl(t){var n=on();return Gu(n,Ft,t)}function Gu(t,n,r){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=r;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var A=u.next;u.next=f.next,f.next=A}n.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var T=A=null,G=null,ae=n,ge=!1;do{var Ae=ae.lane&-536870913;if(Ae!==ae.lane?(Et&Ae)===Ae:(Zi&Ae)===Ae){var se=ae.revertLane;if(se===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),Ae===jr&&(ge=!0);else if((Zi&se)===se){ae=ae.next,se===jr&&(ge=!0);continue}else Ae={lane:0,revertLane:ae.revertLane,gesture:null,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null},G===null?(T=G=Ae,A=f):G=G.next=Ae,ft.lanes|=se,Na|=se;Ae=ae.action,gr&&r(f,Ae),f=ae.hasEagerState?ae.eagerState:r(f,Ae)}else se={lane:Ae,revertLane:ae.revertLane,gesture:ae.gesture,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null},G===null?(T=G=se,A=f):G=G.next=se,ft.lanes|=Ae,Na|=Ae;ae=ae.next}while(ae!==null&&ae!==n);if(G===null?A=f:G.next=T,!Jn(f,t.memoizedState)&&(fn=!0,ge&&(r=Kr,r!==null)))throw r;t.memoizedState=f,t.baseState=A,t.baseQueue=G,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Vu(t){var n=on(),r=n.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=t;var o=r.dispatch,u=r.pending,f=n.memoizedState;if(u!==null){r.pending=null;var A=u=u.next;do f=t(f,A.action),A=A.next;while(A!==u);Jn(f,n.memoizedState)||(fn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),r.lastRenderedState=f}return[f,o]}function Jp(t,n,r){var o=ft,u=on(),f=bt;if(f){if(r===void 0)throw Error(s(407));r=r()}else r=n();var A=!Jn((Ft||u).memoizedState,r);if(A&&(u.memoizedState=r,fn=!0),u=u.queue,Yu(tm.bind(null,o,u,t),[t]),u.getSnapshot!==n||A||un!==null&&un.memoizedState.tag&1){if(o.flags|=2048,ns(9,{destroy:void 0},em.bind(null,o,u,r,n),null),Wt===null)throw Error(s(349));f||(Zi&127)!==0||$p(o,n,r)}return r}function $p(t,n,r){t.flags|=16384,t={getSnapshot:n,value:r},n=ft.updateQueue,n===null?(n=bl(),ft.updateQueue=n,n.stores=[t]):(r=n.stores,r===null?n.stores=[t]:r.push(t))}function em(t,n,r,o){n.value=r,n.getSnapshot=o,nm(n)&&im(t)}function tm(t,n,r){return r(function(){nm(n)&&im(t)})}function nm(t){var n=t.getSnapshot;t=t.value;try{var r=n();return!Jn(t,r)}catch{return!0}}function im(t){var n=or(t,2);n!==null&&jn(n,t,2)}function ku(t){var n=Gn();if(typeof t=="function"){var r=t;if(t=r(),gr){Je(!0);try{r()}finally{Je(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:t},n}function am(t,n,r,o){return t.baseState=r,Gu(t,Ft,typeof o=="function"?o:Ji)}function TA(t,n,r,o,u){if(Ul(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(A){f.listeners.push(A)}};w.T!==null?r(!0):f.isTransition=!1,o(f),r=n.pending,r===null?(f.next=n.pending=f,rm(n,f)):(f.next=r.next,n.pending=r.next=f)}}function rm(t,n){var r=n.action,o=n.payload,u=t.state;if(n.isTransition){var f=w.T,A={};w.T=A;try{var T=r(u,o),G=w.S;G!==null&&G(A,T),sm(t,n,T)}catch(ae){Xu(t,n,ae)}finally{f!==null&&A.types!==null&&(f.types=A.types),w.T=f}}else try{f=r(u,o),sm(t,n,f)}catch(ae){Xu(t,n,ae)}}function sm(t,n,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(o){om(t,n,o)},function(o){return Xu(t,n,o)}):om(t,n,r)}function om(t,n,r){n.status="fulfilled",n.value=r,lm(n),t.state=r,n=t.pending,n!==null&&(r=n.next,r===n?t.pending=null:(r=r.next,n.next=r,rm(t,r)))}function Xu(t,n,r){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=r,lm(n),n=n.next;while(n!==o)}t.action=null}function lm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function cm(t,n){return n}function um(t,n){if(bt){var r=Wt.formState;if(r!==null){e:{var o=ft;if(bt){if(qt){t:{for(var u=qt,f=vi;u.nodeType!==8;){if(!f){u=null;break t}if(u=Ai(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){qt=Ai(u.nextSibling),o=u.data==="F!";break e}}Ta(o)}o=!1}o&&(n=r[0])}}return r=Gn(),r.memoizedState=r.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cm,lastRenderedState:n},r.queue=o,r=Rm.bind(null,ft,o),o.dispatch=r,o=ku(!1),f=Ku.bind(null,ft,!1,o.queue),o=Gn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,r=TA.bind(null,ft,u,f,r),u.dispatch=r,o.memoizedState=t,[n,r,!1]}function fm(t){var n=on();return hm(n,Ft,t)}function hm(t,n,r){if(n=Gu(t,n,cm)[0],t=wl(Ji)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=ho(n)}catch(A){throw A===Zr?xl:A}else o=n;n=on();var u=n.queue,f=u.dispatch;return r!==n.memoizedState&&(ft.flags|=2048,ns(9,{destroy:void 0},bA.bind(null,u,r),null)),[o,f,t]}function bA(t,n){t.action=n}function dm(t){var n=on(),r=Ft;if(r!==null)return hm(n,r,t);on(),n=n.memoizedState,r=on();var o=r.queue.dispatch;return r.memoizedState=t,[n,o,!1]}function ns(t,n,r,o){return t={tag:t,create:r,deps:o,inst:n,next:null},n=ft.updateQueue,n===null&&(n=bl(),ft.updateQueue=n),r=n.lastEffect,r===null?n.lastEffect=t.next=t:(o=r.next,r.next=t,t.next=o,n.lastEffect=t),t}function pm(){return on().memoizedState}function Rl(t,n,r,o){var u=Gn();ft.flags|=t,u.memoizedState=ns(1|n,{destroy:void 0},r,o===void 0?null:o)}function Dl(t,n,r,o){var u=on();o=o===void 0?null:o;var f=u.memoizedState.inst;Ft!==null&&o!==null&&Ou(o,Ft.memoizedState.deps)?u.memoizedState=ns(n,f,r,o):(ft.flags|=t,u.memoizedState=ns(1|n,f,r,o))}function mm(t,n){Rl(8390656,8,t,n)}function Yu(t,n){Dl(2048,8,t,n)}function CA(t){ft.flags|=4;var n=ft.updateQueue;if(n===null)n=bl(),ft.updateQueue=n,n.events=[t];else{var r=n.events;r===null?n.events=[t]:r.push(t)}}function gm(t){var n=on().memoizedState;return CA({ref:n,nextImpl:t}),function(){if((Bt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function vm(t,n){return Dl(4,2,t,n)}function xm(t,n){return Dl(4,4,t,n)}function Am(t,n){if(typeof n=="function"){t=t();var r=n(t);return function(){typeof r=="function"?r():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function _m(t,n,r){r=r!=null?r.concat([t]):null,Dl(4,4,Am.bind(null,n,t),r)}function Wu(){}function Sm(t,n){var r=on();n=n===void 0?null:n;var o=r.memoizedState;return n!==null&&Ou(n,o[1])?o[0]:(r.memoizedState=[t,n],t)}function ym(t,n){var r=on();n=n===void 0?null:n;var o=r.memoizedState;if(n!==null&&Ou(n,o[1]))return o[0];if(o=t(),gr){Je(!0);try{t()}finally{Je(!1)}}return r.memoizedState=[o,n],o}function Qu(t,n,r){return r===void 0||(Zi&1073741824)!==0&&(Et&261930)===0?t.memoizedState=n:(t.memoizedState=r,t=Eg(),ft.lanes|=t,Na|=t,r)}function Em(t,n,r,o){return Jn(r,n)?r:$r.current!==null?(t=Qu(t,r,o),Jn(t,n)||(fn=!0),t):(Zi&42)===0||(Zi&1073741824)!==0&&(Et&261930)===0?(fn=!0,t.memoizedState=r):(t=Eg(),ft.lanes|=t,Na|=t,n)}function Mm(t,n,r,o,u){var f=z.p;z.p=f!==0&&8>f?f:8;var A=w.T,T={};w.T=T,Ku(t,!1,n,r);try{var G=u(),ae=w.S;if(ae!==null&&ae(T,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var ge=yA(G,o);po(t,n,ge,ai(t))}else po(t,n,o,ai(t))}catch(Ae){po(t,n,{then:function(){},status:"rejected",reason:Ae},ai())}finally{z.p=f,A!==null&&T.types!==null&&(A.types=T.types),w.T=A}}function wA(){}function qu(t,n,r,o){if(t.tag!==5)throw Error(s(476));var u=Tm(t).queue;Mm(t,u,n,P,r===null?wA:function(){return bm(t),r(o)})}function Tm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:P,baseState:P,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:P},next:null};var r={};return n.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:r},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function bm(t){var n=Tm(t);n.next===null&&(n=t.alternate.memoizedState),po(t,n.next.queue,{},ai())}function ju(){return wn(Uo)}function Cm(){return on().memoizedState}function wm(){return on().memoizedState}function RA(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var r=ai();t=wa(r);var o=Ra(n,t,r);o!==null&&(jn(o,n,r),lo(o,n,r)),n={cache:Mu()},t.payload=n;return}n=n.return}}function DA(t,n,r){var o=ai();r={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ul(t)?Dm(n,r):(r=du(t,n,r,o),r!==null&&(jn(r,t,o),Um(r,n,o)))}function Rm(t,n,r){var o=ai();po(t,n,r,o)}function po(t,n,r,o){var u={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(Ul(t))Dm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var A=n.lastRenderedState,T=f(A,r);if(u.hasEagerState=!0,u.eagerState=T,Jn(T,A))return fl(t,n,u,0),Wt===null&&ul(),!1}catch{}finally{}if(r=du(t,n,u,o),r!==null)return jn(r,t,o),Um(r,n,o),!0}return!1}function Ku(t,n,r,o){if(o={lane:2,revertLane:Rf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Ul(t)){if(n)throw Error(s(479))}else n=du(t,r,o,2),n!==null&&jn(n,t,2)}function Ul(t){var n=t.alternate;return t===ft||n!==null&&n===ft}function Dm(t,n){es=Ml=!0;var r=t.pending;r===null?n.next=n:(n.next=r.next,r.next=n),t.pending=n}function Um(t,n,r){if((r&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,r|=o,n.lanes=r,Ui(t,r)}}var mo={readContext:wn,use:Cl,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn};mo.useEffectEvent=nn;var Lm={readContext:wn,use:Cl,useCallback:function(t,n){return Gn().memoizedState=[t,n===void 0?null:n],t},useContext:wn,useEffect:mm,useImperativeHandle:function(t,n,r){r=r!=null?r.concat([t]):null,Rl(4194308,4,Am.bind(null,n,t),r)},useLayoutEffect:function(t,n){return Rl(4194308,4,t,n)},useInsertionEffect:function(t,n){Rl(4,2,t,n)},useMemo:function(t,n){var r=Gn();n=n===void 0?null:n;var o=t();if(gr){Je(!0);try{t()}finally{Je(!1)}}return r.memoizedState=[o,n],o},useReducer:function(t,n,r){var o=Gn();if(r!==void 0){var u=r(n);if(gr){Je(!0);try{r(n)}finally{Je(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=DA.bind(null,ft,t),[o.memoizedState,t]},useRef:function(t){var n=Gn();return t={current:t},n.memoizedState=t},useState:function(t){t=ku(t);var n=t.queue,r=Rm.bind(null,ft,n);return n.dispatch=r,[t.memoizedState,r]},useDebugValue:Wu,useDeferredValue:function(t,n){var r=Gn();return Qu(r,t,n)},useTransition:function(){var t=ku(!1);return t=Mm.bind(null,ft,t.queue,!0,!1),Gn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,r){var o=ft,u=Gn();if(bt){if(r===void 0)throw Error(s(407));r=r()}else{if(r=n(),Wt===null)throw Error(s(349));(Et&127)!==0||$p(o,n,r)}u.memoizedState=r;var f={value:r,getSnapshot:n};return u.queue=f,mm(tm.bind(null,o,f,t),[t]),o.flags|=2048,ns(9,{destroy:void 0},em.bind(null,o,f,r,n),null),r},useId:function(){var t=Gn(),n=Wt.identifierPrefix;if(bt){var r=Ni,o=Bi;r=(o&~(1<<32-ze(o)-1)).toString(32)+r,n="_"+n+"R_"+r,r=Tl++,0<r&&(n+="H"+r.toString(32)),n+="_"}else r=EA++,n="_"+n+"r_"+r.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:ju,useFormState:um,useActionState:um,useOptimistic:function(t){var n=Gn();n.memoizedState=n.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=r,n=Ku.bind(null,ft,!0,r),r.dispatch=n,[t,n]},useMemoCache:Hu,useCacheRefresh:function(){return Gn().memoizedState=RA.bind(null,ft)},useEffectEvent:function(t){var n=Gn(),r={impl:t};return n.memoizedState=r,function(){if((Bt&2)!==0)throw Error(s(440));return r.impl.apply(void 0,arguments)}}},Zu={readContext:wn,use:Cl,useCallback:Sm,useContext:wn,useEffect:Yu,useImperativeHandle:_m,useInsertionEffect:vm,useLayoutEffect:xm,useMemo:ym,useReducer:wl,useRef:pm,useState:function(){return wl(Ji)},useDebugValue:Wu,useDeferredValue:function(t,n){var r=on();return Em(r,Ft.memoizedState,t,n)},useTransition:function(){var t=wl(Ji)[0],n=on().memoizedState;return[typeof t=="boolean"?t:ho(t),n]},useSyncExternalStore:Jp,useId:Cm,useHostTransitionStatus:ju,useFormState:fm,useActionState:fm,useOptimistic:function(t,n){var r=on();return am(r,Ft,t,n)},useMemoCache:Hu,useCacheRefresh:wm};Zu.useEffectEvent=gm;var Bm={readContext:wn,use:Cl,useCallback:Sm,useContext:wn,useEffect:Yu,useImperativeHandle:_m,useInsertionEffect:vm,useLayoutEffect:xm,useMemo:ym,useReducer:Vu,useRef:pm,useState:function(){return Vu(Ji)},useDebugValue:Wu,useDeferredValue:function(t,n){var r=on();return Ft===null?Qu(r,t,n):Em(r,Ft.memoizedState,t,n)},useTransition:function(){var t=Vu(Ji)[0],n=on().memoizedState;return[typeof t=="boolean"?t:ho(t),n]},useSyncExternalStore:Jp,useId:Cm,useHostTransitionStatus:ju,useFormState:dm,useActionState:dm,useOptimistic:function(t,n){var r=on();return Ft!==null?am(r,Ft,t,n):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:Hu,useCacheRefresh:wm};Bm.useEffectEvent=gm;function Ju(t,n,r,o){n=t.memoizedState,r=r(o,n),r=r==null?n:g({},n,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var $u={enqueueSetState:function(t,n,r){t=t._reactInternals;var o=ai(),u=wa(o);u.payload=n,r!=null&&(u.callback=r),n=Ra(t,u,o),n!==null&&(jn(n,t,o),lo(n,t,o))},enqueueReplaceState:function(t,n,r){t=t._reactInternals;var o=ai(),u=wa(o);u.tag=1,u.payload=n,r!=null&&(u.callback=r),n=Ra(t,u,o),n!==null&&(jn(n,t,o),lo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var r=ai(),o=wa(r);o.tag=2,n!=null&&(o.callback=n),n=Ra(t,o,r),n!==null&&(jn(n,t,r),lo(n,t,r))}};function Nm(t,n,r,o,u,f,A){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,A):n.prototype&&n.prototype.isPureReactComponent?!eo(r,o)||!eo(u,f):!0}function Om(t,n,r,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,o),n.state!==t&&$u.enqueueReplaceState(n,n.state,null)}function vr(t,n){var r=n;if("ref"in n){r={};for(var o in n)o!=="ref"&&(r[o]=n[o])}if(t=t.defaultProps){r===n&&(r=g({},r));for(var u in t)r[u]===void 0&&(r[u]=t[u])}return r}function Pm(t){cl(t)}function Im(t){console.error(t)}function zm(t){cl(t)}function Ll(t,n){try{var r=t.onUncaughtError;r(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Fm(t,n,r){try{var o=t.onCaughtError;o(r.value,{componentStack:r.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function ef(t,n,r){return r=wa(r),r.tag=3,r.payload={element:null},r.callback=function(){Ll(t,n)},r}function Hm(t){return t=wa(t),t.tag=3,t}function Gm(t,n,r,o){var u=r.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){Fm(n,r,o)}}var A=r.stateNode;A!==null&&typeof A.componentDidCatch=="function"&&(t.callback=function(){Fm(n,r,o),typeof u!="function"&&(Oa===null?Oa=new Set([this]):Oa.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function UA(t,n,r,o,u){if(r.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=r.alternate,n!==null&&qr(n,r,u,!0),r=ei.current,r!==null){switch(r.tag){case 31:case 13:return xi===null?Xl():r.alternate===null&&an===0&&(an=3),r.flags&=-257,r.flags|=65536,r.lanes=u,o===Al?r.flags|=16384:(n=r.updateQueue,n===null?r.updateQueue=new Set([o]):n.add(o),bf(t,o,u)),!1;case 22:return r.flags|=65536,o===Al?r.flags|=16384:(n=r.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},r.updateQueue=n):(r=n.retryQueue,r===null?n.retryQueue=new Set([o]):r.add(o)),bf(t,o,u)),!1}throw Error(s(435,r.tag))}return bf(t,o,u),Xl(),!1}if(bt)return n=ei.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Au&&(t=Error(s(422),{cause:o}),io(pi(t,r)))):(o!==Au&&(n=Error(s(423),{cause:o}),io(pi(n,r))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=pi(o,r),u=ef(t.stateNode,o,u),Du(t,u),an!==4&&(an=2)),!1;var f=Error(s(520),{cause:o});if(f=pi(f,r),Eo===null?Eo=[f]:Eo.push(f),an!==4&&(an=2),n===null)return!0;o=pi(o,r),r=n;do{switch(r.tag){case 3:return r.flags|=65536,t=u&-u,r.lanes|=t,t=ef(r.stateNode,o,t),Du(r,t),!1;case 1:if(n=r.type,f=r.stateNode,(r.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Oa===null||!Oa.has(f))))return r.flags|=65536,u&=-u,r.lanes|=u,u=Hm(u),Gm(u,t,r,o),Du(r,u),!1}r=r.return}while(r!==null);return!1}var tf=Error(s(461)),fn=!1;function Rn(t,n,r,o){n.child=t===null?Yp(n,null,r,o):mr(n,t.child,r,o)}function Vm(t,n,r,o,u){r=r.render;var f=n.ref;if("ref"in o){var A={};for(var T in o)T!=="ref"&&(A[T]=o[T])}else A=o;return fr(n),o=Pu(t,n,r,A,f,u),T=Iu(),t!==null&&!fn?(zu(t,n,u),$i(t,n,u)):(bt&&T&&vu(n),n.flags|=1,Rn(t,n,o,u),n.child)}function km(t,n,r,o,u){if(t===null){var f=r.type;return typeof f=="function"&&!pu(f)&&f.defaultProps===void 0&&r.compare===null?(n.tag=15,n.type=f,Xm(t,n,f,o,u)):(t=dl(r.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!uf(t,u)){var A=f.memoizedProps;if(r=r.compare,r=r!==null?r:eo,r(A,o)&&t.ref===n.ref)return $i(t,n,u)}return n.flags|=1,t=Qi(f,o),t.ref=n.ref,t.return=n,n.child=t}function Xm(t,n,r,o,u){if(t!==null){var f=t.memoizedProps;if(eo(f,o)&&t.ref===n.ref)if(fn=!1,n.pendingProps=o=f,uf(t,u))(t.flags&131072)!==0&&(fn=!0);else return n.lanes=t.lanes,$i(t,n,u)}return nf(t,n,r,o,u)}function Ym(t,n,r,o){var u=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|r:r,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return Wm(t,n,f,r,o)}if((r&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&vl(n,f!==null?f.cachePool:null),f!==null?qp(n,f):Lu(),jp(n);else return o=n.lanes=536870912,Wm(t,n,f!==null?f.baseLanes|r:r,r,o)}else f!==null?(vl(n,f.cachePool),qp(n,f),Ua(),n.memoizedState=null):(t!==null&&vl(n,null),Lu(),Ua());return Rn(t,n,u,r),n.child}function go(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Wm(t,n,r,o,u){var f=bu();return f=f===null?null:{parent:cn._currentValue,pool:f},n.memoizedState={baseLanes:r,cachePool:f},t!==null&&vl(n,null),Lu(),jp(n),t!==null&&qr(t,n,o,!0),n.childLanes=u,null}function Bl(t,n){return n=Ol({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Qm(t,n,r){return mr(n,t.child,null,r),t=Bl(n,n.pendingProps),t.flags|=2,ti(n),n.memoizedState=null,t}function LA(t,n,r){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(bt){if(o.mode==="hidden")return t=Bl(n,o),n.lanes=536870912,go(null,t);if(Nu(n),(t=qt)?(t=rv(t,vi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ea!==null?{id:Bi,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},r=Dp(t),r.return=n,n.child=r,Cn=n,qt=null)):t=null,t===null)throw Ta(n);return n.lanes=536870912,null}return Bl(n,o)}var f=t.memoizedState;if(f!==null){var A=f.dehydrated;if(Nu(n),u)if(n.flags&256)n.flags&=-257,n=Qm(t,n,r);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(fn||qr(t,n,r,!1),u=(r&t.childLanes)!==0,fn||u){if(o=Wt,o!==null&&(A=Br(o,r),A!==0&&A!==f.retryLane))throw f.retryLane=A,or(t,A),jn(o,t,A),tf;Xl(),n=Qm(t,n,r)}else t=f.treeContext,qt=Ai(A.nextSibling),Cn=n,bt=!0,Ma=null,vi=!1,t!==null&&Bp(n,t),n=Bl(n,o),n.flags|=4096;return n}return t=Qi(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Nl(t,n){var r=n.ref;if(r===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(s(284));(t===null||t.ref!==r)&&(n.flags|=4194816)}}function nf(t,n,r,o,u){return fr(n),r=Pu(t,n,r,o,void 0,u),o=Iu(),t!==null&&!fn?(zu(t,n,u),$i(t,n,u)):(bt&&o&&vu(n),n.flags|=1,Rn(t,n,r,u),n.child)}function qm(t,n,r,o,u,f){return fr(n),n.updateQueue=null,r=Zp(n,o,r,u),Kp(t),o=Iu(),t!==null&&!fn?(zu(t,n,f),$i(t,n,f)):(bt&&o&&vu(n),n.flags|=1,Rn(t,n,r,f),n.child)}function jm(t,n,r,o,u){if(fr(n),n.stateNode===null){var f=Xr,A=r.contextType;typeof A=="object"&&A!==null&&(f=wn(A)),f=new r(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=$u,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},wu(n),A=r.contextType,f.context=typeof A=="object"&&A!==null?wn(A):Xr,f.state=n.memoizedState,A=r.getDerivedStateFromProps,typeof A=="function"&&(Ju(n,r,A,o),f.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(A=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),A!==f.state&&$u.enqueueReplaceState(f,f.state,null),uo(n,o,f,u),co(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,G=vr(r,T);f.props=G;var ae=f.context,ge=r.contextType;A=Xr,typeof ge=="object"&&ge!==null&&(A=wn(ge));var Ae=r.getDerivedStateFromProps;ge=typeof Ae=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ge||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||ae!==A)&&Om(n,f,o,A),Ca=!1;var se=n.memoizedState;f.state=se,uo(n,o,f,u),co(),ae=n.memoizedState,T||se!==ae||Ca?(typeof Ae=="function"&&(Ju(n,r,Ae,o),ae=n.memoizedState),(G=Ca||Nm(n,r,G,o,se,ae,A))?(ge||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ae),f.props=o,f.state=ae,f.context=A,o=G):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Ru(t,n),A=n.memoizedProps,ge=vr(r,A),f.props=ge,Ae=n.pendingProps,se=f.context,ae=r.contextType,G=Xr,typeof ae=="object"&&ae!==null&&(G=wn(ae)),T=r.getDerivedStateFromProps,(ae=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A!==Ae||se!==G)&&Om(n,f,o,G),Ca=!1,se=n.memoizedState,f.state=se,uo(n,o,f,u),co();var fe=n.memoizedState;A!==Ae||se!==fe||Ca||t!==null&&t.dependencies!==null&&ml(t.dependencies)?(typeof T=="function"&&(Ju(n,r,T,o),fe=n.memoizedState),(ge=Ca||Nm(n,r,ge,o,se,fe,G)||t!==null&&t.dependencies!==null&&ml(t.dependencies))?(ae||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,fe,G),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,fe,G)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||A===t.memoizedProps&&se===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||A===t.memoizedProps&&se===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=fe),f.props=o,f.state=fe,f.context=G,o=ge):(typeof f.componentDidUpdate!="function"||A===t.memoizedProps&&se===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||A===t.memoizedProps&&se===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Nl(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,r=o&&typeof r.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=mr(n,t.child,null,u),n.child=mr(n,null,r,u)):Rn(t,n,r,u),n.memoizedState=f.state,t=n.child):t=$i(t,n,u),t}function Km(t,n,r,o){return cr(),n.flags|=256,Rn(t,n,r,o),n.child}var af={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function rf(t){return{baseLanes:t,cachePool:Fp()}}function sf(t,n,r){return t=t!==null?t.childLanes&~r:0,n&&(t|=ii),t}function Zm(t,n,r){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,A;if((A=f)||(A=t!==null&&t.memoizedState===null?!1:(sn.current&2)!==0),A&&(u=!0,n.flags&=-129),A=(n.flags&32)!==0,n.flags&=-33,t===null){if(bt){if(u?Da(n):Ua(),(t=qt)?(t=rv(t,vi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ea!==null?{id:Bi,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},r=Dp(t),r.return=n,n.child=r,Cn=n,qt=null)):t=null,t===null)throw Ta(n);return Vf(t)?n.lanes=32:n.lanes=536870912,null}var T=o.children;return o=o.fallback,u?(Ua(),u=n.mode,T=Ol({mode:"hidden",children:T},u),o=lr(o,u,r,null),T.return=n,o.return=n,T.sibling=o,n.child=T,o=n.child,o.memoizedState=rf(r),o.childLanes=sf(t,A,r),n.memoizedState=af,go(null,o)):(Da(n),of(n,T))}var G=t.memoizedState;if(G!==null&&(T=G.dehydrated,T!==null)){if(f)n.flags&256?(Da(n),n.flags&=-257,n=lf(t,n,r)):n.memoizedState!==null?(Ua(),n.child=t.child,n.flags|=128,n=null):(Ua(),T=o.fallback,u=n.mode,o=Ol({mode:"visible",children:o.children},u),T=lr(T,u,r,null),T.flags|=2,o.return=n,T.return=n,o.sibling=T,n.child=o,mr(n,t.child,null,r),o=n.child,o.memoizedState=rf(r),o.childLanes=sf(t,A,r),n.memoizedState=af,n=go(null,o));else if(Da(n),Vf(T)){if(A=T.nextSibling&&T.nextSibling.dataset,A)var ae=A.dgst;A=ae,o=Error(s(419)),o.stack="",o.digest=A,io({value:o,source:null,stack:null}),n=lf(t,n,r)}else if(fn||qr(t,n,r,!1),A=(r&t.childLanes)!==0,fn||A){if(A=Wt,A!==null&&(o=Br(A,r),o!==0&&o!==G.retryLane))throw G.retryLane=o,or(t,o),jn(A,t,o),tf;Gf(T)||Xl(),n=lf(t,n,r)}else Gf(T)?(n.flags|=192,n.child=t.child,n=null):(t=G.treeContext,qt=Ai(T.nextSibling),Cn=n,bt=!0,Ma=null,vi=!1,t!==null&&Bp(n,t),n=of(n,o.children),n.flags|=4096);return n}return u?(Ua(),T=o.fallback,u=n.mode,G=t.child,ae=G.sibling,o=Qi(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,ae!==null?T=Qi(ae,T):(T=lr(T,u,r,null),T.flags|=2),T.return=n,o.return=n,o.sibling=T,n.child=o,go(null,o),o=n.child,T=t.child.memoizedState,T===null?T=rf(r):(u=T.cachePool,u!==null?(G=cn._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=Fp(),T={baseLanes:T.baseLanes|r,cachePool:u}),o.memoizedState=T,o.childLanes=sf(t,A,r),n.memoizedState=af,go(t.child,o)):(Da(n),r=t.child,t=r.sibling,r=Qi(r,{mode:"visible",children:o.children}),r.return=n,r.sibling=null,t!==null&&(A=n.deletions,A===null?(n.deletions=[t],n.flags|=16):A.push(t)),n.child=r,n.memoizedState=null,r)}function of(t,n){return n=Ol({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ol(t,n){return t=$n(22,t,null,n),t.lanes=0,t}function lf(t,n,r){return mr(n,t.child,null,r),t=of(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Jm(t,n,r){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),yu(t.return,n,r)}function cf(t,n,r,o,u,f){var A=t.memoizedState;A===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:u,treeForkCount:f}:(A.isBackwards=n,A.rendering=null,A.renderingStartTime=0,A.last=o,A.tail=r,A.tailMode=u,A.treeForkCount=f)}function $m(t,n,r){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var A=sn.current,T=(A&2)!==0;if(T?(A=A&1|2,n.flags|=128):A&=1,pe(sn,A),Rn(t,n,o,r),o=bt?no:0,!T&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Jm(t,r,n);else if(t.tag===19)Jm(t,r,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(r=n.child,u=null;r!==null;)t=r.alternate,t!==null&&El(t)===null&&(u=r),r=r.sibling;r=u,r===null?(u=n.child,n.child=null):(u=r.sibling,r.sibling=null),cf(n,!1,u,r,f,o);break;case"backwards":case"unstable_legacy-backwards":for(r=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&El(t)===null){n.child=u;break}t=u.sibling,u.sibling=r,r=u,u=t}cf(n,!0,r,null,f,o);break;case"together":cf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function $i(t,n,r){if(t!==null&&(n.dependencies=t.dependencies),Na|=n.lanes,(r&n.childLanes)===0)if(t!==null){if(qr(t,n,r,!1),(r&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,r=Qi(t,t.pendingProps),n.child=r,r.return=n;t.sibling!==null;)t=t.sibling,r=r.sibling=Qi(t,t.pendingProps),r.return=n;r.sibling=null}return n.child}function uf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&ml(t)))}function BA(t,n,r){switch(n.tag){case 3:De(n,n.stateNode.containerInfo),ba(n,cn,t.memoizedState.cache),cr();break;case 27:case 5:Ye(n);break;case 4:De(n,n.stateNode.containerInfo);break;case 10:ba(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Nu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Da(n),n.flags|=128,null):(r&n.child.childLanes)!==0?Zm(t,n,r):(Da(n),t=$i(t,n,r),t!==null?t.sibling:null);Da(n);break;case 19:var u=(t.flags&128)!==0;if(o=(r&n.childLanes)!==0,o||(qr(t,n,r,!1),o=(r&n.childLanes)!==0),u){if(o)return $m(t,n,r);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),pe(sn,sn.current),o)break;return null;case 22:return n.lanes=0,Ym(t,n,r,n.pendingProps);case 24:ba(n,cn,t.memoizedState.cache)}return $i(t,n,r)}function eg(t,n,r){if(t!==null)if(t.memoizedProps!==n.pendingProps)fn=!0;else{if(!uf(t,r)&&(n.flags&128)===0)return fn=!1,BA(t,n,r);fn=(t.flags&131072)!==0}else fn=!1,bt&&(n.flags&1048576)!==0&&Lp(n,no,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=dr(n.elementType),n.type=t,typeof t=="function")pu(t)?(o=vr(t,o),n.tag=1,n=jm(null,n,t,o,r)):(n.tag=0,n=nf(null,n,t,o,r));else{if(t!=null){var u=t.$$typeof;if(u===R){n.tag=11,n=Vm(null,n,t,o,r);break e}else if(u===F){n.tag=14,n=km(null,n,t,o,r);break e}}throw n=ee(t)||t,Error(s(306,n,""))}}return n;case 0:return nf(t,n,n.type,n.pendingProps,r);case 1:return o=n.type,u=vr(o,n.pendingProps),jm(t,n,o,u,r);case 3:e:{if(De(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Ru(t,n),uo(n,o,null,r);var A=n.memoizedState;if(o=A.cache,ba(n,cn,o),o!==f.cache&&Eu(n,[cn],r,!0),co(),o=A.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:A.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Km(t,n,o,r);break e}else if(o!==u){u=pi(Error(s(424)),n),io(u),n=Km(t,n,o,r);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(qt=Ai(t.firstChild),Cn=n,bt=!0,Ma=null,vi=!0,r=Yp(n,null,o,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(cr(),o===u){n=$i(t,n,r);break e}Rn(t,n,o,r)}n=n.child}return n;case 26:return Nl(t,n),t===null?(r=fv(n.type,null,n.pendingProps,null))?n.memoizedState=r:bt||(r=n.type,t=n.pendingProps,o=Zl(ne.current).createElement(r),o[ln]=n,o[Tn]=t,Dn(o,r,t),Se(o),n.stateNode=o):n.memoizedState=fv(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ye(n),t===null&&bt&&(o=n.stateNode=lv(n.type,n.pendingProps,ne.current),Cn=n,vi=!0,u=qt,Fa(n.type)?(kf=u,qt=Ai(o.firstChild)):qt=u),Rn(t,n,n.pendingProps.children,r),Nl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&bt&&((u=o=qt)&&(o=c_(o,n.type,n.pendingProps,vi),o!==null?(n.stateNode=o,Cn=n,qt=Ai(o.firstChild),vi=!1,u=!0):u=!1),u||Ta(n)),Ye(n),u=n.type,f=n.pendingProps,A=t!==null?t.memoizedProps:null,o=f.children,zf(u,f)?o=null:A!==null&&zf(u,A)&&(n.flags|=32),n.memoizedState!==null&&(u=Pu(t,n,MA,null,null,r),Uo._currentValue=u),Nl(t,n),Rn(t,n,o,r),n.child;case 6:return t===null&&bt&&((t=r=qt)&&(r=u_(r,n.pendingProps,vi),r!==null?(n.stateNode=r,Cn=n,qt=null,t=!0):t=!1),t||Ta(n)),null;case 13:return Zm(t,n,r);case 4:return De(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=mr(n,null,o,r):Rn(t,n,o,r),n.child;case 11:return Vm(t,n,n.type,n.pendingProps,r);case 7:return Rn(t,n,n.pendingProps,r),n.child;case 8:return Rn(t,n,n.pendingProps.children,r),n.child;case 12:return Rn(t,n,n.pendingProps.children,r),n.child;case 10:return o=n.pendingProps,ba(n,n.type,o.value),Rn(t,n,o.children,r),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,fr(n),u=wn(u),o=o(u),n.flags|=1,Rn(t,n,o,r),n.child;case 14:return km(t,n,n.type,n.pendingProps,r);case 15:return Xm(t,n,n.type,n.pendingProps,r);case 19:return $m(t,n,r);case 31:return LA(t,n,r);case 22:return Ym(t,n,r,n.pendingProps);case 24:return fr(n),o=wn(cn),t===null?(u=bu(),u===null&&(u=Wt,f=Mu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=r),u=f),n.memoizedState={parent:o,cache:u},wu(n),ba(n,cn,u)):((t.lanes&r)!==0&&(Ru(t,n),uo(n,null,null,r),co()),u=t.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ba(n,cn,o)):(o=f.cache,ba(n,cn,o),o!==u.cache&&Eu(n,[cn],r,!0))),Rn(t,n,n.pendingProps.children,r),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ea(t){t.flags|=4}function ff(t,n,r,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Cg())t.flags|=8192;else throw pr=Al,Cu}else t.flags&=-16777217}function tg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!gv(n))if(Cg())t.flags|=8192;else throw pr=Al,Cu}function Pl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Pt():536870912,t.lanes|=n,ss|=n)}function vo(t,n){if(!bt)switch(t.tailMode){case"hidden":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function jt(t){var n=t.alternate!==null&&t.alternate.child===t.child,r=0,o=0;if(n)for(var u=t.child;u!==null;)r|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)r|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=r,n}function NA(t,n,r){var o=n.pendingProps;switch(xu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(n),null;case 1:return jt(n),null;case 3:return r=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Ki(cn),Oe(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Qr(n)?ea(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,_u())),jt(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(ea(n),f!==null?(jt(n),tg(n,f)):(jt(n),ff(n,u,null,o,r))):f?f!==t.memoizedState?(ea(n),jt(n),tg(n,f)):(jt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&ea(n),jt(n),ff(n,u,t,o,r)),null;case 27:if(ct(n),r=ne.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ea(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return jt(n),null}t=ye.current,Qr(n)?Np(n):(t=lv(u,o,r),n.stateNode=t,ea(n))}return jt(n),null;case 5:if(ct(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ea(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return jt(n),null}if(f=ye.current,Qr(n))Np(n);else{var A=Zl(ne.current);switch(f){case 1:f=A.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=A.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=A.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=A.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=A.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?A.createElement("select",{is:o.is}):A.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?A.createElement(u,{is:o.is}):A.createElement(u)}}f[ln]=n,f[Tn]=o;e:for(A=n.child;A!==null;){if(A.tag===5||A.tag===6)f.appendChild(A.stateNode);else if(A.tag!==4&&A.tag!==27&&A.child!==null){A.child.return=A,A=A.child;continue}if(A===n)break e;for(;A.sibling===null;){if(A.return===null||A.return===n)break e;A=A.return}A.sibling.return=A.return,A=A.sibling}n.stateNode=f;e:switch(Dn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&ea(n)}}return jt(n),ff(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,r),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ea(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=ne.current,Qr(n)){if(t=n.stateNode,r=n.memoizedProps,o=null,u=Cn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[ln]=n,t=!!(t.nodeValue===r||o!==null&&o.suppressHydrationWarning===!0||Zg(t.nodeValue,r)),t||Ta(n,!0)}else t=Zl(t).createTextNode(o),t[ln]=n,n.stateNode=t}return jt(n),null;case 31:if(r=n.memoizedState,t===null||t.memoizedState!==null){if(o=Qr(n),r!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[ln]=n}else cr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;jt(n),t=!1}else r=_u(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),t=!0;if(!t)return n.flags&256?(ti(n),n):(ti(n),null);if((n.flags&128)!==0)throw Error(s(558))}return jt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Qr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[ln]=n}else cr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;jt(n),u=!1}else u=_u(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ti(n),n):(ti(n),null)}return ti(n),(n.flags&128)!==0?(n.lanes=r,n):(r=o!==null,t=t!==null&&t.memoizedState!==null,r&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),r!==t&&r&&(n.child.flags|=8192),Pl(n,n.updateQueue),jt(n),null);case 4:return Oe(),t===null&&Bf(n.stateNode.containerInfo),jt(n),null;case 10:return Ki(n.type),jt(n),null;case 19:if(te(sn),o=n.memoizedState,o===null)return jt(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)vo(o,!1);else{if(an!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=El(t),f!==null){for(n.flags|=128,vo(o,!1),t=f.updateQueue,n.updateQueue=t,Pl(n,t),n.subtreeFlags=0,t=r,r=n.child;r!==null;)Rp(r,t),r=r.sibling;return pe(sn,sn.current&1|2),bt&&qi(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&E()>Gl&&(n.flags|=128,u=!0,vo(o,!1),n.lanes=4194304)}else{if(!u)if(t=El(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Pl(n,t),vo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!bt)return jt(n),null}else 2*E()-o.renderingStartTime>Gl&&r!==536870912&&(n.flags|=128,u=!0,vo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=E(),t.sibling=null,r=sn.current,pe(sn,u?r&1|2:r&1),bt&&qi(n,o.treeForkCount),t):(jt(n),null);case 22:case 23:return ti(n),Bu(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(r&536870912)!==0&&(n.flags&128)===0&&(jt(n),n.subtreeFlags&6&&(n.flags|=8192)):jt(n),r=n.updateQueue,r!==null&&Pl(n,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==r&&(n.flags|=2048),t!==null&&te(hr),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Ki(cn),jt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function OA(t,n){switch(xu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ki(cn),Oe(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ct(n),null;case 31:if(n.memoizedState!==null){if(ti(n),n.alternate===null)throw Error(s(340));cr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ti(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));cr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return te(sn),null;case 4:return Oe(),null;case 10:return Ki(n.type),null;case 22:case 23:return ti(n),Bu(),t!==null&&te(hr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ki(cn),null;case 25:return null;default:return null}}function ng(t,n){switch(xu(n),n.tag){case 3:Ki(cn),Oe();break;case 26:case 27:case 5:ct(n);break;case 4:Oe();break;case 31:n.memoizedState!==null&&ti(n);break;case 13:ti(n);break;case 19:te(sn);break;case 10:Ki(n.type);break;case 22:case 23:ti(n),Bu(),t!==null&&te(hr);break;case 24:Ki(cn)}}function xo(t,n){try{var r=n.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var u=o.next;r=u;do{if((r.tag&t)===t){o=void 0;var f=r.create,A=r.inst;o=f(),A.destroy=o}r=r.next}while(r!==u)}}catch(T){zt(n,n.return,T)}}function La(t,n,r){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var A=o.inst,T=A.destroy;if(T!==void 0){A.destroy=void 0,u=n;var G=r,ae=T;try{ae()}catch(ge){zt(u,G,ge)}}}o=o.next}while(o!==f)}}catch(ge){zt(n,n.return,ge)}}function ig(t){var n=t.updateQueue;if(n!==null){var r=t.stateNode;try{Qp(n,r)}catch(o){zt(t,t.return,o)}}}function ag(t,n,r){r.props=vr(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(o){zt(t,n,o)}}function Ao(t,n){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof r=="function"?t.refCleanup=r(o):r.current=o}}catch(u){zt(t,n,u)}}function Oi(t,n){var r=t.ref,o=t.refCleanup;if(r!==null)if(typeof o=="function")try{o()}catch(u){zt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(u){zt(t,n,u)}else r.current=null}function rg(t){var n=t.type,r=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":r.autoFocus&&o.focus();break e;case"img":r.src?o.src=r.src:r.srcSet&&(o.srcset=r.srcSet)}}catch(u){zt(t,t.return,u)}}function hf(t,n,r){try{var o=t.stateNode;i_(o,t.type,r,n),o[Tn]=n}catch(u){zt(t,t.return,u)}}function sg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Fa(t.type)||t.tag===4}function df(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||sg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Fa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function pf(t,n,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(t,n):(n=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,n.appendChild(t),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=Yi));else if(o!==4&&(o===27&&Fa(t.type)&&(r=t.stateNode,n=null),t=t.child,t!==null))for(pf(t,n,r),t=t.sibling;t!==null;)pf(t,n,r),t=t.sibling}function Il(t,n,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?r.insertBefore(t,n):r.appendChild(t);else if(o!==4&&(o===27&&Fa(t.type)&&(r=t.stateNode),t=t.child,t!==null))for(Il(t,n,r),t=t.sibling;t!==null;)Il(t,n,r),t=t.sibling}function og(t){var n=t.stateNode,r=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Dn(n,o,r),n[ln]=t,n[Tn]=r}catch(f){zt(t,t.return,f)}}var ta=!1,hn=!1,mf=!1,lg=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function PA(t,n){if(t=t.containerInfo,Pf=ac,t=_p(t),ou(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{r.nodeType,f.nodeType}catch{r=null;break e}var A=0,T=-1,G=-1,ae=0,ge=0,Ae=t,se=null;t:for(;;){for(var fe;Ae!==r||u!==0&&Ae.nodeType!==3||(T=A+u),Ae!==f||o!==0&&Ae.nodeType!==3||(G=A+o),Ae.nodeType===3&&(A+=Ae.nodeValue.length),(fe=Ae.firstChild)!==null;)se=Ae,Ae=fe;for(;;){if(Ae===t)break t;if(se===r&&++ae===u&&(T=A),se===f&&++ge===o&&(G=A),(fe=Ae.nextSibling)!==null)break;Ae=se,se=Ae.parentNode}Ae=fe}r=T===-1||G===-1?null:{start:T,end:G}}else r=null}r=r||{start:0,end:0}}else r=null;for(If={focusedElem:t,selectionRange:r},ac=!1,Sn=n;Sn!==null;)if(n=Sn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Sn=t;else for(;Sn!==null;){switch(n=Sn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(r=0;r<t.length;r++)u=t[r],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,r=n,u=f.memoizedProps,f=f.memoizedState,o=r.stateNode;try{var Ge=vr(r.type,u);t=o.getSnapshotBeforeUpdate(Ge,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(it){zt(r,r.return,it)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,r=t.nodeType,r===9)Hf(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Hf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,Sn=t;break}Sn=n.return}}function cg(t,n,r){var o=r.flags;switch(r.tag){case 0:case 11:case 15:ia(t,r),o&4&&xo(5,r);break;case 1:if(ia(t,r),o&4)if(t=r.stateNode,n===null)try{t.componentDidMount()}catch(A){zt(r,r.return,A)}else{var u=vr(r.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(A){zt(r,r.return,A)}}o&64&&ig(r),o&512&&Ao(r,r.return);break;case 3:if(ia(t,r),o&64&&(t=r.updateQueue,t!==null)){if(n=null,r.child!==null)switch(r.child.tag){case 27:case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}try{Qp(t,n)}catch(A){zt(r,r.return,A)}}break;case 27:n===null&&o&4&&og(r);case 26:case 5:ia(t,r),n===null&&o&4&&rg(r),o&512&&Ao(r,r.return);break;case 12:ia(t,r);break;case 31:ia(t,r),o&4&&hg(t,r);break;case 13:ia(t,r),o&4&&dg(t,r),o&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=YA.bind(null,r),f_(t,r))));break;case 22:if(o=r.memoizedState!==null||ta,!o){n=n!==null&&n.memoizedState!==null||hn,u=ta;var f=hn;ta=o,(hn=n)&&!f?aa(t,r,(r.subtreeFlags&8772)!==0):ia(t,r),ta=u,hn=f}break;case 30:break;default:ia(t,r)}}function ug(t){var n=t.alternate;n!==null&&(t.alternate=null,ug(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&C(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Zt=null,Yn=!1;function na(t,n,r){for(r=r.child;r!==null;)fg(t,n,r),r=r.sibling}function fg(t,n,r){if(Re&&typeof Re.onCommitFiberUnmount=="function")try{Re.onCommitFiberUnmount(Te,r)}catch{}switch(r.tag){case 26:hn||Oi(r,n),na(t,n,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:hn||Oi(r,n);var o=Zt,u=Yn;Fa(r.type)&&(Zt=r.stateNode,Yn=!1),na(t,n,r),wo(r.stateNode),Zt=o,Yn=u;break;case 5:hn||Oi(r,n);case 6:if(o=Zt,u=Yn,Zt=null,na(t,n,r),Zt=o,Yn=u,Zt!==null)if(Yn)try{(Zt.nodeType===9?Zt.body:Zt.nodeName==="HTML"?Zt.ownerDocument.body:Zt).removeChild(r.stateNode)}catch(f){zt(r,n,f)}else try{Zt.removeChild(r.stateNode)}catch(f){zt(r,n,f)}break;case 18:Zt!==null&&(Yn?(t=Zt,iv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),ps(t)):iv(Zt,r.stateNode));break;case 4:o=Zt,u=Yn,Zt=r.stateNode.containerInfo,Yn=!0,na(t,n,r),Zt=o,Yn=u;break;case 0:case 11:case 14:case 15:La(2,r,n),hn||La(4,r,n),na(t,n,r);break;case 1:hn||(Oi(r,n),o=r.stateNode,typeof o.componentWillUnmount=="function"&&ag(r,n,o)),na(t,n,r);break;case 21:na(t,n,r);break;case 22:hn=(o=hn)||r.memoizedState!==null,na(t,n,r),hn=o;break;default:na(t,n,r)}}function hg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ps(t)}catch(r){zt(n,n.return,r)}}}function dg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ps(t)}catch(r){zt(n,n.return,r)}}function IA(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new lg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new lg),n;default:throw Error(s(435,t.tag))}}function zl(t,n){var r=IA(t);n.forEach(function(o){if(!r.has(o)){r.add(o);var u=WA.bind(null,t,o);o.then(u,u)}})}function Wn(t,n){var r=n.deletions;if(r!==null)for(var o=0;o<r.length;o++){var u=r[o],f=t,A=n,T=A;e:for(;T!==null;){switch(T.tag){case 27:if(Fa(T.type)){Zt=T.stateNode,Yn=!1;break e}break;case 5:Zt=T.stateNode,Yn=!1;break e;case 3:case 4:Zt=T.stateNode.containerInfo,Yn=!0;break e}T=T.return}if(Zt===null)throw Error(s(160));fg(f,A,u),Zt=null,Yn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)pg(n,t),n=n.sibling}var Mi=null;function pg(t,n){var r=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Wn(n,t),Qn(t),o&4&&(La(3,t,t.return),xo(3,t),La(5,t,t.return));break;case 1:Wn(n,t),Qn(t),o&512&&(hn||r===null||Oi(r,r.return)),o&64&&ta&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?o:r.concat(o))));break;case 26:var u=Mi;if(Wn(n,t),Qn(t),o&512&&(hn||r===null||Oi(r,r.return)),o&4){var f=r!==null?r.memoizedState:null;if(o=t.memoizedState,r===null)if(o===null)if(t.stateNode===null){e:{o=t.type,r=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[nr]||f[ln]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Dn(f,o,r),f[ln]=t,Se(f),o=f;break e;case"link":var A=pv("link","href",u).get(o+(r.href||""));if(A){for(var T=0;T<A.length;T++)if(f=A[T],f.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&f.getAttribute("rel")===(r.rel==null?null:r.rel)&&f.getAttribute("title")===(r.title==null?null:r.title)&&f.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){A.splice(T,1);break t}}f=u.createElement(o),Dn(f,o,r),u.head.appendChild(f);break;case"meta":if(A=pv("meta","content",u).get(o+(r.content||""))){for(T=0;T<A.length;T++)if(f=A[T],f.getAttribute("content")===(r.content==null?null:""+r.content)&&f.getAttribute("name")===(r.name==null?null:r.name)&&f.getAttribute("property")===(r.property==null?null:r.property)&&f.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&f.getAttribute("charset")===(r.charSet==null?null:r.charSet)){A.splice(T,1);break t}}f=u.createElement(o),Dn(f,o,r),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[ln]=t,Se(f),o=f}t.stateNode=o}else mv(u,t.type,t.stateNode);else t.stateNode=dv(u,o,t.memoizedProps);else f!==o?(f===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):f.count--,o===null?mv(u,t.type,t.stateNode):dv(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&hf(t,t.memoizedProps,r.memoizedProps)}break;case 27:Wn(n,t),Qn(t),o&512&&(hn||r===null||Oi(r,r.return)),r!==null&&o&4&&hf(t,t.memoizedProps,r.memoizedProps);break;case 5:if(Wn(n,t),Qn(t),o&512&&(hn||r===null||Oi(r,r.return)),t.flags&32){u=t.stateNode;try{Ir(u,"")}catch(Ge){zt(t,t.return,Ge)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,hf(t,u,r!==null?r.memoizedProps:u)),o&1024&&(mf=!0);break;case 6:if(Wn(n,t),Qn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,r=t.stateNode;try{r.nodeValue=o}catch(Ge){zt(t,t.return,Ge)}}break;case 3:if(ec=null,u=Mi,Mi=Jl(n.containerInfo),Wn(n,t),Mi=u,Qn(t),o&4&&r!==null&&r.memoizedState.isDehydrated)try{ps(n.containerInfo)}catch(Ge){zt(t,t.return,Ge)}mf&&(mf=!1,mg(t));break;case 4:o=Mi,Mi=Jl(t.stateNode.containerInfo),Wn(n,t),Qn(t),Mi=o;break;case 12:Wn(n,t),Qn(t);break;case 31:Wn(n,t),Qn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,zl(t,o)));break;case 13:Wn(n,t),Qn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Hl=E()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,zl(t,o)));break;case 22:u=t.memoizedState!==null;var G=r!==null&&r.memoizedState!==null,ae=ta,ge=hn;if(ta=ae||u,hn=ge||G,Wn(n,t),hn=ge,ta=ae,Qn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(r===null||G||ta||hn||xr(t)),r=null,n=t;;){if(n.tag===5||n.tag===26){if(r===null){G=r=n;try{if(f=G.stateNode,u)A=f.style,typeof A.setProperty=="function"?A.setProperty("display","none","important"):A.display="none";else{T=G.stateNode;var Ae=G.memoizedProps.style,se=Ae!=null&&Ae.hasOwnProperty("display")?Ae.display:null;T.style.display=se==null||typeof se=="boolean"?"":(""+se).trim()}}catch(Ge){zt(G,G.return,Ge)}}}else if(n.tag===6){if(r===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(Ge){zt(G,G.return,Ge)}}}else if(n.tag===18){if(r===null){G=n;try{var fe=G.stateNode;u?av(fe,!0):av(G.stateNode,!1)}catch(Ge){zt(G,G.return,Ge)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;r===n&&(r=null),n=n.return}r===n&&(r=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(r=o.retryQueue,r!==null&&(o.retryQueue=null,zl(t,r))));break;case 19:Wn(n,t),Qn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,zl(t,o)));break;case 30:break;case 21:break;default:Wn(n,t),Qn(t)}}function Qn(t){var n=t.flags;if(n&2){try{for(var r,o=t.return;o!==null;){if(sg(o)){r=o;break}o=o.return}if(r==null)throw Error(s(160));switch(r.tag){case 27:var u=r.stateNode,f=df(t);Il(t,f,u);break;case 5:var A=r.stateNode;r.flags&32&&(Ir(A,""),r.flags&=-33);var T=df(t);Il(t,T,A);break;case 3:case 4:var G=r.stateNode.containerInfo,ae=df(t);pf(t,ae,G);break;default:throw Error(s(161))}}catch(ge){zt(t,t.return,ge)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function mg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;mg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ia(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)cg(t,n.alternate,n),n=n.sibling}function xr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:La(4,n,n.return),xr(n);break;case 1:Oi(n,n.return);var r=n.stateNode;typeof r.componentWillUnmount=="function"&&ag(n,n.return,r),xr(n);break;case 27:wo(n.stateNode);case 26:case 5:Oi(n,n.return),xr(n);break;case 22:n.memoizedState===null&&xr(n);break;case 30:xr(n);break;default:xr(n)}t=t.sibling}}function aa(t,n,r){for(r=r&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,f=n,A=f.flags;switch(f.tag){case 0:case 11:case 15:aa(u,f,r),xo(4,f);break;case 1:if(aa(u,f,r),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ae){zt(o,o.return,ae)}if(o=f,u=o.updateQueue,u!==null){var T=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)Wp(G[u],T)}catch(ae){zt(o,o.return,ae)}}r&&A&64&&ig(f),Ao(f,f.return);break;case 27:og(f);case 26:case 5:aa(u,f,r),r&&o===null&&A&4&&rg(f),Ao(f,f.return);break;case 12:aa(u,f,r);break;case 31:aa(u,f,r),r&&A&4&&hg(u,f);break;case 13:aa(u,f,r),r&&A&4&&dg(u,f);break;case 22:f.memoizedState===null&&aa(u,f,r),Ao(f,f.return);break;case 30:break;default:aa(u,f,r)}n=n.sibling}}function gf(t,n){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&ao(r))}function vf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ao(t))}function Ti(t,n,r,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)gg(t,n,r,o),n=n.sibling}function gg(t,n,r,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ti(t,n,r,o),u&2048&&xo(9,n);break;case 1:Ti(t,n,r,o);break;case 3:Ti(t,n,r,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ao(t)));break;case 12:if(u&2048){Ti(t,n,r,o),t=n.stateNode;try{var f=n.memoizedProps,A=f.id,T=f.onPostCommit;typeof T=="function"&&T(A,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(G){zt(n,n.return,G)}}else Ti(t,n,r,o);break;case 31:Ti(t,n,r,o);break;case 13:Ti(t,n,r,o);break;case 23:break;case 22:f=n.stateNode,A=n.alternate,n.memoizedState!==null?f._visibility&2?Ti(t,n,r,o):_o(t,n):f._visibility&2?Ti(t,n,r,o):(f._visibility|=2,is(t,n,r,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&gf(A,n);break;case 24:Ti(t,n,r,o),u&2048&&vf(n.alternate,n);break;default:Ti(t,n,r,o)}}function is(t,n,r,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,A=n,T=r,G=o,ae=A.flags;switch(A.tag){case 0:case 11:case 15:is(f,A,T,G,u),xo(8,A);break;case 23:break;case 22:var ge=A.stateNode;A.memoizedState!==null?ge._visibility&2?is(f,A,T,G,u):_o(f,A):(ge._visibility|=2,is(f,A,T,G,u)),u&&ae&2048&&gf(A.alternate,A);break;case 24:is(f,A,T,G,u),u&&ae&2048&&vf(A.alternate,A);break;default:is(f,A,T,G,u)}n=n.sibling}}function _o(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var r=t,o=n,u=o.flags;switch(o.tag){case 22:_o(r,o),u&2048&&gf(o.alternate,o);break;case 24:_o(r,o),u&2048&&vf(o.alternate,o);break;default:_o(r,o)}n=n.sibling}}var So=8192;function as(t,n,r){if(t.subtreeFlags&So)for(t=t.child;t!==null;)vg(t,n,r),t=t.sibling}function vg(t,n,r){switch(t.tag){case 26:as(t,n,r),t.flags&So&&t.memoizedState!==null&&E_(r,Mi,t.memoizedState,t.memoizedProps);break;case 5:as(t,n,r);break;case 3:case 4:var o=Mi;Mi=Jl(t.stateNode.containerInfo),as(t,n,r),Mi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=So,So=16777216,as(t,n,r),So=o):as(t,n,r));break;default:as(t,n,r)}}function xg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function yo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];Sn=o,_g(o,t)}xg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ag(t),t=t.sibling}function Ag(t){switch(t.tag){case 0:case 11:case 15:yo(t),t.flags&2048&&La(9,t,t.return);break;case 3:yo(t);break;case 12:yo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Fl(t)):yo(t);break;default:yo(t)}}function Fl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];Sn=o,_g(o,t)}xg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:La(8,n,n.return),Fl(n);break;case 22:r=n.stateNode,r._visibility&2&&(r._visibility&=-3,Fl(n));break;default:Fl(n)}t=t.sibling}}function _g(t,n){for(;Sn!==null;){var r=Sn;switch(r.tag){case 0:case 11:case 15:La(8,r,n);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var o=r.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ao(r.memoizedState.cache)}if(o=r.child,o!==null)o.return=r,Sn=o;else e:for(r=t;Sn!==null;){o=Sn;var u=o.sibling,f=o.return;if(ug(o),o===r){Sn=null;break e}if(u!==null){u.return=f,Sn=u;break e}Sn=f}}}var zA={getCacheForType:function(t){var n=wn(cn),r=n.data.get(t);return r===void 0&&(r=t(),n.data.set(t,r)),r},cacheSignal:function(){return wn(cn).controller.signal}},FA=typeof WeakMap=="function"?WeakMap:Map,Bt=0,Wt=null,xt=null,Et=0,It=0,ni=null,Ba=!1,rs=!1,xf=!1,ra=0,an=0,Na=0,Ar=0,Af=0,ii=0,ss=0,Eo=null,qn=null,_f=!1,Hl=0,Sg=0,Gl=1/0,Vl=null,Oa=null,vn=0,Pa=null,os=null,sa=0,Sf=0,yf=null,yg=null,Mo=0,Ef=null;function ai(){return(Bt&2)!==0&&Et!==0?Et&-Et:w.T!==null?Rf():tr()}function Eg(){if(ii===0)if((Et&536870912)===0||bt){var t=Ue;Ue<<=1,(Ue&3932160)===0&&(Ue=262144),ii=t}else ii=536870912;return t=ei.current,t!==null&&(t.flags|=32),ii}function jn(t,n,r){(t===Wt&&(It===2||It===9)||t.cancelPendingCommit!==null)&&(ls(t,0),Ia(t,Et,ii,!1)),Fn(t,r),((Bt&2)===0||t!==Wt)&&(t===Wt&&((Bt&2)===0&&(Ar|=r),an===4&&Ia(t,Et,ii,!1)),Pi(t))}function Mg(t,n,r){if((Bt&6)!==0)throw Error(s(327));var o=!r&&(n&127)===0&&(n&t.expiredLanes)===0||He(t,n),u=o?VA(t,n):Tf(t,n,!0),f=o;do{if(u===0){rs&&!o&&Ia(t,n,0,!1);break}else{if(r=t.current.alternate,f&&!HA(r)){u=Tf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var A=0;else A=t.pendingLanes&-536870913,A=A!==0?A:A&536870912?536870912:0;if(A!==0){n=A;e:{var T=t;u=Eo;var G=T.current.memoizedState.isDehydrated;if(G&&(ls(T,A).flags|=256),A=Tf(T,A,!1),A!==2){if(xf&&!G){T.errorRecoveryDisabledLanes|=f,Ar|=f,u=4;break e}f=qn,qn=u,f!==null&&(qn===null?qn=f:qn.push.apply(qn,f))}u=A}if(f=!1,u!==2)continue}}if(u===1){ls(t,0),Ia(t,n,0,!0);break}e:{switch(o=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ia(o,n,ii,!Ba);break e;case 2:qn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Hl+300-E(),10<u)){if(Ia(o,n,ii,!Ba),_e(o,0,!0)!==0)break e;sa=n,o.timeoutHandle=tv(Tg.bind(null,o,r,qn,Vl,_f,n,ii,Ar,ss,Ba,f,"Throttled",-0,0),u);break e}Tg(o,r,qn,Vl,_f,n,ii,Ar,ss,Ba,f,null,-0,0)}}break}while(!0);Pi(t)}function Tg(t,n,r,o,u,f,A,T,G,ae,ge,Ae,se,fe){if(t.timeoutHandle=-1,Ae=n.subtreeFlags,Ae&8192||(Ae&16785408)===16785408){Ae={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Yi},vg(n,f,Ae);var Ge=(f&62914560)===f?Hl-E():(f&4194048)===f?Sg-E():0;if(Ge=M_(Ae,Ge),Ge!==null){sa=f,t.cancelPendingCommit=Ge(Bg.bind(null,t,n,f,r,o,u,A,T,G,ge,Ae,null,se,fe)),Ia(t,f,A,!ae);return}}Bg(t,n,f,r,o,u,A,T,G)}function HA(t){for(var n=t;;){var r=n.tag;if((r===0||r===11||r===15)&&n.flags&16384&&(r=n.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var o=0;o<r.length;o++){var u=r[o],f=u.getSnapshot;u=u.value;try{if(!Jn(f(),u))return!1}catch{return!1}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ia(t,n,r,o){n&=~Af,n&=~Ar,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var f=31-ze(u),A=1<<f;o[f]=-1,u&=~A}r!==0&&Xs(t,r,n)}function kl(){return(Bt&6)===0?(To(0),!1):!0}function Mf(){if(xt!==null){if(It===0)var t=xt.return;else t=xt,ji=ur=null,Fu(t),Jr=null,so=0,t=xt;for(;t!==null;)ng(t.alternate,t),t=t.return;xt=null}}function ls(t,n){var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,s_(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),sa=0,Mf(),Wt=t,xt=r=Qi(t.current,null),Et=n,It=0,ni=null,Ba=!1,rs=He(t,n),xf=!1,ss=ii=Af=Ar=Na=an=0,qn=Eo=null,_f=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-ze(o),f=1<<u;n|=t[u],o&=~f}return ra=n,ul(),r}function bg(t,n){ft=null,w.H=mo,n===Zr||n===xl?(n=Vp(),It=3):n===Cu?(n=Vp(),It=4):It=n===tf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ni=n,xt===null&&(an=1,Ll(t,pi(n,t.current)))}function Cg(){var t=ei.current;return t===null?!0:(Et&4194048)===Et?xi===null:(Et&62914560)===Et||(Et&536870912)!==0?t===xi:!1}function wg(){var t=w.H;return w.H=mo,t===null?mo:t}function Rg(){var t=w.A;return w.A=zA,t}function Xl(){an=4,Ba||(Et&4194048)!==Et&&ei.current!==null||(rs=!0),(Na&134217727)===0&&(Ar&134217727)===0||Wt===null||Ia(Wt,Et,ii,!1)}function Tf(t,n,r){var o=Bt;Bt|=2;var u=wg(),f=Rg();(Wt!==t||Et!==n)&&(Vl=null,ls(t,n)),n=!1;var A=an;e:do try{if(It!==0&&xt!==null){var T=xt,G=ni;switch(It){case 8:Mf(),A=6;break e;case 3:case 2:case 9:case 6:ei.current===null&&(n=!0);var ae=It;if(It=0,ni=null,cs(t,T,G,ae),r&&rs){A=0;break e}break;default:ae=It,It=0,ni=null,cs(t,T,G,ae)}}GA(),A=an;break}catch(ge){bg(t,ge)}while(!0);return n&&t.shellSuspendCounter++,ji=ur=null,Bt=o,w.H=u,w.A=f,xt===null&&(Wt=null,Et=0,ul()),A}function GA(){for(;xt!==null;)Dg(xt)}function VA(t,n){var r=Bt;Bt|=2;var o=wg(),u=Rg();Wt!==t||Et!==n?(Vl=null,Gl=E()+500,ls(t,n)):rs=He(t,n);e:do try{if(It!==0&&xt!==null){n=xt;var f=ni;t:switch(It){case 1:It=0,ni=null,cs(t,n,f,1);break;case 2:case 9:if(Hp(f)){It=0,ni=null,Ug(n);break}n=function(){It!==2&&It!==9||Wt!==t||(It=7),Pi(t)},f.then(n,n);break e;case 3:It=7;break e;case 4:It=5;break e;case 7:Hp(f)?(It=0,ni=null,Ug(n)):(It=0,ni=null,cs(t,n,f,7));break;case 5:var A=null;switch(xt.tag){case 26:A=xt.memoizedState;case 5:case 27:var T=xt;if(A?gv(A):T.stateNode.complete){It=0,ni=null;var G=T.sibling;if(G!==null)xt=G;else{var ae=T.return;ae!==null?(xt=ae,Yl(ae)):xt=null}break t}}It=0,ni=null,cs(t,n,f,5);break;case 6:It=0,ni=null,cs(t,n,f,6);break;case 8:Mf(),an=6;break e;default:throw Error(s(462))}}kA();break}catch(ge){bg(t,ge)}while(!0);return ji=ur=null,w.H=o,w.A=u,Bt=r,xt!==null?0:(Wt=null,Et=0,ul(),an)}function kA(){for(;xt!==null&&!$t();)Dg(xt)}function Dg(t){var n=eg(t.alternate,t,ra);t.memoizedProps=t.pendingProps,n===null?Yl(t):xt=n}function Ug(t){var n=t,r=n.alternate;switch(n.tag){case 15:case 0:n=qm(r,n,n.pendingProps,n.type,void 0,Et);break;case 11:n=qm(r,n,n.pendingProps,n.type.render,n.ref,Et);break;case 5:Fu(n);default:ng(r,n),n=xt=Rp(n,ra),n=eg(r,n,ra)}t.memoizedProps=t.pendingProps,n===null?Yl(t):xt=n}function cs(t,n,r,o){ji=ur=null,Fu(n),Jr=null,so=0;var u=n.return;try{if(UA(t,u,n,r,Et)){an=1,Ll(t,pi(r,t.current)),xt=null;return}}catch(f){if(u!==null)throw xt=u,f;an=1,Ll(t,pi(r,t.current)),xt=null;return}n.flags&32768?(bt||o===1?t=!0:rs||(Et&536870912)!==0?t=!1:(Ba=t=!0,(o===2||o===9||o===3||o===6)&&(o=ei.current,o!==null&&o.tag===13&&(o.flags|=16384))),Lg(n,t)):Yl(n)}function Yl(t){var n=t;do{if((n.flags&32768)!==0){Lg(n,Ba);return}t=n.return;var r=NA(n.alternate,n,ra);if(r!==null){xt=r;return}if(n=n.sibling,n!==null){xt=n;return}xt=n=t}while(n!==null);an===0&&(an=5)}function Lg(t,n){do{var r=OA(t.alternate,t);if(r!==null){r.flags&=32767,xt=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!n&&(t=t.sibling,t!==null)){xt=t;return}xt=t=r}while(t!==null);an=6,xt=null}function Bg(t,n,r,o,u,f,A,T,G){t.cancelPendingCommit=null;do Wl();while(vn!==0);if((Bt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=hu,hi(t,r,f,A,T,G),t===Wt&&(xt=Wt=null,Et=0),os=n,Pa=t,sa=r,Sf=f,yf=u,yg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,QA(me,function(){return zg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=w.T,w.T=null,u=z.p,z.p=2,A=Bt,Bt|=4;try{PA(t,n,r)}finally{Bt=A,z.p=u,w.T=o}}vn=1,Ng(),Og(),Pg()}}function Ng(){if(vn===1){vn=0;var t=Pa,n=os,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=w.T,w.T=null;var o=z.p;z.p=2;var u=Bt;Bt|=4;try{pg(n,t);var f=If,A=_p(t.containerInfo),T=f.focusedElem,G=f.selectionRange;if(A!==T&&T&&T.ownerDocument&&Ap(T.ownerDocument.documentElement,T)){if(G!==null&&ou(T)){var ae=G.start,ge=G.end;if(ge===void 0&&(ge=ae),"selectionStart"in T)T.selectionStart=ae,T.selectionEnd=Math.min(ge,T.value.length);else{var Ae=T.ownerDocument||document,se=Ae&&Ae.defaultView||window;if(se.getSelection){var fe=se.getSelection(),Ge=T.textContent.length,it=Math.min(G.start,Ge),Gt=G.end===void 0?it:Math.min(G.end,Ge);!fe.extend&&it>Gt&&(A=Gt,Gt=it,it=A);var Z=xp(T,it),W=xp(T,Gt);if(Z&&W&&(fe.rangeCount!==1||fe.anchorNode!==Z.node||fe.anchorOffset!==Z.offset||fe.focusNode!==W.node||fe.focusOffset!==W.offset)){var ie=Ae.createRange();ie.setStart(Z.node,Z.offset),fe.removeAllRanges(),it>Gt?(fe.addRange(ie),fe.extend(W.node,W.offset)):(ie.setEnd(W.node,W.offset),fe.addRange(ie))}}}}for(Ae=[],fe=T;fe=fe.parentNode;)fe.nodeType===1&&Ae.push({element:fe,left:fe.scrollLeft,top:fe.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<Ae.length;T++){var xe=Ae[T];xe.element.scrollLeft=xe.left,xe.element.scrollTop=xe.top}}ac=!!Pf,If=Pf=null}finally{Bt=u,z.p=o,w.T=r}}t.current=n,vn=2}}function Og(){if(vn===2){vn=0;var t=Pa,n=os,r=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||r){r=w.T,w.T=null;var o=z.p;z.p=2;var u=Bt;Bt|=4;try{cg(t,n.alternate,n)}finally{Bt=u,z.p=o,w.T=r}}vn=3}}function Pg(){if(vn===4||vn===3){vn=0,N();var t=Pa,n=os,r=sa,o=yg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?vn=5:(vn=0,os=Pa=null,Ig(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Oa=null),Or(r),n=n.stateNode,Re&&typeof Re.onCommitFiberRoot=="function")try{Re.onCommitFiberRoot(Te,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=w.T,u=z.p,z.p=2,w.T=null;try{for(var f=t.onRecoverableError,A=0;A<o.length;A++){var T=o[A];f(T.value,{componentStack:T.stack})}}finally{w.T=n,z.p=u}}(sa&3)!==0&&Wl(),Pi(t),u=t.pendingLanes,(r&261930)!==0&&(u&42)!==0?t===Ef?Mo++:(Mo=0,Ef=t):Mo=0,To(0)}}function Ig(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,ao(n)))}function Wl(){return Ng(),Og(),Pg(),zg()}function zg(){if(vn!==5)return!1;var t=Pa,n=Sf;Sf=0;var r=Or(sa),o=w.T,u=z.p;try{z.p=32>r?32:r,w.T=null,r=yf,yf=null;var f=Pa,A=sa;if(vn=0,os=Pa=null,sa=0,(Bt&6)!==0)throw Error(s(331));var T=Bt;if(Bt|=4,Ag(f.current),gg(f,f.current,A,r),Bt=T,To(0,!1),Re&&typeof Re.onPostCommitFiberRoot=="function")try{Re.onPostCommitFiberRoot(Te,f)}catch{}return!0}finally{z.p=u,w.T=o,Ig(t,n)}}function Fg(t,n,r){n=pi(r,n),n=ef(t.stateNode,n,2),t=Ra(t,n,2),t!==null&&(Fn(t,2),Pi(t))}function zt(t,n,r){if(t.tag===3)Fg(t,t,r);else for(;n!==null;){if(n.tag===3){Fg(n,t,r);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Oa===null||!Oa.has(o))){t=pi(r,t),r=Hm(2),o=Ra(n,r,2),o!==null&&(Gm(r,o,n,t),Fn(o,2),Pi(o));break}}n=n.return}}function bf(t,n,r){var o=t.pingCache;if(o===null){o=t.pingCache=new FA;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(r)||(xf=!0,u.add(r),t=XA.bind(null,t,n,r),n.then(t,t))}function XA(t,n,r){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,Wt===t&&(Et&r)===r&&(an===4||an===3&&(Et&62914560)===Et&&300>E()-Hl?(Bt&2)===0&&ls(t,0):Af|=r,ss===Et&&(ss=0)),Pi(t)}function Hg(t,n){n===0&&(n=Pt()),t=or(t,n),t!==null&&(Fn(t,n),Pi(t))}function YA(t){var n=t.memoizedState,r=0;n!==null&&(r=n.retryLane),Hg(t,r)}function WA(t,n){var r=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(r=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Hg(t,r)}function QA(t,n){return ot(t,n)}var Ql=null,us=null,Cf=!1,ql=!1,wf=!1,za=0;function Pi(t){t!==us&&t.next===null&&(us===null?Ql=us=t:us=us.next=t),ql=!0,Cf||(Cf=!0,jA())}function To(t,n){if(!wf&&ql){wf=!0;do for(var r=!1,o=Ql;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var A=o.suspendedLanes,T=o.pingedLanes;f=(1<<31-ze(42|t)+1)-1,f&=u&~(A&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(r=!0,Xg(o,f))}else f=Et,f=_e(o,o===Wt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||He(o,f)||(r=!0,Xg(o,f));o=o.next}while(r);wf=!1}}function qA(){Gg()}function Gg(){ql=Cf=!1;var t=0;za!==0&&r_()&&(t=za);for(var n=E(),r=null,o=Ql;o!==null;){var u=o.next,f=Vg(o,n);f===0?(o.next=null,r===null?Ql=u:r.next=u,u===null&&(us=r)):(r=o,(t!==0||(f&3)!==0)&&(ql=!0)),o=u}vn!==0&&vn!==5||To(t),za!==0&&(za=0)}function Vg(t,n){for(var r=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var A=31-ze(f),T=1<<A,G=u[A];G===-1?((T&r)===0||(T&o)!==0)&&(u[A]=st(T,n)):G<=n&&(t.expiredLanes|=T),f&=~T}if(n=Wt,r=Et,r=_e(t,t===n?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,r===0||t===n&&(It===2||It===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&tn(o),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||He(t,r)){if(n=r&-r,n===t.callbackPriority)return n;switch(o!==null&&tn(o),Or(r)){case 2:case 8:r=Ee;break;case 32:r=me;break;case 268435456:r=we;break;default:r=me}return o=kg.bind(null,t),r=ot(r,o),t.callbackPriority=n,t.callbackNode=r,n}return o!==null&&o!==null&&tn(o),t.callbackPriority=2,t.callbackNode=null,2}function kg(t,n){if(vn!==0&&vn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if(Wl()&&t.callbackNode!==r)return null;var o=Et;return o=_e(t,t===Wt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Mg(t,o,n),Vg(t,E()),t.callbackNode!=null&&t.callbackNode===r?kg.bind(null,t):null)}function Xg(t,n){if(Wl())return null;Mg(t,n,!0)}function jA(){o_(function(){(Bt&6)!==0?ot(ve,qA):Gg()})}function Rf(){if(za===0){var t=jr;t===0&&(t=be,be<<=1,(be&261888)===0&&(be=256)),za=t}return za}function Yg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:nl(""+t)}function Wg(t,n){var r=n.ownerDocument.createElement("input");return r.name=n.name,r.value=n.value,t.id&&r.setAttribute("form",t.id),n.parentNode.insertBefore(r,n),t=new FormData(t),r.parentNode.removeChild(r),t}function KA(t,n,r,o,u){if(n==="submit"&&r&&r.stateNode===u){var f=Yg((u[Tn]||null).action),A=o.submitter;A&&(n=(n=A[Tn]||null)?Yg(n.formAction):A.getAttribute("formAction"),n!==null&&(f=n,A=null));var T=new sl("action","action",null,o,u);t.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(za!==0){var G=A?Wg(u,A):new FormData(u);qu(r,{pending:!0,data:G,method:u.method,action:f},null,G)}}else typeof f=="function"&&(T.preventDefault(),G=A?Wg(u,A):new FormData(u),qu(r,{pending:!0,data:G,method:u.method,action:f},f,G))},currentTarget:u}]})}}for(var Df=0;Df<fu.length;Df++){var Uf=fu[Df],ZA=Uf.toLowerCase(),JA=Uf[0].toUpperCase()+Uf.slice(1);Ei(ZA,"on"+JA)}Ei(Ep,"onAnimationEnd"),Ei(Mp,"onAnimationIteration"),Ei(Tp,"onAnimationStart"),Ei("dblclick","onDoubleClick"),Ei("focusin","onFocus"),Ei("focusout","onBlur"),Ei(pA,"onTransitionRun"),Ei(mA,"onTransitionStart"),Ei(gA,"onTransitionCancel"),Ei(bp,"onTransitionEnd"),$e("onMouseEnter",["mouseout","mouseover"]),$e("onMouseLeave",["mouseout","mouseover"]),$e("onPointerEnter",["pointerout","pointerover"]),$e("onPointerLeave",["pointerout","pointerover"]),Ie("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ie("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ie("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ie("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ie("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ie("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$A=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bo));function Qg(t,n){n=(n&4)!==0;for(var r=0;r<t.length;r++){var o=t[r],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var A=o.length-1;0<=A;A--){var T=o[A],G=T.instance,ae=T.currentTarget;if(T=T.listener,G!==f&&u.isPropagationStopped())break e;f=T,u.currentTarget=ae;try{f(u)}catch(ge){cl(ge)}u.currentTarget=null,f=G}else for(A=0;A<o.length;A++){if(T=o[A],G=T.instance,ae=T.currentTarget,T=T.listener,G!==f&&u.isPropagationStopped())break e;f=T,u.currentTarget=ae;try{f(u)}catch(ge){cl(ge)}u.currentTarget=null,f=G}}}}function At(t,n){var r=n[Ws];r===void 0&&(r=n[Ws]=new Set);var o=t+"__bubble";r.has(o)||(qg(n,t,2,!1),r.add(o))}function Lf(t,n,r){var o=0;n&&(o|=4),qg(r,t,o,n)}var jl="_reactListening"+Math.random().toString(36).slice(2);function Bf(t){if(!t[jl]){t[jl]=!0,Be.forEach(function(r){r!=="selectionchange"&&($A.has(r)||Lf(r,!1,t),Lf(r,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[jl]||(n[jl]=!0,Lf("selectionchange",!1,n))}}function qg(t,n,r,o){switch(Ev(n)){case 2:var u=C_;break;case 8:u=w_;break;default:u=qf}r=u.bind(null,n,r,t),u=void 0,!Jc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,r,{capture:!0,passive:u}):t.addEventListener(n,r,!0):u!==void 0?t.addEventListener(n,r,{passive:u}):t.addEventListener(n,r,!1)}function Nf(t,n,r,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var A=o.tag;if(A===3||A===4){var T=o.stateNode.containerInfo;if(T===u)break;if(A===4)for(A=o.return;A!==null;){var G=A.tag;if((G===3||G===4)&&A.stateNode.containerInfo===u)return;A=A.return}for(;T!==null;){if(A=j(T),A===null)return;if(G=A.tag,G===5||G===6||G===26||G===27){o=f=A;continue e}T=T.parentNode}}o=o.return}$d(function(){var ae=f,ge=Kc(r),Ae=[];e:{var se=Cp.get(t);if(se!==void 0){var fe=sl,Ge=t;switch(t){case"keypress":if(al(r)===0)break e;case"keydown":case"keyup":fe=Wx;break;case"focusin":Ge="focus",fe=nu;break;case"focusout":Ge="blur",fe=nu;break;case"beforeblur":case"afterblur":fe=nu;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":fe=np;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":fe=Nx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":fe=jx;break;case Ep:case Mp:case Tp:fe=Ix;break;case bp:fe=Zx;break;case"scroll":case"scrollend":fe=Lx;break;case"wheel":fe=$x;break;case"copy":case"cut":case"paste":fe=Fx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":fe=ap;break;case"toggle":case"beforetoggle":fe=tA}var it=(n&4)!==0,Gt=!it&&(t==="scroll"||t==="scrollend"),Z=it?se!==null?se+"Capture":null:se;it=[];for(var W=ae,ie;W!==null;){var xe=W;if(ie=xe.stateNode,xe=xe.tag,xe!==5&&xe!==26&&xe!==27||ie===null||Z===null||(xe=Qs(W,Z),xe!=null&&it.push(Co(W,xe,ie))),Gt)break;W=W.return}0<it.length&&(se=new fe(se,Ge,null,r,ge),Ae.push({event:se,listeners:it}))}}if((n&7)===0){e:{if(se=t==="mouseover"||t==="pointerover",fe=t==="mouseout"||t==="pointerout",se&&r!==jc&&(Ge=r.relatedTarget||r.fromElement)&&(j(Ge)||Ge[Sa]))break e;if((fe||se)&&(se=ge.window===ge?ge:(se=ge.ownerDocument)?se.defaultView||se.parentWindow:window,fe?(Ge=r.relatedTarget||r.toElement,fe=ae,Ge=Ge?j(Ge):null,Ge!==null&&(Gt=c(Ge),it=Ge.tag,Ge!==Gt||it!==5&&it!==27&&it!==6)&&(Ge=null)):(fe=null,Ge=ae),fe!==Ge)){if(it=np,xe="onMouseLeave",Z="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(it=ap,xe="onPointerLeave",Z="onPointerEnter",W="pointer"),Gt=fe==null?se:le(fe),ie=Ge==null?se:le(Ge),se=new it(xe,W+"leave",fe,r,ge),se.target=Gt,se.relatedTarget=ie,xe=null,j(ge)===ae&&(it=new it(Z,W+"enter",Ge,r,ge),it.target=ie,it.relatedTarget=Gt,xe=it),Gt=xe,fe&&Ge)t:{for(it=e_,Z=fe,W=Ge,ie=0,xe=Z;xe;xe=it(xe))ie++;xe=0;for(var tt=W;tt;tt=it(tt))xe++;for(;0<ie-xe;)Z=it(Z),ie--;for(;0<xe-ie;)W=it(W),xe--;for(;ie--;){if(Z===W||W!==null&&Z===W.alternate){it=Z;break t}Z=it(Z),W=it(W)}it=null}else it=null;fe!==null&&jg(Ae,se,fe,it,!1),Ge!==null&&Gt!==null&&jg(Ae,Gt,Ge,it,!0)}}e:{if(se=ae?le(ae):window,fe=se.nodeName&&se.nodeName.toLowerCase(),fe==="select"||fe==="input"&&se.type==="file")var Rt=hp;else if(up(se))if(dp)Rt=fA;else{Rt=cA;var Qe=lA}else fe=se.nodeName,!fe||fe.toLowerCase()!=="input"||se.type!=="checkbox"&&se.type!=="radio"?ae&&qc(ae.elementType)&&(Rt=hp):Rt=uA;if(Rt&&(Rt=Rt(t,ae))){fp(Ae,Rt,r,ge);break e}Qe&&Qe(t,se,ae),t==="focusout"&&ae&&se.type==="number"&&ae.memoizedProps.value!=null&&gn(se,"number",se.value)}switch(Qe=ae?le(ae):window,t){case"focusin":(up(Qe)||Qe.contentEditable==="true")&&(Gr=Qe,lu=ae,to=null);break;case"focusout":to=lu=Gr=null;break;case"mousedown":cu=!0;break;case"contextmenu":case"mouseup":case"dragend":cu=!1,Sp(Ae,r,ge);break;case"selectionchange":if(dA)break;case"keydown":case"keyup":Sp(Ae,r,ge)}var ht;if(au)e:{switch(t){case"compositionstart":var Mt="onCompositionStart";break e;case"compositionend":Mt="onCompositionEnd";break e;case"compositionupdate":Mt="onCompositionUpdate";break e}Mt=void 0}else Hr?lp(t,r)&&(Mt="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(Mt="onCompositionStart");Mt&&(rp&&r.locale!=="ko"&&(Hr||Mt!=="onCompositionStart"?Mt==="onCompositionEnd"&&Hr&&(ht=ep()):(ya=ge,$c="value"in ya?ya.value:ya.textContent,Hr=!0)),Qe=Kl(ae,Mt),0<Qe.length&&(Mt=new ip(Mt,t,null,r,ge),Ae.push({event:Mt,listeners:Qe}),ht?Mt.data=ht:(ht=cp(r),ht!==null&&(Mt.data=ht)))),(ht=iA?aA(t,r):rA(t,r))&&(Mt=Kl(ae,"onBeforeInput"),0<Mt.length&&(Qe=new ip("onBeforeInput","beforeinput",null,r,ge),Ae.push({event:Qe,listeners:Mt}),Qe.data=ht)),KA(Ae,t,ae,r,ge)}Qg(Ae,n)})}function Co(t,n,r){return{instance:t,listener:n,currentTarget:r}}function Kl(t,n){for(var r=n+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Qs(t,r),u!=null&&o.unshift(Co(t,u,f)),u=Qs(t,n),u!=null&&o.push(Co(t,u,f))),t.tag===3)return o;t=t.return}return[]}function e_(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function jg(t,n,r,o,u){for(var f=n._reactName,A=[];r!==null&&r!==o;){var T=r,G=T.alternate,ae=T.stateNode;if(T=T.tag,G!==null&&G===o)break;T!==5&&T!==26&&T!==27||ae===null||(G=ae,u?(ae=Qs(r,f),ae!=null&&A.unshift(Co(r,ae,G))):u||(ae=Qs(r,f),ae!=null&&A.push(Co(r,ae,G)))),r=r.return}A.length!==0&&t.push({event:n,listeners:A})}var t_=/\r\n?/g,n_=/\u0000|\uFFFD/g;function Kg(t){return(typeof t=="string"?t:""+t).replace(t_,`
`).replace(n_,"")}function Zg(t,n){return n=Kg(n),Kg(t)===n}function Ht(t,n,r,o,u,f){switch(r){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Ir(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Ir(t,""+o);break;case"className":Ot(t,"class",o);break;case"tabIndex":Ot(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ot(t,r,o);break;case"style":Zd(t,o,f);break;case"data":if(n!=="object"){Ot(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||r!=="href")){t.removeAttribute(r);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=nl(""+o),t.setAttribute(r,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(r==="formAction"?(n!=="input"&&Ht(t,n,"name",u.name,u,null),Ht(t,n,"formEncType",u.formEncType,u,null),Ht(t,n,"formMethod",u.formMethod,u,null),Ht(t,n,"formTarget",u.formTarget,u,null)):(Ht(t,n,"encType",u.encType,u,null),Ht(t,n,"method",u.method,u,null),Ht(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=nl(""+o),t.setAttribute(r,o);break;case"onClick":o!=null&&(t.onclick=Yi);break;case"onScroll":o!=null&&At("scroll",t);break;case"onScrollEnd":o!=null&&At("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(r=o.__html,r!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=r}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}r=nl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""+o):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":o===!0?t.setAttribute(r,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,o):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(r,o):t.removeAttribute(r);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(r):t.setAttribute(r,o);break;case"popover":At("beforetoggle",t),At("toggle",t),Yt(t,"popover",o);break;case"xlinkActuate":vt(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":vt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":vt(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":vt(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":vt(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":vt(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":vt(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":vt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":vt(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Yt(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=Dx.get(r)||r,Yt(t,r,o))}}function Of(t,n,r,o,u,f){switch(r){case"style":Zd(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(r=o.__html,r!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=r}}break;case"children":typeof o=="string"?Ir(t,o):(typeof o=="number"||typeof o=="bigint")&&Ir(t,""+o);break;case"onScroll":o!=null&&At("scroll",t);break;case"onScrollEnd":o!=null&&At("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Yi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ve.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(u=r.endsWith("Capture"),n=r.slice(2,u?r.length-7:void 0),f=t[Tn]||null,f=f!=null?f[r]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(n,o,u);break e}r in t?t[r]=o:o===!0?t.setAttribute(r,""):Yt(t,r,o)}}}function Dn(t,n,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":At("error",t),At("load",t);var o=!1,u=!1,f;for(f in r)if(r.hasOwnProperty(f)){var A=r[f];if(A!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ht(t,n,f,A,r,null)}}u&&Ht(t,n,"srcSet",r.srcSet,r,null),o&&Ht(t,n,"src",r.src,r,null);return;case"input":At("invalid",t);var T=f=A=u=null,G=null,ae=null;for(o in r)if(r.hasOwnProperty(o)){var ge=r[o];if(ge!=null)switch(o){case"name":u=ge;break;case"type":A=ge;break;case"checked":G=ge;break;case"defaultChecked":ae=ge;break;case"value":f=ge;break;case"defaultValue":T=ge;break;case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(s(137,n));break;default:Ht(t,n,o,ge,r,null)}}Hn(t,f,T,G,ae,A,u,!1);return;case"select":At("invalid",t),o=A=f=null;for(u in r)if(r.hasOwnProperty(u)&&(T=r[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":A=T;break;case"multiple":o=T;default:Ht(t,n,u,T,r,null)}n=f,r=A,t.multiple=!!o,n!=null?rn(t,!!o,n,!1):r!=null&&rn(t,!!o,r,!0);return;case"textarea":At("invalid",t),f=u=o=null;for(A in r)if(r.hasOwnProperty(A)&&(T=r[A],T!=null))switch(A){case"value":o=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Ht(t,n,A,T,r,null)}Li(t,o,u,f);return;case"option":for(G in r)if(r.hasOwnProperty(G)&&(o=r[G],o!=null))switch(G){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ht(t,n,G,o,r,null)}return;case"dialog":At("beforetoggle",t),At("toggle",t),At("cancel",t),At("close",t);break;case"iframe":case"object":At("load",t);break;case"video":case"audio":for(o=0;o<bo.length;o++)At(bo[o],t);break;case"image":At("error",t),At("load",t);break;case"details":At("toggle",t);break;case"embed":case"source":case"link":At("error",t),At("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ae in r)if(r.hasOwnProperty(ae)&&(o=r[ae],o!=null))switch(ae){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ht(t,n,ae,o,r,null)}return;default:if(qc(n)){for(ge in r)r.hasOwnProperty(ge)&&(o=r[ge],o!==void 0&&Of(t,n,ge,o,r,void 0));return}}for(T in r)r.hasOwnProperty(T)&&(o=r[T],o!=null&&Ht(t,n,T,o,r,null))}function i_(t,n,r,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,A=null,T=null,G=null,ae=null,ge=null;for(fe in r){var Ae=r[fe];if(r.hasOwnProperty(fe)&&Ae!=null)switch(fe){case"checked":break;case"value":break;case"defaultValue":G=Ae;default:o.hasOwnProperty(fe)||Ht(t,n,fe,null,o,Ae)}}for(var se in o){var fe=o[se];if(Ae=r[se],o.hasOwnProperty(se)&&(fe!=null||Ae!=null))switch(se){case"type":f=fe;break;case"name":u=fe;break;case"checked":ae=fe;break;case"defaultChecked":ge=fe;break;case"value":A=fe;break;case"defaultValue":T=fe;break;case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(s(137,n));break;default:fe!==Ae&&Ht(t,n,se,fe,o,Ae)}}Ln(t,A,T,G,ae,ge,f,u);return;case"select":fe=A=T=se=null;for(f in r)if(G=r[f],r.hasOwnProperty(f)&&G!=null)switch(f){case"value":break;case"multiple":fe=G;default:o.hasOwnProperty(f)||Ht(t,n,f,null,o,G)}for(u in o)if(f=o[u],G=r[u],o.hasOwnProperty(u)&&(f!=null||G!=null))switch(u){case"value":se=f;break;case"defaultValue":T=f;break;case"multiple":A=f;default:f!==G&&Ht(t,n,u,f,o,G)}n=T,r=A,o=fe,se!=null?rn(t,!!r,se,!1):!!o!=!!r&&(n!=null?rn(t,!!r,n,!0):rn(t,!!r,r?[]:"",!1));return;case"textarea":fe=se=null;for(T in r)if(u=r[T],r.hasOwnProperty(T)&&u!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ht(t,n,T,null,o,u)}for(A in o)if(u=o[A],f=r[A],o.hasOwnProperty(A)&&(u!=null||f!=null))switch(A){case"value":se=u;break;case"defaultValue":fe=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Ht(t,n,A,u,o,f)}Pr(t,se,fe);return;case"option":for(var Ge in r)if(se=r[Ge],r.hasOwnProperty(Ge)&&se!=null&&!o.hasOwnProperty(Ge))switch(Ge){case"selected":t.selected=!1;break;default:Ht(t,n,Ge,null,o,se)}for(G in o)if(se=o[G],fe=r[G],o.hasOwnProperty(G)&&se!==fe&&(se!=null||fe!=null))switch(G){case"selected":t.selected=se&&typeof se!="function"&&typeof se!="symbol";break;default:Ht(t,n,G,se,o,fe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var it in r)se=r[it],r.hasOwnProperty(it)&&se!=null&&!o.hasOwnProperty(it)&&Ht(t,n,it,null,o,se);for(ae in o)if(se=o[ae],fe=r[ae],o.hasOwnProperty(ae)&&se!==fe&&(se!=null||fe!=null))switch(ae){case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(s(137,n));break;default:Ht(t,n,ae,se,o,fe)}return;default:if(qc(n)){for(var Gt in r)se=r[Gt],r.hasOwnProperty(Gt)&&se!==void 0&&!o.hasOwnProperty(Gt)&&Of(t,n,Gt,void 0,o,se);for(ge in o)se=o[ge],fe=r[ge],!o.hasOwnProperty(ge)||se===fe||se===void 0&&fe===void 0||Of(t,n,ge,se,o,fe);return}}for(var Z in r)se=r[Z],r.hasOwnProperty(Z)&&se!=null&&!o.hasOwnProperty(Z)&&Ht(t,n,Z,null,o,se);for(Ae in o)se=o[Ae],fe=r[Ae],!o.hasOwnProperty(Ae)||se===fe||se==null&&fe==null||Ht(t,n,Ae,se,o,fe)}function Jg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function a_(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,r=performance.getEntriesByType("resource"),o=0;o<r.length;o++){var u=r[o],f=u.transferSize,A=u.initiatorType,T=u.duration;if(f&&T&&Jg(A)){for(A=0,T=u.responseEnd,o+=1;o<r.length;o++){var G=r[o],ae=G.startTime;if(ae>T)break;var ge=G.transferSize,Ae=G.initiatorType;ge&&Jg(Ae)&&(G=G.responseEnd,A+=ge*(G<T?1:(T-ae)/(G-ae)))}if(--o,n+=8*(f+A)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Pf=null,If=null;function Zl(t){return t.nodeType===9?t:t.ownerDocument}function $g(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ev(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function zf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ff=null;function r_(){var t=window.event;return t&&t.type==="popstate"?t===Ff?!1:(Ff=t,!0):(Ff=null,!1)}var tv=typeof setTimeout=="function"?setTimeout:void 0,s_=typeof clearTimeout=="function"?clearTimeout:void 0,nv=typeof Promise=="function"?Promise:void 0,o_=typeof queueMicrotask=="function"?queueMicrotask:typeof nv<"u"?function(t){return nv.resolve(null).then(t).catch(l_)}:tv;function l_(t){setTimeout(function(){throw t})}function Fa(t){return t==="head"}function iv(t,n){var r=n,o=0;do{var u=r.nextSibling;if(t.removeChild(r),u&&u.nodeType===8)if(r=u.data,r==="/$"||r==="/&"){if(o===0){t.removeChild(u),ps(n);return}o--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")o++;else if(r==="html")wo(t.ownerDocument.documentElement);else if(r==="head"){r=t.ownerDocument.head,wo(r);for(var f=r.firstChild;f;){var A=f.nextSibling,T=f.nodeName;f[nr]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||r.removeChild(f),f=A}}else r==="body"&&wo(t.ownerDocument.body);r=u}while(r);ps(n)}function av(t,n){var r=t;t=0;do{var o=r.nextSibling;if(r.nodeType===1?n?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(n?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(t===0)break;t--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||t++;r=o}while(r)}function Hf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var r=n;switch(n=n.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Hf(r),C(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function c_(t,n,r,o){for(;t.nodeType===1;){var u=r;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[nr])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=Ai(t.nextSibling),t===null)break}return null}function u_(t,n,r){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=Ai(t.nextSibling),t===null))return null;return t}function rv(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ai(t.nextSibling),t===null))return null;return t}function Gf(t){return t.data==="$?"||t.data==="$~"}function Vf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function f_(t,n){var r=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||r.readyState!=="loading")n();else{var o=function(){n(),r.removeEventListener("DOMContentLoaded",o)};r.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Ai(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var kf=null;function sv(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"||r==="/&"){if(n===0)return Ai(t.nextSibling);n--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||n++}t=t.nextSibling}return null}function ov(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(n===0)return t;n--}else r!=="/$"&&r!=="/&"||n++}t=t.previousSibling}return null}function lv(t,n,r){switch(n=Zl(r),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function wo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);C(t)}var _i=new Map,cv=new Set;function Jl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var oa=z.d;z.d={f:h_,r:d_,D:p_,C:m_,L:g_,m:v_,X:A_,S:x_,M:__};function h_(){var t=oa.f(),n=kl();return t||n}function d_(t){var n=oe(t);n!==null&&n.tag===5&&n.type==="form"?bm(n):oa.r(t)}var fs=typeof document>"u"?null:document;function uv(t,n,r){var o=fs;if(o&&typeof n=="string"&&n){var u=yt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof r=="string"&&(u+='[crossorigin="'+r+'"]'),cv.has(u)||(cv.add(u),t={rel:t,crossOrigin:r,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Dn(n,"link",t),Se(n),o.head.appendChild(n)))}}function p_(t){oa.D(t),uv("dns-prefetch",t,null)}function m_(t,n){oa.C(t,n),uv("preconnect",t,n)}function g_(t,n,r){oa.L(t,n,r);var o=fs;if(o&&t&&n){var u='link[rel="preload"][as="'+yt(n)+'"]';n==="image"&&r&&r.imageSrcSet?(u+='[imagesrcset="'+yt(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(u+='[imagesizes="'+yt(r.imageSizes)+'"]')):u+='[href="'+yt(t)+'"]';var f=u;switch(n){case"style":f=hs(t);break;case"script":f=ds(t)}_i.has(f)||(t=g({rel:"preload",href:n==="image"&&r&&r.imageSrcSet?void 0:t,as:n},r),_i.set(f,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Ro(f))||n==="script"&&o.querySelector(Do(f))||(n=o.createElement("link"),Dn(n,"link",t),Se(n),o.head.appendChild(n)))}}function v_(t,n){oa.m(t,n);var r=fs;if(r&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+yt(o)+'"][href="'+yt(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ds(t)}if(!_i.has(f)&&(t=g({rel:"modulepreload",href:t},n),_i.set(f,t),r.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Do(f)))return}o=r.createElement("link"),Dn(o,"link",t),Se(o),r.head.appendChild(o)}}}function x_(t,n,r){oa.S(t,n,r);var o=fs;if(o&&t){var u=$(o).hoistableStyles,f=hs(t);n=n||"default";var A=u.get(f);if(!A){var T={loading:0,preload:null};if(A=o.querySelector(Ro(f)))T.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},r),(r=_i.get(f))&&Xf(t,r);var G=A=o.createElement("link");Se(G),Dn(G,"link",t),G._p=new Promise(function(ae,ge){G.onload=ae,G.onerror=ge}),G.addEventListener("load",function(){T.loading|=1}),G.addEventListener("error",function(){T.loading|=2}),T.loading|=4,$l(A,n,o)}A={type:"stylesheet",instance:A,count:1,state:T},u.set(f,A)}}}function A_(t,n){oa.X(t,n);var r=fs;if(r&&t){var o=$(r).hoistableScripts,u=ds(t),f=o.get(u);f||(f=r.querySelector(Do(u)),f||(t=g({src:t,async:!0},n),(n=_i.get(u))&&Yf(t,n),f=r.createElement("script"),Se(f),Dn(f,"link",t),r.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function __(t,n){oa.M(t,n);var r=fs;if(r&&t){var o=$(r).hoistableScripts,u=ds(t),f=o.get(u);f||(f=r.querySelector(Do(u)),f||(t=g({src:t,async:!0,type:"module"},n),(n=_i.get(u))&&Yf(t,n),f=r.createElement("script"),Se(f),Dn(f,"link",t),r.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function fv(t,n,r,o){var u=(u=ne.current)?Jl(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(n=hs(r.href),r=$(u).hoistableStyles,o=r.get(n),o||(o={type:"style",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=hs(r.href);var f=$(u).hoistableStyles,A=f.get(t);if(A||(u=u.ownerDocument||u,A={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,A),(f=u.querySelector(Ro(t)))&&!f._p&&(A.instance=f,A.state.loading=5),_i.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},_i.set(t,r),f||S_(u,t,r,A.state))),n&&o===null)throw Error(s(528,""));return A}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=r.async,r=r.src,typeof r=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ds(r),r=$(u).hoistableScripts,o=r.get(n),o||(o={type:"script",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function hs(t){return'href="'+yt(t)+'"'}function Ro(t){return'link[rel="stylesheet"]['+t+"]"}function hv(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function S_(t,n,r,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Dn(n,"link",r),Se(n),t.head.appendChild(n))}function ds(t){return'[src="'+yt(t)+'"]'}function Do(t){return"script[async]"+t}function dv(t,n,r){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+yt(r.href)+'"]');if(o)return n.instance=o,Se(o),o;var u=g({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),Se(o),Dn(o,"style",u),$l(o,r.precedence,t),n.instance=o;case"stylesheet":u=hs(r.href);var f=t.querySelector(Ro(u));if(f)return n.state.loading|=4,n.instance=f,Se(f),f;o=hv(r),(u=_i.get(u))&&Xf(o,u),f=(t.ownerDocument||t).createElement("link"),Se(f);var A=f;return A._p=new Promise(function(T,G){A.onload=T,A.onerror=G}),Dn(f,"link",o),n.state.loading|=4,$l(f,r.precedence,t),n.instance=f;case"script":return f=ds(r.src),(u=t.querySelector(Do(f)))?(n.instance=u,Se(u),u):(o=r,(u=_i.get(f))&&(o=g({},r),Yf(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),Se(u),Dn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,$l(o,r.precedence,t));return n.instance}function $l(t,n,r){for(var o=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,A=0;A<o.length;A++){var T=o[A];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=r.nodeType===9?r.head:r,n.insertBefore(t,n.firstChild))}function Xf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Yf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var ec=null;function pv(t,n,r){if(ec===null){var o=new Map,u=ec=new Map;u.set(r,o)}else u=ec,o=u.get(r),o||(o=new Map,u.set(r,o));if(o.has(t))return o;for(o.set(t,null),r=r.getElementsByTagName(t),u=0;u<r.length;u++){var f=r[u];if(!(f[nr]||f[ln]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var A=f.getAttribute(n)||"";A=t+A;var T=o.get(A);T?T.push(f):o.set(A,[f])}}return o}function mv(t,n,r){t=t.ownerDocument||t,t.head.insertBefore(r,n==="title"?t.querySelector("head > title"):null)}function y_(t,n,r){if(r===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function gv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function E_(t,n,r,o){if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var u=hs(o.href),f=n.querySelector(Ro(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=tc.bind(t),n.then(t,t)),r.state.loading|=4,r.instance=f,Se(f);return}f=n.ownerDocument||n,o=hv(o),(u=_i.get(u))&&Xf(o,u),f=f.createElement("link"),Se(f);var A=f;A._p=new Promise(function(T,G){A.onload=T,A.onerror=G}),Dn(f,"link",o),r.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(t.count++,r=tc.bind(t),n.addEventListener("load",r),n.addEventListener("error",r))}}var Wf=0;function M_(t,n){return t.stylesheets&&t.count===0&&ic(t,t.stylesheets),0<t.count||0<t.imgCount?function(r){var o=setTimeout(function(){if(t.stylesheets&&ic(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Wf===0&&(Wf=62500*a_());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&ic(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Wf?50:800)+n);return t.unsuspend=r,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function tc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ic(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var nc=null;function ic(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,nc=new Map,n.forEach(T_,t),nc=null,tc.call(t))}function T_(t,n){if(!(n.state.loading&4)){var r=nc.get(t);if(r)var o=r.get(null);else{r=new Map,nc.set(t,r);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var A=u[f];(A.nodeName==="LINK"||A.getAttribute("media")!=="not all")&&(r.set(A.dataset.precedence,A),o=A)}o&&r.set(null,o)}u=n.instance,A=u.getAttribute("data-precedence"),f=r.get(A)||o,f===o&&r.set(null,u),r.set(A,u),this.count++,o=tc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Uo={$$typeof:B,Provider:null,Consumer:null,_currentValue:P,_currentValue2:P,_threadCount:0};function b_(t,n,r,o,u,f,A,T,G){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ct(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ct(0),this.hiddenUpdates=Ct(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=A,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function vv(t,n,r,o,u,f,A,T,G,ae,ge,Ae){return t=new b_(t,n,r,A,G,ae,ge,Ae,T),n=1,f===!0&&(n|=24),f=$n(3,null,null,n),t.current=f,f.stateNode=t,n=Mu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:r,cache:n},wu(f),t}function xv(t){return t?(t=Xr,t):Xr}function Av(t,n,r,o,u,f){u=xv(u),o.context===null?o.context=u:o.pendingContext=u,o=wa(n),o.payload={element:r},f=f===void 0?null:f,f!==null&&(o.callback=f),r=Ra(t,o,n),r!==null&&(jn(r,t,n),lo(r,t,n))}function _v(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<n?r:n}}function Qf(t,n){_v(t,n),(t=t.alternate)&&_v(t,n)}function Sv(t){if(t.tag===13||t.tag===31){var n=or(t,67108864);n!==null&&jn(n,t,67108864),Qf(t,67108864)}}function yv(t){if(t.tag===13||t.tag===31){var n=ai();n=Nr(n);var r=or(t,n);r!==null&&jn(r,t,n),Qf(t,n)}}var ac=!0;function C_(t,n,r,o){var u=w.T;w.T=null;var f=z.p;try{z.p=2,qf(t,n,r,o)}finally{z.p=f,w.T=u}}function w_(t,n,r,o){var u=w.T;w.T=null;var f=z.p;try{z.p=8,qf(t,n,r,o)}finally{z.p=f,w.T=u}}function qf(t,n,r,o){if(ac){var u=jf(o);if(u===null)Nf(t,n,o,rc,r),Mv(t,o);else if(D_(u,t,n,r,o))o.stopPropagation();else if(Mv(t,o),n&4&&-1<R_.indexOf(t)){for(;u!==null;){var f=oe(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var A=Me(f.pendingLanes);if(A!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;A;){var G=1<<31-ze(A);T.entanglements[1]|=G,A&=~G}Pi(f),(Bt&6)===0&&(Gl=E()+500,To(0))}}break;case 31:case 13:T=or(f,2),T!==null&&jn(T,f,2),kl(),Qf(f,2)}if(f=jf(o),f===null&&Nf(t,n,o,rc,r),f===u)break;u=f}u!==null&&o.stopPropagation()}else Nf(t,n,o,null,r)}}function jf(t){return t=Kc(t),Kf(t)}var rc=null;function Kf(t){if(rc=null,t=j(t),t!==null){var n=c(t);if(n===null)t=null;else{var r=n.tag;if(r===13){if(t=h(n),t!==null)return t;t=null}else if(r===31){if(t=d(n),t!==null)return t;t=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return rc=t,null}function Ev(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(re()){case ve:return 2;case Ee:return 8;case me:case Ze:return 32;case we:return 268435456;default:return 32}default:return 32}}var Zf=!1,Ha=null,Ga=null,Va=null,Lo=new Map,Bo=new Map,ka=[],R_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Mv(t,n){switch(t){case"focusin":case"focusout":Ha=null;break;case"dragenter":case"dragleave":Ga=null;break;case"mouseover":case"mouseout":Va=null;break;case"pointerover":case"pointerout":Lo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bo.delete(n.pointerId)}}function No(t,n,r,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:r,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=oe(n),n!==null&&Sv(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function D_(t,n,r,o,u){switch(n){case"focusin":return Ha=No(Ha,t,n,r,o,u),!0;case"dragenter":return Ga=No(Ga,t,n,r,o,u),!0;case"mouseover":return Va=No(Va,t,n,r,o,u),!0;case"pointerover":var f=u.pointerId;return Lo.set(f,No(Lo.get(f)||null,t,n,r,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Bo.set(f,No(Bo.get(f)||null,t,n,r,o,u)),!0}return!1}function Tv(t){var n=j(t.target);if(n!==null){var r=c(n);if(r!==null){if(n=r.tag,n===13){if(n=h(r),n!==null){t.blockedOn=n,Ys(t.priority,function(){yv(r)});return}}else if(n===31){if(n=d(r),n!==null){t.blockedOn=n,Ys(t.priority,function(){yv(r)});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function sc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var r=jf(t.nativeEvent);if(r===null){r=t.nativeEvent;var o=new r.constructor(r.type,r);jc=o,r.target.dispatchEvent(o),jc=null}else return n=oe(r),n!==null&&Sv(n),t.blockedOn=r,!1;n.shift()}return!0}function bv(t,n,r){sc(t)&&r.delete(n)}function U_(){Zf=!1,Ha!==null&&sc(Ha)&&(Ha=null),Ga!==null&&sc(Ga)&&(Ga=null),Va!==null&&sc(Va)&&(Va=null),Lo.forEach(bv),Bo.forEach(bv)}function oc(t,n){t.blockedOn===n&&(t.blockedOn=null,Zf||(Zf=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,U_)))}var lc=null;function Cv(t){lc!==t&&(lc=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){lc===t&&(lc=null);for(var n=0;n<t.length;n+=3){var r=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(Kf(o||r)===null)continue;break}var f=oe(r);f!==null&&(t.splice(n,3),n-=3,qu(f,{pending:!0,data:u,method:r.method,action:o},o,u))}}))}function ps(t){function n(G){return oc(G,t)}Ha!==null&&oc(Ha,t),Ga!==null&&oc(Ga,t),Va!==null&&oc(Va,t),Lo.forEach(n),Bo.forEach(n);for(var r=0;r<ka.length;r++){var o=ka[r];o.blockedOn===t&&(o.blockedOn=null)}for(;0<ka.length&&(r=ka[0],r.blockedOn===null);)Tv(r),r.blockedOn===null&&ka.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(o=0;o<r.length;o+=3){var u=r[o],f=r[o+1],A=u[Tn]||null;if(typeof f=="function")A||Cv(r);else if(A){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,A=f[Tn]||null)T=A.formAction;else if(Kf(u)!==null)continue}else T=A.action;typeof T=="function"?r[o+1]=T:(r.splice(o,3),o-=3),Cv(r)}}}function wv(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(A){return u=A})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(r,20)}function r(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(r,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Jf(t){this._internalRoot=t}cc.prototype.render=Jf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var r=n.current,o=ai();Av(r,o,t,n,null,null)},cc.prototype.unmount=Jf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Av(t.current,2,null,t,null,null),kl(),n[Sa]=null}};function cc(t){this._internalRoot=t}cc.prototype.unstable_scheduleHydration=function(t){if(t){var n=tr();t={blockedOn:null,target:t,priority:n};for(var r=0;r<ka.length&&n!==0&&n<ka[r].priority;r++);ka.splice(r,0,t),r===0&&Tv(t)}};var Rv=e.version;if(Rv!=="19.2.0")throw Error(s(527,Rv,"19.2.0"));z.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var L_={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:w,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uc.isDisabled&&uc.supportsFiber)try{Te=uc.inject(L_),Re=uc}catch{}}return Po.createRoot=function(t,n){if(!l(t))throw Error(s(299));var r=!1,o="",u=Pm,f=Im,A=zm;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(A=n.onRecoverableError)),n=vv(t,1,!1,null,null,r,o,null,u,f,A,wv),t[Sa]=n.current,Bf(t),new Jf(n)},Po.hydrateRoot=function(t,n,r){if(!l(t))throw Error(s(299));var o=!1,u="",f=Pm,A=Im,T=zm,G=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(A=r.onCaughtError),r.onRecoverableError!==void 0&&(T=r.onRecoverableError),r.formState!==void 0&&(G=r.formState)),n=vv(t,1,!0,n,r??null,o,u,G,f,A,T,wv),n.context=xv(null),r=n.current,o=ai(),o=Nr(o),u=wa(o),u.callback=null,Ra(r,u,o),r=o,n.current.lanes=r,Fn(n,r),Pi(n),t[Sa]=n.current,Bf(t),new cc(n)},Po.version="19.2.0",Po}var Fv;function V_(){if(Fv)return th.exports;Fv=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),th.exports=G_(),th.exports}var k_=V_();const X_=X0(k_);function W0(){const a=en.useRef(null),e=en.useRef(null),i=en.useRef(null),s=en.useRef(null),[l,c]=en.useState(!1),[h,d]=en.useState(null),m=[{label:"Home Page",href:"#home"},{label:"Profile",href:"#profile"},{label:"Ekstrakurikuler",href:"#ekstrakurikuler"},{label:"Berita",href:"#berita"},{label:"Gallery",href:"#gallery"},{label:"Contact",href:"#contact"}],p=b=>{const y=i.current,x=a.current;if(!y||!x||!b)return;const I=b.getBoundingClientRect(),B=x.getBoundingClientRect(),R=I.left-B.left;y.style.width=`${I.width}px`,y.style.transform=`translateX(${R}px)`,y.style.opacity="1"},v=b=>{const y=s.current,x=e.current;if(!y||!x||!b)return;const I=b.getBoundingClientRect(),B=x.getBoundingClientRect(),R=I.left-B.left;y.style.width=`${I.width}px`,y.style.transform=`translateX(${R}px)`,y.style.opacity="1"},g=(b,y)=>{b.preventDefault();const x=document.querySelector(y);x&&x.scrollIntoView({behavior:"smooth"})},_=(b,y,x,I)=>{g(I,x),d(b),p(y)},S=(b,y,x)=>{g(x,y),d(b),c(!1)},M=()=>c(b=>!b);return Y.jsxs(Y.Fragment,{children:[Y.jsx("style",{children:`
        @keyframes navGlow {
          0% { box-shadow: 0 8px 18px rgba(3,255,240,0.02); }
          50% { box-shadow: 0 10px 28px rgba(3,255,240,0.045); }
          100% { box-shadow: 0 8px 18px rgba(3,255,240,0.02); }
        }

        .nav-slide {
          transform: translateY(-10px);
          opacity: 0;
          pointer-events: none;
          transition: all .25s cubic-bezier(.2,.9,.2,1);
        }
        .nav-slide.open {
          transform: translateY(0);
          opacity: 1;
          pointer-events: auto;
        }

        .nav-highlight {
          transition: transform 300ms cubic-bezier(.2,.9,.2,1),
                      width 300ms cubic-bezier(.2,.9,.2,1),
                      opacity 300ms ease;
          opacity: 0;
        }
      `}),Y.jsxs("header",{className:"w-full fixed top-0 left-0 z-50",children:[Y.jsx("div",{className:"backdrop-blur-lg bg-[#0a0f1f]/80 border-b border-white/5",style:{animation:"navGlow 6s ease-in-out infinite"},children:Y.jsx("div",{className:"max-w-[1200px] mx-auto px-4 md:px-8",children:Y.jsxs("div",{className:"h-16 flex items-center justify-between",children:[Y.jsx("div",{className:"flex items-center",children:Y.jsx("a",{href:"#home",onClick:b=>g(b,"#home"),children:Y.jsx("img",{src:"/Logo.png",alt:"Logo",className:"h-10 w-10 object-contain rounded-full hover:scale-105 transition-transform duration-300"})})}),Y.jsxs("nav",{ref:a,className:"hidden md:flex relative items-center gap-2 h-[50px] px-2",children:[Y.jsx("span",{ref:i,className:"nav-highlight absolute top-1 left-0 h-[46px] rounded-lg bg-linear-to-r from-[#194b4f] to-[#33fffc]"}),m.map((b,y)=>Y.jsx("a",{"data-nav-link":!0,href:b.href,onMouseEnter:x=>h!==null&&p(x.currentTarget),onClick:x=>_(y,x.currentTarget,b.href,x),className:`relative z-10 px-5 text-white/90 font-medium uppercase leading-[50px]
                      transition-colors duration-200 hover:text-black
                      ${y===h?"text-white":""}`,children:b.label},b.label))]}),Y.jsx("button",{onClick:M,className:"md:hidden text-white w-10 h-10 flex items-center justify-center rounded hover:bg-white/10 transition",children:Y.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",children:Y.jsx("path",{d:l?"M6 6L18 18M6 18L18 6":"M3 6H21M3 12H21M3 18H21",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})})]})})}),Y.jsx("div",{onClick:()=>c(!1),className:`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${l?"opacity-100":"opacity-0 pointer-events-none"}`}),Y.jsx("div",{className:"md:hidden fixed top-16 left-0 w-full flex justify-center z-50",children:Y.jsx("nav",{ref:e,className:`nav-slide w-[92%] max-w-lg rounded-lg border border-white/10 bg-[#0a0f1f]/95 ${l?"open":""}`,children:Y.jsxs("div",{className:"relative py-3",children:[Y.jsx("span",{ref:s,className:"nav-highlight absolute top-[9px] left-0 h-9 rounded bg-linear-to-r from-[#11303a]/50 to-[#06f0e7]/14"}),m.map((b,y)=>Y.jsx("button",{"data-nav-link":!0,onMouseEnter:x=>h!==null&&v(x.currentTarget),onTouchStart:x=>h!==null&&v(x.currentTarget),onClick:x=>S(y,b.href,x),className:`relative z-10 w-full text-left px-5 py-2 text-white/90 font-medium uppercase transition-colors ${y===h?"text-white":""}`,children:b.label},b.label))]})})})]})]})}const Y_="",W_="",Io={SMOOTH_DURATION:600,INITIAL_DURATION:1500,INITIAL_X_OFFSET:70,INITIAL_Y_OFFSET:60,DEVICE_BETA_OFFSET:20},fc=(a,e=0,i=100)=>Math.min(Math.max(a,e),i),Gh=(a,e=3)=>parseFloat(a.toFixed(e)),hc=(a,e,i,s,l)=>Gh(s+(l-s)*(a-e)/(i-e)),Q_=a=>a<.5?4*a*a*a:1-Math.pow(-2*a+2,3)/2,q_=({avatarUrl:a="<Placeholder for avatar URL>",iconUrl:e="<Placeholder for icon URL>",grainUrl:i="<Placeholder for grain URL>",behindGradient:s,innerGradient:l,showBehindGradient:c=!0,className:h="",enableTilt:d=!0,enableMobileTilt:m=!1,mobileTiltSensitivity:p=5,miniAvatarUrl:v,name:g="Javi A. Torres",title:_="Software Engineer",handle:S="javicodes",status:M="Online",contactText:b="Contact",showUserInfo:y=!0,onContactClick:x})=>{const I=en.useRef(null),B=en.useRef(null),R=en.useMemo(()=>{if(!d)return null;let H=null;const K=(ee,O,w,z)=>{const P=w.clientWidth,ue=w.clientHeight,de=fc(100/P*ee),L=fc(100/ue*O),te=de-50,pe=L-50,ye={"--pointer-x":`${de}%`,"--pointer-y":`${L}%`,"--background-x":`${hc(de,0,100,35,65)}%`,"--background-y":`${hc(L,0,100,35,65)}%`,"--pointer-from-center":`${fc(Math.hypot(L-50,de-50)/50,0,1)}`,"--pointer-from-top":`${L/100}`,"--pointer-from-left":`${de/100}`,"--rotate-x":`${Gh(-(te/5))}deg`,"--rotate-y":`${Gh(pe/4)}deg`};Object.entries(ye).forEach(([Ce,ne])=>{z.style.setProperty(Ce,ne)})};return{updateCardTransform:K,createSmoothAnimation:(ee,O,w,z,P)=>{const ue=performance.now(),de=P.clientWidth/2,L=P.clientHeight/2,te=pe=>{const ye=pe-ue,Ce=fc(ye/ee),ne=Q_(Ce),he=hc(ne,0,1,O,de),De=hc(ne,0,1,w,L);K(he,De,z,P),Ce<1&&(H=requestAnimationFrame(te))};H=requestAnimationFrame(te)},cancelAnimation:()=>{H&&(cancelAnimationFrame(H),H=null)}}},[d]),X=en.useCallback(H=>{const K=B.current,ce=I.current;if(!K||!ce||!R)return;const ee=K.getBoundingClientRect();R.updateCardTransform(H.clientX-ee.left,H.clientY-ee.top,K,ce)},[R]),k=en.useCallback(()=>{const H=B.current,K=I.current;!H||!K||!R||(R.cancelAnimation(),K.classList.add("active"),H.classList.add("active"))},[R]),F=en.useCallback(H=>{const K=B.current,ce=I.current;!K||!ce||!R||(R.createSmoothAnimation(Io.SMOOTH_DURATION,H.offsetX,H.offsetY,K,ce),ce.classList.remove("active"),K.classList.remove("active"))},[R]),J=en.useCallback(H=>{const K=B.current,ce=I.current;if(!K||!ce||!R)return;const{beta:ee,gamma:O}=H;!ee||!O||R.updateCardTransform(K.clientHeight/2+O*p,K.clientWidth/2+(ee-Io.DEVICE_BETA_OFFSET)*p,K,ce)},[R,p]);en.useEffect(()=>{if(!d||!R)return;const H=B.current,K=I.current;if(!H||!K)return;const ce=X,ee=k,O=F,w=J,z=()=>{!m||location.protocol!=="https:"||(typeof window.DeviceMotionEvent.requestPermission=="function"?window.DeviceMotionEvent.requestPermission().then(de=>{de==="granted"&&window.addEventListener("deviceorientation",w)}).catch(de=>console.error(de)):window.addEventListener("deviceorientation",w))};H.addEventListener("pointerenter",ee),H.addEventListener("pointermove",ce),H.addEventListener("pointerleave",O),H.addEventListener("click",z);const P=K.clientWidth-Io.INITIAL_X_OFFSET,ue=Io.INITIAL_Y_OFFSET;return R.updateCardTransform(P,ue,H,K),R.createSmoothAnimation(Io.INITIAL_DURATION,P,ue,H,K),()=>{H.removeEventListener("pointerenter",ee),H.removeEventListener("pointermove",ce),H.removeEventListener("pointerleave",O),H.removeEventListener("click",z),window.removeEventListener("deviceorientation",w),R.cancelAnimation()}},[d,m,R,X,k,F,J]);const U=en.useMemo(()=>({"--icon":e?`url(${e})`:"none","--grain":i?`url(${i})`:"none","--behind-gradient":c?s??Y_:"none","--inner-gradient":l??W_}),[e,i,c,s,l]),D=en.useCallback(()=>{x?.()},[x]);return Y.jsx("div",{ref:I,className:`pc-card-wrapper ${h}`.trim(),style:U,children:Y.jsx("section",{ref:B,className:"pc-card",children:Y.jsxs("div",{className:"pc-inside",children:[Y.jsx("div",{className:"pc-shine"}),Y.jsx("div",{className:"pc-glare"}),Y.jsxs("div",{className:"pc-content pc-avatar-content",children:[Y.jsx("img",{className:"avatar",src:a,alt:`${g||"User"} avatar`,loading:"lazy",onError:H=>{const K=H.target;K.style.display="none"}}),y&&Y.jsxs("div",{className:"pc-user-info",children:[Y.jsxs("div",{className:"pc-user-details",children:[Y.jsx("div",{className:"pc-mini-avatar",children:Y.jsx("img",{src:v||a,alt:`${g||"User"} mini avatar`,loading:"lazy",onError:H=>{const K=H.target;K.style.opacity="0.5",K.src=a}})}),Y.jsxs("div",{className:"pc-user-text",children:[Y.jsxs("div",{className:"pc-handle",children:["@",S]}),Y.jsx("div",{className:"pc-status",children:M})]})]}),Y.jsx("button",{className:"pc-contact-btn",onClick:D,style:{pointerEvents:"auto"},type:"button","aria-label":`Contact ${g||"user"}`,children:b})]})]}),Y.jsx("div",{className:"pc-content",children:Y.jsxs("div",{className:"pc-details",children:[Y.jsx("h3",{children:g}),Y.jsx("p",{children:_})]})})]})})})},j_=Y0.memo(q_);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gs="180",K_=0,Hv=1,Z_=2,Q0=1,J_=2,da=3,va=0,En=1,kn=2,In=0,Ls=1,Gv=2,Vv=3,kv=4,$_=5,wr=100,eS=101,tS=102,nS=103,iS=104,aS=200,rS=201,sS=202,oS=203,Vh=204,kh=205,lS=206,cS=207,uS=208,fS=209,hS=210,dS=211,pS=212,mS=213,gS=214,Xh=0,Yh=1,Wh=2,Ns=3,Qh=4,qh=5,jh=6,Kh=7,q0=0,vS=1,xS=2,Ja=0,AS=1,_S=2,SS=3,yS=4,ES=5,MS=6,TS=7,j0=300,Os=301,Ps=302,Zh=303,Jh=304,Xc=306,$h=1e3,Dr=1001,ed=1002,ci=1003,bS=1004,dc=1005,Pn=1006,rh=1007,Ur=1008,Un=1009,K0=1010,Z0=1011,Qo=1012,Nd=1013,$a=1014,pa=1015,Ko=1016,Od=1017,Pd=1018,Is=1020,J0=35902,$0=35899,ex=1021,tx=1022,Di=1023,qo=1026,zs=1027,nx=1028,Id=1029,ix=1030,zd=1031,Fd=1033,Pc=33776,Ic=33777,zc=33778,Fc=33779,td=35840,nd=35841,id=35842,ad=35843,rd=36196,sd=37492,od=37496,ld=37808,cd=37809,ud=37810,fd=37811,hd=37812,dd=37813,pd=37814,md=37815,gd=37816,vd=37817,xd=37818,Ad=37819,_d=37820,Sd=37821,yd=36492,Ed=36494,Md=36495,Td=36283,bd=36284,Cd=36285,wd=36286,Lr=3200,CS=3201,wS=0,RS=1,Fi="",kt="srgb",er="srgb-linear",Gc="linear",Vt="srgb",ms=7680,Xv=519,DS=512,US=513,LS=514,ax=515,BS=516,NS=517,OS=518,PS=519,Yv=35044,Wv="300 es",Hi=2e3,Vc=2001;class Aa{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sh=Math.PI/180,Rd=180/Math.PI;function Zo(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Nn[a&255]+Nn[a>>8&255]+Nn[a>>16&255]+Nn[a>>24&255]+"-"+Nn[e&255]+Nn[e>>8&255]+"-"+Nn[e>>16&15|64]+Nn[e>>24&255]+"-"+Nn[i&63|128]+Nn[i>>8&255]+"-"+Nn[i>>16&255]+Nn[i>>24&255]+Nn[s&255]+Nn[s>>8&255]+Nn[s>>16&255]+Nn[s>>24&255]).toLowerCase()}function St(a,e,i){return Math.max(e,Math.min(i,a))}function IS(a,e){return(a%e+e)%e}function oh(a,e,i){return(1-i)*a+i*e}function zo(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Kn(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class Pe{constructor(e=0,i=0){Pe.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(St(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*s-h*l+e.x,this.y=c*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jo{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],v=s[l+2],g=s[l+3];const _=c[h+0],S=c[h+1],M=c[h+2],b=c[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=v,e[i+3]=g;return}if(d===1){e[i+0]=_,e[i+1]=S,e[i+2]=M,e[i+3]=b;return}if(g!==b||m!==_||p!==S||v!==M){let y=1-d;const x=m*_+p*S+v*M+g*b,I=x>=0?1:-1,B=1-x*x;if(B>Number.EPSILON){const X=Math.sqrt(B),k=Math.atan2(X,x*I);y=Math.sin(y*k)/X,d=Math.sin(d*k)/X}const R=d*I;if(m=m*y+_*R,p=p*y+S*R,v=v*y+M*R,g=g*y+b*R,y===1-d){const X=1/Math.sqrt(m*m+p*p+v*v+g*g);m*=X,p*=X,v*=X,g*=X}}e[i]=m,e[i+1]=p,e[i+2]=v,e[i+3]=g}static multiplyQuaternionsFlat(e,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],v=s[l+3],g=c[h],_=c[h+1],S=c[h+2],M=c[h+3];return e[i]=d*M+v*g+m*S-p*_,e[i+1]=m*M+v*_+p*g-d*S,e[i+2]=p*M+v*S+d*_-m*g,e[i+3]=v*M-d*g-m*_-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(s/2),v=d(l/2),g=d(c/2),_=m(s/2),S=m(l/2),M=m(c/2);switch(h){case"XYZ":this._x=_*v*g+p*S*M,this._y=p*S*g-_*v*M,this._z=p*v*M+_*S*g,this._w=p*v*g-_*S*M;break;case"YXZ":this._x=_*v*g+p*S*M,this._y=p*S*g-_*v*M,this._z=p*v*M-_*S*g,this._w=p*v*g+_*S*M;break;case"ZXY":this._x=_*v*g-p*S*M,this._y=p*S*g+_*v*M,this._z=p*v*M+_*S*g,this._w=p*v*g-_*S*M;break;case"ZYX":this._x=_*v*g-p*S*M,this._y=p*S*g+_*v*M,this._z=p*v*M-_*S*g,this._w=p*v*g+_*S*M;break;case"YZX":this._x=_*v*g+p*S*M,this._y=p*S*g+_*v*M,this._z=p*v*M-_*S*g,this._w=p*v*g-_*S*M;break;case"XZY":this._x=_*v*g-p*S*M,this._y=p*S*g-_*v*M,this._z=p*v*M+_*S*g,this._w=p*v*g+_*S*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],v=i[6],g=i[10],_=s+d+g;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(v-m)*S,this._y=(c-p)*S,this._z=(h-l)*S}else if(s>d&&s>g){const S=2*Math.sqrt(1+s-d-g);this._w=(v-m)/S,this._x=.25*S,this._y=(l+h)/S,this._z=(c+p)/S}else if(d>g){const S=2*Math.sqrt(1+d-s-g);this._w=(c-p)/S,this._x=(l+h)/S,this._y=.25*S,this._z=(m+v)/S}else{const S=2*Math.sqrt(1+g-s-d);this._w=(h-l)/S,this._x=(c+p)/S,this._y=(m+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,h=e._w,d=i._x,m=i._y,p=i._z,v=i._w;return this._x=s*v+h*d+l*p-c*m,this._y=l*v+h*m+c*d-s*p,this._z=c*v+h*p+s*m-l*d,this._w=h*v-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,c=this._z,h=this._w;let d=h*e._w+s*e._x+l*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=s,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const S=1-i;return this._w=S*h+i*this._w,this._x=S*s+i*this._x,this._y=S*l+i*this._y,this._z=S*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),v=Math.atan2(p,d),g=Math.sin((1-i)*v)/p,_=Math.sin(i*v)/p;return this._w=h*g+this._w*_,this._x=s*g+this._x*_,this._y=l*g+this._y*_,this._z=c*g+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,i=0,s=0){q.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Qv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Qv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*s),v=2*(d*i-c*l),g=2*(c*s-h*i);return this.x=i+m*p+h*g-d*v,this.y=s+m*v+d*p-c*g,this.z=l+m*g+c*v-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this.z=St(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this.z=St(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return lh.copy(this).projectOnVector(e),this.sub(lh)}reflect(e){return this.sub(lh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(St(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lh=new q,Qv=new Jo;class dt{constructor(e,i,s,l,c,h,d,m,p){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,d,m,p)}set(e,i,s,l,c,h,d,m,p){const v=this.elements;return v[0]=e,v[1]=l,v[2]=d,v[3]=i,v[4]=c,v[5]=m,v[6]=s,v[7]=h,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],v=s[4],g=s[7],_=s[2],S=s[5],M=s[8],b=l[0],y=l[3],x=l[6],I=l[1],B=l[4],R=l[7],X=l[2],k=l[5],F=l[8];return c[0]=h*b+d*I+m*X,c[3]=h*y+d*B+m*k,c[6]=h*x+d*R+m*F,c[1]=p*b+v*I+g*X,c[4]=p*y+v*B+g*k,c[7]=p*x+v*R+g*F,c[2]=_*b+S*I+M*X,c[5]=_*y+S*B+M*k,c[8]=_*x+S*R+M*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],v=e[8];return i*h*v-i*d*p-s*c*v+s*d*m+l*c*p-l*h*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],v=e[8],g=v*h-d*p,_=d*m-v*c,S=p*c-h*m,M=i*g+s*_+l*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/M;return e[0]=g*b,e[1]=(l*p-v*s)*b,e[2]=(d*s-l*h)*b,e[3]=_*b,e[4]=(v*i-l*m)*b,e[5]=(l*c-d*i)*b,e[6]=S*b,e[7]=(s*m-p*i)*b,e[8]=(h*i-s*c)*b,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(ch.makeScale(e,i)),this}rotate(e){return this.premultiply(ch.makeRotation(-e)),this}translate(e,i){return this.premultiply(ch.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ch=new dt;function rx(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function kc(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function zS(){const a=kc("canvas");return a.style.display="block",a}const qv={};function jo(a){a in qv||(qv[a]=!0,console.warn(a))}function FS(a,e,i){return new Promise(function(s,l){function c(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:l();break;case a.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const jv=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kv=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function HS(){const a={enabled:!0,workingColorSpace:er,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Vt&&(l.r=ma(l.r),l.g=ma(l.g),l.b=ma(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Vt&&(l.r=Bs(l.r),l.g=Bs(l.g),l.b=Bs(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Fi?Gc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return jo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return jo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return a.define({[er]:{primaries:e,whitePoint:s,transfer:Gc,toXYZ:jv,fromXYZ:Kv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:kt},outputColorSpaceConfig:{drawingBufferColorSpace:kt}},[kt]:{primaries:e,whitePoint:s,transfer:Vt,toXYZ:jv,fromXYZ:Kv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:kt}}}),a}const Ut=HS();function ma(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Bs(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let gs;class GS{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{gs===void 0&&(gs=kc("canvas")),gs.width=e.width,gs.height=e.height;const l=gs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=gs}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=kc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=ma(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ma(i[s]/255)*255):i[s]=ma(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let VS=0;class Hd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:VS++}),this.uuid=Zo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(uh(l[h].image)):c.push(uh(l[h]))}else c=uh(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function uh(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?GS.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kS=0;const fh=new q;class Mn extends Aa{constructor(e=Mn.DEFAULT_IMAGE,i=Mn.DEFAULT_MAPPING,s=Dr,l=Dr,c=Pn,h=Ur,d=Di,m=Un,p=Mn.DEFAULT_ANISOTROPY,v=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kS++}),this.uuid=Zo(),this.name="",this.source=new Hd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(fh).x}get height(){return this.source.getSize(fh).y}get depth(){return this.source.getSize(fh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==j0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $h:e.x=e.x-Math.floor(e.x);break;case Dr:e.x=e.x<0?0:1;break;case ed:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $h:e.y=e.y-Math.floor(e.y);break;case Dr:e.y=e.y<0?0:1;break;case ed:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=j0;Mn.DEFAULT_ANISOTROPY=1;class Kt{constructor(e=0,i=0,s=0,l=1){Kt.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,p=m[0],v=m[4],g=m[8],_=m[1],S=m[5],M=m[9],b=m[2],y=m[6],x=m[10];if(Math.abs(v-_)<.01&&Math.abs(g-b)<.01&&Math.abs(M-y)<.01){if(Math.abs(v+_)<.1&&Math.abs(g+b)<.1&&Math.abs(M+y)<.1&&Math.abs(p+S+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const B=(p+1)/2,R=(S+1)/2,X=(x+1)/2,k=(v+_)/4,F=(g+b)/4,J=(M+y)/4;return B>R&&B>X?B<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(B),l=k/s,c=F/s):R>X?R<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(R),s=k/l,c=J/l):X<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(X),s=F/c,l=J/c),this.set(s,l,c,i),this}let I=Math.sqrt((y-M)*(y-M)+(g-b)*(g-b)+(_-v)*(_-v));return Math.abs(I)<.001&&(I=1),this.x=(y-M)/I,this.y=(g-b)/I,this.z=(_-v)/I,this.w=Math.acos((p+S+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this.z=St(this.z,e.z,i.z),this.w=St(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this.z=St(this.z,e,i),this.w=St(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class XS extends Aa{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new Kt(0,0,e,i),this.scissorTest=!1,this.viewport=new Kt(0,0,e,i);const l={width:e,height:i,depth:s.depth},c=new Mn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:Pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Hd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zn extends XS{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class sx extends Mn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=ci,this.minFilter=ci,this.wrapR=Dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class YS extends Mn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=ci,this.minFilter=ci,this.wrapR=Dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $o{constructor(e=new q(1/0,1/0,1/0),i=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(bi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(bi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=bi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,bi):bi.fromBufferAttribute(c,h),bi.applyMatrix4(e.matrixWorld),this.expandByPoint(bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),pc.copy(s.boundingBox)),pc.applyMatrix4(e.matrixWorld),this.union(pc)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fo),mc.subVectors(this.max,Fo),vs.subVectors(e.a,Fo),xs.subVectors(e.b,Fo),As.subVectors(e.c,Fo),Ya.subVectors(xs,vs),Wa.subVectors(As,xs),_r.subVectors(vs,As);let i=[0,-Ya.z,Ya.y,0,-Wa.z,Wa.y,0,-_r.z,_r.y,Ya.z,0,-Ya.x,Wa.z,0,-Wa.x,_r.z,0,-_r.x,-Ya.y,Ya.x,0,-Wa.y,Wa.x,0,-_r.y,_r.x,0];return!hh(i,vs,xs,As,mc)||(i=[1,0,0,0,1,0,0,0,1],!hh(i,vs,xs,As,mc))?!1:(gc.crossVectors(Ya,Wa),i=[gc.x,gc.y,gc.z],hh(i,vs,xs,As,mc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(la[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),la[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),la[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),la[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),la[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),la[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),la[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),la[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(la),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const la=[new q,new q,new q,new q,new q,new q,new q,new q],bi=new q,pc=new $o,vs=new q,xs=new q,As=new q,Ya=new q,Wa=new q,_r=new q,Fo=new q,mc=new q,gc=new q,Sr=new q;function hh(a,e,i,s,l){for(let c=0,h=a.length-3;c<=h;c+=3){Sr.fromArray(a,c);const d=l.x*Math.abs(Sr.x)+l.y*Math.abs(Sr.y)+l.z*Math.abs(Sr.z),m=e.dot(Sr),p=i.dot(Sr),v=s.dot(Sr);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>d)return!1}return!0}const WS=new $o,Ho=new q,dh=new q;class Gd{constructor(e=new q,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):WS.setFromPoints(e).getCenter(s);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ho.subVectors(e,this.center);const i=Ho.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Ho,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ho.copy(e.center).add(dh)),this.expandByPoint(Ho.copy(e.center).sub(dh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ca=new q,ph=new q,vc=new q,Qa=new q,mh=new q,xc=new q,gh=new q;class QS{constructor(e=new q,i=new q(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ca)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ca.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ca.copy(this.origin).addScaledVector(this.direction,i),ca.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){ph.copy(e).add(i).multiplyScalar(.5),vc.copy(i).sub(e).normalize(),Qa.copy(this.origin).sub(ph);const c=e.distanceTo(i)*.5,h=-this.direction.dot(vc),d=Qa.dot(this.direction),m=-Qa.dot(vc),p=Qa.lengthSq(),v=Math.abs(1-h*h);let g,_,S,M;if(v>0)if(g=h*m-d,_=h*d-m,M=c*v,g>=0)if(_>=-M)if(_<=M){const b=1/v;g*=b,_*=b,S=g*(g+h*_+2*d)+_*(h*g+_+2*m)+p}else _=c,g=Math.max(0,-(h*_+d)),S=-g*g+_*(_+2*m)+p;else _=-c,g=Math.max(0,-(h*_+d)),S=-g*g+_*(_+2*m)+p;else _<=-M?(g=Math.max(0,-(-h*c+d)),_=g>0?-c:Math.min(Math.max(-c,-m),c),S=-g*g+_*(_+2*m)+p):_<=M?(g=0,_=Math.min(Math.max(-c,-m),c),S=_*(_+2*m)+p):(g=Math.max(0,-(h*c+d)),_=g>0?c:Math.min(Math.max(-c,-m),c),S=-g*g+_*(_+2*m)+p);else _=h>0?-c:c,g=Math.max(0,-(h*_+d)),S=-g*g+_*(_+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(ph).addScaledVector(vc,_),S}intersectSphere(e,i){ca.subVectors(e.center,this.origin);const s=ca.dot(this.direction),l=ca.dot(ca)-s*s,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,h,d,m;const p=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,_=this.origin;return p>=0?(s=(e.min.x-_.x)*p,l=(e.max.x-_.x)*p):(s=(e.max.x-_.x)*p,l=(e.min.x-_.x)*p),v>=0?(c=(e.min.y-_.y)*v,h=(e.max.y-_.y)*v):(c=(e.max.y-_.y)*v,h=(e.min.y-_.y)*v),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),g>=0?(d=(e.min.z-_.z)*g,m=(e.max.z-_.z)*g):(d=(e.max.z-_.z)*g,m=(e.min.z-_.z)*g),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,ca)!==null}intersectTriangle(e,i,s,l,c){mh.subVectors(i,e),xc.subVectors(s,e),gh.crossVectors(mh,xc);let h=this.direction.dot(gh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Qa.subVectors(this.origin,e);const m=d*this.direction.dot(xc.crossVectors(Qa,xc));if(m<0)return null;const p=d*this.direction.dot(mh.cross(Qa));if(p<0||m+p>h)return null;const v=-d*Qa.dot(gh);return v<0?null:this.at(v/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pn{constructor(e,i,s,l,c,h,d,m,p,v,g,_,S,M,b,y){pn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,d,m,p,v,g,_,S,M,b,y)}set(e,i,s,l,c,h,d,m,p,v,g,_,S,M,b,y){const x=this.elements;return x[0]=e,x[4]=i,x[8]=s,x[12]=l,x[1]=c,x[5]=h,x[9]=d,x[13]=m,x[2]=p,x[6]=v,x[10]=g,x[14]=_,x[3]=S,x[7]=M,x[11]=b,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pn().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/_s.setFromMatrixColumn(e,0).length(),c=1/_s.setFromMatrixColumn(e,1).length(),h=1/_s.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),v=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const _=h*v,S=h*g,M=d*v,b=d*g;i[0]=m*v,i[4]=-m*g,i[8]=p,i[1]=S+M*p,i[5]=_-b*p,i[9]=-d*m,i[2]=b-_*p,i[6]=M+S*p,i[10]=h*m}else if(e.order==="YXZ"){const _=m*v,S=m*g,M=p*v,b=p*g;i[0]=_+b*d,i[4]=M*d-S,i[8]=h*p,i[1]=h*g,i[5]=h*v,i[9]=-d,i[2]=S*d-M,i[6]=b+_*d,i[10]=h*m}else if(e.order==="ZXY"){const _=m*v,S=m*g,M=p*v,b=p*g;i[0]=_-b*d,i[4]=-h*g,i[8]=M+S*d,i[1]=S+M*d,i[5]=h*v,i[9]=b-_*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const _=h*v,S=h*g,M=d*v,b=d*g;i[0]=m*v,i[4]=M*p-S,i[8]=_*p+b,i[1]=m*g,i[5]=b*p+_,i[9]=S*p-M,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const _=h*m,S=h*p,M=d*m,b=d*p;i[0]=m*v,i[4]=b-_*g,i[8]=M*g+S,i[1]=g,i[5]=h*v,i[9]=-d*v,i[2]=-p*v,i[6]=S*g+M,i[10]=_-b*g}else if(e.order==="XZY"){const _=h*m,S=h*p,M=d*m,b=d*p;i[0]=m*v,i[4]=-g,i[8]=p*v,i[1]=_*g+b,i[5]=h*v,i[9]=S*g-M,i[2]=M*g-S,i[6]=d*v,i[10]=b*g+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qS,e,jS)}lookAt(e,i,s){const l=this.elements;return ri.subVectors(e,i),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),qa.crossVectors(s,ri),qa.lengthSq()===0&&(Math.abs(s.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),qa.crossVectors(s,ri)),qa.normalize(),Ac.crossVectors(ri,qa),l[0]=qa.x,l[4]=Ac.x,l[8]=ri.x,l[1]=qa.y,l[5]=Ac.y,l[9]=ri.y,l[2]=qa.z,l[6]=Ac.z,l[10]=ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],v=s[1],g=s[5],_=s[9],S=s[13],M=s[2],b=s[6],y=s[10],x=s[14],I=s[3],B=s[7],R=s[11],X=s[15],k=l[0],F=l[4],J=l[8],U=l[12],D=l[1],H=l[5],K=l[9],ce=l[13],ee=l[2],O=l[6],w=l[10],z=l[14],P=l[3],ue=l[7],de=l[11],L=l[15];return c[0]=h*k+d*D+m*ee+p*P,c[4]=h*F+d*H+m*O+p*ue,c[8]=h*J+d*K+m*w+p*de,c[12]=h*U+d*ce+m*z+p*L,c[1]=v*k+g*D+_*ee+S*P,c[5]=v*F+g*H+_*O+S*ue,c[9]=v*J+g*K+_*w+S*de,c[13]=v*U+g*ce+_*z+S*L,c[2]=M*k+b*D+y*ee+x*P,c[6]=M*F+b*H+y*O+x*ue,c[10]=M*J+b*K+y*w+x*de,c[14]=M*U+b*ce+y*z+x*L,c[3]=I*k+B*D+R*ee+X*P,c[7]=I*F+B*H+R*O+X*ue,c[11]=I*J+B*K+R*w+X*de,c[15]=I*U+B*ce+R*z+X*L,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],h=e[1],d=e[5],m=e[9],p=e[13],v=e[2],g=e[6],_=e[10],S=e[14],M=e[3],b=e[7],y=e[11],x=e[15];return M*(+c*m*g-l*p*g-c*d*_+s*p*_+l*d*S-s*m*S)+b*(+i*m*S-i*p*_+c*h*_-l*h*S+l*p*v-c*m*v)+y*(+i*p*g-i*d*S-c*h*g+s*h*S+c*d*v-s*p*v)+x*(-l*d*v-i*m*g+i*d*_+l*h*g-s*h*_+s*m*v)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],v=e[8],g=e[9],_=e[10],S=e[11],M=e[12],b=e[13],y=e[14],x=e[15],I=g*y*p-b*_*p+b*m*S-d*y*S-g*m*x+d*_*x,B=M*_*p-v*y*p-M*m*S+h*y*S+v*m*x-h*_*x,R=v*b*p-M*g*p+M*d*S-h*b*S-v*d*x+h*g*x,X=M*g*m-v*b*m-M*d*_+h*b*_+v*d*y-h*g*y,k=i*I+s*B+l*R+c*X;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/k;return e[0]=I*F,e[1]=(b*_*c-g*y*c-b*l*S+s*y*S+g*l*x-s*_*x)*F,e[2]=(d*y*c-b*m*c+b*l*p-s*y*p-d*l*x+s*m*x)*F,e[3]=(g*m*c-d*_*c-g*l*p+s*_*p+d*l*S-s*m*S)*F,e[4]=B*F,e[5]=(v*y*c-M*_*c+M*l*S-i*y*S-v*l*x+i*_*x)*F,e[6]=(M*m*c-h*y*c-M*l*p+i*y*p+h*l*x-i*m*x)*F,e[7]=(h*_*c-v*m*c+v*l*p-i*_*p-h*l*S+i*m*S)*F,e[8]=R*F,e[9]=(M*g*c-v*b*c-M*s*S+i*b*S+v*s*x-i*g*x)*F,e[10]=(h*b*c-M*d*c+M*s*p-i*b*p-h*s*x+i*d*x)*F,e[11]=(v*d*c-h*g*c-v*s*p+i*g*p+h*s*S-i*d*S)*F,e[12]=X*F,e[13]=(v*b*l-M*g*l+M*s*_-i*b*_-v*s*y+i*g*y)*F,e[14]=(M*d*l-h*b*l-M*s*m+i*b*m+h*s*y-i*d*y)*F,e[15]=(h*g*l-v*d*l+v*s*m-i*g*m-h*s*_+i*d*_)*F,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=e.x,d=e.y,m=e.z,p=c*h,v=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,v*d+s,v*m-l*h,0,p*m-l*d,v*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,h){return this.set(1,s,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,v=h+h,g=d+d,_=c*p,S=c*v,M=c*g,b=h*v,y=h*g,x=d*g,I=m*p,B=m*v,R=m*g,X=s.x,k=s.y,F=s.z;return l[0]=(1-(b+x))*X,l[1]=(S+R)*X,l[2]=(M-B)*X,l[3]=0,l[4]=(S-R)*k,l[5]=(1-(_+x))*k,l[6]=(y+I)*k,l[7]=0,l[8]=(M+B)*F,l[9]=(y-I)*F,l[10]=(1-(_+b))*F,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let c=_s.set(l[0],l[1],l[2]).length();const h=_s.set(l[4],l[5],l[6]).length(),d=_s.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],Ci.copy(this);const p=1/c,v=1/h,g=1/d;return Ci.elements[0]*=p,Ci.elements[1]*=p,Ci.elements[2]*=p,Ci.elements[4]*=v,Ci.elements[5]*=v,Ci.elements[6]*=v,Ci.elements[8]*=g,Ci.elements[9]*=g,Ci.elements[10]*=g,i.setFromRotationMatrix(Ci),s.x=c,s.y=h,s.z=d,this}makePerspective(e,i,s,l,c,h,d=Hi,m=!1){const p=this.elements,v=2*c/(i-e),g=2*c/(s-l),_=(i+e)/(i-e),S=(s+l)/(s-l);let M,b;if(m)M=c/(h-c),b=h*c/(h-c);else if(d===Hi)M=-(h+c)/(h-c),b=-2*h*c/(h-c);else if(d===Vc)M=-h/(h-c),b=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=g,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,c,h,d=Hi,m=!1){const p=this.elements,v=2/(i-e),g=2/(s-l),_=-(i+e)/(i-e),S=-(s+l)/(s-l);let M,b;if(m)M=1/(h-c),b=h/(h-c);else if(d===Hi)M=-2/(h-c),b=-(h+c)/(h-c);else if(d===Vc)M=-1/(h-c),b=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=g,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=M,p[14]=b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const _s=new q,Ci=new pn,qS=new q(0,0,0),jS=new q(1,1,1),qa=new q,Ac=new q,ri=new q,Zv=new pn,Jv=new Jo;class xa{constructor(e=0,i=0,s=0,l=xa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],v=l[9],g=l[2],_=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(St(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-St(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(St(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-St(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(St(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-St(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-v,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return Zv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zv,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Jv.setFromEuler(this),this.setFromQuaternion(Jv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xa.DEFAULT_ORDER="XYZ";class ox{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let KS=0;const $v=new q,Ss=new Jo,ua=new pn,_c=new q,Go=new q,ZS=new q,JS=new Jo,e0=new q(1,0,0),t0=new q(0,1,0),n0=new q(0,0,1),i0={type:"added"},$S={type:"removed"},ys={type:"childadded",child:null},vh={type:"childremoved",child:null};class ui extends Aa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:KS++}),this.uuid=Zo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ui.DEFAULT_UP.clone();const e=new q,i=new xa,s=new Jo,l=new q(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new pn},normalMatrix:{value:new dt}}),this.matrix=new pn,this.matrixWorld=new pn,this.matrixAutoUpdate=ui.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ox,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Ss.setFromAxisAngle(e,i),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(e,i){return Ss.setFromAxisAngle(e,i),this.quaternion.premultiply(Ss),this}rotateX(e){return this.rotateOnAxis(e0,e)}rotateY(e){return this.rotateOnAxis(t0,e)}rotateZ(e){return this.rotateOnAxis(n0,e)}translateOnAxis(e,i){return $v.copy(e).applyQuaternion(this.quaternion),this.position.add($v.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(e0,e)}translateY(e){return this.translateOnAxis(t0,e)}translateZ(e){return this.translateOnAxis(n0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ua.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?_c.copy(e):_c.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ua.lookAt(Go,_c,this.up):ua.lookAt(_c,Go,this.up),this.quaternion.setFromRotationMatrix(ua),l&&(ua.extractRotation(l.matrixWorld),Ss.setFromRotationMatrix(ua),this.quaternion.premultiply(Ss.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(i0),ys.child=e,this.dispatchEvent(ys),ys.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent($S),vh.child=e,this.dispatchEvent(vh),vh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ua.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ua.multiply(e.parent.matrixWorld)),e.applyMatrix4(ua),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(i0),ys.child=e,this.dispatchEvent(ys),ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,e,ZS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,JS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const g=m[p];c(e.shapes,g)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),v=h(e.images),g=h(e.shapes),_=h(e.skeletons),S=h(e.animations),M=h(e.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),v.length>0&&(s.images=v),g.length>0&&(s.shapes=g),_.length>0&&(s.skeletons=_),S.length>0&&(s.animations=S),M.length>0&&(s.nodes=M)}return s.object=l,s;function h(d){const m=[];for(const p in d){const v=d[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}ui.DEFAULT_UP=new q(0,1,0);ui.DEFAULT_MATRIX_AUTO_UPDATE=!0;ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wi=new q,fa=new q,xh=new q,ha=new q,Es=new q,Ms=new q,a0=new q,Ah=new q,_h=new q,Sh=new q,yh=new Kt,Eh=new Kt,Mh=new Kt;class Ri{constructor(e=new q,i=new q,s=new q){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),wi.subVectors(e,i),l.cross(wi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){wi.subVectors(l,i),fa.subVectors(s,i),xh.subVectors(e,i);const h=wi.dot(wi),d=wi.dot(fa),m=wi.dot(xh),p=fa.dot(fa),v=fa.dot(xh),g=h*p-d*d;if(g===0)return c.set(0,0,0),null;const _=1/g,S=(p*m-d*v)*_,M=(h*v-d*m)*_;return c.set(1-S-M,M,S)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,ha)===null?!1:ha.x>=0&&ha.y>=0&&ha.x+ha.y<=1}static getInterpolation(e,i,s,l,c,h,d,m){return this.getBarycoord(e,i,s,l,ha)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ha.x),m.addScaledVector(h,ha.y),m.addScaledVector(d,ha.z),m)}static getInterpolatedAttribute(e,i,s,l,c,h){return yh.setScalar(0),Eh.setScalar(0),Mh.setScalar(0),yh.fromBufferAttribute(e,i),Eh.fromBufferAttribute(e,s),Mh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(yh,c.x),h.addScaledVector(Eh,c.y),h.addScaledVector(Mh,c.z),h}static isFrontFacing(e,i,s,l){return wi.subVectors(s,i),fa.subVectors(e,i),wi.cross(fa).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),fa.subVectors(this.a,this.b),wi.cross(fa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ri.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Ri.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let h,d;Es.subVectors(l,s),Ms.subVectors(c,s),Ah.subVectors(e,s);const m=Es.dot(Ah),p=Ms.dot(Ah);if(m<=0&&p<=0)return i.copy(s);_h.subVectors(e,l);const v=Es.dot(_h),g=Ms.dot(_h);if(v>=0&&g<=v)return i.copy(l);const _=m*g-v*p;if(_<=0&&m>=0&&v<=0)return h=m/(m-v),i.copy(s).addScaledVector(Es,h);Sh.subVectors(e,c);const S=Es.dot(Sh),M=Ms.dot(Sh);if(M>=0&&S<=M)return i.copy(c);const b=S*p-m*M;if(b<=0&&p>=0&&M<=0)return d=p/(p-M),i.copy(s).addScaledVector(Ms,d);const y=v*M-S*g;if(y<=0&&g-v>=0&&S-M>=0)return a0.subVectors(c,l),d=(g-v)/(g-v+(S-M)),i.copy(l).addScaledVector(a0,d);const x=1/(y+b+_);return h=b*x,d=_*x,i.copy(s).addScaledVector(Es,h).addScaledVector(Ms,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const lx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ja={h:0,s:0,l:0},Sc={h:0,s:0,l:0};function Th(a,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?a+(e-a)*6*i:i<1/2?e:i<2/3?a+(e-a)*6*(2/3-i):a}class gt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Ut.workingColorSpace){return this.r=e,this.g=i,this.b=s,Ut.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Ut.workingColorSpace){if(e=IS(e,1),i=St(i,0,1),s=St(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Th(h,c,e+1/3),this.g=Th(h,c,e),this.b=Th(h,c,e-1/3)}return Ut.colorSpaceToWorking(this,l),this}setStyle(e,i=kt){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=kt){const s=lx[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ma(e.r),this.g=ma(e.g),this.b=ma(e.b),this}copyLinearToSRGB(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return Ut.workingToColorSpace(On.copy(this),e),Math.round(St(On.r*255,0,255))*65536+Math.round(St(On.g*255,0,255))*256+Math.round(St(On.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ut.workingColorSpace){Ut.workingToColorSpace(On.copy(this),i);const s=On.r,l=On.g,c=On.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const v=(d+h)/2;if(d===h)m=0,p=0;else{const g=h-d;switch(p=v<=.5?g/(h+d):g/(2-h-d),h){case s:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-s)/g+2;break;case c:m=(s-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,i=Ut.workingColorSpace){return Ut.workingToColorSpace(On.copy(this),i),e.r=On.r,e.g=On.g,e.b=On.b,e}getStyle(e=kt){Ut.workingToColorSpace(On.copy(this),e);const i=On.r,s=On.g,l=On.b;return e!==kt?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(ja),this.setHSL(ja.h+e,ja.s+i,ja.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(ja),e.getHSL(Sc);const s=oh(ja.h,Sc.h,i),l=oh(ja.s,Sc.s,i),c=oh(ja.l,Sc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new gt;gt.NAMES=lx;let ey=0;class Vs extends Aa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ey++}),this.uuid=Zo(),this.name="",this.type="Material",this.blending=Ls,this.side=va,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vh,this.blendDst=kh,this.blendEquation=wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=Ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(s.blending=this.blending),this.side!==va&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Vh&&(s.blendSrc=this.blendSrc),this.blendDst!==kh&&(s.blendDst=this.blendDst),this.blendEquation!==wr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Ns&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xv&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(s.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class cx extends Vs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xa,this.combine=q0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dn=new q,yc=new Pe;let ty=0;class fi{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ty++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=Yv,this.updateRanges=[],this.gpuType=pa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)yc.fromBufferAttribute(this,i),yc.applyMatrix3(e),this.setXY(i,yc.x,yc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=zo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Kn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=zo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=zo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=zo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=zo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Kn(i,this.array),s=Kn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Kn(i,this.array),s=Kn(s,this.array),l=Kn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Kn(i,this.array),s=Kn(s,this.array),l=Kn(l,this.array),c=Kn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yv&&(e.usage=this.usage),e}}class ux extends fi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class fx extends fi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Vi extends fi{constructor(e,i,s){super(new Float32Array(e),i,s)}}let ny=0;const Si=new pn,bh=new ui,Ts=new q,si=new $o,Vo=new $o,yn=new q;class ki extends Aa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ny++}),this.uuid=Zo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rx(e)?fx:ux)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new dt().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Si.makeRotationFromQuaternion(e),this.applyMatrix4(Si),this}rotateX(e){return Si.makeRotationX(e),this.applyMatrix4(Si),this}rotateY(e){return Si.makeRotationY(e),this.applyMatrix4(Si),this}rotateZ(e){return Si.makeRotationZ(e),this.applyMatrix4(Si),this}translate(e,i,s){return Si.makeTranslation(e,i,s),this.applyMatrix4(Si),this}scale(e,i,s){return Si.makeScale(e,i,s),this.applyMatrix4(Si),this}lookAt(e){return bh.lookAt(e),bh.updateMatrix(),this.applyMatrix4(bh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Vi(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $o);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];si.setFromBufferAttribute(c),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gd);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const s=this.boundingSphere.center;if(si.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Vo.setFromBufferAttribute(d),this.morphTargetsRelative?(yn.addVectors(si.min,Vo.min),si.expandByPoint(yn),yn.addVectors(si.max,Vo.max),si.expandByPoint(yn)):(si.expandByPoint(Vo.min),si.expandByPoint(Vo.max))}si.getCenter(s);let l=0;for(let c=0,h=e.count;c<h;c++)yn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(yn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)yn.fromBufferAttribute(d,p),m&&(Ts.fromBufferAttribute(e,p),yn.add(Ts)),l=Math.max(l,s.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let J=0;J<s.count;J++)d[J]=new q,m[J]=new q;const p=new q,v=new q,g=new q,_=new Pe,S=new Pe,M=new Pe,b=new q,y=new q;function x(J,U,D){p.fromBufferAttribute(s,J),v.fromBufferAttribute(s,U),g.fromBufferAttribute(s,D),_.fromBufferAttribute(c,J),S.fromBufferAttribute(c,U),M.fromBufferAttribute(c,D),v.sub(p),g.sub(p),S.sub(_),M.sub(_);const H=1/(S.x*M.y-M.x*S.y);isFinite(H)&&(b.copy(v).multiplyScalar(M.y).addScaledVector(g,-S.y).multiplyScalar(H),y.copy(g).multiplyScalar(S.x).addScaledVector(v,-M.x).multiplyScalar(H),d[J].add(b),d[U].add(b),d[D].add(b),m[J].add(y),m[U].add(y),m[D].add(y))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let J=0,U=I.length;J<U;++J){const D=I[J],H=D.start,K=D.count;for(let ce=H,ee=H+K;ce<ee;ce+=3)x(e.getX(ce+0),e.getX(ce+1),e.getX(ce+2))}const B=new q,R=new q,X=new q,k=new q;function F(J){X.fromBufferAttribute(l,J),k.copy(X);const U=d[J];B.copy(U),B.sub(X.multiplyScalar(X.dot(U))).normalize(),R.crossVectors(k,U);const H=R.dot(m[J])<0?-1:1;h.setXYZW(J,B.x,B.y,B.z,H)}for(let J=0,U=I.length;J<U;++J){const D=I[J],H=D.start,K=D.count;for(let ce=H,ee=H+K;ce<ee;ce+=3)F(e.getX(ce+0)),F(e.getX(ce+1)),F(e.getX(ce+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new fi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let _=0,S=s.count;_<S;_++)s.setXYZ(_,0,0,0);const l=new q,c=new q,h=new q,d=new q,m=new q,p=new q,v=new q,g=new q;if(e)for(let _=0,S=e.count;_<S;_+=3){const M=e.getX(_+0),b=e.getX(_+1),y=e.getX(_+2);l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,b),h.fromBufferAttribute(i,y),v.subVectors(h,c),g.subVectors(l,c),v.cross(g),d.fromBufferAttribute(s,M),m.fromBufferAttribute(s,b),p.fromBufferAttribute(s,y),d.add(v),m.add(v),p.add(v),s.setXYZ(M,d.x,d.y,d.z),s.setXYZ(b,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let _=0,S=i.count;_<S;_+=3)l.fromBufferAttribute(i,_+0),c.fromBufferAttribute(i,_+1),h.fromBufferAttribute(i,_+2),v.subVectors(h,c),g.subVectors(l,c),v.cross(g),s.setXYZ(_+0,v.x,v.y,v.z),s.setXYZ(_+1,v.x,v.y,v.z),s.setXYZ(_+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)yn.fromBufferAttribute(e,i),yn.normalize(),e.setXYZ(i,yn.x,yn.y,yn.z)}toNonIndexed(){function e(d,m){const p=d.array,v=d.itemSize,g=d.normalized,_=new p.constructor(m.length*v);let S=0,M=0;for(let b=0,y=m.length;b<y;b++){d.isInterleavedBufferAttribute?S=m[b]*d.data.stride+d.offset:S=m[b]*v;for(let x=0;x<v;x++)_[M++]=p[S++]}return new fi(_,v,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ki,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let v=0,g=p.length;v<g;v++){const _=p[v],S=e(_,s);m.push(S)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let g=0,_=p.length;g<_;g++){const S=p[g];v.push(S.toJSON(e.data))}v.length>0&&(l[m]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const c=e.morphAttributes;for(const p in c){const v=[],g=c[p];for(let _=0,S=g.length;_<S;_++)v.push(g[_].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,v=h.length;p<v;p++){const g=h[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const r0=new pn,yr=new QS,Ec=new Gd,s0=new q,Mc=new q,Tc=new q,bc=new q,Ch=new q,Cc=new q,o0=new q,wc=new q;class li extends ui{constructor(e=new ki,i=new cx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){Cc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const v=d[m],g=c[m];v!==0&&(Ch.fromBufferAttribute(g,e),h?Cc.addScaledVector(Ch,v):Cc.addScaledVector(Ch.sub(i),v))}i.add(Cc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Ec.copy(s.boundingSphere),Ec.applyMatrix4(c),yr.copy(e.ray).recast(e.near),!(Ec.containsPoint(yr.origin)===!1&&(yr.intersectSphere(Ec,s0)===null||yr.origin.distanceToSquared(s0)>(e.far-e.near)**2))&&(r0.copy(c).invert(),yr.copy(e.ray).applyMatrix4(r0),!(s.boundingBox!==null&&yr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,yr)))}_computeIntersections(e,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,v=c.attributes.uv1,g=c.attributes.normal,_=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(h))for(let M=0,b=_.length;M<b;M++){const y=_[M],x=h[y.materialIndex],I=Math.max(y.start,S.start),B=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let R=I,X=B;R<X;R+=3){const k=d.getX(R),F=d.getX(R+1),J=d.getX(R+2);l=Rc(this,x,e,s,p,v,g,k,F,J),l&&(l.faceIndex=Math.floor(R/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const M=Math.max(0,S.start),b=Math.min(d.count,S.start+S.count);for(let y=M,x=b;y<x;y+=3){const I=d.getX(y),B=d.getX(y+1),R=d.getX(y+2);l=Rc(this,h,e,s,p,v,g,I,B,R),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let M=0,b=_.length;M<b;M++){const y=_[M],x=h[y.materialIndex],I=Math.max(y.start,S.start),B=Math.min(m.count,Math.min(y.start+y.count,S.start+S.count));for(let R=I,X=B;R<X;R+=3){const k=R,F=R+1,J=R+2;l=Rc(this,x,e,s,p,v,g,k,F,J),l&&(l.faceIndex=Math.floor(R/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const M=Math.max(0,S.start),b=Math.min(m.count,S.start+S.count);for(let y=M,x=b;y<x;y+=3){const I=y,B=y+1,R=y+2;l=Rc(this,h,e,s,p,v,g,I,B,R),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function iy(a,e,i,s,l,c,h,d){let m;if(e.side===En?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,e.side===va,d),m===null)return null;wc.copy(d),wc.applyMatrix4(a.matrixWorld);const p=i.ray.origin.distanceTo(wc);return p<i.near||p>i.far?null:{distance:p,point:wc.clone(),object:a}}function Rc(a,e,i,s,l,c,h,d,m,p){a.getVertexPosition(d,Mc),a.getVertexPosition(m,Tc),a.getVertexPosition(p,bc);const v=iy(a,e,i,s,Mc,Tc,bc,o0);if(v){const g=new q;Ri.getBarycoord(o0,Mc,Tc,bc,g),l&&(v.uv=Ri.getInterpolatedAttribute(l,d,m,p,g,new Pe)),c&&(v.uv1=Ri.getInterpolatedAttribute(c,d,m,p,g,new Pe)),h&&(v.normal=Ri.getInterpolatedAttribute(h,d,m,p,g,new q),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const _={a:d,b:m,c:p,normal:new q,materialIndex:0};Ri.getNormal(Mc,Tc,bc,_.normal),v.face=_,v.barycoord=g}return v}class el extends ki{constructor(e=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],v=[],g=[];let _=0,S=0;M("z","y","x",-1,-1,s,i,e,h,c,0),M("z","y","x",1,-1,s,i,-e,h,c,1),M("x","z","y",1,1,e,s,i,l,h,2),M("x","z","y",1,-1,e,s,-i,l,h,3),M("x","y","z",1,-1,e,i,s,l,c,4),M("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Vi(p,3)),this.setAttribute("normal",new Vi(v,3)),this.setAttribute("uv",new Vi(g,2));function M(b,y,x,I,B,R,X,k,F,J,U){const D=R/F,H=X/J,K=R/2,ce=X/2,ee=k/2,O=F+1,w=J+1;let z=0,P=0;const ue=new q;for(let de=0;de<w;de++){const L=de*H-ce;for(let te=0;te<O;te++){const pe=te*D-K;ue[b]=pe*I,ue[y]=L*B,ue[x]=ee,p.push(ue.x,ue.y,ue.z),ue[b]=0,ue[y]=0,ue[x]=k>0?1:-1,v.push(ue.x,ue.y,ue.z),g.push(te/F),g.push(1-de/J),z+=1}}for(let de=0;de<J;de++)for(let L=0;L<F;L++){const te=_+L+O*de,pe=_+L+O*(de+1),ye=_+(L+1)+O*(de+1),Ce=_+(L+1)+O*de;m.push(te,pe,Ce),m.push(pe,ye,Ce),P+=6}d.addGroup(S,P,U),S+=P,_+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new el(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fs(a){const e={};for(const i in a){e[i]={};for(const s in a[i]){const l=a[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Vn(a){const e={};for(let i=0;i<a.length;i++){const s=Fs(a[i]);for(const l in s)e[l]=s[l]}return e}function ay(a){const e=[];for(let i=0;i<a.length;i++)e.push(a[i].clone());return e}function hx(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ut.workingColorSpace}const ry={clone:Fs,merge:Vn};var sy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mn extends Vs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sy,this.fragmentShader=oy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fs(e.uniforms),this.uniformsGroups=ay(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Vd extends ui{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pn,this.projectionMatrix=new pn,this.projectionMatrixInverse=new pn,this.coordinateSystem=Hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ka=new q,l0=new Pe,c0=new Pe;class oi extends Vd{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Rd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rd*2*Math.atan(Math.tan(sh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){Ka.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ka.x,Ka.y).multiplyScalar(-e/Ka.z),Ka.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ka.x,Ka.y).multiplyScalar(-e/Ka.z)}getViewSize(e,i){return this.getViewBounds(e,l0,c0),i.subVectors(c0,l0)}setViewOffset(e,i,s,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(sh*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const bs=-90,Cs=1;class ly extends ui{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new oi(bs,Cs,e,i);l.layers=this.layers,this.add(l);const c=new oi(bs,Cs,e,i);c.layers=this.layers,this.add(c);const h=new oi(bs,Cs,e,i);h.layers=this.layers,this.add(h);const d=new oi(bs,Cs,e,i);d.layers=this.layers,this.add(d);const m=new oi(bs,Cs,e,i);m.layers=this.layers,this.add(m);const p=new oi(bs,Cs,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(e===Hi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Vc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,v]=this.children,g=e.getRenderTarget(),_=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const b=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,c),e.setRenderTarget(s,1,l),e.render(i,h),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=b,e.setRenderTarget(s,5,l),e.render(i,v),e.setRenderTarget(g,_,S),e.xr.enabled=M,s.texture.needsPMREMUpdate=!0}}class dx extends Mn{constructor(e=[],i=Os,s,l,c,h,d,m,p,v){super(e,i,s,l,c,h,d,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cy extends zn{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new dx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new el(5,5,5),c=new mn({name:"CubemapFromEquirect",uniforms:Fs(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:En,blending:In});c.uniforms.tEquirect.value=i;const h=new li(l,c),d=i.minFilter;return i.minFilter===Ur&&(i.minFilter=Pn),new ly(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(c)}}class Dc extends ui{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uy={type:"move"};class wh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const b of e.hand.values()){const y=i.getJointPose(b,s),x=this._getHandJoint(p,b);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const v=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],_=v.position.distanceTo(g.position),S=.02,M=.005;p.inputState.pinching&&_>S+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=S-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(uy)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Dc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class kd{constructor(e,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new gt(e),this.near=i,this.far=s}clone(){return new kd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Dd extends ui{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xa,this.environmentIntensity=1,this.environmentRotation=new xa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class ws extends fi{constructor(e,i,s,l=1){super(e,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Rh=new q,fy=new q,hy=new dt;class br{constructor(e=new q(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Rh.subVectors(s,i).cross(fy.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Rh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||hy.getNormalMatrix(e),l=this.coplanarPoint(Rh).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Er=new Gd,dy=new Pe(.5,.5),Uc=new q;class px{constructor(e=new br,i=new br,s=new br,l=new br,c=new br,h=new br){this.planes=[e,i,s,l,c,h]}set(e,i,s,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Hi,s=!1){const l=this.planes,c=e.elements,h=c[0],d=c[1],m=c[2],p=c[3],v=c[4],g=c[5],_=c[6],S=c[7],M=c[8],b=c[9],y=c[10],x=c[11],I=c[12],B=c[13],R=c[14],X=c[15];if(l[0].setComponents(p-h,S-v,x-M,X-I).normalize(),l[1].setComponents(p+h,S+v,x+M,X+I).normalize(),l[2].setComponents(p+d,S+g,x+b,X+B).normalize(),l[3].setComponents(p-d,S-g,x-b,X-B).normalize(),s)l[4].setComponents(m,_,y,R).normalize(),l[5].setComponents(p-m,S-_,x-y,X-R).normalize();else if(l[4].setComponents(p-m,S-_,x-y,X-R).normalize(),i===Hi)l[5].setComponents(p+m,S+_,x+y,X+R).normalize();else if(i===Vc)l[5].setComponents(m,_,y,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Er.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Er)}intersectsSprite(e){Er.center.set(0,0,0);const i=dy.distanceTo(e.center);return Er.radius=.7071067811865476+i,Er.applyMatrix4(e.matrixWorld),this.intersectsSphere(Er)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Uc.x=l.normal.x>0?e.max.x:e.min.x,Uc.y=l.normal.y>0?e.max.y:e.min.y,Uc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Uc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Xd extends Mn{constructor(e,i,s=$a,l,c,h,d=ci,m=ci,p,v=qo,g=1){if(v!==qo&&v!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:i,depth:g};super(_,l,c,h,d,m,v,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Hd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class mx extends Mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class _a{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,i){const s=this.getUtoTmapping(e);return this.getPoint(s,i)}getPoints(e=5){const i=[];for(let s=0;s<=e;s++)i.push(this.getPoint(s/e));return i}getSpacedPoints(e=5){const i=[];for(let s=0;s<=e;s++)i.push(this.getPointAt(s/e));return i}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),c=0;i.push(0);for(let h=1;h<=e;h++)s=this.getPoint(h/e),c+=s.distanceTo(l),i.push(c),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,i=null){const s=this.getLengths();let l=0;const c=s.length;let h;i?h=i:h=e*s[c-1];let d=0,m=c-1,p;for(;d<=m;)if(l=Math.floor(d+(m-d)/2),p=s[l]-h,p<0)d=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,s[l]===h)return l/(c-1);const v=s[l],_=s[l+1]-v,S=(h-v)/_;return(l+S)/(c-1)}getTangent(e,i){let l=e-1e-4,c=e+1e-4;l<0&&(l=0),c>1&&(c=1);const h=this.getPoint(l),d=this.getPoint(c),m=i||(h.isVector2?new Pe:new q);return m.copy(d).sub(h).normalize(),m}getTangentAt(e,i){const s=this.getUtoTmapping(e);return this.getTangent(s,i)}computeFrenetFrames(e,i=!1){const s=new q,l=[],c=[],h=[],d=new q,m=new pn;for(let S=0;S<=e;S++){const M=S/e;l[S]=this.getTangentAt(M,new q)}c[0]=new q,h[0]=new q;let p=Number.MAX_VALUE;const v=Math.abs(l[0].x),g=Math.abs(l[0].y),_=Math.abs(l[0].z);v<=p&&(p=v,s.set(1,0,0)),g<=p&&(p=g,s.set(0,1,0)),_<=p&&s.set(0,0,1),d.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],d),h[0].crossVectors(l[0],c[0]);for(let S=1;S<=e;S++){if(c[S]=c[S-1].clone(),h[S]=h[S-1].clone(),d.crossVectors(l[S-1],l[S]),d.length()>Number.EPSILON){d.normalize();const M=Math.acos(St(l[S-1].dot(l[S]),-1,1));c[S].applyMatrix4(m.makeRotationAxis(d,M))}h[S].crossVectors(l[S],c[S])}if(i===!0){let S=Math.acos(St(c[0].dot(c[e]),-1,1));S/=e,l[0].dot(d.crossVectors(c[0],c[e]))>0&&(S=-S);for(let M=1;M<=e;M++)c[M].applyMatrix4(m.makeRotationAxis(l[M],S*M)),h[M].crossVectors(l[M],c[M])}return{tangents:l,normals:c,binormals:h}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class gx extends _a{constructor(e=0,i=0,s=1,l=1,c=0,h=Math.PI*2,d=!1,m=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=i,this.xRadius=s,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=h,this.aClockwise=d,this.aRotation=m}getPoint(e,i=new Pe){const s=i,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const h=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(h?c=0:c=l),this.aClockwise===!0&&!h&&(c===l?c=-l:c=c-l);const d=this.aStartAngle+e*c;let m=this.aX+this.xRadius*Math.cos(d),p=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const v=Math.cos(this.aRotation),g=Math.sin(this.aRotation),_=m-this.aX,S=p-this.aY;m=_*v-S*g+this.aX,p=_*g+S*v+this.aY}return s.set(m,p)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class py extends gx{constructor(e,i,s,l,c,h){super(e,i,s,s,l,c,h),this.isArcCurve=!0,this.type="ArcCurve"}}function Yd(){let a=0,e=0,i=0,s=0;function l(c,h,d,m){a=c,e=d,i=-3*c+3*h-2*d-m,s=2*c-2*h+d+m}return{initCatmullRom:function(c,h,d,m,p){l(h,d,p*(d-c),p*(m-h))},initNonuniformCatmullRom:function(c,h,d,m,p,v,g){let _=(h-c)/p-(d-c)/(p+v)+(d-h)/v,S=(d-h)/v-(m-h)/(v+g)+(m-d)/g;_*=v,S*=v,l(h,d,_,S)},calc:function(c){const h=c*c,d=h*c;return a+e*c+i*h+s*d}}}const Lc=new q,Dh=new Yd,Uh=new Yd,Lh=new Yd;class my extends _a{constructor(e=[],i=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=i,this.curveType=s,this.tension=l}getPoint(e,i=new q){const s=i,l=this.points,c=l.length,h=(c-(this.closed?0:1))*e;let d=Math.floor(h),m=h-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:m===0&&d===c-1&&(d=c-2,m=1);let p,v;this.closed||d>0?p=l[(d-1)%c]:(Lc.subVectors(l[0],l[1]).add(l[0]),p=Lc);const g=l[d%c],_=l[(d+1)%c];if(this.closed||d+2<c?v=l[(d+2)%c]:(Lc.subVectors(l[c-1],l[c-2]).add(l[c-1]),v=Lc),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let M=Math.pow(p.distanceToSquared(g),S),b=Math.pow(g.distanceToSquared(_),S),y=Math.pow(_.distanceToSquared(v),S);b<1e-4&&(b=1),M<1e-4&&(M=b),y<1e-4&&(y=b),Dh.initNonuniformCatmullRom(p.x,g.x,_.x,v.x,M,b,y),Uh.initNonuniformCatmullRom(p.y,g.y,_.y,v.y,M,b,y),Lh.initNonuniformCatmullRom(p.z,g.z,_.z,v.z,M,b,y)}else this.curveType==="catmullrom"&&(Dh.initCatmullRom(p.x,g.x,_.x,v.x,this.tension),Uh.initCatmullRom(p.y,g.y,_.y,v.y,this.tension),Lh.initCatmullRom(p.z,g.z,_.z,v.z,this.tension));return s.set(Dh.calc(m),Uh.calc(m),Lh.calc(m)),s}copy(e){super.copy(e),this.points=[];for(let i=0,s=e.points.length;i<s;i++){const l=e.points[i];this.points.push(l.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];e.points.push(l.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let i=0,s=e.points.length;i<s;i++){const l=e.points[i];this.points.push(new q().fromArray(l))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function u0(a,e,i,s,l){const c=(s-e)*.5,h=(l-i)*.5,d=a*a,m=a*d;return(2*i-2*s+c+h)*m+(-3*i+3*s-2*c-h)*d+c*a+i}function gy(a,e){const i=1-a;return i*i*e}function vy(a,e){return 2*(1-a)*a*e}function xy(a,e){return a*a*e}function Yo(a,e,i,s){return gy(a,e)+vy(a,i)+xy(a,s)}function Ay(a,e){const i=1-a;return i*i*i*e}function _y(a,e){const i=1-a;return 3*i*i*a*e}function Sy(a,e){return 3*(1-a)*a*a*e}function yy(a,e){return a*a*a*e}function Wo(a,e,i,s,l){return Ay(a,e)+_y(a,i)+Sy(a,s)+yy(a,l)}class Ey extends _a{constructor(e=new Pe,i=new Pe,s=new Pe,l=new Pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=i,this.v2=s,this.v3=l}getPoint(e,i=new Pe){const s=i,l=this.v0,c=this.v1,h=this.v2,d=this.v3;return s.set(Wo(e,l.x,c.x,h.x,d.x),Wo(e,l.y,c.y,h.y,d.y)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class My extends _a{constructor(e=new q,i=new q,s=new q,l=new q){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=i,this.v2=s,this.v3=l}getPoint(e,i=new q){const s=i,l=this.v0,c=this.v1,h=this.v2,d=this.v3;return s.set(Wo(e,l.x,c.x,h.x,d.x),Wo(e,l.y,c.y,h.y,d.y),Wo(e,l.z,c.z,h.z,d.z)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ty extends _a{constructor(e=new Pe,i=new Pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=i}getPoint(e,i=new Pe){const s=i;return e===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(e).add(this.v1)),s}getPointAt(e,i){return this.getPoint(e,i)}getTangent(e,i=new Pe){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,i){return this.getTangent(e,i)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vx extends _a{constructor(e=new q,i=new q){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=i}getPoint(e,i=new q){const s=i;return e===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(e).add(this.v1)),s}getPointAt(e,i){return this.getPoint(e,i)}getTangent(e,i=new q){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,i){return this.getTangent(e,i)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class by extends _a{constructor(e=new Pe,i=new Pe,s=new Pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=i,this.v2=s}getPoint(e,i=new Pe){const s=i,l=this.v0,c=this.v1,h=this.v2;return s.set(Yo(e,l.x,c.x,h.x),Yo(e,l.y,c.y,h.y)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class xx extends _a{constructor(e=new q,i=new q,s=new q){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=i,this.v2=s}getPoint(e,i=new q){const s=i,l=this.v0,c=this.v1,h=this.v2;return s.set(Yo(e,l.x,c.x,h.x),Yo(e,l.y,c.y,h.y),Yo(e,l.z,c.z,h.z)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Cy extends _a{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,i=new Pe){const s=i,l=this.points,c=(l.length-1)*e,h=Math.floor(c),d=c-h,m=l[h===0?h:h-1],p=l[h],v=l[h>l.length-2?l.length-1:h+1],g=l[h>l.length-3?l.length-1:h+2];return s.set(u0(d,m.x,p.x,v.x,g.x),u0(d,m.y,p.y,v.y,g.y)),s}copy(e){super.copy(e),this.points=[];for(let i=0,s=e.points.length;i<s;i++){const l=e.points[i];this.points.push(l.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];e.points.push(l.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let i=0,s=e.points.length;i<s;i++){const l=e.points[i];this.points.push(new Pe().fromArray(l))}return this}}var wy=Object.freeze({__proto__:null,ArcCurve:py,CatmullRomCurve3:my,CubicBezierCurve:Ey,CubicBezierCurve3:My,EllipseCurve:gx,LineCurve:Ty,LineCurve3:vx,QuadraticBezierCurve:by,QuadraticBezierCurve3:xx,SplineCurve:Cy});class Hs extends ki{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,v=m+1,g=e/d,_=i/m,S=[],M=[],b=[],y=[];for(let x=0;x<v;x++){const I=x*_-h;for(let B=0;B<p;B++){const R=B*g-c;M.push(R,-I,0),b.push(0,0,1),y.push(B/d),y.push(1-x/m)}}for(let x=0;x<m;x++)for(let I=0;I<d;I++){const B=I+p*x,R=I+p*(x+1),X=I+1+p*(x+1),k=I+1+p*x;S.push(B,R,k),S.push(R,X,k)}this.setIndex(S),this.setAttribute("position",new Vi(M,3)),this.setAttribute("normal",new Vi(b,3)),this.setAttribute("uv",new Vi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hs(e.width,e.height,e.widthSegments,e.heightSegments)}}class Wd extends ki{constructor(e=new xx(new q(-1,-1,0),new q(-1,1,0),new q(1,1,0)),i=64,s=1,l=8,c=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:i,radius:s,radialSegments:l,closed:c};const h=e.computeFrenetFrames(i,c);this.tangents=h.tangents,this.normals=h.normals,this.binormals=h.binormals;const d=new q,m=new q,p=new Pe;let v=new q;const g=[],_=[],S=[],M=[];b(),this.setIndex(M),this.setAttribute("position",new Vi(g,3)),this.setAttribute("normal",new Vi(_,3)),this.setAttribute("uv",new Vi(S,2));function b(){for(let B=0;B<i;B++)y(B);y(c===!1?i:0),I(),x()}function y(B){v=e.getPointAt(B/i,v);const R=h.normals[B],X=h.binormals[B];for(let k=0;k<=l;k++){const F=k/l*Math.PI*2,J=Math.sin(F),U=-Math.cos(F);m.x=U*R.x+J*X.x,m.y=U*R.y+J*X.y,m.z=U*R.z+J*X.z,m.normalize(),_.push(m.x,m.y,m.z),d.x=v.x+s*m.x,d.y=v.y+s*m.y,d.z=v.z+s*m.z,g.push(d.x,d.y,d.z)}}function x(){for(let B=1;B<=i;B++)for(let R=1;R<=l;R++){const X=(l+1)*(B-1)+(R-1),k=(l+1)*B+(R-1),F=(l+1)*B+R,J=(l+1)*(B-1)+R;M.push(X,k,J),M.push(k,F,J)}}function I(){for(let B=0;B<=i;B++)for(let R=0;R<=l;R++)p.x=B/i,p.y=R/l,S.push(p.x,p.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Wd(new wy[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Ry extends Vs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lr,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Dy extends Vs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ax{constructor(e,i,s){const l=this;let c=!1,h=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=s,this.abortController=new AbortController,this.itemStart=function(v){d++,c===!1&&l.onStart!==void 0&&l.onStart(v,h,d),c=!0},this.itemEnd=function(v){h++,l.onProgress!==void 0&&l.onProgress(v,h,d),h===d&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(v){l.onError!==void 0&&l.onError(v)},this.resolveURL=function(v){return m?m(v):v},this.setURLModifier=function(v){return m=v,this},this.addHandler=function(v,g){return p.push(v,g),this},this.removeHandler=function(v){const g=p.indexOf(v);return g!==-1&&p.splice(g,2),this},this.getHandler=function(v){for(let g=0,_=p.length;g<_;g+=2){const S=p[g],M=p[g+1];if(S.global&&(S.lastIndex=0),S.test(v))return M}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}class Uy extends Vd{constructor(e=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,h=s+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=v*this.view.offsetY,m=d-v*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class f0 extends ki{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Ly extends oi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class By{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}class mt{constructor(e){this.value=e}clone(){return new mt(this.value.clone===void 0?this.value:this.value.clone())}}function h0(a,e,i,s){const l=Ny(s);switch(i){case ex:return a*e;case nx:return a*e/l.components*l.byteLength;case Id:return a*e/l.components*l.byteLength;case ix:return a*e*2/l.components*l.byteLength;case zd:return a*e*2/l.components*l.byteLength;case tx:return a*e*3/l.components*l.byteLength;case Di:return a*e*4/l.components*l.byteLength;case Fd:return a*e*4/l.components*l.byteLength;case Pc:case Ic:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case zc:case Fc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case nd:case ad:return Math.max(a,16)*Math.max(e,8)/4;case td:case id:return Math.max(a,8)*Math.max(e,8)/2;case rd:case sd:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case od:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case ld:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case cd:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case ud:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case fd:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case hd:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case dd:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case pd:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case md:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case gd:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case vd:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case xd:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Ad:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case _d:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Sd:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case yd:case Ed:case Md:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Td:case bd:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Cd:case wd:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Ny(a){switch(a){case Un:case K0:return{byteLength:1,components:1};case Qo:case Z0:case Ko:return{byteLength:2,components:1};case Od:case Pd:return{byteLength:2,components:4};case $a:case Nd:case pa:return{byteLength:4,components:1};case J0:case $0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gs);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function _x(){let a=null,e=!1,i=null,s=null;function l(c,h){i(c,h),s=a.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=a.requestAnimationFrame(l),e=!0)},stop:function(){a.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){a=c}}}function Oy(a){const e=new WeakMap;function i(d,m){const p=d.array,v=d.usage,g=p.byteLength,_=a.createBuffer();a.bindBuffer(m,_),a.bufferData(m,p,v),d.onUploadCallback();let S;if(p instanceof Float32Array)S=a.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=a.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=a.HALF_FLOAT:S=a.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=a.SHORT;else if(p instanceof Uint32Array)S=a.UNSIGNED_INT;else if(p instanceof Int32Array)S=a.INT;else if(p instanceof Int8Array)S=a.BYTE;else if(p instanceof Uint8Array)S=a.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,m,p){const v=m.array,g=m.updateRanges;if(a.bindBuffer(p,d),g.length===0)a.bufferSubData(p,0,v);else{g.sort((S,M)=>S.start-M.start);let _=0;for(let S=1;S<g.length;S++){const M=g[_],b=g[S];b.start<=M.start+M.count+1?M.count=Math.max(M.count,b.start+b.count-M.start):(++_,g[_]=b)}g.length=_+1;for(let S=0,M=g.length;S<M;S++){const b=g[S];a.bufferSubData(p,b.start*v.BYTES_PER_ELEMENT,v,b.start,b.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(a.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var Py=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Iy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,zy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ky=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Yy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ky=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Zy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Jy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$y=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,iE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,aE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,rE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,sE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,oE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,lE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hE="gl_FragColor = linearToOutputTexel( gl_FragColor );",dE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,mE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,AE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_E=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,SE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,EE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ME=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,TE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,CE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,wE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,RE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,DE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,UE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,LE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,BE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,NE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,OE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,PE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,IE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,FE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,VE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,XE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,YE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,QE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,KE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,JE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$E=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,eM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,tM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,aM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,rM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,oM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,fM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,xM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,AM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_M=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,SM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,EM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,MM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,TM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,CM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,RM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,DM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,UM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,LM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,BM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,NM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const OM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,PM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,VM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,kM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,XM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,YM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,WM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,KM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$M=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,eT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,nT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,iT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,sT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,uT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nt={alphahash_fragment:Py,alphahash_pars_fragment:Iy,alphamap_fragment:zy,alphamap_pars_fragment:Fy,alphatest_fragment:Hy,alphatest_pars_fragment:Gy,aomap_fragment:Vy,aomap_pars_fragment:ky,batching_pars_vertex:Xy,batching_vertex:Yy,begin_vertex:Wy,beginnormal_vertex:Qy,bsdfs:qy,iridescence_fragment:jy,bumpmap_pars_fragment:Ky,clipping_planes_fragment:Zy,clipping_planes_pars_fragment:Jy,clipping_planes_pars_vertex:$y,clipping_planes_vertex:eE,color_fragment:tE,color_pars_fragment:nE,color_pars_vertex:iE,color_vertex:aE,common:rE,cube_uv_reflection_fragment:sE,defaultnormal_vertex:oE,displacementmap_pars_vertex:lE,displacementmap_vertex:cE,emissivemap_fragment:uE,emissivemap_pars_fragment:fE,colorspace_fragment:hE,colorspace_pars_fragment:dE,envmap_fragment:pE,envmap_common_pars_fragment:mE,envmap_pars_fragment:gE,envmap_pars_vertex:vE,envmap_physical_pars_fragment:wE,envmap_vertex:xE,fog_vertex:AE,fog_pars_vertex:_E,fog_fragment:SE,fog_pars_fragment:yE,gradientmap_pars_fragment:EE,lightmap_pars_fragment:ME,lights_lambert_fragment:TE,lights_lambert_pars_fragment:bE,lights_pars_begin:CE,lights_toon_fragment:RE,lights_toon_pars_fragment:DE,lights_phong_fragment:UE,lights_phong_pars_fragment:LE,lights_physical_fragment:BE,lights_physical_pars_fragment:NE,lights_fragment_begin:OE,lights_fragment_maps:PE,lights_fragment_end:IE,logdepthbuf_fragment:zE,logdepthbuf_pars_fragment:FE,logdepthbuf_pars_vertex:HE,logdepthbuf_vertex:GE,map_fragment:VE,map_pars_fragment:kE,map_particle_fragment:XE,map_particle_pars_fragment:YE,metalnessmap_fragment:WE,metalnessmap_pars_fragment:QE,morphinstance_vertex:qE,morphcolor_vertex:jE,morphnormal_vertex:KE,morphtarget_pars_vertex:ZE,morphtarget_vertex:JE,normal_fragment_begin:$E,normal_fragment_maps:eM,normal_pars_fragment:tM,normal_pars_vertex:nM,normal_vertex:iM,normalmap_pars_fragment:aM,clearcoat_normal_fragment_begin:rM,clearcoat_normal_fragment_maps:sM,clearcoat_pars_fragment:oM,iridescence_pars_fragment:lM,opaque_fragment:cM,packing:uM,premultiplied_alpha_fragment:fM,project_vertex:hM,dithering_fragment:dM,dithering_pars_fragment:pM,roughnessmap_fragment:mM,roughnessmap_pars_fragment:gM,shadowmap_pars_fragment:vM,shadowmap_pars_vertex:xM,shadowmap_vertex:AM,shadowmask_pars_fragment:_M,skinbase_vertex:SM,skinning_pars_vertex:yM,skinning_vertex:EM,skinnormal_vertex:MM,specularmap_fragment:TM,specularmap_pars_fragment:bM,tonemapping_fragment:CM,tonemapping_pars_fragment:wM,transmission_fragment:RM,transmission_pars_fragment:DM,uv_pars_fragment:UM,uv_pars_vertex:LM,uv_vertex:BM,worldpos_vertex:NM,background_vert:OM,background_frag:PM,backgroundCube_vert:IM,backgroundCube_frag:zM,cube_vert:FM,cube_frag:HM,depth_vert:GM,depth_frag:VM,distanceRGBA_vert:kM,distanceRGBA_frag:XM,equirect_vert:YM,equirect_frag:WM,linedashed_vert:QM,linedashed_frag:qM,meshbasic_vert:jM,meshbasic_frag:KM,meshlambert_vert:ZM,meshlambert_frag:JM,meshmatcap_vert:$M,meshmatcap_frag:eT,meshnormal_vert:tT,meshnormal_frag:nT,meshphong_vert:iT,meshphong_frag:aT,meshphysical_vert:rT,meshphysical_frag:sT,meshtoon_vert:oT,meshtoon_frag:lT,points_vert:cT,points_frag:uT,shadow_vert:fT,shadow_frag:hT,sprite_vert:dT,sprite_frag:pT},Ne={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},zi={basic:{uniforms:Vn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:Vn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new gt(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:Vn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:Vn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:Vn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new gt(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:Vn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:Vn([Ne.points,Ne.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:Vn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:Vn([Ne.common,Ne.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:Vn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:Vn([Ne.sprite,Ne.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:Vn([Ne.common,Ne.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:Vn([Ne.lights,Ne.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};zi.physical={uniforms:Vn([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const Bc={r:0,b:0,g:0},Mr=new xa,mT=new pn;function gT(a,e,i,s,l,c,h){const d=new gt(0);let m=c===!0?0:1,p,v,g=null,_=0,S=null;function M(B){let R=B.isScene===!0?B.background:null;return R&&R.isTexture&&(R=(B.backgroundBlurriness>0?i:e).get(R)),R}function b(B){let R=!1;const X=M(B);X===null?x(d,m):X&&X.isColor&&(x(X,1),R=!0);const k=a.xr.getEnvironmentBlendMode();k==="additive"?s.buffers.color.setClear(0,0,0,1,h):k==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(a.autoClear||R)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function y(B,R){const X=M(R);X&&(X.isCubeTexture||X.mapping===Xc)?(v===void 0&&(v=new li(new el(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:Fs(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(k,F,J){this.matrixWorld.copyPosition(J.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),Mr.copy(R.backgroundRotation),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,X.isCubeTexture&&X.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),v.material.uniforms.envMap.value=X,v.material.uniforms.flipEnvMap.value=X.isCubeTexture&&X.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(mT.makeRotationFromEuler(Mr)),v.material.toneMapped=Ut.getTransfer(X.colorSpace)!==Vt,(g!==X||_!==X.version||S!==a.toneMapping)&&(v.material.needsUpdate=!0,g=X,_=X.version,S=a.toneMapping),v.layers.enableAll(),B.unshift(v,v.geometry,v.material,0,0,null)):X&&X.isTexture&&(p===void 0&&(p=new li(new Hs(2,2),new mn({name:"BackgroundMaterial",uniforms:Fs(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:va,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=X,p.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,p.material.toneMapped=Ut.getTransfer(X.colorSpace)!==Vt,X.matrixAutoUpdate===!0&&X.updateMatrix(),p.material.uniforms.uvTransform.value.copy(X.matrix),(g!==X||_!==X.version||S!==a.toneMapping)&&(p.material.needsUpdate=!0,g=X,_=X.version,S=a.toneMapping),p.layers.enableAll(),B.unshift(p,p.geometry,p.material,0,0,null))}function x(B,R){B.getRGB(Bc,hx(a)),s.buffers.color.setClear(Bc.r,Bc.g,Bc.b,R,h)}function I(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(B,R=1){d.set(B),m=R,x(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(B){m=B,x(d,m)},render:b,addToRenderList:y,dispose:I}}function vT(a,e){const i=a.getParameter(a.MAX_VERTEX_ATTRIBS),s={},l=_(null);let c=l,h=!1;function d(D,H,K,ce,ee){let O=!1;const w=g(ce,K,H);c!==w&&(c=w,p(c.object)),O=S(D,ce,K,ee),O&&M(D,ce,K,ee),ee!==null&&e.update(ee,a.ELEMENT_ARRAY_BUFFER),(O||h)&&(h=!1,R(D,H,K,ce),ee!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function m(){return a.createVertexArray()}function p(D){return a.bindVertexArray(D)}function v(D){return a.deleteVertexArray(D)}function g(D,H,K){const ce=K.wireframe===!0;let ee=s[D.id];ee===void 0&&(ee={},s[D.id]=ee);let O=ee[H.id];O===void 0&&(O={},ee[H.id]=O);let w=O[ce];return w===void 0&&(w=_(m()),O[ce]=w),w}function _(D){const H=[],K=[],ce=[];for(let ee=0;ee<i;ee++)H[ee]=0,K[ee]=0,ce[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:K,attributeDivisors:ce,object:D,attributes:{},index:null}}function S(D,H,K,ce){const ee=c.attributes,O=H.attributes;let w=0;const z=K.getAttributes();for(const P in z)if(z[P].location>=0){const de=ee[P];let L=O[P];if(L===void 0&&(P==="instanceMatrix"&&D.instanceMatrix&&(L=D.instanceMatrix),P==="instanceColor"&&D.instanceColor&&(L=D.instanceColor)),de===void 0||de.attribute!==L||L&&de.data!==L.data)return!0;w++}return c.attributesNum!==w||c.index!==ce}function M(D,H,K,ce){const ee={},O=H.attributes;let w=0;const z=K.getAttributes();for(const P in z)if(z[P].location>=0){let de=O[P];de===void 0&&(P==="instanceMatrix"&&D.instanceMatrix&&(de=D.instanceMatrix),P==="instanceColor"&&D.instanceColor&&(de=D.instanceColor));const L={};L.attribute=de,de&&de.data&&(L.data=de.data),ee[P]=L,w++}c.attributes=ee,c.attributesNum=w,c.index=ce}function b(){const D=c.newAttributes;for(let H=0,K=D.length;H<K;H++)D[H]=0}function y(D){x(D,0)}function x(D,H){const K=c.newAttributes,ce=c.enabledAttributes,ee=c.attributeDivisors;K[D]=1,ce[D]===0&&(a.enableVertexAttribArray(D),ce[D]=1),ee[D]!==H&&(a.vertexAttribDivisor(D,H),ee[D]=H)}function I(){const D=c.newAttributes,H=c.enabledAttributes;for(let K=0,ce=H.length;K<ce;K++)H[K]!==D[K]&&(a.disableVertexAttribArray(K),H[K]=0)}function B(D,H,K,ce,ee,O,w){w===!0?a.vertexAttribIPointer(D,H,K,ee,O):a.vertexAttribPointer(D,H,K,ce,ee,O)}function R(D,H,K,ce){b();const ee=ce.attributes,O=K.getAttributes(),w=H.defaultAttributeValues;for(const z in O){const P=O[z];if(P.location>=0){let ue=ee[z];if(ue===void 0&&(z==="instanceMatrix"&&D.instanceMatrix&&(ue=D.instanceMatrix),z==="instanceColor"&&D.instanceColor&&(ue=D.instanceColor)),ue!==void 0){const de=ue.normalized,L=ue.itemSize,te=e.get(ue);if(te===void 0)continue;const pe=te.buffer,ye=te.type,Ce=te.bytesPerElement,ne=ye===a.INT||ye===a.UNSIGNED_INT||ue.gpuType===Nd;if(ue.isInterleavedBufferAttribute){const he=ue.data,De=he.stride,Oe=ue.offset;if(he.isInstancedInterleavedBuffer){for(let Ye=0;Ye<P.locationSize;Ye++)x(P.location+Ye,he.meshPerAttribute);D.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ye=0;Ye<P.locationSize;Ye++)y(P.location+Ye);a.bindBuffer(a.ARRAY_BUFFER,pe);for(let Ye=0;Ye<P.locationSize;Ye++)B(P.location+Ye,L/P.locationSize,ye,de,De*Ce,(Oe+L/P.locationSize*Ye)*Ce,ne)}else{if(ue.isInstancedBufferAttribute){for(let he=0;he<P.locationSize;he++)x(P.location+he,ue.meshPerAttribute);D.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let he=0;he<P.locationSize;he++)y(P.location+he);a.bindBuffer(a.ARRAY_BUFFER,pe);for(let he=0;he<P.locationSize;he++)B(P.location+he,L/P.locationSize,ye,de,L*Ce,L/P.locationSize*he*Ce,ne)}}else if(w!==void 0){const de=w[z];if(de!==void 0)switch(de.length){case 2:a.vertexAttrib2fv(P.location,de);break;case 3:a.vertexAttrib3fv(P.location,de);break;case 4:a.vertexAttrib4fv(P.location,de);break;default:a.vertexAttrib1fv(P.location,de)}}}}I()}function X(){J();for(const D in s){const H=s[D];for(const K in H){const ce=H[K];for(const ee in ce)v(ce[ee].object),delete ce[ee];delete H[K]}delete s[D]}}function k(D){if(s[D.id]===void 0)return;const H=s[D.id];for(const K in H){const ce=H[K];for(const ee in ce)v(ce[ee].object),delete ce[ee];delete H[K]}delete s[D.id]}function F(D){for(const H in s){const K=s[H];if(K[D.id]===void 0)continue;const ce=K[D.id];for(const ee in ce)v(ce[ee].object),delete ce[ee];delete K[D.id]}}function J(){U(),h=!0,c!==l&&(c=l,p(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:J,resetDefaultState:U,dispose:X,releaseStatesOfGeometry:k,releaseStatesOfProgram:F,initAttributes:b,enableAttribute:y,disableUnusedAttributes:I}}function xT(a,e,i){let s;function l(p){s=p}function c(p,v){a.drawArrays(s,p,v),i.update(v,s,1)}function h(p,v,g){g!==0&&(a.drawArraysInstanced(s,p,v,g),i.update(v,s,g))}function d(p,v,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,v,0,g);let S=0;for(let M=0;M<g;M++)S+=v[M];i.update(S,s,1)}function m(p,v,g,_){if(g===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<p.length;M++)h(p[M],v[M],_[M]);else{S.multiDrawArraysInstancedWEBGL(s,p,0,v,0,_,0,g);let M=0;for(let b=0;b<g;b++)M+=v[b]*_[b];i.update(M,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function AT(a,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");l=a.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(F){return!(F!==Di&&s.convert(F)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const J=F===Ko&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Un&&s.convert(F)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==pa&&!J)}function m(F){if(F==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const g=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),M=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=a.getParameter(a.MAX_TEXTURE_SIZE),y=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),x=a.getParameter(a.MAX_VERTEX_ATTRIBS),I=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),B=a.getParameter(a.MAX_VARYING_VECTORS),R=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),X=M>0,k=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:_,maxTextures:S,maxVertexTextures:M,maxTextureSize:b,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:I,maxVaryings:B,maxFragmentUniforms:R,vertexTextures:X,maxSamples:k}}function _T(a){const e=this;let i=null,s=0,l=!1,c=!1;const h=new br,d=new dt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const S=g.length!==0||_||s!==0||l;return l=_,s=g.length,S},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,_){i=v(g,_,0)},this.setState=function(g,_,S){const M=g.clippingPlanes,b=g.clipIntersection,y=g.clipShadows,x=a.get(g);if(!l||M===null||M.length===0||c&&!y)c?v(null):p();else{const I=c?0:s,B=I*4;let R=x.clippingState||null;m.value=R,R=v(M,_,B,S);for(let X=0;X!==B;++X)R[X]=i[X];x.clippingState=R,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=I}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(g,_,S,M){const b=g!==null?g.length:0;let y=null;if(b!==0){if(y=m.value,M!==!0||y===null){const x=S+b*4,I=_.matrixWorldInverse;d.getNormalMatrix(I),(y===null||y.length<x)&&(y=new Float32Array(x));for(let B=0,R=S;B!==b;++B,R+=4)h.copy(g[B]).applyMatrix4(I,d),h.normal.toArray(y,R),y[R+3]=h.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,y}}function ST(a){let e=new WeakMap;function i(h,d){return d===Zh?h.mapping=Os:d===Jh&&(h.mapping=Ps),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Zh||d===Jh)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new cy(m.height);return p.fromEquirectangularTexture(a,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}const Us=4,d0=[.125,.215,.35,.446,.526,.582],Rr=20,Bh=new Uy,p0=new gt;let Nh=null,Oh=0,Ph=0,Ih=!1;const Cr=(1+Math.sqrt(5))/2,Rs=1/Cr,m0=[new q(-Cr,Rs,0),new q(Cr,Rs,0),new q(-Rs,0,Cr),new q(Rs,0,Cr),new q(0,Cr,-Rs),new q(0,Cr,Rs),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)],yT=new q;class g0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=yT}=c;Nh=this._renderer.getRenderTarget(),Oh=this._renderer.getActiveCubeFace(),Ph=this._renderer.getActiveMipmapLevel(),Ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=A0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=x0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Nh,Oh,Ph),this._renderer.xr.enabled=Ih,e.scissorTest=!1,Nc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Os||e.mapping===Ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nh=this._renderer.getRenderTarget(),Oh=this._renderer.getActiveCubeFace(),Ph=this._renderer.getActiveMipmapLevel(),Ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:Ko,format:Di,colorSpace:er,depthBuffer:!1},l=v0(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=v0(e,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ET(c)),this._blurMaterial=MT(c,e,i)}return l}_compileMaterial(e){const i=new li(this._lodPlanes[0],e);this._renderer.compile(i,Bh)}_sceneToCubeUV(e,i,s,l,c){const m=new oi(90,1,i,s),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,S=g.toneMapping;g.getClearColor(p0),g.toneMapping=Ja,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null));const b=new cx({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1}),y=new li(new el,b);let x=!1;const I=e.background;I?I.isColor&&(b.color.copy(I),e.background=null,x=!0):(b.color.copy(p0),x=!0);for(let B=0;B<6;B++){const R=B%3;R===0?(m.up.set(0,p[B],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[B],c.y,c.z)):R===1?(m.up.set(0,0,p[B]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[B],c.z)):(m.up.set(0,p[B],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[B]));const X=this._cubeSize;Nc(l,R*X,B>2?X:0,X,X),g.setRenderTarget(l),x&&g.render(y,m),g.render(e,m)}y.geometry.dispose(),y.material.dispose(),g.toneMapping=S,g.autoClear=_,e.background=I}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Os||e.mapping===Ps;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=A0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=x0());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new li(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;Nc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Bh)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=m0[(l-c-1)%m0.length];this._blur(e,c-1,c,h,d)}i.autoClear=s}_blur(e,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",c),this._halfBlur(h,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,g=new li(this._lodPlanes[l],p),_=p.uniforms,S=this._sizeLods[s]-1,M=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Rr-1),b=c/M,y=isFinite(c)?1+Math.floor(v*b):Rr;y>Rr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Rr}`);const x=[];let I=0;for(let F=0;F<Rr;++F){const J=F/b,U=Math.exp(-J*J/2);x.push(U),F===0?I+=U:F<y&&(I+=2*U)}for(let F=0;F<x.length;F++)x[F]=x[F]/I;_.envMap.value=e.texture,_.samples.value=y,_.weights.value=x,_.latitudinal.value=h==="latitudinal",d&&(_.poleAxis.value=d);const{_lodMax:B}=this;_.dTheta.value=M,_.mipInt.value=B-s;const R=this._sizeLods[l],X=3*R*(l>B-Us?l-B+Us:0),k=4*(this._cubeSize-R);Nc(i,X,k,3*R,2*R),m.setRenderTarget(i),m.render(g,Bh)}}function ET(a){const e=[],i=[],s=[];let l=a;const c=a-Us+1+d0.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>a-Us?m=d0[h-a+Us-1]:h===0&&(m=0),s.push(m);const p=1/(d-2),v=-p,g=1+p,_=[v,v,g,v,g,g,v,v,g,g,v,g],S=6,M=6,b=3,y=2,x=1,I=new Float32Array(b*M*S),B=new Float32Array(y*M*S),R=new Float32Array(x*M*S);for(let k=0;k<S;k++){const F=k%3*2/3-1,J=k>2?0:-1,U=[F,J,0,F+2/3,J,0,F+2/3,J+1,0,F,J,0,F+2/3,J+1,0,F,J+1,0];I.set(U,b*M*k),B.set(_,y*M*k);const D=[k,k,k,k,k,k];R.set(D,x*M*k)}const X=new ki;X.setAttribute("position",new fi(I,b)),X.setAttribute("uv",new fi(B,y)),X.setAttribute("faceIndex",new fi(R,x)),e.push(X),l>Us&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function v0(a,e,i){const s=new zn(a,e,i);return s.texture.mapping=Xc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Nc(a,e,i,s,l){a.viewport.set(e,i,s,l),a.scissor.set(e,i,s,l)}function MT(a,e,i){const s=new Float32Array(Rr),l=new q(0,1,0);return new mn({name:"SphericalGaussianBlur",defines:{n:Rr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function x0(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function A0(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Qd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function TT(a){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===Zh||m===Jh,v=m===Os||m===Ps;if(p||v){let g=e.get(d);const _=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==_)return i===null&&(i=new g0(a)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const S=d.image;return p&&S&&S.height>0||v&&S&&l(S)?(i===null&&(i=new g0(a)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function l(d){let m=0;const p=6;for(let v=0;v<p;v++)d[v]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function bT(a){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=a.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&jo("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function CT(a,e,i,s){const l={},c=new WeakMap;function h(g){const _=g.target;_.index!==null&&e.remove(_.index);for(const M in _.attributes)e.remove(_.attributes[M]);_.removeEventListener("dispose",h),delete l[_.id];const S=c.get(_);S&&(e.remove(S),c.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function d(g,_){return l[_.id]===!0||(_.addEventListener("dispose",h),l[_.id]=!0,i.memory.geometries++),_}function m(g){const _=g.attributes;for(const S in _)e.update(_[S],a.ARRAY_BUFFER)}function p(g){const _=[],S=g.index,M=g.attributes.position;let b=0;if(S!==null){const I=S.array;b=S.version;for(let B=0,R=I.length;B<R;B+=3){const X=I[B+0],k=I[B+1],F=I[B+2];_.push(X,k,k,F,F,X)}}else if(M!==void 0){const I=M.array;b=M.version;for(let B=0,R=I.length/3-1;B<R;B+=3){const X=B+0,k=B+1,F=B+2;_.push(X,k,k,F,F,X)}}else return;const y=new(rx(_)?fx:ux)(_,1);y.version=b;const x=c.get(g);x&&e.remove(x),c.set(g,y)}function v(g){const _=c.get(g);if(_){const S=g.index;S!==null&&_.version<S.version&&p(g)}else p(g);return c.get(g)}return{get:d,update:m,getWireframeAttribute:v}}function wT(a,e,i){let s;function l(_){s=_}let c,h;function d(_){c=_.type,h=_.bytesPerElement}function m(_,S){a.drawElements(s,S,c,_*h),i.update(S,s,1)}function p(_,S,M){M!==0&&(a.drawElementsInstanced(s,S,c,_*h,M),i.update(S,s,M))}function v(_,S,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,c,_,0,M);let y=0;for(let x=0;x<M;x++)y+=S[x];i.update(y,s,1)}function g(_,S,M,b){if(M===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<_.length;x++)p(_[x]/h,S[x],b[x]);else{y.multiDrawElementsInstancedWEBGL(s,S,0,c,_,0,b,0,M);let x=0;for(let I=0;I<M;I++)x+=S[I]*b[I];i.update(x,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function RT(a){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case a.TRIANGLES:i.triangles+=d*(c/3);break;case a.LINES:i.lines+=d*(c/2);break;case a.LINE_STRIP:i.lines+=d*(c-1);break;case a.LINE_LOOP:i.lines+=d*c;break;case a.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function DT(a,e,i){const s=new WeakMap,l=new Kt;function c(h,d,m){const p=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=v!==void 0?v.length:0;let _=s.get(d);if(_===void 0||_.count!==g){let D=function(){J.dispose(),s.delete(d),d.removeEventListener("dispose",D)};var S=D;_!==void 0&&_.texture.dispose();const M=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],B=d.morphAttributes.color||[];let R=0;M===!0&&(R=1),b===!0&&(R=2),y===!0&&(R=3);let X=d.attributes.position.count*R,k=1;X>e.maxTextureSize&&(k=Math.ceil(X/e.maxTextureSize),X=e.maxTextureSize);const F=new Float32Array(X*k*4*g),J=new sx(F,X,k,g);J.type=pa,J.needsUpdate=!0;const U=R*4;for(let H=0;H<g;H++){const K=x[H],ce=I[H],ee=B[H],O=X*k*4*H;for(let w=0;w<K.count;w++){const z=w*U;M===!0&&(l.fromBufferAttribute(K,w),F[O+z+0]=l.x,F[O+z+1]=l.y,F[O+z+2]=l.z,F[O+z+3]=0),b===!0&&(l.fromBufferAttribute(ce,w),F[O+z+4]=l.x,F[O+z+5]=l.y,F[O+z+6]=l.z,F[O+z+7]=0),y===!0&&(l.fromBufferAttribute(ee,w),F[O+z+8]=l.x,F[O+z+9]=l.y,F[O+z+10]=l.z,F[O+z+11]=ee.itemSize===4?l.w:1)}}_={count:g,texture:J,size:new Pe(X,k)},s.set(d,_),d.addEventListener("dispose",D)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(a,"morphTexture",h.morphTexture,i);else{let M=0;for(let y=0;y<p.length;y++)M+=p[y];const b=d.morphTargetsRelative?1:1-M;m.getUniforms().setValue(a,"morphTargetBaseInfluence",b),m.getUniforms().setValue(a,"morphTargetInfluences",p)}m.getUniforms().setValue(a,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(a,"morphTargetsTextureSize",_.size)}return{update:c}}function UT(a,e,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,v=m.geometry,g=e.get(m,v);if(l.get(g)!==p&&(e.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,a.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,a.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const _=m.skeleton;l.get(_)!==p&&(_.update(),l.set(_,p))}return g}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const Sx=new Mn,_0=new Xd(1,1),yx=new sx,Ex=new YS,Mx=new dx,S0=[],y0=[],E0=new Float32Array(16),M0=new Float32Array(9),T0=new Float32Array(4);function ks(a,e,i){const s=a[0];if(s<=0||s>0)return a;const l=e*i;let c=S0[l];if(c===void 0&&(c=new Float32Array(l),S0[l]=c),e!==0){s.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=i,a[h].toArray(c,d)}return c}function xn(a,e){if(a.length!==e.length)return!1;for(let i=0,s=a.length;i<s;i++)if(a[i]!==e[i])return!1;return!0}function An(a,e){for(let i=0,s=e.length;i<s;i++)a[i]=e[i]}function Yc(a,e){let i=y0[e];i===void 0&&(i=new Int32Array(e),y0[e]=i);for(let s=0;s!==e;++s)i[s]=a.allocateTextureUnit();return i}function LT(a,e){const i=this.cache;i[0]!==e&&(a.uniform1f(this.addr,e),i[0]=e)}function BT(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;a.uniform2fv(this.addr,e),An(i,e)}}function NT(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(xn(i,e))return;a.uniform3fv(this.addr,e),An(i,e)}}function OT(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;a.uniform4fv(this.addr,e),An(i,e)}}function PT(a,e){const i=this.cache,s=e.elements;if(s===void 0){if(xn(i,e))return;a.uniformMatrix2fv(this.addr,!1,e),An(i,e)}else{if(xn(i,s))return;T0.set(s),a.uniformMatrix2fv(this.addr,!1,T0),An(i,s)}}function IT(a,e){const i=this.cache,s=e.elements;if(s===void 0){if(xn(i,e))return;a.uniformMatrix3fv(this.addr,!1,e),An(i,e)}else{if(xn(i,s))return;M0.set(s),a.uniformMatrix3fv(this.addr,!1,M0),An(i,s)}}function zT(a,e){const i=this.cache,s=e.elements;if(s===void 0){if(xn(i,e))return;a.uniformMatrix4fv(this.addr,!1,e),An(i,e)}else{if(xn(i,s))return;E0.set(s),a.uniformMatrix4fv(this.addr,!1,E0),An(i,s)}}function FT(a,e){const i=this.cache;i[0]!==e&&(a.uniform1i(this.addr,e),i[0]=e)}function HT(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;a.uniform2iv(this.addr,e),An(i,e)}}function GT(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(xn(i,e))return;a.uniform3iv(this.addr,e),An(i,e)}}function VT(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;a.uniform4iv(this.addr,e),An(i,e)}}function kT(a,e){const i=this.cache;i[0]!==e&&(a.uniform1ui(this.addr,e),i[0]=e)}function XT(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;a.uniform2uiv(this.addr,e),An(i,e)}}function YT(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(xn(i,e))return;a.uniform3uiv(this.addr,e),An(i,e)}}function WT(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;a.uniform4uiv(this.addr,e),An(i,e)}}function QT(a,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l);let c;this.type===a.SAMPLER_2D_SHADOW?(_0.compareFunction=ax,c=_0):c=Sx,i.setTexture2D(e||c,l)}function qT(a,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Ex,l)}function jT(a,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||Mx,l)}function KT(a,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(a.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||yx,l)}function ZT(a){switch(a){case 5126:return LT;case 35664:return BT;case 35665:return NT;case 35666:return OT;case 35674:return PT;case 35675:return IT;case 35676:return zT;case 5124:case 35670:return FT;case 35667:case 35671:return HT;case 35668:case 35672:return GT;case 35669:case 35673:return VT;case 5125:return kT;case 36294:return XT;case 36295:return YT;case 36296:return WT;case 35678:case 36198:case 36298:case 36306:case 35682:return QT;case 35679:case 36299:case 36307:return qT;case 35680:case 36300:case 36308:case 36293:return jT;case 36289:case 36303:case 36311:case 36292:return KT}}function JT(a,e){a.uniform1fv(this.addr,e)}function $T(a,e){const i=ks(e,this.size,2);a.uniform2fv(this.addr,i)}function eb(a,e){const i=ks(e,this.size,3);a.uniform3fv(this.addr,i)}function tb(a,e){const i=ks(e,this.size,4);a.uniform4fv(this.addr,i)}function nb(a,e){const i=ks(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,i)}function ib(a,e){const i=ks(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,i)}function ab(a,e){const i=ks(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,i)}function rb(a,e){a.uniform1iv(this.addr,e)}function sb(a,e){a.uniform2iv(this.addr,e)}function ob(a,e){a.uniform3iv(this.addr,e)}function lb(a,e){a.uniform4iv(this.addr,e)}function cb(a,e){a.uniform1uiv(this.addr,e)}function ub(a,e){a.uniform2uiv(this.addr,e)}function fb(a,e){a.uniform3uiv(this.addr,e)}function hb(a,e){a.uniform4uiv(this.addr,e)}function db(a,e,i){const s=this.cache,l=e.length,c=Yc(i,l);xn(s,c)||(a.uniform1iv(this.addr,c),An(s,c));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||Sx,c[h])}function pb(a,e,i){const s=this.cache,l=e.length,c=Yc(i,l);xn(s,c)||(a.uniform1iv(this.addr,c),An(s,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||Ex,c[h])}function mb(a,e,i){const s=this.cache,l=e.length,c=Yc(i,l);xn(s,c)||(a.uniform1iv(this.addr,c),An(s,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||Mx,c[h])}function gb(a,e,i){const s=this.cache,l=e.length,c=Yc(i,l);xn(s,c)||(a.uniform1iv(this.addr,c),An(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||yx,c[h])}function vb(a){switch(a){case 5126:return JT;case 35664:return $T;case 35665:return eb;case 35666:return tb;case 35674:return nb;case 35675:return ib;case 35676:return ab;case 5124:case 35670:return rb;case 35667:case 35671:return sb;case 35668:case 35672:return ob;case 35669:case 35673:return lb;case 5125:return cb;case 36294:return ub;case 36295:return fb;case 36296:return hb;case 35678:case 36198:case 36298:case 36306:case 35682:return db;case 35679:case 36299:case 36307:return pb;case 35680:case 36300:case 36308:case 36293:return mb;case 36289:case 36303:case 36311:case 36292:return gb}}class xb{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=ZT(i.type)}}class Ab{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=vb(i.type)}}class _b{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,i[d.id],s)}}}const zh=/(\w+)(\])?(\[|\.)?/g;function b0(a,e){a.seq.push(e),a.map[e.id]=e}function Sb(a,e,i){const s=a.name,l=s.length;for(zh.lastIndex=0;;){const c=zh.exec(s),h=zh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){b0(i,p===void 0?new xb(d,a,e):new Ab(d,a,e));break}else{let g=i.map[d];g===void 0&&(g=new _b(d),b0(i,g)),i=g}}}class Hc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=e.getActiveUniform(i,l),h=e.getUniformLocation(i,c.name);Sb(c,h,this)}}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function C0(a,e,i){const s=a.createShader(e);return a.shaderSource(s,i),a.compileShader(s),s}const yb=37297;let Eb=0;function Mb(a,e){const i=a.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const w0=new dt;function Tb(a){Ut._getMatrix(w0,Ut.workingColorSpace,a);const e=`mat3( ${w0.elements.map(i=>i.toFixed(4))} )`;switch(Ut.getTransfer(a)){case Gc:return[e,"LinearTransferOETF"];case Vt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function R0(a,e,i){const s=a.getShaderParameter(e,a.COMPILE_STATUS),c=(a.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+Mb(a.getShaderSource(e),d)}else return c}function bb(a,e){const i=Tb(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Cb(a,e){let i;switch(e){case AS:i="Linear";break;case _S:i="Reinhard";break;case SS:i="Cineon";break;case yS:i="ACESFilmic";break;case MS:i="AgX";break;case TS:i="Neutral";break;case ES:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+a+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Oc=new q;function wb(){Ut.getLuminanceCoefficients(Oc);const a=Oc.x.toFixed(4),e=Oc.y.toFixed(4),i=Oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Rb(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xo).join(`
`)}function Db(a){const e=[];for(const i in a){const s=a[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function Ub(a,e){const i={},s=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=a.getActiveAttrib(e,l),h=c.name;let d=1;c.type===a.FLOAT_MAT2&&(d=2),c.type===a.FLOAT_MAT3&&(d=3),c.type===a.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:a.getAttribLocation(e,h),locationSize:d}}return i}function Xo(a){return a!==""}function D0(a,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function U0(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Lb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ud(a){return a.replace(Lb,Nb)}const Bb=new Map;function Nb(a,e){let i=nt[e];if(i===void 0){const s=Bb.get(e);if(s!==void 0)i=nt[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Ud(i)}const Ob=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function L0(a){return a.replace(Ob,Pb)}function Pb(a,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function B0(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ib(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===Q0?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===J_?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===da&&(e="SHADOWMAP_TYPE_VSM"),e}function zb(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Os:case Ps:e="ENVMAP_TYPE_CUBE";break;case Xc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Fb(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Ps:e="ENVMAP_MODE_REFRACTION";break}return e}function Hb(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case q0:e="ENVMAP_BLENDING_MULTIPLY";break;case vS:e="ENVMAP_BLENDING_MIX";break;case xS:e="ENVMAP_BLENDING_ADD";break}return e}function Gb(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function Vb(a,e,i,s){const l=a.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=Ib(i),p=zb(i),v=Fb(i),g=Hb(i),_=Gb(i),S=Rb(i),M=Db(c),b=l.createProgram();let y,x,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(Xo).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(Xo).join(`
`),x.length>0&&(x+=`
`)):(y=[B0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),x=[B0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ja?"#define TONE_MAPPING":"",i.toneMapping!==Ja?nt.tonemapping_pars_fragment:"",i.toneMapping!==Ja?Cb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,bb("linearToOutputTexel",i.outputColorSpace),wb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Xo).join(`
`)),h=Ud(h),h=D0(h,i),h=U0(h,i),d=Ud(d),d=D0(d,i),d=U0(d,i),h=L0(h),d=L0(d),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",i.glslVersion===Wv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Wv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const B=I+y+h,R=I+x+d,X=C0(l,l.VERTEX_SHADER,B),k=C0(l,l.FRAGMENT_SHADER,R);l.attachShader(b,X),l.attachShader(b,k),i.index0AttributeName!==void 0?l.bindAttribLocation(b,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(b,0,"position"),l.linkProgram(b);function F(H){if(a.debug.checkShaderErrors){const K=l.getProgramInfoLog(b)||"",ce=l.getShaderInfoLog(X)||"",ee=l.getShaderInfoLog(k)||"",O=K.trim(),w=ce.trim(),z=ee.trim();let P=!0,ue=!0;if(l.getProgramParameter(b,l.LINK_STATUS)===!1)if(P=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(l,b,X,k);else{const de=R0(l,X,"vertex"),L=R0(l,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(b,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+O+`
`+de+`
`+L)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(w===""||z==="")&&(ue=!1);ue&&(H.diagnostics={runnable:P,programLog:O,vertexShader:{log:w,prefix:y},fragmentShader:{log:z,prefix:x}})}l.deleteShader(X),l.deleteShader(k),J=new Hc(l,b),U=Ub(l,b)}let J;this.getUniforms=function(){return J===void 0&&F(this),J};let U;this.getAttributes=function(){return U===void 0&&F(this),U};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(b,yb)),D},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(b),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Eb++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=X,this.fragmentShader=k,this}let kb=0;class Xb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new Yb(e),i.set(e,s)),s}}class Yb{constructor(e){this.id=kb++,this.code=e,this.usedTimes=0}}function Wb(a,e,i,s,l,c,h){const d=new ox,m=new Xb,p=new Set,v=[],g=l.logarithmicDepthBuffer,_=l.vertexTextures;let S=l.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(U){return p.add(U),U===0?"uv":`uv${U}`}function y(U,D,H,K,ce){const ee=K.fog,O=ce.geometry,w=U.isMeshStandardMaterial?K.environment:null,z=(U.isMeshStandardMaterial?i:e).get(U.envMap||w),P=z&&z.mapping===Xc?z.image.height:null,ue=M[U.type];U.precision!==null&&(S=l.getMaxPrecision(U.precision),S!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",S,"instead."));const de=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,L=de!==void 0?de.length:0;let te=0;O.morphAttributes.position!==void 0&&(te=1),O.morphAttributes.normal!==void 0&&(te=2),O.morphAttributes.color!==void 0&&(te=3);let pe,ye,Ce,ne;if(ue){const Ct=zi[ue];pe=Ct.vertexShader,ye=Ct.fragmentShader}else pe=U.vertexShader,ye=U.fragmentShader,m.update(U),Ce=m.getVertexShaderID(U),ne=m.getFragmentShaderID(U);const he=a.getRenderTarget(),De=a.state.buffers.depth.getReversed(),Oe=ce.isInstancedMesh===!0,Ye=ce.isBatchedMesh===!0,ct=!!U.map,Jt=!!U.matcap,V=!!z,Tt=!!U.aoMap,at=!!U.lightMap,Ke=!!U.bumpMap,We=!!U.normalMap,Xt=!!U.displacementMap,Xe=!!U.emissiveMap,ot=!!U.metalnessMap,tn=!!U.roughnessMap,$t=U.anisotropy>0,N=U.clearcoat>0,E=U.dispersion>0,re=U.iridescence>0,ve=U.sheen>0,Ee=U.transmission>0,me=$t&&!!U.anisotropyMap,Ze=N&&!!U.clearcoatMap,we=N&&!!U.clearcoatNormalMap,qe=N&&!!U.clearcoatRoughnessMap,je=re&&!!U.iridescenceMap,Te=re&&!!U.iridescenceThicknessMap,Re=ve&&!!U.sheenColorMap,Je=ve&&!!U.sheenRoughnessMap,ze=!!U.specularMap,Le=!!U.specularColorMap,ut=!!U.specularIntensityMap,Q=Ee&&!!U.transmissionMap,be=Ee&&!!U.thicknessMap,Ue=!!U.gradientMap,Fe=!!U.alphaMap,Me=U.alphaTest>0,_e=!!U.alphaHash,He=!!U.extensions;let st=Ja;U.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(st=a.toneMapping);const Pt={shaderID:ue,shaderType:U.type,shaderName:U.name,vertexShader:pe,fragmentShader:ye,defines:U.defines,customVertexShaderID:Ce,customFragmentShaderID:ne,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:S,batching:Ye,batchingColor:Ye&&ce._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&ce.instanceColor!==null,instancingMorph:Oe&&ce.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:he===null?a.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:er,alphaToCoverage:!!U.alphaToCoverage,map:ct,matcap:Jt,envMap:V,envMapMode:V&&z.mapping,envMapCubeUVHeight:P,aoMap:Tt,lightMap:at,bumpMap:Ke,normalMap:We,displacementMap:_&&Xt,emissiveMap:Xe,normalMapObjectSpace:We&&U.normalMapType===RS,normalMapTangentSpace:We&&U.normalMapType===wS,metalnessMap:ot,roughnessMap:tn,anisotropy:$t,anisotropyMap:me,clearcoat:N,clearcoatMap:Ze,clearcoatNormalMap:we,clearcoatRoughnessMap:qe,dispersion:E,iridescence:re,iridescenceMap:je,iridescenceThicknessMap:Te,sheen:ve,sheenColorMap:Re,sheenRoughnessMap:Je,specularMap:ze,specularColorMap:Le,specularIntensityMap:ut,transmission:Ee,transmissionMap:Q,thicknessMap:be,gradientMap:Ue,opaque:U.transparent===!1&&U.blending===Ls&&U.alphaToCoverage===!1,alphaMap:Fe,alphaTest:Me,alphaHash:_e,combine:U.combine,mapUv:ct&&b(U.map.channel),aoMapUv:Tt&&b(U.aoMap.channel),lightMapUv:at&&b(U.lightMap.channel),bumpMapUv:Ke&&b(U.bumpMap.channel),normalMapUv:We&&b(U.normalMap.channel),displacementMapUv:Xt&&b(U.displacementMap.channel),emissiveMapUv:Xe&&b(U.emissiveMap.channel),metalnessMapUv:ot&&b(U.metalnessMap.channel),roughnessMapUv:tn&&b(U.roughnessMap.channel),anisotropyMapUv:me&&b(U.anisotropyMap.channel),clearcoatMapUv:Ze&&b(U.clearcoatMap.channel),clearcoatNormalMapUv:we&&b(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qe&&b(U.clearcoatRoughnessMap.channel),iridescenceMapUv:je&&b(U.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&b(U.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&b(U.sheenColorMap.channel),sheenRoughnessMapUv:Je&&b(U.sheenRoughnessMap.channel),specularMapUv:ze&&b(U.specularMap.channel),specularColorMapUv:Le&&b(U.specularColorMap.channel),specularIntensityMapUv:ut&&b(U.specularIntensityMap.channel),transmissionMapUv:Q&&b(U.transmissionMap.channel),thicknessMapUv:be&&b(U.thicknessMap.channel),alphaMapUv:Fe&&b(U.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(We||$t),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:ce.isPoints===!0&&!!O.attributes.uv&&(ct||Fe),fog:!!ee,useFog:U.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:U.flatShading===!0&&U.wireframe===!1,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:De,skinning:ce.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:te,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:U.dithering,shadowMapEnabled:a.shadowMap.enabled&&H.length>0,shadowMapType:a.shadowMap.type,toneMapping:st,decodeVideoTexture:ct&&U.map.isVideoTexture===!0&&Ut.getTransfer(U.map.colorSpace)===Vt,decodeVideoTextureEmissive:Xe&&U.emissiveMap.isVideoTexture===!0&&Ut.getTransfer(U.emissiveMap.colorSpace)===Vt,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===kn,flipSided:U.side===En,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:He&&U.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&U.extensions.multiDraw===!0||Ye)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return Pt.vertexUv1s=p.has(1),Pt.vertexUv2s=p.has(2),Pt.vertexUv3s=p.has(3),p.clear(),Pt}function x(U){const D=[];if(U.shaderID?D.push(U.shaderID):(D.push(U.customVertexShaderID),D.push(U.customFragmentShaderID)),U.defines!==void 0)for(const H in U.defines)D.push(H),D.push(U.defines[H]);return U.isRawShaderMaterial===!1&&(I(D,U),B(D,U),D.push(a.outputColorSpace)),D.push(U.customProgramCacheKey),D.join()}function I(U,D){U.push(D.precision),U.push(D.outputColorSpace),U.push(D.envMapMode),U.push(D.envMapCubeUVHeight),U.push(D.mapUv),U.push(D.alphaMapUv),U.push(D.lightMapUv),U.push(D.aoMapUv),U.push(D.bumpMapUv),U.push(D.normalMapUv),U.push(D.displacementMapUv),U.push(D.emissiveMapUv),U.push(D.metalnessMapUv),U.push(D.roughnessMapUv),U.push(D.anisotropyMapUv),U.push(D.clearcoatMapUv),U.push(D.clearcoatNormalMapUv),U.push(D.clearcoatRoughnessMapUv),U.push(D.iridescenceMapUv),U.push(D.iridescenceThicknessMapUv),U.push(D.sheenColorMapUv),U.push(D.sheenRoughnessMapUv),U.push(D.specularMapUv),U.push(D.specularColorMapUv),U.push(D.specularIntensityMapUv),U.push(D.transmissionMapUv),U.push(D.thicknessMapUv),U.push(D.combine),U.push(D.fogExp2),U.push(D.sizeAttenuation),U.push(D.morphTargetsCount),U.push(D.morphAttributeCount),U.push(D.numDirLights),U.push(D.numPointLights),U.push(D.numSpotLights),U.push(D.numSpotLightMaps),U.push(D.numHemiLights),U.push(D.numRectAreaLights),U.push(D.numDirLightShadows),U.push(D.numPointLightShadows),U.push(D.numSpotLightShadows),U.push(D.numSpotLightShadowsWithMaps),U.push(D.numLightProbes),U.push(D.shadowMapType),U.push(D.toneMapping),U.push(D.numClippingPlanes),U.push(D.numClipIntersection),U.push(D.depthPacking)}function B(U,D){d.disableAll(),D.supportsVertexTextures&&d.enable(0),D.instancing&&d.enable(1),D.instancingColor&&d.enable(2),D.instancingMorph&&d.enable(3),D.matcap&&d.enable(4),D.envMap&&d.enable(5),D.normalMapObjectSpace&&d.enable(6),D.normalMapTangentSpace&&d.enable(7),D.clearcoat&&d.enable(8),D.iridescence&&d.enable(9),D.alphaTest&&d.enable(10),D.vertexColors&&d.enable(11),D.vertexAlphas&&d.enable(12),D.vertexUv1s&&d.enable(13),D.vertexUv2s&&d.enable(14),D.vertexUv3s&&d.enable(15),D.vertexTangents&&d.enable(16),D.anisotropy&&d.enable(17),D.alphaHash&&d.enable(18),D.batching&&d.enable(19),D.dispersion&&d.enable(20),D.batchingColor&&d.enable(21),D.gradientMap&&d.enable(22),U.push(d.mask),d.disableAll(),D.fog&&d.enable(0),D.useFog&&d.enable(1),D.flatShading&&d.enable(2),D.logarithmicDepthBuffer&&d.enable(3),D.reversedDepthBuffer&&d.enable(4),D.skinning&&d.enable(5),D.morphTargets&&d.enable(6),D.morphNormals&&d.enable(7),D.morphColors&&d.enable(8),D.premultipliedAlpha&&d.enable(9),D.shadowMapEnabled&&d.enable(10),D.doubleSided&&d.enable(11),D.flipSided&&d.enable(12),D.useDepthPacking&&d.enable(13),D.dithering&&d.enable(14),D.transmission&&d.enable(15),D.sheen&&d.enable(16),D.opaque&&d.enable(17),D.pointsUvs&&d.enable(18),D.decodeVideoTexture&&d.enable(19),D.decodeVideoTextureEmissive&&d.enable(20),D.alphaToCoverage&&d.enable(21),U.push(d.mask)}function R(U){const D=M[U.type];let H;if(D){const K=zi[D];H=ry.clone(K.uniforms)}else H=U.uniforms;return H}function X(U,D){let H;for(let K=0,ce=v.length;K<ce;K++){const ee=v[K];if(ee.cacheKey===D){H=ee,++H.usedTimes;break}}return H===void 0&&(H=new Vb(a,D,U,c),v.push(H)),H}function k(U){if(--U.usedTimes===0){const D=v.indexOf(U);v[D]=v[v.length-1],v.pop(),U.destroy()}}function F(U){m.remove(U)}function J(){m.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:R,acquireProgram:X,releaseProgram:k,releaseShaderCache:F,programs:v,dispose:J}}function Qb(){let a=new WeakMap;function e(h){return a.has(h)}function i(h){let d=a.get(h);return d===void 0&&(d={},a.set(h,d)),d}function s(h){a.delete(h)}function l(h,d,m){a.get(h)[d]=m}function c(){a=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function qb(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function N0(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function O0(){const a=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function h(g,_,S,M,b,y){let x=a[e];return x===void 0?(x={id:g.id,object:g,geometry:_,material:S,groupOrder:M,renderOrder:g.renderOrder,z:b,group:y},a[e]=x):(x.id=g.id,x.object=g,x.geometry=_,x.material=S,x.groupOrder=M,x.renderOrder=g.renderOrder,x.z=b,x.group=y),e++,x}function d(g,_,S,M,b,y){const x=h(g,_,S,M,b,y);S.transmission>0?s.push(x):S.transparent===!0?l.push(x):i.push(x)}function m(g,_,S,M,b,y){const x=h(g,_,S,M,b,y);S.transmission>0?s.unshift(x):S.transparent===!0?l.unshift(x):i.unshift(x)}function p(g,_){i.length>1&&i.sort(g||qb),s.length>1&&s.sort(_||N0),l.length>1&&l.sort(_||N0)}function v(){for(let g=e,_=a.length;g<_;g++){const S=a[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:v,sort:p}}function jb(){let a=new WeakMap;function e(s,l){const c=a.get(s);let h;return c===void 0?(h=new O0,a.set(s,[h])):l>=c.length?(h=new O0,c.push(h)):h=c[l],h}function i(){a=new WeakMap}return{get:e,dispose:i}}function Kb(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new q,color:new gt};break;case"SpotLight":i={position:new q,direction:new q,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new q,color:new gt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new q,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":i={color:new gt,position:new q,halfWidth:new q,halfHeight:new q};break}return a[e.id]=i,i}}}function Zb(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=i,i}}}let Jb=0;function $b(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function e1(a){const e=new Kb,i=Zb(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new q);const l=new q,c=new pn,h=new pn;function d(p){let v=0,g=0,_=0;for(let U=0;U<9;U++)s.probe[U].set(0,0,0);let S=0,M=0,b=0,y=0,x=0,I=0,B=0,R=0,X=0,k=0,F=0;p.sort($b);for(let U=0,D=p.length;U<D;U++){const H=p[U],K=H.color,ce=H.intensity,ee=H.distance,O=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)v+=K.r*ce,g+=K.g*ce,_+=K.b*ce;else if(H.isLightProbe){for(let w=0;w<9;w++)s.probe[w].addScaledVector(H.sh.coefficients[w],ce);F++}else if(H.isDirectionalLight){const w=e.get(H);if(w.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const z=H.shadow,P=i.get(H);P.shadowIntensity=z.intensity,P.shadowBias=z.bias,P.shadowNormalBias=z.normalBias,P.shadowRadius=z.radius,P.shadowMapSize=z.mapSize,s.directionalShadow[S]=P,s.directionalShadowMap[S]=O,s.directionalShadowMatrix[S]=H.shadow.matrix,I++}s.directional[S]=w,S++}else if(H.isSpotLight){const w=e.get(H);w.position.setFromMatrixPosition(H.matrixWorld),w.color.copy(K).multiplyScalar(ce),w.distance=ee,w.coneCos=Math.cos(H.angle),w.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),w.decay=H.decay,s.spot[b]=w;const z=H.shadow;if(H.map&&(s.spotLightMap[X]=H.map,X++,z.updateMatrices(H),H.castShadow&&k++),s.spotLightMatrix[b]=z.matrix,H.castShadow){const P=i.get(H);P.shadowIntensity=z.intensity,P.shadowBias=z.bias,P.shadowNormalBias=z.normalBias,P.shadowRadius=z.radius,P.shadowMapSize=z.mapSize,s.spotShadow[b]=P,s.spotShadowMap[b]=O,R++}b++}else if(H.isRectAreaLight){const w=e.get(H);w.color.copy(K).multiplyScalar(ce),w.halfWidth.set(H.width*.5,0,0),w.halfHeight.set(0,H.height*.5,0),s.rectArea[y]=w,y++}else if(H.isPointLight){const w=e.get(H);if(w.color.copy(H.color).multiplyScalar(H.intensity),w.distance=H.distance,w.decay=H.decay,H.castShadow){const z=H.shadow,P=i.get(H);P.shadowIntensity=z.intensity,P.shadowBias=z.bias,P.shadowNormalBias=z.normalBias,P.shadowRadius=z.radius,P.shadowMapSize=z.mapSize,P.shadowCameraNear=z.camera.near,P.shadowCameraFar=z.camera.far,s.pointShadow[M]=P,s.pointShadowMap[M]=O,s.pointShadowMatrix[M]=H.shadow.matrix,B++}s.point[M]=w,M++}else if(H.isHemisphereLight){const w=e.get(H);w.skyColor.copy(H.color).multiplyScalar(ce),w.groundColor.copy(H.groundColor).multiplyScalar(ce),s.hemi[x]=w,x++}}y>0&&(a.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ne.LTC_FLOAT_1,s.rectAreaLTC2=Ne.LTC_FLOAT_2):(s.rectAreaLTC1=Ne.LTC_HALF_1,s.rectAreaLTC2=Ne.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=g,s.ambient[2]=_;const J=s.hash;(J.directionalLength!==S||J.pointLength!==M||J.spotLength!==b||J.rectAreaLength!==y||J.hemiLength!==x||J.numDirectionalShadows!==I||J.numPointShadows!==B||J.numSpotShadows!==R||J.numSpotMaps!==X||J.numLightProbes!==F)&&(s.directional.length=S,s.spot.length=b,s.rectArea.length=y,s.point.length=M,s.hemi.length=x,s.directionalShadow.length=I,s.directionalShadowMap.length=I,s.pointShadow.length=B,s.pointShadowMap.length=B,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=I,s.pointShadowMatrix.length=B,s.spotLightMatrix.length=R+X-k,s.spotLightMap.length=X,s.numSpotLightShadowsWithMaps=k,s.numLightProbes=F,J.directionalLength=S,J.pointLength=M,J.spotLength=b,J.rectAreaLength=y,J.hemiLength=x,J.numDirectionalShadows=I,J.numPointShadows=B,J.numSpotShadows=R,J.numSpotMaps=X,J.numLightProbes=F,s.version=Jb++)}function m(p,v){let g=0,_=0,S=0,M=0,b=0;const y=v.matrixWorldInverse;for(let x=0,I=p.length;x<I;x++){const B=p[x];if(B.isDirectionalLight){const R=s.directional[g];R.direction.setFromMatrixPosition(B.matrixWorld),l.setFromMatrixPosition(B.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(y),g++}else if(B.isSpotLight){const R=s.spot[S];R.position.setFromMatrixPosition(B.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(B.matrixWorld),l.setFromMatrixPosition(B.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(y),S++}else if(B.isRectAreaLight){const R=s.rectArea[M];R.position.setFromMatrixPosition(B.matrixWorld),R.position.applyMatrix4(y),h.identity(),c.copy(B.matrixWorld),c.premultiply(y),h.extractRotation(c),R.halfWidth.set(B.width*.5,0,0),R.halfHeight.set(0,B.height*.5,0),R.halfWidth.applyMatrix4(h),R.halfHeight.applyMatrix4(h),M++}else if(B.isPointLight){const R=s.point[_];R.position.setFromMatrixPosition(B.matrixWorld),R.position.applyMatrix4(y),_++}else if(B.isHemisphereLight){const R=s.hemi[b];R.direction.setFromMatrixPosition(B.matrixWorld),R.direction.transformDirection(y),b++}}}return{setup:d,setupView:m,state:s}}function P0(a){const e=new e1(a),i=[],s=[];function l(v){p.camera=v,i.length=0,s.length=0}function c(v){i.push(v)}function h(v){s.push(v)}function d(){e.setup(i)}function m(v){e.setupView(i,v)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function t1(a){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new P0(a),e.set(l,[d])):c>=h.length?(d=new P0(a),h.push(d)):d=h[c],d}function s(){e=new WeakMap}return{get:i,dispose:s}}const n1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,i1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function a1(a,e,i){let s=new px;const l=new Pe,c=new Pe,h=new Kt,d=new Ry({depthPacking:CS}),m=new Dy,p={},v=i.maxTextureSize,g={[va]:En,[En]:va,[kn]:kn},_=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:n1,fragmentShader:i1}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const M=new ki;M.setAttribute("position",new fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new li(M,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Q0;let x=this.type;this.render=function(k,F,J){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||k.length===0)return;const U=a.getRenderTarget(),D=a.getActiveCubeFace(),H=a.getActiveMipmapLevel(),K=a.state;K.setBlending(In),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const ce=x!==da&&this.type===da,ee=x===da&&this.type!==da;for(let O=0,w=k.length;O<w;O++){const z=k[O],P=z.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;l.copy(P.mapSize);const ue=P.getFrameExtents();if(l.multiply(ue),c.copy(P.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/ue.x),l.x=c.x*ue.x,P.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/ue.y),l.y=c.y*ue.y,P.mapSize.y=c.y)),P.map===null||ce===!0||ee===!0){const L=this.type!==da?{minFilter:ci,magFilter:ci}:{};P.map!==null&&P.map.dispose(),P.map=new zn(l.x,l.y,L),P.map.texture.name=z.name+".shadowMap",P.camera.updateProjectionMatrix()}a.setRenderTarget(P.map),a.clear();const de=P.getViewportCount();for(let L=0;L<de;L++){const te=P.getViewport(L);h.set(c.x*te.x,c.y*te.y,c.x*te.z,c.y*te.w),K.viewport(h),P.updateMatrices(z,L),s=P.getFrustum(),R(F,J,P.camera,z,this.type)}P.isPointLightShadow!==!0&&this.type===da&&I(P,J),P.needsUpdate=!1}x=this.type,y.needsUpdate=!1,a.setRenderTarget(U,D,H)};function I(k,F){const J=e.update(b);_.defines.VSM_SAMPLES!==k.blurSamples&&(_.defines.VSM_SAMPLES=k.blurSamples,S.defines.VSM_SAMPLES=k.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new zn(l.x,l.y)),_.uniforms.shadow_pass.value=k.map.texture,_.uniforms.resolution.value=k.mapSize,_.uniforms.radius.value=k.radius,a.setRenderTarget(k.mapPass),a.clear(),a.renderBufferDirect(F,null,J,_,b,null),S.uniforms.shadow_pass.value=k.mapPass.texture,S.uniforms.resolution.value=k.mapSize,S.uniforms.radius.value=k.radius,a.setRenderTarget(k.map),a.clear(),a.renderBufferDirect(F,null,J,S,b,null)}function B(k,F,J,U){let D=null;const H=J.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(H!==void 0)D=H;else if(D=J.isPointLight===!0?m:d,a.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const K=D.uuid,ce=F.uuid;let ee=p[K];ee===void 0&&(ee={},p[K]=ee);let O=ee[ce];O===void 0&&(O=D.clone(),ee[ce]=O,F.addEventListener("dispose",X)),D=O}if(D.visible=F.visible,D.wireframe=F.wireframe,U===da?D.side=F.shadowSide!==null?F.shadowSide:F.side:D.side=F.shadowSide!==null?F.shadowSide:g[F.side],D.alphaMap=F.alphaMap,D.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,D.map=F.map,D.clipShadows=F.clipShadows,D.clippingPlanes=F.clippingPlanes,D.clipIntersection=F.clipIntersection,D.displacementMap=F.displacementMap,D.displacementScale=F.displacementScale,D.displacementBias=F.displacementBias,D.wireframeLinewidth=F.wireframeLinewidth,D.linewidth=F.linewidth,J.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const K=a.properties.get(D);K.light=J}return D}function R(k,F,J,U,D){if(k.visible===!1)return;if(k.layers.test(F.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&D===da)&&(!k.frustumCulled||s.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,k.matrixWorld);const ce=e.update(k),ee=k.material;if(Array.isArray(ee)){const O=ce.groups;for(let w=0,z=O.length;w<z;w++){const P=O[w],ue=ee[P.materialIndex];if(ue&&ue.visible){const de=B(k,ue,U,D);k.onBeforeShadow(a,k,F,J,ce,de,P),a.renderBufferDirect(J,null,ce,de,k,P),k.onAfterShadow(a,k,F,J,ce,de,P)}}}else if(ee.visible){const O=B(k,ee,U,D);k.onBeforeShadow(a,k,F,J,ce,O,null),a.renderBufferDirect(J,null,ce,O,k,null),k.onAfterShadow(a,k,F,J,ce,O,null)}}const K=k.children;for(let ce=0,ee=K.length;ce<ee;ce++)R(K[ce],F,J,U,D)}function X(k){k.target.removeEventListener("dispose",X);for(const J in p){const U=p[J],D=k.target.uuid;D in U&&(U[D].dispose(),delete U[D])}}}const r1={[Xh]:Yh,[Wh]:jh,[Qh]:Kh,[Ns]:qh,[Yh]:Xh,[jh]:Wh,[Kh]:Qh,[qh]:Ns};function s1(a,e){function i(){let Q=!1;const be=new Kt;let Ue=null;const Fe=new Kt(0,0,0,0);return{setMask:function(Me){Ue!==Me&&!Q&&(a.colorMask(Me,Me,Me,Me),Ue=Me)},setLocked:function(Me){Q=Me},setClear:function(Me,_e,He,st,Pt){Pt===!0&&(Me*=st,_e*=st,He*=st),be.set(Me,_e,He,st),Fe.equals(be)===!1&&(a.clearColor(Me,_e,He,st),Fe.copy(be))},reset:function(){Q=!1,Ue=null,Fe.set(-1,0,0,0)}}}function s(){let Q=!1,be=!1,Ue=null,Fe=null,Me=null;return{setReversed:function(_e){if(be!==_e){const He=e.get("EXT_clip_control");_e?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),be=_e;const st=Me;Me=null,this.setClear(st)}},getReversed:function(){return be},setTest:function(_e){_e?he(a.DEPTH_TEST):De(a.DEPTH_TEST)},setMask:function(_e){Ue!==_e&&!Q&&(a.depthMask(_e),Ue=_e)},setFunc:function(_e){if(be&&(_e=r1[_e]),Fe!==_e){switch(_e){case Xh:a.depthFunc(a.NEVER);break;case Yh:a.depthFunc(a.ALWAYS);break;case Wh:a.depthFunc(a.LESS);break;case Ns:a.depthFunc(a.LEQUAL);break;case Qh:a.depthFunc(a.EQUAL);break;case qh:a.depthFunc(a.GEQUAL);break;case jh:a.depthFunc(a.GREATER);break;case Kh:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Fe=_e}},setLocked:function(_e){Q=_e},setClear:function(_e){Me!==_e&&(be&&(_e=1-_e),a.clearDepth(_e),Me=_e)},reset:function(){Q=!1,Ue=null,Fe=null,Me=null,be=!1}}}function l(){let Q=!1,be=null,Ue=null,Fe=null,Me=null,_e=null,He=null,st=null,Pt=null;return{setTest:function(Ct){Q||(Ct?he(a.STENCIL_TEST):De(a.STENCIL_TEST))},setMask:function(Ct){be!==Ct&&!Q&&(a.stencilMask(Ct),be=Ct)},setFunc:function(Ct,Fn,hi){(Ue!==Ct||Fe!==Fn||Me!==hi)&&(a.stencilFunc(Ct,Fn,hi),Ue=Ct,Fe=Fn,Me=hi)},setOp:function(Ct,Fn,hi){(_e!==Ct||He!==Fn||st!==hi)&&(a.stencilOp(Ct,Fn,hi),_e=Ct,He=Fn,st=hi)},setLocked:function(Ct){Q=Ct},setClear:function(Ct){Pt!==Ct&&(a.clearStencil(Ct),Pt=Ct)},reset:function(){Q=!1,be=null,Ue=null,Fe=null,Me=null,_e=null,He=null,st=null,Pt=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let v={},g={},_=new WeakMap,S=[],M=null,b=!1,y=null,x=null,I=null,B=null,R=null,X=null,k=null,F=new gt(0,0,0),J=0,U=!1,D=null,H=null,K=null,ce=null,ee=null;const O=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let w=!1,z=0;const P=a.getParameter(a.VERSION);P.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(P)[1]),w=z>=1):P.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),w=z>=2);let ue=null,de={};const L=a.getParameter(a.SCISSOR_BOX),te=a.getParameter(a.VIEWPORT),pe=new Kt().fromArray(L),ye=new Kt().fromArray(te);function Ce(Q,be,Ue,Fe){const Me=new Uint8Array(4),_e=a.createTexture();a.bindTexture(Q,_e),a.texParameteri(Q,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(Q,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let He=0;He<Ue;He++)Q===a.TEXTURE_3D||Q===a.TEXTURE_2D_ARRAY?a.texImage3D(be,0,a.RGBA,1,1,Fe,0,a.RGBA,a.UNSIGNED_BYTE,Me):a.texImage2D(be+He,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Me);return _e}const ne={};ne[a.TEXTURE_2D]=Ce(a.TEXTURE_2D,a.TEXTURE_2D,1),ne[a.TEXTURE_CUBE_MAP]=Ce(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[a.TEXTURE_2D_ARRAY]=Ce(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),ne[a.TEXTURE_3D]=Ce(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),he(a.DEPTH_TEST),h.setFunc(Ns),Ke(!1),We(Hv),he(a.CULL_FACE),Tt(In);function he(Q){v[Q]!==!0&&(a.enable(Q),v[Q]=!0)}function De(Q){v[Q]!==!1&&(a.disable(Q),v[Q]=!1)}function Oe(Q,be){return g[Q]!==be?(a.bindFramebuffer(Q,be),g[Q]=be,Q===a.DRAW_FRAMEBUFFER&&(g[a.FRAMEBUFFER]=be),Q===a.FRAMEBUFFER&&(g[a.DRAW_FRAMEBUFFER]=be),!0):!1}function Ye(Q,be){let Ue=S,Fe=!1;if(Q){Ue=_.get(be),Ue===void 0&&(Ue=[],_.set(be,Ue));const Me=Q.textures;if(Ue.length!==Me.length||Ue[0]!==a.COLOR_ATTACHMENT0){for(let _e=0,He=Me.length;_e<He;_e++)Ue[_e]=a.COLOR_ATTACHMENT0+_e;Ue.length=Me.length,Fe=!0}}else Ue[0]!==a.BACK&&(Ue[0]=a.BACK,Fe=!0);Fe&&a.drawBuffers(Ue)}function ct(Q){return M!==Q?(a.useProgram(Q),M=Q,!0):!1}const Jt={[wr]:a.FUNC_ADD,[eS]:a.FUNC_SUBTRACT,[tS]:a.FUNC_REVERSE_SUBTRACT};Jt[nS]=a.MIN,Jt[iS]=a.MAX;const V={[aS]:a.ZERO,[rS]:a.ONE,[sS]:a.SRC_COLOR,[Vh]:a.SRC_ALPHA,[hS]:a.SRC_ALPHA_SATURATE,[uS]:a.DST_COLOR,[lS]:a.DST_ALPHA,[oS]:a.ONE_MINUS_SRC_COLOR,[kh]:a.ONE_MINUS_SRC_ALPHA,[fS]:a.ONE_MINUS_DST_COLOR,[cS]:a.ONE_MINUS_DST_ALPHA,[dS]:a.CONSTANT_COLOR,[pS]:a.ONE_MINUS_CONSTANT_COLOR,[mS]:a.CONSTANT_ALPHA,[gS]:a.ONE_MINUS_CONSTANT_ALPHA};function Tt(Q,be,Ue,Fe,Me,_e,He,st,Pt,Ct){if(Q===In){b===!0&&(De(a.BLEND),b=!1);return}if(b===!1&&(he(a.BLEND),b=!0),Q!==$_){if(Q!==y||Ct!==U){if((x!==wr||R!==wr)&&(a.blendEquation(a.FUNC_ADD),x=wr,R=wr),Ct)switch(Q){case Ls:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Gv:a.blendFunc(a.ONE,a.ONE);break;case Vv:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case kv:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",Q);break}else switch(Q){case Ls:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Gv:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case Vv:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kv:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",Q);break}I=null,B=null,X=null,k=null,F.set(0,0,0),J=0,y=Q,U=Ct}return}Me=Me||be,_e=_e||Ue,He=He||Fe,(be!==x||Me!==R)&&(a.blendEquationSeparate(Jt[be],Jt[Me]),x=be,R=Me),(Ue!==I||Fe!==B||_e!==X||He!==k)&&(a.blendFuncSeparate(V[Ue],V[Fe],V[_e],V[He]),I=Ue,B=Fe,X=_e,k=He),(st.equals(F)===!1||Pt!==J)&&(a.blendColor(st.r,st.g,st.b,Pt),F.copy(st),J=Pt),y=Q,U=!1}function at(Q,be){Q.side===kn?De(a.CULL_FACE):he(a.CULL_FACE);let Ue=Q.side===En;be&&(Ue=!Ue),Ke(Ue),Q.blending===Ls&&Q.transparent===!1?Tt(In):Tt(Q.blending,Q.blendEquation,Q.blendSrc,Q.blendDst,Q.blendEquationAlpha,Q.blendSrcAlpha,Q.blendDstAlpha,Q.blendColor,Q.blendAlpha,Q.premultipliedAlpha),h.setFunc(Q.depthFunc),h.setTest(Q.depthTest),h.setMask(Q.depthWrite),c.setMask(Q.colorWrite);const Fe=Q.stencilWrite;d.setTest(Fe),Fe&&(d.setMask(Q.stencilWriteMask),d.setFunc(Q.stencilFunc,Q.stencilRef,Q.stencilFuncMask),d.setOp(Q.stencilFail,Q.stencilZFail,Q.stencilZPass)),Xe(Q.polygonOffset,Q.polygonOffsetFactor,Q.polygonOffsetUnits),Q.alphaToCoverage===!0?he(a.SAMPLE_ALPHA_TO_COVERAGE):De(a.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(Q){D!==Q&&(Q?a.frontFace(a.CW):a.frontFace(a.CCW),D=Q)}function We(Q){Q!==K_?(he(a.CULL_FACE),Q!==H&&(Q===Hv?a.cullFace(a.BACK):Q===Z_?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):De(a.CULL_FACE),H=Q}function Xt(Q){Q!==K&&(w&&a.lineWidth(Q),K=Q)}function Xe(Q,be,Ue){Q?(he(a.POLYGON_OFFSET_FILL),(ce!==be||ee!==Ue)&&(a.polygonOffset(be,Ue),ce=be,ee=Ue)):De(a.POLYGON_OFFSET_FILL)}function ot(Q){Q?he(a.SCISSOR_TEST):De(a.SCISSOR_TEST)}function tn(Q){Q===void 0&&(Q=a.TEXTURE0+O-1),ue!==Q&&(a.activeTexture(Q),ue=Q)}function $t(Q,be,Ue){Ue===void 0&&(ue===null?Ue=a.TEXTURE0+O-1:Ue=ue);let Fe=de[Ue];Fe===void 0&&(Fe={type:void 0,texture:void 0},de[Ue]=Fe),(Fe.type!==Q||Fe.texture!==be)&&(ue!==Ue&&(a.activeTexture(Ue),ue=Ue),a.bindTexture(Q,be||ne[Q]),Fe.type=Q,Fe.texture=be)}function N(){const Q=de[ue];Q!==void 0&&Q.type!==void 0&&(a.bindTexture(Q.type,null),Q.type=void 0,Q.texture=void 0)}function E(){try{a.compressedTexImage2D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function re(){try{a.compressedTexImage3D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function ve(){try{a.texSubImage2D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Ee(){try{a.texSubImage3D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function me(){try{a.compressedTexSubImage2D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Ze(){try{a.compressedTexSubImage3D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function we(){try{a.texStorage2D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function qe(){try{a.texStorage3D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function je(){try{a.texImage2D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Te(){try{a.texImage3D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Re(Q){pe.equals(Q)===!1&&(a.scissor(Q.x,Q.y,Q.z,Q.w),pe.copy(Q))}function Je(Q){ye.equals(Q)===!1&&(a.viewport(Q.x,Q.y,Q.z,Q.w),ye.copy(Q))}function ze(Q,be){let Ue=p.get(be);Ue===void 0&&(Ue=new WeakMap,p.set(be,Ue));let Fe=Ue.get(Q);Fe===void 0&&(Fe=a.getUniformBlockIndex(be,Q.name),Ue.set(Q,Fe))}function Le(Q,be){const Fe=p.get(be).get(Q);m.get(be)!==Fe&&(a.uniformBlockBinding(be,Fe,Q.__bindingPointIndex),m.set(be,Fe))}function ut(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),h.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),v={},ue=null,de={},g={},_=new WeakMap,S=[],M=null,b=!1,y=null,x=null,I=null,B=null,R=null,X=null,k=null,F=new gt(0,0,0),J=0,U=!1,D=null,H=null,K=null,ce=null,ee=null,pe.set(0,0,a.canvas.width,a.canvas.height),ye.set(0,0,a.canvas.width,a.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:he,disable:De,bindFramebuffer:Oe,drawBuffers:Ye,useProgram:ct,setBlending:Tt,setMaterial:at,setFlipSided:Ke,setCullFace:We,setLineWidth:Xt,setPolygonOffset:Xe,setScissorTest:ot,activeTexture:tn,bindTexture:$t,unbindTexture:N,compressedTexImage2D:E,compressedTexImage3D:re,texImage2D:je,texImage3D:Te,updateUBOMapping:ze,uniformBlockBinding:Le,texStorage2D:we,texStorage3D:qe,texSubImage2D:ve,texSubImage3D:Ee,compressedTexSubImage2D:me,compressedTexSubImage3D:Ze,scissor:Re,viewport:Je,reset:ut}}function o1(a,e,i,s,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Pe,v=new WeakMap;let g;const _=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(N,E){return S?new OffscreenCanvas(N,E):kc("canvas")}function b(N,E,re){let ve=1;const Ee=$t(N);if((Ee.width>re||Ee.height>re)&&(ve=re/Math.max(Ee.width,Ee.height)),ve<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const me=Math.floor(ve*Ee.width),Ze=Math.floor(ve*Ee.height);g===void 0&&(g=M(me,Ze));const we=E?M(me,Ze):g;return we.width=me,we.height=Ze,we.getContext("2d").drawImage(N,0,0,me,Ze),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Ee.width+"x"+Ee.height+") to ("+me+"x"+Ze+")."),we}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Ee.width+"x"+Ee.height+")."),N;return N}function y(N){return N.generateMipmaps}function x(N){a.generateMipmap(N)}function I(N){return N.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?a.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function B(N,E,re,ve,Ee=!1){if(N!==null){if(a[N]!==void 0)return a[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let me=E;if(E===a.RED&&(re===a.FLOAT&&(me=a.R32F),re===a.HALF_FLOAT&&(me=a.R16F),re===a.UNSIGNED_BYTE&&(me=a.R8)),E===a.RED_INTEGER&&(re===a.UNSIGNED_BYTE&&(me=a.R8UI),re===a.UNSIGNED_SHORT&&(me=a.R16UI),re===a.UNSIGNED_INT&&(me=a.R32UI),re===a.BYTE&&(me=a.R8I),re===a.SHORT&&(me=a.R16I),re===a.INT&&(me=a.R32I)),E===a.RG&&(re===a.FLOAT&&(me=a.RG32F),re===a.HALF_FLOAT&&(me=a.RG16F),re===a.UNSIGNED_BYTE&&(me=a.RG8)),E===a.RG_INTEGER&&(re===a.UNSIGNED_BYTE&&(me=a.RG8UI),re===a.UNSIGNED_SHORT&&(me=a.RG16UI),re===a.UNSIGNED_INT&&(me=a.RG32UI),re===a.BYTE&&(me=a.RG8I),re===a.SHORT&&(me=a.RG16I),re===a.INT&&(me=a.RG32I)),E===a.RGB_INTEGER&&(re===a.UNSIGNED_BYTE&&(me=a.RGB8UI),re===a.UNSIGNED_SHORT&&(me=a.RGB16UI),re===a.UNSIGNED_INT&&(me=a.RGB32UI),re===a.BYTE&&(me=a.RGB8I),re===a.SHORT&&(me=a.RGB16I),re===a.INT&&(me=a.RGB32I)),E===a.RGBA_INTEGER&&(re===a.UNSIGNED_BYTE&&(me=a.RGBA8UI),re===a.UNSIGNED_SHORT&&(me=a.RGBA16UI),re===a.UNSIGNED_INT&&(me=a.RGBA32UI),re===a.BYTE&&(me=a.RGBA8I),re===a.SHORT&&(me=a.RGBA16I),re===a.INT&&(me=a.RGBA32I)),E===a.RGB&&(re===a.UNSIGNED_INT_5_9_9_9_REV&&(me=a.RGB9_E5),re===a.UNSIGNED_INT_10F_11F_11F_REV&&(me=a.R11F_G11F_B10F)),E===a.RGBA){const Ze=Ee?Gc:Ut.getTransfer(ve);re===a.FLOAT&&(me=a.RGBA32F),re===a.HALF_FLOAT&&(me=a.RGBA16F),re===a.UNSIGNED_BYTE&&(me=Ze===Vt?a.SRGB8_ALPHA8:a.RGBA8),re===a.UNSIGNED_SHORT_4_4_4_4&&(me=a.RGBA4),re===a.UNSIGNED_SHORT_5_5_5_1&&(me=a.RGB5_A1)}return(me===a.R16F||me===a.R32F||me===a.RG16F||me===a.RG32F||me===a.RGBA16F||me===a.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function R(N,E){let re;return N?E===null||E===$a||E===Is?re=a.DEPTH24_STENCIL8:E===pa?re=a.DEPTH32F_STENCIL8:E===Qo&&(re=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===$a||E===Is?re=a.DEPTH_COMPONENT24:E===pa?re=a.DEPTH_COMPONENT32F:E===Qo&&(re=a.DEPTH_COMPONENT16),re}function X(N,E){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==ci&&N.minFilter!==Pn?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function k(N){const E=N.target;E.removeEventListener("dispose",k),J(E),E.isVideoTexture&&v.delete(E)}function F(N){const E=N.target;E.removeEventListener("dispose",F),D(E)}function J(N){const E=s.get(N);if(E.__webglInit===void 0)return;const re=N.source,ve=_.get(re);if(ve){const Ee=ve[E.__cacheKey];Ee.usedTimes--,Ee.usedTimes===0&&U(N),Object.keys(ve).length===0&&_.delete(re)}s.remove(N)}function U(N){const E=s.get(N);a.deleteTexture(E.__webglTexture);const re=N.source,ve=_.get(re);delete ve[E.__cacheKey],h.memory.textures--}function D(N){const E=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(E.__webglFramebuffer[ve]))for(let Ee=0;Ee<E.__webglFramebuffer[ve].length;Ee++)a.deleteFramebuffer(E.__webglFramebuffer[ve][Ee]);else a.deleteFramebuffer(E.__webglFramebuffer[ve]);E.__webglDepthbuffer&&a.deleteRenderbuffer(E.__webglDepthbuffer[ve])}else{if(Array.isArray(E.__webglFramebuffer))for(let ve=0;ve<E.__webglFramebuffer.length;ve++)a.deleteFramebuffer(E.__webglFramebuffer[ve]);else a.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&a.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&a.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ve=0;ve<E.__webglColorRenderbuffer.length;ve++)E.__webglColorRenderbuffer[ve]&&a.deleteRenderbuffer(E.__webglColorRenderbuffer[ve]);E.__webglDepthRenderbuffer&&a.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const re=N.textures;for(let ve=0,Ee=re.length;ve<Ee;ve++){const me=s.get(re[ve]);me.__webglTexture&&(a.deleteTexture(me.__webglTexture),h.memory.textures--),s.remove(re[ve])}s.remove(N)}let H=0;function K(){H=0}function ce(){const N=H;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),H+=1,N}function ee(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function O(N,E){const re=s.get(N);if(N.isVideoTexture&&ot(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&re.__version!==N.version){const ve=N.image;if(ve===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(re,N,E);return}}else N.isExternalTexture&&(re.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(a.TEXTURE_2D,re.__webglTexture,a.TEXTURE0+E)}function w(N,E){const re=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&re.__version!==N.version){ne(re,N,E);return}i.bindTexture(a.TEXTURE_2D_ARRAY,re.__webglTexture,a.TEXTURE0+E)}function z(N,E){const re=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&re.__version!==N.version){ne(re,N,E);return}i.bindTexture(a.TEXTURE_3D,re.__webglTexture,a.TEXTURE0+E)}function P(N,E){const re=s.get(N);if(N.version>0&&re.__version!==N.version){he(re,N,E);return}i.bindTexture(a.TEXTURE_CUBE_MAP,re.__webglTexture,a.TEXTURE0+E)}const ue={[$h]:a.REPEAT,[Dr]:a.CLAMP_TO_EDGE,[ed]:a.MIRRORED_REPEAT},de={[ci]:a.NEAREST,[bS]:a.NEAREST_MIPMAP_NEAREST,[dc]:a.NEAREST_MIPMAP_LINEAR,[Pn]:a.LINEAR,[rh]:a.LINEAR_MIPMAP_NEAREST,[Ur]:a.LINEAR_MIPMAP_LINEAR},L={[DS]:a.NEVER,[PS]:a.ALWAYS,[US]:a.LESS,[ax]:a.LEQUAL,[LS]:a.EQUAL,[OS]:a.GEQUAL,[BS]:a.GREATER,[NS]:a.NOTEQUAL};function te(N,E){if(E.type===pa&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Pn||E.magFilter===rh||E.magFilter===dc||E.magFilter===Ur||E.minFilter===Pn||E.minFilter===rh||E.minFilter===dc||E.minFilter===Ur)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(N,a.TEXTURE_WRAP_S,ue[E.wrapS]),a.texParameteri(N,a.TEXTURE_WRAP_T,ue[E.wrapT]),(N===a.TEXTURE_3D||N===a.TEXTURE_2D_ARRAY)&&a.texParameteri(N,a.TEXTURE_WRAP_R,ue[E.wrapR]),a.texParameteri(N,a.TEXTURE_MAG_FILTER,de[E.magFilter]),a.texParameteri(N,a.TEXTURE_MIN_FILTER,de[E.minFilter]),E.compareFunction&&(a.texParameteri(N,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(N,a.TEXTURE_COMPARE_FUNC,L[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ci||E.minFilter!==dc&&E.minFilter!==Ur||E.type===pa&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const re=e.get("EXT_texture_filter_anisotropic");a.texParameterf(N,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function pe(N,E){let re=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",k));const ve=E.source;let Ee=_.get(ve);Ee===void 0&&(Ee={},_.set(ve,Ee));const me=ee(E);if(me!==N.__cacheKey){Ee[me]===void 0&&(Ee[me]={texture:a.createTexture(),usedTimes:0},h.memory.textures++,re=!0),Ee[me].usedTimes++;const Ze=Ee[N.__cacheKey];Ze!==void 0&&(Ee[N.__cacheKey].usedTimes--,Ze.usedTimes===0&&U(E)),N.__cacheKey=me,N.__webglTexture=Ee[me].texture}return re}function ye(N,E,re){return Math.floor(Math.floor(N/re)/E)}function Ce(N,E,re,ve){const me=N.updateRanges;if(me.length===0)i.texSubImage2D(a.TEXTURE_2D,0,0,0,E.width,E.height,re,ve,E.data);else{me.sort((Te,Re)=>Te.start-Re.start);let Ze=0;for(let Te=1;Te<me.length;Te++){const Re=me[Ze],Je=me[Te],ze=Re.start+Re.count,Le=ye(Je.start,E.width,4),ut=ye(Re.start,E.width,4);Je.start<=ze+1&&Le===ut&&ye(Je.start+Je.count-1,E.width,4)===Le?Re.count=Math.max(Re.count,Je.start+Je.count-Re.start):(++Ze,me[Ze]=Je)}me.length=Ze+1;const we=a.getParameter(a.UNPACK_ROW_LENGTH),qe=a.getParameter(a.UNPACK_SKIP_PIXELS),je=a.getParameter(a.UNPACK_SKIP_ROWS);a.pixelStorei(a.UNPACK_ROW_LENGTH,E.width);for(let Te=0,Re=me.length;Te<Re;Te++){const Je=me[Te],ze=Math.floor(Je.start/4),Le=Math.ceil(Je.count/4),ut=ze%E.width,Q=Math.floor(ze/E.width),be=Le,Ue=1;a.pixelStorei(a.UNPACK_SKIP_PIXELS,ut),a.pixelStorei(a.UNPACK_SKIP_ROWS,Q),i.texSubImage2D(a.TEXTURE_2D,0,ut,Q,be,Ue,re,ve,E.data)}N.clearUpdateRanges(),a.pixelStorei(a.UNPACK_ROW_LENGTH,we),a.pixelStorei(a.UNPACK_SKIP_PIXELS,qe),a.pixelStorei(a.UNPACK_SKIP_ROWS,je)}}function ne(N,E,re){let ve=a.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ve=a.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ve=a.TEXTURE_3D);const Ee=pe(N,E),me=E.source;i.bindTexture(ve,N.__webglTexture,a.TEXTURE0+re);const Ze=s.get(me);if(me.version!==Ze.__version||Ee===!0){i.activeTexture(a.TEXTURE0+re);const we=Ut.getPrimaries(Ut.workingColorSpace),qe=E.colorSpace===Fi?null:Ut.getPrimaries(E.colorSpace),je=E.colorSpace===Fi||we===qe?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,E.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,E.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let Te=b(E.image,!1,l.maxTextureSize);Te=tn(E,Te);const Re=c.convert(E.format,E.colorSpace),Je=c.convert(E.type);let ze=B(E.internalFormat,Re,Je,E.colorSpace,E.isVideoTexture);te(ve,E);let Le;const ut=E.mipmaps,Q=E.isVideoTexture!==!0,be=Ze.__version===void 0||Ee===!0,Ue=me.dataReady,Fe=X(E,Te);if(E.isDepthTexture)ze=R(E.format===zs,E.type),be&&(Q?i.texStorage2D(a.TEXTURE_2D,1,ze,Te.width,Te.height):i.texImage2D(a.TEXTURE_2D,0,ze,Te.width,Te.height,0,Re,Je,null));else if(E.isDataTexture)if(ut.length>0){Q&&be&&i.texStorage2D(a.TEXTURE_2D,Fe,ze,ut[0].width,ut[0].height);for(let Me=0,_e=ut.length;Me<_e;Me++)Le=ut[Me],Q?Ue&&i.texSubImage2D(a.TEXTURE_2D,Me,0,0,Le.width,Le.height,Re,Je,Le.data):i.texImage2D(a.TEXTURE_2D,Me,ze,Le.width,Le.height,0,Re,Je,Le.data);E.generateMipmaps=!1}else Q?(be&&i.texStorage2D(a.TEXTURE_2D,Fe,ze,Te.width,Te.height),Ue&&Ce(E,Te,Re,Je)):i.texImage2D(a.TEXTURE_2D,0,ze,Te.width,Te.height,0,Re,Je,Te.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Q&&be&&i.texStorage3D(a.TEXTURE_2D_ARRAY,Fe,ze,ut[0].width,ut[0].height,Te.depth);for(let Me=0,_e=ut.length;Me<_e;Me++)if(Le=ut[Me],E.format!==Di)if(Re!==null)if(Q){if(Ue)if(E.layerUpdates.size>0){const He=h0(Le.width,Le.height,E.format,E.type);for(const st of E.layerUpdates){const Pt=Le.data.subarray(st*He/Le.data.BYTES_PER_ELEMENT,(st+1)*He/Le.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Me,0,0,st,Le.width,Le.height,1,Re,Pt)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Me,0,0,0,Le.width,Le.height,Te.depth,Re,Le.data)}else i.compressedTexImage3D(a.TEXTURE_2D_ARRAY,Me,ze,Le.width,Le.height,Te.depth,0,Le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Q?Ue&&i.texSubImage3D(a.TEXTURE_2D_ARRAY,Me,0,0,0,Le.width,Le.height,Te.depth,Re,Je,Le.data):i.texImage3D(a.TEXTURE_2D_ARRAY,Me,ze,Le.width,Le.height,Te.depth,0,Re,Je,Le.data)}else{Q&&be&&i.texStorage2D(a.TEXTURE_2D,Fe,ze,ut[0].width,ut[0].height);for(let Me=0,_e=ut.length;Me<_e;Me++)Le=ut[Me],E.format!==Di?Re!==null?Q?Ue&&i.compressedTexSubImage2D(a.TEXTURE_2D,Me,0,0,Le.width,Le.height,Re,Le.data):i.compressedTexImage2D(a.TEXTURE_2D,Me,ze,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Q?Ue&&i.texSubImage2D(a.TEXTURE_2D,Me,0,0,Le.width,Le.height,Re,Je,Le.data):i.texImage2D(a.TEXTURE_2D,Me,ze,Le.width,Le.height,0,Re,Je,Le.data)}else if(E.isDataArrayTexture)if(Q){if(be&&i.texStorage3D(a.TEXTURE_2D_ARRAY,Fe,ze,Te.width,Te.height,Te.depth),Ue)if(E.layerUpdates.size>0){const Me=h0(Te.width,Te.height,E.format,E.type);for(const _e of E.layerUpdates){const He=Te.data.subarray(_e*Me/Te.data.BYTES_PER_ELEMENT,(_e+1)*Me/Te.data.BYTES_PER_ELEMENT);i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,_e,Te.width,Te.height,1,Re,Je,He)}E.clearLayerUpdates()}else i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,Re,Je,Te.data)}else i.texImage3D(a.TEXTURE_2D_ARRAY,0,ze,Te.width,Te.height,Te.depth,0,Re,Je,Te.data);else if(E.isData3DTexture)Q?(be&&i.texStorage3D(a.TEXTURE_3D,Fe,ze,Te.width,Te.height,Te.depth),Ue&&i.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,Re,Je,Te.data)):i.texImage3D(a.TEXTURE_3D,0,ze,Te.width,Te.height,Te.depth,0,Re,Je,Te.data);else if(E.isFramebufferTexture){if(be)if(Q)i.texStorage2D(a.TEXTURE_2D,Fe,ze,Te.width,Te.height);else{let Me=Te.width,_e=Te.height;for(let He=0;He<Fe;He++)i.texImage2D(a.TEXTURE_2D,He,ze,Me,_e,0,Re,Je,null),Me>>=1,_e>>=1}}else if(ut.length>0){if(Q&&be){const Me=$t(ut[0]);i.texStorage2D(a.TEXTURE_2D,Fe,ze,Me.width,Me.height)}for(let Me=0,_e=ut.length;Me<_e;Me++)Le=ut[Me],Q?Ue&&i.texSubImage2D(a.TEXTURE_2D,Me,0,0,Re,Je,Le):i.texImage2D(a.TEXTURE_2D,Me,ze,Re,Je,Le);E.generateMipmaps=!1}else if(Q){if(be){const Me=$t(Te);i.texStorage2D(a.TEXTURE_2D,Fe,ze,Me.width,Me.height)}Ue&&i.texSubImage2D(a.TEXTURE_2D,0,0,0,Re,Je,Te)}else i.texImage2D(a.TEXTURE_2D,0,ze,Re,Je,Te);y(E)&&x(ve),Ze.__version=me.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function he(N,E,re){if(E.image.length!==6)return;const ve=pe(N,E),Ee=E.source;i.bindTexture(a.TEXTURE_CUBE_MAP,N.__webglTexture,a.TEXTURE0+re);const me=s.get(Ee);if(Ee.version!==me.__version||ve===!0){i.activeTexture(a.TEXTURE0+re);const Ze=Ut.getPrimaries(Ut.workingColorSpace),we=E.colorSpace===Fi?null:Ut.getPrimaries(E.colorSpace),qe=E.colorSpace===Fi||Ze===we?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,E.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,E.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);const je=E.isCompressedTexture||E.image[0].isCompressedTexture,Te=E.image[0]&&E.image[0].isDataTexture,Re=[];for(let _e=0;_e<6;_e++)!je&&!Te?Re[_e]=b(E.image[_e],!0,l.maxCubemapSize):Re[_e]=Te?E.image[_e].image:E.image[_e],Re[_e]=tn(E,Re[_e]);const Je=Re[0],ze=c.convert(E.format,E.colorSpace),Le=c.convert(E.type),ut=B(E.internalFormat,ze,Le,E.colorSpace),Q=E.isVideoTexture!==!0,be=me.__version===void 0||ve===!0,Ue=Ee.dataReady;let Fe=X(E,Je);te(a.TEXTURE_CUBE_MAP,E);let Me;if(je){Q&&be&&i.texStorage2D(a.TEXTURE_CUBE_MAP,Fe,ut,Je.width,Je.height);for(let _e=0;_e<6;_e++){Me=Re[_e].mipmaps;for(let He=0;He<Me.length;He++){const st=Me[He];E.format!==Di?ze!==null?Q?Ue&&i.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,He,0,0,st.width,st.height,ze,st.data):i.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,He,ut,st.width,st.height,0,st.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Q?Ue&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,He,0,0,st.width,st.height,ze,Le,st.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,He,ut,st.width,st.height,0,ze,Le,st.data)}}}else{if(Me=E.mipmaps,Q&&be){Me.length>0&&Fe++;const _e=$t(Re[0]);i.texStorage2D(a.TEXTURE_CUBE_MAP,Fe,ut,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(Te){Q?Ue&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Re[_e].width,Re[_e].height,ze,Le,Re[_e].data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ut,Re[_e].width,Re[_e].height,0,ze,Le,Re[_e].data);for(let He=0;He<Me.length;He++){const Pt=Me[He].image[_e].image;Q?Ue&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,He+1,0,0,Pt.width,Pt.height,ze,Le,Pt.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,He+1,ut,Pt.width,Pt.height,0,ze,Le,Pt.data)}}else{Q?Ue&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,ze,Le,Re[_e]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ut,ze,Le,Re[_e]);for(let He=0;He<Me.length;He++){const st=Me[He];Q?Ue&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,He+1,0,0,ze,Le,st.image[_e]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,He+1,ut,ze,Le,st.image[_e])}}}y(E)&&x(a.TEXTURE_CUBE_MAP),me.__version=Ee.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function De(N,E,re,ve,Ee,me){const Ze=c.convert(re.format,re.colorSpace),we=c.convert(re.type),qe=B(re.internalFormat,Ze,we,re.colorSpace),je=s.get(E),Te=s.get(re);if(Te.__renderTarget=E,!je.__hasExternalTextures){const Re=Math.max(1,E.width>>me),Je=Math.max(1,E.height>>me);Ee===a.TEXTURE_3D||Ee===a.TEXTURE_2D_ARRAY?i.texImage3D(Ee,me,qe,Re,Je,E.depth,0,Ze,we,null):i.texImage2D(Ee,me,qe,Re,Je,0,Ze,we,null)}i.bindFramebuffer(a.FRAMEBUFFER,N),Xe(E)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ve,Ee,Te.__webglTexture,0,Xt(E)):(Ee===a.TEXTURE_2D||Ee>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&Ee<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,ve,Ee,Te.__webglTexture,me),i.bindFramebuffer(a.FRAMEBUFFER,null)}function Oe(N,E,re){if(a.bindRenderbuffer(a.RENDERBUFFER,N),E.depthBuffer){const ve=E.depthTexture,Ee=ve&&ve.isDepthTexture?ve.type:null,me=R(E.stencilBuffer,Ee),Ze=E.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,we=Xt(E);Xe(E)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,we,me,E.width,E.height):re?a.renderbufferStorageMultisample(a.RENDERBUFFER,we,me,E.width,E.height):a.renderbufferStorage(a.RENDERBUFFER,me,E.width,E.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Ze,a.RENDERBUFFER,N)}else{const ve=E.textures;for(let Ee=0;Ee<ve.length;Ee++){const me=ve[Ee],Ze=c.convert(me.format,me.colorSpace),we=c.convert(me.type),qe=B(me.internalFormat,Ze,we,me.colorSpace),je=Xt(E);re&&Xe(E)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,je,qe,E.width,E.height):Xe(E)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,je,qe,E.width,E.height):a.renderbufferStorage(a.RENDERBUFFER,qe,E.width,E.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Ye(N,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(a.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ve=s.get(E.depthTexture);ve.__renderTarget=E,(!ve.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),O(E.depthTexture,0);const Ee=ve.__webglTexture,me=Xt(E);if(E.depthTexture.format===qo)Xe(E)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,Ee,0,me):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,Ee,0);else if(E.depthTexture.format===zs)Xe(E)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,Ee,0,me):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,Ee,0);else throw new Error("Unknown depthTexture format")}function ct(N){const E=s.get(N),re=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){const ve=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ve){const Ee=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ve.removeEventListener("dispose",Ee)};ve.addEventListener("dispose",Ee),E.__depthDisposeCallback=Ee}E.__boundDepthTexture=ve}if(N.depthTexture&&!E.__autoAllocateDepthBuffer){if(re)throw new Error("target.depthTexture not supported in Cube render targets");const ve=N.texture.mipmaps;ve&&ve.length>0?Ye(E.__webglFramebuffer[0],N):Ye(E.__webglFramebuffer,N)}else if(re){E.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)if(i.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer[ve]),E.__webglDepthbuffer[ve]===void 0)E.__webglDepthbuffer[ve]=a.createRenderbuffer(),Oe(E.__webglDepthbuffer[ve],N,!1);else{const Ee=N.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,me=E.__webglDepthbuffer[ve];a.bindRenderbuffer(a.RENDERBUFFER,me),a.framebufferRenderbuffer(a.FRAMEBUFFER,Ee,a.RENDERBUFFER,me)}}else{const ve=N.texture.mipmaps;if(ve&&ve.length>0?i.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=a.createRenderbuffer(),Oe(E.__webglDepthbuffer,N,!1);else{const Ee=N.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,me=E.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,me),a.framebufferRenderbuffer(a.FRAMEBUFFER,Ee,a.RENDERBUFFER,me)}}i.bindFramebuffer(a.FRAMEBUFFER,null)}function Jt(N,E,re){const ve=s.get(N);E!==void 0&&De(ve.__webglFramebuffer,N,N.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),re!==void 0&&ct(N)}function V(N){const E=N.texture,re=s.get(N),ve=s.get(E);N.addEventListener("dispose",F);const Ee=N.textures,me=N.isWebGLCubeRenderTarget===!0,Ze=Ee.length>1;if(Ze||(ve.__webglTexture===void 0&&(ve.__webglTexture=a.createTexture()),ve.__version=E.version,h.memory.textures++),me){re.__webglFramebuffer=[];for(let we=0;we<6;we++)if(E.mipmaps&&E.mipmaps.length>0){re.__webglFramebuffer[we]=[];for(let qe=0;qe<E.mipmaps.length;qe++)re.__webglFramebuffer[we][qe]=a.createFramebuffer()}else re.__webglFramebuffer[we]=a.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){re.__webglFramebuffer=[];for(let we=0;we<E.mipmaps.length;we++)re.__webglFramebuffer[we]=a.createFramebuffer()}else re.__webglFramebuffer=a.createFramebuffer();if(Ze)for(let we=0,qe=Ee.length;we<qe;we++){const je=s.get(Ee[we]);je.__webglTexture===void 0&&(je.__webglTexture=a.createTexture(),h.memory.textures++)}if(N.samples>0&&Xe(N)===!1){re.__webglMultisampledFramebuffer=a.createFramebuffer(),re.__webglColorRenderbuffer=[],i.bindFramebuffer(a.FRAMEBUFFER,re.__webglMultisampledFramebuffer);for(let we=0;we<Ee.length;we++){const qe=Ee[we];re.__webglColorRenderbuffer[we]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,re.__webglColorRenderbuffer[we]);const je=c.convert(qe.format,qe.colorSpace),Te=c.convert(qe.type),Re=B(qe.internalFormat,je,Te,qe.colorSpace,N.isXRRenderTarget===!0),Je=Xt(N);a.renderbufferStorageMultisample(a.RENDERBUFFER,Je,Re,N.width,N.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+we,a.RENDERBUFFER,re.__webglColorRenderbuffer[we])}a.bindRenderbuffer(a.RENDERBUFFER,null),N.depthBuffer&&(re.__webglDepthRenderbuffer=a.createRenderbuffer(),Oe(re.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(a.FRAMEBUFFER,null)}}if(me){i.bindTexture(a.TEXTURE_CUBE_MAP,ve.__webglTexture),te(a.TEXTURE_CUBE_MAP,E);for(let we=0;we<6;we++)if(E.mipmaps&&E.mipmaps.length>0)for(let qe=0;qe<E.mipmaps.length;qe++)De(re.__webglFramebuffer[we][qe],N,E,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+we,qe);else De(re.__webglFramebuffer[we],N,E,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);y(E)&&x(a.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ze){for(let we=0,qe=Ee.length;we<qe;we++){const je=Ee[we],Te=s.get(je);let Re=a.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Re=N.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(Re,Te.__webglTexture),te(Re,je),De(re.__webglFramebuffer,N,je,a.COLOR_ATTACHMENT0+we,Re,0),y(je)&&x(Re)}i.unbindTexture()}else{let we=a.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(we=N.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(we,ve.__webglTexture),te(we,E),E.mipmaps&&E.mipmaps.length>0)for(let qe=0;qe<E.mipmaps.length;qe++)De(re.__webglFramebuffer[qe],N,E,a.COLOR_ATTACHMENT0,we,qe);else De(re.__webglFramebuffer,N,E,a.COLOR_ATTACHMENT0,we,0);y(E)&&x(we),i.unbindTexture()}N.depthBuffer&&ct(N)}function Tt(N){const E=N.textures;for(let re=0,ve=E.length;re<ve;re++){const Ee=E[re];if(y(Ee)){const me=I(N),Ze=s.get(Ee).__webglTexture;i.bindTexture(me,Ze),x(me),i.unbindTexture()}}}const at=[],Ke=[];function We(N){if(N.samples>0){if(Xe(N)===!1){const E=N.textures,re=N.width,ve=N.height;let Ee=a.COLOR_BUFFER_BIT;const me=N.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ze=s.get(N),we=E.length>1;if(we)for(let je=0;je<E.length;je++)i.bindFramebuffer(a.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+je,a.RENDERBUFFER,null),i.bindFramebuffer(a.FRAMEBUFFER,Ze.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+je,a.TEXTURE_2D,null,0);i.bindFramebuffer(a.READ_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer);const qe=N.texture.mipmaps;qe&&qe.length>0?i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer[0]):i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer);for(let je=0;je<E.length;je++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Ee|=a.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Ee|=a.STENCIL_BUFFER_BIT)),we){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Ze.__webglColorRenderbuffer[je]);const Te=s.get(E[je]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Te,0)}a.blitFramebuffer(0,0,re,ve,0,0,re,ve,Ee,a.NEAREST),m===!0&&(at.length=0,Ke.length=0,at.push(a.COLOR_ATTACHMENT0+je),N.depthBuffer&&N.resolveDepthBuffer===!1&&(at.push(me),Ke.push(me),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,Ke)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,at))}if(i.bindFramebuffer(a.READ_FRAMEBUFFER,null),i.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),we)for(let je=0;je<E.length;je++){i.bindFramebuffer(a.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+je,a.RENDERBUFFER,Ze.__webglColorRenderbuffer[je]);const Te=s.get(E[je]).__webglTexture;i.bindFramebuffer(a.FRAMEBUFFER,Ze.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+je,a.TEXTURE_2D,Te,0)}i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const E=N.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[E])}}}function Xt(N){return Math.min(l.maxSamples,N.samples)}function Xe(N){const E=s.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ot(N){const E=h.render.frame;v.get(N)!==E&&(v.set(N,E),N.update())}function tn(N,E){const re=N.colorSpace,ve=N.format,Ee=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||re!==er&&re!==Fi&&(Ut.getTransfer(re)===Vt?(ve!==Di||Ee!==Un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",re)),E}function $t(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=ce,this.resetTextureUnits=K,this.setTexture2D=O,this.setTexture2DArray=w,this.setTexture3D=z,this.setTextureCube=P,this.rebindTextures=Jt,this.setupRenderTarget=V,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=De,this.useMultisampledRTT=Xe}function l1(a,e){function i(s,l=Fi){let c;const h=Ut.getTransfer(l);if(s===Un)return a.UNSIGNED_BYTE;if(s===Od)return a.UNSIGNED_SHORT_4_4_4_4;if(s===Pd)return a.UNSIGNED_SHORT_5_5_5_1;if(s===J0)return a.UNSIGNED_INT_5_9_9_9_REV;if(s===$0)return a.UNSIGNED_INT_10F_11F_11F_REV;if(s===K0)return a.BYTE;if(s===Z0)return a.SHORT;if(s===Qo)return a.UNSIGNED_SHORT;if(s===Nd)return a.INT;if(s===$a)return a.UNSIGNED_INT;if(s===pa)return a.FLOAT;if(s===Ko)return a.HALF_FLOAT;if(s===ex)return a.ALPHA;if(s===tx)return a.RGB;if(s===Di)return a.RGBA;if(s===qo)return a.DEPTH_COMPONENT;if(s===zs)return a.DEPTH_STENCIL;if(s===nx)return a.RED;if(s===Id)return a.RED_INTEGER;if(s===ix)return a.RG;if(s===zd)return a.RG_INTEGER;if(s===Fd)return a.RGBA_INTEGER;if(s===Pc||s===Ic||s===zc||s===Fc)if(h===Vt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Pc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ic)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Fc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Pc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ic)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===zc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Fc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===td||s===nd||s===id||s===ad)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===td)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===nd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===id)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ad)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===rd||s===sd||s===od)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===rd||s===sd)return h===Vt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===od)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ld||s===cd||s===ud||s===fd||s===hd||s===dd||s===pd||s===md||s===gd||s===vd||s===xd||s===Ad||s===_d||s===Sd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===ld)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===cd)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ud)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===fd)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===hd)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===dd)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===pd)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===md)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===gd)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===vd)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===xd)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ad)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===_d)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Sd)return h===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===yd||s===Ed||s===Md)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===yd)return h===Vt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ed)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Md)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Td||s===bd||s===Cd||s===wd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Td)return c.COMPRESSED_RED_RGTC1_EXT;if(s===bd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Cd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===wd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Is?a.UNSIGNED_INT_24_8:a[s]!==void 0?a[s]:null}return{convert:i}}const c1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,u1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class f1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new mx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new mn({vertexShader:c1,fragmentShader:u1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new li(new Hs(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class h1 extends Aa{constructor(e,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,v=null,g=null,_=null,S=null,M=null;const b=typeof XRWebGLBinding<"u",y=new f1,x={},I=i.getContextAttributes();let B=null,R=null;const X=[],k=[],F=new Pe;let J=null;const U=new oi;U.viewport=new Kt;const D=new oi;D.viewport=new Kt;const H=[U,D],K=new Ly;let ce=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let he=X[ne];return he===void 0&&(he=new wh,X[ne]=he),he.getTargetRaySpace()},this.getControllerGrip=function(ne){let he=X[ne];return he===void 0&&(he=new wh,X[ne]=he),he.getGripSpace()},this.getHand=function(ne){let he=X[ne];return he===void 0&&(he=new wh,X[ne]=he),he.getHandSpace()};function O(ne){const he=k.indexOf(ne.inputSource);if(he===-1)return;const De=X[he];De!==void 0&&(De.update(ne.inputSource,ne.frame,p||h),De.dispatchEvent({type:ne.type,data:ne.inputSource}))}function w(){l.removeEventListener("select",O),l.removeEventListener("selectstart",O),l.removeEventListener("selectend",O),l.removeEventListener("squeeze",O),l.removeEventListener("squeezestart",O),l.removeEventListener("squeezeend",O),l.removeEventListener("end",w),l.removeEventListener("inputsourceschange",z);for(let ne=0;ne<X.length;ne++){const he=k[ne];he!==null&&(k[ne]=null,X[ne].disconnect(he))}ce=null,ee=null,y.reset();for(const ne in x)delete x[ne];e.setRenderTarget(B),S=null,_=null,g=null,l=null,R=null,Ce.stop(),s.isPresenting=!1,e.setPixelRatio(J),e.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){c=ne,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){d=ne,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(ne){p=ne},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return g===null&&b&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return M},this.getSession=function(){return l},this.setSession=async function(ne){if(l=ne,l!==null){if(B=e.getRenderTarget(),l.addEventListener("select",O),l.addEventListener("selectstart",O),l.addEventListener("selectend",O),l.addEventListener("squeeze",O),l.addEventListener("squeezestart",O),l.addEventListener("squeezeend",O),l.addEventListener("end",w),l.addEventListener("inputsourceschange",z),I.xrCompatible!==!0&&await i.makeXRCompatible(),J=e.getPixelRatio(),e.getSize(F),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let De=null,Oe=null,Ye=null;I.depth&&(Ye=I.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,De=I.stencil?zs:qo,Oe=I.stencil?Is:$a);const ct={colorFormat:i.RGBA8,depthFormat:Ye,scaleFactor:c};g=this.getBinding(),_=g.createProjectionLayer(ct),l.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),R=new zn(_.textureWidth,_.textureHeight,{format:Di,type:Un,depthTexture:new Xd(_.textureWidth,_.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,De),stencilBuffer:I.stencil,colorSpace:e.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const De={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,De),l.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),R=new zn(S.framebufferWidth,S.framebufferHeight,{format:Di,type:Un,colorSpace:e.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Ce.setContext(l),Ce.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function z(ne){for(let he=0;he<ne.removed.length;he++){const De=ne.removed[he],Oe=k.indexOf(De);Oe>=0&&(k[Oe]=null,X[Oe].disconnect(De))}for(let he=0;he<ne.added.length;he++){const De=ne.added[he];let Oe=k.indexOf(De);if(Oe===-1){for(let ct=0;ct<X.length;ct++)if(ct>=k.length){k.push(De),Oe=ct;break}else if(k[ct]===null){k[ct]=De,Oe=ct;break}if(Oe===-1)break}const Ye=X[Oe];Ye&&Ye.connect(De)}}const P=new q,ue=new q;function de(ne,he,De){P.setFromMatrixPosition(he.matrixWorld),ue.setFromMatrixPosition(De.matrixWorld);const Oe=P.distanceTo(ue),Ye=he.projectionMatrix.elements,ct=De.projectionMatrix.elements,Jt=Ye[14]/(Ye[10]-1),V=Ye[14]/(Ye[10]+1),Tt=(Ye[9]+1)/Ye[5],at=(Ye[9]-1)/Ye[5],Ke=(Ye[8]-1)/Ye[0],We=(ct[8]+1)/ct[0],Xt=Jt*Ke,Xe=Jt*We,ot=Oe/(-Ke+We),tn=ot*-Ke;if(he.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(tn),ne.translateZ(ot),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Ye[10]===-1)ne.projectionMatrix.copy(he.projectionMatrix),ne.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const $t=Jt+ot,N=V+ot,E=Xt-tn,re=Xe+(Oe-tn),ve=Tt*V/N*$t,Ee=at*V/N*$t;ne.projectionMatrix.makePerspective(E,re,ve,Ee,$t,N),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function L(ne,he){he===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(he.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(l===null)return;let he=ne.near,De=ne.far;y.texture!==null&&(y.depthNear>0&&(he=y.depthNear),y.depthFar>0&&(De=y.depthFar)),K.near=D.near=U.near=he,K.far=D.far=U.far=De,(ce!==K.near||ee!==K.far)&&(l.updateRenderState({depthNear:K.near,depthFar:K.far}),ce=K.near,ee=K.far),K.layers.mask=ne.layers.mask|6,U.layers.mask=K.layers.mask&3,D.layers.mask=K.layers.mask&5;const Oe=ne.parent,Ye=K.cameras;L(K,Oe);for(let ct=0;ct<Ye.length;ct++)L(Ye[ct],Oe);Ye.length===2?de(K,U,D):K.projectionMatrix.copy(U.projectionMatrix),te(ne,K,Oe)};function te(ne,he,De){De===null?ne.matrix.copy(he.matrixWorld):(ne.matrix.copy(De.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(he.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(he.projectionMatrix),ne.projectionMatrixInverse.copy(he.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Rd*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(_===null&&S===null))return m},this.setFoveation=function(ne){m=ne,_!==null&&(_.fixedFoveation=ne),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ne)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(K)},this.getCameraTexture=function(ne){return x[ne]};let pe=null;function ye(ne,he){if(v=he.getViewerPose(p||h),M=he,v!==null){const De=v.views;S!==null&&(e.setRenderTargetFramebuffer(R,S.framebuffer),e.setRenderTarget(R));let Oe=!1;De.length!==K.cameras.length&&(K.cameras.length=0,Oe=!0);for(let V=0;V<De.length;V++){const Tt=De[V];let at=null;if(S!==null)at=S.getViewport(Tt);else{const We=g.getViewSubImage(_,Tt);at=We.viewport,V===0&&(e.setRenderTargetTextures(R,We.colorTexture,We.depthStencilTexture),e.setRenderTarget(R))}let Ke=H[V];Ke===void 0&&(Ke=new oi,Ke.layers.enable(V),Ke.viewport=new Kt,H[V]=Ke),Ke.matrix.fromArray(Tt.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(Tt.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(at.x,at.y,at.width,at.height),V===0&&(K.matrix.copy(Ke.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Oe===!0&&K.cameras.push(Ke)}const Ye=l.enabledFeatures;if(Ye&&Ye.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&b){g=s.getBinding();const V=g.getDepthInformation(De[0]);V&&V.isValid&&V.texture&&y.init(V,l.renderState)}if(Ye&&Ye.includes("camera-access")&&b){e.state.unbindTexture(),g=s.getBinding();for(let V=0;V<De.length;V++){const Tt=De[V].camera;if(Tt){let at=x[Tt];at||(at=new mx,x[Tt]=at);const Ke=g.getCameraImage(Tt);at.sourceTexture=Ke}}}}for(let De=0;De<X.length;De++){const Oe=k[De],Ye=X[De];Oe!==null&&Ye!==void 0&&Ye.update(Oe,he,p||h)}pe&&pe(ne,he),he.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:he}),M=null}const Ce=new _x;Ce.setAnimationLoop(ye),this.setAnimationLoop=function(ne){pe=ne},this.dispose=function(){}}}const Tr=new xa,d1=new pn;function p1(a,e){function i(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function s(y,x){x.color.getRGB(y.fogColor.value,hx(a)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function l(y,x,I,B,R){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(y,x):x.isMeshToonMaterial?(c(y,x),g(y,x)):x.isMeshPhongMaterial?(c(y,x),v(y,x)):x.isMeshStandardMaterial?(c(y,x),_(y,x),x.isMeshPhysicalMaterial&&S(y,x,R)):x.isMeshMatcapMaterial?(c(y,x),M(y,x)):x.isMeshDepthMaterial?c(y,x):x.isMeshDistanceMaterial?(c(y,x),b(y,x)):x.isMeshNormalMaterial?c(y,x):x.isLineBasicMaterial?(h(y,x),x.isLineDashedMaterial&&d(y,x)):x.isPointsMaterial?m(y,x,I,B):x.isSpriteMaterial?p(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,i(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===En&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,i(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===En&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,i(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,i(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const I=e.get(x),B=I.envMap,R=I.envMapRotation;B&&(y.envMap.value=B,Tr.copy(R),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),y.envMapRotation.value.setFromMatrix4(d1.makeRotationFromEuler(Tr)),y.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,y.aoMapTransform))}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform))}function d(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function m(y,x,I,B){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*I,y.scale.value=B*.5,x.map&&(y.map.value=x.map,i(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function v(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function g(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function _(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function S(y,x,I){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===En&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=I.texture,y.transmissionSamplerSize.value.set(I.width,I.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,x){x.matcap&&(y.matcap.value=x.matcap)}function b(y,x){const I=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(I.matrixWorld),y.nearDistance.value=I.shadow.camera.near,y.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function m1(a,e,i,s){let l={},c={},h=[];const d=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function m(I,B){const R=B.program;s.uniformBlockBinding(I,R)}function p(I,B){let R=l[I.id];R===void 0&&(M(I),R=v(I),l[I.id]=R,I.addEventListener("dispose",y));const X=B.program;s.updateUBOMapping(I,X);const k=e.render.frame;c[I.id]!==k&&(_(I),c[I.id]=k)}function v(I){const B=g();I.__bindingPointIndex=B;const R=a.createBuffer(),X=I.__size,k=I.usage;return a.bindBuffer(a.UNIFORM_BUFFER,R),a.bufferData(a.UNIFORM_BUFFER,X,k),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,B,R),R}function g(){for(let I=0;I<d;I++)if(h.indexOf(I)===-1)return h.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(I){const B=l[I.id],R=I.uniforms,X=I.__cache;a.bindBuffer(a.UNIFORM_BUFFER,B);for(let k=0,F=R.length;k<F;k++){const J=Array.isArray(R[k])?R[k]:[R[k]];for(let U=0,D=J.length;U<D;U++){const H=J[U];if(S(H,k,U,X)===!0){const K=H.__offset,ce=Array.isArray(H.value)?H.value:[H.value];let ee=0;for(let O=0;O<ce.length;O++){const w=ce[O],z=b(w);typeof w=="number"||typeof w=="boolean"?(H.__data[0]=w,a.bufferSubData(a.UNIFORM_BUFFER,K+ee,H.__data)):w.isMatrix3?(H.__data[0]=w.elements[0],H.__data[1]=w.elements[1],H.__data[2]=w.elements[2],H.__data[3]=0,H.__data[4]=w.elements[3],H.__data[5]=w.elements[4],H.__data[6]=w.elements[5],H.__data[7]=0,H.__data[8]=w.elements[6],H.__data[9]=w.elements[7],H.__data[10]=w.elements[8],H.__data[11]=0):(w.toArray(H.__data,ee),ee+=z.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,K,H.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function S(I,B,R,X){const k=I.value,F=B+"_"+R;if(X[F]===void 0)return typeof k=="number"||typeof k=="boolean"?X[F]=k:X[F]=k.clone(),!0;{const J=X[F];if(typeof k=="number"||typeof k=="boolean"){if(J!==k)return X[F]=k,!0}else if(J.equals(k)===!1)return J.copy(k),!0}return!1}function M(I){const B=I.uniforms;let R=0;const X=16;for(let F=0,J=B.length;F<J;F++){const U=Array.isArray(B[F])?B[F]:[B[F]];for(let D=0,H=U.length;D<H;D++){const K=U[D],ce=Array.isArray(K.value)?K.value:[K.value];for(let ee=0,O=ce.length;ee<O;ee++){const w=ce[ee],z=b(w),P=R%X,ue=P%z.boundary,de=P+ue;R+=ue,de!==0&&X-de<z.storage&&(R+=X-de),K.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=R,R+=z.storage}}}const k=R%X;return k>0&&(R+=X-k),I.__size=R,I.__cache={},this}function b(I){const B={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(B.boundary=4,B.storage=4):I.isVector2?(B.boundary=8,B.storage=8):I.isVector3||I.isColor?(B.boundary=16,B.storage=12):I.isVector4?(B.boundary=16,B.storage=16):I.isMatrix3?(B.boundary=48,B.storage=48):I.isMatrix4?(B.boundary=64,B.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),B}function y(I){const B=I.target;B.removeEventListener("dispose",y);const R=h.indexOf(B.__bindingPointIndex);h.splice(R,1),a.deleteBuffer(l[B.id]),delete l[B.id],delete c[B.id]}function x(){for(const I in l)a.deleteBuffer(l[I]);h=[],l={},c={}}return{bind:m,update:p,dispose:x}}class g1{constructor(e={}){const{canvas:i=zS(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=h;const M=new Uint32Array(4),b=new Int32Array(4);let y=null,x=null;const I=[],B=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ja,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let X=!1;this._outputColorSpace=kt;let k=0,F=0,J=null,U=-1,D=null;const H=new Kt,K=new Kt;let ce=null;const ee=new gt(0);let O=0,w=i.width,z=i.height,P=1,ue=null,de=null;const L=new Kt(0,0,w,z),te=new Kt(0,0,w,z);let pe=!1;const ye=new px;let Ce=!1,ne=!1;const he=new pn,De=new q,Oe=new Kt,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function Jt(){return J===null?P:1}let V=s;function Tt(C,j){return i.getContext(C,j)}try{const C={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Gs}`),i.addEventListener("webglcontextlost",Ue,!1),i.addEventListener("webglcontextrestored",Fe,!1),i.addEventListener("webglcontextcreationerror",Me,!1),V===null){const j="webgl2";if(V=Tt(j,C),V===null)throw Tt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let at,Ke,We,Xt,Xe,ot,tn,$t,N,E,re,ve,Ee,me,Ze,we,qe,je,Te,Re,Je,ze,Le,ut;function Q(){at=new bT(V),at.init(),ze=new l1(V,at),Ke=new AT(V,at,e,ze),We=new s1(V,at),Ke.reversedDepthBuffer&&_&&We.buffers.depth.setReversed(!0),Xt=new RT(V),Xe=new Qb,ot=new o1(V,at,We,Xe,Ke,ze,Xt),tn=new ST(R),$t=new TT(R),N=new Oy(V),Le=new vT(V,N),E=new CT(V,N,Xt,Le),re=new UT(V,E,N,Xt),Te=new DT(V,Ke,ot),we=new _T(Xe),ve=new Wb(R,tn,$t,at,Ke,Le,we),Ee=new p1(R,Xe),me=new jb,Ze=new t1(at),je=new gT(R,tn,$t,We,re,S,m),qe=new a1(R,re,Ke),ut=new m1(V,Xt,Ke,We),Re=new xT(V,at,Xt),Je=new wT(V,at,Xt),Xt.programs=ve.programs,R.capabilities=Ke,R.extensions=at,R.properties=Xe,R.renderLists=me,R.shadowMap=qe,R.state=We,R.info=Xt}Q();const be=new h1(R,V);this.xr=be,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const C=at.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=at.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return P},this.setPixelRatio=function(C){C!==void 0&&(P=C,this.setSize(w,z,!1))},this.getSize=function(C){return C.set(w,z)},this.setSize=function(C,j,oe=!0){if(be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=C,z=j,i.width=Math.floor(C*P),i.height=Math.floor(j*P),oe===!0&&(i.style.width=C+"px",i.style.height=j+"px"),this.setViewport(0,0,C,j)},this.getDrawingBufferSize=function(C){return C.set(w*P,z*P).floor()},this.setDrawingBufferSize=function(C,j,oe){w=C,z=j,P=oe,i.width=Math.floor(C*oe),i.height=Math.floor(j*oe),this.setViewport(0,0,C,j)},this.getCurrentViewport=function(C){return C.copy(H)},this.getViewport=function(C){return C.copy(L)},this.setViewport=function(C,j,oe,le){C.isVector4?L.set(C.x,C.y,C.z,C.w):L.set(C,j,oe,le),We.viewport(H.copy(L).multiplyScalar(P).round())},this.getScissor=function(C){return C.copy(te)},this.setScissor=function(C,j,oe,le){C.isVector4?te.set(C.x,C.y,C.z,C.w):te.set(C,j,oe,le),We.scissor(K.copy(te).multiplyScalar(P).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(C){We.setScissorTest(pe=C)},this.setOpaqueSort=function(C){ue=C},this.setTransparentSort=function(C){de=C},this.getClearColor=function(C){return C.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor(...arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha(...arguments)},this.clear=function(C=!0,j=!0,oe=!0){let le=0;if(C){let $=!1;if(J!==null){const Se=J.texture.format;$=Se===Fd||Se===zd||Se===Id}if($){const Se=J.texture.type,Be=Se===Un||Se===$a||Se===Qo||Se===Is||Se===Od||Se===Pd,Ve=je.getClearColor(),Ie=je.getClearAlpha(),$e=Ve.r,rt=Ve.g,et=Ve.b;Be?(M[0]=$e,M[1]=rt,M[2]=et,M[3]=Ie,V.clearBufferuiv(V.COLOR,0,M)):(b[0]=$e,b[1]=rt,b[2]=et,b[3]=Ie,V.clearBufferiv(V.COLOR,0,b))}else le|=V.COLOR_BUFFER_BIT}j&&(le|=V.DEPTH_BUFFER_BIT),oe&&(le|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ue,!1),i.removeEventListener("webglcontextrestored",Fe,!1),i.removeEventListener("webglcontextcreationerror",Me,!1),je.dispose(),me.dispose(),Ze.dispose(),Xe.dispose(),tn.dispose(),$t.dispose(),re.dispose(),Le.dispose(),ut.dispose(),ve.dispose(),be.dispose(),be.removeEventListener("sessionstart",hi),be.removeEventListener("sessionend",Xs),Ui.stop()};function Ue(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),X=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),X=!1;const C=Xt.autoReset,j=qe.enabled,oe=qe.autoUpdate,le=qe.needsUpdate,$=qe.type;Q(),Xt.autoReset=C,qe.enabled=j,qe.autoUpdate=oe,qe.needsUpdate=le,qe.type=$}function Me(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function _e(C){const j=C.target;j.removeEventListener("dispose",_e),He(j)}function He(C){st(C),Xe.remove(C)}function st(C){const j=Xe.get(C).programs;j!==void 0&&(j.forEach(function(oe){ve.releaseProgram(oe)}),C.isShaderMaterial&&ve.releaseShaderCache(C))}this.renderBufferDirect=function(C,j,oe,le,$,Se){j===null&&(j=Ye);const Be=$.isMesh&&$.matrixWorld.determinant()<0,Ve=Sa(C,j,oe,le,$);We.setMaterial(le,Be);let Ie=oe.index,$e=1;if(le.wireframe===!0){if(Ie=E.getWireframeAttribute(oe),Ie===void 0)return;$e=2}const rt=oe.drawRange,et=oe.attributes.position;let pt=rt.start*$e,Nt=(rt.start+rt.count)*$e;Se!==null&&(pt=Math.max(pt,Se.start*$e),Nt=Math.min(Nt,(Se.start+Se.count)*$e)),Ie!==null?(pt=Math.max(pt,0),Nt=Math.min(Nt,Ie.count)):et!=null&&(pt=Math.max(pt,0),Nt=Math.min(Nt,et.count));const Yt=Nt-pt;if(Yt<0||Yt===1/0)return;Le.setup($,le,Ve,oe,Ie);let Ot,vt=Re;if(Ie!==null&&(Ot=N.get(Ie),vt=Je,vt.setIndex(Ot)),$.isMesh)le.wireframe===!0?(We.setLineWidth(le.wireframeLinewidth*Jt()),vt.setMode(V.LINES)):vt.setMode(V.TRIANGLES);else if($.isLine){let ke=le.linewidth;ke===void 0&&(ke=1),We.setLineWidth(ke*Jt()),$.isLineSegments?vt.setMode(V.LINES):$.isLineLoop?vt.setMode(V.LINE_LOOP):vt.setMode(V.LINE_STRIP)}else $.isPoints?vt.setMode(V.POINTS):$.isSprite&&vt.setMode(V.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)jo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),vt.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(at.get("WEBGL_multi_draw"))vt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const ke=$._multiDrawStarts,Qt=$._multiDrawCounts,wt=$._multiDrawCount,bn=Ie?N.get(Ie).bytesPerElement:1,Xi=Xe.get(le).currentProgram.getUniforms();for(let _n=0;_n<wt;_n++)Xi.setValue(V,"_gl_DrawID",_n),vt.render(ke[_n]/bn,Qt[_n])}else if($.isInstancedMesh)vt.renderInstances(pt,Yt,$.count);else if(oe.isInstancedBufferGeometry){const ke=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Qt=Math.min(oe.instanceCount,ke);vt.renderInstances(pt,Yt,Qt)}else vt.render(pt,Yt)};function Pt(C,j,oe){C.transparent===!0&&C.side===kn&&C.forceSinglePass===!1?(C.side=En,C.needsUpdate=!0,Zn(C,j,oe),C.side=va,C.needsUpdate=!0,Zn(C,j,oe),C.side=kn):Zn(C,j,oe)}this.compile=function(C,j,oe=null){oe===null&&(oe=C),x=Ze.get(oe),x.init(j),B.push(x),oe.traverseVisible(function($){$.isLight&&$.layers.test(j.layers)&&(x.pushLight($),$.castShadow&&x.pushShadow($))}),C!==oe&&C.traverseVisible(function($){$.isLight&&$.layers.test(j.layers)&&(x.pushLight($),$.castShadow&&x.pushShadow($))}),x.setupLights();const le=new Set;return C.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Se=$.material;if(Se)if(Array.isArray(Se))for(let Be=0;Be<Se.length;Be++){const Ve=Se[Be];Pt(Ve,oe,$),le.add(Ve)}else Pt(Se,oe,$),le.add(Se)}),x=B.pop(),le},this.compileAsync=function(C,j,oe=null){const le=this.compile(C,j,oe);return new Promise($=>{function Se(){if(le.forEach(function(Be){Xe.get(Be).currentProgram.isReady()&&le.delete(Be)}),le.size===0){$(C);return}setTimeout(Se,10)}at.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Ct=null;function Fn(C){Ct&&Ct(C)}function hi(){Ui.stop()}function Xs(){Ui.start()}const Ui=new _x;Ui.setAnimationLoop(Fn),typeof self<"u"&&Ui.setContext(self),this.setAnimationLoop=function(C){Ct=C,be.setAnimationLoop(C),C===null?Ui.stop():Ui.start()},be.addEventListener("sessionstart",hi),be.addEventListener("sessionend",Xs),this.render=function(C,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(be.cameraAutoUpdate===!0&&be.updateCamera(j),j=be.getCamera()),C.isScene===!0&&C.onBeforeRender(R,C,j,J),x=Ze.get(C,B.length),x.init(j),B.push(x),he.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),ye.setFromProjectionMatrix(he,Hi,j.reversedDepth),ne=this.localClippingEnabled,Ce=we.init(this.clippingPlanes,ne),y=me.get(C,I.length),y.init(),I.push(y),be.enabled===!0&&be.isPresenting===!0){const Se=R.xr.getDepthSensingMesh();Se!==null&&Br(Se,j,-1/0,R.sortObjects)}Br(C,j,0,R.sortObjects),y.finish(),R.sortObjects===!0&&y.sort(ue,de),ct=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,ct&&je.addToRenderList(y,C),this.info.render.frame++,Ce===!0&&we.beginShadows();const oe=x.state.shadowsArray;qe.render(oe,C,j),Ce===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();const le=y.opaque,$=y.transmissive;if(x.setupLights(),j.isArrayCamera){const Se=j.cameras;if($.length>0)for(let Be=0,Ve=Se.length;Be<Ve;Be++){const Ie=Se[Be];Or(le,$,C,Ie)}ct&&je.render(C);for(let Be=0,Ve=Se.length;Be<Ve;Be++){const Ie=Se[Be];Nr(y,C,Ie,Ie.viewport)}}else $.length>0&&Or(le,$,C,j),ct&&je.render(C),Nr(y,C,j);J!==null&&F===0&&(ot.updateMultisampleRenderTarget(J),ot.updateRenderTargetMipmap(J)),C.isScene===!0&&C.onAfterRender(R,C,j),Le.resetDefaultState(),U=-1,D=null,B.pop(),B.length>0?(x=B[B.length-1],Ce===!0&&we.setGlobalState(R.clippingPlanes,x.state.camera)):x=null,I.pop(),I.length>0?y=I[I.length-1]:y=null};function Br(C,j,oe,le){if(C.visible===!1)return;if(C.layers.test(j.layers)){if(C.isGroup)oe=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(j);else if(C.isLight)x.pushLight(C),C.castShadow&&x.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ye.intersectsSprite(C)){le&&Oe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(he);const Be=re.update(C),Ve=C.material;Ve.visible&&y.push(C,Be,Ve,oe,Oe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ye.intersectsObject(C))){const Be=re.update(C),Ve=C.material;if(le&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Oe.copy(C.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),Oe.copy(Be.boundingSphere.center)),Oe.applyMatrix4(C.matrixWorld).applyMatrix4(he)),Array.isArray(Ve)){const Ie=Be.groups;for(let $e=0,rt=Ie.length;$e<rt;$e++){const et=Ie[$e],pt=Ve[et.materialIndex];pt&&pt.visible&&y.push(C,Be,pt,oe,Oe.z,et)}}else Ve.visible&&y.push(C,Be,Ve,oe,Oe.z,null)}}const Se=C.children;for(let Be=0,Ve=Se.length;Be<Ve;Be++)Br(Se[Be],j,oe,le)}function Nr(C,j,oe,le){const $=C.opaque,Se=C.transmissive,Be=C.transparent;x.setupLightsView(oe),Ce===!0&&we.setGlobalState(R.clippingPlanes,oe),le&&We.viewport(H.copy(le)),$.length>0&&tr($,j,oe),Se.length>0&&tr(Se,j,oe),Be.length>0&&tr(Be,j,oe),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function Or(C,j,oe,le){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[le.id]===void 0&&(x.state.transmissionRenderTarget[le.id]=new zn(1,1,{generateMipmaps:!0,type:at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float")?Ko:Un,minFilter:Ur,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ut.workingColorSpace}));const Se=x.state.transmissionRenderTarget[le.id],Be=le.viewport||H;Se.setSize(Be.z*R.transmissionResolutionScale,Be.w*R.transmissionResolutionScale);const Ve=R.getRenderTarget(),Ie=R.getActiveCubeFace(),$e=R.getActiveMipmapLevel();R.setRenderTarget(Se),R.getClearColor(ee),O=R.getClearAlpha(),O<1&&R.setClearColor(16777215,.5),R.clear(),ct&&je.render(oe);const rt=R.toneMapping;R.toneMapping=Ja;const et=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),x.setupLightsView(le),Ce===!0&&we.setGlobalState(R.clippingPlanes,le),tr(C,oe,le),ot.updateMultisampleRenderTarget(Se),ot.updateRenderTargetMipmap(Se),at.has("WEBGL_multisampled_render_to_texture")===!1){let pt=!1;for(let Nt=0,Yt=j.length;Nt<Yt;Nt++){const Ot=j[Nt],vt=Ot.object,ke=Ot.geometry,Qt=Ot.material,wt=Ot.group;if(Qt.side===kn&&vt.layers.test(le.layers)){const bn=Qt.side;Qt.side=En,Qt.needsUpdate=!0,Ys(vt,oe,le,ke,Qt,wt),Qt.side=bn,Qt.needsUpdate=!0,pt=!0}}pt===!0&&(ot.updateMultisampleRenderTarget(Se),ot.updateRenderTargetMipmap(Se))}R.setRenderTarget(Ve,Ie,$e),R.setClearColor(ee,O),et!==void 0&&(le.viewport=et),R.toneMapping=rt}function tr(C,j,oe){const le=j.isScene===!0?j.overrideMaterial:null;for(let $=0,Se=C.length;$<Se;$++){const Be=C[$],Ve=Be.object,Ie=Be.geometry,$e=Be.group;let rt=Be.material;rt.allowOverride===!0&&le!==null&&(rt=le),Ve.layers.test(oe.layers)&&Ys(Ve,j,oe,Ie,rt,$e)}}function Ys(C,j,oe,le,$,Se){C.onBeforeRender(R,j,oe,le,$,Se),C.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),$.onBeforeRender(R,j,oe,le,C,Se),$.transparent===!0&&$.side===kn&&$.forceSinglePass===!1?($.side=En,$.needsUpdate=!0,R.renderBufferDirect(oe,j,le,$,C,Se),$.side=va,$.needsUpdate=!0,R.renderBufferDirect(oe,j,le,$,C,Se),$.side=kn):R.renderBufferDirect(oe,j,le,$,C,Se),C.onAfterRender(R,j,oe,le,$,Se)}function Zn(C,j,oe){j.isScene!==!0&&(j=Ye);const le=Xe.get(C),$=x.state.lights,Se=x.state.shadowsArray,Be=$.state.version,Ve=ve.getParameters(C,$.state,Se,j,oe),Ie=ve.getProgramCacheKey(Ve);let $e=le.programs;le.environment=C.isMeshStandardMaterial?j.environment:null,le.fog=j.fog,le.envMap=(C.isMeshStandardMaterial?$t:tn).get(C.envMap||le.environment),le.envMapRotation=le.environment!==null&&C.envMap===null?j.environmentRotation:C.envMapRotation,$e===void 0&&(C.addEventListener("dispose",_e),$e=new Map,le.programs=$e);let rt=$e.get(Ie);if(rt!==void 0){if(le.currentProgram===rt&&le.lightsStateVersion===Be)return Tn(C,Ve),rt}else Ve.uniforms=ve.getUniforms(C),C.onBeforeCompile(Ve,R),rt=ve.acquireProgram(Ve,Ie),$e.set(Ie,rt),le.uniforms=Ve.uniforms;const et=le.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(et.clippingPlanes=we.uniform),Tn(C,Ve),le.needsLights=Wc(C),le.lightsStateVersion=Be,le.needsLights&&(et.ambientLightColor.value=$.state.ambient,et.lightProbe.value=$.state.probe,et.directionalLights.value=$.state.directional,et.directionalLightShadows.value=$.state.directionalShadow,et.spotLights.value=$.state.spot,et.spotLightShadows.value=$.state.spotShadow,et.rectAreaLights.value=$.state.rectArea,et.ltc_1.value=$.state.rectAreaLTC1,et.ltc_2.value=$.state.rectAreaLTC2,et.pointLights.value=$.state.point,et.pointLightShadows.value=$.state.pointShadow,et.hemisphereLights.value=$.state.hemi,et.directionalShadowMap.value=$.state.directionalShadowMap,et.directionalShadowMatrix.value=$.state.directionalShadowMatrix,et.spotShadowMap.value=$.state.spotShadowMap,et.spotLightMatrix.value=$.state.spotLightMatrix,et.spotLightMap.value=$.state.spotLightMap,et.pointShadowMap.value=$.state.pointShadowMap,et.pointShadowMatrix.value=$.state.pointShadowMatrix),le.currentProgram=rt,le.uniformsList=null,rt}function ln(C){if(C.uniformsList===null){const j=C.currentProgram.getUniforms();C.uniformsList=Hc.seqWithValue(j.seq,C.uniforms)}return C.uniformsList}function Tn(C,j){const oe=Xe.get(C);oe.outputColorSpace=j.outputColorSpace,oe.batching=j.batching,oe.batchingColor=j.batchingColor,oe.instancing=j.instancing,oe.instancingColor=j.instancingColor,oe.instancingMorph=j.instancingMorph,oe.skinning=j.skinning,oe.morphTargets=j.morphTargets,oe.morphNormals=j.morphNormals,oe.morphColors=j.morphColors,oe.morphTargetsCount=j.morphTargetsCount,oe.numClippingPlanes=j.numClippingPlanes,oe.numIntersection=j.numClipIntersection,oe.vertexAlphas=j.vertexAlphas,oe.vertexTangents=j.vertexTangents,oe.toneMapping=j.toneMapping}function Sa(C,j,oe,le,$){j.isScene!==!0&&(j=Ye),ot.resetTextureUnits();const Se=j.fog,Be=le.isMeshStandardMaterial?j.environment:null,Ve=J===null?R.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:er,Ie=(le.isMeshStandardMaterial?$t:tn).get(le.envMap||Be),$e=le.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,rt=!!oe.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),et=!!oe.morphAttributes.position,pt=!!oe.morphAttributes.normal,Nt=!!oe.morphAttributes.color;let Yt=Ja;le.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Yt=R.toneMapping);const Ot=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,vt=Ot!==void 0?Ot.length:0,ke=Xe.get(le),Qt=x.state.lights;if(Ce===!0&&(ne===!0||C!==D)){const gn=C===D&&le.id===U;we.setState(le,C,gn)}let wt=!1;le.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Qt.state.version||ke.outputColorSpace!==Ve||$.isBatchedMesh&&ke.batching===!1||!$.isBatchedMesh&&ke.batching===!0||$.isBatchedMesh&&ke.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&ke.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&ke.instancing===!1||!$.isInstancedMesh&&ke.instancing===!0||$.isSkinnedMesh&&ke.skinning===!1||!$.isSkinnedMesh&&ke.skinning===!0||$.isInstancedMesh&&ke.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&ke.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&ke.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&ke.instancingMorph===!1&&$.morphTexture!==null||ke.envMap!==Ie||le.fog===!0&&ke.fog!==Se||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==we.numPlanes||ke.numIntersection!==we.numIntersection)||ke.vertexAlphas!==$e||ke.vertexTangents!==rt||ke.morphTargets!==et||ke.morphNormals!==pt||ke.morphColors!==Nt||ke.toneMapping!==Yt||ke.morphTargetsCount!==vt)&&(wt=!0):(wt=!0,ke.__version=le.version);let bn=ke.currentProgram;wt===!0&&(bn=Zn(le,j,$));let Xi=!1,_n=!1,ir=!1;const yt=bn.getUniforms(),Ln=ke.uniforms;if(We.useProgram(bn.program)&&(Xi=!0,_n=!0,ir=!0),le.id!==U&&(U=le.id,_n=!0),Xi||D!==C){We.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),yt.setValue(V,"projectionMatrix",C.projectionMatrix),yt.setValue(V,"viewMatrix",C.matrixWorldInverse);const rn=yt.map.cameraPosition;rn!==void 0&&rn.setValue(V,De.setFromMatrixPosition(C.matrixWorld)),Ke.logarithmicDepthBuffer&&yt.setValue(V,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&yt.setValue(V,"isOrthographic",C.isOrthographicCamera===!0),D!==C&&(D=C,_n=!0,ir=!0)}if($.isSkinnedMesh){yt.setOptional(V,$,"bindMatrix"),yt.setOptional(V,$,"bindMatrixInverse");const gn=$.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),yt.setValue(V,"boneTexture",gn.boneTexture,ot))}$.isBatchedMesh&&(yt.setOptional(V,$,"batchingTexture"),yt.setValue(V,"batchingTexture",$._matricesTexture,ot),yt.setOptional(V,$,"batchingIdTexture"),yt.setValue(V,"batchingIdTexture",$._indirectTexture,ot),yt.setOptional(V,$,"batchingColorTexture"),$._colorsTexture!==null&&yt.setValue(V,"batchingColorTexture",$._colorsTexture,ot));const Hn=oe.morphAttributes;if((Hn.position!==void 0||Hn.normal!==void 0||Hn.color!==void 0)&&Te.update($,oe,bn),(_n||ke.receiveShadow!==$.receiveShadow)&&(ke.receiveShadow=$.receiveShadow,yt.setValue(V,"receiveShadow",$.receiveShadow)),le.isMeshGouraudMaterial&&le.envMap!==null&&(Ln.envMap.value=Ie,Ln.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),le.isMeshStandardMaterial&&le.envMap===null&&j.environment!==null&&(Ln.envMapIntensity.value=j.environmentIntensity),_n&&(yt.setValue(V,"toneMappingExposure",R.toneMappingExposure),ke.needsLights&&Ws(Ln,ir),Se&&le.fog===!0&&Ee.refreshFogUniforms(Ln,Se),Ee.refreshMaterialUniforms(Ln,le,P,z,x.state.transmissionRenderTarget[C.id]),Hc.upload(V,ln(ke),Ln,ot)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(Hc.upload(V,ln(ke),Ln,ot),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&yt.setValue(V,"center",$.center),yt.setValue(V,"modelViewMatrix",$.modelViewMatrix),yt.setValue(V,"normalMatrix",$.normalMatrix),yt.setValue(V,"modelMatrix",$.matrixWorld),le.isShaderMaterial||le.isRawShaderMaterial){const gn=le.uniformsGroups;for(let rn=0,Pr=gn.length;rn<Pr;rn++){const Li=gn[rn];ut.update(Li,bn),ut.bind(Li,bn)}}return bn}function Ws(C,j){C.ambientLightColor.needsUpdate=j,C.lightProbe.needsUpdate=j,C.directionalLights.needsUpdate=j,C.directionalLightShadows.needsUpdate=j,C.pointLights.needsUpdate=j,C.pointLightShadows.needsUpdate=j,C.spotLights.needsUpdate=j,C.spotLightShadows.needsUpdate=j,C.rectAreaLights.needsUpdate=j,C.hemisphereLights.needsUpdate=j}function Wc(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(C,j,oe){const le=Xe.get(C);le.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),Xe.get(C.texture).__webglTexture=j,Xe.get(C.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:oe,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,j){const oe=Xe.get(C);oe.__webglFramebuffer=j,oe.__useDefaultFramebuffer=j===void 0};const Qc=V.createFramebuffer();this.setRenderTarget=function(C,j=0,oe=0){J=C,k=j,F=oe;let le=!0,$=null,Se=!1,Be=!1;if(C){const Ie=Xe.get(C);if(Ie.__useDefaultFramebuffer!==void 0)We.bindFramebuffer(V.FRAMEBUFFER,null),le=!1;else if(Ie.__webglFramebuffer===void 0)ot.setupRenderTarget(C);else if(Ie.__hasExternalTextures)ot.rebindTextures(C,Xe.get(C.texture).__webglTexture,Xe.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const et=C.depthTexture;if(Ie.__boundDepthTexture!==et){if(et!==null&&Xe.has(et)&&(C.width!==et.image.width||C.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ot.setupDepthRenderbuffer(C)}}const $e=C.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Be=!0);const rt=Xe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(rt[j])?$=rt[j][oe]:$=rt[j],Se=!0):C.samples>0&&ot.useMultisampledRTT(C)===!1?$=Xe.get(C).__webglMultisampledFramebuffer:Array.isArray(rt)?$=rt[oe]:$=rt,H.copy(C.viewport),K.copy(C.scissor),ce=C.scissorTest}else H.copy(L).multiplyScalar(P).floor(),K.copy(te).multiplyScalar(P).floor(),ce=pe;if(oe!==0&&($=Qc),We.bindFramebuffer(V.FRAMEBUFFER,$)&&le&&We.drawBuffers(C,$),We.viewport(H),We.scissor(K),We.setScissorTest(ce),Se){const Ie=Xe.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ie.__webglTexture,oe)}else if(Be){const Ie=j;for(let $e=0;$e<C.textures.length;$e++){const rt=Xe.get(C.textures[$e]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+$e,rt.__webglTexture,oe,Ie)}}else if(C!==null&&oe!==0){const Ie=Xe.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ie.__webglTexture,oe)}U=-1},this.readRenderTargetPixels=function(C,j,oe,le,$,Se,Be,Ve=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Xe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Be!==void 0&&(Ie=Ie[Be]),Ie){We.bindFramebuffer(V.FRAMEBUFFER,Ie);try{const $e=C.textures[Ve],rt=$e.format,et=$e.type;if(!Ke.textureFormatReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ke.textureTypeReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=C.width-le&&oe>=0&&oe<=C.height-$&&(C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ve),V.readPixels(j,oe,le,$,ze.convert(rt),ze.convert(et),Se))}finally{const $e=J!==null?Xe.get(J).__webglFramebuffer:null;We.bindFramebuffer(V.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(C,j,oe,le,$,Se,Be,Ve=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=Xe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Be!==void 0&&(Ie=Ie[Be]),Ie)if(j>=0&&j<=C.width-le&&oe>=0&&oe<=C.height-$){We.bindFramebuffer(V.FRAMEBUFFER,Ie);const $e=C.textures[Ve],rt=$e.format,et=$e.type;if(!Ke.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ke.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,pt),V.bufferData(V.PIXEL_PACK_BUFFER,Se.byteLength,V.STREAM_READ),C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ve),V.readPixels(j,oe,le,$,ze.convert(rt),ze.convert(et),0);const Nt=J!==null?Xe.get(J).__webglFramebuffer:null;We.bindFramebuffer(V.FRAMEBUFFER,Nt);const Yt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await FS(V,Yt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,pt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Se),V.deleteBuffer(pt),V.deleteSync(Yt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,j=null,oe=0){const le=Math.pow(2,-oe),$=Math.floor(C.image.width*le),Se=Math.floor(C.image.height*le),Be=j!==null?j.x:0,Ve=j!==null?j.y:0;ot.setTexture2D(C,0),V.copyTexSubImage2D(V.TEXTURE_2D,oe,0,0,Be,Ve,$,Se),We.unbindTexture()};const tl=V.createFramebuffer(),nr=V.createFramebuffer();this.copyTextureToTexture=function(C,j,oe=null,le=null,$=0,Se=null){Se===null&&($!==0?(jo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=$,$=0):Se=0);let Be,Ve,Ie,$e,rt,et,pt,Nt,Yt;const Ot=C.isCompressedTexture?C.mipmaps[Se]:C.image;if(oe!==null)Be=oe.max.x-oe.min.x,Ve=oe.max.y-oe.min.y,Ie=oe.isBox3?oe.max.z-oe.min.z:1,$e=oe.min.x,rt=oe.min.y,et=oe.isBox3?oe.min.z:0;else{const Hn=Math.pow(2,-$);Be=Math.floor(Ot.width*Hn),Ve=Math.floor(Ot.height*Hn),C.isDataArrayTexture?Ie=Ot.depth:C.isData3DTexture?Ie=Math.floor(Ot.depth*Hn):Ie=1,$e=0,rt=0,et=0}le!==null?(pt=le.x,Nt=le.y,Yt=le.z):(pt=0,Nt=0,Yt=0);const vt=ze.convert(j.format),ke=ze.convert(j.type);let Qt;j.isData3DTexture?(ot.setTexture3D(j,0),Qt=V.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(ot.setTexture2DArray(j,0),Qt=V.TEXTURE_2D_ARRAY):(ot.setTexture2D(j,0),Qt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,j.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,j.unpackAlignment);const wt=V.getParameter(V.UNPACK_ROW_LENGTH),bn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Xi=V.getParameter(V.UNPACK_SKIP_PIXELS),_n=V.getParameter(V.UNPACK_SKIP_ROWS),ir=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ot.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ot.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,$e),V.pixelStorei(V.UNPACK_SKIP_ROWS,rt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,et);const yt=C.isDataArrayTexture||C.isData3DTexture,Ln=j.isDataArrayTexture||j.isData3DTexture;if(C.isDepthTexture){const Hn=Xe.get(C),gn=Xe.get(j),rn=Xe.get(Hn.__renderTarget),Pr=Xe.get(gn.__renderTarget);We.bindFramebuffer(V.READ_FRAMEBUFFER,rn.__webglFramebuffer),We.bindFramebuffer(V.DRAW_FRAMEBUFFER,Pr.__webglFramebuffer);for(let Li=0;Li<Ie;Li++)yt&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Xe.get(C).__webglTexture,$,et+Li),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Xe.get(j).__webglTexture,Se,Yt+Li)),V.blitFramebuffer($e,rt,Be,Ve,pt,Nt,Be,Ve,V.DEPTH_BUFFER_BIT,V.NEAREST);We.bindFramebuffer(V.READ_FRAMEBUFFER,null),We.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if($!==0||C.isRenderTargetTexture||Xe.has(C)){const Hn=Xe.get(C),gn=Xe.get(j);We.bindFramebuffer(V.READ_FRAMEBUFFER,tl),We.bindFramebuffer(V.DRAW_FRAMEBUFFER,nr);for(let rn=0;rn<Ie;rn++)yt?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Hn.__webglTexture,$,et+rn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Hn.__webglTexture,$),Ln?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,gn.__webglTexture,Se,Yt+rn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,gn.__webglTexture,Se),$!==0?V.blitFramebuffer($e,rt,Be,Ve,pt,Nt,Be,Ve,V.COLOR_BUFFER_BIT,V.NEAREST):Ln?V.copyTexSubImage3D(Qt,Se,pt,Nt,Yt+rn,$e,rt,Be,Ve):V.copyTexSubImage2D(Qt,Se,pt,Nt,$e,rt,Be,Ve);We.bindFramebuffer(V.READ_FRAMEBUFFER,null),We.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Ln?C.isDataTexture||C.isData3DTexture?V.texSubImage3D(Qt,Se,pt,Nt,Yt,Be,Ve,Ie,vt,ke,Ot.data):j.isCompressedArrayTexture?V.compressedTexSubImage3D(Qt,Se,pt,Nt,Yt,Be,Ve,Ie,vt,Ot.data):V.texSubImage3D(Qt,Se,pt,Nt,Yt,Be,Ve,Ie,vt,ke,Ot):C.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Se,pt,Nt,Be,Ve,vt,ke,Ot.data):C.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Se,pt,Nt,Ot.width,Ot.height,vt,Ot.data):V.texSubImage2D(V.TEXTURE_2D,Se,pt,Nt,Be,Ve,vt,ke,Ot);V.pixelStorei(V.UNPACK_ROW_LENGTH,wt),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,bn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Xi),V.pixelStorei(V.UNPACK_SKIP_ROWS,_n),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ir),Se===0&&j.generateMipmaps&&V.generateMipmap(Qt),We.unbindTexture()},this.initRenderTarget=function(C){Xe.get(C).__webglFramebuffer===void 0&&ot.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?ot.setTextureCube(C,0):C.isData3DTexture?ot.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ot.setTexture2DArray(C,0):ot.setTexture2D(C,0),We.unbindTexture()},this.resetState=function(){k=0,F=0,J=null,We.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ut._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ut._getUnpackColorSpace()}}/**
 * postprocessing v6.37.8 build Fri Sep 12 2025
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2025 Raoul van Rüschen
 * @license Zlib
 */var Fh=1/1e3,v1=1e3,x1=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(a){typeof document<"u"&&document.hidden!==void 0&&(a?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=a)}get delta(){return this._delta*Fh}get fixedDelta(){return this._fixedDelta*Fh}set fixedDelta(a){this._fixedDelta=a*v1}get elapsed(){return this._elapsed*Fh}update(a){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(a!==void 0?a:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(a){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},A1=(()=>{const a=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),i=new ki;return i.setAttribute("position",new fi(a,3)),i.setAttribute("uv",new fi(e,2)),i})(),yi=class Ld{static get fullscreenGeometry(){return A1}constructor(e="Pass",i=new Dd,s=new Vd){this.name=e,this.renderer=null,this.scene=i,this.camera=s,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const i=this.fullscreenMaterial;i!==null&&(i.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let i=this.screen;i!==null?i.material=e:(i=new li(Ld.fullscreenGeometry,e),i.frustumCulled=!1,this.scene===null&&(this.scene=new Dd),this.scene.add(i),this.screen=i)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,i=Lr){}render(e,i,s,l,c){throw new Error("Render method not implemented!")}setSize(e,i){}initialize(e,i,s){}dispose(){for(const e of Object.keys(this)){const i=this[e];(i instanceof zn||i instanceof Vs||i instanceof Mn||i instanceof Ld)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},_1=class extends yi{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(a,e,i,s,l){const c=a.state.buffers.stencil;c.setLocked(!1),c.setTest(!1)}},S1=`#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform float opacity;varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);gl_FragColor=opacity*texel;
#include <colorspace_fragment>
#include <dithering_fragment>
}`,Tx="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",bx=class extends mn{constructor(){super({name:"CopyMaterial",uniforms:{inputBuffer:new mt(null),opacity:new mt(1)},blending:In,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:S1,vertexShader:Tx})}set inputBuffer(a){this.uniforms.inputBuffer.value=a}setInputBuffer(a){this.uniforms.inputBuffer.value=a}getOpacity(a){return this.uniforms.opacity.value}setOpacity(a){this.uniforms.opacity.value=a}},y1=class extends yi{constructor(a,e=!0){super("CopyPass"),this.fullscreenMaterial=new bx,this.needsSwap=!1,this.renderTarget=a,a===void 0&&(this.renderTarget=new zn(1,1,{minFilter:Pn,magFilter:Pn,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(a){this.autoResize=a}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(a){this.autoResize=a}render(a,e,i,s,l){this.fullscreenMaterial.inputBuffer=e.texture,a.setRenderTarget(this.renderToScreen?null:this.renderTarget),a.render(this.scene,this.camera)}setSize(a,e){this.autoResize&&this.renderTarget.setSize(a,e)}initialize(a,e,i){i!==void 0&&(this.renderTarget.texture.type=i,i!==Un?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":a!==null&&a.outputColorSpace===kt&&(this.renderTarget.texture.colorSpace=kt))}},I0=new gt,qd=class extends yi{constructor(a=!0,e=!0,i=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=a,this.depth=e,this.stencil=i,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(a,e,i){this.color=a,this.depth=e,this.stencil=i}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(a){this.overrideClearColor=a}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(a){this.overrideClearAlpha=a}render(a,e,i,s,l){const c=this.overrideClearColor,h=this.overrideClearAlpha,d=a.getClearAlpha(),m=c!==null,p=h>=0;m?(a.getClearColor(I0),a.setClearColor(c,p?h:d)):p&&a.setClearAlpha(h),a.setRenderTarget(this.renderToScreen?null:e),a.clear(this.color,this.depth,this.stencil),m?a.setClearColor(I0,d):p&&a.setClearAlpha(d)}},E1=class extends yi{constructor(a,e){super("MaskPass",a,e),this.needsSwap=!1,this.clearPass=new qd(!1,!1,!0),this.inverse=!1}set mainScene(a){this.scene=a}set mainCamera(a){this.camera=a}get inverted(){return this.inverse}set inverted(a){this.inverse=a}get clear(){return this.clearPass.enabled}set clear(a){this.clearPass.enabled=a}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(a){this.inverted=a}render(a,e,i,s,l){const c=a.getContext(),h=a.state.buffers,d=this.scene,m=this.camera,p=this.clearPass,v=this.inverted?0:1,g=1-v;h.color.setMask(!1),h.depth.setMask(!1),h.color.setLocked(!0),h.depth.setLocked(!0),h.stencil.setTest(!0),h.stencil.setOp(c.REPLACE,c.REPLACE,c.REPLACE),h.stencil.setFunc(c.ALWAYS,v,4294967295),h.stencil.setClear(g),h.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?p.render(a,null):(p.render(a,e),p.render(a,i))),this.renderToScreen?(a.setRenderTarget(null),a.render(d,m)):(a.setRenderTarget(e),a.render(d,m),a.setRenderTarget(i),a.render(d,m)),h.color.setLocked(!1),h.depth.setLocked(!1),h.stencil.setLocked(!1),h.stencil.setFunc(c.EQUAL,1,4294967295),h.stencil.setOp(c.KEEP,c.KEEP,c.KEEP),h.stencil.setLocked(!0)}},M1=class{constructor(a=null,{depthBuffer:e=!0,stencilBuffer:i=!1,multisampling:s=0,frameBufferType:l}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,i,l,s),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new y1,this.depthTexture=null,this.passes=[],this.timer=new x1,this.autoRenderToScreen=!0,this.setRenderer(a)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(a){const e=this.inputBuffer,i=this.multisampling;i>0&&a>0?(this.inputBuffer.samples=a,this.outputBuffer.samples=a,this.inputBuffer.dispose(),this.outputBuffer.dispose()):i!==a&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,a),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(a){if(this.renderer=a,a!==null){const e=a.getSize(new Pe),i=a.getContext().getContextAttributes().alpha,s=this.inputBuffer.texture.type;s===Un&&a.outputColorSpace===kt&&(this.inputBuffer.texture.colorSpace=kt,this.outputBuffer.texture.colorSpace=kt,this.inputBuffer.dispose(),this.outputBuffer.dispose()),a.autoClear=!1,this.setSize(e.width,e.height);for(const l of this.passes)l.initialize(a,i,s)}}replaceRenderer(a,e=!0){const i=this.renderer,s=i.domElement.parentNode;return this.setRenderer(a),e&&s!==null&&(s.removeChild(i.domElement),s.appendChild(a.domElement)),i}createDepthTexture(){const a=this.depthTexture=new Xd;return this.inputBuffer.depthTexture=a,this.inputBuffer.dispose(),this.inputBuffer.stencilBuffer?(a.format=zs,a.type=Is):a.type=$a,a}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose();for(const a of this.passes)a.setDepthTexture(null)}}createBuffer(a,e,i,s){const l=this.renderer,c=l===null?new Pe:l.getDrawingBufferSize(new Pe),h={minFilter:Pn,magFilter:Pn,stencilBuffer:e,depthBuffer:a,type:i},d=new zn(c.width,c.height,h);return s>0&&(d.ignoreDepthForMultisampleCopy=!1,d.samples=s),i===Un&&l!==null&&l.outputColorSpace===kt&&(d.texture.colorSpace=kt),d.texture.name="EffectComposer.Buffer",d.texture.generateMipmaps=!1,d}setMainScene(a){for(const e of this.passes)e.mainScene=a}setMainCamera(a){for(const e of this.passes)e.mainCamera=a}addPass(a,e){const i=this.passes,s=this.renderer,l=s.getDrawingBufferSize(new Pe),c=s.getContext().getContextAttributes().alpha,h=this.inputBuffer.texture.type;if(a.setRenderer(s),a.setSize(l.width,l.height),a.initialize(s,c,h),this.autoRenderToScreen&&(i.length>0&&(i[i.length-1].renderToScreen=!1),a.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?i.splice(e,0,a):i.push(a),this.autoRenderToScreen&&(i[i.length-1].renderToScreen=!0),a.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const d=this.createDepthTexture();for(a of i)a.setDepthTexture(d)}else a.setDepthTexture(this.depthTexture)}removePass(a){const e=this.passes,i=e.indexOf(a);if(i!==-1&&e.splice(i,1).length>0){if(this.depthTexture!==null){const c=(d,m)=>d||m.needsDepthTexture;e.reduce(c,!1)||(a.getDepthTexture()===this.depthTexture&&a.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&i===e.length&&(a.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const a=this.passes;this.deleteDepthTexture(),a.length>0&&(this.autoRenderToScreen&&(a[a.length-1].renderToScreen=!1),this.passes=[])}render(a){const e=this.renderer,i=this.copyPass;let s=this.inputBuffer,l=this.outputBuffer,c=!1,h,d,m;a===void 0&&(this.timer.update(),a=this.timer.getDelta());for(const p of this.passes)p.enabled&&(p.render(e,s,l,a,c),p.needsSwap&&(c&&(i.renderToScreen=p.renderToScreen,h=e.getContext(),d=e.state.buffers.stencil,d.setFunc(h.NOTEQUAL,1,4294967295),i.render(e,s,l,a,c),d.setFunc(h.EQUAL,1,4294967295)),m=s,s=l,l=m),p instanceof E1?c=!0:p instanceof _1&&(c=!1))}setSize(a,e,i){const s=this.renderer,l=s.getSize(new Pe);(a===void 0||e===void 0)&&(a=l.width,e=l.height),(l.width!==a||l.height!==e)&&s.setSize(a,e,i);const c=s.getDrawingBufferSize(new Pe);this.inputBuffer.setSize(c.width,c.height),this.outputBuffer.setSize(c.width,c.height);for(const h of this.passes)h.setSize(c.width,c.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const a of this.passes)a.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),yi.fullscreenGeometry.dispose()}},ga={NONE:0,DEPTH:1,CONVOLUTION:2},Lt={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},T1=class{constructor(){this.shaderParts=new Map([[Lt.FRAGMENT_HEAD,null],[Lt.FRAGMENT_MAIN_UV,null],[Lt.FRAGMENT_MAIN_IMAGE,null],[Lt.VERTEX_HEAD,null],[Lt.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=ga.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=er}},Hh=!1,z0=class{constructor(a=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(a),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let i;if(e.material.flatShading)switch(e.material.side){case kn:i=this.materialsFlatShadedDoubleSide;break;case En:i=this.materialsFlatShadedBackSide;break;default:i=this.materialsFlatShaded;break}else switch(e.material.side){case kn:i=this.materialsDoubleSide;break;case En:i=this.materialsBackSide;break;default:i=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=i[2]:e.isInstancedMesh?e.material=i[1]:e.material=i[0],++this.meshCount}}}cloneMaterial(a){if(!(a instanceof mn))return a.clone();const e=a.uniforms,i=new Map;for(const l in e){const c=e[l].value;c.isRenderTargetTexture&&(e[l].value=null,i.set(l,c))}const s=a.clone();for(const l of i)e[l[0]].value=l[1],s.uniforms[l[0]].value=l[1];return s}setMaterial(a){if(this.disposeMaterials(),this.material=a,a!==null){const e=this.materials=[this.cloneMaterial(a),this.cloneMaterial(a),this.cloneMaterial(a)];for(const i of e)i.uniforms=Object.assign({},a.uniforms),i.side=va;e[2].skinning=!0,this.materialsBackSide=e.map(i=>{const s=this.cloneMaterial(i);return s.uniforms=Object.assign({},a.uniforms),s.side=En,s}),this.materialsDoubleSide=e.map(i=>{const s=this.cloneMaterial(i);return s.uniforms=Object.assign({},a.uniforms),s.side=kn,s}),this.materialsFlatShaded=e.map(i=>{const s=this.cloneMaterial(i);return s.uniforms=Object.assign({},a.uniforms),s.flatShading=!0,s}),this.materialsFlatShadedBackSide=e.map(i=>{const s=this.cloneMaterial(i);return s.uniforms=Object.assign({},a.uniforms),s.flatShading=!0,s.side=En,s}),this.materialsFlatShadedDoubleSide=e.map(i=>{const s=this.cloneMaterial(i);return s.uniforms=Object.assign({},a.uniforms),s.flatShading=!0,s.side=kn,s})}}render(a,e,i){const s=a.shadowMap.enabled;if(a.shadowMap.enabled=!1,Hh){const l=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),a.render(e,i);for(const c of l)c[0].material=c[1];this.meshCount!==l.size&&l.clear()}else{const l=e.overrideMaterial;e.overrideMaterial=this.material,a.render(e,i),e.overrideMaterial=l}a.shadowMap.enabled=s}disposeMaterials(){if(this.material!==null){const a=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of a)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return Hh}static set workaroundEnabled(a){Hh=a}},Za=-1,Gi=class extends Aa{constructor(a,e=Za,i=Za,s=1){super(),this.resizable=a,this.baseSize=new Pe(1,1),this.preferredSize=new Pe(e,i),this.target=this.preferredSize,this.s=s,this.effectiveSize=new Pe,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){const a=this.baseSize,e=this.preferredSize,i=this.effectiveSize,s=this.scale;e.width!==Za?i.width=e.width:e.height!==Za?i.width=Math.round(e.height*(a.width/Math.max(a.height,1))):i.width=Math.round(a.width*s),e.height!==Za?i.height=e.height:e.width!==Za?i.height=Math.round(e.width/Math.max(a.width/Math.max(a.height,1),1)):i.height=Math.round(a.height*s)}get width(){return this.effectiveSize.width}set width(a){this.preferredWidth=a}get height(){return this.effectiveSize.height}set height(a){this.preferredHeight=a}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(a){this.s!==a&&(this.s=a,this.preferredSize.setScalar(Za),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getScale(){return this.scale}setScale(a){this.scale=a}get baseWidth(){return this.baseSize.width}set baseWidth(a){this.baseSize.width!==a&&(this.baseSize.width=a,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseWidth(){return this.baseWidth}setBaseWidth(a){this.baseWidth=a}get baseHeight(){return this.baseSize.height}set baseHeight(a){this.baseSize.height!==a&&(this.baseSize.height=a,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseHeight(){return this.baseHeight}setBaseHeight(a){this.baseHeight=a}setBaseSize(a,e){(this.baseSize.width!==a||this.baseSize.height!==e)&&(this.baseSize.set(a,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(a){this.preferredSize.width!==a&&(this.preferredSize.width=a,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(a){this.preferredWidth=a}get preferredHeight(){return this.preferredSize.height}set preferredHeight(a){this.preferredSize.height!==a&&(this.preferredSize.height=a,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(a){this.preferredHeight=a}setPreferredSize(a,e){(this.preferredSize.width!==a||this.preferredSize.height!==e)&&(this.preferredSize.set(a,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}copy(a){this.s=a.scale,this.baseSize.set(a.baseWidth,a.baseHeight),this.preferredSize.set(a.preferredWidth,a.preferredHeight),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height)}static get AUTO_SIZE(){return Za}},_t={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},b1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb+y.rgb,y.a),opacity);}",C1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,y.a*opacity);}",w1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4((x.rgb+y.rgb)*0.5,y.a),opacity);}",R1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.xy,xHSL.z));return mix(x,vec4(z,y.a),opacity);}",D1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb,b=y.rgb;vec3 z=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/b)),vec3(1.0),step(1.0,a));return mix(x,vec4(z,y.a),opacity);}",U1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb,b=y.rgb;vec3 z=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(x,vec4(z,y.a),opacity);}",L1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(min(x.rgb,y.rgb),y.a),opacity);}",B1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(abs(x.rgb-y.rgb),y.a),opacity);}",N1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb/max(y.rgb,1e-12),y.a),opacity);}",O1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4((x.rgb+y.rgb-2.0*x.rgb*y.rgb),y.a),opacity);}",P1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=min(x.rgb,1.0);vec3 b=min(y.rgb,1.0);vec3 z=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(x,vec4(z,y.a),opacity);}",I1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(step(1.0,x.rgb+y.rgb),y.a),opacity);}",z1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.x,xHSL.yz));return mix(x,vec4(z,y.a),opacity);}",F1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(1.0-y.rgb,y.a),opacity);}",H1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(y.rgb*(1.0-x.rgb),y.a),opacity);}",G1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(max(x.rgb,y.rgb),y.a),opacity);}",V1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(clamp(y.rgb+x.rgb-1.0,0.0,1.0),y.a),opacity);}",k1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(min(x.rgb+y.rgb,1.0),y.a),opacity);}",X1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(clamp(2.0*y.rgb+x.rgb-1.0,0.0,1.0),y.a),opacity);}",Y1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.xy,yHSL.z));return mix(x,vec4(z,y.a),opacity);}",W1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb*y.rgb,y.a),opacity);}",Q1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(1.0-abs(1.0-x.rgb-y.rgb),y.a),opacity);}",q1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,opacity);}",j1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(2.0*y.rgb*x.rgb,1.0-2.0*(1.0-y.rgb)*(1.0-x.rgb),step(0.5,x.rgb));return mix(x,vec4(z,y.a),opacity);}",K1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 y2=2.0*y.rgb;vec3 z=mix(mix(y2,x.rgb,step(0.5*x.rgb,y.rgb)),max(y2-1.0,vec3(0.0)),step(x.rgb,y2-1.0));return mix(x,vec4(z,y.a),opacity);}",Z1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(min(x.rgb*x.rgb/max(1.0-y.rgb,1e-12),1.0),y.rgb,step(1.0,y.rgb));return mix(x,vec4(z,y.a),opacity);}",J1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.x,yHSL.y,xHSL.z));return mix(x,vec4(z,y.a),opacity);}",$1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb+y.rgb-min(x.rgb*y.rgb,1.0),y.a),opacity);}",eC="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb;vec3 b=y.rgb;vec3 y2=2.0*b;vec3 w=step(0.5,b);vec3 c=a-(1.0-y2)*a*(1.0-a);vec3 d=mix(a+(y2-1.0)*(sqrt(a)-a),a+(y2-1.0)*a*((16.0*a-12.0)*a+3.0),w*(1.0-step(0.25,a)));vec3 z=mix(c,d,w);return mix(x,vec4(z,y.a),opacity);}",tC="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y;}",nC="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(max(x.rgb+y.rgb-1.0,0.0),y.a),opacity);}",iC="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(max(1.0-min((1.0-x.rgb)/(2.0*y.rgb),1.0),0.0),min(x.rgb/(2.0*(1.0-y.rgb)),1.0),step(0.5,y.rgb));return mix(x,vec4(z,y.a),opacity);}",aC=new Map([[_t.ADD,b1],[_t.ALPHA,C1],[_t.AVERAGE,w1],[_t.COLOR,R1],[_t.COLOR_BURN,D1],[_t.COLOR_DODGE,U1],[_t.DARKEN,L1],[_t.DIFFERENCE,B1],[_t.DIVIDE,N1],[_t.DST,null],[_t.EXCLUSION,O1],[_t.HARD_LIGHT,P1],[_t.HARD_MIX,I1],[_t.HUE,z1],[_t.INVERT,F1],[_t.INVERT_RGB,H1],[_t.LIGHTEN,G1],[_t.LINEAR_BURN,V1],[_t.LINEAR_DODGE,k1],[_t.LINEAR_LIGHT,X1],[_t.LUMINOSITY,Y1],[_t.MULTIPLY,W1],[_t.NEGATION,Q1],[_t.NORMAL,q1],[_t.OVERLAY,j1],[_t.PIN_LIGHT,K1],[_t.REFLECT,Z1],[_t.SATURATION,J1],[_t.SCREEN,$1],[_t.SOFT_LIGHT,eC],[_t.SRC,tC],[_t.SUBTRACT,nC],[_t.VIVID_LIGHT,iC]]),rC=class extends Aa{constructor(a,e=1){super(),this._blendFunction=a,this.opacity=new mt(e)}getOpacity(){return this.opacity.value}setOpacity(a){this.opacity.value=a}get blendFunction(){return this._blendFunction}set blendFunction(a){this._blendFunction=a,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(a){this.blendFunction=a}getShaderCode(){return aC.get(this.blendFunction)}},Cx=class extends Aa{constructor(a,e,{attributes:i=ga.NONE,blendFunction:s=_t.NORMAL,defines:l=new Map,uniforms:c=new Map,extensions:h=null,vertexShader:d=null}={}){super(),this.name=a,this.renderer=null,this.attributes=i,this.fragmentShader=e,this.vertexShader=d,this.defines=l,this.uniforms=c,this.extensions=h,this.blendMode=new rC(s),this.blendMode.addEventListener("change",m=>this.setChanged()),this._inputColorSpace=er,this._outputColorSpace=Fi}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(a){this._inputColorSpace=a,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(a){this._outputColorSpace=a,this.setChanged()}set mainScene(a){}set mainCamera(a){}getName(){return this.name}setRenderer(a){this.renderer=a}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(a){this.attributes=a,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(a){this.fragmentShader=a,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(a){this.vertexShader=a,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(a,e=Lr){}update(a,e,i){}setSize(a,e){}initialize(a,e,i){}dispose(){for(const a of Object.keys(this)){const e=this[a];(e instanceof zn||e instanceof Vs||e instanceof Mn||e instanceof yi)&&this[a].dispose()}}},jd={MEDIUM:2,LARGE:3},sC=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,oC="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",lC=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],cC=class extends mn{constructor(a=new Kt){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new mt(null),texelSize:new mt(new Kt),scale:new mt(1),kernel:new mt(0)},blending:In,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:sC,vertexShader:oC}),this.setTexelSize(a.x,a.y),this.kernelSize=jd.MEDIUM}set inputBuffer(a){this.uniforms.inputBuffer.value=a}setInputBuffer(a){this.inputBuffer=a}get kernelSequence(){return lC[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(a){this.uniforms.scale.value=a}getScale(){return this.uniforms.scale.value}setScale(a){this.uniforms.scale.value=a}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(a){this.uniforms.kernel.value=a}setKernel(a){this.kernel=a}setTexelSize(a,e){this.uniforms.texelSize.value.set(a,e,a*.5,e*.5)}setSize(a,e){const i=1/a,s=1/e;this.uniforms.texelSize.value.set(i,s,i*.5,s*.5)}},uC=class extends yi{constructor({kernelSize:a=jd.MEDIUM,resolutionScale:e=.5,width:i=Gi.AUTO_SIZE,height:s=Gi.AUTO_SIZE,resolutionX:l=i,resolutionY:c=s}={}){super("KawaseBlurPass"),this.renderTargetA=new zn(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";const h=this.resolution=new Gi(this,l,c,e);h.addEventListener("change",d=>this.setSize(h.baseWidth,h.baseHeight)),this._blurMaterial=new cC,this._blurMaterial.kernelSize=a,this.copyMaterial=new bx}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(a){this._blurMaterial=a}get dithering(){return this.copyMaterial.dithering}set dithering(a){this.copyMaterial.dithering=a}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(a){this.blurMaterial.kernelSize=a}get width(){return this.resolution.width}set width(a){this.resolution.preferredWidth=a}get height(){return this.resolution.height}set height(a){this.resolution.preferredHeight=a}get scale(){return this.blurMaterial.scale}set scale(a){this.blurMaterial.scale=a}getScale(){return this.blurMaterial.scale}setScale(a){this.blurMaterial.scale=a}getKernelSize(){return this.kernelSize}setKernelSize(a){this.kernelSize=a}getResolutionScale(){return this.resolution.scale}setResolutionScale(a){this.resolution.scale=a}render(a,e,i,s,l){const c=this.scene,h=this.camera,d=this.renderTargetA,m=this.renderTargetB,p=this.blurMaterial,v=p.kernelSequence;let g=e;this.fullscreenMaterial=p;for(let _=0,S=v.length;_<S;++_){const M=(_&1)===0?d:m;p.kernel=v[_],p.inputBuffer=g.texture,a.setRenderTarget(M),a.render(c,h),g=M}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=g.texture,a.setRenderTarget(this.renderToScreen?null:i),a.render(c,h)}setSize(a,e){const i=this.resolution;i.setBaseSize(a,e);const s=i.width,l=i.height;this.renderTargetA.setSize(s,l),this.renderTargetB.setSize(s,l),this.blurMaterial.setSize(a,e)}initialize(a,e,i){i!==void 0&&(this.renderTargetA.texture.type=i,this.renderTargetB.texture.type=i,i!==Un?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):a!==null&&a.outputColorSpace===kt&&(this.renderTargetA.texture.colorSpace=kt,this.renderTargetB.texture.colorSpace=kt))}static get AUTO_SIZE(){return Gi.AUTO_SIZE}},fC=`#include <common>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);float mask=1.0;
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);mask=low*high;
#elif defined(THRESHOLD)
mask=smoothstep(threshold,threshold+smoothing,l);
#endif
#ifdef COLOR
gl_FragColor=texel*mask;
#else
gl_FragColor=vec4(l*mask);
#endif
}`,hC=class extends mn{constructor(a=!1,e=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:Gs.replace(/\D+/g,"")},uniforms:{inputBuffer:new mt(null),threshold:new mt(0),smoothing:new mt(1),range:new mt(null)},blending:In,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:fC,vertexShader:Tx}),this.colorOutput=a,this.luminanceRange=e}set inputBuffer(a){this.uniforms.inputBuffer.value=a}setInputBuffer(a){this.uniforms.inputBuffer.value=a}get threshold(){return this.uniforms.threshold.value}set threshold(a){this.smoothing>0||a>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=a}getThreshold(){return this.threshold}setThreshold(a){this.threshold=a}get smoothing(){return this.uniforms.smoothing.value}set smoothing(a){this.threshold>0||a>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=a}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(a){this.smoothing=a}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(a){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(a){a?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(a){return this.colorOutput}setColorOutputEnabled(a){this.colorOutput=a}get useRange(){return this.luminanceRange!==null}set useRange(a){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(a){a!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=a,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(a){this.luminanceRange=a}},dC=class extends yi{constructor({renderTarget:a,luminanceRange:e,colorOutput:i,resolutionScale:s=1,width:l=Gi.AUTO_SIZE,height:c=Gi.AUTO_SIZE,resolutionX:h=l,resolutionY:d=c}={}){super("LuminancePass"),this.fullscreenMaterial=new hC(i,e),this.needsSwap=!1,this.renderTarget=a,this.renderTarget===void 0&&(this.renderTarget=new zn(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");const m=this.resolution=new Gi(this,h,d,s);m.addEventListener("change",p=>this.setSize(m.baseWidth,m.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(a,e,i,s,l){const c=this.fullscreenMaterial;c.inputBuffer=e.texture,a.setRenderTarget(this.renderToScreen?null:this.renderTarget),a.render(this.scene,this.camera)}setSize(a,e){const i=this.resolution;i.setBaseSize(a,e),this.renderTarget.setSize(i.width,i.height)}initialize(a,e,i){i!==void 0&&i!==Un&&(this.renderTarget.texture.type=i,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},pC=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.0555555
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,mC="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}",gC=class extends mn{constructor(){super({name:"DownsamplingMaterial",uniforms:{inputBuffer:new mt(null),texelSize:new mt(new Pe)},blending:In,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:pC,vertexShader:mC})}set inputBuffer(a){this.uniforms.inputBuffer.value=a}setSize(a,e){this.uniforms.texelSize.value.set(1/a,1/e)}},vC=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,xC="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}",AC=class extends mn{constructor(){super({name:"UpsamplingMaterial",uniforms:{inputBuffer:new mt(null),supportBuffer:new mt(null),texelSize:new mt(new Pe),radius:new mt(.85)},blending:In,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:vC,vertexShader:xC})}set inputBuffer(a){this.uniforms.inputBuffer.value=a}set supportBuffer(a){this.uniforms.supportBuffer.value=a}get radius(){return this.uniforms.radius.value}set radius(a){this.uniforms.radius.value=a}setSize(a,e){this.uniforms.texelSize.value.set(1/a,1/e)}},_C=class extends yi{constructor(){super("MipmapBlurPass"),this.needsSwap=!1,this.renderTarget=new zn(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Upsampling.Mipmap0",this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new gC,this.upsamplingMaterial=new AC,this.resolution=new Pe}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(a){if(this.levels!==a){const e=this.renderTarget;this.dispose(),this.downsamplingMipmaps=[],this.upsamplingMipmaps=[];for(let i=0;i<a;++i){const s=e.clone();s.texture.name="Downsampling.Mipmap"+i,this.downsamplingMipmaps.push(s)}this.upsamplingMipmaps.push(e);for(let i=1,s=a-1;i<s;++i){const l=e.clone();l.texture.name="Upsampling.Mipmap"+i,this.upsamplingMipmaps.push(l)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(a){this.upsamplingMaterial.radius=a}render(a,e,i,s,l){const{scene:c,camera:h}=this,{downsamplingMaterial:d,upsamplingMaterial:m}=this,{downsamplingMipmaps:p,upsamplingMipmaps:v}=this;let g=e;this.fullscreenMaterial=d;for(let _=0,S=p.length;_<S;++_){const M=p[_];d.setSize(g.width,g.height),d.inputBuffer=g.texture,a.setRenderTarget(M),a.render(c,h),g=M}this.fullscreenMaterial=m;for(let _=v.length-1;_>=0;--_){const S=v[_];m.setSize(g.width,g.height),m.inputBuffer=g.texture,m.supportBuffer=p[_].texture,a.setRenderTarget(S),a.render(c,h),g=S}}setSize(a,e){const i=this.resolution;i.set(a,e);let s=i.width,l=i.height;for(let c=0,h=this.downsamplingMipmaps.length;c<h;++c)s=Math.round(s*.5),l=Math.round(l*.5),this.downsamplingMipmaps[c].setSize(s,l),c<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[c].setSize(s,l)}initialize(a,e,i){if(i!==void 0){const s=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(const l of s)l.texture.type=i;if(i!==Un)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1";else if(a!==null&&a.outputColorSpace===kt)for(const l of s)l.texture.colorSpace=kt}}dispose(){super.dispose();for(const a of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))a.dispose()}},SC=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 texel=texture2D(map,uv);outputColor=vec4(texel.rgb*intensity,max(inputColor.a,texel.a));}`,yC=class extends Cx{constructor({blendFunction:a=_t.SCREEN,luminanceThreshold:e=1,luminanceSmoothing:i=.03,mipmapBlur:s=!0,intensity:l=1,radius:c=.85,levels:h=8,kernelSize:d=jd.LARGE,resolutionScale:m=.5,width:p=Gi.AUTO_SIZE,height:v=Gi.AUTO_SIZE,resolutionX:g=p,resolutionY:_=v}={}){super("BloomEffect",SC,{blendFunction:a,uniforms:new Map([["map",new mt(null)],["intensity",new mt(l)]])}),this.renderTarget=new zn(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Bloom.Target",this.blurPass=new uC({kernelSize:d}),this.luminancePass=new dC({colorOutput:!0}),this.luminanceMaterial.threshold=e,this.luminanceMaterial.smoothing=i,this.mipmapBlurPass=new _C,this.mipmapBlurPass.enabled=s,this.mipmapBlurPass.radius=c,this.mipmapBlurPass.levels=h,this.uniforms.get("map").value=s?this.mipmapBlurPass.texture:this.renderTarget.texture;const S=this.resolution=new Gi(this,g,_,m);S.addEventListener("change",M=>this.setSize(S.baseWidth,S.baseHeight))}get texture(){return this.mipmapBlurPass.enabled?this.mipmapBlurPass.texture:this.renderTarget.texture}getTexture(){return this.texture}getResolution(){return this.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(a){this.resolution.preferredWidth=a}get height(){return this.resolution.height}set height(a){this.resolution.preferredHeight=a}get dithering(){return this.blurPass.dithering}set dithering(a){this.blurPass.dithering=a}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(a){this.blurPass.kernelSize=a}get distinction(){return console.warn(this.name,"distinction was removed"),1}set distinction(a){console.warn(this.name,"distinction was removed")}get intensity(){return this.uniforms.get("intensity").value}set intensity(a){this.uniforms.get("intensity").value=a}getIntensity(){return this.intensity}setIntensity(a){this.intensity=a}getResolutionScale(){return this.resolution.scale}setResolutionScale(a){this.resolution.scale=a}update(a,e,i){const s=this.renderTarget,l=this.luminancePass;l.enabled?(l.render(a,e),this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(a,l.renderTarget):this.blurPass.render(a,l.renderTarget,s)):this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(a,e):this.blurPass.render(a,e,s)}setSize(a,e){const i=this.resolution;i.setBaseSize(a,e),this.renderTarget.setSize(i.width,i.height),this.blurPass.resolution.copy(i),this.luminancePass.setSize(a,e),this.mipmapBlurPass.setSize(a,e)}initialize(a,e,i){this.blurPass.initialize(a,e,i),this.luminancePass.initialize(a,e,i),this.mipmapBlurPass.initialize(a,e,i),i!==void 0&&(this.renderTarget.texture.type=i,a!==null&&a.outputColorSpace===kt&&(this.renderTarget.texture.colorSpace=kt))}},F0=class extends yi{constructor(a,e="inputBuffer"){super("ShaderPass"),this.fullscreenMaterial=a,this.input=e}setInput(a){this.input=a}render(a,e,i,s,l){const c=this.fullscreenMaterial.uniforms;e!==null&&c!==void 0&&c[this.input]!==void 0&&(c[this.input].value=e.texture),a.setRenderTarget(this.renderToScreen?null:i),a.render(this.scene,this.camera)}initialize(a,e,i){i!==void 0&&i!==Un&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},EC=class extends yi{constructor(a,e,i=null){super("RenderPass",a,e),this.needsSwap=!1,this.clearPass=new qd,this.overrideMaterialManager=i===null?null:new z0(i),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(a){this.scene=a}set mainCamera(a){this.camera=a}get renderToScreen(){return super.renderToScreen}set renderToScreen(a){super.renderToScreen=a,this.clearPass.renderToScreen=a}get overrideMaterial(){const a=this.overrideMaterialManager;return a!==null?a.material:null}set overrideMaterial(a){const e=this.overrideMaterialManager;a!==null?e!==null?e.setMaterial(a):this.overrideMaterialManager=new z0(a):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(a){this.overrideMaterial=a}get clear(){return this.clearPass.enabled}set clear(a){this.clearPass.enabled=a}getSelection(){return this.selection}setSelection(a){this.selection=a}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(a){this.ignoreBackground=a}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(a){this.skipShadowMapUpdate=a}getClearPass(){return this.clearPass}render(a,e,i,s,l){const c=this.scene,h=this.camera,d=this.selection,m=h.layers.mask,p=c.background,v=a.shadowMap.autoUpdate,g=this.renderToScreen?null:e;d!==null&&h.layers.set(d.getLayer()),this.skipShadowMapUpdate&&(a.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(c.background=null),this.clearPass.enabled&&this.clearPass.render(a,e),a.setRenderTarget(g),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(a,c,h):a.render(c,h),h.layers.mask=m,c.background=p,a.shadowMap.autoUpdate=v}},wx={COLOR:2},MC={DISABLED:0},Ds={LOW:0,MEDIUM:1,HIGH:2,ULTRA:3},TC=`varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;
#if EDGE_DETECTION_MODE != 0
varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;
#endif
#if EDGE_DETECTION_MODE == 1
#include <common>
#endif
#if EDGE_DETECTION_MODE == 0 || PREDICATION_MODE == 1
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}vec3 gatherNeighbors(){float p=readDepth(vUv);float pLeft=readDepth(vUv0);float pTop=readDepth(vUv1);return vec3(p,pLeft,pTop);}
#elif PREDICATION_MODE == 2
uniform sampler2D predicationBuffer;vec3 gatherNeighbors(){float p=texture2D(predicationBuffer,vUv).r;float pLeft=texture2D(predicationBuffer,vUv0).r;float pTop=texture2D(predicationBuffer,vUv1).r;return vec3(p,pLeft,pTop);}
#endif
#if PREDICATION_MODE != 0
vec2 calculatePredicatedThreshold(){vec3 neighbours=gatherNeighbors();vec2 delta=abs(neighbours.xx-neighbours.yz);vec2 edges=step(PREDICATION_THRESHOLD,delta);return PREDICATION_SCALE*EDGE_THRESHOLD*(1.0-PREDICATION_STRENGTH*edges);}
#endif
#if EDGE_DETECTION_MODE != 0
uniform sampler2D inputBuffer;
#endif
void main(){
#if EDGE_DETECTION_MODE == 0
const vec2 threshold=vec2(DEPTH_THRESHOLD);
#elif PREDICATION_MODE != 0
vec2 threshold=calculatePredicatedThreshold();
#else
const vec2 threshold=vec2(EDGE_THRESHOLD);
#endif
#if EDGE_DETECTION_MODE == 0
vec3 neighbors=gatherNeighbors();vec2 delta=abs(neighbors.xx-vec2(neighbors.y,neighbors.z));vec2 edges=step(threshold,delta);if(dot(edges,vec2(1.0))==0.0){discard;}gl_FragColor=vec4(edges,0.0,1.0);
#elif EDGE_DETECTION_MODE == 1
float l=luminance(texture2D(inputBuffer,vUv).rgb);float lLeft=luminance(texture2D(inputBuffer,vUv0).rgb);float lTop=luminance(texture2D(inputBuffer,vUv1).rgb);vec4 delta;delta.xy=abs(l-vec2(lLeft,lTop));vec2 edges=step(threshold,delta.xy);if(dot(edges,vec2(1.0))==0.0){discard;}float lRight=luminance(texture2D(inputBuffer,vUv2).rgb);float lBottom=luminance(texture2D(inputBuffer,vUv3).rgb);delta.zw=abs(l-vec2(lRight,lBottom));vec2 maxDelta=max(delta.xy,delta.zw);float lLeftLeft=luminance(texture2D(inputBuffer,vUv4).rgb);float lTopTop=luminance(texture2D(inputBuffer,vUv5).rgb);delta.zw=abs(vec2(lLeft,lTop)-vec2(lLeftLeft,lTopTop));maxDelta=max(maxDelta.xy,delta.zw);float finalDelta=max(maxDelta.x,maxDelta.y);edges.xy*=step(finalDelta,LOCAL_CONTRAST_ADAPTATION_FACTOR*delta.xy);gl_FragColor=vec4(edges,0.0,1.0);
#elif EDGE_DETECTION_MODE == 2
vec4 delta;vec3 c=texture2D(inputBuffer,vUv).rgb;vec3 cLeft=texture2D(inputBuffer,vUv0).rgb;vec3 t=abs(c-cLeft);delta.x=max(max(t.r,t.g),t.b);vec3 cTop=texture2D(inputBuffer,vUv1).rgb;t=abs(c-cTop);delta.y=max(max(t.r,t.g),t.b);vec2 edges=step(threshold,delta.xy);if(dot(edges,vec2(1.0))==0.0){discard;}vec3 cRight=texture2D(inputBuffer,vUv2).rgb;t=abs(c-cRight);delta.z=max(max(t.r,t.g),t.b);vec3 cBottom=texture2D(inputBuffer,vUv3).rgb;t=abs(c-cBottom);delta.w=max(max(t.r,t.g),t.b);vec2 maxDelta=max(delta.xy,delta.zw);vec3 cLeftLeft=texture2D(inputBuffer,vUv4).rgb;t=abs(c-cLeftLeft);delta.z=max(max(t.r,t.g),t.b);vec3 cTopTop=texture2D(inputBuffer,vUv5).rgb;t=abs(c-cTopTop);delta.w=max(max(t.r,t.g),t.b);maxDelta=max(maxDelta.xy,delta.zw);float finalDelta=max(maxDelta.x,maxDelta.y);edges*=step(finalDelta,LOCAL_CONTRAST_ADAPTATION_FACTOR*delta.xy);gl_FragColor=vec4(edges,0.0,1.0);
#endif
}`,bC=`uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;
#if EDGE_DETECTION_MODE != 0
varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;
#endif
void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,0.0);vUv1=vUv+texelSize*vec2(0.0,-1.0);
#if EDGE_DETECTION_MODE != 0
vUv2=vUv+texelSize*vec2(1.0,0.0);vUv3=vUv+texelSize*vec2(0.0,1.0);vUv4=vUv+texelSize*vec2(-2.0,0.0);vUv5=vUv+texelSize*vec2(0.0,-2.0);
#endif
gl_Position=vec4(position.xy,1.0,1.0);}`,CC=class extends mn{constructor(a=new Pe,e=wx.COLOR){super({name:"EdgeDetectionMaterial",defines:{THREE_REVISION:Gs.replace(/\D+/g,""),LOCAL_CONTRAST_ADAPTATION_FACTOR:"2.0",EDGE_THRESHOLD:"0.1",DEPTH_THRESHOLD:"0.01",PREDICATION_MODE:"0",PREDICATION_THRESHOLD:"0.01",PREDICATION_SCALE:"2.0",PREDICATION_STRENGTH:"1.0",DEPTH_PACKING:"0"},uniforms:{inputBuffer:new mt(null),depthBuffer:new mt(null),predicationBuffer:new mt(null),texelSize:new mt(a)},blending:In,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:TC,vertexShader:bC}),this.edgeDetectionMode=e}set depthBuffer(a){this.uniforms.depthBuffer.value=a}set depthPacking(a){this.defines.DEPTH_PACKING=a.toFixed(0),this.needsUpdate=!0}setDepthBuffer(a,e=Lr){this.depthBuffer=a,this.depthPacking=e}get edgeDetectionMode(){return Number(this.defines.EDGE_DETECTION_MODE)}set edgeDetectionMode(a){this.defines.EDGE_DETECTION_MODE=a.toFixed(0),this.needsUpdate=!0}getEdgeDetectionMode(){return this.edgeDetectionMode}setEdgeDetectionMode(a){this.edgeDetectionMode=a}get localContrastAdaptationFactor(){return Number(this.defines.LOCAL_CONTRAST_ADAPTATION_FACTOR)}set localContrastAdaptationFactor(a){this.defines.LOCAL_CONTRAST_ADAPTATION_FACTOR=a.toFixed("6"),this.needsUpdate=!0}getLocalContrastAdaptationFactor(){return this.localContrastAdaptationFactor}setLocalContrastAdaptationFactor(a){this.localContrastAdaptationFactor=a}get edgeDetectionThreshold(){return Number(this.defines.EDGE_THRESHOLD)}set edgeDetectionThreshold(a){this.defines.EDGE_THRESHOLD=a.toFixed("6"),this.defines.DEPTH_THRESHOLD=(a*.1).toFixed("6"),this.needsUpdate=!0}getEdgeDetectionThreshold(){return this.edgeDetectionThreshold}setEdgeDetectionThreshold(a){this.edgeDetectionThreshold=a}get predicationMode(){return Number(this.defines.PREDICATION_MODE)}set predicationMode(a){this.defines.PREDICATION_MODE=a.toFixed(0),this.needsUpdate=!0}getPredicationMode(){return this.predicationMode}setPredicationMode(a){this.predicationMode=a}set predicationBuffer(a){this.uniforms.predicationBuffer.value=a}setPredicationBuffer(a){this.uniforms.predicationBuffer.value=a}get predicationThreshold(){return Number(this.defines.PREDICATION_THRESHOLD)}set predicationThreshold(a){this.defines.PREDICATION_THRESHOLD=a.toFixed("6"),this.needsUpdate=!0}getPredicationThreshold(){return this.predicationThreshold}setPredicationThreshold(a){this.predicationThreshold=a}get predicationScale(){return Number(this.defines.PREDICATION_SCALE)}set predicationScale(a){this.defines.PREDICATION_SCALE=a.toFixed("6"),this.needsUpdate=!0}getPredicationScale(){return this.predicationScale}setPredicationScale(a){this.predicationScale=a}get predicationStrength(){return Number(this.defines.PREDICATION_STRENGTH)}set predicationStrength(a){this.defines.PREDICATION_STRENGTH=a.toFixed("6"),this.needsUpdate=!0}getPredicationStrength(){return this.predicationStrength}setPredicationStrength(a){this.predicationStrength=a}setSize(a,e){this.uniforms.texelSize.value.set(1/a,1/e)}},wC=`#define sampleLevelZeroOffset(t, coord, offset) texture2D(t, coord + offset * texelSize)
#if __VERSION__ < 300
#define round(v) floor(v + 0.5)
#endif
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform lowp sampler2D areaTexture;uniform lowp sampler2D searchTexture;uniform vec2 texelSize;uniform vec2 resolution;varying vec2 vUv;varying vec4 vOffset[3];varying vec2 vPixCoord;void movec(const in bvec2 c,inout vec2 variable,const in vec2 value){if(c.x){variable.x=value.x;}if(c.y){variable.y=value.y;}}void movec(const in bvec4 c,inout vec4 variable,const in vec4 value){movec(c.xy,variable.xy,value.xy);movec(c.zw,variable.zw,value.zw);}vec2 decodeDiagBilinearAccess(in vec2 e){e.r=e.r*abs(5.0*e.r-5.0*0.75);return round(e);}vec4 decodeDiagBilinearAccess(in vec4 e){e.rb=e.rb*abs(5.0*e.rb-5.0*0.75);return round(e);}vec2 searchDiag1(const in vec2 texCoord,const in vec2 dir,out vec2 e){vec4 coord=vec4(texCoord,-1.0,1.0);vec3 t=vec3(texelSize,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(coord.z<float(MAX_SEARCH_STEPS_DIAG_INT-1)&&coord.w>0.9)){break;}coord.xyz=t*vec3(dir,1.0)+coord.xyz;e=texture2D(inputBuffer,coord.xy).rg;coord.w=dot(e,vec2(0.5));}return coord.zw;}vec2 searchDiag2(const in vec2 texCoord,const in vec2 dir,out vec2 e){vec4 coord=vec4(texCoord,-1.0,1.0);coord.x+=0.25*texelSize.x;vec3 t=vec3(texelSize,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(coord.z<float(MAX_SEARCH_STEPS_DIAG_INT-1)&&coord.w>0.9)){break;}coord.xyz=t*vec3(dir,1.0)+coord.xyz;e=texture2D(inputBuffer,coord.xy).rg;e=decodeDiagBilinearAccess(e);coord.w=dot(e,vec2(0.5));}return coord.zw;}vec2 areaDiag(const in vec2 dist,const in vec2 e,const in float offset){vec2 texCoord=vec2(AREATEX_MAX_DISTANCE_DIAG,AREATEX_MAX_DISTANCE_DIAG)*e+dist;texCoord=AREATEX_PIXEL_SIZE*texCoord+0.5*AREATEX_PIXEL_SIZE;texCoord.x+=0.5;texCoord.y+=AREATEX_SUBTEX_SIZE*offset;return texture2D(areaTexture,texCoord).rg;}vec2 calculateDiagWeights(const in vec2 texCoord,const in vec2 e,const in vec4 subsampleIndices){vec2 weights=vec2(0.0);vec4 d;vec2 end;if(e.r>0.0){d.xz=searchDiag1(texCoord,vec2(-1.0,1.0),end);d.x+=float(end.y>0.9);}else{d.xz=vec2(0.0);}d.yw=searchDiag1(texCoord,vec2(1.0,-1.0),end);if(d.x+d.y>2.0){vec4 coords=vec4(-d.x+0.25,d.x,d.y,-d.y-0.25)*texelSize.xyxy+texCoord.xyxy;vec4 c;c.xy=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(-1,0)).rg;c.zw=sampleLevelZeroOffset(inputBuffer,coords.zw,vec2(1,0)).rg;c.yxwz=decodeDiagBilinearAccess(c.xyzw);vec2 cc=vec2(2.0)*c.xz+c.yw;movec(bvec2(step(0.9,d.zw)),cc,vec2(0.0));weights+=areaDiag(d.xy,cc,subsampleIndices.z);}d.xz=searchDiag2(texCoord,vec2(-1.0,-1.0),end);if(sampleLevelZeroOffset(inputBuffer,texCoord,vec2(1,0)).r>0.0){d.yw=searchDiag2(texCoord,vec2(1.0),end);d.y+=float(end.y>0.9);}else{d.yw=vec2(0.0);}if(d.x+d.y>2.0){vec4 coords=vec4(-d.x,-d.x,d.y,d.y)*texelSize.xyxy+texCoord.xyxy;vec4 c;c.x=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(-1,0)).g;c.y=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(0,-1)).r;c.zw=sampleLevelZeroOffset(inputBuffer,coords.zw,vec2(1,0)).gr;vec2 cc=vec2(2.0)*c.xz+c.yw;movec(bvec2(step(0.9,d.zw)),cc,vec2(0.0));weights+=areaDiag(d.xy,cc,subsampleIndices.w).gr;}return weights;}float searchLength(const in vec2 e,const in float offset){vec2 scale=SEARCHTEX_SIZE*vec2(0.5,-1.0);vec2 bias=SEARCHTEX_SIZE*vec2(offset,1.0);scale+=vec2(-1.0,1.0);bias+=vec2(0.5,-0.5);scale*=1.0/SEARCHTEX_PACKED_SIZE;bias*=1.0/SEARCHTEX_PACKED_SIZE;return texture2D(searchTexture,scale*e+bias).r;}float searchXLeft(in vec2 texCoord,const in float end){vec2 e=vec2(0.0,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.x>end&&e.g>0.8281&&e.r==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(-2.0,0.0)*texelSize+texCoord;}float offset=-(255.0/127.0)*searchLength(e,0.0)+3.25;return texelSize.x*offset+texCoord.x;}float searchXRight(vec2 texCoord,const in float end){vec2 e=vec2(0.0,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.x<end&&e.g>0.8281&&e.r==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(2.0,0.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e,0.5)+3.25;return-texelSize.x*offset+texCoord.x;}float searchYUp(vec2 texCoord,const in float end){vec2 e=vec2(1.0,0.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.y>end&&e.r>0.8281&&e.g==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=-vec2(0.0,2.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e.gr,0.0)+3.25;return texelSize.y*offset+texCoord.y;}float searchYDown(vec2 texCoord,const in float end){vec2 e=vec2(1.0,0.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;i++){if(!(texCoord.y<end&&e.r>0.8281&&e.g==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(0.0,2.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e.gr,0.5)+3.25;return-texelSize.y*offset+texCoord.y;}vec2 area(const in vec2 dist,const in float e1,const in float e2,const in float offset){vec2 texCoord=vec2(AREATEX_MAX_DISTANCE)*round(4.0*vec2(e1,e2))+dist;texCoord=AREATEX_PIXEL_SIZE*texCoord+0.5*AREATEX_PIXEL_SIZE;texCoord.y=AREATEX_SUBTEX_SIZE*offset+texCoord.y;return texture2D(areaTexture,texCoord).rg;}void detectHorizontalCornerPattern(inout vec2 weights,const in vec4 texCoord,const in vec2 d){
#if !defined(DISABLE_CORNER_DETECTION)
vec2 leftRight=step(d.xy,d.yx);vec2 rounding=(1.0-CORNER_ROUNDING_NORM)*leftRight;rounding/=leftRight.x+leftRight.y;vec2 factor=vec2(1.0);factor.x-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(0,1)).r;factor.x-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,1)).r;factor.y-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(0,-2)).r;factor.y-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,-2)).r;weights*=clamp(factor,0.0,1.0);
#endif
}void detectVerticalCornerPattern(inout vec2 weights,const in vec4 texCoord,const in vec2 d){
#if !defined(DISABLE_CORNER_DETECTION)
vec2 leftRight=step(d.xy,d.yx);vec2 rounding=(1.0-CORNER_ROUNDING_NORM)*leftRight;rounding/=leftRight.x+leftRight.y;vec2 factor=vec2(1.0);factor.x-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(1,0)).g;factor.x-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,1)).g;factor.y-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(-2,0)).g;factor.y-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(-2,1)).g;weights*=clamp(factor,0.0,1.0);
#endif
}void main(){vec4 weights=vec4(0.0);vec4 subsampleIndices=vec4(0.0);vec2 e=texture2D(inputBuffer,vUv).rg;if(e.g>0.0){
#if !defined(DISABLE_DIAG_DETECTION)
weights.rg=calculateDiagWeights(vUv,e,subsampleIndices);if(weights.r==-weights.g){
#endif
vec2 d;vec3 coords;coords.x=searchXLeft(vOffset[0].xy,vOffset[2].x);coords.y=vOffset[1].y;d.x=coords.x;float e1=texture2D(inputBuffer,coords.xy).r;coords.z=searchXRight(vOffset[0].zw,vOffset[2].y);d.y=coords.z;d=round(resolution.xx*d+-vPixCoord.xx);vec2 sqrtD=sqrt(abs(d));float e2=sampleLevelZeroOffset(inputBuffer,coords.zy,vec2(1,0)).r;weights.rg=area(sqrtD,e1,e2,subsampleIndices.y);coords.y=vUv.y;detectHorizontalCornerPattern(weights.rg,coords.xyzy,d);
#if !defined(DISABLE_DIAG_DETECTION)
}else{e.r=0.0;}
#endif
}if(e.r>0.0){vec2 d;vec3 coords;coords.y=searchYUp(vOffset[1].xy,vOffset[2].z);coords.x=vOffset[0].x;d.x=coords.y;float e1=texture2D(inputBuffer,coords.xy).g;coords.z=searchYDown(vOffset[1].zw,vOffset[2].w);d.y=coords.z;d=round(resolution.yy*d-vPixCoord.yy);vec2 sqrtD=sqrt(abs(d));float e2=sampleLevelZeroOffset(inputBuffer,coords.xz,vec2(0,1)).g;weights.ba=area(sqrtD,e1,e2,subsampleIndices.x);coords.x=vUv.x;detectVerticalCornerPattern(weights.ba,coords.xyxz,d);}gl_FragColor=weights;}`,RC="uniform vec2 texelSize;uniform vec2 resolution;varying vec2 vUv;varying vec4 vOffset[3];varying vec2 vPixCoord;void main(){vUv=position.xy*0.5+0.5;vPixCoord=vUv*resolution;vOffset[0]=vUv.xyxy+texelSize.xyxy*vec4(-0.25,-0.125,1.25,-0.125);vOffset[1]=vUv.xyxy+texelSize.xyxy*vec4(-0.125,-0.25,-0.125,1.25);vOffset[2]=vec4(vOffset[0].xz,vOffset[1].yw)+vec4(-2.0,2.0,-2.0,2.0)*texelSize.xxyy*MAX_SEARCH_STEPS_FLOAT;gl_Position=vec4(position.xy,1.0,1.0);}",DC=class extends mn{constructor(a=new Pe,e=new Pe){super({name:"SMAAWeightsMaterial",defines:{MAX_SEARCH_STEPS_INT:"16",MAX_SEARCH_STEPS_FLOAT:"16.0",MAX_SEARCH_STEPS_DIAG_INT:"8",MAX_SEARCH_STEPS_DIAG_FLOAT:"8.0",CORNER_ROUNDING:"25",CORNER_ROUNDING_NORM:"0.25",AREATEX_MAX_DISTANCE:"16.0",AREATEX_MAX_DISTANCE_DIAG:"20.0",AREATEX_PIXEL_SIZE:"(1.0 / vec2(160.0, 560.0))",AREATEX_SUBTEX_SIZE:"(1.0 / 7.0)",SEARCHTEX_SIZE:"vec2(66.0, 33.0)",SEARCHTEX_PACKED_SIZE:"vec2(64.0, 16.0)"},uniforms:{inputBuffer:new mt(null),searchTexture:new mt(null),areaTexture:new mt(null),resolution:new mt(e),texelSize:new mt(a)},blending:In,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:wC,vertexShader:RC})}set inputBuffer(a){this.uniforms.inputBuffer.value=a}setInputBuffer(a){this.uniforms.inputBuffer.value=a}get searchTexture(){return this.uniforms.searchTexture.value}set searchTexture(a){this.uniforms.searchTexture.value=a}get areaTexture(){return this.uniforms.areaTexture.value}set areaTexture(a){this.uniforms.areaTexture.value=a}setLookupTextures(a,e){this.searchTexture=a,this.areaTexture=e}get orthogonalSearchSteps(){return Number(this.defines.MAX_SEARCH_STEPS_INT)}set orthogonalSearchSteps(a){const e=Math.min(Math.max(a,0),112);this.defines.MAX_SEARCH_STEPS_INT=e.toFixed("0"),this.defines.MAX_SEARCH_STEPS_FLOAT=e.toFixed("1"),this.needsUpdate=!0}setOrthogonalSearchSteps(a){this.orthogonalSearchSteps=a}get diagonalSearchSteps(){return Number(this.defines.MAX_SEARCH_STEPS_DIAG_INT)}set diagonalSearchSteps(a){const e=Math.min(Math.max(a,0),20);this.defines.MAX_SEARCH_STEPS_DIAG_INT=e.toFixed("0"),this.defines.MAX_SEARCH_STEPS_DIAG_FLOAT=e.toFixed("1"),this.needsUpdate=!0}setDiagonalSearchSteps(a){this.diagonalSearchSteps=a}get diagonalDetection(){return this.defines.DISABLE_DIAG_DETECTION===void 0}set diagonalDetection(a){a?delete this.defines.DISABLE_DIAG_DETECTION:this.defines.DISABLE_DIAG_DETECTION="1",this.needsUpdate=!0}isDiagonalDetectionEnabled(){return this.diagonalDetection}setDiagonalDetectionEnabled(a){this.diagonalDetection=a}get cornerRounding(){return Number(this.defines.CORNER_ROUNDING)}set cornerRounding(a){const e=Math.min(Math.max(a,0),100);this.defines.CORNER_ROUNDING=e.toFixed("4"),this.defines.CORNER_ROUNDING_NORM=(e/100).toFixed("4"),this.needsUpdate=!0}setCornerRounding(a){this.cornerRounding=a}get cornerDetection(){return this.defines.DISABLE_CORNER_DETECTION===void 0}set cornerDetection(a){a?delete this.defines.DISABLE_CORNER_DETECTION:this.defines.DISABLE_CORNER_DETECTION="1",this.needsUpdate=!0}isCornerRoundingEnabled(){return this.cornerDetection}setCornerRoundingEnabled(a){this.cornerDetection=a}setSize(a,e){const i=this.uniforms;i.texelSize.value.set(1/a,1/e),i.resolution.value.set(a,e)}},H0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAQCAYAAACm53kpAAAAeElEQVRYR+2XSwqAMAxEJ168ePEqwRSKhIIiuHjJqiU0gWE+1CQdApcVAMUAuARaMGCX1MIL/Ow13++9lW2s3mW9MWvsnWc/2fvGygwPAN4E8QzAA4CXAB6AHjG4JTHYI1ey3pcx6FHnEfhLDOIBKAmUBK6/ANUDTlROXAHd9EC1AAAAAElFTkSuQmCC",G0="data:image/png;base64,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",UC="uniform sampler2D weightMap;varying vec2 vOffset0;varying vec2 vOffset1;void movec(const in bvec2 c,inout vec2 variable,const in vec2 value){if(c.x){variable.x=value.x;}if(c.y){variable.y=value.y;}}void movec(const in bvec4 c,inout vec4 variable,const in vec4 value){movec(c.xy,variable.xy,value.xy);movec(c.zw,variable.zw,value.zw);}void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 a;a.x=texture2D(weightMap,vOffset0).a;a.y=texture2D(weightMap,vOffset1).g;a.wz=texture2D(weightMap,uv).rb;vec4 color=inputColor;if(dot(a,vec4(1.0))>=1e-5){bool h=max(a.x,a.z)>max(a.y,a.w);vec4 blendingOffset=vec4(0.0,a.y,0.0,a.w);vec2 blendingWeight=a.yw;movec(bvec4(h),blendingOffset,vec4(a.x,0.0,a.z,0.0));movec(bvec2(h),blendingWeight,a.xz);blendingWeight/=dot(blendingWeight,vec2(1.0));vec4 blendingCoord=blendingOffset*vec4(texelSize,-texelSize)+uv.xyxy;color=blendingWeight.x*texture2D(inputBuffer,blendingCoord.xy);color+=blendingWeight.y*texture2D(inputBuffer,blendingCoord.zw);}outputColor=color;}",LC="varying vec2 vOffset0;varying vec2 vOffset1;void mainSupport(const in vec2 uv){vOffset0=uv+texelSize*vec2(1.0,0.0);vOffset1=uv+texelSize*vec2(0.0,1.0);}",ko=class extends Cx{constructor({blendFunction:a=_t.SRC,preset:e=Ds.MEDIUM,edgeDetectionMode:i=wx.COLOR,predicationMode:s=MC.DISABLED}={}){super("SMAAEffect",UC,{vertexShader:LC,blendFunction:a,attributes:ga.CONVOLUTION|ga.DEPTH,uniforms:new Map([["weightMap",new mt(null)]])});let l,c;arguments.length>1&&(l=arguments[0],c=arguments[1],arguments.length>2&&(e=arguments[2]),arguments.length>3&&(i=arguments[3])),this.renderTargetEdges=new zn(1,1,{depthBuffer:!1}),this.renderTargetEdges.texture.name="SMAA.Edges",this.renderTargetWeights=this.renderTargetEdges.clone(),this.renderTargetWeights.texture.name="SMAA.Weights",this.uniforms.get("weightMap").value=this.renderTargetWeights.texture,this.clearPass=new qd(!0,!1,!1),this.clearPass.overrideClearColor=new gt(0),this.clearPass.overrideClearAlpha=1,this.edgeDetectionPass=new F0(new CC),this.edgeDetectionMaterial.edgeDetectionMode=i,this.edgeDetectionMaterial.predicationMode=s,this.weightsPass=new F0(new DC);const h=new Ax;h.onLoad=()=>{const d=new Mn(l);d.name="SMAA.Search",d.magFilter=ci,d.minFilter=ci,d.generateMipmaps=!1,d.needsUpdate=!0,d.flipY=!0,this.weightsMaterial.searchTexture=d;const m=new Mn(c);m.name="SMAA.Area",m.magFilter=Pn,m.minFilter=Pn,m.generateMipmaps=!1,m.needsUpdate=!0,m.flipY=!1,this.weightsMaterial.areaTexture=m,this.dispatchEvent({type:"load"})},h.itemStart("search"),h.itemStart("area"),l!==void 0&&c!==void 0?(h.itemEnd("search"),h.itemEnd("area")):typeof Image<"u"&&(l=new Image,c=new Image,l.addEventListener("load",()=>h.itemEnd("search")),c.addEventListener("load",()=>h.itemEnd("area")),l.src=H0,c.src=G0),this.applyPreset(e)}get edgesTexture(){return this.renderTargetEdges.texture}getEdgesTexture(){return this.edgesTexture}get weightsTexture(){return this.renderTargetWeights.texture}getWeightsTexture(){return this.weightsTexture}get edgeDetectionMaterial(){return this.edgeDetectionPass.fullscreenMaterial}get colorEdgesMaterial(){return this.edgeDetectionMaterial}getEdgeDetectionMaterial(){return this.edgeDetectionMaterial}get weightsMaterial(){return this.weightsPass.fullscreenMaterial}getWeightsMaterial(){return this.weightsMaterial}setEdgeDetectionThreshold(a){this.edgeDetectionMaterial.edgeDetectionThreshold=a}setOrthogonalSearchSteps(a){this.weightsMaterial.orthogonalSearchSteps=a}applyPreset(a){const e=this.edgeDetectionMaterial,i=this.weightsMaterial;switch(a){case Ds.LOW:e.edgeDetectionThreshold=.15,i.orthogonalSearchSteps=4,i.diagonalDetection=!1,i.cornerDetection=!1;break;case Ds.MEDIUM:e.edgeDetectionThreshold=.1,i.orthogonalSearchSteps=8,i.diagonalDetection=!1,i.cornerDetection=!1;break;case Ds.HIGH:e.edgeDetectionThreshold=.1,i.orthogonalSearchSteps=16,i.diagonalSearchSteps=8,i.cornerRounding=25,i.diagonalDetection=!0,i.cornerDetection=!0;break;case Ds.ULTRA:e.edgeDetectionThreshold=.05,i.orthogonalSearchSteps=32,i.diagonalSearchSteps=16,i.cornerRounding=25,i.diagonalDetection=!0,i.cornerDetection=!0;break}}setDepthTexture(a,e=Lr){this.edgeDetectionMaterial.depthBuffer=a,this.edgeDetectionMaterial.depthPacking=e}update(a,e,i){this.clearPass.render(a,this.renderTargetEdges),this.edgeDetectionPass.render(a,e,this.renderTargetEdges),this.weightsPass.render(a,this.renderTargetEdges,this.renderTargetWeights)}setSize(a,e){this.edgeDetectionMaterial.setSize(a,e),this.weightsMaterial.setSize(a,e),this.renderTargetEdges.setSize(a,e),this.renderTargetWeights.setSize(a,e)}dispose(){const{searchTexture:a,areaTexture:e}=this.weightsMaterial;a!==null&&e!==null&&(a.dispose(),e.dispose()),super.dispose()}static get searchImageDataURL(){return H0}static get areaImageDataURL(){return G0}},BC=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,NC="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",OC=class extends mn{constructor(a,e,i,s,l=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:Gs.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new mt(null),depthBuffer:new mt(null),resolution:new mt(new Pe),texelSize:new mt(new Pe),cameraNear:new mt(.3),cameraFar:new mt(1e3),aspect:new mt(1),time:new mt(0)},blending:In,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:l}),a&&this.setShaderParts(a),e&&this.setDefines(e),i&&this.setUniforms(i),this.copyCameraSettings(s)}set inputBuffer(a){this.uniforms.inputBuffer.value=a}setInputBuffer(a){this.uniforms.inputBuffer.value=a}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(a){this.uniforms.depthBuffer.value=a}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(a){this.defines.DEPTH_PACKING=a.toFixed(0),this.needsUpdate=!0}setDepthBuffer(a,e=Lr){this.depthBuffer=a,this.depthPacking=e}setShaderData(a){this.setShaderParts(a.shaderParts),this.setDefines(a.defines),this.setUniforms(a.uniforms),this.setExtensions(a.extensions)}setShaderParts(a){return this.fragmentShader=BC.replace(Lt.FRAGMENT_HEAD,a.get(Lt.FRAGMENT_HEAD)||"").replace(Lt.FRAGMENT_MAIN_UV,a.get(Lt.FRAGMENT_MAIN_UV)||"").replace(Lt.FRAGMENT_MAIN_IMAGE,a.get(Lt.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=NC.replace(Lt.VERTEX_HEAD,a.get(Lt.VERTEX_HEAD)||"").replace(Lt.VERTEX_MAIN_SUPPORT,a.get(Lt.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(a){for(const e of a.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(a){for(const e of a.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(a){this.extensions={};for(const e of a)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(a){this.encodeOutput!==a&&(a?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(a){return this.encodeOutput}setOutputEncodingEnabled(a){this.encodeOutput=a}get time(){return this.uniforms.time.value}set time(a){this.uniforms.time.value=a}setDeltaTime(a){this.uniforms.time.value+=a}adoptCameraSettings(a){this.copyCameraSettings(a)}copyCameraSettings(a){a&&(this.uniforms.cameraNear.value=a.near,this.uniforms.cameraFar.value=a.far,a instanceof oi?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(a,e){const i=this.uniforms;i.resolution.value.set(a,e),i.texelSize.value.set(1/a,1/e),i.aspect.value=a/e}static get Section(){return Lt}};function V0(a,e,i){for(const s of e){const l="$1"+a+s.charAt(0).toUpperCase()+s.slice(1),c=new RegExp("([^\\.])(\\b"+s+"\\b)","g");for(const h of i.entries())h[1]!==null&&i.set(h[0],h[1].replace(c,l))}}function PC(a,e,i){let s=e.getFragmentShader(),l=e.getVertexShader();const c=s!==void 0&&/mainImage/.test(s),h=s!==void 0&&/mainUv/.test(s);if(i.attributes|=e.getAttributes(),s===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(h&&(i.attributes&ga.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!c&&!h)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const d=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,m=i.shaderParts;let p=m.get(Lt.FRAGMENT_HEAD)||"",v=m.get(Lt.FRAGMENT_MAIN_UV)||"",g=m.get(Lt.FRAGMENT_MAIN_IMAGE)||"",_=m.get(Lt.VERTEX_HEAD)||"",S=m.get(Lt.VERTEX_MAIN_SUPPORT)||"";const M=new Set,b=new Set;if(h&&(v+=`	${a}MainUv(UV);
`,i.uvTransformation=!0),l!==null&&/mainSupport/.test(l)){const I=/mainSupport *\([\w\s]*?uv\s*?\)/.test(l);S+=`	${a}MainSupport(`,S+=I?`vUv);
`:`);
`;for(const B of l.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const R of B[1].split(/\s*,\s*/))i.varyings.add(R),M.add(R),b.add(R);for(const B of l.matchAll(d))b.add(B[1])}for(const I of s.matchAll(d))b.add(I[1]);for(const I of e.defines.keys())b.add(I.replace(/\([\w\s,]*\)/g,""));for(const I of e.uniforms.keys())b.add(I);b.delete("while"),b.delete("for"),b.delete("if"),e.uniforms.forEach((I,B)=>i.uniforms.set(a+B.charAt(0).toUpperCase()+B.slice(1),I)),e.defines.forEach((I,B)=>i.defines.set(a+B.charAt(0).toUpperCase()+B.slice(1),I));const y=new Map([["fragment",s],["vertex",l]]);V0(a,b,i.defines),V0(a,b,y),s=y.get("fragment"),l=y.get("vertex");const x=e.blendMode;if(i.blendModes.set(x.blendFunction,x),c){e.inputColorSpace!==null&&e.inputColorSpace!==i.colorSpace&&(g+=e.inputColorSpace===kt?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==Fi?i.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(i.colorSpace=e.inputColorSpace);const I=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;g+=`${a}MainImage(color0, UV, `,(i.attributes&ga.DEPTH)!==0&&I.test(s)&&(g+="depth, ",i.readDepth=!0),g+=`color1);
	`;const B=a+"BlendOpacity";i.uniforms.set(B,x.opacity),g+=`color0 = blend${x.blendFunction}(color0, color1, ${B});

	`,p+=`uniform float ${B};

`}if(p+=s+`
`,l!==null&&(_+=l+`
`),m.set(Lt.FRAGMENT_HEAD,p),m.set(Lt.FRAGMENT_MAIN_UV,v),m.set(Lt.FRAGMENT_MAIN_IMAGE,g),m.set(Lt.VERTEX_HEAD,_),m.set(Lt.VERTEX_MAIN_SUPPORT,S),e.extensions!==null)for(const I of e.extensions)i.extensions.add(I)}}var k0=class extends yi{constructor(a,...e){super("EffectPass"),this.fullscreenMaterial=new OC(null,null,null,a),this.listener=i=>this.handleEvent(i),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(a){for(const e of this.effects)e.mainScene=a}set mainCamera(a){this.fullscreenMaterial.copyCameraSettings(a);for(const e of this.effects)e.mainCamera=a}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(a){this.fullscreenMaterial.encodeOutput=a}get dithering(){return this.fullscreenMaterial.dithering}set dithering(a){const e=this.fullscreenMaterial;e.dithering=a,e.needsUpdate=!0}setEffects(a){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=a.sort((e,i)=>i.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const a=new T1;let e=0;for(const h of this.effects)if(h.blendMode.blendFunction===_t.DST)a.attributes|=h.getAttributes()&ga.DEPTH;else{if((a.attributes&h.getAttributes()&ga.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${h.name})`);PC("e"+e++,h,a)}let i=a.shaderParts.get(Lt.FRAGMENT_HEAD),s=a.shaderParts.get(Lt.FRAGMENT_MAIN_IMAGE),l=a.shaderParts.get(Lt.FRAGMENT_MAIN_UV);const c=/\bblend\b/g;for(const h of a.blendModes.values())i+=h.getShaderCode().replace(c,`blend${h.blendFunction}`)+`
`;(a.attributes&ga.DEPTH)!==0?(a.readDepth&&(s=`float depth = readDepth(UV);

	`+s),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,a.colorSpace===kt&&(s+=`color0 = sRGBToLinear(color0);
	`),a.uvTransformation?(l=`vec2 transformedUv = vUv;
`+l,a.defines.set("UV","transformedUv")):a.defines.set("UV","vUv"),a.shaderParts.set(Lt.FRAGMENT_HEAD,i),a.shaderParts.set(Lt.FRAGMENT_MAIN_IMAGE,s),a.shaderParts.set(Lt.FRAGMENT_MAIN_UV,l);for(const[h,d]of a.shaderParts)d!==null&&a.shaderParts.set(h,d.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(a)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(a,e=Lr){this.fullscreenMaterial.depthBuffer=a,this.fullscreenMaterial.depthPacking=e;for(const i of this.effects)i.setDepthTexture(a,e)}render(a,e,i,s,l){for(const c of this.effects)c.update(a,e,s);if(!this.skipRendering||this.renderToScreen){const c=this.fullscreenMaterial;c.inputBuffer=e.texture,c.time+=s*this.timeScale,a.setRenderTarget(this.renderToScreen?null:i),a.render(this.scene,this.camera)}}setSize(a,e){this.fullscreenMaterial.setSize(a,e);for(const i of this.effects)i.setSize(a,e)}initialize(a,e,i){this.renderer=a;for(const s of this.effects)s.initialize(a,e,i);this.updateMaterial(),i!==void 0&&i!==Un&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const a of this.effects)a.removeEventListener("change",this.listener),a.dispose()}handleEvent(a){switch(a.type){case"change":this.recompile();break}}};const IC=({effectOptions:a={onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"turbulentDistortion",length:400,roadWidth:10,islandWidth:2,lanesPerRoad:4,fov:90,fovSpeedUp:150,speedUp:2,carLightsFade:.4,totalSideLightSticks:20,lightPairsPerRoadWay:40,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.1,brokenLinesLengthPercentage:.5,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[400*.03,400*.2],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.8,.8],carFloorSeparation:[0,5],colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:16777215,brokenLines:16777215,leftCars:[14177983,6770850,12732332],rightCars:[242627,941733,3294549],sticks:242627}}})=>{const e=en.useRef(null),i=en.useRef(null);return en.useEffect(()=>{if(i.current){i.current.dispose();const ee=document.getElementById("lights");if(ee)for(;ee.firstChild;)ee.removeChild(ee.firstChild)}const s={uFreq:{value:new q(3,6,10)},uAmp:{value:new q(30,30,20)}},l={uFreq:{value:new Pe(5,2)},uAmp:{value:new Pe(25,15)}},c={uFreq:{value:new Pe(2,3)},uAmp:{value:new Pe(35,10)}},h={uFreq:{value:new Kt(4,8,8,1)},uAmp:{value:new Kt(25,5,10,10)}},d={uFreq:{value:new Pe(4,8)},uAmp:{value:new Pe(10,20)},uPowY:{value:new Pe(20,2)}};let m=ee=>Math.sin(ee)*.5+.5;const p={mountainDistortion:{uniforms:s,getDistortion:`
          uniform vec3 uAmp;
          uniform vec3 uFreq;
          #define PI 3.14159265358979
          float nsin(float val){
            return sin(val) * 0.5 + 0.5;
          }
          vec3 getDistortion(float progress){
            float movementProgressFix = 0.02;
            return vec3( 
              cos(progress * PI * uFreq.x + uTime) * uAmp.x - cos(movementProgressFix * PI * uFreq.x + uTime) * uAmp.x,
              nsin(progress * PI * uFreq.y + uTime) * uAmp.y - nsin(movementProgressFix * PI * uFreq.y + uTime) * uAmp.y,
              nsin(progress * PI * uFreq.z + uTime) * uAmp.z - nsin(movementProgressFix * PI * uFreq.z + uTime) * uAmp.z
            );
          }
        `,getJS:(ee,O)=>{let w=.02,z=s.uFreq.value,P=s.uAmp.value,ue=new q(Math.cos(ee*Math.PI*z.x+O)*P.x-Math.cos(w*Math.PI*z.x+O)*P.x,m(ee*Math.PI*z.y+O)*P.y-m(w*Math.PI*z.y+O)*P.y,m(ee*Math.PI*z.z+O)*P.z-m(w*Math.PI*z.z+O)*P.z),de=new q(2,2,2),L=new q(0,0,-5);return ue.multiply(de).add(L)}},xyDistortion:{uniforms:l,getDistortion:`
          uniform vec2 uFreq;
          uniform vec2 uAmp;
          #define PI 3.14159265358979
          vec3 getDistortion(float progress){
            float movementProgressFix = 0.02;
            return vec3( 
              cos(progress * PI * uFreq.x + uTime) * uAmp.x - cos(movementProgressFix * PI * uFreq.x + uTime) * uAmp.x,
              sin(progress * PI * uFreq.y + PI/2. + uTime) * uAmp.y - sin(movementProgressFix * PI * uFreq.y + PI/2. + uTime) * uAmp.y,
              0.
            );
          }
        `,getJS:(ee,O)=>{let w=.02,z=l.uFreq.value,P=l.uAmp.value,ue=new q(Math.cos(ee*Math.PI*z.x+O)*P.x-Math.cos(w*Math.PI*z.x+O)*P.x,Math.sin(ee*Math.PI*z.y+O+Math.PI/2)*P.y-Math.sin(w*Math.PI*z.y+O+Math.PI/2)*P.y,0),de=new q(2,.4,1),L=new q(0,0,-3);return ue.multiply(de).add(L)}},LongRaceDistortion:{uniforms:c,getDistortion:`
          uniform vec2 uFreq;
          uniform vec2 uAmp;
          #define PI 3.14159265358979
          vec3 getDistortion(float progress){
            float camProgress = 0.0125;
            return vec3( 
              sin(progress * PI * uFreq.x + uTime) * uAmp.x - sin(camProgress * PI * uFreq.x + uTime) * uAmp.x,
              sin(progress * PI * uFreq.y + uTime) * uAmp.y - sin(camProgress * PI * uFreq.y + uTime) * uAmp.y,
              0.
            );
          }
        `,getJS:(ee,O)=>{let w=.0125,z=c.uFreq.value,P=c.uAmp.value,ue=new q(Math.sin(ee*Math.PI*z.x+O)*P.x-Math.sin(w*Math.PI*z.x+O)*P.x,Math.sin(ee*Math.PI*z.y+O)*P.y-Math.sin(w*Math.PI*z.y+O)*P.y,0),de=new q(1,1,0),L=new q(0,0,-5);return ue.multiply(de).add(L)}},turbulentDistortion:{uniforms:h,getDistortion:`
          uniform vec4 uFreq;
          uniform vec4 uAmp;
          float nsin(float val){
            return sin(val) * 0.5 + 0.5;
          }
          #define PI 3.14159265358979
          float getDistortionX(float progress){
            return (
              cos(PI * progress * uFreq.r + uTime) * uAmp.r +
              pow(cos(PI * progress * uFreq.g + uTime * (uFreq.g / uFreq.r)), 2. ) * uAmp.g
            );
          }
          float getDistortionY(float progress){
            return (
              -nsin(PI * progress * uFreq.b + uTime) * uAmp.b +
              -pow(nsin(PI * progress * uFreq.a + uTime / (uFreq.b / uFreq.a)), 5.) * uAmp.a
            );
          }
          vec3 getDistortion(float progress){
            return vec3(
              getDistortionX(progress) - getDistortionX(0.0125),
              getDistortionY(progress) - getDistortionY(0.0125),
              0.
            );
          }
        `,getJS:(ee,O)=>{const w=h.uFreq.value,z=h.uAmp.value,P=pe=>Math.cos(Math.PI*pe*w.x+O)*z.x+Math.pow(Math.cos(Math.PI*pe*w.y+O*(w.y/w.x)),2)*z.y,ue=pe=>-m(Math.PI*pe*w.z+O)*z.z-Math.pow(m(Math.PI*pe*w.w+O/(w.z/w.w)),5)*z.w;let de=new q(P(ee)-P(ee+.007),ue(ee)-ue(ee+.007),0),L=new q(-2,-5,0),te=new q(0,0,-10);return de.multiply(L).add(te)}},turbulentDistortionStill:{uniforms:h,getDistortion:`
          uniform vec4 uFreq;
          uniform vec4 uAmp;
          float nsin(float val){
            return sin(val) * 0.5 + 0.5;
          }
          #define PI 3.14159265358979
          float getDistortionX(float progress){
            return (
              cos(PI * progress * uFreq.r) * uAmp.r +
              pow(cos(PI * progress * uFreq.g * (uFreq.g / uFreq.r)), 2. ) * uAmp.g
            );
          }
          float getDistortionY(float progress){
            return (
              -nsin(PI * progress * uFreq.b) * uAmp.b +
              -pow(nsin(PI * progress * uFreq.a / (uFreq.b / uFreq.a)), 5.) * uAmp.a
            );
          }
          vec3 getDistortion(float progress){
            return vec3(
              getDistortionX(progress) - getDistortionX(0.02),
              getDistortionY(progress) - getDistortionY(0.02),
              0.
            );
          }
        `},deepDistortionStill:{uniforms:d,getDistortion:`
          uniform vec4 uFreq;
          uniform vec4 uAmp;
          uniform vec2 uPowY;
          float nsin(float val){
            return sin(val) * 0.5 + 0.5;
          }
          #define PI 3.14159265358979
          float getDistortionX(float progress){
            return (
              sin(progress * PI * uFreq.x) * uAmp.x * 2.
            );
          }
          float getDistortionY(float progress){
            return (
              pow(abs(progress * uPowY.x), uPowY.y) + sin(progress * PI * uFreq.y) * uAmp.y
            );
          }
          vec3 getDistortion(float progress){
            return vec3(
              getDistortionX(progress) - getDistortionX(0.02),
              getDistortionY(progress) - getDistortionY(0.05),
              0.
            );
          }
        `},deepDistortion:{uniforms:d,getDistortion:`
          uniform vec4 uFreq;
          uniform vec4 uAmp;
          uniform vec2 uPowY;
          float nsin(float val){
            return sin(val) * 0.5 + 0.5;
          }
          #define PI 3.14159265358979
          float getDistortionX(float progress){
            return (
              sin(progress * PI * uFreq.x + uTime) * uAmp.x
            );
          }
          float getDistortionY(float progress){
            return (
              pow(abs(progress * uPowY.x), uPowY.y) + sin(progress * PI * uFreq.y + uTime) * uAmp.y
            );
          }
          vec3 getDistortion(float progress){
            return vec3(
              getDistortionX(progress) - getDistortionX(0.02),
              getDistortionY(progress) - getDistortionY(0.02),
              0.
            );
          }
        `,getJS:(ee,O)=>{const w=d.uFreq.value,z=d.uAmp.value,P=d.uPowY.value,ue=ye=>Math.sin(ye*Math.PI*w.x+O)*z.x,de=ye=>Math.pow(ye*P.x,P.y)+Math.sin(ye*Math.PI*w.y+O)*z.y;let L=new q(ue(ee)-ue(ee+.01),de(ee)-de(ee+.01),0),te=new q(-2,-4,0),pe=new q(0,0,-10);return L.multiply(te).add(pe)}}};class v{constructor(O,w={}){this.options=w,this.options.distortion==null&&(this.options.distortion={uniforms:g,getDistortion:_}),this.container=O,this.renderer=new g1({antialias:!1,alpha:!0}),this.renderer.setSize(O.offsetWidth,O.offsetHeight,!1),this.renderer.setPixelRatio(window.devicePixelRatio),this.composer=new M1(this.renderer),O.append(this.renderer.domElement),this.camera=new oi(w.fov,O.offsetWidth/O.offsetHeight,.1,1e4),this.camera.position.z=-5,this.camera.position.y=8,this.camera.position.x=0,this.scene=new Dd,this.scene.background=null;let z=new kd(w.colors.background,w.length*.2,w.length*500);this.scene.fog=z,this.fogUniforms={fogColor:{value:z.color},fogNear:{value:z.near},fogFar:{value:z.far}},this.clock=new By,this.assets={},this.disposed=!1,this.road=new k(this,w),this.leftCarLights=new y(this,w,w.colors.leftCars,w.movingAwaySpeed,new Pe(0,1-w.carLightsFade)),this.rightCarLights=new y(this,w,w.colors.rightCars,w.movingCloserSpeed,new Pe(1,0+w.carLightsFade)),this.leftSticks=new B(this,w),this.fovTarget=w.fov,this.speedUpTarget=0,this.speedUp=0,this.timeOffset=0,this.tick=this.tick.bind(this),this.init=this.init.bind(this),this.setSize=this.setSize.bind(this),this.onMouseDown=this.onMouseDown.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this),this.onContextMenu=this.onContextMenu.bind(this),window.addEventListener("resize",this.onWindowResize.bind(this))}onWindowResize(){const O=this.container.offsetWidth,w=this.container.offsetHeight;this.renderer.setSize(O,w),this.camera.aspect=O/w,this.camera.updateProjectionMatrix(),this.composer.setSize(O,w)}initPasses(){this.renderPass=new EC(this.scene,this.camera),this.bloomPass=new k0(this.camera,new yC({luminanceThreshold:.2,luminanceSmoothing:0,resolutionScale:1}));const O=new k0(this.camera,new ko({preset:Ds.MEDIUM,searchImage:ko.searchImageDataURL,areaImage:ko.areaImageDataURL}));this.renderPass.renderToScreen=!1,this.bloomPass.renderToScreen=!1,O.renderToScreen=!0,this.composer.addPass(this.renderPass),this.composer.addPass(this.bloomPass),this.composer.addPass(O)}loadAssets(){const O=this.assets;return new Promise(w=>{const z=new Ax(w),P=new Image,ue=new Image;O.smaa={},P.addEventListener("load",function(){O.smaa.search=this,z.itemEnd("smaa-search")}),ue.addEventListener("load",function(){O.smaa.area=this,z.itemEnd("smaa-area")}),z.itemStart("smaa-search"),z.itemStart("smaa-area"),P.src=ko.searchImageDataURL,ue.src=ko.areaImageDataURL})}init(){this.initPasses();const O=this.options;this.road.init(),this.leftCarLights.init(),this.leftCarLights.mesh.position.setX(-O.roadWidth/2-O.islandWidth/2),this.rightCarLights.init(),this.rightCarLights.mesh.position.setX(O.roadWidth/2+O.islandWidth/2),this.leftSticks.init(),this.leftSticks.mesh.position.setX(-(O.roadWidth+O.islandWidth/2)),this.container.addEventListener("mousedown",this.onMouseDown),this.container.addEventListener("mouseup",this.onMouseUp),this.container.addEventListener("mouseout",this.onMouseUp),this.container.addEventListener("touchstart",this.onTouchStart,{passive:!0}),this.container.addEventListener("touchend",this.onTouchEnd,{passive:!0}),this.container.addEventListener("touchcancel",this.onTouchEnd,{passive:!0}),this.container.addEventListener("contextmenu",this.onContextMenu),this.tick()}onMouseDown(O){this.options.onSpeedUp&&this.options.onSpeedUp(O),this.fovTarget=this.options.fovSpeedUp,this.speedUpTarget=this.options.speedUp}onMouseUp(O){this.options.onSlowDown&&this.options.onSlowDown(O),this.fovTarget=this.options.fov,this.speedUpTarget=0}onTouchStart(O){this.options.onSpeedUp&&this.options.onSpeedUp(O),this.fovTarget=this.options.fovSpeedUp,this.speedUpTarget=this.options.speedUp}onTouchEnd(O){this.options.onSlowDown&&this.options.onSlowDown(O),this.fovTarget=this.options.fov,this.speedUpTarget=0}onContextMenu(O){O.preventDefault()}update(O){let w=Math.exp(-(-60*Math.log2(.9))*O);this.speedUp+=b(this.speedUp,this.speedUpTarget,w,1e-5),this.timeOffset+=this.speedUp*O;let z=this.clock.elapsedTime+this.timeOffset;this.rightCarLights.update(z),this.leftCarLights.update(z),this.leftSticks.update(z),this.road.update(z);let P=!1,ue=b(this.camera.fov,this.fovTarget,w);if(ue!==0&&(this.camera.fov+=ue*O*6,P=!0),this.options.distortion.getJS){const de=this.options.distortion.getJS(.025,z);this.camera.lookAt(new q(this.camera.position.x+de.x,this.camera.position.y+de.y,this.camera.position.z+de.z)),P=!0}P&&this.camera.updateProjectionMatrix(),this.options.isHyper&&console.log(this.options.isHyper)}render(O){this.composer.render(O)}dispose(){this.disposed=!0,this.renderer&&this.renderer.dispose(),this.composer&&this.composer.dispose(),this.scene&&this.scene.clear(),window.removeEventListener("resize",this.onWindowResize.bind(this)),this.container&&(this.container.removeEventListener("mousedown",this.onMouseDown),this.container.removeEventListener("mouseup",this.onMouseUp),this.container.removeEventListener("mouseout",this.onMouseUp),this.container.removeEventListener("touchstart",this.onTouchStart),this.container.removeEventListener("touchend",this.onTouchEnd),this.container.removeEventListener("touchcancel",this.onTouchEnd),this.container.removeEventListener("contextmenu",this.onContextMenu))}setSize(O,w,z){this.composer.setSize(O,w,z)}tick(){if(this.disposed||!this)return;if(ce(this.renderer,this.setSize)){const w=this.renderer.domElement;this.camera.aspect=w.clientWidth/w.clientHeight,this.camera.updateProjectionMatrix()}const O=this.clock.getDelta();this.render(O),this.update(O),requestAnimationFrame(this.tick)}}const g={uDistortionX:{value:new Pe(80,3)},uDistortionY:{value:new Pe(-40,2.5)}},_=`
      #define PI 3.14159265358979
      uniform vec2 uDistortionX;
      uniform vec2 uDistortionY;
      float nsin(float val){
        return sin(val) * 0.5 + 0.5;
      }
      vec3 getDistortion(float progress){
        progress = clamp(progress, 0., 1.);
        float xAmp = uDistortionX.r;
        float xFreq = uDistortionX.g;
        float yAmp = uDistortionY.r;
        float yFreq = uDistortionY.g;
        return vec3( 
          xAmp * nsin(progress * PI * xFreq - PI / 2.),
          yAmp * nsin(progress * PI * yFreq - PI / 2.),
          0.
        );
      }
    `,S=ee=>Array.isArray(ee)?Math.random()*(ee[1]-ee[0])+ee[0]:Math.random()*ee,M=ee=>Array.isArray(ee)?ee[Math.floor(Math.random()*ee.length)]:ee;function b(ee,O,w=.1,z=.001){let P=(O-ee)*w;return Math.abs(P)<z&&(P=O-ee),P}class y{constructor(O,w,z,P,ue){this.webgl=O,this.options=w,this.colors=z,this.speed=P,this.fade=ue}init(){const O=this.options;let w=new vx(new q(0,0,0),new q(0,0,-1)),z=new Wd(w,40,1,8,!1),P=new f0().copy(z);P.instanceCount=O.lightPairsPerRoadWay*2;let ue=O.roadWidth/O.lanesPerRoad,de=[],L=[],te=[],pe=this.colors;Array.isArray(pe)?pe=pe.map(ne=>new gt(ne)):pe=new gt(pe);for(let ne=0;ne<O.lightPairsPerRoadWay;ne++){let he=S(O.carLightsRadius),De=S(O.carLightsLength),Oe=S(this.speed),ct=ne%O.lanesPerRoad*ue-O.roadWidth/2+ue/2,Jt=S(O.carWidthPercentage)*ue,V=S(O.carShiftX)*ue;ct+=V;let Tt=S(O.carFloorSeparation)+he*1.3,at=-S(O.length);de.push(ct-Jt/2),de.push(Tt),de.push(at),de.push(ct+Jt/2),de.push(Tt),de.push(at),L.push(he),L.push(De),L.push(Oe),L.push(he),L.push(De),L.push(Oe);let Ke=M(pe);te.push(Ke.r),te.push(Ke.g),te.push(Ke.b),te.push(Ke.r),te.push(Ke.g),te.push(Ke.b)}P.setAttribute("aOffset",new ws(new Float32Array(de),3,!1)),P.setAttribute("aMetrics",new ws(new Float32Array(L),3,!1)),P.setAttribute("aColor",new ws(new Float32Array(te),3,!1));let ye=new mn({fragmentShader:x,vertexShader:I,transparent:!0,uniforms:Object.assign({uTime:{value:0},uTravelLength:{value:O.length},uFade:{value:this.fade}},this.webgl.fogUniforms,O.distortion.uniforms)});ye.onBeforeCompile=ne=>{ne.vertexShader=ne.vertexShader.replace("#include <getDistortion_vertex>",O.distortion.getDistortion)};let Ce=new li(P,ye);Ce.frustumCulled=!1,this.webgl.scene.add(Ce),this.mesh=Ce}update(O){this.mesh.material.uniforms.uTime.value=O}}const x=`
      #define USE_FOG;
      ${nt.fog_pars_fragment}
      varying vec3 vColor;
      varying vec2 vUv; 
      uniform vec2 uFade;
      void main() {
        vec3 color = vec3(vColor);
        float alpha = smoothstep(uFade.x, uFade.y, vUv.x);
        gl_FragColor = vec4(color, alpha);
        if (gl_FragColor.a < 0.0001) discard;
        ${nt.fog_fragment}
      }
    `,I=`
      #define USE_FOG;
      ${nt.fog_pars_vertex}
      attribute vec3 aOffset;
      attribute vec3 aMetrics;
      attribute vec3 aColor;
      uniform float uTravelLength;
      uniform float uTime;
      varying vec2 vUv; 
      varying vec3 vColor; 
      #include <getDistortion_vertex>
      void main() {
        vec3 transformed = position.xyz;
        float radius = aMetrics.r;
        float myLength = aMetrics.g;
        float speed = aMetrics.b;

        transformed.xy *= radius;
        transformed.z *= myLength;

        transformed.z += myLength - mod(uTime * speed + aOffset.z, uTravelLength);
        transformed.xy += aOffset.xy;

        float progress = abs(transformed.z / uTravelLength);
        transformed.xyz += getDistortion(progress);

        vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
        gl_Position = projectionMatrix * mvPosition;
        vUv = uv;
        vColor = aColor;
        ${nt.fog_vertex}
      }
    `;class B{constructor(O,w){this.webgl=O,this.options=w}init(){const O=this.options,w=new Hs(1,1);let z=new f0().copy(w),P=O.totalSideLightSticks;z.instanceCount=P;let ue=O.length/(P-1);const de=[],L=[],te=[];let pe=O.colors.sticks;Array.isArray(pe)?pe=pe.map(ne=>new gt(ne)):pe=new gt(pe);for(let ne=0;ne<P;ne++){let he=S(O.lightStickWidth),De=S(O.lightStickHeight);de.push((ne-1)*ue*2+ue*Math.random());let Oe=M(pe);L.push(Oe.r),L.push(Oe.g),L.push(Oe.b),te.push(he),te.push(De)}z.setAttribute("aOffset",new ws(new Float32Array(de),1,!1)),z.setAttribute("aColor",new ws(new Float32Array(L),3,!1)),z.setAttribute("aMetrics",new ws(new Float32Array(te),2,!1));const ye=new mn({fragmentShader:X,vertexShader:R,side:kn,uniforms:Object.assign({uTravelLength:{value:O.length},uTime:{value:0}},this.webgl.fogUniforms,O.distortion.uniforms)});ye.onBeforeCompile=ne=>{ne.vertexShader=ne.vertexShader.replace("#include <getDistortion_vertex>",O.distortion.getDistortion)};const Ce=new li(z,ye);Ce.frustumCulled=!1,this.webgl.scene.add(Ce),this.mesh=Ce}update(O){this.mesh.material.uniforms.uTime.value=O}}const R=`
      #define USE_FOG;
      ${nt.fog_pars_vertex}
      attribute float aOffset;
      attribute vec3 aColor;
      attribute vec2 aMetrics;
      uniform float uTravelLength;
      uniform float uTime;
      varying vec3 vColor;
      mat4 rotationY( in float angle ) {
        return mat4(	cos(angle),		0,		sin(angle),	0,
                     0,		1.0,			 0,	0,
                -sin(angle),	0,		cos(angle),	0,
                0, 		0,				0,	1);
      }
      #include <getDistortion_vertex>
      void main(){
        vec3 transformed = position.xyz;
        float width = aMetrics.x;
        float height = aMetrics.y;

        transformed.xy *= vec2(width, height);
        float time = mod(uTime * 60. * 2. + aOffset, uTravelLength);

        transformed = (rotationY(3.14/2.) * vec4(transformed,1.)).xyz;

        transformed.z += - uTravelLength + time;

        float progress = abs(transformed.z / uTravelLength);
        transformed.xyz += getDistortion(progress);

        transformed.y += height / 2.;
        transformed.x += -width / 2.;
        vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
        gl_Position = projectionMatrix * mvPosition;
        vColor = aColor;
        ${nt.fog_vertex}
      }
    `,X=`
      #define USE_FOG;
      ${nt.fog_pars_fragment}
      varying vec3 vColor;
      void main(){
        vec3 color = vec3(vColor);
        gl_FragColor = vec4(color,1.);
        ${nt.fog_fragment}
      }
    `;class k{constructor(O,w){this.webgl=O,this.options=w,this.uTime={value:0}}createPlane(O,w,z){const P=this.options;let ue=100;const de=new Hs(z?P.roadWidth:P.islandWidth,P.length,20,ue);let L={uTravelLength:{value:P.length},uColor:{value:new gt(z?P.colors.roadColor:P.colors.islandColor)},uTime:this.uTime};z&&(L=Object.assign(L,{uLanes:{value:P.lanesPerRoad},uBrokenLinesColor:{value:new gt(P.colors.brokenLines)},uShoulderLinesColor:{value:new gt(P.colors.shoulderLines)},uShoulderLinesWidthPercentage:{value:P.shoulderLinesWidthPercentage},uBrokenLinesLengthPercentage:{value:P.brokenLinesLengthPercentage},uBrokenLinesWidthPercentage:{value:P.brokenLinesWidthPercentage}}));const te=new mn({fragmentShader:z?H:J,vertexShader:K,side:kn,uniforms:Object.assign(L,this.webgl.fogUniforms,P.distortion.uniforms)});te.onBeforeCompile=ye=>{ye.vertexShader=ye.vertexShader.replace("#include <getDistortion_vertex>",P.distortion.getDistortion)};const pe=new li(de,te);return pe.rotation.x=-Math.PI/2,pe.position.z=-P.length/2,pe.position.x+=(this.options.islandWidth/2+P.roadWidth/2)*O,this.webgl.scene.add(pe),pe}init(){this.leftRoadWay=this.createPlane(-1,this.options.roadWidth,!0),this.rightRoadWay=this.createPlane(1,this.options.roadWidth,!0),this.island=this.createPlane(0,this.options.islandWidth,!1)}update(O){this.uTime.value=O}}const F=`
      #define USE_FOG;
      varying vec2 vUv; 
      uniform vec3 uColor;
      uniform float uTime;
      #include <roadMarkings_vars>
      ${nt.fog_pars_fragment}
      void main() {
        vec2 uv = vUv;
        vec3 color = vec3(uColor);
        #include <roadMarkings_fragment>
        gl_FragColor = vec4(color, 1.);
        ${nt.fog_fragment}
      }
    `,J=F.replace("#include <roadMarkings_fragment>","").replace("#include <roadMarkings_vars>",""),H=F.replace("#include <roadMarkings_fragment>",`
      uv.y = mod(uv.y + uTime * 0.05, 1.);
      float laneWidth = 1.0 / uLanes;
      float brokenLineWidth = laneWidth * uBrokenLinesWidthPercentage;
      float laneEmptySpace = 1. - uBrokenLinesLengthPercentage;

      float brokenLines = step(1.0 - brokenLineWidth, fract(uv.x * 2.0)) * step(laneEmptySpace, fract(uv.y * 10.0));
      float sideLines = step(1.0 - brokenLineWidth, fract((uv.x - laneWidth * (uLanes - 1.0)) * 2.0)) + step(brokenLineWidth, uv.x);

      brokenLines = mix(brokenLines, sideLines, uv.x);
    `).replace("#include <roadMarkings_vars>",`
      uniform float uLanes;
      uniform vec3 uBrokenLinesColor;
      uniform vec3 uShoulderLinesColor;
      uniform float uShoulderLinesWidthPercentage;
      uniform float uBrokenLinesWidthPercentage;
      uniform float uBrokenLinesLengthPercentage;
      highp float random(vec2 co) {
        highp float a = 12.9898;
        highp float b = 78.233;
        highp float c = 43758.5453;
        highp float dt = dot(co.xy, vec2(a, b));
        highp float sn = mod(dt, 3.14);
        return fract(sin(sn) * c);
      }
    `),K=`
      #define USE_FOG;
      uniform float uTime;
      ${nt.fog_pars_vertex}
      uniform float uTravelLength;
      varying vec2 vUv; 
      #include <getDistortion_vertex>
      void main() {
        vec3 transformed = position.xyz;
        vec3 distortion = getDistortion((transformed.y + uTravelLength / 2.) / uTravelLength);
        transformed.x += distortion.x;
        transformed.z += distortion.y;
        transformed.y += -1. * distortion.z;  
        
        vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
        gl_Position = projectionMatrix * mvPosition;
        vUv = uv;
        ${nt.fog_vertex}
      }
    `;function ce(ee,O){const w=ee.domElement,z=w.clientWidth,P=w.clientHeight,ue=w.width!==z||w.height!==P;return ue&&O(z,P,!1),ue}return(function(){const ee=document.getElementById("lights"),O={...a};O.distortion=p[O.distortion];const w=new v(ee,O);i.current=w,w.loadAssets().then(w.init)})(),()=>{i.current&&i.current.dispose()}},[a]),Y.jsx("div",{id:"lights",ref:e})};function Ii(a={}){const e=en.useRef(null),[i,s]=en.useState(!1);return en.useEffect(()=>{const l=new IntersectionObserver(([h])=>{h.isIntersecting&&s(!0)},{threshold:.1,...a}),c=e.current;return c&&l.observe(c),()=>{c&&l.unobserve(c)}},[a]),[e,i]}function zC(){const[a,e]=Ii(),[i,s]=Ii(),[l,c]=Ii(),[h,d]=Ii(),[m,p]=Ii(),[v,g]=Ii(),[_,S]=Ii(),[M,b]=Ii(),[y,x]=Ii(),[I,B]=Ii();return Y.jsxs("div",{className:"app-container",children:[Y.jsx(IC,{effectOptions:{onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"turbulentDistortion",length:400,roadWidth:10,islandWidth:2,lanesPerRoad:4,fov:90,fovSpeedUp:150,speedUp:2,carLightsFade:.4,totalSideLightSticks:20,lightPairsPerRoadWay:40,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.1,brokenLinesLengthPercentage:.5,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[400*.03,400*.2],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.8,.8],carFloorSeparation:[0,5],colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:16777215,brokenLines:16777215,leftCars:[14177983,6770850,12732332],rightCars:[242627,941733,3294549],sticks:242627}}}),Y.jsx(W0,{}),Y.jsxs("main",{className:"pt-24 min-h-screen text-white flex items-center justify-center w-full relative overflow-hidden",children:[Y.jsx("div",{className:"absolute top-20 left-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"}),Y.jsx("div",{className:"absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"}),Y.jsx("div",{className:"w-full max-w-[1200px] px-6 mx-auto relative z-10",children:Y.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 items-center",children:[Y.jsxs("div",{ref:a,className:`text-left transition-all duration-1000 ${e?"opacity-100 translate-x-0":"opacity-0 -translate-x-20"}`,children:[Y.jsx("div",{className:"mb-6",children:Y.jsx("div",{className:"flex items-center gap-3 w-fit px-6 py-3 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-cyan-900 border border-cyan-500 shadow-lg backdrop-blur-sm",children:Y.jsx("p",{className:"text-cyan-400 font-semibold tracking-wide text-lg md:text-xl italic",children:'"Trying to do better ✨"'})})}),Y.jsxs("h1",{className:"text-3xl md:text-5xl font-bold mb-4 leading-tight",children:["Halo, Saya ",Y.jsx("span",{className:"text-cyan-400",children:"Thoriq Al-Kautsar"})]}),Y.jsx("p",{className:"text-white/70 md:text-lg mb-6",children:"Siswa SMAN 62 Jakarta yang sedang mengembangkan portfolio pribadi berbasis website. Website ini menjadi ruang untuk memperkenalkan diri, kegiatan, dan karya saya."}),Y.jsx("div",{className:"grid grid-cols-3 gap-4 mt-8",children:Y.jsxs("div",{className:"bg-gradient-to-br from-slate-800 to-slate-900 p-4 rounded-xl border border-cyan-500/20 backdrop-blur-sm",children:[Y.jsx("div",{className:"text-2xl font-bold text-cyan-400",children:"2025"}),Y.jsx("div",{className:"text-xs text-white/60",children:"Active"})]})})]}),Y.jsx("div",{className:"flex justify-center md:justify-end",children:Y.jsx(j_,{name:"Thoriq Al-Kautsar",title:"Siswa SMAN 62 JAKARTA",handle:"Thoriqqq_27",status:"Online",contactText:"Contact Me",avatarUrl:"assets/THORIQ.png",showUserInfo:!0,enableTilt:!0,enableMobileTilt:!1,onContactClick:()=>console.log("Contact clicked")})})]})})]}),Y.jsxs("section",{id:"profile",className:"relative py-20 overflow-hidden w-full",children:[Y.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[Y.jsx("div",{className:"absolute top-0 left-1/4 w-64 h-64 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5"}),Y.jsx("div",{className:"absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"})]}),Y.jsx("div",{className:"absolute inset-0 opacity-10",style:{backgroundImage:"linear-gradient(rgba(51,255,252,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(51,255,252,0.1) 1px, transparent 1px)",backgroundSize:"50px 50px"}}),Y.jsxs("div",{className:"w-full max-w-[1000px] px-6 mx-auto relative z-10",children:[Y.jsxs("div",{className:"text-center mb-10",children:[Y.jsxs("h2",{ref:i,className:`text-3xl md:text-4xl font-bold text-cyan-400 mb-3 transition-all duration-1000 delay-1000 relative inline-block ${s?"opacity-100 translate-y-0":"opacity-0 -translate-y-10"}`,children:["Tentang Saya",Y.jsx("div",{className:"absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"})]}),Y.jsx("p",{ref:l,className:`text-white/70 max-w-2xl mx-auto transition-all duration-1000 ${c?"opacity-100 translate-y-0":"opacity-0 -translate-y-10"}`,style:{transitionDelay:"1200ms"},children:"Sedikit cerita tentang siapa saya dan apa yang saya sukai 🌟"})]}),Y.jsxs("div",{className:"relative",children:[Y.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5 rounded-2xl blur-xl"}),Y.jsxs("div",{className:"relative border border-white/10 rounded-2xl p-8 bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-sm transition-all duration-500 hover:border-cyan-400/30",children:[Y.jsx("p",{className:"text-white/80 leading-relaxed md:text-lg",children:"Saya Thoriq, siswa SMAN 62 Jakarta yang memiliki ketertarikan besar pada dunia teknologi, desain, dan pengembangan diri. Saya senang mempelajari hal-hal baru, terutama yang berkaitan dengan kreativitas digital dan pemrograman. Dalam setiap kegiatan, saya berusaha untuk terus berkembang dan memberikan hasil terbaik."}),Y.jsx("p",{className:"text-white/80 leading-relaxed md:text-lg mt-4",children:"Bagi saya, membuat sesuatu yang bermanfaat bagi orang lain adalah kepuasan tersendiri. Karena itu, saya menjadikan web portfolio ini sebagai tempat untuk menunjukkan perjalanan dan karya saya ke depannya 🚀"}),Y.jsxs("div",{className:"mt-8 flex flex-wrap gap-4 justify-center md:justify-start",children:[Y.jsxs("div",{className:"group bg-gradient-to-r from-slate-800/50 to-slate-900/30 px-5 py-3 rounded-xl text-sm text-cyan-400 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105",children:[Y.jsx("span",{className:"inline-block",children:"💻"})," Pemrograman"]}),Y.jsxs("div",{className:"group bg-gradient-to-r from-slate-800/50 to-slate-900/30 px-5 py-3 rounded-xl text-sm text-cyan-400 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105",children:[Y.jsx("span",{className:"inline-block",children:"🎨"})," Desain Kreatif"]}),Y.jsxs("div",{className:"group bg-gradient-to-r from-slate-800/50 to-slate-900/30 px-5 py-3 rounded-xl text-sm text-cyan-400 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105",children:[Y.jsx("span",{className:"inline-block",children:"📚"})," Pembelajar Aktif"]})]})]})]})]})]}),Y.jsxs("section",{id:"ekstrakurikuler",className:"relative py-20 w-full overflow-hidden",children:[Y.jsxs("div",{className:"absolute inset-0",children:[Y.jsx("div",{className:"absolute top-1/4 right-0 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse"}),Y.jsx("div",{className:"absolute bottom-1/4 left-0 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"})]}),Y.jsxs("div",{className:"w-full max-w-[1200px] px-6 mx-auto text-center relative z-10",children:[Y.jsxs("h2",{ref:h,className:`text-3xl md:text-4xl font-bold text-cyan-400 mb-4 transition-all duration-1000 delay-1000 relative inline-block ${d?"opacity-100 translate-x-0":"opacity-0 -translate-x-20"}`,children:["Ekstrakurikuler & Organisasi",Y.jsx("div",{className:"absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"})]}),Y.jsx("p",{ref:m,className:`text-white/70 mb-12 max-w-2xl mx-auto transition-all duration-1000 ${p?"opacity-100 translate-x-0":"opacity-0 translate-x-20"}`,style:{transitionDelay:"1200ms"},children:"Beberapa kegiatan sekolah dan organisasi yang saya ikuti untuk mengembangkan kemampuan, tanggung jawab, dan kerja sama."}),Y.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8",children:[Y.jsxs("div",{className:"group relative border border-white/10 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm hover:border-cyan-400/50",children:[Y.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),Y.jsx("img",{src:"assets/osis.jpg",alt:"OSIS",className:"w-full h-44 object-cover transition-transform duration-500 group-hover:scale-110"}),Y.jsxs("div",{className:"p-4 text-left relative z-10",children:[Y.jsxs("h3",{className:"text-xl font-semibold text-cyan-400 mb-2 flex items-center gap-2",children:[Y.jsx("span",{className:"text-2xl",children:"🏛️"})," OSIS"]}),Y.jsx("p",{className:"text-white/70 text-sm leading-relaxed",children:"Organisasi siswa yang mengajarkan kepemimpinan, tanggung jawab, dan kemampuan berorganisasi di lingkungan sekolah."})]})]}),Y.jsxs("div",{className:"group relative border border-white/10 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm hover:border-cyan-400/50",children:[Y.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),Y.jsx("img",{src:"assets/pramuka.jpg",alt:"Pramuka",className:"w-full h-44 object-cover transition-transform duration-500 group-hover:scale-110"}),Y.jsxs("div",{className:"p-4 text-left relative z-10",children:[Y.jsxs("h3",{className:"text-xl font-semibold text-cyan-400 mb-2 flex items-center gap-2",children:[Y.jsx("span",{className:"text-2xl",children:"⚜️"})," Pramuka"]}),Y.jsx("p",{className:"text-white/70 text-sm leading-relaxed",children:"Melatih kemandirian, kedisiplinan, dan kerja sama melalui kegiatan kepanduan serta pembentukan karakter."})]})]}),Y.jsxs("div",{className:"group relative border border-white/10 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm hover:border-cyan-400/50",children:[Y.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),Y.jsx("img",{src:"assets/rohis.jpg",alt:"Rohis",className:"w-full h-44 object-cover transition-transform duration-500 group-hover:scale-110"}),Y.jsxs("div",{className:"p-4 text-left relative z-10",children:[Y.jsxs("h3",{className:"text-xl font-semibold text-cyan-400 mb-2 flex items-center gap-2",children:[Y.jsx("span",{className:"text-2xl",children:"🕌"})," Rohis"]}),Y.jsx("p",{className:"text-white/70 text-sm leading-relaxed",children:"Kegiatan keagamaan Islam yang membentuk karakter religius, etika, dan kebersamaan antar siswa."})]})]}),Y.jsxs("div",{className:"group relative border border-white/10 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm hover:border-cyan-400/50",children:[Y.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),Y.jsx("img",{src:"assets/badminton.jpg",alt:"Badminton",className:"w-full h-44 object-cover transition-transform duration-500 group-hover:scale-110"}),Y.jsxs("div",{className:"p-4 text-left relative z-10",children:[Y.jsxs("h3",{className:"text-xl font-semibold text-cyan-400 mb-2 flex items-center gap-2",children:[Y.jsx("span",{className:"text-2xl",children:"🏸"})," Badminton"]}),Y.jsx("p",{className:"text-white/70 text-sm leading-relaxed",children:"Meningkatkan sportivitas dan semangat kompetitif melalui latihan serta pertandingan bulu tangkis."})]})]})]})]})]}),Y.jsxs("section",{id:"berita",className:"relative py-20 w-full overflow-hidden",children:[Y.jsxs("div",{className:"absolute inset-0",children:[Y.jsx("div",{className:"absolute top-1/3 left-1/3 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse"}),Y.jsx("div",{className:"absolute bottom-1/3 right-1/3 w-64 h-64 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5"})]}),Y.jsxs("div",{className:"w-full max-w-[1000px] px-6 mx-auto relative z-10",children:[Y.jsx("div",{className:"text-center mb-10",children:Y.jsxs("h2",{ref:v,className:`text-3xl md:text-4xl font-bold text-cyan-400 mb-3 transition-all duration-1000 delay-1000 relative inline-block ${g?"opacity-100 scale-100":"opacity-0 scale-75"}`,children:["Berita & Prestasi",Y.jsx("div",{className:"absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"})]})}),Y.jsxs("div",{className:"relative",children:[Y.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-cyan-400/5 rounded-2xl blur-2xl"}),Y.jsxs("div",{className:"relative border border-white/10 rounded-2xl p-8 space-y-5 bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-sm",children:[Y.jsxs("div",{className:"group flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-yellow-500/10 to-transparent border border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105",children:[Y.jsx("span",{className:"text-3xl",children:"🥇"}),Y.jsxs("div",{children:[Y.jsx("p",{className:"text-white/90 text-lg font-semibold",children:"Juara 1 Lomba Badminton Ganda Putra"}),Y.jsx("p",{className:"text-white/50 text-sm",children:"2019"})]})]}),Y.jsxs("div",{className:"group flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-transparent border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 hover:scale-105",children:[Y.jsx("span",{className:"text-3xl",children:"🏸"}),Y.jsxs("div",{children:[Y.jsx("p",{className:"text-white/90 text-lg font-semibold",children:"Juara Harapan 3 Lomba Badminton Tunggal Putra"}),Y.jsx("p",{className:"text-white/50 text-sm",children:"2021"})]})]}),Y.jsxs("div",{className:"group flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-cyan-400/10 to-transparent border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105",children:[Y.jsx("span",{className:"text-3xl",children:"🎖️"}),Y.jsxs("div",{children:[Y.jsx("p",{className:"text-white/90 text-lg font-semibold",children:"Juara Harapan 1 Lomba Yel-Yel Napak Tilas"}),Y.jsx("p",{className:"text-white/50 text-sm",children:"2025"})]})]})]})]})]})]}),Y.jsxs("section",{id:"gallery",className:"relative py-24 overflow-hidden w-full",children:[Y.jsx("div",{className:"absolute inset-0 opacity-30",style:{backgroundImage:"radial-gradient(circle at center, rgba(51,255,252,0.08) 1px, transparent 1px)",backgroundSize:"30px 30px"}}),Y.jsx("div",{className:"absolute top-20 right-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"}),Y.jsx("div",{className:"absolute bottom-20 left-20 w-80 h-80 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"}),Y.jsxs("div",{className:"w-full max-w-[1200px] px-6 mx-auto relative z-10",children:[Y.jsxs("div",{className:"text-center mb-14",children:[Y.jsxs("h2",{ref:_,className:`text-3xl md:text-4xl font-bold text-cyan-400 mb-3 transition-all duration-1000 delay-1000 relative inline-block ${S?"opacity-100 translate-y-0 rotate-0":"opacity-0 translate-y-10 -rotate-3"}`,children:["📸 Gallery 📸",Y.jsx("div",{className:"absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"})]}),Y.jsx("div",{ref:M,className:`w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mb-4 transition-all duration-1000 ${b?"opacity-100 scale-x-100":"opacity-0 scale-x-0"}`,style:{transitionDelay:"1300ms"}})]}),Y.jsx("div",{className:"columns-2 sm:columns-3 md:columns-4 gap-4 space-y-4",children:["assets/Anak12E.jpg","assets/Apis.png","assets/apis2.png","assets/Kelas12e.jpg","assets/kelas12e1.jpg","assets/temen1.jpg","assets/TMB.jpg","assets/Drama1.jpg"].map((R,X)=>Y.jsxs("div",{className:"group relative overflow-hidden rounded-2xl border border-white/10 hover:scale-105 transition-all duration-300 break-inside-avoid hover:border-cyan-400/50",children:[Y.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-cyan-400/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"}),Y.jsx("img",{src:R,alt:`Gallery ${X+1}`,className:"w-full h-auto object-cover rounded-2xl group-hover:opacity-90 group-hover:scale-110 transition-all duration-500"})]},X))})]})]}),Y.jsxs("section",{id:"contact",className:"relative py-20 w-full overflow-hidden",children:[Y.jsxs("div",{className:"absolute inset-0",children:[Y.jsx("div",{className:"absolute top-0 left-1/4 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"}),Y.jsx("div",{className:"absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"})]}),Y.jsx("div",{className:"absolute inset-0 opacity-5",style:{backgroundImage:"repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(51,255,252,0.3) 35px, rgba(51,255,252,0.3) 36px)"}}),Y.jsxs("div",{className:"w-full max-w-[900px] px-6 mx-auto text-center relative z-10",children:[Y.jsxs("h2",{ref:y,className:`text-3xl md:text-4xl font-bold text-cyan-400 mb-6 transition-all duration-1000 delay-1000 relative inline-block ${x?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,children:["Hubungi Saya",Y.jsx("div",{className:"absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"})]}),Y.jsx("p",{ref:I,className:`text-white/70 mb-10 transition-all duration-1000 ${B?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,style:{transitionDelay:"1200ms"},children:"Jangan ragu untuk terhubung dengan saya melalui media sosial berikut! 💬"}),Y.jsxs("div",{className:"flex justify-center gap-8 flex-wrap",children:[Y.jsxs("a",{href:"https://wa.me/6281290301826",target:"_blank",rel:"noopener noreferrer",className:"group relative",children:[Y.jsx("div",{className:"absolute inset-0 bg-green-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"}),Y.jsxs("div",{className:"relative transition-all duration-300 p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm group-hover:scale-110 group-hover:border-green-500/50",children:[Y.jsx("i",{className:"fa-brands fa-whatsapp text-4xl text-green-500 group-hover:text-white transition-all group-hover:scale-110"}),Y.jsx("p",{className:"text-white/60 text-xs mt-2 group-hover:text-white/90 transition-colors",children:"WhatsApp"})]})]}),Y.jsxs("a",{href:"https://instagram.com/Thriqqq_27",target:"_blank",rel:"noopener noreferrer",className:"group relative",children:[Y.jsx("div",{className:"absolute inset-0 bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"}),Y.jsxs("div",{className:"relative transition-all duration-300 p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm group-hover:scale-110 group-hover:border-pink-500/50",children:[Y.jsx("i",{className:"fa-brands fa-instagram text-4xl text-pink-500 group-hover:text-white transition-all group-hover:scale-110"}),Y.jsx("p",{className:"text-white/60 text-xs mt-2 group-hover:text-white/90 transition-colors",children:"Instagram"})]})]}),Y.jsxs("a",{href:"https://facebook.com/Thirstyy",target:"_blank",rel:"noopener noreferrer",className:"group relative",children:[Y.jsx("div",{className:"absolute inset-0 bg-blue-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"}),Y.jsxs("div",{className:"relative transition-all duration-300 p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm group-hover:scale-110 group-hover:border-blue-500/50",children:[Y.jsx("i",{className:"fa-brands fa-facebook-f text-4xl text-blue-500 group-hover:text-white transition-all group-hover:scale-110"}),Y.jsx("p",{className:"text-white/60 text-xs mt-2 group-hover:text-white/90 transition-colors",children:"Facebook"})]})]}),Y.jsxs("a",{href:"https://www.tiktok.com/hfthr27",target:"_blank",rel:"noopener noreferrer",className:"group relative",children:[Y.jsx("div",{className:"absolute inset-0 bg-cyan-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"}),Y.jsxs("div",{className:"relative transition-all duration-300 p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm group-hover:scale-110 group-hover:border-cyan-400/50",children:[Y.jsx("i",{className:"fa-brands fa-tiktok text-4xl text-white group-hover:text-cyan-400 transition-all group-hover:scale-110"}),Y.jsx("p",{className:"text-white/60 text-xs mt-2 group-hover:text-white/90 transition-colors",children:"TikTok"})]})]})]}),Y.jsxs("div",{className:"mt-16 relative",children:[Y.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-purple-500/10 to-cyan-400/10 rounded-2xl blur-2xl"}),Y.jsxs("div",{className:"relative border border-cyan-400/20 rounded-2xl p-8 bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-300",children:[Y.jsx("p",{className:"text-white/80 text-lg mb-4",children:"Mari berkolaborasi dan berdiskusi! 🤝"}),Y.jsx("p",{className:"text-white/60 text-sm",children:"Saya terbuka untuk project baru, diskusi teknologi, atau sekadar bertukar pikiran."})]})]})]})]}),Y.jsx("footer",{className:"relative py-8 border-t border-white/10 bg-slate-900/50 backdrop-blur-sm",children:Y.jsx("div",{className:"w-full max-w-[1200px] px-6 mx-auto text-center",children:Y.jsxs("p",{className:"text-white/50 text-sm",children:["© 2025 Thoriq Al-Kautsar. Made with",Y.jsx("span",{className:"text-cyan-400",children:"React"})]})})})]})}X_.createRoot(document.getElementById("root")).render(Y.jsx(Y0.StrictMode,{children:Y.jsxs("div",{className:"container mx-auto px-6",children:[Y.jsx(W0,{}),Y.jsx(zC,{})]})}));
