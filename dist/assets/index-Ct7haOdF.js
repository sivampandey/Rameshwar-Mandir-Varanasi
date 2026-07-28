function v_(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const a=Object.getOwnPropertyDescriptor(i,r);a&&Object.defineProperty(t,r,a.get?a:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();function __(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var sm={exports:{}},Ml={},om={exports:{}},Ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ls=Symbol.for("react.element"),x_=Symbol.for("react.portal"),y_=Symbol.for("react.fragment"),S_=Symbol.for("react.strict_mode"),E_=Symbol.for("react.profiler"),M_=Symbol.for("react.provider"),T_=Symbol.for("react.context"),w_=Symbol.for("react.forward_ref"),A_=Symbol.for("react.suspense"),R_=Symbol.for("react.memo"),C_=Symbol.for("react.lazy"),_h=Symbol.iterator;function b_(t){return t===null||typeof t!="object"?null:(t=_h&&t[_h]||t["@@iterator"],typeof t=="function"?t:null)}var lm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},cm=Object.assign,um={};function Na(t,e,n){this.props=t,this.context=e,this.refs=um,this.updater=n||lm}Na.prototype.isReactComponent={};Na.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Na.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function dm(){}dm.prototype=Na.prototype;function dd(t,e,n){this.props=t,this.context=e,this.refs=um,this.updater=n||lm}var hd=dd.prototype=new dm;hd.constructor=dd;cm(hd,Na.prototype);hd.isPureReactComponent=!0;var xh=Array.isArray,hm=Object.prototype.hasOwnProperty,fd={current:null},fm={key:!0,ref:!0,__self:!0,__source:!0};function pm(t,e,n){var i,r={},a=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(a=""+e.key),e)hm.call(e,i)&&!fm.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Ls,type:t,key:a,ref:s,props:r,_owner:fd.current}}function P_(t,e){return{$$typeof:Ls,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function pd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ls}function N_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var yh=/\/+/g;function ql(t,e){return typeof t=="object"&&t!==null&&t.key!=null?N_(""+t.key):e.toString(36)}function Do(t,e,n,i,r){var a=typeof t;(a==="undefined"||a==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Ls:case x_:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+ql(s,0):i,xh(r)?(n="",t!=null&&(n=t.replace(yh,"$&/")+"/"),Do(r,e,n,"",function(c){return c})):r!=null&&(pd(r)&&(r=P_(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(yh,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",xh(t))for(var o=0;o<t.length;o++){a=t[o];var l=i+ql(a,o);s+=Do(a,e,n,l,r)}else if(l=b_(t),typeof l=="function")for(t=l.call(t),o=0;!(a=t.next()).done;)a=a.value,l=i+ql(a,o++),s+=Do(a,e,n,l,r);else if(a==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Ws(t,e,n){if(t==null)return t;var i=[],r=0;return Do(t,i,"","",function(a){return e.call(n,a,r++)}),i}function L_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Yt={current:null},Uo={transition:null},D_={ReactCurrentDispatcher:Yt,ReactCurrentBatchConfig:Uo,ReactCurrentOwner:fd};function mm(){throw Error("act(...) is not supported in production builds of React.")}Ve.Children={map:Ws,forEach:function(t,e,n){Ws(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ws(t,function(){e++}),e},toArray:function(t){return Ws(t,function(e){return e})||[]},only:function(t){if(!pd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ve.Component=Na;Ve.Fragment=y_;Ve.Profiler=E_;Ve.PureComponent=dd;Ve.StrictMode=S_;Ve.Suspense=A_;Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D_;Ve.act=mm;Ve.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=cm({},t.props),r=t.key,a=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(a=e.ref,s=fd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)hm.call(e,l)&&!fm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Ls,type:t.type,key:r,ref:a,props:i,_owner:s}};Ve.createContext=function(t){return t={$$typeof:T_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:M_,_context:t},t.Consumer=t};Ve.createElement=pm;Ve.createFactory=function(t){var e=pm.bind(null,t);return e.type=t,e};Ve.createRef=function(){return{current:null}};Ve.forwardRef=function(t){return{$$typeof:w_,render:t}};Ve.isValidElement=pd;Ve.lazy=function(t){return{$$typeof:C_,_payload:{_status:-1,_result:t},_init:L_}};Ve.memo=function(t,e){return{$$typeof:R_,type:t,compare:e===void 0?null:e}};Ve.startTransition=function(t){var e=Uo.transition;Uo.transition={};try{t()}finally{Uo.transition=e}};Ve.unstable_act=mm;Ve.useCallback=function(t,e){return Yt.current.useCallback(t,e)};Ve.useContext=function(t){return Yt.current.useContext(t)};Ve.useDebugValue=function(){};Ve.useDeferredValue=function(t){return Yt.current.useDeferredValue(t)};Ve.useEffect=function(t,e){return Yt.current.useEffect(t,e)};Ve.useId=function(){return Yt.current.useId()};Ve.useImperativeHandle=function(t,e,n){return Yt.current.useImperativeHandle(t,e,n)};Ve.useInsertionEffect=function(t,e){return Yt.current.useInsertionEffect(t,e)};Ve.useLayoutEffect=function(t,e){return Yt.current.useLayoutEffect(t,e)};Ve.useMemo=function(t,e){return Yt.current.useMemo(t,e)};Ve.useReducer=function(t,e,n){return Yt.current.useReducer(t,e,n)};Ve.useRef=function(t){return Yt.current.useRef(t)};Ve.useState=function(t){return Yt.current.useState(t)};Ve.useSyncExternalStore=function(t,e,n){return Yt.current.useSyncExternalStore(t,e,n)};Ve.useTransition=function(){return Yt.current.useTransition()};Ve.version="18.3.1";om.exports=Ve;var re=om.exports;const gm=__(re),U_=v_({__proto__:null,default:gm},[re]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I_=re,F_=Symbol.for("react.element"),O_=Symbol.for("react.fragment"),k_=Object.prototype.hasOwnProperty,B_=I_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,z_={key:!0,ref:!0,__self:!0,__source:!0};function vm(t,e,n){var i,r={},a=null,s=null;n!==void 0&&(a=""+n),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)k_.call(e,i)&&!z_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:F_,type:t,key:a,ref:s,props:r,_owner:B_.current}}Ml.Fragment=O_;Ml.jsx=vm;Ml.jsxs=vm;sm.exports=Ml;var u=sm.exports,iu={},_m={exports:{}},pn={},xm={exports:{}},ym={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,F){var V=P.length;P.push(F);e:for(;0<V;){var K=V-1>>>1,se=P[K];if(0<r(se,F))P[K]=F,P[V]=se,V=K;else break e}}function n(P){return P.length===0?null:P[0]}function i(P){if(P.length===0)return null;var F=P[0],V=P.pop();if(V!==F){P[0]=V;e:for(var K=0,se=P.length,Ae=se>>>1;K<Ae;){var H=2*(K+1)-1,Z=P[H],ue=H+1,Ee=P[ue];if(0>r(Z,V))ue<se&&0>r(Ee,Z)?(P[K]=Ee,P[ue]=V,K=ue):(P[K]=Z,P[H]=V,K=H);else if(ue<se&&0>r(Ee,V))P[K]=Ee,P[ue]=V,K=ue;else break e}}return F}function r(P,F){var V=P.sortIndex-F.sortIndex;return V!==0?V:P.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var s=Date,o=s.now();t.unstable_now=function(){return s.now()-o}}var l=[],c=[],h=1,f=null,p=3,g=!1,x=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(P){for(var F=n(c);F!==null;){if(F.callback===null)i(c);else if(F.startTime<=P)i(c),F.sortIndex=F.expirationTime,e(l,F);else break;F=n(c)}}function M(P){if(y=!1,v(P),!x)if(n(l)!==null)x=!0,W(b);else{var F=n(c);F!==null&&q(M,F.startTime-P)}}function b(P,F){x=!1,y&&(y=!1,d(D),D=-1),g=!0;var V=p;try{for(v(F),f=n(l);f!==null&&(!(f.expirationTime>F)||P&&!C());){var K=f.callback;if(typeof K=="function"){f.callback=null,p=f.priorityLevel;var se=K(f.expirationTime<=F);F=t.unstable_now(),typeof se=="function"?f.callback=se:f===n(l)&&i(l),v(F)}else i(l);f=n(l)}if(f!==null)var Ae=!0;else{var H=n(c);H!==null&&q(M,H.startTime-F),Ae=!1}return Ae}finally{f=null,p=V,g=!1}}var R=!1,w=null,D=-1,$=5,S=-1;function C(){return!(t.unstable_now()-S<$)}function ne(){if(w!==null){var P=t.unstable_now();S=P;var F=!0;try{F=w(!0,P)}finally{F?J():(R=!1,w=null)}}else R=!1}var J;if(typeof _=="function")J=function(){_(ne)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,X=L.port2;L.port1.onmessage=ne,J=function(){X.postMessage(null)}}else J=function(){m(ne,0)};function W(P){w=P,R||(R=!0,J())}function q(P,F){D=m(function(){P(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){x||g||(x=!0,W(b))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(p){case 1:case 2:case 3:var F=3;break;default:F=p}var V=p;p=F;try{return P()}finally{p=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,F){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var V=p;p=P;try{return F()}finally{p=V}},t.unstable_scheduleCallback=function(P,F,V){var K=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?K+V:K):V=K,P){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=V+se,P={id:h++,callback:F,priorityLevel:P,startTime:V,expirationTime:se,sortIndex:-1},V>K?(P.sortIndex=V,e(c,P),n(l)===null&&P===n(c)&&(y?(d(D),D=-1):y=!0,q(M,V-K))):(P.sortIndex=se,e(l,P),x||g||(x=!0,W(b))),P},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(P){var F=p;return function(){var V=p;p=F;try{return P.apply(this,arguments)}finally{p=V}}}})(ym);xm.exports=ym;var H_=xm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G_=re,fn=H_;function ee(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Sm=new Set,hs={};function Nr(t,e){ya(t,e),ya(t+"Capture",e)}function ya(t,e){for(hs[t]=e,t=0;t<e.length;t++)Sm.add(e[t])}var fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ru=Object.prototype.hasOwnProperty,V_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Sh={},Eh={};function j_(t){return ru.call(Eh,t)?!0:ru.call(Sh,t)?!1:V_.test(t)?Eh[t]=!0:(Sh[t]=!0,!1)}function W_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function X_(t,e,n,i){if(e===null||typeof e>"u"||W_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function $t(t,e,n,i,r,a,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=a,this.removeEmptyString=s}var Ut={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ut[t]=new $t(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ut[e]=new $t(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ut[t]=new $t(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ut[t]=new $t(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ut[t]=new $t(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ut[t]=new $t(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ut[t]=new $t(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ut[t]=new $t(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ut[t]=new $t(t,5,!1,t.toLowerCase(),null,!1,!1)});var md=/[\-:]([a-z])/g;function gd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(md,gd);Ut[e]=new $t(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(md,gd);Ut[e]=new $t(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(md,gd);Ut[e]=new $t(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ut[t]=new $t(t,1,!1,t.toLowerCase(),null,!1,!1)});Ut.xlinkHref=new $t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ut[t]=new $t(t,1,!1,t.toLowerCase(),null,!0,!0)});function vd(t,e,n,i){var r=Ut.hasOwnProperty(e)?Ut[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(X_(e,n,r,i)&&(n=null),i||r===null?j_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var _i=G_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xs=Symbol.for("react.element"),Qr=Symbol.for("react.portal"),Jr=Symbol.for("react.fragment"),_d=Symbol.for("react.strict_mode"),au=Symbol.for("react.profiler"),Em=Symbol.for("react.provider"),Mm=Symbol.for("react.context"),xd=Symbol.for("react.forward_ref"),su=Symbol.for("react.suspense"),ou=Symbol.for("react.suspense_list"),yd=Symbol.for("react.memo"),Ri=Symbol.for("react.lazy"),Tm=Symbol.for("react.offscreen"),Mh=Symbol.iterator;function Ba(t){return t===null||typeof t!="object"?null:(t=Mh&&t[Mh]||t["@@iterator"],typeof t=="function"?t:null)}var dt=Object.assign,Kl;function Ja(t){if(Kl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Kl=e&&e[1]||""}return`
`+Kl+t}var Zl=!1;function Ql(t,e){if(!t||Zl)return"";Zl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),a=i.stack.split(`
`),s=r.length-1,o=a.length-1;1<=s&&0<=o&&r[s]!==a[o];)o--;for(;1<=s&&0<=o;s--,o--)if(r[s]!==a[o]){if(s!==1||o!==1)do if(s--,o--,0>o||r[s]!==a[o]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=o);break}}}finally{Zl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ja(t):""}function Y_(t){switch(t.tag){case 5:return Ja(t.type);case 16:return Ja("Lazy");case 13:return Ja("Suspense");case 19:return Ja("SuspenseList");case 0:case 2:case 15:return t=Ql(t.type,!1),t;case 11:return t=Ql(t.type.render,!1),t;case 1:return t=Ql(t.type,!0),t;default:return""}}function lu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Jr:return"Fragment";case Qr:return"Portal";case au:return"Profiler";case _d:return"StrictMode";case su:return"Suspense";case ou:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Mm:return(t.displayName||"Context")+".Consumer";case Em:return(t._context.displayName||"Context")+".Provider";case xd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case yd:return e=t.displayName||null,e!==null?e:lu(t.type)||"Memo";case Ri:e=t._payload,t=t._init;try{return lu(t(e))}catch{}}return null}function $_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return lu(e);case 8:return e===_d?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function $i(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function wm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function q_(t){var e=wm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,a=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,a.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ys(t){t._valueTracker||(t._valueTracker=q_(t))}function Am(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=wm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Xo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function cu(t,e){var n=e.checked;return dt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Th(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=$i(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Rm(t,e){e=e.checked,e!=null&&vd(t,"checked",e,!1)}function uu(t,e){Rm(t,e);var n=$i(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?du(t,e.type,n):e.hasOwnProperty("defaultValue")&&du(t,e.type,$i(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function wh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function du(t,e,n){(e!=="number"||Xo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var es=Array.isArray;function ha(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+$i(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function hu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ee(91));return dt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ah(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ee(92));if(es(n)){if(1<n.length)throw Error(ee(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:$i(n)}}function Cm(t,e){var n=$i(e.value),i=$i(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Rh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function bm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?bm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var $s,Pm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for($s=$s||document.createElement("div"),$s.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=$s.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function fs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var is={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},K_=["Webkit","ms","Moz","O"];Object.keys(is).forEach(function(t){K_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),is[e]=is[t]})});function Nm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||is.hasOwnProperty(t)&&is[t]?(""+e).trim():e+"px"}function Lm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Nm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Z_=dt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pu(t,e){if(e){if(Z_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ee(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ee(62))}}function mu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gu=null;function Sd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var vu=null,fa=null,pa=null;function Ch(t){if(t=Is(t)){if(typeof vu!="function")throw Error(ee(280));var e=t.stateNode;e&&(e=Cl(e),vu(t.stateNode,t.type,e))}}function Dm(t){fa?pa?pa.push(t):pa=[t]:fa=t}function Um(){if(fa){var t=fa,e=pa;if(pa=fa=null,Ch(t),e)for(t=0;t<e.length;t++)Ch(e[t])}}function Im(t,e){return t(e)}function Fm(){}var Jl=!1;function Om(t,e,n){if(Jl)return t(e,n);Jl=!0;try{return Im(t,e,n)}finally{Jl=!1,(fa!==null||pa!==null)&&(Fm(),Um())}}function ps(t,e){var n=t.stateNode;if(n===null)return null;var i=Cl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ee(231,e,typeof n));return n}var _u=!1;if(fi)try{var za={};Object.defineProperty(za,"passive",{get:function(){_u=!0}}),window.addEventListener("test",za,za),window.removeEventListener("test",za,za)}catch{_u=!1}function Q_(t,e,n,i,r,a,s,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var rs=!1,Yo=null,$o=!1,xu=null,J_={onError:function(t){rs=!0,Yo=t}};function e0(t,e,n,i,r,a,s,o,l){rs=!1,Yo=null,Q_.apply(J_,arguments)}function t0(t,e,n,i,r,a,s,o,l){if(e0.apply(this,arguments),rs){if(rs){var c=Yo;rs=!1,Yo=null}else throw Error(ee(198));$o||($o=!0,xu=c)}}function Lr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function km(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function bh(t){if(Lr(t)!==t)throw Error(ee(188))}function n0(t){var e=t.alternate;if(!e){if(e=Lr(t),e===null)throw Error(ee(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var a=r.alternate;if(a===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===a.child){for(a=r.child;a;){if(a===n)return bh(r),t;if(a===i)return bh(r),e;a=a.sibling}throw Error(ee(188))}if(n.return!==i.return)n=r,i=a;else{for(var s=!1,o=r.child;o;){if(o===n){s=!0,n=r,i=a;break}if(o===i){s=!0,i=r,n=a;break}o=o.sibling}if(!s){for(o=a.child;o;){if(o===n){s=!0,n=a,i=r;break}if(o===i){s=!0,i=a,n=r;break}o=o.sibling}if(!s)throw Error(ee(189))}}if(n.alternate!==i)throw Error(ee(190))}if(n.tag!==3)throw Error(ee(188));return n.stateNode.current===n?t:e}function Bm(t){return t=n0(t),t!==null?zm(t):null}function zm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=zm(t);if(e!==null)return e;t=t.sibling}return null}var Hm=fn.unstable_scheduleCallback,Ph=fn.unstable_cancelCallback,i0=fn.unstable_shouldYield,r0=fn.unstable_requestPaint,mt=fn.unstable_now,a0=fn.unstable_getCurrentPriorityLevel,Ed=fn.unstable_ImmediatePriority,Gm=fn.unstable_UserBlockingPriority,qo=fn.unstable_NormalPriority,s0=fn.unstable_LowPriority,Vm=fn.unstable_IdlePriority,Tl=null,$n=null;function o0(t){if($n&&typeof $n.onCommitFiberRoot=="function")try{$n.onCommitFiberRoot(Tl,t,void 0,(t.current.flags&128)===128)}catch{}}var On=Math.clz32?Math.clz32:u0,l0=Math.log,c0=Math.LN2;function u0(t){return t>>>=0,t===0?32:31-(l0(t)/c0|0)|0}var qs=64,Ks=4194304;function ts(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ko(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,a=t.pingedLanes,s=n&268435455;if(s!==0){var o=s&~r;o!==0?i=ts(o):(a&=s,a!==0&&(i=ts(a)))}else s=n&~r,s!==0?i=ts(s):a!==0&&(i=ts(a));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,a=e&-e,r>=a||r===16&&(a&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-On(e),r=1<<n,i|=t[n],e&=~r;return i}function d0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function h0(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,a=t.pendingLanes;0<a;){var s=31-On(a),o=1<<s,l=r[s];l===-1?(!(o&n)||o&i)&&(r[s]=d0(o,e)):l<=e&&(t.expiredLanes|=o),a&=~o}}function yu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function jm(){var t=qs;return qs<<=1,!(qs&4194240)&&(qs=64),t}function ec(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ds(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-On(e),t[e]=n}function f0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-On(n),a=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~a}}function Md(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-On(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ze=0;function Wm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Xm,Td,Ym,$m,qm,Su=!1,Zs=[],Fi=null,Oi=null,ki=null,ms=new Map,gs=new Map,bi=[],p0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nh(t,e){switch(t){case"focusin":case"focusout":Fi=null;break;case"dragenter":case"dragleave":Oi=null;break;case"mouseover":case"mouseout":ki=null;break;case"pointerover":case"pointerout":ms.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":gs.delete(e.pointerId)}}function Ha(t,e,n,i,r,a){return t===null||t.nativeEvent!==a?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[r]},e!==null&&(e=Is(e),e!==null&&Td(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function m0(t,e,n,i,r){switch(e){case"focusin":return Fi=Ha(Fi,t,e,n,i,r),!0;case"dragenter":return Oi=Ha(Oi,t,e,n,i,r),!0;case"mouseover":return ki=Ha(ki,t,e,n,i,r),!0;case"pointerover":var a=r.pointerId;return ms.set(a,Ha(ms.get(a)||null,t,e,n,i,r)),!0;case"gotpointercapture":return a=r.pointerId,gs.set(a,Ha(gs.get(a)||null,t,e,n,i,r)),!0}return!1}function Km(t){var e=gr(t.target);if(e!==null){var n=Lr(e);if(n!==null){if(e=n.tag,e===13){if(e=km(n),e!==null){t.blockedOn=e,qm(t.priority,function(){Ym(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Io(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Eu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);gu=i,n.target.dispatchEvent(i),gu=null}else return e=Is(n),e!==null&&Td(e),t.blockedOn=n,!1;e.shift()}return!0}function Lh(t,e,n){Io(t)&&n.delete(e)}function g0(){Su=!1,Fi!==null&&Io(Fi)&&(Fi=null),Oi!==null&&Io(Oi)&&(Oi=null),ki!==null&&Io(ki)&&(ki=null),ms.forEach(Lh),gs.forEach(Lh)}function Ga(t,e){t.blockedOn===e&&(t.blockedOn=null,Su||(Su=!0,fn.unstable_scheduleCallback(fn.unstable_NormalPriority,g0)))}function vs(t){function e(r){return Ga(r,t)}if(0<Zs.length){Ga(Zs[0],t);for(var n=1;n<Zs.length;n++){var i=Zs[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Fi!==null&&Ga(Fi,t),Oi!==null&&Ga(Oi,t),ki!==null&&Ga(ki,t),ms.forEach(e),gs.forEach(e),n=0;n<bi.length;n++)i=bi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<bi.length&&(n=bi[0],n.blockedOn===null);)Km(n),n.blockedOn===null&&bi.shift()}var ma=_i.ReactCurrentBatchConfig,Zo=!0;function v0(t,e,n,i){var r=Ze,a=ma.transition;ma.transition=null;try{Ze=1,wd(t,e,n,i)}finally{Ze=r,ma.transition=a}}function _0(t,e,n,i){var r=Ze,a=ma.transition;ma.transition=null;try{Ze=4,wd(t,e,n,i)}finally{Ze=r,ma.transition=a}}function wd(t,e,n,i){if(Zo){var r=Eu(t,e,n,i);if(r===null)uc(t,e,i,Qo,n),Nh(t,i);else if(m0(r,t,e,n,i))i.stopPropagation();else if(Nh(t,i),e&4&&-1<p0.indexOf(t)){for(;r!==null;){var a=Is(r);if(a!==null&&Xm(a),a=Eu(t,e,n,i),a===null&&uc(t,e,i,Qo,n),a===r)break;r=a}r!==null&&i.stopPropagation()}else uc(t,e,i,null,n)}}var Qo=null;function Eu(t,e,n,i){if(Qo=null,t=Sd(i),t=gr(t),t!==null)if(e=Lr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=km(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Qo=t,null}function Zm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(a0()){case Ed:return 1;case Gm:return 4;case qo:case s0:return 16;case Vm:return 536870912;default:return 16}default:return 16}}var Li=null,Ad=null,Fo=null;function Qm(){if(Fo)return Fo;var t,e=Ad,n=e.length,i,r="value"in Li?Li.value:Li.textContent,a=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[a-i];i++);return Fo=r.slice(t,1<i?1-i:void 0)}function Oo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Qs(){return!0}function Dh(){return!1}function mn(t){function e(n,i,r,a,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Qs:Dh,this.isPropagationStopped=Dh,this}return dt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Qs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Qs)},persist:function(){},isPersistent:Qs}),e}var La={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rd=mn(La),Us=dt({},La,{view:0,detail:0}),x0=mn(Us),tc,nc,Va,wl=dt({},Us,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Va&&(Va&&t.type==="mousemove"?(tc=t.screenX-Va.screenX,nc=t.screenY-Va.screenY):nc=tc=0,Va=t),tc)},movementY:function(t){return"movementY"in t?t.movementY:nc}}),Uh=mn(wl),y0=dt({},wl,{dataTransfer:0}),S0=mn(y0),E0=dt({},Us,{relatedTarget:0}),ic=mn(E0),M0=dt({},La,{animationName:0,elapsedTime:0,pseudoElement:0}),T0=mn(M0),w0=dt({},La,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),A0=mn(w0),R0=dt({},La,{data:0}),Ih=mn(R0),C0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},b0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},P0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function N0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=P0[t])?!!e[t]:!1}function Cd(){return N0}var L0=dt({},Us,{key:function(t){if(t.key){var e=C0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Oo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?b0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cd,charCode:function(t){return t.type==="keypress"?Oo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Oo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),D0=mn(L0),U0=dt({},wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fh=mn(U0),I0=dt({},Us,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cd}),F0=mn(I0),O0=dt({},La,{propertyName:0,elapsedTime:0,pseudoElement:0}),k0=mn(O0),B0=dt({},wl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),z0=mn(B0),H0=[9,13,27,32],bd=fi&&"CompositionEvent"in window,as=null;fi&&"documentMode"in document&&(as=document.documentMode);var G0=fi&&"TextEvent"in window&&!as,Jm=fi&&(!bd||as&&8<as&&11>=as),Oh=" ",kh=!1;function eg(t,e){switch(t){case"keyup":return H0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ea=!1;function V0(t,e){switch(t){case"compositionend":return tg(e);case"keypress":return e.which!==32?null:(kh=!0,Oh);case"textInput":return t=e.data,t===Oh&&kh?null:t;default:return null}}function j0(t,e){if(ea)return t==="compositionend"||!bd&&eg(t,e)?(t=Qm(),Fo=Ad=Li=null,ea=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Jm&&e.locale!=="ko"?null:e.data;default:return null}}var W0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!W0[t.type]:e==="textarea"}function ng(t,e,n,i){Dm(i),e=Jo(e,"onChange"),0<e.length&&(n=new Rd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ss=null,_s=null;function X0(t){fg(t,0)}function Al(t){var e=ia(t);if(Am(e))return t}function Y0(t,e){if(t==="change")return e}var ig=!1;if(fi){var rc;if(fi){var ac="oninput"in document;if(!ac){var zh=document.createElement("div");zh.setAttribute("oninput","return;"),ac=typeof zh.oninput=="function"}rc=ac}else rc=!1;ig=rc&&(!document.documentMode||9<document.documentMode)}function Hh(){ss&&(ss.detachEvent("onpropertychange",rg),_s=ss=null)}function rg(t){if(t.propertyName==="value"&&Al(_s)){var e=[];ng(e,_s,t,Sd(t)),Om(X0,e)}}function $0(t,e,n){t==="focusin"?(Hh(),ss=e,_s=n,ss.attachEvent("onpropertychange",rg)):t==="focusout"&&Hh()}function q0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Al(_s)}function K0(t,e){if(t==="click")return Al(e)}function Z0(t,e){if(t==="input"||t==="change")return Al(e)}function Q0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Bn=typeof Object.is=="function"?Object.is:Q0;function xs(t,e){if(Bn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!ru.call(e,r)||!Bn(t[r],e[r]))return!1}return!0}function Gh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vh(t,e){var n=Gh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Gh(n)}}function ag(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ag(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function sg(){for(var t=window,e=Xo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Xo(t.document)}return e}function Pd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function J0(t){var e=sg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ag(n.ownerDocument.documentElement,n)){if(i!==null&&Pd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,a=Math.min(i.start,r);i=i.end===void 0?a:Math.min(i.end,r),!t.extend&&a>i&&(r=i,i=a,a=r),r=Vh(n,a);var s=Vh(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),a>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ex=fi&&"documentMode"in document&&11>=document.documentMode,ta=null,Mu=null,os=null,Tu=!1;function jh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Tu||ta==null||ta!==Xo(i)||(i=ta,"selectionStart"in i&&Pd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),os&&xs(os,i)||(os=i,i=Jo(Mu,"onSelect"),0<i.length&&(e=new Rd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ta)))}function Js(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var na={animationend:Js("Animation","AnimationEnd"),animationiteration:Js("Animation","AnimationIteration"),animationstart:Js("Animation","AnimationStart"),transitionend:Js("Transition","TransitionEnd")},sc={},og={};fi&&(og=document.createElement("div").style,"AnimationEvent"in window||(delete na.animationend.animation,delete na.animationiteration.animation,delete na.animationstart.animation),"TransitionEvent"in window||delete na.transitionend.transition);function Rl(t){if(sc[t])return sc[t];if(!na[t])return t;var e=na[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in og)return sc[t]=e[n];return t}var lg=Rl("animationend"),cg=Rl("animationiteration"),ug=Rl("animationstart"),dg=Rl("transitionend"),hg=new Map,Wh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qi(t,e){hg.set(t,e),Nr(e,[t])}for(var oc=0;oc<Wh.length;oc++){var lc=Wh[oc],tx=lc.toLowerCase(),nx=lc[0].toUpperCase()+lc.slice(1);Qi(tx,"on"+nx)}Qi(lg,"onAnimationEnd");Qi(cg,"onAnimationIteration");Qi(ug,"onAnimationStart");Qi("dblclick","onDoubleClick");Qi("focusin","onFocus");Qi("focusout","onBlur");Qi(dg,"onTransitionEnd");ya("onMouseEnter",["mouseout","mouseover"]);ya("onMouseLeave",["mouseout","mouseover"]);ya("onPointerEnter",["pointerout","pointerover"]);ya("onPointerLeave",["pointerout","pointerover"]);Nr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Nr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Nr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Nr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Nr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Nr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ns="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ix=new Set("cancel close invalid load scroll toggle".split(" ").concat(ns));function Xh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,t0(i,e,void 0,t),t.currentTarget=null}function fg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var a=void 0;if(e)for(var s=i.length-1;0<=s;s--){var o=i[s],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&r.isPropagationStopped())break e;Xh(r,o,c),a=l}else for(s=0;s<i.length;s++){if(o=i[s],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&r.isPropagationStopped())break e;Xh(r,o,c),a=l}}}if($o)throw t=xu,$o=!1,xu=null,t}function nt(t,e){var n=e[bu];n===void 0&&(n=e[bu]=new Set);var i=t+"__bubble";n.has(i)||(pg(e,t,2,!1),n.add(i))}function cc(t,e,n){var i=0;e&&(i|=4),pg(n,t,i,e)}var eo="_reactListening"+Math.random().toString(36).slice(2);function ys(t){if(!t[eo]){t[eo]=!0,Sm.forEach(function(n){n!=="selectionchange"&&(ix.has(n)||cc(n,!1,t),cc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[eo]||(e[eo]=!0,cc("selectionchange",!1,e))}}function pg(t,e,n,i){switch(Zm(e)){case 1:var r=v0;break;case 4:r=_0;break;default:r=wd}n=r.bind(null,e,n,t),r=void 0,!_u||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function uc(t,e,n,i,r){var a=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;o!==null;){if(s=gr(o),s===null)return;if(l=s.tag,l===5||l===6){i=a=s;continue e}o=o.parentNode}}i=i.return}Om(function(){var c=a,h=Sd(n),f=[];e:{var p=hg.get(t);if(p!==void 0){var g=Rd,x=t;switch(t){case"keypress":if(Oo(n)===0)break e;case"keydown":case"keyup":g=D0;break;case"focusin":x="focus",g=ic;break;case"focusout":x="blur",g=ic;break;case"beforeblur":case"afterblur":g=ic;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Uh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=S0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=F0;break;case lg:case cg:case ug:g=T0;break;case dg:g=k0;break;case"scroll":g=x0;break;case"wheel":g=z0;break;case"copy":case"cut":case"paste":g=A0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Fh}var y=(e&4)!==0,m=!y&&t==="scroll",d=y?p!==null?p+"Capture":null:p;y=[];for(var _=c,v;_!==null;){v=_;var M=v.stateNode;if(v.tag===5&&M!==null&&(v=M,d!==null&&(M=ps(_,d),M!=null&&y.push(Ss(_,M,v)))),m)break;_=_.return}0<y.length&&(p=new g(p,x,null,n,h),f.push({event:p,listeners:y}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",p&&n!==gu&&(x=n.relatedTarget||n.fromElement)&&(gr(x)||x[pi]))break e;if((g||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,g?(x=n.relatedTarget||n.toElement,g=c,x=x?gr(x):null,x!==null&&(m=Lr(x),x!==m||x.tag!==5&&x.tag!==6)&&(x=null)):(g=null,x=c),g!==x)){if(y=Uh,M="onMouseLeave",d="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(y=Fh,M="onPointerLeave",d="onPointerEnter",_="pointer"),m=g==null?p:ia(g),v=x==null?p:ia(x),p=new y(M,_+"leave",g,n,h),p.target=m,p.relatedTarget=v,M=null,gr(h)===c&&(y=new y(d,_+"enter",x,n,h),y.target=v,y.relatedTarget=m,M=y),m=M,g&&x)t:{for(y=g,d=x,_=0,v=y;v;v=Ir(v))_++;for(v=0,M=d;M;M=Ir(M))v++;for(;0<_-v;)y=Ir(y),_--;for(;0<v-_;)d=Ir(d),v--;for(;_--;){if(y===d||d!==null&&y===d.alternate)break t;y=Ir(y),d=Ir(d)}y=null}else y=null;g!==null&&Yh(f,p,g,y,!1),x!==null&&m!==null&&Yh(f,m,x,y,!0)}}e:{if(p=c?ia(c):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var b=Y0;else if(Bh(p))if(ig)b=Z0;else{b=q0;var R=$0}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(b=K0);if(b&&(b=b(t,c))){ng(f,b,n,h);break e}R&&R(t,p,c),t==="focusout"&&(R=p._wrapperState)&&R.controlled&&p.type==="number"&&du(p,"number",p.value)}switch(R=c?ia(c):window,t){case"focusin":(Bh(R)||R.contentEditable==="true")&&(ta=R,Mu=c,os=null);break;case"focusout":os=Mu=ta=null;break;case"mousedown":Tu=!0;break;case"contextmenu":case"mouseup":case"dragend":Tu=!1,jh(f,n,h);break;case"selectionchange":if(ex)break;case"keydown":case"keyup":jh(f,n,h)}var w;if(bd)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else ea?eg(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(Jm&&n.locale!=="ko"&&(ea||D!=="onCompositionStart"?D==="onCompositionEnd"&&ea&&(w=Qm()):(Li=h,Ad="value"in Li?Li.value:Li.textContent,ea=!0)),R=Jo(c,D),0<R.length&&(D=new Ih(D,t,null,n,h),f.push({event:D,listeners:R}),w?D.data=w:(w=tg(n),w!==null&&(D.data=w)))),(w=G0?V0(t,n):j0(t,n))&&(c=Jo(c,"onBeforeInput"),0<c.length&&(h=new Ih("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=w))}fg(f,e)})}function Ss(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Jo(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,a=r.stateNode;r.tag===5&&a!==null&&(r=a,a=ps(t,n),a!=null&&i.unshift(Ss(t,a,r)),a=ps(t,e),a!=null&&i.push(Ss(t,a,r))),t=t.return}return i}function Ir(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Yh(t,e,n,i,r){for(var a=e._reactName,s=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=ps(n,a),l!=null&&s.unshift(Ss(n,l,o))):r||(l=ps(n,a),l!=null&&s.push(Ss(n,l,o)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var rx=/\r\n?/g,ax=/\u0000|\uFFFD/g;function $h(t){return(typeof t=="string"?t:""+t).replace(rx,`
`).replace(ax,"")}function to(t,e,n){if(e=$h(e),$h(t)!==e&&n)throw Error(ee(425))}function el(){}var wu=null,Au=null;function Ru(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Cu=typeof setTimeout=="function"?setTimeout:void 0,sx=typeof clearTimeout=="function"?clearTimeout:void 0,qh=typeof Promise=="function"?Promise:void 0,ox=typeof queueMicrotask=="function"?queueMicrotask:typeof qh<"u"?function(t){return qh.resolve(null).then(t).catch(lx)}:Cu;function lx(t){setTimeout(function(){throw t})}function dc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),vs(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);vs(e)}function Bi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Kh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Da=Math.random().toString(36).slice(2),Xn="__reactFiber$"+Da,Es="__reactProps$"+Da,pi="__reactContainer$"+Da,bu="__reactEvents$"+Da,cx="__reactListeners$"+Da,ux="__reactHandles$"+Da;function gr(t){var e=t[Xn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[pi]||n[Xn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Kh(t);t!==null;){if(n=t[Xn])return n;t=Kh(t)}return e}t=n,n=t.parentNode}return null}function Is(t){return t=t[Xn]||t[pi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ia(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ee(33))}function Cl(t){return t[Es]||null}var Pu=[],ra=-1;function Ji(t){return{current:t}}function rt(t){0>ra||(t.current=Pu[ra],Pu[ra]=null,ra--)}function tt(t,e){ra++,Pu[ra]=t.current,t.current=e}var qi={},Ht=Ji(qi),en=Ji(!1),wr=qi;function Sa(t,e){var n=t.type.contextTypes;if(!n)return qi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},a;for(a in n)r[a]=e[a];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function tn(t){return t=t.childContextTypes,t!=null}function tl(){rt(en),rt(Ht)}function Zh(t,e,n){if(Ht.current!==qi)throw Error(ee(168));tt(Ht,e),tt(en,n)}function mg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ee(108,$_(t)||"Unknown",r));return dt({},n,i)}function nl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||qi,wr=Ht.current,tt(Ht,t),tt(en,en.current),!0}function Qh(t,e,n){var i=t.stateNode;if(!i)throw Error(ee(169));n?(t=mg(t,e,wr),i.__reactInternalMemoizedMergedChildContext=t,rt(en),rt(Ht),tt(Ht,t)):rt(en),tt(en,n)}var ai=null,bl=!1,hc=!1;function gg(t){ai===null?ai=[t]:ai.push(t)}function dx(t){bl=!0,gg(t)}function er(){if(!hc&&ai!==null){hc=!0;var t=0,e=Ze;try{var n=ai;for(Ze=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ai=null,bl=!1}catch(r){throw ai!==null&&(ai=ai.slice(t+1)),Hm(Ed,er),r}finally{Ze=e,hc=!1}}return null}var aa=[],sa=0,il=null,rl=0,yn=[],Sn=0,Ar=null,li=1,ci="";function ur(t,e){aa[sa++]=rl,aa[sa++]=il,il=t,rl=e}function vg(t,e,n){yn[Sn++]=li,yn[Sn++]=ci,yn[Sn++]=Ar,Ar=t;var i=li;t=ci;var r=32-On(i)-1;i&=~(1<<r),n+=1;var a=32-On(e)+r;if(30<a){var s=r-r%5;a=(i&(1<<s)-1).toString(32),i>>=s,r-=s,li=1<<32-On(e)+r|n<<r|i,ci=a+t}else li=1<<a|n<<r|i,ci=t}function Nd(t){t.return!==null&&(ur(t,1),vg(t,1,0))}function Ld(t){for(;t===il;)il=aa[--sa],aa[sa]=null,rl=aa[--sa],aa[sa]=null;for(;t===Ar;)Ar=yn[--Sn],yn[Sn]=null,ci=yn[--Sn],yn[Sn]=null,li=yn[--Sn],yn[Sn]=null}var hn=null,dn=null,ot=!1,Un=null;function _g(t,e){var n=Mn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Jh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,hn=t,dn=Bi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,hn=t,dn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ar!==null?{id:li,overflow:ci}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Mn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,hn=t,dn=null,!0):!1;default:return!1}}function Nu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Lu(t){if(ot){var e=dn;if(e){var n=e;if(!Jh(t,e)){if(Nu(t))throw Error(ee(418));e=Bi(n.nextSibling);var i=hn;e&&Jh(t,e)?_g(i,n):(t.flags=t.flags&-4097|2,ot=!1,hn=t)}}else{if(Nu(t))throw Error(ee(418));t.flags=t.flags&-4097|2,ot=!1,hn=t}}}function ef(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;hn=t}function no(t){if(t!==hn)return!1;if(!ot)return ef(t),ot=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ru(t.type,t.memoizedProps)),e&&(e=dn)){if(Nu(t))throw xg(),Error(ee(418));for(;e;)_g(t,e),e=Bi(e.nextSibling)}if(ef(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ee(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){dn=Bi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}dn=null}}else dn=hn?Bi(t.stateNode.nextSibling):null;return!0}function xg(){for(var t=dn;t;)t=Bi(t.nextSibling)}function Ea(){dn=hn=null,ot=!1}function Dd(t){Un===null?Un=[t]:Un.push(t)}var hx=_i.ReactCurrentBatchConfig;function ja(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ee(309));var i=n.stateNode}if(!i)throw Error(ee(147,t));var r=i,a=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===a?e.ref:(e=function(s){var o=r.refs;s===null?delete o[a]:o[a]=s},e._stringRef=a,e)}if(typeof t!="string")throw Error(ee(284));if(!n._owner)throw Error(ee(290,t))}return t}function io(t,e){throw t=Object.prototype.toString.call(e),Error(ee(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function tf(t){var e=t._init;return e(t._payload)}function yg(t){function e(d,_){if(t){var v=d.deletions;v===null?(d.deletions=[_],d.flags|=16):v.push(_)}}function n(d,_){if(!t)return null;for(;_!==null;)e(d,_),_=_.sibling;return null}function i(d,_){for(d=new Map;_!==null;)_.key!==null?d.set(_.key,_):d.set(_.index,_),_=_.sibling;return d}function r(d,_){return d=Vi(d,_),d.index=0,d.sibling=null,d}function a(d,_,v){return d.index=v,t?(v=d.alternate,v!==null?(v=v.index,v<_?(d.flags|=2,_):v):(d.flags|=2,_)):(d.flags|=1048576,_)}function s(d){return t&&d.alternate===null&&(d.flags|=2),d}function o(d,_,v,M){return _===null||_.tag!==6?(_=xc(v,d.mode,M),_.return=d,_):(_=r(_,v),_.return=d,_)}function l(d,_,v,M){var b=v.type;return b===Jr?h(d,_,v.props.children,M,v.key):_!==null&&(_.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Ri&&tf(b)===_.type)?(M=r(_,v.props),M.ref=ja(d,_,v),M.return=d,M):(M=jo(v.type,v.key,v.props,null,d.mode,M),M.ref=ja(d,_,v),M.return=d,M)}function c(d,_,v,M){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=yc(v,d.mode,M),_.return=d,_):(_=r(_,v.children||[]),_.return=d,_)}function h(d,_,v,M,b){return _===null||_.tag!==7?(_=Sr(v,d.mode,M,b),_.return=d,_):(_=r(_,v),_.return=d,_)}function f(d,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=xc(""+_,d.mode,v),_.return=d,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Xs:return v=jo(_.type,_.key,_.props,null,d.mode,v),v.ref=ja(d,null,_),v.return=d,v;case Qr:return _=yc(_,d.mode,v),_.return=d,_;case Ri:var M=_._init;return f(d,M(_._payload),v)}if(es(_)||Ba(_))return _=Sr(_,d.mode,v,null),_.return=d,_;io(d,_)}return null}function p(d,_,v,M){var b=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return b!==null?null:o(d,_,""+v,M);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Xs:return v.key===b?l(d,_,v,M):null;case Qr:return v.key===b?c(d,_,v,M):null;case Ri:return b=v._init,p(d,_,b(v._payload),M)}if(es(v)||Ba(v))return b!==null?null:h(d,_,v,M,null);io(d,v)}return null}function g(d,_,v,M,b){if(typeof M=="string"&&M!==""||typeof M=="number")return d=d.get(v)||null,o(_,d,""+M,b);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Xs:return d=d.get(M.key===null?v:M.key)||null,l(_,d,M,b);case Qr:return d=d.get(M.key===null?v:M.key)||null,c(_,d,M,b);case Ri:var R=M._init;return g(d,_,v,R(M._payload),b)}if(es(M)||Ba(M))return d=d.get(v)||null,h(_,d,M,b,null);io(_,M)}return null}function x(d,_,v,M){for(var b=null,R=null,w=_,D=_=0,$=null;w!==null&&D<v.length;D++){w.index>D?($=w,w=null):$=w.sibling;var S=p(d,w,v[D],M);if(S===null){w===null&&(w=$);break}t&&w&&S.alternate===null&&e(d,w),_=a(S,_,D),R===null?b=S:R.sibling=S,R=S,w=$}if(D===v.length)return n(d,w),ot&&ur(d,D),b;if(w===null){for(;D<v.length;D++)w=f(d,v[D],M),w!==null&&(_=a(w,_,D),R===null?b=w:R.sibling=w,R=w);return ot&&ur(d,D),b}for(w=i(d,w);D<v.length;D++)$=g(w,d,D,v[D],M),$!==null&&(t&&$.alternate!==null&&w.delete($.key===null?D:$.key),_=a($,_,D),R===null?b=$:R.sibling=$,R=$);return t&&w.forEach(function(C){return e(d,C)}),ot&&ur(d,D),b}function y(d,_,v,M){var b=Ba(v);if(typeof b!="function")throw Error(ee(150));if(v=b.call(v),v==null)throw Error(ee(151));for(var R=b=null,w=_,D=_=0,$=null,S=v.next();w!==null&&!S.done;D++,S=v.next()){w.index>D?($=w,w=null):$=w.sibling;var C=p(d,w,S.value,M);if(C===null){w===null&&(w=$);break}t&&w&&C.alternate===null&&e(d,w),_=a(C,_,D),R===null?b=C:R.sibling=C,R=C,w=$}if(S.done)return n(d,w),ot&&ur(d,D),b;if(w===null){for(;!S.done;D++,S=v.next())S=f(d,S.value,M),S!==null&&(_=a(S,_,D),R===null?b=S:R.sibling=S,R=S);return ot&&ur(d,D),b}for(w=i(d,w);!S.done;D++,S=v.next())S=g(w,d,D,S.value,M),S!==null&&(t&&S.alternate!==null&&w.delete(S.key===null?D:S.key),_=a(S,_,D),R===null?b=S:R.sibling=S,R=S);return t&&w.forEach(function(ne){return e(d,ne)}),ot&&ur(d,D),b}function m(d,_,v,M){if(typeof v=="object"&&v!==null&&v.type===Jr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Xs:e:{for(var b=v.key,R=_;R!==null;){if(R.key===b){if(b=v.type,b===Jr){if(R.tag===7){n(d,R.sibling),_=r(R,v.props.children),_.return=d,d=_;break e}}else if(R.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Ri&&tf(b)===R.type){n(d,R.sibling),_=r(R,v.props),_.ref=ja(d,R,v),_.return=d,d=_;break e}n(d,R);break}else e(d,R);R=R.sibling}v.type===Jr?(_=Sr(v.props.children,d.mode,M,v.key),_.return=d,d=_):(M=jo(v.type,v.key,v.props,null,d.mode,M),M.ref=ja(d,_,v),M.return=d,d=M)}return s(d);case Qr:e:{for(R=v.key;_!==null;){if(_.key===R)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){n(d,_.sibling),_=r(_,v.children||[]),_.return=d,d=_;break e}else{n(d,_);break}else e(d,_);_=_.sibling}_=yc(v,d.mode,M),_.return=d,d=_}return s(d);case Ri:return R=v._init,m(d,_,R(v._payload),M)}if(es(v))return x(d,_,v,M);if(Ba(v))return y(d,_,v,M);io(d,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(n(d,_.sibling),_=r(_,v),_.return=d,d=_):(n(d,_),_=xc(v,d.mode,M),_.return=d,d=_),s(d)):n(d,_)}return m}var Ma=yg(!0),Sg=yg(!1),al=Ji(null),sl=null,oa=null,Ud=null;function Id(){Ud=oa=sl=null}function Fd(t){var e=al.current;rt(al),t._currentValue=e}function Du(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ga(t,e){sl=t,Ud=oa=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Jt=!0),t.firstContext=null)}function An(t){var e=t._currentValue;if(Ud!==t)if(t={context:t,memoizedValue:e,next:null},oa===null){if(sl===null)throw Error(ee(308));oa=t,sl.dependencies={lanes:0,firstContext:t}}else oa=oa.next=t;return e}var vr=null;function Od(t){vr===null?vr=[t]:vr.push(t)}function Eg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Od(e)):(n.next=r.next,r.next=n),e.interleaved=n,mi(t,i)}function mi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ci=!1;function kd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function hi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function zi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ye&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,mi(t,n)}return r=i.interleaved,r===null?(e.next=e,Od(i)):(e.next=r.next,r.next=e),i.interleaved=e,mi(t,n)}function ko(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Md(t,n)}}function nf(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?r=a=s:a=a.next=s,n=n.next}while(n!==null);a===null?r=a=e:a=a.next=e}else r=a=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:a,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ol(t,e,n,i){var r=t.updateQueue;Ci=!1;var a=r.firstBaseUpdate,s=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,s===null?a=c:s.next=c,s=l;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==s&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(a!==null){var f=r.baseState;s=0,h=c=l=null,o=a;do{var p=o.lane,g=o.eventTime;if((i&p)===p){h!==null&&(h=h.next={eventTime:g,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var x=t,y=o;switch(p=e,g=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){f=x.call(g,f,p);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,p=typeof x=="function"?x.call(g,f,p):x,p==null)break e;f=dt({},f,p);break e;case 2:Ci=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,p=r.effects,p===null?r.effects=[o]:p.push(o))}else g={eventTime:g,lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=g,l=f):h=h.next=g,s|=p;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;p=o,o=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);if(h===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else a===null&&(r.shared.lanes=0);Cr|=s,t.lanes=s,t.memoizedState=f}}function rf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ee(191,r));r.call(i)}}}var Fs={},qn=Ji(Fs),Ms=Ji(Fs),Ts=Ji(Fs);function _r(t){if(t===Fs)throw Error(ee(174));return t}function Bd(t,e){switch(tt(Ts,e),tt(Ms,t),tt(qn,Fs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:fu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=fu(e,t)}rt(qn),tt(qn,e)}function Ta(){rt(qn),rt(Ms),rt(Ts)}function Tg(t){_r(Ts.current);var e=_r(qn.current),n=fu(e,t.type);e!==n&&(tt(Ms,t),tt(qn,n))}function zd(t){Ms.current===t&&(rt(qn),rt(Ms))}var ct=Ji(0);function ll(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var fc=[];function Hd(){for(var t=0;t<fc.length;t++)fc[t]._workInProgressVersionPrimary=null;fc.length=0}var Bo=_i.ReactCurrentDispatcher,pc=_i.ReactCurrentBatchConfig,Rr=0,ut=null,St=null,Rt=null,cl=!1,ls=!1,ws=0,fx=0;function Ft(){throw Error(ee(321))}function Gd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Bn(t[n],e[n]))return!1;return!0}function Vd(t,e,n,i,r,a){if(Rr=a,ut=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Bo.current=t===null||t.memoizedState===null?vx:_x,t=n(i,r),ls){a=0;do{if(ls=!1,ws=0,25<=a)throw Error(ee(301));a+=1,Rt=St=null,e.updateQueue=null,Bo.current=xx,t=n(i,r)}while(ls)}if(Bo.current=ul,e=St!==null&&St.next!==null,Rr=0,Rt=St=ut=null,cl=!1,e)throw Error(ee(300));return t}function jd(){var t=ws!==0;return ws=0,t}function Vn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?ut.memoizedState=Rt=t:Rt=Rt.next=t,Rt}function Rn(){if(St===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=St.next;var e=Rt===null?ut.memoizedState:Rt.next;if(e!==null)Rt=e,St=t;else{if(t===null)throw Error(ee(310));St=t,t={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},Rt===null?ut.memoizedState=Rt=t:Rt=Rt.next=t}return Rt}function As(t,e){return typeof e=="function"?e(t):e}function mc(t){var e=Rn(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=St,r=i.baseQueue,a=n.pending;if(a!==null){if(r!==null){var s=r.next;r.next=a.next,a.next=s}i.baseQueue=r=a,n.pending=null}if(r!==null){a=r.next,i=i.baseState;var o=s=null,l=null,c=a;do{var h=c.lane;if((Rr&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=f,s=i):l=l.next=f,ut.lanes|=h,Cr|=h}c=c.next}while(c!==null&&c!==a);l===null?s=i:l.next=o,Bn(i,e.memoizedState)||(Jt=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do a=r.lane,ut.lanes|=a,Cr|=a,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function gc(t){var e=Rn(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,a=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do a=t(a,s.action),s=s.next;while(s!==r);Bn(a,e.memoizedState)||(Jt=!0),e.memoizedState=a,e.baseQueue===null&&(e.baseState=a),n.lastRenderedState=a}return[a,i]}function wg(){}function Ag(t,e){var n=ut,i=Rn(),r=e(),a=!Bn(i.memoizedState,r);if(a&&(i.memoizedState=r,Jt=!0),i=i.queue,Wd(bg.bind(null,n,i,t),[t]),i.getSnapshot!==e||a||Rt!==null&&Rt.memoizedState.tag&1){if(n.flags|=2048,Rs(9,Cg.bind(null,n,i,r,e),void 0,null),Ct===null)throw Error(ee(349));Rr&30||Rg(n,e,r)}return r}function Rg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Cg(t,e,n,i){e.value=n,e.getSnapshot=i,Pg(e)&&Ng(t)}function bg(t,e,n){return n(function(){Pg(e)&&Ng(t)})}function Pg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Bn(t,n)}catch{return!0}}function Ng(t){var e=mi(t,1);e!==null&&kn(e,t,1,-1)}function af(t){var e=Vn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:As,lastRenderedState:t},e.queue=t,t=t.dispatch=gx.bind(null,ut,t),[e.memoizedState,t]}function Rs(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Lg(){return Rn().memoizedState}function zo(t,e,n,i){var r=Vn();ut.flags|=t,r.memoizedState=Rs(1|e,n,void 0,i===void 0?null:i)}function Pl(t,e,n,i){var r=Rn();i=i===void 0?null:i;var a=void 0;if(St!==null){var s=St.memoizedState;if(a=s.destroy,i!==null&&Gd(i,s.deps)){r.memoizedState=Rs(e,n,a,i);return}}ut.flags|=t,r.memoizedState=Rs(1|e,n,a,i)}function sf(t,e){return zo(8390656,8,t,e)}function Wd(t,e){return Pl(2048,8,t,e)}function Dg(t,e){return Pl(4,2,t,e)}function Ug(t,e){return Pl(4,4,t,e)}function Ig(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Fg(t,e,n){return n=n!=null?n.concat([t]):null,Pl(4,4,Ig.bind(null,e,t),n)}function Xd(){}function Og(t,e){var n=Rn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Gd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function kg(t,e){var n=Rn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Gd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Bg(t,e,n){return Rr&21?(Bn(n,e)||(n=jm(),ut.lanes|=n,Cr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Jt=!0),t.memoizedState=n)}function px(t,e){var n=Ze;Ze=n!==0&&4>n?n:4,t(!0);var i=pc.transition;pc.transition={};try{t(!1),e()}finally{Ze=n,pc.transition=i}}function zg(){return Rn().memoizedState}function mx(t,e,n){var i=Gi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Hg(t))Gg(e,n);else if(n=Eg(t,e,n,i),n!==null){var r=Xt();kn(n,t,i,r),Vg(n,e,i)}}function gx(t,e,n){var i=Gi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Hg(t))Gg(e,r);else{var a=t.alternate;if(t.lanes===0&&(a===null||a.lanes===0)&&(a=e.lastRenderedReducer,a!==null))try{var s=e.lastRenderedState,o=a(s,n);if(r.hasEagerState=!0,r.eagerState=o,Bn(o,s)){var l=e.interleaved;l===null?(r.next=r,Od(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Eg(t,e,r,i),n!==null&&(r=Xt(),kn(n,t,i,r),Vg(n,e,i))}}function Hg(t){var e=t.alternate;return t===ut||e!==null&&e===ut}function Gg(t,e){ls=cl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Vg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Md(t,n)}}var ul={readContext:An,useCallback:Ft,useContext:Ft,useEffect:Ft,useImperativeHandle:Ft,useInsertionEffect:Ft,useLayoutEffect:Ft,useMemo:Ft,useReducer:Ft,useRef:Ft,useState:Ft,useDebugValue:Ft,useDeferredValue:Ft,useTransition:Ft,useMutableSource:Ft,useSyncExternalStore:Ft,useId:Ft,unstable_isNewReconciler:!1},vx={readContext:An,useCallback:function(t,e){return Vn().memoizedState=[t,e===void 0?null:e],t},useContext:An,useEffect:sf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,zo(4194308,4,Ig.bind(null,e,t),n)},useLayoutEffect:function(t,e){return zo(4194308,4,t,e)},useInsertionEffect:function(t,e){return zo(4,2,t,e)},useMemo:function(t,e){var n=Vn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Vn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=mx.bind(null,ut,t),[i.memoizedState,t]},useRef:function(t){var e=Vn();return t={current:t},e.memoizedState=t},useState:af,useDebugValue:Xd,useDeferredValue:function(t){return Vn().memoizedState=t},useTransition:function(){var t=af(!1),e=t[0];return t=px.bind(null,t[1]),Vn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ut,r=Vn();if(ot){if(n===void 0)throw Error(ee(407));n=n()}else{if(n=e(),Ct===null)throw Error(ee(349));Rr&30||Rg(i,e,n)}r.memoizedState=n;var a={value:n,getSnapshot:e};return r.queue=a,sf(bg.bind(null,i,a,t),[t]),i.flags|=2048,Rs(9,Cg.bind(null,i,a,n,e),void 0,null),n},useId:function(){var t=Vn(),e=Ct.identifierPrefix;if(ot){var n=ci,i=li;n=(i&~(1<<32-On(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ws++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=fx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},_x={readContext:An,useCallback:Og,useContext:An,useEffect:Wd,useImperativeHandle:Fg,useInsertionEffect:Dg,useLayoutEffect:Ug,useMemo:kg,useReducer:mc,useRef:Lg,useState:function(){return mc(As)},useDebugValue:Xd,useDeferredValue:function(t){var e=Rn();return Bg(e,St.memoizedState,t)},useTransition:function(){var t=mc(As)[0],e=Rn().memoizedState;return[t,e]},useMutableSource:wg,useSyncExternalStore:Ag,useId:zg,unstable_isNewReconciler:!1},xx={readContext:An,useCallback:Og,useContext:An,useEffect:Wd,useImperativeHandle:Fg,useInsertionEffect:Dg,useLayoutEffect:Ug,useMemo:kg,useReducer:gc,useRef:Lg,useState:function(){return gc(As)},useDebugValue:Xd,useDeferredValue:function(t){var e=Rn();return St===null?e.memoizedState=t:Bg(e,St.memoizedState,t)},useTransition:function(){var t=gc(As)[0],e=Rn().memoizedState;return[t,e]},useMutableSource:wg,useSyncExternalStore:Ag,useId:zg,unstable_isNewReconciler:!1};function Ln(t,e){if(t&&t.defaultProps){e=dt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Uu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:dt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Nl={isMounted:function(t){return(t=t._reactInternals)?Lr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Xt(),r=Gi(t),a=hi(i,r);a.payload=e,n!=null&&(a.callback=n),e=zi(t,a,r),e!==null&&(kn(e,t,r,i),ko(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Xt(),r=Gi(t),a=hi(i,r);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=zi(t,a,r),e!==null&&(kn(e,t,r,i),ko(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Xt(),i=Gi(t),r=hi(n,i);r.tag=2,e!=null&&(r.callback=e),e=zi(t,r,i),e!==null&&(kn(e,t,i,n),ko(e,t,i))}};function of(t,e,n,i,r,a,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,a,s):e.prototype&&e.prototype.isPureReactComponent?!xs(n,i)||!xs(r,a):!0}function jg(t,e,n){var i=!1,r=qi,a=e.contextType;return typeof a=="object"&&a!==null?a=An(a):(r=tn(e)?wr:Ht.current,i=e.contextTypes,a=(i=i!=null)?Sa(t,r):qi),e=new e(n,a),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Nl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=a),e}function lf(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Nl.enqueueReplaceState(e,e.state,null)}function Iu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},kd(t);var a=e.contextType;typeof a=="object"&&a!==null?r.context=An(a):(a=tn(e)?wr:Ht.current,r.context=Sa(t,a)),r.state=t.memoizedState,a=e.getDerivedStateFromProps,typeof a=="function"&&(Uu(t,e,a,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Nl.enqueueReplaceState(r,r.state,null),ol(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function wa(t,e){try{var n="",i=e;do n+=Y_(i),i=i.return;while(i);var r=n}catch(a){r=`
Error generating stack: `+a.message+`
`+a.stack}return{value:t,source:e,stack:r,digest:null}}function vc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Fu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var yx=typeof WeakMap=="function"?WeakMap:Map;function Wg(t,e,n){n=hi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){hl||(hl=!0,Xu=i),Fu(t,e)},n}function Xg(t,e,n){n=hi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Fu(t,e)}}var a=t.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Fu(t,e),typeof i!="function"&&(Hi===null?Hi=new Set([this]):Hi.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function cf(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new yx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Ux.bind(null,t,e,n),e.then(t,t))}function uf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function df(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=hi(-1,1),e.tag=2,zi(n,e,1))),n.lanes|=1),t)}var Sx=_i.ReactCurrentOwner,Jt=!1;function jt(t,e,n,i){e.child=t===null?Sg(e,null,n,i):Ma(e,t.child,n,i)}function hf(t,e,n,i,r){n=n.render;var a=e.ref;return ga(e,r),i=Vd(t,e,n,i,a,r),n=jd(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,gi(t,e,r)):(ot&&n&&Nd(e),e.flags|=1,jt(t,e,i,r),e.child)}function ff(t,e,n,i,r){if(t===null){var a=n.type;return typeof a=="function"&&!eh(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=a,Yg(t,e,a,i,r)):(t=jo(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(a=t.child,!(t.lanes&r)){var s=a.memoizedProps;if(n=n.compare,n=n!==null?n:xs,n(s,i)&&t.ref===e.ref)return gi(t,e,r)}return e.flags|=1,t=Vi(a,i),t.ref=e.ref,t.return=e,e.child=t}function Yg(t,e,n,i,r){if(t!==null){var a=t.memoizedProps;if(xs(a,i)&&t.ref===e.ref)if(Jt=!1,e.pendingProps=i=a,(t.lanes&r)!==0)t.flags&131072&&(Jt=!0);else return e.lanes=t.lanes,gi(t,e,r)}return Ou(t,e,n,i,r)}function $g(t,e,n){var i=e.pendingProps,r=i.children,a=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},tt(ca,un),un|=n;else{if(!(n&1073741824))return t=a!==null?a.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,tt(ca,un),un|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=a!==null?a.baseLanes:n,tt(ca,un),un|=i}else a!==null?(i=a.baseLanes|n,e.memoizedState=null):i=n,tt(ca,un),un|=i;return jt(t,e,r,n),e.child}function qg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ou(t,e,n,i,r){var a=tn(n)?wr:Ht.current;return a=Sa(e,a),ga(e,r),n=Vd(t,e,n,i,a,r),i=jd(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,gi(t,e,r)):(ot&&i&&Nd(e),e.flags|=1,jt(t,e,n,r),e.child)}function pf(t,e,n,i,r){if(tn(n)){var a=!0;nl(e)}else a=!1;if(ga(e,r),e.stateNode===null)Ho(t,e),jg(e,n,i),Iu(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,o=e.memoizedProps;s.props=o;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=An(c):(c=tn(n)?wr:Ht.current,c=Sa(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==i||l!==c)&&lf(e,s,i,c),Ci=!1;var p=e.memoizedState;s.state=p,ol(e,i,s,r),l=e.memoizedState,o!==i||p!==l||en.current||Ci?(typeof h=="function"&&(Uu(e,n,h,i),l=e.memoizedState),(o=Ci||of(e,n,o,i,p,l,c))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=c,i=o):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,Mg(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Ln(e.type,o),s.props=c,f=e.pendingProps,p=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=An(l):(l=tn(n)?wr:Ht.current,l=Sa(e,l));var g=n.getDerivedStateFromProps;(h=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==f||p!==l)&&lf(e,s,i,l),Ci=!1,p=e.memoizedState,s.state=p,ol(e,i,s,r);var x=e.memoizedState;o!==f||p!==x||en.current||Ci?(typeof g=="function"&&(Uu(e,n,g,i),x=e.memoizedState),(c=Ci||of(e,n,c,i,p,x,l)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,x,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,x,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),s.props=i,s.state=x,s.context=l,i=c):(typeof s.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),i=!1)}return ku(t,e,n,i,a,r)}function ku(t,e,n,i,r,a){qg(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&Qh(e,n,!1),gi(t,e,a);i=e.stateNode,Sx.current=e;var o=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=Ma(e,t.child,null,a),e.child=Ma(e,null,o,a)):jt(t,e,o,a),e.memoizedState=i.state,r&&Qh(e,n,!0),e.child}function Kg(t){var e=t.stateNode;e.pendingContext?Zh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Zh(t,e.context,!1),Bd(t,e.containerInfo)}function mf(t,e,n,i,r){return Ea(),Dd(r),e.flags|=256,jt(t,e,n,i),e.child}var Bu={dehydrated:null,treeContext:null,retryLane:0};function zu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Zg(t,e,n){var i=e.pendingProps,r=ct.current,a=!1,s=(e.flags&128)!==0,o;if((o=s)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(a=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),tt(ct,r&1),t===null)return Lu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,a?(i=e.mode,a=e.child,s={mode:"hidden",children:s},!(i&1)&&a!==null?(a.childLanes=0,a.pendingProps=s):a=Ul(s,i,0,null),t=Sr(t,i,n,null),a.return=e,t.return=e,a.sibling=t,e.child=a,e.child.memoizedState=zu(n),e.memoizedState=Bu,t):Yd(e,s));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return Ex(t,e,s,i,o,r,n);if(a){a=i.fallback,s=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Vi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?a=Vi(o,a):(a=Sr(a,s,n,null),a.flags|=2),a.return=e,i.return=e,i.sibling=a,e.child=i,i=a,a=e.child,s=t.child.memoizedState,s=s===null?zu(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=t.childLanes&~n,e.memoizedState=Bu,i}return a=t.child,t=a.sibling,i=Vi(a,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Yd(t,e){return e=Ul({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ro(t,e,n,i){return i!==null&&Dd(i),Ma(e,t.child,null,n),t=Yd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ex(t,e,n,i,r,a,s){if(n)return e.flags&256?(e.flags&=-257,i=vc(Error(ee(422))),ro(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(a=i.fallback,r=e.mode,i=Ul({mode:"visible",children:i.children},r,0,null),a=Sr(a,r,s,null),a.flags|=2,i.return=e,a.return=e,i.sibling=a,e.child=i,e.mode&1&&Ma(e,t.child,null,s),e.child.memoizedState=zu(s),e.memoizedState=Bu,a);if(!(e.mode&1))return ro(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,a=Error(ee(419)),i=vc(a,i,void 0),ro(t,e,s,i)}if(o=(s&t.childLanes)!==0,Jt||o){if(i=Ct,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==a.retryLane&&(a.retryLane=r,mi(t,r),kn(i,t,r,-1))}return Jd(),i=vc(Error(ee(421))),ro(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Ix.bind(null,t),r._reactRetry=e,null):(t=a.treeContext,dn=Bi(r.nextSibling),hn=e,ot=!0,Un=null,t!==null&&(yn[Sn++]=li,yn[Sn++]=ci,yn[Sn++]=Ar,li=t.id,ci=t.overflow,Ar=e),e=Yd(e,i.children),e.flags|=4096,e)}function gf(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Du(t.return,e,n)}function _c(t,e,n,i,r){var a=t.memoizedState;a===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(a.isBackwards=e,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=n,a.tailMode=r)}function Qg(t,e,n){var i=e.pendingProps,r=i.revealOrder,a=i.tail;if(jt(t,e,i.children,n),i=ct.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&gf(t,n,e);else if(t.tag===19)gf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(tt(ct,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&ll(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),_c(e,!1,r,n,a);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&ll(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}_c(e,!0,n,null,a);break;case"together":_c(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ho(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function gi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Cr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ee(153));if(e.child!==null){for(t=e.child,n=Vi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Vi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Mx(t,e,n){switch(e.tag){case 3:Kg(e),Ea();break;case 5:Tg(e);break;case 1:tn(e.type)&&nl(e);break;case 4:Bd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;tt(al,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(tt(ct,ct.current&1),e.flags|=128,null):n&e.child.childLanes?Zg(t,e,n):(tt(ct,ct.current&1),t=gi(t,e,n),t!==null?t.sibling:null);tt(ct,ct.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Qg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),tt(ct,ct.current),i)break;return null;case 22:case 23:return e.lanes=0,$g(t,e,n)}return gi(t,e,n)}var Jg,Hu,ev,tv;Jg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Hu=function(){};ev=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,_r(qn.current);var a=null;switch(n){case"input":r=cu(t,r),i=cu(t,i),a=[];break;case"select":r=dt({},r,{value:void 0}),i=dt({},i,{value:void 0}),a=[];break;case"textarea":r=hu(t,r),i=hu(t,i),a=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=el)}pu(n,i);var s;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(s in o)o.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(hs.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(s in o)!o.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&o[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(a||(a=[]),a.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(a=a||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(hs.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&nt("scroll",t),a||o===l||(a=[])):(a=a||[]).push(c,l))}n&&(a=a||[]).push("style",n);var c=a;(e.updateQueue=c)&&(e.flags|=4)}};tv=function(t,e,n,i){n!==i&&(e.flags|=4)};function Wa(t,e){if(!ot)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ot(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Tx(t,e,n){var i=e.pendingProps;switch(Ld(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(e),null;case 1:return tn(e.type)&&tl(),Ot(e),null;case 3:return i=e.stateNode,Ta(),rt(en),rt(Ht),Hd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(no(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Un!==null&&(qu(Un),Un=null))),Hu(t,e),Ot(e),null;case 5:zd(e);var r=_r(Ts.current);if(n=e.type,t!==null&&e.stateNode!=null)ev(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return Ot(e),null}if(t=_r(qn.current),no(e)){i=e.stateNode,n=e.type;var a=e.memoizedProps;switch(i[Xn]=e,i[Es]=a,t=(e.mode&1)!==0,n){case"dialog":nt("cancel",i),nt("close",i);break;case"iframe":case"object":case"embed":nt("load",i);break;case"video":case"audio":for(r=0;r<ns.length;r++)nt(ns[r],i);break;case"source":nt("error",i);break;case"img":case"image":case"link":nt("error",i),nt("load",i);break;case"details":nt("toggle",i);break;case"input":Th(i,a),nt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!a.multiple},nt("invalid",i);break;case"textarea":Ah(i,a),nt("invalid",i)}pu(n,a),r=null;for(var s in a)if(a.hasOwnProperty(s)){var o=a[s];s==="children"?typeof o=="string"?i.textContent!==o&&(a.suppressHydrationWarning!==!0&&to(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(a.suppressHydrationWarning!==!0&&to(i.textContent,o,t),r=["children",""+o]):hs.hasOwnProperty(s)&&o!=null&&s==="onScroll"&&nt("scroll",i)}switch(n){case"input":Ys(i),wh(i,a,!0);break;case"textarea":Ys(i),Rh(i);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(i.onclick=el)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=bm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[Xn]=e,t[Es]=i,Jg(t,e,!1,!1),e.stateNode=t;e:{switch(s=mu(n,i),n){case"dialog":nt("cancel",t),nt("close",t),r=i;break;case"iframe":case"object":case"embed":nt("load",t),r=i;break;case"video":case"audio":for(r=0;r<ns.length;r++)nt(ns[r],t);r=i;break;case"source":nt("error",t),r=i;break;case"img":case"image":case"link":nt("error",t),nt("load",t),r=i;break;case"details":nt("toggle",t),r=i;break;case"input":Th(t,i),r=cu(t,i),nt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=dt({},i,{value:void 0}),nt("invalid",t);break;case"textarea":Ah(t,i),r=hu(t,i),nt("invalid",t);break;default:r=i}pu(n,r),o=r;for(a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="style"?Lm(t,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Pm(t,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&fs(t,l):typeof l=="number"&&fs(t,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(hs.hasOwnProperty(a)?l!=null&&a==="onScroll"&&nt("scroll",t):l!=null&&vd(t,a,l,s))}switch(n){case"input":Ys(t),wh(t,i,!1);break;case"textarea":Ys(t),Rh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+$i(i.value));break;case"select":t.multiple=!!i.multiple,a=i.value,a!=null?ha(t,!!i.multiple,a,!1):i.defaultValue!=null&&ha(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=el)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ot(e),null;case 6:if(t&&e.stateNode!=null)tv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ee(166));if(n=_r(Ts.current),_r(qn.current),no(e)){if(i=e.stateNode,n=e.memoizedProps,i[Xn]=e,(a=i.nodeValue!==n)&&(t=hn,t!==null))switch(t.tag){case 3:to(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&to(i.nodeValue,n,(t.mode&1)!==0)}a&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Xn]=e,e.stateNode=i}return Ot(e),null;case 13:if(rt(ct),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ot&&dn!==null&&e.mode&1&&!(e.flags&128))xg(),Ea(),e.flags|=98560,a=!1;else if(a=no(e),i!==null&&i.dehydrated!==null){if(t===null){if(!a)throw Error(ee(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(ee(317));a[Xn]=e}else Ea(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ot(e),a=!1}else Un!==null&&(qu(Un),Un=null),a=!0;if(!a)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ct.current&1?Et===0&&(Et=3):Jd())),e.updateQueue!==null&&(e.flags|=4),Ot(e),null);case 4:return Ta(),Hu(t,e),t===null&&ys(e.stateNode.containerInfo),Ot(e),null;case 10:return Fd(e.type._context),Ot(e),null;case 17:return tn(e.type)&&tl(),Ot(e),null;case 19:if(rt(ct),a=e.memoizedState,a===null)return Ot(e),null;if(i=(e.flags&128)!==0,s=a.rendering,s===null)if(i)Wa(a,!1);else{if(Et!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=ll(t),s!==null){for(e.flags|=128,Wa(a,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)a=n,t=i,a.flags&=14680066,s=a.alternate,s===null?(a.childLanes=0,a.lanes=t,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,t=s.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return tt(ct,ct.current&1|2),e.child}t=t.sibling}a.tail!==null&&mt()>Aa&&(e.flags|=128,i=!0,Wa(a,!1),e.lanes=4194304)}else{if(!i)if(t=ll(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Wa(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!ot)return Ot(e),null}else 2*mt()-a.renderingStartTime>Aa&&n!==1073741824&&(e.flags|=128,i=!0,Wa(a,!1),e.lanes=4194304);a.isBackwards?(s.sibling=e.child,e.child=s):(n=a.last,n!==null?n.sibling=s:e.child=s,a.last=s)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=mt(),e.sibling=null,n=ct.current,tt(ct,i?n&1|2:n&1),e):(Ot(e),null);case 22:case 23:return Qd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?un&1073741824&&(Ot(e),e.subtreeFlags&6&&(e.flags|=8192)):Ot(e),null;case 24:return null;case 25:return null}throw Error(ee(156,e.tag))}function wx(t,e){switch(Ld(e),e.tag){case 1:return tn(e.type)&&tl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ta(),rt(en),rt(Ht),Hd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return zd(e),null;case 13:if(rt(ct),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));Ea()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return rt(ct),null;case 4:return Ta(),null;case 10:return Fd(e.type._context),null;case 22:case 23:return Qd(),null;case 24:return null;default:return null}}var ao=!1,zt=!1,Ax=typeof WeakSet=="function"?WeakSet:Set,pe=null;function la(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){ht(t,e,i)}else n.current=null}function Gu(t,e,n){try{n()}catch(i){ht(t,e,i)}}var vf=!1;function Rx(t,e){if(wu=Zo,t=sg(),Pd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var s=0,o=-1,l=-1,c=0,h=0,f=t,p=null;t:for(;;){for(var g;f!==n||r!==0&&f.nodeType!==3||(o=s+r),f!==a||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(g=f.firstChild)!==null;)p=f,f=g;for(;;){if(f===t)break t;if(p===n&&++c===r&&(o=s),p===a&&++h===i&&(l=s),(g=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=g}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Au={focusedElem:t,selectionRange:n},Zo=!1,pe=e;pe!==null;)if(e=pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,pe=t;else for(;pe!==null;){e=pe;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,m=x.memoizedState,d=e.stateNode,_=d.getSnapshotBeforeUpdate(e.elementType===e.type?y:Ln(e.type,y),m);d.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ee(163))}}catch(M){ht(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,pe=t;break}pe=e.return}return x=vf,vf=!1,x}function cs(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var a=r.destroy;r.destroy=void 0,a!==void 0&&Gu(e,n,a)}r=r.next}while(r!==i)}}function Ll(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Vu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function nv(t){var e=t.alternate;e!==null&&(t.alternate=null,nv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Xn],delete e[Es],delete e[bu],delete e[cx],delete e[ux])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function iv(t){return t.tag===5||t.tag===3||t.tag===4}function _f(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||iv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ju(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=el));else if(i!==4&&(t=t.child,t!==null))for(ju(t,e,n),t=t.sibling;t!==null;)ju(t,e,n),t=t.sibling}function Wu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Wu(t,e,n),t=t.sibling;t!==null;)Wu(t,e,n),t=t.sibling}var Nt=null,Dn=!1;function yi(t,e,n){for(n=n.child;n!==null;)rv(t,e,n),n=n.sibling}function rv(t,e,n){if($n&&typeof $n.onCommitFiberUnmount=="function")try{$n.onCommitFiberUnmount(Tl,n)}catch{}switch(n.tag){case 5:zt||la(n,e);case 6:var i=Nt,r=Dn;Nt=null,yi(t,e,n),Nt=i,Dn=r,Nt!==null&&(Dn?(t=Nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Nt.removeChild(n.stateNode));break;case 18:Nt!==null&&(Dn?(t=Nt,n=n.stateNode,t.nodeType===8?dc(t.parentNode,n):t.nodeType===1&&dc(t,n),vs(t)):dc(Nt,n.stateNode));break;case 4:i=Nt,r=Dn,Nt=n.stateNode.containerInfo,Dn=!0,yi(t,e,n),Nt=i,Dn=r;break;case 0:case 11:case 14:case 15:if(!zt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var a=r,s=a.destroy;a=a.tag,s!==void 0&&(a&2||a&4)&&Gu(n,e,s),r=r.next}while(r!==i)}yi(t,e,n);break;case 1:if(!zt&&(la(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){ht(n,e,o)}yi(t,e,n);break;case 21:yi(t,e,n);break;case 22:n.mode&1?(zt=(i=zt)||n.memoizedState!==null,yi(t,e,n),zt=i):yi(t,e,n);break;default:yi(t,e,n)}}function xf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Ax),e.forEach(function(i){var r=Fx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Cn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var a=t,s=e,o=s;e:for(;o!==null;){switch(o.tag){case 5:Nt=o.stateNode,Dn=!1;break e;case 3:Nt=o.stateNode.containerInfo,Dn=!0;break e;case 4:Nt=o.stateNode.containerInfo,Dn=!0;break e}o=o.return}if(Nt===null)throw Error(ee(160));rv(a,s,r),Nt=null,Dn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){ht(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)av(e,t),e=e.sibling}function av(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Cn(e,t),Gn(t),i&4){try{cs(3,t,t.return),Ll(3,t)}catch(y){ht(t,t.return,y)}try{cs(5,t,t.return)}catch(y){ht(t,t.return,y)}}break;case 1:Cn(e,t),Gn(t),i&512&&n!==null&&la(n,n.return);break;case 5:if(Cn(e,t),Gn(t),i&512&&n!==null&&la(n,n.return),t.flags&32){var r=t.stateNode;try{fs(r,"")}catch(y){ht(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var a=t.memoizedProps,s=n!==null?n.memoizedProps:a,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&a.type==="radio"&&a.name!=null&&Rm(r,a),mu(o,s);var c=mu(o,a);for(s=0;s<l.length;s+=2){var h=l[s],f=l[s+1];h==="style"?Lm(r,f):h==="dangerouslySetInnerHTML"?Pm(r,f):h==="children"?fs(r,f):vd(r,h,f,c)}switch(o){case"input":uu(r,a);break;case"textarea":Cm(r,a);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!a.multiple;var g=a.value;g!=null?ha(r,!!a.multiple,g,!1):p!==!!a.multiple&&(a.defaultValue!=null?ha(r,!!a.multiple,a.defaultValue,!0):ha(r,!!a.multiple,a.multiple?[]:"",!1))}r[Es]=a}catch(y){ht(t,t.return,y)}}break;case 6:if(Cn(e,t),Gn(t),i&4){if(t.stateNode===null)throw Error(ee(162));r=t.stateNode,a=t.memoizedProps;try{r.nodeValue=a}catch(y){ht(t,t.return,y)}}break;case 3:if(Cn(e,t),Gn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{vs(e.containerInfo)}catch(y){ht(t,t.return,y)}break;case 4:Cn(e,t),Gn(t);break;case 13:Cn(e,t),Gn(t),r=t.child,r.flags&8192&&(a=r.memoizedState!==null,r.stateNode.isHidden=a,!a||r.alternate!==null&&r.alternate.memoizedState!==null||(Kd=mt())),i&4&&xf(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(zt=(c=zt)||h,Cn(e,t),zt=c):Cn(e,t),Gn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(pe=t,h=t.child;h!==null;){for(f=pe=h;pe!==null;){switch(p=pe,g=p.child,p.tag){case 0:case 11:case 14:case 15:cs(4,p,p.return);break;case 1:la(p,p.return);var x=p.stateNode;if(typeof x.componentWillUnmount=="function"){i=p,n=p.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(y){ht(i,n,y)}}break;case 5:la(p,p.return);break;case 22:if(p.memoizedState!==null){Sf(f);continue}}g!==null?(g.return=p,pe=g):Sf(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{r=f.stateNode,c?(a=r.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(o=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Nm("display",s))}catch(y){ht(t,t.return,y)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(y){ht(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Cn(e,t),Gn(t),i&4&&xf(t);break;case 21:break;default:Cn(e,t),Gn(t)}}function Gn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(iv(n)){var i=n;break e}n=n.return}throw Error(ee(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(fs(r,""),i.flags&=-33);var a=_f(t);Wu(t,a,r);break;case 3:case 4:var s=i.stateNode.containerInfo,o=_f(t);ju(t,o,s);break;default:throw Error(ee(161))}}catch(l){ht(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Cx(t,e,n){pe=t,sv(t)}function sv(t,e,n){for(var i=(t.mode&1)!==0;pe!==null;){var r=pe,a=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||ao;if(!s){var o=r.alternate,l=o!==null&&o.memoizedState!==null||zt;o=ao;var c=zt;if(ao=s,(zt=l)&&!c)for(pe=r;pe!==null;)s=pe,l=s.child,s.tag===22&&s.memoizedState!==null?Ef(r):l!==null?(l.return=s,pe=l):Ef(r);for(;a!==null;)pe=a,sv(a),a=a.sibling;pe=r,ao=o,zt=c}yf(t)}else r.subtreeFlags&8772&&a!==null?(a.return=r,pe=a):yf(t)}}function yf(t){for(;pe!==null;){var e=pe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:zt||Ll(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!zt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Ln(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var a=e.updateQueue;a!==null&&rf(e,a,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}rf(e,s,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&vs(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ee(163))}zt||e.flags&512&&Vu(e)}catch(p){ht(e,e.return,p)}}if(e===t){pe=null;break}if(n=e.sibling,n!==null){n.return=e.return,pe=n;break}pe=e.return}}function Sf(t){for(;pe!==null;){var e=pe;if(e===t){pe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,pe=n;break}pe=e.return}}function Ef(t){for(;pe!==null;){var e=pe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ll(4,e)}catch(l){ht(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){ht(e,r,l)}}var a=e.return;try{Vu(e)}catch(l){ht(e,a,l)}break;case 5:var s=e.return;try{Vu(e)}catch(l){ht(e,s,l)}}}catch(l){ht(e,e.return,l)}if(e===t){pe=null;break}var o=e.sibling;if(o!==null){o.return=e.return,pe=o;break}pe=e.return}}var bx=Math.ceil,dl=_i.ReactCurrentDispatcher,$d=_i.ReactCurrentOwner,Tn=_i.ReactCurrentBatchConfig,Ye=0,Ct=null,_t=null,Dt=0,un=0,ca=Ji(0),Et=0,Cs=null,Cr=0,Dl=0,qd=0,us=null,Zt=null,Kd=0,Aa=1/0,ri=null,hl=!1,Xu=null,Hi=null,so=!1,Di=null,fl=0,ds=0,Yu=null,Go=-1,Vo=0;function Xt(){return Ye&6?mt():Go!==-1?Go:Go=mt()}function Gi(t){return t.mode&1?Ye&2&&Dt!==0?Dt&-Dt:hx.transition!==null?(Vo===0&&(Vo=jm()),Vo):(t=Ze,t!==0||(t=window.event,t=t===void 0?16:Zm(t.type)),t):1}function kn(t,e,n,i){if(50<ds)throw ds=0,Yu=null,Error(ee(185));Ds(t,n,i),(!(Ye&2)||t!==Ct)&&(t===Ct&&(!(Ye&2)&&(Dl|=n),Et===4&&Pi(t,Dt)),nn(t,i),n===1&&Ye===0&&!(e.mode&1)&&(Aa=mt()+500,bl&&er()))}function nn(t,e){var n=t.callbackNode;h0(t,e);var i=Ko(t,t===Ct?Dt:0);if(i===0)n!==null&&Ph(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Ph(n),e===1)t.tag===0?dx(Mf.bind(null,t)):gg(Mf.bind(null,t)),ox(function(){!(Ye&6)&&er()}),n=null;else{switch(Wm(i)){case 1:n=Ed;break;case 4:n=Gm;break;case 16:n=qo;break;case 536870912:n=Vm;break;default:n=qo}n=pv(n,ov.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ov(t,e){if(Go=-1,Vo=0,Ye&6)throw Error(ee(327));var n=t.callbackNode;if(va()&&t.callbackNode!==n)return null;var i=Ko(t,t===Ct?Dt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=pl(t,i);else{e=i;var r=Ye;Ye|=2;var a=cv();(Ct!==t||Dt!==e)&&(ri=null,Aa=mt()+500,yr(t,e));do try{Lx();break}catch(o){lv(t,o)}while(!0);Id(),dl.current=a,Ye=r,_t!==null?e=0:(Ct=null,Dt=0,e=Et)}if(e!==0){if(e===2&&(r=yu(t),r!==0&&(i=r,e=$u(t,r))),e===1)throw n=Cs,yr(t,0),Pi(t,i),nn(t,mt()),n;if(e===6)Pi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Px(r)&&(e=pl(t,i),e===2&&(a=yu(t),a!==0&&(i=a,e=$u(t,a))),e===1))throw n=Cs,yr(t,0),Pi(t,i),nn(t,mt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ee(345));case 2:dr(t,Zt,ri);break;case 3:if(Pi(t,i),(i&130023424)===i&&(e=Kd+500-mt(),10<e)){if(Ko(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Xt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Cu(dr.bind(null,t,Zt,ri),e);break}dr(t,Zt,ri);break;case 4:if(Pi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-On(i);a=1<<s,s=e[s],s>r&&(r=s),i&=~a}if(i=r,i=mt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*bx(i/1960))-i,10<i){t.timeoutHandle=Cu(dr.bind(null,t,Zt,ri),i);break}dr(t,Zt,ri);break;case 5:dr(t,Zt,ri);break;default:throw Error(ee(329))}}}return nn(t,mt()),t.callbackNode===n?ov.bind(null,t):null}function $u(t,e){var n=us;return t.current.memoizedState.isDehydrated&&(yr(t,e).flags|=256),t=pl(t,e),t!==2&&(e=Zt,Zt=n,e!==null&&qu(e)),t}function qu(t){Zt===null?Zt=t:Zt.push.apply(Zt,t)}function Px(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],a=r.getSnapshot;r=r.value;try{if(!Bn(a(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Pi(t,e){for(e&=~qd,e&=~Dl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-On(e),i=1<<n;t[n]=-1,e&=~i}}function Mf(t){if(Ye&6)throw Error(ee(327));va();var e=Ko(t,0);if(!(e&1))return nn(t,mt()),null;var n=pl(t,e);if(t.tag!==0&&n===2){var i=yu(t);i!==0&&(e=i,n=$u(t,i))}if(n===1)throw n=Cs,yr(t,0),Pi(t,e),nn(t,mt()),n;if(n===6)throw Error(ee(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,dr(t,Zt,ri),nn(t,mt()),null}function Zd(t,e){var n=Ye;Ye|=1;try{return t(e)}finally{Ye=n,Ye===0&&(Aa=mt()+500,bl&&er())}}function br(t){Di!==null&&Di.tag===0&&!(Ye&6)&&va();var e=Ye;Ye|=1;var n=Tn.transition,i=Ze;try{if(Tn.transition=null,Ze=1,t)return t()}finally{Ze=i,Tn.transition=n,Ye=e,!(Ye&6)&&er()}}function Qd(){un=ca.current,rt(ca)}function yr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,sx(n)),_t!==null)for(n=_t.return;n!==null;){var i=n;switch(Ld(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&tl();break;case 3:Ta(),rt(en),rt(Ht),Hd();break;case 5:zd(i);break;case 4:Ta();break;case 13:rt(ct);break;case 19:rt(ct);break;case 10:Fd(i.type._context);break;case 22:case 23:Qd()}n=n.return}if(Ct=t,_t=t=Vi(t.current,null),Dt=un=e,Et=0,Cs=null,qd=Dl=Cr=0,Zt=us=null,vr!==null){for(e=0;e<vr.length;e++)if(n=vr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,a=n.pending;if(a!==null){var s=a.next;a.next=r,i.next=s}n.pending=i}vr=null}return t}function lv(t,e){do{var n=_t;try{if(Id(),Bo.current=ul,cl){for(var i=ut.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}cl=!1}if(Rr=0,Rt=St=ut=null,ls=!1,ws=0,$d.current=null,n===null||n.return===null){Et=1,Cs=e,_t=null;break}e:{var a=t,s=n.return,o=n,l=e;if(e=Dt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=o,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=uf(s);if(g!==null){g.flags&=-257,df(g,s,o,a,e),g.mode&1&&cf(a,c,e),e=g,l=c;var x=e.updateQueue;if(x===null){var y=new Set;y.add(l),e.updateQueue=y}else x.add(l);break e}else{if(!(e&1)){cf(a,c,e),Jd();break e}l=Error(ee(426))}}else if(ot&&o.mode&1){var m=uf(s);if(m!==null){!(m.flags&65536)&&(m.flags|=256),df(m,s,o,a,e),Dd(wa(l,o));break e}}a=l=wa(l,o),Et!==4&&(Et=2),us===null?us=[a]:us.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,e&=-e,a.lanes|=e;var d=Wg(a,l,e);nf(a,d);break e;case 1:o=l;var _=a.type,v=a.stateNode;if(!(a.flags&128)&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Hi===null||!Hi.has(v)))){a.flags|=65536,e&=-e,a.lanes|=e;var M=Xg(a,o,e);nf(a,M);break e}}a=a.return}while(a!==null)}dv(n)}catch(b){e=b,_t===n&&n!==null&&(_t=n=n.return);continue}break}while(!0)}function cv(){var t=dl.current;return dl.current=ul,t===null?ul:t}function Jd(){(Et===0||Et===3||Et===2)&&(Et=4),Ct===null||!(Cr&268435455)&&!(Dl&268435455)||Pi(Ct,Dt)}function pl(t,e){var n=Ye;Ye|=2;var i=cv();(Ct!==t||Dt!==e)&&(ri=null,yr(t,e));do try{Nx();break}catch(r){lv(t,r)}while(!0);if(Id(),Ye=n,dl.current=i,_t!==null)throw Error(ee(261));return Ct=null,Dt=0,Et}function Nx(){for(;_t!==null;)uv(_t)}function Lx(){for(;_t!==null&&!i0();)uv(_t)}function uv(t){var e=fv(t.alternate,t,un);t.memoizedProps=t.pendingProps,e===null?dv(t):_t=e,$d.current=null}function dv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=wx(n,e),n!==null){n.flags&=32767,_t=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Et=6,_t=null;return}}else if(n=Tx(n,e,un),n!==null){_t=n;return}if(e=e.sibling,e!==null){_t=e;return}_t=e=t}while(e!==null);Et===0&&(Et=5)}function dr(t,e,n){var i=Ze,r=Tn.transition;try{Tn.transition=null,Ze=1,Dx(t,e,n,i)}finally{Tn.transition=r,Ze=i}return null}function Dx(t,e,n,i){do va();while(Di!==null);if(Ye&6)throw Error(ee(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ee(177));t.callbackNode=null,t.callbackPriority=0;var a=n.lanes|n.childLanes;if(f0(t,a),t===Ct&&(_t=Ct=null,Dt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||so||(so=!0,pv(qo,function(){return va(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Tn.transition,Tn.transition=null;var s=Ze;Ze=1;var o=Ye;Ye|=4,$d.current=null,Rx(t,n),av(n,t),J0(Au),Zo=!!wu,Au=wu=null,t.current=n,Cx(n),r0(),Ye=o,Ze=s,Tn.transition=a}else t.current=n;if(so&&(so=!1,Di=t,fl=r),a=t.pendingLanes,a===0&&(Hi=null),o0(n.stateNode),nn(t,mt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(hl)throw hl=!1,t=Xu,Xu=null,t;return fl&1&&t.tag!==0&&va(),a=t.pendingLanes,a&1?t===Yu?ds++:(ds=0,Yu=t):ds=0,er(),null}function va(){if(Di!==null){var t=Wm(fl),e=Tn.transition,n=Ze;try{if(Tn.transition=null,Ze=16>t?16:t,Di===null)var i=!1;else{if(t=Di,Di=null,fl=0,Ye&6)throw Error(ee(331));var r=Ye;for(Ye|=4,pe=t.current;pe!==null;){var a=pe,s=a.child;if(pe.flags&16){var o=a.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(pe=c;pe!==null;){var h=pe;switch(h.tag){case 0:case 11:case 15:cs(8,h,a)}var f=h.child;if(f!==null)f.return=h,pe=f;else for(;pe!==null;){h=pe;var p=h.sibling,g=h.return;if(nv(h),h===c){pe=null;break}if(p!==null){p.return=g,pe=p;break}pe=g}}}var x=a.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}pe=a}}if(a.subtreeFlags&2064&&s!==null)s.return=a,pe=s;else e:for(;pe!==null;){if(a=pe,a.flags&2048)switch(a.tag){case 0:case 11:case 15:cs(9,a,a.return)}var d=a.sibling;if(d!==null){d.return=a.return,pe=d;break e}pe=a.return}}var _=t.current;for(pe=_;pe!==null;){s=pe;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,pe=v;else e:for(s=_;pe!==null;){if(o=pe,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Ll(9,o)}}catch(b){ht(o,o.return,b)}if(o===s){pe=null;break e}var M=o.sibling;if(M!==null){M.return=o.return,pe=M;break e}pe=o.return}}if(Ye=r,er(),$n&&typeof $n.onPostCommitFiberRoot=="function")try{$n.onPostCommitFiberRoot(Tl,t)}catch{}i=!0}return i}finally{Ze=n,Tn.transition=e}}return!1}function Tf(t,e,n){e=wa(n,e),e=Wg(t,e,1),t=zi(t,e,1),e=Xt(),t!==null&&(Ds(t,1,e),nn(t,e))}function ht(t,e,n){if(t.tag===3)Tf(t,t,n);else for(;e!==null;){if(e.tag===3){Tf(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Hi===null||!Hi.has(i))){t=wa(n,t),t=Xg(e,t,1),e=zi(e,t,1),t=Xt(),e!==null&&(Ds(e,1,t),nn(e,t));break}}e=e.return}}function Ux(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Xt(),t.pingedLanes|=t.suspendedLanes&n,Ct===t&&(Dt&n)===n&&(Et===4||Et===3&&(Dt&130023424)===Dt&&500>mt()-Kd?yr(t,0):qd|=n),nn(t,e)}function hv(t,e){e===0&&(t.mode&1?(e=Ks,Ks<<=1,!(Ks&130023424)&&(Ks=4194304)):e=1);var n=Xt();t=mi(t,e),t!==null&&(Ds(t,e,n),nn(t,n))}function Ix(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),hv(t,n)}function Fx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ee(314))}i!==null&&i.delete(e),hv(t,n)}var fv;fv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||en.current)Jt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Jt=!1,Mx(t,e,n);Jt=!!(t.flags&131072)}else Jt=!1,ot&&e.flags&1048576&&vg(e,rl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ho(t,e),t=e.pendingProps;var r=Sa(e,Ht.current);ga(e,n),r=Vd(null,e,i,t,r,n);var a=jd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,tn(i)?(a=!0,nl(e)):a=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,kd(e),r.updater=Nl,e.stateNode=r,r._reactInternals=e,Iu(e,i,t,n),e=ku(null,e,i,!0,a,n)):(e.tag=0,ot&&a&&Nd(e),jt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ho(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=kx(i),t=Ln(i,t),r){case 0:e=Ou(null,e,i,t,n);break e;case 1:e=pf(null,e,i,t,n);break e;case 11:e=hf(null,e,i,t,n);break e;case 14:e=ff(null,e,i,Ln(i.type,t),n);break e}throw Error(ee(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),Ou(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),pf(t,e,i,r,n);case 3:e:{if(Kg(e),t===null)throw Error(ee(387));i=e.pendingProps,a=e.memoizedState,r=a.element,Mg(t,e),ol(e,i,null,n);var s=e.memoizedState;if(i=s.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=a,e.memoizedState=a,e.flags&256){r=wa(Error(ee(423)),e),e=mf(t,e,i,n,r);break e}else if(i!==r){r=wa(Error(ee(424)),e),e=mf(t,e,i,n,r);break e}else for(dn=Bi(e.stateNode.containerInfo.firstChild),hn=e,ot=!0,Un=null,n=Sg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ea(),i===r){e=gi(t,e,n);break e}jt(t,e,i,n)}e=e.child}return e;case 5:return Tg(e),t===null&&Lu(e),i=e.type,r=e.pendingProps,a=t!==null?t.memoizedProps:null,s=r.children,Ru(i,r)?s=null:a!==null&&Ru(i,a)&&(e.flags|=32),qg(t,e),jt(t,e,s,n),e.child;case 6:return t===null&&Lu(e),null;case 13:return Zg(t,e,n);case 4:return Bd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ma(e,null,i,n):jt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),hf(t,e,i,r,n);case 7:return jt(t,e,e.pendingProps,n),e.child;case 8:return jt(t,e,e.pendingProps.children,n),e.child;case 12:return jt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,a=e.memoizedProps,s=r.value,tt(al,i._currentValue),i._currentValue=s,a!==null)if(Bn(a.value,s)){if(a.children===r.children&&!en.current){e=gi(t,e,n);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){s=a.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(a.tag===1){l=hi(-1,n&-n),l.tag=2;var c=a.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Du(a.return,n,e),o.lanes|=n;break}l=l.next}}else if(a.tag===10)s=a.type===e.type?null:a.child;else if(a.tag===18){if(s=a.return,s===null)throw Error(ee(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Du(s,n,e),s=a.sibling}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}jt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ga(e,n),r=An(r),i=i(r),e.flags|=1,jt(t,e,i,n),e.child;case 14:return i=e.type,r=Ln(i,e.pendingProps),r=Ln(i.type,r),ff(t,e,i,r,n);case 15:return Yg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),Ho(t,e),e.tag=1,tn(i)?(t=!0,nl(e)):t=!1,ga(e,n),jg(e,i,r),Iu(e,i,r,n),ku(null,e,i,!0,t,n);case 19:return Qg(t,e,n);case 22:return $g(t,e,n)}throw Error(ee(156,e.tag))};function pv(t,e){return Hm(t,e)}function Ox(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mn(t,e,n,i){return new Ox(t,e,n,i)}function eh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function kx(t){if(typeof t=="function")return eh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===xd)return 11;if(t===yd)return 14}return 2}function Vi(t,e){var n=t.alternate;return n===null?(n=Mn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function jo(t,e,n,i,r,a){var s=2;if(i=t,typeof t=="function")eh(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Jr:return Sr(n.children,r,a,e);case _d:s=8,r|=8;break;case au:return t=Mn(12,n,e,r|2),t.elementType=au,t.lanes=a,t;case su:return t=Mn(13,n,e,r),t.elementType=su,t.lanes=a,t;case ou:return t=Mn(19,n,e,r),t.elementType=ou,t.lanes=a,t;case Tm:return Ul(n,r,a,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Em:s=10;break e;case Mm:s=9;break e;case xd:s=11;break e;case yd:s=14;break e;case Ri:s=16,i=null;break e}throw Error(ee(130,t==null?t:typeof t,""))}return e=Mn(s,n,e,r),e.elementType=t,e.type=i,e.lanes=a,e}function Sr(t,e,n,i){return t=Mn(7,t,i,e),t.lanes=n,t}function Ul(t,e,n,i){return t=Mn(22,t,i,e),t.elementType=Tm,t.lanes=n,t.stateNode={isHidden:!1},t}function xc(t,e,n){return t=Mn(6,t,null,e),t.lanes=n,t}function yc(t,e,n){return e=Mn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Bx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ec(0),this.expirationTimes=ec(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ec(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function th(t,e,n,i,r,a,s,o,l){return t=new Bx(t,e,n,o,l),e===1?(e=1,a===!0&&(e|=8)):e=0,a=Mn(3,null,null,e),t.current=a,a.stateNode=t,a.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},kd(a),t}function zx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function mv(t){if(!t)return qi;t=t._reactInternals;e:{if(Lr(t)!==t||t.tag!==1)throw Error(ee(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(tn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ee(171))}if(t.tag===1){var n=t.type;if(tn(n))return mg(t,n,e)}return e}function gv(t,e,n,i,r,a,s,o,l){return t=th(n,i,!0,t,r,a,s,o,l),t.context=mv(null),n=t.current,i=Xt(),r=Gi(n),a=hi(i,r),a.callback=e??null,zi(n,a,r),t.current.lanes=r,Ds(t,r,i),nn(t,i),t}function Il(t,e,n,i){var r=e.current,a=Xt(),s=Gi(r);return n=mv(n),e.context===null?e.context=n:e.pendingContext=n,e=hi(a,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=zi(r,e,s),t!==null&&(kn(t,r,s,a),ko(t,r,s)),s}function ml(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function wf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function nh(t,e){wf(t,e),(t=t.alternate)&&wf(t,e)}function Hx(){return null}var vv=typeof reportError=="function"?reportError:function(t){console.error(t)};function ih(t){this._internalRoot=t}Fl.prototype.render=ih.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ee(409));Il(t,e,null,null)};Fl.prototype.unmount=ih.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;br(function(){Il(null,t,null,null)}),e[pi]=null}};function Fl(t){this._internalRoot=t}Fl.prototype.unstable_scheduleHydration=function(t){if(t){var e=$m();t={blockedOn:null,target:t,priority:e};for(var n=0;n<bi.length&&e!==0&&e<bi[n].priority;n++);bi.splice(n,0,t),n===0&&Km(t)}};function rh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ol(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Af(){}function Gx(t,e,n,i,r){if(r){if(typeof i=="function"){var a=i;i=function(){var c=ml(s);a.call(c)}}var s=gv(e,i,t,0,null,!1,!1,"",Af);return t._reactRootContainer=s,t[pi]=s.current,ys(t.nodeType===8?t.parentNode:t),br(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=ml(l);o.call(c)}}var l=th(t,0,!1,null,null,!1,!1,"",Af);return t._reactRootContainer=l,t[pi]=l.current,ys(t.nodeType===8?t.parentNode:t),br(function(){Il(e,l,n,i)}),l}function kl(t,e,n,i,r){var a=n._reactRootContainer;if(a){var s=a;if(typeof r=="function"){var o=r;r=function(){var l=ml(s);o.call(l)}}Il(e,s,t,r)}else s=Gx(n,e,t,r,i);return ml(s)}Xm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ts(e.pendingLanes);n!==0&&(Md(e,n|1),nn(e,mt()),!(Ye&6)&&(Aa=mt()+500,er()))}break;case 13:br(function(){var i=mi(t,1);if(i!==null){var r=Xt();kn(i,t,1,r)}}),nh(t,1)}};Td=function(t){if(t.tag===13){var e=mi(t,134217728);if(e!==null){var n=Xt();kn(e,t,134217728,n)}nh(t,134217728)}};Ym=function(t){if(t.tag===13){var e=Gi(t),n=mi(t,e);if(n!==null){var i=Xt();kn(n,t,e,i)}nh(t,e)}};$m=function(){return Ze};qm=function(t,e){var n=Ze;try{return Ze=t,e()}finally{Ze=n}};vu=function(t,e,n){switch(e){case"input":if(uu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Cl(i);if(!r)throw Error(ee(90));Am(i),uu(i,r)}}}break;case"textarea":Cm(t,n);break;case"select":e=n.value,e!=null&&ha(t,!!n.multiple,e,!1)}};Im=Zd;Fm=br;var Vx={usingClientEntryPoint:!1,Events:[Is,ia,Cl,Dm,Um,Zd]},Xa={findFiberByHostInstance:gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jx={bundleType:Xa.bundleType,version:Xa.version,rendererPackageName:Xa.rendererPackageName,rendererConfig:Xa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_i.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Bm(t),t===null?null:t.stateNode},findFiberByHostInstance:Xa.findFiberByHostInstance||Hx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oo.isDisabled&&oo.supportsFiber)try{Tl=oo.inject(jx),$n=oo}catch{}}pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vx;pn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rh(e))throw Error(ee(200));return zx(t,e,null,n)};pn.createRoot=function(t,e){if(!rh(t))throw Error(ee(299));var n=!1,i="",r=vv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=th(t,1,!1,null,null,n,!1,i,r),t[pi]=e.current,ys(t.nodeType===8?t.parentNode:t),new ih(e)};pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ee(188)):(t=Object.keys(t).join(","),Error(ee(268,t)));return t=Bm(e),t=t===null?null:t.stateNode,t};pn.flushSync=function(t){return br(t)};pn.hydrate=function(t,e,n){if(!Ol(e))throw Error(ee(200));return kl(null,t,e,!0,n)};pn.hydrateRoot=function(t,e,n){if(!rh(t))throw Error(ee(405));var i=n!=null&&n.hydratedSources||null,r=!1,a="",s=vv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=gv(e,null,t,1,n??null,r,!1,a,s),t[pi]=e.current,ys(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Fl(e)};pn.render=function(t,e,n){if(!Ol(e))throw Error(ee(200));return kl(null,t,e,!1,n)};pn.unmountComponentAtNode=function(t){if(!Ol(t))throw Error(ee(40));return t._reactRootContainer?(br(function(){kl(null,null,t,!1,function(){t._reactRootContainer=null,t[pi]=null})}),!0):!1};pn.unstable_batchedUpdates=Zd;pn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ol(n))throw Error(ee(200));if(t==null||t._reactInternals===void 0)throw Error(ee(38));return kl(t,e,n,!1,i)};pn.version="18.3.1-next-f1338f8080-20240426";function _v(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_v)}catch(t){console.error(t)}}_v(),_m.exports=pn;var Wx=_m.exports,Rf=Wx;iu.createRoot=Rf.createRoot,iu.hydrateRoot=Rf.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bs(){return bs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},bs.apply(null,arguments)}var Ui;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ui||(Ui={}));const Cf="popstate";function Xx(t){t===void 0&&(t={});function e(i,r){let{pathname:a,search:s,hash:o}=i.location;return Ku("",{pathname:a,search:s,hash:o},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:gl(r)}return $x(e,n,null,t)}function xt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ah(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Yx(){return Math.random().toString(36).substr(2,8)}function bf(t,e){return{usr:t.state,key:t.key,idx:e}}function Ku(t,e,n,i){return n===void 0&&(n=null),bs({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ua(e):e,{state:n,key:e&&e.key||i||Yx()})}function gl(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Ua(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function $x(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:a=!1}=i,s=r.history,o=Ui.Pop,l=null,c=h();c==null&&(c=0,s.replaceState(bs({},s.state,{idx:c}),""));function h(){return(s.state||{idx:null}).idx}function f(){o=Ui.Pop;let m=h(),d=m==null?null:m-c;c=m,l&&l({action:o,location:y.location,delta:d})}function p(m,d){o=Ui.Push;let _=Ku(y.location,m,d);c=h()+1;let v=bf(_,c),M=y.createHref(_);try{s.pushState(v,"",M)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;r.location.assign(M)}a&&l&&l({action:o,location:y.location,delta:1})}function g(m,d){o=Ui.Replace;let _=Ku(y.location,m,d);c=h();let v=bf(_,c),M=y.createHref(_);s.replaceState(v,"",M),a&&l&&l({action:o,location:y.location,delta:0})}function x(m){let d=r.location.origin!=="null"?r.location.origin:r.location.href,_=typeof m=="string"?m:gl(m);return _=_.replace(/ $/,"%20"),xt(d,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,d)}let y={get action(){return o},get location(){return t(r,s)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Cf,f),l=m,()=>{r.removeEventListener(Cf,f),l=null}},createHref(m){return e(r,m)},createURL:x,encodeLocation(m){let d=x(m);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:p,replace:g,go(m){return s.go(m)}};return y}var Pf;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Pf||(Pf={}));function qx(t,e,n){return n===void 0&&(n="/"),Kx(t,e,n)}function Kx(t,e,n,i){let r=typeof e=="string"?Ua(e):e,a=sh(r.pathname||"/",n);if(a==null)return null;let s=xv(t);Zx(s);let o=null,l=cy(a);for(let c=0;o==null&&c<s.length;++c)o=sy(s[c],l);return o}function xv(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(a,s,o)=>{let l={relativePath:o===void 0?a.path||"":o,caseSensitive:a.caseSensitive===!0,childrenIndex:s,route:a};l.relativePath.startsWith("/")&&(xt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=ji([i,l.relativePath]),h=n.concat(l);a.children&&a.children.length>0&&(xt(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),xv(a.children,e,h,c)),!(a.path==null&&!a.index)&&e.push({path:c,score:ry(c,a.index),routesMeta:h})};return t.forEach((a,s)=>{var o;if(a.path===""||!((o=a.path)!=null&&o.includes("?")))r(a,s);else for(let l of yv(a.path))r(a,s,l)}),e}function yv(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),a=n.replace(/\?$/,"");if(i.length===0)return r?[a,""]:[a];let s=yv(i.join("/")),o=[];return o.push(...s.map(l=>l===""?a:[a,l].join("/"))),r&&o.push(...s),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function Zx(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:ay(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const Qx=/^:[\w-]+$/,Jx=3,ey=2,ty=1,ny=10,iy=-2,Nf=t=>t==="*";function ry(t,e){let n=t.split("/"),i=n.length;return n.some(Nf)&&(i+=iy),e&&(i+=ey),n.filter(r=>!Nf(r)).reduce((r,a)=>r+(Qx.test(a)?Jx:a===""?ty:ny),i)}function ay(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function sy(t,e,n){let{routesMeta:i}=t,r={},a="/",s=[];for(let o=0;o<i.length;++o){let l=i[o],c=o===i.length-1,h=a==="/"?e:e.slice(a.length)||"/",f=oy({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},h),p=l.route;if(!f)return null;Object.assign(r,f.params),s.push({params:r,pathname:ji([a,f.pathname]),pathnameBase:py(ji([a,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(a=ji([a,f.pathnameBase]))}return s}function oy(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=ly(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let a=r[0],s=a.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((c,h,f)=>{let{paramName:p,isOptional:g}=h;if(p==="*"){let y=o[f]||"";s=a.slice(0,a.length-y.length).replace(/(.)\/+$/,"$1")}const x=o[f];return g&&!x?c[p]=void 0:c[p]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:a,pathnameBase:s,pattern:t}}function ly(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),ah(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function cy(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ah(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function sh(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const uy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,dy=t=>uy.test(t);function hy(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?Ua(t):t,a;if(n)if(dy(n))a=n;else{if(n.includes("//")){let s=n;n=Mv(n),ah(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+n))}n.startsWith("/")?a=Lf(n.substring(1),"/"):a=Lf(n,e)}else a=e;return{pathname:a,search:my(i),hash:gy(r)}}function Lf(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Sc(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function fy(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Sv(t,e){let n=fy(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function Ev(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=Ua(t):(r=bs({},t),xt(!r.pathname||!r.pathname.includes("?"),Sc("?","pathname","search",r)),xt(!r.pathname||!r.pathname.includes("#"),Sc("#","pathname","hash",r)),xt(!r.search||!r.search.includes("#"),Sc("#","search","hash",r)));let a=t===""||r.pathname==="",s=a?"/":r.pathname,o;if(s==null)o=n;else{let f=e.length-1;if(!i&&s.startsWith("..")){let p=s.split("/");for(;p[0]==="..";)p.shift(),f-=1;r.pathname=p.join("/")}o=f>=0?e[f]:"/"}let l=hy(r,o),c=s&&s!=="/"&&s.endsWith("/"),h=(a||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||h)&&(l.pathname+="/"),l}const Mv=t=>t.replace(/\/\/+/g,"/"),ji=t=>Mv(t.join("/")),py=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),my=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,gy=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function vy(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Tv=["post","put","patch","delete"];new Set(Tv);const _y=["get",...Tv];new Set(_y);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ps(){return Ps=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ps.apply(null,arguments)}const oh=re.createContext(null),xy=re.createContext(null),Dr=re.createContext(null),Bl=re.createContext(null),Ur=re.createContext({outlet:null,matches:[],isDataRoute:!1}),wv=re.createContext(null);function yy(t,e){let{relative:n}=e===void 0?{}:e;Os()||xt(!1);let{basename:i,navigator:r}=re.useContext(Dr),{hash:a,pathname:s,search:o}=Rv(t,{relative:n}),l=s;return i!=="/"&&(l=s==="/"?i:ji([i,s])),r.createHref({pathname:l,search:o,hash:a})}function Os(){return re.useContext(Bl)!=null}function Ia(){return Os()||xt(!1),re.useContext(Bl).location}function Av(t){re.useContext(Dr).static||re.useLayoutEffect(t)}function Sy(){let{isDataRoute:t}=re.useContext(Ur);return t?Uy():Ey()}function Ey(){Os()||xt(!1);let t=re.useContext(oh),{basename:e,future:n,navigator:i}=re.useContext(Dr),{matches:r}=re.useContext(Ur),{pathname:a}=Ia(),s=JSON.stringify(Sv(r,n.v7_relativeSplatPath)),o=re.useRef(!1);return Av(()=>{o.current=!0}),re.useCallback(function(c,h){if(h===void 0&&(h={}),!o.current)return;if(typeof c=="number"){i.go(c);return}let f=Ev(c,JSON.parse(s),a,h.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:ji([e,f.pathname])),(h.replace?i.replace:i.push)(f,h.state,h)},[e,i,s,a,t])}function Rv(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=re.useContext(Dr),{matches:r}=re.useContext(Ur),{pathname:a}=Ia(),s=JSON.stringify(Sv(r,i.v7_relativeSplatPath));return re.useMemo(()=>Ev(t,JSON.parse(s),a,n==="path"),[t,s,a,n])}function My(t,e){return Ty(t,e)}function Ty(t,e,n,i){Os()||xt(!1);let{navigator:r}=re.useContext(Dr),{matches:a}=re.useContext(Ur),s=a[a.length-1],o=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let c=Ia(),h;if(e){var f;let m=typeof e=="string"?Ua(e):e;l==="/"||(f=m.pathname)!=null&&f.startsWith(l)||xt(!1),h=m}else h=c;let p=h.pathname||"/",g=p;if(l!=="/"){let m=l.replace(/^\//,"").split("/");g="/"+p.replace(/^\//,"").split("/").slice(m.length).join("/")}let x=qx(t,{pathname:g}),y=by(x&&x.map(m=>Object.assign({},m,{params:Object.assign({},o,m.params),pathname:ji([l,r.encodeLocation?r.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?l:ji([l,r.encodeLocation?r.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),a,n,i);return e&&y?re.createElement(Bl.Provider,{value:{location:Ps({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Ui.Pop}},y):y}function wy(){let t=Dy(),e=vy(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return re.createElement(re.Fragment,null,re.createElement("h2",null,"Unexpected Application Error!"),re.createElement("h3",{style:{fontStyle:"italic"}},e),n?re.createElement("pre",{style:r},n):null,null)}const Ay=re.createElement(wy,null);class Ry extends re.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?re.createElement(Ur.Provider,{value:this.props.routeContext},re.createElement(wv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Cy(t){let{routeContext:e,match:n,children:i}=t,r=re.useContext(oh);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),re.createElement(Ur.Provider,{value:e},i)}function by(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var a;if(!n)return null;if(n.errors)t=n.matches;else if((a=i)!=null&&a.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let h=s.findIndex(f=>f.route.id&&(o==null?void 0:o[f.route.id])!==void 0);h>=0||xt(!1),s=s.slice(0,Math.min(s.length,h+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let h=0;h<s.length;h++){let f=s[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=h),f.route.id){let{loaderData:p,errors:g}=n,x=f.route.loader&&p[f.route.id]===void 0&&(!g||g[f.route.id]===void 0);if(f.route.lazy||x){l=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((h,f,p)=>{let g,x=!1,y=null,m=null;n&&(g=o&&f.route.id?o[f.route.id]:void 0,y=f.route.errorElement||Ay,l&&(c<0&&p===0?(Iy("route-fallback"),x=!0,m=null):c===p&&(x=!0,m=f.route.hydrateFallbackElement||null)));let d=e.concat(s.slice(0,p+1)),_=()=>{let v;return g?v=y:x?v=m:f.route.Component?v=re.createElement(f.route.Component,null):f.route.element?v=f.route.element:v=h,re.createElement(Cy,{match:f,routeContext:{outlet:h,matches:d,isDataRoute:n!=null},children:v})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?re.createElement(Ry,{location:n.location,revalidation:n.revalidation,component:y,error:g,children:_(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):_()},null)}var Cv=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Cv||{}),bv=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(bv||{});function Py(t){let e=re.useContext(oh);return e||xt(!1),e}function Ny(t){let e=re.useContext(xy);return e||xt(!1),e}function Ly(t){let e=re.useContext(Ur);return e||xt(!1),e}function Pv(t){let e=Ly(),n=e.matches[e.matches.length-1];return n.route.id||xt(!1),n.route.id}function Dy(){var t;let e=re.useContext(wv),n=Ny(),i=Pv();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function Uy(){let{router:t}=Py(Cv.UseNavigateStable),e=Pv(bv.UseNavigateStable),n=re.useRef(!1);return Av(()=>{n.current=!0}),re.useCallback(function(r,a){a===void 0&&(a={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,Ps({fromRouteId:e},a)))},[t,e])}const Df={};function Iy(t,e,n){Df[t]||(Df[t]=!0)}function Fy(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function xn(t){xt(!1)}function Oy(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Ui.Pop,navigator:a,static:s=!1,future:o}=t;Os()&&xt(!1);let l=e.replace(/^\/*/,"/"),c=re.useMemo(()=>({basename:l,navigator:a,static:s,future:Ps({v7_relativeSplatPath:!1},o)}),[l,o,a,s]);typeof i=="string"&&(i=Ua(i));let{pathname:h="/",search:f="",hash:p="",state:g=null,key:x="default"}=i,y=re.useMemo(()=>{let m=sh(h,l);return m==null?null:{location:{pathname:m,search:f,hash:p,state:g,key:x},navigationType:r}},[l,h,f,p,g,x,r]);return y==null?null:re.createElement(Dr.Provider,{value:c},re.createElement(Bl.Provider,{children:n,value:y}))}function ky(t){let{children:e,location:n}=t;return My(Zu(e),n)}new Promise(()=>{});function Zu(t,e){e===void 0&&(e=[]);let n=[];return re.Children.forEach(t,(i,r)=>{if(!re.isValidElement(i))return;let a=[...e,r];if(i.type===re.Fragment){n.push.apply(n,Zu(i.props.children,a));return}i.type!==xn&&xt(!1),!i.props.index||!i.props.children||xt(!1);let s={id:i.props.id||a.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(s.children=Zu(i.props.children,a)),n.push(s)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qu(){return Qu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Qu.apply(null,arguments)}function By(t,e){if(t==null)return{};var n={};for(var i in t)if({}.hasOwnProperty.call(t,i)){if(e.indexOf(i)!==-1)continue;n[i]=t[i]}return n}function zy(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Hy(t,e){return t.button===0&&(!e||e==="_self")&&!zy(t)}const Gy=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Vy="6";try{window.__reactRouterVersion=Vy}catch{}const jy="startTransition",Uf=U_[jy];function Wy(t){let{basename:e,children:n,future:i,window:r}=t,a=re.useRef();a.current==null&&(a.current=Xx({window:r,v5Compat:!0}));let s=a.current,[o,l]=re.useState({action:s.action,location:s.location}),{v7_startTransition:c}=i||{},h=re.useCallback(f=>{c&&Uf?Uf(()=>l(f)):l(f)},[l,c]);return re.useLayoutEffect(()=>s.listen(h),[s,h]),re.useEffect(()=>Fy(i),[i]),re.createElement(Oy,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s,future:i})}const Xy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Yy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Be=re.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:a,replace:s,state:o,target:l,to:c,preventScrollReset:h,viewTransition:f}=e,p=By(e,Gy),{basename:g}=re.useContext(Dr),x,y=!1;if(typeof c=="string"&&Yy.test(c)&&(x=c,Xy))try{let v=new URL(window.location.href),M=c.startsWith("//")?new URL(v.protocol+c):new URL(c),b=sh(M.pathname,g);M.origin===v.origin&&b!=null?c=b+M.search+M.hash:y=!0}catch{}let m=yy(c,{relative:r}),d=$y(c,{replace:s,state:o,target:l,preventScrollReset:h,relative:r,viewTransition:f});function _(v){i&&i(v),v.defaultPrevented||d(v)}return re.createElement("a",Qu({},p,{href:x||m,onClick:y||a?i:_,ref:n,target:l}))});var If;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(If||(If={}));var Ff;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Ff||(Ff={}));function $y(t,e){let{target:n,replace:i,state:r,preventScrollReset:a,relative:s,viewTransition:o}=e===void 0?{}:e,l=Sy(),c=Ia(),h=Rv(t,{relative:s});return re.useCallback(f=>{if(Hy(f,n)){f.preventDefault();let p=i!==void 0?i:gl(c)===gl(h);l(t,{replace:p,state:r,preventScrollReset:a,relative:s,viewTransition:o})}},[c,l,h,i,r,n,t,a,s,o])}const Nv=re.createContext(),Ec={hi:{nav:{templeName:"श्री रामेश्वर महादेव मंदिर",templeLoc:"पंचकोशी मार्ग, वाराणसी",home:"होम",intro:"मंदिर परिचय",history:"इतिहास",yatra:"पंचकोशी यात्रा",gallery:"गैलरी",timings:"आरती समय",priest:"पं. अनूप तिवारी",contact:"संपर्क",donate:"दान करें",langSwitch:"English",langCode:"EN"},home:{mantra:"|| ॐ नमः शिवाय ||",heroTitle:"श्री रामेश्वर महादेव मंदिर",heroSub:"वाराणसी (काशी)",heroDesc:"स्कंद पुराण (काशी खंड) में वर्णित एवं मर्यादा पुरुषोत्तम भगवान श्रीराम द्वारा ब्रह्महत्या दोष निवारण हेतु स्थापित सिद्ध शिव धाम। वरुणा नदी तट पर स्थित काशी पंचकोशी परिक्रमा का अति पावन तृतीय विश्राम पड़ाव।",btnYatra:"ॐ पंचकोशी यात्रा देखें",btnDarshan:"मंदिर दर्शन एवं मार्ग",badgeSeva:"लोटा-भंटा मेला",badgeSevaSub:"निःशुल्क भोजन प्रसादम",introTitle:"मंदिर परिचय",introText:"वाराणसी (काशी) के प्रसिद्ध पंचकोशी परिक्रमा मार्ग पर वरुणा नदी के तट पर स्थित श्री रामेश्वर महादेव मंदिर सनातन धर्म का अत्यंत प्राचीन एवं जाग्रत केंद्र है। यह मंदिर 88 किमी लंबे पंचकोशी परिक्रमा मार्ग का तृतीय और सबसे मुख्य रात्रि विश्राम पड़ाव है।",historyTitle:"मंदिर का इतिहास व पौराणिक गाथा",historyText:"स्कंद पुराण के काशी खंड के अनुसार, लंका विजय के उपरांत भगवान श्रीराम ने ब्रह्महत्या दोष से मुक्ति हेतु वरुणा तट पर स्वयं बालू से शिवलिंग का निर्माण कर घनघोर तपस्या की थी। वर्तमान लाल बलुआ पत्थर के मंदिर व घाट का निर्माण मराठा शासक सिंधिया राजवंश एवं पुण्यश्लोक अहिल्याबाई होल्कर द्वारा कराया गया।",readMore:"और पढ़ें",listenMore:"और सुनें",yatraBadge:"पवित्र परिक्रमा पड़ाव",yatraTitle:"काशी पंचकोशी यात्रा",yatraDesc:"काशी पंचकोशी यात्रा सनातन धर्म की सर्वाधिक पूजनीय परिक्रमा है। 88 किलोमीटर (15 कोस) की इस यात्रा में 108 देवालयों के दर्शन किए जाते हैं, जिसमें श्री रामेश्वर महादेव मंदिर तृतीय मुख्य रात्रि पड़ाव है।",yatraSubdesc:"पदयात्री यहाँ वरुणा नदी में स्नान कर रात्रि विश्राम करते हैं और प्रसिद्ध लोटा-भंटा महाप्रसाद ग्रहण करते हैं।",yatraTimelineTitle:"पंचकोशी परिक्रमा के 5 मुख्य पड़ाव",stationKardameshwar:"कर्दमेश्वर (1st पड़ाव)",stationBhimchandi:"भीमचंडी (2nd पड़ाव)",stationRameshwar:"रामेश्वर महादेव (3rd पड़ाव)",stationShivpur:"पाँचो पाण्डव (4th पड़ाव)",stationKapildhara:"कपिलधारा (5th पड़ाव)",btnYatraDetails:"यात्रा की संपूर्ण जानकारी",priestTag:"मुख्य पुजारी",priestBio:"पं. अनूप तिवारी जी पारंपरिक वैदिक विधि-विधान से वर्षों से मंदिर में नित्य पूजा, रुद्राभिषेक, संध्या आरती एवं धार्मिक अनुष्ठानों का संचालन कर रहे हैं।",btnContactPriest:"संपर्क करें",timingsTag:"दैनिक आरती समय",timingMorning:"मंगला आरती",timingMorningRange:"प्रातः 05:00 - 06:00",timingEvening:"संध्या आरती",timingEveningRange:"सायं 07:00 - 08:00",liveStatus:"मंदिर खुला है • दर्शन चालू",donateTag:"दान एवं अन्नक्षेत्र सहयोग",donateSub:"मंदिर विकास, अन्नक्षेत्र, लोटा-भंटा मेला एवं पदयात्री सेवा हेतु स्वेच्छा से दान करें।",scanPayTag:"Scan & Pay via any UPI App",upiIdLabel:"UPI ID:",copyBtn:"कॉपी करें",copiedMsg:"UPI ID कॉपी हो गई!",contactFormTitle:"संपर्क एवं पूछताछ",contactFormSuccess:"आपका संदेश प्राप्त हो गया है!",inputName:"आपका नाम *",inputPhone:"मोबाइल नंबर *",inputMsg:"संदेश या पूछताछ *",btnSendMsg:"WhatsApp पर संदेश भेजें",phoneLabel:"फ़ोन / WhatsApp:",mapTitle:"मंदिर स्थान",openGoogleMaps:"Google Maps पर देखें"},intro:{title:"श्री रामेश्वर महादेव मंदिर - विस्तृत परिचय",sub:"काशी पंचकोशी परिक्रमा का अति पावन तृतीय पड़ाव",cardHeading:"मंदिर का आध्यात्मिक, भौगोलिक एवं सांस्कृतिक परिचय",p1:"श्री रामेश्वर महादेव मंदिर वाराणसी (काशी) के पश्चिमोत्तर भाग में पवित्र वरुणा नदी के तट पर स्थित सनातन धर्म का एक अति प्राचीन एवं सिद्ध शिव धाम है। यह मंदिर विश्वप्रसिद्ध 'काशी पंचकोशी परिक्रमा' का 3रा सबसे महत्वपूर्ण पड़ाव (Halt No: 3) है।",p2:"ऐतिहासिक रूप से यह क्षेत्र पूर्व में 'करौना' (करौंदा के सघन वनों के कारण) नाम से जाना जाता था, जो बाद में भगवान श्रीराम के आगमन एवं रामेश्वर शिवलिंग स्थापना के पश्चात 'रामेश्वर' नाम से प्रसिद्ध हुआ।",p3:"मंदिर परिसर में विशाल लाल बलुआ पत्थर से निर्मित मण्डप, वरुणा नदी घाट, नंदी मण्डप, सीता-लक्ष्मण-भरत-शत्रुघ्न शिवलिंग, तथा पदयात्रियों हेतु धर्मशाला व अन्नक्षेत्र स्थित है। यहाँ मार्गशीर्ष (अघन) मास में प्रसिद्ध 'लोटा-भंटा मेला' आयोजित होता है जिसमें हजारों श्रद्धालु बाटी-चोखा बनाकर महादेव को भोग लगाते हैं।",sidebarHeading:"मुख्य आकर्षण एवं तथ्य",item1:"भगवान श्रीराम द्वारा स्थापित बालू का शिवलिंग",item2:"पवित्र वरुणा नदी तट एवं सुंदर मराठा घाट",item3:"पंचकोशी पदयात्री मुख्य रात्रि विश्राम पड़ाव",item4:"वार्षिक प्रसिद्ध लोटा-भंटा (बाटी-चोखा) मेला"},history:{title:"श्री रामेश्वर महादेव मंदिर - प्रामाणिक इतिहास",sub:"स्कंद पुराण (काशी खंड) एवं मराठा स्थापत्य कला की अमर गाथा",cardHeading:"पौराणिक कथा एवं ऐतिहासिक निर्माण विवरण",p1:"स्कंद पुराण के 'काशी खंड' एवं रामचरितमानस के संदर्भों के अनुसार, त्रेतायुग में लंकापति रावण का वध करने के पश्चात भगवान श्रीराम, भ्राता लक्ष्मण, माता सीता एवं हनुमान जी के साथ काशी पधारे थे। रावण (जो कि पुलस्त्य ऋषि का वंशज एवं ब्राह्मण था) का वध करने से उत्पन्न 'ब्रह्महत्या दोष' के निवारण एवं भगवान शिव की कृपा प्राप्ति हेतु श्रीराम ने वरुणा नदी के तट पर मुट्ठी भर बालू से शिवलिंग निर्मित कर कठोर तपस्या की।",p2:"भगवान शिव ने श्रीराम की अनन्य भक्ति से प्रसन्न होकर उन्हें प्रत्यक्ष दर्शन दिए और वरदान प्रदान किया कि यह स्थान संसार में 'रामेश्वर महादेव' नाम से विख्यात होगा तथा यहाँ वरुणा में स्नान कर दर्शन करने वाले भक्तों के समस्त पाप नष्ट हो जाएँगे। श्रीराम के साथ ही माता सीता, लक्ष्मण, भरत, शत्रुघ्न एवं हनुमान जी ने भी यहाँ शिवलिंग स्थापित किए जो आज भी मंदिर परिसर में पूजित हैं।",p3:"ऐतिहासिक रूप से मंदिर का वर्तमान भव्य स्वरूप मराठा वास्तुकला का बेजोड़ नमूना है। 18वीं व 19वीं शताब्दी में ग्वालियर के महाराजा जानकोजी राव सिंधिया, महाराजा जीवाजी राव सिंधिया एवं मालवा की महारानी पुण्यश्लोक अहिल्याबाई होल्कर ने ग्वालियर के लाल बलुआ पत्थरों से सुंदर मंदिर, नक्काशीदार बालकनी, कोट तथा वरुणा घाट का निर्माण कराया।",sidebarHeading:"ऐतिहासिक व पौराणिक तथ्य",item1:"स्थापना: भगवान श्रीराम (त्रेतायुग में बालू शिवलिंग)",item2:"ग्रंथ प्रमाण: स्कंद पुराण (काशी खंड)",item3:"स्थापत्य: ग्वालियर लाल बलुआ पत्थर (मराठा शैली)",item4:"संरक्षक: सिंधिया राजवंश व महारानी अहिल्याबाई होल्कर"},yatra:{title:"काशी पंचकोशी परिक्रमा",sub:"88 किलोमीटर की विश्व की प्राचीनतम पदयात्रा एवं पड़ाव विवरण",cardHeading:"काशी पंचकोशी यात्रा का प्रामाणिक महत्व",p1:"काशी की पंचकोशी परिक्रमा विश्व की सबसे प्राचीन एवं फलदायी धार्मिक पदयात्राओं में सर्वोच्च स्थान रखती है। इसमें काशी नगरी के चारों ओर 5 क्रोश (लगभग 88 किमी) के दायरे में स्थित 108 प्रमुख देवालयों एवं तीर्थों की पदयात्रा की जाती है।",p2:"इस महायात्रा में कुल 5 मुख्य रात्रि विश्राम पड़ाव (Halt) होते हैं:",halt1:"1. प्रथम पड़ाव: कर्दमेश्वर महादेव (कंदवा) - यात्रा का पहला रात्रि विश्राम।",halt2:"2. द्वितीय पड़ाव: भीमचंडी देवी - माँ दुर्गा के शक्तिपीठ स्वरूप की पूजा।",halt3:"3. तृतीय पड़ाव: श्री रामेश्वर महादेव (वरुणा तट) - केंद्रीय मुख्य पड़ाव जहाँ पदयात्री वरुणा स्नान कर विश्राम करते हैं व लोटा-भंटा महाप्रसाद ग्रहण करते हैं।",halt4:"4. चतुर्थ पड़ाव: पाँचो पाण्डव (शिवपुर) - पांडवों द्वारा स्थापित शिव मंदिर।",halt5:"5. पंचम पड़ाव: कपिलधारा (सारंगनाथ/राजघाट) - अंतिम पड़ाव जिसके बाद मणिकर्णिका घाट पर यात्रा का संकल्प पूर्ण होता है।",p3:"रामेश्वर महादेव पड़ाव को यात्रा की 'आत्मा' माना जाता है। यहाँ वैशाख, सावन तथा मार्गशीर्ष मास में लाखों श्रद्धालु नंगे पैर चलते हुए पहुँचते हैं और वरुणा नदी तट पर विश्राम करते हैं।",sidebarHeading:"पंचकोशी यात्रा निर्देश",item1:"मणिकर्णिका घाट से संकल्प लेकर पदयात्रा प्रारंभ होती है",item2:"रामेश्वर पड़ाव पर निःशुल्क भोजन व विश्राम व्यवस्था",item3:"वरुणा नदी में स्नान व रामेश्वर पूजन अत्यंत पुण्यदायी",item4:"वार्षिक लोटा-भंटा मेले में संतान सुख हेतु बाटी-चोखा भोग"},gallery:{title:"मंदिर चित्र गैलरी",sub:"श्री रामेश्वर महादेव मंदिर के पावन स्वरूप एवं सुंदर क्षण",viewLarge:"बड़ा देखें"},timings:{title:"आरती एवं दर्शन समय सारणी",sub:"श्री रामेश्वर महादेव मंदिर दैनिक पूजा एवं आरती समय",cardHeading:"दैनिक पूजा एवं आरती समय सारणी",morningTitle:"मंगला आरती एवं प्रातः पूजन",morningTime:"प्रातः 05:00 बजे - 06:00 बजे",morningDesc:"प्रातः काल कपाट उद्घाटन, शिवजी का गंगाजल व वरुणा जल से अभिषेक, शृंगार एवं प्रथम मंगला आरती।",middayTitle:"भोग आरती एवं मध्याह्न विश्राम",middayTime:"दोपहर 12:00 बजे - 12:30 बजे",middayDesc:"भगवान शिव को राजभोग अर्पण एवं मध्याह्न आरती। (दोपहर 12:30 से 04:00 विश्राम हेतु कपाट बंद)",eveningTitle:"संध्या महाआरती एवं अलौकिक शृंगार",eveningTime:"सायं 07:00 बजे - 08:15 बजे",eveningDesc:"दैनिक भव्य संध्या आरती, डमरू वादन, धूप-दीप, शंखनाद एवं फूलों से मनमोहक शृंगार दर्शन।",nightTitle:"शयन आरती एवं कपाट शयन",nightTime:"रात्रि 09:30 बजे - 10:00 बजे",nightDesc:"रात्रि शयन आरती एवं मंत्रोच्चार के पश्चात कपाट बंद होना।",sidebarHeading:"दर्शनार्थियों हेतु नियम",item1:"शालीन एवं पारंपरिक भारतीय वस्त्र धारण करें",item2:"गर्भ गृह में स्वच्छता व पवित्रता बनाए रखें",item3:"विशेष आरती समय 15 मिनट पूर्व उपस्थित हों",item4:"मोबाइल शांत (Silent) मोड पर रखें"},priest:{title:"मुख्य पुजारी - पं. अनूप तिवारी",sub:"वैदिक पूजा, रुद्राभिषेक एवं धार्मिक अनुष्ठान विशेषज्ञ",name:"पं. अनूप तिवारी",role:"मुख्य पुजारी, श्री रामेश्वर महादेव मंदिर, वाराणसी",intro:"पं. अनूप तिवारी जी पारंपरिक वैदिक विधि-विधान एवं कर्मकांड से वर्षों से श्री रामेश्वर महादेव मंदिर में नियमित रूप से नित्य पूजा, आरती, शृंगार एवं रुद्राभिषेक का संपादन कर रहे हैं।",servicesTitle:"पं. अनूप तिवारी जी द्वारा संपन्न की जाने वाली पूजा सेवाएं",service1Title:"रुद्राभिषेक",service1Desc:"दूध, दही, घी, शहद, शक्कर, गंगाजल एवं बेलपत्र द्वारा विशेष वेद मंत्रों के साथ शिवजी का अभिषेक।",service2Title:"महामृत्युंजय जाप",service2Desc:"अकाल मृत्यु भय निवारण, असाध्य रोग मुक्ति व आरोग्य लाभ हेतु महामृत्युंजय मंत्र जाप।",service3Title:"कालसर्प व दोष शांति",service3Desc:"जन्मकुंडली दोष, राहू-केतु एवं कालसर्प दोष शांति हेतु विशेष तांत्रिक व वैदिक अनुष्ठान।",service4Title:"विवाह व गृह प्रवेश",service4Desc:"पावन विवाह संस्कार, सत्यनारायण कथा तथा नूतन गृह प्रवेश पूजन विधि।",bookingHeading:"पूजा-अनुष्ठान बुकिंग हेतु संपर्क करें",bookingDesc:"यदि आप श्री रामेश्वर महादेव मंदिर में रुद्राभिषेक, विशेष पूजा अथवा पंचकोशी यात्रा के दौरान दर्शन में सहायता चाहते हैं, तो पं. अनूप तिवारी जी से सीधे संपर्क कर सकते हैं।",btnWhatsapp:"WhatsApp पर संदेश भेजें",btnCall:"कॉल करें: +91 9956120169",sidebarAddress:"पुजारी जी का पता",fullAddress:`श्री रामेश्वर महादेव मंदिर,
पंचकोशी मार्ग, वाराणसी (उ.प्र.) - 221001`},donate:{title:"दान एवं सेवा सहयोग",sub:"मंदिर विकास, अन्नक्षेत्र, लोटा-भंटा मेला एवं पदयात्री सेवा हेतु दान अर्पित करें",cardHeading:'"दान धर्म का मूल है"',cardSub:"श्री रामेश्वर महादेव मंदिर विकास न्यास द्वारा संचालित अन्नक्षेत्र (निःशुल्क भोजन प्रसादम), पंचकोशी पदयात्री सेवा, गौसेवा एवं मंदिर जीर्णोद्धार कार्यों में आपका अमूल्य योगदान सादर आमंत्रित है।",scanTag:"Google Pay, PhonePe, Paytm या किसी भी UPI ऐप से स्कैन करें",upiIdLabel:"UPI ID:",copyBtn:"UPI ID Copy करें",copiedBtn:"कॉपी हो गया ✓",bankDetailsTitle:"बैंक खाता विवरण (Direct Bank Transfer)",accountNameLabel:"खाता धारक का नाम:",accountNameValue:"Shri Rameshwar Mahadev Mandir Vikas Nyas",bankNameLabel:"बैंक का नाम:",bankNameValue:"Union Bank of India",upiAddressLabel:"UPI Address:",btnReceipt:"दान रसीद हेतु संपर्क करें",sidebarPurpose:"दान का मुख्य उद्देश्य",purpose1:"अन्नक्षेत्र: श्रद्धालुओं हेतु निःशुल्क भोजन प्रसादम",purpose2:"जीर्णोद्धार: मंदिर परिसर व घाट रखरखाव",purpose3:"गौसेवा: मंदिर गऊशाला संचालन",purpose4:"पदयात्री: पंचकोशी यात्री निःशुल्क सेवा",sidebarPayments:"💳 स्वीकृत भुगतान माध्यम"},contact:{title:"संपर्क एवं स्थान मार्गदर्शिका",sub:"श्री रामेश्वर महादेव मंदिर वाराणसी पहुँचने के मार्ग एवं संपर्क सूत्र",heading:"संदेश भेजें / पूजा बुकिंग पूछताछ",formSuccess:"आपका संदेश WhatsApp पर खोल दिया गया है! शीघ्र ही पंडित जी उत्तर देंगे।",inputNameLabel:"आपका पूरा नाम *",inputNamePlaceholder:"उदा. राम कुमार शर्मा",inputPhoneLabel:"मोबाइल नंबर *",inputPhonePlaceholder:"+91 9956120169",inputEmailLabel:"ईमेल पता",inputEmailPlaceholder:"yourname@gmail.com",inputMessageLabel:"आपका संदेश लिखें *",inputMessagePlaceholder:"पूजा बुकिंग, दर्शन अथवा मंदिर से संबंधित अपना प्रश्न लिखें...",btnSubmit:"WhatsApp पर संदेश भेजें",reachHeading:"मंदिर पहुँचने के मार्ग",trainTitle:"रेल मार्ग से (By Train)",trainDesc:"वाराणसी जंक्शन (कैंट स्टेशन) से लगभग 14 किमी की दूरी पर स्थित है। ऑटो/टैक्सी आसानी से उपलब्ध है।",flightTitle:"वायु मार्ग से (By Flight)",flightDesc:"लाल बहादुर शास्त्री अंतरराष्ट्रीय हवाई अड्डा (बाबतपुर) से दूरी लगभग 18 किमी है।",roadTitle:"सड़क मार्ग से (By Road)",roadDesc:"वाराणसी शहर से शिवपुर अथवा पंचकोशी मार्ग होकर मंदिर सीधे पहुँचा जा सकता है।",sidebarTitle:"संपर्क विवरण",addressLabel:"पता:",addressValue:"श्री रामेश्वर महादेव मंदिर - काशी पंचक्रोशी (Halt No: 3), पंचकोशी मार्ग, वरुणा तट, वाराणसी - 221001",phoneLabel:"फ़ोन / WhatsApp:",priestLabel:"मुख्य पुजारी:",priestValue:"पं. अनूप तिवारी",emailLabel:"ईमेल:",emailValue:"info@rameshwartemple.in",mapTitle:"Google Maps लोकेशन",btnGoogleMaps:"Google Maps पर खोलें"},footer:{mantraLine:"|| ॐ नमः शिवाय ||",heading:"Ψ हर हर महादेव Ψ",copyright:"© 2026 श्री रामेश्वर महादेव मंदिर | सर्वाधिकार सुरक्षित",whatsappTitle:"WhatsApp सहायता"}},en:{nav:{templeName:"Shri Rameshwar Mahadev Temple",templeLoc:"Panchkoshi Marg, Varanasi",home:"Home",intro:"About",history:"History",yatra:"Panchkoshi",gallery:"Gallery",timings:"Timings",priest:"Pt. Anoop",contact:"Contact",donate:"Donate",langSwitch:"हिंदी",langCode:"HI"},home:{mantra:"|| Om Namah Shivaya ||",heroTitle:"Shri Rameshwar Mahadev Temple",heroSub:"Varanasi (Kashi)",heroDesc:"A revered Shiva shrine mentioned in the Skanda Purana (Kashi Khanda), consecrated by Lord Shri Rama himself to seek redemption from Brahmahatya Dosha. Situated on the Varuna River bank, it serves as the vital 3rd halt of the sacred Kashi Panchkoshi Yatra.",btnYatra:"Explore Panchkoshi Yatra",btnDarshan:"Temple Visit & Route",badgeSeva:"Lota-Bhanta Mela",badgeSevaSub:"Free Food Prasad for Devotees",introTitle:"About the Temple",introText:"Situated on the banks of the sacred Varuna River along the Panchkoshi Parikrama route in Varanasi (Kashi), Shri Rameshwar Mahadev Temple is an ancient and spiritually vibrant center of Sanatan Dharma. It is the crucial 3rd and main overnight halt of the 88-km Yatra.",historyTitle:"Temple History & Mythological Lore",historyText:"According to the Kashi Khanda of Skanda Purana, Lord Shri Rama consecrated a Shivalinga from sand on the Varuna River bank after defeating Ravana to cleanse Brahmahatya dosha. The current red sandstone structure and ghats were built by Maratha rulers of Scindia dynasty and Punyashlok Ahilyabai Holkar.",readMore:"Read More",listenMore:"Listen Details",yatraBadge:"Sacred Parikrama Shrine",yatraTitle:"Kashi Panchkoshi Yatra",yatraDesc:"The Kashi Panchkoshi Yatra is considered the most sacred religious circumambulation of Kashi, spanning 88 kilometers (15 krosh) across 108 temples. Shri Rameshwar Mahadev Temple is its principal central halt.",yatraSubdesc:"Pilgrims bathe in the Varuna River, rest overnight here, and partake in the traditional Lota-Bhanta mahaprasad.",yatraTimelineTitle:"5 Major Halts of Panchkoshi Parikrama",stationKardameshwar:"Kardameshwar (1st Halt)",stationBhimchandi:"Bhimchandi (2nd Halt)",stationRameshwar:"Rameshwar Mahadev (3rd Halt)",stationShivpur:"Pancho Pandav (4th Halt)",stationKapildhara:"Kapildhara (5th Halt)",btnYatraDetails:"Complete Yatra Details",priestTag:"Head Priest",priestBio:"Pt. Anoop Tiwari Ji has been conducting daily Vedic worship, Rudrabhishek, evening Aarti, and sacred ceremonies at the temple for many years.",btnContactPriest:"Contact Priest",timingsTag:"Daily Aarti Schedule",timingMorning:"Mangala Aarti",timingMorningRange:"05:00 AM - 06:00 AM",timingEvening:"Sandhya Aarti",timingEveningRange:"07:00 PM - 08:00 PM",liveStatus:"Temple Open • Darshan Active",donateTag:"Donation & Annakshetra",donateSub:"Contribute voluntarily for temple renovation, Annakshetra, Lota-Bhanta Mela, and pilgrim welfare.",scanPayTag:"Scan & Pay via any UPI App",upiIdLabel:"UPI ID:",copyBtn:"Copy",copiedMsg:"UPI ID Copied!",contactFormTitle:"Get in Touch",contactFormSuccess:"Your message has been received!",inputName:"Your Name *",inputPhone:"Mobile Number *",inputMsg:"Message or Inquiry *",btnSendMsg:"Send Message via WhatsApp",phoneLabel:"Phone / WhatsApp:",mapTitle:"Temple Location",openGoogleMaps:"View on Google Maps"},intro:{title:"Shri Rameshwar Mahadev Temple - Detailed Introduction",sub:"The Sacred 3rd Halt of Kashi Panchkoshi Parikrama",cardHeading:"Spiritual, Geographical, and Cultural Overview",p1:"Shri Rameshwar Mahadev Temple is an ancient and spiritually charged Shiva shrine located on the banks of the sacred Varuna River in the northwestern precinct of Varanasi (Kashi). It serves as the most vital 3rd overnight halt (Halt No: 3) of the world-famous 'Kashi Panchkoshi Parikrama'.",p2:"Historically, the surrounding village was known as 'Karauna' due to dense Karaunda forests, which was later renamed 'Rameshwar' following Lord Shri Rama's divine visit and consecration of the Rameshwar Shivalinga.",p3:"The temple complex features a grand red sandstone mandap, stone ghats along the Varuna River, Nandi Mandap, Shivalingas consecrated by Sita-Lakshmana-Bharata-Shatrughna, pilgrim rest houses, and an Annakshetra. Every year during Margashirsha month, the iconic 'Lota-Bhanta Fair' is celebrated here where thousands cook Baati-Chokha in earthen pots to offer Lord Shiva.",sidebarHeading:"Key Highlights & Facts",item1:"Sand Shivalinga Consecrated by Lord Shri Rama",item2:"Sacred Varuna River Bank & Maratha Stone Ghats",item3:"Primary Central Overnight Halt of Panchkoshi Yatra",item4:"Famous Annual Lota-Bhanta (Baati-Chokha) Fair"},history:{title:"Shri Rameshwar Mahadev Temple - Authentic History",sub:"Skanda Purana (Kashi Khanda) & Maratha Architectural Heritage",cardHeading:"Puranic Legends and Historical Construction Record",p1:"According to the 'Kashi Khanda' of the Skanda Purana and Ramcharitmanas traditions, after his victory over Ravana in Lanka, Lord Shri Rama arrived in Kashi alongside Lord Lakshmana, Mother Sita, and Hanuman Ji. To seek redemption from 'Brahmahatya Dosha' (incurred by killing Ravana, a Brahmin descendant of Rishi Pulastya) and earn Lord Shiva's blessings, Lord Rama crafted a Shivalinga from a handful of Varuna river sand and performed severe penance.",p2:"Pleased with Lord Rama's supreme devotion, Lord Shiva appeared before him and bestowed the boon that this holy spot shall be immortalized across the world as 'Rameshwar Mahadev' and devotees bathing in the Varuna and worshiping here shall be liberated from all sins. Shivalingas consecrated by Mother Sita, Lakshmana, Bharata, Shatrughna, and Hanuman Ji are also worshiped within the temple precinct.",p3:"Historically, the present temple structure is an architectural masterpiece of Maratha design. During the 18th and 19th centuries, Maharaja Jankoji Rao Scindia, Maharaja Jivaji Rao Scindia of Gwalior, and Maharani Punyashlok Ahilyabai Holkar constructed the grand temple, carved stone balconies, fortress walls, and Varuna ghats using red sandstone brought from Gwalior.",sidebarHeading:"Historical & Puranic Facts",item1:"Consecrated By: Lord Shri Rama (Treta Yuga Sand Linga)",item2:"Textual Reference: Skanda Purana (Kashi Khanda)",item3:"Architecture: Gwalior Red Sandstone (Maratha Style)",item4:"Patrons: Scindia Dynasty & Maharani Ahilyabai Holkar"},yatra:{title:"Kashi Panchkoshi Parikrama",sub:"88-Kilometer Sacred Pilgrimage Walk & Halt Details",cardHeading:"Authentic Significance of Kashi Panchkoshi Yatra",p1:"The Panchkoshi Parikrama of Kashi holds the highest position among sacred pilgrimage walks in Sanatan Dharma. Spanning a 5-krosh (approx. 88 km) perimeter around holy Kashi, pilgrims walk barefoot to worship at 108 designated temples and holy spots.",p2:"The pilgrimage features 5 primary overnight halts (Night Stops):",halt1:"1. 1st Halt: Kardameshwar Mahadev (Kandwa) - First night resting shrine.",halt2:"2. 2nd Halt: Bhimchandi Devi - Worship of Goddess Durga's Shaktipeeth form.",halt3:"3. 3rd Halt: Shri Rameshwar Mahadev (Varuna Bank) - Central primary halt where pilgrims take holy dips in Varuna River, rest overnight, and partake in Lota-Bhanta mahaprasad.",halt4:"4. 4th Halt: Pancho Pandav (Shivpur) - Temple established by the Pandavas.",halt5:"5. 5th Halt: Kapildhara (Sarangnath/Rajghat) - Final halt before concluding the resolution at Manikarnika Ghat.",p3:"Rameshwar Mahadev Halt is revered as the 'Soul of the Yatra'. During Vaisakha, Shravan, and Margashirsha months, lakhs of bare-footed pilgrims gather along the Varuna River bank to seek divine peace.",sidebarHeading:"Panchkoshi Yatra Highlights",item1:"Commences with sacred resolution at Manikarnika Ghat",item2:"Free food and accommodation at Rameshwar Halt",item3:"Holy Varuna River bath & Rameshwar Mahadev Darshan",item4:"Annual Lota-Bhanta festival offering Baati-Chokha"},gallery:{title:"Temple Photo Gallery",sub:"Divine Glimpses of Shri Rameshwar Mahadev Temple",viewLarge:"View Fullscreen"},timings:{title:"Aarti & Darshan Timings",sub:"Daily Worship & Aarti Schedule of Shri Rameshwar Mahadev Temple",cardHeading:"Daily Worship and Aarti Timetable",morningTitle:"Mangala Aarti & Morning Worship",morningTime:"05:00 AM - 06:00 AM",morningDesc:"Early morning temple doors opening, holy bathing of Shivalinga with Gangajal and Varuna water, floral decoration, and Mangala Aarti.",middayTitle:"Bhog Aarti & Midday Rest",middayTime:"12:00 PM - 12:30 PM",middayDesc:"Offering Rajbhog prasad to Lord Shiva followed by Midday Aarti. (Doors closed 12:30 PM - 04:00 PM for rest)",eveningTitle:"Sandhya Mahaaarti & Divine Shringar",eveningTime:"07:00 PM - 08:15 PM",eveningDesc:"Grand evening Aarti accompanied by Damru beats, incense, shankhnaad, and grand floral adornment.",nightTitle:"Shayan Aarti & Night Closing",nightTime:"09:30 PM - 10:00 PM",nightDesc:"Night closing Aarti after which temple doors close for the day.",sidebarHeading:"Devotee Guidelines",item1:"Please wear modest and traditional Indian attire",item2:"Maintain purity & cleanliness near sanctum sanctorum",item3:"Arrive 15 minutes prior to Aarti schedule",item4:"Keep mobile phones on silent mode"},priest:{title:"Head Priest - Pt. Anoop Tiwari",sub:"Vedic Puja, Rudrabhishek & Religious Ritual Specialist",name:"Pt. Anoop Tiwari",role:"Head Priest, Shri Rameshwar Mahadev Temple, Varanasi",intro:"Pt. Anoop Tiwari Ji has been performing authentic daily worship, Rudrabhishek, evening Aarti, adornments, and Vedic ceremonies at Shri Rameshwar Mahadev Temple for many years.",servicesTitle:"Puja Services Conducted by Pt. Anoop Tiwari Ji",service1Title:"Rudrabhishek",service1Desc:"Sacred bathing of Shivalinga using milk, curd, ghee, honey, sugar, Gangajal, and Belpatra with Vedic chanting.",service2Title:"Mahamrityunjaya Jaap",service2Desc:"Chanting of Mahamrityunjaya Mantras for protection, health, longevity, and disease freedom.",service3Title:"Kalsarp & Dosh Shanti",service3Desc:"Special Vedic rituals for resolving Kundali Dosh, Rahu-Ketu Dosh, and Kalsarp Dosh.",service4Title:"Marriage & Griha Pravesh",service4Desc:"Auspicious wedding ceremonies, Satyanarayan Katha, and new house entry (Griha Pravesh) rituals.",bookingHeading:"Contact for Booking Puja & Rituals",bookingDesc:"If you wish to perform Rudrabhishek, special rituals, or seek guidance during Panchkoshi Yatra, you can directly contact Pt. Anoop Tiwari Ji.",btnWhatsapp:"Send Message via WhatsApp",btnCall:"Call Now: +91 9956120169",sidebarAddress:"Priest's Office Address",fullAddress:`Shri Rameshwar Mahadev Temple,
Panchkoshi Marg, Varanasi (U.P.) - 221001`},donate:{title:"Donation & Support",sub:"Contribute generously for Temple Development, Annakshetra & Pilgrim Welfare",cardHeading:'"Charity is the Foundation of Dharma"',cardSub:"Your valuable contribution is cordially invited for free food distribution (Annakshetra), Panchkoshi pilgrim facilities, Gaushala care, and temple renovation managed by Shri Rameshwar Mahadev Mandir Vikas Nyas.",scanTag:"Scan using Google Pay, PhonePe, Paytm or any UPI App",upiIdLabel:"UPI ID:",copyBtn:"Copy UPI ID",copiedBtn:"Copied ✓",bankDetailsTitle:"Direct Bank Transfer Details",accountNameLabel:"Account Name:",accountNameValue:"Shri Rameshwar Mahadev Mandir Vikas Nyas",bankNameLabel:"Bank Name:",bankNameValue:"Union Bank of India",upiAddressLabel:"UPI Address:",btnReceipt:"Contact for Donation Receipt",sidebarPurpose:"Purpose of Donation",purpose1:"Annakshetra: Free food for all pilgrims",purpose2:"Renovation: Temple premises & ghat maintenance",purpose3:"Gaushala: Shelter and care for cows",purpose4:"Padayatri: Panchkoshi pilgrim free support",sidebarPayments:"💳 Accepted Payment Modes"},contact:{title:"Contact & Route Guide",sub:"How to reach Shri Rameshwar Mahadev Temple Varanasi & Contact Info",heading:"Send Message / Puja Booking Inquiry",formSuccess:"Your message has been opened in WhatsApp! Pandit Ji will respond shortly.",inputNameLabel:"Your Full Name *",inputNamePlaceholder:"e.g. Ram Kumar Sharma",inputPhoneLabel:"Mobile Number *",inputPhonePlaceholder:"+91 9956120169",inputEmailLabel:"Email Address",inputEmailPlaceholder:"yourname@gmail.com",inputMessageLabel:"Write Your Message *",inputMessagePlaceholder:"Write your inquiry regarding puja booking, darshan or temple...",btnSubmit:"Send Message via WhatsApp",reachHeading:"How to Reach the Temple",trainTitle:"By Train",trainDesc:"Located approx. 14 km from Varanasi Junction (Cantt Railway Station). Auto/Taxis are readily available.",flightTitle:"By Flight",flightDesc:"Located approx. 18 km from Lal Bahadur Shastri International Airport (Bapatpur).",roadTitle:"By Road",roadDesc:"Accessible via Shivpur or Panchkoshi Marg from Varanasi city center.",sidebarTitle:"Contact Details",addressLabel:"Address:",addressValue:"Shri Rameshwar Mahadev Temple - Kashi Panchkroshi (Halt No: 3), Panchkoshi Marg, Varuna Bank, Varanasi - 221001",phoneLabel:"Phone / WhatsApp:",priestLabel:"Head Priest:",priestValue:"Pt. Anoop Tiwari",emailLabel:"Email:",emailValue:"info@rameshwartemple.in",mapTitle:"Google Maps Location",btnGoogleMaps:"Open in Google Maps"},footer:{mantraLine:"|| Om Namah Shivaya ||",heading:"Ψ Har Har Mahadev Ψ",copyright:"© 2026 Shri Rameshwar Mahadev Temple | All Rights Reserved",whatsappTitle:"WhatsApp Support"}}};function qy({children:t}){const[e,n]=re.useState(()=>localStorage.getItem("site_language")||"hi");re.useEffect(()=>{document.body.className=e==="en"?"lang-en":"lang-hi"},[e]);const i=a=>{n(a),localStorage.setItem("site_language",a)},r=a=>{const s=a.split(".");let o=Ec[e]||Ec.hi;for(const l of s)if(o&&o[l]!==void 0)o=o[l];else{let c=Ec.hi;for(const h of s)c&&c[h]!==void 0&&(c=c[h]);return typeof c=="string"?c:a}return o};return u.jsx(Nv.Provider,{value:{lang:e,setLang:i,t:r},children:t})}function zn(){const t=re.useContext(Nv);if(!t)throw new Error("useLanguage must be used within a LanguageProvider");return t}function Ky(){const[t,e]=re.useState(!1),[n,i]=re.useState(!1),r=Ia(),{lang:a,setLang:s,t:o}=zn();re.useEffect(()=>{const h=()=>{window.scrollY>50?e(!0):e(!1)};return window.addEventListener("scroll",h),()=>window.removeEventListener("scroll",h)},[]);const l=()=>{s(a==="hi"?"en":"hi")},c=()=>{i(!1)};return u.jsxs(u.Fragment,{children:[u.jsx("header",{className:`navbar ${t?"shrunken":""}`,id:"navbar",children:u.jsxs("div",{className:"nav-container",children:[u.jsxs(Be,{to:"/",className:"brand",onClick:c,children:[u.jsx("div",{className:"brand-logo",children:u.jsxs("svg",{viewBox:"0 0 100 100",className:"temple-logo-svg",children:[u.jsx("path",{d:"M50 5 L65 30 L80 30 L85 55 L95 55 L95 90 L5 90 L5 55 L15 55 L20 30 L35 30 Z",fill:"url(#goldGradientNav)",stroke:"#DAA520",strokeWidth:"2"}),u.jsx("path",{d:"M50 15 L50 75 M40 35 L60 35 M45 45 L55 45",stroke:"#4A0E0E",strokeWidth:"4",strokeLinecap:"round"}),u.jsx("circle",{cx:"50",cy:"10",r:"5",fill:"#FFD700"}),u.jsx("defs",{children:u.jsxs("linearGradient",{id:"goldGradientNav",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:"#FFD700"}),u.jsx("stop",{offset:"50%",stopColor:"#DAA520"}),u.jsx("stop",{offset:"100%",stopColor:"#B8860B"})]})})]})}),u.jsxs("div",{className:"brand-text",children:[u.jsx("h1",{className:"temple-name",children:o("nav.templeName")}),u.jsx("span",{className:"temple-loc",children:o("nav.templeLoc")})]})]}),u.jsxs("nav",{className:"nav-links",children:[u.jsx(Be,{to:"/",className:`nav-link ${r.pathname==="/"?"active":""}`,children:o("nav.home")}),u.jsx(Be,{to:"/intro",className:`nav-link ${r.pathname==="/intro"?"active":""}`,children:o("nav.intro")}),u.jsx(Be,{to:"/history",className:`nav-link ${r.pathname==="/history"?"active":""}`,children:o("nav.history")}),u.jsx(Be,{to:"/yatra",className:`nav-link ${r.pathname==="/yatra"?"active":""}`,children:o("nav.yatra")}),u.jsx(Be,{to:"/gallery",className:`nav-link ${r.pathname==="/gallery"?"active":""}`,children:o("nav.gallery")}),u.jsx(Be,{to:"/timings",className:`nav-link ${r.pathname==="/timings"?"active":""}`,children:o("nav.timings")}),u.jsx(Be,{to:"/priest",className:`nav-link ${r.pathname==="/priest"?"active":""}`,children:o("nav.priest")}),u.jsx(Be,{to:"/contact",className:`nav-link ${r.pathname==="/contact"?"active":""}`,children:o("nav.contact")})]}),u.jsxs("div",{className:"nav-actions",children:[u.jsxs("button",{onClick:l,className:"lang-btn-nav",title:a==="hi"?"Switch to English":"हिंदी में देखें",children:[u.jsx("i",{className:"fa-solid fa-globe"}),u.jsx("span",{children:o("nav.langSwitch")})]}),u.jsxs(Be,{to:"/donate",className:"donate-btn-nav",children:[u.jsx("span",{children:o("nav.donate")}),u.jsx("i",{className:"fa-solid fa-heart"})]}),u.jsxs("button",{className:"hamburger-btn",onClick:()=>i(!0),"aria-label":"Toggle Menu",children:[u.jsx("span",{}),u.jsx("span",{}),u.jsx("span",{})]})]})]})}),u.jsxs("div",{className:`mobile-drawer ${n?"active":""}`,children:[u.jsxs("div",{className:"mobile-drawer-header",children:[u.jsx("span",{className:"mobile-drawer-title",children:o("nav.templeName")}),u.jsx("button",{className:"close-drawer-btn",onClick:c,children:u.jsx("i",{className:"fa-solid fa-xmark"})})]}),u.jsxs("div",{className:"mobile-nav-links",children:[u.jsxs("div",{className:"mobile-lang-row",children:[u.jsx("button",{onClick:()=>{s("hi"),c()},className:`mobile-lang-btn ${a==="hi"?"active":""}`,children:"🇮🇳 हिंदी (Hindi)"}),u.jsx("button",{onClick:()=>{s("en"),c()},className:`mobile-lang-btn ${a==="en"?"active":""}`,children:"🇬🇧 English"})]}),u.jsx(Be,{to:"/",className:"mobile-link",onClick:c,children:o("nav.home")}),u.jsx(Be,{to:"/intro",className:"mobile-link",onClick:c,children:o("nav.intro")}),u.jsx(Be,{to:"/history",className:"mobile-link",onClick:c,children:o("nav.history")}),u.jsx(Be,{to:"/yatra",className:"mobile-link",onClick:c,children:o("nav.yatra")}),u.jsx(Be,{to:"/gallery",className:"mobile-link",onClick:c,children:o("nav.gallery")}),u.jsx(Be,{to:"/timings",className:"mobile-link",onClick:c,children:o("nav.timings")}),u.jsx(Be,{to:"/priest",className:"mobile-link",onClick:c,children:o("nav.priest")}),u.jsx(Be,{to:"/contact",className:"mobile-link",onClick:c,children:o("nav.contact")})]}),u.jsxs(Be,{to:"/donate",className:"donate-btn-mobile",onClick:c,children:[u.jsx("span",{children:o("nav.donate")})," ",u.jsx("i",{className:"fa-solid fa-heart"})]})]})]})}function Zy(){const{t}=zn(),e=()=>{window.scrollTo({top:0,behavior:"smooth"})};return u.jsxs(u.Fragment,{children:[u.jsxs("footer",{className:"site-footer",children:[u.jsxs("div",{className:"footer-top-ornament",children:[u.jsx("div",{className:"diya-glow-left",children:"🪔"}),u.jsx("div",{className:"mantra-line",children:t("footer.mantraLine")}),u.jsx("div",{className:"diya-glow-right",children:"🪔"})]}),u.jsxs("div",{className:"footer-main-text",children:[u.jsx("h2",{className:"trishul-mahadev-heading",children:t("footer.heading")}),u.jsx("p",{className:"copyright-text",children:t("footer.copyright")})]}),u.jsx("button",{className:"scroll-to-top",onClick:e,title:"ऊपर जाएँ",children:u.jsx("i",{className:"fa-solid fa-arrow-up"})})]}),u.jsxs("a",{href:"https://wa.me/919956120169?text=%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%A3%E0%A4%BE%E0%A4%AE%20%E0%A4%AA%E0%A4%82.%20%E0%A4%85%E0%A4%A8%E0%A5%82%E0%A4%AA%20%E0%A4%A4%E0%A4%BF%E0%A4%B5%E0%A4%BE%E0%A4%B0%E0%A5%80%20%E0%A4%9C%E0%A5%80!%20%E0%A4%AE%E0%A5%88%E0%A4%82%20%E0%A4%AE%E0%A4%82%E0%A4%A6%E0%A4%BF%E0%A4%B0%20%E0%A4%B8%E0%A5%87%20%E0%A4%B8%E0%A4%82%E0%A4%AC%E0%A4%82%E0%A4%A0%E0%A4%BF%E0%A4%A4%20%E0%A4%9C%E0%A4%BE%E0%A4%A8%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A5%80%20%E0%A4%9A%E0%A4%BE%E0%A4%B9%E0%A4%A4%E0%A4%BE%20%E0%A4%B9%E0%A5%82%E0%A4%82",target:"_blank",rel:"noopener noreferrer",className:"floating-whatsapp-btn",title:t("footer.whatsappTitle"),children:[u.jsx("i",{className:"fa-brands fa-whatsapp"}),u.jsx("div",{className:"whatsapp-pulse"})]})]})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lh="162",Qy=0,Of=1,Jy=2,Lv=1,eS=2,ii=3,Ki=0,rn=1,si=2,Wi=0,_a=1,Ju=2,kf=3,Bf=4,tS=5,pr=100,nS=101,iS=102,zf=103,Hf=104,rS=200,aS=201,sS=202,oS=203,ed=204,td=205,lS=206,cS=207,uS=208,dS=209,hS=210,fS=211,pS=212,mS=213,gS=214,vS=0,_S=1,xS=2,vl=3,yS=4,SS=5,ES=6,MS=7,Dv=0,TS=1,wS=2,Xi=0,AS=1,RS=2,CS=3,bS=4,PS=5,NS=6,LS=7,Uv=300,Ra=301,Ca=302,nd=303,id=304,zl=306,rd=1e3,In=1001,ad=1002,Wt=1003,Gf=1004,Ya=1005,Kt=1006,Mc=1007,xr=1008,Yi=1009,DS=1010,US=1011,ch=1012,Iv=1013,Ii=1014,oi=1015,Ns=1016,Fv=1017,Ov=1018,Er=1020,IS=1021,Fn=1023,FS=1024,OS=1025,Mr=1026,ba=1027,kS=1028,kv=1029,BS=1030,Bv=1031,zv=1033,Tc=33776,wc=33777,Ac=33778,Rc=33779,Vf=35840,jf=35841,Wf=35842,Xf=35843,Hv=36196,Yf=37492,$f=37496,qf=37808,Kf=37809,Zf=37810,Qf=37811,Jf=37812,ep=37813,tp=37814,np=37815,ip=37816,rp=37817,ap=37818,sp=37819,op=37820,lp=37821,Cc=36492,cp=36494,up=36495,zS=36283,dp=36284,hp=36285,fp=36286,HS=3200,GS=3201,VS=0,jS=1,Ni="",jn="srgb",tr="srgb-linear",uh="display-p3",Hl="display-p3-linear",_l="linear",it="srgb",xl="rec709",yl="p3",Fr=7680,pp=519,WS=512,XS=513,YS=514,Gv=515,$S=516,qS=517,KS=518,ZS=519,mp=35044,gp="300 es",sd=1035,ui=2e3,Sl=2001;class Fa{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(n);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bc=Math.PI/180,od=180/Math.PI;function ks(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kt[t&255]+kt[t>>8&255]+kt[t>>16&255]+kt[t>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[n&63|128]+kt[n>>8&255]+"-"+kt[n>>16&255]+kt[n>>24&255]+kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]).toLowerCase()}function Qt(t,e,n){return Math.max(e,Math.min(n,t))}function QS(t,e){return(t%e+e)%e}function Pc(t,e,n){return(1-n)*t+n*e}function vp(t){return(t&t-1)===0&&t!==0}function ld(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function $a(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function qt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class $e{constructor(e=0,n=0){$e.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),a=this.x-e.x,s=this.y-e.y;return this.x=a*i-s*r+e.x,this.y=a*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,n,i,r,a,s,o,l,c){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,a,s,o,l,c)}set(e,n,i,r,a,s,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=a,h[5]=l,h[6]=i,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,a=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],h=i[4],f=i[7],p=i[2],g=i[5],x=i[8],y=r[0],m=r[3],d=r[6],_=r[1],v=r[4],M=r[7],b=r[2],R=r[5],w=r[8];return a[0]=s*y+o*_+l*b,a[3]=s*m+o*v+l*R,a[6]=s*d+o*M+l*w,a[1]=c*y+h*_+f*b,a[4]=c*m+h*v+f*R,a[7]=c*d+h*M+f*w,a[2]=p*y+g*_+x*b,a[5]=p*m+g*v+x*R,a[8]=p*d+g*M+x*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return n*s*h-n*o*c-i*a*h+i*o*l+r*a*c-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*s-o*c,p=o*l-h*a,g=c*a-s*l,x=n*f+i*p+r*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return e[0]=f*y,e[1]=(r*c-h*i)*y,e[2]=(o*i-r*s)*y,e[3]=p*y,e[4]=(h*n-r*l)*y,e[5]=(r*a-o*n)*y,e[6]=g*y,e[7]=(i*l-c*n)*y,e[8]=(s*n-i*a)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-r*c,r*l,-r*(-c*s+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Nc.makeScale(e,n)),this}rotate(e){return this.premultiply(Nc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Nc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Nc=new Fe;function Vv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function El(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function JS(){const t=El("canvas");return t.style.display="block",t}const _p={};function eE(t){t in _p||(_p[t]=!0,console.warn(t))}const xp=new Fe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),yp=new Fe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),lo={[tr]:{transfer:_l,primaries:xl,toReference:t=>t,fromReference:t=>t},[jn]:{transfer:it,primaries:xl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Hl]:{transfer:_l,primaries:yl,toReference:t=>t.applyMatrix3(yp),fromReference:t=>t.applyMatrix3(xp)},[uh]:{transfer:it,primaries:yl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(yp),fromReference:t=>t.applyMatrix3(xp).convertLinearToSRGB()}},tE=new Set([tr,Hl]),Qe={enabled:!0,_workingColorSpace:tr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!tE.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=lo[e].toReference,r=lo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return lo[t].primaries},getTransfer:function(t){return t===Ni?_l:lo[t].transfer}};function xa(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Lc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Or;class jv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Or===void 0&&(Or=El("canvas")),Or.width=e.width,Or.height=e.height;const i=Or.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Or}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=El("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=xa(a[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(xa(n[i]/255)*255):n[i]=xa(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nE=0;class Wv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nE++}),this.uuid=ks(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(Dc(r[s].image)):a.push(Dc(r[s]))}else a=Dc(r);i.url=a}return n||(e.images[this.uuid]=i),i}}function Dc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?jv.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let iE=0;class an extends Fa{constructor(e=an.DEFAULT_IMAGE,n=an.DEFAULT_MAPPING,i=In,r=In,a=Kt,s=xr,o=Fn,l=Yi,c=an.DEFAULT_ANISOTROPY,h=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iE++}),this.uuid=ks(),this.name="",this.source=new Wv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Uv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rd:e.x=e.x-Math.floor(e.x);break;case In:e.x=e.x<0?0:1;break;case ad:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rd:e.y=e.y-Math.floor(e.y);break;case In:e.y=e.y<0?0:1;break;case ad:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=Uv;an.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,n=0,i=0,r=1){Lt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*a,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*a,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*a,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,a;const l=e.elements,c=l[0],h=l[4],f=l[8],p=l[1],g=l[5],x=l[9],y=l[2],m=l[6],d=l[10];if(Math.abs(h-p)<.01&&Math.abs(f-y)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(f+y)<.1&&Math.abs(x+m)<.1&&Math.abs(c+g+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,M=(g+1)/2,b=(d+1)/2,R=(h+p)/4,w=(f+y)/4,D=(x+m)/4;return v>M&&v>b?v<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(v),r=R/i,a=w/i):M>b?M<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(M),i=R/r,a=D/r):b<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(b),i=w/a,r=D/a),this.set(i,r,a,n),this}let _=Math.sqrt((m-x)*(m-x)+(f-y)*(f-y)+(p-h)*(p-h));return Math.abs(_)<.001&&(_=1),this.x=(m-x)/_,this.y=(f-y)/_,this.z=(p-h)/_,this.w=Math.acos((c+g+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rE extends Fa{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Lt(0,0,e,n),this.scissorTest=!1,this.viewport=new Lt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const a=new an(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Wv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pr extends rE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Xv extends an{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class aE extends an{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,a,s,o){let l=i[r+0],c=i[r+1],h=i[r+2],f=i[r+3];const p=a[s+0],g=a[s+1],x=a[s+2],y=a[s+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=h,e[n+3]=f;return}if(o===1){e[n+0]=p,e[n+1]=g,e[n+2]=x,e[n+3]=y;return}if(f!==y||l!==p||c!==g||h!==x){let m=1-o;const d=l*p+c*g+h*x+f*y,_=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const b=Math.sqrt(v),R=Math.atan2(b,d*_);m=Math.sin(m*R)/b,o=Math.sin(o*R)/b}const M=o*_;if(l=l*m+p*M,c=c*m+g*M,h=h*m+x*M,f=f*m+y*M,m===1-o){const b=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=b,c*=b,h*=b,f*=b}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,a,s){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],f=a[s],p=a[s+1],g=a[s+2],x=a[s+3];return e[n]=o*x+h*f+l*g-c*p,e[n+1]=l*x+h*p+c*f-o*g,e[n+2]=c*x+h*g+o*p-l*f,e[n+3]=h*x-o*f-l*p-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),f=o(a/2),p=l(i/2),g=l(r/2),x=l(a/2);switch(s){case"XYZ":this._x=p*h*f+c*g*x,this._y=c*g*f-p*h*x,this._z=c*h*x+p*g*f,this._w=c*h*f-p*g*x;break;case"YXZ":this._x=p*h*f+c*g*x,this._y=c*g*f-p*h*x,this._z=c*h*x-p*g*f,this._w=c*h*f+p*g*x;break;case"ZXY":this._x=p*h*f-c*g*x,this._y=c*g*f+p*h*x,this._z=c*h*x+p*g*f,this._w=c*h*f-p*g*x;break;case"ZYX":this._x=p*h*f-c*g*x,this._y=c*g*f+p*h*x,this._z=c*h*x-p*g*f,this._w=c*h*f+p*g*x;break;case"YZX":this._x=p*h*f+c*g*x,this._y=c*g*f+p*h*x,this._z=c*h*x-p*g*f,this._w=c*h*f-p*g*x;break;case"XZY":this._x=p*h*f-c*g*x,this._y=c*g*f-p*h*x,this._z=c*h*x+p*g*f,this._w=c*h*f+p*g*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],a=n[8],s=n[1],o=n[5],l=n[9],c=n[2],h=n[6],f=n[10],p=i+o+f;if(p>0){const g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(h-l)*g,this._y=(a-c)*g,this._z=(s-r)*g}else if(i>o&&i>f){const g=2*Math.sqrt(1+i-o-f);this._w=(h-l)/g,this._x=.25*g,this._y=(r+s)/g,this._z=(a+c)/g}else if(o>f){const g=2*Math.sqrt(1+o-i-f);this._w=(a-c)/g,this._x=(r+s)/g,this._y=.25*g,this._z=(l+h)/g}else{const g=2*Math.sqrt(1+f-i-o);this._w=(s-r)/g,this._x=(a+c)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,a=e._z,s=e._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+s*o+r*c-a*l,this._y=r*h+s*l+a*o-i*c,this._z=a*h+s*c+i*l-r*o,this._w=s*h-i*o-r*l-a*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,a=this._z,s=this._w;let o=s*e._w+i*e._x+r*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=i,this._y=r,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const g=1-n;return this._w=g*s+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*a+n*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-n)*h)/c,p=Math.sin(n*h)/c;return this._w=s*f+this._w*p,this._x=i*f+this._x*p,this._y=r*f+this._y*p,this._z=a*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(n),a*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,n=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Sp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Sp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*n+a[3]*i+a[6]*r,this.y=a[1]*n+a[4]*i+a[7]*r,this.z=a[2]*n+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,a=e.elements,s=1/(a[3]*n+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*r+a[12])*s,this.y=(a[1]*n+a[5]*i+a[9]*r+a[13])*s,this.z=(a[2]*n+a[6]*i+a[10]*r+a[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*r-o*i),h=2*(o*n-a*r),f=2*(a*i-s*n);return this.x=n+l*c+s*f-o*h,this.y=i+l*h+o*c-a*f,this.z=r+l*f+a*h-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r,this.y=a[1]*n+a[5]*i+a[9]*r,this.z=a[2]*n+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,a=e.z,s=n.x,o=n.y,l=n.z;return this.x=r*l-a*o,this.y=a*s-i*l,this.z=i*o-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Uc.copy(this).projectOnVector(e),this.sub(Uc)}reflect(e){return this.sub(Uc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Uc=new B,Sp=new Bs;class zs{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(bn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(bn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=bn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(n===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,bn):bn.fromBufferAttribute(a,s),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),co.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),co.copy(i.boundingBox)),co.applyMatrix4(e.matrixWorld),this.union(co)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qa),uo.subVectors(this.max,qa),kr.subVectors(e.a,qa),Br.subVectors(e.b,qa),zr.subVectors(e.c,qa),Si.subVectors(Br,kr),Ei.subVectors(zr,Br),rr.subVectors(kr,zr);let n=[0,-Si.z,Si.y,0,-Ei.z,Ei.y,0,-rr.z,rr.y,Si.z,0,-Si.x,Ei.z,0,-Ei.x,rr.z,0,-rr.x,-Si.y,Si.x,0,-Ei.y,Ei.x,0,-rr.y,rr.x,0];return!Ic(n,kr,Br,zr,uo)||(n=[1,0,0,0,1,0,0,0,1],!Ic(n,kr,Br,zr,uo))?!1:(ho.crossVectors(Si,Ei),n=[ho.x,ho.y,ho.z],Ic(n,kr,Br,zr,uo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zn=[new B,new B,new B,new B,new B,new B,new B,new B],bn=new B,co=new zs,kr=new B,Br=new B,zr=new B,Si=new B,Ei=new B,rr=new B,qa=new B,uo=new B,ho=new B,ar=new B;function Ic(t,e,n,i,r){for(let a=0,s=t.length-3;a<=s;a+=3){ar.fromArray(t,a);const o=r.x*Math.abs(ar.x)+r.y*Math.abs(ar.y)+r.z*Math.abs(ar.z),l=e.dot(ar),c=n.dot(ar),h=i.dot(ar);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const sE=new zs,Ka=new B,Fc=new B;class Gl{constructor(e=new B,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):sE.setFromPoints(e).getCenter(i);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ka.subVectors(e,this.center);const n=Ka.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ka,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ka.copy(e.center).add(Fc)),this.expandByPoint(Ka.copy(e.center).sub(Fc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qn=new B,Oc=new B,fo=new B,Mi=new B,kc=new B,po=new B,Bc=new B;class Yv{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Qn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Qn.copy(this.origin).addScaledVector(this.direction,n),Qn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Oc.copy(e).add(n).multiplyScalar(.5),fo.copy(n).sub(e).normalize(),Mi.copy(this.origin).sub(Oc);const a=e.distanceTo(n)*.5,s=-this.direction.dot(fo),o=Mi.dot(this.direction),l=-Mi.dot(fo),c=Mi.lengthSq(),h=Math.abs(1-s*s);let f,p,g,x;if(h>0)if(f=s*l-o,p=s*o-l,x=a*h,f>=0)if(p>=-x)if(p<=x){const y=1/h;f*=y,p*=y,g=f*(f+s*p+2*o)+p*(s*f+p+2*l)+c}else p=a,f=Math.max(0,-(s*p+o)),g=-f*f+p*(p+2*l)+c;else p=-a,f=Math.max(0,-(s*p+o)),g=-f*f+p*(p+2*l)+c;else p<=-x?(f=Math.max(0,-(-s*a+o)),p=f>0?-a:Math.min(Math.max(-a,-l),a),g=-f*f+p*(p+2*l)+c):p<=x?(f=0,p=Math.min(Math.max(-a,-l),a),g=p*(p+2*l)+c):(f=Math.max(0,-(s*a+o)),p=f>0?a:Math.min(Math.max(-a,-l),a),g=-f*f+p*(p+2*l)+c);else p=s>0?-a:a,f=Math.max(0,-(s*p+o)),g=-f*f+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Oc).addScaledVector(fo,p),g}intersectSphere(e,n){Qn.subVectors(e.center,this.origin);const i=Qn.dot(this.direction),r=Qn.dot(Qn)-i*i,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,a,s,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),h>=0?(a=(e.min.y-p.y)*h,s=(e.max.y-p.y)*h):(a=(e.max.y-p.y)*h,s=(e.min.y-p.y)*h),i>s||a>r||((a>i||isNaN(i))&&(i=a),(s<r||isNaN(r))&&(r=s),f>=0?(o=(e.min.z-p.z)*f,l=(e.max.z-p.z)*f):(o=(e.max.z-p.z)*f,l=(e.min.z-p.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,n,i,r,a){kc.subVectors(n,e),po.subVectors(i,e),Bc.crossVectors(kc,po);let s=this.direction.dot(Bc),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Mi.subVectors(this.origin,e);const l=o*this.direction.dot(po.crossVectors(Mi,po));if(l<0)return null;const c=o*this.direction.dot(kc.cross(Mi));if(c<0||l+c>s)return null;const h=-o*Mi.dot(Bc);return h<0?null:this.at(h/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,n,i,r,a,s,o,l,c,h,f,p,g,x,y,m){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,a,s,o,l,c,h,f,p,g,x,y,m)}set(e,n,i,r,a,s,o,l,c,h,f,p,g,x,y,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=a,d[5]=s,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=f,d[14]=p,d[3]=g,d[7]=x,d[11]=y,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Hr.setFromMatrixColumn(e,0).length(),a=1/Hr.setFromMatrixColumn(e,1).length(),s=1/Hr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,a=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(a),f=Math.sin(a);if(e.order==="XYZ"){const p=s*h,g=s*f,x=o*h,y=o*f;n[0]=l*h,n[4]=-l*f,n[8]=c,n[1]=g+x*c,n[5]=p-y*c,n[9]=-o*l,n[2]=y-p*c,n[6]=x+g*c,n[10]=s*l}else if(e.order==="YXZ"){const p=l*h,g=l*f,x=c*h,y=c*f;n[0]=p+y*o,n[4]=x*o-g,n[8]=s*c,n[1]=s*f,n[5]=s*h,n[9]=-o,n[2]=g*o-x,n[6]=y+p*o,n[10]=s*l}else if(e.order==="ZXY"){const p=l*h,g=l*f,x=c*h,y=c*f;n[0]=p-y*o,n[4]=-s*f,n[8]=x+g*o,n[1]=g+x*o,n[5]=s*h,n[9]=y-p*o,n[2]=-s*c,n[6]=o,n[10]=s*l}else if(e.order==="ZYX"){const p=s*h,g=s*f,x=o*h,y=o*f;n[0]=l*h,n[4]=x*c-g,n[8]=p*c+y,n[1]=l*f,n[5]=y*c+p,n[9]=g*c-x,n[2]=-c,n[6]=o*l,n[10]=s*l}else if(e.order==="YZX"){const p=s*l,g=s*c,x=o*l,y=o*c;n[0]=l*h,n[4]=y-p*f,n[8]=x*f+g,n[1]=f,n[5]=s*h,n[9]=-o*h,n[2]=-c*h,n[6]=g*f+x,n[10]=p-y*f}else if(e.order==="XZY"){const p=s*l,g=s*c,x=o*l,y=o*c;n[0]=l*h,n[4]=-f,n[8]=c*h,n[1]=p*f+y,n[5]=s*h,n[9]=g*f-x,n[2]=x*f-g,n[6]=o*h,n[10]=y*f+p}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(oE,e,lE)}lookAt(e,n,i){const r=this.elements;return ln.subVectors(e,n),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),Ti.crossVectors(i,ln),Ti.lengthSq()===0&&(Math.abs(i.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),Ti.crossVectors(i,ln)),Ti.normalize(),mo.crossVectors(ln,Ti),r[0]=Ti.x,r[4]=mo.x,r[8]=ln.x,r[1]=Ti.y,r[5]=mo.y,r[9]=ln.y,r[2]=Ti.z,r[6]=mo.z,r[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,a=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],h=i[1],f=i[5],p=i[9],g=i[13],x=i[2],y=i[6],m=i[10],d=i[14],_=i[3],v=i[7],M=i[11],b=i[15],R=r[0],w=r[4],D=r[8],$=r[12],S=r[1],C=r[5],ne=r[9],J=r[13],L=r[2],X=r[6],W=r[10],q=r[14],P=r[3],F=r[7],V=r[11],K=r[15];return a[0]=s*R+o*S+l*L+c*P,a[4]=s*w+o*C+l*X+c*F,a[8]=s*D+o*ne+l*W+c*V,a[12]=s*$+o*J+l*q+c*K,a[1]=h*R+f*S+p*L+g*P,a[5]=h*w+f*C+p*X+g*F,a[9]=h*D+f*ne+p*W+g*V,a[13]=h*$+f*J+p*q+g*K,a[2]=x*R+y*S+m*L+d*P,a[6]=x*w+y*C+m*X+d*F,a[10]=x*D+y*ne+m*W+d*V,a[14]=x*$+y*J+m*q+d*K,a[3]=_*R+v*S+M*L+b*P,a[7]=_*w+v*C+M*X+b*F,a[11]=_*D+v*ne+M*W+b*V,a[15]=_*$+v*J+M*q+b*K,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],p=e[10],g=e[14],x=e[3],y=e[7],m=e[11],d=e[15];return x*(+a*l*f-r*c*f-a*o*p+i*c*p+r*o*g-i*l*g)+y*(+n*l*g-n*c*p+a*s*p-r*s*g+r*c*h-a*l*h)+m*(+n*c*f-n*o*g-a*s*f+i*s*g+a*o*h-i*c*h)+d*(-r*o*h-n*l*f+n*o*p+r*s*f-i*s*p+i*l*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],p=e[10],g=e[11],x=e[12],y=e[13],m=e[14],d=e[15],_=f*m*c-y*p*c+y*l*g-o*m*g-f*l*d+o*p*d,v=x*p*c-h*m*c-x*l*g+s*m*g+h*l*d-s*p*d,M=h*y*c-x*f*c+x*o*g-s*y*g-h*o*d+s*f*d,b=x*f*l-h*y*l-x*o*p+s*y*p+h*o*m-s*f*m,R=n*_+i*v+r*M+a*b;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/R;return e[0]=_*w,e[1]=(y*p*a-f*m*a-y*r*g+i*m*g+f*r*d-i*p*d)*w,e[2]=(o*m*a-y*l*a+y*r*c-i*m*c-o*r*d+i*l*d)*w,e[3]=(f*l*a-o*p*a-f*r*c+i*p*c+o*r*g-i*l*g)*w,e[4]=v*w,e[5]=(h*m*a-x*p*a+x*r*g-n*m*g-h*r*d+n*p*d)*w,e[6]=(x*l*a-s*m*a-x*r*c+n*m*c+s*r*d-n*l*d)*w,e[7]=(s*p*a-h*l*a+h*r*c-n*p*c-s*r*g+n*l*g)*w,e[8]=M*w,e[9]=(x*f*a-h*y*a-x*i*g+n*y*g+h*i*d-n*f*d)*w,e[10]=(s*y*a-x*o*a+x*i*c-n*y*c-s*i*d+n*o*d)*w,e[11]=(h*o*a-s*f*a-h*i*c+n*f*c+s*i*g-n*o*g)*w,e[12]=b*w,e[13]=(h*y*r-x*f*r+x*i*p-n*y*p-h*i*m+n*f*m)*w,e[14]=(x*o*r-s*y*r-x*i*l+n*y*l+s*i*m-n*o*m)*w,e[15]=(s*f*r-h*o*r+h*i*l-n*f*l-s*i*p+n*o*p)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,a=e.z;return n[0]*=i,n[4]*=r,n[8]*=a,n[1]*=i,n[5]*=r,n[9]*=a,n[2]*=i,n[6]*=r,n[10]*=a,n[3]*=i,n[7]*=r,n[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),a=1-i,s=e.x,o=e.y,l=e.z,c=a*s,h=a*o;return this.set(c*s+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*s,0,c*l-r*o,h*l+r*s,a*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,a,s){return this.set(1,i,a,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,a=n._x,s=n._y,o=n._z,l=n._w,c=a+a,h=s+s,f=o+o,p=a*c,g=a*h,x=a*f,y=s*h,m=s*f,d=o*f,_=l*c,v=l*h,M=l*f,b=i.x,R=i.y,w=i.z;return r[0]=(1-(y+d))*b,r[1]=(g+M)*b,r[2]=(x-v)*b,r[3]=0,r[4]=(g-M)*R,r[5]=(1-(p+d))*R,r[6]=(m+_)*R,r[7]=0,r[8]=(x+v)*w,r[9]=(m-_)*w,r[10]=(1-(p+y))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let a=Hr.set(r[0],r[1],r[2]).length();const s=Hr.set(r[4],r[5],r[6]).length(),o=Hr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Pn.copy(this);const c=1/a,h=1/s,f=1/o;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=h,Pn.elements[5]*=h,Pn.elements[6]*=h,Pn.elements[8]*=f,Pn.elements[9]*=f,Pn.elements[10]*=f,n.setFromRotationMatrix(Pn),i.x=a,i.y=s,i.z=o,this}makePerspective(e,n,i,r,a,s,o=ui){const l=this.elements,c=2*a/(n-e),h=2*a/(i-r),f=(n+e)/(n-e),p=(i+r)/(i-r);let g,x;if(o===ui)g=-(s+a)/(s-a),x=-2*s*a/(s-a);else if(o===Sl)g=-s/(s-a),x=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,a,s,o=ui){const l=this.elements,c=1/(n-e),h=1/(i-r),f=1/(s-a),p=(n+e)*c,g=(i+r)*h;let x,y;if(o===ui)x=(s+a)*f,y=-2*f;else if(o===Sl)x=a*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=y,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Hr=new B,Pn=new yt,oE=new B(0,0,0),lE=new B(1,1,1),Ti=new B,mo=new B,ln=new B,Ep=new yt,Mp=new Bs;class vi{constructor(e=0,n=0,i=0,r=vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],l=r[1],c=r[5],h=r[9],f=r[2],p=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Qt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Qt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Ep.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ep,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Mp.setFromEuler(this),this.setFromQuaternion(Mp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vi.DEFAULT_ORDER="XYZ";class $v{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cE=0;const Tp=new B,Gr=new Bs,Jn=new yt,go=new B,Za=new B,uE=new B,dE=new Bs,wp=new B(1,0,0),Ap=new B(0,1,0),Rp=new B(0,0,1),hE={type:"added"},fE={type:"removed"},zc={type:"childadded",child:null},Hc={type:"childremoved",child:null};class sn extends Fa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cE++}),this.uuid=ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const e=new B,n=new vi,i=new Bs,r=new B(1,1,1);function a(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new Fe}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $v,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Gr.setFromAxisAngle(e,n),this.quaternion.multiply(Gr),this}rotateOnWorldAxis(e,n){return Gr.setFromAxisAngle(e,n),this.quaternion.premultiply(Gr),this}rotateX(e){return this.rotateOnAxis(wp,e)}rotateY(e){return this.rotateOnAxis(Ap,e)}rotateZ(e){return this.rotateOnAxis(Rp,e)}translateOnAxis(e,n){return Tp.copy(e).applyQuaternion(this.quaternion),this.position.add(Tp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(wp,e)}translateY(e){return this.translateOnAxis(Ap,e)}translateZ(e){return this.translateOnAxis(Rp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?go.copy(e):go.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Za.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(Za,go,this.up):Jn.lookAt(go,Za,this.up),this.quaternion.setFromRotationMatrix(Jn),r&&(Jn.extractRotation(r.matrixWorld),Gr.setFromRotationMatrix(Jn),this.quaternion.premultiply(Gr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(hE),zc.child=e,this.dispatchEvent(zc),zc.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(fE),Hc.child=e,this.dispatchEvent(Hc),Hc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Za,e,uE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Za,dE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const a=n[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++){const o=r[a];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];a(e.shapes,f)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(a(e.animations,l))}}if(n){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),h=s(e.images),f=s(e.shapes),p=s(e.skeletons),g=s(e.animations),x=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),g.length>0&&(i.animations=g),x.length>0&&(i.nodes=x)}return i.object=r,i;function s(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}sn.DEFAULT_UP=new B(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nn=new B,ei=new B,Gc=new B,ti=new B,Vr=new B,jr=new B,Cp=new B,Vc=new B,jc=new B,Wc=new B;class Yn{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Nn.subVectors(e,n),r.cross(Nn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,n,i,r,a){Nn.subVectors(r,n),ei.subVectors(i,n),Gc.subVectors(e,n);const s=Nn.dot(Nn),o=Nn.dot(ei),l=Nn.dot(Gc),c=ei.dot(ei),h=ei.dot(Gc),f=s*c-o*o;if(f===0)return a.set(0,0,0),null;const p=1/f,g=(c*l-o*h)*p,x=(s*h-o*l)*p;return a.set(1-g-x,x,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(e,n,i,r,a,s,o,l){return this.getBarycoord(e,n,i,r,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,ti.x),l.addScaledVector(s,ti.y),l.addScaledVector(o,ti.z),l)}static isFrontFacing(e,n,i,r){return Nn.subVectors(i,n),ei.subVectors(e,n),Nn.cross(ei).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Nn.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Yn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,a){return Yn.getInterpolation(e,this.a,this.b,this.c,n,i,r,a)}containsPoint(e){return Yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,a=this.c;let s,o;Vr.subVectors(r,i),jr.subVectors(a,i),Vc.subVectors(e,i);const l=Vr.dot(Vc),c=jr.dot(Vc);if(l<=0&&c<=0)return n.copy(i);jc.subVectors(e,r);const h=Vr.dot(jc),f=jr.dot(jc);if(h>=0&&f<=h)return n.copy(r);const p=l*f-h*c;if(p<=0&&l>=0&&h<=0)return s=l/(l-h),n.copy(i).addScaledVector(Vr,s);Wc.subVectors(e,a);const g=Vr.dot(Wc),x=jr.dot(Wc);if(x>=0&&g<=x)return n.copy(a);const y=g*c-l*x;if(y<=0&&c>=0&&x<=0)return o=c/(c-x),n.copy(i).addScaledVector(jr,o);const m=h*x-g*f;if(m<=0&&f-h>=0&&g-x>=0)return Cp.subVectors(a,r),o=(f-h)/(f-h+(g-x)),n.copy(r).addScaledVector(Cp,o);const d=1/(m+y+p);return s=y*d,o=p*d,n.copy(i).addScaledVector(Vr,s).addScaledVector(jr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const qv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},vo={h:0,s:0,l:0};function Xc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ke{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Qe.workingColorSpace){if(e=QS(e,1),n=Qt(n,0,1),i=Qt(i,0,1),n===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+n):i+n-i*n,s=2*i-a;this.r=Xc(s,a,e+1/3),this.g=Xc(s,a,e),this.b=Xc(s,a,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,n=jn){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(a,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=jn){const i=qv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xa(e.r),this.g=xa(e.g),this.b=xa(e.b),this}copyLinearToSRGB(e){return this.r=Lc(e.r),this.g=Lc(e.g),this.b=Lc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jn){return Qe.fromWorkingColorSpace(Bt.copy(this),e),Math.round(Qt(Bt.r*255,0,255))*65536+Math.round(Qt(Bt.g*255,0,255))*256+Math.round(Qt(Bt.b*255,0,255))}getHexString(e=jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Bt.copy(this),n);const i=Bt.r,r=Bt.g,a=Bt.b,s=Math.max(i,r,a),o=Math.min(i,r,a);let l,c;const h=(o+s)/2;if(o===s)l=0,c=0;else{const f=s-o;switch(c=h<=.5?f/(s+o):f/(2-s-o),s){case i:l=(r-a)/f+(r<a?6:0);break;case r:l=(a-i)/f+2;break;case a:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Bt.copy(this),n),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=jn){Qe.fromWorkingColorSpace(Bt.copy(this),e);const n=Bt.r,i=Bt.g,r=Bt.b;return e!==jn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(wi),this.setHSL(wi.h+e,wi.s+n,wi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(wi),e.getHSL(vo);const i=Pc(wi.h,vo.h,n),r=Pc(wi.s,vo.s,n),a=Pc(wi.l,vo.l,n);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*n+a[3]*i+a[6]*r,this.g=a[1]*n+a[4]*i+a[7]*r,this.b=a[2]*n+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new Ke;Ke.NAMES=qv;let pE=0;class Hs extends Fa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pE++}),this.uuid=ks(),this.name="",this.type="Material",this.blending=_a,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ed,this.blendDst=td,this.blendEquation=pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=vl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fr,this.stencilZFail=Fr,this.stencilZPass=Fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==_a&&(i.blending=this.blending),this.side!==Ki&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ed&&(i.blendSrc=this.blendSrc),this.blendDst!==td&&(i.blendDst=this.blendDst),this.blendEquation!==pr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==vl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(n){const a=r(e.textures),s=r(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Kv extends Hs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=Dv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new B,_o=new $e;class wn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=mp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return eE("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)_o.fromBufferAttribute(this,n),_o.applyMatrix3(e),this.setXY(n,_o.x,_o.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.applyMatrix3(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.applyMatrix4(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.applyNormalMatrix(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.transformDirection(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=$a(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=qt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=$a(n,this.array)),n}setX(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=$a(n,this.array)),n}setY(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=$a(n,this.array)),n}setZ(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=$a(n,this.array)),n}setW(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),i=qt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),i=qt(i,this.array),r=qt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,a){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),i=qt(i,this.array),r=qt(r,this.array),a=qt(a,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mp&&(e.usage=this.usage),e}}class Zv extends wn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Qv extends wn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Tr extends wn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let mE=0;const _n=new yt,Yc=new sn,Wr=new B,cn=new zs,Qa=new zs,At=new B;class xi extends Fa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mE++}),this.uuid=ks(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vv(e)?Qv:Zv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Fe().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,n,i){return _n.makeTranslation(e,n,i),this.applyMatrix4(_n),this}scale(e,n,i){return _n.makeScale(e,n,i),this.applyMatrix4(_n),this}lookAt(e){return Yc.lookAt(e),Yc.updateMatrix(),this.applyMatrix4(Yc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wr).negate(),this.translate(Wr.x,Wr.y,Wr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Tr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const a=n[i];cn.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),n)for(let a=0,s=n.length;a<s;a++){const o=n[a];Qa.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(cn.min,Qa.min),cn.expandByPoint(At),At.addVectors(cn.max,Qa.max),cn.expandByPoint(At)):(cn.expandByPoint(Qa.min),cn.expandByPoint(Qa.max))}cn.getCenter(i);let r=0;for(let a=0,s=e.count;a<s;a++)At.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(At));if(n)for(let a=0,s=n.length;a<s;a++){const o=n[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)At.fromBufferAttribute(o,c),l&&(Wr.fromBufferAttribute(e,c),At.add(Wr)),r=Math.max(r,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,a=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wn(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<i.count;D++)o[D]=new B,l[D]=new B;const c=new B,h=new B,f=new B,p=new $e,g=new $e,x=new $e,y=new B,m=new B;function d(D,$,S){c.fromBufferAttribute(i,D),h.fromBufferAttribute(i,$),f.fromBufferAttribute(i,S),p.fromBufferAttribute(a,D),g.fromBufferAttribute(a,$),x.fromBufferAttribute(a,S),h.sub(c),f.sub(c),g.sub(p),x.sub(p);const C=1/(g.x*x.y-x.x*g.y);isFinite(C)&&(y.copy(h).multiplyScalar(x.y).addScaledVector(f,-g.y).multiplyScalar(C),m.copy(f).multiplyScalar(g.x).addScaledVector(h,-x.x).multiplyScalar(C),o[D].add(y),o[$].add(y),o[S].add(y),l[D].add(m),l[$].add(m),l[S].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let D=0,$=_.length;D<$;++D){const S=_[D],C=S.start,ne=S.count;for(let J=C,L=C+ne;J<L;J+=3)d(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const v=new B,M=new B,b=new B,R=new B;function w(D){b.fromBufferAttribute(r,D),R.copy(b);const $=o[D];v.copy($),v.sub(b.multiplyScalar(b.dot($))).normalize(),M.crossVectors(R,$);const C=M.dot(l[D])<0?-1:1;s.setXYZW(D,v.x,v.y,v.z,C)}for(let D=0,$=_.length;D<$;++D){const S=_[D],C=S.start,ne=S.count;for(let J=C,L=C+ne;J<L;J+=3)w(e.getX(J+0)),w(e.getX(J+1)),w(e.getX(J+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new wn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let p=0,g=i.count;p<g;p++)i.setXYZ(p,0,0,0);const r=new B,a=new B,s=new B,o=new B,l=new B,c=new B,h=new B,f=new B;if(e)for(let p=0,g=e.count;p<g;p+=3){const x=e.getX(p+0),y=e.getX(p+1),m=e.getX(p+2);r.fromBufferAttribute(n,x),a.fromBufferAttribute(n,y),s.fromBufferAttribute(n,m),h.subVectors(s,a),f.subVectors(r,a),h.cross(f),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,g=n.count;p<g;p+=3)r.fromBufferAttribute(n,p+0),a.fromBufferAttribute(n,p+1),s.fromBufferAttribute(n,p+2),h.subVectors(s,a),f.subVectors(r,a),h.cross(f),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)At.fromBufferAttribute(e,n),At.normalize(),e.setXYZ(n,At.x,At.y,At.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,f=o.normalized,p=new c.constructor(l.length*h);let g=0,x=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?g=l[y]*o.data.stride+o.offset:g=l[y]*h;for(let d=0;d<h;d++)p[x++]=c[g++]}return new wn(p,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new xi,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,f=c.length;h<f;h++){const p=c[h],g=e(p,i);l.push(g)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,p=c.length;f<p;f++){const g=c[f];h.push(g.toJSON(e.data))}h.length>0&&(r[l]=h,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(n))}const a=e.morphAttributes;for(const c in a){const h=[],f=a[c];for(let p=0,g=f.length;p<g;p++)h.push(f[p].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,h=s.length;c<h;c++){const f=s[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bp=new yt,sr=new Yv,xo=new Gl,Pp=new B,Xr=new B,Yr=new B,$r=new B,$c=new B,yo=new B,So=new $e,Eo=new $e,Mo=new $e,Np=new B,Lp=new B,Dp=new B,To=new B,wo=new B;class di extends sn{constructor(e=new xi,n=new Kv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){yo.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],f=a[l];h!==0&&($c.fromBufferAttribute(f,e),s?yo.addScaledVector($c,h):yo.addScaledVector($c.sub(n),h))}n.add(yo)}return n}raycast(e,n){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xo.copy(i.boundingSphere),xo.applyMatrix4(a),sr.copy(e.ray).recast(e.near),!(xo.containsPoint(sr.origin)===!1&&(sr.intersectSphere(xo,Pp)===null||sr.origin.distanceToSquared(Pp)>(e.far-e.near)**2))&&(bp.copy(a).invert(),sr.copy(e.ray).applyMatrix4(bp),!(i.boundingBox!==null&&sr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,sr)))}_computeIntersections(e,n,i){let r;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,f=a.attributes.normal,p=a.groups,g=a.drawRange;if(o!==null)if(Array.isArray(s))for(let x=0,y=p.length;x<y;x++){const m=p[x],d=s[m.materialIndex],_=Math.max(m.start,g.start),v=Math.min(o.count,Math.min(m.start+m.count,g.start+g.count));for(let M=_,b=v;M<b;M+=3){const R=o.getX(M),w=o.getX(M+1),D=o.getX(M+2);r=Ao(this,d,e,i,c,h,f,R,w,D),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,g.start),y=Math.min(o.count,g.start+g.count);for(let m=x,d=y;m<d;m+=3){const _=o.getX(m),v=o.getX(m+1),M=o.getX(m+2);r=Ao(this,s,e,i,c,h,f,_,v,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let x=0,y=p.length;x<y;x++){const m=p[x],d=s[m.materialIndex],_=Math.max(m.start,g.start),v=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let M=_,b=v;M<b;M+=3){const R=M,w=M+1,D=M+2;r=Ao(this,d,e,i,c,h,f,R,w,D),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,g.start),y=Math.min(l.count,g.start+g.count);for(let m=x,d=y;m<d;m+=3){const _=m,v=m+1,M=m+2;r=Ao(this,s,e,i,c,h,f,_,v,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function gE(t,e,n,i,r,a,s,o){let l;if(e.side===rn?l=i.intersectTriangle(s,a,r,!0,o):l=i.intersectTriangle(r,a,s,e.side===Ki,o),l===null)return null;wo.copy(o),wo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(wo);return c<n.near||c>n.far?null:{distance:c,point:wo.clone(),object:t}}function Ao(t,e,n,i,r,a,s,o,l,c){t.getVertexPosition(o,Xr),t.getVertexPosition(l,Yr),t.getVertexPosition(c,$r);const h=gE(t,e,n,i,Xr,Yr,$r,To);if(h){r&&(So.fromBufferAttribute(r,o),Eo.fromBufferAttribute(r,l),Mo.fromBufferAttribute(r,c),h.uv=Yn.getInterpolation(To,Xr,Yr,$r,So,Eo,Mo,new $e)),a&&(So.fromBufferAttribute(a,o),Eo.fromBufferAttribute(a,l),Mo.fromBufferAttribute(a,c),h.uv1=Yn.getInterpolation(To,Xr,Yr,$r,So,Eo,Mo,new $e)),s&&(Np.fromBufferAttribute(s,o),Lp.fromBufferAttribute(s,l),Dp.fromBufferAttribute(s,c),h.normal=Yn.getInterpolation(To,Xr,Yr,$r,Np,Lp,Dp,new B),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new B,materialIndex:0};Yn.getNormal(Xr,Yr,$r,f.normal),h.face=f}return h}class Gs extends xi{constructor(e=1,n=1,i=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],h=[],f=[];let p=0,g=0;x("z","y","x",-1,-1,i,n,e,s,a,0),x("z","y","x",1,-1,i,n,-e,s,a,1),x("x","z","y",1,1,e,i,n,r,s,2),x("x","z","y",1,-1,e,i,-n,r,s,3),x("x","y","z",1,-1,e,n,i,r,a,4),x("x","y","z",-1,-1,e,n,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new Tr(c,3)),this.setAttribute("normal",new Tr(h,3)),this.setAttribute("uv",new Tr(f,2));function x(y,m,d,_,v,M,b,R,w,D,$){const S=M/w,C=b/D,ne=M/2,J=b/2,L=R/2,X=w+1,W=D+1;let q=0,P=0;const F=new B;for(let V=0;V<W;V++){const K=V*C-J;for(let se=0;se<X;se++){const Ae=se*S-ne;F[y]=Ae*_,F[m]=K*v,F[d]=L,c.push(F.x,F.y,F.z),F[y]=0,F[m]=0,F[d]=R>0?1:-1,h.push(F.x,F.y,F.z),f.push(se/w),f.push(1-V/D),q+=1}}for(let V=0;V<D;V++)for(let K=0;K<w;K++){const se=p+K+X*V,Ae=p+K+X*(V+1),H=p+(K+1)+X*(V+1),Z=p+(K+1)+X*V;l.push(se,Ae,Z),l.push(Ae,H,Z),P+=6}o.addGroup(g,P,$),g+=P,p+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Pa(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Vt(t){const e={};for(let n=0;n<t.length;n++){const i=Pa(t[n]);for(const r in i)e[r]=i[r]}return e}function vE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Jv(t){return t.getRenderTarget()===null?t.outputColorSpace:Qe.workingColorSpace}const _E={clone:Pa,merge:Vt};var xE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zi extends Hs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xE,this.fragmentShader=yE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pa(e.uniforms),this.uniformsGroups=vE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class e_ extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=ui}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ai=new B,Up=new $e,Ip=new $e;class En extends e_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=od*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(bc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return od*2*Math.atan(Math.tan(bc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z)}getViewSize(e,n){return this.getViewBounds(e,Up,Ip),n.subVectors(Ip,Up)}setViewOffset(e,n,i,r,a,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(bc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*r/l,n-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const qr=-90,Kr=1;class SE extends sn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new En(qr,Kr,e,n);r.layers=this.layers,this.add(r);const a=new En(qr,Kr,e,n);a.layers=this.layers,this.add(a);const s=new En(qr,Kr,e,n);s.layers=this.layers,this.add(s);const o=new En(qr,Kr,e,n);o.layers=this.layers,this.add(o);const l=new En(qr,Kr,e,n);l.layers=this.layers,this.add(l);const c=new En(qr,Kr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,a,s,o,l]=n;for(const c of n)this.remove(c);if(e===ui)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Sl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,c,h]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,a),e.setRenderTarget(i,1,r),e.render(n,s),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(f,p,g),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class t_ extends an{constructor(e,n,i,r,a,s,o,l,c,h){e=e!==void 0?e:[],n=n!==void 0?n:Ra,super(e,n,i,r,a,s,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class EE extends Pr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new t_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Kt}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Gs(5,5,5),a=new Zi({name:"CubemapFromEquirect",uniforms:Pa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:Wi});a.uniforms.tEquirect.value=n;const s=new di(r,a),o=n.minFilter;return n.minFilter===xr&&(n.minFilter=Kt),new SE(1,10,this).update(e,s),n.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(a)}}const qc=new B,ME=new B,TE=new Fe;class hr{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=qc.subVectors(i,n).cross(ME.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(qc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:n.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||TE.getNormalMatrix(e),r=this.coplanarPoint(qc).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const or=new Gl,Ro=new B;class n_{constructor(e=new hr,n=new hr,i=new hr,r=new hr,a=new hr,s=new hr){this.planes=[e,n,i,r,a,s]}set(e,n,i,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ui){const i=this.planes,r=e.elements,a=r[0],s=r[1],o=r[2],l=r[3],c=r[4],h=r[5],f=r[6],p=r[7],g=r[8],x=r[9],y=r[10],m=r[11],d=r[12],_=r[13],v=r[14],M=r[15];if(i[0].setComponents(l-a,p-c,m-g,M-d).normalize(),i[1].setComponents(l+a,p+c,m+g,M+d).normalize(),i[2].setComponents(l+s,p+h,m+x,M+_).normalize(),i[3].setComponents(l-s,p-h,m-x,M-_).normalize(),i[4].setComponents(l-o,p-f,m-y,M-v).normalize(),n===ui)i[5].setComponents(l+o,p+f,m+y,M+v).normalize();else if(n===Sl)i[5].setComponents(o,f,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(or)}intersectsSprite(e){return or.center.set(0,0,0),or.radius=.7071067811865476,or.applyMatrix4(e.matrixWorld),this.intersectsSphere(or)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ro.x=r.normal.x>0?e.max.x:e.min.x,Ro.y=r.normal.y>0?e.max.y:e.min.y,Ro.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ro)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function i_(){let t=null,e=!1,n=null,i=null;function r(a,s){n(a,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){n=a},setContext:function(a){t=a}}}function wE(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,h){const f=c.array,p=c.usage,g=f.byteLength,x=t.createBuffer();t.bindBuffer(h,x),t.bufferData(h,f,p),c.onUploadCallback();let y;if(f instanceof Float32Array)y=t.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)y=t.SHORT;else if(f instanceof Uint32Array)y=t.UNSIGNED_INT;else if(f instanceof Int32Array)y=t.INT;else if(f instanceof Int8Array)y=t.BYTE;else if(f instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:x,type:y,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:g}}function a(c,h,f){const p=h.array,g=h._updateRange,x=h.updateRanges;if(t.bindBuffer(f,c),g.count===-1&&x.length===0&&t.bufferSubData(f,0,p),x.length!==0){for(let y=0,m=x.length;y<m;y++){const d=x[y];n?t.bufferSubData(f,d.start*p.BYTES_PER_ELEMENT,p,d.start,d.count):t.bufferSubData(f,d.start*p.BYTES_PER_ELEMENT,p.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}g.count!==-1&&(n?t.bufferSubData(f,g.offset*p.BYTES_PER_ELEMENT,p,g.offset,g.count):t.bufferSubData(f,g.offset*p.BYTES_PER_ELEMENT,p.subarray(g.offset,g.offset+g.count)),g.count=-1),h.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(t.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const p=i.get(c);(!p||p.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,r(c,h));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(f.buffer,c,h),f.version=c.version}}return{get:s,remove:o,update:l}}class Vl extends xi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const a=e/2,s=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,f=e/o,p=n/l,g=[],x=[],y=[],m=[];for(let d=0;d<h;d++){const _=d*p-s;for(let v=0;v<c;v++){const M=v*f-a;x.push(M,-_,0),y.push(0,0,1),m.push(v/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let _=0;_<o;_++){const v=_+c*d,M=_+c*(d+1),b=_+1+c*(d+1),R=_+1+c*d;g.push(v,M,R),g.push(M,b,R)}this.setIndex(g),this.setAttribute("position",new Tr(x,3)),this.setAttribute("normal",new Tr(y,3)),this.setAttribute("uv",new Tr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vl(e.width,e.height,e.widthSegments,e.heightSegments)}}var AE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,RE=`#ifdef USE_ALPHAHASH
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
#endif`,CE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,NE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,LE=`#ifdef USE_AOMAP
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
#endif`,DE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,UE=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,IE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,FE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,OE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,BE=`#ifdef USE_IRIDESCENCE
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
#endif`,zE=`#ifdef USE_BUMPMAP
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
#endif`,HE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,GE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,VE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,WE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,XE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,YE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$E=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,qE=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,KE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ZE=`vec3 transformedNormal = objectNormal;
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
#endif`,QE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,JE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nM="gl_FragColor = linearToOutputTexel( gl_FragColor );",iM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,rM=`#ifdef USE_ENVMAP
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
#endif`,aM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sM=`#ifdef USE_ENVMAP
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
#endif`,oM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lM=`#ifdef USE_ENVMAP
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
#endif`,cM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fM=`#ifdef USE_GRADIENTMAP
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
}`,pM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,mM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_M=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,xM=`#ifdef USE_ENVMAP
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
#endif`,yM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,SM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,EM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,MM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,TM=`PhysicalMaterial material;
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
#endif`,wM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,AM=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,RM=`#if defined( RE_IndirectDiffuse )
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
#endif`,CM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,PM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,LM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,DM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,UM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,IM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,FM=`#if defined( USE_POINTS_UV )
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
#endif`,OM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,BM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,HM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,GM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
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
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,VM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,jM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,WM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,XM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$M=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qM=`#ifdef USE_NORMALMAP
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
#endif`,KM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ZM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,QM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,JM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,nT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,aT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,oT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,cT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,uT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fT=`#ifdef USE_SKINNING
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
#endif`,pT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mT=`#ifdef USE_SKINNING
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
#endif`,gT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_T=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xT=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yT=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ST=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ET=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,MT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const AT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,RT=`uniform sampler2D t2D;
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
}`,CT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,PT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LT=`#include <common>
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
}`,DT=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,UT=`#define DISTANCE
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
}`,IT=`#define DISTANCE
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
}`,FT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,OT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kT=`uniform float scale;
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
}`,BT=`uniform vec3 diffuse;
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
}`,zT=`#include <common>
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
}`,HT=`uniform vec3 diffuse;
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
}`,GT=`#define LAMBERT
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
}`,VT=`#define LAMBERT
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
}`,jT=`#define MATCAP
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
}`,WT=`#define MATCAP
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
}`,XT=`#define NORMAL
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
}`,YT=`#define NORMAL
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
}`,$T=`#define PHONG
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
}`,qT=`#define PHONG
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
}`,KT=`#define STANDARD
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
}`,ZT=`#define STANDARD
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
}`,QT=`#define TOON
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
}`,JT=`#define TOON
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
}`,ew=`uniform float size;
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
}`,tw=`uniform vec3 diffuse;
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
}`,nw=`#include <common>
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
}`,iw=`uniform vec3 color;
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
}`,rw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,aw=`uniform vec3 diffuse;
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
}`,Ie={alphahash_fragment:AE,alphahash_pars_fragment:RE,alphamap_fragment:CE,alphamap_pars_fragment:bE,alphatest_fragment:PE,alphatest_pars_fragment:NE,aomap_fragment:LE,aomap_pars_fragment:DE,batching_pars_vertex:UE,batching_vertex:IE,begin_vertex:FE,beginnormal_vertex:OE,bsdfs:kE,iridescence_fragment:BE,bumpmap_pars_fragment:zE,clipping_planes_fragment:HE,clipping_planes_pars_fragment:GE,clipping_planes_pars_vertex:VE,clipping_planes_vertex:jE,color_fragment:WE,color_pars_fragment:XE,color_pars_vertex:YE,color_vertex:$E,common:qE,cube_uv_reflection_fragment:KE,defaultnormal_vertex:ZE,displacementmap_pars_vertex:QE,displacementmap_vertex:JE,emissivemap_fragment:eM,emissivemap_pars_fragment:tM,colorspace_fragment:nM,colorspace_pars_fragment:iM,envmap_fragment:rM,envmap_common_pars_fragment:aM,envmap_pars_fragment:sM,envmap_pars_vertex:oM,envmap_physical_pars_fragment:xM,envmap_vertex:lM,fog_vertex:cM,fog_pars_vertex:uM,fog_fragment:dM,fog_pars_fragment:hM,gradientmap_pars_fragment:fM,lightmap_fragment:pM,lightmap_pars_fragment:mM,lights_lambert_fragment:gM,lights_lambert_pars_fragment:vM,lights_pars_begin:_M,lights_toon_fragment:yM,lights_toon_pars_fragment:SM,lights_phong_fragment:EM,lights_phong_pars_fragment:MM,lights_physical_fragment:TM,lights_physical_pars_fragment:wM,lights_fragment_begin:AM,lights_fragment_maps:RM,lights_fragment_end:CM,logdepthbuf_fragment:bM,logdepthbuf_pars_fragment:PM,logdepthbuf_pars_vertex:NM,logdepthbuf_vertex:LM,map_fragment:DM,map_pars_fragment:UM,map_particle_fragment:IM,map_particle_pars_fragment:FM,metalnessmap_fragment:OM,metalnessmap_pars_fragment:kM,morphinstance_vertex:BM,morphcolor_vertex:zM,morphnormal_vertex:HM,morphtarget_pars_vertex:GM,morphtarget_vertex:VM,normal_fragment_begin:jM,normal_fragment_maps:WM,normal_pars_fragment:XM,normal_pars_vertex:YM,normal_vertex:$M,normalmap_pars_fragment:qM,clearcoat_normal_fragment_begin:KM,clearcoat_normal_fragment_maps:ZM,clearcoat_pars_fragment:QM,iridescence_pars_fragment:JM,opaque_fragment:eT,packing:tT,premultiplied_alpha_fragment:nT,project_vertex:iT,dithering_fragment:rT,dithering_pars_fragment:aT,roughnessmap_fragment:sT,roughnessmap_pars_fragment:oT,shadowmap_pars_fragment:lT,shadowmap_pars_vertex:cT,shadowmap_vertex:uT,shadowmask_pars_fragment:dT,skinbase_vertex:hT,skinning_pars_vertex:fT,skinning_vertex:pT,skinnormal_vertex:mT,specularmap_fragment:gT,specularmap_pars_fragment:vT,tonemapping_fragment:_T,tonemapping_pars_fragment:xT,transmission_fragment:yT,transmission_pars_fragment:ST,uv_pars_fragment:ET,uv_pars_vertex:MT,uv_vertex:TT,worldpos_vertex:wT,background_vert:AT,background_frag:RT,backgroundCube_vert:CT,backgroundCube_frag:bT,cube_vert:PT,cube_frag:NT,depth_vert:LT,depth_frag:DT,distanceRGBA_vert:UT,distanceRGBA_frag:IT,equirect_vert:FT,equirect_frag:OT,linedashed_vert:kT,linedashed_frag:BT,meshbasic_vert:zT,meshbasic_frag:HT,meshlambert_vert:GT,meshlambert_frag:VT,meshmatcap_vert:jT,meshmatcap_frag:WT,meshnormal_vert:XT,meshnormal_frag:YT,meshphong_vert:$T,meshphong_frag:qT,meshphysical_vert:KT,meshphysical_frag:ZT,meshtoon_vert:QT,meshtoon_frag:JT,points_vert:ew,points_frag:tw,shadow_vert:nw,shadow_frag:iw,sprite_vert:rw,sprite_frag:aw},oe={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Wn={basic:{uniforms:Vt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:Vt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:Vt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:Vt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:Vt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:Vt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:Vt([oe.points,oe.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:Vt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:Vt([oe.common,oe.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:Vt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:Vt([oe.sprite,oe.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:Vt([oe.common,oe.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:Vt([oe.lights,oe.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};Wn.physical={uniforms:Vt([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const Co={r:0,b:0,g:0},lr=new vi,sw=new yt;function ow(t,e,n,i,r,a,s){const o=new Ke(0);let l=a===!0?0:1,c,h,f=null,p=0,g=null;function x(m,d){let _=!1,v=d.isScene===!0?d.background:null;v&&v.isTexture&&(v=(d.backgroundBlurriness>0?n:e).get(v)),v===null?y(o,l):v&&v.isColor&&(y(v,1),_=!0);const M=t.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===zl)?(h===void 0&&(h=new di(new Gs(1,1,1),new Zi({name:"BackgroundCubeMaterial",uniforms:Pa(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),lr.copy(d.backgroundRotation),lr.x*=-1,lr.y*=-1,lr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(sw.makeRotationFromEuler(lr)),h.material.toneMapped=Qe.getTransfer(v.colorSpace)!==it,(f!==v||p!==v.version||g!==t.toneMapping)&&(h.material.needsUpdate=!0,f=v,p=v.version,g=t.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new di(new Vl(2,2),new Zi({name:"BackgroundMaterial",uniforms:Pa(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(v.colorSpace)!==it,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||p!==v.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,f=v,p=v.version,g=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function y(m,d){m.getRGB(Co,Jv(t)),i.buffers.color.setClear(Co.r,Co.g,Co.b,d,s)}return{getClearColor:function(){return o},setClearColor:function(m,d=1){o.set(m),l=d,y(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,y(o,l)},render:x}}function lw(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||a!==null,o={},l=m(null);let c=l,h=!1;function f(L,X,W,q,P){let F=!1;if(s){const V=y(q,W,X);c!==V&&(c=V,g(c.object)),F=d(L,q,W,P),F&&_(L,q,W,P)}else{const V=X.wireframe===!0;(c.geometry!==q.id||c.program!==W.id||c.wireframe!==V)&&(c.geometry=q.id,c.program=W.id,c.wireframe=V,F=!0)}P!==null&&n.update(P,t.ELEMENT_ARRAY_BUFFER),(F||h)&&(h=!1,D(L,X,W,q),P!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(P).buffer))}function p(){return i.isWebGL2?t.createVertexArray():a.createVertexArrayOES()}function g(L){return i.isWebGL2?t.bindVertexArray(L):a.bindVertexArrayOES(L)}function x(L){return i.isWebGL2?t.deleteVertexArray(L):a.deleteVertexArrayOES(L)}function y(L,X,W){const q=W.wireframe===!0;let P=o[L.id];P===void 0&&(P={},o[L.id]=P);let F=P[X.id];F===void 0&&(F={},P[X.id]=F);let V=F[q];return V===void 0&&(V=m(p()),F[q]=V),V}function m(L){const X=[],W=[],q=[];for(let P=0;P<r;P++)X[P]=0,W[P]=0,q[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:W,attributeDivisors:q,object:L,attributes:{},index:null}}function d(L,X,W,q){const P=c.attributes,F=X.attributes;let V=0;const K=W.getAttributes();for(const se in K)if(K[se].location>=0){const H=P[se];let Z=F[se];if(Z===void 0&&(se==="instanceMatrix"&&L.instanceMatrix&&(Z=L.instanceMatrix),se==="instanceColor"&&L.instanceColor&&(Z=L.instanceColor)),H===void 0||H.attribute!==Z||Z&&H.data!==Z.data)return!0;V++}return c.attributesNum!==V||c.index!==q}function _(L,X,W,q){const P={},F=X.attributes;let V=0;const K=W.getAttributes();for(const se in K)if(K[se].location>=0){let H=F[se];H===void 0&&(se==="instanceMatrix"&&L.instanceMatrix&&(H=L.instanceMatrix),se==="instanceColor"&&L.instanceColor&&(H=L.instanceColor));const Z={};Z.attribute=H,H&&H.data&&(Z.data=H.data),P[se]=Z,V++}c.attributes=P,c.attributesNum=V,c.index=q}function v(){const L=c.newAttributes;for(let X=0,W=L.length;X<W;X++)L[X]=0}function M(L){b(L,0)}function b(L,X){const W=c.newAttributes,q=c.enabledAttributes,P=c.attributeDivisors;W[L]=1,q[L]===0&&(t.enableVertexAttribArray(L),q[L]=1),P[L]!==X&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,X),P[L]=X)}function R(){const L=c.newAttributes,X=c.enabledAttributes;for(let W=0,q=X.length;W<q;W++)X[W]!==L[W]&&(t.disableVertexAttribArray(W),X[W]=0)}function w(L,X,W,q,P,F,V){V===!0?t.vertexAttribIPointer(L,X,W,P,F):t.vertexAttribPointer(L,X,W,q,P,F)}function D(L,X,W,q){if(i.isWebGL2===!1&&(L.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const P=q.attributes,F=W.getAttributes(),V=X.defaultAttributeValues;for(const K in F){const se=F[K];if(se.location>=0){let Ae=P[K];if(Ae===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(Ae=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(Ae=L.instanceColor)),Ae!==void 0){const H=Ae.normalized,Z=Ae.itemSize,ue=n.get(Ae);if(ue===void 0)continue;const Ee=ue.buffer,xe=ue.type,me=ue.bytesPerElement,qe=i.isWebGL2===!0&&(xe===t.INT||xe===t.UNSIGNED_INT||Ae.gpuType===Iv);if(Ae.isInterleavedBufferAttribute){const Ce=Ae.data,I=Ce.stride,bt=Ae.offset;if(Ce.isInstancedInterleavedBuffer){for(let Se=0;Se<se.locationSize;Se++)b(se.location+Se,Ce.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let Se=0;Se<se.locationSize;Se++)M(se.location+Se);t.bindBuffer(t.ARRAY_BUFFER,Ee);for(let Se=0;Se<se.locationSize;Se++)w(se.location+Se,Z/se.locationSize,xe,H,I*me,(bt+Z/se.locationSize*Se)*me,qe)}else{if(Ae.isInstancedBufferAttribute){for(let Ce=0;Ce<se.locationSize;Ce++)b(se.location+Ce,Ae.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let Ce=0;Ce<se.locationSize;Ce++)M(se.location+Ce);t.bindBuffer(t.ARRAY_BUFFER,Ee);for(let Ce=0;Ce<se.locationSize;Ce++)w(se.location+Ce,Z/se.locationSize,xe,H,Z*me,Z/se.locationSize*Ce*me,qe)}}else if(V!==void 0){const H=V[K];if(H!==void 0)switch(H.length){case 2:t.vertexAttrib2fv(se.location,H);break;case 3:t.vertexAttrib3fv(se.location,H);break;case 4:t.vertexAttrib4fv(se.location,H);break;default:t.vertexAttrib1fv(se.location,H)}}}}R()}function $(){ne();for(const L in o){const X=o[L];for(const W in X){const q=X[W];for(const P in q)x(q[P].object),delete q[P];delete X[W]}delete o[L]}}function S(L){if(o[L.id]===void 0)return;const X=o[L.id];for(const W in X){const q=X[W];for(const P in q)x(q[P].object),delete q[P];delete X[W]}delete o[L.id]}function C(L){for(const X in o){const W=o[X];if(W[L.id]===void 0)continue;const q=W[L.id];for(const P in q)x(q[P].object),delete q[P];delete W[L.id]}}function ne(){J(),h=!0,c!==l&&(c=l,g(c.object))}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:ne,resetDefaultState:J,dispose:$,releaseStatesOfGeometry:S,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:M,disableUnusedAttributes:R}}function cw(t,e,n,i){const r=i.isWebGL2;let a;function s(h){a=h}function o(h,f){t.drawArrays(a,h,f),n.update(f,a,1)}function l(h,f,p){if(p===0)return;let g,x;if(r)g=t,x="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[x](a,h,f,p),n.update(f,a,p)}function c(h,f,p){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let x=0;x<p;x++)this.render(h[x],f[x]);else{g.multiDrawArraysWEBGL(a,h,0,f,0,p);let x=0;for(let y=0;y<p;y++)x+=f[y];n.update(x,a,1)}}this.setMode=s,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function uw(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let o=n.precision!==void 0?n.precision:"highp";const l=a(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=s||e.has("WEBGL_draw_buffers"),h=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),d=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=p>0,M=s||e.has("OES_texture_float"),b=v&&M,R=s?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:a,precision:o,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:_,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:b,maxSamples:R}}function dw(t){const e=this;let n=null,i=0,r=!1,a=!1;const s=new hr,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const g=f.length!==0||p||i!==0||r;return r=p,i=f.length,g},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,p){n=h(f,p,0)},this.setState=function(f,p,g){const x=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,d=t.get(f);if(!r||x===null||x.length===0||a&&!m)a?h(null):c();else{const _=a?0:i,v=_*4;let M=d.clippingState||null;l.value=M,M=h(x,p,v,g);for(let b=0;b!==v;++b)M[b]=n[b];d.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,p,g,x){const y=f!==null?f.length:0;let m=null;if(y!==0){if(m=l.value,x!==!0||m===null){const d=g+y*4,_=p.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,M=g;v!==y;++v,M+=4)s.copy(f[v]).applyMatrix4(_,o),s.normal.toArray(m,M),m[M+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function hw(t){let e=new WeakMap;function n(s,o){return o===nd?s.mapping=Ra:o===id&&(s.mapping=Ca),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===nd||o===id)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new EE(l.height);return c.fromEquirectangularTexture(t,s),e.set(s,c),s.addEventListener("dispose",r),n(c.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class fw extends e_{constructor(e=-1,n=1,i=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,s=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ua=4,Fp=[.125,.215,.35,.446,.526,.582],mr=20,Kc=new fw,Op=new Ke;let Zc=null,Qc=0,Jc=0;const fr=(1+Math.sqrt(5))/2,Zr=1/fr,kp=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,fr,Zr),new B(0,fr,-Zr),new B(Zr,0,fr),new B(-Zr,0,fr),new B(fr,Zr,0),new B(-fr,Zr,0)];class Bp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Zc=this._renderer.getRenderTarget(),Qc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),n>0&&this._blur(a,0,0,n),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zc,Qc,Jc),e.scissorTest=!1,bo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ra||e.mapping===Ca?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zc=this._renderer.getRenderTarget(),Qc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:Ns,format:Fn,colorSpace:tr,depthBuffer:!1},r=zp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zp(e,n,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pw(a)),this._blurMaterial=mw(a,e,n)}return r}_compileMaterial(e){const n=new di(this._lodPlanes[0],e);this._renderer.compile(n,Kc)}_sceneToCubeUV(e,n,i,r){const o=new En(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(Op),h.toneMapping=Xi,h.autoClear=!1;const g=new Kv({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),x=new di(new Gs,g);let y=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,y=!0):(g.color.copy(Op),y=!0);for(let d=0;d<6;d++){const _=d%3;_===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):_===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const v=this._cubeSize;bo(r,_*v,d>2?v:0,v,v),h.setRenderTarget(r),y&&h.render(x,o),h.render(e,o)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=p,h.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ra||e.mapping===Ca;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hp());const a=r?this._cubemapMaterial:this._equirectMaterial,s=new di(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;bo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,Kc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=kp[(r-1)%kp.length];this._blur(e,r-1,r,a,s)}n.autoClear=i}_blur(e,n,i,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",a),this._halfBlur(s,e,i,i,r,"longitudinal",a)}_halfBlur(e,n,i,r,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new di(this._lodPlanes[r],c),p=c.uniforms,g=this._sizeLods[i]-1,x=isFinite(a)?Math.PI/(2*g):2*Math.PI/(2*mr-1),y=a/x,m=isFinite(a)?1+Math.floor(h*y):mr;m>mr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${mr}`);const d=[];let _=0;for(let w=0;w<mr;++w){const D=w/y,$=Math.exp(-D*D/2);d.push($),w===0?_+=$:w<m&&(_+=2*$)}for(let w=0;w<d.length;w++)d[w]=d[w]/_;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=d,p.latitudinal.value=s==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:v}=this;p.dTheta.value=x,p.mipInt.value=v-i;const M=this._sizeLods[r],b=3*M*(r>v-ua?r-v+ua:0),R=4*(this._cubeSize-M);bo(n,b,R,3*M,2*M),l.setRenderTarget(n),l.render(f,Kc)}}function pw(t){const e=[],n=[],i=[];let r=t;const a=t-ua+1+Fp.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);n.push(o);let l=1/o;s>t-ua?l=Fp[s-t+ua-1]:s===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,f=1+c,p=[h,h,f,h,f,f,h,h,f,f,h,f],g=6,x=6,y=3,m=2,d=1,_=new Float32Array(y*x*g),v=new Float32Array(m*x*g),M=new Float32Array(d*x*g);for(let R=0;R<g;R++){const w=R%3*2/3-1,D=R>2?0:-1,$=[w,D,0,w+2/3,D,0,w+2/3,D+1,0,w,D,0,w+2/3,D+1,0,w,D+1,0];_.set($,y*x*R),v.set(p,m*x*R);const S=[R,R,R,R,R,R];M.set(S,d*x*R)}const b=new xi;b.setAttribute("position",new wn(_,y)),b.setAttribute("uv",new wn(v,m)),b.setAttribute("faceIndex",new wn(M,d)),e.push(b),r>ua&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function zp(t,e,n){const i=new Pr(t,e,n);return i.texture.mapping=zl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function bo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function mw(t,e,n){const i=new Float32Array(mr),r=new B(0,1,0);return new Zi({name:"SphericalGaussianBlur",defines:{n:mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:dh(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Hp(){return new Zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dh(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Gp(){return new Zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function dh(){return`

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
	`}function gw(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===nd||l===id,h=l===Ra||l===Ca;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return n===null&&(n=new Bp(t)),f=c?n.fromEquirectangular(o,f):n.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||h&&f&&r(f)){n===null&&(n=new Bp(t));const p=c?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,p),o.addEventListener("dispose",a),p.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function vw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function _w(t,e,n,i){const r={},a=new WeakMap;function s(f){const p=f.target;p.index!==null&&e.remove(p.index);for(const x in p.attributes)e.remove(p.attributes[x]);for(const x in p.morphAttributes){const y=p.morphAttributes[x];for(let m=0,d=y.length;m<d;m++)e.remove(y[m])}p.removeEventListener("dispose",s),delete r[p.id];const g=a.get(p);g&&(e.remove(g),a.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,n.memory.geometries--}function o(f,p){return r[p.id]===!0||(p.addEventListener("dispose",s),r[p.id]=!0,n.memory.geometries++),p}function l(f){const p=f.attributes;for(const x in p)e.update(p[x],t.ARRAY_BUFFER);const g=f.morphAttributes;for(const x in g){const y=g[x];for(let m=0,d=y.length;m<d;m++)e.update(y[m],t.ARRAY_BUFFER)}}function c(f){const p=[],g=f.index,x=f.attributes.position;let y=0;if(g!==null){const _=g.array;y=g.version;for(let v=0,M=_.length;v<M;v+=3){const b=_[v+0],R=_[v+1],w=_[v+2];p.push(b,R,R,w,w,b)}}else if(x!==void 0){const _=x.array;y=x.version;for(let v=0,M=_.length/3-1;v<M;v+=3){const b=v+0,R=v+1,w=v+2;p.push(b,R,R,w,w,b)}}else return;const m=new(Vv(p)?Qv:Zv)(p,1);m.version=y;const d=a.get(f);d&&e.remove(d),a.set(f,m)}function h(f){const p=a.get(f);if(p){const g=f.index;g!==null&&p.version<g.version&&c(f)}else c(f);return a.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function xw(t,e,n,i){const r=i.isWebGL2;let a;function s(g){a=g}let o,l;function c(g){o=g.type,l=g.bytesPerElement}function h(g,x){t.drawElements(a,x,o,g*l),n.update(x,a,1)}function f(g,x,y){if(y===0)return;let m,d;if(r)m=t,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](a,x,o,g*l,y),n.update(x,a,y)}function p(g,x,y){if(y===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<y;d++)this.render(g[d]/l,x[d]);else{m.multiDrawElementsWEBGL(a,x,0,o,g,0,y);let d=0;for(let _=0;_<y;_++)d+=x[_];n.update(d,a,1)}}this.setMode=s,this.setIndex=c,this.render=h,this.renderInstances=f,this.renderMultiDraw=p}function yw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=o*(a/3);break;case t.LINES:n.lines+=o*(a/2);break;case t.LINE_STRIP:n.lines+=o*(a-1);break;case t.LINE_LOOP:n.lines+=o*a;break;case t.POINTS:n.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Sw(t,e){return t[0]-e[0]}function Ew(t,e){return Math.abs(e[1])-Math.abs(t[1])}function Mw(t,e,n){const i={},r=new Float32Array(8),a=new WeakMap,s=new Lt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,f){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,y=x!==void 0?x.length:0;let m=a.get(h);if(m===void 0||m.count!==y){let J=function(){C.dispose(),a.delete(h),h.removeEventListener("dispose",J)};var g=J;m!==void 0&&m.texture.dispose();const d=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,v=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],R=h.morphAttributes.color||[];let w=0;d===!0&&(w=1),_===!0&&(w=2),v===!0&&(w=3);let D=h.attributes.position.count*w,$=1;D>e.maxTextureSize&&($=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const S=new Float32Array(D*$*4*y),C=new Xv(S,D,$,y);C.type=oi,C.needsUpdate=!0;const ne=w*4;for(let L=0;L<y;L++){const X=M[L],W=b[L],q=R[L],P=D*$*4*L;for(let F=0;F<X.count;F++){const V=F*ne;d===!0&&(s.fromBufferAttribute(X,F),S[P+V+0]=s.x,S[P+V+1]=s.y,S[P+V+2]=s.z,S[P+V+3]=0),_===!0&&(s.fromBufferAttribute(W,F),S[P+V+4]=s.x,S[P+V+5]=s.y,S[P+V+6]=s.z,S[P+V+7]=0),v===!0&&(s.fromBufferAttribute(q,F),S[P+V+8]=s.x,S[P+V+9]=s.y,S[P+V+10]=s.z,S[P+V+11]=q.itemSize===4?s.w:1)}}m={count:y,texture:C,size:new $e(D,$)},a.set(h,m),h.addEventListener("dispose",J)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(t,"morphTexture",c.morphTexture,n);else{let d=0;for(let v=0;v<p.length;v++)d+=p[v];const _=h.morphTargetsRelative?1:1-d;f.getUniforms().setValue(t,"morphTargetBaseInfluence",_),f.getUniforms().setValue(t,"morphTargetInfluences",p)}f.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const x=p===void 0?0:p.length;let y=i[h.id];if(y===void 0||y.length!==x){y=[];for(let M=0;M<x;M++)y[M]=[M,0];i[h.id]=y}for(let M=0;M<x;M++){const b=y[M];b[0]=M,b[1]=p[M]}y.sort(Ew);for(let M=0;M<8;M++)M<x&&y[M][1]?(o[M][0]=y[M][0],o[M][1]=y[M][1]):(o[M][0]=Number.MAX_SAFE_INTEGER,o[M][1]=0);o.sort(Sw);const m=h.morphAttributes.position,d=h.morphAttributes.normal;let _=0;for(let M=0;M<8;M++){const b=o[M],R=b[0],w=b[1];R!==Number.MAX_SAFE_INTEGER&&w?(m&&h.getAttribute("morphTarget"+M)!==m[R]&&h.setAttribute("morphTarget"+M,m[R]),d&&h.getAttribute("morphNormal"+M)!==d[R]&&h.setAttribute("morphNormal"+M,d[R]),r[M]=w,_+=w):(m&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),d&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),r[M]=0)}const v=h.morphTargetsRelative?1:1-_;f.getUniforms().setValue(t,"morphTargetBaseInfluence",v),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function Tw(t,e,n,i){let r=new WeakMap;function a(l){const c=i.render.frame,h=l.geometry,f=e.get(l,h);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return f}function s(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:a,dispose:s}}class r_ extends an{constructor(e,n,i,r,a,s,o,l,c,h){if(h=h!==void 0?h:Mr,h!==Mr&&h!==ba)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Mr&&(i=Ii),i===void 0&&h===ba&&(i=Er),super(null,r,a,s,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:Wt,this.minFilter=l!==void 0?l:Wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const a_=new an,s_=new r_(1,1);s_.compareFunction=Gv;const o_=new Xv,l_=new aE,c_=new t_,Vp=[],jp=[],Wp=new Float32Array(16),Xp=new Float32Array(9),Yp=new Float32Array(4);function Oa(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let a=Vp[r];if(a===void 0&&(a=new Float32Array(r),Vp[r]=a),e!==0){i.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=n,t[s].toArray(a,o)}return a}function Mt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Tt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function jl(t,e){let n=jp[e];n===void 0&&(n=new Int32Array(e),jp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function ww(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Aw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Mt(n,e))return;t.uniform2fv(this.addr,e),Tt(n,e)}}function Rw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Mt(n,e))return;t.uniform3fv(this.addr,e),Tt(n,e)}}function Cw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Mt(n,e))return;t.uniform4fv(this.addr,e),Tt(n,e)}}function bw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Mt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Tt(n,e)}else{if(Mt(n,i))return;Yp.set(i),t.uniformMatrix2fv(this.addr,!1,Yp),Tt(n,i)}}function Pw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Mt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Tt(n,e)}else{if(Mt(n,i))return;Xp.set(i),t.uniformMatrix3fv(this.addr,!1,Xp),Tt(n,i)}}function Nw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Mt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Tt(n,e)}else{if(Mt(n,i))return;Wp.set(i),t.uniformMatrix4fv(this.addr,!1,Wp),Tt(n,i)}}function Lw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Dw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Mt(n,e))return;t.uniform2iv(this.addr,e),Tt(n,e)}}function Uw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Mt(n,e))return;t.uniform3iv(this.addr,e),Tt(n,e)}}function Iw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Mt(n,e))return;t.uniform4iv(this.addr,e),Tt(n,e)}}function Fw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Ow(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Mt(n,e))return;t.uniform2uiv(this.addr,e),Tt(n,e)}}function kw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Mt(n,e))return;t.uniform3uiv(this.addr,e),Tt(n,e)}}function Bw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Mt(n,e))return;t.uniform4uiv(this.addr,e),Tt(n,e)}}function zw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const a=this.type===t.SAMPLER_2D_SHADOW?s_:a_;n.setTexture2D(e||a,r)}function Hw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||l_,r)}function Gw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||c_,r)}function Vw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||o_,r)}function jw(t){switch(t){case 5126:return ww;case 35664:return Aw;case 35665:return Rw;case 35666:return Cw;case 35674:return bw;case 35675:return Pw;case 35676:return Nw;case 5124:case 35670:return Lw;case 35667:case 35671:return Dw;case 35668:case 35672:return Uw;case 35669:case 35673:return Iw;case 5125:return Fw;case 36294:return Ow;case 36295:return kw;case 36296:return Bw;case 35678:case 36198:case 36298:case 36306:case 35682:return zw;case 35679:case 36299:case 36307:return Hw;case 35680:case 36300:case 36308:case 36293:return Gw;case 36289:case 36303:case 36311:case 36292:return Vw}}function Ww(t,e){t.uniform1fv(this.addr,e)}function Xw(t,e){const n=Oa(e,this.size,2);t.uniform2fv(this.addr,n)}function Yw(t,e){const n=Oa(e,this.size,3);t.uniform3fv(this.addr,n)}function $w(t,e){const n=Oa(e,this.size,4);t.uniform4fv(this.addr,n)}function qw(t,e){const n=Oa(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Kw(t,e){const n=Oa(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Zw(t,e){const n=Oa(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Qw(t,e){t.uniform1iv(this.addr,e)}function Jw(t,e){t.uniform2iv(this.addr,e)}function eA(t,e){t.uniform3iv(this.addr,e)}function tA(t,e){t.uniform4iv(this.addr,e)}function nA(t,e){t.uniform1uiv(this.addr,e)}function iA(t,e){t.uniform2uiv(this.addr,e)}function rA(t,e){t.uniform3uiv(this.addr,e)}function aA(t,e){t.uniform4uiv(this.addr,e)}function sA(t,e,n){const i=this.cache,r=e.length,a=jl(n,r);Mt(i,a)||(t.uniform1iv(this.addr,a),Tt(i,a));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||a_,a[s])}function oA(t,e,n){const i=this.cache,r=e.length,a=jl(n,r);Mt(i,a)||(t.uniform1iv(this.addr,a),Tt(i,a));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||l_,a[s])}function lA(t,e,n){const i=this.cache,r=e.length,a=jl(n,r);Mt(i,a)||(t.uniform1iv(this.addr,a),Tt(i,a));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||c_,a[s])}function cA(t,e,n){const i=this.cache,r=e.length,a=jl(n,r);Mt(i,a)||(t.uniform1iv(this.addr,a),Tt(i,a));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||o_,a[s])}function uA(t){switch(t){case 5126:return Ww;case 35664:return Xw;case 35665:return Yw;case 35666:return $w;case 35674:return qw;case 35675:return Kw;case 35676:return Zw;case 5124:case 35670:return Qw;case 35667:case 35671:return Jw;case 35668:case 35672:return eA;case 35669:case 35673:return tA;case 5125:return nA;case 36294:return iA;case 36295:return rA;case 36296:return aA;case 35678:case 36198:case 36298:case 36306:case 35682:return sA;case 35679:case 36299:case 36307:return oA;case 35680:case 36300:case 36308:case 36293:return lA;case 36289:case 36303:case 36311:case 36292:return cA}}class dA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=jw(n.type)}}class hA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=uA(n.type)}}class fA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,n[o.id],i)}}}const eu=/(\w+)(\])?(\[|\.)?/g;function $p(t,e){t.seq.push(e),t.map[e.id]=e}function pA(t,e,n){const i=t.name,r=i.length;for(eu.lastIndex=0;;){const a=eu.exec(i),s=eu.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===r){$p(n,c===void 0?new dA(o,t,e):new hA(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new fA(o),$p(n,f)),n=f}}}class Wo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(n,r),s=e.getUniformLocation(n,a.name);pA(a,s,this)}}setValue(e,n,i,r){const a=this.map[n];a!==void 0&&a.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let a=0,s=n.length;a!==s;++a){const o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function qp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const mA=37297;let gA=0;function vA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,n.length);for(let s=r;s<a;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${n[s]}`)}return i.join(`
`)}function _A(t){const e=Qe.getPrimaries(Qe.workingColorSpace),n=Qe.getPrimaries(t);let i;switch(e===n?i="":e===yl&&n===xl?i="LinearDisplayP3ToLinearSRGB":e===xl&&n===yl&&(i="LinearSRGBToLinearDisplayP3"),t){case tr:case Hl:return[i,"LinearTransferOETF"];case jn:case uh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Kp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const s=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+vA(t.getShaderSource(e),s)}else return r}function xA(t,e){const n=_A(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function yA(t,e){let n;switch(e){case AS:n="Linear";break;case RS:n="Reinhard";break;case CS:n="OptimizedCineon";break;case bS:n="ACESFilmic";break;case NS:n="AgX";break;case LS:n="Neutral";break;case PS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function SA(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.alphaToCoverage||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(da).join(`
`)}function EA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(da).join(`
`)}function MA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function TA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=t.getActiveAttrib(e,r),s=a.name;let o=1;a.type===t.FLOAT_MAT2&&(o=2),a.type===t.FLOAT_MAT3&&(o=3),a.type===t.FLOAT_MAT4&&(o=4),n[s]={type:a.type,location:t.getAttribLocation(e,s),locationSize:o}}return n}function da(t){return t!==""}function Zp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wA=/^[ \t]*#include +<([\w\d./]+)>/gm;function cd(t){return t.replace(wA,RA)}const AA=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function RA(t,e){let n=Ie[e];if(n===void 0){const i=AA.get(e);if(i!==void 0)n=Ie[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return cd(n)}const CA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jp(t){return t.replace(CA,bA)}function bA(t,e,n,i){let r="";for(let a=parseInt(e);a<parseInt(n);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function em(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	`;return t.isWebGL2&&(e+=`precision ${t.precision} sampler3D;
		precision ${t.precision} sampler2DArray;
		precision ${t.precision} sampler2DShadow;
		precision ${t.precision} samplerCubeShadow;
		precision ${t.precision} sampler2DArrayShadow;
		precision ${t.precision} isampler2D;
		precision ${t.precision} isampler3D;
		precision ${t.precision} isamplerCube;
		precision ${t.precision} isampler2DArray;
		precision ${t.precision} usampler2D;
		precision ${t.precision} usampler3D;
		precision ${t.precision} usamplerCube;
		precision ${t.precision} usampler2DArray;
		`),t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function PA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Lv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===eS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function NA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ra:case Ca:e="ENVMAP_TYPE_CUBE";break;case zl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function LA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ca:e="ENVMAP_MODE_REFRACTION";break}return e}function DA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Dv:e="ENVMAP_BLENDING_MULTIPLY";break;case TS:e="ENVMAP_BLENDING_MIX";break;case wS:e="ENVMAP_BLENDING_ADD";break}return e}function UA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function IA(t,e,n,i){const r=t.getContext(),a=n.defines;let s=n.vertexShader,o=n.fragmentShader;const l=PA(n),c=NA(n),h=LA(n),f=DA(n),p=UA(n),g=n.isWebGL2?"":SA(n),x=EA(n),y=MA(a),m=r.createProgram();let d,_,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(da).join(`
`),d.length>0&&(d+=`
`),_=[g,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(da).join(`
`),_.length>0&&(_+=`
`)):(d=[em(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(da).join(`
`),_=[g,em(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Xi?"#define TONE_MAPPING":"",n.toneMapping!==Xi?Ie.tonemapping_pars_fragment:"",n.toneMapping!==Xi?yA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,xA("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(da).join(`
`)),s=cd(s),s=Zp(s,n),s=Qp(s,n),o=cd(o),o=Zp(o,n),o=Qp(o,n),s=Jp(s),o=Jp(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,d=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,_=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===gp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===gp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const M=v+d+s,b=v+_+o,R=qp(r,r.VERTEX_SHADER,M),w=qp(r,r.FRAGMENT_SHADER,b);r.attachShader(m,R),r.attachShader(m,w),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function D(ne){if(t.debug.checkShaderErrors){const J=r.getProgramInfoLog(m).trim(),L=r.getShaderInfoLog(R).trim(),X=r.getShaderInfoLog(w).trim();let W=!0,q=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(W=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,R,w);else{const P=Kp(r,R,"vertex"),F=Kp(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+ne.name+`
Material Type: `+ne.type+`

Program Info Log: `+J+`
`+P+`
`+F)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(L===""||X==="")&&(q=!1);q&&(ne.diagnostics={runnable:W,programLog:J,vertexShader:{log:L,prefix:d},fragmentShader:{log:X,prefix:_}})}r.deleteShader(R),r.deleteShader(w),$=new Wo(r,m),S=TA(r,m)}let $;this.getUniforms=function(){return $===void 0&&D(this),$};let S;this.getAttributes=function(){return S===void 0&&D(this),S};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(m,mA)),C},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=gA++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=R,this.fragmentShader=w,this}let FA=0;class OA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new kA(e),n.set(e,i)),i}}class kA{constructor(e){this.id=FA++,this.code=e,this.usedTimes=0}}function BA(t,e,n,i,r,a,s){const o=new $v,l=new OA,c=new Set,h=[],f=r.isWebGL2,p=r.logarithmicDepthBuffer,g=r.vertexTextures;let x=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return c.add(S),S===0?"uv":`uv${S}`}function d(S,C,ne,J,L){const X=J.fog,W=L.geometry,q=S.isMeshStandardMaterial?J.environment:null,P=(S.isMeshStandardMaterial?n:e).get(S.envMap||q),F=P&&P.mapping===zl?P.image.height:null,V=y[S.type];S.precision!==null&&(x=r.getMaxPrecision(S.precision),x!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",x,"instead."));const K=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,se=K!==void 0?K.length:0;let Ae=0;W.morphAttributes.position!==void 0&&(Ae=1),W.morphAttributes.normal!==void 0&&(Ae=2),W.morphAttributes.color!==void 0&&(Ae=3);let H,Z,ue,Ee;if(V){const Je=Wn[V];H=Je.vertexShader,Z=Je.fragmentShader}else H=S.vertexShader,Z=S.fragmentShader,l.update(S),ue=l.getVertexShaderID(S),Ee=l.getFragmentShaderID(S);const xe=t.getRenderTarget(),me=L.isInstancedMesh===!0,qe=L.isBatchedMesh===!0,Ce=!!S.map,I=!!S.matcap,bt=!!P,Se=!!S.aoMap,ze=!!S.lightMap,Te=!!S.bumpMap,We=!!S.normalMap,Oe=!!S.displacementMap,He=!!S.emissiveMap,ft=!!S.metalnessMap,A=!!S.roughnessMap,E=S.anisotropy>0,j=S.clearcoat>0,Y=S.iridescence>0,te=S.sheen>0,Q=S.transmission>0,Le=E&&!!S.anisotropyMap,we=j&&!!S.clearcoatMap,le=j&&!!S.clearcoatNormalMap,de=j&&!!S.clearcoatRoughnessMap,De=Y&&!!S.iridescenceMap,ie=Y&&!!S.iridescenceThicknessMap,gt=te&&!!S.sheenColorMap,Ge=te&&!!S.sheenRoughnessMap,ye=!!S.specularMap,ge=!!S.specularColorMap,ve=!!S.specularIntensityMap,Xe=Q&&!!S.transmissionMap,Pe=Q&&!!S.thicknessMap,at=!!S.gradientMap,N=!!S.alphaMap,ce=S.alphaTest>0,k=!!S.alphaHash,ae=!!S.extensions;let he=Xi;S.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(he=t.toneMapping);const je={isWebGL2:f,shaderID:V,shaderType:S.type,shaderName:S.name,vertexShader:H,fragmentShader:Z,defines:S.defines,customVertexShaderID:ue,customFragmentShaderID:Ee,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:x,batching:qe,instancing:me,instancingColor:me&&L.instanceColor!==null,instancingMorph:me&&L.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:xe===null?t.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:tr,alphaToCoverage:!!S.alphaToCoverage,map:Ce,matcap:I,envMap:bt,envMapMode:bt&&P.mapping,envMapCubeUVHeight:F,aoMap:Se,lightMap:ze,bumpMap:Te,normalMap:We,displacementMap:g&&Oe,emissiveMap:He,normalMapObjectSpace:We&&S.normalMapType===jS,normalMapTangentSpace:We&&S.normalMapType===VS,metalnessMap:ft,roughnessMap:A,anisotropy:E,anisotropyMap:Le,clearcoat:j,clearcoatMap:we,clearcoatNormalMap:le,clearcoatRoughnessMap:de,iridescence:Y,iridescenceMap:De,iridescenceThicknessMap:ie,sheen:te,sheenColorMap:gt,sheenRoughnessMap:Ge,specularMap:ye,specularColorMap:ge,specularIntensityMap:ve,transmission:Q,transmissionMap:Xe,thicknessMap:Pe,gradientMap:at,opaque:S.transparent===!1&&S.blending===_a&&S.alphaToCoverage===!1,alphaMap:N,alphaTest:ce,alphaHash:k,combine:S.combine,mapUv:Ce&&m(S.map.channel),aoMapUv:Se&&m(S.aoMap.channel),lightMapUv:ze&&m(S.lightMap.channel),bumpMapUv:Te&&m(S.bumpMap.channel),normalMapUv:We&&m(S.normalMap.channel),displacementMapUv:Oe&&m(S.displacementMap.channel),emissiveMapUv:He&&m(S.emissiveMap.channel),metalnessMapUv:ft&&m(S.metalnessMap.channel),roughnessMapUv:A&&m(S.roughnessMap.channel),anisotropyMapUv:Le&&m(S.anisotropyMap.channel),clearcoatMapUv:we&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:le&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&m(S.sheenRoughnessMap.channel),specularMapUv:ye&&m(S.specularMap.channel),specularColorMapUv:ge&&m(S.specularColorMap.channel),specularIntensityMapUv:ve&&m(S.specularIntensityMap.channel),transmissionMapUv:Xe&&m(S.transmissionMap.channel),thicknessMapUv:Pe&&m(S.thicknessMap.channel),alphaMapUv:N&&m(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(We||E),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!W.attributes.uv&&(Ce||N),fog:!!X,useFog:S.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:L.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Ae,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&ne.length>0,shadowMapType:t.shadowMap.type,toneMapping:he,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Ce&&S.map.isVideoTexture===!0&&Qe.getTransfer(S.map.colorSpace)===it,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===si,flipSided:S.side===rn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ae&&S.extensions.derivatives===!0,extensionFragDepth:ae&&S.extensions.fragDepth===!0,extensionDrawBuffers:ae&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ae&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ae&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ae&&S.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return je.vertexUv1s=c.has(1),je.vertexUv2s=c.has(2),je.vertexUv3s=c.has(3),c.clear(),je}function _(S){const C=[];if(S.shaderID?C.push(S.shaderID):(C.push(S.customVertexShaderID),C.push(S.customFragmentShaderID)),S.defines!==void 0)for(const ne in S.defines)C.push(ne),C.push(S.defines[ne]);return S.isRawShaderMaterial===!1&&(v(C,S),M(C,S),C.push(t.outputColorSpace)),C.push(S.customProgramCacheKey),C.join()}function v(S,C){S.push(C.precision),S.push(C.outputColorSpace),S.push(C.envMapMode),S.push(C.envMapCubeUVHeight),S.push(C.mapUv),S.push(C.alphaMapUv),S.push(C.lightMapUv),S.push(C.aoMapUv),S.push(C.bumpMapUv),S.push(C.normalMapUv),S.push(C.displacementMapUv),S.push(C.emissiveMapUv),S.push(C.metalnessMapUv),S.push(C.roughnessMapUv),S.push(C.anisotropyMapUv),S.push(C.clearcoatMapUv),S.push(C.clearcoatNormalMapUv),S.push(C.clearcoatRoughnessMapUv),S.push(C.iridescenceMapUv),S.push(C.iridescenceThicknessMapUv),S.push(C.sheenColorMapUv),S.push(C.sheenRoughnessMapUv),S.push(C.specularMapUv),S.push(C.specularColorMapUv),S.push(C.specularIntensityMapUv),S.push(C.transmissionMapUv),S.push(C.thicknessMapUv),S.push(C.combine),S.push(C.fogExp2),S.push(C.sizeAttenuation),S.push(C.morphTargetsCount),S.push(C.morphAttributeCount),S.push(C.numDirLights),S.push(C.numPointLights),S.push(C.numSpotLights),S.push(C.numSpotLightMaps),S.push(C.numHemiLights),S.push(C.numRectAreaLights),S.push(C.numDirLightShadows),S.push(C.numPointLightShadows),S.push(C.numSpotLightShadows),S.push(C.numSpotLightShadowsWithMaps),S.push(C.numLightProbes),S.push(C.shadowMapType),S.push(C.toneMapping),S.push(C.numClippingPlanes),S.push(C.numClipIntersection),S.push(C.depthPacking)}function M(S,C){o.disableAll(),C.isWebGL2&&o.enable(0),C.supportsVertexTextures&&o.enable(1),C.instancing&&o.enable(2),C.instancingColor&&o.enable(3),C.instancingMorph&&o.enable(4),C.matcap&&o.enable(5),C.envMap&&o.enable(6),C.normalMapObjectSpace&&o.enable(7),C.normalMapTangentSpace&&o.enable(8),C.clearcoat&&o.enable(9),C.iridescence&&o.enable(10),C.alphaTest&&o.enable(11),C.vertexColors&&o.enable(12),C.vertexAlphas&&o.enable(13),C.vertexUv1s&&o.enable(14),C.vertexUv2s&&o.enable(15),C.vertexUv3s&&o.enable(16),C.vertexTangents&&o.enable(17),C.anisotropy&&o.enable(18),C.alphaHash&&o.enable(19),C.batching&&o.enable(20),S.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.skinning&&o.enable(4),C.morphTargets&&o.enable(5),C.morphNormals&&o.enable(6),C.morphColors&&o.enable(7),C.premultipliedAlpha&&o.enable(8),C.shadowMapEnabled&&o.enable(9),C.useLegacyLights&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.alphaToCoverage&&o.enable(20),S.push(o.mask)}function b(S){const C=y[S.type];let ne;if(C){const J=Wn[C];ne=_E.clone(J.uniforms)}else ne=S.uniforms;return ne}function R(S,C){let ne;for(let J=0,L=h.length;J<L;J++){const X=h[J];if(X.cacheKey===C){ne=X,++ne.usedTimes;break}}return ne===void 0&&(ne=new IA(t,C,S,a),h.push(ne)),ne}function w(S){if(--S.usedTimes===0){const C=h.indexOf(S);h[C]=h[h.length-1],h.pop(),S.destroy()}}function D(S){l.remove(S)}function $(){l.dispose()}return{getParameters:d,getProgramCacheKey:_,getUniforms:b,acquireProgram:R,releaseProgram:w,releaseShaderCache:D,programs:h,dispose:$}}function zA(){let t=new WeakMap;function e(a){let s=t.get(a);return s===void 0&&(s={},t.set(a,s)),s}function n(a){t.delete(a)}function i(a,s,o){t.get(a)[s]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function HA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function tm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function nm(){const t=[];let e=0;const n=[],i=[],r=[];function a(){e=0,n.length=0,i.length=0,r.length=0}function s(f,p,g,x,y,m){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:p,material:g,groupOrder:x,renderOrder:f.renderOrder,z:y,group:m},t[e]=d):(d.id=f.id,d.object=f,d.geometry=p,d.material=g,d.groupOrder=x,d.renderOrder=f.renderOrder,d.z=y,d.group=m),e++,d}function o(f,p,g,x,y,m){const d=s(f,p,g,x,y,m);g.transmission>0?i.push(d):g.transparent===!0?r.push(d):n.push(d)}function l(f,p,g,x,y,m){const d=s(f,p,g,x,y,m);g.transmission>0?i.unshift(d):g.transparent===!0?r.unshift(d):n.unshift(d)}function c(f,p){n.length>1&&n.sort(f||HA),i.length>1&&i.sort(p||tm),r.length>1&&r.sort(p||tm)}function h(){for(let f=e,p=t.length;f<p;f++){const g=t[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:a,push:o,unshift:l,finish:h,sort:c}}function GA(){let t=new WeakMap;function e(i,r){const a=t.get(i);let s;return a===void 0?(s=new nm,t.set(i,[s])):r>=a.length?(s=new nm,a.push(s)):s=a[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function VA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new B,color:new Ke};break;case"SpotLight":n={position:new B,direction:new B,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":n={color:new Ke,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function jA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let WA=0;function XA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function YA(t,e){const n=new VA,i=jA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new B);const a=new B,s=new yt,o=new yt;function l(h,f){let p=0,g=0,x=0;for(let ne=0;ne<9;ne++)r.probe[ne].set(0,0,0);let y=0,m=0,d=0,_=0,v=0,M=0,b=0,R=0,w=0,D=0,$=0;h.sort(XA);const S=f===!0?Math.PI:1;for(let ne=0,J=h.length;ne<J;ne++){const L=h[ne],X=L.color,W=L.intensity,q=L.distance,P=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)p+=X.r*W*S,g+=X.g*W*S,x+=X.b*W*S;else if(L.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(L.sh.coefficients[F],W);$++}else if(L.isDirectionalLight){const F=n.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity*S),L.castShadow){const V=L.shadow,K=i.get(L);K.shadowBias=V.bias,K.shadowNormalBias=V.normalBias,K.shadowRadius=V.radius,K.shadowMapSize=V.mapSize,r.directionalShadow[y]=K,r.directionalShadowMap[y]=P,r.directionalShadowMatrix[y]=L.shadow.matrix,M++}r.directional[y]=F,y++}else if(L.isSpotLight){const F=n.get(L);F.position.setFromMatrixPosition(L.matrixWorld),F.color.copy(X).multiplyScalar(W*S),F.distance=q,F.coneCos=Math.cos(L.angle),F.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),F.decay=L.decay,r.spot[d]=F;const V=L.shadow;if(L.map&&(r.spotLightMap[w]=L.map,w++,V.updateMatrices(L),L.castShadow&&D++),r.spotLightMatrix[d]=V.matrix,L.castShadow){const K=i.get(L);K.shadowBias=V.bias,K.shadowNormalBias=V.normalBias,K.shadowRadius=V.radius,K.shadowMapSize=V.mapSize,r.spotShadow[d]=K,r.spotShadowMap[d]=P,R++}d++}else if(L.isRectAreaLight){const F=n.get(L);F.color.copy(X).multiplyScalar(W),F.halfWidth.set(L.width*.5,0,0),F.halfHeight.set(0,L.height*.5,0),r.rectArea[_]=F,_++}else if(L.isPointLight){const F=n.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity*S),F.distance=L.distance,F.decay=L.decay,L.castShadow){const V=L.shadow,K=i.get(L);K.shadowBias=V.bias,K.shadowNormalBias=V.normalBias,K.shadowRadius=V.radius,K.shadowMapSize=V.mapSize,K.shadowCameraNear=V.camera.near,K.shadowCameraFar=V.camera.far,r.pointShadow[m]=K,r.pointShadowMap[m]=P,r.pointShadowMatrix[m]=L.shadow.matrix,b++}r.point[m]=F,m++}else if(L.isHemisphereLight){const F=n.get(L);F.skyColor.copy(L.color).multiplyScalar(W*S),F.groundColor.copy(L.groundColor).multiplyScalar(W*S),r.hemi[v]=F,v++}}_>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=p,r.ambient[1]=g,r.ambient[2]=x;const C=r.hash;(C.directionalLength!==y||C.pointLength!==m||C.spotLength!==d||C.rectAreaLength!==_||C.hemiLength!==v||C.numDirectionalShadows!==M||C.numPointShadows!==b||C.numSpotShadows!==R||C.numSpotMaps!==w||C.numLightProbes!==$)&&(r.directional.length=y,r.spot.length=d,r.rectArea.length=_,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=R+w-D,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=$,C.directionalLength=y,C.pointLength=m,C.spotLength=d,C.rectAreaLength=_,C.hemiLength=v,C.numDirectionalShadows=M,C.numPointShadows=b,C.numSpotShadows=R,C.numSpotMaps=w,C.numLightProbes=$,r.version=WA++)}function c(h,f){let p=0,g=0,x=0,y=0,m=0;const d=f.matrixWorldInverse;for(let _=0,v=h.length;_<v;_++){const M=h[_];if(M.isDirectionalLight){const b=r.directional[p];b.direction.setFromMatrixPosition(M.matrixWorld),a.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(d),p++}else if(M.isSpotLight){const b=r.spot[x];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(d),b.direction.setFromMatrixPosition(M.matrixWorld),a.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(d),x++}else if(M.isRectAreaLight){const b=r.rectArea[y];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(d),o.identity(),s.copy(M.matrixWorld),s.premultiply(d),o.extractRotation(s),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),y++}else if(M.isPointLight){const b=r.point[g];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(d),g++}else if(M.isHemisphereLight){const b=r.hemi[m];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:r}}function im(t,e){const n=new YA(t,e),i=[],r=[];function a(){i.length=0,r.length=0}function s(f){i.push(f)}function o(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:a,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:o}}function $A(t,e){let n=new WeakMap;function i(a,s=0){const o=n.get(a);let l;return o===void 0?(l=new im(t,e),n.set(a,[l])):s>=o.length?(l=new im(t,e),o.push(l)):l=o[s],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class qA extends Hs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=HS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class KA extends Hs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ZA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,QA=`uniform sampler2D shadow_pass;
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
}`;function JA(t,e,n){let i=new n_;const r=new $e,a=new $e,s=new Lt,o=new qA({depthPacking:GS}),l=new KA,c={},h=n.maxTextureSize,f={[Ki]:rn,[rn]:Ki,[si]:si},p=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:ZA,fragmentShader:QA}),g=p.clone();g.defines.HORIZONTAL_PASS=1;const x=new xi;x.setAttribute("position",new wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new di(x,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lv;let d=this.type;this.render=function(R,w,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const $=t.getRenderTarget(),S=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),ne=t.state;ne.setBlending(Wi),ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const J=d!==ii&&this.type===ii,L=d===ii&&this.type!==ii;for(let X=0,W=R.length;X<W;X++){const q=R[X],P=q.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;r.copy(P.mapSize);const F=P.getFrameExtents();if(r.multiply(F),a.copy(P.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(a.x=Math.floor(h/F.x),r.x=a.x*F.x,P.mapSize.x=a.x),r.y>h&&(a.y=Math.floor(h/F.y),r.y=a.y*F.y,P.mapSize.y=a.y)),P.map===null||J===!0||L===!0){const K=this.type!==ii?{minFilter:Wt,magFilter:Wt}:{};P.map!==null&&P.map.dispose(),P.map=new Pr(r.x,r.y,K),P.map.texture.name=q.name+".shadowMap",P.camera.updateProjectionMatrix()}t.setRenderTarget(P.map),t.clear();const V=P.getViewportCount();for(let K=0;K<V;K++){const se=P.getViewport(K);s.set(a.x*se.x,a.y*se.y,a.x*se.z,a.y*se.w),ne.viewport(s),P.updateMatrices(q,K),i=P.getFrustum(),M(w,D,P.camera,q,this.type)}P.isPointLightShadow!==!0&&this.type===ii&&_(P,D),P.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget($,S,C)};function _(R,w){const D=e.update(y);p.defines.VSM_SAMPLES!==R.blurSamples&&(p.defines.VSM_SAMPLES=R.blurSamples,g.defines.VSM_SAMPLES=R.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Pr(r.x,r.y)),p.uniforms.shadow_pass.value=R.map.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(w,null,D,p,y,null),g.uniforms.shadow_pass.value=R.mapPass.texture,g.uniforms.resolution.value=R.mapSize,g.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(w,null,D,g,y,null)}function v(R,w,D,$){let S=null;const C=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)S=C;else if(S=D.isPointLight===!0?l:o,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const ne=S.uuid,J=w.uuid;let L=c[ne];L===void 0&&(L={},c[ne]=L);let X=L[J];X===void 0&&(X=S.clone(),L[J]=X,w.addEventListener("dispose",b)),S=X}if(S.visible=w.visible,S.wireframe=w.wireframe,$===ii?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:f[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const ne=t.properties.get(S);ne.light=D}return S}function M(R,w,D,$,S){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===ii)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);const J=e.update(R),L=R.material;if(Array.isArray(L)){const X=J.groups;for(let W=0,q=X.length;W<q;W++){const P=X[W],F=L[P.materialIndex];if(F&&F.visible){const V=v(R,F,$,S);R.onBeforeShadow(t,R,w,D,J,V,P),t.renderBufferDirect(D,null,J,V,R,P),R.onAfterShadow(t,R,w,D,J,V,P)}}}else if(L.visible){const X=v(R,L,$,S);R.onBeforeShadow(t,R,w,D,J,X,null),t.renderBufferDirect(D,null,J,X,R,null),R.onAfterShadow(t,R,w,D,J,X,null)}}const ne=R.children;for(let J=0,L=ne.length;J<L;J++)M(ne[J],w,D,$,S)}function b(R){R.target.removeEventListener("dispose",b);for(const D in c){const $=c[D],S=R.target.uuid;S in $&&($[S].dispose(),delete $[S])}}}function e1(t,e,n){const i=n.isWebGL2;function r(){let N=!1;const ce=new Lt;let k=null;const ae=new Lt(0,0,0,0);return{setMask:function(he){k!==he&&!N&&(t.colorMask(he,he,he,he),k=he)},setLocked:function(he){N=he},setClear:function(he,je,Je,Pt,gn){gn===!0&&(he*=Pt,je*=Pt,Je*=Pt),ce.set(he,je,Je,Pt),ae.equals(ce)===!1&&(t.clearColor(he,je,Je,Pt),ae.copy(ce))},reset:function(){N=!1,k=null,ae.set(-1,0,0,0)}}}function a(){let N=!1,ce=null,k=null,ae=null;return{setTest:function(he){he?me(t.DEPTH_TEST):qe(t.DEPTH_TEST)},setMask:function(he){ce!==he&&!N&&(t.depthMask(he),ce=he)},setFunc:function(he){if(k!==he){switch(he){case vS:t.depthFunc(t.NEVER);break;case _S:t.depthFunc(t.ALWAYS);break;case xS:t.depthFunc(t.LESS);break;case vl:t.depthFunc(t.LEQUAL);break;case yS:t.depthFunc(t.EQUAL);break;case SS:t.depthFunc(t.GEQUAL);break;case ES:t.depthFunc(t.GREATER);break;case MS:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}k=he}},setLocked:function(he){N=he},setClear:function(he){ae!==he&&(t.clearDepth(he),ae=he)},reset:function(){N=!1,ce=null,k=null,ae=null}}}function s(){let N=!1,ce=null,k=null,ae=null,he=null,je=null,Je=null,Pt=null,gn=null;return{setTest:function(et){N||(et?me(t.STENCIL_TEST):qe(t.STENCIL_TEST))},setMask:function(et){ce!==et&&!N&&(t.stencilMask(et),ce=et)},setFunc:function(et,Gt,Hn){(k!==et||ae!==Gt||he!==Hn)&&(t.stencilFunc(et,Gt,Hn),k=et,ae=Gt,he=Hn)},setOp:function(et,Gt,Hn){(je!==et||Je!==Gt||Pt!==Hn)&&(t.stencilOp(et,Gt,Hn),je=et,Je=Gt,Pt=Hn)},setLocked:function(et){N=et},setClear:function(et){gn!==et&&(t.clearStencil(et),gn=et)},reset:function(){N=!1,ce=null,k=null,ae=null,he=null,je=null,Je=null,Pt=null,gn=null}}}const o=new r,l=new a,c=new s,h=new WeakMap,f=new WeakMap;let p={},g={},x=new WeakMap,y=[],m=null,d=!1,_=null,v=null,M=null,b=null,R=null,w=null,D=null,$=new Ke(0,0,0),S=0,C=!1,ne=null,J=null,L=null,X=null,W=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,F=0;const V=t.getParameter(t.VERSION);V.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(V)[1]),P=F>=1):V.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),P=F>=2);let K=null,se={};const Ae=t.getParameter(t.SCISSOR_BOX),H=t.getParameter(t.VIEWPORT),Z=new Lt().fromArray(Ae),ue=new Lt().fromArray(H);function Ee(N,ce,k,ae){const he=new Uint8Array(4),je=t.createTexture();t.bindTexture(N,je),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Je=0;Je<k;Je++)i&&(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)?t.texImage3D(ce,0,t.RGBA,1,1,ae,0,t.RGBA,t.UNSIGNED_BYTE,he):t.texImage2D(ce+Je,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,he);return je}const xe={};xe[t.TEXTURE_2D]=Ee(t.TEXTURE_2D,t.TEXTURE_2D,1),xe[t.TEXTURE_CUBE_MAP]=Ee(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(xe[t.TEXTURE_2D_ARRAY]=Ee(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),xe[t.TEXTURE_3D]=Ee(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),me(t.DEPTH_TEST),l.setFunc(vl),Oe(!1),He(Of),me(t.CULL_FACE),Te(Wi);function me(N){p[N]!==!0&&(t.enable(N),p[N]=!0)}function qe(N){p[N]!==!1&&(t.disable(N),p[N]=!1)}function Ce(N,ce){return g[N]!==ce?(t.bindFramebuffer(N,ce),g[N]=ce,i&&(N===t.DRAW_FRAMEBUFFER&&(g[t.FRAMEBUFFER]=ce),N===t.FRAMEBUFFER&&(g[t.DRAW_FRAMEBUFFER]=ce)),!0):!1}function I(N,ce){let k=y,ae=!1;if(N){k=x.get(ce),k===void 0&&(k=[],x.set(ce,k));const he=N.textures;if(k.length!==he.length||k[0]!==t.COLOR_ATTACHMENT0){for(let je=0,Je=he.length;je<Je;je++)k[je]=t.COLOR_ATTACHMENT0+je;k.length=he.length,ae=!0}}else k[0]!==t.BACK&&(k[0]=t.BACK,ae=!0);if(ae)if(n.isWebGL2)t.drawBuffers(k);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(k);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function bt(N){return m!==N?(t.useProgram(N),m=N,!0):!1}const Se={[pr]:t.FUNC_ADD,[nS]:t.FUNC_SUBTRACT,[iS]:t.FUNC_REVERSE_SUBTRACT};if(i)Se[zf]=t.MIN,Se[Hf]=t.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(Se[zf]=N.MIN_EXT,Se[Hf]=N.MAX_EXT)}const ze={[rS]:t.ZERO,[aS]:t.ONE,[sS]:t.SRC_COLOR,[ed]:t.SRC_ALPHA,[hS]:t.SRC_ALPHA_SATURATE,[uS]:t.DST_COLOR,[lS]:t.DST_ALPHA,[oS]:t.ONE_MINUS_SRC_COLOR,[td]:t.ONE_MINUS_SRC_ALPHA,[dS]:t.ONE_MINUS_DST_COLOR,[cS]:t.ONE_MINUS_DST_ALPHA,[fS]:t.CONSTANT_COLOR,[pS]:t.ONE_MINUS_CONSTANT_COLOR,[mS]:t.CONSTANT_ALPHA,[gS]:t.ONE_MINUS_CONSTANT_ALPHA};function Te(N,ce,k,ae,he,je,Je,Pt,gn,et){if(N===Wi){d===!0&&(qe(t.BLEND),d=!1);return}if(d===!1&&(me(t.BLEND),d=!0),N!==tS){if(N!==_||et!==C){if((v!==pr||R!==pr)&&(t.blendEquation(t.FUNC_ADD),v=pr,R=pr),et)switch(N){case _a:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ju:t.blendFunc(t.ONE,t.ONE);break;case kf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Bf:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case _a:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ju:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case kf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Bf:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}M=null,b=null,w=null,D=null,$.set(0,0,0),S=0,_=N,C=et}return}he=he||ce,je=je||k,Je=Je||ae,(ce!==v||he!==R)&&(t.blendEquationSeparate(Se[ce],Se[he]),v=ce,R=he),(k!==M||ae!==b||je!==w||Je!==D)&&(t.blendFuncSeparate(ze[k],ze[ae],ze[je],ze[Je]),M=k,b=ae,w=je,D=Je),(Pt.equals($)===!1||gn!==S)&&(t.blendColor(Pt.r,Pt.g,Pt.b,gn),$.copy(Pt),S=gn),_=N,C=!1}function We(N,ce){N.side===si?qe(t.CULL_FACE):me(t.CULL_FACE);let k=N.side===rn;ce&&(k=!k),Oe(k),N.blending===_a&&N.transparent===!1?Te(Wi):Te(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),o.setMask(N.colorWrite);const ae=N.stencilWrite;c.setTest(ae),ae&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),A(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?me(t.SAMPLE_ALPHA_TO_COVERAGE):qe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(N){ne!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),ne=N)}function He(N){N!==Qy?(me(t.CULL_FACE),N!==J&&(N===Of?t.cullFace(t.BACK):N===Jy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):qe(t.CULL_FACE),J=N}function ft(N){N!==L&&(P&&t.lineWidth(N),L=N)}function A(N,ce,k){N?(me(t.POLYGON_OFFSET_FILL),(X!==ce||W!==k)&&(t.polygonOffset(ce,k),X=ce,W=k)):qe(t.POLYGON_OFFSET_FILL)}function E(N){N?me(t.SCISSOR_TEST):qe(t.SCISSOR_TEST)}function j(N){N===void 0&&(N=t.TEXTURE0+q-1),K!==N&&(t.activeTexture(N),K=N)}function Y(N,ce,k){k===void 0&&(K===null?k=t.TEXTURE0+q-1:k=K);let ae=se[k];ae===void 0&&(ae={type:void 0,texture:void 0},se[k]=ae),(ae.type!==N||ae.texture!==ce)&&(K!==k&&(t.activeTexture(k),K=k),t.bindTexture(N,ce||xe[N]),ae.type=N,ae.texture=ce)}function te(){const N=se[K];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Q(){try{t.compressedTexImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Le(){try{t.compressedTexImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function we(){try{t.texSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function le(){try{t.texSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function de(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function De(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{t.texStorage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function gt(){try{t.texStorage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ge(){try{t.texImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ye(){try{t.texImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ge(N){Z.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),Z.copy(N))}function ve(N){ue.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),ue.copy(N))}function Xe(N,ce){let k=f.get(ce);k===void 0&&(k=new WeakMap,f.set(ce,k));let ae=k.get(N);ae===void 0&&(ae=t.getUniformBlockIndex(ce,N.name),k.set(N,ae))}function Pe(N,ce){const ae=f.get(ce).get(N);h.get(ce)!==ae&&(t.uniformBlockBinding(ce,ae,N.__bindingPointIndex),h.set(ce,ae))}function at(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),p={},K=null,se={},g={},x=new WeakMap,y=[],m=null,d=!1,_=null,v=null,M=null,b=null,R=null,w=null,D=null,$=new Ke(0,0,0),S=0,C=!1,ne=null,J=null,L=null,X=null,W=null,Z.set(0,0,t.canvas.width,t.canvas.height),ue.set(0,0,t.canvas.width,t.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:me,disable:qe,bindFramebuffer:Ce,drawBuffers:I,useProgram:bt,setBlending:Te,setMaterial:We,setFlipSided:Oe,setCullFace:He,setLineWidth:ft,setPolygonOffset:A,setScissorTest:E,activeTexture:j,bindTexture:Y,unbindTexture:te,compressedTexImage2D:Q,compressedTexImage3D:Le,texImage2D:Ge,texImage3D:ye,updateUBOMapping:Xe,uniformBlockBinding:Pe,texStorage2D:ie,texStorage3D:gt,texSubImage2D:we,texSubImage3D:le,compressedTexSubImage2D:de,compressedTexSubImage3D:De,scissor:ge,viewport:ve,reset:at}}function t1(t,e,n,i,r,a,s){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new $e,f=new WeakMap;let p;const g=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,E){return x?new OffscreenCanvas(A,E):El("canvas")}function m(A,E,j,Y){let te=1;const Q=ft(A);if((Q.width>Y||Q.height>Y)&&(te=Y/Math.max(Q.width,Q.height)),te<1||E===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Le=E?ld:Math.floor,we=Le(te*Q.width),le=Le(te*Q.height);p===void 0&&(p=y(we,le));const de=j?y(we,le):p;return de.width=we,de.height=le,de.getContext("2d").drawImage(A,0,0,we,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+we+"x"+le+")."),de}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),A;return A}function d(A){const E=ft(A);return vp(E.width)&&vp(E.height)}function _(A){return o?!1:A.wrapS!==In||A.wrapT!==In||A.minFilter!==Wt&&A.minFilter!==Kt}function v(A,E){return A.generateMipmaps&&E&&A.minFilter!==Wt&&A.minFilter!==Kt}function M(A){t.generateMipmap(A)}function b(A,E,j,Y,te=!1){if(o===!1)return E;if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Q=E;if(E===t.RED&&(j===t.FLOAT&&(Q=t.R32F),j===t.HALF_FLOAT&&(Q=t.R16F),j===t.UNSIGNED_BYTE&&(Q=t.R8)),E===t.RED_INTEGER&&(j===t.UNSIGNED_BYTE&&(Q=t.R8UI),j===t.UNSIGNED_SHORT&&(Q=t.R16UI),j===t.UNSIGNED_INT&&(Q=t.R32UI),j===t.BYTE&&(Q=t.R8I),j===t.SHORT&&(Q=t.R16I),j===t.INT&&(Q=t.R32I)),E===t.RG&&(j===t.FLOAT&&(Q=t.RG32F),j===t.HALF_FLOAT&&(Q=t.RG16F),j===t.UNSIGNED_BYTE&&(Q=t.RG8)),E===t.RG_INTEGER&&(j===t.UNSIGNED_BYTE&&(Q=t.RG8UI),j===t.UNSIGNED_SHORT&&(Q=t.RG16UI),j===t.UNSIGNED_INT&&(Q=t.RG32UI),j===t.BYTE&&(Q=t.RG8I),j===t.SHORT&&(Q=t.RG16I),j===t.INT&&(Q=t.RG32I)),E===t.RGBA){const Le=te?_l:Qe.getTransfer(Y);j===t.FLOAT&&(Q=t.RGBA32F),j===t.HALF_FLOAT&&(Q=t.RGBA16F),j===t.UNSIGNED_BYTE&&(Q=Le===it?t.SRGB8_ALPHA8:t.RGBA8),j===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),j===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function R(A,E,j){return v(A,j)===!0||A.isFramebufferTexture&&A.minFilter!==Wt&&A.minFilter!==Kt?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function w(A){return A===Wt||A===Gf||A===Ya?t.NEAREST:t.LINEAR}function D(A){const E=A.target;E.removeEventListener("dispose",D),S(E),E.isVideoTexture&&f.delete(E)}function $(A){const E=A.target;E.removeEventListener("dispose",$),ne(E)}function S(A){const E=i.get(A);if(E.__webglInit===void 0)return;const j=A.source,Y=g.get(j);if(Y){const te=Y[E.__cacheKey];te.usedTimes--,te.usedTimes===0&&C(A),Object.keys(Y).length===0&&g.delete(j)}i.remove(A)}function C(A){const E=i.get(A);t.deleteTexture(E.__webglTexture);const j=A.source,Y=g.get(j);delete Y[E.__cacheKey],s.memory.textures--}function ne(A){const E=i.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(E.__webglFramebuffer[Y]))for(let te=0;te<E.__webglFramebuffer[Y].length;te++)t.deleteFramebuffer(E.__webglFramebuffer[Y][te]);else t.deleteFramebuffer(E.__webglFramebuffer[Y]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[Y])}else{if(Array.isArray(E.__webglFramebuffer))for(let Y=0;Y<E.__webglFramebuffer.length;Y++)t.deleteFramebuffer(E.__webglFramebuffer[Y]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Y=0;Y<E.__webglColorRenderbuffer.length;Y++)E.__webglColorRenderbuffer[Y]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[Y]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const j=A.textures;for(let Y=0,te=j.length;Y<te;Y++){const Q=i.get(j[Y]);Q.__webglTexture&&(t.deleteTexture(Q.__webglTexture),s.memory.textures--),i.remove(j[Y])}i.remove(A)}let J=0;function L(){J=0}function X(){const A=J;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),J+=1,A}function W(A){const E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function q(A,E){const j=i.get(A);if(A.isVideoTexture&&Oe(A),A.isRenderTargetTexture===!1&&A.version>0&&j.__version!==A.version){const Y=A.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(j,A,E);return}}n.bindTexture(t.TEXTURE_2D,j.__webglTexture,t.TEXTURE0+E)}function P(A,E){const j=i.get(A);if(A.version>0&&j.__version!==A.version){ue(j,A,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,j.__webglTexture,t.TEXTURE0+E)}function F(A,E){const j=i.get(A);if(A.version>0&&j.__version!==A.version){ue(j,A,E);return}n.bindTexture(t.TEXTURE_3D,j.__webglTexture,t.TEXTURE0+E)}function V(A,E){const j=i.get(A);if(A.version>0&&j.__version!==A.version){Ee(j,A,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture,t.TEXTURE0+E)}const K={[rd]:t.REPEAT,[In]:t.CLAMP_TO_EDGE,[ad]:t.MIRRORED_REPEAT},se={[Wt]:t.NEAREST,[Gf]:t.NEAREST_MIPMAP_NEAREST,[Ya]:t.NEAREST_MIPMAP_LINEAR,[Kt]:t.LINEAR,[Mc]:t.LINEAR_MIPMAP_NEAREST,[xr]:t.LINEAR_MIPMAP_LINEAR},Ae={[WS]:t.NEVER,[ZS]:t.ALWAYS,[XS]:t.LESS,[Gv]:t.LEQUAL,[YS]:t.EQUAL,[KS]:t.GEQUAL,[$S]:t.GREATER,[qS]:t.NOTEQUAL};function H(A,E,j){if(E.type===oi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Kt||E.magFilter===Mc||E.magFilter===Ya||E.magFilter===xr||E.minFilter===Kt||E.minFilter===Mc||E.minFilter===Ya||E.minFilter===xr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),j?(t.texParameteri(A,t.TEXTURE_WRAP_S,K[E.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,K[E.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,K[E.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,se[E.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,se[E.minFilter])):(t.texParameteri(A,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(A,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(E.wrapS!==In||E.wrapT!==In)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(A,t.TEXTURE_MAG_FILTER,w(E.magFilter)),t.texParameteri(A,t.TEXTURE_MIN_FILTER,w(E.minFilter)),E.minFilter!==Wt&&E.minFilter!==Kt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,Ae[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Wt||E.minFilter!==Ya&&E.minFilter!==xr||E.type===oi&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===Ns&&e.has("OES_texture_half_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Z(A,E){let j=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",D));const Y=E.source;let te=g.get(Y);te===void 0&&(te={},g.set(Y,te));const Q=W(E);if(Q!==A.__cacheKey){te[Q]===void 0&&(te[Q]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,j=!0),te[Q].usedTimes++;const Le=te[A.__cacheKey];Le!==void 0&&(te[A.__cacheKey].usedTimes--,Le.usedTimes===0&&C(E)),A.__cacheKey=Q,A.__webglTexture=te[Q].texture}return j}function ue(A,E,j){let Y=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Y=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Y=t.TEXTURE_3D);const te=Z(A,E),Q=E.source;n.bindTexture(Y,A.__webglTexture,t.TEXTURE0+j);const Le=i.get(Q);if(Q.version!==Le.__version||te===!0){n.activeTexture(t.TEXTURE0+j);const we=Qe.getPrimaries(Qe.workingColorSpace),le=E.colorSpace===Ni?null:Qe.getPrimaries(E.colorSpace),de=E.colorSpace===Ni||we===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const De=_(E)&&d(E.image)===!1;let ie=m(E.image,De,!1,r.maxTextureSize);ie=He(E,ie);const gt=d(ie)||o,Ge=a.convert(E.format,E.colorSpace);let ye=a.convert(E.type),ge=b(E.internalFormat,Ge,ye,E.colorSpace,E.isVideoTexture);H(Y,E,gt);let ve;const Xe=E.mipmaps,Pe=o&&E.isVideoTexture!==!0&&ge!==Hv,at=Le.__version===void 0||te===!0,N=Q.dataReady,ce=R(E,ie,gt);if(E.isDepthTexture)ge=t.DEPTH_COMPONENT,o?E.type===oi?ge=t.DEPTH_COMPONENT32F:E.type===Ii?ge=t.DEPTH_COMPONENT24:E.type===Er?ge=t.DEPTH24_STENCIL8:ge=t.DEPTH_COMPONENT16:E.type===oi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Mr&&ge===t.DEPTH_COMPONENT&&E.type!==ch&&E.type!==Ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Ii,ye=a.convert(E.type)),E.format===ba&&ge===t.DEPTH_COMPONENT&&(ge=t.DEPTH_STENCIL,E.type!==Er&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Er,ye=a.convert(E.type))),at&&(Pe?n.texStorage2D(t.TEXTURE_2D,1,ge,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,ge,ie.width,ie.height,0,Ge,ye,null));else if(E.isDataTexture)if(Xe.length>0&&gt){Pe&&at&&n.texStorage2D(t.TEXTURE_2D,ce,ge,Xe[0].width,Xe[0].height);for(let k=0,ae=Xe.length;k<ae;k++)ve=Xe[k],Pe?N&&n.texSubImage2D(t.TEXTURE_2D,k,0,0,ve.width,ve.height,Ge,ye,ve.data):n.texImage2D(t.TEXTURE_2D,k,ge,ve.width,ve.height,0,Ge,ye,ve.data);E.generateMipmaps=!1}else Pe?(at&&n.texStorage2D(t.TEXTURE_2D,ce,ge,ie.width,ie.height),N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ie.width,ie.height,Ge,ye,ie.data)):n.texImage2D(t.TEXTURE_2D,0,ge,ie.width,ie.height,0,Ge,ye,ie.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Pe&&at&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,ge,Xe[0].width,Xe[0].height,ie.depth);for(let k=0,ae=Xe.length;k<ae;k++)ve=Xe[k],E.format!==Fn?Ge!==null?Pe?N&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,k,0,0,0,ve.width,ve.height,ie.depth,Ge,ve.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,k,ge,ve.width,ve.height,ie.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?N&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,k,0,0,0,ve.width,ve.height,ie.depth,Ge,ye,ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,k,ge,ve.width,ve.height,ie.depth,0,Ge,ye,ve.data)}else{Pe&&at&&n.texStorage2D(t.TEXTURE_2D,ce,ge,Xe[0].width,Xe[0].height);for(let k=0,ae=Xe.length;k<ae;k++)ve=Xe[k],E.format!==Fn?Ge!==null?Pe?N&&n.compressedTexSubImage2D(t.TEXTURE_2D,k,0,0,ve.width,ve.height,Ge,ve.data):n.compressedTexImage2D(t.TEXTURE_2D,k,ge,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?N&&n.texSubImage2D(t.TEXTURE_2D,k,0,0,ve.width,ve.height,Ge,ye,ve.data):n.texImage2D(t.TEXTURE_2D,k,ge,ve.width,ve.height,0,Ge,ye,ve.data)}else if(E.isDataArrayTexture)Pe?(at&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,ge,ie.width,ie.height,ie.depth),N&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Ge,ye,ie.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,ge,ie.width,ie.height,ie.depth,0,Ge,ye,ie.data);else if(E.isData3DTexture)Pe?(at&&n.texStorage3D(t.TEXTURE_3D,ce,ge,ie.width,ie.height,ie.depth),N&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Ge,ye,ie.data)):n.texImage3D(t.TEXTURE_3D,0,ge,ie.width,ie.height,ie.depth,0,Ge,ye,ie.data);else if(E.isFramebufferTexture){if(at)if(Pe)n.texStorage2D(t.TEXTURE_2D,ce,ge,ie.width,ie.height);else{let k=ie.width,ae=ie.height;for(let he=0;he<ce;he++)n.texImage2D(t.TEXTURE_2D,he,ge,k,ae,0,Ge,ye,null),k>>=1,ae>>=1}}else if(Xe.length>0&&gt){if(Pe&&at){const k=ft(Xe[0]);n.texStorage2D(t.TEXTURE_2D,ce,ge,k.width,k.height)}for(let k=0,ae=Xe.length;k<ae;k++)ve=Xe[k],Pe?N&&n.texSubImage2D(t.TEXTURE_2D,k,0,0,Ge,ye,ve):n.texImage2D(t.TEXTURE_2D,k,ge,Ge,ye,ve);E.generateMipmaps=!1}else if(Pe){if(at){const k=ft(ie);n.texStorage2D(t.TEXTURE_2D,ce,ge,k.width,k.height)}N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ge,ye,ie)}else n.texImage2D(t.TEXTURE_2D,0,ge,Ge,ye,ie);v(E,gt)&&M(Y),Le.__version=Q.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function Ee(A,E,j){if(E.image.length!==6)return;const Y=Z(A,E),te=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+j);const Q=i.get(te);if(te.version!==Q.__version||Y===!0){n.activeTexture(t.TEXTURE0+j);const Le=Qe.getPrimaries(Qe.workingColorSpace),we=E.colorSpace===Ni?null:Qe.getPrimaries(E.colorSpace),le=E.colorSpace===Ni||Le===we?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const de=E.isCompressedTexture||E.image[0].isCompressedTexture,De=E.image[0]&&E.image[0].isDataTexture,ie=[];for(let k=0;k<6;k++)!de&&!De?ie[k]=m(E.image[k],!1,!0,r.maxCubemapSize):ie[k]=De?E.image[k].image:E.image[k],ie[k]=He(E,ie[k]);const gt=ie[0],Ge=d(gt)||o,ye=a.convert(E.format,E.colorSpace),ge=a.convert(E.type),ve=b(E.internalFormat,ye,ge,E.colorSpace),Xe=o&&E.isVideoTexture!==!0,Pe=Q.__version===void 0||Y===!0,at=te.dataReady;let N=R(E,gt,Ge);H(t.TEXTURE_CUBE_MAP,E,Ge);let ce;if(de){Xe&&Pe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,N,ve,gt.width,gt.height);for(let k=0;k<6;k++){ce=ie[k].mipmaps;for(let ae=0;ae<ce.length;ae++){const he=ce[ae];E.format!==Fn?ye!==null?Xe?at&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,ae,0,0,he.width,he.height,ye,he.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,ae,ve,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?at&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,ae,0,0,he.width,he.height,ye,ge,he.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,ae,ve,he.width,he.height,0,ye,ge,he.data)}}}else{if(ce=E.mipmaps,Xe&&Pe){ce.length>0&&N++;const k=ft(ie[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,N,ve,k.width,k.height)}for(let k=0;k<6;k++)if(De){Xe?at&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,ie[k].width,ie[k].height,ye,ge,ie[k].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,ve,ie[k].width,ie[k].height,0,ye,ge,ie[k].data);for(let ae=0;ae<ce.length;ae++){const je=ce[ae].image[k].image;Xe?at&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,ae+1,0,0,je.width,je.height,ye,ge,je.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,ae+1,ve,je.width,je.height,0,ye,ge,je.data)}}else{Xe?at&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,ye,ge,ie[k]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,ve,ye,ge,ie[k]);for(let ae=0;ae<ce.length;ae++){const he=ce[ae];Xe?at&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,ae+1,0,0,ye,ge,he.image[k]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,ae+1,ve,ye,ge,he.image[k])}}}v(E,Ge)&&M(t.TEXTURE_CUBE_MAP),Q.__version=te.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function xe(A,E,j,Y,te,Q){const Le=a.convert(j.format,j.colorSpace),we=a.convert(j.type),le=b(j.internalFormat,Le,we,j.colorSpace);if(!i.get(E).__hasExternalTextures){const De=Math.max(1,E.width>>Q),ie=Math.max(1,E.height>>Q);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,Q,le,De,ie,E.depth,0,Le,we,null):n.texImage2D(te,Q,le,De,ie,0,Le,we,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),We(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Y,te,i.get(j).__webglTexture,0,Te(E)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Y,te,i.get(j).__webglTexture,Q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function me(A,E,j){if(t.bindRenderbuffer(t.RENDERBUFFER,A),E.depthBuffer&&!E.stencilBuffer){let Y=o===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(j||We(E)){const te=E.depthTexture;te&&te.isDepthTexture&&(te.type===oi?Y=t.DEPTH_COMPONENT32F:te.type===Ii&&(Y=t.DEPTH_COMPONENT24));const Q=Te(E);We(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Q,Y,E.width,E.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,Q,Y,E.width,E.height)}else t.renderbufferStorage(t.RENDERBUFFER,Y,E.width,E.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,A)}else if(E.depthBuffer&&E.stencilBuffer){const Y=Te(E);j&&We(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Y,t.DEPTH24_STENCIL8,E.width,E.height):We(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Y,t.DEPTH24_STENCIL8,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,A)}else{const Y=E.textures;for(let te=0;te<Y.length;te++){const Q=Y[te],Le=a.convert(Q.format,Q.colorSpace),we=a.convert(Q.type),le=b(Q.internalFormat,Le,we,Q.colorSpace),de=Te(E);j&&We(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,de,le,E.width,E.height):We(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,de,le,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,le,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function qe(A,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),q(E.depthTexture,0);const Y=i.get(E.depthTexture).__webglTexture,te=Te(E);if(E.depthTexture.format===Mr)We(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Y,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Y,0);else if(E.depthTexture.format===ba)We(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Y,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Ce(A){const E=i.get(A),j=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!E.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");qe(E.__webglFramebuffer,A)}else if(j){E.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[Y]),E.__webglDepthbuffer[Y]=t.createRenderbuffer(),me(E.__webglDepthbuffer[Y],A,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=t.createRenderbuffer(),me(E.__webglDepthbuffer,A,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function I(A,E,j){const Y=i.get(A);E!==void 0&&xe(Y.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),j!==void 0&&Ce(A)}function bt(A){const E=A.texture,j=i.get(A),Y=i.get(E);A.addEventListener("dispose",$);const te=A.textures,Q=A.isWebGLCubeRenderTarget===!0,Le=te.length>1,we=d(A)||o;if(Le||(Y.__webglTexture===void 0&&(Y.__webglTexture=t.createTexture()),Y.__version=E.version,s.memory.textures++),Q){j.__webglFramebuffer=[];for(let le=0;le<6;le++)if(o&&E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer[le]=[];for(let de=0;de<E.mipmaps.length;de++)j.__webglFramebuffer[le][de]=t.createFramebuffer()}else j.__webglFramebuffer[le]=t.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer=[];for(let le=0;le<E.mipmaps.length;le++)j.__webglFramebuffer[le]=t.createFramebuffer()}else j.__webglFramebuffer=t.createFramebuffer();if(Le)if(r.drawBuffers)for(let le=0,de=te.length;le<de;le++){const De=i.get(te[le]);De.__webglTexture===void 0&&(De.__webglTexture=t.createTexture(),s.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&We(A)===!1){j.__webglMultisampledFramebuffer=t.createFramebuffer(),j.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let le=0;le<te.length;le++){const de=te[le];j.__webglColorRenderbuffer[le]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,j.__webglColorRenderbuffer[le]);const De=a.convert(de.format,de.colorSpace),ie=a.convert(de.type),gt=b(de.internalFormat,De,ie,de.colorSpace,A.isXRRenderTarget===!0),Ge=Te(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ge,gt,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,j.__webglColorRenderbuffer[le])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(j.__webglDepthRenderbuffer=t.createRenderbuffer(),me(j.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture),H(t.TEXTURE_CUBE_MAP,E,we);for(let le=0;le<6;le++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let de=0;de<E.mipmaps.length;de++)xe(j.__webglFramebuffer[le][de],A,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,de);else xe(j.__webglFramebuffer[le],A,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);v(E,we)&&M(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Le){for(let le=0,de=te.length;le<de;le++){const De=te[le],ie=i.get(De);n.bindTexture(t.TEXTURE_2D,ie.__webglTexture),H(t.TEXTURE_2D,De,we),xe(j.__webglFramebuffer,A,De,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,0),v(De,we)&&M(t.TEXTURE_2D)}n.unbindTexture()}else{let le=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?le=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(le,Y.__webglTexture),H(le,E,we),o&&E.mipmaps&&E.mipmaps.length>0)for(let de=0;de<E.mipmaps.length;de++)xe(j.__webglFramebuffer[de],A,E,t.COLOR_ATTACHMENT0,le,de);else xe(j.__webglFramebuffer,A,E,t.COLOR_ATTACHMENT0,le,0);v(E,we)&&M(le),n.unbindTexture()}A.depthBuffer&&Ce(A)}function Se(A){const E=d(A)||o,j=A.textures;for(let Y=0,te=j.length;Y<te;Y++){const Q=j[Y];if(v(Q,E)){const Le=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,we=i.get(Q).__webglTexture;n.bindTexture(Le,we),M(Le),n.unbindTexture()}}}function ze(A){if(o&&A.samples>0&&We(A)===!1){const E=A.textures,j=A.width,Y=A.height;let te=t.COLOR_BUFFER_BIT;const Q=[],Le=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,we=i.get(A),le=E.length>1;if(le)for(let de=0;de<E.length;de++)n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let de=0;de<E.length;de++){Q.push(t.COLOR_ATTACHMENT0+de),A.depthBuffer&&Q.push(Le);const De=we.__ignoreDepthValues!==void 0?we.__ignoreDepthValues:!1;if(De===!1&&(A.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),le&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,we.__webglColorRenderbuffer[de]),De===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Le]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Le])),le){const ie=i.get(E[de]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ie,0)}t.blitFramebuffer(0,0,j,Y,0,0,j,Y,te,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Q)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),le)for(let de=0;de<E.length;de++){n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,we.__webglColorRenderbuffer[de]);const De=i.get(E[de]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,De,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}}function Te(A){return Math.min(r.maxSamples,A.samples)}function We(A){const E=i.get(A);return o&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Oe(A){const E=s.render.frame;f.get(A)!==E&&(f.set(A,E),A.update())}function He(A,E){const j=A.colorSpace,Y=A.format,te=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===sd||j!==tr&&j!==Ni&&(Qe.getTransfer(j)===it?o===!1?e.has("EXT_sRGB")===!0&&Y===Fn?(A.format=sd,A.minFilter=Kt,A.generateMipmaps=!1):E=jv.sRGBToLinear(E):(Y!==Fn||te!==Yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),E}function ft(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(h.width=A.naturalWidth||A.width,h.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(h.width=A.displayWidth,h.height=A.displayHeight):(h.width=A.width,h.height=A.height),h}this.allocateTextureUnit=X,this.resetTextureUnits=L,this.setTexture2D=q,this.setTexture2DArray=P,this.setTexture3D=F,this.setTextureCube=V,this.rebindTextures=I,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=We}function n1(t,e,n){const i=n.isWebGL2;function r(a,s=Ni){let o;const l=Qe.getTransfer(s);if(a===Yi)return t.UNSIGNED_BYTE;if(a===Fv)return t.UNSIGNED_SHORT_4_4_4_4;if(a===Ov)return t.UNSIGNED_SHORT_5_5_5_1;if(a===DS)return t.BYTE;if(a===US)return t.SHORT;if(a===ch)return t.UNSIGNED_SHORT;if(a===Iv)return t.INT;if(a===Ii)return t.UNSIGNED_INT;if(a===oi)return t.FLOAT;if(a===Ns)return i?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(a===IS)return t.ALPHA;if(a===Fn)return t.RGBA;if(a===FS)return t.LUMINANCE;if(a===OS)return t.LUMINANCE_ALPHA;if(a===Mr)return t.DEPTH_COMPONENT;if(a===ba)return t.DEPTH_STENCIL;if(a===sd)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(a===kS)return t.RED;if(a===kv)return t.RED_INTEGER;if(a===BS)return t.RG;if(a===Bv)return t.RG_INTEGER;if(a===zv)return t.RGBA_INTEGER;if(a===Tc||a===wc||a===Ac||a===Rc)if(l===it)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(a===Tc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===wc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Ac)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Rc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(a===Tc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===wc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Ac)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Rc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Vf||a===jf||a===Wf||a===Xf)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(a===Vf)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===jf)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Wf)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Xf)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Hv)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Yf||a===$f)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(a===Yf)return l===it?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(a===$f)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===qf||a===Kf||a===Zf||a===Qf||a===Jf||a===ep||a===tp||a===np||a===ip||a===rp||a===ap||a===sp||a===op||a===lp)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(a===qf)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Kf)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Zf)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Qf)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Jf)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===ep)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===tp)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===np)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===ip)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===rp)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===ap)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===sp)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===op)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===lp)return l===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Cc||a===cp||a===up)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(a===Cc)return l===it?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===cp)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===up)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===zS||a===dp||a===hp||a===fp)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(a===Cc)return o.COMPRESSED_RED_RGTC1_EXT;if(a===dp)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===hp)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===fp)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Er?i?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[a]!==void 0?t[a]:null}return{convert:r}}class i1 extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Po extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const r1={type:"move"};class tu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Po,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Po,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Po,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),d=this._getHandJoint(c,y);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],p=h.position.distanceTo(f.position),g=.02,x=.005;c.inputState.pinching&&p>g+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=g-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=n.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(r1)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Po;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const a1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,s1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class o1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new an,a=e.properties.get(r);a.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new Zi({extensions:{fragDepth:!0},vertexShader:a1,fragmentShader:s1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new di(new Vl(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class l1 extends Fa{constructor(e,n){super();const i=this;let r=null,a=1,s=null,o="local-floor",l=1,c=null,h=null,f=null,p=null,g=null,x=null;const y=new o1,m=n.getContextAttributes();let d=null,_=null;const v=[],M=[],b=new $e;let R=null;const w=new En;w.layers.enable(1),w.viewport=new Lt;const D=new En;D.layers.enable(2),D.viewport=new Lt;const $=[w,D],S=new i1;S.layers.enable(1),S.layers.enable(2);let C=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let Z=v[H];return Z===void 0&&(Z=new tu,v[H]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(H){let Z=v[H];return Z===void 0&&(Z=new tu,v[H]=Z),Z.getGripSpace()},this.getHand=function(H){let Z=v[H];return Z===void 0&&(Z=new tu,v[H]=Z),Z.getHandSpace()};function J(H){const Z=M.indexOf(H.inputSource);if(Z===-1)return;const ue=v[Z];ue!==void 0&&(ue.update(H.inputSource,H.frame,c||s),ue.dispatchEvent({type:H.type,data:H.inputSource}))}function L(){r.removeEventListener("select",J),r.removeEventListener("selectstart",J),r.removeEventListener("selectend",J),r.removeEventListener("squeeze",J),r.removeEventListener("squeezestart",J),r.removeEventListener("squeezeend",J),r.removeEventListener("end",L),r.removeEventListener("inputsourceschange",X);for(let H=0;H<v.length;H++){const Z=M[H];Z!==null&&(M[H]=null,v[H].disconnect(Z))}C=null,ne=null,y.reset(),e.setRenderTarget(d),g=null,p=null,f=null,r=null,_=null,Ae.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){a=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",J),r.addEventListener("selectstart",J),r.addEventListener("selectend",J),r.addEventListener("squeeze",J),r.addEventListener("squeezestart",J),r.addEventListener("squeezeend",J),r.addEventListener("end",L),r.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await n.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:r.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};g=new XRWebGLLayer(r,n,Z),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),_=new Pr(g.framebufferWidth,g.framebufferHeight,{format:Fn,type:Yi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Z=null,ue=null,Ee=null;m.depth&&(Ee=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Z=m.stencil?ba:Mr,ue=m.stencil?Er:Ii);const xe={colorFormat:n.RGBA8,depthFormat:Ee,scaleFactor:a};f=new XRWebGLBinding(r,n),p=f.createProjectionLayer(xe),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),_=new Pr(p.textureWidth,p.textureHeight,{format:Fn,type:Yi,depthTexture:new r_(p.textureWidth,p.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const me=e.properties.get(_);me.__ignoreDepthValues=p.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(o),Ae.setContext(r),Ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function X(H){for(let Z=0;Z<H.removed.length;Z++){const ue=H.removed[Z],Ee=M.indexOf(ue);Ee>=0&&(M[Ee]=null,v[Ee].disconnect(ue))}for(let Z=0;Z<H.added.length;Z++){const ue=H.added[Z];let Ee=M.indexOf(ue);if(Ee===-1){for(let me=0;me<v.length;me++)if(me>=M.length){M.push(ue),Ee=me;break}else if(M[me]===null){M[me]=ue,Ee=me;break}if(Ee===-1)break}const xe=v[Ee];xe&&xe.connect(ue)}}const W=new B,q=new B;function P(H,Z,ue){W.setFromMatrixPosition(Z.matrixWorld),q.setFromMatrixPosition(ue.matrixWorld);const Ee=W.distanceTo(q),xe=Z.projectionMatrix.elements,me=ue.projectionMatrix.elements,qe=xe[14]/(xe[10]-1),Ce=xe[14]/(xe[10]+1),I=(xe[9]+1)/xe[5],bt=(xe[9]-1)/xe[5],Se=(xe[8]-1)/xe[0],ze=(me[8]+1)/me[0],Te=qe*Se,We=qe*ze,Oe=Ee/(-Se+ze),He=Oe*-Se;Z.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(He),H.translateZ(Oe),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const ft=qe+Oe,A=Ce+Oe,E=Te-He,j=We+(Ee-He),Y=I*Ce/A*ft,te=bt*Ce/A*ft;H.projectionMatrix.makePerspective(E,j,Y,te,ft,A),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function F(H,Z){Z===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(Z.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;y.texture!==null&&(H.near=y.depthNear,H.far=y.depthFar),S.near=D.near=w.near=H.near,S.far=D.far=w.far=H.far,(C!==S.near||ne!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),C=S.near,ne=S.far,w.near=C,w.far=ne,D.near=C,D.far=ne,w.updateProjectionMatrix(),D.updateProjectionMatrix(),H.updateProjectionMatrix());const Z=H.parent,ue=S.cameras;F(S,Z);for(let Ee=0;Ee<ue.length;Ee++)F(ue[Ee],Z);ue.length===2?P(S,w,D):S.projectionMatrix.copy(w.projectionMatrix),V(H,S,Z)};function V(H,Z,ue){ue===null?H.matrix.copy(Z.matrixWorld):(H.matrix.copy(ue.matrixWorld),H.matrix.invert(),H.matrix.multiply(Z.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(Z.projectionMatrix),H.projectionMatrixInverse.copy(Z.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=od*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(p===null&&g===null))return l},this.setFoveation=function(H){l=H,p!==null&&(p.fixedFoveation=H),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=H)},this.hasDepthSensing=function(){return y.texture!==null};let K=null;function se(H,Z){if(h=Z.getViewerPose(c||s),x=Z,h!==null){const ue=h.views;g!==null&&(e.setRenderTargetFramebuffer(_,g.framebuffer),e.setRenderTarget(_));let Ee=!1;ue.length!==S.cameras.length&&(S.cameras.length=0,Ee=!0);for(let me=0;me<ue.length;me++){const qe=ue[me];let Ce=null;if(g!==null)Ce=g.getViewport(qe);else{const bt=f.getViewSubImage(p,qe);Ce=bt.viewport,me===0&&(e.setRenderTargetTextures(_,bt.colorTexture,p.ignoreDepthValues?void 0:bt.depthStencilTexture),e.setRenderTarget(_))}let I=$[me];I===void 0&&(I=new En,I.layers.enable(me),I.viewport=new Lt,$[me]=I),I.matrix.fromArray(qe.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(qe.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),me===0&&(S.matrix.copy(I.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Ee===!0&&S.cameras.push(I)}const xe=r.enabledFeatures;if(xe&&xe.includes("depth-sensing")){const me=f.getDepthInformation(ue[0]);me&&me.isValid&&me.texture&&y.init(e,me,r.renderState)}}for(let ue=0;ue<v.length;ue++){const Ee=M[ue],xe=v[ue];Ee!==null&&xe!==void 0&&xe.update(Ee,Z,c||s)}y.render(e,S),K&&K(H,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),x=null}const Ae=new i_;Ae.setAnimationLoop(se),this.setAnimationLoop=function(H){K=H},this.dispose=function(){}}}const cr=new vi,c1=new yt;function u1(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Jv(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,_,v,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?a(m,d):d.isMeshToonMaterial?(a(m,d),f(m,d)):d.isMeshPhongMaterial?(a(m,d),h(m,d)):d.isMeshStandardMaterial?(a(m,d),p(m,d),d.isMeshPhysicalMaterial&&g(m,d,M)):d.isMeshMatcapMaterial?(a(m,d),x(m,d)):d.isMeshDepthMaterial?a(m,d):d.isMeshDistanceMaterial?(a(m,d),y(m,d)):d.isMeshNormalMaterial?a(m,d):d.isLineBasicMaterial?(s(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,_,v):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function a(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===rn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===rn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const _=e.get(d),v=_.envMap,M=_.envMapRotation;if(v&&(m.envMap.value=v,cr.copy(M),cr.x*=-1,cr.y*=-1,cr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),m.envMapRotation.value.setFromMatrix4(c1.makeRotationFromEuler(cr)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const b=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*b,n(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function s(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,_,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=v*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function p(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function g(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===rn&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,d){d.matcap&&(m.matcap.value=d.matcap)}function y(m,d){const _=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function d1(t,e,n,i){let r={},a={},s=[];const o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,v){const M=v.program;i.uniformBlockBinding(_,M)}function c(_,v){let M=r[_.id];M===void 0&&(x(_),M=h(_),r[_.id]=M,_.addEventListener("dispose",m));const b=v.program;i.updateUBOMapping(_,b);const R=e.render.frame;a[_.id]!==R&&(p(_),a[_.id]=R)}function h(_){const v=f();_.__bindingPointIndex=v;const M=t.createBuffer(),b=_.__size,R=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,b,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,M),M}function f(){for(let _=0;_<o;_++)if(s.indexOf(_)===-1)return s.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(_){const v=r[_.id],M=_.uniforms,b=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let R=0,w=M.length;R<w;R++){const D=Array.isArray(M[R])?M[R]:[M[R]];for(let $=0,S=D.length;$<S;$++){const C=D[$];if(g(C,R,$,b)===!0){const ne=C.__offset,J=Array.isArray(C.value)?C.value:[C.value];let L=0;for(let X=0;X<J.length;X++){const W=J[X],q=y(W);typeof W=="number"||typeof W=="boolean"?(C.__data[0]=W,t.bufferSubData(t.UNIFORM_BUFFER,ne+L,C.__data)):W.isMatrix3?(C.__data[0]=W.elements[0],C.__data[1]=W.elements[1],C.__data[2]=W.elements[2],C.__data[3]=0,C.__data[4]=W.elements[3],C.__data[5]=W.elements[4],C.__data[6]=W.elements[5],C.__data[7]=0,C.__data[8]=W.elements[6],C.__data[9]=W.elements[7],C.__data[10]=W.elements[8],C.__data[11]=0):(W.toArray(C.__data,L),L+=q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,ne,C.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(_,v,M,b){const R=_.value,w=v+"_"+M;if(b[w]===void 0)return typeof R=="number"||typeof R=="boolean"?b[w]=R:b[w]=R.clone(),!0;{const D=b[w];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return b[w]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function x(_){const v=_.uniforms;let M=0;const b=16;for(let w=0,D=v.length;w<D;w++){const $=Array.isArray(v[w])?v[w]:[v[w]];for(let S=0,C=$.length;S<C;S++){const ne=$[S],J=Array.isArray(ne.value)?ne.value:[ne.value];for(let L=0,X=J.length;L<X;L++){const W=J[L],q=y(W),P=M%b;P!==0&&b-P<q.boundary&&(M+=b-P),ne.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=M,M+=q.storage}}}const R=M%b;return R>0&&(M+=b-R),_.__size=M,_.__cache={},this}function y(_){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function m(_){const v=_.target;v.removeEventListener("dispose",m);const M=s.indexOf(v.__bindingPointIndex);s.splice(M,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete a[v.id]}function d(){for(const _ in r)t.deleteBuffer(r[_]);s=[],r={},a={}}return{bind:l,update:c,dispose:d}}class u_{constructor(e={}){const{canvas:n=JS(),context:i=null,depth:r=!0,stencil:a=!0,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;i!==null?p=i.getContextAttributes().alpha:p=s;const g=new Uint32Array(4),x=new Int32Array(4);let y=null,m=null;const d=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jn,this._useLegacyLights=!1,this.toneMapping=Xi,this.toneMappingExposure=1;const v=this;let M=!1,b=0,R=0,w=null,D=-1,$=null;const S=new Lt,C=new Lt;let ne=null;const J=new Ke(0);let L=0,X=n.width,W=n.height,q=1,P=null,F=null;const V=new Lt(0,0,X,W),K=new Lt(0,0,X,W);let se=!1;const Ae=new n_;let H=!1,Z=!1,ue=null;const Ee=new yt,xe=new $e,me=new B,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ce(){return w===null?q:1}let I=i;function bt(T,U){for(let z=0;z<T.length;z++){const G=T[z],O=n.getContext(G,U);if(O!==null)return O}return null}try{const T={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${lh}`),n.addEventListener("webglcontextlost",at,!1),n.addEventListener("webglcontextrestored",N,!1),n.addEventListener("webglcontextcreationerror",ce,!1),I===null){const U=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&U.shift(),I=bt(U,T),I===null)throw bt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Se,ze,Te,We,Oe,He,ft,A,E,j,Y,te,Q,Le,we,le,de,De,ie,gt,Ge,ye,ge,ve;function Xe(){Se=new vw(I),ze=new uw(I,Se,e),Se.init(ze),ye=new n1(I,Se,ze),Te=new e1(I,Se,ze),We=new yw(I),Oe=new zA,He=new t1(I,Se,Te,Oe,ze,ye,We),ft=new hw(v),A=new gw(v),E=new wE(I,ze),ge=new lw(I,Se,E,ze),j=new _w(I,E,We,ge),Y=new Tw(I,j,E,We),ie=new Mw(I,ze,He),le=new dw(Oe),te=new BA(v,ft,A,Se,ze,ge,le),Q=new u1(v,Oe),Le=new GA,we=new $A(Se,ze),De=new ow(v,ft,A,Te,Y,p,l),de=new JA(v,Y,ze),ve=new d1(I,We,ze,Te),gt=new cw(I,Se,We,ze),Ge=new xw(I,Se,We,ze),We.programs=te.programs,v.capabilities=ze,v.extensions=Se,v.properties=Oe,v.renderLists=Le,v.shadowMap=de,v.state=Te,v.info=We}Xe();const Pe=new l1(v,I);this.xr=Pe,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const T=Se.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Se.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(T){T!==void 0&&(q=T,this.setSize(X,W,!1))},this.getSize=function(T){return T.set(X,W)},this.setSize=function(T,U,z=!0){if(Pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=T,W=U,n.width=Math.floor(T*q),n.height=Math.floor(U*q),z===!0&&(n.style.width=T+"px",n.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(X*q,W*q).floor()},this.setDrawingBufferSize=function(T,U,z){X=T,W=U,q=z,n.width=Math.floor(T*z),n.height=Math.floor(U*z),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(S)},this.getViewport=function(T){return T.copy(V)},this.setViewport=function(T,U,z,G){T.isVector4?V.set(T.x,T.y,T.z,T.w):V.set(T,U,z,G),Te.viewport(S.copy(V).multiplyScalar(q).round())},this.getScissor=function(T){return T.copy(K)},this.setScissor=function(T,U,z,G){T.isVector4?K.set(T.x,T.y,T.z,T.w):K.set(T,U,z,G),Te.scissor(C.copy(K).multiplyScalar(q).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(T){Te.setScissorTest(se=T)},this.setOpaqueSort=function(T){P=T},this.setTransparentSort=function(T){F=T},this.getClearColor=function(T){return T.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(T=!0,U=!0,z=!0){let G=0;if(T){let O=!1;if(w!==null){const fe=w.texture.format;O=fe===zv||fe===Bv||fe===kv}if(O){const fe=w.texture.type,_e=fe===Yi||fe===Ii||fe===ch||fe===Er||fe===Fv||fe===Ov,Me=De.getClearColor(),Re=De.getClearAlpha(),ke=Me.r,be=Me.g,Ne=Me.b;_e?(g[0]=ke,g[1]=be,g[2]=Ne,g[3]=Re,I.clearBufferuiv(I.COLOR,0,g)):(x[0]=ke,x[1]=be,x[2]=Ne,x[3]=Re,I.clearBufferiv(I.COLOR,0,x))}else G|=I.COLOR_BUFFER_BIT}U&&(G|=I.DEPTH_BUFFER_BIT),z&&(G|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",at,!1),n.removeEventListener("webglcontextrestored",N,!1),n.removeEventListener("webglcontextcreationerror",ce,!1),Le.dispose(),we.dispose(),Oe.dispose(),ft.dispose(),A.dispose(),Y.dispose(),ge.dispose(),ve.dispose(),te.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",gn),Pe.removeEventListener("sessionend",et),ue&&(ue.dispose(),ue=null),Gt.stop()};function at(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const T=We.autoReset,U=de.enabled,z=de.autoUpdate,G=de.needsUpdate,O=de.type;Xe(),We.autoReset=T,de.enabled=U,de.autoUpdate=z,de.needsUpdate=G,de.type=O}function ce(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function k(T){const U=T.target;U.removeEventListener("dispose",k),ae(U)}function ae(T){he(T),Oe.remove(T)}function he(T){const U=Oe.get(T).programs;U!==void 0&&(U.forEach(function(z){te.releaseProgram(z)}),T.isShaderMaterial&&te.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,z,G,O,fe){U===null&&(U=qe);const _e=O.isMesh&&O.matrixWorld.determinant()<0,Me=f_(T,U,z,G,O);Te.setMaterial(G,_e);let Re=z.index,ke=1;if(G.wireframe===!0){if(Re=j.getWireframeAttribute(z),Re===void 0)return;ke=2}const be=z.drawRange,Ne=z.attributes.position;let pt=be.start*ke,on=(be.start+be.count)*ke;fe!==null&&(pt=Math.max(pt,fe.start*ke),on=Math.min(on,(fe.start+fe.count)*ke)),Re!==null?(pt=Math.max(pt,0),on=Math.min(on,Re.count)):Ne!=null&&(pt=Math.max(pt,0),on=Math.min(on,Ne.count));const wt=on-pt;if(wt<0||wt===1/0)return;ge.setup(O,G,Me,z,Re);let Kn,lt=gt;if(Re!==null&&(Kn=E.get(Re),lt=Ge,lt.setIndex(Kn)),O.isMesh)G.wireframe===!0?(Te.setLineWidth(G.wireframeLinewidth*Ce()),lt.setMode(I.LINES)):lt.setMode(I.TRIANGLES);else if(O.isLine){let Ue=G.linewidth;Ue===void 0&&(Ue=1),Te.setLineWidth(Ue*Ce()),O.isLineSegments?lt.setMode(I.LINES):O.isLineLoop?lt.setMode(I.LINE_LOOP):lt.setMode(I.LINE_STRIP)}else O.isPoints?lt.setMode(I.POINTS):O.isSprite&&lt.setMode(I.TRIANGLES);if(O.isBatchedMesh)lt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)lt.renderInstances(pt,wt,O.count);else if(z.isInstancedBufferGeometry){const Ue=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Wl=Math.min(z.instanceCount,Ue);lt.renderInstances(pt,wt,Wl)}else lt.render(pt,wt)};function je(T,U,z){T.transparent===!0&&T.side===si&&T.forceSinglePass===!1?(T.side=rn,T.needsUpdate=!0,js(T,U,z),T.side=Ki,T.needsUpdate=!0,js(T,U,z),T.side=si):js(T,U,z)}this.compile=function(T,U,z=null){z===null&&(z=T),m=we.get(z),m.init(),_.push(m),z.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),T!==z&&T.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights(v._useLegacyLights);const G=new Set;return T.traverse(function(O){const fe=O.material;if(fe)if(Array.isArray(fe))for(let _e=0;_e<fe.length;_e++){const Me=fe[_e];je(Me,z,O),G.add(Me)}else je(fe,z,O),G.add(fe)}),_.pop(),m=null,G},this.compileAsync=function(T,U,z=null){const G=this.compile(T,U,z);return new Promise(O=>{function fe(){if(G.forEach(function(_e){Oe.get(_e).currentProgram.isReady()&&G.delete(_e)}),G.size===0){O(T);return}setTimeout(fe,10)}Se.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Je=null;function Pt(T){Je&&Je(T)}function gn(){Gt.stop()}function et(){Gt.start()}const Gt=new i_;Gt.setAnimationLoop(Pt),typeof self<"u"&&Gt.setContext(self),this.setAnimationLoop=function(T){Je=T,Pe.setAnimationLoop(T),T===null?Gt.stop():Gt.start()},Pe.addEventListener("sessionstart",gn),Pe.addEventListener("sessionend",et),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(U),U=Pe.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,U,w),m=we.get(T,_.length),m.init(),_.push(m),Ee.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ae.setFromProjectionMatrix(Ee),Z=this.localClippingEnabled,H=le.init(this.clippingPlanes,Z),y=Le.get(T,d.length),y.init(),d.push(y),Hn(T,U,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(P,F),this.info.render.frame++,H===!0&&le.beginShadows();const z=m.state.shadowsArray;if(de.render(z,T,U),H===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Pe.enabled===!1||Pe.isPresenting===!1||Pe.hasDepthSensing()===!1)&&De.render(y,T),m.setupLights(v._useLegacyLights),U.isArrayCamera){const G=U.cameras;for(let O=0,fe=G.length;O<fe;O++){const _e=G[O];hh(y,T,_e,_e.viewport)}}else hh(y,T,U);w!==null&&(He.updateMultisampleRenderTarget(w),He.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(v,T,U),ge.resetDefaultState(),D=-1,$=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,d.pop(),d.length>0?y=d[d.length-1]:y=null};function Hn(T,U,z,G){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ae.intersectsSprite(T)){G&&me.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ee);const _e=Y.update(T),Me=T.material;Me.visible&&y.push(T,_e,Me,z,me.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ae.intersectsObject(T))){const _e=Y.update(T),Me=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),me.copy(T.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),me.copy(_e.boundingSphere.center)),me.applyMatrix4(T.matrixWorld).applyMatrix4(Ee)),Array.isArray(Me)){const Re=_e.groups;for(let ke=0,be=Re.length;ke<be;ke++){const Ne=Re[ke],pt=Me[Ne.materialIndex];pt&&pt.visible&&y.push(T,_e,pt,z,me.z,Ne)}}else Me.visible&&y.push(T,_e,Me,z,me.z,null)}}const fe=T.children;for(let _e=0,Me=fe.length;_e<Me;_e++)Hn(fe[_e],U,z,G)}function hh(T,U,z,G){const O=T.opaque,fe=T.transmissive,_e=T.transparent;m.setupLightsView(z),H===!0&&le.setGlobalState(v.clippingPlanes,z),fe.length>0&&h_(O,fe,U,z),G&&Te.viewport(S.copy(G)),O.length>0&&Vs(O,U,z),fe.length>0&&Vs(fe,U,z),_e.length>0&&Vs(_e,U,z),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function h_(T,U,z,G){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;const fe=ze.isWebGL2;ue===null&&(ue=new Pr(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?Ns:Yi,minFilter:xr,samples:fe?4:0})),v.getDrawingBufferSize(xe),fe?ue.setSize(xe.x,xe.y):ue.setSize(ld(xe.x),ld(xe.y));const _e=v.getRenderTarget();v.setRenderTarget(ue),v.getClearColor(J),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();const Me=v.toneMapping;v.toneMapping=Xi,Vs(T,z,G),He.updateMultisampleRenderTarget(ue),He.updateRenderTargetMipmap(ue);let Re=!1;for(let ke=0,be=U.length;ke<be;ke++){const Ne=U[ke],pt=Ne.object,on=Ne.geometry,wt=Ne.material,Kn=Ne.group;if(wt.side===si&&pt.layers.test(G.layers)){const lt=wt.side;wt.side=rn,wt.needsUpdate=!0,fh(pt,z,G,on,wt,Kn),wt.side=lt,wt.needsUpdate=!0,Re=!0}}Re===!0&&(He.updateMultisampleRenderTarget(ue),He.updateRenderTargetMipmap(ue)),v.setRenderTarget(_e),v.setClearColor(J,L),v.toneMapping=Me}function Vs(T,U,z){const G=U.isScene===!0?U.overrideMaterial:null;for(let O=0,fe=T.length;O<fe;O++){const _e=T[O],Me=_e.object,Re=_e.geometry,ke=G===null?_e.material:G,be=_e.group;Me.layers.test(z.layers)&&fh(Me,U,z,Re,ke,be)}}function fh(T,U,z,G,O,fe){T.onBeforeRender(v,U,z,G,O,fe),T.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),O.onBeforeRender(v,U,z,G,T,fe),O.transparent===!0&&O.side===si&&O.forceSinglePass===!1?(O.side=rn,O.needsUpdate=!0,v.renderBufferDirect(z,U,G,O,T,fe),O.side=Ki,O.needsUpdate=!0,v.renderBufferDirect(z,U,G,O,T,fe),O.side=si):v.renderBufferDirect(z,U,G,O,T,fe),T.onAfterRender(v,U,z,G,O,fe)}function js(T,U,z){U.isScene!==!0&&(U=qe);const G=Oe.get(T),O=m.state.lights,fe=m.state.shadowsArray,_e=O.state.version,Me=te.getParameters(T,O.state,fe,U,z),Re=te.getProgramCacheKey(Me);let ke=G.programs;G.environment=T.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(T.isMeshStandardMaterial?A:ft).get(T.envMap||G.environment),G.envMapRotation=G.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,ke===void 0&&(T.addEventListener("dispose",k),ke=new Map,G.programs=ke);let be=ke.get(Re);if(be!==void 0){if(G.currentProgram===be&&G.lightsStateVersion===_e)return mh(T,Me),be}else Me.uniforms=te.getUniforms(T),T.onBuild(z,Me,v),T.onBeforeCompile(Me,v),be=te.acquireProgram(Me,Re),ke.set(Re,be),G.uniforms=Me.uniforms;const Ne=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ne.clippingPlanes=le.uniform),mh(T,Me),G.needsLights=m_(T),G.lightsStateVersion=_e,G.needsLights&&(Ne.ambientLightColor.value=O.state.ambient,Ne.lightProbe.value=O.state.probe,Ne.directionalLights.value=O.state.directional,Ne.directionalLightShadows.value=O.state.directionalShadow,Ne.spotLights.value=O.state.spot,Ne.spotLightShadows.value=O.state.spotShadow,Ne.rectAreaLights.value=O.state.rectArea,Ne.ltc_1.value=O.state.rectAreaLTC1,Ne.ltc_2.value=O.state.rectAreaLTC2,Ne.pointLights.value=O.state.point,Ne.pointLightShadows.value=O.state.pointShadow,Ne.hemisphereLights.value=O.state.hemi,Ne.directionalShadowMap.value=O.state.directionalShadowMap,Ne.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ne.spotShadowMap.value=O.state.spotShadowMap,Ne.spotLightMatrix.value=O.state.spotLightMatrix,Ne.spotLightMap.value=O.state.spotLightMap,Ne.pointShadowMap.value=O.state.pointShadowMap,Ne.pointShadowMatrix.value=O.state.pointShadowMatrix),G.currentProgram=be,G.uniformsList=null,be}function ph(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=Wo.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function mh(T,U){const z=Oe.get(T);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function f_(T,U,z,G,O){U.isScene!==!0&&(U=qe),He.resetTextureUnits();const fe=U.fog,_e=G.isMeshStandardMaterial?U.environment:null,Me=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:tr,Re=(G.isMeshStandardMaterial?A:ft).get(G.envMap||_e),ke=G.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,be=!!z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ne=!!z.morphAttributes.position,pt=!!z.morphAttributes.normal,on=!!z.morphAttributes.color;let wt=Xi;G.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(wt=v.toneMapping);const Kn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,lt=Kn!==void 0?Kn.length:0,Ue=Oe.get(G),Wl=m.state.lights;if(H===!0&&(Z===!0||T!==$)){const vn=T===$&&G.id===D;le.setState(G,T,vn)}let st=!1;G.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==Wl.state.version||Ue.outputColorSpace!==Me||O.isBatchedMesh&&Ue.batching===!1||!O.isBatchedMesh&&Ue.batching===!0||O.isInstancedMesh&&Ue.instancing===!1||!O.isInstancedMesh&&Ue.instancing===!0||O.isSkinnedMesh&&Ue.skinning===!1||!O.isSkinnedMesh&&Ue.skinning===!0||O.isInstancedMesh&&Ue.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ue.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ue.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ue.instancingMorph===!1&&O.morphTexture!==null||Ue.envMap!==Re||G.fog===!0&&Ue.fog!==fe||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==le.numPlanes||Ue.numIntersection!==le.numIntersection)||Ue.vertexAlphas!==ke||Ue.vertexTangents!==be||Ue.morphTargets!==Ne||Ue.morphNormals!==pt||Ue.morphColors!==on||Ue.toneMapping!==wt||ze.isWebGL2===!0&&Ue.morphTargetsCount!==lt)&&(st=!0):(st=!0,Ue.__version=G.version);let nr=Ue.currentProgram;st===!0&&(nr=js(G,U,O));let gh=!1,ka=!1,Xl=!1;const It=nr.getUniforms(),ir=Ue.uniforms;if(Te.useProgram(nr.program)&&(gh=!0,ka=!0,Xl=!0),G.id!==D&&(D=G.id,ka=!0),gh||$!==T){It.setValue(I,"projectionMatrix",T.projectionMatrix),It.setValue(I,"viewMatrix",T.matrixWorldInverse);const vn=It.map.cameraPosition;vn!==void 0&&vn.setValue(I,me.setFromMatrixPosition(T.matrixWorld)),ze.logarithmicDepthBuffer&&It.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&It.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),$!==T&&($=T,ka=!0,Xl=!0)}if(O.isSkinnedMesh){It.setOptional(I,O,"bindMatrix"),It.setOptional(I,O,"bindMatrixInverse");const vn=O.skeleton;vn&&(ze.floatVertexTextures?(vn.boneTexture===null&&vn.computeBoneTexture(),It.setValue(I,"boneTexture",vn.boneTexture,He)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}O.isBatchedMesh&&(It.setOptional(I,O,"batchingTexture"),It.setValue(I,"batchingTexture",O._matricesTexture,He));const Yl=z.morphAttributes;if((Yl.position!==void 0||Yl.normal!==void 0||Yl.color!==void 0&&ze.isWebGL2===!0)&&ie.update(O,z,nr),(ka||Ue.receiveShadow!==O.receiveShadow)&&(Ue.receiveShadow=O.receiveShadow,It.setValue(I,"receiveShadow",O.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(ir.envMap.value=Re,ir.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),ka&&(It.setValue(I,"toneMappingExposure",v.toneMappingExposure),Ue.needsLights&&p_(ir,Xl),fe&&G.fog===!0&&Q.refreshFogUniforms(ir,fe),Q.refreshMaterialUniforms(ir,G,q,W,ue),Wo.upload(I,ph(Ue),ir,He)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Wo.upload(I,ph(Ue),ir,He),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&It.setValue(I,"center",O.center),It.setValue(I,"modelViewMatrix",O.modelViewMatrix),It.setValue(I,"normalMatrix",O.normalMatrix),It.setValue(I,"modelMatrix",O.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const vn=G.uniformsGroups;for(let $l=0,g_=vn.length;$l<g_;$l++)if(ze.isWebGL2){const vh=vn[$l];ve.update(vh,nr),ve.bind(vh,nr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return nr}function p_(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function m_(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,U,z){Oe.get(T.texture).__webglTexture=U,Oe.get(T.depthTexture).__webglTexture=z;const G=Oe.get(T);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=z===void 0,G.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,U){const z=Oe.get(T);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,z=0){w=T,b=U,R=z;let G=!0,O=null,fe=!1,_e=!1;if(T){const Re=Oe.get(T);Re.__useDefaultFramebuffer!==void 0?(Te.bindFramebuffer(I.FRAMEBUFFER,null),G=!1):Re.__webglFramebuffer===void 0?He.setupRenderTarget(T):Re.__hasExternalTextures&&He.rebindTextures(T,Oe.get(T.texture).__webglTexture,Oe.get(T.depthTexture).__webglTexture);const ke=T.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(_e=!0);const be=Oe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(be[U])?O=be[U][z]:O=be[U],fe=!0):ze.isWebGL2&&T.samples>0&&He.useMultisampledRTT(T)===!1?O=Oe.get(T).__webglMultisampledFramebuffer:Array.isArray(be)?O=be[z]:O=be,S.copy(T.viewport),C.copy(T.scissor),ne=T.scissorTest}else S.copy(V).multiplyScalar(q).floor(),C.copy(K).multiplyScalar(q).floor(),ne=se;if(Te.bindFramebuffer(I.FRAMEBUFFER,O)&&ze.drawBuffers&&G&&Te.drawBuffers(T,O),Te.viewport(S),Te.scissor(C),Te.setScissorTest(ne),fe){const Re=Oe.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,Re.__webglTexture,z)}else if(_e){const Re=Oe.get(T.texture),ke=U||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Re.__webglTexture,z||0,ke)}D=-1},this.readRenderTargetPixels=function(T,U,z,G,O,fe,_e){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Oe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_e!==void 0&&(Me=Me[_e]),Me){Te.bindFramebuffer(I.FRAMEBUFFER,Me);try{const Re=T.texture,ke=Re.format,be=Re.type;if(ke!==Fn&&ye.convert(ke)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ne=be===Ns&&(Se.has("EXT_color_buffer_half_float")||ze.isWebGL2&&Se.has("EXT_color_buffer_float"));if(be!==Yi&&ye.convert(be)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(be===oi&&(ze.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!Ne){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-G&&z>=0&&z<=T.height-O&&I.readPixels(U,z,G,O,ye.convert(ke),ye.convert(be),fe)}finally{const Re=w!==null?Oe.get(w).__webglFramebuffer:null;Te.bindFramebuffer(I.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(T,U,z=0){const G=Math.pow(2,-z),O=Math.floor(U.image.width*G),fe=Math.floor(U.image.height*G);He.setTexture2D(U,0),I.copyTexSubImage2D(I.TEXTURE_2D,z,0,0,T.x,T.y,O,fe),Te.unbindTexture()},this.copyTextureToTexture=function(T,U,z,G=0){const O=U.image.width,fe=U.image.height,_e=ye.convert(z.format),Me=ye.convert(z.type);He.setTexture2D(z,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,z.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,z.unpackAlignment),U.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,G,T.x,T.y,O,fe,_e,Me,U.image.data):U.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,G,T.x,T.y,U.mipmaps[0].width,U.mipmaps[0].height,_e,U.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,G,T.x,T.y,_e,Me,U.image),G===0&&z.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Te.unbindTexture()},this.copyTextureToTexture3D=function(T,U,z,G,O=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const fe=Math.round(T.max.x-T.min.x),_e=Math.round(T.max.y-T.min.y),Me=T.max.z-T.min.z+1,Re=ye.convert(G.format),ke=ye.convert(G.type);let be;if(G.isData3DTexture)He.setTexture3D(G,0),be=I.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)He.setTexture2DArray(G,0),be=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,G.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,G.unpackAlignment);const Ne=I.getParameter(I.UNPACK_ROW_LENGTH),pt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),on=I.getParameter(I.UNPACK_SKIP_PIXELS),wt=I.getParameter(I.UNPACK_SKIP_ROWS),Kn=I.getParameter(I.UNPACK_SKIP_IMAGES),lt=z.isCompressedTexture?z.mipmaps[O]:z.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,lt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,lt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,T.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,T.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,T.min.z),z.isDataTexture||z.isData3DTexture?I.texSubImage3D(be,O,U.x,U.y,U.z,fe,_e,Me,Re,ke,lt.data):G.isCompressedArrayTexture?I.compressedTexSubImage3D(be,O,U.x,U.y,U.z,fe,_e,Me,Re,lt.data):I.texSubImage3D(be,O,U.x,U.y,U.z,fe,_e,Me,Re,ke,lt),I.pixelStorei(I.UNPACK_ROW_LENGTH,Ne),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,pt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,on),I.pixelStorei(I.UNPACK_SKIP_ROWS,wt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Kn),O===0&&G.generateMipmaps&&I.generateMipmap(be),Te.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?He.setTextureCube(T,0):T.isData3DTexture?He.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?He.setTexture2DArray(T,0):He.setTexture2D(T,0),Te.unbindTexture()},this.resetState=function(){b=0,R=0,w=null,Te.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===uh?"display-p3":"srgb",n.unpackColorSpace=Qe.workingColorSpace===Hl?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class h1 extends u_{}h1.prototype.isWebGL1Renderer=!0;class f1 extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vi,this.environmentRotation=new vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class d_ extends Hs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const rm=new yt,ud=new Yv,No=new Gl,Lo=new B;class p1 extends sn{constructor(e=new xi,n=new d_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),No.copy(i.boundingSphere),No.applyMatrix4(r),No.radius+=a,e.ray.intersectsSphere(No)===!1)return;rm.copy(r).invert(),ud.copy(e.ray).applyMatrix4(rm);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const p=Math.max(0,s.start),g=Math.min(c.count,s.start+s.count);for(let x=p,y=g;x<y;x++){const m=c.getX(x);Lo.fromBufferAttribute(f,m),am(Lo,m,l,r,e,n,this)}}else{const p=Math.max(0,s.start),g=Math.min(f.count,s.start+s.count);for(let x=p,y=g;x<y;x++)Lo.fromBufferAttribute(f,x),am(Lo,x,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function am(t,e,n,i,r,a,s){const o=ud.distanceSqToPoint(t);if(o<n){const l=new B;ud.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:s})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lh);function m1(){const t=re.useRef(null);return re.useEffect(()=>{if(!t.current)return;const e=t.current,n=new f1,i=new En(75,window.innerWidth/window.innerHeight,.1,1e3);i.position.z=30;const r=new u_({canvas:e,alpha:!0,antialias:!0});r.setSize(window.innerWidth,window.innerHeight),r.setPixelRatio(Math.min(window.devicePixelRatio,2));const a=450,s=new xi,o=new Float32Array(a*3),l=new Float32Array(a);for(let d=0;d<a;d++)o[d*3]=(Math.random()-.5)*80,o[d*3+1]=(Math.random()-.5)*80,o[d*3+2]=(Math.random()-.5)*60,l[d]=Math.random()*.8+.2;s.setAttribute("position",new wn(o,3)),s.setAttribute("scale",new wn(l,1));const c=new d_({color:16766720,size:.45,transparent:!0,opacity:.65,blending:Ju}),h=new p1(s,c);n.add(h);let f=0,p=0;const g=d=>{f=(d.clientX-window.innerWidth/2)*3e-4,p=(d.clientY-window.innerHeight/2)*3e-4};window.addEventListener("mousemove",g);const x=()=>{i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",x);let y;const m=()=>{y=requestAnimationFrame(m);const d=s.attributes.position.array;for(let _=0;_<a;_++)d[_*3+1]-=.02,d[_*3+1]<-40&&(d[_*3+1]=40);s.attributes.position.needsUpdate=!0,h.rotation.y+=5e-4+f,h.rotation.x+=3e-4+p,r.render(n,i)};return m(),()=>{window.removeEventListener("mousemove",g),window.removeEventListener("resize",x),cancelAnimationFrame(y),s.dispose(),c.dispose(),r.dispose()}},[]),u.jsx("canvas",{id:"webgl-canvas",ref:t})}function g1(){const{lang:t,t:e}=zn(),[n,i]=re.useState(!1),[r,a]=re.useState({name:"",phone:"",email:"",message:""}),[s,o]=re.useState(!1),l=()=>{navigator.clipboard.writeText("QR917007370522-1875@unionbankofindia"),i(!0),setTimeout(()=>i(!1),3e3)},c=h=>{h.preventDefault();const f=`${e("home.heroTitle")}

${e("home.inputName")}: ${r.name}
${e("home.inputPhone")}: ${r.phone}
${e("home.inputMsg")}: ${r.message}`,p=`https://wa.me/919956120169?text=${encodeURIComponent(f)}`;window.open(p,"_blank"),o(!0),a({name:"",phone:"",email:"",message:""}),setTimeout(()=>o(!1),4e3)};return u.jsxs("main",{children:[u.jsxs("section",{className:"hero-section",id:"hero",children:[u.jsxs("div",{className:"hero-bg-container",children:[u.jsx("img",{src:"/assets/images/temple_hero.png",alt:e("home.heroTitle"),className:"hero-bg-img"}),u.jsx("div",{className:"hero-overlay"})]}),u.jsxs("div",{className:"hero-content",children:[u.jsx("div",{className:"mantra-badge",children:e("home.mantra")}),u.jsx("h1",{className:"hero-title",children:e("home.heroTitle")}),u.jsx("h2",{className:"hero-subtitle",children:e("home.heroSub")}),u.jsx("p",{className:"hero-description",children:e("home.heroDesc")}),u.jsxs("div",{className:"hero-buttons",children:[u.jsxs(Be,{to:"/yatra",className:"btn btn-primary",children:[u.jsx("i",{className:"fa-solid fa-om"})," ",e("home.btnYatra")]}),u.jsxs(Be,{to:"/contact",className:"btn btn-secondary",children:[u.jsx("i",{className:"fa-solid fa-location-dot"})," ",e("home.btnDarshan")]})]}),u.jsxs("div",{className:"feature-badge-card",children:[u.jsx("div",{className:"badge-icon",children:"🚩"}),u.jsxs("div",{className:"badge-text",children:[u.jsx("strong",{children:e("home.badgeSeva")}),u.jsx("span",{children:e("home.badgeSevaSub")})]})]})]})]}),u.jsx("section",{className:"section-container",children:u.jsxs("div",{className:"dual-cards-wrapper",children:[u.jsxs("div",{className:"intro-history-card",children:[u.jsxs("div",{className:"card-text-side",children:[u.jsxs("h2",{className:"card-heading",children:[u.jsx("span",{className:"heading-icon",children:"🛕"})," ",e("home.introTitle")]}),u.jsx("p",{className:"card-p",children:e("home.introText")}),u.jsx(Be,{to:"/intro",className:"btn-card-action",children:e("home.readMore")})]}),u.jsxs("div",{className:"card-img-side",children:[u.jsx("img",{src:"/assets/images/temple_intro.png?v=2",alt:e("home.introTitle"),className:"card-reveal-img"}),u.jsx("div",{className:"img-glow-overlay"})]})]}),u.jsxs("div",{className:"intro-history-card",children:[u.jsxs("div",{className:"card-text-side",children:[u.jsxs("h2",{className:"card-heading",children:[u.jsx("span",{className:"heading-icon",children:"📖"})," ",e("home.historyTitle")]}),u.jsx("p",{className:"card-p",children:e("home.historyText")}),u.jsx(Be,{to:"/history",className:"btn-card-action",children:e("home.listenMore")})]}),u.jsxs("div",{className:"card-img-side",children:[u.jsx("img",{src:"/assets/images/lord_rama_shiva.jpg",alt:e("home.historyTitle"),className:"card-reveal-img"}),u.jsx("div",{className:"img-glow-overlay"})]})]})]})}),u.jsx("section",{className:"yatra-section section-container",children:u.jsx("div",{className:"yatra-banner-card",children:u.jsxs("div",{className:"yatra-grid",children:[u.jsx("div",{className:"yatra-img-box",children:u.jsx("img",{src:"/assets/images/yatra_pilgrims.jpg",alt:e("home.yatraTitle"),className:"yatra-img"})}),u.jsxs("div",{className:"yatra-content-box",children:[u.jsx("h2",{className:"yatra-title",children:e("home.yatraTitle")}),u.jsx("p",{className:"yatra-desc",children:e("home.yatraDesc")}),u.jsx("p",{className:"yatra-subdesc",children:e("home.yatraSubdesc")}),u.jsxs("div",{className:"yatra-timeline-header",children:[u.jsx("span",{className:"timeline-line"}),u.jsx("span",{className:"timeline-title-text",children:e("home.yatraTimelineTitle")}),u.jsx("span",{className:"timeline-line"})]}),u.jsxs("div",{className:"yatra-stations",children:[u.jsxs("div",{className:"station-node",children:[u.jsx("div",{className:"node-icon",children:u.jsx("i",{className:"fa-solid fa-gopuram"})}),u.jsx("span",{className:"node-name",children:e("home.stationKardameshwar")})]}),u.jsx("div",{className:"station-connector"}),u.jsxs("div",{className:"station-node",children:[u.jsx("div",{className:"node-icon",children:u.jsx("i",{className:"fa-solid fa-dharmachakra"})}),u.jsx("span",{className:"node-name",children:e("home.stationBhimchandi")})]}),u.jsx("div",{className:"station-connector"}),u.jsxs("div",{className:"station-node active-main-node",children:[u.jsx("div",{className:"node-icon main-gold-icon",children:"🛕"}),u.jsx("span",{className:"node-name highlight-name",children:e("home.stationRameshwar")})]}),u.jsx("div",{className:"station-connector"}),u.jsxs("div",{className:"station-node",children:[u.jsx("div",{className:"node-icon",children:u.jsx("i",{className:"fa-solid fa-om"})}),u.jsx("span",{className:"node-name",children:e("home.stationShivpur")})]}),u.jsx("div",{className:"station-connector"}),u.jsxs("div",{className:"station-node",children:[u.jsx("div",{className:"node-icon",children:u.jsx("i",{className:"fa-solid fa-water"})}),u.jsx("span",{className:"node-name",children:e("home.stationKapildhara")})]})]}),u.jsx(Be,{to:"/yatra",className:"btn-yatra-action",children:e("home.btnYatraDetails")})]})]})})}),u.jsx("section",{className:"section-container main-cards-grid-section",children:u.jsxs("div",{className:"four-cards-grid",children:[u.jsxs("div",{className:"grid-card priest-card",children:[u.jsxs("div",{className:"card-header-tag",children:[u.jsx("span",{className:"card-header-icon",children:"🛕"}),u.jsx("h3",{children:e("home.priestTag")})]}),u.jsxs("div",{className:"priest-profile",children:[u.jsxs("div",{className:"priest-avatar-wrapper",children:[u.jsx("img",{src:"/assets/images/pandit_ji.png",alt:"Pt. Anoop Tiwari",className:"priest-img"}),u.jsx("div",{className:"avatar-ring"})]}),u.jsxs("div",{className:"priest-info",children:[u.jsx("h4",{className:"priest-name",children:e("priest.name")}),u.jsx("span",{className:"priest-role",children:e("priest.role")})]})]}),u.jsx("p",{className:"priest-bio",children:e("home.priestBio")}),u.jsx(Be,{to:"/priest",className:"btn-card-footer",children:e("home.btnContactPriest")})]}),u.jsxs("div",{className:"grid-card timings-card",children:[u.jsxs("div",{className:"card-header-tag",children:[u.jsx("span",{className:"card-header-icon",children:"🌅"}),u.jsx("h3",{children:e("home.timingsTag")})]}),u.jsxs("div",{className:"timings-body",children:[u.jsxs("div",{className:"timing-block morning-block",children:[u.jsx("div",{className:"timing-icon-col",children:u.jsx("div",{className:"sun-icon-animated",children:"☀️"})}),u.jsxs("div",{className:"timing-details",children:[u.jsx("span",{className:"timing-label",children:e("home.timingMorning")}),u.jsx("div",{className:"time-range",children:u.jsx("strong",{children:e("home.timingMorningRange")})})]})]}),u.jsxs("div",{className:"timing-block evening-block",children:[u.jsx("div",{className:"timing-icon-col",children:u.jsx("div",{className:"moon-icon-animated",children:"🌙"})}),u.jsxs("div",{className:"timing-details",children:[u.jsx("span",{className:"timing-label",children:e("home.timingEvening")}),u.jsx("div",{className:"time-range",children:u.jsx("strong",{children:e("home.timingEveningRange")})})]})]})]}),u.jsxs("div",{className:"live-status-pill",children:[u.jsx("span",{className:"status-dot green"}),u.jsx("span",{children:e("home.liveStatus")})]})]}),u.jsxs("div",{className:"grid-card donate-card",children:[u.jsxs("div",{className:"card-header-tag",children:[u.jsx("span",{className:"card-header-icon",children:"📦"}),u.jsx("h3",{children:e("home.donateTag")})]}),u.jsx("p",{className:"donate-subtext",children:e("home.donateSub")}),u.jsxs("div",{className:"qr-code-box",children:[u.jsx("div",{className:"qr-frame",children:u.jsx("img",{src:"/assets/images/upi_qr_code.png",alt:"BHIM UPI QR - Shri Rameshwar Mahadev Temple",className:"real-qr-img"})}),u.jsxs("span",{className:"scan-pay-tag",children:[u.jsx("i",{className:"fa-solid fa-qrcode"})," ",e("home.scanPayTag")]})]}),u.jsxs("div",{className:"upi-info-box",children:[u.jsxs("div",{className:"upi-info-header",children:[u.jsx("span",{className:"upi-label",children:e("home.upiIdLabel")}),u.jsxs("button",{className:"btn-copy-upi",onClick:l,title:e("home.copyBtn"),children:[u.jsx("i",{className:`fa-regular ${n?"fa-circle-check":"fa-copy"}`}),u.jsx("span",{children:n?t==="hi"?" कॉपी हो गया":" Copied":t==="hi"?" कॉपी करें":" Copy"})]})]}),u.jsx("strong",{className:"upi-id-code",children:"QR917007370522-1875@unionbankofindia"})]}),n&&u.jsx("span",{className:"text-gold-center",children:e("home.copiedMsg")})]}),u.jsxs("div",{className:"grid-card contact-card",children:[u.jsxs("div",{className:"card-header-tag",children:[u.jsx("span",{className:"card-header-icon",children:"📞"}),u.jsx("h3",{children:e("home.contactFormTitle")})]}),s?u.jsxs("div",{className:"form-success-msg",children:[u.jsx("i",{className:"fa-solid fa-circle-check"})," ",e("home.contactFormSuccess")]}):u.jsxs("form",{className:"contact-form",onSubmit:c,children:[u.jsx("div",{className:"form-group",children:u.jsx("input",{type:"text",required:!0,placeholder:e("home.inputName"),value:r.name,onChange:h=>a({...r,name:h.target.value})})}),u.jsx("div",{className:"form-group",children:u.jsx("input",{type:"tel",required:!0,placeholder:e("home.inputPhone"),value:r.phone,onChange:h=>a({...r,phone:h.target.value})})}),u.jsx("div",{className:"form-group",children:u.jsx("textarea",{rows:"3",required:!0,placeholder:e("home.inputMsg"),value:r.message,onChange:h=>a({...r,message:h.target.value})})}),u.jsxs("button",{type:"submit",className:"btn-submit-contact",children:[u.jsx("i",{className:"fa-brands fa-whatsapp"})," ",e("home.btnSendMsg")]})]}),u.jsx("div",{className:"direct-contact-details",children:u.jsxs("div",{className:"contact-item",children:[u.jsx("i",{className:"fa-solid fa-phone"}),u.jsxs("div",{children:[u.jsx("strong",{children:e("home.phoneLabel")}),u.jsx("span",{children:u.jsx("a",{href:"tel:+919956120169",style:{color:"inherit"},children:"+91 9956120169"})})]})]})})]})]})})]})}function v1(){const{t}=zn();return u.jsxs("main",{children:[u.jsxs("section",{className:"page-hero-header",children:[u.jsx("div",{className:"page-hero-overlay"}),u.jsxs("div",{className:"page-hero-content",children:[u.jsx("span",{className:"mantra-badge",children:"|| ॐ नमः शिवाय ||"}),u.jsx("h1",{className:"page-hero-title",children:t("intro.title")}),u.jsx("p",{className:"page-hero-sub",children:t("intro.sub")})]})]}),u.jsx("div",{className:"section-container page-detail-container",children:u.jsxs("div",{className:"detail-grid",children:[u.jsxs("div",{className:"detail-main-card",children:[u.jsx("div",{className:"detail-img-wrapper",children:u.jsx("img",{src:"/assets/images/temple_intro.png?v=2",alt:t("intro.title"),className:"detail-banner-img"})}),u.jsxs("div",{className:"detail-text-body",children:[u.jsx("h2",{children:t("intro.cardHeading")}),u.jsx("p",{children:t("intro.p1")}),u.jsx("p",{children:t("intro.p2")}),u.jsx("p",{children:t("intro.p3")}),u.jsxs("div",{className:"page-action-row",children:[u.jsx(Be,{to:"/yatra",className:"btn btn-primary",children:t("home.btnYatra")}),u.jsx(Be,{to:"/contact",className:"btn btn-secondary",children:t("home.btnDarshan")})]})]})]}),u.jsxs("aside",{className:"detail-sidebar",children:[u.jsxs("div",{className:"sidebar-card",children:[u.jsx("h3",{children:t("intro.sidebarHeading")}),u.jsxs("ul",{className:"sidebar-info-list",children:[u.jsxs("li",{children:["✨ ",t("intro.item1")]}),u.jsxs("li",{children:["🌊 ",t("intro.item2")]}),u.jsxs("li",{children:["🚩 ",t("intro.item3")]}),u.jsxs("li",{children:["🍲 ",t("intro.item4")]})]})]}),u.jsxs("div",{className:"sidebar-card donate-promo-card",children:[u.jsx("h3",{children:t("home.donateTag")}),u.jsx("p",{children:t("home.donateSub")}),u.jsxs(Be,{to:"/donate",className:"btn btn-primary btn-block",children:[t("nav.donate")," ❤️"]})]})]})]})})]})}function _1(){const{t}=zn();return u.jsxs("main",{children:[u.jsxs("section",{className:"page-hero-header",children:[u.jsx("div",{className:"page-hero-overlay"}),u.jsxs("div",{className:"page-hero-content",children:[u.jsx("span",{className:"mantra-badge",children:"|| ॐ नमः शिवाय ||"}),u.jsx("h1",{className:"page-hero-title",children:t("history.title")}),u.jsx("p",{className:"page-hero-sub",children:t("history.sub")})]})]}),u.jsx("div",{className:"section-container page-detail-container",children:u.jsxs("div",{className:"detail-grid",children:[u.jsxs("div",{className:"detail-main-card",children:[u.jsx("div",{className:"detail-img-wrapper",children:u.jsx("img",{src:"/assets/images/lord_rama_shiva.jpg",alt:t("history.title"),className:"detail-banner-img"})}),u.jsxs("div",{className:"detail-text-body",children:[u.jsx("h2",{children:t("history.cardHeading")}),u.jsx("p",{children:t("history.p1")}),u.jsx("p",{children:t("history.p2")}),u.jsx("p",{children:t("history.p3")}),u.jsxs("div",{className:"page-action-row",children:[u.jsx(Be,{to:"/yatra",className:"btn btn-primary",children:t("home.btnYatra")}),u.jsx(Be,{to:"/gallery",className:"btn btn-secondary",children:t("nav.gallery")})]})]})]}),u.jsx("aside",{className:"detail-sidebar",children:u.jsxs("div",{className:"sidebar-card",children:[u.jsx("h3",{children:t("history.sidebarHeading")}),u.jsxs("ul",{className:"sidebar-info-list",children:[u.jsxs("li",{children:["✨ ",t("history.item1")]}),u.jsxs("li",{children:["🛕 ",t("history.item2")]}),u.jsxs("li",{children:["🚩 ",t("history.item3")]}),u.jsxs("li",{children:["📍 ",t("history.item4")]})]})]})})]})})]})}function x1(){const{t}=zn();return u.jsxs("main",{children:[u.jsxs("section",{className:"page-hero-header",children:[u.jsx("div",{className:"page-hero-overlay"}),u.jsxs("div",{className:"page-hero-content",children:[u.jsx("span",{className:"mantra-badge",children:"|| ॐ नमः शिवाय ||"}),u.jsx("h1",{className:"page-hero-title",children:t("yatra.title")}),u.jsx("p",{className:"page-hero-sub",children:t("yatra.sub")})]})]}),u.jsx("div",{className:"section-container page-detail-container",children:u.jsxs("div",{className:"detail-grid",children:[u.jsxs("div",{className:"detail-main-card",children:[u.jsx("div",{className:"detail-img-wrapper",children:u.jsx("img",{src:"/assets/images/yatra_pilgrims.jpg",alt:t("yatra.title"),className:"detail-banner-img"})}),u.jsxs("div",{className:"detail-text-body",children:[u.jsx("h2",{children:t("yatra.cardHeading")}),u.jsx("p",{children:t("yatra.p1")}),u.jsx("p",{children:t("yatra.p2")}),u.jsx("div",{className:"yatra-halt-box",children:u.jsx("h4",{children:t("yatra.halt1")})}),u.jsx("div",{className:"yatra-halt-box",children:u.jsx("h4",{children:t("yatra.halt2")})}),u.jsxs("div",{className:"yatra-halt-box highlight-halt",children:[u.jsx("h4",{children:t("yatra.halt3")}),u.jsx("p",{children:t("yatra.p3")})]}),u.jsx("div",{className:"yatra-halt-box",children:u.jsx("h4",{children:t("yatra.halt4")})}),u.jsx("div",{className:"yatra-halt-box",children:u.jsx("h4",{children:t("yatra.halt5")})}),u.jsxs("div",{className:"page-action-row",children:[u.jsx(Be,{to:"/priest",className:"btn btn-primary",children:t("home.btnContactPriest")}),u.jsx(Be,{to:"/contact",className:"btn btn-secondary",children:t("home.mapTitle")})]})]})]}),u.jsx("aside",{className:"detail-sidebar",children:u.jsxs("div",{className:"sidebar-card",children:[u.jsx("h3",{children:t("yatra.sidebarHeading")}),u.jsxs("ul",{className:"sidebar-info-list",children:[u.jsxs("li",{children:["👟 ",t("yatra.item1")]}),u.jsxs("li",{children:["🕉️ ",t("yatra.item2")]}),u.jsxs("li",{children:["🍲 ",t("yatra.item3")]}),u.jsxs("li",{children:["📅 ",t("yatra.item4")]})]})]})})]})})]})}const ni=[{id:1,src:"/assets/images/gallery/gallery_silver_shivalinga.jpg"},{id:2,src:"/assets/images/gallery/gallery_yogi_aarti_hawan.jpg"},{id:3,src:"/assets/images/gallery/gallery_special_puja.jpg"},{id:4,src:"/assets/images/gallery/gallery_couple_puja.jpg"},{id:5,src:"/assets/images/gallery/gallery_ghat_aarti.jpg"},{id:6,src:"/assets/images/gallery/gallery_sadhguru_visit.jpg"},{id:7,src:"/assets/images/gallery/gallery_dignitary_welcome.jpg"},{id:8,src:"/assets/images/gallery/gallery_police_ips_visit.jpg"},{id:9,src:"/assets/images/gallery/gallery_ghat_sunset_crowd.jpg"},{id:10,src:"/assets/images/gallery/gallery_ghat_crowd.jpg"},{id:11,src:"/assets/images/gallery/gallery_sant_ashirwad.jpg"},{id:12,src:"/assets/images/gallery/gallery_samiti_baithak.jpg"}];function y1(){const{t}=zn(),[e,n]=re.useState(null),i=o=>{n(o)},r=()=>{n(null)},a=o=>{o.stopPropagation(),n(l=>(l+1)%ni.length)},s=o=>{o.stopPropagation(),n(l=>(l-1+ni.length)%ni.length)};return re.useEffect(()=>{const o=l=>{e!==null&&(l.key==="Escape"&&r(),l.key==="ArrowRight"&&n(c=>(c+1)%ni.length),l.key==="ArrowLeft"&&n(c=>(c-1+ni.length)%ni.length))};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[e]),u.jsxs("main",{children:[u.jsxs("section",{className:"page-hero-header",children:[u.jsx("div",{className:"page-hero-overlay"}),u.jsxs("div",{className:"page-hero-content",children:[u.jsx("span",{className:"mantra-badge",children:"|| ॐ नमः शिवाय ||"}),u.jsx("h1",{className:"page-hero-title",children:t("gallery.title")}),u.jsx("p",{className:"page-hero-sub",children:t("gallery.sub")})]})]}),u.jsxs("div",{className:"section-container",children:[u.jsx("div",{className:"simple-gallery-grid",children:ni.map((o,l)=>u.jsxs("div",{className:"simple-gallery-card",onClick:()=>i(l),children:[u.jsx("img",{src:o.src,alt:`${t("gallery.title")} ${l+1}`,loading:"lazy"}),u.jsx("div",{className:"simple-gallery-hover-overlay",children:u.jsx("span",{className:"simple-zoom-icon",children:"🔍"})})]},o.id))}),e!==null&&ni[e]&&u.jsx("div",{className:"simple-lightbox-backdrop",onClick:r,children:u.jsxs("div",{className:"simple-lightbox-container",onClick:o=>o.stopPropagation(),children:[u.jsx("button",{className:"simple-lightbox-close",onClick:r,title:"Close",children:"×"}),u.jsx("button",{className:"simple-lightbox-nav prev",onClick:s,title:"Previous",children:"❮"}),u.jsx("div",{className:"simple-lightbox-img-wrapper",children:u.jsx("img",{src:ni[e].src,alt:`${t("gallery.title")} ${e+1}`})}),u.jsx("button",{className:"simple-lightbox-nav next",onClick:a,title:"Next",children:"❯"})]})})]})]})}function S1(){const{t}=zn();return u.jsxs("main",{children:[u.jsxs("section",{className:"page-hero-header",children:[u.jsx("div",{className:"page-hero-overlay"}),u.jsxs("div",{className:"page-hero-content",children:[u.jsx("span",{className:"mantra-badge",children:"|| ॐ नमः शिवाय ||"}),u.jsx("h1",{className:"page-hero-title",children:t("timings.title")}),u.jsx("p",{className:"page-hero-sub",children:t("timings.sub")})]})]}),u.jsx("div",{className:"section-container page-detail-container",children:u.jsxs("div",{className:"detail-grid",children:[u.jsxs("div",{className:"detail-main-card",children:[u.jsx("div",{className:"live-status-banner",children:u.jsxs("div",{className:"live-status-pill",children:[u.jsx("span",{className:"status-dot green"}),u.jsx("span",{children:t("home.liveStatus")})]})}),u.jsxs("div",{className:"detail-text-body",children:[u.jsx("h2",{children:t("timings.cardHeading")}),u.jsxs("div",{className:"yatra-halt-box margin-bottom-20",children:[u.jsxs("h4",{children:["🌅 ",t("timings.morningTitle")]}),u.jsx("strong",{className:"text-gold",children:t("timings.morningTime")}),u.jsx("p",{children:t("timings.morningDesc")})]}),u.jsxs("div",{className:"yatra-halt-box margin-bottom-20",children:[u.jsxs("h4",{children:["🍲 ",t("timings.middayTitle")]}),u.jsx("strong",{className:"text-gold",children:t("timings.middayTime")}),u.jsx("p",{children:t("timings.middayDesc")})]}),u.jsxs("div",{className:"yatra-halt-box highlight-halt margin-bottom-20",children:[u.jsxs("h4",{children:["🪔 ",t("timings.eveningTitle")]}),u.jsx("strong",{className:"text-gold",children:t("timings.eveningTime")}),u.jsx("p",{children:t("timings.eveningDesc")})]}),u.jsxs("div",{className:"yatra-halt-box margin-bottom-20",children:[u.jsxs("h4",{children:["🌙 ",t("timings.nightTitle")]}),u.jsx("strong",{className:"text-gold",children:t("timings.nightTime")}),u.jsx("p",{children:t("timings.nightDesc")})]}),u.jsxs("div",{className:"page-action-row",children:[u.jsx(Be,{to:"/priest",className:"btn btn-primary",children:t("home.btnContactPriest")}),u.jsx(Be,{to:"/contact",className:"btn btn-secondary",children:t("home.mapTitle")})]})]})]}),u.jsx("aside",{className:"detail-sidebar",children:u.jsxs("div",{className:"sidebar-card",children:[u.jsx("h3",{children:t("timings.sidebarHeading")}),u.jsxs("ul",{className:"sidebar-info-list",children:[u.jsxs("li",{children:["👕 ",t("timings.item1")]}),u.jsxs("li",{children:["🧼 ",t("timings.item2")]}),u.jsxs("li",{children:["⏰ ",t("timings.item3")]}),u.jsxs("li",{children:["📱 ",t("timings.item4")]})]})]})})]})})]})}function E1(){const{t}=zn();return u.jsxs("main",{children:[u.jsxs("section",{className:"page-hero-header",children:[u.jsx("div",{className:"page-hero-overlay"}),u.jsxs("div",{className:"page-hero-content",children:[u.jsx("span",{className:"mantra-badge",children:"|| ॐ नमः शिवाय ||"}),u.jsx("h1",{className:"page-hero-title",children:t("priest.title")}),u.jsx("p",{className:"page-hero-sub",children:t("priest.sub")})]})]}),u.jsx("div",{className:"section-container page-detail-container",children:u.jsxs("div",{className:"detail-grid",children:[u.jsxs("div",{className:"detail-main-card",children:[u.jsxs("div",{className:"priest-detail-hero",children:[u.jsx("div",{className:"priest-portrait-box",children:u.jsx("img",{src:"/assets/images/pandit_ji.png",alt:t("priest.name"),className:"priest-full-img"})}),u.jsxs("div",{className:"priest-meta-box",children:[u.jsx("h2",{children:t("priest.name")}),u.jsx("span",{className:"priest-title-badge",children:t("priest.role")}),u.jsx("p",{className:"priest-intro-p",children:t("priest.intro")})]})]}),u.jsxs("div",{className:"detail-text-body",children:[u.jsx("h3",{className:"sub-heading-gold",children:t("priest.servicesTitle")}),u.jsxs("div",{className:"full-services-list",children:[u.jsxs("div",{className:"full-service-card",children:[u.jsx("span",{className:"fs-icon",children:"🛕"}),u.jsxs("div",{className:"fs-info",children:[u.jsx("h3",{children:t("priest.service1Title")}),u.jsx("p",{children:t("priest.service1Desc")})]})]}),u.jsxs("div",{className:"full-service-card",children:[u.jsx("span",{className:"fs-icon",children:"🕉️"}),u.jsxs("div",{className:"fs-info",children:[u.jsx("h3",{children:t("priest.service2Title")}),u.jsx("p",{children:t("priest.service2Desc")})]})]}),u.jsxs("div",{className:"full-service-card",children:[u.jsx("span",{className:"fs-icon",children:"🐍"}),u.jsxs("div",{className:"fs-info",children:[u.jsx("h3",{children:t("priest.service3Title")}),u.jsx("p",{children:t("priest.service3Desc")})]})]}),u.jsxs("div",{className:"full-service-card",children:[u.jsx("span",{className:"fs-icon",children:"💍"}),u.jsxs("div",{className:"fs-info",children:[u.jsx("h3",{children:t("priest.service4Title")}),u.jsx("p",{children:t("priest.service4Desc")})]})]})]}),u.jsx("h3",{className:"sub-heading-gold",children:t("priest.bookingHeading")}),u.jsx("p",{children:t("priest.bookingDesc")}),u.jsxs("div",{className:"page-action-row",children:[u.jsxs("a",{href:"https://wa.me/919956120169?text=%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%A3%E0%A4%BE%E0%A4%AE%20%E0%A4%AA%E0%A4%82.%20%E0%A4%85%E0%A4%A8%E0%A5%82%E0%A4%AA%20%E0%A4%A4%E0%A4%BF%E0%A4%B5%E0%A4%BE%E0%A4%B0%E0%A5%80%20%E0%A4%9C%E0%A5%80!%20%E0%A4%AE%E0%A5%88%E0%A4%82%20%E0%A4%AE%E0%A4%82%E0%A4%A6%E0%A4%BF%E0%A4%B0%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%AA%E0%A5%82%E0%A4%9C%E0%A4%BE%20%E0%A4%AC%E0%A5%81%E0%A4%95%20%E0%A4%95%E0%A4%B0%E0%A4%A8%E0%A4%BE%20%E0%A4%9A%E0%A4%BE%E0%A4%B9%E0%A4%A4%E0%A4%BE%20%E0%A4%B9%E0%A5%82%E0%A4%82",target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary",children:[u.jsx("i",{className:"fa-brands fa-whatsapp"})," ",t("priest.btnWhatsapp")]}),u.jsxs("a",{href:"tel:+919956120169",className:"btn btn-secondary",children:[u.jsx("i",{className:"fa-solid fa-phone"})," ",t("priest.btnCall")]})]})]})]}),u.jsx("aside",{className:"detail-sidebar",children:u.jsxs("div",{className:"sidebar-card",children:[u.jsx("h3",{children:t("priest.sidebarAddress")}),u.jsx("p",{children:t("priest.fullAddress")})]})})]})})]})}function M1(){return u.jsxs("main",{children:[u.jsxs("section",{className:"page-hero-header",children:[u.jsx("div",{className:"page-hero-overlay"}),u.jsxs("div",{className:"page-hero-content",children:[u.jsx("span",{className:"mantra-badge",children:"|| ॐ नमः शिवाय ||"}),u.jsx("h1",{className:"page-hero-title",children:"धार्मिक सेवाएं एवं अनुष्ठान"}),u.jsx("p",{className:"page-hero-sub",children:"वैदिक विधि-विधान से संपन्न होने वाले समस्त पूजन एवं संस्कार"})]})]}),u.jsx("div",{className:"section-container page-detail-container",children:u.jsxs("div",{className:"detail-grid",children:[u.jsx("div",{className:"detail-main-card",children:u.jsxs("div",{className:"detail-text-body",children:[u.jsx("h2",{children:"वैदिक पूजन एवं अनुष्ठान सेवाएं"}),u.jsxs("p",{children:["श्री रामेश्वर महादेव मंदिर में मुख्य पुजारी ",u.jsx("strong",{children:"पं. अनूप तिवारी"})," जी के आचार्यत्व में शास्त्रोक्त विधि से निम्नलिखित पूजा-अनुष्ठान संपन्न कराए जाते हैं:"]}),u.jsxs("div",{className:"full-services-list",children:[u.jsxs("div",{className:"full-service-card",children:[u.jsx("span",{className:"fs-icon",children:"🛕"}),u.jsxs("div",{className:"fs-info",children:[u.jsx("h3",{children:"1. रुद्राभिषेक एवं महापूजा"}),u.jsx("p",{children:"एकादश रूद्र मंत्रों द्वारा गंगाजल, दूध, दही, घी, शहद, शक्कर, भस्म, केसर तथा बेलपत्र से भगवान शिव का दिव्य अभिषेक।"})]})]}),u.jsxs("div",{className:"full-service-card",children:[u.jsx("span",{className:"fs-icon",children:"🕉️"}),u.jsxs("div",{className:"fs-info",children:[u.jsx("h3",{children:"2. महामृत्युंजय मंत्र जाप अनुष्ठान"}),u.jsx("p",{children:"असाध्य रोगों से मुक्ति, दुर्घटना भय निवारण एवं दीर्घायु प्राप्ति हेतु सवा लाख महामृत्युंजय मंत्र जाप एवं हवन।"})]})]}),u.jsxs("div",{className:"full-service-card",children:[u.jsx("span",{className:"fs-icon",children:"🐍"}),u.jsxs("div",{className:"fs-info",children:[u.jsx("h3",{children:"3. कालसर्प दोष & राहु-केतु शांति"}),u.jsx("p",{children:"जन्मपत्रिका के कालसर्प दोष, राहु-केतु बाधा तथा पितृदोष शांति हेतु वरुणा नदी तट पर विशेष संकल्प एवं पूजा।"})]})]}),u.jsxs("div",{className:"full-service-card",children:[u.jsx("span",{className:"fs-icon",children:"✂️"}),u.jsxs("div",{className:"fs-info",children:[u.jsx("h3",{children:"4. मुंडन संस्कार एवं बाल पूजा"}),u.jsx("p",{children:"शिशु के प्रथम मुंडन संस्कार हेतु मांगलिक वैदिक विधान एवं अन्नप्राशन पूजन।"})]})]}),u.jsxs("div",{className:"full-service-card",children:[u.jsx("span",{className:"fs-icon",children:"🏠"}),u.jsxs("div",{className:"fs-info",children:[u.jsx("h3",{children:"5. गृह प्रवेश एवं वास्तु शांति"}),u.jsx("p",{children:"नवीन भवन प्रवेश हेतु नवग्रह शांति, वास्तु पूजन एवं कलश स्थापना।"})]})]}),u.jsxs("div",{className:"full-service-card",children:[u.jsx("span",{className:"fs-icon",children:"📖"}),u.jsxs("div",{className:"fs-info",children:[u.jsx("h3",{children:"6. श्री सत्यनारायण व्रत कथा"}),u.jsx("p",{children:"पारिवारिक सुख-समृद्धि एवं संकट निवारण हेतु सत्यनारायण कथा एवं हवन प्रसादम।"})]})]})]}),u.jsxs("div",{className:"page-action-row",children:[u.jsx(Be,{to:"/priest",className:"btn btn-primary",children:"पं. अनूप तिवारी जी से संपर्क करें"}),u.jsx(Be,{to:"/contact",className:"btn btn-secondary",children:"पूजा बुकिंग फॉर्म भरें"})]})]})}),u.jsx("aside",{className:"detail-sidebar",children:u.jsxs("div",{className:"sidebar-card",children:[u.jsx("h3",{children:"पूजा सामग्री"}),u.jsx("p",{children:"मंदिर ट्रस्ट एवं पुजारी जी द्वारा समस्त पूजा सामग्री (बेलपत्र, गंगाजल, भस्म, फूल, दुग्ध) उपलब्ध कराई जाती है।"})]})})]})})]})}function T1(){return u.jsxs("main",{children:[u.jsxs("section",{className:"page-hero-header",children:[u.jsx("div",{className:"page-hero-overlay"}),u.jsxs("div",{className:"page-hero-content",children:[u.jsx("span",{className:"mantra-badge",children:"|| ॐ नमः शिवाय ||"}),u.jsx("h1",{className:"page-hero-title",children:"वार्षिक पर्व एवं धार्मिक उत्सव"}),u.jsx("p",{className:"page-hero-sub",children:"श्री रामेश्वर महादेव मंदिर में वर्ष भर आयोजित होने वाले भव्य मेले एवं उत्सव"})]})]}),u.jsx("div",{className:"section-container page-detail-container",children:u.jsxs("div",{className:"detail-grid",children:[u.jsx("div",{className:"detail-main-card",children:u.jsxs("div",{className:"detail-text-body",children:[u.jsx("h2",{children:"प्रमुख वार्षिक धार्मिक उत्सव"}),u.jsxs("div",{className:"full-festivals-list",children:[u.jsxs("div",{className:"fest-detail-box",children:[u.jsx("h3",{children:"1. महाशिवरात्रि पर्व महोत्सव (फाल्गुन कृष्ण चतुर्दशी)"}),u.jsx("p",{children:"महाशिवरात्रि श्री रामेश्वर महादेव मंदिर का सबसे बड़ा वार्षिक उत्सव है। इस दिन संपूर्ण मंदिर को रंग-बिरंगे प्रकाश एवं ताजे पुष्पों से भव्य रूप से सजाया जाता है। रात्रि भर 4 प्रहर की विशेष महाआरती, भस्म आरती एवं शिव पार्वती विवाह का अनुष्ठान होता है।"})]}),u.jsxs("div",{className:"fest-detail-box",children:[u.jsx("h3",{children:"2. सावन मास महोत्सव (श्रावण मास)"}),u.jsx("p",{children:"संपूर्ण सावन मास में भगवान रामेश्वर महादेव का प्रतिदिन अलग-अलग स्वरूपों में विशेष भव्य श्रृंगार किया जाता है। चारों सावन सोमवार को लाखों कांवड़िए गंगाजल लाकर जलाभिषेक करते हैं।"})]}),u.jsxs("div",{className:"fest-detail-box",children:[u.jsx("h3",{children:"3. लोटा-भंटा मेला (मार्गशीर्ष शुक्ल षष्ठी)"}),u.jsx("p",{children:"यह काशी का अति प्राचीन एवं पारंपरिक मेला है जो श्री रामेश्वर महादेव मंदिर परिसर में आयोजित होता है। इस दिन स्थानीय ग्रामीण एवं श्रद्धालु वरुणा तट पर उपले जलाकर उसमें बैंगन (भंटा) और बाटी पकाते हैं और भगवान शिव को भोग लगाते हैं।"})]}),u.jsxs("div",{className:"fest-detail-box",children:[u.jsx("h3",{children:"4. पंचकोशी मेला (वैशाख / कार्तिक मास)"}),u.jsx("p",{children:"पंचकोशी यात्रा के दौरान रामेश्वर पड़ाव पर विशाल मेले का स्वरूप बन जाता है। मंदिर ट्रस्ट द्वारा सभी पदयात्रियों के लिए निःशुल्क भोजन, चिकित्सा एवं विश्राम की व्यवस्था की जाती है।"})]})]}),u.jsxs("div",{className:"page-action-row",children:[u.jsx(Be,{to:"/timings",className:"btn btn-primary",children:"आरती का समय देखें"}),u.jsx(Be,{to:"/gallery",className:"btn btn-secondary",children:"उत्सव की तस्वीरें देखें"})]})]})}),u.jsx("aside",{className:"detail-sidebar",children:u.jsxs("div",{className:"sidebar-card",children:[u.jsx("h3",{children:"उत्सव कैलेंडर"}),u.jsxs("ul",{className:"sidebar-info-list",children:[u.jsxs("li",{children:[u.jsx("strong",{children:"फाल्गुन:"})," महाशिवरात्रि"]}),u.jsxs("li",{children:[u.jsx("strong",{children:"श्रावण:"})," सावन सोमवार मेला"]}),u.jsxs("li",{children:[u.jsx("strong",{children:"मार्गशीर्ष:"})," लोटा-भंटा मेला"]}),u.jsxs("li",{children:[u.jsx("strong",{children:"वैशाख:"})," पंचकोशी परिक्रमा"]})]})]})})]})})]})}const nu="QR917007370522-1875@unionbankofindia";function w1(){const{t}=zn(),[e,n]=re.useState(!1),i=()=>{navigator.clipboard.writeText(nu),n(!0),setTimeout(()=>n(!1),3e3)};return u.jsxs("main",{children:[u.jsxs("section",{className:"page-hero-header",children:[u.jsx("div",{className:"page-hero-overlay"}),u.jsxs("div",{className:"page-hero-content",children:[u.jsx("span",{className:"mantra-badge",children:"|| ॐ नमः शिवाय ||"}),u.jsx("h1",{className:"page-hero-title",children:t("donate.title")}),u.jsx("p",{className:"page-hero-sub",children:t("donate.sub")})]})]}),u.jsx("div",{className:"section-container page-detail-container",children:u.jsxs("div",{className:"detail-grid",children:[u.jsx("div",{className:"detail-main-card donate-card-page",children:u.jsxs("div",{className:"detail-text-body text-center",children:[u.jsx("h2",{children:t("donate.cardHeading")}),u.jsx("p",{className:"donate-page-sub",children:t("donate.cardSub")}),u.jsxs("div",{className:"qr-code-page-box",children:[u.jsx("div",{className:"qr-frame-large",children:u.jsx("img",{src:"/assets/images/upi_qr_code.png",alt:"BHIM UPI QR Code - Shri Rameshwar Mahadev Temple",className:"real-qr-img"})}),u.jsxs("div",{className:"qr-bank-label",children:[u.jsx("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/BHIM_logo.svg/200px-BHIM_logo.svg.png",alt:"BHIM",className:"bhim-logo",onError:r=>{r.target.style.display="none"}}),u.jsx("span",{className:"bhim-upi-text",children:"BHIM UPI"})]}),u.jsxs("span",{className:"scan-tag-lg",children:[u.jsx("i",{className:"fa-solid fa-qrcode"})," ",t("donate.scanTag")]})]}),u.jsxs("div",{className:"upi-box-large",children:[u.jsxs("div",{className:"upi-id-row",children:[u.jsx("span",{className:"upi-label",children:t("donate.upiIdLabel")}),u.jsx("strong",{className:"upi-value",children:nu})]}),u.jsxs("button",{onClick:i,className:`btn-copy-lg ${e?"copied":""}`,children:[u.jsx("i",{className:`fa-regular ${e?"fa-circle-check":"fa-copy"}`}),t(e?"donate.copiedBtn":"donate.copyBtn")]})]}),u.jsxs("div",{className:"bank-details-box",children:[u.jsx("h3",{children:t("donate.bankDetailsTitle")}),u.jsxs("ul",{className:"bank-info-list",children:[u.jsxs("li",{children:[u.jsx("strong",{children:t("donate.accountNameLabel")})," ",t("donate.accountNameValue")]}),u.jsxs("li",{children:[u.jsx("strong",{children:t("donate.bankNameLabel")})," ",t("donate.bankNameValue")]}),u.jsxs("li",{children:[u.jsx("strong",{children:t("donate.upiAddressLabel")})," ",nu]})]})]}),u.jsx("div",{className:"page-action-row center-btns",children:u.jsx(Be,{to:"/contact",className:"btn btn-primary",children:t("donate.btnReceipt")})})]})}),u.jsxs("aside",{className:"detail-sidebar",children:[u.jsxs("div",{className:"sidebar-card",children:[u.jsx("h3",{children:t("donate.sidebarPurpose")}),u.jsxs("ul",{className:"sidebar-info-list",children:[u.jsxs("li",{children:["🍲 ",t("donate.purpose1")]}),u.jsxs("li",{children:["🛕 ",t("donate.purpose2")]}),u.jsxs("li",{children:["🐄 ",t("donate.purpose3")]}),u.jsxs("li",{children:["🚩 ",t("donate.purpose4")]})]})]}),u.jsxs("div",{className:"sidebar-card",style:{marginTop:"16px"},children:[u.jsx("h3",{children:t("donate.sidebarPayments")}),u.jsxs("ul",{className:"sidebar-info-list",children:[u.jsx("li",{children:"✅ Google Pay"}),u.jsx("li",{children:"✅ PhonePe"}),u.jsx("li",{children:"✅ Paytm"}),u.jsx("li",{children:"✅ BHIM UPI"}),u.jsx("li",{children:"✅ Net Banking"})]})]})]})]})})]})}function A1(){const{t}=zn(),[e,n]=re.useState({name:"",phone:"",email:"",message:""}),[i,r]=re.useState(!1),a=s=>{s.preventDefault();const o=`Shri Rameshwar Mahadev Temple

${t("contact.inputNameLabel")}: ${e.name}
${t("contact.inputPhoneLabel")}: ${e.phone}
${t("contact.inputEmailLabel")}: ${e.email}
${t("contact.inputMessageLabel")}: ${e.message}`,l=`https://wa.me/919956120169?text=${encodeURIComponent(o)}`;window.open(l,"_blank"),r(!0),n({name:"",phone:"",email:"",message:""}),setTimeout(()=>r(!1),5e3)};return u.jsxs("main",{children:[u.jsxs("section",{className:"page-hero-header",children:[u.jsx("div",{className:"page-hero-overlay"}),u.jsxs("div",{className:"page-hero-content",children:[u.jsx("span",{className:"mantra-badge",children:"|| ॐ नमः शिवाय ||"}),u.jsx("h1",{className:"page-hero-title",children:t("contact.title")}),u.jsx("p",{className:"page-hero-sub",children:t("contact.sub")})]})]}),u.jsx("div",{className:"section-container page-detail-container",children:u.jsxs("div",{className:"detail-grid",children:[u.jsxs("div",{className:"detail-main-card",children:[u.jsx("h2",{children:t("contact.heading")}),i?u.jsxs("div",{className:"form-success-msg margin-bottom-20",children:[u.jsx("i",{className:"fa-solid fa-circle-check"})," ",t("contact.formSuccess")]}):u.jsxs("form",{className:"contact-form-page",onSubmit:a,children:[u.jsxs("div",{className:"form-row",children:[u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"name",children:t("contact.inputNameLabel")}),u.jsx("input",{type:"text",id:"name",required:!0,placeholder:t("contact.inputNamePlaceholder"),value:e.name,onChange:s=>n({...e,name:s.target.value})})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"phone",children:t("contact.inputPhoneLabel")}),u.jsx("input",{type:"tel",id:"phone",required:!0,placeholder:t("contact.inputPhonePlaceholder"),value:e.phone,onChange:s=>n({...e,phone:s.target.value})})]})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"email",children:t("contact.inputEmailLabel")}),u.jsx("input",{type:"email",id:"email",placeholder:t("contact.inputEmailPlaceholder"),value:e.email,onChange:s=>n({...e,email:s.target.value})})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"message",children:t("contact.inputMessageLabel")}),u.jsx("textarea",{id:"message",rows:"4",required:!0,placeholder:t("contact.inputMessagePlaceholder"),value:e.message,onChange:s=>n({...e,message:s.target.value})})]}),u.jsxs("button",{type:"submit",className:"btn btn-primary btn-block",children:[u.jsx("i",{className:"fa-brands fa-whatsapp"})," ",t("contact.btnSubmit")]})]}),u.jsx("h3",{className:"sub-heading-gold margin-top-40",children:t("contact.reachHeading")}),u.jsxs("div",{className:"reach-info-grid",children:[u.jsxs("div",{className:"reach-card",children:[u.jsx("i",{className:"fa-solid fa-train"}),u.jsx("h4",{children:t("contact.trainTitle")}),u.jsx("p",{children:t("contact.trainDesc")})]}),u.jsxs("div",{className:"reach-card",children:[u.jsx("i",{className:"fa-solid fa-plane"}),u.jsx("h4",{children:t("contact.flightTitle")}),u.jsx("p",{children:t("contact.flightDesc")})]}),u.jsxs("div",{className:"reach-card",children:[u.jsx("i",{className:"fa-solid fa-bus"}),u.jsx("h4",{children:t("contact.roadTitle")}),u.jsx("p",{children:t("contact.roadDesc")})]})]})]}),u.jsxs("aside",{className:"detail-sidebar",children:[u.jsxs("div",{className:"sidebar-card",children:[u.jsx("h3",{children:t("contact.sidebarTitle")}),u.jsxs("ul",{className:"sidebar-info-list",children:[u.jsxs("li",{children:[u.jsx("i",{className:"fa-solid fa-location-dot"})," ",u.jsx("strong",{children:t("contact.addressLabel")})," ",t("contact.addressValue")]}),u.jsxs("li",{children:[u.jsx("i",{className:"fa-solid fa-phone"})," ",u.jsx("strong",{children:t("contact.phoneLabel")})," ",u.jsx("a",{href:"tel:+919956120169",style:{color:"inherit",fontWeight:"bold"},children:"+91 9956120169"})]}),u.jsxs("li",{children:[u.jsx("i",{className:"fa-solid fa-user"})," ",u.jsx("strong",{children:t("contact.priestLabel")})," ",t("contact.priestValue")]}),u.jsxs("li",{children:[u.jsx("i",{className:"fa-solid fa-envelope"})," ",u.jsx("strong",{children:t("contact.emailLabel")})," ",t("contact.emailValue")]})]})]}),u.jsxs("div",{className:"sidebar-card map-side-box",children:[u.jsx("h3",{children:t("contact.mapTitle")}),u.jsx("iframe",{src:"https://maps.google.com/maps?q=25.3876631,82.8547374&t=&z=15&ie=UTF8&iwloc=&output=embed",width:"100%",height:"200",style:{border:0,borderRadius:"10px"},allowFullScreen:"",loading:"lazy",title:"Google Maps Location"}),u.jsx("a",{href:"https://www.google.com/maps/place/Shri+Rameshwar+Mahadev+Temple+-+Kashi+Panchkroshi+II+(Halt+No:+3)/@25.3876631,82.5663463,11z/data=!4m10!1m2!2m1!1sRameshwar+Mahadev+Temple+Panchkoshi+Marg+Varanasi!3m6!1s0x398fd385c10dfce3:0xba9a2f80b97baaff!8m2!3d25.3876631!4d82.8547374!15sCjFSYW1lc2h3YXIgTWFoYWRldiBUZW1wbGUgUGFuY2hrb3NoaSBNYXJnIFZhcmFuYXNpkgEMaGluZHVfdGVtcGxl4AEA!16s%2Fg%2F124yrbdl5?entry=ttu&g_ep=EgoyMDI2MDcyVi4wIKXMDSoASAFQAw%3D%3D",target:"_blank",rel:"noopener noreferrer",className:"btn btn-secondary btn-block margin-top-10",children:t("contact.btnGoogleMaps")})]})]})]})})]})}function R1(){const{pathname:t}=Ia();return re.useEffect(()=>{window.scrollTo(0,0)},[t]),null}function C1(){return u.jsx(qy,{children:u.jsxs(Wy,{children:[u.jsx(R1,{}),u.jsx(m1,{}),u.jsx(Ky,{}),u.jsxs(ky,{children:[u.jsx(xn,{path:"/",element:u.jsx(g1,{})}),u.jsx(xn,{path:"/intro",element:u.jsx(v1,{})}),u.jsx(xn,{path:"/history",element:u.jsx(_1,{})}),u.jsx(xn,{path:"/yatra",element:u.jsx(x1,{})}),u.jsx(xn,{path:"/gallery",element:u.jsx(y1,{})}),u.jsx(xn,{path:"/timings",element:u.jsx(S1,{})}),u.jsx(xn,{path:"/priest",element:u.jsx(E1,{})}),u.jsx(xn,{path:"/services",element:u.jsx(M1,{})}),u.jsx(xn,{path:"/festivals",element:u.jsx(T1,{})}),u.jsx(xn,{path:"/donate",element:u.jsx(w1,{})}),u.jsx(xn,{path:"/contact",element:u.jsx(A1,{})})]}),u.jsx(Zy,{})]})})}iu.createRoot(document.getElementById("root")).render(u.jsx(gm.StrictMode,{children:u.jsx(C1,{})}));
