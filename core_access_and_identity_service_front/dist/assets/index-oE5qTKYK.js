var Iy=Object.defineProperty;var Uy=(i,e,t)=>e in i?Iy(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Yd=(i,e,t)=>Uy(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(a){if(a.ep)return;a.ep=!0;const c=t(a);fetch(a.href,c)}})();function Qv(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Kd={exports:{}},To={},Zd={exports:{}},At={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var px;function Fy(){if(px)return At;px=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.iterator;function g(B){return B===null||typeof B!="object"?null:(B=x&&B[x]||B["@@iterator"],typeof B=="function"?B:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,A={};function y(B,re,Fe){this.props=B,this.context=re,this.refs=A,this.updater=Fe||M}y.prototype.isReactComponent={},y.prototype.setState=function(B,re){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,re,"setState")},y.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function S(){}S.prototype=y.prototype;function b(B,re,Fe){this.props=B,this.context=re,this.refs=A,this.updater=Fe||M}var T=b.prototype=new S;T.constructor=b,E(T,y.prototype),T.isPureReactComponent=!0;var N=Array.isArray,D=Object.prototype.hasOwnProperty,L={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function w(B,re,Fe){var Te,Ae={},X=null,me=null;if(re!=null)for(Te in re.ref!==void 0&&(me=re.ref),re.key!==void 0&&(X=""+re.key),re)D.call(re,Te)&&!O.hasOwnProperty(Te)&&(Ae[Te]=re[Te]);var fe=arguments.length-2;if(fe===1)Ae.children=Fe;else if(1<fe){for(var we=Array(fe),Oe=0;Oe<fe;Oe++)we[Oe]=arguments[Oe+2];Ae.children=we}if(B&&B.defaultProps)for(Te in fe=B.defaultProps,fe)Ae[Te]===void 0&&(Ae[Te]=fe[Te]);return{$$typeof:i,type:B,key:X,ref:me,props:Ae,_owner:L.current}}function U(B,re){return{$$typeof:i,type:B.type,key:re,ref:B.ref,props:B.props,_owner:B._owner}}function Y(B){return typeof B=="object"&&B!==null&&B.$$typeof===i}function H(B){var re={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(Fe){return re[Fe]})}var ee=/\/+/g;function G(B,re){return typeof B=="object"&&B!==null&&B.key!=null?H(""+B.key):re.toString(36)}function Q(B,re,Fe,Te,Ae){var X=typeof B;(X==="undefined"||X==="boolean")&&(B=null);var me=!1;if(B===null)me=!0;else switch(X){case"string":case"number":me=!0;break;case"object":switch(B.$$typeof){case i:case e:me=!0}}if(me)return me=B,Ae=Ae(me),B=Te===""?"."+G(me,0):Te,N(Ae)?(Fe="",B!=null&&(Fe=B.replace(ee,"$&/")+"/"),Q(Ae,re,Fe,"",function(Oe){return Oe})):Ae!=null&&(Y(Ae)&&(Ae=U(Ae,Fe+(!Ae.key||me&&me.key===Ae.key?"":(""+Ae.key).replace(ee,"$&/")+"/")+B)),re.push(Ae)),1;if(me=0,Te=Te===""?".":Te+":",N(B))for(var fe=0;fe<B.length;fe++){X=B[fe];var we=Te+G(X,fe);me+=Q(X,re,Fe,we,Ae)}else if(we=g(B),typeof we=="function")for(B=we.call(B),fe=0;!(X=B.next()).done;)X=X.value,we=Te+G(X,fe++),me+=Q(X,re,Fe,we,Ae);else if(X==="object")throw re=String(B),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return me}function V(B,re,Fe){if(B==null)return B;var Te=[],Ae=0;return Q(B,Te,"","",function(X){return re.call(Fe,X,Ae++)}),Te}function k(B){if(B._status===-1){var re=B._result;re=re(),re.then(function(Fe){(B._status===0||B._status===-1)&&(B._status=1,B._result=Fe)},function(Fe){(B._status===0||B._status===-1)&&(B._status=2,B._result=Fe)}),B._status===-1&&(B._status=0,B._result=re)}if(B._status===1)return B._result.default;throw B._result}var W={current:null},$={transition:null},le={ReactCurrentDispatcher:W,ReactCurrentBatchConfig:$,ReactCurrentOwner:L};function se(){throw Error("act(...) is not supported in production builds of React.")}return At.Children={map:V,forEach:function(B,re,Fe){V(B,function(){re.apply(this,arguments)},Fe)},count:function(B){var re=0;return V(B,function(){re++}),re},toArray:function(B){return V(B,function(re){return re})||[]},only:function(B){if(!Y(B))throw Error("React.Children.only expected to receive a single React element child.");return B}},At.Component=y,At.Fragment=t,At.Profiler=a,At.PureComponent=b,At.StrictMode=s,At.Suspense=f,At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,At.act=se,At.cloneElement=function(B,re,Fe){if(B==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+B+".");var Te=E({},B.props),Ae=B.key,X=B.ref,me=B._owner;if(re!=null){if(re.ref!==void 0&&(X=re.ref,me=L.current),re.key!==void 0&&(Ae=""+re.key),B.type&&B.type.defaultProps)var fe=B.type.defaultProps;for(we in re)D.call(re,we)&&!O.hasOwnProperty(we)&&(Te[we]=re[we]===void 0&&fe!==void 0?fe[we]:re[we])}var we=arguments.length-2;if(we===1)Te.children=Fe;else if(1<we){fe=Array(we);for(var Oe=0;Oe<we;Oe++)fe[Oe]=arguments[Oe+2];Te.children=fe}return{$$typeof:i,type:B.type,key:Ae,ref:X,props:Te,_owner:me}},At.createContext=function(B){return B={$$typeof:u,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},B.Provider={$$typeof:c,_context:B},B.Consumer=B},At.createElement=w,At.createFactory=function(B){var re=w.bind(null,B);return re.type=B,re},At.createRef=function(){return{current:null}},At.forwardRef=function(B){return{$$typeof:h,render:B}},At.isValidElement=Y,At.lazy=function(B){return{$$typeof:v,_payload:{_status:-1,_result:B},_init:k}},At.memo=function(B,re){return{$$typeof:m,type:B,compare:re===void 0?null:re}},At.startTransition=function(B){var re=$.transition;$.transition={};try{B()}finally{$.transition=re}},At.unstable_act=se,At.useCallback=function(B,re){return W.current.useCallback(B,re)},At.useContext=function(B){return W.current.useContext(B)},At.useDebugValue=function(){},At.useDeferredValue=function(B){return W.current.useDeferredValue(B)},At.useEffect=function(B,re){return W.current.useEffect(B,re)},At.useId=function(){return W.current.useId()},At.useImperativeHandle=function(B,re,Fe){return W.current.useImperativeHandle(B,re,Fe)},At.useInsertionEffect=function(B,re){return W.current.useInsertionEffect(B,re)},At.useLayoutEffect=function(B,re){return W.current.useLayoutEffect(B,re)},At.useMemo=function(B,re){return W.current.useMemo(B,re)},At.useReducer=function(B,re,Fe){return W.current.useReducer(B,re,Fe)},At.useRef=function(B){return W.current.useRef(B)},At.useState=function(B){return W.current.useState(B)},At.useSyncExternalStore=function(B,re,Fe){return W.current.useSyncExternalStore(B,re,Fe)},At.useTransition=function(){return W.current.useTransition()},At.version="18.3.1",At}var mx;function lp(){return mx||(mx=1,Zd.exports=Fy()),Zd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gx;function Oy(){if(gx)return To;gx=1;var i=lp(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(h,f,m){var v,x={},g=null,M=null;m!==void 0&&(g=""+m),f.key!==void 0&&(g=""+f.key),f.ref!==void 0&&(M=f.ref);for(v in f)s.call(f,v)&&!c.hasOwnProperty(v)&&(x[v]=f[v]);if(h&&h.defaultProps)for(v in f=h.defaultProps,f)x[v]===void 0&&(x[v]=f[v]);return{$$typeof:e,type:h,key:g,ref:M,props:x,_owner:a.current}}return To.Fragment=t,To.jsx=u,To.jsxs=u,To}var xx;function ky(){return xx||(xx=1,Kd.exports=Oy()),Kd.exports}var o=ky(),j=lp();const jy=Qv(j);var ic={},Qd={exports:{}},Jn={},Jd={exports:{}},eh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vx;function By(){return vx||(vx=1,(function(i){function e($,le){var se=$.length;$.push(le);e:for(;0<se;){var B=se-1>>>1,re=$[B];if(0<a(re,le))$[B]=le,$[se]=re,se=B;else break e}}function t($){return $.length===0?null:$[0]}function s($){if($.length===0)return null;var le=$[0],se=$.pop();if(se!==le){$[0]=se;e:for(var B=0,re=$.length,Fe=re>>>1;B<Fe;){var Te=2*(B+1)-1,Ae=$[Te],X=Te+1,me=$[X];if(0>a(Ae,se))X<re&&0>a(me,Ae)?($[B]=me,$[X]=se,B=X):($[B]=Ae,$[Te]=se,B=Te);else if(X<re&&0>a(me,se))$[B]=me,$[X]=se,B=X;else break e}}return le}function a($,le){var se=$.sortIndex-le.sortIndex;return se!==0?se:$.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;i.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();i.unstable_now=function(){return u.now()-h}}var f=[],m=[],v=1,x=null,g=3,M=!1,E=!1,A=!1,y=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T($){for(var le=t(m);le!==null;){if(le.callback===null)s(m);else if(le.startTime<=$)s(m),le.sortIndex=le.expirationTime,e(f,le);else break;le=t(m)}}function N($){if(A=!1,T($),!E)if(t(f)!==null)E=!0,k(D);else{var le=t(m);le!==null&&W(N,le.startTime-$)}}function D($,le){E=!1,A&&(A=!1,S(w),w=-1),M=!0;var se=g;try{for(T(le),x=t(f);x!==null&&(!(x.expirationTime>le)||$&&!H());){var B=x.callback;if(typeof B=="function"){x.callback=null,g=x.priorityLevel;var re=B(x.expirationTime<=le);le=i.unstable_now(),typeof re=="function"?x.callback=re:x===t(f)&&s(f),T(le)}else s(f);x=t(f)}if(x!==null)var Fe=!0;else{var Te=t(m);Te!==null&&W(N,Te.startTime-le),Fe=!1}return Fe}finally{x=null,g=se,M=!1}}var L=!1,O=null,w=-1,U=5,Y=-1;function H(){return!(i.unstable_now()-Y<U)}function ee(){if(O!==null){var $=i.unstable_now();Y=$;var le=!0;try{le=O(!0,$)}finally{le?G():(L=!1,O=null)}}else L=!1}var G;if(typeof b=="function")G=function(){b(ee)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,V=Q.port2;Q.port1.onmessage=ee,G=function(){V.postMessage(null)}}else G=function(){y(ee,0)};function k($){O=$,L||(L=!0,G())}function W($,le){w=y(function(){$(i.unstable_now())},le)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function($){$.callback=null},i.unstable_continueExecution=function(){E||M||(E=!0,k(D))},i.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<$?Math.floor(1e3/$):5},i.unstable_getCurrentPriorityLevel=function(){return g},i.unstable_getFirstCallbackNode=function(){return t(f)},i.unstable_next=function($){switch(g){case 1:case 2:case 3:var le=3;break;default:le=g}var se=g;g=le;try{return $()}finally{g=se}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function($,le){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var se=g;g=$;try{return le()}finally{g=se}},i.unstable_scheduleCallback=function($,le,se){var B=i.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?B+se:B):se=B,$){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=se+re,$={id:v++,callback:le,priorityLevel:$,startTime:se,expirationTime:re,sortIndex:-1},se>B?($.sortIndex=se,e(m,$),t(f)===null&&$===t(m)&&(A?(S(w),w=-1):A=!0,W(N,se-B))):($.sortIndex=re,e(f,$),E||M||(E=!0,k(D))),$},i.unstable_shouldYield=H,i.unstable_wrapCallback=function($){var le=g;return function(){var se=g;g=le;try{return $.apply(this,arguments)}finally{g=se}}}})(eh)),eh}var _x;function zy(){return _x||(_x=1,Jd.exports=By()),Jd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yx;function Hy(){if(yx)return Jn;yx=1;var i=lp(),e=zy();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function c(n,r){u(n,r),u(n+"Capture",r)}function u(n,r){for(a[n]=r,n=0;n<r.length;n++)s.add(r[n])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},x={};function g(n){return f.call(x,n)?!0:f.call(v,n)?!1:m.test(n)?x[n]=!0:(v[n]=!0,!1)}function M(n,r,l,d){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return d?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,r,l,d){if(r===null||typeof r>"u"||M(n,r,l,d))return!0;if(d)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function A(n,r,l,d,p,_,R){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=d,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=_,this.removeEmptyString=R}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new A(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];y[r]=new A(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new A(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new A(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new A(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new A(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new A(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new A(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new A(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function b(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(S,b);y[r]=new A(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(S,b);y[r]=new A(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(S,b);y[r]=new A(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new A(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new A(n,1,!1,n.toLowerCase(),null,!0,!0)});function T(n,r,l,d){var p=y.hasOwnProperty(r)?y[r]:null;(p!==null?p.type!==0:d||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(E(r,l,p,d)&&(l=null),d||p===null?g(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):p.mustUseProperty?n[p.propertyName]=l===null?p.type===3?!1:"":l:(r=p.attributeName,d=p.attributeNamespace,l===null?n.removeAttribute(r):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,d?n.setAttributeNS(d,r,l):n.setAttribute(r,l))))}var N=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,D=Symbol.for("react.element"),L=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),Y=Symbol.for("react.provider"),H=Symbol.for("react.context"),ee=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),Q=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),W=Symbol.for("react.offscreen"),$=Symbol.iterator;function le(n){return n===null||typeof n!="object"?null:(n=$&&n[$]||n["@@iterator"],typeof n=="function"?n:null)}var se=Object.assign,B;function re(n){if(B===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);B=r&&r[1]||""}return`
`+B+n}var Fe=!1;function Te(n,r){if(!n||Fe)return"";Fe=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(pe){var d=pe}Reflect.construct(n,[],r)}else{try{r.call()}catch(pe){d=pe}n.call(r.prototype)}else{try{throw Error()}catch(pe){d=pe}n()}}catch(pe){if(pe&&d&&typeof pe.stack=="string"){for(var p=pe.stack.split(`
`),_=d.stack.split(`
`),R=p.length-1,z=_.length-1;1<=R&&0<=z&&p[R]!==_[z];)z--;for(;1<=R&&0<=z;R--,z--)if(p[R]!==_[z]){if(R!==1||z!==1)do if(R--,z--,0>z||p[R]!==_[z]){var K=`
`+p[R].replace(" at new "," at ");return n.displayName&&K.includes("<anonymous>")&&(K=K.replace("<anonymous>",n.displayName)),K}while(1<=R&&0<=z);break}}}finally{Fe=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?re(n):""}function Ae(n){switch(n.tag){case 5:return re(n.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return n=Te(n.type,!1),n;case 11:return n=Te(n.type.render,!1),n;case 1:return n=Te(n.type,!0),n;default:return""}}function X(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case L:return"Portal";case U:return"Profiler";case w:return"StrictMode";case G:return"Suspense";case Q:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case H:return(n.displayName||"Context")+".Consumer";case Y:return(n._context.displayName||"Context")+".Provider";case ee:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case V:return r=n.displayName||null,r!==null?r:X(n.type)||"Memo";case k:r=n._payload,n=n._init;try{return X(n(r))}catch{}}return null}function me(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return X(r);case 8:return r===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function fe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function we(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Oe(n){var r=we(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),d=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,_=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return p.call(this)},set:function(R){d=""+R,_.call(this,R)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return d},setValue:function(R){d=""+R},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function et(n){n._valueTracker||(n._valueTracker=Oe(n))}function Ze(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),d="";return n&&(d=we(n)?n.checked?"true":"false":n.value),n=d,n!==l?(r.setValue(n),!0):!1}function qe(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ke(n,r){var l=r.checked;return se({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function St(n,r){var l=r.defaultValue==null?"":r.defaultValue,d=r.checked!=null?r.checked:r.defaultChecked;l=fe(r.value!=null?r.value:l),n._wrapperState={initialChecked:d,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function at(n,r){r=r.checked,r!=null&&T(n,"checked",r,!1)}function Pt(n,r){at(n,r);var l=fe(r.value),d=r.type;if(l!=null)d==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(d==="submit"||d==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?Zt(n,r.type,l):r.hasOwnProperty("defaultValue")&&Zt(n,r.type,fe(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Tt(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var d=r.type;if(!(d!=="submit"&&d!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function Zt(n,r,l){(r!=="number"||qe(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var J=Array.isArray;function zt(n,r,l,d){if(n=n.options,r){r={};for(var p=0;p<l.length;p++)r["$"+l[p]]=!0;for(l=0;l<n.length;l++)p=r.hasOwnProperty("$"+n[l].value),n[l].selected!==p&&(n[l].selected=p),p&&d&&(n[l].defaultSelected=!0)}else{for(l=""+fe(l),r=null,p=0;p<n.length;p++){if(n[p].value===l){n[p].selected=!0,d&&(n[p].defaultSelected=!0);return}r!==null||n[p].disabled||(r=n[p])}r!==null&&(r.selected=!0)}}function mt(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Ft(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(J(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:fe(l)}}function ke(n,r){var l=fe(r.value),d=fe(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),d!=null&&(n.defaultValue=""+d)}function Vt(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function I(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function C(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?I(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ae,ve=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,d,p){MSApp.execUnsafeLocalFunction(function(){return n(r,l,d,p)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(ae=ae||document.createElement("div"),ae.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=ae.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Me(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var Re={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ie=["Webkit","ms","Moz","O"];Object.keys(Re).forEach(function(n){Ie.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Re[r]=Re[n]})});function ge(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||Re.hasOwnProperty(n)&&Re[n]?(""+r).trim():r+"px"}function _e(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var d=l.indexOf("--")===0,p=ge(l,r[l],d);l==="float"&&(l="cssFloat"),d?n.setProperty(l,p):n[l]=p}}var je=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function F(n,r){if(r){if(je[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function q(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Se=null;function Xe(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ct=null,pt=null,Z=null;function Ne(n){if(n=co(n)){if(typeof ct!="function")throw Error(t(280));var r=n.stateNode;r&&(r=vl(r),ct(n.stateNode,n.type,r))}}function xe(n){pt?Z?Z.push(n):Z=[n]:pt=n}function ze(){if(pt){var n=pt,r=Z;if(Z=pt=null,Ne(n),r)for(n=0;n<r.length;n++)Ne(r[n])}}function Pe(n,r){return n(r)}function ye(){}var Ve=!1;function ht(n,r,l){if(Ve)return n(r,l);Ve=!0;try{return Pe(n,r,l)}finally{Ve=!1,(pt!==null||Z!==null)&&(ye(),ze())}}function ot(n,r){var l=n.stateNode;if(l===null)return null;var d=vl(l);if(d===null)return null;l=d[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(n=n.type,d=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!d;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var wt=!1;if(h)try{var jn={};Object.defineProperty(jn,"passive",{get:function(){wt=!0}}),window.addEventListener("test",jn,jn),window.removeEventListener("test",jn,jn)}catch{wt=!1}function pi(n,r,l,d,p,_,R,z,K){var pe=Array.prototype.slice.call(arguments,3);try{r.apply(l,pe)}catch(be){this.onError(be)}}var ir=!1,Us=null,os=!1,Fs=null,rr={onError:function(n){ir=!0,Us=n}};function Ha(n,r,l,d,p,_,R,z,K){ir=!1,Us=null,pi.apply(rr,arguments)}function tl(n,r,l,d,p,_,R,z,K){if(Ha.apply(this,arguments),ir){if(ir){var pe=Us;ir=!1,Us=null}else throw Error(t(198));os||(os=!0,Fs=pe)}}function zi(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function ls(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Ga(n){if(zi(n)!==n)throw Error(t(188))}function Os(n){var r=n.alternate;if(!r){if(r=zi(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,d=r;;){var p=l.return;if(p===null)break;var _=p.alternate;if(_===null){if(d=p.return,d!==null){l=d;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===l)return Ga(p),n;if(_===d)return Ga(p),r;_=_.sibling}throw Error(t(188))}if(l.return!==d.return)l=p,d=_;else{for(var R=!1,z=p.child;z;){if(z===l){R=!0,l=p,d=_;break}if(z===d){R=!0,d=p,l=_;break}z=z.sibling}if(!R){for(z=_.child;z;){if(z===l){R=!0,l=_,d=p;break}if(z===d){R=!0,d=_,l=p;break}z=z.sibling}if(!R)throw Error(t(189))}}if(l.alternate!==d)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function Va(n){return n=Os(n),n!==null?Wa(n):null}function Wa(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Wa(n);if(r!==null)return r;n=n.sibling}return null}var nl=e.unstable_scheduleCallback,il=e.unstable_cancelCallback,vu=e.unstable_shouldYield,_u=e.unstable_requestPaint,tn=e.unstable_now,yu=e.unstable_getCurrentPriorityLevel,Xa=e.unstable_ImmediatePriority,P=e.unstable_UserBlockingPriority,ie=e.unstable_NormalPriority,he=e.unstable_LowPriority,ue=e.unstable_IdlePriority,ce=null,Ue=null;function We(n){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(ce,n,void 0,(n.current.flags&128)===128)}catch{}}var De=Math.clz32?Math.clz32:xt,Qe=Math.log,rt=Math.LN2;function xt(n){return n>>>=0,n===0?32:31-(Qe(n)/rt|0)|0}var vt=64,tt=4194304;function Lt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Wt(n,r){var l=n.pendingLanes;if(l===0)return 0;var d=0,p=n.suspendedLanes,_=n.pingedLanes,R=l&268435455;if(R!==0){var z=R&~p;z!==0?d=Lt(z):(_&=R,_!==0&&(d=Lt(_)))}else R=l&~p,R!==0?d=Lt(R):_!==0&&(d=Lt(_));if(d===0)return 0;if(r!==0&&r!==d&&(r&p)===0&&(p=d&-d,_=r&-r,p>=_||p===16&&(_&4194240)!==0))return r;if((d&4)!==0&&(d|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=d;0<r;)l=31-De(r),p=1<<l,d|=n[l],r&=~p;return d}function Qt(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jt(n,r){for(var l=n.suspendedLanes,d=n.pingedLanes,p=n.expirationTimes,_=n.pendingLanes;0<_;){var R=31-De(_),z=1<<R,K=p[R];K===-1?((z&l)===0||(z&d)!==0)&&(p[R]=Qt(z,r)):K<=r&&(n.expiredLanes|=z),_&=~z}}function dn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function He(){var n=vt;return vt<<=1,(vt&4194240)===0&&(vt=64),n}function bn(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function Et(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-De(r),n[r]=l}function Xn(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var d=n.eventTimes;for(n=n.expirationTimes;0<l;){var p=31-De(l),_=1<<p;r[p]=0,d[p]=-1,n[p]=-1,l&=~_}}function $n(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var d=31-De(l),p=1<<d;p&r|n[d]&r&&(n[d]|=r),l&=~p}}var Ct=0;function sr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Ot,qt,Ci,Bt,Ai,Hi=!1,cs=[],wr=null,Cr=null,Ar=null,$a=new Map,qa=new Map,Rr=[],n_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zp(n,r){switch(n){case"focusin":case"focusout":wr=null;break;case"dragenter":case"dragleave":Cr=null;break;case"mouseover":case"mouseout":Ar=null;break;case"pointerover":case"pointerout":$a.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":qa.delete(r.pointerId)}}function Ya(n,r,l,d,p,_){return n===null||n.nativeEvent!==_?(n={blockedOn:r,domEventName:l,eventSystemFlags:d,nativeEvent:_,targetContainers:[p]},r!==null&&(r=co(r),r!==null&&qt(r)),n):(n.eventSystemFlags|=d,r=n.targetContainers,p!==null&&r.indexOf(p)===-1&&r.push(p),n)}function i_(n,r,l,d,p){switch(r){case"focusin":return wr=Ya(wr,n,r,l,d,p),!0;case"dragenter":return Cr=Ya(Cr,n,r,l,d,p),!0;case"mouseover":return Ar=Ya(Ar,n,r,l,d,p),!0;case"pointerover":var _=p.pointerId;return $a.set(_,Ya($a.get(_)||null,n,r,l,d,p)),!0;case"gotpointercapture":return _=p.pointerId,qa.set(_,Ya(qa.get(_)||null,n,r,l,d,p)),!0}return!1}function Qp(n){var r=us(n.target);if(r!==null){var l=zi(r);if(l!==null){if(r=l.tag,r===13){if(r=ls(l),r!==null){n.blockedOn=r,Ai(n.priority,function(){Ci(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function rl(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=Mu(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var d=new l.constructor(l.type,l);Se=d,l.target.dispatchEvent(d),Se=null}else return r=co(l),r!==null&&qt(r),n.blockedOn=l,!1;r.shift()}return!0}function Jp(n,r,l){rl(n)&&l.delete(r)}function r_(){Hi=!1,wr!==null&&rl(wr)&&(wr=null),Cr!==null&&rl(Cr)&&(Cr=null),Ar!==null&&rl(Ar)&&(Ar=null),$a.forEach(Jp),qa.forEach(Jp)}function Ka(n,r){n.blockedOn===r&&(n.blockedOn=null,Hi||(Hi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,r_)))}function Za(n){function r(p){return Ka(p,n)}if(0<cs.length){Ka(cs[0],n);for(var l=1;l<cs.length;l++){var d=cs[l];d.blockedOn===n&&(d.blockedOn=null)}}for(wr!==null&&Ka(wr,n),Cr!==null&&Ka(Cr,n),Ar!==null&&Ka(Ar,n),$a.forEach(r),qa.forEach(r),l=0;l<Rr.length;l++)d=Rr[l],d.blockedOn===n&&(d.blockedOn=null);for(;0<Rr.length&&(l=Rr[0],l.blockedOn===null);)Qp(l),l.blockedOn===null&&Rr.shift()}var ks=N.ReactCurrentBatchConfig,sl=!0;function s_(n,r,l,d){var p=Ct,_=ks.transition;ks.transition=null;try{Ct=1,Su(n,r,l,d)}finally{Ct=p,ks.transition=_}}function a_(n,r,l,d){var p=Ct,_=ks.transition;ks.transition=null;try{Ct=4,Su(n,r,l,d)}finally{Ct=p,ks.transition=_}}function Su(n,r,l,d){if(sl){var p=Mu(n,r,l,d);if(p===null)ju(n,r,d,al,l),Zp(n,d);else if(i_(p,n,r,l,d))d.stopPropagation();else if(Zp(n,d),r&4&&-1<n_.indexOf(n)){for(;p!==null;){var _=co(p);if(_!==null&&Ot(_),_=Mu(n,r,l,d),_===null&&ju(n,r,d,al,l),_===p)break;p=_}p!==null&&d.stopPropagation()}else ju(n,r,d,null,l)}}var al=null;function Mu(n,r,l,d){if(al=null,n=Xe(d),n=us(n),n!==null)if(r=zi(n),r===null)n=null;else if(l=r.tag,l===13){if(n=ls(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return al=n,null}function em(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yu()){case Xa:return 1;case P:return 4;case ie:case he:return 16;case ue:return 536870912;default:return 16}default:return 16}}var Nr=null,Eu=null,ol=null;function tm(){if(ol)return ol;var n,r=Eu,l=r.length,d,p="value"in Nr?Nr.value:Nr.textContent,_=p.length;for(n=0;n<l&&r[n]===p[n];n++);var R=l-n;for(d=1;d<=R&&r[l-d]===p[_-d];d++);return ol=p.slice(n,1<d?1-d:void 0)}function ll(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function cl(){return!0}function nm(){return!1}function ri(n){function r(l,d,p,_,R){this._reactName=l,this._targetInst=p,this.type=d,this.nativeEvent=_,this.target=R,this.currentTarget=null;for(var z in n)n.hasOwnProperty(z)&&(l=n[z],this[z]=l?l(_):_[z]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?cl:nm,this.isPropagationStopped=nm,this}return se(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=cl)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=cl)},persist:function(){},isPersistent:cl}),r}var js={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bu=ri(js),Qa=se({},js,{view:0,detail:0}),o_=ri(Qa),Tu,wu,Ja,ul=se({},Qa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Au,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ja&&(Ja&&n.type==="mousemove"?(Tu=n.screenX-Ja.screenX,wu=n.screenY-Ja.screenY):wu=Tu=0,Ja=n),Tu)},movementY:function(n){return"movementY"in n?n.movementY:wu}}),im=ri(ul),l_=se({},ul,{dataTransfer:0}),c_=ri(l_),u_=se({},Qa,{relatedTarget:0}),Cu=ri(u_),d_=se({},js,{animationName:0,elapsedTime:0,pseudoElement:0}),h_=ri(d_),f_=se({},js,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),p_=ri(f_),m_=se({},js,{data:0}),rm=ri(m_),g_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},x_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},v_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function __(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=v_[n])?!!r[n]:!1}function Au(){return __}var y_=se({},Qa,{key:function(n){if(n.key){var r=g_[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=ll(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?x_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Au,charCode:function(n){return n.type==="keypress"?ll(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ll(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),S_=ri(y_),M_=se({},ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sm=ri(M_),E_=se({},Qa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Au}),b_=ri(E_),T_=se({},js,{propertyName:0,elapsedTime:0,pseudoElement:0}),w_=ri(T_),C_=se({},ul,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),A_=ri(C_),R_=[9,13,27,32],Ru=h&&"CompositionEvent"in window,eo=null;h&&"documentMode"in document&&(eo=document.documentMode);var N_=h&&"TextEvent"in window&&!eo,am=h&&(!Ru||eo&&8<eo&&11>=eo),om=" ",lm=!1;function cm(n,r){switch(n){case"keyup":return R_.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function um(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Bs=!1;function P_(n,r){switch(n){case"compositionend":return um(r);case"keypress":return r.which!==32?null:(lm=!0,om);case"textInput":return n=r.data,n===om&&lm?null:n;default:return null}}function L_(n,r){if(Bs)return n==="compositionend"||!Ru&&cm(n,r)?(n=tm(),ol=Eu=Nr=null,Bs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return am&&r.locale!=="ko"?null:r.data;default:return null}}var D_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dm(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!D_[n.type]:r==="textarea"}function hm(n,r,l,d){xe(d),r=ml(r,"onChange"),0<r.length&&(l=new bu("onChange","change",null,l,d),n.push({event:l,listeners:r}))}var to=null,no=null;function I_(n){Nm(n,0)}function dl(n){var r=Ws(n);if(Ze(r))return n}function U_(n,r){if(n==="change")return r}var fm=!1;if(h){var Nu;if(h){var Pu="oninput"in document;if(!Pu){var pm=document.createElement("div");pm.setAttribute("oninput","return;"),Pu=typeof pm.oninput=="function"}Nu=Pu}else Nu=!1;fm=Nu&&(!document.documentMode||9<document.documentMode)}function mm(){to&&(to.detachEvent("onpropertychange",gm),no=to=null)}function gm(n){if(n.propertyName==="value"&&dl(no)){var r=[];hm(r,no,n,Xe(n)),ht(I_,r)}}function F_(n,r,l){n==="focusin"?(mm(),to=r,no=l,to.attachEvent("onpropertychange",gm)):n==="focusout"&&mm()}function O_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return dl(no)}function k_(n,r){if(n==="click")return dl(r)}function j_(n,r){if(n==="input"||n==="change")return dl(r)}function B_(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Ri=typeof Object.is=="function"?Object.is:B_;function io(n,r){if(Ri(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),d=Object.keys(r);if(l.length!==d.length)return!1;for(d=0;d<l.length;d++){var p=l[d];if(!f.call(r,p)||!Ri(n[p],r[p]))return!1}return!0}function xm(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function vm(n,r){var l=xm(n);n=0;for(var d;l;){if(l.nodeType===3){if(d=n+l.textContent.length,n<=r&&d>=r)return{node:l,offset:r-n};n=d}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=xm(l)}}function _m(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?_m(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function ym(){for(var n=window,r=qe();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=qe(n.document)}return r}function Lu(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function z_(n){var r=ym(),l=n.focusedElem,d=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&_m(l.ownerDocument.documentElement,l)){if(d!==null&&Lu(l)){if(r=d.start,n=d.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var p=l.textContent.length,_=Math.min(d.start,p);d=d.end===void 0?_:Math.min(d.end,p),!n.extend&&_>d&&(p=d,d=_,_=p),p=vm(l,_);var R=vm(l,d);p&&R&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==R.node||n.focusOffset!==R.offset)&&(r=r.createRange(),r.setStart(p.node,p.offset),n.removeAllRanges(),_>d?(n.addRange(r),n.extend(R.node,R.offset)):(r.setEnd(R.node,R.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var H_=h&&"documentMode"in document&&11>=document.documentMode,zs=null,Du=null,ro=null,Iu=!1;function Sm(n,r,l){var d=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Iu||zs==null||zs!==qe(d)||(d=zs,"selectionStart"in d&&Lu(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),ro&&io(ro,d)||(ro=d,d=ml(Du,"onSelect"),0<d.length&&(r=new bu("onSelect","select",null,r,l),n.push({event:r,listeners:d}),r.target=zs)))}function hl(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var Hs={animationend:hl("Animation","AnimationEnd"),animationiteration:hl("Animation","AnimationIteration"),animationstart:hl("Animation","AnimationStart"),transitionend:hl("Transition","TransitionEnd")},Uu={},Mm={};h&&(Mm=document.createElement("div").style,"AnimationEvent"in window||(delete Hs.animationend.animation,delete Hs.animationiteration.animation,delete Hs.animationstart.animation),"TransitionEvent"in window||delete Hs.transitionend.transition);function fl(n){if(Uu[n])return Uu[n];if(!Hs[n])return n;var r=Hs[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in Mm)return Uu[n]=r[l];return n}var Em=fl("animationend"),bm=fl("animationiteration"),Tm=fl("animationstart"),wm=fl("transitionend"),Cm=new Map,Am="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pr(n,r){Cm.set(n,r),c(r,[n])}for(var Fu=0;Fu<Am.length;Fu++){var Ou=Am[Fu],G_=Ou.toLowerCase(),V_=Ou[0].toUpperCase()+Ou.slice(1);Pr(G_,"on"+V_)}Pr(Em,"onAnimationEnd"),Pr(bm,"onAnimationIteration"),Pr(Tm,"onAnimationStart"),Pr("dblclick","onDoubleClick"),Pr("focusin","onFocus"),Pr("focusout","onBlur"),Pr(wm,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var so="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),W_=new Set("cancel close invalid load scroll toggle".split(" ").concat(so));function Rm(n,r,l){var d=n.type||"unknown-event";n.currentTarget=l,tl(d,r,void 0,n),n.currentTarget=null}function Nm(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var d=n[l],p=d.event;d=d.listeners;e:{var _=void 0;if(r)for(var R=d.length-1;0<=R;R--){var z=d[R],K=z.instance,pe=z.currentTarget;if(z=z.listener,K!==_&&p.isPropagationStopped())break e;Rm(p,z,pe),_=K}else for(R=0;R<d.length;R++){if(z=d[R],K=z.instance,pe=z.currentTarget,z=z.listener,K!==_&&p.isPropagationStopped())break e;Rm(p,z,pe),_=K}}}if(os)throw n=Fs,os=!1,Fs=null,n}function Yt(n,r){var l=r[Wu];l===void 0&&(l=r[Wu]=new Set);var d=n+"__bubble";l.has(d)||(Pm(r,n,2,!1),l.add(d))}function ku(n,r,l){var d=0;r&&(d|=4),Pm(l,n,d,r)}var pl="_reactListening"+Math.random().toString(36).slice(2);function ao(n){if(!n[pl]){n[pl]=!0,s.forEach(function(l){l!=="selectionchange"&&(W_.has(l)||ku(l,!1,n),ku(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[pl]||(r[pl]=!0,ku("selectionchange",!1,r))}}function Pm(n,r,l,d){switch(em(r)){case 1:var p=s_;break;case 4:p=a_;break;default:p=Su}l=p.bind(null,r,l,n),p=void 0,!wt||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(p=!0),d?p!==void 0?n.addEventListener(r,l,{capture:!0,passive:p}):n.addEventListener(r,l,!0):p!==void 0?n.addEventListener(r,l,{passive:p}):n.addEventListener(r,l,!1)}function ju(n,r,l,d,p){var _=d;if((r&1)===0&&(r&2)===0&&d!==null)e:for(;;){if(d===null)return;var R=d.tag;if(R===3||R===4){var z=d.stateNode.containerInfo;if(z===p||z.nodeType===8&&z.parentNode===p)break;if(R===4)for(R=d.return;R!==null;){var K=R.tag;if((K===3||K===4)&&(K=R.stateNode.containerInfo,K===p||K.nodeType===8&&K.parentNode===p))return;R=R.return}for(;z!==null;){if(R=us(z),R===null)return;if(K=R.tag,K===5||K===6){d=_=R;continue e}z=z.parentNode}}d=d.return}ht(function(){var pe=_,be=Xe(l),Ce=[];e:{var Ee=Cm.get(n);if(Ee!==void 0){var Ge=bu,Ye=n;switch(n){case"keypress":if(ll(l)===0)break e;case"keydown":case"keyup":Ge=S_;break;case"focusin":Ye="focus",Ge=Cu;break;case"focusout":Ye="blur",Ge=Cu;break;case"beforeblur":case"afterblur":Ge=Cu;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ge=im;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ge=c_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ge=b_;break;case Em:case bm:case Tm:Ge=h_;break;case wm:Ge=w_;break;case"scroll":Ge=o_;break;case"wheel":Ge=A_;break;case"copy":case"cut":case"paste":Ge=p_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ge=sm}var Je=(r&4)!==0,ln=!Je&&n==="scroll",oe=Je?Ee!==null?Ee+"Capture":null:Ee;Je=[];for(var te=pe,de;te!==null;){de=te;var Le=de.stateNode;if(de.tag===5&&Le!==null&&(de=Le,oe!==null&&(Le=ot(te,oe),Le!=null&&Je.push(oo(te,Le,de)))),ln)break;te=te.return}0<Je.length&&(Ee=new Ge(Ee,Ye,null,l,be),Ce.push({event:Ee,listeners:Je}))}}if((r&7)===0){e:{if(Ee=n==="mouseover"||n==="pointerover",Ge=n==="mouseout"||n==="pointerout",Ee&&l!==Se&&(Ye=l.relatedTarget||l.fromElement)&&(us(Ye)||Ye[ar]))break e;if((Ge||Ee)&&(Ee=be.window===be?be:(Ee=be.ownerDocument)?Ee.defaultView||Ee.parentWindow:window,Ge?(Ye=l.relatedTarget||l.toElement,Ge=pe,Ye=Ye?us(Ye):null,Ye!==null&&(ln=zi(Ye),Ye!==ln||Ye.tag!==5&&Ye.tag!==6)&&(Ye=null)):(Ge=null,Ye=pe),Ge!==Ye)){if(Je=im,Le="onMouseLeave",oe="onMouseEnter",te="mouse",(n==="pointerout"||n==="pointerover")&&(Je=sm,Le="onPointerLeave",oe="onPointerEnter",te="pointer"),ln=Ge==null?Ee:Ws(Ge),de=Ye==null?Ee:Ws(Ye),Ee=new Je(Le,te+"leave",Ge,l,be),Ee.target=ln,Ee.relatedTarget=de,Le=null,us(be)===pe&&(Je=new Je(oe,te+"enter",Ye,l,be),Je.target=de,Je.relatedTarget=ln,Le=Je),ln=Le,Ge&&Ye)t:{for(Je=Ge,oe=Ye,te=0,de=Je;de;de=Gs(de))te++;for(de=0,Le=oe;Le;Le=Gs(Le))de++;for(;0<te-de;)Je=Gs(Je),te--;for(;0<de-te;)oe=Gs(oe),de--;for(;te--;){if(Je===oe||oe!==null&&Je===oe.alternate)break t;Je=Gs(Je),oe=Gs(oe)}Je=null}else Je=null;Ge!==null&&Lm(Ce,Ee,Ge,Je,!1),Ye!==null&&ln!==null&&Lm(Ce,ln,Ye,Je,!0)}}e:{if(Ee=pe?Ws(pe):window,Ge=Ee.nodeName&&Ee.nodeName.toLowerCase(),Ge==="select"||Ge==="input"&&Ee.type==="file")var it=U_;else if(dm(Ee))if(fm)it=j_;else{it=O_;var ut=F_}else(Ge=Ee.nodeName)&&Ge.toLowerCase()==="input"&&(Ee.type==="checkbox"||Ee.type==="radio")&&(it=k_);if(it&&(it=it(n,pe))){hm(Ce,it,l,be);break e}ut&&ut(n,Ee,pe),n==="focusout"&&(ut=Ee._wrapperState)&&ut.controlled&&Ee.type==="number"&&Zt(Ee,"number",Ee.value)}switch(ut=pe?Ws(pe):window,n){case"focusin":(dm(ut)||ut.contentEditable==="true")&&(zs=ut,Du=pe,ro=null);break;case"focusout":ro=Du=zs=null;break;case"mousedown":Iu=!0;break;case"contextmenu":case"mouseup":case"dragend":Iu=!1,Sm(Ce,l,be);break;case"selectionchange":if(H_)break;case"keydown":case"keyup":Sm(Ce,l,be)}var dt;if(Ru)e:{switch(n){case"compositionstart":var gt="onCompositionStart";break e;case"compositionend":gt="onCompositionEnd";break e;case"compositionupdate":gt="onCompositionUpdate";break e}gt=void 0}else Bs?cm(n,l)&&(gt="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(gt="onCompositionStart");gt&&(am&&l.locale!=="ko"&&(Bs||gt!=="onCompositionStart"?gt==="onCompositionEnd"&&Bs&&(dt=tm()):(Nr=be,Eu="value"in Nr?Nr.value:Nr.textContent,Bs=!0)),ut=ml(pe,gt),0<ut.length&&(gt=new rm(gt,n,null,l,be),Ce.push({event:gt,listeners:ut}),dt?gt.data=dt:(dt=um(l),dt!==null&&(gt.data=dt)))),(dt=N_?P_(n,l):L_(n,l))&&(pe=ml(pe,"onBeforeInput"),0<pe.length&&(be=new rm("onBeforeInput","beforeinput",null,l,be),Ce.push({event:be,listeners:pe}),be.data=dt))}Nm(Ce,r)})}function oo(n,r,l){return{instance:n,listener:r,currentTarget:l}}function ml(n,r){for(var l=r+"Capture",d=[];n!==null;){var p=n,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=ot(n,l),_!=null&&d.unshift(oo(n,_,p)),_=ot(n,r),_!=null&&d.push(oo(n,_,p))),n=n.return}return d}function Gs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Lm(n,r,l,d,p){for(var _=r._reactName,R=[];l!==null&&l!==d;){var z=l,K=z.alternate,pe=z.stateNode;if(K!==null&&K===d)break;z.tag===5&&pe!==null&&(z=pe,p?(K=ot(l,_),K!=null&&R.unshift(oo(l,K,z))):p||(K=ot(l,_),K!=null&&R.push(oo(l,K,z)))),l=l.return}R.length!==0&&n.push({event:r,listeners:R})}var X_=/\r\n?/g,$_=/\u0000|\uFFFD/g;function Dm(n){return(typeof n=="string"?n:""+n).replace(X_,`
`).replace($_,"")}function gl(n,r,l){if(r=Dm(r),Dm(n)!==r&&l)throw Error(t(425))}function xl(){}var Bu=null,zu=null;function Hu(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Gu=typeof setTimeout=="function"?setTimeout:void 0,q_=typeof clearTimeout=="function"?clearTimeout:void 0,Im=typeof Promise=="function"?Promise:void 0,Y_=typeof queueMicrotask=="function"?queueMicrotask:typeof Im<"u"?function(n){return Im.resolve(null).then(n).catch(K_)}:Gu;function K_(n){setTimeout(function(){throw n})}function Vu(n,r){var l=r,d=0;do{var p=l.nextSibling;if(n.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(d===0){n.removeChild(p),Za(r);return}d--}else l!=="$"&&l!=="$?"&&l!=="$!"||d++;l=p}while(l);Za(r)}function Lr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Um(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var Vs=Math.random().toString(36).slice(2),Gi="__reactFiber$"+Vs,lo="__reactProps$"+Vs,ar="__reactContainer$"+Vs,Wu="__reactEvents$"+Vs,Z_="__reactListeners$"+Vs,Q_="__reactHandles$"+Vs;function us(n){var r=n[Gi];if(r)return r;for(var l=n.parentNode;l;){if(r=l[ar]||l[Gi]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=Um(n);n!==null;){if(l=n[Gi])return l;n=Um(n)}return r}n=l,l=n.parentNode}return null}function co(n){return n=n[Gi]||n[ar],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ws(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function vl(n){return n[lo]||null}var Xu=[],Xs=-1;function Dr(n){return{current:n}}function Kt(n){0>Xs||(n.current=Xu[Xs],Xu[Xs]=null,Xs--)}function Xt(n,r){Xs++,Xu[Xs]=n.current,n.current=r}var Ir={},An=Dr(Ir),qn=Dr(!1),ds=Ir;function $s(n,r){var l=n.type.contextTypes;if(!l)return Ir;var d=n.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===r)return d.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in l)p[_]=r[_];return d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=p),p}function Yn(n){return n=n.childContextTypes,n!=null}function _l(){Kt(qn),Kt(An)}function Fm(n,r,l){if(An.current!==Ir)throw Error(t(168));Xt(An,r),Xt(qn,l)}function Om(n,r,l){var d=n.stateNode;if(r=r.childContextTypes,typeof d.getChildContext!="function")return l;d=d.getChildContext();for(var p in d)if(!(p in r))throw Error(t(108,me(n)||"Unknown",p));return se({},l,d)}function yl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ir,ds=An.current,Xt(An,n),Xt(qn,qn.current),!0}function km(n,r,l){var d=n.stateNode;if(!d)throw Error(t(169));l?(n=Om(n,r,ds),d.__reactInternalMemoizedMergedChildContext=n,Kt(qn),Kt(An),Xt(An,n)):Kt(qn),Xt(qn,l)}var or=null,Sl=!1,$u=!1;function jm(n){or===null?or=[n]:or.push(n)}function J_(n){Sl=!0,jm(n)}function Ur(){if(!$u&&or!==null){$u=!0;var n=0,r=Ct;try{var l=or;for(Ct=1;n<l.length;n++){var d=l[n];do d=d(!0);while(d!==null)}or=null,Sl=!1}catch(p){throw or!==null&&(or=or.slice(n+1)),nl(Xa,Ur),p}finally{Ct=r,$u=!1}}return null}var qs=[],Ys=0,Ml=null,El=0,mi=[],gi=0,hs=null,lr=1,cr="";function fs(n,r){qs[Ys++]=El,qs[Ys++]=Ml,Ml=n,El=r}function Bm(n,r,l){mi[gi++]=lr,mi[gi++]=cr,mi[gi++]=hs,hs=n;var d=lr;n=cr;var p=32-De(d)-1;d&=~(1<<p),l+=1;var _=32-De(r)+p;if(30<_){var R=p-p%5;_=(d&(1<<R)-1).toString(32),d>>=R,p-=R,lr=1<<32-De(r)+p|l<<p|d,cr=_+n}else lr=1<<_|l<<p|d,cr=n}function qu(n){n.return!==null&&(fs(n,1),Bm(n,1,0))}function Yu(n){for(;n===Ml;)Ml=qs[--Ys],qs[Ys]=null,El=qs[--Ys],qs[Ys]=null;for(;n===hs;)hs=mi[--gi],mi[gi]=null,cr=mi[--gi],mi[gi]=null,lr=mi[--gi],mi[gi]=null}var si=null,ai=null,Jt=!1,Ni=null;function zm(n,r){var l=yi(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function Hm(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,si=n,ai=Lr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,si=n,ai=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=hs!==null?{id:lr,overflow:cr}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=yi(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,si=n,ai=null,!0):!1;default:return!1}}function Ku(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Zu(n){if(Jt){var r=ai;if(r){var l=r;if(!Hm(n,r)){if(Ku(n))throw Error(t(418));r=Lr(l.nextSibling);var d=si;r&&Hm(n,r)?zm(d,l):(n.flags=n.flags&-4097|2,Jt=!1,si=n)}}else{if(Ku(n))throw Error(t(418));n.flags=n.flags&-4097|2,Jt=!1,si=n}}}function Gm(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;si=n}function bl(n){if(n!==si)return!1;if(!Jt)return Gm(n),Jt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Hu(n.type,n.memoizedProps)),r&&(r=ai)){if(Ku(n))throw Vm(),Error(t(418));for(;r;)zm(n,r),r=Lr(r.nextSibling)}if(Gm(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){ai=Lr(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}ai=null}}else ai=si?Lr(n.stateNode.nextSibling):null;return!0}function Vm(){for(var n=ai;n;)n=Lr(n.nextSibling)}function Ks(){ai=si=null,Jt=!1}function Qu(n){Ni===null?Ni=[n]:Ni.push(n)}var ey=N.ReactCurrentBatchConfig;function uo(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var d=l.stateNode}if(!d)throw Error(t(147,n));var p=d,_=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===_?r.ref:(r=function(R){var z=p.refs;R===null?delete z[_]:z[_]=R},r._stringRef=_,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function Tl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Wm(n){var r=n._init;return r(n._payload)}function Xm(n){function r(oe,te){if(n){var de=oe.deletions;de===null?(oe.deletions=[te],oe.flags|=16):de.push(te)}}function l(oe,te){if(!n)return null;for(;te!==null;)r(oe,te),te=te.sibling;return null}function d(oe,te){for(oe=new Map;te!==null;)te.key!==null?oe.set(te.key,te):oe.set(te.index,te),te=te.sibling;return oe}function p(oe,te){return oe=Gr(oe,te),oe.index=0,oe.sibling=null,oe}function _(oe,te,de){return oe.index=de,n?(de=oe.alternate,de!==null?(de=de.index,de<te?(oe.flags|=2,te):de):(oe.flags|=2,te)):(oe.flags|=1048576,te)}function R(oe){return n&&oe.alternate===null&&(oe.flags|=2),oe}function z(oe,te,de,Le){return te===null||te.tag!==6?(te=Gd(de,oe.mode,Le),te.return=oe,te):(te=p(te,de),te.return=oe,te)}function K(oe,te,de,Le){var it=de.type;return it===O?be(oe,te,de.props.children,Le,de.key):te!==null&&(te.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===k&&Wm(it)===te.type)?(Le=p(te,de.props),Le.ref=uo(oe,te,de),Le.return=oe,Le):(Le=Yl(de.type,de.key,de.props,null,oe.mode,Le),Le.ref=uo(oe,te,de),Le.return=oe,Le)}function pe(oe,te,de,Le){return te===null||te.tag!==4||te.stateNode.containerInfo!==de.containerInfo||te.stateNode.implementation!==de.implementation?(te=Vd(de,oe.mode,Le),te.return=oe,te):(te=p(te,de.children||[]),te.return=oe,te)}function be(oe,te,de,Le,it){return te===null||te.tag!==7?(te=Ss(de,oe.mode,Le,it),te.return=oe,te):(te=p(te,de),te.return=oe,te)}function Ce(oe,te,de){if(typeof te=="string"&&te!==""||typeof te=="number")return te=Gd(""+te,oe.mode,de),te.return=oe,te;if(typeof te=="object"&&te!==null){switch(te.$$typeof){case D:return de=Yl(te.type,te.key,te.props,null,oe.mode,de),de.ref=uo(oe,null,te),de.return=oe,de;case L:return te=Vd(te,oe.mode,de),te.return=oe,te;case k:var Le=te._init;return Ce(oe,Le(te._payload),de)}if(J(te)||le(te))return te=Ss(te,oe.mode,de,null),te.return=oe,te;Tl(oe,te)}return null}function Ee(oe,te,de,Le){var it=te!==null?te.key:null;if(typeof de=="string"&&de!==""||typeof de=="number")return it!==null?null:z(oe,te,""+de,Le);if(typeof de=="object"&&de!==null){switch(de.$$typeof){case D:return de.key===it?K(oe,te,de,Le):null;case L:return de.key===it?pe(oe,te,de,Le):null;case k:return it=de._init,Ee(oe,te,it(de._payload),Le)}if(J(de)||le(de))return it!==null?null:be(oe,te,de,Le,null);Tl(oe,de)}return null}function Ge(oe,te,de,Le,it){if(typeof Le=="string"&&Le!==""||typeof Le=="number")return oe=oe.get(de)||null,z(te,oe,""+Le,it);if(typeof Le=="object"&&Le!==null){switch(Le.$$typeof){case D:return oe=oe.get(Le.key===null?de:Le.key)||null,K(te,oe,Le,it);case L:return oe=oe.get(Le.key===null?de:Le.key)||null,pe(te,oe,Le,it);case k:var ut=Le._init;return Ge(oe,te,de,ut(Le._payload),it)}if(J(Le)||le(Le))return oe=oe.get(de)||null,be(te,oe,Le,it,null);Tl(te,Le)}return null}function Ye(oe,te,de,Le){for(var it=null,ut=null,dt=te,gt=te=0,Mn=null;dt!==null&&gt<de.length;gt++){dt.index>gt?(Mn=dt,dt=null):Mn=dt.sibling;var Ut=Ee(oe,dt,de[gt],Le);if(Ut===null){dt===null&&(dt=Mn);break}n&&dt&&Ut.alternate===null&&r(oe,dt),te=_(Ut,te,gt),ut===null?it=Ut:ut.sibling=Ut,ut=Ut,dt=Mn}if(gt===de.length)return l(oe,dt),Jt&&fs(oe,gt),it;if(dt===null){for(;gt<de.length;gt++)dt=Ce(oe,de[gt],Le),dt!==null&&(te=_(dt,te,gt),ut===null?it=dt:ut.sibling=dt,ut=dt);return Jt&&fs(oe,gt),it}for(dt=d(oe,dt);gt<de.length;gt++)Mn=Ge(dt,oe,gt,de[gt],Le),Mn!==null&&(n&&Mn.alternate!==null&&dt.delete(Mn.key===null?gt:Mn.key),te=_(Mn,te,gt),ut===null?it=Mn:ut.sibling=Mn,ut=Mn);return n&&dt.forEach(function(Vr){return r(oe,Vr)}),Jt&&fs(oe,gt),it}function Je(oe,te,de,Le){var it=le(de);if(typeof it!="function")throw Error(t(150));if(de=it.call(de),de==null)throw Error(t(151));for(var ut=it=null,dt=te,gt=te=0,Mn=null,Ut=de.next();dt!==null&&!Ut.done;gt++,Ut=de.next()){dt.index>gt?(Mn=dt,dt=null):Mn=dt.sibling;var Vr=Ee(oe,dt,Ut.value,Le);if(Vr===null){dt===null&&(dt=Mn);break}n&&dt&&Vr.alternate===null&&r(oe,dt),te=_(Vr,te,gt),ut===null?it=Vr:ut.sibling=Vr,ut=Vr,dt=Mn}if(Ut.done)return l(oe,dt),Jt&&fs(oe,gt),it;if(dt===null){for(;!Ut.done;gt++,Ut=de.next())Ut=Ce(oe,Ut.value,Le),Ut!==null&&(te=_(Ut,te,gt),ut===null?it=Ut:ut.sibling=Ut,ut=Ut);return Jt&&fs(oe,gt),it}for(dt=d(oe,dt);!Ut.done;gt++,Ut=de.next())Ut=Ge(dt,oe,gt,Ut.value,Le),Ut!==null&&(n&&Ut.alternate!==null&&dt.delete(Ut.key===null?gt:Ut.key),te=_(Ut,te,gt),ut===null?it=Ut:ut.sibling=Ut,ut=Ut);return n&&dt.forEach(function(Dy){return r(oe,Dy)}),Jt&&fs(oe,gt),it}function ln(oe,te,de,Le){if(typeof de=="object"&&de!==null&&de.type===O&&de.key===null&&(de=de.props.children),typeof de=="object"&&de!==null){switch(de.$$typeof){case D:e:{for(var it=de.key,ut=te;ut!==null;){if(ut.key===it){if(it=de.type,it===O){if(ut.tag===7){l(oe,ut.sibling),te=p(ut,de.props.children),te.return=oe,oe=te;break e}}else if(ut.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===k&&Wm(it)===ut.type){l(oe,ut.sibling),te=p(ut,de.props),te.ref=uo(oe,ut,de),te.return=oe,oe=te;break e}l(oe,ut);break}else r(oe,ut);ut=ut.sibling}de.type===O?(te=Ss(de.props.children,oe.mode,Le,de.key),te.return=oe,oe=te):(Le=Yl(de.type,de.key,de.props,null,oe.mode,Le),Le.ref=uo(oe,te,de),Le.return=oe,oe=Le)}return R(oe);case L:e:{for(ut=de.key;te!==null;){if(te.key===ut)if(te.tag===4&&te.stateNode.containerInfo===de.containerInfo&&te.stateNode.implementation===de.implementation){l(oe,te.sibling),te=p(te,de.children||[]),te.return=oe,oe=te;break e}else{l(oe,te);break}else r(oe,te);te=te.sibling}te=Vd(de,oe.mode,Le),te.return=oe,oe=te}return R(oe);case k:return ut=de._init,ln(oe,te,ut(de._payload),Le)}if(J(de))return Ye(oe,te,de,Le);if(le(de))return Je(oe,te,de,Le);Tl(oe,de)}return typeof de=="string"&&de!==""||typeof de=="number"?(de=""+de,te!==null&&te.tag===6?(l(oe,te.sibling),te=p(te,de),te.return=oe,oe=te):(l(oe,te),te=Gd(de,oe.mode,Le),te.return=oe,oe=te),R(oe)):l(oe,te)}return ln}var Zs=Xm(!0),$m=Xm(!1),wl=Dr(null),Cl=null,Qs=null,Ju=null;function ed(){Ju=Qs=Cl=null}function td(n){var r=wl.current;Kt(wl),n._currentValue=r}function nd(n,r,l){for(;n!==null;){var d=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,d!==null&&(d.childLanes|=r)):d!==null&&(d.childLanes&r)!==r&&(d.childLanes|=r),n===l)break;n=n.return}}function Js(n,r){Cl=n,Ju=Qs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Kn=!0),n.firstContext=null)}function xi(n){var r=n._currentValue;if(Ju!==n)if(n={context:n,memoizedValue:r,next:null},Qs===null){if(Cl===null)throw Error(t(308));Qs=n,Cl.dependencies={lanes:0,firstContext:n}}else Qs=Qs.next=n;return r}var ps=null;function id(n){ps===null?ps=[n]:ps.push(n)}function qm(n,r,l,d){var p=r.interleaved;return p===null?(l.next=l,id(r)):(l.next=p.next,p.next=l),r.interleaved=l,ur(n,d)}function ur(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var Fr=!1;function rd(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ym(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function dr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Or(n,r,l){var d=n.updateQueue;if(d===null)return null;if(d=d.shared,(It&2)!==0){var p=d.pending;return p===null?r.next=r:(r.next=p.next,p.next=r),d.pending=r,ur(n,l)}return p=d.interleaved,p===null?(r.next=r,id(d)):(r.next=p.next,p.next=r),d.interleaved=r,ur(n,l)}function Al(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var d=r.lanes;d&=n.pendingLanes,l|=d,r.lanes=l,$n(n,l)}}function Km(n,r){var l=n.updateQueue,d=n.alternate;if(d!==null&&(d=d.updateQueue,l===d)){var p=null,_=null;if(l=l.firstBaseUpdate,l!==null){do{var R={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};_===null?p=_=R:_=_.next=R,l=l.next}while(l!==null);_===null?p=_=r:_=_.next=r}else p=_=r;l={baseState:d.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:d.shared,effects:d.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function Rl(n,r,l,d){var p=n.updateQueue;Fr=!1;var _=p.firstBaseUpdate,R=p.lastBaseUpdate,z=p.shared.pending;if(z!==null){p.shared.pending=null;var K=z,pe=K.next;K.next=null,R===null?_=pe:R.next=pe,R=K;var be=n.alternate;be!==null&&(be=be.updateQueue,z=be.lastBaseUpdate,z!==R&&(z===null?be.firstBaseUpdate=pe:z.next=pe,be.lastBaseUpdate=K))}if(_!==null){var Ce=p.baseState;R=0,be=pe=K=null,z=_;do{var Ee=z.lane,Ge=z.eventTime;if((d&Ee)===Ee){be!==null&&(be=be.next={eventTime:Ge,lane:0,tag:z.tag,payload:z.payload,callback:z.callback,next:null});e:{var Ye=n,Je=z;switch(Ee=r,Ge=l,Je.tag){case 1:if(Ye=Je.payload,typeof Ye=="function"){Ce=Ye.call(Ge,Ce,Ee);break e}Ce=Ye;break e;case 3:Ye.flags=Ye.flags&-65537|128;case 0:if(Ye=Je.payload,Ee=typeof Ye=="function"?Ye.call(Ge,Ce,Ee):Ye,Ee==null)break e;Ce=se({},Ce,Ee);break e;case 2:Fr=!0}}z.callback!==null&&z.lane!==0&&(n.flags|=64,Ee=p.effects,Ee===null?p.effects=[z]:Ee.push(z))}else Ge={eventTime:Ge,lane:Ee,tag:z.tag,payload:z.payload,callback:z.callback,next:null},be===null?(pe=be=Ge,K=Ce):be=be.next=Ge,R|=Ee;if(z=z.next,z===null){if(z=p.shared.pending,z===null)break;Ee=z,z=Ee.next,Ee.next=null,p.lastBaseUpdate=Ee,p.shared.pending=null}}while(!0);if(be===null&&(K=Ce),p.baseState=K,p.firstBaseUpdate=pe,p.lastBaseUpdate=be,r=p.shared.interleaved,r!==null){p=r;do R|=p.lane,p=p.next;while(p!==r)}else _===null&&(p.shared.lanes=0);xs|=R,n.lanes=R,n.memoizedState=Ce}}function Zm(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var d=n[r],p=d.callback;if(p!==null){if(d.callback=null,d=l,typeof p!="function")throw Error(t(191,p));p.call(d)}}}var ho={},Vi=Dr(ho),fo=Dr(ho),po=Dr(ho);function ms(n){if(n===ho)throw Error(t(174));return n}function sd(n,r){switch(Xt(po,r),Xt(fo,n),Xt(Vi,ho),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:C(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=C(r,n)}Kt(Vi),Xt(Vi,r)}function ea(){Kt(Vi),Kt(fo),Kt(po)}function Qm(n){ms(po.current);var r=ms(Vi.current),l=C(r,n.type);r!==l&&(Xt(fo,n),Xt(Vi,l))}function ad(n){fo.current===n&&(Kt(Vi),Kt(fo))}var nn=Dr(0);function Nl(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var od=[];function ld(){for(var n=0;n<od.length;n++)od[n]._workInProgressVersionPrimary=null;od.length=0}var Pl=N.ReactCurrentDispatcher,cd=N.ReactCurrentBatchConfig,gs=0,rn=null,pn=null,yn=null,Ll=!1,mo=!1,go=0,ty=0;function Rn(){throw Error(t(321))}function ud(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!Ri(n[l],r[l]))return!1;return!0}function dd(n,r,l,d,p,_){if(gs=_,rn=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Pl.current=n===null||n.memoizedState===null?sy:ay,n=l(d,p),mo){_=0;do{if(mo=!1,go=0,25<=_)throw Error(t(301));_+=1,yn=pn=null,r.updateQueue=null,Pl.current=oy,n=l(d,p)}while(mo)}if(Pl.current=Ul,r=pn!==null&&pn.next!==null,gs=0,yn=pn=rn=null,Ll=!1,r)throw Error(t(300));return n}function hd(){var n=go!==0;return go=0,n}function Wi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yn===null?rn.memoizedState=yn=n:yn=yn.next=n,yn}function vi(){if(pn===null){var n=rn.alternate;n=n!==null?n.memoizedState:null}else n=pn.next;var r=yn===null?rn.memoizedState:yn.next;if(r!==null)yn=r,pn=n;else{if(n===null)throw Error(t(310));pn=n,n={memoizedState:pn.memoizedState,baseState:pn.baseState,baseQueue:pn.baseQueue,queue:pn.queue,next:null},yn===null?rn.memoizedState=yn=n:yn=yn.next=n}return yn}function xo(n,r){return typeof r=="function"?r(n):r}function fd(n){var r=vi(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var d=pn,p=d.baseQueue,_=l.pending;if(_!==null){if(p!==null){var R=p.next;p.next=_.next,_.next=R}d.baseQueue=p=_,l.pending=null}if(p!==null){_=p.next,d=d.baseState;var z=R=null,K=null,pe=_;do{var be=pe.lane;if((gs&be)===be)K!==null&&(K=K.next={lane:0,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null}),d=pe.hasEagerState?pe.eagerState:n(d,pe.action);else{var Ce={lane:be,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null};K===null?(z=K=Ce,R=d):K=K.next=Ce,rn.lanes|=be,xs|=be}pe=pe.next}while(pe!==null&&pe!==_);K===null?R=d:K.next=z,Ri(d,r.memoizedState)||(Kn=!0),r.memoizedState=d,r.baseState=R,r.baseQueue=K,l.lastRenderedState=d}if(n=l.interleaved,n!==null){p=n;do _=p.lane,rn.lanes|=_,xs|=_,p=p.next;while(p!==n)}else p===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function pd(n){var r=vi(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var d=l.dispatch,p=l.pending,_=r.memoizedState;if(p!==null){l.pending=null;var R=p=p.next;do _=n(_,R.action),R=R.next;while(R!==p);Ri(_,r.memoizedState)||(Kn=!0),r.memoizedState=_,r.baseQueue===null&&(r.baseState=_),l.lastRenderedState=_}return[_,d]}function Jm(){}function eg(n,r){var l=rn,d=vi(),p=r(),_=!Ri(d.memoizedState,p);if(_&&(d.memoizedState=p,Kn=!0),d=d.queue,md(ig.bind(null,l,d,n),[n]),d.getSnapshot!==r||_||yn!==null&&yn.memoizedState.tag&1){if(l.flags|=2048,vo(9,ng.bind(null,l,d,p,r),void 0,null),Sn===null)throw Error(t(349));(gs&30)!==0||tg(l,r,p)}return p}function tg(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=rn.updateQueue,r===null?(r={lastEffect:null,stores:null},rn.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function ng(n,r,l,d){r.value=l,r.getSnapshot=d,rg(r)&&sg(n)}function ig(n,r,l){return l(function(){rg(r)&&sg(n)})}function rg(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!Ri(n,l)}catch{return!0}}function sg(n){var r=ur(n,1);r!==null&&Ii(r,n,1,-1)}function ag(n){var r=Wi();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xo,lastRenderedState:n},r.queue=n,n=n.dispatch=ry.bind(null,rn,n),[r.memoizedState,n]}function vo(n,r,l,d){return n={tag:n,create:r,destroy:l,deps:d,next:null},r=rn.updateQueue,r===null?(r={lastEffect:null,stores:null},rn.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(d=l.next,l.next=n,n.next=d,r.lastEffect=n)),n}function og(){return vi().memoizedState}function Dl(n,r,l,d){var p=Wi();rn.flags|=n,p.memoizedState=vo(1|r,l,void 0,d===void 0?null:d)}function Il(n,r,l,d){var p=vi();d=d===void 0?null:d;var _=void 0;if(pn!==null){var R=pn.memoizedState;if(_=R.destroy,d!==null&&ud(d,R.deps)){p.memoizedState=vo(r,l,_,d);return}}rn.flags|=n,p.memoizedState=vo(1|r,l,_,d)}function lg(n,r){return Dl(8390656,8,n,r)}function md(n,r){return Il(2048,8,n,r)}function cg(n,r){return Il(4,2,n,r)}function ug(n,r){return Il(4,4,n,r)}function dg(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function hg(n,r,l){return l=l!=null?l.concat([n]):null,Il(4,4,dg.bind(null,r,n),l)}function gd(){}function fg(n,r){var l=vi();r=r===void 0?null:r;var d=l.memoizedState;return d!==null&&r!==null&&ud(r,d[1])?d[0]:(l.memoizedState=[n,r],n)}function pg(n,r){var l=vi();r=r===void 0?null:r;var d=l.memoizedState;return d!==null&&r!==null&&ud(r,d[1])?d[0]:(n=n(),l.memoizedState=[n,r],n)}function mg(n,r,l){return(gs&21)===0?(n.baseState&&(n.baseState=!1,Kn=!0),n.memoizedState=l):(Ri(l,r)||(l=He(),rn.lanes|=l,xs|=l,n.baseState=!0),r)}function ny(n,r){var l=Ct;Ct=l!==0&&4>l?l:4,n(!0);var d=cd.transition;cd.transition={};try{n(!1),r()}finally{Ct=l,cd.transition=d}}function gg(){return vi().memoizedState}function iy(n,r,l){var d=zr(n);if(l={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null},xg(n))vg(r,l);else if(l=qm(n,r,l,d),l!==null){var p=zn();Ii(l,n,d,p),_g(l,r,d)}}function ry(n,r,l){var d=zr(n),p={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null};if(xg(n))vg(r,p);else{var _=n.alternate;if(n.lanes===0&&(_===null||_.lanes===0)&&(_=r.lastRenderedReducer,_!==null))try{var R=r.lastRenderedState,z=_(R,l);if(p.hasEagerState=!0,p.eagerState=z,Ri(z,R)){var K=r.interleaved;K===null?(p.next=p,id(r)):(p.next=K.next,K.next=p),r.interleaved=p;return}}catch{}finally{}l=qm(n,r,p,d),l!==null&&(p=zn(),Ii(l,n,d,p),_g(l,r,d))}}function xg(n){var r=n.alternate;return n===rn||r!==null&&r===rn}function vg(n,r){mo=Ll=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function _g(n,r,l){if((l&4194240)!==0){var d=r.lanes;d&=n.pendingLanes,l|=d,r.lanes=l,$n(n,l)}}var Ul={readContext:xi,useCallback:Rn,useContext:Rn,useEffect:Rn,useImperativeHandle:Rn,useInsertionEffect:Rn,useLayoutEffect:Rn,useMemo:Rn,useReducer:Rn,useRef:Rn,useState:Rn,useDebugValue:Rn,useDeferredValue:Rn,useTransition:Rn,useMutableSource:Rn,useSyncExternalStore:Rn,useId:Rn,unstable_isNewReconciler:!1},sy={readContext:xi,useCallback:function(n,r){return Wi().memoizedState=[n,r===void 0?null:r],n},useContext:xi,useEffect:lg,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,Dl(4194308,4,dg.bind(null,r,n),l)},useLayoutEffect:function(n,r){return Dl(4194308,4,n,r)},useInsertionEffect:function(n,r){return Dl(4,2,n,r)},useMemo:function(n,r){var l=Wi();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var d=Wi();return r=l!==void 0?l(r):r,d.memoizedState=d.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},d.queue=n,n=n.dispatch=iy.bind(null,rn,n),[d.memoizedState,n]},useRef:function(n){var r=Wi();return n={current:n},r.memoizedState=n},useState:ag,useDebugValue:gd,useDeferredValue:function(n){return Wi().memoizedState=n},useTransition:function(){var n=ag(!1),r=n[0];return n=ny.bind(null,n[1]),Wi().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var d=rn,p=Wi();if(Jt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),Sn===null)throw Error(t(349));(gs&30)!==0||tg(d,r,l)}p.memoizedState=l;var _={value:l,getSnapshot:r};return p.queue=_,lg(ig.bind(null,d,_,n),[n]),d.flags|=2048,vo(9,ng.bind(null,d,_,l,r),void 0,null),l},useId:function(){var n=Wi(),r=Sn.identifierPrefix;if(Jt){var l=cr,d=lr;l=(d&~(1<<32-De(d)-1)).toString(32)+l,r=":"+r+"R"+l,l=go++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=ty++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},ay={readContext:xi,useCallback:fg,useContext:xi,useEffect:md,useImperativeHandle:hg,useInsertionEffect:cg,useLayoutEffect:ug,useMemo:pg,useReducer:fd,useRef:og,useState:function(){return fd(xo)},useDebugValue:gd,useDeferredValue:function(n){var r=vi();return mg(r,pn.memoizedState,n)},useTransition:function(){var n=fd(xo)[0],r=vi().memoizedState;return[n,r]},useMutableSource:Jm,useSyncExternalStore:eg,useId:gg,unstable_isNewReconciler:!1},oy={readContext:xi,useCallback:fg,useContext:xi,useEffect:md,useImperativeHandle:hg,useInsertionEffect:cg,useLayoutEffect:ug,useMemo:pg,useReducer:pd,useRef:og,useState:function(){return pd(xo)},useDebugValue:gd,useDeferredValue:function(n){var r=vi();return pn===null?r.memoizedState=n:mg(r,pn.memoizedState,n)},useTransition:function(){var n=pd(xo)[0],r=vi().memoizedState;return[n,r]},useMutableSource:Jm,useSyncExternalStore:eg,useId:gg,unstable_isNewReconciler:!1};function Pi(n,r){if(n&&n.defaultProps){r=se({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function xd(n,r,l,d){r=n.memoizedState,l=l(d,r),l=l==null?r:se({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var Fl={isMounted:function(n){return(n=n._reactInternals)?zi(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var d=zn(),p=zr(n),_=dr(d,p);_.payload=r,l!=null&&(_.callback=l),r=Or(n,_,p),r!==null&&(Ii(r,n,p,d),Al(r,n,p))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var d=zn(),p=zr(n),_=dr(d,p);_.tag=1,_.payload=r,l!=null&&(_.callback=l),r=Or(n,_,p),r!==null&&(Ii(r,n,p,d),Al(r,n,p))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=zn(),d=zr(n),p=dr(l,d);p.tag=2,r!=null&&(p.callback=r),r=Or(n,p,d),r!==null&&(Ii(r,n,d,l),Al(r,n,d))}};function yg(n,r,l,d,p,_,R){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(d,_,R):r.prototype&&r.prototype.isPureReactComponent?!io(l,d)||!io(p,_):!0}function Sg(n,r,l){var d=!1,p=Ir,_=r.contextType;return typeof _=="object"&&_!==null?_=xi(_):(p=Yn(r)?ds:An.current,d=r.contextTypes,_=(d=d!=null)?$s(n,p):Ir),r=new r(l,_),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Fl,n.stateNode=r,r._reactInternals=n,d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=_),r}function Mg(n,r,l,d){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,d),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,d),r.state!==n&&Fl.enqueueReplaceState(r,r.state,null)}function vd(n,r,l,d){var p=n.stateNode;p.props=l,p.state=n.memoizedState,p.refs={},rd(n);var _=r.contextType;typeof _=="object"&&_!==null?p.context=xi(_):(_=Yn(r)?ds:An.current,p.context=$s(n,_)),p.state=n.memoizedState,_=r.getDerivedStateFromProps,typeof _=="function"&&(xd(n,r,_,l),p.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(r=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),r!==p.state&&Fl.enqueueReplaceState(p,p.state,null),Rl(n,l,p,d),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function ta(n,r){try{var l="",d=r;do l+=Ae(d),d=d.return;while(d);var p=l}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:n,source:r,stack:p,digest:null}}function _d(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function yd(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var ly=typeof WeakMap=="function"?WeakMap:Map;function Eg(n,r,l){l=dr(-1,l),l.tag=3,l.payload={element:null};var d=r.value;return l.callback=function(){Gl||(Gl=!0,Ud=d),yd(n,r)},l}function bg(n,r,l){l=dr(-1,l),l.tag=3;var d=n.type.getDerivedStateFromError;if(typeof d=="function"){var p=r.value;l.payload=function(){return d(p)},l.callback=function(){yd(n,r)}}var _=n.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(l.callback=function(){yd(n,r),typeof d!="function"&&(jr===null?jr=new Set([this]):jr.add(this));var R=r.stack;this.componentDidCatch(r.value,{componentStack:R!==null?R:""})}),l}function Tg(n,r,l){var d=n.pingCache;if(d===null){d=n.pingCache=new ly;var p=new Set;d.set(r,p)}else p=d.get(r),p===void 0&&(p=new Set,d.set(r,p));p.has(l)||(p.add(l),n=My.bind(null,n,r,l),r.then(n,n))}function wg(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Cg(n,r,l,d,p){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=dr(-1,1),r.tag=2,Or(l,r,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var cy=N.ReactCurrentOwner,Kn=!1;function Bn(n,r,l,d){r.child=n===null?$m(r,null,l,d):Zs(r,n.child,l,d)}function Ag(n,r,l,d,p){l=l.render;var _=r.ref;return Js(r,p),d=dd(n,r,l,d,_,p),l=hd(),n!==null&&!Kn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,hr(n,r,p)):(Jt&&l&&qu(r),r.flags|=1,Bn(n,r,d,p),r.child)}function Rg(n,r,l,d,p){if(n===null){var _=l.type;return typeof _=="function"&&!Hd(_)&&_.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=_,Ng(n,r,_,d,p)):(n=Yl(l.type,null,d,r,r.mode,p),n.ref=r.ref,n.return=r,r.child=n)}if(_=n.child,(n.lanes&p)===0){var R=_.memoizedProps;if(l=l.compare,l=l!==null?l:io,l(R,d)&&n.ref===r.ref)return hr(n,r,p)}return r.flags|=1,n=Gr(_,d),n.ref=r.ref,n.return=r,r.child=n}function Ng(n,r,l,d,p){if(n!==null){var _=n.memoizedProps;if(io(_,d)&&n.ref===r.ref)if(Kn=!1,r.pendingProps=d=_,(n.lanes&p)!==0)(n.flags&131072)!==0&&(Kn=!0);else return r.lanes=n.lanes,hr(n,r,p)}return Sd(n,r,l,d,p)}function Pg(n,r,l){var d=r.pendingProps,p=d.children,_=n!==null?n.memoizedState:null;if(d.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Xt(ia,oi),oi|=l;else{if((l&1073741824)===0)return n=_!==null?_.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Xt(ia,oi),oi|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=_!==null?_.baseLanes:l,Xt(ia,oi),oi|=d}else _!==null?(d=_.baseLanes|l,r.memoizedState=null):d=l,Xt(ia,oi),oi|=d;return Bn(n,r,p,l),r.child}function Lg(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function Sd(n,r,l,d,p){var _=Yn(l)?ds:An.current;return _=$s(r,_),Js(r,p),l=dd(n,r,l,d,_,p),d=hd(),n!==null&&!Kn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,hr(n,r,p)):(Jt&&d&&qu(r),r.flags|=1,Bn(n,r,l,p),r.child)}function Dg(n,r,l,d,p){if(Yn(l)){var _=!0;yl(r)}else _=!1;if(Js(r,p),r.stateNode===null)kl(n,r),Sg(r,l,d),vd(r,l,d,p),d=!0;else if(n===null){var R=r.stateNode,z=r.memoizedProps;R.props=z;var K=R.context,pe=l.contextType;typeof pe=="object"&&pe!==null?pe=xi(pe):(pe=Yn(l)?ds:An.current,pe=$s(r,pe));var be=l.getDerivedStateFromProps,Ce=typeof be=="function"||typeof R.getSnapshotBeforeUpdate=="function";Ce||typeof R.UNSAFE_componentWillReceiveProps!="function"&&typeof R.componentWillReceiveProps!="function"||(z!==d||K!==pe)&&Mg(r,R,d,pe),Fr=!1;var Ee=r.memoizedState;R.state=Ee,Rl(r,d,R,p),K=r.memoizedState,z!==d||Ee!==K||qn.current||Fr?(typeof be=="function"&&(xd(r,l,be,d),K=r.memoizedState),(z=Fr||yg(r,l,z,d,Ee,K,pe))?(Ce||typeof R.UNSAFE_componentWillMount!="function"&&typeof R.componentWillMount!="function"||(typeof R.componentWillMount=="function"&&R.componentWillMount(),typeof R.UNSAFE_componentWillMount=="function"&&R.UNSAFE_componentWillMount()),typeof R.componentDidMount=="function"&&(r.flags|=4194308)):(typeof R.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=d,r.memoizedState=K),R.props=d,R.state=K,R.context=pe,d=z):(typeof R.componentDidMount=="function"&&(r.flags|=4194308),d=!1)}else{R=r.stateNode,Ym(n,r),z=r.memoizedProps,pe=r.type===r.elementType?z:Pi(r.type,z),R.props=pe,Ce=r.pendingProps,Ee=R.context,K=l.contextType,typeof K=="object"&&K!==null?K=xi(K):(K=Yn(l)?ds:An.current,K=$s(r,K));var Ge=l.getDerivedStateFromProps;(be=typeof Ge=="function"||typeof R.getSnapshotBeforeUpdate=="function")||typeof R.UNSAFE_componentWillReceiveProps!="function"&&typeof R.componentWillReceiveProps!="function"||(z!==Ce||Ee!==K)&&Mg(r,R,d,K),Fr=!1,Ee=r.memoizedState,R.state=Ee,Rl(r,d,R,p);var Ye=r.memoizedState;z!==Ce||Ee!==Ye||qn.current||Fr?(typeof Ge=="function"&&(xd(r,l,Ge,d),Ye=r.memoizedState),(pe=Fr||yg(r,l,pe,d,Ee,Ye,K)||!1)?(be||typeof R.UNSAFE_componentWillUpdate!="function"&&typeof R.componentWillUpdate!="function"||(typeof R.componentWillUpdate=="function"&&R.componentWillUpdate(d,Ye,K),typeof R.UNSAFE_componentWillUpdate=="function"&&R.UNSAFE_componentWillUpdate(d,Ye,K)),typeof R.componentDidUpdate=="function"&&(r.flags|=4),typeof R.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof R.componentDidUpdate!="function"||z===n.memoizedProps&&Ee===n.memoizedState||(r.flags|=4),typeof R.getSnapshotBeforeUpdate!="function"||z===n.memoizedProps&&Ee===n.memoizedState||(r.flags|=1024),r.memoizedProps=d,r.memoizedState=Ye),R.props=d,R.state=Ye,R.context=K,d=pe):(typeof R.componentDidUpdate!="function"||z===n.memoizedProps&&Ee===n.memoizedState||(r.flags|=4),typeof R.getSnapshotBeforeUpdate!="function"||z===n.memoizedProps&&Ee===n.memoizedState||(r.flags|=1024),d=!1)}return Md(n,r,l,d,_,p)}function Md(n,r,l,d,p,_){Lg(n,r);var R=(r.flags&128)!==0;if(!d&&!R)return p&&km(r,l,!1),hr(n,r,_);d=r.stateNode,cy.current=r;var z=R&&typeof l.getDerivedStateFromError!="function"?null:d.render();return r.flags|=1,n!==null&&R?(r.child=Zs(r,n.child,null,_),r.child=Zs(r,null,z,_)):Bn(n,r,z,_),r.memoizedState=d.state,p&&km(r,l,!0),r.child}function Ig(n){var r=n.stateNode;r.pendingContext?Fm(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Fm(n,r.context,!1),sd(n,r.containerInfo)}function Ug(n,r,l,d,p){return Ks(),Qu(p),r.flags|=256,Bn(n,r,l,d),r.child}var Ed={dehydrated:null,treeContext:null,retryLane:0};function bd(n){return{baseLanes:n,cachePool:null,transitions:null}}function Fg(n,r,l){var d=r.pendingProps,p=nn.current,_=!1,R=(r.flags&128)!==0,z;if((z=R)||(z=n!==null&&n.memoizedState===null?!1:(p&2)!==0),z?(_=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),Xt(nn,p&1),n===null)return Zu(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(R=d.children,n=d.fallback,_?(d=r.mode,_=r.child,R={mode:"hidden",children:R},(d&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=R):_=Kl(R,d,0,null),n=Ss(n,d,l,null),_.return=r,n.return=r,_.sibling=n,r.child=_,r.child.memoizedState=bd(l),r.memoizedState=Ed,n):Td(r,R));if(p=n.memoizedState,p!==null&&(z=p.dehydrated,z!==null))return uy(n,r,R,d,z,p,l);if(_){_=d.fallback,R=r.mode,p=n.child,z=p.sibling;var K={mode:"hidden",children:d.children};return(R&1)===0&&r.child!==p?(d=r.child,d.childLanes=0,d.pendingProps=K,r.deletions=null):(d=Gr(p,K),d.subtreeFlags=p.subtreeFlags&14680064),z!==null?_=Gr(z,_):(_=Ss(_,R,l,null),_.flags|=2),_.return=r,d.return=r,d.sibling=_,r.child=d,d=_,_=r.child,R=n.child.memoizedState,R=R===null?bd(l):{baseLanes:R.baseLanes|l,cachePool:null,transitions:R.transitions},_.memoizedState=R,_.childLanes=n.childLanes&~l,r.memoizedState=Ed,d}return _=n.child,n=_.sibling,d=Gr(_,{mode:"visible",children:d.children}),(r.mode&1)===0&&(d.lanes=l),d.return=r,d.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=d,r.memoizedState=null,d}function Td(n,r){return r=Kl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Ol(n,r,l,d){return d!==null&&Qu(d),Zs(r,n.child,null,l),n=Td(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function uy(n,r,l,d,p,_,R){if(l)return r.flags&256?(r.flags&=-257,d=_d(Error(t(422))),Ol(n,r,R,d)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(_=d.fallback,p=r.mode,d=Kl({mode:"visible",children:d.children},p,0,null),_=Ss(_,p,R,null),_.flags|=2,d.return=r,_.return=r,d.sibling=_,r.child=d,(r.mode&1)!==0&&Zs(r,n.child,null,R),r.child.memoizedState=bd(R),r.memoizedState=Ed,_);if((r.mode&1)===0)return Ol(n,r,R,null);if(p.data==="$!"){if(d=p.nextSibling&&p.nextSibling.dataset,d)var z=d.dgst;return d=z,_=Error(t(419)),d=_d(_,d,void 0),Ol(n,r,R,d)}if(z=(R&n.childLanes)!==0,Kn||z){if(d=Sn,d!==null){switch(R&-R){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(d.suspendedLanes|R))!==0?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,ur(n,p),Ii(d,n,p,-1))}return zd(),d=_d(Error(t(421))),Ol(n,r,R,d)}return p.data==="$?"?(r.flags|=128,r.child=n.child,r=Ey.bind(null,n),p._reactRetry=r,null):(n=_.treeContext,ai=Lr(p.nextSibling),si=r,Jt=!0,Ni=null,n!==null&&(mi[gi++]=lr,mi[gi++]=cr,mi[gi++]=hs,lr=n.id,cr=n.overflow,hs=r),r=Td(r,d.children),r.flags|=4096,r)}function Og(n,r,l){n.lanes|=r;var d=n.alternate;d!==null&&(d.lanes|=r),nd(n.return,r,l)}function wd(n,r,l,d,p){var _=n.memoizedState;_===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:d,tail:l,tailMode:p}:(_.isBackwards=r,_.rendering=null,_.renderingStartTime=0,_.last=d,_.tail=l,_.tailMode=p)}function kg(n,r,l){var d=r.pendingProps,p=d.revealOrder,_=d.tail;if(Bn(n,r,d.children,l),d=nn.current,(d&2)!==0)d=d&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Og(n,l,r);else if(n.tag===19)Og(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}d&=1}if(Xt(nn,d),(r.mode&1)===0)r.memoizedState=null;else switch(p){case"forwards":for(l=r.child,p=null;l!==null;)n=l.alternate,n!==null&&Nl(n)===null&&(p=l),l=l.sibling;l=p,l===null?(p=r.child,r.child=null):(p=l.sibling,l.sibling=null),wd(r,!1,p,l,_);break;case"backwards":for(l=null,p=r.child,r.child=null;p!==null;){if(n=p.alternate,n!==null&&Nl(n)===null){r.child=p;break}n=p.sibling,p.sibling=l,l=p,p=n}wd(r,!0,l,null,_);break;case"together":wd(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function kl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function hr(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),xs|=r.lanes,(l&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=Gr(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=Gr(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function dy(n,r,l){switch(r.tag){case 3:Ig(r),Ks();break;case 5:Qm(r);break;case 1:Yn(r.type)&&yl(r);break;case 4:sd(r,r.stateNode.containerInfo);break;case 10:var d=r.type._context,p=r.memoizedProps.value;Xt(wl,d._currentValue),d._currentValue=p;break;case 13:if(d=r.memoizedState,d!==null)return d.dehydrated!==null?(Xt(nn,nn.current&1),r.flags|=128,null):(l&r.child.childLanes)!==0?Fg(n,r,l):(Xt(nn,nn.current&1),n=hr(n,r,l),n!==null?n.sibling:null);Xt(nn,nn.current&1);break;case 19:if(d=(l&r.childLanes)!==0,(n.flags&128)!==0){if(d)return kg(n,r,l);r.flags|=128}if(p=r.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Xt(nn,nn.current),d)break;return null;case 22:case 23:return r.lanes=0,Pg(n,r,l)}return hr(n,r,l)}var jg,Cd,Bg,zg;jg=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Cd=function(){},Bg=function(n,r,l,d){var p=n.memoizedProps;if(p!==d){n=r.stateNode,ms(Vi.current);var _=null;switch(l){case"input":p=Ke(n,p),d=Ke(n,d),_=[];break;case"select":p=se({},p,{value:void 0}),d=se({},d,{value:void 0}),_=[];break;case"textarea":p=mt(n,p),d=mt(n,d),_=[];break;default:typeof p.onClick!="function"&&typeof d.onClick=="function"&&(n.onclick=xl)}F(l,d);var R;l=null;for(pe in p)if(!d.hasOwnProperty(pe)&&p.hasOwnProperty(pe)&&p[pe]!=null)if(pe==="style"){var z=p[pe];for(R in z)z.hasOwnProperty(R)&&(l||(l={}),l[R]="")}else pe!=="dangerouslySetInnerHTML"&&pe!=="children"&&pe!=="suppressContentEditableWarning"&&pe!=="suppressHydrationWarning"&&pe!=="autoFocus"&&(a.hasOwnProperty(pe)?_||(_=[]):(_=_||[]).push(pe,null));for(pe in d){var K=d[pe];if(z=p!=null?p[pe]:void 0,d.hasOwnProperty(pe)&&K!==z&&(K!=null||z!=null))if(pe==="style")if(z){for(R in z)!z.hasOwnProperty(R)||K&&K.hasOwnProperty(R)||(l||(l={}),l[R]="");for(R in K)K.hasOwnProperty(R)&&z[R]!==K[R]&&(l||(l={}),l[R]=K[R])}else l||(_||(_=[]),_.push(pe,l)),l=K;else pe==="dangerouslySetInnerHTML"?(K=K?K.__html:void 0,z=z?z.__html:void 0,K!=null&&z!==K&&(_=_||[]).push(pe,K)):pe==="children"?typeof K!="string"&&typeof K!="number"||(_=_||[]).push(pe,""+K):pe!=="suppressContentEditableWarning"&&pe!=="suppressHydrationWarning"&&(a.hasOwnProperty(pe)?(K!=null&&pe==="onScroll"&&Yt("scroll",n),_||z===K||(_=[])):(_=_||[]).push(pe,K))}l&&(_=_||[]).push("style",l);var pe=_;(r.updateQueue=pe)&&(r.flags|=4)}},zg=function(n,r,l,d){l!==d&&(r.flags|=4)};function _o(n,r){if(!Jt)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var d=null;l!==null;)l.alternate!==null&&(d=l),l=l.sibling;d===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:d.sibling=null}}function Nn(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,d=0;if(r)for(var p=n.child;p!==null;)l|=p.lanes|p.childLanes,d|=p.subtreeFlags&14680064,d|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)l|=p.lanes|p.childLanes,d|=p.subtreeFlags,d|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=d,n.childLanes=l,r}function hy(n,r,l){var d=r.pendingProps;switch(Yu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nn(r),null;case 1:return Yn(r.type)&&_l(),Nn(r),null;case 3:return d=r.stateNode,ea(),Kt(qn),Kt(An),ld(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(n===null||n.child===null)&&(bl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Ni!==null&&(kd(Ni),Ni=null))),Cd(n,r),Nn(r),null;case 5:ad(r);var p=ms(po.current);if(l=r.type,n!==null&&r.stateNode!=null)Bg(n,r,l,d,p),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!d){if(r.stateNode===null)throw Error(t(166));return Nn(r),null}if(n=ms(Vi.current),bl(r)){d=r.stateNode,l=r.type;var _=r.memoizedProps;switch(d[Gi]=r,d[lo]=_,n=(r.mode&1)!==0,l){case"dialog":Yt("cancel",d),Yt("close",d);break;case"iframe":case"object":case"embed":Yt("load",d);break;case"video":case"audio":for(p=0;p<so.length;p++)Yt(so[p],d);break;case"source":Yt("error",d);break;case"img":case"image":case"link":Yt("error",d),Yt("load",d);break;case"details":Yt("toggle",d);break;case"input":St(d,_),Yt("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!_.multiple},Yt("invalid",d);break;case"textarea":Ft(d,_),Yt("invalid",d)}F(l,_),p=null;for(var R in _)if(_.hasOwnProperty(R)){var z=_[R];R==="children"?typeof z=="string"?d.textContent!==z&&(_.suppressHydrationWarning!==!0&&gl(d.textContent,z,n),p=["children",z]):typeof z=="number"&&d.textContent!==""+z&&(_.suppressHydrationWarning!==!0&&gl(d.textContent,z,n),p=["children",""+z]):a.hasOwnProperty(R)&&z!=null&&R==="onScroll"&&Yt("scroll",d)}switch(l){case"input":et(d),Tt(d,_,!0);break;case"textarea":et(d),Vt(d);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(d.onclick=xl)}d=p,r.updateQueue=d,d!==null&&(r.flags|=4)}else{R=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=I(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=R.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof d.is=="string"?n=R.createElement(l,{is:d.is}):(n=R.createElement(l),l==="select"&&(R=n,d.multiple?R.multiple=!0:d.size&&(R.size=d.size))):n=R.createElementNS(n,l),n[Gi]=r,n[lo]=d,jg(n,r,!1,!1),r.stateNode=n;e:{switch(R=q(l,d),l){case"dialog":Yt("cancel",n),Yt("close",n),p=d;break;case"iframe":case"object":case"embed":Yt("load",n),p=d;break;case"video":case"audio":for(p=0;p<so.length;p++)Yt(so[p],n);p=d;break;case"source":Yt("error",n),p=d;break;case"img":case"image":case"link":Yt("error",n),Yt("load",n),p=d;break;case"details":Yt("toggle",n),p=d;break;case"input":St(n,d),p=Ke(n,d),Yt("invalid",n);break;case"option":p=d;break;case"select":n._wrapperState={wasMultiple:!!d.multiple},p=se({},d,{value:void 0}),Yt("invalid",n);break;case"textarea":Ft(n,d),p=mt(n,d),Yt("invalid",n);break;default:p=d}F(l,p),z=p;for(_ in z)if(z.hasOwnProperty(_)){var K=z[_];_==="style"?_e(n,K):_==="dangerouslySetInnerHTML"?(K=K?K.__html:void 0,K!=null&&ve(n,K)):_==="children"?typeof K=="string"?(l!=="textarea"||K!=="")&&Me(n,K):typeof K=="number"&&Me(n,""+K):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(a.hasOwnProperty(_)?K!=null&&_==="onScroll"&&Yt("scroll",n):K!=null&&T(n,_,K,R))}switch(l){case"input":et(n),Tt(n,d,!1);break;case"textarea":et(n),Vt(n);break;case"option":d.value!=null&&n.setAttribute("value",""+fe(d.value));break;case"select":n.multiple=!!d.multiple,_=d.value,_!=null?zt(n,!!d.multiple,_,!1):d.defaultValue!=null&&zt(n,!!d.multiple,d.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=xl)}switch(l){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Nn(r),null;case 6:if(n&&r.stateNode!=null)zg(n,r,n.memoizedProps,d);else{if(typeof d!="string"&&r.stateNode===null)throw Error(t(166));if(l=ms(po.current),ms(Vi.current),bl(r)){if(d=r.stateNode,l=r.memoizedProps,d[Gi]=r,(_=d.nodeValue!==l)&&(n=si,n!==null))switch(n.tag){case 3:gl(d.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&gl(d.nodeValue,l,(n.mode&1)!==0)}_&&(r.flags|=4)}else d=(l.nodeType===9?l:l.ownerDocument).createTextNode(d),d[Gi]=r,r.stateNode=d}return Nn(r),null;case 13:if(Kt(nn),d=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Jt&&ai!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Vm(),Ks(),r.flags|=98560,_=!1;else if(_=bl(r),d!==null&&d.dehydrated!==null){if(n===null){if(!_)throw Error(t(318));if(_=r.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[Gi]=r}else Ks(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Nn(r),_=!1}else Ni!==null&&(kd(Ni),Ni=null),_=!0;if(!_)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=l,r):(d=d!==null,d!==(n!==null&&n.memoizedState!==null)&&d&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(nn.current&1)!==0?mn===0&&(mn=3):zd())),r.updateQueue!==null&&(r.flags|=4),Nn(r),null);case 4:return ea(),Cd(n,r),n===null&&ao(r.stateNode.containerInfo),Nn(r),null;case 10:return td(r.type._context),Nn(r),null;case 17:return Yn(r.type)&&_l(),Nn(r),null;case 19:if(Kt(nn),_=r.memoizedState,_===null)return Nn(r),null;if(d=(r.flags&128)!==0,R=_.rendering,R===null)if(d)_o(_,!1);else{if(mn!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(R=Nl(n),R!==null){for(r.flags|=128,_o(_,!1),d=R.updateQueue,d!==null&&(r.updateQueue=d,r.flags|=4),r.subtreeFlags=0,d=l,l=r.child;l!==null;)_=l,n=d,_.flags&=14680066,R=_.alternate,R===null?(_.childLanes=0,_.lanes=n,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=R.childLanes,_.lanes=R.lanes,_.child=R.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=R.memoizedProps,_.memoizedState=R.memoizedState,_.updateQueue=R.updateQueue,_.type=R.type,n=R.dependencies,_.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return Xt(nn,nn.current&1|2),r.child}n=n.sibling}_.tail!==null&&tn()>ra&&(r.flags|=128,d=!0,_o(_,!1),r.lanes=4194304)}else{if(!d)if(n=Nl(R),n!==null){if(r.flags|=128,d=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),_o(_,!0),_.tail===null&&_.tailMode==="hidden"&&!R.alternate&&!Jt)return Nn(r),null}else 2*tn()-_.renderingStartTime>ra&&l!==1073741824&&(r.flags|=128,d=!0,_o(_,!1),r.lanes=4194304);_.isBackwards?(R.sibling=r.child,r.child=R):(l=_.last,l!==null?l.sibling=R:r.child=R,_.last=R)}return _.tail!==null?(r=_.tail,_.rendering=r,_.tail=r.sibling,_.renderingStartTime=tn(),r.sibling=null,l=nn.current,Xt(nn,d?l&1|2:l&1),r):(Nn(r),null);case 22:case 23:return Bd(),d=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==d&&(r.flags|=8192),d&&(r.mode&1)!==0?(oi&1073741824)!==0&&(Nn(r),r.subtreeFlags&6&&(r.flags|=8192)):Nn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function fy(n,r){switch(Yu(r),r.tag){case 1:return Yn(r.type)&&_l(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return ea(),Kt(qn),Kt(An),ld(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return ad(r),null;case 13:if(Kt(nn),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Ks()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Kt(nn),null;case 4:return ea(),null;case 10:return td(r.type._context),null;case 22:case 23:return Bd(),null;case 24:return null;default:return null}}var jl=!1,Pn=!1,py=typeof WeakSet=="function"?WeakSet:Set,$e=null;function na(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(d){an(n,r,d)}else l.current=null}function Ad(n,r,l){try{l()}catch(d){an(n,r,d)}}var Hg=!1;function my(n,r){if(Bu=sl,n=ym(),Lu(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var d=l.getSelection&&l.getSelection();if(d&&d.rangeCount!==0){l=d.anchorNode;var p=d.anchorOffset,_=d.focusNode;d=d.focusOffset;try{l.nodeType,_.nodeType}catch{l=null;break e}var R=0,z=-1,K=-1,pe=0,be=0,Ce=n,Ee=null;t:for(;;){for(var Ge;Ce!==l||p!==0&&Ce.nodeType!==3||(z=R+p),Ce!==_||d!==0&&Ce.nodeType!==3||(K=R+d),Ce.nodeType===3&&(R+=Ce.nodeValue.length),(Ge=Ce.firstChild)!==null;)Ee=Ce,Ce=Ge;for(;;){if(Ce===n)break t;if(Ee===l&&++pe===p&&(z=R),Ee===_&&++be===d&&(K=R),(Ge=Ce.nextSibling)!==null)break;Ce=Ee,Ee=Ce.parentNode}Ce=Ge}l=z===-1||K===-1?null:{start:z,end:K}}else l=null}l=l||{start:0,end:0}}else l=null;for(zu={focusedElem:n,selectionRange:l},sl=!1,$e=r;$e!==null;)if(r=$e,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,$e=n;else for(;$e!==null;){r=$e;try{var Ye=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(Ye!==null){var Je=Ye.memoizedProps,ln=Ye.memoizedState,oe=r.stateNode,te=oe.getSnapshotBeforeUpdate(r.elementType===r.type?Je:Pi(r.type,Je),ln);oe.__reactInternalSnapshotBeforeUpdate=te}break;case 3:var de=r.stateNode.containerInfo;de.nodeType===1?de.textContent="":de.nodeType===9&&de.documentElement&&de.removeChild(de.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Le){an(r,r.return,Le)}if(n=r.sibling,n!==null){n.return=r.return,$e=n;break}$e=r.return}return Ye=Hg,Hg=!1,Ye}function yo(n,r,l){var d=r.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var p=d=d.next;do{if((p.tag&n)===n){var _=p.destroy;p.destroy=void 0,_!==void 0&&Ad(r,l,_)}p=p.next}while(p!==d)}}function Bl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var d=l.create;l.destroy=d()}l=l.next}while(l!==r)}}function Rd(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function Gg(n){var r=n.alternate;r!==null&&(n.alternate=null,Gg(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Gi],delete r[lo],delete r[Wu],delete r[Z_],delete r[Q_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Vg(n){return n.tag===5||n.tag===3||n.tag===4}function Wg(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Vg(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Nd(n,r,l){var d=n.tag;if(d===5||d===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=xl));else if(d!==4&&(n=n.child,n!==null))for(Nd(n,r,l),n=n.sibling;n!==null;)Nd(n,r,l),n=n.sibling}function Pd(n,r,l){var d=n.tag;if(d===5||d===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(d!==4&&(n=n.child,n!==null))for(Pd(n,r,l),n=n.sibling;n!==null;)Pd(n,r,l),n=n.sibling}var Tn=null,Li=!1;function kr(n,r,l){for(l=l.child;l!==null;)Xg(n,r,l),l=l.sibling}function Xg(n,r,l){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(ce,l)}catch{}switch(l.tag){case 5:Pn||na(l,r);case 6:var d=Tn,p=Li;Tn=null,kr(n,r,l),Tn=d,Li=p,Tn!==null&&(Li?(n=Tn,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):Tn.removeChild(l.stateNode));break;case 18:Tn!==null&&(Li?(n=Tn,l=l.stateNode,n.nodeType===8?Vu(n.parentNode,l):n.nodeType===1&&Vu(n,l),Za(n)):Vu(Tn,l.stateNode));break;case 4:d=Tn,p=Li,Tn=l.stateNode.containerInfo,Li=!0,kr(n,r,l),Tn=d,Li=p;break;case 0:case 11:case 14:case 15:if(!Pn&&(d=l.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){p=d=d.next;do{var _=p,R=_.destroy;_=_.tag,R!==void 0&&((_&2)!==0||(_&4)!==0)&&Ad(l,r,R),p=p.next}while(p!==d)}kr(n,r,l);break;case 1:if(!Pn&&(na(l,r),d=l.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=l.memoizedProps,d.state=l.memoizedState,d.componentWillUnmount()}catch(z){an(l,r,z)}kr(n,r,l);break;case 21:kr(n,r,l);break;case 22:l.mode&1?(Pn=(d=Pn)||l.memoizedState!==null,kr(n,r,l),Pn=d):kr(n,r,l);break;default:kr(n,r,l)}}function $g(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new py),r.forEach(function(d){var p=by.bind(null,n,d);l.has(d)||(l.add(d),d.then(p,p))})}}function Di(n,r){var l=r.deletions;if(l!==null)for(var d=0;d<l.length;d++){var p=l[d];try{var _=n,R=r,z=R;e:for(;z!==null;){switch(z.tag){case 5:Tn=z.stateNode,Li=!1;break e;case 3:Tn=z.stateNode.containerInfo,Li=!0;break e;case 4:Tn=z.stateNode.containerInfo,Li=!0;break e}z=z.return}if(Tn===null)throw Error(t(160));Xg(_,R,p),Tn=null,Li=!1;var K=p.alternate;K!==null&&(K.return=null),p.return=null}catch(pe){an(p,r,pe)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)qg(r,n),r=r.sibling}function qg(n,r){var l=n.alternate,d=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Di(r,n),Xi(n),d&4){try{yo(3,n,n.return),Bl(3,n)}catch(Je){an(n,n.return,Je)}try{yo(5,n,n.return)}catch(Je){an(n,n.return,Je)}}break;case 1:Di(r,n),Xi(n),d&512&&l!==null&&na(l,l.return);break;case 5:if(Di(r,n),Xi(n),d&512&&l!==null&&na(l,l.return),n.flags&32){var p=n.stateNode;try{Me(p,"")}catch(Je){an(n,n.return,Je)}}if(d&4&&(p=n.stateNode,p!=null)){var _=n.memoizedProps,R=l!==null?l.memoizedProps:_,z=n.type,K=n.updateQueue;if(n.updateQueue=null,K!==null)try{z==="input"&&_.type==="radio"&&_.name!=null&&at(p,_),q(z,R);var pe=q(z,_);for(R=0;R<K.length;R+=2){var be=K[R],Ce=K[R+1];be==="style"?_e(p,Ce):be==="dangerouslySetInnerHTML"?ve(p,Ce):be==="children"?Me(p,Ce):T(p,be,Ce,pe)}switch(z){case"input":Pt(p,_);break;case"textarea":ke(p,_);break;case"select":var Ee=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var Ge=_.value;Ge!=null?zt(p,!!_.multiple,Ge,!1):Ee!==!!_.multiple&&(_.defaultValue!=null?zt(p,!!_.multiple,_.defaultValue,!0):zt(p,!!_.multiple,_.multiple?[]:"",!1))}p[lo]=_}catch(Je){an(n,n.return,Je)}}break;case 6:if(Di(r,n),Xi(n),d&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,_=n.memoizedProps;try{p.nodeValue=_}catch(Je){an(n,n.return,Je)}}break;case 3:if(Di(r,n),Xi(n),d&4&&l!==null&&l.memoizedState.isDehydrated)try{Za(r.containerInfo)}catch(Je){an(n,n.return,Je)}break;case 4:Di(r,n),Xi(n);break;case 13:Di(r,n),Xi(n),p=n.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(Id=tn())),d&4&&$g(n);break;case 22:if(be=l!==null&&l.memoizedState!==null,n.mode&1?(Pn=(pe=Pn)||be,Di(r,n),Pn=pe):Di(r,n),Xi(n),d&8192){if(pe=n.memoizedState!==null,(n.stateNode.isHidden=pe)&&!be&&(n.mode&1)!==0)for($e=n,be=n.child;be!==null;){for(Ce=$e=be;$e!==null;){switch(Ee=$e,Ge=Ee.child,Ee.tag){case 0:case 11:case 14:case 15:yo(4,Ee,Ee.return);break;case 1:na(Ee,Ee.return);var Ye=Ee.stateNode;if(typeof Ye.componentWillUnmount=="function"){d=Ee,l=Ee.return;try{r=d,Ye.props=r.memoizedProps,Ye.state=r.memoizedState,Ye.componentWillUnmount()}catch(Je){an(d,l,Je)}}break;case 5:na(Ee,Ee.return);break;case 22:if(Ee.memoizedState!==null){Zg(Ce);continue}}Ge!==null?(Ge.return=Ee,$e=Ge):Zg(Ce)}be=be.sibling}e:for(be=null,Ce=n;;){if(Ce.tag===5){if(be===null){be=Ce;try{p=Ce.stateNode,pe?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(z=Ce.stateNode,K=Ce.memoizedProps.style,R=K!=null&&K.hasOwnProperty("display")?K.display:null,z.style.display=ge("display",R))}catch(Je){an(n,n.return,Je)}}}else if(Ce.tag===6){if(be===null)try{Ce.stateNode.nodeValue=pe?"":Ce.memoizedProps}catch(Je){an(n,n.return,Je)}}else if((Ce.tag!==22&&Ce.tag!==23||Ce.memoizedState===null||Ce===n)&&Ce.child!==null){Ce.child.return=Ce,Ce=Ce.child;continue}if(Ce===n)break e;for(;Ce.sibling===null;){if(Ce.return===null||Ce.return===n)break e;be===Ce&&(be=null),Ce=Ce.return}be===Ce&&(be=null),Ce.sibling.return=Ce.return,Ce=Ce.sibling}}break;case 19:Di(r,n),Xi(n),d&4&&$g(n);break;case 21:break;default:Di(r,n),Xi(n)}}function Xi(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(Vg(l)){var d=l;break e}l=l.return}throw Error(t(160))}switch(d.tag){case 5:var p=d.stateNode;d.flags&32&&(Me(p,""),d.flags&=-33);var _=Wg(n);Pd(n,_,p);break;case 3:case 4:var R=d.stateNode.containerInfo,z=Wg(n);Nd(n,z,R);break;default:throw Error(t(161))}}catch(K){an(n,n.return,K)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function gy(n,r,l){$e=n,Yg(n)}function Yg(n,r,l){for(var d=(n.mode&1)!==0;$e!==null;){var p=$e,_=p.child;if(p.tag===22&&d){var R=p.memoizedState!==null||jl;if(!R){var z=p.alternate,K=z!==null&&z.memoizedState!==null||Pn;z=jl;var pe=Pn;if(jl=R,(Pn=K)&&!pe)for($e=p;$e!==null;)R=$e,K=R.child,R.tag===22&&R.memoizedState!==null?Qg(p):K!==null?(K.return=R,$e=K):Qg(p);for(;_!==null;)$e=_,Yg(_),_=_.sibling;$e=p,jl=z,Pn=pe}Kg(n)}else(p.subtreeFlags&8772)!==0&&_!==null?(_.return=p,$e=_):Kg(n)}}function Kg(n){for(;$e!==null;){var r=$e;if((r.flags&8772)!==0){var l=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Pn||Bl(5,r);break;case 1:var d=r.stateNode;if(r.flags&4&&!Pn)if(l===null)d.componentDidMount();else{var p=r.elementType===r.type?l.memoizedProps:Pi(r.type,l.memoizedProps);d.componentDidUpdate(p,l.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var _=r.updateQueue;_!==null&&Zm(r,_,d);break;case 3:var R=r.updateQueue;if(R!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}Zm(r,R,l)}break;case 5:var z=r.stateNode;if(l===null&&r.flags&4){l=z;var K=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":K.autoFocus&&l.focus();break;case"img":K.src&&(l.src=K.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var pe=r.alternate;if(pe!==null){var be=pe.memoizedState;if(be!==null){var Ce=be.dehydrated;Ce!==null&&Za(Ce)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Pn||r.flags&512&&Rd(r)}catch(Ee){an(r,r.return,Ee)}}if(r===n){$e=null;break}if(l=r.sibling,l!==null){l.return=r.return,$e=l;break}$e=r.return}}function Zg(n){for(;$e!==null;){var r=$e;if(r===n){$e=null;break}var l=r.sibling;if(l!==null){l.return=r.return,$e=l;break}$e=r.return}}function Qg(n){for(;$e!==null;){var r=$e;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{Bl(4,r)}catch(K){an(r,l,K)}break;case 1:var d=r.stateNode;if(typeof d.componentDidMount=="function"){var p=r.return;try{d.componentDidMount()}catch(K){an(r,p,K)}}var _=r.return;try{Rd(r)}catch(K){an(r,_,K)}break;case 5:var R=r.return;try{Rd(r)}catch(K){an(r,R,K)}}}catch(K){an(r,r.return,K)}if(r===n){$e=null;break}var z=r.sibling;if(z!==null){z.return=r.return,$e=z;break}$e=r.return}}var xy=Math.ceil,zl=N.ReactCurrentDispatcher,Ld=N.ReactCurrentOwner,_i=N.ReactCurrentBatchConfig,It=0,Sn=null,hn=null,wn=0,oi=0,ia=Dr(0),mn=0,So=null,xs=0,Hl=0,Dd=0,Mo=null,Zn=null,Id=0,ra=1/0,fr=null,Gl=!1,Ud=null,jr=null,Vl=!1,Br=null,Wl=0,Eo=0,Fd=null,Xl=-1,$l=0;function zn(){return(It&6)!==0?tn():Xl!==-1?Xl:Xl=tn()}function zr(n){return(n.mode&1)===0?1:(It&2)!==0&&wn!==0?wn&-wn:ey.transition!==null?($l===0&&($l=He()),$l):(n=Ct,n!==0||(n=window.event,n=n===void 0?16:em(n.type)),n)}function Ii(n,r,l,d){if(50<Eo)throw Eo=0,Fd=null,Error(t(185));Et(n,l,d),((It&2)===0||n!==Sn)&&(n===Sn&&((It&2)===0&&(Hl|=l),mn===4&&Hr(n,wn)),Qn(n,d),l===1&&It===0&&(r.mode&1)===0&&(ra=tn()+500,Sl&&Ur()))}function Qn(n,r){var l=n.callbackNode;jt(n,r);var d=Wt(n,n===Sn?wn:0);if(d===0)l!==null&&il(l),n.callbackNode=null,n.callbackPriority=0;else if(r=d&-d,n.callbackPriority!==r){if(l!=null&&il(l),r===1)n.tag===0?J_(ex.bind(null,n)):jm(ex.bind(null,n)),Y_(function(){(It&6)===0&&Ur()}),l=null;else{switch(sr(d)){case 1:l=Xa;break;case 4:l=P;break;case 16:l=ie;break;case 536870912:l=ue;break;default:l=ie}l=lx(l,Jg.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function Jg(n,r){if(Xl=-1,$l=0,(It&6)!==0)throw Error(t(327));var l=n.callbackNode;if(sa()&&n.callbackNode!==l)return null;var d=Wt(n,n===Sn?wn:0);if(d===0)return null;if((d&30)!==0||(d&n.expiredLanes)!==0||r)r=ql(n,d);else{r=d;var p=It;It|=2;var _=nx();(Sn!==n||wn!==r)&&(fr=null,ra=tn()+500,_s(n,r));do try{yy();break}catch(z){tx(n,z)}while(!0);ed(),zl.current=_,It=p,hn!==null?r=0:(Sn=null,wn=0,r=mn)}if(r!==0){if(r===2&&(p=dn(n),p!==0&&(d=p,r=Od(n,p))),r===1)throw l=So,_s(n,0),Hr(n,d),Qn(n,tn()),l;if(r===6)Hr(n,d);else{if(p=n.current.alternate,(d&30)===0&&!vy(p)&&(r=ql(n,d),r===2&&(_=dn(n),_!==0&&(d=_,r=Od(n,_))),r===1))throw l=So,_s(n,0),Hr(n,d),Qn(n,tn()),l;switch(n.finishedWork=p,n.finishedLanes=d,r){case 0:case 1:throw Error(t(345));case 2:ys(n,Zn,fr);break;case 3:if(Hr(n,d),(d&130023424)===d&&(r=Id+500-tn(),10<r)){if(Wt(n,0)!==0)break;if(p=n.suspendedLanes,(p&d)!==d){zn(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=Gu(ys.bind(null,n,Zn,fr),r);break}ys(n,Zn,fr);break;case 4:if(Hr(n,d),(d&4194240)===d)break;for(r=n.eventTimes,p=-1;0<d;){var R=31-De(d);_=1<<R,R=r[R],R>p&&(p=R),d&=~_}if(d=p,d=tn()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*xy(d/1960))-d,10<d){n.timeoutHandle=Gu(ys.bind(null,n,Zn,fr),d);break}ys(n,Zn,fr);break;case 5:ys(n,Zn,fr);break;default:throw Error(t(329))}}}return Qn(n,tn()),n.callbackNode===l?Jg.bind(null,n):null}function Od(n,r){var l=Mo;return n.current.memoizedState.isDehydrated&&(_s(n,r).flags|=256),n=ql(n,r),n!==2&&(r=Zn,Zn=l,r!==null&&kd(r)),n}function kd(n){Zn===null?Zn=n:Zn.push.apply(Zn,n)}function vy(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var d=0;d<l.length;d++){var p=l[d],_=p.getSnapshot;p=p.value;try{if(!Ri(_(),p))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Hr(n,r){for(r&=~Dd,r&=~Hl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-De(r),d=1<<l;n[l]=-1,r&=~d}}function ex(n){if((It&6)!==0)throw Error(t(327));sa();var r=Wt(n,0);if((r&1)===0)return Qn(n,tn()),null;var l=ql(n,r);if(n.tag!==0&&l===2){var d=dn(n);d!==0&&(r=d,l=Od(n,d))}if(l===1)throw l=So,_s(n,0),Hr(n,r),Qn(n,tn()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,ys(n,Zn,fr),Qn(n,tn()),null}function jd(n,r){var l=It;It|=1;try{return n(r)}finally{It=l,It===0&&(ra=tn()+500,Sl&&Ur())}}function vs(n){Br!==null&&Br.tag===0&&(It&6)===0&&sa();var r=It;It|=1;var l=_i.transition,d=Ct;try{if(_i.transition=null,Ct=1,n)return n()}finally{Ct=d,_i.transition=l,It=r,(It&6)===0&&Ur()}}function Bd(){oi=ia.current,Kt(ia)}function _s(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,q_(l)),hn!==null)for(l=hn.return;l!==null;){var d=l;switch(Yu(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&_l();break;case 3:ea(),Kt(qn),Kt(An),ld();break;case 5:ad(d);break;case 4:ea();break;case 13:Kt(nn);break;case 19:Kt(nn);break;case 10:td(d.type._context);break;case 22:case 23:Bd()}l=l.return}if(Sn=n,hn=n=Gr(n.current,null),wn=oi=r,mn=0,So=null,Dd=Hl=xs=0,Zn=Mo=null,ps!==null){for(r=0;r<ps.length;r++)if(l=ps[r],d=l.interleaved,d!==null){l.interleaved=null;var p=d.next,_=l.pending;if(_!==null){var R=_.next;_.next=p,d.next=R}l.pending=d}ps=null}return n}function tx(n,r){do{var l=hn;try{if(ed(),Pl.current=Ul,Ll){for(var d=rn.memoizedState;d!==null;){var p=d.queue;p!==null&&(p.pending=null),d=d.next}Ll=!1}if(gs=0,yn=pn=rn=null,mo=!1,go=0,Ld.current=null,l===null||l.return===null){mn=1,So=r,hn=null;break}e:{var _=n,R=l.return,z=l,K=r;if(r=wn,z.flags|=32768,K!==null&&typeof K=="object"&&typeof K.then=="function"){var pe=K,be=z,Ce=be.tag;if((be.mode&1)===0&&(Ce===0||Ce===11||Ce===15)){var Ee=be.alternate;Ee?(be.updateQueue=Ee.updateQueue,be.memoizedState=Ee.memoizedState,be.lanes=Ee.lanes):(be.updateQueue=null,be.memoizedState=null)}var Ge=wg(R);if(Ge!==null){Ge.flags&=-257,Cg(Ge,R,z,_,r),Ge.mode&1&&Tg(_,pe,r),r=Ge,K=pe;var Ye=r.updateQueue;if(Ye===null){var Je=new Set;Je.add(K),r.updateQueue=Je}else Ye.add(K);break e}else{if((r&1)===0){Tg(_,pe,r),zd();break e}K=Error(t(426))}}else if(Jt&&z.mode&1){var ln=wg(R);if(ln!==null){(ln.flags&65536)===0&&(ln.flags|=256),Cg(ln,R,z,_,r),Qu(ta(K,z));break e}}_=K=ta(K,z),mn!==4&&(mn=2),Mo===null?Mo=[_]:Mo.push(_),_=R;do{switch(_.tag){case 3:_.flags|=65536,r&=-r,_.lanes|=r;var oe=Eg(_,K,r);Km(_,oe);break e;case 1:z=K;var te=_.type,de=_.stateNode;if((_.flags&128)===0&&(typeof te.getDerivedStateFromError=="function"||de!==null&&typeof de.componentDidCatch=="function"&&(jr===null||!jr.has(de)))){_.flags|=65536,r&=-r,_.lanes|=r;var Le=bg(_,z,r);Km(_,Le);break e}}_=_.return}while(_!==null)}rx(l)}catch(it){r=it,hn===l&&l!==null&&(hn=l=l.return);continue}break}while(!0)}function nx(){var n=zl.current;return zl.current=Ul,n===null?Ul:n}function zd(){(mn===0||mn===3||mn===2)&&(mn=4),Sn===null||(xs&268435455)===0&&(Hl&268435455)===0||Hr(Sn,wn)}function ql(n,r){var l=It;It|=2;var d=nx();(Sn!==n||wn!==r)&&(fr=null,_s(n,r));do try{_y();break}catch(p){tx(n,p)}while(!0);if(ed(),It=l,zl.current=d,hn!==null)throw Error(t(261));return Sn=null,wn=0,mn}function _y(){for(;hn!==null;)ix(hn)}function yy(){for(;hn!==null&&!vu();)ix(hn)}function ix(n){var r=ox(n.alternate,n,oi);n.memoizedProps=n.pendingProps,r===null?rx(n):hn=r,Ld.current=null}function rx(n){var r=n;do{var l=r.alternate;if(n=r.return,(r.flags&32768)===0){if(l=hy(l,r,oi),l!==null){hn=l;return}}else{if(l=fy(l,r),l!==null){l.flags&=32767,hn=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{mn=6,hn=null;return}}if(r=r.sibling,r!==null){hn=r;return}hn=r=n}while(r!==null);mn===0&&(mn=5)}function ys(n,r,l){var d=Ct,p=_i.transition;try{_i.transition=null,Ct=1,Sy(n,r,l,d)}finally{_i.transition=p,Ct=d}return null}function Sy(n,r,l,d){do sa();while(Br!==null);if((It&6)!==0)throw Error(t(327));l=n.finishedWork;var p=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var _=l.lanes|l.childLanes;if(Xn(n,_),n===Sn&&(hn=Sn=null,wn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Vl||(Vl=!0,lx(ie,function(){return sa(),null})),_=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||_){_=_i.transition,_i.transition=null;var R=Ct;Ct=1;var z=It;It|=4,Ld.current=null,my(n,l),qg(l,n),z_(zu),sl=!!Bu,zu=Bu=null,n.current=l,gy(l),_u(),It=z,Ct=R,_i.transition=_}else n.current=l;if(Vl&&(Vl=!1,Br=n,Wl=p),_=n.pendingLanes,_===0&&(jr=null),We(l.stateNode),Qn(n,tn()),r!==null)for(d=n.onRecoverableError,l=0;l<r.length;l++)p=r[l],d(p.value,{componentStack:p.stack,digest:p.digest});if(Gl)throw Gl=!1,n=Ud,Ud=null,n;return(Wl&1)!==0&&n.tag!==0&&sa(),_=n.pendingLanes,(_&1)!==0?n===Fd?Eo++:(Eo=0,Fd=n):Eo=0,Ur(),null}function sa(){if(Br!==null){var n=sr(Wl),r=_i.transition,l=Ct;try{if(_i.transition=null,Ct=16>n?16:n,Br===null)var d=!1;else{if(n=Br,Br=null,Wl=0,(It&6)!==0)throw Error(t(331));var p=It;for(It|=4,$e=n.current;$e!==null;){var _=$e,R=_.child;if(($e.flags&16)!==0){var z=_.deletions;if(z!==null){for(var K=0;K<z.length;K++){var pe=z[K];for($e=pe;$e!==null;){var be=$e;switch(be.tag){case 0:case 11:case 15:yo(8,be,_)}var Ce=be.child;if(Ce!==null)Ce.return=be,$e=Ce;else for(;$e!==null;){be=$e;var Ee=be.sibling,Ge=be.return;if(Gg(be),be===pe){$e=null;break}if(Ee!==null){Ee.return=Ge,$e=Ee;break}$e=Ge}}}var Ye=_.alternate;if(Ye!==null){var Je=Ye.child;if(Je!==null){Ye.child=null;do{var ln=Je.sibling;Je.sibling=null,Je=ln}while(Je!==null)}}$e=_}}if((_.subtreeFlags&2064)!==0&&R!==null)R.return=_,$e=R;else e:for(;$e!==null;){if(_=$e,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:yo(9,_,_.return)}var oe=_.sibling;if(oe!==null){oe.return=_.return,$e=oe;break e}$e=_.return}}var te=n.current;for($e=te;$e!==null;){R=$e;var de=R.child;if((R.subtreeFlags&2064)!==0&&de!==null)de.return=R,$e=de;else e:for(R=te;$e!==null;){if(z=$e,(z.flags&2048)!==0)try{switch(z.tag){case 0:case 11:case 15:Bl(9,z)}}catch(it){an(z,z.return,it)}if(z===R){$e=null;break e}var Le=z.sibling;if(Le!==null){Le.return=z.return,$e=Le;break e}$e=z.return}}if(It=p,Ur(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(ce,n)}catch{}d=!0}return d}finally{Ct=l,_i.transition=r}}return!1}function sx(n,r,l){r=ta(l,r),r=Eg(n,r,1),n=Or(n,r,1),r=zn(),n!==null&&(Et(n,1,r),Qn(n,r))}function an(n,r,l){if(n.tag===3)sx(n,n,l);else for(;r!==null;){if(r.tag===3){sx(r,n,l);break}else if(r.tag===1){var d=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(jr===null||!jr.has(d))){n=ta(l,n),n=bg(r,n,1),r=Or(r,n,1),n=zn(),r!==null&&(Et(r,1,n),Qn(r,n));break}}r=r.return}}function My(n,r,l){var d=n.pingCache;d!==null&&d.delete(r),r=zn(),n.pingedLanes|=n.suspendedLanes&l,Sn===n&&(wn&l)===l&&(mn===4||mn===3&&(wn&130023424)===wn&&500>tn()-Id?_s(n,0):Dd|=l),Qn(n,r)}function ax(n,r){r===0&&((n.mode&1)===0?r=1:(r=tt,tt<<=1,(tt&130023424)===0&&(tt=4194304)));var l=zn();n=ur(n,r),n!==null&&(Et(n,r,l),Qn(n,l))}function Ey(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),ax(n,l)}function by(n,r){var l=0;switch(n.tag){case 13:var d=n.stateNode,p=n.memoizedState;p!==null&&(l=p.retryLane);break;case 19:d=n.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(r),ax(n,l)}var ox;ox=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||qn.current)Kn=!0;else{if((n.lanes&l)===0&&(r.flags&128)===0)return Kn=!1,dy(n,r,l);Kn=(n.flags&131072)!==0}else Kn=!1,Jt&&(r.flags&1048576)!==0&&Bm(r,El,r.index);switch(r.lanes=0,r.tag){case 2:var d=r.type;kl(n,r),n=r.pendingProps;var p=$s(r,An.current);Js(r,l),p=dd(null,r,d,n,p,l);var _=hd();return r.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Yn(d)?(_=!0,yl(r)):_=!1,r.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,rd(r),p.updater=Fl,r.stateNode=p,p._reactInternals=r,vd(r,d,n,l),r=Md(null,r,d,!0,_,l)):(r.tag=0,Jt&&_&&qu(r),Bn(null,r,p,l),r=r.child),r;case 16:d=r.elementType;e:{switch(kl(n,r),n=r.pendingProps,p=d._init,d=p(d._payload),r.type=d,p=r.tag=wy(d),n=Pi(d,n),p){case 0:r=Sd(null,r,d,n,l);break e;case 1:r=Dg(null,r,d,n,l);break e;case 11:r=Ag(null,r,d,n,l);break e;case 14:r=Rg(null,r,d,Pi(d.type,n),l);break e}throw Error(t(306,d,""))}return r;case 0:return d=r.type,p=r.pendingProps,p=r.elementType===d?p:Pi(d,p),Sd(n,r,d,p,l);case 1:return d=r.type,p=r.pendingProps,p=r.elementType===d?p:Pi(d,p),Dg(n,r,d,p,l);case 3:e:{if(Ig(r),n===null)throw Error(t(387));d=r.pendingProps,_=r.memoizedState,p=_.element,Ym(n,r),Rl(r,d,null,l);var R=r.memoizedState;if(d=R.element,_.isDehydrated)if(_={element:d,isDehydrated:!1,cache:R.cache,pendingSuspenseBoundaries:R.pendingSuspenseBoundaries,transitions:R.transitions},r.updateQueue.baseState=_,r.memoizedState=_,r.flags&256){p=ta(Error(t(423)),r),r=Ug(n,r,d,l,p);break e}else if(d!==p){p=ta(Error(t(424)),r),r=Ug(n,r,d,l,p);break e}else for(ai=Lr(r.stateNode.containerInfo.firstChild),si=r,Jt=!0,Ni=null,l=$m(r,null,d,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Ks(),d===p){r=hr(n,r,l);break e}Bn(n,r,d,l)}r=r.child}return r;case 5:return Qm(r),n===null&&Zu(r),d=r.type,p=r.pendingProps,_=n!==null?n.memoizedProps:null,R=p.children,Hu(d,p)?R=null:_!==null&&Hu(d,_)&&(r.flags|=32),Lg(n,r),Bn(n,r,R,l),r.child;case 6:return n===null&&Zu(r),null;case 13:return Fg(n,r,l);case 4:return sd(r,r.stateNode.containerInfo),d=r.pendingProps,n===null?r.child=Zs(r,null,d,l):Bn(n,r,d,l),r.child;case 11:return d=r.type,p=r.pendingProps,p=r.elementType===d?p:Pi(d,p),Ag(n,r,d,p,l);case 7:return Bn(n,r,r.pendingProps,l),r.child;case 8:return Bn(n,r,r.pendingProps.children,l),r.child;case 12:return Bn(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(d=r.type._context,p=r.pendingProps,_=r.memoizedProps,R=p.value,Xt(wl,d._currentValue),d._currentValue=R,_!==null)if(Ri(_.value,R)){if(_.children===p.children&&!qn.current){r=hr(n,r,l);break e}}else for(_=r.child,_!==null&&(_.return=r);_!==null;){var z=_.dependencies;if(z!==null){R=_.child;for(var K=z.firstContext;K!==null;){if(K.context===d){if(_.tag===1){K=dr(-1,l&-l),K.tag=2;var pe=_.updateQueue;if(pe!==null){pe=pe.shared;var be=pe.pending;be===null?K.next=K:(K.next=be.next,be.next=K),pe.pending=K}}_.lanes|=l,K=_.alternate,K!==null&&(K.lanes|=l),nd(_.return,l,r),z.lanes|=l;break}K=K.next}}else if(_.tag===10)R=_.type===r.type?null:_.child;else if(_.tag===18){if(R=_.return,R===null)throw Error(t(341));R.lanes|=l,z=R.alternate,z!==null&&(z.lanes|=l),nd(R,l,r),R=_.sibling}else R=_.child;if(R!==null)R.return=_;else for(R=_;R!==null;){if(R===r){R=null;break}if(_=R.sibling,_!==null){_.return=R.return,R=_;break}R=R.return}_=R}Bn(n,r,p.children,l),r=r.child}return r;case 9:return p=r.type,d=r.pendingProps.children,Js(r,l),p=xi(p),d=d(p),r.flags|=1,Bn(n,r,d,l),r.child;case 14:return d=r.type,p=Pi(d,r.pendingProps),p=Pi(d.type,p),Rg(n,r,d,p,l);case 15:return Ng(n,r,r.type,r.pendingProps,l);case 17:return d=r.type,p=r.pendingProps,p=r.elementType===d?p:Pi(d,p),kl(n,r),r.tag=1,Yn(d)?(n=!0,yl(r)):n=!1,Js(r,l),Sg(r,d,p),vd(r,d,p,l),Md(null,r,d,!0,n,l);case 19:return kg(n,r,l);case 22:return Pg(n,r,l)}throw Error(t(156,r.tag))};function lx(n,r){return nl(n,r)}function Ty(n,r,l,d){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yi(n,r,l,d){return new Ty(n,r,l,d)}function Hd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function wy(n){if(typeof n=="function")return Hd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ee)return 11;if(n===V)return 14}return 2}function Gr(n,r){var l=n.alternate;return l===null?(l=yi(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function Yl(n,r,l,d,p,_){var R=2;if(d=n,typeof n=="function")Hd(n)&&(R=1);else if(typeof n=="string")R=5;else e:switch(n){case O:return Ss(l.children,p,_,r);case w:R=8,p|=8;break;case U:return n=yi(12,l,r,p|2),n.elementType=U,n.lanes=_,n;case G:return n=yi(13,l,r,p),n.elementType=G,n.lanes=_,n;case Q:return n=yi(19,l,r,p),n.elementType=Q,n.lanes=_,n;case W:return Kl(l,p,_,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Y:R=10;break e;case H:R=9;break e;case ee:R=11;break e;case V:R=14;break e;case k:R=16,d=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=yi(R,l,r,p),r.elementType=n,r.type=d,r.lanes=_,r}function Ss(n,r,l,d){return n=yi(7,n,d,r),n.lanes=l,n}function Kl(n,r,l,d){return n=yi(22,n,d,r),n.elementType=W,n.lanes=l,n.stateNode={isHidden:!1},n}function Gd(n,r,l){return n=yi(6,n,null,r),n.lanes=l,n}function Vd(n,r,l){return r=yi(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function Cy(n,r,l,d,p){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bn(0),this.expirationTimes=bn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bn(0),this.identifierPrefix=d,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Wd(n,r,l,d,p,_,R,z,K){return n=new Cy(n,r,l,z,K),r===1?(r=1,_===!0&&(r|=8)):r=0,_=yi(3,null,null,r),n.current=_,_.stateNode=n,_.memoizedState={element:d,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},rd(_),n}function Ay(n,r,l){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:d==null?null:""+d,children:n,containerInfo:r,implementation:l}}function cx(n){if(!n)return Ir;n=n._reactInternals;e:{if(zi(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Yn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(Yn(l))return Om(n,l,r)}return r}function ux(n,r,l,d,p,_,R,z,K){return n=Wd(l,d,!0,n,p,_,R,z,K),n.context=cx(null),l=n.current,d=zn(),p=zr(l),_=dr(d,p),_.callback=r??null,Or(l,_,p),n.current.lanes=p,Et(n,p,d),Qn(n,d),n}function Zl(n,r,l,d){var p=r.current,_=zn(),R=zr(p);return l=cx(l),r.context===null?r.context=l:r.pendingContext=l,r=dr(_,R),r.payload={element:n},d=d===void 0?null:d,d!==null&&(r.callback=d),n=Or(p,r,R),n!==null&&(Ii(n,p,R,_),Al(n,p,R)),R}function Ql(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function dx(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function Xd(n,r){dx(n,r),(n=n.alternate)&&dx(n,r)}function Ry(){return null}var hx=typeof reportError=="function"?reportError:function(n){console.error(n)};function $d(n){this._internalRoot=n}Jl.prototype.render=$d.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Zl(n,r,null,null)},Jl.prototype.unmount=$d.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;vs(function(){Zl(null,n,null,null)}),r[ar]=null}};function Jl(n){this._internalRoot=n}Jl.prototype.unstable_scheduleHydration=function(n){if(n){var r=Bt();n={blockedOn:null,target:n,priority:r};for(var l=0;l<Rr.length&&r!==0&&r<Rr[l].priority;l++);Rr.splice(l,0,n),l===0&&Qp(n)}};function qd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ec(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function fx(){}function Ny(n,r,l,d,p){if(p){if(typeof d=="function"){var _=d;d=function(){var pe=Ql(R);_.call(pe)}}var R=ux(r,d,n,0,null,!1,!1,"",fx);return n._reactRootContainer=R,n[ar]=R.current,ao(n.nodeType===8?n.parentNode:n),vs(),R}for(;p=n.lastChild;)n.removeChild(p);if(typeof d=="function"){var z=d;d=function(){var pe=Ql(K);z.call(pe)}}var K=Wd(n,0,!1,null,null,!1,!1,"",fx);return n._reactRootContainer=K,n[ar]=K.current,ao(n.nodeType===8?n.parentNode:n),vs(function(){Zl(r,K,l,d)}),K}function tc(n,r,l,d,p){var _=l._reactRootContainer;if(_){var R=_;if(typeof p=="function"){var z=p;p=function(){var K=Ql(R);z.call(K)}}Zl(r,R,n,p)}else R=Ny(l,r,n,p,d);return Ql(R)}Ot=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=Lt(r.pendingLanes);l!==0&&($n(r,l|1),Qn(r,tn()),(It&6)===0&&(ra=tn()+500,Ur()))}break;case 13:vs(function(){var d=ur(n,1);if(d!==null){var p=zn();Ii(d,n,1,p)}}),Xd(n,1)}},qt=function(n){if(n.tag===13){var r=ur(n,134217728);if(r!==null){var l=zn();Ii(r,n,134217728,l)}Xd(n,134217728)}},Ci=function(n){if(n.tag===13){var r=zr(n),l=ur(n,r);if(l!==null){var d=zn();Ii(l,n,r,d)}Xd(n,r)}},Bt=function(){return Ct},Ai=function(n,r){var l=Ct;try{return Ct=n,r()}finally{Ct=l}},ct=function(n,r,l){switch(r){case"input":if(Pt(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var d=l[r];if(d!==n&&d.form===n.form){var p=vl(d);if(!p)throw Error(t(90));Ze(d),Pt(d,p)}}}break;case"textarea":ke(n,l);break;case"select":r=l.value,r!=null&&zt(n,!!l.multiple,r,!1)}},Pe=jd,ye=vs;var Py={usingClientEntryPoint:!1,Events:[co,Ws,vl,xe,ze,jd]},bo={findFiberByHostInstance:us,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ly={bundleType:bo.bundleType,version:bo.version,rendererPackageName:bo.rendererPackageName,rendererConfig:bo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:N.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Va(n),n===null?null:n.stateNode},findFiberByHostInstance:bo.findFiberByHostInstance||Ry,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nc.isDisabled&&nc.supportsFiber)try{ce=nc.inject(Ly),Ue=nc}catch{}}return Jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Py,Jn.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qd(r))throw Error(t(200));return Ay(n,r,null,l)},Jn.createRoot=function(n,r){if(!qd(n))throw Error(t(299));var l=!1,d="",p=hx;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(d=r.identifierPrefix),r.onRecoverableError!==void 0&&(p=r.onRecoverableError)),r=Wd(n,1,!1,null,null,l,!1,d,p),n[ar]=r.current,ao(n.nodeType===8?n.parentNode:n),new $d(r)},Jn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Va(r),n=n===null?null:n.stateNode,n},Jn.flushSync=function(n){return vs(n)},Jn.hydrate=function(n,r,l){if(!ec(r))throw Error(t(200));return tc(null,n,r,!0,l)},Jn.hydrateRoot=function(n,r,l){if(!qd(n))throw Error(t(405));var d=l!=null&&l.hydratedSources||null,p=!1,_="",R=hx;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(_=l.identifierPrefix),l.onRecoverableError!==void 0&&(R=l.onRecoverableError)),r=ux(r,null,n,1,l??null,p,!1,_,R),n[ar]=r.current,ao(n),d)for(n=0;n<d.length;n++)l=d[n],p=l._getVersion,p=p(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,p]:r.mutableSourceEagerHydrationData.push(l,p);return new Jl(r)},Jn.render=function(n,r,l){if(!ec(r))throw Error(t(200));return tc(null,n,r,!1,l)},Jn.unmountComponentAtNode=function(n){if(!ec(n))throw Error(t(40));return n._reactRootContainer?(vs(function(){tc(null,null,n,!1,function(){n._reactRootContainer=null,n[ar]=null})}),!0):!1},Jn.unstable_batchedUpdates=jd,Jn.unstable_renderSubtreeIntoContainer=function(n,r,l,d){if(!ec(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return tc(n,r,l,!1,d)},Jn.version="18.3.1-next-f1338f8080-20240426",Jn}var Sx;function Gy(){if(Sx)return Qd.exports;Sx=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Qd.exports=Hy(),Qd.exports}var Mx;function Vy(){if(Mx)return ic;Mx=1;var i=Gy();return ic.createRoot=i.createRoot,ic.hydrateRoot=i.hydrateRoot,ic}var Wy=Vy();const Xy=Qv(Wy);/**
 * react-router v7.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Ex="popstate";function $y(i={}){function e(s,a){let{pathname:c,search:u,hash:h}=s.location;return of("",{pathname:c,search:u,hash:h},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(s,a){return typeof a=="string"?a:Go(a)}return Yy(e,t,null,i)}function en(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}function bi(i,e){if(!i){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function qy(){return Math.random().toString(36).substring(2,10)}function bx(i,e){return{usr:i.state,key:i.key,idx:e}}function of(i,e,t=null,s){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof e=="string"?Ua(e):e,state:t,key:e&&e.key||s||qy()}}function Go({pathname:i="/",search:e="",hash:t=""}){return e&&e!=="?"&&(i+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(i+=t.charAt(0)==="#"?t:"#"+t),i}function Ua(i){let e={};if(i){let t=i.indexOf("#");t>=0&&(e.hash=i.substring(t),i=i.substring(0,t));let s=i.indexOf("?");s>=0&&(e.search=i.substring(s),i=i.substring(0,s)),i&&(e.pathname=i)}return e}function Yy(i,e,t,s={}){let{window:a=document.defaultView,v5Compat:c=!1}=s,u=a.history,h="POP",f=null,m=v();m==null&&(m=0,u.replaceState({...u.state,idx:m},""));function v(){return(u.state||{idx:null}).idx}function x(){h="POP";let y=v(),S=y==null?null:y-m;m=y,f&&f({action:h,location:A.location,delta:S})}function g(y,S){h="PUSH";let b=of(A.location,y,S);m=v()+1;let T=bx(b,m),N=A.createHref(b);try{u.pushState(T,"",N)}catch(D){if(D instanceof DOMException&&D.name==="DataCloneError")throw D;a.location.assign(N)}c&&f&&f({action:h,location:A.location,delta:1})}function M(y,S){h="REPLACE";let b=of(A.location,y,S);m=v();let T=bx(b,m),N=A.createHref(b);u.replaceState(T,"",N),c&&f&&f({action:h,location:A.location,delta:0})}function E(y){return Ky(y)}let A={get action(){return h},get location(){return i(a,u)},listen(y){if(f)throw new Error("A history only accepts one active listener");return a.addEventListener(Ex,x),f=y,()=>{a.removeEventListener(Ex,x),f=null}},createHref(y){return e(a,y)},createURL:E,encodeLocation(y){let S=E(y);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:g,replace:M,go(y){return u.go(y)}};return A}function Ky(i,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),en(t,"No window.location.(origin|href) available to create URL");let s=typeof i=="string"?i:Go(i);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=t+s),new URL(s,t)}function Jv(i,e,t="/"){return Zy(i,e,t,!1)}function Zy(i,e,t,s){let a=typeof e=="string"?Ua(e):e,c=Er(a.pathname||"/",t);if(c==null)return null;let u=e0(i);Qy(u);let h=null;for(let f=0;h==null&&f<u.length;++f){let m=cS(c);h=oS(u[f],m,s)}return h}function e0(i,e=[],t=[],s="",a=!1){let c=(u,h,f=a,m)=>{let v={relativePath:m===void 0?u.path||"":m,caseSensitive:u.caseSensitive===!0,childrenIndex:h,route:u};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(s)&&f)return;en(v.relativePath.startsWith(s),`Absolute route path "${v.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(s.length)}let x=Sr([s,v.relativePath]),g=t.concat(v);u.children&&u.children.length>0&&(en(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),e0(u.children,e,g,x,f)),!(u.path==null&&!u.index)&&e.push({path:x,score:sS(x,u.index),routesMeta:g})};return i.forEach((u,h)=>{var f;if(u.path===""||!((f=u.path)!=null&&f.includes("?")))c(u,h);else for(let m of t0(u.path))c(u,h,!0,m)}),e}function t0(i){let e=i.split("/");if(e.length===0)return[];let[t,...s]=e,a=t.endsWith("?"),c=t.replace(/\?$/,"");if(s.length===0)return a?[c,""]:[c];let u=t0(s.join("/")),h=[];return h.push(...u.map(f=>f===""?c:[c,f].join("/"))),a&&h.push(...u),h.map(f=>i.startsWith("/")&&f===""?"/":f)}function Qy(i){i.sort((e,t)=>e.score!==t.score?t.score-e.score:aS(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var Jy=/^:[\w-]+$/,eS=3,tS=2,nS=1,iS=10,rS=-2,Tx=i=>i==="*";function sS(i,e){let t=i.split("/"),s=t.length;return t.some(Tx)&&(s+=rS),e&&(s+=tS),t.filter(a=>!Tx(a)).reduce((a,c)=>a+(Jy.test(c)?eS:c===""?nS:iS),s)}function aS(i,e){return i.length===e.length&&i.slice(0,-1).every((s,a)=>s===e[a])?i[i.length-1]-e[e.length-1]:0}function oS(i,e,t=!1){let{routesMeta:s}=i,a={},c="/",u=[];for(let h=0;h<s.length;++h){let f=s[h],m=h===s.length-1,v=c==="/"?e:e.slice(c.length)||"/",x=Qc({path:f.relativePath,caseSensitive:f.caseSensitive,end:m},v),g=f.route;if(!x&&m&&t&&!s[s.length-1].route.index&&(x=Qc({path:f.relativePath,caseSensitive:f.caseSensitive,end:!1},v)),!x)return null;Object.assign(a,x.params),u.push({params:a,pathname:Sr([c,x.pathname]),pathnameBase:fS(Sr([c,x.pathnameBase])),route:g}),x.pathnameBase!=="/"&&(c=Sr([c,x.pathnameBase]))}return u}function Qc(i,e){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[t,s]=lS(i.path,i.caseSensitive,i.end),a=e.match(t);if(!a)return null;let c=a[0],u=c.replace(/(.)\/+$/,"$1"),h=a.slice(1);return{params:s.reduce((m,{paramName:v,isOptional:x},g)=>{if(v==="*"){let E=h[g]||"";u=c.slice(0,c.length-E.length).replace(/(.)\/+$/,"$1")}const M=h[g];return x&&!M?m[v]=void 0:m[v]=(M||"").replace(/%2F/g,"/"),m},{}),pathname:c,pathnameBase:u,pattern:i}}function lS(i,e=!1,t=!0){bi(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let s=[],a="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,h,f)=>(s.push({paramName:h,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return i.endsWith("*")?(s.push({paramName:"*"}),a+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":i!==""&&i!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),s]}function cS(i){try{return i.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return bi(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),i}}function Er(i,e){if(e==="/")return i;if(!i.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=i.charAt(t);return s&&s!=="/"?null:i.slice(t)||"/"}var n0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,uS=i=>n0.test(i);function dS(i,e="/"){let{pathname:t,search:s="",hash:a=""}=typeof i=="string"?Ua(i):i,c;if(t)if(uS(t))c=t;else{if(t.includes("//")){let u=t;t=t.replace(/\/\/+/g,"/"),bi(!1,`Pathnames cannot have embedded double slashes - normalizing ${u} -> ${t}`)}t.startsWith("/")?c=wx(t.substring(1),"/"):c=wx(t,e)}else c=e;return{pathname:c,search:pS(s),hash:mS(a)}}function wx(i,e){let t=e.replace(/\/+$/,"").split("/");return i.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function th(i,e,t,s){return`Cannot include a '${i}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function hS(i){return i.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function cp(i){let e=hS(i);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function up(i,e,t,s=!1){let a;typeof i=="string"?a=Ua(i):(a={...i},en(!a.pathname||!a.pathname.includes("?"),th("?","pathname","search",a)),en(!a.pathname||!a.pathname.includes("#"),th("#","pathname","hash",a)),en(!a.search||!a.search.includes("#"),th("#","search","hash",a)));let c=i===""||a.pathname==="",u=c?"/":a.pathname,h;if(u==null)h=t;else{let x=e.length-1;if(!s&&u.startsWith("..")){let g=u.split("/");for(;g[0]==="..";)g.shift(),x-=1;a.pathname=g.join("/")}h=x>=0?e[x]:"/"}let f=dS(a,h),m=u&&u!=="/"&&u.endsWith("/"),v=(c||u===".")&&t.endsWith("/");return!f.pathname.endsWith("/")&&(m||v)&&(f.pathname+="/"),f}var Sr=i=>i.join("/").replace(/\/\/+/g,"/"),fS=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),pS=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,mS=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i,gS=class{constructor(i,e,t,s=!1){this.status=i,this.statusText=e||"",this.internal=s,t instanceof Error?(this.data=t.toString(),this.error=t):this.data=t}};function xS(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}function vS(i){return i.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var i0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function r0(i,e){let t=i;if(typeof t!="string"||!n0.test(t))return{absoluteURL:void 0,isExternal:!1,to:t};let s=t,a=!1;if(i0)try{let c=new URL(window.location.href),u=t.startsWith("//")?new URL(c.protocol+t):new URL(t),h=Er(u.pathname,e);u.origin===c.origin&&h!=null?t=h+u.search+u.hash:a=!0}catch{bi(!1,`<Link to="${t}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:a,to:t}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var s0=["POST","PUT","PATCH","DELETE"];new Set(s0);var _S=["GET",...s0];new Set(_S);var Fa=j.createContext(null);Fa.displayName="DataRouter";var uu=j.createContext(null);uu.displayName="DataRouterState";var yS=j.createContext(!1),a0=j.createContext({isTransitioning:!1});a0.displayName="ViewTransition";var SS=j.createContext(new Map);SS.displayName="Fetchers";var MS=j.createContext(null);MS.displayName="Await";var fi=j.createContext(null);fi.displayName="Navigation";var Yo=j.createContext(null);Yo.displayName="Location";var nr=j.createContext({outlet:null,matches:[],isDataRoute:!1});nr.displayName="Route";var dp=j.createContext(null);dp.displayName="RouteError";var o0="REACT_ROUTER_ERROR",ES="REDIRECT",bS="ROUTE_ERROR_RESPONSE";function TS(i){if(i.startsWith(`${o0}:${ES}:{`))try{let e=JSON.parse(i.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function wS(i){if(i.startsWith(`${o0}:${bS}:{`))try{let e=JSON.parse(i.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new gS(e.status,e.statusText,e.data)}catch{}}function CS(i,{relative:e}={}){en(Oa(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=j.useContext(fi),{hash:a,pathname:c,search:u}=Ko(i,{relative:e}),h=c;return t!=="/"&&(h=c==="/"?t:Sr([t,c])),s.createHref({pathname:h,search:u,hash:a})}function Oa(){return j.useContext(Yo)!=null}function Bi(){return en(Oa(),"useLocation() may be used only in the context of a <Router> component."),j.useContext(Yo).location}var l0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function c0(i){j.useContext(fi).static||j.useLayoutEffect(i)}function Ds(){let{isDataRoute:i}=j.useContext(nr);return i?BS():AS()}function AS(){en(Oa(),"useNavigate() may be used only in the context of a <Router> component.");let i=j.useContext(Fa),{basename:e,navigator:t}=j.useContext(fi),{matches:s}=j.useContext(nr),{pathname:a}=Bi(),c=JSON.stringify(cp(s)),u=j.useRef(!1);return c0(()=>{u.current=!0}),j.useCallback((f,m={})=>{if(bi(u.current,l0),!u.current)return;if(typeof f=="number"){t.go(f);return}let v=up(f,JSON.parse(c),a,m.relative==="path");i==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:Sr([e,v.pathname])),(m.replace?t.replace:t.push)(v,m.state,m)},[e,t,c,a,i])}j.createContext(null);function Ko(i,{relative:e}={}){let{matches:t}=j.useContext(nr),{pathname:s}=Bi(),a=JSON.stringify(cp(t));return j.useMemo(()=>up(i,JSON.parse(a),s,e==="path"),[i,a,s,e])}function RS(i,e){return u0(i,e)}function u0(i,e,t,s,a){var b;en(Oa(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=j.useContext(fi),{matches:u}=j.useContext(nr),h=u[u.length-1],f=h?h.params:{},m=h?h.pathname:"/",v=h?h.pathnameBase:"/",x=h&&h.route;{let T=x&&x.path||"";h0(m,!x||T.endsWith("*")||T.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${T}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${T}"> to <Route path="${T==="/"?"*":`${T}/*`}">.`)}let g=Bi(),M;if(e){let T=typeof e=="string"?Ua(e):e;en(v==="/"||((b=T.pathname)==null?void 0:b.startsWith(v)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${T.pathname}" was given in the \`location\` prop.`),M=T}else M=g;let E=M.pathname||"/",A=E;if(v!=="/"){let T=v.replace(/^\//,"").split("/");A="/"+E.replace(/^\//,"").split("/").slice(T.length).join("/")}let y=Jv(i,{pathname:A});bi(x||y!=null,`No routes matched location "${M.pathname}${M.search}${M.hash}" `),bi(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let S=IS(y&&y.map(T=>Object.assign({},T,{params:Object.assign({},f,T.params),pathname:Sr([v,c.encodeLocation?c.encodeLocation(T.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?v:Sr([v,c.encodeLocation?c.encodeLocation(T.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:T.pathnameBase])})),u,t,s,a);return e&&S?j.createElement(Yo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...M},navigationType:"POP"}},S):S}function NS(){let i=jS(),e=xS(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),t=i instanceof Error?i.stack:null,s="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:s},c={padding:"2px 4px",backgroundColor:s},u=null;return console.error("Error handled by React Router default ErrorBoundary:",i),u=j.createElement(j.Fragment,null,j.createElement("p",null,"💿 Hey developer 👋"),j.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",j.createElement("code",{style:c},"ErrorBoundary")," or"," ",j.createElement("code",{style:c},"errorElement")," prop on your route.")),j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},e),t?j.createElement("pre",{style:a},t):null,u)}var PS=j.createElement(NS,null),d0=class extends j.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,e){return e.location!==i.location||e.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:e.error,location:e.location,revalidation:i.revalidation||e.revalidation}}componentDidCatch(i,e){this.props.onError?this.props.onError(i,e):console.error("React Router caught the following error during render",i)}render(){let i=this.state.error;if(this.context&&typeof i=="object"&&i&&"digest"in i&&typeof i.digest=="string"){const t=wS(i.digest);t&&(i=t)}let e=i!==void 0?j.createElement(nr.Provider,{value:this.props.routeContext},j.createElement(dp.Provider,{value:i,children:this.props.component})):this.props.children;return this.context?j.createElement(LS,{error:i},e):e}};d0.contextType=yS;var nh=new WeakMap;function LS({children:i,error:e}){let{basename:t}=j.useContext(fi);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let s=TS(e.digest);if(s){let a=nh.get(e);if(a)throw a;let c=r0(s.location,t);if(i0&&!nh.get(e))if(c.isExternal||s.reloadDocument)window.location.href=c.absoluteURL||c.to;else{const u=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:s.replace}));throw nh.set(e,u),u}return j.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c.absoluteURL||c.to}`})}}return i}function DS({routeContext:i,match:e,children:t}){let s=j.useContext(Fa);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),j.createElement(nr.Provider,{value:i},t)}function IS(i,e=[],t=null,s=null,a=null){if(i==null){if(!t)return null;if(t.errors)i=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)i=t.matches;else return null}let c=i,u=t==null?void 0:t.errors;if(u!=null){let v=c.findIndex(x=>x.route.id&&(u==null?void 0:u[x.route.id])!==void 0);en(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),c=c.slice(0,Math.min(c.length,v+1))}let h=!1,f=-1;if(t)for(let v=0;v<c.length;v++){let x=c[v];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(f=v),x.route.id){let{loaderData:g,errors:M}=t,E=x.route.loader&&!g.hasOwnProperty(x.route.id)&&(!M||M[x.route.id]===void 0);if(x.route.lazy||E){h=!0,f>=0?c=c.slice(0,f+1):c=[c[0]];break}}}let m=t&&s?(v,x)=>{var g,M;s(v,{location:t.location,params:((M=(g=t.matches)==null?void 0:g[0])==null?void 0:M.params)??{},unstable_pattern:vS(t.matches),errorInfo:x})}:void 0;return c.reduceRight((v,x,g)=>{let M,E=!1,A=null,y=null;t&&(M=u&&x.route.id?u[x.route.id]:void 0,A=x.route.errorElement||PS,h&&(f<0&&g===0?(h0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,y=null):f===g&&(E=!0,y=x.route.hydrateFallbackElement||null)));let S=e.concat(c.slice(0,g+1)),b=()=>{let T;return M?T=A:E?T=y:x.route.Component?T=j.createElement(x.route.Component,null):x.route.element?T=x.route.element:T=v,j.createElement(DS,{match:x,routeContext:{outlet:v,matches:S,isDataRoute:t!=null},children:T})};return t&&(x.route.ErrorBoundary||x.route.errorElement||g===0)?j.createElement(d0,{location:t.location,revalidation:t.revalidation,component:A,error:M,children:b(),routeContext:{outlet:null,matches:S,isDataRoute:!0},onError:m}):b()},null)}function hp(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function US(i){let e=j.useContext(Fa);return en(e,hp(i)),e}function FS(i){let e=j.useContext(uu);return en(e,hp(i)),e}function OS(i){let e=j.useContext(nr);return en(e,hp(i)),e}function fp(i){let e=OS(i),t=e.matches[e.matches.length-1];return en(t.route.id,`${i} can only be used on routes that contain a unique "id"`),t.route.id}function kS(){return fp("useRouteId")}function jS(){var s;let i=j.useContext(dp),e=FS("useRouteError"),t=fp("useRouteError");return i!==void 0?i:(s=e.errors)==null?void 0:s[t]}function BS(){let{router:i}=US("useNavigate"),e=fp("useNavigate"),t=j.useRef(!1);return c0(()=>{t.current=!0}),j.useCallback(async(a,c={})=>{bi(t.current,l0),t.current&&(typeof a=="number"?await i.navigate(a):await i.navigate(a,{fromRouteId:e,...c}))},[i,e])}var Cx={};function h0(i,e,t){!e&&!Cx[i]&&(Cx[i]=!0,bi(!1,t))}j.memo(zS);function zS({routes:i,future:e,state:t,onError:s}){return u0(i,void 0,t,s,e)}function Qr({to:i,replace:e,state:t,relative:s}){en(Oa(),"<Navigate> may be used only in the context of a <Router> component.");let{static:a}=j.useContext(fi);bi(!a,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:c}=j.useContext(nr),{pathname:u}=Bi(),h=Ds(),f=up(i,cp(c),u,s==="path"),m=JSON.stringify(f);return j.useEffect(()=>{h(JSON.parse(m),{replace:e,state:t,relative:s})},[h,m,s,e,t]),null}function cn(i){en(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function HS({basename:i="/",children:e=null,location:t,navigationType:s="POP",navigator:a,static:c=!1,unstable_useTransitions:u}){en(!Oa(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=i.replace(/^\/*/,"/"),f=j.useMemo(()=>({basename:h,navigator:a,static:c,unstable_useTransitions:u,future:{}}),[h,a,c,u]);typeof t=="string"&&(t=Ua(t));let{pathname:m="/",search:v="",hash:x="",state:g=null,key:M="default"}=t,E=j.useMemo(()=>{let A=Er(m,h);return A==null?null:{location:{pathname:A,search:v,hash:x,state:g,key:M},navigationType:s}},[h,m,v,x,g,M,s]);return bi(E!=null,`<Router basename="${h}"> is not able to match the URL "${m}${v}${x}" because it does not start with the basename, so the <Router> won't render anything.`),E==null?null:j.createElement(fi.Provider,{value:f},j.createElement(Yo.Provider,{children:e,value:E}))}function GS({children:i,location:e}){return RS(lf(i),e)}function lf(i,e=[]){let t=[];return j.Children.forEach(i,(s,a)=>{if(!j.isValidElement(s))return;let c=[...e,a];if(s.type===j.Fragment){t.push.apply(t,lf(s.props.children,c));return}en(s.type===cn,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),en(!s.props.index||!s.props.children,"An index route cannot have child routes.");let u={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(u.children=lf(s.props.children,c)),t.push(u)}),t}var Bc="get",zc="application/x-www-form-urlencoded";function du(i){return typeof HTMLElement<"u"&&i instanceof HTMLElement}function VS(i){return du(i)&&i.tagName.toLowerCase()==="button"}function WS(i){return du(i)&&i.tagName.toLowerCase()==="form"}function XS(i){return du(i)&&i.tagName.toLowerCase()==="input"}function $S(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function qS(i,e){return i.button===0&&(!e||e==="_self")&&!$S(i)}var rc=null;function YS(){if(rc===null)try{new FormData(document.createElement("form"),0),rc=!1}catch{rc=!0}return rc}var KS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ih(i){return i!=null&&!KS.has(i)?(bi(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${zc}"`),null):i}function ZS(i,e){let t,s,a,c,u;if(WS(i)){let h=i.getAttribute("action");s=h?Er(h,e):null,t=i.getAttribute("method")||Bc,a=ih(i.getAttribute("enctype"))||zc,c=new FormData(i)}else if(VS(i)||XS(i)&&(i.type==="submit"||i.type==="image")){let h=i.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let f=i.getAttribute("formaction")||h.getAttribute("action");if(s=f?Er(f,e):null,t=i.getAttribute("formmethod")||h.getAttribute("method")||Bc,a=ih(i.getAttribute("formenctype"))||ih(h.getAttribute("enctype"))||zc,c=new FormData(h,i),!YS()){let{name:m,type:v,value:x}=i;if(v==="image"){let g=m?`${m}.`:"";c.append(`${g}x`,"0"),c.append(`${g}y`,"0")}else m&&c.append(m,x)}}else{if(du(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Bc,s=null,a=zc,u=i}return c&&a==="text/plain"&&(u=c,c=void 0),{action:s,method:t.toLowerCase(),encType:a,formData:c,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function pp(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}function QS(i,e,t){let s=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return s.pathname==="/"?s.pathname=`_root.${t}`:e&&Er(s.pathname,e)==="/"?s.pathname=`${e.replace(/\/$/,"")}/_root.${t}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${t}`,s}async function JS(i,e){if(i.id in e)return e[i.id];try{let t=await import(i.module);return e[i.id]=t,t}catch(t){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function eM(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function tM(i,e,t){let s=await Promise.all(i.map(async a=>{let c=e.routes[a.route.id];if(c){let u=await JS(c,t);return u.links?u.links():[]}return[]}));return sM(s.flat(1).filter(eM).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function Ax(i,e,t,s,a,c){let u=(f,m)=>t[m]?f.route.id!==t[m].route.id:!0,h=(f,m)=>{var v;return t[m].pathname!==f.pathname||((v=t[m].route.path)==null?void 0:v.endsWith("*"))&&t[m].params["*"]!==f.params["*"]};return c==="assets"?e.filter((f,m)=>u(f,m)||h(f,m)):c==="data"?e.filter((f,m)=>{var x;let v=s.routes[f.route.id];if(!v||!v.hasLoader)return!1;if(u(f,m)||h(f,m))return!0;if(f.route.shouldRevalidate){let g=f.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((x=t[0])==null?void 0:x.params)||{},nextUrl:new URL(i,window.origin),nextParams:f.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function nM(i,e,{includeHydrateFallback:t}={}){return iM(i.map(s=>{let a=e.routes[s.route.id];if(!a)return[];let c=[a.module];return a.clientActionModule&&(c=c.concat(a.clientActionModule)),a.clientLoaderModule&&(c=c.concat(a.clientLoaderModule)),t&&a.hydrateFallbackModule&&(c=c.concat(a.hydrateFallbackModule)),a.imports&&(c=c.concat(a.imports)),c}).flat(1))}function iM(i){return[...new Set(i)]}function rM(i){let e={},t=Object.keys(i).sort();for(let s of t)e[s]=i[s];return e}function sM(i,e){let t=new Set;return new Set(e),i.reduce((s,a)=>{let c=JSON.stringify(rM(a));return t.has(c)||(t.add(c),s.push({key:c,link:a})),s},[])}function f0(){let i=j.useContext(Fa);return pp(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function aM(){let i=j.useContext(uu);return pp(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var mp=j.createContext(void 0);mp.displayName="FrameworkContext";function p0(){let i=j.useContext(mp);return pp(i,"You must render this element inside a <HydratedRouter> element"),i}function oM(i,e){let t=j.useContext(mp),[s,a]=j.useState(!1),[c,u]=j.useState(!1),{onFocus:h,onBlur:f,onMouseEnter:m,onMouseLeave:v,onTouchStart:x}=e,g=j.useRef(null);j.useEffect(()=>{if(i==="render"&&u(!0),i==="viewport"){let A=S=>{S.forEach(b=>{u(b.isIntersecting)})},y=new IntersectionObserver(A,{threshold:.5});return g.current&&y.observe(g.current),()=>{y.disconnect()}}},[i]),j.useEffect(()=>{if(s){let A=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(A)}}},[s]);let M=()=>{a(!0)},E=()=>{a(!1),u(!1)};return t?i!=="intent"?[c,g,{}]:[c,g,{onFocus:wo(h,M),onBlur:wo(f,E),onMouseEnter:wo(m,M),onMouseLeave:wo(v,E),onTouchStart:wo(x,M)}]:[!1,g,{}]}function wo(i,e){return t=>{i&&i(t),t.defaultPrevented||e(t)}}function lM({page:i,...e}){let{router:t}=f0(),s=j.useMemo(()=>Jv(t.routes,i,t.basename),[t.routes,i,t.basename]);return s?j.createElement(uM,{page:i,matches:s,...e}):null}function cM(i){let{manifest:e,routeModules:t}=p0(),[s,a]=j.useState([]);return j.useEffect(()=>{let c=!1;return tM(i,e,t).then(u=>{c||a(u)}),()=>{c=!0}},[i,e,t]),s}function uM({page:i,matches:e,...t}){let s=Bi(),{manifest:a,routeModules:c}=p0(),{basename:u}=f0(),{loaderData:h,matches:f}=aM(),m=j.useMemo(()=>Ax(i,e,f,a,s,"data"),[i,e,f,a,s]),v=j.useMemo(()=>Ax(i,e,f,a,s,"assets"),[i,e,f,a,s]),x=j.useMemo(()=>{if(i===s.pathname+s.search+s.hash)return[];let E=new Set,A=!1;if(e.forEach(S=>{var T;let b=a.routes[S.route.id];!b||!b.hasLoader||(!m.some(N=>N.route.id===S.route.id)&&S.route.id in h&&((T=c[S.route.id])!=null&&T.shouldRevalidate)||b.hasClientLoader?A=!0:E.add(S.route.id))}),E.size===0)return[];let y=QS(i,u,"data");return A&&E.size>0&&y.searchParams.set("_routes",e.filter(S=>E.has(S.route.id)).map(S=>S.route.id).join(",")),[y.pathname+y.search]},[u,h,s,a,m,e,i,c]),g=j.useMemo(()=>nM(v,a),[v,a]),M=cM(v);return j.createElement(j.Fragment,null,x.map(E=>j.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...t})),g.map(E=>j.createElement("link",{key:E,rel:"modulepreload",href:E,...t})),M.map(({key:E,link:A})=>j.createElement("link",{key:E,nonce:t.nonce,...A})))}function dM(...i){return e=>{i.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var hM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{hM&&(window.__reactRouterVersion="7.11.0")}catch{}function fM({basename:i,children:e,unstable_useTransitions:t,window:s}){let a=j.useRef();a.current==null&&(a.current=$y({window:s,v5Compat:!0}));let c=a.current,[u,h]=j.useState({action:c.action,location:c.location}),f=j.useCallback(m=>{t===!1?h(m):j.startTransition(()=>h(m))},[t]);return j.useLayoutEffect(()=>c.listen(f),[c,f]),j.createElement(HS,{basename:i,children:e,location:u.location,navigationType:u.action,navigator:c,unstable_useTransitions:t})}var m0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,gp=j.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:a,reloadDocument:c,replace:u,state:h,target:f,to:m,preventScrollReset:v,viewTransition:x,unstable_defaultShouldRevalidate:g,...M},E){let{basename:A,unstable_useTransitions:y}=j.useContext(fi),S=typeof m=="string"&&m0.test(m),b=r0(m,A);m=b.to;let T=CS(m,{relative:a}),[N,D,L]=oM(s,M),O=xM(m,{replace:u,state:h,target:f,preventScrollReset:v,relative:a,viewTransition:x,unstable_defaultShouldRevalidate:g,unstable_useTransitions:y});function w(Y){e&&e(Y),Y.defaultPrevented||O(Y)}let U=j.createElement("a",{...M,...L,href:b.absoluteURL||T,onClick:b.isExternal||c?e:w,ref:dM(E,D),target:f,"data-discover":!S&&t==="render"?"true":void 0});return N&&!S?j.createElement(j.Fragment,null,U,j.createElement(lM,{page:T})):U});gp.displayName="Link";var pM=j.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:a=!1,style:c,to:u,viewTransition:h,children:f,...m},v){let x=Ko(u,{relative:m.relative}),g=Bi(),M=j.useContext(uu),{navigator:E,basename:A}=j.useContext(fi),y=M!=null&&MM(x)&&h===!0,S=E.encodeLocation?E.encodeLocation(x).pathname:x.pathname,b=g.pathname,T=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;t||(b=b.toLowerCase(),T=T?T.toLowerCase():null,S=S.toLowerCase()),T&&A&&(T=Er(T,A)||T);const N=S!=="/"&&S.endsWith("/")?S.length-1:S.length;let D=b===S||!a&&b.startsWith(S)&&b.charAt(N)==="/",L=T!=null&&(T===S||!a&&T.startsWith(S)&&T.charAt(S.length)==="/"),O={isActive:D,isPending:L,isTransitioning:y},w=D?e:void 0,U;typeof s=="function"?U=s(O):U=[s,D?"active":null,L?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let Y=typeof c=="function"?c(O):c;return j.createElement(gp,{...m,"aria-current":w,className:U,ref:v,style:Y,to:u,viewTransition:h},typeof f=="function"?f(O):f)});pM.displayName="NavLink";var mM=j.forwardRef(({discover:i="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:a,state:c,method:u=Bc,action:h,onSubmit:f,relative:m,preventScrollReset:v,viewTransition:x,unstable_defaultShouldRevalidate:g,...M},E)=>{let{unstable_useTransitions:A}=j.useContext(fi),y=yM(),S=SM(h,{relative:m}),b=u.toLowerCase()==="get"?"get":"post",T=typeof h=="string"&&m0.test(h),N=D=>{if(f&&f(D),D.defaultPrevented)return;D.preventDefault();let L=D.nativeEvent.submitter,O=(L==null?void 0:L.getAttribute("formmethod"))||u,w=()=>y(L||D.currentTarget,{fetcherKey:e,method:O,navigate:t,replace:a,state:c,relative:m,preventScrollReset:v,viewTransition:x,unstable_defaultShouldRevalidate:g});A&&t!==!1?j.startTransition(()=>w()):w()};return j.createElement("form",{ref:E,method:b,action:S,onSubmit:s?f:N,...M,"data-discover":!T&&i==="render"?"true":void 0})});mM.displayName="Form";function gM(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function g0(i){let e=j.useContext(Fa);return en(e,gM(i)),e}function xM(i,{target:e,replace:t,state:s,preventScrollReset:a,relative:c,viewTransition:u,unstable_defaultShouldRevalidate:h,unstable_useTransitions:f}={}){let m=Ds(),v=Bi(),x=Ko(i,{relative:c});return j.useCallback(g=>{if(qS(g,e)){g.preventDefault();let M=t!==void 0?t:Go(v)===Go(x),E=()=>m(i,{replace:M,state:s,preventScrollReset:a,relative:c,viewTransition:u,unstable_defaultShouldRevalidate:h});f?j.startTransition(()=>E()):E()}},[v,m,x,t,s,e,i,a,c,u,h,f])}var vM=0,_M=()=>`__${String(++vM)}__`;function yM(){let{router:i}=g0("useSubmit"),{basename:e}=j.useContext(fi),t=kS(),s=i.fetch,a=i.navigate;return j.useCallback(async(c,u={})=>{let{action:h,method:f,encType:m,formData:v,body:x}=ZS(c,e);if(u.navigate===!1){let g=u.fetcherKey||_M();await s(g,t,u.action||h,{unstable_defaultShouldRevalidate:u.unstable_defaultShouldRevalidate,preventScrollReset:u.preventScrollReset,formData:v,body:x,formMethod:u.method||f,formEncType:u.encType||m,flushSync:u.flushSync})}else await a(u.action||h,{unstable_defaultShouldRevalidate:u.unstable_defaultShouldRevalidate,preventScrollReset:u.preventScrollReset,formData:v,body:x,formMethod:u.method||f,formEncType:u.encType||m,replace:u.replace,state:u.state,fromRouteId:t,flushSync:u.flushSync,viewTransition:u.viewTransition})},[s,a,e,t])}function SM(i,{relative:e}={}){let{basename:t}=j.useContext(fi),s=j.useContext(nr);en(s,"useFormAction must be used inside a RouteContext");let[a]=s.matches.slice(-1),c={...Ko(i||".",{relative:e})},u=Bi();if(i==null){c.search=u.search;let h=new URLSearchParams(c.search),f=h.getAll("index");if(f.some(v=>v==="")){h.delete("index"),f.filter(x=>x).forEach(x=>h.append("index",x));let v=h.toString();c.search=v?`?${v}`:""}}return(!i||i===".")&&a.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(c.pathname=c.pathname==="/"?t:Sr([t,c.pathname])),Go(c)}function MM(i,{relative:e}={}){let t=j.useContext(a0);en(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=g0("useViewTransitionState"),a=Ko(i,{relative:e});if(!t.isTransitioning)return!1;let c=Er(t.currentLocation.pathname,s)||t.currentLocation.pathname,u=Er(t.nextLocation.pathname,s)||t.nextLocation.pathname;return Qc(a.pathname,u)!=null||Qc(a.pathname,c)!=null}const cf={baseURL:"https://resplendent-commitment-production-1d46.up.railway.app/api/v1",timeout:1e4,headers:{"Content-Type":"application/json"}};class ba extends Error{constructor(t,s,a){super(t);Yd(this,"status");Yd(this,"details");this.name="ApiError",this.status=s,this.details=a}}function EM(i,e){if(!e)return i;const t=new URLSearchParams;Object.entries(e).forEach(([a,c])=>{c==null||c===""||t.append(a,String(c))});const s=t.toString();return s?`${i}?${s}`:i}function bM(i){if(/^https?:\/\//.test(i))return i;const e=cf.baseURL.replace(/\/$/,""),t=i.startsWith("/")?i:`/${i}`;return`${e}${t}`}async function wa(i,e={}){var a,c;const t=new AbortController,s=setTimeout(()=>t.abort(),cf.timeout);try{const u=bM(EM(i,e.query)),h=await fetch(u,{method:e.method||"GET",cache:"no-store",headers:{...cf.headers,"Cache-Control":"no-store",Pragma:"no-cache",...e.authToken?{Authorization:`Bearer ${e.authToken}`}:{},...e.headers},body:e.body?JSON.stringify(e.body):void 0,signal:t.signal}),v=(h.headers.get("content-type")||"").includes("application/json")?await h.json():null;if(!h.ok){const x=((a=v==null?void 0:v.error)==null?void 0:a.message)||`HTTP ${h.status}`;throw new ba(x,h.status,(c=v==null?void 0:v.error)==null?void 0:c.details)}if(!v||!v.ok)throw new ba("Invalid API response format",h.status);return v.data}catch(u){throw u instanceof ba?u:u instanceof DOMException&&u.name==="AbortError"?new ba("Request timeout",408):new ba(u.message||"Network error",500)}finally{clearTimeout(s)}}const xp="mboalink.accessToken",vp="mboalink.refreshToken",Vo="mboalink.user";function Zo(){return typeof window<"u"&&!!window.localStorage}function TM(i){const e=i.replace(/-/g,"+").replace(/_/g,"/"),t=e.padEnd(e.length+(4-e.length%4)%4,"=");return atob(t)}function Rx(){const i=Jc();if(!i)return null;try{const e=JSON.parse(TM(i.split(".")[1]||""));if(e.exp&&e.exp*1e3<Date.now()||!e.sub||!e.email)return null;const t={id:e.sub,email:e.email,name:e.fullName,fullName:e.fullName,role:e.role,hotelId:e.hotelId||null};return localStorage.setItem(Vo,JSON.stringify(t)),t}catch{return null}}function Hc(i){Zo()&&(localStorage.setItem(xp,i.accessToken),localStorage.setItem(vp,i.refreshToken),localStorage.setItem(Vo,JSON.stringify(i.user)))}function x0(){Zo()&&(localStorage.removeItem(xp),localStorage.removeItem(vp),localStorage.removeItem(Vo))}function Jc(){return Zo()?localStorage.getItem(xp):null}function uf(){return Zo()?localStorage.getItem(vp):null}function _p(){if(!Zo())return null;const i=localStorage.getItem(Vo);if(!i)return Rx();try{return JSON.parse(i)}catch{return localStorage.removeItem(Vo),Rx()}}function rh(i){return{id:i.id||i.sub||"",email:i.email,name:i.fullName,fullName:i.fullName,role:i.role,hotelId:i.hotelId||null}}const Ti={async login(i){const e=await wa("/auth/login",{method:"POST",body:i});if("mfaRequired"in e&&e.mfaRequired)return e;const t=rh(e.user);return Hc({accessToken:e.accessToken,refreshToken:e.refreshToken,user:t}),{mfaRequired:!1,user:t}},async verifyMfa(i,e){const t=await wa("/auth/mfa/verify",{method:"POST",body:{email:i,code:e}}),s=rh(t.user);return Hc({accessToken:t.accessToken,refreshToken:t.refreshToken,user:s}),s},async me(){const i=Jc();if(!i)throw new Error("Not authenticated");const e=await wa("/auth/me",{authToken:i}),t=rh(e);return Hc({accessToken:i,refreshToken:uf()||"",user:t}),t},getAccessToken:Jc,getRefreshToken:uf,getStoredUser:_p,async logout(){x0()}};async function wM(){const i=uf();if(!i)return null;try{const e=await wa("/auth/refresh",{method:"POST",body:{refreshToken:i}}),t=_p();return t?(Hc({accessToken:e.accessToken,refreshToken:i,user:t}),e.accessToken):null}catch{return x0(),null}}async function bt(i,e){const t=Jc();if(!t)throw new Error("Session expirée. Veuillez vous reconnecter.");try{return await wa(i,{method:e==null?void 0:e.method,body:e==null?void 0:e.body,query:e==null?void 0:e.query,authToken:t})}catch(s){if(!(s instanceof ba)||s.status!==401)throw s;const a=await wM();if(!a)throw new Error("Session expirée. Veuillez vous reconnecter.");return wa(i,{method:e==null?void 0:e.method,body:e==null?void 0:e.body,query:e==null?void 0:e.query,authToken:a})}}const st={listHotels(i){return bt("/hotels",{query:i})},createHotel(i){return bt("/hotels",{method:"POST",body:i})},updateHotel(i,e){return bt(`/hotels/${i}`,{method:"PATCH",body:e})},deleteHotel(i){return bt(`/hotels/${i}`,{method:"DELETE"})},listRooms(i){return bt("/rooms",{query:i})},createRoom(i,e){return bt(`/hotels/${i}/rooms`,{method:"POST",body:e})},updateRoom(i,e){return bt(`/rooms/${i}`,{method:"PATCH",body:e})},deleteRoom(i){return bt(`/rooms/${i}`,{method:"DELETE"})},listWifiConfigs(i){return bt("/wifi-configs",{query:i})},upsertWifiConfig(i,e){return bt(`/hotels/${i}/wifi-config`,{method:"PUT",body:e})},listGuestPasses(i){return bt("/guest-passes",{query:i})},createGuestPass(i){return bt("/guest-passes",{method:"POST",body:i})},createGuestPassesBulk(i){return bt("/guest-passes/bulk",{method:"POST",body:i})},revokeGuestPass(i){return bt(`/guest-passes/${i}/revoke`,{method:"PATCH"})},deleteGuestPass(i){return bt(`/guest-passes/${i}`,{method:"DELETE"})},listLoginSessions(i){return bt("/login-sessions",{query:i})},createManualLogin(i){return bt("/login-sessions/manual",{method:"POST",body:i})},updateLoginSession(i,e){return bt(`/login-sessions/${i}`,{method:"PATCH",body:e})},listClearedAddresses(i){return bt("/cleared-addresses",{query:i})},createClearedAddress(i){return bt("/cleared-addresses",{method:"POST",body:i})},deleteClearedAddresses(i){return bt("/cleared-addresses",{method:"DELETE",body:{ids:i}})},getGuestConfig(i){return bt(`/hotels/${i}/guest-config`)},upsertGuestConfig(i){return bt("/guest-config",{method:"PUT",body:i})},listDevices(i){return bt("/devices",{query:i})},createDevice(i){return bt("/devices",{method:"POST",body:i})},updateDevice(i,e){return bt(`/devices/${i}`,{method:"PATCH",body:e})},restartDevice(i){return bt(`/devices/${i}/restart`,{method:"POST"})},listDeviceMetrics(i,e){return bt(`/devices/${i}/metrics`,{query:e})},getDashboardOverview(i){return bt("/dashboard/overview",{query:i})},listUsers(i){return bt("/users",{query:i})},createUser(i){return bt("/users",{method:"POST",body:i})},updateUser(i,e){return bt(`/users/${i}`,{method:"PATCH",body:e})},deactivateUser(i){return bt(`/users/${i}/deactivate`,{method:"PATCH"})},listNotificationRecipients(){return bt("/notifications/recipients")},listNotificationsInbox(i){return bt("/notifications/inbox",{query:i})},listSentNotifications(){return bt("/notifications/sent")},getUnreadNotificationCount(){return bt("/notifications/unread-count")},createNotification(i){return bt("/notifications",{method:"POST",body:i})},markNotificationRead(i){return bt(`/notifications/${i}/read`,{method:"PATCH"})}},lt={public:{home:"/home",dashboard:"/dashboard",networkMap:"/dashboard/network-map",login:"/login",mfa:"/mfa",register:"/register",forgotPassword:"/forgot-password",wifiCode:"/logins/wifi-code",loginByAddress:"/logins/login-by-address",statusLogins:"/logins/status-logins",manualLogin:"/logins/manual-login",websitesManager:"/logins/websites-manager",configCode:"/logins/config-code",hotels:"/hotel-manager/hotels",rooms:"/hotel-manager/rooms",configWifi:"/hotel-manager/config-wifi",devices:"/device-manager/devices",adminMboa:"/admin-mboa",users:"/admin/users",notifications:"/notifications"},protected:{dashboard:"/dashboard",profile:"/profile",settings:"/settings"},admin:{users:"/admin/users",settings:"/admin/settings"}},yp="/assets/mboalink-logo-navbar-CXxN8FJp.png";function CM(){const i=Ds(),e=Bi(),[t,s]=j.useState(""),[a,c]=j.useState(""),[u,h]=j.useState(!1),[f,m]=j.useState(""),v=async x=>{var g;x.preventDefault(),h(!0),m("");try{const M=await Ti.login({email:t,password:a});if(M.mfaRequired)i(lt.public.mfa,{state:{email:M.email}});else{const E=new URLSearchParams(e.search).get("redirect"),A=(g=M.user)==null?void 0:g.role,y=A==="ADMIN"?lt.public.adminMboa:A==="RECEPTIONIST"?lt.public.manualLogin:["SUPPORT","HOTEL_IT"].includes(A)?lt.public.dashboard:lt.public.home,S=A!=="ADMIN"&&(E==null?void 0:E.startsWith("/"))&&E!==lt.public.login;i(S?E:y,{replace:!0})}}catch(M){m((M==null?void 0:M.message)||"Identifiants incorrects")}finally{h(!1)}};return o.jsxs("div",{className:"loginPage",children:[o.jsxs("div",{className:"loginLeft",children:[o.jsxs("div",{className:"loginBrand",children:[o.jsx("div",{className:"brandLogo",children:o.jsx("img",{src:yp,alt:"MboaLink"})}),o.jsx("div",{className:"brandText",children:o.jsx("p",{className:"brandTagline",children:"HOSPITALITY • TRANSPORT • SMART ACCESS"})})]}),o.jsxs("div",{className:"loginHero",children:[o.jsxs("h2",{className:"heroTitle",children:["Connectez-vous à",o.jsx("br",{}),"votre ",o.jsx("span",{className:"highlight",children:"écosystème"})," Mboa."]}),o.jsx("p",{className:"heroDescription",children:"MboaLink synchronise vos hôtels, gares routières et partenaires en une seule plateforme fluide, pensée pour l'Afrique et le monde."}),o.jsxs("div",{className:"features",children:[o.jsxs("div",{className:"feature",children:[o.jsx("div",{className:"featureIcon",children:"✓"}),o.jsx("span",{children:"Check-in en moins de 30s"})]}),o.jsxs("div",{className:"feature",children:[o.jsx("div",{className:"featureIcon",children:"✓"}),o.jsx("span",{children:"Monitoring temps réel"})]}),o.jsxs("div",{className:"feature",children:[o.jsx("div",{className:"featureIcon",children:"✓"}),o.jsx("span",{children:"Data sécurisée & conforme"})]})]}),o.jsxs("div",{className:"stats",children:[o.jsxs("div",{className:"stat",children:[o.jsx("div",{className:"statValue",children:"+120"}),o.jsx("div",{className:"statLabel",children:"Sites connectés"})]}),o.jsxs("div",{className:"stat",children:[o.jsx("div",{className:"statValue",children:"99.9%"}),o.jsx("div",{className:"statLabel",children:"Disponibilité"})]}),o.jsxs("div",{className:"stat",children:[o.jsx("div",{className:"statValue",children:"24/7"}),o.jsx("div",{className:"statLabel",children:"Support dédié"})]})]})]}),o.jsx("footer",{className:"loginFooter",children:o.jsx("p",{children:"© 2025 MboaLink. Tous droits réservés."})})]}),o.jsx("div",{className:"loginRight",children:o.jsxs("div",{className:"loginCard",children:[o.jsx("h3",{className:"cardTitle",children:"Connexion"}),o.jsx("p",{className:"cardSubtitle",children:"Accédez à votre espace d'administration sécurisé"}),o.jsxs("form",{onSubmit:v,className:"loginForm",children:[f&&o.jsx("p",{className:"helpText",style:{color:"#b91c1c"},children:f}),o.jsxs("div",{className:"formGroup",children:[o.jsx("label",{htmlFor:"email",children:"Adresse e-mail"}),o.jsx("input",{id:"email",type:"email",placeholder:"vous@entreprise.com",value:t,onChange:x=>s(x.target.value),required:!0,disabled:u})]}),o.jsxs("div",{className:"formGroup",children:[o.jsx("label",{htmlFor:"password",children:"Mot de passe"}),o.jsx("input",{id:"password",type:"password",placeholder:"Votre mot de passe",value:a,onChange:x=>c(x.target.value),required:!0,disabled:u})]}),o.jsx("a",{href:"#",className:"forgotPassword",children:"Mot de passe oublié ?"}),o.jsx("button",{type:"submit",className:"submitBtn",disabled:u,children:u?"Connexion...":"Se connecter"})]}),o.jsxs("p",{className:"helpText",children:["Besoin d'un accès ? ",o.jsx("a",{href:"#",children:"Contacter l'administrateur"})]})]})})]})}function AM(){var x;const i=Ds(),t=((x=Bi().state)==null?void 0:x.email)||"",[s,a]=j.useState(""),[c,u]=j.useState(!1),[h,f]=j.useState("");if(!t)return i(lt.public.login,{replace:!0}),null;const m=async g=>{if(g.preventDefault(),s.length<6){f("Veuillez entrer un code valide à 6 chiffres");return}u(!0),f("");try{await Ti.verifyMfa(t,s),i(lt.public.home,{replace:!0})}catch(M){f((M==null?void 0:M.message)||"Code invalide ou expiré"),a("")}finally{u(!1)}},v=()=>{i(lt.public.login,{replace:!0})};return o.jsx("div",{className:"twoFactorPage",children:o.jsxs("div",{className:"twoFactorCard",children:[o.jsxs("div",{className:"tfBrand",children:[o.jsx("div",{className:"tfLogo",children:o.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",children:[o.jsx("path",{d:"M20 5L5 15V25L20 35L35 25V15L20 5Z",fill:"#EDC707"}),o.jsx("circle",{cx:"20",cy:"20",r:"8",fill:"#052F5F"})]})}),o.jsx("h1",{className:"tfBrandName",children:"MboaLink"})]}),o.jsxs("div",{className:"tfContent",children:[o.jsx("h2",{className:"tfTitle",children:"Multi-factor authentification"}),o.jsx("p",{className:"tfSubtitle",children:"Additional security code required"}),o.jsxs("div",{className:"userInfo",children:[o.jsx("div",{className:"userAvatar",children:o.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),o.jsx("circle",{cx:"12",cy:"7",r:"4"})]})}),o.jsxs("div",{className:"userEmail",children:["User: ",o.jsx("strong",{children:t})]}),o.jsx("button",{type:"button",className:"restartLink",onClick:v,children:"Restart login"})]}),o.jsx("p",{className:"tfInstructions",children:"Un code de vérification à 6 chiffres a été envoyé à votre adresse email. Saisissez-le ci-dessous."}),o.jsxs("form",{onSubmit:m,className:"tfForm",children:[o.jsx("input",{type:"text",inputMode:"numeric",placeholder:"000000",value:s,onChange:g=>{a(g.target.value.replace(/\D/g,"").slice(0,6)),f("")},maxLength:6,className:"codeInput",disabled:c,autoFocus:!0}),h&&o.jsx("div",{className:"errorMessage",children:h}),o.jsx("button",{type:"submit",className:"tfSubmitBtn",disabled:c||s.length<6,children:c?"Vérification...":"Sign in"})]}),o.jsxs("p",{className:"tfHelp",children:["Having trouble with your code?"," ",o.jsx("a",{href:"#",children:"Use a backup method"})," or"," ",o.jsx("a",{href:"#",children:"contact your administrator"})]})]})]})})}function RM(){const i="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";let e="";for(let t=0;t<6;t++)e+=i.charAt(Math.floor(Math.random()*i.length));return e}function NM(){return new Date().toISOString().split("T")[0]}const sh=()=>({passCode:RM(),label:"",roomId:"",clientName:"",duration:"",durationType:"Hours",maxUses:0,expiryDate:"",expiryTime:"00:00",uploadCap:1500,downloadCap:1500,zones:{CONFERENCE:!1,PUBLIC:!1,GUEST_ROOM:!1,IROH:!1,RC:!1}});function PM({isOpen:i,onClose:e,onSubmit:t,rooms:s=[]}){const[a,c]=j.useState(sh()),u=(x,g)=>c(M=>({...M,[x]:g})),h=(x,g)=>{const M=g===""?"":Number(g);c(E=>({...E,[x]:M}))},f=x=>c(g=>({...g,zones:{...g.zones,[x]:!g.zones[x]}})),m=()=>{t&&t(a),c(sh()),e()},v=()=>{c(sh()),e()};return i?o.jsx("div",{className:"modalOverlay",onClick:v,children:o.jsxs("div",{className:"modalContent",onClick:x=>x.stopPropagation(),children:[o.jsxs("div",{className:"modalHeader",children:[o.jsx("button",{className:"backBtn",onClick:v,children:"← BACK"}),o.jsxs("div",{className:"modalTitle",children:[o.jsx("h2",{children:"Add A Guest Pass"}),o.jsx("p",{children:`Le code est généré aléatoirement. Le label est facultatif — il sert uniquement à identifier ou catégoriser le code (ex : "Conférence Total Energie", "Chambre VIP"). Il n'a aucun impact sur le code lui-même.`})]})]}),o.jsxs("div",{className:"modalBody",children:[o.jsxs("section",{className:"formSection",children:[o.jsx("h3",{className:"sectionTitle",children:"General Information"}),o.jsxs("div",{className:"formRow",children:[o.jsxs("div",{className:"formLabel",children:[o.jsx("label",{children:"Pass Code"}),o.jsx("p",{className:"labelHelp",children:"Code généré automatiquement. Vous pouvez le remplacer par le vôtre."})]}),o.jsx("input",{type:"text",value:a.passCode,onChange:x=>u("passCode",x.target.value.toUpperCase()),maxLength:20})]}),o.jsxs("div",{className:"formRow",children:[o.jsxs("div",{className:"formLabel",children:[o.jsxs("label",{children:["Label ",o.jsx("span",{style:{fontWeight:400,color:"#94a3b8"},children:"(optionnel)"})]}),o.jsx("p",{className:"labelHelp",children:`Permet d'identifier ou catégoriser ce code. Ex : "Séminaire RH", "Suite Présidentielle", "Journaliste accrédité". Le code reste indépendant du label.`})]}),o.jsx("input",{type:"text",value:a.label,onChange:x=>u("label",x.target.value),placeholder:"Ex : Conférence Total Energie"})]}),o.jsxs("div",{className:"formRow",children:[o.jsxs("div",{className:"formLabel",children:[o.jsxs("label",{children:["Chambre ",o.jsx("span",{style:{fontWeight:400,color:"#94a3b8"},children:"(optionnel)"})]}),o.jsx("p",{className:"labelHelp",children:"Associez le ticket à une chambre pour permettre la connexion par nom + numéro de chambre."})]}),o.jsxs("select",{value:a.roomId,onChange:x=>u("roomId",x.target.value),children:[o.jsx("option",{value:"",children:"Aucune chambre"}),s.map(x=>o.jsx("option",{value:x.id,children:x.name||x.type},x.id))]})]}),o.jsxs("div",{className:"formRow",children:[o.jsxs("div",{className:"formLabel",children:[o.jsxs("label",{children:["Nom du client ",o.jsx("span",{style:{fontWeight:400,color:"#94a3b8"},children:"(optionnel)"})]}),o.jsx("p",{className:"labelHelp",children:"Ce nom sera utilisé avec la chambre sur le portail captif."})]}),o.jsx("input",{type:"text",value:a.clientName,onChange:x=>u("clientName",x.target.value),placeholder:"Ex : Jean Dupont"})]}),o.jsxs("div",{className:"formRow",children:[o.jsxs("div",{className:"formLabel",children:[o.jsx("label",{children:"Duration"}),o.jsx("p",{className:"labelHelp",children:"Choisissez l'unité puis la valeur. Durée maximale : 180 jours."})]}),o.jsxs("div",{className:"durationGroup",children:[o.jsx("input",{type:"number",value:a.duration,onChange:x=>h("duration",x.target.value),placeholder:"0",min:"0"}),o.jsxs("select",{value:a.durationType,onChange:x=>u("durationType",x.target.value),children:[o.jsx("option",{children:"Hours"}),o.jsx("option",{children:"Days"})]})]})]}),o.jsxs("div",{className:"formRow",children:[o.jsxs("div",{className:"formLabel",children:[o.jsx("label",{children:"Max Number of Uses"}),o.jsx("p",{className:"labelHelp",children:"Utilisations illimitées : saisir 0."})]}),o.jsx("input",{type:"number",value:a.maxUses,onChange:x=>h("maxUses",x.target.value),min:"0"})]}),o.jsxs("div",{className:"formRow",children:[o.jsxs("div",{className:"formLabel",children:[o.jsxs("label",{children:["Expiry Date ",o.jsx("span",{style:{fontWeight:400,color:"#94a3b8"},children:"(optionnel)"})]}),o.jsx("p",{className:"labelHelp",children:"Laissez vide pour aucune expiration. Les dates passées sont bloquées."})]}),o.jsxs("div",{className:"dateTimeGroup",children:[o.jsx("input",{type:"date",value:a.expiryDate,min:NM(),onChange:x=>u("expiryDate",x.target.value)}),o.jsx("input",{type:"time",value:a.expiryTime,onChange:x=>u("expiryTime",x.target.value)})]})]})]}),o.jsxs("section",{className:"formSection",children:[o.jsx("h3",{className:"sectionTitle",children:"Bandwidth Settings"}),o.jsxs("div",{className:"formRow",children:[o.jsxs("div",{className:"formLabel",children:[o.jsx("label",{children:"Upload Cap"}),o.jsx("p",{className:"labelHelp",children:"Glissez ou tapez directement (0 – 15 000 kb/s)."})]}),o.jsxs("div",{className:"capGroup",children:[o.jsx("input",{type:"range",min:"0",max:"15000",step:"100",value:a.uploadCap,onChange:x=>h("uploadCap",x.target.value),className:"capSlider"}),o.jsx("input",{type:"number",min:"0",max:"15000",step:"100",value:a.uploadCap,onChange:x=>h("uploadCap",x.target.value),className:"capInput"}),o.jsx("span",{className:"capUnit",children:"kb/s"})]})]}),o.jsxs("div",{className:"formRow",children:[o.jsxs("div",{className:"formLabel",children:[o.jsx("label",{children:"Download Cap"}),o.jsx("p",{className:"labelHelp",children:"Glissez ou tapez directement (0 – 15 000 kb/s)."})]}),o.jsxs("div",{className:"capGroup",children:[o.jsx("input",{type:"range",min:"0",max:"15000",step:"100",value:a.downloadCap,onChange:x=>h("downloadCap",x.target.value),className:"capSlider"}),o.jsx("input",{type:"number",min:"0",max:"15000",step:"100",value:a.downloadCap,onChange:x=>h("downloadCap",x.target.value),className:"capInput"}),o.jsx("span",{className:"capUnit",children:"kb/s"})]})]})]}),o.jsxs("section",{className:"formSection",children:[o.jsx("h3",{className:"sectionTitle",children:"Zone Information"}),o.jsxs("div",{className:"formRow",children:[o.jsx("div",{className:"formLabel",children:o.jsx("label",{children:"Allowable Zones"})}),o.jsx("div",{className:"checkboxGroup",children:Object.keys(a.zones).map(x=>o.jsxs("label",{className:"checkboxLabel",children:[o.jsx("input",{type:"checkbox",checked:a.zones[x],onChange:()=>f(x)}),o.jsx("span",{children:x.replace("_","-")})]},x))})]})]})]}),o.jsxs("div",{className:"modalFooter",children:[o.jsx("button",{className:"btn btnPrimary",onClick:m,children:"Add Guest Pass"}),o.jsx("button",{className:"btn btnSecondary",onClick:v,children:"Cancel"})]})]})}):null}function LM(){return new Date().toISOString().split("T")[0]}const ah=()=>({quantity:1,label:"",duration:"",durationType:"Hours",maxUses:0,expiryDate:"",expiryTime:"00:00",uploadCap:1500,downloadCap:1500,zones:{CONFERENCE:!1,PUBLIC:!1,GUEST_ROOM:!1,IROH:!1,RC:!1}});function DM({isOpen:i,onClose:e,onSubmit:t}){const[s,a]=j.useState(ah()),c=(v,x)=>a(g=>({...g,[v]:x})),u=(v,x)=>{const g=x===""?"":Number(x);a(M=>({...M,[v]:g}))},h=v=>a(x=>({...x,zones:{...x.zones,[v]:!x.zones[v]}})),f=()=>{if(s.quantity<1||s.quantity>1e3){alert("La quantité doit être comprise entre 1 et 1 000.");return}t&&t(s),a(ah()),e()},m=()=>{a(ah()),e()};return i?o.jsx("div",{className:"modalOverlay",onClick:m,children:o.jsxs("div",{className:"modalContent",onClick:v=>v.stopPropagation(),children:[o.jsxs("div",{className:"modalHeader",children:[o.jsx("button",{className:"backBtn",onClick:m,children:"← BACK"}),o.jsxs("div",{className:"modalTitle",children:[o.jsx("h2",{children:"Add Mass Guest Pass"}),o.jsx("p",{children:`Créez plusieurs codes WiFi en une seule opération. Les codes sont générés aléatoirement. Le label permet de regrouper et d'identifier tous ces codes sous un même événement ou contexte (ex : "Conférence Total Energie" — tous les codes créés porteront ce label pour les distinguer facilement).`})]})]}),o.jsxs("div",{className:"modalBody",children:[o.jsxs("section",{className:"formSection",children:[o.jsx("h3",{className:"sectionTitle",children:"General Information"}),o.jsxs("div",{className:"formRow",children:[o.jsxs("div",{className:"formLabel",children:[o.jsx("label",{children:"Number of Passes"}),o.jsx("p",{className:"labelHelp",children:"Nombre de codes à créer (maximum 1 000)."})]}),o.jsx("input",{type:"number",value:s.quantity,onChange:v=>u("quantity",v.target.value),min:"1",max:"1000"})]}),o.jsxs("div",{className:"formRow",children:[o.jsxs("div",{className:"formLabel",children:[o.jsxs("label",{children:["Label ",o.jsx("span",{style:{fontWeight:400,color:"#94a3b8"},children:"(optionnel)"})]}),o.jsx("p",{className:"labelHelp",children:'Identifiant commun pour tous les codes générés. Permet de les retrouver et filtrer rapidement. Ex : "Conférence Total Energie", "Séminaire RH Mars 2026", "Journalistes accrédités". Les codes eux-mêmes restent générés aléatoirement.'})]}),o.jsx("input",{type:"text",value:s.label,onChange:v=>c("label",v.target.value),placeholder:"Ex : Conférence Total Energie"})]}),o.jsxs("div",{className:"formRow",children:[o.jsxs("div",{className:"formLabel",children:[o.jsx("label",{children:"Duration"}),o.jsx("p",{className:"labelHelp",children:"Choisissez l'unité puis la valeur. Durée maximale : 180 jours."})]}),o.jsxs("div",{className:"durationGroup",children:[o.jsx("input",{type:"number",value:s.duration,onChange:v=>u("duration",v.target.value),placeholder:"0",min:"0"}),o.jsxs("select",{value:s.durationType,onChange:v=>c("durationType",v.target.value),children:[o.jsx("option",{children:"Hours"}),o.jsx("option",{children:"Days"})]})]})]}),o.jsxs("div",{className:"formRow",children:[o.jsxs("div",{className:"formLabel",children:[o.jsx("label",{children:"Max Number of Uses"}),o.jsx("p",{className:"labelHelp",children:"Utilisations illimitées : saisir 0."})]}),o.jsx("input",{type:"number",value:s.maxUses,onChange:v=>u("maxUses",v.target.value),min:"0"})]}),o.jsxs("div",{className:"formRow",children:[o.jsxs("div",{className:"formLabel",children:[o.jsxs("label",{children:["Expiry Date ",o.jsx("span",{style:{fontWeight:400,color:"#94a3b8"},children:"(optionnel)"})]}),o.jsx("p",{className:"labelHelp",children:"Laissez vide pour aucune expiration. Les dates passées sont bloquées."})]}),o.jsxs("div",{className:"dateTimeGroup",children:[o.jsx("input",{type:"date",value:s.expiryDate,min:LM(),onChange:v=>c("expiryDate",v.target.value)}),o.jsx("input",{type:"time",value:s.expiryTime,onChange:v=>c("expiryTime",v.target.value)})]})]})]}),o.jsxs("section",{className:"formSection",children:[o.jsx("h3",{className:"sectionTitle",children:"Bandwidth Settings"}),o.jsxs("div",{className:"formRow",children:[o.jsxs("div",{className:"formLabel",children:[o.jsx("label",{children:"Upload Cap"}),o.jsx("p",{className:"labelHelp",children:"Glissez ou tapez directement (0 – 15 000 kb/s)."})]}),o.jsxs("div",{className:"capGroup",children:[o.jsx("input",{type:"range",min:"0",max:"15000",step:"100",value:s.uploadCap,onChange:v=>u("uploadCap",v.target.value),className:"capSlider"}),o.jsx("input",{type:"number",min:"0",max:"15000",step:"100",value:s.uploadCap,onChange:v=>u("uploadCap",v.target.value),className:"capInput"}),o.jsx("span",{className:"capUnit",children:"kb/s"})]})]}),o.jsxs("div",{className:"formRow",children:[o.jsxs("div",{className:"formLabel",children:[o.jsx("label",{children:"Download Cap"}),o.jsx("p",{className:"labelHelp",children:"Glissez ou tapez directement (0 – 15 000 kb/s)."})]}),o.jsxs("div",{className:"capGroup",children:[o.jsx("input",{type:"range",min:"0",max:"15000",step:"100",value:s.downloadCap,onChange:v=>u("downloadCap",v.target.value),className:"capSlider"}),o.jsx("input",{type:"number",min:"0",max:"15000",step:"100",value:s.downloadCap,onChange:v=>u("downloadCap",v.target.value),className:"capInput"}),o.jsx("span",{className:"capUnit",children:"kb/s"})]})]})]}),o.jsxs("section",{className:"formSection",children:[o.jsx("h3",{className:"sectionTitle",children:"Zone Information"}),o.jsxs("div",{className:"formRow",children:[o.jsx("div",{className:"formLabel",children:o.jsx("label",{children:"Allowable Zones"})}),o.jsx("div",{className:"checkboxGroup",children:Object.keys(s.zones).map(v=>o.jsxs("label",{className:"checkboxLabel",children:[o.jsx("input",{type:"checkbox",checked:s.zones[v],onChange:()=>h(v)}),o.jsx("span",{children:v.replace("_","-")})]},v))})]})]})]}),o.jsxs("div",{className:"modalFooter",children:[o.jsxs("button",{className:"btn btnPrimary",onClick:f,children:["Create ",s.quantity," Guest Pass",s.quantity>1?"es":""]}),o.jsx("button",{className:"btn btnSecondary",onClick:m,children:"Cancel"})]})]})}):null}const oh={dashboard:lt.public.dashboard,"network-map":lt.public.networkMap,"wifi-code":lt.public.wifiCode,"login-by-address":lt.public.loginByAddress,"status-logins":lt.public.statusLogins,"manual-login":lt.public.manualLogin,"website-manager":lt.public.websitesManager,"config-code":lt.public.configCode,hotels:lt.public.hotels,rooms:lt.public.rooms,"config-wifi":lt.public.configWifi,devices:lt.public.devices,"admin-mboa":lt.public.adminMboa,users:lt.public.users,notifications:lt.public.notifications};function Tr({children:i,activePage:e="LOGINS",activeSubPage:t="WiFi Code"}){var b;const s=Ds(),a=Ti.getStoredUser(),c=(a==null?void 0:a.name)||(a==null?void 0:a.email)||"Utilisateur",u=c.charAt(0).toUpperCase(),h=String((a==null?void 0:a.role)||"").trim().toUpperCase(),f=h==="RECEPTIONIST",m=h==="HOTEL_IT",v=h==="ADMIN",x=h==="SUPPORT"||h.includes("SUPPORT"),g=f?["LOGINS","NOTIFICATIONS"]:m?["DASHBOARD","LOGINS","NOTIFICATIONS"]:v?["ADMINISTRATION","LOGINS","DASHBOARD","HOTEL MANAGER","DEVICE MANAGER","NOTIFICATIONS"]:x?["LOGINS","DASHBOARD","NOTIFICATIONS"]:["LOGINS","DASHBOARD","NOTIFICATIONS"],M={LOGINS:f?[{label:"Manual Login",page:"manual-login"}]:m?[{label:"WiFi Code",page:"wifi-code"},{label:"Statut Logins",page:"status-logins"},{label:"Web Site Manager",page:"website-manager"}]:[{label:"WiFi Code",page:"wifi-code"},{label:"Login by Adress",page:"login-by-address"},{label:"Statut Logins",page:"status-logins"},{label:"Manual Login",page:"manual-login"},{label:"Web Site Manager",page:"website-manager"},{label:"Config Code",page:"config-code"}],DASHBOARD:[{label:"Overview",page:"dashboard"},{label:"Network Map",page:"network-map"}],"HOTEL MANAGER":[{label:"Hotels",page:"hotels"},{label:"Rooms",page:"rooms"},{label:"Config WiFi",page:"config-wifi"}],"DEVICE MANAGER":[{label:"Devices",page:"devices"}],NOTIFICATIONS:[{label:"Messages",page:"notifications"}],ADMINISTRATION:[{label:"Super Admin",page:"admin-mboa"}]},E={LOGINS:f?"manual-login":"wifi-code","HOTEL MANAGER":"hotels",DASHBOARD:"dashboard","DEVICE MANAGER":"devices",NOTIFICATIONS:"notifications",ADMINISTRATION:"admin-mboa"},A=g.includes(e),y=T=>{const N=E[T];N&&oh[N]&&s(oh[N])},S=async()=>{await Ti.logout(),s(lt.public.login)};return o.jsxs("div",{className:"layout",children:[o.jsx("header",{className:"mainHeader",children:o.jsxs("div",{className:"headerInner",children:[o.jsxs("div",{className:"headerLeft",children:[o.jsx("div",{className:"headerBrand",children:o.jsx("img",{src:yp,alt:"MboaLink",className:"headerLogo"})}),o.jsx("nav",{className:"mainNav","aria-label":"Main navigation",children:g.map(T=>o.jsx("button",{type:"button",className:`mainNavLink ${T===e?"active":""}`,onClick:()=>y(T),"aria-disabled":!E[T],children:T},T))})]}),o.jsxs("div",{className:"headerRight",children:[o.jsxs("div",{className:"userInfo",children:[o.jsx("span",{className:"userAvatar",children:u}),o.jsx("span",{className:"userName",children:c})]}),o.jsx("button",{className:"logoutBtn",onClick:S,type:"button",children:"Déconnexion"})]})]})}),A&&((b=M[e])==null?void 0:b.length)>0&&o.jsx("nav",{className:"subNav","aria-label":"Sub navigation",children:o.jsx("div",{className:"subNavInner",children:M[e].map(T=>o.jsx(gp,{to:oh[T.page],className:`subNavLink ${T.label===t?"active":""}`,children:T.label},T.page))})}),o.jsx("main",{className:"mainContent",children:i}),o.jsx("footer",{className:"mainFooter",children:o.jsxs("div",{className:"footerInner",children:[o.jsxs("div",{className:"footerLinks",children:[o.jsx("a",{href:"#",children:"Terms of Service"}),o.jsx("span",{className:"separator",children:"|"}),o.jsx("a",{href:"#",children:"Privacy Policy"}),o.jsx("span",{className:"separator",children:"|"}),o.jsx("a",{href:"#",children:"Help Desk"})]}),o.jsx("p",{className:"footerCopy",children:"© 2025 MboaLink. Tous droits réservés."})]})})]})}const ti="all";function ka(i){return(i==null?void 0:i.role)==="ADMIN"||(i==null?void 0:i.role)==="SUPPORT"}function Qo(i,e=[]){var t;return ka(i)?ti:(i==null?void 0:i.hotelId)||((t=e[0])==null?void 0:t.id)||""}function Ns(i){if(!(!i||i===ti))return i}function zo(i){return!!i&&i!==ti}const IM=()=>o.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),o.jsx("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]}),UM=()=>o.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("circle",{cx:"12",cy:"12",r:"10"}),o.jsx("line",{x1:"4.93",y1:"4.93",x2:"19.07",y2:"19.07"})]}),FM=()=>o.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("polyline",{points:"3 6 5 6 21 6"}),o.jsx("path",{d:"M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"}),o.jsx("path",{d:"M10 11v6"}),o.jsx("path",{d:"M14 11v6"}),o.jsx("path",{d:"M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"})]});function Nx(i){return i?new Date(i).toLocaleString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}):"—"}function OM(i){return i?new Date(i)<new Date:!1}function v0(){const i=Ti.getStoredUser(),e=(i==null?void 0:i.role)==="HOTEL_IT",t=ka(i),[s,a]=j.useState([]),[c,u]=j.useState([]),[h,f]=j.useState([]),[m,v]=j.useState(""),[x,g]=j.useState(!0),[M,E]=j.useState(""),[A,y]=j.useState([]),[S,b]=j.useState(!1),[T,N]=j.useState(!1),D=j.useRef(null),L=async k=>{try{const W=Ns(k),[$,le]=await Promise.all([st.listGuestPasses(W?{hotelId:W}:void 0),st.listRooms(W?{hotelId:W}:void 0)]);a($),u(le)}catch(W){alert(W.message||"Impossible de charger les codes")}};j.useEffect(()=>{st.listHotels().then(k=>{f(k);const W=Qo(i,k);return v(W),L(W)}).catch(k=>alert(k.message||"Chargement impossible")).finally(()=>g(!1))},[]),j.useEffect(()=>{!m||x||(L(m),y([]))},[m]),j.useEffect(()=>{if(!D.current)return;const k=O.length;A.length===0?(D.current.checked=!1,D.current.indeterminate=!1):A.length===k&&k>0?(D.current.checked=!0,D.current.indeterminate=!1):(D.current.checked=!1,D.current.indeterminate=!0)});const O=j.useMemo(()=>{const k=M.trim().toLowerCase();return k?s.filter(W=>{var $,le;return`${W.code} ${W.label||""} ${W.clientName||""} ${(($=W.room)==null?void 0:$.name)||""} ${((le=W.room)==null?void 0:le.type)||""}`.toLowerCase().includes(k)}):s},[s,M]),w=k=>y(W=>W.includes(k)?W.filter($=>$!==k):[...W,k]),U=()=>y(A.length===O.length?[]:O.map(k=>k.id)),Y=async()=>{if(A.length===0){alert("Sélectionnez au moins un code");return}if(confirm(`Supprimer ${A.length} code(s) sélectionné(s) ?`))try{await Promise.all(A.map(k=>st.deleteGuestPass(k))),await L(m),y([])}catch(k){alert(k.message||"Suppression impossible")}},H=async k=>{var W;if(confirm("Révoquer ce code ? Il ne pourra plus être utilisé."))try{await st.revokeGuestPass(k),await L(m)}catch($){if((W=$.message)!=null&&W.includes("expirée")||$.status===401){alert("Votre session a expiré. Veuillez vous reconnecter."),window.location.href="/login";return}alert($.message||"Révocation impossible")}},ee=async k=>{if(confirm("Supprimer définitivement ce code ?"))try{await st.deleteGuestPass(k),await L(m),y(W=>W.filter($=>$!==k))}catch(W){alert(W.message||"Suppression impossible")}},G=async k=>{if(!zo(m)){alert("Sélectionnez un hôtel précis avant de créer un code");return}try{const W=k.duration===""||k.duration===void 0?void 0:Number(k.duration);await st.createGuestPass({hotelId:m,code:k.passCode,label:k.label,roomId:k.roomId||void 0,clientName:k.clientName||void 0,durationValue:W,durationUnit:k.durationType,maxUses:Number(k.maxUses||0),expiryDate:k.expiryDate||void 0,expiryTime:k.expiryTime||void 0,uploadCapKbps:Number(k.uploadCap||1500),downloadCapKbps:Number(k.downloadCap||1500),zones:Object.entries(k.zones||{}).filter(([,$])=>$).map(([$])=>$)}),await L(m)}catch(W){alert(W.message||"Création impossible")}},Q=async k=>{if(!zo(m)){alert("Sélectionnez un hôtel précis avant de créer des codes");return}try{const W=k.duration===""||k.duration===void 0?void 0:Number(k.duration);await st.createGuestPassesBulk({hotelId:m,quantity:Number(k.quantity||1),codePrefix:k.label||void 0,label:k.label||void 0,durationValue:W,durationUnit:k.durationType,maxUses:Number(k.maxUses||0),expiryDate:k.expiryDate||void 0,expiryTime:k.expiryTime||void 0,uploadCapKbps:Number(k.uploadCap||1500),downloadCapKbps:Number(k.downloadCap||1500),zones:Object.entries(k.zones||{}).filter(([,$])=>$).map(([$])=>$)}),await L(m)}catch(W){alert(W.message||"Création en masse impossible")}},V=zo(m);return o.jsxs(Tr,{activePage:"LOGINS",activeSubPage:"WiFi Code",children:[o.jsxs("div",{className:"wifiCodePage",children:[o.jsxs("div",{className:"pageHeader",children:[o.jsx("h1",{className:"pageTitle",children:"Guest WiFi Codes"}),e&&o.jsx("span",{className:"hotelBadge",children:"Vue IT hôtel - accès clients"}),o.jsx("p",{className:"pageDescription",children:e?"Gérez les accès Wi-Fi clients de votre hôtel, avec un périmètre limité à votre établissement.":"Les WiFi Codes permettent à vos invités d'accéder à Internet via MboaLink. Vous pouvez créer de nouveaux codes, ajuster la durée, le débit et le nombre d'utilisations, ou supprimer les codes existants à partir de cette liste."})]}),o.jsxs("div",{className:"displayInfo",children:["Affichage de ",O.length," code",O.length!==1?"s":"","."]}),o.jsx("div",{className:"warningBanner",children:"Toute date d'expiration marquée d'un (*) correspond à un code déjà expiré et sera automatiquement retiré de la liste 30 jours après expiration."}),o.jsxs("div",{className:"actionsBar",children:[t&&o.jsxs("select",{className:"filterSelect",value:m,onChange:k=>v(k.target.value),children:[o.jsx("option",{value:ti,children:"Tous les hôtels"}),h.map(k=>o.jsx("option",{value:k.id,children:k.name},k.id))]}),o.jsx("input",{type:"text",placeholder:"Rechercher un code, un label...",className:"searchInput",value:M,onChange:k=>E(k.target.value)}),o.jsxs("div",{className:"actionButtons",children:[o.jsxs("button",{className:"btn btnSecondary",onClick:Y,disabled:A.length===0,children:["Supprimer (",A.length,")"]}),o.jsx("button",{className:"btn btnSecondary",onClick:()=>window.print(),children:"Print List"}),o.jsx("button",{className:"btn btnPrimary",disabled:!V,onClick:()=>N(!0),children:"Add Mass Guest Pass"}),o.jsx("button",{className:"btn btnPrimary",disabled:!V,onClick:()=>b(!0),children:"Add Guest Pass"})]})]}),!m&&!x&&o.jsx("div",{className:"warningBanner",children:"Créez d'abord un hôtel dans Hotel Manager avant de générer des codes WiFi."}),m===ti&&!x&&o.jsx("div",{className:"warningBanner",children:"Vue globale active : sélectionnez un hôtel précis pour créer de nouveaux codes WiFi."}),o.jsxs("div",{className:"tableWrapper",children:[x&&o.jsx("p",{style:{padding:"16px",color:"#64748b"},children:"Chargement des codes…"}),o.jsxs("table",{className:"wifiTable",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:o.jsx("input",{type:"checkbox",ref:D,onChange:U,title:A.length>0?"Tout désélectionner":"Tout sélectionner"})}),o.jsx("th",{children:"Pass"}),o.jsx("th",{children:"Label"}),o.jsx("th",{children:"Room / Client"}),o.jsx("th",{children:"Max Uses"}),o.jsx("th",{children:"Duration"}),o.jsx("th",{children:"Cap (Down / Up)"}),o.jsx("th",{children:"Créé le"}),o.jsx("th",{children:"Créé par"}),o.jsx("th",{children:"Expires"}),o.jsx("th",{children:"Options"})]})}),o.jsxs("tbody",{children:[!1,O.length===0&&!x?o.jsx("tr",{children:o.jsx("td",{colSpan:11,style:{textAlign:"center",padding:"40px",color:"#94a3b8"},children:"Aucun code WiFi trouvé."})}):O.map(k=>{var le,se,B,re;const W=OM(k.expiryAt),$=((le=k.createdBy)==null?void 0:le.fullName)||((se=k.createdBy)==null?void 0:se.email)||"—";return o.jsxs("tr",{className:W?"rowExpired":"",children:[o.jsx("td",{children:o.jsx("input",{type:"checkbox",checked:A.includes(k.id),onChange:()=>w(k.id)})}),o.jsx("td",{className:"codeCell",children:k.code}),o.jsx("td",{children:k.label||"—"}),o.jsxs("td",{children:[((B=k.room)==null?void 0:B.name)||((re=k.room)==null?void 0:re.type)||"—",k.clientName?o.jsxs(o.Fragment,{children:[o.jsx("br",{}),o.jsx("small",{children:k.clientName})]}):null]}),o.jsx("td",{children:k.maxUses===0?"∞":k.maxUses}),o.jsx("td",{children:k.durationValue?`${k.durationValue} ${k.durationUnit||""}`:"—"}),o.jsxs("td",{className:"bandwidthCell",children:[k.downloadCapKbps," / ",k.uploadCapKbps," kb/s"]}),o.jsx("td",{className:"dateCell",children:Nx(k.createdAt)}),o.jsx("td",{className:"createdByCell",children:$}),o.jsx("td",{className:`dateCell ${W?"expiredDate":""}`,children:k.expiryAt?`${Nx(k.expiryAt)}${W?" *":""}`:"—"}),o.jsx("td",{children:o.jsxs("div",{className:"optionsCell",children:[o.jsx("button",{className:"actionIconBtn actionIconBtnRevoke",title:"Révoquer",onClick:()=>H(k.id),disabled:k.isRevoked,children:o.jsx(UM,{})}),o.jsx("button",{className:"actionIconBtn actionIconBtnEdit",title:"Modifier (bientôt disponible)",onClick:()=>alert("Fonctionnalité de modification à venir."),children:o.jsx(IM,{})}),o.jsx("button",{className:"actionIconBtn actionIconBtnDelete",title:"Supprimer",onClick:()=>ee(k.id),children:o.jsx(FM,{})})]})})]},k.id)})]})]})]})]}),o.jsx(PM,{isOpen:S,onClose:()=>b(!1),onSubmit:G,rooms:c}),o.jsx(DM,{isOpen:T,onClose:()=>N(!1),onSubmit:Q})]})}function kM(){return o.jsx(v0,{})}function jM(){const[i,e]=j.useState(""),[t,s]=j.useState([]),[a,c]=j.useState({address:"",interface:"Not Public IP",clearedDate:"",clearedTime:"16:00",uploadCap:1500,downloadCap:1500,connectionType:"Admin Machine",notes:""}),[u,h]=j.useState([]),[f,m]=j.useState([]),v=async y=>{const S=await st.listClearedAddresses(y?{hotelId:y}:void 0);h(S.map(b=>({id:b.id,ipmac:b.address,interface:b.networkInterface||"None selected",expires:new Date(b.expiresAt).toLocaleString("fr-FR"),cap:`${b.downloadCapKbps} / ${b.uploadCapKbps}`,issuedBy:b.issuedBy||"-",details:`${b.connectionType||""} ${b.notes||""}`.trim()||"-"})))};j.useEffect(()=>{st.listHotels().then(async y=>{var b;s(y);const S=((b=y[0])==null?void 0:b.id)||"";e(S),await v(S)}).catch(y=>alert(y.message||"Impossible de charger les adresses"))},[]);const x=(y,S)=>{c(b=>({...b,[y]:S}))},g=async()=>{if(!i){alert("Sélectionnez un hôtel");return}if(!a.clearedDate){alert("Sélectionnez une date d’expiration");return}try{await st.createClearedAddress({hotelId:i,address:a.address,networkInterface:a.interface,expiresAt:`${a.clearedDate}T${a.clearedTime||"00:00"}:00.000Z`,uploadCapKbps:Number(a.uploadCap),downloadCapKbps:Number(a.downloadCap),connectionType:a.connectionType,notes:a.notes}),await v(i)}catch(y){alert(y.message||"Création impossible")}},M=async()=>{if(f.length!==0)try{await st.deleteClearedAddresses(f),await v(i),m([])}catch(y){alert(y.message||"Suppression impossible")}},E=y=>{m(S=>S.includes(y)?S.filter(b=>b!==y):[...S,y])},A=()=>{m(y=>y.length===u.length?[]:u.map(S=>S.id))};return o.jsx(Tr,{activePage:"LOGINS",activeSubPage:"Login by Adress",children:o.jsxs("div",{className:"loginByAddressPage",children:[o.jsxs("div",{className:"pageHeader",children:[o.jsx("h1",{className:"pageTitle",children:"Clear IP/MAC Address"}),o.jsx("p",{className:"pageSubtitle",children:"If the IP you want to clear is a public IP, you must specify the network interface."})]}),o.jsx("div",{className:"clearForm",children:o.jsxs("div",{className:"formSection",children:[o.jsx("h3",{className:"sectionTitle",children:"Address and Device Information"}),o.jsxs("div",{className:"formGrid",children:[o.jsxs("div",{className:"formCol",children:[o.jsxs("div",{className:"formField",children:[o.jsx("label",{children:"Hotel"}),o.jsxs("select",{value:i,onChange:y=>{const S=y.target.value;e(S),v(S)},children:[o.jsx("option",{value:"",children:"Select hotel"}),t.map(y=>o.jsx("option",{value:y.id,children:y.name},y.id))]})]}),o.jsxs("div",{className:"formField",children:[o.jsx("label",{children:"IP/MAC Address"}),o.jsx("p",{className:"fieldHelp",children:"Must be formatted correctly as an IP address or MAC address. Example MAC Address: 3D:F2:C0:A0:B3:4F"}),o.jsx("input",{type:"text",value:a.address,onChange:y=>x("address",y.target.value),placeholder:"Enter IP or MAC address"})]}),o.jsxs("div",{className:"formField",children:[o.jsx("label",{children:"Specify Network Interface"}),o.jsxs("select",{value:a.interface,onChange:y=>x("interface",y.target.value),children:[o.jsx("option",{children:"Not Public IP"}),o.jsx("option",{children:"Public IP – Interface A"}),o.jsx("option",{children:"Public IP – Interface B"})]})]}),o.jsxs("div",{className:"formField",children:[o.jsx("label",{children:"Cleared Until"}),o.jsxs("div",{className:"dateTimeGroup",children:[o.jsx("input",{type:"date",value:a.clearedDate,onChange:y=>x("clearedDate",y.target.value)}),o.jsx("input",{type:"time",value:a.clearedTime,onChange:y=>x("clearedTime",y.target.value)})]})]})]}),o.jsxs("div",{className:"formCol",children:[o.jsxs("div",{className:"formField",children:[o.jsx("label",{children:"Upload Cap"}),o.jsxs("div",{className:"capControl",children:[o.jsx("input",{type:"range",min:"0",max:"15000",step:"100",value:a.uploadCap,onChange:y=>x("uploadCap",Number(y.target.value))}),o.jsx("input",{type:"number",value:a.uploadCap,onChange:y=>x("uploadCap",Number(y.target.value)),className:"capValue"})]})]}),o.jsxs("div",{className:"formField",children:[o.jsx("label",{children:"Download Cap"}),o.jsxs("div",{className:"capControl",children:[o.jsx("input",{type:"range",min:"0",max:"15000",step:"100",value:a.downloadCap,onChange:y=>x("downloadCap",Number(y.target.value))}),o.jsx("input",{type:"number",value:a.downloadCap,onChange:y=>x("downloadCap",Number(y.target.value)),className:"capValue"})]})]}),o.jsxs("div",{className:"formField",children:[o.jsx("label",{children:"Connection Type / Reason"}),o.jsxs("select",{value:a.connectionType,onChange:y=>x("connectionType",y.target.value),children:[o.jsx("option",{children:"Admin Machine"}),o.jsx("option",{children:"Guest Device"}),o.jsx("option",{children:"Staff Device"}),o.jsx("option",{children:"Other"})]})]}),o.jsxs("div",{className:"formField",children:[o.jsx("label",{children:"Notes"}),o.jsx("p",{className:"fieldHelp",children:"Why are you clearing it? Case #, etc."}),o.jsx("textarea",{value:a.notes,onChange:y=>x("notes",y.target.value),placeholder:"Enter notes...",rows:"3"})]})]})]}),o.jsxs("div",{className:"formActions",children:[o.jsx("button",{className:"btn btnPrimary",onClick:g,children:"Clear"}),o.jsx("button",{className:"btn btnDanger",onClick:M,children:"Remove Selected"})]})]})}),o.jsxs("div",{className:"addressTable",children:[o.jsx("div",{className:"tableHeader",children:o.jsx("h3",{className:"tableTitle",children:"Cleared Addresses"})}),o.jsx("div",{className:"tableWrapper",children:o.jsxs("table",{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{style:{width:"40px"},children:o.jsx("input",{type:"checkbox",checked:f.length===u.length,onChange:A})}),o.jsx("th",{children:"IP/Mac"}),o.jsx("th",{children:"Interface"}),o.jsx("th",{children:"Expires"}),o.jsx("th",{children:"Cap (Down/Up)"}),o.jsx("th",{children:"Issued By"}),o.jsx("th",{children:"Details"}),o.jsx("th",{style:{width:"120px"},children:"Options"})]})}),o.jsx("tbody",{children:u.map(y=>o.jsxs("tr",{className:f.includes(y.id)?"selected":"",children:[o.jsx("td",{children:o.jsx("input",{type:"checkbox",checked:f.includes(y.id),onChange:()=>E(y.id)})}),o.jsx("td",{className:"macAddress",children:y.ipmac}),o.jsx("td",{children:y.interface}),o.jsx("td",{children:y.expires}),o.jsx("td",{className:"capCell",children:y.cap}),o.jsx("td",{children:y.issuedBy}),o.jsx("td",{children:y.details}),o.jsxs("td",{className:"optionsCell",children:[o.jsx("a",{href:"#",className:"optionLink",children:"Remove"})," | ",o.jsx("a",{href:"#",className:"optionLink",children:"Modify"})]})]},y.id))})]})})]})]})})}function BM(){const i=Ti.getStoredUser(),e=ka(i),[t,s]=j.useState(""),[a,c]=j.useState([]),[u,h]=j.useState([]),[f,m]=j.useState(""),[v,x]=j.useState([]),g=T=>T.map(N=>{var D,L,O;return{...N,room:((D=N.room)==null?void 0:D.name)||((L=N.room)==null?void 0:L.type)||"N/A",name:N.clientName||"None Specified",status:N.status==="ONLINE"?"Online":N.status==="AWAY"?"Away":"Offline",ipmac:`${N.ipAddress||"-"} [${N.macAddress||"-"}]`,duration:"-",start:N.startedAt?new Date(N.startedAt).toLocaleString("fr-FR"):"-",end:N.endedAt?new Date(N.endedAt).toLocaleString("fr-FR"):"-",capDown:N.downloadCapKbps||N.capDownKbps||0,capUp:N.uploadCapKbps||N.capUpKbps||0,currentDown:0,currentUp:0,usageDown:N.usedDownMb||N.usageDownMb||0,usageUp:N.usedUpMb||N.usageUpMb||0,type:(O=N.guestPass)!=null&&O.code?`Guest Pass (${N.guestPass.code})`:N.type}}),M=async T=>{const N=Ns(T),D=await st.listLoginSessions(N?{hotelId:N}:void 0);x(g(D))};j.useEffect(()=>{st.listHotels().then(async T=>{h(T);const N=Qo(i,T);m(N),await M(N)}).catch(T=>alert(T.message||"Impossible de charger les sessions"))},[]),j.useEffect(()=>{f&&(M(f).catch(T=>alert(T.message||"Impossible de charger les sessions")),c([]))},[f]);const E=j.useMemo(()=>{const T=v.length,N=v.filter(O=>O.status==="Online").length,D=v.filter(O=>O.status==="Offline").length,L=v.filter(O=>O.status==="Away").length;return{total:T,online:N,offline:D,away:L}},[v]),A=j.useMemo(()=>{const T=t.trim().toLowerCase();return T?v.filter(N=>Object.values(N).some(D=>String(D).toLowerCase().includes(T))):v},[v,t]),y=T=>{c(N=>N.includes(T)?N.filter(D=>D!==T):[...N,T])},S=()=>{c(T=>T.length===A.length?[]:A.map(N=>N.id))},b=()=>{if(a.length===0){alert("Please select at least one login to remove");return}confirm(`Remove ${a.length} selected login(s)?`)&&st.deleteLoginSessions(a).then(async()=>{await M(f),c([])}).catch(T=>alert(T.message||"Suppression impossible"))};return o.jsx(Tr,{activePage:"LOGINS",activeSubPage:"Statut Logins",children:o.jsxs("div",{className:"statutLoginsPage",children:[o.jsxs("div",{className:"pageHeader",children:[o.jsx("h1",{className:"pageTitle",children:"Guest Logins"}),o.jsx("p",{className:"pageSubtitle",children:"All currently logged in users are listed."})]}),o.jsxs("div",{className:"displayInfo",children:["Displaying ",A.length," logins."]}),o.jsxs("div",{className:"statsBar",children:[o.jsxs("div",{className:"statItem",children:[o.jsx("span",{className:"statLabel",children:"TotalGuest:"}),o.jsx("span",{className:"statValue",children:E.total})]}),o.jsxs("div",{className:"statItem",children:[o.jsx("span",{className:"statLabel",children:"TotalOnline:"}),o.jsx("span",{className:"statValue online",children:E.online})]}),o.jsxs("div",{className:"statItem",children:[o.jsx("span",{className:"statLabel",children:"Total Offline:"}),o.jsx("span",{className:"statValue offline",children:E.offline})]}),o.jsxs("div",{className:"statItem",children:[o.jsx("span",{className:"statLabel",children:"Total Away:"}),o.jsx("span",{className:"statValue away",children:E.away})]})]}),o.jsxs("div",{className:"actionsBar",children:[e&&o.jsxs("select",{className:"filterSelect",value:f,onChange:T=>m(T.target.value),children:[o.jsx("option",{value:ti,children:"Tous les hôtels"}),u.map(T=>o.jsx("option",{value:T.id,children:T.name},T.id))]}),o.jsx("input",{type:"text",className:"searchInput",placeholder:"Search by room, name, IP/MAC, type...",value:t,onChange:T=>s(T.target.value)}),o.jsx("button",{className:"btn btnDanger",onClick:b,disabled:a.length===0,children:"Remove Selected"})]}),o.jsx("div",{className:"tableWrapper",children:o.jsxs("table",{className:"loginsTable",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{style:{width:"40px"},children:o.jsx("input",{type:"checkbox",checked:a.length===A.length&&A.length>0,onChange:S})}),o.jsx("th",{children:"Room"}),o.jsx("th",{children:"Name"}),o.jsx("th",{children:"Status"}),o.jsx("th",{children:"Type"}),o.jsx("th",{children:"IP/MAC"}),o.jsx("th",{children:"Duration"}),o.jsx("th",{children:"Start/End"}),o.jsx("th",{children:"Utilization(Down/Up)"}),o.jsx("th",{children:"Options"})]})}),o.jsx("tbody",{children:A.map(T=>o.jsxs("tr",{className:a.includes(T.id)?"selected":"",children:[o.jsx("td",{children:o.jsx("input",{type:"checkbox",checked:a.includes(T.id),onChange:()=>y(T.id)})}),o.jsx("td",{className:"roomCell",children:T.room}),o.jsx("td",{children:T.name}),o.jsx("td",{children:o.jsx("span",{className:`statusBadge ${T.status.toLowerCase()}`,children:T.status})}),o.jsx("td",{className:"typeCell",children:T.type}),o.jsx("td",{className:"macCell",children:T.ipmac}),o.jsx("td",{children:T.duration}),o.jsxs("td",{className:"dateCell",children:[o.jsxs("div",{children:["Start: ",T.start]}),o.jsxs("div",{children:["End: ",T.end]})]}),o.jsxs("td",{className:"utilizationCell",children:[o.jsxs("div",{children:["Cap: ",T.capDown," / ",T.capUp," Kb/s"]}),o.jsxs("div",{children:["Current: ",T.currentDown," / ",T.currentUp," Kb/s"]}),o.jsxs("div",{children:["Usage: ",T.usageDown," / ",T.usageUp," MB"]})]}),o.jsx("td",{className:"optionsCell",children:o.jsx("a",{href:"#",className:"optionLink",children:"Remove"})})]},T.id))})]})})]})})}function Px(i){if(!i)return"";const e=new Date(i),t=s=>String(s).padStart(2,"0");return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}T${t(e.getHours())}:${t(e.getMinutes())}`}function lh(i){return i?new Date(i).toLocaleString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}):"—"}function df(i,e){if(!i||!e)return"—";const t=new Date(e).getTime()-new Date(i).getTime();if(t<=0)return"—";const s=Math.floor(t/(1e3*60*60*24)),a=Math.floor(t%(1e3*60*60*24)/(1e3*60*60));return s===0?`${a}h`:a>0?`${s}j ${a}h`:`${s} jour${s>1?"s":""}`}function zM(i,e){if(!i||!e)return{label:"—",css:""};const t=Date.now(),s=new Date(i).getTime(),a=new Date(e).getTime();return t<s?{label:"À venir",css:"PENDING"}:t>a?{label:"Expiré",css:"EXPIRED"}:{label:"Accès actif",css:"ACTIVE"}}function Lx(){return new Date().toISOString().slice(0,16)}function HM({session:i,rooms:e,onClose:t,onSave:s}){var T;const[a,c]=j.useState(i.clientName||""),[u,h]=j.useState(((T=i.room)==null?void 0:T.id)||""),[f,m]=j.useState(Px(i.startedAt)),[v,x]=j.useState(Px(i.endedAt)),[g,M]=j.useState(!1),[E,A]=j.useState(""),y=e.filter(N=>N.hotelId===i.hotelId),S=df(f,v),b=async()=>{if(!a.trim()){A("Le nom est requis");return}if(!f){A("Date d'entrée requise");return}if(!v){A("Date de sortie requise");return}if(new Date(v)<=new Date(f)){A("La date de sortie doit être après la date d'entrée");return}M(!0),A("");try{await s(i.id,{clientName:a.trim(),roomId:u||void 0,startedAt:new Date(f).toISOString(),endedAt:new Date(v).toISOString()}),t()}catch(N){A(N.message||"Erreur lors de la modification")}finally{M(!1)}};return o.jsx("div",{className:"mlOverlay",onClick:t,children:o.jsxs("div",{className:"mlModal",onClick:N=>N.stopPropagation(),children:[o.jsxs("div",{className:"mlModalHeader",children:[o.jsx("h3",{className:"mlModalTitle",children:"Modifier le check-in"}),o.jsx("button",{className:"mlModalClose",onClick:t,children:"✕"})]}),o.jsxs("div",{className:"mlModalBody",children:[E&&o.jsx("div",{className:"mlErrorBox",children:E}),o.jsxs("div",{className:"mlModalField",children:[o.jsxs("label",{children:["Nom du client ",o.jsx("span",{className:"required",children:"*"})]}),o.jsx("input",{type:"text",className:"mlInput",value:a,onChange:N=>c(N.target.value),disabled:g})]}),o.jsxs("div",{className:"mlModalField",children:[o.jsx("label",{children:"Numéro de chambre"}),o.jsxs("select",{className:"mlSelectModal",value:u,onChange:N=>h(N.target.value),disabled:g,children:[o.jsx("option",{value:"",children:"— Sélectionner —"}),y.map(N=>o.jsxs("option",{value:N.id,children:[N.name||N.type,N.floor!=null?` (Étage ${N.floor})`:""]},N.id))]})]}),o.jsxs("div",{className:"mlModalGrid",children:[o.jsxs("div",{className:"mlModalField",children:[o.jsxs("label",{children:["Date d'entrée ",o.jsx("span",{className:"required",children:"*"})]}),o.jsx("input",{type:"datetime-local",className:"mlInput",value:f,onChange:N=>m(N.target.value),disabled:g})]}),o.jsxs("div",{className:"mlModalField",children:[o.jsxs("label",{children:["Date de sortie ",o.jsx("span",{className:"required",children:"*"})]}),o.jsx("input",{type:"datetime-local",className:"mlInput",value:v,min:f||void 0,onChange:N=>x(N.target.value),disabled:g})]})]}),S!=="—"&&o.jsxs("div",{className:"mlDurationBadge",children:["Durée du séjour : ",S]})]}),o.jsxs("div",{className:"mlModalFooter",children:[o.jsx("button",{className:"mlBtn mlBtnSecondary",onClick:t,disabled:g,children:"Annuler"}),o.jsx("button",{className:"mlBtn mlBtnPrimary",onClick:b,disabled:g,children:g?"Enregistrement…":"Sauvegarder"})]})]})})}function GM(){const i=Ti.getStoredUser(),e=(i==null?void 0:i.role)==="RECEPTIONIST",t=ka(i),[s,a]=j.useState([]),[c,u]=j.useState([]),[h,f]=j.useState([]),[m,v]=j.useState(!1),[x,g]=j.useState(""),[M,E]=j.useState(""),[A,y]=j.useState(""),[S,b]=j.useState(""),[T,N]=j.useState(""),[D,L]=j.useState(""),[O,w]=j.useState(""),[U,Y]=j.useState(""),[H,ee]=j.useState(null),G=async X=>{const me=Ns(X),fe=me?{hotelId:me}:void 0,[we,Oe]=await Promise.all([st.listRooms(fe),st.listLoginSessions(fe)]);u(we),f(Oe)};j.useEffect(()=>{st.listHotels().then(async X=>{a(X);const me=Qo(i,X);g(me),await G(me)}).catch(X=>alert(X.message||"Chargement impossible"))},[]),j.useEffect(()=>{x&&(G(x).catch(X=>alert(X.message||"Chargement impossible")),y(""),b(""))},[x]);const Q=j.useMemo(()=>c.filter(X=>X.hotelId===x),[c,x]),V=X=>{y(X);const me=Q.find(fe=>[fe.name,fe.type].filter(Boolean).some(we=>String(we).toLowerCase()===X.trim().toLowerCase()));b(me?me.id:"")},k=X=>{b(X);const me=Q.find(fe=>fe.id===X);me&&y(me.name||me.type||"")},W=!!S,$=!!A.trim(),le=j.useMemo(()=>df(T,D),[T,D]),se=async()=>{var X;if(!zo(x)){alert("Sélectionnez d'abord un hôtel précis");return}if(!M.trim()){alert("Le nom du client est requis");return}if(!$){alert("Saisissez un numéro de chambre");return}if(!T){alert("La date d'entrée est requise");return}if(!D){alert("La date de sortie est requise");return}if(new Date(D)<=new Date(T)){alert("La date de sortie doit être après la date d'entrée");return}v(!0);try{const me=await st.createManualLogin({hotelId:x,roomId:S||void 0,roomNumber:A.trim(),clientName:M.trim(),startedAt:new Date(T).toISOString(),endedAt:new Date(D).toISOString()});w(((X=me.guestPass)==null?void 0:X.code)||"");const fe=Ns(x),we=await st.listLoginSessions(fe?{hotelId:fe}:void 0);f(we),E(""),y(""),b(""),N(""),L("")}catch(me){alert(me.message||"Échec du check-in")}finally{v(!1)}},B=()=>{E(""),y(""),b(""),N(""),L(""),w("")},re=async(X,me)=>{await st.updateLoginSession(X,me);const fe=Ns(x),we=await st.listLoginSessions(fe?{hotelId:fe}:void 0);f(we)},Fe=async X=>{if(confirm("Supprimer ce check-in ?"))try{await st.deleteLoginSessions([X]),f(me=>me.filter(fe=>fe.id!==X))}catch(me){alert(me.message||"Suppression impossible")}},Te=j.useMemo(()=>{const X=U.trim().toLowerCase(),me=h.filter(fe=>{const we=fe.type==="Manual Login",Oe=x===ti||fe.hotelId===x;return we&&Oe});return X?me.filter(fe=>{var we,Oe;return[fe.clientName,(we=fe.room)==null?void 0:we.name,(Oe=fe.room)==null?void 0:Oe.type,fe.ipAddress,fe.macAddress].some(et=>String(et||"").toLowerCase().includes(X))}):me},[h,U]),Ae=zo(x);return o.jsxs(Tr,{activePage:"LOGINS",activeSubPage:"Manual Login",children:[o.jsxs("div",{className:"mlPage",children:[o.jsxs("div",{className:"mlHeader",children:[o.jsx("h1",{className:"mlTitle",children:"Manual Login"}),o.jsx("p",{className:"mlSubtitle",children:"Enregistrez un client en précisant son nom, son numéro de chambre et ses dates de séjour. L'accès internet sera actif uniquement pendant la période définie."})]}),o.jsxs("div",{className:"mlCard",children:[o.jsxs("div",{className:"mlCardHeader",children:[o.jsx("h2",{className:"mlSectionTitle",children:"Nouveau check-in client"}),t&&o.jsxs("select",{className:"mlSelectModal",value:x,onChange:X=>g(X.target.value),children:[o.jsx("option",{value:ti,children:"Tous les hôtels"}),s.map(X=>o.jsx("option",{value:X.id,children:X.name},X.id))]})]}),o.jsxs("div",{className:"mlCardBody",children:[x===ti&&o.jsx("div",{className:"mlErrorBox",children:"Vue globale active : sélectionnez un hôtel précis pour enregistrer un check-in."}),o.jsxs("div",{className:"mlFormGrid",children:[o.jsxs("div",{className:"mlField",children:[o.jsxs("label",{htmlFor:"clientName",children:["Nom du client ",o.jsx("span",{className:"required",children:"*"})]}),o.jsx("p",{className:"mlFieldHelp",children:"Prénom et nom tel qu'indiqué sur la réservation."}),o.jsx("input",{id:"clientName",type:"text",className:"mlInput",placeholder:"Ex : Felix TANZI",value:M,onChange:X=>E(X.target.value),disabled:m||!Ae})]}),o.jsxs("div",{className:"mlField",children:[o.jsxs("label",{htmlFor:"roomText",children:["Numéro de chambre ",o.jsx("span",{className:"required",children:"*"})]}),o.jsx("p",{className:"mlFieldHelp",children:"Tapez le numéro directement, ou sélectionnez dans la liste."}),o.jsxs("div",{className:"mlRoomInputWrapper",children:[o.jsx("input",{id:"roomText",type:"text",list:"roomSuggestions",className:`mlInput ${$?"mlInputValid":""}`,placeholder:"Ex : 101",value:A,onChange:X=>V(X.target.value),disabled:m||!Ae,autoComplete:"off"}),A&&!W&&o.jsx("span",{className:"mlInputHint mlInputHintOk",children:"Nouvelle chambre: elle sera créée automatiquement"}),W&&o.jsx("span",{className:"mlInputHint mlInputHintOk",children:"✓ Chambre trouvée"}),o.jsx("datalist",{id:"roomSuggestions",children:Q.map(X=>o.jsx("option",{value:X.name||X.type,children:X.type},X.id))})]}),o.jsxs("select",{className:"mlSelect",value:S,onChange:X=>k(X.target.value),disabled:m||!Ae,children:[o.jsx("option",{value:"",children:"— Parcourir les chambres —"}),Q.map(X=>o.jsxs("option",{value:X.id,children:[X.name||X.type,X.type&&X.name?` — ${X.type}`:"",X.floor!=null?` (Étage ${X.floor})`:""]},X.id))]})]}),o.jsxs("div",{className:"mlField",children:[o.jsxs("label",{htmlFor:"checkIn",children:["Date & heure d'entrée ",o.jsx("span",{className:"required",children:"*"})]}),o.jsx("p",{className:"mlFieldHelp",children:"Début d'accès à internet pour ce client."}),o.jsx("input",{id:"checkIn",type:"datetime-local",className:"mlInput",value:T,min:Lx(),onChange:X=>N(X.target.value),disabled:m||!Ae})]}),o.jsxs("div",{className:"mlField",children:[o.jsxs("label",{htmlFor:"checkOut",children:["Date & heure de sortie ",o.jsx("span",{className:"required",children:"*"})]}),o.jsx("p",{className:"mlFieldHelp",children:"Fin d'accès à internet pour ce client."}),o.jsx("input",{id:"checkOut",type:"datetime-local",className:"mlInput",value:D,min:T||Lx(),onChange:X=>L(X.target.value),disabled:m||!Ae}),le!=="—"&&o.jsxs("span",{className:"mlDurationBadge",children:["Durée du séjour : ",le]})]})]}),o.jsxs("div",{className:"mlActions",children:[o.jsx("button",{className:"mlBtn mlBtnSecondary",onClick:B,disabled:m,children:"Annuler"}),o.jsx("button",{className:"mlBtn mlBtnPrimary",onClick:se,disabled:m||!Ae||!M.trim()||!$||!T||!D,children:m?"Enregistrement…":"Valider le check-in"})]}),O&&o.jsxs("div",{className:"mlDurationBadge",children:["Code Wi-Fi à remettre au client : ",o.jsx("strong",{children:O})]})]})]}),o.jsxs("div",{className:"mlTableCard",children:[o.jsxs("div",{className:"mlTableHeader",children:[o.jsxs("div",{children:[o.jsx("h2",{className:"mlSectionTitle",children:"Check-ins enregistrés"}),o.jsxs("p",{className:"mlTableCount",children:[Te.length," client",Te.length!==1?"s":""," affiché",Te.length!==1?"s":""]})]}),o.jsx("input",{type:"text",className:"mlSearch",placeholder:"Rechercher un client, une chambre, une IP…",value:U,onChange:X=>Y(X.target.value)})]}),o.jsx("div",{className:"mlTableWrapper",children:o.jsxs("table",{className:"mlTable",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Client"}),o.jsx("th",{children:"N° Chambre"}),o.jsx("th",{children:"Type"}),o.jsx("th",{children:"Accès"}),o.jsx("th",{children:"Code Wi-Fi"}),o.jsx("th",{children:"Entrée"}),o.jsx("th",{children:"Sortie"}),o.jsx("th",{children:"Durée"}),o.jsx("th",{children:"IP / MAC"}),o.jsx("th",{children:"Créé le"}),o.jsx("th",{children:"Actions"})]})}),o.jsx("tbody",{children:Te.length===0?o.jsx("tr",{children:o.jsx("td",{colSpan:11,className:"mlEmptyRow",children:"Aucun check-in enregistré pour le moment."})}):Te.map(X=>{var fe,we,Oe;const me=zM(X.startedAt,X.endedAt);return o.jsxs("tr",{children:[o.jsx("td",{className:"mlCellBold",children:X.clientName||"—"}),o.jsx("td",{children:((fe=X.room)==null?void 0:fe.name)||"—"}),o.jsx("td",{children:((we=X.room)==null?void 0:we.type)||"—"}),o.jsx("td",{children:me.css?o.jsx("span",{className:`mlBadge mlBadge${me.css}`,children:me.label}):"—"}),o.jsx("td",{className:"mlCellMono",children:((Oe=X.guestPass)==null?void 0:Oe.code)||"—"}),o.jsx("td",{className:"mlCellDate",children:lh(X.startedAt)}),o.jsx("td",{className:"mlCellDate",children:lh(X.endedAt)}),o.jsx("td",{className:"mlCellDuration",children:df(X.startedAt,X.endedAt)}),o.jsxs("td",{className:"mlCellMono",children:[X.ipAddress&&o.jsx("span",{className:"mlIpLine",children:X.ipAddress}),X.macAddress&&o.jsx("span",{className:"mlMacLine",children:X.macAddress}),!X.ipAddress&&!X.macAddress&&"—"]}),o.jsx("td",{className:"mlCellDate",children:lh(X.createdAt)}),o.jsx("td",{children:o.jsxs("div",{className:"mlActionBtns",children:[o.jsx("button",{className:"mlActionBtn mlActionBtnEdit",title:"Modifier",onClick:()=>ee(X),children:"✏️"}),!e&&o.jsx("button",{className:"mlActionBtn mlActionBtnDelete",title:"Supprimer",onClick:()=>Fe(X.id),children:"🗑️"})]})})]},X.id)})})]})})]})]}),H&&o.jsx(HM,{session:H,rooms:c,onClose:()=>ee(null),onSave:re})]})}function VM(){const[i]=j.useState([]),[e]=j.useState([]),[t]=j.useState([{id:9,name:"Hilton Free Websites",type:"whitelist",hostnames:["hilton.com","hiltonapi.com"]},{id:13,name:"Global",type:"blacklist",hostnames:["www.guestek.com"]}]),s=()=>{console.log("Add Free Website")},a=()=>{console.log("Add Blacklisted Website")};return o.jsx(Tr,{activePage:"LOGINS",activeSubPage:"Web Site Manager",children:o.jsxs("div",{className:"websitesManagerPage",children:[o.jsxs("div",{className:"pageHeader",children:[o.jsx("h1",{className:"pageTitle",children:"Websites Manager"}),o.jsx("p",{className:"pageSubtitle",children:"Add, modify and remove free websites and blacklisted websites."})]}),o.jsxs("section",{className:"websiteSection",children:[o.jsxs("div",{className:"sectionHeader",children:[o.jsx("h2",{className:"sectionTitle",children:"Free Websites"}),o.jsx("button",{className:"btn btnPrimary",onClick:s,children:"Add Free Website"})]}),o.jsx("div",{className:"tableWrapper",children:o.jsxs("table",{className:"websiteTable",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Name"}),o.jsx("th",{children:"Hostname"}),o.jsx("th",{children:"URL"}),o.jsx("th",{children:"Display"}),o.jsx("th",{children:"Order"}),o.jsx("th",{children:"Comments"}),o.jsx("th",{children:"Options"})]})}),o.jsx("tbody",{children:i.length===0?o.jsx("tr",{children:o.jsx("td",{colSpan:"7",className:"emptyState",children:'No free websites configured. Click "Add Free Website" to get started.'})}):i.map(c=>o.jsxs("tr",{children:[o.jsx("td",{children:c.name}),o.jsx("td",{children:c.hostname}),o.jsx("td",{children:c.url}),o.jsx("td",{children:c.display}),o.jsx("td",{children:c.order}),o.jsx("td",{children:c.comments}),o.jsxs("td",{className:"optionsCell",children:[o.jsx("button",{className:"optionBtn",children:"Edit"}),o.jsx("button",{className:"optionBtn danger",children:"Delete"})]})]},c.id))})]})})]}),o.jsxs("section",{className:"websiteSection",children:[o.jsxs("div",{className:"sectionHeader",children:[o.jsx("h2",{className:"sectionTitle",children:"Blacklisted Websites"}),o.jsx("button",{className:"btn btnDanger",onClick:a,children:"Add Blacklisted Website"})]}),o.jsx("div",{className:"tableWrapper",children:o.jsxs("table",{className:"websiteTable",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Name"}),o.jsx("th",{children:"Hostname"}),o.jsx("th",{children:"Comments"}),o.jsx("th",{children:"Options"})]})}),o.jsx("tbody",{children:e.length===0?o.jsx("tr",{children:o.jsx("td",{colSpan:"4",className:"emptyState",children:"No blacklisted websites configured."})}):e.map(c=>o.jsxs("tr",{children:[o.jsx("td",{children:c.name}),o.jsx("td",{children:c.hostname}),o.jsx("td",{children:c.comments}),o.jsxs("td",{className:"optionsCell",children:[o.jsx("button",{className:"optionBtn",children:"Edit"}),o.jsx("button",{className:"optionBtn danger",children:"Delete"})]})]},c.id))})]})})]}),o.jsxs("section",{className:"globalRulesSection",children:[o.jsxs("div",{className:"rulesHeader",children:[o.jsx("h2",{className:"sectionTitle",children:"Global Rules"}),o.jsxs("p",{className:"rulesDescription",children:["Websites whitelisted ",o.jsx("span",{className:"green",children:"(green)"})," and blacklisted"," ",o.jsx("span",{className:"red",children:"(red)"})," for this client through Global Website Manager."]})]}),o.jsxs("div",{className:"rulesGrid",children:[o.jsxs("div",{className:"rulesColumn",children:[o.jsx("h3",{className:"columnTitle",children:"Website List"}),o.jsx("div",{className:"rulesList",children:t.map(c=>o.jsxs("div",{className:`ruleItem ${c.type==="whitelist"?"whitelist":"blacklist"}`,children:["List ID: ",c.id,", List Name: ",c.name]},c.id))})]}),o.jsxs("div",{className:"rulesColumn",children:[o.jsx("h3",{className:"columnTitle",children:"Hostname"}),o.jsx("div",{className:"rulesList",children:t.map(c=>o.jsx("div",{className:"hostnamesList",children:c.hostnames.map((u,h)=>o.jsx("div",{className:`hostnameItem ${c.type==="whitelist"?"whitelist":"blacklist"}`,children:u.startsWith("*")?u:`* ${u}`},h))},c.id))})]})]})]})]})})}function WM(){const[i,e]=j.useState([]),[t,s]=j.useState(""),[a,c]=j.useState({uploadClearAddress:1500,downloadClearAddress:1500,uploadGuestPass:1500,downloadGuestPass:1500,maxPassDuration:180,maxCountPass:600,outageModeEnabled:!1}),[u,h]=j.useState(!1);j.useEffect(()=>{st.listHotels().then(async x=>{var E;e(x);const g=((E=x[0])==null?void 0:E.id)||"";if(s(g),!g)return;const M=await st.getGuestConfig(g);c({uploadClearAddress:M.uploadClearAddressKbps,downloadClearAddress:M.downloadClearAddressKbps,uploadGuestPass:M.uploadGuestPassKbps,downloadGuestPass:M.downloadGuestPassKbps,maxPassDuration:M.maxPassDurationDays,maxCountPass:M.maxCountPass,outageModeEnabled:M.outageModeEnabled})}).catch(x=>alert(x.message||"Impossible de charger la configuration"))},[]);const f=(x,g)=>{c(M=>({...M,[x]:g})),h(!0)},m=async()=>{if(!t){alert("Sélectionnez un hôtel");return}try{await st.upsertGuestConfig({hotelId:t,uploadClearAddressKbps:Number(a.uploadClearAddress),downloadClearAddressKbps:Number(a.downloadClearAddress),uploadGuestPassKbps:Number(a.uploadGuestPass),downloadGuestPassKbps:Number(a.downloadGuestPass),maxPassDurationDays:Number(a.maxPassDuration),maxCountPass:Number(a.maxCountPass),outageModeEnabled:!!a.outageModeEnabled}),alert("Configuration updated successfully!"),h(!1)}catch(x){alert(x.message||"Failed to update configuration")}},v=()=>{confirm("Are you sure you want to restore default settings?")&&(c({uploadClearAddress:1500,downloadClearAddress:1500,uploadGuestPass:1500,downloadGuestPass:1500,maxPassDuration:180,maxCountPass:600,outageModeEnabled:!1}),h(!0))};return o.jsx(Tr,{activePage:"LOGINS",activeSubPage:"Config Code",children:o.jsxs("div",{className:"configCodePage",children:[o.jsxs("div",{className:"pageHeader",children:[o.jsx("h1",{className:"pageTitle",children:"Guest Global Configuration"}),o.jsx("p",{className:"pageSubtitle",children:"General guest configuration settings for the OVI client."})]}),o.jsxs("div",{className:"warningBanner",children:[o.jsx("strong",{children:"⚠️ Important:"})," Maximum value for Max Count Guest Pass Creation is 1000."]}),o.jsxs("div",{className:"configCard",children:[o.jsxs("div",{className:"configSection",children:[o.jsx("h3",{className:"sectionTitle",children:"Hotel Selection"}),o.jsxs("div",{className:"configField",children:[o.jsx("label",{htmlFor:"hotelId",children:"Hotel"}),o.jsxs("select",{id:"hotelId",value:t,onChange:async x=>{const g=x.target.value;if(s(g),!!g)try{const M=await st.getGuestConfig(g);c({uploadClearAddress:M.uploadClearAddressKbps,downloadClearAddress:M.downloadClearAddressKbps,uploadGuestPass:M.uploadGuestPassKbps,downloadGuestPass:M.downloadGuestPassKbps,maxPassDuration:M.maxPassDurationDays,maxCountPass:M.maxCountPass,outageModeEnabled:M.outageModeEnabled}),h(!1)}catch(M){alert(M.message||"Impossible de charger la configuration")}},children:[o.jsx("option",{value:"",children:"Select hotel"}),i.map(x=>o.jsx("option",{value:x.id,children:x.name},x.id))]})]})]}),o.jsxs("div",{className:"configSection",children:[o.jsx("h3",{className:"sectionTitle",children:"General Info"}),o.jsxs("div",{className:"configGrid",children:[o.jsxs("div",{className:"configField",children:[o.jsx("label",{htmlFor:"uploadClearAddress",children:"guestConfig.defaultUploadClearAddress"}),o.jsx("p",{className:"fieldDescription",children:"Clear Address Upload Default"}),o.jsx("input",{id:"uploadClearAddress",type:"number",value:a.uploadClearAddress,onChange:x=>f("uploadClearAddress",Number(x.target.value)),min:"0",max:"15000"})]}),o.jsxs("div",{className:"configField",children:[o.jsx("label",{htmlFor:"downloadClearAddress",children:"guestConfig.defaultDownloadClearAddress"}),o.jsx("p",{className:"fieldDescription",children:"Clear Address Download Default"}),o.jsx("input",{id:"downloadClearAddress",type:"number",value:a.downloadClearAddress,onChange:x=>f("downloadClearAddress",Number(x.target.value)),min:"0",max:"15000"})]}),o.jsxs("div",{className:"configField",children:[o.jsx("label",{htmlFor:"uploadGuestPass",children:"guestConfig.defaultUploadGuestPass"}),o.jsx("p",{className:"fieldDescription",children:"Guest Pass Upload Default"}),o.jsx("input",{id:"uploadGuestPass",type:"number",value:a.uploadGuestPass,onChange:x=>f("uploadGuestPass",Number(x.target.value)),min:"0",max:"15000"})]}),o.jsxs("div",{className:"configField",children:[o.jsx("label",{htmlFor:"downloadGuestPass",children:"guestConfig.defaultDownloadGuestPass"}),o.jsx("p",{className:"fieldDescription",children:"Guest Pass Download Default"}),o.jsx("input",{id:"downloadGuestPass",type:"number",value:a.downloadGuestPass,onChange:x=>f("downloadGuestPass",Number(x.target.value)),min:"0",max:"15000"})]}),o.jsxs("div",{className:"configField",children:[o.jsx("label",{htmlFor:"maxPassDuration",children:"guestConfig.maxPassDuration"}),o.jsx("p",{className:"fieldDescription",children:"Maximum passcode duration in days (max 1,365 days)"}),o.jsx("input",{id:"maxPassDuration",type:"number",value:a.maxPassDuration,onChange:x=>f("maxPassDuration",Number(x.target.value)),min:"1",max:"1365"})]}),o.jsxs("div",{className:"configField",children:[o.jsx("label",{htmlFor:"maxCountPass",children:"guestConfig.maxCountPass"}),o.jsx("p",{className:"fieldDescription",children:"Max Count Passcode Creation"}),o.jsx("input",{id:"maxCountPass",type:"number",value:a.maxCountPass,onChange:x=>f("maxCountPass",Number(x.target.value)),min:"1",max:"1000"})]}),o.jsxs("div",{className:"configField radioField",children:[o.jsx("label",{children:"servletConfig.outageModeEnabled"}),o.jsx("p",{className:"fieldDescription",children:"Activate outage mode for 3rd Party Login Pages (MPA, Elevance, Generic API)"}),o.jsxs("div",{className:"radioGroup",children:[o.jsxs("label",{className:"radioLabel",children:[o.jsx("input",{type:"radio",name:"outageMode",checked:a.outageModeEnabled===!0,onChange:()=>f("outageModeEnabled",!0)}),o.jsx("span",{children:"True"})]}),o.jsxs("label",{className:"radioLabel",children:[o.jsx("input",{type:"radio",name:"outageMode",checked:a.outageModeEnabled===!1,onChange:()=>f("outageModeEnabled",!1)}),o.jsx("span",{children:"False"})]})]})]})]})]}),o.jsxs("div",{className:"configActions",children:[o.jsx("button",{className:"btn btnPrimary",onClick:m,disabled:!u,children:"Modify"}),o.jsx("button",{className:"btn btnSecondary",onClick:v,children:"Restore Defaults"})]})]})]})})}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XM=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),$M=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase()),Dx=i=>{const e=$M(i);return e.charAt(0).toUpperCase()+e.slice(1)},_0=(...i)=>i.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var qM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YM=j.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:a="",children:c,iconNode:u,...h},f)=>j.createElement("svg",{ref:f,...qM,width:e,height:e,stroke:i,strokeWidth:s?Number(t)*24/Number(e):t,className:_0("lucide",a),...h},[...u.map(([m,v])=>j.createElement(m,v)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $t=(i,e)=>{const t=j.forwardRef(({className:s,...a},c)=>j.createElement(YM,{ref:c,iconNode:e,className:_0(`lucide-${XM(Dx(i))}`,`lucide-${i}`,s),...a}));return t.displayName=Dx(i),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KM=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],ZM=$t("activity",KM);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QM=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],Ix=$t("bell",QM);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JM=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6",key:"5bb3ad"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8",key:"tap9e0"}]],eE=$t("bell-ring",JM);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tE=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]],hf=$t("building-2",tE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nE=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],ch=$t("chevron-right",nE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iE=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],uh=$t("database",iE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rE=[["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"37hlfg"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"8",cy:"16",r:"6",key:"10v15b"}],["path",{d:"M9.5 17.5 8 16.25V14",key:"1o80t2"}]],Ux=$t("file-clock",rE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sE=[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]],aE=$t("gauge",sE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oE=[["path",{d:"M10 22v-6.57",key:"1wmca3"}],["path",{d:"M12 11h.01",key:"z322tv"}],["path",{d:"M12 7h.01",key:"1ivr5q"}],["path",{d:"M14 15.43V22",key:"1q2vjd"}],["path",{d:"M15 16a5 5 0 0 0-6 0",key:"o9wqvi"}],["path",{d:"M16 11h.01",key:"xkw8gn"}],["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 7h.01",key:"1vti4s"}],["rect",{x:"4",y:"2",width:"16",height:"20",rx:"2",key:"1uxh74"}]],ff=$t("hotel",oE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lE=[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]],cE=$t("key-round",lE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uE=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],dE=$t("layout-dashboard",uE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hE=[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]],fE=$t("lock-keyhole",hE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pE=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],mE=$t("log-out",pE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gE=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],Ho=$t("network",gE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xE=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],vE=$t("pencil",xE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _E=[["path",{d:"M12 22v-5",key:"1ega77"}],["path",{d:"M9 8V2",key:"14iosj"}],["path",{d:"M15 8V2",key:"18g5xt"}],["path",{d:"M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z",key:"osxo6l"}]],dh=$t("plug",_E);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yE=[["path",{d:"M4.9 16.1C1 12.2 1 5.8 4.9 1.9",key:"s0qx1y"}],["path",{d:"M7.8 4.7a6.14 6.14 0 0 0-.8 7.5",key:"1idnkw"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}],["path",{d:"M16.2 4.8c2 2 2.26 5.11.8 7.47",key:"ojru2q"}],["path",{d:"M19.1 1.9a9.96 9.96 0 0 1 0 14.1",key:"rhi7fg"}],["path",{d:"M9.5 18h5",key:"mfy3pd"}],["path",{d:"m8 22 4-11 4 11",key:"25yftu"}]],Fx=$t("radio-tower",yE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SE=[["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6.01 18H6",key:"19vcac"}],["path",{d:"M10.01 18H10",key:"uamcmx"}],["path",{d:"M15 10v4",key:"qjz1xs"}],["path",{d:"M17.84 7.17a4 4 0 0 0-5.66 0",key:"1rif40"}],["path",{d:"M20.66 4.34a8 8 0 0 0-11.31 0",key:"6a5xfq"}]],Ox=$t("router",SE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ME=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],hh=$t("save",ME);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EE=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],bE=$t("search",EE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TE=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],wE=$t("server",TE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CE=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],kx=$t("settings",CE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AE=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Gc=$t("shield-check",AE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RE=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],NE=$t("trash-2",RE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PE=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],fh=$t("users",PE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LE=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],ko=$t("wifi",LE);function DE(i){const e=i.reduce((a,c)=>a+c.value,0);if(e===0)return{background:"conic-gradient(#dbe7f5 0deg 360deg)",total:0};let t=0;return{background:`conic-gradient(${i.map(a=>{const c=a.value/e*360,u=`${a.color} ${t}deg ${t+c}deg`;return t+=c,u}).join(", ")})`,total:e}}function IE(i){const e=`${i.model||""} ${i.serialNumber||""}`.toLowerCase();return e.includes("switch")?"Switch":e.includes("access")||e.includes("ap-")||e.includes("wifi")?"Access Point":e.includes("router")||e.includes("gateway")?"Gateway":"Autre equipement"}function UE(i){if(!i)return"N/A";const e=new Date(i),t=Date.now()-e.getTime(),s=Math.max(0,Math.floor(t/6e4));if(s<1)return"A l’instant";if(s<60)return`Il y a ${s} min`;const a=Math.floor(s/60);return a<24?`Il y a ${a} h`:`Il y a ${Math.floor(a/24)} j`}function FE(){const i=new Date,e=new Date;e.setDate(i.getDate()-6);const t=s=>s.toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric"});return`${t(e)} - ${t(i)}`}function ph({title:i,items:e,subtitle:t}){const{background:s,total:a}=j.useMemo(()=>DE(e),[e]);return o.jsxs("section",{className:"dashboardPanel chartPanel",children:[o.jsxs("div",{className:"panelHeader",children:[o.jsxs("div",{children:[o.jsx("h3",{children:i}),t&&o.jsx("p",{children:t})]}),o.jsxs("span",{children:[a," total"]})]}),o.jsxs("div",{className:"chartPanelBody",children:[o.jsxs("div",{className:"donutWrap",children:[o.jsx("div",{className:"donutChart",style:{background:s}}),o.jsxs("div",{className:"donutCenter",children:[o.jsx("strong",{children:a}),o.jsx("span",{children:"Total"})]})]}),o.jsx("ul",{className:"chartLegend",children:e.map(c=>o.jsxs("li",{children:[o.jsx("span",{className:"legendDot",style:{backgroundColor:c.color}}),o.jsx("span",{className:"legendText",children:c.label}),o.jsx("strong",{children:c.value})]},c.label))})]})]})}function OE(){var y,S;const i=Ds(),e=Ti.getStoredUser(),t=ka(e),[s,a]=j.useState([]),[c,u]=j.useState(""),[h,f]=j.useState(null),[m,v]=j.useState(!0),x=async(b,T=s)=>{v(!0);const N=Ns(b),D=N?{hotelId:N}:void 0,[L,O,w,U]=await Promise.all([st.getDashboardOverview(D),st.listDevices(D),st.listLoginSessions(D),st.listWifiConfigs(D)]),Y=N?T.filter(H=>H.id===N):T;f({overview:L,devices:O,sessions:w,hotels:Y,wifiConfigs:U}),v(!1)};j.useEffect(()=>{let b=!0;return st.listHotels().then(async T=>{if(!b)return;a(T);const N=Qo(e,T);u(N),await x(N,T)}).catch(T=>{alert(T.message||"Impossible de charger le dashboard")}).finally(()=>{b&&v(!1)}),()=>{b=!1}},[]),j.useEffect(()=>{!c||s.length===0||x(c).catch(b=>{v(!1),alert(b.message||"Impossible de charger le dashboard")})},[c]);const g=j.useMemo(()=>{var $,le;if(!h)return null;const{overview:b,devices:T,sessions:N,hotels:D,wifiConfigs:L}=h,O=T.reduce((se,B)=>{const re=String(B.status||"OFFLINE");return se[re]=(se[re]||0)+1,se},{ONLINE:0,OFFLINE:0,UNSTABLE:0}),w=T.reduce((se,B)=>{const re=B.zone||"Non assigne";return se[re]=(se[re]||0)+1,se},{}),U=N.reduce((se,B)=>{var Fe;const re=(Fe=B.guestPass)!=null&&Fe.code?"Guest Pass":B.type||"Autre";return se[re]=(se[re]||0)+1,se},{}),Y=T.reduce((se,B)=>{const re=IE(B);return se[re]=(se[re]||0)+1,se},{}),H=L.filter(se=>se.status==="ACTIVE").length,ee=D.length>0?Math.round(H/D.length*100):0,G=b.activeSessions||N.filter(se=>se.status==="ONLINE").length,Q=b.rooms||0,V=Q>0?Math.min(100,Math.round(G/Q*100)):0,k=(($=b.recentAlerts)==null?void 0:$.length)||0,W=[{label:"Chambres",value:b.rooms||0,tone:"blue",helper:`${V}% occupation reseau`,icon:ff},{label:"Equipements",value:T.length,tone:"slate",helper:`${O.ONLINE||0} en ligne`,icon:Ox},{label:"Switches actifs",value:Y.Switch||0,tone:"green",helper:"Infrastructure filaire",icon:Ho},{label:"Access Points",value:Y["Access Point"]||0,tone:"gold",helper:"Couverture Wi-Fi",icon:Fx}];return{overview:b,devices:T,sessions:N,hotels:D,wifiConfigs:L,statusCounts:O,zoneCounts:w,sessionTypes:U,activeWifiConfigs:H,wifiCoverage:ee,activeSessions:G,roomUsage:V,openAlerts:k,overviewCards:W,activeHotelsLabel:c===ti?"Vue multi-sites":((le=D[0])==null?void 0:le.name)||"Hotel MboaLink"}},[h,c]),M=j.useMemo(()=>g?[{label:"Online",value:g.statusCounts.ONLINE||0,color:"#2563eb"},{label:"Offline",value:g.statusCounts.OFFLINE||0,color:"#64748b"},{label:"Instable",value:g.statusCounts.UNSTABLE||0,color:"#f2c300"}]:[],[g]),E=j.useMemo(()=>{if(!g)return[];const b=["#2563eb","#0f766e","#16a34a","#f2c300","#dc2626","#7c3aed"];return Object.entries(g.zoneCounts).slice(0,6).map(([T,N],D)=>({label:T,value:Number(N),color:b[D%b.length]}))},[g]),A=j.useMemo(()=>{if(!g)return[];const b=["#2563eb","#7c3aed","#f2c300","#16a34a"];return Object.entries(g.sessionTypes).slice(0,4).map(([T,N],D)=>({label:T,value:Number(N),color:b[D%b.length]}))},[g]);return o.jsx(Tr,{activePage:"DASHBOARD",activeSubPage:"",children:o.jsxs("div",{className:"dashboardPage dashboardShell",children:[o.jsxs("div",{className:"dashboardTopbar",children:[o.jsxs("div",{className:"dashboardBrandBlock",children:[o.jsx("span",{className:"dashboardBrandName",children:"MboaLink"}),o.jsxs("div",{className:"dashboardTabs",children:[o.jsx("button",{type:"button",className:"dashboardTab active",children:"Dashboard"}),o.jsx("button",{type:"button",className:"dashboardTab",children:"Operations"})]})]}),o.jsxs("div",{className:"dashboardMeta",children:[t&&o.jsxs("select",{className:"dashboardScopeSelect",value:c,onChange:b=>u(b.target.value),children:[o.jsx("option",{value:ti,children:"Tous les hôtels"}),s.map(b=>o.jsx("option",{value:b.id,children:b.name},b.id))]}),o.jsxs("span",{className:"dashboardLiveBadge",children:[o.jsx("span",{}),"Live"]}),o.jsx("span",{className:"dashboardPeriod",children:FE()})]})]}),o.jsxs("div",{className:"dashboardHero",children:[o.jsxs("div",{children:[o.jsx("p",{className:"dashboardEyebrow",children:"Vue generale"}),o.jsx("h1",{className:"dashboardTitle",children:(g==null?void 0:g.activeHotelsLabel)||"MboaLink Dashboard"}),o.jsx("p",{className:"dashboardSubtitle",children:"Supervision reseau, activite client et etat operationnel des hotels depuis un espace clair et exploitable."})]}),o.jsxs("div",{className:"dashboardHeroActions",children:[o.jsxs("button",{type:"button",className:"heroButton secondary",onClick:()=>i(lt.public.networkMap),children:[o.jsx(Ho,{size:16}),"Network Map"]}),o.jsxs("button",{type:"button",className:"heroButton success",children:[o.jsx(eE,{size:16}),"Alertes actives"]})]})]}),o.jsxs("div",{className:"serviceStatusRow",children:[o.jsxs("div",{className:"servicePill success",children:[o.jsx("span",{className:"serviceIcon",children:o.jsx(wE,{size:18})}),o.jsxs("div",{children:[o.jsx("strong",{children:"OVI Server"}),o.jsx("small",{children:g?"Disponible":"Chargement"})]})]}),o.jsxs("div",{className:`servicePill ${g&&g.activeWifiConfigs>0?"warning":"neutral"}`,children:[o.jsx("span",{className:"serviceIcon",children:o.jsx(ko,{size:18})}),o.jsxs("div",{children:[o.jsx("strong",{children:"Captive Portal"}),o.jsx("small",{children:g?`${g.activeWifiConfigs} config(s) active(s)`:"Chargement"})]})]}),o.jsxs("div",{className:`servicePill ${g&&g.statusCounts.ONLINE>0?"info":"neutral"}`,children:[o.jsx("span",{className:"serviceIcon",children:o.jsx(ZM,{size:18})}),o.jsxs("div",{children:[o.jsx("strong",{children:"Internet Uplink"}),o.jsx("small",{children:g?`${g.statusCounts.ONLINE} equipements en ligne`:"Chargement"})]})]})]}),m&&o.jsx("p",{className:"dashboardLoading",children:"Chargement du dashboard..."}),g&&o.jsxs("div",{className:"dashboardContent",children:[o.jsx("aside",{className:"kpiColumn",children:g.overviewCards.map(b=>o.jsxs("article",{className:`kpiTile ${b.tone}`,children:[o.jsxs("div",{className:"kpiTileTop",children:[o.jsx("span",{children:b.label}),o.jsx(b.icon,{size:18})]}),o.jsx("strong",{children:b.value}),o.jsx("small",{children:b.helper})]},b.label))}),o.jsxs("div",{className:"dashboardMain",children:[o.jsxs("div",{className:"dashboardChartsRow",children:[o.jsx(ph,{title:"Devices by Status",subtitle:"Disponibilite reseau",items:M}),o.jsx(ph,{title:"Devices by Zone",subtitle:"Repartition par zone",items:E}),o.jsx(ph,{title:"Sessions by Type",subtitle:"Origine des connexions",items:A}),o.jsxs("section",{className:"dashboardPanel compactStatsPanel",children:[o.jsxs("article",{className:"compactStat blue",children:[o.jsx("div",{className:"compactStatIcon",children:o.jsx(aE,{size:18})}),o.jsx("span",{children:"Guest Logins"}),o.jsx("strong",{children:g.sessions.length}),o.jsx("small",{children:"sur la periode"})]}),o.jsxs("article",{className:"compactStat violet",children:[o.jsx("div",{className:"compactStatIcon",children:o.jsx(Gc,{size:18})}),o.jsx("span",{children:"WiFi Coverage"}),o.jsxs("strong",{children:[g.wifiCoverage,"%"]}),o.jsxs("small",{children:[g.activeWifiConfigs," / ",g.hotels.length||0," hotels configures"]})]})]})]}),o.jsxs("div",{className:"dashboardBottomRow",children:[o.jsxs("section",{className:"dashboardPanel metricsPanel",children:[o.jsxs("div",{className:"panelHeader",children:[o.jsxs("div",{children:[o.jsx("h3",{children:"Infrastructure Snapshot"}),o.jsx("p",{children:"Indicateurs de sante operationnelle"})]}),o.jsx("span",{children:"Temps reel logique"})]}),o.jsxs("div",{className:"metricProgressGrid",children:[o.jsxs("div",{className:"metricBlock",children:[o.jsxs("div",{className:"metricHeader",children:[o.jsx("span",{children:"Devices online"}),o.jsxs("strong",{children:[g.statusCounts.ONLINE,"/",g.devices.length]})]}),o.jsx("div",{className:"metricBar",children:o.jsx("div",{className:"metricFill blue",style:{width:`${g.devices.length?g.statusCounts.ONLINE/g.devices.length*100:0}%`}})})]}),o.jsxs("div",{className:"metricBlock",children:[o.jsxs("div",{className:"metricHeader",children:[o.jsx("span",{children:"Occupation reseau"}),o.jsxs("strong",{children:[g.roomUsage,"%"]})]}),o.jsx("div",{className:"metricBar",children:o.jsx("div",{className:"metricFill violet",style:{width:`${g.roomUsage}%`}})})]}),o.jsxs("div",{className:"metricBlock",children:[o.jsxs("div",{className:"metricHeader",children:[o.jsx("span",{children:"Configurations WiFi actives"}),o.jsxs("strong",{children:[g.wifiCoverage,"%"]})]}),o.jsx("div",{className:"metricBar",children:o.jsx("div",{className:"metricFill green",style:{width:`${g.wifiCoverage}%`}})})]}),o.jsxs("div",{className:"metricBlock",children:[o.jsxs("div",{className:"metricHeader",children:[o.jsx("span",{children:"Alertes ouvertes"}),o.jsx("strong",{children:g.openAlerts})]}),o.jsx("div",{className:"metricBar",children:o.jsx("div",{className:"metricFill gold",style:{width:`${Math.min(100,g.openAlerts*10)}%`}})})]})]})]}),o.jsxs("section",{className:"dashboardPanel alertsPanel",children:[o.jsxs("div",{className:"panelHeader",children:[o.jsxs("div",{children:[o.jsx("h3",{children:"Recent Alerts"}),o.jsx("p",{children:"Evenements recents a suivre"})]}),o.jsxs("span",{children:[((y=g.overview.recentAlerts)==null?void 0:y.length)||0," evenement(s)"]})]}),(S=g.overview.recentAlerts)!=null&&S.length?o.jsx("ul",{className:"alertsList",children:g.overview.recentAlerts.map(b=>o.jsxs("li",{className:`alertItem ${String(b.severity||"MEDIUM").toLowerCase()}`,children:[o.jsxs("div",{className:"alertItemTop",children:[o.jsx("strong",{children:b.title}),o.jsx("span",{children:UE(b.createdAt)})]}),o.jsx("p",{children:b.message})]},b.id))}):o.jsxs("div",{className:"emptyStatePanel",children:[o.jsx("strong",{children:"Aucune alerte recente"}),o.jsx("p",{children:"Le dashboard n’a remonte aucun incident critique pour le moment."})]})]}),o.jsxs("section",{className:"dashboardPanel actionsPanel",children:[o.jsxs("div",{className:"panelHeader",children:[o.jsxs("div",{children:[o.jsx("h3",{children:"Actions"}),o.jsx("p",{children:"Acces rapides"})]}),o.jsx("span",{children:"Details"})]}),o.jsxs("button",{type:"button",className:"actionButton",onClick:()=>i("/device-manager/devices"),children:[o.jsx(Ox,{size:16}),"Switches",o.jsx(ch,{size:16})]}),o.jsxs("button",{type:"button",className:"actionButton",onClick:()=>i("/device-manager/devices"),children:[o.jsx(Fx,{size:16}),"Access Points",o.jsx(ch,{size:16})]}),o.jsxs("button",{type:"button",className:"actionButton secondary",onClick:()=>i("/hotel-manager/config-wifi"),children:[o.jsx(hf,{size:16}),"Config WiFi",o.jsx(ch,{size:16})]})]})]})]})]})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sp="184",Ca={ROTATE:0,DOLLY:1,PAN:2},Ta={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},kE=0,jx=1,jE=2,Vc=1,y0=2,jo=3,is=0,ni=1,_r=2,Ji=0,Aa=1,pf=2,Bx=3,zx=4,BE=5,ws=100,zE=101,HE=102,GE=103,VE=104,WE=200,XE=201,$E=202,qE=203,mf=204,gf=205,YE=206,KE=207,ZE=208,QE=209,JE=210,eb=211,tb=212,nb=213,ib=214,xf=0,vf=1,_f=2,Na=3,yf=4,Sf=5,Mf=6,Ef=7,S0=0,rb=1,sb=2,er=0,Mp=1,Ep=2,bp=3,hu=4,Tp=5,wp=6,Cp=7,M0=300,Ps=301,Pa=302,mh=303,gh=304,fu=306,bf=1e3,yr=1001,Tf=1002,Cn=1003,ab=1004,sc=1005,Un=1006,xh=1007,As=1008,di=1009,E0=1010,b0=1011,Wo=1012,Ap=1013,tr=1014,Zi=1015,hi=1016,Rp=1017,Np=1018,Xo=1020,T0=35902,w0=35899,C0=1021,A0=1022,ki=1023,br=1026,Rs=1027,R0=1028,Pp=1029,Ls=1030,Lp=1031,Dp=1033,Wc=33776,Xc=33777,$c=33778,qc=33779,wf=35840,Cf=35841,Af=35842,Rf=35843,Nf=36196,Pf=37492,Lf=37496,Df=37488,If=37489,eu=37490,Uf=37491,Ff=37808,Of=37809,kf=37810,jf=37811,Bf=37812,zf=37813,Hf=37814,Gf=37815,Vf=37816,Wf=37817,Xf=37818,$f=37819,qf=37820,Yf=37821,Kf=36492,Zf=36494,Qf=36495,Jf=36283,ep=36284,tu=36285,tp=36286,ob=3200,np=0,lb=1,es="",ui="srgb",nu="srgb-linear",iu="linear",kt="srgb",aa=7680,Hx=519,cb=512,ub=513,db=514,Ip=515,hb=516,fb=517,Up=518,pb=519,ip=35044,Gx="300 es",Qi=2e3,$o=2001;function mb(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ru(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gb(){const i=ru("canvas");return i.style.display="block",i}const Vx={};function su(...i){const e="THREE."+i.shift();console.log(e,...i)}function N0(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ft(...i){i=N0(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Dt(...i){i=N0(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function rp(...i){const e=i.join(" ");e in Vx||(Vx[e]=!0,ft(...i))}function xb(i,e,t){return new Promise(function(s,a){function c(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(c,t);break;default:s()}}setTimeout(c,t)})}const vb={[xf]:vf,[_f]:Mf,[yf]:Ef,[Na]:Sf,[vf]:xf,[Mf]:_f,[Ef]:yf,[Sf]:Na};class as{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){const s=this._listeners;if(s===void 0)return;const a=s[e];if(a!==void 0){const c=a.indexOf(t);c!==-1&&a.splice(c,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const s=t[e.type];if(s!==void 0){e.target=this;const a=s.slice(0);for(let c=0,u=a.length;c<u;c++)a[c].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yc=Math.PI/180,sp=180/Math.PI;function ns(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Ln[i&255]+Ln[i>>8&255]+Ln[i>>16&255]+Ln[i>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[t&63|128]+Ln[t>>8&255]+"-"+Ln[t>>16&255]+Ln[t>>24&255]+Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]).toLowerCase()}function Rt(i,e,t){return Math.max(e,Math.min(t,i))}function _b(i,e){return(i%e+e)%e}function vh(i,e,t){return(1-t)*i+t*e}function Ki(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ht(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const yb={DEG2RAD:Yc},Xp=class Xp{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,a=e.elements;return this.x=a[0]*t+a[3]*s+a[6],this.y=a[1]*t+a[4]*s+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Rt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Rt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),a=Math.sin(t),c=this.x-e.x,u=this.y-e.y;return this.x=c*s-u*a+e.x,this.y=c*a+u*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Xp.prototype.isVector2=!0;let nt=Xp;class rs{constructor(e=0,t=0,s=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=a}static slerpFlat(e,t,s,a,c,u,h){let f=s[a+0],m=s[a+1],v=s[a+2],x=s[a+3],g=c[u+0],M=c[u+1],E=c[u+2],A=c[u+3];if(x!==A||f!==g||m!==M||v!==E){let y=f*g+m*M+v*E+x*A;y<0&&(g=-g,M=-M,E=-E,A=-A,y=-y);let S=1-h;if(y<.9995){const b=Math.acos(y),T=Math.sin(b);S=Math.sin(S*b)/T,h=Math.sin(h*b)/T,f=f*S+g*h,m=m*S+M*h,v=v*S+E*h,x=x*S+A*h}else{f=f*S+g*h,m=m*S+M*h,v=v*S+E*h,x=x*S+A*h;const b=1/Math.sqrt(f*f+m*m+v*v+x*x);f*=b,m*=b,v*=b,x*=b}}e[t]=f,e[t+1]=m,e[t+2]=v,e[t+3]=x}static multiplyQuaternionsFlat(e,t,s,a,c,u){const h=s[a],f=s[a+1],m=s[a+2],v=s[a+3],x=c[u],g=c[u+1],M=c[u+2],E=c[u+3];return e[t]=h*E+v*x+f*M-m*g,e[t+1]=f*E+v*g+m*x-h*M,e[t+2]=m*E+v*M+h*g-f*x,e[t+3]=v*E-h*x-f*g-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,a){return this._x=e,this._y=t,this._z=s,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,a=e._y,c=e._z,u=e._order,h=Math.cos,f=Math.sin,m=h(s/2),v=h(a/2),x=h(c/2),g=f(s/2),M=f(a/2),E=f(c/2);switch(u){case"XYZ":this._x=g*v*x+m*M*E,this._y=m*M*x-g*v*E,this._z=m*v*E+g*M*x,this._w=m*v*x-g*M*E;break;case"YXZ":this._x=g*v*x+m*M*E,this._y=m*M*x-g*v*E,this._z=m*v*E-g*M*x,this._w=m*v*x+g*M*E;break;case"ZXY":this._x=g*v*x-m*M*E,this._y=m*M*x+g*v*E,this._z=m*v*E+g*M*x,this._w=m*v*x-g*M*E;break;case"ZYX":this._x=g*v*x-m*M*E,this._y=m*M*x+g*v*E,this._z=m*v*E-g*M*x,this._w=m*v*x+g*M*E;break;case"YZX":this._x=g*v*x+m*M*E,this._y=m*M*x+g*v*E,this._z=m*v*E-g*M*x,this._w=m*v*x-g*M*E;break;case"XZY":this._x=g*v*x-m*M*E,this._y=m*M*x-g*v*E,this._z=m*v*E+g*M*x,this._w=m*v*x+g*M*E;break;default:ft("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,a=Math.sin(s);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],a=t[4],c=t[8],u=t[1],h=t[5],f=t[9],m=t[2],v=t[6],x=t[10],g=s+h+x;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(v-f)*M,this._y=(c-m)*M,this._z=(u-a)*M}else if(s>h&&s>x){const M=2*Math.sqrt(1+s-h-x);this._w=(v-f)/M,this._x=.25*M,this._y=(a+u)/M,this._z=(c+m)/M}else if(h>x){const M=2*Math.sqrt(1+h-s-x);this._w=(c-m)/M,this._x=(a+u)/M,this._y=.25*M,this._z=(f+v)/M}else{const M=2*Math.sqrt(1+x-s-h);this._w=(u-a)/M,this._x=(c+m)/M,this._y=(f+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const a=Math.min(1,t/s);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,a=e._y,c=e._z,u=e._w,h=t._x,f=t._y,m=t._z,v=t._w;return this._x=s*v+u*h+a*m-c*f,this._y=a*v+u*f+c*h-s*m,this._z=c*v+u*m+s*f-a*h,this._w=u*v-s*h-a*f-c*m,this._onChangeCallback(),this}slerp(e,t){let s=e._x,a=e._y,c=e._z,u=e._w,h=this.dot(e);h<0&&(s=-s,a=-a,c=-c,u=-u,h=-h);let f=1-t;if(h<.9995){const m=Math.acos(h),v=Math.sin(m);f=Math.sin(f*m)/v,t=Math.sin(t*m)/v,this._x=this._x*f+s*t,this._y=this._y*f+a*t,this._z=this._z*f+c*t,this._w=this._w*f+u*t,this._onChangeCallback()}else this._x=this._x*f+s*t,this._y=this._y*f+a*t,this._z=this._z*f+c*t,this._w=this._w*f+u*t,this.normalize();return this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),a=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(a*Math.sin(e),a*Math.cos(e),c*Math.sin(t),c*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const $p=class $p{constructor(e=0,t=0,s=0){this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wx.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wx.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,a=this.z,c=e.elements;return this.x=c[0]*t+c[3]*s+c[6]*a,this.y=c[1]*t+c[4]*s+c[7]*a,this.z=c[2]*t+c[5]*s+c[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,c=e.elements,u=1/(c[3]*t+c[7]*s+c[11]*a+c[15]);return this.x=(c[0]*t+c[4]*s+c[8]*a+c[12])*u,this.y=(c[1]*t+c[5]*s+c[9]*a+c[13])*u,this.z=(c[2]*t+c[6]*s+c[10]*a+c[14])*u,this}applyQuaternion(e){const t=this.x,s=this.y,a=this.z,c=e.x,u=e.y,h=e.z,f=e.w,m=2*(u*a-h*s),v=2*(h*t-c*a),x=2*(c*s-u*t);return this.x=t+f*m+u*x-h*v,this.y=s+f*v+h*m-c*x,this.z=a+f*x+c*v-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,a=this.z,c=e.elements;return this.x=c[0]*t+c[4]*s+c[8]*a,this.y=c[1]*t+c[5]*s+c[9]*a,this.z=c[2]*t+c[6]*s+c[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this.z=Rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this.z=Rt(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Rt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,a=e.y,c=e.z,u=t.x,h=t.y,f=t.z;return this.x=a*f-c*h,this.y=c*u-s*f,this.z=s*h-a*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return _h.copy(this).projectOnVector(e),this.sub(_h)}reflect(e){return this.sub(_h.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Rt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,a=this.z-e.z;return t*t+s*s+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const a=Math.sin(t)*e;return this.x=a*Math.sin(s),this.y=Math.cos(t)*e,this.z=a*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};$p.prototype.isVector3=!0;let ne=$p;const _h=new ne,Wx=new rs,qp=class qp{constructor(e,t,s,a,c,u,h,f,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,a,c,u,h,f,m)}set(e,t,s,a,c,u,h,f,m){const v=this.elements;return v[0]=e,v[1]=a,v[2]=h,v[3]=t,v[4]=c,v[5]=f,v[6]=s,v[7]=u,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,c=this.elements,u=s[0],h=s[3],f=s[6],m=s[1],v=s[4],x=s[7],g=s[2],M=s[5],E=s[8],A=a[0],y=a[3],S=a[6],b=a[1],T=a[4],N=a[7],D=a[2],L=a[5],O=a[8];return c[0]=u*A+h*b+f*D,c[3]=u*y+h*T+f*L,c[6]=u*S+h*N+f*O,c[1]=m*A+v*b+x*D,c[4]=m*y+v*T+x*L,c[7]=m*S+v*N+x*O,c[2]=g*A+M*b+E*D,c[5]=g*y+M*T+E*L,c[8]=g*S+M*N+E*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],a=e[2],c=e[3],u=e[4],h=e[5],f=e[6],m=e[7],v=e[8];return t*u*v-t*h*m-s*c*v+s*h*f+a*c*m-a*u*f}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],c=e[3],u=e[4],h=e[5],f=e[6],m=e[7],v=e[8],x=v*u-h*m,g=h*f-v*c,M=m*c-u*f,E=t*x+s*g+a*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=x*A,e[1]=(a*m-v*s)*A,e[2]=(h*s-a*u)*A,e[3]=g*A,e[4]=(v*t-a*f)*A,e[5]=(a*c-h*t)*A,e[6]=M*A,e[7]=(s*f-m*t)*A,e[8]=(u*t-s*c)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,a,c,u,h){const f=Math.cos(c),m=Math.sin(c);return this.set(s*f,s*m,-s*(f*u+m*h)+u+e,-a*m,a*f,-a*(-m*u+f*h)+h+t,0,0,1),this}scale(e,t){return this.premultiply(yh.makeScale(e,t)),this}rotate(e){return this.premultiply(yh.makeRotation(-e)),this}translate(e,t){return this.premultiply(yh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<9;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};qp.prototype.isMatrix3=!0;let _t=qp;const yh=new _t,Xx=new _t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$x=new _t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sb(){const i={enabled:!0,workingColorSpace:nu,spaces:{},convert:function(a,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===kt&&(a.r=Mr(a.r),a.g=Mr(a.g),a.b=Mr(a.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(a.applyMatrix3(this.spaces[c].toXYZ),a.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===kt&&(a.r=Ra(a.r),a.g=Ra(a.g),a.b=Ra(a.b))),a},workingToColorSpace:function(a,c){return this.convert(a,this.workingColorSpace,c)},colorSpaceToWorking:function(a,c){return this.convert(a,c,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===es?iu:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,c=this.workingColorSpace){return a.fromArray(this.spaces[c].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,c,u){return a.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,c){return rp("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(a,c)},toWorkingColorSpace:function(a,c){return rp("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(a,c)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return i.define({[nu]:{primaries:e,whitePoint:s,transfer:iu,toXYZ:Xx,fromXYZ:$x,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ui},outputColorSpaceConfig:{drawingBufferColorSpace:ui}},[ui]:{primaries:e,whitePoint:s,transfer:kt,toXYZ:Xx,fromXYZ:$x,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ui}}}),i}const Nt=Sb();function Mr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ra(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let oa;class Mb{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{oa===void 0&&(oa=ru("canvas")),oa.width=e.width,oa.height=e.height;const a=oa.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),s=oa}return s.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ru("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const a=s.getImageData(0,0,e.width,e.height),c=a.data;for(let u=0;u<c.length;u++)c[u]=Mr(c[u]/255)*255;return s.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(Mr(t[s]/255)*255):t[s]=Mr(t[s]);return{data:t,width:e.width,height:e.height}}else return ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Eb=0;class Fp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Eb++}),this.uuid=ns(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},a=this.data;if(a!==null){let c;if(Array.isArray(a)){c=[];for(let u=0,h=a.length;u<h;u++)a[u].isDataTexture?c.push(Sh(a[u].image)):c.push(Sh(a[u]))}else c=Sh(a);s.url=c}return t||(e.images[this.uuid]=s),s}}function Sh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Mb.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ft("Texture: Unable to serialize Texture."),{})}let bb=0;const Mh=new ne;class On extends as{constructor(e=On.DEFAULT_IMAGE,t=On.DEFAULT_MAPPING,s=yr,a=yr,c=Un,u=As,h=ki,f=di,m=On.DEFAULT_ANISOTROPY,v=es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bb++}),this.uuid=ns(),this.name="",this.source=new Fp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=a,this.magFilter=c,this.minFilter=u,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=f,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Mh).x}get height(){return this.source.getSize(Mh).y}get depth(){return this.source.getSize(Mh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const s=e[t];if(s===void 0){ft(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){ft(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&s&&a.isVector2&&s.isVector2||a&&s&&a.isVector3&&s.isVector3||a&&s&&a.isMatrix3&&s.isMatrix3?a.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==M0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bf:e.x=e.x-Math.floor(e.x);break;case yr:e.x=e.x<0?0:1;break;case Tf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bf:e.y=e.y-Math.floor(e.y);break;case yr:e.y=e.y<0?0:1;break;case Tf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=M0;On.DEFAULT_ANISOTROPY=1;const Yp=class Yp{constructor(e=0,t=0,s=0,a=1){this.x=e,this.y=t,this.z=s,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,a){return this.x=e,this.y=t,this.z=s,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,c=this.w,u=e.elements;return this.x=u[0]*t+u[4]*s+u[8]*a+u[12]*c,this.y=u[1]*t+u[5]*s+u[9]*a+u[13]*c,this.z=u[2]*t+u[6]*s+u[10]*a+u[14]*c,this.w=u[3]*t+u[7]*s+u[11]*a+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,a,c;const f=e.elements,m=f[0],v=f[4],x=f[8],g=f[1],M=f[5],E=f[9],A=f[2],y=f[6],S=f[10];if(Math.abs(v-g)<.01&&Math.abs(x-A)<.01&&Math.abs(E-y)<.01){if(Math.abs(v+g)<.1&&Math.abs(x+A)<.1&&Math.abs(E+y)<.1&&Math.abs(m+M+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(m+1)/2,N=(M+1)/2,D=(S+1)/2,L=(v+g)/4,O=(x+A)/4,w=(E+y)/4;return T>N&&T>D?T<.01?(s=0,a=.707106781,c=.707106781):(s=Math.sqrt(T),a=L/s,c=O/s):N>D?N<.01?(s=.707106781,a=0,c=.707106781):(a=Math.sqrt(N),s=L/a,c=w/a):D<.01?(s=.707106781,a=.707106781,c=0):(c=Math.sqrt(D),s=O/c,a=w/c),this.set(s,a,c,t),this}let b=Math.sqrt((y-E)*(y-E)+(x-A)*(x-A)+(g-v)*(g-v));return Math.abs(b)<.001&&(b=1),this.x=(y-E)/b,this.y=(x-A)/b,this.z=(g-v)/b,this.w=Math.acos((m+M+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this.z=Rt(this.z,e.z,t.z),this.w=Rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this.z=Rt(this.z,e,t),this.w=Rt(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Rt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Yp.prototype.isVector4=!0;let on=Yp;class Tb extends as{constructor(e=1,t=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=s.depth,this.scissor=new on(0,0,e,t),this.scissorTest=!1,this.viewport=new on(0,0,e,t),this.textures=[];const a={width:e,height:t,depth:s.depth},c=new On(a),u=s.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const t={minFilter:Un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let a=0,c=this.textures.length;a<c;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=s,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,s=e.textures.length;t<s;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new Fp(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ii extends Tb{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class P0 extends On{constructor(e=null,t=1,s=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class wb extends On{constructor(e=null,t=1,s=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const cu=class cu{constructor(e,t,s,a,c,u,h,f,m,v,x,g,M,E,A,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,a,c,u,h,f,m,v,x,g,M,E,A,y)}set(e,t,s,a,c,u,h,f,m,v,x,g,M,E,A,y){const S=this.elements;return S[0]=e,S[4]=t,S[8]=s,S[12]=a,S[1]=c,S[5]=u,S[9]=h,S[13]=f,S[2]=m,S[6]=v,S[10]=x,S[14]=g,S[3]=M,S[7]=E,S[11]=A,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cu().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,s=e.elements,a=1/la.setFromMatrixColumn(e,0).length(),c=1/la.setFromMatrixColumn(e,1).length(),u=1/la.setFromMatrixColumn(e,2).length();return t[0]=s[0]*a,t[1]=s[1]*a,t[2]=s[2]*a,t[3]=0,t[4]=s[4]*c,t[5]=s[5]*c,t[6]=s[6]*c,t[7]=0,t[8]=s[8]*u,t[9]=s[9]*u,t[10]=s[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,a=e.y,c=e.z,u=Math.cos(s),h=Math.sin(s),f=Math.cos(a),m=Math.sin(a),v=Math.cos(c),x=Math.sin(c);if(e.order==="XYZ"){const g=u*v,M=u*x,E=h*v,A=h*x;t[0]=f*v,t[4]=-f*x,t[8]=m,t[1]=M+E*m,t[5]=g-A*m,t[9]=-h*f,t[2]=A-g*m,t[6]=E+M*m,t[10]=u*f}else if(e.order==="YXZ"){const g=f*v,M=f*x,E=m*v,A=m*x;t[0]=g+A*h,t[4]=E*h-M,t[8]=u*m,t[1]=u*x,t[5]=u*v,t[9]=-h,t[2]=M*h-E,t[6]=A+g*h,t[10]=u*f}else if(e.order==="ZXY"){const g=f*v,M=f*x,E=m*v,A=m*x;t[0]=g-A*h,t[4]=-u*x,t[8]=E+M*h,t[1]=M+E*h,t[5]=u*v,t[9]=A-g*h,t[2]=-u*m,t[6]=h,t[10]=u*f}else if(e.order==="ZYX"){const g=u*v,M=u*x,E=h*v,A=h*x;t[0]=f*v,t[4]=E*m-M,t[8]=g*m+A,t[1]=f*x,t[5]=A*m+g,t[9]=M*m-E,t[2]=-m,t[6]=h*f,t[10]=u*f}else if(e.order==="YZX"){const g=u*f,M=u*m,E=h*f,A=h*m;t[0]=f*v,t[4]=A-g*x,t[8]=E*x+M,t[1]=x,t[5]=u*v,t[9]=-h*v,t[2]=-m*v,t[6]=M*x+E,t[10]=g-A*x}else if(e.order==="XZY"){const g=u*f,M=u*m,E=h*f,A=h*m;t[0]=f*v,t[4]=-x,t[8]=m*v,t[1]=g*x+A,t[5]=u*v,t[9]=M*x-E,t[2]=E*x-M,t[6]=h*v,t[10]=A*x+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cb,e,Ab)}lookAt(e,t,s){const a=this.elements;return li.subVectors(e,t),li.lengthSq()===0&&(li.z=1),li.normalize(),Wr.crossVectors(s,li),Wr.lengthSq()===0&&(Math.abs(s.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),Wr.crossVectors(s,li)),Wr.normalize(),ac.crossVectors(li,Wr),a[0]=Wr.x,a[4]=ac.x,a[8]=li.x,a[1]=Wr.y,a[5]=ac.y,a[9]=li.y,a[2]=Wr.z,a[6]=ac.z,a[10]=li.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,c=this.elements,u=s[0],h=s[4],f=s[8],m=s[12],v=s[1],x=s[5],g=s[9],M=s[13],E=s[2],A=s[6],y=s[10],S=s[14],b=s[3],T=s[7],N=s[11],D=s[15],L=a[0],O=a[4],w=a[8],U=a[12],Y=a[1],H=a[5],ee=a[9],G=a[13],Q=a[2],V=a[6],k=a[10],W=a[14],$=a[3],le=a[7],se=a[11],B=a[15];return c[0]=u*L+h*Y+f*Q+m*$,c[4]=u*O+h*H+f*V+m*le,c[8]=u*w+h*ee+f*k+m*se,c[12]=u*U+h*G+f*W+m*B,c[1]=v*L+x*Y+g*Q+M*$,c[5]=v*O+x*H+g*V+M*le,c[9]=v*w+x*ee+g*k+M*se,c[13]=v*U+x*G+g*W+M*B,c[2]=E*L+A*Y+y*Q+S*$,c[6]=E*O+A*H+y*V+S*le,c[10]=E*w+A*ee+y*k+S*se,c[14]=E*U+A*G+y*W+S*B,c[3]=b*L+T*Y+N*Q+D*$,c[7]=b*O+T*H+N*V+D*le,c[11]=b*w+T*ee+N*k+D*se,c[15]=b*U+T*G+N*W+D*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],a=e[8],c=e[12],u=e[1],h=e[5],f=e[9],m=e[13],v=e[2],x=e[6],g=e[10],M=e[14],E=e[3],A=e[7],y=e[11],S=e[15],b=f*M-m*g,T=h*M-m*x,N=h*g-f*x,D=u*M-m*v,L=u*g-f*v,O=u*x-h*v;return t*(A*b-y*T+S*N)-s*(E*b-y*D+S*L)+a*(E*T-A*D+S*O)-c*(E*N-A*L+y*O)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],c=e[3],u=e[4],h=e[5],f=e[6],m=e[7],v=e[8],x=e[9],g=e[10],M=e[11],E=e[12],A=e[13],y=e[14],S=e[15],b=t*h-s*u,T=t*f-a*u,N=t*m-c*u,D=s*f-a*h,L=s*m-c*h,O=a*m-c*f,w=v*A-x*E,U=v*y-g*E,Y=v*S-M*E,H=x*y-g*A,ee=x*S-M*A,G=g*S-M*y,Q=b*G-T*ee+N*H+D*Y-L*U+O*w;if(Q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/Q;return e[0]=(h*G-f*ee+m*H)*V,e[1]=(a*ee-s*G-c*H)*V,e[2]=(A*O-y*L+S*D)*V,e[3]=(g*L-x*O-M*D)*V,e[4]=(f*Y-u*G-m*U)*V,e[5]=(t*G-a*Y+c*U)*V,e[6]=(y*N-E*O-S*T)*V,e[7]=(v*O-g*N+M*T)*V,e[8]=(u*ee-h*Y+m*w)*V,e[9]=(s*Y-t*ee-c*w)*V,e[10]=(E*L-A*N+S*b)*V,e[11]=(x*N-v*L-M*b)*V,e[12]=(h*U-u*H-f*w)*V,e[13]=(t*H-s*U+a*w)*V,e[14]=(A*T-E*D-y*b)*V,e[15]=(v*D-x*T+g*b)*V,this}scale(e){const t=this.elements,s=e.x,a=e.y,c=e.z;return t[0]*=s,t[4]*=a,t[8]*=c,t[1]*=s,t[5]*=a,t[9]*=c,t[2]*=s,t[6]*=a,t[10]*=c,t[3]*=s,t[7]*=a,t[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,a))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),a=Math.sin(t),c=1-s,u=e.x,h=e.y,f=e.z,m=c*u,v=c*h;return this.set(m*u+s,m*h-a*f,m*f+a*h,0,m*h+a*f,v*h+s,v*f-a*u,0,m*f-a*h,v*f+a*u,c*f*f+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,a,c,u){return this.set(1,s,c,0,e,1,u,0,t,a,1,0,0,0,0,1),this}compose(e,t,s){const a=this.elements,c=t._x,u=t._y,h=t._z,f=t._w,m=c+c,v=u+u,x=h+h,g=c*m,M=c*v,E=c*x,A=u*v,y=u*x,S=h*x,b=f*m,T=f*v,N=f*x,D=s.x,L=s.y,O=s.z;return a[0]=(1-(A+S))*D,a[1]=(M+N)*D,a[2]=(E-T)*D,a[3]=0,a[4]=(M-N)*L,a[5]=(1-(g+S))*L,a[6]=(y+b)*L,a[7]=0,a[8]=(E+T)*O,a[9]=(y-b)*O,a[10]=(1-(g+A))*O,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,s){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const c=this.determinant();if(c===0)return s.set(1,1,1),t.identity(),this;let u=la.set(a[0],a[1],a[2]).length();const h=la.set(a[4],a[5],a[6]).length(),f=la.set(a[8],a[9],a[10]).length();c<0&&(u=-u),Ui.copy(this);const m=1/u,v=1/h,x=1/f;return Ui.elements[0]*=m,Ui.elements[1]*=m,Ui.elements[2]*=m,Ui.elements[4]*=v,Ui.elements[5]*=v,Ui.elements[6]*=v,Ui.elements[8]*=x,Ui.elements[9]*=x,Ui.elements[10]*=x,t.setFromRotationMatrix(Ui),s.x=u,s.y=h,s.z=f,this}makePerspective(e,t,s,a,c,u,h=Qi,f=!1){const m=this.elements,v=2*c/(t-e),x=2*c/(s-a),g=(t+e)/(t-e),M=(s+a)/(s-a);let E,A;if(f)E=c/(u-c),A=u*c/(u-c);else if(h===Qi)E=-(u+c)/(u-c),A=-2*u*c/(u-c);else if(h===$o)E=-u/(u-c),A=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=v,m[4]=0,m[8]=g,m[12]=0,m[1]=0,m[5]=x,m[9]=M,m[13]=0,m[2]=0,m[6]=0,m[10]=E,m[14]=A,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,t,s,a,c,u,h=Qi,f=!1){const m=this.elements,v=2/(t-e),x=2/(s-a),g=-(t+e)/(t-e),M=-(s+a)/(s-a);let E,A;if(f)E=1/(u-c),A=u/(u-c);else if(h===Qi)E=-2/(u-c),A=-(u+c)/(u-c);else if(h===$o)E=-1/(u-c),A=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=v,m[4]=0,m[8]=0,m[12]=g,m[1]=0,m[5]=x,m[9]=0,m[13]=M,m[2]=0,m[6]=0,m[10]=E,m[14]=A,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<16;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}};cu.prototype.isMatrix4=!0;let sn=cu;const la=new ne,Ui=new sn,Cb=new ne(0,0,0),Ab=new ne(1,1,1),Wr=new ne,ac=new ne,li=new ne,qx=new sn,Yx=new rs;class ss{constructor(e=0,t=0,s=0,a=ss.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,a=this._order){return this._x=e,this._y=t,this._z=s,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const a=e.elements,c=a[0],u=a[4],h=a[8],f=a[1],m=a[5],v=a[9],x=a[2],g=a[6],M=a[10];switch(t){case"XYZ":this._y=Math.asin(Rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(g,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(f,m)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(f,c));break;case"ZYX":this._y=Math.asin(-Rt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(f,c)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(Rt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Rt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,m),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-v,M),this._y=0);break;default:ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return qx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qx,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yx.setFromEuler(this),this.setFromQuaternion(Yx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ss.DEFAULT_ORDER="XYZ";class L0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Rb=0;const Kx=new ne,ca=new rs,pr=new sn,oc=new ne,Co=new ne,Nb=new ne,Pb=new rs,Zx=new ne(1,0,0),Qx=new ne(0,1,0),Jx=new ne(0,0,1),ev={type:"added"},Lb={type:"removed"},ua={type:"childadded",child:null},Eh={type:"childremoved",child:null};class xn extends as{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rb++}),this.uuid=ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xn.DEFAULT_UP.clone();const e=new ne,t=new ss,s=new rs,a=new ne(1,1,1);function c(){s.setFromEuler(t,!1)}function u(){t.setFromQuaternion(s,void 0,!1)}t._onChange(c),s._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new sn},normalMatrix:{value:new _t}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new L0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ca.setFromAxisAngle(e,t),this.quaternion.multiply(ca),this}rotateOnWorldAxis(e,t){return ca.setFromAxisAngle(e,t),this.quaternion.premultiply(ca),this}rotateX(e){return this.rotateOnAxis(Zx,e)}rotateY(e){return this.rotateOnAxis(Qx,e)}rotateZ(e){return this.rotateOnAxis(Jx,e)}translateOnAxis(e,t){return Kx.copy(e).applyQuaternion(this.quaternion),this.position.add(Kx.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zx,e)}translateY(e){return this.translateOnAxis(Qx,e)}translateZ(e){return this.translateOnAxis(Jx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pr.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?oc.copy(e):oc.set(e,t,s);const a=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pr.lookAt(Co,oc,this.up):pr.lookAt(oc,Co,this.up),this.quaternion.setFromRotationMatrix(pr),a&&(pr.extractRotation(a.matrixWorld),ca.setFromRotationMatrix(pr),this.quaternion.premultiply(ca.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ev),ua.child=e,this.dispatchEvent(ua),ua.child=null):Dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lb),Eh.child=e,this.dispatchEvent(Eh),Eh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pr.multiply(e.parent.matrixWorld)),e.applyMatrix4(pr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ev),ua.child=e,this.dispatchEvent(ua),ua.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,a=this.children.length;s<a;s++){const u=this.children[s].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const a=this.children;for(let c=0,u=a.length;c<u;c++)a[c].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,e,Nb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,Pb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,s=e.y,a=e.z,c=this.matrix.elements;c[12]+=t-c[0]*t-c[4]*s-c[8]*a,c[13]+=s-c[1]*t-c[5]*s-c[9]*a,c[14]+=a-c[2]*t-c[6]*s-c[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let c=0,u=a.length;c<u;c++)a[c].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(h=>({...h})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function c(h,f){return h[f.uuid]===void 0&&(h[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const f=h.shapes;if(Array.isArray(f))for(let m=0,v=f.length;m<v;m++){const x=f[m];c(e.shapes,x)}else c(e.shapes,f)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let f=0,m=this.material.length;f<m;f++)h.push(c(e.materials,this.material[f]));a.material=h}else a.material=c(e.materials,this.material);if(this.children.length>0){a.children=[];for(let h=0;h<this.children.length;h++)a.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let h=0;h<this.animations.length;h++){const f=this.animations[h];a.animations.push(c(e.animations,f))}}if(t){const h=u(e.geometries),f=u(e.materials),m=u(e.textures),v=u(e.images),x=u(e.shapes),g=u(e.skeletons),M=u(e.animations),E=u(e.nodes);h.length>0&&(s.geometries=h),f.length>0&&(s.materials=f),m.length>0&&(s.textures=m),v.length>0&&(s.images=v),x.length>0&&(s.shapes=x),g.length>0&&(s.skeletons=g),M.length>0&&(s.animations=M),E.length>0&&(s.nodes=E)}return s.object=a,s;function u(h){const f=[];for(const m in h){const v=h[m];delete v.metadata,f.push(v)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const a=e.children[s];this.add(a.clone())}return this}}xn.DEFAULT_UP=new ne(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class lc extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Db={type:"move"};class bh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let a=null,c=null,u=null;const h=this._targetRay,f=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const A of e.hand.values()){const y=t.getJointPose(A,s),S=this._getHandJoint(m,A);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const v=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],g=v.position.distanceTo(x.position),M=.02,E=.005;m.inputState.pinching&&g>M+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&g<=M-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(c=t.getPose(e.gripSpace,s),c!==null&&(f.matrix.fromArray(c.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,c.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(c.linearVelocity)):f.hasLinearVelocity=!1,c.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(c.angularVelocity)):f.hasAngularVelocity=!1,f.eventsEnabled&&f.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(a=t.getPose(e.targetRaySpace,s),a===null&&c!==null&&(a=c),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Db)))}return h!==null&&(h.visible=a!==null),f!==null&&(f.visible=c!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new lc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const D0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xr={h:0,s:0,l:0},cc={h:0,s:0,l:0};function Th(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class yt{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ui){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nt.colorSpaceToWorking(this,t),this}setRGB(e,t,s,a=Nt.workingColorSpace){return this.r=e,this.g=t,this.b=s,Nt.colorSpaceToWorking(this,a),this}setHSL(e,t,s,a=Nt.workingColorSpace){if(e=_b(e,1),t=Rt(t,0,1),s=Rt(s,0,1),t===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+t):s+t-s*t,u=2*s-c;this.r=Th(u,c,e+1/3),this.g=Th(u,c,e),this.b=Th(u,c,e-1/3)}return Nt.colorSpaceToWorking(this,a),this}setStyle(e,t=ui){function s(c){c!==void 0&&parseFloat(c)<1&&ft("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=a[1],h=a[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,t);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,t);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,t);break;default:ft("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=a[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(c,16),t);ft("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ui){const s=D0[e.toLowerCase()];return s!==void 0?this.setHex(s,t):ft("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mr(e.r),this.g=Mr(e.g),this.b=Mr(e.b),this}copyLinearToSRGB(e){return this.r=Ra(e.r),this.g=Ra(e.g),this.b=Ra(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ui){return Nt.workingToColorSpace(Dn.copy(this),e),Math.round(Rt(Dn.r*255,0,255))*65536+Math.round(Rt(Dn.g*255,0,255))*256+Math.round(Rt(Dn.b*255,0,255))}getHexString(e=ui){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Nt.workingColorSpace){Nt.workingToColorSpace(Dn.copy(this),t);const s=Dn.r,a=Dn.g,c=Dn.b,u=Math.max(s,a,c),h=Math.min(s,a,c);let f,m;const v=(h+u)/2;if(h===u)f=0,m=0;else{const x=u-h;switch(m=v<=.5?x/(u+h):x/(2-u-h),u){case s:f=(a-c)/x+(a<c?6:0);break;case a:f=(c-s)/x+2;break;case c:f=(s-a)/x+4;break}f/=6}return e.h=f,e.s=m,e.l=v,e}getRGB(e,t=Nt.workingColorSpace){return Nt.workingToColorSpace(Dn.copy(this),t),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=ui){Nt.workingToColorSpace(Dn.copy(this),e);const t=Dn.r,s=Dn.g,a=Dn.b;return e!==ui?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(a*255)})`}offsetHSL(e,t,s){return this.getHSL(Xr),this.setHSL(Xr.h+e,Xr.s+t,Xr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Xr),e.getHSL(cc);const s=vh(Xr.h,cc.h,t),a=vh(Xr.s,cc.s,t),c=vh(Xr.l,cc.l,t);return this.setHSL(s,a,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,a=this.b,c=e.elements;return this.r=c[0]*t+c[3]*s+c[6]*a,this.g=c[1]*t+c[4]*s+c[7]*a,this.b=c[2]*t+c[5]*s+c[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new yt;yt.NAMES=D0;class Op{constructor(e,t=1,s=1e3){this.isFog=!0,this.name="",this.color=new yt(e),this.near=t,this.far=s}clone(){return new Op(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ib extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ss,this.environmentIntensity=1,this.environmentRotation=new ss,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Fi=new ne,mr=new ne,wh=new ne,gr=new ne,da=new ne,ha=new ne,tv=new ne,Ch=new ne,Ah=new ne,Rh=new ne,Nh=new on,Ph=new on,Lh=new on;class Ei{constructor(e=new ne,t=new ne,s=new ne){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,a){a.subVectors(s,t),Fi.subVectors(e,t),a.cross(Fi);const c=a.lengthSq();return c>0?a.multiplyScalar(1/Math.sqrt(c)):a.set(0,0,0)}static getBarycoord(e,t,s,a,c){Fi.subVectors(a,t),mr.subVectors(s,t),wh.subVectors(e,t);const u=Fi.dot(Fi),h=Fi.dot(mr),f=Fi.dot(wh),m=mr.dot(mr),v=mr.dot(wh),x=u*m-h*h;if(x===0)return c.set(0,0,0),null;const g=1/x,M=(m*f-h*v)*g,E=(u*v-h*f)*g;return c.set(1-M-E,E,M)}static containsPoint(e,t,s,a){return this.getBarycoord(e,t,s,a,gr)===null?!1:gr.x>=0&&gr.y>=0&&gr.x+gr.y<=1}static getInterpolation(e,t,s,a,c,u,h,f){return this.getBarycoord(e,t,s,a,gr)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(c,gr.x),f.addScaledVector(u,gr.y),f.addScaledVector(h,gr.z),f)}static getInterpolatedAttribute(e,t,s,a,c,u){return Nh.setScalar(0),Ph.setScalar(0),Lh.setScalar(0),Nh.fromBufferAttribute(e,t),Ph.fromBufferAttribute(e,s),Lh.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(Nh,c.x),u.addScaledVector(Ph,c.y),u.addScaledVector(Lh,c.z),u}static isFrontFacing(e,t,s,a){return Fi.subVectors(s,t),mr.subVectors(e,t),Fi.cross(mr).dot(a)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,a){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,s,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fi.subVectors(this.c,this.b),mr.subVectors(this.a,this.b),Fi.cross(mr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,a,c){return Ei.getInterpolation(e,this.a,this.b,this.c,t,s,a,c)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,a=this.b,c=this.c;let u,h;da.subVectors(a,s),ha.subVectors(c,s),Ch.subVectors(e,s);const f=da.dot(Ch),m=ha.dot(Ch);if(f<=0&&m<=0)return t.copy(s);Ah.subVectors(e,a);const v=da.dot(Ah),x=ha.dot(Ah);if(v>=0&&x<=v)return t.copy(a);const g=f*x-v*m;if(g<=0&&f>=0&&v<=0)return u=f/(f-v),t.copy(s).addScaledVector(da,u);Rh.subVectors(e,c);const M=da.dot(Rh),E=ha.dot(Rh);if(E>=0&&M<=E)return t.copy(c);const A=M*m-f*E;if(A<=0&&m>=0&&E<=0)return h=m/(m-E),t.copy(s).addScaledVector(ha,h);const y=v*E-M*x;if(y<=0&&x-v>=0&&M-E>=0)return tv.subVectors(c,a),h=(x-v)/(x-v+(M-E)),t.copy(a).addScaledVector(tv,h);const S=1/(y+A+g);return u=A*S,h=g*S,t.copy(s).addScaledVector(da,u).addScaledVector(ha,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Jo{constructor(e=new ne(1/0,1/0,1/0),t=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(Oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(Oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=Oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(t===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,Oi):Oi.fromBufferAttribute(c,u),Oi.applyMatrix4(e.matrixWorld),this.expandByPoint(Oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),uc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),uc.copy(s.boundingBox)),uc.applyMatrix4(e.matrixWorld),this.union(uc)}const a=e.children;for(let c=0,u=a.length;c<u;c++)this.expandByObject(a[c],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Oi),Oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ao),dc.subVectors(this.max,Ao),fa.subVectors(e.a,Ao),pa.subVectors(e.b,Ao),ma.subVectors(e.c,Ao),$r.subVectors(pa,fa),qr.subVectors(ma,pa),Ms.subVectors(fa,ma);let t=[0,-$r.z,$r.y,0,-qr.z,qr.y,0,-Ms.z,Ms.y,$r.z,0,-$r.x,qr.z,0,-qr.x,Ms.z,0,-Ms.x,-$r.y,$r.x,0,-qr.y,qr.x,0,-Ms.y,Ms.x,0];return!Dh(t,fa,pa,ma,dc)||(t=[1,0,0,0,1,0,0,0,1],!Dh(t,fa,pa,ma,dc))?!1:(hc.crossVectors($r,qr),t=[hc.x,hc.y,hc.z],Dh(t,fa,pa,ma,dc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const xr=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],Oi=new ne,uc=new Jo,fa=new ne,pa=new ne,ma=new ne,$r=new ne,qr=new ne,Ms=new ne,Ao=new ne,dc=new ne,hc=new ne,Es=new ne;function Dh(i,e,t,s,a){for(let c=0,u=i.length-3;c<=u;c+=3){Es.fromArray(i,c);const h=a.x*Math.abs(Es.x)+a.y*Math.abs(Es.y)+a.z*Math.abs(Es.z),f=e.dot(Es),m=t.dot(Es),v=s.dot(Es);if(Math.max(-Math.max(f,m,v),Math.min(f,m,v))>h)return!1}return!0}const fn=new ne,fc=new nt;let Ub=0;class ji extends as{constructor(e,t,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ub++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=ip,this.updateRanges=[],this.gpuType=Zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let a=0,c=this.itemSize;a<c;a++)this.array[e+a]=t.array[s+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)fc.fromBufferAttribute(this,t),fc.applyMatrix3(e),this.setXY(t,fc.x,fc.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix3(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix4(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)fn.fromBufferAttribute(this,t),fn.applyNormalMatrix(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)fn.fromBufferAttribute(this,t),fn.transformDirection(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=Ki(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Ht(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ki(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ki(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ki(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ki(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),s=Ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,a){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),s=Ht(s,this.array),a=Ht(a,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this}setXYZW(e,t,s,a,c){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),s=Ht(s,this.array),a=Ht(a,this.array),c=Ht(c,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ip&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class I0 extends ji{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class U0 extends ji{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class un extends ji{constructor(e,t,s){super(new Float32Array(e),t,s)}}const Fb=new Jo,Ro=new ne,Ih=new ne;class pu{constructor(e=new ne,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):Fb.setFromPoints(e).getCenter(s);let a=0;for(let c=0,u=e.length;c<u;c++)a=Math.max(a,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ro.subVectors(e,this.center);const t=Ro.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),a=(s-this.radius)*.5;this.center.addScaledVector(Ro,a/s),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ih.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ro.copy(e.center).add(Ih)),this.expandByPoint(Ro.copy(e.center).sub(Ih))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Ob=0;const Si=new sn,Uh=new xn,ga=new ne,ci=new Jo,No=new Jo,En=new ne;class kn extends as{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ob++}),this.uuid=ns(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mb(e)?U0:I0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new _t().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Si.makeRotationFromQuaternion(e),this.applyMatrix4(Si),this}rotateX(e){return Si.makeRotationX(e),this.applyMatrix4(Si),this}rotateY(e){return Si.makeRotationY(e),this.applyMatrix4(Si),this}rotateZ(e){return Si.makeRotationZ(e),this.applyMatrix4(Si),this}translate(e,t,s){return Si.makeTranslation(e,t,s),this.applyMatrix4(Si),this}scale(e,t,s){return Si.makeScale(e,t,s),this.applyMatrix4(Si),this}lookAt(e){return Uh.lookAt(e),Uh.updateMatrix(),this.applyMatrix4(Uh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ga).negate(),this.translate(ga.x,ga.y,ga.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let a=0,c=e.length;a<c;a++){const u=e[a];s.push(u.x,u.y,u.z||0)}this.setAttribute("position",new un(s,3))}else{const s=Math.min(e.length,t.count);for(let a=0;a<s;a++){const c=e[a];t.setXYZ(a,c.x,c.y,c.z||0)}e.length>t.count&&ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const c=t[s];ci.setFromBufferAttribute(c),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const s=this.boundingSphere.center;if(ci.setFromBufferAttribute(e),t)for(let c=0,u=t.length;c<u;c++){const h=t[c];No.setFromBufferAttribute(h),this.morphTargetsRelative?(En.addVectors(ci.min,No.min),ci.expandByPoint(En),En.addVectors(ci.max,No.max),ci.expandByPoint(En)):(ci.expandByPoint(No.min),ci.expandByPoint(No.max))}ci.getCenter(s);let a=0;for(let c=0,u=e.count;c<u;c++)En.fromBufferAttribute(e,c),a=Math.max(a,s.distanceToSquared(En));if(t)for(let c=0,u=t.length;c<u;c++){const h=t[c],f=this.morphTargetsRelative;for(let m=0,v=h.count;m<v;m++)En.fromBufferAttribute(h,m),f&&(ga.fromBufferAttribute(e,m),En.add(ga)),a=Math.max(a,s.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,a=t.normal,c=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ji(new Float32Array(4*s.count),4));const u=this.getAttribute("tangent"),h=[],f=[];for(let w=0;w<s.count;w++)h[w]=new ne,f[w]=new ne;const m=new ne,v=new ne,x=new ne,g=new nt,M=new nt,E=new nt,A=new ne,y=new ne;function S(w,U,Y){m.fromBufferAttribute(s,w),v.fromBufferAttribute(s,U),x.fromBufferAttribute(s,Y),g.fromBufferAttribute(c,w),M.fromBufferAttribute(c,U),E.fromBufferAttribute(c,Y),v.sub(m),x.sub(m),M.sub(g),E.sub(g);const H=1/(M.x*E.y-E.x*M.y);isFinite(H)&&(A.copy(v).multiplyScalar(E.y).addScaledVector(x,-M.y).multiplyScalar(H),y.copy(x).multiplyScalar(M.x).addScaledVector(v,-E.x).multiplyScalar(H),h[w].add(A),h[U].add(A),h[Y].add(A),f[w].add(y),f[U].add(y),f[Y].add(y))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let w=0,U=b.length;w<U;++w){const Y=b[w],H=Y.start,ee=Y.count;for(let G=H,Q=H+ee;G<Q;G+=3)S(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const T=new ne,N=new ne,D=new ne,L=new ne;function O(w){D.fromBufferAttribute(a,w),L.copy(D);const U=h[w];T.copy(U),T.sub(D.multiplyScalar(D.dot(U))).normalize(),N.crossVectors(L,U);const H=N.dot(f[w])<0?-1:1;u.setXYZW(w,T.x,T.y,T.z,H)}for(let w=0,U=b.length;w<U;++w){const Y=b[w],H=Y.start,ee=Y.count;for(let G=H,Q=H+ee;G<Q;G+=3)O(e.getX(G+0)),O(e.getX(G+1)),O(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new ji(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let g=0,M=s.count;g<M;g++)s.setXYZ(g,0,0,0);const a=new ne,c=new ne,u=new ne,h=new ne,f=new ne,m=new ne,v=new ne,x=new ne;if(e)for(let g=0,M=e.count;g<M;g+=3){const E=e.getX(g+0),A=e.getX(g+1),y=e.getX(g+2);a.fromBufferAttribute(t,E),c.fromBufferAttribute(t,A),u.fromBufferAttribute(t,y),v.subVectors(u,c),x.subVectors(a,c),v.cross(x),h.fromBufferAttribute(s,E),f.fromBufferAttribute(s,A),m.fromBufferAttribute(s,y),h.add(v),f.add(v),m.add(v),s.setXYZ(E,h.x,h.y,h.z),s.setXYZ(A,f.x,f.y,f.z),s.setXYZ(y,m.x,m.y,m.z)}else for(let g=0,M=t.count;g<M;g+=3)a.fromBufferAttribute(t,g+0),c.fromBufferAttribute(t,g+1),u.fromBufferAttribute(t,g+2),v.subVectors(u,c),x.subVectors(a,c),v.cross(x),s.setXYZ(g+0,v.x,v.y,v.z),s.setXYZ(g+1,v.x,v.y,v.z),s.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)En.fromBufferAttribute(e,t),En.normalize(),e.setXYZ(t,En.x,En.y,En.z)}toNonIndexed(){function e(h,f){const m=h.array,v=h.itemSize,x=h.normalized,g=new m.constructor(f.length*v);let M=0,E=0;for(let A=0,y=f.length;A<y;A++){h.isInterleavedBufferAttribute?M=f[A]*h.data.stride+h.offset:M=f[A]*v;for(let S=0;S<v;S++)g[E++]=m[M++]}return new ji(g,v,x)}if(this.index===null)return ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kn,s=this.index.array,a=this.attributes;for(const h in a){const f=a[h],m=e(f,s);t.setAttribute(h,m)}const c=this.morphAttributes;for(const h in c){const f=[],m=c[h];for(let v=0,x=m.length;v<x;v++){const g=m[v],M=e(g,s);f.push(M)}t.morphAttributes[h]=f}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,f=u.length;h<f;h++){const m=u[h];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const m in f)f[m]!==void 0&&(e[m]=f[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const f in s){const m=s[f];e.data.attributes[f]=m.toJSON(e.data)}const a={};let c=!1;for(const f in this.morphAttributes){const m=this.morphAttributes[f],v=[];for(let x=0,g=m.length;x<g;x++){const M=m[x];v.push(M.toJSON(e.data))}v.length>0&&(a[f]=v,c=!0)}c&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const a=e.attributes;for(const m in a){const v=a[m];this.setAttribute(m,v.clone(t))}const c=e.morphAttributes;for(const m in c){const v=[],x=c[m];for(let g=0,M=x.length;g<M;g++)v.push(x[g].clone(t));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,v=u.length;m<v;m++){const x=u[m];this.addGroup(x.start,x.count,x.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kb{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ip,this.updateRanges=[],this.version=0,this.uuid=ns()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,s){e*=this.stride,s*=t.stride;for(let a=0,c=this.stride;a<c;a++)this.array[e+a]=t.array[s+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ns()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(t,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ns()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Hn=new ne;class au{constructor(e,t,s,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=s,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,s=this.data.count;t<s;t++)Hn.fromBufferAttribute(this,t),Hn.applyMatrix4(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)Hn.fromBufferAttribute(this,t),Hn.applyNormalMatrix(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)Hn.fromBufferAttribute(this,t),Hn.transformDirection(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}getComponent(e,t){let s=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(s=Ki(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Ht(s,this.array)),this.data.array[e*this.data.stride+this.offset+t]=s,this}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ki(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ki(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ki(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ki(t,this.array)),t}setXY(e,t,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),s=Ht(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=s,this}setXYZ(e,t,s,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),s=Ht(s,this.array),a=Ht(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=s,this.data.array[e+2]=a,this}setXYZW(e,t,s,a,c){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),s=Ht(s,this.array),a=Ht(a,this.array),c=Ht(c,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=s,this.data.array[e+2]=a,this.data.array[e+3]=c,this}clone(e){if(e===void 0){su("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let s=0;s<this.count;s++){const a=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)t.push(this.data.array[a+c])}return new ji(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new au(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){su("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let s=0;s<this.count;s++){const a=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)t.push(this.data.array[a+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let jb=0;class Is extends as{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jb++}),this.uuid=ns(),this.name="",this.type="Material",this.blending=Aa,this.side=is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mf,this.blendDst=gf,this.blendEquation=ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=Na,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=aa,this.stencilZFail=aa,this.stencilZPass=aa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){ft(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){ft(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(s):a&&a.isVector3&&s&&s.isVector3?a.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Aa&&(s.blending=this.blending),this.side!==is&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==mf&&(s.blendSrc=this.blendSrc),this.blendDst!==gf&&(s.blendDst=this.blendDst),this.blendEquation!==ws&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Na&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hx&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==aa&&(s.stencilFail=this.stencilFail),this.stencilZFail!==aa&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==aa&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function a(c){const u=[];for(const h in c){const f=c[h];delete f.metadata,u.push(f)}return u}if(t){const c=a(e.textures),u=a(e.images);c.length>0&&(s.textures=c),u.length>0&&(s.images=u)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const a=t.length;s=new Array(a);for(let c=0;c!==a;++c)s[c]=t[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class F0 extends Is{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let xa;const Po=new ne,va=new ne,_a=new ne,ya=new nt,Lo=new nt,O0=new sn,pc=new ne,Do=new ne,mc=new ne,nv=new nt,Fh=new nt,iv=new nt;class Bb extends xn{constructor(e=new F0){if(super(),this.isSprite=!0,this.type="Sprite",xa===void 0){xa=new kn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new kb(t,5);xa.setIndex([0,1,2,0,2,3]),xa.setAttribute("position",new au(s,3,0,!1)),xa.setAttribute("uv",new au(s,2,3,!1))}this.geometry=xa,this.material=e,this.center=new nt(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Dt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),va.setFromMatrixScale(this.matrixWorld),O0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),_a.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&va.multiplyScalar(-_a.z);const s=this.material.rotation;let a,c;s!==0&&(c=Math.cos(s),a=Math.sin(s));const u=this.center;gc(pc.set(-.5,-.5,0),_a,u,va,a,c),gc(Do.set(.5,-.5,0),_a,u,va,a,c),gc(mc.set(.5,.5,0),_a,u,va,a,c),nv.set(0,0),Fh.set(1,0),iv.set(1,1);let h=e.ray.intersectTriangle(pc,Do,mc,!1,Po);if(h===null&&(gc(Do.set(-.5,.5,0),_a,u,va,a,c),Fh.set(0,1),h=e.ray.intersectTriangle(pc,mc,Do,!1,Po),h===null))return;const f=e.ray.origin.distanceTo(Po);f<e.near||f>e.far||t.push({distance:f,point:Po.clone(),uv:Ei.getInterpolation(Po,pc,Do,mc,nv,Fh,iv,new nt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function gc(i,e,t,s,a,c){ya.subVectors(i,t).addScalar(.5).multiply(s),a!==void 0?(Lo.x=c*ya.x-a*ya.y,Lo.y=a*ya.x+c*ya.y):Lo.copy(ya),i.copy(e),i.x+=Lo.x,i.y+=Lo.y,i.applyMatrix4(O0)}const vr=new ne,Oh=new ne,xc=new ne,Yr=new ne,kh=new ne,vc=new ne,jh=new ne;class kp{constructor(e=new ne,t=new ne(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vr.copy(this.origin).addScaledVector(this.direction,t),vr.distanceToSquared(e))}distanceSqToSegment(e,t,s,a){Oh.copy(e).add(t).multiplyScalar(.5),xc.copy(t).sub(e).normalize(),Yr.copy(this.origin).sub(Oh);const c=e.distanceTo(t)*.5,u=-this.direction.dot(xc),h=Yr.dot(this.direction),f=-Yr.dot(xc),m=Yr.lengthSq(),v=Math.abs(1-u*u);let x,g,M,E;if(v>0)if(x=u*f-h,g=u*h-f,E=c*v,x>=0)if(g>=-E)if(g<=E){const A=1/v;x*=A,g*=A,M=x*(x+u*g+2*h)+g*(u*x+g+2*f)+m}else g=c,x=Math.max(0,-(u*g+h)),M=-x*x+g*(g+2*f)+m;else g=-c,x=Math.max(0,-(u*g+h)),M=-x*x+g*(g+2*f)+m;else g<=-E?(x=Math.max(0,-(-u*c+h)),g=x>0?-c:Math.min(Math.max(-c,-f),c),M=-x*x+g*(g+2*f)+m):g<=E?(x=0,g=Math.min(Math.max(-c,-f),c),M=g*(g+2*f)+m):(x=Math.max(0,-(u*c+h)),g=x>0?c:Math.min(Math.max(-c,-f),c),M=-x*x+g*(g+2*f)+m);else g=u>0?-c:c,x=Math.max(0,-(u*g+h)),M=-x*x+g*(g+2*f)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,x),a&&a.copy(Oh).addScaledVector(xc,g),M}intersectSphere(e,t){vr.subVectors(e.center,this.origin);const s=vr.dot(this.direction),a=vr.dot(vr)-s*s,c=e.radius*e.radius;if(a>c)return null;const u=Math.sqrt(c-a),h=s-u,f=s+u;return f<0?null:h<0?this.at(f,t):this.at(h,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,a,c,u,h,f;const m=1/this.direction.x,v=1/this.direction.y,x=1/this.direction.z,g=this.origin;return m>=0?(s=(e.min.x-g.x)*m,a=(e.max.x-g.x)*m):(s=(e.max.x-g.x)*m,a=(e.min.x-g.x)*m),v>=0?(c=(e.min.y-g.y)*v,u=(e.max.y-g.y)*v):(c=(e.max.y-g.y)*v,u=(e.min.y-g.y)*v),s>u||c>a||((c>s||isNaN(s))&&(s=c),(u<a||isNaN(a))&&(a=u),x>=0?(h=(e.min.z-g.z)*x,f=(e.max.z-g.z)*x):(h=(e.max.z-g.z)*x,f=(e.min.z-g.z)*x),s>f||h>a)||((h>s||s!==s)&&(s=h),(f<a||a!==a)&&(a=f),a<0)?null:this.at(s>=0?s:a,t)}intersectsBox(e){return this.intersectBox(e,vr)!==null}intersectTriangle(e,t,s,a,c){kh.subVectors(t,e),vc.subVectors(s,e),jh.crossVectors(kh,vc);let u=this.direction.dot(jh),h;if(u>0){if(a)return null;h=1}else if(u<0)h=-1,u=-u;else return null;Yr.subVectors(this.origin,e);const f=h*this.direction.dot(vc.crossVectors(Yr,vc));if(f<0)return null;const m=h*this.direction.dot(kh.cross(Yr));if(m<0||f+m>u)return null;const v=-h*Yr.dot(jh);return v<0?null:this.at(v/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jp extends Is{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ss,this.combine=S0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rv=new sn,bs=new kp,_c=new pu,sv=new ne,yc=new ne,Sc=new ne,Mc=new ne,Bh=new ne,Ec=new ne,av=new ne,bc=new ne;class wi extends xn{constructor(e=new kn,t=new jp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=a.length;c<u;c++){const h=a[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,t){const s=this.geometry,a=s.attributes.position,c=s.morphAttributes.position,u=s.morphTargetsRelative;t.fromBufferAttribute(a,e);const h=this.morphTargetInfluences;if(c&&h){Ec.set(0,0,0);for(let f=0,m=c.length;f<m;f++){const v=h[f],x=c[f];v!==0&&(Bh.fromBufferAttribute(x,e),u?Ec.addScaledVector(Bh,v):Ec.addScaledVector(Bh.sub(t),v))}t.add(Ec)}return t}raycast(e,t){const s=this.geometry,a=this.material,c=this.matrixWorld;a!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),_c.copy(s.boundingSphere),_c.applyMatrix4(c),bs.copy(e.ray).recast(e.near),!(_c.containsPoint(bs.origin)===!1&&(bs.intersectSphere(_c,sv)===null||bs.origin.distanceToSquared(sv)>(e.far-e.near)**2))&&(rv.copy(c).invert(),bs.copy(e.ray).applyMatrix4(rv),!(s.boundingBox!==null&&bs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,bs)))}_computeIntersections(e,t,s){let a;const c=this.geometry,u=this.material,h=c.index,f=c.attributes.position,m=c.attributes.uv,v=c.attributes.uv1,x=c.attributes.normal,g=c.groups,M=c.drawRange;if(h!==null)if(Array.isArray(u))for(let E=0,A=g.length;E<A;E++){const y=g[E],S=u[y.materialIndex],b=Math.max(y.start,M.start),T=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let N=b,D=T;N<D;N+=3){const L=h.getX(N),O=h.getX(N+1),w=h.getX(N+2);a=Tc(this,S,e,s,m,v,x,L,O,w),a&&(a.faceIndex=Math.floor(N/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const E=Math.max(0,M.start),A=Math.min(h.count,M.start+M.count);for(let y=E,S=A;y<S;y+=3){const b=h.getX(y),T=h.getX(y+1),N=h.getX(y+2);a=Tc(this,u,e,s,m,v,x,b,T,N),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}else if(f!==void 0)if(Array.isArray(u))for(let E=0,A=g.length;E<A;E++){const y=g[E],S=u[y.materialIndex],b=Math.max(y.start,M.start),T=Math.min(f.count,Math.min(y.start+y.count,M.start+M.count));for(let N=b,D=T;N<D;N+=3){const L=N,O=N+1,w=N+2;a=Tc(this,S,e,s,m,v,x,L,O,w),a&&(a.faceIndex=Math.floor(N/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const E=Math.max(0,M.start),A=Math.min(f.count,M.start+M.count);for(let y=E,S=A;y<S;y+=3){const b=y,T=y+1,N=y+2;a=Tc(this,u,e,s,m,v,x,b,T,N),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}}}function zb(i,e,t,s,a,c,u,h){let f;if(e.side===ni?f=s.intersectTriangle(u,c,a,!0,h):f=s.intersectTriangle(a,c,u,e.side===is,h),f===null)return null;bc.copy(h),bc.applyMatrix4(i.matrixWorld);const m=t.ray.origin.distanceTo(bc);return m<t.near||m>t.far?null:{distance:m,point:bc.clone(),object:i}}function Tc(i,e,t,s,a,c,u,h,f,m){i.getVertexPosition(h,yc),i.getVertexPosition(f,Sc),i.getVertexPosition(m,Mc);const v=zb(i,e,t,s,yc,Sc,Mc,av);if(v){const x=new ne;Ei.getBarycoord(av,yc,Sc,Mc,x),a&&(v.uv=Ei.getInterpolatedAttribute(a,h,f,m,x,new nt)),c&&(v.uv1=Ei.getInterpolatedAttribute(c,h,f,m,x,new nt)),u&&(v.normal=Ei.getInterpolatedAttribute(u,h,f,m,x,new ne),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const g={a:h,b:f,c:m,normal:new ne,materialIndex:0};Ei.getNormal(yc,Sc,Mc,g.normal),v.face=g,v.barycoord=x}return v}class Hb extends On{constructor(e=null,t=1,s=1,a,c,u,h,f,m=Cn,v=Cn,x,g){super(null,u,h,f,m,v,a,c,x,g),this.isDataTexture=!0,this.image={data:e,width:t,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const zh=new ne,Gb=new ne,Vb=new _t;class Jr{constructor(e=new ne(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,a){return this.normal.set(e,t,s),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const a=zh.subVectors(s,t).cross(Gb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,s=!0){const a=e.delta(zh),c=this.normal.dot(a);if(c===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/c;return s===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(a,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||Vb.getNormalMatrix(e),a=this.coplanarPoint(zh).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-a.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ts=new pu,Wb=new nt(.5,.5),wc=new ne;class Bp{constructor(e=new Jr,t=new Jr,s=new Jr,a=new Jr,c=new Jr,u=new Jr){this.planes=[e,t,s,a,c,u]}set(e,t,s,a,c,u){const h=this.planes;return h[0].copy(e),h[1].copy(t),h[2].copy(s),h[3].copy(a),h[4].copy(c),h[5].copy(u),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Qi,s=!1){const a=this.planes,c=e.elements,u=c[0],h=c[1],f=c[2],m=c[3],v=c[4],x=c[5],g=c[6],M=c[7],E=c[8],A=c[9],y=c[10],S=c[11],b=c[12],T=c[13],N=c[14],D=c[15];if(a[0].setComponents(m-u,M-v,S-E,D-b).normalize(),a[1].setComponents(m+u,M+v,S+E,D+b).normalize(),a[2].setComponents(m+h,M+x,S+A,D+T).normalize(),a[3].setComponents(m-h,M-x,S-A,D-T).normalize(),s)a[4].setComponents(f,g,y,N).normalize(),a[5].setComponents(m-f,M-g,S-y,D-N).normalize();else if(a[4].setComponents(m-f,M-g,S-y,D-N).normalize(),t===Qi)a[5].setComponents(m+f,M+g,S+y,D+N).normalize();else if(t===$o)a[5].setComponents(f,g,y,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ts)}intersectsSprite(e){Ts.center.set(0,0,0);const t=Wb.distanceTo(e.center);return Ts.radius=.7071067811865476+t,Ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ts)}intersectsSphere(e){const t=this.planes,s=e.center,a=-e.radius;for(let c=0;c<6;c++)if(t[c].distanceToPoint(s)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const a=t[s];if(wc.x=a.normal.x>0?e.max.x:e.min.x,wc.y=a.normal.y>0?e.max.y:e.min.y,wc.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(wc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class zp extends Is{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ou=new ne,lu=new ne,ov=new sn,Io=new kp,Cc=new pu,Hh=new ne,lv=new ne;class k0 extends xn{constructor(e=new kn,t=new zp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[0];for(let a=1,c=t.count;a<c;a++)ou.fromBufferAttribute(t,a-1),lu.fromBufferAttribute(t,a),s[a]=s[a-1],s[a]+=ou.distanceTo(lu);e.setAttribute("lineDistance",new un(s,1))}else ft("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const s=this.geometry,a=this.matrixWorld,c=e.params.Line.threshold,u=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Cc.copy(s.boundingSphere),Cc.applyMatrix4(a),Cc.radius+=c,e.ray.intersectsSphere(Cc)===!1)return;ov.copy(a).invert(),Io.copy(e.ray).applyMatrix4(ov);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),f=h*h,m=this.isLineSegments?2:1,v=s.index,g=s.attributes.position;if(v!==null){const M=Math.max(0,u.start),E=Math.min(v.count,u.start+u.count);for(let A=M,y=E-1;A<y;A+=m){const S=v.getX(A),b=v.getX(A+1),T=Ac(this,e,Io,f,S,b,A);T&&t.push(T)}if(this.isLineLoop){const A=v.getX(E-1),y=v.getX(M),S=Ac(this,e,Io,f,A,y,E-1);S&&t.push(S)}}else{const M=Math.max(0,u.start),E=Math.min(g.count,u.start+u.count);for(let A=M,y=E-1;A<y;A+=m){const S=Ac(this,e,Io,f,A,A+1,A);S&&t.push(S)}if(this.isLineLoop){const A=Ac(this,e,Io,f,E-1,M,E-1);A&&t.push(A)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=a.length;c<u;c++){const h=a[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Ac(i,e,t,s,a,c,u){const h=i.geometry.attributes.position;if(ou.fromBufferAttribute(h,a),lu.fromBufferAttribute(h,c),t.distanceSqToSegment(ou,lu,Hh,lv)>s)return;Hh.applyMatrix4(i.matrixWorld);const m=e.ray.origin.distanceTo(Hh);if(!(m<e.near||m>e.far))return{distance:m,point:lv.clone().applyMatrix4(i.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:i}}const cv=new ne,uv=new ne;class Xb extends k0{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[];for(let a=0,c=t.count;a<c;a+=2)cv.fromBufferAttribute(t,a),uv.fromBufferAttribute(t,a+1),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+cv.distanceTo(uv);e.setAttribute("lineDistance",new un(s,1))}else ft("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class j0 extends On{constructor(e=[],t=Ps,s,a,c,u,h,f,m,v){super(e,t,s,a,c,u,h,f,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $b extends On{constructor(e,t,s,a,c,u,h,f,m){super(e,t,s,a,c,u,h,f,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class La extends On{constructor(e,t,s=tr,a,c,u,h=Cn,f=Cn,m,v=br,x=1){if(v!==br&&v!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:x};super(g,a,c,u,h,f,v,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Fp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class qb extends La{constructor(e,t=tr,s=Ps,a,c,u=Cn,h=Cn,f,m=br){const v={width:e,height:e,depth:1},x=[v,v,v,v,v,v];super(e,e,t,s,a,c,u,h,f,m),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class B0 extends On{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ja extends kn{constructor(e=1,t=1,s=1,a=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:a,heightSegments:c,depthSegments:u};const h=this;a=Math.floor(a),c=Math.floor(c),u=Math.floor(u);const f=[],m=[],v=[],x=[];let g=0,M=0;E("z","y","x",-1,-1,s,t,e,u,c,0),E("z","y","x",1,-1,s,t,-e,u,c,1),E("x","z","y",1,1,e,s,t,a,u,2),E("x","z","y",1,-1,e,s,-t,a,u,3),E("x","y","z",1,-1,e,t,s,a,c,4),E("x","y","z",-1,-1,e,t,-s,a,c,5),this.setIndex(f),this.setAttribute("position",new un(m,3)),this.setAttribute("normal",new un(v,3)),this.setAttribute("uv",new un(x,2));function E(A,y,S,b,T,N,D,L,O,w,U){const Y=N/O,H=D/w,ee=N/2,G=D/2,Q=L/2,V=O+1,k=w+1;let W=0,$=0;const le=new ne;for(let se=0;se<k;se++){const B=se*H-G;for(let re=0;re<V;re++){const Fe=re*Y-ee;le[A]=Fe*b,le[y]=B*T,le[S]=Q,m.push(le.x,le.y,le.z),le[A]=0,le[y]=0,le[S]=L>0?1:-1,v.push(le.x,le.y,le.z),x.push(re/O),x.push(1-se/w),W+=1}}for(let se=0;se<w;se++)for(let B=0;B<O;B++){const re=g+B+V*se,Fe=g+B+V*(se+1),Te=g+(B+1)+V*(se+1),Ae=g+(B+1)+V*se;f.push(re,Fe,Ae),f.push(Fe,Te,Ae),$+=6}h.addGroup(M,$,U),M+=$,g+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ja(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Hp extends kn{constructor(e=1,t=1,s=1,a=32,c=1,u=!1,h=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:s,radialSegments:a,heightSegments:c,openEnded:u,thetaStart:h,thetaLength:f};const m=this;a=Math.floor(a),c=Math.floor(c);const v=[],x=[],g=[],M=[];let E=0;const A=[],y=s/2;let S=0;b(),u===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(v),this.setAttribute("position",new un(x,3)),this.setAttribute("normal",new un(g,3)),this.setAttribute("uv",new un(M,2));function b(){const N=new ne,D=new ne;let L=0;const O=(t-e)/s;for(let w=0;w<=c;w++){const U=[],Y=w/c,H=Y*(t-e)+e;for(let ee=0;ee<=a;ee++){const G=ee/a,Q=G*f+h,V=Math.sin(Q),k=Math.cos(Q);D.x=H*V,D.y=-Y*s+y,D.z=H*k,x.push(D.x,D.y,D.z),N.set(V,O,k).normalize(),g.push(N.x,N.y,N.z),M.push(G,1-Y),U.push(E++)}A.push(U)}for(let w=0;w<a;w++)for(let U=0;U<c;U++){const Y=A[U][w],H=A[U+1][w],ee=A[U+1][w+1],G=A[U][w+1];(e>0||U!==0)&&(v.push(Y,H,G),L+=3),(t>0||U!==c-1)&&(v.push(H,ee,G),L+=3)}m.addGroup(S,L,0),S+=L}function T(N){const D=E,L=new nt,O=new ne;let w=0;const U=N===!0?e:t,Y=N===!0?1:-1;for(let ee=1;ee<=a;ee++)x.push(0,y*Y,0),g.push(0,Y,0),M.push(.5,.5),E++;const H=E;for(let ee=0;ee<=a;ee++){const Q=ee/a*f+h,V=Math.cos(Q),k=Math.sin(Q);O.x=U*k,O.y=y*Y,O.z=U*V,x.push(O.x,O.y,O.z),g.push(0,Y,0),L.x=V*.5+.5,L.y=k*.5*Y+.5,M.push(L.x,L.y),E++}for(let ee=0;ee<a;ee++){const G=D+ee,Q=H+ee;N===!0?v.push(Q,Q+1,G):v.push(Q+1,Q,G),w+=3}m.addGroup(S,w,N===!0?1:2),S+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hp(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class el extends kn{constructor(e=1,t=1,s=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:a};const c=e/2,u=t/2,h=Math.floor(s),f=Math.floor(a),m=h+1,v=f+1,x=e/h,g=t/f,M=[],E=[],A=[],y=[];for(let S=0;S<v;S++){const b=S*g-u;for(let T=0;T<m;T++){const N=T*x-c;E.push(N,-b,0),A.push(0,0,1),y.push(T/h),y.push(1-S/f)}}for(let S=0;S<f;S++)for(let b=0;b<h;b++){const T=b+m*S,N=b+m*(S+1),D=b+1+m*(S+1),L=b+1+m*S;M.push(T,N,L),M.push(N,D,L)}this.setIndex(M),this.setAttribute("position",new un(E,3)),this.setAttribute("normal",new un(A,3)),this.setAttribute("uv",new un(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new el(e.width,e.height,e.widthSegments,e.heightSegments)}}class Gp extends kn{constructor(e=1,t=32,s=16,a=0,c=Math.PI*2,u=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:s,phiStart:a,phiLength:c,thetaStart:u,thetaLength:h},t=Math.max(3,Math.floor(t)),s=Math.max(2,Math.floor(s));const f=Math.min(u+h,Math.PI);let m=0;const v=[],x=new ne,g=new ne,M=[],E=[],A=[],y=[];for(let S=0;S<=s;S++){const b=[],T=S/s;let N=0;S===0&&u===0?N=.5/t:S===s&&f===Math.PI&&(N=-.5/t);for(let D=0;D<=t;D++){const L=D/t;x.x=-e*Math.cos(a+L*c)*Math.sin(u+T*h),x.y=e*Math.cos(u+T*h),x.z=e*Math.sin(a+L*c)*Math.sin(u+T*h),E.push(x.x,x.y,x.z),g.copy(x).normalize(),A.push(g.x,g.y,g.z),y.push(L+N,1-T),b.push(m++)}v.push(b)}for(let S=0;S<s;S++)for(let b=0;b<t;b++){const T=v[S][b+1],N=v[S][b],D=v[S+1][b],L=v[S+1][b+1];(S!==0||u>0)&&M.push(T,N,L),(S!==s-1||f<Math.PI)&&M.push(N,D,L)}this.setIndex(M),this.setAttribute("position",new un(E,3)),this.setAttribute("normal",new un(A,3)),this.setAttribute("uv",new un(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Da(i){const e={};for(const t in i){e[t]={};for(const s in i[t]){const a=i[t][s];if(dv(a))a.isRenderTargetTexture?(ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=a.clone();else if(Array.isArray(a))if(dv(a[0])){const c=[];for(let u=0,h=a.length;u<h;u++)c[u]=a[u].clone();e[t][s]=c}else e[t][s]=a.slice();else e[t][s]=a}}return e}function Wn(i){const e={};for(let t=0;t<i.length;t++){const s=Da(i[t]);for(const a in s)e[a]=s[a]}return e}function dv(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Yb(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function z0(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Nt.workingColorSpace}const qo={clone:Da,merge:Wn};var Kb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fn extends Is{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kb,this.fragmentShader=Zb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Da(e.uniforms),this.uniformsGroups=Yb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?t.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[a]={type:"m4",value:u.toArray()}:t.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const a in this.extensions)this.extensions[a]===!0&&(s[a]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class H0 extends Fn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class G0 extends Is{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=np,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ss,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Qb extends Is{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ob,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Jb extends Is{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class V0 extends xn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class e1 extends V0{constructor(e,t,s){super(e,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new yt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Gh=new sn,hv=new ne,fv=new ne;class t1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.mapType=di,this.map=null,this.mapPass=null,this.matrix=new sn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bp,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new on(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,s=this.matrix;hv.setFromMatrixPosition(e.matrixWorld),t.position.copy(hv),fv.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fv),t.updateMatrixWorld(),Gh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gh,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===$o||t.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Gh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Rc=new ne,Nc=new rs,$i=new ne;class W0 extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=Qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Rc,Nc,$i),$i.x===1&&$i.y===1&&$i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rc,Nc,$i.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Rc,Nc,$i),$i.x===1&&$i.y===1&&$i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rc,Nc,$i.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Kr=new ne,pv=new nt,mv=new nt;class Mi extends W0{constructor(e=50,t=1,s=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=sp*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sp*2*Math.atan(Math.tan(Yc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Kr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Kr.x,Kr.y).multiplyScalar(-e/Kr.z),Kr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Kr.x,Kr.y).multiplyScalar(-e/Kr.z)}getViewSize(e,t){return this.getViewBounds(e,pv,mv),t.subVectors(mv,pv)}setViewOffset(e,t,s,a,c,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Yc*.5*this.fov)/this.zoom,s=2*t,a=this.aspect*s,c=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const f=u.fullWidth,m=u.fullHeight;c+=u.offsetX*a/f,t-=u.offsetY*s/m,a*=u.width/f,s*=u.height/m}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+a,t,t-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class mu extends W0{constructor(e=-1,t=1,s=1,a=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=a,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,a,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let c=s-e,u=s+e,h=a+t,f=a-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,u=c+m*this.view.width,h-=v*this.view.offsetY,f=h-v*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class n1 extends t1{constructor(){super(new mu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gv extends V0{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.target=new xn,this.shadow=new n1}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Sa=-90,Ma=1;class i1 extends xn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Mi(Sa,Ma,e,t);a.layers=this.layers,this.add(a);const c=new Mi(Sa,Ma,e,t);c.layers=this.layers,this.add(c);const u=new Mi(Sa,Ma,e,t);u.layers=this.layers,this.add(u);const h=new Mi(Sa,Ma,e,t);h.layers=this.layers,this.add(h);const f=new Mi(Sa,Ma,e,t);f.layers=this.layers,this.add(f);const m=new Mi(Sa,Ma,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,a,c,u,h,f]=t;for(const m of t)this.remove(m);if(e===Qi)s.up.set(0,1,0),s.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===$o)s.up.set(0,-1,0),s.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,f,m,v]=this.children,x=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(s,0,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(s,1,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(s,2,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(s,3,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(s,4,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),s.texture.generateMipmaps=A,e.setRenderTarget(s,5,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(x,g,M),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class r1 extends Mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class s1{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=a1.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function a1(){this._document.hidden===!1&&this.reset()}class xv{constructor(e=1,t=0,s=0){this.radius=e,this.phi=t,this.theta=s}set(e,t,s){return this.radius=e,this.phi=t,this.theta=s,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Rt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,s){return this.radius=Math.sqrt(e*e+t*t+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,s),this.phi=Math.acos(Rt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Kp=class Kp{constructor(e,t,s,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,s,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let s=0;s<4;s++)this.elements[s]=e[s+t];return this}set(e,t,s,a){const c=this.elements;return c[0]=e,c[2]=t,c[1]=s,c[3]=a,this}};Kp.prototype.isMatrix2=!0;let vv=Kp;class o1 extends Xb{constructor(e=10,t=10,s=4473924,a=8947848){s=new yt(s),a=new yt(a);const c=t/2,u=e/t,h=e/2,f=[],m=[];for(let g=0,M=0,E=-h;g<=t;g++,E+=u){f.push(-h,0,E,h,0,E),f.push(E,0,-h,E,0,h);const A=g===c?s:a;A.toArray(m,M),M+=3,A.toArray(m,M),M+=3,A.toArray(m,M),M+=3,A.toArray(m,M),M+=3}const v=new kn;v.setAttribute("position",new un(f,3)),v.setAttribute("color",new un(m,3));const x=new zp({vertexColors:!0,toneMapped:!1});super(v,x),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class l1 extends as{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){ft("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function _v(i,e,t,s){const a=c1(s);switch(t){case C0:return i*e;case R0:return i*e/a.components*a.byteLength;case Pp:return i*e/a.components*a.byteLength;case Ls:return i*e*2/a.components*a.byteLength;case Lp:return i*e*2/a.components*a.byteLength;case A0:return i*e*3/a.components*a.byteLength;case ki:return i*e*4/a.components*a.byteLength;case Dp:return i*e*4/a.components*a.byteLength;case Wc:case Xc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case $c:case qc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Cf:case Rf:return Math.max(i,16)*Math.max(e,8)/4;case wf:case Af:return Math.max(i,8)*Math.max(e,8)/2;case Nf:case Pf:case Df:case If:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Lf:case eu:case Uf:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ff:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Of:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case kf:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case jf:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Bf:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case zf:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Hf:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Gf:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Vf:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Wf:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Xf:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case $f:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case qf:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Yf:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Kf:case Zf:case Qf:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Jf:case ep:return Math.ceil(i/4)*Math.ceil(e/4)*8;case tu:case tp:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function c1(i){switch(i){case di:case E0:return{byteLength:1,components:1};case Wo:case b0:case hi:return{byteLength:2,components:1};case Rp:case Np:return{byteLength:2,components:4};case tr:case Ap:case Zi:return{byteLength:4,components:1};case T0:case w0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sp}}));typeof window<"u"&&(window.__THREE__?ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function X0(){let i=null,e=!1,t=null,s=null;function a(c,u){t(c,u),s=i.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(s=i.requestAnimationFrame(a),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){t=c},setContext:function(c){i=c}}}function u1(i){const e=new WeakMap;function t(h,f){const m=h.array,v=h.usage,x=m.byteLength,g=i.createBuffer();i.bindBuffer(f,g),i.bufferData(f,m,v),h.onUploadCallback();let M;if(m instanceof Float32Array)M=i.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)M=i.HALF_FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?M=i.HALF_FLOAT:M=i.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=i.SHORT;else if(m instanceof Uint32Array)M=i.UNSIGNED_INT;else if(m instanceof Int32Array)M=i.INT;else if(m instanceof Int8Array)M=i.BYTE;else if(m instanceof Uint8Array)M=i.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:g,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:x}}function s(h,f,m){const v=f.array,x=f.updateRanges;if(i.bindBuffer(m,h),x.length===0)i.bufferSubData(m,0,v);else{x.sort((M,E)=>M.start-E.start);let g=0;for(let M=1;M<x.length;M++){const E=x[g],A=x[M];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++g,x[g]=A)}x.length=g+1;for(let M=0,E=x.length;M<E;M++){const A=x[M];i.bufferSubData(m,A.start*v.BYTES_PER_ELEMENT,v,A.start,A.count)}f.clearUpdateRanges()}f.onUploadCallback()}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const f=e.get(h);f&&(i.deleteBuffer(f.buffer),e.delete(h))}function u(h,f){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=e.get(h);(!v||v.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=e.get(h);if(m===void 0)e.set(h,t(h,f));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,h,f),m.version=h.version}}return{get:a,remove:c,update:u}}var d1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,h1=`#ifdef USE_ALPHAHASH
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
#endif`,f1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,p1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,m1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,g1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,x1=`#ifdef USE_AOMAP
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
#endif`,v1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_1=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,y1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,S1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,M1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,E1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,b1=`#ifdef USE_IRIDESCENCE
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
#endif`,T1=`#ifdef USE_BUMPMAP
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
#endif`,w1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,C1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,A1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,R1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,N1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,P1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,L1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,D1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,I1=`#define PI 3.141592653589793
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
} // validated`,U1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,F1=`vec3 transformedNormal = objectNormal;
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
#endif`,O1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,k1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,j1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,B1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,z1="gl_FragColor = linearToOutputTexel( gl_FragColor );",H1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,G1=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,V1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,W1=`#ifdef USE_ENVMAP
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
#endif`,X1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$1=`#ifdef USE_ENVMAP
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
#endif`,q1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Y1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,K1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Z1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Q1=`#ifdef USE_GRADIENTMAP
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
}`,J1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nT=`uniform bool receiveShadow;
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
#endif
#include <lightprobes_pars_fragment>`,iT=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,rT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,aT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,cT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,uT=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,hT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fT=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,pT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_T=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ST=`#if defined( USE_POINTS_UV )
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
#endif`,MT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ET=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,TT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CT=`#ifdef USE_MORPHTARGETS
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
#endif`,AT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,NT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,PT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,IT=`#ifdef USE_NORMALMAP
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
#endif`,UT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,FT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,OT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,BT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,zT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,HT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,GT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,VT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,WT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,XT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$T=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,qT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,YT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,KT=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,ZT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QT=`#ifdef USE_SKINNING
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
#endif`,JT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ew=`#ifdef USE_SKINNING
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
#endif`,tw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sw=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,aw=`#ifdef USE_TRANSMISSION
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
#endif`,ow=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hw=`uniform sampler2D t2D;
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
}`,fw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xw=`#include <common>
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
}`,vw=`#if DEPTH_PACKING == 3200
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
}`,_w=`#define DISTANCE
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
}`,yw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Sw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ew=`uniform float scale;
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
}`,bw=`uniform vec3 diffuse;
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
}`,Tw=`#include <common>
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
}`,ww=`uniform vec3 diffuse;
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
}`,Cw=`#define LAMBERT
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
}`,Aw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Rw=`#define MATCAP
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
}`,Nw=`#define MATCAP
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
}`,Pw=`#define NORMAL
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
}`,Lw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Dw=`#define PHONG
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
}`,Iw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Uw=`#define STANDARD
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
}`,Fw=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,Ow=`#define TOON
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
}`,kw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,jw=`uniform float size;
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
}`,Bw=`uniform vec3 diffuse;
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
}`,zw=`#include <common>
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
}`,Hw=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,Gw=`uniform float rotation;
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
}`,Vw=`uniform vec3 diffuse;
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
}`,Mt={alphahash_fragment:d1,alphahash_pars_fragment:h1,alphamap_fragment:f1,alphamap_pars_fragment:p1,alphatest_fragment:m1,alphatest_pars_fragment:g1,aomap_fragment:x1,aomap_pars_fragment:v1,batching_pars_vertex:_1,batching_vertex:y1,begin_vertex:S1,beginnormal_vertex:M1,bsdfs:E1,iridescence_fragment:b1,bumpmap_pars_fragment:T1,clipping_planes_fragment:w1,clipping_planes_pars_fragment:C1,clipping_planes_pars_vertex:A1,clipping_planes_vertex:R1,color_fragment:N1,color_pars_fragment:P1,color_pars_vertex:L1,color_vertex:D1,common:I1,cube_uv_reflection_fragment:U1,defaultnormal_vertex:F1,displacementmap_pars_vertex:O1,displacementmap_vertex:k1,emissivemap_fragment:j1,emissivemap_pars_fragment:B1,colorspace_fragment:z1,colorspace_pars_fragment:H1,envmap_fragment:G1,envmap_common_pars_fragment:V1,envmap_pars_fragment:W1,envmap_pars_vertex:X1,envmap_physical_pars_fragment:iT,envmap_vertex:$1,fog_vertex:q1,fog_pars_vertex:Y1,fog_fragment:K1,fog_pars_fragment:Z1,gradientmap_pars_fragment:Q1,lightmap_pars_fragment:J1,lights_lambert_fragment:eT,lights_lambert_pars_fragment:tT,lights_pars_begin:nT,lights_toon_fragment:rT,lights_toon_pars_fragment:sT,lights_phong_fragment:aT,lights_phong_pars_fragment:oT,lights_physical_fragment:lT,lights_physical_pars_fragment:cT,lights_fragment_begin:uT,lights_fragment_maps:dT,lights_fragment_end:hT,lightprobes_pars_fragment:fT,logdepthbuf_fragment:pT,logdepthbuf_pars_fragment:mT,logdepthbuf_pars_vertex:gT,logdepthbuf_vertex:xT,map_fragment:vT,map_pars_fragment:_T,map_particle_fragment:yT,map_particle_pars_fragment:ST,metalnessmap_fragment:MT,metalnessmap_pars_fragment:ET,morphinstance_vertex:bT,morphcolor_vertex:TT,morphnormal_vertex:wT,morphtarget_pars_vertex:CT,morphtarget_vertex:AT,normal_fragment_begin:RT,normal_fragment_maps:NT,normal_pars_fragment:PT,normal_pars_vertex:LT,normal_vertex:DT,normalmap_pars_fragment:IT,clearcoat_normal_fragment_begin:UT,clearcoat_normal_fragment_maps:FT,clearcoat_pars_fragment:OT,iridescence_pars_fragment:kT,opaque_fragment:jT,packing:BT,premultiplied_alpha_fragment:zT,project_vertex:HT,dithering_fragment:GT,dithering_pars_fragment:VT,roughnessmap_fragment:WT,roughnessmap_pars_fragment:XT,shadowmap_pars_fragment:$T,shadowmap_pars_vertex:qT,shadowmap_vertex:YT,shadowmask_pars_fragment:KT,skinbase_vertex:ZT,skinning_pars_vertex:QT,skinning_vertex:JT,skinnormal_vertex:ew,specularmap_fragment:tw,specularmap_pars_fragment:nw,tonemapping_fragment:iw,tonemapping_pars_fragment:rw,transmission_fragment:sw,transmission_pars_fragment:aw,uv_pars_fragment:ow,uv_pars_vertex:lw,uv_vertex:cw,worldpos_vertex:uw,background_vert:dw,background_frag:hw,backgroundCube_vert:fw,backgroundCube_frag:pw,cube_vert:mw,cube_frag:gw,depth_vert:xw,depth_frag:vw,distance_vert:_w,distance_frag:yw,equirect_vert:Sw,equirect_frag:Mw,linedashed_vert:Ew,linedashed_frag:bw,meshbasic_vert:Tw,meshbasic_frag:ww,meshlambert_vert:Cw,meshlambert_frag:Aw,meshmatcap_vert:Rw,meshmatcap_frag:Nw,meshnormal_vert:Pw,meshnormal_frag:Lw,meshphong_vert:Dw,meshphong_frag:Iw,meshphysical_vert:Uw,meshphysical_frag:Fw,meshtoon_vert:Ow,meshtoon_frag:kw,points_vert:jw,points_frag:Bw,shadow_vert:zw,shadow_frag:Hw,sprite_vert:Gw,sprite_frag:Vw},Be={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _t}},envmap:{envMap:{value:null},envMapRotation:{value:new _t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _t},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ne},probesMax:{value:new ne},probesResolution:{value:new ne}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0},uvTransform:{value:new _t}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}}},Yi={basic:{uniforms:Wn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:Mt.meshbasic_vert,fragmentShader:Mt.meshbasic_frag},lambert:{uniforms:Wn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new yt(0)},envMapIntensity:{value:1}}]),vertexShader:Mt.meshlambert_vert,fragmentShader:Mt.meshlambert_frag},phong:{uniforms:Wn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphong_vert,fragmentShader:Mt.meshphong_frag},standard:{uniforms:Wn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag},toon:{uniforms:Wn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new yt(0)}}]),vertexShader:Mt.meshtoon_vert,fragmentShader:Mt.meshtoon_frag},matcap:{uniforms:Wn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:Mt.meshmatcap_vert,fragmentShader:Mt.meshmatcap_frag},points:{uniforms:Wn([Be.points,Be.fog]),vertexShader:Mt.points_vert,fragmentShader:Mt.points_frag},dashed:{uniforms:Wn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mt.linedashed_vert,fragmentShader:Mt.linedashed_frag},depth:{uniforms:Wn([Be.common,Be.displacementmap]),vertexShader:Mt.depth_vert,fragmentShader:Mt.depth_frag},normal:{uniforms:Wn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:Mt.meshnormal_vert,fragmentShader:Mt.meshnormal_frag},sprite:{uniforms:Wn([Be.sprite,Be.fog]),vertexShader:Mt.sprite_vert,fragmentShader:Mt.sprite_frag},background:{uniforms:{uvTransform:{value:new _t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Mt.background_vert,fragmentShader:Mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _t}},vertexShader:Mt.backgroundCube_vert,fragmentShader:Mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mt.cube_vert,fragmentShader:Mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mt.equirect_vert,fragmentShader:Mt.equirect_frag},distance:{uniforms:Wn([Be.common,Be.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mt.distance_vert,fragmentShader:Mt.distance_frag},shadow:{uniforms:Wn([Be.lights,Be.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:Mt.shadow_vert,fragmentShader:Mt.shadow_frag}};Yi.physical={uniforms:Wn([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _t},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _t},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _t},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _t},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _t},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _t}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag};const Pc={r:0,b:0,g:0},Ww=new sn,$0=new _t;$0.set(-1,0,0,0,1,0,0,0,1);function Xw(i,e,t,s,a,c){const u=new yt(0);let h=a===!0?0:1,f,m,v=null,x=0,g=null;function M(b){let T=b.isScene===!0?b.background:null;if(T&&T.isTexture){const N=b.backgroundBlurriness>0;T=e.get(T,N)}return T}function E(b){let T=!1;const N=M(b);N===null?y(u,h):N&&N.isColor&&(y(N,1),T=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?t.buffers.color.setClear(0,0,0,1,c):D==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,c),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function A(b,T){const N=M(T);N&&(N.isCubeTexture||N.mapping===fu)?(m===void 0&&(m=new wi(new ja(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:Da(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(D,L,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),m.material.uniforms.envMap.value=N,m.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(Ww.makeRotationFromEuler(T.backgroundRotation)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply($0),m.material.toneMapped=Nt.getTransfer(N.colorSpace)!==kt,(v!==N||x!==N.version||g!==i.toneMapping)&&(m.material.needsUpdate=!0,v=N,x=N.version,g=i.toneMapping),m.layers.enableAll(),b.unshift(m,m.geometry,m.material,0,0,null)):N&&N.isTexture&&(f===void 0&&(f=new wi(new el(2,2),new Fn({name:"BackgroundMaterial",uniforms:Da(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:is,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(f)),f.material.uniforms.t2D.value=N,f.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,f.material.toneMapped=Nt.getTransfer(N.colorSpace)!==kt,N.matrixAutoUpdate===!0&&N.updateMatrix(),f.material.uniforms.uvTransform.value.copy(N.matrix),(v!==N||x!==N.version||g!==i.toneMapping)&&(f.material.needsUpdate=!0,v=N,x=N.version,g=i.toneMapping),f.layers.enableAll(),b.unshift(f,f.geometry,f.material,0,0,null))}function y(b,T){b.getRGB(Pc,z0(i)),t.buffers.color.setClear(Pc.r,Pc.g,Pc.b,T,c)}function S(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return u},setClearColor:function(b,T=1){u.set(b),h=T,y(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(b){h=b,y(u,h)},render:E,addToRenderList:A,dispose:S}}function $w(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),s={},a=g(null);let c=a,u=!1;function h(H,ee,G,Q,V){let k=!1;const W=x(H,Q,G,ee);c!==W&&(c=W,m(c.object)),k=M(H,Q,G,V),k&&E(H,Q,G,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(k||u)&&(u=!1,N(H,ee,G,Q),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function f(){return i.createVertexArray()}function m(H){return i.bindVertexArray(H)}function v(H){return i.deleteVertexArray(H)}function x(H,ee,G,Q){const V=Q.wireframe===!0;let k=s[ee.id];k===void 0&&(k={},s[ee.id]=k);const W=H.isInstancedMesh===!0?H.id:0;let $=k[W];$===void 0&&($={},k[W]=$);let le=$[G.id];le===void 0&&(le={},$[G.id]=le);let se=le[V];return se===void 0&&(se=g(f()),le[V]=se),se}function g(H){const ee=[],G=[],Q=[];for(let V=0;V<t;V++)ee[V]=0,G[V]=0,Q[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ee,enabledAttributes:G,attributeDivisors:Q,object:H,attributes:{},index:null}}function M(H,ee,G,Q){const V=c.attributes,k=ee.attributes;let W=0;const $=G.getAttributes();for(const le in $)if($[le].location>=0){const B=V[le];let re=k[le];if(re===void 0&&(le==="instanceMatrix"&&H.instanceMatrix&&(re=H.instanceMatrix),le==="instanceColor"&&H.instanceColor&&(re=H.instanceColor)),B===void 0||B.attribute!==re||re&&B.data!==re.data)return!0;W++}return c.attributesNum!==W||c.index!==Q}function E(H,ee,G,Q){const V={},k=ee.attributes;let W=0;const $=G.getAttributes();for(const le in $)if($[le].location>=0){let B=k[le];B===void 0&&(le==="instanceMatrix"&&H.instanceMatrix&&(B=H.instanceMatrix),le==="instanceColor"&&H.instanceColor&&(B=H.instanceColor));const re={};re.attribute=B,B&&B.data&&(re.data=B.data),V[le]=re,W++}c.attributes=V,c.attributesNum=W,c.index=Q}function A(){const H=c.newAttributes;for(let ee=0,G=H.length;ee<G;ee++)H[ee]=0}function y(H){S(H,0)}function S(H,ee){const G=c.newAttributes,Q=c.enabledAttributes,V=c.attributeDivisors;G[H]=1,Q[H]===0&&(i.enableVertexAttribArray(H),Q[H]=1),V[H]!==ee&&(i.vertexAttribDivisor(H,ee),V[H]=ee)}function b(){const H=c.newAttributes,ee=c.enabledAttributes;for(let G=0,Q=ee.length;G<Q;G++)ee[G]!==H[G]&&(i.disableVertexAttribArray(G),ee[G]=0)}function T(H,ee,G,Q,V,k,W){W===!0?i.vertexAttribIPointer(H,ee,G,V,k):i.vertexAttribPointer(H,ee,G,Q,V,k)}function N(H,ee,G,Q){A();const V=Q.attributes,k=G.getAttributes(),W=ee.defaultAttributeValues;for(const $ in k){const le=k[$];if(le.location>=0){let se=V[$];if(se===void 0&&($==="instanceMatrix"&&H.instanceMatrix&&(se=H.instanceMatrix),$==="instanceColor"&&H.instanceColor&&(se=H.instanceColor)),se!==void 0){const B=se.normalized,re=se.itemSize,Fe=e.get(se);if(Fe===void 0)continue;const Te=Fe.buffer,Ae=Fe.type,X=Fe.bytesPerElement,me=Ae===i.INT||Ae===i.UNSIGNED_INT||se.gpuType===Ap;if(se.isInterleavedBufferAttribute){const fe=se.data,we=fe.stride,Oe=se.offset;if(fe.isInstancedInterleavedBuffer){for(let et=0;et<le.locationSize;et++)S(le.location+et,fe.meshPerAttribute);H.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let et=0;et<le.locationSize;et++)y(le.location+et);i.bindBuffer(i.ARRAY_BUFFER,Te);for(let et=0;et<le.locationSize;et++)T(le.location+et,re/le.locationSize,Ae,B,we*X,(Oe+re/le.locationSize*et)*X,me)}else{if(se.isInstancedBufferAttribute){for(let fe=0;fe<le.locationSize;fe++)S(le.location+fe,se.meshPerAttribute);H.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let fe=0;fe<le.locationSize;fe++)y(le.location+fe);i.bindBuffer(i.ARRAY_BUFFER,Te);for(let fe=0;fe<le.locationSize;fe++)T(le.location+fe,re/le.locationSize,Ae,B,re*X,re/le.locationSize*fe*X,me)}}else if(W!==void 0){const B=W[$];if(B!==void 0)switch(B.length){case 2:i.vertexAttrib2fv(le.location,B);break;case 3:i.vertexAttrib3fv(le.location,B);break;case 4:i.vertexAttrib4fv(le.location,B);break;default:i.vertexAttrib1fv(le.location,B)}}}}b()}function D(){U();for(const H in s){const ee=s[H];for(const G in ee){const Q=ee[G];for(const V in Q){const k=Q[V];for(const W in k)v(k[W].object),delete k[W];delete Q[V]}}delete s[H]}}function L(H){if(s[H.id]===void 0)return;const ee=s[H.id];for(const G in ee){const Q=ee[G];for(const V in Q){const k=Q[V];for(const W in k)v(k[W].object),delete k[W];delete Q[V]}}delete s[H.id]}function O(H){for(const ee in s){const G=s[ee];for(const Q in G){const V=G[Q];if(V[H.id]===void 0)continue;const k=V[H.id];for(const W in k)v(k[W].object),delete k[W];delete V[H.id]}}}function w(H){for(const ee in s){const G=s[ee],Q=H.isInstancedMesh===!0?H.id:0,V=G[Q];if(V!==void 0){for(const k in V){const W=V[k];for(const $ in W)v(W[$].object),delete W[$];delete V[k]}delete G[Q],Object.keys(G).length===0&&delete s[ee]}}}function U(){Y(),u=!0,c!==a&&(c=a,m(c.object))}function Y(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:h,reset:U,resetDefaultState:Y,dispose:D,releaseStatesOfGeometry:L,releaseStatesOfObject:w,releaseStatesOfProgram:O,initAttributes:A,enableAttribute:y,disableUnusedAttributes:b}}function qw(i,e,t){let s;function a(f){s=f}function c(f,m){i.drawArrays(s,f,m),t.update(m,s,1)}function u(f,m,v){v!==0&&(i.drawArraysInstanced(s,f,m,v),t.update(m,s,v))}function h(f,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,f,0,m,0,v);let g=0;for(let M=0;M<v;M++)g+=m[M];t.update(g,s,1)}this.setMode=a,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}function Yw(i,e,t,s){let a;function c(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");a=i.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(O){return!(O!==ki&&s.convert(O)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(O){const w=O===hi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==di&&s.convert(O)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Zi&&!w)}function f(O){if(O==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const v=f(m);v!==m&&(ft("WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const x=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&ft("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),S=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),N=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=i.getParameter(i.MAX_SAMPLES),L=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:f,textureFormatReadable:u,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:N,maxSamples:D,samples:L}}function Kw(i){const e=this;let t=null,s=0,a=!1,c=!1;const u=new Jr,h=new _t,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const M=x.length!==0||g||s!==0||a;return a=g,s=x.length,M},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,g){t=v(x,g,0)},this.setState=function(x,g,M){const E=x.clippingPlanes,A=x.clipIntersection,y=x.clipShadows,S=i.get(x);if(!a||E===null||E.length===0||c&&!y)c?v(null):m();else{const b=c?0:s,T=b*4;let N=S.clippingState||null;f.value=N,N=v(E,g,T,M);for(let D=0;D!==T;++D)N[D]=t[D];S.clippingState=N,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=b}};function m(){f.value!==t&&(f.value=t,f.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(x,g,M,E){const A=x!==null?x.length:0;let y=null;if(A!==0){if(y=f.value,E!==!0||y===null){const S=M+A*4,b=g.matrixWorldInverse;h.getNormalMatrix(b),(y===null||y.length<S)&&(y=new Float32Array(S));for(let T=0,N=M;T!==A;++T,N+=4)u.copy(x[T]).applyMatrix4(b,h),u.normal.toArray(y,N),y[N+3]=u.constant}f.value=y,f.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,y}}const ts=4,yv=[.125,.215,.35,.446,.526,.582],Cs=20,Zw=256,Uo=new mu,Sv=new yt;let Vh=null,Wh=0,Xh=0,$h=!1;const Qw=new ne;class Mv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,s=.1,a=100,c={}){const{size:u=256,position:h=Qw}=c;Vh=this._renderer.getRenderTarget(),Wh=this._renderer.getActiveCubeFace(),Xh=this._renderer.getActiveMipmapLevel(),$h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,s,a,f,h),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Vh,Wh,Xh),this._renderer.xr.enabled=$h,e.scissorTest=!1,Ea(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ps||e.mapping===Pa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vh=this._renderer.getRenderTarget(),Wh=this._renderer.getActiveCubeFace(),Xh=this._renderer.getActiveMipmapLevel(),$h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:hi,format:ki,colorSpace:nu,depthBuffer:!1},a=Ev(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ev(e,t,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Jw(c)),this._blurMaterial=tC(c,e,t),this._ggxMaterial=eC(c,e,t)}return a}_compileMaterial(e){const t=new wi(new kn,e);this._renderer.compile(t,Uo)}_sceneToCubeUV(e,t,s,a,c){const f=new Mi(90,1,t,s),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,M=x.toneMapping;x.getClearColor(Sv),x.toneMapping=er,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(a),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new wi(new ja,new jp({name:"PMREM.Background",side:ni,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,y=A.material;let S=!1;const b=e.background;b?b.isColor&&(y.color.copy(b),e.background=null,S=!0):(y.color.copy(Sv),S=!0);for(let T=0;T<6;T++){const N=T%3;N===0?(f.up.set(0,m[T],0),f.position.set(c.x,c.y,c.z),f.lookAt(c.x+v[T],c.y,c.z)):N===1?(f.up.set(0,0,m[T]),f.position.set(c.x,c.y,c.z),f.lookAt(c.x,c.y+v[T],c.z)):(f.up.set(0,m[T],0),f.position.set(c.x,c.y,c.z),f.lookAt(c.x,c.y,c.z+v[T]));const D=this._cubeSize;Ea(a,N*D,T>2?D:0,D,D),x.setRenderTarget(a),S&&x.render(A,f),x.render(e,f)}x.toneMapping=M,x.autoClear=g,e.background=b}_textureToCubeUV(e,t){const s=this._renderer,a=e.mapping===Ps||e.mapping===Pa;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bv());const c=a?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const h=c.uniforms;h.envMap.value=e;const f=this._cubeSize;Ea(t,0,0,3*f,2*f),s.setRenderTarget(t),s.render(u,Uo)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let c=1;c<a;c++)this._applyGGXFilter(e,c-1,c);t.autoClear=s}_applyGGXFilter(e,t,s){const a=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,h=this._lodMeshes[s];h.material=u;const f=u.uniforms,m=s/(this._lodMeshes.length-1),v=t/(this._lodMeshes.length-1),x=Math.sqrt(m*m-v*v),g=0+m*1.25,M=x*g,{_lodMax:E}=this,A=this._sizeLods[s],y=3*A*(s>E-ts?s-E+ts:0),S=4*(this._cubeSize-A);f.envMap.value=e.texture,f.roughness.value=M,f.mipInt.value=E-t,Ea(c,y,S,3*A,2*A),a.setRenderTarget(c),a.render(h,Uo),f.envMap.value=c.texture,f.roughness.value=0,f.mipInt.value=E-s,Ea(e,y,S,3*A,2*A),a.setRenderTarget(e),a.render(h,Uo)}_blur(e,t,s,a,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,s,a,"latitudinal",c),this._halfBlur(u,e,s,s,a,"longitudinal",c)}_halfBlur(e,t,s,a,c,u,h){const f=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Dt("blur direction must be either latitudinal or longitudinal!");const v=3,x=this._lodMeshes[a];x.material=m;const g=m.uniforms,M=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Cs-1),A=c/E,y=isFinite(c)?1+Math.floor(v*A):Cs;y>Cs&&ft(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Cs}`);const S=[];let b=0;for(let O=0;O<Cs;++O){const w=O/A,U=Math.exp(-w*w/2);S.push(U),O===0?b+=U:O<y&&(b+=2*U)}for(let O=0;O<S.length;O++)S[O]=S[O]/b;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=S,g.latitudinal.value=u==="latitudinal",h&&(g.poleAxis.value=h);const{_lodMax:T}=this;g.dTheta.value=E,g.mipInt.value=T-s;const N=this._sizeLods[a],D=3*N*(a>T-ts?a-T+ts:0),L=4*(this._cubeSize-N);Ea(t,D,L,3*N,2*N),f.setRenderTarget(t),f.render(x,Uo)}}function Jw(i){const e=[],t=[],s=[];let a=i;const c=i-ts+1+yv.length;for(let u=0;u<c;u++){const h=Math.pow(2,a);e.push(h);let f=1/h;u>i-ts?f=yv[u-i+ts-1]:u===0&&(f=0),t.push(f);const m=1/(h-2),v=-m,x=1+m,g=[v,v,x,v,x,x,v,v,x,x,v,x],M=6,E=6,A=3,y=2,S=1,b=new Float32Array(A*E*M),T=new Float32Array(y*E*M),N=new Float32Array(S*E*M);for(let L=0;L<M;L++){const O=L%3*2/3-1,w=L>2?0:-1,U=[O,w,0,O+2/3,w,0,O+2/3,w+1,0,O,w,0,O+2/3,w+1,0,O,w+1,0];b.set(U,A*E*L),T.set(g,y*E*L);const Y=[L,L,L,L,L,L];N.set(Y,S*E*L)}const D=new kn;D.setAttribute("position",new ji(b,A)),D.setAttribute("uv",new ji(T,y)),D.setAttribute("faceIndex",new ji(N,S)),s.push(new wi(D,null)),a>ts&&a--}return{lodMeshes:s,sizeLods:e,sigmas:t}}function Ev(i,e,t){const s=new ii(i,e,t);return s.texture.mapping=fu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Ea(i,e,t,s,a){i.viewport.set(e,t,s,a),i.scissor.set(e,t,s,a)}function eC(i,e,t){return new Fn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Zw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function tC(i,e,t){const s=new Float32Array(Cs),a=new ne(0,1,0);return new Fn({name:"SphericalGaussianBlur",defines:{n:Cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:gu(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function bv(){return new Fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gu(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Tv(){return new Fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function gu(){return`

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
	`}class q0 extends ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},a=[s,s,s,s,s,s];this.texture=new j0(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new ja(5,5,5),c=new Fn({name:"CubemapFromEquirect",uniforms:Da(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ni,blending:Ji});c.uniforms.tEquirect.value=t;const u=new wi(a,c),h=t.minFilter;return t.minFilter===As&&(t.minFilter=Un),new i1(1,10,this).update(e,u),t.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,s=!0,a=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,s,a);e.setRenderTarget(c)}}function nC(i){let e=new WeakMap,t=new WeakMap,s=null;function a(g,M=!1){return g==null?null:M?u(g):c(g)}function c(g){if(g&&g.isTexture){const M=g.mapping;if(M===mh||M===gh)if(e.has(g)){const E=e.get(g).texture;return h(E,g.mapping)}else{const E=g.image;if(E&&E.height>0){const A=new q0(E.height);return A.fromEquirectangularTexture(i,g),e.set(g,A),g.addEventListener("dispose",m),h(A.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const M=g.mapping,E=M===mh||M===gh,A=M===Ps||M===Pa;if(E||A){let y=t.get(g);const S=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return s===null&&(s=new Mv(i)),y=E?s.fromEquirectangular(g,y):s.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,t.set(g,y),y.texture;if(y!==void 0)return y.texture;{const b=g.image;return E&&b&&b.height>0||A&&b&&f(b)?(s===null&&(s=new Mv(i)),y=E?s.fromEquirectangular(g):s.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,t.set(g,y),g.addEventListener("dispose",v),y.texture):null}}}return g}function h(g,M){return M===mh?g.mapping=Ps:M===gh&&(g.mapping=Pa),g}function f(g){let M=0;const E=6;for(let A=0;A<E;A++)g[A]!==void 0&&M++;return M===E}function m(g){const M=g.target;M.removeEventListener("dispose",m);const E=e.get(M);E!==void 0&&(e.delete(M),E.dispose())}function v(g){const M=g.target;M.removeEventListener("dispose",v);const E=t.get(M);E!==void 0&&(t.delete(M),E.dispose())}function x(){e=new WeakMap,t=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:a,dispose:x}}function iC(i){const e={};function t(s){if(e[s]!==void 0)return e[s];const a=i.getExtension(s);return e[s]=a,a}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const a=t(s);return a===null&&rp("WebGLRenderer: "+s+" extension not supported."),a}}}function rC(i,e,t,s){const a={},c=new WeakMap;function u(x){const g=x.target;g.index!==null&&e.remove(g.index);for(const E in g.attributes)e.remove(g.attributes[E]);g.removeEventListener("dispose",u),delete a[g.id];const M=c.get(g);M&&(e.remove(M),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function h(x,g){return a[g.id]===!0||(g.addEventListener("dispose",u),a[g.id]=!0,t.memory.geometries++),g}function f(x){const g=x.attributes;for(const M in g)e.update(g[M],i.ARRAY_BUFFER)}function m(x){const g=[],M=x.index,E=x.attributes.position;let A=0;if(E===void 0)return;if(M!==null){const b=M.array;A=M.version;for(let T=0,N=b.length;T<N;T+=3){const D=b[T+0],L=b[T+1],O=b[T+2];g.push(D,L,L,O,O,D)}}else{const b=E.array;A=E.version;for(let T=0,N=b.length/3-1;T<N;T+=3){const D=T+0,L=T+1,O=T+2;g.push(D,L,L,O,O,D)}}const y=new(E.count>=65535?U0:I0)(g,1);y.version=A;const S=c.get(x);S&&e.remove(S),c.set(x,y)}function v(x){const g=c.get(x);if(g){const M=x.index;M!==null&&g.version<M.version&&m(x)}else m(x);return c.get(x)}return{get:h,update:f,getWireframeAttribute:v}}function sC(i,e,t){let s;function a(x){s=x}let c,u;function h(x){c=x.type,u=x.bytesPerElement}function f(x,g){i.drawElements(s,g,c,x*u),t.update(g,s,1)}function m(x,g,M){M!==0&&(i.drawElementsInstanced(s,g,c,x*u,M),t.update(g,s,M))}function v(x,g,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,c,x,0,M);let A=0;for(let y=0;y<M;y++)A+=g[y];t.update(A,s,1)}this.setMode=a,this.setIndex=h,this.render=f,this.renderInstances=m,this.renderMultiDraw=v}function aC(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,u,h){switch(t.calls++,u){case i.TRIANGLES:t.triangles+=h*(c/3);break;case i.LINES:t.lines+=h*(c/2);break;case i.LINE_STRIP:t.lines+=h*(c-1);break;case i.LINE_LOOP:t.lines+=h*c;break;case i.POINTS:t.points+=h*c;break;default:Dt("WebGLInfo: Unknown draw mode:",u);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:s}}function oC(i,e,t){const s=new WeakMap,a=new on;function c(u,h,f){const m=u.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=v!==void 0?v.length:0;let g=s.get(h);if(g===void 0||g.count!==x){let Y=function(){w.dispose(),s.delete(h),h.removeEventListener("dispose",Y)};var M=Y;g!==void 0&&g.texture.dispose();const E=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],T=h.morphAttributes.color||[];let N=0;E===!0&&(N=1),A===!0&&(N=2),y===!0&&(N=3);let D=h.attributes.position.count*N,L=1;D>e.maxTextureSize&&(L=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const O=new Float32Array(D*L*4*x),w=new P0(O,D,L,x);w.type=Zi,w.needsUpdate=!0;const U=N*4;for(let H=0;H<x;H++){const ee=S[H],G=b[H],Q=T[H],V=D*L*4*H;for(let k=0;k<ee.count;k++){const W=k*U;E===!0&&(a.fromBufferAttribute(ee,k),O[V+W+0]=a.x,O[V+W+1]=a.y,O[V+W+2]=a.z,O[V+W+3]=0),A===!0&&(a.fromBufferAttribute(G,k),O[V+W+4]=a.x,O[V+W+5]=a.y,O[V+W+6]=a.z,O[V+W+7]=0),y===!0&&(a.fromBufferAttribute(Q,k),O[V+W+8]=a.x,O[V+W+9]=a.y,O[V+W+10]=a.z,O[V+W+11]=Q.itemSize===4?a.w:1)}}g={count:x,texture:w,size:new nt(D,L)},s.set(h,g),h.addEventListener("dispose",Y)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)f.getUniforms().setValue(i,"morphTexture",u.morphTexture,t);else{let E=0;for(let y=0;y<m.length;y++)E+=m[y];const A=h.morphTargetsRelative?1:1-E;f.getUniforms().setValue(i,"morphTargetBaseInfluence",A),f.getUniforms().setValue(i,"morphTargetInfluences",m)}f.getUniforms().setValue(i,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}return{update:c}}function lC(i,e,t,s,a){let c=new WeakMap;function u(m){const v=a.render.frame,x=m.geometry,g=e.get(m,x);if(c.get(g)!==v&&(e.update(g),c.set(g,v)),m.isInstancedMesh&&(m.hasEventListener("dispose",f)===!1&&m.addEventListener("dispose",f),c.get(m)!==v&&(t.update(m.instanceMatrix,i.ARRAY_BUFFER),m.instanceColor!==null&&t.update(m.instanceColor,i.ARRAY_BUFFER),c.set(m,v))),m.isSkinnedMesh){const M=m.skeleton;c.get(M)!==v&&(M.update(),c.set(M,v))}return g}function h(){c=new WeakMap}function f(m){const v=m.target;v.removeEventListener("dispose",f),s.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:u,dispose:h}}const cC={[Mp]:"LINEAR_TONE_MAPPING",[Ep]:"REINHARD_TONE_MAPPING",[bp]:"CINEON_TONE_MAPPING",[hu]:"ACES_FILMIC_TONE_MAPPING",[wp]:"AGX_TONE_MAPPING",[Cp]:"NEUTRAL_TONE_MAPPING",[Tp]:"CUSTOM_TONE_MAPPING"};function uC(i,e,t,s,a){const c=new ii(e,t,{type:i,depthBuffer:s,stencilBuffer:a,depthTexture:s?new La(e,t):void 0}),u=new ii(e,t,{type:hi,depthBuffer:!1,stencilBuffer:!1}),h=new kn;h.setAttribute("position",new un([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new un([0,2,0,0,2,0],2));const f=new H0({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),m=new wi(h,f),v=new mu(-1,1,1,-1,0,1);let x=null,g=null,M=!1,E,A=null,y=[],S=!1;this.setSize=function(b,T){c.setSize(b,T),u.setSize(b,T);for(let N=0;N<y.length;N++){const D=y[N];D.setSize&&D.setSize(b,T)}},this.setEffects=function(b){y=b,S=y.length>0&&y[0].isRenderPass===!0;const T=c.width,N=c.height;for(let D=0;D<y.length;D++){const L=y[D];L.setSize&&L.setSize(T,N)}},this.begin=function(b,T){if(M||b.toneMapping===er&&y.length===0)return!1;if(A=T,T!==null){const N=T.width,D=T.height;(c.width!==N||c.height!==D)&&this.setSize(N,D)}return S===!1&&b.setRenderTarget(c),E=b.toneMapping,b.toneMapping=er,!0},this.hasRenderPass=function(){return S},this.end=function(b,T){b.toneMapping=E,M=!0;let N=c,D=u;for(let L=0;L<y.length;L++){const O=y[L];if(O.enabled!==!1&&(O.render(b,D,N,T),O.needsSwap!==!1)){const w=N;N=D,D=w}}if(x!==b.outputColorSpace||g!==b.toneMapping){x=b.outputColorSpace,g=b.toneMapping,f.defines={},Nt.getTransfer(x)===kt&&(f.defines.SRGB_TRANSFER="");const L=cC[g];L&&(f.defines[L]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=N.texture,b.setRenderTarget(A),b.render(m,v),A=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),u.dispose(),h.dispose(),f.dispose()}}const Y0=new On,ap=new La(1,1),K0=new P0,Z0=new wb,Q0=new j0,wv=[],Cv=[],Av=new Float32Array(16),Rv=new Float32Array(9),Nv=new Float32Array(4);function Ba(i,e,t){const s=i[0];if(s<=0||s>0)return i;const a=e*t;let c=wv[a];if(c===void 0&&(c=new Float32Array(a),wv[a]=c),e!==0){s.toArray(c,0);for(let u=1,h=0;u!==e;++u)h+=t,i[u].toArray(c,h)}return c}function vn(i,e){if(i.length!==e.length)return!1;for(let t=0,s=i.length;t<s;t++)if(i[t]!==e[t])return!1;return!0}function _n(i,e){for(let t=0,s=e.length;t<s;t++)i[t]=e[t]}function xu(i,e){let t=Cv[e];t===void 0&&(t=new Int32Array(e),Cv[e]=t);for(let s=0;s!==e;++s)t[s]=i.allocateTextureUnit();return t}function dC(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function hC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;i.uniform2fv(this.addr,e),_n(t,e)}}function fC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vn(t,e))return;i.uniform3fv(this.addr,e),_n(t,e)}}function pC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;i.uniform4fv(this.addr,e),_n(t,e)}}function mC(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(vn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),_n(t,e)}else{if(vn(t,s))return;Nv.set(s),i.uniformMatrix2fv(this.addr,!1,Nv),_n(t,s)}}function gC(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(vn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),_n(t,e)}else{if(vn(t,s))return;Rv.set(s),i.uniformMatrix3fv(this.addr,!1,Rv),_n(t,s)}}function xC(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(vn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),_n(t,e)}else{if(vn(t,s))return;Av.set(s),i.uniformMatrix4fv(this.addr,!1,Av),_n(t,s)}}function vC(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function _C(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;i.uniform2iv(this.addr,e),_n(t,e)}}function yC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;i.uniform3iv(this.addr,e),_n(t,e)}}function SC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;i.uniform4iv(this.addr,e),_n(t,e)}}function MC(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function EC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;i.uniform2uiv(this.addr,e),_n(t,e)}}function bC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;i.uniform3uiv(this.addr,e),_n(t,e)}}function TC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;i.uniform4uiv(this.addr,e),_n(t,e)}}function wC(i,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(i.uniform1i(this.addr,a),s[0]=a);let c;this.type===i.SAMPLER_2D_SHADOW?(ap.compareFunction=t.isReversedDepthBuffer()?Up:Ip,c=ap):c=Y0,t.setTexture2D(e||c,a)}function CC(i,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(i.uniform1i(this.addr,a),s[0]=a),t.setTexture3D(e||Z0,a)}function AC(i,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(i.uniform1i(this.addr,a),s[0]=a),t.setTextureCube(e||Q0,a)}function RC(i,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(i.uniform1i(this.addr,a),s[0]=a),t.setTexture2DArray(e||K0,a)}function NC(i){switch(i){case 5126:return dC;case 35664:return hC;case 35665:return fC;case 35666:return pC;case 35674:return mC;case 35675:return gC;case 35676:return xC;case 5124:case 35670:return vC;case 35667:case 35671:return _C;case 35668:case 35672:return yC;case 35669:case 35673:return SC;case 5125:return MC;case 36294:return EC;case 36295:return bC;case 36296:return TC;case 35678:case 36198:case 36298:case 36306:case 35682:return wC;case 35679:case 36299:case 36307:return CC;case 35680:case 36300:case 36308:case 36293:return AC;case 36289:case 36303:case 36311:case 36292:return RC}}function PC(i,e){i.uniform1fv(this.addr,e)}function LC(i,e){const t=Ba(e,this.size,2);i.uniform2fv(this.addr,t)}function DC(i,e){const t=Ba(e,this.size,3);i.uniform3fv(this.addr,t)}function IC(i,e){const t=Ba(e,this.size,4);i.uniform4fv(this.addr,t)}function UC(i,e){const t=Ba(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function FC(i,e){const t=Ba(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function OC(i,e){const t=Ba(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function kC(i,e){i.uniform1iv(this.addr,e)}function jC(i,e){i.uniform2iv(this.addr,e)}function BC(i,e){i.uniform3iv(this.addr,e)}function zC(i,e){i.uniform4iv(this.addr,e)}function HC(i,e){i.uniform1uiv(this.addr,e)}function GC(i,e){i.uniform2uiv(this.addr,e)}function VC(i,e){i.uniform3uiv(this.addr,e)}function WC(i,e){i.uniform4uiv(this.addr,e)}function XC(i,e,t){const s=this.cache,a=e.length,c=xu(t,a);vn(s,c)||(i.uniform1iv(this.addr,c),_n(s,c));let u;this.type===i.SAMPLER_2D_SHADOW?u=ap:u=Y0;for(let h=0;h!==a;++h)t.setTexture2D(e[h]||u,c[h])}function $C(i,e,t){const s=this.cache,a=e.length,c=xu(t,a);vn(s,c)||(i.uniform1iv(this.addr,c),_n(s,c));for(let u=0;u!==a;++u)t.setTexture3D(e[u]||Z0,c[u])}function qC(i,e,t){const s=this.cache,a=e.length,c=xu(t,a);vn(s,c)||(i.uniform1iv(this.addr,c),_n(s,c));for(let u=0;u!==a;++u)t.setTextureCube(e[u]||Q0,c[u])}function YC(i,e,t){const s=this.cache,a=e.length,c=xu(t,a);vn(s,c)||(i.uniform1iv(this.addr,c),_n(s,c));for(let u=0;u!==a;++u)t.setTexture2DArray(e[u]||K0,c[u])}function KC(i){switch(i){case 5126:return PC;case 35664:return LC;case 35665:return DC;case 35666:return IC;case 35674:return UC;case 35675:return FC;case 35676:return OC;case 5124:case 35670:return kC;case 35667:case 35671:return jC;case 35668:case 35672:return BC;case 35669:case 35673:return zC;case 5125:return HC;case 36294:return GC;case 36295:return VC;case 36296:return WC;case 35678:case 36198:case 36298:case 36306:case 35682:return XC;case 35679:case 36299:case 36307:return $C;case 35680:case 36300:case 36308:case 36293:return qC;case 36289:case 36303:case 36311:case 36292:return YC}}class ZC{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=NC(t.type)}}class QC{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=KC(t.type)}}class JC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const a=this.seq;for(let c=0,u=a.length;c!==u;++c){const h=a[c];h.setValue(e,t[h.id],s)}}}const qh=/(\w+)(\])?(\[|\.)?/g;function Pv(i,e){i.seq.push(e),i.map[e.id]=e}function eA(i,e,t){const s=i.name,a=s.length;for(qh.lastIndex=0;;){const c=qh.exec(s),u=qh.lastIndex;let h=c[1];const f=c[2]==="]",m=c[3];if(f&&(h=h|0),m===void 0||m==="["&&u+2===a){Pv(t,m===void 0?new ZC(h,i,e):new QC(h,i,e));break}else{let x=t.map[h];x===void 0&&(x=new JC(h),Pv(t,x)),t=x}}}class Kc{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<s;++u){const h=e.getActiveUniform(t,u),f=e.getUniformLocation(t,h.name);eA(h,f,this)}const a=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(u):c.push(u);a.length>0&&(this.seq=a.concat(c))}setValue(e,t,s,a){const c=this.map[t];c!==void 0&&c.setValue(e,s,a)}setOptional(e,t,s){const a=t[s];a!==void 0&&this.setValue(e,s,a)}static upload(e,t,s,a){for(let c=0,u=t.length;c!==u;++c){const h=t[c],f=s[h.id];f.needsUpdate!==!1&&h.setValue(e,f.value,a)}}static seqWithValue(e,t){const s=[];for(let a=0,c=e.length;a!==c;++a){const u=e[a];u.id in t&&s.push(u)}return s}}function Lv(i,e,t){const s=i.createShader(e);return i.shaderSource(s,t),i.compileShader(s),s}const tA=37297;let nA=0;function iA(i,e){const t=i.split(`
`),s=[],a=Math.max(e-6,0),c=Math.min(e+6,t.length);for(let u=a;u<c;u++){const h=u+1;s.push(`${h===e?">":" "} ${h}: ${t[u]}`)}return s.join(`
`)}const Dv=new _t;function rA(i){Nt._getMatrix(Dv,Nt.workingColorSpace,i);const e=`mat3( ${Dv.elements.map(t=>t.toFixed(4))} )`;switch(Nt.getTransfer(i)){case iu:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return ft("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Iv(i,e,t){const s=i.getShaderParameter(e,i.COMPILE_STATUS),c=(i.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const h=parseInt(u[1]);return t.toUpperCase()+`

`+c+`

`+iA(i.getShaderSource(e),h)}else return c}function sA(i,e){const t=rA(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const aA={[Mp]:"Linear",[Ep]:"Reinhard",[bp]:"Cineon",[hu]:"ACESFilmic",[wp]:"AgX",[Cp]:"Neutral",[Tp]:"Custom"};function oA(i,e){const t=aA[e];return t===void 0?(ft("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Lc=new ne;function lA(){Nt.getLuminanceCoefficients(Lc);const i=Lc.x.toFixed(4),e=Lc.y.toFixed(4),t=Lc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cA(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function uA(i){const e=[];for(const t in i){const s=i[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function dA(i,e){const t={},s=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const c=i.getActiveAttrib(e,a),u=c.name;let h=1;c.type===i.FLOAT_MAT2&&(h=2),c.type===i.FLOAT_MAT3&&(h=3),c.type===i.FLOAT_MAT4&&(h=4),t[u]={type:c.type,location:i.getAttribLocation(e,u),locationSize:h}}return t}function Bo(i){return i!==""}function Uv(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fv(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hA=/^[ \t]*#include +<([\w\d./]+)>/gm;function op(i){return i.replace(hA,pA)}const fA=new Map;function pA(i,e){let t=Mt[e];if(t===void 0){const s=fA.get(e);if(s!==void 0)t=Mt[s],ft('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return op(t)}const mA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ov(i){return i.replace(mA,gA)}function gA(i,e,t,s){let a="";for(let c=parseInt(e);c<parseInt(t);c++)a+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return a}function kv(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const xA={[Vc]:"SHADOWMAP_TYPE_PCF",[jo]:"SHADOWMAP_TYPE_VSM"};function vA(i){return xA[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const _A={[Ps]:"ENVMAP_TYPE_CUBE",[Pa]:"ENVMAP_TYPE_CUBE",[fu]:"ENVMAP_TYPE_CUBE_UV"};function yA(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":_A[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const SA={[Pa]:"ENVMAP_MODE_REFRACTION"};function MA(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":SA[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const EA={[S0]:"ENVMAP_BLENDING_MULTIPLY",[rb]:"ENVMAP_BLENDING_MIX",[sb]:"ENVMAP_BLENDING_ADD"};function bA(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":EA[i.combine]||"ENVMAP_BLENDING_NONE"}function TA(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:s,maxMip:t}}function wA(i,e,t,s){const a=i.getContext(),c=t.defines;let u=t.vertexShader,h=t.fragmentShader;const f=vA(t),m=yA(t),v=MA(t),x=bA(t),g=TA(t),M=cA(t),E=uA(c),A=a.createProgram();let y,S,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Bo).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Bo).join(`
`),S.length>0&&(S+=`
`)):(y=[kv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),S=[kv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+v:"",t.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==er?"#define TONE_MAPPING":"",t.toneMapping!==er?Mt.tonemapping_pars_fragment:"",t.toneMapping!==er?oA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Mt.colorspace_pars_fragment,sA("linearToOutputTexel",t.outputColorSpace),lA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Bo).join(`
`)),u=op(u),u=Uv(u,t),u=Fv(u,t),h=op(h),h=Uv(h,t),h=Fv(h,t),u=Ov(u),h=Ov(h),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",t.glslVersion===Gx?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const T=b+y+u,N=b+S+h,D=Lv(a,a.VERTEX_SHADER,T),L=Lv(a,a.FRAGMENT_SHADER,N);a.attachShader(A,D),a.attachShader(A,L),t.index0AttributeName!==void 0?a.bindAttribLocation(A,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(A,0,"position"),a.linkProgram(A);function O(H){if(i.debug.checkShaderErrors){const ee=a.getProgramInfoLog(A)||"",G=a.getShaderInfoLog(D)||"",Q=a.getShaderInfoLog(L)||"",V=ee.trim(),k=G.trim(),W=Q.trim();let $=!0,le=!0;if(a.getProgramParameter(A,a.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,A,D,L);else{const se=Iv(a,D,"vertex"),B=Iv(a,L,"fragment");Dt("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(A,a.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+V+`
`+se+`
`+B)}else V!==""?ft("WebGLProgram: Program Info Log:",V):(k===""||W==="")&&(le=!1);le&&(H.diagnostics={runnable:$,programLog:V,vertexShader:{log:k,prefix:y},fragmentShader:{log:W,prefix:S}})}a.deleteShader(D),a.deleteShader(L),w=new Kc(a,A),U=dA(a,A)}let w;this.getUniforms=function(){return w===void 0&&O(this),w};let U;this.getAttributes=function(){return U===void 0&&O(this),U};let Y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=a.getProgramParameter(A,tA)),Y},this.destroy=function(){s.releaseStatesOfProgram(this),a.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=nA++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=D,this.fragmentShader=L,this}let CA=0;class AA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,a=this._getShaderStage(t),c=this._getShaderStage(s),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new RA(e),t.set(e,s)),s}}class RA{constructor(e){this.id=CA++,this.code=e,this.usedTimes=0}}function NA(i){return i===Ls||i===eu||i===tu}function PA(i,e,t,s,a,c){const u=new L0,h=new AA,f=new Set,m=[],v=new Map,x=s.logarithmicDepthBuffer;let g=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(w){return f.add(w),w===0?"uv":`uv${w}`}function A(w,U,Y,H,ee,G){const Q=H.fog,V=ee.geometry,k=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?H.environment:null,W=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,$=e.get(w.envMap||k,W),le=$&&$.mapping===fu?$.image.height:null,se=M[w.type];w.precision!==null&&(g=s.getMaxPrecision(w.precision),g!==w.precision&&ft("WebGLProgram.getParameters:",w.precision,"not supported, using",g,"instead."));const B=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,re=B!==void 0?B.length:0;let Fe=0;V.morphAttributes.position!==void 0&&(Fe=1),V.morphAttributes.normal!==void 0&&(Fe=2),V.morphAttributes.color!==void 0&&(Fe=3);let Te,Ae,X,me;if(se){const ht=Yi[se];Te=ht.vertexShader,Ae=ht.fragmentShader}else Te=w.vertexShader,Ae=w.fragmentShader,h.update(w),X=h.getVertexShaderID(w),me=h.getFragmentShaderID(w);const fe=i.getRenderTarget(),we=i.state.buffers.depth.getReversed(),Oe=ee.isInstancedMesh===!0,et=ee.isBatchedMesh===!0,Ze=!!w.map,qe=!!w.matcap,Ke=!!$,St=!!w.aoMap,at=!!w.lightMap,Pt=!!w.bumpMap,Tt=!!w.normalMap,Zt=!!w.displacementMap,J=!!w.emissiveMap,zt=!!w.metalnessMap,mt=!!w.roughnessMap,Ft=w.anisotropy>0,ke=w.clearcoat>0,Vt=w.dispersion>0,I=w.iridescence>0,C=w.sheen>0,ae=w.transmission>0,ve=Ft&&!!w.anisotropyMap,Me=ke&&!!w.clearcoatMap,Re=ke&&!!w.clearcoatNormalMap,Ie=ke&&!!w.clearcoatRoughnessMap,ge=I&&!!w.iridescenceMap,_e=I&&!!w.iridescenceThicknessMap,je=C&&!!w.sheenColorMap,F=C&&!!w.sheenRoughnessMap,q=!!w.specularMap,Se=!!w.specularColorMap,Xe=!!w.specularIntensityMap,ct=ae&&!!w.transmissionMap,pt=ae&&!!w.thicknessMap,Z=!!w.gradientMap,Ne=!!w.alphaMap,xe=w.alphaTest>0,ze=!!w.alphaHash,Pe=!!w.extensions;let ye=er;w.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(ye=i.toneMapping);const Ve={shaderID:se,shaderType:w.type,shaderName:w.name,vertexShader:Te,fragmentShader:Ae,defines:w.defines,customVertexShaderID:X,customFragmentShaderID:me,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:g,batching:et,batchingColor:et&&ee._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&ee.instanceColor!==null,instancingMorph:Oe&&ee.morphTexture!==null,outputColorSpace:fe===null?i.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Nt.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:Ze,matcap:qe,envMap:Ke,envMapMode:Ke&&$.mapping,envMapCubeUVHeight:le,aoMap:St,lightMap:at,bumpMap:Pt,normalMap:Tt,displacementMap:Zt,emissiveMap:J,normalMapObjectSpace:Tt&&w.normalMapType===lb,normalMapTangentSpace:Tt&&w.normalMapType===np,packedNormalMap:Tt&&w.normalMapType===np&&NA(w.normalMap.format),metalnessMap:zt,roughnessMap:mt,anisotropy:Ft,anisotropyMap:ve,clearcoat:ke,clearcoatMap:Me,clearcoatNormalMap:Re,clearcoatRoughnessMap:Ie,dispersion:Vt,iridescence:I,iridescenceMap:ge,iridescenceThicknessMap:_e,sheen:C,sheenColorMap:je,sheenRoughnessMap:F,specularMap:q,specularColorMap:Se,specularIntensityMap:Xe,transmission:ae,transmissionMap:ct,thicknessMap:pt,gradientMap:Z,opaque:w.transparent===!1&&w.blending===Aa&&w.alphaToCoverage===!1,alphaMap:Ne,alphaTest:xe,alphaHash:ze,combine:w.combine,mapUv:Ze&&E(w.map.channel),aoMapUv:St&&E(w.aoMap.channel),lightMapUv:at&&E(w.lightMap.channel),bumpMapUv:Pt&&E(w.bumpMap.channel),normalMapUv:Tt&&E(w.normalMap.channel),displacementMapUv:Zt&&E(w.displacementMap.channel),emissiveMapUv:J&&E(w.emissiveMap.channel),metalnessMapUv:zt&&E(w.metalnessMap.channel),roughnessMapUv:mt&&E(w.roughnessMap.channel),anisotropyMapUv:ve&&E(w.anisotropyMap.channel),clearcoatMapUv:Me&&E(w.clearcoatMap.channel),clearcoatNormalMapUv:Re&&E(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&E(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&E(w.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&E(w.iridescenceThicknessMap.channel),sheenColorMapUv:je&&E(w.sheenColorMap.channel),sheenRoughnessMapUv:F&&E(w.sheenRoughnessMap.channel),specularMapUv:q&&E(w.specularMap.channel),specularColorMapUv:Se&&E(w.specularColorMap.channel),specularIntensityMapUv:Xe&&E(w.specularIntensityMap.channel),transmissionMapUv:ct&&E(w.transmissionMap.channel),thicknessMapUv:pt&&E(w.thicknessMap.channel),alphaMapUv:Ne&&E(w.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Tt||Ft),vertexNormals:!!V.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!V.attributes.uv&&(Ze||Ne),fog:!!Q,useFog:w.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||V.attributes.normal===void 0&&Tt===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:we,skinning:ee.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Fe,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&Y.length>0,shadowMapType:i.shadowMap.type,toneMapping:ye,decodeVideoTexture:Ze&&w.map.isVideoTexture===!0&&Nt.getTransfer(w.map.colorSpace)===kt,decodeVideoTextureEmissive:J&&w.emissiveMap.isVideoTexture===!0&&Nt.getTransfer(w.emissiveMap.colorSpace)===kt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===_r,flipSided:w.side===ni,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Pe&&w.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&w.extensions.multiDraw===!0||et)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ve.vertexUv1s=f.has(1),Ve.vertexUv2s=f.has(2),Ve.vertexUv3s=f.has(3),f.clear(),Ve}function y(w){const U=[];if(w.shaderID?U.push(w.shaderID):(U.push(w.customVertexShaderID),U.push(w.customFragmentShaderID)),w.defines!==void 0)for(const Y in w.defines)U.push(Y),U.push(w.defines[Y]);return w.isRawShaderMaterial===!1&&(S(U,w),b(U,w),U.push(i.outputColorSpace)),U.push(w.customProgramCacheKey),U.join()}function S(w,U){w.push(U.precision),w.push(U.outputColorSpace),w.push(U.envMapMode),w.push(U.envMapCubeUVHeight),w.push(U.mapUv),w.push(U.alphaMapUv),w.push(U.lightMapUv),w.push(U.aoMapUv),w.push(U.bumpMapUv),w.push(U.normalMapUv),w.push(U.displacementMapUv),w.push(U.emissiveMapUv),w.push(U.metalnessMapUv),w.push(U.roughnessMapUv),w.push(U.anisotropyMapUv),w.push(U.clearcoatMapUv),w.push(U.clearcoatNormalMapUv),w.push(U.clearcoatRoughnessMapUv),w.push(U.iridescenceMapUv),w.push(U.iridescenceThicknessMapUv),w.push(U.sheenColorMapUv),w.push(U.sheenRoughnessMapUv),w.push(U.specularMapUv),w.push(U.specularColorMapUv),w.push(U.specularIntensityMapUv),w.push(U.transmissionMapUv),w.push(U.thicknessMapUv),w.push(U.combine),w.push(U.fogExp2),w.push(U.sizeAttenuation),w.push(U.morphTargetsCount),w.push(U.morphAttributeCount),w.push(U.numDirLights),w.push(U.numPointLights),w.push(U.numSpotLights),w.push(U.numSpotLightMaps),w.push(U.numHemiLights),w.push(U.numRectAreaLights),w.push(U.numDirLightShadows),w.push(U.numPointLightShadows),w.push(U.numSpotLightShadows),w.push(U.numSpotLightShadowsWithMaps),w.push(U.numLightProbes),w.push(U.shadowMapType),w.push(U.toneMapping),w.push(U.numClippingPlanes),w.push(U.numClipIntersection),w.push(U.depthPacking)}function b(w,U){u.disableAll(),U.instancing&&u.enable(0),U.instancingColor&&u.enable(1),U.instancingMorph&&u.enable(2),U.matcap&&u.enable(3),U.envMap&&u.enable(4),U.normalMapObjectSpace&&u.enable(5),U.normalMapTangentSpace&&u.enable(6),U.clearcoat&&u.enable(7),U.iridescence&&u.enable(8),U.alphaTest&&u.enable(9),U.vertexColors&&u.enable(10),U.vertexAlphas&&u.enable(11),U.vertexUv1s&&u.enable(12),U.vertexUv2s&&u.enable(13),U.vertexUv3s&&u.enable(14),U.vertexTangents&&u.enable(15),U.anisotropy&&u.enable(16),U.alphaHash&&u.enable(17),U.batching&&u.enable(18),U.dispersion&&u.enable(19),U.batchingColor&&u.enable(20),U.gradientMap&&u.enable(21),U.packedNormalMap&&u.enable(22),U.vertexNormals&&u.enable(23),w.push(u.mask),u.disableAll(),U.fog&&u.enable(0),U.useFog&&u.enable(1),U.flatShading&&u.enable(2),U.logarithmicDepthBuffer&&u.enable(3),U.reversedDepthBuffer&&u.enable(4),U.skinning&&u.enable(5),U.morphTargets&&u.enable(6),U.morphNormals&&u.enable(7),U.morphColors&&u.enable(8),U.premultipliedAlpha&&u.enable(9),U.shadowMapEnabled&&u.enable(10),U.doubleSided&&u.enable(11),U.flipSided&&u.enable(12),U.useDepthPacking&&u.enable(13),U.dithering&&u.enable(14),U.transmission&&u.enable(15),U.sheen&&u.enable(16),U.opaque&&u.enable(17),U.pointsUvs&&u.enable(18),U.decodeVideoTexture&&u.enable(19),U.decodeVideoTextureEmissive&&u.enable(20),U.alphaToCoverage&&u.enable(21),U.numLightProbeGrids>0&&u.enable(22),w.push(u.mask)}function T(w){const U=M[w.type];let Y;if(U){const H=Yi[U];Y=qo.clone(H.uniforms)}else Y=w.uniforms;return Y}function N(w,U){let Y=v.get(U);return Y!==void 0?++Y.usedTimes:(Y=new wA(i,U,w,a),m.push(Y),v.set(U,Y)),Y}function D(w){if(--w.usedTimes===0){const U=m.indexOf(w);m[U]=m[m.length-1],m.pop(),v.delete(w.cacheKey),w.destroy()}}function L(w){h.remove(w)}function O(){h.dispose()}return{getParameters:A,getProgramCacheKey:y,getUniforms:T,acquireProgram:N,releaseProgram:D,releaseShaderCache:L,programs:m,dispose:O}}function LA(){let i=new WeakMap;function e(u){return i.has(u)}function t(u){let h=i.get(u);return h===void 0&&(h={},i.set(u,h)),h}function s(u){i.delete(u)}function a(u,h,f){i.get(u)[h]=f}function c(){i=new WeakMap}return{has:e,get:t,remove:s,update:a,dispose:c}}function DA(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function jv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Bv(){const i=[];let e=0;const t=[],s=[],a=[];function c(){e=0,t.length=0,s.length=0,a.length=0}function u(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function h(g,M,E,A,y,S){let b=i[e];return b===void 0?(b={id:g.id,object:g,geometry:M,material:E,materialVariant:u(g),groupOrder:A,renderOrder:g.renderOrder,z:y,group:S},i[e]=b):(b.id=g.id,b.object=g,b.geometry=M,b.material=E,b.materialVariant=u(g),b.groupOrder=A,b.renderOrder=g.renderOrder,b.z=y,b.group=S),e++,b}function f(g,M,E,A,y,S){const b=h(g,M,E,A,y,S);E.transmission>0?s.push(b):E.transparent===!0?a.push(b):t.push(b)}function m(g,M,E,A,y,S){const b=h(g,M,E,A,y,S);E.transmission>0?s.unshift(b):E.transparent===!0?a.unshift(b):t.unshift(b)}function v(g,M){t.length>1&&t.sort(g||DA),s.length>1&&s.sort(M||jv),a.length>1&&a.sort(M||jv)}function x(){for(let g=e,M=i.length;g<M;g++){const E=i[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:s,transparent:a,init:c,push:f,unshift:m,finish:x,sort:v}}function IA(){let i=new WeakMap;function e(s,a){const c=i.get(s);let u;return c===void 0?(u=new Bv,i.set(s,[u])):a>=c.length?(u=new Bv,c.push(u)):u=c[a],u}function t(){i=new WeakMap}return{get:e,dispose:t}}function UA(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ne,color:new yt};break;case"SpotLight":t={position:new ne,direction:new ne,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ne,color:new yt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ne,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":t={color:new yt,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return i[e.id]=t,t}}}function FA(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let OA=0;function kA(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function jA(i){const e=new UA,t=FA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new ne);const a=new ne,c=new sn,u=new sn;function h(m){let v=0,x=0,g=0;for(let U=0;U<9;U++)s.probe[U].set(0,0,0);let M=0,E=0,A=0,y=0,S=0,b=0,T=0,N=0,D=0,L=0,O=0;m.sort(kA);for(let U=0,Y=m.length;U<Y;U++){const H=m[U],ee=H.color,G=H.intensity,Q=H.distance;let V=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Ls?V=H.shadow.map.texture:V=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)v+=ee.r*G,x+=ee.g*G,g+=ee.b*G;else if(H.isLightProbe){for(let k=0;k<9;k++)s.probe[k].addScaledVector(H.sh.coefficients[k],G);O++}else if(H.isDirectionalLight){const k=e.get(H);if(k.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const W=H.shadow,$=t.get(H);$.shadowIntensity=W.intensity,$.shadowBias=W.bias,$.shadowNormalBias=W.normalBias,$.shadowRadius=W.radius,$.shadowMapSize=W.mapSize,s.directionalShadow[M]=$,s.directionalShadowMap[M]=V,s.directionalShadowMatrix[M]=H.shadow.matrix,b++}s.directional[M]=k,M++}else if(H.isSpotLight){const k=e.get(H);k.position.setFromMatrixPosition(H.matrixWorld),k.color.copy(ee).multiplyScalar(G),k.distance=Q,k.coneCos=Math.cos(H.angle),k.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),k.decay=H.decay,s.spot[A]=k;const W=H.shadow;if(H.map&&(s.spotLightMap[D]=H.map,D++,W.updateMatrices(H),H.castShadow&&L++),s.spotLightMatrix[A]=W.matrix,H.castShadow){const $=t.get(H);$.shadowIntensity=W.intensity,$.shadowBias=W.bias,$.shadowNormalBias=W.normalBias,$.shadowRadius=W.radius,$.shadowMapSize=W.mapSize,s.spotShadow[A]=$,s.spotShadowMap[A]=V,N++}A++}else if(H.isRectAreaLight){const k=e.get(H);k.color.copy(ee).multiplyScalar(G),k.halfWidth.set(H.width*.5,0,0),k.halfHeight.set(0,H.height*.5,0),s.rectArea[y]=k,y++}else if(H.isPointLight){const k=e.get(H);if(k.color.copy(H.color).multiplyScalar(H.intensity),k.distance=H.distance,k.decay=H.decay,H.castShadow){const W=H.shadow,$=t.get(H);$.shadowIntensity=W.intensity,$.shadowBias=W.bias,$.shadowNormalBias=W.normalBias,$.shadowRadius=W.radius,$.shadowMapSize=W.mapSize,$.shadowCameraNear=W.camera.near,$.shadowCameraFar=W.camera.far,s.pointShadow[E]=$,s.pointShadowMap[E]=V,s.pointShadowMatrix[E]=H.shadow.matrix,T++}s.point[E]=k,E++}else if(H.isHemisphereLight){const k=e.get(H);k.skyColor.copy(H.color).multiplyScalar(G),k.groundColor.copy(H.groundColor).multiplyScalar(G),s.hemi[S]=k,S++}}y>0&&(i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Be.LTC_FLOAT_1,s.rectAreaLTC2=Be.LTC_FLOAT_2):(s.rectAreaLTC1=Be.LTC_HALF_1,s.rectAreaLTC2=Be.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=x,s.ambient[2]=g;const w=s.hash;(w.directionalLength!==M||w.pointLength!==E||w.spotLength!==A||w.rectAreaLength!==y||w.hemiLength!==S||w.numDirectionalShadows!==b||w.numPointShadows!==T||w.numSpotShadows!==N||w.numSpotMaps!==D||w.numLightProbes!==O)&&(s.directional.length=M,s.spot.length=A,s.rectArea.length=y,s.point.length=E,s.hemi.length=S,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=T,s.pointShadowMap.length=T,s.spotShadow.length=N,s.spotShadowMap.length=N,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=T,s.spotLightMatrix.length=N+D-L,s.spotLightMap.length=D,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=O,w.directionalLength=M,w.pointLength=E,w.spotLength=A,w.rectAreaLength=y,w.hemiLength=S,w.numDirectionalShadows=b,w.numPointShadows=T,w.numSpotShadows=N,w.numSpotMaps=D,w.numLightProbes=O,s.version=OA++)}function f(m,v){let x=0,g=0,M=0,E=0,A=0;const y=v.matrixWorldInverse;for(let S=0,b=m.length;S<b;S++){const T=m[S];if(T.isDirectionalLight){const N=s.directional[x];N.direction.setFromMatrixPosition(T.matrixWorld),a.setFromMatrixPosition(T.target.matrixWorld),N.direction.sub(a),N.direction.transformDirection(y),x++}else if(T.isSpotLight){const N=s.spot[M];N.position.setFromMatrixPosition(T.matrixWorld),N.position.applyMatrix4(y),N.direction.setFromMatrixPosition(T.matrixWorld),a.setFromMatrixPosition(T.target.matrixWorld),N.direction.sub(a),N.direction.transformDirection(y),M++}else if(T.isRectAreaLight){const N=s.rectArea[E];N.position.setFromMatrixPosition(T.matrixWorld),N.position.applyMatrix4(y),u.identity(),c.copy(T.matrixWorld),c.premultiply(y),u.extractRotation(c),N.halfWidth.set(T.width*.5,0,0),N.halfHeight.set(0,T.height*.5,0),N.halfWidth.applyMatrix4(u),N.halfHeight.applyMatrix4(u),E++}else if(T.isPointLight){const N=s.point[g];N.position.setFromMatrixPosition(T.matrixWorld),N.position.applyMatrix4(y),g++}else if(T.isHemisphereLight){const N=s.hemi[A];N.direction.setFromMatrixPosition(T.matrixWorld),N.direction.transformDirection(y),A++}}}return{setup:h,setupView:f,state:s}}function zv(i){const e=new jA(i),t=[],s=[],a=[];function c(g){x.camera=g,t.length=0,s.length=0,a.length=0}function u(g){t.push(g)}function h(g){s.push(g)}function f(g){a.push(g)}function m(){e.setup(t)}function v(g){e.setupView(t,g)}const x={lightsArray:t,shadowsArray:s,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:x,setupLights:m,setupLightsView:v,pushLight:u,pushShadow:h,pushLightProbeGrid:f}}function BA(i){let e=new WeakMap;function t(a,c=0){const u=e.get(a);let h;return u===void 0?(h=new zv(i),e.set(a,[h])):c>=u.length?(h=new zv(i),u.push(h)):h=u[c],h}function s(){e=new WeakMap}return{get:t,dispose:s}}const zA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,GA=[new ne(1,0,0),new ne(-1,0,0),new ne(0,1,0),new ne(0,-1,0),new ne(0,0,1),new ne(0,0,-1)],VA=[new ne(0,-1,0),new ne(0,-1,0),new ne(0,0,1),new ne(0,0,-1),new ne(0,-1,0),new ne(0,-1,0)],Hv=new sn,Fo=new ne,Yh=new ne;function WA(i,e,t){let s=new Bp;const a=new nt,c=new nt,u=new on,h=new Qb,f=new Jb,m={},v=t.maxTextureSize,x={[is]:ni,[ni]:is,[_r]:_r},g=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:zA,fragmentShader:HA}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const E=new kn;E.setAttribute("position",new ji(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new wi(E,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vc;let S=this.type;this.render=function(L,O,w){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||L.length===0)return;this.type===y0&&(ft("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Vc);const U=i.getRenderTarget(),Y=i.getActiveCubeFace(),H=i.getActiveMipmapLevel(),ee=i.state;ee.setBlending(Ji),ee.buffers.depth.getReversed()===!0?ee.buffers.color.setClear(0,0,0,0):ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const G=S!==this.type;G&&O.traverse(function(Q){Q.material&&(Array.isArray(Q.material)?Q.material.forEach(V=>V.needsUpdate=!0):Q.material.needsUpdate=!0)});for(let Q=0,V=L.length;Q<V;Q++){const k=L[Q],W=k.shadow;if(W===void 0){ft("WebGLShadowMap:",k,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;a.copy(W.mapSize);const $=W.getFrameExtents();a.multiply($),c.copy(W.mapSize),(a.x>v||a.y>v)&&(a.x>v&&(c.x=Math.floor(v/$.x),a.x=c.x*$.x,W.mapSize.x=c.x),a.y>v&&(c.y=Math.floor(v/$.y),a.y=c.y*$.y,W.mapSize.y=c.y));const le=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=le,W.map===null||G===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===jo){if(k.isPointLight){ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new ii(a.x,a.y,{format:Ls,type:hi,minFilter:Un,magFilter:Un,generateMipmaps:!1}),W.map.texture.name=k.name+".shadowMap",W.map.depthTexture=new La(a.x,a.y,Zi),W.map.depthTexture.name=k.name+".shadowMapDepth",W.map.depthTexture.format=br,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Cn,W.map.depthTexture.magFilter=Cn}else k.isPointLight?(W.map=new q0(a.x),W.map.depthTexture=new qb(a.x,tr)):(W.map=new ii(a.x,a.y),W.map.depthTexture=new La(a.x,a.y,tr)),W.map.depthTexture.name=k.name+".shadowMap",W.map.depthTexture.format=br,this.type===Vc?(W.map.depthTexture.compareFunction=le?Up:Ip,W.map.depthTexture.minFilter=Un,W.map.depthTexture.magFilter=Un):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Cn,W.map.depthTexture.magFilter=Cn);W.camera.updateProjectionMatrix()}const se=W.map.isWebGLCubeRenderTarget?6:1;for(let B=0;B<se;B++){if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,B),i.clear();else{B===0&&(i.setRenderTarget(W.map),i.clear());const re=W.getViewport(B);u.set(c.x*re.x,c.y*re.y,c.x*re.z,c.y*re.w),ee.viewport(u)}if(k.isPointLight){const re=W.camera,Fe=W.matrix,Te=k.distance||re.far;Te!==re.far&&(re.far=Te,re.updateProjectionMatrix()),Fo.setFromMatrixPosition(k.matrixWorld),re.position.copy(Fo),Yh.copy(re.position),Yh.add(GA[B]),re.up.copy(VA[B]),re.lookAt(Yh),re.updateMatrixWorld(),Fe.makeTranslation(-Fo.x,-Fo.y,-Fo.z),Hv.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Hv,re.coordinateSystem,re.reversedDepth)}else W.updateMatrices(k);s=W.getFrustum(),N(O,w,W.camera,k,this.type)}W.isPointLightShadow!==!0&&this.type===jo&&b(W,w),W.needsUpdate=!1}S=this.type,y.needsUpdate=!1,i.setRenderTarget(U,Y,H)};function b(L,O){const w=e.update(A);g.defines.VSM_SAMPLES!==L.blurSamples&&(g.defines.VSM_SAMPLES=L.blurSamples,M.defines.VSM_SAMPLES=L.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new ii(a.x,a.y,{format:Ls,type:hi})),g.uniforms.shadow_pass.value=L.map.depthTexture,g.uniforms.resolution.value=L.mapSize,g.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(O,null,w,g,A,null),M.uniforms.shadow_pass.value=L.mapPass.texture,M.uniforms.resolution.value=L.mapSize,M.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(O,null,w,M,A,null)}function T(L,O,w,U){let Y=null;const H=w.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(H!==void 0)Y=H;else if(Y=w.isPointLight===!0?f:h,i.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const ee=Y.uuid,G=O.uuid;let Q=m[ee];Q===void 0&&(Q={},m[ee]=Q);let V=Q[G];V===void 0&&(V=Y.clone(),Q[G]=V,O.addEventListener("dispose",D)),Y=V}if(Y.visible=O.visible,Y.wireframe=O.wireframe,U===jo?Y.side=O.shadowSide!==null?O.shadowSide:O.side:Y.side=O.shadowSide!==null?O.shadowSide:x[O.side],Y.alphaMap=O.alphaMap,Y.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,Y.map=O.map,Y.clipShadows=O.clipShadows,Y.clippingPlanes=O.clippingPlanes,Y.clipIntersection=O.clipIntersection,Y.displacementMap=O.displacementMap,Y.displacementScale=O.displacementScale,Y.displacementBias=O.displacementBias,Y.wireframeLinewidth=O.wireframeLinewidth,Y.linewidth=O.linewidth,w.isPointLight===!0&&Y.isMeshDistanceMaterial===!0){const ee=i.properties.get(Y);ee.light=w}return Y}function N(L,O,w,U,Y){if(L.visible===!1)return;if(L.layers.test(O.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&Y===jo)&&(!L.frustumCulled||s.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,L.matrixWorld);const G=e.update(L),Q=L.material;if(Array.isArray(Q)){const V=G.groups;for(let k=0,W=V.length;k<W;k++){const $=V[k],le=Q[$.materialIndex];if(le&&le.visible){const se=T(L,le,U,Y);L.onBeforeShadow(i,L,O,w,G,se,$),i.renderBufferDirect(w,null,G,se,L,$),L.onAfterShadow(i,L,O,w,G,se,$)}}}else if(Q.visible){const V=T(L,Q,U,Y);L.onBeforeShadow(i,L,O,w,G,V,null),i.renderBufferDirect(w,null,G,V,L,null),L.onAfterShadow(i,L,O,w,G,V,null)}}const ee=L.children;for(let G=0,Q=ee.length;G<Q;G++)N(ee[G],O,w,U,Y)}function D(L){L.target.removeEventListener("dispose",D);for(const w in m){const U=m[w],Y=L.target.uuid;Y in U&&(U[Y].dispose(),delete U[Y])}}}function XA(i,e){function t(){let Z=!1;const Ne=new on;let xe=null;const ze=new on(0,0,0,0);return{setMask:function(Pe){xe!==Pe&&!Z&&(i.colorMask(Pe,Pe,Pe,Pe),xe=Pe)},setLocked:function(Pe){Z=Pe},setClear:function(Pe,ye,Ve,ht,ot){ot===!0&&(Pe*=ht,ye*=ht,Ve*=ht),Ne.set(Pe,ye,Ve,ht),ze.equals(Ne)===!1&&(i.clearColor(Pe,ye,Ve,ht),ze.copy(Ne))},reset:function(){Z=!1,xe=null,ze.set(-1,0,0,0)}}}function s(){let Z=!1,Ne=!1,xe=null,ze=null,Pe=null;return{setReversed:function(ye){if(Ne!==ye){const Ve=e.get("EXT_clip_control");ye?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),Ne=ye;const ht=Pe;Pe=null,this.setClear(ht)}},getReversed:function(){return Ne},setTest:function(ye){ye?fe(i.DEPTH_TEST):we(i.DEPTH_TEST)},setMask:function(ye){xe!==ye&&!Z&&(i.depthMask(ye),xe=ye)},setFunc:function(ye){if(Ne&&(ye=vb[ye]),ze!==ye){switch(ye){case xf:i.depthFunc(i.NEVER);break;case vf:i.depthFunc(i.ALWAYS);break;case _f:i.depthFunc(i.LESS);break;case Na:i.depthFunc(i.LEQUAL);break;case yf:i.depthFunc(i.EQUAL);break;case Sf:i.depthFunc(i.GEQUAL);break;case Mf:i.depthFunc(i.GREATER);break;case Ef:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ze=ye}},setLocked:function(ye){Z=ye},setClear:function(ye){Pe!==ye&&(Pe=ye,Ne&&(ye=1-ye),i.clearDepth(ye))},reset:function(){Z=!1,xe=null,ze=null,Pe=null,Ne=!1}}}function a(){let Z=!1,Ne=null,xe=null,ze=null,Pe=null,ye=null,Ve=null,ht=null,ot=null;return{setTest:function(wt){Z||(wt?fe(i.STENCIL_TEST):we(i.STENCIL_TEST))},setMask:function(wt){Ne!==wt&&!Z&&(i.stencilMask(wt),Ne=wt)},setFunc:function(wt,jn,pi){(xe!==wt||ze!==jn||Pe!==pi)&&(i.stencilFunc(wt,jn,pi),xe=wt,ze=jn,Pe=pi)},setOp:function(wt,jn,pi){(ye!==wt||Ve!==jn||ht!==pi)&&(i.stencilOp(wt,jn,pi),ye=wt,Ve=jn,ht=pi)},setLocked:function(wt){Z=wt},setClear:function(wt){ot!==wt&&(i.clearStencil(wt),ot=wt)},reset:function(){Z=!1,Ne=null,xe=null,ze=null,Pe=null,ye=null,Ve=null,ht=null,ot=null}}}const c=new t,u=new s,h=new a,f=new WeakMap,m=new WeakMap;let v={},x={},g={},M=new WeakMap,E=[],A=null,y=!1,S=null,b=null,T=null,N=null,D=null,L=null,O=null,w=new yt(0,0,0),U=0,Y=!1,H=null,ee=null,G=null,Q=null,V=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,$=0;const le=i.getParameter(i.VERSION);le.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(le)[1]),W=$>=1):le.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),W=$>=2);let se=null,B={};const re=i.getParameter(i.SCISSOR_BOX),Fe=i.getParameter(i.VIEWPORT),Te=new on().fromArray(re),Ae=new on().fromArray(Fe);function X(Z,Ne,xe,ze){const Pe=new Uint8Array(4),ye=i.createTexture();i.bindTexture(Z,ye),i.texParameteri(Z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ve=0;Ve<xe;Ve++)Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?i.texImage3D(Ne,0,i.RGBA,1,1,ze,0,i.RGBA,i.UNSIGNED_BYTE,Pe):i.texImage2D(Ne+Ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pe);return ye}const me={};me[i.TEXTURE_2D]=X(i.TEXTURE_2D,i.TEXTURE_2D,1),me[i.TEXTURE_CUBE_MAP]=X(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[i.TEXTURE_2D_ARRAY]=X(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),me[i.TEXTURE_3D]=X(i.TEXTURE_3D,i.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),fe(i.DEPTH_TEST),u.setFunc(Na),Pt(!1),Tt(jx),fe(i.CULL_FACE),St(Ji);function fe(Z){v[Z]!==!0&&(i.enable(Z),v[Z]=!0)}function we(Z){v[Z]!==!1&&(i.disable(Z),v[Z]=!1)}function Oe(Z,Ne){return g[Z]!==Ne?(i.bindFramebuffer(Z,Ne),g[Z]=Ne,Z===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=Ne),Z===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=Ne),!0):!1}function et(Z,Ne){let xe=E,ze=!1;if(Z){xe=M.get(Ne),xe===void 0&&(xe=[],M.set(Ne,xe));const Pe=Z.textures;if(xe.length!==Pe.length||xe[0]!==i.COLOR_ATTACHMENT0){for(let ye=0,Ve=Pe.length;ye<Ve;ye++)xe[ye]=i.COLOR_ATTACHMENT0+ye;xe.length=Pe.length,ze=!0}}else xe[0]!==i.BACK&&(xe[0]=i.BACK,ze=!0);ze&&i.drawBuffers(xe)}function Ze(Z){return A!==Z?(i.useProgram(Z),A=Z,!0):!1}const qe={[ws]:i.FUNC_ADD,[zE]:i.FUNC_SUBTRACT,[HE]:i.FUNC_REVERSE_SUBTRACT};qe[GE]=i.MIN,qe[VE]=i.MAX;const Ke={[WE]:i.ZERO,[XE]:i.ONE,[$E]:i.SRC_COLOR,[mf]:i.SRC_ALPHA,[JE]:i.SRC_ALPHA_SATURATE,[ZE]:i.DST_COLOR,[YE]:i.DST_ALPHA,[qE]:i.ONE_MINUS_SRC_COLOR,[gf]:i.ONE_MINUS_SRC_ALPHA,[QE]:i.ONE_MINUS_DST_COLOR,[KE]:i.ONE_MINUS_DST_ALPHA,[eb]:i.CONSTANT_COLOR,[tb]:i.ONE_MINUS_CONSTANT_COLOR,[nb]:i.CONSTANT_ALPHA,[ib]:i.ONE_MINUS_CONSTANT_ALPHA};function St(Z,Ne,xe,ze,Pe,ye,Ve,ht,ot,wt){if(Z===Ji){y===!0&&(we(i.BLEND),y=!1);return}if(y===!1&&(fe(i.BLEND),y=!0),Z!==BE){if(Z!==S||wt!==Y){if((b!==ws||D!==ws)&&(i.blendEquation(i.FUNC_ADD),b=ws,D=ws),wt)switch(Z){case Aa:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pf:i.blendFunc(i.ONE,i.ONE);break;case Bx:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zx:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Dt("WebGLState: Invalid blending: ",Z);break}else switch(Z){case Aa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pf:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Bx:Dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zx:Dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Dt("WebGLState: Invalid blending: ",Z);break}T=null,N=null,L=null,O=null,w.set(0,0,0),U=0,S=Z,Y=wt}return}Pe=Pe||Ne,ye=ye||xe,Ve=Ve||ze,(Ne!==b||Pe!==D)&&(i.blendEquationSeparate(qe[Ne],qe[Pe]),b=Ne,D=Pe),(xe!==T||ze!==N||ye!==L||Ve!==O)&&(i.blendFuncSeparate(Ke[xe],Ke[ze],Ke[ye],Ke[Ve]),T=xe,N=ze,L=ye,O=Ve),(ht.equals(w)===!1||ot!==U)&&(i.blendColor(ht.r,ht.g,ht.b,ot),w.copy(ht),U=ot),S=Z,Y=!1}function at(Z,Ne){Z.side===_r?we(i.CULL_FACE):fe(i.CULL_FACE);let xe=Z.side===ni;Ne&&(xe=!xe),Pt(xe),Z.blending===Aa&&Z.transparent===!1?St(Ji):St(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),u.setFunc(Z.depthFunc),u.setTest(Z.depthTest),u.setMask(Z.depthWrite),c.setMask(Z.colorWrite);const ze=Z.stencilWrite;h.setTest(ze),ze&&(h.setMask(Z.stencilWriteMask),h.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),h.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),J(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?fe(i.SAMPLE_ALPHA_TO_COVERAGE):we(i.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(Z){H!==Z&&(Z?i.frontFace(i.CW):i.frontFace(i.CCW),H=Z)}function Tt(Z){Z!==kE?(fe(i.CULL_FACE),Z!==ee&&(Z===jx?i.cullFace(i.BACK):Z===jE?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):we(i.CULL_FACE),ee=Z}function Zt(Z){Z!==G&&(W&&i.lineWidth(Z),G=Z)}function J(Z,Ne,xe){Z?(fe(i.POLYGON_OFFSET_FILL),(Q!==Ne||V!==xe)&&(Q=Ne,V=xe,u.getReversed()&&(Ne=-Ne),i.polygonOffset(Ne,xe))):we(i.POLYGON_OFFSET_FILL)}function zt(Z){Z?fe(i.SCISSOR_TEST):we(i.SCISSOR_TEST)}function mt(Z){Z===void 0&&(Z=i.TEXTURE0+k-1),se!==Z&&(i.activeTexture(Z),se=Z)}function Ft(Z,Ne,xe){xe===void 0&&(se===null?xe=i.TEXTURE0+k-1:xe=se);let ze=B[xe];ze===void 0&&(ze={type:void 0,texture:void 0},B[xe]=ze),(ze.type!==Z||ze.texture!==Ne)&&(se!==xe&&(i.activeTexture(xe),se=xe),i.bindTexture(Z,Ne||me[Z]),ze.type=Z,ze.texture=Ne)}function ke(){const Z=B[se];Z!==void 0&&Z.type!==void 0&&(i.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function Vt(){try{i.compressedTexImage2D(...arguments)}catch(Z){Dt("WebGLState:",Z)}}function I(){try{i.compressedTexImage3D(...arguments)}catch(Z){Dt("WebGLState:",Z)}}function C(){try{i.texSubImage2D(...arguments)}catch(Z){Dt("WebGLState:",Z)}}function ae(){try{i.texSubImage3D(...arguments)}catch(Z){Dt("WebGLState:",Z)}}function ve(){try{i.compressedTexSubImage2D(...arguments)}catch(Z){Dt("WebGLState:",Z)}}function Me(){try{i.compressedTexSubImage3D(...arguments)}catch(Z){Dt("WebGLState:",Z)}}function Re(){try{i.texStorage2D(...arguments)}catch(Z){Dt("WebGLState:",Z)}}function Ie(){try{i.texStorage3D(...arguments)}catch(Z){Dt("WebGLState:",Z)}}function ge(){try{i.texImage2D(...arguments)}catch(Z){Dt("WebGLState:",Z)}}function _e(){try{i.texImage3D(...arguments)}catch(Z){Dt("WebGLState:",Z)}}function je(Z){return x[Z]!==void 0?x[Z]:i.getParameter(Z)}function F(Z,Ne){x[Z]!==Ne&&(i.pixelStorei(Z,Ne),x[Z]=Ne)}function q(Z){Te.equals(Z)===!1&&(i.scissor(Z.x,Z.y,Z.z,Z.w),Te.copy(Z))}function Se(Z){Ae.equals(Z)===!1&&(i.viewport(Z.x,Z.y,Z.z,Z.w),Ae.copy(Z))}function Xe(Z,Ne){let xe=m.get(Ne);xe===void 0&&(xe=new WeakMap,m.set(Ne,xe));let ze=xe.get(Z);ze===void 0&&(ze=i.getUniformBlockIndex(Ne,Z.name),xe.set(Z,ze))}function ct(Z,Ne){const ze=m.get(Ne).get(Z);f.get(Ne)!==ze&&(i.uniformBlockBinding(Ne,ze,Z.__bindingPointIndex),f.set(Ne,ze))}function pt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),u.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),v={},x={},se=null,B={},g={},M=new WeakMap,E=[],A=null,y=!1,S=null,b=null,T=null,N=null,D=null,L=null,O=null,w=new yt(0,0,0),U=0,Y=!1,H=null,ee=null,G=null,Q=null,V=null,Te.set(0,0,i.canvas.width,i.canvas.height),Ae.set(0,0,i.canvas.width,i.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:fe,disable:we,bindFramebuffer:Oe,drawBuffers:et,useProgram:Ze,setBlending:St,setMaterial:at,setFlipSided:Pt,setCullFace:Tt,setLineWidth:Zt,setPolygonOffset:J,setScissorTest:zt,activeTexture:mt,bindTexture:Ft,unbindTexture:ke,compressedTexImage2D:Vt,compressedTexImage3D:I,texImage2D:ge,texImage3D:_e,pixelStorei:F,getParameter:je,updateUBOMapping:Xe,uniformBlockBinding:ct,texStorage2D:Re,texStorage3D:Ie,texSubImage2D:C,texSubImage3D:ae,compressedTexSubImage2D:ve,compressedTexSubImage3D:Me,scissor:q,viewport:Se,reset:pt}}function $A(i,e,t,s,a,c,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new nt,v=new WeakMap,x=new Set;let g;const M=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(I,C){return E?new OffscreenCanvas(I,C):ru("canvas")}function y(I,C,ae){let ve=1;const Me=Vt(I);if((Me.width>ae||Me.height>ae)&&(ve=ae/Math.max(Me.width,Me.height)),ve<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const Re=Math.floor(ve*Me.width),Ie=Math.floor(ve*Me.height);g===void 0&&(g=A(Re,Ie));const ge=C?A(Re,Ie):g;return ge.width=Re,ge.height=Ie,ge.getContext("2d").drawImage(I,0,0,Re,Ie),ft("WebGLRenderer: Texture has been resized from ("+Me.width+"x"+Me.height+") to ("+Re+"x"+Ie+")."),ge}else return"data"in I&&ft("WebGLRenderer: Image in DataTexture is too big ("+Me.width+"x"+Me.height+")."),I;return I}function S(I){return I.generateMipmaps}function b(I){i.generateMipmap(I)}function T(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function N(I,C,ae,ve,Me,Re=!1){if(I!==null){if(i[I]!==void 0)return i[I];ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Ie;ve&&(Ie=e.get("EXT_texture_norm16"),Ie||ft("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ge=C;if(C===i.RED&&(ae===i.FLOAT&&(ge=i.R32F),ae===i.HALF_FLOAT&&(ge=i.R16F),ae===i.UNSIGNED_BYTE&&(ge=i.R8),ae===i.UNSIGNED_SHORT&&Ie&&(ge=Ie.R16_EXT),ae===i.SHORT&&Ie&&(ge=Ie.R16_SNORM_EXT)),C===i.RED_INTEGER&&(ae===i.UNSIGNED_BYTE&&(ge=i.R8UI),ae===i.UNSIGNED_SHORT&&(ge=i.R16UI),ae===i.UNSIGNED_INT&&(ge=i.R32UI),ae===i.BYTE&&(ge=i.R8I),ae===i.SHORT&&(ge=i.R16I),ae===i.INT&&(ge=i.R32I)),C===i.RG&&(ae===i.FLOAT&&(ge=i.RG32F),ae===i.HALF_FLOAT&&(ge=i.RG16F),ae===i.UNSIGNED_BYTE&&(ge=i.RG8),ae===i.UNSIGNED_SHORT&&Ie&&(ge=Ie.RG16_EXT),ae===i.SHORT&&Ie&&(ge=Ie.RG16_SNORM_EXT)),C===i.RG_INTEGER&&(ae===i.UNSIGNED_BYTE&&(ge=i.RG8UI),ae===i.UNSIGNED_SHORT&&(ge=i.RG16UI),ae===i.UNSIGNED_INT&&(ge=i.RG32UI),ae===i.BYTE&&(ge=i.RG8I),ae===i.SHORT&&(ge=i.RG16I),ae===i.INT&&(ge=i.RG32I)),C===i.RGB_INTEGER&&(ae===i.UNSIGNED_BYTE&&(ge=i.RGB8UI),ae===i.UNSIGNED_SHORT&&(ge=i.RGB16UI),ae===i.UNSIGNED_INT&&(ge=i.RGB32UI),ae===i.BYTE&&(ge=i.RGB8I),ae===i.SHORT&&(ge=i.RGB16I),ae===i.INT&&(ge=i.RGB32I)),C===i.RGBA_INTEGER&&(ae===i.UNSIGNED_BYTE&&(ge=i.RGBA8UI),ae===i.UNSIGNED_SHORT&&(ge=i.RGBA16UI),ae===i.UNSIGNED_INT&&(ge=i.RGBA32UI),ae===i.BYTE&&(ge=i.RGBA8I),ae===i.SHORT&&(ge=i.RGBA16I),ae===i.INT&&(ge=i.RGBA32I)),C===i.RGB&&(ae===i.UNSIGNED_SHORT&&Ie&&(ge=Ie.RGB16_EXT),ae===i.SHORT&&Ie&&(ge=Ie.RGB16_SNORM_EXT),ae===i.UNSIGNED_INT_5_9_9_9_REV&&(ge=i.RGB9_E5),ae===i.UNSIGNED_INT_10F_11F_11F_REV&&(ge=i.R11F_G11F_B10F)),C===i.RGBA){const _e=Re?iu:Nt.getTransfer(Me);ae===i.FLOAT&&(ge=i.RGBA32F),ae===i.HALF_FLOAT&&(ge=i.RGBA16F),ae===i.UNSIGNED_BYTE&&(ge=_e===kt?i.SRGB8_ALPHA8:i.RGBA8),ae===i.UNSIGNED_SHORT&&Ie&&(ge=Ie.RGBA16_EXT),ae===i.SHORT&&Ie&&(ge=Ie.RGBA16_SNORM_EXT),ae===i.UNSIGNED_SHORT_4_4_4_4&&(ge=i.RGBA4),ae===i.UNSIGNED_SHORT_5_5_5_1&&(ge=i.RGB5_A1)}return(ge===i.R16F||ge===i.R32F||ge===i.RG16F||ge===i.RG32F||ge===i.RGBA16F||ge===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function D(I,C){let ae;return I?C===null||C===tr||C===Xo?ae=i.DEPTH24_STENCIL8:C===Zi?ae=i.DEPTH32F_STENCIL8:C===Wo&&(ae=i.DEPTH24_STENCIL8,ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===tr||C===Xo?ae=i.DEPTH_COMPONENT24:C===Zi?ae=i.DEPTH_COMPONENT32F:C===Wo&&(ae=i.DEPTH_COMPONENT16),ae}function L(I,C){return S(I)===!0||I.isFramebufferTexture&&I.minFilter!==Cn&&I.minFilter!==Un?Math.log2(Math.max(C.width,C.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?C.mipmaps.length:1}function O(I){const C=I.target;C.removeEventListener("dispose",O),U(C),C.isVideoTexture&&v.delete(C),C.isHTMLTexture&&x.delete(C)}function w(I){const C=I.target;C.removeEventListener("dispose",w),H(C)}function U(I){const C=s.get(I);if(C.__webglInit===void 0)return;const ae=I.source,ve=M.get(ae);if(ve){const Me=ve[C.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&Y(I),Object.keys(ve).length===0&&M.delete(ae)}s.remove(I)}function Y(I){const C=s.get(I);i.deleteTexture(C.__webglTexture);const ae=I.source,ve=M.get(ae);delete ve[C.__cacheKey],u.memory.textures--}function H(I){const C=s.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),s.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(C.__webglFramebuffer[ve]))for(let Me=0;Me<C.__webglFramebuffer[ve].length;Me++)i.deleteFramebuffer(C.__webglFramebuffer[ve][Me]);else i.deleteFramebuffer(C.__webglFramebuffer[ve]);C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer[ve])}else{if(Array.isArray(C.__webglFramebuffer))for(let ve=0;ve<C.__webglFramebuffer.length;ve++)i.deleteFramebuffer(C.__webglFramebuffer[ve]);else i.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&i.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let ve=0;ve<C.__webglColorRenderbuffer.length;ve++)C.__webglColorRenderbuffer[ve]&&i.deleteRenderbuffer(C.__webglColorRenderbuffer[ve]);C.__webglDepthRenderbuffer&&i.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const ae=I.textures;for(let ve=0,Me=ae.length;ve<Me;ve++){const Re=s.get(ae[ve]);Re.__webglTexture&&(i.deleteTexture(Re.__webglTexture),u.memory.textures--),s.remove(ae[ve])}s.remove(I)}let ee=0;function G(){ee=0}function Q(){return ee}function V(I){ee=I}function k(){const I=ee;return I>=a.maxTextures&&ft("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+a.maxTextures),ee+=1,I}function W(I){const C=[];return C.push(I.wrapS),C.push(I.wrapT),C.push(I.wrapR||0),C.push(I.magFilter),C.push(I.minFilter),C.push(I.anisotropy),C.push(I.internalFormat),C.push(I.format),C.push(I.type),C.push(I.generateMipmaps),C.push(I.premultiplyAlpha),C.push(I.flipY),C.push(I.unpackAlignment),C.push(I.colorSpace),C.join()}function $(I,C){const ae=s.get(I);if(I.isVideoTexture&&Ft(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&ae.__version!==I.version){const ve=I.image;if(ve===null)ft("WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)ft("WebGLRenderer: Texture marked for update but image is incomplete");else{we(ae,I,C);return}}else I.isExternalTexture&&(ae.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,ae.__webglTexture,i.TEXTURE0+C)}function le(I,C){const ae=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&ae.__version!==I.version){we(ae,I,C);return}else I.isExternalTexture&&(ae.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,ae.__webglTexture,i.TEXTURE0+C)}function se(I,C){const ae=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&ae.__version!==I.version){we(ae,I,C);return}t.bindTexture(i.TEXTURE_3D,ae.__webglTexture,i.TEXTURE0+C)}function B(I,C){const ae=s.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&ae.__version!==I.version){Oe(ae,I,C);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ae.__webglTexture,i.TEXTURE0+C)}const re={[bf]:i.REPEAT,[yr]:i.CLAMP_TO_EDGE,[Tf]:i.MIRRORED_REPEAT},Fe={[Cn]:i.NEAREST,[ab]:i.NEAREST_MIPMAP_NEAREST,[sc]:i.NEAREST_MIPMAP_LINEAR,[Un]:i.LINEAR,[xh]:i.LINEAR_MIPMAP_NEAREST,[As]:i.LINEAR_MIPMAP_LINEAR},Te={[cb]:i.NEVER,[pb]:i.ALWAYS,[ub]:i.LESS,[Ip]:i.LEQUAL,[db]:i.EQUAL,[Up]:i.GEQUAL,[hb]:i.GREATER,[fb]:i.NOTEQUAL};function Ae(I,C){if(C.type===Zi&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===Un||C.magFilter===xh||C.magFilter===sc||C.magFilter===As||C.minFilter===Un||C.minFilter===xh||C.minFilter===sc||C.minFilter===As)&&ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,re[C.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,re[C.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,re[C.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,Fe[C.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,Fe[C.minFilter]),C.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,Te[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Cn||C.minFilter!==sc&&C.minFilter!==As||C.type===Zi&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||s.get(C).__currentAnisotropy){const ae=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,a.getMaxAnisotropy())),s.get(C).__currentAnisotropy=C.anisotropy}}}function X(I,C){let ae=!1;I.__webglInit===void 0&&(I.__webglInit=!0,C.addEventListener("dispose",O));const ve=C.source;let Me=M.get(ve);Me===void 0&&(Me={},M.set(ve,Me));const Re=W(C);if(Re!==I.__cacheKey){Me[Re]===void 0&&(Me[Re]={texture:i.createTexture(),usedTimes:0},u.memory.textures++,ae=!0),Me[Re].usedTimes++;const Ie=Me[I.__cacheKey];Ie!==void 0&&(Me[I.__cacheKey].usedTimes--,Ie.usedTimes===0&&Y(C)),I.__cacheKey=Re,I.__webglTexture=Me[Re].texture}return ae}function me(I,C,ae){return Math.floor(Math.floor(I/ae)/C)}function fe(I,C,ae,ve){const Re=I.updateRanges;if(Re.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,C.width,C.height,ae,ve,C.data);else{Re.sort((F,q)=>F.start-q.start);let Ie=0;for(let F=1;F<Re.length;F++){const q=Re[Ie],Se=Re[F],Xe=q.start+q.count,ct=me(Se.start,C.width,4),pt=me(q.start,C.width,4);Se.start<=Xe+1&&ct===pt&&me(Se.start+Se.count-1,C.width,4)===ct?q.count=Math.max(q.count,Se.start+Se.count-q.start):(++Ie,Re[Ie]=Se)}Re.length=Ie+1;const ge=t.getParameter(i.UNPACK_ROW_LENGTH),_e=t.getParameter(i.UNPACK_SKIP_PIXELS),je=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,C.width);for(let F=0,q=Re.length;F<q;F++){const Se=Re[F],Xe=Math.floor(Se.start/4),ct=Math.ceil(Se.count/4),pt=Xe%C.width,Z=Math.floor(Xe/C.width),Ne=ct,xe=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,pt),t.pixelStorei(i.UNPACK_SKIP_ROWS,Z),t.texSubImage2D(i.TEXTURE_2D,0,pt,Z,Ne,xe,ae,ve,C.data)}I.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ge),t.pixelStorei(i.UNPACK_SKIP_PIXELS,_e),t.pixelStorei(i.UNPACK_SKIP_ROWS,je)}}function we(I,C,ae){let ve=i.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(ve=i.TEXTURE_2D_ARRAY),C.isData3DTexture&&(ve=i.TEXTURE_3D);const Me=X(I,C),Re=C.source;t.bindTexture(ve,I.__webglTexture,i.TEXTURE0+ae);const Ie=s.get(Re);if(Re.version!==Ie.__version||Me===!0){if(t.activeTexture(i.TEXTURE0+ae),(typeof ImageBitmap<"u"&&C.image instanceof ImageBitmap)===!1){const xe=Nt.getPrimaries(Nt.workingColorSpace),ze=C.colorSpace===es?null:Nt.getPrimaries(C.colorSpace),Pe=C.colorSpace===es||xe===ze?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe)}t.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment);let _e=y(C.image,!1,a.maxTextureSize);_e=ke(C,_e);const je=c.convert(C.format,C.colorSpace),F=c.convert(C.type);let q=N(C.internalFormat,je,F,C.normalized,C.colorSpace,C.isVideoTexture);Ae(ve,C);let Se;const Xe=C.mipmaps,ct=C.isVideoTexture!==!0,pt=Ie.__version===void 0||Me===!0,Z=Re.dataReady,Ne=L(C,_e);if(C.isDepthTexture)q=D(C.format===Rs,C.type),pt&&(ct?t.texStorage2D(i.TEXTURE_2D,1,q,_e.width,_e.height):t.texImage2D(i.TEXTURE_2D,0,q,_e.width,_e.height,0,je,F,null));else if(C.isDataTexture)if(Xe.length>0){ct&&pt&&t.texStorage2D(i.TEXTURE_2D,Ne,q,Xe[0].width,Xe[0].height);for(let xe=0,ze=Xe.length;xe<ze;xe++)Se=Xe[xe],ct?Z&&t.texSubImage2D(i.TEXTURE_2D,xe,0,0,Se.width,Se.height,je,F,Se.data):t.texImage2D(i.TEXTURE_2D,xe,q,Se.width,Se.height,0,je,F,Se.data);C.generateMipmaps=!1}else ct?(pt&&t.texStorage2D(i.TEXTURE_2D,Ne,q,_e.width,_e.height),Z&&fe(C,_e,je,F)):t.texImage2D(i.TEXTURE_2D,0,q,_e.width,_e.height,0,je,F,_e.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){ct&&pt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ne,q,Xe[0].width,Xe[0].height,_e.depth);for(let xe=0,ze=Xe.length;xe<ze;xe++)if(Se=Xe[xe],C.format!==ki)if(je!==null)if(ct){if(Z)if(C.layerUpdates.size>0){const Pe=_v(Se.width,Se.height,C.format,C.type);for(const ye of C.layerUpdates){const Ve=Se.data.subarray(ye*Pe/Se.data.BYTES_PER_ELEMENT,(ye+1)*Pe/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xe,0,0,ye,Se.width,Se.height,1,je,Ve)}C.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xe,0,0,0,Se.width,Se.height,_e.depth,je,Se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,xe,q,Se.width,Se.height,_e.depth,0,Se.data,0,0);else ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ct?Z&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,xe,0,0,0,Se.width,Se.height,_e.depth,je,F,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,xe,q,Se.width,Se.height,_e.depth,0,je,F,Se.data)}else{ct&&pt&&t.texStorage2D(i.TEXTURE_2D,Ne,q,Xe[0].width,Xe[0].height);for(let xe=0,ze=Xe.length;xe<ze;xe++)Se=Xe[xe],C.format!==ki?je!==null?ct?Z&&t.compressedTexSubImage2D(i.TEXTURE_2D,xe,0,0,Se.width,Se.height,je,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,xe,q,Se.width,Se.height,0,Se.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?Z&&t.texSubImage2D(i.TEXTURE_2D,xe,0,0,Se.width,Se.height,je,F,Se.data):t.texImage2D(i.TEXTURE_2D,xe,q,Se.width,Se.height,0,je,F,Se.data)}else if(C.isDataArrayTexture)if(ct){if(pt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ne,q,_e.width,_e.height,_e.depth),Z)if(C.layerUpdates.size>0){const xe=_v(_e.width,_e.height,C.format,C.type);for(const ze of C.layerUpdates){const Pe=_e.data.subarray(ze*xe/_e.data.BYTES_PER_ELEMENT,(ze+1)*xe/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ze,_e.width,_e.height,1,je,F,Pe)}C.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,je,F,_e.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,q,_e.width,_e.height,_e.depth,0,je,F,_e.data);else if(C.isData3DTexture)ct?(pt&&t.texStorage3D(i.TEXTURE_3D,Ne,q,_e.width,_e.height,_e.depth),Z&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,je,F,_e.data)):t.texImage3D(i.TEXTURE_3D,0,q,_e.width,_e.height,_e.depth,0,je,F,_e.data);else if(C.isFramebufferTexture){if(pt)if(ct)t.texStorage2D(i.TEXTURE_2D,Ne,q,_e.width,_e.height);else{let xe=_e.width,ze=_e.height;for(let Pe=0;Pe<Ne;Pe++)t.texImage2D(i.TEXTURE_2D,Pe,q,xe,ze,0,je,F,null),xe>>=1,ze>>=1}}else if(C.isHTMLTexture){if("texElementImage2D"in i){const xe=i.canvas;if(xe.hasAttribute("layoutsubtree")||xe.setAttribute("layoutsubtree","true"),_e.parentNode!==xe){xe.appendChild(_e),x.add(C),xe.onpaint=ht=>{const ot=ht.changedElements;for(const wt of x)ot.includes(wt.image)&&(wt.needsUpdate=!0)},xe.requestPaint();return}const ze=0,Pe=i.RGBA,ye=i.RGBA,Ve=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,ze,Pe,ye,Ve,_e),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Xe.length>0){if(ct&&pt){const xe=Vt(Xe[0]);t.texStorage2D(i.TEXTURE_2D,Ne,q,xe.width,xe.height)}for(let xe=0,ze=Xe.length;xe<ze;xe++)Se=Xe[xe],ct?Z&&t.texSubImage2D(i.TEXTURE_2D,xe,0,0,je,F,Se):t.texImage2D(i.TEXTURE_2D,xe,q,je,F,Se);C.generateMipmaps=!1}else if(ct){if(pt){const xe=Vt(_e);t.texStorage2D(i.TEXTURE_2D,Ne,q,xe.width,xe.height)}Z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,je,F,_e)}else t.texImage2D(i.TEXTURE_2D,0,q,je,F,_e);S(C)&&b(ve),Ie.__version=Re.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function Oe(I,C,ae){if(C.image.length!==6)return;const ve=X(I,C),Me=C.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+ae);const Re=s.get(Me);if(Me.version!==Re.__version||ve===!0){t.activeTexture(i.TEXTURE0+ae);const Ie=Nt.getPrimaries(Nt.workingColorSpace),ge=C.colorSpace===es?null:Nt.getPrimaries(C.colorSpace),_e=C.colorSpace===es||Ie===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const je=C.isCompressedTexture||C.image[0].isCompressedTexture,F=C.image[0]&&C.image[0].isDataTexture,q=[];for(let ye=0;ye<6;ye++)!je&&!F?q[ye]=y(C.image[ye],!0,a.maxCubemapSize):q[ye]=F?C.image[ye].image:C.image[ye],q[ye]=ke(C,q[ye]);const Se=q[0],Xe=c.convert(C.format,C.colorSpace),ct=c.convert(C.type),pt=N(C.internalFormat,Xe,ct,C.normalized,C.colorSpace),Z=C.isVideoTexture!==!0,Ne=Re.__version===void 0||ve===!0,xe=Me.dataReady;let ze=L(C,Se);Ae(i.TEXTURE_CUBE_MAP,C);let Pe;if(je){Z&&Ne&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ze,pt,Se.width,Se.height);for(let ye=0;ye<6;ye++){Pe=q[ye].mipmaps;for(let Ve=0;Ve<Pe.length;Ve++){const ht=Pe[Ve];C.format!==ki?Xe!==null?Z?xe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ve,0,0,ht.width,ht.height,Xe,ht.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ve,pt,ht.width,ht.height,0,ht.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ve,0,0,ht.width,ht.height,Xe,ct,ht.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ve,pt,ht.width,ht.height,0,Xe,ct,ht.data)}}}else{if(Pe=C.mipmaps,Z&&Ne){Pe.length>0&&ze++;const ye=Vt(q[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ze,pt,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(F){Z?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,q[ye].width,q[ye].height,Xe,ct,q[ye].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,pt,q[ye].width,q[ye].height,0,Xe,ct,q[ye].data);for(let Ve=0;Ve<Pe.length;Ve++){const ot=Pe[Ve].image[ye].image;Z?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ve+1,0,0,ot.width,ot.height,Xe,ct,ot.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ve+1,pt,ot.width,ot.height,0,Xe,ct,ot.data)}}else{Z?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Xe,ct,q[ye]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,pt,Xe,ct,q[ye]);for(let Ve=0;Ve<Pe.length;Ve++){const ht=Pe[Ve];Z?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ve+1,0,0,Xe,ct,ht.image[ye]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ve+1,pt,Xe,ct,ht.image[ye])}}}S(C)&&b(i.TEXTURE_CUBE_MAP),Re.__version=Me.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function et(I,C,ae,ve,Me,Re){const Ie=c.convert(ae.format,ae.colorSpace),ge=c.convert(ae.type),_e=N(ae.internalFormat,Ie,ge,ae.normalized,ae.colorSpace),je=s.get(C),F=s.get(ae);if(F.__renderTarget=C,!je.__hasExternalTextures){const q=Math.max(1,C.width>>Re),Se=Math.max(1,C.height>>Re);Me===i.TEXTURE_3D||Me===i.TEXTURE_2D_ARRAY?t.texImage3D(Me,Re,_e,q,Se,C.depth,0,Ie,ge,null):t.texImage2D(Me,Re,_e,q,Se,0,Ie,ge,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),mt(C)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ve,Me,F.__webglTexture,0,zt(C)):(Me===i.TEXTURE_2D||Me>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Me<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ve,Me,F.__webglTexture,Re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ze(I,C,ae){if(i.bindRenderbuffer(i.RENDERBUFFER,I),C.depthBuffer){const ve=C.depthTexture,Me=ve&&ve.isDepthTexture?ve.type:null,Re=D(C.stencilBuffer,Me),Ie=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;mt(C)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,zt(C),Re,C.width,C.height):ae?i.renderbufferStorageMultisample(i.RENDERBUFFER,zt(C),Re,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,Re,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ie,i.RENDERBUFFER,I)}else{const ve=C.textures;for(let Me=0;Me<ve.length;Me++){const Re=ve[Me],Ie=c.convert(Re.format,Re.colorSpace),ge=c.convert(Re.type),_e=N(Re.internalFormat,Ie,ge,Re.normalized,Re.colorSpace);mt(C)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,zt(C),_e,C.width,C.height):ae?i.renderbufferStorageMultisample(i.RENDERBUFFER,zt(C),_e,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,_e,C.width,C.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function qe(I,C,ae){const ve=C.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Me=s.get(C.depthTexture);if(Me.__renderTarget=C,(!Me.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),ve){if(Me.__webglInit===void 0&&(Me.__webglInit=!0,C.depthTexture.addEventListener("dispose",O)),Me.__webglTexture===void 0){Me.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Me.__webglTexture),Ae(i.TEXTURE_CUBE_MAP,C.depthTexture);const je=c.convert(C.depthTexture.format),F=c.convert(C.depthTexture.type);let q;C.depthTexture.format===br?q=i.DEPTH_COMPONENT24:C.depthTexture.format===Rs&&(q=i.DEPTH24_STENCIL8);for(let Se=0;Se<6;Se++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,q,C.width,C.height,0,je,F,null)}}else $(C.depthTexture,0);const Re=Me.__webglTexture,Ie=zt(C),ge=ve?i.TEXTURE_CUBE_MAP_POSITIVE_X+ae:i.TEXTURE_2D,_e=C.depthTexture.format===Rs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(C.depthTexture.format===br)mt(C)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_e,ge,Re,0,Ie):i.framebufferTexture2D(i.FRAMEBUFFER,_e,ge,Re,0);else if(C.depthTexture.format===Rs)mt(C)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_e,ge,Re,0,Ie):i.framebufferTexture2D(i.FRAMEBUFFER,_e,ge,Re,0);else throw new Error("Unknown depthTexture format")}function Ke(I){const C=s.get(I),ae=I.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==I.depthTexture){const ve=I.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),ve){const Me=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,ve.removeEventListener("dispose",Me)};ve.addEventListener("dispose",Me),C.__depthDisposeCallback=Me}C.__boundDepthTexture=ve}if(I.depthTexture&&!C.__autoAllocateDepthBuffer)if(ae)for(let ve=0;ve<6;ve++)qe(C.__webglFramebuffer[ve],I,ve);else{const ve=I.texture.mipmaps;ve&&ve.length>0?qe(C.__webglFramebuffer[0],I,0):qe(C.__webglFramebuffer,I,0)}else if(ae){C.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)if(t.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer[ve]),C.__webglDepthbuffer[ve]===void 0)C.__webglDepthbuffer[ve]=i.createRenderbuffer(),Ze(C.__webglDepthbuffer[ve],I,!1);else{const Me=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=C.__webglDepthbuffer[ve];i.bindRenderbuffer(i.RENDERBUFFER,Re),i.framebufferRenderbuffer(i.FRAMEBUFFER,Me,i.RENDERBUFFER,Re)}}else{const ve=I.texture.mipmaps;if(ve&&ve.length>0?t.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=i.createRenderbuffer(),Ze(C.__webglDepthbuffer,I,!1);else{const Me=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=C.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Re),i.framebufferRenderbuffer(i.FRAMEBUFFER,Me,i.RENDERBUFFER,Re)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function St(I,C,ae){const ve=s.get(I);C!==void 0&&et(ve.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ae!==void 0&&Ke(I)}function at(I){const C=I.texture,ae=s.get(I),ve=s.get(C);I.addEventListener("dispose",w);const Me=I.textures,Re=I.isWebGLCubeRenderTarget===!0,Ie=Me.length>1;if(Ie||(ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture()),ve.__version=C.version,u.memory.textures++),Re){ae.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(C.mipmaps&&C.mipmaps.length>0){ae.__webglFramebuffer[ge]=[];for(let _e=0;_e<C.mipmaps.length;_e++)ae.__webglFramebuffer[ge][_e]=i.createFramebuffer()}else ae.__webglFramebuffer[ge]=i.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){ae.__webglFramebuffer=[];for(let ge=0;ge<C.mipmaps.length;ge++)ae.__webglFramebuffer[ge]=i.createFramebuffer()}else ae.__webglFramebuffer=i.createFramebuffer();if(Ie)for(let ge=0,_e=Me.length;ge<_e;ge++){const je=s.get(Me[ge]);je.__webglTexture===void 0&&(je.__webglTexture=i.createTexture(),u.memory.textures++)}if(I.samples>0&&mt(I)===!1){ae.__webglMultisampledFramebuffer=i.createFramebuffer(),ae.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer);for(let ge=0;ge<Me.length;ge++){const _e=Me[ge];ae.__webglColorRenderbuffer[ge]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ae.__webglColorRenderbuffer[ge]);const je=c.convert(_e.format,_e.colorSpace),F=c.convert(_e.type),q=N(_e.internalFormat,je,F,_e.normalized,_e.colorSpace,I.isXRRenderTarget===!0),Se=zt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,q,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,ae.__webglColorRenderbuffer[ge])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(ae.__webglDepthRenderbuffer=i.createRenderbuffer(),Ze(ae.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Re){t.bindTexture(i.TEXTURE_CUBE_MAP,ve.__webglTexture),Ae(i.TEXTURE_CUBE_MAP,C);for(let ge=0;ge<6;ge++)if(C.mipmaps&&C.mipmaps.length>0)for(let _e=0;_e<C.mipmaps.length;_e++)et(ae.__webglFramebuffer[ge][_e],I,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,_e);else et(ae.__webglFramebuffer[ge],I,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);S(C)&&b(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let ge=0,_e=Me.length;ge<_e;ge++){const je=Me[ge],F=s.get(je);let q=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(q=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(q,F.__webglTexture),Ae(q,je),et(ae.__webglFramebuffer,I,je,i.COLOR_ATTACHMENT0+ge,q,0),S(je)&&b(q)}t.unbindTexture()}else{let ge=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ge=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,ve.__webglTexture),Ae(ge,C),C.mipmaps&&C.mipmaps.length>0)for(let _e=0;_e<C.mipmaps.length;_e++)et(ae.__webglFramebuffer[_e],I,C,i.COLOR_ATTACHMENT0,ge,_e);else et(ae.__webglFramebuffer,I,C,i.COLOR_ATTACHMENT0,ge,0);S(C)&&b(ge),t.unbindTexture()}I.depthBuffer&&Ke(I)}function Pt(I){const C=I.textures;for(let ae=0,ve=C.length;ae<ve;ae++){const Me=C[ae];if(S(Me)){const Re=T(I),Ie=s.get(Me).__webglTexture;t.bindTexture(Re,Ie),b(Re),t.unbindTexture()}}}const Tt=[],Zt=[];function J(I){if(I.samples>0){if(mt(I)===!1){const C=I.textures,ae=I.width,ve=I.height;let Me=i.COLOR_BUFFER_BIT;const Re=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ie=s.get(I),ge=C.length>1;if(ge)for(let je=0;je<C.length;je++)t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+je,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+je,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);const _e=I.texture.mipmaps;_e&&_e.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let je=0;je<C.length;je++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Me|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Me|=i.STENCIL_BUFFER_BIT)),ge){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[je]);const F=s.get(C[je]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,F,0)}i.blitFramebuffer(0,0,ae,ve,0,0,ae,ve,Me,i.NEAREST),f===!0&&(Tt.length=0,Zt.length=0,Tt.push(i.COLOR_ATTACHMENT0+je),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Tt.push(Re),Zt.push(Re),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Zt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Tt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ge)for(let je=0;je<C.length;je++){t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+je,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[je]);const F=s.get(C[je]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+je,i.TEXTURE_2D,F,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&f){const C=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[C])}}}function zt(I){return Math.min(a.maxSamples,I.samples)}function mt(I){const C=s.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Ft(I){const C=u.render.frame;v.get(I)!==C&&(v.set(I,C),I.update())}function ke(I,C){const ae=I.colorSpace,ve=I.format,Me=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||ae!==nu&&ae!==es&&(Nt.getTransfer(ae)===kt?(ve!==ki||Me!==di)&&ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Dt("WebGLTextures: Unsupported texture color space:",ae)),C}function Vt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(m.width=I.naturalWidth||I.width,m.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(m.width=I.displayWidth,m.height=I.displayHeight):(m.width=I.width,m.height=I.height),m}this.allocateTextureUnit=k,this.resetTextureUnits=G,this.getTextureUnits=Q,this.setTextureUnits=V,this.setTexture2D=$,this.setTexture2DArray=le,this.setTexture3D=se,this.setTextureCube=B,this.rebindTextures=St,this.setupRenderTarget=at,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=et,this.useMultisampledRTT=mt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function qA(i,e){function t(s,a=es){let c;const u=Nt.getTransfer(a);if(s===di)return i.UNSIGNED_BYTE;if(s===Rp)return i.UNSIGNED_SHORT_4_4_4_4;if(s===Np)return i.UNSIGNED_SHORT_5_5_5_1;if(s===T0)return i.UNSIGNED_INT_5_9_9_9_REV;if(s===w0)return i.UNSIGNED_INT_10F_11F_11F_REV;if(s===E0)return i.BYTE;if(s===b0)return i.SHORT;if(s===Wo)return i.UNSIGNED_SHORT;if(s===Ap)return i.INT;if(s===tr)return i.UNSIGNED_INT;if(s===Zi)return i.FLOAT;if(s===hi)return i.HALF_FLOAT;if(s===C0)return i.ALPHA;if(s===A0)return i.RGB;if(s===ki)return i.RGBA;if(s===br)return i.DEPTH_COMPONENT;if(s===Rs)return i.DEPTH_STENCIL;if(s===R0)return i.RED;if(s===Pp)return i.RED_INTEGER;if(s===Ls)return i.RG;if(s===Lp)return i.RG_INTEGER;if(s===Dp)return i.RGBA_INTEGER;if(s===Wc||s===Xc||s===$c||s===qc)if(u===kt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Wc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Xc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===$c)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Wc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Xc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===$c)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===qc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===wf||s===Cf||s===Af||s===Rf)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===wf)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Cf)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Af)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Rf)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Nf||s===Pf||s===Lf||s===Df||s===If||s===eu||s===Uf)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Nf||s===Pf)return u===kt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Lf)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Df)return c.COMPRESSED_R11_EAC;if(s===If)return c.COMPRESSED_SIGNED_R11_EAC;if(s===eu)return c.COMPRESSED_RG11_EAC;if(s===Uf)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Ff||s===Of||s===kf||s===jf||s===Bf||s===zf||s===Hf||s===Gf||s===Vf||s===Wf||s===Xf||s===$f||s===qf||s===Yf)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Ff)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Of)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===kf)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===jf)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Bf)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===zf)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Hf)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Gf)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Vf)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Wf)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Xf)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===$f)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===qf)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Yf)return u===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Kf||s===Zf||s===Qf)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Kf)return u===kt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Zf)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Qf)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Jf||s===ep||s===tu||s===tp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Jf)return c.COMPRESSED_RED_RGTC1_EXT;if(s===ep)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===tu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===tp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Xo?i.UNSIGNED_INT_24_8:i[s]!==void 0?i[s]:null}return{convert:t}}const YA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,KA=`
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

}`;class ZA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const s=new B0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new Fn({vertexShader:YA,fragmentShader:KA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wi(new el(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class QA extends as{constructor(e,t){super();const s=this;let a=null,c=1,u=null,h="local-floor",f=1,m=null,v=null,x=null,g=null,M=null,E=null;const A=typeof XRWebGLBinding<"u",y=new ZA,S={},b=t.getContextAttributes();let T=null,N=null;const D=[],L=[],O=new nt;let w=null;const U=new Mi;U.viewport=new on;const Y=new Mi;Y.viewport=new on;const H=[U,Y],ee=new r1;let G=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let me=D[X];return me===void 0&&(me=new bh,D[X]=me),me.getTargetRaySpace()},this.getControllerGrip=function(X){let me=D[X];return me===void 0&&(me=new bh,D[X]=me),me.getGripSpace()},this.getHand=function(X){let me=D[X];return me===void 0&&(me=new bh,D[X]=me),me.getHandSpace()};function V(X){const me=L.indexOf(X.inputSource);if(me===-1)return;const fe=D[me];fe!==void 0&&(fe.update(X.inputSource,X.frame,m||u),fe.dispatchEvent({type:X.type,data:X.inputSource}))}function k(){a.removeEventListener("select",V),a.removeEventListener("selectstart",V),a.removeEventListener("selectend",V),a.removeEventListener("squeeze",V),a.removeEventListener("squeezestart",V),a.removeEventListener("squeezeend",V),a.removeEventListener("end",k),a.removeEventListener("inputsourceschange",W);for(let X=0;X<D.length;X++){const me=L[X];me!==null&&(L[X]=null,D[X].disconnect(me))}G=null,Q=null,y.reset();for(const X in S)delete S[X];e.setRenderTarget(T),M=null,g=null,x=null,a=null,N=null,Ae.stop(),s.isPresenting=!1,e.setPixelRatio(w),e.setSize(O.width,O.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){c=X,s.isPresenting===!0&&ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){h=X,s.isPresenting===!0&&ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(X){m=X},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return x===null&&A&&(x=new XRWebGLBinding(a,t)),x},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(X){if(a=X,a!==null){if(T=e.getRenderTarget(),a.addEventListener("select",V),a.addEventListener("selectstart",V),a.addEventListener("selectend",V),a.addEventListener("squeeze",V),a.addEventListener("squeezestart",V),a.addEventListener("squeezeend",V),a.addEventListener("end",k),a.addEventListener("inputsourceschange",W),b.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(O),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,we=null,Oe=null;b.depth&&(Oe=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=b.stencil?Rs:br,we=b.stencil?Xo:tr);const et={colorFormat:t.RGBA8,depthFormat:Oe,scaleFactor:c};x=this.getBinding(),g=x.createProjectionLayer(et),a.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),N=new ii(g.textureWidth,g.textureHeight,{format:ki,type:di,depthTexture:new La(g.textureWidth,g.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const fe={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(a,t,fe),a.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),N=new ii(M.framebufferWidth,M.framebufferHeight,{format:ki,type:di,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(f),m=null,u=await a.requestReferenceSpace(h),Ae.setContext(a),Ae.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function W(X){for(let me=0;me<X.removed.length;me++){const fe=X.removed[me],we=L.indexOf(fe);we>=0&&(L[we]=null,D[we].disconnect(fe))}for(let me=0;me<X.added.length;me++){const fe=X.added[me];let we=L.indexOf(fe);if(we===-1){for(let et=0;et<D.length;et++)if(et>=L.length){L.push(fe),we=et;break}else if(L[et]===null){L[et]=fe,we=et;break}if(we===-1)break}const Oe=D[we];Oe&&Oe.connect(fe)}}const $=new ne,le=new ne;function se(X,me,fe){$.setFromMatrixPosition(me.matrixWorld),le.setFromMatrixPosition(fe.matrixWorld);const we=$.distanceTo(le),Oe=me.projectionMatrix.elements,et=fe.projectionMatrix.elements,Ze=Oe[14]/(Oe[10]-1),qe=Oe[14]/(Oe[10]+1),Ke=(Oe[9]+1)/Oe[5],St=(Oe[9]-1)/Oe[5],at=(Oe[8]-1)/Oe[0],Pt=(et[8]+1)/et[0],Tt=Ze*at,Zt=Ze*Pt,J=we/(-at+Pt),zt=J*-at;if(me.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(zt),X.translateZ(J),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Oe[10]===-1)X.projectionMatrix.copy(me.projectionMatrix),X.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const mt=Ze+J,Ft=qe+J,ke=Tt-zt,Vt=Zt+(we-zt),I=Ke*qe/Ft*mt,C=St*qe/Ft*mt;X.projectionMatrix.makePerspective(ke,Vt,I,C,mt,Ft),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function B(X,me){me===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(me.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(a===null)return;let me=X.near,fe=X.far;y.texture!==null&&(y.depthNear>0&&(me=y.depthNear),y.depthFar>0&&(fe=y.depthFar)),ee.near=Y.near=U.near=me,ee.far=Y.far=U.far=fe,(G!==ee.near||Q!==ee.far)&&(a.updateRenderState({depthNear:ee.near,depthFar:ee.far}),G=ee.near,Q=ee.far),ee.layers.mask=X.layers.mask|6,U.layers.mask=ee.layers.mask&-5,Y.layers.mask=ee.layers.mask&-3;const we=X.parent,Oe=ee.cameras;B(ee,we);for(let et=0;et<Oe.length;et++)B(Oe[et],we);Oe.length===2?se(ee,U,Y):ee.projectionMatrix.copy(U.projectionMatrix),re(X,ee,we)};function re(X,me,fe){fe===null?X.matrix.copy(me.matrixWorld):(X.matrix.copy(fe.matrixWorld),X.matrix.invert(),X.matrix.multiply(me.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(me.projectionMatrix),X.projectionMatrixInverse.copy(me.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=sp*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return ee},this.getFoveation=function(){if(!(g===null&&M===null))return f},this.setFoveation=function(X){f=X,g!==null&&(g.fixedFoveation=X),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=X)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(ee)},this.getCameraTexture=function(X){return S[X]};let Fe=null;function Te(X,me){if(v=me.getViewerPose(m||u),E=me,v!==null){const fe=v.views;M!==null&&(e.setRenderTargetFramebuffer(N,M.framebuffer),e.setRenderTarget(N));let we=!1;fe.length!==ee.cameras.length&&(ee.cameras.length=0,we=!0);for(let qe=0;qe<fe.length;qe++){const Ke=fe[qe];let St=null;if(M!==null)St=M.getViewport(Ke);else{const Pt=x.getViewSubImage(g,Ke);St=Pt.viewport,qe===0&&(e.setRenderTargetTextures(N,Pt.colorTexture,Pt.depthStencilTexture),e.setRenderTarget(N))}let at=H[qe];at===void 0&&(at=new Mi,at.layers.enable(qe),at.viewport=new on,H[qe]=at),at.matrix.fromArray(Ke.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(Ke.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(St.x,St.y,St.width,St.height),qe===0&&(ee.matrix.copy(at.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale)),we===!0&&ee.cameras.push(at)}const Oe=a.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&A){x=s.getBinding();const qe=x.getDepthInformation(fe[0]);qe&&qe.isValid&&qe.texture&&y.init(qe,a.renderState)}if(Oe&&Oe.includes("camera-access")&&A){e.state.unbindTexture(),x=s.getBinding();for(let qe=0;qe<fe.length;qe++){const Ke=fe[qe].camera;if(Ke){let St=S[Ke];St||(St=new B0,S[Ke]=St);const at=x.getCameraImage(Ke);St.sourceTexture=at}}}}for(let fe=0;fe<D.length;fe++){const we=L[fe],Oe=D[fe];we!==null&&Oe!==void 0&&Oe.update(we,me,m||u)}Fe&&Fe(X,me),me.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:me}),E=null}const Ae=new X0;Ae.setAnimationLoop(Te),this.setAnimationLoop=function(X){Fe=X},this.dispose=function(){}}}const JA=new sn,J0=new _t;J0.set(-1,0,0,0,1,0,0,0,1);function eR(i,e){function t(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function s(y,S){S.color.getRGB(y.fogColor.value,z0(i)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function a(y,S,b,T,N){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?c(y,S):S.isMeshLambertMaterial?(c(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(y,S),x(y,S)):S.isMeshPhongMaterial?(c(y,S),v(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(y,S),g(y,S),S.isMeshPhysicalMaterial&&M(y,S,N)):S.isMeshMatcapMaterial?(c(y,S),E(y,S)):S.isMeshDepthMaterial?c(y,S):S.isMeshDistanceMaterial?(c(y,S),A(y,S)):S.isMeshNormalMaterial?c(y,S):S.isLineBasicMaterial?(u(y,S),S.isLineDashedMaterial&&h(y,S)):S.isPointsMaterial?f(y,S,b,T):S.isSpriteMaterial?m(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,t(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===ni&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,t(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===ni&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,t(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,t(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const b=e.get(S),T=b.envMap,N=b.envMapRotation;T&&(y.envMap.value=T,y.envMapRotation.value.setFromMatrix4(JA.makeRotationFromEuler(N)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(J0),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,y.aoMapTransform))}function u(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform))}function h(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function f(y,S,b,T){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*b,y.scale.value=T*.5,S.map&&(y.map.value=S.map,t(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function m(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function v(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function x(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function g(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function M(y,S,b){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===ni&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=b.texture,y.transmissionSamplerSize.value.set(b.width,b.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,S){S.matcap&&(y.matcap.value=S.matcap)}function A(y,S){const b=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(b.matrixWorld),y.nearDistance.value=b.shadow.camera.near,y.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:a}}function tR(i,e,t,s){let a={},c={},u=[];const h=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function f(b,T){const N=T.program;s.uniformBlockBinding(b,N)}function m(b,T){let N=a[b.id];N===void 0&&(E(b),N=v(b),a[b.id]=N,b.addEventListener("dispose",y));const D=T.program;s.updateUBOMapping(b,D);const L=e.render.frame;c[b.id]!==L&&(g(b),c[b.id]=L)}function v(b){const T=x();b.__bindingPointIndex=T;const N=i.createBuffer(),D=b.__size,L=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,N),i.bufferData(i.UNIFORM_BUFFER,D,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,N),N}function x(){for(let b=0;b<h;b++)if(u.indexOf(b)===-1)return u.push(b),b;return Dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(b){const T=a[b.id],N=b.uniforms,D=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let L=0,O=N.length;L<O;L++){const w=Array.isArray(N[L])?N[L]:[N[L]];for(let U=0,Y=w.length;U<Y;U++){const H=w[U];if(M(H,L,U,D)===!0){const ee=H.__offset,G=Array.isArray(H.value)?H.value:[H.value];let Q=0;for(let V=0;V<G.length;V++){const k=G[V],W=A(k);typeof k=="number"||typeof k=="boolean"?(H.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,ee+Q,H.__data)):k.isMatrix3?(H.__data[0]=k.elements[0],H.__data[1]=k.elements[1],H.__data[2]=k.elements[2],H.__data[3]=0,H.__data[4]=k.elements[3],H.__data[5]=k.elements[4],H.__data[6]=k.elements[5],H.__data[7]=0,H.__data[8]=k.elements[6],H.__data[9]=k.elements[7],H.__data[10]=k.elements[8],H.__data[11]=0):ArrayBuffer.isView(k)?H.__data.set(new k.constructor(k.buffer,k.byteOffset,H.__data.length)):(k.toArray(H.__data,Q),Q+=W.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,ee,H.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function M(b,T,N,D){const L=b.value,O=T+"_"+N;if(D[O]===void 0)return typeof L=="number"||typeof L=="boolean"?D[O]=L:ArrayBuffer.isView(L)?D[O]=L.slice():D[O]=L.clone(),!0;{const w=D[O];if(typeof L=="number"||typeof L=="boolean"){if(w!==L)return D[O]=L,!0}else{if(ArrayBuffer.isView(L))return!0;if(w.equals(L)===!1)return w.copy(L),!0}}return!1}function E(b){const T=b.uniforms;let N=0;const D=16;for(let O=0,w=T.length;O<w;O++){const U=Array.isArray(T[O])?T[O]:[T[O]];for(let Y=0,H=U.length;Y<H;Y++){const ee=U[Y],G=Array.isArray(ee.value)?ee.value:[ee.value];for(let Q=0,V=G.length;Q<V;Q++){const k=G[Q],W=A(k),$=N%D,le=$%W.boundary,se=$+le;N+=le,se!==0&&D-se<W.storage&&(N+=D-se),ee.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=N,N+=W.storage}}}const L=N%D;return L>0&&(N+=D-L),b.__size=N,b.__cache={},this}function A(b){const T={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(T.boundary=4,T.storage=4):b.isVector2?(T.boundary=8,T.storage=8):b.isVector3||b.isColor?(T.boundary=16,T.storage=12):b.isVector4?(T.boundary=16,T.storage=16):b.isMatrix3?(T.boundary=48,T.storage=48):b.isMatrix4?(T.boundary=64,T.storage=64):b.isTexture?ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(T.boundary=16,T.storage=b.byteLength):ft("WebGLRenderer: Unsupported uniform value type.",b),T}function y(b){const T=b.target;T.removeEventListener("dispose",y);const N=u.indexOf(T.__bindingPointIndex);u.splice(N,1),i.deleteBuffer(a[T.id]),delete a[T.id],delete c[T.id]}function S(){for(const b in a)i.deleteBuffer(a[b]);u=[],a={},c={}}return{bind:f,update:m,dispose:S}}const nR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let qi=null;function iR(){return qi===null&&(qi=new Hb(nR,16,16,Ls,hi),qi.name="DFG_LUT",qi.minFilter=Un,qi.magFilter=Un,qi.wrapS=yr,qi.wrapT=yr,qi.generateMipmaps=!1,qi.needsUpdate=!0),qi}class rR{constructor(e={}){const{canvas:t=gb(),context:s=null,depth:a=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:g=!1,outputBufferType:M=di}=e;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=u;const A=M,y=new Set([Dp,Lp,Pp]),S=new Set([di,tr,Wo,Xo,Rp,Np]),b=new Uint32Array(4),T=new Int32Array(4),N=new ne;let D=null,L=null;const O=[],w=[];let U=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=er,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Y=this;let H=!1,ee=null;this._outputColorSpace=ui;let G=0,Q=0,V=null,k=-1,W=null;const $=new on,le=new on;let se=null;const B=new yt(0);let re=0,Fe=t.width,Te=t.height,Ae=1,X=null,me=null;const fe=new on(0,0,Fe,Te),we=new on(0,0,Fe,Te);let Oe=!1;const et=new Bp;let Ze=!1,qe=!1;const Ke=new sn,St=new ne,at=new on,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Tt=!1;function Zt(){return V===null?Ae:1}let J=s;function zt(P,ie){return t.getContext(P,ie)}try{const P={alpha:!0,depth:a,stencil:c,antialias:h,premultipliedAlpha:f,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Sp}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",Ve,!1),t.addEventListener("webglcontextcreationerror",ht,!1),J===null){const ie="webgl2";if(J=zt(ie,P),J===null)throw zt(ie)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw Dt("WebGLRenderer: "+P.message),P}let mt,Ft,ke,Vt,I,C,ae,ve,Me,Re,Ie,ge,_e,je,F,q,Se,Xe,ct,pt,Z,Ne,xe;function ze(){mt=new iC(J),mt.init(),Z=new qA(J,mt),Ft=new Yw(J,mt,e,Z),ke=new XA(J,mt),Ft.reversedDepthBuffer&&g&&ke.buffers.depth.setReversed(!0),Vt=new aC(J),I=new LA,C=new $A(J,mt,ke,I,Ft,Z,Vt),ae=new nC(Y),ve=new u1(J),Ne=new $w(J,ve),Me=new rC(J,ve,Vt,Ne),Re=new lC(J,Me,ve,Ne,Vt),Xe=new oC(J,Ft,C),F=new Kw(I),Ie=new PA(Y,ae,mt,Ft,Ne,F),ge=new eR(Y,I),_e=new IA,je=new BA(mt),Se=new Xw(Y,ae,ke,Re,E,f),q=new WA(Y,Re,Ft),xe=new tR(J,Vt,Ft,ke),ct=new qw(J,mt,Vt),pt=new sC(J,mt,Vt),Vt.programs=Ie.programs,Y.capabilities=Ft,Y.extensions=mt,Y.properties=I,Y.renderLists=_e,Y.shadowMap=q,Y.state=ke,Y.info=Vt}ze(),A!==di&&(U=new uC(A,t.width,t.height,a,c));const Pe=new QA(Y,J);this.xr=Pe,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){const P=mt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=mt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return Ae},this.setPixelRatio=function(P){P!==void 0&&(Ae=P,this.setSize(Fe,Te,!1))},this.getSize=function(P){return P.set(Fe,Te)},this.setSize=function(P,ie,he=!0){if(Pe.isPresenting){ft("WebGLRenderer: Can't change size while VR device is presenting.");return}Fe=P,Te=ie,t.width=Math.floor(P*Ae),t.height=Math.floor(ie*Ae),he===!0&&(t.style.width=P+"px",t.style.height=ie+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,P,ie)},this.getDrawingBufferSize=function(P){return P.set(Fe*Ae,Te*Ae).floor()},this.setDrawingBufferSize=function(P,ie,he){Fe=P,Te=ie,Ae=he,t.width=Math.floor(P*he),t.height=Math.floor(ie*he),this.setViewport(0,0,P,ie)},this.setEffects=function(P){if(A===di){Dt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let ie=0;ie<P.length;ie++)if(P[ie].isOutputPass===!0){ft("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy($)},this.getViewport=function(P){return P.copy(fe)},this.setViewport=function(P,ie,he,ue){P.isVector4?fe.set(P.x,P.y,P.z,P.w):fe.set(P,ie,he,ue),ke.viewport($.copy(fe).multiplyScalar(Ae).round())},this.getScissor=function(P){return P.copy(we)},this.setScissor=function(P,ie,he,ue){P.isVector4?we.set(P.x,P.y,P.z,P.w):we.set(P,ie,he,ue),ke.scissor(le.copy(we).multiplyScalar(Ae).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(P){ke.setScissorTest(Oe=P)},this.setOpaqueSort=function(P){X=P},this.setTransparentSort=function(P){me=P},this.getClearColor=function(P){return P.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(P=!0,ie=!0,he=!0){let ue=0;if(P){let ce=!1;if(V!==null){const Ue=V.texture.format;ce=y.has(Ue)}if(ce){const Ue=V.texture.type,We=S.has(Ue),De=Se.getClearColor(),Qe=Se.getClearAlpha(),rt=De.r,xt=De.g,vt=De.b;We?(b[0]=rt,b[1]=xt,b[2]=vt,b[3]=Qe,J.clearBufferuiv(J.COLOR,0,b)):(T[0]=rt,T[1]=xt,T[2]=vt,T[3]=Qe,J.clearBufferiv(J.COLOR,0,T))}else ue|=J.COLOR_BUFFER_BIT}ie&&(ue|=J.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),he&&(ue|=J.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ue!==0&&J.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(P){P.setRenderer(this),ee=P},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",Ve,!1),t.removeEventListener("webglcontextcreationerror",ht,!1),Se.dispose(),_e.dispose(),je.dispose(),I.dispose(),ae.dispose(),Re.dispose(),Ne.dispose(),xe.dispose(),Ie.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",os),Pe.removeEventListener("sessionend",Fs),rr.stop()};function ye(P){P.preventDefault(),su("WebGLRenderer: Context Lost."),H=!0}function Ve(){su("WebGLRenderer: Context Restored."),H=!1;const P=Vt.autoReset,ie=q.enabled,he=q.autoUpdate,ue=q.needsUpdate,ce=q.type;ze(),Vt.autoReset=P,q.enabled=ie,q.autoUpdate=he,q.needsUpdate=ue,q.type=ce}function ht(P){Dt("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ot(P){const ie=P.target;ie.removeEventListener("dispose",ot),wt(ie)}function wt(P){jn(P),I.remove(P)}function jn(P){const ie=I.get(P).programs;ie!==void 0&&(ie.forEach(function(he){Ie.releaseProgram(he)}),P.isShaderMaterial&&Ie.releaseShaderCache(P))}this.renderBufferDirect=function(P,ie,he,ue,ce,Ue){ie===null&&(ie=Pt);const We=ce.isMesh&&ce.matrixWorld.determinant()<0,De=il(P,ie,he,ue,ce);ke.setMaterial(ue,We);let Qe=he.index,rt=1;if(ue.wireframe===!0){if(Qe=Me.getWireframeAttribute(he),Qe===void 0)return;rt=2}const xt=he.drawRange,vt=he.attributes.position;let tt=xt.start*rt,Lt=(xt.start+xt.count)*rt;Ue!==null&&(tt=Math.max(tt,Ue.start*rt),Lt=Math.min(Lt,(Ue.start+Ue.count)*rt)),Qe!==null?(tt=Math.max(tt,0),Lt=Math.min(Lt,Qe.count)):vt!=null&&(tt=Math.max(tt,0),Lt=Math.min(Lt,vt.count));const Wt=Lt-tt;if(Wt<0||Wt===1/0)return;Ne.setup(ce,ue,De,he,Qe);let Qt,jt=ct;if(Qe!==null&&(Qt=ve.get(Qe),jt=pt,jt.setIndex(Qt)),ce.isMesh)ue.wireframe===!0?(ke.setLineWidth(ue.wireframeLinewidth*Zt()),jt.setMode(J.LINES)):jt.setMode(J.TRIANGLES);else if(ce.isLine){let dn=ue.linewidth;dn===void 0&&(dn=1),ke.setLineWidth(dn*Zt()),ce.isLineSegments?jt.setMode(J.LINES):ce.isLineLoop?jt.setMode(J.LINE_LOOP):jt.setMode(J.LINE_STRIP)}else ce.isPoints?jt.setMode(J.POINTS):ce.isSprite&&jt.setMode(J.TRIANGLES);if(ce.isBatchedMesh)if(mt.get("WEBGL_multi_draw"))jt.renderMultiDraw(ce._multiDrawStarts,ce._multiDrawCounts,ce._multiDrawCount);else{const dn=ce._multiDrawStarts,He=ce._multiDrawCounts,bn=ce._multiDrawCount,Et=Qe?ve.get(Qe).bytesPerElement:1,Xn=I.get(ue).currentProgram.getUniforms();for(let $n=0;$n<bn;$n++)Xn.setValue(J,"_gl_DrawID",$n),jt.render(dn[$n]/Et,He[$n])}else if(ce.isInstancedMesh)jt.renderInstances(tt,Wt,ce.count);else if(he.isInstancedBufferGeometry){const dn=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,He=Math.min(he.instanceCount,dn);jt.renderInstances(tt,Wt,He)}else jt.render(tt,Wt)};function pi(P,ie,he){P.transparent===!0&&P.side===_r&&P.forceSinglePass===!1?(P.side=ni,P.needsUpdate=!0,Os(P,ie,he),P.side=is,P.needsUpdate=!0,Os(P,ie,he),P.side=_r):Os(P,ie,he)}this.compile=function(P,ie,he=null){he===null&&(he=P),L=je.get(he),L.init(ie),w.push(L),he.traverseVisible(function(ce){ce.isLight&&ce.layers.test(ie.layers)&&(L.pushLight(ce),ce.castShadow&&L.pushShadow(ce))}),P!==he&&P.traverseVisible(function(ce){ce.isLight&&ce.layers.test(ie.layers)&&(L.pushLight(ce),ce.castShadow&&L.pushShadow(ce))}),L.setupLights();const ue=new Set;return P.traverse(function(ce){if(!(ce.isMesh||ce.isPoints||ce.isLine||ce.isSprite))return;const Ue=ce.material;if(Ue)if(Array.isArray(Ue))for(let We=0;We<Ue.length;We++){const De=Ue[We];pi(De,he,ce),ue.add(De)}else pi(Ue,he,ce),ue.add(Ue)}),L=w.pop(),ue},this.compileAsync=function(P,ie,he=null){const ue=this.compile(P,ie,he);return new Promise(ce=>{function Ue(){if(ue.forEach(function(We){I.get(We).currentProgram.isReady()&&ue.delete(We)}),ue.size===0){ce(P);return}setTimeout(Ue,10)}mt.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let ir=null;function Us(P){ir&&ir(P)}function os(){rr.stop()}function Fs(){rr.start()}const rr=new X0;rr.setAnimationLoop(Us),typeof self<"u"&&rr.setContext(self),this.setAnimationLoop=function(P){ir=P,Pe.setAnimationLoop(P),P===null?rr.stop():rr.start()},Pe.addEventListener("sessionstart",os),Pe.addEventListener("sessionend",Fs),this.render=function(P,ie){if(ie!==void 0&&ie.isCamera!==!0){Dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;ee!==null&&ee.renderStart(P,ie);const he=Pe.enabled===!0&&Pe.isPresenting===!0,ue=U!==null&&(V===null||he)&&U.begin(Y,V);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),ie.parent===null&&ie.matrixWorldAutoUpdate===!0&&ie.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(ie),ie=Pe.getCamera()),P.isScene===!0&&P.onBeforeRender(Y,P,ie,V),L=je.get(P,w.length),L.init(ie),L.state.textureUnits=C.getTextureUnits(),w.push(L),Ke.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),et.setFromProjectionMatrix(Ke,Qi,ie.reversedDepth),qe=this.localClippingEnabled,Ze=F.init(this.clippingPlanes,qe),D=_e.get(P,O.length),D.init(),O.push(D),Pe.enabled===!0&&Pe.isPresenting===!0){const We=Y.xr.getDepthSensingMesh();We!==null&&Ha(We,ie,-1/0,Y.sortObjects)}Ha(P,ie,0,Y.sortObjects),D.finish(),Y.sortObjects===!0&&D.sort(X,me),Tt=Pe.enabled===!1||Pe.isPresenting===!1||Pe.hasDepthSensing()===!1,Tt&&Se.addToRenderList(D,P),this.info.render.frame++,Ze===!0&&F.beginShadows();const ce=L.state.shadowsArray;if(q.render(ce,P,ie),Ze===!0&&F.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ue&&U.hasRenderPass())===!1){const We=D.opaque,De=D.transmissive;if(L.setupLights(),ie.isArrayCamera){const Qe=ie.cameras;if(De.length>0)for(let rt=0,xt=Qe.length;rt<xt;rt++){const vt=Qe[rt];zi(We,De,P,vt)}Tt&&Se.render(P);for(let rt=0,xt=Qe.length;rt<xt;rt++){const vt=Qe[rt];tl(D,P,vt,vt.viewport)}}else De.length>0&&zi(We,De,P,ie),Tt&&Se.render(P),tl(D,P,ie)}V!==null&&Q===0&&(C.updateMultisampleRenderTarget(V),C.updateRenderTargetMipmap(V)),ue&&U.end(Y),P.isScene===!0&&P.onAfterRender(Y,P,ie),Ne.resetDefaultState(),k=-1,W=null,w.pop(),w.length>0?(L=w[w.length-1],C.setTextureUnits(L.state.textureUnits),Ze===!0&&F.setGlobalState(Y.clippingPlanes,L.state.camera)):L=null,O.pop(),O.length>0?D=O[O.length-1]:D=null,ee!==null&&ee.renderEnd()};function Ha(P,ie,he,ue){if(P.visible===!1)return;if(P.layers.test(ie.layers)){if(P.isGroup)he=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(ie);else if(P.isLightProbeGrid)L.pushLightProbeGrid(P);else if(P.isLight)L.pushLight(P),P.castShadow&&L.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||et.intersectsSprite(P)){ue&&at.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Ke);const We=Re.update(P),De=P.material;De.visible&&D.push(P,We,De,he,at.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||et.intersectsObject(P))){const We=Re.update(P),De=P.material;if(ue&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),at.copy(P.boundingSphere.center)):(We.boundingSphere===null&&We.computeBoundingSphere(),at.copy(We.boundingSphere.center)),at.applyMatrix4(P.matrixWorld).applyMatrix4(Ke)),Array.isArray(De)){const Qe=We.groups;for(let rt=0,xt=Qe.length;rt<xt;rt++){const vt=Qe[rt],tt=De[vt.materialIndex];tt&&tt.visible&&D.push(P,We,tt,he,at.z,vt)}}else De.visible&&D.push(P,We,De,he,at.z,null)}}const Ue=P.children;for(let We=0,De=Ue.length;We<De;We++)Ha(Ue[We],ie,he,ue)}function tl(P,ie,he,ue){const{opaque:ce,transmissive:Ue,transparent:We}=P;L.setupLightsView(he),Ze===!0&&F.setGlobalState(Y.clippingPlanes,he),ue&&ke.viewport($.copy(ue)),ce.length>0&&ls(ce,ie,he),Ue.length>0&&ls(Ue,ie,he),We.length>0&&ls(We,ie,he),ke.buffers.depth.setTest(!0),ke.buffers.depth.setMask(!0),ke.buffers.color.setMask(!0),ke.setPolygonOffset(!1)}function zi(P,ie,he,ue){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[ue.id]===void 0){const tt=mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[ue.id]=new ii(1,1,{generateMipmaps:!0,type:tt?hi:di,minFilter:As,samples:Math.max(4,Ft.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Nt.workingColorSpace})}const Ue=L.state.transmissionRenderTarget[ue.id],We=ue.viewport||$;Ue.setSize(We.z*Y.transmissionResolutionScale,We.w*Y.transmissionResolutionScale);const De=Y.getRenderTarget(),Qe=Y.getActiveCubeFace(),rt=Y.getActiveMipmapLevel();Y.setRenderTarget(Ue),Y.getClearColor(B),re=Y.getClearAlpha(),re<1&&Y.setClearColor(16777215,.5),Y.clear(),Tt&&Se.render(he);const xt=Y.toneMapping;Y.toneMapping=er;const vt=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),L.setupLightsView(ue),Ze===!0&&F.setGlobalState(Y.clippingPlanes,ue),ls(P,he,ue),C.updateMultisampleRenderTarget(Ue),C.updateRenderTargetMipmap(Ue),mt.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let Lt=0,Wt=ie.length;Lt<Wt;Lt++){const Qt=ie[Lt],{object:jt,geometry:dn,material:He,group:bn}=Qt;if(He.side===_r&&jt.layers.test(ue.layers)){const Et=He.side;He.side=ni,He.needsUpdate=!0,Ga(jt,he,ue,dn,He,bn),He.side=Et,He.needsUpdate=!0,tt=!0}}tt===!0&&(C.updateMultisampleRenderTarget(Ue),C.updateRenderTargetMipmap(Ue))}Y.setRenderTarget(De,Qe,rt),Y.setClearColor(B,re),vt!==void 0&&(ue.viewport=vt),Y.toneMapping=xt}function ls(P,ie,he){const ue=ie.isScene===!0?ie.overrideMaterial:null;for(let ce=0,Ue=P.length;ce<Ue;ce++){const We=P[ce],{object:De,geometry:Qe,group:rt}=We;let xt=We.material;xt.allowOverride===!0&&ue!==null&&(xt=ue),De.layers.test(he.layers)&&Ga(De,ie,he,Qe,xt,rt)}}function Ga(P,ie,he,ue,ce,Ue){P.onBeforeRender(Y,ie,he,ue,ce,Ue),P.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),ce.onBeforeRender(Y,ie,he,ue,P,Ue),ce.transparent===!0&&ce.side===_r&&ce.forceSinglePass===!1?(ce.side=ni,ce.needsUpdate=!0,Y.renderBufferDirect(he,ie,ue,ce,P,Ue),ce.side=is,ce.needsUpdate=!0,Y.renderBufferDirect(he,ie,ue,ce,P,Ue),ce.side=_r):Y.renderBufferDirect(he,ie,ue,ce,P,Ue),P.onAfterRender(Y,ie,he,ue,ce,Ue)}function Os(P,ie,he){ie.isScene!==!0&&(ie=Pt);const ue=I.get(P),ce=L.state.lights,Ue=L.state.shadowsArray,We=ce.state.version,De=Ie.getParameters(P,ce.state,Ue,ie,he,L.state.lightProbeGridArray),Qe=Ie.getProgramCacheKey(De);let rt=ue.programs;ue.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?ie.environment:null,ue.fog=ie.fog;const xt=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;ue.envMap=ae.get(P.envMap||ue.environment,xt),ue.envMapRotation=ue.environment!==null&&P.envMap===null?ie.environmentRotation:P.envMapRotation,rt===void 0&&(P.addEventListener("dispose",ot),rt=new Map,ue.programs=rt);let vt=rt.get(Qe);if(vt!==void 0){if(ue.currentProgram===vt&&ue.lightsStateVersion===We)return Wa(P,De),vt}else De.uniforms=Ie.getUniforms(P),ee!==null&&P.isNodeMaterial&&ee.build(P,he,De),P.onBeforeCompile(De,Y),vt=Ie.acquireProgram(De,Qe),rt.set(Qe,vt),ue.uniforms=De.uniforms;const tt=ue.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(tt.clippingPlanes=F.uniform),Wa(P,De),ue.needsLights=_u(P),ue.lightsStateVersion=We,ue.needsLights&&(tt.ambientLightColor.value=ce.state.ambient,tt.lightProbe.value=ce.state.probe,tt.directionalLights.value=ce.state.directional,tt.directionalLightShadows.value=ce.state.directionalShadow,tt.spotLights.value=ce.state.spot,tt.spotLightShadows.value=ce.state.spotShadow,tt.rectAreaLights.value=ce.state.rectArea,tt.ltc_1.value=ce.state.rectAreaLTC1,tt.ltc_2.value=ce.state.rectAreaLTC2,tt.pointLights.value=ce.state.point,tt.pointLightShadows.value=ce.state.pointShadow,tt.hemisphereLights.value=ce.state.hemi,tt.directionalShadowMatrix.value=ce.state.directionalShadowMatrix,tt.spotLightMatrix.value=ce.state.spotLightMatrix,tt.spotLightMap.value=ce.state.spotLightMap,tt.pointShadowMatrix.value=ce.state.pointShadowMatrix),ue.lightProbeGrid=L.state.lightProbeGridArray.length>0,ue.currentProgram=vt,ue.uniformsList=null,vt}function Va(P){if(P.uniformsList===null){const ie=P.currentProgram.getUniforms();P.uniformsList=Kc.seqWithValue(ie.seq,P.uniforms)}return P.uniformsList}function Wa(P,ie){const he=I.get(P);he.outputColorSpace=ie.outputColorSpace,he.batching=ie.batching,he.batchingColor=ie.batchingColor,he.instancing=ie.instancing,he.instancingColor=ie.instancingColor,he.instancingMorph=ie.instancingMorph,he.skinning=ie.skinning,he.morphTargets=ie.morphTargets,he.morphNormals=ie.morphNormals,he.morphColors=ie.morphColors,he.morphTargetsCount=ie.morphTargetsCount,he.numClippingPlanes=ie.numClippingPlanes,he.numIntersection=ie.numClipIntersection,he.vertexAlphas=ie.vertexAlphas,he.vertexTangents=ie.vertexTangents,he.toneMapping=ie.toneMapping}function nl(P,ie){if(P.length===0)return null;if(P.length===1)return P[0].texture!==null?P[0]:null;N.setFromMatrixPosition(ie.matrixWorld);for(let he=0,ue=P.length;he<ue;he++){const ce=P[he];if(ce.texture!==null&&ce.boundingBox.containsPoint(N))return ce}return null}function il(P,ie,he,ue,ce){ie.isScene!==!0&&(ie=Pt),C.resetTextureUnits();const Ue=ie.fog,We=ue.isMeshStandardMaterial||ue.isMeshLambertMaterial||ue.isMeshPhongMaterial?ie.environment:null,De=V===null?Y.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Nt.workingColorSpace,Qe=ue.isMeshStandardMaterial||ue.isMeshLambertMaterial&&!ue.envMap||ue.isMeshPhongMaterial&&!ue.envMap,rt=ae.get(ue.envMap||We,Qe),xt=ue.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,vt=!!he.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),tt=!!he.morphAttributes.position,Lt=!!he.morphAttributes.normal,Wt=!!he.morphAttributes.color;let Qt=er;ue.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Qt=Y.toneMapping);const jt=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,dn=jt!==void 0?jt.length:0,He=I.get(ue),bn=L.state.lights;if(Ze===!0&&(qe===!0||P!==W)){const Bt=P===W&&ue.id===k;F.setState(ue,P,Bt)}let Et=!1;ue.version===He.__version?(He.needsLights&&He.lightsStateVersion!==bn.state.version||He.outputColorSpace!==De||ce.isBatchedMesh&&He.batching===!1||!ce.isBatchedMesh&&He.batching===!0||ce.isBatchedMesh&&He.batchingColor===!0&&ce.colorTexture===null||ce.isBatchedMesh&&He.batchingColor===!1&&ce.colorTexture!==null||ce.isInstancedMesh&&He.instancing===!1||!ce.isInstancedMesh&&He.instancing===!0||ce.isSkinnedMesh&&He.skinning===!1||!ce.isSkinnedMesh&&He.skinning===!0||ce.isInstancedMesh&&He.instancingColor===!0&&ce.instanceColor===null||ce.isInstancedMesh&&He.instancingColor===!1&&ce.instanceColor!==null||ce.isInstancedMesh&&He.instancingMorph===!0&&ce.morphTexture===null||ce.isInstancedMesh&&He.instancingMorph===!1&&ce.morphTexture!==null||He.envMap!==rt||ue.fog===!0&&He.fog!==Ue||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==F.numPlanes||He.numIntersection!==F.numIntersection)||He.vertexAlphas!==xt||He.vertexTangents!==vt||He.morphTargets!==tt||He.morphNormals!==Lt||He.morphColors!==Wt||He.toneMapping!==Qt||He.morphTargetsCount!==dn||!!He.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(Et=!0):(Et=!0,He.__version=ue.version);let Xn=He.currentProgram;Et===!0&&(Xn=Os(ue,ie,ce),ee&&ue.isNodeMaterial&&ee.onUpdateProgram(ue,Xn,He));let $n=!1,Ct=!1,sr=!1;const Ot=Xn.getUniforms(),qt=He.uniforms;if(ke.useProgram(Xn.program)&&($n=!0,Ct=!0,sr=!0),ue.id!==k&&(k=ue.id,Ct=!0),He.needsLights){const Bt=nl(L.state.lightProbeGridArray,ce);He.lightProbeGrid!==Bt&&(He.lightProbeGrid=Bt,Ct=!0)}if($n||W!==P){ke.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),Ot.setValue(J,"projectionMatrix",P.projectionMatrix),Ot.setValue(J,"viewMatrix",P.matrixWorldInverse);const Ai=Ot.map.cameraPosition;Ai!==void 0&&Ai.setValue(J,St.setFromMatrixPosition(P.matrixWorld)),Ft.logarithmicDepthBuffer&&Ot.setValue(J,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&Ot.setValue(J,"isOrthographic",P.isOrthographicCamera===!0),W!==P&&(W=P,Ct=!0,sr=!0)}if(He.needsLights&&(bn.state.directionalShadowMap.length>0&&Ot.setValue(J,"directionalShadowMap",bn.state.directionalShadowMap,C),bn.state.spotShadowMap.length>0&&Ot.setValue(J,"spotShadowMap",bn.state.spotShadowMap,C),bn.state.pointShadowMap.length>0&&Ot.setValue(J,"pointShadowMap",bn.state.pointShadowMap,C)),ce.isSkinnedMesh){Ot.setOptional(J,ce,"bindMatrix"),Ot.setOptional(J,ce,"bindMatrixInverse");const Bt=ce.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),Ot.setValue(J,"boneTexture",Bt.boneTexture,C))}ce.isBatchedMesh&&(Ot.setOptional(J,ce,"batchingTexture"),Ot.setValue(J,"batchingTexture",ce._matricesTexture,C),Ot.setOptional(J,ce,"batchingIdTexture"),Ot.setValue(J,"batchingIdTexture",ce._indirectTexture,C),Ot.setOptional(J,ce,"batchingColorTexture"),ce._colorsTexture!==null&&Ot.setValue(J,"batchingColorTexture",ce._colorsTexture,C));const Ci=he.morphAttributes;if((Ci.position!==void 0||Ci.normal!==void 0||Ci.color!==void 0)&&Xe.update(ce,he,Xn),(Ct||He.receiveShadow!==ce.receiveShadow)&&(He.receiveShadow=ce.receiveShadow,Ot.setValue(J,"receiveShadow",ce.receiveShadow)),(ue.isMeshStandardMaterial||ue.isMeshLambertMaterial||ue.isMeshPhongMaterial)&&ue.envMap===null&&ie.environment!==null&&(qt.envMapIntensity.value=ie.environmentIntensity),qt.dfgLUT!==void 0&&(qt.dfgLUT.value=iR()),Ct){if(Ot.setValue(J,"toneMappingExposure",Y.toneMappingExposure),He.needsLights&&vu(qt,sr),Ue&&ue.fog===!0&&ge.refreshFogUniforms(qt,Ue),ge.refreshMaterialUniforms(qt,ue,Ae,Te,L.state.transmissionRenderTarget[P.id]),He.needsLights&&He.lightProbeGrid){const Bt=He.lightProbeGrid;qt.probesSH.value=Bt.texture,qt.probesMin.value.copy(Bt.boundingBox.min),qt.probesMax.value.copy(Bt.boundingBox.max),qt.probesResolution.value.copy(Bt.resolution)}Kc.upload(J,Va(He),qt,C)}if(ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(Kc.upload(J,Va(He),qt,C),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&Ot.setValue(J,"center",ce.center),Ot.setValue(J,"modelViewMatrix",ce.modelViewMatrix),Ot.setValue(J,"normalMatrix",ce.normalMatrix),Ot.setValue(J,"modelMatrix",ce.matrixWorld),ue.uniformsGroups!==void 0){const Bt=ue.uniformsGroups;for(let Ai=0,Hi=Bt.length;Ai<Hi;Ai++){const cs=Bt[Ai];xe.update(cs,Xn),xe.bind(cs,Xn)}}return Xn}function vu(P,ie){P.ambientLightColor.needsUpdate=ie,P.lightProbe.needsUpdate=ie,P.directionalLights.needsUpdate=ie,P.directionalLightShadows.needsUpdate=ie,P.pointLights.needsUpdate=ie,P.pointLightShadows.needsUpdate=ie,P.spotLights.needsUpdate=ie,P.spotLightShadows.needsUpdate=ie,P.rectAreaLights.needsUpdate=ie,P.hemisphereLights.needsUpdate=ie}function _u(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(P,ie,he){const ue=I.get(P);ue.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,ue.__autoAllocateDepthBuffer===!1&&(ue.__useRenderToTexture=!1),I.get(P.texture).__webglTexture=ie,I.get(P.depthTexture).__webglTexture=ue.__autoAllocateDepthBuffer?void 0:he,ue.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,ie){const he=I.get(P);he.__webglFramebuffer=ie,he.__useDefaultFramebuffer=ie===void 0};const tn=J.createFramebuffer();this.setRenderTarget=function(P,ie=0,he=0){V=P,G=ie,Q=he;let ue=null,ce=!1,Ue=!1;if(P){const De=I.get(P);if(De.__useDefaultFramebuffer!==void 0){ke.bindFramebuffer(J.FRAMEBUFFER,De.__webglFramebuffer),$.copy(P.viewport),le.copy(P.scissor),se=P.scissorTest,ke.viewport($),ke.scissor(le),ke.setScissorTest(se),k=-1;return}else if(De.__webglFramebuffer===void 0)C.setupRenderTarget(P);else if(De.__hasExternalTextures)C.rebindTextures(P,I.get(P.texture).__webglTexture,I.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const xt=P.depthTexture;if(De.__boundDepthTexture!==xt){if(xt!==null&&I.has(xt)&&(P.width!==xt.image.width||P.height!==xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(P)}}const Qe=P.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(Ue=!0);const rt=I.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(rt[ie])?ue=rt[ie][he]:ue=rt[ie],ce=!0):P.samples>0&&C.useMultisampledRTT(P)===!1?ue=I.get(P).__webglMultisampledFramebuffer:Array.isArray(rt)?ue=rt[he]:ue=rt,$.copy(P.viewport),le.copy(P.scissor),se=P.scissorTest}else $.copy(fe).multiplyScalar(Ae).floor(),le.copy(we).multiplyScalar(Ae).floor(),se=Oe;if(he!==0&&(ue=tn),ke.bindFramebuffer(J.FRAMEBUFFER,ue)&&ke.drawBuffers(P,ue),ke.viewport($),ke.scissor(le),ke.setScissorTest(se),ce){const De=I.get(P.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+ie,De.__webglTexture,he)}else if(Ue){const De=ie;for(let Qe=0;Qe<P.textures.length;Qe++){const rt=I.get(P.textures[Qe]);J.framebufferTextureLayer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+Qe,rt.__webglTexture,he,De)}}else if(P!==null&&he!==0){const De=I.get(P.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,De.__webglTexture,he)}k=-1},this.readRenderTargetPixels=function(P,ie,he,ue,ce,Ue,We,De=0){if(!(P&&P.isWebGLRenderTarget)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qe=I.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&We!==void 0&&(Qe=Qe[We]),Qe){ke.bindFramebuffer(J.FRAMEBUFFER,Qe);try{const rt=P.textures[De],xt=rt.format,vt=rt.type;if(P.textures.length>1&&J.readBuffer(J.COLOR_ATTACHMENT0+De),!Ft.textureFormatReadable(xt)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ft.textureTypeReadable(vt)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ie>=0&&ie<=P.width-ue&&he>=0&&he<=P.height-ce&&J.readPixels(ie,he,ue,ce,Z.convert(xt),Z.convert(vt),Ue)}finally{const rt=V!==null?I.get(V).__webglFramebuffer:null;ke.bindFramebuffer(J.FRAMEBUFFER,rt)}}},this.readRenderTargetPixelsAsync=async function(P,ie,he,ue,ce,Ue,We,De=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qe=I.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&We!==void 0&&(Qe=Qe[We]),Qe)if(ie>=0&&ie<=P.width-ue&&he>=0&&he<=P.height-ce){ke.bindFramebuffer(J.FRAMEBUFFER,Qe);const rt=P.textures[De],xt=rt.format,vt=rt.type;if(P.textures.length>1&&J.readBuffer(J.COLOR_ATTACHMENT0+De),!Ft.textureFormatReadable(xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ft.textureTypeReadable(vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=J.createBuffer();J.bindBuffer(J.PIXEL_PACK_BUFFER,tt),J.bufferData(J.PIXEL_PACK_BUFFER,Ue.byteLength,J.STREAM_READ),J.readPixels(ie,he,ue,ce,Z.convert(xt),Z.convert(vt),0);const Lt=V!==null?I.get(V).__webglFramebuffer:null;ke.bindFramebuffer(J.FRAMEBUFFER,Lt);const Wt=J.fenceSync(J.SYNC_GPU_COMMANDS_COMPLETE,0);return J.flush(),await xb(J,Wt,4),J.bindBuffer(J.PIXEL_PACK_BUFFER,tt),J.getBufferSubData(J.PIXEL_PACK_BUFFER,0,Ue),J.deleteBuffer(tt),J.deleteSync(Wt),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,ie=null,he=0){const ue=Math.pow(2,-he),ce=Math.floor(P.image.width*ue),Ue=Math.floor(P.image.height*ue),We=ie!==null?ie.x:0,De=ie!==null?ie.y:0;C.setTexture2D(P,0),J.copyTexSubImage2D(J.TEXTURE_2D,he,0,0,We,De,ce,Ue),ke.unbindTexture()};const yu=J.createFramebuffer(),Xa=J.createFramebuffer();this.copyTextureToTexture=function(P,ie,he=null,ue=null,ce=0,Ue=0){let We,De,Qe,rt,xt,vt,tt,Lt,Wt;const Qt=P.isCompressedTexture?P.mipmaps[Ue]:P.image;if(he!==null)We=he.max.x-he.min.x,De=he.max.y-he.min.y,Qe=he.isBox3?he.max.z-he.min.z:1,rt=he.min.x,xt=he.min.y,vt=he.isBox3?he.min.z:0;else{const qt=Math.pow(2,-ce);We=Math.floor(Qt.width*qt),De=Math.floor(Qt.height*qt),P.isDataArrayTexture?Qe=Qt.depth:P.isData3DTexture?Qe=Math.floor(Qt.depth*qt):Qe=1,rt=0,xt=0,vt=0}ue!==null?(tt=ue.x,Lt=ue.y,Wt=ue.z):(tt=0,Lt=0,Wt=0);const jt=Z.convert(ie.format),dn=Z.convert(ie.type);let He;ie.isData3DTexture?(C.setTexture3D(ie,0),He=J.TEXTURE_3D):ie.isDataArrayTexture||ie.isCompressedArrayTexture?(C.setTexture2DArray(ie,0),He=J.TEXTURE_2D_ARRAY):(C.setTexture2D(ie,0),He=J.TEXTURE_2D),ke.activeTexture(J.TEXTURE0),ke.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,ie.flipY),ke.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),ke.pixelStorei(J.UNPACK_ALIGNMENT,ie.unpackAlignment);const bn=ke.getParameter(J.UNPACK_ROW_LENGTH),Et=ke.getParameter(J.UNPACK_IMAGE_HEIGHT),Xn=ke.getParameter(J.UNPACK_SKIP_PIXELS),$n=ke.getParameter(J.UNPACK_SKIP_ROWS),Ct=ke.getParameter(J.UNPACK_SKIP_IMAGES);ke.pixelStorei(J.UNPACK_ROW_LENGTH,Qt.width),ke.pixelStorei(J.UNPACK_IMAGE_HEIGHT,Qt.height),ke.pixelStorei(J.UNPACK_SKIP_PIXELS,rt),ke.pixelStorei(J.UNPACK_SKIP_ROWS,xt),ke.pixelStorei(J.UNPACK_SKIP_IMAGES,vt);const sr=P.isDataArrayTexture||P.isData3DTexture,Ot=ie.isDataArrayTexture||ie.isData3DTexture;if(P.isDepthTexture){const qt=I.get(P),Ci=I.get(ie),Bt=I.get(qt.__renderTarget),Ai=I.get(Ci.__renderTarget);ke.bindFramebuffer(J.READ_FRAMEBUFFER,Bt.__webglFramebuffer),ke.bindFramebuffer(J.DRAW_FRAMEBUFFER,Ai.__webglFramebuffer);for(let Hi=0;Hi<Qe;Hi++)sr&&(J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,I.get(P).__webglTexture,ce,vt+Hi),J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,I.get(ie).__webglTexture,Ue,Wt+Hi)),J.blitFramebuffer(rt,xt,We,De,tt,Lt,We,De,J.DEPTH_BUFFER_BIT,J.NEAREST);ke.bindFramebuffer(J.READ_FRAMEBUFFER,null),ke.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else if(ce!==0||P.isRenderTargetTexture||I.has(P)){const qt=I.get(P),Ci=I.get(ie);ke.bindFramebuffer(J.READ_FRAMEBUFFER,yu),ke.bindFramebuffer(J.DRAW_FRAMEBUFFER,Xa);for(let Bt=0;Bt<Qe;Bt++)sr?J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,qt.__webglTexture,ce,vt+Bt):J.framebufferTexture2D(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,qt.__webglTexture,ce),Ot?J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,Ci.__webglTexture,Ue,Wt+Bt):J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,Ci.__webglTexture,Ue),ce!==0?J.blitFramebuffer(rt,xt,We,De,tt,Lt,We,De,J.COLOR_BUFFER_BIT,J.NEAREST):Ot?J.copyTexSubImage3D(He,Ue,tt,Lt,Wt+Bt,rt,xt,We,De):J.copyTexSubImage2D(He,Ue,tt,Lt,rt,xt,We,De);ke.bindFramebuffer(J.READ_FRAMEBUFFER,null),ke.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else Ot?P.isDataTexture||P.isData3DTexture?J.texSubImage3D(He,Ue,tt,Lt,Wt,We,De,Qe,jt,dn,Qt.data):ie.isCompressedArrayTexture?J.compressedTexSubImage3D(He,Ue,tt,Lt,Wt,We,De,Qe,jt,Qt.data):J.texSubImage3D(He,Ue,tt,Lt,Wt,We,De,Qe,jt,dn,Qt):P.isDataTexture?J.texSubImage2D(J.TEXTURE_2D,Ue,tt,Lt,We,De,jt,dn,Qt.data):P.isCompressedTexture?J.compressedTexSubImage2D(J.TEXTURE_2D,Ue,tt,Lt,Qt.width,Qt.height,jt,Qt.data):J.texSubImage2D(J.TEXTURE_2D,Ue,tt,Lt,We,De,jt,dn,Qt);ke.pixelStorei(J.UNPACK_ROW_LENGTH,bn),ke.pixelStorei(J.UNPACK_IMAGE_HEIGHT,Et),ke.pixelStorei(J.UNPACK_SKIP_PIXELS,Xn),ke.pixelStorei(J.UNPACK_SKIP_ROWS,$n),ke.pixelStorei(J.UNPACK_SKIP_IMAGES,Ct),Ue===0&&ie.generateMipmaps&&J.generateMipmap(He),ke.unbindTexture()},this.initRenderTarget=function(P){I.get(P).__webglFramebuffer===void 0&&C.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?C.setTextureCube(P,0):P.isData3DTexture?C.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?C.setTexture2DArray(P,0):C.setTexture2D(P,0),ke.unbindTexture()},this.resetState=function(){G=0,Q=0,V=null,ke.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Nt._getUnpackColorSpace()}}const Gv={type:"change"},Vp={type:"start"},e_={type:"end"},Dc=new kp,Vv=new Jr,sR=Math.cos(70*yb.DEG2RAD),gn=new ne,ei=2*Math.PI,Gt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Kh=1e-6;class aR extends l1{constructor(e,t=null){super(e,t),this.state=Gt.NONE,this.target=new ne,this.cursor=new ne,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ca.ROTATE,MIDDLE:Ca.DOLLY,RIGHT:Ca.PAN},this.touches={ONE:Ta.ROTATE,TWO:Ta.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new ne,this._lastQuaternion=new rs,this._lastTargetPosition=new ne,this._quat=new rs().setFromUnitVectors(e.up,new ne(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new xv,this._sphericalDelta=new xv,this._scale=1,this._panOffset=new ne,this._rotateStart=new nt,this._rotateEnd=new nt,this._rotateDelta=new nt,this._panStart=new nt,this._panEnd=new nt,this._panDelta=new nt,this._dollyStart=new nt,this._dollyEnd=new nt,this._dollyDelta=new nt,this._dollyDirection=new ne,this._mouse=new nt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=lR.bind(this),this._onPointerDown=oR.bind(this),this._onPointerUp=cR.bind(this),this._onContextMenu=gR.bind(this),this._onMouseWheel=hR.bind(this),this._onKeyDown=fR.bind(this),this._onTouchStart=pR.bind(this),this._onTouchMove=mR.bind(this),this._onMouseDown=uR.bind(this),this._onMouseMove=dR.bind(this),this._interceptControlDown=xR.bind(this),this._interceptControlUp=vR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Gv),this.update(),this.state=Gt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;gn.copy(t).sub(this.target),gn.applyQuaternion(this._quat),this._spherical.setFromVector3(gn),this.autoRotate&&this.state===Gt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(s)&&isFinite(a)&&(s<-Math.PI?s+=ei:s>Math.PI&&(s-=ei),a<-Math.PI?a+=ei:a>Math.PI&&(a-=ei),s<=a?this._spherical.theta=Math.max(s,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+a)/2?Math.max(s,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=u!=this._spherical.radius}if(gn.setFromSpherical(this._spherical),gn.applyQuaternion(this._quatInverse),t.copy(this.target).add(gn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const h=gn.length();u=this._clampDistance(h*this._scale);const f=h-u;this.object.position.addScaledVector(this._dollyDirection,f),this.object.updateMatrixWorld(),c=!!f}else if(this.object.isOrthographicCamera){const h=new ne(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=f!==this.object.zoom;const m=new ne(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(h),this.object.updateMatrixWorld(),u=gn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(Dc.origin.copy(this.object.position),Dc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Dc.direction))<sR?this.object.lookAt(this.target):(Vv.setFromNormalAndCoplanarPoint(this.object.up,this.target),Dc.intersectPlane(Vv,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Kh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Kh||this._lastTargetPosition.distanceToSquared(this.target)>Kh?(this.dispatchEvent(Gv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ei/60*this.autoRotateSpeed*e:ei/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){gn.setFromMatrixColumn(t,0),gn.multiplyScalar(-e),this._panOffset.add(gn)}_panUp(e,t){this.screenSpacePanning===!0?gn.setFromMatrixColumn(t,1):(gn.setFromMatrixColumn(t,0),gn.crossVectors(this.object.up,gn)),gn.multiplyScalar(e),this._panOffset.add(gn)}_pan(e,t){const s=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;gn.copy(a).sub(this.target);let c=gn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*c/s.clientHeight,this.object.matrix),this._panUp(2*t*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),a=e-s.left,c=t-s.top,u=s.width,h=s.height;this._mouse.x=a/u*2-1,this._mouse.y=-(c/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ei*this._rotateDelta.x/t.clientHeight),this._rotateUp(ei*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ei*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ei*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ei*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ei*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),s=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._rotateStart.set(s,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),s=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panStart.set(s,a)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),s=e.pageX-t.x,a=e.pageY-t.y,c=Math.sqrt(s*s+a*a);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const s=this._getSecondPointerPosition(e),a=.5*(e.pageX+s.x),c=.5*(e.pageY+s.y);this._rotateEnd.set(a,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ei*this._rotateDelta.x/t.clientHeight),this._rotateUp(ei*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),s=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panEnd.set(s,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),s=e.pageX-t.x,a=e.pageY-t.y,c=Math.sqrt(s*s+a*a);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,h=(e.pageY+t.y)*.5;this._updateZoomParameters(u,h)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new nt,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,s={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function oR(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function lR(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function cR(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(e_),this.state=Gt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function uR(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ca.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Gt.DOLLY;break;case Ca.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Gt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Gt.ROTATE}break;case Ca.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Gt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Gt.PAN}break;default:this.state=Gt.NONE}this.state!==Gt.NONE&&this.dispatchEvent(Vp)}function dR(i){switch(this.state){case Gt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Gt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Gt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function hR(i){this.enabled===!1||this.enableZoom===!1||this.state!==Gt.NONE||(i.preventDefault(),this.dispatchEvent(Vp),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(e_))}function fR(i){this.enabled!==!1&&this._handleKeyDown(i)}function pR(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ta.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Gt.TOUCH_ROTATE;break;case Ta.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Gt.TOUCH_PAN;break;default:this.state=Gt.NONE}break;case 2:switch(this.touches.TWO){case Ta.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Gt.TOUCH_DOLLY_PAN;break;case Ta.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Gt.TOUCH_DOLLY_ROTATE;break;default:this.state=Gt.NONE}break;default:this.state=Gt.NONE}this.state!==Gt.NONE&&this.dispatchEvent(Vp)}function mR(i){switch(this._trackPointer(i),this.state){case Gt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Gt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Gt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Gt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Gt.NONE}}function gR(i){this.enabled!==!1&&i.preventDefault()}function xR(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function vR(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Zc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class za{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const _R=new mu(-1,1,1,-1,0,1);class yR extends kn{constructor(){super(),this.setAttribute("position",new un([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new un([0,2,0,0,2,0],2))}}const SR=new yR;class Wp{constructor(e){this._mesh=new wi(SR,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,_R)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class MR extends za{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Fn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=qo.clone(e.uniforms),this.material=new Fn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Wp(this.material)}render(e,t,s){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=s.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Wv extends za{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,s){const a=e.getContext(),c=e.state;c.buffers.color.setMask(!1),c.buffers.depth.setMask(!1),c.buffers.color.setLocked(!0),c.buffers.depth.setLocked(!0);let u,h;this.inverse?(u=0,h=1):(u=1,h=0),c.buffers.stencil.setTest(!0),c.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),c.buffers.stencil.setFunc(a.ALWAYS,u,4294967295),c.buffers.stencil.setClear(h),c.buffers.stencil.setLocked(!0),e.setRenderTarget(s),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),c.buffers.color.setLocked(!1),c.buffers.depth.setLocked(!1),c.buffers.color.setMask(!0),c.buffers.depth.setMask(!0),c.buffers.stencil.setLocked(!1),c.buffers.stencil.setFunc(a.EQUAL,1,4294967295),c.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),c.buffers.stencil.setLocked(!0)}}class ER extends za{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class bR{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const s=e.getSize(new nt);this._width=s.width,this._height=s.height,t=new ii(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:hi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new MR(Zc),this.copyPass.material.blending=Ji,this.timer=new s1}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let s=!1;for(let a=0,c=this.passes.length;a<c;a++){const u=this.passes[a];if(u.enabled!==!1){if(u.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(a),u.render(this.renderer,this.writeBuffer,this.readBuffer,e,s),u.needsSwap){if(s){const h=this.renderer.getContext(),f=this.renderer.state.buffers.stencil;f.setFunc(h.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),f.setFunc(h.EQUAL,1,4294967295)}this.swapBuffers()}Wv!==void 0&&(u instanceof Wv?s=!0:u instanceof ER&&(s=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new nt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const s=this._width*this._pixelRatio,a=this._height*this._pixelRatio;this.renderTarget1.setSize(s,a),this.renderTarget2.setSize(s,a);for(let c=0;c<this.passes.length;c++)this.passes[c].setSize(s,a)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class TR extends za{constructor(e,t,s=null,a=null,c=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=s,this.clearColor=a,this.clearAlpha=c,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new yt}render(e,t,s){const a=e.autoClear;e.autoClear=!1;let c,u;this.overrideMaterial!==null&&(u=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(c=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:s),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(c),this.overrideMaterial!==null&&(this.scene.overrideMaterial=u),e.autoClear=a}}const wR={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new yt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Ia extends za{constructor(e,t=1,s,a){super(),this.strength=t,this.radius=s,this.threshold=a,this.resolution=e!==void 0?new nt(e.x,e.y):new nt(256,256),this.clearColor=new yt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let c=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);this.renderTargetBright=new ii(c,u,{type:hi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let v=0;v<this.nMips;v++){const x=new ii(c,u,{type:hi});x.texture.name="UnrealBloomPass.h"+v,x.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(x);const g=new ii(c,u,{type:hi});g.texture.name="UnrealBloomPass.v"+v,g.texture.generateMipmaps=!1,this.renderTargetsVertical.push(g),c=Math.round(c/2),u=Math.round(u/2)}const h=wR;this.highPassUniforms=qo.clone(h.uniforms),this.highPassUniforms.luminosityThreshold.value=a,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Fn({uniforms:this.highPassUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader}),this.separableBlurMaterials=[];const f=[6,10,14,18,22];c=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);for(let v=0;v<this.nMips;v++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(f[v])),this.separableBlurMaterials[v].uniforms.invSize.value=new nt(1/c,1/u),c=Math.round(c/2),u=Math.round(u/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const m=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=m,this.bloomTintColors=[new ne(1,1,1),new ne(1,1,1),new ne(1,1,1),new ne(1,1,1),new ne(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=qo.clone(Zc.uniforms),this.blendMaterial=new Fn({uniforms:this.copyUniforms,vertexShader:Zc.vertexShader,fragmentShader:Zc.fragmentShader,premultipliedAlpha:!0,blending:pf,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new yt,this._oldClearAlpha=1,this._basic=new jp,this._fsQuad=new Wp(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let s=Math.round(e/2),a=Math.round(t/2);this.renderTargetBright.setSize(s,a);for(let c=0;c<this.nMips;c++)this.renderTargetsHorizontal[c].setSize(s,a),this.renderTargetsVertical[c].setSize(s,a),this.separableBlurMaterials[c].uniforms.invSize.value=new nt(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2)}render(e,t,s,a,c){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const u=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),c&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=s.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=s.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let h=this.renderTargetBright;for(let f=0;f<this.nMips;f++)this._fsQuad.material=this.separableBlurMaterials[f],this.separableBlurMaterials[f].uniforms.colorTexture.value=h.texture,this.separableBlurMaterials[f].uniforms.direction.value=Ia.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[f]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[f].uniforms.colorTexture.value=this.renderTargetsHorizontal[f].texture,this.separableBlurMaterials[f].uniforms.direction.value=Ia.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[f]),e.clear(),this._fsQuad.render(e),h=this.renderTargetsVertical[f];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,c&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(s),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=u}_getSeparableBlurMaterial(e){const t=[],s=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(s*s))/s);return new Fn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new nt(.5,.5)},direction:{value:new nt(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Fn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}Ia.BlurDirectionX=new nt(1,0);Ia.BlurDirectionY=new nt(0,1);const Ic={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class CR extends za{constructor(){super(),this.isOutputPass=!0,this.uniforms=qo.clone(Ic.uniforms),this.material=new H0({name:Ic.name,uniforms:this.uniforms,vertexShader:Ic.vertexShader,fragmentShader:Ic.fragmentShader}),this._fsQuad=new Wp(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,s){this.uniforms.tDiffuse.value=s.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Nt.getTransfer(this._outputColorSpace)===kt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Mp?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ep?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===bp?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===hu?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===wp?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Cp?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Tp&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}function Zh(i){const e=`${i.model||""} ${i.serialNumber||""} ${i.zone||""}`.toLowerCase();return e.includes("switch")?"switch":e.includes("access")||e.includes("ap")||e.includes("wifi")?"ap":e.includes("router")||e.includes("gateway")?"gateway":"device"}function Xv(i){return i==="ONLINE"?1483594:i==="UNSTABLE"?15909632:6583435}function AR(i){const e=new yt(i);return new G0({color:e,roughness:.34,metalness:.18,emissive:e,emissiveIntensity:.16})}function RR(i,e="#0f172a"){const t=document.createElement("canvas"),s=t.getContext("2d");t.width=512,t.height=128,s.font="700 34px Arial",s.fillStyle="rgba(255,255,255,0.92)",s.roundRect(0,14,512,72,18),s.fill(),s.fillStyle=e,s.fillText(i.slice(0,26),28,60);const a=new $b(t),c=new F0({map:a,transparent:!0}),u=new Bb(c);return u.scale.set(4.8,1.2,1),u}function Uc(i,e,t,s=9741240){const a=new kn().setFromPoints([e,t]),c=new zp({color:s,transparent:!0,opacity:.75}),u=new k0(a,c);return i.add(u),u}function Oo(i,{position:e,color:t,label:s,shape:a="box",scale:c=[1,1,1]}){const u=a==="sphere"?new Gp(.45,32,18):a==="cylinder"?new Hp(.42,.55,1.2,32):new ja(1,1,1),h=AR(t),f=new wi(u,h);f.position.copy(e),f.scale.set(c[0],c[1],c[2]),f.castShadow=!0,f.receiveShadow=!0,i.add(f);const m=RR(s);return m.position.set(e.x,e.y+1.25,e.z),i.add(m),f}function NR(){const i=Ti.getStoredUser(),e=ka(i),t=j.useRef(null),[s,a]=j.useState([]),[c,u]=j.useState([]),[h,f]=j.useState([]),[m,v]=j.useState([]),[x,g]=j.useState(""),[M,E]=j.useState(!0),[A,y]=j.useState(""),[S,b]=j.useState(""),T=async(D,L=m)=>{E(!0);const O=Ns(D),w=O?{hotelId:O}:void 0;Promise.all([st.listDevices(w),st.listLoginSessions(w)]).then(([U,Y])=>{a(U),u(Y),f(O?L.filter(H=>H.id===O):L)}).catch(U=>{console.warn(U),y("Donnees live indisponibles, affichage de la topologie de reference.")}).finally(()=>E(!1))};j.useEffect(()=>{st.listHotels().then(async D=>{v(D);const L=Qo(i,D);g(L),await T(L,D)}).catch(D=>{console.warn(D),y("Donnees live indisponibles, affichage de la topologie de reference."),E(!1)})},[]),j.useEffect(()=>{!x||m.length===0||T(x)},[x]);const N=j.useMemo(()=>{const D=s.filter(U=>U.status==="ONLINE").length,L=s.filter(U=>U.status==="UNSTABLE").length,O=s.filter(U=>U.status==="OFFLINE").length,w=c.filter(U=>U.status==="ONLINE").length;return{online:D,unstable:L,offline:O,activeSessions:w}},[s,c]);return j.useEffect(()=>{var et;if(!t.current)return;const D=t.current,L=new Ib;L.background=new yt(15660024),L.fog=new Op(15660024,32,78);const O=new Mi(48,D.clientWidth/D.clientHeight,.1,1e3);O.position.set(9,10,17);let w;try{w=new rR({antialias:!0,alpha:!1}),b("")}catch(Ze){console.warn(Ze),b("Affichage 3D indisponible sur ce navigateur, topologie simplifiee affichee."),D.innerHTML="";return}w.setPixelRatio(Math.min(window.devicePixelRatio,2)),w.setSize(D.clientWidth,D.clientHeight),w.outputColorSpace=ui,w.toneMapping=hu,w.toneMappingExposure=.92,w.shadowMap.enabled=!0,w.shadowMap.type=y0,D.innerHTML="",D.appendChild(w.domElement);const U=new aR(O,w.domElement);U.enableDamping=!0,U.dampingFactor=.08,U.maxPolarAngle=Math.PI/2.08,U.minDistance=8,U.maxDistance=42,U.target.set(0,1.2,0);const Y=new e1(16777215,14412542,.82);L.add(Y);const H=new gv(16777215,2.15);H.position.set(12,20,9),H.castShadow=!0,H.shadow.mapSize.set(2048,2048),H.shadow.camera.left=-22,H.shadow.camera.right=22,H.shadow.camera.top=18,H.shadow.camera.bottom=-18,L.add(H);const ee=new gv(9418751,.72);ee.position.set(-14,9,-12),L.add(ee);const G=new wi(new el(34,24,1,1),new G0({color:15265526,roughness:.78,metalness:.02}));G.rotation.x=-Math.PI/2,G.receiveShadow=!0,L.add(G);const Q=new o1(34,22,13358561,14870768);Q.position.y=.01,L.add(Q);const V=new bR(w);V.setPixelRatio(Math.min(window.devicePixelRatio,2)),V.setSize(D.clientWidth,D.clientHeight),V.addPass(new TR(L,O));const k=new Ia(new nt(D.clientWidth,D.clientHeight),.14,.28,1.18);V.addPass(k),V.addPass(new CR);const W=x===ti?"MboaLink Multi-hotels":((et=h[0])==null?void 0:et.name)||"Hotel MboaLink",$=new ne(-11,1.2,0);Oo(L,{position:$,color:339807,label:W,shape:"box",scale:[1.8,2.6,1.8]});const le=new ne(-5.8,1.1,0);Oo(L,{position:le,color:15909632,label:"Gateway",shape:"box",scale:[1.5,.9,1.2]}),Uc(L,$,le,339807);const se=s.filter(Ze=>Zh(Ze)==="switch"),B=s.filter(Ze=>Zh(Ze)==="ap"),re=s.filter(Ze=>!["switch","ap"].includes(Zh(Ze))),Fe=se.length?se:re.slice(0,2),Te=B.length?B:s.slice(0,6),Ae=(Fe.length?Fe:[{id:"sw-1",model:"Core Switch",status:"ONLINE"}]).slice(0,4).map((Ze,qe,Ke)=>{const St=Ke.length===1?0:-5+qe*(10/Math.max(Ke.length-1,1)),at=new ne(-.8,1,St);return Oo(L,{position:at,color:Xv(Ze.status||"ONLINE"),label:Ze.model||Ze.serialNumber||`Switch ${qe+1}`,shape:"box",scale:[1.5,.62,1]}),Uc(L,le,at,2450411),{device:Ze,pos:at}}),me=(Te.length?Te:[{id:"ap-1",model:"AP Lobby",status:"ONLINE",zone:"Lobby"},{id:"ap-2",model:"AP Rooms",status:"ONLINE",zone:"Rooms"},{id:"ap-3",model:"AP Conference",status:"UNSTABLE",zone:"Conference"}]).slice(0,10).map((Ze,qe)=>{var J;const Ke=qe%2,at=4+Math.floor(qe/2)*2.7,Pt=Ke===0?-4.7:4.7,Tt=new ne(at,1.05,Pt);Oo(L,{position:Tt,color:Xv(Ze.status||"ONLINE"),label:Ze.zone||Ze.model||`AP ${qe+1}`,shape:"cylinder",scale:[1,1,1]});const Zt=((J=Ae[qe%Ae.length])==null?void 0:J.pos)||le;return Uc(L,Zt,Tt,9741240),{device:Ze,pos:Tt}});c.filter(Ze=>Ze.status==="ONLINE").slice(0,14).forEach((Ze,qe)=>{var Tt,Zt;const Ke=((Tt=me[qe%me.length])==null?void 0:Tt.pos)||le,St=qe/14*Math.PI*2,at=1.35+qe%3*.35,Pt=new ne(Ke.x+Math.cos(St)*at,.55,Ke.z+Math.sin(St)*at);Oo(L,{position:Pt,color:8141549,label:Ze.clientName||((Zt=Ze.room)==null?void 0:Zt.name)||"Client",shape:"sphere",scale:[.52,.52,.52]}),Uc(L,Ke,Pt,8141549)});let fe=0;const we=()=>{fe=requestAnimationFrame(we),L.traverse(Ze=>{var qe;Ze.isMesh&&((qe=Ze.geometry)==null?void 0:qe.type)==="CylinderGeometry"&&(Ze.rotation.y+=.006)}),U.update(),V.render()};we();const Oe=()=>{!D.clientWidth||!D.clientHeight||(O.aspect=D.clientWidth/D.clientHeight,O.updateProjectionMatrix(),w.setSize(D.clientWidth,D.clientHeight),V.setSize(D.clientWidth,D.clientHeight))};return window.addEventListener("resize",Oe),()=>{cancelAnimationFrame(fe),window.removeEventListener("resize",Oe),U.dispose(),V.dispose(),w.dispose(),L.traverse(Ze=>{var qe,Ke,St,at;(Ke=(qe=Ze.geometry)==null?void 0:qe.dispose)==null||Ke.call(qe),Ze.material&&(Array.isArray(Ze.material)?Ze.material.forEach(Pt=>{var Tt;return(Tt=Pt.dispose)==null?void 0:Tt.call(Pt)}):(at=(St=Ze.material).dispose)==null||at.call(St))}),D.innerHTML=""}},[s,c,h,x]),o.jsx(Tr,{activePage:"DASHBOARD",activeSubPage:"Network Map",children:o.jsxs("div",{className:"networkMapPage",children:[o.jsxs("div",{className:"networkMapHeader",children:[o.jsxs("div",{children:[o.jsx("p",{className:"networkMapEyebrow",children:"Architecture reseau 3D"}),o.jsx("h1",{children:x===ti?"Carte reseau multi-hotels":"Carte reseau de l'hotel"}),o.jsx("span",{children:"Gateway, switchs, access points et clients actifs dans une vue interactive."})]}),e&&o.jsxs("select",{className:"networkMapScopeSelect",value:x,onChange:D=>g(D.target.value),children:[o.jsx("option",{value:ti,children:"Tous les hôtels"}),m.map(D=>o.jsx("option",{value:D.id,children:D.name},D.id))]}),o.jsxs("div",{className:"networkMapStats",children:[o.jsx("strong",{children:N.online}),o.jsx("span",{children:"Online"}),o.jsx("strong",{children:N.unstable}),o.jsx("span",{children:"Instables"}),o.jsx("strong",{children:N.activeSessions}),o.jsx("span",{children:"Clients"})]})]}),o.jsxs("div",{className:"networkMapSceneShell",children:[o.jsx("div",{ref:t,className:"networkMapCanvas"}),M&&o.jsx("div",{className:"networkMapLoading",children:"Chargement de la topologie..."}),A&&o.jsx("div",{className:"networkMapNotice",children:A}),S&&o.jsxs("div",{className:"networkMapFallback",children:[o.jsx("div",{className:"fallbackNode hotel",children:"Hotel"}),o.jsx("div",{className:"fallbackLine"}),o.jsx("div",{className:"fallbackNode gateway",children:"Gateway"}),o.jsx("div",{className:"fallbackLine"}),o.jsxs("div",{className:"fallbackCluster",children:[o.jsx("div",{className:"fallbackNode switch",children:"Switch"}),o.jsx("div",{className:"fallbackNode ap",children:"Access Point"}),o.jsx("div",{className:"fallbackNode client",children:"Clients"})]}),o.jsx("p",{children:S})]}),o.jsxs("div",{className:"networkMapLegend",children:[o.jsxs("span",{children:[o.jsx("i",{className:"legendGateway"})," Gateway"]}),o.jsxs("span",{children:[o.jsx("i",{className:"legendOnline"})," Online"]}),o.jsxs("span",{children:[o.jsx("i",{className:"legendWarning"})," Instable"]}),o.jsxs("span",{children:[o.jsx("i",{className:"legendClient"})," Client actif"]})]})]})]})})}const PR="/assets/Logo%20Mboalink-02%201-Bk-0oppc.png",Fc={ADMIN:"Administrateur",SUPPORT:"Support",HOTEL_IT:"IT hôtel",RECEPTIONIST:"Réceptionniste",CLIENT:"Client"},Oc=["HOTEL_IT","RECEPTIONIST"],$v={ADMIN:"Admins MboaLink",SUPPORT:"Support IT MboaLink",HOTEL_IT:"IT hôtel",RECEPTIONIST:"Réceptionnistes"},Qh={INFO:"Information",WARNING:"Attention",URGENT:"Urgent"},Jh={fullName:"",email:"",password:"",role:"RECEPTIONIST",hotelId:""},ef={name:"",city:"",country:"Cameroun",address:"",description:""},tf={hotelId:"",macAddress:"",model:"",serialNumber:"",localIp:"",zone:"",floor:""},qv={title:"",message:"",priority:"INFO",category:"",targetMode:"ALL",hotelId:"",role:"SUPPORT",userIds:[]};function kc(i){return i?new Date(i).toLocaleString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}):"Jamais"}function t_(i){return i.split(" ").filter(Boolean).slice(0,2).map(e=>{var t;return(t=e[0])==null?void 0:t.toUpperCase()}).join("")||"ML"}function Gn(i){return String(i??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Yv(){const i=Ds(),e=Ti.getStoredUser(),[t,s]=j.useState([]),[a,c]=j.useState([]),[u,h]=j.useState([]),[f,m]=j.useState(""),[v,x]=j.useState("all"),[g,M]=j.useState("all"),[E,A]=j.useState(!0),[y,S]=j.useState(!1),[b,T]=j.useState(Jh),[N,D]=j.useState(ef),[L,O]=j.useState(tf),[w,U]=j.useState(null),[Y,H]=j.useState(null),[ee,G]=j.useState(null),[Q,V]=j.useState(null),[k,W]=j.useState("inbox"),[$,le]=j.useState([]),[se,B]=j.useState([]),[re,Fe]=j.useState([]),[Te,Ae]=j.useState(qv),[X,me]=j.useState(""),[fe,we]=j.useState(!1),Oe=async()=>{try{const[F,q,Se,Xe,ct,pt]=await Promise.all([st.listUsers(),st.listHotels(),st.listDevices(),st.listNotificationsInbox(),st.listSentNotifications(),st.listNotificationRecipients()]);s(F),c(q),h(Se),le(Xe),B(ct),Fe(pt)}catch(F){alert(F.message||"Chargement impossible")}finally{A(!1)}};j.useEffect(()=>{Oe()},[]);const et=j.useMemo(()=>{const F=f.trim().toLowerCase();return t.filter(q=>{var Se;return`${q.fullName} ${q.email} ${Fc[q.role]} ${((Se=q.hotel)==null?void 0:Se.name)||""}`.toLowerCase().includes(F)})},[t,f]),Ze=j.useMemo(()=>{const F=f.trim().toLowerCase();return a.filter(q=>`${q.name} ${q.city} ${q.address}`.toLowerCase().includes(F))},[a,f]),qe=j.useMemo(()=>{const F=f.trim().toLowerCase();return u.filter(q=>{var pt;const Se=`${q.model||""} ${q.macAddress} ${q.localIp||""} ${((pt=q.hotel)==null?void 0:pt.name)||""}`.toLowerCase().includes(F),Xe=v==="all"||q.hotelId===v,ct=g==="all"||q.status===g;return Se&&Xe&&ct})},[u,f,v,g]),Ke=j.useMemo(()=>{const F=u.filter(q=>q.status==="ONLINE").length;return{users:t.length,hotels:a.length,devices:u.length,onlineDevices:F}},[t,a,u]),St=j.useMemo(()=>{const F=X.trim().toLowerCase();return F?$.filter(q=>{var Se,Xe;return`${q.title} ${q.message} ${((Se=q.sender)==null?void 0:Se.fullName)||""} ${((Xe=q.hotel)==null?void 0:Xe.name)||""}`.toLowerCase().includes(F)}):$},[$,X]),at=j.useMemo(()=>$.filter(F=>{var q,Se;return!((Se=(q=F.recipients)==null?void 0:q[0])!=null&&Se.readAt)}).length,[$]),Pt=async()=>{await Ti.logout(),i(lt.public.login)},Tt=F=>{T(q=>({...q,role:F,hotelId:Oc.includes(F)?q.hotelId:""}))},Zt=()=>{U(null),T(Jh),V("user")},J=()=>{H(null),D(ef),V("hotel")},zt=()=>{G(null),O(tf),V("device")},mt=()=>{V(null),U(null),H(null),G(null),T(Jh),D(ef),O(tf)},Ft=async F=>{if(F.preventDefault(),Oc.includes(b.role)&&!b.hotelId){alert("Sélectionnez un hôtel pour ce rôle.");return}if(!w&&b.password.length<8){alert("Le mot de passe doit contenir au moins 8 caractères.");return}try{S(!0);const q={fullName:b.fullName,email:b.email,role:b.role,hotelId:Oc.includes(b.role)?b.hotelId:"",isActive:!0,...b.password?{password:b.password}:{}};w?await st.updateUser(w,q):await st.createUser(q),mt(),await Oe()}catch(q){alert(q.message||"Enregistrement utilisateur impossible")}finally{S(!1)}},ke=async F=>{F.preventDefault();try{S(!0);const q={...N,amenities:[],photos:[],status:"ACTIVE"};Y?await st.updateHotel(Y,q):await st.createHotel(q),mt(),await Oe()}catch(q){alert(q.message||"Enregistrement hôtel impossible")}finally{S(!1)}},Vt=async F=>{if(F.preventDefault(),!L.hotelId){alert("Sélectionnez un hôtel.");return}try{S(!0);const q={hotelId:L.hotelId,macAddress:L.macAddress,model:L.model||void 0,serialNumber:L.serialNumber||void 0,localIp:L.localIp||void 0,zone:L.zone||void 0,floor:L.floor?Number(L.floor):void 0};ee?await st.updateDevice(ee,q):await st.createDevice(q),mt(),await Oe()}catch(q){alert(q.message||"Enregistrement équipement impossible")}finally{S(!1)}},I=F=>{V("user"),U(F.id),T({fullName:F.fullName,email:F.email,password:"",role:F.role,hotelId:F.hotelId||""})},C=F=>{V("hotel"),H(F.id),D({name:F.name,city:F.city,country:F.country,address:F.address,description:F.description||""})},ae=F=>{V("device"),G(F.id),O({hotelId:F.hotelId,macAddress:F.macAddress,model:F.model||"",serialNumber:F.serialNumber||"",localIp:F.localIp||"",zone:F.zone||"",floor:F.floor!=null?String(F.floor):""})},ve=async F=>{if(confirm(`Désactiver ${F.email} ?`))try{await st.deactivateUser(F.id),await Oe()}catch(q){alert(q.message||"Désactivation impossible")}},Me=async F=>{if(confirm(`Supprimer ${F.name} ?`))try{await st.deleteHotel(F.id),await Oe()}catch(q){alert(q.message||"Suppression impossible")}},Re=F=>{Ae(q=>({...q,userIds:q.userIds.includes(F)?q.userIds.filter(Se=>Se!==F):[...q.userIds,F]}))},Ie=F=>{Ae(q=>({...q,targetMode:F,userIds:[]}))},ge=async F=>{if(F.preventDefault(),Te.targetMode==="HOTEL"&&!Te.hotelId){alert("Sélectionnez un hôtel.");return}if(Te.targetMode==="USERS"&&Te.userIds.length===0){alert("Sélectionnez au moins un destinataire.");return}try{we(!0),await st.createNotification({title:Te.title,message:Te.message,priority:Te.priority,category:Te.category,targetMode:Te.targetMode,hotelId:Te.hotelId,role:Te.role,userIds:Te.userIds}),Ae(qv),await Oe(),W("sent")}catch(q){alert(q.message||"Envoi impossible")}finally{we(!1)}},_e=async F=>{var q,Se;if(!((Se=(q=F.recipients)==null?void 0:q[0])!=null&&Se.readAt))try{await st.markNotificationRead(F.id),await Oe()}catch(Xe){alert(Xe.message||"Action impossible")}},je=()=>{const F=new Date().toLocaleString("fr-FR",{day:"2-digit",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"}),q=(e==null?void 0:e.fullName)||(e==null?void 0:e.email)||"Administrateur MboaLink",Se=a.filter(ot=>ot.status==="ACTIVE").length,Xe=u.filter(ot=>ot.status==="ONLINE").length,ct=t.filter(ot=>!ot.isActive).length,pt=new URL(PR,window.location.origin).href,Z=t.slice(0,12).map(ot=>{var wt;return`
      <tr>
        <td>${Gn(ot.fullName)}</td>
        <td>${Gn(ot.email)}</td>
        <td>${Gn(Fc[ot.role])}</td>
        <td>${Gn(((wt=ot.hotel)==null?void 0:wt.name)||"Plateforme")}</td>
        <td><span class="pill ${ot.isActive?"ok":"muted"}">${ot.isActive?"Actif":"Inactif"}</span></td>
      </tr>
    `}).join(""),Ne=a.slice(0,10).map(ot=>`
      <tr>
        <td>${Gn(ot.name)}</td>
        <td>${Gn(ot.city)}</td>
        <td>${Gn(ot.address)}</td>
        <td><span class="pill ${ot.status==="ACTIVE"?"ok":"warn"}">${Gn(ot.status)}</span></td>
      </tr>
    `).join(""),xe=u.slice(0,12).map(ot=>{var wt;return`
      <tr>
        <td>${Gn(ot.model||ot.serialNumber||ot.macAddress)}</td>
        <td>${Gn(((wt=ot.hotel)==null?void 0:wt.name)||"-")}</td>
        <td>${Gn(ot.localIp||"-")}</td>
        <td>${Gn(ot.zone||"-")}</td>
        <td><span class="pill ${ot.status==="ONLINE"?"ok":ot.status==="UNSTABLE"?"warn":"muted"}">${Gn(ot.status)}</span></td>
      </tr>
    `}).join(""),ze=`<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <title>Rapport MboaLink</title>
  <style>
    @page { size: A4; margin: 14mm; }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      color: #172033;
      background: #eef3f8;
      font-family: Inter, Arial, sans-serif;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    .report {
      max-width: 980px;
      margin: 0 auto;
      background: #fff;
      border: 1px solid #dce5ef;
      box-shadow: 0 22px 60px rgba(24, 40, 67, 0.14);
    }
    .hero {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 24px;
      padding: 30px 34px;
      background: linear-gradient(135deg, #12213a 0%, #1d4f8f 68%, #f4c542 220%);
      color: #fff;
    }
    .brand {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 28px;
    }
    .brand img {
      width: 220px;
      height: auto;
      object-fit: contain;
      padding: 0;
      border-radius: 8px;
      background: transparent;
    }
    .brand span {
      display: block;
      color: #f4c542;
      font-size: 12px;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }
    h1 {
      margin: 0;
      max-width: 620px;
      font-size: 34px;
      line-height: 1.08;
      letter-spacing: 0;
    }
    .hero p {
      margin: 12px 0 0;
      max-width: 620px;
      color: #dce9fb;
      font-size: 14px;
      line-height: 1.55;
    }
    .stamp {
      min-width: 180px;
      align-self: end;
      padding: 16px;
      border: 1px solid rgba(255,255,255,0.22);
      border-radius: 8px;
      background: rgba(255,255,255,0.1);
    }
    .stamp strong, .stamp span { display: block; }
    .stamp strong { color: #f4c542; font-size: 13px; margin-bottom: 6px; }
    .stamp span { color: #fff; font-size: 12px; line-height: 1.45; }
    .content { padding: 26px 34px 34px; }
    .sectionTitle {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      margin: 0 0 14px;
      padding-bottom: 10px;
      border-bottom: 2px solid #e5edf5;
    }
    .sectionTitle h2 {
      margin: 0;
      color: #1d4f8f;
      font-size: 18px;
    }
    .sectionTitle span {
      color: #6d7b90;
      font-size: 12px;
      font-weight: 800;
    }
    .kpis {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 12px;
      margin-bottom: 26px;
    }
    .kpi {
      min-height: 108px;
      padding: 16px;
      border: 1px solid #dce5ef;
      border-radius: 8px;
      background: #f8fbff;
    }
    .kpi strong {
      display: block;
      color: #1d4f8f;
      font-size: 30px;
      line-height: 1;
      margin-bottom: 10px;
    }
    .kpi span {
      color: #526277;
      font-size: 12px;
      font-weight: 900;
      text-transform: uppercase;
    }
    .summary {
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      gap: 14px;
      margin-bottom: 24px;
    }
    .box {
      padding: 18px;
      border: 1px solid #dce5ef;
      border-radius: 8px;
      background: #fff;
    }
    .box h3 { margin: 0 0 10px; color: #172033; font-size: 15px; }
    .box p, .box li {
      color: #526277;
      font-size: 12.5px;
      line-height: 1.55;
    }
    .box p { margin: 0; }
    .box ul { margin: 0; padding-left: 18px; }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 24px;
      border: 1px solid #e5edf5;
      border-radius: 8px;
      overflow: hidden;
    }
    th {
      padding: 11px 12px;
      background: #1d4f8f;
      color: #fff;
      font-size: 11px;
      text-align: left;
      text-transform: uppercase;
    }
    td {
      padding: 11px 12px;
      border-top: 1px solid #edf2f7;
      color: #263348;
      font-size: 12px;
      vertical-align: middle;
    }
    tr:nth-child(even) td { background: #f8fbff; }
    .pill {
      display: inline-flex;
      align-items: center;
      min-height: 22px;
      padding: 0 9px;
      border-radius: 999px;
      font-size: 10px;
      font-weight: 900;
      text-transform: uppercase;
    }
    .pill.ok { background: #e7f8ef; color: #167245; }
    .pill.warn { background: #fff6d7; color: #7a5600; }
    .pill.muted { background: #f2f4f7; color: #69788e; }
    .footer {
      display: flex;
      justify-content: space-between;
      gap: 20px;
      padding: 18px 34px;
      border-top: 1px solid #dce5ef;
      background: #f8fbff;
      color: #6d7b90;
      font-size: 11px;
      font-weight: 800;
    }
    @media print {
      body { background: #fff; }
      .report { box-shadow: none; border: 0; }
      .noPrint { display: none; }
      table, .box, .kpi { break-inside: avoid; }
    }
  </style>
</head>
<body>
  <main class="report">
    <section class="hero">
      <div>
        <div class="brand">
          <img src="${pt}" alt="MboaLink" />
          <span>Rapport administrateur</span>
        </div>
        <h1>État de la plateforme MboaLink</h1>
        <p>Vue de synthèse générée depuis l'espace super admin MboaLink. Ce document regroupe les indicateurs utilisateurs, hôtels, équipements réseau et intégrations utiles au suivi opérationnel.</p>
      </div>
      <aside class="stamp">
        <strong>Généré le</strong>
        <span>${Gn(F)}</span>
        <strong style="margin-top:12px;">Par</strong>
        <span>${Gn(q)}</span>
      </aside>
    </section>

    <section class="content">
      <div class="sectionTitle">
        <h2>Indicateurs clés</h2>
        <span>MboaLink Admin</span>
      </div>
      <div class="kpis">
        <div class="kpi"><strong>${Ke.users}</strong><span>Utilisateurs</span></div>
        <div class="kpi"><strong>${Se}/${Ke.hotels}</strong><span>Hôtels actifs</span></div>
        <div class="kpi"><strong>${Xe}/${Ke.devices}</strong><span>Équipements en ligne</span></div>
        <div class="kpi"><strong>${at}</strong><span>Notifications non lues</span></div>
      </div>

      <div class="summary">
        <div class="box">
          <h3>Résumé exécutif</h3>
          <p>MboaLink dispose actuellement de ${Ke.users} utilisateur(s), ${Ke.hotels} hôtel(s) et ${Ke.devices} équipement(s) réseau déclaré(s). Les modules administrateur, notifications internes, équipements réseau et portail captif sont centralisés dans l'espace super admin.</p>
        </div>
        <div class="box">
          <h3>Points d'attention</h3>
          <ul>
            <li>${ct} utilisateur(s) inactif(s) à vérifier.</li>
            <li>${Ke.devices-Xe} équipement(s) hors ligne ou instable(s).</li>
            <li>FreeRADIUS et portail captif à surveiller lors des tests réseau.</li>
          </ul>
        </div>
      </div>

      <div class="sectionTitle"><h2>Utilisateurs</h2><span>${t.length} entrée(s)</span></div>
      <table>
        <thead><tr><th>Nom</th><th>Email</th><th>Rôle</th><th>Hôtel</th><th>Statut</th></tr></thead>
        <tbody>${Z||'<tr><td colspan="5">Aucun utilisateur enregistré.</td></tr>'}</tbody>
      </table>

      <div class="sectionTitle"><h2>Hôtels</h2><span>${a.length} entrée(s)</span></div>
      <table>
        <thead><tr><th>Nom</th><th>Ville</th><th>Adresse</th><th>Statut</th></tr></thead>
        <tbody>${Ne||'<tr><td colspan="4">Aucun hôtel enregistré.</td></tr>'}</tbody>
      </table>

      <div class="sectionTitle"><h2>Équipements réseau</h2><span>${u.length} entrée(s)</span></div>
      <table>
        <thead><tr><th>Équipement</th><th>Hôtel</th><th>IP locale</th><th>Zone</th><th>Statut</th></tr></thead>
        <tbody>${xe||'<tr><td colspan="5">Aucun équipement enregistré.</td></tr>'}</tbody>
      </table>

      <div class="sectionTitle"><h2>Intégrations</h2><span>Suivi technique</span></div>
      <div class="summary">
        <div class="box">
          <h3>Services connectés</h3>
          <ul>
            <li>Swagger API : documentation backend disponible.</li>
            <li>Portail captif : authentification par UUID, code WiFi, nom et chambre.</li>
            <li>FreeRADIUS : intégration réseau en cours de stabilisation.</li>
          </ul>
        </div>
        <div class="box">
          <h3>Décision exploitation</h3>
          <p>Ce rapport peut servir de support de suivi avant la validation d'un déploiement plus professionnel ou l'association complète avec l'équipe réseau FreeRADIUS.</p>
        </div>
      </div>
    </section>

    <footer class="footer">
      <span>MboaLink © 2026</span>
      <span>Document généré automatiquement depuis l'administration MboaLink</span>
    </footer>
  </main>
</body>
</html>`,Pe=document.getElementById("mboalink-report-print-frame");Pe==null||Pe.remove();const ye=document.createElement("iframe");ye.id="mboalink-report-print-frame",ye.title="Rapport MboaLink PDF",ye.style.position="fixed",ye.style.right="0",ye.style.bottom="0",ye.style.width="0",ye.style.height="0",ye.style.border="0",ye.style.opacity="0",document.body.appendChild(ye);const Ve=ye.contentWindow,ht=Ve==null?void 0:Ve.document;if(!Ve||!ht){ye.remove(),alert("Impossible de préparer le PDF. Réessayez depuis le navigateur.");return}ht.open(),ht.write(ze),ht.close(),setTimeout(()=>{Ve.focus(),Ve.print(),setTimeout(()=>ye.remove(),1200)},500)};return o.jsxs("div",{className:"mboaAdminShell",children:[o.jsxs("aside",{className:"mboaAdminSidebar",children:[o.jsx("div",{className:"mboaAdminBrand",children:o.jsx("img",{src:yp,alt:"MboaLink"})}),o.jsxs("nav",{className:"mboaAdminNav","aria-label":"Administration MboaLink",children:[o.jsx("span",{children:"Menu principal"}),o.jsxs("a",{href:"#overview",className:"active",children:[o.jsx(dE,{size:18}),"Tableau de bord"]}),o.jsxs("a",{href:"#users",children:[o.jsx(fh,{size:18}),"Utilisateurs"]}),o.jsxs("a",{href:"#hotels",children:[o.jsx(ff,{size:18}),"Hôtels"]}),o.jsxs("a",{href:"#devices",children:[o.jsx(Ho,{size:18}),"Équipements réseau"]}),o.jsxs("a",{href:"#codes",children:[o.jsx(ko,{size:18}),"Codes WiFi"]}),o.jsxs("a",{href:"#connections",children:[o.jsx(dh,{size:18}),"Connexions"]}),o.jsxs("a",{href:"#admin-notifications",children:[o.jsx(Ix,{size:18}),"Notifications"]}),o.jsxs("a",{href:"#reports",children:[o.jsx(Ux,{size:18}),"Rapports"]}),o.jsxs("a",{href:"#settings",children:[o.jsx(kx,{size:18}),"Paramètres"]}),o.jsx("span",{children:"Système"}),o.jsxs("a",{href:"#roles",children:[o.jsx(fE,{size:18}),"Rôles & Permissions"]}),o.jsxs("a",{href:"/api-docs",target:"_blank",rel:"noreferrer",children:[o.jsx(uh,{size:18}),"API Swagger"]}),o.jsxs("a",{href:"#integrations",children:[o.jsx(Gc,{size:18}),"Intégrations"]})]}),o.jsx("div",{className:"mboaAdminFooter",children:"MboaLink © 2025"})]}),o.jsxs("main",{className:"mboaAdminMain",children:[o.jsxs("header",{className:"mboaAdminTopbar",children:[o.jsxs("div",{children:[o.jsx("h1",{children:"Bonjour, Administrateur"}),o.jsx("p",{children:"Voici l'aperçu de votre plateforme MboaLink"})]}),o.jsxs("div",{className:"mboaAdminTopActions",children:[o.jsxs("div",{className:"mboaAdminSearch",children:[o.jsx(bE,{size:16}),o.jsx("input",{value:f,onChange:F=>m(F.target.value),placeholder:"Rechercher..."})]}),o.jsxs("button",{className:"mboaAdminIconButton",type:"button",children:[o.jsx(Ix,{size:18}),o.jsx("span",{children:Ke.users})]}),o.jsxs("div",{className:"mboaAdminProfile",children:[o.jsx("div",{className:"mboaAdminAvatar",children:t_((e==null?void 0:e.fullName)||(e==null?void 0:e.email)||"Admin")}),o.jsxs("div",{children:[o.jsx("strong",{children:(e==null?void 0:e.fullName)||"Administrateur"}),o.jsx("small",{children:"Super Admin"})]}),o.jsx("button",{type:"button",onClick:Pt,title:"Déconnexion",children:o.jsx(mE,{size:16})})]})]})]}),o.jsxs("section",{id:"overview",className:"mboaAdminStats",children:[o.jsxs("article",{children:[o.jsx(fh,{size:20}),o.jsx("strong",{children:Ke.users}),o.jsx("span",{children:"Utilisateurs"})]}),o.jsxs("article",{children:[o.jsx(hf,{size:20}),o.jsx("strong",{children:Ke.hotels}),o.jsx("span",{children:"Hôtels"})]}),o.jsxs("article",{children:[o.jsx(Ho,{size:20}),o.jsx("strong",{children:Ke.devices}),o.jsx("span",{children:"Équipements réseau"})]}),o.jsxs("article",{children:[o.jsx(ko,{size:20}),o.jsx("strong",{children:Ke.onlineDevices}),o.jsx("span",{children:"Équipements en ligne"})]})]}),o.jsxs("section",{id:"users",className:`mboaAdminSection ${Q==="user"?"hasForm":""}`,children:[o.jsxs("div",{className:"mboaAdminDataPanel",children:[o.jsx(Zr,{title:"Gestion des utilisateurs",subtitle:"Liste de tous les utilisateurs du système",actionLabel:"Nouvel utilisateur",onAction:Zt}),o.jsxs("table",{className:"mboaAdminTable",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Nom complet"}),o.jsx("th",{children:"Email"}),o.jsx("th",{children:"Rôle"}),o.jsx("th",{children:"Statut"}),o.jsx("th",{children:"Hôtel"}),o.jsx("th",{children:"Actions"})]})}),o.jsx("tbody",{children:et.map(F=>{var q;return o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx(LR,{name:F.fullName})}),o.jsx("td",{children:F.email}),o.jsx("td",{children:o.jsx("span",{className:`mboaRoleBadge role-${F.role.toLowerCase()}`,children:Fc[F.role]})}),o.jsx("td",{children:o.jsx("span",{className:`mboaStatusBadge ${F.isActive?"active":"inactive"}`,children:F.isActive?"Actif":"Inactif"})}),o.jsx("td",{children:((q=F.hotel)==null?void 0:q.name)||"Plateforme"}),o.jsx("td",{children:o.jsx(rf,{onEdit:()=>I(F),onDelete:()=>ve(F),deleteTitle:"Désactiver"})})]},F.id)})})]}),o.jsx(nf,{count:et.length,label:"utilisateur"})]}),Q==="user"&&o.jsxs("form",{className:"mboaAdminFormPanel",onSubmit:Ft,children:[o.jsxs("div",{className:"mboaFormHeader",children:[o.jsx("h2",{children:w?"Modifier utilisateur":"Nouvel utilisateur"}),o.jsx("button",{type:"button",onClick:mt,children:"Fermer"})]}),o.jsxs("label",{children:["Nom complet",o.jsx("input",{value:b.fullName,onChange:F=>T(q=>({...q,fullName:F.target.value})),required:!0})]}),o.jsxs("label",{children:["Email",o.jsx("input",{type:"email",value:b.email,onChange:F=>T(q=>({...q,email:F.target.value})),required:!0})]}),o.jsxs("label",{children:["Rôle",o.jsx("select",{value:b.role,onChange:F=>Tt(F.target.value),children:Object.entries(Fc).map(([F,q])=>o.jsx("option",{value:F,children:q},F))})]}),Oc.includes(b.role)&&o.jsxs("label",{children:["Hôtel",o.jsxs("select",{value:b.hotelId,onChange:F=>T(q=>({...q,hotelId:F.target.value})),required:!0,children:[o.jsx("option",{value:"",children:"Sélectionner un hôtel"}),a.map(F=>o.jsx("option",{value:F.id,children:F.name},F.id))]})]}),o.jsxs("label",{children:["Mot de passe",o.jsx("input",{type:"password",value:b.password,onChange:F=>T(q=>({...q,password:F.target.value})),required:!w})]}),o.jsxs("button",{className:"mboaPrimaryButton",disabled:y,children:[o.jsx(hh,{size:16}),w?"Enregistrer l'utilisateur":"Créer l'utilisateur"]})]})]}),o.jsxs("section",{id:"hotels",className:`mboaAdminSection ${Q==="hotel"?"hasForm":""}`,children:[o.jsxs("div",{className:"mboaAdminDataPanel",children:[o.jsx(Zr,{title:"Gestion des hôtels",subtitle:"Liste de tous les hôtels enregistrés",actionLabel:"Nouvel hôtel",onAction:J}),o.jsxs("table",{className:"mboaAdminTable",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Nom de l'hôtel"}),o.jsx("th",{children:"Ville"}),o.jsx("th",{children:"Adresse"}),o.jsx("th",{children:"Statut"}),o.jsx("th",{children:"Date création"}),o.jsx("th",{children:"Actions"})]})}),o.jsx("tbody",{children:Ze.map(F=>o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("strong",{children:F.name})}),o.jsx("td",{children:F.city}),o.jsx("td",{children:F.address}),o.jsx("td",{children:o.jsx("span",{className:"mboaStatusBadge active",children:F.status==="ACTIVE"?"Actif":F.status})}),o.jsx("td",{children:kc(F.createdAt)}),o.jsx("td",{children:o.jsx(rf,{onEdit:()=>C(F),onDelete:()=>Me(F)})})]},F.id))})]}),o.jsx(nf,{count:Ze.length,label:"hôtel"})]}),Q==="hotel"&&o.jsxs("form",{className:"mboaAdminFormPanel",onSubmit:ke,children:[o.jsxs("div",{className:"mboaFormHeader",children:[o.jsx("h2",{children:Y?"Modifier hôtel":"Nouvel hôtel"}),o.jsx("button",{type:"button",onClick:mt,children:"Fermer"})]}),o.jsxs("label",{children:["Nom de l'hôtel",o.jsx("input",{value:N.name,onChange:F=>D(q=>({...q,name:F.target.value})),required:!0})]}),o.jsxs("div",{className:"mboaFormGrid",children:[o.jsxs("label",{children:["Ville",o.jsx("input",{value:N.city,onChange:F=>D(q=>({...q,city:F.target.value})),required:!0})]}),o.jsxs("label",{children:["Pays",o.jsx("input",{value:N.country,onChange:F=>D(q=>({...q,country:F.target.value})),required:!0})]})]}),o.jsxs("label",{children:["Adresse",o.jsx("input",{value:N.address,onChange:F=>D(q=>({...q,address:F.target.value})),required:!0})]}),o.jsxs("label",{children:["Description",o.jsx("textarea",{value:N.description,onChange:F=>D(q=>({...q,description:F.target.value}))})]}),o.jsxs("button",{className:"mboaPrimaryButton",disabled:y,children:[o.jsx(hh,{size:16}),Y?"Enregistrer l'hôtel":"Créer l'hôtel"]})]})]}),o.jsxs("section",{id:"devices",className:`mboaAdminSection ${Q==="device"?"hasForm":""}`,children:[o.jsxs("div",{className:"mboaAdminDataPanel",children:[o.jsxs("div",{className:"mboaPanelHeader",children:[o.jsxs("div",{children:[o.jsx("h2",{children:"Gestion des équipements réseau"}),o.jsx("p",{children:"Routeurs, switchs, points d'accès et contrôleurs par hôtel"})]}),o.jsxs("div",{className:"mboaPanelFilters",children:[o.jsxs("select",{value:v,onChange:F=>x(F.target.value),children:[o.jsx("option",{value:"all",children:"Tous les hôtels"}),a.map(F=>o.jsx("option",{value:F.id,children:F.name},F.id))]}),o.jsxs("select",{value:g,onChange:F=>M(F.target.value),children:[o.jsx("option",{value:"all",children:"Tous les statuts"}),o.jsx("option",{value:"ONLINE",children:"En ligne"}),o.jsx("option",{value:"OFFLINE",children:"Hors ligne"}),o.jsx("option",{value:"UNSTABLE",children:"Instable"})]}),o.jsx("button",{type:"button",onClick:zt,children:"Nouvel équipement"})]})]}),o.jsxs("table",{className:"mboaAdminTable",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Nom de l'équipement"}),o.jsx("th",{children:"Type"}),o.jsx("th",{children:"Hôtel"}),o.jsx("th",{children:"Adresse IP"}),o.jsx("th",{children:"Statut"}),o.jsx("th",{children:"Dernier heartbeat"}),o.jsx("th",{children:"Actions"})]})}),o.jsx("tbody",{children:qe.map(F=>{var q,Se,Xe;return o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("strong",{children:F.model||F.serialNumber||F.macAddress})}),o.jsx("td",{children:(q=F.model)!=null&&q.toLowerCase().includes("switch")?"Switch":(Se=F.model)!=null&&Se.toLowerCase().includes("router")?"Routeur":"Point d'accès"}),o.jsx("td",{children:((Xe=F.hotel)==null?void 0:Xe.name)||"-"}),o.jsx("td",{children:F.localIp||"-"}),o.jsx("td",{children:o.jsx("span",{className:`mboaStatusBadge ${F.status.toLowerCase()}`,children:F.status==="ONLINE"?"En ligne":F.status==="UNSTABLE"?"Instable":"Hors ligne"})}),o.jsx("td",{children:kc(F.lastHeartbeatAt)}),o.jsx("td",{children:o.jsx(rf,{onEdit:()=>ae(F),onDelete:()=>alert("Suppression équipement à valider côté backend.")})})]},F.id)})})]}),o.jsx(nf,{count:qe.length,label:"équipement"})]}),Q==="device"&&o.jsxs("form",{className:"mboaAdminFormPanel",onSubmit:Vt,children:[o.jsxs("div",{className:"mboaFormHeader",children:[o.jsx("h2",{children:ee?"Modifier équipement réseau":"Nouvel équipement réseau"}),o.jsx("button",{type:"button",onClick:mt,children:"Fermer"})]}),o.jsxs("label",{children:["Hôtel",o.jsxs("select",{value:L.hotelId,onChange:F=>O(q=>({...q,hotelId:F.target.value})),required:!0,children:[o.jsx("option",{value:"",children:"Sélectionner un hôtel"}),a.map(F=>o.jsx("option",{value:F.id,children:F.name},F.id))]})]}),o.jsxs("label",{children:["Nom / modèle",o.jsx("input",{value:L.model,onChange:F=>O(q=>({...q,model:F.target.value})),placeholder:"AP-RECEPTION-01"})]}),o.jsxs("label",{children:["Adresse MAC",o.jsx("input",{value:L.macAddress,onChange:F=>O(q=>({...q,macAddress:F.target.value})),disabled:!!ee,required:!0})]}),o.jsxs("label",{children:["Adresse IP",o.jsx("input",{value:L.localIp,onChange:F=>O(q=>({...q,localIp:F.target.value})),placeholder:"192.168.1.100"})]}),o.jsxs("div",{className:"mboaFormGrid",children:[o.jsxs("label",{children:["Zone",o.jsx("input",{value:L.zone,onChange:F=>O(q=>({...q,zone:F.target.value}))})]}),o.jsxs("label",{children:["Étage",o.jsx("input",{type:"number",value:L.floor,onChange:F=>O(q=>({...q,floor:F.target.value}))})]})]}),o.jsxs("button",{className:"mboaPrimaryButton",disabled:y,children:[o.jsx(hh,{size:16}),ee?"Enregistrer l'équipement":"Créer l'équipement"]})]})]}),o.jsxs("section",{id:"codes",className:"mboaAdminUtilitySection",children:[o.jsx(Zr,{title:"Codes WiFi",subtitle:"Pilotage global des accès clients par hôtel",actionLabel:"Voir les codes",onAction:()=>x("all")}),o.jsxs("div",{className:"mboaUtilityGrid",children:[o.jsx(Vn,{icon:o.jsx(cE,{size:18}),title:"Codes actifs",value:`${Ke.users}`,detail:"Les codes restent administrés depuis les hôtels concernés."}),o.jsx(Vn,{icon:o.jsx(ff,{size:18}),title:"Filtrage hôtel",value:a.length?"Disponible":"À configurer",detail:"Le super admin conserve la vue globale et peut filtrer par hôtel."}),o.jsx(Vn,{icon:o.jsx(Gc,{size:18}),title:"Contrôle",value:"Admin",detail:"Création, révocation et suivi seront consolidés ici."})]})]}),o.jsxs("section",{id:"connections",className:"mboaAdminUtilitySection",children:[o.jsx(Zr,{title:"Connexions",subtitle:"Suivi administrateur des clients connectés, hors ligne ou expirés",actionLabel:"Actualiser",onAction:Oe}),o.jsxs("div",{className:"mboaUtilityGrid",children:[o.jsx(Vn,{icon:o.jsx(dh,{size:18}),title:"Équipements en ligne",value:String(Ke.onlineDevices),detail:"Indicateur réseau disponible depuis les équipements remontés."}),o.jsx(Vn,{icon:o.jsx(ko,{size:18}),title:"Hôtels couverts",value:String(Ke.hotels),detail:"Les connexions seront filtrables par hôtel dans cette section."}),o.jsx(Vn,{icon:o.jsx(Ux,{size:18}),title:"Historique",value:"Prévu",detail:"Journal des sessions et expirations à consolider côté API."})]})]}),o.jsxs("section",{id:"admin-notifications",className:"mboaAdminUtilitySection",children:[o.jsxs("div",{className:"mboaNotificationHeader",children:[o.jsxs("div",{children:[o.jsx("h2",{children:"Notifications internes"}),o.jsx("p",{children:"Messages de service, maintenances, consignes et alertes internes MboaLink."})]}),o.jsxs("div",{className:"notificationCounter",children:[o.jsx("strong",{children:at}),o.jsxs("span",{children:["non lue",at!==1?"s":""]})]})]}),o.jsxs("div",{className:"notificationsGrid mboaAdminNotificationsGrid",children:[o.jsxs("form",{className:"notificationComposer",onSubmit:ge,children:[o.jsx("h2",{children:"Nouveau message"}),o.jsxs("label",{children:["Titre",o.jsx("input",{value:Te.title,onChange:F=>Ae(q=>({...q,title:F.target.value})),required:!0,maxLength:140,placeholder:"Ex : Maintenance programmée"})]}),o.jsxs("label",{children:["Message",o.jsx("textarea",{value:Te.message,onChange:F=>Ae(q=>({...q,message:F.target.value})),required:!0,maxLength:4e3,rows:6,placeholder:"Détaillez la consigne ou l'incident..."})]}),o.jsxs("div",{className:"notificationFormRow",children:[o.jsxs("label",{children:["Priorité",o.jsx("select",{value:Te.priority,onChange:F=>Ae(q=>({...q,priority:F.target.value})),children:Object.entries(Qh).map(([F,q])=>o.jsx("option",{value:F,children:q},F))})]}),o.jsxs("label",{children:["Catégorie",o.jsx("input",{value:Te.category,onChange:F=>Ae(q=>({...q,category:F.target.value})),placeholder:"Maintenance, incident..."})]})]}),o.jsxs("label",{children:["Destinataires",o.jsxs("select",{value:Te.targetMode,onChange:F=>Ie(F.target.value),children:[o.jsx("option",{value:"ALL",children:"Tous les acteurs"}),o.jsx("option",{value:"HOTEL",children:"Acteurs d'un hôtel"}),o.jsx("option",{value:"ROLE",children:"Un rôle précis"}),o.jsx("option",{value:"USERS",children:"Utilisateurs précis"})]})]}),Te.targetMode==="HOTEL"&&o.jsxs("label",{children:["Hôtel",o.jsxs("select",{value:Te.hotelId,onChange:F=>Ae(q=>({...q,hotelId:F.target.value})),required:!0,children:[o.jsx("option",{value:"",children:"Sélectionner un hôtel"}),a.map(F=>o.jsx("option",{value:F.id,children:F.name},F.id))]})]}),Te.targetMode==="ROLE"&&o.jsxs("label",{children:["Rôle",o.jsx("select",{value:Te.role,onChange:F=>Ae(q=>({...q,role:F.target.value})),children:Object.entries($v).map(([F,q])=>o.jsx("option",{value:F,children:q},F))})]}),Te.targetMode==="USERS"&&o.jsx("div",{className:"recipientPicker",children:re.map(F=>{var q;return o.jsxs("label",{className:"recipientOption",children:[o.jsx("input",{type:"checkbox",checked:Te.userIds.includes(F.id),onChange:()=>Re(F.id)}),o.jsxs("span",{children:[o.jsx("strong",{children:F.fullName}),o.jsxs("small",{children:[$v[F.role]||F.role,(q=F.hotel)!=null&&q.name?` - ${F.hotel.name}`:""]})]})]},F.id)})}),o.jsx("button",{className:"btn btnPrimary",disabled:fe,children:fe?"Envoi...":"Envoyer la notification"})]}),o.jsxs("section",{className:"notificationPanel",children:[o.jsxs("div",{className:"notificationTabs",children:[o.jsx("button",{type:"button",className:k==="inbox"?"active":"",onClick:()=>W("inbox"),children:"Réception"}),o.jsx("button",{type:"button",className:k==="sent"?"active":"",onClick:()=>W("sent"),children:"Envoyés"}),o.jsx("input",{value:X,onChange:F=>me(F.target.value),placeholder:"Rechercher..."})]}),E&&o.jsx("p",{className:"notificationEmpty",children:"Chargement..."}),!E&&k==="inbox"&&o.jsx("div",{className:"notificationList",children:St.length===0?o.jsx("p",{className:"notificationEmpty",children:"Aucune notification reçue."}):St.map(F=>{var Se,Xe,ct,pt;const q=!((Xe=(Se=F.recipients)==null?void 0:Se[0])!=null&&Xe.readAt);return o.jsxs("article",{className:`notificationItem ${F.priority.toLowerCase()} ${q?"unread":""}`,children:[o.jsxs("div",{className:"notificationItemTop",children:[o.jsx("span",{className:`priorityBadge ${F.priority.toLowerCase()}`,children:Qh[F.priority]}),o.jsx("small",{children:kc(F.createdAt)})]}),o.jsx("h3",{children:F.title}),o.jsx("p",{children:F.message}),o.jsxs("div",{className:"notificationMeta",children:[o.jsxs("span",{children:["De : ",((ct=F.sender)==null?void 0:ct.fullName)||"Système"]}),((pt=F.hotel)==null?void 0:pt.name)&&o.jsxs("span",{children:["Hôtel : ",F.hotel.name]}),F.category&&o.jsx("span",{children:F.category})]}),q&&o.jsx("button",{type:"button",className:"markReadBtn",onClick:()=>_e(F),children:"Marquer comme lu"})]},F.id)})}),!E&&k==="sent"&&o.jsx("div",{className:"notificationList",children:se.length===0?o.jsx("p",{className:"notificationEmpty",children:"Aucun message envoyé."}):se.map(F=>{var q;return o.jsxs("article",{className:`notificationItem ${F.priority.toLowerCase()}`,children:[o.jsxs("div",{className:"notificationItemTop",children:[o.jsx("span",{className:`priorityBadge ${F.priority.toLowerCase()}`,children:Qh[F.priority]}),o.jsx("small",{children:kc(F.createdAt)})]}),o.jsx("h3",{children:F.title}),o.jsx("p",{children:F.message}),o.jsxs("div",{className:"notificationMeta",children:[o.jsxs("span",{children:[F.recipients.length," destinataire",F.recipients.length!==1?"s":""]}),((q=F.hotel)==null?void 0:q.name)&&o.jsxs("span",{children:["Hôtel : ",F.hotel.name]})]})]},F.id)})})]})]})]}),o.jsxs("section",{id:"reports",className:"mboaAdminUtilitySection",children:[o.jsx(Zr,{title:"Rapports",subtitle:"Vue de synthèse pour suivre l'exploitation MboaLink",actionLabel:"Exporter",onAction:je}),o.jsxs("div",{className:"mboaUtilityGrid",children:[o.jsx(Vn,{icon:o.jsx(fh,{size:18}),title:"Utilisateurs",value:String(Ke.users),detail:"Volume total d'acteurs enregistrés."}),o.jsx(Vn,{icon:o.jsx(hf,{size:18}),title:"Hôtels",value:String(Ke.hotels),detail:"Hôtels actifs dans la plateforme."}),o.jsx(Vn,{icon:o.jsx(Ho,{size:18}),title:"Réseau",value:String(Ke.devices),detail:"Équipements déclarés dans MboaLink."})]})]}),o.jsxs("section",{id:"settings",className:"mboaAdminUtilitySection",children:[o.jsx(Zr,{title:"Paramètres",subtitle:"Configuration globale de la plateforme",actionLabel:"Enregistrer",onAction:()=>alert("Paramètres globaux à connecter à une API dédiée.")}),o.jsxs("div",{className:"mboaUtilityGrid",children:[o.jsx(Vn,{icon:o.jsx(kx,{size:18}),title:"Environnement",value:"Production",detail:"Paramètres applicatifs et valeurs de déploiement."}),o.jsx(Vn,{icon:o.jsx(uh,{size:18}),title:"Base de données",value:"PostgreSQL",detail:"Postgres stabilisé avec initialisation durable du mot de passe."}),o.jsx(Vn,{icon:o.jsx(Gc,{size:18}),title:"Sécurité",value:"Rôles",detail:"Accès séparés entre admin, support, IT hôtel et réception."})]})]}),o.jsxs("section",{id:"roles",className:"mboaAdminUtilitySection",children:[o.jsx(Zr,{title:"Rôles & Permissions",subtitle:"Résumé des droits principaux",actionLabel:"Synchroniser",onAction:Oe}),o.jsxs("div",{className:"mboaPermissionList",children:[o.jsx(jc,{role:"ADMIN",description:"Super admin MboaLink, gestion complète depuis cette interface."}),o.jsx(jc,{role:"SUPPORT",description:"Vue opérationnelle sans Hotel Manager ni Device Manager."}),o.jsx(jc,{role:"HOTEL_IT",description:"Gestion technique limitée à son hôtel."}),o.jsx(jc,{role:"RECEPTIONIST",description:"Accès limité à Manual Login pour son hôtel."})]})]}),o.jsxs("section",{id:"integrations",className:"mboaAdminUtilitySection",children:[o.jsx(Zr,{title:"Intégrations",subtitle:"Services connectés à MboaLink",actionLabel:"Tester",onAction:()=>alert("Tests d’intégration à connecter aux endpoints de santé.")}),o.jsxs("div",{className:"mboaUtilityGrid",children:[o.jsx(Vn,{icon:o.jsx(uh,{size:18}),title:"Swagger API",value:"Disponible",detail:"Documentation backend accessible via /api-docs."}),o.jsx(Vn,{icon:o.jsx(ko,{size:18}),title:"FreeRADIUS",value:"En cours",detail:"Intégration réseau à stabiliser avec l'équipe radius."}),o.jsx(Vn,{icon:o.jsx(dh,{size:18}),title:"Portail captif",value:"Actif",detail:"Authentification client par UUID, code WiFi, nom et chambre."})]})]}),E&&o.jsx("div",{className:"mboaLoading",children:"Chargement de l'administration..."})]})]})}function Zr({title:i,subtitle:e,actionLabel:t,onAction:s}){return o.jsxs("div",{className:"mboaPanelHeader",children:[o.jsxs("div",{children:[o.jsx("h2",{children:i}),o.jsx("p",{children:e})]}),o.jsx("button",{type:"button",onClick:s,children:t})]})}function nf({count:i,label:e}){return o.jsxs("div",{className:"mboaPanelFooter",children:["Affichage de 1 à ",i," sur ",i," ",e,i>1?"s":""]})}function LR({name:i}){return o.jsxs("div",{className:"mboaUserCell",children:[o.jsx("span",{children:t_(i)}),o.jsx("strong",{children:i})]})}function rf({onEdit:i,onDelete:e,deleteTitle:t="Supprimer"}){return o.jsxs("div",{className:"mboaRowActions",children:[o.jsx("button",{type:"button",onClick:i,title:"Modifier",children:o.jsx(vE,{size:15})}),o.jsx("button",{type:"button",onClick:e,title:t,className:"danger",children:o.jsx(NE,{size:15})})]})}function Vn({icon:i,title:e,value:t,detail:s}){return o.jsxs("article",{className:"mboaUtilityCard",children:[o.jsx("span",{children:i}),o.jsx("strong",{children:t}),o.jsx("h3",{children:e}),o.jsx("p",{children:s})]})}function jc({role:i,description:e}){return o.jsxs("div",{className:"mboaPermissionRow",children:[o.jsx("strong",{children:i}),o.jsx("span",{children:e})]})}const Kv={ADMIN:"Admins MboaLink",SUPPORT:"Support IT MboaLink",HOTEL_IT:"IT hôtel",RECEPTIONIST:"Réceptionnistes"},sf={INFO:"Information",WARNING:"Attention",URGENT:"Urgent"},af={title:"",message:"",priority:"INFO",category:"",targetMode:"ALL",hotelId:"",role:"RECEPTIONIST",userIds:[]};function Zv(i){return new Date(i).toLocaleString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}function DR(){const i=Ti.getStoredUser(),e=(i==null?void 0:i.role)==="ADMIN"||(i==null?void 0:i.role)==="SUPPORT"||(i==null?void 0:i.role)==="HOTEL_IT",t=(i==null?void 0:i.role)==="HOTEL_IT",[s,a]=j.useState("inbox"),[c,u]=j.useState([]),[h,f]=j.useState([]),[m,v]=j.useState([]),[x,g]=j.useState([]),[M,E]=j.useState(af),[A,y]=j.useState(!0),[S,b]=j.useState(!1),[T,N]=j.useState(""),D=async()=>{try{const G=[st.listNotificationsInbox(),st.listNotificationRecipients()];e&&G.push(st.listSentNotifications()),t||G.push(st.listHotels());const[Q,V,k,W]=await Promise.all(G);u(Q),v(V),e&&f(k||[]),t?(g([]),E($=>({...$,targetMode:"HOTEL"}))):g((e?W:k)||[])}catch(G){alert(G.message||"Chargement des notifications impossible")}finally{y(!1)}};j.useEffect(()=>{D()},[]);const L=j.useMemo(()=>{const G=T.trim().toLowerCase();return G?c.filter(Q=>{var V,k;return`${Q.title} ${Q.message} ${((V=Q.sender)==null?void 0:V.fullName)||""} ${((k=Q.hotel)==null?void 0:k.name)||""}`.toLowerCase().includes(G)}):c},[c,T]),O=j.useMemo(()=>c.filter(G=>{var Q,V;return!((V=(Q=G.recipients)==null?void 0:Q[0])!=null&&V.readAt)}).length,[c]),w=G=>{E(Q=>({...Q,userIds:Q.userIds.includes(G)?Q.userIds.filter(V=>V!==G):[...Q.userIds,G]}))},U=G=>{E(Q=>({...Q,targetMode:G,userIds:[]}))},Y=async G=>{if(G.preventDefault(),!!e){if(M.targetMode==="HOTEL"&&!t&&!M.hotelId){alert("Sélectionnez un hôtel.");return}if(M.targetMode==="USERS"&&M.userIds.length===0){alert("Sélectionnez au moins un destinataire.");return}try{b(!0),await st.createNotification({title:M.title,message:M.message,priority:M.priority,category:M.category,targetMode:M.targetMode,hotelId:M.hotelId,role:M.role,userIds:M.userIds}),E(t?{...af,targetMode:"HOTEL"}:af),await D(),a("sent")}catch(Q){alert(Q.message||"Envoi impossible")}finally{b(!1)}}},H=async G=>{var Q,V;if(!((V=(Q=G.recipients)==null?void 0:Q[0])!=null&&V.readAt))try{await st.markNotificationRead(G.id),await D()}catch(k){alert(k.message||"Action impossible")}},ee=h;return o.jsx(Tr,{activePage:"NOTIFICATIONS",activeSubPage:"Messages",children:o.jsxs("div",{className:"notificationsPage",children:[o.jsxs("div",{className:"pageHeader",children:[o.jsxs("div",{children:[o.jsx("h1",{className:"pageTitle",children:"Notifications internes"}),o.jsx("p",{className:"pageSubtitle",children:"Messages de service, maintenances, consignes et alertes internes MboaLink."})]}),o.jsxs("div",{className:"notificationCounter",children:[o.jsx("strong",{children:O}),o.jsxs("span",{children:["non lue",O!==1?"s":""]})]})]}),o.jsxs("div",{className:"notificationsGrid",children:[e&&o.jsxs("form",{className:"notificationComposer",onSubmit:Y,children:[o.jsx("h2",{children:"Nouveau message"}),o.jsxs("label",{children:["Titre",o.jsx("input",{value:M.title,onChange:G=>E(Q=>({...Q,title:G.target.value})),required:!0,maxLength:140,placeholder:"Ex : Maintenance programmée"})]}),o.jsxs("label",{children:["Message",o.jsx("textarea",{value:M.message,onChange:G=>E(Q=>({...Q,message:G.target.value})),required:!0,maxLength:4e3,rows:6,placeholder:"Détaillez la consigne ou l'incident..."})]}),o.jsxs("div",{className:"notificationFormRow",children:[o.jsxs("label",{children:["Priorité",o.jsx("select",{value:M.priority,onChange:G=>E(Q=>({...Q,priority:G.target.value})),children:Object.entries(sf).map(([G,Q])=>o.jsx("option",{value:G,children:Q},G))})]}),o.jsxs("label",{children:["Catégorie",o.jsx("input",{value:M.category,onChange:G=>E(Q=>({...Q,category:G.target.value})),placeholder:"Maintenance, incident..."})]})]}),o.jsxs("label",{children:["Destinataires",o.jsxs("select",{value:M.targetMode,onChange:G=>U(G.target.value),disabled:t,children:[!t&&o.jsx("option",{value:"ALL",children:"Tous les acteurs"}),o.jsx("option",{value:"HOTEL",children:t?"Réceptionnistes de mon hôtel":"Acteurs d’un hôtel"}),!t&&o.jsx("option",{value:"ROLE",children:"Un rôle précis"}),o.jsx("option",{value:"USERS",children:"Utilisateurs précis"})]})]}),M.targetMode==="HOTEL"&&!t&&o.jsxs("label",{children:["Hôtel",o.jsxs("select",{value:M.hotelId,onChange:G=>E(Q=>({...Q,hotelId:G.target.value})),required:!0,children:[o.jsx("option",{value:"",children:"Sélectionner un hôtel"}),x.map(G=>o.jsx("option",{value:G.id,children:G.name},G.id))]})]}),M.targetMode==="ROLE"&&o.jsxs("label",{children:["Rôle",o.jsx("select",{value:M.role,onChange:G=>E(Q=>({...Q,role:G.target.value})),children:Object.entries(Kv).map(([G,Q])=>o.jsx("option",{value:G,children:Q},G))})]}),M.targetMode==="USERS"&&o.jsx("div",{className:"recipientPicker",children:m.map(G=>{var Q;return o.jsxs("label",{className:"recipientOption",children:[o.jsx("input",{type:"checkbox",checked:M.userIds.includes(G.id),onChange:()=>w(G.id)}),o.jsxs("span",{children:[o.jsx("strong",{children:G.fullName}),o.jsxs("small",{children:[Kv[G.role]||G.role,(Q=G.hotel)!=null&&Q.name?` - ${G.hotel.name}`:""]})]})]},G.id)})}),o.jsx("button",{className:"btn btnPrimary",disabled:S,children:S?"Envoi...":"Envoyer la notification"})]}),o.jsxs("section",{className:"notificationPanel",children:[o.jsxs("div",{className:"notificationTabs",children:[o.jsx("button",{type:"button",className:s==="inbox"?"active":"",onClick:()=>a("inbox"),children:"Réception"}),e&&o.jsx("button",{type:"button",className:s==="sent"?"active":"",onClick:()=>a("sent"),children:"Envoyés"}),o.jsx("input",{value:T,onChange:G=>N(G.target.value),placeholder:"Rechercher..."})]}),A&&o.jsx("p",{className:"notificationEmpty",children:"Chargement..."}),!A&&s==="inbox"&&o.jsx("div",{className:"notificationList",children:L.length===0?o.jsx("p",{className:"notificationEmpty",children:"Aucune notification reçue."}):L.map(G=>{var V,k,W,$;const Q=!((k=(V=G.recipients)==null?void 0:V[0])!=null&&k.readAt);return o.jsxs("article",{className:`notificationItem ${G.priority.toLowerCase()} ${Q?"unread":""}`,children:[o.jsxs("div",{className:"notificationItemTop",children:[o.jsx("span",{className:`priorityBadge ${G.priority.toLowerCase()}`,children:sf[G.priority]}),o.jsx("small",{children:Zv(G.createdAt)})]}),o.jsx("h3",{children:G.title}),o.jsx("p",{children:G.message}),o.jsxs("div",{className:"notificationMeta",children:[o.jsxs("span",{children:["De : ",((W=G.sender)==null?void 0:W.fullName)||"Système"]}),(($=G.hotel)==null?void 0:$.name)&&o.jsxs("span",{children:["Hôtel : ",G.hotel.name]}),G.category&&o.jsx("span",{children:G.category})]}),Q&&o.jsx("button",{type:"button",className:"markReadBtn",onClick:()=>H(G),children:"Marquer comme lu"})]},G.id)})}),!A&&s==="sent"&&e&&o.jsx("div",{className:"notificationList",children:ee.length===0?o.jsx("p",{className:"notificationEmpty",children:"Aucun message envoyé."}):ee.map(G=>{var Q;return o.jsxs("article",{className:`notificationItem ${G.priority.toLowerCase()}`,children:[o.jsxs("div",{className:"notificationItemTop",children:[o.jsx("span",{className:`priorityBadge ${G.priority.toLowerCase()}`,children:sf[G.priority]}),o.jsx("small",{children:Zv(G.createdAt)})]}),o.jsx("h3",{children:G.title}),o.jsx("p",{children:G.message}),o.jsxs("div",{className:"notificationMeta",children:[o.jsxs("span",{children:[G.recipients.length," destinataire",G.recipients.length!==1?"s":""]}),((Q=G.hotel)==null?void 0:Q.name)&&o.jsxs("span",{children:["Hôtel : ",G.hotel.name]})]})]},G.id)})})]})]})]})})}function IR(i){return i==="RECEPTIONIST"?lt.public.manualLogin:i==="ADMIN"?lt.public.adminMboa:i==="SUPPORT"||i==="HOTEL_IT"?lt.public.dashboard:lt.public.home}function In({children:i,allowedRoles:e}){const t=_p(),s=Bi();if(!t){const a=`${s.pathname}${s.search}`;return o.jsx(Qr,{to:`${lt.public.login}?redirect=${encodeURIComponent(a)}`,replace:!0})}return e!=null&&e.length&&!e.includes(t.role)?o.jsx(Qr,{to:IR(t.role),replace:!0}):i}const UR=()=>o.jsx(fM,{children:o.jsxs(GS,{children:[o.jsx(cn,{path:lt.public.login,element:o.jsx(CM,{})}),o.jsx(cn,{path:lt.public.mfa,element:o.jsx(AM,{})}),o.jsx(cn,{path:lt.public.home,element:o.jsx(In,{children:o.jsx(kM,{})})}),o.jsx(cn,{path:lt.public.dashboard,element:o.jsx(In,{allowedRoles:["SUPPORT","HOTEL_IT"],children:o.jsx(OE,{})})}),o.jsx(cn,{path:lt.public.networkMap,element:o.jsx(In,{allowedRoles:["SUPPORT","HOTEL_IT"],children:o.jsx(NR,{})})}),o.jsx(cn,{path:lt.public.devices,element:o.jsx(In,{allowedRoles:["ADMIN"],children:o.jsx(Qr,{to:lt.public.adminMboa,replace:!0})})}),o.jsx(cn,{path:lt.public.wifiCode,element:o.jsx(In,{allowedRoles:["SUPPORT","HOTEL_IT"],children:o.jsx(v0,{})})}),o.jsx(cn,{path:lt.public.loginByAddress,element:o.jsx(In,{allowedRoles:["SUPPORT"],children:o.jsx(jM,{})})}),o.jsx(cn,{path:lt.public.statusLogins,element:o.jsx(In,{allowedRoles:["SUPPORT","HOTEL_IT"],children:o.jsx(BM,{})})}),o.jsx(cn,{path:lt.public.manualLogin,element:o.jsx(In,{allowedRoles:["SUPPORT","RECEPTIONIST"],children:o.jsx(GM,{})})}),o.jsx(cn,{path:lt.public.websitesManager,element:o.jsx(In,{allowedRoles:["SUPPORT","HOTEL_IT"],children:o.jsx(VM,{})})}),o.jsx(cn,{path:lt.public.configCode,element:o.jsx(In,{allowedRoles:["SUPPORT"],children:o.jsx(WM,{})})}),o.jsx(cn,{path:lt.public.hotels,element:o.jsx(In,{allowedRoles:["ADMIN"],children:o.jsx(Qr,{to:lt.public.adminMboa,replace:!0})})}),o.jsx(cn,{path:lt.public.rooms,element:o.jsx(In,{allowedRoles:["ADMIN"],children:o.jsx(Qr,{to:lt.public.adminMboa,replace:!0})})}),o.jsx(cn,{path:lt.public.configWifi,element:o.jsx(In,{allowedRoles:["ADMIN"],children:o.jsx(Qr,{to:lt.public.adminMboa,replace:!0})})}),o.jsx(cn,{path:lt.public.adminMboa,element:o.jsx(In,{allowedRoles:["ADMIN"],children:o.jsx(Yv,{})})}),o.jsx(cn,{path:lt.public.users,element:o.jsx(In,{allowedRoles:["ADMIN"],children:o.jsx(Yv,{})})}),o.jsx(cn,{path:lt.public.notifications,element:o.jsx(In,{allowedRoles:["SUPPORT","HOTEL_IT","RECEPTIONIST"],children:o.jsx(DR,{})})}),o.jsx(cn,{path:"/",element:o.jsx(Qr,{to:lt.public.login,replace:!0})}),o.jsx(cn,{path:"*",element:o.jsx(Qr,{to:lt.public.login,replace:!0})})]})});function FR(){return o.jsx(UR,{})}Xy.createRoot(document.getElementById("root")).render(o.jsx(jy.StrictMode,{children:o.jsx(FR,{})}));
