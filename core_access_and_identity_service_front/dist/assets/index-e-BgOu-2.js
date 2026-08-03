var cy=Object.defineProperty;var uy=(i,e,t)=>e in i?cy(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Bd=(i,e,t)=>uy(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function C0(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var zd={exports:{}},To={},jd={exports:{}},Tt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wg;function dy(){if(Wg)return Tt;Wg=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function v(B){return B===null||typeof B!="object"?null:(B=x&&B[x]||B["@@iterator"],typeof B=="function"?B:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,R={};function y(B,te,Pe){this.props=B,this.context=te,this.refs=R,this.updater=Pe||S}y.prototype.isReactComponent={},y.prototype.setState=function(B,te){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,te,"setState")},y.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function M(){}M.prototype=y.prototype;function b(B,te,Pe){this.props=B,this.context=te,this.refs=R,this.updater=Pe||S}var E=b.prototype=new M;E.constructor=b,T(E,y.prototype),E.isPureReactComponent=!0;var w=Array.isArray,D=Object.prototype.hasOwnProperty,L={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function A(B,te,Pe){var Fe,he={},ne=null,me=null;if(te!=null)for(Fe in te.ref!==void 0&&(me=te.ref),te.key!==void 0&&(ne=""+te.key),te)D.call(te,Fe)&&!O.hasOwnProperty(Fe)&&(he[Fe]=te[Fe]);var fe=arguments.length-2;if(fe===1)he.children=Pe;else if(1<fe){for(var Ae=Array(fe),Xe=0;Xe<fe;Xe++)Ae[Xe]=arguments[Xe+2];he.children=Ae}if(B&&B.defaultProps)for(Fe in fe=B.defaultProps,fe)he[Fe]===void 0&&(he[Fe]=fe[Fe]);return{$$typeof:i,type:B,key:ne,ref:me,props:he,_owner:L.current}}function U(B,te){return{$$typeof:i,type:B.type,key:te,ref:B.ref,props:B.props,_owner:B._owner}}function q(B){return typeof B=="object"&&B!==null&&B.$$typeof===i}function j(B){var te={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(Pe){return te[Pe]})}var Z=/\/+/g;function H(B,te){return typeof B=="object"&&B!==null&&B.key!=null?j(""+B.key):te.toString(36)}function Q(B,te,Pe,Fe,he){var ne=typeof B;(ne==="undefined"||ne==="boolean")&&(B=null);var me=!1;if(B===null)me=!0;else switch(ne){case"string":case"number":me=!0;break;case"object":switch(B.$$typeof){case i:case e:me=!0}}if(me)return me=B,he=he(me),B=Fe===""?"."+H(me,0):Fe,w(he)?(Pe="",B!=null&&(Pe=B.replace(Z,"$&/")+"/"),Q(he,te,Pe,"",function(Xe){return Xe})):he!=null&&(q(he)&&(he=U(he,Pe+(!he.key||me&&me.key===he.key?"":(""+he.key).replace(Z,"$&/")+"/")+B)),te.push(he)),1;if(me=0,Fe=Fe===""?".":Fe+":",w(B))for(var fe=0;fe<B.length;fe++){ne=B[fe];var Ae=Fe+H(ne,fe);me+=Q(ne,te,Pe,Ae,he)}else if(Ae=v(B),typeof Ae=="function")for(B=Ae.call(B),fe=0;!(ne=B.next()).done;)ne=ne.value,Ae=Fe+H(ne,fe++),me+=Q(ne,te,Pe,Ae,he);else if(ne==="object")throw te=String(B),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.");return me}function V(B,te,Pe){if(B==null)return B;var Fe=[],he=0;return Q(B,Fe,"","",function(ne){return te.call(Pe,ne,he++)}),Fe}function F(B){if(B._status===-1){var te=B._result;te=te(),te.then(function(Pe){(B._status===0||B._status===-1)&&(B._status=1,B._result=Pe)},function(Pe){(B._status===0||B._status===-1)&&(B._status=2,B._result=Pe)}),B._status===-1&&(B._status=0,B._result=te)}if(B._status===1)return B._result.default;throw B._result}var G={current:null},X={transition:null},oe={ReactCurrentDispatcher:G,ReactCurrentBatchConfig:X,ReactCurrentOwner:L};function re(){throw Error("act(...) is not supported in production builds of React.")}return Tt.Children={map:V,forEach:function(B,te,Pe){V(B,function(){te.apply(this,arguments)},Pe)},count:function(B){var te=0;return V(B,function(){te++}),te},toArray:function(B){return V(B,function(te){return te})||[]},only:function(B){if(!q(B))throw Error("React.Children.only expected to receive a single React element child.");return B}},Tt.Component=y,Tt.Fragment=t,Tt.Profiler=a,Tt.PureComponent=b,Tt.StrictMode=s,Tt.Suspense=f,Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oe,Tt.act=re,Tt.cloneElement=function(B,te,Pe){if(B==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+B+".");var Fe=T({},B.props),he=B.key,ne=B.ref,me=B._owner;if(te!=null){if(te.ref!==void 0&&(ne=te.ref,me=L.current),te.key!==void 0&&(he=""+te.key),B.type&&B.type.defaultProps)var fe=B.type.defaultProps;for(Ae in te)D.call(te,Ae)&&!O.hasOwnProperty(Ae)&&(Fe[Ae]=te[Ae]===void 0&&fe!==void 0?fe[Ae]:te[Ae])}var Ae=arguments.length-2;if(Ae===1)Fe.children=Pe;else if(1<Ae){fe=Array(Ae);for(var Xe=0;Xe<Ae;Xe++)fe[Xe]=arguments[Xe+2];Fe.children=fe}return{$$typeof:i,type:B.type,key:he,ref:ne,props:Fe,_owner:me}},Tt.createContext=function(B){return B={$$typeof:u,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},B.Provider={$$typeof:l,_context:B},B.Consumer=B},Tt.createElement=A,Tt.createFactory=function(B){var te=A.bind(null,B);return te.type=B,te},Tt.createRef=function(){return{current:null}},Tt.forwardRef=function(B){return{$$typeof:h,render:B}},Tt.isValidElement=q,Tt.lazy=function(B){return{$$typeof:g,_payload:{_status:-1,_result:B},_init:F}},Tt.memo=function(B,te){return{$$typeof:p,type:B,compare:te===void 0?null:te}},Tt.startTransition=function(B){var te=X.transition;X.transition={};try{B()}finally{X.transition=te}},Tt.unstable_act=re,Tt.useCallback=function(B,te){return G.current.useCallback(B,te)},Tt.useContext=function(B){return G.current.useContext(B)},Tt.useDebugValue=function(){},Tt.useDeferredValue=function(B){return G.current.useDeferredValue(B)},Tt.useEffect=function(B,te){return G.current.useEffect(B,te)},Tt.useId=function(){return G.current.useId()},Tt.useImperativeHandle=function(B,te,Pe){return G.current.useImperativeHandle(B,te,Pe)},Tt.useInsertionEffect=function(B,te){return G.current.useInsertionEffect(B,te)},Tt.useLayoutEffect=function(B,te){return G.current.useLayoutEffect(B,te)},Tt.useMemo=function(B,te){return G.current.useMemo(B,te)},Tt.useReducer=function(B,te,Pe){return G.current.useReducer(B,te,Pe)},Tt.useRef=function(B){return G.current.useRef(B)},Tt.useState=function(B){return G.current.useState(B)},Tt.useSyncExternalStore=function(B,te,Pe){return G.current.useSyncExternalStore(B,te,Pe)},Tt.useTransition=function(){return G.current.useTransition()},Tt.version="18.3.1",Tt}var Xg;function zf(){return Xg||(Xg=1,jd.exports=dy()),jd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $g;function hy(){if($g)return To;$g=1;var i=zf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(h,f,p){var g,x={},v=null,S=null;p!==void 0&&(v=""+p),f.key!==void 0&&(v=""+f.key),f.ref!==void 0&&(S=f.ref);for(g in f)s.call(f,g)&&!l.hasOwnProperty(g)&&(x[g]=f[g]);if(h&&h.defaultProps)for(g in f=h.defaultProps,f)x[g]===void 0&&(x[g]=f[g]);return{$$typeof:e,type:h,key:v,ref:S,props:x,_owner:a.current}}return To.Fragment=t,To.jsx=u,To.jsxs=u,To}var qg;function fy(){return qg||(qg=1,zd.exports=hy()),zd.exports}var c=fy(),k=zf();const py=C0(k);var Ql={},Hd={exports:{}},Zn={},Gd={exports:{}},Vd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yg;function my(){return Yg||(Yg=1,(function(i){function e(X,oe){var re=X.length;X.push(oe);e:for(;0<re;){var B=re-1>>>1,te=X[B];if(0<a(te,oe))X[B]=oe,X[re]=te,re=B;else break e}}function t(X){return X.length===0?null:X[0]}function s(X){if(X.length===0)return null;var oe=X[0],re=X.pop();if(re!==oe){X[0]=re;e:for(var B=0,te=X.length,Pe=te>>>1;B<Pe;){var Fe=2*(B+1)-1,he=X[Fe],ne=Fe+1,me=X[ne];if(0>a(he,re))ne<te&&0>a(me,he)?(X[B]=me,X[ne]=re,B=ne):(X[B]=he,X[Fe]=re,B=Fe);else if(ne<te&&0>a(me,re))X[B]=me,X[ne]=re,B=ne;else break e}}return oe}function a(X,oe){var re=X.sortIndex-oe.sortIndex;return re!==0?re:X.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;i.unstable_now=function(){return l.now()}}else{var u=Date,h=u.now();i.unstable_now=function(){return u.now()-h}}var f=[],p=[],g=1,x=null,v=3,S=!1,T=!1,R=!1,y=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(X){for(var oe=t(p);oe!==null;){if(oe.callback===null)s(p);else if(oe.startTime<=X)s(p),oe.sortIndex=oe.expirationTime,e(f,oe);else break;oe=t(p)}}function w(X){if(R=!1,E(X),!T)if(t(f)!==null)T=!0,F(D);else{var oe=t(p);oe!==null&&G(w,oe.startTime-X)}}function D(X,oe){T=!1,R&&(R=!1,M(A),A=-1),S=!0;var re=v;try{for(E(oe),x=t(f);x!==null&&(!(x.expirationTime>oe)||X&&!j());){var B=x.callback;if(typeof B=="function"){x.callback=null,v=x.priorityLevel;var te=B(x.expirationTime<=oe);oe=i.unstable_now(),typeof te=="function"?x.callback=te:x===t(f)&&s(f),E(oe)}else s(f);x=t(f)}if(x!==null)var Pe=!0;else{var Fe=t(p);Fe!==null&&G(w,Fe.startTime-oe),Pe=!1}return Pe}finally{x=null,v=re,S=!1}}var L=!1,O=null,A=-1,U=5,q=-1;function j(){return!(i.unstable_now()-q<U)}function Z(){if(O!==null){var X=i.unstable_now();q=X;var oe=!0;try{oe=O(!0,X)}finally{oe?H():(L=!1,O=null)}}else L=!1}var H;if(typeof b=="function")H=function(){b(Z)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,V=Q.port2;Q.port1.onmessage=Z,H=function(){V.postMessage(null)}}else H=function(){y(Z,0)};function F(X){O=X,L||(L=!0,H())}function G(X,oe){A=y(function(){X(i.unstable_now())},oe)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(X){X.callback=null},i.unstable_continueExecution=function(){T||S||(T=!0,F(D))},i.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<X?Math.floor(1e3/X):5},i.unstable_getCurrentPriorityLevel=function(){return v},i.unstable_getFirstCallbackNode=function(){return t(f)},i.unstable_next=function(X){switch(v){case 1:case 2:case 3:var oe=3;break;default:oe=v}var re=v;v=oe;try{return X()}finally{v=re}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(X,oe){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var re=v;v=X;try{return oe()}finally{v=re}},i.unstable_scheduleCallback=function(X,oe,re){var B=i.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?B+re:B):re=B,X){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=re+te,X={id:g++,callback:oe,priorityLevel:X,startTime:re,expirationTime:te,sortIndex:-1},re>B?(X.sortIndex=re,e(p,X),t(f)===null&&X===t(p)&&(R?(M(A),A=-1):R=!0,G(w,re-B))):(X.sortIndex=te,e(f,X),T||S||(T=!0,F(D))),X},i.unstable_shouldYield=j,i.unstable_wrapCallback=function(X){var oe=v;return function(){var re=v;v=oe;try{return X.apply(this,arguments)}finally{v=re}}}})(Vd)),Vd}var Kg;function gy(){return Kg||(Kg=1,Gd.exports=my()),Gd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zg;function vy(){if(Zg)return Zn;Zg=1;var i=zf(),e=gy();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function l(n,r){u(n,r),u(n+"Capture",r)}function u(n,r){for(a[n]=r,n=0;n<r.length;n++)s.add(r[n])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},x={};function v(n){return f.call(x,n)?!0:f.call(g,n)?!1:p.test(n)?x[n]=!0:(g[n]=!0,!1)}function S(n,r,o,d){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return d?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function T(n,r,o,d){if(r===null||typeof r>"u"||S(n,r,o,d))return!0;if(d)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function R(n,r,o,d,m,_,N){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=d,this.attributeNamespace=m,this.mustUseProperty=o,this.propertyName=n,this.type=r,this.sanitizeURL=_,this.removeEmptyString=N}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new R(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];y[r]=new R(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new R(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new R(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new R(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new R(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new R(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new R(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new R(n,5,!1,n.toLowerCase(),null,!1,!1)});var M=/[\-:]([a-z])/g;function b(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(M,b);y[r]=new R(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(M,b);y[r]=new R(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(M,b);y[r]=new R(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new R(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new R(n,1,!1,n.toLowerCase(),null,!0,!0)});function E(n,r,o,d){var m=y.hasOwnProperty(r)?y[r]:null;(m!==null?m.type!==0:d||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(T(r,o,m,d)&&(o=null),d||m===null?v(r)&&(o===null?n.removeAttribute(r):n.setAttribute(r,""+o)):m.mustUseProperty?n[m.propertyName]=o===null?m.type===3?!1:"":o:(r=m.attributeName,d=m.attributeNamespace,o===null?n.removeAttribute(r):(m=m.type,o=m===3||m===4&&o===!0?"":""+o,d?n.setAttributeNS(d,r,o):n.setAttribute(r,o))))}var w=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,D=Symbol.for("react.element"),L=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),q=Symbol.for("react.provider"),j=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),Q=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),G=Symbol.for("react.offscreen"),X=Symbol.iterator;function oe(n){return n===null||typeof n!="object"?null:(n=X&&n[X]||n["@@iterator"],typeof n=="function"?n:null)}var re=Object.assign,B;function te(n){if(B===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);B=r&&r[1]||""}return`
`+B+n}var Pe=!1;function Fe(n,r){if(!n||Pe)return"";Pe=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(de){var d=de}Reflect.construct(n,[],r)}else{try{r.call()}catch(de){d=de}n.call(r.prototype)}else{try{throw Error()}catch(de){d=de}n()}}catch(de){if(de&&d&&typeof de.stack=="string"){for(var m=de.stack.split(`
`),_=d.stack.split(`
`),N=m.length-1,z=_.length-1;1<=N&&0<=z&&m[N]!==_[z];)z--;for(;1<=N&&0<=z;N--,z--)if(m[N]!==_[z]){if(N!==1||z!==1)do if(N--,z--,0>z||m[N]!==_[z]){var W=`
`+m[N].replace(" at new "," at ");return n.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",n.displayName)),W}while(1<=N&&0<=z);break}}}finally{Pe=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?te(n):""}function he(n){switch(n.tag){case 5:return te(n.type);case 16:return te("Lazy");case 13:return te("Suspense");case 19:return te("SuspenseList");case 0:case 2:case 15:return n=Fe(n.type,!1),n;case 11:return n=Fe(n.type.render,!1),n;case 1:return n=Fe(n.type,!0),n;default:return""}}function ne(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case L:return"Portal";case U:return"Profiler";case A:return"StrictMode";case H:return"Suspense";case Q:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case j:return(n.displayName||"Context")+".Consumer";case q:return(n._context.displayName||"Context")+".Provider";case Z:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case V:return r=n.displayName||null,r!==null?r:ne(n.type)||"Memo";case F:r=n._payload,n=n._init;try{return ne(n(r))}catch{}}return null}function me(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ne(r);case 8:return r===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function fe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ae(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Xe(n){var r=Ae(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),d=""+n[r];if(!n.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var m=o.get,_=o.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return m.call(this)},set:function(N){d=""+N,_.call(this,N)}}),Object.defineProperty(n,r,{enumerable:o.enumerable}),{getValue:function(){return d},setValue:function(N){d=""+N},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function nt(n){n._valueTracker||(n._valueTracker=Xe(n))}function et(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var o=r.getValue(),d="";return n&&(d=Ae(n)?n.checked?"true":"false":n.value),n=d,n!==o?(r.setValue(n),!0):!1}function Ke(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ft(n,r){var o=r.checked;return re({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function wt(n,r){var o=r.defaultValue==null?"":r.defaultValue,d=r.checked!=null?r.checked:r.defaultChecked;o=fe(r.value!=null?r.value:o),n._wrapperState={initialChecked:d,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function rt(n,r){r=r.checked,r!=null&&E(n,"checked",r,!1)}function Lt(n,r){rt(n,r);var o=fe(r.value),d=r.type;if(o!=null)d==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(d==="submit"||d==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?rn(n,r.type,o):r.hasOwnProperty("defaultValue")&&rn(n,r.type,fe(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Ct(n,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var d=r.type;if(!(d!=="submit"&&d!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,o||r===n.value||(n.value=r),n.defaultValue=r}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function rn(n,r,o){(r!=="number"||Ke(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var Y=Array.isArray;function Gt(n,r,o,d){if(n=n.options,r){r={};for(var m=0;m<o.length;m++)r["$"+o[m]]=!0;for(o=0;o<n.length;o++)m=r.hasOwnProperty("$"+n[o].value),n[o].selected!==m&&(n[o].selected=m),m&&d&&(n[o].defaultSelected=!0)}else{for(o=""+fe(o),r=null,m=0;m<n.length;m++){if(n[m].value===o){n[m].selected=!0,d&&(n[m].defaultSelected=!0);return}r!==null||n[m].disabled||(r=n[m])}r!==null&&(r.selected=!0)}}function _t(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Ot(n,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(t(92));if(Y(o)){if(1<o.length)throw Error(t(93));o=o[0]}r=o}r==null&&(r=""),o=r}n._wrapperState={initialValue:fe(o)}}function Ue(n,r){var o=fe(r.value),d=fe(r.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),r.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),d!=null&&(n.defaultValue=""+d)}function Xt(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function I(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function C(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?I(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ie,ve=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,d,m){MSApp.execUnsafeLocalFunction(function(){return n(r,o,d,m)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(ie=ie||document.createElement("div"),ie.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=ie.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function _e(n,r){if(r){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=r;return}}n.textContent=r}var Te={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ie=["Webkit","ms","Moz","O"];Object.keys(Te).forEach(function(n){Ie.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Te[r]=Te[n]})});function pe(n,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||Te.hasOwnProperty(n)&&Te[n]?(""+r).trim():r+"px"}function xe(n,r){n=n.style;for(var o in r)if(r.hasOwnProperty(o)){var d=o.indexOf("--")===0,m=pe(o,r[o],d);o==="float"&&(o="cssFloat"),d?n.setProperty(o,m):n[o]=m}}var ke=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ze(n,r){if(r){if(ke[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Re(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var we=null;function ct(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var dt=null,St=null,$=null;function Ce(n){if(n=lo(n)){if(typeof dt!="function")throw Error(t(280));var r=n.stateNode;r&&(r=fl(r),dt(n.stateNode,n.type,r))}}function ge(n){St?$?$.push(n):$=[n]:St=n}function Be(){if(St){var n=St,r=$;if($=St=null,Ce(n),r)for(n=0;n<r.length;n++)Ce(r[n])}}function Le(n,r){return n(r)}function ye(){}var $e=!1;function ht(n,r,o){if($e)return n(r,o);$e=!0;try{return Le(n,r,o)}finally{$e=!1,(St!==null||$!==null)&&(ye(),Be())}}function Ht(n,r){var o=n.stateNode;if(o===null)return null;var d=fl(o);if(d===null)return null;o=d[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(n=n.type,d=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!d;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,r,typeof o));return o}var Dt=!1;if(h)try{var kn={};Object.defineProperty(kn,"passive",{get:function(){Dt=!0}}),window.addEventListener("test",kn,kn),window.removeEventListener("test",kn,kn)}catch{Dt=!1}function di(n,r,o,d,m,_,N,z,W){var de=Array.prototype.slice.call(arguments,3);try{r.apply(o,de)}catch(Me){this.onError(Me)}}var nr=!1,Ls=null,rs=!1,Ds=null,ir={onError:function(n){nr=!0,Ls=n}};function ja(n,r,o,d,m,_,N,z,W){nr=!1,Ls=null,di.apply(ir,arguments)}function Ko(n,r,o,d,m,_,N,z,W){if(ja.apply(this,arguments),nr){if(nr){var de=Ls;nr=!1,Ls=null}else throw Error(t(198));rs||(rs=!0,Ds=de)}}function Bi(n){var r=n,o=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(o=r.return),n=r.return;while(n)}return r.tag===3?o:null}function ss(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Ha(n){if(Bi(n)!==n)throw Error(t(188))}function Is(n){var r=n.alternate;if(!r){if(r=Bi(n),r===null)throw Error(t(188));return r!==n?null:n}for(var o=n,d=r;;){var m=o.return;if(m===null)break;var _=m.alternate;if(_===null){if(d=m.return,d!==null){o=d;continue}break}if(m.child===_.child){for(_=m.child;_;){if(_===o)return Ha(m),n;if(_===d)return Ha(m),r;_=_.sibling}throw Error(t(188))}if(o.return!==d.return)o=m,d=_;else{for(var N=!1,z=m.child;z;){if(z===o){N=!0,o=m,d=_;break}if(z===d){N=!0,d=m,o=_;break}z=z.sibling}if(!N){for(z=_.child;z;){if(z===o){N=!0,o=_,d=m;break}if(z===d){N=!0,d=_,o=m;break}z=z.sibling}if(!N)throw Error(t(189))}}if(o.alternate!==d)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:r}function Ga(n){return n=Is(n),n!==null?Va(n):null}function Va(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Va(n);if(r!==null)return r;n=n.sibling}return null}var Zo=e.unstable_scheduleCallback,Qo=e.unstable_cancelCallback,lu=e.unstable_shouldYield,cu=e.unstable_requestPaint,Jt=e.unstable_now,uu=e.unstable_getCurrentPriorityLevel,Wa=e.unstable_ImmediatePriority,P=e.unstable_UserBlockingPriority,ee=e.unstable_NormalPriority,ue=e.unstable_LowPriority,le=e.unstable_IdlePriority,ae=null,De=null;function Ge(n){if(De&&typeof De.onCommitFiberRoot=="function")try{De.onCommitFiberRoot(ae,n,void 0,(n.current.flags&128)===128)}catch{}}var Ne=Math.clz32?Math.clz32:pt,qe=Math.log,tt=Math.LN2;function pt(n){return n>>>=0,n===0?32:31-(qe(n)/tt|0)|0}var mt=64,Ze=4194304;function Rt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Vt(n,r){var o=n.pendingLanes;if(o===0)return 0;var d=0,m=n.suspendedLanes,_=n.pingedLanes,N=o&268435455;if(N!==0){var z=N&~m;z!==0?d=Rt(z):(_&=N,_!==0&&(d=Rt(_)))}else N=o&~m,N!==0?d=Rt(N):_!==0&&(d=Rt(_));if(d===0)return 0;if(r!==0&&r!==d&&(r&m)===0&&(m=d&-d,_=r&-r,m>=_||m===16&&(_&4194240)!==0))return r;if((d&4)!==0&&(d|=o&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=d;0<r;)o=31-Ne(r),m=1<<o,d|=n[o],r&=~m;return d}function Kt(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kt(n,r){for(var o=n.suspendedLanes,d=n.pingedLanes,m=n.expirationTimes,_=n.pendingLanes;0<_;){var N=31-Ne(_),z=1<<N,W=m[N];W===-1?((z&o)===0||(z&d)!==0)&&(m[N]=Kt(z,r)):W<=r&&(n.expiredLanes|=z),_&=~z}}function un(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function je(){var n=mt;return mt<<=1,(mt&4194240)===0&&(mt=64),n}function En(n){for(var r=[],o=0;31>o;o++)r.push(n);return r}function Mt(n,r,o){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Ne(r),n[r]=o}function Vn(n,r){var o=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var d=n.eventTimes;for(n=n.expirationTimes;0<o;){var m=31-Ne(o),_=1<<m;r[m]=0,d[m]=-1,n[m]=-1,o&=~_}}function Wn(n,r){var o=n.entangledLanes|=r;for(n=n.entanglements;o;){var d=31-Ne(o),m=1<<d;m&r|n[d]&r&&(n[d]|=r),o&=~m}}var Et=0;function rr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Ut,$t,Ti,Bt,wi,zi=!1,as=[],Tr=null,wr=null,br=null,Xa=new Map,$a=new Map,Cr=[],Px="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ap(n,r){switch(n){case"focusin":case"focusout":Tr=null;break;case"dragenter":case"dragleave":wr=null;break;case"mouseover":case"mouseout":br=null;break;case"pointerover":case"pointerout":Xa.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":$a.delete(r.pointerId)}}function qa(n,r,o,d,m,_){return n===null||n.nativeEvent!==_?(n={blockedOn:r,domEventName:o,eventSystemFlags:d,nativeEvent:_,targetContainers:[m]},r!==null&&(r=lo(r),r!==null&&$t(r)),n):(n.eventSystemFlags|=d,r=n.targetContainers,m!==null&&r.indexOf(m)===-1&&r.push(m),n)}function Lx(n,r,o,d,m){switch(r){case"focusin":return Tr=qa(Tr,n,r,o,d,m),!0;case"dragenter":return wr=qa(wr,n,r,o,d,m),!0;case"mouseover":return br=qa(br,n,r,o,d,m),!0;case"pointerover":var _=m.pointerId;return Xa.set(_,qa(Xa.get(_)||null,n,r,o,d,m)),!0;case"gotpointercapture":return _=m.pointerId,$a.set(_,qa($a.get(_)||null,n,r,o,d,m)),!0}return!1}function Rp(n){var r=os(n.target);if(r!==null){var o=Bi(r);if(o!==null){if(r=o.tag,r===13){if(r=ss(o),r!==null){n.blockedOn=r,wi(n.priority,function(){Ti(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Jo(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var o=hu(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var d=new o.constructor(o.type,o);we=d,o.target.dispatchEvent(d),we=null}else return r=lo(o),r!==null&&$t(r),n.blockedOn=o,!1;r.shift()}return!0}function Np(n,r,o){Jo(n)&&o.delete(r)}function Dx(){zi=!1,Tr!==null&&Jo(Tr)&&(Tr=null),wr!==null&&Jo(wr)&&(wr=null),br!==null&&Jo(br)&&(br=null),Xa.forEach(Np),$a.forEach(Np)}function Ya(n,r){n.blockedOn===r&&(n.blockedOn=null,zi||(zi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Dx)))}function Ka(n){function r(m){return Ya(m,n)}if(0<as.length){Ya(as[0],n);for(var o=1;o<as.length;o++){var d=as[o];d.blockedOn===n&&(d.blockedOn=null)}}for(Tr!==null&&Ya(Tr,n),wr!==null&&Ya(wr,n),br!==null&&Ya(br,n),Xa.forEach(r),$a.forEach(r),o=0;o<Cr.length;o++)d=Cr[o],d.blockedOn===n&&(d.blockedOn=null);for(;0<Cr.length&&(o=Cr[0],o.blockedOn===null);)Rp(o),o.blockedOn===null&&Cr.shift()}var Us=w.ReactCurrentBatchConfig,el=!0;function Ix(n,r,o,d){var m=Et,_=Us.transition;Us.transition=null;try{Et=1,du(n,r,o,d)}finally{Et=m,Us.transition=_}}function Ux(n,r,o,d){var m=Et,_=Us.transition;Us.transition=null;try{Et=4,du(n,r,o,d)}finally{Et=m,Us.transition=_}}function du(n,r,o,d){if(el){var m=hu(n,r,o,d);if(m===null)Ru(n,r,d,tl,o),Ap(n,d);else if(Lx(m,n,r,o,d))d.stopPropagation();else if(Ap(n,d),r&4&&-1<Px.indexOf(n)){for(;m!==null;){var _=lo(m);if(_!==null&&Ut(_),_=hu(n,r,o,d),_===null&&Ru(n,r,d,tl,o),_===m)break;m=_}m!==null&&d.stopPropagation()}else Ru(n,r,d,null,o)}}var tl=null;function hu(n,r,o,d){if(tl=null,n=ct(d),n=os(n),n!==null)if(r=Bi(n),r===null)n=null;else if(o=r.tag,o===13){if(n=ss(r),n!==null)return n;n=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return tl=n,null}function Pp(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(uu()){case Wa:return 1;case P:return 4;case ee:case ue:return 16;case le:return 536870912;default:return 16}default:return 16}}var Ar=null,fu=null,nl=null;function Lp(){if(nl)return nl;var n,r=fu,o=r.length,d,m="value"in Ar?Ar.value:Ar.textContent,_=m.length;for(n=0;n<o&&r[n]===m[n];n++);var N=o-n;for(d=1;d<=N&&r[o-d]===m[_-d];d++);return nl=m.slice(n,1<d?1-d:void 0)}function il(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function rl(){return!0}function Dp(){return!1}function ti(n){function r(o,d,m,_,N){this._reactName=o,this._targetInst=m,this.type=d,this.nativeEvent=_,this.target=N,this.currentTarget=null;for(var z in n)n.hasOwnProperty(z)&&(o=n[z],this[z]=o?o(_):_[z]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?rl:Dp,this.isPropagationStopped=Dp,this}return re(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),r}var Fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pu=ti(Fs),Za=re({},Fs,{view:0,detail:0}),Fx=ti(Za),mu,gu,Qa,sl=re({},Za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Qa&&(Qa&&n.type==="mousemove"?(mu=n.screenX-Qa.screenX,gu=n.screenY-Qa.screenY):gu=mu=0,Qa=n),mu)},movementY:function(n){return"movementY"in n?n.movementY:gu}}),Ip=ti(sl),Ox=re({},sl,{dataTransfer:0}),kx=ti(Ox),Bx=re({},Za,{relatedTarget:0}),vu=ti(Bx),zx=re({},Fs,{animationName:0,elapsedTime:0,pseudoElement:0}),jx=ti(zx),Hx=re({},Fs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Gx=ti(Hx),Vx=re({},Fs,{data:0}),Up=ti(Vx),Wx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$x={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qx(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=$x[n])?!!r[n]:!1}function xu(){return qx}var Yx=re({},Za,{key:function(n){if(n.key){var r=Wx[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=il(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Xx[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xu,charCode:function(n){return n.type==="keypress"?il(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?il(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Kx=ti(Yx),Zx=re({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fp=ti(Zx),Qx=re({},Za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xu}),Jx=ti(Qx),e_=re({},Fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),t_=ti(e_),n_=re({},sl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),i_=ti(n_),r_=[9,13,27,32],_u=h&&"CompositionEvent"in window,Ja=null;h&&"documentMode"in document&&(Ja=document.documentMode);var s_=h&&"TextEvent"in window&&!Ja,Op=h&&(!_u||Ja&&8<Ja&&11>=Ja),kp=" ",Bp=!1;function zp(n,r){switch(n){case"keyup":return r_.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Os=!1;function a_(n,r){switch(n){case"compositionend":return jp(r);case"keypress":return r.which!==32?null:(Bp=!0,kp);case"textInput":return n=r.data,n===kp&&Bp?null:n;default:return null}}function o_(n,r){if(Os)return n==="compositionend"||!_u&&zp(n,r)?(n=Lp(),nl=fu=Ar=null,Os=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Op&&r.locale!=="ko"?null:r.data;default:return null}}var l_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hp(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!l_[n.type]:r==="textarea"}function Gp(n,r,o,d){ge(d),r=ul(r,"onChange"),0<r.length&&(o=new pu("onChange","change",null,o,d),n.push({event:o,listeners:r}))}var eo=null,to=null;function c_(n){om(n,0)}function al(n){var r=Hs(n);if(et(r))return n}function u_(n,r){if(n==="change")return r}var Vp=!1;if(h){var yu;if(h){var Su="oninput"in document;if(!Su){var Wp=document.createElement("div");Wp.setAttribute("oninput","return;"),Su=typeof Wp.oninput=="function"}yu=Su}else yu=!1;Vp=yu&&(!document.documentMode||9<document.documentMode)}function Xp(){eo&&(eo.detachEvent("onpropertychange",$p),to=eo=null)}function $p(n){if(n.propertyName==="value"&&al(to)){var r=[];Gp(r,to,n,ct(n)),ht(c_,r)}}function d_(n,r,o){n==="focusin"?(Xp(),eo=r,to=o,eo.attachEvent("onpropertychange",$p)):n==="focusout"&&Xp()}function h_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return al(to)}function f_(n,r){if(n==="click")return al(r)}function p_(n,r){if(n==="input"||n==="change")return al(r)}function m_(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var bi=typeof Object.is=="function"?Object.is:m_;function no(n,r){if(bi(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var o=Object.keys(n),d=Object.keys(r);if(o.length!==d.length)return!1;for(d=0;d<o.length;d++){var m=o[d];if(!f.call(r,m)||!bi(n[m],r[m]))return!1}return!0}function qp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Yp(n,r){var o=qp(n);n=0;for(var d;o;){if(o.nodeType===3){if(d=n+o.textContent.length,n<=r&&d>=r)return{node:o,offset:r-n};n=d}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=qp(o)}}function Kp(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Kp(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Zp(){for(var n=window,r=Ke();r instanceof n.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)n=r.contentWindow;else break;r=Ke(n.document)}return r}function Mu(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function g_(n){var r=Zp(),o=n.focusedElem,d=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&Kp(o.ownerDocument.documentElement,o)){if(d!==null&&Mu(o)){if(r=d.start,n=d.end,n===void 0&&(n=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(n,o.value.length);else if(n=(r=o.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var m=o.textContent.length,_=Math.min(d.start,m);d=d.end===void 0?_:Math.min(d.end,m),!n.extend&&_>d&&(m=d,d=_,_=m),m=Yp(o,_);var N=Yp(o,d);m&&N&&(n.rangeCount!==1||n.anchorNode!==m.node||n.anchorOffset!==m.offset||n.focusNode!==N.node||n.focusOffset!==N.offset)&&(r=r.createRange(),r.setStart(m.node,m.offset),n.removeAllRanges(),_>d?(n.addRange(r),n.extend(N.node,N.offset)):(r.setEnd(N.node,N.offset),n.addRange(r)))}}for(r=[],n=o;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)n=r[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var v_=h&&"documentMode"in document&&11>=document.documentMode,ks=null,Eu=null,io=null,Tu=!1;function Qp(n,r,o){var d=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Tu||ks==null||ks!==Ke(d)||(d=ks,"selectionStart"in d&&Mu(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),io&&no(io,d)||(io=d,d=ul(Eu,"onSelect"),0<d.length&&(r=new pu("onSelect","select",null,r,o),n.push({event:r,listeners:d}),r.target=ks)))}function ol(n,r){var o={};return o[n.toLowerCase()]=r.toLowerCase(),o["Webkit"+n]="webkit"+r,o["Moz"+n]="moz"+r,o}var Bs={animationend:ol("Animation","AnimationEnd"),animationiteration:ol("Animation","AnimationIteration"),animationstart:ol("Animation","AnimationStart"),transitionend:ol("Transition","TransitionEnd")},wu={},Jp={};h&&(Jp=document.createElement("div").style,"AnimationEvent"in window||(delete Bs.animationend.animation,delete Bs.animationiteration.animation,delete Bs.animationstart.animation),"TransitionEvent"in window||delete Bs.transitionend.transition);function ll(n){if(wu[n])return wu[n];if(!Bs[n])return n;var r=Bs[n],o;for(o in r)if(r.hasOwnProperty(o)&&o in Jp)return wu[n]=r[o];return n}var em=ll("animationend"),tm=ll("animationiteration"),nm=ll("animationstart"),im=ll("transitionend"),rm=new Map,sm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rr(n,r){rm.set(n,r),l(r,[n])}for(var bu=0;bu<sm.length;bu++){var Cu=sm[bu],x_=Cu.toLowerCase(),__=Cu[0].toUpperCase()+Cu.slice(1);Rr(x_,"on"+__)}Rr(em,"onAnimationEnd"),Rr(tm,"onAnimationIteration"),Rr(nm,"onAnimationStart"),Rr("dblclick","onDoubleClick"),Rr("focusin","onFocus"),Rr("focusout","onBlur"),Rr(im,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),y_=new Set("cancel close invalid load scroll toggle".split(" ").concat(ro));function am(n,r,o){var d=n.type||"unknown-event";n.currentTarget=o,Ko(d,r,void 0,n),n.currentTarget=null}function om(n,r){r=(r&4)!==0;for(var o=0;o<n.length;o++){var d=n[o],m=d.event;d=d.listeners;e:{var _=void 0;if(r)for(var N=d.length-1;0<=N;N--){var z=d[N],W=z.instance,de=z.currentTarget;if(z=z.listener,W!==_&&m.isPropagationStopped())break e;am(m,z,de),_=W}else for(N=0;N<d.length;N++){if(z=d[N],W=z.instance,de=z.currentTarget,z=z.listener,W!==_&&m.isPropagationStopped())break e;am(m,z,de),_=W}}}if(rs)throw n=Ds,rs=!1,Ds=null,n}function qt(n,r){var o=r[Uu];o===void 0&&(o=r[Uu]=new Set);var d=n+"__bubble";o.has(d)||(lm(r,n,2,!1),o.add(d))}function Au(n,r,o){var d=0;r&&(d|=4),lm(o,n,d,r)}var cl="_reactListening"+Math.random().toString(36).slice(2);function so(n){if(!n[cl]){n[cl]=!0,s.forEach(function(o){o!=="selectionchange"&&(y_.has(o)||Au(o,!1,n),Au(o,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[cl]||(r[cl]=!0,Au("selectionchange",!1,r))}}function lm(n,r,o,d){switch(Pp(r)){case 1:var m=Ix;break;case 4:m=Ux;break;default:m=du}o=m.bind(null,r,o,n),m=void 0,!Dt||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(m=!0),d?m!==void 0?n.addEventListener(r,o,{capture:!0,passive:m}):n.addEventListener(r,o,!0):m!==void 0?n.addEventListener(r,o,{passive:m}):n.addEventListener(r,o,!1)}function Ru(n,r,o,d,m){var _=d;if((r&1)===0&&(r&2)===0&&d!==null)e:for(;;){if(d===null)return;var N=d.tag;if(N===3||N===4){var z=d.stateNode.containerInfo;if(z===m||z.nodeType===8&&z.parentNode===m)break;if(N===4)for(N=d.return;N!==null;){var W=N.tag;if((W===3||W===4)&&(W=N.stateNode.containerInfo,W===m||W.nodeType===8&&W.parentNode===m))return;N=N.return}for(;z!==null;){if(N=os(z),N===null)return;if(W=N.tag,W===5||W===6){d=_=N;continue e}z=z.parentNode}}d=d.return}ht(function(){var de=_,Me=ct(o),Ee=[];e:{var Se=rm.get(n);if(Se!==void 0){var He=pu,We=n;switch(n){case"keypress":if(il(o)===0)break e;case"keydown":case"keyup":He=Kx;break;case"focusin":We="focus",He=vu;break;case"focusout":We="blur",He=vu;break;case"beforeblur":case"afterblur":He=vu;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":He=Ip;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":He=kx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":He=Jx;break;case em:case tm:case nm:He=jx;break;case im:He=t_;break;case"scroll":He=Fx;break;case"wheel":He=i_;break;case"copy":case"cut":case"paste":He=Gx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":He=Fp}var Ye=(r&4)!==0,on=!Ye&&n==="scroll",se=Ye?Se!==null?Se+"Capture":null:Se;Ye=[];for(var K=de,ce;K!==null;){ce=K;var be=ce.stateNode;if(ce.tag===5&&be!==null&&(ce=be,se!==null&&(be=Ht(K,se),be!=null&&Ye.push(ao(K,be,ce)))),on)break;K=K.return}0<Ye.length&&(Se=new He(Se,We,null,o,Me),Ee.push({event:Se,listeners:Ye}))}}if((r&7)===0){e:{if(Se=n==="mouseover"||n==="pointerover",He=n==="mouseout"||n==="pointerout",Se&&o!==we&&(We=o.relatedTarget||o.fromElement)&&(os(We)||We[sr]))break e;if((He||Se)&&(Se=Me.window===Me?Me:(Se=Me.ownerDocument)?Se.defaultView||Se.parentWindow:window,He?(We=o.relatedTarget||o.toElement,He=de,We=We?os(We):null,We!==null&&(on=Bi(We),We!==on||We.tag!==5&&We.tag!==6)&&(We=null)):(He=null,We=de),He!==We)){if(Ye=Ip,be="onMouseLeave",se="onMouseEnter",K="mouse",(n==="pointerout"||n==="pointerover")&&(Ye=Fp,be="onPointerLeave",se="onPointerEnter",K="pointer"),on=He==null?Se:Hs(He),ce=We==null?Se:Hs(We),Se=new Ye(be,K+"leave",He,o,Me),Se.target=on,Se.relatedTarget=ce,be=null,os(Me)===de&&(Ye=new Ye(se,K+"enter",We,o,Me),Ye.target=ce,Ye.relatedTarget=on,be=Ye),on=be,He&&We)t:{for(Ye=He,se=We,K=0,ce=Ye;ce;ce=zs(ce))K++;for(ce=0,be=se;be;be=zs(be))ce++;for(;0<K-ce;)Ye=zs(Ye),K--;for(;0<ce-K;)se=zs(se),ce--;for(;K--;){if(Ye===se||se!==null&&Ye===se.alternate)break t;Ye=zs(Ye),se=zs(se)}Ye=null}else Ye=null;He!==null&&cm(Ee,Se,He,Ye,!1),We!==null&&on!==null&&cm(Ee,on,We,Ye,!0)}}e:{if(Se=de?Hs(de):window,He=Se.nodeName&&Se.nodeName.toLowerCase(),He==="select"||He==="input"&&Se.type==="file")var Je=u_;else if(Hp(Se))if(Vp)Je=p_;else{Je=h_;var st=d_}else(He=Se.nodeName)&&He.toLowerCase()==="input"&&(Se.type==="checkbox"||Se.type==="radio")&&(Je=f_);if(Je&&(Je=Je(n,de))){Gp(Ee,Je,o,Me);break e}st&&st(n,Se,de),n==="focusout"&&(st=Se._wrapperState)&&st.controlled&&Se.type==="number"&&rn(Se,"number",Se.value)}switch(st=de?Hs(de):window,n){case"focusin":(Hp(st)||st.contentEditable==="true")&&(ks=st,Eu=de,io=null);break;case"focusout":io=Eu=ks=null;break;case"mousedown":Tu=!0;break;case"contextmenu":case"mouseup":case"dragend":Tu=!1,Qp(Ee,o,Me);break;case"selectionchange":if(v_)break;case"keydown":case"keyup":Qp(Ee,o,Me)}var at;if(_u)e:{switch(n){case"compositionstart":var ut="onCompositionStart";break e;case"compositionend":ut="onCompositionEnd";break e;case"compositionupdate":ut="onCompositionUpdate";break e}ut=void 0}else Os?zp(n,o)&&(ut="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(ut="onCompositionStart");ut&&(Op&&o.locale!=="ko"&&(Os||ut!=="onCompositionStart"?ut==="onCompositionEnd"&&Os&&(at=Lp()):(Ar=Me,fu="value"in Ar?Ar.value:Ar.textContent,Os=!0)),st=ul(de,ut),0<st.length&&(ut=new Up(ut,n,null,o,Me),Ee.push({event:ut,listeners:st}),at?ut.data=at:(at=jp(o),at!==null&&(ut.data=at)))),(at=s_?a_(n,o):o_(n,o))&&(de=ul(de,"onBeforeInput"),0<de.length&&(Me=new Up("onBeforeInput","beforeinput",null,o,Me),Ee.push({event:Me,listeners:de}),Me.data=at))}om(Ee,r)})}function ao(n,r,o){return{instance:n,listener:r,currentTarget:o}}function ul(n,r){for(var o=r+"Capture",d=[];n!==null;){var m=n,_=m.stateNode;m.tag===5&&_!==null&&(m=_,_=Ht(n,o),_!=null&&d.unshift(ao(n,_,m)),_=Ht(n,r),_!=null&&d.push(ao(n,_,m))),n=n.return}return d}function zs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function cm(n,r,o,d,m){for(var _=r._reactName,N=[];o!==null&&o!==d;){var z=o,W=z.alternate,de=z.stateNode;if(W!==null&&W===d)break;z.tag===5&&de!==null&&(z=de,m?(W=Ht(o,_),W!=null&&N.unshift(ao(o,W,z))):m||(W=Ht(o,_),W!=null&&N.push(ao(o,W,z)))),o=o.return}N.length!==0&&n.push({event:r,listeners:N})}var S_=/\r\n?/g,M_=/\u0000|\uFFFD/g;function um(n){return(typeof n=="string"?n:""+n).replace(S_,`
`).replace(M_,"")}function dl(n,r,o){if(r=um(r),um(n)!==r&&o)throw Error(t(425))}function hl(){}var Nu=null,Pu=null;function Lu(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Du=typeof setTimeout=="function"?setTimeout:void 0,E_=typeof clearTimeout=="function"?clearTimeout:void 0,dm=typeof Promise=="function"?Promise:void 0,T_=typeof queueMicrotask=="function"?queueMicrotask:typeof dm<"u"?function(n){return dm.resolve(null).then(n).catch(w_)}:Du;function w_(n){setTimeout(function(){throw n})}function Iu(n,r){var o=r,d=0;do{var m=o.nextSibling;if(n.removeChild(o),m&&m.nodeType===8)if(o=m.data,o==="/$"){if(d===0){n.removeChild(m),Ka(r);return}d--}else o!=="$"&&o!=="$?"&&o!=="$!"||d++;o=m}while(o);Ka(r)}function Nr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function hm(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return n;r--}else o==="/$"&&r++}n=n.previousSibling}return null}var js=Math.random().toString(36).slice(2),ji="__reactFiber$"+js,oo="__reactProps$"+js,sr="__reactContainer$"+js,Uu="__reactEvents$"+js,b_="__reactListeners$"+js,C_="__reactHandles$"+js;function os(n){var r=n[ji];if(r)return r;for(var o=n.parentNode;o;){if(r=o[sr]||o[ji]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(n=hm(n);n!==null;){if(o=n[ji])return o;n=hm(n)}return r}n=o,o=n.parentNode}return null}function lo(n){return n=n[ji]||n[sr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Hs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function fl(n){return n[oo]||null}var Fu=[],Gs=-1;function Pr(n){return{current:n}}function Yt(n){0>Gs||(n.current=Fu[Gs],Fu[Gs]=null,Gs--)}function Wt(n,r){Gs++,Fu[Gs]=n.current,n.current=r}var Lr={},Cn=Pr(Lr),Xn=Pr(!1),ls=Lr;function Vs(n,r){var o=n.type.contextTypes;if(!o)return Lr;var d=n.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===r)return d.__reactInternalMemoizedMaskedChildContext;var m={},_;for(_ in o)m[_]=r[_];return d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=m),m}function $n(n){return n=n.childContextTypes,n!=null}function pl(){Yt(Xn),Yt(Cn)}function fm(n,r,o){if(Cn.current!==Lr)throw Error(t(168));Wt(Cn,r),Wt(Xn,o)}function pm(n,r,o){var d=n.stateNode;if(r=r.childContextTypes,typeof d.getChildContext!="function")return o;d=d.getChildContext();for(var m in d)if(!(m in r))throw Error(t(108,me(n)||"Unknown",m));return re({},o,d)}function ml(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Lr,ls=Cn.current,Wt(Cn,n),Wt(Xn,Xn.current),!0}function mm(n,r,o){var d=n.stateNode;if(!d)throw Error(t(169));o?(n=pm(n,r,ls),d.__reactInternalMemoizedMergedChildContext=n,Yt(Xn),Yt(Cn),Wt(Cn,n)):Yt(Xn),Wt(Xn,o)}var ar=null,gl=!1,Ou=!1;function gm(n){ar===null?ar=[n]:ar.push(n)}function A_(n){gl=!0,gm(n)}function Dr(){if(!Ou&&ar!==null){Ou=!0;var n=0,r=Et;try{var o=ar;for(Et=1;n<o.length;n++){var d=o[n];do d=d(!0);while(d!==null)}ar=null,gl=!1}catch(m){throw ar!==null&&(ar=ar.slice(n+1)),Zo(Wa,Dr),m}finally{Et=r,Ou=!1}}return null}var Ws=[],Xs=0,vl=null,xl=0,hi=[],fi=0,cs=null,or=1,lr="";function us(n,r){Ws[Xs++]=xl,Ws[Xs++]=vl,vl=n,xl=r}function vm(n,r,o){hi[fi++]=or,hi[fi++]=lr,hi[fi++]=cs,cs=n;var d=or;n=lr;var m=32-Ne(d)-1;d&=~(1<<m),o+=1;var _=32-Ne(r)+m;if(30<_){var N=m-m%5;_=(d&(1<<N)-1).toString(32),d>>=N,m-=N,or=1<<32-Ne(r)+m|o<<m|d,lr=_+n}else or=1<<_|o<<m|d,lr=n}function ku(n){n.return!==null&&(us(n,1),vm(n,1,0))}function Bu(n){for(;n===vl;)vl=Ws[--Xs],Ws[Xs]=null,xl=Ws[--Xs],Ws[Xs]=null;for(;n===cs;)cs=hi[--fi],hi[fi]=null,lr=hi[--fi],hi[fi]=null,or=hi[--fi],hi[fi]=null}var ni=null,ii=null,Zt=!1,Ci=null;function xm(n,r){var o=vi(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=n,r=n.deletions,r===null?(n.deletions=[o],n.flags|=16):r.push(o)}function _m(n,r){switch(n.tag){case 5:var o=n.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,ni=n,ii=Nr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,ni=n,ii=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=cs!==null?{id:or,overflow:lr}:null,n.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=vi(18,null,null,0),o.stateNode=r,o.return=n,n.child=o,ni=n,ii=null,!0):!1;default:return!1}}function zu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function ju(n){if(Zt){var r=ii;if(r){var o=r;if(!_m(n,r)){if(zu(n))throw Error(t(418));r=Nr(o.nextSibling);var d=ni;r&&_m(n,r)?xm(d,o):(n.flags=n.flags&-4097|2,Zt=!1,ni=n)}}else{if(zu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Zt=!1,ni=n}}}function ym(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ni=n}function _l(n){if(n!==ni)return!1;if(!Zt)return ym(n),Zt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Lu(n.type,n.memoizedProps)),r&&(r=ii)){if(zu(n))throw Sm(),Error(t(418));for(;r;)xm(n,r),r=Nr(r.nextSibling)}if(ym(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(r===0){ii=Nr(n.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}n=n.nextSibling}ii=null}}else ii=ni?Nr(n.stateNode.nextSibling):null;return!0}function Sm(){for(var n=ii;n;)n=Nr(n.nextSibling)}function $s(){ii=ni=null,Zt=!1}function Hu(n){Ci===null?Ci=[n]:Ci.push(n)}var R_=w.ReactCurrentBatchConfig;function co(n,r,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var d=o.stateNode}if(!d)throw Error(t(147,n));var m=d,_=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===_?r.ref:(r=function(N){var z=m.refs;N===null?delete z[_]:z[_]=N},r._stringRef=_,r)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function yl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Mm(n){var r=n._init;return r(n._payload)}function Em(n){function r(se,K){if(n){var ce=se.deletions;ce===null?(se.deletions=[K],se.flags|=16):ce.push(K)}}function o(se,K){if(!n)return null;for(;K!==null;)r(se,K),K=K.sibling;return null}function d(se,K){for(se=new Map;K!==null;)K.key!==null?se.set(K.key,K):se.set(K.index,K),K=K.sibling;return se}function m(se,K){return se=jr(se,K),se.index=0,se.sibling=null,se}function _(se,K,ce){return se.index=ce,n?(ce=se.alternate,ce!==null?(ce=ce.index,ce<K?(se.flags|=2,K):ce):(se.flags|=2,K)):(se.flags|=1048576,K)}function N(se){return n&&se.alternate===null&&(se.flags|=2),se}function z(se,K,ce,be){return K===null||K.tag!==6?(K=Dd(ce,se.mode,be),K.return=se,K):(K=m(K,ce),K.return=se,K)}function W(se,K,ce,be){var Je=ce.type;return Je===O?Me(se,K,ce.props.children,be,ce.key):K!==null&&(K.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===F&&Mm(Je)===K.type)?(be=m(K,ce.props),be.ref=co(se,K,ce),be.return=se,be):(be=Vl(ce.type,ce.key,ce.props,null,se.mode,be),be.ref=co(se,K,ce),be.return=se,be)}function de(se,K,ce,be){return K===null||K.tag!==4||K.stateNode.containerInfo!==ce.containerInfo||K.stateNode.implementation!==ce.implementation?(K=Id(ce,se.mode,be),K.return=se,K):(K=m(K,ce.children||[]),K.return=se,K)}function Me(se,K,ce,be,Je){return K===null||K.tag!==7?(K=xs(ce,se.mode,be,Je),K.return=se,K):(K=m(K,ce),K.return=se,K)}function Ee(se,K,ce){if(typeof K=="string"&&K!==""||typeof K=="number")return K=Dd(""+K,se.mode,ce),K.return=se,K;if(typeof K=="object"&&K!==null){switch(K.$$typeof){case D:return ce=Vl(K.type,K.key,K.props,null,se.mode,ce),ce.ref=co(se,null,K),ce.return=se,ce;case L:return K=Id(K,se.mode,ce),K.return=se,K;case F:var be=K._init;return Ee(se,be(K._payload),ce)}if(Y(K)||oe(K))return K=xs(K,se.mode,ce,null),K.return=se,K;yl(se,K)}return null}function Se(se,K,ce,be){var Je=K!==null?K.key:null;if(typeof ce=="string"&&ce!==""||typeof ce=="number")return Je!==null?null:z(se,K,""+ce,be);if(typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case D:return ce.key===Je?W(se,K,ce,be):null;case L:return ce.key===Je?de(se,K,ce,be):null;case F:return Je=ce._init,Se(se,K,Je(ce._payload),be)}if(Y(ce)||oe(ce))return Je!==null?null:Me(se,K,ce,be,null);yl(se,ce)}return null}function He(se,K,ce,be,Je){if(typeof be=="string"&&be!==""||typeof be=="number")return se=se.get(ce)||null,z(K,se,""+be,Je);if(typeof be=="object"&&be!==null){switch(be.$$typeof){case D:return se=se.get(be.key===null?ce:be.key)||null,W(K,se,be,Je);case L:return se=se.get(be.key===null?ce:be.key)||null,de(K,se,be,Je);case F:var st=be._init;return He(se,K,ce,st(be._payload),Je)}if(Y(be)||oe(be))return se=se.get(ce)||null,Me(K,se,be,Je,null);yl(K,be)}return null}function We(se,K,ce,be){for(var Je=null,st=null,at=K,ut=K=0,Sn=null;at!==null&&ut<ce.length;ut++){at.index>ut?(Sn=at,at=null):Sn=at.sibling;var It=Se(se,at,ce[ut],be);if(It===null){at===null&&(at=Sn);break}n&&at&&It.alternate===null&&r(se,at),K=_(It,K,ut),st===null?Je=It:st.sibling=It,st=It,at=Sn}if(ut===ce.length)return o(se,at),Zt&&us(se,ut),Je;if(at===null){for(;ut<ce.length;ut++)at=Ee(se,ce[ut],be),at!==null&&(K=_(at,K,ut),st===null?Je=at:st.sibling=at,st=at);return Zt&&us(se,ut),Je}for(at=d(se,at);ut<ce.length;ut++)Sn=He(at,se,ut,ce[ut],be),Sn!==null&&(n&&Sn.alternate!==null&&at.delete(Sn.key===null?ut:Sn.key),K=_(Sn,K,ut),st===null?Je=Sn:st.sibling=Sn,st=Sn);return n&&at.forEach(function(Hr){return r(se,Hr)}),Zt&&us(se,ut),Je}function Ye(se,K,ce,be){var Je=oe(ce);if(typeof Je!="function")throw Error(t(150));if(ce=Je.call(ce),ce==null)throw Error(t(151));for(var st=Je=null,at=K,ut=K=0,Sn=null,It=ce.next();at!==null&&!It.done;ut++,It=ce.next()){at.index>ut?(Sn=at,at=null):Sn=at.sibling;var Hr=Se(se,at,It.value,be);if(Hr===null){at===null&&(at=Sn);break}n&&at&&Hr.alternate===null&&r(se,at),K=_(Hr,K,ut),st===null?Je=Hr:st.sibling=Hr,st=Hr,at=Sn}if(It.done)return o(se,at),Zt&&us(se,ut),Je;if(at===null){for(;!It.done;ut++,It=ce.next())It=Ee(se,It.value,be),It!==null&&(K=_(It,K,ut),st===null?Je=It:st.sibling=It,st=It);return Zt&&us(se,ut),Je}for(at=d(se,at);!It.done;ut++,It=ce.next())It=He(at,se,ut,It.value,be),It!==null&&(n&&It.alternate!==null&&at.delete(It.key===null?ut:It.key),K=_(It,K,ut),st===null?Je=It:st.sibling=It,st=It);return n&&at.forEach(function(ly){return r(se,ly)}),Zt&&us(se,ut),Je}function on(se,K,ce,be){if(typeof ce=="object"&&ce!==null&&ce.type===O&&ce.key===null&&(ce=ce.props.children),typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case D:e:{for(var Je=ce.key,st=K;st!==null;){if(st.key===Je){if(Je=ce.type,Je===O){if(st.tag===7){o(se,st.sibling),K=m(st,ce.props.children),K.return=se,se=K;break e}}else if(st.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===F&&Mm(Je)===st.type){o(se,st.sibling),K=m(st,ce.props),K.ref=co(se,st,ce),K.return=se,se=K;break e}o(se,st);break}else r(se,st);st=st.sibling}ce.type===O?(K=xs(ce.props.children,se.mode,be,ce.key),K.return=se,se=K):(be=Vl(ce.type,ce.key,ce.props,null,se.mode,be),be.ref=co(se,K,ce),be.return=se,se=be)}return N(se);case L:e:{for(st=ce.key;K!==null;){if(K.key===st)if(K.tag===4&&K.stateNode.containerInfo===ce.containerInfo&&K.stateNode.implementation===ce.implementation){o(se,K.sibling),K=m(K,ce.children||[]),K.return=se,se=K;break e}else{o(se,K);break}else r(se,K);K=K.sibling}K=Id(ce,se.mode,be),K.return=se,se=K}return N(se);case F:return st=ce._init,on(se,K,st(ce._payload),be)}if(Y(ce))return We(se,K,ce,be);if(oe(ce))return Ye(se,K,ce,be);yl(se,ce)}return typeof ce=="string"&&ce!==""||typeof ce=="number"?(ce=""+ce,K!==null&&K.tag===6?(o(se,K.sibling),K=m(K,ce),K.return=se,se=K):(o(se,K),K=Dd(ce,se.mode,be),K.return=se,se=K),N(se)):o(se,K)}return on}var qs=Em(!0),Tm=Em(!1),Sl=Pr(null),Ml=null,Ys=null,Gu=null;function Vu(){Gu=Ys=Ml=null}function Wu(n){var r=Sl.current;Yt(Sl),n._currentValue=r}function Xu(n,r,o){for(;n!==null;){var d=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,d!==null&&(d.childLanes|=r)):d!==null&&(d.childLanes&r)!==r&&(d.childLanes|=r),n===o)break;n=n.return}}function Ks(n,r){Ml=n,Gu=Ys=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(qn=!0),n.firstContext=null)}function pi(n){var r=n._currentValue;if(Gu!==n)if(n={context:n,memoizedValue:r,next:null},Ys===null){if(Ml===null)throw Error(t(308));Ys=n,Ml.dependencies={lanes:0,firstContext:n}}else Ys=Ys.next=n;return r}var ds=null;function $u(n){ds===null?ds=[n]:ds.push(n)}function wm(n,r,o,d){var m=r.interleaved;return m===null?(o.next=o,$u(r)):(o.next=m.next,m.next=o),r.interleaved=o,cr(n,d)}function cr(n,r){n.lanes|=r;var o=n.alternate;for(o!==null&&(o.lanes|=r),o=n,n=n.return;n!==null;)n.childLanes|=r,o=n.alternate,o!==null&&(o.childLanes|=r),o=n,n=n.return;return o.tag===3?o.stateNode:null}var Ir=!1;function qu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bm(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ur(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Ur(n,r,o){var d=n.updateQueue;if(d===null)return null;if(d=d.shared,(Pt&2)!==0){var m=d.pending;return m===null?r.next=r:(r.next=m.next,m.next=r),d.pending=r,cr(n,o)}return m=d.interleaved,m===null?(r.next=r,$u(d)):(r.next=m.next,m.next=r),d.interleaved=r,cr(n,o)}function El(n,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var d=r.lanes;d&=n.pendingLanes,o|=d,r.lanes=o,Wn(n,o)}}function Cm(n,r){var o=n.updateQueue,d=n.alternate;if(d!==null&&(d=d.updateQueue,o===d)){var m=null,_=null;if(o=o.firstBaseUpdate,o!==null){do{var N={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};_===null?m=_=N:_=_.next=N,o=o.next}while(o!==null);_===null?m=_=r:_=_.next=r}else m=_=r;o={baseState:d.baseState,firstBaseUpdate:m,lastBaseUpdate:_,shared:d.shared,effects:d.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=r:n.next=r,o.lastBaseUpdate=r}function Tl(n,r,o,d){var m=n.updateQueue;Ir=!1;var _=m.firstBaseUpdate,N=m.lastBaseUpdate,z=m.shared.pending;if(z!==null){m.shared.pending=null;var W=z,de=W.next;W.next=null,N===null?_=de:N.next=de,N=W;var Me=n.alternate;Me!==null&&(Me=Me.updateQueue,z=Me.lastBaseUpdate,z!==N&&(z===null?Me.firstBaseUpdate=de:z.next=de,Me.lastBaseUpdate=W))}if(_!==null){var Ee=m.baseState;N=0,Me=de=W=null,z=_;do{var Se=z.lane,He=z.eventTime;if((d&Se)===Se){Me!==null&&(Me=Me.next={eventTime:He,lane:0,tag:z.tag,payload:z.payload,callback:z.callback,next:null});e:{var We=n,Ye=z;switch(Se=r,He=o,Ye.tag){case 1:if(We=Ye.payload,typeof We=="function"){Ee=We.call(He,Ee,Se);break e}Ee=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=Ye.payload,Se=typeof We=="function"?We.call(He,Ee,Se):We,Se==null)break e;Ee=re({},Ee,Se);break e;case 2:Ir=!0}}z.callback!==null&&z.lane!==0&&(n.flags|=64,Se=m.effects,Se===null?m.effects=[z]:Se.push(z))}else He={eventTime:He,lane:Se,tag:z.tag,payload:z.payload,callback:z.callback,next:null},Me===null?(de=Me=He,W=Ee):Me=Me.next=He,N|=Se;if(z=z.next,z===null){if(z=m.shared.pending,z===null)break;Se=z,z=Se.next,Se.next=null,m.lastBaseUpdate=Se,m.shared.pending=null}}while(!0);if(Me===null&&(W=Ee),m.baseState=W,m.firstBaseUpdate=de,m.lastBaseUpdate=Me,r=m.shared.interleaved,r!==null){m=r;do N|=m.lane,m=m.next;while(m!==r)}else _===null&&(m.shared.lanes=0);ps|=N,n.lanes=N,n.memoizedState=Ee}}function Am(n,r,o){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var d=n[r],m=d.callback;if(m!==null){if(d.callback=null,d=o,typeof m!="function")throw Error(t(191,m));m.call(d)}}}var uo={},Hi=Pr(uo),ho=Pr(uo),fo=Pr(uo);function hs(n){if(n===uo)throw Error(t(174));return n}function Yu(n,r){switch(Wt(fo,r),Wt(ho,n),Wt(Hi,uo),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:C(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=C(r,n)}Yt(Hi),Wt(Hi,r)}function Zs(){Yt(Hi),Yt(ho),Yt(fo)}function Rm(n){hs(fo.current);var r=hs(Hi.current),o=C(r,n.type);r!==o&&(Wt(ho,n),Wt(Hi,o))}function Ku(n){ho.current===n&&(Yt(Hi),Yt(ho))}var en=Pr(0);function wl(n){for(var r=n;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Zu=[];function Qu(){for(var n=0;n<Zu.length;n++)Zu[n]._workInProgressVersionPrimary=null;Zu.length=0}var bl=w.ReactCurrentDispatcher,Ju=w.ReactCurrentBatchConfig,fs=0,tn=null,fn=null,_n=null,Cl=!1,po=!1,mo=0,N_=0;function An(){throw Error(t(321))}function ed(n,r){if(r===null)return!1;for(var o=0;o<r.length&&o<n.length;o++)if(!bi(n[o],r[o]))return!1;return!0}function td(n,r,o,d,m,_){if(fs=_,tn=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,bl.current=n===null||n.memoizedState===null?I_:U_,n=o(d,m),po){_=0;do{if(po=!1,mo=0,25<=_)throw Error(t(301));_+=1,_n=fn=null,r.updateQueue=null,bl.current=F_,n=o(d,m)}while(po)}if(bl.current=Nl,r=fn!==null&&fn.next!==null,fs=0,_n=fn=tn=null,Cl=!1,r)throw Error(t(300));return n}function nd(){var n=mo!==0;return mo=0,n}function Gi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?tn.memoizedState=_n=n:_n=_n.next=n,_n}function mi(){if(fn===null){var n=tn.alternate;n=n!==null?n.memoizedState:null}else n=fn.next;var r=_n===null?tn.memoizedState:_n.next;if(r!==null)_n=r,fn=n;else{if(n===null)throw Error(t(310));fn=n,n={memoizedState:fn.memoizedState,baseState:fn.baseState,baseQueue:fn.baseQueue,queue:fn.queue,next:null},_n===null?tn.memoizedState=_n=n:_n=_n.next=n}return _n}function go(n,r){return typeof r=="function"?r(n):r}function id(n){var r=mi(),o=r.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var d=fn,m=d.baseQueue,_=o.pending;if(_!==null){if(m!==null){var N=m.next;m.next=_.next,_.next=N}d.baseQueue=m=_,o.pending=null}if(m!==null){_=m.next,d=d.baseState;var z=N=null,W=null,de=_;do{var Me=de.lane;if((fs&Me)===Me)W!==null&&(W=W.next={lane:0,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null}),d=de.hasEagerState?de.eagerState:n(d,de.action);else{var Ee={lane:Me,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null};W===null?(z=W=Ee,N=d):W=W.next=Ee,tn.lanes|=Me,ps|=Me}de=de.next}while(de!==null&&de!==_);W===null?N=d:W.next=z,bi(d,r.memoizedState)||(qn=!0),r.memoizedState=d,r.baseState=N,r.baseQueue=W,o.lastRenderedState=d}if(n=o.interleaved,n!==null){m=n;do _=m.lane,tn.lanes|=_,ps|=_,m=m.next;while(m!==n)}else m===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function rd(n){var r=mi(),o=r.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var d=o.dispatch,m=o.pending,_=r.memoizedState;if(m!==null){o.pending=null;var N=m=m.next;do _=n(_,N.action),N=N.next;while(N!==m);bi(_,r.memoizedState)||(qn=!0),r.memoizedState=_,r.baseQueue===null&&(r.baseState=_),o.lastRenderedState=_}return[_,d]}function Nm(){}function Pm(n,r){var o=tn,d=mi(),m=r(),_=!bi(d.memoizedState,m);if(_&&(d.memoizedState=m,qn=!0),d=d.queue,sd(Im.bind(null,o,d,n),[n]),d.getSnapshot!==r||_||_n!==null&&_n.memoizedState.tag&1){if(o.flags|=2048,vo(9,Dm.bind(null,o,d,m,r),void 0,null),yn===null)throw Error(t(349));(fs&30)!==0||Lm(o,r,m)}return m}function Lm(n,r,o){n.flags|=16384,n={getSnapshot:r,value:o},r=tn.updateQueue,r===null?(r={lastEffect:null,stores:null},tn.updateQueue=r,r.stores=[n]):(o=r.stores,o===null?r.stores=[n]:o.push(n))}function Dm(n,r,o,d){r.value=o,r.getSnapshot=d,Um(r)&&Fm(n)}function Im(n,r,o){return o(function(){Um(r)&&Fm(n)})}function Um(n){var r=n.getSnapshot;n=n.value;try{var o=r();return!bi(n,o)}catch{return!0}}function Fm(n){var r=cr(n,1);r!==null&&Pi(r,n,1,-1)}function Om(n){var r=Gi();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:go,lastRenderedState:n},r.queue=n,n=n.dispatch=D_.bind(null,tn,n),[r.memoizedState,n]}function vo(n,r,o,d){return n={tag:n,create:r,destroy:o,deps:d,next:null},r=tn.updateQueue,r===null?(r={lastEffect:null,stores:null},tn.updateQueue=r,r.lastEffect=n.next=n):(o=r.lastEffect,o===null?r.lastEffect=n.next=n:(d=o.next,o.next=n,n.next=d,r.lastEffect=n)),n}function km(){return mi().memoizedState}function Al(n,r,o,d){var m=Gi();tn.flags|=n,m.memoizedState=vo(1|r,o,void 0,d===void 0?null:d)}function Rl(n,r,o,d){var m=mi();d=d===void 0?null:d;var _=void 0;if(fn!==null){var N=fn.memoizedState;if(_=N.destroy,d!==null&&ed(d,N.deps)){m.memoizedState=vo(r,o,_,d);return}}tn.flags|=n,m.memoizedState=vo(1|r,o,_,d)}function Bm(n,r){return Al(8390656,8,n,r)}function sd(n,r){return Rl(2048,8,n,r)}function zm(n,r){return Rl(4,2,n,r)}function jm(n,r){return Rl(4,4,n,r)}function Hm(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Gm(n,r,o){return o=o!=null?o.concat([n]):null,Rl(4,4,Hm.bind(null,r,n),o)}function ad(){}function Vm(n,r){var o=mi();r=r===void 0?null:r;var d=o.memoizedState;return d!==null&&r!==null&&ed(r,d[1])?d[0]:(o.memoizedState=[n,r],n)}function Wm(n,r){var o=mi();r=r===void 0?null:r;var d=o.memoizedState;return d!==null&&r!==null&&ed(r,d[1])?d[0]:(n=n(),o.memoizedState=[n,r],n)}function Xm(n,r,o){return(fs&21)===0?(n.baseState&&(n.baseState=!1,qn=!0),n.memoizedState=o):(bi(o,r)||(o=je(),tn.lanes|=o,ps|=o,n.baseState=!0),r)}function P_(n,r){var o=Et;Et=o!==0&&4>o?o:4,n(!0);var d=Ju.transition;Ju.transition={};try{n(!1),r()}finally{Et=o,Ju.transition=d}}function $m(){return mi().memoizedState}function L_(n,r,o){var d=Br(n);if(o={lane:d,action:o,hasEagerState:!1,eagerState:null,next:null},qm(n))Ym(r,o);else if(o=wm(n,r,o,d),o!==null){var m=zn();Pi(o,n,d,m),Km(o,r,d)}}function D_(n,r,o){var d=Br(n),m={lane:d,action:o,hasEagerState:!1,eagerState:null,next:null};if(qm(n))Ym(r,m);else{var _=n.alternate;if(n.lanes===0&&(_===null||_.lanes===0)&&(_=r.lastRenderedReducer,_!==null))try{var N=r.lastRenderedState,z=_(N,o);if(m.hasEagerState=!0,m.eagerState=z,bi(z,N)){var W=r.interleaved;W===null?(m.next=m,$u(r)):(m.next=W.next,W.next=m),r.interleaved=m;return}}catch{}finally{}o=wm(n,r,m,d),o!==null&&(m=zn(),Pi(o,n,d,m),Km(o,r,d))}}function qm(n){var r=n.alternate;return n===tn||r!==null&&r===tn}function Ym(n,r){po=Cl=!0;var o=n.pending;o===null?r.next=r:(r.next=o.next,o.next=r),n.pending=r}function Km(n,r,o){if((o&4194240)!==0){var d=r.lanes;d&=n.pendingLanes,o|=d,r.lanes=o,Wn(n,o)}}var Nl={readContext:pi,useCallback:An,useContext:An,useEffect:An,useImperativeHandle:An,useInsertionEffect:An,useLayoutEffect:An,useMemo:An,useReducer:An,useRef:An,useState:An,useDebugValue:An,useDeferredValue:An,useTransition:An,useMutableSource:An,useSyncExternalStore:An,useId:An,unstable_isNewReconciler:!1},I_={readContext:pi,useCallback:function(n,r){return Gi().memoizedState=[n,r===void 0?null:r],n},useContext:pi,useEffect:Bm,useImperativeHandle:function(n,r,o){return o=o!=null?o.concat([n]):null,Al(4194308,4,Hm.bind(null,r,n),o)},useLayoutEffect:function(n,r){return Al(4194308,4,n,r)},useInsertionEffect:function(n,r){return Al(4,2,n,r)},useMemo:function(n,r){var o=Gi();return r=r===void 0?null:r,n=n(),o.memoizedState=[n,r],n},useReducer:function(n,r,o){var d=Gi();return r=o!==void 0?o(r):r,d.memoizedState=d.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},d.queue=n,n=n.dispatch=L_.bind(null,tn,n),[d.memoizedState,n]},useRef:function(n){var r=Gi();return n={current:n},r.memoizedState=n},useState:Om,useDebugValue:ad,useDeferredValue:function(n){return Gi().memoizedState=n},useTransition:function(){var n=Om(!1),r=n[0];return n=P_.bind(null,n[1]),Gi().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,o){var d=tn,m=Gi();if(Zt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=r(),yn===null)throw Error(t(349));(fs&30)!==0||Lm(d,r,o)}m.memoizedState=o;var _={value:o,getSnapshot:r};return m.queue=_,Bm(Im.bind(null,d,_,n),[n]),d.flags|=2048,vo(9,Dm.bind(null,d,_,o,r),void 0,null),o},useId:function(){var n=Gi(),r=yn.identifierPrefix;if(Zt){var o=lr,d=or;o=(d&~(1<<32-Ne(d)-1)).toString(32)+o,r=":"+r+"R"+o,o=mo++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=N_++,r=":"+r+"r"+o.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},U_={readContext:pi,useCallback:Vm,useContext:pi,useEffect:sd,useImperativeHandle:Gm,useInsertionEffect:zm,useLayoutEffect:jm,useMemo:Wm,useReducer:id,useRef:km,useState:function(){return id(go)},useDebugValue:ad,useDeferredValue:function(n){var r=mi();return Xm(r,fn.memoizedState,n)},useTransition:function(){var n=id(go)[0],r=mi().memoizedState;return[n,r]},useMutableSource:Nm,useSyncExternalStore:Pm,useId:$m,unstable_isNewReconciler:!1},F_={readContext:pi,useCallback:Vm,useContext:pi,useEffect:sd,useImperativeHandle:Gm,useInsertionEffect:zm,useLayoutEffect:jm,useMemo:Wm,useReducer:rd,useRef:km,useState:function(){return rd(go)},useDebugValue:ad,useDeferredValue:function(n){var r=mi();return fn===null?r.memoizedState=n:Xm(r,fn.memoizedState,n)},useTransition:function(){var n=rd(go)[0],r=mi().memoizedState;return[n,r]},useMutableSource:Nm,useSyncExternalStore:Pm,useId:$m,unstable_isNewReconciler:!1};function Ai(n,r){if(n&&n.defaultProps){r=re({},r),n=n.defaultProps;for(var o in n)r[o]===void 0&&(r[o]=n[o]);return r}return r}function od(n,r,o,d){r=n.memoizedState,o=o(d,r),o=o==null?r:re({},r,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Pl={isMounted:function(n){return(n=n._reactInternals)?Bi(n)===n:!1},enqueueSetState:function(n,r,o){n=n._reactInternals;var d=zn(),m=Br(n),_=ur(d,m);_.payload=r,o!=null&&(_.callback=o),r=Ur(n,_,m),r!==null&&(Pi(r,n,m,d),El(r,n,m))},enqueueReplaceState:function(n,r,o){n=n._reactInternals;var d=zn(),m=Br(n),_=ur(d,m);_.tag=1,_.payload=r,o!=null&&(_.callback=o),r=Ur(n,_,m),r!==null&&(Pi(r,n,m,d),El(r,n,m))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var o=zn(),d=Br(n),m=ur(o,d);m.tag=2,r!=null&&(m.callback=r),r=Ur(n,m,d),r!==null&&(Pi(r,n,d,o),El(r,n,d))}};function Zm(n,r,o,d,m,_,N){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(d,_,N):r.prototype&&r.prototype.isPureReactComponent?!no(o,d)||!no(m,_):!0}function Qm(n,r,o){var d=!1,m=Lr,_=r.contextType;return typeof _=="object"&&_!==null?_=pi(_):(m=$n(r)?ls:Cn.current,d=r.contextTypes,_=(d=d!=null)?Vs(n,m):Lr),r=new r(o,_),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Pl,n.stateNode=r,r._reactInternals=n,d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=m,n.__reactInternalMemoizedMaskedChildContext=_),r}function Jm(n,r,o,d){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,d),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,d),r.state!==n&&Pl.enqueueReplaceState(r,r.state,null)}function ld(n,r,o,d){var m=n.stateNode;m.props=o,m.state=n.memoizedState,m.refs={},qu(n);var _=r.contextType;typeof _=="object"&&_!==null?m.context=pi(_):(_=$n(r)?ls:Cn.current,m.context=Vs(n,_)),m.state=n.memoizedState,_=r.getDerivedStateFromProps,typeof _=="function"&&(od(n,r,_,o),m.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(r=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),r!==m.state&&Pl.enqueueReplaceState(m,m.state,null),Tl(n,o,m,d),m.state=n.memoizedState),typeof m.componentDidMount=="function"&&(n.flags|=4194308)}function Qs(n,r){try{var o="",d=r;do o+=he(d),d=d.return;while(d);var m=o}catch(_){m=`
Error generating stack: `+_.message+`
`+_.stack}return{value:n,source:r,stack:m,digest:null}}function cd(n,r,o){return{value:n,source:null,stack:o??null,digest:r??null}}function ud(n,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var O_=typeof WeakMap=="function"?WeakMap:Map;function eg(n,r,o){o=ur(-1,o),o.tag=3,o.payload={element:null};var d=r.value;return o.callback=function(){kl||(kl=!0,wd=d),ud(n,r)},o}function tg(n,r,o){o=ur(-1,o),o.tag=3;var d=n.type.getDerivedStateFromError;if(typeof d=="function"){var m=r.value;o.payload=function(){return d(m)},o.callback=function(){ud(n,r)}}var _=n.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(o.callback=function(){ud(n,r),typeof d!="function"&&(Or===null?Or=new Set([this]):Or.add(this));var N=r.stack;this.componentDidCatch(r.value,{componentStack:N!==null?N:""})}),o}function ng(n,r,o){var d=n.pingCache;if(d===null){d=n.pingCache=new O_;var m=new Set;d.set(r,m)}else m=d.get(r),m===void 0&&(m=new Set,d.set(r,m));m.has(o)||(m.add(o),n=Z_.bind(null,n,r,o),r.then(n,n))}function ig(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function rg(n,r,o,d,m){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=ur(-1,1),r.tag=2,Ur(o,r,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=m,n)}var k_=w.ReactCurrentOwner,qn=!1;function Bn(n,r,o,d){r.child=n===null?Tm(r,null,o,d):qs(r,n.child,o,d)}function sg(n,r,o,d,m){o=o.render;var _=r.ref;return Ks(r,m),d=td(n,r,o,d,_,m),o=nd(),n!==null&&!qn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~m,dr(n,r,m)):(Zt&&o&&ku(r),r.flags|=1,Bn(n,r,d,m),r.child)}function ag(n,r,o,d,m){if(n===null){var _=o.type;return typeof _=="function"&&!Ld(_)&&_.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=_,og(n,r,_,d,m)):(n=Vl(o.type,null,d,r,r.mode,m),n.ref=r.ref,n.return=r,r.child=n)}if(_=n.child,(n.lanes&m)===0){var N=_.memoizedProps;if(o=o.compare,o=o!==null?o:no,o(N,d)&&n.ref===r.ref)return dr(n,r,m)}return r.flags|=1,n=jr(_,d),n.ref=r.ref,n.return=r,r.child=n}function og(n,r,o,d,m){if(n!==null){var _=n.memoizedProps;if(no(_,d)&&n.ref===r.ref)if(qn=!1,r.pendingProps=d=_,(n.lanes&m)!==0)(n.flags&131072)!==0&&(qn=!0);else return r.lanes=n.lanes,dr(n,r,m)}return dd(n,r,o,d,m)}function lg(n,r,o){var d=r.pendingProps,m=d.children,_=n!==null?n.memoizedState:null;if(d.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Wt(ea,ri),ri|=o;else{if((o&1073741824)===0)return n=_!==null?_.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Wt(ea,ri),ri|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=_!==null?_.baseLanes:o,Wt(ea,ri),ri|=d}else _!==null?(d=_.baseLanes|o,r.memoizedState=null):d=o,Wt(ea,ri),ri|=d;return Bn(n,r,m,o),r.child}function cg(n,r){var o=r.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function dd(n,r,o,d,m){var _=$n(o)?ls:Cn.current;return _=Vs(r,_),Ks(r,m),o=td(n,r,o,d,_,m),d=nd(),n!==null&&!qn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~m,dr(n,r,m)):(Zt&&d&&ku(r),r.flags|=1,Bn(n,r,o,m),r.child)}function ug(n,r,o,d,m){if($n(o)){var _=!0;ml(r)}else _=!1;if(Ks(r,m),r.stateNode===null)Dl(n,r),Qm(r,o,d),ld(r,o,d,m),d=!0;else if(n===null){var N=r.stateNode,z=r.memoizedProps;N.props=z;var W=N.context,de=o.contextType;typeof de=="object"&&de!==null?de=pi(de):(de=$n(o)?ls:Cn.current,de=Vs(r,de));var Me=o.getDerivedStateFromProps,Ee=typeof Me=="function"||typeof N.getSnapshotBeforeUpdate=="function";Ee||typeof N.UNSAFE_componentWillReceiveProps!="function"&&typeof N.componentWillReceiveProps!="function"||(z!==d||W!==de)&&Jm(r,N,d,de),Ir=!1;var Se=r.memoizedState;N.state=Se,Tl(r,d,N,m),W=r.memoizedState,z!==d||Se!==W||Xn.current||Ir?(typeof Me=="function"&&(od(r,o,Me,d),W=r.memoizedState),(z=Ir||Zm(r,o,z,d,Se,W,de))?(Ee||typeof N.UNSAFE_componentWillMount!="function"&&typeof N.componentWillMount!="function"||(typeof N.componentWillMount=="function"&&N.componentWillMount(),typeof N.UNSAFE_componentWillMount=="function"&&N.UNSAFE_componentWillMount()),typeof N.componentDidMount=="function"&&(r.flags|=4194308)):(typeof N.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=d,r.memoizedState=W),N.props=d,N.state=W,N.context=de,d=z):(typeof N.componentDidMount=="function"&&(r.flags|=4194308),d=!1)}else{N=r.stateNode,bm(n,r),z=r.memoizedProps,de=r.type===r.elementType?z:Ai(r.type,z),N.props=de,Ee=r.pendingProps,Se=N.context,W=o.contextType,typeof W=="object"&&W!==null?W=pi(W):(W=$n(o)?ls:Cn.current,W=Vs(r,W));var He=o.getDerivedStateFromProps;(Me=typeof He=="function"||typeof N.getSnapshotBeforeUpdate=="function")||typeof N.UNSAFE_componentWillReceiveProps!="function"&&typeof N.componentWillReceiveProps!="function"||(z!==Ee||Se!==W)&&Jm(r,N,d,W),Ir=!1,Se=r.memoizedState,N.state=Se,Tl(r,d,N,m);var We=r.memoizedState;z!==Ee||Se!==We||Xn.current||Ir?(typeof He=="function"&&(od(r,o,He,d),We=r.memoizedState),(de=Ir||Zm(r,o,de,d,Se,We,W)||!1)?(Me||typeof N.UNSAFE_componentWillUpdate!="function"&&typeof N.componentWillUpdate!="function"||(typeof N.componentWillUpdate=="function"&&N.componentWillUpdate(d,We,W),typeof N.UNSAFE_componentWillUpdate=="function"&&N.UNSAFE_componentWillUpdate(d,We,W)),typeof N.componentDidUpdate=="function"&&(r.flags|=4),typeof N.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof N.componentDidUpdate!="function"||z===n.memoizedProps&&Se===n.memoizedState||(r.flags|=4),typeof N.getSnapshotBeforeUpdate!="function"||z===n.memoizedProps&&Se===n.memoizedState||(r.flags|=1024),r.memoizedProps=d,r.memoizedState=We),N.props=d,N.state=We,N.context=W,d=de):(typeof N.componentDidUpdate!="function"||z===n.memoizedProps&&Se===n.memoizedState||(r.flags|=4),typeof N.getSnapshotBeforeUpdate!="function"||z===n.memoizedProps&&Se===n.memoizedState||(r.flags|=1024),d=!1)}return hd(n,r,o,d,_,m)}function hd(n,r,o,d,m,_){cg(n,r);var N=(r.flags&128)!==0;if(!d&&!N)return m&&mm(r,o,!1),dr(n,r,_);d=r.stateNode,k_.current=r;var z=N&&typeof o.getDerivedStateFromError!="function"?null:d.render();return r.flags|=1,n!==null&&N?(r.child=qs(r,n.child,null,_),r.child=qs(r,null,z,_)):Bn(n,r,z,_),r.memoizedState=d.state,m&&mm(r,o,!0),r.child}function dg(n){var r=n.stateNode;r.pendingContext?fm(n,r.pendingContext,r.pendingContext!==r.context):r.context&&fm(n,r.context,!1),Yu(n,r.containerInfo)}function hg(n,r,o,d,m){return $s(),Hu(m),r.flags|=256,Bn(n,r,o,d),r.child}var fd={dehydrated:null,treeContext:null,retryLane:0};function pd(n){return{baseLanes:n,cachePool:null,transitions:null}}function fg(n,r,o){var d=r.pendingProps,m=en.current,_=!1,N=(r.flags&128)!==0,z;if((z=N)||(z=n!==null&&n.memoizedState===null?!1:(m&2)!==0),z?(_=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(m|=1),Wt(en,m&1),n===null)return ju(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(N=d.children,n=d.fallback,_?(d=r.mode,_=r.child,N={mode:"hidden",children:N},(d&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=N):_=Wl(N,d,0,null),n=xs(n,d,o,null),_.return=r,n.return=r,_.sibling=n,r.child=_,r.child.memoizedState=pd(o),r.memoizedState=fd,n):md(r,N));if(m=n.memoizedState,m!==null&&(z=m.dehydrated,z!==null))return B_(n,r,N,d,z,m,o);if(_){_=d.fallback,N=r.mode,m=n.child,z=m.sibling;var W={mode:"hidden",children:d.children};return(N&1)===0&&r.child!==m?(d=r.child,d.childLanes=0,d.pendingProps=W,r.deletions=null):(d=jr(m,W),d.subtreeFlags=m.subtreeFlags&14680064),z!==null?_=jr(z,_):(_=xs(_,N,o,null),_.flags|=2),_.return=r,d.return=r,d.sibling=_,r.child=d,d=_,_=r.child,N=n.child.memoizedState,N=N===null?pd(o):{baseLanes:N.baseLanes|o,cachePool:null,transitions:N.transitions},_.memoizedState=N,_.childLanes=n.childLanes&~o,r.memoizedState=fd,d}return _=n.child,n=_.sibling,d=jr(_,{mode:"visible",children:d.children}),(r.mode&1)===0&&(d.lanes=o),d.return=r,d.sibling=null,n!==null&&(o=r.deletions,o===null?(r.deletions=[n],r.flags|=16):o.push(n)),r.child=d,r.memoizedState=null,d}function md(n,r){return r=Wl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Ll(n,r,o,d){return d!==null&&Hu(d),qs(r,n.child,null,o),n=md(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function B_(n,r,o,d,m,_,N){if(o)return r.flags&256?(r.flags&=-257,d=cd(Error(t(422))),Ll(n,r,N,d)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(_=d.fallback,m=r.mode,d=Wl({mode:"visible",children:d.children},m,0,null),_=xs(_,m,N,null),_.flags|=2,d.return=r,_.return=r,d.sibling=_,r.child=d,(r.mode&1)!==0&&qs(r,n.child,null,N),r.child.memoizedState=pd(N),r.memoizedState=fd,_);if((r.mode&1)===0)return Ll(n,r,N,null);if(m.data==="$!"){if(d=m.nextSibling&&m.nextSibling.dataset,d)var z=d.dgst;return d=z,_=Error(t(419)),d=cd(_,d,void 0),Ll(n,r,N,d)}if(z=(N&n.childLanes)!==0,qn||z){if(d=yn,d!==null){switch(N&-N){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=(m&(d.suspendedLanes|N))!==0?0:m,m!==0&&m!==_.retryLane&&(_.retryLane=m,cr(n,m),Pi(d,n,m,-1))}return Pd(),d=cd(Error(t(421))),Ll(n,r,N,d)}return m.data==="$?"?(r.flags|=128,r.child=n.child,r=Q_.bind(null,n),m._reactRetry=r,null):(n=_.treeContext,ii=Nr(m.nextSibling),ni=r,Zt=!0,Ci=null,n!==null&&(hi[fi++]=or,hi[fi++]=lr,hi[fi++]=cs,or=n.id,lr=n.overflow,cs=r),r=md(r,d.children),r.flags|=4096,r)}function pg(n,r,o){n.lanes|=r;var d=n.alternate;d!==null&&(d.lanes|=r),Xu(n.return,r,o)}function gd(n,r,o,d,m){var _=n.memoizedState;_===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:d,tail:o,tailMode:m}:(_.isBackwards=r,_.rendering=null,_.renderingStartTime=0,_.last=d,_.tail=o,_.tailMode=m)}function mg(n,r,o){var d=r.pendingProps,m=d.revealOrder,_=d.tail;if(Bn(n,r,d.children,o),d=en.current,(d&2)!==0)d=d&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&pg(n,o,r);else if(n.tag===19)pg(n,o,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}d&=1}if(Wt(en,d),(r.mode&1)===0)r.memoizedState=null;else switch(m){case"forwards":for(o=r.child,m=null;o!==null;)n=o.alternate,n!==null&&wl(n)===null&&(m=o),o=o.sibling;o=m,o===null?(m=r.child,r.child=null):(m=o.sibling,o.sibling=null),gd(r,!1,m,o,_);break;case"backwards":for(o=null,m=r.child,r.child=null;m!==null;){if(n=m.alternate,n!==null&&wl(n)===null){r.child=m;break}n=m.sibling,m.sibling=o,o=m,m=n}gd(r,!0,o,null,_);break;case"together":gd(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Dl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function dr(n,r,o){if(n!==null&&(r.dependencies=n.dependencies),ps|=r.lanes,(o&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,o=jr(n,n.pendingProps),r.child=o,o.return=r;n.sibling!==null;)n=n.sibling,o=o.sibling=jr(n,n.pendingProps),o.return=r;o.sibling=null}return r.child}function z_(n,r,o){switch(r.tag){case 3:dg(r),$s();break;case 5:Rm(r);break;case 1:$n(r.type)&&ml(r);break;case 4:Yu(r,r.stateNode.containerInfo);break;case 10:var d=r.type._context,m=r.memoizedProps.value;Wt(Sl,d._currentValue),d._currentValue=m;break;case 13:if(d=r.memoizedState,d!==null)return d.dehydrated!==null?(Wt(en,en.current&1),r.flags|=128,null):(o&r.child.childLanes)!==0?fg(n,r,o):(Wt(en,en.current&1),n=dr(n,r,o),n!==null?n.sibling:null);Wt(en,en.current&1);break;case 19:if(d=(o&r.childLanes)!==0,(n.flags&128)!==0){if(d)return mg(n,r,o);r.flags|=128}if(m=r.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),Wt(en,en.current),d)break;return null;case 22:case 23:return r.lanes=0,lg(n,r,o)}return dr(n,r,o)}var gg,vd,vg,xg;gg=function(n,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},vd=function(){},vg=function(n,r,o,d){var m=n.memoizedProps;if(m!==d){n=r.stateNode,hs(Hi.current);var _=null;switch(o){case"input":m=ft(n,m),d=ft(n,d),_=[];break;case"select":m=re({},m,{value:void 0}),d=re({},d,{value:void 0}),_=[];break;case"textarea":m=_t(n,m),d=_t(n,d),_=[];break;default:typeof m.onClick!="function"&&typeof d.onClick=="function"&&(n.onclick=hl)}ze(o,d);var N;o=null;for(de in m)if(!d.hasOwnProperty(de)&&m.hasOwnProperty(de)&&m[de]!=null)if(de==="style"){var z=m[de];for(N in z)z.hasOwnProperty(N)&&(o||(o={}),o[N]="")}else de!=="dangerouslySetInnerHTML"&&de!=="children"&&de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&de!=="autoFocus"&&(a.hasOwnProperty(de)?_||(_=[]):(_=_||[]).push(de,null));for(de in d){var W=d[de];if(z=m!=null?m[de]:void 0,d.hasOwnProperty(de)&&W!==z&&(W!=null||z!=null))if(de==="style")if(z){for(N in z)!z.hasOwnProperty(N)||W&&W.hasOwnProperty(N)||(o||(o={}),o[N]="");for(N in W)W.hasOwnProperty(N)&&z[N]!==W[N]&&(o||(o={}),o[N]=W[N])}else o||(_||(_=[]),_.push(de,o)),o=W;else de==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,z=z?z.__html:void 0,W!=null&&z!==W&&(_=_||[]).push(de,W)):de==="children"?typeof W!="string"&&typeof W!="number"||(_=_||[]).push(de,""+W):de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&(a.hasOwnProperty(de)?(W!=null&&de==="onScroll"&&qt("scroll",n),_||z===W||(_=[])):(_=_||[]).push(de,W))}o&&(_=_||[]).push("style",o);var de=_;(r.updateQueue=de)&&(r.flags|=4)}},xg=function(n,r,o,d){o!==d&&(r.flags|=4)};function xo(n,r){if(!Zt)switch(n.tailMode){case"hidden":r=n.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var d=null;o!==null;)o.alternate!==null&&(d=o),o=o.sibling;d===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:d.sibling=null}}function Rn(n){var r=n.alternate!==null&&n.alternate.child===n.child,o=0,d=0;if(r)for(var m=n.child;m!==null;)o|=m.lanes|m.childLanes,d|=m.subtreeFlags&14680064,d|=m.flags&14680064,m.return=n,m=m.sibling;else for(m=n.child;m!==null;)o|=m.lanes|m.childLanes,d|=m.subtreeFlags,d|=m.flags,m.return=n,m=m.sibling;return n.subtreeFlags|=d,n.childLanes=o,r}function j_(n,r,o){var d=r.pendingProps;switch(Bu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Rn(r),null;case 1:return $n(r.type)&&pl(),Rn(r),null;case 3:return d=r.stateNode,Zs(),Yt(Xn),Yt(Cn),Qu(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(n===null||n.child===null)&&(_l(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Ci!==null&&(Ad(Ci),Ci=null))),vd(n,r),Rn(r),null;case 5:Ku(r);var m=hs(fo.current);if(o=r.type,n!==null&&r.stateNode!=null)vg(n,r,o,d,m),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!d){if(r.stateNode===null)throw Error(t(166));return Rn(r),null}if(n=hs(Hi.current),_l(r)){d=r.stateNode,o=r.type;var _=r.memoizedProps;switch(d[ji]=r,d[oo]=_,n=(r.mode&1)!==0,o){case"dialog":qt("cancel",d),qt("close",d);break;case"iframe":case"object":case"embed":qt("load",d);break;case"video":case"audio":for(m=0;m<ro.length;m++)qt(ro[m],d);break;case"source":qt("error",d);break;case"img":case"image":case"link":qt("error",d),qt("load",d);break;case"details":qt("toggle",d);break;case"input":wt(d,_),qt("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!_.multiple},qt("invalid",d);break;case"textarea":Ot(d,_),qt("invalid",d)}ze(o,_),m=null;for(var N in _)if(_.hasOwnProperty(N)){var z=_[N];N==="children"?typeof z=="string"?d.textContent!==z&&(_.suppressHydrationWarning!==!0&&dl(d.textContent,z,n),m=["children",z]):typeof z=="number"&&d.textContent!==""+z&&(_.suppressHydrationWarning!==!0&&dl(d.textContent,z,n),m=["children",""+z]):a.hasOwnProperty(N)&&z!=null&&N==="onScroll"&&qt("scroll",d)}switch(o){case"input":nt(d),Ct(d,_,!0);break;case"textarea":nt(d),Xt(d);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(d.onclick=hl)}d=m,r.updateQueue=d,d!==null&&(r.flags|=4)}else{N=m.nodeType===9?m:m.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=I(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=N.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof d.is=="string"?n=N.createElement(o,{is:d.is}):(n=N.createElement(o),o==="select"&&(N=n,d.multiple?N.multiple=!0:d.size&&(N.size=d.size))):n=N.createElementNS(n,o),n[ji]=r,n[oo]=d,gg(n,r,!1,!1),r.stateNode=n;e:{switch(N=Re(o,d),o){case"dialog":qt("cancel",n),qt("close",n),m=d;break;case"iframe":case"object":case"embed":qt("load",n),m=d;break;case"video":case"audio":for(m=0;m<ro.length;m++)qt(ro[m],n);m=d;break;case"source":qt("error",n),m=d;break;case"img":case"image":case"link":qt("error",n),qt("load",n),m=d;break;case"details":qt("toggle",n),m=d;break;case"input":wt(n,d),m=ft(n,d),qt("invalid",n);break;case"option":m=d;break;case"select":n._wrapperState={wasMultiple:!!d.multiple},m=re({},d,{value:void 0}),qt("invalid",n);break;case"textarea":Ot(n,d),m=_t(n,d),qt("invalid",n);break;default:m=d}ze(o,m),z=m;for(_ in z)if(z.hasOwnProperty(_)){var W=z[_];_==="style"?xe(n,W):_==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,W!=null&&ve(n,W)):_==="children"?typeof W=="string"?(o!=="textarea"||W!=="")&&_e(n,W):typeof W=="number"&&_e(n,""+W):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(a.hasOwnProperty(_)?W!=null&&_==="onScroll"&&qt("scroll",n):W!=null&&E(n,_,W,N))}switch(o){case"input":nt(n),Ct(n,d,!1);break;case"textarea":nt(n),Xt(n);break;case"option":d.value!=null&&n.setAttribute("value",""+fe(d.value));break;case"select":n.multiple=!!d.multiple,_=d.value,_!=null?Gt(n,!!d.multiple,_,!1):d.defaultValue!=null&&Gt(n,!!d.multiple,d.defaultValue,!0);break;default:typeof m.onClick=="function"&&(n.onclick=hl)}switch(o){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Rn(r),null;case 6:if(n&&r.stateNode!=null)xg(n,r,n.memoizedProps,d);else{if(typeof d!="string"&&r.stateNode===null)throw Error(t(166));if(o=hs(fo.current),hs(Hi.current),_l(r)){if(d=r.stateNode,o=r.memoizedProps,d[ji]=r,(_=d.nodeValue!==o)&&(n=ni,n!==null))switch(n.tag){case 3:dl(d.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&dl(d.nodeValue,o,(n.mode&1)!==0)}_&&(r.flags|=4)}else d=(o.nodeType===9?o:o.ownerDocument).createTextNode(d),d[ji]=r,r.stateNode=d}return Rn(r),null;case 13:if(Yt(en),d=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Zt&&ii!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Sm(),$s(),r.flags|=98560,_=!1;else if(_=_l(r),d!==null&&d.dehydrated!==null){if(n===null){if(!_)throw Error(t(318));if(_=r.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[ji]=r}else $s(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Rn(r),_=!1}else Ci!==null&&(Ad(Ci),Ci=null),_=!0;if(!_)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=o,r):(d=d!==null,d!==(n!==null&&n.memoizedState!==null)&&d&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(en.current&1)!==0?pn===0&&(pn=3):Pd())),r.updateQueue!==null&&(r.flags|=4),Rn(r),null);case 4:return Zs(),vd(n,r),n===null&&so(r.stateNode.containerInfo),Rn(r),null;case 10:return Wu(r.type._context),Rn(r),null;case 17:return $n(r.type)&&pl(),Rn(r),null;case 19:if(Yt(en),_=r.memoizedState,_===null)return Rn(r),null;if(d=(r.flags&128)!==0,N=_.rendering,N===null)if(d)xo(_,!1);else{if(pn!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(N=wl(n),N!==null){for(r.flags|=128,xo(_,!1),d=N.updateQueue,d!==null&&(r.updateQueue=d,r.flags|=4),r.subtreeFlags=0,d=o,o=r.child;o!==null;)_=o,n=d,_.flags&=14680066,N=_.alternate,N===null?(_.childLanes=0,_.lanes=n,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=N.childLanes,_.lanes=N.lanes,_.child=N.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=N.memoizedProps,_.memoizedState=N.memoizedState,_.updateQueue=N.updateQueue,_.type=N.type,n=N.dependencies,_.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Wt(en,en.current&1|2),r.child}n=n.sibling}_.tail!==null&&Jt()>ta&&(r.flags|=128,d=!0,xo(_,!1),r.lanes=4194304)}else{if(!d)if(n=wl(N),n!==null){if(r.flags|=128,d=!0,o=n.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),xo(_,!0),_.tail===null&&_.tailMode==="hidden"&&!N.alternate&&!Zt)return Rn(r),null}else 2*Jt()-_.renderingStartTime>ta&&o!==1073741824&&(r.flags|=128,d=!0,xo(_,!1),r.lanes=4194304);_.isBackwards?(N.sibling=r.child,r.child=N):(o=_.last,o!==null?o.sibling=N:r.child=N,_.last=N)}return _.tail!==null?(r=_.tail,_.rendering=r,_.tail=r.sibling,_.renderingStartTime=Jt(),r.sibling=null,o=en.current,Wt(en,d?o&1|2:o&1),r):(Rn(r),null);case 22:case 23:return Nd(),d=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==d&&(r.flags|=8192),d&&(r.mode&1)!==0?(ri&1073741824)!==0&&(Rn(r),r.subtreeFlags&6&&(r.flags|=8192)):Rn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function H_(n,r){switch(Bu(r),r.tag){case 1:return $n(r.type)&&pl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Zs(),Yt(Xn),Yt(Cn),Qu(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return Ku(r),null;case 13:if(Yt(en),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));$s()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Yt(en),null;case 4:return Zs(),null;case 10:return Wu(r.type._context),null;case 22:case 23:return Nd(),null;case 24:return null;default:return null}}var Il=!1,Nn=!1,G_=typeof WeakSet=="function"?WeakSet:Set,Ve=null;function Js(n,r){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(d){sn(n,r,d)}else o.current=null}function xd(n,r,o){try{o()}catch(d){sn(n,r,d)}}var _g=!1;function V_(n,r){if(Nu=el,n=Zp(),Mu(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var d=o.getSelection&&o.getSelection();if(d&&d.rangeCount!==0){o=d.anchorNode;var m=d.anchorOffset,_=d.focusNode;d=d.focusOffset;try{o.nodeType,_.nodeType}catch{o=null;break e}var N=0,z=-1,W=-1,de=0,Me=0,Ee=n,Se=null;t:for(;;){for(var He;Ee!==o||m!==0&&Ee.nodeType!==3||(z=N+m),Ee!==_||d!==0&&Ee.nodeType!==3||(W=N+d),Ee.nodeType===3&&(N+=Ee.nodeValue.length),(He=Ee.firstChild)!==null;)Se=Ee,Ee=He;for(;;){if(Ee===n)break t;if(Se===o&&++de===m&&(z=N),Se===_&&++Me===d&&(W=N),(He=Ee.nextSibling)!==null)break;Ee=Se,Se=Ee.parentNode}Ee=He}o=z===-1||W===-1?null:{start:z,end:W}}else o=null}o=o||{start:0,end:0}}else o=null;for(Pu={focusedElem:n,selectionRange:o},el=!1,Ve=r;Ve!==null;)if(r=Ve,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Ve=n;else for(;Ve!==null;){r=Ve;try{var We=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(We!==null){var Ye=We.memoizedProps,on=We.memoizedState,se=r.stateNode,K=se.getSnapshotBeforeUpdate(r.elementType===r.type?Ye:Ai(r.type,Ye),on);se.__reactInternalSnapshotBeforeUpdate=K}break;case 3:var ce=r.stateNode.containerInfo;ce.nodeType===1?ce.textContent="":ce.nodeType===9&&ce.documentElement&&ce.removeChild(ce.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(be){sn(r,r.return,be)}if(n=r.sibling,n!==null){n.return=r.return,Ve=n;break}Ve=r.return}return We=_g,_g=!1,We}function _o(n,r,o){var d=r.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var m=d=d.next;do{if((m.tag&n)===n){var _=m.destroy;m.destroy=void 0,_!==void 0&&xd(r,o,_)}m=m.next}while(m!==d)}}function Ul(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&n)===n){var d=o.create;o.destroy=d()}o=o.next}while(o!==r)}}function _d(n){var r=n.ref;if(r!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof r=="function"?r(n):r.current=n}}function yg(n){var r=n.alternate;r!==null&&(n.alternate=null,yg(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[ji],delete r[oo],delete r[Uu],delete r[b_],delete r[C_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Sg(n){return n.tag===5||n.tag===3||n.tag===4}function Mg(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Sg(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function yd(n,r,o){var d=n.tag;if(d===5||d===6)n=n.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(n,r):o.insertBefore(n,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(n,o)):(r=o,r.appendChild(n)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=hl));else if(d!==4&&(n=n.child,n!==null))for(yd(n,r,o),n=n.sibling;n!==null;)yd(n,r,o),n=n.sibling}function Sd(n,r,o){var d=n.tag;if(d===5||d===6)n=n.stateNode,r?o.insertBefore(n,r):o.appendChild(n);else if(d!==4&&(n=n.child,n!==null))for(Sd(n,r,o),n=n.sibling;n!==null;)Sd(n,r,o),n=n.sibling}var Tn=null,Ri=!1;function Fr(n,r,o){for(o=o.child;o!==null;)Eg(n,r,o),o=o.sibling}function Eg(n,r,o){if(De&&typeof De.onCommitFiberUnmount=="function")try{De.onCommitFiberUnmount(ae,o)}catch{}switch(o.tag){case 5:Nn||Js(o,r);case 6:var d=Tn,m=Ri;Tn=null,Fr(n,r,o),Tn=d,Ri=m,Tn!==null&&(Ri?(n=Tn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):Tn.removeChild(o.stateNode));break;case 18:Tn!==null&&(Ri?(n=Tn,o=o.stateNode,n.nodeType===8?Iu(n.parentNode,o):n.nodeType===1&&Iu(n,o),Ka(n)):Iu(Tn,o.stateNode));break;case 4:d=Tn,m=Ri,Tn=o.stateNode.containerInfo,Ri=!0,Fr(n,r,o),Tn=d,Ri=m;break;case 0:case 11:case 14:case 15:if(!Nn&&(d=o.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){m=d=d.next;do{var _=m,N=_.destroy;_=_.tag,N!==void 0&&((_&2)!==0||(_&4)!==0)&&xd(o,r,N),m=m.next}while(m!==d)}Fr(n,r,o);break;case 1:if(!Nn&&(Js(o,r),d=o.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=o.memoizedProps,d.state=o.memoizedState,d.componentWillUnmount()}catch(z){sn(o,r,z)}Fr(n,r,o);break;case 21:Fr(n,r,o);break;case 22:o.mode&1?(Nn=(d=Nn)||o.memoizedState!==null,Fr(n,r,o),Nn=d):Fr(n,r,o);break;default:Fr(n,r,o)}}function Tg(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new G_),r.forEach(function(d){var m=J_.bind(null,n,d);o.has(d)||(o.add(d),d.then(m,m))})}}function Ni(n,r){var o=r.deletions;if(o!==null)for(var d=0;d<o.length;d++){var m=o[d];try{var _=n,N=r,z=N;e:for(;z!==null;){switch(z.tag){case 5:Tn=z.stateNode,Ri=!1;break e;case 3:Tn=z.stateNode.containerInfo,Ri=!0;break e;case 4:Tn=z.stateNode.containerInfo,Ri=!0;break e}z=z.return}if(Tn===null)throw Error(t(160));Eg(_,N,m),Tn=null,Ri=!1;var W=m.alternate;W!==null&&(W.return=null),m.return=null}catch(de){sn(m,r,de)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)wg(r,n),r=r.sibling}function wg(n,r){var o=n.alternate,d=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ni(r,n),Vi(n),d&4){try{_o(3,n,n.return),Ul(3,n)}catch(Ye){sn(n,n.return,Ye)}try{_o(5,n,n.return)}catch(Ye){sn(n,n.return,Ye)}}break;case 1:Ni(r,n),Vi(n),d&512&&o!==null&&Js(o,o.return);break;case 5:if(Ni(r,n),Vi(n),d&512&&o!==null&&Js(o,o.return),n.flags&32){var m=n.stateNode;try{_e(m,"")}catch(Ye){sn(n,n.return,Ye)}}if(d&4&&(m=n.stateNode,m!=null)){var _=n.memoizedProps,N=o!==null?o.memoizedProps:_,z=n.type,W=n.updateQueue;if(n.updateQueue=null,W!==null)try{z==="input"&&_.type==="radio"&&_.name!=null&&rt(m,_),Re(z,N);var de=Re(z,_);for(N=0;N<W.length;N+=2){var Me=W[N],Ee=W[N+1];Me==="style"?xe(m,Ee):Me==="dangerouslySetInnerHTML"?ve(m,Ee):Me==="children"?_e(m,Ee):E(m,Me,Ee,de)}switch(z){case"input":Lt(m,_);break;case"textarea":Ue(m,_);break;case"select":var Se=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!_.multiple;var He=_.value;He!=null?Gt(m,!!_.multiple,He,!1):Se!==!!_.multiple&&(_.defaultValue!=null?Gt(m,!!_.multiple,_.defaultValue,!0):Gt(m,!!_.multiple,_.multiple?[]:"",!1))}m[oo]=_}catch(Ye){sn(n,n.return,Ye)}}break;case 6:if(Ni(r,n),Vi(n),d&4){if(n.stateNode===null)throw Error(t(162));m=n.stateNode,_=n.memoizedProps;try{m.nodeValue=_}catch(Ye){sn(n,n.return,Ye)}}break;case 3:if(Ni(r,n),Vi(n),d&4&&o!==null&&o.memoizedState.isDehydrated)try{Ka(r.containerInfo)}catch(Ye){sn(n,n.return,Ye)}break;case 4:Ni(r,n),Vi(n);break;case 13:Ni(r,n),Vi(n),m=n.child,m.flags&8192&&(_=m.memoizedState!==null,m.stateNode.isHidden=_,!_||m.alternate!==null&&m.alternate.memoizedState!==null||(Td=Jt())),d&4&&Tg(n);break;case 22:if(Me=o!==null&&o.memoizedState!==null,n.mode&1?(Nn=(de=Nn)||Me,Ni(r,n),Nn=de):Ni(r,n),Vi(n),d&8192){if(de=n.memoizedState!==null,(n.stateNode.isHidden=de)&&!Me&&(n.mode&1)!==0)for(Ve=n,Me=n.child;Me!==null;){for(Ee=Ve=Me;Ve!==null;){switch(Se=Ve,He=Se.child,Se.tag){case 0:case 11:case 14:case 15:_o(4,Se,Se.return);break;case 1:Js(Se,Se.return);var We=Se.stateNode;if(typeof We.componentWillUnmount=="function"){d=Se,o=Se.return;try{r=d,We.props=r.memoizedProps,We.state=r.memoizedState,We.componentWillUnmount()}catch(Ye){sn(d,o,Ye)}}break;case 5:Js(Se,Se.return);break;case 22:if(Se.memoizedState!==null){Ag(Ee);continue}}He!==null?(He.return=Se,Ve=He):Ag(Ee)}Me=Me.sibling}e:for(Me=null,Ee=n;;){if(Ee.tag===5){if(Me===null){Me=Ee;try{m=Ee.stateNode,de?(_=m.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(z=Ee.stateNode,W=Ee.memoizedProps.style,N=W!=null&&W.hasOwnProperty("display")?W.display:null,z.style.display=pe("display",N))}catch(Ye){sn(n,n.return,Ye)}}}else if(Ee.tag===6){if(Me===null)try{Ee.stateNode.nodeValue=de?"":Ee.memoizedProps}catch(Ye){sn(n,n.return,Ye)}}else if((Ee.tag!==22&&Ee.tag!==23||Ee.memoizedState===null||Ee===n)&&Ee.child!==null){Ee.child.return=Ee,Ee=Ee.child;continue}if(Ee===n)break e;for(;Ee.sibling===null;){if(Ee.return===null||Ee.return===n)break e;Me===Ee&&(Me=null),Ee=Ee.return}Me===Ee&&(Me=null),Ee.sibling.return=Ee.return,Ee=Ee.sibling}}break;case 19:Ni(r,n),Vi(n),d&4&&Tg(n);break;case 21:break;default:Ni(r,n),Vi(n)}}function Vi(n){var r=n.flags;if(r&2){try{e:{for(var o=n.return;o!==null;){if(Sg(o)){var d=o;break e}o=o.return}throw Error(t(160))}switch(d.tag){case 5:var m=d.stateNode;d.flags&32&&(_e(m,""),d.flags&=-33);var _=Mg(n);Sd(n,_,m);break;case 3:case 4:var N=d.stateNode.containerInfo,z=Mg(n);yd(n,z,N);break;default:throw Error(t(161))}}catch(W){sn(n,n.return,W)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function W_(n,r,o){Ve=n,bg(n)}function bg(n,r,o){for(var d=(n.mode&1)!==0;Ve!==null;){var m=Ve,_=m.child;if(m.tag===22&&d){var N=m.memoizedState!==null||Il;if(!N){var z=m.alternate,W=z!==null&&z.memoizedState!==null||Nn;z=Il;var de=Nn;if(Il=N,(Nn=W)&&!de)for(Ve=m;Ve!==null;)N=Ve,W=N.child,N.tag===22&&N.memoizedState!==null?Rg(m):W!==null?(W.return=N,Ve=W):Rg(m);for(;_!==null;)Ve=_,bg(_),_=_.sibling;Ve=m,Il=z,Nn=de}Cg(n)}else(m.subtreeFlags&8772)!==0&&_!==null?(_.return=m,Ve=_):Cg(n)}}function Cg(n){for(;Ve!==null;){var r=Ve;if((r.flags&8772)!==0){var o=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Nn||Ul(5,r);break;case 1:var d=r.stateNode;if(r.flags&4&&!Nn)if(o===null)d.componentDidMount();else{var m=r.elementType===r.type?o.memoizedProps:Ai(r.type,o.memoizedProps);d.componentDidUpdate(m,o.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var _=r.updateQueue;_!==null&&Am(r,_,d);break;case 3:var N=r.updateQueue;if(N!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}Am(r,N,o)}break;case 5:var z=r.stateNode;if(o===null&&r.flags&4){o=z;var W=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":W.autoFocus&&o.focus();break;case"img":W.src&&(o.src=W.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var de=r.alternate;if(de!==null){var Me=de.memoizedState;if(Me!==null){var Ee=Me.dehydrated;Ee!==null&&Ka(Ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Nn||r.flags&512&&_d(r)}catch(Se){sn(r,r.return,Se)}}if(r===n){Ve=null;break}if(o=r.sibling,o!==null){o.return=r.return,Ve=o;break}Ve=r.return}}function Ag(n){for(;Ve!==null;){var r=Ve;if(r===n){Ve=null;break}var o=r.sibling;if(o!==null){o.return=r.return,Ve=o;break}Ve=r.return}}function Rg(n){for(;Ve!==null;){var r=Ve;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{Ul(4,r)}catch(W){sn(r,o,W)}break;case 1:var d=r.stateNode;if(typeof d.componentDidMount=="function"){var m=r.return;try{d.componentDidMount()}catch(W){sn(r,m,W)}}var _=r.return;try{_d(r)}catch(W){sn(r,_,W)}break;case 5:var N=r.return;try{_d(r)}catch(W){sn(r,N,W)}}}catch(W){sn(r,r.return,W)}if(r===n){Ve=null;break}var z=r.sibling;if(z!==null){z.return=r.return,Ve=z;break}Ve=r.return}}var X_=Math.ceil,Fl=w.ReactCurrentDispatcher,Md=w.ReactCurrentOwner,gi=w.ReactCurrentBatchConfig,Pt=0,yn=null,dn=null,wn=0,ri=0,ea=Pr(0),pn=0,yo=null,ps=0,Ol=0,Ed=0,So=null,Yn=null,Td=0,ta=1/0,hr=null,kl=!1,wd=null,Or=null,Bl=!1,kr=null,zl=0,Mo=0,bd=null,jl=-1,Hl=0;function zn(){return(Pt&6)!==0?Jt():jl!==-1?jl:jl=Jt()}function Br(n){return(n.mode&1)===0?1:(Pt&2)!==0&&wn!==0?wn&-wn:R_.transition!==null?(Hl===0&&(Hl=je()),Hl):(n=Et,n!==0||(n=window.event,n=n===void 0?16:Pp(n.type)),n)}function Pi(n,r,o,d){if(50<Mo)throw Mo=0,bd=null,Error(t(185));Mt(n,o,d),((Pt&2)===0||n!==yn)&&(n===yn&&((Pt&2)===0&&(Ol|=o),pn===4&&zr(n,wn)),Kn(n,d),o===1&&Pt===0&&(r.mode&1)===0&&(ta=Jt()+500,gl&&Dr()))}function Kn(n,r){var o=n.callbackNode;kt(n,r);var d=Vt(n,n===yn?wn:0);if(d===0)o!==null&&Qo(o),n.callbackNode=null,n.callbackPriority=0;else if(r=d&-d,n.callbackPriority!==r){if(o!=null&&Qo(o),r===1)n.tag===0?A_(Pg.bind(null,n)):gm(Pg.bind(null,n)),T_(function(){(Pt&6)===0&&Dr()}),o=null;else{switch(rr(d)){case 1:o=Wa;break;case 4:o=P;break;case 16:o=ee;break;case 536870912:o=le;break;default:o=ee}o=Bg(o,Ng.bind(null,n))}n.callbackPriority=r,n.callbackNode=o}}function Ng(n,r){if(jl=-1,Hl=0,(Pt&6)!==0)throw Error(t(327));var o=n.callbackNode;if(na()&&n.callbackNode!==o)return null;var d=Vt(n,n===yn?wn:0);if(d===0)return null;if((d&30)!==0||(d&n.expiredLanes)!==0||r)r=Gl(n,d);else{r=d;var m=Pt;Pt|=2;var _=Dg();(yn!==n||wn!==r)&&(hr=null,ta=Jt()+500,gs(n,r));do try{Y_();break}catch(z){Lg(n,z)}while(!0);Vu(),Fl.current=_,Pt=m,dn!==null?r=0:(yn=null,wn=0,r=pn)}if(r!==0){if(r===2&&(m=un(n),m!==0&&(d=m,r=Cd(n,m))),r===1)throw o=yo,gs(n,0),zr(n,d),Kn(n,Jt()),o;if(r===6)zr(n,d);else{if(m=n.current.alternate,(d&30)===0&&!$_(m)&&(r=Gl(n,d),r===2&&(_=un(n),_!==0&&(d=_,r=Cd(n,_))),r===1))throw o=yo,gs(n,0),zr(n,d),Kn(n,Jt()),o;switch(n.finishedWork=m,n.finishedLanes=d,r){case 0:case 1:throw Error(t(345));case 2:vs(n,Yn,hr);break;case 3:if(zr(n,d),(d&130023424)===d&&(r=Td+500-Jt(),10<r)){if(Vt(n,0)!==0)break;if(m=n.suspendedLanes,(m&d)!==d){zn(),n.pingedLanes|=n.suspendedLanes&m;break}n.timeoutHandle=Du(vs.bind(null,n,Yn,hr),r);break}vs(n,Yn,hr);break;case 4:if(zr(n,d),(d&4194240)===d)break;for(r=n.eventTimes,m=-1;0<d;){var N=31-Ne(d);_=1<<N,N=r[N],N>m&&(m=N),d&=~_}if(d=m,d=Jt()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*X_(d/1960))-d,10<d){n.timeoutHandle=Du(vs.bind(null,n,Yn,hr),d);break}vs(n,Yn,hr);break;case 5:vs(n,Yn,hr);break;default:throw Error(t(329))}}}return Kn(n,Jt()),n.callbackNode===o?Ng.bind(null,n):null}function Cd(n,r){var o=So;return n.current.memoizedState.isDehydrated&&(gs(n,r).flags|=256),n=Gl(n,r),n!==2&&(r=Yn,Yn=o,r!==null&&Ad(r)),n}function Ad(n){Yn===null?Yn=n:Yn.push.apply(Yn,n)}function $_(n){for(var r=n;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var d=0;d<o.length;d++){var m=o[d],_=m.getSnapshot;m=m.value;try{if(!bi(_(),m))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function zr(n,r){for(r&=~Ed,r&=~Ol,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var o=31-Ne(r),d=1<<o;n[o]=-1,r&=~d}}function Pg(n){if((Pt&6)!==0)throw Error(t(327));na();var r=Vt(n,0);if((r&1)===0)return Kn(n,Jt()),null;var o=Gl(n,r);if(n.tag!==0&&o===2){var d=un(n);d!==0&&(r=d,o=Cd(n,d))}if(o===1)throw o=yo,gs(n,0),zr(n,r),Kn(n,Jt()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,vs(n,Yn,hr),Kn(n,Jt()),null}function Rd(n,r){var o=Pt;Pt|=1;try{return n(r)}finally{Pt=o,Pt===0&&(ta=Jt()+500,gl&&Dr())}}function ms(n){kr!==null&&kr.tag===0&&(Pt&6)===0&&na();var r=Pt;Pt|=1;var o=gi.transition,d=Et;try{if(gi.transition=null,Et=1,n)return n()}finally{Et=d,gi.transition=o,Pt=r,(Pt&6)===0&&Dr()}}function Nd(){ri=ea.current,Yt(ea)}function gs(n,r){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,E_(o)),dn!==null)for(o=dn.return;o!==null;){var d=o;switch(Bu(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&pl();break;case 3:Zs(),Yt(Xn),Yt(Cn),Qu();break;case 5:Ku(d);break;case 4:Zs();break;case 13:Yt(en);break;case 19:Yt(en);break;case 10:Wu(d.type._context);break;case 22:case 23:Nd()}o=o.return}if(yn=n,dn=n=jr(n.current,null),wn=ri=r,pn=0,yo=null,Ed=Ol=ps=0,Yn=So=null,ds!==null){for(r=0;r<ds.length;r++)if(o=ds[r],d=o.interleaved,d!==null){o.interleaved=null;var m=d.next,_=o.pending;if(_!==null){var N=_.next;_.next=m,d.next=N}o.pending=d}ds=null}return n}function Lg(n,r){do{var o=dn;try{if(Vu(),bl.current=Nl,Cl){for(var d=tn.memoizedState;d!==null;){var m=d.queue;m!==null&&(m.pending=null),d=d.next}Cl=!1}if(fs=0,_n=fn=tn=null,po=!1,mo=0,Md.current=null,o===null||o.return===null){pn=1,yo=r,dn=null;break}e:{var _=n,N=o.return,z=o,W=r;if(r=wn,z.flags|=32768,W!==null&&typeof W=="object"&&typeof W.then=="function"){var de=W,Me=z,Ee=Me.tag;if((Me.mode&1)===0&&(Ee===0||Ee===11||Ee===15)){var Se=Me.alternate;Se?(Me.updateQueue=Se.updateQueue,Me.memoizedState=Se.memoizedState,Me.lanes=Se.lanes):(Me.updateQueue=null,Me.memoizedState=null)}var He=ig(N);if(He!==null){He.flags&=-257,rg(He,N,z,_,r),He.mode&1&&ng(_,de,r),r=He,W=de;var We=r.updateQueue;if(We===null){var Ye=new Set;Ye.add(W),r.updateQueue=Ye}else We.add(W);break e}else{if((r&1)===0){ng(_,de,r),Pd();break e}W=Error(t(426))}}else if(Zt&&z.mode&1){var on=ig(N);if(on!==null){(on.flags&65536)===0&&(on.flags|=256),rg(on,N,z,_,r),Hu(Qs(W,z));break e}}_=W=Qs(W,z),pn!==4&&(pn=2),So===null?So=[_]:So.push(_),_=N;do{switch(_.tag){case 3:_.flags|=65536,r&=-r,_.lanes|=r;var se=eg(_,W,r);Cm(_,se);break e;case 1:z=W;var K=_.type,ce=_.stateNode;if((_.flags&128)===0&&(typeof K.getDerivedStateFromError=="function"||ce!==null&&typeof ce.componentDidCatch=="function"&&(Or===null||!Or.has(ce)))){_.flags|=65536,r&=-r,_.lanes|=r;var be=tg(_,z,r);Cm(_,be);break e}}_=_.return}while(_!==null)}Ug(o)}catch(Je){r=Je,dn===o&&o!==null&&(dn=o=o.return);continue}break}while(!0)}function Dg(){var n=Fl.current;return Fl.current=Nl,n===null?Nl:n}function Pd(){(pn===0||pn===3||pn===2)&&(pn=4),yn===null||(ps&268435455)===0&&(Ol&268435455)===0||zr(yn,wn)}function Gl(n,r){var o=Pt;Pt|=2;var d=Dg();(yn!==n||wn!==r)&&(hr=null,gs(n,r));do try{q_();break}catch(m){Lg(n,m)}while(!0);if(Vu(),Pt=o,Fl.current=d,dn!==null)throw Error(t(261));return yn=null,wn=0,pn}function q_(){for(;dn!==null;)Ig(dn)}function Y_(){for(;dn!==null&&!lu();)Ig(dn)}function Ig(n){var r=kg(n.alternate,n,ri);n.memoizedProps=n.pendingProps,r===null?Ug(n):dn=r,Md.current=null}function Ug(n){var r=n;do{var o=r.alternate;if(n=r.return,(r.flags&32768)===0){if(o=j_(o,r,ri),o!==null){dn=o;return}}else{if(o=H_(o,r),o!==null){o.flags&=32767,dn=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{pn=6,dn=null;return}}if(r=r.sibling,r!==null){dn=r;return}dn=r=n}while(r!==null);pn===0&&(pn=5)}function vs(n,r,o){var d=Et,m=gi.transition;try{gi.transition=null,Et=1,K_(n,r,o,d)}finally{gi.transition=m,Et=d}return null}function K_(n,r,o,d){do na();while(kr!==null);if((Pt&6)!==0)throw Error(t(327));o=n.finishedWork;var m=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var _=o.lanes|o.childLanes;if(Vn(n,_),n===yn&&(dn=yn=null,wn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Bl||(Bl=!0,Bg(ee,function(){return na(),null})),_=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||_){_=gi.transition,gi.transition=null;var N=Et;Et=1;var z=Pt;Pt|=4,Md.current=null,V_(n,o),wg(o,n),g_(Pu),el=!!Nu,Pu=Nu=null,n.current=o,W_(o),cu(),Pt=z,Et=N,gi.transition=_}else n.current=o;if(Bl&&(Bl=!1,kr=n,zl=m),_=n.pendingLanes,_===0&&(Or=null),Ge(o.stateNode),Kn(n,Jt()),r!==null)for(d=n.onRecoverableError,o=0;o<r.length;o++)m=r[o],d(m.value,{componentStack:m.stack,digest:m.digest});if(kl)throw kl=!1,n=wd,wd=null,n;return(zl&1)!==0&&n.tag!==0&&na(),_=n.pendingLanes,(_&1)!==0?n===bd?Mo++:(Mo=0,bd=n):Mo=0,Dr(),null}function na(){if(kr!==null){var n=rr(zl),r=gi.transition,o=Et;try{if(gi.transition=null,Et=16>n?16:n,kr===null)var d=!1;else{if(n=kr,kr=null,zl=0,(Pt&6)!==0)throw Error(t(331));var m=Pt;for(Pt|=4,Ve=n.current;Ve!==null;){var _=Ve,N=_.child;if((Ve.flags&16)!==0){var z=_.deletions;if(z!==null){for(var W=0;W<z.length;W++){var de=z[W];for(Ve=de;Ve!==null;){var Me=Ve;switch(Me.tag){case 0:case 11:case 15:_o(8,Me,_)}var Ee=Me.child;if(Ee!==null)Ee.return=Me,Ve=Ee;else for(;Ve!==null;){Me=Ve;var Se=Me.sibling,He=Me.return;if(yg(Me),Me===de){Ve=null;break}if(Se!==null){Se.return=He,Ve=Se;break}Ve=He}}}var We=_.alternate;if(We!==null){var Ye=We.child;if(Ye!==null){We.child=null;do{var on=Ye.sibling;Ye.sibling=null,Ye=on}while(Ye!==null)}}Ve=_}}if((_.subtreeFlags&2064)!==0&&N!==null)N.return=_,Ve=N;else e:for(;Ve!==null;){if(_=Ve,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:_o(9,_,_.return)}var se=_.sibling;if(se!==null){se.return=_.return,Ve=se;break e}Ve=_.return}}var K=n.current;for(Ve=K;Ve!==null;){N=Ve;var ce=N.child;if((N.subtreeFlags&2064)!==0&&ce!==null)ce.return=N,Ve=ce;else e:for(N=K;Ve!==null;){if(z=Ve,(z.flags&2048)!==0)try{switch(z.tag){case 0:case 11:case 15:Ul(9,z)}}catch(Je){sn(z,z.return,Je)}if(z===N){Ve=null;break e}var be=z.sibling;if(be!==null){be.return=z.return,Ve=be;break e}Ve=z.return}}if(Pt=m,Dr(),De&&typeof De.onPostCommitFiberRoot=="function")try{De.onPostCommitFiberRoot(ae,n)}catch{}d=!0}return d}finally{Et=o,gi.transition=r}}return!1}function Fg(n,r,o){r=Qs(o,r),r=eg(n,r,1),n=Ur(n,r,1),r=zn(),n!==null&&(Mt(n,1,r),Kn(n,r))}function sn(n,r,o){if(n.tag===3)Fg(n,n,o);else for(;r!==null;){if(r.tag===3){Fg(r,n,o);break}else if(r.tag===1){var d=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(Or===null||!Or.has(d))){n=Qs(o,n),n=tg(r,n,1),r=Ur(r,n,1),n=zn(),r!==null&&(Mt(r,1,n),Kn(r,n));break}}r=r.return}}function Z_(n,r,o){var d=n.pingCache;d!==null&&d.delete(r),r=zn(),n.pingedLanes|=n.suspendedLanes&o,yn===n&&(wn&o)===o&&(pn===4||pn===3&&(wn&130023424)===wn&&500>Jt()-Td?gs(n,0):Ed|=o),Kn(n,r)}function Og(n,r){r===0&&((n.mode&1)===0?r=1:(r=Ze,Ze<<=1,(Ze&130023424)===0&&(Ze=4194304)));var o=zn();n=cr(n,r),n!==null&&(Mt(n,r,o),Kn(n,o))}function Q_(n){var r=n.memoizedState,o=0;r!==null&&(o=r.retryLane),Og(n,o)}function J_(n,r){var o=0;switch(n.tag){case 13:var d=n.stateNode,m=n.memoizedState;m!==null&&(o=m.retryLane);break;case 19:d=n.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(r),Og(n,o)}var kg;kg=function(n,r,o){if(n!==null)if(n.memoizedProps!==r.pendingProps||Xn.current)qn=!0;else{if((n.lanes&o)===0&&(r.flags&128)===0)return qn=!1,z_(n,r,o);qn=(n.flags&131072)!==0}else qn=!1,Zt&&(r.flags&1048576)!==0&&vm(r,xl,r.index);switch(r.lanes=0,r.tag){case 2:var d=r.type;Dl(n,r),n=r.pendingProps;var m=Vs(r,Cn.current);Ks(r,o),m=td(null,r,d,n,m,o);var _=nd();return r.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,$n(d)?(_=!0,ml(r)):_=!1,r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,qu(r),m.updater=Pl,r.stateNode=m,m._reactInternals=r,ld(r,d,n,o),r=hd(null,r,d,!0,_,o)):(r.tag=0,Zt&&_&&ku(r),Bn(null,r,m,o),r=r.child),r;case 16:d=r.elementType;e:{switch(Dl(n,r),n=r.pendingProps,m=d._init,d=m(d._payload),r.type=d,m=r.tag=ty(d),n=Ai(d,n),m){case 0:r=dd(null,r,d,n,o);break e;case 1:r=ug(null,r,d,n,o);break e;case 11:r=sg(null,r,d,n,o);break e;case 14:r=ag(null,r,d,Ai(d.type,n),o);break e}throw Error(t(306,d,""))}return r;case 0:return d=r.type,m=r.pendingProps,m=r.elementType===d?m:Ai(d,m),dd(n,r,d,m,o);case 1:return d=r.type,m=r.pendingProps,m=r.elementType===d?m:Ai(d,m),ug(n,r,d,m,o);case 3:e:{if(dg(r),n===null)throw Error(t(387));d=r.pendingProps,_=r.memoizedState,m=_.element,bm(n,r),Tl(r,d,null,o);var N=r.memoizedState;if(d=N.element,_.isDehydrated)if(_={element:d,isDehydrated:!1,cache:N.cache,pendingSuspenseBoundaries:N.pendingSuspenseBoundaries,transitions:N.transitions},r.updateQueue.baseState=_,r.memoizedState=_,r.flags&256){m=Qs(Error(t(423)),r),r=hg(n,r,d,o,m);break e}else if(d!==m){m=Qs(Error(t(424)),r),r=hg(n,r,d,o,m);break e}else for(ii=Nr(r.stateNode.containerInfo.firstChild),ni=r,Zt=!0,Ci=null,o=Tm(r,null,d,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if($s(),d===m){r=dr(n,r,o);break e}Bn(n,r,d,o)}r=r.child}return r;case 5:return Rm(r),n===null&&ju(r),d=r.type,m=r.pendingProps,_=n!==null?n.memoizedProps:null,N=m.children,Lu(d,m)?N=null:_!==null&&Lu(d,_)&&(r.flags|=32),cg(n,r),Bn(n,r,N,o),r.child;case 6:return n===null&&ju(r),null;case 13:return fg(n,r,o);case 4:return Yu(r,r.stateNode.containerInfo),d=r.pendingProps,n===null?r.child=qs(r,null,d,o):Bn(n,r,d,o),r.child;case 11:return d=r.type,m=r.pendingProps,m=r.elementType===d?m:Ai(d,m),sg(n,r,d,m,o);case 7:return Bn(n,r,r.pendingProps,o),r.child;case 8:return Bn(n,r,r.pendingProps.children,o),r.child;case 12:return Bn(n,r,r.pendingProps.children,o),r.child;case 10:e:{if(d=r.type._context,m=r.pendingProps,_=r.memoizedProps,N=m.value,Wt(Sl,d._currentValue),d._currentValue=N,_!==null)if(bi(_.value,N)){if(_.children===m.children&&!Xn.current){r=dr(n,r,o);break e}}else for(_=r.child,_!==null&&(_.return=r);_!==null;){var z=_.dependencies;if(z!==null){N=_.child;for(var W=z.firstContext;W!==null;){if(W.context===d){if(_.tag===1){W=ur(-1,o&-o),W.tag=2;var de=_.updateQueue;if(de!==null){de=de.shared;var Me=de.pending;Me===null?W.next=W:(W.next=Me.next,Me.next=W),de.pending=W}}_.lanes|=o,W=_.alternate,W!==null&&(W.lanes|=o),Xu(_.return,o,r),z.lanes|=o;break}W=W.next}}else if(_.tag===10)N=_.type===r.type?null:_.child;else if(_.tag===18){if(N=_.return,N===null)throw Error(t(341));N.lanes|=o,z=N.alternate,z!==null&&(z.lanes|=o),Xu(N,o,r),N=_.sibling}else N=_.child;if(N!==null)N.return=_;else for(N=_;N!==null;){if(N===r){N=null;break}if(_=N.sibling,_!==null){_.return=N.return,N=_;break}N=N.return}_=N}Bn(n,r,m.children,o),r=r.child}return r;case 9:return m=r.type,d=r.pendingProps.children,Ks(r,o),m=pi(m),d=d(m),r.flags|=1,Bn(n,r,d,o),r.child;case 14:return d=r.type,m=Ai(d,r.pendingProps),m=Ai(d.type,m),ag(n,r,d,m,o);case 15:return og(n,r,r.type,r.pendingProps,o);case 17:return d=r.type,m=r.pendingProps,m=r.elementType===d?m:Ai(d,m),Dl(n,r),r.tag=1,$n(d)?(n=!0,ml(r)):n=!1,Ks(r,o),Qm(r,d,m),ld(r,d,m,o),hd(null,r,d,!0,n,o);case 19:return mg(n,r,o);case 22:return lg(n,r,o)}throw Error(t(156,r.tag))};function Bg(n,r){return Zo(n,r)}function ey(n,r,o,d){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vi(n,r,o,d){return new ey(n,r,o,d)}function Ld(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ty(n){if(typeof n=="function")return Ld(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Z)return 11;if(n===V)return 14}return 2}function jr(n,r){var o=n.alternate;return o===null?(o=vi(n.tag,r,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=r,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,r=n.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function Vl(n,r,o,d,m,_){var N=2;if(d=n,typeof n=="function")Ld(n)&&(N=1);else if(typeof n=="string")N=5;else e:switch(n){case O:return xs(o.children,m,_,r);case A:N=8,m|=8;break;case U:return n=vi(12,o,r,m|2),n.elementType=U,n.lanes=_,n;case H:return n=vi(13,o,r,m),n.elementType=H,n.lanes=_,n;case Q:return n=vi(19,o,r,m),n.elementType=Q,n.lanes=_,n;case G:return Wl(o,m,_,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case q:N=10;break e;case j:N=9;break e;case Z:N=11;break e;case V:N=14;break e;case F:N=16,d=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=vi(N,o,r,m),r.elementType=n,r.type=d,r.lanes=_,r}function xs(n,r,o,d){return n=vi(7,n,d,r),n.lanes=o,n}function Wl(n,r,o,d){return n=vi(22,n,d,r),n.elementType=G,n.lanes=o,n.stateNode={isHidden:!1},n}function Dd(n,r,o){return n=vi(6,n,null,r),n.lanes=o,n}function Id(n,r,o){return r=vi(4,n.children!==null?n.children:[],n.key,r),r.lanes=o,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function ny(n,r,o,d,m){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=En(0),this.expirationTimes=En(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=En(0),this.identifierPrefix=d,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function Ud(n,r,o,d,m,_,N,z,W){return n=new ny(n,r,o,z,W),r===1?(r=1,_===!0&&(r|=8)):r=0,_=vi(3,null,null,r),n.current=_,_.stateNode=n,_.memoizedState={element:d,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},qu(_),n}function iy(n,r,o){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:d==null?null:""+d,children:n,containerInfo:r,implementation:o}}function zg(n){if(!n)return Lr;n=n._reactInternals;e:{if(Bi(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if($n(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if($n(o))return pm(n,o,r)}return r}function jg(n,r,o,d,m,_,N,z,W){return n=Ud(o,d,!0,n,m,_,N,z,W),n.context=zg(null),o=n.current,d=zn(),m=Br(o),_=ur(d,m),_.callback=r??null,Ur(o,_,m),n.current.lanes=m,Mt(n,m,d),Kn(n,d),n}function Xl(n,r,o,d){var m=r.current,_=zn(),N=Br(m);return o=zg(o),r.context===null?r.context=o:r.pendingContext=o,r=ur(_,N),r.payload={element:n},d=d===void 0?null:d,d!==null&&(r.callback=d),n=Ur(m,r,N),n!==null&&(Pi(n,m,N,_),El(n,m,N)),N}function $l(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Hg(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<r?o:r}}function Fd(n,r){Hg(n,r),(n=n.alternate)&&Hg(n,r)}function ry(){return null}var Gg=typeof reportError=="function"?reportError:function(n){console.error(n)};function Od(n){this._internalRoot=n}ql.prototype.render=Od.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Xl(n,r,null,null)},ql.prototype.unmount=Od.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;ms(function(){Xl(null,n,null,null)}),r[sr]=null}};function ql(n){this._internalRoot=n}ql.prototype.unstable_scheduleHydration=function(n){if(n){var r=Bt();n={blockedOn:null,target:n,priority:r};for(var o=0;o<Cr.length&&r!==0&&r<Cr[o].priority;o++);Cr.splice(o,0,n),o===0&&Rp(n)}};function kd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Yl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Vg(){}function sy(n,r,o,d,m){if(m){if(typeof d=="function"){var _=d;d=function(){var de=$l(N);_.call(de)}}var N=jg(r,d,n,0,null,!1,!1,"",Vg);return n._reactRootContainer=N,n[sr]=N.current,so(n.nodeType===8?n.parentNode:n),ms(),N}for(;m=n.lastChild;)n.removeChild(m);if(typeof d=="function"){var z=d;d=function(){var de=$l(W);z.call(de)}}var W=Ud(n,0,!1,null,null,!1,!1,"",Vg);return n._reactRootContainer=W,n[sr]=W.current,so(n.nodeType===8?n.parentNode:n),ms(function(){Xl(r,W,o,d)}),W}function Kl(n,r,o,d,m){var _=o._reactRootContainer;if(_){var N=_;if(typeof m=="function"){var z=m;m=function(){var W=$l(N);z.call(W)}}Xl(r,N,n,m)}else N=sy(o,r,n,m,d);return $l(N)}Ut=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var o=Rt(r.pendingLanes);o!==0&&(Wn(r,o|1),Kn(r,Jt()),(Pt&6)===0&&(ta=Jt()+500,Dr()))}break;case 13:ms(function(){var d=cr(n,1);if(d!==null){var m=zn();Pi(d,n,1,m)}}),Fd(n,1)}},$t=function(n){if(n.tag===13){var r=cr(n,134217728);if(r!==null){var o=zn();Pi(r,n,134217728,o)}Fd(n,134217728)}},Ti=function(n){if(n.tag===13){var r=Br(n),o=cr(n,r);if(o!==null){var d=zn();Pi(o,n,r,d)}Fd(n,r)}},Bt=function(){return Et},wi=function(n,r){var o=Et;try{return Et=n,r()}finally{Et=o}},dt=function(n,r,o){switch(r){case"input":if(Lt(n,o),r=o.name,o.type==="radio"&&r!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var d=o[r];if(d!==n&&d.form===n.form){var m=fl(d);if(!m)throw Error(t(90));et(d),Lt(d,m)}}}break;case"textarea":Ue(n,o);break;case"select":r=o.value,r!=null&&Gt(n,!!o.multiple,r,!1)}},Le=Rd,ye=ms;var ay={usingClientEntryPoint:!1,Events:[lo,Hs,fl,ge,Be,Rd]},Eo={findFiberByHostInstance:os,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},oy={bundleType:Eo.bundleType,version:Eo.version,rendererPackageName:Eo.rendererPackageName,rendererConfig:Eo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:w.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ga(n),n===null?null:n.stateNode},findFiberByHostInstance:Eo.findFiberByHostInstance||ry,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zl.isDisabled&&Zl.supportsFiber)try{ae=Zl.inject(oy),De=Zl}catch{}}return Zn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ay,Zn.createPortal=function(n,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kd(r))throw Error(t(200));return iy(n,r,null,o)},Zn.createRoot=function(n,r){if(!kd(n))throw Error(t(299));var o=!1,d="",m=Gg;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(d=r.identifierPrefix),r.onRecoverableError!==void 0&&(m=r.onRecoverableError)),r=Ud(n,1,!1,null,null,o,!1,d,m),n[sr]=r.current,so(n.nodeType===8?n.parentNode:n),new Od(r)},Zn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Ga(r),n=n===null?null:n.stateNode,n},Zn.flushSync=function(n){return ms(n)},Zn.hydrate=function(n,r,o){if(!Yl(r))throw Error(t(200));return Kl(null,n,r,!0,o)},Zn.hydrateRoot=function(n,r,o){if(!kd(n))throw Error(t(405));var d=o!=null&&o.hydratedSources||null,m=!1,_="",N=Gg;if(o!=null&&(o.unstable_strictMode===!0&&(m=!0),o.identifierPrefix!==void 0&&(_=o.identifierPrefix),o.onRecoverableError!==void 0&&(N=o.onRecoverableError)),r=jg(r,null,n,1,o??null,m,!1,_,N),n[sr]=r.current,so(n),d)for(n=0;n<d.length;n++)o=d[n],m=o._getVersion,m=m(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,m]:r.mutableSourceEagerHydrationData.push(o,m);return new ql(r)},Zn.render=function(n,r,o){if(!Yl(r))throw Error(t(200));return Kl(null,n,r,!1,o)},Zn.unmountComponentAtNode=function(n){if(!Yl(n))throw Error(t(40));return n._reactRootContainer?(ms(function(){Kl(null,null,n,!1,function(){n._reactRootContainer=null,n[sr]=null})}),!0):!1},Zn.unstable_batchedUpdates=Rd,Zn.unstable_renderSubtreeIntoContainer=function(n,r,o,d){if(!Yl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Kl(n,r,o,!1,d)},Zn.version="18.3.1-next-f1338f8080-20240426",Zn}var Qg;function xy(){if(Qg)return Hd.exports;Qg=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Hd.exports=vy(),Hd.exports}var Jg;function _y(){if(Jg)return Ql;Jg=1;var i=xy();return Ql.createRoot=i.createRoot,Ql.hydrateRoot=i.hydrateRoot,Ql}var yy=_y();const Sy=C0(yy);/**
 * react-router v7.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var ev="popstate";function My(i={}){function e(s,a){let{pathname:l,search:u,hash:h}=s.location;return zh("",{pathname:l,search:u,hash:h},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(s,a){return typeof a=="string"?a:Bo(a)}return Ty(e,t,null,i)}function Qt(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}function Si(i,e){if(!i){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Ey(){return Math.random().toString(36).substring(2,10)}function tv(i,e){return{usr:i.state,key:i.key,idx:e}}function zh(i,e,t=null,s){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof e=="string"?Da(e):e,state:t,key:e&&e.key||s||Ey()}}function Bo({pathname:i="/",search:e="",hash:t=""}){return e&&e!=="?"&&(i+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(i+=t.charAt(0)==="#"?t:"#"+t),i}function Da(i){let e={};if(i){let t=i.indexOf("#");t>=0&&(e.hash=i.substring(t),i=i.substring(0,t));let s=i.indexOf("?");s>=0&&(e.search=i.substring(s),i=i.substring(0,s)),i&&(e.pathname=i)}return e}function Ty(i,e,t,s={}){let{window:a=document.defaultView,v5Compat:l=!1}=s,u=a.history,h="POP",f=null,p=g();p==null&&(p=0,u.replaceState({...u.state,idx:p},""));function g(){return(u.state||{idx:null}).idx}function x(){h="POP";let y=g(),M=y==null?null:y-p;p=y,f&&f({action:h,location:R.location,delta:M})}function v(y,M){h="PUSH";let b=zh(R.location,y,M);p=g()+1;let E=tv(b,p),w=R.createHref(b);try{u.pushState(E,"",w)}catch(D){if(D instanceof DOMException&&D.name==="DataCloneError")throw D;a.location.assign(w)}l&&f&&f({action:h,location:R.location,delta:1})}function S(y,M){h="REPLACE";let b=zh(R.location,y,M);p=g();let E=tv(b,p),w=R.createHref(b);u.replaceState(E,"",w),l&&f&&f({action:h,location:R.location,delta:0})}function T(y){return wy(y)}let R={get action(){return h},get location(){return i(a,u)},listen(y){if(f)throw new Error("A history only accepts one active listener");return a.addEventListener(ev,x),f=y,()=>{a.removeEventListener(ev,x),f=null}},createHref(y){return e(a,y)},createURL:T,encodeLocation(y){let M=T(y);return{pathname:M.pathname,search:M.search,hash:M.hash}},push:v,replace:S,go(y){return u.go(y)}};return R}function wy(i,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),Qt(t,"No window.location.(origin|href) available to create URL");let s=typeof i=="string"?i:Bo(i);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=t+s),new URL(s,t)}function A0(i,e,t="/"){return by(i,e,t,!1)}function by(i,e,t,s){let a=typeof e=="string"?Da(e):e,l=Mr(a.pathname||"/",t);if(l==null)return null;let u=R0(i);Cy(u);let h=null;for(let f=0;h==null&&f<u.length;++f){let p=ky(l);h=Fy(u[f],p,s)}return h}function R0(i,e=[],t=[],s="",a=!1){let l=(u,h,f=a,p)=>{let g={relativePath:p===void 0?u.path||"":p,caseSensitive:u.caseSensitive===!0,childrenIndex:h,route:u};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(s)&&f)return;Qt(g.relativePath.startsWith(s),`Absolute route path "${g.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(s.length)}let x=yr([s,g.relativePath]),v=t.concat(g);u.children&&u.children.length>0&&(Qt(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),R0(u.children,e,v,x,f)),!(u.path==null&&!u.index)&&e.push({path:x,score:Iy(x,u.index),routesMeta:v})};return i.forEach((u,h)=>{var f;if(u.path===""||!((f=u.path)!=null&&f.includes("?")))l(u,h);else for(let p of N0(u.path))l(u,h,!0,p)}),e}function N0(i){let e=i.split("/");if(e.length===0)return[];let[t,...s]=e,a=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return a?[l,""]:[l];let u=N0(s.join("/")),h=[];return h.push(...u.map(f=>f===""?l:[l,f].join("/"))),a&&h.push(...u),h.map(f=>i.startsWith("/")&&f===""?"/":f)}function Cy(i){i.sort((e,t)=>e.score!==t.score?t.score-e.score:Uy(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var Ay=/^:[\w-]+$/,Ry=3,Ny=2,Py=1,Ly=10,Dy=-2,nv=i=>i==="*";function Iy(i,e){let t=i.split("/"),s=t.length;return t.some(nv)&&(s+=Dy),e&&(s+=Ny),t.filter(a=>!nv(a)).reduce((a,l)=>a+(Ay.test(l)?Ry:l===""?Py:Ly),s)}function Uy(i,e){return i.length===e.length&&i.slice(0,-1).every((s,a)=>s===e[a])?i[i.length-1]-e[e.length-1]:0}function Fy(i,e,t=!1){let{routesMeta:s}=i,a={},l="/",u=[];for(let h=0;h<s.length;++h){let f=s[h],p=h===s.length-1,g=l==="/"?e:e.slice(l.length)||"/",x=Hc({path:f.relativePath,caseSensitive:f.caseSensitive,end:p},g),v=f.route;if(!x&&p&&t&&!s[s.length-1].route.index&&(x=Hc({path:f.relativePath,caseSensitive:f.caseSensitive,end:!1},g)),!x)return null;Object.assign(a,x.params),u.push({params:a,pathname:yr([l,x.pathname]),pathnameBase:Hy(yr([l,x.pathnameBase])),route:v}),x.pathnameBase!=="/"&&(l=yr([l,x.pathnameBase]))}return u}function Hc(i,e){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[t,s]=Oy(i.path,i.caseSensitive,i.end),a=e.match(t);if(!a)return null;let l=a[0],u=l.replace(/(.)\/+$/,"$1"),h=a.slice(1);return{params:s.reduce((p,{paramName:g,isOptional:x},v)=>{if(g==="*"){let T=h[v]||"";u=l.slice(0,l.length-T.length).replace(/(.)\/+$/,"$1")}const S=h[v];return x&&!S?p[g]=void 0:p[g]=(S||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:u,pattern:i}}function Oy(i,e=!1,t=!0){Si(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let s=[],a="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,h,f)=>(s.push({paramName:h,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return i.endsWith("*")?(s.push({paramName:"*"}),a+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":i!==""&&i!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),s]}function ky(i){try{return i.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Si(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),i}}function Mr(i,e){if(e==="/")return i;if(!i.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=i.charAt(t);return s&&s!=="/"?null:i.slice(t)||"/"}var P0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,By=i=>P0.test(i);function zy(i,e="/"){let{pathname:t,search:s="",hash:a=""}=typeof i=="string"?Da(i):i,l;if(t)if(By(t))l=t;else{if(t.includes("//")){let u=t;t=t.replace(/\/\/+/g,"/"),Si(!1,`Pathnames cannot have embedded double slashes - normalizing ${u} -> ${t}`)}t.startsWith("/")?l=iv(t.substring(1),"/"):l=iv(t,e)}else l=e;return{pathname:l,search:Gy(s),hash:Vy(a)}}function iv(i,e){let t=e.replace(/\/+$/,"").split("/");return i.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function Wd(i,e,t,s){return`Cannot include a '${i}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function jy(i){return i.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function jf(i){let e=jy(i);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function Hf(i,e,t,s=!1){let a;typeof i=="string"?a=Da(i):(a={...i},Qt(!a.pathname||!a.pathname.includes("?"),Wd("?","pathname","search",a)),Qt(!a.pathname||!a.pathname.includes("#"),Wd("#","pathname","hash",a)),Qt(!a.search||!a.search.includes("#"),Wd("#","search","hash",a)));let l=i===""||a.pathname==="",u=l?"/":a.pathname,h;if(u==null)h=t;else{let x=e.length-1;if(!s&&u.startsWith("..")){let v=u.split("/");for(;v[0]==="..";)v.shift(),x-=1;a.pathname=v.join("/")}h=x>=0?e[x]:"/"}let f=zy(a,h),p=u&&u!=="/"&&u.endsWith("/"),g=(l||u===".")&&t.endsWith("/");return!f.pathname.endsWith("/")&&(p||g)&&(f.pathname+="/"),f}var yr=i=>i.join("/").replace(/\/\/+/g,"/"),Hy=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),Gy=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,Vy=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i,Wy=class{constructor(i,e,t,s=!1){this.status=i,this.statusText=e||"",this.internal=s,t instanceof Error?(this.data=t.toString(),this.error=t):this.data=t}};function Xy(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}function $y(i){return i.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var L0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function D0(i,e){let t=i;if(typeof t!="string"||!P0.test(t))return{absoluteURL:void 0,isExternal:!1,to:t};let s=t,a=!1;if(L0)try{let l=new URL(window.location.href),u=t.startsWith("//")?new URL(l.protocol+t):new URL(t),h=Mr(u.pathname,e);u.origin===l.origin&&h!=null?t=h+u.search+u.hash:a=!0}catch{Si(!1,`<Link to="${t}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:a,to:t}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var I0=["POST","PUT","PATCH","DELETE"];new Set(I0);var qy=["GET",...I0];new Set(qy);var Ia=k.createContext(null);Ia.displayName="DataRouter";var eu=k.createContext(null);eu.displayName="DataRouterState";var Yy=k.createContext(!1),U0=k.createContext({isTransitioning:!1});U0.displayName="ViewTransition";var Ky=k.createContext(new Map);Ky.displayName="Fetchers";var Zy=k.createContext(null);Zy.displayName="Await";var ui=k.createContext(null);ui.displayName="Navigation";var Wo=k.createContext(null);Wo.displayName="Location";var er=k.createContext({outlet:null,matches:[],isDataRoute:!1});er.displayName="Route";var Gf=k.createContext(null);Gf.displayName="RouteError";var F0="REACT_ROUTER_ERROR",Qy="REDIRECT",Jy="ROUTE_ERROR_RESPONSE";function eS(i){if(i.startsWith(`${F0}:${Qy}:{`))try{let e=JSON.parse(i.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function tS(i){if(i.startsWith(`${F0}:${Jy}:{`))try{let e=JSON.parse(i.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new Wy(e.status,e.statusText,e.data)}catch{}}function nS(i,{relative:e}={}){Qt(Ua(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=k.useContext(ui),{hash:a,pathname:l,search:u}=Xo(i,{relative:e}),h=l;return t!=="/"&&(h=l==="/"?t:yr([t,l])),s.createHref({pathname:h,search:u,hash:a})}function Ua(){return k.useContext(Wo)!=null}function ki(){return Qt(Ua(),"useLocation() may be used only in the context of a <Router> component."),k.useContext(Wo).location}var O0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function k0(i){k.useContext(ui).static||k.useLayoutEffect(i)}function Fa(){let{isDataRoute:i}=k.useContext(er);return i?mS():iS()}function iS(){Qt(Ua(),"useNavigate() may be used only in the context of a <Router> component.");let i=k.useContext(Ia),{basename:e,navigator:t}=k.useContext(ui),{matches:s}=k.useContext(er),{pathname:a}=ki(),l=JSON.stringify(jf(s)),u=k.useRef(!1);return k0(()=>{u.current=!0}),k.useCallback((f,p={})=>{if(Si(u.current,O0),!u.current)return;if(typeof f=="number"){t.go(f);return}let g=Hf(f,JSON.parse(l),a,p.relative==="path");i==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:yr([e,g.pathname])),(p.replace?t.replace:t.push)(g,p.state,p)},[e,t,l,a,i])}k.createContext(null);function Xo(i,{relative:e}={}){let{matches:t}=k.useContext(er),{pathname:s}=ki(),a=JSON.stringify(jf(t));return k.useMemo(()=>Hf(i,JSON.parse(a),s,e==="path"),[i,a,s,e])}function rS(i,e){return B0(i,e)}function B0(i,e,t,s,a){var b;Qt(Ua(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=k.useContext(ui),{matches:u}=k.useContext(er),h=u[u.length-1],f=h?h.params:{},p=h?h.pathname:"/",g=h?h.pathnameBase:"/",x=h&&h.route;{let E=x&&x.path||"";j0(p,!x||E.endsWith("*")||E.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${E}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${E}"> to <Route path="${E==="/"?"*":`${E}/*`}">.`)}let v=ki(),S;if(e){let E=typeof e=="string"?Da(e):e;Qt(g==="/"||((b=E.pathname)==null?void 0:b.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${E.pathname}" was given in the \`location\` prop.`),S=E}else S=v;let T=S.pathname||"/",R=T;if(g!=="/"){let E=g.replace(/^\//,"").split("/");R="/"+T.replace(/^\//,"").split("/").slice(E.length).join("/")}let y=A0(i,{pathname:R});Si(x||y!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),Si(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let M=cS(y&&y.map(E=>Object.assign({},E,{params:Object.assign({},f,E.params),pathname:yr([g,l.encodeLocation?l.encodeLocation(E.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?g:yr([g,l.encodeLocation?l.encodeLocation(E.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:E.pathnameBase])})),u,t,s,a);return e&&M?k.createElement(Wo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},M):M}function sS(){let i=pS(),e=Xy(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),t=i instanceof Error?i.stack:null,s="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:s},l={padding:"2px 4px",backgroundColor:s},u=null;return console.error("Error handled by React Router default ErrorBoundary:",i),u=k.createElement(k.Fragment,null,k.createElement("p",null,"💿 Hey developer 👋"),k.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",k.createElement("code",{style:l},"ErrorBoundary")," or"," ",k.createElement("code",{style:l},"errorElement")," prop on your route.")),k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},e),t?k.createElement("pre",{style:a},t):null,u)}var aS=k.createElement(sS,null),z0=class extends k.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,e){return e.location!==i.location||e.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:e.error,location:e.location,revalidation:i.revalidation||e.revalidation}}componentDidCatch(i,e){this.props.onError?this.props.onError(i,e):console.error("React Router caught the following error during render",i)}render(){let i=this.state.error;if(this.context&&typeof i=="object"&&i&&"digest"in i&&typeof i.digest=="string"){const t=tS(i.digest);t&&(i=t)}let e=i!==void 0?k.createElement(er.Provider,{value:this.props.routeContext},k.createElement(Gf.Provider,{value:i,children:this.props.component})):this.props.children;return this.context?k.createElement(oS,{error:i},e):e}};z0.contextType=Yy;var Xd=new WeakMap;function oS({children:i,error:e}){let{basename:t}=k.useContext(ui);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let s=eS(e.digest);if(s){let a=Xd.get(e);if(a)throw a;let l=D0(s.location,t);if(L0&&!Xd.get(e))if(l.isExternal||s.reloadDocument)window.location.href=l.absoluteURL||l.to;else{const u=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(l.to,{replace:s.replace}));throw Xd.set(e,u),u}return k.createElement("meta",{httpEquiv:"refresh",content:`0;url=${l.absoluteURL||l.to}`})}}return i}function lS({routeContext:i,match:e,children:t}){let s=k.useContext(Ia);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),k.createElement(er.Provider,{value:i},t)}function cS(i,e=[],t=null,s=null,a=null){if(i==null){if(!t)return null;if(t.errors)i=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)i=t.matches;else return null}let l=i,u=t==null?void 0:t.errors;if(u!=null){let g=l.findIndex(x=>x.route.id&&(u==null?void 0:u[x.route.id])!==void 0);Qt(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,g+1))}let h=!1,f=-1;if(t)for(let g=0;g<l.length;g++){let x=l[g];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(f=g),x.route.id){let{loaderData:v,errors:S}=t,T=x.route.loader&&!v.hasOwnProperty(x.route.id)&&(!S||S[x.route.id]===void 0);if(x.route.lazy||T){h=!0,f>=0?l=l.slice(0,f+1):l=[l[0]];break}}}let p=t&&s?(g,x)=>{var v,S;s(g,{location:t.location,params:((S=(v=t.matches)==null?void 0:v[0])==null?void 0:S.params)??{},unstable_pattern:$y(t.matches),errorInfo:x})}:void 0;return l.reduceRight((g,x,v)=>{let S,T=!1,R=null,y=null;t&&(S=u&&x.route.id?u[x.route.id]:void 0,R=x.route.errorElement||aS,h&&(f<0&&v===0?(j0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),T=!0,y=null):f===v&&(T=!0,y=x.route.hydrateFallbackElement||null)));let M=e.concat(l.slice(0,v+1)),b=()=>{let E;return S?E=R:T?E=y:x.route.Component?E=k.createElement(x.route.Component,null):x.route.element?E=x.route.element:E=g,k.createElement(lS,{match:x,routeContext:{outlet:g,matches:M,isDataRoute:t!=null},children:E})};return t&&(x.route.ErrorBoundary||x.route.errorElement||v===0)?k.createElement(z0,{location:t.location,revalidation:t.revalidation,component:R,error:S,children:b(),routeContext:{outlet:null,matches:M,isDataRoute:!0},onError:p}):b()},null)}function Vf(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function uS(i){let e=k.useContext(Ia);return Qt(e,Vf(i)),e}function dS(i){let e=k.useContext(eu);return Qt(e,Vf(i)),e}function hS(i){let e=k.useContext(er);return Qt(e,Vf(i)),e}function Wf(i){let e=hS(i),t=e.matches[e.matches.length-1];return Qt(t.route.id,`${i} can only be used on routes that contain a unique "id"`),t.route.id}function fS(){return Wf("useRouteId")}function pS(){var s;let i=k.useContext(Gf),e=dS("useRouteError"),t=Wf("useRouteError");return i!==void 0?i:(s=e.errors)==null?void 0:s[t]}function mS(){let{router:i}=uS("useNavigate"),e=Wf("useNavigate"),t=k.useRef(!1);return k0(()=>{t.current=!0}),k.useCallback(async(a,l={})=>{Si(t.current,O0),t.current&&(typeof a=="number"?await i.navigate(a):await i.navigate(a,{fromRouteId:e,...l}))},[i,e])}var rv={};function j0(i,e,t){!e&&!rv[i]&&(rv[i]=!0,Si(!1,t))}k.memo(gS);function gS({routes:i,future:e,state:t,onError:s}){return B0(i,void 0,t,s,e)}function Es({to:i,replace:e,state:t,relative:s}){Qt(Ua(),"<Navigate> may be used only in the context of a <Router> component.");let{static:a}=k.useContext(ui);Si(!a,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=k.useContext(er),{pathname:u}=ki(),h=Fa(),f=Hf(i,jf(l),u,s==="path"),p=JSON.stringify(f);return k.useEffect(()=>{h(JSON.parse(p),{replace:e,state:t,relative:s})},[h,p,s,e,t]),null}function ln(i){Qt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function vS({basename:i="/",children:e=null,location:t,navigationType:s="POP",navigator:a,static:l=!1,unstable_useTransitions:u}){Qt(!Ua(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=i.replace(/^\/*/,"/"),f=k.useMemo(()=>({basename:h,navigator:a,static:l,unstable_useTransitions:u,future:{}}),[h,a,l,u]);typeof t=="string"&&(t=Da(t));let{pathname:p="/",search:g="",hash:x="",state:v=null,key:S="default"}=t,T=k.useMemo(()=>{let R=Mr(p,h);return R==null?null:{location:{pathname:R,search:g,hash:x,state:v,key:S},navigationType:s}},[h,p,g,x,v,S,s]);return Si(T!=null,`<Router basename="${h}"> is not able to match the URL "${p}${g}${x}" because it does not start with the basename, so the <Router> won't render anything.`),T==null?null:k.createElement(ui.Provider,{value:f},k.createElement(Wo.Provider,{children:e,value:T}))}function xS({children:i,location:e}){return rS(jh(i),e)}function jh(i,e=[]){let t=[];return k.Children.forEach(i,(s,a)=>{if(!k.isValidElement(s))return;let l=[...e,a];if(s.type===k.Fragment){t.push.apply(t,jh(s.props.children,l));return}Qt(s.type===ln,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Qt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let u={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(u.children=jh(s.props.children,l)),t.push(u)}),t}var Pc="get",Lc="application/x-www-form-urlencoded";function tu(i){return typeof HTMLElement<"u"&&i instanceof HTMLElement}function _S(i){return tu(i)&&i.tagName.toLowerCase()==="button"}function yS(i){return tu(i)&&i.tagName.toLowerCase()==="form"}function SS(i){return tu(i)&&i.tagName.toLowerCase()==="input"}function MS(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function ES(i,e){return i.button===0&&(!e||e==="_self")&&!MS(i)}var Jl=null;function TS(){if(Jl===null)try{new FormData(document.createElement("form"),0),Jl=!1}catch{Jl=!0}return Jl}var wS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function $d(i){return i!=null&&!wS.has(i)?(Si(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Lc}"`),null):i}function bS(i,e){let t,s,a,l,u;if(yS(i)){let h=i.getAttribute("action");s=h?Mr(h,e):null,t=i.getAttribute("method")||Pc,a=$d(i.getAttribute("enctype"))||Lc,l=new FormData(i)}else if(_S(i)||SS(i)&&(i.type==="submit"||i.type==="image")){let h=i.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let f=i.getAttribute("formaction")||h.getAttribute("action");if(s=f?Mr(f,e):null,t=i.getAttribute("formmethod")||h.getAttribute("method")||Pc,a=$d(i.getAttribute("formenctype"))||$d(h.getAttribute("enctype"))||Lc,l=new FormData(h,i),!TS()){let{name:p,type:g,value:x}=i;if(g==="image"){let v=p?`${p}.`:"";l.append(`${v}x`,"0"),l.append(`${v}y`,"0")}else p&&l.append(p,x)}}else{if(tu(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Pc,s=null,a=Lc,u=i}return l&&a==="text/plain"&&(u=l,l=void 0),{action:s,method:t.toLowerCase(),encType:a,formData:l,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Xf(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}function CS(i,e,t){let s=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return s.pathname==="/"?s.pathname=`_root.${t}`:e&&Mr(s.pathname,e)==="/"?s.pathname=`${e.replace(/\/$/,"")}/_root.${t}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${t}`,s}async function AS(i,e){if(i.id in e)return e[i.id];try{let t=await import(i.module);return e[i.id]=t,t}catch(t){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function RS(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function NS(i,e,t){let s=await Promise.all(i.map(async a=>{let l=e.routes[a.route.id];if(l){let u=await AS(l,t);return u.links?u.links():[]}return[]}));return IS(s.flat(1).filter(RS).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function sv(i,e,t,s,a,l){let u=(f,p)=>t[p]?f.route.id!==t[p].route.id:!0,h=(f,p)=>{var g;return t[p].pathname!==f.pathname||((g=t[p].route.path)==null?void 0:g.endsWith("*"))&&t[p].params["*"]!==f.params["*"]};return l==="assets"?e.filter((f,p)=>u(f,p)||h(f,p)):l==="data"?e.filter((f,p)=>{var x;let g=s.routes[f.route.id];if(!g||!g.hasLoader)return!1;if(u(f,p)||h(f,p))return!0;if(f.route.shouldRevalidate){let v=f.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((x=t[0])==null?void 0:x.params)||{},nextUrl:new URL(i,window.origin),nextParams:f.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function PS(i,e,{includeHydrateFallback:t}={}){return LS(i.map(s=>{let a=e.routes[s.route.id];if(!a)return[];let l=[a.module];return a.clientActionModule&&(l=l.concat(a.clientActionModule)),a.clientLoaderModule&&(l=l.concat(a.clientLoaderModule)),t&&a.hydrateFallbackModule&&(l=l.concat(a.hydrateFallbackModule)),a.imports&&(l=l.concat(a.imports)),l}).flat(1))}function LS(i){return[...new Set(i)]}function DS(i){let e={},t=Object.keys(i).sort();for(let s of t)e[s]=i[s];return e}function IS(i,e){let t=new Set;return new Set(e),i.reduce((s,a)=>{let l=JSON.stringify(DS(a));return t.has(l)||(t.add(l),s.push({key:l,link:a})),s},[])}function H0(){let i=k.useContext(Ia);return Xf(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function US(){let i=k.useContext(eu);return Xf(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var $f=k.createContext(void 0);$f.displayName="FrameworkContext";function G0(){let i=k.useContext($f);return Xf(i,"You must render this element inside a <HydratedRouter> element"),i}function FS(i,e){let t=k.useContext($f),[s,a]=k.useState(!1),[l,u]=k.useState(!1),{onFocus:h,onBlur:f,onMouseEnter:p,onMouseLeave:g,onTouchStart:x}=e,v=k.useRef(null);k.useEffect(()=>{if(i==="render"&&u(!0),i==="viewport"){let R=M=>{M.forEach(b=>{u(b.isIntersecting)})},y=new IntersectionObserver(R,{threshold:.5});return v.current&&y.observe(v.current),()=>{y.disconnect()}}},[i]),k.useEffect(()=>{if(s){let R=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(R)}}},[s]);let S=()=>{a(!0)},T=()=>{a(!1),u(!1)};return t?i!=="intent"?[l,v,{}]:[l,v,{onFocus:wo(h,S),onBlur:wo(f,T),onMouseEnter:wo(p,S),onMouseLeave:wo(g,T),onTouchStart:wo(x,S)}]:[!1,v,{}]}function wo(i,e){return t=>{i&&i(t),t.defaultPrevented||e(t)}}function OS({page:i,...e}){let{router:t}=H0(),s=k.useMemo(()=>A0(t.routes,i,t.basename),[t.routes,i,t.basename]);return s?k.createElement(BS,{page:i,matches:s,...e}):null}function kS(i){let{manifest:e,routeModules:t}=G0(),[s,a]=k.useState([]);return k.useEffect(()=>{let l=!1;return NS(i,e,t).then(u=>{l||a(u)}),()=>{l=!0}},[i,e,t]),s}function BS({page:i,matches:e,...t}){let s=ki(),{manifest:a,routeModules:l}=G0(),{basename:u}=H0(),{loaderData:h,matches:f}=US(),p=k.useMemo(()=>sv(i,e,f,a,s,"data"),[i,e,f,a,s]),g=k.useMemo(()=>sv(i,e,f,a,s,"assets"),[i,e,f,a,s]),x=k.useMemo(()=>{if(i===s.pathname+s.search+s.hash)return[];let T=new Set,R=!1;if(e.forEach(M=>{var E;let b=a.routes[M.route.id];!b||!b.hasLoader||(!p.some(w=>w.route.id===M.route.id)&&M.route.id in h&&((E=l[M.route.id])!=null&&E.shouldRevalidate)||b.hasClientLoader?R=!0:T.add(M.route.id))}),T.size===0)return[];let y=CS(i,u,"data");return R&&T.size>0&&y.searchParams.set("_routes",e.filter(M=>T.has(M.route.id)).map(M=>M.route.id).join(",")),[y.pathname+y.search]},[u,h,s,a,p,e,i,l]),v=k.useMemo(()=>PS(g,a),[g,a]),S=kS(g);return k.createElement(k.Fragment,null,x.map(T=>k.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...t})),v.map(T=>k.createElement("link",{key:T,rel:"modulepreload",href:T,...t})),S.map(({key:T,link:R})=>k.createElement("link",{key:T,nonce:t.nonce,...R})))}function zS(...i){return e=>{i.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var jS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{jS&&(window.__reactRouterVersion="7.11.0")}catch{}function HS({basename:i,children:e,unstable_useTransitions:t,window:s}){let a=k.useRef();a.current==null&&(a.current=My({window:s,v5Compat:!0}));let l=a.current,[u,h]=k.useState({action:l.action,location:l.location}),f=k.useCallback(p=>{t===!1?h(p):k.startTransition(()=>h(p))},[t]);return k.useLayoutEffect(()=>l.listen(f),[l,f]),k.createElement(vS,{basename:i,children:e,location:u.location,navigationType:u.action,navigator:l,unstable_useTransitions:t})}var V0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qf=k.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:a,reloadDocument:l,replace:u,state:h,target:f,to:p,preventScrollReset:g,viewTransition:x,unstable_defaultShouldRevalidate:v,...S},T){let{basename:R,unstable_useTransitions:y}=k.useContext(ui),M=typeof p=="string"&&V0.test(p),b=D0(p,R);p=b.to;let E=nS(p,{relative:a}),[w,D,L]=FS(s,S),O=XS(p,{replace:u,state:h,target:f,preventScrollReset:g,relative:a,viewTransition:x,unstable_defaultShouldRevalidate:v,unstable_useTransitions:y});function A(q){e&&e(q),q.defaultPrevented||O(q)}let U=k.createElement("a",{...S,...L,href:b.absoluteURL||E,onClick:b.isExternal||l?e:A,ref:zS(T,D),target:f,"data-discover":!M&&t==="render"?"true":void 0});return w&&!M?k.createElement(k.Fragment,null,U,k.createElement(OS,{page:E})):U});qf.displayName="Link";var GS=k.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:a=!1,style:l,to:u,viewTransition:h,children:f,...p},g){let x=Xo(u,{relative:p.relative}),v=ki(),S=k.useContext(eu),{navigator:T,basename:R}=k.useContext(ui),y=S!=null&&ZS(x)&&h===!0,M=T.encodeLocation?T.encodeLocation(x).pathname:x.pathname,b=v.pathname,E=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;t||(b=b.toLowerCase(),E=E?E.toLowerCase():null,M=M.toLowerCase()),E&&R&&(E=Mr(E,R)||E);const w=M!=="/"&&M.endsWith("/")?M.length-1:M.length;let D=b===M||!a&&b.startsWith(M)&&b.charAt(w)==="/",L=E!=null&&(E===M||!a&&E.startsWith(M)&&E.charAt(M.length)==="/"),O={isActive:D,isPending:L,isTransitioning:y},A=D?e:void 0,U;typeof s=="function"?U=s(O):U=[s,D?"active":null,L?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let q=typeof l=="function"?l(O):l;return k.createElement(qf,{...p,"aria-current":A,className:U,ref:g,style:q,to:u,viewTransition:h},typeof f=="function"?f(O):f)});GS.displayName="NavLink";var VS=k.forwardRef(({discover:i="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:a,state:l,method:u=Pc,action:h,onSubmit:f,relative:p,preventScrollReset:g,viewTransition:x,unstable_defaultShouldRevalidate:v,...S},T)=>{let{unstable_useTransitions:R}=k.useContext(ui),y=YS(),M=KS(h,{relative:p}),b=u.toLowerCase()==="get"?"get":"post",E=typeof h=="string"&&V0.test(h),w=D=>{if(f&&f(D),D.defaultPrevented)return;D.preventDefault();let L=D.nativeEvent.submitter,O=(L==null?void 0:L.getAttribute("formmethod"))||u,A=()=>y(L||D.currentTarget,{fetcherKey:e,method:O,navigate:t,replace:a,state:l,relative:p,preventScrollReset:g,viewTransition:x,unstable_defaultShouldRevalidate:v});R&&t!==!1?k.startTransition(()=>A()):A()};return k.createElement("form",{ref:T,method:b,action:M,onSubmit:s?f:w,...S,"data-discover":!E&&i==="render"?"true":void 0})});VS.displayName="Form";function WS(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function W0(i){let e=k.useContext(Ia);return Qt(e,WS(i)),e}function XS(i,{target:e,replace:t,state:s,preventScrollReset:a,relative:l,viewTransition:u,unstable_defaultShouldRevalidate:h,unstable_useTransitions:f}={}){let p=Fa(),g=ki(),x=Xo(i,{relative:l});return k.useCallback(v=>{if(ES(v,e)){v.preventDefault();let S=t!==void 0?t:Bo(g)===Bo(x),T=()=>p(i,{replace:S,state:s,preventScrollReset:a,relative:l,viewTransition:u,unstable_defaultShouldRevalidate:h});f?k.startTransition(()=>T()):T()}},[g,p,x,t,s,e,i,a,l,u,h,f])}var $S=0,qS=()=>`__${String(++$S)}__`;function YS(){let{router:i}=W0("useSubmit"),{basename:e}=k.useContext(ui),t=fS(),s=i.fetch,a=i.navigate;return k.useCallback(async(l,u={})=>{let{action:h,method:f,encType:p,formData:g,body:x}=bS(l,e);if(u.navigate===!1){let v=u.fetcherKey||qS();await s(v,t,u.action||h,{unstable_defaultShouldRevalidate:u.unstable_defaultShouldRevalidate,preventScrollReset:u.preventScrollReset,formData:g,body:x,formMethod:u.method||f,formEncType:u.encType||p,flushSync:u.flushSync})}else await a(u.action||h,{unstable_defaultShouldRevalidate:u.unstable_defaultShouldRevalidate,preventScrollReset:u.preventScrollReset,formData:g,body:x,formMethod:u.method||f,formEncType:u.encType||p,replace:u.replace,state:u.state,fromRouteId:t,flushSync:u.flushSync,viewTransition:u.viewTransition})},[s,a,e,t])}function KS(i,{relative:e}={}){let{basename:t}=k.useContext(ui),s=k.useContext(er);Qt(s,"useFormAction must be used inside a RouteContext");let[a]=s.matches.slice(-1),l={...Xo(i||".",{relative:e})},u=ki();if(i==null){l.search=u.search;let h=new URLSearchParams(l.search),f=h.getAll("index");if(f.some(g=>g==="")){h.delete("index"),f.filter(x=>x).forEach(x=>h.append("index",x));let g=h.toString();l.search=g?`?${g}`:""}}return(!i||i===".")&&a.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:yr([t,l.pathname])),Bo(l)}function ZS(i,{relative:e}={}){let t=k.useContext(U0);Qt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=W0("useViewTransitionState"),a=Xo(i,{relative:e});if(!t.isTransitioning)return!1;let l=Mr(t.currentLocation.pathname,s)||t.currentLocation.pathname,u=Mr(t.nextLocation.pathname,s)||t.nextLocation.pathname;return Hc(a.pathname,u)!=null||Hc(a.pathname,l)!=null}const Hh={baseURL:"https://resplendent-commitment-production-1d46.up.railway.app/api/v1",timeout:1e4,headers:{"Content-Type":"application/json"}};class Sa extends Error{constructor(t,s,a){super(t);Bd(this,"status");Bd(this,"details");this.name="ApiError",this.status=s,this.details=a}}function QS(i,e){if(!e)return i;const t=new URLSearchParams;Object.entries(e).forEach(([a,l])=>{l==null||l===""||t.append(a,String(l))});const s=t.toString();return s?`${i}?${s}`:i}function JS(i){if(/^https?:\/\//.test(i))return i;const e=Hh.baseURL.replace(/\/$/,""),t=i.startsWith("/")?i:`/${i}`;return`${e}${t}`}async function Ea(i,e={}){var a,l;const t=new AbortController,s=setTimeout(()=>t.abort(),Hh.timeout);try{const u=JS(QS(i,e.query)),h=await fetch(u,{method:e.method||"GET",cache:"no-store",headers:{...Hh.headers,"Cache-Control":"no-store",Pragma:"no-cache",...e.authToken?{Authorization:`Bearer ${e.authToken}`}:{},...e.headers},body:e.body?JSON.stringify(e.body):void 0,signal:t.signal}),g=(h.headers.get("content-type")||"").includes("application/json")?await h.json():null;if(!h.ok){const x=((a=g==null?void 0:g.error)==null?void 0:a.message)||`HTTP ${h.status}`;throw new Sa(x,h.status,(l=g==null?void 0:g.error)==null?void 0:l.details)}if(!g||!g.ok)throw new Sa("Invalid API response format",h.status);return g.data}catch(u){throw u instanceof Sa?u:u instanceof DOMException&&u.name==="AbortError"?new Sa("Request timeout",408):new Sa(u.message||"Network error",500)}finally{clearTimeout(s)}}const Yf="mboalink.accessToken",Kf="mboalink.refreshToken",zo="mboalink.user";function $o(){return typeof window<"u"&&!!window.localStorage}function eM(i){const e=i.replace(/-/g,"+").replace(/_/g,"/"),t=e.padEnd(e.length+(4-e.length%4)%4,"=");return atob(t)}function av(){const i=Gc();if(!i)return null;try{const e=JSON.parse(eM(i.split(".")[1]||""));if(e.exp&&e.exp*1e3<Date.now()||!e.sub||!e.email)return null;const t={id:e.sub,email:e.email,name:e.fullName,fullName:e.fullName,role:e.role,hotelId:e.hotelId||null};return localStorage.setItem(zo,JSON.stringify(t)),t}catch{return null}}function Dc(i){$o()&&(localStorage.setItem(Yf,i.accessToken),localStorage.setItem(Kf,i.refreshToken),localStorage.setItem(zo,JSON.stringify(i.user)))}function X0(){$o()&&(localStorage.removeItem(Yf),localStorage.removeItem(Kf),localStorage.removeItem(zo))}function Gc(){return $o()?localStorage.getItem(Yf):null}function Gh(){return $o()?localStorage.getItem(Kf):null}function Zf(){if(!$o())return null;const i=localStorage.getItem(zo);if(!i)return av();try{return JSON.parse(i)}catch{return localStorage.removeItem(zo),av()}}function qd(i){return{id:i.id||i.sub||"",email:i.email,name:i.fullName,fullName:i.fullName,role:i.role,hotelId:i.hotelId||null}}const Oi={async login(i){const e=await Ea("/auth/login",{method:"POST",body:i});if("mfaRequired"in e&&e.mfaRequired)return e;const t=qd(e.user);return Dc({accessToken:e.accessToken,refreshToken:e.refreshToken,user:t}),{mfaRequired:!1,user:t}},async verifyMfa(i,e){const t=await Ea("/auth/mfa/verify",{method:"POST",body:{email:i,code:e}}),s=qd(t.user);return Dc({accessToken:t.accessToken,refreshToken:t.refreshToken,user:s}),s},async me(){const i=Gc();if(!i)throw new Error("Not authenticated");const e=await Ea("/auth/me",{authToken:i}),t=qd(e);return Dc({accessToken:i,refreshToken:Gh()||"",user:t}),t},getAccessToken:Gc,getRefreshToken:Gh,getStoredUser:Zf,async logout(){X0()}};async function tM(){const i=Gh();if(!i)return null;try{const e=await Ea("/auth/refresh",{method:"POST",body:{refreshToken:i}}),t=Zf();return t?(Dc({accessToken:e.accessToken,refreshToken:i,user:t}),e.accessToken):null}catch{return X0(),null}}async function gt(i,e){const t=Gc();if(!t)throw new Error("Session expirée. Veuillez vous reconnecter.");try{return await Ea(i,{method:e==null?void 0:e.method,body:e==null?void 0:e.body,query:e==null?void 0:e.query,authToken:t})}catch(s){if(!(s instanceof Sa)||s.status!==401)throw s;const a=await tM();if(!a)throw new Error("Session expirée. Veuillez vous reconnecter.");return Ea(i,{method:e==null?void 0:e.method,body:e==null?void 0:e.body,query:e==null?void 0:e.query,authToken:a})}}const ot={listHotels(i){return gt("/hotels",{query:i})},createHotel(i){return gt("/hotels",{method:"POST",body:i})},updateHotel(i,e){return gt(`/hotels/${i}`,{method:"PATCH",body:e})},deleteHotel(i){return gt(`/hotels/${i}`,{method:"DELETE"})},listCaptivePortals(i){return gt(`/hotels/${i}/captive-portals`)},createCaptivePortal(i,e){return gt(`/hotels/${i}/captive-portals`,{method:"POST",body:e})},updateCaptivePortal(i,e,t){return gt(`/hotels/${i}/captive-portals/${e}`,{method:"PATCH",body:t})},deleteCaptivePortal(i,e){return gt(`/hotels/${i}/captive-portals/${e}`,{method:"DELETE"})},listRooms(i){return gt("/rooms",{query:i})},createRoom(i,e){return gt(`/hotels/${i}/rooms`,{method:"POST",body:e})},updateRoom(i,e){return gt(`/rooms/${i}`,{method:"PATCH",body:e})},deleteRoom(i){return gt(`/rooms/${i}`,{method:"DELETE"})},listWifiConfigs(i){return gt("/wifi-configs",{query:i})},upsertWifiConfig(i,e){return gt(`/hotels/${i}/wifi-config`,{method:"PUT",body:e})},listGuestPasses(i){return gt("/guest-passes",{query:i})},createGuestPass(i){return gt("/guest-passes",{method:"POST",body:i})},createGuestPassesBulk(i){return gt("/guest-passes/bulk",{method:"POST",body:i})},revokeGuestPass(i){return gt(`/guest-passes/${i}/revoke`,{method:"PATCH"})},deleteGuestPass(i){return gt(`/guest-passes/${i}`,{method:"DELETE"})},listLoginSessions(i){return gt("/login-sessions",{query:i})},createManualLogin(i){return gt("/login-sessions/manual",{method:"POST",body:i})},updateLoginSession(i,e){return gt(`/login-sessions/${i}`,{method:"PATCH",body:e})},listClearedAddresses(i){return gt("/cleared-addresses",{query:i})},createClearedAddress(i){return gt("/cleared-addresses",{method:"POST",body:i})},deleteClearedAddresses(i){return gt("/cleared-addresses",{method:"DELETE",body:{ids:i}})},getGuestConfig(i){return gt(`/hotels/${i}/guest-config`)},upsertGuestConfig(i){return gt("/guest-config",{method:"PUT",body:i})},listDevices(i){return gt("/devices",{query:i})},createDevice(i){return gt("/devices",{method:"POST",body:i})},updateDevice(i,e){return gt(`/devices/${i}`,{method:"PATCH",body:e})},deleteDevice(i){return gt(`/devices/${i}`,{method:"DELETE"})},restartDevice(i){return gt(`/devices/${i}/restart`,{method:"POST"})},listDeviceMetrics(i,e){return gt(`/devices/${i}/metrics`,{query:e})},getDashboardOverview(i){return gt("/dashboard/overview",{query:i})},listUsers(i){return gt("/users",{query:i})},createUser(i){return gt("/users",{method:"POST",body:i})},updateUser(i,e){return gt(`/users/${i}`,{method:"PATCH",body:e})},deactivateUser(i){return gt(`/users/${i}/deactivate`,{method:"PATCH"})},listNotificationRecipients(){return gt("/notifications/recipients")},listNotificationsInbox(i){return gt("/notifications/inbox",{query:i})},listSentNotifications(){return gt("/notifications/sent")},getUnreadNotificationCount(){return gt("/notifications/unread-count")},createNotification(i){return gt("/notifications",{method:"POST",body:i})},markNotificationRead(i){return gt(`/notifications/${i}/read`,{method:"PATCH"})}},it={public:{home:"/home",dashboard:"/dashboard",networkMap:"/dashboard/network-map",login:"/login",mfa:"/mfa",register:"/register",forgotPassword:"/forgot-password",wifiCode:"/logins/wifi-code",loginByAddress:"/logins/login-by-address",statusLogins:"/logins/status-logins",manualLogin:"/logins/manual-login",websitesManager:"/logins/websites-manager",configCode:"/logins/config-code",hotels:"/hotel-manager/hotels",rooms:"/hotel-manager/rooms",configWifi:"/hotel-manager/config-wifi",devices:"/device-manager/devices",adminMboa:"/admin-mboa",superAdmin:"/super-admin",users:"/admin/users",notifications:"/notifications"},protected:{dashboard:"/dashboard",profile:"/profile",settings:"/settings"},admin:{users:"/admin/users",settings:"/admin/settings"}},$0="/assets/mboalink-logo-navbar-CXxN8FJp.png";function nM(){const i=Fa(),e=ki(),[t,s]=k.useState(""),[a,l]=k.useState(""),[u,h]=k.useState(!1),[f,p]=k.useState(""),g=async x=>{var v;x.preventDefault(),h(!0),p("");try{const S=await Oi.login({email:t,password:a});if(S.mfaRequired)i(it.public.mfa,{state:{email:S.email}});else{const T=new URLSearchParams(e.search).get("redirect"),R=(v=S.user)==null?void 0:v.role,y=R==="ADMIN"?it.public.adminMboa:R==="RECEPTIONIST"?it.public.manualLogin:["SUPPORT","HOTEL_IT"].includes(R)?it.public.dashboard:it.public.home,M=R!=="ADMIN"&&(T==null?void 0:T.startsWith("/"))&&T!==it.public.login;i(M?T:y,{replace:!0})}}catch(S){p((S==null?void 0:S.message)||"Identifiants incorrects")}finally{h(!1)}};return c.jsxs("div",{className:"loginPage",children:[c.jsxs("div",{className:"loginLeft",children:[c.jsxs("div",{className:"loginBrand",children:[c.jsx("div",{className:"brandLogo",children:c.jsx("img",{src:$0,alt:"MboaLink"})}),c.jsx("div",{className:"brandText",children:c.jsx("p",{className:"brandTagline",children:"HOSPITALITY • TRANSPORT • SMART ACCESS"})})]}),c.jsxs("div",{className:"loginHero",children:[c.jsxs("h2",{className:"heroTitle",children:["Connectez-vous à",c.jsx("br",{}),"votre ",c.jsx("span",{className:"highlight",children:"écosystème"})," Mboa."]}),c.jsx("p",{className:"heroDescription",children:"MboaLink synchronise vos établissements, gares routières et partenaires en une seule plateforme fluide, pensée pour l'Afrique et le monde."}),c.jsxs("div",{className:"features",children:[c.jsxs("div",{className:"feature",children:[c.jsx("div",{className:"featureIcon",children:"✓"}),c.jsx("span",{children:"Check-in en moins de 30s"})]}),c.jsxs("div",{className:"feature",children:[c.jsx("div",{className:"featureIcon",children:"✓"}),c.jsx("span",{children:"Monitoring temps réel"})]}),c.jsxs("div",{className:"feature",children:[c.jsx("div",{className:"featureIcon",children:"✓"}),c.jsx("span",{children:"Data sécurisée & conforme"})]})]}),c.jsxs("div",{className:"stats",children:[c.jsxs("div",{className:"stat",children:[c.jsx("div",{className:"statValue",children:"+120"}),c.jsx("div",{className:"statLabel",children:"Sites connectés"})]}),c.jsxs("div",{className:"stat",children:[c.jsx("div",{className:"statValue",children:"99.9%"}),c.jsx("div",{className:"statLabel",children:"Disponibilité"})]}),c.jsxs("div",{className:"stat",children:[c.jsx("div",{className:"statValue",children:"24/7"}),c.jsx("div",{className:"statLabel",children:"Support dédié"})]})]})]}),c.jsx("footer",{className:"loginFooter",children:c.jsx("p",{children:"© 2025 MboaLink. Tous droits réservés."})})]}),c.jsx("div",{className:"loginRight",children:c.jsxs("div",{className:"loginCard",children:[c.jsx("h3",{className:"cardTitle",children:"Connexion"}),c.jsx("p",{className:"cardSubtitle",children:"Accédez à votre espace d'administration sécurisé"}),c.jsxs("form",{onSubmit:g,className:"loginForm",children:[f&&c.jsx("p",{className:"helpText",style:{color:"#b91c1c"},children:f}),c.jsxs("div",{className:"formGroup",children:[c.jsx("label",{htmlFor:"email",children:"Adresse e-mail"}),c.jsx("input",{id:"email",type:"email",placeholder:"vous@entreprise.com",value:t,onChange:x=>s(x.target.value),required:!0,disabled:u})]}),c.jsxs("div",{className:"formGroup",children:[c.jsx("label",{htmlFor:"password",children:"Mot de passe"}),c.jsx("input",{id:"password",type:"password",placeholder:"Votre mot de passe",value:a,onChange:x=>l(x.target.value),required:!0,disabled:u})]}),c.jsx("a",{href:"#",className:"forgotPassword",children:"Mot de passe oublié ?"}),c.jsx("button",{type:"submit",className:"submitBtn",disabled:u,children:u?"Connexion...":"Se connecter"})]}),c.jsxs("p",{className:"helpText",children:["Besoin d'un accès ? ",c.jsx("a",{href:"#",children:"Contacter l'administrateur"})]})]})})]})}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iM=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),rM=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase()),ov=i=>{const e=rM(i);return e.charAt(0).toUpperCase()+e.slice(1)},q0=(...i)=>i.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var sM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aM=k.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:a="",children:l,iconNode:u,...h},f)=>k.createElement("svg",{ref:f,...sM,width:e,height:e,stroke:i,strokeWidth:s?Number(t)*24/Number(e):t,className:q0("lucide",a),...h},[...u.map(([p,g])=>k.createElement(p,g)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ei=(i,e)=>{const t=k.forwardRef(({className:s,...a},l)=>k.createElement(aM,{ref:l,iconNode:e,className:q0(`lucide-${iM(ov(i))}`,`lucide-${i}`,s),...a}));return t.displayName=ov(i),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oM=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],lM=Ei("activity",oM);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cM=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6",key:"5bb3ad"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8",key:"tap9e0"}]],uM=Ei("bell-ring",cM);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dM=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]],hM=Ei("building-2",dM);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fM=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Yd=Ei("chevron-right",fM);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pM=[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]],mM=Ei("gauge",pM);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gM=[["path",{d:"M10 22v-6.57",key:"1wmca3"}],["path",{d:"M12 11h.01",key:"z322tv"}],["path",{d:"M12 7h.01",key:"1ivr5q"}],["path",{d:"M14 15.43V22",key:"1q2vjd"}],["path",{d:"M15 16a5 5 0 0 0-6 0",key:"o9wqvi"}],["path",{d:"M16 11h.01",key:"xkw8gn"}],["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 7h.01",key:"1vti4s"}],["rect",{x:"4",y:"2",width:"16",height:"20",rx:"2",key:"1uxh74"}]],vM=Ei("hotel",gM);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xM=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],lv=Ei("network",xM);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _M=[["path",{d:"M4.9 16.1C1 12.2 1 5.8 4.9 1.9",key:"s0qx1y"}],["path",{d:"M7.8 4.7a6.14 6.14 0 0 0-.8 7.5",key:"1idnkw"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}],["path",{d:"M16.2 4.8c2 2 2.26 5.11.8 7.47",key:"ojru2q"}],["path",{d:"M19.1 1.9a9.96 9.96 0 0 1 0 14.1",key:"rhi7fg"}],["path",{d:"M9.5 18h5",key:"mfy3pd"}],["path",{d:"m8 22 4-11 4 11",key:"25yftu"}]],cv=Ei("radio-tower",_M);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yM=[["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6.01 18H6",key:"19vcac"}],["path",{d:"M10.01 18H10",key:"uamcmx"}],["path",{d:"M15 10v4",key:"qjz1xs"}],["path",{d:"M17.84 7.17a4 4 0 0 0-5.66 0",key:"1rif40"}],["path",{d:"M20.66 4.34a8 8 0 0 0-11.31 0",key:"6a5xfq"}]],uv=Ei("router",yM);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SM=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],MM=Ei("server",SM);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EM=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],TM=Ei("shield-check",EM);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wM=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],bM=Ei("wifi",wM);function CM(){var x;const i=Fa(),t=((x=ki().state)==null?void 0:x.email)||"",[s,a]=k.useState(""),[l,u]=k.useState(!1),[h,f]=k.useState("");if(!t)return i(it.public.login,{replace:!0}),null;const p=async v=>{if(v.preventDefault(),s.length<6){f("Veuillez entrer un code valide à 6 chiffres");return}u(!0),f("");try{await Oi.verifyMfa(t,s),i(it.public.home,{replace:!0})}catch(S){f((S==null?void 0:S.message)||"Code invalide ou expiré"),a("")}finally{u(!1)}},g=()=>{i(it.public.login,{replace:!0})};return c.jsx("div",{className:"twoFactorPage",children:c.jsxs("div",{className:"twoFactorCard",children:[c.jsxs("div",{className:"tfBrand",children:[c.jsx("div",{className:"tfLogo",children:c.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",children:[c.jsx("path",{d:"M20 5L5 15V25L20 35L35 25V15L20 5Z",fill:"#EDC707"}),c.jsx("circle",{cx:"20",cy:"20",r:"8",fill:"#052F5F"})]})}),c.jsx("h1",{className:"tfBrandName",children:"MboaLink"})]}),c.jsxs("div",{className:"tfContent",children:[c.jsx("h2",{className:"tfTitle",children:"Multi-factor authentification"}),c.jsx("p",{className:"tfSubtitle",children:"Additional security code required"}),c.jsxs("div",{className:"userInfo",children:[c.jsx("div",{className:"userAvatar",children:c.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[c.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),c.jsx("circle",{cx:"12",cy:"7",r:"4"})]})}),c.jsxs("div",{className:"userEmail",children:["User: ",c.jsx("strong",{children:t})]}),c.jsx("button",{type:"button",className:"restartLink",onClick:g,children:"Restart login"})]}),c.jsx("p",{className:"tfInstructions",children:"Un code de vérification à 6 chiffres a été envoyé à votre adresse email. Saisissez-le ci-dessous."}),c.jsxs("form",{onSubmit:p,className:"tfForm",children:[c.jsx("input",{type:"text",inputMode:"numeric",placeholder:"000000",value:s,onChange:v=>{a(v.target.value.replace(/\D/g,"").slice(0,6)),f("")},maxLength:6,className:"codeInput",disabled:l,autoFocus:!0}),h&&c.jsx("div",{className:"errorMessage",children:h}),c.jsx("button",{type:"submit",className:"tfSubmitBtn",disabled:l||s.length<6,children:l?"Vérification...":"Sign in"})]}),c.jsxs("p",{className:"tfHelp",children:["Having trouble with your code?"," ",c.jsx("a",{href:"#",children:"Use a backup method"})," or"," ",c.jsx("a",{href:"#",children:"contact your administrator"})]})]})]})})}function AM(){const i="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";let e="";for(let t=0;t<6;t++)e+=i.charAt(Math.floor(Math.random()*i.length));return e}function RM(){return new Date().toISOString().split("T")[0]}const Kd=()=>({passCode:AM(),label:"",roomId:"",clientName:"",duration:"",durationType:"Hours",maxUses:0,expiryDate:"",expiryTime:"00:00",uploadCap:1500,downloadCap:1500,zones:{CONFERENCE:!1,PUBLIC:!1,GUEST_ROOM:!1,IROH:!1,RC:!1}});function NM({isOpen:i,onClose:e,onSubmit:t}){const[s,a]=k.useState(Kd()),l=(g,x)=>a(v=>({...v,[g]:x})),u=(g,x)=>{const v=x===""?"":Number(x);a(S=>({...S,[g]:v}))},h=g=>a(x=>({...x,zones:{...x.zones,[g]:!x.zones[g]}})),f=()=>{t&&t(s),a(Kd()),e()},p=()=>{a(Kd()),e()};return i?c.jsx("div",{className:"modalOverlay",onClick:p,children:c.jsxs("div",{className:"modalContent",onClick:g=>g.stopPropagation(),children:[c.jsxs("div",{className:"modalHeader",children:[c.jsx("button",{className:"backBtn",onClick:p,children:"← BACK"}),c.jsxs("div",{className:"modalTitle",children:[c.jsx("h2",{children:"Add A Guest Pass"}),c.jsx("p",{children:"Le code est généré automatiquement. Le label est facultatif et sert seulement à identifier ou catégoriser le code."})]})]}),c.jsxs("div",{className:"modalBody",children:[c.jsxs("section",{className:"formSection",children:[c.jsx("h3",{className:"sectionTitle",children:"General Information"}),c.jsxs("div",{className:"formRow",children:[c.jsxs("div",{className:"formLabel",children:[c.jsx("label",{children:"Pass Code"}),c.jsx("p",{className:"labelHelp",children:"Code généré automatiquement. Vous pouvez le remplacer par le vôtre."})]}),c.jsx("input",{type:"text",value:s.passCode,onChange:g=>l("passCode",g.target.value.toUpperCase()),maxLength:20})]}),c.jsxs("div",{className:"formRow",children:[c.jsxs("div",{className:"formLabel",children:[c.jsxs("label",{children:["Label ",c.jsx("span",{style:{fontWeight:400,color:"#94a3b8"},children:"(optionnel)"})]}),c.jsx("p",{className:"labelHelp",children:`Permet d'identifier ou catégoriser ce code. Ex : "Séminaire RH", "Suite Présidentielle", "Journaliste accrédité". Le code reste indépendant du label.`})]}),c.jsx("input",{type:"text",value:s.label,onChange:g=>l("label",g.target.value),placeholder:"Ex : Conférence Total Energie"})]}),c.jsxs("div",{className:"formRow",children:[c.jsxs("div",{className:"formLabel",children:[c.jsx("label",{children:"Duration"}),c.jsx("p",{className:"labelHelp",children:"Choisissez l'unité puis la valeur. Durée maximale : 180 jours."})]}),c.jsxs("div",{className:"durationGroup",children:[c.jsx("input",{type:"number",value:s.duration,onChange:g=>u("duration",g.target.value),placeholder:"0",min:"0"}),c.jsxs("select",{value:s.durationType,onChange:g=>l("durationType",g.target.value),children:[c.jsx("option",{children:"Hours"}),c.jsx("option",{children:"Days"})]})]})]}),c.jsxs("div",{className:"formRow",children:[c.jsxs("div",{className:"formLabel",children:[c.jsx("label",{children:"Max Number of Uses"}),c.jsx("p",{className:"labelHelp",children:"Utilisations illimitées : saisir 0."})]}),c.jsx("input",{type:"number",value:s.maxUses,onChange:g=>u("maxUses",g.target.value),min:"0"})]}),c.jsxs("div",{className:"formRow",children:[c.jsxs("div",{className:"formLabel",children:[c.jsxs("label",{children:["Expiry Date ",c.jsx("span",{style:{fontWeight:400,color:"#94a3b8"},children:"(optionnel)"})]}),c.jsx("p",{className:"labelHelp",children:"Laissez vide pour aucune expiration. Les dates passées sont bloquées."})]}),c.jsxs("div",{className:"dateTimeGroup",children:[c.jsx("input",{type:"date",value:s.expiryDate,min:RM(),onChange:g=>l("expiryDate",g.target.value)}),c.jsx("input",{type:"time",value:s.expiryTime,onChange:g=>l("expiryTime",g.target.value)})]})]})]}),c.jsxs("section",{className:"formSection",children:[c.jsx("h3",{className:"sectionTitle",children:"Bandwidth Settings"}),c.jsxs("div",{className:"formRow",children:[c.jsxs("div",{className:"formLabel",children:[c.jsx("label",{children:"Upload Cap"}),c.jsx("p",{className:"labelHelp",children:"Glissez ou tapez directement (0 – 15 000 kb/s)."})]}),c.jsxs("div",{className:"capGroup",children:[c.jsx("input",{type:"range",min:"0",max:"15000",step:"100",value:s.uploadCap,onChange:g=>u("uploadCap",g.target.value),className:"capSlider"}),c.jsx("input",{type:"number",min:"0",max:"15000",step:"100",value:s.uploadCap,onChange:g=>u("uploadCap",g.target.value),className:"capInput"}),c.jsx("span",{className:"capUnit",children:"kb/s"})]})]}),c.jsxs("div",{className:"formRow",children:[c.jsxs("div",{className:"formLabel",children:[c.jsx("label",{children:"Download Cap"}),c.jsx("p",{className:"labelHelp",children:"Glissez ou tapez directement (0 – 15 000 kb/s)."})]}),c.jsxs("div",{className:"capGroup",children:[c.jsx("input",{type:"range",min:"0",max:"15000",step:"100",value:s.downloadCap,onChange:g=>u("downloadCap",g.target.value),className:"capSlider"}),c.jsx("input",{type:"number",min:"0",max:"15000",step:"100",value:s.downloadCap,onChange:g=>u("downloadCap",g.target.value),className:"capInput"}),c.jsx("span",{className:"capUnit",children:"kb/s"})]})]})]}),c.jsxs("section",{className:"formSection",children:[c.jsx("h3",{className:"sectionTitle",children:"Zone Information"}),c.jsxs("div",{className:"formRow",children:[c.jsx("div",{className:"formLabel",children:c.jsx("label",{children:"Allowable Zones"})}),c.jsx("div",{className:"checkboxGroup",children:Object.keys(s.zones).map(g=>c.jsxs("label",{className:"checkboxLabel",children:[c.jsx("input",{type:"checkbox",checked:s.zones[g],onChange:()=>h(g)}),c.jsx("span",{children:g.replace("_","-")})]},g))})]})]})]}),c.jsxs("div",{className:"modalFooter",children:[c.jsx("button",{className:"btn btnPrimary",onClick:f,children:"Add Guest Pass"}),c.jsx("button",{className:"btn btnSecondary",onClick:p,children:"Cancel"})]})]})}):null}function PM(){return new Date().toISOString().split("T")[0]}const Zd=()=>({quantity:1,label:"",duration:"",durationType:"Hours",maxUses:0,expiryDate:"",expiryTime:"00:00",uploadCap:1500,downloadCap:1500,zones:{CONFERENCE:!1,PUBLIC:!1,GUEST_ROOM:!1,IROH:!1,RC:!1}});function LM({isOpen:i,onClose:e,onSubmit:t}){const[s,a]=k.useState(Zd()),l=(g,x)=>a(v=>({...v,[g]:x})),u=(g,x)=>{const v=x===""?"":Number(x);a(S=>({...S,[g]:v}))},h=g=>a(x=>({...x,zones:{...x.zones,[g]:!x.zones[g]}})),f=()=>{if(s.quantity<1||s.quantity>1e3){alert("La quantité doit être comprise entre 1 et 1 000.");return}t&&t(s),a(Zd()),e()},p=()=>{a(Zd()),e()};return i?c.jsx("div",{className:"modalOverlay",onClick:p,children:c.jsxs("div",{className:"modalContent",onClick:g=>g.stopPropagation(),children:[c.jsxs("div",{className:"modalHeader",children:[c.jsx("button",{className:"backBtn",onClick:p,children:"← BACK"}),c.jsxs("div",{className:"modalTitle",children:[c.jsx("h2",{children:"Add Mass Guest Pass"}),c.jsx("p",{children:`Créez plusieurs codes WiFi en une seule opération. Les codes sont générés aléatoirement. Le label permet de regrouper et d'identifier tous ces codes sous un même événement ou contexte (ex : "Conférence Total Energie" — tous les codes créés porteront ce label pour les distinguer facilement).`})]})]}),c.jsxs("div",{className:"modalBody",children:[c.jsxs("section",{className:"formSection",children:[c.jsx("h3",{className:"sectionTitle",children:"General Information"}),c.jsxs("div",{className:"formRow",children:[c.jsxs("div",{className:"formLabel",children:[c.jsx("label",{children:"Number of Passes"}),c.jsx("p",{className:"labelHelp",children:"Nombre de codes à créer (maximum 1 000)."})]}),c.jsx("input",{type:"number",value:s.quantity,onChange:g=>u("quantity",g.target.value),min:"1",max:"1000"})]}),c.jsxs("div",{className:"formRow",children:[c.jsxs("div",{className:"formLabel",children:[c.jsxs("label",{children:["Label ",c.jsx("span",{style:{fontWeight:400,color:"#94a3b8"},children:"(optionnel)"})]}),c.jsx("p",{className:"labelHelp",children:'Identifiant commun pour tous les codes générés. Permet de les retrouver et filtrer rapidement. Ex : "Conférence Total Energie", "Séminaire RH Mars 2026", "Journalistes accrédités". Les codes eux-mêmes restent générés aléatoirement.'})]}),c.jsx("input",{type:"text",value:s.label,onChange:g=>l("label",g.target.value),placeholder:"Ex : Conférence Total Energie"})]}),c.jsxs("div",{className:"formRow",children:[c.jsxs("div",{className:"formLabel",children:[c.jsx("label",{children:"Duration"}),c.jsx("p",{className:"labelHelp",children:"Choisissez l'unité puis la valeur. Durée maximale : 180 jours."})]}),c.jsxs("div",{className:"durationGroup",children:[c.jsx("input",{type:"number",value:s.duration,onChange:g=>u("duration",g.target.value),placeholder:"0",min:"0"}),c.jsxs("select",{value:s.durationType,onChange:g=>l("durationType",g.target.value),children:[c.jsx("option",{children:"Hours"}),c.jsx("option",{children:"Days"})]})]})]}),c.jsxs("div",{className:"formRow",children:[c.jsxs("div",{className:"formLabel",children:[c.jsx("label",{children:"Max Number of Uses"}),c.jsx("p",{className:"labelHelp",children:"Utilisations illimitées : saisir 0."})]}),c.jsx("input",{type:"number",value:s.maxUses,onChange:g=>u("maxUses",g.target.value),min:"0"})]}),c.jsxs("div",{className:"formRow",children:[c.jsxs("div",{className:"formLabel",children:[c.jsxs("label",{children:["Expiry Date ",c.jsx("span",{style:{fontWeight:400,color:"#94a3b8"},children:"(optionnel)"})]}),c.jsx("p",{className:"labelHelp",children:"Laissez vide pour aucune expiration. Les dates passées sont bloquées."})]}),c.jsxs("div",{className:"dateTimeGroup",children:[c.jsx("input",{type:"date",value:s.expiryDate,min:PM(),onChange:g=>l("expiryDate",g.target.value)}),c.jsx("input",{type:"time",value:s.expiryTime,onChange:g=>l("expiryTime",g.target.value)})]})]})]}),c.jsxs("section",{className:"formSection",children:[c.jsx("h3",{className:"sectionTitle",children:"Bandwidth Settings"}),c.jsxs("div",{className:"formRow",children:[c.jsxs("div",{className:"formLabel",children:[c.jsx("label",{children:"Upload Cap"}),c.jsx("p",{className:"labelHelp",children:"Glissez ou tapez directement (0 – 15 000 kb/s)."})]}),c.jsxs("div",{className:"capGroup",children:[c.jsx("input",{type:"range",min:"0",max:"15000",step:"100",value:s.uploadCap,onChange:g=>u("uploadCap",g.target.value),className:"capSlider"}),c.jsx("input",{type:"number",min:"0",max:"15000",step:"100",value:s.uploadCap,onChange:g=>u("uploadCap",g.target.value),className:"capInput"}),c.jsx("span",{className:"capUnit",children:"kb/s"})]})]}),c.jsxs("div",{className:"formRow",children:[c.jsxs("div",{className:"formLabel",children:[c.jsx("label",{children:"Download Cap"}),c.jsx("p",{className:"labelHelp",children:"Glissez ou tapez directement (0 – 15 000 kb/s)."})]}),c.jsxs("div",{className:"capGroup",children:[c.jsx("input",{type:"range",min:"0",max:"15000",step:"100",value:s.downloadCap,onChange:g=>u("downloadCap",g.target.value),className:"capSlider"}),c.jsx("input",{type:"number",min:"0",max:"15000",step:"100",value:s.downloadCap,onChange:g=>u("downloadCap",g.target.value),className:"capInput"}),c.jsx("span",{className:"capUnit",children:"kb/s"})]})]})]}),c.jsxs("section",{className:"formSection",children:[c.jsx("h3",{className:"sectionTitle",children:"Zone Information"}),c.jsxs("div",{className:"formRow",children:[c.jsx("div",{className:"formLabel",children:c.jsx("label",{children:"Allowable Zones"})}),c.jsx("div",{className:"checkboxGroup",children:Object.keys(s.zones).map(g=>c.jsxs("label",{className:"checkboxLabel",children:[c.jsx("input",{type:"checkbox",checked:s.zones[g],onChange:()=>h(g)}),c.jsx("span",{children:g.replace("_","-")})]},g))})]})]})]}),c.jsxs("div",{className:"modalFooter",children:[c.jsxs("button",{className:"btn btnPrimary",onClick:f,children:["Create ",s.quantity," Guest Pass",s.quantity>1?"es":""]}),c.jsx("button",{className:"btn btnSecondary",onClick:p,children:"Cancel"})]})]})}):null}const Qd={dashboard:it.public.dashboard,"network-map":it.public.networkMap,"wifi-code":it.public.wifiCode,"login-by-address":it.public.loginByAddress,"status-logins":it.public.statusLogins,"manual-login":it.public.manualLogin,"website-manager":it.public.websitesManager,"config-code":it.public.configCode,hotels:it.public.hotels,rooms:it.public.rooms,"config-wifi":it.public.configWifi,devices:it.public.devices,"admin-mboa":it.public.adminMboa,users:it.public.users,notifications:it.public.notifications};function tr({children:i,activePage:e="LOGINS",activeSubPage:t="WiFi Code"}){var b;const s=Fa(),a=Oi.getStoredUser(),l=(a==null?void 0:a.name)||(a==null?void 0:a.email)||"Utilisateur",u=l.charAt(0).toUpperCase(),h=String((a==null?void 0:a.role)||"").trim().toUpperCase(),f=h==="RECEPTIONIST",p=h==="HOTEL_IT",g=h==="ADMIN",x=h==="SUPPORT"||h.includes("SUPPORT"),v=f?["LOGINS","NOTIFICATIONS"]:p?["DASHBOARD","LOGINS","DEVICE MANAGER","NOTIFICATIONS"]:g?["ADMINISTRATION","LOGINS","DASHBOARD","HOTEL MANAGER","DEVICE MANAGER","NOTIFICATIONS"]:x?["LOGINS","DASHBOARD","NOTIFICATIONS"]:["LOGINS","DASHBOARD","NOTIFICATIONS"],S={LOGINS:f?[{label:"Manual Login",page:"manual-login"}]:p?[{label:"WiFi Code",page:"wifi-code"},{label:"Statut Logins",page:"status-logins"},{label:"Web Site Manager",page:"website-manager"}]:[{label:"WiFi Code",page:"wifi-code"},{label:"Login by Adress",page:"login-by-address"},{label:"Statut Logins",page:"status-logins"},{label:"Manual Login",page:"manual-login"},{label:"Web Site Manager",page:"website-manager"},{label:"Config Code",page:"config-code"}],DASHBOARD:[{label:"Overview",page:"dashboard"},{label:"Network Map",page:"network-map"}],"HOTEL MANAGER":[{label:"Établissements",page:"hotels"},{label:"Rooms",page:"rooms"},{label:"Config WiFi",page:"config-wifi"}],"DEVICE MANAGER":[{label:"Devices",page:"devices"}],NOTIFICATIONS:[{label:"Messages",page:"notifications"}],ADMINISTRATION:[{label:"Super Admin",page:"admin-mboa"}]},T={LOGINS:f?"manual-login":"wifi-code","HOTEL MANAGER":"hotels",DASHBOARD:"dashboard","DEVICE MANAGER":"devices",NOTIFICATIONS:"notifications",ADMINISTRATION:"admin-mboa"},R=v.includes(e),y=E=>{const w=T[E];w&&Qd[w]&&s(Qd[w])},M=async()=>{await Oi.logout(),s(it.public.login)};return c.jsxs("div",{className:"layout",children:[c.jsx("header",{className:"mainHeader",children:c.jsxs("div",{className:"headerInner",children:[c.jsxs("div",{className:"headerLeft",children:[c.jsx("div",{className:"headerBrand",children:c.jsx("img",{src:$0,alt:"MboaLink",className:"headerLogo"})}),c.jsx("nav",{className:"mainNav","aria-label":"Main navigation",children:v.map(E=>c.jsx("button",{type:"button",className:`mainNavLink ${E===e?"active":""}`,onClick:()=>y(E),"aria-disabled":!T[E],children:E},E))})]}),c.jsxs("div",{className:"headerRight",children:[c.jsxs("div",{className:"userInfo",children:[c.jsx("span",{className:"userAvatar",children:u}),c.jsx("span",{className:"userName",children:l})]}),c.jsx("button",{className:"logoutBtn",onClick:M,type:"button",children:"Déconnexion"})]})]})}),R&&((b=S[e])==null?void 0:b.length)>0&&c.jsx("nav",{className:"subNav","aria-label":"Sub navigation",children:c.jsx("div",{className:"subNavInner",children:S[e].map(E=>c.jsx(qf,{to:Qd[E.page],className:`subNavLink ${E.label===t?"active":""}`,children:E.label},E.page))})}),c.jsx("main",{className:"mainContent",children:i}),c.jsx("footer",{className:"mainFooter",children:c.jsxs("div",{className:"footerInner",children:[c.jsxs("div",{className:"footerLinks",children:[c.jsx("a",{href:"#",children:"Terms of Service"}),c.jsx("span",{className:"separator",children:"|"}),c.jsx("a",{href:"#",children:"Privacy Policy"}),c.jsx("span",{className:"separator",children:"|"}),c.jsx("a",{href:"#",children:"Help Desk"})]}),c.jsx("p",{className:"footerCopy",children:"© 2025 MboaLink. Tous droits réservés."})]})})]})}const Gn="all";function Ns(i){return(i==null?void 0:i.role)==="ADMIN"||(i==null?void 0:i.role)==="SUPPORT"}function Oa(i,e=[]){var t;return Ns(i)?Gn:(i==null?void 0:i.hotelId)||((t=e[0])==null?void 0:t.id)||""}function Qr(i){if(!(!i||i===Gn))return i}function Ta(i){return!!i&&i!==Gn}const DM=()=>c.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),c.jsx("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]}),IM=()=>c.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("circle",{cx:"12",cy:"12",r:"10"}),c.jsx("line",{x1:"4.93",y1:"4.93",x2:"19.07",y2:"19.07"})]}),UM=()=>c.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("polyline",{points:"3 6 5 6 21 6"}),c.jsx("path",{d:"M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"}),c.jsx("path",{d:"M10 11v6"}),c.jsx("path",{d:"M14 11v6"}),c.jsx("path",{d:"M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"})]});function dv(i){return i?new Date(i).toLocaleString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}):"—"}function FM(i){return i?new Date(i)<new Date:!1}function Y0(){const i=Oi.getStoredUser(),e=(i==null?void 0:i.role)==="HOTEL_IT",t=Ns(i),[s,a]=k.useState([]),[l,u]=k.useState([]),[h,f]=k.useState([]),[p,g]=k.useState(""),[x,v]=k.useState(!0),[S,T]=k.useState(""),[R,y]=k.useState([]),[M,b]=k.useState(!1),[E,w]=k.useState(!1),D=k.useRef(null),L=async F=>{try{const G=Qr(F),[X,oe]=await Promise.all([ot.listGuestPasses(G?{hotelId:G}:void 0),ot.listRooms(G?{hotelId:G}:void 0)]);a(X),u(oe)}catch(G){alert(G.message||"Impossible de charger les codes")}};k.useEffect(()=>{ot.listHotels().then(F=>{f(F);const G=Oa(i,F);return g(G),L(G)}).catch(F=>alert(F.message||"Chargement impossible")).finally(()=>v(!1))},[]),k.useEffect(()=>{!p||x||(L(p),y([]))},[p]),k.useEffect(()=>{if(!D.current)return;const F=O.length;R.length===0?(D.current.checked=!1,D.current.indeterminate=!1):R.length===F&&F>0?(D.current.checked=!0,D.current.indeterminate=!1):(D.current.checked=!1,D.current.indeterminate=!0)});const O=k.useMemo(()=>{const F=S.trim().toLowerCase();return F?s.filter(G=>{var X,oe;return`${G.code} ${G.label||""} ${G.clientName||""} ${((X=G.room)==null?void 0:X.name)||""} ${((oe=G.room)==null?void 0:oe.type)||""}`.toLowerCase().includes(F)}):s},[s,S]),A=F=>y(G=>G.includes(F)?G.filter(X=>X!==F):[...G,F]),U=()=>y(R.length===O.length?[]:O.map(F=>F.id)),q=async()=>{if(R.length===0){alert("Sélectionnez au moins un code");return}if(confirm(`Supprimer ${R.length} code(s) sélectionné(s) ?`))try{await Promise.all(R.map(F=>ot.deleteGuestPass(F))),await L(p),y([])}catch(F){alert(F.message||"Suppression impossible")}},j=async F=>{var G;if(confirm("Révoquer ce code ? Il ne pourra plus être utilisé."))try{await ot.revokeGuestPass(F),await L(p)}catch(X){if((G=X.message)!=null&&G.includes("expirée")||X.status===401){alert("Votre session a expiré. Veuillez vous reconnecter."),window.location.href="/login";return}alert(X.message||"Révocation impossible")}},Z=async F=>{if(confirm("Supprimer définitivement ce code ?"))try{await ot.deleteGuestPass(F),await L(p),y(G=>G.filter(X=>X!==F))}catch(G){alert(G.message||"Suppression impossible")}},H=async F=>{if(!Ta(p)){alert("Sélectionnez un établissement précis avant de créer un code");return}try{const G=F.duration===""||F.duration===void 0?void 0:Number(F.duration);await ot.createGuestPass({hotelId:p,code:F.passCode,label:F.label,roomId:F.roomId||void 0,clientName:F.clientName||void 0,durationValue:G,durationUnit:F.durationType,maxUses:Number(F.maxUses||0),expiryDate:F.expiryDate||void 0,expiryTime:F.expiryTime||void 0,uploadCapKbps:Number(F.uploadCap||1500),downloadCapKbps:Number(F.downloadCap||1500),zones:Object.entries(F.zones||{}).filter(([,X])=>X).map(([X])=>X)}),await L(p)}catch(G){alert(G.message||"Création impossible")}},Q=async F=>{if(!Ta(p)){alert("Sélectionnez un établissement précis avant de créer des codes");return}try{const G=F.duration===""||F.duration===void 0?void 0:Number(F.duration);await ot.createGuestPassesBulk({hotelId:p,quantity:Number(F.quantity||1),codePrefix:F.label||void 0,label:F.label||void 0,durationValue:G,durationUnit:F.durationType,maxUses:Number(F.maxUses||0),expiryDate:F.expiryDate||void 0,expiryTime:F.expiryTime||void 0,uploadCapKbps:Number(F.uploadCap||1500),downloadCapKbps:Number(F.downloadCap||1500),zones:Object.entries(F.zones||{}).filter(([,X])=>X).map(([X])=>X)}),await L(p)}catch(G){alert(G.message||"Création en masse impossible")}},V=Ta(p);return c.jsxs(tr,{activePage:"LOGINS",activeSubPage:"WiFi Code",children:[c.jsxs("div",{className:"wifiCodePage",children:[c.jsxs("div",{className:"pageHeader",children:[c.jsx("h1",{className:"pageTitle",children:"Guest WiFi Codes"}),e&&c.jsx("span",{className:"hotelBadge",children:"Vue IT établissement - accès clients"}),c.jsx("p",{className:"pageDescription",children:e?"Gérez les accès Wi-Fi clients de votre établissement, avec un périmètre limité à votre établissement.":"Les WiFi Codes permettent à vos invités d'accéder à Internet via MboaLink. Vous pouvez créer de nouveaux codes, ajuster la durée, le débit et le nombre d'utilisations, ou supprimer les codes existants à partir de cette liste."})]}),c.jsxs("div",{className:"displayInfo",children:["Affichage de ",O.length," code",O.length!==1?"s":"","."]}),c.jsx("div",{className:"warningBanner",children:"Toute date d'expiration marquée d'un (*) correspond à un code déjà expiré et sera automatiquement retiré de la liste 30 jours après expiration."}),c.jsxs("div",{className:"actionsBar",children:[t&&c.jsxs("select",{className:"filterSelect",value:p,onChange:F=>g(F.target.value),children:[c.jsx("option",{value:Gn,children:"Tous les établissement(s)"}),h.map(F=>c.jsx("option",{value:F.id,children:F.name},F.id))]}),c.jsx("input",{type:"text",placeholder:"Rechercher un code, un label...",className:"searchInput",value:S,onChange:F=>T(F.target.value)}),c.jsxs("div",{className:"actionButtons",children:[c.jsxs("button",{className:"btn btnSecondary",onClick:q,disabled:R.length===0,children:["Supprimer (",R.length,")"]}),c.jsx("button",{className:"btn btnSecondary",onClick:()=>window.print(),children:"Print List"}),c.jsx("button",{className:"btn btnPrimary",disabled:!V,onClick:()=>w(!0),children:"Add Mass Guest Pass"}),c.jsx("button",{className:"btn btnPrimary",disabled:!V,onClick:()=>b(!0),children:"Add Guest Pass"})]})]}),!p&&!x&&c.jsx("div",{className:"warningBanner",children:"Créez d'abord un établissement dans Établissements avant de générer des codes WiFi."}),p===Gn&&!x&&c.jsx("div",{className:"warningBanner",children:"Vue globale active : sélectionnez un établissement précis pour créer de nouveaux codes WiFi."}),c.jsxs("div",{className:"tableWrapper",children:[x&&c.jsx("p",{style:{padding:"16px",color:"#64748b"},children:"Chargement des codes…"}),c.jsxs("table",{className:"wifiTable",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:c.jsx("input",{type:"checkbox",ref:D,onChange:U,title:R.length>0?"Tout désélectionner":"Tout sélectionner"})}),c.jsx("th",{children:"Pass"}),c.jsx("th",{children:"Label"}),c.jsx("th",{children:"Room / Client"}),c.jsx("th",{children:"Max Uses"}),c.jsx("th",{children:"Duration"}),c.jsx("th",{children:"Cap (Down / Up)"}),c.jsx("th",{children:"Créé le"}),c.jsx("th",{children:"Créé par"}),c.jsx("th",{children:"Expires"}),c.jsx("th",{children:"Options"})]})}),c.jsxs("tbody",{children:[!1,O.length===0&&!x?c.jsx("tr",{children:c.jsx("td",{colSpan:11,style:{textAlign:"center",padding:"40px",color:"#94a3b8"},children:"Aucun code WiFi trouvé."})}):O.map(F=>{var oe,re,B,te;const G=FM(F.expiryAt),X=((oe=F.createdBy)==null?void 0:oe.fullName)||((re=F.createdBy)==null?void 0:re.email)||"—";return c.jsxs("tr",{className:G?"rowExpired":"",children:[c.jsx("td",{children:c.jsx("input",{type:"checkbox",checked:R.includes(F.id),onChange:()=>A(F.id)})}),c.jsx("td",{className:"codeCell",children:F.code}),c.jsx("td",{children:F.label||"—"}),c.jsxs("td",{children:[((B=F.room)==null?void 0:B.name)||((te=F.room)==null?void 0:te.type)||"—",F.clientName?c.jsxs(c.Fragment,{children:[c.jsx("br",{}),c.jsx("small",{children:F.clientName})]}):null]}),c.jsx("td",{children:F.maxUses===0?"∞":F.maxUses}),c.jsx("td",{children:F.durationValue?`${F.durationValue} ${F.durationUnit||""}`:"—"}),c.jsxs("td",{className:"bandwidthCell",children:[F.downloadCapKbps," / ",F.uploadCapKbps," kb/s"]}),c.jsx("td",{className:"dateCell",children:dv(F.createdAt)}),c.jsx("td",{className:"createdByCell",children:X}),c.jsx("td",{className:`dateCell ${G?"expiredDate":""}`,children:F.expiryAt?`${dv(F.expiryAt)}${G?" *":""}`:"—"}),c.jsx("td",{children:c.jsxs("div",{className:"optionsCell",children:[c.jsx("button",{className:"actionIconBtn actionIconBtnRevoke",title:"Révoquer",onClick:()=>j(F.id),disabled:F.isRevoked,children:c.jsx(IM,{})}),c.jsx("button",{className:"actionIconBtn actionIconBtnEdit",title:"Modifier (bientôt disponible)",onClick:()=>alert("Fonctionnalité de modification à venir."),children:c.jsx(DM,{})}),c.jsx("button",{className:"actionIconBtn actionIconBtnDelete",title:"Supprimer",onClick:()=>Z(F.id),children:c.jsx(UM,{})})]})})]},F.id)})]})]})]})]}),c.jsx(NM,{isOpen:M,onClose:()=>b(!1),onSubmit:H,rooms:l}),c.jsx(LM,{isOpen:E,onClose:()=>w(!1),onSubmit:Q})]})}function OM(){return c.jsx(Y0,{})}function kM(){const[i,e]=k.useState(""),[t,s]=k.useState([]),[a,l]=k.useState({address:"",interface:"Not Public IP",clearedDate:"",clearedTime:"16:00",uploadCap:1500,downloadCap:1500,connectionType:"Admin Machine",notes:""}),[u,h]=k.useState([]),[f,p]=k.useState([]),g=async y=>{const M=await ot.listClearedAddresses(y?{hotelId:y}:void 0);h(M.map(b=>({id:b.id,ipmac:b.address,interface:b.networkInterface||"None selected",expires:new Date(b.expiresAt).toLocaleString("fr-FR"),cap:`${b.downloadCapKbps} / ${b.uploadCapKbps}`,issuedBy:b.issuedBy||"-",details:`${b.connectionType||""} ${b.notes||""}`.trim()||"-"})))};k.useEffect(()=>{ot.listHotels().then(async y=>{var b;s(y);const M=((b=y[0])==null?void 0:b.id)||"";e(M),await g(M)}).catch(y=>alert(y.message||"Impossible de charger les adresses"))},[]);const x=(y,M)=>{l(b=>({...b,[y]:M}))},v=async()=>{if(!i){alert("Sélectionnez un établissement");return}if(!a.clearedDate){alert("Sélectionnez une date d’expiration");return}try{await ot.createClearedAddress({hotelId:i,address:a.address,networkInterface:a.interface,expiresAt:`${a.clearedDate}T${a.clearedTime||"00:00"}:00.000Z`,uploadCapKbps:Number(a.uploadCap),downloadCapKbps:Number(a.downloadCap),connectionType:a.connectionType,notes:a.notes}),await g(i)}catch(y){alert(y.message||"Création impossible")}},S=async()=>{if(f.length!==0)try{await ot.deleteClearedAddresses(f),await g(i),p([])}catch(y){alert(y.message||"Suppression impossible")}},T=y=>{p(M=>M.includes(y)?M.filter(b=>b!==y):[...M,y])},R=()=>{p(y=>y.length===u.length?[]:u.map(M=>M.id))};return c.jsx(tr,{activePage:"LOGINS",activeSubPage:"Login by Adress",children:c.jsxs("div",{className:"loginByAddressPage",children:[c.jsxs("div",{className:"pageHeader",children:[c.jsx("h1",{className:"pageTitle",children:"Clear IP/MAC Address"}),c.jsx("p",{className:"pageSubtitle",children:"If the IP you want to clear is a public IP, you must specify the network interface."})]}),c.jsx("div",{className:"clearForm",children:c.jsxs("div",{className:"formSection",children:[c.jsx("h3",{className:"sectionTitle",children:"Address and Device Information"}),c.jsxs("div",{className:"formGrid",children:[c.jsxs("div",{className:"formCol",children:[c.jsxs("div",{className:"formField",children:[c.jsx("label",{children:"Établissement"}),c.jsxs("select",{value:i,onChange:y=>{const M=y.target.value;e(M),g(M)},children:[c.jsx("option",{value:"",children:"Select hotel"}),t.map(y=>c.jsx("option",{value:y.id,children:y.name},y.id))]})]}),c.jsxs("div",{className:"formField",children:[c.jsx("label",{children:"IP/MAC Address"}),c.jsx("p",{className:"fieldHelp",children:"Must be formatted correctly as an IP address or MAC address. Example MAC Address: 3D:F2:C0:A0:B3:4F"}),c.jsx("input",{type:"text",value:a.address,onChange:y=>x("address",y.target.value),placeholder:"Enter IP or MAC address"})]}),c.jsxs("div",{className:"formField",children:[c.jsx("label",{children:"Specify Network Interface"}),c.jsxs("select",{value:a.interface,onChange:y=>x("interface",y.target.value),children:[c.jsx("option",{children:"Not Public IP"}),c.jsx("option",{children:"Public IP – Interface A"}),c.jsx("option",{children:"Public IP – Interface B"})]})]}),c.jsxs("div",{className:"formField",children:[c.jsx("label",{children:"Cleared Until"}),c.jsxs("div",{className:"dateTimeGroup",children:[c.jsx("input",{type:"date",value:a.clearedDate,onChange:y=>x("clearedDate",y.target.value)}),c.jsx("input",{type:"time",value:a.clearedTime,onChange:y=>x("clearedTime",y.target.value)})]})]})]}),c.jsxs("div",{className:"formCol",children:[c.jsxs("div",{className:"formField",children:[c.jsx("label",{children:"Upload Cap"}),c.jsxs("div",{className:"capControl",children:[c.jsx("input",{type:"range",min:"0",max:"15000",step:"100",value:a.uploadCap,onChange:y=>x("uploadCap",Number(y.target.value))}),c.jsx("input",{type:"number",value:a.uploadCap,onChange:y=>x("uploadCap",Number(y.target.value)),className:"capValue"})]})]}),c.jsxs("div",{className:"formField",children:[c.jsx("label",{children:"Download Cap"}),c.jsxs("div",{className:"capControl",children:[c.jsx("input",{type:"range",min:"0",max:"15000",step:"100",value:a.downloadCap,onChange:y=>x("downloadCap",Number(y.target.value))}),c.jsx("input",{type:"number",value:a.downloadCap,onChange:y=>x("downloadCap",Number(y.target.value)),className:"capValue"})]})]}),c.jsxs("div",{className:"formField",children:[c.jsx("label",{children:"Connection Type / Reason"}),c.jsxs("select",{value:a.connectionType,onChange:y=>x("connectionType",y.target.value),children:[c.jsx("option",{children:"Admin Machine"}),c.jsx("option",{children:"Guest Device"}),c.jsx("option",{children:"Staff Device"}),c.jsx("option",{children:"Other"})]})]}),c.jsxs("div",{className:"formField",children:[c.jsx("label",{children:"Notes"}),c.jsx("p",{className:"fieldHelp",children:"Why are you clearing it? Case #, etc."}),c.jsx("textarea",{value:a.notes,onChange:y=>x("notes",y.target.value),placeholder:"Enter notes...",rows:"3"})]})]})]}),c.jsxs("div",{className:"formActions",children:[c.jsx("button",{className:"btn btnPrimary",onClick:v,children:"Clear"}),c.jsx("button",{className:"btn btnDanger",onClick:S,children:"Remove Selected"})]})]})}),c.jsxs("div",{className:"addressTable",children:[c.jsx("div",{className:"tableHeader",children:c.jsx("h3",{className:"tableTitle",children:"Cleared Addresses"})}),c.jsx("div",{className:"tableWrapper",children:c.jsxs("table",{children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{style:{width:"40px"},children:c.jsx("input",{type:"checkbox",checked:f.length===u.length,onChange:R})}),c.jsx("th",{children:"IP/Mac"}),c.jsx("th",{children:"Interface"}),c.jsx("th",{children:"Expires"}),c.jsx("th",{children:"Cap (Down/Up)"}),c.jsx("th",{children:"Issued By"}),c.jsx("th",{children:"Details"}),c.jsx("th",{style:{width:"120px"},children:"Options"})]})}),c.jsx("tbody",{children:u.map(y=>c.jsxs("tr",{className:f.includes(y.id)?"selected":"",children:[c.jsx("td",{children:c.jsx("input",{type:"checkbox",checked:f.includes(y.id),onChange:()=>T(y.id)})}),c.jsx("td",{className:"macAddress",children:y.ipmac}),c.jsx("td",{children:y.interface}),c.jsx("td",{children:y.expires}),c.jsx("td",{className:"capCell",children:y.cap}),c.jsx("td",{children:y.issuedBy}),c.jsx("td",{children:y.details}),c.jsxs("td",{className:"optionsCell",children:[c.jsx("a",{href:"#",className:"optionLink",children:"Remove"})," | ",c.jsx("a",{href:"#",className:"optionLink",children:"Modify"})]})]},y.id))})]})})]})]})})}function BM(){const i=Oi.getStoredUser(),e=Ns(i),[t,s]=k.useState(""),[a,l]=k.useState([]),[u,h]=k.useState([]),[f,p]=k.useState(""),[g,x]=k.useState([]),v=E=>E.map(w=>{var D,L,O;return{...w,room:((D=w.room)==null?void 0:D.name)||((L=w.room)==null?void 0:L.type)||"N/A",name:w.clientName||"None Specified",status:w.status==="ONLINE"?"Online":w.status==="AWAY"?"Away":"Offline",ipmac:`${w.ipAddress||"-"} [${w.macAddress||"-"}]`,duration:"-",start:w.startedAt?new Date(w.startedAt).toLocaleString("fr-FR"):"-",end:w.endedAt?new Date(w.endedAt).toLocaleString("fr-FR"):"-",capDown:w.downloadCapKbps||w.capDownKbps||0,capUp:w.uploadCapKbps||w.capUpKbps||0,currentDown:0,currentUp:0,usageDown:w.usedDownMb||w.usageDownMb||0,usageUp:w.usedUpMb||w.usageUpMb||0,type:(O=w.guestPass)!=null&&O.code?`Guest Pass (${w.guestPass.code})`:w.type}}),S=async E=>{const w=Qr(E),D=await ot.listLoginSessions(w?{hotelId:w}:void 0);x(v(D))};k.useEffect(()=>{ot.listHotels().then(async E=>{h(E);const w=Oa(i,E);p(w),await S(w)}).catch(E=>alert(E.message||"Impossible de charger les sessions"))},[]),k.useEffect(()=>{f&&(S(f).catch(E=>alert(E.message||"Impossible de charger les sessions")),l([]))},[f]);const T=k.useMemo(()=>{const E=g.length,w=g.filter(O=>O.status==="Online").length,D=g.filter(O=>O.status==="Offline").length,L=g.filter(O=>O.status==="Away").length;return{total:E,online:w,offline:D,away:L}},[g]),R=k.useMemo(()=>{const E=t.trim().toLowerCase();return E?g.filter(w=>Object.values(w).some(D=>String(D).toLowerCase().includes(E))):g},[g,t]),y=E=>{l(w=>w.includes(E)?w.filter(D=>D!==E):[...w,E])},M=()=>{l(E=>E.length===R.length?[]:R.map(w=>w.id))},b=()=>{if(a.length===0){alert("Please select at least one login to remove");return}confirm(`Remove ${a.length} selected login(s)?`)&&ot.deleteLoginSessions(a).then(async()=>{await S(f),l([])}).catch(E=>alert(E.message||"Suppression impossible"))};return c.jsx(tr,{activePage:"LOGINS",activeSubPage:"Statut Logins",children:c.jsxs("div",{className:"statutLoginsPage",children:[c.jsxs("div",{className:"pageHeader",children:[c.jsx("h1",{className:"pageTitle",children:"Guest Logins"}),c.jsx("p",{className:"pageSubtitle",children:"All currently logged in users are listed."})]}),c.jsxs("div",{className:"displayInfo",children:["Displaying ",R.length," logins."]}),c.jsxs("div",{className:"statsBar",children:[c.jsxs("div",{className:"statItem",children:[c.jsx("span",{className:"statLabel",children:"TotalGuest:"}),c.jsx("span",{className:"statValue",children:T.total})]}),c.jsxs("div",{className:"statItem",children:[c.jsx("span",{className:"statLabel",children:"TotalOnline:"}),c.jsx("span",{className:"statValue online",children:T.online})]}),c.jsxs("div",{className:"statItem",children:[c.jsx("span",{className:"statLabel",children:"Total Offline:"}),c.jsx("span",{className:"statValue offline",children:T.offline})]}),c.jsxs("div",{className:"statItem",children:[c.jsx("span",{className:"statLabel",children:"Total Away:"}),c.jsx("span",{className:"statValue away",children:T.away})]})]}),c.jsxs("div",{className:"actionsBar",children:[e&&c.jsxs("select",{className:"filterSelect",value:f,onChange:E=>p(E.target.value),children:[c.jsx("option",{value:Gn,children:"Tous les établissement(s)"}),u.map(E=>c.jsx("option",{value:E.id,children:E.name},E.id))]}),c.jsx("input",{type:"text",className:"searchInput",placeholder:"Search by room, name, IP/MAC, type...",value:t,onChange:E=>s(E.target.value)}),c.jsx("button",{className:"btn btnDanger",onClick:b,disabled:a.length===0,children:"Remove Selected"})]}),c.jsx("div",{className:"tableWrapper",children:c.jsxs("table",{className:"loginsTable",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{style:{width:"40px"},children:c.jsx("input",{type:"checkbox",checked:a.length===R.length&&R.length>0,onChange:M})}),c.jsx("th",{children:"Room"}),c.jsx("th",{children:"Name"}),c.jsx("th",{children:"Status"}),c.jsx("th",{children:"Type"}),c.jsx("th",{children:"IP/MAC"}),c.jsx("th",{children:"Duration"}),c.jsx("th",{children:"Start/End"}),c.jsx("th",{children:"Utilization(Down/Up)"}),c.jsx("th",{children:"Options"})]})}),c.jsx("tbody",{children:R.map(E=>c.jsxs("tr",{className:a.includes(E.id)?"selected":"",children:[c.jsx("td",{children:c.jsx("input",{type:"checkbox",checked:a.includes(E.id),onChange:()=>y(E.id)})}),c.jsx("td",{className:"roomCell",children:E.room}),c.jsx("td",{children:E.name}),c.jsx("td",{children:c.jsx("span",{className:`statusBadge ${E.status.toLowerCase()}`,children:E.status})}),c.jsx("td",{className:"typeCell",children:E.type}),c.jsx("td",{className:"macCell",children:E.ipmac}),c.jsx("td",{children:E.duration}),c.jsxs("td",{className:"dateCell",children:[c.jsxs("div",{children:["Start: ",E.start]}),c.jsxs("div",{children:["End: ",E.end]})]}),c.jsxs("td",{className:"utilizationCell",children:[c.jsxs("div",{children:["Cap: ",E.capDown," / ",E.capUp," Kb/s"]}),c.jsxs("div",{children:["Current: ",E.currentDown," / ",E.currentUp," Kb/s"]}),c.jsxs("div",{children:["Usage: ",E.usageDown," / ",E.usageUp," MB"]})]}),c.jsx("td",{className:"optionsCell",children:c.jsx("a",{href:"#",className:"optionLink",children:"Remove"})})]},E.id))})]})})]})})}function hv(i){if(!i)return"";const e=new Date(i),t=s=>String(s).padStart(2,"0");return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}T${t(e.getHours())}:${t(e.getMinutes())}`}function Jd(i){return i?new Date(i).toLocaleString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}):"—"}function Vh(i,e){if(!i||!e)return"—";const t=new Date(e).getTime()-new Date(i).getTime();if(t<=0)return"—";const s=Math.floor(t/(1e3*60*60*24)),a=Math.floor(t%(1e3*60*60*24)/(1e3*60*60));return s===0?`${a}h`:a>0?`${s}j ${a}h`:`${s} jour${s>1?"s":""}`}function zM(i,e){if(!i||!e)return{label:"—",css:""};const t=Date.now(),s=new Date(i).getTime(),a=new Date(e).getTime();return t<s?{label:"À venir",css:"PENDING"}:t>a?{label:"Expiré",css:"EXPIRED"}:{label:"Accès actif",css:"ACTIVE"}}function fv(){return new Date().toISOString().slice(0,16)}function jM({session:i,rooms:e,onClose:t,onSave:s}){var E;const[a,l]=k.useState(i.clientName||""),[u,h]=k.useState(((E=i.room)==null?void 0:E.id)||""),[f,p]=k.useState(hv(i.startedAt)),[g,x]=k.useState(hv(i.endedAt)),[v,S]=k.useState(!1),[T,R]=k.useState(""),y=e.filter(w=>w.hotelId===i.hotelId),M=Vh(f,g),b=async()=>{if(!a.trim()){R("Le nom est requis");return}if(!f){R("Date d'entrée requise");return}if(!g){R("Date de sortie requise");return}if(new Date(g)<=new Date(f)){R("La date de sortie doit être après la date d'entrée");return}S(!0),R("");try{await s(i.id,{clientName:a.trim(),roomId:u||void 0,startedAt:new Date(f).toISOString(),endedAt:new Date(g).toISOString()}),t()}catch(w){R(w.message||"Erreur lors de la modification")}finally{S(!1)}};return c.jsx("div",{className:"mlOverlay",onClick:t,children:c.jsxs("div",{className:"mlModal",onClick:w=>w.stopPropagation(),children:[c.jsxs("div",{className:"mlModalHeader",children:[c.jsx("h3",{className:"mlModalTitle",children:"Modifier le check-in"}),c.jsx("button",{className:"mlModalClose",onClick:t,children:"✕"})]}),c.jsxs("div",{className:"mlModalBody",children:[T&&c.jsx("div",{className:"mlErrorBox",children:T}),c.jsxs("div",{className:"mlModalField",children:[c.jsxs("label",{children:["Nom du client ",c.jsx("span",{className:"required",children:"*"})]}),c.jsx("input",{type:"text",className:"mlInput",value:a,onChange:w=>l(w.target.value),disabled:v})]}),c.jsxs("div",{className:"mlModalField",children:[c.jsx("label",{children:"Numéro de chambre"}),c.jsxs("select",{className:"mlSelectModal",value:u,onChange:w=>h(w.target.value),disabled:v,children:[c.jsx("option",{value:"",children:"— Sélectionner —"}),y.map(w=>c.jsxs("option",{value:w.id,children:[w.name||w.type,w.floor!=null?` (Étage ${w.floor})`:""]},w.id))]})]}),c.jsxs("div",{className:"mlModalGrid",children:[c.jsxs("div",{className:"mlModalField",children:[c.jsxs("label",{children:["Date d'entrée ",c.jsx("span",{className:"required",children:"*"})]}),c.jsx("input",{type:"datetime-local",className:"mlInput",value:f,onChange:w=>p(w.target.value),disabled:v})]}),c.jsxs("div",{className:"mlModalField",children:[c.jsxs("label",{children:["Date de sortie ",c.jsx("span",{className:"required",children:"*"})]}),c.jsx("input",{type:"datetime-local",className:"mlInput",value:g,min:f||void 0,onChange:w=>x(w.target.value),disabled:v})]})]}),M!=="—"&&c.jsxs("div",{className:"mlDurationBadge",children:["Durée du séjour : ",M]})]}),c.jsxs("div",{className:"mlModalFooter",children:[c.jsx("button",{className:"mlBtn mlBtnSecondary",onClick:t,disabled:v,children:"Annuler"}),c.jsx("button",{className:"mlBtn mlBtnPrimary",onClick:b,disabled:v,children:v?"Enregistrement…":"Sauvegarder"})]})]})})}function HM(){const i=Oi.getStoredUser(),e=(i==null?void 0:i.role)==="RECEPTIONIST",t=Ns(i),[s,a]=k.useState([]),[l,u]=k.useState([]),[h,f]=k.useState([]),[p,g]=k.useState(!1),[x,v]=k.useState(""),[S,T]=k.useState(""),[R,y]=k.useState(""),[M,b]=k.useState(""),[E,w]=k.useState(""),[D,L]=k.useState(""),[O,A]=k.useState(""),[U,q]=k.useState(""),[j,Z]=k.useState(null),H=async he=>{const ne=Qr(he),me=ne?{hotelId:ne}:void 0,[fe,Ae]=await Promise.all([ot.listRooms(me),ot.listLoginSessions(me)]);u(fe),f(Ae)};k.useEffect(()=>{ot.listHotels().then(async he=>{a(he);const ne=Oa(i,he);v(ne),await H(ne)}).catch(he=>alert(he.message||"Chargement impossible"))},[]),k.useEffect(()=>{x&&(H(x).catch(he=>alert(he.message||"Chargement impossible")),y(""),b(""))},[x]);const Q=k.useMemo(()=>l.filter(he=>he.hotelId===x),[l,x]),V=he=>{y(he);const ne=Q.find(me=>[me.name,me.type].filter(Boolean).some(fe=>String(fe).toLowerCase()===he.trim().toLowerCase()));b(ne?ne.id:"")},F=!!M,G=!!R.trim(),X=k.useMemo(()=>Vh(E,D),[E,D]),oe=async()=>{var he;if(!Ta(x)){alert("Sélectionnez d'abord un établissement précis");return}if(!S.trim()){alert("Le nom du client est requis");return}if(!G){alert("Saisissez un numéro de chambre");return}if(!E){alert("La date d'entrée est requise");return}if(!D){alert("La date de sortie est requise");return}if(new Date(D)<=new Date(E)){alert("La date de sortie doit être après la date d'entrée");return}g(!0);try{const ne=await ot.createManualLogin({hotelId:x,roomId:M||void 0,roomNumber:R.trim(),clientName:S.trim(),startedAt:new Date(E).toISOString(),endedAt:new Date(D).toISOString()});A(((he=ne.guestPass)==null?void 0:he.code)||"");const me=Qr(x),fe=await ot.listLoginSessions(me?{hotelId:me}:void 0);f(fe),T(""),y(""),b(""),w(""),L("")}catch(ne){alert(ne.message||"Échec du check-in")}finally{g(!1)}},re=()=>{T(""),y(""),b(""),w(""),L(""),A("")},B=async(he,ne)=>{await ot.updateLoginSession(he,ne);const me=Qr(x),fe=await ot.listLoginSessions(me?{hotelId:me}:void 0);f(fe)},te=async he=>{if(confirm("Supprimer ce check-in ?"))try{await ot.deleteLoginSessions([he]),f(ne=>ne.filter(me=>me.id!==he))}catch(ne){alert(ne.message||"Suppression impossible")}},Pe=k.useMemo(()=>{const he=U.trim().toLowerCase(),ne=h.filter(me=>{const fe=me.type==="Manual Login",Ae=x===Gn||me.hotelId===x;return fe&&Ae});return he?ne.filter(me=>{var fe,Ae;return[me.clientName,(fe=me.room)==null?void 0:fe.name,(Ae=me.room)==null?void 0:Ae.type,me.ipAddress,me.macAddress].some(Xe=>String(Xe||"").toLowerCase().includes(he))}):ne},[h,U]),Fe=Ta(x);return c.jsxs(tr,{activePage:"LOGINS",activeSubPage:"Manual Login",children:[c.jsxs("div",{className:"mlPage",children:[c.jsxs("div",{className:"mlHeader",children:[c.jsx("h1",{className:"mlTitle",children:"Manual Login"}),c.jsx("p",{className:"mlSubtitle",children:"Enregistrez un client en précisant son nom, son numéro de chambre et ses dates de séjour. L'accès internet sera actif uniquement pendant la période définie."})]}),c.jsxs("div",{className:"mlCard",children:[c.jsxs("div",{className:"mlCardHeader",children:[c.jsx("h2",{className:"mlSectionTitle",children:"Nouveau check-in client"}),t&&c.jsxs("select",{className:"mlSelectModal",value:x,onChange:he=>v(he.target.value),children:[c.jsx("option",{value:Gn,children:"Tous les établissement(s)"}),s.map(he=>c.jsx("option",{value:he.id,children:he.name},he.id))]})]}),c.jsxs("div",{className:"mlCardBody",children:[x===Gn&&c.jsx("div",{className:"mlErrorBox",children:"Vue globale active : sélectionnez un établissement précis pour enregistrer un check-in."}),c.jsxs("div",{className:"mlFormGrid",children:[c.jsxs("div",{className:"mlField",children:[c.jsxs("label",{htmlFor:"clientName",children:["Nom du client ",c.jsx("span",{className:"required",children:"*"})]}),c.jsx("p",{className:"mlFieldHelp",children:"Prénom et nom tel qu'indiqué sur la réservation."}),c.jsx("input",{id:"clientName",type:"text",className:"mlInput",placeholder:"Ex : Felix TANZI",value:S,onChange:he=>T(he.target.value),disabled:p||!Fe})]}),c.jsxs("div",{className:"mlField",children:[c.jsxs("label",{htmlFor:"roomText",children:["Numéro de chambre ",c.jsx("span",{className:"required",children:"*"})]}),c.jsx("p",{className:"mlFieldHelp",children:"Tapez le numéro directement. La chambre sera reconnue ou créée automatiquement."}),c.jsxs("div",{className:"mlRoomInputWrapper",children:[c.jsx("input",{id:"roomText",type:"text",list:"roomSuggestions",className:`mlInput ${G?"mlInputValid":""}`,placeholder:"Ex : 101",value:R,onChange:he=>V(he.target.value),disabled:p||!Fe,autoComplete:"off"}),R&&!F&&c.jsx("span",{className:"mlInputHint mlInputHintOk",children:"Nouvelle chambre: elle sera créée automatiquement"}),F&&c.jsx("span",{className:"mlInputHint mlInputHintOk",children:"✓ Chambre trouvée"}),c.jsx("datalist",{id:"roomSuggestions",children:Q.map(he=>c.jsx("option",{value:he.name||he.type,children:he.type},he.id))})]})]}),c.jsxs("div",{className:"mlField",children:[c.jsxs("label",{htmlFor:"checkIn",children:["Date & heure d'entrée ",c.jsx("span",{className:"required",children:"*"})]}),c.jsx("p",{className:"mlFieldHelp",children:"Début d'accès à internet pour ce client."}),c.jsx("input",{id:"checkIn",type:"datetime-local",className:"mlInput",value:E,min:fv(),onChange:he=>w(he.target.value),disabled:p||!Fe})]}),c.jsxs("div",{className:"mlField",children:[c.jsxs("label",{htmlFor:"checkOut",children:["Date & heure de sortie ",c.jsx("span",{className:"required",children:"*"})]}),c.jsx("p",{className:"mlFieldHelp",children:"Fin d'accès à internet pour ce client."}),c.jsx("input",{id:"checkOut",type:"datetime-local",className:"mlInput",value:D,min:E||fv(),onChange:he=>L(he.target.value),disabled:p||!Fe}),X!=="—"&&c.jsxs("span",{className:"mlDurationBadge",children:["Durée du séjour : ",X]})]})]}),c.jsxs("div",{className:"mlActions",children:[c.jsx("button",{className:"mlBtn mlBtnSecondary",onClick:re,disabled:p,children:"Annuler"}),c.jsx("button",{className:"mlBtn mlBtnPrimary",onClick:oe,disabled:p||!Fe||!S.trim()||!G||!E||!D,children:p?"Enregistrement…":"Valider le check-in"})]}),O&&c.jsxs("div",{className:"mlDurationBadge",children:["Code Wi-Fi à remettre au client : ",c.jsx("strong",{children:O})]})]})]}),c.jsxs("div",{className:"mlTableCard",children:[c.jsxs("div",{className:"mlTableHeader",children:[c.jsxs("div",{children:[c.jsx("h2",{className:"mlSectionTitle",children:"Check-ins enregistrés"}),c.jsxs("p",{className:"mlTableCount",children:[Pe.length," client",Pe.length!==1?"s":""," affiché",Pe.length!==1?"s":""]})]}),c.jsx("input",{type:"text",className:"mlSearch",placeholder:"Rechercher un client, une chambre, une IP…",value:U,onChange:he=>q(he.target.value)})]}),c.jsx("div",{className:"mlTableWrapper",children:c.jsxs("table",{className:"mlTable",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Client"}),c.jsx("th",{children:"N° Chambre"}),c.jsx("th",{children:"Type"}),c.jsx("th",{children:"Accès"}),c.jsx("th",{children:"Code Wi-Fi"}),c.jsx("th",{children:"Entrée"}),c.jsx("th",{children:"Sortie"}),c.jsx("th",{children:"Durée"}),c.jsx("th",{children:"IP / MAC"}),c.jsx("th",{children:"Créé le"}),c.jsx("th",{children:"Actions"})]})}),c.jsx("tbody",{children:Pe.length===0?c.jsx("tr",{children:c.jsx("td",{colSpan:11,className:"mlEmptyRow",children:"Aucun check-in enregistré pour le moment."})}):Pe.map(he=>{var me,fe,Ae;const ne=zM(he.startedAt,he.endedAt);return c.jsxs("tr",{children:[c.jsx("td",{className:"mlCellBold",children:he.clientName||"—"}),c.jsx("td",{children:((me=he.room)==null?void 0:me.name)||"—"}),c.jsx("td",{children:((fe=he.room)==null?void 0:fe.type)||"—"}),c.jsx("td",{children:ne.css?c.jsx("span",{className:`mlBadge mlBadge${ne.css}`,children:ne.label}):"—"}),c.jsx("td",{className:"mlCellMono",children:((Ae=he.guestPass)==null?void 0:Ae.code)||"—"}),c.jsx("td",{className:"mlCellDate",children:Jd(he.startedAt)}),c.jsx("td",{className:"mlCellDate",children:Jd(he.endedAt)}),c.jsx("td",{className:"mlCellDuration",children:Vh(he.startedAt,he.endedAt)}),c.jsxs("td",{className:"mlCellMono",children:[he.ipAddress&&c.jsx("span",{className:"mlIpLine",children:he.ipAddress}),he.macAddress&&c.jsx("span",{className:"mlMacLine",children:he.macAddress}),!he.ipAddress&&!he.macAddress&&"—"]}),c.jsx("td",{className:"mlCellDate",children:Jd(he.createdAt)}),c.jsx("td",{children:c.jsxs("div",{className:"mlActionBtns",children:[c.jsx("button",{className:"mlActionBtn mlActionBtnEdit",title:"Modifier",onClick:()=>Z(he),children:"✏️"}),!e&&c.jsx("button",{className:"mlActionBtn mlActionBtnDelete",title:"Supprimer",onClick:()=>te(he.id),children:"🗑️"})]})})]},he.id)})})]})})]})]}),j&&c.jsx(jM,{session:j,rooms:l,onClose:()=>Z(null),onSave:B})]})}const pv={hotelId:"",address:"",networkInterface:"Hotspot",expiresAt:"",uploadCapKbps:1500,downloadCapKbps:1500,connectionType:"Walled Garden",notes:""};function GM(){const[i,e]=k.useState([]),[t,s]=k.useState([]),[a,l]=k.useState(""),[u,h]=k.useState(""),[f,p]=k.useState(pv),[g,x]=k.useState(!0),[v,S]=k.useState(!1),T=async(E=a)=>{const w={hotelId:E||void 0,search:u||void 0},D=await ot.listClearedAddresses(w);s(D)};k.useEffect(()=>{Promise.all([ot.listHotels(),ot.listClearedAddresses()]).then(([E,w])=>{var L;e(E),s(w);const D=((L=E[0])==null?void 0:L.id)||"";l(D),p(O=>({...O,hotelId:D}))}).catch(E=>alert(E.message||"Chargement impossible")).finally(()=>x(!1))},[]);const R=k.useMemo(()=>{const E=u.trim().toLowerCase();return E?t.filter(w=>`${w.address} ${w.networkInterface||""} ${w.connectionType||""} ${w.notes||""} ${w.issuedBy||""}`.toLowerCase().includes(E)):t},[t,u]),y=async E=>{l(E),p(w=>({...w,hotelId:E}));try{await T(E)}catch(w){alert(w.message||"Chargement impossible")}},M=async()=>{if(!f.hotelId||!f.address.trim()||!f.expiresAt){alert("Sélectionnez un établissement, une adresse et une date d’expiration.");return}try{S(!0),await ot.createClearedAddress({...f,address:f.address.trim(),expiresAt:new Date(f.expiresAt).toISOString(),uploadCapKbps:Number(f.uploadCapKbps),downloadCapKbps:Number(f.downloadCapKbps)}),p(E=>({...pv,hotelId:E.hotelId})),await T(f.hotelId)}catch(E){alert(E.message||"Création impossible")}finally{S(!1)}},b=async E=>{if(confirm(`Supprimer l'accès libre ${E.address} ?`))try{await ot.deleteClearedAddresses([E.id]),await T(a)}catch(w){alert(w.message||"Suppression impossible")}};return c.jsx(tr,{activePage:"LOGINS",activeSubPage:"Web Site Manager",children:c.jsxs("div",{className:"websitesManagerPage",children:[c.jsxs("div",{className:"pageHeader",children:[c.jsx("h1",{className:"pageTitle",children:"Gestion des accès libres"}),c.jsx("p",{className:"pageSubtitle",children:"Domaines, IP ou MAC autorisés à passer le portail captif pour un établissement."})]}),c.jsxs("section",{className:"websiteSection",children:[c.jsxs("div",{className:"sectionHeader",children:[c.jsx("h2",{className:"sectionTitle",children:"Nouvel accès libre"}),c.jsx("button",{className:"btn btnPrimary",onClick:M,disabled:v,children:"Ajouter"})]}),c.jsxs("div",{className:"websiteFormGrid",children:[c.jsxs("label",{children:["Établissement",c.jsxs("select",{value:f.hotelId,onChange:E=>p(w=>({...w,hotelId:E.target.value})),children:[c.jsx("option",{value:"",children:"Sélectionner"}),i.map(E=>c.jsx("option",{value:E.id,children:E.name},E.id))]})]}),c.jsxs("label",{children:["Domaine, IP ou MAC",c.jsx("input",{value:f.address,onChange:E=>p(w=>({...w,address:E.target.value})),placeholder:"mboalink.com, 8.8.8.8, AA:BB:CC:DD:EE:FF"})]}),c.jsxs("label",{children:["Interface",c.jsx("input",{value:f.networkInterface,onChange:E=>p(w=>({...w,networkInterface:E.target.value}))})]}),c.jsxs("label",{children:["Expiration",c.jsx("input",{type:"datetime-local",value:f.expiresAt,onChange:E=>p(w=>({...w,expiresAt:E.target.value}))})]}),c.jsxs("label",{children:["Download Kbps",c.jsx("input",{type:"number",min:"0",value:f.downloadCapKbps,onChange:E=>p(w=>({...w,downloadCapKbps:Number(E.target.value)}))})]}),c.jsxs("label",{children:["Upload Kbps",c.jsx("input",{type:"number",min:"0",value:f.uploadCapKbps,onChange:E=>p(w=>({...w,uploadCapKbps:Number(E.target.value)}))})]}),c.jsxs("label",{children:["Type",c.jsx("input",{value:f.connectionType,onChange:E=>p(w=>({...w,connectionType:E.target.value}))})]}),c.jsxs("label",{children:["Notes",c.jsx("input",{value:f.notes,onChange:E=>p(w=>({...w,notes:E.target.value}))})]})]})]}),c.jsxs("section",{className:"websiteSection",children:[c.jsxs("div",{className:"sectionHeader",children:[c.jsx("h2",{className:"sectionTitle",children:"Accès libres enregistrés"}),c.jsxs("div",{className:"websiteFilters",children:[c.jsxs("select",{value:a,onChange:E=>y(E.target.value),children:[c.jsx("option",{value:"",children:"Tous les établissements"}),i.map(E=>c.jsx("option",{value:E.id,children:E.name},E.id))]}),c.jsx("input",{value:u,onChange:E=>h(E.target.value),placeholder:"Rechercher..."}),c.jsx("button",{className:"btn",onClick:()=>T(a),children:"Actualiser"})]})]}),c.jsx("div",{className:"tableWrapper",children:c.jsxs("table",{className:"websiteTable",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Adresse"}),c.jsx("th",{children:"Établissement"}),c.jsx("th",{children:"Interface"}),c.jsx("th",{children:"Expiration"}),c.jsx("th",{children:"Débit"}),c.jsx("th",{children:"Créé par"}),c.jsx("th",{children:"Options"})]})}),c.jsx("tbody",{children:g?c.jsx("tr",{children:c.jsx("td",{colSpan:7,className:"emptyState",children:"Chargement..."})}):R.length===0?c.jsx("tr",{children:c.jsx("td",{colSpan:7,className:"emptyState",children:"Aucun accès libre enregistré."})}):R.map(E=>{var w;return c.jsxs("tr",{children:[c.jsx("td",{children:E.address}),c.jsx("td",{children:((w=i.find(D=>D.id===E.hotelId))==null?void 0:w.name)||E.hotelId}),c.jsx("td",{children:E.networkInterface||"-"}),c.jsx("td",{children:new Date(E.expiresAt).toLocaleString("fr-FR")}),c.jsxs("td",{children:[E.downloadCapKbps," / ",E.uploadCapKbps," Kbps"]}),c.jsx("td",{children:E.issuedBy||"-"}),c.jsx("td",{className:"optionsCell",children:c.jsx("button",{className:"optionBtn danger",onClick:()=>b(E),children:"Supprimer"})})]},E.id)})})]})})]})]})})}function VM(){const[i,e]=k.useState([]),[t,s]=k.useState(""),[a,l]=k.useState({uploadClearAddress:1500,downloadClearAddress:1500,uploadGuestPass:1500,downloadGuestPass:1500,maxPassDuration:180,maxCountPass:600,outageModeEnabled:!1}),[u,h]=k.useState(!1);k.useEffect(()=>{ot.listHotels().then(async x=>{var T;e(x);const v=((T=x[0])==null?void 0:T.id)||"";if(s(v),!v)return;const S=await ot.getGuestConfig(v);l({uploadClearAddress:S.uploadClearAddressKbps,downloadClearAddress:S.downloadClearAddressKbps,uploadGuestPass:S.uploadGuestPassKbps,downloadGuestPass:S.downloadGuestPassKbps,maxPassDuration:S.maxPassDurationDays,maxCountPass:S.maxCountPass,outageModeEnabled:S.outageModeEnabled})}).catch(x=>alert(x.message||"Impossible de charger la configuration"))},[]);const f=(x,v)=>{l(S=>({...S,[x]:v})),h(!0)},p=async()=>{if(!t){alert("Sélectionnez un établissement");return}try{await ot.upsertGuestConfig({hotelId:t,uploadClearAddressKbps:Number(a.uploadClearAddress),downloadClearAddressKbps:Number(a.downloadClearAddress),uploadGuestPassKbps:Number(a.uploadGuestPass),downloadGuestPassKbps:Number(a.downloadGuestPass),maxPassDurationDays:Number(a.maxPassDuration),maxCountPass:Number(a.maxCountPass),outageModeEnabled:!!a.outageModeEnabled}),alert("Configuration updated successfully!"),h(!1)}catch(x){alert(x.message||"Failed to update configuration")}},g=()=>{confirm("Are you sure you want to restore default settings?")&&(l({uploadClearAddress:1500,downloadClearAddress:1500,uploadGuestPass:1500,downloadGuestPass:1500,maxPassDuration:180,maxCountPass:600,outageModeEnabled:!1}),h(!0))};return c.jsx(tr,{activePage:"LOGINS",activeSubPage:"Config Code",children:c.jsxs("div",{className:"configCodePage",children:[c.jsxs("div",{className:"pageHeader",children:[c.jsx("h1",{className:"pageTitle",children:"Guest Global Configuration"}),c.jsx("p",{className:"pageSubtitle",children:"General guest configuration settings for the OVI client."})]}),c.jsxs("div",{className:"warningBanner",children:[c.jsx("strong",{children:"⚠️ Important:"})," Maximum value for Max Count Guest Pass Creation is 1000."]}),c.jsxs("div",{className:"configCard",children:[c.jsxs("div",{className:"configSection",children:[c.jsx("h3",{className:"sectionTitle",children:"Sélection de l'établissement"}),c.jsxs("div",{className:"configField",children:[c.jsx("label",{htmlFor:"hotelId",children:"Hotel"}),c.jsxs("select",{id:"hotelId",value:t,onChange:async x=>{const v=x.target.value;if(s(v),!!v)try{const S=await ot.getGuestConfig(v);l({uploadClearAddress:S.uploadClearAddressKbps,downloadClearAddress:S.downloadClearAddressKbps,uploadGuestPass:S.uploadGuestPassKbps,downloadGuestPass:S.downloadGuestPassKbps,maxPassDuration:S.maxPassDurationDays,maxCountPass:S.maxCountPass,outageModeEnabled:S.outageModeEnabled}),h(!1)}catch(S){alert(S.message||"Impossible de charger la configuration")}},children:[c.jsx("option",{value:"",children:"Select hotel"}),i.map(x=>c.jsx("option",{value:x.id,children:x.name},x.id))]})]})]}),c.jsxs("div",{className:"configSection",children:[c.jsx("h3",{className:"sectionTitle",children:"General Info"}),c.jsxs("div",{className:"configGrid",children:[c.jsxs("div",{className:"configField",children:[c.jsx("label",{htmlFor:"uploadClearAddress",children:"guestConfig.defaultUploadClearAddress"}),c.jsx("p",{className:"fieldDescription",children:"Clear Address Upload Default"}),c.jsx("input",{id:"uploadClearAddress",type:"number",value:a.uploadClearAddress,onChange:x=>f("uploadClearAddress",Number(x.target.value)),min:"0",max:"15000"})]}),c.jsxs("div",{className:"configField",children:[c.jsx("label",{htmlFor:"downloadClearAddress",children:"guestConfig.defaultDownloadClearAddress"}),c.jsx("p",{className:"fieldDescription",children:"Clear Address Download Default"}),c.jsx("input",{id:"downloadClearAddress",type:"number",value:a.downloadClearAddress,onChange:x=>f("downloadClearAddress",Number(x.target.value)),min:"0",max:"15000"})]}),c.jsxs("div",{className:"configField",children:[c.jsx("label",{htmlFor:"uploadGuestPass",children:"guestConfig.defaultUploadGuestPass"}),c.jsx("p",{className:"fieldDescription",children:"Guest Pass Upload Default"}),c.jsx("input",{id:"uploadGuestPass",type:"number",value:a.uploadGuestPass,onChange:x=>f("uploadGuestPass",Number(x.target.value)),min:"0",max:"15000"})]}),c.jsxs("div",{className:"configField",children:[c.jsx("label",{htmlFor:"downloadGuestPass",children:"guestConfig.defaultDownloadGuestPass"}),c.jsx("p",{className:"fieldDescription",children:"Guest Pass Download Default"}),c.jsx("input",{id:"downloadGuestPass",type:"number",value:a.downloadGuestPass,onChange:x=>f("downloadGuestPass",Number(x.target.value)),min:"0",max:"15000"})]}),c.jsxs("div",{className:"configField",children:[c.jsx("label",{htmlFor:"maxPassDuration",children:"guestConfig.maxPassDuration"}),c.jsx("p",{className:"fieldDescription",children:"Maximum passcode duration in days (max 1,365 days)"}),c.jsx("input",{id:"maxPassDuration",type:"number",value:a.maxPassDuration,onChange:x=>f("maxPassDuration",Number(x.target.value)),min:"1",max:"1365"})]}),c.jsxs("div",{className:"configField",children:[c.jsx("label",{htmlFor:"maxCountPass",children:"guestConfig.maxCountPass"}),c.jsx("p",{className:"fieldDescription",children:"Max Count Passcode Creation"}),c.jsx("input",{id:"maxCountPass",type:"number",value:a.maxCountPass,onChange:x=>f("maxCountPass",Number(x.target.value)),min:"1",max:"1000"})]}),c.jsxs("div",{className:"configField radioField",children:[c.jsx("label",{children:"servletConfig.outageModeEnabled"}),c.jsx("p",{className:"fieldDescription",children:"Activate outage mode for 3rd Party Login Pages (MPA, Elevance, Generic API)"}),c.jsxs("div",{className:"radioGroup",children:[c.jsxs("label",{className:"radioLabel",children:[c.jsx("input",{type:"radio",name:"outageMode",checked:a.outageModeEnabled===!0,onChange:()=>f("outageModeEnabled",!0)}),c.jsx("span",{children:"True"})]}),c.jsxs("label",{className:"radioLabel",children:[c.jsx("input",{type:"radio",name:"outageMode",checked:a.outageModeEnabled===!1,onChange:()=>f("outageModeEnabled",!1)}),c.jsx("span",{children:"False"})]})]})]})]})]}),c.jsxs("div",{className:"configActions",children:[c.jsx("button",{className:"btn btnPrimary",onClick:p,disabled:!u,children:"Modify"}),c.jsx("button",{className:"btn btnSecondary",onClick:g,children:"Restore Defaults"})]})]})]})})}function WM(i){const e=i.reduce((a,l)=>a+l.value,0);if(e===0)return{background:"conic-gradient(#dbe7f5 0deg 360deg)",total:0};let t=0;return{background:`conic-gradient(${i.map(a=>{const l=a.value/e*360,u=`${a.color} ${t}deg ${t+l}deg`;return t+=l,u}).join(", ")})`,total:e}}function XM(i){const e=`${i.model||""} ${i.serialNumber||""}`.toLowerCase();return e.includes("switch")?"Switch":e.includes("access")||e.includes("ap-")||e.includes("wifi")?"Access Point":e.includes("router")||e.includes("gateway")?"Gateway":"Autre equipement"}function $M(i){if(!i)return"N/A";const e=new Date(i),t=Date.now()-e.getTime(),s=Math.max(0,Math.floor(t/6e4));if(s<1)return"A l’instant";if(s<60)return`Il y a ${s} min`;const a=Math.floor(s/60);return a<24?`Il y a ${a} h`:`Il y a ${Math.floor(a/24)} j`}function qM(){const i=new Date,e=new Date;e.setDate(i.getDate()-6);const t=s=>s.toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric"});return`${t(e)} - ${t(i)}`}function eh({title:i,items:e,subtitle:t}){const{background:s,total:a}=k.useMemo(()=>WM(e),[e]);return c.jsxs("section",{className:"dashboardPanel chartPanel",children:[c.jsxs("div",{className:"panelHeader",children:[c.jsxs("div",{children:[c.jsx("h3",{children:i}),t&&c.jsx("p",{children:t})]}),c.jsxs("span",{children:[a," total"]})]}),c.jsxs("div",{className:"chartPanelBody",children:[c.jsxs("div",{className:"donutWrap",children:[c.jsx("div",{className:"donutChart",style:{background:s}}),c.jsxs("div",{className:"donutCenter",children:[c.jsx("strong",{children:a}),c.jsx("span",{children:"Total"})]})]}),c.jsx("ul",{className:"chartLegend",children:e.map(l=>c.jsxs("li",{children:[c.jsx("span",{className:"legendDot",style:{backgroundColor:l.color}}),c.jsx("span",{className:"legendText",children:l.label}),c.jsx("strong",{children:l.value})]},l.label))})]})]})}function YM(){var y,M;const i=Fa(),e=Oi.getStoredUser(),t=Ns(e),[s,a]=k.useState([]),[l,u]=k.useState(""),[h,f]=k.useState(null),[p,g]=k.useState(!0),x=async(b,E=s)=>{g(!0);const w=Qr(b),D=w?{hotelId:w}:void 0,[L,O,A,U]=await Promise.all([ot.getDashboardOverview(D),ot.listDevices(D),ot.listLoginSessions(D),ot.listWifiConfigs(D)]),q=w?E.filter(j=>j.id===w):E;f({overview:L,devices:O,sessions:A,hotels:q,wifiConfigs:U}),g(!1)};k.useEffect(()=>{let b=!0;return ot.listHotels().then(async E=>{if(!b)return;a(E);const w=Oa(e,E);u(w),await x(w,E)}).catch(E=>{alert(E.message||"Impossible de charger le dashboard")}).finally(()=>{b&&g(!1)}),()=>{b=!1}},[]),k.useEffect(()=>{!l||s.length===0||x(l).catch(b=>{g(!1),alert(b.message||"Impossible de charger le dashboard")})},[l]);const v=k.useMemo(()=>{var X,oe;if(!h)return null;const{overview:b,devices:E,sessions:w,hotels:D,wifiConfigs:L}=h,O=E.reduce((re,B)=>{const te=String(B.status||"OFFLINE");return re[te]=(re[te]||0)+1,re},{ONLINE:0,OFFLINE:0,UNSTABLE:0}),A=E.reduce((re,B)=>{const te=B.zone||"Non assigne";return re[te]=(re[te]||0)+1,re},{}),U=w.reduce((re,B)=>{var Pe;const te=(Pe=B.guestPass)!=null&&Pe.code?"Guest Pass":B.type||"Autre";return re[te]=(re[te]||0)+1,re},{}),q=E.reduce((re,B)=>{const te=XM(B);return re[te]=(re[te]||0)+1,re},{}),j=L.filter(re=>re.status==="ACTIVE").length,Z=D.length>0?Math.round(j/D.length*100):0,H=b.activeSessions||w.filter(re=>re.status==="ONLINE").length,Q=b.rooms||0,V=Q>0?Math.min(100,Math.round(H/Q*100)):0,F=((X=b.recentAlerts)==null?void 0:X.length)||0,G=[{label:"Chambres",value:b.rooms||0,tone:"blue",helper:`${V}% occupation reseau`,icon:vM},{label:"Equipements",value:E.length,tone:"slate",helper:`${O.ONLINE||0} en ligne`,icon:uv},{label:"Switches actifs",value:q.Switch||0,tone:"green",helper:"Infrastructure filaire",icon:lv},{label:"Access Points",value:q["Access Point"]||0,tone:"gold",helper:"Couverture Wi-Fi",icon:cv}];return{overview:b,devices:E,sessions:w,hotels:D,wifiConfigs:L,statusCounts:O,zoneCounts:A,sessionTypes:U,activeWifiConfigs:j,wifiCoverage:Z,activeSessions:H,roomUsage:V,openAlerts:F,overviewCards:G,activeHotelsLabel:l===Gn?"Vue multi-sites":((oe=D[0])==null?void 0:oe.name)||"Hotel MboaLink"}},[h,l]),S=k.useMemo(()=>v?[{label:"Online",value:v.statusCounts.ONLINE||0,color:"#2563eb"},{label:"Offline",value:v.statusCounts.OFFLINE||0,color:"#64748b"},{label:"Instable",value:v.statusCounts.UNSTABLE||0,color:"#f2c300"}]:[],[v]),T=k.useMemo(()=>{if(!v)return[];const b=["#2563eb","#0f766e","#16a34a","#f2c300","#dc2626","#7c3aed"];return Object.entries(v.zoneCounts).slice(0,6).map(([E,w],D)=>({label:E,value:Number(w),color:b[D%b.length]}))},[v]),R=k.useMemo(()=>{if(!v)return[];const b=["#2563eb","#7c3aed","#f2c300","#16a34a"];return Object.entries(v.sessionTypes).slice(0,4).map(([E,w],D)=>({label:E,value:Number(w),color:b[D%b.length]}))},[v]);return c.jsx(tr,{activePage:"DASHBOARD",activeSubPage:"",children:c.jsxs("div",{className:"dashboardPage dashboardShell",children:[c.jsxs("div",{className:"dashboardTopbar",children:[c.jsxs("div",{className:"dashboardBrandBlock",children:[c.jsx("span",{className:"dashboardBrandName",children:"MboaLink"}),c.jsxs("div",{className:"dashboardTabs",children:[c.jsx("button",{type:"button",className:"dashboardTab active",children:"Dashboard"}),c.jsx("button",{type:"button",className:"dashboardTab",children:"Operations"})]})]}),c.jsxs("div",{className:"dashboardMeta",children:[t&&c.jsxs("select",{className:"dashboardScopeSelect",value:l,onChange:b=>u(b.target.value),children:[c.jsx("option",{value:Gn,children:"Tous les établissement(s)"}),s.map(b=>c.jsx("option",{value:b.id,children:b.name},b.id))]}),c.jsxs("span",{className:"dashboardLiveBadge",children:[c.jsx("span",{}),"Live"]}),c.jsx("span",{className:"dashboardPeriod",children:qM()})]})]}),c.jsxs("div",{className:"dashboardHero",children:[c.jsxs("div",{children:[c.jsx("p",{className:"dashboardEyebrow",children:"Vue generale"}),c.jsx("h1",{className:"dashboardTitle",children:(v==null?void 0:v.activeHotelsLabel)||"MboaLink Dashboard"}),c.jsx("p",{className:"dashboardSubtitle",children:"Supervision reseau, activite client et etat operationnel des hotels depuis un espace clair et exploitable."})]}),c.jsxs("div",{className:"dashboardHeroActions",children:[c.jsxs("button",{type:"button",className:"heroButton secondary",onClick:()=>i(it.public.networkMap),children:[c.jsx(lv,{size:16}),"Network Map"]}),c.jsxs("button",{type:"button",className:"heroButton success",children:[c.jsx(uM,{size:16}),"Alertes actives"]})]})]}),c.jsxs("div",{className:"serviceStatusRow",children:[c.jsxs("div",{className:"servicePill success",children:[c.jsx("span",{className:"serviceIcon",children:c.jsx(MM,{size:18})}),c.jsxs("div",{children:[c.jsx("strong",{children:"OVI Server"}),c.jsx("small",{children:v?"Disponible":"Chargement"})]})]}),c.jsxs("div",{className:`servicePill ${v&&v.activeWifiConfigs>0?"warning":"neutral"}`,children:[c.jsx("span",{className:"serviceIcon",children:c.jsx(bM,{size:18})}),c.jsxs("div",{children:[c.jsx("strong",{children:"Captive Portal"}),c.jsx("small",{children:v?`${v.activeWifiConfigs} config(s) active(s)`:"Chargement"})]})]}),c.jsxs("div",{className:`servicePill ${v&&v.statusCounts.ONLINE>0?"info":"neutral"}`,children:[c.jsx("span",{className:"serviceIcon",children:c.jsx(lM,{size:18})}),c.jsxs("div",{children:[c.jsx("strong",{children:"Internet Uplink"}),c.jsx("small",{children:v?`${v.statusCounts.ONLINE} equipements en ligne`:"Chargement"})]})]})]}),p&&c.jsx("p",{className:"dashboardLoading",children:"Chargement du dashboard..."}),v&&c.jsxs("div",{className:"dashboardContent",children:[c.jsx("aside",{className:"kpiColumn",children:v.overviewCards.map(b=>c.jsxs("article",{className:`kpiTile ${b.tone}`,children:[c.jsxs("div",{className:"kpiTileTop",children:[c.jsx("span",{children:b.label}),c.jsx(b.icon,{size:18})]}),c.jsx("strong",{children:b.value}),c.jsx("small",{children:b.helper})]},b.label))}),c.jsxs("div",{className:"dashboardMain",children:[c.jsxs("div",{className:"dashboardChartsRow",children:[c.jsx(eh,{title:"Devices by Status",subtitle:"Disponibilite reseau",items:S}),c.jsx(eh,{title:"Devices by Zone",subtitle:"Repartition par zone",items:T}),c.jsx(eh,{title:"Sessions by Type",subtitle:"Origine des connexions",items:R}),c.jsxs("section",{className:"dashboardPanel compactStatsPanel",children:[c.jsxs("article",{className:"compactStat blue",children:[c.jsx("div",{className:"compactStatIcon",children:c.jsx(mM,{size:18})}),c.jsx("span",{children:"Guest Logins"}),c.jsx("strong",{children:v.sessions.length}),c.jsx("small",{children:"sur la periode"})]}),c.jsxs("article",{className:"compactStat violet",children:[c.jsx("div",{className:"compactStatIcon",children:c.jsx(TM,{size:18})}),c.jsx("span",{children:"WiFi Coverage"}),c.jsxs("strong",{children:[v.wifiCoverage,"%"]}),c.jsxs("small",{children:[v.activeWifiConfigs," / ",v.hotels.length||0," hotels configures"]})]})]})]}),c.jsxs("div",{className:"dashboardBottomRow",children:[c.jsxs("section",{className:"dashboardPanel metricsPanel",children:[c.jsxs("div",{className:"panelHeader",children:[c.jsxs("div",{children:[c.jsx("h3",{children:"Infrastructure Snapshot"}),c.jsx("p",{children:"Indicateurs de sante operationnelle"})]}),c.jsx("span",{children:"Temps reel logique"})]}),c.jsxs("div",{className:"metricProgressGrid",children:[c.jsxs("div",{className:"metricBlock",children:[c.jsxs("div",{className:"metricHeader",children:[c.jsx("span",{children:"Devices online"}),c.jsxs("strong",{children:[v.statusCounts.ONLINE,"/",v.devices.length]})]}),c.jsx("div",{className:"metricBar",children:c.jsx("div",{className:"metricFill blue",style:{width:`${v.devices.length?v.statusCounts.ONLINE/v.devices.length*100:0}%`}})})]}),c.jsxs("div",{className:"metricBlock",children:[c.jsxs("div",{className:"metricHeader",children:[c.jsx("span",{children:"Occupation reseau"}),c.jsxs("strong",{children:[v.roomUsage,"%"]})]}),c.jsx("div",{className:"metricBar",children:c.jsx("div",{className:"metricFill violet",style:{width:`${v.roomUsage}%`}})})]}),c.jsxs("div",{className:"metricBlock",children:[c.jsxs("div",{className:"metricHeader",children:[c.jsx("span",{children:"Configurations WiFi actives"}),c.jsxs("strong",{children:[v.wifiCoverage,"%"]})]}),c.jsx("div",{className:"metricBar",children:c.jsx("div",{className:"metricFill green",style:{width:`${v.wifiCoverage}%`}})})]}),c.jsxs("div",{className:"metricBlock",children:[c.jsxs("div",{className:"metricHeader",children:[c.jsx("span",{children:"Alertes ouvertes"}),c.jsx("strong",{children:v.openAlerts})]}),c.jsx("div",{className:"metricBar",children:c.jsx("div",{className:"metricFill gold",style:{width:`${Math.min(100,v.openAlerts*10)}%`}})})]})]})]}),c.jsxs("section",{className:"dashboardPanel alertsPanel",children:[c.jsxs("div",{className:"panelHeader",children:[c.jsxs("div",{children:[c.jsx("h3",{children:"Recent Alerts"}),c.jsx("p",{children:"Evenements recents a suivre"})]}),c.jsxs("span",{children:[((y=v.overview.recentAlerts)==null?void 0:y.length)||0," evenement(s)"]})]}),(M=v.overview.recentAlerts)!=null&&M.length?c.jsx("ul",{className:"alertsList",children:v.overview.recentAlerts.map(b=>c.jsxs("li",{className:`alertItem ${String(b.severity||"MEDIUM").toLowerCase()}`,children:[c.jsxs("div",{className:"alertItemTop",children:[c.jsx("strong",{children:b.title}),c.jsx("span",{children:$M(b.createdAt)})]}),c.jsx("p",{children:b.message})]},b.id))}):c.jsxs("div",{className:"emptyStatePanel",children:[c.jsx("strong",{children:"Aucune alerte recente"}),c.jsx("p",{children:"Le dashboard n’a remonte aucun incident critique pour le moment."})]})]}),c.jsxs("section",{className:"dashboardPanel actionsPanel",children:[c.jsxs("div",{className:"panelHeader",children:[c.jsxs("div",{children:[c.jsx("h3",{children:"Actions"}),c.jsx("p",{children:"Acces rapides"})]}),c.jsx("span",{children:"Details"})]}),c.jsxs("button",{type:"button",className:"actionButton",onClick:()=>i("/device-manager/devices"),children:[c.jsx(uv,{size:16}),"Switches",c.jsx(Yd,{size:16})]}),c.jsxs("button",{type:"button",className:"actionButton",onClick:()=>i("/device-manager/devices"),children:[c.jsx(cv,{size:16}),"Access Points",c.jsx(Yd,{size:16})]}),c.jsxs("button",{type:"button",className:"actionButton secondary",onClick:()=>i("/hotel-manager/config-wifi"),children:[c.jsx(hM,{size:16}),"Config WiFi",c.jsx(Yd,{size:16})]})]})]})]})]})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qf="184",wa={ROTATE:0,DOLLY:1,PAN:2},Ma={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},KM=0,mv=1,ZM=2,Ic=1,K0=2,Oo=3,es=0,Jn=1,xr=2,Zi=0,ba=1,Wh=2,gv=3,vv=4,QM=5,Ts=100,JM=101,eE=102,tE=103,nE=104,iE=200,rE=201,sE=202,aE=203,Xh=204,$h=205,oE=206,lE=207,cE=208,uE=209,dE=210,hE=211,fE=212,pE=213,mE=214,qh=0,Yh=1,Kh=2,Aa=3,Zh=4,Qh=5,Jh=6,ef=7,Z0=0,gE=1,vE=2,Qi=0,Jf=1,ep=2,tp=3,nu=4,np=5,ip=6,rp=7,Q0=300,As=301,Ra=302,th=303,nh=304,iu=306,tf=1e3,_r=1001,nf=1002,bn=1003,xE=1004,ec=1005,In=1006,ih=1007,bs=1008,li=1009,J0=1010,ex=1011,jo=1012,sp=1013,Ji=1014,Yi=1015,ci=1016,ap=1017,op=1018,Ho=1020,tx=35902,nx=35899,ix=1021,rx=1022,Ui=1023,Er=1026,Cs=1027,sx=1028,lp=1029,Rs=1030,cp=1031,up=1033,Uc=33776,Fc=33777,Oc=33778,kc=33779,rf=35840,sf=35841,af=35842,of=35843,lf=36196,cf=37492,uf=37496,df=37488,hf=37489,Vc=37490,ff=37491,pf=37808,mf=37809,gf=37810,vf=37811,xf=37812,_f=37813,yf=37814,Sf=37815,Mf=37816,Ef=37817,Tf=37818,wf=37819,bf=37820,Cf=37821,Af=36492,Rf=36494,Nf=36495,Pf=36283,Lf=36284,Wc=36285,Df=36286,_E=3200,If=0,yE=1,Kr="",oi="srgb",Xc="srgb-linear",$c="linear",Ft="srgb",ia=7680,xv=519,SE=512,ME=513,EE=514,dp=515,TE=516,wE=517,hp=518,bE=519,Uf=35044,_v="300 es",Ki=2e3,Go=2001;function CE(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function qc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function AE(){const i=qc("canvas");return i.style.display="block",i}const yv={};function Yc(...i){const e="THREE."+i.shift();console.log(e,...i)}function ax(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function lt(...i){i=ax(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Nt(...i){i=ax(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ff(...i){const e=i.join(" ");e in yv||(yv[e]=!0,lt(...i))}function RE(i,e,t){return new Promise(function(s,a){function l(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}const NE={[qh]:Yh,[Kh]:Jh,[Zh]:ef,[Aa]:Qh,[Yh]:qh,[Jh]:Kh,[ef]:Zh,[Qh]:Aa};class is{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){const s=this._listeners;if(s===void 0)return;const a=s[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const s=t[e.type];if(s!==void 0){e.target=this;const a=s.slice(0);for(let l=0,u=a.length;l<u;l++)a[l].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bc=Math.PI/180,Of=180/Math.PI;function Jr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Pn[i&255]+Pn[i>>8&255]+Pn[i>>16&255]+Pn[i>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[t&63|128]+Pn[t>>8&255]+"-"+Pn[t>>16&255]+Pn[t>>24&255]+Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]).toLowerCase()}function bt(i,e,t){return Math.max(e,Math.min(t,i))}function PE(i,e){return(i%e+e)%e}function rh(i,e,t){return(1-t)*i+t*e}function qi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function zt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const LE={DEG2RAD:Bc},Ep=class Ep{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,a=e.elements;return this.x=a[0]*t+a[3]*s+a[6],this.y=a[1]*t+a[4]*s+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(bt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(bt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),a=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*s-u*a+e.x,this.y=l*a+u*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ep.prototype.isVector2=!0;let Qe=Ep;class ts{constructor(e=0,t=0,s=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=a}static slerpFlat(e,t,s,a,l,u,h){let f=s[a+0],p=s[a+1],g=s[a+2],x=s[a+3],v=l[u+0],S=l[u+1],T=l[u+2],R=l[u+3];if(x!==R||f!==v||p!==S||g!==T){let y=f*v+p*S+g*T+x*R;y<0&&(v=-v,S=-S,T=-T,R=-R,y=-y);let M=1-h;if(y<.9995){const b=Math.acos(y),E=Math.sin(b);M=Math.sin(M*b)/E,h=Math.sin(h*b)/E,f=f*M+v*h,p=p*M+S*h,g=g*M+T*h,x=x*M+R*h}else{f=f*M+v*h,p=p*M+S*h,g=g*M+T*h,x=x*M+R*h;const b=1/Math.sqrt(f*f+p*p+g*g+x*x);f*=b,p*=b,g*=b,x*=b}}e[t]=f,e[t+1]=p,e[t+2]=g,e[t+3]=x}static multiplyQuaternionsFlat(e,t,s,a,l,u){const h=s[a],f=s[a+1],p=s[a+2],g=s[a+3],x=l[u],v=l[u+1],S=l[u+2],T=l[u+3];return e[t]=h*T+g*x+f*S-p*v,e[t+1]=f*T+g*v+p*x-h*S,e[t+2]=p*T+g*S+h*v-f*x,e[t+3]=g*T-h*x-f*v-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,a){return this._x=e,this._y=t,this._z=s,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,a=e._y,l=e._z,u=e._order,h=Math.cos,f=Math.sin,p=h(s/2),g=h(a/2),x=h(l/2),v=f(s/2),S=f(a/2),T=f(l/2);switch(u){case"XYZ":this._x=v*g*x+p*S*T,this._y=p*S*x-v*g*T,this._z=p*g*T+v*S*x,this._w=p*g*x-v*S*T;break;case"YXZ":this._x=v*g*x+p*S*T,this._y=p*S*x-v*g*T,this._z=p*g*T-v*S*x,this._w=p*g*x+v*S*T;break;case"ZXY":this._x=v*g*x-p*S*T,this._y=p*S*x+v*g*T,this._z=p*g*T+v*S*x,this._w=p*g*x-v*S*T;break;case"ZYX":this._x=v*g*x-p*S*T,this._y=p*S*x+v*g*T,this._z=p*g*T-v*S*x,this._w=p*g*x+v*S*T;break;case"YZX":this._x=v*g*x+p*S*T,this._y=p*S*x+v*g*T,this._z=p*g*T-v*S*x,this._w=p*g*x-v*S*T;break;case"XZY":this._x=v*g*x-p*S*T,this._y=p*S*x-v*g*T,this._z=p*g*T+v*S*x,this._w=p*g*x+v*S*T;break;default:lt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,a=Math.sin(s);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],a=t[4],l=t[8],u=t[1],h=t[5],f=t[9],p=t[2],g=t[6],x=t[10],v=s+h+x;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(g-f)*S,this._y=(l-p)*S,this._z=(u-a)*S}else if(s>h&&s>x){const S=2*Math.sqrt(1+s-h-x);this._w=(g-f)/S,this._x=.25*S,this._y=(a+u)/S,this._z=(l+p)/S}else if(h>x){const S=2*Math.sqrt(1+h-s-x);this._w=(l-p)/S,this._x=(a+u)/S,this._y=.25*S,this._z=(f+g)/S}else{const S=2*Math.sqrt(1+x-s-h);this._w=(u-a)/S,this._x=(l+p)/S,this._y=(f+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const a=Math.min(1,t/s);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,a=e._y,l=e._z,u=e._w,h=t._x,f=t._y,p=t._z,g=t._w;return this._x=s*g+u*h+a*p-l*f,this._y=a*g+u*f+l*h-s*p,this._z=l*g+u*p+s*f-a*h,this._w=u*g-s*h-a*f-l*p,this._onChangeCallback(),this}slerp(e,t){let s=e._x,a=e._y,l=e._z,u=e._w,h=this.dot(e);h<0&&(s=-s,a=-a,l=-l,u=-u,h=-h);let f=1-t;if(h<.9995){const p=Math.acos(h),g=Math.sin(p);f=Math.sin(f*p)/g,t=Math.sin(t*p)/g,this._x=this._x*f+s*t,this._y=this._y*f+a*t,this._z=this._z*f+l*t,this._w=this._w*f+u*t,this._onChangeCallback()}else this._x=this._x*f+s*t,this._y=this._y*f+a*t,this._z=this._z*f+l*t,this._w=this._w*f+u*t,this.normalize();return this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),a=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Tp=class Tp{constructor(e=0,t=0,s=0){this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sv.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*a,this.y=l[1]*t+l[4]*s+l[7]*a,this.z=l[2]*t+l[5]*s+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=e.elements,u=1/(l[3]*t+l[7]*s+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*a+l[12])*u,this.y=(l[1]*t+l[5]*s+l[9]*a+l[13])*u,this.z=(l[2]*t+l[6]*s+l[10]*a+l[14])*u,this}applyQuaternion(e){const t=this.x,s=this.y,a=this.z,l=e.x,u=e.y,h=e.z,f=e.w,p=2*(u*a-h*s),g=2*(h*t-l*a),x=2*(l*s-u*t);return this.x=t+f*p+u*x-h*g,this.y=s+f*g+h*p-l*x,this.z=a+f*x+l*g-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*a,this.y=l[1]*t+l[5]*s+l[9]*a,this.z=l[2]*t+l[6]*s+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this.z=bt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this.z=bt(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(bt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,a=e.y,l=e.z,u=t.x,h=t.y,f=t.z;return this.x=a*f-l*h,this.y=l*u-s*f,this.z=s*h-a*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return sh.copy(this).projectOnVector(e),this.sub(sh)}reflect(e){return this.sub(sh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(bt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,a=this.z-e.z;return t*t+s*s+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const a=Math.sin(t)*e;return this.x=a*Math.sin(s),this.y=Math.cos(t)*e,this.z=a*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Tp.prototype.isVector3=!0;let J=Tp;const sh=new J,Sv=new ts,wp=class wp{constructor(e,t,s,a,l,u,h,f,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,u,h,f,p)}set(e,t,s,a,l,u,h,f,p){const g=this.elements;return g[0]=e,g[1]=a,g[2]=h,g[3]=t,g[4]=l,g[5]=f,g[6]=s,g[7]=u,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,u=s[0],h=s[3],f=s[6],p=s[1],g=s[4],x=s[7],v=s[2],S=s[5],T=s[8],R=a[0],y=a[3],M=a[6],b=a[1],E=a[4],w=a[7],D=a[2],L=a[5],O=a[8];return l[0]=u*R+h*b+f*D,l[3]=u*y+h*E+f*L,l[6]=u*M+h*w+f*O,l[1]=p*R+g*b+x*D,l[4]=p*y+g*E+x*L,l[7]=p*M+g*w+x*O,l[2]=v*R+S*b+T*D,l[5]=v*y+S*E+T*L,l[8]=v*M+S*w+T*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],u=e[4],h=e[5],f=e[6],p=e[7],g=e[8];return t*u*g-t*h*p-s*l*g+s*h*f+a*l*p-a*u*f}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],u=e[4],h=e[5],f=e[6],p=e[7],g=e[8],x=g*u-h*p,v=h*f-g*l,S=p*l-u*f,T=t*x+s*v+a*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/T;return e[0]=x*R,e[1]=(a*p-g*s)*R,e[2]=(h*s-a*u)*R,e[3]=v*R,e[4]=(g*t-a*f)*R,e[5]=(a*l-h*t)*R,e[6]=S*R,e[7]=(s*f-p*t)*R,e[8]=(u*t-s*l)*R,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,a,l,u,h){const f=Math.cos(l),p=Math.sin(l);return this.set(s*f,s*p,-s*(f*u+p*h)+u+e,-a*p,a*f,-a*(-p*u+f*h)+h+t,0,0,1),this}scale(e,t){return this.premultiply(ah.makeScale(e,t)),this}rotate(e){return this.premultiply(ah.makeRotation(-e)),this}translate(e,t){return this.premultiply(ah.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<9;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};wp.prototype.isMatrix3=!0;let vt=wp;const ah=new vt,Mv=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ev=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function DE(){const i={enabled:!0,workingColorSpace:Xc,spaces:{},convert:function(a,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Ft&&(a.r=Sr(a.r),a.g=Sr(a.g),a.b=Sr(a.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ft&&(a.r=Ca(a.r),a.g=Ca(a.g),a.b=Ca(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Kr?$c:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,u){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return Ff("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return Ff("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(a,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return i.define({[Xc]:{primaries:e,whitePoint:s,transfer:$c,toXYZ:Mv,fromXYZ:Ev,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:oi},outputColorSpaceConfig:{drawingBufferColorSpace:oi}},[oi]:{primaries:e,whitePoint:s,transfer:Ft,toXYZ:Mv,fromXYZ:Ev,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:oi}}}),i}const At=DE();function Sr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ca(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ra;class IE{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{ra===void 0&&(ra=qc("canvas")),ra.width=e.width,ra.height=e.height;const a=ra.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),s=ra}return s.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qc("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const a=s.getImageData(0,0,e.width,e.height),l=a.data;for(let u=0;u<l.length;u++)l[u]=Sr(l[u]/255)*255;return s.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(Sr(t[s]/255)*255):t[s]=Sr(t[s]);return{data:t,width:e.width,height:e.height}}else return lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let UE=0;class fp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:UE++}),this.uuid=Jr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let u=0,h=a.length;u<h;u++)a[u].isDataTexture?l.push(oh(a[u].image)):l.push(oh(a[u]))}else l=oh(a);s.url=l}return t||(e.images[this.uuid]=s),s}}function oh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?IE.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(lt("Texture: Unable to serialize Texture."),{})}let FE=0;const lh=new J;class Fn extends is{constructor(e=Fn.DEFAULT_IMAGE,t=Fn.DEFAULT_MAPPING,s=_r,a=_r,l=In,u=bs,h=Ui,f=li,p=Fn.DEFAULT_ANISOTROPY,g=Kr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:FE++}),this.uuid=Jr(),this.name="",this.source=new fp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=a,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=f,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(lh).x}get height(){return this.source.getSize(lh).y}get depth(){return this.source.getSize(lh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const s=e[t];if(s===void 0){lt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){lt(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&s&&a.isVector2&&s.isVector2||a&&s&&a.isVector3&&s.isVector3||a&&s&&a.isMatrix3&&s.isMatrix3?a.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Q0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case tf:e.x=e.x-Math.floor(e.x);break;case _r:e.x=e.x<0?0:1;break;case nf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case tf:e.y=e.y-Math.floor(e.y);break;case _r:e.y=e.y<0?0:1;break;case nf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=Q0;Fn.DEFAULT_ANISOTROPY=1;const bp=class bp{constructor(e=0,t=0,s=0,a=1){this.x=e,this.y=t,this.z=s,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,a){return this.x=e,this.y=t,this.z=s,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*s+u[8]*a+u[12]*l,this.y=u[1]*t+u[5]*s+u[9]*a+u[13]*l,this.z=u[2]*t+u[6]*s+u[10]*a+u[14]*l,this.w=u[3]*t+u[7]*s+u[11]*a+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,a,l;const f=e.elements,p=f[0],g=f[4],x=f[8],v=f[1],S=f[5],T=f[9],R=f[2],y=f[6],M=f[10];if(Math.abs(g-v)<.01&&Math.abs(x-R)<.01&&Math.abs(T-y)<.01){if(Math.abs(g+v)<.1&&Math.abs(x+R)<.1&&Math.abs(T+y)<.1&&Math.abs(p+S+M-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(p+1)/2,w=(S+1)/2,D=(M+1)/2,L=(g+v)/4,O=(x+R)/4,A=(T+y)/4;return E>w&&E>D?E<.01?(s=0,a=.707106781,l=.707106781):(s=Math.sqrt(E),a=L/s,l=O/s):w>D?w<.01?(s=.707106781,a=0,l=.707106781):(a=Math.sqrt(w),s=L/a,l=A/a):D<.01?(s=.707106781,a=.707106781,l=0):(l=Math.sqrt(D),s=O/l,a=A/l),this.set(s,a,l,t),this}let b=Math.sqrt((y-T)*(y-T)+(x-R)*(x-R)+(v-g)*(v-g));return Math.abs(b)<.001&&(b=1),this.x=(y-T)/b,this.y=(x-R)/b,this.z=(v-g)/b,this.w=Math.acos((p+S+M-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this.z=bt(this.z,e.z,t.z),this.w=bt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this.z=bt(this.z,e,t),this.w=bt(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(bt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};bp.prototype.isVector4=!0;let an=bp;class OE extends is{constructor(e=1,t=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=s.depth,this.scissor=new an(0,0,e,t),this.scissorTest=!1,this.viewport=new an(0,0,e,t),this.textures=[];const a={width:e,height:t,depth:s.depth},l=new Fn(a),u=s.count;for(let h=0;h<u;h++)this.textures[h]=l.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const t={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=s,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,s=e.textures.length;t<s;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new fp(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ei extends OE{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class ox extends Fn{constructor(e=null,t=1,s=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=bn,this.minFilter=bn,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class kE extends Fn{constructor(e=null,t=1,s=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=bn,this.minFilter=bn,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jc=class Jc{constructor(e,t,s,a,l,u,h,f,p,g,x,v,S,T,R,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,u,h,f,p,g,x,v,S,T,R,y)}set(e,t,s,a,l,u,h,f,p,g,x,v,S,T,R,y){const M=this.elements;return M[0]=e,M[4]=t,M[8]=s,M[12]=a,M[1]=l,M[5]=u,M[9]=h,M[13]=f,M[2]=p,M[6]=g,M[10]=x,M[14]=v,M[3]=S,M[7]=T,M[11]=R,M[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jc().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,s=e.elements,a=1/sa.setFromMatrixColumn(e,0).length(),l=1/sa.setFromMatrixColumn(e,1).length(),u=1/sa.setFromMatrixColumn(e,2).length();return t[0]=s[0]*a,t[1]=s[1]*a,t[2]=s[2]*a,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*u,t[9]=s[9]*u,t[10]=s[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,a=e.y,l=e.z,u=Math.cos(s),h=Math.sin(s),f=Math.cos(a),p=Math.sin(a),g=Math.cos(l),x=Math.sin(l);if(e.order==="XYZ"){const v=u*g,S=u*x,T=h*g,R=h*x;t[0]=f*g,t[4]=-f*x,t[8]=p,t[1]=S+T*p,t[5]=v-R*p,t[9]=-h*f,t[2]=R-v*p,t[6]=T+S*p,t[10]=u*f}else if(e.order==="YXZ"){const v=f*g,S=f*x,T=p*g,R=p*x;t[0]=v+R*h,t[4]=T*h-S,t[8]=u*p,t[1]=u*x,t[5]=u*g,t[9]=-h,t[2]=S*h-T,t[6]=R+v*h,t[10]=u*f}else if(e.order==="ZXY"){const v=f*g,S=f*x,T=p*g,R=p*x;t[0]=v-R*h,t[4]=-u*x,t[8]=T+S*h,t[1]=S+T*h,t[5]=u*g,t[9]=R-v*h,t[2]=-u*p,t[6]=h,t[10]=u*f}else if(e.order==="ZYX"){const v=u*g,S=u*x,T=h*g,R=h*x;t[0]=f*g,t[4]=T*p-S,t[8]=v*p+R,t[1]=f*x,t[5]=R*p+v,t[9]=S*p-T,t[2]=-p,t[6]=h*f,t[10]=u*f}else if(e.order==="YZX"){const v=u*f,S=u*p,T=h*f,R=h*p;t[0]=f*g,t[4]=R-v*x,t[8]=T*x+S,t[1]=x,t[5]=u*g,t[9]=-h*g,t[2]=-p*g,t[6]=S*x+T,t[10]=v-R*x}else if(e.order==="XZY"){const v=u*f,S=u*p,T=h*f,R=h*p;t[0]=f*g,t[4]=-x,t[8]=p*g,t[1]=v*x+R,t[5]=u*g,t[9]=S*x-T,t[2]=T*x-S,t[6]=h*g,t[10]=R*x+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(BE,e,zE)}lookAt(e,t,s){const a=this.elements;return si.subVectors(e,t),si.lengthSq()===0&&(si.z=1),si.normalize(),Gr.crossVectors(s,si),Gr.lengthSq()===0&&(Math.abs(s.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),Gr.crossVectors(s,si)),Gr.normalize(),tc.crossVectors(si,Gr),a[0]=Gr.x,a[4]=tc.x,a[8]=si.x,a[1]=Gr.y,a[5]=tc.y,a[9]=si.y,a[2]=Gr.z,a[6]=tc.z,a[10]=si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,u=s[0],h=s[4],f=s[8],p=s[12],g=s[1],x=s[5],v=s[9],S=s[13],T=s[2],R=s[6],y=s[10],M=s[14],b=s[3],E=s[7],w=s[11],D=s[15],L=a[0],O=a[4],A=a[8],U=a[12],q=a[1],j=a[5],Z=a[9],H=a[13],Q=a[2],V=a[6],F=a[10],G=a[14],X=a[3],oe=a[7],re=a[11],B=a[15];return l[0]=u*L+h*q+f*Q+p*X,l[4]=u*O+h*j+f*V+p*oe,l[8]=u*A+h*Z+f*F+p*re,l[12]=u*U+h*H+f*G+p*B,l[1]=g*L+x*q+v*Q+S*X,l[5]=g*O+x*j+v*V+S*oe,l[9]=g*A+x*Z+v*F+S*re,l[13]=g*U+x*H+v*G+S*B,l[2]=T*L+R*q+y*Q+M*X,l[6]=T*O+R*j+y*V+M*oe,l[10]=T*A+R*Z+y*F+M*re,l[14]=T*U+R*H+y*G+M*B,l[3]=b*L+E*q+w*Q+D*X,l[7]=b*O+E*j+w*V+D*oe,l[11]=b*A+E*Z+w*F+D*re,l[15]=b*U+E*H+w*G+D*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],a=e[8],l=e[12],u=e[1],h=e[5],f=e[9],p=e[13],g=e[2],x=e[6],v=e[10],S=e[14],T=e[3],R=e[7],y=e[11],M=e[15],b=f*S-p*v,E=h*S-p*x,w=h*v-f*x,D=u*S-p*g,L=u*v-f*g,O=u*x-h*g;return t*(R*b-y*E+M*w)-s*(T*b-y*D+M*L)+a*(T*E-R*D+M*O)-l*(T*w-R*L+y*O)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],u=e[4],h=e[5],f=e[6],p=e[7],g=e[8],x=e[9],v=e[10],S=e[11],T=e[12],R=e[13],y=e[14],M=e[15],b=t*h-s*u,E=t*f-a*u,w=t*p-l*u,D=s*f-a*h,L=s*p-l*h,O=a*p-l*f,A=g*R-x*T,U=g*y-v*T,q=g*M-S*T,j=x*y-v*R,Z=x*M-S*R,H=v*M-S*y,Q=b*H-E*Z+w*j+D*q-L*U+O*A;if(Q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/Q;return e[0]=(h*H-f*Z+p*j)*V,e[1]=(a*Z-s*H-l*j)*V,e[2]=(R*O-y*L+M*D)*V,e[3]=(v*L-x*O-S*D)*V,e[4]=(f*q-u*H-p*U)*V,e[5]=(t*H-a*q+l*U)*V,e[6]=(y*w-T*O-M*E)*V,e[7]=(g*O-v*w+S*E)*V,e[8]=(u*Z-h*q+p*A)*V,e[9]=(s*q-t*Z-l*A)*V,e[10]=(T*L-R*w+M*b)*V,e[11]=(x*w-g*L-S*b)*V,e[12]=(h*U-u*j-f*A)*V,e[13]=(t*j-s*U+a*A)*V,e[14]=(R*E-T*D-y*b)*V,e[15]=(g*D-x*E+v*b)*V,this}scale(e){const t=this.elements,s=e.x,a=e.y,l=e.z;return t[0]*=s,t[4]*=a,t[8]*=l,t[1]*=s,t[5]*=a,t[9]*=l,t[2]*=s,t[6]*=a,t[10]*=l,t[3]*=s,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,a))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),a=Math.sin(t),l=1-s,u=e.x,h=e.y,f=e.z,p=l*u,g=l*h;return this.set(p*u+s,p*h-a*f,p*f+a*h,0,p*h+a*f,g*h+s,g*f-a*u,0,p*f-a*h,g*f+a*u,l*f*f+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,a,l,u){return this.set(1,s,l,0,e,1,u,0,t,a,1,0,0,0,0,1),this}compose(e,t,s){const a=this.elements,l=t._x,u=t._y,h=t._z,f=t._w,p=l+l,g=u+u,x=h+h,v=l*p,S=l*g,T=l*x,R=u*g,y=u*x,M=h*x,b=f*p,E=f*g,w=f*x,D=s.x,L=s.y,O=s.z;return a[0]=(1-(R+M))*D,a[1]=(S+w)*D,a[2]=(T-E)*D,a[3]=0,a[4]=(S-w)*L,a[5]=(1-(v+M))*L,a[6]=(y+b)*L,a[7]=0,a[8]=(T+E)*O,a[9]=(y-b)*O,a[10]=(1-(v+R))*O,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,s){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const l=this.determinant();if(l===0)return s.set(1,1,1),t.identity(),this;let u=sa.set(a[0],a[1],a[2]).length();const h=sa.set(a[4],a[5],a[6]).length(),f=sa.set(a[8],a[9],a[10]).length();l<0&&(u=-u),Li.copy(this);const p=1/u,g=1/h,x=1/f;return Li.elements[0]*=p,Li.elements[1]*=p,Li.elements[2]*=p,Li.elements[4]*=g,Li.elements[5]*=g,Li.elements[6]*=g,Li.elements[8]*=x,Li.elements[9]*=x,Li.elements[10]*=x,t.setFromRotationMatrix(Li),s.x=u,s.y=h,s.z=f,this}makePerspective(e,t,s,a,l,u,h=Ki,f=!1){const p=this.elements,g=2*l/(t-e),x=2*l/(s-a),v=(t+e)/(t-e),S=(s+a)/(s-a);let T,R;if(f)T=l/(u-l),R=u*l/(u-l);else if(h===Ki)T=-(u+l)/(u-l),R=-2*u*l/(u-l);else if(h===Go)T=-u/(u-l),R=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=x,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,s,a,l,u,h=Ki,f=!1){const p=this.elements,g=2/(t-e),x=2/(s-a),v=-(t+e)/(t-e),S=-(s+a)/(s-a);let T,R;if(f)T=1/(u-l),R=u/(u-l);else if(h===Ki)T=-2/(u-l),R=-(u+l)/(u-l);else if(h===Go)T=-1/(u-l),R=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=0,p[12]=v,p[1]=0,p[5]=x,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=T,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<16;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}};Jc.prototype.isMatrix4=!0;let nn=Jc;const sa=new J,Li=new nn,BE=new J(0,0,0),zE=new J(1,1,1),Gr=new J,tc=new J,si=new J,Tv=new nn,wv=new ts;class ns{constructor(e=0,t=0,s=0,a=ns.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,a=this._order){return this._x=e,this._y=t,this._z=s,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const a=e.elements,l=a[0],u=a[4],h=a[8],f=a[1],p=a[5],g=a[9],x=a[2],v=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(f,p)):(this._y=Math.atan2(-x,l),this._z=0);break;case"ZXY":this._x=Math.asin(bt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-x,S),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(f,l));break;case"ZYX":this._y=Math.asin(-bt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(f,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(bt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-x,l)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-bt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(h,l)):(this._x=Math.atan2(-g,S),this._y=0);break;default:lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return Tv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tv,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wv.setFromEuler(this),this.setFromQuaternion(wv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ns.DEFAULT_ORDER="XYZ";class lx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jE=0;const bv=new J,aa=new ts,fr=new nn,nc=new J,bo=new J,HE=new J,GE=new ts,Cv=new J(1,0,0),Av=new J(0,1,0),Rv=new J(0,0,1),Nv={type:"added"},VE={type:"removed"},oa={type:"childadded",child:null},ch={type:"childremoved",child:null};class gn extends is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jE++}),this.uuid=Jr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gn.DEFAULT_UP.clone();const e=new J,t=new ns,s=new ts,a=new J(1,1,1);function l(){s.setFromEuler(t,!1)}function u(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new nn},normalMatrix:{value:new vt}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return aa.setFromAxisAngle(e,t),this.quaternion.multiply(aa),this}rotateOnWorldAxis(e,t){return aa.setFromAxisAngle(e,t),this.quaternion.premultiply(aa),this}rotateX(e){return this.rotateOnAxis(Cv,e)}rotateY(e){return this.rotateOnAxis(Av,e)}rotateZ(e){return this.rotateOnAxis(Rv,e)}translateOnAxis(e,t){return bv.copy(e).applyQuaternion(this.quaternion),this.position.add(bv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cv,e)}translateY(e){return this.translateOnAxis(Av,e)}translateZ(e){return this.translateOnAxis(Rv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fr.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?nc.copy(e):nc.set(e,t,s);const a=this.parent;this.updateWorldMatrix(!0,!1),bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fr.lookAt(bo,nc,this.up):fr.lookAt(nc,bo,this.up),this.quaternion.setFromRotationMatrix(fr),a&&(fr.extractRotation(a.matrixWorld),aa.setFromRotationMatrix(fr),this.quaternion.premultiply(aa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nv),oa.child=e,this.dispatchEvent(oa),oa.child=null):Nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(VE),ch.child=e,this.dispatchEvent(ch),ch.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fr.multiply(e.parent.matrixWorld)),e.applyMatrix4(fr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nv),oa.child=e,this.dispatchEvent(oa),oa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,a=this.children.length;s<a;s++){const u=this.children[s].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,e,HE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,GE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,s=e.y,a=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*s-l[8]*a,l[13]+=s-l[1]*t-l[5]*s-l[9]*a,l[14]+=a-l[2]*t-l[6]*s-l[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(h=>({...h})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(h,f){return h[f.uuid]===void 0&&(h[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const f=h.shapes;if(Array.isArray(f))for(let p=0,g=f.length;p<g;p++){const x=f[p];l(e.shapes,x)}else l(e.shapes,f)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let f=0,p=this.material.length;f<p;f++)h.push(l(e.materials,this.material[f]));a.material=h}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let h=0;h<this.children.length;h++)a.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let h=0;h<this.animations.length;h++){const f=this.animations[h];a.animations.push(l(e.animations,f))}}if(t){const h=u(e.geometries),f=u(e.materials),p=u(e.textures),g=u(e.images),x=u(e.shapes),v=u(e.skeletons),S=u(e.animations),T=u(e.nodes);h.length>0&&(s.geometries=h),f.length>0&&(s.materials=f),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),x.length>0&&(s.shapes=x),v.length>0&&(s.skeletons=v),S.length>0&&(s.animations=S),T.length>0&&(s.nodes=T)}return s.object=a,s;function u(h){const f=[];for(const p in h){const g=h[p];delete g.metadata,f.push(g)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const a=e.children[s];this.add(a.clone())}return this}}gn.DEFAULT_UP=new J(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ic extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const WE={type:"move"};class uh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ic,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ic,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ic,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let a=null,l=null,u=null;const h=this._targetRay,f=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const R of e.hand.values()){const y=t.getJointPose(R,s),M=this._getHandJoint(p,R);y!==null&&(M.matrix.fromArray(y.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=y.radius),M.visible=y!==null}const g=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],v=g.position.distanceTo(x.position),S=.02,T=.005;p.inputState.pinching&&v>S+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=S-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1,f.eventsEnabled&&f.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(a=t.getPose(e.targetRaySpace,s),a===null&&l!==null&&(a=l),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(WE)))}return h!==null&&(h.visible=a!==null),f!==null&&(f.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new ic;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const cx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vr={h:0,s:0,l:0},rc={h:0,s:0,l:0};function dh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class xt{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=oi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,t),this}setRGB(e,t,s,a=At.workingColorSpace){return this.r=e,this.g=t,this.b=s,At.colorSpaceToWorking(this,a),this}setHSL(e,t,s,a=At.workingColorSpace){if(e=PE(e,1),t=bt(t,0,1),s=bt(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,u=2*s-l;this.r=dh(u,l,e+1/3),this.g=dh(u,l,e),this.b=dh(u,l,e-1/3)}return At.colorSpaceToWorking(this,a),this}setStyle(e,t=oi){function s(l){l!==void 0&&parseFloat(l)<1&&lt("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=a[1],h=a[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:lt("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);lt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=oi){const s=cx[e.toLowerCase()];return s!==void 0?this.setHex(s,t):lt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Sr(e.r),this.g=Sr(e.g),this.b=Sr(e.b),this}copyLinearToSRGB(e){return this.r=Ca(e.r),this.g=Ca(e.g),this.b=Ca(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=oi){return At.workingToColorSpace(Ln.copy(this),e),Math.round(bt(Ln.r*255,0,255))*65536+Math.round(bt(Ln.g*255,0,255))*256+Math.round(bt(Ln.b*255,0,255))}getHexString(e=oi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.workingToColorSpace(Ln.copy(this),t);const s=Ln.r,a=Ln.g,l=Ln.b,u=Math.max(s,a,l),h=Math.min(s,a,l);let f,p;const g=(h+u)/2;if(h===u)f=0,p=0;else{const x=u-h;switch(p=g<=.5?x/(u+h):x/(2-u-h),u){case s:f=(a-l)/x+(a<l?6:0);break;case a:f=(l-s)/x+2;break;case l:f=(s-a)/x+4;break}f/=6}return e.h=f,e.s=p,e.l=g,e}getRGB(e,t=At.workingColorSpace){return At.workingToColorSpace(Ln.copy(this),t),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=oi){At.workingToColorSpace(Ln.copy(this),e);const t=Ln.r,s=Ln.g,a=Ln.b;return e!==oi?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(a*255)})`}offsetHSL(e,t,s){return this.getHSL(Vr),this.setHSL(Vr.h+e,Vr.s+t,Vr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Vr),e.getHSL(rc);const s=rh(Vr.h,rc.h,t),a=rh(Vr.s,rc.s,t),l=rh(Vr.l,rc.l,t);return this.setHSL(s,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*a,this.g=l[1]*t+l[4]*s+l[7]*a,this.b=l[2]*t+l[5]*s+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new xt;xt.NAMES=cx;class pp{constructor(e,t=1,s=1e3){this.isFog=!0,this.name="",this.color=new xt(e),this.near=t,this.far=s}clone(){return new pp(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class XE extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ns,this.environmentIntensity=1,this.environmentRotation=new ns,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Di=new J,pr=new J,hh=new J,mr=new J,la=new J,ca=new J,Pv=new J,fh=new J,ph=new J,mh=new J,gh=new an,vh=new an,xh=new an;class yi{constructor(e=new J,t=new J,s=new J){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,a){a.subVectors(s,t),Di.subVectors(e,t),a.cross(Di);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,s,a,l){Di.subVectors(a,t),pr.subVectors(s,t),hh.subVectors(e,t);const u=Di.dot(Di),h=Di.dot(pr),f=Di.dot(hh),p=pr.dot(pr),g=pr.dot(hh),x=u*p-h*h;if(x===0)return l.set(0,0,0),null;const v=1/x,S=(p*f-h*g)*v,T=(u*g-h*f)*v;return l.set(1-S-T,T,S)}static containsPoint(e,t,s,a){return this.getBarycoord(e,t,s,a,mr)===null?!1:mr.x>=0&&mr.y>=0&&mr.x+mr.y<=1}static getInterpolation(e,t,s,a,l,u,h,f){return this.getBarycoord(e,t,s,a,mr)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(l,mr.x),f.addScaledVector(u,mr.y),f.addScaledVector(h,mr.z),f)}static getInterpolatedAttribute(e,t,s,a,l,u){return gh.setScalar(0),vh.setScalar(0),xh.setScalar(0),gh.fromBufferAttribute(e,t),vh.fromBufferAttribute(e,s),xh.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(gh,l.x),u.addScaledVector(vh,l.y),u.addScaledVector(xh,l.z),u}static isFrontFacing(e,t,s,a){return Di.subVectors(s,t),pr.subVectors(e,t),Di.cross(pr).dot(a)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,a){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,s,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Di.subVectors(this.c,this.b),pr.subVectors(this.a,this.b),Di.cross(pr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,a,l){return yi.getInterpolation(e,this.a,this.b,this.c,t,s,a,l)}containsPoint(e){return yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,a=this.b,l=this.c;let u,h;la.subVectors(a,s),ca.subVectors(l,s),fh.subVectors(e,s);const f=la.dot(fh),p=ca.dot(fh);if(f<=0&&p<=0)return t.copy(s);ph.subVectors(e,a);const g=la.dot(ph),x=ca.dot(ph);if(g>=0&&x<=g)return t.copy(a);const v=f*x-g*p;if(v<=0&&f>=0&&g<=0)return u=f/(f-g),t.copy(s).addScaledVector(la,u);mh.subVectors(e,l);const S=la.dot(mh),T=ca.dot(mh);if(T>=0&&S<=T)return t.copy(l);const R=S*p-f*T;if(R<=0&&p>=0&&T<=0)return h=p/(p-T),t.copy(s).addScaledVector(ca,h);const y=g*T-S*x;if(y<=0&&x-g>=0&&S-T>=0)return Pv.subVectors(l,a),h=(x-g)/(x-g+(S-T)),t.copy(a).addScaledVector(Pv,h);const M=1/(y+R+v);return u=R*M,h=v*M,t.copy(s).addScaledVector(la,u).addScaledVector(ca,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class qo{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(Ii.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(Ii.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=Ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=l.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,Ii):Ii.fromBufferAttribute(l,u),Ii.applyMatrix4(e.matrixWorld),this.expandByPoint(Ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),sc.copy(s.boundingBox)),sc.applyMatrix4(e.matrixWorld),this.union(sc)}const a=e.children;for(let l=0,u=a.length;l<u;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ii),Ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Co),ac.subVectors(this.max,Co),ua.subVectors(e.a,Co),da.subVectors(e.b,Co),ha.subVectors(e.c,Co),Wr.subVectors(da,ua),Xr.subVectors(ha,da),_s.subVectors(ua,ha);let t=[0,-Wr.z,Wr.y,0,-Xr.z,Xr.y,0,-_s.z,_s.y,Wr.z,0,-Wr.x,Xr.z,0,-Xr.x,_s.z,0,-_s.x,-Wr.y,Wr.x,0,-Xr.y,Xr.x,0,-_s.y,_s.x,0];return!_h(t,ua,da,ha,ac)||(t=[1,0,0,0,1,0,0,0,1],!_h(t,ua,da,ha,ac))?!1:(oc.crossVectors(Wr,Xr),t=[oc.x,oc.y,oc.z],_h(t,ua,da,ha,ac))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const gr=[new J,new J,new J,new J,new J,new J,new J,new J],Ii=new J,sc=new qo,ua=new J,da=new J,ha=new J,Wr=new J,Xr=new J,_s=new J,Co=new J,ac=new J,oc=new J,ys=new J;function _h(i,e,t,s,a){for(let l=0,u=i.length-3;l<=u;l+=3){ys.fromArray(i,l);const h=a.x*Math.abs(ys.x)+a.y*Math.abs(ys.y)+a.z*Math.abs(ys.z),f=e.dot(ys),p=t.dot(ys),g=s.dot(ys);if(Math.max(-Math.max(f,p,g),Math.min(f,p,g))>h)return!1}return!0}const hn=new J,lc=new Qe;let $E=0;class Fi extends is{constructor(e,t,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$E++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=Uf,this.updateRanges=[],this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[s+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)lc.fromBufferAttribute(this,t),lc.applyMatrix3(e),this.setXY(t,lc.x,lc.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix3(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=qi(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=zt(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qi(t,this.array)),t}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qi(t,this.array)),t}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qi(t,this.array)),t}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),s=zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,a){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),s=zt(s,this.array),a=zt(a,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this}setXYZW(e,t,s,a,l){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),s=zt(s,this.array),a=zt(a,this.array),l=zt(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Uf&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class ux extends Fi{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class dx extends Fi{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class cn extends Fi{constructor(e,t,s){super(new Float32Array(e),t,s)}}const qE=new qo,Ao=new J,yh=new J;class ru{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):qE.setFromPoints(e).getCenter(s);let a=0;for(let l=0,u=e.length;l<u;l++)a=Math.max(a,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ao.subVectors(e,this.center);const t=Ao.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),a=(s-this.radius)*.5;this.center.addScaledVector(Ao,a/s),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ao.copy(e.center).add(yh)),this.expandByPoint(Ao.copy(e.center).sub(yh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let YE=0;const xi=new nn,Sh=new gn,fa=new J,ai=new qo,Ro=new qo,Mn=new J;class On extends is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:YE++}),this.uuid=Jr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(CE(e)?dx:ux)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new vt().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xi.makeRotationFromQuaternion(e),this.applyMatrix4(xi),this}rotateX(e){return xi.makeRotationX(e),this.applyMatrix4(xi),this}rotateY(e){return xi.makeRotationY(e),this.applyMatrix4(xi),this}rotateZ(e){return xi.makeRotationZ(e),this.applyMatrix4(xi),this}translate(e,t,s){return xi.makeTranslation(e,t,s),this.applyMatrix4(xi),this}scale(e,t,s){return xi.makeScale(e,t,s),this.applyMatrix4(xi),this}lookAt(e){return Sh.lookAt(e),Sh.updateMatrix(),this.applyMatrix4(Sh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fa).negate(),this.translate(fa.x,fa.y,fa.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];s.push(u.x,u.y,u.z||0)}this.setAttribute("position",new cn(s,3))}else{const s=Math.min(e.length,t.count);for(let a=0;a<s;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const l=t[s];ai.setFromBufferAttribute(l),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ru);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const s=this.boundingSphere.center;if(ai.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const h=t[l];Ro.setFromBufferAttribute(h),this.morphTargetsRelative?(Mn.addVectors(ai.min,Ro.min),ai.expandByPoint(Mn),Mn.addVectors(ai.max,Ro.max),ai.expandByPoint(Mn)):(ai.expandByPoint(Ro.min),ai.expandByPoint(Ro.max))}ai.getCenter(s);let a=0;for(let l=0,u=e.count;l<u;l++)Mn.fromBufferAttribute(e,l),a=Math.max(a,s.distanceToSquared(Mn));if(t)for(let l=0,u=t.length;l<u;l++){const h=t[l],f=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)Mn.fromBufferAttribute(h,p),f&&(fa.fromBufferAttribute(e,p),Mn.add(fa)),a=Math.max(a,s.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fi(new Float32Array(4*s.count),4));const u=this.getAttribute("tangent"),h=[],f=[];for(let A=0;A<s.count;A++)h[A]=new J,f[A]=new J;const p=new J,g=new J,x=new J,v=new Qe,S=new Qe,T=new Qe,R=new J,y=new J;function M(A,U,q){p.fromBufferAttribute(s,A),g.fromBufferAttribute(s,U),x.fromBufferAttribute(s,q),v.fromBufferAttribute(l,A),S.fromBufferAttribute(l,U),T.fromBufferAttribute(l,q),g.sub(p),x.sub(p),S.sub(v),T.sub(v);const j=1/(S.x*T.y-T.x*S.y);isFinite(j)&&(R.copy(g).multiplyScalar(T.y).addScaledVector(x,-S.y).multiplyScalar(j),y.copy(x).multiplyScalar(S.x).addScaledVector(g,-T.x).multiplyScalar(j),h[A].add(R),h[U].add(R),h[q].add(R),f[A].add(y),f[U].add(y),f[q].add(y))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let A=0,U=b.length;A<U;++A){const q=b[A],j=q.start,Z=q.count;for(let H=j,Q=j+Z;H<Q;H+=3)M(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const E=new J,w=new J,D=new J,L=new J;function O(A){D.fromBufferAttribute(a,A),L.copy(D);const U=h[A];E.copy(U),E.sub(D.multiplyScalar(D.dot(U))).normalize(),w.crossVectors(L,U);const j=w.dot(f[A])<0?-1:1;u.setXYZW(A,E.x,E.y,E.z,j)}for(let A=0,U=b.length;A<U;++A){const q=b[A],j=q.start,Z=q.count;for(let H=j,Q=j+Z;H<Q;H+=3)O(e.getX(H+0)),O(e.getX(H+1)),O(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Fi(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let v=0,S=s.count;v<S;v++)s.setXYZ(v,0,0,0);const a=new J,l=new J,u=new J,h=new J,f=new J,p=new J,g=new J,x=new J;if(e)for(let v=0,S=e.count;v<S;v+=3){const T=e.getX(v+0),R=e.getX(v+1),y=e.getX(v+2);a.fromBufferAttribute(t,T),l.fromBufferAttribute(t,R),u.fromBufferAttribute(t,y),g.subVectors(u,l),x.subVectors(a,l),g.cross(x),h.fromBufferAttribute(s,T),f.fromBufferAttribute(s,R),p.fromBufferAttribute(s,y),h.add(g),f.add(g),p.add(g),s.setXYZ(T,h.x,h.y,h.z),s.setXYZ(R,f.x,f.y,f.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let v=0,S=t.count;v<S;v+=3)a.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),g.subVectors(u,l),x.subVectors(a,l),g.cross(x),s.setXYZ(v+0,g.x,g.y,g.z),s.setXYZ(v+1,g.x,g.y,g.z),s.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)Mn.fromBufferAttribute(e,t),Mn.normalize(),e.setXYZ(t,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(h,f){const p=h.array,g=h.itemSize,x=h.normalized,v=new p.constructor(f.length*g);let S=0,T=0;for(let R=0,y=f.length;R<y;R++){h.isInterleavedBufferAttribute?S=f[R]*h.data.stride+h.offset:S=f[R]*g;for(let M=0;M<g;M++)v[T++]=p[S++]}return new Fi(v,g,x)}if(this.index===null)return lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new On,s=this.index.array,a=this.attributes;for(const h in a){const f=a[h],p=e(f,s);t.setAttribute(h,p)}const l=this.morphAttributes;for(const h in l){const f=[],p=l[h];for(let g=0,x=p.length;g<x;g++){const v=p[g],S=e(v,s);f.push(S)}t.morphAttributes[h]=f}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,f=u.length;h<f;h++){const p=u[h];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const p in f)f[p]!==void 0&&(e[p]=f[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const f in s){const p=s[f];e.data.attributes[f]=p.toJSON(e.data)}const a={};let l=!1;for(const f in this.morphAttributes){const p=this.morphAttributes[f],g=[];for(let x=0,v=p.length;x<v;x++){const S=p[x];g.push(S.toJSON(e.data))}g.length>0&&(a[f]=g,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const a=e.attributes;for(const p in a){const g=a[p];this.setAttribute(p,g.clone(t))}const l=e.morphAttributes;for(const p in l){const g=[],x=l[p];for(let v=0,S=x.length;v<S;v++)g.push(x[v].clone(t));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,g=u.length;p<g;p++){const x=u[p];this.addGroup(x.start,x.count,x.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class KE{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Uf,this.updateRanges=[],this.version=0,this.uuid=Jr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,s){e*=this.stride,s*=t.stride;for(let a=0,l=this.stride;a<l;a++)this.array[e+a]=t.array[s+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(t,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const jn=new J;class Kc{constructor(e,t,s,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=s,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,s=this.data.count;t<s;t++)jn.fromBufferAttribute(this,t),jn.applyMatrix4(e),this.setXYZ(t,jn.x,jn.y,jn.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)jn.fromBufferAttribute(this,t),jn.applyNormalMatrix(e),this.setXYZ(t,jn.x,jn.y,jn.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)jn.fromBufferAttribute(this,t),jn.transformDirection(e),this.setXYZ(t,jn.x,jn.y,jn.z);return this}getComponent(e,t){let s=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(s=qi(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=zt(s,this.array)),this.data.array[e*this.data.stride+this.offset+t]=s,this}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=qi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=qi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=qi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=qi(t,this.array)),t}setXY(e,t,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=zt(t,this.array),s=zt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=s,this}setXYZ(e,t,s,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=zt(t,this.array),s=zt(s,this.array),a=zt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=s,this.data.array[e+2]=a,this}setXYZW(e,t,s,a,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=zt(t,this.array),s=zt(s,this.array),a=zt(a,this.array),l=zt(l,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=s,this.data.array[e+2]=a,this.data.array[e+3]=l,this}clone(e){if(e===void 0){Yc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let s=0;s<this.count;s++){const a=s*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[a+l])}return new Fi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Kc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Yc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let s=0;s<this.count;s++){const a=s*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[a+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let ZE=0;class Ps extends is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ZE++}),this.uuid=Jr(),this.name="",this.type="Material",this.blending=ba,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xh,this.blendDst=$h,this.blendEquation=Ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=Aa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ia,this.stencilZFail=ia,this.stencilZPass=ia,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){lt(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){lt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(s):a&&a.isVector3&&s&&s.isVector3?a.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==ba&&(s.blending=this.blending),this.side!==es&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Xh&&(s.blendSrc=this.blendSrc),this.blendDst!==$h&&(s.blendDst=this.blendDst),this.blendEquation!==Ts&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Aa&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xv&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ia&&(s.stencilFail=this.stencilFail),this.stencilZFail!==ia&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==ia&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function a(l){const u=[];for(const h in l){const f=l[h];delete f.metadata,u.push(f)}return u}if(t){const l=a(e.textures),u=a(e.images);l.length>0&&(s.textures=l),u.length>0&&(s.images=u)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const a=t.length;s=new Array(a);for(let l=0;l!==a;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class hx extends Ps{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let pa;const No=new J,ma=new J,ga=new J,va=new Qe,Po=new Qe,fx=new nn,cc=new J,Lo=new J,uc=new J,Lv=new Qe,Mh=new Qe,Dv=new Qe;class QE extends gn{constructor(e=new hx){if(super(),this.isSprite=!0,this.type="Sprite",pa===void 0){pa=new On;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new KE(t,5);pa.setIndex([0,1,2,0,2,3]),pa.setAttribute("position",new Kc(s,3,0,!1)),pa.setAttribute("uv",new Kc(s,2,3,!1))}this.geometry=pa,this.material=e,this.center=new Qe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Nt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ma.setFromMatrixScale(this.matrixWorld),fx.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ga.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ma.multiplyScalar(-ga.z);const s=this.material.rotation;let a,l;s!==0&&(l=Math.cos(s),a=Math.sin(s));const u=this.center;dc(cc.set(-.5,-.5,0),ga,u,ma,a,l),dc(Lo.set(.5,-.5,0),ga,u,ma,a,l),dc(uc.set(.5,.5,0),ga,u,ma,a,l),Lv.set(0,0),Mh.set(1,0),Dv.set(1,1);let h=e.ray.intersectTriangle(cc,Lo,uc,!1,No);if(h===null&&(dc(Lo.set(-.5,.5,0),ga,u,ma,a,l),Mh.set(0,1),h=e.ray.intersectTriangle(cc,uc,Lo,!1,No),h===null))return;const f=e.ray.origin.distanceTo(No);f<e.near||f>e.far||t.push({distance:f,point:No.clone(),uv:yi.getInterpolation(No,cc,Lo,uc,Lv,Mh,Dv,new Qe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function dc(i,e,t,s,a,l){va.subVectors(i,t).addScalar(.5).multiply(s),a!==void 0?(Po.x=l*va.x-a*va.y,Po.y=a*va.x+l*va.y):Po.copy(va),i.copy(e),i.x+=Po.x,i.y+=Po.y,i.applyMatrix4(fx)}const vr=new J,Eh=new J,hc=new J,$r=new J,Th=new J,fc=new J,wh=new J;class mp{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vr.copy(this.origin).addScaledVector(this.direction,t),vr.distanceToSquared(e))}distanceSqToSegment(e,t,s,a){Eh.copy(e).add(t).multiplyScalar(.5),hc.copy(t).sub(e).normalize(),$r.copy(this.origin).sub(Eh);const l=e.distanceTo(t)*.5,u=-this.direction.dot(hc),h=$r.dot(this.direction),f=-$r.dot(hc),p=$r.lengthSq(),g=Math.abs(1-u*u);let x,v,S,T;if(g>0)if(x=u*f-h,v=u*h-f,T=l*g,x>=0)if(v>=-T)if(v<=T){const R=1/g;x*=R,v*=R,S=x*(x+u*v+2*h)+v*(u*x+v+2*f)+p}else v=l,x=Math.max(0,-(u*v+h)),S=-x*x+v*(v+2*f)+p;else v=-l,x=Math.max(0,-(u*v+h)),S=-x*x+v*(v+2*f)+p;else v<=-T?(x=Math.max(0,-(-u*l+h)),v=x>0?-l:Math.min(Math.max(-l,-f),l),S=-x*x+v*(v+2*f)+p):v<=T?(x=0,v=Math.min(Math.max(-l,-f),l),S=v*(v+2*f)+p):(x=Math.max(0,-(u*l+h)),v=x>0?l:Math.min(Math.max(-l,-f),l),S=-x*x+v*(v+2*f)+p);else v=u>0?-l:l,x=Math.max(0,-(u*v+h)),S=-x*x+v*(v+2*f)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,x),a&&a.copy(Eh).addScaledVector(hc,v),S}intersectSphere(e,t){vr.subVectors(e.center,this.origin);const s=vr.dot(this.direction),a=vr.dot(vr)-s*s,l=e.radius*e.radius;if(a>l)return null;const u=Math.sqrt(l-a),h=s-u,f=s+u;return f<0?null:h<0?this.at(f,t):this.at(h,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,a,l,u,h,f;const p=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,v=this.origin;return p>=0?(s=(e.min.x-v.x)*p,a=(e.max.x-v.x)*p):(s=(e.max.x-v.x)*p,a=(e.min.x-v.x)*p),g>=0?(l=(e.min.y-v.y)*g,u=(e.max.y-v.y)*g):(l=(e.max.y-v.y)*g,u=(e.min.y-v.y)*g),s>u||l>a||((l>s||isNaN(s))&&(s=l),(u<a||isNaN(a))&&(a=u),x>=0?(h=(e.min.z-v.z)*x,f=(e.max.z-v.z)*x):(h=(e.max.z-v.z)*x,f=(e.min.z-v.z)*x),s>f||h>a)||((h>s||s!==s)&&(s=h),(f<a||a!==a)&&(a=f),a<0)?null:this.at(s>=0?s:a,t)}intersectsBox(e){return this.intersectBox(e,vr)!==null}intersectTriangle(e,t,s,a,l){Th.subVectors(t,e),fc.subVectors(s,e),wh.crossVectors(Th,fc);let u=this.direction.dot(wh),h;if(u>0){if(a)return null;h=1}else if(u<0)h=-1,u=-u;else return null;$r.subVectors(this.origin,e);const f=h*this.direction.dot(fc.crossVectors($r,fc));if(f<0)return null;const p=h*this.direction.dot(Th.cross($r));if(p<0||f+p>u)return null;const g=-h*$r.dot(wh);return g<0?null:this.at(g/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gp extends Ps{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ns,this.combine=Z0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Iv=new nn,Ss=new mp,pc=new ru,Uv=new J,mc=new J,gc=new J,vc=new J,bh=new J,xc=new J,Fv=new J,_c=new J;class Mi extends gn{constructor(e=new On,t=new gp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const h=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}getVertexPosition(e,t){const s=this.geometry,a=s.attributes.position,l=s.morphAttributes.position,u=s.morphTargetsRelative;t.fromBufferAttribute(a,e);const h=this.morphTargetInfluences;if(l&&h){xc.set(0,0,0);for(let f=0,p=l.length;f<p;f++){const g=h[f],x=l[f];g!==0&&(bh.fromBufferAttribute(x,e),u?xc.addScaledVector(bh,g):xc.addScaledVector(bh.sub(t),g))}t.add(xc)}return t}raycast(e,t){const s=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),pc.copy(s.boundingSphere),pc.applyMatrix4(l),Ss.copy(e.ray).recast(e.near),!(pc.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(pc,Uv)===null||Ss.origin.distanceToSquared(Uv)>(e.far-e.near)**2))&&(Iv.copy(l).invert(),Ss.copy(e.ray).applyMatrix4(Iv),!(s.boundingBox!==null&&Ss.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,Ss)))}_computeIntersections(e,t,s){let a;const l=this.geometry,u=this.material,h=l.index,f=l.attributes.position,p=l.attributes.uv,g=l.attributes.uv1,x=l.attributes.normal,v=l.groups,S=l.drawRange;if(h!==null)if(Array.isArray(u))for(let T=0,R=v.length;T<R;T++){const y=v[T],M=u[y.materialIndex],b=Math.max(y.start,S.start),E=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let w=b,D=E;w<D;w+=3){const L=h.getX(w),O=h.getX(w+1),A=h.getX(w+2);a=yc(this,M,e,s,p,g,x,L,O,A),a&&(a.faceIndex=Math.floor(w/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const T=Math.max(0,S.start),R=Math.min(h.count,S.start+S.count);for(let y=T,M=R;y<M;y+=3){const b=h.getX(y),E=h.getX(y+1),w=h.getX(y+2);a=yc(this,u,e,s,p,g,x,b,E,w),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}else if(f!==void 0)if(Array.isArray(u))for(let T=0,R=v.length;T<R;T++){const y=v[T],M=u[y.materialIndex],b=Math.max(y.start,S.start),E=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let w=b,D=E;w<D;w+=3){const L=w,O=w+1,A=w+2;a=yc(this,M,e,s,p,g,x,L,O,A),a&&(a.faceIndex=Math.floor(w/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const T=Math.max(0,S.start),R=Math.min(f.count,S.start+S.count);for(let y=T,M=R;y<M;y+=3){const b=y,E=y+1,w=y+2;a=yc(this,u,e,s,p,g,x,b,E,w),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}}}function JE(i,e,t,s,a,l,u,h){let f;if(e.side===Jn?f=s.intersectTriangle(u,l,a,!0,h):f=s.intersectTriangle(a,l,u,e.side===es,h),f===null)return null;_c.copy(h),_c.applyMatrix4(i.matrixWorld);const p=t.ray.origin.distanceTo(_c);return p<t.near||p>t.far?null:{distance:p,point:_c.clone(),object:i}}function yc(i,e,t,s,a,l,u,h,f,p){i.getVertexPosition(h,mc),i.getVertexPosition(f,gc),i.getVertexPosition(p,vc);const g=JE(i,e,t,s,mc,gc,vc,Fv);if(g){const x=new J;yi.getBarycoord(Fv,mc,gc,vc,x),a&&(g.uv=yi.getInterpolatedAttribute(a,h,f,p,x,new Qe)),l&&(g.uv1=yi.getInterpolatedAttribute(l,h,f,p,x,new Qe)),u&&(g.normal=yi.getInterpolatedAttribute(u,h,f,p,x,new J),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:f,c:p,normal:new J,materialIndex:0};yi.getNormal(mc,gc,vc,v.normal),g.face=v,g.barycoord=x}return g}class eT extends Fn{constructor(e=null,t=1,s=1,a,l,u,h,f,p=bn,g=bn,x,v){super(null,u,h,f,p,g,a,l,x,v),this.isDataTexture=!0,this.image={data:e,width:t,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ch=new J,tT=new J,nT=new vt;class Yr{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,a){return this.normal.set(e,t,s),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const a=Ch.subVectors(s,t).cross(tT.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,s=!0){const a=e.delta(Ch),l=this.normal.dot(a);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return s===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(a,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||nT.getNormalMatrix(e),a=this.coplanarPoint(Ch).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ms=new ru,iT=new Qe(.5,.5),Sc=new J;class vp{constructor(e=new Yr,t=new Yr,s=new Yr,a=new Yr,l=new Yr,u=new Yr){this.planes=[e,t,s,a,l,u]}set(e,t,s,a,l,u){const h=this.planes;return h[0].copy(e),h[1].copy(t),h[2].copy(s),h[3].copy(a),h[4].copy(l),h[5].copy(u),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Ki,s=!1){const a=this.planes,l=e.elements,u=l[0],h=l[1],f=l[2],p=l[3],g=l[4],x=l[5],v=l[6],S=l[7],T=l[8],R=l[9],y=l[10],M=l[11],b=l[12],E=l[13],w=l[14],D=l[15];if(a[0].setComponents(p-u,S-g,M-T,D-b).normalize(),a[1].setComponents(p+u,S+g,M+T,D+b).normalize(),a[2].setComponents(p+h,S+x,M+R,D+E).normalize(),a[3].setComponents(p-h,S-x,M-R,D-E).normalize(),s)a[4].setComponents(f,v,y,w).normalize(),a[5].setComponents(p-f,S-v,M-y,D-w).normalize();else if(a[4].setComponents(p-f,S-v,M-y,D-w).normalize(),t===Ki)a[5].setComponents(p+f,S+v,M+y,D+w).normalize();else if(t===Go)a[5].setComponents(f,v,y,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ms)}intersectsSprite(e){Ms.center.set(0,0,0);const t=iT.distanceTo(e.center);return Ms.radius=.7071067811865476+t,Ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ms)}intersectsSphere(e){const t=this.planes,s=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const a=t[s];if(Sc.x=a.normal.x>0?e.max.x:e.min.x,Sc.y=a.normal.y>0?e.max.y:e.min.y,Sc.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Sc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xp extends Ps{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Zc=new J,Qc=new J,Ov=new nn,Do=new mp,Mc=new ru,Ah=new J,kv=new J;class px extends gn{constructor(e=new On,t=new xp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[0];for(let a=1,l=t.count;a<l;a++)Zc.fromBufferAttribute(t,a-1),Qc.fromBufferAttribute(t,a),s[a]=s[a-1],s[a]+=Zc.distanceTo(Qc);e.setAttribute("lineDistance",new cn(s,1))}else lt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const s=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,u=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Mc.copy(s.boundingSphere),Mc.applyMatrix4(a),Mc.radius+=l,e.ray.intersectsSphere(Mc)===!1)return;Ov.copy(a).invert(),Do.copy(e.ray).applyMatrix4(Ov);const h=l/((this.scale.x+this.scale.y+this.scale.z)/3),f=h*h,p=this.isLineSegments?2:1,g=s.index,v=s.attributes.position;if(g!==null){const S=Math.max(0,u.start),T=Math.min(g.count,u.start+u.count);for(let R=S,y=T-1;R<y;R+=p){const M=g.getX(R),b=g.getX(R+1),E=Ec(this,e,Do,f,M,b,R);E&&t.push(E)}if(this.isLineLoop){const R=g.getX(T-1),y=g.getX(S),M=Ec(this,e,Do,f,R,y,T-1);M&&t.push(M)}}else{const S=Math.max(0,u.start),T=Math.min(v.count,u.start+u.count);for(let R=S,y=T-1;R<y;R+=p){const M=Ec(this,e,Do,f,R,R+1,R);M&&t.push(M)}if(this.isLineLoop){const R=Ec(this,e,Do,f,T-1,S,T-1);R&&t.push(R)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const h=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}}function Ec(i,e,t,s,a,l,u){const h=i.geometry.attributes.position;if(Zc.fromBufferAttribute(h,a),Qc.fromBufferAttribute(h,l),t.distanceSqToSegment(Zc,Qc,Ah,kv)>s)return;Ah.applyMatrix4(i.matrixWorld);const p=e.ray.origin.distanceTo(Ah);if(!(p<e.near||p>e.far))return{distance:p,point:kv.clone().applyMatrix4(i.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:i}}const Bv=new J,zv=new J;class rT extends px{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[];for(let a=0,l=t.count;a<l;a+=2)Bv.fromBufferAttribute(t,a),zv.fromBufferAttribute(t,a+1),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+Bv.distanceTo(zv);e.setAttribute("lineDistance",new cn(s,1))}else lt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class mx extends Fn{constructor(e=[],t=As,s,a,l,u,h,f,p,g){super(e,t,s,a,l,u,h,f,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sT extends Fn{constructor(e,t,s,a,l,u,h,f,p){super(e,t,s,a,l,u,h,f,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Na extends Fn{constructor(e,t,s=Ji,a,l,u,h=bn,f=bn,p,g=Er,x=1){if(g!==Er&&g!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:t,depth:x};super(v,a,l,u,h,f,g,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class aT extends Na{constructor(e,t=Ji,s=As,a,l,u=bn,h=bn,f,p=Er){const g={width:e,height:e,depth:1},x=[g,g,g,g,g,g];super(e,e,t,s,a,l,u,h,f,p),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class gx extends Fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ka extends On{constructor(e=1,t=1,s=1,a=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:a,heightSegments:l,depthSegments:u};const h=this;a=Math.floor(a),l=Math.floor(l),u=Math.floor(u);const f=[],p=[],g=[],x=[];let v=0,S=0;T("z","y","x",-1,-1,s,t,e,u,l,0),T("z","y","x",1,-1,s,t,-e,u,l,1),T("x","z","y",1,1,e,s,t,a,u,2),T("x","z","y",1,-1,e,s,-t,a,u,3),T("x","y","z",1,-1,e,t,s,a,l,4),T("x","y","z",-1,-1,e,t,-s,a,l,5),this.setIndex(f),this.setAttribute("position",new cn(p,3)),this.setAttribute("normal",new cn(g,3)),this.setAttribute("uv",new cn(x,2));function T(R,y,M,b,E,w,D,L,O,A,U){const q=w/O,j=D/A,Z=w/2,H=D/2,Q=L/2,V=O+1,F=A+1;let G=0,X=0;const oe=new J;for(let re=0;re<F;re++){const B=re*j-H;for(let te=0;te<V;te++){const Pe=te*q-Z;oe[R]=Pe*b,oe[y]=B*E,oe[M]=Q,p.push(oe.x,oe.y,oe.z),oe[R]=0,oe[y]=0,oe[M]=L>0?1:-1,g.push(oe.x,oe.y,oe.z),x.push(te/O),x.push(1-re/A),G+=1}}for(let re=0;re<A;re++)for(let B=0;B<O;B++){const te=v+B+V*re,Pe=v+B+V*(re+1),Fe=v+(B+1)+V*(re+1),he=v+(B+1)+V*re;f.push(te,Pe,he),f.push(Pe,Fe,he),X+=6}h.addGroup(S,X,U),S+=X,v+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ka(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class _p extends On{constructor(e=1,t=1,s=1,a=32,l=1,u=!1,h=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:s,radialSegments:a,heightSegments:l,openEnded:u,thetaStart:h,thetaLength:f};const p=this;a=Math.floor(a),l=Math.floor(l);const g=[],x=[],v=[],S=[];let T=0;const R=[],y=s/2;let M=0;b(),u===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(g),this.setAttribute("position",new cn(x,3)),this.setAttribute("normal",new cn(v,3)),this.setAttribute("uv",new cn(S,2));function b(){const w=new J,D=new J;let L=0;const O=(t-e)/s;for(let A=0;A<=l;A++){const U=[],q=A/l,j=q*(t-e)+e;for(let Z=0;Z<=a;Z++){const H=Z/a,Q=H*f+h,V=Math.sin(Q),F=Math.cos(Q);D.x=j*V,D.y=-q*s+y,D.z=j*F,x.push(D.x,D.y,D.z),w.set(V,O,F).normalize(),v.push(w.x,w.y,w.z),S.push(H,1-q),U.push(T++)}R.push(U)}for(let A=0;A<a;A++)for(let U=0;U<l;U++){const q=R[U][A],j=R[U+1][A],Z=R[U+1][A+1],H=R[U][A+1];(e>0||U!==0)&&(g.push(q,j,H),L+=3),(t>0||U!==l-1)&&(g.push(j,Z,H),L+=3)}p.addGroup(M,L,0),M+=L}function E(w){const D=T,L=new Qe,O=new J;let A=0;const U=w===!0?e:t,q=w===!0?1:-1;for(let Z=1;Z<=a;Z++)x.push(0,y*q,0),v.push(0,q,0),S.push(.5,.5),T++;const j=T;for(let Z=0;Z<=a;Z++){const Q=Z/a*f+h,V=Math.cos(Q),F=Math.sin(Q);O.x=U*F,O.y=y*q,O.z=U*V,x.push(O.x,O.y,O.z),v.push(0,q,0),L.x=V*.5+.5,L.y=F*.5*q+.5,S.push(L.x,L.y),T++}for(let Z=0;Z<a;Z++){const H=D+Z,Q=j+Z;w===!0?g.push(Q,Q+1,H):g.push(Q+1,Q,H),A+=3}p.addGroup(M,A,w===!0?1:2),M+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _p(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Yo extends On{constructor(e=1,t=1,s=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:a};const l=e/2,u=t/2,h=Math.floor(s),f=Math.floor(a),p=h+1,g=f+1,x=e/h,v=t/f,S=[],T=[],R=[],y=[];for(let M=0;M<g;M++){const b=M*v-u;for(let E=0;E<p;E++){const w=E*x-l;T.push(w,-b,0),R.push(0,0,1),y.push(E/h),y.push(1-M/f)}}for(let M=0;M<f;M++)for(let b=0;b<h;b++){const E=b+p*M,w=b+p*(M+1),D=b+1+p*(M+1),L=b+1+p*M;S.push(E,w,L),S.push(w,D,L)}this.setIndex(S),this.setAttribute("position",new cn(T,3)),this.setAttribute("normal",new cn(R,3)),this.setAttribute("uv",new cn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yo(e.width,e.height,e.widthSegments,e.heightSegments)}}class yp extends On{constructor(e=1,t=32,s=16,a=0,l=Math.PI*2,u=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:s,phiStart:a,phiLength:l,thetaStart:u,thetaLength:h},t=Math.max(3,Math.floor(t)),s=Math.max(2,Math.floor(s));const f=Math.min(u+h,Math.PI);let p=0;const g=[],x=new J,v=new J,S=[],T=[],R=[],y=[];for(let M=0;M<=s;M++){const b=[],E=M/s;let w=0;M===0&&u===0?w=.5/t:M===s&&f===Math.PI&&(w=-.5/t);for(let D=0;D<=t;D++){const L=D/t;x.x=-e*Math.cos(a+L*l)*Math.sin(u+E*h),x.y=e*Math.cos(u+E*h),x.z=e*Math.sin(a+L*l)*Math.sin(u+E*h),T.push(x.x,x.y,x.z),v.copy(x).normalize(),R.push(v.x,v.y,v.z),y.push(L+w,1-E),b.push(p++)}g.push(b)}for(let M=0;M<s;M++)for(let b=0;b<t;b++){const E=g[M][b+1],w=g[M][b],D=g[M+1][b],L=g[M+1][b+1];(M!==0||u>0)&&S.push(E,w,L),(M!==s-1||f<Math.PI)&&S.push(w,D,L)}this.setIndex(S),this.setAttribute("position",new cn(T,3)),this.setAttribute("normal",new cn(R,3)),this.setAttribute("uv",new cn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Pa(i){const e={};for(const t in i){e[t]={};for(const s in i[t]){const a=i[t][s];if(jv(a))a.isRenderTargetTexture?(lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=a.clone();else if(Array.isArray(a))if(jv(a[0])){const l=[];for(let u=0,h=a.length;u<h;u++)l[u]=a[u].clone();e[t][s]=l}else e[t][s]=a.slice();else e[t][s]=a}}return e}function Hn(i){const e={};for(let t=0;t<i.length;t++){const s=Pa(i[t]);for(const a in s)e[a]=s[a]}return e}function jv(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function oT(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function vx(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const Vo={clone:Pa,merge:Hn};var lT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Un extends Ps{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lT,this.fragmentShader=cT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pa(e.uniforms),this.uniformsGroups=oT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?t.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[a]={type:"m4",value:u.toArray()}:t.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const a in this.extensions)this.extensions[a]===!0&&(s[a]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class xx extends Un{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class _x extends Ps{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=If,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ns,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class uT extends Ps{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_E,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dT extends Ps{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class yx extends gn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class hT extends yx{constructor(e,t,s){super(e,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Rh=new nn,Hv=new J,Gv=new J;class fT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qe(512,512),this.mapType=li,this.map=null,this.mapPass=null,this.matrix=new nn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vp,this._frameExtents=new Qe(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,s=this.matrix;Hv.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hv),Gv.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gv),t.updateMatrixWorld(),Rh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rh,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Go||t.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Rh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Tc=new J,wc=new ts,Wi=new J;class Sx extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=Ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Tc,wc,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Tc,wc,Wi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Tc,wc,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Tc,wc,Wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const qr=new J,Vv=new Qe,Wv=new Qe;class _i extends Sx{constructor(e=50,t=1,s=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Of*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Of*2*Math.atan(Math.tan(Bc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){qr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qr.x,qr.y).multiplyScalar(-e/qr.z),qr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(qr.x,qr.y).multiplyScalar(-e/qr.z)}getViewSize(e,t){return this.getViewBounds(e,Vv,Wv),t.subVectors(Wv,Vv)}setViewOffset(e,t,s,a,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Bc*.5*this.fov)/this.zoom,s=2*t,a=this.aspect*s,l=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const f=u.fullWidth,p=u.fullHeight;l+=u.offsetX*a/f,t-=u.offsetY*s/p,a*=u.width/f,s*=u.height/p}const h=this.filmOffset;h!==0&&(l+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class su extends Sx{constructor(e=-1,t=1,s=1,a=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=a,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,a,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=s-e,u=s+e,h=a+t,f=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,h-=g*this.view.offsetY,f=h-g*this.view.height}this.projectionMatrix.makeOrthographic(l,u,h,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class pT extends fT{constructor(){super(new su(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Xv extends yx{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.target=new gn,this.shadow=new pT}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const xa=-90,_a=1;class mT extends gn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new _i(xa,_a,e,t);a.layers=this.layers,this.add(a);const l=new _i(xa,_a,e,t);l.layers=this.layers,this.add(l);const u=new _i(xa,_a,e,t);u.layers=this.layers,this.add(u);const h=new _i(xa,_a,e,t);h.layers=this.layers,this.add(h);const f=new _i(xa,_a,e,t);f.layers=this.layers,this.add(f);const p=new _i(xa,_a,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,a,l,u,h,f]=t;for(const p of t)this.remove(p);if(e===Ki)s.up.set(0,1,0),s.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Go)s.up.set(0,-1,0),s.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,h,f,p,g]=this.children,x=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const R=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(s,0,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(s,1,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(s,2,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(s,3,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(s,4,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),s.texture.generateMipmaps=R,e.setRenderTarget(s,5,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,g),e.setRenderTarget(x,v,S),e.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class gT extends _i{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class vT{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=xT.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function xT(){this._document.hidden===!1&&this.reset()}class $v{constructor(e=1,t=0,s=0){this.radius=e,this.phi=t,this.theta=s}set(e,t,s){return this.radius=e,this.phi=t,this.theta=s,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=bt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,s){return this.radius=Math.sqrt(e*e+t*t+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,s),this.phi=Math.acos(bt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Cp=class Cp{constructor(e,t,s,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,s,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let s=0;s<4;s++)this.elements[s]=e[s+t];return this}set(e,t,s,a){const l=this.elements;return l[0]=e,l[2]=t,l[1]=s,l[3]=a,this}};Cp.prototype.isMatrix2=!0;let qv=Cp;class _T extends rT{constructor(e=10,t=10,s=4473924,a=8947848){s=new xt(s),a=new xt(a);const l=t/2,u=e/t,h=e/2,f=[],p=[];for(let v=0,S=0,T=-h;v<=t;v++,T+=u){f.push(-h,0,T,h,0,T),f.push(T,0,-h,T,0,h);const R=v===l?s:a;R.toArray(p,S),S+=3,R.toArray(p,S),S+=3,R.toArray(p,S),S+=3,R.toArray(p,S),S+=3}const g=new On;g.setAttribute("position",new cn(f,3)),g.setAttribute("color",new cn(p,3));const x=new xp({vertexColors:!0,toneMapped:!1});super(g,x),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class yT extends is{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){lt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Yv(i,e,t,s){const a=ST(s);switch(t){case ix:return i*e;case sx:return i*e/a.components*a.byteLength;case lp:return i*e/a.components*a.byteLength;case Rs:return i*e*2/a.components*a.byteLength;case cp:return i*e*2/a.components*a.byteLength;case rx:return i*e*3/a.components*a.byteLength;case Ui:return i*e*4/a.components*a.byteLength;case up:return i*e*4/a.components*a.byteLength;case Uc:case Fc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Oc:case kc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sf:case of:return Math.max(i,16)*Math.max(e,8)/4;case rf:case af:return Math.max(i,8)*Math.max(e,8)/2;case lf:case cf:case df:case hf:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case uf:case Vc:case ff:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pf:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case mf:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case gf:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case vf:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case xf:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case _f:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case yf:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Sf:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Mf:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ef:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Tf:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case wf:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case bf:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Cf:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Af:case Rf:case Nf:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Pf:case Lf:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Wc:case Df:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ST(i){switch(i){case li:case J0:return{byteLength:1,components:1};case jo:case ex:case ci:return{byteLength:2,components:1};case ap:case op:return{byteLength:2,components:4};case Ji:case sp:case Yi:return{byteLength:4,components:1};case tx:case nx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qf}}));typeof window<"u"&&(window.__THREE__?lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Mx(){let i=null,e=!1,t=null,s=null;function a(l,u){t(l,u),s=i.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(s=i.requestAnimationFrame(a),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){i=l}}}function MT(i){const e=new WeakMap;function t(h,f){const p=h.array,g=h.usage,x=p.byteLength,v=i.createBuffer();i.bindBuffer(f,v),i.bufferData(f,p,g),h.onUploadCallback();let S;if(p instanceof Float32Array)S=i.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=i.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?S=i.HALF_FLOAT:S=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=i.SHORT;else if(p instanceof Uint32Array)S=i.UNSIGNED_INT;else if(p instanceof Int32Array)S=i.INT;else if(p instanceof Int8Array)S=i.BYTE;else if(p instanceof Uint8Array)S=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:x}}function s(h,f,p){const g=f.array,x=f.updateRanges;if(i.bindBuffer(p,h),x.length===0)i.bufferSubData(p,0,g);else{x.sort((S,T)=>S.start-T.start);let v=0;for(let S=1;S<x.length;S++){const T=x[v],R=x[S];R.start<=T.start+T.count+1?T.count=Math.max(T.count,R.start+R.count-T.start):(++v,x[v]=R)}x.length=v+1;for(let S=0,T=x.length;S<T;S++){const R=x[S];i.bufferSubData(p,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}f.clearUpdateRanges()}f.onUploadCallback()}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function l(h){h.isInterleavedBufferAttribute&&(h=h.data);const f=e.get(h);f&&(i.deleteBuffer(f.buffer),e.delete(h))}function u(h,f){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,t(h,f));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,f),p.version=h.version}}return{get:a,remove:l,update:u}}var ET=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,TT=`#ifdef USE_ALPHAHASH
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
#endif`,wT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,CT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,AT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,RT=`#ifdef USE_AOMAP
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
#endif`,NT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,PT=`#ifdef USE_BATCHING
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
#endif`,LT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,DT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,IT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,UT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,FT=`#ifdef USE_IRIDESCENCE
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
#endif`,OT=`#ifdef USE_BUMPMAP
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
#endif`,kT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,BT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,HT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,GT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,VT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,WT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,XT=`#define PI 3.141592653589793
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
} // validated`,$T=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qT=`vec3 transformedNormal = objectNormal;
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
#endif`,YT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,KT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ZT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,QT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,JT="gl_FragColor = linearToOutputTexel( gl_FragColor );",ew=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tw=`#ifdef USE_ENVMAP
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
#endif`,nw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,iw=`#ifdef USE_ENVMAP
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
#endif`,rw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sw=`#ifdef USE_ENVMAP
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
#endif`,aw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ow=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uw=`#ifdef USE_GRADIENTMAP
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
}`,dw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pw=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,mw=`#ifdef USE_ENVMAP
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
#endif`,gw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_w=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yw=`PhysicalMaterial material;
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
#endif`,Sw=`uniform sampler2D dfgLUT;
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
}`,Mw=`
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
#endif`,Ew=`#if defined( RE_IndirectDiffuse )
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
#endif`,Tw=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ww=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,bw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Aw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dw=`#if defined( USE_POINTS_UV )
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
#endif`,Iw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Uw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ow=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bw=`#ifdef USE_MORPHTARGETS
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
#endif`,zw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ww=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xw=`#ifdef USE_NORMALMAP
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
#endif`,$w=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ib=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ab=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ob=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lb=`float getShadowMask() {
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
}`,cb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ub=`#ifdef USE_SKINNING
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
#endif`,db=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hb=`#ifdef USE_SKINNING
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
#endif`,fb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vb=`#ifdef USE_TRANSMISSION
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
#endif`,xb=`#ifdef USE_TRANSMISSION
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
#endif`,_b=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Eb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tb=`uniform sampler2D t2D;
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
}`,wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Cb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ab=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rb=`#include <common>
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
}`,Nb=`#if DEPTH_PACKING == 3200
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
}`,Pb=`#define DISTANCE
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
}`,Lb=`#define DISTANCE
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
}`,Db=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ib=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ub=`uniform float scale;
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
}`,Fb=`uniform vec3 diffuse;
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
}`,Ob=`#include <common>
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
}`,kb=`uniform vec3 diffuse;
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
}`,Bb=`#define LAMBERT
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
}`,zb=`#define LAMBERT
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
}`,jb=`#define MATCAP
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
}`,Hb=`#define MATCAP
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
}`,Gb=`#define NORMAL
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
}`,Vb=`#define NORMAL
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
}`,Wb=`#define PHONG
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
}`,Xb=`#define PHONG
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
}`,$b=`#define STANDARD
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
}`,qb=`#define STANDARD
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
}`,Yb=`#define TOON
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
}`,Kb=`#define TOON
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
}`,Zb=`uniform float size;
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
}`,Qb=`uniform vec3 diffuse;
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
}`,Jb=`#include <common>
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
}`,e1=`uniform vec3 color;
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
}`,t1=`uniform float rotation;
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
}`,n1=`uniform vec3 diffuse;
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
}`,yt={alphahash_fragment:ET,alphahash_pars_fragment:TT,alphamap_fragment:wT,alphamap_pars_fragment:bT,alphatest_fragment:CT,alphatest_pars_fragment:AT,aomap_fragment:RT,aomap_pars_fragment:NT,batching_pars_vertex:PT,batching_vertex:LT,begin_vertex:DT,beginnormal_vertex:IT,bsdfs:UT,iridescence_fragment:FT,bumpmap_pars_fragment:OT,clipping_planes_fragment:kT,clipping_planes_pars_fragment:BT,clipping_planes_pars_vertex:zT,clipping_planes_vertex:jT,color_fragment:HT,color_pars_fragment:GT,color_pars_vertex:VT,color_vertex:WT,common:XT,cube_uv_reflection_fragment:$T,defaultnormal_vertex:qT,displacementmap_pars_vertex:YT,displacementmap_vertex:KT,emissivemap_fragment:ZT,emissivemap_pars_fragment:QT,colorspace_fragment:JT,colorspace_pars_fragment:ew,envmap_fragment:tw,envmap_common_pars_fragment:nw,envmap_pars_fragment:iw,envmap_pars_vertex:rw,envmap_physical_pars_fragment:mw,envmap_vertex:sw,fog_vertex:aw,fog_pars_vertex:ow,fog_fragment:lw,fog_pars_fragment:cw,gradientmap_pars_fragment:uw,lightmap_pars_fragment:dw,lights_lambert_fragment:hw,lights_lambert_pars_fragment:fw,lights_pars_begin:pw,lights_toon_fragment:gw,lights_toon_pars_fragment:vw,lights_phong_fragment:xw,lights_phong_pars_fragment:_w,lights_physical_fragment:yw,lights_physical_pars_fragment:Sw,lights_fragment_begin:Mw,lights_fragment_maps:Ew,lights_fragment_end:Tw,lightprobes_pars_fragment:ww,logdepthbuf_fragment:bw,logdepthbuf_pars_fragment:Cw,logdepthbuf_pars_vertex:Aw,logdepthbuf_vertex:Rw,map_fragment:Nw,map_pars_fragment:Pw,map_particle_fragment:Lw,map_particle_pars_fragment:Dw,metalnessmap_fragment:Iw,metalnessmap_pars_fragment:Uw,morphinstance_vertex:Fw,morphcolor_vertex:Ow,morphnormal_vertex:kw,morphtarget_pars_vertex:Bw,morphtarget_vertex:zw,normal_fragment_begin:jw,normal_fragment_maps:Hw,normal_pars_fragment:Gw,normal_pars_vertex:Vw,normal_vertex:Ww,normalmap_pars_fragment:Xw,clearcoat_normal_fragment_begin:$w,clearcoat_normal_fragment_maps:qw,clearcoat_pars_fragment:Yw,iridescence_pars_fragment:Kw,opaque_fragment:Zw,packing:Qw,premultiplied_alpha_fragment:Jw,project_vertex:eb,dithering_fragment:tb,dithering_pars_fragment:nb,roughnessmap_fragment:ib,roughnessmap_pars_fragment:rb,shadowmap_pars_fragment:sb,shadowmap_pars_vertex:ab,shadowmap_vertex:ob,shadowmask_pars_fragment:lb,skinbase_vertex:cb,skinning_pars_vertex:ub,skinning_vertex:db,skinnormal_vertex:hb,specularmap_fragment:fb,specularmap_pars_fragment:pb,tonemapping_fragment:mb,tonemapping_pars_fragment:gb,transmission_fragment:vb,transmission_pars_fragment:xb,uv_pars_fragment:_b,uv_pars_vertex:yb,uv_vertex:Sb,worldpos_vertex:Mb,background_vert:Eb,background_frag:Tb,backgroundCube_vert:wb,backgroundCube_frag:bb,cube_vert:Cb,cube_frag:Ab,depth_vert:Rb,depth_frag:Nb,distance_vert:Pb,distance_frag:Lb,equirect_vert:Db,equirect_frag:Ib,linedashed_vert:Ub,linedashed_frag:Fb,meshbasic_vert:Ob,meshbasic_frag:kb,meshlambert_vert:Bb,meshlambert_frag:zb,meshmatcap_vert:jb,meshmatcap_frag:Hb,meshnormal_vert:Gb,meshnormal_frag:Vb,meshphong_vert:Wb,meshphong_frag:Xb,meshphysical_vert:$b,meshphysical_frag:qb,meshtoon_vert:Yb,meshtoon_frag:Kb,points_vert:Zb,points_frag:Qb,shadow_vert:Jb,shadow_frag:e1,sprite_vert:t1,sprite_frag:n1},Oe={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new J},probesMax:{value:new J},probesResolution:{value:new J}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},$i={basic:{uniforms:Hn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:yt.meshbasic_vert,fragmentShader:yt.meshbasic_frag},lambert:{uniforms:Hn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new xt(0)},envMapIntensity:{value:1}}]),vertexShader:yt.meshlambert_vert,fragmentShader:yt.meshlambert_frag},phong:{uniforms:Hn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:yt.meshphong_vert,fragmentShader:yt.meshphong_frag},standard:{uniforms:Hn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag},toon:{uniforms:Hn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new xt(0)}}]),vertexShader:yt.meshtoon_vert,fragmentShader:yt.meshtoon_frag},matcap:{uniforms:Hn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:yt.meshmatcap_vert,fragmentShader:yt.meshmatcap_frag},points:{uniforms:Hn([Oe.points,Oe.fog]),vertexShader:yt.points_vert,fragmentShader:yt.points_frag},dashed:{uniforms:Hn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:yt.linedashed_vert,fragmentShader:yt.linedashed_frag},depth:{uniforms:Hn([Oe.common,Oe.displacementmap]),vertexShader:yt.depth_vert,fragmentShader:yt.depth_frag},normal:{uniforms:Hn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:yt.meshnormal_vert,fragmentShader:yt.meshnormal_frag},sprite:{uniforms:Hn([Oe.sprite,Oe.fog]),vertexShader:yt.sprite_vert,fragmentShader:yt.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:yt.background_vert,fragmentShader:yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:yt.backgroundCube_vert,fragmentShader:yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:yt.cube_vert,fragmentShader:yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:yt.equirect_vert,fragmentShader:yt.equirect_frag},distance:{uniforms:Hn([Oe.common,Oe.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:yt.distance_vert,fragmentShader:yt.distance_frag},shadow:{uniforms:Hn([Oe.lights,Oe.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:yt.shadow_vert,fragmentShader:yt.shadow_frag}};$i.physical={uniforms:Hn([$i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag};const bc={r:0,b:0,g:0},i1=new nn,Ex=new vt;Ex.set(-1,0,0,0,1,0,0,0,1);function r1(i,e,t,s,a,l){const u=new xt(0);let h=a===!0?0:1,f,p,g=null,x=0,v=null;function S(b){let E=b.isScene===!0?b.background:null;if(E&&E.isTexture){const w=b.backgroundBlurriness>0;E=e.get(E,w)}return E}function T(b){let E=!1;const w=S(b);w===null?y(u,h):w&&w.isColor&&(y(w,1),E=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?t.buffers.color.setClear(0,0,0,1,l):D==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(i.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function R(b,E){const w=S(E);w&&(w.isCubeTexture||w.mapping===iu)?(p===void 0&&(p=new Mi(new ka(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:Pa($i.backgroundCube.uniforms),vertexShader:$i.backgroundCube.vertexShader,fragmentShader:$i.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(D,L,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=w,p.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(i1.makeRotationFromEuler(E.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(Ex),p.material.toneMapped=At.getTransfer(w.colorSpace)!==Ft,(g!==w||x!==w.version||v!==i.toneMapping)&&(p.material.needsUpdate=!0,g=w,x=w.version,v=i.toneMapping),p.layers.enableAll(),b.unshift(p,p.geometry,p.material,0,0,null)):w&&w.isTexture&&(f===void 0&&(f=new Mi(new Yo(2,2),new Un({name:"BackgroundMaterial",uniforms:Pa($i.background.uniforms),vertexShader:$i.background.vertexShader,fragmentShader:$i.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(f)),f.material.uniforms.t2D.value=w,f.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,f.material.toneMapped=At.getTransfer(w.colorSpace)!==Ft,w.matrixAutoUpdate===!0&&w.updateMatrix(),f.material.uniforms.uvTransform.value.copy(w.matrix),(g!==w||x!==w.version||v!==i.toneMapping)&&(f.material.needsUpdate=!0,g=w,x=w.version,v=i.toneMapping),f.layers.enableAll(),b.unshift(f,f.geometry,f.material,0,0,null))}function y(b,E){b.getRGB(bc,vx(i)),t.buffers.color.setClear(bc.r,bc.g,bc.b,E,l)}function M(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return u},setClearColor:function(b,E=1){u.set(b),h=E,y(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(b){h=b,y(u,h)},render:T,addToRenderList:R,dispose:M}}function s1(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),s={},a=v(null);let l=a,u=!1;function h(j,Z,H,Q,V){let F=!1;const G=x(j,Q,H,Z);l!==G&&(l=G,p(l.object)),F=S(j,Q,H,V),F&&T(j,Q,H,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(F||u)&&(u=!1,w(j,Z,H,Q),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function f(){return i.createVertexArray()}function p(j){return i.bindVertexArray(j)}function g(j){return i.deleteVertexArray(j)}function x(j,Z,H,Q){const V=Q.wireframe===!0;let F=s[Z.id];F===void 0&&(F={},s[Z.id]=F);const G=j.isInstancedMesh===!0?j.id:0;let X=F[G];X===void 0&&(X={},F[G]=X);let oe=X[H.id];oe===void 0&&(oe={},X[H.id]=oe);let re=oe[V];return re===void 0&&(re=v(f()),oe[V]=re),re}function v(j){const Z=[],H=[],Q=[];for(let V=0;V<t;V++)Z[V]=0,H[V]=0,Q[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:H,attributeDivisors:Q,object:j,attributes:{},index:null}}function S(j,Z,H,Q){const V=l.attributes,F=Z.attributes;let G=0;const X=H.getAttributes();for(const oe in X)if(X[oe].location>=0){const B=V[oe];let te=F[oe];if(te===void 0&&(oe==="instanceMatrix"&&j.instanceMatrix&&(te=j.instanceMatrix),oe==="instanceColor"&&j.instanceColor&&(te=j.instanceColor)),B===void 0||B.attribute!==te||te&&B.data!==te.data)return!0;G++}return l.attributesNum!==G||l.index!==Q}function T(j,Z,H,Q){const V={},F=Z.attributes;let G=0;const X=H.getAttributes();for(const oe in X)if(X[oe].location>=0){let B=F[oe];B===void 0&&(oe==="instanceMatrix"&&j.instanceMatrix&&(B=j.instanceMatrix),oe==="instanceColor"&&j.instanceColor&&(B=j.instanceColor));const te={};te.attribute=B,B&&B.data&&(te.data=B.data),V[oe]=te,G++}l.attributes=V,l.attributesNum=G,l.index=Q}function R(){const j=l.newAttributes;for(let Z=0,H=j.length;Z<H;Z++)j[Z]=0}function y(j){M(j,0)}function M(j,Z){const H=l.newAttributes,Q=l.enabledAttributes,V=l.attributeDivisors;H[j]=1,Q[j]===0&&(i.enableVertexAttribArray(j),Q[j]=1),V[j]!==Z&&(i.vertexAttribDivisor(j,Z),V[j]=Z)}function b(){const j=l.newAttributes,Z=l.enabledAttributes;for(let H=0,Q=Z.length;H<Q;H++)Z[H]!==j[H]&&(i.disableVertexAttribArray(H),Z[H]=0)}function E(j,Z,H,Q,V,F,G){G===!0?i.vertexAttribIPointer(j,Z,H,V,F):i.vertexAttribPointer(j,Z,H,Q,V,F)}function w(j,Z,H,Q){R();const V=Q.attributes,F=H.getAttributes(),G=Z.defaultAttributeValues;for(const X in F){const oe=F[X];if(oe.location>=0){let re=V[X];if(re===void 0&&(X==="instanceMatrix"&&j.instanceMatrix&&(re=j.instanceMatrix),X==="instanceColor"&&j.instanceColor&&(re=j.instanceColor)),re!==void 0){const B=re.normalized,te=re.itemSize,Pe=e.get(re);if(Pe===void 0)continue;const Fe=Pe.buffer,he=Pe.type,ne=Pe.bytesPerElement,me=he===i.INT||he===i.UNSIGNED_INT||re.gpuType===sp;if(re.isInterleavedBufferAttribute){const fe=re.data,Ae=fe.stride,Xe=re.offset;if(fe.isInstancedInterleavedBuffer){for(let nt=0;nt<oe.locationSize;nt++)M(oe.location+nt,fe.meshPerAttribute);j.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let nt=0;nt<oe.locationSize;nt++)y(oe.location+nt);i.bindBuffer(i.ARRAY_BUFFER,Fe);for(let nt=0;nt<oe.locationSize;nt++)E(oe.location+nt,te/oe.locationSize,he,B,Ae*ne,(Xe+te/oe.locationSize*nt)*ne,me)}else{if(re.isInstancedBufferAttribute){for(let fe=0;fe<oe.locationSize;fe++)M(oe.location+fe,re.meshPerAttribute);j.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let fe=0;fe<oe.locationSize;fe++)y(oe.location+fe);i.bindBuffer(i.ARRAY_BUFFER,Fe);for(let fe=0;fe<oe.locationSize;fe++)E(oe.location+fe,te/oe.locationSize,he,B,te*ne,te/oe.locationSize*fe*ne,me)}}else if(G!==void 0){const B=G[X];if(B!==void 0)switch(B.length){case 2:i.vertexAttrib2fv(oe.location,B);break;case 3:i.vertexAttrib3fv(oe.location,B);break;case 4:i.vertexAttrib4fv(oe.location,B);break;default:i.vertexAttrib1fv(oe.location,B)}}}}b()}function D(){U();for(const j in s){const Z=s[j];for(const H in Z){const Q=Z[H];for(const V in Q){const F=Q[V];for(const G in F)g(F[G].object),delete F[G];delete Q[V]}}delete s[j]}}function L(j){if(s[j.id]===void 0)return;const Z=s[j.id];for(const H in Z){const Q=Z[H];for(const V in Q){const F=Q[V];for(const G in F)g(F[G].object),delete F[G];delete Q[V]}}delete s[j.id]}function O(j){for(const Z in s){const H=s[Z];for(const Q in H){const V=H[Q];if(V[j.id]===void 0)continue;const F=V[j.id];for(const G in F)g(F[G].object),delete F[G];delete V[j.id]}}}function A(j){for(const Z in s){const H=s[Z],Q=j.isInstancedMesh===!0?j.id:0,V=H[Q];if(V!==void 0){for(const F in V){const G=V[F];for(const X in G)g(G[X].object),delete G[X];delete V[F]}delete H[Q],Object.keys(H).length===0&&delete s[Z]}}}function U(){q(),u=!0,l!==a&&(l=a,p(l.object))}function q(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:h,reset:U,resetDefaultState:q,dispose:D,releaseStatesOfGeometry:L,releaseStatesOfObject:A,releaseStatesOfProgram:O,initAttributes:R,enableAttribute:y,disableUnusedAttributes:b}}function a1(i,e,t){let s;function a(f){s=f}function l(f,p){i.drawArrays(s,f,p),t.update(p,s,1)}function u(f,p,g){g!==0&&(i.drawArraysInstanced(s,f,p,g),t.update(p,s,g))}function h(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,f,0,p,0,g);let v=0;for(let S=0;S<g;S++)v+=p[S];t.update(v,s,1)}this.setMode=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=h}function o1(i,e,t,s){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");a=i.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(O){return!(O!==Ui&&s.convert(O)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(O){const A=O===ci&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==li&&s.convert(O)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Yi&&!A)}function f(O){if(O==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const g=f(p);g!==p&&(lt("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const x=t.logarithmicDepthBuffer===!0,v=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&v===!1&&lt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const S=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),T=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),M=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=i.getParameter(i.MAX_SAMPLES),L=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:f,textureFormatReadable:u,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:v,maxTextures:S,maxVertexTextures:T,maxTextureSize:R,maxCubemapSize:y,maxAttributes:M,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:w,maxSamples:D,samples:L}}function l1(i){const e=this;let t=null,s=0,a=!1,l=!1;const u=new Yr,h=new vt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(x,v){const S=x.length!==0||v||s!==0||a;return a=v,s=x.length,S},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(x,v){t=g(x,v,0)},this.setState=function(x,v,S){const T=x.clippingPlanes,R=x.clipIntersection,y=x.clipShadows,M=i.get(x);if(!a||T===null||T.length===0||l&&!y)l?g(null):p();else{const b=l?0:s,E=b*4;let w=M.clippingState||null;f.value=w,w=g(T,v,E,S);for(let D=0;D!==E;++D)w[D]=t[D];M.clippingState=w,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=b}};function p(){f.value!==t&&(f.value=t,f.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(x,v,S,T){const R=x!==null?x.length:0;let y=null;if(R!==0){if(y=f.value,T!==!0||y===null){const M=S+R*4,b=v.matrixWorldInverse;h.getNormalMatrix(b),(y===null||y.length<M)&&(y=new Float32Array(M));for(let E=0,w=S;E!==R;++E,w+=4)u.copy(x[E]).applyMatrix4(b,h),u.normal.toArray(y,w),y[w+3]=u.constant}f.value=y,f.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,y}}const Zr=4,Kv=[.125,.215,.35,.446,.526,.582],ws=20,c1=256,Io=new su,Zv=new xt;let Nh=null,Ph=0,Lh=0,Dh=!1;const u1=new J;class Qv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,s=.1,a=100,l={}){const{size:u=256,position:h=u1}=l;Nh=this._renderer.getRenderTarget(),Ph=this._renderer.getActiveCubeFace(),Lh=this._renderer.getActiveMipmapLevel(),Dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,s,a,f,h),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=t0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=e0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Nh,Ph,Lh),this._renderer.xr.enabled=Dh,e.scissorTest=!1,ya(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===As||e.mapping===Ra?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nh=this._renderer.getRenderTarget(),Ph=this._renderer.getActiveCubeFace(),Lh=this._renderer.getActiveMipmapLevel(),Dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:In,minFilter:In,generateMipmaps:!1,type:ci,format:Ui,colorSpace:Xc,depthBuffer:!1},a=Jv(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jv(e,t,s);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=d1(l)),this._blurMaterial=f1(l,e,t),this._ggxMaterial=h1(l,e,t)}return a}_compileMaterial(e){const t=new Mi(new On,e);this._renderer.compile(t,Io)}_sceneToCubeUV(e,t,s,a,l){const f=new _i(90,1,t,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,v=x.autoClear,S=x.toneMapping;x.getClearColor(Zv),x.toneMapping=Qi,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(a),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Mi(new ka,new gp({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,y=R.material;let M=!1;const b=e.background;b?b.isColor&&(y.color.copy(b),e.background=null,M=!0):(y.color.copy(Zv),M=!0);for(let E=0;E<6;E++){const w=E%3;w===0?(f.up.set(0,p[E],0),f.position.set(l.x,l.y,l.z),f.lookAt(l.x+g[E],l.y,l.z)):w===1?(f.up.set(0,0,p[E]),f.position.set(l.x,l.y,l.z),f.lookAt(l.x,l.y+g[E],l.z)):(f.up.set(0,p[E],0),f.position.set(l.x,l.y,l.z),f.lookAt(l.x,l.y,l.z+g[E]));const D=this._cubeSize;ya(a,w*D,E>2?D:0,D,D),x.setRenderTarget(a),M&&x.render(R,f),x.render(e,f)}x.toneMapping=S,x.autoClear=v,e.background=b}_textureToCubeUV(e,t){const s=this._renderer,a=e.mapping===As||e.mapping===Ra;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=t0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=e0());const l=a?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const h=l.uniforms;h.envMap.value=e;const f=this._cubeSize;ya(t,0,0,3*f,2*f),s.setRenderTarget(t),s.render(u,Io)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let l=1;l<a;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=s}_applyGGXFilter(e,t,s){const a=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,h=this._lodMeshes[s];h.material=u;const f=u.uniforms,p=s/(this._lodMeshes.length-1),g=t/(this._lodMeshes.length-1),x=Math.sqrt(p*p-g*g),v=0+p*1.25,S=x*v,{_lodMax:T}=this,R=this._sizeLods[s],y=3*R*(s>T-Zr?s-T+Zr:0),M=4*(this._cubeSize-R);f.envMap.value=e.texture,f.roughness.value=S,f.mipInt.value=T-t,ya(l,y,M,3*R,2*R),a.setRenderTarget(l),a.render(h,Io),f.envMap.value=l.texture,f.roughness.value=0,f.mipInt.value=T-s,ya(e,y,M,3*R,2*R),a.setRenderTarget(e),a.render(h,Io)}_blur(e,t,s,a,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,s,a,"latitudinal",l),this._halfBlur(u,e,s,s,a,"longitudinal",l)}_halfBlur(e,t,s,a,l,u,h){const f=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Nt("blur direction must be either latitudinal or longitudinal!");const g=3,x=this._lodMeshes[a];x.material=p;const v=p.uniforms,S=this._sizeLods[s]-1,T=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*ws-1),R=l/T,y=isFinite(l)?1+Math.floor(g*R):ws;y>ws&&lt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ws}`);const M=[];let b=0;for(let O=0;O<ws;++O){const A=O/R,U=Math.exp(-A*A/2);M.push(U),O===0?b+=U:O<y&&(b+=2*U)}for(let O=0;O<M.length;O++)M[O]=M[O]/b;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=M,v.latitudinal.value=u==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:E}=this;v.dTheta.value=T,v.mipInt.value=E-s;const w=this._sizeLods[a],D=3*w*(a>E-Zr?a-E+Zr:0),L=4*(this._cubeSize-w);ya(t,D,L,3*w,2*w),f.setRenderTarget(t),f.render(x,Io)}}function d1(i){const e=[],t=[],s=[];let a=i;const l=i-Zr+1+Kv.length;for(let u=0;u<l;u++){const h=Math.pow(2,a);e.push(h);let f=1/h;u>i-Zr?f=Kv[u-i+Zr-1]:u===0&&(f=0),t.push(f);const p=1/(h-2),g=-p,x=1+p,v=[g,g,x,g,x,x,g,g,x,x,g,x],S=6,T=6,R=3,y=2,M=1,b=new Float32Array(R*T*S),E=new Float32Array(y*T*S),w=new Float32Array(M*T*S);for(let L=0;L<S;L++){const O=L%3*2/3-1,A=L>2?0:-1,U=[O,A,0,O+2/3,A,0,O+2/3,A+1,0,O,A,0,O+2/3,A+1,0,O,A+1,0];b.set(U,R*T*L),E.set(v,y*T*L);const q=[L,L,L,L,L,L];w.set(q,M*T*L)}const D=new On;D.setAttribute("position",new Fi(b,R)),D.setAttribute("uv",new Fi(E,y)),D.setAttribute("faceIndex",new Fi(w,M)),s.push(new Mi(D,null)),a>Zr&&a--}return{lodMeshes:s,sizeLods:e,sigmas:t}}function Jv(i,e,t){const s=new ei(i,e,t);return s.texture.mapping=iu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function ya(i,e,t,s,a){i.viewport.set(e,t,s,a),i.scissor.set(e,t,s,a)}function h1(i,e,t){return new Un({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:c1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:au(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function f1(i,e,t){const s=new Float32Array(ws),a=new J(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:ws,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:au(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function e0(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:au(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function t0(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function au(){return`

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
	`}class Tx extends ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},a=[s,s,s,s,s,s];this.texture=new mx(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new ka(5,5,5),l=new Un({name:"CubemapFromEquirect",uniforms:Pa(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Jn,blending:Zi});l.uniforms.tEquirect.value=t;const u=new Mi(a,l),h=t.minFilter;return t.minFilter===bs&&(t.minFilter=In),new mT(1,10,this).update(e,u),t.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,s=!0,a=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,s,a);e.setRenderTarget(l)}}function p1(i){let e=new WeakMap,t=new WeakMap,s=null;function a(v,S=!1){return v==null?null:S?u(v):l(v)}function l(v){if(v&&v.isTexture){const S=v.mapping;if(S===th||S===nh)if(e.has(v)){const T=e.get(v).texture;return h(T,v.mapping)}else{const T=v.image;if(T&&T.height>0){const R=new Tx(T.height);return R.fromEquirectangularTexture(i,v),e.set(v,R),v.addEventListener("dispose",p),h(R.texture,v.mapping)}else return null}}return v}function u(v){if(v&&v.isTexture){const S=v.mapping,T=S===th||S===nh,R=S===As||S===Ra;if(T||R){let y=t.get(v);const M=y!==void 0?y.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==M)return s===null&&(s=new Qv(i)),y=T?s.fromEquirectangular(v,y):s.fromCubemap(v,y),y.texture.pmremVersion=v.pmremVersion,t.set(v,y),y.texture;if(y!==void 0)return y.texture;{const b=v.image;return T&&b&&b.height>0||R&&b&&f(b)?(s===null&&(s=new Qv(i)),y=T?s.fromEquirectangular(v):s.fromCubemap(v),y.texture.pmremVersion=v.pmremVersion,t.set(v,y),v.addEventListener("dispose",g),y.texture):null}}}return v}function h(v,S){return S===th?v.mapping=As:S===nh&&(v.mapping=Ra),v}function f(v){let S=0;const T=6;for(let R=0;R<T;R++)v[R]!==void 0&&S++;return S===T}function p(v){const S=v.target;S.removeEventListener("dispose",p);const T=e.get(S);T!==void 0&&(e.delete(S),T.dispose())}function g(v){const S=v.target;S.removeEventListener("dispose",g);const T=t.get(S);T!==void 0&&(t.delete(S),T.dispose())}function x(){e=new WeakMap,t=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:a,dispose:x}}function m1(i){const e={};function t(s){if(e[s]!==void 0)return e[s];const a=i.getExtension(s);return e[s]=a,a}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const a=t(s);return a===null&&Ff("WebGLRenderer: "+s+" extension not supported."),a}}}function g1(i,e,t,s){const a={},l=new WeakMap;function u(x){const v=x.target;v.index!==null&&e.remove(v.index);for(const T in v.attributes)e.remove(v.attributes[T]);v.removeEventListener("dispose",u),delete a[v.id];const S=l.get(v);S&&(e.remove(S),l.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function h(x,v){return a[v.id]===!0||(v.addEventListener("dispose",u),a[v.id]=!0,t.memory.geometries++),v}function f(x){const v=x.attributes;for(const S in v)e.update(v[S],i.ARRAY_BUFFER)}function p(x){const v=[],S=x.index,T=x.attributes.position;let R=0;if(T===void 0)return;if(S!==null){const b=S.array;R=S.version;for(let E=0,w=b.length;E<w;E+=3){const D=b[E+0],L=b[E+1],O=b[E+2];v.push(D,L,L,O,O,D)}}else{const b=T.array;R=T.version;for(let E=0,w=b.length/3-1;E<w;E+=3){const D=E+0,L=E+1,O=E+2;v.push(D,L,L,O,O,D)}}const y=new(T.count>=65535?dx:ux)(v,1);y.version=R;const M=l.get(x);M&&e.remove(M),l.set(x,y)}function g(x){const v=l.get(x);if(v){const S=x.index;S!==null&&v.version<S.version&&p(x)}else p(x);return l.get(x)}return{get:h,update:f,getWireframeAttribute:g}}function v1(i,e,t){let s;function a(x){s=x}let l,u;function h(x){l=x.type,u=x.bytesPerElement}function f(x,v){i.drawElements(s,v,l,x*u),t.update(v,s,1)}function p(x,v,S){S!==0&&(i.drawElementsInstanced(s,v,l,x*u,S),t.update(v,s,S))}function g(x,v,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,v,0,l,x,0,S);let R=0;for(let y=0;y<S;y++)R+=v[y];t.update(R,s,1)}this.setMode=a,this.setIndex=h,this.render=f,this.renderInstances=p,this.renderMultiDraw=g}function x1(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,u,h){switch(t.calls++,u){case i.TRIANGLES:t.triangles+=h*(l/3);break;case i.LINES:t.lines+=h*(l/2);break;case i.LINE_STRIP:t.lines+=h*(l-1);break;case i.LINE_LOOP:t.lines+=h*l;break;case i.POINTS:t.points+=h*l;break;default:Nt("WebGLInfo: Unknown draw mode:",u);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:s}}function _1(i,e,t){const s=new WeakMap,a=new an;function l(u,h,f){const p=u.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=g!==void 0?g.length:0;let v=s.get(h);if(v===void 0||v.count!==x){let q=function(){A.dispose(),s.delete(h),h.removeEventListener("dispose",q)};var S=q;v!==void 0&&v.texture.dispose();const T=h.morphAttributes.position!==void 0,R=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],E=h.morphAttributes.color||[];let w=0;T===!0&&(w=1),R===!0&&(w=2),y===!0&&(w=3);let D=h.attributes.position.count*w,L=1;D>e.maxTextureSize&&(L=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const O=new Float32Array(D*L*4*x),A=new ox(O,D,L,x);A.type=Yi,A.needsUpdate=!0;const U=w*4;for(let j=0;j<x;j++){const Z=M[j],H=b[j],Q=E[j],V=D*L*4*j;for(let F=0;F<Z.count;F++){const G=F*U;T===!0&&(a.fromBufferAttribute(Z,F),O[V+G+0]=a.x,O[V+G+1]=a.y,O[V+G+2]=a.z,O[V+G+3]=0),R===!0&&(a.fromBufferAttribute(H,F),O[V+G+4]=a.x,O[V+G+5]=a.y,O[V+G+6]=a.z,O[V+G+7]=0),y===!0&&(a.fromBufferAttribute(Q,F),O[V+G+8]=a.x,O[V+G+9]=a.y,O[V+G+10]=a.z,O[V+G+11]=Q.itemSize===4?a.w:1)}}v={count:x,texture:A,size:new Qe(D,L)},s.set(h,v),h.addEventListener("dispose",q)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)f.getUniforms().setValue(i,"morphTexture",u.morphTexture,t);else{let T=0;for(let y=0;y<p.length;y++)T+=p[y];const R=h.morphTargetsRelative?1:1-T;f.getUniforms().setValue(i,"morphTargetBaseInfluence",R),f.getUniforms().setValue(i,"morphTargetInfluences",p)}f.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}return{update:l}}function y1(i,e,t,s,a){let l=new WeakMap;function u(p){const g=a.render.frame,x=p.geometry,v=e.get(p,x);if(l.get(v)!==g&&(e.update(v),l.set(v,g)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),l.get(p)!==g&&(t.update(p.instanceMatrix,i.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,i.ARRAY_BUFFER),l.set(p,g))),p.isSkinnedMesh){const S=p.skeleton;l.get(S)!==g&&(S.update(),l.set(S,g))}return v}function h(){l=new WeakMap}function f(p){const g=p.target;g.removeEventListener("dispose",f),s.releaseStatesOfObject(g),t.remove(g.instanceMatrix),g.instanceColor!==null&&t.remove(g.instanceColor)}return{update:u,dispose:h}}const S1={[Jf]:"LINEAR_TONE_MAPPING",[ep]:"REINHARD_TONE_MAPPING",[tp]:"CINEON_TONE_MAPPING",[nu]:"ACES_FILMIC_TONE_MAPPING",[ip]:"AGX_TONE_MAPPING",[rp]:"NEUTRAL_TONE_MAPPING",[np]:"CUSTOM_TONE_MAPPING"};function M1(i,e,t,s,a){const l=new ei(e,t,{type:i,depthBuffer:s,stencilBuffer:a,depthTexture:s?new Na(e,t):void 0}),u=new ei(e,t,{type:ci,depthBuffer:!1,stencilBuffer:!1}),h=new On;h.setAttribute("position",new cn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new cn([0,2,0,0,2,0],2));const f=new xx({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Mi(h,f),g=new su(-1,1,1,-1,0,1);let x=null,v=null,S=!1,T,R=null,y=[],M=!1;this.setSize=function(b,E){l.setSize(b,E),u.setSize(b,E);for(let w=0;w<y.length;w++){const D=y[w];D.setSize&&D.setSize(b,E)}},this.setEffects=function(b){y=b,M=y.length>0&&y[0].isRenderPass===!0;const E=l.width,w=l.height;for(let D=0;D<y.length;D++){const L=y[D];L.setSize&&L.setSize(E,w)}},this.begin=function(b,E){if(S||b.toneMapping===Qi&&y.length===0)return!1;if(R=E,E!==null){const w=E.width,D=E.height;(l.width!==w||l.height!==D)&&this.setSize(w,D)}return M===!1&&b.setRenderTarget(l),T=b.toneMapping,b.toneMapping=Qi,!0},this.hasRenderPass=function(){return M},this.end=function(b,E){b.toneMapping=T,S=!0;let w=l,D=u;for(let L=0;L<y.length;L++){const O=y[L];if(O.enabled!==!1&&(O.render(b,D,w,E),O.needsSwap!==!1)){const A=w;w=D,D=A}}if(x!==b.outputColorSpace||v!==b.toneMapping){x=b.outputColorSpace,v=b.toneMapping,f.defines={},At.getTransfer(x)===Ft&&(f.defines.SRGB_TRANSFER="");const L=S1[v];L&&(f.defines[L]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=w.texture,b.setRenderTarget(R),b.render(p,g),R=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){l.depthTexture&&l.depthTexture.dispose(),l.dispose(),u.dispose(),h.dispose(),f.dispose()}}const wx=new Fn,kf=new Na(1,1),bx=new ox,Cx=new kE,Ax=new mx,n0=[],i0=[],r0=new Float32Array(16),s0=new Float32Array(9),a0=new Float32Array(4);function Ba(i,e,t){const s=i[0];if(s<=0||s>0)return i;const a=e*t;let l=n0[a];if(l===void 0&&(l=new Float32Array(a),n0[a]=l),e!==0){s.toArray(l,0);for(let u=1,h=0;u!==e;++u)h+=t,i[u].toArray(l,h)}return l}function vn(i,e){if(i.length!==e.length)return!1;for(let t=0,s=i.length;t<s;t++)if(i[t]!==e[t])return!1;return!0}function xn(i,e){for(let t=0,s=e.length;t<s;t++)i[t]=e[t]}function ou(i,e){let t=i0[e];t===void 0&&(t=new Int32Array(e),i0[e]=t);for(let s=0;s!==e;++s)t[s]=i.allocateTextureUnit();return t}function E1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function T1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;i.uniform2fv(this.addr,e),xn(t,e)}}function w1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vn(t,e))return;i.uniform3fv(this.addr,e),xn(t,e)}}function b1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;i.uniform4fv(this.addr,e),xn(t,e)}}function C1(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(vn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),xn(t,e)}else{if(vn(t,s))return;a0.set(s),i.uniformMatrix2fv(this.addr,!1,a0),xn(t,s)}}function A1(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(vn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),xn(t,e)}else{if(vn(t,s))return;s0.set(s),i.uniformMatrix3fv(this.addr,!1,s0),xn(t,s)}}function R1(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(vn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),xn(t,e)}else{if(vn(t,s))return;r0.set(s),i.uniformMatrix4fv(this.addr,!1,r0),xn(t,s)}}function N1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function P1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;i.uniform2iv(this.addr,e),xn(t,e)}}function L1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;i.uniform3iv(this.addr,e),xn(t,e)}}function D1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;i.uniform4iv(this.addr,e),xn(t,e)}}function I1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function U1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;i.uniform2uiv(this.addr,e),xn(t,e)}}function F1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;i.uniform3uiv(this.addr,e),xn(t,e)}}function O1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;i.uniform4uiv(this.addr,e),xn(t,e)}}function k1(i,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(i.uniform1i(this.addr,a),s[0]=a);let l;this.type===i.SAMPLER_2D_SHADOW?(kf.compareFunction=t.isReversedDepthBuffer()?hp:dp,l=kf):l=wx,t.setTexture2D(e||l,a)}function B1(i,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(i.uniform1i(this.addr,a),s[0]=a),t.setTexture3D(e||Cx,a)}function z1(i,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(i.uniform1i(this.addr,a),s[0]=a),t.setTextureCube(e||Ax,a)}function j1(i,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(i.uniform1i(this.addr,a),s[0]=a),t.setTexture2DArray(e||bx,a)}function H1(i){switch(i){case 5126:return E1;case 35664:return T1;case 35665:return w1;case 35666:return b1;case 35674:return C1;case 35675:return A1;case 35676:return R1;case 5124:case 35670:return N1;case 35667:case 35671:return P1;case 35668:case 35672:return L1;case 35669:case 35673:return D1;case 5125:return I1;case 36294:return U1;case 36295:return F1;case 36296:return O1;case 35678:case 36198:case 36298:case 36306:case 35682:return k1;case 35679:case 36299:case 36307:return B1;case 35680:case 36300:case 36308:case 36293:return z1;case 36289:case 36303:case 36311:case 36292:return j1}}function G1(i,e){i.uniform1fv(this.addr,e)}function V1(i,e){const t=Ba(e,this.size,2);i.uniform2fv(this.addr,t)}function W1(i,e){const t=Ba(e,this.size,3);i.uniform3fv(this.addr,t)}function X1(i,e){const t=Ba(e,this.size,4);i.uniform4fv(this.addr,t)}function $1(i,e){const t=Ba(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function q1(i,e){const t=Ba(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Y1(i,e){const t=Ba(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function K1(i,e){i.uniform1iv(this.addr,e)}function Z1(i,e){i.uniform2iv(this.addr,e)}function Q1(i,e){i.uniform3iv(this.addr,e)}function J1(i,e){i.uniform4iv(this.addr,e)}function eC(i,e){i.uniform1uiv(this.addr,e)}function tC(i,e){i.uniform2uiv(this.addr,e)}function nC(i,e){i.uniform3uiv(this.addr,e)}function iC(i,e){i.uniform4uiv(this.addr,e)}function rC(i,e,t){const s=this.cache,a=e.length,l=ou(t,a);vn(s,l)||(i.uniform1iv(this.addr,l),xn(s,l));let u;this.type===i.SAMPLER_2D_SHADOW?u=kf:u=wx;for(let h=0;h!==a;++h)t.setTexture2D(e[h]||u,l[h])}function sC(i,e,t){const s=this.cache,a=e.length,l=ou(t,a);vn(s,l)||(i.uniform1iv(this.addr,l),xn(s,l));for(let u=0;u!==a;++u)t.setTexture3D(e[u]||Cx,l[u])}function aC(i,e,t){const s=this.cache,a=e.length,l=ou(t,a);vn(s,l)||(i.uniform1iv(this.addr,l),xn(s,l));for(let u=0;u!==a;++u)t.setTextureCube(e[u]||Ax,l[u])}function oC(i,e,t){const s=this.cache,a=e.length,l=ou(t,a);vn(s,l)||(i.uniform1iv(this.addr,l),xn(s,l));for(let u=0;u!==a;++u)t.setTexture2DArray(e[u]||bx,l[u])}function lC(i){switch(i){case 5126:return G1;case 35664:return V1;case 35665:return W1;case 35666:return X1;case 35674:return $1;case 35675:return q1;case 35676:return Y1;case 5124:case 35670:return K1;case 35667:case 35671:return Z1;case 35668:case 35672:return Q1;case 35669:case 35673:return J1;case 5125:return eC;case 36294:return tC;case 36295:return nC;case 36296:return iC;case 35678:case 36198:case 36298:case 36306:case 35682:return rC;case 35679:case 36299:case 36307:return sC;case 35680:case 36300:case 36308:case 36293:return aC;case 36289:case 36303:case 36311:case 36292:return oC}}class cC{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=H1(t.type)}}class uC{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=lC(t.type)}}class dC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const a=this.seq;for(let l=0,u=a.length;l!==u;++l){const h=a[l];h.setValue(e,t[h.id],s)}}}const Ih=/(\w+)(\])?(\[|\.)?/g;function o0(i,e){i.seq.push(e),i.map[e.id]=e}function hC(i,e,t){const s=i.name,a=s.length;for(Ih.lastIndex=0;;){const l=Ih.exec(s),u=Ih.lastIndex;let h=l[1];const f=l[2]==="]",p=l[3];if(f&&(h=h|0),p===void 0||p==="["&&u+2===a){o0(t,p===void 0?new cC(h,i,e):new uC(h,i,e));break}else{let x=t.map[h];x===void 0&&(x=new dC(h),o0(t,x)),t=x}}}class zc{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<s;++u){const h=e.getActiveUniform(t,u),f=e.getUniformLocation(t,h.name);hC(h,f,this)}const a=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(u):l.push(u);a.length>0&&(this.seq=a.concat(l))}setValue(e,t,s,a){const l=this.map[t];l!==void 0&&l.setValue(e,s,a)}setOptional(e,t,s){const a=t[s];a!==void 0&&this.setValue(e,s,a)}static upload(e,t,s,a){for(let l=0,u=t.length;l!==u;++l){const h=t[l],f=s[h.id];f.needsUpdate!==!1&&h.setValue(e,f.value,a)}}static seqWithValue(e,t){const s=[];for(let a=0,l=e.length;a!==l;++a){const u=e[a];u.id in t&&s.push(u)}return s}}function l0(i,e,t){const s=i.createShader(e);return i.shaderSource(s,t),i.compileShader(s),s}const fC=37297;let pC=0;function mC(i,e){const t=i.split(`
`),s=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=a;u<l;u++){const h=u+1;s.push(`${h===e?">":" "} ${h}: ${t[u]}`)}return s.join(`
`)}const c0=new vt;function gC(i){At._getMatrix(c0,At.workingColorSpace,i);const e=`mat3( ${c0.elements.map(t=>t.toFixed(4))} )`;switch(At.getTransfer(i)){case $c:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return lt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function u0(i,e,t){const s=i.getShaderParameter(e,i.COMPILE_STATUS),l=(i.getShaderInfoLog(e)||"").trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+mC(i.getShaderSource(e),h)}else return l}function vC(i,e){const t=gC(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const xC={[Jf]:"Linear",[ep]:"Reinhard",[tp]:"Cineon",[nu]:"ACESFilmic",[ip]:"AgX",[rp]:"Neutral",[np]:"Custom"};function _C(i,e){const t=xC[e];return t===void 0?(lt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Cc=new J;function yC(){At.getLuminanceCoefficients(Cc);const i=Cc.x.toFixed(4),e=Cc.y.toFixed(4),t=Cc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function SC(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ko).join(`
`)}function MC(i){const e=[];for(const t in i){const s=i[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function EC(i,e){const t={},s=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const l=i.getActiveAttrib(e,a),u=l.name;let h=1;l.type===i.FLOAT_MAT2&&(h=2),l.type===i.FLOAT_MAT3&&(h=3),l.type===i.FLOAT_MAT4&&(h=4),t[u]={type:l.type,location:i.getAttribLocation(e,u),locationSize:h}}return t}function ko(i){return i!==""}function d0(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function h0(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const TC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bf(i){return i.replace(TC,bC)}const wC=new Map;function bC(i,e){let t=yt[e];if(t===void 0){const s=wC.get(e);if(s!==void 0)t=yt[s],lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Bf(t)}const CC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function f0(i){return i.replace(CC,AC)}function AC(i,e,t,s){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function p0(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const RC={[Ic]:"SHADOWMAP_TYPE_PCF",[Oo]:"SHADOWMAP_TYPE_VSM"};function NC(i){return RC[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const PC={[As]:"ENVMAP_TYPE_CUBE",[Ra]:"ENVMAP_TYPE_CUBE",[iu]:"ENVMAP_TYPE_CUBE_UV"};function LC(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":PC[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const DC={[Ra]:"ENVMAP_MODE_REFRACTION"};function IC(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":DC[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const UC={[Z0]:"ENVMAP_BLENDING_MULTIPLY",[gE]:"ENVMAP_BLENDING_MIX",[vE]:"ENVMAP_BLENDING_ADD"};function FC(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":UC[i.combine]||"ENVMAP_BLENDING_NONE"}function OC(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:s,maxMip:t}}function kC(i,e,t,s){const a=i.getContext(),l=t.defines;let u=t.vertexShader,h=t.fragmentShader;const f=NC(t),p=LC(t),g=IC(t),x=FC(t),v=OC(t),S=SC(t),T=MC(l),R=a.createProgram();let y,M,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(ko).join(`
`),y.length>0&&(y+=`
`),M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(ko).join(`
`),M.length>0&&(M+=`
`)):(y=[p0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ko).join(`
`),M=[p0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",t.envMap?"#define "+x:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qi?"#define TONE_MAPPING":"",t.toneMapping!==Qi?yt.tonemapping_pars_fragment:"",t.toneMapping!==Qi?_C("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",yt.colorspace_pars_fragment,vC("linearToOutputTexel",t.outputColorSpace),yC(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ko).join(`
`)),u=Bf(u),u=d0(u,t),u=h0(u,t),h=Bf(h),h=d0(h,t),h=h0(h,t),u=f0(u),h=f0(h),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,M=["#define varying in",t.glslVersion===_v?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_v?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const E=b+y+u,w=b+M+h,D=l0(a,a.VERTEX_SHADER,E),L=l0(a,a.FRAGMENT_SHADER,w);a.attachShader(R,D),a.attachShader(R,L),t.index0AttributeName!==void 0?a.bindAttribLocation(R,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(R,0,"position"),a.linkProgram(R);function O(j){if(i.debug.checkShaderErrors){const Z=a.getProgramInfoLog(R)||"",H=a.getShaderInfoLog(D)||"",Q=a.getShaderInfoLog(L)||"",V=Z.trim(),F=H.trim(),G=Q.trim();let X=!0,oe=!0;if(a.getProgramParameter(R,a.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,R,D,L);else{const re=u0(a,D,"vertex"),B=u0(a,L,"fragment");Nt("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(R,a.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+V+`
`+re+`
`+B)}else V!==""?lt("WebGLProgram: Program Info Log:",V):(F===""||G==="")&&(oe=!1);oe&&(j.diagnostics={runnable:X,programLog:V,vertexShader:{log:F,prefix:y},fragmentShader:{log:G,prefix:M}})}a.deleteShader(D),a.deleteShader(L),A=new zc(a,R),U=EC(a,R)}let A;this.getUniforms=function(){return A===void 0&&O(this),A};let U;this.getAttributes=function(){return U===void 0&&O(this),U};let q=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=a.getProgramParameter(R,fC)),q},this.destroy=function(){s.releaseStatesOfProgram(this),a.deleteProgram(R),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=pC++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=D,this.fragmentShader=L,this}let BC=0;class zC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(s),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new jC(e),t.set(e,s)),s}}class jC{constructor(e){this.id=BC++,this.code=e,this.usedTimes=0}}function HC(i){return i===Rs||i===Vc||i===Wc}function GC(i,e,t,s,a,l){const u=new lx,h=new zC,f=new Set,p=[],g=new Map,x=s.logarithmicDepthBuffer;let v=s.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(A){return f.add(A),A===0?"uv":`uv${A}`}function R(A,U,q,j,Z,H){const Q=j.fog,V=Z.geometry,F=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?j.environment:null,G=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,X=e.get(A.envMap||F,G),oe=X&&X.mapping===iu?X.image.height:null,re=S[A.type];A.precision!==null&&(v=s.getMaxPrecision(A.precision),v!==A.precision&&lt("WebGLProgram.getParameters:",A.precision,"not supported, using",v,"instead."));const B=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,te=B!==void 0?B.length:0;let Pe=0;V.morphAttributes.position!==void 0&&(Pe=1),V.morphAttributes.normal!==void 0&&(Pe=2),V.morphAttributes.color!==void 0&&(Pe=3);let Fe,he,ne,me;if(re){const ht=$i[re];Fe=ht.vertexShader,he=ht.fragmentShader}else Fe=A.vertexShader,he=A.fragmentShader,h.update(A),ne=h.getVertexShaderID(A),me=h.getFragmentShaderID(A);const fe=i.getRenderTarget(),Ae=i.state.buffers.depth.getReversed(),Xe=Z.isInstancedMesh===!0,nt=Z.isBatchedMesh===!0,et=!!A.map,Ke=!!A.matcap,ft=!!X,wt=!!A.aoMap,rt=!!A.lightMap,Lt=!!A.bumpMap,Ct=!!A.normalMap,rn=!!A.displacementMap,Y=!!A.emissiveMap,Gt=!!A.metalnessMap,_t=!!A.roughnessMap,Ot=A.anisotropy>0,Ue=A.clearcoat>0,Xt=A.dispersion>0,I=A.iridescence>0,C=A.sheen>0,ie=A.transmission>0,ve=Ot&&!!A.anisotropyMap,_e=Ue&&!!A.clearcoatMap,Te=Ue&&!!A.clearcoatNormalMap,Ie=Ue&&!!A.clearcoatRoughnessMap,pe=I&&!!A.iridescenceMap,xe=I&&!!A.iridescenceThicknessMap,ke=C&&!!A.sheenColorMap,ze=C&&!!A.sheenRoughnessMap,Re=!!A.specularMap,we=!!A.specularColorMap,ct=!!A.specularIntensityMap,dt=ie&&!!A.transmissionMap,St=ie&&!!A.thicknessMap,$=!!A.gradientMap,Ce=!!A.alphaMap,ge=A.alphaTest>0,Be=!!A.alphaHash,Le=!!A.extensions;let ye=Qi;A.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(ye=i.toneMapping);const $e={shaderID:re,shaderType:A.type,shaderName:A.name,vertexShader:Fe,fragmentShader:he,defines:A.defines,customVertexShaderID:ne,customFragmentShaderID:me,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:v,batching:nt,batchingColor:nt&&Z._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&Z.instanceColor!==null,instancingMorph:Xe&&Z.morphTexture!==null,outputColorSpace:fe===null?i.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:At.workingColorSpace,alphaToCoverage:!!A.alphaToCoverage,map:et,matcap:Ke,envMap:ft,envMapMode:ft&&X.mapping,envMapCubeUVHeight:oe,aoMap:wt,lightMap:rt,bumpMap:Lt,normalMap:Ct,displacementMap:rn,emissiveMap:Y,normalMapObjectSpace:Ct&&A.normalMapType===yE,normalMapTangentSpace:Ct&&A.normalMapType===If,packedNormalMap:Ct&&A.normalMapType===If&&HC(A.normalMap.format),metalnessMap:Gt,roughnessMap:_t,anisotropy:Ot,anisotropyMap:ve,clearcoat:Ue,clearcoatMap:_e,clearcoatNormalMap:Te,clearcoatRoughnessMap:Ie,dispersion:Xt,iridescence:I,iridescenceMap:pe,iridescenceThicknessMap:xe,sheen:C,sheenColorMap:ke,sheenRoughnessMap:ze,specularMap:Re,specularColorMap:we,specularIntensityMap:ct,transmission:ie,transmissionMap:dt,thicknessMap:St,gradientMap:$,opaque:A.transparent===!1&&A.blending===ba&&A.alphaToCoverage===!1,alphaMap:Ce,alphaTest:ge,alphaHash:Be,combine:A.combine,mapUv:et&&T(A.map.channel),aoMapUv:wt&&T(A.aoMap.channel),lightMapUv:rt&&T(A.lightMap.channel),bumpMapUv:Lt&&T(A.bumpMap.channel),normalMapUv:Ct&&T(A.normalMap.channel),displacementMapUv:rn&&T(A.displacementMap.channel),emissiveMapUv:Y&&T(A.emissiveMap.channel),metalnessMapUv:Gt&&T(A.metalnessMap.channel),roughnessMapUv:_t&&T(A.roughnessMap.channel),anisotropyMapUv:ve&&T(A.anisotropyMap.channel),clearcoatMapUv:_e&&T(A.clearcoatMap.channel),clearcoatNormalMapUv:Te&&T(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&T(A.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&T(A.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&T(A.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&T(A.sheenColorMap.channel),sheenRoughnessMapUv:ze&&T(A.sheenRoughnessMap.channel),specularMapUv:Re&&T(A.specularMap.channel),specularColorMapUv:we&&T(A.specularColorMap.channel),specularIntensityMapUv:ct&&T(A.specularIntensityMap.channel),transmissionMapUv:dt&&T(A.transmissionMap.channel),thicknessMapUv:St&&T(A.thicknessMap.channel),alphaMapUv:Ce&&T(A.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Ct||Ot),vertexNormals:!!V.attributes.normal,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!V.attributes.uv&&(et||Ce),fog:!!Q,useFog:A.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||V.attributes.normal===void 0&&Ct===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Ae,skinning:Z.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:Pe,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:A.dithering,shadowMapEnabled:i.shadowMap.enabled&&q.length>0,shadowMapType:i.shadowMap.type,toneMapping:ye,decodeVideoTexture:et&&A.map.isVideoTexture===!0&&At.getTransfer(A.map.colorSpace)===Ft,decodeVideoTextureEmissive:Y&&A.emissiveMap.isVideoTexture===!0&&At.getTransfer(A.emissiveMap.colorSpace)===Ft,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===xr,flipSided:A.side===Jn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Le&&A.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&A.extensions.multiDraw===!0||nt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return $e.vertexUv1s=f.has(1),$e.vertexUv2s=f.has(2),$e.vertexUv3s=f.has(3),f.clear(),$e}function y(A){const U=[];if(A.shaderID?U.push(A.shaderID):(U.push(A.customVertexShaderID),U.push(A.customFragmentShaderID)),A.defines!==void 0)for(const q in A.defines)U.push(q),U.push(A.defines[q]);return A.isRawShaderMaterial===!1&&(M(U,A),b(U,A),U.push(i.outputColorSpace)),U.push(A.customProgramCacheKey),U.join()}function M(A,U){A.push(U.precision),A.push(U.outputColorSpace),A.push(U.envMapMode),A.push(U.envMapCubeUVHeight),A.push(U.mapUv),A.push(U.alphaMapUv),A.push(U.lightMapUv),A.push(U.aoMapUv),A.push(U.bumpMapUv),A.push(U.normalMapUv),A.push(U.displacementMapUv),A.push(U.emissiveMapUv),A.push(U.metalnessMapUv),A.push(U.roughnessMapUv),A.push(U.anisotropyMapUv),A.push(U.clearcoatMapUv),A.push(U.clearcoatNormalMapUv),A.push(U.clearcoatRoughnessMapUv),A.push(U.iridescenceMapUv),A.push(U.iridescenceThicknessMapUv),A.push(U.sheenColorMapUv),A.push(U.sheenRoughnessMapUv),A.push(U.specularMapUv),A.push(U.specularColorMapUv),A.push(U.specularIntensityMapUv),A.push(U.transmissionMapUv),A.push(U.thicknessMapUv),A.push(U.combine),A.push(U.fogExp2),A.push(U.sizeAttenuation),A.push(U.morphTargetsCount),A.push(U.morphAttributeCount),A.push(U.numDirLights),A.push(U.numPointLights),A.push(U.numSpotLights),A.push(U.numSpotLightMaps),A.push(U.numHemiLights),A.push(U.numRectAreaLights),A.push(U.numDirLightShadows),A.push(U.numPointLightShadows),A.push(U.numSpotLightShadows),A.push(U.numSpotLightShadowsWithMaps),A.push(U.numLightProbes),A.push(U.shadowMapType),A.push(U.toneMapping),A.push(U.numClippingPlanes),A.push(U.numClipIntersection),A.push(U.depthPacking)}function b(A,U){u.disableAll(),U.instancing&&u.enable(0),U.instancingColor&&u.enable(1),U.instancingMorph&&u.enable(2),U.matcap&&u.enable(3),U.envMap&&u.enable(4),U.normalMapObjectSpace&&u.enable(5),U.normalMapTangentSpace&&u.enable(6),U.clearcoat&&u.enable(7),U.iridescence&&u.enable(8),U.alphaTest&&u.enable(9),U.vertexColors&&u.enable(10),U.vertexAlphas&&u.enable(11),U.vertexUv1s&&u.enable(12),U.vertexUv2s&&u.enable(13),U.vertexUv3s&&u.enable(14),U.vertexTangents&&u.enable(15),U.anisotropy&&u.enable(16),U.alphaHash&&u.enable(17),U.batching&&u.enable(18),U.dispersion&&u.enable(19),U.batchingColor&&u.enable(20),U.gradientMap&&u.enable(21),U.packedNormalMap&&u.enable(22),U.vertexNormals&&u.enable(23),A.push(u.mask),u.disableAll(),U.fog&&u.enable(0),U.useFog&&u.enable(1),U.flatShading&&u.enable(2),U.logarithmicDepthBuffer&&u.enable(3),U.reversedDepthBuffer&&u.enable(4),U.skinning&&u.enable(5),U.morphTargets&&u.enable(6),U.morphNormals&&u.enable(7),U.morphColors&&u.enable(8),U.premultipliedAlpha&&u.enable(9),U.shadowMapEnabled&&u.enable(10),U.doubleSided&&u.enable(11),U.flipSided&&u.enable(12),U.useDepthPacking&&u.enable(13),U.dithering&&u.enable(14),U.transmission&&u.enable(15),U.sheen&&u.enable(16),U.opaque&&u.enable(17),U.pointsUvs&&u.enable(18),U.decodeVideoTexture&&u.enable(19),U.decodeVideoTextureEmissive&&u.enable(20),U.alphaToCoverage&&u.enable(21),U.numLightProbeGrids>0&&u.enable(22),A.push(u.mask)}function E(A){const U=S[A.type];let q;if(U){const j=$i[U];q=Vo.clone(j.uniforms)}else q=A.uniforms;return q}function w(A,U){let q=g.get(U);return q!==void 0?++q.usedTimes:(q=new kC(i,U,A,a),p.push(q),g.set(U,q)),q}function D(A){if(--A.usedTimes===0){const U=p.indexOf(A);p[U]=p[p.length-1],p.pop(),g.delete(A.cacheKey),A.destroy()}}function L(A){h.remove(A)}function O(){h.dispose()}return{getParameters:R,getProgramCacheKey:y,getUniforms:E,acquireProgram:w,releaseProgram:D,releaseShaderCache:L,programs:p,dispose:O}}function VC(){let i=new WeakMap;function e(u){return i.has(u)}function t(u){let h=i.get(u);return h===void 0&&(h={},i.set(u,h)),h}function s(u){i.delete(u)}function a(u,h,f){i.get(u)[h]=f}function l(){i=new WeakMap}return{has:e,get:t,remove:s,update:a,dispose:l}}function WC(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function m0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function g0(){const i=[];let e=0;const t=[],s=[],a=[];function l(){e=0,t.length=0,s.length=0,a.length=0}function u(v){let S=0;return v.isInstancedMesh&&(S+=2),v.isSkinnedMesh&&(S+=1),S}function h(v,S,T,R,y,M){let b=i[e];return b===void 0?(b={id:v.id,object:v,geometry:S,material:T,materialVariant:u(v),groupOrder:R,renderOrder:v.renderOrder,z:y,group:M},i[e]=b):(b.id=v.id,b.object=v,b.geometry=S,b.material=T,b.materialVariant=u(v),b.groupOrder=R,b.renderOrder=v.renderOrder,b.z=y,b.group=M),e++,b}function f(v,S,T,R,y,M){const b=h(v,S,T,R,y,M);T.transmission>0?s.push(b):T.transparent===!0?a.push(b):t.push(b)}function p(v,S,T,R,y,M){const b=h(v,S,T,R,y,M);T.transmission>0?s.unshift(b):T.transparent===!0?a.unshift(b):t.unshift(b)}function g(v,S){t.length>1&&t.sort(v||WC),s.length>1&&s.sort(S||m0),a.length>1&&a.sort(S||m0)}function x(){for(let v=e,S=i.length;v<S;v++){const T=i[v];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:t,transmissive:s,transparent:a,init:l,push:f,unshift:p,finish:x,sort:g}}function XC(){let i=new WeakMap;function e(s,a){const l=i.get(s);let u;return l===void 0?(u=new g0,i.set(s,[u])):a>=l.length?(u=new g0,l.push(u)):u=l[a],u}function t(){i=new WeakMap}return{get:e,dispose:t}}function $C(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new J,color:new xt};break;case"SpotLight":t={position:new J,direction:new J,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new J,color:new xt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new J,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":t={color:new xt,position:new J,halfWidth:new J,halfHeight:new J};break}return i[e.id]=t,t}}}function qC(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let YC=0;function KC(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ZC(i){const e=new $C,t=qC(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new J);const a=new J,l=new nn,u=new nn;function h(p){let g=0,x=0,v=0;for(let U=0;U<9;U++)s.probe[U].set(0,0,0);let S=0,T=0,R=0,y=0,M=0,b=0,E=0,w=0,D=0,L=0,O=0;p.sort(KC);for(let U=0,q=p.length;U<q;U++){const j=p[U],Z=j.color,H=j.intensity,Q=j.distance;let V=null;if(j.shadow&&j.shadow.map&&(j.shadow.map.texture.format===Rs?V=j.shadow.map.texture:V=j.shadow.map.depthTexture||j.shadow.map.texture),j.isAmbientLight)g+=Z.r*H,x+=Z.g*H,v+=Z.b*H;else if(j.isLightProbe){for(let F=0;F<9;F++)s.probe[F].addScaledVector(j.sh.coefficients[F],H);O++}else if(j.isDirectionalLight){const F=e.get(j);if(F.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){const G=j.shadow,X=t.get(j);X.shadowIntensity=G.intensity,X.shadowBias=G.bias,X.shadowNormalBias=G.normalBias,X.shadowRadius=G.radius,X.shadowMapSize=G.mapSize,s.directionalShadow[S]=X,s.directionalShadowMap[S]=V,s.directionalShadowMatrix[S]=j.shadow.matrix,b++}s.directional[S]=F,S++}else if(j.isSpotLight){const F=e.get(j);F.position.setFromMatrixPosition(j.matrixWorld),F.color.copy(Z).multiplyScalar(H),F.distance=Q,F.coneCos=Math.cos(j.angle),F.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),F.decay=j.decay,s.spot[R]=F;const G=j.shadow;if(j.map&&(s.spotLightMap[D]=j.map,D++,G.updateMatrices(j),j.castShadow&&L++),s.spotLightMatrix[R]=G.matrix,j.castShadow){const X=t.get(j);X.shadowIntensity=G.intensity,X.shadowBias=G.bias,X.shadowNormalBias=G.normalBias,X.shadowRadius=G.radius,X.shadowMapSize=G.mapSize,s.spotShadow[R]=X,s.spotShadowMap[R]=V,w++}R++}else if(j.isRectAreaLight){const F=e.get(j);F.color.copy(Z).multiplyScalar(H),F.halfWidth.set(j.width*.5,0,0),F.halfHeight.set(0,j.height*.5,0),s.rectArea[y]=F,y++}else if(j.isPointLight){const F=e.get(j);if(F.color.copy(j.color).multiplyScalar(j.intensity),F.distance=j.distance,F.decay=j.decay,j.castShadow){const G=j.shadow,X=t.get(j);X.shadowIntensity=G.intensity,X.shadowBias=G.bias,X.shadowNormalBias=G.normalBias,X.shadowRadius=G.radius,X.shadowMapSize=G.mapSize,X.shadowCameraNear=G.camera.near,X.shadowCameraFar=G.camera.far,s.pointShadow[T]=X,s.pointShadowMap[T]=V,s.pointShadowMatrix[T]=j.shadow.matrix,E++}s.point[T]=F,T++}else if(j.isHemisphereLight){const F=e.get(j);F.skyColor.copy(j.color).multiplyScalar(H),F.groundColor.copy(j.groundColor).multiplyScalar(H),s.hemi[M]=F,M++}}y>0&&(i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Oe.LTC_FLOAT_1,s.rectAreaLTC2=Oe.LTC_FLOAT_2):(s.rectAreaLTC1=Oe.LTC_HALF_1,s.rectAreaLTC2=Oe.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=x,s.ambient[2]=v;const A=s.hash;(A.directionalLength!==S||A.pointLength!==T||A.spotLength!==R||A.rectAreaLength!==y||A.hemiLength!==M||A.numDirectionalShadows!==b||A.numPointShadows!==E||A.numSpotShadows!==w||A.numSpotMaps!==D||A.numLightProbes!==O)&&(s.directional.length=S,s.spot.length=R,s.rectArea.length=y,s.point.length=T,s.hemi.length=M,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=E,s.pointShadowMap.length=E,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=E,s.spotLightMatrix.length=w+D-L,s.spotLightMap.length=D,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=O,A.directionalLength=S,A.pointLength=T,A.spotLength=R,A.rectAreaLength=y,A.hemiLength=M,A.numDirectionalShadows=b,A.numPointShadows=E,A.numSpotShadows=w,A.numSpotMaps=D,A.numLightProbes=O,s.version=YC++)}function f(p,g){let x=0,v=0,S=0,T=0,R=0;const y=g.matrixWorldInverse;for(let M=0,b=p.length;M<b;M++){const E=p[M];if(E.isDirectionalLight){const w=s.directional[x];w.direction.setFromMatrixPosition(E.matrixWorld),a.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(y),x++}else if(E.isSpotLight){const w=s.spot[S];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(y),w.direction.setFromMatrixPosition(E.matrixWorld),a.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(y),S++}else if(E.isRectAreaLight){const w=s.rectArea[T];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(y),u.identity(),l.copy(E.matrixWorld),l.premultiply(y),u.extractRotation(l),w.halfWidth.set(E.width*.5,0,0),w.halfHeight.set(0,E.height*.5,0),w.halfWidth.applyMatrix4(u),w.halfHeight.applyMatrix4(u),T++}else if(E.isPointLight){const w=s.point[v];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(y),v++}else if(E.isHemisphereLight){const w=s.hemi[R];w.direction.setFromMatrixPosition(E.matrixWorld),w.direction.transformDirection(y),R++}}}return{setup:h,setupView:f,state:s}}function v0(i){const e=new ZC(i),t=[],s=[],a=[];function l(v){x.camera=v,t.length=0,s.length=0,a.length=0}function u(v){t.push(v)}function h(v){s.push(v)}function f(v){a.push(v)}function p(){e.setup(t)}function g(v){e.setupView(t,v)}const x={lightsArray:t,shadowsArray:s,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:x,setupLights:p,setupLightsView:g,pushLight:u,pushShadow:h,pushLightProbeGrid:f}}function QC(i){let e=new WeakMap;function t(a,l=0){const u=e.get(a);let h;return u===void 0?(h=new v0(i),e.set(a,[h])):l>=u.length?(h=new v0(i),u.push(h)):h=u[l],h}function s(){e=new WeakMap}return{get:t,dispose:s}}const JC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eA=`uniform sampler2D shadow_pass;
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
}`,tA=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],nA=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],x0=new nn,Uo=new J,Uh=new J;function iA(i,e,t){let s=new vp;const a=new Qe,l=new Qe,u=new an,h=new uT,f=new dT,p={},g=t.maxTextureSize,x={[es]:Jn,[Jn]:es,[xr]:xr},v=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:JC,fragmentShader:eA}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const T=new On;T.setAttribute("position",new Fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Mi(T,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ic;let M=this.type;this.render=function(L,O,A){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||L.length===0)return;this.type===K0&&(lt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ic);const U=i.getRenderTarget(),q=i.getActiveCubeFace(),j=i.getActiveMipmapLevel(),Z=i.state;Z.setBlending(Zi),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const H=M!==this.type;H&&O.traverse(function(Q){Q.material&&(Array.isArray(Q.material)?Q.material.forEach(V=>V.needsUpdate=!0):Q.material.needsUpdate=!0)});for(let Q=0,V=L.length;Q<V;Q++){const F=L[Q],G=F.shadow;if(G===void 0){lt("WebGLShadowMap:",F,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;a.copy(G.mapSize);const X=G.getFrameExtents();a.multiply(X),l.copy(G.mapSize),(a.x>g||a.y>g)&&(a.x>g&&(l.x=Math.floor(g/X.x),a.x=l.x*X.x,G.mapSize.x=l.x),a.y>g&&(l.y=Math.floor(g/X.y),a.y=l.y*X.y,G.mapSize.y=l.y));const oe=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=oe,G.map===null||H===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Oo){if(F.isPointLight){lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new ei(a.x,a.y,{format:Rs,type:ci,minFilter:In,magFilter:In,generateMipmaps:!1}),G.map.texture.name=F.name+".shadowMap",G.map.depthTexture=new Na(a.x,a.y,Yi),G.map.depthTexture.name=F.name+".shadowMapDepth",G.map.depthTexture.format=Er,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=bn,G.map.depthTexture.magFilter=bn}else F.isPointLight?(G.map=new Tx(a.x),G.map.depthTexture=new aT(a.x,Ji)):(G.map=new ei(a.x,a.y),G.map.depthTexture=new Na(a.x,a.y,Ji)),G.map.depthTexture.name=F.name+".shadowMap",G.map.depthTexture.format=Er,this.type===Ic?(G.map.depthTexture.compareFunction=oe?hp:dp,G.map.depthTexture.minFilter=In,G.map.depthTexture.magFilter=In):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=bn,G.map.depthTexture.magFilter=bn);G.camera.updateProjectionMatrix()}const re=G.map.isWebGLCubeRenderTarget?6:1;for(let B=0;B<re;B++){if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,B),i.clear();else{B===0&&(i.setRenderTarget(G.map),i.clear());const te=G.getViewport(B);u.set(l.x*te.x,l.y*te.y,l.x*te.z,l.y*te.w),Z.viewport(u)}if(F.isPointLight){const te=G.camera,Pe=G.matrix,Fe=F.distance||te.far;Fe!==te.far&&(te.far=Fe,te.updateProjectionMatrix()),Uo.setFromMatrixPosition(F.matrixWorld),te.position.copy(Uo),Uh.copy(te.position),Uh.add(tA[B]),te.up.copy(nA[B]),te.lookAt(Uh),te.updateMatrixWorld(),Pe.makeTranslation(-Uo.x,-Uo.y,-Uo.z),x0.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),G._frustum.setFromProjectionMatrix(x0,te.coordinateSystem,te.reversedDepth)}else G.updateMatrices(F);s=G.getFrustum(),w(O,A,G.camera,F,this.type)}G.isPointLightShadow!==!0&&this.type===Oo&&b(G,A),G.needsUpdate=!1}M=this.type,y.needsUpdate=!1,i.setRenderTarget(U,q,j)};function b(L,O){const A=e.update(R);v.defines.VSM_SAMPLES!==L.blurSamples&&(v.defines.VSM_SAMPLES=L.blurSamples,S.defines.VSM_SAMPLES=L.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new ei(a.x,a.y,{format:Rs,type:ci})),v.uniforms.shadow_pass.value=L.map.depthTexture,v.uniforms.resolution.value=L.mapSize,v.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(O,null,A,v,R,null),S.uniforms.shadow_pass.value=L.mapPass.texture,S.uniforms.resolution.value=L.mapSize,S.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(O,null,A,S,R,null)}function E(L,O,A,U){let q=null;const j=A.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(j!==void 0)q=j;else if(q=A.isPointLight===!0?f:h,i.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const Z=q.uuid,H=O.uuid;let Q=p[Z];Q===void 0&&(Q={},p[Z]=Q);let V=Q[H];V===void 0&&(V=q.clone(),Q[H]=V,O.addEventListener("dispose",D)),q=V}if(q.visible=O.visible,q.wireframe=O.wireframe,U===Oo?q.side=O.shadowSide!==null?O.shadowSide:O.side:q.side=O.shadowSide!==null?O.shadowSide:x[O.side],q.alphaMap=O.alphaMap,q.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,q.map=O.map,q.clipShadows=O.clipShadows,q.clippingPlanes=O.clippingPlanes,q.clipIntersection=O.clipIntersection,q.displacementMap=O.displacementMap,q.displacementScale=O.displacementScale,q.displacementBias=O.displacementBias,q.wireframeLinewidth=O.wireframeLinewidth,q.linewidth=O.linewidth,A.isPointLight===!0&&q.isMeshDistanceMaterial===!0){const Z=i.properties.get(q);Z.light=A}return q}function w(L,O,A,U,q){if(L.visible===!1)return;if(L.layers.test(O.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&q===Oo)&&(!L.frustumCulled||s.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,L.matrixWorld);const H=e.update(L),Q=L.material;if(Array.isArray(Q)){const V=H.groups;for(let F=0,G=V.length;F<G;F++){const X=V[F],oe=Q[X.materialIndex];if(oe&&oe.visible){const re=E(L,oe,U,q);L.onBeforeShadow(i,L,O,A,H,re,X),i.renderBufferDirect(A,null,H,re,L,X),L.onAfterShadow(i,L,O,A,H,re,X)}}}else if(Q.visible){const V=E(L,Q,U,q);L.onBeforeShadow(i,L,O,A,H,V,null),i.renderBufferDirect(A,null,H,V,L,null),L.onAfterShadow(i,L,O,A,H,V,null)}}const Z=L.children;for(let H=0,Q=Z.length;H<Q;H++)w(Z[H],O,A,U,q)}function D(L){L.target.removeEventListener("dispose",D);for(const A in p){const U=p[A],q=L.target.uuid;q in U&&(U[q].dispose(),delete U[q])}}}function rA(i,e){function t(){let $=!1;const Ce=new an;let ge=null;const Be=new an(0,0,0,0);return{setMask:function(Le){ge!==Le&&!$&&(i.colorMask(Le,Le,Le,Le),ge=Le)},setLocked:function(Le){$=Le},setClear:function(Le,ye,$e,ht,Ht){Ht===!0&&(Le*=ht,ye*=ht,$e*=ht),Ce.set(Le,ye,$e,ht),Be.equals(Ce)===!1&&(i.clearColor(Le,ye,$e,ht),Be.copy(Ce))},reset:function(){$=!1,ge=null,Be.set(-1,0,0,0)}}}function s(){let $=!1,Ce=!1,ge=null,Be=null,Le=null;return{setReversed:function(ye){if(Ce!==ye){const $e=e.get("EXT_clip_control");ye?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),Ce=ye;const ht=Le;Le=null,this.setClear(ht)}},getReversed:function(){return Ce},setTest:function(ye){ye?fe(i.DEPTH_TEST):Ae(i.DEPTH_TEST)},setMask:function(ye){ge!==ye&&!$&&(i.depthMask(ye),ge=ye)},setFunc:function(ye){if(Ce&&(ye=NE[ye]),Be!==ye){switch(ye){case qh:i.depthFunc(i.NEVER);break;case Yh:i.depthFunc(i.ALWAYS);break;case Kh:i.depthFunc(i.LESS);break;case Aa:i.depthFunc(i.LEQUAL);break;case Zh:i.depthFunc(i.EQUAL);break;case Qh:i.depthFunc(i.GEQUAL);break;case Jh:i.depthFunc(i.GREATER);break;case ef:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Be=ye}},setLocked:function(ye){$=ye},setClear:function(ye){Le!==ye&&(Le=ye,Ce&&(ye=1-ye),i.clearDepth(ye))},reset:function(){$=!1,ge=null,Be=null,Le=null,Ce=!1}}}function a(){let $=!1,Ce=null,ge=null,Be=null,Le=null,ye=null,$e=null,ht=null,Ht=null;return{setTest:function(Dt){$||(Dt?fe(i.STENCIL_TEST):Ae(i.STENCIL_TEST))},setMask:function(Dt){Ce!==Dt&&!$&&(i.stencilMask(Dt),Ce=Dt)},setFunc:function(Dt,kn,di){(ge!==Dt||Be!==kn||Le!==di)&&(i.stencilFunc(Dt,kn,di),ge=Dt,Be=kn,Le=di)},setOp:function(Dt,kn,di){(ye!==Dt||$e!==kn||ht!==di)&&(i.stencilOp(Dt,kn,di),ye=Dt,$e=kn,ht=di)},setLocked:function(Dt){$=Dt},setClear:function(Dt){Ht!==Dt&&(i.clearStencil(Dt),Ht=Dt)},reset:function(){$=!1,Ce=null,ge=null,Be=null,Le=null,ye=null,$e=null,ht=null,Ht=null}}}const l=new t,u=new s,h=new a,f=new WeakMap,p=new WeakMap;let g={},x={},v={},S=new WeakMap,T=[],R=null,y=!1,M=null,b=null,E=null,w=null,D=null,L=null,O=null,A=new xt(0,0,0),U=0,q=!1,j=null,Z=null,H=null,Q=null,V=null;const F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,X=0;const oe=i.getParameter(i.VERSION);oe.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(oe)[1]),G=X>=1):oe.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),G=X>=2);let re=null,B={};const te=i.getParameter(i.SCISSOR_BOX),Pe=i.getParameter(i.VIEWPORT),Fe=new an().fromArray(te),he=new an().fromArray(Pe);function ne($,Ce,ge,Be){const Le=new Uint8Array(4),ye=i.createTexture();i.bindTexture($,ye),i.texParameteri($,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri($,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $e=0;$e<ge;$e++)$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?i.texImage3D(Ce,0,i.RGBA,1,1,Be,0,i.RGBA,i.UNSIGNED_BYTE,Le):i.texImage2D(Ce+$e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Le);return ye}const me={};me[i.TEXTURE_2D]=ne(i.TEXTURE_2D,i.TEXTURE_2D,1),me[i.TEXTURE_CUBE_MAP]=ne(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[i.TEXTURE_2D_ARRAY]=ne(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),me[i.TEXTURE_3D]=ne(i.TEXTURE_3D,i.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),h.setClear(0),fe(i.DEPTH_TEST),u.setFunc(Aa),Lt(!1),Ct(mv),fe(i.CULL_FACE),wt(Zi);function fe($){g[$]!==!0&&(i.enable($),g[$]=!0)}function Ae($){g[$]!==!1&&(i.disable($),g[$]=!1)}function Xe($,Ce){return v[$]!==Ce?(i.bindFramebuffer($,Ce),v[$]=Ce,$===i.DRAW_FRAMEBUFFER&&(v[i.FRAMEBUFFER]=Ce),$===i.FRAMEBUFFER&&(v[i.DRAW_FRAMEBUFFER]=Ce),!0):!1}function nt($,Ce){let ge=T,Be=!1;if($){ge=S.get(Ce),ge===void 0&&(ge=[],S.set(Ce,ge));const Le=$.textures;if(ge.length!==Le.length||ge[0]!==i.COLOR_ATTACHMENT0){for(let ye=0,$e=Le.length;ye<$e;ye++)ge[ye]=i.COLOR_ATTACHMENT0+ye;ge.length=Le.length,Be=!0}}else ge[0]!==i.BACK&&(ge[0]=i.BACK,Be=!0);Be&&i.drawBuffers(ge)}function et($){return R!==$?(i.useProgram($),R=$,!0):!1}const Ke={[Ts]:i.FUNC_ADD,[JM]:i.FUNC_SUBTRACT,[eE]:i.FUNC_REVERSE_SUBTRACT};Ke[tE]=i.MIN,Ke[nE]=i.MAX;const ft={[iE]:i.ZERO,[rE]:i.ONE,[sE]:i.SRC_COLOR,[Xh]:i.SRC_ALPHA,[dE]:i.SRC_ALPHA_SATURATE,[cE]:i.DST_COLOR,[oE]:i.DST_ALPHA,[aE]:i.ONE_MINUS_SRC_COLOR,[$h]:i.ONE_MINUS_SRC_ALPHA,[uE]:i.ONE_MINUS_DST_COLOR,[lE]:i.ONE_MINUS_DST_ALPHA,[hE]:i.CONSTANT_COLOR,[fE]:i.ONE_MINUS_CONSTANT_COLOR,[pE]:i.CONSTANT_ALPHA,[mE]:i.ONE_MINUS_CONSTANT_ALPHA};function wt($,Ce,ge,Be,Le,ye,$e,ht,Ht,Dt){if($===Zi){y===!0&&(Ae(i.BLEND),y=!1);return}if(y===!1&&(fe(i.BLEND),y=!0),$!==QM){if($!==M||Dt!==q){if((b!==Ts||D!==Ts)&&(i.blendEquation(i.FUNC_ADD),b=Ts,D=Ts),Dt)switch($){case ba:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wh:i.blendFunc(i.ONE,i.ONE);break;case gv:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vv:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Nt("WebGLState: Invalid blending: ",$);break}else switch($){case ba:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case gv:Nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vv:Nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Nt("WebGLState: Invalid blending: ",$);break}E=null,w=null,L=null,O=null,A.set(0,0,0),U=0,M=$,q=Dt}return}Le=Le||Ce,ye=ye||ge,$e=$e||Be,(Ce!==b||Le!==D)&&(i.blendEquationSeparate(Ke[Ce],Ke[Le]),b=Ce,D=Le),(ge!==E||Be!==w||ye!==L||$e!==O)&&(i.blendFuncSeparate(ft[ge],ft[Be],ft[ye],ft[$e]),E=ge,w=Be,L=ye,O=$e),(ht.equals(A)===!1||Ht!==U)&&(i.blendColor(ht.r,ht.g,ht.b,Ht),A.copy(ht),U=Ht),M=$,q=!1}function rt($,Ce){$.side===xr?Ae(i.CULL_FACE):fe(i.CULL_FACE);let ge=$.side===Jn;Ce&&(ge=!ge),Lt(ge),$.blending===ba&&$.transparent===!1?wt(Zi):wt($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),u.setFunc($.depthFunc),u.setTest($.depthTest),u.setMask($.depthWrite),l.setMask($.colorWrite);const Be=$.stencilWrite;h.setTest(Be),Be&&(h.setMask($.stencilWriteMask),h.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),h.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),Y($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?fe(i.SAMPLE_ALPHA_TO_COVERAGE):Ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function Lt($){j!==$&&($?i.frontFace(i.CW):i.frontFace(i.CCW),j=$)}function Ct($){$!==KM?(fe(i.CULL_FACE),$!==Z&&($===mv?i.cullFace(i.BACK):$===ZM?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ae(i.CULL_FACE),Z=$}function rn($){$!==H&&(G&&i.lineWidth($),H=$)}function Y($,Ce,ge){$?(fe(i.POLYGON_OFFSET_FILL),(Q!==Ce||V!==ge)&&(Q=Ce,V=ge,u.getReversed()&&(Ce=-Ce),i.polygonOffset(Ce,ge))):Ae(i.POLYGON_OFFSET_FILL)}function Gt($){$?fe(i.SCISSOR_TEST):Ae(i.SCISSOR_TEST)}function _t($){$===void 0&&($=i.TEXTURE0+F-1),re!==$&&(i.activeTexture($),re=$)}function Ot($,Ce,ge){ge===void 0&&(re===null?ge=i.TEXTURE0+F-1:ge=re);let Be=B[ge];Be===void 0&&(Be={type:void 0,texture:void 0},B[ge]=Be),(Be.type!==$||Be.texture!==Ce)&&(re!==ge&&(i.activeTexture(ge),re=ge),i.bindTexture($,Ce||me[$]),Be.type=$,Be.texture=Ce)}function Ue(){const $=B[re];$!==void 0&&$.type!==void 0&&(i.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function Xt(){try{i.compressedTexImage2D(...arguments)}catch($){Nt("WebGLState:",$)}}function I(){try{i.compressedTexImage3D(...arguments)}catch($){Nt("WebGLState:",$)}}function C(){try{i.texSubImage2D(...arguments)}catch($){Nt("WebGLState:",$)}}function ie(){try{i.texSubImage3D(...arguments)}catch($){Nt("WebGLState:",$)}}function ve(){try{i.compressedTexSubImage2D(...arguments)}catch($){Nt("WebGLState:",$)}}function _e(){try{i.compressedTexSubImage3D(...arguments)}catch($){Nt("WebGLState:",$)}}function Te(){try{i.texStorage2D(...arguments)}catch($){Nt("WebGLState:",$)}}function Ie(){try{i.texStorage3D(...arguments)}catch($){Nt("WebGLState:",$)}}function pe(){try{i.texImage2D(...arguments)}catch($){Nt("WebGLState:",$)}}function xe(){try{i.texImage3D(...arguments)}catch($){Nt("WebGLState:",$)}}function ke($){return x[$]!==void 0?x[$]:i.getParameter($)}function ze($,Ce){x[$]!==Ce&&(i.pixelStorei($,Ce),x[$]=Ce)}function Re($){Fe.equals($)===!1&&(i.scissor($.x,$.y,$.z,$.w),Fe.copy($))}function we($){he.equals($)===!1&&(i.viewport($.x,$.y,$.z,$.w),he.copy($))}function ct($,Ce){let ge=p.get(Ce);ge===void 0&&(ge=new WeakMap,p.set(Ce,ge));let Be=ge.get($);Be===void 0&&(Be=i.getUniformBlockIndex(Ce,$.name),ge.set($,Be))}function dt($,Ce){const Be=p.get(Ce).get($);f.get(Ce)!==Be&&(i.uniformBlockBinding(Ce,Be,$.__bindingPointIndex),f.set(Ce,Be))}function St(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),u.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),g={},x={},re=null,B={},v={},S=new WeakMap,T=[],R=null,y=!1,M=null,b=null,E=null,w=null,D=null,L=null,O=null,A=new xt(0,0,0),U=0,q=!1,j=null,Z=null,H=null,Q=null,V=null,Fe.set(0,0,i.canvas.width,i.canvas.height),he.set(0,0,i.canvas.width,i.canvas.height),l.reset(),u.reset(),h.reset()}return{buffers:{color:l,depth:u,stencil:h},enable:fe,disable:Ae,bindFramebuffer:Xe,drawBuffers:nt,useProgram:et,setBlending:wt,setMaterial:rt,setFlipSided:Lt,setCullFace:Ct,setLineWidth:rn,setPolygonOffset:Y,setScissorTest:Gt,activeTexture:_t,bindTexture:Ot,unbindTexture:Ue,compressedTexImage2D:Xt,compressedTexImage3D:I,texImage2D:pe,texImage3D:xe,pixelStorei:ze,getParameter:ke,updateUBOMapping:ct,uniformBlockBinding:dt,texStorage2D:Te,texStorage3D:Ie,texSubImage2D:C,texSubImage3D:ie,compressedTexSubImage2D:ve,compressedTexSubImage3D:_e,scissor:Re,viewport:we,reset:St}}function sA(i,e,t,s,a,l,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Qe,g=new WeakMap,x=new Set;let v;const S=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(I,C){return T?new OffscreenCanvas(I,C):qc("canvas")}function y(I,C,ie){let ve=1;const _e=Xt(I);if((_e.width>ie||_e.height>ie)&&(ve=ie/Math.max(_e.width,_e.height)),ve<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const Te=Math.floor(ve*_e.width),Ie=Math.floor(ve*_e.height);v===void 0&&(v=R(Te,Ie));const pe=C?R(Te,Ie):v;return pe.width=Te,pe.height=Ie,pe.getContext("2d").drawImage(I,0,0,Te,Ie),lt("WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+Te+"x"+Ie+")."),pe}else return"data"in I&&lt("WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),I;return I}function M(I){return I.generateMipmaps}function b(I){i.generateMipmap(I)}function E(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(I,C,ie,ve,_e,Te=!1){if(I!==null){if(i[I]!==void 0)return i[I];lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Ie;ve&&(Ie=e.get("EXT_texture_norm16"),Ie||lt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=C;if(C===i.RED&&(ie===i.FLOAT&&(pe=i.R32F),ie===i.HALF_FLOAT&&(pe=i.R16F),ie===i.UNSIGNED_BYTE&&(pe=i.R8),ie===i.UNSIGNED_SHORT&&Ie&&(pe=Ie.R16_EXT),ie===i.SHORT&&Ie&&(pe=Ie.R16_SNORM_EXT)),C===i.RED_INTEGER&&(ie===i.UNSIGNED_BYTE&&(pe=i.R8UI),ie===i.UNSIGNED_SHORT&&(pe=i.R16UI),ie===i.UNSIGNED_INT&&(pe=i.R32UI),ie===i.BYTE&&(pe=i.R8I),ie===i.SHORT&&(pe=i.R16I),ie===i.INT&&(pe=i.R32I)),C===i.RG&&(ie===i.FLOAT&&(pe=i.RG32F),ie===i.HALF_FLOAT&&(pe=i.RG16F),ie===i.UNSIGNED_BYTE&&(pe=i.RG8),ie===i.UNSIGNED_SHORT&&Ie&&(pe=Ie.RG16_EXT),ie===i.SHORT&&Ie&&(pe=Ie.RG16_SNORM_EXT)),C===i.RG_INTEGER&&(ie===i.UNSIGNED_BYTE&&(pe=i.RG8UI),ie===i.UNSIGNED_SHORT&&(pe=i.RG16UI),ie===i.UNSIGNED_INT&&(pe=i.RG32UI),ie===i.BYTE&&(pe=i.RG8I),ie===i.SHORT&&(pe=i.RG16I),ie===i.INT&&(pe=i.RG32I)),C===i.RGB_INTEGER&&(ie===i.UNSIGNED_BYTE&&(pe=i.RGB8UI),ie===i.UNSIGNED_SHORT&&(pe=i.RGB16UI),ie===i.UNSIGNED_INT&&(pe=i.RGB32UI),ie===i.BYTE&&(pe=i.RGB8I),ie===i.SHORT&&(pe=i.RGB16I),ie===i.INT&&(pe=i.RGB32I)),C===i.RGBA_INTEGER&&(ie===i.UNSIGNED_BYTE&&(pe=i.RGBA8UI),ie===i.UNSIGNED_SHORT&&(pe=i.RGBA16UI),ie===i.UNSIGNED_INT&&(pe=i.RGBA32UI),ie===i.BYTE&&(pe=i.RGBA8I),ie===i.SHORT&&(pe=i.RGBA16I),ie===i.INT&&(pe=i.RGBA32I)),C===i.RGB&&(ie===i.UNSIGNED_SHORT&&Ie&&(pe=Ie.RGB16_EXT),ie===i.SHORT&&Ie&&(pe=Ie.RGB16_SNORM_EXT),ie===i.UNSIGNED_INT_5_9_9_9_REV&&(pe=i.RGB9_E5),ie===i.UNSIGNED_INT_10F_11F_11F_REV&&(pe=i.R11F_G11F_B10F)),C===i.RGBA){const xe=Te?$c:At.getTransfer(_e);ie===i.FLOAT&&(pe=i.RGBA32F),ie===i.HALF_FLOAT&&(pe=i.RGBA16F),ie===i.UNSIGNED_BYTE&&(pe=xe===Ft?i.SRGB8_ALPHA8:i.RGBA8),ie===i.UNSIGNED_SHORT&&Ie&&(pe=Ie.RGBA16_EXT),ie===i.SHORT&&Ie&&(pe=Ie.RGBA16_SNORM_EXT),ie===i.UNSIGNED_SHORT_4_4_4_4&&(pe=i.RGBA4),ie===i.UNSIGNED_SHORT_5_5_5_1&&(pe=i.RGB5_A1)}return(pe===i.R16F||pe===i.R32F||pe===i.RG16F||pe===i.RG32F||pe===i.RGBA16F||pe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function D(I,C){let ie;return I?C===null||C===Ji||C===Ho?ie=i.DEPTH24_STENCIL8:C===Yi?ie=i.DEPTH32F_STENCIL8:C===jo&&(ie=i.DEPTH24_STENCIL8,lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Ji||C===Ho?ie=i.DEPTH_COMPONENT24:C===Yi?ie=i.DEPTH_COMPONENT32F:C===jo&&(ie=i.DEPTH_COMPONENT16),ie}function L(I,C){return M(I)===!0||I.isFramebufferTexture&&I.minFilter!==bn&&I.minFilter!==In?Math.log2(Math.max(C.width,C.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?C.mipmaps.length:1}function O(I){const C=I.target;C.removeEventListener("dispose",O),U(C),C.isVideoTexture&&g.delete(C),C.isHTMLTexture&&x.delete(C)}function A(I){const C=I.target;C.removeEventListener("dispose",A),j(C)}function U(I){const C=s.get(I);if(C.__webglInit===void 0)return;const ie=I.source,ve=S.get(ie);if(ve){const _e=ve[C.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&q(I),Object.keys(ve).length===0&&S.delete(ie)}s.remove(I)}function q(I){const C=s.get(I);i.deleteTexture(C.__webglTexture);const ie=I.source,ve=S.get(ie);delete ve[C.__cacheKey],u.memory.textures--}function j(I){const C=s.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),s.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(C.__webglFramebuffer[ve]))for(let _e=0;_e<C.__webglFramebuffer[ve].length;_e++)i.deleteFramebuffer(C.__webglFramebuffer[ve][_e]);else i.deleteFramebuffer(C.__webglFramebuffer[ve]);C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer[ve])}else{if(Array.isArray(C.__webglFramebuffer))for(let ve=0;ve<C.__webglFramebuffer.length;ve++)i.deleteFramebuffer(C.__webglFramebuffer[ve]);else i.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&i.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let ve=0;ve<C.__webglColorRenderbuffer.length;ve++)C.__webglColorRenderbuffer[ve]&&i.deleteRenderbuffer(C.__webglColorRenderbuffer[ve]);C.__webglDepthRenderbuffer&&i.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const ie=I.textures;for(let ve=0,_e=ie.length;ve<_e;ve++){const Te=s.get(ie[ve]);Te.__webglTexture&&(i.deleteTexture(Te.__webglTexture),u.memory.textures--),s.remove(ie[ve])}s.remove(I)}let Z=0;function H(){Z=0}function Q(){return Z}function V(I){Z=I}function F(){const I=Z;return I>=a.maxTextures&&lt("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+a.maxTextures),Z+=1,I}function G(I){const C=[];return C.push(I.wrapS),C.push(I.wrapT),C.push(I.wrapR||0),C.push(I.magFilter),C.push(I.minFilter),C.push(I.anisotropy),C.push(I.internalFormat),C.push(I.format),C.push(I.type),C.push(I.generateMipmaps),C.push(I.premultiplyAlpha),C.push(I.flipY),C.push(I.unpackAlignment),C.push(I.colorSpace),C.join()}function X(I,C){const ie=s.get(I);if(I.isVideoTexture&&Ot(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&ie.__version!==I.version){const ve=I.image;if(ve===null)lt("WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)lt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(ie,I,C);return}}else I.isExternalTexture&&(ie.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,ie.__webglTexture,i.TEXTURE0+C)}function oe(I,C){const ie=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&ie.__version!==I.version){Ae(ie,I,C);return}else I.isExternalTexture&&(ie.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,ie.__webglTexture,i.TEXTURE0+C)}function re(I,C){const ie=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&ie.__version!==I.version){Ae(ie,I,C);return}t.bindTexture(i.TEXTURE_3D,ie.__webglTexture,i.TEXTURE0+C)}function B(I,C){const ie=s.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&ie.__version!==I.version){Xe(ie,I,C);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture,i.TEXTURE0+C)}const te={[tf]:i.REPEAT,[_r]:i.CLAMP_TO_EDGE,[nf]:i.MIRRORED_REPEAT},Pe={[bn]:i.NEAREST,[xE]:i.NEAREST_MIPMAP_NEAREST,[ec]:i.NEAREST_MIPMAP_LINEAR,[In]:i.LINEAR,[ih]:i.LINEAR_MIPMAP_NEAREST,[bs]:i.LINEAR_MIPMAP_LINEAR},Fe={[SE]:i.NEVER,[bE]:i.ALWAYS,[ME]:i.LESS,[dp]:i.LEQUAL,[EE]:i.EQUAL,[hp]:i.GEQUAL,[TE]:i.GREATER,[wE]:i.NOTEQUAL};function he(I,C){if(C.type===Yi&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===In||C.magFilter===ih||C.magFilter===ec||C.magFilter===bs||C.minFilter===In||C.minFilter===ih||C.minFilter===ec||C.minFilter===bs)&&lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,te[C.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,te[C.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,te[C.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,Pe[C.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,Pe[C.minFilter]),C.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,Fe[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===bn||C.minFilter!==ec&&C.minFilter!==bs||C.type===Yi&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||s.get(C).__currentAnisotropy){const ie=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,a.getMaxAnisotropy())),s.get(C).__currentAnisotropy=C.anisotropy}}}function ne(I,C){let ie=!1;I.__webglInit===void 0&&(I.__webglInit=!0,C.addEventListener("dispose",O));const ve=C.source;let _e=S.get(ve);_e===void 0&&(_e={},S.set(ve,_e));const Te=G(C);if(Te!==I.__cacheKey){_e[Te]===void 0&&(_e[Te]={texture:i.createTexture(),usedTimes:0},u.memory.textures++,ie=!0),_e[Te].usedTimes++;const Ie=_e[I.__cacheKey];Ie!==void 0&&(_e[I.__cacheKey].usedTimes--,Ie.usedTimes===0&&q(C)),I.__cacheKey=Te,I.__webglTexture=_e[Te].texture}return ie}function me(I,C,ie){return Math.floor(Math.floor(I/ie)/C)}function fe(I,C,ie,ve){const Te=I.updateRanges;if(Te.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,C.width,C.height,ie,ve,C.data);else{Te.sort((ze,Re)=>ze.start-Re.start);let Ie=0;for(let ze=1;ze<Te.length;ze++){const Re=Te[Ie],we=Te[ze],ct=Re.start+Re.count,dt=me(we.start,C.width,4),St=me(Re.start,C.width,4);we.start<=ct+1&&dt===St&&me(we.start+we.count-1,C.width,4)===dt?Re.count=Math.max(Re.count,we.start+we.count-Re.start):(++Ie,Te[Ie]=we)}Te.length=Ie+1;const pe=t.getParameter(i.UNPACK_ROW_LENGTH),xe=t.getParameter(i.UNPACK_SKIP_PIXELS),ke=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,C.width);for(let ze=0,Re=Te.length;ze<Re;ze++){const we=Te[ze],ct=Math.floor(we.start/4),dt=Math.ceil(we.count/4),St=ct%C.width,$=Math.floor(ct/C.width),Ce=dt,ge=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,St),t.pixelStorei(i.UNPACK_SKIP_ROWS,$),t.texSubImage2D(i.TEXTURE_2D,0,St,$,Ce,ge,ie,ve,C.data)}I.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,pe),t.pixelStorei(i.UNPACK_SKIP_PIXELS,xe),t.pixelStorei(i.UNPACK_SKIP_ROWS,ke)}}function Ae(I,C,ie){let ve=i.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(ve=i.TEXTURE_2D_ARRAY),C.isData3DTexture&&(ve=i.TEXTURE_3D);const _e=ne(I,C),Te=C.source;t.bindTexture(ve,I.__webglTexture,i.TEXTURE0+ie);const Ie=s.get(Te);if(Te.version!==Ie.__version||_e===!0){if(t.activeTexture(i.TEXTURE0+ie),(typeof ImageBitmap<"u"&&C.image instanceof ImageBitmap)===!1){const ge=At.getPrimaries(At.workingColorSpace),Be=C.colorSpace===Kr?null:At.getPrimaries(C.colorSpace),Le=C.colorSpace===Kr||ge===Be?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le)}t.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment);let xe=y(C.image,!1,a.maxTextureSize);xe=Ue(C,xe);const ke=l.convert(C.format,C.colorSpace),ze=l.convert(C.type);let Re=w(C.internalFormat,ke,ze,C.normalized,C.colorSpace,C.isVideoTexture);he(ve,C);let we;const ct=C.mipmaps,dt=C.isVideoTexture!==!0,St=Ie.__version===void 0||_e===!0,$=Te.dataReady,Ce=L(C,xe);if(C.isDepthTexture)Re=D(C.format===Cs,C.type),St&&(dt?t.texStorage2D(i.TEXTURE_2D,1,Re,xe.width,xe.height):t.texImage2D(i.TEXTURE_2D,0,Re,xe.width,xe.height,0,ke,ze,null));else if(C.isDataTexture)if(ct.length>0){dt&&St&&t.texStorage2D(i.TEXTURE_2D,Ce,Re,ct[0].width,ct[0].height);for(let ge=0,Be=ct.length;ge<Be;ge++)we=ct[ge],dt?$&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,we.width,we.height,ke,ze,we.data):t.texImage2D(i.TEXTURE_2D,ge,Re,we.width,we.height,0,ke,ze,we.data);C.generateMipmaps=!1}else dt?(St&&t.texStorage2D(i.TEXTURE_2D,Ce,Re,xe.width,xe.height),$&&fe(C,xe,ke,ze)):t.texImage2D(i.TEXTURE_2D,0,Re,xe.width,xe.height,0,ke,ze,xe.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){dt&&St&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ce,Re,ct[0].width,ct[0].height,xe.depth);for(let ge=0,Be=ct.length;ge<Be;ge++)if(we=ct[ge],C.format!==Ui)if(ke!==null)if(dt){if($)if(C.layerUpdates.size>0){const Le=Yv(we.width,we.height,C.format,C.type);for(const ye of C.layerUpdates){const $e=we.data.subarray(ye*Le/we.data.BYTES_PER_ELEMENT,(ye+1)*Le/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,ye,we.width,we.height,1,ke,$e)}C.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,0,we.width,we.height,xe.depth,ke,we.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ge,Re,we.width,we.height,xe.depth,0,we.data,0,0);else lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else dt?$&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,0,we.width,we.height,xe.depth,ke,ze,we.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ge,Re,we.width,we.height,xe.depth,0,ke,ze,we.data)}else{dt&&St&&t.texStorage2D(i.TEXTURE_2D,Ce,Re,ct[0].width,ct[0].height);for(let ge=0,Be=ct.length;ge<Be;ge++)we=ct[ge],C.format!==Ui?ke!==null?dt?$&&t.compressedTexSubImage2D(i.TEXTURE_2D,ge,0,0,we.width,we.height,ke,we.data):t.compressedTexImage2D(i.TEXTURE_2D,ge,Re,we.width,we.height,0,we.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?$&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,we.width,we.height,ke,ze,we.data):t.texImage2D(i.TEXTURE_2D,ge,Re,we.width,we.height,0,ke,ze,we.data)}else if(C.isDataArrayTexture)if(dt){if(St&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ce,Re,xe.width,xe.height,xe.depth),$)if(C.layerUpdates.size>0){const ge=Yv(xe.width,xe.height,C.format,C.type);for(const Be of C.layerUpdates){const Le=xe.data.subarray(Be*ge/xe.data.BYTES_PER_ELEMENT,(Be+1)*ge/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Be,xe.width,xe.height,1,ke,ze,Le)}C.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,ke,ze,xe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Re,xe.width,xe.height,xe.depth,0,ke,ze,xe.data);else if(C.isData3DTexture)dt?(St&&t.texStorage3D(i.TEXTURE_3D,Ce,Re,xe.width,xe.height,xe.depth),$&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,ke,ze,xe.data)):t.texImage3D(i.TEXTURE_3D,0,Re,xe.width,xe.height,xe.depth,0,ke,ze,xe.data);else if(C.isFramebufferTexture){if(St)if(dt)t.texStorage2D(i.TEXTURE_2D,Ce,Re,xe.width,xe.height);else{let ge=xe.width,Be=xe.height;for(let Le=0;Le<Ce;Le++)t.texImage2D(i.TEXTURE_2D,Le,Re,ge,Be,0,ke,ze,null),ge>>=1,Be>>=1}}else if(C.isHTMLTexture){if("texElementImage2D"in i){const ge=i.canvas;if(ge.hasAttribute("layoutsubtree")||ge.setAttribute("layoutsubtree","true"),xe.parentNode!==ge){ge.appendChild(xe),x.add(C),ge.onpaint=ht=>{const Ht=ht.changedElements;for(const Dt of x)Ht.includes(Dt.image)&&(Dt.needsUpdate=!0)},ge.requestPaint();return}const Be=0,Le=i.RGBA,ye=i.RGBA,$e=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,Be,Le,ye,$e,xe),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ct.length>0){if(dt&&St){const ge=Xt(ct[0]);t.texStorage2D(i.TEXTURE_2D,Ce,Re,ge.width,ge.height)}for(let ge=0,Be=ct.length;ge<Be;ge++)we=ct[ge],dt?$&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,ke,ze,we):t.texImage2D(i.TEXTURE_2D,ge,Re,ke,ze,we);C.generateMipmaps=!1}else if(dt){if(St){const ge=Xt(xe);t.texStorage2D(i.TEXTURE_2D,Ce,Re,ge.width,ge.height)}$&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ke,ze,xe)}else t.texImage2D(i.TEXTURE_2D,0,Re,ke,ze,xe);M(C)&&b(ve),Ie.__version=Te.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function Xe(I,C,ie){if(C.image.length!==6)return;const ve=ne(I,C),_e=C.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+ie);const Te=s.get(_e);if(_e.version!==Te.__version||ve===!0){t.activeTexture(i.TEXTURE0+ie);const Ie=At.getPrimaries(At.workingColorSpace),pe=C.colorSpace===Kr?null:At.getPrimaries(C.colorSpace),xe=C.colorSpace===Kr||Ie===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const ke=C.isCompressedTexture||C.image[0].isCompressedTexture,ze=C.image[0]&&C.image[0].isDataTexture,Re=[];for(let ye=0;ye<6;ye++)!ke&&!ze?Re[ye]=y(C.image[ye],!0,a.maxCubemapSize):Re[ye]=ze?C.image[ye].image:C.image[ye],Re[ye]=Ue(C,Re[ye]);const we=Re[0],ct=l.convert(C.format,C.colorSpace),dt=l.convert(C.type),St=w(C.internalFormat,ct,dt,C.normalized,C.colorSpace),$=C.isVideoTexture!==!0,Ce=Te.__version===void 0||ve===!0,ge=_e.dataReady;let Be=L(C,we);he(i.TEXTURE_CUBE_MAP,C);let Le;if(ke){$&&Ce&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Be,St,we.width,we.height);for(let ye=0;ye<6;ye++){Le=Re[ye].mipmaps;for(let $e=0;$e<Le.length;$e++){const ht=Le[$e];C.format!==Ui?ct!==null?$?ge&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,$e,0,0,ht.width,ht.height,ct,ht.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,$e,St,ht.width,ht.height,0,ht.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,$e,0,0,ht.width,ht.height,ct,dt,ht.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,$e,St,ht.width,ht.height,0,ct,dt,ht.data)}}}else{if(Le=C.mipmaps,$&&Ce){Le.length>0&&Be++;const ye=Xt(Re[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Be,St,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(ze){$?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Re[ye].width,Re[ye].height,ct,dt,Re[ye].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,St,Re[ye].width,Re[ye].height,0,ct,dt,Re[ye].data);for(let $e=0;$e<Le.length;$e++){const Ht=Le[$e].image[ye].image;$?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,$e+1,0,0,Ht.width,Ht.height,ct,dt,Ht.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,$e+1,St,Ht.width,Ht.height,0,ct,dt,Ht.data)}}else{$?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,ct,dt,Re[ye]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,St,ct,dt,Re[ye]);for(let $e=0;$e<Le.length;$e++){const ht=Le[$e];$?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,$e+1,0,0,ct,dt,ht.image[ye]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,$e+1,St,ct,dt,ht.image[ye])}}}M(C)&&b(i.TEXTURE_CUBE_MAP),Te.__version=_e.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function nt(I,C,ie,ve,_e,Te){const Ie=l.convert(ie.format,ie.colorSpace),pe=l.convert(ie.type),xe=w(ie.internalFormat,Ie,pe,ie.normalized,ie.colorSpace),ke=s.get(C),ze=s.get(ie);if(ze.__renderTarget=C,!ke.__hasExternalTextures){const Re=Math.max(1,C.width>>Te),we=Math.max(1,C.height>>Te);_e===i.TEXTURE_3D||_e===i.TEXTURE_2D_ARRAY?t.texImage3D(_e,Te,xe,Re,we,C.depth,0,Ie,pe,null):t.texImage2D(_e,Te,xe,Re,we,0,Ie,pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),_t(C)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ve,_e,ze.__webglTexture,0,Gt(C)):(_e===i.TEXTURE_2D||_e>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ve,_e,ze.__webglTexture,Te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function et(I,C,ie){if(i.bindRenderbuffer(i.RENDERBUFFER,I),C.depthBuffer){const ve=C.depthTexture,_e=ve&&ve.isDepthTexture?ve.type:null,Te=D(C.stencilBuffer,_e),Ie=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;_t(C)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt(C),Te,C.width,C.height):ie?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt(C),Te,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,Te,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ie,i.RENDERBUFFER,I)}else{const ve=C.textures;for(let _e=0;_e<ve.length;_e++){const Te=ve[_e],Ie=l.convert(Te.format,Te.colorSpace),pe=l.convert(Te.type),xe=w(Te.internalFormat,Ie,pe,Te.normalized,Te.colorSpace);_t(C)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt(C),xe,C.width,C.height):ie?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt(C),xe,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,xe,C.width,C.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ke(I,C,ie){const ve=C.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _e=s.get(C.depthTexture);if(_e.__renderTarget=C,(!_e.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),ve){if(_e.__webglInit===void 0&&(_e.__webglInit=!0,C.depthTexture.addEventListener("dispose",O)),_e.__webglTexture===void 0){_e.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,_e.__webglTexture),he(i.TEXTURE_CUBE_MAP,C.depthTexture);const ke=l.convert(C.depthTexture.format),ze=l.convert(C.depthTexture.type);let Re;C.depthTexture.format===Er?Re=i.DEPTH_COMPONENT24:C.depthTexture.format===Cs&&(Re=i.DEPTH24_STENCIL8);for(let we=0;we<6;we++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,Re,C.width,C.height,0,ke,ze,null)}}else X(C.depthTexture,0);const Te=_e.__webglTexture,Ie=Gt(C),pe=ve?i.TEXTURE_CUBE_MAP_POSITIVE_X+ie:i.TEXTURE_2D,xe=C.depthTexture.format===Cs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(C.depthTexture.format===Er)_t(C)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xe,pe,Te,0,Ie):i.framebufferTexture2D(i.FRAMEBUFFER,xe,pe,Te,0);else if(C.depthTexture.format===Cs)_t(C)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xe,pe,Te,0,Ie):i.framebufferTexture2D(i.FRAMEBUFFER,xe,pe,Te,0);else throw new Error("Unknown depthTexture format")}function ft(I){const C=s.get(I),ie=I.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==I.depthTexture){const ve=I.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),ve){const _e=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,ve.removeEventListener("dispose",_e)};ve.addEventListener("dispose",_e),C.__depthDisposeCallback=_e}C.__boundDepthTexture=ve}if(I.depthTexture&&!C.__autoAllocateDepthBuffer)if(ie)for(let ve=0;ve<6;ve++)Ke(C.__webglFramebuffer[ve],I,ve);else{const ve=I.texture.mipmaps;ve&&ve.length>0?Ke(C.__webglFramebuffer[0],I,0):Ke(C.__webglFramebuffer,I,0)}else if(ie){C.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)if(t.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer[ve]),C.__webglDepthbuffer[ve]===void 0)C.__webglDepthbuffer[ve]=i.createRenderbuffer(),et(C.__webglDepthbuffer[ve],I,!1);else{const _e=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=C.__webglDepthbuffer[ve];i.bindRenderbuffer(i.RENDERBUFFER,Te),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,Te)}}else{const ve=I.texture.mipmaps;if(ve&&ve.length>0?t.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=i.createRenderbuffer(),et(C.__webglDepthbuffer,I,!1);else{const _e=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=C.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Te),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,Te)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function wt(I,C,ie){const ve=s.get(I);C!==void 0&&nt(ve.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ie!==void 0&&ft(I)}function rt(I){const C=I.texture,ie=s.get(I),ve=s.get(C);I.addEventListener("dispose",A);const _e=I.textures,Te=I.isWebGLCubeRenderTarget===!0,Ie=_e.length>1;if(Ie||(ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture()),ve.__version=C.version,u.memory.textures++),Te){ie.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(C.mipmaps&&C.mipmaps.length>0){ie.__webglFramebuffer[pe]=[];for(let xe=0;xe<C.mipmaps.length;xe++)ie.__webglFramebuffer[pe][xe]=i.createFramebuffer()}else ie.__webglFramebuffer[pe]=i.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){ie.__webglFramebuffer=[];for(let pe=0;pe<C.mipmaps.length;pe++)ie.__webglFramebuffer[pe]=i.createFramebuffer()}else ie.__webglFramebuffer=i.createFramebuffer();if(Ie)for(let pe=0,xe=_e.length;pe<xe;pe++){const ke=s.get(_e[pe]);ke.__webglTexture===void 0&&(ke.__webglTexture=i.createTexture(),u.memory.textures++)}if(I.samples>0&&_t(I)===!1){ie.__webglMultisampledFramebuffer=i.createFramebuffer(),ie.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let pe=0;pe<_e.length;pe++){const xe=_e[pe];ie.__webglColorRenderbuffer[pe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ie.__webglColorRenderbuffer[pe]);const ke=l.convert(xe.format,xe.colorSpace),ze=l.convert(xe.type),Re=w(xe.internalFormat,ke,ze,xe.normalized,xe.colorSpace,I.isXRRenderTarget===!0),we=Gt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,we,Re,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,ie.__webglColorRenderbuffer[pe])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(ie.__webglDepthRenderbuffer=i.createRenderbuffer(),et(ie.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Te){t.bindTexture(i.TEXTURE_CUBE_MAP,ve.__webglTexture),he(i.TEXTURE_CUBE_MAP,C);for(let pe=0;pe<6;pe++)if(C.mipmaps&&C.mipmaps.length>0)for(let xe=0;xe<C.mipmaps.length;xe++)nt(ie.__webglFramebuffer[pe][xe],I,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,xe);else nt(ie.__webglFramebuffer[pe],I,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);M(C)&&b(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let pe=0,xe=_e.length;pe<xe;pe++){const ke=_e[pe],ze=s.get(ke);let Re=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Re=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Re,ze.__webglTexture),he(Re,ke),nt(ie.__webglFramebuffer,I,ke,i.COLOR_ATTACHMENT0+pe,Re,0),M(ke)&&b(Re)}t.unbindTexture()}else{let pe=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(pe=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,ve.__webglTexture),he(pe,C),C.mipmaps&&C.mipmaps.length>0)for(let xe=0;xe<C.mipmaps.length;xe++)nt(ie.__webglFramebuffer[xe],I,C,i.COLOR_ATTACHMENT0,pe,xe);else nt(ie.__webglFramebuffer,I,C,i.COLOR_ATTACHMENT0,pe,0);M(C)&&b(pe),t.unbindTexture()}I.depthBuffer&&ft(I)}function Lt(I){const C=I.textures;for(let ie=0,ve=C.length;ie<ve;ie++){const _e=C[ie];if(M(_e)){const Te=E(I),Ie=s.get(_e).__webglTexture;t.bindTexture(Te,Ie),b(Te),t.unbindTexture()}}}const Ct=[],rn=[];function Y(I){if(I.samples>0){if(_t(I)===!1){const C=I.textures,ie=I.width,ve=I.height;let _e=i.COLOR_BUFFER_BIT;const Te=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ie=s.get(I),pe=C.length>1;if(pe)for(let ke=0;ke<C.length;ke++)t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);const xe=I.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let ke=0;ke<C.length;ke++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(_e|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(_e|=i.STENCIL_BUFFER_BIT)),pe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[ke]);const ze=s.get(C[ke]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ze,0)}i.blitFramebuffer(0,0,ie,ve,0,0,ie,ve,_e,i.NEAREST),f===!0&&(Ct.length=0,rn.length=0,Ct.push(i.COLOR_ATTACHMENT0+ke),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Ct.push(Te),rn.push(Te),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,rn)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ct))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pe)for(let ke=0;ke<C.length;ke++){t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[ke]);const ze=s.get(C[ke]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.TEXTURE_2D,ze,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&f){const C=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[C])}}}function Gt(I){return Math.min(a.maxSamples,I.samples)}function _t(I){const C=s.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Ot(I){const C=u.render.frame;g.get(I)!==C&&(g.set(I,C),I.update())}function Ue(I,C){const ie=I.colorSpace,ve=I.format,_e=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||ie!==Xc&&ie!==Kr&&(At.getTransfer(ie)===Ft?(ve!==Ui||_e!==li)&&lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Nt("WebGLTextures: Unsupported texture color space:",ie)),C}function Xt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(p.width=I.naturalWidth||I.width,p.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(p.width=I.displayWidth,p.height=I.displayHeight):(p.width=I.width,p.height=I.height),p}this.allocateTextureUnit=F,this.resetTextureUnits=H,this.getTextureUnits=Q,this.setTextureUnits=V,this.setTexture2D=X,this.setTexture2DArray=oe,this.setTexture3D=re,this.setTextureCube=B,this.rebindTextures=wt,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=Lt,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=_t,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function aA(i,e){function t(s,a=Kr){let l;const u=At.getTransfer(a);if(s===li)return i.UNSIGNED_BYTE;if(s===ap)return i.UNSIGNED_SHORT_4_4_4_4;if(s===op)return i.UNSIGNED_SHORT_5_5_5_1;if(s===tx)return i.UNSIGNED_INT_5_9_9_9_REV;if(s===nx)return i.UNSIGNED_INT_10F_11F_11F_REV;if(s===J0)return i.BYTE;if(s===ex)return i.SHORT;if(s===jo)return i.UNSIGNED_SHORT;if(s===sp)return i.INT;if(s===Ji)return i.UNSIGNED_INT;if(s===Yi)return i.FLOAT;if(s===ci)return i.HALF_FLOAT;if(s===ix)return i.ALPHA;if(s===rx)return i.RGB;if(s===Ui)return i.RGBA;if(s===Er)return i.DEPTH_COMPONENT;if(s===Cs)return i.DEPTH_STENCIL;if(s===sx)return i.RED;if(s===lp)return i.RED_INTEGER;if(s===Rs)return i.RG;if(s===cp)return i.RG_INTEGER;if(s===up)return i.RGBA_INTEGER;if(s===Uc||s===Fc||s===Oc||s===kc)if(u===Ft)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===Uc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Fc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Oc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===kc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===Uc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Fc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Oc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===kc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===rf||s===sf||s===af||s===of)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===rf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===sf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===af)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===of)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===lf||s===cf||s===uf||s===df||s===hf||s===Vc||s===ff)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===lf||s===cf)return u===Ft?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===uf)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(s===df)return l.COMPRESSED_R11_EAC;if(s===hf)return l.COMPRESSED_SIGNED_R11_EAC;if(s===Vc)return l.COMPRESSED_RG11_EAC;if(s===ff)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===pf||s===mf||s===gf||s===vf||s===xf||s===_f||s===yf||s===Sf||s===Mf||s===Ef||s===Tf||s===wf||s===bf||s===Cf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===pf)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===mf)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===gf)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===vf)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===xf)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===_f)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===yf)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Sf)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Mf)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ef)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Tf)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===wf)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===bf)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Cf)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Af||s===Rf||s===Nf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===Af)return u===Ft?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Rf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Nf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Pf||s===Lf||s===Wc||s===Df)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===Pf)return l.COMPRESSED_RED_RGTC1_EXT;if(s===Lf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Wc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Df)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ho?i.UNSIGNED_INT_24_8:i[s]!==void 0?i[s]:null}return{convert:t}}const oA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lA=`
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

}`;class cA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const s=new gx(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new Un({vertexShader:oA,fragmentShader:lA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mi(new Yo(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class uA extends is{constructor(e,t){super();const s=this;let a=null,l=1,u=null,h="local-floor",f=1,p=null,g=null,x=null,v=null,S=null,T=null;const R=typeof XRWebGLBinding<"u",y=new cA,M={},b=t.getContextAttributes();let E=null,w=null;const D=[],L=[],O=new Qe;let A=null;const U=new _i;U.viewport=new an;const q=new _i;q.viewport=new an;const j=[U,q],Z=new gT;let H=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let me=D[ne];return me===void 0&&(me=new uh,D[ne]=me),me.getTargetRaySpace()},this.getControllerGrip=function(ne){let me=D[ne];return me===void 0&&(me=new uh,D[ne]=me),me.getGripSpace()},this.getHand=function(ne){let me=D[ne];return me===void 0&&(me=new uh,D[ne]=me),me.getHandSpace()};function V(ne){const me=L.indexOf(ne.inputSource);if(me===-1)return;const fe=D[me];fe!==void 0&&(fe.update(ne.inputSource,ne.frame,p||u),fe.dispatchEvent({type:ne.type,data:ne.inputSource}))}function F(){a.removeEventListener("select",V),a.removeEventListener("selectstart",V),a.removeEventListener("selectend",V),a.removeEventListener("squeeze",V),a.removeEventListener("squeezestart",V),a.removeEventListener("squeezeend",V),a.removeEventListener("end",F),a.removeEventListener("inputsourceschange",G);for(let ne=0;ne<D.length;ne++){const me=L[ne];me!==null&&(L[ne]=null,D[ne].disconnect(me))}H=null,Q=null,y.reset();for(const ne in M)delete M[ne];e.setRenderTarget(E),S=null,v=null,x=null,a=null,w=null,he.stop(),s.isPresenting=!1,e.setPixelRatio(A),e.setSize(O.width,O.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){l=ne,s.isPresenting===!0&&lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){h=ne,s.isPresenting===!0&&lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(ne){p=ne},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return x===null&&R&&(x=new XRWebGLBinding(a,t)),x},this.getFrame=function(){return T},this.getSession=function(){return a},this.setSession=async function(ne){if(a=ne,a!==null){if(E=e.getRenderTarget(),a.addEventListener("select",V),a.addEventListener("selectstart",V),a.addEventListener("selectend",V),a.addEventListener("squeeze",V),a.addEventListener("squeezestart",V),a.addEventListener("squeezeend",V),a.addEventListener("end",F),a.addEventListener("inputsourceschange",G),b.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(O),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Ae=null,Xe=null;b.depth&&(Xe=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=b.stencil?Cs:Er,Ae=b.stencil?Ho:Ji);const nt={colorFormat:t.RGBA8,depthFormat:Xe,scaleFactor:l};x=this.getBinding(),v=x.createProjectionLayer(nt),a.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),w=new ei(v.textureWidth,v.textureHeight,{format:Ui,type:li,depthTexture:new Na(v.textureWidth,v.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const fe={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,t,fe),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),w=new ei(S.framebufferWidth,S.framebufferHeight,{format:Ui,type:li,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(f),p=null,u=await a.requestReferenceSpace(h),he.setContext(a),he.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function G(ne){for(let me=0;me<ne.removed.length;me++){const fe=ne.removed[me],Ae=L.indexOf(fe);Ae>=0&&(L[Ae]=null,D[Ae].disconnect(fe))}for(let me=0;me<ne.added.length;me++){const fe=ne.added[me];let Ae=L.indexOf(fe);if(Ae===-1){for(let nt=0;nt<D.length;nt++)if(nt>=L.length){L.push(fe),Ae=nt;break}else if(L[nt]===null){L[nt]=fe,Ae=nt;break}if(Ae===-1)break}const Xe=D[Ae];Xe&&Xe.connect(fe)}}const X=new J,oe=new J;function re(ne,me,fe){X.setFromMatrixPosition(me.matrixWorld),oe.setFromMatrixPosition(fe.matrixWorld);const Ae=X.distanceTo(oe),Xe=me.projectionMatrix.elements,nt=fe.projectionMatrix.elements,et=Xe[14]/(Xe[10]-1),Ke=Xe[14]/(Xe[10]+1),ft=(Xe[9]+1)/Xe[5],wt=(Xe[9]-1)/Xe[5],rt=(Xe[8]-1)/Xe[0],Lt=(nt[8]+1)/nt[0],Ct=et*rt,rn=et*Lt,Y=Ae/(-rt+Lt),Gt=Y*-rt;if(me.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(Gt),ne.translateZ(Y),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Xe[10]===-1)ne.projectionMatrix.copy(me.projectionMatrix),ne.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const _t=et+Y,Ot=Ke+Y,Ue=Ct-Gt,Xt=rn+(Ae-Gt),I=ft*Ke/Ot*_t,C=wt*Ke/Ot*_t;ne.projectionMatrix.makePerspective(Ue,Xt,I,C,_t,Ot),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function B(ne,me){me===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(me.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(a===null)return;let me=ne.near,fe=ne.far;y.texture!==null&&(y.depthNear>0&&(me=y.depthNear),y.depthFar>0&&(fe=y.depthFar)),Z.near=q.near=U.near=me,Z.far=q.far=U.far=fe,(H!==Z.near||Q!==Z.far)&&(a.updateRenderState({depthNear:Z.near,depthFar:Z.far}),H=Z.near,Q=Z.far),Z.layers.mask=ne.layers.mask|6,U.layers.mask=Z.layers.mask&-5,q.layers.mask=Z.layers.mask&-3;const Ae=ne.parent,Xe=Z.cameras;B(Z,Ae);for(let nt=0;nt<Xe.length;nt++)B(Xe[nt],Ae);Xe.length===2?re(Z,U,q):Z.projectionMatrix.copy(U.projectionMatrix),te(ne,Z,Ae)};function te(ne,me,fe){fe===null?ne.matrix.copy(me.matrixWorld):(ne.matrix.copy(fe.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(me.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(me.projectionMatrix),ne.projectionMatrixInverse.copy(me.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Of*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(v===null&&S===null))return f},this.setFoveation=function(ne){f=ne,v!==null&&(v.fixedFoveation=ne),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ne)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Z)},this.getCameraTexture=function(ne){return M[ne]};let Pe=null;function Fe(ne,me){if(g=me.getViewerPose(p||u),T=me,g!==null){const fe=g.views;S!==null&&(e.setRenderTargetFramebuffer(w,S.framebuffer),e.setRenderTarget(w));let Ae=!1;fe.length!==Z.cameras.length&&(Z.cameras.length=0,Ae=!0);for(let Ke=0;Ke<fe.length;Ke++){const ft=fe[Ke];let wt=null;if(S!==null)wt=S.getViewport(ft);else{const Lt=x.getViewSubImage(v,ft);wt=Lt.viewport,Ke===0&&(e.setRenderTargetTextures(w,Lt.colorTexture,Lt.depthStencilTexture),e.setRenderTarget(w))}let rt=j[Ke];rt===void 0&&(rt=new _i,rt.layers.enable(Ke),rt.viewport=new an,j[Ke]=rt),rt.matrix.fromArray(ft.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(ft.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(wt.x,wt.y,wt.width,wt.height),Ke===0&&(Z.matrix.copy(rt.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Ae===!0&&Z.cameras.push(rt)}const Xe=a.enabledFeatures;if(Xe&&Xe.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&R){x=s.getBinding();const Ke=x.getDepthInformation(fe[0]);Ke&&Ke.isValid&&Ke.texture&&y.init(Ke,a.renderState)}if(Xe&&Xe.includes("camera-access")&&R){e.state.unbindTexture(),x=s.getBinding();for(let Ke=0;Ke<fe.length;Ke++){const ft=fe[Ke].camera;if(ft){let wt=M[ft];wt||(wt=new gx,M[ft]=wt);const rt=x.getCameraImage(ft);wt.sourceTexture=rt}}}}for(let fe=0;fe<D.length;fe++){const Ae=L[fe],Xe=D[fe];Ae!==null&&Xe!==void 0&&Xe.update(Ae,me,p||u)}Pe&&Pe(ne,me),me.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:me}),T=null}const he=new Mx;he.setAnimationLoop(Fe),this.setAnimationLoop=function(ne){Pe=ne},this.dispose=function(){}}}const dA=new nn,Rx=new vt;Rx.set(-1,0,0,0,1,0,0,0,1);function hA(i,e){function t(y,M){y.matrixAutoUpdate===!0&&y.updateMatrix(),M.value.copy(y.matrix)}function s(y,M){M.color.getRGB(y.fogColor.value,vx(i)),M.isFog?(y.fogNear.value=M.near,y.fogFar.value=M.far):M.isFogExp2&&(y.fogDensity.value=M.density)}function a(y,M,b,E,w){M.isNodeMaterial?M.uniformsNeedUpdate=!1:M.isMeshBasicMaterial?l(y,M):M.isMeshLambertMaterial?(l(y,M),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)):M.isMeshToonMaterial?(l(y,M),x(y,M)):M.isMeshPhongMaterial?(l(y,M),g(y,M),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)):M.isMeshStandardMaterial?(l(y,M),v(y,M),M.isMeshPhysicalMaterial&&S(y,M,w)):M.isMeshMatcapMaterial?(l(y,M),T(y,M)):M.isMeshDepthMaterial?l(y,M):M.isMeshDistanceMaterial?(l(y,M),R(y,M)):M.isMeshNormalMaterial?l(y,M):M.isLineBasicMaterial?(u(y,M),M.isLineDashedMaterial&&h(y,M)):M.isPointsMaterial?f(y,M,b,E):M.isSpriteMaterial?p(y,M):M.isShadowMaterial?(y.color.value.copy(M.color),y.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function l(y,M){y.opacity.value=M.opacity,M.color&&y.diffuse.value.copy(M.color),M.emissive&&y.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(y.map.value=M.map,t(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,t(M.alphaMap,y.alphaMapTransform)),M.bumpMap&&(y.bumpMap.value=M.bumpMap,t(M.bumpMap,y.bumpMapTransform),y.bumpScale.value=M.bumpScale,M.side===Jn&&(y.bumpScale.value*=-1)),M.normalMap&&(y.normalMap.value=M.normalMap,t(M.normalMap,y.normalMapTransform),y.normalScale.value.copy(M.normalScale),M.side===Jn&&y.normalScale.value.negate()),M.displacementMap&&(y.displacementMap.value=M.displacementMap,t(M.displacementMap,y.displacementMapTransform),y.displacementScale.value=M.displacementScale,y.displacementBias.value=M.displacementBias),M.emissiveMap&&(y.emissiveMap.value=M.emissiveMap,t(M.emissiveMap,y.emissiveMapTransform)),M.specularMap&&(y.specularMap.value=M.specularMap,t(M.specularMap,y.specularMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest);const b=e.get(M),E=b.envMap,w=b.envMapRotation;E&&(y.envMap.value=E,y.envMapRotation.value.setFromMatrix4(dA.makeRotationFromEuler(w)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(Rx),y.reflectivity.value=M.reflectivity,y.ior.value=M.ior,y.refractionRatio.value=M.refractionRatio),M.lightMap&&(y.lightMap.value=M.lightMap,y.lightMapIntensity.value=M.lightMapIntensity,t(M.lightMap,y.lightMapTransform)),M.aoMap&&(y.aoMap.value=M.aoMap,y.aoMapIntensity.value=M.aoMapIntensity,t(M.aoMap,y.aoMapTransform))}function u(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,M.map&&(y.map.value=M.map,t(M.map,y.mapTransform))}function h(y,M){y.dashSize.value=M.dashSize,y.totalSize.value=M.dashSize+M.gapSize,y.scale.value=M.scale}function f(y,M,b,E){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.size.value=M.size*b,y.scale.value=E*.5,M.map&&(y.map.value=M.map,t(M.map,y.uvTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,t(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function p(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.rotation.value=M.rotation,M.map&&(y.map.value=M.map,t(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,t(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function g(y,M){y.specular.value.copy(M.specular),y.shininess.value=Math.max(M.shininess,1e-4)}function x(y,M){M.gradientMap&&(y.gradientMap.value=M.gradientMap)}function v(y,M){y.metalness.value=M.metalness,M.metalnessMap&&(y.metalnessMap.value=M.metalnessMap,t(M.metalnessMap,y.metalnessMapTransform)),y.roughness.value=M.roughness,M.roughnessMap&&(y.roughnessMap.value=M.roughnessMap,t(M.roughnessMap,y.roughnessMapTransform)),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)}function S(y,M,b){y.ior.value=M.ior,M.sheen>0&&(y.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),y.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(y.sheenColorMap.value=M.sheenColorMap,t(M.sheenColorMap,y.sheenColorMapTransform)),M.sheenRoughnessMap&&(y.sheenRoughnessMap.value=M.sheenRoughnessMap,t(M.sheenRoughnessMap,y.sheenRoughnessMapTransform))),M.clearcoat>0&&(y.clearcoat.value=M.clearcoat,y.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(y.clearcoatMap.value=M.clearcoatMap,t(M.clearcoatMap,y.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,t(M.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(y.clearcoatNormalMap.value=M.clearcoatNormalMap,t(M.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===Jn&&y.clearcoatNormalScale.value.negate())),M.dispersion>0&&(y.dispersion.value=M.dispersion),M.iridescence>0&&(y.iridescence.value=M.iridescence,y.iridescenceIOR.value=M.iridescenceIOR,y.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(y.iridescenceMap.value=M.iridescenceMap,t(M.iridescenceMap,y.iridescenceMapTransform)),M.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=M.iridescenceThicknessMap,t(M.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),M.transmission>0&&(y.transmission.value=M.transmission,y.transmissionSamplerMap.value=b.texture,y.transmissionSamplerSize.value.set(b.width,b.height),M.transmissionMap&&(y.transmissionMap.value=M.transmissionMap,t(M.transmissionMap,y.transmissionMapTransform)),y.thickness.value=M.thickness,M.thicknessMap&&(y.thicknessMap.value=M.thicknessMap,t(M.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=M.attenuationDistance,y.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(y.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(y.anisotropyMap.value=M.anisotropyMap,t(M.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=M.specularIntensity,y.specularColor.value.copy(M.specularColor),M.specularColorMap&&(y.specularColorMap.value=M.specularColorMap,t(M.specularColorMap,y.specularColorMapTransform)),M.specularIntensityMap&&(y.specularIntensityMap.value=M.specularIntensityMap,t(M.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,M){M.matcap&&(y.matcap.value=M.matcap)}function R(y,M){const b=e.get(M).light;y.referencePosition.value.setFromMatrixPosition(b.matrixWorld),y.nearDistance.value=b.shadow.camera.near,y.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:a}}function fA(i,e,t,s){let a={},l={},u=[];const h=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function f(b,E){const w=E.program;s.uniformBlockBinding(b,w)}function p(b,E){let w=a[b.id];w===void 0&&(T(b),w=g(b),a[b.id]=w,b.addEventListener("dispose",y));const D=E.program;s.updateUBOMapping(b,D);const L=e.render.frame;l[b.id]!==L&&(v(b),l[b.id]=L)}function g(b){const E=x();b.__bindingPointIndex=E;const w=i.createBuffer(),D=b.__size,L=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,D,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,w),w}function x(){for(let b=0;b<h;b++)if(u.indexOf(b)===-1)return u.push(b),b;return Nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(b){const E=a[b.id],w=b.uniforms,D=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let L=0,O=w.length;L<O;L++){const A=Array.isArray(w[L])?w[L]:[w[L]];for(let U=0,q=A.length;U<q;U++){const j=A[U];if(S(j,L,U,D)===!0){const Z=j.__offset,H=Array.isArray(j.value)?j.value:[j.value];let Q=0;for(let V=0;V<H.length;V++){const F=H[V],G=R(F);typeof F=="number"||typeof F=="boolean"?(j.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,Z+Q,j.__data)):F.isMatrix3?(j.__data[0]=F.elements[0],j.__data[1]=F.elements[1],j.__data[2]=F.elements[2],j.__data[3]=0,j.__data[4]=F.elements[3],j.__data[5]=F.elements[4],j.__data[6]=F.elements[5],j.__data[7]=0,j.__data[8]=F.elements[6],j.__data[9]=F.elements[7],j.__data[10]=F.elements[8],j.__data[11]=0):ArrayBuffer.isView(F)?j.__data.set(new F.constructor(F.buffer,F.byteOffset,j.__data.length)):(F.toArray(j.__data,Q),Q+=G.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Z,j.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function S(b,E,w,D){const L=b.value,O=E+"_"+w;if(D[O]===void 0)return typeof L=="number"||typeof L=="boolean"?D[O]=L:ArrayBuffer.isView(L)?D[O]=L.slice():D[O]=L.clone(),!0;{const A=D[O];if(typeof L=="number"||typeof L=="boolean"){if(A!==L)return D[O]=L,!0}else{if(ArrayBuffer.isView(L))return!0;if(A.equals(L)===!1)return A.copy(L),!0}}return!1}function T(b){const E=b.uniforms;let w=0;const D=16;for(let O=0,A=E.length;O<A;O++){const U=Array.isArray(E[O])?E[O]:[E[O]];for(let q=0,j=U.length;q<j;q++){const Z=U[q],H=Array.isArray(Z.value)?Z.value:[Z.value];for(let Q=0,V=H.length;Q<V;Q++){const F=H[Q],G=R(F),X=w%D,oe=X%G.boundary,re=X+oe;w+=oe,re!==0&&D-re<G.storage&&(w+=D-re),Z.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=w,w+=G.storage}}}const L=w%D;return L>0&&(w+=D-L),b.__size=w,b.__cache={},this}function R(b){const E={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(E.boundary=4,E.storage=4):b.isVector2?(E.boundary=8,E.storage=8):b.isVector3||b.isColor?(E.boundary=16,E.storage=12):b.isVector4?(E.boundary=16,E.storage=16):b.isMatrix3?(E.boundary=48,E.storage=48):b.isMatrix4?(E.boundary=64,E.storage=64):b.isTexture?lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(E.boundary=16,E.storage=b.byteLength):lt("WebGLRenderer: Unsupported uniform value type.",b),E}function y(b){const E=b.target;E.removeEventListener("dispose",y);const w=u.indexOf(E.__bindingPointIndex);u.splice(w,1),i.deleteBuffer(a[E.id]),delete a[E.id],delete l[E.id]}function M(){for(const b in a)i.deleteBuffer(a[b]);u=[],a={},l={}}return{bind:f,update:p,dispose:M}}const pA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Xi=null;function mA(){return Xi===null&&(Xi=new eT(pA,16,16,Rs,ci),Xi.name="DFG_LUT",Xi.minFilter=In,Xi.magFilter=In,Xi.wrapS=_r,Xi.wrapT=_r,Xi.generateMipmaps=!1,Xi.needsUpdate=!0),Xi}class gA{constructor(e={}){const{canvas:t=AE(),context:s=null,depth:a=!0,stencil:l=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:v=!1,outputBufferType:S=li}=e;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=u;const R=S,y=new Set([up,cp,lp]),M=new Set([li,Ji,jo,Ho,ap,op]),b=new Uint32Array(4),E=new Int32Array(4),w=new J;let D=null,L=null;const O=[],A=[];let U=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const q=this;let j=!1,Z=null;this._outputColorSpace=oi;let H=0,Q=0,V=null,F=-1,G=null;const X=new an,oe=new an;let re=null;const B=new xt(0);let te=0,Pe=t.width,Fe=t.height,he=1,ne=null,me=null;const fe=new an(0,0,Pe,Fe),Ae=new an(0,0,Pe,Fe);let Xe=!1;const nt=new vp;let et=!1,Ke=!1;const ft=new nn,wt=new J,rt=new an,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ct=!1;function rn(){return V===null?he:1}let Y=s;function Gt(P,ee){return t.getContext(P,ee)}try{const P={alpha:!0,depth:a,stencil:l,antialias:h,premultipliedAlpha:f,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qf}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",$e,!1),t.addEventListener("webglcontextcreationerror",ht,!1),Y===null){const ee="webgl2";if(Y=Gt(ee,P),Y===null)throw Gt(ee)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw Nt("WebGLRenderer: "+P.message),P}let _t,Ot,Ue,Xt,I,C,ie,ve,_e,Te,Ie,pe,xe,ke,ze,Re,we,ct,dt,St,$,Ce,ge;function Be(){_t=new m1(Y),_t.init(),$=new aA(Y,_t),Ot=new o1(Y,_t,e,$),Ue=new rA(Y,_t),Ot.reversedDepthBuffer&&v&&Ue.buffers.depth.setReversed(!0),Xt=new x1(Y),I=new VC,C=new sA(Y,_t,Ue,I,Ot,$,Xt),ie=new p1(q),ve=new MT(Y),Ce=new s1(Y,ve),_e=new g1(Y,ve,Xt,Ce),Te=new y1(Y,_e,ve,Ce,Xt),ct=new _1(Y,Ot,C),ze=new l1(I),Ie=new GC(q,ie,_t,Ot,Ce,ze),pe=new hA(q,I),xe=new XC,ke=new QC(_t),we=new r1(q,ie,Ue,Te,T,f),Re=new iA(q,Te,Ot),ge=new fA(Y,Xt,Ot,Ue),dt=new a1(Y,_t,Xt),St=new v1(Y,_t,Xt),Xt.programs=Ie.programs,q.capabilities=Ot,q.extensions=_t,q.properties=I,q.renderLists=xe,q.shadowMap=Re,q.state=Ue,q.info=Xt}Be(),R!==li&&(U=new M1(R,t.width,t.height,a,l));const Le=new uA(q,Y);this.xr=Le,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const P=_t.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=_t.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(P){P!==void 0&&(he=P,this.setSize(Pe,Fe,!1))},this.getSize=function(P){return P.set(Pe,Fe)},this.setSize=function(P,ee,ue=!0){if(Le.isPresenting){lt("WebGLRenderer: Can't change size while VR device is presenting.");return}Pe=P,Fe=ee,t.width=Math.floor(P*he),t.height=Math.floor(ee*he),ue===!0&&(t.style.width=P+"px",t.style.height=ee+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,P,ee)},this.getDrawingBufferSize=function(P){return P.set(Pe*he,Fe*he).floor()},this.setDrawingBufferSize=function(P,ee,ue){Pe=P,Fe=ee,he=ue,t.width=Math.floor(P*ue),t.height=Math.floor(ee*ue),this.setViewport(0,0,P,ee)},this.setEffects=function(P){if(R===li){Nt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let ee=0;ee<P.length;ee++)if(P[ee].isOutputPass===!0){lt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(X)},this.getViewport=function(P){return P.copy(fe)},this.setViewport=function(P,ee,ue,le){P.isVector4?fe.set(P.x,P.y,P.z,P.w):fe.set(P,ee,ue,le),Ue.viewport(X.copy(fe).multiplyScalar(he).round())},this.getScissor=function(P){return P.copy(Ae)},this.setScissor=function(P,ee,ue,le){P.isVector4?Ae.set(P.x,P.y,P.z,P.w):Ae.set(P,ee,ue,le),Ue.scissor(oe.copy(Ae).multiplyScalar(he).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(P){Ue.setScissorTest(Xe=P)},this.setOpaqueSort=function(P){ne=P},this.setTransparentSort=function(P){me=P},this.getClearColor=function(P){return P.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(P=!0,ee=!0,ue=!0){let le=0;if(P){let ae=!1;if(V!==null){const De=V.texture.format;ae=y.has(De)}if(ae){const De=V.texture.type,Ge=M.has(De),Ne=we.getClearColor(),qe=we.getClearAlpha(),tt=Ne.r,pt=Ne.g,mt=Ne.b;Ge?(b[0]=tt,b[1]=pt,b[2]=mt,b[3]=qe,Y.clearBufferuiv(Y.COLOR,0,b)):(E[0]=tt,E[1]=pt,E[2]=mt,E[3]=qe,Y.clearBufferiv(Y.COLOR,0,E))}else le|=Y.COLOR_BUFFER_BIT}ee&&(le|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ue&&(le|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),le!==0&&Y.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(P){P.setRenderer(this),Z=P},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",$e,!1),t.removeEventListener("webglcontextcreationerror",ht,!1),we.dispose(),xe.dispose(),ke.dispose(),I.dispose(),ie.dispose(),Te.dispose(),Ce.dispose(),ge.dispose(),Ie.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",rs),Le.removeEventListener("sessionend",Ds),ir.stop()};function ye(P){P.preventDefault(),Yc("WebGLRenderer: Context Lost."),j=!0}function $e(){Yc("WebGLRenderer: Context Restored."),j=!1;const P=Xt.autoReset,ee=Re.enabled,ue=Re.autoUpdate,le=Re.needsUpdate,ae=Re.type;Be(),Xt.autoReset=P,Re.enabled=ee,Re.autoUpdate=ue,Re.needsUpdate=le,Re.type=ae}function ht(P){Nt("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Ht(P){const ee=P.target;ee.removeEventListener("dispose",Ht),Dt(ee)}function Dt(P){kn(P),I.remove(P)}function kn(P){const ee=I.get(P).programs;ee!==void 0&&(ee.forEach(function(ue){Ie.releaseProgram(ue)}),P.isShaderMaterial&&Ie.releaseShaderCache(P))}this.renderBufferDirect=function(P,ee,ue,le,ae,De){ee===null&&(ee=Lt);const Ge=ae.isMesh&&ae.matrixWorld.determinant()<0,Ne=Qo(P,ee,ue,le,ae);Ue.setMaterial(le,Ge);let qe=ue.index,tt=1;if(le.wireframe===!0){if(qe=_e.getWireframeAttribute(ue),qe===void 0)return;tt=2}const pt=ue.drawRange,mt=ue.attributes.position;let Ze=pt.start*tt,Rt=(pt.start+pt.count)*tt;De!==null&&(Ze=Math.max(Ze,De.start*tt),Rt=Math.min(Rt,(De.start+De.count)*tt)),qe!==null?(Ze=Math.max(Ze,0),Rt=Math.min(Rt,qe.count)):mt!=null&&(Ze=Math.max(Ze,0),Rt=Math.min(Rt,mt.count));const Vt=Rt-Ze;if(Vt<0||Vt===1/0)return;Ce.setup(ae,le,Ne,ue,qe);let Kt,kt=dt;if(qe!==null&&(Kt=ve.get(qe),kt=St,kt.setIndex(Kt)),ae.isMesh)le.wireframe===!0?(Ue.setLineWidth(le.wireframeLinewidth*rn()),kt.setMode(Y.LINES)):kt.setMode(Y.TRIANGLES);else if(ae.isLine){let un=le.linewidth;un===void 0&&(un=1),Ue.setLineWidth(un*rn()),ae.isLineSegments?kt.setMode(Y.LINES):ae.isLineLoop?kt.setMode(Y.LINE_LOOP):kt.setMode(Y.LINE_STRIP)}else ae.isPoints?kt.setMode(Y.POINTS):ae.isSprite&&kt.setMode(Y.TRIANGLES);if(ae.isBatchedMesh)if(_t.get("WEBGL_multi_draw"))kt.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{const un=ae._multiDrawStarts,je=ae._multiDrawCounts,En=ae._multiDrawCount,Mt=qe?ve.get(qe).bytesPerElement:1,Vn=I.get(le).currentProgram.getUniforms();for(let Wn=0;Wn<En;Wn++)Vn.setValue(Y,"_gl_DrawID",Wn),kt.render(un[Wn]/Mt,je[Wn])}else if(ae.isInstancedMesh)kt.renderInstances(Ze,Vt,ae.count);else if(ue.isInstancedBufferGeometry){const un=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,je=Math.min(ue.instanceCount,un);kt.renderInstances(Ze,Vt,je)}else kt.render(Ze,Vt)};function di(P,ee,ue){P.transparent===!0&&P.side===xr&&P.forceSinglePass===!1?(P.side=Jn,P.needsUpdate=!0,Is(P,ee,ue),P.side=es,P.needsUpdate=!0,Is(P,ee,ue),P.side=xr):Is(P,ee,ue)}this.compile=function(P,ee,ue=null){ue===null&&(ue=P),L=ke.get(ue),L.init(ee),A.push(L),ue.traverseVisible(function(ae){ae.isLight&&ae.layers.test(ee.layers)&&(L.pushLight(ae),ae.castShadow&&L.pushShadow(ae))}),P!==ue&&P.traverseVisible(function(ae){ae.isLight&&ae.layers.test(ee.layers)&&(L.pushLight(ae),ae.castShadow&&L.pushShadow(ae))}),L.setupLights();const le=new Set;return P.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;const De=ae.material;if(De)if(Array.isArray(De))for(let Ge=0;Ge<De.length;Ge++){const Ne=De[Ge];di(Ne,ue,ae),le.add(Ne)}else di(De,ue,ae),le.add(De)}),L=A.pop(),le},this.compileAsync=function(P,ee,ue=null){const le=this.compile(P,ee,ue);return new Promise(ae=>{function De(){if(le.forEach(function(Ge){I.get(Ge).currentProgram.isReady()&&le.delete(Ge)}),le.size===0){ae(P);return}setTimeout(De,10)}_t.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let nr=null;function Ls(P){nr&&nr(P)}function rs(){ir.stop()}function Ds(){ir.start()}const ir=new Mx;ir.setAnimationLoop(Ls),typeof self<"u"&&ir.setContext(self),this.setAnimationLoop=function(P){nr=P,Le.setAnimationLoop(P),P===null?ir.stop():ir.start()},Le.addEventListener("sessionstart",rs),Le.addEventListener("sessionend",Ds),this.render=function(P,ee){if(ee!==void 0&&ee.isCamera!==!0){Nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(j===!0)return;Z!==null&&Z.renderStart(P,ee);const ue=Le.enabled===!0&&Le.isPresenting===!0,le=U!==null&&(V===null||ue)&&U.begin(q,V);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),ee.parent===null&&ee.matrixWorldAutoUpdate===!0&&ee.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(ee),ee=Le.getCamera()),P.isScene===!0&&P.onBeforeRender(q,P,ee,V),L=ke.get(P,A.length),L.init(ee),L.state.textureUnits=C.getTextureUnits(),A.push(L),ft.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),nt.setFromProjectionMatrix(ft,Ki,ee.reversedDepth),Ke=this.localClippingEnabled,et=ze.init(this.clippingPlanes,Ke),D=xe.get(P,O.length),D.init(),O.push(D),Le.enabled===!0&&Le.isPresenting===!0){const Ge=q.xr.getDepthSensingMesh();Ge!==null&&ja(Ge,ee,-1/0,q.sortObjects)}ja(P,ee,0,q.sortObjects),D.finish(),q.sortObjects===!0&&D.sort(ne,me),Ct=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,Ct&&we.addToRenderList(D,P),this.info.render.frame++,et===!0&&ze.beginShadows();const ae=L.state.shadowsArray;if(Re.render(ae,P,ee),et===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),(le&&U.hasRenderPass())===!1){const Ge=D.opaque,Ne=D.transmissive;if(L.setupLights(),ee.isArrayCamera){const qe=ee.cameras;if(Ne.length>0)for(let tt=0,pt=qe.length;tt<pt;tt++){const mt=qe[tt];Bi(Ge,Ne,P,mt)}Ct&&we.render(P);for(let tt=0,pt=qe.length;tt<pt;tt++){const mt=qe[tt];Ko(D,P,mt,mt.viewport)}}else Ne.length>0&&Bi(Ge,Ne,P,ee),Ct&&we.render(P),Ko(D,P,ee)}V!==null&&Q===0&&(C.updateMultisampleRenderTarget(V),C.updateRenderTargetMipmap(V)),le&&U.end(q),P.isScene===!0&&P.onAfterRender(q,P,ee),Ce.resetDefaultState(),F=-1,G=null,A.pop(),A.length>0?(L=A[A.length-1],C.setTextureUnits(L.state.textureUnits),et===!0&&ze.setGlobalState(q.clippingPlanes,L.state.camera)):L=null,O.pop(),O.length>0?D=O[O.length-1]:D=null,Z!==null&&Z.renderEnd()};function ja(P,ee,ue,le){if(P.visible===!1)return;if(P.layers.test(ee.layers)){if(P.isGroup)ue=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(ee);else if(P.isLightProbeGrid)L.pushLightProbeGrid(P);else if(P.isLight)L.pushLight(P),P.castShadow&&L.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||nt.intersectsSprite(P)){le&&rt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ft);const Ge=Te.update(P),Ne=P.material;Ne.visible&&D.push(P,Ge,Ne,ue,rt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||nt.intersectsObject(P))){const Ge=Te.update(P),Ne=P.material;if(le&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),rt.copy(P.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),rt.copy(Ge.boundingSphere.center)),rt.applyMatrix4(P.matrixWorld).applyMatrix4(ft)),Array.isArray(Ne)){const qe=Ge.groups;for(let tt=0,pt=qe.length;tt<pt;tt++){const mt=qe[tt],Ze=Ne[mt.materialIndex];Ze&&Ze.visible&&D.push(P,Ge,Ze,ue,rt.z,mt)}}else Ne.visible&&D.push(P,Ge,Ne,ue,rt.z,null)}}const De=P.children;for(let Ge=0,Ne=De.length;Ge<Ne;Ge++)ja(De[Ge],ee,ue,le)}function Ko(P,ee,ue,le){const{opaque:ae,transmissive:De,transparent:Ge}=P;L.setupLightsView(ue),et===!0&&ze.setGlobalState(q.clippingPlanes,ue),le&&Ue.viewport(X.copy(le)),ae.length>0&&ss(ae,ee,ue),De.length>0&&ss(De,ee,ue),Ge.length>0&&ss(Ge,ee,ue),Ue.buffers.depth.setTest(!0),Ue.buffers.depth.setMask(!0),Ue.buffers.color.setMask(!0),Ue.setPolygonOffset(!1)}function Bi(P,ee,ue,le){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[le.id]===void 0){const Ze=_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[le.id]=new ei(1,1,{generateMipmaps:!0,type:Ze?ci:li,minFilter:bs,samples:Math.max(4,Ot.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace})}const De=L.state.transmissionRenderTarget[le.id],Ge=le.viewport||X;De.setSize(Ge.z*q.transmissionResolutionScale,Ge.w*q.transmissionResolutionScale);const Ne=q.getRenderTarget(),qe=q.getActiveCubeFace(),tt=q.getActiveMipmapLevel();q.setRenderTarget(De),q.getClearColor(B),te=q.getClearAlpha(),te<1&&q.setClearColor(16777215,.5),q.clear(),Ct&&we.render(ue);const pt=q.toneMapping;q.toneMapping=Qi;const mt=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),L.setupLightsView(le),et===!0&&ze.setGlobalState(q.clippingPlanes,le),ss(P,ue,le),C.updateMultisampleRenderTarget(De),C.updateRenderTargetMipmap(De),_t.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let Rt=0,Vt=ee.length;Rt<Vt;Rt++){const Kt=ee[Rt],{object:kt,geometry:un,material:je,group:En}=Kt;if(je.side===xr&&kt.layers.test(le.layers)){const Mt=je.side;je.side=Jn,je.needsUpdate=!0,Ha(kt,ue,le,un,je,En),je.side=Mt,je.needsUpdate=!0,Ze=!0}}Ze===!0&&(C.updateMultisampleRenderTarget(De),C.updateRenderTargetMipmap(De))}q.setRenderTarget(Ne,qe,tt),q.setClearColor(B,te),mt!==void 0&&(le.viewport=mt),q.toneMapping=pt}function ss(P,ee,ue){const le=ee.isScene===!0?ee.overrideMaterial:null;for(let ae=0,De=P.length;ae<De;ae++){const Ge=P[ae],{object:Ne,geometry:qe,group:tt}=Ge;let pt=Ge.material;pt.allowOverride===!0&&le!==null&&(pt=le),Ne.layers.test(ue.layers)&&Ha(Ne,ee,ue,qe,pt,tt)}}function Ha(P,ee,ue,le,ae,De){P.onBeforeRender(q,ee,ue,le,ae,De),P.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),ae.onBeforeRender(q,ee,ue,le,P,De),ae.transparent===!0&&ae.side===xr&&ae.forceSinglePass===!1?(ae.side=Jn,ae.needsUpdate=!0,q.renderBufferDirect(ue,ee,le,ae,P,De),ae.side=es,ae.needsUpdate=!0,q.renderBufferDirect(ue,ee,le,ae,P,De),ae.side=xr):q.renderBufferDirect(ue,ee,le,ae,P,De),P.onAfterRender(q,ee,ue,le,ae,De)}function Is(P,ee,ue){ee.isScene!==!0&&(ee=Lt);const le=I.get(P),ae=L.state.lights,De=L.state.shadowsArray,Ge=ae.state.version,Ne=Ie.getParameters(P,ae.state,De,ee,ue,L.state.lightProbeGridArray),qe=Ie.getProgramCacheKey(Ne);let tt=le.programs;le.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?ee.environment:null,le.fog=ee.fog;const pt=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;le.envMap=ie.get(P.envMap||le.environment,pt),le.envMapRotation=le.environment!==null&&P.envMap===null?ee.environmentRotation:P.envMapRotation,tt===void 0&&(P.addEventListener("dispose",Ht),tt=new Map,le.programs=tt);let mt=tt.get(qe);if(mt!==void 0){if(le.currentProgram===mt&&le.lightsStateVersion===Ge)return Va(P,Ne),mt}else Ne.uniforms=Ie.getUniforms(P),Z!==null&&P.isNodeMaterial&&Z.build(P,ue,Ne),P.onBeforeCompile(Ne,q),mt=Ie.acquireProgram(Ne,qe),tt.set(qe,mt),le.uniforms=Ne.uniforms;const Ze=le.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ze.clippingPlanes=ze.uniform),Va(P,Ne),le.needsLights=cu(P),le.lightsStateVersion=Ge,le.needsLights&&(Ze.ambientLightColor.value=ae.state.ambient,Ze.lightProbe.value=ae.state.probe,Ze.directionalLights.value=ae.state.directional,Ze.directionalLightShadows.value=ae.state.directionalShadow,Ze.spotLights.value=ae.state.spot,Ze.spotLightShadows.value=ae.state.spotShadow,Ze.rectAreaLights.value=ae.state.rectArea,Ze.ltc_1.value=ae.state.rectAreaLTC1,Ze.ltc_2.value=ae.state.rectAreaLTC2,Ze.pointLights.value=ae.state.point,Ze.pointLightShadows.value=ae.state.pointShadow,Ze.hemisphereLights.value=ae.state.hemi,Ze.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,Ze.spotLightMatrix.value=ae.state.spotLightMatrix,Ze.spotLightMap.value=ae.state.spotLightMap,Ze.pointShadowMatrix.value=ae.state.pointShadowMatrix),le.lightProbeGrid=L.state.lightProbeGridArray.length>0,le.currentProgram=mt,le.uniformsList=null,mt}function Ga(P){if(P.uniformsList===null){const ee=P.currentProgram.getUniforms();P.uniformsList=zc.seqWithValue(ee.seq,P.uniforms)}return P.uniformsList}function Va(P,ee){const ue=I.get(P);ue.outputColorSpace=ee.outputColorSpace,ue.batching=ee.batching,ue.batchingColor=ee.batchingColor,ue.instancing=ee.instancing,ue.instancingColor=ee.instancingColor,ue.instancingMorph=ee.instancingMorph,ue.skinning=ee.skinning,ue.morphTargets=ee.morphTargets,ue.morphNormals=ee.morphNormals,ue.morphColors=ee.morphColors,ue.morphTargetsCount=ee.morphTargetsCount,ue.numClippingPlanes=ee.numClippingPlanes,ue.numIntersection=ee.numClipIntersection,ue.vertexAlphas=ee.vertexAlphas,ue.vertexTangents=ee.vertexTangents,ue.toneMapping=ee.toneMapping}function Zo(P,ee){if(P.length===0)return null;if(P.length===1)return P[0].texture!==null?P[0]:null;w.setFromMatrixPosition(ee.matrixWorld);for(let ue=0,le=P.length;ue<le;ue++){const ae=P[ue];if(ae.texture!==null&&ae.boundingBox.containsPoint(w))return ae}return null}function Qo(P,ee,ue,le,ae){ee.isScene!==!0&&(ee=Lt),C.resetTextureUnits();const De=ee.fog,Ge=le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial?ee.environment:null,Ne=V===null?q.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:At.workingColorSpace,qe=le.isMeshStandardMaterial||le.isMeshLambertMaterial&&!le.envMap||le.isMeshPhongMaterial&&!le.envMap,tt=ie.get(le.envMap||Ge,qe),pt=le.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,mt=!!ue.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),Ze=!!ue.morphAttributes.position,Rt=!!ue.morphAttributes.normal,Vt=!!ue.morphAttributes.color;let Kt=Qi;le.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Kt=q.toneMapping);const kt=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,un=kt!==void 0?kt.length:0,je=I.get(le),En=L.state.lights;if(et===!0&&(Ke===!0||P!==G)){const Bt=P===G&&le.id===F;ze.setState(le,P,Bt)}let Mt=!1;le.version===je.__version?(je.needsLights&&je.lightsStateVersion!==En.state.version||je.outputColorSpace!==Ne||ae.isBatchedMesh&&je.batching===!1||!ae.isBatchedMesh&&je.batching===!0||ae.isBatchedMesh&&je.batchingColor===!0&&ae.colorTexture===null||ae.isBatchedMesh&&je.batchingColor===!1&&ae.colorTexture!==null||ae.isInstancedMesh&&je.instancing===!1||!ae.isInstancedMesh&&je.instancing===!0||ae.isSkinnedMesh&&je.skinning===!1||!ae.isSkinnedMesh&&je.skinning===!0||ae.isInstancedMesh&&je.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&je.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&je.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&je.instancingMorph===!1&&ae.morphTexture!==null||je.envMap!==tt||le.fog===!0&&je.fog!==De||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==ze.numPlanes||je.numIntersection!==ze.numIntersection)||je.vertexAlphas!==pt||je.vertexTangents!==mt||je.morphTargets!==Ze||je.morphNormals!==Rt||je.morphColors!==Vt||je.toneMapping!==Kt||je.morphTargetsCount!==un||!!je.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(Mt=!0):(Mt=!0,je.__version=le.version);let Vn=je.currentProgram;Mt===!0&&(Vn=Is(le,ee,ae),Z&&le.isNodeMaterial&&Z.onUpdateProgram(le,Vn,je));let Wn=!1,Et=!1,rr=!1;const Ut=Vn.getUniforms(),$t=je.uniforms;if(Ue.useProgram(Vn.program)&&(Wn=!0,Et=!0,rr=!0),le.id!==F&&(F=le.id,Et=!0),je.needsLights){const Bt=Zo(L.state.lightProbeGridArray,ae);je.lightProbeGrid!==Bt&&(je.lightProbeGrid=Bt,Et=!0)}if(Wn||G!==P){Ue.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),Ut.setValue(Y,"projectionMatrix",P.projectionMatrix),Ut.setValue(Y,"viewMatrix",P.matrixWorldInverse);const wi=Ut.map.cameraPosition;wi!==void 0&&wi.setValue(Y,wt.setFromMatrixPosition(P.matrixWorld)),Ot.logarithmicDepthBuffer&&Ut.setValue(Y,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Ut.setValue(Y,"isOrthographic",P.isOrthographicCamera===!0),G!==P&&(G=P,Et=!0,rr=!0)}if(je.needsLights&&(En.state.directionalShadowMap.length>0&&Ut.setValue(Y,"directionalShadowMap",En.state.directionalShadowMap,C),En.state.spotShadowMap.length>0&&Ut.setValue(Y,"spotShadowMap",En.state.spotShadowMap,C),En.state.pointShadowMap.length>0&&Ut.setValue(Y,"pointShadowMap",En.state.pointShadowMap,C)),ae.isSkinnedMesh){Ut.setOptional(Y,ae,"bindMatrix"),Ut.setOptional(Y,ae,"bindMatrixInverse");const Bt=ae.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),Ut.setValue(Y,"boneTexture",Bt.boneTexture,C))}ae.isBatchedMesh&&(Ut.setOptional(Y,ae,"batchingTexture"),Ut.setValue(Y,"batchingTexture",ae._matricesTexture,C),Ut.setOptional(Y,ae,"batchingIdTexture"),Ut.setValue(Y,"batchingIdTexture",ae._indirectTexture,C),Ut.setOptional(Y,ae,"batchingColorTexture"),ae._colorsTexture!==null&&Ut.setValue(Y,"batchingColorTexture",ae._colorsTexture,C));const Ti=ue.morphAttributes;if((Ti.position!==void 0||Ti.normal!==void 0||Ti.color!==void 0)&&ct.update(ae,ue,Vn),(Et||je.receiveShadow!==ae.receiveShadow)&&(je.receiveShadow=ae.receiveShadow,Ut.setValue(Y,"receiveShadow",ae.receiveShadow)),(le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial)&&le.envMap===null&&ee.environment!==null&&($t.envMapIntensity.value=ee.environmentIntensity),$t.dfgLUT!==void 0&&($t.dfgLUT.value=mA()),Et){if(Ut.setValue(Y,"toneMappingExposure",q.toneMappingExposure),je.needsLights&&lu($t,rr),De&&le.fog===!0&&pe.refreshFogUniforms($t,De),pe.refreshMaterialUniforms($t,le,he,Fe,L.state.transmissionRenderTarget[P.id]),je.needsLights&&je.lightProbeGrid){const Bt=je.lightProbeGrid;$t.probesSH.value=Bt.texture,$t.probesMin.value.copy(Bt.boundingBox.min),$t.probesMax.value.copy(Bt.boundingBox.max),$t.probesResolution.value.copy(Bt.resolution)}zc.upload(Y,Ga(je),$t,C)}if(le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(zc.upload(Y,Ga(je),$t,C),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Ut.setValue(Y,"center",ae.center),Ut.setValue(Y,"modelViewMatrix",ae.modelViewMatrix),Ut.setValue(Y,"normalMatrix",ae.normalMatrix),Ut.setValue(Y,"modelMatrix",ae.matrixWorld),le.uniformsGroups!==void 0){const Bt=le.uniformsGroups;for(let wi=0,zi=Bt.length;wi<zi;wi++){const as=Bt[wi];ge.update(as,Vn),ge.bind(as,Vn)}}return Vn}function lu(P,ee){P.ambientLightColor.needsUpdate=ee,P.lightProbe.needsUpdate=ee,P.directionalLights.needsUpdate=ee,P.directionalLightShadows.needsUpdate=ee,P.pointLights.needsUpdate=ee,P.pointLightShadows.needsUpdate=ee,P.spotLights.needsUpdate=ee,P.spotLightShadows.needsUpdate=ee,P.rectAreaLights.needsUpdate=ee,P.hemisphereLights.needsUpdate=ee}function cu(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(P,ee,ue){const le=I.get(P);le.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),I.get(P.texture).__webglTexture=ee,I.get(P.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:ue,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,ee){const ue=I.get(P);ue.__webglFramebuffer=ee,ue.__useDefaultFramebuffer=ee===void 0};const Jt=Y.createFramebuffer();this.setRenderTarget=function(P,ee=0,ue=0){V=P,H=ee,Q=ue;let le=null,ae=!1,De=!1;if(P){const Ne=I.get(P);if(Ne.__useDefaultFramebuffer!==void 0){Ue.bindFramebuffer(Y.FRAMEBUFFER,Ne.__webglFramebuffer),X.copy(P.viewport),oe.copy(P.scissor),re=P.scissorTest,Ue.viewport(X),Ue.scissor(oe),Ue.setScissorTest(re),F=-1;return}else if(Ne.__webglFramebuffer===void 0)C.setupRenderTarget(P);else if(Ne.__hasExternalTextures)C.rebindTextures(P,I.get(P.texture).__webglTexture,I.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const pt=P.depthTexture;if(Ne.__boundDepthTexture!==pt){if(pt!==null&&I.has(pt)&&(P.width!==pt.image.width||P.height!==pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(P)}}const qe=P.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(De=!0);const tt=I.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(tt[ee])?le=tt[ee][ue]:le=tt[ee],ae=!0):P.samples>0&&C.useMultisampledRTT(P)===!1?le=I.get(P).__webglMultisampledFramebuffer:Array.isArray(tt)?le=tt[ue]:le=tt,X.copy(P.viewport),oe.copy(P.scissor),re=P.scissorTest}else X.copy(fe).multiplyScalar(he).floor(),oe.copy(Ae).multiplyScalar(he).floor(),re=Xe;if(ue!==0&&(le=Jt),Ue.bindFramebuffer(Y.FRAMEBUFFER,le)&&Ue.drawBuffers(P,le),Ue.viewport(X),Ue.scissor(oe),Ue.setScissorTest(re),ae){const Ne=I.get(P.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ne.__webglTexture,ue)}else if(De){const Ne=ee;for(let qe=0;qe<P.textures.length;qe++){const tt=I.get(P.textures[qe]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+qe,tt.__webglTexture,ue,Ne)}}else if(P!==null&&ue!==0){const Ne=I.get(P.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Ne.__webglTexture,ue)}F=-1},this.readRenderTargetPixels=function(P,ee,ue,le,ae,De,Ge,Ne=0){if(!(P&&P.isWebGLRenderTarget)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=I.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ge!==void 0&&(qe=qe[Ge]),qe){Ue.bindFramebuffer(Y.FRAMEBUFFER,qe);try{const tt=P.textures[Ne],pt=tt.format,mt=tt.type;if(P.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Ne),!Ot.textureFormatReadable(pt)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(mt)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ee>=0&&ee<=P.width-le&&ue>=0&&ue<=P.height-ae&&Y.readPixels(ee,ue,le,ae,$.convert(pt),$.convert(mt),De)}finally{const tt=V!==null?I.get(V).__webglFramebuffer:null;Ue.bindFramebuffer(Y.FRAMEBUFFER,tt)}}},this.readRenderTargetPixelsAsync=async function(P,ee,ue,le,ae,De,Ge,Ne=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=I.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ge!==void 0&&(qe=qe[Ge]),qe)if(ee>=0&&ee<=P.width-le&&ue>=0&&ue<=P.height-ae){Ue.bindFramebuffer(Y.FRAMEBUFFER,qe);const tt=P.textures[Ne],pt=tt.format,mt=tt.type;if(P.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Ne),!Ot.textureFormatReadable(pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Ze),Y.bufferData(Y.PIXEL_PACK_BUFFER,De.byteLength,Y.STREAM_READ),Y.readPixels(ee,ue,le,ae,$.convert(pt),$.convert(mt),0);const Rt=V!==null?I.get(V).__webglFramebuffer:null;Ue.bindFramebuffer(Y.FRAMEBUFFER,Rt);const Vt=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await RE(Y,Vt,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Ze),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,De),Y.deleteBuffer(Ze),Y.deleteSync(Vt),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,ee=null,ue=0){const le=Math.pow(2,-ue),ae=Math.floor(P.image.width*le),De=Math.floor(P.image.height*le),Ge=ee!==null?ee.x:0,Ne=ee!==null?ee.y:0;C.setTexture2D(P,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,ue,0,0,Ge,Ne,ae,De),Ue.unbindTexture()};const uu=Y.createFramebuffer(),Wa=Y.createFramebuffer();this.copyTextureToTexture=function(P,ee,ue=null,le=null,ae=0,De=0){let Ge,Ne,qe,tt,pt,mt,Ze,Rt,Vt;const Kt=P.isCompressedTexture?P.mipmaps[De]:P.image;if(ue!==null)Ge=ue.max.x-ue.min.x,Ne=ue.max.y-ue.min.y,qe=ue.isBox3?ue.max.z-ue.min.z:1,tt=ue.min.x,pt=ue.min.y,mt=ue.isBox3?ue.min.z:0;else{const $t=Math.pow(2,-ae);Ge=Math.floor(Kt.width*$t),Ne=Math.floor(Kt.height*$t),P.isDataArrayTexture?qe=Kt.depth:P.isData3DTexture?qe=Math.floor(Kt.depth*$t):qe=1,tt=0,pt=0,mt=0}le!==null?(Ze=le.x,Rt=le.y,Vt=le.z):(Ze=0,Rt=0,Vt=0);const kt=$.convert(ee.format),un=$.convert(ee.type);let je;ee.isData3DTexture?(C.setTexture3D(ee,0),je=Y.TEXTURE_3D):ee.isDataArrayTexture||ee.isCompressedArrayTexture?(C.setTexture2DArray(ee,0),je=Y.TEXTURE_2D_ARRAY):(C.setTexture2D(ee,0),je=Y.TEXTURE_2D),Ue.activeTexture(Y.TEXTURE0),Ue.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,ee.flipY),Ue.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),Ue.pixelStorei(Y.UNPACK_ALIGNMENT,ee.unpackAlignment);const En=Ue.getParameter(Y.UNPACK_ROW_LENGTH),Mt=Ue.getParameter(Y.UNPACK_IMAGE_HEIGHT),Vn=Ue.getParameter(Y.UNPACK_SKIP_PIXELS),Wn=Ue.getParameter(Y.UNPACK_SKIP_ROWS),Et=Ue.getParameter(Y.UNPACK_SKIP_IMAGES);Ue.pixelStorei(Y.UNPACK_ROW_LENGTH,Kt.width),Ue.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Kt.height),Ue.pixelStorei(Y.UNPACK_SKIP_PIXELS,tt),Ue.pixelStorei(Y.UNPACK_SKIP_ROWS,pt),Ue.pixelStorei(Y.UNPACK_SKIP_IMAGES,mt);const rr=P.isDataArrayTexture||P.isData3DTexture,Ut=ee.isDataArrayTexture||ee.isData3DTexture;if(P.isDepthTexture){const $t=I.get(P),Ti=I.get(ee),Bt=I.get($t.__renderTarget),wi=I.get(Ti.__renderTarget);Ue.bindFramebuffer(Y.READ_FRAMEBUFFER,Bt.__webglFramebuffer),Ue.bindFramebuffer(Y.DRAW_FRAMEBUFFER,wi.__webglFramebuffer);for(let zi=0;zi<qe;zi++)rr&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,I.get(P).__webglTexture,ae,mt+zi),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,I.get(ee).__webglTexture,De,Vt+zi)),Y.blitFramebuffer(tt,pt,Ge,Ne,Ze,Rt,Ge,Ne,Y.DEPTH_BUFFER_BIT,Y.NEAREST);Ue.bindFramebuffer(Y.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(ae!==0||P.isRenderTargetTexture||I.has(P)){const $t=I.get(P),Ti=I.get(ee);Ue.bindFramebuffer(Y.READ_FRAMEBUFFER,uu),Ue.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Wa);for(let Bt=0;Bt<qe;Bt++)rr?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,$t.__webglTexture,ae,mt+Bt):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,$t.__webglTexture,ae),Ut?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Ti.__webglTexture,De,Vt+Bt):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Ti.__webglTexture,De),ae!==0?Y.blitFramebuffer(tt,pt,Ge,Ne,Ze,Rt,Ge,Ne,Y.COLOR_BUFFER_BIT,Y.NEAREST):Ut?Y.copyTexSubImage3D(je,De,Ze,Rt,Vt+Bt,tt,pt,Ge,Ne):Y.copyTexSubImage2D(je,De,Ze,Rt,tt,pt,Ge,Ne);Ue.bindFramebuffer(Y.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Ut?P.isDataTexture||P.isData3DTexture?Y.texSubImage3D(je,De,Ze,Rt,Vt,Ge,Ne,qe,kt,un,Kt.data):ee.isCompressedArrayTexture?Y.compressedTexSubImage3D(je,De,Ze,Rt,Vt,Ge,Ne,qe,kt,Kt.data):Y.texSubImage3D(je,De,Ze,Rt,Vt,Ge,Ne,qe,kt,un,Kt):P.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,De,Ze,Rt,Ge,Ne,kt,un,Kt.data):P.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,De,Ze,Rt,Kt.width,Kt.height,kt,Kt.data):Y.texSubImage2D(Y.TEXTURE_2D,De,Ze,Rt,Ge,Ne,kt,un,Kt);Ue.pixelStorei(Y.UNPACK_ROW_LENGTH,En),Ue.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Mt),Ue.pixelStorei(Y.UNPACK_SKIP_PIXELS,Vn),Ue.pixelStorei(Y.UNPACK_SKIP_ROWS,Wn),Ue.pixelStorei(Y.UNPACK_SKIP_IMAGES,Et),De===0&&ee.generateMipmaps&&Y.generateMipmap(je),Ue.unbindTexture()},this.initRenderTarget=function(P){I.get(P).__webglFramebuffer===void 0&&C.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?C.setTextureCube(P,0):P.isData3DTexture?C.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?C.setTexture2DArray(P,0):C.setTexture2D(P,0),Ue.unbindTexture()},this.resetState=function(){H=0,Q=0,V=null,Ue.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),t.unpackColorSpace=At._getUnpackColorSpace()}}const _0={type:"change"},Sp={type:"start"},Nx={type:"end"},Ac=new mp,y0=new Yr,vA=Math.cos(70*LE.DEG2RAD),mn=new J,Qn=2*Math.PI,jt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Fh=1e-6;class xA extends yT{constructor(e,t=null){super(e,t),this.state=jt.NONE,this.target=new J,this.cursor=new J,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:wa.ROTATE,MIDDLE:wa.DOLLY,RIGHT:wa.PAN},this.touches={ONE:Ma.ROTATE,TWO:Ma.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new J,this._lastQuaternion=new ts,this._lastTargetPosition=new J,this._quat=new ts().setFromUnitVectors(e.up,new J(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new $v,this._sphericalDelta=new $v,this._scale=1,this._panOffset=new J,this._rotateStart=new Qe,this._rotateEnd=new Qe,this._rotateDelta=new Qe,this._panStart=new Qe,this._panEnd=new Qe,this._panDelta=new Qe,this._dollyStart=new Qe,this._dollyEnd=new Qe,this._dollyDelta=new Qe,this._dollyDirection=new J,this._mouse=new Qe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=yA.bind(this),this._onPointerDown=_A.bind(this),this._onPointerUp=SA.bind(this),this._onContextMenu=AA.bind(this),this._onMouseWheel=TA.bind(this),this._onKeyDown=wA.bind(this),this._onTouchStart=bA.bind(this),this._onTouchMove=CA.bind(this),this._onMouseDown=MA.bind(this),this._onMouseMove=EA.bind(this),this._interceptControlDown=RA.bind(this),this._interceptControlUp=NA.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(_0),this.update(),this.state=jt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;mn.copy(t).sub(this.target),mn.applyQuaternion(this._quat),this._spherical.setFromVector3(mn),this.autoRotate&&this.state===jt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(s)&&isFinite(a)&&(s<-Math.PI?s+=Qn:s>Math.PI&&(s-=Qn),a<-Math.PI?a+=Qn:a>Math.PI&&(a-=Qn),s<=a?this._spherical.theta=Math.max(s,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+a)/2?Math.max(s,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=u!=this._spherical.radius}if(mn.setFromSpherical(this._spherical),mn.applyQuaternion(this._quatInverse),t.copy(this.target).add(mn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const h=mn.length();u=this._clampDistance(h*this._scale);const f=h-u;this.object.position.addScaledVector(this._dollyDirection,f),this.object.updateMatrixWorld(),l=!!f}else if(this.object.isOrthographicCamera){const h=new J(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=f!==this.object.zoom;const p=new J(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(h),this.object.updateMatrixWorld(),u=mn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(Ac.origin.copy(this.object.position),Ac.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ac.direction))<vA?this.object.lookAt(this.target):(y0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ac.intersectPlane(y0,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>Fh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Fh||this._lastTargetPosition.distanceToSquared(this.target)>Fh?(this.dispatchEvent(_0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Qn/60*this.autoRotateSpeed*e:Qn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){mn.setFromMatrixColumn(t,0),mn.multiplyScalar(-e),this._panOffset.add(mn)}_panUp(e,t){this.screenSpacePanning===!0?mn.setFromMatrixColumn(t,1):(mn.setFromMatrixColumn(t,0),mn.crossVectors(this.object.up,mn)),mn.multiplyScalar(e),this._panOffset.add(mn)}_pan(e,t){const s=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;mn.copy(a).sub(this.target);let l=mn.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/s.clientHeight,this.object.matrix),this._panUp(2*t*l/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),a=e-s.left,l=t-s.top,u=s.width,h=s.height;this._mouse.x=a/u*2-1,this._mouse.y=-(l/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Qn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Qn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),s=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._rotateStart.set(s,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),s=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panStart.set(s,a)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),s=e.pageX-t.x,a=e.pageY-t.y,l=Math.sqrt(s*s+a*a);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const s=this._getSecondPointerPosition(e),a=.5*(e.pageX+s.x),l=.5*(e.pageY+s.y);this._rotateEnd.set(a,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Qn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Qn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),s=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panEnd.set(s,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),s=e.pageX-t.x,a=e.pageY-t.y,l=Math.sqrt(s*s+a*a);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,h=(e.pageY+t.y)*.5;this._updateZoomParameters(u,h)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Qe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,s={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function _A(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function yA(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function SA(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Nx),this.state=jt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function MA(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case wa.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=jt.DOLLY;break;case wa.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=jt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=jt.ROTATE}break;case wa.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=jt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=jt.PAN}break;default:this.state=jt.NONE}this.state!==jt.NONE&&this.dispatchEvent(Sp)}function EA(i){switch(this.state){case jt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case jt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case jt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function TA(i){this.enabled===!1||this.enableZoom===!1||this.state!==jt.NONE||(i.preventDefault(),this.dispatchEvent(Sp),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Nx))}function wA(i){this.enabled!==!1&&this._handleKeyDown(i)}function bA(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ma.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=jt.TOUCH_ROTATE;break;case Ma.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=jt.TOUCH_PAN;break;default:this.state=jt.NONE}break;case 2:switch(this.touches.TWO){case Ma.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=jt.TOUCH_DOLLY_PAN;break;case Ma.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=jt.TOUCH_DOLLY_ROTATE;break;default:this.state=jt.NONE}break;default:this.state=jt.NONE}this.state!==jt.NONE&&this.dispatchEvent(Sp)}function CA(i){switch(this._trackPointer(i),this.state){case jt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case jt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case jt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case jt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=jt.NONE}}function AA(i){this.enabled!==!1&&i.preventDefault()}function RA(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function NA(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const jc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class za{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const PA=new su(-1,1,1,-1,0,1);class LA extends On{constructor(){super(),this.setAttribute("position",new cn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new cn([0,2,0,0,2,0],2))}}const DA=new LA;class Mp{constructor(e){this._mesh=new Mi(DA,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,PA)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class IA extends za{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Un?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Vo.clone(e.uniforms),this.material=new Un({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Mp(this.material)}render(e,t,s){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=s.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class S0 extends za{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,s){const a=e.getContext(),l=e.state;l.buffers.color.setMask(!1),l.buffers.depth.setMask(!1),l.buffers.color.setLocked(!0),l.buffers.depth.setLocked(!0);let u,h;this.inverse?(u=0,h=1):(u=1,h=0),l.buffers.stencil.setTest(!0),l.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),l.buffers.stencil.setFunc(a.ALWAYS,u,4294967295),l.buffers.stencil.setClear(h),l.buffers.stencil.setLocked(!0),e.setRenderTarget(s),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),l.buffers.color.setLocked(!1),l.buffers.depth.setLocked(!1),l.buffers.color.setMask(!0),l.buffers.depth.setMask(!0),l.buffers.stencil.setLocked(!1),l.buffers.stencil.setFunc(a.EQUAL,1,4294967295),l.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),l.buffers.stencil.setLocked(!0)}}class UA extends za{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class FA{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const s=e.getSize(new Qe);this._width=s.width,this._height=s.height,t=new ei(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ci}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new IA(jc),this.copyPass.material.blending=Zi,this.timer=new vT}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let s=!1;for(let a=0,l=this.passes.length;a<l;a++){const u=this.passes[a];if(u.enabled!==!1){if(u.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(a),u.render(this.renderer,this.writeBuffer,this.readBuffer,e,s),u.needsSwap){if(s){const h=this.renderer.getContext(),f=this.renderer.state.buffers.stencil;f.setFunc(h.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),f.setFunc(h.EQUAL,1,4294967295)}this.swapBuffers()}S0!==void 0&&(u instanceof S0?s=!0:u instanceof UA&&(s=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Qe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const s=this._width*this._pixelRatio,a=this._height*this._pixelRatio;this.renderTarget1.setSize(s,a),this.renderTarget2.setSize(s,a);for(let l=0;l<this.passes.length;l++)this.passes[l].setSize(s,a)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class OA extends za{constructor(e,t,s=null,a=null,l=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=s,this.clearColor=a,this.clearAlpha=l,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new xt}render(e,t,s){const a=e.autoClear;e.autoClear=!1;let l,u;this.overrideMaterial!==null&&(u=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(l=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:s),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(l),this.overrideMaterial!==null&&(this.scene.overrideMaterial=u),e.autoClear=a}}const kA={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new xt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class La extends za{constructor(e,t=1,s,a){super(),this.strength=t,this.radius=s,this.threshold=a,this.resolution=e!==void 0?new Qe(e.x,e.y):new Qe(256,256),this.clearColor=new xt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let l=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);this.renderTargetBright=new ei(l,u,{type:ci}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let g=0;g<this.nMips;g++){const x=new ei(l,u,{type:ci});x.texture.name="UnrealBloomPass.h"+g,x.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(x);const v=new ei(l,u,{type:ci});v.texture.name="UnrealBloomPass.v"+g,v.texture.generateMipmaps=!1,this.renderTargetsVertical.push(v),l=Math.round(l/2),u=Math.round(u/2)}const h=kA;this.highPassUniforms=Vo.clone(h.uniforms),this.highPassUniforms.luminosityThreshold.value=a,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Un({uniforms:this.highPassUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader}),this.separableBlurMaterials=[];const f=[6,10,14,18,22];l=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);for(let g=0;g<this.nMips;g++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(f[g])),this.separableBlurMaterials[g].uniforms.invSize.value=new Qe(1/l,1/u),l=Math.round(l/2),u=Math.round(u/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const p=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=p,this.bloomTintColors=[new J(1,1,1),new J(1,1,1),new J(1,1,1),new J(1,1,1),new J(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Vo.clone(jc.uniforms),this.blendMaterial=new Un({uniforms:this.copyUniforms,vertexShader:jc.vertexShader,fragmentShader:jc.fragmentShader,premultipliedAlpha:!0,blending:Wh,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new xt,this._oldClearAlpha=1,this._basic=new gp,this._fsQuad=new Mp(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let s=Math.round(e/2),a=Math.round(t/2);this.renderTargetBright.setSize(s,a);for(let l=0;l<this.nMips;l++)this.renderTargetsHorizontal[l].setSize(s,a),this.renderTargetsVertical[l].setSize(s,a),this.separableBlurMaterials[l].uniforms.invSize.value=new Qe(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2)}render(e,t,s,a,l){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const u=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),l&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=s.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=s.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let h=this.renderTargetBright;for(let f=0;f<this.nMips;f++)this._fsQuad.material=this.separableBlurMaterials[f],this.separableBlurMaterials[f].uniforms.colorTexture.value=h.texture,this.separableBlurMaterials[f].uniforms.direction.value=La.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[f]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[f].uniforms.colorTexture.value=this.renderTargetsHorizontal[f].texture,this.separableBlurMaterials[f].uniforms.direction.value=La.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[f]),e.clear(),this._fsQuad.render(e),h=this.renderTargetsVertical[f];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,l&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(s),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=u}_getSeparableBlurMaterial(e){const t=[],s=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(s*s))/s);return new Un({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Qe(.5,.5)},direction:{value:new Qe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Un({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}La.BlurDirectionX=new Qe(1,0);La.BlurDirectionY=new Qe(0,1);const Rc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class BA extends za{constructor(){super(),this.isOutputPass=!0,this.uniforms=Vo.clone(Rc.uniforms),this.material=new xx({name:Rc.name,uniforms:this.uniforms,vertexShader:Rc.vertexShader,fragmentShader:Rc.fragmentShader}),this._fsQuad=new Mp(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,s){this.uniforms.tDiffuse.value=s.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},At.getTransfer(this._outputColorSpace)===Ft&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Jf?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ep?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===tp?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===nu?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ip?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===rp?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===np&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}function Oh(i){const e=`${i.model||""} ${i.serialNumber||""} ${i.zone||""}`.toLowerCase();return e.includes("switch")?"switch":e.includes("access")||e.includes("ap")||e.includes("wifi")?"ap":e.includes("router")||e.includes("gateway")?"gateway":"device"}function M0(i){return i==="ONLINE"?1483594:i==="UNSTABLE"?15909632:6583435}function zA(i){const e=new xt(i);return new _x({color:e,roughness:.34,metalness:.18,emissive:e,emissiveIntensity:.16})}function jA(i,e="#0f172a"){const t=document.createElement("canvas"),s=t.getContext("2d");t.width=512,t.height=128,s.font="700 34px Arial",s.fillStyle="rgba(255,255,255,0.92)",s.roundRect(0,14,512,72,18),s.fill(),s.fillStyle=e,s.fillText(i.slice(0,26),28,60);const a=new sT(t),l=new hx({map:a,transparent:!0}),u=new QE(l);return u.scale.set(4.8,1.2,1),u}function Nc(i,e,t,s=9741240){const a=new On().setFromPoints([e,t]),l=new xp({color:s,transparent:!0,opacity:.75}),u=new px(a,l);return i.add(u),u}function Fo(i,{position:e,color:t,label:s,shape:a="box",scale:l=[1,1,1]}){const u=a==="sphere"?new yp(.45,32,18):a==="cylinder"?new _p(.42,.55,1.2,32):new ka(1,1,1),h=zA(t),f=new Mi(u,h);f.position.copy(e),f.scale.set(l[0],l[1],l[2]),f.castShadow=!0,f.receiveShadow=!0,i.add(f);const p=jA(s);return p.position.set(e.x,e.y+1.25,e.z),i.add(p),f}function HA(){const i=Oi.getStoredUser(),e=Ns(i),t=k.useRef(null),[s,a]=k.useState([]),[l,u]=k.useState([]),[h,f]=k.useState([]),[p,g]=k.useState([]),[x,v]=k.useState(""),[S,T]=k.useState(!0),[R,y]=k.useState(""),[M,b]=k.useState(""),E=async(D,L=p)=>{T(!0);const O=Qr(D),A=O?{hotelId:O}:void 0;Promise.all([ot.listDevices(A),ot.listLoginSessions(A)]).then(([U,q])=>{a(U),u(q),f(O?L.filter(j=>j.id===O):L)}).catch(U=>{console.warn(U),y("Donnees live indisponibles, affichage de la topologie de reference.")}).finally(()=>T(!1))};k.useEffect(()=>{ot.listHotels().then(async D=>{g(D);const L=Oa(i,D);v(L),await E(L,D)}).catch(D=>{console.warn(D),y("Donnees live indisponibles, affichage de la topologie de reference."),T(!1)})},[]),k.useEffect(()=>{!x||p.length===0||E(x)},[x]);const w=k.useMemo(()=>{const D=s.filter(U=>U.status==="ONLINE").length,L=s.filter(U=>U.status==="UNSTABLE").length,O=s.filter(U=>U.status==="OFFLINE").length,A=l.filter(U=>U.status==="ONLINE").length;return{online:D,unstable:L,offline:O,activeSessions:A}},[s,l]);return k.useEffect(()=>{var nt;if(!t.current)return;const D=t.current,L=new XE;L.background=new xt(15660024),L.fog=new pp(15660024,32,78);const O=new _i(48,D.clientWidth/D.clientHeight,.1,1e3);O.position.set(9,10,17);let A;try{A=new gA({antialias:!0,alpha:!1}),b("")}catch(et){console.warn(et),b("Affichage 3D indisponible sur ce navigateur, topologie simplifiee affichee."),D.innerHTML="";return}A.setPixelRatio(Math.min(window.devicePixelRatio,2)),A.setSize(D.clientWidth,D.clientHeight),A.outputColorSpace=oi,A.toneMapping=nu,A.toneMappingExposure=.92,A.shadowMap.enabled=!0,A.shadowMap.type=K0,D.innerHTML="",D.appendChild(A.domElement);const U=new xA(O,A.domElement);U.enableDamping=!0,U.dampingFactor=.08,U.maxPolarAngle=Math.PI/2.08,U.minDistance=8,U.maxDistance=42,U.target.set(0,1.2,0);const q=new hT(16777215,14412542,.82);L.add(q);const j=new Xv(16777215,2.15);j.position.set(12,20,9),j.castShadow=!0,j.shadow.mapSize.set(2048,2048),j.shadow.camera.left=-22,j.shadow.camera.right=22,j.shadow.camera.top=18,j.shadow.camera.bottom=-18,L.add(j);const Z=new Xv(9418751,.72);Z.position.set(-14,9,-12),L.add(Z);const H=new Mi(new Yo(34,24,1,1),new _x({color:15265526,roughness:.78,metalness:.02}));H.rotation.x=-Math.PI/2,H.receiveShadow=!0,L.add(H);const Q=new _T(34,22,13358561,14870768);Q.position.y=.01,L.add(Q);const V=new FA(A);V.setPixelRatio(Math.min(window.devicePixelRatio,2)),V.setSize(D.clientWidth,D.clientHeight),V.addPass(new OA(L,O));const F=new La(new Qe(D.clientWidth,D.clientHeight),.14,.28,1.18);V.addPass(F),V.addPass(new BA);const G=x===Gn?"MboaLink multi-établissements":((nt=h[0])==null?void 0:nt.name)||"Établissement MboaLink",X=new J(-11,1.2,0);Fo(L,{position:X,color:339807,label:G,shape:"box",scale:[1.8,2.6,1.8]});const oe=new J(-5.8,1.1,0);Fo(L,{position:oe,color:15909632,label:"Gateway",shape:"box",scale:[1.5,.9,1.2]}),Nc(L,X,oe,339807);const re=s.filter(et=>Oh(et)==="switch"),B=s.filter(et=>Oh(et)==="ap"),te=s.filter(et=>!["switch","ap"].includes(Oh(et))),Pe=re.length?re:te.slice(0,2),Fe=B.length?B:s.slice(0,6),he=(Pe.length?Pe:[{id:"sw-1",model:"Core Switch",status:"ONLINE"}]).slice(0,4).map((et,Ke,ft)=>{const wt=ft.length===1?0:-5+Ke*(10/Math.max(ft.length-1,1)),rt=new J(-.8,1,wt);return Fo(L,{position:rt,color:M0(et.status||"ONLINE"),label:et.model||et.serialNumber||`Switch ${Ke+1}`,shape:"box",scale:[1.5,.62,1]}),Nc(L,oe,rt,2450411),{device:et,pos:rt}}),me=(Fe.length?Fe:[{id:"ap-1",model:"AP Lobby",status:"ONLINE",zone:"Lobby"},{id:"ap-2",model:"AP Rooms",status:"ONLINE",zone:"Rooms"},{id:"ap-3",model:"AP Conference",status:"UNSTABLE",zone:"Conference"}]).slice(0,10).map((et,Ke)=>{var Y;const ft=Ke%2,rt=4+Math.floor(Ke/2)*2.7,Lt=ft===0?-4.7:4.7,Ct=new J(rt,1.05,Lt);Fo(L,{position:Ct,color:M0(et.status||"ONLINE"),label:et.zone||et.model||`AP ${Ke+1}`,shape:"cylinder",scale:[1,1,1]});const rn=((Y=he[Ke%he.length])==null?void 0:Y.pos)||oe;return Nc(L,rn,Ct,9741240),{device:et,pos:Ct}});l.filter(et=>et.status==="ONLINE").slice(0,14).forEach((et,Ke)=>{var Ct,rn;const ft=((Ct=me[Ke%me.length])==null?void 0:Ct.pos)||oe,wt=Ke/14*Math.PI*2,rt=1.35+Ke%3*.35,Lt=new J(ft.x+Math.cos(wt)*rt,.55,ft.z+Math.sin(wt)*rt);Fo(L,{position:Lt,color:8141549,label:et.clientName||((rn=et.room)==null?void 0:rn.name)||"Client",shape:"sphere",scale:[.52,.52,.52]}),Nc(L,ft,Lt,8141549)});let fe=0;const Ae=()=>{fe=requestAnimationFrame(Ae),L.traverse(et=>{var Ke;et.isMesh&&((Ke=et.geometry)==null?void 0:Ke.type)==="CylinderGeometry"&&(et.rotation.y+=.006)}),U.update(),V.render()};Ae();const Xe=()=>{!D.clientWidth||!D.clientHeight||(O.aspect=D.clientWidth/D.clientHeight,O.updateProjectionMatrix(),A.setSize(D.clientWidth,D.clientHeight),V.setSize(D.clientWidth,D.clientHeight))};return window.addEventListener("resize",Xe),()=>{cancelAnimationFrame(fe),window.removeEventListener("resize",Xe),U.dispose(),V.dispose(),A.dispose(),L.traverse(et=>{var Ke,ft,wt,rt;(ft=(Ke=et.geometry)==null?void 0:Ke.dispose)==null||ft.call(Ke),et.material&&(Array.isArray(et.material)?et.material.forEach(Lt=>{var Ct;return(Ct=Lt.dispose)==null?void 0:Ct.call(Lt)}):(rt=(wt=et.material).dispose)==null||rt.call(wt))}),D.innerHTML=""}},[s,l,h,x]),c.jsx(tr,{activePage:"DASHBOARD",activeSubPage:"Network Map",children:c.jsxs("div",{className:"networkMapPage",children:[c.jsxs("div",{className:"networkMapHeader",children:[c.jsxs("div",{children:[c.jsx("p",{className:"networkMapEyebrow",children:"Architecture reseau 3D"}),c.jsx("h1",{children:x===Gn?"Carte reseau multi-établissements":"Carte reseau de l'établissement"}),c.jsx("span",{children:"Gateway, switchs, access points et clients actifs dans une vue interactive."})]}),e&&c.jsxs("select",{className:"networkMapScopeSelect",value:x,onChange:D=>v(D.target.value),children:[c.jsx("option",{value:Gn,children:"Tous les établissement(s)"}),p.map(D=>c.jsx("option",{value:D.id,children:D.name},D.id))]}),c.jsxs("div",{className:"networkMapStats",children:[c.jsx("strong",{children:w.online}),c.jsx("span",{children:"Online"}),c.jsx("strong",{children:w.unstable}),c.jsx("span",{children:"Instables"}),c.jsx("strong",{children:w.activeSessions}),c.jsx("span",{children:"Clients"})]})]}),c.jsxs("div",{className:"networkMapSceneShell",children:[c.jsx("div",{ref:t,className:"networkMapCanvas"}),S&&c.jsx("div",{className:"networkMapLoading",children:"Chargement de la topologie..."}),R&&c.jsx("div",{className:"networkMapNotice",children:R}),M&&c.jsxs("div",{className:"networkMapFallback",children:[c.jsx("div",{className:"fallbackNode hotel",children:"Établissement"}),c.jsx("div",{className:"fallbackLine"}),c.jsx("div",{className:"fallbackNode gateway",children:"Gateway"}),c.jsx("div",{className:"fallbackLine"}),c.jsxs("div",{className:"fallbackCluster",children:[c.jsx("div",{className:"fallbackNode switch",children:"Switch"}),c.jsx("div",{className:"fallbackNode ap",children:"Access Point"}),c.jsx("div",{className:"fallbackNode client",children:"Clients"})]}),c.jsx("p",{children:M})]}),c.jsxs("div",{className:"networkMapLegend",children:[c.jsxs("span",{children:[c.jsx("i",{className:"legendGateway"})," Gateway"]}),c.jsxs("span",{children:[c.jsx("i",{className:"legendOnline"})," Online"]}),c.jsxs("span",{children:[c.jsx("i",{className:"legendWarning"})," Instable"]}),c.jsxs("span",{children:[c.jsx("i",{className:"legendClient"})," Client actif"]})]})]})]})})}function GA({isOpen:i,onClose:e,onSave:t,hotels:s,defaultHotelId:a}){const[l,u]=k.useState({hotelId:a||"",macAddress:"",serialNumber:"",model:"",firmwareVersion:"",localIp:"",zone:"",floor:"",installedAt:""});k.useEffect(()=>{u(p=>({...p,hotelId:a||p.hotelId}))},[a]);const h=(p,g)=>{u(x=>({...x,[p]:g}))},f=()=>{if(!l.hotelId){alert("Sélectionnez un établissement");return}if(!l.macAddress){alert("Veuillez saisir la MAC address");return}t({hotelId:l.hotelId,macAddress:l.macAddress,serialNumber:l.serialNumber||void 0,model:l.model||void 0,firmwareVersion:l.firmwareVersion||void 0,localIp:l.localIp||void 0,zone:l.zone||void 0,floor:l.floor?Number(l.floor):void 0,installedAt:l.installedAt?new Date(l.installedAt).toISOString():void 0})};return i?c.jsx("div",{className:"modalOverlay",onClick:e,children:c.jsxs("div",{className:"modalContent",onClick:p=>p.stopPropagation(),children:[c.jsxs("div",{className:"modalHeader",children:[c.jsx("button",{className:"backBtn",onClick:e,children:"← BACK"}),c.jsxs("div",{className:"modalTitle",children:[c.jsx("h2",{children:"Add Device"}),c.jsx("p",{children:"Ajoutez un point d’accès Wi‑Fi ou un équipement réseau."})]})]}),c.jsx("div",{className:"modalBody",children:c.jsxs("section",{className:"formSection",children:[c.jsx("h3",{className:"sectionTitle",children:"Device Information"}),c.jsxs("div",{className:"formRow",children:[c.jsx("div",{className:"formLabel",children:c.jsx("label",{children:"Établissement *"})}),c.jsxs("select",{value:l.hotelId,onChange:p=>h("hotelId",p.target.value),children:[c.jsx("option",{value:"",children:"Sélectionner un établissement"}),s.map(p=>c.jsx("option",{value:p.id,children:p.name},p.id))]})]}),c.jsxs("div",{className:"formRow",children:[c.jsx("div",{className:"formLabel",children:c.jsx("label",{children:"MAC Address *"})}),c.jsx("input",{type:"text",value:l.macAddress,onChange:p=>h("macAddress",p.target.value),placeholder:"AA:BB:CC:DD:EE:FF"})]}),c.jsxs("div",{className:"formRow",children:[c.jsx("div",{className:"formLabel",children:c.jsx("label",{children:"Serial Number"})}),c.jsx("input",{type:"text",value:l.serialNumber,onChange:p=>h("serialNumber",p.target.value)})]}),c.jsxs("div",{className:"formRow",children:[c.jsx("div",{className:"formLabel",children:c.jsx("label",{children:"Modèle"})}),c.jsx("input",{type:"text",value:l.model,onChange:p=>h("model",p.target.value),placeholder:"Ubiquiti / TP-Link / MikroTik"})]}),c.jsxs("div",{className:"formRow",children:[c.jsx("div",{className:"formLabel",children:c.jsx("label",{children:"Firmware"})}),c.jsx("input",{type:"text",value:l.firmwareVersion,onChange:p=>h("firmwareVersion",p.target.value)})]}),c.jsxs("div",{className:"formRow",children:[c.jsx("div",{className:"formLabel",children:c.jsx("label",{children:"IP Locale"})}),c.jsx("input",{type:"text",value:l.localIp,onChange:p=>h("localIp",p.target.value),placeholder:"192.168.1.10"})]}),c.jsxs("div",{className:"formRow",children:[c.jsx("div",{className:"formLabel",children:c.jsx("label",{children:"Zone"})}),c.jsx("input",{type:"text",value:l.zone,onChange:p=>h("zone",p.target.value),placeholder:"LOBBY / FLOOR-1"})]}),c.jsxs("div",{className:"formRow",children:[c.jsx("div",{className:"formLabel",children:c.jsx("label",{children:"Étage"})}),c.jsx("input",{type:"number",value:l.floor,onChange:p=>h("floor",p.target.value)})]}),c.jsxs("div",{className:"formRow",children:[c.jsx("div",{className:"formLabel",children:c.jsx("label",{children:"Date d'installation"})}),c.jsx("input",{type:"date",value:l.installedAt,onChange:p=>h("installedAt",p.target.value)})]})]})}),c.jsxs("div",{className:"modalFooter",children:[c.jsx("button",{className:"btn btnPrimary",onClick:f,children:"Ajouter"}),c.jsx("button",{className:"btn btnSecondary",onClick:e,children:"Annuler"})]})]})}):null}function VA(){const i=Oi.getStoredUser(),e=Ns(i),[t,s]=k.useState([]),[a,l]=k.useState([]),[u,h]=k.useState(""),[f,p]=k.useState(""),[g,x]=k.useState("all"),[v,S]=k.useState(!0),[T,R]=k.useState(!1),y=async w=>{try{const D=Qr(w),L=await ot.listDevices({hotelId:D,status:g==="all"?void 0:g,search:f||void 0});s(L)}catch(D){alert(D.message||"Impossible de charger les devices")}finally{S(!1)}};k.useEffect(()=>{ot.listHotels().then(w=>{l(w);const D=Oa(i,w);return h(D),y(D)}).catch(w=>alert(w.message||"Impossible de charger les établissement(s)"))},[]),k.useEffect(()=>{u&&y(u)},[u,g]);const M=Ta(u),b=k.useMemo(()=>{const w=f.trim().toLowerCase();return w?t.filter(D=>`${D.macAddress} ${D.model||""} ${D.serialNumber||""}`.toLowerCase().includes(w)):t},[t,f]),E=async w=>{const D=w.model||w.serialNumber||w.macAddress;if(confirm(`Supprimer l'équipement ${D} ?`))try{await ot.deleteDevice(w.id),await y(u)}catch(L){alert(L.message||"Suppression équipement impossible")}};return c.jsxs(tr,{activePage:"DEVICE MANAGER",activeSubPage:"",children:[c.jsxs("div",{className:"deviceManagerPage",children:[c.jsxs("div",{className:"pageHeader",children:[c.jsxs("div",{children:[c.jsx("h1",{className:"pageTitle",children:"Device Manager"}),c.jsx("p",{className:"pageSubtitle",children:"Supervision des équipements WiFi et de leur état."})]}),c.jsx("button",{className:"btn btnPrimary",onClick:()=>R(!0),disabled:!M,title:M?void 0:"Sélectionnez un établissement précis pour ajouter un device",children:"+ Ajouter un device"})]}),c.jsxs("div",{className:"filtersBar",children:[e?c.jsxs("select",{className:"filterSelect",value:u,onChange:w=>h(w.target.value),children:[c.jsx("option",{value:Gn,children:"Tous les établissement(s)"}),a.map(w=>c.jsx("option",{value:w.id,children:w.name},w.id))]}):null,c.jsx("input",{type:"text",className:"searchInput",placeholder:"Rechercher par MAC, modèle, serial...",value:f,onChange:w=>p(w.target.value)}),c.jsxs("select",{className:"filterSelect",value:g,onChange:w=>x(w.target.value),children:[c.jsx("option",{value:"all",children:"Tous les statuts"}),c.jsx("option",{value:"ONLINE",children:"Online"}),c.jsx("option",{value:"OFFLINE",children:"Offline"}),c.jsx("option",{value:"UNSTABLE",children:"Instable"})]})]}),v&&c.jsx("p",{children:"Chargement des équipements..."}),c.jsx("div",{className:"deviceTableWrapper",children:c.jsxs("table",{className:"deviceTable",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"MAC"}),c.jsx("th",{children:"Modèle"}),c.jsx("th",{children:"Firmware"}),c.jsx("th",{children:"Statut"}),c.jsx("th",{children:"Clients"}),c.jsx("th",{children:"Zone"}),c.jsx("th",{children:"Dernier heartbeat"}),c.jsx("th",{children:"Actions"})]})}),c.jsx("tbody",{children:b.map(w=>c.jsxs("tr",{children:[c.jsx("td",{children:w.macAddress}),c.jsx("td",{children:w.model||"-"}),c.jsx("td",{children:w.firmwareVersion||"-"}),c.jsx("td",{children:c.jsx("span",{className:`statusBadge ${String(w.status).toLowerCase()}`,children:w.status})}),c.jsx("td",{children:w.clientsConnected??0}),c.jsx("td",{children:w.zone||"-"}),c.jsx("td",{children:w.lastHeartbeatAt?new Date(w.lastHeartbeatAt).toLocaleString("fr-FR"):"-"}),c.jsxs("td",{children:[c.jsx("button",{className:"actionBtn",onClick:()=>ot.restartDevice(w.id).then(()=>y(u)),children:"Redémarrer"}),c.jsx("button",{className:"actionBtn deleteBtn",onClick:()=>E(w),children:"Supprimer"})]})]},w.id))})]})})]}),c.jsx(GA,{isOpen:T,onClose:()=>R(!1),hotels:a,defaultHotelId:u,onSave:async w=>{try{await ot.createDevice(w),await y(u),R(!1)}catch(D){alert(D.message||"Impossible de créer le device")}}})]})}const E0={ADMIN:"Admins MboaLink",SUPPORT:"Support IT MboaLink",HOTEL_IT:"IT établissement",RECEPTIONIST:"Réceptionnistes"},kh={INFO:"Information",WARNING:"Attention",URGENT:"Urgent"},Bh={title:"",message:"",priority:"INFO",category:"",targetMode:"ALL",hotelId:"",role:"RECEPTIONIST",userIds:[]};function T0(i){return new Date(i).toLocaleString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}function WA(){const i=Oi.getStoredUser(),e=(i==null?void 0:i.role)==="ADMIN"||(i==null?void 0:i.role)==="SUPPORT"||(i==null?void 0:i.role)==="HOTEL_IT",t=(i==null?void 0:i.role)==="HOTEL_IT",[s,a]=k.useState("inbox"),[l,u]=k.useState([]),[h,f]=k.useState([]),[p,g]=k.useState([]),[x,v]=k.useState([]),[S,T]=k.useState(Bh),[R,y]=k.useState(!0),[M,b]=k.useState(!1),[E,w]=k.useState(""),D=async()=>{try{const H=[ot.listNotificationsInbox(),ot.listNotificationRecipients()];e&&H.push(ot.listSentNotifications()),t||H.push(ot.listHotels());const[Q,V,F,G]=await Promise.all(H);u(Q),g(V),e&&f(F||[]),t?(v([]),T(X=>({...X,targetMode:"HOTEL"}))):v((e?G:F)||[])}catch(H){alert(H.message||"Chargement des notifications impossible")}finally{y(!1)}};k.useEffect(()=>{D()},[]);const L=k.useMemo(()=>{const H=E.trim().toLowerCase();return H?l.filter(Q=>{var V,F;return`${Q.title} ${Q.message} ${((V=Q.sender)==null?void 0:V.fullName)||""} ${((F=Q.hotel)==null?void 0:F.name)||""}`.toLowerCase().includes(H)}):l},[l,E]),O=k.useMemo(()=>l.filter(H=>{var Q,V;return!((V=(Q=H.recipients)==null?void 0:Q[0])!=null&&V.readAt)}).length,[l]),A=H=>{T(Q=>({...Q,userIds:Q.userIds.includes(H)?Q.userIds.filter(V=>V!==H):[...Q.userIds,H]}))},U=H=>{T(Q=>({...Q,targetMode:H,userIds:[]}))},q=async H=>{if(H.preventDefault(),!!e){if(S.targetMode==="HOTEL"&&!t&&!S.hotelId){alert("Sélectionnez un établissement.");return}if(S.targetMode==="USERS"&&S.userIds.length===0){alert("Sélectionnez au moins un destinataire.");return}try{b(!0),await ot.createNotification({title:S.title,message:S.message,priority:S.priority,category:S.category,targetMode:S.targetMode,hotelId:S.hotelId,role:S.role,userIds:S.userIds}),T(t?{...Bh,targetMode:"HOTEL"}:Bh),await D(),a("sent")}catch(Q){alert(Q.message||"Envoi impossible")}finally{b(!1)}}},j=async H=>{var Q,V;if(!((V=(Q=H.recipients)==null?void 0:Q[0])!=null&&V.readAt))try{await ot.markNotificationRead(H.id),await D()}catch(F){alert(F.message||"Action impossible")}},Z=h;return c.jsx(tr,{activePage:"NOTIFICATIONS",activeSubPage:"Messages",children:c.jsxs("div",{className:"notificationsPage",children:[c.jsxs("div",{className:"pageHeader",children:[c.jsxs("div",{children:[c.jsx("h1",{className:"pageTitle",children:"Notifications internes"}),c.jsx("p",{className:"pageSubtitle",children:"Messages de service, maintenances, consignes et alertes internes MboaLink."})]}),c.jsxs("div",{className:"notificationCounter",children:[c.jsx("strong",{children:O}),c.jsxs("span",{children:["non lue",O!==1?"s":""]})]})]}),c.jsxs("div",{className:"notificationsGrid",children:[e&&c.jsxs("form",{className:"notificationComposer",onSubmit:q,children:[c.jsx("h2",{children:"Nouveau message"}),c.jsxs("label",{children:["Titre",c.jsx("input",{value:S.title,onChange:H=>T(Q=>({...Q,title:H.target.value})),required:!0,maxLength:140,placeholder:"Ex : Maintenance programmée"})]}),c.jsxs("label",{children:["Message",c.jsx("textarea",{value:S.message,onChange:H=>T(Q=>({...Q,message:H.target.value})),required:!0,maxLength:4e3,rows:6,placeholder:"Détaillez la consigne ou l'incident..."})]}),c.jsxs("div",{className:"notificationFormRow",children:[c.jsxs("label",{children:["Priorité",c.jsx("select",{value:S.priority,onChange:H=>T(Q=>({...Q,priority:H.target.value})),children:Object.entries(kh).map(([H,Q])=>c.jsx("option",{value:H,children:Q},H))})]}),c.jsxs("label",{children:["Catégorie",c.jsx("input",{value:S.category,onChange:H=>T(Q=>({...Q,category:H.target.value})),placeholder:"Maintenance, incident..."})]})]}),c.jsxs("label",{children:["Destinataires",c.jsxs("select",{value:S.targetMode,onChange:H=>U(H.target.value),disabled:t,children:[!t&&c.jsx("option",{value:"ALL",children:"Tous les acteurs"}),c.jsx("option",{value:"HOTEL",children:t?"Réceptionnistes de mon établissement":"Acteurs d’un établissement"}),!t&&c.jsx("option",{value:"ROLE",children:"Un rôle précis"}),c.jsx("option",{value:"USERS",children:"Utilisateurs précis"})]})]}),S.targetMode==="HOTEL"&&!t&&c.jsxs("label",{children:["Établissement",c.jsxs("select",{value:S.hotelId,onChange:H=>T(Q=>({...Q,hotelId:H.target.value})),required:!0,children:[c.jsx("option",{value:"",children:"Sélectionner un établissement"}),x.map(H=>c.jsx("option",{value:H.id,children:H.name},H.id))]})]}),S.targetMode==="ROLE"&&c.jsxs("label",{children:["Rôle",c.jsx("select",{value:S.role,onChange:H=>T(Q=>({...Q,role:H.target.value})),children:Object.entries(E0).map(([H,Q])=>c.jsx("option",{value:H,children:Q},H))})]}),S.targetMode==="USERS"&&c.jsx("div",{className:"recipientPicker",children:p.map(H=>{var Q;return c.jsxs("label",{className:"recipientOption",children:[c.jsx("input",{type:"checkbox",checked:S.userIds.includes(H.id),onChange:()=>A(H.id)}),c.jsxs("span",{children:[c.jsx("strong",{children:H.fullName}),c.jsxs("small",{children:[E0[H.role]||H.role,(Q=H.hotel)!=null&&Q.name?` - ${H.hotel.name}`:""]})]})]},H.id)})}),c.jsx("button",{className:"btn btnPrimary",disabled:M,children:M?"Envoi...":"Envoyer la notification"})]}),c.jsxs("section",{className:"notificationPanel",children:[c.jsxs("div",{className:"notificationTabs",children:[c.jsx("button",{type:"button",className:s==="inbox"?"active":"",onClick:()=>a("inbox"),children:"Réception"}),e&&c.jsx("button",{type:"button",className:s==="sent"?"active":"",onClick:()=>a("sent"),children:"Envoyés"}),c.jsx("input",{value:E,onChange:H=>w(H.target.value),placeholder:"Rechercher..."})]}),R&&c.jsx("p",{className:"notificationEmpty",children:"Chargement..."}),!R&&s==="inbox"&&c.jsx("div",{className:"notificationList",children:L.length===0?c.jsx("p",{className:"notificationEmpty",children:"Aucune notification reçue."}):L.map(H=>{var V,F,G,X;const Q=!((F=(V=H.recipients)==null?void 0:V[0])!=null&&F.readAt);return c.jsxs("article",{className:`notificationItem ${H.priority.toLowerCase()} ${Q?"unread":""}`,children:[c.jsxs("div",{className:"notificationItemTop",children:[c.jsx("span",{className:`priorityBadge ${H.priority.toLowerCase()}`,children:kh[H.priority]}),c.jsx("small",{children:T0(H.createdAt)})]}),c.jsx("h3",{children:H.title}),c.jsx("p",{children:H.message}),c.jsxs("div",{className:"notificationMeta",children:[c.jsxs("span",{children:["De : ",((G=H.sender)==null?void 0:G.fullName)||"Système"]}),((X=H.hotel)==null?void 0:X.name)&&c.jsxs("span",{children:["Établissement : ",H.hotel.name]}),H.category&&c.jsx("span",{children:H.category})]}),Q&&c.jsx("button",{type:"button",className:"markReadBtn",onClick:()=>j(H),children:"Marquer comme lu"})]},H.id)})}),!R&&s==="sent"&&e&&c.jsx("div",{className:"notificationList",children:Z.length===0?c.jsx("p",{className:"notificationEmpty",children:"Aucun message envoyé."}):Z.map(H=>{var Q;return c.jsxs("article",{className:`notificationItem ${H.priority.toLowerCase()}`,children:[c.jsxs("div",{className:"notificationItemTop",children:[c.jsx("span",{className:`priorityBadge ${H.priority.toLowerCase()}`,children:kh[H.priority]}),c.jsx("small",{children:T0(H.createdAt)})]}),c.jsx("h3",{children:H.title}),c.jsx("p",{children:H.message}),c.jsxs("div",{className:"notificationMeta",children:[c.jsxs("span",{children:[H.recipients.length," destinataire",H.recipients.length!==1?"s":""]}),((Q=H.hotel)==null?void 0:Q.name)&&c.jsxs("span",{children:["Établissement : ",H.hotel.name]})]})]},H.id)})})]})]})]})})}function XA(i){return i==="RECEPTIONIST"?it.public.manualLogin:i==="ADMIN"?it.public.adminMboa:i==="SUPPORT"||i==="HOTEL_IT"?it.public.dashboard:it.public.home}function Dn({children:i,allowedRoles:e}){const t=Zf(),s=ki();if(!t){const a=`${s.pathname}${s.search}`;return c.jsx(Es,{to:`${it.public.login}?redirect=${encodeURIComponent(a)}`,replace:!0})}return e!=null&&e.length&&!e.includes(t.role)?c.jsx(Es,{to:XA(t.role),replace:!0}):i}const w0=`${window.location.protocol}//${window.location.hostname}:5174`;function b0({to:i}){return k.useEffect(()=>{window.location.replace(i)},[i]),null}const $A=()=>c.jsx(HS,{children:c.jsxs(xS,{children:[c.jsx(ln,{path:it.public.login,element:c.jsx(nM,{})}),c.jsx(ln,{path:it.public.mfa,element:c.jsx(CM,{})}),c.jsx(ln,{path:it.public.home,element:c.jsx(Dn,{children:c.jsx(OM,{})})}),c.jsx(ln,{path:it.public.dashboard,element:c.jsx(Dn,{allowedRoles:["SUPPORT","HOTEL_IT"],children:c.jsx(YM,{})})}),c.jsx(ln,{path:it.public.networkMap,element:c.jsx(Dn,{allowedRoles:["SUPPORT","HOTEL_IT"],children:c.jsx(HA,{})})}),c.jsx(ln,{path:it.public.devices,element:c.jsx(Dn,{allowedRoles:["ADMIN","HOTEL_IT"],children:c.jsx(VA,{})})}),c.jsx(ln,{path:it.public.wifiCode,element:c.jsx(Dn,{allowedRoles:["SUPPORT","HOTEL_IT"],children:c.jsx(Y0,{})})}),c.jsx(ln,{path:it.public.loginByAddress,element:c.jsx(Dn,{allowedRoles:["SUPPORT"],children:c.jsx(kM,{})})}),c.jsx(ln,{path:it.public.statusLogins,element:c.jsx(Dn,{allowedRoles:["SUPPORT","HOTEL_IT"],children:c.jsx(BM,{})})}),c.jsx(ln,{path:it.public.manualLogin,element:c.jsx(Dn,{allowedRoles:["SUPPORT","RECEPTIONIST"],children:c.jsx(HM,{})})}),c.jsx(ln,{path:it.public.websitesManager,element:c.jsx(Dn,{allowedRoles:["SUPPORT","HOTEL_IT"],children:c.jsx(GM,{})})}),c.jsx(ln,{path:it.public.configCode,element:c.jsx(Dn,{allowedRoles:["SUPPORT"],children:c.jsx(VM,{})})}),c.jsx(ln,{path:it.public.hotels,element:c.jsx(Dn,{allowedRoles:["ADMIN"],children:c.jsx(Es,{to:it.public.adminMboa,replace:!0})})}),c.jsx(ln,{path:it.public.rooms,element:c.jsx(Dn,{allowedRoles:["ADMIN"],children:c.jsx(Es,{to:it.public.adminMboa,replace:!0})})}),c.jsx(ln,{path:it.public.configWifi,element:c.jsx(Dn,{allowedRoles:["ADMIN"],children:c.jsx(Es,{to:it.public.adminMboa,replace:!0})})}),c.jsx(ln,{path:it.public.adminMboa,element:c.jsx(Dn,{allowedRoles:["ADMIN"],children:c.jsx(b0,{to:w0})})}),c.jsx(ln,{path:it.public.users,element:c.jsx(Dn,{allowedRoles:["ADMIN"],children:c.jsx(b0,{to:w0})})}),c.jsx(ln,{path:it.public.notifications,element:c.jsx(Dn,{allowedRoles:["SUPPORT","HOTEL_IT","RECEPTIONIST"],children:c.jsx(WA,{})})}),c.jsx(ln,{path:"/",element:c.jsx(Es,{to:it.public.login,replace:!0})}),c.jsx(ln,{path:"*",element:c.jsx(Es,{to:it.public.login,replace:!0})})]})});function qA(){return c.jsx($A,{})}Sy.createRoot(document.getElementById("root")).render(c.jsx(py.StrictMode,{children:c.jsx(qA,{})}));
