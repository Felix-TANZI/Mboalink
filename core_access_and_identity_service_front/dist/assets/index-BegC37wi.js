var wy=Object.defineProperty;var Ty=(i,e,t)=>e in i?wy(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Hd=(i,e,t)=>Ty(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=t(o);fetch(o.href,c)}})();function Uv(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Vd={exports:{}},bo={},Gd={exports:{}},Tt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qg;function Cy(){if(Qg)return Tt;Qg=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.iterator;function x(z){return z===null||typeof z!="object"?null:(z=g&&z[g]||z["@@iterator"],typeof z=="function"?z:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function S(z,se,Pe){this.props=z,this.context=se,this.refs=T,this.updater=Pe||y}S.prototype.isReactComponent={},S.prototype.setState=function(z,se){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,se,"setState")},S.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function _(){}_.prototype=S.prototype;function w(z,se,Pe){this.props=z,this.context=se,this.refs=T,this.updater=Pe||y}var b=w.prototype=new _;b.constructor=w,E(b,S.prototype),b.isPureReactComponent=!0;var N=Array.isArray,I=Object.prototype.hasOwnProperty,L={current:null},B={key:!0,ref:!0,__self:!0,__source:!0};function C(z,se,Pe){var be,Ne={},q=null,me=null;if(se!=null)for(be in se.ref!==void 0&&(me=se.ref),se.key!==void 0&&(q=""+se.key),se)I.call(se,be)&&!B.hasOwnProperty(be)&&(Ne[be]=se[be]);var fe=arguments.length-2;if(fe===1)Ne.children=Pe;else if(1<fe){for(var xe=Array(fe),Ce=0;Ce<fe;Ce++)xe[Ce]=arguments[Ce+2];Ne.children=xe}if(z&&z.defaultProps)for(be in fe=z.defaultProps,fe)Ne[be]===void 0&&(Ne[be]=fe[be]);return{$$typeof:i,type:z,key:q,ref:me,props:Ne,_owner:L.current}}function O(z,se){return{$$typeof:i,type:z.type,key:se,ref:z.ref,props:z.props,_owner:z._owner}}function Y(z){return typeof z=="object"&&z!==null&&z.$$typeof===i}function V(z){var se={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(Pe){return se[Pe]})}var Q=/\/+/g;function G(z,se){return typeof z=="object"&&z!==null&&z.key!=null?V(""+z.key):se.toString(36)}function ee(z,se,Pe,be,Ne){var q=typeof z;(q==="undefined"||q==="boolean")&&(z=null);var me=!1;if(z===null)me=!0;else switch(q){case"string":case"number":me=!0;break;case"object":switch(z.$$typeof){case i:case e:me=!0}}if(me)return me=z,Ne=Ne(me),z=be===""?"."+G(me,0):be,N(Ne)?(Pe="",z!=null&&(Pe=z.replace(Q,"$&/")+"/"),ee(Ne,se,Pe,"",function(Ce){return Ce})):Ne!=null&&(Y(Ne)&&(Ne=O(Ne,Pe+(!Ne.key||me&&me.key===Ne.key?"":(""+Ne.key).replace(Q,"$&/")+"/")+z)),se.push(Ne)),1;if(me=0,be=be===""?".":be+":",N(z))for(var fe=0;fe<z.length;fe++){q=z[fe];var xe=be+G(q,fe);me+=ee(q,se,Pe,xe,Ne)}else if(xe=x(z),typeof xe=="function")for(z=xe.call(z),fe=0;!(q=z.next()).done;)q=q.value,xe=be+G(q,fe++),me+=ee(q,se,Pe,xe,Ne);else if(q==="object")throw se=String(z),Error("Objects are not valid as a React child (found: "+(se==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":se)+"). If you meant to render a collection of children, use an array instead.");return me}function F(z,se,Pe){if(z==null)return z;var be=[],Ne=0;return ee(z,be,"","",function(q){return se.call(Pe,q,Ne++)}),be}function U(z){if(z._status===-1){var se=z._result;se=se(),se.then(function(Pe){(z._status===0||z._status===-1)&&(z._status=1,z._result=Pe)},function(Pe){(z._status===0||z._status===-1)&&(z._status=2,z._result=Pe)}),z._status===-1&&(z._status=0,z._result=se)}if(z._status===1)return z._result.default;throw z._result}var W={current:null},$={transition:null},X={ReactCurrentDispatcher:W,ReactCurrentBatchConfig:$,ReactCurrentOwner:L};function te(){throw Error("act(...) is not supported in production builds of React.")}return Tt.Children={map:F,forEach:function(z,se,Pe){F(z,function(){se.apply(this,arguments)},Pe)},count:function(z){var se=0;return F(z,function(){se++}),se},toArray:function(z){return F(z,function(se){return se})||[]},only:function(z){if(!Y(z))throw Error("React.Children.only expected to receive a single React element child.");return z}},Tt.Component=S,Tt.Fragment=t,Tt.Profiler=o,Tt.PureComponent=w,Tt.StrictMode=r,Tt.Suspense=f,Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X,Tt.act=te,Tt.cloneElement=function(z,se,Pe){if(z==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+z+".");var be=E({},z.props),Ne=z.key,q=z.ref,me=z._owner;if(se!=null){if(se.ref!==void 0&&(q=se.ref,me=L.current),se.key!==void 0&&(Ne=""+se.key),z.type&&z.type.defaultProps)var fe=z.type.defaultProps;for(xe in se)I.call(se,xe)&&!B.hasOwnProperty(xe)&&(be[xe]=se[xe]===void 0&&fe!==void 0?fe[xe]:se[xe])}var xe=arguments.length-2;if(xe===1)be.children=Pe;else if(1<xe){fe=Array(xe);for(var Ce=0;Ce<xe;Ce++)fe[Ce]=arguments[Ce+2];be.children=fe}return{$$typeof:i,type:z.type,key:Ne,ref:q,props:be,_owner:me}},Tt.createContext=function(z){return z={$$typeof:u,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},z.Provider={$$typeof:c,_context:z},z.Consumer=z},Tt.createElement=C,Tt.createFactory=function(z){var se=C.bind(null,z);return se.type=z,se},Tt.createRef=function(){return{current:null}},Tt.forwardRef=function(z){return{$$typeof:h,render:z}},Tt.isValidElement=Y,Tt.lazy=function(z){return{$$typeof:v,_payload:{_status:-1,_result:z},_init:U}},Tt.memo=function(z,se){return{$$typeof:p,type:z,compare:se===void 0?null:se}},Tt.startTransition=function(z){var se=$.transition;$.transition={};try{z()}finally{$.transition=se}},Tt.unstable_act=te,Tt.useCallback=function(z,se){return W.current.useCallback(z,se)},Tt.useContext=function(z){return W.current.useContext(z)},Tt.useDebugValue=function(){},Tt.useDeferredValue=function(z){return W.current.useDeferredValue(z)},Tt.useEffect=function(z,se){return W.current.useEffect(z,se)},Tt.useId=function(){return W.current.useId()},Tt.useImperativeHandle=function(z,se,Pe){return W.current.useImperativeHandle(z,se,Pe)},Tt.useInsertionEffect=function(z,se){return W.current.useInsertionEffect(z,se)},Tt.useLayoutEffect=function(z,se){return W.current.useLayoutEffect(z,se)},Tt.useMemo=function(z,se){return W.current.useMemo(z,se)},Tt.useReducer=function(z,se,Pe){return W.current.useReducer(z,se,Pe)},Tt.useRef=function(z){return W.current.useRef(z)},Tt.useState=function(z){return W.current.useState(z)},Tt.useSyncExternalStore=function(z,se,Pe){return W.current.useSyncExternalStore(z,se,Pe)},Tt.useTransition=function(){return W.current.useTransition()},Tt.version="18.3.1",Tt}var ex;function ep(){return ex||(ex=1,Gd.exports=Cy()),Gd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tx;function Ny(){if(tx)return bo;tx=1;var i=ep(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(h,f,p){var v,g={},x=null,y=null;p!==void 0&&(x=""+p),f.key!==void 0&&(x=""+f.key),f.ref!==void 0&&(y=f.ref);for(v in f)r.call(f,v)&&!c.hasOwnProperty(v)&&(g[v]=f[v]);if(h&&h.defaultProps)for(v in f=h.defaultProps,f)g[v]===void 0&&(g[v]=f[v]);return{$$typeof:e,type:h,key:x,ref:y,props:g,_owner:o.current}}return bo.Fragment=t,bo.jsx=u,bo.jsxs=u,bo}var nx;function Ay(){return nx||(nx=1,Vd.exports=Ny()),Vd.exports}var a=Ay(),D=ep();const Ry=Uv(D);var ec={},Wd={exports:{}},ei={},Xd={exports:{}},qd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ix;function Py(){return ix||(ix=1,(function(i){function e($,X){var te=$.length;$.push(X);e:for(;0<te;){var z=te-1>>>1,se=$[z];if(0<o(se,X))$[z]=X,$[te]=se,te=z;else break e}}function t($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var X=$[0],te=$.pop();if(te!==X){$[0]=te;e:for(var z=0,se=$.length,Pe=se>>>1;z<Pe;){var be=2*(z+1)-1,Ne=$[be],q=be+1,me=$[q];if(0>o(Ne,te))q<se&&0>o(me,Ne)?($[z]=me,$[q]=te,z=q):($[z]=Ne,$[be]=te,z=be);else if(q<se&&0>o(me,te))$[z]=me,$[q]=te,z=q;else break e}}return X}function o($,X){var te=$.sortIndex-X.sortIndex;return te!==0?te:$.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;i.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();i.unstable_now=function(){return u.now()-h}}var f=[],p=[],v=1,g=null,x=3,y=!1,E=!1,T=!1,S=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b($){for(var X=t(p);X!==null;){if(X.callback===null)r(p);else if(X.startTime<=$)r(p),X.sortIndex=X.expirationTime,e(f,X);else break;X=t(p)}}function N($){if(T=!1,b($),!E)if(t(f)!==null)E=!0,U(I);else{var X=t(p);X!==null&&W(N,X.startTime-$)}}function I($,X){E=!1,T&&(T=!1,_(C),C=-1),y=!0;var te=x;try{for(b(X),g=t(f);g!==null&&(!(g.expirationTime>X)||$&&!V());){var z=g.callback;if(typeof z=="function"){g.callback=null,x=g.priorityLevel;var se=z(g.expirationTime<=X);X=i.unstable_now(),typeof se=="function"?g.callback=se:g===t(f)&&r(f),b(X)}else r(f);g=t(f)}if(g!==null)var Pe=!0;else{var be=t(p);be!==null&&W(N,be.startTime-X),Pe=!1}return Pe}finally{g=null,x=te,y=!1}}var L=!1,B=null,C=-1,O=5,Y=-1;function V(){return!(i.unstable_now()-Y<O)}function Q(){if(B!==null){var $=i.unstable_now();Y=$;var X=!0;try{X=B(!0,$)}finally{X?G():(L=!1,B=null)}}else L=!1}var G;if(typeof w=="function")G=function(){w(Q)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,F=ee.port2;ee.port1.onmessage=Q,G=function(){F.postMessage(null)}}else G=function(){S(Q,0)};function U($){B=$,L||(L=!0,G())}function W($,X){C=S(function(){$(i.unstable_now())},X)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function($){$.callback=null},i.unstable_continueExecution=function(){E||y||(E=!0,U(I))},i.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<$?Math.floor(1e3/$):5},i.unstable_getCurrentPriorityLevel=function(){return x},i.unstable_getFirstCallbackNode=function(){return t(f)},i.unstable_next=function($){switch(x){case 1:case 2:case 3:var X=3;break;default:X=x}var te=x;x=X;try{return $()}finally{x=te}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function($,X){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var te=x;x=$;try{return X()}finally{x=te}},i.unstable_scheduleCallback=function($,X,te){var z=i.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?z+te:z):te=z,$){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=te+se,$={id:v++,callback:X,priorityLevel:$,startTime:te,expirationTime:se,sortIndex:-1},te>z?($.sortIndex=te,e(p,$),t(f)===null&&$===t(p)&&(T?(_(C),C=-1):T=!0,W(N,te-z))):($.sortIndex=se,e(f,$),E||y||(E=!0,U(I))),$},i.unstable_shouldYield=V,i.unstable_wrapCallback=function($){var X=x;return function(){var te=x;x=X;try{return $.apply(this,arguments)}finally{x=te}}}})(qd)),qd}var sx;function Ly(){return sx||(sx=1,Xd.exports=Py()),Xd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rx;function Iy(){if(rx)return ei;rx=1;var i=ep(),e=Ly();function t(n){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function c(n,s){u(n,s),u(n+"Capture",s)}function u(n,s){for(o[n]=s,n=0;n<s.length;n++)r.add(s[n])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},g={};function x(n){return f.call(g,n)?!0:f.call(v,n)?!1:p.test(n)?g[n]=!0:(v[n]=!0,!1)}function y(n,s,l,d){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return d?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,s,l,d){if(s===null||typeof s>"u"||y(n,s,l,d))return!0;if(d)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function T(n,s,l,d,m,M,R){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=d,this.attributeNamespace=m,this.mustUseProperty=l,this.propertyName=n,this.type=s,this.sanitizeURL=M,this.removeEmptyString=R}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new T(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var s=n[0];S[s]=new T(s,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new T(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new T(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new T(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new T(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new T(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new T(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new T(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function w(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var s=n.replace(_,w);S[s]=new T(s,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var s=n.replace(_,w);S[s]=new T(s,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var s=n.replace(_,w);S[s]=new T(s,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new T(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new T(n,1,!1,n.toLowerCase(),null,!0,!0)});function b(n,s,l,d){var m=S.hasOwnProperty(s)?S[s]:null;(m!==null?m.type!==0:d||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(E(s,l,m,d)&&(l=null),d||m===null?x(s)&&(l===null?n.removeAttribute(s):n.setAttribute(s,""+l)):m.mustUseProperty?n[m.propertyName]=l===null?m.type===3?!1:"":l:(s=m.attributeName,d=m.attributeNamespace,l===null?n.removeAttribute(s):(m=m.type,l=m===3||m===4&&l===!0?"":""+l,d?n.setAttributeNS(d,s,l):n.setAttribute(s,l))))}var N=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),L=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),Y=Symbol.for("react.provider"),V=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),ee=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),W=Symbol.for("react.offscreen"),$=Symbol.iterator;function X(n){return n===null||typeof n!="object"?null:(n=$&&n[$]||n["@@iterator"],typeof n=="function"?n:null)}var te=Object.assign,z;function se(n){if(z===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);z=s&&s[1]||""}return`
`+z+n}var Pe=!1;function be(n,s){if(!n||Pe)return"";Pe=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(pe){var d=pe}Reflect.construct(n,[],s)}else{try{s.call()}catch(pe){d=pe}n.call(s.prototype)}else{try{throw Error()}catch(pe){d=pe}n()}}catch(pe){if(pe&&d&&typeof pe.stack=="string"){for(var m=pe.stack.split(`
`),M=d.stack.split(`
`),R=m.length-1,H=M.length-1;1<=R&&0<=H&&m[R]!==M[H];)H--;for(;1<=R&&0<=H;R--,H--)if(m[R]!==M[H]){if(R!==1||H!==1)do if(R--,H--,0>H||m[R]!==M[H]){var Z=`
`+m[R].replace(" at new "," at ");return n.displayName&&Z.includes("<anonymous>")&&(Z=Z.replace("<anonymous>",n.displayName)),Z}while(1<=R&&0<=H);break}}}finally{Pe=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?se(n):""}function Ne(n){switch(n.tag){case 5:return se(n.type);case 16:return se("Lazy");case 13:return se("Suspense");case 19:return se("SuspenseList");case 0:case 2:case 15:return n=be(n.type,!1),n;case 11:return n=be(n.type.render,!1),n;case 1:return n=be(n.type,!0),n;default:return""}}function q(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case B:return"Fragment";case L:return"Portal";case O:return"Profiler";case C:return"StrictMode";case G:return"Suspense";case ee:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case V:return(n.displayName||"Context")+".Consumer";case Y:return(n._context.displayName||"Context")+".Provider";case Q:var s=n.render;return n=n.displayName,n||(n=s.displayName||s.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case F:return s=n.displayName||null,s!==null?s:q(n.type)||"Memo";case U:s=n._payload,n=n._init;try{return q(n(s))}catch{}}return null}function me(n){var s=n.type;switch(n.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=s.render,n=n.displayName||n.name||"",s.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return q(s);case 8:return s===C?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function fe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function xe(n){var s=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Ce(n){var s=xe(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,s),d=""+n[s];if(!n.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var m=l.get,M=l.set;return Object.defineProperty(n,s,{configurable:!0,get:function(){return m.call(this)},set:function(R){d=""+R,M.call(this,R)}}),Object.defineProperty(n,s,{enumerable:l.enumerable}),{getValue:function(){return d},setValue:function(R){d=""+R},stopTracking:function(){n._valueTracker=null,delete n[s]}}}}function He(n){n._valueTracker||(n._valueTracker=Ce(n))}function Et(n){if(!n)return!1;var s=n._valueTracker;if(!s)return!0;var l=s.getValue(),d="";return n&&(d=xe(n)?n.checked?"true":"false":n.value),n=d,n!==l?(s.setValue(n),!0):!1}function it(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function et(n,s){var l=s.checked;return te({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function _t(n,s){var l=s.defaultValue==null?"":s.defaultValue,d=s.checked!=null?s.checked:s.defaultChecked;l=fe(s.value!=null?s.value:l),n._wrapperState={initialChecked:d,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function ht(n,s){s=s.checked,s!=null&&b(n,"checked",s,!1)}function kt(n,s){ht(n,s);var l=fe(s.value),d=s.type;if(l!=null)d==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(d==="submit"||d==="reset"){n.removeAttribute("value");return}s.hasOwnProperty("value")?hn(n,s.type,l):s.hasOwnProperty("defaultValue")&&hn(n,s.type,fe(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(n.defaultChecked=!!s.defaultChecked)}function Bt(n,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var d=s.type;if(!(d!=="submit"&&d!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+n._wrapperState.initialValue,l||s===n.value||(n.value=s),n.defaultValue=s}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function hn(n,s,l){(s!=="number"||it(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var ne=Array.isArray;function zt(n,s,l,d){if(n=n.options,s){s={};for(var m=0;m<l.length;m++)s["$"+l[m]]=!0;for(l=0;l<n.length;l++)m=s.hasOwnProperty("$"+n[l].value),n[l].selected!==m&&(n[l].selected=m),m&&d&&(n[l].defaultSelected=!0)}else{for(l=""+fe(l),s=null,m=0;m<n.length;m++){if(n[m].value===l){n[m].selected=!0,d&&(n[m].defaultSelected=!0);return}s!==null||n[m].disabled||(s=n[m])}s!==null&&(s.selected=!0)}}function pt(n,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return te({},s,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Dt(n,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(ne(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}n._wrapperState={initialValue:fe(l)}}function Oe(n,s){var l=fe(s.value),d=fe(s.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),s.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),d!=null&&(n.defaultValue=""+d)}function Gt(n){var s=n.textContent;s===n._wrapperState.initialValue&&s!==""&&s!==null&&(n.value=s)}function j(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function A(n,s){return n==null||n==="http://www.w3.org/1999/xhtml"?j(s):n==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var oe,_e=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,d,m){MSApp.execUnsafeLocalFunction(function(){return n(s,l,d,m)})}:n})(function(n,s){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=s;else{for(oe=oe||document.createElement("div"),oe.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=oe.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;s.firstChild;)n.appendChild(s.firstChild)}});function Ee(n,s){if(s){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=s;return}}n.textContent=s}var Re={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ue=["Webkit","ms","Moz","O"];Object.keys(Re).forEach(function(n){Ue.forEach(function(s){s=s+n.charAt(0).toUpperCase()+n.substring(1),Re[s]=Re[n]})});function ge(n,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||Re.hasOwnProperty(n)&&Re[n]?(""+s).trim():s+"px"}function ye(n,s){n=n.style;for(var l in s)if(s.hasOwnProperty(l)){var d=l.indexOf("--")===0,m=ge(l,s[l],d);l==="float"&&(l="cssFloat"),d?n.setProperty(l,m):n[l]=m}}var ke=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function k(n,s){if(s){if(ke[n]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function K(n,s){if(n.indexOf("-")===-1)return typeof s.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Me=null;function $e(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var rt=null,ft=null,J=null;function Le(n){if(n=lo(n)){if(typeof rt!="function")throw Error(t(280));var s=n.stateNode;s&&(s=ml(s),rt(n.stateNode,n.type,s))}}function ve(n){ft?J?J.push(n):J=[n]:ft=n}function ze(){if(ft){var n=ft,s=J;if(J=ft=null,Le(n),s)for(n=0;n<s.length;n++)Le(s[n])}}function Ie(n,s){return n(s)}function Se(){}var Xe=!1;function ct(n,s,l){if(Xe)return n(s,l);Xe=!0;try{return Ie(n,s,l)}finally{Xe=!1,(ft!==null||J!==null)&&(Se(),ze())}}function st(n,s){var l=n.stateNode;if(l===null)return null;var d=ml(l);if(d===null)return null;l=d[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(n=n.type,d=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!d;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var bt=!1;if(h)try{var On={};Object.defineProperty(On,"passive",{get:function(){bt=!0}}),window.addEventListener("test",On,On),window.removeEventListener("test",On,On)}catch{bt=!1}function di(n,s,l,d,m,M,R,H,Z){var pe=Array.prototype.slice.call(arguments,3);try{s.apply(l,pe)}catch(Te){this.onError(Te)}}var is=!1,Ur=null,cr=!1,Fr=null,ss={onError:function(n){is=!0,Ur=n}};function za(n,s,l,d,m,M,R,H,Z){is=!1,Ur=null,di.apply(ss,arguments)}function Jo(n,s,l,d,m,M,R,H,Z){if(za.apply(this,arguments),is){if(is){var pe=Ur;is=!1,Ur=null}else throw Error(t(198));cr||(cr=!0,Fr=pe)}}function ki(n){var s=n,l=n;if(n.alternate)for(;s.return;)s=s.return;else{n=s;do s=n,(s.flags&4098)!==0&&(l=s.return),n=s.return;while(n)}return s.tag===3?l:null}function ur(n){if(n.tag===13){var s=n.memoizedState;if(s===null&&(n=n.alternate,n!==null&&(s=n.memoizedState)),s!==null)return s.dehydrated}return null}function Ha(n){if(ki(n)!==n)throw Error(t(188))}function Or(n){var s=n.alternate;if(!s){if(s=ki(n),s===null)throw Error(t(188));return s!==n?null:n}for(var l=n,d=s;;){var m=l.return;if(m===null)break;var M=m.alternate;if(M===null){if(d=m.return,d!==null){l=d;continue}break}if(m.child===M.child){for(M=m.child;M;){if(M===l)return Ha(m),n;if(M===d)return Ha(m),s;M=M.sibling}throw Error(t(188))}if(l.return!==d.return)l=m,d=M;else{for(var R=!1,H=m.child;H;){if(H===l){R=!0,l=m,d=M;break}if(H===d){R=!0,d=m,l=M;break}H=H.sibling}if(!R){for(H=M.child;H;){if(H===l){R=!0,l=M,d=m;break}if(H===d){R=!0,d=M,l=m;break}H=H.sibling}if(!R)throw Error(t(189))}}if(l.alternate!==d)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:s}function Va(n){return n=Or(n),n!==null?Ga(n):null}function Ga(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var s=Ga(n);if(s!==null)return s;n=n.sibling}return null}var Qo=e.unstable_scheduleCallback,el=e.unstable_cancelCallback,du=e.unstable_shouldYield,hu=e.unstable_requestPaint,en=e.unstable_now,fu=e.unstable_getCurrentPriorityLevel,Wa=e.unstable_ImmediatePriority,P=e.unstable_UserBlockingPriority,re=e.unstable_NormalPriority,he=e.unstable_LowPriority,ue=e.unstable_IdlePriority,ce=null,Fe=null;function qe(n){if(Fe&&typeof Fe.onCommitFiberRoot=="function")try{Fe.onCommitFiberRoot(ce,n,void 0,(n.current.flags&128)===128)}catch{}}var je=Math.clz32?Math.clz32:gt,Ze=Math.log,nt=Math.LN2;function gt(n){return n>>>=0,n===0?32:31-(Ze(n)/nt|0)|0}var xt=64,Qe=4194304;function Rt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Wt(n,s){var l=n.pendingLanes;if(l===0)return 0;var d=0,m=n.suspendedLanes,M=n.pingedLanes,R=l&268435455;if(R!==0){var H=R&~m;H!==0?d=Rt(H):(M&=R,M!==0&&(d=Rt(M)))}else R=l&~m,R!==0?d=Rt(R):M!==0&&(d=Rt(M));if(d===0)return 0;if(s!==0&&s!==d&&(s&m)===0&&(m=d&-d,M=s&-s,m>=M||m===16&&(M&4194240)!==0))return s;if((d&4)!==0&&(d|=l&16),s=n.entangledLanes,s!==0)for(n=n.entanglements,s&=d;0<s;)l=31-je(s),m=1<<l,d|=n[l],s&=~m;return d}function Zt(n,s){switch(n){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ut(n,s){for(var l=n.suspendedLanes,d=n.pingedLanes,m=n.expirationTimes,M=n.pendingLanes;0<M;){var R=31-je(M),H=1<<R,Z=m[R];Z===-1?((H&l)===0||(H&d)!==0)&&(m[R]=Zt(H,s)):Z<=s&&(n.expiredLanes|=H),M&=~H}}function cn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ve(){var n=xt;return xt<<=1,(xt&4194240)===0&&(xt=64),n}function wn(n){for(var s=[],l=0;31>l;l++)s.push(n);return s}function St(n,s,l){n.pendingLanes|=s,s!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,s=31-je(s),n[s]=l}function qn(n,s){var l=n.pendingLanes&~s;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=s,n.mutableReadLanes&=s,n.entangledLanes&=s,s=n.entanglements;var d=n.eventTimes;for(n=n.expirationTimes;0<l;){var m=31-je(l),M=1<<m;s[m]=0,d[m]=-1,n[m]=-1,l&=~M}}function $n(n,s){var l=n.entangledLanes|=s;for(n=n.entanglements;l;){var d=31-je(l),m=1<<d;m&s|n[d]&s&&(n[d]|=s),l&=~m}}var wt=0;function rs(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var jt,$t,bi,Ft,wi,Bi=!1,dr=[],Ns=null,As=null,Rs=null,Xa=new Map,qa=new Map,Ps=[],q0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Up(n,s){switch(n){case"focusin":case"focusout":Ns=null;break;case"dragenter":case"dragleave":As=null;break;case"mouseover":case"mouseout":Rs=null;break;case"pointerover":case"pointerout":Xa.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":qa.delete(s.pointerId)}}function $a(n,s,l,d,m,M){return n===null||n.nativeEvent!==M?(n={blockedOn:s,domEventName:l,eventSystemFlags:d,nativeEvent:M,targetContainers:[m]},s!==null&&(s=lo(s),s!==null&&$t(s)),n):(n.eventSystemFlags|=d,s=n.targetContainers,m!==null&&s.indexOf(m)===-1&&s.push(m),n)}function $0(n,s,l,d,m){switch(s){case"focusin":return Ns=$a(Ns,n,s,l,d,m),!0;case"dragenter":return As=$a(As,n,s,l,d,m),!0;case"mouseover":return Rs=$a(Rs,n,s,l,d,m),!0;case"pointerover":var M=m.pointerId;return Xa.set(M,$a(Xa.get(M)||null,n,s,l,d,m)),!0;case"gotpointercapture":return M=m.pointerId,qa.set(M,$a(qa.get(M)||null,n,s,l,d,m)),!0}return!1}function Fp(n){var s=hr(n.target);if(s!==null){var l=ki(s);if(l!==null){if(s=l.tag,s===13){if(s=ur(l),s!==null){n.blockedOn=s,wi(n.priority,function(){bi(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function tl(n){if(n.blockedOn!==null)return!1;for(var s=n.targetContainers;0<s.length;){var l=mu(n.domEventName,n.eventSystemFlags,s[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var d=new l.constructor(l.type,l);Me=d,l.target.dispatchEvent(d),Me=null}else return s=lo(l),s!==null&&$t(s),n.blockedOn=l,!1;s.shift()}return!0}function Op(n,s,l){tl(n)&&l.delete(s)}function Y0(){Bi=!1,Ns!==null&&tl(Ns)&&(Ns=null),As!==null&&tl(As)&&(As=null),Rs!==null&&tl(Rs)&&(Rs=null),Xa.forEach(Op),qa.forEach(Op)}function Ya(n,s){n.blockedOn===s&&(n.blockedOn=null,Bi||(Bi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Y0)))}function Ka(n){function s(m){return Ya(m,n)}if(0<dr.length){Ya(dr[0],n);for(var l=1;l<dr.length;l++){var d=dr[l];d.blockedOn===n&&(d.blockedOn=null)}}for(Ns!==null&&Ya(Ns,n),As!==null&&Ya(As,n),Rs!==null&&Ya(Rs,n),Xa.forEach(s),qa.forEach(s),l=0;l<Ps.length;l++)d=Ps[l],d.blockedOn===n&&(d.blockedOn=null);for(;0<Ps.length&&(l=Ps[0],l.blockedOn===null);)Fp(l),l.blockedOn===null&&Ps.shift()}var kr=N.ReactCurrentBatchConfig,nl=!0;function K0(n,s,l,d){var m=wt,M=kr.transition;kr.transition=null;try{wt=1,pu(n,s,l,d)}finally{wt=m,kr.transition=M}}function Z0(n,s,l,d){var m=wt,M=kr.transition;kr.transition=null;try{wt=4,pu(n,s,l,d)}finally{wt=m,kr.transition=M}}function pu(n,s,l,d){if(nl){var m=mu(n,s,l,d);if(m===null)Lu(n,s,d,il,l),Up(n,d);else if($0(m,n,s,l,d))d.stopPropagation();else if(Up(n,d),s&4&&-1<q0.indexOf(n)){for(;m!==null;){var M=lo(m);if(M!==null&&jt(M),M=mu(n,s,l,d),M===null&&Lu(n,s,d,il,l),M===m)break;m=M}m!==null&&d.stopPropagation()}else Lu(n,s,d,null,l)}}var il=null;function mu(n,s,l,d){if(il=null,n=$e(d),n=hr(n),n!==null)if(s=ki(n),s===null)n=null;else if(l=s.tag,l===13){if(n=ur(s),n!==null)return n;n=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;n=null}else s!==n&&(n=null);return il=n,null}function kp(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fu()){case Wa:return 1;case P:return 4;case re:case he:return 16;case ue:return 536870912;default:return 16}default:return 16}}var Ls=null,gu=null,sl=null;function Bp(){if(sl)return sl;var n,s=gu,l=s.length,d,m="value"in Ls?Ls.value:Ls.textContent,M=m.length;for(n=0;n<l&&s[n]===m[n];n++);var R=l-n;for(d=1;d<=R&&s[l-d]===m[M-d];d++);return sl=m.slice(n,1<d?1-d:void 0)}function rl(n){var s=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&s===13&&(n=13)):n=s,n===10&&(n=13),32<=n||n===13?n:0}function al(){return!0}function zp(){return!1}function ii(n){function s(l,d,m,M,R){this._reactName=l,this._targetInst=m,this.type=d,this.nativeEvent=M,this.target=R,this.currentTarget=null;for(var H in n)n.hasOwnProperty(H)&&(l=n[H],this[H]=l?l(M):M[H]);return this.isDefaultPrevented=(M.defaultPrevented!=null?M.defaultPrevented:M.returnValue===!1)?al:zp,this.isPropagationStopped=zp,this}return te(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=al)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=al)},persist:function(){},isPersistent:al}),s}var Br={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xu=ii(Br),Za=te({},Br,{view:0,detail:0}),J0=ii(Za),vu,_u,Ja,ol=te({},Za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Su,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ja&&(Ja&&n.type==="mousemove"?(vu=n.screenX-Ja.screenX,_u=n.screenY-Ja.screenY):_u=vu=0,Ja=n),vu)},movementY:function(n){return"movementY"in n?n.movementY:_u}}),Hp=ii(ol),Q0=te({},ol,{dataTransfer:0}),e_=ii(Q0),t_=te({},Za,{relatedTarget:0}),yu=ii(t_),n_=te({},Br,{animationName:0,elapsedTime:0,pseudoElement:0}),i_=ii(n_),s_=te({},Br,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),r_=ii(s_),a_=te({},Br,{data:0}),Vp=ii(a_),o_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},l_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},c_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function u_(n){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(n):(n=c_[n])?!!s[n]:!1}function Su(){return u_}var d_=te({},Za,{key:function(n){if(n.key){var s=o_[n.key]||n.key;if(s!=="Unidentified")return s}return n.type==="keypress"?(n=rl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?l_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Su,charCode:function(n){return n.type==="keypress"?rl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?rl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),h_=ii(d_),f_=te({},ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gp=ii(f_),p_=te({},Za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Su}),m_=ii(p_),g_=te({},Br,{propertyName:0,elapsedTime:0,pseudoElement:0}),x_=ii(g_),v_=te({},ol,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),__=ii(v_),y_=[9,13,27,32],Mu=h&&"CompositionEvent"in window,Qa=null;h&&"documentMode"in document&&(Qa=document.documentMode);var S_=h&&"TextEvent"in window&&!Qa,Wp=h&&(!Mu||Qa&&8<Qa&&11>=Qa),Xp=" ",qp=!1;function $p(n,s){switch(n){case"keyup":return y_.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var zr=!1;function M_(n,s){switch(n){case"compositionend":return Yp(s);case"keypress":return s.which!==32?null:(qp=!0,Xp);case"textInput":return n=s.data,n===Xp&&qp?null:n;default:return null}}function E_(n,s){if(zr)return n==="compositionend"||!Mu&&$p(n,s)?(n=Bp(),sl=gu=Ls=null,zr=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Wp&&s.locale!=="ko"?null:s.data;default:return null}}var b_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kp(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s==="input"?!!b_[n.type]:s==="textarea"}function Zp(n,s,l,d){ve(d),s=hl(s,"onChange"),0<s.length&&(l=new xu("onChange","change",null,l,d),n.push({event:l,listeners:s}))}var eo=null,to=null;function w_(n){mm(n,0)}function ll(n){var s=Xr(n);if(Et(s))return n}function T_(n,s){if(n==="change")return s}var Jp=!1;if(h){var Eu;if(h){var bu="oninput"in document;if(!bu){var Qp=document.createElement("div");Qp.setAttribute("oninput","return;"),bu=typeof Qp.oninput=="function"}Eu=bu}else Eu=!1;Jp=Eu&&(!document.documentMode||9<document.documentMode)}function em(){eo&&(eo.detachEvent("onpropertychange",tm),to=eo=null)}function tm(n){if(n.propertyName==="value"&&ll(to)){var s=[];Zp(s,to,n,$e(n)),ct(w_,s)}}function C_(n,s,l){n==="focusin"?(em(),eo=s,to=l,eo.attachEvent("onpropertychange",tm)):n==="focusout"&&em()}function N_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ll(to)}function A_(n,s){if(n==="click")return ll(s)}function R_(n,s){if(n==="input"||n==="change")return ll(s)}function P_(n,s){return n===s&&(n!==0||1/n===1/s)||n!==n&&s!==s}var Ti=typeof Object.is=="function"?Object.is:P_;function no(n,s){if(Ti(n,s))return!0;if(typeof n!="object"||n===null||typeof s!="object"||s===null)return!1;var l=Object.keys(n),d=Object.keys(s);if(l.length!==d.length)return!1;for(d=0;d<l.length;d++){var m=l[d];if(!f.call(s,m)||!Ti(n[m],s[m]))return!1}return!0}function nm(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function im(n,s){var l=nm(n);n=0;for(var d;l;){if(l.nodeType===3){if(d=n+l.textContent.length,n<=s&&d>=s)return{node:l,offset:s-n};n=d}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=nm(l)}}function sm(n,s){return n&&s?n===s?!0:n&&n.nodeType===3?!1:s&&s.nodeType===3?sm(n,s.parentNode):"contains"in n?n.contains(s):n.compareDocumentPosition?!!(n.compareDocumentPosition(s)&16):!1:!1}function rm(){for(var n=window,s=it();s instanceof n.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)n=s.contentWindow;else break;s=it(n.document)}return s}function wu(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s&&(s==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||s==="textarea"||n.contentEditable==="true")}function L_(n){var s=rm(),l=n.focusedElem,d=n.selectionRange;if(s!==l&&l&&l.ownerDocument&&sm(l.ownerDocument.documentElement,l)){if(d!==null&&wu(l)){if(s=d.start,n=d.end,n===void 0&&(n=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(n,l.value.length);else if(n=(s=l.ownerDocument||document)&&s.defaultView||window,n.getSelection){n=n.getSelection();var m=l.textContent.length,M=Math.min(d.start,m);d=d.end===void 0?M:Math.min(d.end,m),!n.extend&&M>d&&(m=d,d=M,M=m),m=im(l,M);var R=im(l,d);m&&R&&(n.rangeCount!==1||n.anchorNode!==m.node||n.anchorOffset!==m.offset||n.focusNode!==R.node||n.focusOffset!==R.offset)&&(s=s.createRange(),s.setStart(m.node,m.offset),n.removeAllRanges(),M>d?(n.addRange(s),n.extend(R.node,R.offset)):(s.setEnd(R.node,R.offset),n.addRange(s)))}}for(s=[],n=l;n=n.parentNode;)n.nodeType===1&&s.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)n=s[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var I_=h&&"documentMode"in document&&11>=document.documentMode,Hr=null,Tu=null,io=null,Cu=!1;function am(n,s,l){var d=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Cu||Hr==null||Hr!==it(d)||(d=Hr,"selectionStart"in d&&wu(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),io&&no(io,d)||(io=d,d=hl(Tu,"onSelect"),0<d.length&&(s=new xu("onSelect","select",null,s,l),n.push({event:s,listeners:d}),s.target=Hr)))}function cl(n,s){var l={};return l[n.toLowerCase()]=s.toLowerCase(),l["Webkit"+n]="webkit"+s,l["Moz"+n]="moz"+s,l}var Vr={animationend:cl("Animation","AnimationEnd"),animationiteration:cl("Animation","AnimationIteration"),animationstart:cl("Animation","AnimationStart"),transitionend:cl("Transition","TransitionEnd")},Nu={},om={};h&&(om=document.createElement("div").style,"AnimationEvent"in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),"TransitionEvent"in window||delete Vr.transitionend.transition);function ul(n){if(Nu[n])return Nu[n];if(!Vr[n])return n;var s=Vr[n],l;for(l in s)if(s.hasOwnProperty(l)&&l in om)return Nu[n]=s[l];return n}var lm=ul("animationend"),cm=ul("animationiteration"),um=ul("animationstart"),dm=ul("transitionend"),hm=new Map,fm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Is(n,s){hm.set(n,s),c(s,[n])}for(var Au=0;Au<fm.length;Au++){var Ru=fm[Au],D_=Ru.toLowerCase(),j_=Ru[0].toUpperCase()+Ru.slice(1);Is(D_,"on"+j_)}Is(lm,"onAnimationEnd"),Is(cm,"onAnimationIteration"),Is(um,"onAnimationStart"),Is("dblclick","onDoubleClick"),Is("focusin","onFocus"),Is("focusout","onBlur"),Is(dm,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var so="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),U_=new Set("cancel close invalid load scroll toggle".split(" ").concat(so));function pm(n,s,l){var d=n.type||"unknown-event";n.currentTarget=l,Jo(d,s,void 0,n),n.currentTarget=null}function mm(n,s){s=(s&4)!==0;for(var l=0;l<n.length;l++){var d=n[l],m=d.event;d=d.listeners;e:{var M=void 0;if(s)for(var R=d.length-1;0<=R;R--){var H=d[R],Z=H.instance,pe=H.currentTarget;if(H=H.listener,Z!==M&&m.isPropagationStopped())break e;pm(m,H,pe),M=Z}else for(R=0;R<d.length;R++){if(H=d[R],Z=H.instance,pe=H.currentTarget,H=H.listener,Z!==M&&m.isPropagationStopped())break e;pm(m,H,pe),M=Z}}}if(cr)throw n=Fr,cr=!1,Fr=null,n}function Yt(n,s){var l=s[Ou];l===void 0&&(l=s[Ou]=new Set);var d=n+"__bubble";l.has(d)||(gm(s,n,2,!1),l.add(d))}function Pu(n,s,l){var d=0;s&&(d|=4),gm(l,n,d,s)}var dl="_reactListening"+Math.random().toString(36).slice(2);function ro(n){if(!n[dl]){n[dl]=!0,r.forEach(function(l){l!=="selectionchange"&&(U_.has(l)||Pu(l,!1,n),Pu(l,!0,n))});var s=n.nodeType===9?n:n.ownerDocument;s===null||s[dl]||(s[dl]=!0,Pu("selectionchange",!1,s))}}function gm(n,s,l,d){switch(kp(s)){case 1:var m=K0;break;case 4:m=Z0;break;default:m=pu}l=m.bind(null,s,l,n),m=void 0,!bt||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(m=!0),d?m!==void 0?n.addEventListener(s,l,{capture:!0,passive:m}):n.addEventListener(s,l,!0):m!==void 0?n.addEventListener(s,l,{passive:m}):n.addEventListener(s,l,!1)}function Lu(n,s,l,d,m){var M=d;if((s&1)===0&&(s&2)===0&&d!==null)e:for(;;){if(d===null)return;var R=d.tag;if(R===3||R===4){var H=d.stateNode.containerInfo;if(H===m||H.nodeType===8&&H.parentNode===m)break;if(R===4)for(R=d.return;R!==null;){var Z=R.tag;if((Z===3||Z===4)&&(Z=R.stateNode.containerInfo,Z===m||Z.nodeType===8&&Z.parentNode===m))return;R=R.return}for(;H!==null;){if(R=hr(H),R===null)return;if(Z=R.tag,Z===5||Z===6){d=M=R;continue e}H=H.parentNode}}d=d.return}ct(function(){var pe=M,Te=$e(l),Ae=[];e:{var we=hm.get(n);if(we!==void 0){var Ge=xu,Ke=n;switch(n){case"keypress":if(rl(l)===0)break e;case"keydown":case"keyup":Ge=h_;break;case"focusin":Ke="focus",Ge=yu;break;case"focusout":Ke="blur",Ge=yu;break;case"beforeblur":case"afterblur":Ge=yu;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ge=Hp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ge=e_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ge=m_;break;case lm:case cm:case um:Ge=i_;break;case dm:Ge=x_;break;case"scroll":Ge=J0;break;case"wheel":Ge=__;break;case"copy":case"cut":case"paste":Ge=r_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ge=Gp}var Je=(s&4)!==0,on=!Je&&n==="scroll",le=Je?we!==null?we+"Capture":null:we;Je=[];for(var ie=pe,de;ie!==null;){de=ie;var De=de.stateNode;if(de.tag===5&&De!==null&&(de=De,le!==null&&(De=st(ie,le),De!=null&&Je.push(ao(ie,De,de)))),on)break;ie=ie.return}0<Je.length&&(we=new Ge(we,Ke,null,l,Te),Ae.push({event:we,listeners:Je}))}}if((s&7)===0){e:{if(we=n==="mouseover"||n==="pointerover",Ge=n==="mouseout"||n==="pointerout",we&&l!==Me&&(Ke=l.relatedTarget||l.fromElement)&&(hr(Ke)||Ke[as]))break e;if((Ge||we)&&(we=Te.window===Te?Te:(we=Te.ownerDocument)?we.defaultView||we.parentWindow:window,Ge?(Ke=l.relatedTarget||l.toElement,Ge=pe,Ke=Ke?hr(Ke):null,Ke!==null&&(on=ki(Ke),Ke!==on||Ke.tag!==5&&Ke.tag!==6)&&(Ke=null)):(Ge=null,Ke=pe),Ge!==Ke)){if(Je=Hp,De="onMouseLeave",le="onMouseEnter",ie="mouse",(n==="pointerout"||n==="pointerover")&&(Je=Gp,De="onPointerLeave",le="onPointerEnter",ie="pointer"),on=Ge==null?we:Xr(Ge),de=Ke==null?we:Xr(Ke),we=new Je(De,ie+"leave",Ge,l,Te),we.target=on,we.relatedTarget=de,De=null,hr(Te)===pe&&(Je=new Je(le,ie+"enter",Ke,l,Te),Je.target=de,Je.relatedTarget=on,De=Je),on=De,Ge&&Ke)t:{for(Je=Ge,le=Ke,ie=0,de=Je;de;de=Gr(de))ie++;for(de=0,De=le;De;De=Gr(De))de++;for(;0<ie-de;)Je=Gr(Je),ie--;for(;0<de-ie;)le=Gr(le),de--;for(;ie--;){if(Je===le||le!==null&&Je===le.alternate)break t;Je=Gr(Je),le=Gr(le)}Je=null}else Je=null;Ge!==null&&xm(Ae,we,Ge,Je,!1),Ke!==null&&on!==null&&xm(Ae,on,Ke,Je,!0)}}e:{if(we=pe?Xr(pe):window,Ge=we.nodeName&&we.nodeName.toLowerCase(),Ge==="select"||Ge==="input"&&we.type==="file")var tt=T_;else if(Kp(we))if(Jp)tt=R_;else{tt=N_;var ot=C_}else(Ge=we.nodeName)&&Ge.toLowerCase()==="input"&&(we.type==="checkbox"||we.type==="radio")&&(tt=A_);if(tt&&(tt=tt(n,pe))){Zp(Ae,tt,l,Te);break e}ot&&ot(n,we,pe),n==="focusout"&&(ot=we._wrapperState)&&ot.controlled&&we.type==="number"&&hn(we,"number",we.value)}switch(ot=pe?Xr(pe):window,n){case"focusin":(Kp(ot)||ot.contentEditable==="true")&&(Hr=ot,Tu=pe,io=null);break;case"focusout":io=Tu=Hr=null;break;case"mousedown":Cu=!0;break;case"contextmenu":case"mouseup":case"dragend":Cu=!1,am(Ae,l,Te);break;case"selectionchange":if(I_)break;case"keydown":case"keyup":am(Ae,l,Te)}var lt;if(Mu)e:{switch(n){case"compositionstart":var mt="onCompositionStart";break e;case"compositionend":mt="onCompositionEnd";break e;case"compositionupdate":mt="onCompositionUpdate";break e}mt=void 0}else zr?$p(n,l)&&(mt="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(mt="onCompositionStart");mt&&(Wp&&l.locale!=="ko"&&(zr||mt!=="onCompositionStart"?mt==="onCompositionEnd"&&zr&&(lt=Bp()):(Ls=Te,gu="value"in Ls?Ls.value:Ls.textContent,zr=!0)),ot=hl(pe,mt),0<ot.length&&(mt=new Vp(mt,n,null,l,Te),Ae.push({event:mt,listeners:ot}),lt?mt.data=lt:(lt=Yp(l),lt!==null&&(mt.data=lt)))),(lt=S_?M_(n,l):E_(n,l))&&(pe=hl(pe,"onBeforeInput"),0<pe.length&&(Te=new Vp("onBeforeInput","beforeinput",null,l,Te),Ae.push({event:Te,listeners:pe}),Te.data=lt))}mm(Ae,s)})}function ao(n,s,l){return{instance:n,listener:s,currentTarget:l}}function hl(n,s){for(var l=s+"Capture",d=[];n!==null;){var m=n,M=m.stateNode;m.tag===5&&M!==null&&(m=M,M=st(n,l),M!=null&&d.unshift(ao(n,M,m)),M=st(n,s),M!=null&&d.push(ao(n,M,m))),n=n.return}return d}function Gr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function xm(n,s,l,d,m){for(var M=s._reactName,R=[];l!==null&&l!==d;){var H=l,Z=H.alternate,pe=H.stateNode;if(Z!==null&&Z===d)break;H.tag===5&&pe!==null&&(H=pe,m?(Z=st(l,M),Z!=null&&R.unshift(ao(l,Z,H))):m||(Z=st(l,M),Z!=null&&R.push(ao(l,Z,H)))),l=l.return}R.length!==0&&n.push({event:s,listeners:R})}var F_=/\r\n?/g,O_=/\u0000|\uFFFD/g;function vm(n){return(typeof n=="string"?n:""+n).replace(F_,`
`).replace(O_,"")}function fl(n,s,l){if(s=vm(s),vm(n)!==s&&l)throw Error(t(425))}function pl(){}var Iu=null,Du=null;function ju(n,s){return n==="textarea"||n==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Uu=typeof setTimeout=="function"?setTimeout:void 0,k_=typeof clearTimeout=="function"?clearTimeout:void 0,_m=typeof Promise=="function"?Promise:void 0,B_=typeof queueMicrotask=="function"?queueMicrotask:typeof _m<"u"?function(n){return _m.resolve(null).then(n).catch(z_)}:Uu;function z_(n){setTimeout(function(){throw n})}function Fu(n,s){var l=s,d=0;do{var m=l.nextSibling;if(n.removeChild(l),m&&m.nodeType===8)if(l=m.data,l==="/$"){if(d===0){n.removeChild(m),Ka(s);return}d--}else l!=="$"&&l!=="$?"&&l!=="$!"||d++;l=m}while(l);Ka(s)}function Ds(n){for(;n!=null;n=n.nextSibling){var s=n.nodeType;if(s===1||s===3)break;if(s===8){if(s=n.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return n}function ym(n){n=n.previousSibling;for(var s=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return n;s--}else l==="/$"&&s++}n=n.previousSibling}return null}var Wr=Math.random().toString(36).slice(2),zi="__reactFiber$"+Wr,oo="__reactProps$"+Wr,as="__reactContainer$"+Wr,Ou="__reactEvents$"+Wr,H_="__reactListeners$"+Wr,V_="__reactHandles$"+Wr;function hr(n){var s=n[zi];if(s)return s;for(var l=n.parentNode;l;){if(s=l[as]||l[zi]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(n=ym(n);n!==null;){if(l=n[zi])return l;n=ym(n)}return s}n=l,l=n.parentNode}return null}function lo(n){return n=n[zi]||n[as],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Xr(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function ml(n){return n[oo]||null}var ku=[],qr=-1;function js(n){return{current:n}}function Kt(n){0>qr||(n.current=ku[qr],ku[qr]=null,qr--)}function Xt(n,s){qr++,ku[qr]=n.current,n.current=s}var Us={},An=js(Us),Yn=js(!1),fr=Us;function $r(n,s){var l=n.type.contextTypes;if(!l)return Us;var d=n.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===s)return d.__reactInternalMemoizedMaskedChildContext;var m={},M;for(M in l)m[M]=s[M];return d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=s,n.__reactInternalMemoizedMaskedChildContext=m),m}function Kn(n){return n=n.childContextTypes,n!=null}function gl(){Kt(Yn),Kt(An)}function Sm(n,s,l){if(An.current!==Us)throw Error(t(168));Xt(An,s),Xt(Yn,l)}function Mm(n,s,l){var d=n.stateNode;if(s=s.childContextTypes,typeof d.getChildContext!="function")return l;d=d.getChildContext();for(var m in d)if(!(m in s))throw Error(t(108,me(n)||"Unknown",m));return te({},l,d)}function xl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Us,fr=An.current,Xt(An,n),Xt(Yn,Yn.current),!0}function Em(n,s,l){var d=n.stateNode;if(!d)throw Error(t(169));l?(n=Mm(n,s,fr),d.__reactInternalMemoizedMergedChildContext=n,Kt(Yn),Kt(An),Xt(An,n)):Kt(Yn),Xt(Yn,l)}var os=null,vl=!1,Bu=!1;function bm(n){os===null?os=[n]:os.push(n)}function G_(n){vl=!0,bm(n)}function Fs(){if(!Bu&&os!==null){Bu=!0;var n=0,s=wt;try{var l=os;for(wt=1;n<l.length;n++){var d=l[n];do d=d(!0);while(d!==null)}os=null,vl=!1}catch(m){throw os!==null&&(os=os.slice(n+1)),Qo(Wa,Fs),m}finally{wt=s,Bu=!1}}return null}var Yr=[],Kr=0,_l=null,yl=0,hi=[],fi=0,pr=null,ls=1,cs="";function mr(n,s){Yr[Kr++]=yl,Yr[Kr++]=_l,_l=n,yl=s}function wm(n,s,l){hi[fi++]=ls,hi[fi++]=cs,hi[fi++]=pr,pr=n;var d=ls;n=cs;var m=32-je(d)-1;d&=~(1<<m),l+=1;var M=32-je(s)+m;if(30<M){var R=m-m%5;M=(d&(1<<R)-1).toString(32),d>>=R,m-=R,ls=1<<32-je(s)+m|l<<m|d,cs=M+n}else ls=1<<M|l<<m|d,cs=n}function zu(n){n.return!==null&&(mr(n,1),wm(n,1,0))}function Hu(n){for(;n===_l;)_l=Yr[--Kr],Yr[Kr]=null,yl=Yr[--Kr],Yr[Kr]=null;for(;n===pr;)pr=hi[--fi],hi[fi]=null,cs=hi[--fi],hi[fi]=null,ls=hi[--fi],hi[fi]=null}var si=null,ri=null,Jt=!1,Ci=null;function Tm(n,s){var l=xi(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=n,s=n.deletions,s===null?(n.deletions=[l],n.flags|=16):s.push(l)}function Cm(n,s){switch(n.tag){case 5:var l=n.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(n.stateNode=s,si=n,ri=Ds(s.firstChild),!0):!1;case 6:return s=n.pendingProps===""||s.nodeType!==3?null:s,s!==null?(n.stateNode=s,si=n,ri=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=pr!==null?{id:ls,overflow:cs}:null,n.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=xi(18,null,null,0),l.stateNode=s,l.return=n,n.child=l,si=n,ri=null,!0):!1;default:return!1}}function Vu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Gu(n){if(Jt){var s=ri;if(s){var l=s;if(!Cm(n,s)){if(Vu(n))throw Error(t(418));s=Ds(l.nextSibling);var d=si;s&&Cm(n,s)?Tm(d,l):(n.flags=n.flags&-4097|2,Jt=!1,si=n)}}else{if(Vu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Jt=!1,si=n}}}function Nm(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;si=n}function Sl(n){if(n!==si)return!1;if(!Jt)return Nm(n),Jt=!0,!1;var s;if((s=n.tag!==3)&&!(s=n.tag!==5)&&(s=n.type,s=s!=="head"&&s!=="body"&&!ju(n.type,n.memoizedProps)),s&&(s=ri)){if(Vu(n))throw Am(),Error(t(418));for(;s;)Tm(n,s),s=Ds(s.nextSibling)}if(Nm(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,s=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(s===0){ri=Ds(n.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}n=n.nextSibling}ri=null}}else ri=si?Ds(n.stateNode.nextSibling):null;return!0}function Am(){for(var n=ri;n;)n=Ds(n.nextSibling)}function Zr(){ri=si=null,Jt=!1}function Wu(n){Ci===null?Ci=[n]:Ci.push(n)}var W_=N.ReactCurrentBatchConfig;function co(n,s,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var d=l.stateNode}if(!d)throw Error(t(147,n));var m=d,M=""+n;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===M?s.ref:(s=function(R){var H=m.refs;R===null?delete H[M]:H[M]=R},s._stringRef=M,s)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function Ml(n,s){throw n=Object.prototype.toString.call(s),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":n))}function Rm(n){var s=n._init;return s(n._payload)}function Pm(n){function s(le,ie){if(n){var de=le.deletions;de===null?(le.deletions=[ie],le.flags|=16):de.push(ie)}}function l(le,ie){if(!n)return null;for(;ie!==null;)s(le,ie),ie=ie.sibling;return null}function d(le,ie){for(le=new Map;ie!==null;)ie.key!==null?le.set(ie.key,ie):le.set(ie.index,ie),ie=ie.sibling;return le}function m(le,ie){return le=Ws(le,ie),le.index=0,le.sibling=null,le}function M(le,ie,de){return le.index=de,n?(de=le.alternate,de!==null?(de=de.index,de<ie?(le.flags|=2,ie):de):(le.flags|=2,ie)):(le.flags|=1048576,ie)}function R(le){return n&&le.alternate===null&&(le.flags|=2),le}function H(le,ie,de,De){return ie===null||ie.tag!==6?(ie=Ud(de,le.mode,De),ie.return=le,ie):(ie=m(ie,de),ie.return=le,ie)}function Z(le,ie,de,De){var tt=de.type;return tt===B?Te(le,ie,de.props.children,De,de.key):ie!==null&&(ie.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===U&&Rm(tt)===ie.type)?(De=m(ie,de.props),De.ref=co(le,ie,de),De.return=le,De):(De=Xl(de.type,de.key,de.props,null,le.mode,De),De.ref=co(le,ie,de),De.return=le,De)}function pe(le,ie,de,De){return ie===null||ie.tag!==4||ie.stateNode.containerInfo!==de.containerInfo||ie.stateNode.implementation!==de.implementation?(ie=Fd(de,le.mode,De),ie.return=le,ie):(ie=m(ie,de.children||[]),ie.return=le,ie)}function Te(le,ie,de,De,tt){return ie===null||ie.tag!==7?(ie=Er(de,le.mode,De,tt),ie.return=le,ie):(ie=m(ie,de),ie.return=le,ie)}function Ae(le,ie,de){if(typeof ie=="string"&&ie!==""||typeof ie=="number")return ie=Ud(""+ie,le.mode,de),ie.return=le,ie;if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case I:return de=Xl(ie.type,ie.key,ie.props,null,le.mode,de),de.ref=co(le,null,ie),de.return=le,de;case L:return ie=Fd(ie,le.mode,de),ie.return=le,ie;case U:var De=ie._init;return Ae(le,De(ie._payload),de)}if(ne(ie)||X(ie))return ie=Er(ie,le.mode,de,null),ie.return=le,ie;Ml(le,ie)}return null}function we(le,ie,de,De){var tt=ie!==null?ie.key:null;if(typeof de=="string"&&de!==""||typeof de=="number")return tt!==null?null:H(le,ie,""+de,De);if(typeof de=="object"&&de!==null){switch(de.$$typeof){case I:return de.key===tt?Z(le,ie,de,De):null;case L:return de.key===tt?pe(le,ie,de,De):null;case U:return tt=de._init,we(le,ie,tt(de._payload),De)}if(ne(de)||X(de))return tt!==null?null:Te(le,ie,de,De,null);Ml(le,de)}return null}function Ge(le,ie,de,De,tt){if(typeof De=="string"&&De!==""||typeof De=="number")return le=le.get(de)||null,H(ie,le,""+De,tt);if(typeof De=="object"&&De!==null){switch(De.$$typeof){case I:return le=le.get(De.key===null?de:De.key)||null,Z(ie,le,De,tt);case L:return le=le.get(De.key===null?de:De.key)||null,pe(ie,le,De,tt);case U:var ot=De._init;return Ge(le,ie,de,ot(De._payload),tt)}if(ne(De)||X(De))return le=le.get(de)||null,Te(ie,le,De,tt,null);Ml(ie,De)}return null}function Ke(le,ie,de,De){for(var tt=null,ot=null,lt=ie,mt=ie=0,Mn=null;lt!==null&&mt<de.length;mt++){lt.index>mt?(Mn=lt,lt=null):Mn=lt.sibling;var It=we(le,lt,de[mt],De);if(It===null){lt===null&&(lt=Mn);break}n&&lt&&It.alternate===null&&s(le,lt),ie=M(It,ie,mt),ot===null?tt=It:ot.sibling=It,ot=It,lt=Mn}if(mt===de.length)return l(le,lt),Jt&&mr(le,mt),tt;if(lt===null){for(;mt<de.length;mt++)lt=Ae(le,de[mt],De),lt!==null&&(ie=M(lt,ie,mt),ot===null?tt=lt:ot.sibling=lt,ot=lt);return Jt&&mr(le,mt),tt}for(lt=d(le,lt);mt<de.length;mt++)Mn=Ge(lt,le,mt,de[mt],De),Mn!==null&&(n&&Mn.alternate!==null&&lt.delete(Mn.key===null?mt:Mn.key),ie=M(Mn,ie,mt),ot===null?tt=Mn:ot.sibling=Mn,ot=Mn);return n&&lt.forEach(function(Xs){return s(le,Xs)}),Jt&&mr(le,mt),tt}function Je(le,ie,de,De){var tt=X(de);if(typeof tt!="function")throw Error(t(150));if(de=tt.call(de),de==null)throw Error(t(151));for(var ot=tt=null,lt=ie,mt=ie=0,Mn=null,It=de.next();lt!==null&&!It.done;mt++,It=de.next()){lt.index>mt?(Mn=lt,lt=null):Mn=lt.sibling;var Xs=we(le,lt,It.value,De);if(Xs===null){lt===null&&(lt=Mn);break}n&&lt&&Xs.alternate===null&&s(le,lt),ie=M(Xs,ie,mt),ot===null?tt=Xs:ot.sibling=Xs,ot=Xs,lt=Mn}if(It.done)return l(le,lt),Jt&&mr(le,mt),tt;if(lt===null){for(;!It.done;mt++,It=de.next())It=Ae(le,It.value,De),It!==null&&(ie=M(It,ie,mt),ot===null?tt=It:ot.sibling=It,ot=It);return Jt&&mr(le,mt),tt}for(lt=d(le,lt);!It.done;mt++,It=de.next())It=Ge(lt,le,mt,It.value,De),It!==null&&(n&&It.alternate!==null&&lt.delete(It.key===null?mt:It.key),ie=M(It,ie,mt),ot===null?tt=It:ot.sibling=It,ot=It);return n&&lt.forEach(function(by){return s(le,by)}),Jt&&mr(le,mt),tt}function on(le,ie,de,De){if(typeof de=="object"&&de!==null&&de.type===B&&de.key===null&&(de=de.props.children),typeof de=="object"&&de!==null){switch(de.$$typeof){case I:e:{for(var tt=de.key,ot=ie;ot!==null;){if(ot.key===tt){if(tt=de.type,tt===B){if(ot.tag===7){l(le,ot.sibling),ie=m(ot,de.props.children),ie.return=le,le=ie;break e}}else if(ot.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===U&&Rm(tt)===ot.type){l(le,ot.sibling),ie=m(ot,de.props),ie.ref=co(le,ot,de),ie.return=le,le=ie;break e}l(le,ot);break}else s(le,ot);ot=ot.sibling}de.type===B?(ie=Er(de.props.children,le.mode,De,de.key),ie.return=le,le=ie):(De=Xl(de.type,de.key,de.props,null,le.mode,De),De.ref=co(le,ie,de),De.return=le,le=De)}return R(le);case L:e:{for(ot=de.key;ie!==null;){if(ie.key===ot)if(ie.tag===4&&ie.stateNode.containerInfo===de.containerInfo&&ie.stateNode.implementation===de.implementation){l(le,ie.sibling),ie=m(ie,de.children||[]),ie.return=le,le=ie;break e}else{l(le,ie);break}else s(le,ie);ie=ie.sibling}ie=Fd(de,le.mode,De),ie.return=le,le=ie}return R(le);case U:return ot=de._init,on(le,ie,ot(de._payload),De)}if(ne(de))return Ke(le,ie,de,De);if(X(de))return Je(le,ie,de,De);Ml(le,de)}return typeof de=="string"&&de!==""||typeof de=="number"?(de=""+de,ie!==null&&ie.tag===6?(l(le,ie.sibling),ie=m(ie,de),ie.return=le,le=ie):(l(le,ie),ie=Ud(de,le.mode,De),ie.return=le,le=ie),R(le)):l(le,ie)}return on}var Jr=Pm(!0),Lm=Pm(!1),El=js(null),bl=null,Qr=null,Xu=null;function qu(){Xu=Qr=bl=null}function $u(n){var s=El.current;Kt(El),n._currentValue=s}function Yu(n,s,l){for(;n!==null;){var d=n.alternate;if((n.childLanes&s)!==s?(n.childLanes|=s,d!==null&&(d.childLanes|=s)):d!==null&&(d.childLanes&s)!==s&&(d.childLanes|=s),n===l)break;n=n.return}}function ea(n,s){bl=n,Xu=Qr=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&s)!==0&&(Zn=!0),n.firstContext=null)}function pi(n){var s=n._currentValue;if(Xu!==n)if(n={context:n,memoizedValue:s,next:null},Qr===null){if(bl===null)throw Error(t(308));Qr=n,bl.dependencies={lanes:0,firstContext:n}}else Qr=Qr.next=n;return s}var gr=null;function Ku(n){gr===null?gr=[n]:gr.push(n)}function Im(n,s,l,d){var m=s.interleaved;return m===null?(l.next=l,Ku(s)):(l.next=m.next,m.next=l),s.interleaved=l,us(n,d)}function us(n,s){n.lanes|=s;var l=n.alternate;for(l!==null&&(l.lanes|=s),l=n,n=n.return;n!==null;)n.childLanes|=s,l=n.alternate,l!==null&&(l.childLanes|=s),l=n,n=n.return;return l.tag===3?l.stateNode:null}var Os=!1;function Zu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dm(n,s){n=n.updateQueue,s.updateQueue===n&&(s.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ds(n,s){return{eventTime:n,lane:s,tag:0,payload:null,callback:null,next:null}}function ks(n,s,l){var d=n.updateQueue;if(d===null)return null;if(d=d.shared,(Lt&2)!==0){var m=d.pending;return m===null?s.next=s:(s.next=m.next,m.next=s),d.pending=s,us(n,l)}return m=d.interleaved,m===null?(s.next=s,Ku(d)):(s.next=m.next,m.next=s),d.interleaved=s,us(n,l)}function wl(n,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var d=s.lanes;d&=n.pendingLanes,l|=d,s.lanes=l,$n(n,l)}}function jm(n,s){var l=n.updateQueue,d=n.alternate;if(d!==null&&(d=d.updateQueue,l===d)){var m=null,M=null;if(l=l.firstBaseUpdate,l!==null){do{var R={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};M===null?m=M=R:M=M.next=R,l=l.next}while(l!==null);M===null?m=M=s:M=M.next=s}else m=M=s;l={baseState:d.baseState,firstBaseUpdate:m,lastBaseUpdate:M,shared:d.shared,effects:d.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=s:n.next=s,l.lastBaseUpdate=s}function Tl(n,s,l,d){var m=n.updateQueue;Os=!1;var M=m.firstBaseUpdate,R=m.lastBaseUpdate,H=m.shared.pending;if(H!==null){m.shared.pending=null;var Z=H,pe=Z.next;Z.next=null,R===null?M=pe:R.next=pe,R=Z;var Te=n.alternate;Te!==null&&(Te=Te.updateQueue,H=Te.lastBaseUpdate,H!==R&&(H===null?Te.firstBaseUpdate=pe:H.next=pe,Te.lastBaseUpdate=Z))}if(M!==null){var Ae=m.baseState;R=0,Te=pe=Z=null,H=M;do{var we=H.lane,Ge=H.eventTime;if((d&we)===we){Te!==null&&(Te=Te.next={eventTime:Ge,lane:0,tag:H.tag,payload:H.payload,callback:H.callback,next:null});e:{var Ke=n,Je=H;switch(we=s,Ge=l,Je.tag){case 1:if(Ke=Je.payload,typeof Ke=="function"){Ae=Ke.call(Ge,Ae,we);break e}Ae=Ke;break e;case 3:Ke.flags=Ke.flags&-65537|128;case 0:if(Ke=Je.payload,we=typeof Ke=="function"?Ke.call(Ge,Ae,we):Ke,we==null)break e;Ae=te({},Ae,we);break e;case 2:Os=!0}}H.callback!==null&&H.lane!==0&&(n.flags|=64,we=m.effects,we===null?m.effects=[H]:we.push(H))}else Ge={eventTime:Ge,lane:we,tag:H.tag,payload:H.payload,callback:H.callback,next:null},Te===null?(pe=Te=Ge,Z=Ae):Te=Te.next=Ge,R|=we;if(H=H.next,H===null){if(H=m.shared.pending,H===null)break;we=H,H=we.next,we.next=null,m.lastBaseUpdate=we,m.shared.pending=null}}while(!0);if(Te===null&&(Z=Ae),m.baseState=Z,m.firstBaseUpdate=pe,m.lastBaseUpdate=Te,s=m.shared.interleaved,s!==null){m=s;do R|=m.lane,m=m.next;while(m!==s)}else M===null&&(m.shared.lanes=0);_r|=R,n.lanes=R,n.memoizedState=Ae}}function Um(n,s,l){if(n=s.effects,s.effects=null,n!==null)for(s=0;s<n.length;s++){var d=n[s],m=d.callback;if(m!==null){if(d.callback=null,d=l,typeof m!="function")throw Error(t(191,m));m.call(d)}}}var uo={},Hi=js(uo),ho=js(uo),fo=js(uo);function xr(n){if(n===uo)throw Error(t(174));return n}function Ju(n,s){switch(Xt(fo,s),Xt(ho,n),Xt(Hi,uo),n=s.nodeType,n){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:A(null,"");break;default:n=n===8?s.parentNode:s,s=n.namespaceURI||null,n=n.tagName,s=A(s,n)}Kt(Hi),Xt(Hi,s)}function ta(){Kt(Hi),Kt(ho),Kt(fo)}function Fm(n){xr(fo.current);var s=xr(Hi.current),l=A(s,n.type);s!==l&&(Xt(ho,n),Xt(Hi,l))}function Qu(n){ho.current===n&&(Kt(Hi),Kt(ho))}var tn=js(0);function Cl(n){for(var s=n;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var ed=[];function td(){for(var n=0;n<ed.length;n++)ed[n]._workInProgressVersionPrimary=null;ed.length=0}var Nl=N.ReactCurrentDispatcher,nd=N.ReactCurrentBatchConfig,vr=0,nn=null,fn=null,yn=null,Al=!1,po=!1,mo=0,X_=0;function Rn(){throw Error(t(321))}function id(n,s){if(s===null)return!1;for(var l=0;l<s.length&&l<n.length;l++)if(!Ti(n[l],s[l]))return!1;return!0}function sd(n,s,l,d,m,M){if(vr=M,nn=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Nl.current=n===null||n.memoizedState===null?K_:Z_,n=l(d,m),po){M=0;do{if(po=!1,mo=0,25<=M)throw Error(t(301));M+=1,yn=fn=null,s.updateQueue=null,Nl.current=J_,n=l(d,m)}while(po)}if(Nl.current=Ll,s=fn!==null&&fn.next!==null,vr=0,yn=fn=nn=null,Al=!1,s)throw Error(t(300));return n}function rd(){var n=mo!==0;return mo=0,n}function Vi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yn===null?nn.memoizedState=yn=n:yn=yn.next=n,yn}function mi(){if(fn===null){var n=nn.alternate;n=n!==null?n.memoizedState:null}else n=fn.next;var s=yn===null?nn.memoizedState:yn.next;if(s!==null)yn=s,fn=n;else{if(n===null)throw Error(t(310));fn=n,n={memoizedState:fn.memoizedState,baseState:fn.baseState,baseQueue:fn.baseQueue,queue:fn.queue,next:null},yn===null?nn.memoizedState=yn=n:yn=yn.next=n}return yn}function go(n,s){return typeof s=="function"?s(n):s}function ad(n){var s=mi(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var d=fn,m=d.baseQueue,M=l.pending;if(M!==null){if(m!==null){var R=m.next;m.next=M.next,M.next=R}d.baseQueue=m=M,l.pending=null}if(m!==null){M=m.next,d=d.baseState;var H=R=null,Z=null,pe=M;do{var Te=pe.lane;if((vr&Te)===Te)Z!==null&&(Z=Z.next={lane:0,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null}),d=pe.hasEagerState?pe.eagerState:n(d,pe.action);else{var Ae={lane:Te,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null};Z===null?(H=Z=Ae,R=d):Z=Z.next=Ae,nn.lanes|=Te,_r|=Te}pe=pe.next}while(pe!==null&&pe!==M);Z===null?R=d:Z.next=H,Ti(d,s.memoizedState)||(Zn=!0),s.memoizedState=d,s.baseState=R,s.baseQueue=Z,l.lastRenderedState=d}if(n=l.interleaved,n!==null){m=n;do M=m.lane,nn.lanes|=M,_r|=M,m=m.next;while(m!==n)}else m===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function od(n){var s=mi(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var d=l.dispatch,m=l.pending,M=s.memoizedState;if(m!==null){l.pending=null;var R=m=m.next;do M=n(M,R.action),R=R.next;while(R!==m);Ti(M,s.memoizedState)||(Zn=!0),s.memoizedState=M,s.baseQueue===null&&(s.baseState=M),l.lastRenderedState=M}return[M,d]}function Om(){}function km(n,s){var l=nn,d=mi(),m=s(),M=!Ti(d.memoizedState,m);if(M&&(d.memoizedState=m,Zn=!0),d=d.queue,ld(Hm.bind(null,l,d,n),[n]),d.getSnapshot!==s||M||yn!==null&&yn.memoizedState.tag&1){if(l.flags|=2048,xo(9,zm.bind(null,l,d,m,s),void 0,null),Sn===null)throw Error(t(349));(vr&30)!==0||Bm(l,s,m)}return m}function Bm(n,s,l){n.flags|=16384,n={getSnapshot:s,value:l},s=nn.updateQueue,s===null?(s={lastEffect:null,stores:null},nn.updateQueue=s,s.stores=[n]):(l=s.stores,l===null?s.stores=[n]:l.push(n))}function zm(n,s,l,d){s.value=l,s.getSnapshot=d,Vm(s)&&Gm(n)}function Hm(n,s,l){return l(function(){Vm(s)&&Gm(n)})}function Vm(n){var s=n.getSnapshot;n=n.value;try{var l=s();return!Ti(n,l)}catch{return!0}}function Gm(n){var s=us(n,1);s!==null&&Pi(s,n,1,-1)}function Wm(n){var s=Vi();return typeof n=="function"&&(n=n()),s.memoizedState=s.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:go,lastRenderedState:n},s.queue=n,n=n.dispatch=Y_.bind(null,nn,n),[s.memoizedState,n]}function xo(n,s,l,d){return n={tag:n,create:s,destroy:l,deps:d,next:null},s=nn.updateQueue,s===null?(s={lastEffect:null,stores:null},nn.updateQueue=s,s.lastEffect=n.next=n):(l=s.lastEffect,l===null?s.lastEffect=n.next=n:(d=l.next,l.next=n,n.next=d,s.lastEffect=n)),n}function Xm(){return mi().memoizedState}function Rl(n,s,l,d){var m=Vi();nn.flags|=n,m.memoizedState=xo(1|s,l,void 0,d===void 0?null:d)}function Pl(n,s,l,d){var m=mi();d=d===void 0?null:d;var M=void 0;if(fn!==null){var R=fn.memoizedState;if(M=R.destroy,d!==null&&id(d,R.deps)){m.memoizedState=xo(s,l,M,d);return}}nn.flags|=n,m.memoizedState=xo(1|s,l,M,d)}function qm(n,s){return Rl(8390656,8,n,s)}function ld(n,s){return Pl(2048,8,n,s)}function $m(n,s){return Pl(4,2,n,s)}function Ym(n,s){return Pl(4,4,n,s)}function Km(n,s){if(typeof s=="function")return n=n(),s(n),function(){s(null)};if(s!=null)return n=n(),s.current=n,function(){s.current=null}}function Zm(n,s,l){return l=l!=null?l.concat([n]):null,Pl(4,4,Km.bind(null,s,n),l)}function cd(){}function Jm(n,s){var l=mi();s=s===void 0?null:s;var d=l.memoizedState;return d!==null&&s!==null&&id(s,d[1])?d[0]:(l.memoizedState=[n,s],n)}function Qm(n,s){var l=mi();s=s===void 0?null:s;var d=l.memoizedState;return d!==null&&s!==null&&id(s,d[1])?d[0]:(n=n(),l.memoizedState=[n,s],n)}function eg(n,s,l){return(vr&21)===0?(n.baseState&&(n.baseState=!1,Zn=!0),n.memoizedState=l):(Ti(l,s)||(l=Ve(),nn.lanes|=l,_r|=l,n.baseState=!0),s)}function q_(n,s){var l=wt;wt=l!==0&&4>l?l:4,n(!0);var d=nd.transition;nd.transition={};try{n(!1),s()}finally{wt=l,nd.transition=d}}function tg(){return mi().memoizedState}function $_(n,s,l){var d=Vs(n);if(l={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null},ng(n))ig(s,l);else if(l=Im(n,s,l,d),l!==null){var m=Bn();Pi(l,n,d,m),sg(l,s,d)}}function Y_(n,s,l){var d=Vs(n),m={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null};if(ng(n))ig(s,m);else{var M=n.alternate;if(n.lanes===0&&(M===null||M.lanes===0)&&(M=s.lastRenderedReducer,M!==null))try{var R=s.lastRenderedState,H=M(R,l);if(m.hasEagerState=!0,m.eagerState=H,Ti(H,R)){var Z=s.interleaved;Z===null?(m.next=m,Ku(s)):(m.next=Z.next,Z.next=m),s.interleaved=m;return}}catch{}finally{}l=Im(n,s,m,d),l!==null&&(m=Bn(),Pi(l,n,d,m),sg(l,s,d))}}function ng(n){var s=n.alternate;return n===nn||s!==null&&s===nn}function ig(n,s){po=Al=!0;var l=n.pending;l===null?s.next=s:(s.next=l.next,l.next=s),n.pending=s}function sg(n,s,l){if((l&4194240)!==0){var d=s.lanes;d&=n.pendingLanes,l|=d,s.lanes=l,$n(n,l)}}var Ll={readContext:pi,useCallback:Rn,useContext:Rn,useEffect:Rn,useImperativeHandle:Rn,useInsertionEffect:Rn,useLayoutEffect:Rn,useMemo:Rn,useReducer:Rn,useRef:Rn,useState:Rn,useDebugValue:Rn,useDeferredValue:Rn,useTransition:Rn,useMutableSource:Rn,useSyncExternalStore:Rn,useId:Rn,unstable_isNewReconciler:!1},K_={readContext:pi,useCallback:function(n,s){return Vi().memoizedState=[n,s===void 0?null:s],n},useContext:pi,useEffect:qm,useImperativeHandle:function(n,s,l){return l=l!=null?l.concat([n]):null,Rl(4194308,4,Km.bind(null,s,n),l)},useLayoutEffect:function(n,s){return Rl(4194308,4,n,s)},useInsertionEffect:function(n,s){return Rl(4,2,n,s)},useMemo:function(n,s){var l=Vi();return s=s===void 0?null:s,n=n(),l.memoizedState=[n,s],n},useReducer:function(n,s,l){var d=Vi();return s=l!==void 0?l(s):s,d.memoizedState=d.baseState=s,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:s},d.queue=n,n=n.dispatch=$_.bind(null,nn,n),[d.memoizedState,n]},useRef:function(n){var s=Vi();return n={current:n},s.memoizedState=n},useState:Wm,useDebugValue:cd,useDeferredValue:function(n){return Vi().memoizedState=n},useTransition:function(){var n=Wm(!1),s=n[0];return n=q_.bind(null,n[1]),Vi().memoizedState=n,[s,n]},useMutableSource:function(){},useSyncExternalStore:function(n,s,l){var d=nn,m=Vi();if(Jt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),Sn===null)throw Error(t(349));(vr&30)!==0||Bm(d,s,l)}m.memoizedState=l;var M={value:l,getSnapshot:s};return m.queue=M,qm(Hm.bind(null,d,M,n),[n]),d.flags|=2048,xo(9,zm.bind(null,d,M,l,s),void 0,null),l},useId:function(){var n=Vi(),s=Sn.identifierPrefix;if(Jt){var l=cs,d=ls;l=(d&~(1<<32-je(d)-1)).toString(32)+l,s=":"+s+"R"+l,l=mo++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=X_++,s=":"+s+"r"+l.toString(32)+":";return n.memoizedState=s},unstable_isNewReconciler:!1},Z_={readContext:pi,useCallback:Jm,useContext:pi,useEffect:ld,useImperativeHandle:Zm,useInsertionEffect:$m,useLayoutEffect:Ym,useMemo:Qm,useReducer:ad,useRef:Xm,useState:function(){return ad(go)},useDebugValue:cd,useDeferredValue:function(n){var s=mi();return eg(s,fn.memoizedState,n)},useTransition:function(){var n=ad(go)[0],s=mi().memoizedState;return[n,s]},useMutableSource:Om,useSyncExternalStore:km,useId:tg,unstable_isNewReconciler:!1},J_={readContext:pi,useCallback:Jm,useContext:pi,useEffect:ld,useImperativeHandle:Zm,useInsertionEffect:$m,useLayoutEffect:Ym,useMemo:Qm,useReducer:od,useRef:Xm,useState:function(){return od(go)},useDebugValue:cd,useDeferredValue:function(n){var s=mi();return fn===null?s.memoizedState=n:eg(s,fn.memoizedState,n)},useTransition:function(){var n=od(go)[0],s=mi().memoizedState;return[n,s]},useMutableSource:Om,useSyncExternalStore:km,useId:tg,unstable_isNewReconciler:!1};function Ni(n,s){if(n&&n.defaultProps){s=te({},s),n=n.defaultProps;for(var l in n)s[l]===void 0&&(s[l]=n[l]);return s}return s}function ud(n,s,l,d){s=n.memoizedState,l=l(d,s),l=l==null?s:te({},s,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var Il={isMounted:function(n){return(n=n._reactInternals)?ki(n)===n:!1},enqueueSetState:function(n,s,l){n=n._reactInternals;var d=Bn(),m=Vs(n),M=ds(d,m);M.payload=s,l!=null&&(M.callback=l),s=ks(n,M,m),s!==null&&(Pi(s,n,m,d),wl(s,n,m))},enqueueReplaceState:function(n,s,l){n=n._reactInternals;var d=Bn(),m=Vs(n),M=ds(d,m);M.tag=1,M.payload=s,l!=null&&(M.callback=l),s=ks(n,M,m),s!==null&&(Pi(s,n,m,d),wl(s,n,m))},enqueueForceUpdate:function(n,s){n=n._reactInternals;var l=Bn(),d=Vs(n),m=ds(l,d);m.tag=2,s!=null&&(m.callback=s),s=ks(n,m,d),s!==null&&(Pi(s,n,d,l),wl(s,n,d))}};function rg(n,s,l,d,m,M,R){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(d,M,R):s.prototype&&s.prototype.isPureReactComponent?!no(l,d)||!no(m,M):!0}function ag(n,s,l){var d=!1,m=Us,M=s.contextType;return typeof M=="object"&&M!==null?M=pi(M):(m=Kn(s)?fr:An.current,d=s.contextTypes,M=(d=d!=null)?$r(n,m):Us),s=new s(l,M),n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Il,n.stateNode=s,s._reactInternals=n,d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=m,n.__reactInternalMemoizedMaskedChildContext=M),s}function og(n,s,l,d){n=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,d),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,d),s.state!==n&&Il.enqueueReplaceState(s,s.state,null)}function dd(n,s,l,d){var m=n.stateNode;m.props=l,m.state=n.memoizedState,m.refs={},Zu(n);var M=s.contextType;typeof M=="object"&&M!==null?m.context=pi(M):(M=Kn(s)?fr:An.current,m.context=$r(n,M)),m.state=n.memoizedState,M=s.getDerivedStateFromProps,typeof M=="function"&&(ud(n,s,M,l),m.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(s=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),s!==m.state&&Il.enqueueReplaceState(m,m.state,null),Tl(n,l,m,d),m.state=n.memoizedState),typeof m.componentDidMount=="function"&&(n.flags|=4194308)}function na(n,s){try{var l="",d=s;do l+=Ne(d),d=d.return;while(d);var m=l}catch(M){m=`
Error generating stack: `+M.message+`
`+M.stack}return{value:n,source:s,stack:m,digest:null}}function hd(n,s,l){return{value:n,source:null,stack:l??null,digest:s??null}}function fd(n,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var Q_=typeof WeakMap=="function"?WeakMap:Map;function lg(n,s,l){l=ds(-1,l),l.tag=3,l.payload={element:null};var d=s.value;return l.callback=function(){Bl||(Bl=!0,Nd=d),fd(n,s)},l}function cg(n,s,l){l=ds(-1,l),l.tag=3;var d=n.type.getDerivedStateFromError;if(typeof d=="function"){var m=s.value;l.payload=function(){return d(m)},l.callback=function(){fd(n,s)}}var M=n.stateNode;return M!==null&&typeof M.componentDidCatch=="function"&&(l.callback=function(){fd(n,s),typeof d!="function"&&(zs===null?zs=new Set([this]):zs.add(this));var R=s.stack;this.componentDidCatch(s.value,{componentStack:R!==null?R:""})}),l}function ug(n,s,l){var d=n.pingCache;if(d===null){d=n.pingCache=new Q_;var m=new Set;d.set(s,m)}else m=d.get(s),m===void 0&&(m=new Set,d.set(s,m));m.has(l)||(m.add(l),n=fy.bind(null,n,s,l),s.then(n,n))}function dg(n){do{var s;if((s=n.tag===13)&&(s=n.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return n;n=n.return}while(n!==null);return null}function hg(n,s,l,d,m){return(n.mode&1)===0?(n===s?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=ds(-1,1),s.tag=2,ks(l,s,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=m,n)}var ey=N.ReactCurrentOwner,Zn=!1;function kn(n,s,l,d){s.child=n===null?Lm(s,null,l,d):Jr(s,n.child,l,d)}function fg(n,s,l,d,m){l=l.render;var M=s.ref;return ea(s,m),d=sd(n,s,l,d,M,m),l=rd(),n!==null&&!Zn?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~m,hs(n,s,m)):(Jt&&l&&zu(s),s.flags|=1,kn(n,s,d,m),s.child)}function pg(n,s,l,d,m){if(n===null){var M=l.type;return typeof M=="function"&&!jd(M)&&M.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=M,mg(n,s,M,d,m)):(n=Xl(l.type,null,d,s,s.mode,m),n.ref=s.ref,n.return=s,s.child=n)}if(M=n.child,(n.lanes&m)===0){var R=M.memoizedProps;if(l=l.compare,l=l!==null?l:no,l(R,d)&&n.ref===s.ref)return hs(n,s,m)}return s.flags|=1,n=Ws(M,d),n.ref=s.ref,n.return=s,s.child=n}function mg(n,s,l,d,m){if(n!==null){var M=n.memoizedProps;if(no(M,d)&&n.ref===s.ref)if(Zn=!1,s.pendingProps=d=M,(n.lanes&m)!==0)(n.flags&131072)!==0&&(Zn=!0);else return s.lanes=n.lanes,hs(n,s,m)}return pd(n,s,l,d,m)}function gg(n,s,l){var d=s.pendingProps,m=d.children,M=n!==null?n.memoizedState:null;if(d.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Xt(sa,ai),ai|=l;else{if((l&1073741824)===0)return n=M!==null?M.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:n,cachePool:null,transitions:null},s.updateQueue=null,Xt(sa,ai),ai|=n,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=M!==null?M.baseLanes:l,Xt(sa,ai),ai|=d}else M!==null?(d=M.baseLanes|l,s.memoizedState=null):d=l,Xt(sa,ai),ai|=d;return kn(n,s,m,l),s.child}function xg(n,s){var l=s.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function pd(n,s,l,d,m){var M=Kn(l)?fr:An.current;return M=$r(s,M),ea(s,m),l=sd(n,s,l,d,M,m),d=rd(),n!==null&&!Zn?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~m,hs(n,s,m)):(Jt&&d&&zu(s),s.flags|=1,kn(n,s,l,m),s.child)}function vg(n,s,l,d,m){if(Kn(l)){var M=!0;xl(s)}else M=!1;if(ea(s,m),s.stateNode===null)jl(n,s),ag(s,l,d),dd(s,l,d,m),d=!0;else if(n===null){var R=s.stateNode,H=s.memoizedProps;R.props=H;var Z=R.context,pe=l.contextType;typeof pe=="object"&&pe!==null?pe=pi(pe):(pe=Kn(l)?fr:An.current,pe=$r(s,pe));var Te=l.getDerivedStateFromProps,Ae=typeof Te=="function"||typeof R.getSnapshotBeforeUpdate=="function";Ae||typeof R.UNSAFE_componentWillReceiveProps!="function"&&typeof R.componentWillReceiveProps!="function"||(H!==d||Z!==pe)&&og(s,R,d,pe),Os=!1;var we=s.memoizedState;R.state=we,Tl(s,d,R,m),Z=s.memoizedState,H!==d||we!==Z||Yn.current||Os?(typeof Te=="function"&&(ud(s,l,Te,d),Z=s.memoizedState),(H=Os||rg(s,l,H,d,we,Z,pe))?(Ae||typeof R.UNSAFE_componentWillMount!="function"&&typeof R.componentWillMount!="function"||(typeof R.componentWillMount=="function"&&R.componentWillMount(),typeof R.UNSAFE_componentWillMount=="function"&&R.UNSAFE_componentWillMount()),typeof R.componentDidMount=="function"&&(s.flags|=4194308)):(typeof R.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=d,s.memoizedState=Z),R.props=d,R.state=Z,R.context=pe,d=H):(typeof R.componentDidMount=="function"&&(s.flags|=4194308),d=!1)}else{R=s.stateNode,Dm(n,s),H=s.memoizedProps,pe=s.type===s.elementType?H:Ni(s.type,H),R.props=pe,Ae=s.pendingProps,we=R.context,Z=l.contextType,typeof Z=="object"&&Z!==null?Z=pi(Z):(Z=Kn(l)?fr:An.current,Z=$r(s,Z));var Ge=l.getDerivedStateFromProps;(Te=typeof Ge=="function"||typeof R.getSnapshotBeforeUpdate=="function")||typeof R.UNSAFE_componentWillReceiveProps!="function"&&typeof R.componentWillReceiveProps!="function"||(H!==Ae||we!==Z)&&og(s,R,d,Z),Os=!1,we=s.memoizedState,R.state=we,Tl(s,d,R,m);var Ke=s.memoizedState;H!==Ae||we!==Ke||Yn.current||Os?(typeof Ge=="function"&&(ud(s,l,Ge,d),Ke=s.memoizedState),(pe=Os||rg(s,l,pe,d,we,Ke,Z)||!1)?(Te||typeof R.UNSAFE_componentWillUpdate!="function"&&typeof R.componentWillUpdate!="function"||(typeof R.componentWillUpdate=="function"&&R.componentWillUpdate(d,Ke,Z),typeof R.UNSAFE_componentWillUpdate=="function"&&R.UNSAFE_componentWillUpdate(d,Ke,Z)),typeof R.componentDidUpdate=="function"&&(s.flags|=4),typeof R.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof R.componentDidUpdate!="function"||H===n.memoizedProps&&we===n.memoizedState||(s.flags|=4),typeof R.getSnapshotBeforeUpdate!="function"||H===n.memoizedProps&&we===n.memoizedState||(s.flags|=1024),s.memoizedProps=d,s.memoizedState=Ke),R.props=d,R.state=Ke,R.context=Z,d=pe):(typeof R.componentDidUpdate!="function"||H===n.memoizedProps&&we===n.memoizedState||(s.flags|=4),typeof R.getSnapshotBeforeUpdate!="function"||H===n.memoizedProps&&we===n.memoizedState||(s.flags|=1024),d=!1)}return md(n,s,l,d,M,m)}function md(n,s,l,d,m,M){xg(n,s);var R=(s.flags&128)!==0;if(!d&&!R)return m&&Em(s,l,!1),hs(n,s,M);d=s.stateNode,ey.current=s;var H=R&&typeof l.getDerivedStateFromError!="function"?null:d.render();return s.flags|=1,n!==null&&R?(s.child=Jr(s,n.child,null,M),s.child=Jr(s,null,H,M)):kn(n,s,H,M),s.memoizedState=d.state,m&&Em(s,l,!0),s.child}function _g(n){var s=n.stateNode;s.pendingContext?Sm(n,s.pendingContext,s.pendingContext!==s.context):s.context&&Sm(n,s.context,!1),Ju(n,s.containerInfo)}function yg(n,s,l,d,m){return Zr(),Wu(m),s.flags|=256,kn(n,s,l,d),s.child}var gd={dehydrated:null,treeContext:null,retryLane:0};function xd(n){return{baseLanes:n,cachePool:null,transitions:null}}function Sg(n,s,l){var d=s.pendingProps,m=tn.current,M=!1,R=(s.flags&128)!==0,H;if((H=R)||(H=n!==null&&n.memoizedState===null?!1:(m&2)!==0),H?(M=!0,s.flags&=-129):(n===null||n.memoizedState!==null)&&(m|=1),Xt(tn,m&1),n===null)return Gu(s),n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((s.mode&1)===0?s.lanes=1:n.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(R=d.children,n=d.fallback,M?(d=s.mode,M=s.child,R={mode:"hidden",children:R},(d&1)===0&&M!==null?(M.childLanes=0,M.pendingProps=R):M=ql(R,d,0,null),n=Er(n,d,l,null),M.return=s,n.return=s,M.sibling=n,s.child=M,s.child.memoizedState=xd(l),s.memoizedState=gd,n):vd(s,R));if(m=n.memoizedState,m!==null&&(H=m.dehydrated,H!==null))return ty(n,s,R,d,H,m,l);if(M){M=d.fallback,R=s.mode,m=n.child,H=m.sibling;var Z={mode:"hidden",children:d.children};return(R&1)===0&&s.child!==m?(d=s.child,d.childLanes=0,d.pendingProps=Z,s.deletions=null):(d=Ws(m,Z),d.subtreeFlags=m.subtreeFlags&14680064),H!==null?M=Ws(H,M):(M=Er(M,R,l,null),M.flags|=2),M.return=s,d.return=s,d.sibling=M,s.child=d,d=M,M=s.child,R=n.child.memoizedState,R=R===null?xd(l):{baseLanes:R.baseLanes|l,cachePool:null,transitions:R.transitions},M.memoizedState=R,M.childLanes=n.childLanes&~l,s.memoizedState=gd,d}return M=n.child,n=M.sibling,d=Ws(M,{mode:"visible",children:d.children}),(s.mode&1)===0&&(d.lanes=l),d.return=s,d.sibling=null,n!==null&&(l=s.deletions,l===null?(s.deletions=[n],s.flags|=16):l.push(n)),s.child=d,s.memoizedState=null,d}function vd(n,s){return s=ql({mode:"visible",children:s},n.mode,0,null),s.return=n,n.child=s}function Dl(n,s,l,d){return d!==null&&Wu(d),Jr(s,n.child,null,l),n=vd(s,s.pendingProps.children),n.flags|=2,s.memoizedState=null,n}function ty(n,s,l,d,m,M,R){if(l)return s.flags&256?(s.flags&=-257,d=hd(Error(t(422))),Dl(n,s,R,d)):s.memoizedState!==null?(s.child=n.child,s.flags|=128,null):(M=d.fallback,m=s.mode,d=ql({mode:"visible",children:d.children},m,0,null),M=Er(M,m,R,null),M.flags|=2,d.return=s,M.return=s,d.sibling=M,s.child=d,(s.mode&1)!==0&&Jr(s,n.child,null,R),s.child.memoizedState=xd(R),s.memoizedState=gd,M);if((s.mode&1)===0)return Dl(n,s,R,null);if(m.data==="$!"){if(d=m.nextSibling&&m.nextSibling.dataset,d)var H=d.dgst;return d=H,M=Error(t(419)),d=hd(M,d,void 0),Dl(n,s,R,d)}if(H=(R&n.childLanes)!==0,Zn||H){if(d=Sn,d!==null){switch(R&-R){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=(m&(d.suspendedLanes|R))!==0?0:m,m!==0&&m!==M.retryLane&&(M.retryLane=m,us(n,m),Pi(d,n,m,-1))}return Dd(),d=hd(Error(t(421))),Dl(n,s,R,d)}return m.data==="$?"?(s.flags|=128,s.child=n.child,s=py.bind(null,n),m._reactRetry=s,null):(n=M.treeContext,ri=Ds(m.nextSibling),si=s,Jt=!0,Ci=null,n!==null&&(hi[fi++]=ls,hi[fi++]=cs,hi[fi++]=pr,ls=n.id,cs=n.overflow,pr=s),s=vd(s,d.children),s.flags|=4096,s)}function Mg(n,s,l){n.lanes|=s;var d=n.alternate;d!==null&&(d.lanes|=s),Yu(n.return,s,l)}function _d(n,s,l,d,m){var M=n.memoizedState;M===null?n.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:d,tail:l,tailMode:m}:(M.isBackwards=s,M.rendering=null,M.renderingStartTime=0,M.last=d,M.tail=l,M.tailMode=m)}function Eg(n,s,l){var d=s.pendingProps,m=d.revealOrder,M=d.tail;if(kn(n,s,d.children,l),d=tn.current,(d&2)!==0)d=d&1|2,s.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=s.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Mg(n,l,s);else if(n.tag===19)Mg(n,l,s);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break e;for(;n.sibling===null;){if(n.return===null||n.return===s)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}d&=1}if(Xt(tn,d),(s.mode&1)===0)s.memoizedState=null;else switch(m){case"forwards":for(l=s.child,m=null;l!==null;)n=l.alternate,n!==null&&Cl(n)===null&&(m=l),l=l.sibling;l=m,l===null?(m=s.child,s.child=null):(m=l.sibling,l.sibling=null),_d(s,!1,m,l,M);break;case"backwards":for(l=null,m=s.child,s.child=null;m!==null;){if(n=m.alternate,n!==null&&Cl(n)===null){s.child=m;break}n=m.sibling,m.sibling=l,l=m,m=n}_d(s,!0,l,null,M);break;case"together":_d(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function jl(n,s){(s.mode&1)===0&&n!==null&&(n.alternate=null,s.alternate=null,s.flags|=2)}function hs(n,s,l){if(n!==null&&(s.dependencies=n.dependencies),_r|=s.lanes,(l&s.childLanes)===0)return null;if(n!==null&&s.child!==n.child)throw Error(t(153));if(s.child!==null){for(n=s.child,l=Ws(n,n.pendingProps),s.child=l,l.return=s;n.sibling!==null;)n=n.sibling,l=l.sibling=Ws(n,n.pendingProps),l.return=s;l.sibling=null}return s.child}function ny(n,s,l){switch(s.tag){case 3:_g(s),Zr();break;case 5:Fm(s);break;case 1:Kn(s.type)&&xl(s);break;case 4:Ju(s,s.stateNode.containerInfo);break;case 10:var d=s.type._context,m=s.memoizedProps.value;Xt(El,d._currentValue),d._currentValue=m;break;case 13:if(d=s.memoizedState,d!==null)return d.dehydrated!==null?(Xt(tn,tn.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?Sg(n,s,l):(Xt(tn,tn.current&1),n=hs(n,s,l),n!==null?n.sibling:null);Xt(tn,tn.current&1);break;case 19:if(d=(l&s.childLanes)!==0,(n.flags&128)!==0){if(d)return Eg(n,s,l);s.flags|=128}if(m=s.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),Xt(tn,tn.current),d)break;return null;case 22:case 23:return s.lanes=0,gg(n,s,l)}return hs(n,s,l)}var bg,yd,wg,Tg;bg=function(n,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},yd=function(){},wg=function(n,s,l,d){var m=n.memoizedProps;if(m!==d){n=s.stateNode,xr(Hi.current);var M=null;switch(l){case"input":m=et(n,m),d=et(n,d),M=[];break;case"select":m=te({},m,{value:void 0}),d=te({},d,{value:void 0}),M=[];break;case"textarea":m=pt(n,m),d=pt(n,d),M=[];break;default:typeof m.onClick!="function"&&typeof d.onClick=="function"&&(n.onclick=pl)}k(l,d);var R;l=null;for(pe in m)if(!d.hasOwnProperty(pe)&&m.hasOwnProperty(pe)&&m[pe]!=null)if(pe==="style"){var H=m[pe];for(R in H)H.hasOwnProperty(R)&&(l||(l={}),l[R]="")}else pe!=="dangerouslySetInnerHTML"&&pe!=="children"&&pe!=="suppressContentEditableWarning"&&pe!=="suppressHydrationWarning"&&pe!=="autoFocus"&&(o.hasOwnProperty(pe)?M||(M=[]):(M=M||[]).push(pe,null));for(pe in d){var Z=d[pe];if(H=m!=null?m[pe]:void 0,d.hasOwnProperty(pe)&&Z!==H&&(Z!=null||H!=null))if(pe==="style")if(H){for(R in H)!H.hasOwnProperty(R)||Z&&Z.hasOwnProperty(R)||(l||(l={}),l[R]="");for(R in Z)Z.hasOwnProperty(R)&&H[R]!==Z[R]&&(l||(l={}),l[R]=Z[R])}else l||(M||(M=[]),M.push(pe,l)),l=Z;else pe==="dangerouslySetInnerHTML"?(Z=Z?Z.__html:void 0,H=H?H.__html:void 0,Z!=null&&H!==Z&&(M=M||[]).push(pe,Z)):pe==="children"?typeof Z!="string"&&typeof Z!="number"||(M=M||[]).push(pe,""+Z):pe!=="suppressContentEditableWarning"&&pe!=="suppressHydrationWarning"&&(o.hasOwnProperty(pe)?(Z!=null&&pe==="onScroll"&&Yt("scroll",n),M||H===Z||(M=[])):(M=M||[]).push(pe,Z))}l&&(M=M||[]).push("style",l);var pe=M;(s.updateQueue=pe)&&(s.flags|=4)}},Tg=function(n,s,l,d){l!==d&&(s.flags|=4)};function vo(n,s){if(!Jt)switch(n.tailMode){case"hidden":s=n.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var d=null;l!==null;)l.alternate!==null&&(d=l),l=l.sibling;d===null?s||n.tail===null?n.tail=null:n.tail.sibling=null:d.sibling=null}}function Pn(n){var s=n.alternate!==null&&n.alternate.child===n.child,l=0,d=0;if(s)for(var m=n.child;m!==null;)l|=m.lanes|m.childLanes,d|=m.subtreeFlags&14680064,d|=m.flags&14680064,m.return=n,m=m.sibling;else for(m=n.child;m!==null;)l|=m.lanes|m.childLanes,d|=m.subtreeFlags,d|=m.flags,m.return=n,m=m.sibling;return n.subtreeFlags|=d,n.childLanes=l,s}function iy(n,s,l){var d=s.pendingProps;switch(Hu(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pn(s),null;case 1:return Kn(s.type)&&gl(),Pn(s),null;case 3:return d=s.stateNode,ta(),Kt(Yn),Kt(An),td(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(n===null||n.child===null)&&(Sl(s)?s.flags|=4:n===null||n.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Ci!==null&&(Pd(Ci),Ci=null))),yd(n,s),Pn(s),null;case 5:Qu(s);var m=xr(fo.current);if(l=s.type,n!==null&&s.stateNode!=null)wg(n,s,l,d,m),n.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!d){if(s.stateNode===null)throw Error(t(166));return Pn(s),null}if(n=xr(Hi.current),Sl(s)){d=s.stateNode,l=s.type;var M=s.memoizedProps;switch(d[zi]=s,d[oo]=M,n=(s.mode&1)!==0,l){case"dialog":Yt("cancel",d),Yt("close",d);break;case"iframe":case"object":case"embed":Yt("load",d);break;case"video":case"audio":for(m=0;m<so.length;m++)Yt(so[m],d);break;case"source":Yt("error",d);break;case"img":case"image":case"link":Yt("error",d),Yt("load",d);break;case"details":Yt("toggle",d);break;case"input":_t(d,M),Yt("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!M.multiple},Yt("invalid",d);break;case"textarea":Dt(d,M),Yt("invalid",d)}k(l,M),m=null;for(var R in M)if(M.hasOwnProperty(R)){var H=M[R];R==="children"?typeof H=="string"?d.textContent!==H&&(M.suppressHydrationWarning!==!0&&fl(d.textContent,H,n),m=["children",H]):typeof H=="number"&&d.textContent!==""+H&&(M.suppressHydrationWarning!==!0&&fl(d.textContent,H,n),m=["children",""+H]):o.hasOwnProperty(R)&&H!=null&&R==="onScroll"&&Yt("scroll",d)}switch(l){case"input":He(d),Bt(d,M,!0);break;case"textarea":He(d),Gt(d);break;case"select":case"option":break;default:typeof M.onClick=="function"&&(d.onclick=pl)}d=m,s.updateQueue=d,d!==null&&(s.flags|=4)}else{R=m.nodeType===9?m:m.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=j(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=R.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof d.is=="string"?n=R.createElement(l,{is:d.is}):(n=R.createElement(l),l==="select"&&(R=n,d.multiple?R.multiple=!0:d.size&&(R.size=d.size))):n=R.createElementNS(n,l),n[zi]=s,n[oo]=d,bg(n,s,!1,!1),s.stateNode=n;e:{switch(R=K(l,d),l){case"dialog":Yt("cancel",n),Yt("close",n),m=d;break;case"iframe":case"object":case"embed":Yt("load",n),m=d;break;case"video":case"audio":for(m=0;m<so.length;m++)Yt(so[m],n);m=d;break;case"source":Yt("error",n),m=d;break;case"img":case"image":case"link":Yt("error",n),Yt("load",n),m=d;break;case"details":Yt("toggle",n),m=d;break;case"input":_t(n,d),m=et(n,d),Yt("invalid",n);break;case"option":m=d;break;case"select":n._wrapperState={wasMultiple:!!d.multiple},m=te({},d,{value:void 0}),Yt("invalid",n);break;case"textarea":Dt(n,d),m=pt(n,d),Yt("invalid",n);break;default:m=d}k(l,m),H=m;for(M in H)if(H.hasOwnProperty(M)){var Z=H[M];M==="style"?ye(n,Z):M==="dangerouslySetInnerHTML"?(Z=Z?Z.__html:void 0,Z!=null&&_e(n,Z)):M==="children"?typeof Z=="string"?(l!=="textarea"||Z!=="")&&Ee(n,Z):typeof Z=="number"&&Ee(n,""+Z):M!=="suppressContentEditableWarning"&&M!=="suppressHydrationWarning"&&M!=="autoFocus"&&(o.hasOwnProperty(M)?Z!=null&&M==="onScroll"&&Yt("scroll",n):Z!=null&&b(n,M,Z,R))}switch(l){case"input":He(n),Bt(n,d,!1);break;case"textarea":He(n),Gt(n);break;case"option":d.value!=null&&n.setAttribute("value",""+fe(d.value));break;case"select":n.multiple=!!d.multiple,M=d.value,M!=null?zt(n,!!d.multiple,M,!1):d.defaultValue!=null&&zt(n,!!d.multiple,d.defaultValue,!0);break;default:typeof m.onClick=="function"&&(n.onclick=pl)}switch(l){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Pn(s),null;case 6:if(n&&s.stateNode!=null)Tg(n,s,n.memoizedProps,d);else{if(typeof d!="string"&&s.stateNode===null)throw Error(t(166));if(l=xr(fo.current),xr(Hi.current),Sl(s)){if(d=s.stateNode,l=s.memoizedProps,d[zi]=s,(M=d.nodeValue!==l)&&(n=si,n!==null))switch(n.tag){case 3:fl(d.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&fl(d.nodeValue,l,(n.mode&1)!==0)}M&&(s.flags|=4)}else d=(l.nodeType===9?l:l.ownerDocument).createTextNode(d),d[zi]=s,s.stateNode=d}return Pn(s),null;case 13:if(Kt(tn),d=s.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Jt&&ri!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Am(),Zr(),s.flags|=98560,M=!1;else if(M=Sl(s),d!==null&&d.dehydrated!==null){if(n===null){if(!M)throw Error(t(318));if(M=s.memoizedState,M=M!==null?M.dehydrated:null,!M)throw Error(t(317));M[zi]=s}else Zr(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Pn(s),M=!1}else Ci!==null&&(Pd(Ci),Ci=null),M=!0;if(!M)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(d=d!==null,d!==(n!==null&&n.memoizedState!==null)&&d&&(s.child.flags|=8192,(s.mode&1)!==0&&(n===null||(tn.current&1)!==0?pn===0&&(pn=3):Dd())),s.updateQueue!==null&&(s.flags|=4),Pn(s),null);case 4:return ta(),yd(n,s),n===null&&ro(s.stateNode.containerInfo),Pn(s),null;case 10:return $u(s.type._context),Pn(s),null;case 17:return Kn(s.type)&&gl(),Pn(s),null;case 19:if(Kt(tn),M=s.memoizedState,M===null)return Pn(s),null;if(d=(s.flags&128)!==0,R=M.rendering,R===null)if(d)vo(M,!1);else{if(pn!==0||n!==null&&(n.flags&128)!==0)for(n=s.child;n!==null;){if(R=Cl(n),R!==null){for(s.flags|=128,vo(M,!1),d=R.updateQueue,d!==null&&(s.updateQueue=d,s.flags|=4),s.subtreeFlags=0,d=l,l=s.child;l!==null;)M=l,n=d,M.flags&=14680066,R=M.alternate,R===null?(M.childLanes=0,M.lanes=n,M.child=null,M.subtreeFlags=0,M.memoizedProps=null,M.memoizedState=null,M.updateQueue=null,M.dependencies=null,M.stateNode=null):(M.childLanes=R.childLanes,M.lanes=R.lanes,M.child=R.child,M.subtreeFlags=0,M.deletions=null,M.memoizedProps=R.memoizedProps,M.memoizedState=R.memoizedState,M.updateQueue=R.updateQueue,M.type=R.type,n=R.dependencies,M.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return Xt(tn,tn.current&1|2),s.child}n=n.sibling}M.tail!==null&&en()>ra&&(s.flags|=128,d=!0,vo(M,!1),s.lanes=4194304)}else{if(!d)if(n=Cl(R),n!==null){if(s.flags|=128,d=!0,l=n.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),vo(M,!0),M.tail===null&&M.tailMode==="hidden"&&!R.alternate&&!Jt)return Pn(s),null}else 2*en()-M.renderingStartTime>ra&&l!==1073741824&&(s.flags|=128,d=!0,vo(M,!1),s.lanes=4194304);M.isBackwards?(R.sibling=s.child,s.child=R):(l=M.last,l!==null?l.sibling=R:s.child=R,M.last=R)}return M.tail!==null?(s=M.tail,M.rendering=s,M.tail=s.sibling,M.renderingStartTime=en(),s.sibling=null,l=tn.current,Xt(tn,d?l&1|2:l&1),s):(Pn(s),null);case 22:case 23:return Id(),d=s.memoizedState!==null,n!==null&&n.memoizedState!==null!==d&&(s.flags|=8192),d&&(s.mode&1)!==0?(ai&1073741824)!==0&&(Pn(s),s.subtreeFlags&6&&(s.flags|=8192)):Pn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function sy(n,s){switch(Hu(s),s.tag){case 1:return Kn(s.type)&&gl(),n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 3:return ta(),Kt(Yn),Kt(An),td(),n=s.flags,(n&65536)!==0&&(n&128)===0?(s.flags=n&-65537|128,s):null;case 5:return Qu(s),null;case 13:if(Kt(tn),n=s.memoizedState,n!==null&&n.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Zr()}return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 19:return Kt(tn),null;case 4:return ta(),null;case 10:return $u(s.type._context),null;case 22:case 23:return Id(),null;case 24:return null;default:return null}}var Ul=!1,Ln=!1,ry=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function ia(n,s){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(d){rn(n,s,d)}else l.current=null}function Sd(n,s,l){try{l()}catch(d){rn(n,s,d)}}var Cg=!1;function ay(n,s){if(Iu=nl,n=rm(),wu(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var d=l.getSelection&&l.getSelection();if(d&&d.rangeCount!==0){l=d.anchorNode;var m=d.anchorOffset,M=d.focusNode;d=d.focusOffset;try{l.nodeType,M.nodeType}catch{l=null;break e}var R=0,H=-1,Z=-1,pe=0,Te=0,Ae=n,we=null;t:for(;;){for(var Ge;Ae!==l||m!==0&&Ae.nodeType!==3||(H=R+m),Ae!==M||d!==0&&Ae.nodeType!==3||(Z=R+d),Ae.nodeType===3&&(R+=Ae.nodeValue.length),(Ge=Ae.firstChild)!==null;)we=Ae,Ae=Ge;for(;;){if(Ae===n)break t;if(we===l&&++pe===m&&(H=R),we===M&&++Te===d&&(Z=R),(Ge=Ae.nextSibling)!==null)break;Ae=we,we=Ae.parentNode}Ae=Ge}l=H===-1||Z===-1?null:{start:H,end:Z}}else l=null}l=l||{start:0,end:0}}else l=null;for(Du={focusedElem:n,selectionRange:l},nl=!1,Ye=s;Ye!==null;)if(s=Ye,n=s.child,(s.subtreeFlags&1028)!==0&&n!==null)n.return=s,Ye=n;else for(;Ye!==null;){s=Ye;try{var Ke=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(Ke!==null){var Je=Ke.memoizedProps,on=Ke.memoizedState,le=s.stateNode,ie=le.getSnapshotBeforeUpdate(s.elementType===s.type?Je:Ni(s.type,Je),on);le.__reactInternalSnapshotBeforeUpdate=ie}break;case 3:var de=s.stateNode.containerInfo;de.nodeType===1?de.textContent="":de.nodeType===9&&de.documentElement&&de.removeChild(de.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(De){rn(s,s.return,De)}if(n=s.sibling,n!==null){n.return=s.return,Ye=n;break}Ye=s.return}return Ke=Cg,Cg=!1,Ke}function _o(n,s,l){var d=s.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var m=d=d.next;do{if((m.tag&n)===n){var M=m.destroy;m.destroy=void 0,M!==void 0&&Sd(s,l,M)}m=m.next}while(m!==d)}}function Fl(n,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&n)===n){var d=l.create;l.destroy=d()}l=l.next}while(l!==s)}}function Md(n){var s=n.ref;if(s!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof s=="function"?s(n):s.current=n}}function Ng(n){var s=n.alternate;s!==null&&(n.alternate=null,Ng(s)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(s=n.stateNode,s!==null&&(delete s[zi],delete s[oo],delete s[Ou],delete s[H_],delete s[V_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Ag(n){return n.tag===5||n.tag===3||n.tag===4}function Rg(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Ag(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ed(n,s,l){var d=n.tag;if(d===5||d===6)n=n.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(n,s):l.insertBefore(n,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(n,l)):(s=l,s.appendChild(n)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=pl));else if(d!==4&&(n=n.child,n!==null))for(Ed(n,s,l),n=n.sibling;n!==null;)Ed(n,s,l),n=n.sibling}function bd(n,s,l){var d=n.tag;if(d===5||d===6)n=n.stateNode,s?l.insertBefore(n,s):l.appendChild(n);else if(d!==4&&(n=n.child,n!==null))for(bd(n,s,l),n=n.sibling;n!==null;)bd(n,s,l),n=n.sibling}var Tn=null,Ai=!1;function Bs(n,s,l){for(l=l.child;l!==null;)Pg(n,s,l),l=l.sibling}function Pg(n,s,l){if(Fe&&typeof Fe.onCommitFiberUnmount=="function")try{Fe.onCommitFiberUnmount(ce,l)}catch{}switch(l.tag){case 5:Ln||ia(l,s);case 6:var d=Tn,m=Ai;Tn=null,Bs(n,s,l),Tn=d,Ai=m,Tn!==null&&(Ai?(n=Tn,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):Tn.removeChild(l.stateNode));break;case 18:Tn!==null&&(Ai?(n=Tn,l=l.stateNode,n.nodeType===8?Fu(n.parentNode,l):n.nodeType===1&&Fu(n,l),Ka(n)):Fu(Tn,l.stateNode));break;case 4:d=Tn,m=Ai,Tn=l.stateNode.containerInfo,Ai=!0,Bs(n,s,l),Tn=d,Ai=m;break;case 0:case 11:case 14:case 15:if(!Ln&&(d=l.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){m=d=d.next;do{var M=m,R=M.destroy;M=M.tag,R!==void 0&&((M&2)!==0||(M&4)!==0)&&Sd(l,s,R),m=m.next}while(m!==d)}Bs(n,s,l);break;case 1:if(!Ln&&(ia(l,s),d=l.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=l.memoizedProps,d.state=l.memoizedState,d.componentWillUnmount()}catch(H){rn(l,s,H)}Bs(n,s,l);break;case 21:Bs(n,s,l);break;case 22:l.mode&1?(Ln=(d=Ln)||l.memoizedState!==null,Bs(n,s,l),Ln=d):Bs(n,s,l);break;default:Bs(n,s,l)}}function Lg(n){var s=n.updateQueue;if(s!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new ry),s.forEach(function(d){var m=my.bind(null,n,d);l.has(d)||(l.add(d),d.then(m,m))})}}function Ri(n,s){var l=s.deletions;if(l!==null)for(var d=0;d<l.length;d++){var m=l[d];try{var M=n,R=s,H=R;e:for(;H!==null;){switch(H.tag){case 5:Tn=H.stateNode,Ai=!1;break e;case 3:Tn=H.stateNode.containerInfo,Ai=!0;break e;case 4:Tn=H.stateNode.containerInfo,Ai=!0;break e}H=H.return}if(Tn===null)throw Error(t(160));Pg(M,R,m),Tn=null,Ai=!1;var Z=m.alternate;Z!==null&&(Z.return=null),m.return=null}catch(pe){rn(m,s,pe)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Ig(s,n),s=s.sibling}function Ig(n,s){var l=n.alternate,d=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ri(s,n),Gi(n),d&4){try{_o(3,n,n.return),Fl(3,n)}catch(Je){rn(n,n.return,Je)}try{_o(5,n,n.return)}catch(Je){rn(n,n.return,Je)}}break;case 1:Ri(s,n),Gi(n),d&512&&l!==null&&ia(l,l.return);break;case 5:if(Ri(s,n),Gi(n),d&512&&l!==null&&ia(l,l.return),n.flags&32){var m=n.stateNode;try{Ee(m,"")}catch(Je){rn(n,n.return,Je)}}if(d&4&&(m=n.stateNode,m!=null)){var M=n.memoizedProps,R=l!==null?l.memoizedProps:M,H=n.type,Z=n.updateQueue;if(n.updateQueue=null,Z!==null)try{H==="input"&&M.type==="radio"&&M.name!=null&&ht(m,M),K(H,R);var pe=K(H,M);for(R=0;R<Z.length;R+=2){var Te=Z[R],Ae=Z[R+1];Te==="style"?ye(m,Ae):Te==="dangerouslySetInnerHTML"?_e(m,Ae):Te==="children"?Ee(m,Ae):b(m,Te,Ae,pe)}switch(H){case"input":kt(m,M);break;case"textarea":Oe(m,M);break;case"select":var we=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!M.multiple;var Ge=M.value;Ge!=null?zt(m,!!M.multiple,Ge,!1):we!==!!M.multiple&&(M.defaultValue!=null?zt(m,!!M.multiple,M.defaultValue,!0):zt(m,!!M.multiple,M.multiple?[]:"",!1))}m[oo]=M}catch(Je){rn(n,n.return,Je)}}break;case 6:if(Ri(s,n),Gi(n),d&4){if(n.stateNode===null)throw Error(t(162));m=n.stateNode,M=n.memoizedProps;try{m.nodeValue=M}catch(Je){rn(n,n.return,Je)}}break;case 3:if(Ri(s,n),Gi(n),d&4&&l!==null&&l.memoizedState.isDehydrated)try{Ka(s.containerInfo)}catch(Je){rn(n,n.return,Je)}break;case 4:Ri(s,n),Gi(n);break;case 13:Ri(s,n),Gi(n),m=n.child,m.flags&8192&&(M=m.memoizedState!==null,m.stateNode.isHidden=M,!M||m.alternate!==null&&m.alternate.memoizedState!==null||(Cd=en())),d&4&&Lg(n);break;case 22:if(Te=l!==null&&l.memoizedState!==null,n.mode&1?(Ln=(pe=Ln)||Te,Ri(s,n),Ln=pe):Ri(s,n),Gi(n),d&8192){if(pe=n.memoizedState!==null,(n.stateNode.isHidden=pe)&&!Te&&(n.mode&1)!==0)for(Ye=n,Te=n.child;Te!==null;){for(Ae=Ye=Te;Ye!==null;){switch(we=Ye,Ge=we.child,we.tag){case 0:case 11:case 14:case 15:_o(4,we,we.return);break;case 1:ia(we,we.return);var Ke=we.stateNode;if(typeof Ke.componentWillUnmount=="function"){d=we,l=we.return;try{s=d,Ke.props=s.memoizedProps,Ke.state=s.memoizedState,Ke.componentWillUnmount()}catch(Je){rn(d,l,Je)}}break;case 5:ia(we,we.return);break;case 22:if(we.memoizedState!==null){Ug(Ae);continue}}Ge!==null?(Ge.return=we,Ye=Ge):Ug(Ae)}Te=Te.sibling}e:for(Te=null,Ae=n;;){if(Ae.tag===5){if(Te===null){Te=Ae;try{m=Ae.stateNode,pe?(M=m.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none"):(H=Ae.stateNode,Z=Ae.memoizedProps.style,R=Z!=null&&Z.hasOwnProperty("display")?Z.display:null,H.style.display=ge("display",R))}catch(Je){rn(n,n.return,Je)}}}else if(Ae.tag===6){if(Te===null)try{Ae.stateNode.nodeValue=pe?"":Ae.memoizedProps}catch(Je){rn(n,n.return,Je)}}else if((Ae.tag!==22&&Ae.tag!==23||Ae.memoizedState===null||Ae===n)&&Ae.child!==null){Ae.child.return=Ae,Ae=Ae.child;continue}if(Ae===n)break e;for(;Ae.sibling===null;){if(Ae.return===null||Ae.return===n)break e;Te===Ae&&(Te=null),Ae=Ae.return}Te===Ae&&(Te=null),Ae.sibling.return=Ae.return,Ae=Ae.sibling}}break;case 19:Ri(s,n),Gi(n),d&4&&Lg(n);break;case 21:break;default:Ri(s,n),Gi(n)}}function Gi(n){var s=n.flags;if(s&2){try{e:{for(var l=n.return;l!==null;){if(Ag(l)){var d=l;break e}l=l.return}throw Error(t(160))}switch(d.tag){case 5:var m=d.stateNode;d.flags&32&&(Ee(m,""),d.flags&=-33);var M=Rg(n);bd(n,M,m);break;case 3:case 4:var R=d.stateNode.containerInfo,H=Rg(n);Ed(n,H,R);break;default:throw Error(t(161))}}catch(Z){rn(n,n.return,Z)}n.flags&=-3}s&4096&&(n.flags&=-4097)}function oy(n,s,l){Ye=n,Dg(n)}function Dg(n,s,l){for(var d=(n.mode&1)!==0;Ye!==null;){var m=Ye,M=m.child;if(m.tag===22&&d){var R=m.memoizedState!==null||Ul;if(!R){var H=m.alternate,Z=H!==null&&H.memoizedState!==null||Ln;H=Ul;var pe=Ln;if(Ul=R,(Ln=Z)&&!pe)for(Ye=m;Ye!==null;)R=Ye,Z=R.child,R.tag===22&&R.memoizedState!==null?Fg(m):Z!==null?(Z.return=R,Ye=Z):Fg(m);for(;M!==null;)Ye=M,Dg(M),M=M.sibling;Ye=m,Ul=H,Ln=pe}jg(n)}else(m.subtreeFlags&8772)!==0&&M!==null?(M.return=m,Ye=M):jg(n)}}function jg(n){for(;Ye!==null;){var s=Ye;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Ln||Fl(5,s);break;case 1:var d=s.stateNode;if(s.flags&4&&!Ln)if(l===null)d.componentDidMount();else{var m=s.elementType===s.type?l.memoizedProps:Ni(s.type,l.memoizedProps);d.componentDidUpdate(m,l.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var M=s.updateQueue;M!==null&&Um(s,M,d);break;case 3:var R=s.updateQueue;if(R!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}Um(s,R,l)}break;case 5:var H=s.stateNode;if(l===null&&s.flags&4){l=H;var Z=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":Z.autoFocus&&l.focus();break;case"img":Z.src&&(l.src=Z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var pe=s.alternate;if(pe!==null){var Te=pe.memoizedState;if(Te!==null){var Ae=Te.dehydrated;Ae!==null&&Ka(Ae)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ln||s.flags&512&&Md(s)}catch(we){rn(s,s.return,we)}}if(s===n){Ye=null;break}if(l=s.sibling,l!==null){l.return=s.return,Ye=l;break}Ye=s.return}}function Ug(n){for(;Ye!==null;){var s=Ye;if(s===n){Ye=null;break}var l=s.sibling;if(l!==null){l.return=s.return,Ye=l;break}Ye=s.return}}function Fg(n){for(;Ye!==null;){var s=Ye;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{Fl(4,s)}catch(Z){rn(s,l,Z)}break;case 1:var d=s.stateNode;if(typeof d.componentDidMount=="function"){var m=s.return;try{d.componentDidMount()}catch(Z){rn(s,m,Z)}}var M=s.return;try{Md(s)}catch(Z){rn(s,M,Z)}break;case 5:var R=s.return;try{Md(s)}catch(Z){rn(s,R,Z)}}}catch(Z){rn(s,s.return,Z)}if(s===n){Ye=null;break}var H=s.sibling;if(H!==null){H.return=s.return,Ye=H;break}Ye=s.return}}var ly=Math.ceil,Ol=N.ReactCurrentDispatcher,wd=N.ReactCurrentOwner,gi=N.ReactCurrentBatchConfig,Lt=0,Sn=null,un=null,Cn=0,ai=0,sa=js(0),pn=0,yo=null,_r=0,kl=0,Td=0,So=null,Jn=null,Cd=0,ra=1/0,fs=null,Bl=!1,Nd=null,zs=null,zl=!1,Hs=null,Hl=0,Mo=0,Ad=null,Vl=-1,Gl=0;function Bn(){return(Lt&6)!==0?en():Vl!==-1?Vl:Vl=en()}function Vs(n){return(n.mode&1)===0?1:(Lt&2)!==0&&Cn!==0?Cn&-Cn:W_.transition!==null?(Gl===0&&(Gl=Ve()),Gl):(n=wt,n!==0||(n=window.event,n=n===void 0?16:kp(n.type)),n)}function Pi(n,s,l,d){if(50<Mo)throw Mo=0,Ad=null,Error(t(185));St(n,l,d),((Lt&2)===0||n!==Sn)&&(n===Sn&&((Lt&2)===0&&(kl|=l),pn===4&&Gs(n,Cn)),Qn(n,d),l===1&&Lt===0&&(s.mode&1)===0&&(ra=en()+500,vl&&Fs()))}function Qn(n,s){var l=n.callbackNode;Ut(n,s);var d=Wt(n,n===Sn?Cn:0);if(d===0)l!==null&&el(l),n.callbackNode=null,n.callbackPriority=0;else if(s=d&-d,n.callbackPriority!==s){if(l!=null&&el(l),s===1)n.tag===0?G_(kg.bind(null,n)):bm(kg.bind(null,n)),B_(function(){(Lt&6)===0&&Fs()}),l=null;else{switch(rs(d)){case 1:l=Wa;break;case 4:l=P;break;case 16:l=re;break;case 536870912:l=ue;break;default:l=re}l=qg(l,Og.bind(null,n))}n.callbackPriority=s,n.callbackNode=l}}function Og(n,s){if(Vl=-1,Gl=0,(Lt&6)!==0)throw Error(t(327));var l=n.callbackNode;if(aa()&&n.callbackNode!==l)return null;var d=Wt(n,n===Sn?Cn:0);if(d===0)return null;if((d&30)!==0||(d&n.expiredLanes)!==0||s)s=Wl(n,d);else{s=d;var m=Lt;Lt|=2;var M=zg();(Sn!==n||Cn!==s)&&(fs=null,ra=en()+500,Sr(n,s));do try{dy();break}catch(H){Bg(n,H)}while(!0);qu(),Ol.current=M,Lt=m,un!==null?s=0:(Sn=null,Cn=0,s=pn)}if(s!==0){if(s===2&&(m=cn(n),m!==0&&(d=m,s=Rd(n,m))),s===1)throw l=yo,Sr(n,0),Gs(n,d),Qn(n,en()),l;if(s===6)Gs(n,d);else{if(m=n.current.alternate,(d&30)===0&&!cy(m)&&(s=Wl(n,d),s===2&&(M=cn(n),M!==0&&(d=M,s=Rd(n,M))),s===1))throw l=yo,Sr(n,0),Gs(n,d),Qn(n,en()),l;switch(n.finishedWork=m,n.finishedLanes=d,s){case 0:case 1:throw Error(t(345));case 2:Mr(n,Jn,fs);break;case 3:if(Gs(n,d),(d&130023424)===d&&(s=Cd+500-en(),10<s)){if(Wt(n,0)!==0)break;if(m=n.suspendedLanes,(m&d)!==d){Bn(),n.pingedLanes|=n.suspendedLanes&m;break}n.timeoutHandle=Uu(Mr.bind(null,n,Jn,fs),s);break}Mr(n,Jn,fs);break;case 4:if(Gs(n,d),(d&4194240)===d)break;for(s=n.eventTimes,m=-1;0<d;){var R=31-je(d);M=1<<R,R=s[R],R>m&&(m=R),d&=~M}if(d=m,d=en()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*ly(d/1960))-d,10<d){n.timeoutHandle=Uu(Mr.bind(null,n,Jn,fs),d);break}Mr(n,Jn,fs);break;case 5:Mr(n,Jn,fs);break;default:throw Error(t(329))}}}return Qn(n,en()),n.callbackNode===l?Og.bind(null,n):null}function Rd(n,s){var l=So;return n.current.memoizedState.isDehydrated&&(Sr(n,s).flags|=256),n=Wl(n,s),n!==2&&(s=Jn,Jn=l,s!==null&&Pd(s)),n}function Pd(n){Jn===null?Jn=n:Jn.push.apply(Jn,n)}function cy(n){for(var s=n;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var d=0;d<l.length;d++){var m=l[d],M=m.getSnapshot;m=m.value;try{if(!Ti(M(),m))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Gs(n,s){for(s&=~Td,s&=~kl,n.suspendedLanes|=s,n.pingedLanes&=~s,n=n.expirationTimes;0<s;){var l=31-je(s),d=1<<l;n[l]=-1,s&=~d}}function kg(n){if((Lt&6)!==0)throw Error(t(327));aa();var s=Wt(n,0);if((s&1)===0)return Qn(n,en()),null;var l=Wl(n,s);if(n.tag!==0&&l===2){var d=cn(n);d!==0&&(s=d,l=Rd(n,d))}if(l===1)throw l=yo,Sr(n,0),Gs(n,s),Qn(n,en()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=s,Mr(n,Jn,fs),Qn(n,en()),null}function Ld(n,s){var l=Lt;Lt|=1;try{return n(s)}finally{Lt=l,Lt===0&&(ra=en()+500,vl&&Fs())}}function yr(n){Hs!==null&&Hs.tag===0&&(Lt&6)===0&&aa();var s=Lt;Lt|=1;var l=gi.transition,d=wt;try{if(gi.transition=null,wt=1,n)return n()}finally{wt=d,gi.transition=l,Lt=s,(Lt&6)===0&&Fs()}}function Id(){ai=sa.current,Kt(sa)}function Sr(n,s){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,k_(l)),un!==null)for(l=un.return;l!==null;){var d=l;switch(Hu(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&gl();break;case 3:ta(),Kt(Yn),Kt(An),td();break;case 5:Qu(d);break;case 4:ta();break;case 13:Kt(tn);break;case 19:Kt(tn);break;case 10:$u(d.type._context);break;case 22:case 23:Id()}l=l.return}if(Sn=n,un=n=Ws(n.current,null),Cn=ai=s,pn=0,yo=null,Td=kl=_r=0,Jn=So=null,gr!==null){for(s=0;s<gr.length;s++)if(l=gr[s],d=l.interleaved,d!==null){l.interleaved=null;var m=d.next,M=l.pending;if(M!==null){var R=M.next;M.next=m,d.next=R}l.pending=d}gr=null}return n}function Bg(n,s){do{var l=un;try{if(qu(),Nl.current=Ll,Al){for(var d=nn.memoizedState;d!==null;){var m=d.queue;m!==null&&(m.pending=null),d=d.next}Al=!1}if(vr=0,yn=fn=nn=null,po=!1,mo=0,wd.current=null,l===null||l.return===null){pn=1,yo=s,un=null;break}e:{var M=n,R=l.return,H=l,Z=s;if(s=Cn,H.flags|=32768,Z!==null&&typeof Z=="object"&&typeof Z.then=="function"){var pe=Z,Te=H,Ae=Te.tag;if((Te.mode&1)===0&&(Ae===0||Ae===11||Ae===15)){var we=Te.alternate;we?(Te.updateQueue=we.updateQueue,Te.memoizedState=we.memoizedState,Te.lanes=we.lanes):(Te.updateQueue=null,Te.memoizedState=null)}var Ge=dg(R);if(Ge!==null){Ge.flags&=-257,hg(Ge,R,H,M,s),Ge.mode&1&&ug(M,pe,s),s=Ge,Z=pe;var Ke=s.updateQueue;if(Ke===null){var Je=new Set;Je.add(Z),s.updateQueue=Je}else Ke.add(Z);break e}else{if((s&1)===0){ug(M,pe,s),Dd();break e}Z=Error(t(426))}}else if(Jt&&H.mode&1){var on=dg(R);if(on!==null){(on.flags&65536)===0&&(on.flags|=256),hg(on,R,H,M,s),Wu(na(Z,H));break e}}M=Z=na(Z,H),pn!==4&&(pn=2),So===null?So=[M]:So.push(M),M=R;do{switch(M.tag){case 3:M.flags|=65536,s&=-s,M.lanes|=s;var le=lg(M,Z,s);jm(M,le);break e;case 1:H=Z;var ie=M.type,de=M.stateNode;if((M.flags&128)===0&&(typeof ie.getDerivedStateFromError=="function"||de!==null&&typeof de.componentDidCatch=="function"&&(zs===null||!zs.has(de)))){M.flags|=65536,s&=-s,M.lanes|=s;var De=cg(M,H,s);jm(M,De);break e}}M=M.return}while(M!==null)}Vg(l)}catch(tt){s=tt,un===l&&l!==null&&(un=l=l.return);continue}break}while(!0)}function zg(){var n=Ol.current;return Ol.current=Ll,n===null?Ll:n}function Dd(){(pn===0||pn===3||pn===2)&&(pn=4),Sn===null||(_r&268435455)===0&&(kl&268435455)===0||Gs(Sn,Cn)}function Wl(n,s){var l=Lt;Lt|=2;var d=zg();(Sn!==n||Cn!==s)&&(fs=null,Sr(n,s));do try{uy();break}catch(m){Bg(n,m)}while(!0);if(qu(),Lt=l,Ol.current=d,un!==null)throw Error(t(261));return Sn=null,Cn=0,pn}function uy(){for(;un!==null;)Hg(un)}function dy(){for(;un!==null&&!du();)Hg(un)}function Hg(n){var s=Xg(n.alternate,n,ai);n.memoizedProps=n.pendingProps,s===null?Vg(n):un=s,wd.current=null}function Vg(n){var s=n;do{var l=s.alternate;if(n=s.return,(s.flags&32768)===0){if(l=iy(l,s,ai),l!==null){un=l;return}}else{if(l=sy(l,s),l!==null){l.flags&=32767,un=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{pn=6,un=null;return}}if(s=s.sibling,s!==null){un=s;return}un=s=n}while(s!==null);pn===0&&(pn=5)}function Mr(n,s,l){var d=wt,m=gi.transition;try{gi.transition=null,wt=1,hy(n,s,l,d)}finally{gi.transition=m,wt=d}return null}function hy(n,s,l,d){do aa();while(Hs!==null);if((Lt&6)!==0)throw Error(t(327));l=n.finishedWork;var m=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var M=l.lanes|l.childLanes;if(qn(n,M),n===Sn&&(un=Sn=null,Cn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||zl||(zl=!0,qg(re,function(){return aa(),null})),M=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||M){M=gi.transition,gi.transition=null;var R=wt;wt=1;var H=Lt;Lt|=4,wd.current=null,ay(n,l),Ig(l,n),L_(Du),nl=!!Iu,Du=Iu=null,n.current=l,oy(l),hu(),Lt=H,wt=R,gi.transition=M}else n.current=l;if(zl&&(zl=!1,Hs=n,Hl=m),M=n.pendingLanes,M===0&&(zs=null),qe(l.stateNode),Qn(n,en()),s!==null)for(d=n.onRecoverableError,l=0;l<s.length;l++)m=s[l],d(m.value,{componentStack:m.stack,digest:m.digest});if(Bl)throw Bl=!1,n=Nd,Nd=null,n;return(Hl&1)!==0&&n.tag!==0&&aa(),M=n.pendingLanes,(M&1)!==0?n===Ad?Mo++:(Mo=0,Ad=n):Mo=0,Fs(),null}function aa(){if(Hs!==null){var n=rs(Hl),s=gi.transition,l=wt;try{if(gi.transition=null,wt=16>n?16:n,Hs===null)var d=!1;else{if(n=Hs,Hs=null,Hl=0,(Lt&6)!==0)throw Error(t(331));var m=Lt;for(Lt|=4,Ye=n.current;Ye!==null;){var M=Ye,R=M.child;if((Ye.flags&16)!==0){var H=M.deletions;if(H!==null){for(var Z=0;Z<H.length;Z++){var pe=H[Z];for(Ye=pe;Ye!==null;){var Te=Ye;switch(Te.tag){case 0:case 11:case 15:_o(8,Te,M)}var Ae=Te.child;if(Ae!==null)Ae.return=Te,Ye=Ae;else for(;Ye!==null;){Te=Ye;var we=Te.sibling,Ge=Te.return;if(Ng(Te),Te===pe){Ye=null;break}if(we!==null){we.return=Ge,Ye=we;break}Ye=Ge}}}var Ke=M.alternate;if(Ke!==null){var Je=Ke.child;if(Je!==null){Ke.child=null;do{var on=Je.sibling;Je.sibling=null,Je=on}while(Je!==null)}}Ye=M}}if((M.subtreeFlags&2064)!==0&&R!==null)R.return=M,Ye=R;else e:for(;Ye!==null;){if(M=Ye,(M.flags&2048)!==0)switch(M.tag){case 0:case 11:case 15:_o(9,M,M.return)}var le=M.sibling;if(le!==null){le.return=M.return,Ye=le;break e}Ye=M.return}}var ie=n.current;for(Ye=ie;Ye!==null;){R=Ye;var de=R.child;if((R.subtreeFlags&2064)!==0&&de!==null)de.return=R,Ye=de;else e:for(R=ie;Ye!==null;){if(H=Ye,(H.flags&2048)!==0)try{switch(H.tag){case 0:case 11:case 15:Fl(9,H)}}catch(tt){rn(H,H.return,tt)}if(H===R){Ye=null;break e}var De=H.sibling;if(De!==null){De.return=H.return,Ye=De;break e}Ye=H.return}}if(Lt=m,Fs(),Fe&&typeof Fe.onPostCommitFiberRoot=="function")try{Fe.onPostCommitFiberRoot(ce,n)}catch{}d=!0}return d}finally{wt=l,gi.transition=s}}return!1}function Gg(n,s,l){s=na(l,s),s=lg(n,s,1),n=ks(n,s,1),s=Bn(),n!==null&&(St(n,1,s),Qn(n,s))}function rn(n,s,l){if(n.tag===3)Gg(n,n,l);else for(;s!==null;){if(s.tag===3){Gg(s,n,l);break}else if(s.tag===1){var d=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(zs===null||!zs.has(d))){n=na(l,n),n=cg(s,n,1),s=ks(s,n,1),n=Bn(),s!==null&&(St(s,1,n),Qn(s,n));break}}s=s.return}}function fy(n,s,l){var d=n.pingCache;d!==null&&d.delete(s),s=Bn(),n.pingedLanes|=n.suspendedLanes&l,Sn===n&&(Cn&l)===l&&(pn===4||pn===3&&(Cn&130023424)===Cn&&500>en()-Cd?Sr(n,0):Td|=l),Qn(n,s)}function Wg(n,s){s===0&&((n.mode&1)===0?s=1:(s=Qe,Qe<<=1,(Qe&130023424)===0&&(Qe=4194304)));var l=Bn();n=us(n,s),n!==null&&(St(n,s,l),Qn(n,l))}function py(n){var s=n.memoizedState,l=0;s!==null&&(l=s.retryLane),Wg(n,l)}function my(n,s){var l=0;switch(n.tag){case 13:var d=n.stateNode,m=n.memoizedState;m!==null&&(l=m.retryLane);break;case 19:d=n.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(s),Wg(n,l)}var Xg;Xg=function(n,s,l){if(n!==null)if(n.memoizedProps!==s.pendingProps||Yn.current)Zn=!0;else{if((n.lanes&l)===0&&(s.flags&128)===0)return Zn=!1,ny(n,s,l);Zn=(n.flags&131072)!==0}else Zn=!1,Jt&&(s.flags&1048576)!==0&&wm(s,yl,s.index);switch(s.lanes=0,s.tag){case 2:var d=s.type;jl(n,s),n=s.pendingProps;var m=$r(s,An.current);ea(s,l),m=sd(null,s,d,n,m,l);var M=rd();return s.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Kn(d)?(M=!0,xl(s)):M=!1,s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,Zu(s),m.updater=Il,s.stateNode=m,m._reactInternals=s,dd(s,d,n,l),s=md(null,s,d,!0,M,l)):(s.tag=0,Jt&&M&&zu(s),kn(null,s,m,l),s=s.child),s;case 16:d=s.elementType;e:{switch(jl(n,s),n=s.pendingProps,m=d._init,d=m(d._payload),s.type=d,m=s.tag=xy(d),n=Ni(d,n),m){case 0:s=pd(null,s,d,n,l);break e;case 1:s=vg(null,s,d,n,l);break e;case 11:s=fg(null,s,d,n,l);break e;case 14:s=pg(null,s,d,Ni(d.type,n),l);break e}throw Error(t(306,d,""))}return s;case 0:return d=s.type,m=s.pendingProps,m=s.elementType===d?m:Ni(d,m),pd(n,s,d,m,l);case 1:return d=s.type,m=s.pendingProps,m=s.elementType===d?m:Ni(d,m),vg(n,s,d,m,l);case 3:e:{if(_g(s),n===null)throw Error(t(387));d=s.pendingProps,M=s.memoizedState,m=M.element,Dm(n,s),Tl(s,d,null,l);var R=s.memoizedState;if(d=R.element,M.isDehydrated)if(M={element:d,isDehydrated:!1,cache:R.cache,pendingSuspenseBoundaries:R.pendingSuspenseBoundaries,transitions:R.transitions},s.updateQueue.baseState=M,s.memoizedState=M,s.flags&256){m=na(Error(t(423)),s),s=yg(n,s,d,l,m);break e}else if(d!==m){m=na(Error(t(424)),s),s=yg(n,s,d,l,m);break e}else for(ri=Ds(s.stateNode.containerInfo.firstChild),si=s,Jt=!0,Ci=null,l=Lm(s,null,d,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Zr(),d===m){s=hs(n,s,l);break e}kn(n,s,d,l)}s=s.child}return s;case 5:return Fm(s),n===null&&Gu(s),d=s.type,m=s.pendingProps,M=n!==null?n.memoizedProps:null,R=m.children,ju(d,m)?R=null:M!==null&&ju(d,M)&&(s.flags|=32),xg(n,s),kn(n,s,R,l),s.child;case 6:return n===null&&Gu(s),null;case 13:return Sg(n,s,l);case 4:return Ju(s,s.stateNode.containerInfo),d=s.pendingProps,n===null?s.child=Jr(s,null,d,l):kn(n,s,d,l),s.child;case 11:return d=s.type,m=s.pendingProps,m=s.elementType===d?m:Ni(d,m),fg(n,s,d,m,l);case 7:return kn(n,s,s.pendingProps,l),s.child;case 8:return kn(n,s,s.pendingProps.children,l),s.child;case 12:return kn(n,s,s.pendingProps.children,l),s.child;case 10:e:{if(d=s.type._context,m=s.pendingProps,M=s.memoizedProps,R=m.value,Xt(El,d._currentValue),d._currentValue=R,M!==null)if(Ti(M.value,R)){if(M.children===m.children&&!Yn.current){s=hs(n,s,l);break e}}else for(M=s.child,M!==null&&(M.return=s);M!==null;){var H=M.dependencies;if(H!==null){R=M.child;for(var Z=H.firstContext;Z!==null;){if(Z.context===d){if(M.tag===1){Z=ds(-1,l&-l),Z.tag=2;var pe=M.updateQueue;if(pe!==null){pe=pe.shared;var Te=pe.pending;Te===null?Z.next=Z:(Z.next=Te.next,Te.next=Z),pe.pending=Z}}M.lanes|=l,Z=M.alternate,Z!==null&&(Z.lanes|=l),Yu(M.return,l,s),H.lanes|=l;break}Z=Z.next}}else if(M.tag===10)R=M.type===s.type?null:M.child;else if(M.tag===18){if(R=M.return,R===null)throw Error(t(341));R.lanes|=l,H=R.alternate,H!==null&&(H.lanes|=l),Yu(R,l,s),R=M.sibling}else R=M.child;if(R!==null)R.return=M;else for(R=M;R!==null;){if(R===s){R=null;break}if(M=R.sibling,M!==null){M.return=R.return,R=M;break}R=R.return}M=R}kn(n,s,m.children,l),s=s.child}return s;case 9:return m=s.type,d=s.pendingProps.children,ea(s,l),m=pi(m),d=d(m),s.flags|=1,kn(n,s,d,l),s.child;case 14:return d=s.type,m=Ni(d,s.pendingProps),m=Ni(d.type,m),pg(n,s,d,m,l);case 15:return mg(n,s,s.type,s.pendingProps,l);case 17:return d=s.type,m=s.pendingProps,m=s.elementType===d?m:Ni(d,m),jl(n,s),s.tag=1,Kn(d)?(n=!0,xl(s)):n=!1,ea(s,l),ag(s,d,m),dd(s,d,m,l),md(null,s,d,!0,n,l);case 19:return Eg(n,s,l);case 22:return gg(n,s,l)}throw Error(t(156,s.tag))};function qg(n,s){return Qo(n,s)}function gy(n,s,l,d){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xi(n,s,l,d){return new gy(n,s,l,d)}function jd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function xy(n){if(typeof n=="function")return jd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Q)return 11;if(n===F)return 14}return 2}function Ws(n,s){var l=n.alternate;return l===null?(l=xi(n.tag,s,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=s,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,s=n.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function Xl(n,s,l,d,m,M){var R=2;if(d=n,typeof n=="function")jd(n)&&(R=1);else if(typeof n=="string")R=5;else e:switch(n){case B:return Er(l.children,m,M,s);case C:R=8,m|=8;break;case O:return n=xi(12,l,s,m|2),n.elementType=O,n.lanes=M,n;case G:return n=xi(13,l,s,m),n.elementType=G,n.lanes=M,n;case ee:return n=xi(19,l,s,m),n.elementType=ee,n.lanes=M,n;case W:return ql(l,m,M,s);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Y:R=10;break e;case V:R=9;break e;case Q:R=11;break e;case F:R=14;break e;case U:R=16,d=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return s=xi(R,l,s,m),s.elementType=n,s.type=d,s.lanes=M,s}function Er(n,s,l,d){return n=xi(7,n,d,s),n.lanes=l,n}function ql(n,s,l,d){return n=xi(22,n,d,s),n.elementType=W,n.lanes=l,n.stateNode={isHidden:!1},n}function Ud(n,s,l){return n=xi(6,n,null,s),n.lanes=l,n}function Fd(n,s,l){return s=xi(4,n.children!==null?n.children:[],n.key,s),s.lanes=l,s.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},s}function vy(n,s,l,d,m){this.tag=s,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wn(0),this.expirationTimes=wn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wn(0),this.identifierPrefix=d,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function Od(n,s,l,d,m,M,R,H,Z){return n=new vy(n,s,l,H,Z),s===1?(s=1,M===!0&&(s|=8)):s=0,M=xi(3,null,null,s),n.current=M,M.stateNode=n,M.memoizedState={element:d,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zu(M),n}function _y(n,s,l){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:d==null?null:""+d,children:n,containerInfo:s,implementation:l}}function $g(n){if(!n)return Us;n=n._reactInternals;e:{if(ki(n)!==n||n.tag!==1)throw Error(t(170));var s=n;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Kn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(Kn(l))return Mm(n,l,s)}return s}function Yg(n,s,l,d,m,M,R,H,Z){return n=Od(l,d,!0,n,m,M,R,H,Z),n.context=$g(null),l=n.current,d=Bn(),m=Vs(l),M=ds(d,m),M.callback=s??null,ks(l,M,m),n.current.lanes=m,St(n,m,d),Qn(n,d),n}function $l(n,s,l,d){var m=s.current,M=Bn(),R=Vs(m);return l=$g(l),s.context===null?s.context=l:s.pendingContext=l,s=ds(M,R),s.payload={element:n},d=d===void 0?null:d,d!==null&&(s.callback=d),n=ks(m,s,R),n!==null&&(Pi(n,m,R,M),wl(n,m,R)),R}function Yl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Kg(n,s){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<s?l:s}}function kd(n,s){Kg(n,s),(n=n.alternate)&&Kg(n,s)}function yy(){return null}var Zg=typeof reportError=="function"?reportError:function(n){console.error(n)};function Bd(n){this._internalRoot=n}Kl.prototype.render=Bd.prototype.render=function(n){var s=this._internalRoot;if(s===null)throw Error(t(409));$l(n,s,null,null)},Kl.prototype.unmount=Bd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var s=n.containerInfo;yr(function(){$l(null,n,null,null)}),s[as]=null}};function Kl(n){this._internalRoot=n}Kl.prototype.unstable_scheduleHydration=function(n){if(n){var s=Ft();n={blockedOn:null,target:n,priority:s};for(var l=0;l<Ps.length&&s!==0&&s<Ps[l].priority;l++);Ps.splice(l,0,n),l===0&&Fp(n)}};function zd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Zl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Jg(){}function Sy(n,s,l,d,m){if(m){if(typeof d=="function"){var M=d;d=function(){var pe=Yl(R);M.call(pe)}}var R=Yg(s,d,n,0,null,!1,!1,"",Jg);return n._reactRootContainer=R,n[as]=R.current,ro(n.nodeType===8?n.parentNode:n),yr(),R}for(;m=n.lastChild;)n.removeChild(m);if(typeof d=="function"){var H=d;d=function(){var pe=Yl(Z);H.call(pe)}}var Z=Od(n,0,!1,null,null,!1,!1,"",Jg);return n._reactRootContainer=Z,n[as]=Z.current,ro(n.nodeType===8?n.parentNode:n),yr(function(){$l(s,Z,l,d)}),Z}function Jl(n,s,l,d,m){var M=l._reactRootContainer;if(M){var R=M;if(typeof m=="function"){var H=m;m=function(){var Z=Yl(R);H.call(Z)}}$l(s,R,n,m)}else R=Sy(l,s,n,m,d);return Yl(R)}jt=function(n){switch(n.tag){case 3:var s=n.stateNode;if(s.current.memoizedState.isDehydrated){var l=Rt(s.pendingLanes);l!==0&&($n(s,l|1),Qn(s,en()),(Lt&6)===0&&(ra=en()+500,Fs()))}break;case 13:yr(function(){var d=us(n,1);if(d!==null){var m=Bn();Pi(d,n,1,m)}}),kd(n,1)}},$t=function(n){if(n.tag===13){var s=us(n,134217728);if(s!==null){var l=Bn();Pi(s,n,134217728,l)}kd(n,134217728)}},bi=function(n){if(n.tag===13){var s=Vs(n),l=us(n,s);if(l!==null){var d=Bn();Pi(l,n,s,d)}kd(n,s)}},Ft=function(){return wt},wi=function(n,s){var l=wt;try{return wt=n,s()}finally{wt=l}},rt=function(n,s,l){switch(s){case"input":if(kt(n,l),s=l.name,l.type==="radio"&&s!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var d=l[s];if(d!==n&&d.form===n.form){var m=ml(d);if(!m)throw Error(t(90));Et(d),kt(d,m)}}}break;case"textarea":Oe(n,l);break;case"select":s=l.value,s!=null&&zt(n,!!l.multiple,s,!1)}},Ie=Ld,Se=yr;var My={usingClientEntryPoint:!1,Events:[lo,Xr,ml,ve,ze,Ld]},Eo={findFiberByHostInstance:hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ey={bundleType:Eo.bundleType,version:Eo.version,rendererPackageName:Eo.rendererPackageName,rendererConfig:Eo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:N.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Va(n),n===null?null:n.stateNode},findFiberByHostInstance:Eo.findFiberByHostInstance||yy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ql.isDisabled&&Ql.supportsFiber)try{ce=Ql.inject(Ey),Fe=Ql}catch{}}return ei.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=My,ei.createPortal=function(n,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zd(s))throw Error(t(200));return _y(n,s,null,l)},ei.createRoot=function(n,s){if(!zd(n))throw Error(t(299));var l=!1,d="",m=Zg;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(d=s.identifierPrefix),s.onRecoverableError!==void 0&&(m=s.onRecoverableError)),s=Od(n,1,!1,null,null,l,!1,d,m),n[as]=s.current,ro(n.nodeType===8?n.parentNode:n),new Bd(s)},ei.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var s=n._reactInternals;if(s===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Va(s),n=n===null?null:n.stateNode,n},ei.flushSync=function(n){return yr(n)},ei.hydrate=function(n,s,l){if(!Zl(s))throw Error(t(200));return Jl(null,n,s,!0,l)},ei.hydrateRoot=function(n,s,l){if(!zd(n))throw Error(t(405));var d=l!=null&&l.hydratedSources||null,m=!1,M="",R=Zg;if(l!=null&&(l.unstable_strictMode===!0&&(m=!0),l.identifierPrefix!==void 0&&(M=l.identifierPrefix),l.onRecoverableError!==void 0&&(R=l.onRecoverableError)),s=Yg(s,null,n,1,l??null,m,!1,M,R),n[as]=s.current,ro(n),d)for(n=0;n<d.length;n++)l=d[n],m=l._getVersion,m=m(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,m]:s.mutableSourceEagerHydrationData.push(l,m);return new Kl(s)},ei.render=function(n,s,l){if(!Zl(s))throw Error(t(200));return Jl(null,n,s,!1,l)},ei.unmountComponentAtNode=function(n){if(!Zl(n))throw Error(t(40));return n._reactRootContainer?(yr(function(){Jl(null,null,n,!1,function(){n._reactRootContainer=null,n[as]=null})}),!0):!1},ei.unstable_batchedUpdates=Ld,ei.unstable_renderSubtreeIntoContainer=function(n,s,l,d){if(!Zl(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Jl(n,s,l,!1,d)},ei.version="18.3.1-next-f1338f8080-20240426",ei}var ax;function Dy(){if(ax)return Wd.exports;ax=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Wd.exports=Iy(),Wd.exports}var ox;function jy(){if(ox)return ec;ox=1;var i=Dy();return ec.createRoot=i.createRoot,ec.hydrateRoot=i.hydrateRoot,ec}var Uy=jy();const Fy=Uv(Uy);/**
 * react-router v7.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var lx="popstate";function Oy(i={}){function e(r,o){let{pathname:c,search:u,hash:h}=r.location;return Qh("",{pathname:c,search:u,hash:h},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(r,o){return typeof o=="string"?o:Ho(o)}return By(e,t,null,i)}function Qt(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}function Mi(i,e){if(!i){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ky(){return Math.random().toString(36).substring(2,10)}function cx(i,e){return{usr:i.state,key:i.key,idx:e}}function Qh(i,e,t=null,r){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof e=="string"?Ua(e):e,state:t,key:e&&e.key||r||ky()}}function Ho({pathname:i="/",search:e="",hash:t=""}){return e&&e!=="?"&&(i+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(i+=t.charAt(0)==="#"?t:"#"+t),i}function Ua(i){let e={};if(i){let t=i.indexOf("#");t>=0&&(e.hash=i.substring(t),i=i.substring(0,t));let r=i.indexOf("?");r>=0&&(e.search=i.substring(r),i=i.substring(0,r)),i&&(e.pathname=i)}return e}function By(i,e,t,r={}){let{window:o=document.defaultView,v5Compat:c=!1}=r,u=o.history,h="POP",f=null,p=v();p==null&&(p=0,u.replaceState({...u.state,idx:p},""));function v(){return(u.state||{idx:null}).idx}function g(){h="POP";let S=v(),_=S==null?null:S-p;p=S,f&&f({action:h,location:T.location,delta:_})}function x(S,_){h="PUSH";let w=Qh(T.location,S,_);p=v()+1;let b=cx(w,p),N=T.createHref(w);try{u.pushState(b,"",N)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;o.location.assign(N)}c&&f&&f({action:h,location:T.location,delta:1})}function y(S,_){h="REPLACE";let w=Qh(T.location,S,_);p=v();let b=cx(w,p),N=T.createHref(w);u.replaceState(b,"",N),c&&f&&f({action:h,location:T.location,delta:0})}function E(S){return zy(S)}let T={get action(){return h},get location(){return i(o,u)},listen(S){if(f)throw new Error("A history only accepts one active listener");return o.addEventListener(lx,g),f=S,()=>{o.removeEventListener(lx,g),f=null}},createHref(S){return e(o,S)},createURL:E,encodeLocation(S){let _=E(S);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:x,replace:y,go(S){return u.go(S)}};return T}function zy(i,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),Qt(t,"No window.location.(origin|href) available to create URL");let r=typeof i=="string"?i:Ho(i);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=t+r),new URL(r,t)}function Fv(i,e,t="/"){return Hy(i,e,t,!1)}function Hy(i,e,t,r){let o=typeof e=="string"?Ua(e):e,c=bs(o.pathname||"/",t);if(c==null)return null;let u=Ov(i);Vy(u);let h=null;for(let f=0;h==null&&f<u.length;++f){let p=eS(c);h=Jy(u[f],p,r)}return h}function Ov(i,e=[],t=[],r="",o=!1){let c=(u,h,f=o,p)=>{let v={relativePath:p===void 0?u.path||"":p,caseSensitive:u.caseSensitive===!0,childrenIndex:h,route:u};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(r)&&f)return;Qt(v.relativePath.startsWith(r),`Absolute route path "${v.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(r.length)}let g=Ss([r,v.relativePath]),x=t.concat(v);u.children&&u.children.length>0&&(Qt(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),Ov(u.children,e,x,g,f)),!(u.path==null&&!u.index)&&e.push({path:g,score:Ky(g,u.index),routesMeta:x})};return i.forEach((u,h)=>{var f;if(u.path===""||!((f=u.path)!=null&&f.includes("?")))c(u,h);else for(let p of kv(u.path))c(u,h,!0,p)}),e}function kv(i){let e=i.split("/");if(e.length===0)return[];let[t,...r]=e,o=t.endsWith("?"),c=t.replace(/\?$/,"");if(r.length===0)return o?[c,""]:[c];let u=kv(r.join("/")),h=[];return h.push(...u.map(f=>f===""?c:[c,f].join("/"))),o&&h.push(...u),h.map(f=>i.startsWith("/")&&f===""?"/":f)}function Vy(i){i.sort((e,t)=>e.score!==t.score?t.score-e.score:Zy(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}var Gy=/^:[\w-]+$/,Wy=3,Xy=2,qy=1,$y=10,Yy=-2,ux=i=>i==="*";function Ky(i,e){let t=i.split("/"),r=t.length;return t.some(ux)&&(r+=Yy),e&&(r+=Xy),t.filter(o=>!ux(o)).reduce((o,c)=>o+(Gy.test(c)?Wy:c===""?qy:$y),r)}function Zy(i,e){return i.length===e.length&&i.slice(0,-1).every((r,o)=>r===e[o])?i[i.length-1]-e[e.length-1]:0}function Jy(i,e,t=!1){let{routesMeta:r}=i,o={},c="/",u=[];for(let h=0;h<r.length;++h){let f=r[h],p=h===r.length-1,v=c==="/"?e:e.slice(c.length)||"/",g=qc({path:f.relativePath,caseSensitive:f.caseSensitive,end:p},v),x=f.route;if(!g&&p&&t&&!r[r.length-1].route.index&&(g=qc({path:f.relativePath,caseSensitive:f.caseSensitive,end:!1},v)),!g)return null;Object.assign(o,g.params),u.push({params:o,pathname:Ss([c,g.pathname]),pathnameBase:sS(Ss([c,g.pathnameBase])),route:x}),g.pathnameBase!=="/"&&(c=Ss([c,g.pathnameBase]))}return u}function qc(i,e){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[t,r]=Qy(i.path,i.caseSensitive,i.end),o=e.match(t);if(!o)return null;let c=o[0],u=c.replace(/(.)\/+$/,"$1"),h=o.slice(1);return{params:r.reduce((p,{paramName:v,isOptional:g},x)=>{if(v==="*"){let E=h[x]||"";u=c.slice(0,c.length-E.length).replace(/(.)\/+$/,"$1")}const y=h[x];return g&&!y?p[v]=void 0:p[v]=(y||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:u,pattern:i}}function Qy(i,e=!1,t=!0){Mi(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let r=[],o="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,h,f)=>(r.push({paramName:h,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return i.endsWith("*")?(r.push({paramName:"*"}),o+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":i!==""&&i!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),r]}function eS(i){try{return i.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Mi(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),i}}function bs(i,e){if(e==="/")return i;if(!i.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=i.charAt(t);return r&&r!=="/"?null:i.slice(t)||"/"}var Bv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,tS=i=>Bv.test(i);function nS(i,e="/"){let{pathname:t,search:r="",hash:o=""}=typeof i=="string"?Ua(i):i,c;if(t)if(tS(t))c=t;else{if(t.includes("//")){let u=t;t=t.replace(/\/\/+/g,"/"),Mi(!1,`Pathnames cannot have embedded double slashes - normalizing ${u} -> ${t}`)}t.startsWith("/")?c=dx(t.substring(1),"/"):c=dx(t,e)}else c=e;return{pathname:c,search:rS(r),hash:aS(o)}}function dx(i,e){let t=e.replace(/\/+$/,"").split("/");return i.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function $d(i,e,t,r){return`Cannot include a '${i}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function iS(i){return i.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function tp(i){let e=iS(i);return e.map((t,r)=>r===e.length-1?t.pathname:t.pathnameBase)}function np(i,e,t,r=!1){let o;typeof i=="string"?o=Ua(i):(o={...i},Qt(!o.pathname||!o.pathname.includes("?"),$d("?","pathname","search",o)),Qt(!o.pathname||!o.pathname.includes("#"),$d("#","pathname","hash",o)),Qt(!o.search||!o.search.includes("#"),$d("#","search","hash",o)));let c=i===""||o.pathname==="",u=c?"/":o.pathname,h;if(u==null)h=t;else{let g=e.length-1;if(!r&&u.startsWith("..")){let x=u.split("/");for(;x[0]==="..";)x.shift(),g-=1;o.pathname=x.join("/")}h=g>=0?e[g]:"/"}let f=nS(o,h),p=u&&u!=="/"&&u.endsWith("/"),v=(c||u===".")&&t.endsWith("/");return!f.pathname.endsWith("/")&&(p||v)&&(f.pathname+="/"),f}var Ss=i=>i.join("/").replace(/\/\/+/g,"/"),sS=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),rS=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,aS=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i,oS=class{constructor(i,e,t,r=!1){this.status=i,this.statusText=e||"",this.internal=r,t instanceof Error?(this.data=t.toString(),this.error=t):this.data=t}};function lS(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}function cS(i){return i.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var zv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Hv(i,e){let t=i;if(typeof t!="string"||!Bv.test(t))return{absoluteURL:void 0,isExternal:!1,to:t};let r=t,o=!1;if(zv)try{let c=new URL(window.location.href),u=t.startsWith("//")?new URL(c.protocol+t):new URL(t),h=bs(u.pathname,e);u.origin===c.origin&&h!=null?t=h+u.search+u.hash:o=!0}catch{Mi(!1,`<Link to="${t}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:o,to:t}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Vv=["POST","PUT","PATCH","DELETE"];new Set(Vv);var uS=["GET",...Vv];new Set(uS);var Fa=D.createContext(null);Fa.displayName="DataRouter";var ru=D.createContext(null);ru.displayName="DataRouterState";var dS=D.createContext(!1),Gv=D.createContext({isTransitioning:!1});Gv.displayName="ViewTransition";var hS=D.createContext(new Map);hS.displayName="Fetchers";var fS=D.createContext(null);fS.displayName="Await";var ui=D.createContext(null);ui.displayName="Navigation";var qo=D.createContext(null);qo.displayName="Location";var ns=D.createContext({outlet:null,matches:[],isDataRoute:!1});ns.displayName="Route";var ip=D.createContext(null);ip.displayName="RouteError";var Wv="REACT_ROUTER_ERROR",pS="REDIRECT",mS="ROUTE_ERROR_RESPONSE";function gS(i){if(i.startsWith(`${Wv}:${pS}:{`))try{let e=JSON.parse(i.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function xS(i){if(i.startsWith(`${Wv}:${mS}:{`))try{let e=JSON.parse(i.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new oS(e.status,e.statusText,e.data)}catch{}}function vS(i,{relative:e}={}){Qt(Oa(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:r}=D.useContext(ui),{hash:o,pathname:c,search:u}=$o(i,{relative:e}),h=c;return t!=="/"&&(h=c==="/"?t:Ss([t,c])),r.createHref({pathname:h,search:u,hash:o})}function Oa(){return D.useContext(qo)!=null}function Oi(){return Qt(Oa(),"useLocation() may be used only in the context of a <Router> component."),D.useContext(qo).location}var Xv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function qv(i){D.useContext(ui).static||D.useLayoutEffect(i)}function Dr(){let{isDataRoute:i}=D.useContext(ns);return i?PS():_S()}function _S(){Qt(Oa(),"useNavigate() may be used only in the context of a <Router> component.");let i=D.useContext(Fa),{basename:e,navigator:t}=D.useContext(ui),{matches:r}=D.useContext(ns),{pathname:o}=Oi(),c=JSON.stringify(tp(r)),u=D.useRef(!1);return qv(()=>{u.current=!0}),D.useCallback((f,p={})=>{if(Mi(u.current,Xv),!u.current)return;if(typeof f=="number"){t.go(f);return}let v=np(f,JSON.parse(c),o,p.relative==="path");i==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:Ss([e,v.pathname])),(p.replace?t.replace:t.push)(v,p.state,p)},[e,t,c,o,i])}D.createContext(null);function $o(i,{relative:e}={}){let{matches:t}=D.useContext(ns),{pathname:r}=Oi(),o=JSON.stringify(tp(t));return D.useMemo(()=>np(i,JSON.parse(o),r,e==="path"),[i,o,r,e])}function yS(i,e){return $v(i,e)}function $v(i,e,t,r,o){var w;Qt(Oa(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=D.useContext(ui),{matches:u}=D.useContext(ns),h=u[u.length-1],f=h?h.params:{},p=h?h.pathname:"/",v=h?h.pathnameBase:"/",g=h&&h.route;{let b=g&&g.path||"";Kv(p,!g||b.endsWith("*")||b.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${b}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${b}"> to <Route path="${b==="/"?"*":`${b}/*`}">.`)}let x=Oi(),y;if(e){let b=typeof e=="string"?Ua(e):e;Qt(v==="/"||((w=b.pathname)==null?void 0:w.startsWith(v)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${b.pathname}" was given in the \`location\` prop.`),y=b}else y=x;let E=y.pathname||"/",T=E;if(v!=="/"){let b=v.replace(/^\//,"").split("/");T="/"+E.replace(/^\//,"").split("/").slice(b.length).join("/")}let S=Fv(i,{pathname:T});Mi(g||S!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),Mi(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=wS(S&&S.map(b=>Object.assign({},b,{params:Object.assign({},f,b.params),pathname:Ss([v,c.encodeLocation?c.encodeLocation(b.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?v:Ss([v,c.encodeLocation?c.encodeLocation(b.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:b.pathnameBase])})),u,t,r,o);return e&&_?D.createElement(qo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...y},navigationType:"POP"}},_):_}function SS(){let i=RS(),e=lS(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),t=i instanceof Error?i.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},c={padding:"2px 4px",backgroundColor:r},u=null;return console.error("Error handled by React Router default ErrorBoundary:",i),u=D.createElement(D.Fragment,null,D.createElement("p",null,"💿 Hey developer 👋"),D.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",D.createElement("code",{style:c},"ErrorBoundary")," or"," ",D.createElement("code",{style:c},"errorElement")," prop on your route.")),D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},e),t?D.createElement("pre",{style:o},t):null,u)}var MS=D.createElement(SS,null),Yv=class extends D.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,e){return e.location!==i.location||e.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:e.error,location:e.location,revalidation:i.revalidation||e.revalidation}}componentDidCatch(i,e){this.props.onError?this.props.onError(i,e):console.error("React Router caught the following error during render",i)}render(){let i=this.state.error;if(this.context&&typeof i=="object"&&i&&"digest"in i&&typeof i.digest=="string"){const t=xS(i.digest);t&&(i=t)}let e=i!==void 0?D.createElement(ns.Provider,{value:this.props.routeContext},D.createElement(ip.Provider,{value:i,children:this.props.component})):this.props.children;return this.context?D.createElement(ES,{error:i},e):e}};Yv.contextType=dS;var Yd=new WeakMap;function ES({children:i,error:e}){let{basename:t}=D.useContext(ui);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let r=gS(e.digest);if(r){let o=Yd.get(e);if(o)throw o;let c=Hv(r.location,t);if(zv&&!Yd.get(e))if(c.isExternal||r.reloadDocument)window.location.href=c.absoluteURL||c.to;else{const u=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:r.replace}));throw Yd.set(e,u),u}return D.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c.absoluteURL||c.to}`})}}return i}function bS({routeContext:i,match:e,children:t}){let r=D.useContext(Fa);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),D.createElement(ns.Provider,{value:i},t)}function wS(i,e=[],t=null,r=null,o=null){if(i==null){if(!t)return null;if(t.errors)i=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)i=t.matches;else return null}let c=i,u=t==null?void 0:t.errors;if(u!=null){let v=c.findIndex(g=>g.route.id&&(u==null?void 0:u[g.route.id])!==void 0);Qt(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),c=c.slice(0,Math.min(c.length,v+1))}let h=!1,f=-1;if(t)for(let v=0;v<c.length;v++){let g=c[v];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(f=v),g.route.id){let{loaderData:x,errors:y}=t,E=g.route.loader&&!x.hasOwnProperty(g.route.id)&&(!y||y[g.route.id]===void 0);if(g.route.lazy||E){h=!0,f>=0?c=c.slice(0,f+1):c=[c[0]];break}}}let p=t&&r?(v,g)=>{var x,y;r(v,{location:t.location,params:((y=(x=t.matches)==null?void 0:x[0])==null?void 0:y.params)??{},unstable_pattern:cS(t.matches),errorInfo:g})}:void 0;return c.reduceRight((v,g,x)=>{let y,E=!1,T=null,S=null;t&&(y=u&&g.route.id?u[g.route.id]:void 0,T=g.route.errorElement||MS,h&&(f<0&&x===0?(Kv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,S=null):f===x&&(E=!0,S=g.route.hydrateFallbackElement||null)));let _=e.concat(c.slice(0,x+1)),w=()=>{let b;return y?b=T:E?b=S:g.route.Component?b=D.createElement(g.route.Component,null):g.route.element?b=g.route.element:b=v,D.createElement(bS,{match:g,routeContext:{outlet:v,matches:_,isDataRoute:t!=null},children:b})};return t&&(g.route.ErrorBoundary||g.route.errorElement||x===0)?D.createElement(Yv,{location:t.location,revalidation:t.revalidation,component:T,error:y,children:w(),routeContext:{outlet:null,matches:_,isDataRoute:!0},onError:p}):w()},null)}function sp(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function TS(i){let e=D.useContext(Fa);return Qt(e,sp(i)),e}function CS(i){let e=D.useContext(ru);return Qt(e,sp(i)),e}function NS(i){let e=D.useContext(ns);return Qt(e,sp(i)),e}function rp(i){let e=NS(i),t=e.matches[e.matches.length-1];return Qt(t.route.id,`${i} can only be used on routes that contain a unique "id"`),t.route.id}function AS(){return rp("useRouteId")}function RS(){var r;let i=D.useContext(ip),e=CS("useRouteError"),t=rp("useRouteError");return i!==void 0?i:(r=e.errors)==null?void 0:r[t]}function PS(){let{router:i}=TS("useNavigate"),e=rp("useNavigate"),t=D.useRef(!1);return qv(()=>{t.current=!0}),D.useCallback(async(o,c={})=>{Mi(t.current,Xv),t.current&&(typeof o=="number"?await i.navigate(o):await i.navigate(o,{fromRouteId:e,...c}))},[i,e])}var hx={};function Kv(i,e,t){!e&&!hx[i]&&(hx[i]=!0,Mi(!1,t))}D.memo(LS);function LS({routes:i,future:e,state:t,onError:r}){return $v(i,void 0,t,r,e)}function Bo({to:i,replace:e,state:t,relative:r}){Qt(Oa(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=D.useContext(ui);Mi(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:c}=D.useContext(ns),{pathname:u}=Oi(),h=Dr(),f=np(i,tp(c),u,r==="path"),p=JSON.stringify(f);return D.useEffect(()=>{h(JSON.parse(p),{replace:e,state:t,relative:r})},[h,p,r,e,t]),null}function ln(i){Qt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function IS({basename:i="/",children:e=null,location:t,navigationType:r="POP",navigator:o,static:c=!1,unstable_useTransitions:u}){Qt(!Oa(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=i.replace(/^\/*/,"/"),f=D.useMemo(()=>({basename:h,navigator:o,static:c,unstable_useTransitions:u,future:{}}),[h,o,c,u]);typeof t=="string"&&(t=Ua(t));let{pathname:p="/",search:v="",hash:g="",state:x=null,key:y="default"}=t,E=D.useMemo(()=>{let T=bs(p,h);return T==null?null:{location:{pathname:T,search:v,hash:g,state:x,key:y},navigationType:r}},[h,p,v,g,x,y,r]);return Mi(E!=null,`<Router basename="${h}"> is not able to match the URL "${p}${v}${g}" because it does not start with the basename, so the <Router> won't render anything.`),E==null?null:D.createElement(ui.Provider,{value:f},D.createElement(qo.Provider,{children:e,value:E}))}function DS({children:i,location:e}){return yS(ef(i),e)}function ef(i,e=[]){let t=[];return D.Children.forEach(i,(r,o)=>{if(!D.isValidElement(r))return;let c=[...e,o];if(r.type===D.Fragment){t.push.apply(t,ef(r.props.children,c));return}Qt(r.type===ln,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Qt(!r.props.index||!r.props.children,"An index route cannot have child routes.");let u={id:r.props.id||c.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(u.children=ef(r.props.children,c)),t.push(u)}),t}var Uc="get",Fc="application/x-www-form-urlencoded";function au(i){return typeof HTMLElement<"u"&&i instanceof HTMLElement}function jS(i){return au(i)&&i.tagName.toLowerCase()==="button"}function US(i){return au(i)&&i.tagName.toLowerCase()==="form"}function FS(i){return au(i)&&i.tagName.toLowerCase()==="input"}function OS(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function kS(i,e){return i.button===0&&(!e||e==="_self")&&!OS(i)}var tc=null;function BS(){if(tc===null)try{new FormData(document.createElement("form"),0),tc=!1}catch{tc=!0}return tc}var zS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Kd(i){return i!=null&&!zS.has(i)?(Mi(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Fc}"`),null):i}function HS(i,e){let t,r,o,c,u;if(US(i)){let h=i.getAttribute("action");r=h?bs(h,e):null,t=i.getAttribute("method")||Uc,o=Kd(i.getAttribute("enctype"))||Fc,c=new FormData(i)}else if(jS(i)||FS(i)&&(i.type==="submit"||i.type==="image")){let h=i.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let f=i.getAttribute("formaction")||h.getAttribute("action");if(r=f?bs(f,e):null,t=i.getAttribute("formmethod")||h.getAttribute("method")||Uc,o=Kd(i.getAttribute("formenctype"))||Kd(h.getAttribute("enctype"))||Fc,c=new FormData(h,i),!BS()){let{name:p,type:v,value:g}=i;if(v==="image"){let x=p?`${p}.`:"";c.append(`${x}x`,"0"),c.append(`${x}y`,"0")}else p&&c.append(p,g)}}else{if(au(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Uc,r=null,o=Fc,u=i}return c&&o==="text/plain"&&(u=c,c=void 0),{action:r,method:t.toLowerCase(),encType:o,formData:c,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function ap(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}function VS(i,e,t){let r=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return r.pathname==="/"?r.pathname=`_root.${t}`:e&&bs(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${t}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${t}`,r}async function GS(i,e){if(i.id in e)return e[i.id];try{let t=await import(i.module);return e[i.id]=t,t}catch(t){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function WS(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function XS(i,e,t){let r=await Promise.all(i.map(async o=>{let c=e.routes[o.route.id];if(c){let u=await GS(c,t);return u.links?u.links():[]}return[]}));return KS(r.flat(1).filter(WS).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function fx(i,e,t,r,o,c){let u=(f,p)=>t[p]?f.route.id!==t[p].route.id:!0,h=(f,p)=>{var v;return t[p].pathname!==f.pathname||((v=t[p].route.path)==null?void 0:v.endsWith("*"))&&t[p].params["*"]!==f.params["*"]};return c==="assets"?e.filter((f,p)=>u(f,p)||h(f,p)):c==="data"?e.filter((f,p)=>{var g;let v=r.routes[f.route.id];if(!v||!v.hasLoader)return!1;if(u(f,p)||h(f,p))return!0;if(f.route.shouldRevalidate){let x=f.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((g=t[0])==null?void 0:g.params)||{},nextUrl:new URL(i,window.origin),nextParams:f.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function qS(i,e,{includeHydrateFallback:t}={}){return $S(i.map(r=>{let o=e.routes[r.route.id];if(!o)return[];let c=[o.module];return o.clientActionModule&&(c=c.concat(o.clientActionModule)),o.clientLoaderModule&&(c=c.concat(o.clientLoaderModule)),t&&o.hydrateFallbackModule&&(c=c.concat(o.hydrateFallbackModule)),o.imports&&(c=c.concat(o.imports)),c}).flat(1))}function $S(i){return[...new Set(i)]}function YS(i){let e={},t=Object.keys(i).sort();for(let r of t)e[r]=i[r];return e}function KS(i,e){let t=new Set;return new Set(e),i.reduce((r,o)=>{let c=JSON.stringify(YS(o));return t.has(c)||(t.add(c),r.push({key:c,link:o})),r},[])}function Zv(){let i=D.useContext(Fa);return ap(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function ZS(){let i=D.useContext(ru);return ap(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var op=D.createContext(void 0);op.displayName="FrameworkContext";function Jv(){let i=D.useContext(op);return ap(i,"You must render this element inside a <HydratedRouter> element"),i}function JS(i,e){let t=D.useContext(op),[r,o]=D.useState(!1),[c,u]=D.useState(!1),{onFocus:h,onBlur:f,onMouseEnter:p,onMouseLeave:v,onTouchStart:g}=e,x=D.useRef(null);D.useEffect(()=>{if(i==="render"&&u(!0),i==="viewport"){let T=_=>{_.forEach(w=>{u(w.isIntersecting)})},S=new IntersectionObserver(T,{threshold:.5});return x.current&&S.observe(x.current),()=>{S.disconnect()}}},[i]),D.useEffect(()=>{if(r){let T=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(T)}}},[r]);let y=()=>{o(!0)},E=()=>{o(!1),u(!1)};return t?i!=="intent"?[c,x,{}]:[c,x,{onFocus:wo(h,y),onBlur:wo(f,E),onMouseEnter:wo(p,y),onMouseLeave:wo(v,E),onTouchStart:wo(g,y)}]:[!1,x,{}]}function wo(i,e){return t=>{i&&i(t),t.defaultPrevented||e(t)}}function QS({page:i,...e}){let{router:t}=Zv(),r=D.useMemo(()=>Fv(t.routes,i,t.basename),[t.routes,i,t.basename]);return r?D.createElement(tM,{page:i,matches:r,...e}):null}function eM(i){let{manifest:e,routeModules:t}=Jv(),[r,o]=D.useState([]);return D.useEffect(()=>{let c=!1;return XS(i,e,t).then(u=>{c||o(u)}),()=>{c=!0}},[i,e,t]),r}function tM({page:i,matches:e,...t}){let r=Oi(),{manifest:o,routeModules:c}=Jv(),{basename:u}=Zv(),{loaderData:h,matches:f}=ZS(),p=D.useMemo(()=>fx(i,e,f,o,r,"data"),[i,e,f,o,r]),v=D.useMemo(()=>fx(i,e,f,o,r,"assets"),[i,e,f,o,r]),g=D.useMemo(()=>{if(i===r.pathname+r.search+r.hash)return[];let E=new Set,T=!1;if(e.forEach(_=>{var b;let w=o.routes[_.route.id];!w||!w.hasLoader||(!p.some(N=>N.route.id===_.route.id)&&_.route.id in h&&((b=c[_.route.id])!=null&&b.shouldRevalidate)||w.hasClientLoader?T=!0:E.add(_.route.id))}),E.size===0)return[];let S=VS(i,u,"data");return T&&E.size>0&&S.searchParams.set("_routes",e.filter(_=>E.has(_.route.id)).map(_=>_.route.id).join(",")),[S.pathname+S.search]},[u,h,r,o,p,e,i,c]),x=D.useMemo(()=>qS(v,o),[v,o]),y=eM(v);return D.createElement(D.Fragment,null,g.map(E=>D.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...t})),x.map(E=>D.createElement("link",{key:E,rel:"modulepreload",href:E,...t})),y.map(({key:E,link:T})=>D.createElement("link",{key:E,nonce:t.nonce,...T})))}function nM(...i){return e=>{i.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var iM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{iM&&(window.__reactRouterVersion="7.11.0")}catch{}function sM({basename:i,children:e,unstable_useTransitions:t,window:r}){let o=D.useRef();o.current==null&&(o.current=Oy({window:r,v5Compat:!0}));let c=o.current,[u,h]=D.useState({action:c.action,location:c.location}),f=D.useCallback(p=>{t===!1?h(p):D.startTransition(()=>h(p))},[t]);return D.useLayoutEffect(()=>c.listen(f),[c,f]),D.createElement(IS,{basename:i,children:e,location:u.location,navigationType:u.action,navigator:c,unstable_useTransitions:t})}var Qv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,lp=D.forwardRef(function({onClick:e,discover:t="render",prefetch:r="none",relative:o,reloadDocument:c,replace:u,state:h,target:f,to:p,preventScrollReset:v,viewTransition:g,unstable_defaultShouldRevalidate:x,...y},E){let{basename:T,unstable_useTransitions:S}=D.useContext(ui),_=typeof p=="string"&&Qv.test(p),w=Hv(p,T);p=w.to;let b=vS(p,{relative:o}),[N,I,L]=JS(r,y),B=lM(p,{replace:u,state:h,target:f,preventScrollReset:v,relative:o,viewTransition:g,unstable_defaultShouldRevalidate:x,unstable_useTransitions:S});function C(Y){e&&e(Y),Y.defaultPrevented||B(Y)}let O=D.createElement("a",{...y,...L,href:w.absoluteURL||b,onClick:w.isExternal||c?e:C,ref:nM(E,I),target:f,"data-discover":!_&&t==="render"?"true":void 0});return N&&!_?D.createElement(D.Fragment,null,O,D.createElement(QS,{page:b})):O});lp.displayName="Link";var rM=D.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:r="",end:o=!1,style:c,to:u,viewTransition:h,children:f,...p},v){let g=$o(u,{relative:p.relative}),x=Oi(),y=D.useContext(ru),{navigator:E,basename:T}=D.useContext(ui),S=y!=null&&fM(g)&&h===!0,_=E.encodeLocation?E.encodeLocation(g).pathname:g.pathname,w=x.pathname,b=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;t||(w=w.toLowerCase(),b=b?b.toLowerCase():null,_=_.toLowerCase()),b&&T&&(b=bs(b,T)||b);const N=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let I=w===_||!o&&w.startsWith(_)&&w.charAt(N)==="/",L=b!=null&&(b===_||!o&&b.startsWith(_)&&b.charAt(_.length)==="/"),B={isActive:I,isPending:L,isTransitioning:S},C=I?e:void 0,O;typeof r=="function"?O=r(B):O=[r,I?"active":null,L?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let Y=typeof c=="function"?c(B):c;return D.createElement(lp,{...p,"aria-current":C,className:O,ref:v,style:Y,to:u,viewTransition:h},typeof f=="function"?f(B):f)});rM.displayName="NavLink";var aM=D.forwardRef(({discover:i="render",fetcherKey:e,navigate:t,reloadDocument:r,replace:o,state:c,method:u=Uc,action:h,onSubmit:f,relative:p,preventScrollReset:v,viewTransition:g,unstable_defaultShouldRevalidate:x,...y},E)=>{let{unstable_useTransitions:T}=D.useContext(ui),S=dM(),_=hM(h,{relative:p}),w=u.toLowerCase()==="get"?"get":"post",b=typeof h=="string"&&Qv.test(h),N=I=>{if(f&&f(I),I.defaultPrevented)return;I.preventDefault();let L=I.nativeEvent.submitter,B=(L==null?void 0:L.getAttribute("formmethod"))||u,C=()=>S(L||I.currentTarget,{fetcherKey:e,method:B,navigate:t,replace:o,state:c,relative:p,preventScrollReset:v,viewTransition:g,unstable_defaultShouldRevalidate:x});T&&t!==!1?D.startTransition(()=>C()):C()};return D.createElement("form",{ref:E,method:w,action:_,onSubmit:r?f:N,...y,"data-discover":!b&&i==="render"?"true":void 0})});aM.displayName="Form";function oM(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function e0(i){let e=D.useContext(Fa);return Qt(e,oM(i)),e}function lM(i,{target:e,replace:t,state:r,preventScrollReset:o,relative:c,viewTransition:u,unstable_defaultShouldRevalidate:h,unstable_useTransitions:f}={}){let p=Dr(),v=Oi(),g=$o(i,{relative:c});return D.useCallback(x=>{if(kS(x,e)){x.preventDefault();let y=t!==void 0?t:Ho(v)===Ho(g),E=()=>p(i,{replace:y,state:r,preventScrollReset:o,relative:c,viewTransition:u,unstable_defaultShouldRevalidate:h});f?D.startTransition(()=>E()):E()}},[v,p,g,t,r,e,i,o,c,u,h,f])}var cM=0,uM=()=>`__${String(++cM)}__`;function dM(){let{router:i}=e0("useSubmit"),{basename:e}=D.useContext(ui),t=AS(),r=i.fetch,o=i.navigate;return D.useCallback(async(c,u={})=>{let{action:h,method:f,encType:p,formData:v,body:g}=HS(c,e);if(u.navigate===!1){let x=u.fetcherKey||uM();await r(x,t,u.action||h,{unstable_defaultShouldRevalidate:u.unstable_defaultShouldRevalidate,preventScrollReset:u.preventScrollReset,formData:v,body:g,formMethod:u.method||f,formEncType:u.encType||p,flushSync:u.flushSync})}else await o(u.action||h,{unstable_defaultShouldRevalidate:u.unstable_defaultShouldRevalidate,preventScrollReset:u.preventScrollReset,formData:v,body:g,formMethod:u.method||f,formEncType:u.encType||p,replace:u.replace,state:u.state,fromRouteId:t,flushSync:u.flushSync,viewTransition:u.viewTransition})},[r,o,e,t])}function hM(i,{relative:e}={}){let{basename:t}=D.useContext(ui),r=D.useContext(ns);Qt(r,"useFormAction must be used inside a RouteContext");let[o]=r.matches.slice(-1),c={...$o(i||".",{relative:e})},u=Oi();if(i==null){c.search=u.search;let h=new URLSearchParams(c.search),f=h.getAll("index");if(f.some(v=>v==="")){h.delete("index"),f.filter(g=>g).forEach(g=>h.append("index",g));let v=h.toString();c.search=v?`?${v}`:""}}return(!i||i===".")&&o.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(c.pathname=c.pathname==="/"?t:Ss([t,c.pathname])),Ho(c)}function fM(i,{relative:e}={}){let t=D.useContext(Gv);Qt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=e0("useViewTransitionState"),o=$o(i,{relative:e});if(!t.isTransitioning)return!1;let c=bs(t.currentLocation.pathname,r)||t.currentLocation.pathname,u=bs(t.nextLocation.pathname,r)||t.nextLocation.pathname;return qc(o.pathname,u)!=null||qc(o.pathname,c)!=null}const tf={baseURL:"https://resplendent-commitment-production-1d46.up.railway.app/api/v1",timeout:1e4,headers:{"Content-Type":"application/json"}};class wa extends Error{constructor(t,r,o){super(t);Hd(this,"status");Hd(this,"details");this.name="ApiError",this.status=r,this.details=o}}function pM(i,e){if(!e)return i;const t=new URLSearchParams;Object.entries(e).forEach(([o,c])=>{c==null||c===""||t.append(o,String(c))});const r=t.toString();return r?`${i}?${r}`:i}function mM(i){if(/^https?:\/\//.test(i))return i;const e=tf.baseURL.replace(/\/$/,""),t=i.startsWith("/")?i:`/${i}`;return`${e}${t}`}async function Ca(i,e={}){var o,c;const t=new AbortController,r=setTimeout(()=>t.abort(),tf.timeout);try{const u=mM(pM(i,e.query)),h=await fetch(u,{method:e.method||"GET",cache:"no-store",headers:{...tf.headers,"Cache-Control":"no-store",Pragma:"no-cache",...e.authToken?{Authorization:`Bearer ${e.authToken}`}:{},...e.headers},body:e.body?JSON.stringify(e.body):void 0,signal:t.signal}),v=(h.headers.get("content-type")||"").includes("application/json")?await h.json():null;if(!h.ok){const g=((o=v==null?void 0:v.error)==null?void 0:o.message)||`HTTP ${h.status}`;throw new wa(g,h.status,(c=v==null?void 0:v.error)==null?void 0:c.details)}if(!v||!v.ok)throw new wa("Invalid API response format",h.status);return v.data}catch(u){throw u instanceof wa?u:u instanceof DOMException&&u.name==="AbortError"?new wa("Request timeout",408):new wa(u.message||"Network error",500)}finally{clearTimeout(r)}}const cp="mboalink.accessToken",up="mboalink.refreshToken",Vo="mboalink.user";function Yo(){return typeof window<"u"&&!!window.localStorage}function gM(i){const e=i.replace(/-/g,"+").replace(/_/g,"/"),t=e.padEnd(e.length+(4-e.length%4)%4,"=");return atob(t)}function px(){const i=$c();if(!i)return null;try{const e=JSON.parse(gM(i.split(".")[1]||""));if(e.exp&&e.exp*1e3<Date.now()||!e.sub||!e.email)return null;const t={id:e.sub,email:e.email,name:e.fullName,fullName:e.fullName,role:e.role,hotelId:e.hotelId||null};return localStorage.setItem(Vo,JSON.stringify(t)),t}catch{return null}}function Oc(i){Yo()&&(localStorage.setItem(cp,i.accessToken),localStorage.setItem(up,i.refreshToken),localStorage.setItem(Vo,JSON.stringify(i.user)))}function t0(){Yo()&&(localStorage.removeItem(cp),localStorage.removeItem(up),localStorage.removeItem(Vo))}function $c(){return Yo()?localStorage.getItem(cp):null}function nf(){return Yo()?localStorage.getItem(up):null}function dp(){if(!Yo())return null;const i=localStorage.getItem(Vo);if(!i)return px();try{return JSON.parse(i)}catch{return localStorage.removeItem(Vo),px()}}function Zd(i){return{id:i.id||i.sub||"",email:i.email,name:i.fullName,fullName:i.fullName,role:i.role,hotelId:i.hotelId||null}}const Wn={async login(i){const e=await Ca("/auth/login",{method:"POST",body:i});if("mfaRequired"in e&&e.mfaRequired)return e;const t=Zd(e.user);return Oc({accessToken:e.accessToken,refreshToken:e.refreshToken,user:t}),{mfaRequired:!1,user:t}},async verifyMfa(i,e){const t=await Ca("/auth/mfa/verify",{method:"POST",body:{email:i,code:e}}),r=Zd(t.user);return Oc({accessToken:t.accessToken,refreshToken:t.refreshToken,user:r}),r},async me(){const i=$c();if(!i)throw new Error("Not authenticated");const e=await Ca("/auth/me",{authToken:i}),t=Zd(e);return Oc({accessToken:i,refreshToken:nf()||"",user:t}),t},getAccessToken:$c,getRefreshToken:nf,getStoredUser:dp,async logout(){t0()}};async function xM(){const i=nf();if(!i)return null;try{const e=await Ca("/auth/refresh",{method:"POST",body:{refreshToken:i}}),t=dp();return t?(Oc({accessToken:e.accessToken,refreshToken:i,user:t}),e.accessToken):null}catch{return t0(),null}}async function Mt(i,e){const t=$c();if(!t)throw new Error("Session expirée. Veuillez vous reconnecter.");try{return await Ca(i,{method:e==null?void 0:e.method,body:e==null?void 0:e.body,query:e==null?void 0:e.query,authToken:t})}catch(r){if(!(r instanceof wa)||r.status!==401)throw r;const o=await xM();if(!o)throw new Error("Session expirée. Veuillez vous reconnecter.");return Ca(i,{method:e==null?void 0:e.method,body:e==null?void 0:e.body,query:e==null?void 0:e.query,authToken:o})}}const We={listHotels(i){return Mt("/hotels",{query:i})},createHotel(i){return Mt("/hotels",{method:"POST",body:i})},updateHotel(i,e){return Mt(`/hotels/${i}`,{method:"PATCH",body:e})},deleteHotel(i){return Mt(`/hotels/${i}`,{method:"DELETE"})},listRooms(i){return Mt("/rooms",{query:i})},createRoom(i,e){return Mt(`/hotels/${i}/rooms`,{method:"POST",body:e})},updateRoom(i,e){return Mt(`/rooms/${i}`,{method:"PATCH",body:e})},deleteRoom(i){return Mt(`/rooms/${i}`,{method:"DELETE"})},listWifiConfigs(i){return Mt("/wifi-configs",{query:i})},upsertWifiConfig(i,e){return Mt(`/hotels/${i}/wifi-config`,{method:"PUT",body:e})},listGuestPasses(i){return Mt("/guest-passes",{query:i})},createGuestPass(i){return Mt("/guest-passes",{method:"POST",body:i})},createGuestPassesBulk(i){return Mt("/guest-passes/bulk",{method:"POST",body:i})},revokeGuestPass(i){return Mt(`/guest-passes/${i}/revoke`,{method:"PATCH"})},deleteGuestPass(i){return Mt(`/guest-passes/${i}`,{method:"DELETE"})},listLoginSessions(i){return Mt("/login-sessions",{query:i})},createManualLogin(i){return Mt("/login-sessions/manual",{method:"POST",body:i})},updateLoginSession(i,e){return Mt(`/login-sessions/${i}`,{method:"PATCH",body:e})},listClearedAddresses(i){return Mt("/cleared-addresses",{query:i})},createClearedAddress(i){return Mt("/cleared-addresses",{method:"POST",body:i})},deleteClearedAddresses(i){return Mt("/cleared-addresses",{method:"DELETE",body:{ids:i}})},getGuestConfig(i){return Mt(`/hotels/${i}/guest-config`)},upsertGuestConfig(i){return Mt("/guest-config",{method:"PUT",body:i})},listDevices(i){return Mt("/devices",{query:i})},createDevice(i){return Mt("/devices",{method:"POST",body:i})},updateDevice(i,e){return Mt(`/devices/${i}`,{method:"PATCH",body:e})},restartDevice(i){return Mt(`/devices/${i}/restart`,{method:"POST"})},listDeviceMetrics(i,e){return Mt(`/devices/${i}/metrics`,{query:e})},getDashboardOverview(i){return Mt("/dashboard/overview",{query:i})},listUsers(i){return Mt("/users",{query:i})},createUser(i){return Mt("/users",{method:"POST",body:i})},updateUser(i,e){return Mt(`/users/${i}`,{method:"PATCH",body:e})},deactivateUser(i){return Mt(`/users/${i}/deactivate`,{method:"PATCH"})},listNotificationRecipients(){return Mt("/notifications/recipients")},listNotificationsInbox(i){return Mt("/notifications/inbox",{query:i})},listSentNotifications(){return Mt("/notifications/sent")},getUnreadNotificationCount(){return Mt("/notifications/unread-count")},createNotification(i){return Mt("/notifications",{method:"POST",body:i})},markNotificationRead(i){return Mt(`/notifications/${i}/read`,{method:"PATCH"})}},at={public:{home:"/home",dashboard:"/dashboard",networkMap:"/dashboard/network-map",login:"/login",mfa:"/mfa",register:"/register",forgotPassword:"/forgot-password",wifiCode:"/logins/wifi-code",loginByAddress:"/logins/login-by-address",statusLogins:"/logins/status-logins",manualLogin:"/logins/manual-login",websitesManager:"/logins/websites-manager",configCode:"/logins/config-code",hotels:"/hotel-manager/hotels",rooms:"/hotel-manager/rooms",configWifi:"/hotel-manager/config-wifi",devices:"/device-manager/devices",adminMboa:"/admin-mboa",users:"/admin/users",notifications:"/notifications"},protected:{dashboard:"/dashboard",profile:"/profile",settings:"/settings"},admin:{users:"/admin/users",settings:"/admin/settings"}},hp="/assets/mboalink-logo-navbar-CXxN8FJp.png";function vM(){const i=Dr(),e=Oi(),[t,r]=D.useState(""),[o,c]=D.useState(""),[u,h]=D.useState(!1),[f,p]=D.useState(""),v=async g=>{var x;g.preventDefault(),h(!0),p("");try{const y=await Wn.login({email:t,password:o});if(y.mfaRequired)i(at.public.mfa,{state:{email:y.email}});else{const E=new URLSearchParams(e.search).get("redirect"),T=(x=y.user)==null?void 0:x.role,S=T==="ADMIN"?at.public.adminMboa:T==="RECEPTIONIST"?at.public.manualLogin:["SUPPORT","HOTEL_IT"].includes(T)?at.public.dashboard:at.public.home,_=T!=="ADMIN"&&(E==null?void 0:E.startsWith("/"))&&E!==at.public.login;i(_?E:S,{replace:!0})}}catch(y){p((y==null?void 0:y.message)||"Identifiants incorrects")}finally{h(!1)}};return a.jsxs("div",{className:"loginPage",children:[a.jsxs("div",{className:"loginLeft",children:[a.jsxs("div",{className:"loginBrand",children:[a.jsx("div",{className:"brandLogo",children:a.jsx("img",{src:hp,alt:"MboaLink"})}),a.jsx("div",{className:"brandText",children:a.jsx("p",{className:"brandTagline",children:"HOSPITALITY • TRANSPORT • SMART ACCESS"})})]}),a.jsxs("div",{className:"loginHero",children:[a.jsxs("h2",{className:"heroTitle",children:["Connectez-vous à",a.jsx("br",{}),"votre ",a.jsx("span",{className:"highlight",children:"écosystème"})," Mboa."]}),a.jsx("p",{className:"heroDescription",children:"MboaLink synchronise vos hôtels, gares routières et partenaires en une seule plateforme fluide, pensée pour l'Afrique et le monde."}),a.jsxs("div",{className:"features",children:[a.jsxs("div",{className:"feature",children:[a.jsx("div",{className:"featureIcon",children:"✓"}),a.jsx("span",{children:"Check-in en moins de 30s"})]}),a.jsxs("div",{className:"feature",children:[a.jsx("div",{className:"featureIcon",children:"✓"}),a.jsx("span",{children:"Monitoring temps réel"})]}),a.jsxs("div",{className:"feature",children:[a.jsx("div",{className:"featureIcon",children:"✓"}),a.jsx("span",{children:"Data sécurisée & conforme"})]})]}),a.jsxs("div",{className:"stats",children:[a.jsxs("div",{className:"stat",children:[a.jsx("div",{className:"statValue",children:"+120"}),a.jsx("div",{className:"statLabel",children:"Sites connectés"})]}),a.jsxs("div",{className:"stat",children:[a.jsx("div",{className:"statValue",children:"99.9%"}),a.jsx("div",{className:"statLabel",children:"Disponibilité"})]}),a.jsxs("div",{className:"stat",children:[a.jsx("div",{className:"statValue",children:"24/7"}),a.jsx("div",{className:"statLabel",children:"Support dédié"})]})]})]}),a.jsx("footer",{className:"loginFooter",children:a.jsx("p",{children:"© 2025 MboaLink. Tous droits réservés."})})]}),a.jsx("div",{className:"loginRight",children:a.jsxs("div",{className:"loginCard",children:[a.jsx("h3",{className:"cardTitle",children:"Connexion"}),a.jsx("p",{className:"cardSubtitle",children:"Accédez à votre espace d'administration sécurisé"}),a.jsxs("form",{onSubmit:v,className:"loginForm",children:[f&&a.jsx("p",{className:"helpText",style:{color:"#b91c1c"},children:f}),a.jsxs("div",{className:"formGroup",children:[a.jsx("label",{htmlFor:"email",children:"Adresse e-mail"}),a.jsx("input",{id:"email",type:"email",placeholder:"vous@entreprise.com",value:t,onChange:g=>r(g.target.value),required:!0,disabled:u})]}),a.jsxs("div",{className:"formGroup",children:[a.jsx("label",{htmlFor:"password",children:"Mot de passe"}),a.jsx("input",{id:"password",type:"password",placeholder:"Votre mot de passe",value:o,onChange:g=>c(g.target.value),required:!0,disabled:u})]}),a.jsx("a",{href:"#",className:"forgotPassword",children:"Mot de passe oublié ?"}),a.jsx("button",{type:"submit",className:"submitBtn",disabled:u,children:u?"Connexion...":"Se connecter"})]}),a.jsxs("p",{className:"helpText",children:["Besoin d'un accès ? ",a.jsx("a",{href:"#",children:"Contacter l'administrateur"})]})]})})]})}function _M(){var g;const i=Dr(),t=((g=Oi().state)==null?void 0:g.email)||"",[r,o]=D.useState(""),[c,u]=D.useState(!1),[h,f]=D.useState("");if(!t)return i(at.public.login,{replace:!0}),null;const p=async x=>{if(x.preventDefault(),r.length<6){f("Veuillez entrer un code valide à 6 chiffres");return}u(!0),f("");try{await Wn.verifyMfa(t,r),i(at.public.home,{replace:!0})}catch(y){f((y==null?void 0:y.message)||"Code invalide ou expiré"),o("")}finally{u(!1)}},v=()=>{i(at.public.login,{replace:!0})};return a.jsx("div",{className:"twoFactorPage",children:a.jsxs("div",{className:"twoFactorCard",children:[a.jsxs("div",{className:"tfBrand",children:[a.jsx("div",{className:"tfLogo",children:a.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",children:[a.jsx("path",{d:"M20 5L5 15V25L20 35L35 25V15L20 5Z",fill:"#EDC707"}),a.jsx("circle",{cx:"20",cy:"20",r:"8",fill:"#052F5F"})]})}),a.jsx("h1",{className:"tfBrandName",children:"MboaLink"})]}),a.jsxs("div",{className:"tfContent",children:[a.jsx("h2",{className:"tfTitle",children:"Multi-factor authentification"}),a.jsx("p",{className:"tfSubtitle",children:"Additional security code required"}),a.jsxs("div",{className:"userInfo",children:[a.jsx("div",{className:"userAvatar",children:a.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),a.jsx("circle",{cx:"12",cy:"7",r:"4"})]})}),a.jsxs("div",{className:"userEmail",children:["User: ",a.jsx("strong",{children:t})]}),a.jsx("button",{type:"button",className:"restartLink",onClick:v,children:"Restart login"})]}),a.jsx("p",{className:"tfInstructions",children:"Un code de vérification à 6 chiffres a été envoyé à votre adresse email. Saisissez-le ci-dessous."}),a.jsxs("form",{onSubmit:p,className:"tfForm",children:[a.jsx("input",{type:"text",inputMode:"numeric",placeholder:"000000",value:r,onChange:x=>{o(x.target.value.replace(/\D/g,"").slice(0,6)),f("")},maxLength:6,className:"codeInput",disabled:c,autoFocus:!0}),h&&a.jsx("div",{className:"errorMessage",children:h}),a.jsx("button",{type:"submit",className:"tfSubmitBtn",disabled:c||r.length<6,children:c?"Vérification...":"Sign in"})]}),a.jsxs("p",{className:"tfHelp",children:["Having trouble with your code?"," ",a.jsx("a",{href:"#",children:"Use a backup method"})," or"," ",a.jsx("a",{href:"#",children:"contact your administrator"})]})]})]})})}function yM(){const i="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";let e="";for(let t=0;t<6;t++)e+=i.charAt(Math.floor(Math.random()*i.length));return e}function SM(){return new Date().toISOString().split("T")[0]}const Jd=()=>({passCode:yM(),label:"",roomId:"",clientName:"",duration:"",durationType:"Hours",maxUses:0,expiryDate:"",expiryTime:"00:00",uploadCap:1500,downloadCap:1500,zones:{CONFERENCE:!1,PUBLIC:!1,GUEST_ROOM:!1,IROH:!1,RC:!1}});function MM({isOpen:i,onClose:e,onSubmit:t,rooms:r=[]}){const[o,c]=D.useState(Jd()),u=(g,x)=>c(y=>({...y,[g]:x})),h=(g,x)=>{const y=x===""?"":Number(x);c(E=>({...E,[g]:y}))},f=g=>c(x=>({...x,zones:{...x.zones,[g]:!x.zones[g]}})),p=()=>{t&&t(o),c(Jd()),e()},v=()=>{c(Jd()),e()};return i?a.jsx("div",{className:"modalOverlay",onClick:v,children:a.jsxs("div",{className:"modalContent",onClick:g=>g.stopPropagation(),children:[a.jsxs("div",{className:"modalHeader",children:[a.jsx("button",{className:"backBtn",onClick:v,children:"← BACK"}),a.jsxs("div",{className:"modalTitle",children:[a.jsx("h2",{children:"Add A Guest Pass"}),a.jsx("p",{children:`Le code est généré aléatoirement. Le label est facultatif — il sert uniquement à identifier ou catégoriser le code (ex : "Conférence Total Energie", "Chambre VIP"). Il n'a aucun impact sur le code lui-même.`})]})]}),a.jsxs("div",{className:"modalBody",children:[a.jsxs("section",{className:"formSection",children:[a.jsx("h3",{className:"sectionTitle",children:"General Information"}),a.jsxs("div",{className:"formRow",children:[a.jsxs("div",{className:"formLabel",children:[a.jsx("label",{children:"Pass Code"}),a.jsx("p",{className:"labelHelp",children:"Code généré automatiquement. Vous pouvez le remplacer par le vôtre."})]}),a.jsx("input",{type:"text",value:o.passCode,onChange:g=>u("passCode",g.target.value.toUpperCase()),maxLength:20})]}),a.jsxs("div",{className:"formRow",children:[a.jsxs("div",{className:"formLabel",children:[a.jsxs("label",{children:["Label ",a.jsx("span",{style:{fontWeight:400,color:"#94a3b8"},children:"(optionnel)"})]}),a.jsx("p",{className:"labelHelp",children:`Permet d'identifier ou catégoriser ce code. Ex : "Séminaire RH", "Suite Présidentielle", "Journaliste accrédité". Le code reste indépendant du label.`})]}),a.jsx("input",{type:"text",value:o.label,onChange:g=>u("label",g.target.value),placeholder:"Ex : Conférence Total Energie"})]}),a.jsxs("div",{className:"formRow",children:[a.jsxs("div",{className:"formLabel",children:[a.jsxs("label",{children:["Chambre ",a.jsx("span",{style:{fontWeight:400,color:"#94a3b8"},children:"(optionnel)"})]}),a.jsx("p",{className:"labelHelp",children:"Associez le ticket à une chambre pour permettre la connexion par nom + numéro de chambre."})]}),a.jsxs("select",{value:o.roomId,onChange:g=>u("roomId",g.target.value),children:[a.jsx("option",{value:"",children:"Aucune chambre"}),r.map(g=>a.jsx("option",{value:g.id,children:g.name||g.type},g.id))]})]}),a.jsxs("div",{className:"formRow",children:[a.jsxs("div",{className:"formLabel",children:[a.jsxs("label",{children:["Nom du client ",a.jsx("span",{style:{fontWeight:400,color:"#94a3b8"},children:"(optionnel)"})]}),a.jsx("p",{className:"labelHelp",children:"Ce nom sera utilisé avec la chambre sur le portail captif."})]}),a.jsx("input",{type:"text",value:o.clientName,onChange:g=>u("clientName",g.target.value),placeholder:"Ex : Jean Dupont"})]}),a.jsxs("div",{className:"formRow",children:[a.jsxs("div",{className:"formLabel",children:[a.jsx("label",{children:"Duration"}),a.jsx("p",{className:"labelHelp",children:"Choisissez l'unité puis la valeur. Durée maximale : 180 jours."})]}),a.jsxs("div",{className:"durationGroup",children:[a.jsx("input",{type:"number",value:o.duration,onChange:g=>h("duration",g.target.value),placeholder:"0",min:"0"}),a.jsxs("select",{value:o.durationType,onChange:g=>u("durationType",g.target.value),children:[a.jsx("option",{children:"Hours"}),a.jsx("option",{children:"Days"})]})]})]}),a.jsxs("div",{className:"formRow",children:[a.jsxs("div",{className:"formLabel",children:[a.jsx("label",{children:"Max Number of Uses"}),a.jsx("p",{className:"labelHelp",children:"Utilisations illimitées : saisir 0."})]}),a.jsx("input",{type:"number",value:o.maxUses,onChange:g=>h("maxUses",g.target.value),min:"0"})]}),a.jsxs("div",{className:"formRow",children:[a.jsxs("div",{className:"formLabel",children:[a.jsxs("label",{children:["Expiry Date ",a.jsx("span",{style:{fontWeight:400,color:"#94a3b8"},children:"(optionnel)"})]}),a.jsx("p",{className:"labelHelp",children:"Laissez vide pour aucune expiration. Les dates passées sont bloquées."})]}),a.jsxs("div",{className:"dateTimeGroup",children:[a.jsx("input",{type:"date",value:o.expiryDate,min:SM(),onChange:g=>u("expiryDate",g.target.value)}),a.jsx("input",{type:"time",value:o.expiryTime,onChange:g=>u("expiryTime",g.target.value)})]})]})]}),a.jsxs("section",{className:"formSection",children:[a.jsx("h3",{className:"sectionTitle",children:"Bandwidth Settings"}),a.jsxs("div",{className:"formRow",children:[a.jsxs("div",{className:"formLabel",children:[a.jsx("label",{children:"Upload Cap"}),a.jsx("p",{className:"labelHelp",children:"Glissez ou tapez directement (0 – 15 000 kb/s)."})]}),a.jsxs("div",{className:"capGroup",children:[a.jsx("input",{type:"range",min:"0",max:"15000",step:"100",value:o.uploadCap,onChange:g=>h("uploadCap",g.target.value),className:"capSlider"}),a.jsx("input",{type:"number",min:"0",max:"15000",step:"100",value:o.uploadCap,onChange:g=>h("uploadCap",g.target.value),className:"capInput"}),a.jsx("span",{className:"capUnit",children:"kb/s"})]})]}),a.jsxs("div",{className:"formRow",children:[a.jsxs("div",{className:"formLabel",children:[a.jsx("label",{children:"Download Cap"}),a.jsx("p",{className:"labelHelp",children:"Glissez ou tapez directement (0 – 15 000 kb/s)."})]}),a.jsxs("div",{className:"capGroup",children:[a.jsx("input",{type:"range",min:"0",max:"15000",step:"100",value:o.downloadCap,onChange:g=>h("downloadCap",g.target.value),className:"capSlider"}),a.jsx("input",{type:"number",min:"0",max:"15000",step:"100",value:o.downloadCap,onChange:g=>h("downloadCap",g.target.value),className:"capInput"}),a.jsx("span",{className:"capUnit",children:"kb/s"})]})]})]}),a.jsxs("section",{className:"formSection",children:[a.jsx("h3",{className:"sectionTitle",children:"Zone Information"}),a.jsxs("div",{className:"formRow",children:[a.jsx("div",{className:"formLabel",children:a.jsx("label",{children:"Allowable Zones"})}),a.jsx("div",{className:"checkboxGroup",children:Object.keys(o.zones).map(g=>a.jsxs("label",{className:"checkboxLabel",children:[a.jsx("input",{type:"checkbox",checked:o.zones[g],onChange:()=>f(g)}),a.jsx("span",{children:g.replace("_","-")})]},g))})]})]})]}),a.jsxs("div",{className:"modalFooter",children:[a.jsx("button",{className:"btn btnPrimary",onClick:p,children:"Add Guest Pass"}),a.jsx("button",{className:"btn btnSecondary",onClick:v,children:"Cancel"})]})]})}):null}function EM(){return new Date().toISOString().split("T")[0]}const Qd=()=>({quantity:1,label:"",duration:"",durationType:"Hours",maxUses:0,expiryDate:"",expiryTime:"00:00",uploadCap:1500,downloadCap:1500,zones:{CONFERENCE:!1,PUBLIC:!1,GUEST_ROOM:!1,IROH:!1,RC:!1}});function bM({isOpen:i,onClose:e,onSubmit:t}){const[r,o]=D.useState(Qd()),c=(v,g)=>o(x=>({...x,[v]:g})),u=(v,g)=>{const x=g===""?"":Number(g);o(y=>({...y,[v]:x}))},h=v=>o(g=>({...g,zones:{...g.zones,[v]:!g.zones[v]}})),f=()=>{if(r.quantity<1||r.quantity>1e3){alert("La quantité doit être comprise entre 1 et 1 000.");return}t&&t(r),o(Qd()),e()},p=()=>{o(Qd()),e()};return i?a.jsx("div",{className:"modalOverlay",onClick:p,children:a.jsxs("div",{className:"modalContent",onClick:v=>v.stopPropagation(),children:[a.jsxs("div",{className:"modalHeader",children:[a.jsx("button",{className:"backBtn",onClick:p,children:"← BACK"}),a.jsxs("div",{className:"modalTitle",children:[a.jsx("h2",{children:"Add Mass Guest Pass"}),a.jsx("p",{children:`Créez plusieurs codes WiFi en une seule opération. Les codes sont générés aléatoirement. Le label permet de regrouper et d'identifier tous ces codes sous un même événement ou contexte (ex : "Conférence Total Energie" — tous les codes créés porteront ce label pour les distinguer facilement).`})]})]}),a.jsxs("div",{className:"modalBody",children:[a.jsxs("section",{className:"formSection",children:[a.jsx("h3",{className:"sectionTitle",children:"General Information"}),a.jsxs("div",{className:"formRow",children:[a.jsxs("div",{className:"formLabel",children:[a.jsx("label",{children:"Number of Passes"}),a.jsx("p",{className:"labelHelp",children:"Nombre de codes à créer (maximum 1 000)."})]}),a.jsx("input",{type:"number",value:r.quantity,onChange:v=>u("quantity",v.target.value),min:"1",max:"1000"})]}),a.jsxs("div",{className:"formRow",children:[a.jsxs("div",{className:"formLabel",children:[a.jsxs("label",{children:["Label ",a.jsx("span",{style:{fontWeight:400,color:"#94a3b8"},children:"(optionnel)"})]}),a.jsx("p",{className:"labelHelp",children:'Identifiant commun pour tous les codes générés. Permet de les retrouver et filtrer rapidement. Ex : "Conférence Total Energie", "Séminaire RH Mars 2026", "Journalistes accrédités". Les codes eux-mêmes restent générés aléatoirement.'})]}),a.jsx("input",{type:"text",value:r.label,onChange:v=>c("label",v.target.value),placeholder:"Ex : Conférence Total Energie"})]}),a.jsxs("div",{className:"formRow",children:[a.jsxs("div",{className:"formLabel",children:[a.jsx("label",{children:"Duration"}),a.jsx("p",{className:"labelHelp",children:"Choisissez l'unité puis la valeur. Durée maximale : 180 jours."})]}),a.jsxs("div",{className:"durationGroup",children:[a.jsx("input",{type:"number",value:r.duration,onChange:v=>u("duration",v.target.value),placeholder:"0",min:"0"}),a.jsxs("select",{value:r.durationType,onChange:v=>c("durationType",v.target.value),children:[a.jsx("option",{children:"Hours"}),a.jsx("option",{children:"Days"})]})]})]}),a.jsxs("div",{className:"formRow",children:[a.jsxs("div",{className:"formLabel",children:[a.jsx("label",{children:"Max Number of Uses"}),a.jsx("p",{className:"labelHelp",children:"Utilisations illimitées : saisir 0."})]}),a.jsx("input",{type:"number",value:r.maxUses,onChange:v=>u("maxUses",v.target.value),min:"0"})]}),a.jsxs("div",{className:"formRow",children:[a.jsxs("div",{className:"formLabel",children:[a.jsxs("label",{children:["Expiry Date ",a.jsx("span",{style:{fontWeight:400,color:"#94a3b8"},children:"(optionnel)"})]}),a.jsx("p",{className:"labelHelp",children:"Laissez vide pour aucune expiration. Les dates passées sont bloquées."})]}),a.jsxs("div",{className:"dateTimeGroup",children:[a.jsx("input",{type:"date",value:r.expiryDate,min:EM(),onChange:v=>c("expiryDate",v.target.value)}),a.jsx("input",{type:"time",value:r.expiryTime,onChange:v=>c("expiryTime",v.target.value)})]})]})]}),a.jsxs("section",{className:"formSection",children:[a.jsx("h3",{className:"sectionTitle",children:"Bandwidth Settings"}),a.jsxs("div",{className:"formRow",children:[a.jsxs("div",{className:"formLabel",children:[a.jsx("label",{children:"Upload Cap"}),a.jsx("p",{className:"labelHelp",children:"Glissez ou tapez directement (0 – 15 000 kb/s)."})]}),a.jsxs("div",{className:"capGroup",children:[a.jsx("input",{type:"range",min:"0",max:"15000",step:"100",value:r.uploadCap,onChange:v=>u("uploadCap",v.target.value),className:"capSlider"}),a.jsx("input",{type:"number",min:"0",max:"15000",step:"100",value:r.uploadCap,onChange:v=>u("uploadCap",v.target.value),className:"capInput"}),a.jsx("span",{className:"capUnit",children:"kb/s"})]})]}),a.jsxs("div",{className:"formRow",children:[a.jsxs("div",{className:"formLabel",children:[a.jsx("label",{children:"Download Cap"}),a.jsx("p",{className:"labelHelp",children:"Glissez ou tapez directement (0 – 15 000 kb/s)."})]}),a.jsxs("div",{className:"capGroup",children:[a.jsx("input",{type:"range",min:"0",max:"15000",step:"100",value:r.downloadCap,onChange:v=>u("downloadCap",v.target.value),className:"capSlider"}),a.jsx("input",{type:"number",min:"0",max:"15000",step:"100",value:r.downloadCap,onChange:v=>u("downloadCap",v.target.value),className:"capInput"}),a.jsx("span",{className:"capUnit",children:"kb/s"})]})]})]}),a.jsxs("section",{className:"formSection",children:[a.jsx("h3",{className:"sectionTitle",children:"Zone Information"}),a.jsxs("div",{className:"formRow",children:[a.jsx("div",{className:"formLabel",children:a.jsx("label",{children:"Allowable Zones"})}),a.jsx("div",{className:"checkboxGroup",children:Object.keys(r.zones).map(v=>a.jsxs("label",{className:"checkboxLabel",children:[a.jsx("input",{type:"checkbox",checked:r.zones[v],onChange:()=>h(v)}),a.jsx("span",{children:v.replace("_","-")})]},v))})]})]})]}),a.jsxs("div",{className:"modalFooter",children:[a.jsxs("button",{className:"btn btnPrimary",onClick:f,children:["Create ",r.quantity," Guest Pass",r.quantity>1?"es":""]}),a.jsx("button",{className:"btn btnSecondary",onClick:p,children:"Cancel"})]})]})}):null}const eh={dashboard:at.public.dashboard,"network-map":at.public.networkMap,"wifi-code":at.public.wifiCode,"login-by-address":at.public.loginByAddress,"status-logins":at.public.statusLogins,"manual-login":at.public.manualLogin,"website-manager":at.public.websitesManager,"config-code":at.public.configCode,hotels:at.public.hotels,rooms:at.public.rooms,"config-wifi":at.public.configWifi,devices:at.public.devices,"admin-mboa":at.public.adminMboa,users:at.public.users,notifications:at.public.notifications};function Ei({children:i,activePage:e="LOGINS",activeSubPage:t="WiFi Code"}){var w;const r=Dr(),o=Wn.getStoredUser(),c=(o==null?void 0:o.name)||(o==null?void 0:o.email)||"Utilisateur",u=c.charAt(0).toUpperCase(),h=String((o==null?void 0:o.role)||"").trim().toUpperCase(),f=h==="RECEPTIONIST",p=h==="HOTEL_IT",v=h==="ADMIN",g=h==="SUPPORT"||h.includes("SUPPORT"),x=f?["LOGINS","NOTIFICATIONS"]:p?["DASHBOARD","LOGINS","HOTEL MANAGER","DEVICE MANAGER","NOTIFICATIONS"]:v?["ADMINISTRATION","LOGINS","DASHBOARD","HOTEL MANAGER","DEVICE MANAGER","NOTIFICATIONS"]:g?["LOGINS","DASHBOARD","NOTIFICATIONS"]:["LOGINS","DASHBOARD","NOTIFICATIONS"],y={LOGINS:f?[{label:"Manual Login",page:"manual-login"}]:p?[{label:"WiFi Code",page:"wifi-code"},{label:"Statut Logins",page:"status-logins"},{label:"Web Site Manager",page:"website-manager"}]:[{label:"WiFi Code",page:"wifi-code"},{label:"Login by Adress",page:"login-by-address"},{label:"Statut Logins",page:"status-logins"},{label:"Manual Login",page:"manual-login"},{label:"Web Site Manager",page:"website-manager"},{label:"Config Code",page:"config-code"}],DASHBOARD:[{label:"Overview",page:"dashboard"},{label:"Network Map",page:"network-map"}],"HOTEL MANAGER":p?[{label:"Rooms",page:"rooms"},{label:"Config WiFi",page:"config-wifi"}]:[{label:"Hotels",page:"hotels"},{label:"Rooms",page:"rooms"},{label:"Config WiFi",page:"config-wifi"}],"DEVICE MANAGER":[{label:"Devices",page:"devices"}],NOTIFICATIONS:[{label:"Messages",page:"notifications"}],ADMINISTRATION:[{label:"Super Admin",page:"admin-mboa"}]},E={LOGINS:f?"manual-login":"wifi-code","HOTEL MANAGER":p?"rooms":"hotels",DASHBOARD:"dashboard","DEVICE MANAGER":"devices",NOTIFICATIONS:"notifications",ADMINISTRATION:"admin-mboa"},T=x.includes(e),S=b=>{const N=E[b];N&&eh[N]&&r(eh[N])},_=async()=>{await Wn.logout(),r(at.public.login)};return a.jsxs("div",{className:"layout",children:[a.jsx("header",{className:"mainHeader",children:a.jsxs("div",{className:"headerInner",children:[a.jsxs("div",{className:"headerLeft",children:[a.jsx("div",{className:"headerBrand",children:a.jsx("img",{src:hp,alt:"MboaLink",className:"headerLogo"})}),a.jsx("nav",{className:"mainNav","aria-label":"Main navigation",children:x.map(b=>a.jsx("button",{type:"button",className:`mainNavLink ${b===e?"active":""}`,onClick:()=>S(b),"aria-disabled":!E[b],children:b},b))})]}),a.jsxs("div",{className:"headerRight",children:[a.jsxs("div",{className:"userInfo",children:[a.jsx("span",{className:"userAvatar",children:u}),a.jsx("span",{className:"userName",children:c})]}),a.jsx("button",{className:"logoutBtn",onClick:_,type:"button",children:"Déconnexion"})]})]})}),T&&((w=y[e])==null?void 0:w.length)>0&&a.jsx("nav",{className:"subNav","aria-label":"Sub navigation",children:a.jsx("div",{className:"subNavInner",children:y[e].map(b=>a.jsx(lp,{to:eh[b.page],className:`subNavLink ${b.label===t?"active":""}`,children:b.label},b.page))})}),a.jsx("main",{className:"mainContent",children:i}),a.jsx("footer",{className:"mainFooter",children:a.jsxs("div",{className:"footerInner",children:[a.jsxs("div",{className:"footerLinks",children:[a.jsx("a",{href:"#",children:"Terms of Service"}),a.jsx("span",{className:"separator",children:"|"}),a.jsx("a",{href:"#",children:"Privacy Policy"}),a.jsx("span",{className:"separator",children:"|"}),a.jsx("a",{href:"#",children:"Help Desk"})]}),a.jsx("p",{className:"footerCopy",children:"© 2025 MboaLink. Tous droits réservés."})]})})]})}const bn="all";function Cs(i){return(i==null?void 0:i.role)==="ADMIN"||(i==null?void 0:i.role)==="SUPPORT"}function or(i,e=[]){var t;return Cs(i)?bn:(i==null?void 0:i.hotelId)||((t=e[0])==null?void 0:t.id)||""}function Zi(i){if(!(!i||i===bn))return i}function Na(i){return!!i&&i!==bn}const wM=()=>a.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),a.jsx("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]}),TM=()=>a.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("circle",{cx:"12",cy:"12",r:"10"}),a.jsx("line",{x1:"4.93",y1:"4.93",x2:"19.07",y2:"19.07"})]}),CM=()=>a.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("polyline",{points:"3 6 5 6 21 6"}),a.jsx("path",{d:"M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"}),a.jsx("path",{d:"M10 11v6"}),a.jsx("path",{d:"M14 11v6"}),a.jsx("path",{d:"M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"})]});function mx(i){return i?new Date(i).toLocaleString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}):"—"}function NM(i){return i?new Date(i)<new Date:!1}function n0(){const i=Wn.getStoredUser(),e=(i==null?void 0:i.role)==="HOTEL_IT",t=Cs(i),[r,o]=D.useState([]),[c,u]=D.useState([]),[h,f]=D.useState([]),[p,v]=D.useState(""),[g,x]=D.useState(!0),[y,E]=D.useState(""),[T,S]=D.useState([]),[_,w]=D.useState(!1),[b,N]=D.useState(!1),I=D.useRef(null),L=async U=>{try{const W=Zi(U),[$,X]=await Promise.all([We.listGuestPasses(W?{hotelId:W}:void 0),We.listRooms(W?{hotelId:W}:void 0)]);o($),u(X)}catch(W){alert(W.message||"Impossible de charger les codes")}};D.useEffect(()=>{We.listHotels().then(U=>{f(U);const W=or(i,U);return v(W),L(W)}).catch(U=>alert(U.message||"Chargement impossible")).finally(()=>x(!1))},[]),D.useEffect(()=>{!p||g||(L(p),S([]))},[p]),D.useEffect(()=>{if(!I.current)return;const U=B.length;T.length===0?(I.current.checked=!1,I.current.indeterminate=!1):T.length===U&&U>0?(I.current.checked=!0,I.current.indeterminate=!1):(I.current.checked=!1,I.current.indeterminate=!0)});const B=D.useMemo(()=>{const U=y.trim().toLowerCase();return U?r.filter(W=>{var $,X;return`${W.code} ${W.label||""} ${W.clientName||""} ${(($=W.room)==null?void 0:$.name)||""} ${((X=W.room)==null?void 0:X.type)||""}`.toLowerCase().includes(U)}):r},[r,y]),C=U=>S(W=>W.includes(U)?W.filter($=>$!==U):[...W,U]),O=()=>S(T.length===B.length?[]:B.map(U=>U.id)),Y=async()=>{if(T.length===0){alert("Sélectionnez au moins un code");return}if(confirm(`Supprimer ${T.length} code(s) sélectionné(s) ?`))try{await Promise.all(T.map(U=>We.deleteGuestPass(U))),await L(p),S([])}catch(U){alert(U.message||"Suppression impossible")}},V=async U=>{var W;if(confirm("Révoquer ce code ? Il ne pourra plus être utilisé."))try{await We.revokeGuestPass(U),await L(p)}catch($){if((W=$.message)!=null&&W.includes("expirée")||$.status===401){alert("Votre session a expiré. Veuillez vous reconnecter."),window.location.href="/login";return}alert($.message||"Révocation impossible")}},Q=async U=>{if(confirm("Supprimer définitivement ce code ?"))try{await We.deleteGuestPass(U),await L(p),S(W=>W.filter($=>$!==U))}catch(W){alert(W.message||"Suppression impossible")}},G=async U=>{if(!Na(p)){alert("Sélectionnez un hôtel précis avant de créer un code");return}try{const W=U.duration===""||U.duration===void 0?void 0:Number(U.duration);await We.createGuestPass({hotelId:p,code:U.passCode,label:U.label,roomId:U.roomId||void 0,clientName:U.clientName||void 0,durationValue:W,durationUnit:U.durationType,maxUses:Number(U.maxUses||0),expiryDate:U.expiryDate||void 0,expiryTime:U.expiryTime||void 0,uploadCapKbps:Number(U.uploadCap||1500),downloadCapKbps:Number(U.downloadCap||1500),zones:Object.entries(U.zones||{}).filter(([,$])=>$).map(([$])=>$)}),await L(p)}catch(W){alert(W.message||"Création impossible")}},ee=async U=>{if(!Na(p)){alert("Sélectionnez un hôtel précis avant de créer des codes");return}try{const W=U.duration===""||U.duration===void 0?void 0:Number(U.duration);await We.createGuestPassesBulk({hotelId:p,quantity:Number(U.quantity||1),codePrefix:U.label||void 0,label:U.label||void 0,durationValue:W,durationUnit:U.durationType,maxUses:Number(U.maxUses||0),expiryDate:U.expiryDate||void 0,expiryTime:U.expiryTime||void 0,uploadCapKbps:Number(U.uploadCap||1500),downloadCapKbps:Number(U.downloadCap||1500),zones:Object.entries(U.zones||{}).filter(([,$])=>$).map(([$])=>$)}),await L(p)}catch(W){alert(W.message||"Création en masse impossible")}},F=Na(p);return a.jsxs(Ei,{activePage:"LOGINS",activeSubPage:"WiFi Code",children:[a.jsxs("div",{className:"wifiCodePage",children:[a.jsxs("div",{className:"pageHeader",children:[a.jsx("h1",{className:"pageTitle",children:"Guest WiFi Codes"}),e&&a.jsx("span",{className:"hotelBadge",children:"Vue IT hôtel - accès clients"}),a.jsx("p",{className:"pageDescription",children:e?"Gérez les accès Wi-Fi clients de votre hôtel, avec un périmètre limité à votre établissement.":"Les WiFi Codes permettent à vos invités d'accéder à Internet via MboaLink. Vous pouvez créer de nouveaux codes, ajuster la durée, le débit et le nombre d'utilisations, ou supprimer les codes existants à partir de cette liste."})]}),a.jsxs("div",{className:"displayInfo",children:["Affichage de ",B.length," code",B.length!==1?"s":"","."]}),a.jsx("div",{className:"warningBanner",children:"Toute date d'expiration marquée d'un (*) correspond à un code déjà expiré et sera automatiquement retiré de la liste 30 jours après expiration."}),a.jsxs("div",{className:"actionsBar",children:[t&&a.jsxs("select",{className:"filterSelect",value:p,onChange:U=>v(U.target.value),children:[a.jsx("option",{value:bn,children:"Tous les hôtels"}),h.map(U=>a.jsx("option",{value:U.id,children:U.name},U.id))]}),a.jsx("input",{type:"text",placeholder:"Rechercher un code, un label...",className:"searchInput",value:y,onChange:U=>E(U.target.value)}),a.jsxs("div",{className:"actionButtons",children:[a.jsxs("button",{className:"btn btnSecondary",onClick:Y,disabled:T.length===0,children:["Supprimer (",T.length,")"]}),a.jsx("button",{className:"btn btnSecondary",onClick:()=>window.print(),children:"Print List"}),a.jsx("button",{className:"btn btnPrimary",disabled:!F,onClick:()=>N(!0),children:"Add Mass Guest Pass"}),a.jsx("button",{className:"btn btnPrimary",disabled:!F,onClick:()=>w(!0),children:"Add Guest Pass"})]})]}),!p&&!g&&a.jsx("div",{className:"warningBanner",children:"Créez d'abord un hôtel dans Hotel Manager avant de générer des codes WiFi."}),p===bn&&!g&&a.jsx("div",{className:"warningBanner",children:"Vue globale active : sélectionnez un hôtel précis pour créer de nouveaux codes WiFi."}),a.jsxs("div",{className:"tableWrapper",children:[g&&a.jsx("p",{style:{padding:"16px",color:"#64748b"},children:"Chargement des codes…"}),a.jsxs("table",{className:"wifiTable",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:a.jsx("input",{type:"checkbox",ref:I,onChange:O,title:T.length>0?"Tout désélectionner":"Tout sélectionner"})}),a.jsx("th",{children:"Pass"}),a.jsx("th",{children:"Label"}),a.jsx("th",{children:"Room / Client"}),a.jsx("th",{children:"Max Uses"}),a.jsx("th",{children:"Duration"}),a.jsx("th",{children:"Cap (Down / Up)"}),a.jsx("th",{children:"Créé le"}),a.jsx("th",{children:"Créé par"}),a.jsx("th",{children:"Expires"}),a.jsx("th",{children:"Options"})]})}),a.jsxs("tbody",{children:[!1,B.length===0&&!g?a.jsx("tr",{children:a.jsx("td",{colSpan:11,style:{textAlign:"center",padding:"40px",color:"#94a3b8"},children:"Aucun code WiFi trouvé."})}):B.map(U=>{var X,te,z,se;const W=NM(U.expiryAt),$=((X=U.createdBy)==null?void 0:X.fullName)||((te=U.createdBy)==null?void 0:te.email)||"—";return a.jsxs("tr",{className:W?"rowExpired":"",children:[a.jsx("td",{children:a.jsx("input",{type:"checkbox",checked:T.includes(U.id),onChange:()=>C(U.id)})}),a.jsx("td",{className:"codeCell",children:U.code}),a.jsx("td",{children:U.label||"—"}),a.jsxs("td",{children:[((z=U.room)==null?void 0:z.name)||((se=U.room)==null?void 0:se.type)||"—",U.clientName?a.jsxs(a.Fragment,{children:[a.jsx("br",{}),a.jsx("small",{children:U.clientName})]}):null]}),a.jsx("td",{children:U.maxUses===0?"∞":U.maxUses}),a.jsx("td",{children:U.durationValue?`${U.durationValue} ${U.durationUnit||""}`:"—"}),a.jsxs("td",{className:"bandwidthCell",children:[U.downloadCapKbps," / ",U.uploadCapKbps," kb/s"]}),a.jsx("td",{className:"dateCell",children:mx(U.createdAt)}),a.jsx("td",{className:"createdByCell",children:$}),a.jsx("td",{className:`dateCell ${W?"expiredDate":""}`,children:U.expiryAt?`${mx(U.expiryAt)}${W?" *":""}`:"—"}),a.jsx("td",{children:a.jsxs("div",{className:"optionsCell",children:[a.jsx("button",{className:"actionIconBtn actionIconBtnRevoke",title:"Révoquer",onClick:()=>V(U.id),disabled:U.isRevoked,children:a.jsx(TM,{})}),a.jsx("button",{className:"actionIconBtn actionIconBtnEdit",title:"Modifier (bientôt disponible)",onClick:()=>alert("Fonctionnalité de modification à venir."),children:a.jsx(wM,{})}),a.jsx("button",{className:"actionIconBtn actionIconBtnDelete",title:"Supprimer",onClick:()=>Q(U.id),children:a.jsx(CM,{})})]})})]},U.id)})]})]})]})]}),a.jsx(MM,{isOpen:_,onClose:()=>w(!1),onSubmit:G,rooms:c}),a.jsx(bM,{isOpen:b,onClose:()=>N(!1),onSubmit:ee})]})}function AM(){return a.jsx(n0,{})}function RM(){const[i,e]=D.useState(""),[t,r]=D.useState([]),[o,c]=D.useState({address:"",interface:"Not Public IP",clearedDate:"",clearedTime:"16:00",uploadCap:1500,downloadCap:1500,connectionType:"Admin Machine",notes:""}),[u,h]=D.useState([]),[f,p]=D.useState([]),v=async S=>{const _=await We.listClearedAddresses(S?{hotelId:S}:void 0);h(_.map(w=>({id:w.id,ipmac:w.address,interface:w.networkInterface||"None selected",expires:new Date(w.expiresAt).toLocaleString("fr-FR"),cap:`${w.downloadCapKbps} / ${w.uploadCapKbps}`,issuedBy:w.issuedBy||"-",details:`${w.connectionType||""} ${w.notes||""}`.trim()||"-"})))};D.useEffect(()=>{We.listHotels().then(async S=>{var w;r(S);const _=((w=S[0])==null?void 0:w.id)||"";e(_),await v(_)}).catch(S=>alert(S.message||"Impossible de charger les adresses"))},[]);const g=(S,_)=>{c(w=>({...w,[S]:_}))},x=async()=>{if(!i){alert("Sélectionnez un hôtel");return}if(!o.clearedDate){alert("Sélectionnez une date d’expiration");return}try{await We.createClearedAddress({hotelId:i,address:o.address,networkInterface:o.interface,expiresAt:`${o.clearedDate}T${o.clearedTime||"00:00"}:00.000Z`,uploadCapKbps:Number(o.uploadCap),downloadCapKbps:Number(o.downloadCap),connectionType:o.connectionType,notes:o.notes}),await v(i)}catch(S){alert(S.message||"Création impossible")}},y=async()=>{if(f.length!==0)try{await We.deleteClearedAddresses(f),await v(i),p([])}catch(S){alert(S.message||"Suppression impossible")}},E=S=>{p(_=>_.includes(S)?_.filter(w=>w!==S):[..._,S])},T=()=>{p(S=>S.length===u.length?[]:u.map(_=>_.id))};return a.jsx(Ei,{activePage:"LOGINS",activeSubPage:"Login by Adress",children:a.jsxs("div",{className:"loginByAddressPage",children:[a.jsxs("div",{className:"pageHeader",children:[a.jsx("h1",{className:"pageTitle",children:"Clear IP/MAC Address"}),a.jsx("p",{className:"pageSubtitle",children:"If the IP you want to clear is a public IP, you must specify the network interface."})]}),a.jsx("div",{className:"clearForm",children:a.jsxs("div",{className:"formSection",children:[a.jsx("h3",{className:"sectionTitle",children:"Address and Device Information"}),a.jsxs("div",{className:"formGrid",children:[a.jsxs("div",{className:"formCol",children:[a.jsxs("div",{className:"formField",children:[a.jsx("label",{children:"Hotel"}),a.jsxs("select",{value:i,onChange:S=>{const _=S.target.value;e(_),v(_)},children:[a.jsx("option",{value:"",children:"Select hotel"}),t.map(S=>a.jsx("option",{value:S.id,children:S.name},S.id))]})]}),a.jsxs("div",{className:"formField",children:[a.jsx("label",{children:"IP/MAC Address"}),a.jsx("p",{className:"fieldHelp",children:"Must be formatted correctly as an IP address or MAC address. Example MAC Address: 3D:F2:C0:A0:B3:4F"}),a.jsx("input",{type:"text",value:o.address,onChange:S=>g("address",S.target.value),placeholder:"Enter IP or MAC address"})]}),a.jsxs("div",{className:"formField",children:[a.jsx("label",{children:"Specify Network Interface"}),a.jsxs("select",{value:o.interface,onChange:S=>g("interface",S.target.value),children:[a.jsx("option",{children:"Not Public IP"}),a.jsx("option",{children:"Public IP – Interface A"}),a.jsx("option",{children:"Public IP – Interface B"})]})]}),a.jsxs("div",{className:"formField",children:[a.jsx("label",{children:"Cleared Until"}),a.jsxs("div",{className:"dateTimeGroup",children:[a.jsx("input",{type:"date",value:o.clearedDate,onChange:S=>g("clearedDate",S.target.value)}),a.jsx("input",{type:"time",value:o.clearedTime,onChange:S=>g("clearedTime",S.target.value)})]})]})]}),a.jsxs("div",{className:"formCol",children:[a.jsxs("div",{className:"formField",children:[a.jsx("label",{children:"Upload Cap"}),a.jsxs("div",{className:"capControl",children:[a.jsx("input",{type:"range",min:"0",max:"15000",step:"100",value:o.uploadCap,onChange:S=>g("uploadCap",Number(S.target.value))}),a.jsx("input",{type:"number",value:o.uploadCap,onChange:S=>g("uploadCap",Number(S.target.value)),className:"capValue"})]})]}),a.jsxs("div",{className:"formField",children:[a.jsx("label",{children:"Download Cap"}),a.jsxs("div",{className:"capControl",children:[a.jsx("input",{type:"range",min:"0",max:"15000",step:"100",value:o.downloadCap,onChange:S=>g("downloadCap",Number(S.target.value))}),a.jsx("input",{type:"number",value:o.downloadCap,onChange:S=>g("downloadCap",Number(S.target.value)),className:"capValue"})]})]}),a.jsxs("div",{className:"formField",children:[a.jsx("label",{children:"Connection Type / Reason"}),a.jsxs("select",{value:o.connectionType,onChange:S=>g("connectionType",S.target.value),children:[a.jsx("option",{children:"Admin Machine"}),a.jsx("option",{children:"Guest Device"}),a.jsx("option",{children:"Staff Device"}),a.jsx("option",{children:"Other"})]})]}),a.jsxs("div",{className:"formField",children:[a.jsx("label",{children:"Notes"}),a.jsx("p",{className:"fieldHelp",children:"Why are you clearing it? Case #, etc."}),a.jsx("textarea",{value:o.notes,onChange:S=>g("notes",S.target.value),placeholder:"Enter notes...",rows:"3"})]})]})]}),a.jsxs("div",{className:"formActions",children:[a.jsx("button",{className:"btn btnPrimary",onClick:x,children:"Clear"}),a.jsx("button",{className:"btn btnDanger",onClick:y,children:"Remove Selected"})]})]})}),a.jsxs("div",{className:"addressTable",children:[a.jsx("div",{className:"tableHeader",children:a.jsx("h3",{className:"tableTitle",children:"Cleared Addresses"})}),a.jsx("div",{className:"tableWrapper",children:a.jsxs("table",{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{style:{width:"40px"},children:a.jsx("input",{type:"checkbox",checked:f.length===u.length,onChange:T})}),a.jsx("th",{children:"IP/Mac"}),a.jsx("th",{children:"Interface"}),a.jsx("th",{children:"Expires"}),a.jsx("th",{children:"Cap (Down/Up)"}),a.jsx("th",{children:"Issued By"}),a.jsx("th",{children:"Details"}),a.jsx("th",{style:{width:"120px"},children:"Options"})]})}),a.jsx("tbody",{children:u.map(S=>a.jsxs("tr",{className:f.includes(S.id)?"selected":"",children:[a.jsx("td",{children:a.jsx("input",{type:"checkbox",checked:f.includes(S.id),onChange:()=>E(S.id)})}),a.jsx("td",{className:"macAddress",children:S.ipmac}),a.jsx("td",{children:S.interface}),a.jsx("td",{children:S.expires}),a.jsx("td",{className:"capCell",children:S.cap}),a.jsx("td",{children:S.issuedBy}),a.jsx("td",{children:S.details}),a.jsxs("td",{className:"optionsCell",children:[a.jsx("a",{href:"#",className:"optionLink",children:"Remove"})," | ",a.jsx("a",{href:"#",className:"optionLink",children:"Modify"})]})]},S.id))})]})})]})]})})}function PM(){const i=Wn.getStoredUser(),e=Cs(i),[t,r]=D.useState(""),[o,c]=D.useState([]),[u,h]=D.useState([]),[f,p]=D.useState(""),[v,g]=D.useState([]),x=b=>b.map(N=>{var I,L,B;return{...N,room:((I=N.room)==null?void 0:I.name)||((L=N.room)==null?void 0:L.type)||"N/A",name:N.clientName||"None Specified",status:N.status==="ONLINE"?"Online":N.status==="AWAY"?"Away":"Offline",ipmac:`${N.ipAddress||"-"} [${N.macAddress||"-"}]`,duration:"-",start:N.startedAt?new Date(N.startedAt).toLocaleString("fr-FR"):"-",end:N.endedAt?new Date(N.endedAt).toLocaleString("fr-FR"):"-",capDown:N.downloadCapKbps||N.capDownKbps||0,capUp:N.uploadCapKbps||N.capUpKbps||0,currentDown:0,currentUp:0,usageDown:N.usedDownMb||N.usageDownMb||0,usageUp:N.usedUpMb||N.usageUpMb||0,type:(B=N.guestPass)!=null&&B.code?`Guest Pass (${N.guestPass.code})`:N.type}}),y=async b=>{const N=Zi(b),I=await We.listLoginSessions(N?{hotelId:N}:void 0);g(x(I))};D.useEffect(()=>{We.listHotels().then(async b=>{h(b);const N=or(i,b);p(N),await y(N)}).catch(b=>alert(b.message||"Impossible de charger les sessions"))},[]),D.useEffect(()=>{f&&(y(f).catch(b=>alert(b.message||"Impossible de charger les sessions")),c([]))},[f]);const E=D.useMemo(()=>{const b=v.length,N=v.filter(B=>B.status==="Online").length,I=v.filter(B=>B.status==="Offline").length,L=v.filter(B=>B.status==="Away").length;return{total:b,online:N,offline:I,away:L}},[v]),T=D.useMemo(()=>{const b=t.trim().toLowerCase();return b?v.filter(N=>Object.values(N).some(I=>String(I).toLowerCase().includes(b))):v},[v,t]),S=b=>{c(N=>N.includes(b)?N.filter(I=>I!==b):[...N,b])},_=()=>{c(b=>b.length===T.length?[]:T.map(N=>N.id))},w=()=>{if(o.length===0){alert("Please select at least one login to remove");return}confirm(`Remove ${o.length} selected login(s)?`)&&We.deleteLoginSessions(o).then(async()=>{await y(f),c([])}).catch(b=>alert(b.message||"Suppression impossible"))};return a.jsx(Ei,{activePage:"LOGINS",activeSubPage:"Statut Logins",children:a.jsxs("div",{className:"statutLoginsPage",children:[a.jsxs("div",{className:"pageHeader",children:[a.jsx("h1",{className:"pageTitle",children:"Guest Logins"}),a.jsx("p",{className:"pageSubtitle",children:"All currently logged in users are listed."})]}),a.jsxs("div",{className:"displayInfo",children:["Displaying ",T.length," logins."]}),a.jsxs("div",{className:"statsBar",children:[a.jsxs("div",{className:"statItem",children:[a.jsx("span",{className:"statLabel",children:"TotalGuest:"}),a.jsx("span",{className:"statValue",children:E.total})]}),a.jsxs("div",{className:"statItem",children:[a.jsx("span",{className:"statLabel",children:"TotalOnline:"}),a.jsx("span",{className:"statValue online",children:E.online})]}),a.jsxs("div",{className:"statItem",children:[a.jsx("span",{className:"statLabel",children:"Total Offline:"}),a.jsx("span",{className:"statValue offline",children:E.offline})]}),a.jsxs("div",{className:"statItem",children:[a.jsx("span",{className:"statLabel",children:"Total Away:"}),a.jsx("span",{className:"statValue away",children:E.away})]})]}),a.jsxs("div",{className:"actionsBar",children:[e&&a.jsxs("select",{className:"filterSelect",value:f,onChange:b=>p(b.target.value),children:[a.jsx("option",{value:bn,children:"Tous les hôtels"}),u.map(b=>a.jsx("option",{value:b.id,children:b.name},b.id))]}),a.jsx("input",{type:"text",className:"searchInput",placeholder:"Search by room, name, IP/MAC, type...",value:t,onChange:b=>r(b.target.value)}),a.jsx("button",{className:"btn btnDanger",onClick:w,disabled:o.length===0,children:"Remove Selected"})]}),a.jsx("div",{className:"tableWrapper",children:a.jsxs("table",{className:"loginsTable",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{style:{width:"40px"},children:a.jsx("input",{type:"checkbox",checked:o.length===T.length&&T.length>0,onChange:_})}),a.jsx("th",{children:"Room"}),a.jsx("th",{children:"Name"}),a.jsx("th",{children:"Status"}),a.jsx("th",{children:"Type"}),a.jsx("th",{children:"IP/MAC"}),a.jsx("th",{children:"Duration"}),a.jsx("th",{children:"Start/End"}),a.jsx("th",{children:"Utilization(Down/Up)"}),a.jsx("th",{children:"Options"})]})}),a.jsx("tbody",{children:T.map(b=>a.jsxs("tr",{className:o.includes(b.id)?"selected":"",children:[a.jsx("td",{children:a.jsx("input",{type:"checkbox",checked:o.includes(b.id),onChange:()=>S(b.id)})}),a.jsx("td",{className:"roomCell",children:b.room}),a.jsx("td",{children:b.name}),a.jsx("td",{children:a.jsx("span",{className:`statusBadge ${b.status.toLowerCase()}`,children:b.status})}),a.jsx("td",{className:"typeCell",children:b.type}),a.jsx("td",{className:"macCell",children:b.ipmac}),a.jsx("td",{children:b.duration}),a.jsxs("td",{className:"dateCell",children:[a.jsxs("div",{children:["Start: ",b.start]}),a.jsxs("div",{children:["End: ",b.end]})]}),a.jsxs("td",{className:"utilizationCell",children:[a.jsxs("div",{children:["Cap: ",b.capDown," / ",b.capUp," Kb/s"]}),a.jsxs("div",{children:["Current: ",b.currentDown," / ",b.currentUp," Kb/s"]}),a.jsxs("div",{children:["Usage: ",b.usageDown," / ",b.usageUp," MB"]})]}),a.jsx("td",{className:"optionsCell",children:a.jsx("a",{href:"#",className:"optionLink",children:"Remove"})})]},b.id))})]})})]})})}function gx(i){if(!i)return"";const e=new Date(i),t=r=>String(r).padStart(2,"0");return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}T${t(e.getHours())}:${t(e.getMinutes())}`}function th(i){return i?new Date(i).toLocaleString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}):"—"}function sf(i,e){if(!i||!e)return"—";const t=new Date(e).getTime()-new Date(i).getTime();if(t<=0)return"—";const r=Math.floor(t/(1e3*60*60*24)),o=Math.floor(t%(1e3*60*60*24)/(1e3*60*60));return r===0?`${o}h`:o>0?`${r}j ${o}h`:`${r} jour${r>1?"s":""}`}function LM(i,e){if(!i||!e)return{label:"—",css:""};const t=Date.now(),r=new Date(i).getTime(),o=new Date(e).getTime();return t<r?{label:"À venir",css:"PENDING"}:t>o?{label:"Expiré",css:"EXPIRED"}:{label:"Accès actif",css:"ACTIVE"}}function xx(){return new Date().toISOString().slice(0,16)}function IM({session:i,rooms:e,onClose:t,onSave:r}){var b;const[o,c]=D.useState(i.clientName||""),[u,h]=D.useState(((b=i.room)==null?void 0:b.id)||""),[f,p]=D.useState(gx(i.startedAt)),[v,g]=D.useState(gx(i.endedAt)),[x,y]=D.useState(!1),[E,T]=D.useState(""),S=e.filter(N=>N.hotelId===i.hotelId),_=sf(f,v),w=async()=>{if(!o.trim()){T("Le nom est requis");return}if(!f){T("Date d'entrée requise");return}if(!v){T("Date de sortie requise");return}if(new Date(v)<=new Date(f)){T("La date de sortie doit être après la date d'entrée");return}y(!0),T("");try{await r(i.id,{clientName:o.trim(),roomId:u||void 0,startedAt:new Date(f).toISOString(),endedAt:new Date(v).toISOString()}),t()}catch(N){T(N.message||"Erreur lors de la modification")}finally{y(!1)}};return a.jsx("div",{className:"mlOverlay",onClick:t,children:a.jsxs("div",{className:"mlModal",onClick:N=>N.stopPropagation(),children:[a.jsxs("div",{className:"mlModalHeader",children:[a.jsx("h3",{className:"mlModalTitle",children:"Modifier le check-in"}),a.jsx("button",{className:"mlModalClose",onClick:t,children:"✕"})]}),a.jsxs("div",{className:"mlModalBody",children:[E&&a.jsx("div",{className:"mlErrorBox",children:E}),a.jsxs("div",{className:"mlModalField",children:[a.jsxs("label",{children:["Nom du client ",a.jsx("span",{className:"required",children:"*"})]}),a.jsx("input",{type:"text",className:"mlInput",value:o,onChange:N=>c(N.target.value),disabled:x})]}),a.jsxs("div",{className:"mlModalField",children:[a.jsx("label",{children:"Numéro de chambre"}),a.jsxs("select",{className:"mlSelectModal",value:u,onChange:N=>h(N.target.value),disabled:x,children:[a.jsx("option",{value:"",children:"— Sélectionner —"}),S.map(N=>a.jsxs("option",{value:N.id,children:[N.name||N.type,N.floor!=null?` (Étage ${N.floor})`:""]},N.id))]})]}),a.jsxs("div",{className:"mlModalGrid",children:[a.jsxs("div",{className:"mlModalField",children:[a.jsxs("label",{children:["Date d'entrée ",a.jsx("span",{className:"required",children:"*"})]}),a.jsx("input",{type:"datetime-local",className:"mlInput",value:f,onChange:N=>p(N.target.value),disabled:x})]}),a.jsxs("div",{className:"mlModalField",children:[a.jsxs("label",{children:["Date de sortie ",a.jsx("span",{className:"required",children:"*"})]}),a.jsx("input",{type:"datetime-local",className:"mlInput",value:v,min:f||void 0,onChange:N=>g(N.target.value),disabled:x})]})]}),_!=="—"&&a.jsxs("div",{className:"mlDurationBadge",children:["Durée du séjour : ",_]})]}),a.jsxs("div",{className:"mlModalFooter",children:[a.jsx("button",{className:"mlBtn mlBtnSecondary",onClick:t,disabled:x,children:"Annuler"}),a.jsx("button",{className:"mlBtn mlBtnPrimary",onClick:w,disabled:x,children:x?"Enregistrement…":"Sauvegarder"})]})]})})}function DM(){const i=Wn.getStoredUser(),e=(i==null?void 0:i.role)==="RECEPTIONIST",t=Cs(i),[r,o]=D.useState([]),[c,u]=D.useState([]),[h,f]=D.useState([]),[p,v]=D.useState(!1),[g,x]=D.useState(""),[y,E]=D.useState(""),[T,S]=D.useState(""),[_,w]=D.useState(""),[b,N]=D.useState(""),[I,L]=D.useState(""),[B,C]=D.useState(""),[O,Y]=D.useState(""),[V,Q]=D.useState(null),G=async q=>{const me=Zi(q),fe=me?{hotelId:me}:void 0,[xe,Ce]=await Promise.all([We.listRooms(fe),We.listLoginSessions(fe)]);u(xe),f(Ce)};D.useEffect(()=>{We.listHotels().then(async q=>{o(q);const me=or(i,q);x(me),await G(me)}).catch(q=>alert(q.message||"Chargement impossible"))},[]),D.useEffect(()=>{g&&(G(g).catch(q=>alert(q.message||"Chargement impossible")),S(""),w(""))},[g]);const ee=D.useMemo(()=>c.filter(q=>q.hotelId===g),[c,g]),F=q=>{S(q);const me=ee.find(fe=>[fe.name,fe.type].filter(Boolean).some(xe=>String(xe).toLowerCase()===q.trim().toLowerCase()));w(me?me.id:"")},U=q=>{w(q);const me=ee.find(fe=>fe.id===q);me&&S(me.name||me.type||"")},W=!!_,$=!!T.trim(),X=D.useMemo(()=>sf(b,I),[b,I]),te=async()=>{var q;if(!Na(g)){alert("Sélectionnez d'abord un hôtel précis");return}if(!y.trim()){alert("Le nom du client est requis");return}if(!$){alert("Saisissez un numéro de chambre");return}if(!b){alert("La date d'entrée est requise");return}if(!I){alert("La date de sortie est requise");return}if(new Date(I)<=new Date(b)){alert("La date de sortie doit être après la date d'entrée");return}v(!0);try{const me=await We.createManualLogin({hotelId:g,roomId:_||void 0,roomNumber:T.trim(),clientName:y.trim(),startedAt:new Date(b).toISOString(),endedAt:new Date(I).toISOString()});C(((q=me.guestPass)==null?void 0:q.code)||"");const fe=Zi(g),xe=await We.listLoginSessions(fe?{hotelId:fe}:void 0);f(xe),E(""),S(""),w(""),N(""),L("")}catch(me){alert(me.message||"Échec du check-in")}finally{v(!1)}},z=()=>{E(""),S(""),w(""),N(""),L(""),C("")},se=async(q,me)=>{await We.updateLoginSession(q,me);const fe=Zi(g),xe=await We.listLoginSessions(fe?{hotelId:fe}:void 0);f(xe)},Pe=async q=>{if(confirm("Supprimer ce check-in ?"))try{await We.deleteLoginSessions([q]),f(me=>me.filter(fe=>fe.id!==q))}catch(me){alert(me.message||"Suppression impossible")}},be=D.useMemo(()=>{const q=O.trim().toLowerCase(),me=h.filter(fe=>{const xe=fe.type==="Manual Login",Ce=g===bn||fe.hotelId===g;return xe&&Ce});return q?me.filter(fe=>{var xe,Ce;return[fe.clientName,(xe=fe.room)==null?void 0:xe.name,(Ce=fe.room)==null?void 0:Ce.type,fe.ipAddress,fe.macAddress].some(He=>String(He||"").toLowerCase().includes(q))}):me},[h,O]),Ne=Na(g);return a.jsxs(Ei,{activePage:"LOGINS",activeSubPage:"Manual Login",children:[a.jsxs("div",{className:"mlPage",children:[a.jsxs("div",{className:"mlHeader",children:[a.jsx("h1",{className:"mlTitle",children:"Manual Login"}),a.jsx("p",{className:"mlSubtitle",children:"Enregistrez un client en précisant son nom, son numéro de chambre et ses dates de séjour. L'accès internet sera actif uniquement pendant la période définie."})]}),a.jsxs("div",{className:"mlCard",children:[a.jsxs("div",{className:"mlCardHeader",children:[a.jsx("h2",{className:"mlSectionTitle",children:"Nouveau check-in client"}),t&&a.jsxs("select",{className:"mlSelectModal",value:g,onChange:q=>x(q.target.value),children:[a.jsx("option",{value:bn,children:"Tous les hôtels"}),r.map(q=>a.jsx("option",{value:q.id,children:q.name},q.id))]})]}),a.jsxs("div",{className:"mlCardBody",children:[g===bn&&a.jsx("div",{className:"mlErrorBox",children:"Vue globale active : sélectionnez un hôtel précis pour enregistrer un check-in."}),a.jsxs("div",{className:"mlFormGrid",children:[a.jsxs("div",{className:"mlField",children:[a.jsxs("label",{htmlFor:"clientName",children:["Nom du client ",a.jsx("span",{className:"required",children:"*"})]}),a.jsx("p",{className:"mlFieldHelp",children:"Prénom et nom tel qu'indiqué sur la réservation."}),a.jsx("input",{id:"clientName",type:"text",className:"mlInput",placeholder:"Ex : Felix TANZI",value:y,onChange:q=>E(q.target.value),disabled:p||!Ne})]}),a.jsxs("div",{className:"mlField",children:[a.jsxs("label",{htmlFor:"roomText",children:["Numéro de chambre ",a.jsx("span",{className:"required",children:"*"})]}),a.jsx("p",{className:"mlFieldHelp",children:"Tapez le numéro directement, ou sélectionnez dans la liste."}),a.jsxs("div",{className:"mlRoomInputWrapper",children:[a.jsx("input",{id:"roomText",type:"text",list:"roomSuggestions",className:`mlInput ${$?"mlInputValid":""}`,placeholder:"Ex : 101",value:T,onChange:q=>F(q.target.value),disabled:p||!Ne,autoComplete:"off"}),T&&!W&&a.jsx("span",{className:"mlInputHint mlInputHintOk",children:"Nouvelle chambre: elle sera créée automatiquement"}),W&&a.jsx("span",{className:"mlInputHint mlInputHintOk",children:"✓ Chambre trouvée"}),a.jsx("datalist",{id:"roomSuggestions",children:ee.map(q=>a.jsx("option",{value:q.name||q.type,children:q.type},q.id))})]}),a.jsxs("select",{className:"mlSelect",value:_,onChange:q=>U(q.target.value),disabled:p||!Ne,children:[a.jsx("option",{value:"",children:"— Parcourir les chambres —"}),ee.map(q=>a.jsxs("option",{value:q.id,children:[q.name||q.type,q.type&&q.name?` — ${q.type}`:"",q.floor!=null?` (Étage ${q.floor})`:""]},q.id))]})]}),a.jsxs("div",{className:"mlField",children:[a.jsxs("label",{htmlFor:"checkIn",children:["Date & heure d'entrée ",a.jsx("span",{className:"required",children:"*"})]}),a.jsx("p",{className:"mlFieldHelp",children:"Début d'accès à internet pour ce client."}),a.jsx("input",{id:"checkIn",type:"datetime-local",className:"mlInput",value:b,min:xx(),onChange:q=>N(q.target.value),disabled:p||!Ne})]}),a.jsxs("div",{className:"mlField",children:[a.jsxs("label",{htmlFor:"checkOut",children:["Date & heure de sortie ",a.jsx("span",{className:"required",children:"*"})]}),a.jsx("p",{className:"mlFieldHelp",children:"Fin d'accès à internet pour ce client."}),a.jsx("input",{id:"checkOut",type:"datetime-local",className:"mlInput",value:I,min:b||xx(),onChange:q=>L(q.target.value),disabled:p||!Ne}),X!=="—"&&a.jsxs("span",{className:"mlDurationBadge",children:["Durée du séjour : ",X]})]})]}),a.jsxs("div",{className:"mlActions",children:[a.jsx("button",{className:"mlBtn mlBtnSecondary",onClick:z,disabled:p,children:"Annuler"}),a.jsx("button",{className:"mlBtn mlBtnPrimary",onClick:te,disabled:p||!Ne||!y.trim()||!$||!b||!I,children:p?"Enregistrement…":"Valider le check-in"})]}),B&&a.jsxs("div",{className:"mlDurationBadge",children:["Code Wi-Fi à remettre au client : ",a.jsx("strong",{children:B})]})]})]}),a.jsxs("div",{className:"mlTableCard",children:[a.jsxs("div",{className:"mlTableHeader",children:[a.jsxs("div",{children:[a.jsx("h2",{className:"mlSectionTitle",children:"Check-ins enregistrés"}),a.jsxs("p",{className:"mlTableCount",children:[be.length," client",be.length!==1?"s":""," affiché",be.length!==1?"s":""]})]}),a.jsx("input",{type:"text",className:"mlSearch",placeholder:"Rechercher un client, une chambre, une IP…",value:O,onChange:q=>Y(q.target.value)})]}),a.jsx("div",{className:"mlTableWrapper",children:a.jsxs("table",{className:"mlTable",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Client"}),a.jsx("th",{children:"N° Chambre"}),a.jsx("th",{children:"Type"}),a.jsx("th",{children:"Accès"}),a.jsx("th",{children:"Code Wi-Fi"}),a.jsx("th",{children:"Entrée"}),a.jsx("th",{children:"Sortie"}),a.jsx("th",{children:"Durée"}),a.jsx("th",{children:"IP / MAC"}),a.jsx("th",{children:"Créé le"}),a.jsx("th",{children:"Actions"})]})}),a.jsx("tbody",{children:be.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:11,className:"mlEmptyRow",children:"Aucun check-in enregistré pour le moment."})}):be.map(q=>{var fe,xe,Ce;const me=LM(q.startedAt,q.endedAt);return a.jsxs("tr",{children:[a.jsx("td",{className:"mlCellBold",children:q.clientName||"—"}),a.jsx("td",{children:((fe=q.room)==null?void 0:fe.name)||"—"}),a.jsx("td",{children:((xe=q.room)==null?void 0:xe.type)||"—"}),a.jsx("td",{children:me.css?a.jsx("span",{className:`mlBadge mlBadge${me.css}`,children:me.label}):"—"}),a.jsx("td",{className:"mlCellMono",children:((Ce=q.guestPass)==null?void 0:Ce.code)||"—"}),a.jsx("td",{className:"mlCellDate",children:th(q.startedAt)}),a.jsx("td",{className:"mlCellDate",children:th(q.endedAt)}),a.jsx("td",{className:"mlCellDuration",children:sf(q.startedAt,q.endedAt)}),a.jsxs("td",{className:"mlCellMono",children:[q.ipAddress&&a.jsx("span",{className:"mlIpLine",children:q.ipAddress}),q.macAddress&&a.jsx("span",{className:"mlMacLine",children:q.macAddress}),!q.ipAddress&&!q.macAddress&&"—"]}),a.jsx("td",{className:"mlCellDate",children:th(q.createdAt)}),a.jsx("td",{children:a.jsxs("div",{className:"mlActionBtns",children:[a.jsx("button",{className:"mlActionBtn mlActionBtnEdit",title:"Modifier",onClick:()=>Q(q),children:"✏️"}),!e&&a.jsx("button",{className:"mlActionBtn mlActionBtnDelete",title:"Supprimer",onClick:()=>Pe(q.id),children:"🗑️"})]})})]},q.id)})})]})})]})]}),V&&a.jsx(IM,{session:V,rooms:c,onClose:()=>Q(null),onSave:se})]})}function jM(){const[i]=D.useState([]),[e]=D.useState([]),[t]=D.useState([{id:9,name:"Hilton Free Websites",type:"whitelist",hostnames:["hilton.com","hiltonapi.com"]},{id:13,name:"Global",type:"blacklist",hostnames:["www.guestek.com"]}]),r=()=>{console.log("Add Free Website")},o=()=>{console.log("Add Blacklisted Website")};return a.jsx(Ei,{activePage:"LOGINS",activeSubPage:"Web Site Manager",children:a.jsxs("div",{className:"websitesManagerPage",children:[a.jsxs("div",{className:"pageHeader",children:[a.jsx("h1",{className:"pageTitle",children:"Websites Manager"}),a.jsx("p",{className:"pageSubtitle",children:"Add, modify and remove free websites and blacklisted websites."})]}),a.jsxs("section",{className:"websiteSection",children:[a.jsxs("div",{className:"sectionHeader",children:[a.jsx("h2",{className:"sectionTitle",children:"Free Websites"}),a.jsx("button",{className:"btn btnPrimary",onClick:r,children:"Add Free Website"})]}),a.jsx("div",{className:"tableWrapper",children:a.jsxs("table",{className:"websiteTable",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Name"}),a.jsx("th",{children:"Hostname"}),a.jsx("th",{children:"URL"}),a.jsx("th",{children:"Display"}),a.jsx("th",{children:"Order"}),a.jsx("th",{children:"Comments"}),a.jsx("th",{children:"Options"})]})}),a.jsx("tbody",{children:i.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:"7",className:"emptyState",children:'No free websites configured. Click "Add Free Website" to get started.'})}):i.map(c=>a.jsxs("tr",{children:[a.jsx("td",{children:c.name}),a.jsx("td",{children:c.hostname}),a.jsx("td",{children:c.url}),a.jsx("td",{children:c.display}),a.jsx("td",{children:c.order}),a.jsx("td",{children:c.comments}),a.jsxs("td",{className:"optionsCell",children:[a.jsx("button",{className:"optionBtn",children:"Edit"}),a.jsx("button",{className:"optionBtn danger",children:"Delete"})]})]},c.id))})]})})]}),a.jsxs("section",{className:"websiteSection",children:[a.jsxs("div",{className:"sectionHeader",children:[a.jsx("h2",{className:"sectionTitle",children:"Blacklisted Websites"}),a.jsx("button",{className:"btn btnDanger",onClick:o,children:"Add Blacklisted Website"})]}),a.jsx("div",{className:"tableWrapper",children:a.jsxs("table",{className:"websiteTable",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Name"}),a.jsx("th",{children:"Hostname"}),a.jsx("th",{children:"Comments"}),a.jsx("th",{children:"Options"})]})}),a.jsx("tbody",{children:e.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:"4",className:"emptyState",children:"No blacklisted websites configured."})}):e.map(c=>a.jsxs("tr",{children:[a.jsx("td",{children:c.name}),a.jsx("td",{children:c.hostname}),a.jsx("td",{children:c.comments}),a.jsxs("td",{className:"optionsCell",children:[a.jsx("button",{className:"optionBtn",children:"Edit"}),a.jsx("button",{className:"optionBtn danger",children:"Delete"})]})]},c.id))})]})})]}),a.jsxs("section",{className:"globalRulesSection",children:[a.jsxs("div",{className:"rulesHeader",children:[a.jsx("h2",{className:"sectionTitle",children:"Global Rules"}),a.jsxs("p",{className:"rulesDescription",children:["Websites whitelisted ",a.jsx("span",{className:"green",children:"(green)"})," and blacklisted"," ",a.jsx("span",{className:"red",children:"(red)"})," for this client through Global Website Manager."]})]}),a.jsxs("div",{className:"rulesGrid",children:[a.jsxs("div",{className:"rulesColumn",children:[a.jsx("h3",{className:"columnTitle",children:"Website List"}),a.jsx("div",{className:"rulesList",children:t.map(c=>a.jsxs("div",{className:`ruleItem ${c.type==="whitelist"?"whitelist":"blacklist"}`,children:["List ID: ",c.id,", List Name: ",c.name]},c.id))})]}),a.jsxs("div",{className:"rulesColumn",children:[a.jsx("h3",{className:"columnTitle",children:"Hostname"}),a.jsx("div",{className:"rulesList",children:t.map(c=>a.jsx("div",{className:"hostnamesList",children:c.hostnames.map((u,h)=>a.jsx("div",{className:`hostnameItem ${c.type==="whitelist"?"whitelist":"blacklist"}`,children:u.startsWith("*")?u:`* ${u}`},h))},c.id))})]})]})]})]})})}function UM(){const[i,e]=D.useState([]),[t,r]=D.useState(""),[o,c]=D.useState({uploadClearAddress:1500,downloadClearAddress:1500,uploadGuestPass:1500,downloadGuestPass:1500,maxPassDuration:180,maxCountPass:600,outageModeEnabled:!1}),[u,h]=D.useState(!1);D.useEffect(()=>{We.listHotels().then(async g=>{var E;e(g);const x=((E=g[0])==null?void 0:E.id)||"";if(r(x),!x)return;const y=await We.getGuestConfig(x);c({uploadClearAddress:y.uploadClearAddressKbps,downloadClearAddress:y.downloadClearAddressKbps,uploadGuestPass:y.uploadGuestPassKbps,downloadGuestPass:y.downloadGuestPassKbps,maxPassDuration:y.maxPassDurationDays,maxCountPass:y.maxCountPass,outageModeEnabled:y.outageModeEnabled})}).catch(g=>alert(g.message||"Impossible de charger la configuration"))},[]);const f=(g,x)=>{c(y=>({...y,[g]:x})),h(!0)},p=async()=>{if(!t){alert("Sélectionnez un hôtel");return}try{await We.upsertGuestConfig({hotelId:t,uploadClearAddressKbps:Number(o.uploadClearAddress),downloadClearAddressKbps:Number(o.downloadClearAddress),uploadGuestPassKbps:Number(o.uploadGuestPass),downloadGuestPassKbps:Number(o.downloadGuestPass),maxPassDurationDays:Number(o.maxPassDuration),maxCountPass:Number(o.maxCountPass),outageModeEnabled:!!o.outageModeEnabled}),alert("Configuration updated successfully!"),h(!1)}catch(g){alert(g.message||"Failed to update configuration")}},v=()=>{confirm("Are you sure you want to restore default settings?")&&(c({uploadClearAddress:1500,downloadClearAddress:1500,uploadGuestPass:1500,downloadGuestPass:1500,maxPassDuration:180,maxCountPass:600,outageModeEnabled:!1}),h(!0))};return a.jsx(Ei,{activePage:"LOGINS",activeSubPage:"Config Code",children:a.jsxs("div",{className:"configCodePage",children:[a.jsxs("div",{className:"pageHeader",children:[a.jsx("h1",{className:"pageTitle",children:"Guest Global Configuration"}),a.jsx("p",{className:"pageSubtitle",children:"General guest configuration settings for the OVI client."})]}),a.jsxs("div",{className:"warningBanner",children:[a.jsx("strong",{children:"⚠️ Important:"})," Maximum value for Max Count Guest Pass Creation is 1000."]}),a.jsxs("div",{className:"configCard",children:[a.jsxs("div",{className:"configSection",children:[a.jsx("h3",{className:"sectionTitle",children:"Hotel Selection"}),a.jsxs("div",{className:"configField",children:[a.jsx("label",{htmlFor:"hotelId",children:"Hotel"}),a.jsxs("select",{id:"hotelId",value:t,onChange:async g=>{const x=g.target.value;if(r(x),!!x)try{const y=await We.getGuestConfig(x);c({uploadClearAddress:y.uploadClearAddressKbps,downloadClearAddress:y.downloadClearAddressKbps,uploadGuestPass:y.uploadGuestPassKbps,downloadGuestPass:y.downloadGuestPassKbps,maxPassDuration:y.maxPassDurationDays,maxCountPass:y.maxCountPass,outageModeEnabled:y.outageModeEnabled}),h(!1)}catch(y){alert(y.message||"Impossible de charger la configuration")}},children:[a.jsx("option",{value:"",children:"Select hotel"}),i.map(g=>a.jsx("option",{value:g.id,children:g.name},g.id))]})]})]}),a.jsxs("div",{className:"configSection",children:[a.jsx("h3",{className:"sectionTitle",children:"General Info"}),a.jsxs("div",{className:"configGrid",children:[a.jsxs("div",{className:"configField",children:[a.jsx("label",{htmlFor:"uploadClearAddress",children:"guestConfig.defaultUploadClearAddress"}),a.jsx("p",{className:"fieldDescription",children:"Clear Address Upload Default"}),a.jsx("input",{id:"uploadClearAddress",type:"number",value:o.uploadClearAddress,onChange:g=>f("uploadClearAddress",Number(g.target.value)),min:"0",max:"15000"})]}),a.jsxs("div",{className:"configField",children:[a.jsx("label",{htmlFor:"downloadClearAddress",children:"guestConfig.defaultDownloadClearAddress"}),a.jsx("p",{className:"fieldDescription",children:"Clear Address Download Default"}),a.jsx("input",{id:"downloadClearAddress",type:"number",value:o.downloadClearAddress,onChange:g=>f("downloadClearAddress",Number(g.target.value)),min:"0",max:"15000"})]}),a.jsxs("div",{className:"configField",children:[a.jsx("label",{htmlFor:"uploadGuestPass",children:"guestConfig.defaultUploadGuestPass"}),a.jsx("p",{className:"fieldDescription",children:"Guest Pass Upload Default"}),a.jsx("input",{id:"uploadGuestPass",type:"number",value:o.uploadGuestPass,onChange:g=>f("uploadGuestPass",Number(g.target.value)),min:"0",max:"15000"})]}),a.jsxs("div",{className:"configField",children:[a.jsx("label",{htmlFor:"downloadGuestPass",children:"guestConfig.defaultDownloadGuestPass"}),a.jsx("p",{className:"fieldDescription",children:"Guest Pass Download Default"}),a.jsx("input",{id:"downloadGuestPass",type:"number",value:o.downloadGuestPass,onChange:g=>f("downloadGuestPass",Number(g.target.value)),min:"0",max:"15000"})]}),a.jsxs("div",{className:"configField",children:[a.jsx("label",{htmlFor:"maxPassDuration",children:"guestConfig.maxPassDuration"}),a.jsx("p",{className:"fieldDescription",children:"Maximum passcode duration in days (max 1,365 days)"}),a.jsx("input",{id:"maxPassDuration",type:"number",value:o.maxPassDuration,onChange:g=>f("maxPassDuration",Number(g.target.value)),min:"1",max:"1365"})]}),a.jsxs("div",{className:"configField",children:[a.jsx("label",{htmlFor:"maxCountPass",children:"guestConfig.maxCountPass"}),a.jsx("p",{className:"fieldDescription",children:"Max Count Passcode Creation"}),a.jsx("input",{id:"maxCountPass",type:"number",value:o.maxCountPass,onChange:g=>f("maxCountPass",Number(g.target.value)),min:"1",max:"1000"})]}),a.jsxs("div",{className:"configField radioField",children:[a.jsx("label",{children:"servletConfig.outageModeEnabled"}),a.jsx("p",{className:"fieldDescription",children:"Activate outage mode for 3rd Party Login Pages (MPA, Elevance, Generic API)"}),a.jsxs("div",{className:"radioGroup",children:[a.jsxs("label",{className:"radioLabel",children:[a.jsx("input",{type:"radio",name:"outageMode",checked:o.outageModeEnabled===!0,onChange:()=>f("outageModeEnabled",!0)}),a.jsx("span",{children:"True"})]}),a.jsxs("label",{className:"radioLabel",children:[a.jsx("input",{type:"radio",name:"outageMode",checked:o.outageModeEnabled===!1,onChange:()=>f("outageModeEnabled",!1)}),a.jsx("span",{children:"False"})]})]})]})]})]}),a.jsxs("div",{className:"configActions",children:[a.jsx("button",{className:"btn btnPrimary",onClick:p,disabled:!u,children:"Modify"}),a.jsx("button",{className:"btn btnSecondary",onClick:v,children:"Restore Defaults"})]})]})]})})}function FM(i){return new Promise((e,t)=>{const r=new FileReader;r.onload=()=>e(String(r.result||"")),r.onerror=()=>t(r.error),r.readAsDataURL(i)})}function OM({isOpen:i,onClose:e,onSave:t,room:r,hotels:o}){const c=['Smart TV 55"','Smart TV 50"',"TV connectée","Mini-bar","Bureau","Coffre-fort","Machine à café","Jacuzzi","Balcon","Vue mer","Vue ville"],[u,h]=D.useState({hotelId:"",type:"",name:"",capacity:2,floor:1,surface:25,description:"",equipments:[],customEquipment:"",photos:[]});D.useEffect(()=>{h(r?{hotelId:r.hotelId||"",type:r.type||"",name:r.name||"",capacity:r.capacity||2,floor:r.floor||1,surface:r.surface||25,description:r.description||"",equipments:r.equipments||[],customEquipment:"",photos:r.photos||[]}:{hotelId:o.length>0?o[0].id:"",type:"",name:"",capacity:2,floor:1,surface:25,description:"",equipments:[],customEquipment:"",photos:[]})},[r,o]);const f=(_,w)=>{h(b=>({...b,[_]:w}))},p=_=>{h(w=>({...w,equipments:w.equipments.includes(_)?w.equipments.filter(b=>b!==_):[...w.equipments,_]}))},v=()=>{u.customEquipment.trim()&&h(_=>({..._,equipments:[..._.equipments,u.customEquipment.trim()],customEquipment:""}))},g=_=>{h(w=>({...w,equipments:w.equipments.filter(b=>b!==_)}))},x=_=>{const N=Array.from(_.target.files??[]).filter(I=>{const L=["image/jpeg","image/png","image/jpg"].includes(I.type),B=I.size<=5*1024*1024;return L&&B}).map(I=>({file:I,url:URL.createObjectURL(I),preview:URL.createObjectURL(I),name:I.name,isMain:u.photos.length===0}));h(I=>({...I,photos:[...I.photos,...N]}))},y=_=>{const w=u.photos[_];h(b=>{const N=b.photos.filter((I,L)=>L!==_);return w.isMain&&N.length>0&&(N[0].isMain=!0),{...b,photos:N}})},E=_=>{h(w=>({...w,photos:w.photos.map((b,N)=>({...b,isMain:N===_}))}))},T=async()=>{if(!u.hotelId||!u.type||!u.name||!u.description){alert("Veuillez remplir tous les champs requis (Hôtel, Type, Numéro, Description)");return}const _=await Promise.all((u.photos||[]).map(async w=>({url:w.file instanceof File?await FM(w.file):w.url,name:w.name,isMain:!!w.isMain})));t({...u,photos:_})};if(!i)return null;const S=r&&!r.id;return a.jsx("div",{className:"modalOverlay",onClick:e,children:a.jsxs("div",{className:"modalContent roomModal",onClick:_=>_.stopPropagation(),children:[a.jsxs("div",{className:"modalHeader",children:[a.jsx("button",{className:"backBtn",onClick:e,children:"← RETOUR"}),a.jsxs("div",{className:"modalTitle",children:[a.jsx("h2",{children:S?"Dupliquer la Chambre":r?"Modifier la Chambre":"Ajouter une Chambre"}),a.jsx("p",{children:"Configurez le type de chambre et ses équipements pour cet hôtel client."})]})]}),a.jsxs("div",{className:"modalBody",children:[a.jsxs("section",{className:"formSection",children:[a.jsx("h3",{className:"sectionTitle",children:"📋 Informations Générales"}),a.jsxs("div",{className:"formRow",children:[a.jsxs("div",{className:"formLabel",children:[a.jsx("label",{children:"Hôtel *"}),a.jsx("p",{className:"labelHelp",children:"Sélectionnez l'hôtel client"})]}),a.jsxs("select",{value:u.hotelId,onChange:_=>f("hotelId",_.target.value),required:!0,children:[a.jsx("option",{value:"",children:"-- Sélectionner un hôtel --"}),o.map(_=>a.jsx("option",{value:_.id,children:_.name},_.id))]})]}),a.jsxs("div",{className:"formRow",children:[a.jsxs("div",{className:"formLabel",children:[a.jsx("label",{children:"Type de Chambre *"}),a.jsx("p",{className:"labelHelp",children:"Ex: Suite Présidentielle, Chambre Standard, Suite Deluxe"})]}),a.jsx("input",{type:"text",value:u.type,onChange:_=>f("type",_.target.value),placeholder:"Ex: Suite Présidentielle",required:!0})]}),a.jsxs("div",{className:"formRow",children:[a.jsxs("div",{className:"formLabel",children:[a.jsx("label",{children:"Numéro de chambre *"}),a.jsx("p",{className:"labelHelp",children:"Ex: 101, 204B, Suite 12. Ce numéro identifie la chambre dans l'hôtel."})]}),a.jsx("input",{type:"text",value:u.name,onChange:_=>f("name",_.target.value),placeholder:"Ex: 101",required:!0})]}),a.jsxs("div",{className:"formRow",children:[a.jsx("div",{className:"formLabel",children:a.jsx("label",{children:"Capacité (personnes) *"})}),a.jsx("input",{type:"number",value:u.capacity,onChange:_=>f("capacity",Number(_.target.value)),min:"1",max:"10"})]}),a.jsxs("div",{className:"formRow",children:[a.jsx("div",{className:"formLabel",children:a.jsx("label",{children:"Étage"})}),a.jsx("input",{type:"number",value:u.floor,onChange:_=>f("floor",Number(_.target.value)),min:"0",max:"50"})]}),a.jsxs("div",{className:"formRow",children:[a.jsx("div",{className:"formLabel",children:a.jsx("label",{children:"Superficie (m²)"})}),a.jsx("input",{type:"number",value:u.surface,onChange:_=>f("surface",Number(_.target.value)),min:"10",max:"500"})]}),a.jsxs("div",{className:"formRow",children:[a.jsxs("div",{className:"formLabel",children:[a.jsx("label",{children:"Description *"}),a.jsx("p",{className:"labelHelp",children:"Description détaillée de la chambre"})]}),a.jsx("textarea",{value:u.description,onChange:_=>f("description",_.target.value),placeholder:"Décrivez la chambre, ses particularités...",rows:"4",required:!0})]})]}),a.jsxs("section",{className:"formSection",children:[a.jsx("h3",{className:"sectionTitle",children:"🎯 Équipements"}),a.jsxs("div",{className:"formRow",children:[a.jsxs("div",{className:"formLabel",children:[a.jsx("label",{children:"Équipements Disponibles"}),a.jsx("p",{className:"labelHelp",children:"Sélectionnez depuis le catalogue"})]}),a.jsx("div",{className:"equipmentCheckboxes",children:c.map((_,w)=>a.jsxs("label",{className:"equipmentCheckbox",children:[a.jsx("input",{type:"checkbox",checked:u.equipments.includes(_),onChange:()=>p(_)}),a.jsx("span",{children:_})]},w))})]}),a.jsxs("div",{className:"formRow",children:[a.jsxs("div",{className:"formLabel",children:[a.jsx("label",{children:"Ajouter Équipement Personnalisé"}),a.jsx("p",{className:"labelHelp",children:"Ajoutez un équipement non listé"})]}),a.jsxs("div",{className:"customEquipmentInput",children:[a.jsx("input",{type:"text",value:u.customEquipment,onChange:_=>f("customEquipment",_.target.value),placeholder:"Ex: Cheminée, Piano, etc.",onKeyPress:_=>{_.key==="Enter"&&(_.preventDefault(),v())}}),a.jsx("button",{type:"button",className:"btn btnSecondary",onClick:v,children:"+ Ajouter"})]})]}),u.equipments.length>0&&a.jsxs("div",{className:"selectedEquipments",children:[a.jsx("p",{className:"selectedLabel",children:"Équipements sélectionnés :"}),a.jsx("div",{className:"equipmentsList",children:u.equipments.map((_,w)=>a.jsxs("div",{className:"selectedEquipmentItem",children:[a.jsx("span",{children:_}),a.jsx("button",{type:"button",className:"removeEquipmentBtn",onClick:()=>g(_),children:"✕"})]},w))})]})]}),a.jsxs("section",{className:"formSection",children:[a.jsx("h3",{className:"sectionTitle",children:"📸 Photos de la Chambre"}),a.jsxs("div",{className:"formRow",children:[a.jsxs("div",{className:"formLabel",children:[a.jsx("label",{children:"Ajouter des Photos"}),a.jsx("p",{className:"labelHelp",children:"Formats acceptés: JPEG, PNG. Taille max: 5MB par photo. Cliquez sur l'étoile pour définir la photo principale."})]}),a.jsxs("div",{className:"photoUploadSection",children:[a.jsx("label",{htmlFor:"room-photo-upload",className:"uploadBtn",children:"📸 Choisir des Photos"}),a.jsx("input",{id:"room-photo-upload",type:"file",accept:"image/jpeg,image/png,image/jpg",multiple:!0,onChange:x,style:{display:"none"}})]})]}),u.photos.length>0&&a.jsx("div",{className:"photosPreview",children:u.photos.map((_,w)=>a.jsxs("div",{className:"photoItem",children:[a.jsx("img",{src:_.preview||_.url,alt:`Photo ${w+1}`}),a.jsx("button",{type:"button",className:`mainPhotoStar ${_.isMain?"active":""}`,onClick:()=>E(w),title:_.isMain?"Photo principale":"Définir comme photo principale",children:"⭐"}),a.jsx("button",{type:"button",className:"removePhotoBtn",onClick:()=>y(w),children:"✕"}),a.jsx("p",{className:"photoName",children:_.name}),_.isMain&&a.jsx("span",{className:"mainLabel",children:"Principale"})]},w))})]})]}),a.jsxs("div",{className:"modalFooter",children:[a.jsx("button",{className:"btn btnPrimary",onClick:T,children:S?"Dupliquer la Chambre":r?"Sauvegarder les Modifications":"Ajouter la Chambre"}),a.jsx("button",{className:"btn btnSecondary",onClick:e,children:"Annuler"}),r&&r.id&&a.jsx("button",{className:"btn btnDanger",onClick:()=>{confirm("Supprimer cette chambre définitivement ?")&&e()},children:"Supprimer la Chambre"})]})]})})}function kM({isOpen:i,onClose:e,room:t}){const[r,o]=D.useState(0),[c,u]=D.useState(!1);if(!i||!t)return null;const h=t.photos||[],f=h[r],p=()=>{o(g=>(g+1)%h.length)},v=()=>{o(g=>(g-1+h.length)%h.length)};return a.jsxs("div",{className:"modalOverlay",onClick:e,children:[a.jsxs("div",{className:"modalContent detailsModal roomDetailsModal",onClick:g=>g.stopPropagation(),children:[a.jsxs("div",{className:"modalHeader",children:[a.jsx("button",{className:"backBtn",onClick:e,children:"← FERMER"}),a.jsxs("div",{className:"modalTitle",children:[a.jsx("h2",{children:t.type}),a.jsx("p",{children:"Détails complets de la chambre"})]}),a.jsxs("div",{className:"hotelBadge",children:["🏨 ",t.hotelName]})]}),a.jsxs("div",{className:"modalBody detailsBody",children:[h.length>0&&a.jsxs("section",{className:"photoGallerySection",children:[a.jsx("h3",{className:"sectionTitle",children:"📸 Galerie Photos"}),a.jsxs("div",{className:"mainPhotoContainer",children:[a.jsx("img",{src:(f==null?void 0:f.url)||"/api/placeholder/800/500",alt:t.type,className:`mainPhoto ${c?"zoomed":""}`,onClick:()=>u(!c),style:{cursor:"zoom-in"}}),h.length>1&&a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"photoNavBtn prevBtn",onClick:v,children:"‹"}),a.jsx("button",{className:"photoNavBtn nextBtn",onClick:p,children:"›"})]}),(f==null?void 0:f.isMain)&&a.jsx("div",{className:"mainPhotoBadge",children:"⭐ Photo Principale"}),a.jsxs("div",{className:"photoCounter",children:[r+1," / ",h.length]})]}),a.jsx("div",{className:"thumbnailsStrip",children:h.map((g,x)=>a.jsxs("div",{className:`thumbnail ${x===r?"active":""}`,onClick:()=>o(x),children:[a.jsx("img",{src:g.url,alt:`Photo ${x+1}`}),g.isMain&&a.jsx("span",{className:"starBadge",children:"⭐"})]},x))})]}),a.jsxs("div",{className:"detailsGrid",children:[a.jsxs("section",{className:"infoSection",children:[a.jsx("h3",{className:"sectionTitle",children:"ℹ️ Informations Générales"}),a.jsxs("div",{className:"infoGrid",children:[a.jsxs("div",{className:"infoItem",children:[a.jsx("span",{className:"infoLabel",children:"Type de Chambre"}),a.jsx("span",{className:"infoValue",children:t.type})]}),a.jsxs("div",{className:"infoItem",children:[a.jsx("span",{className:"infoLabel",children:"Hôtel"}),a.jsx("span",{className:"infoValue",children:t.hotelName})]}),a.jsxs("div",{className:"infoItem",children:[a.jsx("span",{className:"infoLabel",children:"Capacité"}),a.jsxs("span",{className:"infoValue",children:[t.capacity," personne",t.capacity>1?"s":""]})]}),a.jsxs("div",{className:"infoItem",children:[a.jsx("span",{className:"infoLabel",children:"Étage"}),a.jsx("span",{className:"infoValue",children:t.floor})]}),a.jsxs("div",{className:"infoItem",children:[a.jsx("span",{className:"infoLabel",children:"Superficie"}),a.jsxs("span",{className:"infoValue",children:[t.surface," m²"]})]}),a.jsxs("div",{className:"infoItem",children:[a.jsx("span",{className:"infoLabel",children:"Équipements"}),a.jsxs("span",{className:"infoValue",children:[t.equipments.length," équipement",t.equipments.length>1?"s":""]})]})]}),t.description&&a.jsx("div",{className:"descriptionBox",children:a.jsx("p",{children:t.description})})]}),a.jsxs("section",{className:"infoSection statsHighlight",children:[a.jsx("h3",{className:"sectionTitle",children:"📊 Caractéristiques"}),a.jsxs("div",{className:"characteristicsGrid",children:[a.jsxs("div",{className:"charCard",children:[a.jsx("div",{className:"charIcon",children:"👥"}),a.jsxs("div",{className:"charContent",children:[a.jsx("div",{className:"charNumber",children:t.capacity}),a.jsx("div",{className:"charText",children:"Personnes"})]})]}),a.jsxs("div",{className:"charCard",children:[a.jsx("div",{className:"charIcon",children:"🏢"}),a.jsxs("div",{className:"charContent",children:[a.jsx("div",{className:"charNumber",children:t.floor}),a.jsx("div",{className:"charText",children:"Étage"})]})]}),a.jsxs("div",{className:"charCard",children:[a.jsx("div",{className:"charIcon",children:"📐"}),a.jsxs("div",{className:"charContent",children:[a.jsx("div",{className:"charNumber",children:t.surface}),a.jsx("div",{className:"charText",children:"m²"})]})]})]})]})]}),t.equipments.length>0&&a.jsxs("section",{className:"amenitiesSection",children:[a.jsx("h3",{className:"sectionTitle",children:"🎯 Équipements Disponibles"}),a.jsx("div",{className:"equipmentsGrid",children:t.equipments.map((g,x)=>a.jsxs("div",{className:"equipmentCard",children:[a.jsx("span",{className:"equipmentIcon",children:"✨"}),a.jsx("span",{className:"equipmentName",children:g})]},x))})]}),a.jsxs("section",{className:"wifiConfigSection",children:[a.jsx("h3",{className:"sectionTitle",children:"📶 Configuration WiFi Suggérée"}),a.jsxs("div",{className:"wifiConfigGrid",children:[a.jsxs("div",{className:"wifiConfigItem",children:[a.jsx("span",{className:"wifiConfigLabel",children:"Nombre d'Appareils"}),a.jsx("span",{className:"wifiConfigValue",children:t.capacity===2?"2 devices":t.capacity<=4?`${t.capacity*2} devices`:"8+ devices"})]}),a.jsxs("div",{className:"wifiConfigItem",children:[a.jsx("span",{className:"wifiConfigLabel",children:"Bande Passante"}),a.jsx("span",{className:"wifiConfigValue",children:"Standard (1500 Kb/s)"})]}),a.jsxs("div",{className:"wifiConfigItem",children:[a.jsx("span",{className:"wifiConfigLabel",children:"Durée Session"}),a.jsx("span",{className:"wifiConfigValue",children:"24 heures"})]})]}),a.jsxs("p",{className:"wifiNote",children:["💡 Ces paramètres sont basés sur la capacité de la chambre. Configurez les règles WiFi dans la section ",a.jsx("strong",{children:"WiFi Policies"}),"."]})]}),a.jsxs("section",{className:"historySection",children:[a.jsx("h3",{className:"sectionTitle",children:"🕐 Historique"}),a.jsxs("div",{className:"historyGrid",children:[a.jsxs("div",{className:"historyItem",children:[a.jsx("span",{className:"historyLabel",children:"Créé le"}),a.jsx("span",{className:"historyValue",children:new Date(t.createdAt).toLocaleDateString("fr-FR",{year:"numeric",month:"long",day:"numeric"})})]}),a.jsxs("div",{className:"historyItem",children:[a.jsx("span",{className:"historyLabel",children:"Dernière modification"}),a.jsx("span",{className:"historyValue",children:new Date(t.updatedAt).toLocaleDateString("fr-FR",{year:"numeric",month:"long",day:"numeric"})})]})]})]})]})]}),c&&a.jsxs("div",{className:"zoomOverlay",onClick:()=>u(!1),children:[a.jsx("img",{src:f==null?void 0:f.url,alt:"Zoom",className:"zoomedImage",onClick:g=>g.stopPropagation()}),a.jsx("button",{className:"closeZoom",onClick:()=>u(!1),children:"✕"})]})]})}const BM='data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"%3E%3Crect width="400" height="300" fill="%23eef2f7"/%3E%3Ctext x="200" y="150" text-anchor="middle" dominant-baseline="middle" fill="%2364758b" font-family="Arial" font-size="16"%3EImage indisponible%3C/text%3E%3C/svg%3E';function zM(){const i=Wn.getStoredUser(),e=Cs(i),[t,r]=D.useState([]),[o,c]=D.useState([]),[u,h]=D.useState(!0),[f,p]=D.useState(""),[v,g]=D.useState("all"),[x,y]=D.useState("all"),[E,T]=D.useState(!1),[S,_]=D.useState(!1),[w,b]=D.useState(null),[N,I]=D.useState(null),L=async(X=v)=>{try{const te=Zi(X),[z,se]=await Promise.all([We.listHotels(),We.listRooms(te?{hotelId:te}:void 0)]);r(z.map(Pe=>({id:Pe.id,name:Pe.name}))),c(se.map(Pe=>{var be;return{...Pe,hotelName:((be=Pe.hotel)==null?void 0:be.name)||""}}))}catch(te){alert(te.message||"Impossible de charger les chambres")}finally{h(!1)}};D.useEffect(()=>{We.listHotels().then(X=>{const te=or(i,X);return g(te),L(te)}).catch(X=>alert(X.message||"Impossible de charger les chambres"))},[]),D.useEffect(()=>{v&&L(v)},[v]);const B=o.filter(X=>{const te=String(X.type||"").toLowerCase().includes(f.toLowerCase())||String(X.description||"").toLowerCase().includes(f.toLowerCase())||X.hotelName.toLowerCase().includes(f.toLowerCase()),z=v===bn||X.hotelId===v,se=x==="all"||String(X.type||"").includes(x);return te&&z&&se}),C=o.length,O=o.reduce((X,te)=>X+te.capacity,0),Y=[...new Set(o.map(X=>X.hotelId))].length,V={};o.forEach(X=>{const te=X.type.includes("Standard")?"Standard":X.type.includes("Suite")?"Suite":X.type.includes("Deluxe")?"Deluxe":"Autre";V[te]=(V[te]||0)+1});const Q=()=>{b(null),T(!0)},G=X=>{b(X),T(!0)},ee=X=>{I(X),_(!0)},F=X=>{const te={...X,id:null,type:`${X.type} (Copie)`,createdAt:new Date().toISOString().split("T")[0],updatedAt:new Date().toISOString().split("T")[0]};b(te),T(!0)},U=async X=>{if(confirm("Êtes-vous sûr de vouloir supprimer cette chambre ?"))try{await We.deleteRoom(X),c(te=>te.filter(z=>z.id!==X))}catch(te){alert(te.message||"Suppression impossible")}},W=async X=>{const te={type:X.type,name:X.name||"",capacity:X.capacity,floor:X.floor,surface:X.surface,description:X.description,equipments:X.equipments||[],photos:(X.photos||[]).map(z=>({url:z.url||z.preview||"",isMain:!!z.isMain,name:z.name||""}))};if(w&&w.id)try{await We.updateRoom(w.id,te)}catch(z){alert(z.message||"Modification impossible");return}else try{await We.createRoom(X.hotelId,te)}catch(z){alert(z.message||"Création impossible");return}await L(v),T(!1),b(null)},$=X=>{var se,Pe,be;const te=(se=X.photos)==null?void 0:se.find(Ne=>Ne.isMain),z=(te==null?void 0:te.url)||((be=(Pe=X.photos)==null?void 0:Pe[0])==null?void 0:be.url);return z&&!String(z).startsWith("blob:")?z:BM};return a.jsxs(Ei,{activePage:"HOTEL MANAGER",activeSubPage:"Rooms",children:[a.jsxs("div",{className:"roomListPage",children:[a.jsxs("div",{className:"pageHeader",children:[a.jsxs("div",{children:[a.jsx("h1",{className:"pageTitle",children:"Gestion des Chambres"}),a.jsx("p",{className:"pageSubtitle",children:"Catalogue des types de chambres par hôtel client"})]}),a.jsx("button",{className:"btn btnPrimary",onClick:Q,children:"+ Ajouter Chambre"})]}),a.jsxs("div",{className:"statsBar",children:[a.jsxs("div",{className:"statCard",children:[a.jsx("div",{className:"statValue",children:C}),a.jsx("div",{className:"statLabel",children:"Total Chambres"})]}),a.jsxs("div",{className:"statCard",children:[a.jsx("div",{className:"statValue",children:Y}),a.jsx("div",{className:"statLabel",children:"Hôtels Configurés"})]}),a.jsxs("div",{className:"statCard",children:[a.jsx("div",{className:"statValue",children:O}),a.jsx("div",{className:"statLabel",children:"Capacité Totale"})]}),a.jsxs("div",{className:"statCard",children:[a.jsx("div",{className:"statValue",children:Object.entries(V).map(([X,te])=>a.jsxs("span",{className:"typeBreakdown",children:[te," ",X]},X))}),a.jsx("div",{className:"statLabel",children:"Par Type"})]})]}),a.jsxs("div",{className:"filtersBar",children:[a.jsx("input",{type:"text",className:"searchInput",placeholder:"Rechercher une chambre...",value:f,onChange:X=>p(X.target.value)}),e&&a.jsxs("select",{className:"filterSelect",value:v,onChange:X=>g(X.target.value),children:[a.jsx("option",{value:bn,children:"Tous les hôtels"}),t.map(X=>a.jsx("option",{value:X.id,children:X.name},X.id))]}),a.jsxs("select",{className:"filterSelect",value:x,onChange:X=>y(X.target.value),children:[a.jsx("option",{value:"all",children:"Tous les types"}),a.jsx("option",{value:"Standard",children:"Standard"}),a.jsx("option",{value:"Suite",children:"Suite"}),a.jsx("option",{value:"Deluxe",children:"Deluxe"})]})]}),a.jsxs("div",{className:"roomListContainer",children:[u&&a.jsx("p",{children:"Chargement des chambres..."}),a.jsxs("table",{className:"roomTable",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{style:{width:"120px"},children:"Photo"}),a.jsx("th",{children:"Type & Description"}),a.jsx("th",{children:"Hôtel"}),a.jsx("th",{children:"Détails"}),a.jsx("th",{children:"Équipements"}),a.jsx("th",{style:{width:"200px"},children:"Actions"})]})}),a.jsx("tbody",{children:B.map(X=>a.jsxs("tr",{className:"roomRow",children:[a.jsx("td",{children:a.jsx("div",{className:"roomThumbnail",onClick:()=>ee(X),style:{cursor:"pointer"},children:a.jsx("img",{src:$(X),alt:X.type})})}),a.jsx("td",{children:a.jsxs("div",{className:"roomTypeCell",children:[a.jsx("h3",{className:"roomType",children:X.type}),a.jsx("p",{className:"roomDescription",children:X.description})]})}),a.jsx("td",{children:a.jsxs("div",{className:"hotelNameCell",children:["🏨 ",X.hotelName]})}),a.jsx("td",{children:a.jsxs("div",{className:"detailsCell",children:[a.jsxs("span",{className:"detailItem",children:["👥 ",X.capacity," pers."]}),a.jsxs("span",{className:"detailItem",children:["🏢 Étage ",X.floor]}),a.jsxs("span",{className:"detailItem",children:["📐 ",X.surface," m²"]})]})}),a.jsx("td",{children:a.jsxs("div",{className:"equipmentsCell",children:[X.equipments.slice(0,3).map((te,z)=>a.jsx("span",{className:"equipmentBadge",children:te},z)),X.equipments.length>3&&a.jsxs("span",{className:"equipmentBadge",children:["+",X.equipments.length-3]})]})}),a.jsx("td",{children:a.jsxs("div",{className:"actionsCell",children:[a.jsx("button",{className:"actionBtn viewBtn",onClick:()=>ee(X),title:"Voir détails",children:"👁️"}),a.jsx("button",{className:"actionBtn editBtn",onClick:()=>G(X),title:"Modifier",children:"✏️"}),a.jsx("button",{className:"actionBtn duplicateBtn",onClick:()=>F(X),title:"Dupliquer",children:"📋"}),a.jsx("button",{className:"actionBtn deleteBtn",onClick:()=>U(X.id),title:"Supprimer",children:"🗑️"})]})})]},X.id))})]}),B.length===0&&a.jsxs("div",{className:"emptyState",children:[a.jsx("p",{children:"Aucune chambre trouvée."}),a.jsx("button",{className:"btn btnPrimary",onClick:Q,children:"Ajouter la première chambre"})]})]})]}),a.jsx(OM,{isOpen:E,onClose:()=>{T(!1),b(null)},onSave:W,room:w,hotels:t}),a.jsx(kM,{isOpen:S,onClose:()=>{_(!1),I(null)},room:N})]})}function HM({isOpen:i,onClose:e,config:t}){const[r]=D.useState([{id:1,date:"2025-01-02T14:30:00",modifiedBy:"Admin MboaLink",action:"Modification",changes:[{field:"Bande Passante Upload",oldValue:"1000 Kb/s",newValue:"1500 Kb/s"},{field:"Bande Passante Download",oldValue:"1000 Kb/s",newValue:"1500 Kb/s"},{field:"Zones",oldValue:"PUBLIC, GUEST-ROOM",newValue:"PUBLIC, GUEST-ROOM, CONFERENCE"}]},{id:2,date:"2024-12-15T10:20:00",modifiedBy:"Tech Support",action:"Modification",changes:[{field:"SSID",oldValue:"Hotel-Guest",newValue:"LaResidence-Guest"},{field:"Message Bienvenue",oldValue:"Bienvenue",newValue:"Bienvenue à La Résidence Douala"}]},{id:3,date:"2024-11-20T16:45:00",modifiedBy:"Admin MboaLink",action:"Modification",changes:[{field:"Durée Session",oldValue:"12 heures",newValue:"24 heures"},{field:"Nombre Max Appareils",oldValue:"1",newValue:"2"}]},{id:4,date:"2024-10-05T09:15:00",modifiedBy:"Admin MboaLink",action:"Activation",changes:[{field:"Statut",oldValue:"Inactif",newValue:"Actif"}]},{id:5,date:"2024-09-28T14:00:00",modifiedBy:"Admin MboaLink",action:"Création",changes:[{field:"Configuration initiale",oldValue:"-",newValue:"Créée"}]}]);if(!i||!t)return null;const o=h=>new Date(h).toLocaleDateString("fr-FR",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"}),c=h=>{switch(h){case"Création":return"actionCreate";case"Modification":return"actionModify";case"Activation":return"actionActivate";case"Désactivation":return"actionDeactivate";default:return"actionDefault"}},u=h=>{switch(h){case"Création":return"✨";case"Modification":return"✏️";case"Activation":return"✅";case"Désactivation":return"❌";default:return"📝"}};return a.jsx("div",{className:"modalOverlay",onClick:e,children:a.jsxs("div",{className:"modalContent historyModal",onClick:h=>h.stopPropagation(),children:[a.jsxs("div",{className:"modalHeader",children:[a.jsx("button",{className:"backBtn",onClick:e,children:"← FERMER"}),a.jsxs("div",{className:"modalTitle",children:[a.jsx("h2",{children:"Historique des Modifications"}),a.jsxs("p",{children:[t.hotelName," - ",t.ssid]})]})]}),a.jsxs("div",{className:"modalBody historyBody",children:[a.jsxs("div",{className:"historySummary",children:[a.jsxs("div",{className:"summaryCard",children:[a.jsx("div",{className:"summaryIcon",children:"📊"}),a.jsxs("div",{className:"summaryContent",children:[a.jsx("div",{className:"summaryValue",children:r.length}),a.jsx("div",{className:"summaryLabel",children:"Total Modifications"})]})]}),a.jsxs("div",{className:"summaryCard",children:[a.jsx("div",{className:"summaryIcon",children:"👤"}),a.jsxs("div",{className:"summaryContent",children:[a.jsx("div",{className:"summaryValue",children:t.modifiedBy}),a.jsx("div",{className:"summaryLabel",children:"Dernier Modificateur"})]})]}),a.jsxs("div",{className:"summaryCard",children:[a.jsx("div",{className:"summaryIcon",children:"🕐"}),a.jsxs("div",{className:"summaryContent",children:[a.jsx("div",{className:"summaryValue",children:new Date(t.lastModified).toLocaleDateString("fr-FR",{day:"numeric",month:"short"})}),a.jsx("div",{className:"summaryLabel",children:"Dernière Modification"})]})]})]}),a.jsx("div",{className:"historyTimeline",children:r.map((h,f)=>a.jsxs("div",{className:"timelineEntry",children:[a.jsxs("div",{className:"timelineMarker",children:[a.jsx("div",{className:"markerDot"}),f<r.length-1&&a.jsx("div",{className:"markerLine"})]}),a.jsxs("div",{className:"timelineContent",children:[a.jsxs("div",{className:"entryHeader",children:[a.jsxs("div",{className:"entryInfo",children:[a.jsxs("span",{className:`actionBadge ${c(h.action)}`,children:[u(h.action)," ",h.action]}),a.jsx("span",{className:"entryDate",children:o(h.date)})]}),a.jsxs("div",{className:"entryAuthor",children:["Par ",a.jsx("strong",{children:h.modifiedBy})]})]}),a.jsx("div",{className:"changesTable",children:a.jsxs("table",{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Champ Modifié"}),a.jsx("th",{children:"Ancienne Valeur"}),a.jsx("th",{}),a.jsx("th",{children:"Nouvelle Valeur"})]})}),a.jsx("tbody",{children:h.changes.map((p,v)=>a.jsxs("tr",{children:[a.jsx("td",{className:"fieldName",children:p.field}),a.jsx("td",{className:"oldValue",children:p.oldValue}),a.jsx("td",{className:"arrow",children:"→"}),a.jsx("td",{className:"newValue",children:p.newValue})]},v))})]})})]})]},h.id))}),r.length===0&&a.jsx("div",{className:"emptyHistory",children:a.jsx("p",{children:"Aucun historique disponible pour cette configuration."})})]}),a.jsx("div",{className:"modalFooter",children:a.jsx("button",{className:"btn btnSecondary",onClick:e,children:"Fermer"})})]})})}function VM({isOpen:i,onClose:e,onSave:t,config:r}){const[o,c]=D.useState({ssid:"",password:"",authMethod:"Portail Captif",sessionDuration:24,sessionUnit:"hours",maxDevices:2,uploadSpeed:1500,downloadSpeed:1500,zones:[],captivePortal:{logo:"",welcomeMessage:"",termsUrl:""},status:"Actif"}),u=["Portail Captif","Guest Pass","Numéro de Chambre","Voucher","Code SMS","Email"],h=["PUBLIC","GUEST-ROOM","CONFERENCE","IROH","RC","RESTAURANT","LOBBY","POOL"];D.useEffect(()=>{var y,E,T;r&&c({ssid:r.ssid||"",password:"",authMethod:r.authMethod||"Portail Captif",sessionDuration:r.sessionDuration||24,sessionUnit:r.sessionUnit||"hours",maxDevices:r.maxDevices||2,uploadSpeed:r.uploadSpeed||1500,downloadSpeed:r.downloadSpeed||1500,zones:r.zones||[],captivePortal:{logo:((y=r.captivePortal)==null?void 0:y.logo)||"",welcomeMessage:((E=r.captivePortal)==null?void 0:E.welcomeMessage)||"",termsUrl:((T=r.captivePortal)==null?void 0:T.termsUrl)||""},status:r.status||"Actif"})},[r]);const f=(y,E)=>{c(T=>({...T,[y]:E}))},p=(y,E)=>{c(T=>({...T,captivePortal:{...T.captivePortal,[y]:E}}))},v=y=>{c(E=>({...E,zones:E.zones.includes(y)?E.zones.filter(T=>T!==y):[...E.zones,y]}))},g=y=>{var T;const E=(T=y.target.files)==null?void 0:T[0];if(E){const S=new FileReader;S.onload=_=>{var w;p("logo",String(((w=_.target)==null?void 0:w.result)??""))},S.readAsDataURL(E)}},x=()=>{if(!o.ssid){alert("Veuillez renseigner le SSID");return}if(o.zones.length===0){alert("Veuillez sélectionner au moins une zone réseau");return}t(o)};return!i||!r?null:a.jsx("div",{className:"modalOverlay",onClick:e,children:a.jsxs("div",{className:"modalContent configWifiModal",onClick:y=>y.stopPropagation(),children:[a.jsxs("div",{className:"modalHeader",children:[a.jsx("button",{className:"backBtn",onClick:e,children:"← RETOUR"}),a.jsxs("div",{className:"modalTitle",children:[a.jsxs("h2",{children:["Configuration WiFi - ",r.hotelName]}),a.jsx("p",{children:"Paramétrez les accès réseau et le portail captif pour cet hôtel."})]})]}),a.jsxs("div",{className:"modalBody",children:[a.jsxs("section",{className:"formSection",children:[a.jsx("h3",{className:"sectionTitle",children:"📶 Paramètres Réseau"}),a.jsxs("div",{className:"formRow",children:[a.jsxs("div",{className:"formLabel",children:[a.jsx("label",{children:"SSID (Nom du Réseau) *"}),a.jsx("p",{className:"labelHelp",children:"Nom visible par les clients"})]}),a.jsx("input",{type:"text",value:o.ssid,onChange:y=>f("ssid",y.target.value),placeholder:"Ex: HotelName-Guest",required:!0})]}),a.jsxs("div",{className:"formRow",children:[a.jsxs("div",{className:"formLabel",children:[a.jsx("label",{children:"Mot de Passe WiFi"}),a.jsx("p",{className:"labelHelp",children:"Optionnel - Laissez vide pour réseau ouvert"})]}),a.jsx("input",{type:"password",value:o.password,onChange:y=>f("password",y.target.value),placeholder:"••••••••"})]}),a.jsxs("div",{className:"formRow",children:[a.jsxs("div",{className:"formLabel",children:[a.jsx("label",{children:"Méthode d'Authentification"}),a.jsx("p",{className:"labelHelp",children:"Comment les clients s'identifient"})]}),a.jsx("select",{value:o.authMethod,onChange:y=>f("authMethod",y.target.value),children:u.map((y,E)=>a.jsx("option",{value:y,children:y},E))})]}),a.jsxs("div",{className:"formRow",children:[a.jsx("div",{className:"formLabel",children:a.jsx("label",{children:"Statut"})}),a.jsxs("select",{value:o.status,onChange:y=>f("status",y.target.value),children:[a.jsx("option",{value:"Actif",children:"Actif"}),a.jsx("option",{value:"Inactif",children:"Inactif"})]})]})]}),a.jsxs("section",{className:"formSection",children:[a.jsx("h3",{className:"sectionTitle",children:"⏱️ Durée et Limitations"}),a.jsxs("div",{className:"formRow",children:[a.jsxs("div",{className:"formLabel",children:[a.jsx("label",{children:"Durée de Session"}),a.jsx("p",{className:"labelHelp",children:"Temps de connexion autorisé"})]}),a.jsxs("div",{className:"durationGroup",children:[a.jsx("input",{type:"number",value:o.sessionDuration,onChange:y=>f("sessionDuration",Number(y.target.value)),min:"1",max:"999"}),a.jsxs("select",{value:o.sessionUnit,onChange:y=>f("sessionUnit",y.target.value),children:[a.jsx("option",{value:"hours",children:"Heures"}),a.jsx("option",{value:"days",children:"Jours"})]})]})]}),a.jsxs("div",{className:"formRow",children:[a.jsxs("div",{className:"formLabel",children:[a.jsx("label",{children:"Nombre Max d'Appareils"}),a.jsx("p",{className:"labelHelp",children:"Par utilisateur/chambre"})]}),a.jsx("input",{type:"number",value:o.maxDevices,onChange:y=>f("maxDevices",Number(y.target.value)),min:"1",max:"20"})]})]}),a.jsxs("section",{className:"formSection",children:[a.jsx("h3",{className:"sectionTitle",children:"🚀 Bande Passante"}),a.jsxs("div",{className:"formRow",children:[a.jsx("div",{className:"formLabel",children:a.jsx("label",{children:"Vitesse Upload (Kb/s)"})}),a.jsxs("div",{className:"sliderGroup",children:[a.jsx("input",{type:"range",min:"100",max:"10000",step:"100",value:o.uploadSpeed,onChange:y=>f("uploadSpeed",Number(y.target.value))}),a.jsxs("span",{className:"sliderValue",children:[o.uploadSpeed," Kb/s"]})]})]}),a.jsxs("div",{className:"formRow",children:[a.jsx("div",{className:"formLabel",children:a.jsx("label",{children:"Vitesse Download (Kb/s)"})}),a.jsxs("div",{className:"sliderGroup",children:[a.jsx("input",{type:"range",min:"100",max:"10000",step:"100",value:o.downloadSpeed,onChange:y=>f("downloadSpeed",Number(y.target.value))}),a.jsxs("span",{className:"sliderValue",children:[o.downloadSpeed," Kb/s"]})]})]})]}),a.jsxs("section",{className:"formSection",children:[a.jsx("h3",{className:"sectionTitle",children:"📍 Zones Réseau"}),a.jsxs("div",{className:"formRow",children:[a.jsxs("div",{className:"formLabel",children:[a.jsx("label",{children:"Zones Autorisées *"}),a.jsx("p",{className:"labelHelp",children:"Sélectionnez les zones où ce WiFi est accessible"})]}),a.jsx("div",{className:"zonesCheckboxes",children:h.map((y,E)=>a.jsxs("label",{className:"zoneCheckbox",children:[a.jsx("input",{type:"checkbox",checked:o.zones.includes(y),onChange:()=>v(y)}),a.jsx("span",{children:y})]},E))})]})]}),o.authMethod==="Portail Captif"&&a.jsxs("section",{className:"formSection captivePortalSection",children:[a.jsx("h3",{className:"sectionTitle",children:"🌐 Portail Captif"}),a.jsxs("div",{className:"formRow",children:[a.jsxs("div",{className:"formLabel",children:[a.jsx("label",{children:"Logo de l'Hôtel"}),a.jsx("p",{className:"labelHelp",children:"Image affichée sur la page de connexion"})]}),a.jsx("div",{className:"logoUploadSection",children:o.captivePortal.logo?a.jsxs("div",{className:"logoPreview",children:[a.jsx("img",{src:o.captivePortal.logo,alt:"Logo"}),a.jsx("button",{type:"button",className:"removeLogoBtn",onClick:()=>p("logo",""),children:"✕ Supprimer"})]}):a.jsxs(a.Fragment,{children:[a.jsx("label",{htmlFor:"logo-upload",className:"uploadBtn",children:"📤 Télécharger un Logo"}),a.jsx("input",{id:"logo-upload",type:"file",accept:"image/*",onChange:g,style:{display:"none"}})]})})]}),a.jsxs("div",{className:"formRow",children:[a.jsxs("div",{className:"formLabel",children:[a.jsx("label",{children:"Message de Bienvenue"}),a.jsx("p",{className:"labelHelp",children:"Texte affiché sur le portail"})]}),a.jsx("textarea",{value:o.captivePortal.welcomeMessage,onChange:y=>p("welcomeMessage",y.target.value),placeholder:"Ex: Bienvenue à l'Hôtel X...",rows:"3"})]}),a.jsxs("div",{className:"formRow",children:[a.jsxs("div",{className:"formLabel",children:[a.jsx("label",{children:"Conditions d'Utilisation (URL)"}),a.jsx("p",{className:"labelHelp",children:"Lien vers les CGU"})]}),a.jsx("input",{type:"url",value:o.captivePortal.termsUrl,onChange:y=>p("termsUrl",y.target.value),placeholder:"https://hotel.com/terms"})]})]}),a.jsxs("section",{className:"formSection configPreview",children:[a.jsx("h3",{className:"sectionTitle",children:"📋 Aperçu de la Configuration"}),a.jsxs("div",{className:"previewGrid",children:[a.jsxs("div",{className:"previewItem",children:[a.jsx("span",{className:"previewLabel",children:"SSID"}),a.jsx("span",{className:"previewValue",children:o.ssid||"Non défini"})]}),a.jsxs("div",{className:"previewItem",children:[a.jsx("span",{className:"previewLabel",children:"Authentification"}),a.jsx("span",{className:"previewValue",children:o.authMethod})]}),a.jsxs("div",{className:"previewItem",children:[a.jsx("span",{className:"previewLabel",children:"Durée"}),a.jsxs("span",{className:"previewValue",children:[o.sessionDuration," ",o.sessionUnit==="hours"?"heure(s)":"jour(s)"]})]}),a.jsxs("div",{className:"previewItem",children:[a.jsx("span",{className:"previewLabel",children:"Devices Max"}),a.jsx("span",{className:"previewValue",children:o.maxDevices})]}),a.jsxs("div",{className:"previewItem",children:[a.jsx("span",{className:"previewLabel",children:"Bande Passante"}),a.jsxs("span",{className:"previewValue",children:["⬆️ ",o.uploadSpeed," / ⬇️ ",o.downloadSpeed," Kb/s"]})]}),a.jsxs("div",{className:"previewItem",children:[a.jsx("span",{className:"previewLabel",children:"Zones"}),a.jsxs("span",{className:"previewValue",children:[o.zones.length," zone(s)"]})]})]})]})]}),a.jsxs("div",{className:"modalFooter",children:[a.jsx("button",{className:"btn btnPrimary",onClick:x,children:"💾 Sauvegarder la Configuration"}),a.jsx("button",{className:"btn btnSecondary",onClick:e,children:"Annuler"})]})]})})}const GM={CAPTIVE_PORTAL:"Portail Captif",GUEST_PASS:"Guest Pass",ROOM_NUMBER:"Numéro de Chambre",VOUCHER:"Voucher",SMS_CODE:"SMS",EMAIL:"Email"},WM={"Portail Captif":"CAPTIVE_PORTAL","Guest Pass":"GUEST_PASS","Numéro de Chambre":"ROOM_NUMBER",Voucher:"VOUCHER",SMS:"SMS_CODE",Email:"EMAIL"};function XM(){const i=Wn.getStoredUser(),e=Cs(i),[t,r]=D.useState([]),[o,c]=D.useState(""),[u,h]=D.useState([]),[f,p]=D.useState(!0),[v,g]=D.useState(""),[x,y]=D.useState("all"),[E,T]=D.useState(!1),[S,_]=D.useState(!1),[w,b]=D.useState(null),N=async(F=o)=>{try{const U=Zi(F),W=await We.listWifiConfigs(U?{hotelId:U}:void 0);h(W.map($=>{var X;return{...$,hotelName:((X=$.hotel)==null?void 0:X.name)||"",authMethod:GM[$.authMethod]||$.authMethod,status:$.status==="ACTIVE"?"Actif":"Inactif",uploadSpeed:$.uploadSpeedKbps,downloadSpeed:$.downloadSpeedKbps,lastModified:$.updatedAt,modifiedBy:$.lastModifiedBy||"N/A"}}))}catch(U){alert(U.message||"Impossible de charger les configurations WiFi")}finally{p(!1)}};D.useEffect(()=>{We.listHotels().then(async F=>{r(F);const U=or(i,F);c(U),await N(U)}).catch(F=>alert(F.message||"Impossible de charger les hôtels"))},[]),D.useEffect(()=>{o&&N(o)},[o]);const I=u.filter(F=>{const U=F.hotelName.toLowerCase().includes(v.toLowerCase())||F.ssid.toLowerCase().includes(v.toLowerCase()),W=x==="all"||F.status===x;return U&&W}),L=u.length,B=u.filter(F=>F.status==="Actif").length,C=new Set(u.map(F=>F.ssid)).size,O=u.length>0?Math.round(u.reduce((F,U)=>F+U.maxDevices,0)/u.length):0,Y=F=>{b(F),T(!0)},V=F=>{b(F),_(!0)},Q=F=>{if(!w)return;const U={ssid:F.ssid,password:F.password||"",authMethod:WM[F.authMethod]||F.authMethod,sessionDuration:Number(F.sessionDuration),sessionUnit:F.sessionUnit,maxDevices:Number(F.maxDevices),uploadSpeedKbps:Number(F.uploadSpeed),downloadSpeedKbps:Number(F.downloadSpeed),zones:F.zones||[],captivePortal:F.captivePortal||{},status:F.status==="Actif"?"ACTIVE":"INACTIVE"};We.upsertWifiConfig(w.hotelId,U).then(()=>N(o)).catch(W=>alert(W.message||"Mise à jour impossible")).finally(()=>{T(!1),b(null)})},G=(F,U)=>`${F} ${U==="hours"?"heure":"jour"}${F>1?"s":""}`,ee=F=>{const U=new Date(F),$=Math.floor((new Date-U)/(1e3*60*60));if($<1)return"Il y a moins d'une heure";if($<24)return`Il y a ${$} heure${$>1?"s":""}`;const X=Math.floor($/24);return X<7?`Il y a ${X} jour${X>1?"s":""}`:U.toLocaleDateString("fr-FR",{year:"numeric",month:"short",day:"numeric"})};return a.jsxs(Ei,{activePage:"HOTEL MANAGER",activeSubPage:"Config WiFi",children:[a.jsxs("div",{className:"configWifiPage",children:[a.jsx("div",{className:"pageHeader",children:a.jsxs("div",{children:[a.jsx("h1",{className:"pageTitle",children:"Configuration WiFi"}),a.jsx("p",{className:"pageSubtitle",children:"Paramètres réseau et accès WiFi par hôtel client"})]})}),a.jsxs("div",{className:"statsBar",children:[a.jsxs("div",{className:"statCard",children:[a.jsx("div",{className:"statValue",children:L}),a.jsx("div",{className:"statLabel",children:"Hôtels Configurés"})]}),a.jsxs("div",{className:"statCard",children:[a.jsx("div",{className:"statValue",children:B}),a.jsx("div",{className:"statLabel",children:"Configurations Actives"})]}),a.jsxs("div",{className:"statCard",children:[a.jsx("div",{className:"statValue",children:C}),a.jsx("div",{className:"statLabel",children:"SSID Uniques"})]}),a.jsxs("div",{className:"statCard",children:[a.jsx("div",{className:"statValue",children:O}),a.jsx("div",{className:"statLabel",children:"Devices Moy. / User"})]})]}),a.jsxs("div",{className:"filtersBar",children:[e&&a.jsxs("select",{className:"filterSelect",value:o,onChange:F=>c(F.target.value),children:[a.jsx("option",{value:bn,children:"Tous les hôtels"}),t.map(F=>a.jsx("option",{value:F.id,children:F.name},F.id))]}),a.jsx("input",{type:"text",className:"searchInput",placeholder:"Rechercher un hôtel ou SSID...",value:v,onChange:F=>g(F.target.value)}),a.jsxs("select",{className:"filterSelect",value:x,onChange:F=>y(F.target.value),children:[a.jsx("option",{value:"all",children:"Tous les statuts"}),a.jsx("option",{value:"Actif",children:"Actif"}),a.jsx("option",{value:"Inactif",children:"Inactif"})]})]}),a.jsxs("div",{className:"configWifiContainer",children:[f&&a.jsx("p",{children:"Chargement des configurations..."}),a.jsxs("table",{className:"configWifiTable",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Hôtel"}),a.jsx("th",{children:"SSID"}),a.jsx("th",{children:"Authentification"}),a.jsx("th",{children:"Durée Session"}),a.jsx("th",{children:"Devices Max"}),a.jsx("th",{children:"Bande Passante"}),a.jsx("th",{children:"Zones"}),a.jsx("th",{children:"Statut"}),a.jsx("th",{children:"Dernière Modif."}),a.jsx("th",{style:{width:"140px"},children:"Actions"})]})}),a.jsx("tbody",{children:I.map(F=>a.jsxs("tr",{className:"configRow",children:[a.jsx("td",{children:a.jsx("div",{className:"hotelCell",children:a.jsx("strong",{children:F.hotelName})})}),a.jsx("td",{children:a.jsxs("div",{className:"ssidCell",children:["📶 ",a.jsx("strong",{children:F.ssid})]})}),a.jsx("td",{children:a.jsx("span",{className:"authBadge",children:F.authMethod})}),a.jsx("td",{children:G(F.sessionDuration,F.sessionUnit)}),a.jsx("td",{children:a.jsxs("span",{className:"devicesCell",children:[F.maxDevices," 📱"]})}),a.jsx("td",{children:a.jsxs("div",{className:"bandwidthCell",children:[a.jsxs("span",{children:["⬆️ ",F.uploadSpeed]}),a.jsxs("span",{children:["⬇️ ",F.downloadSpeed]})]})}),a.jsx("td",{children:a.jsxs("div",{className:"zonesCell",children:[F.zones.slice(0,2).map((U,W)=>a.jsx("span",{className:"zoneBadge",children:U},W)),F.zones.length>2&&a.jsxs("span",{className:"zoneBadge",children:["+",F.zones.length-2]})]})}),a.jsx("td",{children:a.jsx("span",{className:`statusBadge ${F.status.toLowerCase()}`,children:F.status})}),a.jsx("td",{children:a.jsxs("div",{className:"modifiedCell",children:[a.jsx("span",{className:"modifiedTime",children:ee(F.lastModified)}),a.jsx("span",{className:"modifiedBy",children:F.modifiedBy})]})}),a.jsx("td",{children:a.jsxs("div",{className:"actionsCell",children:[a.jsx("button",{className:"actionBtn configBtn",onClick:()=>Y(F),title:"Configurer WiFi",children:"⚙️"}),a.jsx("button",{className:"actionBtn historyBtn",onClick:()=>V(F),title:"Historique",children:"📋"})]})})]},F.id))})]}),I.length===0&&a.jsx("div",{className:"emptyState",children:a.jsx("p",{children:"Aucune configuration trouvée."})})]})]}),a.jsx(VM,{isOpen:E,onClose:()=>{T(!1),b(null)},onSave:Q,config:w}),a.jsx(HM,{isOpen:S,onClose:()=>{_(!1),b(null)},config:w})]})}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qM=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),$M=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase()),vx=i=>{const e=$M(i);return e.charAt(0).toUpperCase()+e.slice(1)},i0=(...i)=>i.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var YM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KM=D.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:c,iconNode:u,...h},f)=>D.createElement("svg",{ref:f,...YM,width:e,height:e,stroke:i,strokeWidth:r?Number(t)*24/Number(e):t,className:i0("lucide",o),...h},[...u.map(([p,v])=>D.createElement(p,v)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qt=(i,e)=>{const t=D.forwardRef(({className:r,...o},c)=>D.createElement(KM,{ref:c,iconNode:e,className:i0(`lucide-${qM(vx(i))}`,`lucide-${i}`,r),...o}));return t.displayName=vx(i),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZM=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],JM=qt("activity",ZM);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QM=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],_x=qt("bell",QM);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eE=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6",key:"5bb3ad"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8",key:"tap9e0"}]],tE=qt("bell-ring",eE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nE=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]],rf=qt("building-2",nE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iE=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],nh=qt("chevron-right",iE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sE=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],ih=qt("database",sE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rE=[["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"37hlfg"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"8",cy:"16",r:"6",key:"10v15b"}],["path",{d:"M9.5 17.5 8 16.25V14",key:"1o80t2"}]],yx=qt("file-clock",rE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aE=[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]],oE=qt("gauge",aE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lE=[["path",{d:"M10 22v-6.57",key:"1wmca3"}],["path",{d:"M12 11h.01",key:"z322tv"}],["path",{d:"M12 7h.01",key:"1ivr5q"}],["path",{d:"M14 15.43V22",key:"1q2vjd"}],["path",{d:"M15 16a5 5 0 0 0-6 0",key:"o9wqvi"}],["path",{d:"M16 11h.01",key:"xkw8gn"}],["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 7h.01",key:"1vti4s"}],["rect",{x:"4",y:"2",width:"16",height:"20",rx:"2",key:"1uxh74"}]],af=qt("hotel",lE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cE=[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]],uE=qt("key-round",cE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dE=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],hE=qt("layout-dashboard",dE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fE=[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]],pE=qt("lock-keyhole",fE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mE=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],gE=qt("log-out",mE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xE=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],zo=qt("network",xE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vE=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],_E=qt("pencil",vE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yE=[["path",{d:"M12 22v-5",key:"1ega77"}],["path",{d:"M9 8V2",key:"14iosj"}],["path",{d:"M15 8V2",key:"18g5xt"}],["path",{d:"M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z",key:"osxo6l"}]],sh=qt("plug",yE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SE=[["path",{d:"M4.9 16.1C1 12.2 1 5.8 4.9 1.9",key:"s0qx1y"}],["path",{d:"M7.8 4.7a6.14 6.14 0 0 0-.8 7.5",key:"1idnkw"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}],["path",{d:"M16.2 4.8c2 2 2.26 5.11.8 7.47",key:"ojru2q"}],["path",{d:"M19.1 1.9a9.96 9.96 0 0 1 0 14.1",key:"rhi7fg"}],["path",{d:"M9.5 18h5",key:"mfy3pd"}],["path",{d:"m8 22 4-11 4 11",key:"25yftu"}]],Sx=qt("radio-tower",SE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ME=[["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6.01 18H6",key:"19vcac"}],["path",{d:"M10.01 18H10",key:"uamcmx"}],["path",{d:"M15 10v4",key:"qjz1xs"}],["path",{d:"M17.84 7.17a4 4 0 0 0-5.66 0",key:"1rif40"}],["path",{d:"M20.66 4.34a8 8 0 0 0-11.31 0",key:"6a5xfq"}]],Mx=qt("router",ME);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EE=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],rh=qt("save",EE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bE=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],wE=qt("search",bE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TE=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],CE=qt("server",TE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NE=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Ex=qt("settings",NE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AE=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],kc=qt("shield-check",AE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RE=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],PE=qt("trash-2",RE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LE=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],ah=qt("users",LE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IE=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],Fo=qt("wifi",IE);function DE(i){const e=i.reduce((o,c)=>o+c.value,0);if(e===0)return{background:"conic-gradient(#dbe7f5 0deg 360deg)",total:0};let t=0;return{background:`conic-gradient(${i.map(o=>{const c=o.value/e*360,u=`${o.color} ${t}deg ${t+c}deg`;return t+=c,u}).join(", ")})`,total:e}}function jE(i){const e=`${i.model||""} ${i.serialNumber||""}`.toLowerCase();return e.includes("switch")?"Switch":e.includes("access")||e.includes("ap-")||e.includes("wifi")?"Access Point":e.includes("router")||e.includes("gateway")?"Gateway":"Autre equipement"}function UE(i){if(!i)return"N/A";const e=new Date(i),t=Date.now()-e.getTime(),r=Math.max(0,Math.floor(t/6e4));if(r<1)return"A l’instant";if(r<60)return`Il y a ${r} min`;const o=Math.floor(r/60);return o<24?`Il y a ${o} h`:`Il y a ${Math.floor(o/24)} j`}function FE(){const i=new Date,e=new Date;e.setDate(i.getDate()-6);const t=r=>r.toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric"});return`${t(e)} - ${t(i)}`}function oh({title:i,items:e,subtitle:t}){const{background:r,total:o}=D.useMemo(()=>DE(e),[e]);return a.jsxs("section",{className:"dashboardPanel chartPanel",children:[a.jsxs("div",{className:"panelHeader",children:[a.jsxs("div",{children:[a.jsx("h3",{children:i}),t&&a.jsx("p",{children:t})]}),a.jsxs("span",{children:[o," total"]})]}),a.jsxs("div",{className:"chartPanelBody",children:[a.jsxs("div",{className:"donutWrap",children:[a.jsx("div",{className:"donutChart",style:{background:r}}),a.jsxs("div",{className:"donutCenter",children:[a.jsx("strong",{children:o}),a.jsx("span",{children:"Total"})]})]}),a.jsx("ul",{className:"chartLegend",children:e.map(c=>a.jsxs("li",{children:[a.jsx("span",{className:"legendDot",style:{backgroundColor:c.color}}),a.jsx("span",{className:"legendText",children:c.label}),a.jsx("strong",{children:c.value})]},c.label))})]})]})}function OE(){var S,_;const i=Dr(),e=Wn.getStoredUser(),t=Cs(e),[r,o]=D.useState([]),[c,u]=D.useState(""),[h,f]=D.useState(null),[p,v]=D.useState(!0),g=async(w,b=r)=>{v(!0);const N=Zi(w),I=N?{hotelId:N}:void 0,[L,B,C,O]=await Promise.all([We.getDashboardOverview(I),We.listDevices(I),We.listLoginSessions(I),We.listWifiConfigs(I)]),Y=N?b.filter(V=>V.id===N):b;f({overview:L,devices:B,sessions:C,hotels:Y,wifiConfigs:O}),v(!1)};D.useEffect(()=>{let w=!0;return We.listHotels().then(async b=>{if(!w)return;o(b);const N=or(e,b);u(N),await g(N,b)}).catch(b=>{alert(b.message||"Impossible de charger le dashboard")}).finally(()=>{w&&v(!1)}),()=>{w=!1}},[]),D.useEffect(()=>{!c||r.length===0||g(c).catch(w=>{v(!1),alert(w.message||"Impossible de charger le dashboard")})},[c]);const x=D.useMemo(()=>{var $,X;if(!h)return null;const{overview:w,devices:b,sessions:N,hotels:I,wifiConfigs:L}=h,B=b.reduce((te,z)=>{const se=String(z.status||"OFFLINE");return te[se]=(te[se]||0)+1,te},{ONLINE:0,OFFLINE:0,UNSTABLE:0}),C=b.reduce((te,z)=>{const se=z.zone||"Non assigne";return te[se]=(te[se]||0)+1,te},{}),O=N.reduce((te,z)=>{var Pe;const se=(Pe=z.guestPass)!=null&&Pe.code?"Guest Pass":z.type||"Autre";return te[se]=(te[se]||0)+1,te},{}),Y=b.reduce((te,z)=>{const se=jE(z);return te[se]=(te[se]||0)+1,te},{}),V=L.filter(te=>te.status==="ACTIVE").length,Q=I.length>0?Math.round(V/I.length*100):0,G=w.activeSessions||N.filter(te=>te.status==="ONLINE").length,ee=w.rooms||0,F=ee>0?Math.min(100,Math.round(G/ee*100)):0,U=(($=w.recentAlerts)==null?void 0:$.length)||0,W=[{label:"Chambres",value:w.rooms||0,tone:"blue",helper:`${F}% occupation reseau`,icon:af},{label:"Equipements",value:b.length,tone:"slate",helper:`${B.ONLINE||0} en ligne`,icon:Mx},{label:"Switches actifs",value:Y.Switch||0,tone:"green",helper:"Infrastructure filaire",icon:zo},{label:"Access Points",value:Y["Access Point"]||0,tone:"gold",helper:"Couverture Wi-Fi",icon:Sx}];return{overview:w,devices:b,sessions:N,hotels:I,wifiConfigs:L,statusCounts:B,zoneCounts:C,sessionTypes:O,activeWifiConfigs:V,wifiCoverage:Q,activeSessions:G,roomUsage:F,openAlerts:U,overviewCards:W,activeHotelsLabel:c===bn?"Vue multi-sites":((X=I[0])==null?void 0:X.name)||"Hotel MboaLink"}},[h,c]),y=D.useMemo(()=>x?[{label:"Online",value:x.statusCounts.ONLINE||0,color:"#2563eb"},{label:"Offline",value:x.statusCounts.OFFLINE||0,color:"#64748b"},{label:"Instable",value:x.statusCounts.UNSTABLE||0,color:"#f2c300"}]:[],[x]),E=D.useMemo(()=>{if(!x)return[];const w=["#2563eb","#0f766e","#16a34a","#f2c300","#dc2626","#7c3aed"];return Object.entries(x.zoneCounts).slice(0,6).map(([b,N],I)=>({label:b,value:Number(N),color:w[I%w.length]}))},[x]),T=D.useMemo(()=>{if(!x)return[];const w=["#2563eb","#7c3aed","#f2c300","#16a34a"];return Object.entries(x.sessionTypes).slice(0,4).map(([b,N],I)=>({label:b,value:Number(N),color:w[I%w.length]}))},[x]);return a.jsx(Ei,{activePage:"DASHBOARD",activeSubPage:"",children:a.jsxs("div",{className:"dashboardPage dashboardShell",children:[a.jsxs("div",{className:"dashboardTopbar",children:[a.jsxs("div",{className:"dashboardBrandBlock",children:[a.jsx("span",{className:"dashboardBrandName",children:"MboaLink"}),a.jsxs("div",{className:"dashboardTabs",children:[a.jsx("button",{type:"button",className:"dashboardTab active",children:"Dashboard"}),a.jsx("button",{type:"button",className:"dashboardTab",children:"Operations"})]})]}),a.jsxs("div",{className:"dashboardMeta",children:[t&&a.jsxs("select",{className:"dashboardScopeSelect",value:c,onChange:w=>u(w.target.value),children:[a.jsx("option",{value:bn,children:"Tous les hôtels"}),r.map(w=>a.jsx("option",{value:w.id,children:w.name},w.id))]}),a.jsxs("span",{className:"dashboardLiveBadge",children:[a.jsx("span",{}),"Live"]}),a.jsx("span",{className:"dashboardPeriod",children:FE()})]})]}),a.jsxs("div",{className:"dashboardHero",children:[a.jsxs("div",{children:[a.jsx("p",{className:"dashboardEyebrow",children:"Vue generale"}),a.jsx("h1",{className:"dashboardTitle",children:(x==null?void 0:x.activeHotelsLabel)||"MboaLink Dashboard"}),a.jsx("p",{className:"dashboardSubtitle",children:"Supervision reseau, activite client et etat operationnel des hotels depuis un espace clair et exploitable."})]}),a.jsxs("div",{className:"dashboardHeroActions",children:[a.jsxs("button",{type:"button",className:"heroButton secondary",onClick:()=>i(at.public.networkMap),children:[a.jsx(zo,{size:16}),"Network Map"]}),a.jsxs("button",{type:"button",className:"heroButton success",children:[a.jsx(tE,{size:16}),"Alertes actives"]})]})]}),a.jsxs("div",{className:"serviceStatusRow",children:[a.jsxs("div",{className:"servicePill success",children:[a.jsx("span",{className:"serviceIcon",children:a.jsx(CE,{size:18})}),a.jsxs("div",{children:[a.jsx("strong",{children:"OVI Server"}),a.jsx("small",{children:x?"Disponible":"Chargement"})]})]}),a.jsxs("div",{className:`servicePill ${x&&x.activeWifiConfigs>0?"warning":"neutral"}`,children:[a.jsx("span",{className:"serviceIcon",children:a.jsx(Fo,{size:18})}),a.jsxs("div",{children:[a.jsx("strong",{children:"Captive Portal"}),a.jsx("small",{children:x?`${x.activeWifiConfigs} config(s) active(s)`:"Chargement"})]})]}),a.jsxs("div",{className:`servicePill ${x&&x.statusCounts.ONLINE>0?"info":"neutral"}`,children:[a.jsx("span",{className:"serviceIcon",children:a.jsx(JM,{size:18})}),a.jsxs("div",{children:[a.jsx("strong",{children:"Internet Uplink"}),a.jsx("small",{children:x?`${x.statusCounts.ONLINE} equipements en ligne`:"Chargement"})]})]})]}),p&&a.jsx("p",{className:"dashboardLoading",children:"Chargement du dashboard..."}),x&&a.jsxs("div",{className:"dashboardContent",children:[a.jsx("aside",{className:"kpiColumn",children:x.overviewCards.map(w=>a.jsxs("article",{className:`kpiTile ${w.tone}`,children:[a.jsxs("div",{className:"kpiTileTop",children:[a.jsx("span",{children:w.label}),a.jsx(w.icon,{size:18})]}),a.jsx("strong",{children:w.value}),a.jsx("small",{children:w.helper})]},w.label))}),a.jsxs("div",{className:"dashboardMain",children:[a.jsxs("div",{className:"dashboardChartsRow",children:[a.jsx(oh,{title:"Devices by Status",subtitle:"Disponibilite reseau",items:y}),a.jsx(oh,{title:"Devices by Zone",subtitle:"Repartition par zone",items:E}),a.jsx(oh,{title:"Sessions by Type",subtitle:"Origine des connexions",items:T}),a.jsxs("section",{className:"dashboardPanel compactStatsPanel",children:[a.jsxs("article",{className:"compactStat blue",children:[a.jsx("div",{className:"compactStatIcon",children:a.jsx(oE,{size:18})}),a.jsx("span",{children:"Guest Logins"}),a.jsx("strong",{children:x.sessions.length}),a.jsx("small",{children:"sur la periode"})]}),a.jsxs("article",{className:"compactStat violet",children:[a.jsx("div",{className:"compactStatIcon",children:a.jsx(kc,{size:18})}),a.jsx("span",{children:"WiFi Coverage"}),a.jsxs("strong",{children:[x.wifiCoverage,"%"]}),a.jsxs("small",{children:[x.activeWifiConfigs," / ",x.hotels.length||0," hotels configures"]})]})]})]}),a.jsxs("div",{className:"dashboardBottomRow",children:[a.jsxs("section",{className:"dashboardPanel metricsPanel",children:[a.jsxs("div",{className:"panelHeader",children:[a.jsxs("div",{children:[a.jsx("h3",{children:"Infrastructure Snapshot"}),a.jsx("p",{children:"Indicateurs de sante operationnelle"})]}),a.jsx("span",{children:"Temps reel logique"})]}),a.jsxs("div",{className:"metricProgressGrid",children:[a.jsxs("div",{className:"metricBlock",children:[a.jsxs("div",{className:"metricHeader",children:[a.jsx("span",{children:"Devices online"}),a.jsxs("strong",{children:[x.statusCounts.ONLINE,"/",x.devices.length]})]}),a.jsx("div",{className:"metricBar",children:a.jsx("div",{className:"metricFill blue",style:{width:`${x.devices.length?x.statusCounts.ONLINE/x.devices.length*100:0}%`}})})]}),a.jsxs("div",{className:"metricBlock",children:[a.jsxs("div",{className:"metricHeader",children:[a.jsx("span",{children:"Occupation reseau"}),a.jsxs("strong",{children:[x.roomUsage,"%"]})]}),a.jsx("div",{className:"metricBar",children:a.jsx("div",{className:"metricFill violet",style:{width:`${x.roomUsage}%`}})})]}),a.jsxs("div",{className:"metricBlock",children:[a.jsxs("div",{className:"metricHeader",children:[a.jsx("span",{children:"Configurations WiFi actives"}),a.jsxs("strong",{children:[x.wifiCoverage,"%"]})]}),a.jsx("div",{className:"metricBar",children:a.jsx("div",{className:"metricFill green",style:{width:`${x.wifiCoverage}%`}})})]}),a.jsxs("div",{className:"metricBlock",children:[a.jsxs("div",{className:"metricHeader",children:[a.jsx("span",{children:"Alertes ouvertes"}),a.jsx("strong",{children:x.openAlerts})]}),a.jsx("div",{className:"metricBar",children:a.jsx("div",{className:"metricFill gold",style:{width:`${Math.min(100,x.openAlerts*10)}%`}})})]})]})]}),a.jsxs("section",{className:"dashboardPanel alertsPanel",children:[a.jsxs("div",{className:"panelHeader",children:[a.jsxs("div",{children:[a.jsx("h3",{children:"Recent Alerts"}),a.jsx("p",{children:"Evenements recents a suivre"})]}),a.jsxs("span",{children:[((S=x.overview.recentAlerts)==null?void 0:S.length)||0," evenement(s)"]})]}),(_=x.overview.recentAlerts)!=null&&_.length?a.jsx("ul",{className:"alertsList",children:x.overview.recentAlerts.map(w=>a.jsxs("li",{className:`alertItem ${String(w.severity||"MEDIUM").toLowerCase()}`,children:[a.jsxs("div",{className:"alertItemTop",children:[a.jsx("strong",{children:w.title}),a.jsx("span",{children:UE(w.createdAt)})]}),a.jsx("p",{children:w.message})]},w.id))}):a.jsxs("div",{className:"emptyStatePanel",children:[a.jsx("strong",{children:"Aucune alerte recente"}),a.jsx("p",{children:"Le dashboard n’a remonte aucun incident critique pour le moment."})]})]}),a.jsxs("section",{className:"dashboardPanel actionsPanel",children:[a.jsxs("div",{className:"panelHeader",children:[a.jsxs("div",{children:[a.jsx("h3",{children:"Actions"}),a.jsx("p",{children:"Acces rapides"})]}),a.jsx("span",{children:"Details"})]}),a.jsxs("button",{type:"button",className:"actionButton",onClick:()=>i("/device-manager/devices"),children:[a.jsx(Mx,{size:16}),"Switches",a.jsx(nh,{size:16})]}),a.jsxs("button",{type:"button",className:"actionButton",onClick:()=>i("/device-manager/devices"),children:[a.jsx(Sx,{size:16}),"Access Points",a.jsx(nh,{size:16})]}),a.jsxs("button",{type:"button",className:"actionButton secondary",onClick:()=>i("/hotel-manager/config-wifi"),children:[a.jsx(rf,{size:16}),"Config WiFi",a.jsx(nh,{size:16})]})]})]})]})]})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fp="184",Aa={ROTATE:0,DOLLY:1,PAN:2},Ta={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},kE=0,bx=1,BE=2,Bc=1,s0=2,Oo=3,sr=0,ni=1,_s=2,Ms=0,Ra=1,wx=2,Tx=3,Cx=4,zE=5,Nr=100,HE=101,VE=102,GE=103,WE=104,XE=200,qE=201,$E=202,YE=203,of=204,lf=205,KE=206,ZE=207,JE=208,QE=209,eb=210,tb=211,nb=212,ib=213,sb=214,cf=0,uf=1,df=2,La=3,hf=4,ff=5,pf=6,mf=7,r0=0,rb=1,ab=2,Ji=0,a0=1,o0=2,l0=3,c0=4,u0=5,d0=6,h0=7,f0=300,Lr=301,Ia=302,lh=303,ch=304,ou=306,gf=1e3,ys=1001,xf=1002,Nn=1003,ob=1004,nc=1005,Un=1006,uh=1007,Rr=1008,ci=1009,p0=1010,m0=1011,Go=1012,pp=1013,es=1014,Yi=1015,ws=1016,mp=1017,gp=1018,Wo=1020,g0=35902,x0=35899,v0=1021,_0=1022,ji=1023,Ts=1026,Pr=1027,y0=1028,xp=1029,Ir=1030,vp=1031,_p=1033,zc=33776,Hc=33777,Vc=33778,Gc=33779,vf=35840,_f=35841,yf=35842,Sf=35843,Mf=36196,Ef=37492,bf=37496,wf=37488,Tf=37489,Yc=37490,Cf=37491,Nf=37808,Af=37809,Rf=37810,Pf=37811,Lf=37812,If=37813,Df=37814,jf=37815,Uf=37816,Ff=37817,Of=37818,kf=37819,Bf=37820,zf=37821,Hf=36492,Vf=36494,Gf=36495,Wf=36283,Xf=36284,Kc=36285,qf=36286,lb=3200,$f=0,cb=1,tr="",_i="srgb",Zc="srgb-linear",Jc="linear",Ot="srgb",oa=7680,Nx=519,ub=512,db=513,hb=514,yp=515,fb=516,pb=517,Sp=518,mb=519,Yf=35044,Ax="300 es",Ki=2e3,Xo=2001;function gb(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Qc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function xb(){const i=Qc("canvas");return i.style.display="block",i}const Rx={};function eu(...i){const e="THREE."+i.shift();console.log(e,...i)}function S0(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ut(...i){i=S0(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Pt(...i){i=S0(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Kf(...i){const e=i.join(" ");e in Rx||(Rx[e]=!0,ut(...i))}function vb(i,e,t){return new Promise(function(r,o){function c(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:o();break;case i.TIMEOUT_EXPIRED:setTimeout(c,t);break;default:r()}}setTimeout(c,t)})}const _b={[cf]:uf,[df]:pf,[hf]:mf,[La]:ff,[uf]:cf,[pf]:df,[mf]:hf,[ff]:La};class lr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(t);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wc=Math.PI/180,Zf=180/Math.PI;function ir(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(In[i&255]+In[i>>8&255]+In[i>>16&255]+In[i>>24&255]+"-"+In[e&255]+In[e>>8&255]+"-"+In[e>>16&15|64]+In[e>>24&255]+"-"+In[t&63|128]+In[t>>8&255]+"-"+In[t>>16&255]+In[t>>24&255]+In[r&255]+In[r>>8&255]+In[r>>16&255]+In[r>>24&255]).toLowerCase()}function Nt(i,e,t){return Math.max(e,Math.min(t,i))}function yb(i,e){return(i%e+e)%e}function dh(i,e,t){return(1-t)*i+t*e}function $i(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ht(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Sb={DEG2RAD:Wc},Pp=class Pp{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Nt(this.x,e.x,t.x),this.y=Nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Nt(this.x,e,t),this.y=Nt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Nt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Nt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*o+e.x,this.y=c*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Pp.prototype.isVector2=!0;let dt=Pp;class rr{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,c,u,h){let f=r[o+0],p=r[o+1],v=r[o+2],g=r[o+3],x=c[u+0],y=c[u+1],E=c[u+2],T=c[u+3];if(g!==T||f!==x||p!==y||v!==E){let S=f*x+p*y+v*E+g*T;S<0&&(x=-x,y=-y,E=-E,T=-T,S=-S);let _=1-h;if(S<.9995){const w=Math.acos(S),b=Math.sin(w);_=Math.sin(_*w)/b,h=Math.sin(h*w)/b,f=f*_+x*h,p=p*_+y*h,v=v*_+E*h,g=g*_+T*h}else{f=f*_+x*h,p=p*_+y*h,v=v*_+E*h,g=g*_+T*h;const w=1/Math.sqrt(f*f+p*p+v*v+g*g);f*=w,p*=w,v*=w,g*=w}}e[t]=f,e[t+1]=p,e[t+2]=v,e[t+3]=g}static multiplyQuaternionsFlat(e,t,r,o,c,u){const h=r[o],f=r[o+1],p=r[o+2],v=r[o+3],g=c[u],x=c[u+1],y=c[u+2],E=c[u+3];return e[t]=h*E+v*g+f*y-p*x,e[t+1]=f*E+v*x+p*g-h*y,e[t+2]=p*E+v*y+h*x-f*g,e[t+3]=v*E-h*g-f*x-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,c=e._z,u=e._order,h=Math.cos,f=Math.sin,p=h(r/2),v=h(o/2),g=h(c/2),x=f(r/2),y=f(o/2),E=f(c/2);switch(u){case"XYZ":this._x=x*v*g+p*y*E,this._y=p*y*g-x*v*E,this._z=p*v*E+x*y*g,this._w=p*v*g-x*y*E;break;case"YXZ":this._x=x*v*g+p*y*E,this._y=p*y*g-x*v*E,this._z=p*v*E-x*y*g,this._w=p*v*g+x*y*E;break;case"ZXY":this._x=x*v*g-p*y*E,this._y=p*y*g+x*v*E,this._z=p*v*E+x*y*g,this._w=p*v*g-x*y*E;break;case"ZYX":this._x=x*v*g-p*y*E,this._y=p*y*g+x*v*E,this._z=p*v*E-x*y*g,this._w=p*v*g+x*y*E;break;case"YZX":this._x=x*v*g+p*y*E,this._y=p*y*g+x*v*E,this._z=p*v*E-x*y*g,this._w=p*v*g-x*y*E;break;case"XZY":this._x=x*v*g-p*y*E,this._y=p*y*g-x*v*E,this._z=p*v*E+x*y*g,this._w=p*v*g+x*y*E;break;default:ut("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],c=t[8],u=t[1],h=t[5],f=t[9],p=t[2],v=t[6],g=t[10],x=r+h+g;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(v-f)*y,this._y=(c-p)*y,this._z=(u-o)*y}else if(r>h&&r>g){const y=2*Math.sqrt(1+r-h-g);this._w=(v-f)/y,this._x=.25*y,this._y=(o+u)/y,this._z=(c+p)/y}else if(h>g){const y=2*Math.sqrt(1+h-r-g);this._w=(c-p)/y,this._x=(o+u)/y,this._y=.25*y,this._z=(f+v)/y}else{const y=2*Math.sqrt(1+g-r-h);this._w=(u-o)/y,this._x=(c+p)/y,this._y=(f+v)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,c=e._z,u=e._w,h=t._x,f=t._y,p=t._z,v=t._w;return this._x=r*v+u*h+o*p-c*f,this._y=o*v+u*f+c*h-r*p,this._z=c*v+u*p+r*f-o*h,this._w=u*v-r*h-o*f-c*p,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,c=e._z,u=e._w,h=this.dot(e);h<0&&(r=-r,o=-o,c=-c,u=-u,h=-h);let f=1-t;if(h<.9995){const p=Math.acos(h),v=Math.sin(p);f=Math.sin(f*p)/v,t=Math.sin(t*p)/v,this._x=this._x*f+r*t,this._y=this._y*f+o*t,this._z=this._z*f+c*t,this._w=this._w*f+u*t,this._onChangeCallback()}else this._x=this._x*f+r*t,this._y=this._y*f+o*t,this._z=this._z*f+c*t,this._w=this._w*f+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(t),c*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Lp=class Lp{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Px.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Px.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*t+c[3]*r+c[6]*o,this.y=c[1]*t+c[4]*r+c[7]*o,this.z=c[2]*t+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,c=e.elements,u=1/(c[3]*t+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*t+c[4]*r+c[8]*o+c[12])*u,this.y=(c[1]*t+c[5]*r+c[9]*o+c[13])*u,this.z=(c[2]*t+c[6]*r+c[10]*o+c[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,c=e.x,u=e.y,h=e.z,f=e.w,p=2*(u*o-h*r),v=2*(h*t-c*o),g=2*(c*r-u*t);return this.x=t+f*p+u*g-h*v,this.y=r+f*v+h*p-c*g,this.z=o+f*g+c*v-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*o,this.y=c[1]*t+c[5]*r+c[9]*o,this.z=c[2]*t+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Nt(this.x,e.x,t.x),this.y=Nt(this.y,e.y,t.y),this.z=Nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Nt(this.x,e,t),this.y=Nt(this.y,e,t),this.z=Nt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Nt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,c=e.z,u=t.x,h=t.y,f=t.z;return this.x=o*f-c*h,this.y=c*u-r*f,this.z=r*h-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return hh.copy(this).projectOnVector(e),this.sub(hh)}reflect(e){return this.sub(hh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Nt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Lp.prototype.isVector3=!0;let ae=Lp;const hh=new ae,Px=new rr,Ip=class Ip{constructor(e,t,r,o,c,u,h,f,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,c,u,h,f,p)}set(e,t,r,o,c,u,h,f,p){const v=this.elements;return v[0]=e,v[1]=o,v[2]=h,v[3]=t,v[4]=c,v[5]=f,v[6]=r,v[7]=u,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,c=this.elements,u=r[0],h=r[3],f=r[6],p=r[1],v=r[4],g=r[7],x=r[2],y=r[5],E=r[8],T=o[0],S=o[3],_=o[6],w=o[1],b=o[4],N=o[7],I=o[2],L=o[5],B=o[8];return c[0]=u*T+h*w+f*I,c[3]=u*S+h*b+f*L,c[6]=u*_+h*N+f*B,c[1]=p*T+v*w+g*I,c[4]=p*S+v*b+g*L,c[7]=p*_+v*N+g*B,c[2]=x*T+y*w+E*I,c[5]=x*S+y*b+E*L,c[8]=x*_+y*N+E*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],f=e[6],p=e[7],v=e[8];return t*u*v-t*h*p-r*c*v+r*h*f+o*c*p-o*u*f}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],f=e[6],p=e[7],v=e[8],g=v*u-h*p,x=h*f-v*c,y=p*c-u*f,E=t*g+r*x+o*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=g*T,e[1]=(o*p-v*r)*T,e[2]=(h*r-o*u)*T,e[3]=x*T,e[4]=(v*t-o*f)*T,e[5]=(o*c-h*t)*T,e[6]=y*T,e[7]=(r*f-p*t)*T,e[8]=(u*t-r*c)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,c,u,h){const f=Math.cos(c),p=Math.sin(c);return this.set(r*f,r*p,-r*(f*u+p*h)+u+e,-o*p,o*f,-o*(-p*u+f*h)+h+t,0,0,1),this}scale(e,t){return this.premultiply(fh.makeScale(e,t)),this}rotate(e){return this.premultiply(fh.makeRotation(-e)),this}translate(e,t){return this.premultiply(fh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ip.prototype.isMatrix3=!0;let vt=Ip;const fh=new vt,Lx=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ix=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mb(){const i={enabled:!0,workingColorSpace:Zc,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Ot&&(o.r=Es(o.r),o.g=Es(o.g),o.b=Es(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ot&&(o.r=Pa(o.r),o.g=Pa(o.g),o.b=Pa(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===tr?Jc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return Kf("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return Kf("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return i.define({[Zc]:{primaries:e,whitePoint:r,transfer:Jc,toXYZ:Lx,fromXYZ:Ix,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:_i},outputColorSpaceConfig:{drawingBufferColorSpace:_i}},[_i]:{primaries:e,whitePoint:r,transfer:Ot,toXYZ:Lx,fromXYZ:Ix,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:_i}}}),i}const At=Mb();function Es(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Pa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let la;class Eb{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{la===void 0&&(la=Qc("canvas")),la.width=e.width,la.height=e.height;const o=la.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=la}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Qc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Es(c[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Es(t[r]/255)*255):t[r]=Es(t[r]);return{data:t,width:e.width,height:e.height}}else return ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bb=0;class Mp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bb++}),this.uuid=ir(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,h=o.length;u<h;u++)o[u].isDataTexture?c.push(ph(o[u].image)):c.push(ph(o[u]))}else c=ph(o);r.url=c}return t||(e.images[this.uuid]=r),r}}function ph(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Eb.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ut("Texture: Unable to serialize Texture."),{})}let wb=0;const mh=new ae;class Fn extends lr{constructor(e=Fn.DEFAULT_IMAGE,t=Fn.DEFAULT_MAPPING,r=ys,o=ys,c=Un,u=Rr,h=ji,f=ci,p=Fn.DEFAULT_ANISOTROPY,v=tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wb++}),this.uuid=ir(),this.name="",this.source=new Mp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=f,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(mh).x}get height(){return this.source.getSize(mh).y}get depth(){return this.source.getSize(mh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){ut(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ut(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==f0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gf:e.x=e.x-Math.floor(e.x);break;case ys:e.x=e.x<0?0:1;break;case xf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gf:e.y=e.y-Math.floor(e.y);break;case ys:e.y=e.y<0?0:1;break;case xf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=f0;Fn.DEFAULT_ANISOTROPY=1;const Dp=class Dp{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*c,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*c,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*c,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,c;const f=e.elements,p=f[0],v=f[4],g=f[8],x=f[1],y=f[5],E=f[9],T=f[2],S=f[6],_=f[10];if(Math.abs(v-x)<.01&&Math.abs(g-T)<.01&&Math.abs(E-S)<.01){if(Math.abs(v+x)<.1&&Math.abs(g+T)<.1&&Math.abs(E+S)<.1&&Math.abs(p+y+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(p+1)/2,N=(y+1)/2,I=(_+1)/2,L=(v+x)/4,B=(g+T)/4,C=(E+S)/4;return b>N&&b>I?b<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(b),o=L/r,c=B/r):N>I?N<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(N),r=L/o,c=C/o):I<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(I),r=B/c,o=C/c),this.set(r,o,c,t),this}let w=Math.sqrt((S-E)*(S-E)+(g-T)*(g-T)+(x-v)*(x-v));return Math.abs(w)<.001&&(w=1),this.x=(S-E)/w,this.y=(g-T)/w,this.z=(x-v)/w,this.w=Math.acos((p+y+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Nt(this.x,e.x,t.x),this.y=Nt(this.y,e.y,t.y),this.z=Nt(this.z,e.z,t.z),this.w=Nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Nt(this.x,e,t),this.y=Nt(this.y,e,t),this.z=Nt(this.z,e,t),this.w=Nt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Nt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Dp.prototype.isVector4=!0;let an=Dp;class Tb extends lr{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new an(0,0,e,t),this.scissorTest=!1,this.viewport=new an(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},c=new Fn(o),u=r.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Mp(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qi extends Tb{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class M0 extends Fn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cb extends Fn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const su=class su{constructor(e,t,r,o,c,u,h,f,p,v,g,x,y,E,T,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,c,u,h,f,p,v,g,x,y,E,T,S)}set(e,t,r,o,c,u,h,f,p,v,g,x,y,E,T,S){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=o,_[1]=c,_[5]=u,_[9]=h,_[13]=f,_[2]=p,_[6]=v,_[10]=g,_[14]=x,_[3]=y,_[7]=E,_[11]=T,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new su().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/ca.setFromMatrixColumn(e,0).length(),c=1/ca.setFromMatrixColumn(e,1).length(),u=1/ca.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*c,t[5]=r[5]*c,t[6]=r[6]*c,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,c=e.z,u=Math.cos(r),h=Math.sin(r),f=Math.cos(o),p=Math.sin(o),v=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const x=u*v,y=u*g,E=h*v,T=h*g;t[0]=f*v,t[4]=-f*g,t[8]=p,t[1]=y+E*p,t[5]=x-T*p,t[9]=-h*f,t[2]=T-x*p,t[6]=E+y*p,t[10]=u*f}else if(e.order==="YXZ"){const x=f*v,y=f*g,E=p*v,T=p*g;t[0]=x+T*h,t[4]=E*h-y,t[8]=u*p,t[1]=u*g,t[5]=u*v,t[9]=-h,t[2]=y*h-E,t[6]=T+x*h,t[10]=u*f}else if(e.order==="ZXY"){const x=f*v,y=f*g,E=p*v,T=p*g;t[0]=x-T*h,t[4]=-u*g,t[8]=E+y*h,t[1]=y+E*h,t[5]=u*v,t[9]=T-x*h,t[2]=-u*p,t[6]=h,t[10]=u*f}else if(e.order==="ZYX"){const x=u*v,y=u*g,E=h*v,T=h*g;t[0]=f*v,t[4]=E*p-y,t[8]=x*p+T,t[1]=f*g,t[5]=T*p+x,t[9]=y*p-E,t[2]=-p,t[6]=h*f,t[10]=u*f}else if(e.order==="YZX"){const x=u*f,y=u*p,E=h*f,T=h*p;t[0]=f*v,t[4]=T-x*g,t[8]=E*g+y,t[1]=g,t[5]=u*v,t[9]=-h*v,t[2]=-p*v,t[6]=y*g+E,t[10]=x-T*g}else if(e.order==="XZY"){const x=u*f,y=u*p,E=h*f,T=h*p;t[0]=f*v,t[4]=-g,t[8]=p*v,t[1]=x*g+T,t[5]=u*v,t[9]=y*g-E,t[2]=E*g-y,t[6]=h*v,t[10]=T*g+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nb,e,Ab)}lookAt(e,t,r){const o=this.elements;return oi.subVectors(e,t),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),qs.crossVectors(r,oi),qs.lengthSq()===0&&(Math.abs(r.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),qs.crossVectors(r,oi)),qs.normalize(),ic.crossVectors(oi,qs),o[0]=qs.x,o[4]=ic.x,o[8]=oi.x,o[1]=qs.y,o[5]=ic.y,o[9]=oi.y,o[2]=qs.z,o[6]=ic.z,o[10]=oi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,c=this.elements,u=r[0],h=r[4],f=r[8],p=r[12],v=r[1],g=r[5],x=r[9],y=r[13],E=r[2],T=r[6],S=r[10],_=r[14],w=r[3],b=r[7],N=r[11],I=r[15],L=o[0],B=o[4],C=o[8],O=o[12],Y=o[1],V=o[5],Q=o[9],G=o[13],ee=o[2],F=o[6],U=o[10],W=o[14],$=o[3],X=o[7],te=o[11],z=o[15];return c[0]=u*L+h*Y+f*ee+p*$,c[4]=u*B+h*V+f*F+p*X,c[8]=u*C+h*Q+f*U+p*te,c[12]=u*O+h*G+f*W+p*z,c[1]=v*L+g*Y+x*ee+y*$,c[5]=v*B+g*V+x*F+y*X,c[9]=v*C+g*Q+x*U+y*te,c[13]=v*O+g*G+x*W+y*z,c[2]=E*L+T*Y+S*ee+_*$,c[6]=E*B+T*V+S*F+_*X,c[10]=E*C+T*Q+S*U+_*te,c[14]=E*O+T*G+S*W+_*z,c[3]=w*L+b*Y+N*ee+I*$,c[7]=w*B+b*V+N*F+I*X,c[11]=w*C+b*Q+N*U+I*te,c[15]=w*O+b*G+N*W+I*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],c=e[12],u=e[1],h=e[5],f=e[9],p=e[13],v=e[2],g=e[6],x=e[10],y=e[14],E=e[3],T=e[7],S=e[11],_=e[15],w=f*y-p*x,b=h*y-p*g,N=h*x-f*g,I=u*y-p*v,L=u*x-f*v,B=u*g-h*v;return t*(T*w-S*b+_*N)-r*(E*w-S*I+_*L)+o*(E*b-T*I+_*B)-c*(E*N-T*L+S*B)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],f=e[6],p=e[7],v=e[8],g=e[9],x=e[10],y=e[11],E=e[12],T=e[13],S=e[14],_=e[15],w=t*h-r*u,b=t*f-o*u,N=t*p-c*u,I=r*f-o*h,L=r*p-c*h,B=o*p-c*f,C=v*T-g*E,O=v*S-x*E,Y=v*_-y*E,V=g*S-x*T,Q=g*_-y*T,G=x*_-y*S,ee=w*G-b*Q+N*V+I*Y-L*O+B*C;if(ee===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/ee;return e[0]=(h*G-f*Q+p*V)*F,e[1]=(o*Q-r*G-c*V)*F,e[2]=(T*B-S*L+_*I)*F,e[3]=(x*L-g*B-y*I)*F,e[4]=(f*Y-u*G-p*O)*F,e[5]=(t*G-o*Y+c*O)*F,e[6]=(S*N-E*B-_*b)*F,e[7]=(v*B-x*N+y*b)*F,e[8]=(u*Q-h*Y+p*C)*F,e[9]=(r*Y-t*Q-c*C)*F,e[10]=(E*L-T*N+_*w)*F,e[11]=(g*N-v*L-y*w)*F,e[12]=(h*O-u*V-f*C)*F,e[13]=(t*V-r*O+o*C)*F,e[14]=(T*b-E*I-S*w)*F,e[15]=(v*I-g*b+x*w)*F,this}scale(e){const t=this.elements,r=e.x,o=e.y,c=e.z;return t[0]*=r,t[4]*=o,t[8]*=c,t[1]*=r,t[5]*=o,t[9]*=c,t[2]*=r,t[6]*=o,t[10]*=c,t[3]*=r,t[7]*=o,t[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),c=1-r,u=e.x,h=e.y,f=e.z,p=c*u,v=c*h;return this.set(p*u+r,p*h-o*f,p*f+o*h,0,p*h+o*f,v*h+r,v*f-o*u,0,p*f-o*h,v*f+o*u,c*f*f+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,c,u){return this.set(1,r,c,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,c=t._x,u=t._y,h=t._z,f=t._w,p=c+c,v=u+u,g=h+h,x=c*p,y=c*v,E=c*g,T=u*v,S=u*g,_=h*g,w=f*p,b=f*v,N=f*g,I=r.x,L=r.y,B=r.z;return o[0]=(1-(T+_))*I,o[1]=(y+N)*I,o[2]=(E-b)*I,o[3]=0,o[4]=(y-N)*L,o[5]=(1-(x+_))*L,o[6]=(S+w)*L,o[7]=0,o[8]=(E+b)*B,o[9]=(S-w)*B,o[10]=(1-(x+T))*B,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinant();if(c===0)return r.set(1,1,1),t.identity(),this;let u=ca.set(o[0],o[1],o[2]).length();const h=ca.set(o[4],o[5],o[6]).length(),f=ca.set(o[8],o[9],o[10]).length();c<0&&(u=-u),Li.copy(this);const p=1/u,v=1/h,g=1/f;return Li.elements[0]*=p,Li.elements[1]*=p,Li.elements[2]*=p,Li.elements[4]*=v,Li.elements[5]*=v,Li.elements[6]*=v,Li.elements[8]*=g,Li.elements[9]*=g,Li.elements[10]*=g,t.setFromRotationMatrix(Li),r.x=u,r.y=h,r.z=f,this}makePerspective(e,t,r,o,c,u,h=Ki,f=!1){const p=this.elements,v=2*c/(t-e),g=2*c/(r-o),x=(t+e)/(t-e),y=(r+o)/(r-o);let E,T;if(f)E=c/(u-c),T=u*c/(u-c);else if(h===Ki)E=-(u+c)/(u-c),T=-2*u*c/(u-c);else if(h===Xo)E=-u/(u-c),T=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=g,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,o,c,u,h=Ki,f=!1){const p=this.elements,v=2/(t-e),g=2/(r-o),x=-(t+e)/(t-e),y=-(r+o)/(r-o);let E,T;if(f)E=1/(u-c),T=u/(u-c);else if(h===Ki)E=-2/(u-c),T=-(u+c)/(u-c);else if(h===Xo)E=-1/(u-c),T=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=g,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};su.prototype.isMatrix4=!0;let sn=su;const ca=new ae,Li=new sn,Nb=new ae(0,0,0),Ab=new ae(1,1,1),qs=new ae,ic=new ae,oi=new ae,Dx=new sn,jx=new rr;class ar{constructor(e=0,t=0,r=0,o=ar.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,c=o[0],u=o[4],h=o[8],f=o[1],p=o[5],v=o[9],g=o[2],x=o[6],y=o[10];switch(t){case"XYZ":this._y=Math.asin(Nt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,y),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(f,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(f,c));break;case"ZYX":this._y=Math.asin(-Nt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(f,c)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Nt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-Nt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-v,y),this._y=0);break;default:ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Dx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dx,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jx.setFromEuler(this),this.setFromQuaternion(jx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ar.DEFAULT_ORDER="XYZ";class E0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Rb=0;const Ux=new ae,ua=new rr,ps=new sn,sc=new ae,To=new ae,Pb=new ae,Lb=new rr,Fx=new ae(1,0,0),Ox=new ae(0,1,0),kx=new ae(0,0,1),Bx={type:"added"},Ib={type:"removed"},da={type:"childadded",child:null},gh={type:"childremoved",child:null};class gn extends lr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rb++}),this.uuid=ir(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gn.DEFAULT_UP.clone();const e=new ae,t=new ar,r=new rr,o=new ae(1,1,1);function c(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new sn},normalMatrix:{value:new vt}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new E0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ua.setFromAxisAngle(e,t),this.quaternion.multiply(ua),this}rotateOnWorldAxis(e,t){return ua.setFromAxisAngle(e,t),this.quaternion.premultiply(ua),this}rotateX(e){return this.rotateOnAxis(Fx,e)}rotateY(e){return this.rotateOnAxis(Ox,e)}rotateZ(e){return this.rotateOnAxis(kx,e)}translateOnAxis(e,t){return Ux.copy(e).applyQuaternion(this.quaternion),this.position.add(Ux.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fx,e)}translateY(e){return this.translateOnAxis(Ox,e)}translateZ(e){return this.translateOnAxis(kx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ps.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?sc.copy(e):sc.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),To.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ps.lookAt(To,sc,this.up):ps.lookAt(sc,To,this.up),this.quaternion.setFromRotationMatrix(ps),o&&(ps.extractRotation(o.matrixWorld),ua.setFromRotationMatrix(ps),this.quaternion.premultiply(ua.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bx),da.child=e,this.dispatchEvent(da),da.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ib),gh.child=e,this.dispatchEvent(gh),gh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ps.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ps.multiply(e.parent.matrixWorld)),e.applyMatrix4(ps),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bx),da.child=e,this.dispatchEvent(da),da.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,e,Pb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,Lb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,c=this.matrix.elements;c[12]+=t-c[0]*t-c[4]*r-c[8]*o,c[13]+=r-c[1]*t-c[5]*r-c[9]*o,c[14]+=o-c[2]*t-c[6]*r-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(h,f){return h[f.uuid]===void 0&&(h[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const f=h.shapes;if(Array.isArray(f))for(let p=0,v=f.length;p<v;p++){const g=f[p];c(e.shapes,g)}else c(e.shapes,f)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let f=0,p=this.material.length;f<p;f++)h.push(c(e.materials,this.material[f]));o.material=h}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const f=this.animations[h];o.animations.push(c(e.animations,f))}}if(t){const h=u(e.geometries),f=u(e.materials),p=u(e.textures),v=u(e.images),g=u(e.shapes),x=u(e.skeletons),y=u(e.animations),E=u(e.nodes);h.length>0&&(r.geometries=h),f.length>0&&(r.materials=f),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),g.length>0&&(r.shapes=g),x.length>0&&(r.skeletons=x),y.length>0&&(r.animations=y),E.length>0&&(r.nodes=E)}return r.object=o,r;function u(h){const f=[];for(const p in h){const v=h[p];delete v.metadata,f.push(v)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}gn.DEFAULT_UP=new ae(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class rc extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Db={type:"move"};class xh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ae,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ae),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ae,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ae,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,c=null,u=null;const h=this._targetRay,f=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const T of e.hand.values()){const S=t.getJointPose(T,r),_=this._getHandJoint(p,T);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const v=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],x=v.position.distanceTo(g.position),y=.02,E=.005;p.inputState.pinching&&x>y+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=y-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(c=t.getPose(e.gripSpace,r),c!==null&&(f.matrix.fromArray(c.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,c.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(c.linearVelocity)):f.hasLinearVelocity=!1,c.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(c.angularVelocity)):f.hasAngularVelocity=!1,f.eventsEnabled&&f.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Db)))}return h!==null&&(h.visible=o!==null),f!==null&&(f.visible=c!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new rc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const b0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$s={h:0,s:0,l:0},ac={h:0,s:0,l:0};function vh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ct{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_i){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=At.workingColorSpace){return this.r=e,this.g=t,this.b=r,At.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=At.workingColorSpace){if(e=yb(e,1),t=Nt(t,0,1),r=Nt(r,0,1),t===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+t):r+t-r*t,u=2*r-c;this.r=vh(u,c,e+1/3),this.g=vh(u,c,e),this.b=vh(u,c,e-1/3)}return At.colorSpaceToWorking(this,o),this}setStyle(e,t=_i){function r(c){c!==void 0&&parseFloat(c)<1&&ut("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],h=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,t);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,t);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,t);break;default:ut("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(c,16),t);ut("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_i){const r=b0[e.toLowerCase()];return r!==void 0?this.setHex(r,t):ut("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Es(e.r),this.g=Es(e.g),this.b=Es(e.b),this}copyLinearToSRGB(e){return this.r=Pa(e.r),this.g=Pa(e.g),this.b=Pa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_i){return At.workingToColorSpace(Dn.copy(this),e),Math.round(Nt(Dn.r*255,0,255))*65536+Math.round(Nt(Dn.g*255,0,255))*256+Math.round(Nt(Dn.b*255,0,255))}getHexString(e=_i){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.workingToColorSpace(Dn.copy(this),t);const r=Dn.r,o=Dn.g,c=Dn.b,u=Math.max(r,o,c),h=Math.min(r,o,c);let f,p;const v=(h+u)/2;if(h===u)f=0,p=0;else{const g=u-h;switch(p=v<=.5?g/(u+h):g/(2-u-h),u){case r:f=(o-c)/g+(o<c?6:0);break;case o:f=(c-r)/g+2;break;case c:f=(r-o)/g+4;break}f/=6}return e.h=f,e.s=p,e.l=v,e}getRGB(e,t=At.workingColorSpace){return At.workingToColorSpace(Dn.copy(this),t),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=_i){At.workingToColorSpace(Dn.copy(this),e);const t=Dn.r,r=Dn.g,o=Dn.b;return e!==_i?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL($s),this.setHSL($s.h+e,$s.s+t,$s.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL($s),e.getHSL(ac);const r=dh($s.h,ac.h,t),o=dh($s.s,ac.s,t),c=dh($s.l,ac.l,t);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*t+c[3]*r+c[6]*o,this.g=c[1]*t+c[4]*r+c[7]*o,this.b=c[2]*t+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new Ct;Ct.NAMES=b0;class Ep{constructor(e,t=1,r=1e3){this.isFog=!0,this.name="",this.color=new Ct(e),this.near=t,this.far=r}clone(){return new Ep(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class jb extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ar,this.environmentIntensity=1,this.environmentRotation=new ar,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ii=new ae,ms=new ae,_h=new ae,gs=new ae,ha=new ae,fa=new ae,zx=new ae,yh=new ae,Sh=new ae,Mh=new ae,Eh=new an,bh=new an,wh=new an;class Si{constructor(e=new ae,t=new ae,r=new ae){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Ii.subVectors(e,t),o.cross(Ii);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,t,r,o,c){Ii.subVectors(o,t),ms.subVectors(r,t),_h.subVectors(e,t);const u=Ii.dot(Ii),h=Ii.dot(ms),f=Ii.dot(_h),p=ms.dot(ms),v=ms.dot(_h),g=u*p-h*h;if(g===0)return c.set(0,0,0),null;const x=1/g,y=(p*f-h*v)*x,E=(u*v-h*f)*x;return c.set(1-y-E,E,y)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,gs)===null?!1:gs.x>=0&&gs.y>=0&&gs.x+gs.y<=1}static getInterpolation(e,t,r,o,c,u,h,f){return this.getBarycoord(e,t,r,o,gs)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(c,gs.x),f.addScaledVector(u,gs.y),f.addScaledVector(h,gs.z),f)}static getInterpolatedAttribute(e,t,r,o,c,u){return Eh.setScalar(0),bh.setScalar(0),wh.setScalar(0),Eh.fromBufferAttribute(e,t),bh.fromBufferAttribute(e,r),wh.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Eh,c.x),u.addScaledVector(bh,c.y),u.addScaledVector(wh,c.z),u}static isFrontFacing(e,t,r,o){return Ii.subVectors(r,t),ms.subVectors(e,t),Ii.cross(ms).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ii.subVectors(this.c,this.b),ms.subVectors(this.a,this.b),Ii.cross(ms).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Si.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,c){return Si.getInterpolation(e,this.a,this.b,this.c,t,r,o,c)}containsPoint(e){return Si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,c=this.c;let u,h;ha.subVectors(o,r),fa.subVectors(c,r),yh.subVectors(e,r);const f=ha.dot(yh),p=fa.dot(yh);if(f<=0&&p<=0)return t.copy(r);Sh.subVectors(e,o);const v=ha.dot(Sh),g=fa.dot(Sh);if(v>=0&&g<=v)return t.copy(o);const x=f*g-v*p;if(x<=0&&f>=0&&v<=0)return u=f/(f-v),t.copy(r).addScaledVector(ha,u);Mh.subVectors(e,c);const y=ha.dot(Mh),E=fa.dot(Mh);if(E>=0&&y<=E)return t.copy(c);const T=y*p-f*E;if(T<=0&&p>=0&&E<=0)return h=p/(p-E),t.copy(r).addScaledVector(fa,h);const S=v*E-y*g;if(S<=0&&g-v>=0&&y-E>=0)return zx.subVectors(c,o),h=(g-v)/(g-v+(y-E)),t.copy(o).addScaledVector(zx,h);const _=1/(S+T+x);return u=T*_,h=x*_,t.copy(r).addScaledVector(ha,u).addScaledVector(fa,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ko{constructor(e=new ae(1/0,1/0,1/0),t=new ae(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(t===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,Di):Di.fromBufferAttribute(c,u),Di.applyMatrix4(e.matrixWorld),this.expandByPoint(Di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),oc.copy(r.boundingBox)),oc.applyMatrix4(e.matrixWorld),this.union(oc)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Di),Di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Co),lc.subVectors(this.max,Co),pa.subVectors(e.a,Co),ma.subVectors(e.b,Co),ga.subVectors(e.c,Co),Ys.subVectors(ma,pa),Ks.subVectors(ga,ma),br.subVectors(pa,ga);let t=[0,-Ys.z,Ys.y,0,-Ks.z,Ks.y,0,-br.z,br.y,Ys.z,0,-Ys.x,Ks.z,0,-Ks.x,br.z,0,-br.x,-Ys.y,Ys.x,0,-Ks.y,Ks.x,0,-br.y,br.x,0];return!Th(t,pa,ma,ga,lc)||(t=[1,0,0,0,1,0,0,0,1],!Th(t,pa,ma,ga,lc))?!1:(cc.crossVectors(Ys,Ks),t=[cc.x,cc.y,cc.z],Th(t,pa,ma,ga,lc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const xs=[new ae,new ae,new ae,new ae,new ae,new ae,new ae,new ae],Di=new ae,oc=new Ko,pa=new ae,ma=new ae,ga=new ae,Ys=new ae,Ks=new ae,br=new ae,Co=new ae,lc=new ae,cc=new ae,wr=new ae;function Th(i,e,t,r,o){for(let c=0,u=i.length-3;c<=u;c+=3){wr.fromArray(i,c);const h=o.x*Math.abs(wr.x)+o.y*Math.abs(wr.y)+o.z*Math.abs(wr.z),f=e.dot(wr),p=t.dot(wr),v=r.dot(wr);if(Math.max(-Math.max(f,p,v),Math.min(f,p,v))>h)return!1}return!0}const dn=new ae,uc=new dt;let Ub=0;class Ui extends lr{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ub++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Yf,this.updateRanges=[],this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)uc.fromBufferAttribute(this,t),uc.applyMatrix3(e),this.setXY(t,uc.x,uc.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix3(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=$i(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Ht(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$i(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$i(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$i(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),r=Ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),r=Ht(r,this.array),o=Ht(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,c){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),r=Ht(r,this.array),o=Ht(o,this.array),c=Ht(c,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yf&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class w0 extends Ui{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class T0 extends Ui{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class xn extends Ui{constructor(e,t,r){super(new Float32Array(e),t,r)}}const Fb=new Ko,No=new ae,Ch=new ae;class lu{constructor(e=new ae,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Fb.setFromPoints(e).getCenter(r);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;No.subVectors(e,this.center);const t=No.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(No,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ch.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(No.copy(e.center).add(Ch)),this.expandByPoint(No.copy(e.center).sub(Ch))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Ob=0;const vi=new sn,Nh=new gn,xa=new ae,li=new Ko,Ao=new Ko,En=new ae;class Xn extends lr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ob++}),this.uuid=ir(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gb(e)?T0:w0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new vt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vi.makeRotationFromQuaternion(e),this.applyMatrix4(vi),this}rotateX(e){return vi.makeRotationX(e),this.applyMatrix4(vi),this}rotateY(e){return vi.makeRotationY(e),this.applyMatrix4(vi),this}rotateZ(e){return vi.makeRotationZ(e),this.applyMatrix4(vi),this}translate(e,t,r){return vi.makeTranslation(e,t,r),this.applyMatrix4(vi),this}scale(e,t,r){return vi.makeScale(e,t,r),this.applyMatrix4(vi),this}lookAt(e){return Nh.lookAt(e),Nh.updateMatrix(),this.applyMatrix4(Nh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xa).negate(),this.translate(xa.x,xa.y,xa.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new xn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const c=e[o];t.setXYZ(o,c.x,c.y,c.z||0)}e.length>t.count&&ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ko);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ae(-1/0,-1/0,-1/0),new ae(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const c=t[r];li.setFromBufferAttribute(c),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ae,1/0);return}if(e){const r=this.boundingSphere.center;if(li.setFromBufferAttribute(e),t)for(let c=0,u=t.length;c<u;c++){const h=t[c];Ao.setFromBufferAttribute(h),this.morphTargetsRelative?(En.addVectors(li.min,Ao.min),li.expandByPoint(En),En.addVectors(li.max,Ao.max),li.expandByPoint(En)):(li.expandByPoint(Ao.min),li.expandByPoint(Ao.max))}li.getCenter(r);let o=0;for(let c=0,u=e.count;c<u;c++)En.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(En));if(t)for(let c=0,u=t.length;c<u;c++){const h=t[c],f=this.morphTargetsRelative;for(let p=0,v=h.count;p<v;p++)En.fromBufferAttribute(h,p),f&&(xa.fromBufferAttribute(e,p),En.add(xa)),o=Math.max(o,r.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,c=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ui(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),h=[],f=[];for(let C=0;C<r.count;C++)h[C]=new ae,f[C]=new ae;const p=new ae,v=new ae,g=new ae,x=new dt,y=new dt,E=new dt,T=new ae,S=new ae;function _(C,O,Y){p.fromBufferAttribute(r,C),v.fromBufferAttribute(r,O),g.fromBufferAttribute(r,Y),x.fromBufferAttribute(c,C),y.fromBufferAttribute(c,O),E.fromBufferAttribute(c,Y),v.sub(p),g.sub(p),y.sub(x),E.sub(x);const V=1/(y.x*E.y-E.x*y.y);isFinite(V)&&(T.copy(v).multiplyScalar(E.y).addScaledVector(g,-y.y).multiplyScalar(V),S.copy(g).multiplyScalar(y.x).addScaledVector(v,-E.x).multiplyScalar(V),h[C].add(T),h[O].add(T),h[Y].add(T),f[C].add(S),f[O].add(S),f[Y].add(S))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let C=0,O=w.length;C<O;++C){const Y=w[C],V=Y.start,Q=Y.count;for(let G=V,ee=V+Q;G<ee;G+=3)_(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const b=new ae,N=new ae,I=new ae,L=new ae;function B(C){I.fromBufferAttribute(o,C),L.copy(I);const O=h[C];b.copy(O),b.sub(I.multiplyScalar(I.dot(O))).normalize(),N.crossVectors(L,O);const V=N.dot(f[C])<0?-1:1;u.setXYZW(C,b.x,b.y,b.z,V)}for(let C=0,O=w.length;C<O;++C){const Y=w[C],V=Y.start,Q=Y.count;for(let G=V,ee=V+Q;G<ee;G+=3)B(e.getX(G+0)),B(e.getX(G+1)),B(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ui(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let x=0,y=r.count;x<y;x++)r.setXYZ(x,0,0,0);const o=new ae,c=new ae,u=new ae,h=new ae,f=new ae,p=new ae,v=new ae,g=new ae;if(e)for(let x=0,y=e.count;x<y;x+=3){const E=e.getX(x+0),T=e.getX(x+1),S=e.getX(x+2);o.fromBufferAttribute(t,E),c.fromBufferAttribute(t,T),u.fromBufferAttribute(t,S),v.subVectors(u,c),g.subVectors(o,c),v.cross(g),h.fromBufferAttribute(r,E),f.fromBufferAttribute(r,T),p.fromBufferAttribute(r,S),h.add(v),f.add(v),p.add(v),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(T,f.x,f.y,f.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let x=0,y=t.count;x<y;x+=3)o.fromBufferAttribute(t,x+0),c.fromBufferAttribute(t,x+1),u.fromBufferAttribute(t,x+2),v.subVectors(u,c),g.subVectors(o,c),v.cross(g),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)En.fromBufferAttribute(e,t),En.normalize(),e.setXYZ(t,En.x,En.y,En.z)}toNonIndexed(){function e(h,f){const p=h.array,v=h.itemSize,g=h.normalized,x=new p.constructor(f.length*v);let y=0,E=0;for(let T=0,S=f.length;T<S;T++){h.isInterleavedBufferAttribute?y=f[T]*h.data.stride+h.offset:y=f[T]*v;for(let _=0;_<v;_++)x[E++]=p[y++]}return new Ui(x,v,g)}if(this.index===null)return ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xn,r=this.index.array,o=this.attributes;for(const h in o){const f=o[h],p=e(f,r);t.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const f=[],p=c[h];for(let v=0,g=p.length;v<g;v++){const x=p[v],y=e(x,r);f.push(y)}t.morphAttributes[h]=f}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,f=u.length;h<f;h++){const p=u[h];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const p in f)f[p]!==void 0&&(e[p]=f[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const f in r){const p=r[f];e.data.attributes[f]=p.toJSON(e.data)}const o={};let c=!1;for(const f in this.morphAttributes){const p=this.morphAttributes[f],v=[];for(let g=0,x=p.length;g<x;g++){const y=p[g];v.push(y.toJSON(e.data))}v.length>0&&(o[f]=v,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const v=o[p];this.setAttribute(p,v.clone(t))}const c=e.morphAttributes;for(const p in c){const v=[],g=c[p];for(let x=0,y=g.length;x<y;x++)v.push(g[x].clone(t));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,v=u.length;p<v;p++){const g=u[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kb{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Yf,this.updateRanges=[],this.version=0,this.uuid=ir()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let o=0,c=this.stride;o<c;o++)this.array[e+o]=t.array[r+o];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ir()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(t,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ir()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const zn=new ae;class tu{constructor(e,t,r,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=r,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,r=this.data.count;t<r;t++)zn.fromBufferAttribute(this,t),zn.applyMatrix4(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)zn.fromBufferAttribute(this,t),zn.applyNormalMatrix(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)zn.fromBufferAttribute(this,t),zn.transformDirection(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}getComponent(e,t){let r=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(r=$i(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Ht(r,this.array)),this.data.array[e*this.data.stride+this.offset+t]=r,this}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=$i(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=$i(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=$i(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=$i(t,this.array)),t}setXY(e,t,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),r=Ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this}setXYZ(e,t,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),r=Ht(r,this.array),o=Ht(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=o,this}setXYZW(e,t,r,o,c){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),r=Ht(r,this.array),o=Ht(o,this.array),c=Ht(c,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=o,this.data.array[e+3]=c,this}clone(e){if(e===void 0){eu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)t.push(this.data.array[o+c])}return new Ui(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new tu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){eu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)t.push(this.data.array[o+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Bb=0;class jr extends lr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bb++}),this.uuid=ir(),this.name="",this.type="Material",this.blending=Ra,this.side=sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=of,this.blendDst=lf,this.blendEquation=Nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=La,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oa,this.stencilZFail=oa,this.stencilZPass=oa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){ut(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ut(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ra&&(r.blending=this.blending),this.side!==sr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==of&&(r.blendSrc=this.blendSrc),this.blendDst!==lf&&(r.blendDst=this.blendDst),this.blendEquation!==Nr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==La&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nx&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==oa&&(r.stencilFail=this.stencilFail),this.stencilZFail!==oa&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==oa&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const u=[];for(const h in c){const f=c[h];delete f.metadata,u.push(f)}return u}if(t){const c=o(e.textures),u=o(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=t[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class C0 extends jr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let va;const Ro=new ae,_a=new ae,ya=new ae,Sa=new dt,Po=new dt,N0=new sn,dc=new ae,Lo=new ae,hc=new ae,Hx=new dt,Ah=new dt,Vx=new dt;class zb extends gn{constructor(e=new C0){if(super(),this.isSprite=!0,this.type="Sprite",va===void 0){va=new Xn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new kb(t,5);va.setIndex([0,1,2,0,2,3]),va.setAttribute("position",new tu(r,3,0,!1)),va.setAttribute("uv",new tu(r,2,3,!1))}this.geometry=va,this.material=e,this.center=new dt(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Pt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_a.setFromMatrixScale(this.matrixWorld),N0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ya.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_a.multiplyScalar(-ya.z);const r=this.material.rotation;let o,c;r!==0&&(c=Math.cos(r),o=Math.sin(r));const u=this.center;fc(dc.set(-.5,-.5,0),ya,u,_a,o,c),fc(Lo.set(.5,-.5,0),ya,u,_a,o,c),fc(hc.set(.5,.5,0),ya,u,_a,o,c),Hx.set(0,0),Ah.set(1,0),Vx.set(1,1);let h=e.ray.intersectTriangle(dc,Lo,hc,!1,Ro);if(h===null&&(fc(Lo.set(-.5,.5,0),ya,u,_a,o,c),Ah.set(0,1),h=e.ray.intersectTriangle(dc,hc,Lo,!1,Ro),h===null))return;const f=e.ray.origin.distanceTo(Ro);f<e.near||f>e.far||t.push({distance:f,point:Ro.clone(),uv:Si.getInterpolation(Ro,dc,Lo,hc,Hx,Ah,Vx,new dt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function fc(i,e,t,r,o,c){Sa.subVectors(i,t).addScalar(.5).multiply(r),o!==void 0?(Po.x=c*Sa.x-o*Sa.y,Po.y=o*Sa.x+c*Sa.y):Po.copy(Sa),i.copy(e),i.x+=Po.x,i.y+=Po.y,i.applyMatrix4(N0)}const vs=new ae,Rh=new ae,pc=new ae,Zs=new ae,Ph=new ae,mc=new ae,Lh=new ae;class bp{constructor(e=new ae,t=new ae(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vs.copy(this.origin).addScaledVector(this.direction,t),vs.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Rh.copy(e).add(t).multiplyScalar(.5),pc.copy(t).sub(e).normalize(),Zs.copy(this.origin).sub(Rh);const c=e.distanceTo(t)*.5,u=-this.direction.dot(pc),h=Zs.dot(this.direction),f=-Zs.dot(pc),p=Zs.lengthSq(),v=Math.abs(1-u*u);let g,x,y,E;if(v>0)if(g=u*f-h,x=u*h-f,E=c*v,g>=0)if(x>=-E)if(x<=E){const T=1/v;g*=T,x*=T,y=g*(g+u*x+2*h)+x*(u*g+x+2*f)+p}else x=c,g=Math.max(0,-(u*x+h)),y=-g*g+x*(x+2*f)+p;else x=-c,g=Math.max(0,-(u*x+h)),y=-g*g+x*(x+2*f)+p;else x<=-E?(g=Math.max(0,-(-u*c+h)),x=g>0?-c:Math.min(Math.max(-c,-f),c),y=-g*g+x*(x+2*f)+p):x<=E?(g=0,x=Math.min(Math.max(-c,-f),c),y=x*(x+2*f)+p):(g=Math.max(0,-(u*c+h)),x=g>0?c:Math.min(Math.max(-c,-f),c),y=-g*g+x*(x+2*f)+p);else x=u>0?-c:c,g=Math.max(0,-(u*x+h)),y=-g*g+x*(x+2*f)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(Rh).addScaledVector(pc,x),y}intersectSphere(e,t){vs.subVectors(e.center,this.origin);const r=vs.dot(this.direction),o=vs.dot(vs)-r*r,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),h=r-u,f=r+u;return f<0?null:h<0?this.at(f,t):this.at(h,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,c,u,h,f;const p=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,o=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,o=(e.min.x-x.x)*p),v>=0?(c=(e.min.y-x.y)*v,u=(e.max.y-x.y)*v):(c=(e.max.y-x.y)*v,u=(e.min.y-x.y)*v),r>u||c>o||((c>r||isNaN(r))&&(r=c),(u<o||isNaN(o))&&(o=u),g>=0?(h=(e.min.z-x.z)*g,f=(e.max.z-x.z)*g):(h=(e.max.z-x.z)*g,f=(e.min.z-x.z)*g),r>f||h>o)||((h>r||r!==r)&&(r=h),(f<o||o!==o)&&(o=f),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,vs)!==null}intersectTriangle(e,t,r,o,c){Ph.subVectors(t,e),mc.subVectors(r,e),Lh.crossVectors(Ph,mc);let u=this.direction.dot(Lh),h;if(u>0){if(o)return null;h=1}else if(u<0)h=-1,u=-u;else return null;Zs.subVectors(this.origin,e);const f=h*this.direction.dot(mc.crossVectors(Zs,mc));if(f<0)return null;const p=h*this.direction.dot(Ph.cross(Zs));if(p<0||f+p>u)return null;const v=-h*Zs.dot(Lh);return v<0?null:this.at(v/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class A0 extends jr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ar,this.combine=r0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gx=new sn,Tr=new bp,gc=new lu,Wx=new ae,xc=new ae,vc=new ae,_c=new ae,Ih=new ae,yc=new ae,Xx=new ae,Sc=new ae;class Fi extends gn{constructor(e=new Xn,t=new A0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(c&&h){yc.set(0,0,0);for(let f=0,p=c.length;f<p;f++){const v=h[f],g=c[f];v!==0&&(Ih.fromBufferAttribute(g,e),u?yc.addScaledVector(Ih,v):yc.addScaledVector(Ih.sub(t),v))}t.add(yc)}return t}raycast(e,t){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),gc.copy(r.boundingSphere),gc.applyMatrix4(c),Tr.copy(e.ray).recast(e.near),!(gc.containsPoint(Tr.origin)===!1&&(Tr.intersectSphere(gc,Wx)===null||Tr.origin.distanceToSquared(Wx)>(e.far-e.near)**2))&&(Gx.copy(c).invert(),Tr.copy(e.ray).applyMatrix4(Gx),!(r.boundingBox!==null&&Tr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Tr)))}_computeIntersections(e,t,r){let o;const c=this.geometry,u=this.material,h=c.index,f=c.attributes.position,p=c.attributes.uv,v=c.attributes.uv1,g=c.attributes.normal,x=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(u))for(let E=0,T=x.length;E<T;E++){const S=x[E],_=u[S.materialIndex],w=Math.max(S.start,y.start),b=Math.min(h.count,Math.min(S.start+S.count,y.start+y.count));for(let N=w,I=b;N<I;N+=3){const L=h.getX(N),B=h.getX(N+1),C=h.getX(N+2);o=Mc(this,_,e,r,p,v,g,L,B,C),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const E=Math.max(0,y.start),T=Math.min(h.count,y.start+y.count);for(let S=E,_=T;S<_;S+=3){const w=h.getX(S),b=h.getX(S+1),N=h.getX(S+2);o=Mc(this,u,e,r,p,v,g,w,b,N),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(f!==void 0)if(Array.isArray(u))for(let E=0,T=x.length;E<T;E++){const S=x[E],_=u[S.materialIndex],w=Math.max(S.start,y.start),b=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let N=w,I=b;N<I;N+=3){const L=N,B=N+1,C=N+2;o=Mc(this,_,e,r,p,v,g,L,B,C),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const E=Math.max(0,y.start),T=Math.min(f.count,y.start+y.count);for(let S=E,_=T;S<_;S+=3){const w=S,b=S+1,N=S+2;o=Mc(this,u,e,r,p,v,g,w,b,N),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function Hb(i,e,t,r,o,c,u,h){let f;if(e.side===ni?f=r.intersectTriangle(u,c,o,!0,h):f=r.intersectTriangle(o,c,u,e.side===sr,h),f===null)return null;Sc.copy(h),Sc.applyMatrix4(i.matrixWorld);const p=t.ray.origin.distanceTo(Sc);return p<t.near||p>t.far?null:{distance:p,point:Sc.clone(),object:i}}function Mc(i,e,t,r,o,c,u,h,f,p){i.getVertexPosition(h,xc),i.getVertexPosition(f,vc),i.getVertexPosition(p,_c);const v=Hb(i,e,t,r,xc,vc,_c,Xx);if(v){const g=new ae;Si.getBarycoord(Xx,xc,vc,_c,g),o&&(v.uv=Si.getInterpolatedAttribute(o,h,f,p,g,new dt)),c&&(v.uv1=Si.getInterpolatedAttribute(c,h,f,p,g,new dt)),u&&(v.normal=Si.getInterpolatedAttribute(u,h,f,p,g,new ae),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const x={a:h,b:f,c:p,normal:new ae,materialIndex:0};Si.getNormal(xc,vc,_c,x.normal),v.face=x,v.barycoord=g}return v}class Vb extends Fn{constructor(e=null,t=1,r=1,o,c,u,h,f,p=Nn,v=Nn,g,x){super(null,u,h,f,p,v,o,c,g,x),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Dh=new ae,Gb=new ae,Wb=new vt;class er{constructor(e=new ae(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Dh.subVectors(r,t).cross(Gb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(Dh),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Wb.getNormalMatrix(e),o=this.coplanarPoint(Dh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cr=new lu,Xb=new dt(.5,.5),Ec=new ae;class wp{constructor(e=new er,t=new er,r=new er,o=new er,c=new er,u=new er){this.planes=[e,t,r,o,c,u]}set(e,t,r,o,c,u){const h=this.planes;return h[0].copy(e),h[1].copy(t),h[2].copy(r),h[3].copy(o),h[4].copy(c),h[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Ki,r=!1){const o=this.planes,c=e.elements,u=c[0],h=c[1],f=c[2],p=c[3],v=c[4],g=c[5],x=c[6],y=c[7],E=c[8],T=c[9],S=c[10],_=c[11],w=c[12],b=c[13],N=c[14],I=c[15];if(o[0].setComponents(p-u,y-v,_-E,I-w).normalize(),o[1].setComponents(p+u,y+v,_+E,I+w).normalize(),o[2].setComponents(p+h,y+g,_+T,I+b).normalize(),o[3].setComponents(p-h,y-g,_-T,I-b).normalize(),r)o[4].setComponents(f,x,S,N).normalize(),o[5].setComponents(p-f,y-x,_-S,I-N).normalize();else if(o[4].setComponents(p-f,y-x,_-S,I-N).normalize(),t===Ki)o[5].setComponents(p+f,y+x,_+S,I+N).normalize();else if(t===Xo)o[5].setComponents(f,x,S,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Cr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cr)}intersectsSprite(e){Cr.center.set(0,0,0);const t=Xb.distanceTo(e.center);return Cr.radius=.7071067811865476+t,Cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(t[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Ec.x=o.normal.x>0?e.max.x:e.min.x,Ec.y=o.normal.y>0?e.max.y:e.min.y,Ec.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Ec)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Tp extends jr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const nu=new ae,iu=new ae,qx=new sn,Io=new bp,bc=new lu,jh=new ae,$x=new ae;class R0 extends gn{constructor(e=new Xn,t=new Tp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,c=t.count;o<c;o++)nu.fromBufferAttribute(t,o-1),iu.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=nu.distanceTo(iu);e.setAttribute("lineDistance",new xn(r,1))}else ut("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,c=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),bc.copy(r.boundingSphere),bc.applyMatrix4(o),bc.radius+=c,e.ray.intersectsSphere(bc)===!1)return;qx.copy(o).invert(),Io.copy(e.ray).applyMatrix4(qx);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),f=h*h,p=this.isLineSegments?2:1,v=r.index,x=r.attributes.position;if(v!==null){const y=Math.max(0,u.start),E=Math.min(v.count,u.start+u.count);for(let T=y,S=E-1;T<S;T+=p){const _=v.getX(T),w=v.getX(T+1),b=wc(this,e,Io,f,_,w,T);b&&t.push(b)}if(this.isLineLoop){const T=v.getX(E-1),S=v.getX(y),_=wc(this,e,Io,f,T,S,E-1);_&&t.push(_)}}else{const y=Math.max(0,u.start),E=Math.min(x.count,u.start+u.count);for(let T=y,S=E-1;T<S;T+=p){const _=wc(this,e,Io,f,T,T+1,T);_&&t.push(_)}if(this.isLineLoop){const T=wc(this,e,Io,f,E-1,y,E-1);T&&t.push(T)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function wc(i,e,t,r,o,c,u){const h=i.geometry.attributes.position;if(nu.fromBufferAttribute(h,o),iu.fromBufferAttribute(h,c),t.distanceSqToSegment(nu,iu,jh,$x)>r)return;jh.applyMatrix4(i.matrixWorld);const p=e.ray.origin.distanceTo(jh);if(!(p<e.near||p>e.far))return{distance:p,point:$x.clone().applyMatrix4(i.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:i}}const Yx=new ae,Kx=new ae;class qb extends R0{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let o=0,c=t.count;o<c;o+=2)Yx.fromBufferAttribute(t,o),Kx.fromBufferAttribute(t,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+Yx.distanceTo(Kx);e.setAttribute("lineDistance",new xn(r,1))}else ut("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class P0 extends Fn{constructor(e=[],t=Lr,r,o,c,u,h,f,p,v){super(e,t,r,o,c,u,h,f,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $b extends Fn{constructor(e,t,r,o,c,u,h,f,p){super(e,t,r,o,c,u,h,f,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Da extends Fn{constructor(e,t,r=es,o,c,u,h=Nn,f=Nn,p,v=Ts,g=1){if(v!==Ts&&v!==Pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:t,depth:g};super(x,o,c,u,h,f,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Mp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Yb extends Da{constructor(e,t=es,r=Lr,o,c,u=Nn,h=Nn,f,p=Ts){const v={width:e,height:e,depth:1},g=[v,v,v,v,v,v];super(e,e,t,r,o,c,u,h,f,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class L0 extends Fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ka extends Xn{constructor(e=1,t=1,r=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:c,depthSegments:u};const h=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const f=[],p=[],v=[],g=[];let x=0,y=0;E("z","y","x",-1,-1,r,t,e,u,c,0),E("z","y","x",1,-1,r,t,-e,u,c,1),E("x","z","y",1,1,e,r,t,o,u,2),E("x","z","y",1,-1,e,r,-t,o,u,3),E("x","y","z",1,-1,e,t,r,o,c,4),E("x","y","z",-1,-1,e,t,-r,o,c,5),this.setIndex(f),this.setAttribute("position",new xn(p,3)),this.setAttribute("normal",new xn(v,3)),this.setAttribute("uv",new xn(g,2));function E(T,S,_,w,b,N,I,L,B,C,O){const Y=N/B,V=I/C,Q=N/2,G=I/2,ee=L/2,F=B+1,U=C+1;let W=0,$=0;const X=new ae;for(let te=0;te<U;te++){const z=te*V-G;for(let se=0;se<F;se++){const Pe=se*Y-Q;X[T]=Pe*w,X[S]=z*b,X[_]=ee,p.push(X.x,X.y,X.z),X[T]=0,X[S]=0,X[_]=L>0?1:-1,v.push(X.x,X.y,X.z),g.push(se/B),g.push(1-te/C),W+=1}}for(let te=0;te<C;te++)for(let z=0;z<B;z++){const se=x+z+F*te,Pe=x+z+F*(te+1),be=x+(z+1)+F*(te+1),Ne=x+(z+1)+F*te;f.push(se,Pe,Ne),f.push(Pe,be,Ne),$+=6}h.addGroup(y,$,O),y+=$,x+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ka(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Cp extends Xn{constructor(e=1,t=1,r=1,o=32,c=1,u=!1,h=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:c,openEnded:u,thetaStart:h,thetaLength:f};const p=this;o=Math.floor(o),c=Math.floor(c);const v=[],g=[],x=[],y=[];let E=0;const T=[],S=r/2;let _=0;w(),u===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(v),this.setAttribute("position",new xn(g,3)),this.setAttribute("normal",new xn(x,3)),this.setAttribute("uv",new xn(y,2));function w(){const N=new ae,I=new ae;let L=0;const B=(t-e)/r;for(let C=0;C<=c;C++){const O=[],Y=C/c,V=Y*(t-e)+e;for(let Q=0;Q<=o;Q++){const G=Q/o,ee=G*f+h,F=Math.sin(ee),U=Math.cos(ee);I.x=V*F,I.y=-Y*r+S,I.z=V*U,g.push(I.x,I.y,I.z),N.set(F,B,U).normalize(),x.push(N.x,N.y,N.z),y.push(G,1-Y),O.push(E++)}T.push(O)}for(let C=0;C<o;C++)for(let O=0;O<c;O++){const Y=T[O][C],V=T[O+1][C],Q=T[O+1][C+1],G=T[O][C+1];(e>0||O!==0)&&(v.push(Y,V,G),L+=3),(t>0||O!==c-1)&&(v.push(V,Q,G),L+=3)}p.addGroup(_,L,0),_+=L}function b(N){const I=E,L=new dt,B=new ae;let C=0;const O=N===!0?e:t,Y=N===!0?1:-1;for(let Q=1;Q<=o;Q++)g.push(0,S*Y,0),x.push(0,Y,0),y.push(.5,.5),E++;const V=E;for(let Q=0;Q<=o;Q++){const ee=Q/o*f+h,F=Math.cos(ee),U=Math.sin(ee);B.x=O*U,B.y=S*Y,B.z=O*F,g.push(B.x,B.y,B.z),x.push(0,Y,0),L.x=F*.5+.5,L.y=U*.5*Y+.5,y.push(L.x,L.y),E++}for(let Q=0;Q<o;Q++){const G=I+Q,ee=V+Q;N===!0?v.push(ee,ee+1,G):v.push(ee+1,ee,G),C+=3}p.addGroup(_,C,N===!0?1:2),_+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cp(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Zo extends Xn{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const c=e/2,u=t/2,h=Math.floor(r),f=Math.floor(o),p=h+1,v=f+1,g=e/h,x=t/f,y=[],E=[],T=[],S=[];for(let _=0;_<v;_++){const w=_*x-u;for(let b=0;b<p;b++){const N=b*g-c;E.push(N,-w,0),T.push(0,0,1),S.push(b/h),S.push(1-_/f)}}for(let _=0;_<f;_++)for(let w=0;w<h;w++){const b=w+p*_,N=w+p*(_+1),I=w+1+p*(_+1),L=w+1+p*_;y.push(b,N,L),y.push(N,I,L)}this.setIndex(y),this.setAttribute("position",new xn(E,3)),this.setAttribute("normal",new xn(T,3)),this.setAttribute("uv",new xn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Np extends Xn{constructor(e=1,t=32,r=16,o=0,c=Math.PI*2,u=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:c,thetaStart:u,thetaLength:h},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const f=Math.min(u+h,Math.PI);let p=0;const v=[],g=new ae,x=new ae,y=[],E=[],T=[],S=[];for(let _=0;_<=r;_++){const w=[],b=_/r;let N=0;_===0&&u===0?N=.5/t:_===r&&f===Math.PI&&(N=-.5/t);for(let I=0;I<=t;I++){const L=I/t;g.x=-e*Math.cos(o+L*c)*Math.sin(u+b*h),g.y=e*Math.cos(u+b*h),g.z=e*Math.sin(o+L*c)*Math.sin(u+b*h),E.push(g.x,g.y,g.z),x.copy(g).normalize(),T.push(x.x,x.y,x.z),S.push(L+N,1-b),w.push(p++)}v.push(w)}for(let _=0;_<r;_++)for(let w=0;w<t;w++){const b=v[_][w+1],N=v[_][w],I=v[_+1][w],L=v[_+1][w+1];(_!==0||u>0)&&y.push(b,N,L),(_!==r-1||f<Math.PI)&&y.push(N,I,L)}this.setIndex(y),this.setAttribute("position",new xn(E,3)),this.setAttribute("normal",new xn(T,3)),this.setAttribute("uv",new xn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Np(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function ja(i){const e={};for(const t in i){e[t]={};for(const r in i[t]){const o=i[t][r];if(Zx(o))o.isRenderTargetTexture?(ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(Zx(o[0])){const c=[];for(let u=0,h=o.length;u<h;u++)c[u]=o[u].clone();e[t][r]=c}else e[t][r]=o.slice();else e[t][r]=o}}return e}function Gn(i){const e={};for(let t=0;t<i.length;t++){const r=ja(i[t]);for(const o in r)e[o]=r[o]}return e}function Zx(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Kb(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function I0(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const Zb={clone:ja,merge:Gn};var Jb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ts extends jr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jb,this.fragmentShader=Qb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ja(e.uniforms),this.uniformsGroups=Kb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class e1 extends ts{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class D0 extends jr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$f,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ar,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class t1 extends jr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class n1 extends jr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class j0 extends gn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class i1 extends j0{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ct(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Uh=new sn,Jx=new ae,Qx=new ae;class s1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.mapType=ci,this.map=null,this.mapPass=null,this.matrix=new sn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wp,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Jx.setFromMatrixPosition(e.matrixWorld),t.position.copy(Jx),Qx.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qx),t.updateMatrixWorld(),Uh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uh,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Xo||t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Uh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Tc=new ae,Cc=new rr,Wi=new ae;class U0 extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=Ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Tc,Cc,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Tc,Cc,Wi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Tc,Cc,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Tc,Cc,Wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Js=new ae,ev=new dt,tv=new dt;class yi extends U0{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zf*2*Math.atan(Math.tan(Wc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Js.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Js.x,Js.y).multiplyScalar(-e/Js.z),Js.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Js.x,Js.y).multiplyScalar(-e/Js.z)}getViewSize(e,t){return this.getViewBounds(e,ev,tv),t.subVectors(tv,ev)}setViewOffset(e,t,r,o,c,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Wc*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const f=u.fullWidth,p=u.fullHeight;c+=u.offsetX*o/f,t-=u.offsetY*r/p,o*=u.width/f,r*=u.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Ap extends U0{constructor(e=-1,t=1,r=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,u=r+e,h=o+t,f=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,u=c+p*this.view.width,h-=v*this.view.offsetY,f=h-v*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class r1 extends s1{constructor(){super(new Ap(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class a1 extends j0{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.target=new gn,this.shadow=new r1}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Ma=-90,Ea=1;class o1 extends gn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new yi(Ma,Ea,e,t);o.layers=this.layers,this.add(o);const c=new yi(Ma,Ea,e,t);c.layers=this.layers,this.add(c);const u=new yi(Ma,Ea,e,t);u.layers=this.layers,this.add(u);const h=new yi(Ma,Ea,e,t);h.layers=this.layers,this.add(h);const f=new yi(Ma,Ea,e,t);f.layers=this.layers,this.add(f);const p=new yi(Ma,Ea,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,c,u,h,f]=t;for(const p of t)this.remove(p);if(e===Ki)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Xo)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,f,p,v]=this.children,g=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,1,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(r,3,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,4,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(g,x,y),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class l1 extends yi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class nv{constructor(e=1,t=0,r=0){this.radius=e,this.phi=t,this.theta=r}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Nt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Nt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const jp=class jp{constructor(e,t,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,o){const c=this.elements;return c[0]=e,c[2]=t,c[1]=r,c[3]=o,this}};jp.prototype.isMatrix2=!0;let iv=jp;class c1 extends qb{constructor(e=10,t=10,r=4473924,o=8947848){r=new Ct(r),o=new Ct(o);const c=t/2,u=e/t,h=e/2,f=[],p=[];for(let x=0,y=0,E=-h;x<=t;x++,E+=u){f.push(-h,0,E,h,0,E),f.push(E,0,-h,E,0,h);const T=x===c?r:o;T.toArray(p,y),y+=3,T.toArray(p,y),y+=3,T.toArray(p,y),y+=3,T.toArray(p,y),y+=3}const v=new Xn;v.setAttribute("position",new xn(f,3)),v.setAttribute("color",new xn(p,3));const g=new Tp({vertexColors:!0,toneMapped:!1});super(v,g),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class u1 extends lr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){ut("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function sv(i,e,t,r){const o=d1(r);switch(t){case v0:return i*e;case y0:return i*e/o.components*o.byteLength;case xp:return i*e/o.components*o.byteLength;case Ir:return i*e*2/o.components*o.byteLength;case vp:return i*e*2/o.components*o.byteLength;case _0:return i*e*3/o.components*o.byteLength;case ji:return i*e*4/o.components*o.byteLength;case _p:return i*e*4/o.components*o.byteLength;case zc:case Hc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Vc:case Gc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _f:case Sf:return Math.max(i,16)*Math.max(e,8)/4;case vf:case yf:return Math.max(i,8)*Math.max(e,8)/2;case Mf:case Ef:case wf:case Tf:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case bf:case Yc:case Cf:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Nf:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Af:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Rf:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Pf:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Lf:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case If:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Df:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case jf:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Uf:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ff:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Of:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case kf:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Bf:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case zf:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Hf:case Vf:case Gf:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Wf:case Xf:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Kc:case qf:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function d1(i){switch(i){case ci:case p0:return{byteLength:1,components:1};case Go:case m0:case ws:return{byteLength:2,components:1};case mp:case gp:return{byteLength:2,components:4};case es:case pp:case Yi:return{byteLength:4,components:1};case g0:case x0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fp}}));typeof window<"u"&&(window.__THREE__?ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function F0(){let i=null,e=!1,t=null,r=null;function o(c,u){t(c,u),r=i.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(r=i.requestAnimationFrame(o),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){t=c},setContext:function(c){i=c}}}function h1(i){const e=new WeakMap;function t(h,f){const p=h.array,v=h.usage,g=p.byteLength,x=i.createBuffer();i.bindBuffer(f,x),i.bufferData(f,p,v),h.onUploadCallback();let y;if(p instanceof Float32Array)y=i.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=i.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?y=i.HALF_FLOAT:y=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=i.SHORT;else if(p instanceof Uint32Array)y=i.UNSIGNED_INT;else if(p instanceof Int32Array)y=i.INT;else if(p instanceof Int8Array)y=i.BYTE;else if(p instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function r(h,f,p){const v=f.array,g=f.updateRanges;if(i.bindBuffer(p,h),g.length===0)i.bufferSubData(p,0,v);else{g.sort((y,E)=>y.start-E.start);let x=0;for(let y=1;y<g.length;y++){const E=g[x],T=g[y];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++x,g[x]=T)}g.length=x+1;for(let y=0,E=g.length;y<E;y++){const T=g[y];i.bufferSubData(p,T.start*v.BYTES_PER_ELEMENT,v,T.start,T.count)}f.clearUpdateRanges()}f.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const f=e.get(h);f&&(i.deleteBuffer(f.buffer),e.delete(h))}function u(h,f){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=e.get(h);(!v||v.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,t(h,f));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,f),p.version=h.version}}return{get:o,remove:c,update:u}}var f1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,p1=`#ifdef USE_ALPHAHASH
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
#endif`,m1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,g1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,x1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,v1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_1=`#ifdef USE_AOMAP
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
#endif`,y1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,S1=`#ifdef USE_BATCHING
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
#endif`,M1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,E1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,b1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,w1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,T1=`#ifdef USE_IRIDESCENCE
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
#endif`,C1=`#ifdef USE_BUMPMAP
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
#endif`,N1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,A1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,R1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,P1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,L1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,I1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,D1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,j1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,U1=`#define PI 3.141592653589793
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
} // validated`,F1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,O1=`vec3 transformedNormal = objectNormal;
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
#endif`,k1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,B1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,z1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,H1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,V1="gl_FragColor = linearToOutputTexel( gl_FragColor );",G1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,W1=`#ifdef USE_ENVMAP
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
#endif`,X1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,q1=`#ifdef USE_ENVMAP
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
#endif`,$1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Y1=`#ifdef USE_ENVMAP
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
#endif`,K1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Z1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,J1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Q1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ew=`#ifdef USE_GRADIENTMAP
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
}`,tw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sw=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,rw=`#ifdef USE_ENVMAP
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
#endif`,aw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ow=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uw=`PhysicalMaterial material;
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
#endif`,dw=`uniform sampler2D dfgLUT;
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
}`,hw=`
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
#endif`,fw=`#if defined( RE_IndirectDiffuse )
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
#endif`,pw=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mw=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,gw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_w=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ew=`#if defined( USE_POINTS_UV )
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
#endif`,bw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ww=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Aw=`#ifdef USE_MORPHTARGETS
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
#endif`,Rw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Iw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Uw=`#ifdef USE_NORMALMAP
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
#endif`,Fw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ow=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ww=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$w=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jw=`float getShadowMask() {
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
}`,Qw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eT=`#ifdef USE_SKINNING
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
#endif`,tT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nT=`#ifdef USE_SKINNING
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
#endif`,iT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,aT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,oT=`#ifdef USE_TRANSMISSION
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
#endif`,lT=`#ifdef USE_TRANSMISSION
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
#endif`,cT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pT=`uniform sampler2D t2D;
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
}`,mT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_T=`#include <common>
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
}`,yT=`#if DEPTH_PACKING == 3200
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
}`,ST=`#define DISTANCE
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
}`,MT=`#define DISTANCE
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
}`,ET=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wT=`uniform float scale;
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
}`,TT=`uniform vec3 diffuse;
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
}`,CT=`#include <common>
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
}`,NT=`uniform vec3 diffuse;
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
}`,AT=`#define LAMBERT
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
}`,RT=`#define LAMBERT
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
}`,PT=`#define MATCAP
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
}`,LT=`#define MATCAP
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
}`,IT=`#define NORMAL
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
}`,DT=`#define NORMAL
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
}`,jT=`#define PHONG
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
}`,UT=`#define PHONG
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
}`,FT=`#define STANDARD
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
}`,OT=`#define STANDARD
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
}`,kT=`#define TOON
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
}`,BT=`#define TOON
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
}`,zT=`uniform float size;
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
}`,HT=`uniform vec3 diffuse;
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
}`,VT=`#include <common>
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
}`,GT=`uniform vec3 color;
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
}`,WT=`uniform float rotation;
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
}`,XT=`uniform vec3 diffuse;
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
}`,yt={alphahash_fragment:f1,alphahash_pars_fragment:p1,alphamap_fragment:m1,alphamap_pars_fragment:g1,alphatest_fragment:x1,alphatest_pars_fragment:v1,aomap_fragment:_1,aomap_pars_fragment:y1,batching_pars_vertex:S1,batching_vertex:M1,begin_vertex:E1,beginnormal_vertex:b1,bsdfs:w1,iridescence_fragment:T1,bumpmap_pars_fragment:C1,clipping_planes_fragment:N1,clipping_planes_pars_fragment:A1,clipping_planes_pars_vertex:R1,clipping_planes_vertex:P1,color_fragment:L1,color_pars_fragment:I1,color_pars_vertex:D1,color_vertex:j1,common:U1,cube_uv_reflection_fragment:F1,defaultnormal_vertex:O1,displacementmap_pars_vertex:k1,displacementmap_vertex:B1,emissivemap_fragment:z1,emissivemap_pars_fragment:H1,colorspace_fragment:V1,colorspace_pars_fragment:G1,envmap_fragment:W1,envmap_common_pars_fragment:X1,envmap_pars_fragment:q1,envmap_pars_vertex:$1,envmap_physical_pars_fragment:rw,envmap_vertex:Y1,fog_vertex:K1,fog_pars_vertex:Z1,fog_fragment:J1,fog_pars_fragment:Q1,gradientmap_pars_fragment:ew,lightmap_pars_fragment:tw,lights_lambert_fragment:nw,lights_lambert_pars_fragment:iw,lights_pars_begin:sw,lights_toon_fragment:aw,lights_toon_pars_fragment:ow,lights_phong_fragment:lw,lights_phong_pars_fragment:cw,lights_physical_fragment:uw,lights_physical_pars_fragment:dw,lights_fragment_begin:hw,lights_fragment_maps:fw,lights_fragment_end:pw,lightprobes_pars_fragment:mw,logdepthbuf_fragment:gw,logdepthbuf_pars_fragment:xw,logdepthbuf_pars_vertex:vw,logdepthbuf_vertex:_w,map_fragment:yw,map_pars_fragment:Sw,map_particle_fragment:Mw,map_particle_pars_fragment:Ew,metalnessmap_fragment:bw,metalnessmap_pars_fragment:ww,morphinstance_vertex:Tw,morphcolor_vertex:Cw,morphnormal_vertex:Nw,morphtarget_pars_vertex:Aw,morphtarget_vertex:Rw,normal_fragment_begin:Pw,normal_fragment_maps:Lw,normal_pars_fragment:Iw,normal_pars_vertex:Dw,normal_vertex:jw,normalmap_pars_fragment:Uw,clearcoat_normal_fragment_begin:Fw,clearcoat_normal_fragment_maps:Ow,clearcoat_pars_fragment:kw,iridescence_pars_fragment:Bw,opaque_fragment:zw,packing:Hw,premultiplied_alpha_fragment:Vw,project_vertex:Gw,dithering_fragment:Ww,dithering_pars_fragment:Xw,roughnessmap_fragment:qw,roughnessmap_pars_fragment:$w,shadowmap_pars_fragment:Yw,shadowmap_pars_vertex:Kw,shadowmap_vertex:Zw,shadowmask_pars_fragment:Jw,skinbase_vertex:Qw,skinning_pars_vertex:eT,skinning_vertex:tT,skinnormal_vertex:nT,specularmap_fragment:iT,specularmap_pars_fragment:sT,tonemapping_fragment:rT,tonemapping_pars_fragment:aT,transmission_fragment:oT,transmission_pars_fragment:lT,uv_pars_fragment:cT,uv_pars_vertex:uT,uv_vertex:dT,worldpos_vertex:hT,background_vert:fT,background_frag:pT,backgroundCube_vert:mT,backgroundCube_frag:gT,cube_vert:xT,cube_frag:vT,depth_vert:_T,depth_frag:yT,distance_vert:ST,distance_frag:MT,equirect_vert:ET,equirect_frag:bT,linedashed_vert:wT,linedashed_frag:TT,meshbasic_vert:CT,meshbasic_frag:NT,meshlambert_vert:AT,meshlambert_frag:RT,meshmatcap_vert:PT,meshmatcap_frag:LT,meshnormal_vert:IT,meshnormal_frag:DT,meshphong_vert:jT,meshphong_frag:UT,meshphysical_vert:FT,meshphysical_frag:OT,meshtoon_vert:kT,meshtoon_frag:BT,points_vert:zT,points_frag:HT,shadow_vert:VT,shadow_frag:GT,sprite_vert:WT,sprite_frag:XT},Be={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ae},probesMax:{value:new ae},probesResolution:{value:new ae}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},qi={basic:{uniforms:Gn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:yt.meshbasic_vert,fragmentShader:yt.meshbasic_frag},lambert:{uniforms:Gn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Ct(0)},envMapIntensity:{value:1}}]),vertexShader:yt.meshlambert_vert,fragmentShader:yt.meshlambert_frag},phong:{uniforms:Gn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:yt.meshphong_vert,fragmentShader:yt.meshphong_frag},standard:{uniforms:Gn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag},toon:{uniforms:Gn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new Ct(0)}}]),vertexShader:yt.meshtoon_vert,fragmentShader:yt.meshtoon_frag},matcap:{uniforms:Gn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:yt.meshmatcap_vert,fragmentShader:yt.meshmatcap_frag},points:{uniforms:Gn([Be.points,Be.fog]),vertexShader:yt.points_vert,fragmentShader:yt.points_frag},dashed:{uniforms:Gn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:yt.linedashed_vert,fragmentShader:yt.linedashed_frag},depth:{uniforms:Gn([Be.common,Be.displacementmap]),vertexShader:yt.depth_vert,fragmentShader:yt.depth_frag},normal:{uniforms:Gn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:yt.meshnormal_vert,fragmentShader:yt.meshnormal_frag},sprite:{uniforms:Gn([Be.sprite,Be.fog]),vertexShader:yt.sprite_vert,fragmentShader:yt.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:yt.background_vert,fragmentShader:yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:yt.backgroundCube_vert,fragmentShader:yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:yt.cube_vert,fragmentShader:yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:yt.equirect_vert,fragmentShader:yt.equirect_frag},distance:{uniforms:Gn([Be.common,Be.displacementmap,{referencePosition:{value:new ae},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:yt.distance_vert,fragmentShader:yt.distance_frag},shadow:{uniforms:Gn([Be.lights,Be.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:yt.shadow_vert,fragmentShader:yt.shadow_frag}};qi.physical={uniforms:Gn([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag};const Nc={r:0,b:0,g:0},qT=new sn,O0=new vt;O0.set(-1,0,0,0,1,0,0,0,1);function $T(i,e,t,r,o,c){const u=new Ct(0);let h=o===!0?0:1,f,p,v=null,g=0,x=null;function y(w){let b=w.isScene===!0?w.background:null;if(b&&b.isTexture){const N=w.backgroundBlurriness>0;b=e.get(b,N)}return b}function E(w){let b=!1;const N=y(w);N===null?S(u,h):N&&N.isColor&&(S(N,1),b=!0);const I=i.xr.getEnvironmentBlendMode();I==="additive"?t.buffers.color.setClear(0,0,0,1,c):I==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,c),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function T(w,b){const N=y(b);N&&(N.isCubeTexture||N.mapping===ou)?(p===void 0&&(p=new Fi(new ka(1,1,1),new ts({name:"BackgroundCubeMaterial",uniforms:ja(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(I,L,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=N,p.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(qT.makeRotationFromEuler(b.backgroundRotation)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(O0),p.material.toneMapped=At.getTransfer(N.colorSpace)!==Ot,(v!==N||g!==N.version||x!==i.toneMapping)&&(p.material.needsUpdate=!0,v=N,g=N.version,x=i.toneMapping),p.layers.enableAll(),w.unshift(p,p.geometry,p.material,0,0,null)):N&&N.isTexture&&(f===void 0&&(f=new Fi(new Zo(2,2),new ts({name:"BackgroundMaterial",uniforms:ja(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:sr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=N,f.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,f.material.toneMapped=At.getTransfer(N.colorSpace)!==Ot,N.matrixAutoUpdate===!0&&N.updateMatrix(),f.material.uniforms.uvTransform.value.copy(N.matrix),(v!==N||g!==N.version||x!==i.toneMapping)&&(f.material.needsUpdate=!0,v=N,g=N.version,x=i.toneMapping),f.layers.enableAll(),w.unshift(f,f.geometry,f.material,0,0,null))}function S(w,b){w.getRGB(Nc,I0(i)),t.buffers.color.setClear(Nc.r,Nc.g,Nc.b,b,c)}function _(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return u},setClearColor:function(w,b=1){u.set(w),h=b,S(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(w){h=w,S(u,h)},render:E,addToRenderList:T,dispose:_}}function YT(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),r={},o=x(null);let c=o,u=!1;function h(V,Q,G,ee,F){let U=!1;const W=g(V,ee,G,Q);c!==W&&(c=W,p(c.object)),U=y(V,ee,G,F),U&&E(V,ee,G,F),F!==null&&e.update(F,i.ELEMENT_ARRAY_BUFFER),(U||u)&&(u=!1,N(V,Q,G,ee),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function f(){return i.createVertexArray()}function p(V){return i.bindVertexArray(V)}function v(V){return i.deleteVertexArray(V)}function g(V,Q,G,ee){const F=ee.wireframe===!0;let U=r[Q.id];U===void 0&&(U={},r[Q.id]=U);const W=V.isInstancedMesh===!0?V.id:0;let $=U[W];$===void 0&&($={},U[W]=$);let X=$[G.id];X===void 0&&(X={},$[G.id]=X);let te=X[F];return te===void 0&&(te=x(f()),X[F]=te),te}function x(V){const Q=[],G=[],ee=[];for(let F=0;F<t;F++)Q[F]=0,G[F]=0,ee[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:G,attributeDivisors:ee,object:V,attributes:{},index:null}}function y(V,Q,G,ee){const F=c.attributes,U=Q.attributes;let W=0;const $=G.getAttributes();for(const X in $)if($[X].location>=0){const z=F[X];let se=U[X];if(se===void 0&&(X==="instanceMatrix"&&V.instanceMatrix&&(se=V.instanceMatrix),X==="instanceColor"&&V.instanceColor&&(se=V.instanceColor)),z===void 0||z.attribute!==se||se&&z.data!==se.data)return!0;W++}return c.attributesNum!==W||c.index!==ee}function E(V,Q,G,ee){const F={},U=Q.attributes;let W=0;const $=G.getAttributes();for(const X in $)if($[X].location>=0){let z=U[X];z===void 0&&(X==="instanceMatrix"&&V.instanceMatrix&&(z=V.instanceMatrix),X==="instanceColor"&&V.instanceColor&&(z=V.instanceColor));const se={};se.attribute=z,z&&z.data&&(se.data=z.data),F[X]=se,W++}c.attributes=F,c.attributesNum=W,c.index=ee}function T(){const V=c.newAttributes;for(let Q=0,G=V.length;Q<G;Q++)V[Q]=0}function S(V){_(V,0)}function _(V,Q){const G=c.newAttributes,ee=c.enabledAttributes,F=c.attributeDivisors;G[V]=1,ee[V]===0&&(i.enableVertexAttribArray(V),ee[V]=1),F[V]!==Q&&(i.vertexAttribDivisor(V,Q),F[V]=Q)}function w(){const V=c.newAttributes,Q=c.enabledAttributes;for(let G=0,ee=Q.length;G<ee;G++)Q[G]!==V[G]&&(i.disableVertexAttribArray(G),Q[G]=0)}function b(V,Q,G,ee,F,U,W){W===!0?i.vertexAttribIPointer(V,Q,G,F,U):i.vertexAttribPointer(V,Q,G,ee,F,U)}function N(V,Q,G,ee){T();const F=ee.attributes,U=G.getAttributes(),W=Q.defaultAttributeValues;for(const $ in U){const X=U[$];if(X.location>=0){let te=F[$];if(te===void 0&&($==="instanceMatrix"&&V.instanceMatrix&&(te=V.instanceMatrix),$==="instanceColor"&&V.instanceColor&&(te=V.instanceColor)),te!==void 0){const z=te.normalized,se=te.itemSize,Pe=e.get(te);if(Pe===void 0)continue;const be=Pe.buffer,Ne=Pe.type,q=Pe.bytesPerElement,me=Ne===i.INT||Ne===i.UNSIGNED_INT||te.gpuType===pp;if(te.isInterleavedBufferAttribute){const fe=te.data,xe=fe.stride,Ce=te.offset;if(fe.isInstancedInterleavedBuffer){for(let He=0;He<X.locationSize;He++)_(X.location+He,fe.meshPerAttribute);V.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let He=0;He<X.locationSize;He++)S(X.location+He);i.bindBuffer(i.ARRAY_BUFFER,be);for(let He=0;He<X.locationSize;He++)b(X.location+He,se/X.locationSize,Ne,z,xe*q,(Ce+se/X.locationSize*He)*q,me)}else{if(te.isInstancedBufferAttribute){for(let fe=0;fe<X.locationSize;fe++)_(X.location+fe,te.meshPerAttribute);V.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let fe=0;fe<X.locationSize;fe++)S(X.location+fe);i.bindBuffer(i.ARRAY_BUFFER,be);for(let fe=0;fe<X.locationSize;fe++)b(X.location+fe,se/X.locationSize,Ne,z,se*q,se/X.locationSize*fe*q,me)}}else if(W!==void 0){const z=W[$];if(z!==void 0)switch(z.length){case 2:i.vertexAttrib2fv(X.location,z);break;case 3:i.vertexAttrib3fv(X.location,z);break;case 4:i.vertexAttrib4fv(X.location,z);break;default:i.vertexAttrib1fv(X.location,z)}}}}w()}function I(){O();for(const V in r){const Q=r[V];for(const G in Q){const ee=Q[G];for(const F in ee){const U=ee[F];for(const W in U)v(U[W].object),delete U[W];delete ee[F]}}delete r[V]}}function L(V){if(r[V.id]===void 0)return;const Q=r[V.id];for(const G in Q){const ee=Q[G];for(const F in ee){const U=ee[F];for(const W in U)v(U[W].object),delete U[W];delete ee[F]}}delete r[V.id]}function B(V){for(const Q in r){const G=r[Q];for(const ee in G){const F=G[ee];if(F[V.id]===void 0)continue;const U=F[V.id];for(const W in U)v(U[W].object),delete U[W];delete F[V.id]}}}function C(V){for(const Q in r){const G=r[Q],ee=V.isInstancedMesh===!0?V.id:0,F=G[ee];if(F!==void 0){for(const U in F){const W=F[U];for(const $ in W)v(W[$].object),delete W[$];delete F[U]}delete G[ee],Object.keys(G).length===0&&delete r[Q]}}}function O(){Y(),u=!0,c!==o&&(c=o,p(c.object))}function Y(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:O,resetDefaultState:Y,dispose:I,releaseStatesOfGeometry:L,releaseStatesOfObject:C,releaseStatesOfProgram:B,initAttributes:T,enableAttribute:S,disableUnusedAttributes:w}}function KT(i,e,t){let r;function o(f){r=f}function c(f,p){i.drawArrays(r,f,p),t.update(p,r,1)}function u(f,p,v){v!==0&&(i.drawArraysInstanced(r,f,p,v),t.update(p,r,v))}function h(f,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,f,0,p,0,v);let x=0;for(let y=0;y<v;y++)x+=p[y];t.update(x,r,1)}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}function ZT(i,e,t,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");o=i.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(B){return!(B!==ji&&r.convert(B)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const C=B===ws&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==ci&&r.convert(B)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Yi&&!C)}function f(B){if(B==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const v=f(p);v!==p&&(ut("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const g=t.logarithmicDepthBuffer===!0,x=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&x===!1&&ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=i.getParameter(i.MAX_TEXTURE_SIZE),S=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),N=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=i.getParameter(i.MAX_SAMPLES),L=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:f,textureFormatReadable:u,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:x,maxTextures:y,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:N,maxSamples:I,samples:L}}function JT(i){const e=this;let t=null,r=0,o=!1,c=!1;const u=new er,h=new vt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const y=g.length!==0||x||r!==0||o;return o=x,r=g.length,y},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,x){t=v(g,x,0)},this.setState=function(g,x,y){const E=g.clippingPlanes,T=g.clipIntersection,S=g.clipShadows,_=i.get(g);if(!o||E===null||E.length===0||c&&!S)c?v(null):p();else{const w=c?0:r,b=w*4;let N=_.clippingState||null;f.value=N,N=v(E,x,b,y);for(let I=0;I!==b;++I)N[I]=t[I];_.clippingState=N,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=w}};function p(){f.value!==t&&(f.value=t,f.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(g,x,y,E){const T=g!==null?g.length:0;let S=null;if(T!==0){if(S=f.value,E!==!0||S===null){const _=y+T*4,w=x.matrixWorldInverse;h.getNormalMatrix(w),(S===null||S.length<_)&&(S=new Float32Array(_));for(let b=0,N=y;b!==T;++b,N+=4)u.copy(g[b]).applyMatrix4(w,h),u.normal.toArray(S,N),S[N+3]=u.constant}f.value=S,f.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,S}}const nr=4,rv=[.125,.215,.35,.446,.526,.582],Ar=20,QT=256,Do=new Ap,av=new Ct;let Fh=null,Oh=0,kh=0,Bh=!1;const eC=new ae;class ov{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,c={}){const{size:u=256,position:h=eC}=c;Fh=this._renderer.getRenderTarget(),Oh=this._renderer.getActiveCubeFace(),kh=this._renderer.getActiveMipmapLevel(),Bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,r,o,f,h),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Fh,Oh,kh),this._renderer.xr.enabled=Bh,e.scissorTest=!1,ba(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Lr||e.mapping===Ia?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fh=this._renderer.getRenderTarget(),Oh=this._renderer.getActiveCubeFace(),kh=this._renderer.getActiveMipmapLevel(),Bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:ws,format:ji,colorSpace:Zc,depthBuffer:!1},o=lv(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lv(e,t,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=tC(c)),this._blurMaterial=iC(c,e,t),this._ggxMaterial=nC(c,e,t)}return o}_compileMaterial(e){const t=new Fi(new Xn,e);this._renderer.compile(t,Do)}_sceneToCubeUV(e,t,r,o,c){const f=new yi(90,1,t,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,y=g.toneMapping;g.getClearColor(av),g.toneMapping=Ji,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(o),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Fi(new ka,new A0({name:"PMREM.Background",side:ni,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,S=T.material;let _=!1;const w=e.background;w?w.isColor&&(S.color.copy(w),e.background=null,_=!0):(S.color.copy(av),_=!0);for(let b=0;b<6;b++){const N=b%3;N===0?(f.up.set(0,p[b],0),f.position.set(c.x,c.y,c.z),f.lookAt(c.x+v[b],c.y,c.z)):N===1?(f.up.set(0,0,p[b]),f.position.set(c.x,c.y,c.z),f.lookAt(c.x,c.y+v[b],c.z)):(f.up.set(0,p[b],0),f.position.set(c.x,c.y,c.z),f.lookAt(c.x,c.y,c.z+v[b]));const I=this._cubeSize;ba(o,N*I,b>2?I:0,I,I),g.setRenderTarget(o),_&&g.render(T,f),g.render(e,f)}g.toneMapping=y,g.autoClear=x,e.background=w}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Lr||e.mapping===Ia;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=uv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cv());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const h=c.uniforms;h.envMap.value=e;const f=this._cubeSize;ba(t,0,0,3*f,2*f),r.setRenderTarget(t),r.render(u,Do)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,h=this._lodMeshes[r];h.material=u;const f=u.uniforms,p=r/(this._lodMeshes.length-1),v=t/(this._lodMeshes.length-1),g=Math.sqrt(p*p-v*v),x=0+p*1.25,y=g*x,{_lodMax:E}=this,T=this._sizeLods[r],S=3*T*(r>E-nr?r-E+nr:0),_=4*(this._cubeSize-T);f.envMap.value=e.texture,f.roughness.value=y,f.mipInt.value=E-t,ba(c,S,_,3*T,2*T),o.setRenderTarget(c),o.render(h,Do),f.envMap.value=c.texture,f.roughness.value=0,f.mipInt.value=E-r,ba(e,S,_,3*T,2*T),o.setRenderTarget(e),o.render(h,Do)}_blur(e,t,r,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",c),this._halfBlur(u,e,r,r,o,"longitudinal",c)}_halfBlur(e,t,r,o,c,u,h){const f=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Pt("blur direction must be either latitudinal or longitudinal!");const v=3,g=this._lodMeshes[o];g.material=p;const x=p.uniforms,y=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Ar-1),T=c/E,S=isFinite(c)?1+Math.floor(v*T):Ar;S>Ar&&ut(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Ar}`);const _=[];let w=0;for(let B=0;B<Ar;++B){const C=B/T,O=Math.exp(-C*C/2);_.push(O),B===0?w+=O:B<S&&(w+=2*O)}for(let B=0;B<_.length;B++)_[B]=_[B]/w;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=_,x.latitudinal.value=u==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:b}=this;x.dTheta.value=E,x.mipInt.value=b-r;const N=this._sizeLods[o],I=3*N*(o>b-nr?o-b+nr:0),L=4*(this._cubeSize-N);ba(t,I,L,3*N,2*N),f.setRenderTarget(t),f.render(g,Do)}}function tC(i){const e=[],t=[],r=[];let o=i;const c=i-nr+1+rv.length;for(let u=0;u<c;u++){const h=Math.pow(2,o);e.push(h);let f=1/h;u>i-nr?f=rv[u-i+nr-1]:u===0&&(f=0),t.push(f);const p=1/(h-2),v=-p,g=1+p,x=[v,v,g,v,g,g,v,v,g,g,v,g],y=6,E=6,T=3,S=2,_=1,w=new Float32Array(T*E*y),b=new Float32Array(S*E*y),N=new Float32Array(_*E*y);for(let L=0;L<y;L++){const B=L%3*2/3-1,C=L>2?0:-1,O=[B,C,0,B+2/3,C,0,B+2/3,C+1,0,B,C,0,B+2/3,C+1,0,B,C+1,0];w.set(O,T*E*L),b.set(x,S*E*L);const Y=[L,L,L,L,L,L];N.set(Y,_*E*L)}const I=new Xn;I.setAttribute("position",new Ui(w,T)),I.setAttribute("uv",new Ui(b,S)),I.setAttribute("faceIndex",new Ui(N,_)),r.push(new Fi(I,null)),o>nr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function lv(i,e,t){const r=new Qi(i,e,t);return r.texture.mapping=ou,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ba(i,e,t,r,o){i.viewport.set(e,t,r,o),i.scissor.set(e,t,r,o)}function nC(i,e,t){return new ts({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:QT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:cu(),fragmentShader:`

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
		`,blending:Ms,depthTest:!1,depthWrite:!1})}function iC(i,e,t){const r=new Float32Array(Ar),o=new ae(0,1,0);return new ts({name:"SphericalGaussianBlur",defines:{n:Ar,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:cu(),fragmentShader:`

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
		`,blending:Ms,depthTest:!1,depthWrite:!1})}function cv(){return new ts({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cu(),fragmentShader:`

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
		`,blending:Ms,depthTest:!1,depthWrite:!1})}function uv(){return new ts({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ms,depthTest:!1,depthWrite:!1})}function cu(){return`

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
	`}class k0 extends Qi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new P0(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new ka(5,5,5),c=new ts({name:"CubemapFromEquirect",uniforms:ja(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ni,blending:Ms});c.uniforms.tEquirect.value=t;const u=new Fi(o,c),h=t.minFilter;return t.minFilter===Rr&&(t.minFilter=Un),new o1(1,10,this).update(e,u),t.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(c)}}function sC(i){let e=new WeakMap,t=new WeakMap,r=null;function o(x,y=!1){return x==null?null:y?u(x):c(x)}function c(x){if(x&&x.isTexture){const y=x.mapping;if(y===lh||y===ch)if(e.has(x)){const E=e.get(x).texture;return h(E,x.mapping)}else{const E=x.image;if(E&&E.height>0){const T=new k0(E.height);return T.fromEquirectangularTexture(i,x),e.set(x,T),x.addEventListener("dispose",p),h(T.texture,x.mapping)}else return null}}return x}function u(x){if(x&&x.isTexture){const y=x.mapping,E=y===lh||y===ch,T=y===Lr||y===Ia;if(E||T){let S=t.get(x);const _=S!==void 0?S.texture.pmremVersion:0;if(x.isRenderTargetTexture&&x.pmremVersion!==_)return r===null&&(r=new ov(i)),S=E?r.fromEquirectangular(x,S):r.fromCubemap(x,S),S.texture.pmremVersion=x.pmremVersion,t.set(x,S),S.texture;if(S!==void 0)return S.texture;{const w=x.image;return E&&w&&w.height>0||T&&w&&f(w)?(r===null&&(r=new ov(i)),S=E?r.fromEquirectangular(x):r.fromCubemap(x),S.texture.pmremVersion=x.pmremVersion,t.set(x,S),x.addEventListener("dispose",v),S.texture):null}}}return x}function h(x,y){return y===lh?x.mapping=Lr:y===ch&&(x.mapping=Ia),x}function f(x){let y=0;const E=6;for(let T=0;T<E;T++)x[T]!==void 0&&y++;return y===E}function p(x){const y=x.target;y.removeEventListener("dispose",p);const E=e.get(y);E!==void 0&&(e.delete(y),E.dispose())}function v(x){const y=x.target;y.removeEventListener("dispose",v);const E=t.get(y);E!==void 0&&(t.delete(y),E.dispose())}function g(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:g}}function rC(i){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=i.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Kf("WebGLRenderer: "+r+" extension not supported."),o}}}function aC(i,e,t,r){const o={},c=new WeakMap;function u(g){const x=g.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);x.removeEventListener("dispose",u),delete o[x.id];const y=c.get(x);y&&(e.remove(y),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function h(g,x){return o[x.id]===!0||(x.addEventListener("dispose",u),o[x.id]=!0,t.memory.geometries++),x}function f(g){const x=g.attributes;for(const y in x)e.update(x[y],i.ARRAY_BUFFER)}function p(g){const x=[],y=g.index,E=g.attributes.position;let T=0;if(E===void 0)return;if(y!==null){const w=y.array;T=y.version;for(let b=0,N=w.length;b<N;b+=3){const I=w[b+0],L=w[b+1],B=w[b+2];x.push(I,L,L,B,B,I)}}else{const w=E.array;T=E.version;for(let b=0,N=w.length/3-1;b<N;b+=3){const I=b+0,L=b+1,B=b+2;x.push(I,L,L,B,B,I)}}const S=new(E.count>=65535?T0:w0)(x,1);S.version=T;const _=c.get(g);_&&e.remove(_),c.set(g,S)}function v(g){const x=c.get(g);if(x){const y=g.index;y!==null&&x.version<y.version&&p(g)}else p(g);return c.get(g)}return{get:h,update:f,getWireframeAttribute:v}}function oC(i,e,t){let r;function o(g){r=g}let c,u;function h(g){c=g.type,u=g.bytesPerElement}function f(g,x){i.drawElements(r,x,c,g*u),t.update(x,r,1)}function p(g,x,y){y!==0&&(i.drawElementsInstanced(r,x,c,g*u,y),t.update(x,r,y))}function v(g,x,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,x,0,c,g,0,y);let T=0;for(let S=0;S<y;S++)T+=x[S];t.update(T,r,1)}this.setMode=o,this.setIndex=h,this.render=f,this.renderInstances=p,this.renderMultiDraw=v}function lC(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,h){switch(t.calls++,u){case i.TRIANGLES:t.triangles+=h*(c/3);break;case i.LINES:t.lines+=h*(c/2);break;case i.LINE_STRIP:t.lines+=h*(c-1);break;case i.LINE_LOOP:t.lines+=h*c;break;case i.POINTS:t.points+=h*c;break;default:Pt("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function cC(i,e,t){const r=new WeakMap,o=new an;function c(u,h,f){const p=u.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=v!==void 0?v.length:0;let x=r.get(h);if(x===void 0||x.count!==g){let Y=function(){C.dispose(),r.delete(h),h.removeEventListener("dispose",Y)};var y=Y;x!==void 0&&x.texture.dispose();const E=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],b=h.morphAttributes.color||[];let N=0;E===!0&&(N=1),T===!0&&(N=2),S===!0&&(N=3);let I=h.attributes.position.count*N,L=1;I>e.maxTextureSize&&(L=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const B=new Float32Array(I*L*4*g),C=new M0(B,I,L,g);C.type=Yi,C.needsUpdate=!0;const O=N*4;for(let V=0;V<g;V++){const Q=_[V],G=w[V],ee=b[V],F=I*L*4*V;for(let U=0;U<Q.count;U++){const W=U*O;E===!0&&(o.fromBufferAttribute(Q,U),B[F+W+0]=o.x,B[F+W+1]=o.y,B[F+W+2]=o.z,B[F+W+3]=0),T===!0&&(o.fromBufferAttribute(G,U),B[F+W+4]=o.x,B[F+W+5]=o.y,B[F+W+6]=o.z,B[F+W+7]=0),S===!0&&(o.fromBufferAttribute(ee,U),B[F+W+8]=o.x,B[F+W+9]=o.y,B[F+W+10]=o.z,B[F+W+11]=ee.itemSize===4?o.w:1)}}x={count:g,texture:C,size:new dt(I,L)},r.set(h,x),h.addEventListener("dispose",Y)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)f.getUniforms().setValue(i,"morphTexture",u.morphTexture,t);else{let E=0;for(let S=0;S<p.length;S++)E+=p[S];const T=h.morphTargetsRelative?1:1-E;f.getUniforms().setValue(i,"morphTargetBaseInfluence",T),f.getUniforms().setValue(i,"morphTargetInfluences",p)}f.getUniforms().setValue(i,"morphTargetsTexture",x.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}return{update:c}}function uC(i,e,t,r,o){let c=new WeakMap;function u(p){const v=o.render.frame,g=p.geometry,x=e.get(p,g);if(c.get(x)!==v&&(e.update(x),c.set(x,v)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),c.get(p)!==v&&(t.update(p.instanceMatrix,i.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,i.ARRAY_BUFFER),c.set(p,v))),p.isSkinnedMesh){const y=p.skeleton;c.get(y)!==v&&(y.update(),c.set(y,v))}return x}function h(){c=new WeakMap}function f(p){const v=p.target;v.removeEventListener("dispose",f),r.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:u,dispose:h}}const dC={[a0]:"LINEAR_TONE_MAPPING",[o0]:"REINHARD_TONE_MAPPING",[l0]:"CINEON_TONE_MAPPING",[c0]:"ACES_FILMIC_TONE_MAPPING",[d0]:"AGX_TONE_MAPPING",[h0]:"NEUTRAL_TONE_MAPPING",[u0]:"CUSTOM_TONE_MAPPING"};function hC(i,e,t,r,o){const c=new Qi(e,t,{type:i,depthBuffer:r,stencilBuffer:o,depthTexture:r?new Da(e,t):void 0}),u=new Qi(e,t,{type:ws,depthBuffer:!1,stencilBuffer:!1}),h=new Xn;h.setAttribute("position",new xn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new xn([0,2,0,0,2,0],2));const f=new e1({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Fi(h,f),v=new Ap(-1,1,1,-1,0,1);let g=null,x=null,y=!1,E,T=null,S=[],_=!1;this.setSize=function(w,b){c.setSize(w,b),u.setSize(w,b);for(let N=0;N<S.length;N++){const I=S[N];I.setSize&&I.setSize(w,b)}},this.setEffects=function(w){S=w,_=S.length>0&&S[0].isRenderPass===!0;const b=c.width,N=c.height;for(let I=0;I<S.length;I++){const L=S[I];L.setSize&&L.setSize(b,N)}},this.begin=function(w,b){if(y||w.toneMapping===Ji&&S.length===0)return!1;if(T=b,b!==null){const N=b.width,I=b.height;(c.width!==N||c.height!==I)&&this.setSize(N,I)}return _===!1&&w.setRenderTarget(c),E=w.toneMapping,w.toneMapping=Ji,!0},this.hasRenderPass=function(){return _},this.end=function(w,b){w.toneMapping=E,y=!0;let N=c,I=u;for(let L=0;L<S.length;L++){const B=S[L];if(B.enabled!==!1&&(B.render(w,I,N,b),B.needsSwap!==!1)){const C=N;N=I,I=C}}if(g!==w.outputColorSpace||x!==w.toneMapping){g=w.outputColorSpace,x=w.toneMapping,f.defines={},At.getTransfer(g)===Ot&&(f.defines.SRGB_TRANSFER="");const L=dC[x];L&&(f.defines[L]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=N.texture,w.setRenderTarget(T),w.render(p,v),T=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),u.dispose(),h.dispose(),f.dispose()}}const B0=new Fn,Jf=new Da(1,1),z0=new M0,H0=new Cb,V0=new P0,dv=[],hv=[],fv=new Float32Array(16),pv=new Float32Array(9),mv=new Float32Array(4);function Ba(i,e,t){const r=i[0];if(r<=0||r>0)return i;const o=e*t;let c=dv[o];if(c===void 0&&(c=new Float32Array(o),dv[o]=c),e!==0){r.toArray(c,0);for(let u=1,h=0;u!==e;++u)h+=t,i[u].toArray(c,h)}return c}function vn(i,e){if(i.length!==e.length)return!1;for(let t=0,r=i.length;t<r;t++)if(i[t]!==e[t])return!1;return!0}function _n(i,e){for(let t=0,r=e.length;t<r;t++)i[t]=e[t]}function uu(i,e){let t=hv[e];t===void 0&&(t=new Int32Array(e),hv[e]=t);for(let r=0;r!==e;++r)t[r]=i.allocateTextureUnit();return t}function fC(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function pC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;i.uniform2fv(this.addr,e),_n(t,e)}}function mC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vn(t,e))return;i.uniform3fv(this.addr,e),_n(t,e)}}function gC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;i.uniform4fv(this.addr,e),_n(t,e)}}function xC(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(vn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),_n(t,e)}else{if(vn(t,r))return;mv.set(r),i.uniformMatrix2fv(this.addr,!1,mv),_n(t,r)}}function vC(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(vn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),_n(t,e)}else{if(vn(t,r))return;pv.set(r),i.uniformMatrix3fv(this.addr,!1,pv),_n(t,r)}}function _C(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(vn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),_n(t,e)}else{if(vn(t,r))return;fv.set(r),i.uniformMatrix4fv(this.addr,!1,fv),_n(t,r)}}function yC(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function SC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;i.uniform2iv(this.addr,e),_n(t,e)}}function MC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;i.uniform3iv(this.addr,e),_n(t,e)}}function EC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;i.uniform4iv(this.addr,e),_n(t,e)}}function bC(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function wC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;i.uniform2uiv(this.addr,e),_n(t,e)}}function TC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;i.uniform3uiv(this.addr,e),_n(t,e)}}function CC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;i.uniform4uiv(this.addr,e),_n(t,e)}}function NC(i,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o);let c;this.type===i.SAMPLER_2D_SHADOW?(Jf.compareFunction=t.isReversedDepthBuffer()?Sp:yp,c=Jf):c=B0,t.setTexture2D(e||c,o)}function AC(i,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||H0,o)}function RC(i,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||V0,o)}function PC(i,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||z0,o)}function LC(i){switch(i){case 5126:return fC;case 35664:return pC;case 35665:return mC;case 35666:return gC;case 35674:return xC;case 35675:return vC;case 35676:return _C;case 5124:case 35670:return yC;case 35667:case 35671:return SC;case 35668:case 35672:return MC;case 35669:case 35673:return EC;case 5125:return bC;case 36294:return wC;case 36295:return TC;case 36296:return CC;case 35678:case 36198:case 36298:case 36306:case 35682:return NC;case 35679:case 36299:case 36307:return AC;case 35680:case 36300:case 36308:case 36293:return RC;case 36289:case 36303:case 36311:case 36292:return PC}}function IC(i,e){i.uniform1fv(this.addr,e)}function DC(i,e){const t=Ba(e,this.size,2);i.uniform2fv(this.addr,t)}function jC(i,e){const t=Ba(e,this.size,3);i.uniform3fv(this.addr,t)}function UC(i,e){const t=Ba(e,this.size,4);i.uniform4fv(this.addr,t)}function FC(i,e){const t=Ba(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function OC(i,e){const t=Ba(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function kC(i,e){const t=Ba(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function BC(i,e){i.uniform1iv(this.addr,e)}function zC(i,e){i.uniform2iv(this.addr,e)}function HC(i,e){i.uniform3iv(this.addr,e)}function VC(i,e){i.uniform4iv(this.addr,e)}function GC(i,e){i.uniform1uiv(this.addr,e)}function WC(i,e){i.uniform2uiv(this.addr,e)}function XC(i,e){i.uniform3uiv(this.addr,e)}function qC(i,e){i.uniform4uiv(this.addr,e)}function $C(i,e,t){const r=this.cache,o=e.length,c=uu(t,o);vn(r,c)||(i.uniform1iv(this.addr,c),_n(r,c));let u;this.type===i.SAMPLER_2D_SHADOW?u=Jf:u=B0;for(let h=0;h!==o;++h)t.setTexture2D(e[h]||u,c[h])}function YC(i,e,t){const r=this.cache,o=e.length,c=uu(t,o);vn(r,c)||(i.uniform1iv(this.addr,c),_n(r,c));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||H0,c[u])}function KC(i,e,t){const r=this.cache,o=e.length,c=uu(t,o);vn(r,c)||(i.uniform1iv(this.addr,c),_n(r,c));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||V0,c[u])}function ZC(i,e,t){const r=this.cache,o=e.length,c=uu(t,o);vn(r,c)||(i.uniform1iv(this.addr,c),_n(r,c));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||z0,c[u])}function JC(i){switch(i){case 5126:return IC;case 35664:return DC;case 35665:return jC;case 35666:return UC;case 35674:return FC;case 35675:return OC;case 35676:return kC;case 5124:case 35670:return BC;case 35667:case 35671:return zC;case 35668:case 35672:return HC;case 35669:case 35673:return VC;case 5125:return GC;case 36294:return WC;case 36295:return XC;case 36296:return qC;case 35678:case 36198:case 36298:case 36306:case 35682:return $C;case 35679:case 36299:case 36307:return YC;case 35680:case 36300:case 36308:case 36293:return KC;case 36289:case 36303:case 36311:case 36292:return ZC}}class QC{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=LC(t.type)}}class eN{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=JC(t.type)}}class tN{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const h=o[c];h.setValue(e,t[h.id],r)}}}const zh=/(\w+)(\])?(\[|\.)?/g;function gv(i,e){i.seq.push(e),i.map[e.id]=e}function nN(i,e,t){const r=i.name,o=r.length;for(zh.lastIndex=0;;){const c=zh.exec(r),u=zh.lastIndex;let h=c[1];const f=c[2]==="]",p=c[3];if(f&&(h=h|0),p===void 0||p==="["&&u+2===o){gv(t,p===void 0?new QC(h,i,e):new eN(h,i,e));break}else{let g=t.map[h];g===void 0&&(g=new tN(h),gv(t,g)),t=g}}}class Xc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const h=e.getActiveUniform(t,u),f=e.getUniformLocation(t,h.name);nN(h,f,this)}const o=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(e,t,r,o){const c=this.map[t];c!==void 0&&c.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let c=0,u=t.length;c!==u;++c){const h=t[c],f=r[h.id];f.needsUpdate!==!1&&h.setValue(e,f.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function xv(i,e,t){const r=i.createShader(e);return i.shaderSource(r,t),i.compileShader(r),r}const iN=37297;let sN=0;function rN(i,e){const t=i.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,t.length);for(let u=o;u<c;u++){const h=u+1;r.push(`${h===e?">":" "} ${h}: ${t[u]}`)}return r.join(`
`)}const vv=new vt;function aN(i){At._getMatrix(vv,At.workingColorSpace,i);const e=`mat3( ${vv.elements.map(t=>t.toFixed(4))} )`;switch(At.getTransfer(i)){case Jc:return[e,"LinearTransferOETF"];case Ot:return[e,"sRGBTransferOETF"];default:return ut("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function _v(i,e,t){const r=i.getShaderParameter(e,i.COMPILE_STATUS),c=(i.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const h=parseInt(u[1]);return t.toUpperCase()+`

`+c+`

`+rN(i.getShaderSource(e),h)}else return c}function oN(i,e){const t=aN(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const lN={[a0]:"Linear",[o0]:"Reinhard",[l0]:"Cineon",[c0]:"ACESFilmic",[d0]:"AgX",[h0]:"Neutral",[u0]:"Custom"};function cN(i,e){const t=lN[e];return t===void 0?(ut("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ac=new ae;function uN(){At.getLuminanceCoefficients(Ac);const i=Ac.x.toFixed(4),e=Ac.y.toFixed(4),t=Ac.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dN(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ko).join(`
`)}function hN(i){const e=[];for(const t in i){const r=i[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function fN(i,e){const t={},r=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=i.getActiveAttrib(e,o),u=c.name;let h=1;c.type===i.FLOAT_MAT2&&(h=2),c.type===i.FLOAT_MAT3&&(h=3),c.type===i.FLOAT_MAT4&&(h=4),t[u]={type:c.type,location:i.getAttribLocation(e,u),locationSize:h}}return t}function ko(i){return i!==""}function yv(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sv(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pN=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qf(i){return i.replace(pN,gN)}const mN=new Map;function gN(i,e){let t=yt[e];if(t===void 0){const r=mN.get(e);if(r!==void 0)t=yt[r],ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Qf(t)}const xN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mv(i){return i.replace(xN,vN)}function vN(i,e,t,r){let o="";for(let c=parseInt(e);c<parseInt(t);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function Ev(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const _N={[Bc]:"SHADOWMAP_TYPE_PCF",[Oo]:"SHADOWMAP_TYPE_VSM"};function yN(i){return _N[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const SN={[Lr]:"ENVMAP_TYPE_CUBE",[Ia]:"ENVMAP_TYPE_CUBE",[ou]:"ENVMAP_TYPE_CUBE_UV"};function MN(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":SN[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const EN={[Ia]:"ENVMAP_MODE_REFRACTION"};function bN(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":EN[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const wN={[r0]:"ENVMAP_BLENDING_MULTIPLY",[rb]:"ENVMAP_BLENDING_MIX",[ab]:"ENVMAP_BLENDING_ADD"};function TN(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":wN[i.combine]||"ENVMAP_BLENDING_NONE"}function CN(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function NN(i,e,t,r){const o=i.getContext(),c=t.defines;let u=t.vertexShader,h=t.fragmentShader;const f=yN(t),p=MN(t),v=bN(t),g=TN(t),x=CN(t),y=dN(t),E=hN(c),T=o.createProgram();let S,_,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(ko).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(ko).join(`
`),_.length>0&&(_+=`
`)):(S=[Ev(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ko).join(`
`),_=[Ev(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",t.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ji?"#define TONE_MAPPING":"",t.toneMapping!==Ji?yt.tonemapping_pars_fragment:"",t.toneMapping!==Ji?cN("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",yt.colorspace_pars_fragment,oN("linearToOutputTexel",t.outputColorSpace),uN(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ko).join(`
`)),u=Qf(u),u=yv(u,t),u=Sv(u,t),h=Qf(h),h=yv(h,t),h=Sv(h,t),u=Mv(u),h=Mv(h),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",t.glslVersion===Ax?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ax?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const b=w+S+u,N=w+_+h,I=xv(o,o.VERTEX_SHADER,b),L=xv(o,o.FRAGMENT_SHADER,N);o.attachShader(T,I),o.attachShader(T,L),t.index0AttributeName!==void 0?o.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function B(V){if(i.debug.checkShaderErrors){const Q=o.getProgramInfoLog(T)||"",G=o.getShaderInfoLog(I)||"",ee=o.getShaderInfoLog(L)||"",F=Q.trim(),U=G.trim(),W=ee.trim();let $=!0,X=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(o,T,I,L);else{const te=_v(o,I,"vertex"),z=_v(o,L,"fragment");Pt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+F+`
`+te+`
`+z)}else F!==""?ut("WebGLProgram: Program Info Log:",F):(U===""||W==="")&&(X=!1);X&&(V.diagnostics={runnable:$,programLog:F,vertexShader:{log:U,prefix:S},fragmentShader:{log:W,prefix:_}})}o.deleteShader(I),o.deleteShader(L),C=new Xc(o,T),O=fN(o,T)}let C;this.getUniforms=function(){return C===void 0&&B(this),C};let O;this.getAttributes=function(){return O===void 0&&B(this),O};let Y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=o.getProgramParameter(T,iN)),Y},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sN++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=I,this.fragmentShader=L,this}let AN=0;class RN{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),c=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new PN(e),t.set(e,r)),r}}class PN{constructor(e){this.id=AN++,this.code=e,this.usedTimes=0}}function LN(i){return i===Ir||i===Yc||i===Kc}function IN(i,e,t,r,o,c){const u=new E0,h=new RN,f=new Set,p=[],v=new Map,g=r.logarithmicDepthBuffer;let x=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(C){return f.add(C),C===0?"uv":`uv${C}`}function T(C,O,Y,V,Q,G){const ee=V.fog,F=Q.geometry,U=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?V.environment:null,W=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap,$=e.get(C.envMap||U,W),X=$&&$.mapping===ou?$.image.height:null,te=y[C.type];C.precision!==null&&(x=r.getMaxPrecision(C.precision),x!==C.precision&&ut("WebGLProgram.getParameters:",C.precision,"not supported, using",x,"instead."));const z=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,se=z!==void 0?z.length:0;let Pe=0;F.morphAttributes.position!==void 0&&(Pe=1),F.morphAttributes.normal!==void 0&&(Pe=2),F.morphAttributes.color!==void 0&&(Pe=3);let be,Ne,q,me;if(te){const ct=qi[te];be=ct.vertexShader,Ne=ct.fragmentShader}else be=C.vertexShader,Ne=C.fragmentShader,h.update(C),q=h.getVertexShaderID(C),me=h.getFragmentShaderID(C);const fe=i.getRenderTarget(),xe=i.state.buffers.depth.getReversed(),Ce=Q.isInstancedMesh===!0,He=Q.isBatchedMesh===!0,Et=!!C.map,it=!!C.matcap,et=!!$,_t=!!C.aoMap,ht=!!C.lightMap,kt=!!C.bumpMap,Bt=!!C.normalMap,hn=!!C.displacementMap,ne=!!C.emissiveMap,zt=!!C.metalnessMap,pt=!!C.roughnessMap,Dt=C.anisotropy>0,Oe=C.clearcoat>0,Gt=C.dispersion>0,j=C.iridescence>0,A=C.sheen>0,oe=C.transmission>0,_e=Dt&&!!C.anisotropyMap,Ee=Oe&&!!C.clearcoatMap,Re=Oe&&!!C.clearcoatNormalMap,Ue=Oe&&!!C.clearcoatRoughnessMap,ge=j&&!!C.iridescenceMap,ye=j&&!!C.iridescenceThicknessMap,ke=A&&!!C.sheenColorMap,k=A&&!!C.sheenRoughnessMap,K=!!C.specularMap,Me=!!C.specularColorMap,$e=!!C.specularIntensityMap,rt=oe&&!!C.transmissionMap,ft=oe&&!!C.thicknessMap,J=!!C.gradientMap,Le=!!C.alphaMap,ve=C.alphaTest>0,ze=!!C.alphaHash,Ie=!!C.extensions;let Se=Ji;C.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Se=i.toneMapping);const Xe={shaderID:te,shaderType:C.type,shaderName:C.name,vertexShader:be,fragmentShader:Ne,defines:C.defines,customVertexShaderID:q,customFragmentShaderID:me,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:x,batching:He,batchingColor:He&&Q._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&Q.instanceColor!==null,instancingMorph:Ce&&Q.morphTexture!==null,outputColorSpace:fe===null?i.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:At.workingColorSpace,alphaToCoverage:!!C.alphaToCoverage,map:Et,matcap:it,envMap:et,envMapMode:et&&$.mapping,envMapCubeUVHeight:X,aoMap:_t,lightMap:ht,bumpMap:kt,normalMap:Bt,displacementMap:hn,emissiveMap:ne,normalMapObjectSpace:Bt&&C.normalMapType===cb,normalMapTangentSpace:Bt&&C.normalMapType===$f,packedNormalMap:Bt&&C.normalMapType===$f&&LN(C.normalMap.format),metalnessMap:zt,roughnessMap:pt,anisotropy:Dt,anisotropyMap:_e,clearcoat:Oe,clearcoatMap:Ee,clearcoatNormalMap:Re,clearcoatRoughnessMap:Ue,dispersion:Gt,iridescence:j,iridescenceMap:ge,iridescenceThicknessMap:ye,sheen:A,sheenColorMap:ke,sheenRoughnessMap:k,specularMap:K,specularColorMap:Me,specularIntensityMap:$e,transmission:oe,transmissionMap:rt,thicknessMap:ft,gradientMap:J,opaque:C.transparent===!1&&C.blending===Ra&&C.alphaToCoverage===!1,alphaMap:Le,alphaTest:ve,alphaHash:ze,combine:C.combine,mapUv:Et&&E(C.map.channel),aoMapUv:_t&&E(C.aoMap.channel),lightMapUv:ht&&E(C.lightMap.channel),bumpMapUv:kt&&E(C.bumpMap.channel),normalMapUv:Bt&&E(C.normalMap.channel),displacementMapUv:hn&&E(C.displacementMap.channel),emissiveMapUv:ne&&E(C.emissiveMap.channel),metalnessMapUv:zt&&E(C.metalnessMap.channel),roughnessMapUv:pt&&E(C.roughnessMap.channel),anisotropyMapUv:_e&&E(C.anisotropyMap.channel),clearcoatMapUv:Ee&&E(C.clearcoatMap.channel),clearcoatNormalMapUv:Re&&E(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&E(C.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&E(C.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&E(C.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&E(C.sheenColorMap.channel),sheenRoughnessMapUv:k&&E(C.sheenRoughnessMap.channel),specularMapUv:K&&E(C.specularMap.channel),specularColorMapUv:Me&&E(C.specularColorMap.channel),specularIntensityMapUv:$e&&E(C.specularIntensityMap.channel),transmissionMapUv:rt&&E(C.transmissionMap.channel),thicknessMapUv:ft&&E(C.thicknessMap.channel),alphaMapUv:Le&&E(C.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Bt||Dt),vertexNormals:!!F.attributes.normal,vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!F.attributes.uv&&(Et||Le),fog:!!ee,useFog:C.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:C.wireframe===!1&&(C.flatShading===!0||F.attributes.normal===void 0&&Bt===!1&&(C.isMeshLambertMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isMeshPhysicalMaterial)),sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:xe,skinning:Q.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Pe,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:C.dithering,shadowMapEnabled:i.shadowMap.enabled&&Y.length>0,shadowMapType:i.shadowMap.type,toneMapping:Se,decodeVideoTexture:Et&&C.map.isVideoTexture===!0&&At.getTransfer(C.map.colorSpace)===Ot,decodeVideoTextureEmissive:ne&&C.emissiveMap.isVideoTexture===!0&&At.getTransfer(C.emissiveMap.colorSpace)===Ot,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===_s,flipSided:C.side===ni,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Ie&&C.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&C.extensions.multiDraw===!0||He)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Xe.vertexUv1s=f.has(1),Xe.vertexUv2s=f.has(2),Xe.vertexUv3s=f.has(3),f.clear(),Xe}function S(C){const O=[];if(C.shaderID?O.push(C.shaderID):(O.push(C.customVertexShaderID),O.push(C.customFragmentShaderID)),C.defines!==void 0)for(const Y in C.defines)O.push(Y),O.push(C.defines[Y]);return C.isRawShaderMaterial===!1&&(_(O,C),w(O,C),O.push(i.outputColorSpace)),O.push(C.customProgramCacheKey),O.join()}function _(C,O){C.push(O.precision),C.push(O.outputColorSpace),C.push(O.envMapMode),C.push(O.envMapCubeUVHeight),C.push(O.mapUv),C.push(O.alphaMapUv),C.push(O.lightMapUv),C.push(O.aoMapUv),C.push(O.bumpMapUv),C.push(O.normalMapUv),C.push(O.displacementMapUv),C.push(O.emissiveMapUv),C.push(O.metalnessMapUv),C.push(O.roughnessMapUv),C.push(O.anisotropyMapUv),C.push(O.clearcoatMapUv),C.push(O.clearcoatNormalMapUv),C.push(O.clearcoatRoughnessMapUv),C.push(O.iridescenceMapUv),C.push(O.iridescenceThicknessMapUv),C.push(O.sheenColorMapUv),C.push(O.sheenRoughnessMapUv),C.push(O.specularMapUv),C.push(O.specularColorMapUv),C.push(O.specularIntensityMapUv),C.push(O.transmissionMapUv),C.push(O.thicknessMapUv),C.push(O.combine),C.push(O.fogExp2),C.push(O.sizeAttenuation),C.push(O.morphTargetsCount),C.push(O.morphAttributeCount),C.push(O.numDirLights),C.push(O.numPointLights),C.push(O.numSpotLights),C.push(O.numSpotLightMaps),C.push(O.numHemiLights),C.push(O.numRectAreaLights),C.push(O.numDirLightShadows),C.push(O.numPointLightShadows),C.push(O.numSpotLightShadows),C.push(O.numSpotLightShadowsWithMaps),C.push(O.numLightProbes),C.push(O.shadowMapType),C.push(O.toneMapping),C.push(O.numClippingPlanes),C.push(O.numClipIntersection),C.push(O.depthPacking)}function w(C,O){u.disableAll(),O.instancing&&u.enable(0),O.instancingColor&&u.enable(1),O.instancingMorph&&u.enable(2),O.matcap&&u.enable(3),O.envMap&&u.enable(4),O.normalMapObjectSpace&&u.enable(5),O.normalMapTangentSpace&&u.enable(6),O.clearcoat&&u.enable(7),O.iridescence&&u.enable(8),O.alphaTest&&u.enable(9),O.vertexColors&&u.enable(10),O.vertexAlphas&&u.enable(11),O.vertexUv1s&&u.enable(12),O.vertexUv2s&&u.enable(13),O.vertexUv3s&&u.enable(14),O.vertexTangents&&u.enable(15),O.anisotropy&&u.enable(16),O.alphaHash&&u.enable(17),O.batching&&u.enable(18),O.dispersion&&u.enable(19),O.batchingColor&&u.enable(20),O.gradientMap&&u.enable(21),O.packedNormalMap&&u.enable(22),O.vertexNormals&&u.enable(23),C.push(u.mask),u.disableAll(),O.fog&&u.enable(0),O.useFog&&u.enable(1),O.flatShading&&u.enable(2),O.logarithmicDepthBuffer&&u.enable(3),O.reversedDepthBuffer&&u.enable(4),O.skinning&&u.enable(5),O.morphTargets&&u.enable(6),O.morphNormals&&u.enable(7),O.morphColors&&u.enable(8),O.premultipliedAlpha&&u.enable(9),O.shadowMapEnabled&&u.enable(10),O.doubleSided&&u.enable(11),O.flipSided&&u.enable(12),O.useDepthPacking&&u.enable(13),O.dithering&&u.enable(14),O.transmission&&u.enable(15),O.sheen&&u.enable(16),O.opaque&&u.enable(17),O.pointsUvs&&u.enable(18),O.decodeVideoTexture&&u.enable(19),O.decodeVideoTextureEmissive&&u.enable(20),O.alphaToCoverage&&u.enable(21),O.numLightProbeGrids>0&&u.enable(22),C.push(u.mask)}function b(C){const O=y[C.type];let Y;if(O){const V=qi[O];Y=Zb.clone(V.uniforms)}else Y=C.uniforms;return Y}function N(C,O){let Y=v.get(O);return Y!==void 0?++Y.usedTimes:(Y=new NN(i,O,C,o),p.push(Y),v.set(O,Y)),Y}function I(C){if(--C.usedTimes===0){const O=p.indexOf(C);p[O]=p[p.length-1],p.pop(),v.delete(C.cacheKey),C.destroy()}}function L(C){h.remove(C)}function B(){h.dispose()}return{getParameters:T,getProgramCacheKey:S,getUniforms:b,acquireProgram:N,releaseProgram:I,releaseShaderCache:L,programs:p,dispose:B}}function DN(){let i=new WeakMap;function e(u){return i.has(u)}function t(u){let h=i.get(u);return h===void 0&&(h={},i.set(u,h)),h}function r(u){i.delete(u)}function o(u,h,f){i.get(u)[h]=f}function c(){i=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:c}}function jN(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function bv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function wv(){const i=[];let e=0;const t=[],r=[],o=[];function c(){e=0,t.length=0,r.length=0,o.length=0}function u(x){let y=0;return x.isInstancedMesh&&(y+=2),x.isSkinnedMesh&&(y+=1),y}function h(x,y,E,T,S,_){let w=i[e];return w===void 0?(w={id:x.id,object:x,geometry:y,material:E,materialVariant:u(x),groupOrder:T,renderOrder:x.renderOrder,z:S,group:_},i[e]=w):(w.id=x.id,w.object=x,w.geometry=y,w.material=E,w.materialVariant=u(x),w.groupOrder=T,w.renderOrder=x.renderOrder,w.z=S,w.group=_),e++,w}function f(x,y,E,T,S,_){const w=h(x,y,E,T,S,_);E.transmission>0?r.push(w):E.transparent===!0?o.push(w):t.push(w)}function p(x,y,E,T,S,_){const w=h(x,y,E,T,S,_);E.transmission>0?r.unshift(w):E.transparent===!0?o.unshift(w):t.unshift(w)}function v(x,y){t.length>1&&t.sort(x||jN),r.length>1&&r.sort(y||bv),o.length>1&&o.sort(y||bv)}function g(){for(let x=e,y=i.length;x<y;x++){const E=i[x];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:r,transparent:o,init:c,push:f,unshift:p,finish:g,sort:v}}function UN(){let i=new WeakMap;function e(r,o){const c=i.get(r);let u;return c===void 0?(u=new wv,i.set(r,[u])):o>=c.length?(u=new wv,c.push(u)):u=c[o],u}function t(){i=new WeakMap}return{get:e,dispose:t}}function FN(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ae,color:new Ct};break;case"SpotLight":t={position:new ae,direction:new ae,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ae,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ae,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":t={color:new Ct,position:new ae,halfWidth:new ae,halfHeight:new ae};break}return i[e.id]=t,t}}}function ON(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let kN=0;function BN(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function zN(i){const e=new FN,t=ON(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ae);const o=new ae,c=new sn,u=new sn;function h(p){let v=0,g=0,x=0;for(let O=0;O<9;O++)r.probe[O].set(0,0,0);let y=0,E=0,T=0,S=0,_=0,w=0,b=0,N=0,I=0,L=0,B=0;p.sort(BN);for(let O=0,Y=p.length;O<Y;O++){const V=p[O],Q=V.color,G=V.intensity,ee=V.distance;let F=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Ir?F=V.shadow.map.texture:F=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)v+=Q.r*G,g+=Q.g*G,x+=Q.b*G;else if(V.isLightProbe){for(let U=0;U<9;U++)r.probe[U].addScaledVector(V.sh.coefficients[U],G);B++}else if(V.isDirectionalLight){const U=e.get(V);if(U.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const W=V.shadow,$=t.get(V);$.shadowIntensity=W.intensity,$.shadowBias=W.bias,$.shadowNormalBias=W.normalBias,$.shadowRadius=W.radius,$.shadowMapSize=W.mapSize,r.directionalShadow[y]=$,r.directionalShadowMap[y]=F,r.directionalShadowMatrix[y]=V.shadow.matrix,w++}r.directional[y]=U,y++}else if(V.isSpotLight){const U=e.get(V);U.position.setFromMatrixPosition(V.matrixWorld),U.color.copy(Q).multiplyScalar(G),U.distance=ee,U.coneCos=Math.cos(V.angle),U.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),U.decay=V.decay,r.spot[T]=U;const W=V.shadow;if(V.map&&(r.spotLightMap[I]=V.map,I++,W.updateMatrices(V),V.castShadow&&L++),r.spotLightMatrix[T]=W.matrix,V.castShadow){const $=t.get(V);$.shadowIntensity=W.intensity,$.shadowBias=W.bias,$.shadowNormalBias=W.normalBias,$.shadowRadius=W.radius,$.shadowMapSize=W.mapSize,r.spotShadow[T]=$,r.spotShadowMap[T]=F,N++}T++}else if(V.isRectAreaLight){const U=e.get(V);U.color.copy(Q).multiplyScalar(G),U.halfWidth.set(V.width*.5,0,0),U.halfHeight.set(0,V.height*.5,0),r.rectArea[S]=U,S++}else if(V.isPointLight){const U=e.get(V);if(U.color.copy(V.color).multiplyScalar(V.intensity),U.distance=V.distance,U.decay=V.decay,V.castShadow){const W=V.shadow,$=t.get(V);$.shadowIntensity=W.intensity,$.shadowBias=W.bias,$.shadowNormalBias=W.normalBias,$.shadowRadius=W.radius,$.shadowMapSize=W.mapSize,$.shadowCameraNear=W.camera.near,$.shadowCameraFar=W.camera.far,r.pointShadow[E]=$,r.pointShadowMap[E]=F,r.pointShadowMatrix[E]=V.shadow.matrix,b++}r.point[E]=U,E++}else if(V.isHemisphereLight){const U=e.get(V);U.skyColor.copy(V.color).multiplyScalar(G),U.groundColor.copy(V.groundColor).multiplyScalar(G),r.hemi[_]=U,_++}}S>0&&(i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Be.LTC_FLOAT_1,r.rectAreaLTC2=Be.LTC_FLOAT_2):(r.rectAreaLTC1=Be.LTC_HALF_1,r.rectAreaLTC2=Be.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=g,r.ambient[2]=x;const C=r.hash;(C.directionalLength!==y||C.pointLength!==E||C.spotLength!==T||C.rectAreaLength!==S||C.hemiLength!==_||C.numDirectionalShadows!==w||C.numPointShadows!==b||C.numSpotShadows!==N||C.numSpotMaps!==I||C.numLightProbes!==B)&&(r.directional.length=y,r.spot.length=T,r.rectArea.length=S,r.point.length=E,r.hemi.length=_,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=N+I-L,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=B,C.directionalLength=y,C.pointLength=E,C.spotLength=T,C.rectAreaLength=S,C.hemiLength=_,C.numDirectionalShadows=w,C.numPointShadows=b,C.numSpotShadows=N,C.numSpotMaps=I,C.numLightProbes=B,r.version=kN++)}function f(p,v){let g=0,x=0,y=0,E=0,T=0;const S=v.matrixWorldInverse;for(let _=0,w=p.length;_<w;_++){const b=p[_];if(b.isDirectionalLight){const N=r.directional[g];N.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(S),g++}else if(b.isSpotLight){const N=r.spot[y];N.position.setFromMatrixPosition(b.matrixWorld),N.position.applyMatrix4(S),N.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(S),y++}else if(b.isRectAreaLight){const N=r.rectArea[E];N.position.setFromMatrixPosition(b.matrixWorld),N.position.applyMatrix4(S),u.identity(),c.copy(b.matrixWorld),c.premultiply(S),u.extractRotation(c),N.halfWidth.set(b.width*.5,0,0),N.halfHeight.set(0,b.height*.5,0),N.halfWidth.applyMatrix4(u),N.halfHeight.applyMatrix4(u),E++}else if(b.isPointLight){const N=r.point[x];N.position.setFromMatrixPosition(b.matrixWorld),N.position.applyMatrix4(S),x++}else if(b.isHemisphereLight){const N=r.hemi[T];N.direction.setFromMatrixPosition(b.matrixWorld),N.direction.transformDirection(S),T++}}}return{setup:h,setupView:f,state:r}}function Tv(i){const e=new zN(i),t=[],r=[],o=[];function c(x){g.camera=x,t.length=0,r.length=0,o.length=0}function u(x){t.push(x)}function h(x){r.push(x)}function f(x){o.push(x)}function p(){e.setup(t)}function v(x){e.setupView(t,x)}const g={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:g,setupLights:p,setupLightsView:v,pushLight:u,pushShadow:h,pushLightProbeGrid:f}}function HN(i){let e=new WeakMap;function t(o,c=0){const u=e.get(o);let h;return u===void 0?(h=new Tv(i),e.set(o,[h])):c>=u.length?(h=new Tv(i),u.push(h)):h=u[c],h}function r(){e=new WeakMap}return{get:t,dispose:r}}const VN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GN=`uniform sampler2D shadow_pass;
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
}`,WN=[new ae(1,0,0),new ae(-1,0,0),new ae(0,1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1)],XN=[new ae(0,-1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1),new ae(0,-1,0),new ae(0,-1,0)],Cv=new sn,jo=new ae,Hh=new ae;function qN(i,e,t){let r=new wp;const o=new dt,c=new dt,u=new an,h=new t1,f=new n1,p={},v=t.maxTextureSize,g={[sr]:ni,[ni]:sr,[_s]:_s},x=new ts({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:VN,fragmentShader:GN}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const E=new Xn;E.setAttribute("position",new Ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Fi(E,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bc;let _=this.type;this.render=function(L,B,C){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||L.length===0)return;this.type===s0&&(ut("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Bc);const O=i.getRenderTarget(),Y=i.getActiveCubeFace(),V=i.getActiveMipmapLevel(),Q=i.state;Q.setBlending(Ms),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const G=_!==this.type;G&&B.traverse(function(ee){ee.material&&(Array.isArray(ee.material)?ee.material.forEach(F=>F.needsUpdate=!0):ee.material.needsUpdate=!0)});for(let ee=0,F=L.length;ee<F;ee++){const U=L[ee],W=U.shadow;if(W===void 0){ut("WebGLShadowMap:",U,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;o.copy(W.mapSize);const $=W.getFrameExtents();o.multiply($),c.copy(W.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(c.x=Math.floor(v/$.x),o.x=c.x*$.x,W.mapSize.x=c.x),o.y>v&&(c.y=Math.floor(v/$.y),o.y=c.y*$.y,W.mapSize.y=c.y));const X=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=X,W.map===null||G===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Oo){if(U.isPointLight){ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Qi(o.x,o.y,{format:Ir,type:ws,minFilter:Un,magFilter:Un,generateMipmaps:!1}),W.map.texture.name=U.name+".shadowMap",W.map.depthTexture=new Da(o.x,o.y,Yi),W.map.depthTexture.name=U.name+".shadowMapDepth",W.map.depthTexture.format=Ts,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Nn,W.map.depthTexture.magFilter=Nn}else U.isPointLight?(W.map=new k0(o.x),W.map.depthTexture=new Yb(o.x,es)):(W.map=new Qi(o.x,o.y),W.map.depthTexture=new Da(o.x,o.y,es)),W.map.depthTexture.name=U.name+".shadowMap",W.map.depthTexture.format=Ts,this.type===Bc?(W.map.depthTexture.compareFunction=X?Sp:yp,W.map.depthTexture.minFilter=Un,W.map.depthTexture.magFilter=Un):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Nn,W.map.depthTexture.magFilter=Nn);W.camera.updateProjectionMatrix()}const te=W.map.isWebGLCubeRenderTarget?6:1;for(let z=0;z<te;z++){if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,z),i.clear();else{z===0&&(i.setRenderTarget(W.map),i.clear());const se=W.getViewport(z);u.set(c.x*se.x,c.y*se.y,c.x*se.z,c.y*se.w),Q.viewport(u)}if(U.isPointLight){const se=W.camera,Pe=W.matrix,be=U.distance||se.far;be!==se.far&&(se.far=be,se.updateProjectionMatrix()),jo.setFromMatrixPosition(U.matrixWorld),se.position.copy(jo),Hh.copy(se.position),Hh.add(WN[z]),se.up.copy(XN[z]),se.lookAt(Hh),se.updateMatrixWorld(),Pe.makeTranslation(-jo.x,-jo.y,-jo.z),Cv.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Cv,se.coordinateSystem,se.reversedDepth)}else W.updateMatrices(U);r=W.getFrustum(),N(B,C,W.camera,U,this.type)}W.isPointLightShadow!==!0&&this.type===Oo&&w(W,C),W.needsUpdate=!1}_=this.type,S.needsUpdate=!1,i.setRenderTarget(O,Y,V)};function w(L,B){const C=e.update(T);x.defines.VSM_SAMPLES!==L.blurSamples&&(x.defines.VSM_SAMPLES=L.blurSamples,y.defines.VSM_SAMPLES=L.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Qi(o.x,o.y,{format:Ir,type:ws})),x.uniforms.shadow_pass.value=L.map.depthTexture,x.uniforms.resolution.value=L.mapSize,x.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(B,null,C,x,T,null),y.uniforms.shadow_pass.value=L.mapPass.texture,y.uniforms.resolution.value=L.mapSize,y.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(B,null,C,y,T,null)}function b(L,B,C,O){let Y=null;const V=C.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(V!==void 0)Y=V;else if(Y=C.isPointLight===!0?f:h,i.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const Q=Y.uuid,G=B.uuid;let ee=p[Q];ee===void 0&&(ee={},p[Q]=ee);let F=ee[G];F===void 0&&(F=Y.clone(),ee[G]=F,B.addEventListener("dispose",I)),Y=F}if(Y.visible=B.visible,Y.wireframe=B.wireframe,O===Oo?Y.side=B.shadowSide!==null?B.shadowSide:B.side:Y.side=B.shadowSide!==null?B.shadowSide:g[B.side],Y.alphaMap=B.alphaMap,Y.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,Y.map=B.map,Y.clipShadows=B.clipShadows,Y.clippingPlanes=B.clippingPlanes,Y.clipIntersection=B.clipIntersection,Y.displacementMap=B.displacementMap,Y.displacementScale=B.displacementScale,Y.displacementBias=B.displacementBias,Y.wireframeLinewidth=B.wireframeLinewidth,Y.linewidth=B.linewidth,C.isPointLight===!0&&Y.isMeshDistanceMaterial===!0){const Q=i.properties.get(Y);Q.light=C}return Y}function N(L,B,C,O,Y){if(L.visible===!1)return;if(L.layers.test(B.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&Y===Oo)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,L.matrixWorld);const G=e.update(L),ee=L.material;if(Array.isArray(ee)){const F=G.groups;for(let U=0,W=F.length;U<W;U++){const $=F[U],X=ee[$.materialIndex];if(X&&X.visible){const te=b(L,X,O,Y);L.onBeforeShadow(i,L,B,C,G,te,$),i.renderBufferDirect(C,null,G,te,L,$),L.onAfterShadow(i,L,B,C,G,te,$)}}}else if(ee.visible){const F=b(L,ee,O,Y);L.onBeforeShadow(i,L,B,C,G,F,null),i.renderBufferDirect(C,null,G,F,L,null),L.onAfterShadow(i,L,B,C,G,F,null)}}const Q=L.children;for(let G=0,ee=Q.length;G<ee;G++)N(Q[G],B,C,O,Y)}function I(L){L.target.removeEventListener("dispose",I);for(const C in p){const O=p[C],Y=L.target.uuid;Y in O&&(O[Y].dispose(),delete O[Y])}}}function $N(i,e){function t(){let J=!1;const Le=new an;let ve=null;const ze=new an(0,0,0,0);return{setMask:function(Ie){ve!==Ie&&!J&&(i.colorMask(Ie,Ie,Ie,Ie),ve=Ie)},setLocked:function(Ie){J=Ie},setClear:function(Ie,Se,Xe,ct,st){st===!0&&(Ie*=ct,Se*=ct,Xe*=ct),Le.set(Ie,Se,Xe,ct),ze.equals(Le)===!1&&(i.clearColor(Ie,Se,Xe,ct),ze.copy(Le))},reset:function(){J=!1,ve=null,ze.set(-1,0,0,0)}}}function r(){let J=!1,Le=!1,ve=null,ze=null,Ie=null;return{setReversed:function(Se){if(Le!==Se){const Xe=e.get("EXT_clip_control");Se?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),Le=Se;const ct=Ie;Ie=null,this.setClear(ct)}},getReversed:function(){return Le},setTest:function(Se){Se?fe(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(Se){ve!==Se&&!J&&(i.depthMask(Se),ve=Se)},setFunc:function(Se){if(Le&&(Se=_b[Se]),ze!==Se){switch(Se){case cf:i.depthFunc(i.NEVER);break;case uf:i.depthFunc(i.ALWAYS);break;case df:i.depthFunc(i.LESS);break;case La:i.depthFunc(i.LEQUAL);break;case hf:i.depthFunc(i.EQUAL);break;case ff:i.depthFunc(i.GEQUAL);break;case pf:i.depthFunc(i.GREATER);break;case mf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ze=Se}},setLocked:function(Se){J=Se},setClear:function(Se){Ie!==Se&&(Ie=Se,Le&&(Se=1-Se),i.clearDepth(Se))},reset:function(){J=!1,ve=null,ze=null,Ie=null,Le=!1}}}function o(){let J=!1,Le=null,ve=null,ze=null,Ie=null,Se=null,Xe=null,ct=null,st=null;return{setTest:function(bt){J||(bt?fe(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(bt){Le!==bt&&!J&&(i.stencilMask(bt),Le=bt)},setFunc:function(bt,On,di){(ve!==bt||ze!==On||Ie!==di)&&(i.stencilFunc(bt,On,di),ve=bt,ze=On,Ie=di)},setOp:function(bt,On,di){(Se!==bt||Xe!==On||ct!==di)&&(i.stencilOp(bt,On,di),Se=bt,Xe=On,ct=di)},setLocked:function(bt){J=bt},setClear:function(bt){st!==bt&&(i.clearStencil(bt),st=bt)},reset:function(){J=!1,Le=null,ve=null,ze=null,Ie=null,Se=null,Xe=null,ct=null,st=null}}}const c=new t,u=new r,h=new o,f=new WeakMap,p=new WeakMap;let v={},g={},x={},y=new WeakMap,E=[],T=null,S=!1,_=null,w=null,b=null,N=null,I=null,L=null,B=null,C=new Ct(0,0,0),O=0,Y=!1,V=null,Q=null,G=null,ee=null,F=null;const U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,$=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(X)[1]),W=$>=1):X.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),W=$>=2);let te=null,z={};const se=i.getParameter(i.SCISSOR_BOX),Pe=i.getParameter(i.VIEWPORT),be=new an().fromArray(se),Ne=new an().fromArray(Pe);function q(J,Le,ve,ze){const Ie=new Uint8Array(4),Se=i.createTexture();i.bindTexture(J,Se),i.texParameteri(J,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(J,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xe=0;Xe<ve;Xe++)J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?i.texImage3D(Le,0,i.RGBA,1,1,ze,0,i.RGBA,i.UNSIGNED_BYTE,Ie):i.texImage2D(Le+Xe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ie);return Se}const me={};me[i.TEXTURE_2D]=q(i.TEXTURE_2D,i.TEXTURE_2D,1),me[i.TEXTURE_CUBE_MAP]=q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[i.TEXTURE_2D_ARRAY]=q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),me[i.TEXTURE_3D]=q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),fe(i.DEPTH_TEST),u.setFunc(La),kt(!1),Bt(bx),fe(i.CULL_FACE),_t(Ms);function fe(J){v[J]!==!0&&(i.enable(J),v[J]=!0)}function xe(J){v[J]!==!1&&(i.disable(J),v[J]=!1)}function Ce(J,Le){return x[J]!==Le?(i.bindFramebuffer(J,Le),x[J]=Le,J===i.DRAW_FRAMEBUFFER&&(x[i.FRAMEBUFFER]=Le),J===i.FRAMEBUFFER&&(x[i.DRAW_FRAMEBUFFER]=Le),!0):!1}function He(J,Le){let ve=E,ze=!1;if(J){ve=y.get(Le),ve===void 0&&(ve=[],y.set(Le,ve));const Ie=J.textures;if(ve.length!==Ie.length||ve[0]!==i.COLOR_ATTACHMENT0){for(let Se=0,Xe=Ie.length;Se<Xe;Se++)ve[Se]=i.COLOR_ATTACHMENT0+Se;ve.length=Ie.length,ze=!0}}else ve[0]!==i.BACK&&(ve[0]=i.BACK,ze=!0);ze&&i.drawBuffers(ve)}function Et(J){return T!==J?(i.useProgram(J),T=J,!0):!1}const it={[Nr]:i.FUNC_ADD,[HE]:i.FUNC_SUBTRACT,[VE]:i.FUNC_REVERSE_SUBTRACT};it[GE]=i.MIN,it[WE]=i.MAX;const et={[XE]:i.ZERO,[qE]:i.ONE,[$E]:i.SRC_COLOR,[of]:i.SRC_ALPHA,[eb]:i.SRC_ALPHA_SATURATE,[JE]:i.DST_COLOR,[KE]:i.DST_ALPHA,[YE]:i.ONE_MINUS_SRC_COLOR,[lf]:i.ONE_MINUS_SRC_ALPHA,[QE]:i.ONE_MINUS_DST_COLOR,[ZE]:i.ONE_MINUS_DST_ALPHA,[tb]:i.CONSTANT_COLOR,[nb]:i.ONE_MINUS_CONSTANT_COLOR,[ib]:i.CONSTANT_ALPHA,[sb]:i.ONE_MINUS_CONSTANT_ALPHA};function _t(J,Le,ve,ze,Ie,Se,Xe,ct,st,bt){if(J===Ms){S===!0&&(xe(i.BLEND),S=!1);return}if(S===!1&&(fe(i.BLEND),S=!0),J!==zE){if(J!==_||bt!==Y){if((w!==Nr||I!==Nr)&&(i.blendEquation(i.FUNC_ADD),w=Nr,I=Nr),bt)switch(J){case Ra:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wx:i.blendFunc(i.ONE,i.ONE);break;case Tx:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cx:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Pt("WebGLState: Invalid blending: ",J);break}else switch(J){case Ra:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wx:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Tx:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cx:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",J);break}b=null,N=null,L=null,B=null,C.set(0,0,0),O=0,_=J,Y=bt}return}Ie=Ie||Le,Se=Se||ve,Xe=Xe||ze,(Le!==w||Ie!==I)&&(i.blendEquationSeparate(it[Le],it[Ie]),w=Le,I=Ie),(ve!==b||ze!==N||Se!==L||Xe!==B)&&(i.blendFuncSeparate(et[ve],et[ze],et[Se],et[Xe]),b=ve,N=ze,L=Se,B=Xe),(ct.equals(C)===!1||st!==O)&&(i.blendColor(ct.r,ct.g,ct.b,st),C.copy(ct),O=st),_=J,Y=!1}function ht(J,Le){J.side===_s?xe(i.CULL_FACE):fe(i.CULL_FACE);let ve=J.side===ni;Le&&(ve=!ve),kt(ve),J.blending===Ra&&J.transparent===!1?_t(Ms):_t(J.blending,J.blendEquation,J.blendSrc,J.blendDst,J.blendEquationAlpha,J.blendSrcAlpha,J.blendDstAlpha,J.blendColor,J.blendAlpha,J.premultipliedAlpha),u.setFunc(J.depthFunc),u.setTest(J.depthTest),u.setMask(J.depthWrite),c.setMask(J.colorWrite);const ze=J.stencilWrite;h.setTest(ze),ze&&(h.setMask(J.stencilWriteMask),h.setFunc(J.stencilFunc,J.stencilRef,J.stencilFuncMask),h.setOp(J.stencilFail,J.stencilZFail,J.stencilZPass)),ne(J.polygonOffset,J.polygonOffsetFactor,J.polygonOffsetUnits),J.alphaToCoverage===!0?fe(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function kt(J){V!==J&&(J?i.frontFace(i.CW):i.frontFace(i.CCW),V=J)}function Bt(J){J!==kE?(fe(i.CULL_FACE),J!==Q&&(J===bx?i.cullFace(i.BACK):J===BE?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),Q=J}function hn(J){J!==G&&(W&&i.lineWidth(J),G=J)}function ne(J,Le,ve){J?(fe(i.POLYGON_OFFSET_FILL),(ee!==Le||F!==ve)&&(ee=Le,F=ve,u.getReversed()&&(Le=-Le),i.polygonOffset(Le,ve))):xe(i.POLYGON_OFFSET_FILL)}function zt(J){J?fe(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function pt(J){J===void 0&&(J=i.TEXTURE0+U-1),te!==J&&(i.activeTexture(J),te=J)}function Dt(J,Le,ve){ve===void 0&&(te===null?ve=i.TEXTURE0+U-1:ve=te);let ze=z[ve];ze===void 0&&(ze={type:void 0,texture:void 0},z[ve]=ze),(ze.type!==J||ze.texture!==Le)&&(te!==ve&&(i.activeTexture(ve),te=ve),i.bindTexture(J,Le||me[J]),ze.type=J,ze.texture=Le)}function Oe(){const J=z[te];J!==void 0&&J.type!==void 0&&(i.bindTexture(J.type,null),J.type=void 0,J.texture=void 0)}function Gt(){try{i.compressedTexImage2D(...arguments)}catch(J){Pt("WebGLState:",J)}}function j(){try{i.compressedTexImage3D(...arguments)}catch(J){Pt("WebGLState:",J)}}function A(){try{i.texSubImage2D(...arguments)}catch(J){Pt("WebGLState:",J)}}function oe(){try{i.texSubImage3D(...arguments)}catch(J){Pt("WebGLState:",J)}}function _e(){try{i.compressedTexSubImage2D(...arguments)}catch(J){Pt("WebGLState:",J)}}function Ee(){try{i.compressedTexSubImage3D(...arguments)}catch(J){Pt("WebGLState:",J)}}function Re(){try{i.texStorage2D(...arguments)}catch(J){Pt("WebGLState:",J)}}function Ue(){try{i.texStorage3D(...arguments)}catch(J){Pt("WebGLState:",J)}}function ge(){try{i.texImage2D(...arguments)}catch(J){Pt("WebGLState:",J)}}function ye(){try{i.texImage3D(...arguments)}catch(J){Pt("WebGLState:",J)}}function ke(J){return g[J]!==void 0?g[J]:i.getParameter(J)}function k(J,Le){g[J]!==Le&&(i.pixelStorei(J,Le),g[J]=Le)}function K(J){be.equals(J)===!1&&(i.scissor(J.x,J.y,J.z,J.w),be.copy(J))}function Me(J){Ne.equals(J)===!1&&(i.viewport(J.x,J.y,J.z,J.w),Ne.copy(J))}function $e(J,Le){let ve=p.get(Le);ve===void 0&&(ve=new WeakMap,p.set(Le,ve));let ze=ve.get(J);ze===void 0&&(ze=i.getUniformBlockIndex(Le,J.name),ve.set(J,ze))}function rt(J,Le){const ze=p.get(Le).get(J);f.get(Le)!==ze&&(i.uniformBlockBinding(Le,ze,J.__bindingPointIndex),f.set(Le,ze))}function ft(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),u.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),v={},g={},te=null,z={},x={},y=new WeakMap,E=[],T=null,S=!1,_=null,w=null,b=null,N=null,I=null,L=null,B=null,C=new Ct(0,0,0),O=0,Y=!1,V=null,Q=null,G=null,ee=null,F=null,be.set(0,0,i.canvas.width,i.canvas.height),Ne.set(0,0,i.canvas.width,i.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:fe,disable:xe,bindFramebuffer:Ce,drawBuffers:He,useProgram:Et,setBlending:_t,setMaterial:ht,setFlipSided:kt,setCullFace:Bt,setLineWidth:hn,setPolygonOffset:ne,setScissorTest:zt,activeTexture:pt,bindTexture:Dt,unbindTexture:Oe,compressedTexImage2D:Gt,compressedTexImage3D:j,texImage2D:ge,texImage3D:ye,pixelStorei:k,getParameter:ke,updateUBOMapping:$e,uniformBlockBinding:rt,texStorage2D:Re,texStorage3D:Ue,texSubImage2D:A,texSubImage3D:oe,compressedTexSubImage2D:_e,compressedTexSubImage3D:Ee,scissor:K,viewport:Me,reset:ft}}function YN(i,e,t,r,o,c,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new dt,v=new WeakMap,g=new Set;let x;const y=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(j,A){return E?new OffscreenCanvas(j,A):Qc("canvas")}function S(j,A,oe){let _e=1;const Ee=Gt(j);if((Ee.width>oe||Ee.height>oe)&&(_e=oe/Math.max(Ee.width,Ee.height)),_e<1)if(typeof HTMLImageElement<"u"&&j instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&j instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&j instanceof ImageBitmap||typeof VideoFrame<"u"&&j instanceof VideoFrame){const Re=Math.floor(_e*Ee.width),Ue=Math.floor(_e*Ee.height);x===void 0&&(x=T(Re,Ue));const ge=A?T(Re,Ue):x;return ge.width=Re,ge.height=Ue,ge.getContext("2d").drawImage(j,0,0,Re,Ue),ut("WebGLRenderer: Texture has been resized from ("+Ee.width+"x"+Ee.height+") to ("+Re+"x"+Ue+")."),ge}else return"data"in j&&ut("WebGLRenderer: Image in DataTexture is too big ("+Ee.width+"x"+Ee.height+")."),j;return j}function _(j){return j.generateMipmaps}function w(j){i.generateMipmap(j)}function b(j){return j.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:j.isWebGL3DRenderTarget?i.TEXTURE_3D:j.isWebGLArrayRenderTarget||j.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function N(j,A,oe,_e,Ee,Re=!1){if(j!==null){if(i[j]!==void 0)return i[j];ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+j+"'")}let Ue;_e&&(Ue=e.get("EXT_texture_norm16"),Ue||ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ge=A;if(A===i.RED&&(oe===i.FLOAT&&(ge=i.R32F),oe===i.HALF_FLOAT&&(ge=i.R16F),oe===i.UNSIGNED_BYTE&&(ge=i.R8),oe===i.UNSIGNED_SHORT&&Ue&&(ge=Ue.R16_EXT),oe===i.SHORT&&Ue&&(ge=Ue.R16_SNORM_EXT)),A===i.RED_INTEGER&&(oe===i.UNSIGNED_BYTE&&(ge=i.R8UI),oe===i.UNSIGNED_SHORT&&(ge=i.R16UI),oe===i.UNSIGNED_INT&&(ge=i.R32UI),oe===i.BYTE&&(ge=i.R8I),oe===i.SHORT&&(ge=i.R16I),oe===i.INT&&(ge=i.R32I)),A===i.RG&&(oe===i.FLOAT&&(ge=i.RG32F),oe===i.HALF_FLOAT&&(ge=i.RG16F),oe===i.UNSIGNED_BYTE&&(ge=i.RG8),oe===i.UNSIGNED_SHORT&&Ue&&(ge=Ue.RG16_EXT),oe===i.SHORT&&Ue&&(ge=Ue.RG16_SNORM_EXT)),A===i.RG_INTEGER&&(oe===i.UNSIGNED_BYTE&&(ge=i.RG8UI),oe===i.UNSIGNED_SHORT&&(ge=i.RG16UI),oe===i.UNSIGNED_INT&&(ge=i.RG32UI),oe===i.BYTE&&(ge=i.RG8I),oe===i.SHORT&&(ge=i.RG16I),oe===i.INT&&(ge=i.RG32I)),A===i.RGB_INTEGER&&(oe===i.UNSIGNED_BYTE&&(ge=i.RGB8UI),oe===i.UNSIGNED_SHORT&&(ge=i.RGB16UI),oe===i.UNSIGNED_INT&&(ge=i.RGB32UI),oe===i.BYTE&&(ge=i.RGB8I),oe===i.SHORT&&(ge=i.RGB16I),oe===i.INT&&(ge=i.RGB32I)),A===i.RGBA_INTEGER&&(oe===i.UNSIGNED_BYTE&&(ge=i.RGBA8UI),oe===i.UNSIGNED_SHORT&&(ge=i.RGBA16UI),oe===i.UNSIGNED_INT&&(ge=i.RGBA32UI),oe===i.BYTE&&(ge=i.RGBA8I),oe===i.SHORT&&(ge=i.RGBA16I),oe===i.INT&&(ge=i.RGBA32I)),A===i.RGB&&(oe===i.UNSIGNED_SHORT&&Ue&&(ge=Ue.RGB16_EXT),oe===i.SHORT&&Ue&&(ge=Ue.RGB16_SNORM_EXT),oe===i.UNSIGNED_INT_5_9_9_9_REV&&(ge=i.RGB9_E5),oe===i.UNSIGNED_INT_10F_11F_11F_REV&&(ge=i.R11F_G11F_B10F)),A===i.RGBA){const ye=Re?Jc:At.getTransfer(Ee);oe===i.FLOAT&&(ge=i.RGBA32F),oe===i.HALF_FLOAT&&(ge=i.RGBA16F),oe===i.UNSIGNED_BYTE&&(ge=ye===Ot?i.SRGB8_ALPHA8:i.RGBA8),oe===i.UNSIGNED_SHORT&&Ue&&(ge=Ue.RGBA16_EXT),oe===i.SHORT&&Ue&&(ge=Ue.RGBA16_SNORM_EXT),oe===i.UNSIGNED_SHORT_4_4_4_4&&(ge=i.RGBA4),oe===i.UNSIGNED_SHORT_5_5_5_1&&(ge=i.RGB5_A1)}return(ge===i.R16F||ge===i.R32F||ge===i.RG16F||ge===i.RG32F||ge===i.RGBA16F||ge===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function I(j,A){let oe;return j?A===null||A===es||A===Wo?oe=i.DEPTH24_STENCIL8:A===Yi?oe=i.DEPTH32F_STENCIL8:A===Go&&(oe=i.DEPTH24_STENCIL8,ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===es||A===Wo?oe=i.DEPTH_COMPONENT24:A===Yi?oe=i.DEPTH_COMPONENT32F:A===Go&&(oe=i.DEPTH_COMPONENT16),oe}function L(j,A){return _(j)===!0||j.isFramebufferTexture&&j.minFilter!==Nn&&j.minFilter!==Un?Math.log2(Math.max(A.width,A.height))+1:j.mipmaps!==void 0&&j.mipmaps.length>0?j.mipmaps.length:j.isCompressedTexture&&Array.isArray(j.image)?A.mipmaps.length:1}function B(j){const A=j.target;A.removeEventListener("dispose",B),O(A),A.isVideoTexture&&v.delete(A),A.isHTMLTexture&&g.delete(A)}function C(j){const A=j.target;A.removeEventListener("dispose",C),V(A)}function O(j){const A=r.get(j);if(A.__webglInit===void 0)return;const oe=j.source,_e=y.get(oe);if(_e){const Ee=_e[A.__cacheKey];Ee.usedTimes--,Ee.usedTimes===0&&Y(j),Object.keys(_e).length===0&&y.delete(oe)}r.remove(j)}function Y(j){const A=r.get(j);i.deleteTexture(A.__webglTexture);const oe=j.source,_e=y.get(oe);delete _e[A.__cacheKey],u.memory.textures--}function V(j){const A=r.get(j);if(j.depthTexture&&(j.depthTexture.dispose(),r.remove(j.depthTexture)),j.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(A.__webglFramebuffer[_e]))for(let Ee=0;Ee<A.__webglFramebuffer[_e].length;Ee++)i.deleteFramebuffer(A.__webglFramebuffer[_e][Ee]);else i.deleteFramebuffer(A.__webglFramebuffer[_e]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[_e])}else{if(Array.isArray(A.__webglFramebuffer))for(let _e=0;_e<A.__webglFramebuffer.length;_e++)i.deleteFramebuffer(A.__webglFramebuffer[_e]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let _e=0;_e<A.__webglColorRenderbuffer.length;_e++)A.__webglColorRenderbuffer[_e]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[_e]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const oe=j.textures;for(let _e=0,Ee=oe.length;_e<Ee;_e++){const Re=r.get(oe[_e]);Re.__webglTexture&&(i.deleteTexture(Re.__webglTexture),u.memory.textures--),r.remove(oe[_e])}r.remove(j)}let Q=0;function G(){Q=0}function ee(){return Q}function F(j){Q=j}function U(){const j=Q;return j>=o.maxTextures&&ut("WebGLTextures: Trying to use "+j+" texture units while this GPU supports only "+o.maxTextures),Q+=1,j}function W(j){const A=[];return A.push(j.wrapS),A.push(j.wrapT),A.push(j.wrapR||0),A.push(j.magFilter),A.push(j.minFilter),A.push(j.anisotropy),A.push(j.internalFormat),A.push(j.format),A.push(j.type),A.push(j.generateMipmaps),A.push(j.premultiplyAlpha),A.push(j.flipY),A.push(j.unpackAlignment),A.push(j.colorSpace),A.join()}function $(j,A){const oe=r.get(j);if(j.isVideoTexture&&Dt(j),j.isRenderTargetTexture===!1&&j.isExternalTexture!==!0&&j.version>0&&oe.__version!==j.version){const _e=j.image;if(_e===null)ut("WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)ut("WebGLRenderer: Texture marked for update but image is incomplete");else{xe(oe,j,A);return}}else j.isExternalTexture&&(oe.__webglTexture=j.sourceTexture?j.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,oe.__webglTexture,i.TEXTURE0+A)}function X(j,A){const oe=r.get(j);if(j.isRenderTargetTexture===!1&&j.version>0&&oe.__version!==j.version){xe(oe,j,A);return}else j.isExternalTexture&&(oe.__webglTexture=j.sourceTexture?j.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,oe.__webglTexture,i.TEXTURE0+A)}function te(j,A){const oe=r.get(j);if(j.isRenderTargetTexture===!1&&j.version>0&&oe.__version!==j.version){xe(oe,j,A);return}t.bindTexture(i.TEXTURE_3D,oe.__webglTexture,i.TEXTURE0+A)}function z(j,A){const oe=r.get(j);if(j.isCubeDepthTexture!==!0&&j.version>0&&oe.__version!==j.version){Ce(oe,j,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,oe.__webglTexture,i.TEXTURE0+A)}const se={[gf]:i.REPEAT,[ys]:i.CLAMP_TO_EDGE,[xf]:i.MIRRORED_REPEAT},Pe={[Nn]:i.NEAREST,[ob]:i.NEAREST_MIPMAP_NEAREST,[nc]:i.NEAREST_MIPMAP_LINEAR,[Un]:i.LINEAR,[uh]:i.LINEAR_MIPMAP_NEAREST,[Rr]:i.LINEAR_MIPMAP_LINEAR},be={[ub]:i.NEVER,[mb]:i.ALWAYS,[db]:i.LESS,[yp]:i.LEQUAL,[hb]:i.EQUAL,[Sp]:i.GEQUAL,[fb]:i.GREATER,[pb]:i.NOTEQUAL};function Ne(j,A){if(A.type===Yi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Un||A.magFilter===uh||A.magFilter===nc||A.magFilter===Rr||A.minFilter===Un||A.minFilter===uh||A.minFilter===nc||A.minFilter===Rr)&&ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(j,i.TEXTURE_WRAP_S,se[A.wrapS]),i.texParameteri(j,i.TEXTURE_WRAP_T,se[A.wrapT]),(j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY)&&i.texParameteri(j,i.TEXTURE_WRAP_R,se[A.wrapR]),i.texParameteri(j,i.TEXTURE_MAG_FILTER,Pe[A.magFilter]),i.texParameteri(j,i.TEXTURE_MIN_FILTER,Pe[A.minFilter]),A.compareFunction&&(i.texParameteri(j,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(j,i.TEXTURE_COMPARE_FUNC,be[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Nn||A.minFilter!==nc&&A.minFilter!==Rr||A.type===Yi&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const oe=e.get("EXT_texture_filter_anisotropic");i.texParameterf(j,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,o.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function q(j,A){let oe=!1;j.__webglInit===void 0&&(j.__webglInit=!0,A.addEventListener("dispose",B));const _e=A.source;let Ee=y.get(_e);Ee===void 0&&(Ee={},y.set(_e,Ee));const Re=W(A);if(Re!==j.__cacheKey){Ee[Re]===void 0&&(Ee[Re]={texture:i.createTexture(),usedTimes:0},u.memory.textures++,oe=!0),Ee[Re].usedTimes++;const Ue=Ee[j.__cacheKey];Ue!==void 0&&(Ee[j.__cacheKey].usedTimes--,Ue.usedTimes===0&&Y(A)),j.__cacheKey=Re,j.__webglTexture=Ee[Re].texture}return oe}function me(j,A,oe){return Math.floor(Math.floor(j/oe)/A)}function fe(j,A,oe,_e){const Re=j.updateRanges;if(Re.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,A.width,A.height,oe,_e,A.data);else{Re.sort((k,K)=>k.start-K.start);let Ue=0;for(let k=1;k<Re.length;k++){const K=Re[Ue],Me=Re[k],$e=K.start+K.count,rt=me(Me.start,A.width,4),ft=me(K.start,A.width,4);Me.start<=$e+1&&rt===ft&&me(Me.start+Me.count-1,A.width,4)===rt?K.count=Math.max(K.count,Me.start+Me.count-K.start):(++Ue,Re[Ue]=Me)}Re.length=Ue+1;const ge=t.getParameter(i.UNPACK_ROW_LENGTH),ye=t.getParameter(i.UNPACK_SKIP_PIXELS),ke=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,A.width);for(let k=0,K=Re.length;k<K;k++){const Me=Re[k],$e=Math.floor(Me.start/4),rt=Math.ceil(Me.count/4),ft=$e%A.width,J=Math.floor($e/A.width),Le=rt,ve=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ft),t.pixelStorei(i.UNPACK_SKIP_ROWS,J),t.texSubImage2D(i.TEXTURE_2D,0,ft,J,Le,ve,oe,_e,A.data)}j.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ge),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ye),t.pixelStorei(i.UNPACK_SKIP_ROWS,ke)}}function xe(j,A,oe){let _e=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(_e=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(_e=i.TEXTURE_3D);const Ee=q(j,A),Re=A.source;t.bindTexture(_e,j.__webglTexture,i.TEXTURE0+oe);const Ue=r.get(Re);if(Re.version!==Ue.__version||Ee===!0){if(t.activeTexture(i.TEXTURE0+oe),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const ve=At.getPrimaries(At.workingColorSpace),ze=A.colorSpace===tr?null:At.getPrimaries(A.colorSpace),Ie=A.colorSpace===tr||ve===ze?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie)}t.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment);let ye=S(A.image,!1,o.maxTextureSize);ye=Oe(A,ye);const ke=c.convert(A.format,A.colorSpace),k=c.convert(A.type);let K=N(A.internalFormat,ke,k,A.normalized,A.colorSpace,A.isVideoTexture);Ne(_e,A);let Me;const $e=A.mipmaps,rt=A.isVideoTexture!==!0,ft=Ue.__version===void 0||Ee===!0,J=Re.dataReady,Le=L(A,ye);if(A.isDepthTexture)K=I(A.format===Pr,A.type),ft&&(rt?t.texStorage2D(i.TEXTURE_2D,1,K,ye.width,ye.height):t.texImage2D(i.TEXTURE_2D,0,K,ye.width,ye.height,0,ke,k,null));else if(A.isDataTexture)if($e.length>0){rt&&ft&&t.texStorage2D(i.TEXTURE_2D,Le,K,$e[0].width,$e[0].height);for(let ve=0,ze=$e.length;ve<ze;ve++)Me=$e[ve],rt?J&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,Me.width,Me.height,ke,k,Me.data):t.texImage2D(i.TEXTURE_2D,ve,K,Me.width,Me.height,0,ke,k,Me.data);A.generateMipmaps=!1}else rt?(ft&&t.texStorage2D(i.TEXTURE_2D,Le,K,ye.width,ye.height),J&&fe(A,ye,ke,k)):t.texImage2D(i.TEXTURE_2D,0,K,ye.width,ye.height,0,ke,k,ye.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){rt&&ft&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,K,$e[0].width,$e[0].height,ye.depth);for(let ve=0,ze=$e.length;ve<ze;ve++)if(Me=$e[ve],A.format!==ji)if(ke!==null)if(rt){if(J)if(A.layerUpdates.size>0){const Ie=sv(Me.width,Me.height,A.format,A.type);for(const Se of A.layerUpdates){const Xe=Me.data.subarray(Se*Ie/Me.data.BYTES_PER_ELEMENT,(Se+1)*Ie/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,Se,Me.width,Me.height,1,ke,Xe)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,0,Me.width,Me.height,ye.depth,ke,Me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ve,K,Me.width,Me.height,ye.depth,0,Me.data,0,0);else ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?J&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,0,Me.width,Me.height,ye.depth,ke,k,Me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ve,K,Me.width,Me.height,ye.depth,0,ke,k,Me.data)}else{rt&&ft&&t.texStorage2D(i.TEXTURE_2D,Le,K,$e[0].width,$e[0].height);for(let ve=0,ze=$e.length;ve<ze;ve++)Me=$e[ve],A.format!==ji?ke!==null?rt?J&&t.compressedTexSubImage2D(i.TEXTURE_2D,ve,0,0,Me.width,Me.height,ke,Me.data):t.compressedTexImage2D(i.TEXTURE_2D,ve,K,Me.width,Me.height,0,Me.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?J&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,Me.width,Me.height,ke,k,Me.data):t.texImage2D(i.TEXTURE_2D,ve,K,Me.width,Me.height,0,ke,k,Me.data)}else if(A.isDataArrayTexture)if(rt){if(ft&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,K,ye.width,ye.height,ye.depth),J)if(A.layerUpdates.size>0){const ve=sv(ye.width,ye.height,A.format,A.type);for(const ze of A.layerUpdates){const Ie=ye.data.subarray(ze*ve/ye.data.BYTES_PER_ELEMENT,(ze+1)*ve/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ze,ye.width,ye.height,1,ke,k,Ie)}A.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,ke,k,ye.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,K,ye.width,ye.height,ye.depth,0,ke,k,ye.data);else if(A.isData3DTexture)rt?(ft&&t.texStorage3D(i.TEXTURE_3D,Le,K,ye.width,ye.height,ye.depth),J&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,ke,k,ye.data)):t.texImage3D(i.TEXTURE_3D,0,K,ye.width,ye.height,ye.depth,0,ke,k,ye.data);else if(A.isFramebufferTexture){if(ft)if(rt)t.texStorage2D(i.TEXTURE_2D,Le,K,ye.width,ye.height);else{let ve=ye.width,ze=ye.height;for(let Ie=0;Ie<Le;Ie++)t.texImage2D(i.TEXTURE_2D,Ie,K,ve,ze,0,ke,k,null),ve>>=1,ze>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in i){const ve=i.canvas;if(ve.hasAttribute("layoutsubtree")||ve.setAttribute("layoutsubtree","true"),ye.parentNode!==ve){ve.appendChild(ye),g.add(A),ve.onpaint=ct=>{const st=ct.changedElements;for(const bt of g)st.includes(bt.image)&&(bt.needsUpdate=!0)},ve.requestPaint();return}const ze=0,Ie=i.RGBA,Se=i.RGBA,Xe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,ze,Ie,Se,Xe,ye),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if($e.length>0){if(rt&&ft){const ve=Gt($e[0]);t.texStorage2D(i.TEXTURE_2D,Le,K,ve.width,ve.height)}for(let ve=0,ze=$e.length;ve<ze;ve++)Me=$e[ve],rt?J&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,ke,k,Me):t.texImage2D(i.TEXTURE_2D,ve,K,ke,k,Me);A.generateMipmaps=!1}else if(rt){if(ft){const ve=Gt(ye);t.texStorage2D(i.TEXTURE_2D,Le,K,ve.width,ve.height)}J&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ke,k,ye)}else t.texImage2D(i.TEXTURE_2D,0,K,ke,k,ye);_(A)&&w(_e),Ue.__version=Re.version,A.onUpdate&&A.onUpdate(A)}j.__version=A.version}function Ce(j,A,oe){if(A.image.length!==6)return;const _e=q(j,A),Ee=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture,i.TEXTURE0+oe);const Re=r.get(Ee);if(Ee.version!==Re.__version||_e===!0){t.activeTexture(i.TEXTURE0+oe);const Ue=At.getPrimaries(At.workingColorSpace),ge=A.colorSpace===tr?null:At.getPrimaries(A.colorSpace),ye=A.colorSpace===tr||Ue===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const ke=A.isCompressedTexture||A.image[0].isCompressedTexture,k=A.image[0]&&A.image[0].isDataTexture,K=[];for(let Se=0;Se<6;Se++)!ke&&!k?K[Se]=S(A.image[Se],!0,o.maxCubemapSize):K[Se]=k?A.image[Se].image:A.image[Se],K[Se]=Oe(A,K[Se]);const Me=K[0],$e=c.convert(A.format,A.colorSpace),rt=c.convert(A.type),ft=N(A.internalFormat,$e,rt,A.normalized,A.colorSpace),J=A.isVideoTexture!==!0,Le=Re.__version===void 0||_e===!0,ve=Ee.dataReady;let ze=L(A,Me);Ne(i.TEXTURE_CUBE_MAP,A);let Ie;if(ke){J&&Le&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ze,ft,Me.width,Me.height);for(let Se=0;Se<6;Se++){Ie=K[Se].mipmaps;for(let Xe=0;Xe<Ie.length;Xe++){const ct=Ie[Xe];A.format!==ji?$e!==null?J?ve&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Xe,0,0,ct.width,ct.height,$e,ct.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Xe,ft,ct.width,ct.height,0,ct.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):J?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Xe,0,0,ct.width,ct.height,$e,rt,ct.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Xe,ft,ct.width,ct.height,0,$e,rt,ct.data)}}}else{if(Ie=A.mipmaps,J&&Le){Ie.length>0&&ze++;const Se=Gt(K[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ze,ft,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(k){J?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,K[Se].width,K[Se].height,$e,rt,K[Se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ft,K[Se].width,K[Se].height,0,$e,rt,K[Se].data);for(let Xe=0;Xe<Ie.length;Xe++){const st=Ie[Xe].image[Se].image;J?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Xe+1,0,0,st.width,st.height,$e,rt,st.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Xe+1,ft,st.width,st.height,0,$e,rt,st.data)}}else{J?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,$e,rt,K[Se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ft,$e,rt,K[Se]);for(let Xe=0;Xe<Ie.length;Xe++){const ct=Ie[Xe];J?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Xe+1,0,0,$e,rt,ct.image[Se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Xe+1,ft,$e,rt,ct.image[Se])}}}_(A)&&w(i.TEXTURE_CUBE_MAP),Re.__version=Ee.version,A.onUpdate&&A.onUpdate(A)}j.__version=A.version}function He(j,A,oe,_e,Ee,Re){const Ue=c.convert(oe.format,oe.colorSpace),ge=c.convert(oe.type),ye=N(oe.internalFormat,Ue,ge,oe.normalized,oe.colorSpace),ke=r.get(A),k=r.get(oe);if(k.__renderTarget=A,!ke.__hasExternalTextures){const K=Math.max(1,A.width>>Re),Me=Math.max(1,A.height>>Re);Ee===i.TEXTURE_3D||Ee===i.TEXTURE_2D_ARRAY?t.texImage3D(Ee,Re,ye,K,Me,A.depth,0,Ue,ge,null):t.texImage2D(Ee,Re,ye,K,Me,0,Ue,ge,null)}t.bindFramebuffer(i.FRAMEBUFFER,j),pt(A)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_e,Ee,k.__webglTexture,0,zt(A)):(Ee===i.TEXTURE_2D||Ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,_e,Ee,k.__webglTexture,Re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Et(j,A,oe){if(i.bindRenderbuffer(i.RENDERBUFFER,j),A.depthBuffer){const _e=A.depthTexture,Ee=_e&&_e.isDepthTexture?_e.type:null,Re=I(A.stencilBuffer,Ee),Ue=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;pt(A)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,zt(A),Re,A.width,A.height):oe?i.renderbufferStorageMultisample(i.RENDERBUFFER,zt(A),Re,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,Re,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ue,i.RENDERBUFFER,j)}else{const _e=A.textures;for(let Ee=0;Ee<_e.length;Ee++){const Re=_e[Ee],Ue=c.convert(Re.format,Re.colorSpace),ge=c.convert(Re.type),ye=N(Re.internalFormat,Ue,ge,Re.normalized,Re.colorSpace);pt(A)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,zt(A),ye,A.width,A.height):oe?i.renderbufferStorageMultisample(i.RENDERBUFFER,zt(A),ye,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,ye,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function it(j,A,oe){const _e=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,j),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Ee=r.get(A.depthTexture);if(Ee.__renderTarget=A,(!Ee.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),_e){if(Ee.__webglInit===void 0&&(Ee.__webglInit=!0,A.depthTexture.addEventListener("dispose",B)),Ee.__webglTexture===void 0){Ee.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Ee.__webglTexture),Ne(i.TEXTURE_CUBE_MAP,A.depthTexture);const ke=c.convert(A.depthTexture.format),k=c.convert(A.depthTexture.type);let K;A.depthTexture.format===Ts?K=i.DEPTH_COMPONENT24:A.depthTexture.format===Pr&&(K=i.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,K,A.width,A.height,0,ke,k,null)}}else $(A.depthTexture,0);const Re=Ee.__webglTexture,Ue=zt(A),ge=_e?i.TEXTURE_CUBE_MAP_POSITIVE_X+oe:i.TEXTURE_2D,ye=A.depthTexture.format===Pr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(A.depthTexture.format===Ts)pt(A)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ye,ge,Re,0,Ue):i.framebufferTexture2D(i.FRAMEBUFFER,ye,ge,Re,0);else if(A.depthTexture.format===Pr)pt(A)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ye,ge,Re,0,Ue):i.framebufferTexture2D(i.FRAMEBUFFER,ye,ge,Re,0);else throw new Error("Unknown depthTexture format")}function et(j){const A=r.get(j),oe=j.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==j.depthTexture){const _e=j.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),_e){const Ee=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,_e.removeEventListener("dispose",Ee)};_e.addEventListener("dispose",Ee),A.__depthDisposeCallback=Ee}A.__boundDepthTexture=_e}if(j.depthTexture&&!A.__autoAllocateDepthBuffer)if(oe)for(let _e=0;_e<6;_e++)it(A.__webglFramebuffer[_e],j,_e);else{const _e=j.texture.mipmaps;_e&&_e.length>0?it(A.__webglFramebuffer[0],j,0):it(A.__webglFramebuffer,j,0)}else if(oe){A.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[_e]),A.__webglDepthbuffer[_e]===void 0)A.__webglDepthbuffer[_e]=i.createRenderbuffer(),Et(A.__webglDepthbuffer[_e],j,!1);else{const Ee=j.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=A.__webglDepthbuffer[_e];i.bindRenderbuffer(i.RENDERBUFFER,Re),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ee,i.RENDERBUFFER,Re)}}else{const _e=j.texture.mipmaps;if(_e&&_e.length>0?t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),Et(A.__webglDepthbuffer,j,!1);else{const Ee=j.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Re),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ee,i.RENDERBUFFER,Re)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function _t(j,A,oe){const _e=r.get(j);A!==void 0&&He(_e.__webglFramebuffer,j,j.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),oe!==void 0&&et(j)}function ht(j){const A=j.texture,oe=r.get(j),_e=r.get(A);j.addEventListener("dispose",C);const Ee=j.textures,Re=j.isWebGLCubeRenderTarget===!0,Ue=Ee.length>1;if(Ue||(_e.__webglTexture===void 0&&(_e.__webglTexture=i.createTexture()),_e.__version=A.version,u.memory.textures++),Re){oe.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(A.mipmaps&&A.mipmaps.length>0){oe.__webglFramebuffer[ge]=[];for(let ye=0;ye<A.mipmaps.length;ye++)oe.__webglFramebuffer[ge][ye]=i.createFramebuffer()}else oe.__webglFramebuffer[ge]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){oe.__webglFramebuffer=[];for(let ge=0;ge<A.mipmaps.length;ge++)oe.__webglFramebuffer[ge]=i.createFramebuffer()}else oe.__webglFramebuffer=i.createFramebuffer();if(Ue)for(let ge=0,ye=Ee.length;ge<ye;ge++){const ke=r.get(Ee[ge]);ke.__webglTexture===void 0&&(ke.__webglTexture=i.createTexture(),u.memory.textures++)}if(j.samples>0&&pt(j)===!1){oe.__webglMultisampledFramebuffer=i.createFramebuffer(),oe.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer);for(let ge=0;ge<Ee.length;ge++){const ye=Ee[ge];oe.__webglColorRenderbuffer[ge]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,oe.__webglColorRenderbuffer[ge]);const ke=c.convert(ye.format,ye.colorSpace),k=c.convert(ye.type),K=N(ye.internalFormat,ke,k,ye.normalized,ye.colorSpace,j.isXRRenderTarget===!0),Me=zt(j);i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,K,j.width,j.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,oe.__webglColorRenderbuffer[ge])}i.bindRenderbuffer(i.RENDERBUFFER,null),j.depthBuffer&&(oe.__webglDepthRenderbuffer=i.createRenderbuffer(),Et(oe.__webglDepthRenderbuffer,j,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Re){t.bindTexture(i.TEXTURE_CUBE_MAP,_e.__webglTexture),Ne(i.TEXTURE_CUBE_MAP,A);for(let ge=0;ge<6;ge++)if(A.mipmaps&&A.mipmaps.length>0)for(let ye=0;ye<A.mipmaps.length;ye++)He(oe.__webglFramebuffer[ge][ye],j,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ye);else He(oe.__webglFramebuffer[ge],j,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);_(A)&&w(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ue){for(let ge=0,ye=Ee.length;ge<ye;ge++){const ke=Ee[ge],k=r.get(ke);let K=i.TEXTURE_2D;(j.isWebGL3DRenderTarget||j.isWebGLArrayRenderTarget)&&(K=j.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,k.__webglTexture),Ne(K,ke),He(oe.__webglFramebuffer,j,ke,i.COLOR_ATTACHMENT0+ge,K,0),_(ke)&&w(K)}t.unbindTexture()}else{let ge=i.TEXTURE_2D;if((j.isWebGL3DRenderTarget||j.isWebGLArrayRenderTarget)&&(ge=j.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,_e.__webglTexture),Ne(ge,A),A.mipmaps&&A.mipmaps.length>0)for(let ye=0;ye<A.mipmaps.length;ye++)He(oe.__webglFramebuffer[ye],j,A,i.COLOR_ATTACHMENT0,ge,ye);else He(oe.__webglFramebuffer,j,A,i.COLOR_ATTACHMENT0,ge,0);_(A)&&w(ge),t.unbindTexture()}j.depthBuffer&&et(j)}function kt(j){const A=j.textures;for(let oe=0,_e=A.length;oe<_e;oe++){const Ee=A[oe];if(_(Ee)){const Re=b(j),Ue=r.get(Ee).__webglTexture;t.bindTexture(Re,Ue),w(Re),t.unbindTexture()}}}const Bt=[],hn=[];function ne(j){if(j.samples>0){if(pt(j)===!1){const A=j.textures,oe=j.width,_e=j.height;let Ee=i.COLOR_BUFFER_BIT;const Re=j.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ue=r.get(j),ge=A.length>1;if(ge)for(let ke=0;ke<A.length;ke++)t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);const ye=j.texture.mipmaps;ye&&ye.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let ke=0;ke<A.length;ke++){if(j.resolveDepthBuffer&&(j.depthBuffer&&(Ee|=i.DEPTH_BUFFER_BIT),j.stencilBuffer&&j.resolveStencilBuffer&&(Ee|=i.STENCIL_BUFFER_BIT)),ge){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[ke]);const k=r.get(A[ke]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,k,0)}i.blitFramebuffer(0,0,oe,_e,0,0,oe,_e,Ee,i.NEAREST),f===!0&&(Bt.length=0,hn.length=0,Bt.push(i.COLOR_ATTACHMENT0+ke),j.depthBuffer&&j.resolveDepthBuffer===!1&&(Bt.push(Re),hn.push(Re),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,hn)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Bt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ge)for(let ke=0;ke<A.length;ke++){t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[ke]);const k=r.get(A[ke]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.TEXTURE_2D,k,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(j.depthBuffer&&j.resolveDepthBuffer===!1&&f){const A=j.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function zt(j){return Math.min(o.maxSamples,j.samples)}function pt(j){const A=r.get(j);return j.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Dt(j){const A=u.render.frame;v.get(j)!==A&&(v.set(j,A),j.update())}function Oe(j,A){const oe=j.colorSpace,_e=j.format,Ee=j.type;return j.isCompressedTexture===!0||j.isVideoTexture===!0||oe!==Zc&&oe!==tr&&(At.getTransfer(oe)===Ot?(_e!==ji||Ee!==ci)&&ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",oe)),A}function Gt(j){return typeof HTMLImageElement<"u"&&j instanceof HTMLImageElement?(p.width=j.naturalWidth||j.width,p.height=j.naturalHeight||j.height):typeof VideoFrame<"u"&&j instanceof VideoFrame?(p.width=j.displayWidth,p.height=j.displayHeight):(p.width=j.width,p.height=j.height),p}this.allocateTextureUnit=U,this.resetTextureUnits=G,this.getTextureUnits=ee,this.setTextureUnits=F,this.setTexture2D=$,this.setTexture2DArray=X,this.setTexture3D=te,this.setTextureCube=z,this.rebindTextures=_t,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=He,this.useMultisampledRTT=pt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function KN(i,e){function t(r,o=tr){let c;const u=At.getTransfer(o);if(r===ci)return i.UNSIGNED_BYTE;if(r===mp)return i.UNSIGNED_SHORT_4_4_4_4;if(r===gp)return i.UNSIGNED_SHORT_5_5_5_1;if(r===g0)return i.UNSIGNED_INT_5_9_9_9_REV;if(r===x0)return i.UNSIGNED_INT_10F_11F_11F_REV;if(r===p0)return i.BYTE;if(r===m0)return i.SHORT;if(r===Go)return i.UNSIGNED_SHORT;if(r===pp)return i.INT;if(r===es)return i.UNSIGNED_INT;if(r===Yi)return i.FLOAT;if(r===ws)return i.HALF_FLOAT;if(r===v0)return i.ALPHA;if(r===_0)return i.RGB;if(r===ji)return i.RGBA;if(r===Ts)return i.DEPTH_COMPONENT;if(r===Pr)return i.DEPTH_STENCIL;if(r===y0)return i.RED;if(r===xp)return i.RED_INTEGER;if(r===Ir)return i.RG;if(r===vp)return i.RG_INTEGER;if(r===_p)return i.RGBA_INTEGER;if(r===zc||r===Hc||r===Vc||r===Gc)if(u===Ot)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===zc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Hc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Vc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Gc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===zc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Hc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Vc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Gc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===vf||r===_f||r===yf||r===Sf)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===vf)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===_f)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===yf)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Sf)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Mf||r===Ef||r===bf||r===wf||r===Tf||r===Yc||r===Cf)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Mf||r===Ef)return u===Ot?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===bf)return u===Ot?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===wf)return c.COMPRESSED_R11_EAC;if(r===Tf)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Yc)return c.COMPRESSED_RG11_EAC;if(r===Cf)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Nf||r===Af||r===Rf||r===Pf||r===Lf||r===If||r===Df||r===jf||r===Uf||r===Ff||r===Of||r===kf||r===Bf||r===zf)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Nf)return u===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Af)return u===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Rf)return u===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Pf)return u===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Lf)return u===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===If)return u===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Df)return u===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===jf)return u===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Uf)return u===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ff)return u===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Of)return u===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===kf)return u===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Bf)return u===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===zf)return u===Ot?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Hf||r===Vf||r===Gf)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Hf)return u===Ot?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Vf)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Gf)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Wf||r===Xf||r===Kc||r===qf)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Wf)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Xf)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Kc)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===qf)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Wo?i.UNSIGNED_INT_24_8:i[r]!==void 0?i[r]:null}return{convert:t}}const ZN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,JN=`
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

}`;class QN{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new L0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new ts({vertexShader:ZN,fragmentShader:JN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Fi(new Zo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eA extends lr{constructor(e,t){super();const r=this;let o=null,c=1,u=null,h="local-floor",f=1,p=null,v=null,g=null,x=null,y=null,E=null;const T=typeof XRWebGLBinding<"u",S=new QN,_={},w=t.getContextAttributes();let b=null,N=null;const I=[],L=[],B=new dt;let C=null;const O=new yi;O.viewport=new an;const Y=new yi;Y.viewport=new an;const V=[O,Y],Q=new l1;let G=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let me=I[q];return me===void 0&&(me=new xh,I[q]=me),me.getTargetRaySpace()},this.getControllerGrip=function(q){let me=I[q];return me===void 0&&(me=new xh,I[q]=me),me.getGripSpace()},this.getHand=function(q){let me=I[q];return me===void 0&&(me=new xh,I[q]=me),me.getHandSpace()};function F(q){const me=L.indexOf(q.inputSource);if(me===-1)return;const fe=I[me];fe!==void 0&&(fe.update(q.inputSource,q.frame,p||u),fe.dispatchEvent({type:q.type,data:q.inputSource}))}function U(){o.removeEventListener("select",F),o.removeEventListener("selectstart",F),o.removeEventListener("selectend",F),o.removeEventListener("squeeze",F),o.removeEventListener("squeezestart",F),o.removeEventListener("squeezeend",F),o.removeEventListener("end",U),o.removeEventListener("inputsourceschange",W);for(let q=0;q<I.length;q++){const me=L[q];me!==null&&(L[q]=null,I[q].disconnect(me))}G=null,ee=null,S.reset();for(const q in _)delete _[q];e.setRenderTarget(b),y=null,x=null,g=null,o=null,N=null,Ne.stop(),r.isPresenting=!1,e.setPixelRatio(C),e.setSize(B.width,B.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){c=q,r.isPresenting===!0&&ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){h=q,r.isPresenting===!0&&ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(q){p=q},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return g===null&&T&&(g=new XRWebGLBinding(o,t)),g},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(q){if(o=q,o!==null){if(b=e.getRenderTarget(),o.addEventListener("select",F),o.addEventListener("selectstart",F),o.addEventListener("selectend",F),o.addEventListener("squeeze",F),o.addEventListener("squeezestart",F),o.addEventListener("squeezeend",F),o.addEventListener("end",U),o.addEventListener("inputsourceschange",W),w.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(B),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,xe=null,Ce=null;w.depth&&(Ce=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=w.stencil?Pr:Ts,xe=w.stencil?Wo:es);const He={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:c};g=this.getBinding(),x=g.createProjectionLayer(He),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),N=new Qi(x.textureWidth,x.textureHeight,{format:ji,type:ci,depthTexture:new Da(x.textureWidth,x.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const fe={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(o,t,fe),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),N=new Qi(y.framebufferWidth,y.framebufferHeight,{format:ji,type:ci,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(f),p=null,u=await o.requestReferenceSpace(h),Ne.setContext(o),Ne.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function W(q){for(let me=0;me<q.removed.length;me++){const fe=q.removed[me],xe=L.indexOf(fe);xe>=0&&(L[xe]=null,I[xe].disconnect(fe))}for(let me=0;me<q.added.length;me++){const fe=q.added[me];let xe=L.indexOf(fe);if(xe===-1){for(let He=0;He<I.length;He++)if(He>=L.length){L.push(fe),xe=He;break}else if(L[He]===null){L[He]=fe,xe=He;break}if(xe===-1)break}const Ce=I[xe];Ce&&Ce.connect(fe)}}const $=new ae,X=new ae;function te(q,me,fe){$.setFromMatrixPosition(me.matrixWorld),X.setFromMatrixPosition(fe.matrixWorld);const xe=$.distanceTo(X),Ce=me.projectionMatrix.elements,He=fe.projectionMatrix.elements,Et=Ce[14]/(Ce[10]-1),it=Ce[14]/(Ce[10]+1),et=(Ce[9]+1)/Ce[5],_t=(Ce[9]-1)/Ce[5],ht=(Ce[8]-1)/Ce[0],kt=(He[8]+1)/He[0],Bt=Et*ht,hn=Et*kt,ne=xe/(-ht+kt),zt=ne*-ht;if(me.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(zt),q.translateZ(ne),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ce[10]===-1)q.projectionMatrix.copy(me.projectionMatrix),q.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const pt=Et+ne,Dt=it+ne,Oe=Bt-zt,Gt=hn+(xe-zt),j=et*it/Dt*pt,A=_t*it/Dt*pt;q.projectionMatrix.makePerspective(Oe,Gt,j,A,pt,Dt),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function z(q,me){me===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(me.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(o===null)return;let me=q.near,fe=q.far;S.texture!==null&&(S.depthNear>0&&(me=S.depthNear),S.depthFar>0&&(fe=S.depthFar)),Q.near=Y.near=O.near=me,Q.far=Y.far=O.far=fe,(G!==Q.near||ee!==Q.far)&&(o.updateRenderState({depthNear:Q.near,depthFar:Q.far}),G=Q.near,ee=Q.far),Q.layers.mask=q.layers.mask|6,O.layers.mask=Q.layers.mask&-5,Y.layers.mask=Q.layers.mask&-3;const xe=q.parent,Ce=Q.cameras;z(Q,xe);for(let He=0;He<Ce.length;He++)z(Ce[He],xe);Ce.length===2?te(Q,O,Y):Q.projectionMatrix.copy(O.projectionMatrix),se(q,Q,xe)};function se(q,me,fe){fe===null?q.matrix.copy(me.matrixWorld):(q.matrix.copy(fe.matrixWorld),q.matrix.invert(),q.matrix.multiply(me.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(me.projectionMatrix),q.projectionMatrixInverse.copy(me.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Zf*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(x===null&&y===null))return f},this.setFoveation=function(q){f=q,x!==null&&(x.fixedFoveation=q),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=q)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(Q)},this.getCameraTexture=function(q){return _[q]};let Pe=null;function be(q,me){if(v=me.getViewerPose(p||u),E=me,v!==null){const fe=v.views;y!==null&&(e.setRenderTargetFramebuffer(N,y.framebuffer),e.setRenderTarget(N));let xe=!1;fe.length!==Q.cameras.length&&(Q.cameras.length=0,xe=!0);for(let it=0;it<fe.length;it++){const et=fe[it];let _t=null;if(y!==null)_t=y.getViewport(et);else{const kt=g.getViewSubImage(x,et);_t=kt.viewport,it===0&&(e.setRenderTargetTextures(N,kt.colorTexture,kt.depthStencilTexture),e.setRenderTarget(N))}let ht=V[it];ht===void 0&&(ht=new yi,ht.layers.enable(it),ht.viewport=new an,V[it]=ht),ht.matrix.fromArray(et.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(et.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(_t.x,_t.y,_t.width,_t.height),it===0&&(Q.matrix.copy(ht.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),xe===!0&&Q.cameras.push(ht)}const Ce=o.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&T){g=r.getBinding();const it=g.getDepthInformation(fe[0]);it&&it.isValid&&it.texture&&S.init(it,o.renderState)}if(Ce&&Ce.includes("camera-access")&&T){e.state.unbindTexture(),g=r.getBinding();for(let it=0;it<fe.length;it++){const et=fe[it].camera;if(et){let _t=_[et];_t||(_t=new L0,_[et]=_t);const ht=g.getCameraImage(et);_t.sourceTexture=ht}}}}for(let fe=0;fe<I.length;fe++){const xe=L[fe],Ce=I[fe];xe!==null&&Ce!==void 0&&Ce.update(xe,me,p||u)}Pe&&Pe(q,me),me.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:me}),E=null}const Ne=new F0;Ne.setAnimationLoop(be),this.setAnimationLoop=function(q){Pe=q},this.dispose=function(){}}}const tA=new sn,G0=new vt;G0.set(-1,0,0,0,1,0,0,0,1);function nA(i,e){function t(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function r(S,_){_.color.getRGB(S.fogColor.value,I0(i)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function o(S,_,w,b,N){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?c(S,_):_.isMeshLambertMaterial?(c(S,_),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(c(S,_),g(S,_)):_.isMeshPhongMaterial?(c(S,_),v(S,_),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(c(S,_),x(S,_),_.isMeshPhysicalMaterial&&y(S,_,N)):_.isMeshMatcapMaterial?(c(S,_),E(S,_)):_.isMeshDepthMaterial?c(S,_):_.isMeshDistanceMaterial?(c(S,_),T(S,_)):_.isMeshNormalMaterial?c(S,_):_.isLineBasicMaterial?(u(S,_),_.isLineDashedMaterial&&h(S,_)):_.isPointsMaterial?f(S,_,w,b):_.isSpriteMaterial?p(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,t(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,t(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===ni&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,t(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===ni&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,t(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,t(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const w=e.get(_),b=w.envMap,N=w.envMapRotation;b&&(S.envMap.value=b,S.envMapRotation.value.setFromMatrix4(tA.makeRotationFromEuler(N)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(G0),S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,S.aoMapTransform))}function u(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,t(_.map,S.mapTransform))}function h(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function f(S,_,w,b){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*w,S.scale.value=b*.5,_.map&&(S.map.value=_.map,t(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function p(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,t(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function v(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function g(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function x(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function y(S,_,w){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===ni&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=w.texture,S.transmissionSamplerSize.value.set(w.width,w.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,_){_.matcap&&(S.matcap.value=_.matcap)}function T(S,_){const w=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(w.matrixWorld),S.nearDistance.value=w.shadow.camera.near,S.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function iA(i,e,t,r){let o={},c={},u=[];const h=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function f(w,b){const N=b.program;r.uniformBlockBinding(w,N)}function p(w,b){let N=o[w.id];N===void 0&&(E(w),N=v(w),o[w.id]=N,w.addEventListener("dispose",S));const I=b.program;r.updateUBOMapping(w,I);const L=e.render.frame;c[w.id]!==L&&(x(w),c[w.id]=L)}function v(w){const b=g();w.__bindingPointIndex=b;const N=i.createBuffer(),I=w.__size,L=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,N),i.bufferData(i.UNIFORM_BUFFER,I,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,N),N}function g(){for(let w=0;w<h;w++)if(u.indexOf(w)===-1)return u.push(w),w;return Pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(w){const b=o[w.id],N=w.uniforms,I=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let L=0,B=N.length;L<B;L++){const C=Array.isArray(N[L])?N[L]:[N[L]];for(let O=0,Y=C.length;O<Y;O++){const V=C[O];if(y(V,L,O,I)===!0){const Q=V.__offset,G=Array.isArray(V.value)?V.value:[V.value];let ee=0;for(let F=0;F<G.length;F++){const U=G[F],W=T(U);typeof U=="number"||typeof U=="boolean"?(V.__data[0]=U,i.bufferSubData(i.UNIFORM_BUFFER,Q+ee,V.__data)):U.isMatrix3?(V.__data[0]=U.elements[0],V.__data[1]=U.elements[1],V.__data[2]=U.elements[2],V.__data[3]=0,V.__data[4]=U.elements[3],V.__data[5]=U.elements[4],V.__data[6]=U.elements[5],V.__data[7]=0,V.__data[8]=U.elements[6],V.__data[9]=U.elements[7],V.__data[10]=U.elements[8],V.__data[11]=0):ArrayBuffer.isView(U)?V.__data.set(new U.constructor(U.buffer,U.byteOffset,V.__data.length)):(U.toArray(V.__data,ee),ee+=W.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Q,V.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function y(w,b,N,I){const L=w.value,B=b+"_"+N;if(I[B]===void 0)return typeof L=="number"||typeof L=="boolean"?I[B]=L:ArrayBuffer.isView(L)?I[B]=L.slice():I[B]=L.clone(),!0;{const C=I[B];if(typeof L=="number"||typeof L=="boolean"){if(C!==L)return I[B]=L,!0}else{if(ArrayBuffer.isView(L))return!0;if(C.equals(L)===!1)return C.copy(L),!0}}return!1}function E(w){const b=w.uniforms;let N=0;const I=16;for(let B=0,C=b.length;B<C;B++){const O=Array.isArray(b[B])?b[B]:[b[B]];for(let Y=0,V=O.length;Y<V;Y++){const Q=O[Y],G=Array.isArray(Q.value)?Q.value:[Q.value];for(let ee=0,F=G.length;ee<F;ee++){const U=G[ee],W=T(U),$=N%I,X=$%W.boundary,te=$+X;N+=X,te!==0&&I-te<W.storage&&(N+=I-te),Q.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=N,N+=W.storage}}}const L=N%I;return L>0&&(N+=I-L),w.__size=N,w.__cache={},this}function T(w){const b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(b.boundary=16,b.storage=w.byteLength):ut("WebGLRenderer: Unsupported uniform value type.",w),b}function S(w){const b=w.target;b.removeEventListener("dispose",S);const N=u.indexOf(b.__bindingPointIndex);u.splice(N,1),i.deleteBuffer(o[b.id]),delete o[b.id],delete c[b.id]}function _(){for(const w in o)i.deleteBuffer(o[w]);u=[],o={},c={}}return{bind:f,update:p,dispose:_}}const sA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Xi=null;function rA(){return Xi===null&&(Xi=new Vb(sA,16,16,Ir,ws),Xi.name="DFG_LUT",Xi.minFilter=Un,Xi.magFilter=Un,Xi.wrapS=ys,Xi.wrapT=ys,Xi.generateMipmaps=!1,Xi.needsUpdate=!0),Xi}class aA{constructor(e={}){const{canvas:t=xb(),context:r=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:x=!1,outputBufferType:y=ci}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=u;const T=y,S=new Set([_p,vp,xp]),_=new Set([ci,es,Go,Wo,mp,gp]),w=new Uint32Array(4),b=new Int32Array(4),N=new ae;let I=null,L=null;const B=[],C=[];let O=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Y=this;let V=!1,Q=null;this._outputColorSpace=_i;let G=0,ee=0,F=null,U=-1,W=null;const $=new an,X=new an;let te=null;const z=new Ct(0);let se=0,Pe=t.width,be=t.height,Ne=1,q=null,me=null;const fe=new an(0,0,Pe,be),xe=new an(0,0,Pe,be);let Ce=!1;const He=new wp;let Et=!1,it=!1;const et=new sn,_t=new ae,ht=new an,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Bt=!1;function hn(){return F===null?Ne:1}let ne=r;function zt(P,re){return t.getContext(P,re)}try{const P={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:f,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fp}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",Xe,!1),t.addEventListener("webglcontextcreationerror",ct,!1),ne===null){const re="webgl2";if(ne=zt(re,P),ne===null)throw zt(re)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw Pt("WebGLRenderer: "+P.message),P}let pt,Dt,Oe,Gt,j,A,oe,_e,Ee,Re,Ue,ge,ye,ke,k,K,Me,$e,rt,ft,J,Le,ve;function ze(){pt=new rC(ne),pt.init(),J=new KN(ne,pt),Dt=new ZT(ne,pt,e,J),Oe=new $N(ne,pt),Dt.reversedDepthBuffer&&x&&Oe.buffers.depth.setReversed(!0),Gt=new lC(ne),j=new DN,A=new YN(ne,pt,Oe,j,Dt,J,Gt),oe=new sC(Y),_e=new h1(ne),Le=new YT(ne,_e),Ee=new aC(ne,_e,Gt,Le),Re=new uC(ne,Ee,_e,Le,Gt),$e=new cC(ne,Dt,A),k=new JT(j),Ue=new IN(Y,oe,pt,Dt,Le,k),ge=new nA(Y,j),ye=new UN,ke=new HN(pt),Me=new $T(Y,oe,Oe,Re,E,f),K=new qN(Y,Re,Dt),ve=new iA(ne,Gt,Dt,Oe),rt=new KT(ne,pt,Gt),ft=new oC(ne,pt,Gt),Gt.programs=Ue.programs,Y.capabilities=Dt,Y.extensions=pt,Y.properties=j,Y.renderLists=ye,Y.shadowMap=K,Y.state=Oe,Y.info=Gt}ze(),T!==ci&&(O=new hC(T,t.width,t.height,o,c));const Ie=new eA(Y,ne);this.xr=Ie,this.getContext=function(){return ne},this.getContextAttributes=function(){return ne.getContextAttributes()},this.forceContextLoss=function(){const P=pt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=pt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(P){P!==void 0&&(Ne=P,this.setSize(Pe,be,!1))},this.getSize=function(P){return P.set(Pe,be)},this.setSize=function(P,re,he=!0){if(Ie.isPresenting){ut("WebGLRenderer: Can't change size while VR device is presenting.");return}Pe=P,be=re,t.width=Math.floor(P*Ne),t.height=Math.floor(re*Ne),he===!0&&(t.style.width=P+"px",t.style.height=re+"px"),O!==null&&O.setSize(t.width,t.height),this.setViewport(0,0,P,re)},this.getDrawingBufferSize=function(P){return P.set(Pe*Ne,be*Ne).floor()},this.setDrawingBufferSize=function(P,re,he){Pe=P,be=re,Ne=he,t.width=Math.floor(P*he),t.height=Math.floor(re*he),this.setViewport(0,0,P,re)},this.setEffects=function(P){if(T===ci){Pt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let re=0;re<P.length;re++)if(P[re].isOutputPass===!0){ut("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy($)},this.getViewport=function(P){return P.copy(fe)},this.setViewport=function(P,re,he,ue){P.isVector4?fe.set(P.x,P.y,P.z,P.w):fe.set(P,re,he,ue),Oe.viewport($.copy(fe).multiplyScalar(Ne).round())},this.getScissor=function(P){return P.copy(xe)},this.setScissor=function(P,re,he,ue){P.isVector4?xe.set(P.x,P.y,P.z,P.w):xe.set(P,re,he,ue),Oe.scissor(X.copy(xe).multiplyScalar(Ne).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(P){Oe.setScissorTest(Ce=P)},this.setOpaqueSort=function(P){q=P},this.setTransparentSort=function(P){me=P},this.getClearColor=function(P){return P.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor(...arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha(...arguments)},this.clear=function(P=!0,re=!0,he=!0){let ue=0;if(P){let ce=!1;if(F!==null){const Fe=F.texture.format;ce=S.has(Fe)}if(ce){const Fe=F.texture.type,qe=_.has(Fe),je=Me.getClearColor(),Ze=Me.getClearAlpha(),nt=je.r,gt=je.g,xt=je.b;qe?(w[0]=nt,w[1]=gt,w[2]=xt,w[3]=Ze,ne.clearBufferuiv(ne.COLOR,0,w)):(b[0]=nt,b[1]=gt,b[2]=xt,b[3]=Ze,ne.clearBufferiv(ne.COLOR,0,b))}else ue|=ne.COLOR_BUFFER_BIT}re&&(ue|=ne.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),he&&(ue|=ne.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ue!==0&&ne.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(P){P.setRenderer(this),Q=P},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",Xe,!1),t.removeEventListener("webglcontextcreationerror",ct,!1),Me.dispose(),ye.dispose(),ke.dispose(),j.dispose(),oe.dispose(),Re.dispose(),Le.dispose(),ve.dispose(),Ue.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",cr),Ie.removeEventListener("sessionend",Fr),ss.stop()};function Se(P){P.preventDefault(),eu("WebGLRenderer: Context Lost."),V=!0}function Xe(){eu("WebGLRenderer: Context Restored."),V=!1;const P=Gt.autoReset,re=K.enabled,he=K.autoUpdate,ue=K.needsUpdate,ce=K.type;ze(),Gt.autoReset=P,K.enabled=re,K.autoUpdate=he,K.needsUpdate=ue,K.type=ce}function ct(P){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function st(P){const re=P.target;re.removeEventListener("dispose",st),bt(re)}function bt(P){On(P),j.remove(P)}function On(P){const re=j.get(P).programs;re!==void 0&&(re.forEach(function(he){Ue.releaseProgram(he)}),P.isShaderMaterial&&Ue.releaseShaderCache(P))}this.renderBufferDirect=function(P,re,he,ue,ce,Fe){re===null&&(re=kt);const qe=ce.isMesh&&ce.matrixWorld.determinant()<0,je=el(P,re,he,ue,ce);Oe.setMaterial(ue,qe);let Ze=he.index,nt=1;if(ue.wireframe===!0){if(Ze=Ee.getWireframeAttribute(he),Ze===void 0)return;nt=2}const gt=he.drawRange,xt=he.attributes.position;let Qe=gt.start*nt,Rt=(gt.start+gt.count)*nt;Fe!==null&&(Qe=Math.max(Qe,Fe.start*nt),Rt=Math.min(Rt,(Fe.start+Fe.count)*nt)),Ze!==null?(Qe=Math.max(Qe,0),Rt=Math.min(Rt,Ze.count)):xt!=null&&(Qe=Math.max(Qe,0),Rt=Math.min(Rt,xt.count));const Wt=Rt-Qe;if(Wt<0||Wt===1/0)return;Le.setup(ce,ue,je,he,Ze);let Zt,Ut=rt;if(Ze!==null&&(Zt=_e.get(Ze),Ut=ft,Ut.setIndex(Zt)),ce.isMesh)ue.wireframe===!0?(Oe.setLineWidth(ue.wireframeLinewidth*hn()),Ut.setMode(ne.LINES)):Ut.setMode(ne.TRIANGLES);else if(ce.isLine){let cn=ue.linewidth;cn===void 0&&(cn=1),Oe.setLineWidth(cn*hn()),ce.isLineSegments?Ut.setMode(ne.LINES):ce.isLineLoop?Ut.setMode(ne.LINE_LOOP):Ut.setMode(ne.LINE_STRIP)}else ce.isPoints?Ut.setMode(ne.POINTS):ce.isSprite&&Ut.setMode(ne.TRIANGLES);if(ce.isBatchedMesh)if(pt.get("WEBGL_multi_draw"))Ut.renderMultiDraw(ce._multiDrawStarts,ce._multiDrawCounts,ce._multiDrawCount);else{const cn=ce._multiDrawStarts,Ve=ce._multiDrawCounts,wn=ce._multiDrawCount,St=Ze?_e.get(Ze).bytesPerElement:1,qn=j.get(ue).currentProgram.getUniforms();for(let $n=0;$n<wn;$n++)qn.setValue(ne,"_gl_DrawID",$n),Ut.render(cn[$n]/St,Ve[$n])}else if(ce.isInstancedMesh)Ut.renderInstances(Qe,Wt,ce.count);else if(he.isInstancedBufferGeometry){const cn=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,Ve=Math.min(he.instanceCount,cn);Ut.renderInstances(Qe,Wt,Ve)}else Ut.render(Qe,Wt)};function di(P,re,he){P.transparent===!0&&P.side===_s&&P.forceSinglePass===!1?(P.side=ni,P.needsUpdate=!0,Or(P,re,he),P.side=sr,P.needsUpdate=!0,Or(P,re,he),P.side=_s):Or(P,re,he)}this.compile=function(P,re,he=null){he===null&&(he=P),L=ke.get(he),L.init(re),C.push(L),he.traverseVisible(function(ce){ce.isLight&&ce.layers.test(re.layers)&&(L.pushLight(ce),ce.castShadow&&L.pushShadow(ce))}),P!==he&&P.traverseVisible(function(ce){ce.isLight&&ce.layers.test(re.layers)&&(L.pushLight(ce),ce.castShadow&&L.pushShadow(ce))}),L.setupLights();const ue=new Set;return P.traverse(function(ce){if(!(ce.isMesh||ce.isPoints||ce.isLine||ce.isSprite))return;const Fe=ce.material;if(Fe)if(Array.isArray(Fe))for(let qe=0;qe<Fe.length;qe++){const je=Fe[qe];di(je,he,ce),ue.add(je)}else di(Fe,he,ce),ue.add(Fe)}),L=C.pop(),ue},this.compileAsync=function(P,re,he=null){const ue=this.compile(P,re,he);return new Promise(ce=>{function Fe(){if(ue.forEach(function(qe){j.get(qe).currentProgram.isReady()&&ue.delete(qe)}),ue.size===0){ce(P);return}setTimeout(Fe,10)}pt.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let is=null;function Ur(P){is&&is(P)}function cr(){ss.stop()}function Fr(){ss.start()}const ss=new F0;ss.setAnimationLoop(Ur),typeof self<"u"&&ss.setContext(self),this.setAnimationLoop=function(P){is=P,Ie.setAnimationLoop(P),P===null?ss.stop():ss.start()},Ie.addEventListener("sessionstart",cr),Ie.addEventListener("sessionend",Fr),this.render=function(P,re){if(re!==void 0&&re.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;Q!==null&&Q.renderStart(P,re);const he=Ie.enabled===!0&&Ie.isPresenting===!0,ue=O!==null&&(F===null||he)&&O.begin(Y,F);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),re.parent===null&&re.matrixWorldAutoUpdate===!0&&re.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(re),re=Ie.getCamera()),P.isScene===!0&&P.onBeforeRender(Y,P,re,F),L=ke.get(P,C.length),L.init(re),L.state.textureUnits=A.getTextureUnits(),C.push(L),et.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),He.setFromProjectionMatrix(et,Ki,re.reversedDepth),it=this.localClippingEnabled,Et=k.init(this.clippingPlanes,it),I=ye.get(P,B.length),I.init(),B.push(I),Ie.enabled===!0&&Ie.isPresenting===!0){const qe=Y.xr.getDepthSensingMesh();qe!==null&&za(qe,re,-1/0,Y.sortObjects)}za(P,re,0,Y.sortObjects),I.finish(),Y.sortObjects===!0&&I.sort(q,me),Bt=Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1,Bt&&Me.addToRenderList(I,P),this.info.render.frame++,Et===!0&&k.beginShadows();const ce=L.state.shadowsArray;if(K.render(ce,P,re),Et===!0&&k.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ue&&O.hasRenderPass())===!1){const qe=I.opaque,je=I.transmissive;if(L.setupLights(),re.isArrayCamera){const Ze=re.cameras;if(je.length>0)for(let nt=0,gt=Ze.length;nt<gt;nt++){const xt=Ze[nt];ki(qe,je,P,xt)}Bt&&Me.render(P);for(let nt=0,gt=Ze.length;nt<gt;nt++){const xt=Ze[nt];Jo(I,P,xt,xt.viewport)}}else je.length>0&&ki(qe,je,P,re),Bt&&Me.render(P),Jo(I,P,re)}F!==null&&ee===0&&(A.updateMultisampleRenderTarget(F),A.updateRenderTargetMipmap(F)),ue&&O.end(Y),P.isScene===!0&&P.onAfterRender(Y,P,re),Le.resetDefaultState(),U=-1,W=null,C.pop(),C.length>0?(L=C[C.length-1],A.setTextureUnits(L.state.textureUnits),Et===!0&&k.setGlobalState(Y.clippingPlanes,L.state.camera)):L=null,B.pop(),B.length>0?I=B[B.length-1]:I=null,Q!==null&&Q.renderEnd()};function za(P,re,he,ue){if(P.visible===!1)return;if(P.layers.test(re.layers)){if(P.isGroup)he=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(re);else if(P.isLightProbeGrid)L.pushLightProbeGrid(P);else if(P.isLight)L.pushLight(P),P.castShadow&&L.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||He.intersectsSprite(P)){ue&&ht.setFromMatrixPosition(P.matrixWorld).applyMatrix4(et);const qe=Re.update(P),je=P.material;je.visible&&I.push(P,qe,je,he,ht.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||He.intersectsObject(P))){const qe=Re.update(P),je=P.material;if(ue&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),ht.copy(P.boundingSphere.center)):(qe.boundingSphere===null&&qe.computeBoundingSphere(),ht.copy(qe.boundingSphere.center)),ht.applyMatrix4(P.matrixWorld).applyMatrix4(et)),Array.isArray(je)){const Ze=qe.groups;for(let nt=0,gt=Ze.length;nt<gt;nt++){const xt=Ze[nt],Qe=je[xt.materialIndex];Qe&&Qe.visible&&I.push(P,qe,Qe,he,ht.z,xt)}}else je.visible&&I.push(P,qe,je,he,ht.z,null)}}const Fe=P.children;for(let qe=0,je=Fe.length;qe<je;qe++)za(Fe[qe],re,he,ue)}function Jo(P,re,he,ue){const{opaque:ce,transmissive:Fe,transparent:qe}=P;L.setupLightsView(he),Et===!0&&k.setGlobalState(Y.clippingPlanes,he),ue&&Oe.viewport($.copy(ue)),ce.length>0&&ur(ce,re,he),Fe.length>0&&ur(Fe,re,he),qe.length>0&&ur(qe,re,he),Oe.buffers.depth.setTest(!0),Oe.buffers.depth.setMask(!0),Oe.buffers.color.setMask(!0),Oe.setPolygonOffset(!1)}function ki(P,re,he,ue){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[ue.id]===void 0){const Qe=pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[ue.id]=new Qi(1,1,{generateMipmaps:!0,type:Qe?ws:ci,minFilter:Rr,samples:Math.max(4,Dt.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace})}const Fe=L.state.transmissionRenderTarget[ue.id],qe=ue.viewport||$;Fe.setSize(qe.z*Y.transmissionResolutionScale,qe.w*Y.transmissionResolutionScale);const je=Y.getRenderTarget(),Ze=Y.getActiveCubeFace(),nt=Y.getActiveMipmapLevel();Y.setRenderTarget(Fe),Y.getClearColor(z),se=Y.getClearAlpha(),se<1&&Y.setClearColor(16777215,.5),Y.clear(),Bt&&Me.render(he);const gt=Y.toneMapping;Y.toneMapping=Ji;const xt=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),L.setupLightsView(ue),Et===!0&&k.setGlobalState(Y.clippingPlanes,ue),ur(P,he,ue),A.updateMultisampleRenderTarget(Fe),A.updateRenderTargetMipmap(Fe),pt.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let Rt=0,Wt=re.length;Rt<Wt;Rt++){const Zt=re[Rt],{object:Ut,geometry:cn,material:Ve,group:wn}=Zt;if(Ve.side===_s&&Ut.layers.test(ue.layers)){const St=Ve.side;Ve.side=ni,Ve.needsUpdate=!0,Ha(Ut,he,ue,cn,Ve,wn),Ve.side=St,Ve.needsUpdate=!0,Qe=!0}}Qe===!0&&(A.updateMultisampleRenderTarget(Fe),A.updateRenderTargetMipmap(Fe))}Y.setRenderTarget(je,Ze,nt),Y.setClearColor(z,se),xt!==void 0&&(ue.viewport=xt),Y.toneMapping=gt}function ur(P,re,he){const ue=re.isScene===!0?re.overrideMaterial:null;for(let ce=0,Fe=P.length;ce<Fe;ce++){const qe=P[ce],{object:je,geometry:Ze,group:nt}=qe;let gt=qe.material;gt.allowOverride===!0&&ue!==null&&(gt=ue),je.layers.test(he.layers)&&Ha(je,re,he,Ze,gt,nt)}}function Ha(P,re,he,ue,ce,Fe){P.onBeforeRender(Y,re,he,ue,ce,Fe),P.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),ce.onBeforeRender(Y,re,he,ue,P,Fe),ce.transparent===!0&&ce.side===_s&&ce.forceSinglePass===!1?(ce.side=ni,ce.needsUpdate=!0,Y.renderBufferDirect(he,re,ue,ce,P,Fe),ce.side=sr,ce.needsUpdate=!0,Y.renderBufferDirect(he,re,ue,ce,P,Fe),ce.side=_s):Y.renderBufferDirect(he,re,ue,ce,P,Fe),P.onAfterRender(Y,re,he,ue,ce,Fe)}function Or(P,re,he){re.isScene!==!0&&(re=kt);const ue=j.get(P),ce=L.state.lights,Fe=L.state.shadowsArray,qe=ce.state.version,je=Ue.getParameters(P,ce.state,Fe,re,he,L.state.lightProbeGridArray),Ze=Ue.getProgramCacheKey(je);let nt=ue.programs;ue.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?re.environment:null,ue.fog=re.fog;const gt=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;ue.envMap=oe.get(P.envMap||ue.environment,gt),ue.envMapRotation=ue.environment!==null&&P.envMap===null?re.environmentRotation:P.envMapRotation,nt===void 0&&(P.addEventListener("dispose",st),nt=new Map,ue.programs=nt);let xt=nt.get(Ze);if(xt!==void 0){if(ue.currentProgram===xt&&ue.lightsStateVersion===qe)return Ga(P,je),xt}else je.uniforms=Ue.getUniforms(P),Q!==null&&P.isNodeMaterial&&Q.build(P,he,je),P.onBeforeCompile(je,Y),xt=Ue.acquireProgram(je,Ze),nt.set(Ze,xt),ue.uniforms=je.uniforms;const Qe=ue.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Qe.clippingPlanes=k.uniform),Ga(P,je),ue.needsLights=hu(P),ue.lightsStateVersion=qe,ue.needsLights&&(Qe.ambientLightColor.value=ce.state.ambient,Qe.lightProbe.value=ce.state.probe,Qe.directionalLights.value=ce.state.directional,Qe.directionalLightShadows.value=ce.state.directionalShadow,Qe.spotLights.value=ce.state.spot,Qe.spotLightShadows.value=ce.state.spotShadow,Qe.rectAreaLights.value=ce.state.rectArea,Qe.ltc_1.value=ce.state.rectAreaLTC1,Qe.ltc_2.value=ce.state.rectAreaLTC2,Qe.pointLights.value=ce.state.point,Qe.pointLightShadows.value=ce.state.pointShadow,Qe.hemisphereLights.value=ce.state.hemi,Qe.directionalShadowMatrix.value=ce.state.directionalShadowMatrix,Qe.spotLightMatrix.value=ce.state.spotLightMatrix,Qe.spotLightMap.value=ce.state.spotLightMap,Qe.pointShadowMatrix.value=ce.state.pointShadowMatrix),ue.lightProbeGrid=L.state.lightProbeGridArray.length>0,ue.currentProgram=xt,ue.uniformsList=null,xt}function Va(P){if(P.uniformsList===null){const re=P.currentProgram.getUniforms();P.uniformsList=Xc.seqWithValue(re.seq,P.uniforms)}return P.uniformsList}function Ga(P,re){const he=j.get(P);he.outputColorSpace=re.outputColorSpace,he.batching=re.batching,he.batchingColor=re.batchingColor,he.instancing=re.instancing,he.instancingColor=re.instancingColor,he.instancingMorph=re.instancingMorph,he.skinning=re.skinning,he.morphTargets=re.morphTargets,he.morphNormals=re.morphNormals,he.morphColors=re.morphColors,he.morphTargetsCount=re.morphTargetsCount,he.numClippingPlanes=re.numClippingPlanes,he.numIntersection=re.numClipIntersection,he.vertexAlphas=re.vertexAlphas,he.vertexTangents=re.vertexTangents,he.toneMapping=re.toneMapping}function Qo(P,re){if(P.length===0)return null;if(P.length===1)return P[0].texture!==null?P[0]:null;N.setFromMatrixPosition(re.matrixWorld);for(let he=0,ue=P.length;he<ue;he++){const ce=P[he];if(ce.texture!==null&&ce.boundingBox.containsPoint(N))return ce}return null}function el(P,re,he,ue,ce){re.isScene!==!0&&(re=kt),A.resetTextureUnits();const Fe=re.fog,qe=ue.isMeshStandardMaterial||ue.isMeshLambertMaterial||ue.isMeshPhongMaterial?re.environment:null,je=F===null?Y.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:At.workingColorSpace,Ze=ue.isMeshStandardMaterial||ue.isMeshLambertMaterial&&!ue.envMap||ue.isMeshPhongMaterial&&!ue.envMap,nt=oe.get(ue.envMap||qe,Ze),gt=ue.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,xt=!!he.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),Qe=!!he.morphAttributes.position,Rt=!!he.morphAttributes.normal,Wt=!!he.morphAttributes.color;let Zt=Ji;ue.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Zt=Y.toneMapping);const Ut=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,cn=Ut!==void 0?Ut.length:0,Ve=j.get(ue),wn=L.state.lights;if(Et===!0&&(it===!0||P!==W)){const Ft=P===W&&ue.id===U;k.setState(ue,P,Ft)}let St=!1;ue.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==wn.state.version||Ve.outputColorSpace!==je||ce.isBatchedMesh&&Ve.batching===!1||!ce.isBatchedMesh&&Ve.batching===!0||ce.isBatchedMesh&&Ve.batchingColor===!0&&ce.colorTexture===null||ce.isBatchedMesh&&Ve.batchingColor===!1&&ce.colorTexture!==null||ce.isInstancedMesh&&Ve.instancing===!1||!ce.isInstancedMesh&&Ve.instancing===!0||ce.isSkinnedMesh&&Ve.skinning===!1||!ce.isSkinnedMesh&&Ve.skinning===!0||ce.isInstancedMesh&&Ve.instancingColor===!0&&ce.instanceColor===null||ce.isInstancedMesh&&Ve.instancingColor===!1&&ce.instanceColor!==null||ce.isInstancedMesh&&Ve.instancingMorph===!0&&ce.morphTexture===null||ce.isInstancedMesh&&Ve.instancingMorph===!1&&ce.morphTexture!==null||Ve.envMap!==nt||ue.fog===!0&&Ve.fog!==Fe||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==k.numPlanes||Ve.numIntersection!==k.numIntersection)||Ve.vertexAlphas!==gt||Ve.vertexTangents!==xt||Ve.morphTargets!==Qe||Ve.morphNormals!==Rt||Ve.morphColors!==Wt||Ve.toneMapping!==Zt||Ve.morphTargetsCount!==cn||!!Ve.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(St=!0):(St=!0,Ve.__version=ue.version);let qn=Ve.currentProgram;St===!0&&(qn=Or(ue,re,ce),Q&&ue.isNodeMaterial&&Q.onUpdateProgram(ue,qn,Ve));let $n=!1,wt=!1,rs=!1;const jt=qn.getUniforms(),$t=Ve.uniforms;if(Oe.useProgram(qn.program)&&($n=!0,wt=!0,rs=!0),ue.id!==U&&(U=ue.id,wt=!0),Ve.needsLights){const Ft=Qo(L.state.lightProbeGridArray,ce);Ve.lightProbeGrid!==Ft&&(Ve.lightProbeGrid=Ft,wt=!0)}if($n||W!==P){Oe.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),jt.setValue(ne,"projectionMatrix",P.projectionMatrix),jt.setValue(ne,"viewMatrix",P.matrixWorldInverse);const wi=jt.map.cameraPosition;wi!==void 0&&wi.setValue(ne,_t.setFromMatrixPosition(P.matrixWorld)),Dt.logarithmicDepthBuffer&&jt.setValue(ne,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&jt.setValue(ne,"isOrthographic",P.isOrthographicCamera===!0),W!==P&&(W=P,wt=!0,rs=!0)}if(Ve.needsLights&&(wn.state.directionalShadowMap.length>0&&jt.setValue(ne,"directionalShadowMap",wn.state.directionalShadowMap,A),wn.state.spotShadowMap.length>0&&jt.setValue(ne,"spotShadowMap",wn.state.spotShadowMap,A),wn.state.pointShadowMap.length>0&&jt.setValue(ne,"pointShadowMap",wn.state.pointShadowMap,A)),ce.isSkinnedMesh){jt.setOptional(ne,ce,"bindMatrix"),jt.setOptional(ne,ce,"bindMatrixInverse");const Ft=ce.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),jt.setValue(ne,"boneTexture",Ft.boneTexture,A))}ce.isBatchedMesh&&(jt.setOptional(ne,ce,"batchingTexture"),jt.setValue(ne,"batchingTexture",ce._matricesTexture,A),jt.setOptional(ne,ce,"batchingIdTexture"),jt.setValue(ne,"batchingIdTexture",ce._indirectTexture,A),jt.setOptional(ne,ce,"batchingColorTexture"),ce._colorsTexture!==null&&jt.setValue(ne,"batchingColorTexture",ce._colorsTexture,A));const bi=he.morphAttributes;if((bi.position!==void 0||bi.normal!==void 0||bi.color!==void 0)&&$e.update(ce,he,qn),(wt||Ve.receiveShadow!==ce.receiveShadow)&&(Ve.receiveShadow=ce.receiveShadow,jt.setValue(ne,"receiveShadow",ce.receiveShadow)),(ue.isMeshStandardMaterial||ue.isMeshLambertMaterial||ue.isMeshPhongMaterial)&&ue.envMap===null&&re.environment!==null&&($t.envMapIntensity.value=re.environmentIntensity),$t.dfgLUT!==void 0&&($t.dfgLUT.value=rA()),wt){if(jt.setValue(ne,"toneMappingExposure",Y.toneMappingExposure),Ve.needsLights&&du($t,rs),Fe&&ue.fog===!0&&ge.refreshFogUniforms($t,Fe),ge.refreshMaterialUniforms($t,ue,Ne,be,L.state.transmissionRenderTarget[P.id]),Ve.needsLights&&Ve.lightProbeGrid){const Ft=Ve.lightProbeGrid;$t.probesSH.value=Ft.texture,$t.probesMin.value.copy(Ft.boundingBox.min),$t.probesMax.value.copy(Ft.boundingBox.max),$t.probesResolution.value.copy(Ft.resolution)}Xc.upload(ne,Va(Ve),$t,A)}if(ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(Xc.upload(ne,Va(Ve),$t,A),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&jt.setValue(ne,"center",ce.center),jt.setValue(ne,"modelViewMatrix",ce.modelViewMatrix),jt.setValue(ne,"normalMatrix",ce.normalMatrix),jt.setValue(ne,"modelMatrix",ce.matrixWorld),ue.uniformsGroups!==void 0){const Ft=ue.uniformsGroups;for(let wi=0,Bi=Ft.length;wi<Bi;wi++){const dr=Ft[wi];ve.update(dr,qn),ve.bind(dr,qn)}}return qn}function du(P,re){P.ambientLightColor.needsUpdate=re,P.lightProbe.needsUpdate=re,P.directionalLights.needsUpdate=re,P.directionalLightShadows.needsUpdate=re,P.pointLights.needsUpdate=re,P.pointLightShadows.needsUpdate=re,P.spotLights.needsUpdate=re,P.spotLightShadows.needsUpdate=re,P.rectAreaLights.needsUpdate=re,P.hemisphereLights.needsUpdate=re}function hu(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(P,re,he){const ue=j.get(P);ue.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,ue.__autoAllocateDepthBuffer===!1&&(ue.__useRenderToTexture=!1),j.get(P.texture).__webglTexture=re,j.get(P.depthTexture).__webglTexture=ue.__autoAllocateDepthBuffer?void 0:he,ue.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,re){const he=j.get(P);he.__webglFramebuffer=re,he.__useDefaultFramebuffer=re===void 0};const en=ne.createFramebuffer();this.setRenderTarget=function(P,re=0,he=0){F=P,G=re,ee=he;let ue=null,ce=!1,Fe=!1;if(P){const je=j.get(P);if(je.__useDefaultFramebuffer!==void 0){Oe.bindFramebuffer(ne.FRAMEBUFFER,je.__webglFramebuffer),$.copy(P.viewport),X.copy(P.scissor),te=P.scissorTest,Oe.viewport($),Oe.scissor(X),Oe.setScissorTest(te),U=-1;return}else if(je.__webglFramebuffer===void 0)A.setupRenderTarget(P);else if(je.__hasExternalTextures)A.rebindTextures(P,j.get(P.texture).__webglTexture,j.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const gt=P.depthTexture;if(je.__boundDepthTexture!==gt){if(gt!==null&&j.has(gt)&&(P.width!==gt.image.width||P.height!==gt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(P)}}const Ze=P.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Fe=!0);const nt=j.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(nt[re])?ue=nt[re][he]:ue=nt[re],ce=!0):P.samples>0&&A.useMultisampledRTT(P)===!1?ue=j.get(P).__webglMultisampledFramebuffer:Array.isArray(nt)?ue=nt[he]:ue=nt,$.copy(P.viewport),X.copy(P.scissor),te=P.scissorTest}else $.copy(fe).multiplyScalar(Ne).floor(),X.copy(xe).multiplyScalar(Ne).floor(),te=Ce;if(he!==0&&(ue=en),Oe.bindFramebuffer(ne.FRAMEBUFFER,ue)&&Oe.drawBuffers(P,ue),Oe.viewport($),Oe.scissor(X),Oe.setScissorTest(te),ce){const je=j.get(P.texture);ne.framebufferTexture2D(ne.FRAMEBUFFER,ne.COLOR_ATTACHMENT0,ne.TEXTURE_CUBE_MAP_POSITIVE_X+re,je.__webglTexture,he)}else if(Fe){const je=re;for(let Ze=0;Ze<P.textures.length;Ze++){const nt=j.get(P.textures[Ze]);ne.framebufferTextureLayer(ne.FRAMEBUFFER,ne.COLOR_ATTACHMENT0+Ze,nt.__webglTexture,he,je)}}else if(P!==null&&he!==0){const je=j.get(P.texture);ne.framebufferTexture2D(ne.FRAMEBUFFER,ne.COLOR_ATTACHMENT0,ne.TEXTURE_2D,je.__webglTexture,he)}U=-1},this.readRenderTargetPixels=function(P,re,he,ue,ce,Fe,qe,je=0){if(!(P&&P.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ze=j.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&qe!==void 0&&(Ze=Ze[qe]),Ze){Oe.bindFramebuffer(ne.FRAMEBUFFER,Ze);try{const nt=P.textures[je],gt=nt.format,xt=nt.type;if(P.textures.length>1&&ne.readBuffer(ne.COLOR_ATTACHMENT0+je),!Dt.textureFormatReadable(gt)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Dt.textureTypeReadable(xt)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}re>=0&&re<=P.width-ue&&he>=0&&he<=P.height-ce&&ne.readPixels(re,he,ue,ce,J.convert(gt),J.convert(xt),Fe)}finally{const nt=F!==null?j.get(F).__webglFramebuffer:null;Oe.bindFramebuffer(ne.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(P,re,he,ue,ce,Fe,qe,je=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ze=j.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&qe!==void 0&&(Ze=Ze[qe]),Ze)if(re>=0&&re<=P.width-ue&&he>=0&&he<=P.height-ce){Oe.bindFramebuffer(ne.FRAMEBUFFER,Ze);const nt=P.textures[je],gt=nt.format,xt=nt.type;if(P.textures.length>1&&ne.readBuffer(ne.COLOR_ATTACHMENT0+je),!Dt.textureFormatReadable(gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Dt.textureTypeReadable(xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=ne.createBuffer();ne.bindBuffer(ne.PIXEL_PACK_BUFFER,Qe),ne.bufferData(ne.PIXEL_PACK_BUFFER,Fe.byteLength,ne.STREAM_READ),ne.readPixels(re,he,ue,ce,J.convert(gt),J.convert(xt),0);const Rt=F!==null?j.get(F).__webglFramebuffer:null;Oe.bindFramebuffer(ne.FRAMEBUFFER,Rt);const Wt=ne.fenceSync(ne.SYNC_GPU_COMMANDS_COMPLETE,0);return ne.flush(),await vb(ne,Wt,4),ne.bindBuffer(ne.PIXEL_PACK_BUFFER,Qe),ne.getBufferSubData(ne.PIXEL_PACK_BUFFER,0,Fe),ne.deleteBuffer(Qe),ne.deleteSync(Wt),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,re=null,he=0){const ue=Math.pow(2,-he),ce=Math.floor(P.image.width*ue),Fe=Math.floor(P.image.height*ue),qe=re!==null?re.x:0,je=re!==null?re.y:0;A.setTexture2D(P,0),ne.copyTexSubImage2D(ne.TEXTURE_2D,he,0,0,qe,je,ce,Fe),Oe.unbindTexture()};const fu=ne.createFramebuffer(),Wa=ne.createFramebuffer();this.copyTextureToTexture=function(P,re,he=null,ue=null,ce=0,Fe=0){let qe,je,Ze,nt,gt,xt,Qe,Rt,Wt;const Zt=P.isCompressedTexture?P.mipmaps[Fe]:P.image;if(he!==null)qe=he.max.x-he.min.x,je=he.max.y-he.min.y,Ze=he.isBox3?he.max.z-he.min.z:1,nt=he.min.x,gt=he.min.y,xt=he.isBox3?he.min.z:0;else{const $t=Math.pow(2,-ce);qe=Math.floor(Zt.width*$t),je=Math.floor(Zt.height*$t),P.isDataArrayTexture?Ze=Zt.depth:P.isData3DTexture?Ze=Math.floor(Zt.depth*$t):Ze=1,nt=0,gt=0,xt=0}ue!==null?(Qe=ue.x,Rt=ue.y,Wt=ue.z):(Qe=0,Rt=0,Wt=0);const Ut=J.convert(re.format),cn=J.convert(re.type);let Ve;re.isData3DTexture?(A.setTexture3D(re,0),Ve=ne.TEXTURE_3D):re.isDataArrayTexture||re.isCompressedArrayTexture?(A.setTexture2DArray(re,0),Ve=ne.TEXTURE_2D_ARRAY):(A.setTexture2D(re,0),Ve=ne.TEXTURE_2D),Oe.activeTexture(ne.TEXTURE0),Oe.pixelStorei(ne.UNPACK_FLIP_Y_WEBGL,re.flipY),Oe.pixelStorei(ne.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),Oe.pixelStorei(ne.UNPACK_ALIGNMENT,re.unpackAlignment);const wn=Oe.getParameter(ne.UNPACK_ROW_LENGTH),St=Oe.getParameter(ne.UNPACK_IMAGE_HEIGHT),qn=Oe.getParameter(ne.UNPACK_SKIP_PIXELS),$n=Oe.getParameter(ne.UNPACK_SKIP_ROWS),wt=Oe.getParameter(ne.UNPACK_SKIP_IMAGES);Oe.pixelStorei(ne.UNPACK_ROW_LENGTH,Zt.width),Oe.pixelStorei(ne.UNPACK_IMAGE_HEIGHT,Zt.height),Oe.pixelStorei(ne.UNPACK_SKIP_PIXELS,nt),Oe.pixelStorei(ne.UNPACK_SKIP_ROWS,gt),Oe.pixelStorei(ne.UNPACK_SKIP_IMAGES,xt);const rs=P.isDataArrayTexture||P.isData3DTexture,jt=re.isDataArrayTexture||re.isData3DTexture;if(P.isDepthTexture){const $t=j.get(P),bi=j.get(re),Ft=j.get($t.__renderTarget),wi=j.get(bi.__renderTarget);Oe.bindFramebuffer(ne.READ_FRAMEBUFFER,Ft.__webglFramebuffer),Oe.bindFramebuffer(ne.DRAW_FRAMEBUFFER,wi.__webglFramebuffer);for(let Bi=0;Bi<Ze;Bi++)rs&&(ne.framebufferTextureLayer(ne.READ_FRAMEBUFFER,ne.COLOR_ATTACHMENT0,j.get(P).__webglTexture,ce,xt+Bi),ne.framebufferTextureLayer(ne.DRAW_FRAMEBUFFER,ne.COLOR_ATTACHMENT0,j.get(re).__webglTexture,Fe,Wt+Bi)),ne.blitFramebuffer(nt,gt,qe,je,Qe,Rt,qe,je,ne.DEPTH_BUFFER_BIT,ne.NEAREST);Oe.bindFramebuffer(ne.READ_FRAMEBUFFER,null),Oe.bindFramebuffer(ne.DRAW_FRAMEBUFFER,null)}else if(ce!==0||P.isRenderTargetTexture||j.has(P)){const $t=j.get(P),bi=j.get(re);Oe.bindFramebuffer(ne.READ_FRAMEBUFFER,fu),Oe.bindFramebuffer(ne.DRAW_FRAMEBUFFER,Wa);for(let Ft=0;Ft<Ze;Ft++)rs?ne.framebufferTextureLayer(ne.READ_FRAMEBUFFER,ne.COLOR_ATTACHMENT0,$t.__webglTexture,ce,xt+Ft):ne.framebufferTexture2D(ne.READ_FRAMEBUFFER,ne.COLOR_ATTACHMENT0,ne.TEXTURE_2D,$t.__webglTexture,ce),jt?ne.framebufferTextureLayer(ne.DRAW_FRAMEBUFFER,ne.COLOR_ATTACHMENT0,bi.__webglTexture,Fe,Wt+Ft):ne.framebufferTexture2D(ne.DRAW_FRAMEBUFFER,ne.COLOR_ATTACHMENT0,ne.TEXTURE_2D,bi.__webglTexture,Fe),ce!==0?ne.blitFramebuffer(nt,gt,qe,je,Qe,Rt,qe,je,ne.COLOR_BUFFER_BIT,ne.NEAREST):jt?ne.copyTexSubImage3D(Ve,Fe,Qe,Rt,Wt+Ft,nt,gt,qe,je):ne.copyTexSubImage2D(Ve,Fe,Qe,Rt,nt,gt,qe,je);Oe.bindFramebuffer(ne.READ_FRAMEBUFFER,null),Oe.bindFramebuffer(ne.DRAW_FRAMEBUFFER,null)}else jt?P.isDataTexture||P.isData3DTexture?ne.texSubImage3D(Ve,Fe,Qe,Rt,Wt,qe,je,Ze,Ut,cn,Zt.data):re.isCompressedArrayTexture?ne.compressedTexSubImage3D(Ve,Fe,Qe,Rt,Wt,qe,je,Ze,Ut,Zt.data):ne.texSubImage3D(Ve,Fe,Qe,Rt,Wt,qe,je,Ze,Ut,cn,Zt):P.isDataTexture?ne.texSubImage2D(ne.TEXTURE_2D,Fe,Qe,Rt,qe,je,Ut,cn,Zt.data):P.isCompressedTexture?ne.compressedTexSubImage2D(ne.TEXTURE_2D,Fe,Qe,Rt,Zt.width,Zt.height,Ut,Zt.data):ne.texSubImage2D(ne.TEXTURE_2D,Fe,Qe,Rt,qe,je,Ut,cn,Zt);Oe.pixelStorei(ne.UNPACK_ROW_LENGTH,wn),Oe.pixelStorei(ne.UNPACK_IMAGE_HEIGHT,St),Oe.pixelStorei(ne.UNPACK_SKIP_PIXELS,qn),Oe.pixelStorei(ne.UNPACK_SKIP_ROWS,$n),Oe.pixelStorei(ne.UNPACK_SKIP_IMAGES,wt),Fe===0&&re.generateMipmaps&&ne.generateMipmap(Ve),Oe.unbindTexture()},this.initRenderTarget=function(P){j.get(P).__webglFramebuffer===void 0&&A.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?A.setTextureCube(P,0):P.isData3DTexture?A.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?A.setTexture2DArray(P,0):A.setTexture2D(P,0),Oe.unbindTexture()},this.resetState=function(){G=0,ee=0,F=null,Oe.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),t.unpackColorSpace=At._getUnpackColorSpace()}}const Nv={type:"change"},Rp={type:"start"},W0={type:"end"},Rc=new bp,Av=new er,oA=Math.cos(70*Sb.DEG2RAD),mn=new ae,ti=2*Math.PI,Vt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Vh=1e-6;class lA extends u1{constructor(e,t=null){super(e,t),this.state=Vt.NONE,this.target=new ae,this.cursor=new ae,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Aa.ROTATE,MIDDLE:Aa.DOLLY,RIGHT:Aa.PAN},this.touches={ONE:Ta.ROTATE,TWO:Ta.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new ae,this._lastQuaternion=new rr,this._lastTargetPosition=new ae,this._quat=new rr().setFromUnitVectors(e.up,new ae(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new nv,this._sphericalDelta=new nv,this._scale=1,this._panOffset=new ae,this._rotateStart=new dt,this._rotateEnd=new dt,this._rotateDelta=new dt,this._panStart=new dt,this._panEnd=new dt,this._panDelta=new dt,this._dollyStart=new dt,this._dollyEnd=new dt,this._dollyDelta=new dt,this._dollyDirection=new ae,this._mouse=new dt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=uA.bind(this),this._onPointerDown=cA.bind(this),this._onPointerUp=dA.bind(this),this._onContextMenu=vA.bind(this),this._onMouseWheel=pA.bind(this),this._onKeyDown=mA.bind(this),this._onTouchStart=gA.bind(this),this._onTouchMove=xA.bind(this),this._onMouseDown=hA.bind(this),this._onMouseMove=fA.bind(this),this._interceptControlDown=_A.bind(this),this._interceptControlUp=yA.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Nv),this.update(),this.state=Vt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;mn.copy(t).sub(this.target),mn.applyQuaternion(this._quat),this._spherical.setFromVector3(mn),this.autoRotate&&this.state===Vt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(r)&&isFinite(o)&&(r<-Math.PI?r+=ti:r>Math.PI&&(r-=ti),o<-Math.PI?o+=ti:o>Math.PI&&(o-=ti),r<=o?this._spherical.theta=Math.max(r,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+o)/2?Math.max(r,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=u!=this._spherical.radius}if(mn.setFromSpherical(this._spherical),mn.applyQuaternion(this._quatInverse),t.copy(this.target).add(mn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const h=mn.length();u=this._clampDistance(h*this._scale);const f=h-u;this.object.position.addScaledVector(this._dollyDirection,f),this.object.updateMatrixWorld(),c=!!f}else if(this.object.isOrthographicCamera){const h=new ae(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=f!==this.object.zoom;const p=new ae(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(h),this.object.updateMatrixWorld(),u=mn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(Rc.origin.copy(this.object.position),Rc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Rc.direction))<oA?this.object.lookAt(this.target):(Av.setFromNormalAndCoplanarPoint(this.object.up,this.target),Rc.intersectPlane(Av,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Vh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Vh||this._lastTargetPosition.distanceToSquared(this.target)>Vh?(this.dispatchEvent(Nv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ti/60*this.autoRotateSpeed*e:ti/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){mn.setFromMatrixColumn(t,0),mn.multiplyScalar(-e),this._panOffset.add(mn)}_panUp(e,t){this.screenSpacePanning===!0?mn.setFromMatrixColumn(t,1):(mn.setFromMatrixColumn(t,0),mn.crossVectors(this.object.up,mn)),mn.multiplyScalar(e),this._panOffset.add(mn)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;mn.copy(o).sub(this.target);let c=mn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*c/r.clientHeight,this.object.matrix),this._panUp(2*t*c/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),o=e-r.left,c=t-r.top,u=r.width,h=r.height;this._mouse.x=o/u*2-1,this._mouse.y=-(c/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ti*this._rotateDelta.x/t.clientHeight),this._rotateUp(ti*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ti*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ti*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ti*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ti*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(r,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(r,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,c=Math.sqrt(r*r+o*o);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),o=.5*(e.pageX+r.x),c=.5*(e.pageY+r.y);this._rotateEnd.set(o,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ti*this._rotateDelta.x/t.clientHeight),this._rotateUp(ti*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(r,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,c=Math.sqrt(r*r+o*o);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,h=(e.pageY+t.y)*.5;this._updateZoomParameters(u,h)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new dt,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function cA(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function uA(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function dA(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(W0),this.state=Vt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function hA(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Aa.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Vt.DOLLY;break;case Aa.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Vt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Vt.ROTATE}break;case Aa.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Vt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Vt.PAN}break;default:this.state=Vt.NONE}this.state!==Vt.NONE&&this.dispatchEvent(Rp)}function fA(i){switch(this.state){case Vt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Vt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Vt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function pA(i){this.enabled===!1||this.enableZoom===!1||this.state!==Vt.NONE||(i.preventDefault(),this.dispatchEvent(Rp),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(W0))}function mA(i){this.enabled!==!1&&this._handleKeyDown(i)}function gA(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ta.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Vt.TOUCH_ROTATE;break;case Ta.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Vt.TOUCH_PAN;break;default:this.state=Vt.NONE}break;case 2:switch(this.touches.TWO){case Ta.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Vt.TOUCH_DOLLY_PAN;break;case Ta.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Vt.TOUCH_DOLLY_ROTATE;break;default:this.state=Vt.NONE}break;default:this.state=Vt.NONE}this.state!==Vt.NONE&&this.dispatchEvent(Rp)}function xA(i){switch(this._trackPointer(i),this.state){case Vt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Vt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Vt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Vt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Vt.NONE}}function vA(i){this.enabled!==!1&&i.preventDefault()}function _A(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function yA(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Gh(i){const e=`${i.model||""} ${i.serialNumber||""} ${i.zone||""}`.toLowerCase();return e.includes("switch")?"switch":e.includes("access")||e.includes("ap")||e.includes("wifi")?"ap":e.includes("router")||e.includes("gateway")?"gateway":"device"}function Rv(i){return i==="ONLINE"?1483594:i==="UNSTABLE"?15909632:6583435}function SA(i,e="#0f172a"){const t=document.createElement("canvas"),r=t.getContext("2d");t.width=512,t.height=128,r.font="700 34px Arial",r.fillStyle="rgba(255,255,255,0.92)",r.roundRect(0,14,512,72,18),r.fill(),r.fillStyle=e,r.fillText(i.slice(0,26),28,60);const o=new $b(t),c=new C0({map:o,transparent:!0}),u=new zb(c);return u.scale.set(4.8,1.2,1),u}function Pc(i,e,t,r=9741240){const o=new Xn().setFromPoints([e,t]),c=new Tp({color:r,transparent:!0,opacity:.75}),u=new R0(o,c);return i.add(u),u}function Uo(i,{position:e,color:t,label:r,shape:o="box",scale:c=[1,1,1]}){const u=o==="sphere"?new Np(.45,32,18):o==="cylinder"?new Cp(.42,.55,1.2,32):new ka(1,1,1),h=new D0({color:t,roughness:.42,metalness:.08}),f=new Fi(u,h);f.position.copy(e),f.scale.set(c[0],c[1],c[2]),f.castShadow=!0,f.receiveShadow=!0,i.add(f);const p=SA(r);return p.position.set(e.x,e.y+1.25,e.z),i.add(p),f}function MA(){const i=Wn.getStoredUser(),e=Cs(i),t=D.useRef(null),[r,o]=D.useState([]),[c,u]=D.useState([]),[h,f]=D.useState([]),[p,v]=D.useState([]),[g,x]=D.useState(""),[y,E]=D.useState(!0),[T,S]=D.useState(""),[_,w]=D.useState(""),b=async(I,L=p)=>{E(!0);const B=Zi(I),C=B?{hotelId:B}:void 0;Promise.all([We.listDevices(C),We.listLoginSessions(C)]).then(([O,Y])=>{o(O),u(Y),f(B?L.filter(V=>V.id===B):L)}).catch(O=>{console.warn(O),S("Donnees live indisponibles, affichage de la topologie de reference.")}).finally(()=>E(!1))};D.useEffect(()=>{We.listHotels().then(async I=>{v(I);const L=or(i,I);x(L),await b(L,I)}).catch(I=>{console.warn(I),S("Donnees live indisponibles, affichage de la topologie de reference."),E(!1)})},[]),D.useEffect(()=>{!g||p.length===0||b(g)},[g]);const N=D.useMemo(()=>{const I=r.filter(O=>O.status==="ONLINE").length,L=r.filter(O=>O.status==="UNSTABLE").length,B=r.filter(O=>O.status==="OFFLINE").length,C=c.filter(O=>O.status==="ONLINE").length;return{online:I,unstable:L,offline:B,activeSessions:C}},[r,c]);return D.useEffect(()=>{var fe;if(!t.current)return;const I=t.current,L=new jb;L.background=new Ct(16317180),L.fog=new Ep(16317180,28,74);const B=new yi(48,I.clientWidth/I.clientHeight,.1,1e3);B.position.set(9,10,17);let C;try{C=new aA({antialias:!0,alpha:!1}),w("")}catch(xe){console.warn(xe),w("Affichage 3D indisponible sur ce navigateur, topologie simplifiee affichee."),I.innerHTML="";return}C.setPixelRatio(Math.min(window.devicePixelRatio,2)),C.setSize(I.clientWidth,I.clientHeight),C.shadowMap.enabled=!0,C.shadowMap.type=s0,I.innerHTML="",I.appendChild(C.domElement);const O=new lA(B,C.domElement);O.enableDamping=!0,O.dampingFactor=.08,O.maxPolarAngle=Math.PI/2.08,O.minDistance=8,O.maxDistance=42,O.target.set(0,1.2,0);const Y=new i1(16777215,14412542,1.6);L.add(Y);const V=new a1(16777215,2.1);V.position.set(10,18,8),V.castShadow=!0,V.shadow.mapSize.set(2048,2048),L.add(V);const Q=new Fi(new Zo(34,24,1,1),new D0({color:16777215,roughness:.72}));Q.rotation.x=-Math.PI/2,Q.receiveShadow=!0,L.add(Q);const G=new c1(34,22,13358561,14870768);G.position.y=.01,L.add(G);const ee=g===bn?"MboaLink Multi-hotels":((fe=h[0])==null?void 0:fe.name)||"Hotel MboaLink",F=new ae(-11,1.2,0);Uo(L,{position:F,color:339807,label:ee,shape:"box",scale:[1.8,2.6,1.8]});const U=new ae(-5.8,1.1,0);Uo(L,{position:U,color:15909632,label:"Gateway",shape:"box",scale:[1.5,.9,1.2]}),Pc(L,F,U,339807);const W=r.filter(xe=>Gh(xe)==="switch"),$=r.filter(xe=>Gh(xe)==="ap"),X=r.filter(xe=>!["switch","ap"].includes(Gh(xe))),te=W.length?W:X.slice(0,2),z=$.length?$:r.slice(0,6),se=(te.length?te:[{id:"sw-1",model:"Core Switch",status:"ONLINE"}]).slice(0,4).map((xe,Ce,He)=>{const Et=He.length===1?0:-5+Ce*(10/Math.max(He.length-1,1)),it=new ae(-.8,1,Et);return Uo(L,{position:it,color:Rv(xe.status||"ONLINE"),label:xe.model||xe.serialNumber||`Switch ${Ce+1}`,shape:"box",scale:[1.5,.62,1]}),Pc(L,U,it,2450411),{device:xe,pos:it}}),be=(z.length?z:[{id:"ap-1",model:"AP Lobby",status:"ONLINE",zone:"Lobby"},{id:"ap-2",model:"AP Rooms",status:"ONLINE",zone:"Rooms"},{id:"ap-3",model:"AP Conference",status:"UNSTABLE",zone:"Conference"}]).slice(0,10).map((xe,Ce)=>{var kt;const He=Ce%2,it=4+Math.floor(Ce/2)*2.7,et=He===0?-4.7:4.7,_t=new ae(it,1.05,et);Uo(L,{position:_t,color:Rv(xe.status||"ONLINE"),label:xe.zone||xe.model||`AP ${Ce+1}`,shape:"cylinder",scale:[1,1,1]});const ht=((kt=se[Ce%se.length])==null?void 0:kt.pos)||U;return Pc(L,ht,_t,9741240),{device:xe,pos:_t}});c.filter(xe=>xe.status==="ONLINE").slice(0,14).forEach((xe,Ce)=>{var _t,ht;const He=((_t=be[Ce%be.length])==null?void 0:_t.pos)||U,Et=Ce/14*Math.PI*2,it=1.35+Ce%3*.35,et=new ae(He.x+Math.cos(Et)*it,.55,He.z+Math.sin(Et)*it);Uo(L,{position:et,color:8141549,label:xe.clientName||((ht=xe.room)==null?void 0:ht.name)||"Client",shape:"sphere",scale:[.52,.52,.52]}),Pc(L,He,et,8141549)});let Ne=0;const q=()=>{Ne=requestAnimationFrame(q),L.traverse(xe=>{var Ce;xe.isMesh&&((Ce=xe.geometry)==null?void 0:Ce.type)==="CylinderGeometry"&&(xe.rotation.y+=.006)}),O.update(),C.render(L,B)};q();const me=()=>{!I.clientWidth||!I.clientHeight||(B.aspect=I.clientWidth/I.clientHeight,B.updateProjectionMatrix(),C.setSize(I.clientWidth,I.clientHeight))};return window.addEventListener("resize",me),()=>{cancelAnimationFrame(Ne),window.removeEventListener("resize",me),O.dispose(),C.dispose(),L.traverse(xe=>{var Ce,He,Et,it;(He=(Ce=xe.geometry)==null?void 0:Ce.dispose)==null||He.call(Ce),xe.material&&(Array.isArray(xe.material)?xe.material.forEach(et=>{var _t;return(_t=et.dispose)==null?void 0:_t.call(et)}):(it=(Et=xe.material).dispose)==null||it.call(Et))}),I.innerHTML=""}},[r,c,h,g]),a.jsx(Ei,{activePage:"DASHBOARD",activeSubPage:"Network Map",children:a.jsxs("div",{className:"networkMapPage",children:[a.jsxs("div",{className:"networkMapHeader",children:[a.jsxs("div",{children:[a.jsx("p",{className:"networkMapEyebrow",children:"Architecture reseau 3D"}),a.jsx("h1",{children:g===bn?"Carte reseau multi-hotels":"Carte reseau de l'hotel"}),a.jsx("span",{children:"Gateway, switchs, access points et clients actifs dans une vue interactive."})]}),e&&a.jsxs("select",{className:"networkMapScopeSelect",value:g,onChange:I=>x(I.target.value),children:[a.jsx("option",{value:bn,children:"Tous les hôtels"}),p.map(I=>a.jsx("option",{value:I.id,children:I.name},I.id))]}),a.jsxs("div",{className:"networkMapStats",children:[a.jsx("strong",{children:N.online}),a.jsx("span",{children:"Online"}),a.jsx("strong",{children:N.unstable}),a.jsx("span",{children:"Instables"}),a.jsx("strong",{children:N.activeSessions}),a.jsx("span",{children:"Clients"})]})]}),a.jsxs("div",{className:"networkMapSceneShell",children:[a.jsx("div",{ref:t,className:"networkMapCanvas"}),y&&a.jsx("div",{className:"networkMapLoading",children:"Chargement de la topologie..."}),T&&a.jsx("div",{className:"networkMapNotice",children:T}),_&&a.jsxs("div",{className:"networkMapFallback",children:[a.jsx("div",{className:"fallbackNode hotel",children:"Hotel"}),a.jsx("div",{className:"fallbackLine"}),a.jsx("div",{className:"fallbackNode gateway",children:"Gateway"}),a.jsx("div",{className:"fallbackLine"}),a.jsxs("div",{className:"fallbackCluster",children:[a.jsx("div",{className:"fallbackNode switch",children:"Switch"}),a.jsx("div",{className:"fallbackNode ap",children:"Access Point"}),a.jsx("div",{className:"fallbackNode client",children:"Clients"})]}),a.jsx("p",{children:_})]}),a.jsxs("div",{className:"networkMapLegend",children:[a.jsxs("span",{children:[a.jsx("i",{className:"legendGateway"})," Gateway"]}),a.jsxs("span",{children:[a.jsx("i",{className:"legendOnline"})," Online"]}),a.jsxs("span",{children:[a.jsx("i",{className:"legendWarning"})," Instable"]}),a.jsxs("span",{children:[a.jsx("i",{className:"legendClient"})," Client actif"]})]})]})]})})}function EA({isOpen:i,onClose:e,onSave:t,hotels:r,defaultHotelId:o}){const[c,u]=D.useState({hotelId:o||"",macAddress:"",serialNumber:"",model:"",firmwareVersion:"",localIp:"",zone:"",floor:"",installedAt:""});D.useEffect(()=>{u(p=>({...p,hotelId:o||p.hotelId}))},[o]);const h=(p,v)=>{u(g=>({...g,[p]:v}))},f=()=>{if(!c.hotelId){alert("Sélectionnez un hôtel");return}if(!c.macAddress){alert("Veuillez saisir la MAC address");return}t({hotelId:c.hotelId,macAddress:c.macAddress,serialNumber:c.serialNumber||void 0,model:c.model||void 0,firmwareVersion:c.firmwareVersion||void 0,localIp:c.localIp||void 0,zone:c.zone||void 0,floor:c.floor?Number(c.floor):void 0,installedAt:c.installedAt?new Date(c.installedAt).toISOString():void 0})};return i?a.jsx("div",{className:"modalOverlay",onClick:e,children:a.jsxs("div",{className:"modalContent",onClick:p=>p.stopPropagation(),children:[a.jsxs("div",{className:"modalHeader",children:[a.jsx("button",{className:"backBtn",onClick:e,children:"← BACK"}),a.jsxs("div",{className:"modalTitle",children:[a.jsx("h2",{children:"Add Device"}),a.jsx("p",{children:"Ajoutez un point d’accès Wi‑Fi ou un équipement réseau."})]})]}),a.jsx("div",{className:"modalBody",children:a.jsxs("section",{className:"formSection",children:[a.jsx("h3",{className:"sectionTitle",children:"Device Information"}),a.jsxs("div",{className:"formRow",children:[a.jsx("div",{className:"formLabel",children:a.jsx("label",{children:"Hôtel *"})}),a.jsxs("select",{value:c.hotelId,onChange:p=>h("hotelId",p.target.value),children:[a.jsx("option",{value:"",children:"Sélectionner un hôtel"}),r.map(p=>a.jsx("option",{value:p.id,children:p.name},p.id))]})]}),a.jsxs("div",{className:"formRow",children:[a.jsx("div",{className:"formLabel",children:a.jsx("label",{children:"MAC Address *"})}),a.jsx("input",{type:"text",value:c.macAddress,onChange:p=>h("macAddress",p.target.value),placeholder:"AA:BB:CC:DD:EE:FF"})]}),a.jsxs("div",{className:"formRow",children:[a.jsx("div",{className:"formLabel",children:a.jsx("label",{children:"Serial Number"})}),a.jsx("input",{type:"text",value:c.serialNumber,onChange:p=>h("serialNumber",p.target.value)})]}),a.jsxs("div",{className:"formRow",children:[a.jsx("div",{className:"formLabel",children:a.jsx("label",{children:"Modèle"})}),a.jsx("input",{type:"text",value:c.model,onChange:p=>h("model",p.target.value),placeholder:"Ubiquiti / TP-Link / MikroTik"})]}),a.jsxs("div",{className:"formRow",children:[a.jsx("div",{className:"formLabel",children:a.jsx("label",{children:"Firmware"})}),a.jsx("input",{type:"text",value:c.firmwareVersion,onChange:p=>h("firmwareVersion",p.target.value)})]}),a.jsxs("div",{className:"formRow",children:[a.jsx("div",{className:"formLabel",children:a.jsx("label",{children:"IP Locale"})}),a.jsx("input",{type:"text",value:c.localIp,onChange:p=>h("localIp",p.target.value),placeholder:"192.168.1.10"})]}),a.jsxs("div",{className:"formRow",children:[a.jsx("div",{className:"formLabel",children:a.jsx("label",{children:"Zone"})}),a.jsx("input",{type:"text",value:c.zone,onChange:p=>h("zone",p.target.value),placeholder:"LOBBY / FLOOR-1"})]}),a.jsxs("div",{className:"formRow",children:[a.jsx("div",{className:"formLabel",children:a.jsx("label",{children:"Étage"})}),a.jsx("input",{type:"number",value:c.floor,onChange:p=>h("floor",p.target.value)})]}),a.jsxs("div",{className:"formRow",children:[a.jsx("div",{className:"formLabel",children:a.jsx("label",{children:"Date d'installation"})}),a.jsx("input",{type:"date",value:c.installedAt,onChange:p=>h("installedAt",p.target.value)})]})]})}),a.jsxs("div",{className:"modalFooter",children:[a.jsx("button",{className:"btn btnPrimary",onClick:f,children:"Ajouter"}),a.jsx("button",{className:"btn btnSecondary",onClick:e,children:"Annuler"})]})]})}):null}function bA(){const i=Wn.getStoredUser(),e=Cs(i),[t,r]=D.useState([]),[o,c]=D.useState([]),[u,h]=D.useState(""),[f,p]=D.useState(""),[v,g]=D.useState("all"),[x,y]=D.useState(!0),[E,T]=D.useState(!1),S=async b=>{try{const N=Zi(b),I=await We.listDevices({hotelId:N,status:v==="all"?void 0:v,search:f||void 0});r(I)}catch(N){alert(N.message||"Impossible de charger les devices")}finally{y(!1)}};D.useEffect(()=>{We.listHotels().then(b=>{c(b);const N=or(i,b);return h(N),S(N)}).catch(b=>alert(b.message||"Impossible de charger les hôtels"))},[]),D.useEffect(()=>{u&&S(u)},[u,v]);const _=Na(u),w=D.useMemo(()=>{const b=f.trim().toLowerCase();return b?t.filter(N=>`${N.macAddress} ${N.model||""} ${N.serialNumber||""}`.toLowerCase().includes(b)):t},[t,f]);return a.jsxs(Ei,{activePage:"DEVICE MANAGER",activeSubPage:"",children:[a.jsxs("div",{className:"deviceManagerPage",children:[a.jsxs("div",{className:"pageHeader",children:[a.jsxs("div",{children:[a.jsx("h1",{className:"pageTitle",children:"Device Manager"}),a.jsx("p",{className:"pageSubtitle",children:"Supervision des équipements WiFi et de leur état."})]}),a.jsx("button",{className:"btn btnPrimary",onClick:()=>T(!0),disabled:!_,title:_?void 0:"Sélectionnez un hôtel précis pour ajouter un device",children:"+ Ajouter un device"})]}),a.jsxs("div",{className:"filtersBar",children:[e?a.jsxs("select",{className:"filterSelect",value:u,onChange:b=>h(b.target.value),children:[a.jsx("option",{value:bn,children:"Tous les hôtels"}),o.map(b=>a.jsx("option",{value:b.id,children:b.name},b.id))]}):null,a.jsx("input",{type:"text",className:"searchInput",placeholder:"Rechercher par MAC, modèle, serial...",value:f,onChange:b=>p(b.target.value)}),a.jsxs("select",{className:"filterSelect",value:v,onChange:b=>g(b.target.value),children:[a.jsx("option",{value:"all",children:"Tous les statuts"}),a.jsx("option",{value:"ONLINE",children:"Online"}),a.jsx("option",{value:"OFFLINE",children:"Offline"}),a.jsx("option",{value:"UNSTABLE",children:"Instable"})]})]}),x&&a.jsx("p",{children:"Chargement des équipements..."}),a.jsx("div",{className:"deviceTableWrapper",children:a.jsxs("table",{className:"deviceTable",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"MAC"}),a.jsx("th",{children:"Modèle"}),a.jsx("th",{children:"Firmware"}),a.jsx("th",{children:"Statut"}),a.jsx("th",{children:"Clients"}),a.jsx("th",{children:"Zone"}),a.jsx("th",{children:"Dernier heartbeat"}),a.jsx("th",{children:"Actions"})]})}),a.jsx("tbody",{children:w.map(b=>a.jsxs("tr",{children:[a.jsx("td",{children:b.macAddress}),a.jsx("td",{children:b.model||"-"}),a.jsx("td",{children:b.firmwareVersion||"-"}),a.jsx("td",{children:a.jsx("span",{className:`statusBadge ${String(b.status).toLowerCase()}`,children:b.status})}),a.jsx("td",{children:b.clientsConnected??0}),a.jsx("td",{children:b.zone||"-"}),a.jsx("td",{children:b.lastHeartbeatAt?new Date(b.lastHeartbeatAt).toLocaleString("fr-FR"):"-"}),a.jsx("td",{children:a.jsx("button",{className:"actionBtn",onClick:()=>We.restartDevice(b.id).then(()=>S(u)),children:"Redémarrer"})})]},b.id))})]})})]}),a.jsx(EA,{isOpen:E,onClose:()=>T(!1),hotels:o,defaultHotelId:u,onSave:async b=>{try{await We.createDevice(b),await S(u),T(!1)}catch(N){alert(N.message||"Impossible de créer le device")}}})]})}const wA="/assets/Logo%20Mboalink-02%201-Bk-0oppc.png",Lc={ADMIN:"Administrateur",SUPPORT:"Support",HOTEL_IT:"IT hôtel",RECEPTIONIST:"Réceptionniste",CLIENT:"Client"},Ic=["HOTEL_IT","RECEPTIONIST"],Pv={ADMIN:"Admins MboaLink",SUPPORT:"Support IT MboaLink",HOTEL_IT:"IT hôtel",RECEPTIONIST:"Réceptionnistes"},Wh={INFO:"Information",WARNING:"Attention",URGENT:"Urgent"},Xh={fullName:"",email:"",password:"",role:"RECEPTIONIST",hotelId:""},qh={name:"",city:"",country:"Cameroun",address:"",description:""},$h={hotelId:"",macAddress:"",model:"",serialNumber:"",localIp:"",zone:"",floor:""},Lv={title:"",message:"",priority:"INFO",category:"",targetMode:"ALL",hotelId:"",role:"SUPPORT",userIds:[]};function Dc(i){return i?new Date(i).toLocaleString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}):"Jamais"}function X0(i){return i.split(" ").filter(Boolean).slice(0,2).map(e=>{var t;return(t=e[0])==null?void 0:t.toUpperCase()}).join("")||"ML"}function Hn(i){return String(i??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Iv(){const i=Dr(),e=Wn.getStoredUser(),[t,r]=D.useState([]),[o,c]=D.useState([]),[u,h]=D.useState([]),[f,p]=D.useState(""),[v,g]=D.useState("all"),[x,y]=D.useState("all"),[E,T]=D.useState(!0),[S,_]=D.useState(!1),[w,b]=D.useState(Xh),[N,I]=D.useState(qh),[L,B]=D.useState($h),[C,O]=D.useState(null),[Y,V]=D.useState(null),[Q,G]=D.useState(null),[ee,F]=D.useState(null),[U,W]=D.useState("inbox"),[$,X]=D.useState([]),[te,z]=D.useState([]),[se,Pe]=D.useState([]),[be,Ne]=D.useState(Lv),[q,me]=D.useState(""),[fe,xe]=D.useState(!1),Ce=async()=>{try{const[k,K,Me,$e,rt,ft]=await Promise.all([We.listUsers(),We.listHotels(),We.listDevices(),We.listNotificationsInbox(),We.listSentNotifications(),We.listNotificationRecipients()]);r(k),c(K),h(Me),X($e),z(rt),Pe(ft)}catch(k){alert(k.message||"Chargement impossible")}finally{T(!1)}};D.useEffect(()=>{Ce()},[]);const He=D.useMemo(()=>{const k=f.trim().toLowerCase();return t.filter(K=>{var Me;return`${K.fullName} ${K.email} ${Lc[K.role]} ${((Me=K.hotel)==null?void 0:Me.name)||""}`.toLowerCase().includes(k)})},[t,f]),Et=D.useMemo(()=>{const k=f.trim().toLowerCase();return o.filter(K=>`${K.name} ${K.city} ${K.address}`.toLowerCase().includes(k))},[o,f]),it=D.useMemo(()=>{const k=f.trim().toLowerCase();return u.filter(K=>{var ft;const Me=`${K.model||""} ${K.macAddress} ${K.localIp||""} ${((ft=K.hotel)==null?void 0:ft.name)||""}`.toLowerCase().includes(k),$e=v==="all"||K.hotelId===v,rt=x==="all"||K.status===x;return Me&&$e&&rt})},[u,f,v,x]),et=D.useMemo(()=>{const k=u.filter(K=>K.status==="ONLINE").length;return{users:t.length,hotels:o.length,devices:u.length,onlineDevices:k}},[t,o,u]),_t=D.useMemo(()=>{const k=q.trim().toLowerCase();return k?$.filter(K=>{var Me,$e;return`${K.title} ${K.message} ${((Me=K.sender)==null?void 0:Me.fullName)||""} ${(($e=K.hotel)==null?void 0:$e.name)||""}`.toLowerCase().includes(k)}):$},[$,q]),ht=D.useMemo(()=>$.filter(k=>{var K,Me;return!((Me=(K=k.recipients)==null?void 0:K[0])!=null&&Me.readAt)}).length,[$]),kt=async()=>{await Wn.logout(),i(at.public.login)},Bt=k=>{b(K=>({...K,role:k,hotelId:Ic.includes(k)?K.hotelId:""}))},hn=()=>{O(null),b(Xh),F("user")},ne=()=>{V(null),I(qh),F("hotel")},zt=()=>{G(null),B($h),F("device")},pt=()=>{F(null),O(null),V(null),G(null),b(Xh),I(qh),B($h)},Dt=async k=>{if(k.preventDefault(),Ic.includes(w.role)&&!w.hotelId){alert("Sélectionnez un hôtel pour ce rôle.");return}if(!C&&w.password.length<8){alert("Le mot de passe doit contenir au moins 8 caractères.");return}try{_(!0);const K={fullName:w.fullName,email:w.email,role:w.role,hotelId:Ic.includes(w.role)?w.hotelId:"",isActive:!0,...w.password?{password:w.password}:{}};C?await We.updateUser(C,K):await We.createUser(K),pt(),await Ce()}catch(K){alert(K.message||"Enregistrement utilisateur impossible")}finally{_(!1)}},Oe=async k=>{k.preventDefault();try{_(!0);const K={...N,amenities:[],photos:[],status:"ACTIVE"};Y?await We.updateHotel(Y,K):await We.createHotel(K),pt(),await Ce()}catch(K){alert(K.message||"Enregistrement hôtel impossible")}finally{_(!1)}},Gt=async k=>{if(k.preventDefault(),!L.hotelId){alert("Sélectionnez un hôtel.");return}try{_(!0);const K={hotelId:L.hotelId,macAddress:L.macAddress,model:L.model||void 0,serialNumber:L.serialNumber||void 0,localIp:L.localIp||void 0,zone:L.zone||void 0,floor:L.floor?Number(L.floor):void 0};Q?await We.updateDevice(Q,K):await We.createDevice(K),pt(),await Ce()}catch(K){alert(K.message||"Enregistrement équipement impossible")}finally{_(!1)}},j=k=>{F("user"),O(k.id),b({fullName:k.fullName,email:k.email,password:"",role:k.role,hotelId:k.hotelId||""})},A=k=>{F("hotel"),V(k.id),I({name:k.name,city:k.city,country:k.country,address:k.address,description:k.description||""})},oe=k=>{F("device"),G(k.id),B({hotelId:k.hotelId,macAddress:k.macAddress,model:k.model||"",serialNumber:k.serialNumber||"",localIp:k.localIp||"",zone:k.zone||"",floor:k.floor!=null?String(k.floor):""})},_e=async k=>{if(confirm(`Désactiver ${k.email} ?`))try{await We.deactivateUser(k.id),await Ce()}catch(K){alert(K.message||"Désactivation impossible")}},Ee=async k=>{if(confirm(`Supprimer ${k.name} ?`))try{await We.deleteHotel(k.id),await Ce()}catch(K){alert(K.message||"Suppression impossible")}},Re=k=>{Ne(K=>({...K,userIds:K.userIds.includes(k)?K.userIds.filter(Me=>Me!==k):[...K.userIds,k]}))},Ue=k=>{Ne(K=>({...K,targetMode:k,userIds:[]}))},ge=async k=>{if(k.preventDefault(),be.targetMode==="HOTEL"&&!be.hotelId){alert("Sélectionnez un hôtel.");return}if(be.targetMode==="USERS"&&be.userIds.length===0){alert("Sélectionnez au moins un destinataire.");return}try{xe(!0),await We.createNotification({title:be.title,message:be.message,priority:be.priority,category:be.category,targetMode:be.targetMode,hotelId:be.hotelId,role:be.role,userIds:be.userIds}),Ne(Lv),await Ce(),W("sent")}catch(K){alert(K.message||"Envoi impossible")}finally{xe(!1)}},ye=async k=>{var K,Me;if(!((Me=(K=k.recipients)==null?void 0:K[0])!=null&&Me.readAt))try{await We.markNotificationRead(k.id),await Ce()}catch($e){alert($e.message||"Action impossible")}},ke=()=>{const k=new Date().toLocaleString("fr-FR",{day:"2-digit",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"}),K=(e==null?void 0:e.fullName)||(e==null?void 0:e.email)||"Administrateur MboaLink",Me=o.filter(st=>st.status==="ACTIVE").length,$e=u.filter(st=>st.status==="ONLINE").length,rt=t.filter(st=>!st.isActive).length,ft=new URL(wA,window.location.origin).href,J=t.slice(0,12).map(st=>{var bt;return`
      <tr>
        <td>${Hn(st.fullName)}</td>
        <td>${Hn(st.email)}</td>
        <td>${Hn(Lc[st.role])}</td>
        <td>${Hn(((bt=st.hotel)==null?void 0:bt.name)||"Plateforme")}</td>
        <td><span class="pill ${st.isActive?"ok":"muted"}">${st.isActive?"Actif":"Inactif"}</span></td>
      </tr>
    `}).join(""),Le=o.slice(0,10).map(st=>`
      <tr>
        <td>${Hn(st.name)}</td>
        <td>${Hn(st.city)}</td>
        <td>${Hn(st.address)}</td>
        <td><span class="pill ${st.status==="ACTIVE"?"ok":"warn"}">${Hn(st.status)}</span></td>
      </tr>
    `).join(""),ve=u.slice(0,12).map(st=>{var bt;return`
      <tr>
        <td>${Hn(st.model||st.serialNumber||st.macAddress)}</td>
        <td>${Hn(((bt=st.hotel)==null?void 0:bt.name)||"-")}</td>
        <td>${Hn(st.localIp||"-")}</td>
        <td>${Hn(st.zone||"-")}</td>
        <td><span class="pill ${st.status==="ONLINE"?"ok":st.status==="UNSTABLE"?"warn":"muted"}">${Hn(st.status)}</span></td>
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
          <img src="${ft}" alt="MboaLink" />
          <span>Rapport administrateur</span>
        </div>
        <h1>État de la plateforme MboaLink</h1>
        <p>Vue de synthèse générée depuis l'espace super admin MboaLink. Ce document regroupe les indicateurs utilisateurs, hôtels, équipements réseau et intégrations utiles au suivi opérationnel.</p>
      </div>
      <aside class="stamp">
        <strong>Généré le</strong>
        <span>${Hn(k)}</span>
        <strong style="margin-top:12px;">Par</strong>
        <span>${Hn(K)}</span>
      </aside>
    </section>

    <section class="content">
      <div class="sectionTitle">
        <h2>Indicateurs clés</h2>
        <span>MboaLink Admin</span>
      </div>
      <div class="kpis">
        <div class="kpi"><strong>${et.users}</strong><span>Utilisateurs</span></div>
        <div class="kpi"><strong>${Me}/${et.hotels}</strong><span>Hôtels actifs</span></div>
        <div class="kpi"><strong>${$e}/${et.devices}</strong><span>Équipements en ligne</span></div>
        <div class="kpi"><strong>${ht}</strong><span>Notifications non lues</span></div>
      </div>

      <div class="summary">
        <div class="box">
          <h3>Résumé exécutif</h3>
          <p>MboaLink dispose actuellement de ${et.users} utilisateur(s), ${et.hotels} hôtel(s) et ${et.devices} équipement(s) réseau déclaré(s). Les modules administrateur, notifications internes, équipements réseau et portail captif sont centralisés dans l'espace super admin.</p>
        </div>
        <div class="box">
          <h3>Points d'attention</h3>
          <ul>
            <li>${rt} utilisateur(s) inactif(s) à vérifier.</li>
            <li>${et.devices-$e} équipement(s) hors ligne ou instable(s).</li>
            <li>FreeRADIUS et portail captif à surveiller lors des tests réseau.</li>
          </ul>
        </div>
      </div>

      <div class="sectionTitle"><h2>Utilisateurs</h2><span>${t.length} entrée(s)</span></div>
      <table>
        <thead><tr><th>Nom</th><th>Email</th><th>Rôle</th><th>Hôtel</th><th>Statut</th></tr></thead>
        <tbody>${J||'<tr><td colspan="5">Aucun utilisateur enregistré.</td></tr>'}</tbody>
      </table>

      <div class="sectionTitle"><h2>Hôtels</h2><span>${o.length} entrée(s)</span></div>
      <table>
        <thead><tr><th>Nom</th><th>Ville</th><th>Adresse</th><th>Statut</th></tr></thead>
        <tbody>${Le||'<tr><td colspan="4">Aucun hôtel enregistré.</td></tr>'}</tbody>
      </table>

      <div class="sectionTitle"><h2>Équipements réseau</h2><span>${u.length} entrée(s)</span></div>
      <table>
        <thead><tr><th>Équipement</th><th>Hôtel</th><th>IP locale</th><th>Zone</th><th>Statut</th></tr></thead>
        <tbody>${ve||'<tr><td colspan="5">Aucun équipement enregistré.</td></tr>'}</tbody>
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
</html>`,Ie=document.getElementById("mboalink-report-print-frame");Ie==null||Ie.remove();const Se=document.createElement("iframe");Se.id="mboalink-report-print-frame",Se.title="Rapport MboaLink PDF",Se.style.position="fixed",Se.style.right="0",Se.style.bottom="0",Se.style.width="0",Se.style.height="0",Se.style.border="0",Se.style.opacity="0",document.body.appendChild(Se);const Xe=Se.contentWindow,ct=Xe==null?void 0:Xe.document;if(!Xe||!ct){Se.remove(),alert("Impossible de préparer le PDF. Réessayez depuis le navigateur.");return}ct.open(),ct.write(ze),ct.close(),setTimeout(()=>{Xe.focus(),Xe.print(),setTimeout(()=>Se.remove(),1200)},500)};return a.jsxs("div",{className:"mboaAdminShell",children:[a.jsxs("aside",{className:"mboaAdminSidebar",children:[a.jsx("div",{className:"mboaAdminBrand",children:a.jsx("img",{src:hp,alt:"MboaLink"})}),a.jsxs("nav",{className:"mboaAdminNav","aria-label":"Administration MboaLink",children:[a.jsx("span",{children:"Menu principal"}),a.jsxs("a",{href:"#overview",className:"active",children:[a.jsx(hE,{size:18}),"Tableau de bord"]}),a.jsxs("a",{href:"#users",children:[a.jsx(ah,{size:18}),"Utilisateurs"]}),a.jsxs("a",{href:"#hotels",children:[a.jsx(af,{size:18}),"Hôtels"]}),a.jsxs("a",{href:"#devices",children:[a.jsx(zo,{size:18}),"Équipements réseau"]}),a.jsxs("a",{href:"#codes",children:[a.jsx(Fo,{size:18}),"Codes WiFi"]}),a.jsxs("a",{href:"#connections",children:[a.jsx(sh,{size:18}),"Connexions"]}),a.jsxs("a",{href:"#admin-notifications",children:[a.jsx(_x,{size:18}),"Notifications"]}),a.jsxs("a",{href:"#reports",children:[a.jsx(yx,{size:18}),"Rapports"]}),a.jsxs("a",{href:"#settings",children:[a.jsx(Ex,{size:18}),"Paramètres"]}),a.jsx("span",{children:"Système"}),a.jsxs("a",{href:"#roles",children:[a.jsx(pE,{size:18}),"Rôles & Permissions"]}),a.jsxs("a",{href:"/api-docs",target:"_blank",rel:"noreferrer",children:[a.jsx(ih,{size:18}),"API Swagger"]}),a.jsxs("a",{href:"#integrations",children:[a.jsx(kc,{size:18}),"Intégrations"]})]}),a.jsx("div",{className:"mboaAdminFooter",children:"MboaLink © 2025"})]}),a.jsxs("main",{className:"mboaAdminMain",children:[a.jsxs("header",{className:"mboaAdminTopbar",children:[a.jsxs("div",{children:[a.jsx("h1",{children:"Bonjour, Administrateur"}),a.jsx("p",{children:"Voici l'aperçu de votre plateforme MboaLink"})]}),a.jsxs("div",{className:"mboaAdminTopActions",children:[a.jsxs("div",{className:"mboaAdminSearch",children:[a.jsx(wE,{size:16}),a.jsx("input",{value:f,onChange:k=>p(k.target.value),placeholder:"Rechercher..."})]}),a.jsxs("button",{className:"mboaAdminIconButton",type:"button",children:[a.jsx(_x,{size:18}),a.jsx("span",{children:et.users})]}),a.jsxs("div",{className:"mboaAdminProfile",children:[a.jsx("div",{className:"mboaAdminAvatar",children:X0((e==null?void 0:e.fullName)||(e==null?void 0:e.email)||"Admin")}),a.jsxs("div",{children:[a.jsx("strong",{children:(e==null?void 0:e.fullName)||"Administrateur"}),a.jsx("small",{children:"Super Admin"})]}),a.jsx("button",{type:"button",onClick:kt,title:"Déconnexion",children:a.jsx(gE,{size:16})})]})]})]}),a.jsxs("section",{id:"overview",className:"mboaAdminStats",children:[a.jsxs("article",{children:[a.jsx(ah,{size:20}),a.jsx("strong",{children:et.users}),a.jsx("span",{children:"Utilisateurs"})]}),a.jsxs("article",{children:[a.jsx(rf,{size:20}),a.jsx("strong",{children:et.hotels}),a.jsx("span",{children:"Hôtels"})]}),a.jsxs("article",{children:[a.jsx(zo,{size:20}),a.jsx("strong",{children:et.devices}),a.jsx("span",{children:"Équipements réseau"})]}),a.jsxs("article",{children:[a.jsx(Fo,{size:20}),a.jsx("strong",{children:et.onlineDevices}),a.jsx("span",{children:"Équipements en ligne"})]})]}),a.jsxs("section",{id:"users",className:`mboaAdminSection ${ee==="user"?"hasForm":""}`,children:[a.jsxs("div",{className:"mboaAdminDataPanel",children:[a.jsx(Qs,{title:"Gestion des utilisateurs",subtitle:"Liste de tous les utilisateurs du système",actionLabel:"Nouvel utilisateur",onAction:hn}),a.jsxs("table",{className:"mboaAdminTable",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Nom complet"}),a.jsx("th",{children:"Email"}),a.jsx("th",{children:"Rôle"}),a.jsx("th",{children:"Statut"}),a.jsx("th",{children:"Hôtel"}),a.jsx("th",{children:"Actions"})]})}),a.jsx("tbody",{children:He.map(k=>{var K;return a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx(TA,{name:k.fullName})}),a.jsx("td",{children:k.email}),a.jsx("td",{children:a.jsx("span",{className:`mboaRoleBadge role-${k.role.toLowerCase()}`,children:Lc[k.role]})}),a.jsx("td",{children:a.jsx("span",{className:`mboaStatusBadge ${k.isActive?"active":"inactive"}`,children:k.isActive?"Actif":"Inactif"})}),a.jsx("td",{children:((K=k.hotel)==null?void 0:K.name)||"Plateforme"}),a.jsx("td",{children:a.jsx(Kh,{onEdit:()=>j(k),onDelete:()=>_e(k),deleteTitle:"Désactiver"})})]},k.id)})})]}),a.jsx(Yh,{count:He.length,label:"utilisateur"})]}),ee==="user"&&a.jsxs("form",{className:"mboaAdminFormPanel",onSubmit:Dt,children:[a.jsxs("div",{className:"mboaFormHeader",children:[a.jsx("h2",{children:C?"Modifier utilisateur":"Nouvel utilisateur"}),a.jsx("button",{type:"button",onClick:pt,children:"Fermer"})]}),a.jsxs("label",{children:["Nom complet",a.jsx("input",{value:w.fullName,onChange:k=>b(K=>({...K,fullName:k.target.value})),required:!0})]}),a.jsxs("label",{children:["Email",a.jsx("input",{type:"email",value:w.email,onChange:k=>b(K=>({...K,email:k.target.value})),required:!0})]}),a.jsxs("label",{children:["Rôle",a.jsx("select",{value:w.role,onChange:k=>Bt(k.target.value),children:Object.entries(Lc).map(([k,K])=>a.jsx("option",{value:k,children:K},k))})]}),Ic.includes(w.role)&&a.jsxs("label",{children:["Hôtel",a.jsxs("select",{value:w.hotelId,onChange:k=>b(K=>({...K,hotelId:k.target.value})),required:!0,children:[a.jsx("option",{value:"",children:"Sélectionner un hôtel"}),o.map(k=>a.jsx("option",{value:k.id,children:k.name},k.id))]})]}),a.jsxs("label",{children:["Mot de passe",a.jsx("input",{type:"password",value:w.password,onChange:k=>b(K=>({...K,password:k.target.value})),required:!C})]}),a.jsxs("button",{className:"mboaPrimaryButton",disabled:S,children:[a.jsx(rh,{size:16}),C?"Enregistrer l'utilisateur":"Créer l'utilisateur"]})]})]}),a.jsxs("section",{id:"hotels",className:`mboaAdminSection ${ee==="hotel"?"hasForm":""}`,children:[a.jsxs("div",{className:"mboaAdminDataPanel",children:[a.jsx(Qs,{title:"Gestion des hôtels",subtitle:"Liste de tous les hôtels enregistrés",actionLabel:"Nouvel hôtel",onAction:ne}),a.jsxs("table",{className:"mboaAdminTable",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Nom de l'hôtel"}),a.jsx("th",{children:"Ville"}),a.jsx("th",{children:"Adresse"}),a.jsx("th",{children:"Statut"}),a.jsx("th",{children:"Date création"}),a.jsx("th",{children:"Actions"})]})}),a.jsx("tbody",{children:Et.map(k=>a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("strong",{children:k.name})}),a.jsx("td",{children:k.city}),a.jsx("td",{children:k.address}),a.jsx("td",{children:a.jsx("span",{className:"mboaStatusBadge active",children:k.status==="ACTIVE"?"Actif":k.status})}),a.jsx("td",{children:Dc(k.createdAt)}),a.jsx("td",{children:a.jsx(Kh,{onEdit:()=>A(k),onDelete:()=>Ee(k)})})]},k.id))})]}),a.jsx(Yh,{count:Et.length,label:"hôtel"})]}),ee==="hotel"&&a.jsxs("form",{className:"mboaAdminFormPanel",onSubmit:Oe,children:[a.jsxs("div",{className:"mboaFormHeader",children:[a.jsx("h2",{children:Y?"Modifier hôtel":"Nouvel hôtel"}),a.jsx("button",{type:"button",onClick:pt,children:"Fermer"})]}),a.jsxs("label",{children:["Nom de l'hôtel",a.jsx("input",{value:N.name,onChange:k=>I(K=>({...K,name:k.target.value})),required:!0})]}),a.jsxs("div",{className:"mboaFormGrid",children:[a.jsxs("label",{children:["Ville",a.jsx("input",{value:N.city,onChange:k=>I(K=>({...K,city:k.target.value})),required:!0})]}),a.jsxs("label",{children:["Pays",a.jsx("input",{value:N.country,onChange:k=>I(K=>({...K,country:k.target.value})),required:!0})]})]}),a.jsxs("label",{children:["Adresse",a.jsx("input",{value:N.address,onChange:k=>I(K=>({...K,address:k.target.value})),required:!0})]}),a.jsxs("label",{children:["Description",a.jsx("textarea",{value:N.description,onChange:k=>I(K=>({...K,description:k.target.value}))})]}),a.jsxs("button",{className:"mboaPrimaryButton",disabled:S,children:[a.jsx(rh,{size:16}),Y?"Enregistrer l'hôtel":"Créer l'hôtel"]})]})]}),a.jsxs("section",{id:"devices",className:`mboaAdminSection ${ee==="device"?"hasForm":""}`,children:[a.jsxs("div",{className:"mboaAdminDataPanel",children:[a.jsxs("div",{className:"mboaPanelHeader",children:[a.jsxs("div",{children:[a.jsx("h2",{children:"Gestion des équipements réseau"}),a.jsx("p",{children:"Routeurs, switchs, points d'accès et contrôleurs par hôtel"})]}),a.jsxs("div",{className:"mboaPanelFilters",children:[a.jsxs("select",{value:v,onChange:k=>g(k.target.value),children:[a.jsx("option",{value:"all",children:"Tous les hôtels"}),o.map(k=>a.jsx("option",{value:k.id,children:k.name},k.id))]}),a.jsxs("select",{value:x,onChange:k=>y(k.target.value),children:[a.jsx("option",{value:"all",children:"Tous les statuts"}),a.jsx("option",{value:"ONLINE",children:"En ligne"}),a.jsx("option",{value:"OFFLINE",children:"Hors ligne"}),a.jsx("option",{value:"UNSTABLE",children:"Instable"})]}),a.jsx("button",{type:"button",onClick:zt,children:"Nouvel équipement"})]})]}),a.jsxs("table",{className:"mboaAdminTable",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Nom de l'équipement"}),a.jsx("th",{children:"Type"}),a.jsx("th",{children:"Hôtel"}),a.jsx("th",{children:"Adresse IP"}),a.jsx("th",{children:"Statut"}),a.jsx("th",{children:"Dernier heartbeat"}),a.jsx("th",{children:"Actions"})]})}),a.jsx("tbody",{children:it.map(k=>{var K,Me,$e;return a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("strong",{children:k.model||k.serialNumber||k.macAddress})}),a.jsx("td",{children:(K=k.model)!=null&&K.toLowerCase().includes("switch")?"Switch":(Me=k.model)!=null&&Me.toLowerCase().includes("router")?"Routeur":"Point d'accès"}),a.jsx("td",{children:(($e=k.hotel)==null?void 0:$e.name)||"-"}),a.jsx("td",{children:k.localIp||"-"}),a.jsx("td",{children:a.jsx("span",{className:`mboaStatusBadge ${k.status.toLowerCase()}`,children:k.status==="ONLINE"?"En ligne":k.status==="UNSTABLE"?"Instable":"Hors ligne"})}),a.jsx("td",{children:Dc(k.lastHeartbeatAt)}),a.jsx("td",{children:a.jsx(Kh,{onEdit:()=>oe(k),onDelete:()=>alert("Suppression équipement à valider côté backend.")})})]},k.id)})})]}),a.jsx(Yh,{count:it.length,label:"équipement"})]}),ee==="device"&&a.jsxs("form",{className:"mboaAdminFormPanel",onSubmit:Gt,children:[a.jsxs("div",{className:"mboaFormHeader",children:[a.jsx("h2",{children:Q?"Modifier équipement réseau":"Nouvel équipement réseau"}),a.jsx("button",{type:"button",onClick:pt,children:"Fermer"})]}),a.jsxs("label",{children:["Hôtel",a.jsxs("select",{value:L.hotelId,onChange:k=>B(K=>({...K,hotelId:k.target.value})),required:!0,children:[a.jsx("option",{value:"",children:"Sélectionner un hôtel"}),o.map(k=>a.jsx("option",{value:k.id,children:k.name},k.id))]})]}),a.jsxs("label",{children:["Nom / modèle",a.jsx("input",{value:L.model,onChange:k=>B(K=>({...K,model:k.target.value})),placeholder:"AP-RECEPTION-01"})]}),a.jsxs("label",{children:["Adresse MAC",a.jsx("input",{value:L.macAddress,onChange:k=>B(K=>({...K,macAddress:k.target.value})),disabled:!!Q,required:!0})]}),a.jsxs("label",{children:["Adresse IP",a.jsx("input",{value:L.localIp,onChange:k=>B(K=>({...K,localIp:k.target.value})),placeholder:"192.168.1.100"})]}),a.jsxs("div",{className:"mboaFormGrid",children:[a.jsxs("label",{children:["Zone",a.jsx("input",{value:L.zone,onChange:k=>B(K=>({...K,zone:k.target.value}))})]}),a.jsxs("label",{children:["Étage",a.jsx("input",{type:"number",value:L.floor,onChange:k=>B(K=>({...K,floor:k.target.value}))})]})]}),a.jsxs("button",{className:"mboaPrimaryButton",disabled:S,children:[a.jsx(rh,{size:16}),Q?"Enregistrer l'équipement":"Créer l'équipement"]})]})]}),a.jsxs("section",{id:"codes",className:"mboaAdminUtilitySection",children:[a.jsx(Qs,{title:"Codes WiFi",subtitle:"Pilotage global des accès clients par hôtel",actionLabel:"Voir les codes",onAction:()=>g("all")}),a.jsxs("div",{className:"mboaUtilityGrid",children:[a.jsx(Vn,{icon:a.jsx(uE,{size:18}),title:"Codes actifs",value:`${et.users}`,detail:"Les codes restent administrés depuis les hôtels concernés."}),a.jsx(Vn,{icon:a.jsx(af,{size:18}),title:"Filtrage hôtel",value:o.length?"Disponible":"À configurer",detail:"Le super admin conserve la vue globale et peut filtrer par hôtel."}),a.jsx(Vn,{icon:a.jsx(kc,{size:18}),title:"Contrôle",value:"Admin",detail:"Création, révocation et suivi seront consolidés ici."})]})]}),a.jsxs("section",{id:"connections",className:"mboaAdminUtilitySection",children:[a.jsx(Qs,{title:"Connexions",subtitle:"Suivi administrateur des clients connectés, hors ligne ou expirés",actionLabel:"Actualiser",onAction:Ce}),a.jsxs("div",{className:"mboaUtilityGrid",children:[a.jsx(Vn,{icon:a.jsx(sh,{size:18}),title:"Équipements en ligne",value:String(et.onlineDevices),detail:"Indicateur réseau disponible depuis les équipements remontés."}),a.jsx(Vn,{icon:a.jsx(Fo,{size:18}),title:"Hôtels couverts",value:String(et.hotels),detail:"Les connexions seront filtrables par hôtel dans cette section."}),a.jsx(Vn,{icon:a.jsx(yx,{size:18}),title:"Historique",value:"Prévu",detail:"Journal des sessions et expirations à consolider côté API."})]})]}),a.jsxs("section",{id:"admin-notifications",className:"mboaAdminUtilitySection",children:[a.jsxs("div",{className:"mboaNotificationHeader",children:[a.jsxs("div",{children:[a.jsx("h2",{children:"Notifications internes"}),a.jsx("p",{children:"Messages de service, maintenances, consignes et alertes internes MboaLink."})]}),a.jsxs("div",{className:"notificationCounter",children:[a.jsx("strong",{children:ht}),a.jsxs("span",{children:["non lue",ht!==1?"s":""]})]})]}),a.jsxs("div",{className:"notificationsGrid mboaAdminNotificationsGrid",children:[a.jsxs("form",{className:"notificationComposer",onSubmit:ge,children:[a.jsx("h2",{children:"Nouveau message"}),a.jsxs("label",{children:["Titre",a.jsx("input",{value:be.title,onChange:k=>Ne(K=>({...K,title:k.target.value})),required:!0,maxLength:140,placeholder:"Ex : Maintenance programmée"})]}),a.jsxs("label",{children:["Message",a.jsx("textarea",{value:be.message,onChange:k=>Ne(K=>({...K,message:k.target.value})),required:!0,maxLength:4e3,rows:6,placeholder:"Détaillez la consigne ou l'incident..."})]}),a.jsxs("div",{className:"notificationFormRow",children:[a.jsxs("label",{children:["Priorité",a.jsx("select",{value:be.priority,onChange:k=>Ne(K=>({...K,priority:k.target.value})),children:Object.entries(Wh).map(([k,K])=>a.jsx("option",{value:k,children:K},k))})]}),a.jsxs("label",{children:["Catégorie",a.jsx("input",{value:be.category,onChange:k=>Ne(K=>({...K,category:k.target.value})),placeholder:"Maintenance, incident..."})]})]}),a.jsxs("label",{children:["Destinataires",a.jsxs("select",{value:be.targetMode,onChange:k=>Ue(k.target.value),children:[a.jsx("option",{value:"ALL",children:"Tous les acteurs"}),a.jsx("option",{value:"HOTEL",children:"Acteurs d'un hôtel"}),a.jsx("option",{value:"ROLE",children:"Un rôle précis"}),a.jsx("option",{value:"USERS",children:"Utilisateurs précis"})]})]}),be.targetMode==="HOTEL"&&a.jsxs("label",{children:["Hôtel",a.jsxs("select",{value:be.hotelId,onChange:k=>Ne(K=>({...K,hotelId:k.target.value})),required:!0,children:[a.jsx("option",{value:"",children:"Sélectionner un hôtel"}),o.map(k=>a.jsx("option",{value:k.id,children:k.name},k.id))]})]}),be.targetMode==="ROLE"&&a.jsxs("label",{children:["Rôle",a.jsx("select",{value:be.role,onChange:k=>Ne(K=>({...K,role:k.target.value})),children:Object.entries(Pv).map(([k,K])=>a.jsx("option",{value:k,children:K},k))})]}),be.targetMode==="USERS"&&a.jsx("div",{className:"recipientPicker",children:se.map(k=>{var K;return a.jsxs("label",{className:"recipientOption",children:[a.jsx("input",{type:"checkbox",checked:be.userIds.includes(k.id),onChange:()=>Re(k.id)}),a.jsxs("span",{children:[a.jsx("strong",{children:k.fullName}),a.jsxs("small",{children:[Pv[k.role]||k.role,(K=k.hotel)!=null&&K.name?` - ${k.hotel.name}`:""]})]})]},k.id)})}),a.jsx("button",{className:"btn btnPrimary",disabled:fe,children:fe?"Envoi...":"Envoyer la notification"})]}),a.jsxs("section",{className:"notificationPanel",children:[a.jsxs("div",{className:"notificationTabs",children:[a.jsx("button",{type:"button",className:U==="inbox"?"active":"",onClick:()=>W("inbox"),children:"Réception"}),a.jsx("button",{type:"button",className:U==="sent"?"active":"",onClick:()=>W("sent"),children:"Envoyés"}),a.jsx("input",{value:q,onChange:k=>me(k.target.value),placeholder:"Rechercher..."})]}),E&&a.jsx("p",{className:"notificationEmpty",children:"Chargement..."}),!E&&U==="inbox"&&a.jsx("div",{className:"notificationList",children:_t.length===0?a.jsx("p",{className:"notificationEmpty",children:"Aucune notification reçue."}):_t.map(k=>{var Me,$e,rt,ft;const K=!(($e=(Me=k.recipients)==null?void 0:Me[0])!=null&&$e.readAt);return a.jsxs("article",{className:`notificationItem ${k.priority.toLowerCase()} ${K?"unread":""}`,children:[a.jsxs("div",{className:"notificationItemTop",children:[a.jsx("span",{className:`priorityBadge ${k.priority.toLowerCase()}`,children:Wh[k.priority]}),a.jsx("small",{children:Dc(k.createdAt)})]}),a.jsx("h3",{children:k.title}),a.jsx("p",{children:k.message}),a.jsxs("div",{className:"notificationMeta",children:[a.jsxs("span",{children:["De : ",((rt=k.sender)==null?void 0:rt.fullName)||"Système"]}),((ft=k.hotel)==null?void 0:ft.name)&&a.jsxs("span",{children:["Hôtel : ",k.hotel.name]}),k.category&&a.jsx("span",{children:k.category})]}),K&&a.jsx("button",{type:"button",className:"markReadBtn",onClick:()=>ye(k),children:"Marquer comme lu"})]},k.id)})}),!E&&U==="sent"&&a.jsx("div",{className:"notificationList",children:te.length===0?a.jsx("p",{className:"notificationEmpty",children:"Aucun message envoyé."}):te.map(k=>{var K;return a.jsxs("article",{className:`notificationItem ${k.priority.toLowerCase()}`,children:[a.jsxs("div",{className:"notificationItemTop",children:[a.jsx("span",{className:`priorityBadge ${k.priority.toLowerCase()}`,children:Wh[k.priority]}),a.jsx("small",{children:Dc(k.createdAt)})]}),a.jsx("h3",{children:k.title}),a.jsx("p",{children:k.message}),a.jsxs("div",{className:"notificationMeta",children:[a.jsxs("span",{children:[k.recipients.length," destinataire",k.recipients.length!==1?"s":""]}),((K=k.hotel)==null?void 0:K.name)&&a.jsxs("span",{children:["Hôtel : ",k.hotel.name]})]})]},k.id)})})]})]})]}),a.jsxs("section",{id:"reports",className:"mboaAdminUtilitySection",children:[a.jsx(Qs,{title:"Rapports",subtitle:"Vue de synthèse pour suivre l'exploitation MboaLink",actionLabel:"Exporter",onAction:ke}),a.jsxs("div",{className:"mboaUtilityGrid",children:[a.jsx(Vn,{icon:a.jsx(ah,{size:18}),title:"Utilisateurs",value:String(et.users),detail:"Volume total d'acteurs enregistrés."}),a.jsx(Vn,{icon:a.jsx(rf,{size:18}),title:"Hôtels",value:String(et.hotels),detail:"Hôtels actifs dans la plateforme."}),a.jsx(Vn,{icon:a.jsx(zo,{size:18}),title:"Réseau",value:String(et.devices),detail:"Équipements déclarés dans MboaLink."})]})]}),a.jsxs("section",{id:"settings",className:"mboaAdminUtilitySection",children:[a.jsx(Qs,{title:"Paramètres",subtitle:"Configuration globale de la plateforme",actionLabel:"Enregistrer",onAction:()=>alert("Paramètres globaux à connecter à une API dédiée.")}),a.jsxs("div",{className:"mboaUtilityGrid",children:[a.jsx(Vn,{icon:a.jsx(Ex,{size:18}),title:"Environnement",value:"Production",detail:"Paramètres applicatifs et valeurs de déploiement."}),a.jsx(Vn,{icon:a.jsx(ih,{size:18}),title:"Base de données",value:"PostgreSQL",detail:"Postgres stabilisé avec initialisation durable du mot de passe."}),a.jsx(Vn,{icon:a.jsx(kc,{size:18}),title:"Sécurité",value:"Rôles",detail:"Accès séparés entre admin, support, IT hôtel et réception."})]})]}),a.jsxs("section",{id:"roles",className:"mboaAdminUtilitySection",children:[a.jsx(Qs,{title:"Rôles & Permissions",subtitle:"Résumé des droits principaux",actionLabel:"Synchroniser",onAction:Ce}),a.jsxs("div",{className:"mboaPermissionList",children:[a.jsx(jc,{role:"ADMIN",description:"Super admin MboaLink, gestion complète depuis cette interface."}),a.jsx(jc,{role:"SUPPORT",description:"Vue opérationnelle sans Hotel Manager ni Device Manager."}),a.jsx(jc,{role:"HOTEL_IT",description:"Gestion technique limitée à son hôtel."}),a.jsx(jc,{role:"RECEPTIONIST",description:"Accès limité à Manual Login pour son hôtel."})]})]}),a.jsxs("section",{id:"integrations",className:"mboaAdminUtilitySection",children:[a.jsx(Qs,{title:"Intégrations",subtitle:"Services connectés à MboaLink",actionLabel:"Tester",onAction:()=>alert("Tests d’intégration à connecter aux endpoints de santé.")}),a.jsxs("div",{className:"mboaUtilityGrid",children:[a.jsx(Vn,{icon:a.jsx(ih,{size:18}),title:"Swagger API",value:"Disponible",detail:"Documentation backend accessible via /api-docs."}),a.jsx(Vn,{icon:a.jsx(Fo,{size:18}),title:"FreeRADIUS",value:"En cours",detail:"Intégration réseau à stabiliser avec l'équipe radius."}),a.jsx(Vn,{icon:a.jsx(sh,{size:18}),title:"Portail captif",value:"Actif",detail:"Authentification client par UUID, code WiFi, nom et chambre."})]})]}),E&&a.jsx("div",{className:"mboaLoading",children:"Chargement de l'administration..."})]})]})}function Qs({title:i,subtitle:e,actionLabel:t,onAction:r}){return a.jsxs("div",{className:"mboaPanelHeader",children:[a.jsxs("div",{children:[a.jsx("h2",{children:i}),a.jsx("p",{children:e})]}),a.jsx("button",{type:"button",onClick:r,children:t})]})}function Yh({count:i,label:e}){return a.jsxs("div",{className:"mboaPanelFooter",children:["Affichage de 1 à ",i," sur ",i," ",e,i>1?"s":""]})}function TA({name:i}){return a.jsxs("div",{className:"mboaUserCell",children:[a.jsx("span",{children:X0(i)}),a.jsx("strong",{children:i})]})}function Kh({onEdit:i,onDelete:e,deleteTitle:t="Supprimer"}){return a.jsxs("div",{className:"mboaRowActions",children:[a.jsx("button",{type:"button",onClick:i,title:"Modifier",children:a.jsx(_E,{size:15})}),a.jsx("button",{type:"button",onClick:e,title:t,className:"danger",children:a.jsx(PE,{size:15})})]})}function Vn({icon:i,title:e,value:t,detail:r}){return a.jsxs("article",{className:"mboaUtilityCard",children:[a.jsx("span",{children:i}),a.jsx("strong",{children:t}),a.jsx("h3",{children:e}),a.jsx("p",{children:r})]})}function jc({role:i,description:e}){return a.jsxs("div",{className:"mboaPermissionRow",children:[a.jsx("strong",{children:i}),a.jsx("span",{children:e})]})}const Dv={ADMIN:"Admins MboaLink",SUPPORT:"Support IT MboaLink",HOTEL_IT:"IT hôtel",RECEPTIONIST:"Réceptionnistes"},Zh={INFO:"Information",WARNING:"Attention",URGENT:"Urgent"},Jh={title:"",message:"",priority:"INFO",category:"",targetMode:"ALL",hotelId:"",role:"RECEPTIONIST",userIds:[]};function jv(i){return new Date(i).toLocaleString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}function CA(){const i=Wn.getStoredUser(),e=(i==null?void 0:i.role)==="ADMIN"||(i==null?void 0:i.role)==="SUPPORT"||(i==null?void 0:i.role)==="HOTEL_IT",t=(i==null?void 0:i.role)==="HOTEL_IT",[r,o]=D.useState("inbox"),[c,u]=D.useState([]),[h,f]=D.useState([]),[p,v]=D.useState([]),[g,x]=D.useState([]),[y,E]=D.useState(Jh),[T,S]=D.useState(!0),[_,w]=D.useState(!1),[b,N]=D.useState(""),I=async()=>{try{const G=[We.listNotificationsInbox(),We.listNotificationRecipients()];e&&G.push(We.listSentNotifications()),t||G.push(We.listHotels());const[ee,F,U,W]=await Promise.all(G);u(ee),v(F),e&&f(U||[]),t?(x([]),E($=>({...$,targetMode:"HOTEL"}))):x((e?W:U)||[])}catch(G){alert(G.message||"Chargement des notifications impossible")}finally{S(!1)}};D.useEffect(()=>{I()},[]);const L=D.useMemo(()=>{const G=b.trim().toLowerCase();return G?c.filter(ee=>{var F,U;return`${ee.title} ${ee.message} ${((F=ee.sender)==null?void 0:F.fullName)||""} ${((U=ee.hotel)==null?void 0:U.name)||""}`.toLowerCase().includes(G)}):c},[c,b]),B=D.useMemo(()=>c.filter(G=>{var ee,F;return!((F=(ee=G.recipients)==null?void 0:ee[0])!=null&&F.readAt)}).length,[c]),C=G=>{E(ee=>({...ee,userIds:ee.userIds.includes(G)?ee.userIds.filter(F=>F!==G):[...ee.userIds,G]}))},O=G=>{E(ee=>({...ee,targetMode:G,userIds:[]}))},Y=async G=>{if(G.preventDefault(),!!e){if(y.targetMode==="HOTEL"&&!t&&!y.hotelId){alert("Sélectionnez un hôtel.");return}if(y.targetMode==="USERS"&&y.userIds.length===0){alert("Sélectionnez au moins un destinataire.");return}try{w(!0),await We.createNotification({title:y.title,message:y.message,priority:y.priority,category:y.category,targetMode:y.targetMode,hotelId:y.hotelId,role:y.role,userIds:y.userIds}),E(t?{...Jh,targetMode:"HOTEL"}:Jh),await I(),o("sent")}catch(ee){alert(ee.message||"Envoi impossible")}finally{w(!1)}}},V=async G=>{var ee,F;if(!((F=(ee=G.recipients)==null?void 0:ee[0])!=null&&F.readAt))try{await We.markNotificationRead(G.id),await I()}catch(U){alert(U.message||"Action impossible")}},Q=h;return a.jsx(Ei,{activePage:"NOTIFICATIONS",activeSubPage:"Messages",children:a.jsxs("div",{className:"notificationsPage",children:[a.jsxs("div",{className:"pageHeader",children:[a.jsxs("div",{children:[a.jsx("h1",{className:"pageTitle",children:"Notifications internes"}),a.jsx("p",{className:"pageSubtitle",children:"Messages de service, maintenances, consignes et alertes internes MboaLink."})]}),a.jsxs("div",{className:"notificationCounter",children:[a.jsx("strong",{children:B}),a.jsxs("span",{children:["non lue",B!==1?"s":""]})]})]}),a.jsxs("div",{className:"notificationsGrid",children:[e&&a.jsxs("form",{className:"notificationComposer",onSubmit:Y,children:[a.jsx("h2",{children:"Nouveau message"}),a.jsxs("label",{children:["Titre",a.jsx("input",{value:y.title,onChange:G=>E(ee=>({...ee,title:G.target.value})),required:!0,maxLength:140,placeholder:"Ex : Maintenance programmée"})]}),a.jsxs("label",{children:["Message",a.jsx("textarea",{value:y.message,onChange:G=>E(ee=>({...ee,message:G.target.value})),required:!0,maxLength:4e3,rows:6,placeholder:"Détaillez la consigne ou l'incident..."})]}),a.jsxs("div",{className:"notificationFormRow",children:[a.jsxs("label",{children:["Priorité",a.jsx("select",{value:y.priority,onChange:G=>E(ee=>({...ee,priority:G.target.value})),children:Object.entries(Zh).map(([G,ee])=>a.jsx("option",{value:G,children:ee},G))})]}),a.jsxs("label",{children:["Catégorie",a.jsx("input",{value:y.category,onChange:G=>E(ee=>({...ee,category:G.target.value})),placeholder:"Maintenance, incident..."})]})]}),a.jsxs("label",{children:["Destinataires",a.jsxs("select",{value:y.targetMode,onChange:G=>O(G.target.value),disabled:t,children:[!t&&a.jsx("option",{value:"ALL",children:"Tous les acteurs"}),a.jsx("option",{value:"HOTEL",children:t?"Réceptionnistes de mon hôtel":"Acteurs d’un hôtel"}),!t&&a.jsx("option",{value:"ROLE",children:"Un rôle précis"}),a.jsx("option",{value:"USERS",children:"Utilisateurs précis"})]})]}),y.targetMode==="HOTEL"&&!t&&a.jsxs("label",{children:["Hôtel",a.jsxs("select",{value:y.hotelId,onChange:G=>E(ee=>({...ee,hotelId:G.target.value})),required:!0,children:[a.jsx("option",{value:"",children:"Sélectionner un hôtel"}),g.map(G=>a.jsx("option",{value:G.id,children:G.name},G.id))]})]}),y.targetMode==="ROLE"&&a.jsxs("label",{children:["Rôle",a.jsx("select",{value:y.role,onChange:G=>E(ee=>({...ee,role:G.target.value})),children:Object.entries(Dv).map(([G,ee])=>a.jsx("option",{value:G,children:ee},G))})]}),y.targetMode==="USERS"&&a.jsx("div",{className:"recipientPicker",children:p.map(G=>{var ee;return a.jsxs("label",{className:"recipientOption",children:[a.jsx("input",{type:"checkbox",checked:y.userIds.includes(G.id),onChange:()=>C(G.id)}),a.jsxs("span",{children:[a.jsx("strong",{children:G.fullName}),a.jsxs("small",{children:[Dv[G.role]||G.role,(ee=G.hotel)!=null&&ee.name?` - ${G.hotel.name}`:""]})]})]},G.id)})}),a.jsx("button",{className:"btn btnPrimary",disabled:_,children:_?"Envoi...":"Envoyer la notification"})]}),a.jsxs("section",{className:"notificationPanel",children:[a.jsxs("div",{className:"notificationTabs",children:[a.jsx("button",{type:"button",className:r==="inbox"?"active":"",onClick:()=>o("inbox"),children:"Réception"}),e&&a.jsx("button",{type:"button",className:r==="sent"?"active":"",onClick:()=>o("sent"),children:"Envoyés"}),a.jsx("input",{value:b,onChange:G=>N(G.target.value),placeholder:"Rechercher..."})]}),T&&a.jsx("p",{className:"notificationEmpty",children:"Chargement..."}),!T&&r==="inbox"&&a.jsx("div",{className:"notificationList",children:L.length===0?a.jsx("p",{className:"notificationEmpty",children:"Aucune notification reçue."}):L.map(G=>{var F,U,W,$;const ee=!((U=(F=G.recipients)==null?void 0:F[0])!=null&&U.readAt);return a.jsxs("article",{className:`notificationItem ${G.priority.toLowerCase()} ${ee?"unread":""}`,children:[a.jsxs("div",{className:"notificationItemTop",children:[a.jsx("span",{className:`priorityBadge ${G.priority.toLowerCase()}`,children:Zh[G.priority]}),a.jsx("small",{children:jv(G.createdAt)})]}),a.jsx("h3",{children:G.title}),a.jsx("p",{children:G.message}),a.jsxs("div",{className:"notificationMeta",children:[a.jsxs("span",{children:["De : ",((W=G.sender)==null?void 0:W.fullName)||"Système"]}),(($=G.hotel)==null?void 0:$.name)&&a.jsxs("span",{children:["Hôtel : ",G.hotel.name]}),G.category&&a.jsx("span",{children:G.category})]}),ee&&a.jsx("button",{type:"button",className:"markReadBtn",onClick:()=>V(G),children:"Marquer comme lu"})]},G.id)})}),!T&&r==="sent"&&e&&a.jsx("div",{className:"notificationList",children:Q.length===0?a.jsx("p",{className:"notificationEmpty",children:"Aucun message envoyé."}):Q.map(G=>{var ee;return a.jsxs("article",{className:`notificationItem ${G.priority.toLowerCase()}`,children:[a.jsxs("div",{className:"notificationItemTop",children:[a.jsx("span",{className:`priorityBadge ${G.priority.toLowerCase()}`,children:Zh[G.priority]}),a.jsx("small",{children:jv(G.createdAt)})]}),a.jsx("h3",{children:G.title}),a.jsx("p",{children:G.message}),a.jsxs("div",{className:"notificationMeta",children:[a.jsxs("span",{children:[G.recipients.length," destinataire",G.recipients.length!==1?"s":""]}),((ee=G.hotel)==null?void 0:ee.name)&&a.jsxs("span",{children:["Hôtel : ",G.hotel.name]})]})]},G.id)})})]})]})]})})}function NA(i){return i==="RECEPTIONIST"?at.public.manualLogin:i==="ADMIN"?at.public.adminMboa:i==="SUPPORT"||i==="HOTEL_IT"?at.public.dashboard:at.public.home}function jn({children:i,allowedRoles:e}){const t=dp(),r=Oi();if(!t){const o=`${r.pathname}${r.search}`;return a.jsx(Bo,{to:`${at.public.login}?redirect=${encodeURIComponent(o)}`,replace:!0})}return e!=null&&e.length&&!e.includes(t.role)?a.jsx(Bo,{to:NA(t.role),replace:!0}):i}const AA=()=>a.jsx(sM,{children:a.jsxs(DS,{children:[a.jsx(ln,{path:at.public.login,element:a.jsx(vM,{})}),a.jsx(ln,{path:at.public.mfa,element:a.jsx(_M,{})}),a.jsx(ln,{path:at.public.home,element:a.jsx(jn,{children:a.jsx(AM,{})})}),a.jsx(ln,{path:at.public.dashboard,element:a.jsx(jn,{allowedRoles:["SUPPORT","HOTEL_IT"],children:a.jsx(OE,{})})}),a.jsx(ln,{path:at.public.networkMap,element:a.jsx(jn,{allowedRoles:["SUPPORT","HOTEL_IT"],children:a.jsx(MA,{})})}),a.jsx(ln,{path:at.public.devices,element:a.jsx(jn,{allowedRoles:["HOTEL_IT"],children:a.jsx(bA,{})})}),a.jsx(ln,{path:at.public.wifiCode,element:a.jsx(jn,{allowedRoles:["SUPPORT","HOTEL_IT"],children:a.jsx(n0,{})})}),a.jsx(ln,{path:at.public.loginByAddress,element:a.jsx(jn,{allowedRoles:["SUPPORT"],children:a.jsx(RM,{})})}),a.jsx(ln,{path:at.public.statusLogins,element:a.jsx(jn,{allowedRoles:["SUPPORT","HOTEL_IT"],children:a.jsx(PM,{})})}),a.jsx(ln,{path:at.public.manualLogin,element:a.jsx(jn,{allowedRoles:["SUPPORT","RECEPTIONIST"],children:a.jsx(DM,{})})}),a.jsx(ln,{path:at.public.websitesManager,element:a.jsx(jn,{allowedRoles:["SUPPORT","HOTEL_IT"],children:a.jsx(jM,{})})}),a.jsx(ln,{path:at.public.configCode,element:a.jsx(jn,{allowedRoles:["SUPPORT"],children:a.jsx(UM,{})})}),a.jsx(ln,{path:at.public.hotels,element:a.jsx(jn,{allowedRoles:["ADMIN"],children:a.jsx(Bo,{to:at.public.adminMboa,replace:!0})})}),a.jsx(ln,{path:at.public.rooms,element:a.jsx(jn,{allowedRoles:["HOTEL_IT"],children:a.jsx(zM,{})})}),a.jsx(ln,{path:at.public.configWifi,element:a.jsx(jn,{allowedRoles:["HOTEL_IT"],children:a.jsx(XM,{})})}),a.jsx(ln,{path:at.public.adminMboa,element:a.jsx(jn,{allowedRoles:["ADMIN"],children:a.jsx(Iv,{})})}),a.jsx(ln,{path:at.public.users,element:a.jsx(jn,{allowedRoles:["ADMIN"],children:a.jsx(Iv,{})})}),a.jsx(ln,{path:at.public.notifications,element:a.jsx(jn,{allowedRoles:["SUPPORT","HOTEL_IT","RECEPTIONIST"],children:a.jsx(CA,{})})}),a.jsx(ln,{path:"/",element:a.jsx(Bo,{to:at.public.login,replace:!0})}),a.jsx(ln,{path:"*",element:a.jsx(Bo,{to:at.public.login,replace:!0})})]})});function RA(){return a.jsx(AA,{})}Fy.createRoot(document.getElementById("root")).render(a.jsx(Ry.StrictMode,{children:a.jsx(RA,{})}));
