var wy=Object.defineProperty;var Ty=(i,e,t)=>e in i?wy(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Hd=(i,e,t)=>Ty(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function t(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(a){if(a.ep)return;a.ep=!0;const c=t(a);fetch(a.href,c)}})();function F0(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Gd={exports:{}},Eo={},Vd={exports:{}},Tt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qg;function Cy(){if(Qg)return Tt;Qg=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.iterator;function g(B){return B===null||typeof B!="object"?null:(B=x&&B[x]||B["@@iterator"],typeof B=="function"?B:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,A={};function y(B,re,Oe){this.props=B,this.context=re,this.refs=A,this.updater=Oe||M}y.prototype.isReactComponent={},y.prototype.setState=function(B,re){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,re,"setState")},y.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function S(){}S.prototype=y.prototype;function b(B,re,Oe){this.props=B,this.context=re,this.refs=A,this.updater=Oe||M}var w=b.prototype=new S;w.constructor=b,E(w,y.prototype),w.isPureReactComponent=!0;var N=Array.isArray,I=Object.prototype.hasOwnProperty,L={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function T(B,re,Oe){var Te,Re={},W=null,me=null;if(re!=null)for(Te in re.ref!==void 0&&(me=re.ref),re.key!==void 0&&(W=""+re.key),re)I.call(re,Te)&&!k.hasOwnProperty(Te)&&(Re[Te]=re[Te]);var fe=arguments.length-2;if(fe===1)Re.children=Oe;else if(1<fe){for(var xe=Array(fe),Ce=0;Ce<fe;Ce++)xe[Ce]=arguments[Ce+2];Re.children=xe}if(B&&B.defaultProps)for(Te in fe=B.defaultProps,fe)Re[Te]===void 0&&(Re[Te]=fe[Te]);return{$$typeof:i,type:B,key:W,ref:me,props:Re,_owner:L.current}}function U(B,re){return{$$typeof:i,type:B.type,key:re,ref:B.ref,props:B.props,_owner:B._owner}}function Y(B){return typeof B=="object"&&B!==null&&B.$$typeof===i}function G(B){var re={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(Oe){return re[Oe]})}var J=/\/+/g;function H(B,re){return typeof B=="object"&&B!==null&&B.key!=null?G(""+B.key):re.toString(36)}function Q(B,re,Oe,Te,Re){var W=typeof B;(W==="undefined"||W==="boolean")&&(B=null);var me=!1;if(B===null)me=!0;else switch(W){case"string":case"number":me=!0;break;case"object":switch(B.$$typeof){case i:case e:me=!0}}if(me)return me=B,Re=Re(me),B=Te===""?"."+H(me,0):Te,N(Re)?(Oe="",B!=null&&(Oe=B.replace(J,"$&/")+"/"),Q(Re,re,Oe,"",function(Ce){return Ce})):Re!=null&&(Y(Re)&&(Re=U(Re,Oe+(!Re.key||me&&me.key===Re.key?"":(""+Re.key).replace(J,"$&/")+"/")+B)),re.push(Re)),1;if(me=0,Te=Te===""?".":Te+":",N(B))for(var fe=0;fe<B.length;fe++){W=B[fe];var xe=Te+H(W,fe);me+=Q(W,re,Oe,xe,Re)}else if(xe=g(B),typeof xe=="function")for(B=xe.call(B),fe=0;!(W=B.next()).done;)W=W.value,xe=Te+H(W,fe++),me+=Q(W,re,Oe,xe,Re);else if(W==="object")throw re=String(B),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return me}function X(B,re,Oe){if(B==null)return B;var Te=[],Re=0;return Q(B,Te,"","",function(W){return re.call(Oe,W,Re++)}),Te}function O(B){if(B._status===-1){var re=B._result;re=re(),re.then(function(Oe){(B._status===0||B._status===-1)&&(B._status=1,B._result=Oe)},function(Oe){(B._status===0||B._status===-1)&&(B._status=2,B._result=Oe)}),B._status===-1&&(B._status=0,B._result=re)}if(B._status===1)return B._result.default;throw B._result}var V={current:null},$={transition:null},ue={ReactCurrentDispatcher:V,ReactCurrentBatchConfig:$,ReactCurrentOwner:L};function se(){throw Error("act(...) is not supported in production builds of React.")}return Tt.Children={map:X,forEach:function(B,re,Oe){X(B,function(){re.apply(this,arguments)},Oe)},count:function(B){var re=0;return X(B,function(){re++}),re},toArray:function(B){return X(B,function(re){return re})||[]},only:function(B){if(!Y(B))throw Error("React.Children.only expected to receive a single React element child.");return B}},Tt.Component=y,Tt.Fragment=t,Tt.Profiler=a,Tt.PureComponent=b,Tt.StrictMode=s,Tt.Suspense=f,Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,Tt.act=se,Tt.cloneElement=function(B,re,Oe){if(B==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+B+".");var Te=E({},B.props),Re=B.key,W=B.ref,me=B._owner;if(re!=null){if(re.ref!==void 0&&(W=re.ref,me=L.current),re.key!==void 0&&(Re=""+re.key),B.type&&B.type.defaultProps)var fe=B.type.defaultProps;for(xe in re)I.call(re,xe)&&!k.hasOwnProperty(xe)&&(Te[xe]=re[xe]===void 0&&fe!==void 0?fe[xe]:re[xe])}var xe=arguments.length-2;if(xe===1)Te.children=Oe;else if(1<xe){fe=Array(xe);for(var Ce=0;Ce<xe;Ce++)fe[Ce]=arguments[Ce+2];Te.children=fe}return{$$typeof:i,type:B.type,key:Re,ref:W,props:Te,_owner:me}},Tt.createContext=function(B){return B={$$typeof:d,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},B.Provider={$$typeof:c,_context:B},B.Consumer=B},Tt.createElement=T,Tt.createFactory=function(B){var re=T.bind(null,B);return re.type=B,re},Tt.createRef=function(){return{current:null}},Tt.forwardRef=function(B){return{$$typeof:h,render:B}},Tt.isValidElement=Y,Tt.lazy=function(B){return{$$typeof:v,_payload:{_status:-1,_result:B},_init:O}},Tt.memo=function(B,re){return{$$typeof:m,type:B,compare:re===void 0?null:re}},Tt.startTransition=function(B){var re=$.transition;$.transition={};try{B()}finally{$.transition=re}},Tt.unstable_act=se,Tt.useCallback=function(B,re){return V.current.useCallback(B,re)},Tt.useContext=function(B){return V.current.useContext(B)},Tt.useDebugValue=function(){},Tt.useDeferredValue=function(B){return V.current.useDeferredValue(B)},Tt.useEffect=function(B,re){return V.current.useEffect(B,re)},Tt.useId=function(){return V.current.useId()},Tt.useImperativeHandle=function(B,re,Oe){return V.current.useImperativeHandle(B,re,Oe)},Tt.useInsertionEffect=function(B,re){return V.current.useInsertionEffect(B,re)},Tt.useLayoutEffect=function(B,re){return V.current.useLayoutEffect(B,re)},Tt.useMemo=function(B,re){return V.current.useMemo(B,re)},Tt.useReducer=function(B,re,Oe){return V.current.useReducer(B,re,Oe)},Tt.useRef=function(B){return V.current.useRef(B)},Tt.useState=function(B){return V.current.useState(B)},Tt.useSyncExternalStore=function(B,re,Oe){return V.current.useSyncExternalStore(B,re,Oe)},Tt.useTransition=function(){return V.current.useTransition()},Tt.version="18.3.1",Tt}var ex;function ep(){return ex||(ex=1,Vd.exports=Cy()),Vd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tx;function Ay(){if(tx)return Eo;tx=1;var i=ep(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(h,f,m){var v,x={},g=null,M=null;m!==void 0&&(g=""+m),f.key!==void 0&&(g=""+f.key),f.ref!==void 0&&(M=f.ref);for(v in f)s.call(f,v)&&!c.hasOwnProperty(v)&&(x[v]=f[v]);if(h&&h.defaultProps)for(v in f=h.defaultProps,f)x[v]===void 0&&(x[v]=f[v]);return{$$typeof:e,type:h,key:g,ref:M,props:x,_owner:a.current}}return Eo.Fragment=t,Eo.jsx=d,Eo.jsxs=d,Eo}var nx;function Ry(){return nx||(nx=1,Gd.exports=Ay()),Gd.exports}var o=Ry(),j=ep();const Ny=F0(j);var ec={},Wd={exports:{}},Jn={},Xd={exports:{}},$d={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ix;function Py(){return ix||(ix=1,(function(i){function e($,ue){var se=$.length;$.push(ue);e:for(;0<se;){var B=se-1>>>1,re=$[B];if(0<a(re,ue))$[B]=ue,$[se]=re,se=B;else break e}}function t($){return $.length===0?null:$[0]}function s($){if($.length===0)return null;var ue=$[0],se=$.pop();if(se!==ue){$[0]=se;e:for(var B=0,re=$.length,Oe=re>>>1;B<Oe;){var Te=2*(B+1)-1,Re=$[Te],W=Te+1,me=$[W];if(0>a(Re,se))W<re&&0>a(me,Re)?($[B]=me,$[W]=se,B=W):($[B]=Re,$[Te]=se,B=Te);else if(W<re&&0>a(me,se))$[B]=me,$[W]=se,B=W;else break e}}return ue}function a($,ue){var se=$.sortIndex-ue.sortIndex;return se!==0?se:$.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;i.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();i.unstable_now=function(){return d.now()-h}}var f=[],m=[],v=1,x=null,g=3,M=!1,E=!1,A=!1,y=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w($){for(var ue=t(m);ue!==null;){if(ue.callback===null)s(m);else if(ue.startTime<=$)s(m),ue.sortIndex=ue.expirationTime,e(f,ue);else break;ue=t(m)}}function N($){if(A=!1,w($),!E)if(t(f)!==null)E=!0,O(I);else{var ue=t(m);ue!==null&&V(N,ue.startTime-$)}}function I($,ue){E=!1,A&&(A=!1,S(T),T=-1),M=!0;var se=g;try{for(w(ue),x=t(f);x!==null&&(!(x.expirationTime>ue)||$&&!G());){var B=x.callback;if(typeof B=="function"){x.callback=null,g=x.priorityLevel;var re=B(x.expirationTime<=ue);ue=i.unstable_now(),typeof re=="function"?x.callback=re:x===t(f)&&s(f),w(ue)}else s(f);x=t(f)}if(x!==null)var Oe=!0;else{var Te=t(m);Te!==null&&V(N,Te.startTime-ue),Oe=!1}return Oe}finally{x=null,g=se,M=!1}}var L=!1,k=null,T=-1,U=5,Y=-1;function G(){return!(i.unstable_now()-Y<U)}function J(){if(k!==null){var $=i.unstable_now();Y=$;var ue=!0;try{ue=k(!0,$)}finally{ue?H():(L=!1,k=null)}}else L=!1}var H;if(typeof b=="function")H=function(){b(J)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,X=Q.port2;Q.port1.onmessage=J,H=function(){X.postMessage(null)}}else H=function(){y(J,0)};function O($){k=$,L||(L=!0,H())}function V($,ue){T=y(function(){$(i.unstable_now())},ue)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function($){$.callback=null},i.unstable_continueExecution=function(){E||M||(E=!0,O(I))},i.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<$?Math.floor(1e3/$):5},i.unstable_getCurrentPriorityLevel=function(){return g},i.unstable_getFirstCallbackNode=function(){return t(f)},i.unstable_next=function($){switch(g){case 1:case 2:case 3:var ue=3;break;default:ue=g}var se=g;g=ue;try{return $()}finally{g=se}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function($,ue){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var se=g;g=$;try{return ue()}finally{g=se}},i.unstable_scheduleCallback=function($,ue,se){var B=i.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?B+se:B):se=B,$){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=se+re,$={id:v++,callback:ue,priorityLevel:$,startTime:se,expirationTime:re,sortIndex:-1},se>B?($.sortIndex=se,e(m,$),t(f)===null&&$===t(m)&&(A?(S(T),T=-1):A=!0,V(N,se-B))):($.sortIndex=re,e(f,$),E||M||(E=!0,O(I))),$},i.unstable_shouldYield=G,i.unstable_wrapCallback=function($){var ue=g;return function(){var se=g;g=ue;try{return $.apply(this,arguments)}finally{g=se}}}})($d)),$d}var rx;function Ly(){return rx||(rx=1,Xd.exports=Py()),Xd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sx;function Iy(){if(sx)return Jn;sx=1;var i=ep(),e=Ly();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function c(n,r){d(n,r),d(n+"Capture",r)}function d(n,r){for(a[n]=r,n=0;n<r.length;n++)s.add(r[n])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},x={};function g(n){return f.call(x,n)?!0:f.call(v,n)?!1:m.test(n)?x[n]=!0:(v[n]=!0,!1)}function M(n,r,l,u){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return u?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,r,l,u){if(r===null||typeof r>"u"||M(n,r,l,u))return!0;if(u)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function A(n,r,l,u,p,_,R){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=u,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=_,this.removeEmptyString=R}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new A(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];y[r]=new A(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new A(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new A(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new A(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new A(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new A(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new A(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new A(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function b(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(S,b);y[r]=new A(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(S,b);y[r]=new A(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(S,b);y[r]=new A(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new A(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new A(n,1,!1,n.toLowerCase(),null,!0,!0)});function w(n,r,l,u){var p=y.hasOwnProperty(r)?y[r]:null;(p!==null?p.type!==0:u||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(E(r,l,p,u)&&(l=null),u||p===null?g(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):p.mustUseProperty?n[p.propertyName]=l===null?p.type===3?!1:"":l:(r=p.attributeName,u=p.attributeNamespace,l===null?n.removeAttribute(r):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,u?n.setAttributeNS(u,r,l):n.setAttribute(r,l))))}var N=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),L=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),Y=Symbol.for("react.provider"),G=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),Q=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),O=Symbol.for("react.lazy"),V=Symbol.for("react.offscreen"),$=Symbol.iterator;function ue(n){return n===null||typeof n!="object"?null:(n=$&&n[$]||n["@@iterator"],typeof n=="function"?n:null)}var se=Object.assign,B;function re(n){if(B===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);B=r&&r[1]||""}return`
`+B+n}var Oe=!1;function Te(n,r){if(!n||Oe)return"";Oe=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(pe){var u=pe}Reflect.construct(n,[],r)}else{try{r.call()}catch(pe){u=pe}n.call(r.prototype)}else{try{throw Error()}catch(pe){u=pe}n()}}catch(pe){if(pe&&u&&typeof pe.stack=="string"){for(var p=pe.stack.split(`
`),_=u.stack.split(`
`),R=p.length-1,z=_.length-1;1<=R&&0<=z&&p[R]!==_[z];)z--;for(;1<=R&&0<=z;R--,z--)if(p[R]!==_[z]){if(R!==1||z!==1)do if(R--,z--,0>z||p[R]!==_[z]){var K=`
`+p[R].replace(" at new "," at ");return n.displayName&&K.includes("<anonymous>")&&(K=K.replace("<anonymous>",n.displayName)),K}while(1<=R&&0<=z);break}}}finally{Oe=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?re(n):""}function Re(n){switch(n.tag){case 5:return re(n.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return n=Te(n.type,!1),n;case 11:return n=Te(n.type.render,!1),n;case 1:return n=Te(n.type,!0),n;default:return""}}function W(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case L:return"Portal";case U:return"Profiler";case T:return"StrictMode";case H:return"Suspense";case Q:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case G:return(n.displayName||"Context")+".Consumer";case Y:return(n._context.displayName||"Context")+".Provider";case J:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case X:return r=n.displayName||null,r!==null?r:W(n.type)||"Memo";case O:r=n._payload,n=n._init;try{return W(n(r))}catch{}}return null}function me(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return W(r);case 8:return r===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function fe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function xe(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ce(n){var r=xe(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),u=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,_=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return p.call(this)},set:function(R){u=""+R,_.call(this,R)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return u},setValue:function(R){u=""+R},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function He(n){n._valueTracker||(n._valueTracker=Ce(n))}function Et(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),u="";return n&&(u=xe(n)?n.checked?"true":"false":n.value),n=u,n!==l?(r.setValue(n),!0):!1}function it(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Qe(n,r){var l=r.checked;return se({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function _t(n,r){var l=r.defaultValue==null?"":r.defaultValue,u=r.checked!=null?r.checked:r.defaultChecked;l=fe(r.value!=null?r.value:l),n._wrapperState={initialChecked:u,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function ht(n,r){r=r.checked,r!=null&&w(n,"checked",r,!1)}function jt(n,r){ht(n,r);var l=fe(r.value),u=r.type;if(l!=null)u==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?hn(n,r.type,l):r.hasOwnProperty("defaultValue")&&hn(n,r.type,fe(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Bt(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var u=r.type;if(!(u!=="submit"&&u!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function hn(n,r,l){(r!=="number"||it(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var ee=Array.isArray;function zt(n,r,l,u){if(n=n.options,r){r={};for(var p=0;p<l.length;p++)r["$"+l[p]]=!0;for(l=0;l<n.length;l++)p=r.hasOwnProperty("$"+n[l].value),n[l].selected!==p&&(n[l].selected=p),p&&u&&(n[l].defaultSelected=!0)}else{for(l=""+fe(l),r=null,p=0;p<n.length;p++){if(n[p].value===l){n[p].selected=!0,u&&(n[p].defaultSelected=!0);return}r!==null||n[p].disabled||(r=n[p])}r!==null&&(r.selected=!0)}}function pt(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Dt(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(ee(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:fe(l)}}function ke(n,r){var l=fe(r.value),u=fe(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),u!=null&&(n.defaultValue=""+u)}function Vt(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function D(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function C(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?D(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ae,_e=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,u,p){MSApp.execUnsafeLocalFunction(function(){return n(r,l,u,p)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(ae=ae||document.createElement("div"),ae.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=ae.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Ee(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var Ne={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ue=["Webkit","ms","Moz","O"];Object.keys(Ne).forEach(function(n){Ue.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Ne[r]=Ne[n]})});function ge(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||Ne.hasOwnProperty(n)&&Ne[n]?(""+r).trim():r+"px"}function ye(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var u=l.indexOf("--")===0,p=ge(l,r[l],u);l==="float"&&(l="cssFloat"),u?n.setProperty(l,p):n[l]=p}}var je=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function F(n,r){if(r){if(je[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function q(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Me=null;function $e(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var at=null,ft=null,Z=null;function Pe(n){if(n=oo(n)){if(typeof at!="function")throw Error(t(280));var r=n.stateNode;r&&(r=ml(r),at(n.stateNode,n.type,r))}}function ve(n){ft?Z?Z.push(n):Z=[n]:ft=n}function ze(){if(ft){var n=ft,r=Z;if(Z=ft=null,Pe(n),r)for(n=0;n<r.length;n++)Pe(r[n])}}function Le(n,r){return n(r)}function Se(){}var We=!1;function ct(n,r,l){if(We)return n(r,l);We=!0;try{return Le(n,r,l)}finally{We=!1,(ft!==null||Z!==null)&&(Se(),ze())}}function rt(n,r){var l=n.stateNode;if(l===null)return null;var u=ml(l);if(u===null)return null;l=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var bt=!1;if(h)try{var On={};Object.defineProperty(On,"passive",{get:function(){bt=!0}}),window.addEventListener("test",On,On),window.removeEventListener("test",On,On)}catch{bt=!1}function ui(n,r,l,u,p,_,R,z,K){var pe=Array.prototype.slice.call(arguments,3);try{r.apply(l,pe)}catch(we){this.onError(we)}}var tr=!1,Us=null,os=!1,Fs=null,nr={onError:function(n){tr=!0,Us=n}};function Ba(n,r,l,u,p,_,R,z,K){tr=!1,Us=null,ui.apply(nr,arguments)}function Jo(n,r,l,u,p,_,R,z,K){if(Ba.apply(this,arguments),tr){if(tr){var pe=Us;tr=!1,Us=null}else throw Error(t(198));os||(os=!0,Fs=pe)}}function ki(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function ls(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function za(n){if(ki(n)!==n)throw Error(t(188))}function Os(n){var r=n.alternate;if(!r){if(r=ki(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,u=r;;){var p=l.return;if(p===null)break;var _=p.alternate;if(_===null){if(u=p.return,u!==null){l=u;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===l)return za(p),n;if(_===u)return za(p),r;_=_.sibling}throw Error(t(188))}if(l.return!==u.return)l=p,u=_;else{for(var R=!1,z=p.child;z;){if(z===l){R=!0,l=p,u=_;break}if(z===u){R=!0,u=p,l=_;break}z=z.sibling}if(!R){for(z=_.child;z;){if(z===l){R=!0,l=_,u=p;break}if(z===u){R=!0,u=_,l=p;break}z=z.sibling}if(!R)throw Error(t(189))}}if(l.alternate!==u)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function Ha(n){return n=Os(n),n!==null?Ga(n):null}function Ga(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Ga(n);if(r!==null)return r;n=n.sibling}return null}var Qo=e.unstable_scheduleCallback,el=e.unstable_cancelCallback,du=e.unstable_shouldYield,hu=e.unstable_requestPaint,en=e.unstable_now,fu=e.unstable_getCurrentPriorityLevel,Va=e.unstable_ImmediatePriority,P=e.unstable_UserBlockingPriority,ne=e.unstable_NormalPriority,he=e.unstable_LowPriority,ce=e.unstable_IdlePriority,le=null,Fe=null;function Xe(n){if(Fe&&typeof Fe.onCommitFiberRoot=="function")try{Fe.onCommitFiberRoot(le,n,void 0,(n.current.flags&128)===128)}catch{}}var De=Math.clz32?Math.clz32:gt,Ke=Math.log,tt=Math.LN2;function gt(n){return n>>>=0,n===0?32:31-(Ke(n)/tt|0)|0}var xt=64,Je=4194304;function Nt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Wt(n,r){var l=n.pendingLanes;if(l===0)return 0;var u=0,p=n.suspendedLanes,_=n.pingedLanes,R=l&268435455;if(R!==0){var z=R&~p;z!==0?u=Nt(z):(_&=R,_!==0&&(u=Nt(_)))}else R=l&~p,R!==0?u=Nt(R):_!==0&&(u=Nt(_));if(u===0)return 0;if(r!==0&&r!==u&&(r&p)===0&&(p=u&-u,_=r&-r,p>=_||p===16&&(_&4194240)!==0))return r;if((u&4)!==0&&(u|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=u;0<r;)l=31-De(r),p=1<<l,u|=n[l],r&=~p;return u}function Zt(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ft(n,r){for(var l=n.suspendedLanes,u=n.pingedLanes,p=n.expirationTimes,_=n.pendingLanes;0<_;){var R=31-De(_),z=1<<R,K=p[R];K===-1?((z&l)===0||(z&u)!==0)&&(p[R]=Zt(z,r)):K<=r&&(n.expiredLanes|=z),_&=~z}}function cn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ge(){var n=xt;return xt<<=1,(xt&4194240)===0&&(xt=64),n}function bn(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function St(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-De(r),n[r]=l}function Wn(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<l;){var p=31-De(l),_=1<<p;r[p]=0,u[p]=-1,n[p]=-1,l&=~_}}function Xn(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var u=31-De(l),p=1<<u;p&r|n[u]&r&&(n[u]|=r),l&=~p}}var wt=0;function ir(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Ut,qt,Ei,Ot,bi,ji=!1,cs=[],Tr=null,Cr=null,Ar=null,Wa=new Map,Xa=new Map,Rr=[],$v="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fp(n,r){switch(n){case"focusin":case"focusout":Tr=null;break;case"dragenter":case"dragleave":Cr=null;break;case"mouseover":case"mouseout":Ar=null;break;case"pointerover":case"pointerout":Wa.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xa.delete(r.pointerId)}}function $a(n,r,l,u,p,_){return n===null||n.nativeEvent!==_?(n={blockedOn:r,domEventName:l,eventSystemFlags:u,nativeEvent:_,targetContainers:[p]},r!==null&&(r=oo(r),r!==null&&qt(r)),n):(n.eventSystemFlags|=u,r=n.targetContainers,p!==null&&r.indexOf(p)===-1&&r.push(p),n)}function qv(n,r,l,u,p){switch(r){case"focusin":return Tr=$a(Tr,n,r,l,u,p),!0;case"dragenter":return Cr=$a(Cr,n,r,l,u,p),!0;case"mouseover":return Ar=$a(Ar,n,r,l,u,p),!0;case"pointerover":var _=p.pointerId;return Wa.set(_,$a(Wa.get(_)||null,n,r,l,u,p)),!0;case"gotpointercapture":return _=p.pointerId,Xa.set(_,$a(Xa.get(_)||null,n,r,l,u,p)),!0}return!1}function Op(n){var r=us(n.target);if(r!==null){var l=ki(r);if(l!==null){if(r=l.tag,r===13){if(r=ls(l),r!==null){n.blockedOn=r,bi(n.priority,function(){Ei(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function tl(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=mu(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var u=new l.constructor(l.type,l);Me=u,l.target.dispatchEvent(u),Me=null}else return r=oo(l),r!==null&&qt(r),n.blockedOn=l,!1;r.shift()}return!0}function kp(n,r,l){tl(n)&&l.delete(r)}function Yv(){ji=!1,Tr!==null&&tl(Tr)&&(Tr=null),Cr!==null&&tl(Cr)&&(Cr=null),Ar!==null&&tl(Ar)&&(Ar=null),Wa.forEach(kp),Xa.forEach(kp)}function qa(n,r){n.blockedOn===r&&(n.blockedOn=null,ji||(ji=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Yv)))}function Ya(n){function r(p){return qa(p,n)}if(0<cs.length){qa(cs[0],n);for(var l=1;l<cs.length;l++){var u=cs[l];u.blockedOn===n&&(u.blockedOn=null)}}for(Tr!==null&&qa(Tr,n),Cr!==null&&qa(Cr,n),Ar!==null&&qa(Ar,n),Wa.forEach(r),Xa.forEach(r),l=0;l<Rr.length;l++)u=Rr[l],u.blockedOn===n&&(u.blockedOn=null);for(;0<Rr.length&&(l=Rr[0],l.blockedOn===null);)Op(l),l.blockedOn===null&&Rr.shift()}var ks=N.ReactCurrentBatchConfig,nl=!0;function Kv(n,r,l,u){var p=wt,_=ks.transition;ks.transition=null;try{wt=1,pu(n,r,l,u)}finally{wt=p,ks.transition=_}}function Zv(n,r,l,u){var p=wt,_=ks.transition;ks.transition=null;try{wt=4,pu(n,r,l,u)}finally{wt=p,ks.transition=_}}function pu(n,r,l,u){if(nl){var p=mu(n,r,l,u);if(p===null)Lu(n,r,u,il,l),Fp(n,u);else if(qv(p,n,r,l,u))u.stopPropagation();else if(Fp(n,u),r&4&&-1<$v.indexOf(n)){for(;p!==null;){var _=oo(p);if(_!==null&&Ut(_),_=mu(n,r,l,u),_===null&&Lu(n,r,u,il,l),_===p)break;p=_}p!==null&&u.stopPropagation()}else Lu(n,r,u,null,l)}}var il=null;function mu(n,r,l,u){if(il=null,n=$e(u),n=us(n),n!==null)if(r=ki(n),r===null)n=null;else if(l=r.tag,l===13){if(n=ls(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return il=n,null}function jp(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fu()){case Va:return 1;case P:return 4;case ne:case he:return 16;case ce:return 536870912;default:return 16}default:return 16}}var Nr=null,gu=null,rl=null;function Bp(){if(rl)return rl;var n,r=gu,l=r.length,u,p="value"in Nr?Nr.value:Nr.textContent,_=p.length;for(n=0;n<l&&r[n]===p[n];n++);var R=l-n;for(u=1;u<=R&&r[l-u]===p[_-u];u++);return rl=p.slice(n,1<u?1-u:void 0)}function sl(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function al(){return!0}function zp(){return!1}function ni(n){function r(l,u,p,_,R){this._reactName=l,this._targetInst=p,this.type=u,this.nativeEvent=_,this.target=R,this.currentTarget=null;for(var z in n)n.hasOwnProperty(z)&&(l=n[z],this[z]=l?l(_):_[z]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?al:zp,this.isPropagationStopped=zp,this}return se(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=al)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=al)},persist:function(){},isPersistent:al}),r}var js={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xu=ni(js),Ka=se({},js,{view:0,detail:0}),Jv=ni(Ka),vu,_u,Za,ol=se({},Ka,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Su,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Za&&(Za&&n.type==="mousemove"?(vu=n.screenX-Za.screenX,_u=n.screenY-Za.screenY):_u=vu=0,Za=n),vu)},movementY:function(n){return"movementY"in n?n.movementY:_u}}),Hp=ni(ol),Qv=se({},ol,{dataTransfer:0}),e_=ni(Qv),t_=se({},Ka,{relatedTarget:0}),yu=ni(t_),n_=se({},js,{animationName:0,elapsedTime:0,pseudoElement:0}),i_=ni(n_),r_=se({},js,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),s_=ni(r_),a_=se({},js,{data:0}),Gp=ni(a_),o_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},l_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},c_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function u_(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=c_[n])?!!r[n]:!1}function Su(){return u_}var d_=se({},Ka,{key:function(n){if(n.key){var r=o_[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=sl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?l_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Su,charCode:function(n){return n.type==="keypress"?sl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?sl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),h_=ni(d_),f_=se({},ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vp=ni(f_),p_=se({},Ka,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Su}),m_=ni(p_),g_=se({},js,{propertyName:0,elapsedTime:0,pseudoElement:0}),x_=ni(g_),v_=se({},ol,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),__=ni(v_),y_=[9,13,27,32],Mu=h&&"CompositionEvent"in window,Ja=null;h&&"documentMode"in document&&(Ja=document.documentMode);var S_=h&&"TextEvent"in window&&!Ja,Wp=h&&(!Mu||Ja&&8<Ja&&11>=Ja),Xp=" ",$p=!1;function qp(n,r){switch(n){case"keyup":return y_.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Bs=!1;function M_(n,r){switch(n){case"compositionend":return Yp(r);case"keypress":return r.which!==32?null:($p=!0,Xp);case"textInput":return n=r.data,n===Xp&&$p?null:n;default:return null}}function E_(n,r){if(Bs)return n==="compositionend"||!Mu&&qp(n,r)?(n=Bp(),rl=gu=Nr=null,Bs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Wp&&r.locale!=="ko"?null:r.data;default:return null}}var b_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kp(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!b_[n.type]:r==="textarea"}function Zp(n,r,l,u){ve(u),r=hl(r,"onChange"),0<r.length&&(l=new xu("onChange","change",null,l,u),n.push({event:l,listeners:r}))}var Qa=null,eo=null;function w_(n){mm(n,0)}function ll(n){var r=Ws(n);if(Et(r))return n}function T_(n,r){if(n==="change")return r}var Jp=!1;if(h){var Eu;if(h){var bu="oninput"in document;if(!bu){var Qp=document.createElement("div");Qp.setAttribute("oninput","return;"),bu=typeof Qp.oninput=="function"}Eu=bu}else Eu=!1;Jp=Eu&&(!document.documentMode||9<document.documentMode)}function em(){Qa&&(Qa.detachEvent("onpropertychange",tm),eo=Qa=null)}function tm(n){if(n.propertyName==="value"&&ll(eo)){var r=[];Zp(r,eo,n,$e(n)),ct(w_,r)}}function C_(n,r,l){n==="focusin"?(em(),Qa=r,eo=l,Qa.attachEvent("onpropertychange",tm)):n==="focusout"&&em()}function A_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ll(eo)}function R_(n,r){if(n==="click")return ll(r)}function N_(n,r){if(n==="input"||n==="change")return ll(r)}function P_(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var wi=typeof Object.is=="function"?Object.is:P_;function to(n,r){if(wi(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),u=Object.keys(r);if(l.length!==u.length)return!1;for(u=0;u<l.length;u++){var p=l[u];if(!f.call(r,p)||!wi(n[p],r[p]))return!1}return!0}function nm(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function im(n,r){var l=nm(n);n=0;for(var u;l;){if(l.nodeType===3){if(u=n+l.textContent.length,n<=r&&u>=r)return{node:l,offset:r-n};n=u}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=nm(l)}}function rm(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?rm(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function sm(){for(var n=window,r=it();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=it(n.document)}return r}function wu(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function L_(n){var r=sm(),l=n.focusedElem,u=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&rm(l.ownerDocument.documentElement,l)){if(u!==null&&wu(l)){if(r=u.start,n=u.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var p=l.textContent.length,_=Math.min(u.start,p);u=u.end===void 0?_:Math.min(u.end,p),!n.extend&&_>u&&(p=u,u=_,_=p),p=im(l,_);var R=im(l,u);p&&R&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==R.node||n.focusOffset!==R.offset)&&(r=r.createRange(),r.setStart(p.node,p.offset),n.removeAllRanges(),_>u?(n.addRange(r),n.extend(R.node,R.offset)):(r.setEnd(R.node,R.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var I_=h&&"documentMode"in document&&11>=document.documentMode,zs=null,Tu=null,no=null,Cu=!1;function am(n,r,l){var u=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Cu||zs==null||zs!==it(u)||(u=zs,"selectionStart"in u&&wu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),no&&to(no,u)||(no=u,u=hl(Tu,"onSelect"),0<u.length&&(r=new xu("onSelect","select",null,r,l),n.push({event:r,listeners:u}),r.target=zs)))}function cl(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var Hs={animationend:cl("Animation","AnimationEnd"),animationiteration:cl("Animation","AnimationIteration"),animationstart:cl("Animation","AnimationStart"),transitionend:cl("Transition","TransitionEnd")},Au={},om={};h&&(om=document.createElement("div").style,"AnimationEvent"in window||(delete Hs.animationend.animation,delete Hs.animationiteration.animation,delete Hs.animationstart.animation),"TransitionEvent"in window||delete Hs.transitionend.transition);function ul(n){if(Au[n])return Au[n];if(!Hs[n])return n;var r=Hs[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in om)return Au[n]=r[l];return n}var lm=ul("animationend"),cm=ul("animationiteration"),um=ul("animationstart"),dm=ul("transitionend"),hm=new Map,fm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pr(n,r){hm.set(n,r),c(r,[n])}for(var Ru=0;Ru<fm.length;Ru++){var Nu=fm[Ru],D_=Nu.toLowerCase(),U_=Nu[0].toUpperCase()+Nu.slice(1);Pr(D_,"on"+U_)}Pr(lm,"onAnimationEnd"),Pr(cm,"onAnimationIteration"),Pr(um,"onAnimationStart"),Pr("dblclick","onDoubleClick"),Pr("focusin","onFocus"),Pr("focusout","onBlur"),Pr(dm,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),F_=new Set("cancel close invalid load scroll toggle".split(" ").concat(io));function pm(n,r,l){var u=n.type||"unknown-event";n.currentTarget=l,Jo(u,r,void 0,n),n.currentTarget=null}function mm(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var u=n[l],p=u.event;u=u.listeners;e:{var _=void 0;if(r)for(var R=u.length-1;0<=R;R--){var z=u[R],K=z.instance,pe=z.currentTarget;if(z=z.listener,K!==_&&p.isPropagationStopped())break e;pm(p,z,pe),_=K}else for(R=0;R<u.length;R++){if(z=u[R],K=z.instance,pe=z.currentTarget,z=z.listener,K!==_&&p.isPropagationStopped())break e;pm(p,z,pe),_=K}}}if(os)throw n=Fs,os=!1,Fs=null,n}function Yt(n,r){var l=r[ku];l===void 0&&(l=r[ku]=new Set);var u=n+"__bubble";l.has(u)||(gm(r,n,2,!1),l.add(u))}function Pu(n,r,l){var u=0;r&&(u|=4),gm(l,n,u,r)}var dl="_reactListening"+Math.random().toString(36).slice(2);function ro(n){if(!n[dl]){n[dl]=!0,s.forEach(function(l){l!=="selectionchange"&&(F_.has(l)||Pu(l,!1,n),Pu(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[dl]||(r[dl]=!0,Pu("selectionchange",!1,r))}}function gm(n,r,l,u){switch(jp(r)){case 1:var p=Kv;break;case 4:p=Zv;break;default:p=pu}l=p.bind(null,r,l,n),p=void 0,!bt||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(p=!0),u?p!==void 0?n.addEventListener(r,l,{capture:!0,passive:p}):n.addEventListener(r,l,!0):p!==void 0?n.addEventListener(r,l,{passive:p}):n.addEventListener(r,l,!1)}function Lu(n,r,l,u,p){var _=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var R=u.tag;if(R===3||R===4){var z=u.stateNode.containerInfo;if(z===p||z.nodeType===8&&z.parentNode===p)break;if(R===4)for(R=u.return;R!==null;){var K=R.tag;if((K===3||K===4)&&(K=R.stateNode.containerInfo,K===p||K.nodeType===8&&K.parentNode===p))return;R=R.return}for(;z!==null;){if(R=us(z),R===null)return;if(K=R.tag,K===5||K===6){u=_=R;continue e}z=z.parentNode}}u=u.return}ct(function(){var pe=_,we=$e(l),Ae=[];e:{var be=hm.get(n);if(be!==void 0){var Ve=xu,Ye=n;switch(n){case"keypress":if(sl(l)===0)break e;case"keydown":case"keyup":Ve=h_;break;case"focusin":Ye="focus",Ve=yu;break;case"focusout":Ye="blur",Ve=yu;break;case"beforeblur":case"afterblur":Ve=yu;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ve=Hp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ve=e_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ve=m_;break;case lm:case cm:case um:Ve=i_;break;case dm:Ve=x_;break;case"scroll":Ve=Jv;break;case"wheel":Ve=__;break;case"copy":case"cut":case"paste":Ve=s_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ve=Vp}var Ze=(r&4)!==0,on=!Ze&&n==="scroll",oe=Ze?be!==null?be+"Capture":null:be;Ze=[];for(var te=pe,de;te!==null;){de=te;var Ie=de.stateNode;if(de.tag===5&&Ie!==null&&(de=Ie,oe!==null&&(Ie=rt(te,oe),Ie!=null&&Ze.push(so(te,Ie,de)))),on)break;te=te.return}0<Ze.length&&(be=new Ve(be,Ye,null,l,we),Ae.push({event:be,listeners:Ze}))}}if((r&7)===0){e:{if(be=n==="mouseover"||n==="pointerover",Ve=n==="mouseout"||n==="pointerout",be&&l!==Me&&(Ye=l.relatedTarget||l.fromElement)&&(us(Ye)||Ye[rr]))break e;if((Ve||be)&&(be=we.window===we?we:(be=we.ownerDocument)?be.defaultView||be.parentWindow:window,Ve?(Ye=l.relatedTarget||l.toElement,Ve=pe,Ye=Ye?us(Ye):null,Ye!==null&&(on=ki(Ye),Ye!==on||Ye.tag!==5&&Ye.tag!==6)&&(Ye=null)):(Ve=null,Ye=pe),Ve!==Ye)){if(Ze=Hp,Ie="onMouseLeave",oe="onMouseEnter",te="mouse",(n==="pointerout"||n==="pointerover")&&(Ze=Vp,Ie="onPointerLeave",oe="onPointerEnter",te="pointer"),on=Ve==null?be:Ws(Ve),de=Ye==null?be:Ws(Ye),be=new Ze(Ie,te+"leave",Ve,l,we),be.target=on,be.relatedTarget=de,Ie=null,us(we)===pe&&(Ze=new Ze(oe,te+"enter",Ye,l,we),Ze.target=de,Ze.relatedTarget=on,Ie=Ze),on=Ie,Ve&&Ye)t:{for(Ze=Ve,oe=Ye,te=0,de=Ze;de;de=Gs(de))te++;for(de=0,Ie=oe;Ie;Ie=Gs(Ie))de++;for(;0<te-de;)Ze=Gs(Ze),te--;for(;0<de-te;)oe=Gs(oe),de--;for(;te--;){if(Ze===oe||oe!==null&&Ze===oe.alternate)break t;Ze=Gs(Ze),oe=Gs(oe)}Ze=null}else Ze=null;Ve!==null&&xm(Ae,be,Ve,Ze,!1),Ye!==null&&on!==null&&xm(Ae,on,Ye,Ze,!0)}}e:{if(be=pe?Ws(pe):window,Ve=be.nodeName&&be.nodeName.toLowerCase(),Ve==="select"||Ve==="input"&&be.type==="file")var et=T_;else if(Kp(be))if(Jp)et=N_;else{et=A_;var ot=C_}else(Ve=be.nodeName)&&Ve.toLowerCase()==="input"&&(be.type==="checkbox"||be.type==="radio")&&(et=R_);if(et&&(et=et(n,pe))){Zp(Ae,et,l,we);break e}ot&&ot(n,be,pe),n==="focusout"&&(ot=be._wrapperState)&&ot.controlled&&be.type==="number"&&hn(be,"number",be.value)}switch(ot=pe?Ws(pe):window,n){case"focusin":(Kp(ot)||ot.contentEditable==="true")&&(zs=ot,Tu=pe,no=null);break;case"focusout":no=Tu=zs=null;break;case"mousedown":Cu=!0;break;case"contextmenu":case"mouseup":case"dragend":Cu=!1,am(Ae,l,we);break;case"selectionchange":if(I_)break;case"keydown":case"keyup":am(Ae,l,we)}var lt;if(Mu)e:{switch(n){case"compositionstart":var mt="onCompositionStart";break e;case"compositionend":mt="onCompositionEnd";break e;case"compositionupdate":mt="onCompositionUpdate";break e}mt=void 0}else Bs?qp(n,l)&&(mt="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(mt="onCompositionStart");mt&&(Wp&&l.locale!=="ko"&&(Bs||mt!=="onCompositionStart"?mt==="onCompositionEnd"&&Bs&&(lt=Bp()):(Nr=we,gu="value"in Nr?Nr.value:Nr.textContent,Bs=!0)),ot=hl(pe,mt),0<ot.length&&(mt=new Gp(mt,n,null,l,we),Ae.push({event:mt,listeners:ot}),lt?mt.data=lt:(lt=Yp(l),lt!==null&&(mt.data=lt)))),(lt=S_?M_(n,l):E_(n,l))&&(pe=hl(pe,"onBeforeInput"),0<pe.length&&(we=new Gp("onBeforeInput","beforeinput",null,l,we),Ae.push({event:we,listeners:pe}),we.data=lt))}mm(Ae,r)})}function so(n,r,l){return{instance:n,listener:r,currentTarget:l}}function hl(n,r){for(var l=r+"Capture",u=[];n!==null;){var p=n,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=rt(n,l),_!=null&&u.unshift(so(n,_,p)),_=rt(n,r),_!=null&&u.push(so(n,_,p))),n=n.return}return u}function Gs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function xm(n,r,l,u,p){for(var _=r._reactName,R=[];l!==null&&l!==u;){var z=l,K=z.alternate,pe=z.stateNode;if(K!==null&&K===u)break;z.tag===5&&pe!==null&&(z=pe,p?(K=rt(l,_),K!=null&&R.unshift(so(l,K,z))):p||(K=rt(l,_),K!=null&&R.push(so(l,K,z)))),l=l.return}R.length!==0&&n.push({event:r,listeners:R})}var O_=/\r\n?/g,k_=/\u0000|\uFFFD/g;function vm(n){return(typeof n=="string"?n:""+n).replace(O_,`
`).replace(k_,"")}function fl(n,r,l){if(r=vm(r),vm(n)!==r&&l)throw Error(t(425))}function pl(){}var Iu=null,Du=null;function Uu(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Fu=typeof setTimeout=="function"?setTimeout:void 0,j_=typeof clearTimeout=="function"?clearTimeout:void 0,_m=typeof Promise=="function"?Promise:void 0,B_=typeof queueMicrotask=="function"?queueMicrotask:typeof _m<"u"?function(n){return _m.resolve(null).then(n).catch(z_)}:Fu;function z_(n){setTimeout(function(){throw n})}function Ou(n,r){var l=r,u=0;do{var p=l.nextSibling;if(n.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(u===0){n.removeChild(p),Ya(r);return}u--}else l!=="$"&&l!=="$?"&&l!=="$!"||u++;l=p}while(l);Ya(r)}function Lr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function ym(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var Vs=Math.random().toString(36).slice(2),Bi="__reactFiber$"+Vs,ao="__reactProps$"+Vs,rr="__reactContainer$"+Vs,ku="__reactEvents$"+Vs,H_="__reactListeners$"+Vs,G_="__reactHandles$"+Vs;function us(n){var r=n[Bi];if(r)return r;for(var l=n.parentNode;l;){if(r=l[rr]||l[Bi]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=ym(n);n!==null;){if(l=n[Bi])return l;n=ym(n)}return r}n=l,l=n.parentNode}return null}function oo(n){return n=n[Bi]||n[rr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ws(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function ml(n){return n[ao]||null}var ju=[],Xs=-1;function Ir(n){return{current:n}}function Kt(n){0>Xs||(n.current=ju[Xs],ju[Xs]=null,Xs--)}function Xt(n,r){Xs++,ju[Xs]=n.current,n.current=r}var Dr={},An=Ir(Dr),$n=Ir(!1),ds=Dr;function $s(n,r){var l=n.type.contextTypes;if(!l)return Dr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===r)return u.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in l)p[_]=r[_];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=p),p}function qn(n){return n=n.childContextTypes,n!=null}function gl(){Kt($n),Kt(An)}function Sm(n,r,l){if(An.current!==Dr)throw Error(t(168));Xt(An,r),Xt($n,l)}function Mm(n,r,l){var u=n.stateNode;if(r=r.childContextTypes,typeof u.getChildContext!="function")return l;u=u.getChildContext();for(var p in u)if(!(p in r))throw Error(t(108,me(n)||"Unknown",p));return se({},l,u)}function xl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Dr,ds=An.current,Xt(An,n),Xt($n,$n.current),!0}function Em(n,r,l){var u=n.stateNode;if(!u)throw Error(t(169));l?(n=Mm(n,r,ds),u.__reactInternalMemoizedMergedChildContext=n,Kt($n),Kt(An),Xt(An,n)):Kt($n),Xt($n,l)}var sr=null,vl=!1,Bu=!1;function bm(n){sr===null?sr=[n]:sr.push(n)}function V_(n){vl=!0,bm(n)}function Ur(){if(!Bu&&sr!==null){Bu=!0;var n=0,r=wt;try{var l=sr;for(wt=1;n<l.length;n++){var u=l[n];do u=u(!0);while(u!==null)}sr=null,vl=!1}catch(p){throw sr!==null&&(sr=sr.slice(n+1)),Qo(Va,Ur),p}finally{wt=r,Bu=!1}}return null}var qs=[],Ys=0,_l=null,yl=0,di=[],hi=0,hs=null,ar=1,or="";function fs(n,r){qs[Ys++]=yl,qs[Ys++]=_l,_l=n,yl=r}function wm(n,r,l){di[hi++]=ar,di[hi++]=or,di[hi++]=hs,hs=n;var u=ar;n=or;var p=32-De(u)-1;u&=~(1<<p),l+=1;var _=32-De(r)+p;if(30<_){var R=p-p%5;_=(u&(1<<R)-1).toString(32),u>>=R,p-=R,ar=1<<32-De(r)+p|l<<p|u,or=_+n}else ar=1<<_|l<<p|u,or=n}function zu(n){n.return!==null&&(fs(n,1),wm(n,1,0))}function Hu(n){for(;n===_l;)_l=qs[--Ys],qs[Ys]=null,yl=qs[--Ys],qs[Ys]=null;for(;n===hs;)hs=di[--hi],di[hi]=null,or=di[--hi],di[hi]=null,ar=di[--hi],di[hi]=null}var ii=null,ri=null,Jt=!1,Ti=null;function Tm(n,r){var l=gi(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function Cm(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,ii=n,ri=Lr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,ii=n,ri=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=hs!==null?{id:ar,overflow:or}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=gi(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,ii=n,ri=null,!0):!1;default:return!1}}function Gu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Vu(n){if(Jt){var r=ri;if(r){var l=r;if(!Cm(n,r)){if(Gu(n))throw Error(t(418));r=Lr(l.nextSibling);var u=ii;r&&Cm(n,r)?Tm(u,l):(n.flags=n.flags&-4097|2,Jt=!1,ii=n)}}else{if(Gu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Jt=!1,ii=n}}}function Am(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ii=n}function Sl(n){if(n!==ii)return!1;if(!Jt)return Am(n),Jt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Uu(n.type,n.memoizedProps)),r&&(r=ri)){if(Gu(n))throw Rm(),Error(t(418));for(;r;)Tm(n,r),r=Lr(r.nextSibling)}if(Am(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){ri=Lr(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}ri=null}}else ri=ii?Lr(n.stateNode.nextSibling):null;return!0}function Rm(){for(var n=ri;n;)n=Lr(n.nextSibling)}function Ks(){ri=ii=null,Jt=!1}function Wu(n){Ti===null?Ti=[n]:Ti.push(n)}var W_=N.ReactCurrentBatchConfig;function lo(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var u=l.stateNode}if(!u)throw Error(t(147,n));var p=u,_=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===_?r.ref:(r=function(R){var z=p.refs;R===null?delete z[_]:z[_]=R},r._stringRef=_,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function Ml(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Nm(n){var r=n._init;return r(n._payload)}function Pm(n){function r(oe,te){if(n){var de=oe.deletions;de===null?(oe.deletions=[te],oe.flags|=16):de.push(te)}}function l(oe,te){if(!n)return null;for(;te!==null;)r(oe,te),te=te.sibling;return null}function u(oe,te){for(oe=new Map;te!==null;)te.key!==null?oe.set(te.key,te):oe.set(te.index,te),te=te.sibling;return oe}function p(oe,te){return oe=Gr(oe,te),oe.index=0,oe.sibling=null,oe}function _(oe,te,de){return oe.index=de,n?(de=oe.alternate,de!==null?(de=de.index,de<te?(oe.flags|=2,te):de):(oe.flags|=2,te)):(oe.flags|=1048576,te)}function R(oe){return n&&oe.alternate===null&&(oe.flags|=2),oe}function z(oe,te,de,Ie){return te===null||te.tag!==6?(te=Fd(de,oe.mode,Ie),te.return=oe,te):(te=p(te,de),te.return=oe,te)}function K(oe,te,de,Ie){var et=de.type;return et===k?we(oe,te,de.props.children,Ie,de.key):te!==null&&(te.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===O&&Nm(et)===te.type)?(Ie=p(te,de.props),Ie.ref=lo(oe,te,de),Ie.return=oe,Ie):(Ie=Xl(de.type,de.key,de.props,null,oe.mode,Ie),Ie.ref=lo(oe,te,de),Ie.return=oe,Ie)}function pe(oe,te,de,Ie){return te===null||te.tag!==4||te.stateNode.containerInfo!==de.containerInfo||te.stateNode.implementation!==de.implementation?(te=Od(de,oe.mode,Ie),te.return=oe,te):(te=p(te,de.children||[]),te.return=oe,te)}function we(oe,te,de,Ie,et){return te===null||te.tag!==7?(te=Ss(de,oe.mode,Ie,et),te.return=oe,te):(te=p(te,de),te.return=oe,te)}function Ae(oe,te,de){if(typeof te=="string"&&te!==""||typeof te=="number")return te=Fd(""+te,oe.mode,de),te.return=oe,te;if(typeof te=="object"&&te!==null){switch(te.$$typeof){case I:return de=Xl(te.type,te.key,te.props,null,oe.mode,de),de.ref=lo(oe,null,te),de.return=oe,de;case L:return te=Od(te,oe.mode,de),te.return=oe,te;case O:var Ie=te._init;return Ae(oe,Ie(te._payload),de)}if(ee(te)||ue(te))return te=Ss(te,oe.mode,de,null),te.return=oe,te;Ml(oe,te)}return null}function be(oe,te,de,Ie){var et=te!==null?te.key:null;if(typeof de=="string"&&de!==""||typeof de=="number")return et!==null?null:z(oe,te,""+de,Ie);if(typeof de=="object"&&de!==null){switch(de.$$typeof){case I:return de.key===et?K(oe,te,de,Ie):null;case L:return de.key===et?pe(oe,te,de,Ie):null;case O:return et=de._init,be(oe,te,et(de._payload),Ie)}if(ee(de)||ue(de))return et!==null?null:we(oe,te,de,Ie,null);Ml(oe,de)}return null}function Ve(oe,te,de,Ie,et){if(typeof Ie=="string"&&Ie!==""||typeof Ie=="number")return oe=oe.get(de)||null,z(te,oe,""+Ie,et);if(typeof Ie=="object"&&Ie!==null){switch(Ie.$$typeof){case I:return oe=oe.get(Ie.key===null?de:Ie.key)||null,K(te,oe,Ie,et);case L:return oe=oe.get(Ie.key===null?de:Ie.key)||null,pe(te,oe,Ie,et);case O:var ot=Ie._init;return Ve(oe,te,de,ot(Ie._payload),et)}if(ee(Ie)||ue(Ie))return oe=oe.get(de)||null,we(te,oe,Ie,et,null);Ml(te,Ie)}return null}function Ye(oe,te,de,Ie){for(var et=null,ot=null,lt=te,mt=te=0,Mn=null;lt!==null&&mt<de.length;mt++){lt.index>mt?(Mn=lt,lt=null):Mn=lt.sibling;var It=be(oe,lt,de[mt],Ie);if(It===null){lt===null&&(lt=Mn);break}n&&lt&&It.alternate===null&&r(oe,lt),te=_(It,te,mt),ot===null?et=It:ot.sibling=It,ot=It,lt=Mn}if(mt===de.length)return l(oe,lt),Jt&&fs(oe,mt),et;if(lt===null){for(;mt<de.length;mt++)lt=Ae(oe,de[mt],Ie),lt!==null&&(te=_(lt,te,mt),ot===null?et=lt:ot.sibling=lt,ot=lt);return Jt&&fs(oe,mt),et}for(lt=u(oe,lt);mt<de.length;mt++)Mn=Ve(lt,oe,mt,de[mt],Ie),Mn!==null&&(n&&Mn.alternate!==null&&lt.delete(Mn.key===null?mt:Mn.key),te=_(Mn,te,mt),ot===null?et=Mn:ot.sibling=Mn,ot=Mn);return n&&lt.forEach(function(Vr){return r(oe,Vr)}),Jt&&fs(oe,mt),et}function Ze(oe,te,de,Ie){var et=ue(de);if(typeof et!="function")throw Error(t(150));if(de=et.call(de),de==null)throw Error(t(151));for(var ot=et=null,lt=te,mt=te=0,Mn=null,It=de.next();lt!==null&&!It.done;mt++,It=de.next()){lt.index>mt?(Mn=lt,lt=null):Mn=lt.sibling;var Vr=be(oe,lt,It.value,Ie);if(Vr===null){lt===null&&(lt=Mn);break}n&&lt&&Vr.alternate===null&&r(oe,lt),te=_(Vr,te,mt),ot===null?et=Vr:ot.sibling=Vr,ot=Vr,lt=Mn}if(It.done)return l(oe,lt),Jt&&fs(oe,mt),et;if(lt===null){for(;!It.done;mt++,It=de.next())It=Ae(oe,It.value,Ie),It!==null&&(te=_(It,te,mt),ot===null?et=It:ot.sibling=It,ot=It);return Jt&&fs(oe,mt),et}for(lt=u(oe,lt);!It.done;mt++,It=de.next())It=Ve(lt,oe,mt,It.value,Ie),It!==null&&(n&&It.alternate!==null&&lt.delete(It.key===null?mt:It.key),te=_(It,te,mt),ot===null?et=It:ot.sibling=It,ot=It);return n&&lt.forEach(function(by){return r(oe,by)}),Jt&&fs(oe,mt),et}function on(oe,te,de,Ie){if(typeof de=="object"&&de!==null&&de.type===k&&de.key===null&&(de=de.props.children),typeof de=="object"&&de!==null){switch(de.$$typeof){case I:e:{for(var et=de.key,ot=te;ot!==null;){if(ot.key===et){if(et=de.type,et===k){if(ot.tag===7){l(oe,ot.sibling),te=p(ot,de.props.children),te.return=oe,oe=te;break e}}else if(ot.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===O&&Nm(et)===ot.type){l(oe,ot.sibling),te=p(ot,de.props),te.ref=lo(oe,ot,de),te.return=oe,oe=te;break e}l(oe,ot);break}else r(oe,ot);ot=ot.sibling}de.type===k?(te=Ss(de.props.children,oe.mode,Ie,de.key),te.return=oe,oe=te):(Ie=Xl(de.type,de.key,de.props,null,oe.mode,Ie),Ie.ref=lo(oe,te,de),Ie.return=oe,oe=Ie)}return R(oe);case L:e:{for(ot=de.key;te!==null;){if(te.key===ot)if(te.tag===4&&te.stateNode.containerInfo===de.containerInfo&&te.stateNode.implementation===de.implementation){l(oe,te.sibling),te=p(te,de.children||[]),te.return=oe,oe=te;break e}else{l(oe,te);break}else r(oe,te);te=te.sibling}te=Od(de,oe.mode,Ie),te.return=oe,oe=te}return R(oe);case O:return ot=de._init,on(oe,te,ot(de._payload),Ie)}if(ee(de))return Ye(oe,te,de,Ie);if(ue(de))return Ze(oe,te,de,Ie);Ml(oe,de)}return typeof de=="string"&&de!==""||typeof de=="number"?(de=""+de,te!==null&&te.tag===6?(l(oe,te.sibling),te=p(te,de),te.return=oe,oe=te):(l(oe,te),te=Fd(de,oe.mode,Ie),te.return=oe,oe=te),R(oe)):l(oe,te)}return on}var Zs=Pm(!0),Lm=Pm(!1),El=Ir(null),bl=null,Js=null,Xu=null;function $u(){Xu=Js=bl=null}function qu(n){var r=El.current;Kt(El),n._currentValue=r}function Yu(n,r,l){for(;n!==null;){var u=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),n===l)break;n=n.return}}function Qs(n,r){bl=n,Xu=Js=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Yn=!0),n.firstContext=null)}function fi(n){var r=n._currentValue;if(Xu!==n)if(n={context:n,memoizedValue:r,next:null},Js===null){if(bl===null)throw Error(t(308));Js=n,bl.dependencies={lanes:0,firstContext:n}}else Js=Js.next=n;return r}var ps=null;function Ku(n){ps===null?ps=[n]:ps.push(n)}function Im(n,r,l,u){var p=r.interleaved;return p===null?(l.next=l,Ku(r)):(l.next=p.next,p.next=l),r.interleaved=l,lr(n,u)}function lr(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var Fr=!1;function Zu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dm(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function cr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Or(n,r,l){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Lt&2)!==0){var p=u.pending;return p===null?r.next=r:(r.next=p.next,p.next=r),u.pending=r,lr(n,l)}return p=u.interleaved,p===null?(r.next=r,Ku(u)):(r.next=p.next,p.next=r),u.interleaved=r,lr(n,l)}function wl(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var u=r.lanes;u&=n.pendingLanes,l|=u,r.lanes=l,Xn(n,l)}}function Um(n,r){var l=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,l===u)){var p=null,_=null;if(l=l.firstBaseUpdate,l!==null){do{var R={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};_===null?p=_=R:_=_.next=R,l=l.next}while(l!==null);_===null?p=_=r:_=_.next=r}else p=_=r;l={baseState:u.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:u.shared,effects:u.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function Tl(n,r,l,u){var p=n.updateQueue;Fr=!1;var _=p.firstBaseUpdate,R=p.lastBaseUpdate,z=p.shared.pending;if(z!==null){p.shared.pending=null;var K=z,pe=K.next;K.next=null,R===null?_=pe:R.next=pe,R=K;var we=n.alternate;we!==null&&(we=we.updateQueue,z=we.lastBaseUpdate,z!==R&&(z===null?we.firstBaseUpdate=pe:z.next=pe,we.lastBaseUpdate=K))}if(_!==null){var Ae=p.baseState;R=0,we=pe=K=null,z=_;do{var be=z.lane,Ve=z.eventTime;if((u&be)===be){we!==null&&(we=we.next={eventTime:Ve,lane:0,tag:z.tag,payload:z.payload,callback:z.callback,next:null});e:{var Ye=n,Ze=z;switch(be=r,Ve=l,Ze.tag){case 1:if(Ye=Ze.payload,typeof Ye=="function"){Ae=Ye.call(Ve,Ae,be);break e}Ae=Ye;break e;case 3:Ye.flags=Ye.flags&-65537|128;case 0:if(Ye=Ze.payload,be=typeof Ye=="function"?Ye.call(Ve,Ae,be):Ye,be==null)break e;Ae=se({},Ae,be);break e;case 2:Fr=!0}}z.callback!==null&&z.lane!==0&&(n.flags|=64,be=p.effects,be===null?p.effects=[z]:be.push(z))}else Ve={eventTime:Ve,lane:be,tag:z.tag,payload:z.payload,callback:z.callback,next:null},we===null?(pe=we=Ve,K=Ae):we=we.next=Ve,R|=be;if(z=z.next,z===null){if(z=p.shared.pending,z===null)break;be=z,z=be.next,be.next=null,p.lastBaseUpdate=be,p.shared.pending=null}}while(!0);if(we===null&&(K=Ae),p.baseState=K,p.firstBaseUpdate=pe,p.lastBaseUpdate=we,r=p.shared.interleaved,r!==null){p=r;do R|=p.lane,p=p.next;while(p!==r)}else _===null&&(p.shared.lanes=0);xs|=R,n.lanes=R,n.memoizedState=Ae}}function Fm(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var u=n[r],p=u.callback;if(p!==null){if(u.callback=null,u=l,typeof p!="function")throw Error(t(191,p));p.call(u)}}}var co={},zi=Ir(co),uo=Ir(co),ho=Ir(co);function ms(n){if(n===co)throw Error(t(174));return n}function Ju(n,r){switch(Xt(ho,r),Xt(uo,n),Xt(zi,co),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:C(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=C(r,n)}Kt(zi),Xt(zi,r)}function ea(){Kt(zi),Kt(uo),Kt(ho)}function Om(n){ms(ho.current);var r=ms(zi.current),l=C(r,n.type);r!==l&&(Xt(uo,n),Xt(zi,l))}function Qu(n){uo.current===n&&(Kt(zi),Kt(uo))}var tn=Ir(0);function Cl(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var ed=[];function td(){for(var n=0;n<ed.length;n++)ed[n]._workInProgressVersionPrimary=null;ed.length=0}var Al=N.ReactCurrentDispatcher,nd=N.ReactCurrentBatchConfig,gs=0,nn=null,fn=null,yn=null,Rl=!1,fo=!1,po=0,X_=0;function Rn(){throw Error(t(321))}function id(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!wi(n[l],r[l]))return!1;return!0}function rd(n,r,l,u,p,_){if(gs=_,nn=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Al.current=n===null||n.memoizedState===null?K_:Z_,n=l(u,p),fo){_=0;do{if(fo=!1,po=0,25<=_)throw Error(t(301));_+=1,yn=fn=null,r.updateQueue=null,Al.current=J_,n=l(u,p)}while(fo)}if(Al.current=Ll,r=fn!==null&&fn.next!==null,gs=0,yn=fn=nn=null,Rl=!1,r)throw Error(t(300));return n}function sd(){var n=po!==0;return po=0,n}function Hi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yn===null?nn.memoizedState=yn=n:yn=yn.next=n,yn}function pi(){if(fn===null){var n=nn.alternate;n=n!==null?n.memoizedState:null}else n=fn.next;var r=yn===null?nn.memoizedState:yn.next;if(r!==null)yn=r,fn=n;else{if(n===null)throw Error(t(310));fn=n,n={memoizedState:fn.memoizedState,baseState:fn.baseState,baseQueue:fn.baseQueue,queue:fn.queue,next:null},yn===null?nn.memoizedState=yn=n:yn=yn.next=n}return yn}function mo(n,r){return typeof r=="function"?r(n):r}function ad(n){var r=pi(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var u=fn,p=u.baseQueue,_=l.pending;if(_!==null){if(p!==null){var R=p.next;p.next=_.next,_.next=R}u.baseQueue=p=_,l.pending=null}if(p!==null){_=p.next,u=u.baseState;var z=R=null,K=null,pe=_;do{var we=pe.lane;if((gs&we)===we)K!==null&&(K=K.next={lane:0,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null}),u=pe.hasEagerState?pe.eagerState:n(u,pe.action);else{var Ae={lane:we,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null};K===null?(z=K=Ae,R=u):K=K.next=Ae,nn.lanes|=we,xs|=we}pe=pe.next}while(pe!==null&&pe!==_);K===null?R=u:K.next=z,wi(u,r.memoizedState)||(Yn=!0),r.memoizedState=u,r.baseState=R,r.baseQueue=K,l.lastRenderedState=u}if(n=l.interleaved,n!==null){p=n;do _=p.lane,nn.lanes|=_,xs|=_,p=p.next;while(p!==n)}else p===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function od(n){var r=pi(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var u=l.dispatch,p=l.pending,_=r.memoizedState;if(p!==null){l.pending=null;var R=p=p.next;do _=n(_,R.action),R=R.next;while(R!==p);wi(_,r.memoizedState)||(Yn=!0),r.memoizedState=_,r.baseQueue===null&&(r.baseState=_),l.lastRenderedState=_}return[_,u]}function km(){}function jm(n,r){var l=nn,u=pi(),p=r(),_=!wi(u.memoizedState,p);if(_&&(u.memoizedState=p,Yn=!0),u=u.queue,ld(Hm.bind(null,l,u,n),[n]),u.getSnapshot!==r||_||yn!==null&&yn.memoizedState.tag&1){if(l.flags|=2048,go(9,zm.bind(null,l,u,p,r),void 0,null),Sn===null)throw Error(t(349));(gs&30)!==0||Bm(l,r,p)}return p}function Bm(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=nn.updateQueue,r===null?(r={lastEffect:null,stores:null},nn.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function zm(n,r,l,u){r.value=l,r.getSnapshot=u,Gm(r)&&Vm(n)}function Hm(n,r,l){return l(function(){Gm(r)&&Vm(n)})}function Gm(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!wi(n,l)}catch{return!0}}function Vm(n){var r=lr(n,1);r!==null&&Ni(r,n,1,-1)}function Wm(n){var r=Hi();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mo,lastRenderedState:n},r.queue=n,n=n.dispatch=Y_.bind(null,nn,n),[r.memoizedState,n]}function go(n,r,l,u){return n={tag:n,create:r,destroy:l,deps:u,next:null},r=nn.updateQueue,r===null?(r={lastEffect:null,stores:null},nn.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(u=l.next,l.next=n,n.next=u,r.lastEffect=n)),n}function Xm(){return pi().memoizedState}function Nl(n,r,l,u){var p=Hi();nn.flags|=n,p.memoizedState=go(1|r,l,void 0,u===void 0?null:u)}function Pl(n,r,l,u){var p=pi();u=u===void 0?null:u;var _=void 0;if(fn!==null){var R=fn.memoizedState;if(_=R.destroy,u!==null&&id(u,R.deps)){p.memoizedState=go(r,l,_,u);return}}nn.flags|=n,p.memoizedState=go(1|r,l,_,u)}function $m(n,r){return Nl(8390656,8,n,r)}function ld(n,r){return Pl(2048,8,n,r)}function qm(n,r){return Pl(4,2,n,r)}function Ym(n,r){return Pl(4,4,n,r)}function Km(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Zm(n,r,l){return l=l!=null?l.concat([n]):null,Pl(4,4,Km.bind(null,r,n),l)}function cd(){}function Jm(n,r){var l=pi();r=r===void 0?null:r;var u=l.memoizedState;return u!==null&&r!==null&&id(r,u[1])?u[0]:(l.memoizedState=[n,r],n)}function Qm(n,r){var l=pi();r=r===void 0?null:r;var u=l.memoizedState;return u!==null&&r!==null&&id(r,u[1])?u[0]:(n=n(),l.memoizedState=[n,r],n)}function eg(n,r,l){return(gs&21)===0?(n.baseState&&(n.baseState=!1,Yn=!0),n.memoizedState=l):(wi(l,r)||(l=Ge(),nn.lanes|=l,xs|=l,n.baseState=!0),r)}function $_(n,r){var l=wt;wt=l!==0&&4>l?l:4,n(!0);var u=nd.transition;nd.transition={};try{n(!1),r()}finally{wt=l,nd.transition=u}}function tg(){return pi().memoizedState}function q_(n,r,l){var u=zr(n);if(l={lane:u,action:l,hasEagerState:!1,eagerState:null,next:null},ng(n))ig(r,l);else if(l=Im(n,r,l,u),l!==null){var p=jn();Ni(l,n,u,p),rg(l,r,u)}}function Y_(n,r,l){var u=zr(n),p={lane:u,action:l,hasEagerState:!1,eagerState:null,next:null};if(ng(n))ig(r,p);else{var _=n.alternate;if(n.lanes===0&&(_===null||_.lanes===0)&&(_=r.lastRenderedReducer,_!==null))try{var R=r.lastRenderedState,z=_(R,l);if(p.hasEagerState=!0,p.eagerState=z,wi(z,R)){var K=r.interleaved;K===null?(p.next=p,Ku(r)):(p.next=K.next,K.next=p),r.interleaved=p;return}}catch{}finally{}l=Im(n,r,p,u),l!==null&&(p=jn(),Ni(l,n,u,p),rg(l,r,u))}}function ng(n){var r=n.alternate;return n===nn||r!==null&&r===nn}function ig(n,r){fo=Rl=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function rg(n,r,l){if((l&4194240)!==0){var u=r.lanes;u&=n.pendingLanes,l|=u,r.lanes=l,Xn(n,l)}}var Ll={readContext:fi,useCallback:Rn,useContext:Rn,useEffect:Rn,useImperativeHandle:Rn,useInsertionEffect:Rn,useLayoutEffect:Rn,useMemo:Rn,useReducer:Rn,useRef:Rn,useState:Rn,useDebugValue:Rn,useDeferredValue:Rn,useTransition:Rn,useMutableSource:Rn,useSyncExternalStore:Rn,useId:Rn,unstable_isNewReconciler:!1},K_={readContext:fi,useCallback:function(n,r){return Hi().memoizedState=[n,r===void 0?null:r],n},useContext:fi,useEffect:$m,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,Nl(4194308,4,Km.bind(null,r,n),l)},useLayoutEffect:function(n,r){return Nl(4194308,4,n,r)},useInsertionEffect:function(n,r){return Nl(4,2,n,r)},useMemo:function(n,r){var l=Hi();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var u=Hi();return r=l!==void 0?l(r):r,u.memoizedState=u.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},u.queue=n,n=n.dispatch=q_.bind(null,nn,n),[u.memoizedState,n]},useRef:function(n){var r=Hi();return n={current:n},r.memoizedState=n},useState:Wm,useDebugValue:cd,useDeferredValue:function(n){return Hi().memoizedState=n},useTransition:function(){var n=Wm(!1),r=n[0];return n=$_.bind(null,n[1]),Hi().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var u=nn,p=Hi();if(Jt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),Sn===null)throw Error(t(349));(gs&30)!==0||Bm(u,r,l)}p.memoizedState=l;var _={value:l,getSnapshot:r};return p.queue=_,$m(Hm.bind(null,u,_,n),[n]),u.flags|=2048,go(9,zm.bind(null,u,_,l,r),void 0,null),l},useId:function(){var n=Hi(),r=Sn.identifierPrefix;if(Jt){var l=or,u=ar;l=(u&~(1<<32-De(u)-1)).toString(32)+l,r=":"+r+"R"+l,l=po++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=X_++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},Z_={readContext:fi,useCallback:Jm,useContext:fi,useEffect:ld,useImperativeHandle:Zm,useInsertionEffect:qm,useLayoutEffect:Ym,useMemo:Qm,useReducer:ad,useRef:Xm,useState:function(){return ad(mo)},useDebugValue:cd,useDeferredValue:function(n){var r=pi();return eg(r,fn.memoizedState,n)},useTransition:function(){var n=ad(mo)[0],r=pi().memoizedState;return[n,r]},useMutableSource:km,useSyncExternalStore:jm,useId:tg,unstable_isNewReconciler:!1},J_={readContext:fi,useCallback:Jm,useContext:fi,useEffect:ld,useImperativeHandle:Zm,useInsertionEffect:qm,useLayoutEffect:Ym,useMemo:Qm,useReducer:od,useRef:Xm,useState:function(){return od(mo)},useDebugValue:cd,useDeferredValue:function(n){var r=pi();return fn===null?r.memoizedState=n:eg(r,fn.memoizedState,n)},useTransition:function(){var n=od(mo)[0],r=pi().memoizedState;return[n,r]},useMutableSource:km,useSyncExternalStore:jm,useId:tg,unstable_isNewReconciler:!1};function Ci(n,r){if(n&&n.defaultProps){r=se({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function ud(n,r,l,u){r=n.memoizedState,l=l(u,r),l=l==null?r:se({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var Il={isMounted:function(n){return(n=n._reactInternals)?ki(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var u=jn(),p=zr(n),_=cr(u,p);_.payload=r,l!=null&&(_.callback=l),r=Or(n,_,p),r!==null&&(Ni(r,n,p,u),wl(r,n,p))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var u=jn(),p=zr(n),_=cr(u,p);_.tag=1,_.payload=r,l!=null&&(_.callback=l),r=Or(n,_,p),r!==null&&(Ni(r,n,p,u),wl(r,n,p))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=jn(),u=zr(n),p=cr(l,u);p.tag=2,r!=null&&(p.callback=r),r=Or(n,p,u),r!==null&&(Ni(r,n,u,l),wl(r,n,u))}};function sg(n,r,l,u,p,_,R){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,_,R):r.prototype&&r.prototype.isPureReactComponent?!to(l,u)||!to(p,_):!0}function ag(n,r,l){var u=!1,p=Dr,_=r.contextType;return typeof _=="object"&&_!==null?_=fi(_):(p=qn(r)?ds:An.current,u=r.contextTypes,_=(u=u!=null)?$s(n,p):Dr),r=new r(l,_),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Il,n.stateNode=r,r._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=_),r}function og(n,r,l,u){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,u),r.state!==n&&Il.enqueueReplaceState(r,r.state,null)}function dd(n,r,l,u){var p=n.stateNode;p.props=l,p.state=n.memoizedState,p.refs={},Zu(n);var _=r.contextType;typeof _=="object"&&_!==null?p.context=fi(_):(_=qn(r)?ds:An.current,p.context=$s(n,_)),p.state=n.memoizedState,_=r.getDerivedStateFromProps,typeof _=="function"&&(ud(n,r,_,l),p.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(r=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),r!==p.state&&Il.enqueueReplaceState(p,p.state,null),Tl(n,l,p,u),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function ta(n,r){try{var l="",u=r;do l+=Re(u),u=u.return;while(u);var p=l}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:n,source:r,stack:p,digest:null}}function hd(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function fd(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var Q_=typeof WeakMap=="function"?WeakMap:Map;function lg(n,r,l){l=cr(-1,l),l.tag=3,l.payload={element:null};var u=r.value;return l.callback=function(){Bl||(Bl=!0,Ad=u),fd(n,r)},l}function cg(n,r,l){l=cr(-1,l),l.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var p=r.value;l.payload=function(){return u(p)},l.callback=function(){fd(n,r)}}var _=n.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(l.callback=function(){fd(n,r),typeof u!="function"&&(jr===null?jr=new Set([this]):jr.add(this));var R=r.stack;this.componentDidCatch(r.value,{componentStack:R!==null?R:""})}),l}function ug(n,r,l){var u=n.pingCache;if(u===null){u=n.pingCache=new Q_;var p=new Set;u.set(r,p)}else p=u.get(r),p===void 0&&(p=new Set,u.set(r,p));p.has(l)||(p.add(l),n=fy.bind(null,n,r,l),r.then(n,n))}function dg(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function hg(n,r,l,u,p){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=cr(-1,1),r.tag=2,Or(l,r,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var ey=N.ReactCurrentOwner,Yn=!1;function kn(n,r,l,u){r.child=n===null?Lm(r,null,l,u):Zs(r,n.child,l,u)}function fg(n,r,l,u,p){l=l.render;var _=r.ref;return Qs(r,p),u=rd(n,r,l,u,_,p),l=sd(),n!==null&&!Yn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,ur(n,r,p)):(Jt&&l&&zu(r),r.flags|=1,kn(n,r,u,p),r.child)}function pg(n,r,l,u,p){if(n===null){var _=l.type;return typeof _=="function"&&!Ud(_)&&_.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=_,mg(n,r,_,u,p)):(n=Xl(l.type,null,u,r,r.mode,p),n.ref=r.ref,n.return=r,r.child=n)}if(_=n.child,(n.lanes&p)===0){var R=_.memoizedProps;if(l=l.compare,l=l!==null?l:to,l(R,u)&&n.ref===r.ref)return ur(n,r,p)}return r.flags|=1,n=Gr(_,u),n.ref=r.ref,n.return=r,r.child=n}function mg(n,r,l,u,p){if(n!==null){var _=n.memoizedProps;if(to(_,u)&&n.ref===r.ref)if(Yn=!1,r.pendingProps=u=_,(n.lanes&p)!==0)(n.flags&131072)!==0&&(Yn=!0);else return r.lanes=n.lanes,ur(n,r,p)}return pd(n,r,l,u,p)}function gg(n,r,l){var u=r.pendingProps,p=u.children,_=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Xt(ia,si),si|=l;else{if((l&1073741824)===0)return n=_!==null?_.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Xt(ia,si),si|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=_!==null?_.baseLanes:l,Xt(ia,si),si|=u}else _!==null?(u=_.baseLanes|l,r.memoizedState=null):u=l,Xt(ia,si),si|=u;return kn(n,r,p,l),r.child}function xg(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function pd(n,r,l,u,p){var _=qn(l)?ds:An.current;return _=$s(r,_),Qs(r,p),l=rd(n,r,l,u,_,p),u=sd(),n!==null&&!Yn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,ur(n,r,p)):(Jt&&u&&zu(r),r.flags|=1,kn(n,r,l,p),r.child)}function vg(n,r,l,u,p){if(qn(l)){var _=!0;xl(r)}else _=!1;if(Qs(r,p),r.stateNode===null)Ul(n,r),ag(r,l,u),dd(r,l,u,p),u=!0;else if(n===null){var R=r.stateNode,z=r.memoizedProps;R.props=z;var K=R.context,pe=l.contextType;typeof pe=="object"&&pe!==null?pe=fi(pe):(pe=qn(l)?ds:An.current,pe=$s(r,pe));var we=l.getDerivedStateFromProps,Ae=typeof we=="function"||typeof R.getSnapshotBeforeUpdate=="function";Ae||typeof R.UNSAFE_componentWillReceiveProps!="function"&&typeof R.componentWillReceiveProps!="function"||(z!==u||K!==pe)&&og(r,R,u,pe),Fr=!1;var be=r.memoizedState;R.state=be,Tl(r,u,R,p),K=r.memoizedState,z!==u||be!==K||$n.current||Fr?(typeof we=="function"&&(ud(r,l,we,u),K=r.memoizedState),(z=Fr||sg(r,l,z,u,be,K,pe))?(Ae||typeof R.UNSAFE_componentWillMount!="function"&&typeof R.componentWillMount!="function"||(typeof R.componentWillMount=="function"&&R.componentWillMount(),typeof R.UNSAFE_componentWillMount=="function"&&R.UNSAFE_componentWillMount()),typeof R.componentDidMount=="function"&&(r.flags|=4194308)):(typeof R.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=K),R.props=u,R.state=K,R.context=pe,u=z):(typeof R.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{R=r.stateNode,Dm(n,r),z=r.memoizedProps,pe=r.type===r.elementType?z:Ci(r.type,z),R.props=pe,Ae=r.pendingProps,be=R.context,K=l.contextType,typeof K=="object"&&K!==null?K=fi(K):(K=qn(l)?ds:An.current,K=$s(r,K));var Ve=l.getDerivedStateFromProps;(we=typeof Ve=="function"||typeof R.getSnapshotBeforeUpdate=="function")||typeof R.UNSAFE_componentWillReceiveProps!="function"&&typeof R.componentWillReceiveProps!="function"||(z!==Ae||be!==K)&&og(r,R,u,K),Fr=!1,be=r.memoizedState,R.state=be,Tl(r,u,R,p);var Ye=r.memoizedState;z!==Ae||be!==Ye||$n.current||Fr?(typeof Ve=="function"&&(ud(r,l,Ve,u),Ye=r.memoizedState),(pe=Fr||sg(r,l,pe,u,be,Ye,K)||!1)?(we||typeof R.UNSAFE_componentWillUpdate!="function"&&typeof R.componentWillUpdate!="function"||(typeof R.componentWillUpdate=="function"&&R.componentWillUpdate(u,Ye,K),typeof R.UNSAFE_componentWillUpdate=="function"&&R.UNSAFE_componentWillUpdate(u,Ye,K)),typeof R.componentDidUpdate=="function"&&(r.flags|=4),typeof R.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof R.componentDidUpdate!="function"||z===n.memoizedProps&&be===n.memoizedState||(r.flags|=4),typeof R.getSnapshotBeforeUpdate!="function"||z===n.memoizedProps&&be===n.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=Ye),R.props=u,R.state=Ye,R.context=K,u=pe):(typeof R.componentDidUpdate!="function"||z===n.memoizedProps&&be===n.memoizedState||(r.flags|=4),typeof R.getSnapshotBeforeUpdate!="function"||z===n.memoizedProps&&be===n.memoizedState||(r.flags|=1024),u=!1)}return md(n,r,l,u,_,p)}function md(n,r,l,u,p,_){xg(n,r);var R=(r.flags&128)!==0;if(!u&&!R)return p&&Em(r,l,!1),ur(n,r,_);u=r.stateNode,ey.current=r;var z=R&&typeof l.getDerivedStateFromError!="function"?null:u.render();return r.flags|=1,n!==null&&R?(r.child=Zs(r,n.child,null,_),r.child=Zs(r,null,z,_)):kn(n,r,z,_),r.memoizedState=u.state,p&&Em(r,l,!0),r.child}function _g(n){var r=n.stateNode;r.pendingContext?Sm(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Sm(n,r.context,!1),Ju(n,r.containerInfo)}function yg(n,r,l,u,p){return Ks(),Wu(p),r.flags|=256,kn(n,r,l,u),r.child}var gd={dehydrated:null,treeContext:null,retryLane:0};function xd(n){return{baseLanes:n,cachePool:null,transitions:null}}function Sg(n,r,l){var u=r.pendingProps,p=tn.current,_=!1,R=(r.flags&128)!==0,z;if((z=R)||(z=n!==null&&n.memoizedState===null?!1:(p&2)!==0),z?(_=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),Xt(tn,p&1),n===null)return Vu(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(R=u.children,n=u.fallback,_?(u=r.mode,_=r.child,R={mode:"hidden",children:R},(u&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=R):_=$l(R,u,0,null),n=Ss(n,u,l,null),_.return=r,n.return=r,_.sibling=n,r.child=_,r.child.memoizedState=xd(l),r.memoizedState=gd,n):vd(r,R));if(p=n.memoizedState,p!==null&&(z=p.dehydrated,z!==null))return ty(n,r,R,u,z,p,l);if(_){_=u.fallback,R=r.mode,p=n.child,z=p.sibling;var K={mode:"hidden",children:u.children};return(R&1)===0&&r.child!==p?(u=r.child,u.childLanes=0,u.pendingProps=K,r.deletions=null):(u=Gr(p,K),u.subtreeFlags=p.subtreeFlags&14680064),z!==null?_=Gr(z,_):(_=Ss(_,R,l,null),_.flags|=2),_.return=r,u.return=r,u.sibling=_,r.child=u,u=_,_=r.child,R=n.child.memoizedState,R=R===null?xd(l):{baseLanes:R.baseLanes|l,cachePool:null,transitions:R.transitions},_.memoizedState=R,_.childLanes=n.childLanes&~l,r.memoizedState=gd,u}return _=n.child,n=_.sibling,u=Gr(_,{mode:"visible",children:u.children}),(r.mode&1)===0&&(u.lanes=l),u.return=r,u.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=u,r.memoizedState=null,u}function vd(n,r){return r=$l({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Dl(n,r,l,u){return u!==null&&Wu(u),Zs(r,n.child,null,l),n=vd(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function ty(n,r,l,u,p,_,R){if(l)return r.flags&256?(r.flags&=-257,u=hd(Error(t(422))),Dl(n,r,R,u)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(_=u.fallback,p=r.mode,u=$l({mode:"visible",children:u.children},p,0,null),_=Ss(_,p,R,null),_.flags|=2,u.return=r,_.return=r,u.sibling=_,r.child=u,(r.mode&1)!==0&&Zs(r,n.child,null,R),r.child.memoizedState=xd(R),r.memoizedState=gd,_);if((r.mode&1)===0)return Dl(n,r,R,null);if(p.data==="$!"){if(u=p.nextSibling&&p.nextSibling.dataset,u)var z=u.dgst;return u=z,_=Error(t(419)),u=hd(_,u,void 0),Dl(n,r,R,u)}if(z=(R&n.childLanes)!==0,Yn||z){if(u=Sn,u!==null){switch(R&-R){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(u.suspendedLanes|R))!==0?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,lr(n,p),Ni(u,n,p,-1))}return Dd(),u=hd(Error(t(421))),Dl(n,r,R,u)}return p.data==="$?"?(r.flags|=128,r.child=n.child,r=py.bind(null,n),p._reactRetry=r,null):(n=_.treeContext,ri=Lr(p.nextSibling),ii=r,Jt=!0,Ti=null,n!==null&&(di[hi++]=ar,di[hi++]=or,di[hi++]=hs,ar=n.id,or=n.overflow,hs=r),r=vd(r,u.children),r.flags|=4096,r)}function Mg(n,r,l){n.lanes|=r;var u=n.alternate;u!==null&&(u.lanes|=r),Yu(n.return,r,l)}function _d(n,r,l,u,p){var _=n.memoizedState;_===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:l,tailMode:p}:(_.isBackwards=r,_.rendering=null,_.renderingStartTime=0,_.last=u,_.tail=l,_.tailMode=p)}function Eg(n,r,l){var u=r.pendingProps,p=u.revealOrder,_=u.tail;if(kn(n,r,u.children,l),u=tn.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Mg(n,l,r);else if(n.tag===19)Mg(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Xt(tn,u),(r.mode&1)===0)r.memoizedState=null;else switch(p){case"forwards":for(l=r.child,p=null;l!==null;)n=l.alternate,n!==null&&Cl(n)===null&&(p=l),l=l.sibling;l=p,l===null?(p=r.child,r.child=null):(p=l.sibling,l.sibling=null),_d(r,!1,p,l,_);break;case"backwards":for(l=null,p=r.child,r.child=null;p!==null;){if(n=p.alternate,n!==null&&Cl(n)===null){r.child=p;break}n=p.sibling,p.sibling=l,l=p,p=n}_d(r,!0,l,null,_);break;case"together":_d(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Ul(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function ur(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),xs|=r.lanes,(l&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=Gr(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=Gr(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function ny(n,r,l){switch(r.tag){case 3:_g(r),Ks();break;case 5:Om(r);break;case 1:qn(r.type)&&xl(r);break;case 4:Ju(r,r.stateNode.containerInfo);break;case 10:var u=r.type._context,p=r.memoizedProps.value;Xt(El,u._currentValue),u._currentValue=p;break;case 13:if(u=r.memoizedState,u!==null)return u.dehydrated!==null?(Xt(tn,tn.current&1),r.flags|=128,null):(l&r.child.childLanes)!==0?Sg(n,r,l):(Xt(tn,tn.current&1),n=ur(n,r,l),n!==null?n.sibling:null);Xt(tn,tn.current&1);break;case 19:if(u=(l&r.childLanes)!==0,(n.flags&128)!==0){if(u)return Eg(n,r,l);r.flags|=128}if(p=r.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Xt(tn,tn.current),u)break;return null;case 22:case 23:return r.lanes=0,gg(n,r,l)}return ur(n,r,l)}var bg,yd,wg,Tg;bg=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},yd=function(){},wg=function(n,r,l,u){var p=n.memoizedProps;if(p!==u){n=r.stateNode,ms(zi.current);var _=null;switch(l){case"input":p=Qe(n,p),u=Qe(n,u),_=[];break;case"select":p=se({},p,{value:void 0}),u=se({},u,{value:void 0}),_=[];break;case"textarea":p=pt(n,p),u=pt(n,u),_=[];break;default:typeof p.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=pl)}F(l,u);var R;l=null;for(pe in p)if(!u.hasOwnProperty(pe)&&p.hasOwnProperty(pe)&&p[pe]!=null)if(pe==="style"){var z=p[pe];for(R in z)z.hasOwnProperty(R)&&(l||(l={}),l[R]="")}else pe!=="dangerouslySetInnerHTML"&&pe!=="children"&&pe!=="suppressContentEditableWarning"&&pe!=="suppressHydrationWarning"&&pe!=="autoFocus"&&(a.hasOwnProperty(pe)?_||(_=[]):(_=_||[]).push(pe,null));for(pe in u){var K=u[pe];if(z=p!=null?p[pe]:void 0,u.hasOwnProperty(pe)&&K!==z&&(K!=null||z!=null))if(pe==="style")if(z){for(R in z)!z.hasOwnProperty(R)||K&&K.hasOwnProperty(R)||(l||(l={}),l[R]="");for(R in K)K.hasOwnProperty(R)&&z[R]!==K[R]&&(l||(l={}),l[R]=K[R])}else l||(_||(_=[]),_.push(pe,l)),l=K;else pe==="dangerouslySetInnerHTML"?(K=K?K.__html:void 0,z=z?z.__html:void 0,K!=null&&z!==K&&(_=_||[]).push(pe,K)):pe==="children"?typeof K!="string"&&typeof K!="number"||(_=_||[]).push(pe,""+K):pe!=="suppressContentEditableWarning"&&pe!=="suppressHydrationWarning"&&(a.hasOwnProperty(pe)?(K!=null&&pe==="onScroll"&&Yt("scroll",n),_||z===K||(_=[])):(_=_||[]).push(pe,K))}l&&(_=_||[]).push("style",l);var pe=_;(r.updateQueue=pe)&&(r.flags|=4)}},Tg=function(n,r,l,u){l!==u&&(r.flags|=4)};function xo(n,r){if(!Jt)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var u=null;l!==null;)l.alternate!==null&&(u=l),l=l.sibling;u===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Nn(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,u=0;if(r)for(var p=n.child;p!==null;)l|=p.lanes|p.childLanes,u|=p.subtreeFlags&14680064,u|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)l|=p.lanes|p.childLanes,u|=p.subtreeFlags,u|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=u,n.childLanes=l,r}function iy(n,r,l){var u=r.pendingProps;switch(Hu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nn(r),null;case 1:return qn(r.type)&&gl(),Nn(r),null;case 3:return u=r.stateNode,ea(),Kt($n),Kt(An),td(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Sl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Ti!==null&&(Pd(Ti),Ti=null))),yd(n,r),Nn(r),null;case 5:Qu(r);var p=ms(ho.current);if(l=r.type,n!==null&&r.stateNode!=null)wg(n,r,l,u,p),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!u){if(r.stateNode===null)throw Error(t(166));return Nn(r),null}if(n=ms(zi.current),Sl(r)){u=r.stateNode,l=r.type;var _=r.memoizedProps;switch(u[Bi]=r,u[ao]=_,n=(r.mode&1)!==0,l){case"dialog":Yt("cancel",u),Yt("close",u);break;case"iframe":case"object":case"embed":Yt("load",u);break;case"video":case"audio":for(p=0;p<io.length;p++)Yt(io[p],u);break;case"source":Yt("error",u);break;case"img":case"image":case"link":Yt("error",u),Yt("load",u);break;case"details":Yt("toggle",u);break;case"input":_t(u,_),Yt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!_.multiple},Yt("invalid",u);break;case"textarea":Dt(u,_),Yt("invalid",u)}F(l,_),p=null;for(var R in _)if(_.hasOwnProperty(R)){var z=_[R];R==="children"?typeof z=="string"?u.textContent!==z&&(_.suppressHydrationWarning!==!0&&fl(u.textContent,z,n),p=["children",z]):typeof z=="number"&&u.textContent!==""+z&&(_.suppressHydrationWarning!==!0&&fl(u.textContent,z,n),p=["children",""+z]):a.hasOwnProperty(R)&&z!=null&&R==="onScroll"&&Yt("scroll",u)}switch(l){case"input":He(u),Bt(u,_,!0);break;case"textarea":He(u),Vt(u);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(u.onclick=pl)}u=p,r.updateQueue=u,u!==null&&(r.flags|=4)}else{R=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=D(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=R.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=R.createElement(l,{is:u.is}):(n=R.createElement(l),l==="select"&&(R=n,u.multiple?R.multiple=!0:u.size&&(R.size=u.size))):n=R.createElementNS(n,l),n[Bi]=r,n[ao]=u,bg(n,r,!1,!1),r.stateNode=n;e:{switch(R=q(l,u),l){case"dialog":Yt("cancel",n),Yt("close",n),p=u;break;case"iframe":case"object":case"embed":Yt("load",n),p=u;break;case"video":case"audio":for(p=0;p<io.length;p++)Yt(io[p],n);p=u;break;case"source":Yt("error",n),p=u;break;case"img":case"image":case"link":Yt("error",n),Yt("load",n),p=u;break;case"details":Yt("toggle",n),p=u;break;case"input":_t(n,u),p=Qe(n,u),Yt("invalid",n);break;case"option":p=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},p=se({},u,{value:void 0}),Yt("invalid",n);break;case"textarea":Dt(n,u),p=pt(n,u),Yt("invalid",n);break;default:p=u}F(l,p),z=p;for(_ in z)if(z.hasOwnProperty(_)){var K=z[_];_==="style"?ye(n,K):_==="dangerouslySetInnerHTML"?(K=K?K.__html:void 0,K!=null&&_e(n,K)):_==="children"?typeof K=="string"?(l!=="textarea"||K!=="")&&Ee(n,K):typeof K=="number"&&Ee(n,""+K):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(a.hasOwnProperty(_)?K!=null&&_==="onScroll"&&Yt("scroll",n):K!=null&&w(n,_,K,R))}switch(l){case"input":He(n),Bt(n,u,!1);break;case"textarea":He(n),Vt(n);break;case"option":u.value!=null&&n.setAttribute("value",""+fe(u.value));break;case"select":n.multiple=!!u.multiple,_=u.value,_!=null?zt(n,!!u.multiple,_,!1):u.defaultValue!=null&&zt(n,!!u.multiple,u.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=pl)}switch(l){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Nn(r),null;case 6:if(n&&r.stateNode!=null)Tg(n,r,n.memoizedProps,u);else{if(typeof u!="string"&&r.stateNode===null)throw Error(t(166));if(l=ms(ho.current),ms(zi.current),Sl(r)){if(u=r.stateNode,l=r.memoizedProps,u[Bi]=r,(_=u.nodeValue!==l)&&(n=ii,n!==null))switch(n.tag){case 3:fl(u.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&fl(u.nodeValue,l,(n.mode&1)!==0)}_&&(r.flags|=4)}else u=(l.nodeType===9?l:l.ownerDocument).createTextNode(u),u[Bi]=r,r.stateNode=u}return Nn(r),null;case 13:if(Kt(tn),u=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Jt&&ri!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Rm(),Ks(),r.flags|=98560,_=!1;else if(_=Sl(r),u!==null&&u.dehydrated!==null){if(n===null){if(!_)throw Error(t(318));if(_=r.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[Bi]=r}else Ks(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Nn(r),_=!1}else Ti!==null&&(Pd(Ti),Ti=null),_=!0;if(!_)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=l,r):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(tn.current&1)!==0?pn===0&&(pn=3):Dd())),r.updateQueue!==null&&(r.flags|=4),Nn(r),null);case 4:return ea(),yd(n,r),n===null&&ro(r.stateNode.containerInfo),Nn(r),null;case 10:return qu(r.type._context),Nn(r),null;case 17:return qn(r.type)&&gl(),Nn(r),null;case 19:if(Kt(tn),_=r.memoizedState,_===null)return Nn(r),null;if(u=(r.flags&128)!==0,R=_.rendering,R===null)if(u)xo(_,!1);else{if(pn!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(R=Cl(n),R!==null){for(r.flags|=128,xo(_,!1),u=R.updateQueue,u!==null&&(r.updateQueue=u,r.flags|=4),r.subtreeFlags=0,u=l,l=r.child;l!==null;)_=l,n=u,_.flags&=14680066,R=_.alternate,R===null?(_.childLanes=0,_.lanes=n,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=R.childLanes,_.lanes=R.lanes,_.child=R.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=R.memoizedProps,_.memoizedState=R.memoizedState,_.updateQueue=R.updateQueue,_.type=R.type,n=R.dependencies,_.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return Xt(tn,tn.current&1|2),r.child}n=n.sibling}_.tail!==null&&en()>ra&&(r.flags|=128,u=!0,xo(_,!1),r.lanes=4194304)}else{if(!u)if(n=Cl(R),n!==null){if(r.flags|=128,u=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),xo(_,!0),_.tail===null&&_.tailMode==="hidden"&&!R.alternate&&!Jt)return Nn(r),null}else 2*en()-_.renderingStartTime>ra&&l!==1073741824&&(r.flags|=128,u=!0,xo(_,!1),r.lanes=4194304);_.isBackwards?(R.sibling=r.child,r.child=R):(l=_.last,l!==null?l.sibling=R:r.child=R,_.last=R)}return _.tail!==null?(r=_.tail,_.rendering=r,_.tail=r.sibling,_.renderingStartTime=en(),r.sibling=null,l=tn.current,Xt(tn,u?l&1|2:l&1),r):(Nn(r),null);case 22:case 23:return Id(),u=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(r.flags|=8192),u&&(r.mode&1)!==0?(si&1073741824)!==0&&(Nn(r),r.subtreeFlags&6&&(r.flags|=8192)):Nn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function ry(n,r){switch(Hu(r),r.tag){case 1:return qn(r.type)&&gl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return ea(),Kt($n),Kt(An),td(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return Qu(r),null;case 13:if(Kt(tn),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Ks()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Kt(tn),null;case 4:return ea(),null;case 10:return qu(r.type._context),null;case 22:case 23:return Id(),null;case 24:return null;default:return null}}var Fl=!1,Pn=!1,sy=typeof WeakSet=="function"?WeakSet:Set,qe=null;function na(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(u){sn(n,r,u)}else l.current=null}function Sd(n,r,l){try{l()}catch(u){sn(n,r,u)}}var Cg=!1;function ay(n,r){if(Iu=nl,n=sm(),wu(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var u=l.getSelection&&l.getSelection();if(u&&u.rangeCount!==0){l=u.anchorNode;var p=u.anchorOffset,_=u.focusNode;u=u.focusOffset;try{l.nodeType,_.nodeType}catch{l=null;break e}var R=0,z=-1,K=-1,pe=0,we=0,Ae=n,be=null;t:for(;;){for(var Ve;Ae!==l||p!==0&&Ae.nodeType!==3||(z=R+p),Ae!==_||u!==0&&Ae.nodeType!==3||(K=R+u),Ae.nodeType===3&&(R+=Ae.nodeValue.length),(Ve=Ae.firstChild)!==null;)be=Ae,Ae=Ve;for(;;){if(Ae===n)break t;if(be===l&&++pe===p&&(z=R),be===_&&++we===u&&(K=R),(Ve=Ae.nextSibling)!==null)break;Ae=be,be=Ae.parentNode}Ae=Ve}l=z===-1||K===-1?null:{start:z,end:K}}else l=null}l=l||{start:0,end:0}}else l=null;for(Du={focusedElem:n,selectionRange:l},nl=!1,qe=r;qe!==null;)if(r=qe,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,qe=n;else for(;qe!==null;){r=qe;try{var Ye=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(Ye!==null){var Ze=Ye.memoizedProps,on=Ye.memoizedState,oe=r.stateNode,te=oe.getSnapshotBeforeUpdate(r.elementType===r.type?Ze:Ci(r.type,Ze),on);oe.__reactInternalSnapshotBeforeUpdate=te}break;case 3:var de=r.stateNode.containerInfo;de.nodeType===1?de.textContent="":de.nodeType===9&&de.documentElement&&de.removeChild(de.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ie){sn(r,r.return,Ie)}if(n=r.sibling,n!==null){n.return=r.return,qe=n;break}qe=r.return}return Ye=Cg,Cg=!1,Ye}function vo(n,r,l){var u=r.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var p=u=u.next;do{if((p.tag&n)===n){var _=p.destroy;p.destroy=void 0,_!==void 0&&Sd(r,l,_)}p=p.next}while(p!==u)}}function Ol(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var u=l.create;l.destroy=u()}l=l.next}while(l!==r)}}function Md(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function Ag(n){var r=n.alternate;r!==null&&(n.alternate=null,Ag(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Bi],delete r[ao],delete r[ku],delete r[H_],delete r[G_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Rg(n){return n.tag===5||n.tag===3||n.tag===4}function Ng(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Rg(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ed(n,r,l){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=pl));else if(u!==4&&(n=n.child,n!==null))for(Ed(n,r,l),n=n.sibling;n!==null;)Ed(n,r,l),n=n.sibling}function bd(n,r,l){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(bd(n,r,l),n=n.sibling;n!==null;)bd(n,r,l),n=n.sibling}var wn=null,Ai=!1;function kr(n,r,l){for(l=l.child;l!==null;)Pg(n,r,l),l=l.sibling}function Pg(n,r,l){if(Fe&&typeof Fe.onCommitFiberUnmount=="function")try{Fe.onCommitFiberUnmount(le,l)}catch{}switch(l.tag){case 5:Pn||na(l,r);case 6:var u=wn,p=Ai;wn=null,kr(n,r,l),wn=u,Ai=p,wn!==null&&(Ai?(n=wn,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):wn.removeChild(l.stateNode));break;case 18:wn!==null&&(Ai?(n=wn,l=l.stateNode,n.nodeType===8?Ou(n.parentNode,l):n.nodeType===1&&Ou(n,l),Ya(n)):Ou(wn,l.stateNode));break;case 4:u=wn,p=Ai,wn=l.stateNode.containerInfo,Ai=!0,kr(n,r,l),wn=u,Ai=p;break;case 0:case 11:case 14:case 15:if(!Pn&&(u=l.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){p=u=u.next;do{var _=p,R=_.destroy;_=_.tag,R!==void 0&&((_&2)!==0||(_&4)!==0)&&Sd(l,r,R),p=p.next}while(p!==u)}kr(n,r,l);break;case 1:if(!Pn&&(na(l,r),u=l.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=l.memoizedProps,u.state=l.memoizedState,u.componentWillUnmount()}catch(z){sn(l,r,z)}kr(n,r,l);break;case 21:kr(n,r,l);break;case 22:l.mode&1?(Pn=(u=Pn)||l.memoizedState!==null,kr(n,r,l),Pn=u):kr(n,r,l);break;default:kr(n,r,l)}}function Lg(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new sy),r.forEach(function(u){var p=my.bind(null,n,u);l.has(u)||(l.add(u),u.then(p,p))})}}function Ri(n,r){var l=r.deletions;if(l!==null)for(var u=0;u<l.length;u++){var p=l[u];try{var _=n,R=r,z=R;e:for(;z!==null;){switch(z.tag){case 5:wn=z.stateNode,Ai=!1;break e;case 3:wn=z.stateNode.containerInfo,Ai=!0;break e;case 4:wn=z.stateNode.containerInfo,Ai=!0;break e}z=z.return}if(wn===null)throw Error(t(160));Pg(_,R,p),wn=null,Ai=!1;var K=p.alternate;K!==null&&(K.return=null),p.return=null}catch(pe){sn(p,r,pe)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Ig(r,n),r=r.sibling}function Ig(n,r){var l=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ri(r,n),Gi(n),u&4){try{vo(3,n,n.return),Ol(3,n)}catch(Ze){sn(n,n.return,Ze)}try{vo(5,n,n.return)}catch(Ze){sn(n,n.return,Ze)}}break;case 1:Ri(r,n),Gi(n),u&512&&l!==null&&na(l,l.return);break;case 5:if(Ri(r,n),Gi(n),u&512&&l!==null&&na(l,l.return),n.flags&32){var p=n.stateNode;try{Ee(p,"")}catch(Ze){sn(n,n.return,Ze)}}if(u&4&&(p=n.stateNode,p!=null)){var _=n.memoizedProps,R=l!==null?l.memoizedProps:_,z=n.type,K=n.updateQueue;if(n.updateQueue=null,K!==null)try{z==="input"&&_.type==="radio"&&_.name!=null&&ht(p,_),q(z,R);var pe=q(z,_);for(R=0;R<K.length;R+=2){var we=K[R],Ae=K[R+1];we==="style"?ye(p,Ae):we==="dangerouslySetInnerHTML"?_e(p,Ae):we==="children"?Ee(p,Ae):w(p,we,Ae,pe)}switch(z){case"input":jt(p,_);break;case"textarea":ke(p,_);break;case"select":var be=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var Ve=_.value;Ve!=null?zt(p,!!_.multiple,Ve,!1):be!==!!_.multiple&&(_.defaultValue!=null?zt(p,!!_.multiple,_.defaultValue,!0):zt(p,!!_.multiple,_.multiple?[]:"",!1))}p[ao]=_}catch(Ze){sn(n,n.return,Ze)}}break;case 6:if(Ri(r,n),Gi(n),u&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,_=n.memoizedProps;try{p.nodeValue=_}catch(Ze){sn(n,n.return,Ze)}}break;case 3:if(Ri(r,n),Gi(n),u&4&&l!==null&&l.memoizedState.isDehydrated)try{Ya(r.containerInfo)}catch(Ze){sn(n,n.return,Ze)}break;case 4:Ri(r,n),Gi(n);break;case 13:Ri(r,n),Gi(n),p=n.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(Cd=en())),u&4&&Lg(n);break;case 22:if(we=l!==null&&l.memoizedState!==null,n.mode&1?(Pn=(pe=Pn)||we,Ri(r,n),Pn=pe):Ri(r,n),Gi(n),u&8192){if(pe=n.memoizedState!==null,(n.stateNode.isHidden=pe)&&!we&&(n.mode&1)!==0)for(qe=n,we=n.child;we!==null;){for(Ae=qe=we;qe!==null;){switch(be=qe,Ve=be.child,be.tag){case 0:case 11:case 14:case 15:vo(4,be,be.return);break;case 1:na(be,be.return);var Ye=be.stateNode;if(typeof Ye.componentWillUnmount=="function"){u=be,l=be.return;try{r=u,Ye.props=r.memoizedProps,Ye.state=r.memoizedState,Ye.componentWillUnmount()}catch(Ze){sn(u,l,Ze)}}break;case 5:na(be,be.return);break;case 22:if(be.memoizedState!==null){Fg(Ae);continue}}Ve!==null?(Ve.return=be,qe=Ve):Fg(Ae)}we=we.sibling}e:for(we=null,Ae=n;;){if(Ae.tag===5){if(we===null){we=Ae;try{p=Ae.stateNode,pe?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(z=Ae.stateNode,K=Ae.memoizedProps.style,R=K!=null&&K.hasOwnProperty("display")?K.display:null,z.style.display=ge("display",R))}catch(Ze){sn(n,n.return,Ze)}}}else if(Ae.tag===6){if(we===null)try{Ae.stateNode.nodeValue=pe?"":Ae.memoizedProps}catch(Ze){sn(n,n.return,Ze)}}else if((Ae.tag!==22&&Ae.tag!==23||Ae.memoizedState===null||Ae===n)&&Ae.child!==null){Ae.child.return=Ae,Ae=Ae.child;continue}if(Ae===n)break e;for(;Ae.sibling===null;){if(Ae.return===null||Ae.return===n)break e;we===Ae&&(we=null),Ae=Ae.return}we===Ae&&(we=null),Ae.sibling.return=Ae.return,Ae=Ae.sibling}}break;case 19:Ri(r,n),Gi(n),u&4&&Lg(n);break;case 21:break;default:Ri(r,n),Gi(n)}}function Gi(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(Rg(l)){var u=l;break e}l=l.return}throw Error(t(160))}switch(u.tag){case 5:var p=u.stateNode;u.flags&32&&(Ee(p,""),u.flags&=-33);var _=Ng(n);bd(n,_,p);break;case 3:case 4:var R=u.stateNode.containerInfo,z=Ng(n);Ed(n,z,R);break;default:throw Error(t(161))}}catch(K){sn(n,n.return,K)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function oy(n,r,l){qe=n,Dg(n)}function Dg(n,r,l){for(var u=(n.mode&1)!==0;qe!==null;){var p=qe,_=p.child;if(p.tag===22&&u){var R=p.memoizedState!==null||Fl;if(!R){var z=p.alternate,K=z!==null&&z.memoizedState!==null||Pn;z=Fl;var pe=Pn;if(Fl=R,(Pn=K)&&!pe)for(qe=p;qe!==null;)R=qe,K=R.child,R.tag===22&&R.memoizedState!==null?Og(p):K!==null?(K.return=R,qe=K):Og(p);for(;_!==null;)qe=_,Dg(_),_=_.sibling;qe=p,Fl=z,Pn=pe}Ug(n)}else(p.subtreeFlags&8772)!==0&&_!==null?(_.return=p,qe=_):Ug(n)}}function Ug(n){for(;qe!==null;){var r=qe;if((r.flags&8772)!==0){var l=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Pn||Ol(5,r);break;case 1:var u=r.stateNode;if(r.flags&4&&!Pn)if(l===null)u.componentDidMount();else{var p=r.elementType===r.type?l.memoizedProps:Ci(r.type,l.memoizedProps);u.componentDidUpdate(p,l.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var _=r.updateQueue;_!==null&&Fm(r,_,u);break;case 3:var R=r.updateQueue;if(R!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}Fm(r,R,l)}break;case 5:var z=r.stateNode;if(l===null&&r.flags&4){l=z;var K=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":K.autoFocus&&l.focus();break;case"img":K.src&&(l.src=K.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var pe=r.alternate;if(pe!==null){var we=pe.memoizedState;if(we!==null){var Ae=we.dehydrated;Ae!==null&&Ya(Ae)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Pn||r.flags&512&&Md(r)}catch(be){sn(r,r.return,be)}}if(r===n){qe=null;break}if(l=r.sibling,l!==null){l.return=r.return,qe=l;break}qe=r.return}}function Fg(n){for(;qe!==null;){var r=qe;if(r===n){qe=null;break}var l=r.sibling;if(l!==null){l.return=r.return,qe=l;break}qe=r.return}}function Og(n){for(;qe!==null;){var r=qe;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{Ol(4,r)}catch(K){sn(r,l,K)}break;case 1:var u=r.stateNode;if(typeof u.componentDidMount=="function"){var p=r.return;try{u.componentDidMount()}catch(K){sn(r,p,K)}}var _=r.return;try{Md(r)}catch(K){sn(r,_,K)}break;case 5:var R=r.return;try{Md(r)}catch(K){sn(r,R,K)}}}catch(K){sn(r,r.return,K)}if(r===n){qe=null;break}var z=r.sibling;if(z!==null){z.return=r.return,qe=z;break}qe=r.return}}var ly=Math.ceil,kl=N.ReactCurrentDispatcher,wd=N.ReactCurrentOwner,mi=N.ReactCurrentBatchConfig,Lt=0,Sn=null,un=null,Tn=0,si=0,ia=Ir(0),pn=0,_o=null,xs=0,jl=0,Td=0,yo=null,Kn=null,Cd=0,ra=1/0,dr=null,Bl=!1,Ad=null,jr=null,zl=!1,Br=null,Hl=0,So=0,Rd=null,Gl=-1,Vl=0;function jn(){return(Lt&6)!==0?en():Gl!==-1?Gl:Gl=en()}function zr(n){return(n.mode&1)===0?1:(Lt&2)!==0&&Tn!==0?Tn&-Tn:W_.transition!==null?(Vl===0&&(Vl=Ge()),Vl):(n=wt,n!==0||(n=window.event,n=n===void 0?16:jp(n.type)),n)}function Ni(n,r,l,u){if(50<So)throw So=0,Rd=null,Error(t(185));St(n,l,u),((Lt&2)===0||n!==Sn)&&(n===Sn&&((Lt&2)===0&&(jl|=l),pn===4&&Hr(n,Tn)),Zn(n,u),l===1&&Lt===0&&(r.mode&1)===0&&(ra=en()+500,vl&&Ur()))}function Zn(n,r){var l=n.callbackNode;Ft(n,r);var u=Wt(n,n===Sn?Tn:0);if(u===0)l!==null&&el(l),n.callbackNode=null,n.callbackPriority=0;else if(r=u&-u,n.callbackPriority!==r){if(l!=null&&el(l),r===1)n.tag===0?V_(jg.bind(null,n)):bm(jg.bind(null,n)),B_(function(){(Lt&6)===0&&Ur()}),l=null;else{switch(ir(u)){case 1:l=Va;break;case 4:l=P;break;case 16:l=ne;break;case 536870912:l=ce;break;default:l=ne}l=$g(l,kg.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function kg(n,r){if(Gl=-1,Vl=0,(Lt&6)!==0)throw Error(t(327));var l=n.callbackNode;if(sa()&&n.callbackNode!==l)return null;var u=Wt(n,n===Sn?Tn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||r)r=Wl(n,u);else{r=u;var p=Lt;Lt|=2;var _=zg();(Sn!==n||Tn!==r)&&(dr=null,ra=en()+500,_s(n,r));do try{dy();break}catch(z){Bg(n,z)}while(!0);$u(),kl.current=_,Lt=p,un!==null?r=0:(Sn=null,Tn=0,r=pn)}if(r!==0){if(r===2&&(p=cn(n),p!==0&&(u=p,r=Nd(n,p))),r===1)throw l=_o,_s(n,0),Hr(n,u),Zn(n,en()),l;if(r===6)Hr(n,u);else{if(p=n.current.alternate,(u&30)===0&&!cy(p)&&(r=Wl(n,u),r===2&&(_=cn(n),_!==0&&(u=_,r=Nd(n,_))),r===1))throw l=_o,_s(n,0),Hr(n,u),Zn(n,en()),l;switch(n.finishedWork=p,n.finishedLanes=u,r){case 0:case 1:throw Error(t(345));case 2:ys(n,Kn,dr);break;case 3:if(Hr(n,u),(u&130023424)===u&&(r=Cd+500-en(),10<r)){if(Wt(n,0)!==0)break;if(p=n.suspendedLanes,(p&u)!==u){jn(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=Fu(ys.bind(null,n,Kn,dr),r);break}ys(n,Kn,dr);break;case 4:if(Hr(n,u),(u&4194240)===u)break;for(r=n.eventTimes,p=-1;0<u;){var R=31-De(u);_=1<<R,R=r[R],R>p&&(p=R),u&=~_}if(u=p,u=en()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*ly(u/1960))-u,10<u){n.timeoutHandle=Fu(ys.bind(null,n,Kn,dr),u);break}ys(n,Kn,dr);break;case 5:ys(n,Kn,dr);break;default:throw Error(t(329))}}}return Zn(n,en()),n.callbackNode===l?kg.bind(null,n):null}function Nd(n,r){var l=yo;return n.current.memoizedState.isDehydrated&&(_s(n,r).flags|=256),n=Wl(n,r),n!==2&&(r=Kn,Kn=l,r!==null&&Pd(r)),n}function Pd(n){Kn===null?Kn=n:Kn.push.apply(Kn,n)}function cy(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var u=0;u<l.length;u++){var p=l[u],_=p.getSnapshot;p=p.value;try{if(!wi(_(),p))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Hr(n,r){for(r&=~Td,r&=~jl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-De(r),u=1<<l;n[l]=-1,r&=~u}}function jg(n){if((Lt&6)!==0)throw Error(t(327));sa();var r=Wt(n,0);if((r&1)===0)return Zn(n,en()),null;var l=Wl(n,r);if(n.tag!==0&&l===2){var u=cn(n);u!==0&&(r=u,l=Nd(n,u))}if(l===1)throw l=_o,_s(n,0),Hr(n,r),Zn(n,en()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,ys(n,Kn,dr),Zn(n,en()),null}function Ld(n,r){var l=Lt;Lt|=1;try{return n(r)}finally{Lt=l,Lt===0&&(ra=en()+500,vl&&Ur())}}function vs(n){Br!==null&&Br.tag===0&&(Lt&6)===0&&sa();var r=Lt;Lt|=1;var l=mi.transition,u=wt;try{if(mi.transition=null,wt=1,n)return n()}finally{wt=u,mi.transition=l,Lt=r,(Lt&6)===0&&Ur()}}function Id(){si=ia.current,Kt(ia)}function _s(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,j_(l)),un!==null)for(l=un.return;l!==null;){var u=l;switch(Hu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&gl();break;case 3:ea(),Kt($n),Kt(An),td();break;case 5:Qu(u);break;case 4:ea();break;case 13:Kt(tn);break;case 19:Kt(tn);break;case 10:qu(u.type._context);break;case 22:case 23:Id()}l=l.return}if(Sn=n,un=n=Gr(n.current,null),Tn=si=r,pn=0,_o=null,Td=jl=xs=0,Kn=yo=null,ps!==null){for(r=0;r<ps.length;r++)if(l=ps[r],u=l.interleaved,u!==null){l.interleaved=null;var p=u.next,_=l.pending;if(_!==null){var R=_.next;_.next=p,u.next=R}l.pending=u}ps=null}return n}function Bg(n,r){do{var l=un;try{if($u(),Al.current=Ll,Rl){for(var u=nn.memoizedState;u!==null;){var p=u.queue;p!==null&&(p.pending=null),u=u.next}Rl=!1}if(gs=0,yn=fn=nn=null,fo=!1,po=0,wd.current=null,l===null||l.return===null){pn=1,_o=r,un=null;break}e:{var _=n,R=l.return,z=l,K=r;if(r=Tn,z.flags|=32768,K!==null&&typeof K=="object"&&typeof K.then=="function"){var pe=K,we=z,Ae=we.tag;if((we.mode&1)===0&&(Ae===0||Ae===11||Ae===15)){var be=we.alternate;be?(we.updateQueue=be.updateQueue,we.memoizedState=be.memoizedState,we.lanes=be.lanes):(we.updateQueue=null,we.memoizedState=null)}var Ve=dg(R);if(Ve!==null){Ve.flags&=-257,hg(Ve,R,z,_,r),Ve.mode&1&&ug(_,pe,r),r=Ve,K=pe;var Ye=r.updateQueue;if(Ye===null){var Ze=new Set;Ze.add(K),r.updateQueue=Ze}else Ye.add(K);break e}else{if((r&1)===0){ug(_,pe,r),Dd();break e}K=Error(t(426))}}else if(Jt&&z.mode&1){var on=dg(R);if(on!==null){(on.flags&65536)===0&&(on.flags|=256),hg(on,R,z,_,r),Wu(ta(K,z));break e}}_=K=ta(K,z),pn!==4&&(pn=2),yo===null?yo=[_]:yo.push(_),_=R;do{switch(_.tag){case 3:_.flags|=65536,r&=-r,_.lanes|=r;var oe=lg(_,K,r);Um(_,oe);break e;case 1:z=K;var te=_.type,de=_.stateNode;if((_.flags&128)===0&&(typeof te.getDerivedStateFromError=="function"||de!==null&&typeof de.componentDidCatch=="function"&&(jr===null||!jr.has(de)))){_.flags|=65536,r&=-r,_.lanes|=r;var Ie=cg(_,z,r);Um(_,Ie);break e}}_=_.return}while(_!==null)}Gg(l)}catch(et){r=et,un===l&&l!==null&&(un=l=l.return);continue}break}while(!0)}function zg(){var n=kl.current;return kl.current=Ll,n===null?Ll:n}function Dd(){(pn===0||pn===3||pn===2)&&(pn=4),Sn===null||(xs&268435455)===0&&(jl&268435455)===0||Hr(Sn,Tn)}function Wl(n,r){var l=Lt;Lt|=2;var u=zg();(Sn!==n||Tn!==r)&&(dr=null,_s(n,r));do try{uy();break}catch(p){Bg(n,p)}while(!0);if($u(),Lt=l,kl.current=u,un!==null)throw Error(t(261));return Sn=null,Tn=0,pn}function uy(){for(;un!==null;)Hg(un)}function dy(){for(;un!==null&&!du();)Hg(un)}function Hg(n){var r=Xg(n.alternate,n,si);n.memoizedProps=n.pendingProps,r===null?Gg(n):un=r,wd.current=null}function Gg(n){var r=n;do{var l=r.alternate;if(n=r.return,(r.flags&32768)===0){if(l=iy(l,r,si),l!==null){un=l;return}}else{if(l=ry(l,r),l!==null){l.flags&=32767,un=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{pn=6,un=null;return}}if(r=r.sibling,r!==null){un=r;return}un=r=n}while(r!==null);pn===0&&(pn=5)}function ys(n,r,l){var u=wt,p=mi.transition;try{mi.transition=null,wt=1,hy(n,r,l,u)}finally{mi.transition=p,wt=u}return null}function hy(n,r,l,u){do sa();while(Br!==null);if((Lt&6)!==0)throw Error(t(327));l=n.finishedWork;var p=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var _=l.lanes|l.childLanes;if(Wn(n,_),n===Sn&&(un=Sn=null,Tn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||zl||(zl=!0,$g(ne,function(){return sa(),null})),_=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||_){_=mi.transition,mi.transition=null;var R=wt;wt=1;var z=Lt;Lt|=4,wd.current=null,ay(n,l),Ig(l,n),L_(Du),nl=!!Iu,Du=Iu=null,n.current=l,oy(l),hu(),Lt=z,wt=R,mi.transition=_}else n.current=l;if(zl&&(zl=!1,Br=n,Hl=p),_=n.pendingLanes,_===0&&(jr=null),Xe(l.stateNode),Zn(n,en()),r!==null)for(u=n.onRecoverableError,l=0;l<r.length;l++)p=r[l],u(p.value,{componentStack:p.stack,digest:p.digest});if(Bl)throw Bl=!1,n=Ad,Ad=null,n;return(Hl&1)!==0&&n.tag!==0&&sa(),_=n.pendingLanes,(_&1)!==0?n===Rd?So++:(So=0,Rd=n):So=0,Ur(),null}function sa(){if(Br!==null){var n=ir(Hl),r=mi.transition,l=wt;try{if(mi.transition=null,wt=16>n?16:n,Br===null)var u=!1;else{if(n=Br,Br=null,Hl=0,(Lt&6)!==0)throw Error(t(331));var p=Lt;for(Lt|=4,qe=n.current;qe!==null;){var _=qe,R=_.child;if((qe.flags&16)!==0){var z=_.deletions;if(z!==null){for(var K=0;K<z.length;K++){var pe=z[K];for(qe=pe;qe!==null;){var we=qe;switch(we.tag){case 0:case 11:case 15:vo(8,we,_)}var Ae=we.child;if(Ae!==null)Ae.return=we,qe=Ae;else for(;qe!==null;){we=qe;var be=we.sibling,Ve=we.return;if(Ag(we),we===pe){qe=null;break}if(be!==null){be.return=Ve,qe=be;break}qe=Ve}}}var Ye=_.alternate;if(Ye!==null){var Ze=Ye.child;if(Ze!==null){Ye.child=null;do{var on=Ze.sibling;Ze.sibling=null,Ze=on}while(Ze!==null)}}qe=_}}if((_.subtreeFlags&2064)!==0&&R!==null)R.return=_,qe=R;else e:for(;qe!==null;){if(_=qe,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:vo(9,_,_.return)}var oe=_.sibling;if(oe!==null){oe.return=_.return,qe=oe;break e}qe=_.return}}var te=n.current;for(qe=te;qe!==null;){R=qe;var de=R.child;if((R.subtreeFlags&2064)!==0&&de!==null)de.return=R,qe=de;else e:for(R=te;qe!==null;){if(z=qe,(z.flags&2048)!==0)try{switch(z.tag){case 0:case 11:case 15:Ol(9,z)}}catch(et){sn(z,z.return,et)}if(z===R){qe=null;break e}var Ie=z.sibling;if(Ie!==null){Ie.return=z.return,qe=Ie;break e}qe=z.return}}if(Lt=p,Ur(),Fe&&typeof Fe.onPostCommitFiberRoot=="function")try{Fe.onPostCommitFiberRoot(le,n)}catch{}u=!0}return u}finally{wt=l,mi.transition=r}}return!1}function Vg(n,r,l){r=ta(l,r),r=lg(n,r,1),n=Or(n,r,1),r=jn(),n!==null&&(St(n,1,r),Zn(n,r))}function sn(n,r,l){if(n.tag===3)Vg(n,n,l);else for(;r!==null;){if(r.tag===3){Vg(r,n,l);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(jr===null||!jr.has(u))){n=ta(l,n),n=cg(r,n,1),r=Or(r,n,1),n=jn(),r!==null&&(St(r,1,n),Zn(r,n));break}}r=r.return}}function fy(n,r,l){var u=n.pingCache;u!==null&&u.delete(r),r=jn(),n.pingedLanes|=n.suspendedLanes&l,Sn===n&&(Tn&l)===l&&(pn===4||pn===3&&(Tn&130023424)===Tn&&500>en()-Cd?_s(n,0):Td|=l),Zn(n,r)}function Wg(n,r){r===0&&((n.mode&1)===0?r=1:(r=Je,Je<<=1,(Je&130023424)===0&&(Je=4194304)));var l=jn();n=lr(n,r),n!==null&&(St(n,r,l),Zn(n,l))}function py(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),Wg(n,l)}function my(n,r){var l=0;switch(n.tag){case 13:var u=n.stateNode,p=n.memoizedState;p!==null&&(l=p.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(r),Wg(n,l)}var Xg;Xg=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||$n.current)Yn=!0;else{if((n.lanes&l)===0&&(r.flags&128)===0)return Yn=!1,ny(n,r,l);Yn=(n.flags&131072)!==0}else Yn=!1,Jt&&(r.flags&1048576)!==0&&wm(r,yl,r.index);switch(r.lanes=0,r.tag){case 2:var u=r.type;Ul(n,r),n=r.pendingProps;var p=$s(r,An.current);Qs(r,l),p=rd(null,r,u,n,p,l);var _=sd();return r.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,qn(u)?(_=!0,xl(r)):_=!1,r.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Zu(r),p.updater=Il,r.stateNode=p,p._reactInternals=r,dd(r,u,n,l),r=md(null,r,u,!0,_,l)):(r.tag=0,Jt&&_&&zu(r),kn(null,r,p,l),r=r.child),r;case 16:u=r.elementType;e:{switch(Ul(n,r),n=r.pendingProps,p=u._init,u=p(u._payload),r.type=u,p=r.tag=xy(u),n=Ci(u,n),p){case 0:r=pd(null,r,u,n,l);break e;case 1:r=vg(null,r,u,n,l);break e;case 11:r=fg(null,r,u,n,l);break e;case 14:r=pg(null,r,u,Ci(u.type,n),l);break e}throw Error(t(306,u,""))}return r;case 0:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:Ci(u,p),pd(n,r,u,p,l);case 1:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:Ci(u,p),vg(n,r,u,p,l);case 3:e:{if(_g(r),n===null)throw Error(t(387));u=r.pendingProps,_=r.memoizedState,p=_.element,Dm(n,r),Tl(r,u,null,l);var R=r.memoizedState;if(u=R.element,_.isDehydrated)if(_={element:u,isDehydrated:!1,cache:R.cache,pendingSuspenseBoundaries:R.pendingSuspenseBoundaries,transitions:R.transitions},r.updateQueue.baseState=_,r.memoizedState=_,r.flags&256){p=ta(Error(t(423)),r),r=yg(n,r,u,l,p);break e}else if(u!==p){p=ta(Error(t(424)),r),r=yg(n,r,u,l,p);break e}else for(ri=Lr(r.stateNode.containerInfo.firstChild),ii=r,Jt=!0,Ti=null,l=Lm(r,null,u,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Ks(),u===p){r=ur(n,r,l);break e}kn(n,r,u,l)}r=r.child}return r;case 5:return Om(r),n===null&&Vu(r),u=r.type,p=r.pendingProps,_=n!==null?n.memoizedProps:null,R=p.children,Uu(u,p)?R=null:_!==null&&Uu(u,_)&&(r.flags|=32),xg(n,r),kn(n,r,R,l),r.child;case 6:return n===null&&Vu(r),null;case 13:return Sg(n,r,l);case 4:return Ju(r,r.stateNode.containerInfo),u=r.pendingProps,n===null?r.child=Zs(r,null,u,l):kn(n,r,u,l),r.child;case 11:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:Ci(u,p),fg(n,r,u,p,l);case 7:return kn(n,r,r.pendingProps,l),r.child;case 8:return kn(n,r,r.pendingProps.children,l),r.child;case 12:return kn(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(u=r.type._context,p=r.pendingProps,_=r.memoizedProps,R=p.value,Xt(El,u._currentValue),u._currentValue=R,_!==null)if(wi(_.value,R)){if(_.children===p.children&&!$n.current){r=ur(n,r,l);break e}}else for(_=r.child,_!==null&&(_.return=r);_!==null;){var z=_.dependencies;if(z!==null){R=_.child;for(var K=z.firstContext;K!==null;){if(K.context===u){if(_.tag===1){K=cr(-1,l&-l),K.tag=2;var pe=_.updateQueue;if(pe!==null){pe=pe.shared;var we=pe.pending;we===null?K.next=K:(K.next=we.next,we.next=K),pe.pending=K}}_.lanes|=l,K=_.alternate,K!==null&&(K.lanes|=l),Yu(_.return,l,r),z.lanes|=l;break}K=K.next}}else if(_.tag===10)R=_.type===r.type?null:_.child;else if(_.tag===18){if(R=_.return,R===null)throw Error(t(341));R.lanes|=l,z=R.alternate,z!==null&&(z.lanes|=l),Yu(R,l,r),R=_.sibling}else R=_.child;if(R!==null)R.return=_;else for(R=_;R!==null;){if(R===r){R=null;break}if(_=R.sibling,_!==null){_.return=R.return,R=_;break}R=R.return}_=R}kn(n,r,p.children,l),r=r.child}return r;case 9:return p=r.type,u=r.pendingProps.children,Qs(r,l),p=fi(p),u=u(p),r.flags|=1,kn(n,r,u,l),r.child;case 14:return u=r.type,p=Ci(u,r.pendingProps),p=Ci(u.type,p),pg(n,r,u,p,l);case 15:return mg(n,r,r.type,r.pendingProps,l);case 17:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:Ci(u,p),Ul(n,r),r.tag=1,qn(u)?(n=!0,xl(r)):n=!1,Qs(r,l),ag(r,u,p),dd(r,u,p,l),md(null,r,u,!0,n,l);case 19:return Eg(n,r,l);case 22:return gg(n,r,l)}throw Error(t(156,r.tag))};function $g(n,r){return Qo(n,r)}function gy(n,r,l,u){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gi(n,r,l,u){return new gy(n,r,l,u)}function Ud(n){return n=n.prototype,!(!n||!n.isReactComponent)}function xy(n){if(typeof n=="function")return Ud(n)?1:0;if(n!=null){if(n=n.$$typeof,n===J)return 11;if(n===X)return 14}return 2}function Gr(n,r){var l=n.alternate;return l===null?(l=gi(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function Xl(n,r,l,u,p,_){var R=2;if(u=n,typeof n=="function")Ud(n)&&(R=1);else if(typeof n=="string")R=5;else e:switch(n){case k:return Ss(l.children,p,_,r);case T:R=8,p|=8;break;case U:return n=gi(12,l,r,p|2),n.elementType=U,n.lanes=_,n;case H:return n=gi(13,l,r,p),n.elementType=H,n.lanes=_,n;case Q:return n=gi(19,l,r,p),n.elementType=Q,n.lanes=_,n;case V:return $l(l,p,_,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Y:R=10;break e;case G:R=9;break e;case J:R=11;break e;case X:R=14;break e;case O:R=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=gi(R,l,r,p),r.elementType=n,r.type=u,r.lanes=_,r}function Ss(n,r,l,u){return n=gi(7,n,u,r),n.lanes=l,n}function $l(n,r,l,u){return n=gi(22,n,u,r),n.elementType=V,n.lanes=l,n.stateNode={isHidden:!1},n}function Fd(n,r,l){return n=gi(6,n,null,r),n.lanes=l,n}function Od(n,r,l){return r=gi(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function vy(n,r,l,u,p){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bn(0),this.expirationTimes=bn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bn(0),this.identifierPrefix=u,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function kd(n,r,l,u,p,_,R,z,K){return n=new vy(n,r,l,z,K),r===1?(r=1,_===!0&&(r|=8)):r=0,_=gi(3,null,null,r),n.current=_,_.stateNode=n,_.memoizedState={element:u,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zu(_),n}function _y(n,r,l){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:u==null?null:""+u,children:n,containerInfo:r,implementation:l}}function qg(n){if(!n)return Dr;n=n._reactInternals;e:{if(ki(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(qn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(qn(l))return Mm(n,l,r)}return r}function Yg(n,r,l,u,p,_,R,z,K){return n=kd(l,u,!0,n,p,_,R,z,K),n.context=qg(null),l=n.current,u=jn(),p=zr(l),_=cr(u,p),_.callback=r??null,Or(l,_,p),n.current.lanes=p,St(n,p,u),Zn(n,u),n}function ql(n,r,l,u){var p=r.current,_=jn(),R=zr(p);return l=qg(l),r.context===null?r.context=l:r.pendingContext=l,r=cr(_,R),r.payload={element:n},u=u===void 0?null:u,u!==null&&(r.callback=u),n=Or(p,r,R),n!==null&&(Ni(n,p,R,_),wl(n,p,R)),R}function Yl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Kg(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function jd(n,r){Kg(n,r),(n=n.alternate)&&Kg(n,r)}function yy(){return null}var Zg=typeof reportError=="function"?reportError:function(n){console.error(n)};function Bd(n){this._internalRoot=n}Kl.prototype.render=Bd.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));ql(n,r,null,null)},Kl.prototype.unmount=Bd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;vs(function(){ql(null,n,null,null)}),r[rr]=null}};function Kl(n){this._internalRoot=n}Kl.prototype.unstable_scheduleHydration=function(n){if(n){var r=Ot();n={blockedOn:null,target:n,priority:r};for(var l=0;l<Rr.length&&r!==0&&r<Rr[l].priority;l++);Rr.splice(l,0,n),l===0&&Op(n)}};function zd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Zl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Jg(){}function Sy(n,r,l,u,p){if(p){if(typeof u=="function"){var _=u;u=function(){var pe=Yl(R);_.call(pe)}}var R=Yg(r,u,n,0,null,!1,!1,"",Jg);return n._reactRootContainer=R,n[rr]=R.current,ro(n.nodeType===8?n.parentNode:n),vs(),R}for(;p=n.lastChild;)n.removeChild(p);if(typeof u=="function"){var z=u;u=function(){var pe=Yl(K);z.call(pe)}}var K=kd(n,0,!1,null,null,!1,!1,"",Jg);return n._reactRootContainer=K,n[rr]=K.current,ro(n.nodeType===8?n.parentNode:n),vs(function(){ql(r,K,l,u)}),K}function Jl(n,r,l,u,p){var _=l._reactRootContainer;if(_){var R=_;if(typeof p=="function"){var z=p;p=function(){var K=Yl(R);z.call(K)}}ql(r,R,n,p)}else R=Sy(l,r,n,p,u);return Yl(R)}Ut=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=Nt(r.pendingLanes);l!==0&&(Xn(r,l|1),Zn(r,en()),(Lt&6)===0&&(ra=en()+500,Ur()))}break;case 13:vs(function(){var u=lr(n,1);if(u!==null){var p=jn();Ni(u,n,1,p)}}),jd(n,1)}},qt=function(n){if(n.tag===13){var r=lr(n,134217728);if(r!==null){var l=jn();Ni(r,n,134217728,l)}jd(n,134217728)}},Ei=function(n){if(n.tag===13){var r=zr(n),l=lr(n,r);if(l!==null){var u=jn();Ni(l,n,r,u)}jd(n,r)}},Ot=function(){return wt},bi=function(n,r){var l=wt;try{return wt=n,r()}finally{wt=l}},at=function(n,r,l){switch(r){case"input":if(jt(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var u=l[r];if(u!==n&&u.form===n.form){var p=ml(u);if(!p)throw Error(t(90));Et(u),jt(u,p)}}}break;case"textarea":ke(n,l);break;case"select":r=l.value,r!=null&&zt(n,!!l.multiple,r,!1)}},Le=Ld,Se=vs;var My={usingClientEntryPoint:!1,Events:[oo,Ws,ml,ve,ze,Ld]},Mo={findFiberByHostInstance:us,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ey={bundleType:Mo.bundleType,version:Mo.version,rendererPackageName:Mo.rendererPackageName,rendererConfig:Mo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:N.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ha(n),n===null?null:n.stateNode},findFiberByHostInstance:Mo.findFiberByHostInstance||yy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ql.isDisabled&&Ql.supportsFiber)try{le=Ql.inject(Ey),Fe=Ql}catch{}}return Jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=My,Jn.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zd(r))throw Error(t(200));return _y(n,r,null,l)},Jn.createRoot=function(n,r){if(!zd(n))throw Error(t(299));var l=!1,u="",p=Zg;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onRecoverableError!==void 0&&(p=r.onRecoverableError)),r=kd(n,1,!1,null,null,l,!1,u,p),n[rr]=r.current,ro(n.nodeType===8?n.parentNode:n),new Bd(r)},Jn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Ha(r),n=n===null?null:n.stateNode,n},Jn.flushSync=function(n){return vs(n)},Jn.hydrate=function(n,r,l){if(!Zl(r))throw Error(t(200));return Jl(null,n,r,!0,l)},Jn.hydrateRoot=function(n,r,l){if(!zd(n))throw Error(t(405));var u=l!=null&&l.hydratedSources||null,p=!1,_="",R=Zg;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(_=l.identifierPrefix),l.onRecoverableError!==void 0&&(R=l.onRecoverableError)),r=Yg(r,null,n,1,l??null,p,!1,_,R),n[rr]=r.current,ro(n),u)for(n=0;n<u.length;n++)l=u[n],p=l._getVersion,p=p(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,p]:r.mutableSourceEagerHydrationData.push(l,p);return new Kl(r)},Jn.render=function(n,r,l){if(!Zl(r))throw Error(t(200));return Jl(null,n,r,!1,l)},Jn.unmountComponentAtNode=function(n){if(!Zl(n))throw Error(t(40));return n._reactRootContainer?(vs(function(){Jl(null,null,n,!1,function(){n._reactRootContainer=null,n[rr]=null})}),!0):!1},Jn.unstable_batchedUpdates=Ld,Jn.unstable_renderSubtreeIntoContainer=function(n,r,l,u){if(!Zl(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Jl(n,r,l,!1,u)},Jn.version="18.3.1-next-f1338f8080-20240426",Jn}var ax;function Dy(){if(ax)return Wd.exports;ax=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Wd.exports=Iy(),Wd.exports}var ox;function Uy(){if(ox)return ec;ox=1;var i=Dy();return ec.createRoot=i.createRoot,ec.hydrateRoot=i.hydrateRoot,ec}var Fy=Uy();const Oy=F0(Fy);/**
 * react-router v7.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var lx="popstate";function ky(i={}){function e(s,a){let{pathname:c,search:d,hash:h}=s.location;return Qh("",{pathname:c,search:d,hash:h},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(s,a){return typeof a=="string"?a:zo(a)}return By(e,t,null,i)}function Qt(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}function Si(i,e){if(!i){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function jy(){return Math.random().toString(36).substring(2,10)}function cx(i,e){return{usr:i.state,key:i.key,idx:e}}function Qh(i,e,t=null,s){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof e=="string"?Da(e):e,state:t,key:e&&e.key||s||jy()}}function zo({pathname:i="/",search:e="",hash:t=""}){return e&&e!=="?"&&(i+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(i+=t.charAt(0)==="#"?t:"#"+t),i}function Da(i){let e={};if(i){let t=i.indexOf("#");t>=0&&(e.hash=i.substring(t),i=i.substring(0,t));let s=i.indexOf("?");s>=0&&(e.search=i.substring(s),i=i.substring(0,s)),i&&(e.pathname=i)}return e}function By(i,e,t,s={}){let{window:a=document.defaultView,v5Compat:c=!1}=s,d=a.history,h="POP",f=null,m=v();m==null&&(m=0,d.replaceState({...d.state,idx:m},""));function v(){return(d.state||{idx:null}).idx}function x(){h="POP";let y=v(),S=y==null?null:y-m;m=y,f&&f({action:h,location:A.location,delta:S})}function g(y,S){h="PUSH";let b=Qh(A.location,y,S);m=v()+1;let w=cx(b,m),N=A.createHref(b);try{d.pushState(w,"",N)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;a.location.assign(N)}c&&f&&f({action:h,location:A.location,delta:1})}function M(y,S){h="REPLACE";let b=Qh(A.location,y,S);m=v();let w=cx(b,m),N=A.createHref(b);d.replaceState(w,"",N),c&&f&&f({action:h,location:A.location,delta:0})}function E(y){return zy(y)}let A={get action(){return h},get location(){return i(a,d)},listen(y){if(f)throw new Error("A history only accepts one active listener");return a.addEventListener(lx,x),f=y,()=>{a.removeEventListener(lx,x),f=null}},createHref(y){return e(a,y)},createURL:E,encodeLocation(y){let S=E(y);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:g,replace:M,go(y){return d.go(y)}};return A}function zy(i,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),Qt(t,"No window.location.(origin|href) available to create URL");let s=typeof i=="string"?i:zo(i);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=t+s),new URL(s,t)}function O0(i,e,t="/"){return Hy(i,e,t,!1)}function Hy(i,e,t,s){let a=typeof e=="string"?Da(e):e,c=Mr(a.pathname||"/",t);if(c==null)return null;let d=k0(i);Gy(d);let h=null;for(let f=0;h==null&&f<d.length;++f){let m=eS(c);h=Jy(d[f],m,s)}return h}function k0(i,e=[],t=[],s="",a=!1){let c=(d,h,f=a,m)=>{let v={relativePath:m===void 0?d.path||"":m,caseSensitive:d.caseSensitive===!0,childrenIndex:h,route:d};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(s)&&f)return;Qt(v.relativePath.startsWith(s),`Absolute route path "${v.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(s.length)}let x=_r([s,v.relativePath]),g=t.concat(v);d.children&&d.children.length>0&&(Qt(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),k0(d.children,e,g,x,f)),!(d.path==null&&!d.index)&&e.push({path:x,score:Ky(x,d.index),routesMeta:g})};return i.forEach((d,h)=>{var f;if(d.path===""||!((f=d.path)!=null&&f.includes("?")))c(d,h);else for(let m of j0(d.path))c(d,h,!0,m)}),e}function j0(i){let e=i.split("/");if(e.length===0)return[];let[t,...s]=e,a=t.endsWith("?"),c=t.replace(/\?$/,"");if(s.length===0)return a?[c,""]:[c];let d=j0(s.join("/")),h=[];return h.push(...d.map(f=>f===""?c:[c,f].join("/"))),a&&h.push(...d),h.map(f=>i.startsWith("/")&&f===""?"/":f)}function Gy(i){i.sort((e,t)=>e.score!==t.score?t.score-e.score:Zy(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var Vy=/^:[\w-]+$/,Wy=3,Xy=2,$y=1,qy=10,Yy=-2,ux=i=>i==="*";function Ky(i,e){let t=i.split("/"),s=t.length;return t.some(ux)&&(s+=Yy),e&&(s+=Xy),t.filter(a=>!ux(a)).reduce((a,c)=>a+(Vy.test(c)?Wy:c===""?$y:qy),s)}function Zy(i,e){return i.length===e.length&&i.slice(0,-1).every((s,a)=>s===e[a])?i[i.length-1]-e[e.length-1]:0}function Jy(i,e,t=!1){let{routesMeta:s}=i,a={},c="/",d=[];for(let h=0;h<s.length;++h){let f=s[h],m=h===s.length-1,v=c==="/"?e:e.slice(c.length)||"/",x=$c({path:f.relativePath,caseSensitive:f.caseSensitive,end:m},v),g=f.route;if(!x&&m&&t&&!s[s.length-1].route.index&&(x=$c({path:f.relativePath,caseSensitive:f.caseSensitive,end:!1},v)),!x)return null;Object.assign(a,x.params),d.push({params:a,pathname:_r([c,x.pathname]),pathnameBase:rS(_r([c,x.pathnameBase])),route:g}),x.pathnameBase!=="/"&&(c=_r([c,x.pathnameBase]))}return d}function $c(i,e){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[t,s]=Qy(i.path,i.caseSensitive,i.end),a=e.match(t);if(!a)return null;let c=a[0],d=c.replace(/(.)\/+$/,"$1"),h=a.slice(1);return{params:s.reduce((m,{paramName:v,isOptional:x},g)=>{if(v==="*"){let E=h[g]||"";d=c.slice(0,c.length-E.length).replace(/(.)\/+$/,"$1")}const M=h[g];return x&&!M?m[v]=void 0:m[v]=(M||"").replace(/%2F/g,"/"),m},{}),pathname:c,pathnameBase:d,pattern:i}}function Qy(i,e=!1,t=!0){Si(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let s=[],a="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,h,f)=>(s.push({paramName:h,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return i.endsWith("*")?(s.push({paramName:"*"}),a+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":i!==""&&i!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),s]}function eS(i){try{return i.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Si(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),i}}function Mr(i,e){if(e==="/")return i;if(!i.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=i.charAt(t);return s&&s!=="/"?null:i.slice(t)||"/"}var B0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,tS=i=>B0.test(i);function nS(i,e="/"){let{pathname:t,search:s="",hash:a=""}=typeof i=="string"?Da(i):i,c;if(t)if(tS(t))c=t;else{if(t.includes("//")){let d=t;t=t.replace(/\/\/+/g,"/"),Si(!1,`Pathnames cannot have embedded double slashes - normalizing ${d} -> ${t}`)}t.startsWith("/")?c=dx(t.substring(1),"/"):c=dx(t,e)}else c=e;return{pathname:c,search:sS(s),hash:aS(a)}}function dx(i,e){let t=e.replace(/\/+$/,"").split("/");return i.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function qd(i,e,t,s){return`Cannot include a '${i}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function iS(i){return i.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function tp(i){let e=iS(i);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function np(i,e,t,s=!1){let a;typeof i=="string"?a=Da(i):(a={...i},Qt(!a.pathname||!a.pathname.includes("?"),qd("?","pathname","search",a)),Qt(!a.pathname||!a.pathname.includes("#"),qd("#","pathname","hash",a)),Qt(!a.search||!a.search.includes("#"),qd("#","search","hash",a)));let c=i===""||a.pathname==="",d=c?"/":a.pathname,h;if(d==null)h=t;else{let x=e.length-1;if(!s&&d.startsWith("..")){let g=d.split("/");for(;g[0]==="..";)g.shift(),x-=1;a.pathname=g.join("/")}h=x>=0?e[x]:"/"}let f=nS(a,h),m=d&&d!=="/"&&d.endsWith("/"),v=(c||d===".")&&t.endsWith("/");return!f.pathname.endsWith("/")&&(m||v)&&(f.pathname+="/"),f}var _r=i=>i.join("/").replace(/\/\/+/g,"/"),rS=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),sS=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,aS=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i,oS=class{constructor(i,e,t,s=!1){this.status=i,this.statusText=e||"",this.internal=s,t instanceof Error?(this.data=t.toString(),this.error=t):this.data=t}};function lS(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}function cS(i){return i.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var z0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function H0(i,e){let t=i;if(typeof t!="string"||!B0.test(t))return{absoluteURL:void 0,isExternal:!1,to:t};let s=t,a=!1;if(z0)try{let c=new URL(window.location.href),d=t.startsWith("//")?new URL(c.protocol+t):new URL(t),h=Mr(d.pathname,e);d.origin===c.origin&&h!=null?t=h+d.search+d.hash:a=!0}catch{Si(!1,`<Link to="${t}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:a,to:t}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var G0=["POST","PUT","PATCH","DELETE"];new Set(G0);var uS=["GET",...G0];new Set(uS);var Ua=j.createContext(null);Ua.displayName="DataRouter";var su=j.createContext(null);su.displayName="DataRouterState";var dS=j.createContext(!1),V0=j.createContext({isTransitioning:!1});V0.displayName="ViewTransition";var hS=j.createContext(new Map);hS.displayName="Fetchers";var fS=j.createContext(null);fS.displayName="Await";var ci=j.createContext(null);ci.displayName="Navigation";var Xo=j.createContext(null);Xo.displayName="Location";var er=j.createContext({outlet:null,matches:[],isDataRoute:!1});er.displayName="Route";var ip=j.createContext(null);ip.displayName="RouteError";var W0="REACT_ROUTER_ERROR",pS="REDIRECT",mS="ROUTE_ERROR_RESPONSE";function gS(i){if(i.startsWith(`${W0}:${pS}:{`))try{let e=JSON.parse(i.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function xS(i){if(i.startsWith(`${W0}:${mS}:{`))try{let e=JSON.parse(i.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new oS(e.status,e.statusText,e.data)}catch{}}function vS(i,{relative:e}={}){Qt(Fa(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=j.useContext(ci),{hash:a,pathname:c,search:d}=$o(i,{relative:e}),h=c;return t!=="/"&&(h=c==="/"?t:_r([t,c])),s.createHref({pathname:h,search:d,hash:a})}function Fa(){return j.useContext(Xo)!=null}function Oi(){return Qt(Fa(),"useLocation() may be used only in the context of a <Router> component."),j.useContext(Xo).location}var X0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function $0(i){j.useContext(ci).static||j.useLayoutEffect(i)}function Is(){let{isDataRoute:i}=j.useContext(er);return i?PS():_S()}function _S(){Qt(Fa(),"useNavigate() may be used only in the context of a <Router> component.");let i=j.useContext(Ua),{basename:e,navigator:t}=j.useContext(ci),{matches:s}=j.useContext(er),{pathname:a}=Oi(),c=JSON.stringify(tp(s)),d=j.useRef(!1);return $0(()=>{d.current=!0}),j.useCallback((f,m={})=>{if(Si(d.current,X0),!d.current)return;if(typeof f=="number"){t.go(f);return}let v=np(f,JSON.parse(c),a,m.relative==="path");i==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:_r([e,v.pathname])),(m.replace?t.replace:t.push)(v,m.state,m)},[e,t,c,a,i])}j.createContext(null);function $o(i,{relative:e}={}){let{matches:t}=j.useContext(er),{pathname:s}=Oi(),a=JSON.stringify(tp(t));return j.useMemo(()=>np(i,JSON.parse(a),s,e==="path"),[i,a,s,e])}function yS(i,e){return q0(i,e)}function q0(i,e,t,s,a){var b;Qt(Fa(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=j.useContext(ci),{matches:d}=j.useContext(er),h=d[d.length-1],f=h?h.params:{},m=h?h.pathname:"/",v=h?h.pathnameBase:"/",x=h&&h.route;{let w=x&&x.path||"";K0(m,!x||w.endsWith("*")||w.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${w}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${w}"> to <Route path="${w==="/"?"*":`${w}/*`}">.`)}let g=Oi(),M;if(e){let w=typeof e=="string"?Da(e):e;Qt(v==="/"||((b=w.pathname)==null?void 0:b.startsWith(v)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${w.pathname}" was given in the \`location\` prop.`),M=w}else M=g;let E=M.pathname||"/",A=E;if(v!=="/"){let w=v.replace(/^\//,"").split("/");A="/"+E.replace(/^\//,"").split("/").slice(w.length).join("/")}let y=O0(i,{pathname:A});Si(x||y!=null,`No routes matched location "${M.pathname}${M.search}${M.hash}" `),Si(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let S=wS(y&&y.map(w=>Object.assign({},w,{params:Object.assign({},f,w.params),pathname:_r([v,c.encodeLocation?c.encodeLocation(w.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?v:_r([v,c.encodeLocation?c.encodeLocation(w.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:w.pathnameBase])})),d,t,s,a);return e&&S?j.createElement(Xo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...M},navigationType:"POP"}},S):S}function SS(){let i=NS(),e=lS(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),t=i instanceof Error?i.stack:null,s="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:s},c={padding:"2px 4px",backgroundColor:s},d=null;return console.error("Error handled by React Router default ErrorBoundary:",i),d=j.createElement(j.Fragment,null,j.createElement("p",null,"💿 Hey developer 👋"),j.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",j.createElement("code",{style:c},"ErrorBoundary")," or"," ",j.createElement("code",{style:c},"errorElement")," prop on your route.")),j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},e),t?j.createElement("pre",{style:a},t):null,d)}var MS=j.createElement(SS,null),Y0=class extends j.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,e){return e.location!==i.location||e.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:e.error,location:e.location,revalidation:i.revalidation||e.revalidation}}componentDidCatch(i,e){this.props.onError?this.props.onError(i,e):console.error("React Router caught the following error during render",i)}render(){let i=this.state.error;if(this.context&&typeof i=="object"&&i&&"digest"in i&&typeof i.digest=="string"){const t=xS(i.digest);t&&(i=t)}let e=i!==void 0?j.createElement(er.Provider,{value:this.props.routeContext},j.createElement(ip.Provider,{value:i,children:this.props.component})):this.props.children;return this.context?j.createElement(ES,{error:i},e):e}};Y0.contextType=dS;var Yd=new WeakMap;function ES({children:i,error:e}){let{basename:t}=j.useContext(ci);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let s=gS(e.digest);if(s){let a=Yd.get(e);if(a)throw a;let c=H0(s.location,t);if(z0&&!Yd.get(e))if(c.isExternal||s.reloadDocument)window.location.href=c.absoluteURL||c.to;else{const d=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:s.replace}));throw Yd.set(e,d),d}return j.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c.absoluteURL||c.to}`})}}return i}function bS({routeContext:i,match:e,children:t}){let s=j.useContext(Ua);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),j.createElement(er.Provider,{value:i},t)}function wS(i,e=[],t=null,s=null,a=null){if(i==null){if(!t)return null;if(t.errors)i=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)i=t.matches;else return null}let c=i,d=t==null?void 0:t.errors;if(d!=null){let v=c.findIndex(x=>x.route.id&&(d==null?void 0:d[x.route.id])!==void 0);Qt(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),c=c.slice(0,Math.min(c.length,v+1))}let h=!1,f=-1;if(t)for(let v=0;v<c.length;v++){let x=c[v];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(f=v),x.route.id){let{loaderData:g,errors:M}=t,E=x.route.loader&&!g.hasOwnProperty(x.route.id)&&(!M||M[x.route.id]===void 0);if(x.route.lazy||E){h=!0,f>=0?c=c.slice(0,f+1):c=[c[0]];break}}}let m=t&&s?(v,x)=>{var g,M;s(v,{location:t.location,params:((M=(g=t.matches)==null?void 0:g[0])==null?void 0:M.params)??{},unstable_pattern:cS(t.matches),errorInfo:x})}:void 0;return c.reduceRight((v,x,g)=>{let M,E=!1,A=null,y=null;t&&(M=d&&x.route.id?d[x.route.id]:void 0,A=x.route.errorElement||MS,h&&(f<0&&g===0?(K0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,y=null):f===g&&(E=!0,y=x.route.hydrateFallbackElement||null)));let S=e.concat(c.slice(0,g+1)),b=()=>{let w;return M?w=A:E?w=y:x.route.Component?w=j.createElement(x.route.Component,null):x.route.element?w=x.route.element:w=v,j.createElement(bS,{match:x,routeContext:{outlet:v,matches:S,isDataRoute:t!=null},children:w})};return t&&(x.route.ErrorBoundary||x.route.errorElement||g===0)?j.createElement(Y0,{location:t.location,revalidation:t.revalidation,component:A,error:M,children:b(),routeContext:{outlet:null,matches:S,isDataRoute:!0},onError:m}):b()},null)}function rp(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function TS(i){let e=j.useContext(Ua);return Qt(e,rp(i)),e}function CS(i){let e=j.useContext(su);return Qt(e,rp(i)),e}function AS(i){let e=j.useContext(er);return Qt(e,rp(i)),e}function sp(i){let e=AS(i),t=e.matches[e.matches.length-1];return Qt(t.route.id,`${i} can only be used on routes that contain a unique "id"`),t.route.id}function RS(){return sp("useRouteId")}function NS(){var s;let i=j.useContext(ip),e=CS("useRouteError"),t=sp("useRouteError");return i!==void 0?i:(s=e.errors)==null?void 0:s[t]}function PS(){let{router:i}=TS("useNavigate"),e=sp("useNavigate"),t=j.useRef(!1);return $0(()=>{t.current=!0}),j.useCallback(async(a,c={})=>{Si(t.current,X0),t.current&&(typeof a=="number"?await i.navigate(a):await i.navigate(a,{fromRouteId:e,...c}))},[i,e])}var hx={};function K0(i,e,t){!e&&!hx[i]&&(hx[i]=!0,Si(!1,t))}j.memo(LS);function LS({routes:i,future:e,state:t,onError:s}){return q0(i,void 0,t,s,e)}function Jr({to:i,replace:e,state:t,relative:s}){Qt(Fa(),"<Navigate> may be used only in the context of a <Router> component.");let{static:a}=j.useContext(ci);Si(!a,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:c}=j.useContext(er),{pathname:d}=Oi(),h=Is(),f=np(i,tp(c),d,s==="path"),m=JSON.stringify(f);return j.useEffect(()=>{h(JSON.parse(m),{replace:e,state:t,relative:s})},[h,m,s,e,t]),null}function ln(i){Qt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function IS({basename:i="/",children:e=null,location:t,navigationType:s="POP",navigator:a,static:c=!1,unstable_useTransitions:d}){Qt(!Fa(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=i.replace(/^\/*/,"/"),f=j.useMemo(()=>({basename:h,navigator:a,static:c,unstable_useTransitions:d,future:{}}),[h,a,c,d]);typeof t=="string"&&(t=Da(t));let{pathname:m="/",search:v="",hash:x="",state:g=null,key:M="default"}=t,E=j.useMemo(()=>{let A=Mr(m,h);return A==null?null:{location:{pathname:A,search:v,hash:x,state:g,key:M},navigationType:s}},[h,m,v,x,g,M,s]);return Si(E!=null,`<Router basename="${h}"> is not able to match the URL "${m}${v}${x}" because it does not start with the basename, so the <Router> won't render anything.`),E==null?null:j.createElement(ci.Provider,{value:f},j.createElement(Xo.Provider,{children:e,value:E}))}function DS({children:i,location:e}){return yS(ef(i),e)}function ef(i,e=[]){let t=[];return j.Children.forEach(i,(s,a)=>{if(!j.isValidElement(s))return;let c=[...e,a];if(s.type===j.Fragment){t.push.apply(t,ef(s.props.children,c));return}Qt(s.type===ln,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Qt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let d={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(d.children=ef(s.props.children,c)),t.push(d)}),t}var Fc="get",Oc="application/x-www-form-urlencoded";function au(i){return typeof HTMLElement<"u"&&i instanceof HTMLElement}function US(i){return au(i)&&i.tagName.toLowerCase()==="button"}function FS(i){return au(i)&&i.tagName.toLowerCase()==="form"}function OS(i){return au(i)&&i.tagName.toLowerCase()==="input"}function kS(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function jS(i,e){return i.button===0&&(!e||e==="_self")&&!kS(i)}var tc=null;function BS(){if(tc===null)try{new FormData(document.createElement("form"),0),tc=!1}catch{tc=!0}return tc}var zS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Kd(i){return i!=null&&!zS.has(i)?(Si(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Oc}"`),null):i}function HS(i,e){let t,s,a,c,d;if(FS(i)){let h=i.getAttribute("action");s=h?Mr(h,e):null,t=i.getAttribute("method")||Fc,a=Kd(i.getAttribute("enctype"))||Oc,c=new FormData(i)}else if(US(i)||OS(i)&&(i.type==="submit"||i.type==="image")){let h=i.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let f=i.getAttribute("formaction")||h.getAttribute("action");if(s=f?Mr(f,e):null,t=i.getAttribute("formmethod")||h.getAttribute("method")||Fc,a=Kd(i.getAttribute("formenctype"))||Kd(h.getAttribute("enctype"))||Oc,c=new FormData(h,i),!BS()){let{name:m,type:v,value:x}=i;if(v==="image"){let g=m?`${m}.`:"";c.append(`${g}x`,"0"),c.append(`${g}y`,"0")}else m&&c.append(m,x)}}else{if(au(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Fc,s=null,a=Oc,d=i}return c&&a==="text/plain"&&(d=c,c=void 0),{action:s,method:t.toLowerCase(),encType:a,formData:c,body:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function ap(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}function GS(i,e,t){let s=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return s.pathname==="/"?s.pathname=`_root.${t}`:e&&Mr(s.pathname,e)==="/"?s.pathname=`${e.replace(/\/$/,"")}/_root.${t}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${t}`,s}async function VS(i,e){if(i.id in e)return e[i.id];try{let t=await import(i.module);return e[i.id]=t,t}catch(t){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function WS(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function XS(i,e,t){let s=await Promise.all(i.map(async a=>{let c=e.routes[a.route.id];if(c){let d=await VS(c,t);return d.links?d.links():[]}return[]}));return KS(s.flat(1).filter(WS).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function fx(i,e,t,s,a,c){let d=(f,m)=>t[m]?f.route.id!==t[m].route.id:!0,h=(f,m)=>{var v;return t[m].pathname!==f.pathname||((v=t[m].route.path)==null?void 0:v.endsWith("*"))&&t[m].params["*"]!==f.params["*"]};return c==="assets"?e.filter((f,m)=>d(f,m)||h(f,m)):c==="data"?e.filter((f,m)=>{var x;let v=s.routes[f.route.id];if(!v||!v.hasLoader)return!1;if(d(f,m)||h(f,m))return!0;if(f.route.shouldRevalidate){let g=f.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((x=t[0])==null?void 0:x.params)||{},nextUrl:new URL(i,window.origin),nextParams:f.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function $S(i,e,{includeHydrateFallback:t}={}){return qS(i.map(s=>{let a=e.routes[s.route.id];if(!a)return[];let c=[a.module];return a.clientActionModule&&(c=c.concat(a.clientActionModule)),a.clientLoaderModule&&(c=c.concat(a.clientLoaderModule)),t&&a.hydrateFallbackModule&&(c=c.concat(a.hydrateFallbackModule)),a.imports&&(c=c.concat(a.imports)),c}).flat(1))}function qS(i){return[...new Set(i)]}function YS(i){let e={},t=Object.keys(i).sort();for(let s of t)e[s]=i[s];return e}function KS(i,e){let t=new Set;return new Set(e),i.reduce((s,a)=>{let c=JSON.stringify(YS(a));return t.has(c)||(t.add(c),s.push({key:c,link:a})),s},[])}function Z0(){let i=j.useContext(Ua);return ap(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function ZS(){let i=j.useContext(su);return ap(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var op=j.createContext(void 0);op.displayName="FrameworkContext";function J0(){let i=j.useContext(op);return ap(i,"You must render this element inside a <HydratedRouter> element"),i}function JS(i,e){let t=j.useContext(op),[s,a]=j.useState(!1),[c,d]=j.useState(!1),{onFocus:h,onBlur:f,onMouseEnter:m,onMouseLeave:v,onTouchStart:x}=e,g=j.useRef(null);j.useEffect(()=>{if(i==="render"&&d(!0),i==="viewport"){let A=S=>{S.forEach(b=>{d(b.isIntersecting)})},y=new IntersectionObserver(A,{threshold:.5});return g.current&&y.observe(g.current),()=>{y.disconnect()}}},[i]),j.useEffect(()=>{if(s){let A=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(A)}}},[s]);let M=()=>{a(!0)},E=()=>{a(!1),d(!1)};return t?i!=="intent"?[c,g,{}]:[c,g,{onFocus:bo(h,M),onBlur:bo(f,E),onMouseEnter:bo(m,M),onMouseLeave:bo(v,E),onTouchStart:bo(x,M)}]:[!1,g,{}]}function bo(i,e){return t=>{i&&i(t),t.defaultPrevented||e(t)}}function QS({page:i,...e}){let{router:t}=Z0(),s=j.useMemo(()=>O0(t.routes,i,t.basename),[t.routes,i,t.basename]);return s?j.createElement(tM,{page:i,matches:s,...e}):null}function eM(i){let{manifest:e,routeModules:t}=J0(),[s,a]=j.useState([]);return j.useEffect(()=>{let c=!1;return XS(i,e,t).then(d=>{c||a(d)}),()=>{c=!0}},[i,e,t]),s}function tM({page:i,matches:e,...t}){let s=Oi(),{manifest:a,routeModules:c}=J0(),{basename:d}=Z0(),{loaderData:h,matches:f}=ZS(),m=j.useMemo(()=>fx(i,e,f,a,s,"data"),[i,e,f,a,s]),v=j.useMemo(()=>fx(i,e,f,a,s,"assets"),[i,e,f,a,s]),x=j.useMemo(()=>{if(i===s.pathname+s.search+s.hash)return[];let E=new Set,A=!1;if(e.forEach(S=>{var w;let b=a.routes[S.route.id];!b||!b.hasLoader||(!m.some(N=>N.route.id===S.route.id)&&S.route.id in h&&((w=c[S.route.id])!=null&&w.shouldRevalidate)||b.hasClientLoader?A=!0:E.add(S.route.id))}),E.size===0)return[];let y=GS(i,d,"data");return A&&E.size>0&&y.searchParams.set("_routes",e.filter(S=>E.has(S.route.id)).map(S=>S.route.id).join(",")),[y.pathname+y.search]},[d,h,s,a,m,e,i,c]),g=j.useMemo(()=>$S(v,a),[v,a]),M=eM(v);return j.createElement(j.Fragment,null,x.map(E=>j.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...t})),g.map(E=>j.createElement("link",{key:E,rel:"modulepreload",href:E,...t})),M.map(({key:E,link:A})=>j.createElement("link",{key:E,nonce:t.nonce,...A})))}function nM(...i){return e=>{i.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var iM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{iM&&(window.__reactRouterVersion="7.11.0")}catch{}function rM({basename:i,children:e,unstable_useTransitions:t,window:s}){let a=j.useRef();a.current==null&&(a.current=ky({window:s,v5Compat:!0}));let c=a.current,[d,h]=j.useState({action:c.action,location:c.location}),f=j.useCallback(m=>{t===!1?h(m):j.startTransition(()=>h(m))},[t]);return j.useLayoutEffect(()=>c.listen(f),[c,f]),j.createElement(IS,{basename:i,children:e,location:d.location,navigationType:d.action,navigator:c,unstable_useTransitions:t})}var Q0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,lp=j.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:a,reloadDocument:c,replace:d,state:h,target:f,to:m,preventScrollReset:v,viewTransition:x,unstable_defaultShouldRevalidate:g,...M},E){let{basename:A,unstable_useTransitions:y}=j.useContext(ci),S=typeof m=="string"&&Q0.test(m),b=H0(m,A);m=b.to;let w=vS(m,{relative:a}),[N,I,L]=JS(s,M),k=lM(m,{replace:d,state:h,target:f,preventScrollReset:v,relative:a,viewTransition:x,unstable_defaultShouldRevalidate:g,unstable_useTransitions:y});function T(Y){e&&e(Y),Y.defaultPrevented||k(Y)}let U=j.createElement("a",{...M,...L,href:b.absoluteURL||w,onClick:b.isExternal||c?e:T,ref:nM(E,I),target:f,"data-discover":!S&&t==="render"?"true":void 0});return N&&!S?j.createElement(j.Fragment,null,U,j.createElement(QS,{page:w})):U});lp.displayName="Link";var sM=j.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:a=!1,style:c,to:d,viewTransition:h,children:f,...m},v){let x=$o(d,{relative:m.relative}),g=Oi(),M=j.useContext(su),{navigator:E,basename:A}=j.useContext(ci),y=M!=null&&fM(x)&&h===!0,S=E.encodeLocation?E.encodeLocation(x).pathname:x.pathname,b=g.pathname,w=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;t||(b=b.toLowerCase(),w=w?w.toLowerCase():null,S=S.toLowerCase()),w&&A&&(w=Mr(w,A)||w);const N=S!=="/"&&S.endsWith("/")?S.length-1:S.length;let I=b===S||!a&&b.startsWith(S)&&b.charAt(N)==="/",L=w!=null&&(w===S||!a&&w.startsWith(S)&&w.charAt(S.length)==="/"),k={isActive:I,isPending:L,isTransitioning:y},T=I?e:void 0,U;typeof s=="function"?U=s(k):U=[s,I?"active":null,L?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let Y=typeof c=="function"?c(k):c;return j.createElement(lp,{...m,"aria-current":T,className:U,ref:v,style:Y,to:d,viewTransition:h},typeof f=="function"?f(k):f)});sM.displayName="NavLink";var aM=j.forwardRef(({discover:i="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:a,state:c,method:d=Fc,action:h,onSubmit:f,relative:m,preventScrollReset:v,viewTransition:x,unstable_defaultShouldRevalidate:g,...M},E)=>{let{unstable_useTransitions:A}=j.useContext(ci),y=dM(),S=hM(h,{relative:m}),b=d.toLowerCase()==="get"?"get":"post",w=typeof h=="string"&&Q0.test(h),N=I=>{if(f&&f(I),I.defaultPrevented)return;I.preventDefault();let L=I.nativeEvent.submitter,k=(L==null?void 0:L.getAttribute("formmethod"))||d,T=()=>y(L||I.currentTarget,{fetcherKey:e,method:k,navigate:t,replace:a,state:c,relative:m,preventScrollReset:v,viewTransition:x,unstable_defaultShouldRevalidate:g});A&&t!==!1?j.startTransition(()=>T()):T()};return j.createElement("form",{ref:E,method:b,action:S,onSubmit:s?f:N,...M,"data-discover":!w&&i==="render"?"true":void 0})});aM.displayName="Form";function oM(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ev(i){let e=j.useContext(Ua);return Qt(e,oM(i)),e}function lM(i,{target:e,replace:t,state:s,preventScrollReset:a,relative:c,viewTransition:d,unstable_defaultShouldRevalidate:h,unstable_useTransitions:f}={}){let m=Is(),v=Oi(),x=$o(i,{relative:c});return j.useCallback(g=>{if(jS(g,e)){g.preventDefault();let M=t!==void 0?t:zo(v)===zo(x),E=()=>m(i,{replace:M,state:s,preventScrollReset:a,relative:c,viewTransition:d,unstable_defaultShouldRevalidate:h});f?j.startTransition(()=>E()):E()}},[v,m,x,t,s,e,i,a,c,d,h,f])}var cM=0,uM=()=>`__${String(++cM)}__`;function dM(){let{router:i}=ev("useSubmit"),{basename:e}=j.useContext(ci),t=RS(),s=i.fetch,a=i.navigate;return j.useCallback(async(c,d={})=>{let{action:h,method:f,encType:m,formData:v,body:x}=HS(c,e);if(d.navigate===!1){let g=d.fetcherKey||uM();await s(g,t,d.action||h,{unstable_defaultShouldRevalidate:d.unstable_defaultShouldRevalidate,preventScrollReset:d.preventScrollReset,formData:v,body:x,formMethod:d.method||f,formEncType:d.encType||m,flushSync:d.flushSync})}else await a(d.action||h,{unstable_defaultShouldRevalidate:d.unstable_defaultShouldRevalidate,preventScrollReset:d.preventScrollReset,formData:v,body:x,formMethod:d.method||f,formEncType:d.encType||m,replace:d.replace,state:d.state,fromRouteId:t,flushSync:d.flushSync,viewTransition:d.viewTransition})},[s,a,e,t])}function hM(i,{relative:e}={}){let{basename:t}=j.useContext(ci),s=j.useContext(er);Qt(s,"useFormAction must be used inside a RouteContext");let[a]=s.matches.slice(-1),c={...$o(i||".",{relative:e})},d=Oi();if(i==null){c.search=d.search;let h=new URLSearchParams(c.search),f=h.getAll("index");if(f.some(v=>v==="")){h.delete("index"),f.filter(x=>x).forEach(x=>h.append("index",x));let v=h.toString();c.search=v?`?${v}`:""}}return(!i||i===".")&&a.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(c.pathname=c.pathname==="/"?t:_r([t,c.pathname])),zo(c)}function fM(i,{relative:e}={}){let t=j.useContext(V0);Qt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=ev("useViewTransitionState"),a=$o(i,{relative:e});if(!t.isTransitioning)return!1;let c=Mr(t.currentLocation.pathname,s)||t.currentLocation.pathname,d=Mr(t.nextLocation.pathname,s)||t.nextLocation.pathname;return $c(a.pathname,d)!=null||$c(a.pathname,c)!=null}const tf={baseURL:"https://resplendent-commitment-production-1d46.up.railway.app/api/v1",timeout:1e4,headers:{"Content-Type":"application/json"}};class ba extends Error{constructor(t,s,a){super(t);Hd(this,"status");Hd(this,"details");this.name="ApiError",this.status=s,this.details=a}}function pM(i,e){if(!e)return i;const t=new URLSearchParams;Object.entries(e).forEach(([a,c])=>{c==null||c===""||t.append(a,String(c))});const s=t.toString();return s?`${i}?${s}`:i}function mM(i){if(/^https?:\/\//.test(i))return i;const e=tf.baseURL.replace(/\/$/,""),t=i.startsWith("/")?i:`/${i}`;return`${e}${t}`}async function Ta(i,e={}){var a,c;const t=new AbortController,s=setTimeout(()=>t.abort(),tf.timeout);try{const d=mM(pM(i,e.query)),h=await fetch(d,{method:e.method||"GET",cache:"no-store",headers:{...tf.headers,"Cache-Control":"no-store",Pragma:"no-cache",...e.authToken?{Authorization:`Bearer ${e.authToken}`}:{},...e.headers},body:e.body?JSON.stringify(e.body):void 0,signal:t.signal}),v=(h.headers.get("content-type")||"").includes("application/json")?await h.json():null;if(!h.ok){const x=((a=v==null?void 0:v.error)==null?void 0:a.message)||`HTTP ${h.status}`;throw new ba(x,h.status,(c=v==null?void 0:v.error)==null?void 0:c.details)}if(!v||!v.ok)throw new ba("Invalid API response format",h.status);return v.data}catch(d){throw d instanceof ba?d:d instanceof DOMException&&d.name==="AbortError"?new ba("Request timeout",408):new ba(d.message||"Network error",500)}finally{clearTimeout(s)}}const cp="mboalink.accessToken",up="mboalink.refreshToken",Ho="mboalink.user";function qo(){return typeof window<"u"&&!!window.localStorage}function gM(i){const e=i.replace(/-/g,"+").replace(/_/g,"/"),t=e.padEnd(e.length+(4-e.length%4)%4,"=");return atob(t)}function px(){const i=qc();if(!i)return null;try{const e=JSON.parse(gM(i.split(".")[1]||""));if(e.exp&&e.exp*1e3<Date.now()||!e.sub||!e.email)return null;const t={id:e.sub,email:e.email,name:e.fullName,fullName:e.fullName,role:e.role,hotelId:e.hotelId||null};return localStorage.setItem(Ho,JSON.stringify(t)),t}catch{return null}}function kc(i){qo()&&(localStorage.setItem(cp,i.accessToken),localStorage.setItem(up,i.refreshToken),localStorage.setItem(Ho,JSON.stringify(i.user)))}function tv(){qo()&&(localStorage.removeItem(cp),localStorage.removeItem(up),localStorage.removeItem(Ho))}function qc(){return qo()?localStorage.getItem(cp):null}function nf(){return qo()?localStorage.getItem(up):null}function dp(){if(!qo())return null;const i=localStorage.getItem(Ho);if(!i)return px();try{return JSON.parse(i)}catch{return localStorage.removeItem(Ho),px()}}function Zd(i){return{id:i.id||i.sub||"",email:i.email,name:i.fullName,fullName:i.fullName,role:i.role,hotelId:i.hotelId||null}}const Mi={async login(i){const e=await Ta("/auth/login",{method:"POST",body:i});if("mfaRequired"in e&&e.mfaRequired)return e;const t=Zd(e.user);return kc({accessToken:e.accessToken,refreshToken:e.refreshToken,user:t}),{mfaRequired:!1,user:t}},async verifyMfa(i,e){const t=await Ta("/auth/mfa/verify",{method:"POST",body:{email:i,code:e}}),s=Zd(t.user);return kc({accessToken:t.accessToken,refreshToken:t.refreshToken,user:s}),s},async me(){const i=qc();if(!i)throw new Error("Not authenticated");const e=await Ta("/auth/me",{authToken:i}),t=Zd(e);return kc({accessToken:i,refreshToken:nf()||"",user:t}),t},getAccessToken:qc,getRefreshToken:nf,getStoredUser:dp,async logout(){tv()}};async function xM(){const i=nf();if(!i)return null;try{const e=await Ta("/auth/refresh",{method:"POST",body:{refreshToken:i}}),t=dp();return t?(kc({accessToken:e.accessToken,refreshToken:i,user:t}),e.accessToken):null}catch{return tv(),null}}async function Mt(i,e){const t=qc();if(!t)throw new Error("Session expirée. Veuillez vous reconnecter.");try{return await Ta(i,{method:e==null?void 0:e.method,body:e==null?void 0:e.body,query:e==null?void 0:e.query,authToken:t})}catch(s){if(!(s instanceof ba)||s.status!==401)throw s;const a=await xM();if(!a)throw new Error("Session expirée. Veuillez vous reconnecter.");return Ta(i,{method:e==null?void 0:e.method,body:e==null?void 0:e.body,query:e==null?void 0:e.query,authToken:a})}}const nt={listHotels(i){return Mt("/hotels",{query:i})},createHotel(i){return Mt("/hotels",{method:"POST",body:i})},updateHotel(i,e){return Mt(`/hotels/${i}`,{method:"PATCH",body:e})},deleteHotel(i){return Mt(`/hotels/${i}`,{method:"DELETE"})},listRooms(i){return Mt("/rooms",{query:i})},createRoom(i,e){return Mt(`/hotels/${i}/rooms`,{method:"POST",body:e})},updateRoom(i,e){return Mt(`/rooms/${i}`,{method:"PATCH",body:e})},deleteRoom(i){return Mt(`/rooms/${i}`,{method:"DELETE"})},listWifiConfigs(i){return Mt("/wifi-configs",{query:i})},upsertWifiConfig(i,e){return Mt(`/hotels/${i}/wifi-config`,{method:"PUT",body:e})},listGuestPasses(i){return Mt("/guest-passes",{query:i})},createGuestPass(i){return Mt("/guest-passes",{method:"POST",body:i})},createGuestPassesBulk(i){return Mt("/guest-passes/bulk",{method:"POST",body:i})},revokeGuestPass(i){return Mt(`/guest-passes/${i}/revoke`,{method:"PATCH"})},deleteGuestPass(i){return Mt(`/guest-passes/${i}`,{method:"DELETE"})},listLoginSessions(i){return Mt("/login-sessions",{query:i})},createManualLogin(i){return Mt("/login-sessions/manual",{method:"POST",body:i})},updateLoginSession(i,e){return Mt(`/login-sessions/${i}`,{method:"PATCH",body:e})},listClearedAddresses(i){return Mt("/cleared-addresses",{query:i})},createClearedAddress(i){return Mt("/cleared-addresses",{method:"POST",body:i})},deleteClearedAddresses(i){return Mt("/cleared-addresses",{method:"DELETE",body:{ids:i}})},getGuestConfig(i){return Mt(`/hotels/${i}/guest-config`)},upsertGuestConfig(i){return Mt("/guest-config",{method:"PUT",body:i})},listDevices(i){return Mt("/devices",{query:i})},createDevice(i){return Mt("/devices",{method:"POST",body:i})},updateDevice(i,e){return Mt(`/devices/${i}`,{method:"PATCH",body:e})},restartDevice(i){return Mt(`/devices/${i}/restart`,{method:"POST"})},listDeviceMetrics(i,e){return Mt(`/devices/${i}/metrics`,{query:e})},getDashboardOverview(i){return Mt("/dashboard/overview",{query:i})},listUsers(i){return Mt("/users",{query:i})},createUser(i){return Mt("/users",{method:"POST",body:i})},updateUser(i,e){return Mt(`/users/${i}`,{method:"PATCH",body:e})},deactivateUser(i){return Mt(`/users/${i}/deactivate`,{method:"PATCH"})},listNotificationRecipients(){return Mt("/notifications/recipients")},listNotificationsInbox(i){return Mt("/notifications/inbox",{query:i})},listSentNotifications(){return Mt("/notifications/sent")},getUnreadNotificationCount(){return Mt("/notifications/unread-count")},createNotification(i){return Mt("/notifications",{method:"POST",body:i})},markNotificationRead(i){return Mt(`/notifications/${i}/read`,{method:"PATCH"})}},st={public:{home:"/home",dashboard:"/dashboard",networkMap:"/dashboard/network-map",login:"/login",mfa:"/mfa",register:"/register",forgotPassword:"/forgot-password",wifiCode:"/logins/wifi-code",loginByAddress:"/logins/login-by-address",statusLogins:"/logins/status-logins",manualLogin:"/logins/manual-login",websitesManager:"/logins/websites-manager",configCode:"/logins/config-code",hotels:"/hotel-manager/hotels",rooms:"/hotel-manager/rooms",configWifi:"/hotel-manager/config-wifi",devices:"/device-manager/devices",adminMboa:"/admin-mboa",users:"/admin/users",notifications:"/notifications"},protected:{dashboard:"/dashboard",profile:"/profile",settings:"/settings"},admin:{users:"/admin/users",settings:"/admin/settings"}},hp="/assets/mboalink-logo-navbar-CXxN8FJp.png";function vM(){const i=Is(),e=Oi(),[t,s]=j.useState(""),[a,c]=j.useState(""),[d,h]=j.useState(!1),[f,m]=j.useState(""),v=async x=>{var g;x.preventDefault(),h(!0),m("");try{const M=await Mi.login({email:t,password:a});if(M.mfaRequired)i(st.public.mfa,{state:{email:M.email}});else{const E=new URLSearchParams(e.search).get("redirect"),A=(g=M.user)==null?void 0:g.role,y=A==="ADMIN"?st.public.adminMboa:A==="RECEPTIONIST"?st.public.manualLogin:["SUPPORT","HOTEL_IT"].includes(A)?st.public.dashboard:st.public.home,S=A!=="ADMIN"&&(E==null?void 0:E.startsWith("/"))&&E!==st.public.login;i(S?E:y,{replace:!0})}}catch(M){m((M==null?void 0:M.message)||"Identifiants incorrects")}finally{h(!1)}};return o.jsxs("div",{className:"loginPage",children:[o.jsxs("div",{className:"loginLeft",children:[o.jsxs("div",{className:"loginBrand",children:[o.jsx("div",{className:"brandLogo",children:o.jsx("img",{src:hp,alt:"MboaLink"})}),o.jsx("div",{className:"brandText",children:o.jsx("p",{className:"brandTagline",children:"HOSPITALITY • TRANSPORT • SMART ACCESS"})})]}),o.jsxs("div",{className:"loginHero",children:[o.jsxs("h2",{className:"heroTitle",children:["Connectez-vous à",o.jsx("br",{}),"votre ",o.jsx("span",{className:"highlight",children:"écosystème"})," Mboa."]}),o.jsx("p",{className:"heroDescription",children:"MboaLink synchronise vos hôtels, gares routières et partenaires en une seule plateforme fluide, pensée pour l'Afrique et le monde."}),o.jsxs("div",{className:"features",children:[o.jsxs("div",{className:"feature",children:[o.jsx("div",{className:"featureIcon",children:"✓"}),o.jsx("span",{children:"Check-in en moins de 30s"})]}),o.jsxs("div",{className:"feature",children:[o.jsx("div",{className:"featureIcon",children:"✓"}),o.jsx("span",{children:"Monitoring temps réel"})]}),o.jsxs("div",{className:"feature",children:[o.jsx("div",{className:"featureIcon",children:"✓"}),o.jsx("span",{children:"Data sécurisée & conforme"})]})]}),o.jsxs("div",{className:"stats",children:[o.jsxs("div",{className:"stat",children:[o.jsx("div",{className:"statValue",children:"+120"}),o.jsx("div",{className:"statLabel",children:"Sites connectés"})]}),o.jsxs("div",{className:"stat",children:[o.jsx("div",{className:"statValue",children:"99.9%"}),o.jsx("div",{className:"statLabel",children:"Disponibilité"})]}),o.jsxs("div",{className:"stat",children:[o.jsx("div",{className:"statValue",children:"24/7"}),o.jsx("div",{className:"statLabel",children:"Support dédié"})]})]})]}),o.jsx("footer",{className:"loginFooter",children:o.jsx("p",{children:"© 2025 MboaLink. Tous droits réservés."})})]}),o.jsx("div",{className:"loginRight",children:o.jsxs("div",{className:"loginCard",children:[o.jsx("h3",{className:"cardTitle",children:"Connexion"}),o.jsx("p",{className:"cardSubtitle",children:"Accédez à votre espace d'administration sécurisé"}),o.jsxs("form",{onSubmit:v,className:"loginForm",children:[f&&o.jsx("p",{className:"helpText",style:{color:"#b91c1c"},children:f}),o.jsxs("div",{className:"formGroup",children:[o.jsx("label",{htmlFor:"email",children:"Adresse e-mail"}),o.jsx("input",{id:"email",type:"email",placeholder:"vous@entreprise.com",value:t,onChange:x=>s(x.target.value),required:!0,disabled:d})]}),o.jsxs("div",{className:"formGroup",children:[o.jsx("label",{htmlFor:"password",children:"Mot de passe"}),o.jsx("input",{id:"password",type:"password",placeholder:"Votre mot de passe",value:a,onChange:x=>c(x.target.value),required:!0,disabled:d})]}),o.jsx("a",{href:"#",className:"forgotPassword",children:"Mot de passe oublié ?"}),o.jsx("button",{type:"submit",className:"submitBtn",disabled:d,children:d?"Connexion...":"Se connecter"})]}),o.jsxs("p",{className:"helpText",children:["Besoin d'un accès ? ",o.jsx("a",{href:"#",children:"Contacter l'administrateur"})]})]})})]})}function _M(){var x;const i=Is(),t=((x=Oi().state)==null?void 0:x.email)||"",[s,a]=j.useState(""),[c,d]=j.useState(!1),[h,f]=j.useState("");if(!t)return i(st.public.login,{replace:!0}),null;const m=async g=>{if(g.preventDefault(),s.length<6){f("Veuillez entrer un code valide à 6 chiffres");return}d(!0),f("");try{await Mi.verifyMfa(t,s),i(st.public.home,{replace:!0})}catch(M){f((M==null?void 0:M.message)||"Code invalide ou expiré"),a("")}finally{d(!1)}},v=()=>{i(st.public.login,{replace:!0})};return o.jsx("div",{className:"twoFactorPage",children:o.jsxs("div",{className:"twoFactorCard",children:[o.jsxs("div",{className:"tfBrand",children:[o.jsx("div",{className:"tfLogo",children:o.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",children:[o.jsx("path",{d:"M20 5L5 15V25L20 35L35 25V15L20 5Z",fill:"#EDC707"}),o.jsx("circle",{cx:"20",cy:"20",r:"8",fill:"#052F5F"})]})}),o.jsx("h1",{className:"tfBrandName",children:"MboaLink"})]}),o.jsxs("div",{className:"tfContent",children:[o.jsx("h2",{className:"tfTitle",children:"Multi-factor authentification"}),o.jsx("p",{className:"tfSubtitle",children:"Additional security code required"}),o.jsxs("div",{className:"userInfo",children:[o.jsx("div",{className:"userAvatar",children:o.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),o.jsx("circle",{cx:"12",cy:"7",r:"4"})]})}),o.jsxs("div",{className:"userEmail",children:["User: ",o.jsx("strong",{children:t})]}),o.jsx("button",{type:"button",className:"restartLink",onClick:v,children:"Restart login"})]}),o.jsx("p",{className:"tfInstructions",children:"Un code de vérification à 6 chiffres a été envoyé à votre adresse email. Saisissez-le ci-dessous."}),o.jsxs("form",{onSubmit:m,className:"tfForm",children:[o.jsx("input",{type:"text",inputMode:"numeric",placeholder:"000000",value:s,onChange:g=>{a(g.target.value.replace(/\D/g,"").slice(0,6)),f("")},maxLength:6,className:"codeInput",disabled:c,autoFocus:!0}),h&&o.jsx("div",{className:"errorMessage",children:h}),o.jsx("button",{type:"submit",className:"tfSubmitBtn",disabled:c||s.length<6,children:c?"Vérification...":"Sign in"})]}),o.jsxs("p",{className:"tfHelp",children:["Having trouble with your code?"," ",o.jsx("a",{href:"#",children:"Use a backup method"})," or"," ",o.jsx("a",{href:"#",children:"contact your administrator"})]})]})]})})}function yM(){const i="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";let e="";for(let t=0;t<6;t++)e+=i.charAt(Math.floor(Math.random()*i.length));return e}function SM(){return new Date().toISOString().split("T")[0]}const Jd=()=>({passCode:yM(),label:"",roomId:"",clientName:"",duration:"",durationType:"Hours",maxUses:0,expiryDate:"",expiryTime:"00:00",uploadCap:1500,downloadCap:1500,zones:{CONFERENCE:!1,PUBLIC:!1,GUEST_ROOM:!1,IROH:!1,RC:!1}});function MM({isOpen:i,onClose:e,onSubmit:t,rooms:s=[]}){const[a,c]=j.useState(Jd()),d=(x,g)=>c(M=>({...M,[x]:g})),h=(x,g)=>{const M=g===""?"":Number(g);c(E=>({...E,[x]:M}))},f=x=>c(g=>({...g,zones:{...g.zones,[x]:!g.zones[x]}})),m=()=>{t&&t(a),c(Jd()),e()},v=()=>{c(Jd()),e()};return i?o.jsx("div",{className:"modalOverlay",onClick:v,children:o.jsxs("div",{className:"modalContent",onClick:x=>x.stopPropagation(),children:[o.jsxs("div",{className:"modalHeader",children:[o.jsx("button",{className:"backBtn",onClick:v,children:"← BACK"}),o.jsxs("div",{className:"modalTitle",children:[o.jsx("h2",{children:"Add A Guest Pass"}),o.jsx("p",{children:`Le code est généré aléatoirement. Le label est facultatif — il sert uniquement à identifier ou catégoriser le code (ex : "Conférence Total Energie", "Chambre VIP"). Il n'a aucun impact sur le code lui-même.`})]})]}),o.jsxs("div",{className:"modalBody",children:[o.jsxs("section",{className:"formSection",children:[o.jsx("h3",{className:"sectionTitle",children:"General Information"}),o.jsxs("div",{className:"formRow",children:[o.jsxs("div",{className:"formLabel",children:[o.jsx("label",{children:"Pass Code"}),o.jsx("p",{className:"labelHelp",children:"Code généré automatiquement. Vous pouvez le remplacer par le vôtre."})]}),o.jsx("input",{type:"text",value:a.passCode,onChange:x=>d("passCode",x.target.value.toUpperCase()),maxLength:20})]}),o.jsxs("div",{className:"formRow",children:[o.jsxs("div",{className:"formLabel",children:[o.jsxs("label",{children:["Label ",o.jsx("span",{style:{fontWeight:400,color:"#94a3b8"},children:"(optionnel)"})]}),o.jsx("p",{className:"labelHelp",children:`Permet d'identifier ou catégoriser ce code. Ex : "Séminaire RH", "Suite Présidentielle", "Journaliste accrédité". Le code reste indépendant du label.`})]}),o.jsx("input",{type:"text",value:a.label,onChange:x=>d("label",x.target.value),placeholder:"Ex : Conférence Total Energie"})]}),o.jsxs("div",{className:"formRow",children:[o.jsxs("div",{className:"formLabel",children:[o.jsxs("label",{children:["Chambre ",o.jsx("span",{style:{fontWeight:400,color:"#94a3b8"},children:"(optionnel)"})]}),o.jsx("p",{className:"labelHelp",children:"Associez le ticket à une chambre pour permettre la connexion par nom + numéro de chambre."})]}),o.jsxs("select",{value:a.roomId,onChange:x=>d("roomId",x.target.value),children:[o.jsx("option",{value:"",children:"Aucune chambre"}),s.map(x=>o.jsx("option",{value:x.id,children:x.name||x.type},x.id))]})]}),o.jsxs("div",{className:"formRow",children:[o.jsxs("div",{className:"formLabel",children:[o.jsxs("label",{children:["Nom du client ",o.jsx("span",{style:{fontWeight:400,color:"#94a3b8"},children:"(optionnel)"})]}),o.jsx("p",{className:"labelHelp",children:"Ce nom sera utilisé avec la chambre sur le portail captif."})]}),o.jsx("input",{type:"text",value:a.clientName,onChange:x=>d("clientName",x.target.value),placeholder:"Ex : Jean Dupont"})]}),o.jsxs("div",{className:"formRow",children:[o.jsxs("div",{className:"formLabel",children:[o.jsx("label",{children:"Duration"}),o.jsx("p",{className:"labelHelp",children:"Choisissez l'unité puis la valeur. Durée maximale : 180 jours."})]}),o.jsxs("div",{className:"durationGroup",children:[o.jsx("input",{type:"number",value:a.duration,onChange:x=>h("duration",x.target.value),placeholder:"0",min:"0"}),o.jsxs("select",{value:a.durationType,onChange:x=>d("durationType",x.target.value),children:[o.jsx("option",{children:"Hours"}),o.jsx("option",{children:"Days"})]})]})]}),o.jsxs("div",{className:"formRow",children:[o.jsxs("div",{className:"formLabel",children:[o.jsx("label",{children:"Max Number of Uses"}),o.jsx("p",{className:"labelHelp",children:"Utilisations illimitées : saisir 0."})]}),o.jsx("input",{type:"number",value:a.maxUses,onChange:x=>h("maxUses",x.target.value),min:"0"})]}),o.jsxs("div",{className:"formRow",children:[o.jsxs("div",{className:"formLabel",children:[o.jsxs("label",{children:["Expiry Date ",o.jsx("span",{style:{fontWeight:400,color:"#94a3b8"},children:"(optionnel)"})]}),o.jsx("p",{className:"labelHelp",children:"Laissez vide pour aucune expiration. Les dates passées sont bloquées."})]}),o.jsxs("div",{className:"dateTimeGroup",children:[o.jsx("input",{type:"date",value:a.expiryDate,min:SM(),onChange:x=>d("expiryDate",x.target.value)}),o.jsx("input",{type:"time",value:a.expiryTime,onChange:x=>d("expiryTime",x.target.value)})]})]})]}),o.jsxs("section",{className:"formSection",children:[o.jsx("h3",{className:"sectionTitle",children:"Bandwidth Settings"}),o.jsxs("div",{className:"formRow",children:[o.jsxs("div",{className:"formLabel",children:[o.jsx("label",{children:"Upload Cap"}),o.jsx("p",{className:"labelHelp",children:"Glissez ou tapez directement (0 – 15 000 kb/s)."})]}),o.jsxs("div",{className:"capGroup",children:[o.jsx("input",{type:"range",min:"0",max:"15000",step:"100",value:a.uploadCap,onChange:x=>h("uploadCap",x.target.value),className:"capSlider"}),o.jsx("input",{type:"number",min:"0",max:"15000",step:"100",value:a.uploadCap,onChange:x=>h("uploadCap",x.target.value),className:"capInput"}),o.jsx("span",{className:"capUnit",children:"kb/s"})]})]}),o.jsxs("div",{className:"formRow",children:[o.jsxs("div",{className:"formLabel",children:[o.jsx("label",{children:"Download Cap"}),o.jsx("p",{className:"labelHelp",children:"Glissez ou tapez directement (0 – 15 000 kb/s)."})]}),o.jsxs("div",{className:"capGroup",children:[o.jsx("input",{type:"range",min:"0",max:"15000",step:"100",value:a.downloadCap,onChange:x=>h("downloadCap",x.target.value),className:"capSlider"}),o.jsx("input",{type:"number",min:"0",max:"15000",step:"100",value:a.downloadCap,onChange:x=>h("downloadCap",x.target.value),className:"capInput"}),o.jsx("span",{className:"capUnit",children:"kb/s"})]})]})]}),o.jsxs("section",{className:"formSection",children:[o.jsx("h3",{className:"sectionTitle",children:"Zone Information"}),o.jsxs("div",{className:"formRow",children:[o.jsx("div",{className:"formLabel",children:o.jsx("label",{children:"Allowable Zones"})}),o.jsx("div",{className:"checkboxGroup",children:Object.keys(a.zones).map(x=>o.jsxs("label",{className:"checkboxLabel",children:[o.jsx("input",{type:"checkbox",checked:a.zones[x],onChange:()=>f(x)}),o.jsx("span",{children:x.replace("_","-")})]},x))})]})]})]}),o.jsxs("div",{className:"modalFooter",children:[o.jsx("button",{className:"btn btnPrimary",onClick:m,children:"Add Guest Pass"}),o.jsx("button",{className:"btn btnSecondary",onClick:v,children:"Cancel"})]})]})}):null}function EM(){return new Date().toISOString().split("T")[0]}const Qd=()=>({quantity:1,label:"",duration:"",durationType:"Hours",maxUses:0,expiryDate:"",expiryTime:"00:00",uploadCap:1500,downloadCap:1500,zones:{CONFERENCE:!1,PUBLIC:!1,GUEST_ROOM:!1,IROH:!1,RC:!1}});function bM({isOpen:i,onClose:e,onSubmit:t}){const[s,a]=j.useState(Qd()),c=(v,x)=>a(g=>({...g,[v]:x})),d=(v,x)=>{const g=x===""?"":Number(x);a(M=>({...M,[v]:g}))},h=v=>a(x=>({...x,zones:{...x.zones,[v]:!x.zones[v]}})),f=()=>{if(s.quantity<1||s.quantity>1e3){alert("La quantité doit être comprise entre 1 et 1 000.");return}t&&t(s),a(Qd()),e()},m=()=>{a(Qd()),e()};return i?o.jsx("div",{className:"modalOverlay",onClick:m,children:o.jsxs("div",{className:"modalContent",onClick:v=>v.stopPropagation(),children:[o.jsxs("div",{className:"modalHeader",children:[o.jsx("button",{className:"backBtn",onClick:m,children:"← BACK"}),o.jsxs("div",{className:"modalTitle",children:[o.jsx("h2",{children:"Add Mass Guest Pass"}),o.jsx("p",{children:`Créez plusieurs codes WiFi en une seule opération. Les codes sont générés aléatoirement. Le label permet de regrouper et d'identifier tous ces codes sous un même événement ou contexte (ex : "Conférence Total Energie" — tous les codes créés porteront ce label pour les distinguer facilement).`})]})]}),o.jsxs("div",{className:"modalBody",children:[o.jsxs("section",{className:"formSection",children:[o.jsx("h3",{className:"sectionTitle",children:"General Information"}),o.jsxs("div",{className:"formRow",children:[o.jsxs("div",{className:"formLabel",children:[o.jsx("label",{children:"Number of Passes"}),o.jsx("p",{className:"labelHelp",children:"Nombre de codes à créer (maximum 1 000)."})]}),o.jsx("input",{type:"number",value:s.quantity,onChange:v=>d("quantity",v.target.value),min:"1",max:"1000"})]}),o.jsxs("div",{className:"formRow",children:[o.jsxs("div",{className:"formLabel",children:[o.jsxs("label",{children:["Label ",o.jsx("span",{style:{fontWeight:400,color:"#94a3b8"},children:"(optionnel)"})]}),o.jsx("p",{className:"labelHelp",children:'Identifiant commun pour tous les codes générés. Permet de les retrouver et filtrer rapidement. Ex : "Conférence Total Energie", "Séminaire RH Mars 2026", "Journalistes accrédités". Les codes eux-mêmes restent générés aléatoirement.'})]}),o.jsx("input",{type:"text",value:s.label,onChange:v=>c("label",v.target.value),placeholder:"Ex : Conférence Total Energie"})]}),o.jsxs("div",{className:"formRow",children:[o.jsxs("div",{className:"formLabel",children:[o.jsx("label",{children:"Duration"}),o.jsx("p",{className:"labelHelp",children:"Choisissez l'unité puis la valeur. Durée maximale : 180 jours."})]}),o.jsxs("div",{className:"durationGroup",children:[o.jsx("input",{type:"number",value:s.duration,onChange:v=>d("duration",v.target.value),placeholder:"0",min:"0"}),o.jsxs("select",{value:s.durationType,onChange:v=>c("durationType",v.target.value),children:[o.jsx("option",{children:"Hours"}),o.jsx("option",{children:"Days"})]})]})]}),o.jsxs("div",{className:"formRow",children:[o.jsxs("div",{className:"formLabel",children:[o.jsx("label",{children:"Max Number of Uses"}),o.jsx("p",{className:"labelHelp",children:"Utilisations illimitées : saisir 0."})]}),o.jsx("input",{type:"number",value:s.maxUses,onChange:v=>d("maxUses",v.target.value),min:"0"})]}),o.jsxs("div",{className:"formRow",children:[o.jsxs("div",{className:"formLabel",children:[o.jsxs("label",{children:["Expiry Date ",o.jsx("span",{style:{fontWeight:400,color:"#94a3b8"},children:"(optionnel)"})]}),o.jsx("p",{className:"labelHelp",children:"Laissez vide pour aucune expiration. Les dates passées sont bloquées."})]}),o.jsxs("div",{className:"dateTimeGroup",children:[o.jsx("input",{type:"date",value:s.expiryDate,min:EM(),onChange:v=>c("expiryDate",v.target.value)}),o.jsx("input",{type:"time",value:s.expiryTime,onChange:v=>c("expiryTime",v.target.value)})]})]})]}),o.jsxs("section",{className:"formSection",children:[o.jsx("h3",{className:"sectionTitle",children:"Bandwidth Settings"}),o.jsxs("div",{className:"formRow",children:[o.jsxs("div",{className:"formLabel",children:[o.jsx("label",{children:"Upload Cap"}),o.jsx("p",{className:"labelHelp",children:"Glissez ou tapez directement (0 – 15 000 kb/s)."})]}),o.jsxs("div",{className:"capGroup",children:[o.jsx("input",{type:"range",min:"0",max:"15000",step:"100",value:s.uploadCap,onChange:v=>d("uploadCap",v.target.value),className:"capSlider"}),o.jsx("input",{type:"number",min:"0",max:"15000",step:"100",value:s.uploadCap,onChange:v=>d("uploadCap",v.target.value),className:"capInput"}),o.jsx("span",{className:"capUnit",children:"kb/s"})]})]}),o.jsxs("div",{className:"formRow",children:[o.jsxs("div",{className:"formLabel",children:[o.jsx("label",{children:"Download Cap"}),o.jsx("p",{className:"labelHelp",children:"Glissez ou tapez directement (0 – 15 000 kb/s)."})]}),o.jsxs("div",{className:"capGroup",children:[o.jsx("input",{type:"range",min:"0",max:"15000",step:"100",value:s.downloadCap,onChange:v=>d("downloadCap",v.target.value),className:"capSlider"}),o.jsx("input",{type:"number",min:"0",max:"15000",step:"100",value:s.downloadCap,onChange:v=>d("downloadCap",v.target.value),className:"capInput"}),o.jsx("span",{className:"capUnit",children:"kb/s"})]})]})]}),o.jsxs("section",{className:"formSection",children:[o.jsx("h3",{className:"sectionTitle",children:"Zone Information"}),o.jsxs("div",{className:"formRow",children:[o.jsx("div",{className:"formLabel",children:o.jsx("label",{children:"Allowable Zones"})}),o.jsx("div",{className:"checkboxGroup",children:Object.keys(s.zones).map(v=>o.jsxs("label",{className:"checkboxLabel",children:[o.jsx("input",{type:"checkbox",checked:s.zones[v],onChange:()=>h(v)}),o.jsx("span",{children:v.replace("_","-")})]},v))})]})]})]}),o.jsxs("div",{className:"modalFooter",children:[o.jsxs("button",{className:"btn btnPrimary",onClick:f,children:["Create ",s.quantity," Guest Pass",s.quantity>1?"es":""]}),o.jsx("button",{className:"btn btnSecondary",onClick:m,children:"Cancel"})]})]})}):null}const eh={dashboard:st.public.dashboard,"network-map":st.public.networkMap,"wifi-code":st.public.wifiCode,"login-by-address":st.public.loginByAddress,"status-logins":st.public.statusLogins,"manual-login":st.public.manualLogin,"website-manager":st.public.websitesManager,"config-code":st.public.configCode,hotels:st.public.hotels,rooms:st.public.rooms,"config-wifi":st.public.configWifi,devices:st.public.devices,"admin-mboa":st.public.adminMboa,users:st.public.users,notifications:st.public.notifications};function wr({children:i,activePage:e="LOGINS",activeSubPage:t="WiFi Code"}){var b;const s=Is(),a=Mi.getStoredUser(),c=(a==null?void 0:a.name)||(a==null?void 0:a.email)||"Utilisateur",d=c.charAt(0).toUpperCase(),h=String((a==null?void 0:a.role)||"").trim().toUpperCase(),f=h==="RECEPTIONIST",m=h==="HOTEL_IT",v=h==="ADMIN",x=h==="SUPPORT"||h.includes("SUPPORT"),g=f?["LOGINS","NOTIFICATIONS"]:m?["DASHBOARD","LOGINS","NOTIFICATIONS"]:v?["ADMINISTRATION","LOGINS","DASHBOARD","HOTEL MANAGER","DEVICE MANAGER","NOTIFICATIONS"]:x?["LOGINS","DASHBOARD","NOTIFICATIONS"]:["LOGINS","DASHBOARD","NOTIFICATIONS"],M={LOGINS:f?[{label:"Manual Login",page:"manual-login"}]:m?[{label:"WiFi Code",page:"wifi-code"},{label:"Statut Logins",page:"status-logins"},{label:"Web Site Manager",page:"website-manager"}]:[{label:"WiFi Code",page:"wifi-code"},{label:"Login by Adress",page:"login-by-address"},{label:"Statut Logins",page:"status-logins"},{label:"Manual Login",page:"manual-login"},{label:"Web Site Manager",page:"website-manager"},{label:"Config Code",page:"config-code"}],DASHBOARD:[{label:"Overview",page:"dashboard"},{label:"Network Map",page:"network-map"}],"HOTEL MANAGER":[{label:"Hotels",page:"hotels"},{label:"Rooms",page:"rooms"},{label:"Config WiFi",page:"config-wifi"}],"DEVICE MANAGER":[{label:"Devices",page:"devices"}],NOTIFICATIONS:[{label:"Messages",page:"notifications"}],ADMINISTRATION:[{label:"Super Admin",page:"admin-mboa"}]},E={LOGINS:f?"manual-login":"wifi-code","HOTEL MANAGER":"hotels",DASHBOARD:"dashboard","DEVICE MANAGER":"devices",NOTIFICATIONS:"notifications",ADMINISTRATION:"admin-mboa"},A=g.includes(e),y=w=>{const N=E[w];N&&eh[N]&&s(eh[N])},S=async()=>{await Mi.logout(),s(st.public.login)};return o.jsxs("div",{className:"layout",children:[o.jsx("header",{className:"mainHeader",children:o.jsxs("div",{className:"headerInner",children:[o.jsxs("div",{className:"headerLeft",children:[o.jsx("div",{className:"headerBrand",children:o.jsx("img",{src:hp,alt:"MboaLink",className:"headerLogo"})}),o.jsx("nav",{className:"mainNav","aria-label":"Main navigation",children:g.map(w=>o.jsx("button",{type:"button",className:`mainNavLink ${w===e?"active":""}`,onClick:()=>y(w),"aria-disabled":!E[w],children:w},w))})]}),o.jsxs("div",{className:"headerRight",children:[o.jsxs("div",{className:"userInfo",children:[o.jsx("span",{className:"userAvatar",children:d}),o.jsx("span",{className:"userName",children:c})]}),o.jsx("button",{className:"logoutBtn",onClick:S,type:"button",children:"Déconnexion"})]})]})}),A&&((b=M[e])==null?void 0:b.length)>0&&o.jsx("nav",{className:"subNav","aria-label":"Sub navigation",children:o.jsx("div",{className:"subNavInner",children:M[e].map(w=>o.jsx(lp,{to:eh[w.page],className:`subNavLink ${w.label===t?"active":""}`,children:w.label},w.page))})}),o.jsx("main",{className:"mainContent",children:i}),o.jsx("footer",{className:"mainFooter",children:o.jsxs("div",{className:"footerInner",children:[o.jsxs("div",{className:"footerLinks",children:[o.jsx("a",{href:"#",children:"Terms of Service"}),o.jsx("span",{className:"separator",children:"|"}),o.jsx("a",{href:"#",children:"Privacy Policy"}),o.jsx("span",{className:"separator",children:"|"}),o.jsx("a",{href:"#",children:"Help Desk"})]}),o.jsx("p",{className:"footerCopy",children:"© 2025 MboaLink. Tous droits réservés."})]})})]})}const ei="all";function Oa(i){return(i==null?void 0:i.role)==="ADMIN"||(i==null?void 0:i.role)==="SUPPORT"}function Yo(i,e=[]){var t;return Oa(i)?ei:(i==null?void 0:i.hotelId)||((t=e[0])==null?void 0:t.id)||""}function Ns(i){if(!(!i||i===ei))return i}function jo(i){return!!i&&i!==ei}const wM=()=>o.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),o.jsx("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]}),TM=()=>o.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("circle",{cx:"12",cy:"12",r:"10"}),o.jsx("line",{x1:"4.93",y1:"4.93",x2:"19.07",y2:"19.07"})]}),CM=()=>o.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("polyline",{points:"3 6 5 6 21 6"}),o.jsx("path",{d:"M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"}),o.jsx("path",{d:"M10 11v6"}),o.jsx("path",{d:"M14 11v6"}),o.jsx("path",{d:"M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"})]});function mx(i){return i?new Date(i).toLocaleString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}):"—"}function AM(i){return i?new Date(i)<new Date:!1}function nv(){const i=Mi.getStoredUser(),e=(i==null?void 0:i.role)==="HOTEL_IT",t=Oa(i),[s,a]=j.useState([]),[c,d]=j.useState([]),[h,f]=j.useState([]),[m,v]=j.useState(""),[x,g]=j.useState(!0),[M,E]=j.useState(""),[A,y]=j.useState([]),[S,b]=j.useState(!1),[w,N]=j.useState(!1),I=j.useRef(null),L=async O=>{try{const V=Ns(O),[$,ue]=await Promise.all([nt.listGuestPasses(V?{hotelId:V}:void 0),nt.listRooms(V?{hotelId:V}:void 0)]);a($),d(ue)}catch(V){alert(V.message||"Impossible de charger les codes")}};j.useEffect(()=>{nt.listHotels().then(O=>{f(O);const V=Yo(i,O);return v(V),L(V)}).catch(O=>alert(O.message||"Chargement impossible")).finally(()=>g(!1))},[]),j.useEffect(()=>{!m||x||(L(m),y([]))},[m]),j.useEffect(()=>{if(!I.current)return;const O=k.length;A.length===0?(I.current.checked=!1,I.current.indeterminate=!1):A.length===O&&O>0?(I.current.checked=!0,I.current.indeterminate=!1):(I.current.checked=!1,I.current.indeterminate=!0)});const k=j.useMemo(()=>{const O=M.trim().toLowerCase();return O?s.filter(V=>{var $,ue;return`${V.code} ${V.label||""} ${V.clientName||""} ${(($=V.room)==null?void 0:$.name)||""} ${((ue=V.room)==null?void 0:ue.type)||""}`.toLowerCase().includes(O)}):s},[s,M]),T=O=>y(V=>V.includes(O)?V.filter($=>$!==O):[...V,O]),U=()=>y(A.length===k.length?[]:k.map(O=>O.id)),Y=async()=>{if(A.length===0){alert("Sélectionnez au moins un code");return}if(confirm(`Supprimer ${A.length} code(s) sélectionné(s) ?`))try{await Promise.all(A.map(O=>nt.deleteGuestPass(O))),await L(m),y([])}catch(O){alert(O.message||"Suppression impossible")}},G=async O=>{var V;if(confirm("Révoquer ce code ? Il ne pourra plus être utilisé."))try{await nt.revokeGuestPass(O),await L(m)}catch($){if((V=$.message)!=null&&V.includes("expirée")||$.status===401){alert("Votre session a expiré. Veuillez vous reconnecter."),window.location.href="/login";return}alert($.message||"Révocation impossible")}},J=async O=>{if(confirm("Supprimer définitivement ce code ?"))try{await nt.deleteGuestPass(O),await L(m),y(V=>V.filter($=>$!==O))}catch(V){alert(V.message||"Suppression impossible")}},H=async O=>{if(!jo(m)){alert("Sélectionnez un hôtel précis avant de créer un code");return}try{const V=O.duration===""||O.duration===void 0?void 0:Number(O.duration);await nt.createGuestPass({hotelId:m,code:O.passCode,label:O.label,roomId:O.roomId||void 0,clientName:O.clientName||void 0,durationValue:V,durationUnit:O.durationType,maxUses:Number(O.maxUses||0),expiryDate:O.expiryDate||void 0,expiryTime:O.expiryTime||void 0,uploadCapKbps:Number(O.uploadCap||1500),downloadCapKbps:Number(O.downloadCap||1500),zones:Object.entries(O.zones||{}).filter(([,$])=>$).map(([$])=>$)}),await L(m)}catch(V){alert(V.message||"Création impossible")}},Q=async O=>{if(!jo(m)){alert("Sélectionnez un hôtel précis avant de créer des codes");return}try{const V=O.duration===""||O.duration===void 0?void 0:Number(O.duration);await nt.createGuestPassesBulk({hotelId:m,quantity:Number(O.quantity||1),codePrefix:O.label||void 0,label:O.label||void 0,durationValue:V,durationUnit:O.durationType,maxUses:Number(O.maxUses||0),expiryDate:O.expiryDate||void 0,expiryTime:O.expiryTime||void 0,uploadCapKbps:Number(O.uploadCap||1500),downloadCapKbps:Number(O.downloadCap||1500),zones:Object.entries(O.zones||{}).filter(([,$])=>$).map(([$])=>$)}),await L(m)}catch(V){alert(V.message||"Création en masse impossible")}},X=jo(m);return o.jsxs(wr,{activePage:"LOGINS",activeSubPage:"WiFi Code",children:[o.jsxs("div",{className:"wifiCodePage",children:[o.jsxs("div",{className:"pageHeader",children:[o.jsx("h1",{className:"pageTitle",children:"Guest WiFi Codes"}),e&&o.jsx("span",{className:"hotelBadge",children:"Vue IT hôtel - accès clients"}),o.jsx("p",{className:"pageDescription",children:e?"Gérez les accès Wi-Fi clients de votre hôtel, avec un périmètre limité à votre établissement.":"Les WiFi Codes permettent à vos invités d'accéder à Internet via MboaLink. Vous pouvez créer de nouveaux codes, ajuster la durée, le débit et le nombre d'utilisations, ou supprimer les codes existants à partir de cette liste."})]}),o.jsxs("div",{className:"displayInfo",children:["Affichage de ",k.length," code",k.length!==1?"s":"","."]}),o.jsx("div",{className:"warningBanner",children:"Toute date d'expiration marquée d'un (*) correspond à un code déjà expiré et sera automatiquement retiré de la liste 30 jours après expiration."}),o.jsxs("div",{className:"actionsBar",children:[t&&o.jsxs("select",{className:"filterSelect",value:m,onChange:O=>v(O.target.value),children:[o.jsx("option",{value:ei,children:"Tous les hôtels"}),h.map(O=>o.jsx("option",{value:O.id,children:O.name},O.id))]}),o.jsx("input",{type:"text",placeholder:"Rechercher un code, un label...",className:"searchInput",value:M,onChange:O=>E(O.target.value)}),o.jsxs("div",{className:"actionButtons",children:[o.jsxs("button",{className:"btn btnSecondary",onClick:Y,disabled:A.length===0,children:["Supprimer (",A.length,")"]}),o.jsx("button",{className:"btn btnSecondary",onClick:()=>window.print(),children:"Print List"}),o.jsx("button",{className:"btn btnPrimary",disabled:!X,onClick:()=>N(!0),children:"Add Mass Guest Pass"}),o.jsx("button",{className:"btn btnPrimary",disabled:!X,onClick:()=>b(!0),children:"Add Guest Pass"})]})]}),!m&&!x&&o.jsx("div",{className:"warningBanner",children:"Créez d'abord un hôtel dans Hotel Manager avant de générer des codes WiFi."}),m===ei&&!x&&o.jsx("div",{className:"warningBanner",children:"Vue globale active : sélectionnez un hôtel précis pour créer de nouveaux codes WiFi."}),o.jsxs("div",{className:"tableWrapper",children:[x&&o.jsx("p",{style:{padding:"16px",color:"#64748b"},children:"Chargement des codes…"}),o.jsxs("table",{className:"wifiTable",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:o.jsx("input",{type:"checkbox",ref:I,onChange:U,title:A.length>0?"Tout désélectionner":"Tout sélectionner"})}),o.jsx("th",{children:"Pass"}),o.jsx("th",{children:"Label"}),o.jsx("th",{children:"Room / Client"}),o.jsx("th",{children:"Max Uses"}),o.jsx("th",{children:"Duration"}),o.jsx("th",{children:"Cap (Down / Up)"}),o.jsx("th",{children:"Créé le"}),o.jsx("th",{children:"Créé par"}),o.jsx("th",{children:"Expires"}),o.jsx("th",{children:"Options"})]})}),o.jsxs("tbody",{children:[!1,k.length===0&&!x?o.jsx("tr",{children:o.jsx("td",{colSpan:11,style:{textAlign:"center",padding:"40px",color:"#94a3b8"},children:"Aucun code WiFi trouvé."})}):k.map(O=>{var ue,se,B,re;const V=AM(O.expiryAt),$=((ue=O.createdBy)==null?void 0:ue.fullName)||((se=O.createdBy)==null?void 0:se.email)||"—";return o.jsxs("tr",{className:V?"rowExpired":"",children:[o.jsx("td",{children:o.jsx("input",{type:"checkbox",checked:A.includes(O.id),onChange:()=>T(O.id)})}),o.jsx("td",{className:"codeCell",children:O.code}),o.jsx("td",{children:O.label||"—"}),o.jsxs("td",{children:[((B=O.room)==null?void 0:B.name)||((re=O.room)==null?void 0:re.type)||"—",O.clientName?o.jsxs(o.Fragment,{children:[o.jsx("br",{}),o.jsx("small",{children:O.clientName})]}):null]}),o.jsx("td",{children:O.maxUses===0?"∞":O.maxUses}),o.jsx("td",{children:O.durationValue?`${O.durationValue} ${O.durationUnit||""}`:"—"}),o.jsxs("td",{className:"bandwidthCell",children:[O.downloadCapKbps," / ",O.uploadCapKbps," kb/s"]}),o.jsx("td",{className:"dateCell",children:mx(O.createdAt)}),o.jsx("td",{className:"createdByCell",children:$}),o.jsx("td",{className:`dateCell ${V?"expiredDate":""}`,children:O.expiryAt?`${mx(O.expiryAt)}${V?" *":""}`:"—"}),o.jsx("td",{children:o.jsxs("div",{className:"optionsCell",children:[o.jsx("button",{className:"actionIconBtn actionIconBtnRevoke",title:"Révoquer",onClick:()=>G(O.id),disabled:O.isRevoked,children:o.jsx(TM,{})}),o.jsx("button",{className:"actionIconBtn actionIconBtnEdit",title:"Modifier (bientôt disponible)",onClick:()=>alert("Fonctionnalité de modification à venir."),children:o.jsx(wM,{})}),o.jsx("button",{className:"actionIconBtn actionIconBtnDelete",title:"Supprimer",onClick:()=>J(O.id),children:o.jsx(CM,{})})]})})]},O.id)})]})]})]})]}),o.jsx(MM,{isOpen:S,onClose:()=>b(!1),onSubmit:H,rooms:c}),o.jsx(bM,{isOpen:w,onClose:()=>N(!1),onSubmit:Q})]})}function RM(){return o.jsx(nv,{})}function NM(){const[i,e]=j.useState(""),[t,s]=j.useState([]),[a,c]=j.useState({address:"",interface:"Not Public IP",clearedDate:"",clearedTime:"16:00",uploadCap:1500,downloadCap:1500,connectionType:"Admin Machine",notes:""}),[d,h]=j.useState([]),[f,m]=j.useState([]),v=async y=>{const S=await nt.listClearedAddresses(y?{hotelId:y}:void 0);h(S.map(b=>({id:b.id,ipmac:b.address,interface:b.networkInterface||"None selected",expires:new Date(b.expiresAt).toLocaleString("fr-FR"),cap:`${b.downloadCapKbps} / ${b.uploadCapKbps}`,issuedBy:b.issuedBy||"-",details:`${b.connectionType||""} ${b.notes||""}`.trim()||"-"})))};j.useEffect(()=>{nt.listHotels().then(async y=>{var b;s(y);const S=((b=y[0])==null?void 0:b.id)||"";e(S),await v(S)}).catch(y=>alert(y.message||"Impossible de charger les adresses"))},[]);const x=(y,S)=>{c(b=>({...b,[y]:S}))},g=async()=>{if(!i){alert("Sélectionnez un hôtel");return}if(!a.clearedDate){alert("Sélectionnez une date d’expiration");return}try{await nt.createClearedAddress({hotelId:i,address:a.address,networkInterface:a.interface,expiresAt:`${a.clearedDate}T${a.clearedTime||"00:00"}:00.000Z`,uploadCapKbps:Number(a.uploadCap),downloadCapKbps:Number(a.downloadCap),connectionType:a.connectionType,notes:a.notes}),await v(i)}catch(y){alert(y.message||"Création impossible")}},M=async()=>{if(f.length!==0)try{await nt.deleteClearedAddresses(f),await v(i),m([])}catch(y){alert(y.message||"Suppression impossible")}},E=y=>{m(S=>S.includes(y)?S.filter(b=>b!==y):[...S,y])},A=()=>{m(y=>y.length===d.length?[]:d.map(S=>S.id))};return o.jsx(wr,{activePage:"LOGINS",activeSubPage:"Login by Adress",children:o.jsxs("div",{className:"loginByAddressPage",children:[o.jsxs("div",{className:"pageHeader",children:[o.jsx("h1",{className:"pageTitle",children:"Clear IP/MAC Address"}),o.jsx("p",{className:"pageSubtitle",children:"If the IP you want to clear is a public IP, you must specify the network interface."})]}),o.jsx("div",{className:"clearForm",children:o.jsxs("div",{className:"formSection",children:[o.jsx("h3",{className:"sectionTitle",children:"Address and Device Information"}),o.jsxs("div",{className:"formGrid",children:[o.jsxs("div",{className:"formCol",children:[o.jsxs("div",{className:"formField",children:[o.jsx("label",{children:"Hotel"}),o.jsxs("select",{value:i,onChange:y=>{const S=y.target.value;e(S),v(S)},children:[o.jsx("option",{value:"",children:"Select hotel"}),t.map(y=>o.jsx("option",{value:y.id,children:y.name},y.id))]})]}),o.jsxs("div",{className:"formField",children:[o.jsx("label",{children:"IP/MAC Address"}),o.jsx("p",{className:"fieldHelp",children:"Must be formatted correctly as an IP address or MAC address. Example MAC Address: 3D:F2:C0:A0:B3:4F"}),o.jsx("input",{type:"text",value:a.address,onChange:y=>x("address",y.target.value),placeholder:"Enter IP or MAC address"})]}),o.jsxs("div",{className:"formField",children:[o.jsx("label",{children:"Specify Network Interface"}),o.jsxs("select",{value:a.interface,onChange:y=>x("interface",y.target.value),children:[o.jsx("option",{children:"Not Public IP"}),o.jsx("option",{children:"Public IP – Interface A"}),o.jsx("option",{children:"Public IP – Interface B"})]})]}),o.jsxs("div",{className:"formField",children:[o.jsx("label",{children:"Cleared Until"}),o.jsxs("div",{className:"dateTimeGroup",children:[o.jsx("input",{type:"date",value:a.clearedDate,onChange:y=>x("clearedDate",y.target.value)}),o.jsx("input",{type:"time",value:a.clearedTime,onChange:y=>x("clearedTime",y.target.value)})]})]})]}),o.jsxs("div",{className:"formCol",children:[o.jsxs("div",{className:"formField",children:[o.jsx("label",{children:"Upload Cap"}),o.jsxs("div",{className:"capControl",children:[o.jsx("input",{type:"range",min:"0",max:"15000",step:"100",value:a.uploadCap,onChange:y=>x("uploadCap",Number(y.target.value))}),o.jsx("input",{type:"number",value:a.uploadCap,onChange:y=>x("uploadCap",Number(y.target.value)),className:"capValue"})]})]}),o.jsxs("div",{className:"formField",children:[o.jsx("label",{children:"Download Cap"}),o.jsxs("div",{className:"capControl",children:[o.jsx("input",{type:"range",min:"0",max:"15000",step:"100",value:a.downloadCap,onChange:y=>x("downloadCap",Number(y.target.value))}),o.jsx("input",{type:"number",value:a.downloadCap,onChange:y=>x("downloadCap",Number(y.target.value)),className:"capValue"})]})]}),o.jsxs("div",{className:"formField",children:[o.jsx("label",{children:"Connection Type / Reason"}),o.jsxs("select",{value:a.connectionType,onChange:y=>x("connectionType",y.target.value),children:[o.jsx("option",{children:"Admin Machine"}),o.jsx("option",{children:"Guest Device"}),o.jsx("option",{children:"Staff Device"}),o.jsx("option",{children:"Other"})]})]}),o.jsxs("div",{className:"formField",children:[o.jsx("label",{children:"Notes"}),o.jsx("p",{className:"fieldHelp",children:"Why are you clearing it? Case #, etc."}),o.jsx("textarea",{value:a.notes,onChange:y=>x("notes",y.target.value),placeholder:"Enter notes...",rows:"3"})]})]})]}),o.jsxs("div",{className:"formActions",children:[o.jsx("button",{className:"btn btnPrimary",onClick:g,children:"Clear"}),o.jsx("button",{className:"btn btnDanger",onClick:M,children:"Remove Selected"})]})]})}),o.jsxs("div",{className:"addressTable",children:[o.jsx("div",{className:"tableHeader",children:o.jsx("h3",{className:"tableTitle",children:"Cleared Addresses"})}),o.jsx("div",{className:"tableWrapper",children:o.jsxs("table",{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{style:{width:"40px"},children:o.jsx("input",{type:"checkbox",checked:f.length===d.length,onChange:A})}),o.jsx("th",{children:"IP/Mac"}),o.jsx("th",{children:"Interface"}),o.jsx("th",{children:"Expires"}),o.jsx("th",{children:"Cap (Down/Up)"}),o.jsx("th",{children:"Issued By"}),o.jsx("th",{children:"Details"}),o.jsx("th",{style:{width:"120px"},children:"Options"})]})}),o.jsx("tbody",{children:d.map(y=>o.jsxs("tr",{className:f.includes(y.id)?"selected":"",children:[o.jsx("td",{children:o.jsx("input",{type:"checkbox",checked:f.includes(y.id),onChange:()=>E(y.id)})}),o.jsx("td",{className:"macAddress",children:y.ipmac}),o.jsx("td",{children:y.interface}),o.jsx("td",{children:y.expires}),o.jsx("td",{className:"capCell",children:y.cap}),o.jsx("td",{children:y.issuedBy}),o.jsx("td",{children:y.details}),o.jsxs("td",{className:"optionsCell",children:[o.jsx("a",{href:"#",className:"optionLink",children:"Remove"})," | ",o.jsx("a",{href:"#",className:"optionLink",children:"Modify"})]})]},y.id))})]})})]})]})})}function PM(){const i=Mi.getStoredUser(),e=Oa(i),[t,s]=j.useState(""),[a,c]=j.useState([]),[d,h]=j.useState([]),[f,m]=j.useState(""),[v,x]=j.useState([]),g=w=>w.map(N=>{var I,L,k;return{...N,room:((I=N.room)==null?void 0:I.name)||((L=N.room)==null?void 0:L.type)||"N/A",name:N.clientName||"None Specified",status:N.status==="ONLINE"?"Online":N.status==="AWAY"?"Away":"Offline",ipmac:`${N.ipAddress||"-"} [${N.macAddress||"-"}]`,duration:"-",start:N.startedAt?new Date(N.startedAt).toLocaleString("fr-FR"):"-",end:N.endedAt?new Date(N.endedAt).toLocaleString("fr-FR"):"-",capDown:N.downloadCapKbps||N.capDownKbps||0,capUp:N.uploadCapKbps||N.capUpKbps||0,currentDown:0,currentUp:0,usageDown:N.usedDownMb||N.usageDownMb||0,usageUp:N.usedUpMb||N.usageUpMb||0,type:(k=N.guestPass)!=null&&k.code?`Guest Pass (${N.guestPass.code})`:N.type}}),M=async w=>{const N=Ns(w),I=await nt.listLoginSessions(N?{hotelId:N}:void 0);x(g(I))};j.useEffect(()=>{nt.listHotels().then(async w=>{h(w);const N=Yo(i,w);m(N),await M(N)}).catch(w=>alert(w.message||"Impossible de charger les sessions"))},[]),j.useEffect(()=>{f&&(M(f).catch(w=>alert(w.message||"Impossible de charger les sessions")),c([]))},[f]);const E=j.useMemo(()=>{const w=v.length,N=v.filter(k=>k.status==="Online").length,I=v.filter(k=>k.status==="Offline").length,L=v.filter(k=>k.status==="Away").length;return{total:w,online:N,offline:I,away:L}},[v]),A=j.useMemo(()=>{const w=t.trim().toLowerCase();return w?v.filter(N=>Object.values(N).some(I=>String(I).toLowerCase().includes(w))):v},[v,t]),y=w=>{c(N=>N.includes(w)?N.filter(I=>I!==w):[...N,w])},S=()=>{c(w=>w.length===A.length?[]:A.map(N=>N.id))},b=()=>{if(a.length===0){alert("Please select at least one login to remove");return}confirm(`Remove ${a.length} selected login(s)?`)&&nt.deleteLoginSessions(a).then(async()=>{await M(f),c([])}).catch(w=>alert(w.message||"Suppression impossible"))};return o.jsx(wr,{activePage:"LOGINS",activeSubPage:"Statut Logins",children:o.jsxs("div",{className:"statutLoginsPage",children:[o.jsxs("div",{className:"pageHeader",children:[o.jsx("h1",{className:"pageTitle",children:"Guest Logins"}),o.jsx("p",{className:"pageSubtitle",children:"All currently logged in users are listed."})]}),o.jsxs("div",{className:"displayInfo",children:["Displaying ",A.length," logins."]}),o.jsxs("div",{className:"statsBar",children:[o.jsxs("div",{className:"statItem",children:[o.jsx("span",{className:"statLabel",children:"TotalGuest:"}),o.jsx("span",{className:"statValue",children:E.total})]}),o.jsxs("div",{className:"statItem",children:[o.jsx("span",{className:"statLabel",children:"TotalOnline:"}),o.jsx("span",{className:"statValue online",children:E.online})]}),o.jsxs("div",{className:"statItem",children:[o.jsx("span",{className:"statLabel",children:"Total Offline:"}),o.jsx("span",{className:"statValue offline",children:E.offline})]}),o.jsxs("div",{className:"statItem",children:[o.jsx("span",{className:"statLabel",children:"Total Away:"}),o.jsx("span",{className:"statValue away",children:E.away})]})]}),o.jsxs("div",{className:"actionsBar",children:[e&&o.jsxs("select",{className:"filterSelect",value:f,onChange:w=>m(w.target.value),children:[o.jsx("option",{value:ei,children:"Tous les hôtels"}),d.map(w=>o.jsx("option",{value:w.id,children:w.name},w.id))]}),o.jsx("input",{type:"text",className:"searchInput",placeholder:"Search by room, name, IP/MAC, type...",value:t,onChange:w=>s(w.target.value)}),o.jsx("button",{className:"btn btnDanger",onClick:b,disabled:a.length===0,children:"Remove Selected"})]}),o.jsx("div",{className:"tableWrapper",children:o.jsxs("table",{className:"loginsTable",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{style:{width:"40px"},children:o.jsx("input",{type:"checkbox",checked:a.length===A.length&&A.length>0,onChange:S})}),o.jsx("th",{children:"Room"}),o.jsx("th",{children:"Name"}),o.jsx("th",{children:"Status"}),o.jsx("th",{children:"Type"}),o.jsx("th",{children:"IP/MAC"}),o.jsx("th",{children:"Duration"}),o.jsx("th",{children:"Start/End"}),o.jsx("th",{children:"Utilization(Down/Up)"}),o.jsx("th",{children:"Options"})]})}),o.jsx("tbody",{children:A.map(w=>o.jsxs("tr",{className:a.includes(w.id)?"selected":"",children:[o.jsx("td",{children:o.jsx("input",{type:"checkbox",checked:a.includes(w.id),onChange:()=>y(w.id)})}),o.jsx("td",{className:"roomCell",children:w.room}),o.jsx("td",{children:w.name}),o.jsx("td",{children:o.jsx("span",{className:`statusBadge ${w.status.toLowerCase()}`,children:w.status})}),o.jsx("td",{className:"typeCell",children:w.type}),o.jsx("td",{className:"macCell",children:w.ipmac}),o.jsx("td",{children:w.duration}),o.jsxs("td",{className:"dateCell",children:[o.jsxs("div",{children:["Start: ",w.start]}),o.jsxs("div",{children:["End: ",w.end]})]}),o.jsxs("td",{className:"utilizationCell",children:[o.jsxs("div",{children:["Cap: ",w.capDown," / ",w.capUp," Kb/s"]}),o.jsxs("div",{children:["Current: ",w.currentDown," / ",w.currentUp," Kb/s"]}),o.jsxs("div",{children:["Usage: ",w.usageDown," / ",w.usageUp," MB"]})]}),o.jsx("td",{className:"optionsCell",children:o.jsx("a",{href:"#",className:"optionLink",children:"Remove"})})]},w.id))})]})})]})})}function gx(i){if(!i)return"";const e=new Date(i),t=s=>String(s).padStart(2,"0");return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}T${t(e.getHours())}:${t(e.getMinutes())}`}function th(i){return i?new Date(i).toLocaleString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}):"—"}function rf(i,e){if(!i||!e)return"—";const t=new Date(e).getTime()-new Date(i).getTime();if(t<=0)return"—";const s=Math.floor(t/(1e3*60*60*24)),a=Math.floor(t%(1e3*60*60*24)/(1e3*60*60));return s===0?`${a}h`:a>0?`${s}j ${a}h`:`${s} jour${s>1?"s":""}`}function LM(i,e){if(!i||!e)return{label:"—",css:""};const t=Date.now(),s=new Date(i).getTime(),a=new Date(e).getTime();return t<s?{label:"À venir",css:"PENDING"}:t>a?{label:"Expiré",css:"EXPIRED"}:{label:"Accès actif",css:"ACTIVE"}}function xx(){return new Date().toISOString().slice(0,16)}function IM({session:i,rooms:e,onClose:t,onSave:s}){var w;const[a,c]=j.useState(i.clientName||""),[d,h]=j.useState(((w=i.room)==null?void 0:w.id)||""),[f,m]=j.useState(gx(i.startedAt)),[v,x]=j.useState(gx(i.endedAt)),[g,M]=j.useState(!1),[E,A]=j.useState(""),y=e.filter(N=>N.hotelId===i.hotelId),S=rf(f,v),b=async()=>{if(!a.trim()){A("Le nom est requis");return}if(!f){A("Date d'entrée requise");return}if(!v){A("Date de sortie requise");return}if(new Date(v)<=new Date(f)){A("La date de sortie doit être après la date d'entrée");return}M(!0),A("");try{await s(i.id,{clientName:a.trim(),roomId:d||void 0,startedAt:new Date(f).toISOString(),endedAt:new Date(v).toISOString()}),t()}catch(N){A(N.message||"Erreur lors de la modification")}finally{M(!1)}};return o.jsx("div",{className:"mlOverlay",onClick:t,children:o.jsxs("div",{className:"mlModal",onClick:N=>N.stopPropagation(),children:[o.jsxs("div",{className:"mlModalHeader",children:[o.jsx("h3",{className:"mlModalTitle",children:"Modifier le check-in"}),o.jsx("button",{className:"mlModalClose",onClick:t,children:"✕"})]}),o.jsxs("div",{className:"mlModalBody",children:[E&&o.jsx("div",{className:"mlErrorBox",children:E}),o.jsxs("div",{className:"mlModalField",children:[o.jsxs("label",{children:["Nom du client ",o.jsx("span",{className:"required",children:"*"})]}),o.jsx("input",{type:"text",className:"mlInput",value:a,onChange:N=>c(N.target.value),disabled:g})]}),o.jsxs("div",{className:"mlModalField",children:[o.jsx("label",{children:"Numéro de chambre"}),o.jsxs("select",{className:"mlSelectModal",value:d,onChange:N=>h(N.target.value),disabled:g,children:[o.jsx("option",{value:"",children:"— Sélectionner —"}),y.map(N=>o.jsxs("option",{value:N.id,children:[N.name||N.type,N.floor!=null?` (Étage ${N.floor})`:""]},N.id))]})]}),o.jsxs("div",{className:"mlModalGrid",children:[o.jsxs("div",{className:"mlModalField",children:[o.jsxs("label",{children:["Date d'entrée ",o.jsx("span",{className:"required",children:"*"})]}),o.jsx("input",{type:"datetime-local",className:"mlInput",value:f,onChange:N=>m(N.target.value),disabled:g})]}),o.jsxs("div",{className:"mlModalField",children:[o.jsxs("label",{children:["Date de sortie ",o.jsx("span",{className:"required",children:"*"})]}),o.jsx("input",{type:"datetime-local",className:"mlInput",value:v,min:f||void 0,onChange:N=>x(N.target.value),disabled:g})]})]}),S!=="—"&&o.jsxs("div",{className:"mlDurationBadge",children:["Durée du séjour : ",S]})]}),o.jsxs("div",{className:"mlModalFooter",children:[o.jsx("button",{className:"mlBtn mlBtnSecondary",onClick:t,disabled:g,children:"Annuler"}),o.jsx("button",{className:"mlBtn mlBtnPrimary",onClick:b,disabled:g,children:g?"Enregistrement…":"Sauvegarder"})]})]})})}function DM(){const i=Mi.getStoredUser(),e=(i==null?void 0:i.role)==="RECEPTIONIST",t=Oa(i),[s,a]=j.useState([]),[c,d]=j.useState([]),[h,f]=j.useState([]),[m,v]=j.useState(!1),[x,g]=j.useState(""),[M,E]=j.useState(""),[A,y]=j.useState(""),[S,b]=j.useState(""),[w,N]=j.useState(""),[I,L]=j.useState(""),[k,T]=j.useState(""),[U,Y]=j.useState(""),[G,J]=j.useState(null),H=async W=>{const me=Ns(W),fe=me?{hotelId:me}:void 0,[xe,Ce]=await Promise.all([nt.listRooms(fe),nt.listLoginSessions(fe)]);d(xe),f(Ce)};j.useEffect(()=>{nt.listHotels().then(async W=>{a(W);const me=Yo(i,W);g(me),await H(me)}).catch(W=>alert(W.message||"Chargement impossible"))},[]),j.useEffect(()=>{x&&(H(x).catch(W=>alert(W.message||"Chargement impossible")),y(""),b(""))},[x]);const Q=j.useMemo(()=>c.filter(W=>W.hotelId===x),[c,x]),X=W=>{y(W);const me=Q.find(fe=>[fe.name,fe.type].filter(Boolean).some(xe=>String(xe).toLowerCase()===W.trim().toLowerCase()));b(me?me.id:"")},O=W=>{b(W);const me=Q.find(fe=>fe.id===W);me&&y(me.name||me.type||"")},V=!!S,$=!!A.trim(),ue=j.useMemo(()=>rf(w,I),[w,I]),se=async()=>{var W;if(!jo(x)){alert("Sélectionnez d'abord un hôtel précis");return}if(!M.trim()){alert("Le nom du client est requis");return}if(!$){alert("Saisissez un numéro de chambre");return}if(!w){alert("La date d'entrée est requise");return}if(!I){alert("La date de sortie est requise");return}if(new Date(I)<=new Date(w)){alert("La date de sortie doit être après la date d'entrée");return}v(!0);try{const me=await nt.createManualLogin({hotelId:x,roomId:S||void 0,roomNumber:A.trim(),clientName:M.trim(),startedAt:new Date(w).toISOString(),endedAt:new Date(I).toISOString()});T(((W=me.guestPass)==null?void 0:W.code)||"");const fe=Ns(x),xe=await nt.listLoginSessions(fe?{hotelId:fe}:void 0);f(xe),E(""),y(""),b(""),N(""),L("")}catch(me){alert(me.message||"Échec du check-in")}finally{v(!1)}},B=()=>{E(""),y(""),b(""),N(""),L(""),T("")},re=async(W,me)=>{await nt.updateLoginSession(W,me);const fe=Ns(x),xe=await nt.listLoginSessions(fe?{hotelId:fe}:void 0);f(xe)},Oe=async W=>{if(confirm("Supprimer ce check-in ?"))try{await nt.deleteLoginSessions([W]),f(me=>me.filter(fe=>fe.id!==W))}catch(me){alert(me.message||"Suppression impossible")}},Te=j.useMemo(()=>{const W=U.trim().toLowerCase(),me=h.filter(fe=>{const xe=fe.type==="Manual Login",Ce=x===ei||fe.hotelId===x;return xe&&Ce});return W?me.filter(fe=>{var xe,Ce;return[fe.clientName,(xe=fe.room)==null?void 0:xe.name,(Ce=fe.room)==null?void 0:Ce.type,fe.ipAddress,fe.macAddress].some(He=>String(He||"").toLowerCase().includes(W))}):me},[h,U]),Re=jo(x);return o.jsxs(wr,{activePage:"LOGINS",activeSubPage:"Manual Login",children:[o.jsxs("div",{className:"mlPage",children:[o.jsxs("div",{className:"mlHeader",children:[o.jsx("h1",{className:"mlTitle",children:"Manual Login"}),o.jsx("p",{className:"mlSubtitle",children:"Enregistrez un client en précisant son nom, son numéro de chambre et ses dates de séjour. L'accès internet sera actif uniquement pendant la période définie."})]}),o.jsxs("div",{className:"mlCard",children:[o.jsxs("div",{className:"mlCardHeader",children:[o.jsx("h2",{className:"mlSectionTitle",children:"Nouveau check-in client"}),t&&o.jsxs("select",{className:"mlSelectModal",value:x,onChange:W=>g(W.target.value),children:[o.jsx("option",{value:ei,children:"Tous les hôtels"}),s.map(W=>o.jsx("option",{value:W.id,children:W.name},W.id))]})]}),o.jsxs("div",{className:"mlCardBody",children:[x===ei&&o.jsx("div",{className:"mlErrorBox",children:"Vue globale active : sélectionnez un hôtel précis pour enregistrer un check-in."}),o.jsxs("div",{className:"mlFormGrid",children:[o.jsxs("div",{className:"mlField",children:[o.jsxs("label",{htmlFor:"clientName",children:["Nom du client ",o.jsx("span",{className:"required",children:"*"})]}),o.jsx("p",{className:"mlFieldHelp",children:"Prénom et nom tel qu'indiqué sur la réservation."}),o.jsx("input",{id:"clientName",type:"text",className:"mlInput",placeholder:"Ex : Felix TANZI",value:M,onChange:W=>E(W.target.value),disabled:m||!Re})]}),o.jsxs("div",{className:"mlField",children:[o.jsxs("label",{htmlFor:"roomText",children:["Numéro de chambre ",o.jsx("span",{className:"required",children:"*"})]}),o.jsx("p",{className:"mlFieldHelp",children:"Tapez le numéro directement, ou sélectionnez dans la liste."}),o.jsxs("div",{className:"mlRoomInputWrapper",children:[o.jsx("input",{id:"roomText",type:"text",list:"roomSuggestions",className:`mlInput ${$?"mlInputValid":""}`,placeholder:"Ex : 101",value:A,onChange:W=>X(W.target.value),disabled:m||!Re,autoComplete:"off"}),A&&!V&&o.jsx("span",{className:"mlInputHint mlInputHintOk",children:"Nouvelle chambre: elle sera créée automatiquement"}),V&&o.jsx("span",{className:"mlInputHint mlInputHintOk",children:"✓ Chambre trouvée"}),o.jsx("datalist",{id:"roomSuggestions",children:Q.map(W=>o.jsx("option",{value:W.name||W.type,children:W.type},W.id))})]}),o.jsxs("select",{className:"mlSelect",value:S,onChange:W=>O(W.target.value),disabled:m||!Re,children:[o.jsx("option",{value:"",children:"— Parcourir les chambres —"}),Q.map(W=>o.jsxs("option",{value:W.id,children:[W.name||W.type,W.type&&W.name?` — ${W.type}`:"",W.floor!=null?` (Étage ${W.floor})`:""]},W.id))]})]}),o.jsxs("div",{className:"mlField",children:[o.jsxs("label",{htmlFor:"checkIn",children:["Date & heure d'entrée ",o.jsx("span",{className:"required",children:"*"})]}),o.jsx("p",{className:"mlFieldHelp",children:"Début d'accès à internet pour ce client."}),o.jsx("input",{id:"checkIn",type:"datetime-local",className:"mlInput",value:w,min:xx(),onChange:W=>N(W.target.value),disabled:m||!Re})]}),o.jsxs("div",{className:"mlField",children:[o.jsxs("label",{htmlFor:"checkOut",children:["Date & heure de sortie ",o.jsx("span",{className:"required",children:"*"})]}),o.jsx("p",{className:"mlFieldHelp",children:"Fin d'accès à internet pour ce client."}),o.jsx("input",{id:"checkOut",type:"datetime-local",className:"mlInput",value:I,min:w||xx(),onChange:W=>L(W.target.value),disabled:m||!Re}),ue!=="—"&&o.jsxs("span",{className:"mlDurationBadge",children:["Durée du séjour : ",ue]})]})]}),o.jsxs("div",{className:"mlActions",children:[o.jsx("button",{className:"mlBtn mlBtnSecondary",onClick:B,disabled:m,children:"Annuler"}),o.jsx("button",{className:"mlBtn mlBtnPrimary",onClick:se,disabled:m||!Re||!M.trim()||!$||!w||!I,children:m?"Enregistrement…":"Valider le check-in"})]}),k&&o.jsxs("div",{className:"mlDurationBadge",children:["Code Wi-Fi à remettre au client : ",o.jsx("strong",{children:k})]})]})]}),o.jsxs("div",{className:"mlTableCard",children:[o.jsxs("div",{className:"mlTableHeader",children:[o.jsxs("div",{children:[o.jsx("h2",{className:"mlSectionTitle",children:"Check-ins enregistrés"}),o.jsxs("p",{className:"mlTableCount",children:[Te.length," client",Te.length!==1?"s":""," affiché",Te.length!==1?"s":""]})]}),o.jsx("input",{type:"text",className:"mlSearch",placeholder:"Rechercher un client, une chambre, une IP…",value:U,onChange:W=>Y(W.target.value)})]}),o.jsx("div",{className:"mlTableWrapper",children:o.jsxs("table",{className:"mlTable",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Client"}),o.jsx("th",{children:"N° Chambre"}),o.jsx("th",{children:"Type"}),o.jsx("th",{children:"Accès"}),o.jsx("th",{children:"Code Wi-Fi"}),o.jsx("th",{children:"Entrée"}),o.jsx("th",{children:"Sortie"}),o.jsx("th",{children:"Durée"}),o.jsx("th",{children:"IP / MAC"}),o.jsx("th",{children:"Créé le"}),o.jsx("th",{children:"Actions"})]})}),o.jsx("tbody",{children:Te.length===0?o.jsx("tr",{children:o.jsx("td",{colSpan:11,className:"mlEmptyRow",children:"Aucun check-in enregistré pour le moment."})}):Te.map(W=>{var fe,xe,Ce;const me=LM(W.startedAt,W.endedAt);return o.jsxs("tr",{children:[o.jsx("td",{className:"mlCellBold",children:W.clientName||"—"}),o.jsx("td",{children:((fe=W.room)==null?void 0:fe.name)||"—"}),o.jsx("td",{children:((xe=W.room)==null?void 0:xe.type)||"—"}),o.jsx("td",{children:me.css?o.jsx("span",{className:`mlBadge mlBadge${me.css}`,children:me.label}):"—"}),o.jsx("td",{className:"mlCellMono",children:((Ce=W.guestPass)==null?void 0:Ce.code)||"—"}),o.jsx("td",{className:"mlCellDate",children:th(W.startedAt)}),o.jsx("td",{className:"mlCellDate",children:th(W.endedAt)}),o.jsx("td",{className:"mlCellDuration",children:rf(W.startedAt,W.endedAt)}),o.jsxs("td",{className:"mlCellMono",children:[W.ipAddress&&o.jsx("span",{className:"mlIpLine",children:W.ipAddress}),W.macAddress&&o.jsx("span",{className:"mlMacLine",children:W.macAddress}),!W.ipAddress&&!W.macAddress&&"—"]}),o.jsx("td",{className:"mlCellDate",children:th(W.createdAt)}),o.jsx("td",{children:o.jsxs("div",{className:"mlActionBtns",children:[o.jsx("button",{className:"mlActionBtn mlActionBtnEdit",title:"Modifier",onClick:()=>J(W),children:"✏️"}),!e&&o.jsx("button",{className:"mlActionBtn mlActionBtnDelete",title:"Supprimer",onClick:()=>Oe(W.id),children:"🗑️"})]})})]},W.id)})})]})})]})]}),G&&o.jsx(IM,{session:G,rooms:c,onClose:()=>J(null),onSave:re})]})}function UM(){const[i]=j.useState([]),[e]=j.useState([]),[t]=j.useState([{id:9,name:"Hilton Free Websites",type:"whitelist",hostnames:["hilton.com","hiltonapi.com"]},{id:13,name:"Global",type:"blacklist",hostnames:["www.guestek.com"]}]),s=()=>{console.log("Add Free Website")},a=()=>{console.log("Add Blacklisted Website")};return o.jsx(wr,{activePage:"LOGINS",activeSubPage:"Web Site Manager",children:o.jsxs("div",{className:"websitesManagerPage",children:[o.jsxs("div",{className:"pageHeader",children:[o.jsx("h1",{className:"pageTitle",children:"Websites Manager"}),o.jsx("p",{className:"pageSubtitle",children:"Add, modify and remove free websites and blacklisted websites."})]}),o.jsxs("section",{className:"websiteSection",children:[o.jsxs("div",{className:"sectionHeader",children:[o.jsx("h2",{className:"sectionTitle",children:"Free Websites"}),o.jsx("button",{className:"btn btnPrimary",onClick:s,children:"Add Free Website"})]}),o.jsx("div",{className:"tableWrapper",children:o.jsxs("table",{className:"websiteTable",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Name"}),o.jsx("th",{children:"Hostname"}),o.jsx("th",{children:"URL"}),o.jsx("th",{children:"Display"}),o.jsx("th",{children:"Order"}),o.jsx("th",{children:"Comments"}),o.jsx("th",{children:"Options"})]})}),o.jsx("tbody",{children:i.length===0?o.jsx("tr",{children:o.jsx("td",{colSpan:"7",className:"emptyState",children:'No free websites configured. Click "Add Free Website" to get started.'})}):i.map(c=>o.jsxs("tr",{children:[o.jsx("td",{children:c.name}),o.jsx("td",{children:c.hostname}),o.jsx("td",{children:c.url}),o.jsx("td",{children:c.display}),o.jsx("td",{children:c.order}),o.jsx("td",{children:c.comments}),o.jsxs("td",{className:"optionsCell",children:[o.jsx("button",{className:"optionBtn",children:"Edit"}),o.jsx("button",{className:"optionBtn danger",children:"Delete"})]})]},c.id))})]})})]}),o.jsxs("section",{className:"websiteSection",children:[o.jsxs("div",{className:"sectionHeader",children:[o.jsx("h2",{className:"sectionTitle",children:"Blacklisted Websites"}),o.jsx("button",{className:"btn btnDanger",onClick:a,children:"Add Blacklisted Website"})]}),o.jsx("div",{className:"tableWrapper",children:o.jsxs("table",{className:"websiteTable",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Name"}),o.jsx("th",{children:"Hostname"}),o.jsx("th",{children:"Comments"}),o.jsx("th",{children:"Options"})]})}),o.jsx("tbody",{children:e.length===0?o.jsx("tr",{children:o.jsx("td",{colSpan:"4",className:"emptyState",children:"No blacklisted websites configured."})}):e.map(c=>o.jsxs("tr",{children:[o.jsx("td",{children:c.name}),o.jsx("td",{children:c.hostname}),o.jsx("td",{children:c.comments}),o.jsxs("td",{className:"optionsCell",children:[o.jsx("button",{className:"optionBtn",children:"Edit"}),o.jsx("button",{className:"optionBtn danger",children:"Delete"})]})]},c.id))})]})})]}),o.jsxs("section",{className:"globalRulesSection",children:[o.jsxs("div",{className:"rulesHeader",children:[o.jsx("h2",{className:"sectionTitle",children:"Global Rules"}),o.jsxs("p",{className:"rulesDescription",children:["Websites whitelisted ",o.jsx("span",{className:"green",children:"(green)"})," and blacklisted"," ",o.jsx("span",{className:"red",children:"(red)"})," for this client through Global Website Manager."]})]}),o.jsxs("div",{className:"rulesGrid",children:[o.jsxs("div",{className:"rulesColumn",children:[o.jsx("h3",{className:"columnTitle",children:"Website List"}),o.jsx("div",{className:"rulesList",children:t.map(c=>o.jsxs("div",{className:`ruleItem ${c.type==="whitelist"?"whitelist":"blacklist"}`,children:["List ID: ",c.id,", List Name: ",c.name]},c.id))})]}),o.jsxs("div",{className:"rulesColumn",children:[o.jsx("h3",{className:"columnTitle",children:"Hostname"}),o.jsx("div",{className:"rulesList",children:t.map(c=>o.jsx("div",{className:"hostnamesList",children:c.hostnames.map((d,h)=>o.jsx("div",{className:`hostnameItem ${c.type==="whitelist"?"whitelist":"blacklist"}`,children:d.startsWith("*")?d:`* ${d}`},h))},c.id))})]})]})]})]})})}function FM(){const[i,e]=j.useState([]),[t,s]=j.useState(""),[a,c]=j.useState({uploadClearAddress:1500,downloadClearAddress:1500,uploadGuestPass:1500,downloadGuestPass:1500,maxPassDuration:180,maxCountPass:600,outageModeEnabled:!1}),[d,h]=j.useState(!1);j.useEffect(()=>{nt.listHotels().then(async x=>{var E;e(x);const g=((E=x[0])==null?void 0:E.id)||"";if(s(g),!g)return;const M=await nt.getGuestConfig(g);c({uploadClearAddress:M.uploadClearAddressKbps,downloadClearAddress:M.downloadClearAddressKbps,uploadGuestPass:M.uploadGuestPassKbps,downloadGuestPass:M.downloadGuestPassKbps,maxPassDuration:M.maxPassDurationDays,maxCountPass:M.maxCountPass,outageModeEnabled:M.outageModeEnabled})}).catch(x=>alert(x.message||"Impossible de charger la configuration"))},[]);const f=(x,g)=>{c(M=>({...M,[x]:g})),h(!0)},m=async()=>{if(!t){alert("Sélectionnez un hôtel");return}try{await nt.upsertGuestConfig({hotelId:t,uploadClearAddressKbps:Number(a.uploadClearAddress),downloadClearAddressKbps:Number(a.downloadClearAddress),uploadGuestPassKbps:Number(a.uploadGuestPass),downloadGuestPassKbps:Number(a.downloadGuestPass),maxPassDurationDays:Number(a.maxPassDuration),maxCountPass:Number(a.maxCountPass),outageModeEnabled:!!a.outageModeEnabled}),alert("Configuration updated successfully!"),h(!1)}catch(x){alert(x.message||"Failed to update configuration")}},v=()=>{confirm("Are you sure you want to restore default settings?")&&(c({uploadClearAddress:1500,downloadClearAddress:1500,uploadGuestPass:1500,downloadGuestPass:1500,maxPassDuration:180,maxCountPass:600,outageModeEnabled:!1}),h(!0))};return o.jsx(wr,{activePage:"LOGINS",activeSubPage:"Config Code",children:o.jsxs("div",{className:"configCodePage",children:[o.jsxs("div",{className:"pageHeader",children:[o.jsx("h1",{className:"pageTitle",children:"Guest Global Configuration"}),o.jsx("p",{className:"pageSubtitle",children:"General guest configuration settings for the OVI client."})]}),o.jsxs("div",{className:"warningBanner",children:[o.jsx("strong",{children:"⚠️ Important:"})," Maximum value for Max Count Guest Pass Creation is 1000."]}),o.jsxs("div",{className:"configCard",children:[o.jsxs("div",{className:"configSection",children:[o.jsx("h3",{className:"sectionTitle",children:"Hotel Selection"}),o.jsxs("div",{className:"configField",children:[o.jsx("label",{htmlFor:"hotelId",children:"Hotel"}),o.jsxs("select",{id:"hotelId",value:t,onChange:async x=>{const g=x.target.value;if(s(g),!!g)try{const M=await nt.getGuestConfig(g);c({uploadClearAddress:M.uploadClearAddressKbps,downloadClearAddress:M.downloadClearAddressKbps,uploadGuestPass:M.uploadGuestPassKbps,downloadGuestPass:M.downloadGuestPassKbps,maxPassDuration:M.maxPassDurationDays,maxCountPass:M.maxCountPass,outageModeEnabled:M.outageModeEnabled}),h(!1)}catch(M){alert(M.message||"Impossible de charger la configuration")}},children:[o.jsx("option",{value:"",children:"Select hotel"}),i.map(x=>o.jsx("option",{value:x.id,children:x.name},x.id))]})]})]}),o.jsxs("div",{className:"configSection",children:[o.jsx("h3",{className:"sectionTitle",children:"General Info"}),o.jsxs("div",{className:"configGrid",children:[o.jsxs("div",{className:"configField",children:[o.jsx("label",{htmlFor:"uploadClearAddress",children:"guestConfig.defaultUploadClearAddress"}),o.jsx("p",{className:"fieldDescription",children:"Clear Address Upload Default"}),o.jsx("input",{id:"uploadClearAddress",type:"number",value:a.uploadClearAddress,onChange:x=>f("uploadClearAddress",Number(x.target.value)),min:"0",max:"15000"})]}),o.jsxs("div",{className:"configField",children:[o.jsx("label",{htmlFor:"downloadClearAddress",children:"guestConfig.defaultDownloadClearAddress"}),o.jsx("p",{className:"fieldDescription",children:"Clear Address Download Default"}),o.jsx("input",{id:"downloadClearAddress",type:"number",value:a.downloadClearAddress,onChange:x=>f("downloadClearAddress",Number(x.target.value)),min:"0",max:"15000"})]}),o.jsxs("div",{className:"configField",children:[o.jsx("label",{htmlFor:"uploadGuestPass",children:"guestConfig.defaultUploadGuestPass"}),o.jsx("p",{className:"fieldDescription",children:"Guest Pass Upload Default"}),o.jsx("input",{id:"uploadGuestPass",type:"number",value:a.uploadGuestPass,onChange:x=>f("uploadGuestPass",Number(x.target.value)),min:"0",max:"15000"})]}),o.jsxs("div",{className:"configField",children:[o.jsx("label",{htmlFor:"downloadGuestPass",children:"guestConfig.defaultDownloadGuestPass"}),o.jsx("p",{className:"fieldDescription",children:"Guest Pass Download Default"}),o.jsx("input",{id:"downloadGuestPass",type:"number",value:a.downloadGuestPass,onChange:x=>f("downloadGuestPass",Number(x.target.value)),min:"0",max:"15000"})]}),o.jsxs("div",{className:"configField",children:[o.jsx("label",{htmlFor:"maxPassDuration",children:"guestConfig.maxPassDuration"}),o.jsx("p",{className:"fieldDescription",children:"Maximum passcode duration in days (max 1,365 days)"}),o.jsx("input",{id:"maxPassDuration",type:"number",value:a.maxPassDuration,onChange:x=>f("maxPassDuration",Number(x.target.value)),min:"1",max:"1365"})]}),o.jsxs("div",{className:"configField",children:[o.jsx("label",{htmlFor:"maxCountPass",children:"guestConfig.maxCountPass"}),o.jsx("p",{className:"fieldDescription",children:"Max Count Passcode Creation"}),o.jsx("input",{id:"maxCountPass",type:"number",value:a.maxCountPass,onChange:x=>f("maxCountPass",Number(x.target.value)),min:"1",max:"1000"})]}),o.jsxs("div",{className:"configField radioField",children:[o.jsx("label",{children:"servletConfig.outageModeEnabled"}),o.jsx("p",{className:"fieldDescription",children:"Activate outage mode for 3rd Party Login Pages (MPA, Elevance, Generic API)"}),o.jsxs("div",{className:"radioGroup",children:[o.jsxs("label",{className:"radioLabel",children:[o.jsx("input",{type:"radio",name:"outageMode",checked:a.outageModeEnabled===!0,onChange:()=>f("outageModeEnabled",!0)}),o.jsx("span",{children:"True"})]}),o.jsxs("label",{className:"radioLabel",children:[o.jsx("input",{type:"radio",name:"outageMode",checked:a.outageModeEnabled===!1,onChange:()=>f("outageModeEnabled",!1)}),o.jsx("span",{children:"False"})]})]})]})]})]}),o.jsxs("div",{className:"configActions",children:[o.jsx("button",{className:"btn btnPrimary",onClick:m,disabled:!d,children:"Modify"}),o.jsx("button",{className:"btn btnSecondary",onClick:v,children:"Restore Defaults"})]})]})]})})}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OM=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),kM=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase()),vx=i=>{const e=kM(i);return e.charAt(0).toUpperCase()+e.slice(1)},iv=(...i)=>i.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var jM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BM=j.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:a="",children:c,iconNode:d,...h},f)=>j.createElement("svg",{ref:f,...jM,width:e,height:e,stroke:i,strokeWidth:s?Number(t)*24/Number(e):t,className:iv("lucide",a),...h},[...d.map(([m,v])=>j.createElement(m,v)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $t=(i,e)=>{const t=j.forwardRef(({className:s,...a},c)=>j.createElement(BM,{ref:c,iconNode:e,className:iv(`lucide-${OM(vx(i))}`,`lucide-${i}`,s),...a}));return t.displayName=vx(i),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zM=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],HM=$t("activity",zM);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GM=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],_x=$t("bell",GM);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VM=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6",key:"5bb3ad"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8",key:"tap9e0"}]],WM=$t("bell-ring",VM);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XM=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]],sf=$t("building-2",XM);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $M=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],nh=$t("chevron-right",$M);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qM=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],ih=$t("database",qM);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YM=[["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"37hlfg"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"8",cy:"16",r:"6",key:"10v15b"}],["path",{d:"M9.5 17.5 8 16.25V14",key:"1o80t2"}]],yx=$t("file-clock",YM);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KM=[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]],ZM=$t("gauge",KM);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JM=[["path",{d:"M10 22v-6.57",key:"1wmca3"}],["path",{d:"M12 11h.01",key:"z322tv"}],["path",{d:"M12 7h.01",key:"1ivr5q"}],["path",{d:"M14 15.43V22",key:"1q2vjd"}],["path",{d:"M15 16a5 5 0 0 0-6 0",key:"o9wqvi"}],["path",{d:"M16 11h.01",key:"xkw8gn"}],["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 7h.01",key:"1vti4s"}],["rect",{x:"4",y:"2",width:"16",height:"20",rx:"2",key:"1uxh74"}]],af=$t("hotel",JM);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QM=[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]],eE=$t("key-round",QM);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tE=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],nE=$t("layout-dashboard",tE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iE=[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]],rE=$t("lock-keyhole",iE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sE=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],aE=$t("log-out",sE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oE=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],Bo=$t("network",oE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lE=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],cE=$t("pencil",lE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uE=[["path",{d:"M12 22v-5",key:"1ega77"}],["path",{d:"M9 8V2",key:"14iosj"}],["path",{d:"M15 8V2",key:"18g5xt"}],["path",{d:"M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z",key:"osxo6l"}]],rh=$t("plug",uE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dE=[["path",{d:"M4.9 16.1C1 12.2 1 5.8 4.9 1.9",key:"s0qx1y"}],["path",{d:"M7.8 4.7a6.14 6.14 0 0 0-.8 7.5",key:"1idnkw"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}],["path",{d:"M16.2 4.8c2 2 2.26 5.11.8 7.47",key:"ojru2q"}],["path",{d:"M19.1 1.9a9.96 9.96 0 0 1 0 14.1",key:"rhi7fg"}],["path",{d:"M9.5 18h5",key:"mfy3pd"}],["path",{d:"m8 22 4-11 4 11",key:"25yftu"}]],Sx=$t("radio-tower",dE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hE=[["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6.01 18H6",key:"19vcac"}],["path",{d:"M10.01 18H10",key:"uamcmx"}],["path",{d:"M15 10v4",key:"qjz1xs"}],["path",{d:"M17.84 7.17a4 4 0 0 0-5.66 0",key:"1rif40"}],["path",{d:"M20.66 4.34a8 8 0 0 0-11.31 0",key:"6a5xfq"}]],Mx=$t("router",hE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fE=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],sh=$t("save",fE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pE=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],mE=$t("search",pE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gE=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],xE=$t("server",gE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vE=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Ex=$t("settings",vE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _E=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],jc=$t("shield-check",_E);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yE=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],SE=$t("trash-2",yE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ME=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],ah=$t("users",ME);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EE=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],Fo=$t("wifi",EE);function bE(i){const e=i.reduce((a,c)=>a+c.value,0);if(e===0)return{background:"conic-gradient(#dbe7f5 0deg 360deg)",total:0};let t=0;return{background:`conic-gradient(${i.map(a=>{const c=a.value/e*360,d=`${a.color} ${t}deg ${t+c}deg`;return t+=c,d}).join(", ")})`,total:e}}function wE(i){const e=`${i.model||""} ${i.serialNumber||""}`.toLowerCase();return e.includes("switch")?"Switch":e.includes("access")||e.includes("ap-")||e.includes("wifi")?"Access Point":e.includes("router")||e.includes("gateway")?"Gateway":"Autre equipement"}function TE(i){if(!i)return"N/A";const e=new Date(i),t=Date.now()-e.getTime(),s=Math.max(0,Math.floor(t/6e4));if(s<1)return"A l’instant";if(s<60)return`Il y a ${s} min`;const a=Math.floor(s/60);return a<24?`Il y a ${a} h`:`Il y a ${Math.floor(a/24)} j`}function CE(){const i=new Date,e=new Date;e.setDate(i.getDate()-6);const t=s=>s.toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric"});return`${t(e)} - ${t(i)}`}function oh({title:i,items:e,subtitle:t}){const{background:s,total:a}=j.useMemo(()=>bE(e),[e]);return o.jsxs("section",{className:"dashboardPanel chartPanel",children:[o.jsxs("div",{className:"panelHeader",children:[o.jsxs("div",{children:[o.jsx("h3",{children:i}),t&&o.jsx("p",{children:t})]}),o.jsxs("span",{children:[a," total"]})]}),o.jsxs("div",{className:"chartPanelBody",children:[o.jsxs("div",{className:"donutWrap",children:[o.jsx("div",{className:"donutChart",style:{background:s}}),o.jsxs("div",{className:"donutCenter",children:[o.jsx("strong",{children:a}),o.jsx("span",{children:"Total"})]})]}),o.jsx("ul",{className:"chartLegend",children:e.map(c=>o.jsxs("li",{children:[o.jsx("span",{className:"legendDot",style:{backgroundColor:c.color}}),o.jsx("span",{className:"legendText",children:c.label}),o.jsx("strong",{children:c.value})]},c.label))})]})]})}function AE(){var y,S;const i=Is(),e=Mi.getStoredUser(),t=Oa(e),[s,a]=j.useState([]),[c,d]=j.useState(""),[h,f]=j.useState(null),[m,v]=j.useState(!0),x=async(b,w=s)=>{v(!0);const N=Ns(b),I=N?{hotelId:N}:void 0,[L,k,T,U]=await Promise.all([nt.getDashboardOverview(I),nt.listDevices(I),nt.listLoginSessions(I),nt.listWifiConfigs(I)]),Y=N?w.filter(G=>G.id===N):w;f({overview:L,devices:k,sessions:T,hotels:Y,wifiConfigs:U}),v(!1)};j.useEffect(()=>{let b=!0;return nt.listHotels().then(async w=>{if(!b)return;a(w);const N=Yo(e,w);d(N),await x(N,w)}).catch(w=>{alert(w.message||"Impossible de charger le dashboard")}).finally(()=>{b&&v(!1)}),()=>{b=!1}},[]),j.useEffect(()=>{!c||s.length===0||x(c).catch(b=>{v(!1),alert(b.message||"Impossible de charger le dashboard")})},[c]);const g=j.useMemo(()=>{var $,ue;if(!h)return null;const{overview:b,devices:w,sessions:N,hotels:I,wifiConfigs:L}=h,k=w.reduce((se,B)=>{const re=String(B.status||"OFFLINE");return se[re]=(se[re]||0)+1,se},{ONLINE:0,OFFLINE:0,UNSTABLE:0}),T=w.reduce((se,B)=>{const re=B.zone||"Non assigne";return se[re]=(se[re]||0)+1,se},{}),U=N.reduce((se,B)=>{var Oe;const re=(Oe=B.guestPass)!=null&&Oe.code?"Guest Pass":B.type||"Autre";return se[re]=(se[re]||0)+1,se},{}),Y=w.reduce((se,B)=>{const re=wE(B);return se[re]=(se[re]||0)+1,se},{}),G=L.filter(se=>se.status==="ACTIVE").length,J=I.length>0?Math.round(G/I.length*100):0,H=b.activeSessions||N.filter(se=>se.status==="ONLINE").length,Q=b.rooms||0,X=Q>0?Math.min(100,Math.round(H/Q*100)):0,O=(($=b.recentAlerts)==null?void 0:$.length)||0,V=[{label:"Chambres",value:b.rooms||0,tone:"blue",helper:`${X}% occupation reseau`,icon:af},{label:"Equipements",value:w.length,tone:"slate",helper:`${k.ONLINE||0} en ligne`,icon:Mx},{label:"Switches actifs",value:Y.Switch||0,tone:"green",helper:"Infrastructure filaire",icon:Bo},{label:"Access Points",value:Y["Access Point"]||0,tone:"gold",helper:"Couverture Wi-Fi",icon:Sx}];return{overview:b,devices:w,sessions:N,hotels:I,wifiConfigs:L,statusCounts:k,zoneCounts:T,sessionTypes:U,activeWifiConfigs:G,wifiCoverage:J,activeSessions:H,roomUsage:X,openAlerts:O,overviewCards:V,activeHotelsLabel:c===ei?"Vue multi-sites":((ue=I[0])==null?void 0:ue.name)||"Hotel MboaLink"}},[h,c]),M=j.useMemo(()=>g?[{label:"Online",value:g.statusCounts.ONLINE||0,color:"#2563eb"},{label:"Offline",value:g.statusCounts.OFFLINE||0,color:"#64748b"},{label:"Instable",value:g.statusCounts.UNSTABLE||0,color:"#f2c300"}]:[],[g]),E=j.useMemo(()=>{if(!g)return[];const b=["#2563eb","#0f766e","#16a34a","#f2c300","#dc2626","#7c3aed"];return Object.entries(g.zoneCounts).slice(0,6).map(([w,N],I)=>({label:w,value:Number(N),color:b[I%b.length]}))},[g]),A=j.useMemo(()=>{if(!g)return[];const b=["#2563eb","#7c3aed","#f2c300","#16a34a"];return Object.entries(g.sessionTypes).slice(0,4).map(([w,N],I)=>({label:w,value:Number(N),color:b[I%b.length]}))},[g]);return o.jsx(wr,{activePage:"DASHBOARD",activeSubPage:"",children:o.jsxs("div",{className:"dashboardPage dashboardShell",children:[o.jsxs("div",{className:"dashboardTopbar",children:[o.jsxs("div",{className:"dashboardBrandBlock",children:[o.jsx("span",{className:"dashboardBrandName",children:"MboaLink"}),o.jsxs("div",{className:"dashboardTabs",children:[o.jsx("button",{type:"button",className:"dashboardTab active",children:"Dashboard"}),o.jsx("button",{type:"button",className:"dashboardTab",children:"Operations"})]})]}),o.jsxs("div",{className:"dashboardMeta",children:[t&&o.jsxs("select",{className:"dashboardScopeSelect",value:c,onChange:b=>d(b.target.value),children:[o.jsx("option",{value:ei,children:"Tous les hôtels"}),s.map(b=>o.jsx("option",{value:b.id,children:b.name},b.id))]}),o.jsxs("span",{className:"dashboardLiveBadge",children:[o.jsx("span",{}),"Live"]}),o.jsx("span",{className:"dashboardPeriod",children:CE()})]})]}),o.jsxs("div",{className:"dashboardHero",children:[o.jsxs("div",{children:[o.jsx("p",{className:"dashboardEyebrow",children:"Vue generale"}),o.jsx("h1",{className:"dashboardTitle",children:(g==null?void 0:g.activeHotelsLabel)||"MboaLink Dashboard"}),o.jsx("p",{className:"dashboardSubtitle",children:"Supervision reseau, activite client et etat operationnel des hotels depuis un espace clair et exploitable."})]}),o.jsxs("div",{className:"dashboardHeroActions",children:[o.jsxs("button",{type:"button",className:"heroButton secondary",onClick:()=>i(st.public.networkMap),children:[o.jsx(Bo,{size:16}),"Network Map"]}),o.jsxs("button",{type:"button",className:"heroButton success",children:[o.jsx(WM,{size:16}),"Alertes actives"]})]})]}),o.jsxs("div",{className:"serviceStatusRow",children:[o.jsxs("div",{className:"servicePill success",children:[o.jsx("span",{className:"serviceIcon",children:o.jsx(xE,{size:18})}),o.jsxs("div",{children:[o.jsx("strong",{children:"OVI Server"}),o.jsx("small",{children:g?"Disponible":"Chargement"})]})]}),o.jsxs("div",{className:`servicePill ${g&&g.activeWifiConfigs>0?"warning":"neutral"}`,children:[o.jsx("span",{className:"serviceIcon",children:o.jsx(Fo,{size:18})}),o.jsxs("div",{children:[o.jsx("strong",{children:"Captive Portal"}),o.jsx("small",{children:g?`${g.activeWifiConfigs} config(s) active(s)`:"Chargement"})]})]}),o.jsxs("div",{className:`servicePill ${g&&g.statusCounts.ONLINE>0?"info":"neutral"}`,children:[o.jsx("span",{className:"serviceIcon",children:o.jsx(HM,{size:18})}),o.jsxs("div",{children:[o.jsx("strong",{children:"Internet Uplink"}),o.jsx("small",{children:g?`${g.statusCounts.ONLINE} equipements en ligne`:"Chargement"})]})]})]}),m&&o.jsx("p",{className:"dashboardLoading",children:"Chargement du dashboard..."}),g&&o.jsxs("div",{className:"dashboardContent",children:[o.jsx("aside",{className:"kpiColumn",children:g.overviewCards.map(b=>o.jsxs("article",{className:`kpiTile ${b.tone}`,children:[o.jsxs("div",{className:"kpiTileTop",children:[o.jsx("span",{children:b.label}),o.jsx(b.icon,{size:18})]}),o.jsx("strong",{children:b.value}),o.jsx("small",{children:b.helper})]},b.label))}),o.jsxs("div",{className:"dashboardMain",children:[o.jsxs("div",{className:"dashboardChartsRow",children:[o.jsx(oh,{title:"Devices by Status",subtitle:"Disponibilite reseau",items:M}),o.jsx(oh,{title:"Devices by Zone",subtitle:"Repartition par zone",items:E}),o.jsx(oh,{title:"Sessions by Type",subtitle:"Origine des connexions",items:A}),o.jsxs("section",{className:"dashboardPanel compactStatsPanel",children:[o.jsxs("article",{className:"compactStat blue",children:[o.jsx("div",{className:"compactStatIcon",children:o.jsx(ZM,{size:18})}),o.jsx("span",{children:"Guest Logins"}),o.jsx("strong",{children:g.sessions.length}),o.jsx("small",{children:"sur la periode"})]}),o.jsxs("article",{className:"compactStat violet",children:[o.jsx("div",{className:"compactStatIcon",children:o.jsx(jc,{size:18})}),o.jsx("span",{children:"WiFi Coverage"}),o.jsxs("strong",{children:[g.wifiCoverage,"%"]}),o.jsxs("small",{children:[g.activeWifiConfigs," / ",g.hotels.length||0," hotels configures"]})]})]})]}),o.jsxs("div",{className:"dashboardBottomRow",children:[o.jsxs("section",{className:"dashboardPanel metricsPanel",children:[o.jsxs("div",{className:"panelHeader",children:[o.jsxs("div",{children:[o.jsx("h3",{children:"Infrastructure Snapshot"}),o.jsx("p",{children:"Indicateurs de sante operationnelle"})]}),o.jsx("span",{children:"Temps reel logique"})]}),o.jsxs("div",{className:"metricProgressGrid",children:[o.jsxs("div",{className:"metricBlock",children:[o.jsxs("div",{className:"metricHeader",children:[o.jsx("span",{children:"Devices online"}),o.jsxs("strong",{children:[g.statusCounts.ONLINE,"/",g.devices.length]})]}),o.jsx("div",{className:"metricBar",children:o.jsx("div",{className:"metricFill blue",style:{width:`${g.devices.length?g.statusCounts.ONLINE/g.devices.length*100:0}%`}})})]}),o.jsxs("div",{className:"metricBlock",children:[o.jsxs("div",{className:"metricHeader",children:[o.jsx("span",{children:"Occupation reseau"}),o.jsxs("strong",{children:[g.roomUsage,"%"]})]}),o.jsx("div",{className:"metricBar",children:o.jsx("div",{className:"metricFill violet",style:{width:`${g.roomUsage}%`}})})]}),o.jsxs("div",{className:"metricBlock",children:[o.jsxs("div",{className:"metricHeader",children:[o.jsx("span",{children:"Configurations WiFi actives"}),o.jsxs("strong",{children:[g.wifiCoverage,"%"]})]}),o.jsx("div",{className:"metricBar",children:o.jsx("div",{className:"metricFill green",style:{width:`${g.wifiCoverage}%`}})})]}),o.jsxs("div",{className:"metricBlock",children:[o.jsxs("div",{className:"metricHeader",children:[o.jsx("span",{children:"Alertes ouvertes"}),o.jsx("strong",{children:g.openAlerts})]}),o.jsx("div",{className:"metricBar",children:o.jsx("div",{className:"metricFill gold",style:{width:`${Math.min(100,g.openAlerts*10)}%`}})})]})]})]}),o.jsxs("section",{className:"dashboardPanel alertsPanel",children:[o.jsxs("div",{className:"panelHeader",children:[o.jsxs("div",{children:[o.jsx("h3",{children:"Recent Alerts"}),o.jsx("p",{children:"Evenements recents a suivre"})]}),o.jsxs("span",{children:[((y=g.overview.recentAlerts)==null?void 0:y.length)||0," evenement(s)"]})]}),(S=g.overview.recentAlerts)!=null&&S.length?o.jsx("ul",{className:"alertsList",children:g.overview.recentAlerts.map(b=>o.jsxs("li",{className:`alertItem ${String(b.severity||"MEDIUM").toLowerCase()}`,children:[o.jsxs("div",{className:"alertItemTop",children:[o.jsx("strong",{children:b.title}),o.jsx("span",{children:TE(b.createdAt)})]}),o.jsx("p",{children:b.message})]},b.id))}):o.jsxs("div",{className:"emptyStatePanel",children:[o.jsx("strong",{children:"Aucune alerte recente"}),o.jsx("p",{children:"Le dashboard n’a remonte aucun incident critique pour le moment."})]})]}),o.jsxs("section",{className:"dashboardPanel actionsPanel",children:[o.jsxs("div",{className:"panelHeader",children:[o.jsxs("div",{children:[o.jsx("h3",{children:"Actions"}),o.jsx("p",{children:"Acces rapides"})]}),o.jsx("span",{children:"Details"})]}),o.jsxs("button",{type:"button",className:"actionButton",onClick:()=>i("/device-manager/devices"),children:[o.jsx(Mx,{size:16}),"Switches",o.jsx(nh,{size:16})]}),o.jsxs("button",{type:"button",className:"actionButton",onClick:()=>i("/device-manager/devices"),children:[o.jsx(Sx,{size:16}),"Access Points",o.jsx(nh,{size:16})]}),o.jsxs("button",{type:"button",className:"actionButton secondary",onClick:()=>i("/hotel-manager/config-wifi"),children:[o.jsx(sf,{size:16}),"Config WiFi",o.jsx(nh,{size:16})]})]})]})]})]})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fp="184",Ca={ROTATE:0,DOLLY:1,PAN:2},wa={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},RE=0,bx=1,NE=2,Bc=1,rv=2,Oo=3,is=0,ti=1,xr=2,yr=0,Aa=1,wx=2,Tx=3,Cx=4,PE=5,Ts=100,LE=101,IE=102,DE=103,UE=104,FE=200,OE=201,kE=202,jE=203,of=204,lf=205,BE=206,zE=207,HE=208,GE=209,VE=210,WE=211,XE=212,$E=213,qE=214,cf=0,uf=1,df=2,Na=3,hf=4,ff=5,pf=6,mf=7,sv=0,YE=1,KE=2,Ki=0,av=1,ov=2,lv=3,cv=4,uv=5,dv=6,hv=7,fv=300,Ps=301,Pa=302,lh=303,ch=304,ou=306,gf=1e3,vr=1001,xf=1002,Cn=1003,ZE=1004,nc=1005,Un=1006,uh=1007,As=1008,li=1009,pv=1010,mv=1011,Go=1012,pp=1013,Ji=1014,qi=1015,Er=1016,mp=1017,gp=1018,Vo=1020,gv=35902,xv=35899,vv=1021,_v=1022,Di=1023,br=1026,Rs=1027,yv=1028,xp=1029,Ls=1030,vp=1031,_p=1033,zc=33776,Hc=33777,Gc=33778,Vc=33779,vf=35840,_f=35841,yf=35842,Sf=35843,Mf=36196,Ef=37492,bf=37496,wf=37488,Tf=37489,Yc=37490,Cf=37491,Af=37808,Rf=37809,Nf=37810,Pf=37811,Lf=37812,If=37813,Df=37814,Uf=37815,Ff=37816,Of=37817,kf=37818,jf=37819,Bf=37820,zf=37821,Hf=36492,Gf=36494,Vf=36495,Wf=36283,Xf=36284,Kc=36285,$f=36286,JE=3200,qf=0,QE=1,es="",vi="srgb",Zc="srgb-linear",Jc="linear",kt="srgb",aa=7680,Ax=519,e1=512,t1=513,n1=514,yp=515,i1=516,r1=517,Sp=518,s1=519,Yf=35044,Rx="300 es",Yi=2e3,Wo=2001;function a1(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Qc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function o1(){const i=Qc("canvas");return i.style.display="block",i}const Nx={};function eu(...i){const e="THREE."+i.shift();console.log(e,...i)}function Sv(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ut(...i){i=Sv(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Pt(...i){i=Sv(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Kf(...i){const e=i.join(" ");e in Nx||(Nx[e]=!0,ut(...i))}function l1(i,e,t){return new Promise(function(s,a){function c(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(c,t);break;default:s()}}setTimeout(c,t)})}const c1={[cf]:uf,[df]:pf,[hf]:mf,[Na]:ff,[uf]:cf,[pf]:df,[mf]:hf,[ff]:Na};class as{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){const s=this._listeners;if(s===void 0)return;const a=s[e];if(a!==void 0){const c=a.indexOf(t);c!==-1&&a.splice(c,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const s=t[e.type];if(s!==void 0){e.target=this;const a=s.slice(0);for(let c=0,d=a.length;c<d;c++)a[c].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wc=Math.PI/180,Zf=180/Math.PI;function ns(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Ln[i&255]+Ln[i>>8&255]+Ln[i>>16&255]+Ln[i>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[t&63|128]+Ln[t>>8&255]+"-"+Ln[t>>16&255]+Ln[t>>24&255]+Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]).toLowerCase()}function At(i,e,t){return Math.max(e,Math.min(t,i))}function u1(i,e){return(i%e+e)%e}function dh(i,e,t){return(1-t)*i+t*e}function $i(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ht(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const d1={DEG2RAD:Wc},Pp=class Pp{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,a=e.elements;return this.x=a[0]*t+a[3]*s+a[6],this.y=a[1]*t+a[4]*s+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(At(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(At(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),a=Math.sin(t),c=this.x-e.x,d=this.y-e.y;return this.x=c*s-d*a+e.x,this.y=c*a+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Pp.prototype.isVector2=!0;let dt=Pp;class rs{constructor(e=0,t=0,s=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=a}static slerpFlat(e,t,s,a,c,d,h){let f=s[a+0],m=s[a+1],v=s[a+2],x=s[a+3],g=c[d+0],M=c[d+1],E=c[d+2],A=c[d+3];if(x!==A||f!==g||m!==M||v!==E){let y=f*g+m*M+v*E+x*A;y<0&&(g=-g,M=-M,E=-E,A=-A,y=-y);let S=1-h;if(y<.9995){const b=Math.acos(y),w=Math.sin(b);S=Math.sin(S*b)/w,h=Math.sin(h*b)/w,f=f*S+g*h,m=m*S+M*h,v=v*S+E*h,x=x*S+A*h}else{f=f*S+g*h,m=m*S+M*h,v=v*S+E*h,x=x*S+A*h;const b=1/Math.sqrt(f*f+m*m+v*v+x*x);f*=b,m*=b,v*=b,x*=b}}e[t]=f,e[t+1]=m,e[t+2]=v,e[t+3]=x}static multiplyQuaternionsFlat(e,t,s,a,c,d){const h=s[a],f=s[a+1],m=s[a+2],v=s[a+3],x=c[d],g=c[d+1],M=c[d+2],E=c[d+3];return e[t]=h*E+v*x+f*M-m*g,e[t+1]=f*E+v*g+m*x-h*M,e[t+2]=m*E+v*M+h*g-f*x,e[t+3]=v*E-h*x-f*g-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,a){return this._x=e,this._y=t,this._z=s,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,a=e._y,c=e._z,d=e._order,h=Math.cos,f=Math.sin,m=h(s/2),v=h(a/2),x=h(c/2),g=f(s/2),M=f(a/2),E=f(c/2);switch(d){case"XYZ":this._x=g*v*x+m*M*E,this._y=m*M*x-g*v*E,this._z=m*v*E+g*M*x,this._w=m*v*x-g*M*E;break;case"YXZ":this._x=g*v*x+m*M*E,this._y=m*M*x-g*v*E,this._z=m*v*E-g*M*x,this._w=m*v*x+g*M*E;break;case"ZXY":this._x=g*v*x-m*M*E,this._y=m*M*x+g*v*E,this._z=m*v*E+g*M*x,this._w=m*v*x-g*M*E;break;case"ZYX":this._x=g*v*x-m*M*E,this._y=m*M*x+g*v*E,this._z=m*v*E-g*M*x,this._w=m*v*x+g*M*E;break;case"YZX":this._x=g*v*x+m*M*E,this._y=m*M*x+g*v*E,this._z=m*v*E-g*M*x,this._w=m*v*x-g*M*E;break;case"XZY":this._x=g*v*x-m*M*E,this._y=m*M*x-g*v*E,this._z=m*v*E+g*M*x,this._w=m*v*x+g*M*E;break;default:ut("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,a=Math.sin(s);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],a=t[4],c=t[8],d=t[1],h=t[5],f=t[9],m=t[2],v=t[6],x=t[10],g=s+h+x;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(v-f)*M,this._y=(c-m)*M,this._z=(d-a)*M}else if(s>h&&s>x){const M=2*Math.sqrt(1+s-h-x);this._w=(v-f)/M,this._x=.25*M,this._y=(a+d)/M,this._z=(c+m)/M}else if(h>x){const M=2*Math.sqrt(1+h-s-x);this._w=(c-m)/M,this._x=(a+d)/M,this._y=.25*M,this._z=(f+v)/M}else{const M=2*Math.sqrt(1+x-s-h);this._w=(d-a)/M,this._x=(c+m)/M,this._y=(f+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const a=Math.min(1,t/s);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,a=e._y,c=e._z,d=e._w,h=t._x,f=t._y,m=t._z,v=t._w;return this._x=s*v+d*h+a*m-c*f,this._y=a*v+d*f+c*h-s*m,this._z=c*v+d*m+s*f-a*h,this._w=d*v-s*h-a*f-c*m,this._onChangeCallback(),this}slerp(e,t){let s=e._x,a=e._y,c=e._z,d=e._w,h=this.dot(e);h<0&&(s=-s,a=-a,c=-c,d=-d,h=-h);let f=1-t;if(h<.9995){const m=Math.acos(h),v=Math.sin(m);f=Math.sin(f*m)/v,t=Math.sin(t*m)/v,this._x=this._x*f+s*t,this._y=this._y*f+a*t,this._z=this._z*f+c*t,this._w=this._w*f+d*t,this._onChangeCallback()}else this._x=this._x*f+s*t,this._y=this._y*f+a*t,this._z=this._z*f+c*t,this._w=this._w*f+d*t,this.normalize();return this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),a=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(a*Math.sin(e),a*Math.cos(e),c*Math.sin(t),c*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Lp=class Lp{constructor(e=0,t=0,s=0){this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Px.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Px.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,a=this.z,c=e.elements;return this.x=c[0]*t+c[3]*s+c[6]*a,this.y=c[1]*t+c[4]*s+c[7]*a,this.z=c[2]*t+c[5]*s+c[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,c=e.elements,d=1/(c[3]*t+c[7]*s+c[11]*a+c[15]);return this.x=(c[0]*t+c[4]*s+c[8]*a+c[12])*d,this.y=(c[1]*t+c[5]*s+c[9]*a+c[13])*d,this.z=(c[2]*t+c[6]*s+c[10]*a+c[14])*d,this}applyQuaternion(e){const t=this.x,s=this.y,a=this.z,c=e.x,d=e.y,h=e.z,f=e.w,m=2*(d*a-h*s),v=2*(h*t-c*a),x=2*(c*s-d*t);return this.x=t+f*m+d*x-h*v,this.y=s+f*v+h*m-c*x,this.z=a+f*x+c*v-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,a=this.z,c=e.elements;return this.x=c[0]*t+c[4]*s+c[8]*a,this.y=c[1]*t+c[5]*s+c[9]*a,this.z=c[2]*t+c[6]*s+c[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(At(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,a=e.y,c=e.z,d=t.x,h=t.y,f=t.z;return this.x=a*f-c*h,this.y=c*d-s*f,this.z=s*h-a*d,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return hh.copy(this).projectOnVector(e),this.sub(hh)}reflect(e){return this.sub(hh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(At(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,a=this.z-e.z;return t*t+s*s+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const a=Math.sin(t)*e;return this.x=a*Math.sin(s),this.y=Math.cos(t)*e,this.z=a*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Lp.prototype.isVector3=!0;let ie=Lp;const hh=new ie,Px=new rs,Ip=class Ip{constructor(e,t,s,a,c,d,h,f,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,a,c,d,h,f,m)}set(e,t,s,a,c,d,h,f,m){const v=this.elements;return v[0]=e,v[1]=a,v[2]=h,v[3]=t,v[4]=c,v[5]=f,v[6]=s,v[7]=d,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,c=this.elements,d=s[0],h=s[3],f=s[6],m=s[1],v=s[4],x=s[7],g=s[2],M=s[5],E=s[8],A=a[0],y=a[3],S=a[6],b=a[1],w=a[4],N=a[7],I=a[2],L=a[5],k=a[8];return c[0]=d*A+h*b+f*I,c[3]=d*y+h*w+f*L,c[6]=d*S+h*N+f*k,c[1]=m*A+v*b+x*I,c[4]=m*y+v*w+x*L,c[7]=m*S+v*N+x*k,c[2]=g*A+M*b+E*I,c[5]=g*y+M*w+E*L,c[8]=g*S+M*N+E*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],a=e[2],c=e[3],d=e[4],h=e[5],f=e[6],m=e[7],v=e[8];return t*d*v-t*h*m-s*c*v+s*h*f+a*c*m-a*d*f}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],c=e[3],d=e[4],h=e[5],f=e[6],m=e[7],v=e[8],x=v*d-h*m,g=h*f-v*c,M=m*c-d*f,E=t*x+s*g+a*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=x*A,e[1]=(a*m-v*s)*A,e[2]=(h*s-a*d)*A,e[3]=g*A,e[4]=(v*t-a*f)*A,e[5]=(a*c-h*t)*A,e[6]=M*A,e[7]=(s*f-m*t)*A,e[8]=(d*t-s*c)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,a,c,d,h){const f=Math.cos(c),m=Math.sin(c);return this.set(s*f,s*m,-s*(f*d+m*h)+d+e,-a*m,a*f,-a*(-m*d+f*h)+h+t,0,0,1),this}scale(e,t){return this.premultiply(fh.makeScale(e,t)),this}rotate(e){return this.premultiply(fh.makeRotation(-e)),this}translate(e,t){return this.premultiply(fh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<9;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ip.prototype.isMatrix3=!0;let vt=Ip;const fh=new vt,Lx=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ix=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function h1(){const i={enabled:!0,workingColorSpace:Zc,spaces:{},convert:function(a,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===kt&&(a.r=Sr(a.r),a.g=Sr(a.g),a.b=Sr(a.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(a.applyMatrix3(this.spaces[c].toXYZ),a.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===kt&&(a.r=Ra(a.r),a.g=Ra(a.g),a.b=Ra(a.b))),a},workingToColorSpace:function(a,c){return this.convert(a,this.workingColorSpace,c)},colorSpaceToWorking:function(a,c){return this.convert(a,c,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===es?Jc:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,c=this.workingColorSpace){return a.fromArray(this.spaces[c].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,c,d){return a.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,c){return Kf("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(a,c)},toWorkingColorSpace:function(a,c){return Kf("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(a,c)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return i.define({[Zc]:{primaries:e,whitePoint:s,transfer:Jc,toXYZ:Lx,fromXYZ:Ix,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:vi},outputColorSpaceConfig:{drawingBufferColorSpace:vi}},[vi]:{primaries:e,whitePoint:s,transfer:kt,toXYZ:Lx,fromXYZ:Ix,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:vi}}}),i}const Rt=h1();function Sr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ra(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let oa;class f1{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{oa===void 0&&(oa=Qc("canvas")),oa.width=e.width,oa.height=e.height;const a=oa.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),s=oa}return s.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Qc("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const a=s.getImageData(0,0,e.width,e.height),c=a.data;for(let d=0;d<c.length;d++)c[d]=Sr(c[d]/255)*255;return s.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(Sr(t[s]/255)*255):t[s]=Sr(t[s]);return{data:t,width:e.width,height:e.height}}else return ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let p1=0;class Mp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:p1++}),this.uuid=ns(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},a=this.data;if(a!==null){let c;if(Array.isArray(a)){c=[];for(let d=0,h=a.length;d<h;d++)a[d].isDataTexture?c.push(ph(a[d].image)):c.push(ph(a[d]))}else c=ph(a);s.url=c}return t||(e.images[this.uuid]=s),s}}function ph(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?f1.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ut("Texture: Unable to serialize Texture."),{})}let m1=0;const mh=new ie;class Fn extends as{constructor(e=Fn.DEFAULT_IMAGE,t=Fn.DEFAULT_MAPPING,s=vr,a=vr,c=Un,d=As,h=Di,f=li,m=Fn.DEFAULT_ANISOTROPY,v=es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:m1++}),this.uuid=ns(),this.name="",this.source=new Mp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=a,this.magFilter=c,this.minFilter=d,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=f,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(mh).x}get height(){return this.source.getSize(mh).y}get depth(){return this.source.getSize(mh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const s=e[t];if(s===void 0){ut(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){ut(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&s&&a.isVector2&&s.isVector2||a&&s&&a.isVector3&&s.isVector3||a&&s&&a.isMatrix3&&s.isMatrix3?a.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gf:e.x=e.x-Math.floor(e.x);break;case vr:e.x=e.x<0?0:1;break;case xf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gf:e.y=e.y-Math.floor(e.y);break;case vr:e.y=e.y<0?0:1;break;case xf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=fv;Fn.DEFAULT_ANISOTROPY=1;const Dp=class Dp{constructor(e=0,t=0,s=0,a=1){this.x=e,this.y=t,this.z=s,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,a){return this.x=e,this.y=t,this.z=s,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,c=this.w,d=e.elements;return this.x=d[0]*t+d[4]*s+d[8]*a+d[12]*c,this.y=d[1]*t+d[5]*s+d[9]*a+d[13]*c,this.z=d[2]*t+d[6]*s+d[10]*a+d[14]*c,this.w=d[3]*t+d[7]*s+d[11]*a+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,a,c;const f=e.elements,m=f[0],v=f[4],x=f[8],g=f[1],M=f[5],E=f[9],A=f[2],y=f[6],S=f[10];if(Math.abs(v-g)<.01&&Math.abs(x-A)<.01&&Math.abs(E-y)<.01){if(Math.abs(v+g)<.1&&Math.abs(x+A)<.1&&Math.abs(E+y)<.1&&Math.abs(m+M+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(m+1)/2,N=(M+1)/2,I=(S+1)/2,L=(v+g)/4,k=(x+A)/4,T=(E+y)/4;return w>N&&w>I?w<.01?(s=0,a=.707106781,c=.707106781):(s=Math.sqrt(w),a=L/s,c=k/s):N>I?N<.01?(s=.707106781,a=0,c=.707106781):(a=Math.sqrt(N),s=L/a,c=T/a):I<.01?(s=.707106781,a=.707106781,c=0):(c=Math.sqrt(I),s=k/c,a=T/c),this.set(s,a,c,t),this}let b=Math.sqrt((y-E)*(y-E)+(x-A)*(x-A)+(g-v)*(g-v));return Math.abs(b)<.001&&(b=1),this.x=(y-E)/b,this.y=(x-A)/b,this.z=(g-v)/b,this.w=Math.acos((m+M+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this.w=At(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this.w=At(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(At(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Dp.prototype.isVector4=!0;let an=Dp;class g1 extends as{constructor(e=1,t=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=s.depth,this.scissor=new an(0,0,e,t),this.scissorTest=!1,this.viewport=new an(0,0,e,t),this.textures=[];const a={width:e,height:t,depth:s.depth},c=new Fn(a),d=s.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const t={minFilter:Un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let a=0,c=this.textures.length;a<c;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=s,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,s=e.textures.length;t<s;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new Mp(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zi extends g1{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class Mv extends Fn{constructor(e=null,t=1,s=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class x1 extends Fn{constructor(e=null,t=1,s=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ru=class ru{constructor(e,t,s,a,c,d,h,f,m,v,x,g,M,E,A,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,a,c,d,h,f,m,v,x,g,M,E,A,y)}set(e,t,s,a,c,d,h,f,m,v,x,g,M,E,A,y){const S=this.elements;return S[0]=e,S[4]=t,S[8]=s,S[12]=a,S[1]=c,S[5]=d,S[9]=h,S[13]=f,S[2]=m,S[6]=v,S[10]=x,S[14]=g,S[3]=M,S[7]=E,S[11]=A,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ru().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,s=e.elements,a=1/la.setFromMatrixColumn(e,0).length(),c=1/la.setFromMatrixColumn(e,1).length(),d=1/la.setFromMatrixColumn(e,2).length();return t[0]=s[0]*a,t[1]=s[1]*a,t[2]=s[2]*a,t[3]=0,t[4]=s[4]*c,t[5]=s[5]*c,t[6]=s[6]*c,t[7]=0,t[8]=s[8]*d,t[9]=s[9]*d,t[10]=s[10]*d,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,a=e.y,c=e.z,d=Math.cos(s),h=Math.sin(s),f=Math.cos(a),m=Math.sin(a),v=Math.cos(c),x=Math.sin(c);if(e.order==="XYZ"){const g=d*v,M=d*x,E=h*v,A=h*x;t[0]=f*v,t[4]=-f*x,t[8]=m,t[1]=M+E*m,t[5]=g-A*m,t[9]=-h*f,t[2]=A-g*m,t[6]=E+M*m,t[10]=d*f}else if(e.order==="YXZ"){const g=f*v,M=f*x,E=m*v,A=m*x;t[0]=g+A*h,t[4]=E*h-M,t[8]=d*m,t[1]=d*x,t[5]=d*v,t[9]=-h,t[2]=M*h-E,t[6]=A+g*h,t[10]=d*f}else if(e.order==="ZXY"){const g=f*v,M=f*x,E=m*v,A=m*x;t[0]=g-A*h,t[4]=-d*x,t[8]=E+M*h,t[1]=M+E*h,t[5]=d*v,t[9]=A-g*h,t[2]=-d*m,t[6]=h,t[10]=d*f}else if(e.order==="ZYX"){const g=d*v,M=d*x,E=h*v,A=h*x;t[0]=f*v,t[4]=E*m-M,t[8]=g*m+A,t[1]=f*x,t[5]=A*m+g,t[9]=M*m-E,t[2]=-m,t[6]=h*f,t[10]=d*f}else if(e.order==="YZX"){const g=d*f,M=d*m,E=h*f,A=h*m;t[0]=f*v,t[4]=A-g*x,t[8]=E*x+M,t[1]=x,t[5]=d*v,t[9]=-h*v,t[2]=-m*v,t[6]=M*x+E,t[10]=g-A*x}else if(e.order==="XZY"){const g=d*f,M=d*m,E=h*f,A=h*m;t[0]=f*v,t[4]=-x,t[8]=m*v,t[1]=g*x+A,t[5]=d*v,t[9]=M*x-E,t[2]=E*x-M,t[6]=h*v,t[10]=A*x+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(v1,e,_1)}lookAt(e,t,s){const a=this.elements;return ai.subVectors(e,t),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),Wr.crossVectors(s,ai),Wr.lengthSq()===0&&(Math.abs(s.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),Wr.crossVectors(s,ai)),Wr.normalize(),ic.crossVectors(ai,Wr),a[0]=Wr.x,a[4]=ic.x,a[8]=ai.x,a[1]=Wr.y,a[5]=ic.y,a[9]=ai.y,a[2]=Wr.z,a[6]=ic.z,a[10]=ai.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,c=this.elements,d=s[0],h=s[4],f=s[8],m=s[12],v=s[1],x=s[5],g=s[9],M=s[13],E=s[2],A=s[6],y=s[10],S=s[14],b=s[3],w=s[7],N=s[11],I=s[15],L=a[0],k=a[4],T=a[8],U=a[12],Y=a[1],G=a[5],J=a[9],H=a[13],Q=a[2],X=a[6],O=a[10],V=a[14],$=a[3],ue=a[7],se=a[11],B=a[15];return c[0]=d*L+h*Y+f*Q+m*$,c[4]=d*k+h*G+f*X+m*ue,c[8]=d*T+h*J+f*O+m*se,c[12]=d*U+h*H+f*V+m*B,c[1]=v*L+x*Y+g*Q+M*$,c[5]=v*k+x*G+g*X+M*ue,c[9]=v*T+x*J+g*O+M*se,c[13]=v*U+x*H+g*V+M*B,c[2]=E*L+A*Y+y*Q+S*$,c[6]=E*k+A*G+y*X+S*ue,c[10]=E*T+A*J+y*O+S*se,c[14]=E*U+A*H+y*V+S*B,c[3]=b*L+w*Y+N*Q+I*$,c[7]=b*k+w*G+N*X+I*ue,c[11]=b*T+w*J+N*O+I*se,c[15]=b*U+w*H+N*V+I*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],a=e[8],c=e[12],d=e[1],h=e[5],f=e[9],m=e[13],v=e[2],x=e[6],g=e[10],M=e[14],E=e[3],A=e[7],y=e[11],S=e[15],b=f*M-m*g,w=h*M-m*x,N=h*g-f*x,I=d*M-m*v,L=d*g-f*v,k=d*x-h*v;return t*(A*b-y*w+S*N)-s*(E*b-y*I+S*L)+a*(E*w-A*I+S*k)-c*(E*N-A*L+y*k)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],c=e[3],d=e[4],h=e[5],f=e[6],m=e[7],v=e[8],x=e[9],g=e[10],M=e[11],E=e[12],A=e[13],y=e[14],S=e[15],b=t*h-s*d,w=t*f-a*d,N=t*m-c*d,I=s*f-a*h,L=s*m-c*h,k=a*m-c*f,T=v*A-x*E,U=v*y-g*E,Y=v*S-M*E,G=x*y-g*A,J=x*S-M*A,H=g*S-M*y,Q=b*H-w*J+N*G+I*Y-L*U+k*T;if(Q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/Q;return e[0]=(h*H-f*J+m*G)*X,e[1]=(a*J-s*H-c*G)*X,e[2]=(A*k-y*L+S*I)*X,e[3]=(g*L-x*k-M*I)*X,e[4]=(f*Y-d*H-m*U)*X,e[5]=(t*H-a*Y+c*U)*X,e[6]=(y*N-E*k-S*w)*X,e[7]=(v*k-g*N+M*w)*X,e[8]=(d*J-h*Y+m*T)*X,e[9]=(s*Y-t*J-c*T)*X,e[10]=(E*L-A*N+S*b)*X,e[11]=(x*N-v*L-M*b)*X,e[12]=(h*U-d*G-f*T)*X,e[13]=(t*G-s*U+a*T)*X,e[14]=(A*w-E*I-y*b)*X,e[15]=(v*I-x*w+g*b)*X,this}scale(e){const t=this.elements,s=e.x,a=e.y,c=e.z;return t[0]*=s,t[4]*=a,t[8]*=c,t[1]*=s,t[5]*=a,t[9]*=c,t[2]*=s,t[6]*=a,t[10]*=c,t[3]*=s,t[7]*=a,t[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,a))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),a=Math.sin(t),c=1-s,d=e.x,h=e.y,f=e.z,m=c*d,v=c*h;return this.set(m*d+s,m*h-a*f,m*f+a*h,0,m*h+a*f,v*h+s,v*f-a*d,0,m*f-a*h,v*f+a*d,c*f*f+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,a,c,d){return this.set(1,s,c,0,e,1,d,0,t,a,1,0,0,0,0,1),this}compose(e,t,s){const a=this.elements,c=t._x,d=t._y,h=t._z,f=t._w,m=c+c,v=d+d,x=h+h,g=c*m,M=c*v,E=c*x,A=d*v,y=d*x,S=h*x,b=f*m,w=f*v,N=f*x,I=s.x,L=s.y,k=s.z;return a[0]=(1-(A+S))*I,a[1]=(M+N)*I,a[2]=(E-w)*I,a[3]=0,a[4]=(M-N)*L,a[5]=(1-(g+S))*L,a[6]=(y+b)*L,a[7]=0,a[8]=(E+w)*k,a[9]=(y-b)*k,a[10]=(1-(g+A))*k,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,s){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const c=this.determinant();if(c===0)return s.set(1,1,1),t.identity(),this;let d=la.set(a[0],a[1],a[2]).length();const h=la.set(a[4],a[5],a[6]).length(),f=la.set(a[8],a[9],a[10]).length();c<0&&(d=-d),Pi.copy(this);const m=1/d,v=1/h,x=1/f;return Pi.elements[0]*=m,Pi.elements[1]*=m,Pi.elements[2]*=m,Pi.elements[4]*=v,Pi.elements[5]*=v,Pi.elements[6]*=v,Pi.elements[8]*=x,Pi.elements[9]*=x,Pi.elements[10]*=x,t.setFromRotationMatrix(Pi),s.x=d,s.y=h,s.z=f,this}makePerspective(e,t,s,a,c,d,h=Yi,f=!1){const m=this.elements,v=2*c/(t-e),x=2*c/(s-a),g=(t+e)/(t-e),M=(s+a)/(s-a);let E,A;if(f)E=c/(d-c),A=d*c/(d-c);else if(h===Yi)E=-(d+c)/(d-c),A=-2*d*c/(d-c);else if(h===Wo)E=-d/(d-c),A=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=v,m[4]=0,m[8]=g,m[12]=0,m[1]=0,m[5]=x,m[9]=M,m[13]=0,m[2]=0,m[6]=0,m[10]=E,m[14]=A,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,t,s,a,c,d,h=Yi,f=!1){const m=this.elements,v=2/(t-e),x=2/(s-a),g=-(t+e)/(t-e),M=-(s+a)/(s-a);let E,A;if(f)E=1/(d-c),A=d/(d-c);else if(h===Yi)E=-2/(d-c),A=-(d+c)/(d-c);else if(h===Wo)E=-1/(d-c),A=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=v,m[4]=0,m[8]=0,m[12]=g,m[1]=0,m[5]=x,m[9]=0,m[13]=M,m[2]=0,m[6]=0,m[10]=E,m[14]=A,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<16;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}};ru.prototype.isMatrix4=!0;let rn=ru;const la=new ie,Pi=new rn,v1=new ie(0,0,0),_1=new ie(1,1,1),Wr=new ie,ic=new ie,ai=new ie,Dx=new rn,Ux=new rs;class ss{constructor(e=0,t=0,s=0,a=ss.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,a=this._order){return this._x=e,this._y=t,this._z=s,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const a=e.elements,c=a[0],d=a[4],h=a[8],f=a[1],m=a[5],v=a[9],x=a[2],g=a[6],M=a[10];switch(t){case"XYZ":this._y=Math.asin(At(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(g,m),this._z=0);break;case"YXZ":this._x=Math.asin(-At(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(f,m)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(At(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(f,c));break;case"ZYX":this._y=Math.asin(-At(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(f,c)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(At(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-At(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,m),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-v,M),this._y=0);break;default:ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return Dx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dx,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ux.setFromEuler(this),this.setFromQuaternion(Ux,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ss.DEFAULT_ORDER="XYZ";class Ev{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let y1=0;const Fx=new ie,ca=new rs,hr=new rn,rc=new ie,wo=new ie,S1=new ie,M1=new rs,Ox=new ie(1,0,0),kx=new ie(0,1,0),jx=new ie(0,0,1),Bx={type:"added"},E1={type:"removed"},ua={type:"childadded",child:null},gh={type:"childremoved",child:null};class gn extends as{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:y1++}),this.uuid=ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gn.DEFAULT_UP.clone();const e=new ie,t=new ss,s=new rs,a=new ie(1,1,1);function c(){s.setFromEuler(t,!1)}function d(){t.setFromQuaternion(s,void 0,!1)}t._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new rn},normalMatrix:{value:new vt}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ev,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ca.setFromAxisAngle(e,t),this.quaternion.multiply(ca),this}rotateOnWorldAxis(e,t){return ca.setFromAxisAngle(e,t),this.quaternion.premultiply(ca),this}rotateX(e){return this.rotateOnAxis(Ox,e)}rotateY(e){return this.rotateOnAxis(kx,e)}rotateZ(e){return this.rotateOnAxis(jx,e)}translateOnAxis(e,t){return Fx.copy(e).applyQuaternion(this.quaternion),this.position.add(Fx.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ox,e)}translateY(e){return this.translateOnAxis(kx,e)}translateZ(e){return this.translateOnAxis(jx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hr.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?rc.copy(e):rc.set(e,t,s);const a=this.parent;this.updateWorldMatrix(!0,!1),wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hr.lookAt(wo,rc,this.up):hr.lookAt(rc,wo,this.up),this.quaternion.setFromRotationMatrix(hr),a&&(hr.extractRotation(a.matrixWorld),ca.setFromRotationMatrix(hr),this.quaternion.premultiply(ca.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bx),ua.child=e,this.dispatchEvent(ua),ua.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(E1),gh.child=e,this.dispatchEvent(gh),gh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hr.multiply(e.parent.matrixWorld)),e.applyMatrix4(hr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bx),ua.child=e,this.dispatchEvent(ua),ua.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,a=this.children.length;s<a;s++){const d=this.children[s].getObjectByProperty(e,t);if(d!==void 0)return d}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const a=this.children;for(let c=0,d=a.length;c<d;c++)a[c].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,e,S1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,M1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,s=e.y,a=e.z,c=this.matrix.elements;c[12]+=t-c[0]*t-c[4]*s-c[8]*a,c[13]+=s-c[1]*t-c[5]*s-c[9]*a,c[14]+=a-c[2]*t-c[6]*s-c[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let c=0,d=a.length;c<d;c++)a[c].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(h=>({...h})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function c(h,f){return h[f.uuid]===void 0&&(h[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const f=h.shapes;if(Array.isArray(f))for(let m=0,v=f.length;m<v;m++){const x=f[m];c(e.shapes,x)}else c(e.shapes,f)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let f=0,m=this.material.length;f<m;f++)h.push(c(e.materials,this.material[f]));a.material=h}else a.material=c(e.materials,this.material);if(this.children.length>0){a.children=[];for(let h=0;h<this.children.length;h++)a.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let h=0;h<this.animations.length;h++){const f=this.animations[h];a.animations.push(c(e.animations,f))}}if(t){const h=d(e.geometries),f=d(e.materials),m=d(e.textures),v=d(e.images),x=d(e.shapes),g=d(e.skeletons),M=d(e.animations),E=d(e.nodes);h.length>0&&(s.geometries=h),f.length>0&&(s.materials=f),m.length>0&&(s.textures=m),v.length>0&&(s.images=v),x.length>0&&(s.shapes=x),g.length>0&&(s.skeletons=g),M.length>0&&(s.animations=M),E.length>0&&(s.nodes=E)}return s.object=a,s;function d(h){const f=[];for(const m in h){const v=h[m];delete v.metadata,f.push(v)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const a=e.children[s];this.add(a.clone())}return this}}gn.DEFAULT_UP=new ie(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class sc extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const b1={type:"move"};class xh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let a=null,c=null,d=null;const h=this._targetRay,f=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const A of e.hand.values()){const y=t.getJointPose(A,s),S=this._getHandJoint(m,A);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const v=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],g=v.position.distanceTo(x.position),M=.02,E=.005;m.inputState.pinching&&g>M+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&g<=M-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(c=t.getPose(e.gripSpace,s),c!==null&&(f.matrix.fromArray(c.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,c.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(c.linearVelocity)):f.hasLinearVelocity=!1,c.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(c.angularVelocity)):f.hasAngularVelocity=!1,f.eventsEnabled&&f.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(a=t.getPose(e.targetRaySpace,s),a===null&&c!==null&&(a=c),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(b1)))}return h!==null&&(h.visible=a!==null),f!==null&&(f.visible=c!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new sc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const bv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xr={h:0,s:0,l:0},ac={h:0,s:0,l:0};function vh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ct{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,t),this}setRGB(e,t,s,a=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=s,Rt.colorSpaceToWorking(this,a),this}setHSL(e,t,s,a=Rt.workingColorSpace){if(e=u1(e,1),t=At(t,0,1),s=At(s,0,1),t===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+t):s+t-s*t,d=2*s-c;this.r=vh(d,c,e+1/3),this.g=vh(d,c,e),this.b=vh(d,c,e-1/3)}return Rt.colorSpaceToWorking(this,a),this}setStyle(e,t=vi){function s(c){c!==void 0&&parseFloat(c)<1&&ut("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=a[1],h=a[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,t);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,t);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,t);break;default:ut("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=a[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,t);if(d===6)return this.setHex(parseInt(c,16),t);ut("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vi){const s=bv[e.toLowerCase()];return s!==void 0?this.setHex(s,t):ut("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Sr(e.r),this.g=Sr(e.g),this.b=Sr(e.b),this}copyLinearToSRGB(e){return this.r=Ra(e.r),this.g=Ra(e.g),this.b=Ra(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vi){return Rt.workingToColorSpace(In.copy(this),e),Math.round(At(In.r*255,0,255))*65536+Math.round(At(In.g*255,0,255))*256+Math.round(At(In.b*255,0,255))}getHexString(e=vi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.workingToColorSpace(In.copy(this),t);const s=In.r,a=In.g,c=In.b,d=Math.max(s,a,c),h=Math.min(s,a,c);let f,m;const v=(h+d)/2;if(h===d)f=0,m=0;else{const x=d-h;switch(m=v<=.5?x/(d+h):x/(2-d-h),d){case s:f=(a-c)/x+(a<c?6:0);break;case a:f=(c-s)/x+2;break;case c:f=(s-a)/x+4;break}f/=6}return e.h=f,e.s=m,e.l=v,e}getRGB(e,t=Rt.workingColorSpace){return Rt.workingToColorSpace(In.copy(this),t),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=vi){Rt.workingToColorSpace(In.copy(this),e);const t=In.r,s=In.g,a=In.b;return e!==vi?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(a*255)})`}offsetHSL(e,t,s){return this.getHSL(Xr),this.setHSL(Xr.h+e,Xr.s+t,Xr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Xr),e.getHSL(ac);const s=dh(Xr.h,ac.h,t),a=dh(Xr.s,ac.s,t),c=dh(Xr.l,ac.l,t);return this.setHSL(s,a,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,a=this.b,c=e.elements;return this.r=c[0]*t+c[3]*s+c[6]*a,this.g=c[1]*t+c[4]*s+c[7]*a,this.b=c[2]*t+c[5]*s+c[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new Ct;Ct.NAMES=bv;class Ep{constructor(e,t=1,s=1e3){this.isFog=!0,this.name="",this.color=new Ct(e),this.near=t,this.far=s}clone(){return new Ep(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class w1 extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ss,this.environmentIntensity=1,this.environmentRotation=new ss,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Li=new ie,fr=new ie,_h=new ie,pr=new ie,da=new ie,ha=new ie,zx=new ie,yh=new ie,Sh=new ie,Mh=new ie,Eh=new an,bh=new an,wh=new an;class yi{constructor(e=new ie,t=new ie,s=new ie){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,a){a.subVectors(s,t),Li.subVectors(e,t),a.cross(Li);const c=a.lengthSq();return c>0?a.multiplyScalar(1/Math.sqrt(c)):a.set(0,0,0)}static getBarycoord(e,t,s,a,c){Li.subVectors(a,t),fr.subVectors(s,t),_h.subVectors(e,t);const d=Li.dot(Li),h=Li.dot(fr),f=Li.dot(_h),m=fr.dot(fr),v=fr.dot(_h),x=d*m-h*h;if(x===0)return c.set(0,0,0),null;const g=1/x,M=(m*f-h*v)*g,E=(d*v-h*f)*g;return c.set(1-M-E,E,M)}static containsPoint(e,t,s,a){return this.getBarycoord(e,t,s,a,pr)===null?!1:pr.x>=0&&pr.y>=0&&pr.x+pr.y<=1}static getInterpolation(e,t,s,a,c,d,h,f){return this.getBarycoord(e,t,s,a,pr)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(c,pr.x),f.addScaledVector(d,pr.y),f.addScaledVector(h,pr.z),f)}static getInterpolatedAttribute(e,t,s,a,c,d){return Eh.setScalar(0),bh.setScalar(0),wh.setScalar(0),Eh.fromBufferAttribute(e,t),bh.fromBufferAttribute(e,s),wh.fromBufferAttribute(e,a),d.setScalar(0),d.addScaledVector(Eh,c.x),d.addScaledVector(bh,c.y),d.addScaledVector(wh,c.z),d}static isFrontFacing(e,t,s,a){return Li.subVectors(s,t),fr.subVectors(e,t),Li.cross(fr).dot(a)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,a){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,s,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Li.subVectors(this.c,this.b),fr.subVectors(this.a,this.b),Li.cross(fr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,a,c){return yi.getInterpolation(e,this.a,this.b,this.c,t,s,a,c)}containsPoint(e){return yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,a=this.b,c=this.c;let d,h;da.subVectors(a,s),ha.subVectors(c,s),yh.subVectors(e,s);const f=da.dot(yh),m=ha.dot(yh);if(f<=0&&m<=0)return t.copy(s);Sh.subVectors(e,a);const v=da.dot(Sh),x=ha.dot(Sh);if(v>=0&&x<=v)return t.copy(a);const g=f*x-v*m;if(g<=0&&f>=0&&v<=0)return d=f/(f-v),t.copy(s).addScaledVector(da,d);Mh.subVectors(e,c);const M=da.dot(Mh),E=ha.dot(Mh);if(E>=0&&M<=E)return t.copy(c);const A=M*m-f*E;if(A<=0&&m>=0&&E<=0)return h=m/(m-E),t.copy(s).addScaledVector(ha,h);const y=v*E-M*x;if(y<=0&&x-v>=0&&M-E>=0)return zx.subVectors(c,a),h=(x-v)/(x-v+(M-E)),t.copy(a).addScaledVector(zx,h);const S=1/(y+A+g);return d=A*S,h=g*S,t.copy(s).addScaledVector(da,d).addScaledVector(ha,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ko{constructor(e=new ie(1/0,1/0,1/0),t=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(Ii.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(Ii.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=Ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(t===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,Ii):Ii.fromBufferAttribute(c,d),Ii.applyMatrix4(e.matrixWorld),this.expandByPoint(Ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),oc.copy(s.boundingBox)),oc.applyMatrix4(e.matrixWorld),this.union(oc)}const a=e.children;for(let c=0,d=a.length;c<d;c++)this.expandByObject(a[c],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ii),Ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(To),lc.subVectors(this.max,To),fa.subVectors(e.a,To),pa.subVectors(e.b,To),ma.subVectors(e.c,To),$r.subVectors(pa,fa),qr.subVectors(ma,pa),Ms.subVectors(fa,ma);let t=[0,-$r.z,$r.y,0,-qr.z,qr.y,0,-Ms.z,Ms.y,$r.z,0,-$r.x,qr.z,0,-qr.x,Ms.z,0,-Ms.x,-$r.y,$r.x,0,-qr.y,qr.x,0,-Ms.y,Ms.x,0];return!Th(t,fa,pa,ma,lc)||(t=[1,0,0,0,1,0,0,0,1],!Th(t,fa,pa,ma,lc))?!1:(cc.crossVectors($r,qr),t=[cc.x,cc.y,cc.z],Th(t,fa,pa,ma,lc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const mr=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],Ii=new ie,oc=new Ko,fa=new ie,pa=new ie,ma=new ie,$r=new ie,qr=new ie,Ms=new ie,To=new ie,lc=new ie,cc=new ie,Es=new ie;function Th(i,e,t,s,a){for(let c=0,d=i.length-3;c<=d;c+=3){Es.fromArray(i,c);const h=a.x*Math.abs(Es.x)+a.y*Math.abs(Es.y)+a.z*Math.abs(Es.z),f=e.dot(Es),m=t.dot(Es),v=s.dot(Es);if(Math.max(-Math.max(f,m,v),Math.min(f,m,v))>h)return!1}return!0}const dn=new ie,uc=new dt;let T1=0;class Ui extends as{constructor(e,t,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:T1++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=Yf,this.updateRanges=[],this.gpuType=qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let a=0,c=this.itemSize;a<c;a++)this.array[e+a]=t.array[s+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)uc.fromBufferAttribute(this,t),uc.applyMatrix3(e),this.setXY(t,uc.x,uc.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix3(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=$i(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Ht(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$i(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$i(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$i(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),s=Ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,a){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),s=Ht(s,this.array),a=Ht(a,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this}setXYZW(e,t,s,a,c){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),s=Ht(s,this.array),a=Ht(a,this.array),c=Ht(c,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yf&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class wv extends Ui{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class Tv extends Ui{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class xn extends Ui{constructor(e,t,s){super(new Float32Array(e),t,s)}}const C1=new Ko,Co=new ie,Ch=new ie;class lu{constructor(e=new ie,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):C1.setFromPoints(e).getCenter(s);let a=0;for(let c=0,d=e.length;c<d;c++)a=Math.max(a,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Co.subVectors(e,this.center);const t=Co.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),a=(s-this.radius)*.5;this.center.addScaledVector(Co,a/s),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ch.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Co.copy(e.center).add(Ch)),this.expandByPoint(Co.copy(e.center).sub(Ch))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let A1=0;const xi=new rn,Ah=new gn,ga=new ie,oi=new Ko,Ao=new Ko,En=new ie;class Vn extends as{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:A1++}),this.uuid=ns(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(a1(e)?Tv:wv)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new vt().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xi.makeRotationFromQuaternion(e),this.applyMatrix4(xi),this}rotateX(e){return xi.makeRotationX(e),this.applyMatrix4(xi),this}rotateY(e){return xi.makeRotationY(e),this.applyMatrix4(xi),this}rotateZ(e){return xi.makeRotationZ(e),this.applyMatrix4(xi),this}translate(e,t,s){return xi.makeTranslation(e,t,s),this.applyMatrix4(xi),this}scale(e,t,s){return xi.makeScale(e,t,s),this.applyMatrix4(xi),this}lookAt(e){return Ah.lookAt(e),Ah.updateMatrix(),this.applyMatrix4(Ah.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ga).negate(),this.translate(ga.x,ga.y,ga.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let a=0,c=e.length;a<c;a++){const d=e[a];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new xn(s,3))}else{const s=Math.min(e.length,t.count);for(let a=0;a<s;a++){const c=e[a];t.setXYZ(a,c.x,c.y,c.z||0)}e.length>t.count&&ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ko);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const c=t[s];oi.setFromBufferAttribute(c),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const s=this.boundingSphere.center;if(oi.setFromBufferAttribute(e),t)for(let c=0,d=t.length;c<d;c++){const h=t[c];Ao.setFromBufferAttribute(h),this.morphTargetsRelative?(En.addVectors(oi.min,Ao.min),oi.expandByPoint(En),En.addVectors(oi.max,Ao.max),oi.expandByPoint(En)):(oi.expandByPoint(Ao.min),oi.expandByPoint(Ao.max))}oi.getCenter(s);let a=0;for(let c=0,d=e.count;c<d;c++)En.fromBufferAttribute(e,c),a=Math.max(a,s.distanceToSquared(En));if(t)for(let c=0,d=t.length;c<d;c++){const h=t[c],f=this.morphTargetsRelative;for(let m=0,v=h.count;m<v;m++)En.fromBufferAttribute(h,m),f&&(ga.fromBufferAttribute(e,m),En.add(ga)),a=Math.max(a,s.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,a=t.normal,c=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ui(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),h=[],f=[];for(let T=0;T<s.count;T++)h[T]=new ie,f[T]=new ie;const m=new ie,v=new ie,x=new ie,g=new dt,M=new dt,E=new dt,A=new ie,y=new ie;function S(T,U,Y){m.fromBufferAttribute(s,T),v.fromBufferAttribute(s,U),x.fromBufferAttribute(s,Y),g.fromBufferAttribute(c,T),M.fromBufferAttribute(c,U),E.fromBufferAttribute(c,Y),v.sub(m),x.sub(m),M.sub(g),E.sub(g);const G=1/(M.x*E.y-E.x*M.y);isFinite(G)&&(A.copy(v).multiplyScalar(E.y).addScaledVector(x,-M.y).multiplyScalar(G),y.copy(x).multiplyScalar(M.x).addScaledVector(v,-E.x).multiplyScalar(G),h[T].add(A),h[U].add(A),h[Y].add(A),f[T].add(y),f[U].add(y),f[Y].add(y))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let T=0,U=b.length;T<U;++T){const Y=b[T],G=Y.start,J=Y.count;for(let H=G,Q=G+J;H<Q;H+=3)S(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const w=new ie,N=new ie,I=new ie,L=new ie;function k(T){I.fromBufferAttribute(a,T),L.copy(I);const U=h[T];w.copy(U),w.sub(I.multiplyScalar(I.dot(U))).normalize(),N.crossVectors(L,U);const G=N.dot(f[T])<0?-1:1;d.setXYZW(T,w.x,w.y,w.z,G)}for(let T=0,U=b.length;T<U;++T){const Y=b[T],G=Y.start,J=Y.count;for(let H=G,Q=G+J;H<Q;H+=3)k(e.getX(H+0)),k(e.getX(H+1)),k(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ui(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let g=0,M=s.count;g<M;g++)s.setXYZ(g,0,0,0);const a=new ie,c=new ie,d=new ie,h=new ie,f=new ie,m=new ie,v=new ie,x=new ie;if(e)for(let g=0,M=e.count;g<M;g+=3){const E=e.getX(g+0),A=e.getX(g+1),y=e.getX(g+2);a.fromBufferAttribute(t,E),c.fromBufferAttribute(t,A),d.fromBufferAttribute(t,y),v.subVectors(d,c),x.subVectors(a,c),v.cross(x),h.fromBufferAttribute(s,E),f.fromBufferAttribute(s,A),m.fromBufferAttribute(s,y),h.add(v),f.add(v),m.add(v),s.setXYZ(E,h.x,h.y,h.z),s.setXYZ(A,f.x,f.y,f.z),s.setXYZ(y,m.x,m.y,m.z)}else for(let g=0,M=t.count;g<M;g+=3)a.fromBufferAttribute(t,g+0),c.fromBufferAttribute(t,g+1),d.fromBufferAttribute(t,g+2),v.subVectors(d,c),x.subVectors(a,c),v.cross(x),s.setXYZ(g+0,v.x,v.y,v.z),s.setXYZ(g+1,v.x,v.y,v.z),s.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)En.fromBufferAttribute(e,t),En.normalize(),e.setXYZ(t,En.x,En.y,En.z)}toNonIndexed(){function e(h,f){const m=h.array,v=h.itemSize,x=h.normalized,g=new m.constructor(f.length*v);let M=0,E=0;for(let A=0,y=f.length;A<y;A++){h.isInterleavedBufferAttribute?M=f[A]*h.data.stride+h.offset:M=f[A]*v;for(let S=0;S<v;S++)g[E++]=m[M++]}return new Ui(g,v,x)}if(this.index===null)return ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vn,s=this.index.array,a=this.attributes;for(const h in a){const f=a[h],m=e(f,s);t.setAttribute(h,m)}const c=this.morphAttributes;for(const h in c){const f=[],m=c[h];for(let v=0,x=m.length;v<x;v++){const g=m[v],M=e(g,s);f.push(M)}t.morphAttributes[h]=f}t.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,f=d.length;h<f;h++){const m=d[h];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const m in f)f[m]!==void 0&&(e[m]=f[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const f in s){const m=s[f];e.data.attributes[f]=m.toJSON(e.data)}const a={};let c=!1;for(const f in this.morphAttributes){const m=this.morphAttributes[f],v=[];for(let x=0,g=m.length;x<g;x++){const M=m[x];v.push(M.toJSON(e.data))}v.length>0&&(a[f]=v,c=!0)}c&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const a=e.attributes;for(const m in a){const v=a[m];this.setAttribute(m,v.clone(t))}const c=e.morphAttributes;for(const m in c){const v=[],x=c[m];for(let g=0,M=x.length;g<M;g++)v.push(x[g].clone(t));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,v=d.length;m<v;m++){const x=d[m];this.addGroup(x.start,x.count,x.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class R1{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Yf,this.updateRanges=[],this.version=0,this.uuid=ns()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,s){e*=this.stride,s*=t.stride;for(let a=0,c=this.stride;a<c;a++)this.array[e+a]=t.array[s+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ns()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(t,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ns()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Bn=new ie;class tu{constructor(e,t,s,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=s,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,s=this.data.count;t<s;t++)Bn.fromBufferAttribute(this,t),Bn.applyMatrix4(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)Bn.fromBufferAttribute(this,t),Bn.applyNormalMatrix(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)Bn.fromBufferAttribute(this,t),Bn.transformDirection(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}getComponent(e,t){let s=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(s=$i(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Ht(s,this.array)),this.data.array[e*this.data.stride+this.offset+t]=s,this}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=$i(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=$i(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=$i(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=$i(t,this.array)),t}setXY(e,t,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),s=Ht(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=s,this}setXYZ(e,t,s,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),s=Ht(s,this.array),a=Ht(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=s,this.data.array[e+2]=a,this}setXYZW(e,t,s,a,c){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),s=Ht(s,this.array),a=Ht(a,this.array),c=Ht(c,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=s,this.data.array[e+2]=a,this.data.array[e+3]=c,this}clone(e){if(e===void 0){eu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let s=0;s<this.count;s++){const a=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)t.push(this.data.array[a+c])}return new Ui(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new tu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){eu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let s=0;s<this.count;s++){const a=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)t.push(this.data.array[a+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let N1=0;class Ds extends as{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:N1++}),this.uuid=ns(),this.name="",this.type="Material",this.blending=Aa,this.side=is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=of,this.blendDst=lf,this.blendEquation=Ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=Na,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ax,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=aa,this.stencilZFail=aa,this.stencilZPass=aa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){ut(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){ut(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(s):a&&a.isVector3&&s&&s.isVector3?a.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Aa&&(s.blending=this.blending),this.side!==is&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==of&&(s.blendSrc=this.blendSrc),this.blendDst!==lf&&(s.blendDst=this.blendDst),this.blendEquation!==Ts&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Na&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ax&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==aa&&(s.stencilFail=this.stencilFail),this.stencilZFail!==aa&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==aa&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function a(c){const d=[];for(const h in c){const f=c[h];delete f.metadata,d.push(f)}return d}if(t){const c=a(e.textures),d=a(e.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const a=t.length;s=new Array(a);for(let c=0;c!==a;++c)s[c]=t[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Cv extends Ds{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let xa;const Ro=new ie,va=new ie,_a=new ie,ya=new dt,No=new dt,Av=new rn,dc=new ie,Po=new ie,hc=new ie,Hx=new dt,Rh=new dt,Gx=new dt;class P1 extends gn{constructor(e=new Cv){if(super(),this.isSprite=!0,this.type="Sprite",xa===void 0){xa=new Vn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new R1(t,5);xa.setIndex([0,1,2,0,2,3]),xa.setAttribute("position",new tu(s,3,0,!1)),xa.setAttribute("uv",new tu(s,2,3,!1))}this.geometry=xa,this.material=e,this.center=new dt(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Pt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),va.setFromMatrixScale(this.matrixWorld),Av.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),_a.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&va.multiplyScalar(-_a.z);const s=this.material.rotation;let a,c;s!==0&&(c=Math.cos(s),a=Math.sin(s));const d=this.center;fc(dc.set(-.5,-.5,0),_a,d,va,a,c),fc(Po.set(.5,-.5,0),_a,d,va,a,c),fc(hc.set(.5,.5,0),_a,d,va,a,c),Hx.set(0,0),Rh.set(1,0),Gx.set(1,1);let h=e.ray.intersectTriangle(dc,Po,hc,!1,Ro);if(h===null&&(fc(Po.set(-.5,.5,0),_a,d,va,a,c),Rh.set(0,1),h=e.ray.intersectTriangle(dc,hc,Po,!1,Ro),h===null))return;const f=e.ray.origin.distanceTo(Ro);f<e.near||f>e.far||t.push({distance:f,point:Ro.clone(),uv:yi.getInterpolation(Ro,dc,Po,hc,Hx,Rh,Gx,new dt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function fc(i,e,t,s,a,c){ya.subVectors(i,t).addScalar(.5).multiply(s),a!==void 0?(No.x=c*ya.x-a*ya.y,No.y=a*ya.x+c*ya.y):No.copy(ya),i.copy(e),i.x+=No.x,i.y+=No.y,i.applyMatrix4(Av)}const gr=new ie,Nh=new ie,pc=new ie,Yr=new ie,Ph=new ie,mc=new ie,Lh=new ie;class bp{constructor(e=new ie,t=new ie(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gr.copy(this.origin).addScaledVector(this.direction,t),gr.distanceToSquared(e))}distanceSqToSegment(e,t,s,a){Nh.copy(e).add(t).multiplyScalar(.5),pc.copy(t).sub(e).normalize(),Yr.copy(this.origin).sub(Nh);const c=e.distanceTo(t)*.5,d=-this.direction.dot(pc),h=Yr.dot(this.direction),f=-Yr.dot(pc),m=Yr.lengthSq(),v=Math.abs(1-d*d);let x,g,M,E;if(v>0)if(x=d*f-h,g=d*h-f,E=c*v,x>=0)if(g>=-E)if(g<=E){const A=1/v;x*=A,g*=A,M=x*(x+d*g+2*h)+g*(d*x+g+2*f)+m}else g=c,x=Math.max(0,-(d*g+h)),M=-x*x+g*(g+2*f)+m;else g=-c,x=Math.max(0,-(d*g+h)),M=-x*x+g*(g+2*f)+m;else g<=-E?(x=Math.max(0,-(-d*c+h)),g=x>0?-c:Math.min(Math.max(-c,-f),c),M=-x*x+g*(g+2*f)+m):g<=E?(x=0,g=Math.min(Math.max(-c,-f),c),M=g*(g+2*f)+m):(x=Math.max(0,-(d*c+h)),g=x>0?c:Math.min(Math.max(-c,-f),c),M=-x*x+g*(g+2*f)+m);else g=d>0?-c:c,x=Math.max(0,-(d*g+h)),M=-x*x+g*(g+2*f)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,x),a&&a.copy(Nh).addScaledVector(pc,g),M}intersectSphere(e,t){gr.subVectors(e.center,this.origin);const s=gr.dot(this.direction),a=gr.dot(gr)-s*s,c=e.radius*e.radius;if(a>c)return null;const d=Math.sqrt(c-a),h=s-d,f=s+d;return f<0?null:h<0?this.at(f,t):this.at(h,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,a,c,d,h,f;const m=1/this.direction.x,v=1/this.direction.y,x=1/this.direction.z,g=this.origin;return m>=0?(s=(e.min.x-g.x)*m,a=(e.max.x-g.x)*m):(s=(e.max.x-g.x)*m,a=(e.min.x-g.x)*m),v>=0?(c=(e.min.y-g.y)*v,d=(e.max.y-g.y)*v):(c=(e.max.y-g.y)*v,d=(e.min.y-g.y)*v),s>d||c>a||((c>s||isNaN(s))&&(s=c),(d<a||isNaN(a))&&(a=d),x>=0?(h=(e.min.z-g.z)*x,f=(e.max.z-g.z)*x):(h=(e.max.z-g.z)*x,f=(e.min.z-g.z)*x),s>f||h>a)||((h>s||s!==s)&&(s=h),(f<a||a!==a)&&(a=f),a<0)?null:this.at(s>=0?s:a,t)}intersectsBox(e){return this.intersectBox(e,gr)!==null}intersectTriangle(e,t,s,a,c){Ph.subVectors(t,e),mc.subVectors(s,e),Lh.crossVectors(Ph,mc);let d=this.direction.dot(Lh),h;if(d>0){if(a)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Yr.subVectors(this.origin,e);const f=h*this.direction.dot(mc.crossVectors(Yr,mc));if(f<0)return null;const m=h*this.direction.dot(Ph.cross(Yr));if(m<0||f+m>d)return null;const v=-h*Yr.dot(Lh);return v<0?null:this.at(v/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rv extends Ds{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ss,this.combine=sv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vx=new rn,bs=new bp,gc=new lu,Wx=new ie,xc=new ie,vc=new ie,_c=new ie,Ih=new ie,yc=new ie,Xx=new ie,Sc=new ie;class Fi extends gn{constructor(e=new Vn,t=new Rv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=a.length;c<d;c++){const h=a[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,t){const s=this.geometry,a=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;t.fromBufferAttribute(a,e);const h=this.morphTargetInfluences;if(c&&h){yc.set(0,0,0);for(let f=0,m=c.length;f<m;f++){const v=h[f],x=c[f];v!==0&&(Ih.fromBufferAttribute(x,e),d?yc.addScaledVector(Ih,v):yc.addScaledVector(Ih.sub(t),v))}t.add(yc)}return t}raycast(e,t){const s=this.geometry,a=this.material,c=this.matrixWorld;a!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),gc.copy(s.boundingSphere),gc.applyMatrix4(c),bs.copy(e.ray).recast(e.near),!(gc.containsPoint(bs.origin)===!1&&(bs.intersectSphere(gc,Wx)===null||bs.origin.distanceToSquared(Wx)>(e.far-e.near)**2))&&(Vx.copy(c).invert(),bs.copy(e.ray).applyMatrix4(Vx),!(s.boundingBox!==null&&bs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,bs)))}_computeIntersections(e,t,s){let a;const c=this.geometry,d=this.material,h=c.index,f=c.attributes.position,m=c.attributes.uv,v=c.attributes.uv1,x=c.attributes.normal,g=c.groups,M=c.drawRange;if(h!==null)if(Array.isArray(d))for(let E=0,A=g.length;E<A;E++){const y=g[E],S=d[y.materialIndex],b=Math.max(y.start,M.start),w=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let N=b,I=w;N<I;N+=3){const L=h.getX(N),k=h.getX(N+1),T=h.getX(N+2);a=Mc(this,S,e,s,m,v,x,L,k,T),a&&(a.faceIndex=Math.floor(N/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const E=Math.max(0,M.start),A=Math.min(h.count,M.start+M.count);for(let y=E,S=A;y<S;y+=3){const b=h.getX(y),w=h.getX(y+1),N=h.getX(y+2);a=Mc(this,d,e,s,m,v,x,b,w,N),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}else if(f!==void 0)if(Array.isArray(d))for(let E=0,A=g.length;E<A;E++){const y=g[E],S=d[y.materialIndex],b=Math.max(y.start,M.start),w=Math.min(f.count,Math.min(y.start+y.count,M.start+M.count));for(let N=b,I=w;N<I;N+=3){const L=N,k=N+1,T=N+2;a=Mc(this,S,e,s,m,v,x,L,k,T),a&&(a.faceIndex=Math.floor(N/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const E=Math.max(0,M.start),A=Math.min(f.count,M.start+M.count);for(let y=E,S=A;y<S;y+=3){const b=y,w=y+1,N=y+2;a=Mc(this,d,e,s,m,v,x,b,w,N),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}}}function L1(i,e,t,s,a,c,d,h){let f;if(e.side===ti?f=s.intersectTriangle(d,c,a,!0,h):f=s.intersectTriangle(a,c,d,e.side===is,h),f===null)return null;Sc.copy(h),Sc.applyMatrix4(i.matrixWorld);const m=t.ray.origin.distanceTo(Sc);return m<t.near||m>t.far?null:{distance:m,point:Sc.clone(),object:i}}function Mc(i,e,t,s,a,c,d,h,f,m){i.getVertexPosition(h,xc),i.getVertexPosition(f,vc),i.getVertexPosition(m,_c);const v=L1(i,e,t,s,xc,vc,_c,Xx);if(v){const x=new ie;yi.getBarycoord(Xx,xc,vc,_c,x),a&&(v.uv=yi.getInterpolatedAttribute(a,h,f,m,x,new dt)),c&&(v.uv1=yi.getInterpolatedAttribute(c,h,f,m,x,new dt)),d&&(v.normal=yi.getInterpolatedAttribute(d,h,f,m,x,new ie),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const g={a:h,b:f,c:m,normal:new ie,materialIndex:0};yi.getNormal(xc,vc,_c,g.normal),v.face=g,v.barycoord=x}return v}class I1 extends Fn{constructor(e=null,t=1,s=1,a,c,d,h,f,m=Cn,v=Cn,x,g){super(null,d,h,f,m,v,a,c,x,g),this.isDataTexture=!0,this.image={data:e,width:t,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Dh=new ie,D1=new ie,U1=new vt;class Qr{constructor(e=new ie(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,a){return this.normal.set(e,t,s),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const a=Dh.subVectors(s,t).cross(D1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,s=!0){const a=e.delta(Dh),c=this.normal.dot(a);if(c===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/c;return s===!0&&(d<0||d>1)?null:t.copy(e.start).addScaledVector(a,d)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||U1.getNormalMatrix(e),a=this.coplanarPoint(Dh).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-a.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ws=new lu,F1=new dt(.5,.5),Ec=new ie;class wp{constructor(e=new Qr,t=new Qr,s=new Qr,a=new Qr,c=new Qr,d=new Qr){this.planes=[e,t,s,a,c,d]}set(e,t,s,a,c,d){const h=this.planes;return h[0].copy(e),h[1].copy(t),h[2].copy(s),h[3].copy(a),h[4].copy(c),h[5].copy(d),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Yi,s=!1){const a=this.planes,c=e.elements,d=c[0],h=c[1],f=c[2],m=c[3],v=c[4],x=c[5],g=c[6],M=c[7],E=c[8],A=c[9],y=c[10],S=c[11],b=c[12],w=c[13],N=c[14],I=c[15];if(a[0].setComponents(m-d,M-v,S-E,I-b).normalize(),a[1].setComponents(m+d,M+v,S+E,I+b).normalize(),a[2].setComponents(m+h,M+x,S+A,I+w).normalize(),a[3].setComponents(m-h,M-x,S-A,I-w).normalize(),s)a[4].setComponents(f,g,y,N).normalize(),a[5].setComponents(m-f,M-g,S-y,I-N).normalize();else if(a[4].setComponents(m-f,M-g,S-y,I-N).normalize(),t===Yi)a[5].setComponents(m+f,M+g,S+y,I+N).normalize();else if(t===Wo)a[5].setComponents(f,g,y,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ws.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(e){ws.center.set(0,0,0);const t=F1.distanceTo(e.center);return ws.radius=.7071067811865476+t,ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(e){const t=this.planes,s=e.center,a=-e.radius;for(let c=0;c<6;c++)if(t[c].distanceToPoint(s)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const a=t[s];if(Ec.x=a.normal.x>0?e.max.x:e.min.x,Ec.y=a.normal.y>0?e.max.y:e.min.y,Ec.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Ec)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Tp extends Ds{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const nu=new ie,iu=new ie,$x=new rn,Lo=new bp,bc=new lu,Uh=new ie,qx=new ie;class Nv extends gn{constructor(e=new Vn,t=new Tp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[0];for(let a=1,c=t.count;a<c;a++)nu.fromBufferAttribute(t,a-1),iu.fromBufferAttribute(t,a),s[a]=s[a-1],s[a]+=nu.distanceTo(iu);e.setAttribute("lineDistance",new xn(s,1))}else ut("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const s=this.geometry,a=this.matrixWorld,c=e.params.Line.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),bc.copy(s.boundingSphere),bc.applyMatrix4(a),bc.radius+=c,e.ray.intersectsSphere(bc)===!1)return;$x.copy(a).invert(),Lo.copy(e.ray).applyMatrix4($x);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),f=h*h,m=this.isLineSegments?2:1,v=s.index,g=s.attributes.position;if(v!==null){const M=Math.max(0,d.start),E=Math.min(v.count,d.start+d.count);for(let A=M,y=E-1;A<y;A+=m){const S=v.getX(A),b=v.getX(A+1),w=wc(this,e,Lo,f,S,b,A);w&&t.push(w)}if(this.isLineLoop){const A=v.getX(E-1),y=v.getX(M),S=wc(this,e,Lo,f,A,y,E-1);S&&t.push(S)}}else{const M=Math.max(0,d.start),E=Math.min(g.count,d.start+d.count);for(let A=M,y=E-1;A<y;A+=m){const S=wc(this,e,Lo,f,A,A+1,A);S&&t.push(S)}if(this.isLineLoop){const A=wc(this,e,Lo,f,E-1,M,E-1);A&&t.push(A)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=a.length;c<d;c++){const h=a[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function wc(i,e,t,s,a,c,d){const h=i.geometry.attributes.position;if(nu.fromBufferAttribute(h,a),iu.fromBufferAttribute(h,c),t.distanceSqToSegment(nu,iu,Uh,qx)>s)return;Uh.applyMatrix4(i.matrixWorld);const m=e.ray.origin.distanceTo(Uh);if(!(m<e.near||m>e.far))return{distance:m,point:qx.clone().applyMatrix4(i.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:i}}const Yx=new ie,Kx=new ie;class O1 extends Nv{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[];for(let a=0,c=t.count;a<c;a+=2)Yx.fromBufferAttribute(t,a),Kx.fromBufferAttribute(t,a+1),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+Yx.distanceTo(Kx);e.setAttribute("lineDistance",new xn(s,1))}else ut("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Pv extends Fn{constructor(e=[],t=Ps,s,a,c,d,h,f,m,v){super(e,t,s,a,c,d,h,f,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class k1 extends Fn{constructor(e,t,s,a,c,d,h,f,m){super(e,t,s,a,c,d,h,f,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class La extends Fn{constructor(e,t,s=Ji,a,c,d,h=Cn,f=Cn,m,v=br,x=1){if(v!==br&&v!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:x};super(g,a,c,d,h,f,v,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Mp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class j1 extends La{constructor(e,t=Ji,s=Ps,a,c,d=Cn,h=Cn,f,m=br){const v={width:e,height:e,depth:1},x=[v,v,v,v,v,v];super(e,e,t,s,a,c,d,h,f,m),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Lv extends Fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ka extends Vn{constructor(e=1,t=1,s=1,a=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:a,heightSegments:c,depthSegments:d};const h=this;a=Math.floor(a),c=Math.floor(c),d=Math.floor(d);const f=[],m=[],v=[],x=[];let g=0,M=0;E("z","y","x",-1,-1,s,t,e,d,c,0),E("z","y","x",1,-1,s,t,-e,d,c,1),E("x","z","y",1,1,e,s,t,a,d,2),E("x","z","y",1,-1,e,s,-t,a,d,3),E("x","y","z",1,-1,e,t,s,a,c,4),E("x","y","z",-1,-1,e,t,-s,a,c,5),this.setIndex(f),this.setAttribute("position",new xn(m,3)),this.setAttribute("normal",new xn(v,3)),this.setAttribute("uv",new xn(x,2));function E(A,y,S,b,w,N,I,L,k,T,U){const Y=N/k,G=I/T,J=N/2,H=I/2,Q=L/2,X=k+1,O=T+1;let V=0,$=0;const ue=new ie;for(let se=0;se<O;se++){const B=se*G-H;for(let re=0;re<X;re++){const Oe=re*Y-J;ue[A]=Oe*b,ue[y]=B*w,ue[S]=Q,m.push(ue.x,ue.y,ue.z),ue[A]=0,ue[y]=0,ue[S]=L>0?1:-1,v.push(ue.x,ue.y,ue.z),x.push(re/k),x.push(1-se/T),V+=1}}for(let se=0;se<T;se++)for(let B=0;B<k;B++){const re=g+B+X*se,Oe=g+B+X*(se+1),Te=g+(B+1)+X*(se+1),Re=g+(B+1)+X*se;f.push(re,Oe,Re),f.push(Oe,Te,Re),$+=6}h.addGroup(M,$,U),M+=$,g+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ka(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Cp extends Vn{constructor(e=1,t=1,s=1,a=32,c=1,d=!1,h=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:s,radialSegments:a,heightSegments:c,openEnded:d,thetaStart:h,thetaLength:f};const m=this;a=Math.floor(a),c=Math.floor(c);const v=[],x=[],g=[],M=[];let E=0;const A=[],y=s/2;let S=0;b(),d===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(v),this.setAttribute("position",new xn(x,3)),this.setAttribute("normal",new xn(g,3)),this.setAttribute("uv",new xn(M,2));function b(){const N=new ie,I=new ie;let L=0;const k=(t-e)/s;for(let T=0;T<=c;T++){const U=[],Y=T/c,G=Y*(t-e)+e;for(let J=0;J<=a;J++){const H=J/a,Q=H*f+h,X=Math.sin(Q),O=Math.cos(Q);I.x=G*X,I.y=-Y*s+y,I.z=G*O,x.push(I.x,I.y,I.z),N.set(X,k,O).normalize(),g.push(N.x,N.y,N.z),M.push(H,1-Y),U.push(E++)}A.push(U)}for(let T=0;T<a;T++)for(let U=0;U<c;U++){const Y=A[U][T],G=A[U+1][T],J=A[U+1][T+1],H=A[U][T+1];(e>0||U!==0)&&(v.push(Y,G,H),L+=3),(t>0||U!==c-1)&&(v.push(G,J,H),L+=3)}m.addGroup(S,L,0),S+=L}function w(N){const I=E,L=new dt,k=new ie;let T=0;const U=N===!0?e:t,Y=N===!0?1:-1;for(let J=1;J<=a;J++)x.push(0,y*Y,0),g.push(0,Y,0),M.push(.5,.5),E++;const G=E;for(let J=0;J<=a;J++){const Q=J/a*f+h,X=Math.cos(Q),O=Math.sin(Q);k.x=U*O,k.y=y*Y,k.z=U*X,x.push(k.x,k.y,k.z),g.push(0,Y,0),L.x=X*.5+.5,L.y=O*.5*Y+.5,M.push(L.x,L.y),E++}for(let J=0;J<a;J++){const H=I+J,Q=G+J;N===!0?v.push(Q,Q+1,H):v.push(Q+1,Q,H),T+=3}m.addGroup(S,T,N===!0?1:2),S+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cp(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Zo extends Vn{constructor(e=1,t=1,s=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:a};const c=e/2,d=t/2,h=Math.floor(s),f=Math.floor(a),m=h+1,v=f+1,x=e/h,g=t/f,M=[],E=[],A=[],y=[];for(let S=0;S<v;S++){const b=S*g-d;for(let w=0;w<m;w++){const N=w*x-c;E.push(N,-b,0),A.push(0,0,1),y.push(w/h),y.push(1-S/f)}}for(let S=0;S<f;S++)for(let b=0;b<h;b++){const w=b+m*S,N=b+m*(S+1),I=b+1+m*(S+1),L=b+1+m*S;M.push(w,N,L),M.push(N,I,L)}this.setIndex(M),this.setAttribute("position",new xn(E,3)),this.setAttribute("normal",new xn(A,3)),this.setAttribute("uv",new xn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ap extends Vn{constructor(e=1,t=32,s=16,a=0,c=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:s,phiStart:a,phiLength:c,thetaStart:d,thetaLength:h},t=Math.max(3,Math.floor(t)),s=Math.max(2,Math.floor(s));const f=Math.min(d+h,Math.PI);let m=0;const v=[],x=new ie,g=new ie,M=[],E=[],A=[],y=[];for(let S=0;S<=s;S++){const b=[],w=S/s;let N=0;S===0&&d===0?N=.5/t:S===s&&f===Math.PI&&(N=-.5/t);for(let I=0;I<=t;I++){const L=I/t;x.x=-e*Math.cos(a+L*c)*Math.sin(d+w*h),x.y=e*Math.cos(d+w*h),x.z=e*Math.sin(a+L*c)*Math.sin(d+w*h),E.push(x.x,x.y,x.z),g.copy(x).normalize(),A.push(g.x,g.y,g.z),y.push(L+N,1-w),b.push(m++)}v.push(b)}for(let S=0;S<s;S++)for(let b=0;b<t;b++){const w=v[S][b+1],N=v[S][b],I=v[S+1][b],L=v[S+1][b+1];(S!==0||d>0)&&M.push(w,N,L),(S!==s-1||f<Math.PI)&&M.push(N,I,L)}this.setIndex(M),this.setAttribute("position",new xn(E,3)),this.setAttribute("normal",new xn(A,3)),this.setAttribute("uv",new xn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ap(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Ia(i){const e={};for(const t in i){e[t]={};for(const s in i[t]){const a=i[t][s];if(Zx(a))a.isRenderTargetTexture?(ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=a.clone();else if(Array.isArray(a))if(Zx(a[0])){const c=[];for(let d=0,h=a.length;d<h;d++)c[d]=a[d].clone();e[t][s]=c}else e[t][s]=a.slice();else e[t][s]=a}}return e}function Gn(i){const e={};for(let t=0;t<i.length;t++){const s=Ia(i[t]);for(const a in s)e[a]=s[a]}return e}function Zx(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function B1(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Iv(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const z1={clone:Ia,merge:Gn};var H1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,G1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qi extends Ds{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=H1,this.fragmentShader=G1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ia(e.uniforms),this.uniformsGroups=B1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const d=this.uniforms[a].value;d&&d.isTexture?t.uniforms[a]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?t.uniforms[a]={type:"c",value:d.getHex()}:d&&d.isVector2?t.uniforms[a]={type:"v2",value:d.toArray()}:d&&d.isVector3?t.uniforms[a]={type:"v3",value:d.toArray()}:d&&d.isVector4?t.uniforms[a]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?t.uniforms[a]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?t.uniforms[a]={type:"m4",value:d.toArray()}:t.uniforms[a]={value:d}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const a in this.extensions)this.extensions[a]===!0&&(s[a]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class V1 extends Qi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Dv extends Ds{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qf,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ss,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class W1 extends Ds{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=JE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class X1 extends Ds{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Uv extends gn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class $1 extends Uv{constructor(e,t,s){super(e,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ct(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Fh=new rn,Jx=new ie,Qx=new ie;class q1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.mapType=li,this.map=null,this.mapPass=null,this.matrix=new rn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wp,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,s=this.matrix;Jx.setFromMatrixPosition(e.matrixWorld),t.position.copy(Jx),Qx.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qx),t.updateMatrixWorld(),Fh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fh,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Wo||t.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Fh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Tc=new ie,Cc=new rs,Vi=new ie;class Fv extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=Yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Tc,Cc,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Tc,Cc,Vi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Tc,Cc,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Tc,Cc,Vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Kr=new ie,e0=new dt,t0=new dt;class _i extends Fv{constructor(e=50,t=1,s=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zf*2*Math.atan(Math.tan(Wc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Kr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Kr.x,Kr.y).multiplyScalar(-e/Kr.z),Kr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Kr.x,Kr.y).multiplyScalar(-e/Kr.z)}getViewSize(e,t){return this.getViewBounds(e,e0,t0),t.subVectors(t0,e0)}setViewOffset(e,t,s,a,c,d){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Wc*.5*this.fov)/this.zoom,s=2*t,a=this.aspect*s,c=-.5*a;const d=this.view;if(this.view!==null&&this.view.enabled){const f=d.fullWidth,m=d.fullHeight;c+=d.offsetX*a/f,t-=d.offsetY*s/m,a*=d.width/f,s*=d.height/m}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+a,t,t-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Rp extends Fv{constructor(e=-1,t=1,s=1,a=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=a,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,a,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let c=s-e,d=s+e,h=a+t,f=a-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,d=c+m*this.view.width,h-=v*this.view.offsetY,f=h-v*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Y1 extends q1{constructor(){super(new Rp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class K1 extends Uv{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.target=new gn,this.shadow=new Y1}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Sa=-90,Ma=1;class Z1 extends gn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new _i(Sa,Ma,e,t);a.layers=this.layers,this.add(a);const c=new _i(Sa,Ma,e,t);c.layers=this.layers,this.add(c);const d=new _i(Sa,Ma,e,t);d.layers=this.layers,this.add(d);const h=new _i(Sa,Ma,e,t);h.layers=this.layers,this.add(h);const f=new _i(Sa,Ma,e,t);f.layers=this.layers,this.add(f);const m=new _i(Sa,Ma,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,a,c,d,h,f]=t;for(const m of t)this.remove(m);if(e===Yi)s.up.set(0,1,0),s.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Wo)s.up.set(0,-1,0),s.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,f,m,v]=this.children,x=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(s,0,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(s,1,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(s,2,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(s,3,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(s,4,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),s.texture.generateMipmaps=A,e.setRenderTarget(s,5,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(x,g,M),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class J1 extends _i{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class n0{constructor(e=1,t=0,s=0){this.radius=e,this.phi=t,this.theta=s}set(e,t,s){return this.radius=e,this.phi=t,this.theta=s,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=At(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,s){return this.radius=Math.sqrt(e*e+t*t+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,s),this.phi=Math.acos(At(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Up=class Up{constructor(e,t,s,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,s,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let s=0;s<4;s++)this.elements[s]=e[s+t];return this}set(e,t,s,a){const c=this.elements;return c[0]=e,c[2]=t,c[1]=s,c[3]=a,this}};Up.prototype.isMatrix2=!0;let i0=Up;class Q1 extends O1{constructor(e=10,t=10,s=4473924,a=8947848){s=new Ct(s),a=new Ct(a);const c=t/2,d=e/t,h=e/2,f=[],m=[];for(let g=0,M=0,E=-h;g<=t;g++,E+=d){f.push(-h,0,E,h,0,E),f.push(E,0,-h,E,0,h);const A=g===c?s:a;A.toArray(m,M),M+=3,A.toArray(m,M),M+=3,A.toArray(m,M),M+=3,A.toArray(m,M),M+=3}const v=new Vn;v.setAttribute("position",new xn(f,3)),v.setAttribute("color",new xn(m,3));const x=new Tp({vertexColors:!0,toneMapped:!1});super(v,x),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class eb extends as{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){ut("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function r0(i,e,t,s){const a=tb(s);switch(t){case vv:return i*e;case yv:return i*e/a.components*a.byteLength;case xp:return i*e/a.components*a.byteLength;case Ls:return i*e*2/a.components*a.byteLength;case vp:return i*e*2/a.components*a.byteLength;case _v:return i*e*3/a.components*a.byteLength;case Di:return i*e*4/a.components*a.byteLength;case _p:return i*e*4/a.components*a.byteLength;case zc:case Hc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Gc:case Vc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _f:case Sf:return Math.max(i,16)*Math.max(e,8)/4;case vf:case yf:return Math.max(i,8)*Math.max(e,8)/2;case Mf:case Ef:case wf:case Tf:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case bf:case Yc:case Cf:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Af:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Rf:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Nf:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Pf:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Lf:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case If:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Df:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Uf:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ff:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Of:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case kf:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case jf:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Bf:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case zf:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Hf:case Gf:case Vf:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Wf:case Xf:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Kc:case $f:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function tb(i){switch(i){case li:case pv:return{byteLength:1,components:1};case Go:case mv:case Er:return{byteLength:2,components:1};case mp:case gp:return{byteLength:2,components:4};case Ji:case pp:case qi:return{byteLength:4,components:1};case gv:case xv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fp}}));typeof window<"u"&&(window.__THREE__?ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ov(){let i=null,e=!1,t=null,s=null;function a(c,d){t(c,d),s=i.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(s=i.requestAnimationFrame(a),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){t=c},setContext:function(c){i=c}}}function nb(i){const e=new WeakMap;function t(h,f){const m=h.array,v=h.usage,x=m.byteLength,g=i.createBuffer();i.bindBuffer(f,g),i.bufferData(f,m,v),h.onUploadCallback();let M;if(m instanceof Float32Array)M=i.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)M=i.HALF_FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?M=i.HALF_FLOAT:M=i.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=i.SHORT;else if(m instanceof Uint32Array)M=i.UNSIGNED_INT;else if(m instanceof Int32Array)M=i.INT;else if(m instanceof Int8Array)M=i.BYTE;else if(m instanceof Uint8Array)M=i.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:g,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:x}}function s(h,f,m){const v=f.array,x=f.updateRanges;if(i.bindBuffer(m,h),x.length===0)i.bufferSubData(m,0,v);else{x.sort((M,E)=>M.start-E.start);let g=0;for(let M=1;M<x.length;M++){const E=x[g],A=x[M];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++g,x[g]=A)}x.length=g+1;for(let M=0,E=x.length;M<E;M++){const A=x[M];i.bufferSubData(m,A.start*v.BYTES_PER_ELEMENT,v,A.start,A.count)}f.clearUpdateRanges()}f.onUploadCallback()}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const f=e.get(h);f&&(i.deleteBuffer(f.buffer),e.delete(h))}function d(h,f){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=e.get(h);(!v||v.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=e.get(h);if(m===void 0)e.set(h,t(h,f));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,h,f),m.version=h.version}}return{get:a,remove:c,update:d}}var ib=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rb=`#ifdef USE_ALPHAHASH
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
#endif`,sb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ab=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ob=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cb=`#ifdef USE_AOMAP
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
#endif`,ub=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,db=`#ifdef USE_BATCHING
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
#endif`,hb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gb=`#ifdef USE_IRIDESCENCE
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
#endif`,xb=`#ifdef USE_BUMPMAP
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
#endif`,vb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_b=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Eb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,bb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,wb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Tb=`#define PI 3.141592653589793
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
} // validated`,Cb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ab=`vec3 transformedNormal = objectNormal;
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
#endif`,Rb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ib="gl_FragColor = linearToOutputTexel( gl_FragColor );",Db=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ub=`#ifdef USE_ENVMAP
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
#endif`,Fb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ob=`#ifdef USE_ENVMAP
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
#endif`,kb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jb=`#ifdef USE_ENVMAP
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
#endif`,Bb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vb=`#ifdef USE_GRADIENTMAP
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
}`,Wb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$b=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Yb=`#ifdef USE_ENVMAP
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
#endif`,Kb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ew=`PhysicalMaterial material;
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
#endif`,tw=`uniform sampler2D dfgLUT;
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
}`,nw=`
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
#endif`,iw=`#if defined( RE_IndirectDiffuse )
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
#endif`,rw=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sw=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,aw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ow=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fw=`#if defined( USE_POINTS_UV )
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
#endif`,pw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_w=`#ifdef USE_MORPHTARGETS
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
#endif`,yw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Mw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ew=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ww=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tw=`#ifdef USE_NORMALMAP
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
#endif`,Cw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Aw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Nw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Iw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Uw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ow=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hw=`float getShadowMask() {
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
}`,Gw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vw=`#ifdef USE_SKINNING
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
#endif`,Ww=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xw=`#ifdef USE_SKINNING
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
#endif`,$w=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zw=`#ifdef USE_TRANSMISSION
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
#endif`,Jw=`#ifdef USE_TRANSMISSION
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
#endif`,Qw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rT=`uniform sampler2D t2D;
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
}`,sT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,oT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cT=`#include <common>
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
}`,uT=`#if DEPTH_PACKING == 3200
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
}`,dT=`#define DISTANCE
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
}`,hT=`#define DISTANCE
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
}`,fT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mT=`uniform float scale;
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
}`,gT=`uniform vec3 diffuse;
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
}`,xT=`#include <common>
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
}`,vT=`uniform vec3 diffuse;
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
}`,_T=`#define LAMBERT
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
}`,yT=`#define LAMBERT
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
}`,ST=`#define MATCAP
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
}`,MT=`#define MATCAP
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
}`,ET=`#define NORMAL
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
}`,bT=`#define NORMAL
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
}`,wT=`#define PHONG
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
}`,TT=`#define PHONG
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
}`,CT=`#define STANDARD
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
}`,AT=`#define STANDARD
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
}`,RT=`#define TOON
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
}`,NT=`#define TOON
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
}`,PT=`uniform float size;
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
}`,LT=`uniform vec3 diffuse;
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
}`,IT=`#include <common>
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
}`,DT=`uniform vec3 color;
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
}`,UT=`uniform float rotation;
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
}`,FT=`uniform vec3 diffuse;
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
}`,yt={alphahash_fragment:ib,alphahash_pars_fragment:rb,alphamap_fragment:sb,alphamap_pars_fragment:ab,alphatest_fragment:ob,alphatest_pars_fragment:lb,aomap_fragment:cb,aomap_pars_fragment:ub,batching_pars_vertex:db,batching_vertex:hb,begin_vertex:fb,beginnormal_vertex:pb,bsdfs:mb,iridescence_fragment:gb,bumpmap_pars_fragment:xb,clipping_planes_fragment:vb,clipping_planes_pars_fragment:_b,clipping_planes_pars_vertex:yb,clipping_planes_vertex:Sb,color_fragment:Mb,color_pars_fragment:Eb,color_pars_vertex:bb,color_vertex:wb,common:Tb,cube_uv_reflection_fragment:Cb,defaultnormal_vertex:Ab,displacementmap_pars_vertex:Rb,displacementmap_vertex:Nb,emissivemap_fragment:Pb,emissivemap_pars_fragment:Lb,colorspace_fragment:Ib,colorspace_pars_fragment:Db,envmap_fragment:Ub,envmap_common_pars_fragment:Fb,envmap_pars_fragment:Ob,envmap_pars_vertex:kb,envmap_physical_pars_fragment:Yb,envmap_vertex:jb,fog_vertex:Bb,fog_pars_vertex:zb,fog_fragment:Hb,fog_pars_fragment:Gb,gradientmap_pars_fragment:Vb,lightmap_pars_fragment:Wb,lights_lambert_fragment:Xb,lights_lambert_pars_fragment:$b,lights_pars_begin:qb,lights_toon_fragment:Kb,lights_toon_pars_fragment:Zb,lights_phong_fragment:Jb,lights_phong_pars_fragment:Qb,lights_physical_fragment:ew,lights_physical_pars_fragment:tw,lights_fragment_begin:nw,lights_fragment_maps:iw,lights_fragment_end:rw,lightprobes_pars_fragment:sw,logdepthbuf_fragment:aw,logdepthbuf_pars_fragment:ow,logdepthbuf_pars_vertex:lw,logdepthbuf_vertex:cw,map_fragment:uw,map_pars_fragment:dw,map_particle_fragment:hw,map_particle_pars_fragment:fw,metalnessmap_fragment:pw,metalnessmap_pars_fragment:mw,morphinstance_vertex:gw,morphcolor_vertex:xw,morphnormal_vertex:vw,morphtarget_pars_vertex:_w,morphtarget_vertex:yw,normal_fragment_begin:Sw,normal_fragment_maps:Mw,normal_pars_fragment:Ew,normal_pars_vertex:bw,normal_vertex:ww,normalmap_pars_fragment:Tw,clearcoat_normal_fragment_begin:Cw,clearcoat_normal_fragment_maps:Aw,clearcoat_pars_fragment:Rw,iridescence_pars_fragment:Nw,opaque_fragment:Pw,packing:Lw,premultiplied_alpha_fragment:Iw,project_vertex:Dw,dithering_fragment:Uw,dithering_pars_fragment:Fw,roughnessmap_fragment:Ow,roughnessmap_pars_fragment:kw,shadowmap_pars_fragment:jw,shadowmap_pars_vertex:Bw,shadowmap_vertex:zw,shadowmask_pars_fragment:Hw,skinbase_vertex:Gw,skinning_pars_vertex:Vw,skinning_vertex:Ww,skinnormal_vertex:Xw,specularmap_fragment:$w,specularmap_pars_fragment:qw,tonemapping_fragment:Yw,tonemapping_pars_fragment:Kw,transmission_fragment:Zw,transmission_pars_fragment:Jw,uv_pars_fragment:Qw,uv_pars_vertex:eT,uv_vertex:tT,worldpos_vertex:nT,background_vert:iT,background_frag:rT,backgroundCube_vert:sT,backgroundCube_frag:aT,cube_vert:oT,cube_frag:lT,depth_vert:cT,depth_frag:uT,distance_vert:dT,distance_frag:hT,equirect_vert:fT,equirect_frag:pT,linedashed_vert:mT,linedashed_frag:gT,meshbasic_vert:xT,meshbasic_frag:vT,meshlambert_vert:_T,meshlambert_frag:yT,meshmatcap_vert:ST,meshmatcap_frag:MT,meshnormal_vert:ET,meshnormal_frag:bT,meshphong_vert:wT,meshphong_frag:TT,meshphysical_vert:CT,meshphysical_frag:AT,meshtoon_vert:RT,meshtoon_frag:NT,points_vert:PT,points_frag:LT,shadow_vert:IT,shadow_frag:DT,sprite_vert:UT,sprite_frag:FT},Be={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ie},probesMax:{value:new ie},probesResolution:{value:new ie}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},Xi={basic:{uniforms:Gn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:yt.meshbasic_vert,fragmentShader:yt.meshbasic_frag},lambert:{uniforms:Gn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Ct(0)},envMapIntensity:{value:1}}]),vertexShader:yt.meshlambert_vert,fragmentShader:yt.meshlambert_frag},phong:{uniforms:Gn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:yt.meshphong_vert,fragmentShader:yt.meshphong_frag},standard:{uniforms:Gn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag},toon:{uniforms:Gn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new Ct(0)}}]),vertexShader:yt.meshtoon_vert,fragmentShader:yt.meshtoon_frag},matcap:{uniforms:Gn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:yt.meshmatcap_vert,fragmentShader:yt.meshmatcap_frag},points:{uniforms:Gn([Be.points,Be.fog]),vertexShader:yt.points_vert,fragmentShader:yt.points_frag},dashed:{uniforms:Gn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:yt.linedashed_vert,fragmentShader:yt.linedashed_frag},depth:{uniforms:Gn([Be.common,Be.displacementmap]),vertexShader:yt.depth_vert,fragmentShader:yt.depth_frag},normal:{uniforms:Gn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:yt.meshnormal_vert,fragmentShader:yt.meshnormal_frag},sprite:{uniforms:Gn([Be.sprite,Be.fog]),vertexShader:yt.sprite_vert,fragmentShader:yt.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:yt.background_vert,fragmentShader:yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:yt.backgroundCube_vert,fragmentShader:yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:yt.cube_vert,fragmentShader:yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:yt.equirect_vert,fragmentShader:yt.equirect_frag},distance:{uniforms:Gn([Be.common,Be.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:yt.distance_vert,fragmentShader:yt.distance_frag},shadow:{uniforms:Gn([Be.lights,Be.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:yt.shadow_vert,fragmentShader:yt.shadow_frag}};Xi.physical={uniforms:Gn([Xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag};const Ac={r:0,b:0,g:0},OT=new rn,kv=new vt;kv.set(-1,0,0,0,1,0,0,0,1);function kT(i,e,t,s,a,c){const d=new Ct(0);let h=a===!0?0:1,f,m,v=null,x=0,g=null;function M(b){let w=b.isScene===!0?b.background:null;if(w&&w.isTexture){const N=b.backgroundBlurriness>0;w=e.get(w,N)}return w}function E(b){let w=!1;const N=M(b);N===null?y(d,h):N&&N.isColor&&(y(N,1),w=!0);const I=i.xr.getEnvironmentBlendMode();I==="additive"?t.buffers.color.setClear(0,0,0,1,c):I==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,c),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function A(b,w){const N=M(w);N&&(N.isCubeTexture||N.mapping===ou)?(m===void 0&&(m=new Fi(new ka(1,1,1),new Qi({name:"BackgroundCubeMaterial",uniforms:Ia(Xi.backgroundCube.uniforms),vertexShader:Xi.backgroundCube.vertexShader,fragmentShader:Xi.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(I,L,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),m.material.uniforms.envMap.value=N,m.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(OT.makeRotationFromEuler(w.backgroundRotation)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(kv),m.material.toneMapped=Rt.getTransfer(N.colorSpace)!==kt,(v!==N||x!==N.version||g!==i.toneMapping)&&(m.material.needsUpdate=!0,v=N,x=N.version,g=i.toneMapping),m.layers.enableAll(),b.unshift(m,m.geometry,m.material,0,0,null)):N&&N.isTexture&&(f===void 0&&(f=new Fi(new Zo(2,2),new Qi({name:"BackgroundMaterial",uniforms:Ia(Xi.background.uniforms),vertexShader:Xi.background.vertexShader,fragmentShader:Xi.background.fragmentShader,side:is,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(f)),f.material.uniforms.t2D.value=N,f.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,f.material.toneMapped=Rt.getTransfer(N.colorSpace)!==kt,N.matrixAutoUpdate===!0&&N.updateMatrix(),f.material.uniforms.uvTransform.value.copy(N.matrix),(v!==N||x!==N.version||g!==i.toneMapping)&&(f.material.needsUpdate=!0,v=N,x=N.version,g=i.toneMapping),f.layers.enableAll(),b.unshift(f,f.geometry,f.material,0,0,null))}function y(b,w){b.getRGB(Ac,Iv(i)),t.buffers.color.setClear(Ac.r,Ac.g,Ac.b,w,c)}function S(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return d},setClearColor:function(b,w=1){d.set(b),h=w,y(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(b){h=b,y(d,h)},render:E,addToRenderList:A,dispose:S}}function jT(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),s={},a=g(null);let c=a,d=!1;function h(G,J,H,Q,X){let O=!1;const V=x(G,Q,H,J);c!==V&&(c=V,m(c.object)),O=M(G,Q,H,X),O&&E(G,Q,H,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(O||d)&&(d=!1,N(G,J,H,Q),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function f(){return i.createVertexArray()}function m(G){return i.bindVertexArray(G)}function v(G){return i.deleteVertexArray(G)}function x(G,J,H,Q){const X=Q.wireframe===!0;let O=s[J.id];O===void 0&&(O={},s[J.id]=O);const V=G.isInstancedMesh===!0?G.id:0;let $=O[V];$===void 0&&($={},O[V]=$);let ue=$[H.id];ue===void 0&&(ue={},$[H.id]=ue);let se=ue[X];return se===void 0&&(se=g(f()),ue[X]=se),se}function g(G){const J=[],H=[],Q=[];for(let X=0;X<t;X++)J[X]=0,H[X]=0,Q[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:H,attributeDivisors:Q,object:G,attributes:{},index:null}}function M(G,J,H,Q){const X=c.attributes,O=J.attributes;let V=0;const $=H.getAttributes();for(const ue in $)if($[ue].location>=0){const B=X[ue];let re=O[ue];if(re===void 0&&(ue==="instanceMatrix"&&G.instanceMatrix&&(re=G.instanceMatrix),ue==="instanceColor"&&G.instanceColor&&(re=G.instanceColor)),B===void 0||B.attribute!==re||re&&B.data!==re.data)return!0;V++}return c.attributesNum!==V||c.index!==Q}function E(G,J,H,Q){const X={},O=J.attributes;let V=0;const $=H.getAttributes();for(const ue in $)if($[ue].location>=0){let B=O[ue];B===void 0&&(ue==="instanceMatrix"&&G.instanceMatrix&&(B=G.instanceMatrix),ue==="instanceColor"&&G.instanceColor&&(B=G.instanceColor));const re={};re.attribute=B,B&&B.data&&(re.data=B.data),X[ue]=re,V++}c.attributes=X,c.attributesNum=V,c.index=Q}function A(){const G=c.newAttributes;for(let J=0,H=G.length;J<H;J++)G[J]=0}function y(G){S(G,0)}function S(G,J){const H=c.newAttributes,Q=c.enabledAttributes,X=c.attributeDivisors;H[G]=1,Q[G]===0&&(i.enableVertexAttribArray(G),Q[G]=1),X[G]!==J&&(i.vertexAttribDivisor(G,J),X[G]=J)}function b(){const G=c.newAttributes,J=c.enabledAttributes;for(let H=0,Q=J.length;H<Q;H++)J[H]!==G[H]&&(i.disableVertexAttribArray(H),J[H]=0)}function w(G,J,H,Q,X,O,V){V===!0?i.vertexAttribIPointer(G,J,H,X,O):i.vertexAttribPointer(G,J,H,Q,X,O)}function N(G,J,H,Q){A();const X=Q.attributes,O=H.getAttributes(),V=J.defaultAttributeValues;for(const $ in O){const ue=O[$];if(ue.location>=0){let se=X[$];if(se===void 0&&($==="instanceMatrix"&&G.instanceMatrix&&(se=G.instanceMatrix),$==="instanceColor"&&G.instanceColor&&(se=G.instanceColor)),se!==void 0){const B=se.normalized,re=se.itemSize,Oe=e.get(se);if(Oe===void 0)continue;const Te=Oe.buffer,Re=Oe.type,W=Oe.bytesPerElement,me=Re===i.INT||Re===i.UNSIGNED_INT||se.gpuType===pp;if(se.isInterleavedBufferAttribute){const fe=se.data,xe=fe.stride,Ce=se.offset;if(fe.isInstancedInterleavedBuffer){for(let He=0;He<ue.locationSize;He++)S(ue.location+He,fe.meshPerAttribute);G.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let He=0;He<ue.locationSize;He++)y(ue.location+He);i.bindBuffer(i.ARRAY_BUFFER,Te);for(let He=0;He<ue.locationSize;He++)w(ue.location+He,re/ue.locationSize,Re,B,xe*W,(Ce+re/ue.locationSize*He)*W,me)}else{if(se.isInstancedBufferAttribute){for(let fe=0;fe<ue.locationSize;fe++)S(ue.location+fe,se.meshPerAttribute);G.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let fe=0;fe<ue.locationSize;fe++)y(ue.location+fe);i.bindBuffer(i.ARRAY_BUFFER,Te);for(let fe=0;fe<ue.locationSize;fe++)w(ue.location+fe,re/ue.locationSize,Re,B,re*W,re/ue.locationSize*fe*W,me)}}else if(V!==void 0){const B=V[$];if(B!==void 0)switch(B.length){case 2:i.vertexAttrib2fv(ue.location,B);break;case 3:i.vertexAttrib3fv(ue.location,B);break;case 4:i.vertexAttrib4fv(ue.location,B);break;default:i.vertexAttrib1fv(ue.location,B)}}}}b()}function I(){U();for(const G in s){const J=s[G];for(const H in J){const Q=J[H];for(const X in Q){const O=Q[X];for(const V in O)v(O[V].object),delete O[V];delete Q[X]}}delete s[G]}}function L(G){if(s[G.id]===void 0)return;const J=s[G.id];for(const H in J){const Q=J[H];for(const X in Q){const O=Q[X];for(const V in O)v(O[V].object),delete O[V];delete Q[X]}}delete s[G.id]}function k(G){for(const J in s){const H=s[J];for(const Q in H){const X=H[Q];if(X[G.id]===void 0)continue;const O=X[G.id];for(const V in O)v(O[V].object),delete O[V];delete X[G.id]}}}function T(G){for(const J in s){const H=s[J],Q=G.isInstancedMesh===!0?G.id:0,X=H[Q];if(X!==void 0){for(const O in X){const V=X[O];for(const $ in V)v(V[$].object),delete V[$];delete X[O]}delete H[Q],Object.keys(H).length===0&&delete s[J]}}}function U(){Y(),d=!0,c!==a&&(c=a,m(c.object))}function Y(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:h,reset:U,resetDefaultState:Y,dispose:I,releaseStatesOfGeometry:L,releaseStatesOfObject:T,releaseStatesOfProgram:k,initAttributes:A,enableAttribute:y,disableUnusedAttributes:b}}function BT(i,e,t){let s;function a(f){s=f}function c(f,m){i.drawArrays(s,f,m),t.update(m,s,1)}function d(f,m,v){v!==0&&(i.drawArraysInstanced(s,f,m,v),t.update(m,s,v))}function h(f,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,f,0,m,0,v);let g=0;for(let M=0;M<v;M++)g+=m[M];t.update(g,s,1)}this.setMode=a,this.render=c,this.renderInstances=d,this.renderMultiDraw=h}function zT(i,e,t,s){let a;function c(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");a=i.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function d(k){return!(k!==Di&&s.convert(k)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(k){const T=k===Er&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==li&&s.convert(k)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==qi&&!T)}function f(k){if(k==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const v=f(m);v!==m&&(ut("WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const x=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),S=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),N=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=i.getParameter(i.MAX_SAMPLES),L=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:f,textureFormatReadable:d,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:N,maxSamples:I,samples:L}}function HT(i){const e=this;let t=null,s=0,a=!1,c=!1;const d=new Qr,h=new vt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const M=x.length!==0||g||s!==0||a;return a=g,s=x.length,M},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,g){t=v(x,g,0)},this.setState=function(x,g,M){const E=x.clippingPlanes,A=x.clipIntersection,y=x.clipShadows,S=i.get(x);if(!a||E===null||E.length===0||c&&!y)c?v(null):m();else{const b=c?0:s,w=b*4;let N=S.clippingState||null;f.value=N,N=v(E,g,w,M);for(let I=0;I!==w;++I)N[I]=t[I];S.clippingState=N,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=b}};function m(){f.value!==t&&(f.value=t,f.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(x,g,M,E){const A=x!==null?x.length:0;let y=null;if(A!==0){if(y=f.value,E!==!0||y===null){const S=M+A*4,b=g.matrixWorldInverse;h.getNormalMatrix(b),(y===null||y.length<S)&&(y=new Float32Array(S));for(let w=0,N=M;w!==A;++w,N+=4)d.copy(x[w]).applyMatrix4(b,h),d.normal.toArray(y,N),y[N+3]=d.constant}f.value=y,f.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,y}}const ts=4,s0=[.125,.215,.35,.446,.526,.582],Cs=20,GT=256,Io=new Rp,a0=new Ct;let Oh=null,kh=0,jh=0,Bh=!1;const VT=new ie;class o0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,s=.1,a=100,c={}){const{size:d=256,position:h=VT}=c;Oh=this._renderer.getRenderTarget(),kh=this._renderer.getActiveCubeFace(),jh=this._renderer.getActiveMipmapLevel(),Bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,s,a,f,h),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=u0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=c0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Oh,kh,jh),this._renderer.xr.enabled=Bh,e.scissorTest=!1,Ea(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ps||e.mapping===Pa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oh=this._renderer.getRenderTarget(),kh=this._renderer.getActiveCubeFace(),jh=this._renderer.getActiveMipmapLevel(),Bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:Er,format:Di,colorSpace:Zc,depthBuffer:!1},a=l0(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=l0(e,t,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=WT(c)),this._blurMaterial=$T(c,e,t),this._ggxMaterial=XT(c,e,t)}return a}_compileMaterial(e){const t=new Fi(new Vn,e);this._renderer.compile(t,Io)}_sceneToCubeUV(e,t,s,a,c){const f=new _i(90,1,t,s),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,M=x.toneMapping;x.getClearColor(a0),x.toneMapping=Ki,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(a),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Fi(new ka,new Rv({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,y=A.material;let S=!1;const b=e.background;b?b.isColor&&(y.color.copy(b),e.background=null,S=!0):(y.color.copy(a0),S=!0);for(let w=0;w<6;w++){const N=w%3;N===0?(f.up.set(0,m[w],0),f.position.set(c.x,c.y,c.z),f.lookAt(c.x+v[w],c.y,c.z)):N===1?(f.up.set(0,0,m[w]),f.position.set(c.x,c.y,c.z),f.lookAt(c.x,c.y+v[w],c.z)):(f.up.set(0,m[w],0),f.position.set(c.x,c.y,c.z),f.lookAt(c.x,c.y,c.z+v[w]));const I=this._cubeSize;Ea(a,N*I,w>2?I:0,I,I),x.setRenderTarget(a),S&&x.render(A,f),x.render(e,f)}x.toneMapping=M,x.autoClear=g,e.background=b}_textureToCubeUV(e,t){const s=this._renderer,a=e.mapping===Ps||e.mapping===Pa;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=u0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=c0());const c=a?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const h=c.uniforms;h.envMap.value=e;const f=this._cubeSize;Ea(t,0,0,3*f,2*f),s.setRenderTarget(t),s.render(d,Io)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let c=1;c<a;c++)this._applyGGXFilter(e,c-1,c);t.autoClear=s}_applyGGXFilter(e,t,s){const a=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const f=d.uniforms,m=s/(this._lodMeshes.length-1),v=t/(this._lodMeshes.length-1),x=Math.sqrt(m*m-v*v),g=0+m*1.25,M=x*g,{_lodMax:E}=this,A=this._sizeLods[s],y=3*A*(s>E-ts?s-E+ts:0),S=4*(this._cubeSize-A);f.envMap.value=e.texture,f.roughness.value=M,f.mipInt.value=E-t,Ea(c,y,S,3*A,2*A),a.setRenderTarget(c),a.render(h,Io),f.envMap.value=c.texture,f.roughness.value=0,f.mipInt.value=E-s,Ea(e,y,S,3*A,2*A),a.setRenderTarget(e),a.render(h,Io)}_blur(e,t,s,a,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,t,s,a,"latitudinal",c),this._halfBlur(d,e,s,s,a,"longitudinal",c)}_halfBlur(e,t,s,a,c,d,h){const f=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Pt("blur direction must be either latitudinal or longitudinal!");const v=3,x=this._lodMeshes[a];x.material=m;const g=m.uniforms,M=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Cs-1),A=c/E,y=isFinite(c)?1+Math.floor(v*A):Cs;y>Cs&&ut(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Cs}`);const S=[];let b=0;for(let k=0;k<Cs;++k){const T=k/A,U=Math.exp(-T*T/2);S.push(U),k===0?b+=U:k<y&&(b+=2*U)}for(let k=0;k<S.length;k++)S[k]=S[k]/b;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=S,g.latitudinal.value=d==="latitudinal",h&&(g.poleAxis.value=h);const{_lodMax:w}=this;g.dTheta.value=E,g.mipInt.value=w-s;const N=this._sizeLods[a],I=3*N*(a>w-ts?a-w+ts:0),L=4*(this._cubeSize-N);Ea(t,I,L,3*N,2*N),f.setRenderTarget(t),f.render(x,Io)}}function WT(i){const e=[],t=[],s=[];let a=i;const c=i-ts+1+s0.length;for(let d=0;d<c;d++){const h=Math.pow(2,a);e.push(h);let f=1/h;d>i-ts?f=s0[d-i+ts-1]:d===0&&(f=0),t.push(f);const m=1/(h-2),v=-m,x=1+m,g=[v,v,x,v,x,x,v,v,x,x,v,x],M=6,E=6,A=3,y=2,S=1,b=new Float32Array(A*E*M),w=new Float32Array(y*E*M),N=new Float32Array(S*E*M);for(let L=0;L<M;L++){const k=L%3*2/3-1,T=L>2?0:-1,U=[k,T,0,k+2/3,T,0,k+2/3,T+1,0,k,T,0,k+2/3,T+1,0,k,T+1,0];b.set(U,A*E*L),w.set(g,y*E*L);const Y=[L,L,L,L,L,L];N.set(Y,S*E*L)}const I=new Vn;I.setAttribute("position",new Ui(b,A)),I.setAttribute("uv",new Ui(w,y)),I.setAttribute("faceIndex",new Ui(N,S)),s.push(new Fi(I,null)),a>ts&&a--}return{lodMeshes:s,sizeLods:e,sigmas:t}}function l0(i,e,t){const s=new Zi(i,e,t);return s.texture.mapping=ou,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Ea(i,e,t,s,a){i.viewport.set(e,t,s,a),i.scissor.set(e,t,s,a)}function XT(i,e,t){return new Qi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:GT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:cu(),fragmentShader:`

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
		`,blending:yr,depthTest:!1,depthWrite:!1})}function $T(i,e,t){const s=new Float32Array(Cs),a=new ie(0,1,0);return new Qi({name:"SphericalGaussianBlur",defines:{n:Cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:cu(),fragmentShader:`

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
		`,blending:yr,depthTest:!1,depthWrite:!1})}function c0(){return new Qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cu(),fragmentShader:`

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
		`,blending:yr,depthTest:!1,depthWrite:!1})}function u0(){return new Qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function cu(){return`

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
	`}class jv extends Zi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},a=[s,s,s,s,s,s];this.texture=new Pv(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new ka(5,5,5),c=new Qi({name:"CubemapFromEquirect",uniforms:Ia(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ti,blending:yr});c.uniforms.tEquirect.value=t;const d=new Fi(a,c),h=t.minFilter;return t.minFilter===As&&(t.minFilter=Un),new Z1(1,10,this).update(e,d),t.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,t=!0,s=!0,a=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(t,s,a);e.setRenderTarget(c)}}function qT(i){let e=new WeakMap,t=new WeakMap,s=null;function a(g,M=!1){return g==null?null:M?d(g):c(g)}function c(g){if(g&&g.isTexture){const M=g.mapping;if(M===lh||M===ch)if(e.has(g)){const E=e.get(g).texture;return h(E,g.mapping)}else{const E=g.image;if(E&&E.height>0){const A=new jv(E.height);return A.fromEquirectangularTexture(i,g),e.set(g,A),g.addEventListener("dispose",m),h(A.texture,g.mapping)}else return null}}return g}function d(g){if(g&&g.isTexture){const M=g.mapping,E=M===lh||M===ch,A=M===Ps||M===Pa;if(E||A){let y=t.get(g);const S=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return s===null&&(s=new o0(i)),y=E?s.fromEquirectangular(g,y):s.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,t.set(g,y),y.texture;if(y!==void 0)return y.texture;{const b=g.image;return E&&b&&b.height>0||A&&b&&f(b)?(s===null&&(s=new o0(i)),y=E?s.fromEquirectangular(g):s.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,t.set(g,y),g.addEventListener("dispose",v),y.texture):null}}}return g}function h(g,M){return M===lh?g.mapping=Ps:M===ch&&(g.mapping=Pa),g}function f(g){let M=0;const E=6;for(let A=0;A<E;A++)g[A]!==void 0&&M++;return M===E}function m(g){const M=g.target;M.removeEventListener("dispose",m);const E=e.get(M);E!==void 0&&(e.delete(M),E.dispose())}function v(g){const M=g.target;M.removeEventListener("dispose",v);const E=t.get(M);E!==void 0&&(t.delete(M),E.dispose())}function x(){e=new WeakMap,t=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:a,dispose:x}}function YT(i){const e={};function t(s){if(e[s]!==void 0)return e[s];const a=i.getExtension(s);return e[s]=a,a}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const a=t(s);return a===null&&Kf("WebGLRenderer: "+s+" extension not supported."),a}}}function KT(i,e,t,s){const a={},c=new WeakMap;function d(x){const g=x.target;g.index!==null&&e.remove(g.index);for(const E in g.attributes)e.remove(g.attributes[E]);g.removeEventListener("dispose",d),delete a[g.id];const M=c.get(g);M&&(e.remove(M),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function h(x,g){return a[g.id]===!0||(g.addEventListener("dispose",d),a[g.id]=!0,t.memory.geometries++),g}function f(x){const g=x.attributes;for(const M in g)e.update(g[M],i.ARRAY_BUFFER)}function m(x){const g=[],M=x.index,E=x.attributes.position;let A=0;if(E===void 0)return;if(M!==null){const b=M.array;A=M.version;for(let w=0,N=b.length;w<N;w+=3){const I=b[w+0],L=b[w+1],k=b[w+2];g.push(I,L,L,k,k,I)}}else{const b=E.array;A=E.version;for(let w=0,N=b.length/3-1;w<N;w+=3){const I=w+0,L=w+1,k=w+2;g.push(I,L,L,k,k,I)}}const y=new(E.count>=65535?Tv:wv)(g,1);y.version=A;const S=c.get(x);S&&e.remove(S),c.set(x,y)}function v(x){const g=c.get(x);if(g){const M=x.index;M!==null&&g.version<M.version&&m(x)}else m(x);return c.get(x)}return{get:h,update:f,getWireframeAttribute:v}}function ZT(i,e,t){let s;function a(x){s=x}let c,d;function h(x){c=x.type,d=x.bytesPerElement}function f(x,g){i.drawElements(s,g,c,x*d),t.update(g,s,1)}function m(x,g,M){M!==0&&(i.drawElementsInstanced(s,g,c,x*d,M),t.update(g,s,M))}function v(x,g,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,c,x,0,M);let A=0;for(let y=0;y<M;y++)A+=g[y];t.update(A,s,1)}this.setMode=a,this.setIndex=h,this.render=f,this.renderInstances=m,this.renderMultiDraw=v}function JT(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,h){switch(t.calls++,d){case i.TRIANGLES:t.triangles+=h*(c/3);break;case i.LINES:t.lines+=h*(c/2);break;case i.LINE_STRIP:t.lines+=h*(c-1);break;case i.LINE_LOOP:t.lines+=h*c;break;case i.POINTS:t.points+=h*c;break;default:Pt("WebGLInfo: Unknown draw mode:",d);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:s}}function QT(i,e,t){const s=new WeakMap,a=new an;function c(d,h,f){const m=d.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=v!==void 0?v.length:0;let g=s.get(h);if(g===void 0||g.count!==x){let Y=function(){T.dispose(),s.delete(h),h.removeEventListener("dispose",Y)};var M=Y;g!==void 0&&g.texture.dispose();const E=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],w=h.morphAttributes.color||[];let N=0;E===!0&&(N=1),A===!0&&(N=2),y===!0&&(N=3);let I=h.attributes.position.count*N,L=1;I>e.maxTextureSize&&(L=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const k=new Float32Array(I*L*4*x),T=new Mv(k,I,L,x);T.type=qi,T.needsUpdate=!0;const U=N*4;for(let G=0;G<x;G++){const J=S[G],H=b[G],Q=w[G],X=I*L*4*G;for(let O=0;O<J.count;O++){const V=O*U;E===!0&&(a.fromBufferAttribute(J,O),k[X+V+0]=a.x,k[X+V+1]=a.y,k[X+V+2]=a.z,k[X+V+3]=0),A===!0&&(a.fromBufferAttribute(H,O),k[X+V+4]=a.x,k[X+V+5]=a.y,k[X+V+6]=a.z,k[X+V+7]=0),y===!0&&(a.fromBufferAttribute(Q,O),k[X+V+8]=a.x,k[X+V+9]=a.y,k[X+V+10]=a.z,k[X+V+11]=Q.itemSize===4?a.w:1)}}g={count:x,texture:T,size:new dt(I,L)},s.set(h,g),h.addEventListener("dispose",Y)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)f.getUniforms().setValue(i,"morphTexture",d.morphTexture,t);else{let E=0;for(let y=0;y<m.length;y++)E+=m[y];const A=h.morphTargetsRelative?1:1-E;f.getUniforms().setValue(i,"morphTargetBaseInfluence",A),f.getUniforms().setValue(i,"morphTargetInfluences",m)}f.getUniforms().setValue(i,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}return{update:c}}function eC(i,e,t,s,a){let c=new WeakMap;function d(m){const v=a.render.frame,x=m.geometry,g=e.get(m,x);if(c.get(g)!==v&&(e.update(g),c.set(g,v)),m.isInstancedMesh&&(m.hasEventListener("dispose",f)===!1&&m.addEventListener("dispose",f),c.get(m)!==v&&(t.update(m.instanceMatrix,i.ARRAY_BUFFER),m.instanceColor!==null&&t.update(m.instanceColor,i.ARRAY_BUFFER),c.set(m,v))),m.isSkinnedMesh){const M=m.skeleton;c.get(M)!==v&&(M.update(),c.set(M,v))}return g}function h(){c=new WeakMap}function f(m){const v=m.target;v.removeEventListener("dispose",f),s.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:d,dispose:h}}const tC={[av]:"LINEAR_TONE_MAPPING",[ov]:"REINHARD_TONE_MAPPING",[lv]:"CINEON_TONE_MAPPING",[cv]:"ACES_FILMIC_TONE_MAPPING",[dv]:"AGX_TONE_MAPPING",[hv]:"NEUTRAL_TONE_MAPPING",[uv]:"CUSTOM_TONE_MAPPING"};function nC(i,e,t,s,a){const c=new Zi(e,t,{type:i,depthBuffer:s,stencilBuffer:a,depthTexture:s?new La(e,t):void 0}),d=new Zi(e,t,{type:Er,depthBuffer:!1,stencilBuffer:!1}),h=new Vn;h.setAttribute("position",new xn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new xn([0,2,0,0,2,0],2));const f=new V1({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),m=new Fi(h,f),v=new Rp(-1,1,1,-1,0,1);let x=null,g=null,M=!1,E,A=null,y=[],S=!1;this.setSize=function(b,w){c.setSize(b,w),d.setSize(b,w);for(let N=0;N<y.length;N++){const I=y[N];I.setSize&&I.setSize(b,w)}},this.setEffects=function(b){y=b,S=y.length>0&&y[0].isRenderPass===!0;const w=c.width,N=c.height;for(let I=0;I<y.length;I++){const L=y[I];L.setSize&&L.setSize(w,N)}},this.begin=function(b,w){if(M||b.toneMapping===Ki&&y.length===0)return!1;if(A=w,w!==null){const N=w.width,I=w.height;(c.width!==N||c.height!==I)&&this.setSize(N,I)}return S===!1&&b.setRenderTarget(c),E=b.toneMapping,b.toneMapping=Ki,!0},this.hasRenderPass=function(){return S},this.end=function(b,w){b.toneMapping=E,M=!0;let N=c,I=d;for(let L=0;L<y.length;L++){const k=y[L];if(k.enabled!==!1&&(k.render(b,I,N,w),k.needsSwap!==!1)){const T=N;N=I,I=T}}if(x!==b.outputColorSpace||g!==b.toneMapping){x=b.outputColorSpace,g=b.toneMapping,f.defines={},Rt.getTransfer(x)===kt&&(f.defines.SRGB_TRANSFER="");const L=tC[g];L&&(f.defines[L]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=N.texture,b.setRenderTarget(A),b.render(m,v),A=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),d.dispose(),h.dispose(),f.dispose()}}const Bv=new Fn,Jf=new La(1,1),zv=new Mv,Hv=new x1,Gv=new Pv,d0=[],h0=[],f0=new Float32Array(16),p0=new Float32Array(9),m0=new Float32Array(4);function ja(i,e,t){const s=i[0];if(s<=0||s>0)return i;const a=e*t;let c=d0[a];if(c===void 0&&(c=new Float32Array(a),d0[a]=c),e!==0){s.toArray(c,0);for(let d=1,h=0;d!==e;++d)h+=t,i[d].toArray(c,h)}return c}function vn(i,e){if(i.length!==e.length)return!1;for(let t=0,s=i.length;t<s;t++)if(i[t]!==e[t])return!1;return!0}function _n(i,e){for(let t=0,s=e.length;t<s;t++)i[t]=e[t]}function uu(i,e){let t=h0[e];t===void 0&&(t=new Int32Array(e),h0[e]=t);for(let s=0;s!==e;++s)t[s]=i.allocateTextureUnit();return t}function iC(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function rC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;i.uniform2fv(this.addr,e),_n(t,e)}}function sC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vn(t,e))return;i.uniform3fv(this.addr,e),_n(t,e)}}function aC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;i.uniform4fv(this.addr,e),_n(t,e)}}function oC(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(vn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),_n(t,e)}else{if(vn(t,s))return;m0.set(s),i.uniformMatrix2fv(this.addr,!1,m0),_n(t,s)}}function lC(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(vn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),_n(t,e)}else{if(vn(t,s))return;p0.set(s),i.uniformMatrix3fv(this.addr,!1,p0),_n(t,s)}}function cC(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(vn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),_n(t,e)}else{if(vn(t,s))return;f0.set(s),i.uniformMatrix4fv(this.addr,!1,f0),_n(t,s)}}function uC(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function dC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;i.uniform2iv(this.addr,e),_n(t,e)}}function hC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;i.uniform3iv(this.addr,e),_n(t,e)}}function fC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;i.uniform4iv(this.addr,e),_n(t,e)}}function pC(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function mC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;i.uniform2uiv(this.addr,e),_n(t,e)}}function gC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;i.uniform3uiv(this.addr,e),_n(t,e)}}function xC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;i.uniform4uiv(this.addr,e),_n(t,e)}}function vC(i,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(i.uniform1i(this.addr,a),s[0]=a);let c;this.type===i.SAMPLER_2D_SHADOW?(Jf.compareFunction=t.isReversedDepthBuffer()?Sp:yp,c=Jf):c=Bv,t.setTexture2D(e||c,a)}function _C(i,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(i.uniform1i(this.addr,a),s[0]=a),t.setTexture3D(e||Hv,a)}function yC(i,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(i.uniform1i(this.addr,a),s[0]=a),t.setTextureCube(e||Gv,a)}function SC(i,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(i.uniform1i(this.addr,a),s[0]=a),t.setTexture2DArray(e||zv,a)}function MC(i){switch(i){case 5126:return iC;case 35664:return rC;case 35665:return sC;case 35666:return aC;case 35674:return oC;case 35675:return lC;case 35676:return cC;case 5124:case 35670:return uC;case 35667:case 35671:return dC;case 35668:case 35672:return hC;case 35669:case 35673:return fC;case 5125:return pC;case 36294:return mC;case 36295:return gC;case 36296:return xC;case 35678:case 36198:case 36298:case 36306:case 35682:return vC;case 35679:case 36299:case 36307:return _C;case 35680:case 36300:case 36308:case 36293:return yC;case 36289:case 36303:case 36311:case 36292:return SC}}function EC(i,e){i.uniform1fv(this.addr,e)}function bC(i,e){const t=ja(e,this.size,2);i.uniform2fv(this.addr,t)}function wC(i,e){const t=ja(e,this.size,3);i.uniform3fv(this.addr,t)}function TC(i,e){const t=ja(e,this.size,4);i.uniform4fv(this.addr,t)}function CC(i,e){const t=ja(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function AC(i,e){const t=ja(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function RC(i,e){const t=ja(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function NC(i,e){i.uniform1iv(this.addr,e)}function PC(i,e){i.uniform2iv(this.addr,e)}function LC(i,e){i.uniform3iv(this.addr,e)}function IC(i,e){i.uniform4iv(this.addr,e)}function DC(i,e){i.uniform1uiv(this.addr,e)}function UC(i,e){i.uniform2uiv(this.addr,e)}function FC(i,e){i.uniform3uiv(this.addr,e)}function OC(i,e){i.uniform4uiv(this.addr,e)}function kC(i,e,t){const s=this.cache,a=e.length,c=uu(t,a);vn(s,c)||(i.uniform1iv(this.addr,c),_n(s,c));let d;this.type===i.SAMPLER_2D_SHADOW?d=Jf:d=Bv;for(let h=0;h!==a;++h)t.setTexture2D(e[h]||d,c[h])}function jC(i,e,t){const s=this.cache,a=e.length,c=uu(t,a);vn(s,c)||(i.uniform1iv(this.addr,c),_n(s,c));for(let d=0;d!==a;++d)t.setTexture3D(e[d]||Hv,c[d])}function BC(i,e,t){const s=this.cache,a=e.length,c=uu(t,a);vn(s,c)||(i.uniform1iv(this.addr,c),_n(s,c));for(let d=0;d!==a;++d)t.setTextureCube(e[d]||Gv,c[d])}function zC(i,e,t){const s=this.cache,a=e.length,c=uu(t,a);vn(s,c)||(i.uniform1iv(this.addr,c),_n(s,c));for(let d=0;d!==a;++d)t.setTexture2DArray(e[d]||zv,c[d])}function HC(i){switch(i){case 5126:return EC;case 35664:return bC;case 35665:return wC;case 35666:return TC;case 35674:return CC;case 35675:return AC;case 35676:return RC;case 5124:case 35670:return NC;case 35667:case 35671:return PC;case 35668:case 35672:return LC;case 35669:case 35673:return IC;case 5125:return DC;case 36294:return UC;case 36295:return FC;case 36296:return OC;case 35678:case 36198:case 36298:case 36306:case 35682:return kC;case 35679:case 36299:case 36307:return jC;case 35680:case 36300:case 36308:case 36293:return BC;case 36289:case 36303:case 36311:case 36292:return zC}}class GC{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=MC(t.type)}}class VC{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=HC(t.type)}}class WC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const a=this.seq;for(let c=0,d=a.length;c!==d;++c){const h=a[c];h.setValue(e,t[h.id],s)}}}const zh=/(\w+)(\])?(\[|\.)?/g;function g0(i,e){i.seq.push(e),i.map[e.id]=e}function XC(i,e,t){const s=i.name,a=s.length;for(zh.lastIndex=0;;){const c=zh.exec(s),d=zh.lastIndex;let h=c[1];const f=c[2]==="]",m=c[3];if(f&&(h=h|0),m===void 0||m==="["&&d+2===a){g0(t,m===void 0?new GC(h,i,e):new VC(h,i,e));break}else{let x=t.map[h];x===void 0&&(x=new WC(h),g0(t,x)),t=x}}}class Xc{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const h=e.getActiveUniform(t,d),f=e.getUniformLocation(t,h.name);XC(h,f,this)}const a=[],c=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(d):c.push(d);a.length>0&&(this.seq=a.concat(c))}setValue(e,t,s,a){const c=this.map[t];c!==void 0&&c.setValue(e,s,a)}setOptional(e,t,s){const a=t[s];a!==void 0&&this.setValue(e,s,a)}static upload(e,t,s,a){for(let c=0,d=t.length;c!==d;++c){const h=t[c],f=s[h.id];f.needsUpdate!==!1&&h.setValue(e,f.value,a)}}static seqWithValue(e,t){const s=[];for(let a=0,c=e.length;a!==c;++a){const d=e[a];d.id in t&&s.push(d)}return s}}function x0(i,e,t){const s=i.createShader(e);return i.shaderSource(s,t),i.compileShader(s),s}const $C=37297;let qC=0;function YC(i,e){const t=i.split(`
`),s=[],a=Math.max(e-6,0),c=Math.min(e+6,t.length);for(let d=a;d<c;d++){const h=d+1;s.push(`${h===e?">":" "} ${h}: ${t[d]}`)}return s.join(`
`)}const v0=new vt;function KC(i){Rt._getMatrix(v0,Rt.workingColorSpace,i);const e=`mat3( ${v0.elements.map(t=>t.toFixed(4))} )`;switch(Rt.getTransfer(i)){case Jc:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return ut("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function _0(i,e,t){const s=i.getShaderParameter(e,i.COMPILE_STATUS),c=(i.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const h=parseInt(d[1]);return t.toUpperCase()+`

`+c+`

`+YC(i.getShaderSource(e),h)}else return c}function ZC(i,e){const t=KC(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const JC={[av]:"Linear",[ov]:"Reinhard",[lv]:"Cineon",[cv]:"ACESFilmic",[dv]:"AgX",[hv]:"Neutral",[uv]:"Custom"};function QC(i,e){const t=JC[e];return t===void 0?(ut("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Rc=new ie;function eA(){Rt.getLuminanceCoefficients(Rc);const i=Rc.x.toFixed(4),e=Rc.y.toFixed(4),t=Rc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tA(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ko).join(`
`)}function nA(i){const e=[];for(const t in i){const s=i[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function iA(i,e){const t={},s=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const c=i.getActiveAttrib(e,a),d=c.name;let h=1;c.type===i.FLOAT_MAT2&&(h=2),c.type===i.FLOAT_MAT3&&(h=3),c.type===i.FLOAT_MAT4&&(h=4),t[d]={type:c.type,location:i.getAttribLocation(e,d),locationSize:h}}return t}function ko(i){return i!==""}function y0(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function S0(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qf(i){return i.replace(rA,aA)}const sA=new Map;function aA(i,e){let t=yt[e];if(t===void 0){const s=sA.get(e);if(s!==void 0)t=yt[s],ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Qf(t)}const oA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function M0(i){return i.replace(oA,lA)}function lA(i,e,t,s){let a="";for(let c=parseInt(e);c<parseInt(t);c++)a+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return a}function E0(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const cA={[Bc]:"SHADOWMAP_TYPE_PCF",[Oo]:"SHADOWMAP_TYPE_VSM"};function uA(i){return cA[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const dA={[Ps]:"ENVMAP_TYPE_CUBE",[Pa]:"ENVMAP_TYPE_CUBE",[ou]:"ENVMAP_TYPE_CUBE_UV"};function hA(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":dA[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const fA={[Pa]:"ENVMAP_MODE_REFRACTION"};function pA(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":fA[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const mA={[sv]:"ENVMAP_BLENDING_MULTIPLY",[YE]:"ENVMAP_BLENDING_MIX",[KE]:"ENVMAP_BLENDING_ADD"};function gA(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":mA[i.combine]||"ENVMAP_BLENDING_NONE"}function xA(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:s,maxMip:t}}function vA(i,e,t,s){const a=i.getContext(),c=t.defines;let d=t.vertexShader,h=t.fragmentShader;const f=uA(t),m=hA(t),v=pA(t),x=gA(t),g=xA(t),M=tA(t),E=nA(c),A=a.createProgram();let y,S,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(ko).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(ko).join(`
`),S.length>0&&(S+=`
`)):(y=[E0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ko).join(`
`),S=[E0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+v:"",t.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ki?"#define TONE_MAPPING":"",t.toneMapping!==Ki?yt.tonemapping_pars_fragment:"",t.toneMapping!==Ki?QC("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",yt.colorspace_pars_fragment,ZC("linearToOutputTexel",t.outputColorSpace),eA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ko).join(`
`)),d=Qf(d),d=y0(d,t),d=S0(d,t),h=Qf(h),h=y0(h,t),h=S0(h,t),d=M0(d),h=M0(h),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",t.glslVersion===Rx?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const w=b+y+d,N=b+S+h,I=x0(a,a.VERTEX_SHADER,w),L=x0(a,a.FRAGMENT_SHADER,N);a.attachShader(A,I),a.attachShader(A,L),t.index0AttributeName!==void 0?a.bindAttribLocation(A,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(A,0,"position"),a.linkProgram(A);function k(G){if(i.debug.checkShaderErrors){const J=a.getProgramInfoLog(A)||"",H=a.getShaderInfoLog(I)||"",Q=a.getShaderInfoLog(L)||"",X=J.trim(),O=H.trim(),V=Q.trim();let $=!0,ue=!0;if(a.getProgramParameter(A,a.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,A,I,L);else{const se=_0(a,I,"vertex"),B=_0(a,L,"fragment");Pt("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(A,a.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+X+`
`+se+`
`+B)}else X!==""?ut("WebGLProgram: Program Info Log:",X):(O===""||V==="")&&(ue=!1);ue&&(G.diagnostics={runnable:$,programLog:X,vertexShader:{log:O,prefix:y},fragmentShader:{log:V,prefix:S}})}a.deleteShader(I),a.deleteShader(L),T=new Xc(a,A),U=iA(a,A)}let T;this.getUniforms=function(){return T===void 0&&k(this),T};let U;this.getAttributes=function(){return U===void 0&&k(this),U};let Y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=a.getProgramParameter(A,$C)),Y},this.destroy=function(){s.releaseStatesOfProgram(this),a.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qC++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=I,this.fragmentShader=L,this}let _A=0;class yA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,a=this._getShaderStage(t),c=this._getShaderStage(s),d=this._getShaderCacheForMaterial(e);return d.has(a)===!1&&(d.add(a),a.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new SA(e),t.set(e,s)),s}}class SA{constructor(e){this.id=_A++,this.code=e,this.usedTimes=0}}function MA(i){return i===Ls||i===Yc||i===Kc}function EA(i,e,t,s,a,c){const d=new Ev,h=new yA,f=new Set,m=[],v=new Map,x=s.logarithmicDepthBuffer;let g=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return f.add(T),T===0?"uv":`uv${T}`}function A(T,U,Y,G,J,H){const Q=G.fog,X=J.geometry,O=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,V=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,$=e.get(T.envMap||O,V),ue=$&&$.mapping===ou?$.image.height:null,se=M[T.type];T.precision!==null&&(g=s.getMaxPrecision(T.precision),g!==T.precision&&ut("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const B=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,re=B!==void 0?B.length:0;let Oe=0;X.morphAttributes.position!==void 0&&(Oe=1),X.morphAttributes.normal!==void 0&&(Oe=2),X.morphAttributes.color!==void 0&&(Oe=3);let Te,Re,W,me;if(se){const ct=Xi[se];Te=ct.vertexShader,Re=ct.fragmentShader}else Te=T.vertexShader,Re=T.fragmentShader,h.update(T),W=h.getVertexShaderID(T),me=h.getFragmentShaderID(T);const fe=i.getRenderTarget(),xe=i.state.buffers.depth.getReversed(),Ce=J.isInstancedMesh===!0,He=J.isBatchedMesh===!0,Et=!!T.map,it=!!T.matcap,Qe=!!$,_t=!!T.aoMap,ht=!!T.lightMap,jt=!!T.bumpMap,Bt=!!T.normalMap,hn=!!T.displacementMap,ee=!!T.emissiveMap,zt=!!T.metalnessMap,pt=!!T.roughnessMap,Dt=T.anisotropy>0,ke=T.clearcoat>0,Vt=T.dispersion>0,D=T.iridescence>0,C=T.sheen>0,ae=T.transmission>0,_e=Dt&&!!T.anisotropyMap,Ee=ke&&!!T.clearcoatMap,Ne=ke&&!!T.clearcoatNormalMap,Ue=ke&&!!T.clearcoatRoughnessMap,ge=D&&!!T.iridescenceMap,ye=D&&!!T.iridescenceThicknessMap,je=C&&!!T.sheenColorMap,F=C&&!!T.sheenRoughnessMap,q=!!T.specularMap,Me=!!T.specularColorMap,$e=!!T.specularIntensityMap,at=ae&&!!T.transmissionMap,ft=ae&&!!T.thicknessMap,Z=!!T.gradientMap,Pe=!!T.alphaMap,ve=T.alphaTest>0,ze=!!T.alphaHash,Le=!!T.extensions;let Se=Ki;T.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Se=i.toneMapping);const We={shaderID:se,shaderType:T.type,shaderName:T.name,vertexShader:Te,fragmentShader:Re,defines:T.defines,customVertexShaderID:W,customFragmentShaderID:me,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:He,batchingColor:He&&J._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&J.instanceColor!==null,instancingMorph:Ce&&J.morphTexture!==null,outputColorSpace:fe===null?i.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Rt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Et,matcap:it,envMap:Qe,envMapMode:Qe&&$.mapping,envMapCubeUVHeight:ue,aoMap:_t,lightMap:ht,bumpMap:jt,normalMap:Bt,displacementMap:hn,emissiveMap:ee,normalMapObjectSpace:Bt&&T.normalMapType===QE,normalMapTangentSpace:Bt&&T.normalMapType===qf,packedNormalMap:Bt&&T.normalMapType===qf&&MA(T.normalMap.format),metalnessMap:zt,roughnessMap:pt,anisotropy:Dt,anisotropyMap:_e,clearcoat:ke,clearcoatMap:Ee,clearcoatNormalMap:Ne,clearcoatRoughnessMap:Ue,dispersion:Vt,iridescence:D,iridescenceMap:ge,iridescenceThicknessMap:ye,sheen:C,sheenColorMap:je,sheenRoughnessMap:F,specularMap:q,specularColorMap:Me,specularIntensityMap:$e,transmission:ae,transmissionMap:at,thicknessMap:ft,gradientMap:Z,opaque:T.transparent===!1&&T.blending===Aa&&T.alphaToCoverage===!1,alphaMap:Pe,alphaTest:ve,alphaHash:ze,combine:T.combine,mapUv:Et&&E(T.map.channel),aoMapUv:_t&&E(T.aoMap.channel),lightMapUv:ht&&E(T.lightMap.channel),bumpMapUv:jt&&E(T.bumpMap.channel),normalMapUv:Bt&&E(T.normalMap.channel),displacementMapUv:hn&&E(T.displacementMap.channel),emissiveMapUv:ee&&E(T.emissiveMap.channel),metalnessMapUv:zt&&E(T.metalnessMap.channel),roughnessMapUv:pt&&E(T.roughnessMap.channel),anisotropyMapUv:_e&&E(T.anisotropyMap.channel),clearcoatMapUv:Ee&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:je&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:F&&E(T.sheenRoughnessMap.channel),specularMapUv:q&&E(T.specularMap.channel),specularColorMapUv:Me&&E(T.specularColorMap.channel),specularIntensityMapUv:$e&&E(T.specularIntensityMap.channel),transmissionMapUv:at&&E(T.transmissionMap.channel),thicknessMapUv:ft&&E(T.thicknessMap.channel),alphaMapUv:Pe&&E(T.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Bt||Dt),vertexNormals:!!X.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!X.attributes.uv&&(Et||Pe),fog:!!Q,useFog:T.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||X.attributes.normal===void 0&&Bt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:xe,skinning:J.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Oe,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&Y.length>0,shadowMapType:i.shadowMap.type,toneMapping:Se,decodeVideoTexture:Et&&T.map.isVideoTexture===!0&&Rt.getTransfer(T.map.colorSpace)===kt,decodeVideoTextureEmissive:ee&&T.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(T.emissiveMap.colorSpace)===kt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===xr,flipSided:T.side===ti,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Le&&T.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&T.extensions.multiDraw===!0||He)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return We.vertexUv1s=f.has(1),We.vertexUv2s=f.has(2),We.vertexUv3s=f.has(3),f.clear(),We}function y(T){const U=[];if(T.shaderID?U.push(T.shaderID):(U.push(T.customVertexShaderID),U.push(T.customFragmentShaderID)),T.defines!==void 0)for(const Y in T.defines)U.push(Y),U.push(T.defines[Y]);return T.isRawShaderMaterial===!1&&(S(U,T),b(U,T),U.push(i.outputColorSpace)),U.push(T.customProgramCacheKey),U.join()}function S(T,U){T.push(U.precision),T.push(U.outputColorSpace),T.push(U.envMapMode),T.push(U.envMapCubeUVHeight),T.push(U.mapUv),T.push(U.alphaMapUv),T.push(U.lightMapUv),T.push(U.aoMapUv),T.push(U.bumpMapUv),T.push(U.normalMapUv),T.push(U.displacementMapUv),T.push(U.emissiveMapUv),T.push(U.metalnessMapUv),T.push(U.roughnessMapUv),T.push(U.anisotropyMapUv),T.push(U.clearcoatMapUv),T.push(U.clearcoatNormalMapUv),T.push(U.clearcoatRoughnessMapUv),T.push(U.iridescenceMapUv),T.push(U.iridescenceThicknessMapUv),T.push(U.sheenColorMapUv),T.push(U.sheenRoughnessMapUv),T.push(U.specularMapUv),T.push(U.specularColorMapUv),T.push(U.specularIntensityMapUv),T.push(U.transmissionMapUv),T.push(U.thicknessMapUv),T.push(U.combine),T.push(U.fogExp2),T.push(U.sizeAttenuation),T.push(U.morphTargetsCount),T.push(U.morphAttributeCount),T.push(U.numDirLights),T.push(U.numPointLights),T.push(U.numSpotLights),T.push(U.numSpotLightMaps),T.push(U.numHemiLights),T.push(U.numRectAreaLights),T.push(U.numDirLightShadows),T.push(U.numPointLightShadows),T.push(U.numSpotLightShadows),T.push(U.numSpotLightShadowsWithMaps),T.push(U.numLightProbes),T.push(U.shadowMapType),T.push(U.toneMapping),T.push(U.numClippingPlanes),T.push(U.numClipIntersection),T.push(U.depthPacking)}function b(T,U){d.disableAll(),U.instancing&&d.enable(0),U.instancingColor&&d.enable(1),U.instancingMorph&&d.enable(2),U.matcap&&d.enable(3),U.envMap&&d.enable(4),U.normalMapObjectSpace&&d.enable(5),U.normalMapTangentSpace&&d.enable(6),U.clearcoat&&d.enable(7),U.iridescence&&d.enable(8),U.alphaTest&&d.enable(9),U.vertexColors&&d.enable(10),U.vertexAlphas&&d.enable(11),U.vertexUv1s&&d.enable(12),U.vertexUv2s&&d.enable(13),U.vertexUv3s&&d.enable(14),U.vertexTangents&&d.enable(15),U.anisotropy&&d.enable(16),U.alphaHash&&d.enable(17),U.batching&&d.enable(18),U.dispersion&&d.enable(19),U.batchingColor&&d.enable(20),U.gradientMap&&d.enable(21),U.packedNormalMap&&d.enable(22),U.vertexNormals&&d.enable(23),T.push(d.mask),d.disableAll(),U.fog&&d.enable(0),U.useFog&&d.enable(1),U.flatShading&&d.enable(2),U.logarithmicDepthBuffer&&d.enable(3),U.reversedDepthBuffer&&d.enable(4),U.skinning&&d.enable(5),U.morphTargets&&d.enable(6),U.morphNormals&&d.enable(7),U.morphColors&&d.enable(8),U.premultipliedAlpha&&d.enable(9),U.shadowMapEnabled&&d.enable(10),U.doubleSided&&d.enable(11),U.flipSided&&d.enable(12),U.useDepthPacking&&d.enable(13),U.dithering&&d.enable(14),U.transmission&&d.enable(15),U.sheen&&d.enable(16),U.opaque&&d.enable(17),U.pointsUvs&&d.enable(18),U.decodeVideoTexture&&d.enable(19),U.decodeVideoTextureEmissive&&d.enable(20),U.alphaToCoverage&&d.enable(21),U.numLightProbeGrids>0&&d.enable(22),T.push(d.mask)}function w(T){const U=M[T.type];let Y;if(U){const G=Xi[U];Y=z1.clone(G.uniforms)}else Y=T.uniforms;return Y}function N(T,U){let Y=v.get(U);return Y!==void 0?++Y.usedTimes:(Y=new vA(i,U,T,a),m.push(Y),v.set(U,Y)),Y}function I(T){if(--T.usedTimes===0){const U=m.indexOf(T);m[U]=m[m.length-1],m.pop(),v.delete(T.cacheKey),T.destroy()}}function L(T){h.remove(T)}function k(){h.dispose()}return{getParameters:A,getProgramCacheKey:y,getUniforms:w,acquireProgram:N,releaseProgram:I,releaseShaderCache:L,programs:m,dispose:k}}function bA(){let i=new WeakMap;function e(d){return i.has(d)}function t(d){let h=i.get(d);return h===void 0&&(h={},i.set(d,h)),h}function s(d){i.delete(d)}function a(d,h,f){i.get(d)[h]=f}function c(){i=new WeakMap}return{has:e,get:t,remove:s,update:a,dispose:c}}function wA(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function b0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function w0(){const i=[];let e=0;const t=[],s=[],a=[];function c(){e=0,t.length=0,s.length=0,a.length=0}function d(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function h(g,M,E,A,y,S){let b=i[e];return b===void 0?(b={id:g.id,object:g,geometry:M,material:E,materialVariant:d(g),groupOrder:A,renderOrder:g.renderOrder,z:y,group:S},i[e]=b):(b.id=g.id,b.object=g,b.geometry=M,b.material=E,b.materialVariant=d(g),b.groupOrder=A,b.renderOrder=g.renderOrder,b.z=y,b.group=S),e++,b}function f(g,M,E,A,y,S){const b=h(g,M,E,A,y,S);E.transmission>0?s.push(b):E.transparent===!0?a.push(b):t.push(b)}function m(g,M,E,A,y,S){const b=h(g,M,E,A,y,S);E.transmission>0?s.unshift(b):E.transparent===!0?a.unshift(b):t.unshift(b)}function v(g,M){t.length>1&&t.sort(g||wA),s.length>1&&s.sort(M||b0),a.length>1&&a.sort(M||b0)}function x(){for(let g=e,M=i.length;g<M;g++){const E=i[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:s,transparent:a,init:c,push:f,unshift:m,finish:x,sort:v}}function TA(){let i=new WeakMap;function e(s,a){const c=i.get(s);let d;return c===void 0?(d=new w0,i.set(s,[d])):a>=c.length?(d=new w0,c.push(d)):d=c[a],d}function t(){i=new WeakMap}return{get:e,dispose:t}}function CA(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ie,color:new Ct};break;case"SpotLight":t={position:new ie,direction:new ie,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ie,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ie,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":t={color:new Ct,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return i[e.id]=t,t}}}function AA(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let RA=0;function NA(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function PA(i){const e=new CA,t=AA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new ie);const a=new ie,c=new rn,d=new rn;function h(m){let v=0,x=0,g=0;for(let U=0;U<9;U++)s.probe[U].set(0,0,0);let M=0,E=0,A=0,y=0,S=0,b=0,w=0,N=0,I=0,L=0,k=0;m.sort(NA);for(let U=0,Y=m.length;U<Y;U++){const G=m[U],J=G.color,H=G.intensity,Q=G.distance;let X=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Ls?X=G.shadow.map.texture:X=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)v+=J.r*H,x+=J.g*H,g+=J.b*H;else if(G.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(G.sh.coefficients[O],H);k++}else if(G.isDirectionalLight){const O=e.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const V=G.shadow,$=t.get(G);$.shadowIntensity=V.intensity,$.shadowBias=V.bias,$.shadowNormalBias=V.normalBias,$.shadowRadius=V.radius,$.shadowMapSize=V.mapSize,s.directionalShadow[M]=$,s.directionalShadowMap[M]=X,s.directionalShadowMatrix[M]=G.shadow.matrix,b++}s.directional[M]=O,M++}else if(G.isSpotLight){const O=e.get(G);O.position.setFromMatrixPosition(G.matrixWorld),O.color.copy(J).multiplyScalar(H),O.distance=Q,O.coneCos=Math.cos(G.angle),O.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),O.decay=G.decay,s.spot[A]=O;const V=G.shadow;if(G.map&&(s.spotLightMap[I]=G.map,I++,V.updateMatrices(G),G.castShadow&&L++),s.spotLightMatrix[A]=V.matrix,G.castShadow){const $=t.get(G);$.shadowIntensity=V.intensity,$.shadowBias=V.bias,$.shadowNormalBias=V.normalBias,$.shadowRadius=V.radius,$.shadowMapSize=V.mapSize,s.spotShadow[A]=$,s.spotShadowMap[A]=X,N++}A++}else if(G.isRectAreaLight){const O=e.get(G);O.color.copy(J).multiplyScalar(H),O.halfWidth.set(G.width*.5,0,0),O.halfHeight.set(0,G.height*.5,0),s.rectArea[y]=O,y++}else if(G.isPointLight){const O=e.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),O.distance=G.distance,O.decay=G.decay,G.castShadow){const V=G.shadow,$=t.get(G);$.shadowIntensity=V.intensity,$.shadowBias=V.bias,$.shadowNormalBias=V.normalBias,$.shadowRadius=V.radius,$.shadowMapSize=V.mapSize,$.shadowCameraNear=V.camera.near,$.shadowCameraFar=V.camera.far,s.pointShadow[E]=$,s.pointShadowMap[E]=X,s.pointShadowMatrix[E]=G.shadow.matrix,w++}s.point[E]=O,E++}else if(G.isHemisphereLight){const O=e.get(G);O.skyColor.copy(G.color).multiplyScalar(H),O.groundColor.copy(G.groundColor).multiplyScalar(H),s.hemi[S]=O,S++}}y>0&&(i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Be.LTC_FLOAT_1,s.rectAreaLTC2=Be.LTC_FLOAT_2):(s.rectAreaLTC1=Be.LTC_HALF_1,s.rectAreaLTC2=Be.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=x,s.ambient[2]=g;const T=s.hash;(T.directionalLength!==M||T.pointLength!==E||T.spotLength!==A||T.rectAreaLength!==y||T.hemiLength!==S||T.numDirectionalShadows!==b||T.numPointShadows!==w||T.numSpotShadows!==N||T.numSpotMaps!==I||T.numLightProbes!==k)&&(s.directional.length=M,s.spot.length=A,s.rectArea.length=y,s.point.length=E,s.hemi.length=S,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=w,s.pointShadowMap.length=w,s.spotShadow.length=N,s.spotShadowMap.length=N,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=w,s.spotLightMatrix.length=N+I-L,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=k,T.directionalLength=M,T.pointLength=E,T.spotLength=A,T.rectAreaLength=y,T.hemiLength=S,T.numDirectionalShadows=b,T.numPointShadows=w,T.numSpotShadows=N,T.numSpotMaps=I,T.numLightProbes=k,s.version=RA++)}function f(m,v){let x=0,g=0,M=0,E=0,A=0;const y=v.matrixWorldInverse;for(let S=0,b=m.length;S<b;S++){const w=m[S];if(w.isDirectionalLight){const N=s.directional[x];N.direction.setFromMatrixPosition(w.matrixWorld),a.setFromMatrixPosition(w.target.matrixWorld),N.direction.sub(a),N.direction.transformDirection(y),x++}else if(w.isSpotLight){const N=s.spot[M];N.position.setFromMatrixPosition(w.matrixWorld),N.position.applyMatrix4(y),N.direction.setFromMatrixPosition(w.matrixWorld),a.setFromMatrixPosition(w.target.matrixWorld),N.direction.sub(a),N.direction.transformDirection(y),M++}else if(w.isRectAreaLight){const N=s.rectArea[E];N.position.setFromMatrixPosition(w.matrixWorld),N.position.applyMatrix4(y),d.identity(),c.copy(w.matrixWorld),c.premultiply(y),d.extractRotation(c),N.halfWidth.set(w.width*.5,0,0),N.halfHeight.set(0,w.height*.5,0),N.halfWidth.applyMatrix4(d),N.halfHeight.applyMatrix4(d),E++}else if(w.isPointLight){const N=s.point[g];N.position.setFromMatrixPosition(w.matrixWorld),N.position.applyMatrix4(y),g++}else if(w.isHemisphereLight){const N=s.hemi[A];N.direction.setFromMatrixPosition(w.matrixWorld),N.direction.transformDirection(y),A++}}}return{setup:h,setupView:f,state:s}}function T0(i){const e=new PA(i),t=[],s=[],a=[];function c(g){x.camera=g,t.length=0,s.length=0,a.length=0}function d(g){t.push(g)}function h(g){s.push(g)}function f(g){a.push(g)}function m(){e.setup(t)}function v(g){e.setupView(t,g)}const x={lightsArray:t,shadowsArray:s,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:x,setupLights:m,setupLightsView:v,pushLight:d,pushShadow:h,pushLightProbeGrid:f}}function LA(i){let e=new WeakMap;function t(a,c=0){const d=e.get(a);let h;return d===void 0?(h=new T0(i),e.set(a,[h])):c>=d.length?(h=new T0(i),d.push(h)):h=d[c],h}function s(){e=new WeakMap}return{get:t,dispose:s}}const IA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DA=`uniform sampler2D shadow_pass;
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
}`,UA=[new ie(1,0,0),new ie(-1,0,0),new ie(0,1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1)],FA=[new ie(0,-1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1),new ie(0,-1,0),new ie(0,-1,0)],C0=new rn,Do=new ie,Hh=new ie;function OA(i,e,t){let s=new wp;const a=new dt,c=new dt,d=new an,h=new W1,f=new X1,m={},v=t.maxTextureSize,x={[is]:ti,[ti]:is,[xr]:xr},g=new Qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:IA,fragmentShader:DA}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const E=new Vn;E.setAttribute("position",new Ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Fi(E,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bc;let S=this.type;this.render=function(L,k,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||L.length===0)return;this.type===rv&&(ut("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Bc);const U=i.getRenderTarget(),Y=i.getActiveCubeFace(),G=i.getActiveMipmapLevel(),J=i.state;J.setBlending(yr),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const H=S!==this.type;H&&k.traverse(function(Q){Q.material&&(Array.isArray(Q.material)?Q.material.forEach(X=>X.needsUpdate=!0):Q.material.needsUpdate=!0)});for(let Q=0,X=L.length;Q<X;Q++){const O=L[Q],V=O.shadow;if(V===void 0){ut("WebGLShadowMap:",O,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;a.copy(V.mapSize);const $=V.getFrameExtents();a.multiply($),c.copy(V.mapSize),(a.x>v||a.y>v)&&(a.x>v&&(c.x=Math.floor(v/$.x),a.x=c.x*$.x,V.mapSize.x=c.x),a.y>v&&(c.y=Math.floor(v/$.y),a.y=c.y*$.y,V.mapSize.y=c.y));const ue=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=ue,V.map===null||H===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Oo){if(O.isPointLight){ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Zi(a.x,a.y,{format:Ls,type:Er,minFilter:Un,magFilter:Un,generateMipmaps:!1}),V.map.texture.name=O.name+".shadowMap",V.map.depthTexture=new La(a.x,a.y,qi),V.map.depthTexture.name=O.name+".shadowMapDepth",V.map.depthTexture.format=br,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Cn,V.map.depthTexture.magFilter=Cn}else O.isPointLight?(V.map=new jv(a.x),V.map.depthTexture=new j1(a.x,Ji)):(V.map=new Zi(a.x,a.y),V.map.depthTexture=new La(a.x,a.y,Ji)),V.map.depthTexture.name=O.name+".shadowMap",V.map.depthTexture.format=br,this.type===Bc?(V.map.depthTexture.compareFunction=ue?Sp:yp,V.map.depthTexture.minFilter=Un,V.map.depthTexture.magFilter=Un):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Cn,V.map.depthTexture.magFilter=Cn);V.camera.updateProjectionMatrix()}const se=V.map.isWebGLCubeRenderTarget?6:1;for(let B=0;B<se;B++){if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,B),i.clear();else{B===0&&(i.setRenderTarget(V.map),i.clear());const re=V.getViewport(B);d.set(c.x*re.x,c.y*re.y,c.x*re.z,c.y*re.w),J.viewport(d)}if(O.isPointLight){const re=V.camera,Oe=V.matrix,Te=O.distance||re.far;Te!==re.far&&(re.far=Te,re.updateProjectionMatrix()),Do.setFromMatrixPosition(O.matrixWorld),re.position.copy(Do),Hh.copy(re.position),Hh.add(UA[B]),re.up.copy(FA[B]),re.lookAt(Hh),re.updateMatrixWorld(),Oe.makeTranslation(-Do.x,-Do.y,-Do.z),C0.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),V._frustum.setFromProjectionMatrix(C0,re.coordinateSystem,re.reversedDepth)}else V.updateMatrices(O);s=V.getFrustum(),N(k,T,V.camera,O,this.type)}V.isPointLightShadow!==!0&&this.type===Oo&&b(V,T),V.needsUpdate=!1}S=this.type,y.needsUpdate=!1,i.setRenderTarget(U,Y,G)};function b(L,k){const T=e.update(A);g.defines.VSM_SAMPLES!==L.blurSamples&&(g.defines.VSM_SAMPLES=L.blurSamples,M.defines.VSM_SAMPLES=L.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Zi(a.x,a.y,{format:Ls,type:Er})),g.uniforms.shadow_pass.value=L.map.depthTexture,g.uniforms.resolution.value=L.mapSize,g.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(k,null,T,g,A,null),M.uniforms.shadow_pass.value=L.mapPass.texture,M.uniforms.resolution.value=L.mapSize,M.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(k,null,T,M,A,null)}function w(L,k,T,U){let Y=null;const G=T.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(G!==void 0)Y=G;else if(Y=T.isPointLight===!0?f:h,i.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const J=Y.uuid,H=k.uuid;let Q=m[J];Q===void 0&&(Q={},m[J]=Q);let X=Q[H];X===void 0&&(X=Y.clone(),Q[H]=X,k.addEventListener("dispose",I)),Y=X}if(Y.visible=k.visible,Y.wireframe=k.wireframe,U===Oo?Y.side=k.shadowSide!==null?k.shadowSide:k.side:Y.side=k.shadowSide!==null?k.shadowSide:x[k.side],Y.alphaMap=k.alphaMap,Y.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,Y.map=k.map,Y.clipShadows=k.clipShadows,Y.clippingPlanes=k.clippingPlanes,Y.clipIntersection=k.clipIntersection,Y.displacementMap=k.displacementMap,Y.displacementScale=k.displacementScale,Y.displacementBias=k.displacementBias,Y.wireframeLinewidth=k.wireframeLinewidth,Y.linewidth=k.linewidth,T.isPointLight===!0&&Y.isMeshDistanceMaterial===!0){const J=i.properties.get(Y);J.light=T}return Y}function N(L,k,T,U,Y){if(L.visible===!1)return;if(L.layers.test(k.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&Y===Oo)&&(!L.frustumCulled||s.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,L.matrixWorld);const H=e.update(L),Q=L.material;if(Array.isArray(Q)){const X=H.groups;for(let O=0,V=X.length;O<V;O++){const $=X[O],ue=Q[$.materialIndex];if(ue&&ue.visible){const se=w(L,ue,U,Y);L.onBeforeShadow(i,L,k,T,H,se,$),i.renderBufferDirect(T,null,H,se,L,$),L.onAfterShadow(i,L,k,T,H,se,$)}}}else if(Q.visible){const X=w(L,Q,U,Y);L.onBeforeShadow(i,L,k,T,H,X,null),i.renderBufferDirect(T,null,H,X,L,null),L.onAfterShadow(i,L,k,T,H,X,null)}}const J=L.children;for(let H=0,Q=J.length;H<Q;H++)N(J[H],k,T,U,Y)}function I(L){L.target.removeEventListener("dispose",I);for(const T in m){const U=m[T],Y=L.target.uuid;Y in U&&(U[Y].dispose(),delete U[Y])}}}function kA(i,e){function t(){let Z=!1;const Pe=new an;let ve=null;const ze=new an(0,0,0,0);return{setMask:function(Le){ve!==Le&&!Z&&(i.colorMask(Le,Le,Le,Le),ve=Le)},setLocked:function(Le){Z=Le},setClear:function(Le,Se,We,ct,rt){rt===!0&&(Le*=ct,Se*=ct,We*=ct),Pe.set(Le,Se,We,ct),ze.equals(Pe)===!1&&(i.clearColor(Le,Se,We,ct),ze.copy(Pe))},reset:function(){Z=!1,ve=null,ze.set(-1,0,0,0)}}}function s(){let Z=!1,Pe=!1,ve=null,ze=null,Le=null;return{setReversed:function(Se){if(Pe!==Se){const We=e.get("EXT_clip_control");Se?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),Pe=Se;const ct=Le;Le=null,this.setClear(ct)}},getReversed:function(){return Pe},setTest:function(Se){Se?fe(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(Se){ve!==Se&&!Z&&(i.depthMask(Se),ve=Se)},setFunc:function(Se){if(Pe&&(Se=c1[Se]),ze!==Se){switch(Se){case cf:i.depthFunc(i.NEVER);break;case uf:i.depthFunc(i.ALWAYS);break;case df:i.depthFunc(i.LESS);break;case Na:i.depthFunc(i.LEQUAL);break;case hf:i.depthFunc(i.EQUAL);break;case ff:i.depthFunc(i.GEQUAL);break;case pf:i.depthFunc(i.GREATER);break;case mf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ze=Se}},setLocked:function(Se){Z=Se},setClear:function(Se){Le!==Se&&(Le=Se,Pe&&(Se=1-Se),i.clearDepth(Se))},reset:function(){Z=!1,ve=null,ze=null,Le=null,Pe=!1}}}function a(){let Z=!1,Pe=null,ve=null,ze=null,Le=null,Se=null,We=null,ct=null,rt=null;return{setTest:function(bt){Z||(bt?fe(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(bt){Pe!==bt&&!Z&&(i.stencilMask(bt),Pe=bt)},setFunc:function(bt,On,ui){(ve!==bt||ze!==On||Le!==ui)&&(i.stencilFunc(bt,On,ui),ve=bt,ze=On,Le=ui)},setOp:function(bt,On,ui){(Se!==bt||We!==On||ct!==ui)&&(i.stencilOp(bt,On,ui),Se=bt,We=On,ct=ui)},setLocked:function(bt){Z=bt},setClear:function(bt){rt!==bt&&(i.clearStencil(bt),rt=bt)},reset:function(){Z=!1,Pe=null,ve=null,ze=null,Le=null,Se=null,We=null,ct=null,rt=null}}}const c=new t,d=new s,h=new a,f=new WeakMap,m=new WeakMap;let v={},x={},g={},M=new WeakMap,E=[],A=null,y=!1,S=null,b=null,w=null,N=null,I=null,L=null,k=null,T=new Ct(0,0,0),U=0,Y=!1,G=null,J=null,H=null,Q=null,X=null;const O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,$=0;const ue=i.getParameter(i.VERSION);ue.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(ue)[1]),V=$>=1):ue.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(ue)[1]),V=$>=2);let se=null,B={};const re=i.getParameter(i.SCISSOR_BOX),Oe=i.getParameter(i.VIEWPORT),Te=new an().fromArray(re),Re=new an().fromArray(Oe);function W(Z,Pe,ve,ze){const Le=new Uint8Array(4),Se=i.createTexture();i.bindTexture(Z,Se),i.texParameteri(Z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let We=0;We<ve;We++)Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?i.texImage3D(Pe,0,i.RGBA,1,1,ze,0,i.RGBA,i.UNSIGNED_BYTE,Le):i.texImage2D(Pe+We,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Le);return Se}const me={};me[i.TEXTURE_2D]=W(i.TEXTURE_2D,i.TEXTURE_2D,1),me[i.TEXTURE_CUBE_MAP]=W(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[i.TEXTURE_2D_ARRAY]=W(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),me[i.TEXTURE_3D]=W(i.TEXTURE_3D,i.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),fe(i.DEPTH_TEST),d.setFunc(Na),jt(!1),Bt(bx),fe(i.CULL_FACE),_t(yr);function fe(Z){v[Z]!==!0&&(i.enable(Z),v[Z]=!0)}function xe(Z){v[Z]!==!1&&(i.disable(Z),v[Z]=!1)}function Ce(Z,Pe){return g[Z]!==Pe?(i.bindFramebuffer(Z,Pe),g[Z]=Pe,Z===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=Pe),Z===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=Pe),!0):!1}function He(Z,Pe){let ve=E,ze=!1;if(Z){ve=M.get(Pe),ve===void 0&&(ve=[],M.set(Pe,ve));const Le=Z.textures;if(ve.length!==Le.length||ve[0]!==i.COLOR_ATTACHMENT0){for(let Se=0,We=Le.length;Se<We;Se++)ve[Se]=i.COLOR_ATTACHMENT0+Se;ve.length=Le.length,ze=!0}}else ve[0]!==i.BACK&&(ve[0]=i.BACK,ze=!0);ze&&i.drawBuffers(ve)}function Et(Z){return A!==Z?(i.useProgram(Z),A=Z,!0):!1}const it={[Ts]:i.FUNC_ADD,[LE]:i.FUNC_SUBTRACT,[IE]:i.FUNC_REVERSE_SUBTRACT};it[DE]=i.MIN,it[UE]=i.MAX;const Qe={[FE]:i.ZERO,[OE]:i.ONE,[kE]:i.SRC_COLOR,[of]:i.SRC_ALPHA,[VE]:i.SRC_ALPHA_SATURATE,[HE]:i.DST_COLOR,[BE]:i.DST_ALPHA,[jE]:i.ONE_MINUS_SRC_COLOR,[lf]:i.ONE_MINUS_SRC_ALPHA,[GE]:i.ONE_MINUS_DST_COLOR,[zE]:i.ONE_MINUS_DST_ALPHA,[WE]:i.CONSTANT_COLOR,[XE]:i.ONE_MINUS_CONSTANT_COLOR,[$E]:i.CONSTANT_ALPHA,[qE]:i.ONE_MINUS_CONSTANT_ALPHA};function _t(Z,Pe,ve,ze,Le,Se,We,ct,rt,bt){if(Z===yr){y===!0&&(xe(i.BLEND),y=!1);return}if(y===!1&&(fe(i.BLEND),y=!0),Z!==PE){if(Z!==S||bt!==Y){if((b!==Ts||I!==Ts)&&(i.blendEquation(i.FUNC_ADD),b=Ts,I=Ts),bt)switch(Z){case Aa:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wx:i.blendFunc(i.ONE,i.ONE);break;case Tx:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cx:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Pt("WebGLState: Invalid blending: ",Z);break}else switch(Z){case Aa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wx:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Tx:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cx:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",Z);break}w=null,N=null,L=null,k=null,T.set(0,0,0),U=0,S=Z,Y=bt}return}Le=Le||Pe,Se=Se||ve,We=We||ze,(Pe!==b||Le!==I)&&(i.blendEquationSeparate(it[Pe],it[Le]),b=Pe,I=Le),(ve!==w||ze!==N||Se!==L||We!==k)&&(i.blendFuncSeparate(Qe[ve],Qe[ze],Qe[Se],Qe[We]),w=ve,N=ze,L=Se,k=We),(ct.equals(T)===!1||rt!==U)&&(i.blendColor(ct.r,ct.g,ct.b,rt),T.copy(ct),U=rt),S=Z,Y=!1}function ht(Z,Pe){Z.side===xr?xe(i.CULL_FACE):fe(i.CULL_FACE);let ve=Z.side===ti;Pe&&(ve=!ve),jt(ve),Z.blending===Aa&&Z.transparent===!1?_t(yr):_t(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),d.setFunc(Z.depthFunc),d.setTest(Z.depthTest),d.setMask(Z.depthWrite),c.setMask(Z.colorWrite);const ze=Z.stencilWrite;h.setTest(ze),ze&&(h.setMask(Z.stencilWriteMask),h.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),h.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),ee(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?fe(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function jt(Z){G!==Z&&(Z?i.frontFace(i.CW):i.frontFace(i.CCW),G=Z)}function Bt(Z){Z!==RE?(fe(i.CULL_FACE),Z!==J&&(Z===bx?i.cullFace(i.BACK):Z===NE?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),J=Z}function hn(Z){Z!==H&&(V&&i.lineWidth(Z),H=Z)}function ee(Z,Pe,ve){Z?(fe(i.POLYGON_OFFSET_FILL),(Q!==Pe||X!==ve)&&(Q=Pe,X=ve,d.getReversed()&&(Pe=-Pe),i.polygonOffset(Pe,ve))):xe(i.POLYGON_OFFSET_FILL)}function zt(Z){Z?fe(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function pt(Z){Z===void 0&&(Z=i.TEXTURE0+O-1),se!==Z&&(i.activeTexture(Z),se=Z)}function Dt(Z,Pe,ve){ve===void 0&&(se===null?ve=i.TEXTURE0+O-1:ve=se);let ze=B[ve];ze===void 0&&(ze={type:void 0,texture:void 0},B[ve]=ze),(ze.type!==Z||ze.texture!==Pe)&&(se!==ve&&(i.activeTexture(ve),se=ve),i.bindTexture(Z,Pe||me[Z]),ze.type=Z,ze.texture=Pe)}function ke(){const Z=B[se];Z!==void 0&&Z.type!==void 0&&(i.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function Vt(){try{i.compressedTexImage2D(...arguments)}catch(Z){Pt("WebGLState:",Z)}}function D(){try{i.compressedTexImage3D(...arguments)}catch(Z){Pt("WebGLState:",Z)}}function C(){try{i.texSubImage2D(...arguments)}catch(Z){Pt("WebGLState:",Z)}}function ae(){try{i.texSubImage3D(...arguments)}catch(Z){Pt("WebGLState:",Z)}}function _e(){try{i.compressedTexSubImage2D(...arguments)}catch(Z){Pt("WebGLState:",Z)}}function Ee(){try{i.compressedTexSubImage3D(...arguments)}catch(Z){Pt("WebGLState:",Z)}}function Ne(){try{i.texStorage2D(...arguments)}catch(Z){Pt("WebGLState:",Z)}}function Ue(){try{i.texStorage3D(...arguments)}catch(Z){Pt("WebGLState:",Z)}}function ge(){try{i.texImage2D(...arguments)}catch(Z){Pt("WebGLState:",Z)}}function ye(){try{i.texImage3D(...arguments)}catch(Z){Pt("WebGLState:",Z)}}function je(Z){return x[Z]!==void 0?x[Z]:i.getParameter(Z)}function F(Z,Pe){x[Z]!==Pe&&(i.pixelStorei(Z,Pe),x[Z]=Pe)}function q(Z){Te.equals(Z)===!1&&(i.scissor(Z.x,Z.y,Z.z,Z.w),Te.copy(Z))}function Me(Z){Re.equals(Z)===!1&&(i.viewport(Z.x,Z.y,Z.z,Z.w),Re.copy(Z))}function $e(Z,Pe){let ve=m.get(Pe);ve===void 0&&(ve=new WeakMap,m.set(Pe,ve));let ze=ve.get(Z);ze===void 0&&(ze=i.getUniformBlockIndex(Pe,Z.name),ve.set(Z,ze))}function at(Z,Pe){const ze=m.get(Pe).get(Z);f.get(Pe)!==ze&&(i.uniformBlockBinding(Pe,ze,Z.__bindingPointIndex),f.set(Pe,ze))}function ft(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),d.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),v={},x={},se=null,B={},g={},M=new WeakMap,E=[],A=null,y=!1,S=null,b=null,w=null,N=null,I=null,L=null,k=null,T=new Ct(0,0,0),U=0,Y=!1,G=null,J=null,H=null,Q=null,X=null,Te.set(0,0,i.canvas.width,i.canvas.height),Re.set(0,0,i.canvas.width,i.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:fe,disable:xe,bindFramebuffer:Ce,drawBuffers:He,useProgram:Et,setBlending:_t,setMaterial:ht,setFlipSided:jt,setCullFace:Bt,setLineWidth:hn,setPolygonOffset:ee,setScissorTest:zt,activeTexture:pt,bindTexture:Dt,unbindTexture:ke,compressedTexImage2D:Vt,compressedTexImage3D:D,texImage2D:ge,texImage3D:ye,pixelStorei:F,getParameter:je,updateUBOMapping:$e,uniformBlockBinding:at,texStorage2D:Ne,texStorage3D:Ue,texSubImage2D:C,texSubImage3D:ae,compressedTexSubImage2D:_e,compressedTexSubImage3D:Ee,scissor:q,viewport:Me,reset:ft}}function jA(i,e,t,s,a,c,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new dt,v=new WeakMap,x=new Set;let g;const M=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(D,C){return E?new OffscreenCanvas(D,C):Qc("canvas")}function y(D,C,ae){let _e=1;const Ee=Vt(D);if((Ee.width>ae||Ee.height>ae)&&(_e=ae/Math.max(Ee.width,Ee.height)),_e<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Ne=Math.floor(_e*Ee.width),Ue=Math.floor(_e*Ee.height);g===void 0&&(g=A(Ne,Ue));const ge=C?A(Ne,Ue):g;return ge.width=Ne,ge.height=Ue,ge.getContext("2d").drawImage(D,0,0,Ne,Ue),ut("WebGLRenderer: Texture has been resized from ("+Ee.width+"x"+Ee.height+") to ("+Ne+"x"+Ue+")."),ge}else return"data"in D&&ut("WebGLRenderer: Image in DataTexture is too big ("+Ee.width+"x"+Ee.height+")."),D;return D}function S(D){return D.generateMipmaps}function b(D){i.generateMipmap(D)}function w(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function N(D,C,ae,_e,Ee,Ne=!1){if(D!==null){if(i[D]!==void 0)return i[D];ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Ue;_e&&(Ue=e.get("EXT_texture_norm16"),Ue||ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ge=C;if(C===i.RED&&(ae===i.FLOAT&&(ge=i.R32F),ae===i.HALF_FLOAT&&(ge=i.R16F),ae===i.UNSIGNED_BYTE&&(ge=i.R8),ae===i.UNSIGNED_SHORT&&Ue&&(ge=Ue.R16_EXT),ae===i.SHORT&&Ue&&(ge=Ue.R16_SNORM_EXT)),C===i.RED_INTEGER&&(ae===i.UNSIGNED_BYTE&&(ge=i.R8UI),ae===i.UNSIGNED_SHORT&&(ge=i.R16UI),ae===i.UNSIGNED_INT&&(ge=i.R32UI),ae===i.BYTE&&(ge=i.R8I),ae===i.SHORT&&(ge=i.R16I),ae===i.INT&&(ge=i.R32I)),C===i.RG&&(ae===i.FLOAT&&(ge=i.RG32F),ae===i.HALF_FLOAT&&(ge=i.RG16F),ae===i.UNSIGNED_BYTE&&(ge=i.RG8),ae===i.UNSIGNED_SHORT&&Ue&&(ge=Ue.RG16_EXT),ae===i.SHORT&&Ue&&(ge=Ue.RG16_SNORM_EXT)),C===i.RG_INTEGER&&(ae===i.UNSIGNED_BYTE&&(ge=i.RG8UI),ae===i.UNSIGNED_SHORT&&(ge=i.RG16UI),ae===i.UNSIGNED_INT&&(ge=i.RG32UI),ae===i.BYTE&&(ge=i.RG8I),ae===i.SHORT&&(ge=i.RG16I),ae===i.INT&&(ge=i.RG32I)),C===i.RGB_INTEGER&&(ae===i.UNSIGNED_BYTE&&(ge=i.RGB8UI),ae===i.UNSIGNED_SHORT&&(ge=i.RGB16UI),ae===i.UNSIGNED_INT&&(ge=i.RGB32UI),ae===i.BYTE&&(ge=i.RGB8I),ae===i.SHORT&&(ge=i.RGB16I),ae===i.INT&&(ge=i.RGB32I)),C===i.RGBA_INTEGER&&(ae===i.UNSIGNED_BYTE&&(ge=i.RGBA8UI),ae===i.UNSIGNED_SHORT&&(ge=i.RGBA16UI),ae===i.UNSIGNED_INT&&(ge=i.RGBA32UI),ae===i.BYTE&&(ge=i.RGBA8I),ae===i.SHORT&&(ge=i.RGBA16I),ae===i.INT&&(ge=i.RGBA32I)),C===i.RGB&&(ae===i.UNSIGNED_SHORT&&Ue&&(ge=Ue.RGB16_EXT),ae===i.SHORT&&Ue&&(ge=Ue.RGB16_SNORM_EXT),ae===i.UNSIGNED_INT_5_9_9_9_REV&&(ge=i.RGB9_E5),ae===i.UNSIGNED_INT_10F_11F_11F_REV&&(ge=i.R11F_G11F_B10F)),C===i.RGBA){const ye=Ne?Jc:Rt.getTransfer(Ee);ae===i.FLOAT&&(ge=i.RGBA32F),ae===i.HALF_FLOAT&&(ge=i.RGBA16F),ae===i.UNSIGNED_BYTE&&(ge=ye===kt?i.SRGB8_ALPHA8:i.RGBA8),ae===i.UNSIGNED_SHORT&&Ue&&(ge=Ue.RGBA16_EXT),ae===i.SHORT&&Ue&&(ge=Ue.RGBA16_SNORM_EXT),ae===i.UNSIGNED_SHORT_4_4_4_4&&(ge=i.RGBA4),ae===i.UNSIGNED_SHORT_5_5_5_1&&(ge=i.RGB5_A1)}return(ge===i.R16F||ge===i.R32F||ge===i.RG16F||ge===i.RG32F||ge===i.RGBA16F||ge===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function I(D,C){let ae;return D?C===null||C===Ji||C===Vo?ae=i.DEPTH24_STENCIL8:C===qi?ae=i.DEPTH32F_STENCIL8:C===Go&&(ae=i.DEPTH24_STENCIL8,ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Ji||C===Vo?ae=i.DEPTH_COMPONENT24:C===qi?ae=i.DEPTH_COMPONENT32F:C===Go&&(ae=i.DEPTH_COMPONENT16),ae}function L(D,C){return S(D)===!0||D.isFramebufferTexture&&D.minFilter!==Cn&&D.minFilter!==Un?Math.log2(Math.max(C.width,C.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?C.mipmaps.length:1}function k(D){const C=D.target;C.removeEventListener("dispose",k),U(C),C.isVideoTexture&&v.delete(C),C.isHTMLTexture&&x.delete(C)}function T(D){const C=D.target;C.removeEventListener("dispose",T),G(C)}function U(D){const C=s.get(D);if(C.__webglInit===void 0)return;const ae=D.source,_e=M.get(ae);if(_e){const Ee=_e[C.__cacheKey];Ee.usedTimes--,Ee.usedTimes===0&&Y(D),Object.keys(_e).length===0&&M.delete(ae)}s.remove(D)}function Y(D){const C=s.get(D);i.deleteTexture(C.__webglTexture);const ae=D.source,_e=M.get(ae);delete _e[C.__cacheKey],d.memory.textures--}function G(D){const C=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(C.__webglFramebuffer[_e]))for(let Ee=0;Ee<C.__webglFramebuffer[_e].length;Ee++)i.deleteFramebuffer(C.__webglFramebuffer[_e][Ee]);else i.deleteFramebuffer(C.__webglFramebuffer[_e]);C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer[_e])}else{if(Array.isArray(C.__webglFramebuffer))for(let _e=0;_e<C.__webglFramebuffer.length;_e++)i.deleteFramebuffer(C.__webglFramebuffer[_e]);else i.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&i.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let _e=0;_e<C.__webglColorRenderbuffer.length;_e++)C.__webglColorRenderbuffer[_e]&&i.deleteRenderbuffer(C.__webglColorRenderbuffer[_e]);C.__webglDepthRenderbuffer&&i.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const ae=D.textures;for(let _e=0,Ee=ae.length;_e<Ee;_e++){const Ne=s.get(ae[_e]);Ne.__webglTexture&&(i.deleteTexture(Ne.__webglTexture),d.memory.textures--),s.remove(ae[_e])}s.remove(D)}let J=0;function H(){J=0}function Q(){return J}function X(D){J=D}function O(){const D=J;return D>=a.maxTextures&&ut("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+a.maxTextures),J+=1,D}function V(D){const C=[];return C.push(D.wrapS),C.push(D.wrapT),C.push(D.wrapR||0),C.push(D.magFilter),C.push(D.minFilter),C.push(D.anisotropy),C.push(D.internalFormat),C.push(D.format),C.push(D.type),C.push(D.generateMipmaps),C.push(D.premultiplyAlpha),C.push(D.flipY),C.push(D.unpackAlignment),C.push(D.colorSpace),C.join()}function $(D,C){const ae=s.get(D);if(D.isVideoTexture&&Dt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&ae.__version!==D.version){const _e=D.image;if(_e===null)ut("WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)ut("WebGLRenderer: Texture marked for update but image is incomplete");else{xe(ae,D,C);return}}else D.isExternalTexture&&(ae.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,ae.__webglTexture,i.TEXTURE0+C)}function ue(D,C){const ae=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&ae.__version!==D.version){xe(ae,D,C);return}else D.isExternalTexture&&(ae.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,ae.__webglTexture,i.TEXTURE0+C)}function se(D,C){const ae=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&ae.__version!==D.version){xe(ae,D,C);return}t.bindTexture(i.TEXTURE_3D,ae.__webglTexture,i.TEXTURE0+C)}function B(D,C){const ae=s.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&ae.__version!==D.version){Ce(ae,D,C);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ae.__webglTexture,i.TEXTURE0+C)}const re={[gf]:i.REPEAT,[vr]:i.CLAMP_TO_EDGE,[xf]:i.MIRRORED_REPEAT},Oe={[Cn]:i.NEAREST,[ZE]:i.NEAREST_MIPMAP_NEAREST,[nc]:i.NEAREST_MIPMAP_LINEAR,[Un]:i.LINEAR,[uh]:i.LINEAR_MIPMAP_NEAREST,[As]:i.LINEAR_MIPMAP_LINEAR},Te={[e1]:i.NEVER,[s1]:i.ALWAYS,[t1]:i.LESS,[yp]:i.LEQUAL,[n1]:i.EQUAL,[Sp]:i.GEQUAL,[i1]:i.GREATER,[r1]:i.NOTEQUAL};function Re(D,C){if(C.type===qi&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===Un||C.magFilter===uh||C.magFilter===nc||C.magFilter===As||C.minFilter===Un||C.minFilter===uh||C.minFilter===nc||C.minFilter===As)&&ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,re[C.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,re[C.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,re[C.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,Oe[C.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,Oe[C.minFilter]),C.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,Te[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Cn||C.minFilter!==nc&&C.minFilter!==As||C.type===qi&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||s.get(C).__currentAnisotropy){const ae=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,a.getMaxAnisotropy())),s.get(C).__currentAnisotropy=C.anisotropy}}}function W(D,C){let ae=!1;D.__webglInit===void 0&&(D.__webglInit=!0,C.addEventListener("dispose",k));const _e=C.source;let Ee=M.get(_e);Ee===void 0&&(Ee={},M.set(_e,Ee));const Ne=V(C);if(Ne!==D.__cacheKey){Ee[Ne]===void 0&&(Ee[Ne]={texture:i.createTexture(),usedTimes:0},d.memory.textures++,ae=!0),Ee[Ne].usedTimes++;const Ue=Ee[D.__cacheKey];Ue!==void 0&&(Ee[D.__cacheKey].usedTimes--,Ue.usedTimes===0&&Y(C)),D.__cacheKey=Ne,D.__webglTexture=Ee[Ne].texture}return ae}function me(D,C,ae){return Math.floor(Math.floor(D/ae)/C)}function fe(D,C,ae,_e){const Ne=D.updateRanges;if(Ne.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,C.width,C.height,ae,_e,C.data);else{Ne.sort((F,q)=>F.start-q.start);let Ue=0;for(let F=1;F<Ne.length;F++){const q=Ne[Ue],Me=Ne[F],$e=q.start+q.count,at=me(Me.start,C.width,4),ft=me(q.start,C.width,4);Me.start<=$e+1&&at===ft&&me(Me.start+Me.count-1,C.width,4)===at?q.count=Math.max(q.count,Me.start+Me.count-q.start):(++Ue,Ne[Ue]=Me)}Ne.length=Ue+1;const ge=t.getParameter(i.UNPACK_ROW_LENGTH),ye=t.getParameter(i.UNPACK_SKIP_PIXELS),je=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,C.width);for(let F=0,q=Ne.length;F<q;F++){const Me=Ne[F],$e=Math.floor(Me.start/4),at=Math.ceil(Me.count/4),ft=$e%C.width,Z=Math.floor($e/C.width),Pe=at,ve=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ft),t.pixelStorei(i.UNPACK_SKIP_ROWS,Z),t.texSubImage2D(i.TEXTURE_2D,0,ft,Z,Pe,ve,ae,_e,C.data)}D.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ge),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ye),t.pixelStorei(i.UNPACK_SKIP_ROWS,je)}}function xe(D,C,ae){let _e=i.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(_e=i.TEXTURE_2D_ARRAY),C.isData3DTexture&&(_e=i.TEXTURE_3D);const Ee=W(D,C),Ne=C.source;t.bindTexture(_e,D.__webglTexture,i.TEXTURE0+ae);const Ue=s.get(Ne);if(Ne.version!==Ue.__version||Ee===!0){if(t.activeTexture(i.TEXTURE0+ae),(typeof ImageBitmap<"u"&&C.image instanceof ImageBitmap)===!1){const ve=Rt.getPrimaries(Rt.workingColorSpace),ze=C.colorSpace===es?null:Rt.getPrimaries(C.colorSpace),Le=C.colorSpace===es||ve===ze?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le)}t.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment);let ye=y(C.image,!1,a.maxTextureSize);ye=ke(C,ye);const je=c.convert(C.format,C.colorSpace),F=c.convert(C.type);let q=N(C.internalFormat,je,F,C.normalized,C.colorSpace,C.isVideoTexture);Re(_e,C);let Me;const $e=C.mipmaps,at=C.isVideoTexture!==!0,ft=Ue.__version===void 0||Ee===!0,Z=Ne.dataReady,Pe=L(C,ye);if(C.isDepthTexture)q=I(C.format===Rs,C.type),ft&&(at?t.texStorage2D(i.TEXTURE_2D,1,q,ye.width,ye.height):t.texImage2D(i.TEXTURE_2D,0,q,ye.width,ye.height,0,je,F,null));else if(C.isDataTexture)if($e.length>0){at&&ft&&t.texStorage2D(i.TEXTURE_2D,Pe,q,$e[0].width,$e[0].height);for(let ve=0,ze=$e.length;ve<ze;ve++)Me=$e[ve],at?Z&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,Me.width,Me.height,je,F,Me.data):t.texImage2D(i.TEXTURE_2D,ve,q,Me.width,Me.height,0,je,F,Me.data);C.generateMipmaps=!1}else at?(ft&&t.texStorage2D(i.TEXTURE_2D,Pe,q,ye.width,ye.height),Z&&fe(C,ye,je,F)):t.texImage2D(i.TEXTURE_2D,0,q,ye.width,ye.height,0,je,F,ye.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){at&&ft&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,q,$e[0].width,$e[0].height,ye.depth);for(let ve=0,ze=$e.length;ve<ze;ve++)if(Me=$e[ve],C.format!==Di)if(je!==null)if(at){if(Z)if(C.layerUpdates.size>0){const Le=r0(Me.width,Me.height,C.format,C.type);for(const Se of C.layerUpdates){const We=Me.data.subarray(Se*Le/Me.data.BYTES_PER_ELEMENT,(Se+1)*Le/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,Se,Me.width,Me.height,1,je,We)}C.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,0,Me.width,Me.height,ye.depth,je,Me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ve,q,Me.width,Me.height,ye.depth,0,Me.data,0,0);else ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?Z&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,0,Me.width,Me.height,ye.depth,je,F,Me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ve,q,Me.width,Me.height,ye.depth,0,je,F,Me.data)}else{at&&ft&&t.texStorage2D(i.TEXTURE_2D,Pe,q,$e[0].width,$e[0].height);for(let ve=0,ze=$e.length;ve<ze;ve++)Me=$e[ve],C.format!==Di?je!==null?at?Z&&t.compressedTexSubImage2D(i.TEXTURE_2D,ve,0,0,Me.width,Me.height,je,Me.data):t.compressedTexImage2D(i.TEXTURE_2D,ve,q,Me.width,Me.height,0,Me.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?Z&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,Me.width,Me.height,je,F,Me.data):t.texImage2D(i.TEXTURE_2D,ve,q,Me.width,Me.height,0,je,F,Me.data)}else if(C.isDataArrayTexture)if(at){if(ft&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,q,ye.width,ye.height,ye.depth),Z)if(C.layerUpdates.size>0){const ve=r0(ye.width,ye.height,C.format,C.type);for(const ze of C.layerUpdates){const Le=ye.data.subarray(ze*ve/ye.data.BYTES_PER_ELEMENT,(ze+1)*ve/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ze,ye.width,ye.height,1,je,F,Le)}C.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,je,F,ye.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,q,ye.width,ye.height,ye.depth,0,je,F,ye.data);else if(C.isData3DTexture)at?(ft&&t.texStorage3D(i.TEXTURE_3D,Pe,q,ye.width,ye.height,ye.depth),Z&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,je,F,ye.data)):t.texImage3D(i.TEXTURE_3D,0,q,ye.width,ye.height,ye.depth,0,je,F,ye.data);else if(C.isFramebufferTexture){if(ft)if(at)t.texStorage2D(i.TEXTURE_2D,Pe,q,ye.width,ye.height);else{let ve=ye.width,ze=ye.height;for(let Le=0;Le<Pe;Le++)t.texImage2D(i.TEXTURE_2D,Le,q,ve,ze,0,je,F,null),ve>>=1,ze>>=1}}else if(C.isHTMLTexture){if("texElementImage2D"in i){const ve=i.canvas;if(ve.hasAttribute("layoutsubtree")||ve.setAttribute("layoutsubtree","true"),ye.parentNode!==ve){ve.appendChild(ye),x.add(C),ve.onpaint=ct=>{const rt=ct.changedElements;for(const bt of x)rt.includes(bt.image)&&(bt.needsUpdate=!0)},ve.requestPaint();return}const ze=0,Le=i.RGBA,Se=i.RGBA,We=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,ze,Le,Se,We,ye),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if($e.length>0){if(at&&ft){const ve=Vt($e[0]);t.texStorage2D(i.TEXTURE_2D,Pe,q,ve.width,ve.height)}for(let ve=0,ze=$e.length;ve<ze;ve++)Me=$e[ve],at?Z&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,je,F,Me):t.texImage2D(i.TEXTURE_2D,ve,q,je,F,Me);C.generateMipmaps=!1}else if(at){if(ft){const ve=Vt(ye);t.texStorage2D(i.TEXTURE_2D,Pe,q,ve.width,ve.height)}Z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,je,F,ye)}else t.texImage2D(i.TEXTURE_2D,0,q,je,F,ye);S(C)&&b(_e),Ue.__version=Ne.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function Ce(D,C,ae){if(C.image.length!==6)return;const _e=W(D,C),Ee=C.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+ae);const Ne=s.get(Ee);if(Ee.version!==Ne.__version||_e===!0){t.activeTexture(i.TEXTURE0+ae);const Ue=Rt.getPrimaries(Rt.workingColorSpace),ge=C.colorSpace===es?null:Rt.getPrimaries(C.colorSpace),ye=C.colorSpace===es||Ue===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const je=C.isCompressedTexture||C.image[0].isCompressedTexture,F=C.image[0]&&C.image[0].isDataTexture,q=[];for(let Se=0;Se<6;Se++)!je&&!F?q[Se]=y(C.image[Se],!0,a.maxCubemapSize):q[Se]=F?C.image[Se].image:C.image[Se],q[Se]=ke(C,q[Se]);const Me=q[0],$e=c.convert(C.format,C.colorSpace),at=c.convert(C.type),ft=N(C.internalFormat,$e,at,C.normalized,C.colorSpace),Z=C.isVideoTexture!==!0,Pe=Ne.__version===void 0||_e===!0,ve=Ee.dataReady;let ze=L(C,Me);Re(i.TEXTURE_CUBE_MAP,C);let Le;if(je){Z&&Pe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ze,ft,Me.width,Me.height);for(let Se=0;Se<6;Se++){Le=q[Se].mipmaps;for(let We=0;We<Le.length;We++){const ct=Le[We];C.format!==Di?$e!==null?Z?ve&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,We,0,0,ct.width,ct.height,$e,ct.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,We,ft,ct.width,ct.height,0,ct.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,We,0,0,ct.width,ct.height,$e,at,ct.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,We,ft,ct.width,ct.height,0,$e,at,ct.data)}}}else{if(Le=C.mipmaps,Z&&Pe){Le.length>0&&ze++;const Se=Vt(q[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ze,ft,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(F){Z?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,q[Se].width,q[Se].height,$e,at,q[Se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ft,q[Se].width,q[Se].height,0,$e,at,q[Se].data);for(let We=0;We<Le.length;We++){const rt=Le[We].image[Se].image;Z?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,We+1,0,0,rt.width,rt.height,$e,at,rt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,We+1,ft,rt.width,rt.height,0,$e,at,rt.data)}}else{Z?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,$e,at,q[Se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ft,$e,at,q[Se]);for(let We=0;We<Le.length;We++){const ct=Le[We];Z?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,We+1,0,0,$e,at,ct.image[Se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,We+1,ft,$e,at,ct.image[Se])}}}S(C)&&b(i.TEXTURE_CUBE_MAP),Ne.__version=Ee.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function He(D,C,ae,_e,Ee,Ne){const Ue=c.convert(ae.format,ae.colorSpace),ge=c.convert(ae.type),ye=N(ae.internalFormat,Ue,ge,ae.normalized,ae.colorSpace),je=s.get(C),F=s.get(ae);if(F.__renderTarget=C,!je.__hasExternalTextures){const q=Math.max(1,C.width>>Ne),Me=Math.max(1,C.height>>Ne);Ee===i.TEXTURE_3D||Ee===i.TEXTURE_2D_ARRAY?t.texImage3D(Ee,Ne,ye,q,Me,C.depth,0,Ue,ge,null):t.texImage2D(Ee,Ne,ye,q,Me,0,Ue,ge,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),pt(C)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_e,Ee,F.__webglTexture,0,zt(C)):(Ee===i.TEXTURE_2D||Ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,_e,Ee,F.__webglTexture,Ne),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Et(D,C,ae){if(i.bindRenderbuffer(i.RENDERBUFFER,D),C.depthBuffer){const _e=C.depthTexture,Ee=_e&&_e.isDepthTexture?_e.type:null,Ne=I(C.stencilBuffer,Ee),Ue=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;pt(C)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,zt(C),Ne,C.width,C.height):ae?i.renderbufferStorageMultisample(i.RENDERBUFFER,zt(C),Ne,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,Ne,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ue,i.RENDERBUFFER,D)}else{const _e=C.textures;for(let Ee=0;Ee<_e.length;Ee++){const Ne=_e[Ee],Ue=c.convert(Ne.format,Ne.colorSpace),ge=c.convert(Ne.type),ye=N(Ne.internalFormat,Ue,ge,Ne.normalized,Ne.colorSpace);pt(C)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,zt(C),ye,C.width,C.height):ae?i.renderbufferStorageMultisample(i.RENDERBUFFER,zt(C),ye,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,ye,C.width,C.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function it(D,C,ae){const _e=C.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Ee=s.get(C.depthTexture);if(Ee.__renderTarget=C,(!Ee.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),_e){if(Ee.__webglInit===void 0&&(Ee.__webglInit=!0,C.depthTexture.addEventListener("dispose",k)),Ee.__webglTexture===void 0){Ee.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Ee.__webglTexture),Re(i.TEXTURE_CUBE_MAP,C.depthTexture);const je=c.convert(C.depthTexture.format),F=c.convert(C.depthTexture.type);let q;C.depthTexture.format===br?q=i.DEPTH_COMPONENT24:C.depthTexture.format===Rs&&(q=i.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,q,C.width,C.height,0,je,F,null)}}else $(C.depthTexture,0);const Ne=Ee.__webglTexture,Ue=zt(C),ge=_e?i.TEXTURE_CUBE_MAP_POSITIVE_X+ae:i.TEXTURE_2D,ye=C.depthTexture.format===Rs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(C.depthTexture.format===br)pt(C)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ye,ge,Ne,0,Ue):i.framebufferTexture2D(i.FRAMEBUFFER,ye,ge,Ne,0);else if(C.depthTexture.format===Rs)pt(C)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ye,ge,Ne,0,Ue):i.framebufferTexture2D(i.FRAMEBUFFER,ye,ge,Ne,0);else throw new Error("Unknown depthTexture format")}function Qe(D){const C=s.get(D),ae=D.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==D.depthTexture){const _e=D.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),_e){const Ee=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,_e.removeEventListener("dispose",Ee)};_e.addEventListener("dispose",Ee),C.__depthDisposeCallback=Ee}C.__boundDepthTexture=_e}if(D.depthTexture&&!C.__autoAllocateDepthBuffer)if(ae)for(let _e=0;_e<6;_e++)it(C.__webglFramebuffer[_e],D,_e);else{const _e=D.texture.mipmaps;_e&&_e.length>0?it(C.__webglFramebuffer[0],D,0):it(C.__webglFramebuffer,D,0)}else if(ae){C.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(t.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer[_e]),C.__webglDepthbuffer[_e]===void 0)C.__webglDepthbuffer[_e]=i.createRenderbuffer(),Et(C.__webglDepthbuffer[_e],D,!1);else{const Ee=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ne=C.__webglDepthbuffer[_e];i.bindRenderbuffer(i.RENDERBUFFER,Ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ee,i.RENDERBUFFER,Ne)}}else{const _e=D.texture.mipmaps;if(_e&&_e.length>0?t.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=i.createRenderbuffer(),Et(C.__webglDepthbuffer,D,!1);else{const Ee=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ne=C.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ee,i.RENDERBUFFER,Ne)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function _t(D,C,ae){const _e=s.get(D);C!==void 0&&He(_e.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ae!==void 0&&Qe(D)}function ht(D){const C=D.texture,ae=s.get(D),_e=s.get(C);D.addEventListener("dispose",T);const Ee=D.textures,Ne=D.isWebGLCubeRenderTarget===!0,Ue=Ee.length>1;if(Ue||(_e.__webglTexture===void 0&&(_e.__webglTexture=i.createTexture()),_e.__version=C.version,d.memory.textures++),Ne){ae.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(C.mipmaps&&C.mipmaps.length>0){ae.__webglFramebuffer[ge]=[];for(let ye=0;ye<C.mipmaps.length;ye++)ae.__webglFramebuffer[ge][ye]=i.createFramebuffer()}else ae.__webglFramebuffer[ge]=i.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){ae.__webglFramebuffer=[];for(let ge=0;ge<C.mipmaps.length;ge++)ae.__webglFramebuffer[ge]=i.createFramebuffer()}else ae.__webglFramebuffer=i.createFramebuffer();if(Ue)for(let ge=0,ye=Ee.length;ge<ye;ge++){const je=s.get(Ee[ge]);je.__webglTexture===void 0&&(je.__webglTexture=i.createTexture(),d.memory.textures++)}if(D.samples>0&&pt(D)===!1){ae.__webglMultisampledFramebuffer=i.createFramebuffer(),ae.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer);for(let ge=0;ge<Ee.length;ge++){const ye=Ee[ge];ae.__webglColorRenderbuffer[ge]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ae.__webglColorRenderbuffer[ge]);const je=c.convert(ye.format,ye.colorSpace),F=c.convert(ye.type),q=N(ye.internalFormat,je,F,ye.normalized,ye.colorSpace,D.isXRRenderTarget===!0),Me=zt(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,q,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,ae.__webglColorRenderbuffer[ge])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(ae.__webglDepthRenderbuffer=i.createRenderbuffer(),Et(ae.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Ne){t.bindTexture(i.TEXTURE_CUBE_MAP,_e.__webglTexture),Re(i.TEXTURE_CUBE_MAP,C);for(let ge=0;ge<6;ge++)if(C.mipmaps&&C.mipmaps.length>0)for(let ye=0;ye<C.mipmaps.length;ye++)He(ae.__webglFramebuffer[ge][ye],D,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ye);else He(ae.__webglFramebuffer[ge],D,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);S(C)&&b(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ue){for(let ge=0,ye=Ee.length;ge<ye;ge++){const je=Ee[ge],F=s.get(je);let q=i.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(q=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(q,F.__webglTexture),Re(q,je),He(ae.__webglFramebuffer,D,je,i.COLOR_ATTACHMENT0+ge,q,0),S(je)&&b(q)}t.unbindTexture()}else{let ge=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ge=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,_e.__webglTexture),Re(ge,C),C.mipmaps&&C.mipmaps.length>0)for(let ye=0;ye<C.mipmaps.length;ye++)He(ae.__webglFramebuffer[ye],D,C,i.COLOR_ATTACHMENT0,ge,ye);else He(ae.__webglFramebuffer,D,C,i.COLOR_ATTACHMENT0,ge,0);S(C)&&b(ge),t.unbindTexture()}D.depthBuffer&&Qe(D)}function jt(D){const C=D.textures;for(let ae=0,_e=C.length;ae<_e;ae++){const Ee=C[ae];if(S(Ee)){const Ne=w(D),Ue=s.get(Ee).__webglTexture;t.bindTexture(Ne,Ue),b(Ne),t.unbindTexture()}}}const Bt=[],hn=[];function ee(D){if(D.samples>0){if(pt(D)===!1){const C=D.textures,ae=D.width,_e=D.height;let Ee=i.COLOR_BUFFER_BIT;const Ne=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ue=s.get(D),ge=C.length>1;if(ge)for(let je=0;je<C.length;je++)t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+je,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+je,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);const ye=D.texture.mipmaps;ye&&ye.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let je=0;je<C.length;je++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(Ee|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(Ee|=i.STENCIL_BUFFER_BIT)),ge){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[je]);const F=s.get(C[je]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,F,0)}i.blitFramebuffer(0,0,ae,_e,0,0,ae,_e,Ee,i.NEAREST),f===!0&&(Bt.length=0,hn.length=0,Bt.push(i.COLOR_ATTACHMENT0+je),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Bt.push(Ne),hn.push(Ne),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,hn)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Bt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ge)for(let je=0;je<C.length;je++){t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+je,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[je]);const F=s.get(C[je]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+je,i.TEXTURE_2D,F,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&f){const C=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[C])}}}function zt(D){return Math.min(a.maxSamples,D.samples)}function pt(D){const C=s.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Dt(D){const C=d.render.frame;v.get(D)!==C&&(v.set(D,C),D.update())}function ke(D,C){const ae=D.colorSpace,_e=D.format,Ee=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||ae!==Zc&&ae!==es&&(Rt.getTransfer(ae)===kt?(_e!==Di||Ee!==li)&&ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",ae)),C}function Vt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(m.width=D.naturalWidth||D.width,m.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(m.width=D.displayWidth,m.height=D.displayHeight):(m.width=D.width,m.height=D.height),m}this.allocateTextureUnit=O,this.resetTextureUnits=H,this.getTextureUnits=Q,this.setTextureUnits=X,this.setTexture2D=$,this.setTexture2DArray=ue,this.setTexture3D=se,this.setTextureCube=B,this.rebindTextures=_t,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=He,this.useMultisampledRTT=pt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function BA(i,e){function t(s,a=es){let c;const d=Rt.getTransfer(a);if(s===li)return i.UNSIGNED_BYTE;if(s===mp)return i.UNSIGNED_SHORT_4_4_4_4;if(s===gp)return i.UNSIGNED_SHORT_5_5_5_1;if(s===gv)return i.UNSIGNED_INT_5_9_9_9_REV;if(s===xv)return i.UNSIGNED_INT_10F_11F_11F_REV;if(s===pv)return i.BYTE;if(s===mv)return i.SHORT;if(s===Go)return i.UNSIGNED_SHORT;if(s===pp)return i.INT;if(s===Ji)return i.UNSIGNED_INT;if(s===qi)return i.FLOAT;if(s===Er)return i.HALF_FLOAT;if(s===vv)return i.ALPHA;if(s===_v)return i.RGB;if(s===Di)return i.RGBA;if(s===br)return i.DEPTH_COMPONENT;if(s===Rs)return i.DEPTH_STENCIL;if(s===yv)return i.RED;if(s===xp)return i.RED_INTEGER;if(s===Ls)return i.RG;if(s===vp)return i.RG_INTEGER;if(s===_p)return i.RGBA_INTEGER;if(s===zc||s===Hc||s===Gc||s===Vc)if(d===kt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===zc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Hc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Gc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Vc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===zc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Hc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Gc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Vc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===vf||s===_f||s===yf||s===Sf)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===vf)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===_f)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===yf)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Sf)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Mf||s===Ef||s===bf||s===wf||s===Tf||s===Yc||s===Cf)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Mf||s===Ef)return d===kt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===bf)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===wf)return c.COMPRESSED_R11_EAC;if(s===Tf)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Yc)return c.COMPRESSED_RG11_EAC;if(s===Cf)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Af||s===Rf||s===Nf||s===Pf||s===Lf||s===If||s===Df||s===Uf||s===Ff||s===Of||s===kf||s===jf||s===Bf||s===zf)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Af)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Rf)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Nf)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Pf)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Lf)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===If)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Df)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Uf)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ff)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Of)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===kf)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===jf)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Bf)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===zf)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Hf||s===Gf||s===Vf)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Hf)return d===kt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Gf)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Vf)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Wf||s===Xf||s===Kc||s===$f)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Wf)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Xf)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Kc)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===$f)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Vo?i.UNSIGNED_INT_24_8:i[s]!==void 0?i[s]:null}return{convert:t}}const zA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,HA=`
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

}`;class GA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const s=new Lv(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new Qi({vertexShader:zA,fragmentShader:HA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Fi(new Zo(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class VA extends as{constructor(e,t){super();const s=this;let a=null,c=1,d=null,h="local-floor",f=1,m=null,v=null,x=null,g=null,M=null,E=null;const A=typeof XRWebGLBinding<"u",y=new GA,S={},b=t.getContextAttributes();let w=null,N=null;const I=[],L=[],k=new dt;let T=null;const U=new _i;U.viewport=new an;const Y=new _i;Y.viewport=new an;const G=[U,Y],J=new J1;let H=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let me=I[W];return me===void 0&&(me=new xh,I[W]=me),me.getTargetRaySpace()},this.getControllerGrip=function(W){let me=I[W];return me===void 0&&(me=new xh,I[W]=me),me.getGripSpace()},this.getHand=function(W){let me=I[W];return me===void 0&&(me=new xh,I[W]=me),me.getHandSpace()};function X(W){const me=L.indexOf(W.inputSource);if(me===-1)return;const fe=I[me];fe!==void 0&&(fe.update(W.inputSource,W.frame,m||d),fe.dispatchEvent({type:W.type,data:W.inputSource}))}function O(){a.removeEventListener("select",X),a.removeEventListener("selectstart",X),a.removeEventListener("selectend",X),a.removeEventListener("squeeze",X),a.removeEventListener("squeezestart",X),a.removeEventListener("squeezeend",X),a.removeEventListener("end",O),a.removeEventListener("inputsourceschange",V);for(let W=0;W<I.length;W++){const me=L[W];me!==null&&(L[W]=null,I[W].disconnect(me))}H=null,Q=null,y.reset();for(const W in S)delete S[W];e.setRenderTarget(w),M=null,g=null,x=null,a=null,N=null,Re.stop(),s.isPresenting=!1,e.setPixelRatio(T),e.setSize(k.width,k.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){c=W,s.isPresenting===!0&&ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){h=W,s.isPresenting===!0&&ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(W){m=W},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return x===null&&A&&(x=new XRWebGLBinding(a,t)),x},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(W){if(a=W,a!==null){if(w=e.getRenderTarget(),a.addEventListener("select",X),a.addEventListener("selectstart",X),a.addEventListener("selectend",X),a.addEventListener("squeeze",X),a.addEventListener("squeezestart",X),a.addEventListener("squeezeend",X),a.addEventListener("end",O),a.addEventListener("inputsourceschange",V),b.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(k),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,xe=null,Ce=null;b.depth&&(Ce=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=b.stencil?Rs:br,xe=b.stencil?Vo:Ji);const He={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:c};x=this.getBinding(),g=x.createProjectionLayer(He),a.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),N=new Zi(g.textureWidth,g.textureHeight,{format:Di,type:li,depthTexture:new La(g.textureWidth,g.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const fe={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(a,t,fe),a.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),N=new Zi(M.framebufferWidth,M.framebufferHeight,{format:Di,type:li,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(f),m=null,d=await a.requestReferenceSpace(h),Re.setContext(a),Re.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function V(W){for(let me=0;me<W.removed.length;me++){const fe=W.removed[me],xe=L.indexOf(fe);xe>=0&&(L[xe]=null,I[xe].disconnect(fe))}for(let me=0;me<W.added.length;me++){const fe=W.added[me];let xe=L.indexOf(fe);if(xe===-1){for(let He=0;He<I.length;He++)if(He>=L.length){L.push(fe),xe=He;break}else if(L[He]===null){L[He]=fe,xe=He;break}if(xe===-1)break}const Ce=I[xe];Ce&&Ce.connect(fe)}}const $=new ie,ue=new ie;function se(W,me,fe){$.setFromMatrixPosition(me.matrixWorld),ue.setFromMatrixPosition(fe.matrixWorld);const xe=$.distanceTo(ue),Ce=me.projectionMatrix.elements,He=fe.projectionMatrix.elements,Et=Ce[14]/(Ce[10]-1),it=Ce[14]/(Ce[10]+1),Qe=(Ce[9]+1)/Ce[5],_t=(Ce[9]-1)/Ce[5],ht=(Ce[8]-1)/Ce[0],jt=(He[8]+1)/He[0],Bt=Et*ht,hn=Et*jt,ee=xe/(-ht+jt),zt=ee*-ht;if(me.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(zt),W.translateZ(ee),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Ce[10]===-1)W.projectionMatrix.copy(me.projectionMatrix),W.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const pt=Et+ee,Dt=it+ee,ke=Bt-zt,Vt=hn+(xe-zt),D=Qe*it/Dt*pt,C=_t*it/Dt*pt;W.projectionMatrix.makePerspective(ke,Vt,D,C,pt,Dt),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function B(W,me){me===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(me.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(a===null)return;let me=W.near,fe=W.far;y.texture!==null&&(y.depthNear>0&&(me=y.depthNear),y.depthFar>0&&(fe=y.depthFar)),J.near=Y.near=U.near=me,J.far=Y.far=U.far=fe,(H!==J.near||Q!==J.far)&&(a.updateRenderState({depthNear:J.near,depthFar:J.far}),H=J.near,Q=J.far),J.layers.mask=W.layers.mask|6,U.layers.mask=J.layers.mask&-5,Y.layers.mask=J.layers.mask&-3;const xe=W.parent,Ce=J.cameras;B(J,xe);for(let He=0;He<Ce.length;He++)B(Ce[He],xe);Ce.length===2?se(J,U,Y):J.projectionMatrix.copy(U.projectionMatrix),re(W,J,xe)};function re(W,me,fe){fe===null?W.matrix.copy(me.matrixWorld):(W.matrix.copy(fe.matrixWorld),W.matrix.invert(),W.matrix.multiply(me.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(me.projectionMatrix),W.projectionMatrixInverse.copy(me.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Zf*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(g===null&&M===null))return f},this.setFoveation=function(W){f=W,g!==null&&(g.fixedFoveation=W),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=W)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(J)},this.getCameraTexture=function(W){return S[W]};let Oe=null;function Te(W,me){if(v=me.getViewerPose(m||d),E=me,v!==null){const fe=v.views;M!==null&&(e.setRenderTargetFramebuffer(N,M.framebuffer),e.setRenderTarget(N));let xe=!1;fe.length!==J.cameras.length&&(J.cameras.length=0,xe=!0);for(let it=0;it<fe.length;it++){const Qe=fe[it];let _t=null;if(M!==null)_t=M.getViewport(Qe);else{const jt=x.getViewSubImage(g,Qe);_t=jt.viewport,it===0&&(e.setRenderTargetTextures(N,jt.colorTexture,jt.depthStencilTexture),e.setRenderTarget(N))}let ht=G[it];ht===void 0&&(ht=new _i,ht.layers.enable(it),ht.viewport=new an,G[it]=ht),ht.matrix.fromArray(Qe.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(Qe.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(_t.x,_t.y,_t.width,_t.height),it===0&&(J.matrix.copy(ht.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),xe===!0&&J.cameras.push(ht)}const Ce=a.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&A){x=s.getBinding();const it=x.getDepthInformation(fe[0]);it&&it.isValid&&it.texture&&y.init(it,a.renderState)}if(Ce&&Ce.includes("camera-access")&&A){e.state.unbindTexture(),x=s.getBinding();for(let it=0;it<fe.length;it++){const Qe=fe[it].camera;if(Qe){let _t=S[Qe];_t||(_t=new Lv,S[Qe]=_t);const ht=x.getCameraImage(Qe);_t.sourceTexture=ht}}}}for(let fe=0;fe<I.length;fe++){const xe=L[fe],Ce=I[fe];xe!==null&&Ce!==void 0&&Ce.update(xe,me,m||d)}Oe&&Oe(W,me),me.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:me}),E=null}const Re=new Ov;Re.setAnimationLoop(Te),this.setAnimationLoop=function(W){Oe=W},this.dispose=function(){}}}const WA=new rn,Vv=new vt;Vv.set(-1,0,0,0,1,0,0,0,1);function XA(i,e){function t(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function s(y,S){S.color.getRGB(y.fogColor.value,Iv(i)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function a(y,S,b,w,N){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?c(y,S):S.isMeshLambertMaterial?(c(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(y,S),x(y,S)):S.isMeshPhongMaterial?(c(y,S),v(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(y,S),g(y,S),S.isMeshPhysicalMaterial&&M(y,S,N)):S.isMeshMatcapMaterial?(c(y,S),E(y,S)):S.isMeshDepthMaterial?c(y,S):S.isMeshDistanceMaterial?(c(y,S),A(y,S)):S.isMeshNormalMaterial?c(y,S):S.isLineBasicMaterial?(d(y,S),S.isLineDashedMaterial&&h(y,S)):S.isPointsMaterial?f(y,S,b,w):S.isSpriteMaterial?m(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,t(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===ti&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,t(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===ti&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,t(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,t(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const b=e.get(S),w=b.envMap,N=b.envMapRotation;w&&(y.envMap.value=w,y.envMapRotation.value.setFromMatrix4(WA.makeRotationFromEuler(N)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(Vv),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,y.aoMapTransform))}function d(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform))}function h(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function f(y,S,b,w){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*b,y.scale.value=w*.5,S.map&&(y.map.value=S.map,t(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function m(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function v(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function x(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function g(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function M(y,S,b){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===ti&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=b.texture,y.transmissionSamplerSize.value.set(b.width,b.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,S){S.matcap&&(y.matcap.value=S.matcap)}function A(y,S){const b=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(b.matrixWorld),y.nearDistance.value=b.shadow.camera.near,y.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:a}}function $A(i,e,t,s){let a={},c={},d=[];const h=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function f(b,w){const N=w.program;s.uniformBlockBinding(b,N)}function m(b,w){let N=a[b.id];N===void 0&&(E(b),N=v(b),a[b.id]=N,b.addEventListener("dispose",y));const I=w.program;s.updateUBOMapping(b,I);const L=e.render.frame;c[b.id]!==L&&(g(b),c[b.id]=L)}function v(b){const w=x();b.__bindingPointIndex=w;const N=i.createBuffer(),I=b.__size,L=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,N),i.bufferData(i.UNIFORM_BUFFER,I,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,N),N}function x(){for(let b=0;b<h;b++)if(d.indexOf(b)===-1)return d.push(b),b;return Pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(b){const w=a[b.id],N=b.uniforms,I=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let L=0,k=N.length;L<k;L++){const T=Array.isArray(N[L])?N[L]:[N[L]];for(let U=0,Y=T.length;U<Y;U++){const G=T[U];if(M(G,L,U,I)===!0){const J=G.__offset,H=Array.isArray(G.value)?G.value:[G.value];let Q=0;for(let X=0;X<H.length;X++){const O=H[X],V=A(O);typeof O=="number"||typeof O=="boolean"?(G.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,J+Q,G.__data)):O.isMatrix3?(G.__data[0]=O.elements[0],G.__data[1]=O.elements[1],G.__data[2]=O.elements[2],G.__data[3]=0,G.__data[4]=O.elements[3],G.__data[5]=O.elements[4],G.__data[6]=O.elements[5],G.__data[7]=0,G.__data[8]=O.elements[6],G.__data[9]=O.elements[7],G.__data[10]=O.elements[8],G.__data[11]=0):ArrayBuffer.isView(O)?G.__data.set(new O.constructor(O.buffer,O.byteOffset,G.__data.length)):(O.toArray(G.__data,Q),Q+=V.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,J,G.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function M(b,w,N,I){const L=b.value,k=w+"_"+N;if(I[k]===void 0)return typeof L=="number"||typeof L=="boolean"?I[k]=L:ArrayBuffer.isView(L)?I[k]=L.slice():I[k]=L.clone(),!0;{const T=I[k];if(typeof L=="number"||typeof L=="boolean"){if(T!==L)return I[k]=L,!0}else{if(ArrayBuffer.isView(L))return!0;if(T.equals(L)===!1)return T.copy(L),!0}}return!1}function E(b){const w=b.uniforms;let N=0;const I=16;for(let k=0,T=w.length;k<T;k++){const U=Array.isArray(w[k])?w[k]:[w[k]];for(let Y=0,G=U.length;Y<G;Y++){const J=U[Y],H=Array.isArray(J.value)?J.value:[J.value];for(let Q=0,X=H.length;Q<X;Q++){const O=H[Q],V=A(O),$=N%I,ue=$%V.boundary,se=$+ue;N+=ue,se!==0&&I-se<V.storage&&(N+=I-se),J.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=N,N+=V.storage}}}const L=N%I;return L>0&&(N+=I-L),b.__size=N,b.__cache={},this}function A(b){const w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(w.boundary=16,w.storage=b.byteLength):ut("WebGLRenderer: Unsupported uniform value type.",b),w}function y(b){const w=b.target;w.removeEventListener("dispose",y);const N=d.indexOf(w.__bindingPointIndex);d.splice(N,1),i.deleteBuffer(a[w.id]),delete a[w.id],delete c[w.id]}function S(){for(const b in a)i.deleteBuffer(a[b]);d=[],a={},c={}}return{bind:f,update:m,dispose:S}}const qA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Wi=null;function YA(){return Wi===null&&(Wi=new I1(qA,16,16,Ls,Er),Wi.name="DFG_LUT",Wi.minFilter=Un,Wi.magFilter=Un,Wi.wrapS=vr,Wi.wrapT=vr,Wi.generateMipmaps=!1,Wi.needsUpdate=!0),Wi}class KA{constructor(e={}){const{canvas:t=o1(),context:s=null,depth:a=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:g=!1,outputBufferType:M=li}=e;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=d;const A=M,y=new Set([_p,vp,xp]),S=new Set([li,Ji,Go,Vo,mp,gp]),b=new Uint32Array(4),w=new Int32Array(4),N=new ie;let I=null,L=null;const k=[],T=[];let U=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Y=this;let G=!1,J=null;this._outputColorSpace=vi;let H=0,Q=0,X=null,O=-1,V=null;const $=new an,ue=new an;let se=null;const B=new Ct(0);let re=0,Oe=t.width,Te=t.height,Re=1,W=null,me=null;const fe=new an(0,0,Oe,Te),xe=new an(0,0,Oe,Te);let Ce=!1;const He=new wp;let Et=!1,it=!1;const Qe=new rn,_t=new ie,ht=new an,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Bt=!1;function hn(){return X===null?Re:1}let ee=s;function zt(P,ne){return t.getContext(P,ne)}try{const P={alpha:!0,depth:a,stencil:c,antialias:h,premultipliedAlpha:f,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fp}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",We,!1),t.addEventListener("webglcontextcreationerror",ct,!1),ee===null){const ne="webgl2";if(ee=zt(ne,P),ee===null)throw zt(ne)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw Pt("WebGLRenderer: "+P.message),P}let pt,Dt,ke,Vt,D,C,ae,_e,Ee,Ne,Ue,ge,ye,je,F,q,Me,$e,at,ft,Z,Pe,ve;function ze(){pt=new YT(ee),pt.init(),Z=new BA(ee,pt),Dt=new zT(ee,pt,e,Z),ke=new kA(ee,pt),Dt.reversedDepthBuffer&&g&&ke.buffers.depth.setReversed(!0),Vt=new JT(ee),D=new bA,C=new jA(ee,pt,ke,D,Dt,Z,Vt),ae=new qT(Y),_e=new nb(ee),Pe=new jT(ee,_e),Ee=new KT(ee,_e,Vt,Pe),Ne=new eC(ee,Ee,_e,Pe,Vt),$e=new QT(ee,Dt,C),F=new HT(D),Ue=new EA(Y,ae,pt,Dt,Pe,F),ge=new XA(Y,D),ye=new TA,je=new LA(pt),Me=new kT(Y,ae,ke,Ne,E,f),q=new OA(Y,Ne,Dt),ve=new $A(ee,Vt,Dt,ke),at=new BT(ee,pt,Vt),ft=new ZT(ee,pt,Vt),Vt.programs=Ue.programs,Y.capabilities=Dt,Y.extensions=pt,Y.properties=D,Y.renderLists=ye,Y.shadowMap=q,Y.state=ke,Y.info=Vt}ze(),A!==li&&(U=new nC(A,t.width,t.height,a,c));const Le=new VA(Y,ee);this.xr=Le,this.getContext=function(){return ee},this.getContextAttributes=function(){return ee.getContextAttributes()},this.forceContextLoss=function(){const P=pt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=pt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return Re},this.setPixelRatio=function(P){P!==void 0&&(Re=P,this.setSize(Oe,Te,!1))},this.getSize=function(P){return P.set(Oe,Te)},this.setSize=function(P,ne,he=!0){if(Le.isPresenting){ut("WebGLRenderer: Can't change size while VR device is presenting.");return}Oe=P,Te=ne,t.width=Math.floor(P*Re),t.height=Math.floor(ne*Re),he===!0&&(t.style.width=P+"px",t.style.height=ne+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,P,ne)},this.getDrawingBufferSize=function(P){return P.set(Oe*Re,Te*Re).floor()},this.setDrawingBufferSize=function(P,ne,he){Oe=P,Te=ne,Re=he,t.width=Math.floor(P*he),t.height=Math.floor(ne*he),this.setViewport(0,0,P,ne)},this.setEffects=function(P){if(A===li){Pt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let ne=0;ne<P.length;ne++)if(P[ne].isOutputPass===!0){ut("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy($)},this.getViewport=function(P){return P.copy(fe)},this.setViewport=function(P,ne,he,ce){P.isVector4?fe.set(P.x,P.y,P.z,P.w):fe.set(P,ne,he,ce),ke.viewport($.copy(fe).multiplyScalar(Re).round())},this.getScissor=function(P){return P.copy(xe)},this.setScissor=function(P,ne,he,ce){P.isVector4?xe.set(P.x,P.y,P.z,P.w):xe.set(P,ne,he,ce),ke.scissor(ue.copy(xe).multiplyScalar(Re).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(P){ke.setScissorTest(Ce=P)},this.setOpaqueSort=function(P){W=P},this.setTransparentSort=function(P){me=P},this.getClearColor=function(P){return P.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor(...arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha(...arguments)},this.clear=function(P=!0,ne=!0,he=!0){let ce=0;if(P){let le=!1;if(X!==null){const Fe=X.texture.format;le=y.has(Fe)}if(le){const Fe=X.texture.type,Xe=S.has(Fe),De=Me.getClearColor(),Ke=Me.getClearAlpha(),tt=De.r,gt=De.g,xt=De.b;Xe?(b[0]=tt,b[1]=gt,b[2]=xt,b[3]=Ke,ee.clearBufferuiv(ee.COLOR,0,b)):(w[0]=tt,w[1]=gt,w[2]=xt,w[3]=Ke,ee.clearBufferiv(ee.COLOR,0,w))}else ce|=ee.COLOR_BUFFER_BIT}ne&&(ce|=ee.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),he&&(ce|=ee.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ce!==0&&ee.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(P){P.setRenderer(this),J=P},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",We,!1),t.removeEventListener("webglcontextcreationerror",ct,!1),Me.dispose(),ye.dispose(),je.dispose(),D.dispose(),ae.dispose(),Ne.dispose(),Pe.dispose(),ve.dispose(),Ue.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",os),Le.removeEventListener("sessionend",Fs),nr.stop()};function Se(P){P.preventDefault(),eu("WebGLRenderer: Context Lost."),G=!0}function We(){eu("WebGLRenderer: Context Restored."),G=!1;const P=Vt.autoReset,ne=q.enabled,he=q.autoUpdate,ce=q.needsUpdate,le=q.type;ze(),Vt.autoReset=P,q.enabled=ne,q.autoUpdate=he,q.needsUpdate=ce,q.type=le}function ct(P){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function rt(P){const ne=P.target;ne.removeEventListener("dispose",rt),bt(ne)}function bt(P){On(P),D.remove(P)}function On(P){const ne=D.get(P).programs;ne!==void 0&&(ne.forEach(function(he){Ue.releaseProgram(he)}),P.isShaderMaterial&&Ue.releaseShaderCache(P))}this.renderBufferDirect=function(P,ne,he,ce,le,Fe){ne===null&&(ne=jt);const Xe=le.isMesh&&le.matrixWorld.determinant()<0,De=el(P,ne,he,ce,le);ke.setMaterial(ce,Xe);let Ke=he.index,tt=1;if(ce.wireframe===!0){if(Ke=Ee.getWireframeAttribute(he),Ke===void 0)return;tt=2}const gt=he.drawRange,xt=he.attributes.position;let Je=gt.start*tt,Nt=(gt.start+gt.count)*tt;Fe!==null&&(Je=Math.max(Je,Fe.start*tt),Nt=Math.min(Nt,(Fe.start+Fe.count)*tt)),Ke!==null?(Je=Math.max(Je,0),Nt=Math.min(Nt,Ke.count)):xt!=null&&(Je=Math.max(Je,0),Nt=Math.min(Nt,xt.count));const Wt=Nt-Je;if(Wt<0||Wt===1/0)return;Pe.setup(le,ce,De,he,Ke);let Zt,Ft=at;if(Ke!==null&&(Zt=_e.get(Ke),Ft=ft,Ft.setIndex(Zt)),le.isMesh)ce.wireframe===!0?(ke.setLineWidth(ce.wireframeLinewidth*hn()),Ft.setMode(ee.LINES)):Ft.setMode(ee.TRIANGLES);else if(le.isLine){let cn=ce.linewidth;cn===void 0&&(cn=1),ke.setLineWidth(cn*hn()),le.isLineSegments?Ft.setMode(ee.LINES):le.isLineLoop?Ft.setMode(ee.LINE_LOOP):Ft.setMode(ee.LINE_STRIP)}else le.isPoints?Ft.setMode(ee.POINTS):le.isSprite&&Ft.setMode(ee.TRIANGLES);if(le.isBatchedMesh)if(pt.get("WEBGL_multi_draw"))Ft.renderMultiDraw(le._multiDrawStarts,le._multiDrawCounts,le._multiDrawCount);else{const cn=le._multiDrawStarts,Ge=le._multiDrawCounts,bn=le._multiDrawCount,St=Ke?_e.get(Ke).bytesPerElement:1,Wn=D.get(ce).currentProgram.getUniforms();for(let Xn=0;Xn<bn;Xn++)Wn.setValue(ee,"_gl_DrawID",Xn),Ft.render(cn[Xn]/St,Ge[Xn])}else if(le.isInstancedMesh)Ft.renderInstances(Je,Wt,le.count);else if(he.isInstancedBufferGeometry){const cn=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,Ge=Math.min(he.instanceCount,cn);Ft.renderInstances(Je,Wt,Ge)}else Ft.render(Je,Wt)};function ui(P,ne,he){P.transparent===!0&&P.side===xr&&P.forceSinglePass===!1?(P.side=ti,P.needsUpdate=!0,Os(P,ne,he),P.side=is,P.needsUpdate=!0,Os(P,ne,he),P.side=xr):Os(P,ne,he)}this.compile=function(P,ne,he=null){he===null&&(he=P),L=je.get(he),L.init(ne),T.push(L),he.traverseVisible(function(le){le.isLight&&le.layers.test(ne.layers)&&(L.pushLight(le),le.castShadow&&L.pushShadow(le))}),P!==he&&P.traverseVisible(function(le){le.isLight&&le.layers.test(ne.layers)&&(L.pushLight(le),le.castShadow&&L.pushShadow(le))}),L.setupLights();const ce=new Set;return P.traverse(function(le){if(!(le.isMesh||le.isPoints||le.isLine||le.isSprite))return;const Fe=le.material;if(Fe)if(Array.isArray(Fe))for(let Xe=0;Xe<Fe.length;Xe++){const De=Fe[Xe];ui(De,he,le),ce.add(De)}else ui(Fe,he,le),ce.add(Fe)}),L=T.pop(),ce},this.compileAsync=function(P,ne,he=null){const ce=this.compile(P,ne,he);return new Promise(le=>{function Fe(){if(ce.forEach(function(Xe){D.get(Xe).currentProgram.isReady()&&ce.delete(Xe)}),ce.size===0){le(P);return}setTimeout(Fe,10)}pt.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let tr=null;function Us(P){tr&&tr(P)}function os(){nr.stop()}function Fs(){nr.start()}const nr=new Ov;nr.setAnimationLoop(Us),typeof self<"u"&&nr.setContext(self),this.setAnimationLoop=function(P){tr=P,Le.setAnimationLoop(P),P===null?nr.stop():nr.start()},Le.addEventListener("sessionstart",os),Le.addEventListener("sessionend",Fs),this.render=function(P,ne){if(ne!==void 0&&ne.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;J!==null&&J.renderStart(P,ne);const he=Le.enabled===!0&&Le.isPresenting===!0,ce=U!==null&&(X===null||he)&&U.begin(Y,X);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),ne.parent===null&&ne.matrixWorldAutoUpdate===!0&&ne.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(ne),ne=Le.getCamera()),P.isScene===!0&&P.onBeforeRender(Y,P,ne,X),L=je.get(P,T.length),L.init(ne),L.state.textureUnits=C.getTextureUnits(),T.push(L),Qe.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),He.setFromProjectionMatrix(Qe,Yi,ne.reversedDepth),it=this.localClippingEnabled,Et=F.init(this.clippingPlanes,it),I=ye.get(P,k.length),I.init(),k.push(I),Le.enabled===!0&&Le.isPresenting===!0){const Xe=Y.xr.getDepthSensingMesh();Xe!==null&&Ba(Xe,ne,-1/0,Y.sortObjects)}Ba(P,ne,0,Y.sortObjects),I.finish(),Y.sortObjects===!0&&I.sort(W,me),Bt=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,Bt&&Me.addToRenderList(I,P),this.info.render.frame++,Et===!0&&F.beginShadows();const le=L.state.shadowsArray;if(q.render(le,P,ne),Et===!0&&F.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ce&&U.hasRenderPass())===!1){const Xe=I.opaque,De=I.transmissive;if(L.setupLights(),ne.isArrayCamera){const Ke=ne.cameras;if(De.length>0)for(let tt=0,gt=Ke.length;tt<gt;tt++){const xt=Ke[tt];ki(Xe,De,P,xt)}Bt&&Me.render(P);for(let tt=0,gt=Ke.length;tt<gt;tt++){const xt=Ke[tt];Jo(I,P,xt,xt.viewport)}}else De.length>0&&ki(Xe,De,P,ne),Bt&&Me.render(P),Jo(I,P,ne)}X!==null&&Q===0&&(C.updateMultisampleRenderTarget(X),C.updateRenderTargetMipmap(X)),ce&&U.end(Y),P.isScene===!0&&P.onAfterRender(Y,P,ne),Pe.resetDefaultState(),O=-1,V=null,T.pop(),T.length>0?(L=T[T.length-1],C.setTextureUnits(L.state.textureUnits),Et===!0&&F.setGlobalState(Y.clippingPlanes,L.state.camera)):L=null,k.pop(),k.length>0?I=k[k.length-1]:I=null,J!==null&&J.renderEnd()};function Ba(P,ne,he,ce){if(P.visible===!1)return;if(P.layers.test(ne.layers)){if(P.isGroup)he=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(ne);else if(P.isLightProbeGrid)L.pushLightProbeGrid(P);else if(P.isLight)L.pushLight(P),P.castShadow&&L.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||He.intersectsSprite(P)){ce&&ht.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Qe);const Xe=Ne.update(P),De=P.material;De.visible&&I.push(P,Xe,De,he,ht.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||He.intersectsObject(P))){const Xe=Ne.update(P),De=P.material;if(ce&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),ht.copy(P.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),ht.copy(Xe.boundingSphere.center)),ht.applyMatrix4(P.matrixWorld).applyMatrix4(Qe)),Array.isArray(De)){const Ke=Xe.groups;for(let tt=0,gt=Ke.length;tt<gt;tt++){const xt=Ke[tt],Je=De[xt.materialIndex];Je&&Je.visible&&I.push(P,Xe,Je,he,ht.z,xt)}}else De.visible&&I.push(P,Xe,De,he,ht.z,null)}}const Fe=P.children;for(let Xe=0,De=Fe.length;Xe<De;Xe++)Ba(Fe[Xe],ne,he,ce)}function Jo(P,ne,he,ce){const{opaque:le,transmissive:Fe,transparent:Xe}=P;L.setupLightsView(he),Et===!0&&F.setGlobalState(Y.clippingPlanes,he),ce&&ke.viewport($.copy(ce)),le.length>0&&ls(le,ne,he),Fe.length>0&&ls(Fe,ne,he),Xe.length>0&&ls(Xe,ne,he),ke.buffers.depth.setTest(!0),ke.buffers.depth.setMask(!0),ke.buffers.color.setMask(!0),ke.setPolygonOffset(!1)}function ki(P,ne,he,ce){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[ce.id]===void 0){const Je=pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[ce.id]=new Zi(1,1,{generateMipmaps:!0,type:Je?Er:li,minFilter:As,samples:Math.max(4,Dt.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}const Fe=L.state.transmissionRenderTarget[ce.id],Xe=ce.viewport||$;Fe.setSize(Xe.z*Y.transmissionResolutionScale,Xe.w*Y.transmissionResolutionScale);const De=Y.getRenderTarget(),Ke=Y.getActiveCubeFace(),tt=Y.getActiveMipmapLevel();Y.setRenderTarget(Fe),Y.getClearColor(B),re=Y.getClearAlpha(),re<1&&Y.setClearColor(16777215,.5),Y.clear(),Bt&&Me.render(he);const gt=Y.toneMapping;Y.toneMapping=Ki;const xt=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),L.setupLightsView(ce),Et===!0&&F.setGlobalState(Y.clippingPlanes,ce),ls(P,he,ce),C.updateMultisampleRenderTarget(Fe),C.updateRenderTargetMipmap(Fe),pt.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let Nt=0,Wt=ne.length;Nt<Wt;Nt++){const Zt=ne[Nt],{object:Ft,geometry:cn,material:Ge,group:bn}=Zt;if(Ge.side===xr&&Ft.layers.test(ce.layers)){const St=Ge.side;Ge.side=ti,Ge.needsUpdate=!0,za(Ft,he,ce,cn,Ge,bn),Ge.side=St,Ge.needsUpdate=!0,Je=!0}}Je===!0&&(C.updateMultisampleRenderTarget(Fe),C.updateRenderTargetMipmap(Fe))}Y.setRenderTarget(De,Ke,tt),Y.setClearColor(B,re),xt!==void 0&&(ce.viewport=xt),Y.toneMapping=gt}function ls(P,ne,he){const ce=ne.isScene===!0?ne.overrideMaterial:null;for(let le=0,Fe=P.length;le<Fe;le++){const Xe=P[le],{object:De,geometry:Ke,group:tt}=Xe;let gt=Xe.material;gt.allowOverride===!0&&ce!==null&&(gt=ce),De.layers.test(he.layers)&&za(De,ne,he,Ke,gt,tt)}}function za(P,ne,he,ce,le,Fe){P.onBeforeRender(Y,ne,he,ce,le,Fe),P.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),le.onBeforeRender(Y,ne,he,ce,P,Fe),le.transparent===!0&&le.side===xr&&le.forceSinglePass===!1?(le.side=ti,le.needsUpdate=!0,Y.renderBufferDirect(he,ne,ce,le,P,Fe),le.side=is,le.needsUpdate=!0,Y.renderBufferDirect(he,ne,ce,le,P,Fe),le.side=xr):Y.renderBufferDirect(he,ne,ce,le,P,Fe),P.onAfterRender(Y,ne,he,ce,le,Fe)}function Os(P,ne,he){ne.isScene!==!0&&(ne=jt);const ce=D.get(P),le=L.state.lights,Fe=L.state.shadowsArray,Xe=le.state.version,De=Ue.getParameters(P,le.state,Fe,ne,he,L.state.lightProbeGridArray),Ke=Ue.getProgramCacheKey(De);let tt=ce.programs;ce.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?ne.environment:null,ce.fog=ne.fog;const gt=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;ce.envMap=ae.get(P.envMap||ce.environment,gt),ce.envMapRotation=ce.environment!==null&&P.envMap===null?ne.environmentRotation:P.envMapRotation,tt===void 0&&(P.addEventListener("dispose",rt),tt=new Map,ce.programs=tt);let xt=tt.get(Ke);if(xt!==void 0){if(ce.currentProgram===xt&&ce.lightsStateVersion===Xe)return Ga(P,De),xt}else De.uniforms=Ue.getUniforms(P),J!==null&&P.isNodeMaterial&&J.build(P,he,De),P.onBeforeCompile(De,Y),xt=Ue.acquireProgram(De,Ke),tt.set(Ke,xt),ce.uniforms=De.uniforms;const Je=ce.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Je.clippingPlanes=F.uniform),Ga(P,De),ce.needsLights=hu(P),ce.lightsStateVersion=Xe,ce.needsLights&&(Je.ambientLightColor.value=le.state.ambient,Je.lightProbe.value=le.state.probe,Je.directionalLights.value=le.state.directional,Je.directionalLightShadows.value=le.state.directionalShadow,Je.spotLights.value=le.state.spot,Je.spotLightShadows.value=le.state.spotShadow,Je.rectAreaLights.value=le.state.rectArea,Je.ltc_1.value=le.state.rectAreaLTC1,Je.ltc_2.value=le.state.rectAreaLTC2,Je.pointLights.value=le.state.point,Je.pointLightShadows.value=le.state.pointShadow,Je.hemisphereLights.value=le.state.hemi,Je.directionalShadowMatrix.value=le.state.directionalShadowMatrix,Je.spotLightMatrix.value=le.state.spotLightMatrix,Je.spotLightMap.value=le.state.spotLightMap,Je.pointShadowMatrix.value=le.state.pointShadowMatrix),ce.lightProbeGrid=L.state.lightProbeGridArray.length>0,ce.currentProgram=xt,ce.uniformsList=null,xt}function Ha(P){if(P.uniformsList===null){const ne=P.currentProgram.getUniforms();P.uniformsList=Xc.seqWithValue(ne.seq,P.uniforms)}return P.uniformsList}function Ga(P,ne){const he=D.get(P);he.outputColorSpace=ne.outputColorSpace,he.batching=ne.batching,he.batchingColor=ne.batchingColor,he.instancing=ne.instancing,he.instancingColor=ne.instancingColor,he.instancingMorph=ne.instancingMorph,he.skinning=ne.skinning,he.morphTargets=ne.morphTargets,he.morphNormals=ne.morphNormals,he.morphColors=ne.morphColors,he.morphTargetsCount=ne.morphTargetsCount,he.numClippingPlanes=ne.numClippingPlanes,he.numIntersection=ne.numClipIntersection,he.vertexAlphas=ne.vertexAlphas,he.vertexTangents=ne.vertexTangents,he.toneMapping=ne.toneMapping}function Qo(P,ne){if(P.length===0)return null;if(P.length===1)return P[0].texture!==null?P[0]:null;N.setFromMatrixPosition(ne.matrixWorld);for(let he=0,ce=P.length;he<ce;he++){const le=P[he];if(le.texture!==null&&le.boundingBox.containsPoint(N))return le}return null}function el(P,ne,he,ce,le){ne.isScene!==!0&&(ne=jt),C.resetTextureUnits();const Fe=ne.fog,Xe=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial?ne.environment:null,De=X===null?Y.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Rt.workingColorSpace,Ke=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial&&!ce.envMap||ce.isMeshPhongMaterial&&!ce.envMap,tt=ae.get(ce.envMap||Xe,Ke),gt=ce.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,xt=!!he.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),Je=!!he.morphAttributes.position,Nt=!!he.morphAttributes.normal,Wt=!!he.morphAttributes.color;let Zt=Ki;ce.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Zt=Y.toneMapping);const Ft=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,cn=Ft!==void 0?Ft.length:0,Ge=D.get(ce),bn=L.state.lights;if(Et===!0&&(it===!0||P!==V)){const Ot=P===V&&ce.id===O;F.setState(ce,P,Ot)}let St=!1;ce.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==bn.state.version||Ge.outputColorSpace!==De||le.isBatchedMesh&&Ge.batching===!1||!le.isBatchedMesh&&Ge.batching===!0||le.isBatchedMesh&&Ge.batchingColor===!0&&le.colorTexture===null||le.isBatchedMesh&&Ge.batchingColor===!1&&le.colorTexture!==null||le.isInstancedMesh&&Ge.instancing===!1||!le.isInstancedMesh&&Ge.instancing===!0||le.isSkinnedMesh&&Ge.skinning===!1||!le.isSkinnedMesh&&Ge.skinning===!0||le.isInstancedMesh&&Ge.instancingColor===!0&&le.instanceColor===null||le.isInstancedMesh&&Ge.instancingColor===!1&&le.instanceColor!==null||le.isInstancedMesh&&Ge.instancingMorph===!0&&le.morphTexture===null||le.isInstancedMesh&&Ge.instancingMorph===!1&&le.morphTexture!==null||Ge.envMap!==tt||ce.fog===!0&&Ge.fog!==Fe||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==F.numPlanes||Ge.numIntersection!==F.numIntersection)||Ge.vertexAlphas!==gt||Ge.vertexTangents!==xt||Ge.morphTargets!==Je||Ge.morphNormals!==Nt||Ge.morphColors!==Wt||Ge.toneMapping!==Zt||Ge.morphTargetsCount!==cn||!!Ge.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(St=!0):(St=!0,Ge.__version=ce.version);let Wn=Ge.currentProgram;St===!0&&(Wn=Os(ce,ne,le),J&&ce.isNodeMaterial&&J.onUpdateProgram(ce,Wn,Ge));let Xn=!1,wt=!1,ir=!1;const Ut=Wn.getUniforms(),qt=Ge.uniforms;if(ke.useProgram(Wn.program)&&(Xn=!0,wt=!0,ir=!0),ce.id!==O&&(O=ce.id,wt=!0),Ge.needsLights){const Ot=Qo(L.state.lightProbeGridArray,le);Ge.lightProbeGrid!==Ot&&(Ge.lightProbeGrid=Ot,wt=!0)}if(Xn||V!==P){ke.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),Ut.setValue(ee,"projectionMatrix",P.projectionMatrix),Ut.setValue(ee,"viewMatrix",P.matrixWorldInverse);const bi=Ut.map.cameraPosition;bi!==void 0&&bi.setValue(ee,_t.setFromMatrixPosition(P.matrixWorld)),Dt.logarithmicDepthBuffer&&Ut.setValue(ee,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&Ut.setValue(ee,"isOrthographic",P.isOrthographicCamera===!0),V!==P&&(V=P,wt=!0,ir=!0)}if(Ge.needsLights&&(bn.state.directionalShadowMap.length>0&&Ut.setValue(ee,"directionalShadowMap",bn.state.directionalShadowMap,C),bn.state.spotShadowMap.length>0&&Ut.setValue(ee,"spotShadowMap",bn.state.spotShadowMap,C),bn.state.pointShadowMap.length>0&&Ut.setValue(ee,"pointShadowMap",bn.state.pointShadowMap,C)),le.isSkinnedMesh){Ut.setOptional(ee,le,"bindMatrix"),Ut.setOptional(ee,le,"bindMatrixInverse");const Ot=le.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),Ut.setValue(ee,"boneTexture",Ot.boneTexture,C))}le.isBatchedMesh&&(Ut.setOptional(ee,le,"batchingTexture"),Ut.setValue(ee,"batchingTexture",le._matricesTexture,C),Ut.setOptional(ee,le,"batchingIdTexture"),Ut.setValue(ee,"batchingIdTexture",le._indirectTexture,C),Ut.setOptional(ee,le,"batchingColorTexture"),le._colorsTexture!==null&&Ut.setValue(ee,"batchingColorTexture",le._colorsTexture,C));const Ei=he.morphAttributes;if((Ei.position!==void 0||Ei.normal!==void 0||Ei.color!==void 0)&&$e.update(le,he,Wn),(wt||Ge.receiveShadow!==le.receiveShadow)&&(Ge.receiveShadow=le.receiveShadow,Ut.setValue(ee,"receiveShadow",le.receiveShadow)),(ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial)&&ce.envMap===null&&ne.environment!==null&&(qt.envMapIntensity.value=ne.environmentIntensity),qt.dfgLUT!==void 0&&(qt.dfgLUT.value=YA()),wt){if(Ut.setValue(ee,"toneMappingExposure",Y.toneMappingExposure),Ge.needsLights&&du(qt,ir),Fe&&ce.fog===!0&&ge.refreshFogUniforms(qt,Fe),ge.refreshMaterialUniforms(qt,ce,Re,Te,L.state.transmissionRenderTarget[P.id]),Ge.needsLights&&Ge.lightProbeGrid){const Ot=Ge.lightProbeGrid;qt.probesSH.value=Ot.texture,qt.probesMin.value.copy(Ot.boundingBox.min),qt.probesMax.value.copy(Ot.boundingBox.max),qt.probesResolution.value.copy(Ot.resolution)}Xc.upload(ee,Ha(Ge),qt,C)}if(ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(Xc.upload(ee,Ha(Ge),qt,C),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&Ut.setValue(ee,"center",le.center),Ut.setValue(ee,"modelViewMatrix",le.modelViewMatrix),Ut.setValue(ee,"normalMatrix",le.normalMatrix),Ut.setValue(ee,"modelMatrix",le.matrixWorld),ce.uniformsGroups!==void 0){const Ot=ce.uniformsGroups;for(let bi=0,ji=Ot.length;bi<ji;bi++){const cs=Ot[bi];ve.update(cs,Wn),ve.bind(cs,Wn)}}return Wn}function du(P,ne){P.ambientLightColor.needsUpdate=ne,P.lightProbe.needsUpdate=ne,P.directionalLights.needsUpdate=ne,P.directionalLightShadows.needsUpdate=ne,P.pointLights.needsUpdate=ne,P.pointLightShadows.needsUpdate=ne,P.spotLights.needsUpdate=ne,P.spotLightShadows.needsUpdate=ne,P.rectAreaLights.needsUpdate=ne,P.hemisphereLights.needsUpdate=ne}function hu(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(P,ne,he){const ce=D.get(P);ce.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,ce.__autoAllocateDepthBuffer===!1&&(ce.__useRenderToTexture=!1),D.get(P.texture).__webglTexture=ne,D.get(P.depthTexture).__webglTexture=ce.__autoAllocateDepthBuffer?void 0:he,ce.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,ne){const he=D.get(P);he.__webglFramebuffer=ne,he.__useDefaultFramebuffer=ne===void 0};const en=ee.createFramebuffer();this.setRenderTarget=function(P,ne=0,he=0){X=P,H=ne,Q=he;let ce=null,le=!1,Fe=!1;if(P){const De=D.get(P);if(De.__useDefaultFramebuffer!==void 0){ke.bindFramebuffer(ee.FRAMEBUFFER,De.__webglFramebuffer),$.copy(P.viewport),ue.copy(P.scissor),se=P.scissorTest,ke.viewport($),ke.scissor(ue),ke.setScissorTest(se),O=-1;return}else if(De.__webglFramebuffer===void 0)C.setupRenderTarget(P);else if(De.__hasExternalTextures)C.rebindTextures(P,D.get(P.texture).__webglTexture,D.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const gt=P.depthTexture;if(De.__boundDepthTexture!==gt){if(gt!==null&&D.has(gt)&&(P.width!==gt.image.width||P.height!==gt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(P)}}const Ke=P.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Fe=!0);const tt=D.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(tt[ne])?ce=tt[ne][he]:ce=tt[ne],le=!0):P.samples>0&&C.useMultisampledRTT(P)===!1?ce=D.get(P).__webglMultisampledFramebuffer:Array.isArray(tt)?ce=tt[he]:ce=tt,$.copy(P.viewport),ue.copy(P.scissor),se=P.scissorTest}else $.copy(fe).multiplyScalar(Re).floor(),ue.copy(xe).multiplyScalar(Re).floor(),se=Ce;if(he!==0&&(ce=en),ke.bindFramebuffer(ee.FRAMEBUFFER,ce)&&ke.drawBuffers(P,ce),ke.viewport($),ke.scissor(ue),ke.setScissorTest(se),le){const De=D.get(P.texture);ee.framebufferTexture2D(ee.FRAMEBUFFER,ee.COLOR_ATTACHMENT0,ee.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De.__webglTexture,he)}else if(Fe){const De=ne;for(let Ke=0;Ke<P.textures.length;Ke++){const tt=D.get(P.textures[Ke]);ee.framebufferTextureLayer(ee.FRAMEBUFFER,ee.COLOR_ATTACHMENT0+Ke,tt.__webglTexture,he,De)}}else if(P!==null&&he!==0){const De=D.get(P.texture);ee.framebufferTexture2D(ee.FRAMEBUFFER,ee.COLOR_ATTACHMENT0,ee.TEXTURE_2D,De.__webglTexture,he)}O=-1},this.readRenderTargetPixels=function(P,ne,he,ce,le,Fe,Xe,De=0){if(!(P&&P.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ke=D.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Xe!==void 0&&(Ke=Ke[Xe]),Ke){ke.bindFramebuffer(ee.FRAMEBUFFER,Ke);try{const tt=P.textures[De],gt=tt.format,xt=tt.type;if(P.textures.length>1&&ee.readBuffer(ee.COLOR_ATTACHMENT0+De),!Dt.textureFormatReadable(gt)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Dt.textureTypeReadable(xt)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ne>=0&&ne<=P.width-ce&&he>=0&&he<=P.height-le&&ee.readPixels(ne,he,ce,le,Z.convert(gt),Z.convert(xt),Fe)}finally{const tt=X!==null?D.get(X).__webglFramebuffer:null;ke.bindFramebuffer(ee.FRAMEBUFFER,tt)}}},this.readRenderTargetPixelsAsync=async function(P,ne,he,ce,le,Fe,Xe,De=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ke=D.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Xe!==void 0&&(Ke=Ke[Xe]),Ke)if(ne>=0&&ne<=P.width-ce&&he>=0&&he<=P.height-le){ke.bindFramebuffer(ee.FRAMEBUFFER,Ke);const tt=P.textures[De],gt=tt.format,xt=tt.type;if(P.textures.length>1&&ee.readBuffer(ee.COLOR_ATTACHMENT0+De),!Dt.textureFormatReadable(gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Dt.textureTypeReadable(xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=ee.createBuffer();ee.bindBuffer(ee.PIXEL_PACK_BUFFER,Je),ee.bufferData(ee.PIXEL_PACK_BUFFER,Fe.byteLength,ee.STREAM_READ),ee.readPixels(ne,he,ce,le,Z.convert(gt),Z.convert(xt),0);const Nt=X!==null?D.get(X).__webglFramebuffer:null;ke.bindFramebuffer(ee.FRAMEBUFFER,Nt);const Wt=ee.fenceSync(ee.SYNC_GPU_COMMANDS_COMPLETE,0);return ee.flush(),await l1(ee,Wt,4),ee.bindBuffer(ee.PIXEL_PACK_BUFFER,Je),ee.getBufferSubData(ee.PIXEL_PACK_BUFFER,0,Fe),ee.deleteBuffer(Je),ee.deleteSync(Wt),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,ne=null,he=0){const ce=Math.pow(2,-he),le=Math.floor(P.image.width*ce),Fe=Math.floor(P.image.height*ce),Xe=ne!==null?ne.x:0,De=ne!==null?ne.y:0;C.setTexture2D(P,0),ee.copyTexSubImage2D(ee.TEXTURE_2D,he,0,0,Xe,De,le,Fe),ke.unbindTexture()};const fu=ee.createFramebuffer(),Va=ee.createFramebuffer();this.copyTextureToTexture=function(P,ne,he=null,ce=null,le=0,Fe=0){let Xe,De,Ke,tt,gt,xt,Je,Nt,Wt;const Zt=P.isCompressedTexture?P.mipmaps[Fe]:P.image;if(he!==null)Xe=he.max.x-he.min.x,De=he.max.y-he.min.y,Ke=he.isBox3?he.max.z-he.min.z:1,tt=he.min.x,gt=he.min.y,xt=he.isBox3?he.min.z:0;else{const qt=Math.pow(2,-le);Xe=Math.floor(Zt.width*qt),De=Math.floor(Zt.height*qt),P.isDataArrayTexture?Ke=Zt.depth:P.isData3DTexture?Ke=Math.floor(Zt.depth*qt):Ke=1,tt=0,gt=0,xt=0}ce!==null?(Je=ce.x,Nt=ce.y,Wt=ce.z):(Je=0,Nt=0,Wt=0);const Ft=Z.convert(ne.format),cn=Z.convert(ne.type);let Ge;ne.isData3DTexture?(C.setTexture3D(ne,0),Ge=ee.TEXTURE_3D):ne.isDataArrayTexture||ne.isCompressedArrayTexture?(C.setTexture2DArray(ne,0),Ge=ee.TEXTURE_2D_ARRAY):(C.setTexture2D(ne,0),Ge=ee.TEXTURE_2D),ke.activeTexture(ee.TEXTURE0),ke.pixelStorei(ee.UNPACK_FLIP_Y_WEBGL,ne.flipY),ke.pixelStorei(ee.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),ke.pixelStorei(ee.UNPACK_ALIGNMENT,ne.unpackAlignment);const bn=ke.getParameter(ee.UNPACK_ROW_LENGTH),St=ke.getParameter(ee.UNPACK_IMAGE_HEIGHT),Wn=ke.getParameter(ee.UNPACK_SKIP_PIXELS),Xn=ke.getParameter(ee.UNPACK_SKIP_ROWS),wt=ke.getParameter(ee.UNPACK_SKIP_IMAGES);ke.pixelStorei(ee.UNPACK_ROW_LENGTH,Zt.width),ke.pixelStorei(ee.UNPACK_IMAGE_HEIGHT,Zt.height),ke.pixelStorei(ee.UNPACK_SKIP_PIXELS,tt),ke.pixelStorei(ee.UNPACK_SKIP_ROWS,gt),ke.pixelStorei(ee.UNPACK_SKIP_IMAGES,xt);const ir=P.isDataArrayTexture||P.isData3DTexture,Ut=ne.isDataArrayTexture||ne.isData3DTexture;if(P.isDepthTexture){const qt=D.get(P),Ei=D.get(ne),Ot=D.get(qt.__renderTarget),bi=D.get(Ei.__renderTarget);ke.bindFramebuffer(ee.READ_FRAMEBUFFER,Ot.__webglFramebuffer),ke.bindFramebuffer(ee.DRAW_FRAMEBUFFER,bi.__webglFramebuffer);for(let ji=0;ji<Ke;ji++)ir&&(ee.framebufferTextureLayer(ee.READ_FRAMEBUFFER,ee.COLOR_ATTACHMENT0,D.get(P).__webglTexture,le,xt+ji),ee.framebufferTextureLayer(ee.DRAW_FRAMEBUFFER,ee.COLOR_ATTACHMENT0,D.get(ne).__webglTexture,Fe,Wt+ji)),ee.blitFramebuffer(tt,gt,Xe,De,Je,Nt,Xe,De,ee.DEPTH_BUFFER_BIT,ee.NEAREST);ke.bindFramebuffer(ee.READ_FRAMEBUFFER,null),ke.bindFramebuffer(ee.DRAW_FRAMEBUFFER,null)}else if(le!==0||P.isRenderTargetTexture||D.has(P)){const qt=D.get(P),Ei=D.get(ne);ke.bindFramebuffer(ee.READ_FRAMEBUFFER,fu),ke.bindFramebuffer(ee.DRAW_FRAMEBUFFER,Va);for(let Ot=0;Ot<Ke;Ot++)ir?ee.framebufferTextureLayer(ee.READ_FRAMEBUFFER,ee.COLOR_ATTACHMENT0,qt.__webglTexture,le,xt+Ot):ee.framebufferTexture2D(ee.READ_FRAMEBUFFER,ee.COLOR_ATTACHMENT0,ee.TEXTURE_2D,qt.__webglTexture,le),Ut?ee.framebufferTextureLayer(ee.DRAW_FRAMEBUFFER,ee.COLOR_ATTACHMENT0,Ei.__webglTexture,Fe,Wt+Ot):ee.framebufferTexture2D(ee.DRAW_FRAMEBUFFER,ee.COLOR_ATTACHMENT0,ee.TEXTURE_2D,Ei.__webglTexture,Fe),le!==0?ee.blitFramebuffer(tt,gt,Xe,De,Je,Nt,Xe,De,ee.COLOR_BUFFER_BIT,ee.NEAREST):Ut?ee.copyTexSubImage3D(Ge,Fe,Je,Nt,Wt+Ot,tt,gt,Xe,De):ee.copyTexSubImage2D(Ge,Fe,Je,Nt,tt,gt,Xe,De);ke.bindFramebuffer(ee.READ_FRAMEBUFFER,null),ke.bindFramebuffer(ee.DRAW_FRAMEBUFFER,null)}else Ut?P.isDataTexture||P.isData3DTexture?ee.texSubImage3D(Ge,Fe,Je,Nt,Wt,Xe,De,Ke,Ft,cn,Zt.data):ne.isCompressedArrayTexture?ee.compressedTexSubImage3D(Ge,Fe,Je,Nt,Wt,Xe,De,Ke,Ft,Zt.data):ee.texSubImage3D(Ge,Fe,Je,Nt,Wt,Xe,De,Ke,Ft,cn,Zt):P.isDataTexture?ee.texSubImage2D(ee.TEXTURE_2D,Fe,Je,Nt,Xe,De,Ft,cn,Zt.data):P.isCompressedTexture?ee.compressedTexSubImage2D(ee.TEXTURE_2D,Fe,Je,Nt,Zt.width,Zt.height,Ft,Zt.data):ee.texSubImage2D(ee.TEXTURE_2D,Fe,Je,Nt,Xe,De,Ft,cn,Zt);ke.pixelStorei(ee.UNPACK_ROW_LENGTH,bn),ke.pixelStorei(ee.UNPACK_IMAGE_HEIGHT,St),ke.pixelStorei(ee.UNPACK_SKIP_PIXELS,Wn),ke.pixelStorei(ee.UNPACK_SKIP_ROWS,Xn),ke.pixelStorei(ee.UNPACK_SKIP_IMAGES,wt),Fe===0&&ne.generateMipmaps&&ee.generateMipmap(Ge),ke.unbindTexture()},this.initRenderTarget=function(P){D.get(P).__webglFramebuffer===void 0&&C.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?C.setTextureCube(P,0):P.isData3DTexture?C.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?C.setTexture2DArray(P,0):C.setTexture2D(P,0),ke.unbindTexture()},this.resetState=function(){H=0,Q=0,X=null,ke.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Rt._getUnpackColorSpace()}}const A0={type:"change"},Np={type:"start"},Wv={type:"end"},Nc=new bp,R0=new Qr,ZA=Math.cos(70*d1.DEG2RAD),mn=new ie,Qn=2*Math.PI,Gt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Gh=1e-6;class JA extends eb{constructor(e,t=null){super(e,t),this.state=Gt.NONE,this.target=new ie,this.cursor=new ie,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ca.ROTATE,MIDDLE:Ca.DOLLY,RIGHT:Ca.PAN},this.touches={ONE:wa.ROTATE,TWO:wa.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new ie,this._lastQuaternion=new rs,this._lastTargetPosition=new ie,this._quat=new rs().setFromUnitVectors(e.up,new ie(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new n0,this._sphericalDelta=new n0,this._scale=1,this._panOffset=new ie,this._rotateStart=new dt,this._rotateEnd=new dt,this._rotateDelta=new dt,this._panStart=new dt,this._panEnd=new dt,this._panDelta=new dt,this._dollyStart=new dt,this._dollyEnd=new dt,this._dollyDelta=new dt,this._dollyDirection=new ie,this._mouse=new dt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=eR.bind(this),this._onPointerDown=QA.bind(this),this._onPointerUp=tR.bind(this),this._onContextMenu=lR.bind(this),this._onMouseWheel=rR.bind(this),this._onKeyDown=sR.bind(this),this._onTouchStart=aR.bind(this),this._onTouchMove=oR.bind(this),this._onMouseDown=nR.bind(this),this._onMouseMove=iR.bind(this),this._interceptControlDown=cR.bind(this),this._interceptControlUp=uR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(A0),this.update(),this.state=Gt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;mn.copy(t).sub(this.target),mn.applyQuaternion(this._quat),this._spherical.setFromVector3(mn),this.autoRotate&&this.state===Gt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(s)&&isFinite(a)&&(s<-Math.PI?s+=Qn:s>Math.PI&&(s-=Qn),a<-Math.PI?a+=Qn:a>Math.PI&&(a-=Qn),s<=a?this._spherical.theta=Math.max(s,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+a)/2?Math.max(s,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const d=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=d!=this._spherical.radius}if(mn.setFromSpherical(this._spherical),mn.applyQuaternion(this._quatInverse),t.copy(this.target).add(mn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let d=null;if(this.object.isPerspectiveCamera){const h=mn.length();d=this._clampDistance(h*this._scale);const f=h-d;this.object.position.addScaledVector(this._dollyDirection,f),this.object.updateMatrixWorld(),c=!!f}else if(this.object.isOrthographicCamera){const h=new ie(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=f!==this.object.zoom;const m=new ie(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(h),this.object.updateMatrixWorld(),d=mn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;d!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(d).add(this.object.position):(Nc.origin.copy(this.object.position),Nc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Nc.direction))<ZA?this.object.lookAt(this.target):(R0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Nc.intersectPlane(R0,this.target))))}else if(this.object.isOrthographicCamera){const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),d!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Gh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Gh||this._lastTargetPosition.distanceToSquared(this.target)>Gh?(this.dispatchEvent(A0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Qn/60*this.autoRotateSpeed*e:Qn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){mn.setFromMatrixColumn(t,0),mn.multiplyScalar(-e),this._panOffset.add(mn)}_panUp(e,t){this.screenSpacePanning===!0?mn.setFromMatrixColumn(t,1):(mn.setFromMatrixColumn(t,0),mn.crossVectors(this.object.up,mn)),mn.multiplyScalar(e),this._panOffset.add(mn)}_pan(e,t){const s=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;mn.copy(a).sub(this.target);let c=mn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*c/s.clientHeight,this.object.matrix),this._panUp(2*t*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),a=e-s.left,c=t-s.top,d=s.width,h=s.height;this._mouse.x=a/d*2-1,this._mouse.y=-(c/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Qn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Qn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),s=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._rotateStart.set(s,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),s=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panStart.set(s,a)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),s=e.pageX-t.x,a=e.pageY-t.y,c=Math.sqrt(s*s+a*a);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const s=this._getSecondPointerPosition(e),a=.5*(e.pageX+s.x),c=.5*(e.pageY+s.y);this._rotateEnd.set(a,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Qn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Qn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),s=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panEnd.set(s,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),s=e.pageX-t.x,a=e.pageY-t.y,c=Math.sqrt(s*s+a*a);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const d=(e.pageX+t.x)*.5,h=(e.pageY+t.y)*.5;this._updateZoomParameters(d,h)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new dt,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,s={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function QA(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function eR(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function tR(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Wv),this.state=Gt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function nR(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ca.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Gt.DOLLY;break;case Ca.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Gt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Gt.ROTATE}break;case Ca.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Gt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Gt.PAN}break;default:this.state=Gt.NONE}this.state!==Gt.NONE&&this.dispatchEvent(Np)}function iR(i){switch(this.state){case Gt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Gt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Gt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function rR(i){this.enabled===!1||this.enableZoom===!1||this.state!==Gt.NONE||(i.preventDefault(),this.dispatchEvent(Np),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Wv))}function sR(i){this.enabled!==!1&&this._handleKeyDown(i)}function aR(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case wa.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Gt.TOUCH_ROTATE;break;case wa.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Gt.TOUCH_PAN;break;default:this.state=Gt.NONE}break;case 2:switch(this.touches.TWO){case wa.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Gt.TOUCH_DOLLY_PAN;break;case wa.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Gt.TOUCH_DOLLY_ROTATE;break;default:this.state=Gt.NONE}break;default:this.state=Gt.NONE}this.state!==Gt.NONE&&this.dispatchEvent(Np)}function oR(i){switch(this._trackPointer(i),this.state){case Gt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Gt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Gt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Gt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Gt.NONE}}function lR(i){this.enabled!==!1&&i.preventDefault()}function cR(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function uR(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Vh(i){const e=`${i.model||""} ${i.serialNumber||""} ${i.zone||""}`.toLowerCase();return e.includes("switch")?"switch":e.includes("access")||e.includes("ap")||e.includes("wifi")?"ap":e.includes("router")||e.includes("gateway")?"gateway":"device"}function N0(i){return i==="ONLINE"?1483594:i==="UNSTABLE"?15909632:6583435}function dR(i,e="#0f172a"){const t=document.createElement("canvas"),s=t.getContext("2d");t.width=512,t.height=128,s.font="700 34px Arial",s.fillStyle="rgba(255,255,255,0.92)",s.roundRect(0,14,512,72,18),s.fill(),s.fillStyle=e,s.fillText(i.slice(0,26),28,60);const a=new k1(t),c=new Cv({map:a,transparent:!0}),d=new P1(c);return d.scale.set(4.8,1.2,1),d}function Pc(i,e,t,s=9741240){const a=new Vn().setFromPoints([e,t]),c=new Tp({color:s,transparent:!0,opacity:.75}),d=new Nv(a,c);return i.add(d),d}function Uo(i,{position:e,color:t,label:s,shape:a="box",scale:c=[1,1,1]}){const d=a==="sphere"?new Ap(.45,32,18):a==="cylinder"?new Cp(.42,.55,1.2,32):new ka(1,1,1),h=new Dv({color:t,roughness:.42,metalness:.08}),f=new Fi(d,h);f.position.copy(e),f.scale.set(c[0],c[1],c[2]),f.castShadow=!0,f.receiveShadow=!0,i.add(f);const m=dR(s);return m.position.set(e.x,e.y+1.25,e.z),i.add(m),f}function hR(){const i=Mi.getStoredUser(),e=Oa(i),t=j.useRef(null),[s,a]=j.useState([]),[c,d]=j.useState([]),[h,f]=j.useState([]),[m,v]=j.useState([]),[x,g]=j.useState(""),[M,E]=j.useState(!0),[A,y]=j.useState(""),[S,b]=j.useState(""),w=async(I,L=m)=>{E(!0);const k=Ns(I),T=k?{hotelId:k}:void 0;Promise.all([nt.listDevices(T),nt.listLoginSessions(T)]).then(([U,Y])=>{a(U),d(Y),f(k?L.filter(G=>G.id===k):L)}).catch(U=>{console.warn(U),y("Donnees live indisponibles, affichage de la topologie de reference.")}).finally(()=>E(!1))};j.useEffect(()=>{nt.listHotels().then(async I=>{v(I);const L=Yo(i,I);g(L),await w(L,I)}).catch(I=>{console.warn(I),y("Donnees live indisponibles, affichage de la topologie de reference."),E(!1)})},[]),j.useEffect(()=>{!x||m.length===0||w(x)},[x]);const N=j.useMemo(()=>{const I=s.filter(U=>U.status==="ONLINE").length,L=s.filter(U=>U.status==="UNSTABLE").length,k=s.filter(U=>U.status==="OFFLINE").length,T=c.filter(U=>U.status==="ONLINE").length;return{online:I,unstable:L,offline:k,activeSessions:T}},[s,c]);return j.useEffect(()=>{var fe;if(!t.current)return;const I=t.current,L=new w1;L.background=new Ct(16317180),L.fog=new Ep(16317180,28,74);const k=new _i(48,I.clientWidth/I.clientHeight,.1,1e3);k.position.set(9,10,17);let T;try{T=new KA({antialias:!0,alpha:!1}),b("")}catch(xe){console.warn(xe),b("Affichage 3D indisponible sur ce navigateur, topologie simplifiee affichee."),I.innerHTML="";return}T.setPixelRatio(Math.min(window.devicePixelRatio,2)),T.setSize(I.clientWidth,I.clientHeight),T.shadowMap.enabled=!0,T.shadowMap.type=rv,I.innerHTML="",I.appendChild(T.domElement);const U=new JA(k,T.domElement);U.enableDamping=!0,U.dampingFactor=.08,U.maxPolarAngle=Math.PI/2.08,U.minDistance=8,U.maxDistance=42,U.target.set(0,1.2,0);const Y=new $1(16777215,14412542,1.6);L.add(Y);const G=new K1(16777215,2.1);G.position.set(10,18,8),G.castShadow=!0,G.shadow.mapSize.set(2048,2048),L.add(G);const J=new Fi(new Zo(34,24,1,1),new Dv({color:16777215,roughness:.72}));J.rotation.x=-Math.PI/2,J.receiveShadow=!0,L.add(J);const H=new Q1(34,22,13358561,14870768);H.position.y=.01,L.add(H);const Q=x===ei?"MboaLink Multi-hotels":((fe=h[0])==null?void 0:fe.name)||"Hotel MboaLink",X=new ie(-11,1.2,0);Uo(L,{position:X,color:339807,label:Q,shape:"box",scale:[1.8,2.6,1.8]});const O=new ie(-5.8,1.1,0);Uo(L,{position:O,color:15909632,label:"Gateway",shape:"box",scale:[1.5,.9,1.2]}),Pc(L,X,O,339807);const V=s.filter(xe=>Vh(xe)==="switch"),$=s.filter(xe=>Vh(xe)==="ap"),ue=s.filter(xe=>!["switch","ap"].includes(Vh(xe))),se=V.length?V:ue.slice(0,2),B=$.length?$:s.slice(0,6),re=(se.length?se:[{id:"sw-1",model:"Core Switch",status:"ONLINE"}]).slice(0,4).map((xe,Ce,He)=>{const Et=He.length===1?0:-5+Ce*(10/Math.max(He.length-1,1)),it=new ie(-.8,1,Et);return Uo(L,{position:it,color:N0(xe.status||"ONLINE"),label:xe.model||xe.serialNumber||`Switch ${Ce+1}`,shape:"box",scale:[1.5,.62,1]}),Pc(L,O,it,2450411),{device:xe,pos:it}}),Te=(B.length?B:[{id:"ap-1",model:"AP Lobby",status:"ONLINE",zone:"Lobby"},{id:"ap-2",model:"AP Rooms",status:"ONLINE",zone:"Rooms"},{id:"ap-3",model:"AP Conference",status:"UNSTABLE",zone:"Conference"}]).slice(0,10).map((xe,Ce)=>{var jt;const He=Ce%2,it=4+Math.floor(Ce/2)*2.7,Qe=He===0?-4.7:4.7,_t=new ie(it,1.05,Qe);Uo(L,{position:_t,color:N0(xe.status||"ONLINE"),label:xe.zone||xe.model||`AP ${Ce+1}`,shape:"cylinder",scale:[1,1,1]});const ht=((jt=re[Ce%re.length])==null?void 0:jt.pos)||O;return Pc(L,ht,_t,9741240),{device:xe,pos:_t}});c.filter(xe=>xe.status==="ONLINE").slice(0,14).forEach((xe,Ce)=>{var _t,ht;const He=((_t=Te[Ce%Te.length])==null?void 0:_t.pos)||O,Et=Ce/14*Math.PI*2,it=1.35+Ce%3*.35,Qe=new ie(He.x+Math.cos(Et)*it,.55,He.z+Math.sin(Et)*it);Uo(L,{position:Qe,color:8141549,label:xe.clientName||((ht=xe.room)==null?void 0:ht.name)||"Client",shape:"sphere",scale:[.52,.52,.52]}),Pc(L,He,Qe,8141549)});let Re=0;const W=()=>{Re=requestAnimationFrame(W),L.traverse(xe=>{var Ce;xe.isMesh&&((Ce=xe.geometry)==null?void 0:Ce.type)==="CylinderGeometry"&&(xe.rotation.y+=.006)}),U.update(),T.render(L,k)};W();const me=()=>{!I.clientWidth||!I.clientHeight||(k.aspect=I.clientWidth/I.clientHeight,k.updateProjectionMatrix(),T.setSize(I.clientWidth,I.clientHeight))};return window.addEventListener("resize",me),()=>{cancelAnimationFrame(Re),window.removeEventListener("resize",me),U.dispose(),T.dispose(),L.traverse(xe=>{var Ce,He,Et,it;(He=(Ce=xe.geometry)==null?void 0:Ce.dispose)==null||He.call(Ce),xe.material&&(Array.isArray(xe.material)?xe.material.forEach(Qe=>{var _t;return(_t=Qe.dispose)==null?void 0:_t.call(Qe)}):(it=(Et=xe.material).dispose)==null||it.call(Et))}),I.innerHTML=""}},[s,c,h,x]),o.jsx(wr,{activePage:"DASHBOARD",activeSubPage:"Network Map",children:o.jsxs("div",{className:"networkMapPage",children:[o.jsxs("div",{className:"networkMapHeader",children:[o.jsxs("div",{children:[o.jsx("p",{className:"networkMapEyebrow",children:"Architecture reseau 3D"}),o.jsx("h1",{children:x===ei?"Carte reseau multi-hotels":"Carte reseau de l'hotel"}),o.jsx("span",{children:"Gateway, switchs, access points et clients actifs dans une vue interactive."})]}),e&&o.jsxs("select",{className:"networkMapScopeSelect",value:x,onChange:I=>g(I.target.value),children:[o.jsx("option",{value:ei,children:"Tous les hôtels"}),m.map(I=>o.jsx("option",{value:I.id,children:I.name},I.id))]}),o.jsxs("div",{className:"networkMapStats",children:[o.jsx("strong",{children:N.online}),o.jsx("span",{children:"Online"}),o.jsx("strong",{children:N.unstable}),o.jsx("span",{children:"Instables"}),o.jsx("strong",{children:N.activeSessions}),o.jsx("span",{children:"Clients"})]})]}),o.jsxs("div",{className:"networkMapSceneShell",children:[o.jsx("div",{ref:t,className:"networkMapCanvas"}),M&&o.jsx("div",{className:"networkMapLoading",children:"Chargement de la topologie..."}),A&&o.jsx("div",{className:"networkMapNotice",children:A}),S&&o.jsxs("div",{className:"networkMapFallback",children:[o.jsx("div",{className:"fallbackNode hotel",children:"Hotel"}),o.jsx("div",{className:"fallbackLine"}),o.jsx("div",{className:"fallbackNode gateway",children:"Gateway"}),o.jsx("div",{className:"fallbackLine"}),o.jsxs("div",{className:"fallbackCluster",children:[o.jsx("div",{className:"fallbackNode switch",children:"Switch"}),o.jsx("div",{className:"fallbackNode ap",children:"Access Point"}),o.jsx("div",{className:"fallbackNode client",children:"Clients"})]}),o.jsx("p",{children:S})]}),o.jsxs("div",{className:"networkMapLegend",children:[o.jsxs("span",{children:[o.jsx("i",{className:"legendGateway"})," Gateway"]}),o.jsxs("span",{children:[o.jsx("i",{className:"legendOnline"})," Online"]}),o.jsxs("span",{children:[o.jsx("i",{className:"legendWarning"})," Instable"]}),o.jsxs("span",{children:[o.jsx("i",{className:"legendClient"})," Client actif"]})]})]})]})})}const fR="/assets/Logo%20Mboalink-02%201-Bk-0oppc.png",Lc={ADMIN:"Administrateur",SUPPORT:"Support",HOTEL_IT:"IT hôtel",RECEPTIONIST:"Réceptionniste",CLIENT:"Client"},Ic=["HOTEL_IT","RECEPTIONIST"],P0={ADMIN:"Admins MboaLink",SUPPORT:"Support IT MboaLink",HOTEL_IT:"IT hôtel",RECEPTIONIST:"Réceptionnistes"},Wh={INFO:"Information",WARNING:"Attention",URGENT:"Urgent"},Xh={fullName:"",email:"",password:"",role:"RECEPTIONIST",hotelId:""},$h={name:"",city:"",country:"Cameroun",address:"",description:""},qh={hotelId:"",macAddress:"",model:"",serialNumber:"",localIp:"",zone:"",floor:""},L0={title:"",message:"",priority:"INFO",category:"",targetMode:"ALL",hotelId:"",role:"SUPPORT",userIds:[]};function Dc(i){return i?new Date(i).toLocaleString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}):"Jamais"}function Xv(i){return i.split(" ").filter(Boolean).slice(0,2).map(e=>{var t;return(t=e[0])==null?void 0:t.toUpperCase()}).join("")||"ML"}function zn(i){return String(i??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function I0(){const i=Is(),e=Mi.getStoredUser(),[t,s]=j.useState([]),[a,c]=j.useState([]),[d,h]=j.useState([]),[f,m]=j.useState(""),[v,x]=j.useState("all"),[g,M]=j.useState("all"),[E,A]=j.useState(!0),[y,S]=j.useState(!1),[b,w]=j.useState(Xh),[N,I]=j.useState($h),[L,k]=j.useState(qh),[T,U]=j.useState(null),[Y,G]=j.useState(null),[J,H]=j.useState(null),[Q,X]=j.useState(null),[O,V]=j.useState("inbox"),[$,ue]=j.useState([]),[se,B]=j.useState([]),[re,Oe]=j.useState([]),[Te,Re]=j.useState(L0),[W,me]=j.useState(""),[fe,xe]=j.useState(!1),Ce=async()=>{try{const[F,q,Me,$e,at,ft]=await Promise.all([nt.listUsers(),nt.listHotels(),nt.listDevices(),nt.listNotificationsInbox(),nt.listSentNotifications(),nt.listNotificationRecipients()]);s(F),c(q),h(Me),ue($e),B(at),Oe(ft)}catch(F){alert(F.message||"Chargement impossible")}finally{A(!1)}};j.useEffect(()=>{Ce()},[]);const He=j.useMemo(()=>{const F=f.trim().toLowerCase();return t.filter(q=>{var Me;return`${q.fullName} ${q.email} ${Lc[q.role]} ${((Me=q.hotel)==null?void 0:Me.name)||""}`.toLowerCase().includes(F)})},[t,f]),Et=j.useMemo(()=>{const F=f.trim().toLowerCase();return a.filter(q=>`${q.name} ${q.city} ${q.address}`.toLowerCase().includes(F))},[a,f]),it=j.useMemo(()=>{const F=f.trim().toLowerCase();return d.filter(q=>{var ft;const Me=`${q.model||""} ${q.macAddress} ${q.localIp||""} ${((ft=q.hotel)==null?void 0:ft.name)||""}`.toLowerCase().includes(F),$e=v==="all"||q.hotelId===v,at=g==="all"||q.status===g;return Me&&$e&&at})},[d,f,v,g]),Qe=j.useMemo(()=>{const F=d.filter(q=>q.status==="ONLINE").length;return{users:t.length,hotels:a.length,devices:d.length,onlineDevices:F}},[t,a,d]),_t=j.useMemo(()=>{const F=W.trim().toLowerCase();return F?$.filter(q=>{var Me,$e;return`${q.title} ${q.message} ${((Me=q.sender)==null?void 0:Me.fullName)||""} ${(($e=q.hotel)==null?void 0:$e.name)||""}`.toLowerCase().includes(F)}):$},[$,W]),ht=j.useMemo(()=>$.filter(F=>{var q,Me;return!((Me=(q=F.recipients)==null?void 0:q[0])!=null&&Me.readAt)}).length,[$]),jt=async()=>{await Mi.logout(),i(st.public.login)},Bt=F=>{w(q=>({...q,role:F,hotelId:Ic.includes(F)?q.hotelId:""}))},hn=()=>{U(null),w(Xh),X("user")},ee=()=>{G(null),I($h),X("hotel")},zt=()=>{H(null),k(qh),X("device")},pt=()=>{X(null),U(null),G(null),H(null),w(Xh),I($h),k(qh)},Dt=async F=>{if(F.preventDefault(),Ic.includes(b.role)&&!b.hotelId){alert("Sélectionnez un hôtel pour ce rôle.");return}if(!T&&b.password.length<8){alert("Le mot de passe doit contenir au moins 8 caractères.");return}try{S(!0);const q={fullName:b.fullName,email:b.email,role:b.role,hotelId:Ic.includes(b.role)?b.hotelId:"",isActive:!0,...b.password?{password:b.password}:{}};T?await nt.updateUser(T,q):await nt.createUser(q),pt(),await Ce()}catch(q){alert(q.message||"Enregistrement utilisateur impossible")}finally{S(!1)}},ke=async F=>{F.preventDefault();try{S(!0);const q={...N,amenities:[],photos:[],status:"ACTIVE"};Y?await nt.updateHotel(Y,q):await nt.createHotel(q),pt(),await Ce()}catch(q){alert(q.message||"Enregistrement hôtel impossible")}finally{S(!1)}},Vt=async F=>{if(F.preventDefault(),!L.hotelId){alert("Sélectionnez un hôtel.");return}try{S(!0);const q={hotelId:L.hotelId,macAddress:L.macAddress,model:L.model||void 0,serialNumber:L.serialNumber||void 0,localIp:L.localIp||void 0,zone:L.zone||void 0,floor:L.floor?Number(L.floor):void 0};J?await nt.updateDevice(J,q):await nt.createDevice(q),pt(),await Ce()}catch(q){alert(q.message||"Enregistrement équipement impossible")}finally{S(!1)}},D=F=>{X("user"),U(F.id),w({fullName:F.fullName,email:F.email,password:"",role:F.role,hotelId:F.hotelId||""})},C=F=>{X("hotel"),G(F.id),I({name:F.name,city:F.city,country:F.country,address:F.address,description:F.description||""})},ae=F=>{X("device"),H(F.id),k({hotelId:F.hotelId,macAddress:F.macAddress,model:F.model||"",serialNumber:F.serialNumber||"",localIp:F.localIp||"",zone:F.zone||"",floor:F.floor!=null?String(F.floor):""})},_e=async F=>{if(confirm(`Désactiver ${F.email} ?`))try{await nt.deactivateUser(F.id),await Ce()}catch(q){alert(q.message||"Désactivation impossible")}},Ee=async F=>{if(confirm(`Supprimer ${F.name} ?`))try{await nt.deleteHotel(F.id),await Ce()}catch(q){alert(q.message||"Suppression impossible")}},Ne=F=>{Re(q=>({...q,userIds:q.userIds.includes(F)?q.userIds.filter(Me=>Me!==F):[...q.userIds,F]}))},Ue=F=>{Re(q=>({...q,targetMode:F,userIds:[]}))},ge=async F=>{if(F.preventDefault(),Te.targetMode==="HOTEL"&&!Te.hotelId){alert("Sélectionnez un hôtel.");return}if(Te.targetMode==="USERS"&&Te.userIds.length===0){alert("Sélectionnez au moins un destinataire.");return}try{xe(!0),await nt.createNotification({title:Te.title,message:Te.message,priority:Te.priority,category:Te.category,targetMode:Te.targetMode,hotelId:Te.hotelId,role:Te.role,userIds:Te.userIds}),Re(L0),await Ce(),V("sent")}catch(q){alert(q.message||"Envoi impossible")}finally{xe(!1)}},ye=async F=>{var q,Me;if(!((Me=(q=F.recipients)==null?void 0:q[0])!=null&&Me.readAt))try{await nt.markNotificationRead(F.id),await Ce()}catch($e){alert($e.message||"Action impossible")}},je=()=>{const F=new Date().toLocaleString("fr-FR",{day:"2-digit",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"}),q=(e==null?void 0:e.fullName)||(e==null?void 0:e.email)||"Administrateur MboaLink",Me=a.filter(rt=>rt.status==="ACTIVE").length,$e=d.filter(rt=>rt.status==="ONLINE").length,at=t.filter(rt=>!rt.isActive).length,ft=new URL(fR,window.location.origin).href,Z=t.slice(0,12).map(rt=>{var bt;return`
      <tr>
        <td>${zn(rt.fullName)}</td>
        <td>${zn(rt.email)}</td>
        <td>${zn(Lc[rt.role])}</td>
        <td>${zn(((bt=rt.hotel)==null?void 0:bt.name)||"Plateforme")}</td>
        <td><span class="pill ${rt.isActive?"ok":"muted"}">${rt.isActive?"Actif":"Inactif"}</span></td>
      </tr>
    `}).join(""),Pe=a.slice(0,10).map(rt=>`
      <tr>
        <td>${zn(rt.name)}</td>
        <td>${zn(rt.city)}</td>
        <td>${zn(rt.address)}</td>
        <td><span class="pill ${rt.status==="ACTIVE"?"ok":"warn"}">${zn(rt.status)}</span></td>
      </tr>
    `).join(""),ve=d.slice(0,12).map(rt=>{var bt;return`
      <tr>
        <td>${zn(rt.model||rt.serialNumber||rt.macAddress)}</td>
        <td>${zn(((bt=rt.hotel)==null?void 0:bt.name)||"-")}</td>
        <td>${zn(rt.localIp||"-")}</td>
        <td>${zn(rt.zone||"-")}</td>
        <td><span class="pill ${rt.status==="ONLINE"?"ok":rt.status==="UNSTABLE"?"warn":"muted"}">${zn(rt.status)}</span></td>
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
        <span>${zn(F)}</span>
        <strong style="margin-top:12px;">Par</strong>
        <span>${zn(q)}</span>
      </aside>
    </section>

    <section class="content">
      <div class="sectionTitle">
        <h2>Indicateurs clés</h2>
        <span>MboaLink Admin</span>
      </div>
      <div class="kpis">
        <div class="kpi"><strong>${Qe.users}</strong><span>Utilisateurs</span></div>
        <div class="kpi"><strong>${Me}/${Qe.hotels}</strong><span>Hôtels actifs</span></div>
        <div class="kpi"><strong>${$e}/${Qe.devices}</strong><span>Équipements en ligne</span></div>
        <div class="kpi"><strong>${ht}</strong><span>Notifications non lues</span></div>
      </div>

      <div class="summary">
        <div class="box">
          <h3>Résumé exécutif</h3>
          <p>MboaLink dispose actuellement de ${Qe.users} utilisateur(s), ${Qe.hotels} hôtel(s) et ${Qe.devices} équipement(s) réseau déclaré(s). Les modules administrateur, notifications internes, équipements réseau et portail captif sont centralisés dans l'espace super admin.</p>
        </div>
        <div class="box">
          <h3>Points d'attention</h3>
          <ul>
            <li>${at} utilisateur(s) inactif(s) à vérifier.</li>
            <li>${Qe.devices-$e} équipement(s) hors ligne ou instable(s).</li>
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
        <tbody>${Pe||'<tr><td colspan="4">Aucun hôtel enregistré.</td></tr>'}</tbody>
      </table>

      <div class="sectionTitle"><h2>Équipements réseau</h2><span>${d.length} entrée(s)</span></div>
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
</html>`,Le=document.getElementById("mboalink-report-print-frame");Le==null||Le.remove();const Se=document.createElement("iframe");Se.id="mboalink-report-print-frame",Se.title="Rapport MboaLink PDF",Se.style.position="fixed",Se.style.right="0",Se.style.bottom="0",Se.style.width="0",Se.style.height="0",Se.style.border="0",Se.style.opacity="0",document.body.appendChild(Se);const We=Se.contentWindow,ct=We==null?void 0:We.document;if(!We||!ct){Se.remove(),alert("Impossible de préparer le PDF. Réessayez depuis le navigateur.");return}ct.open(),ct.write(ze),ct.close(),setTimeout(()=>{We.focus(),We.print(),setTimeout(()=>Se.remove(),1200)},500)};return o.jsxs("div",{className:"mboaAdminShell",children:[o.jsxs("aside",{className:"mboaAdminSidebar",children:[o.jsx("div",{className:"mboaAdminBrand",children:o.jsx("img",{src:hp,alt:"MboaLink"})}),o.jsxs("nav",{className:"mboaAdminNav","aria-label":"Administration MboaLink",children:[o.jsx("span",{children:"Menu principal"}),o.jsxs("a",{href:"#overview",className:"active",children:[o.jsx(nE,{size:18}),"Tableau de bord"]}),o.jsxs("a",{href:"#users",children:[o.jsx(ah,{size:18}),"Utilisateurs"]}),o.jsxs("a",{href:"#hotels",children:[o.jsx(af,{size:18}),"Hôtels"]}),o.jsxs("a",{href:"#devices",children:[o.jsx(Bo,{size:18}),"Équipements réseau"]}),o.jsxs("a",{href:"#codes",children:[o.jsx(Fo,{size:18}),"Codes WiFi"]}),o.jsxs("a",{href:"#connections",children:[o.jsx(rh,{size:18}),"Connexions"]}),o.jsxs("a",{href:"#admin-notifications",children:[o.jsx(_x,{size:18}),"Notifications"]}),o.jsxs("a",{href:"#reports",children:[o.jsx(yx,{size:18}),"Rapports"]}),o.jsxs("a",{href:"#settings",children:[o.jsx(Ex,{size:18}),"Paramètres"]}),o.jsx("span",{children:"Système"}),o.jsxs("a",{href:"#roles",children:[o.jsx(rE,{size:18}),"Rôles & Permissions"]}),o.jsxs("a",{href:"/api-docs",target:"_blank",rel:"noreferrer",children:[o.jsx(ih,{size:18}),"API Swagger"]}),o.jsxs("a",{href:"#integrations",children:[o.jsx(jc,{size:18}),"Intégrations"]})]}),o.jsx("div",{className:"mboaAdminFooter",children:"MboaLink © 2025"})]}),o.jsxs("main",{className:"mboaAdminMain",children:[o.jsxs("header",{className:"mboaAdminTopbar",children:[o.jsxs("div",{children:[o.jsx("h1",{children:"Bonjour, Administrateur"}),o.jsx("p",{children:"Voici l'aperçu de votre plateforme MboaLink"})]}),o.jsxs("div",{className:"mboaAdminTopActions",children:[o.jsxs("div",{className:"mboaAdminSearch",children:[o.jsx(mE,{size:16}),o.jsx("input",{value:f,onChange:F=>m(F.target.value),placeholder:"Rechercher..."})]}),o.jsxs("button",{className:"mboaAdminIconButton",type:"button",children:[o.jsx(_x,{size:18}),o.jsx("span",{children:Qe.users})]}),o.jsxs("div",{className:"mboaAdminProfile",children:[o.jsx("div",{className:"mboaAdminAvatar",children:Xv((e==null?void 0:e.fullName)||(e==null?void 0:e.email)||"Admin")}),o.jsxs("div",{children:[o.jsx("strong",{children:(e==null?void 0:e.fullName)||"Administrateur"}),o.jsx("small",{children:"Super Admin"})]}),o.jsx("button",{type:"button",onClick:jt,title:"Déconnexion",children:o.jsx(aE,{size:16})})]})]})]}),o.jsxs("section",{id:"overview",className:"mboaAdminStats",children:[o.jsxs("article",{children:[o.jsx(ah,{size:20}),o.jsx("strong",{children:Qe.users}),o.jsx("span",{children:"Utilisateurs"})]}),o.jsxs("article",{children:[o.jsx(sf,{size:20}),o.jsx("strong",{children:Qe.hotels}),o.jsx("span",{children:"Hôtels"})]}),o.jsxs("article",{children:[o.jsx(Bo,{size:20}),o.jsx("strong",{children:Qe.devices}),o.jsx("span",{children:"Équipements réseau"})]}),o.jsxs("article",{children:[o.jsx(Fo,{size:20}),o.jsx("strong",{children:Qe.onlineDevices}),o.jsx("span",{children:"Équipements en ligne"})]})]}),o.jsxs("section",{id:"users",className:`mboaAdminSection ${Q==="user"?"hasForm":""}`,children:[o.jsxs("div",{className:"mboaAdminDataPanel",children:[o.jsx(Zr,{title:"Gestion des utilisateurs",subtitle:"Liste de tous les utilisateurs du système",actionLabel:"Nouvel utilisateur",onAction:hn}),o.jsxs("table",{className:"mboaAdminTable",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Nom complet"}),o.jsx("th",{children:"Email"}),o.jsx("th",{children:"Rôle"}),o.jsx("th",{children:"Statut"}),o.jsx("th",{children:"Hôtel"}),o.jsx("th",{children:"Actions"})]})}),o.jsx("tbody",{children:He.map(F=>{var q;return o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx(pR,{name:F.fullName})}),o.jsx("td",{children:F.email}),o.jsx("td",{children:o.jsx("span",{className:`mboaRoleBadge role-${F.role.toLowerCase()}`,children:Lc[F.role]})}),o.jsx("td",{children:o.jsx("span",{className:`mboaStatusBadge ${F.isActive?"active":"inactive"}`,children:F.isActive?"Actif":"Inactif"})}),o.jsx("td",{children:((q=F.hotel)==null?void 0:q.name)||"Plateforme"}),o.jsx("td",{children:o.jsx(Kh,{onEdit:()=>D(F),onDelete:()=>_e(F),deleteTitle:"Désactiver"})})]},F.id)})})]}),o.jsx(Yh,{count:He.length,label:"utilisateur"})]}),Q==="user"&&o.jsxs("form",{className:"mboaAdminFormPanel",onSubmit:Dt,children:[o.jsxs("div",{className:"mboaFormHeader",children:[o.jsx("h2",{children:T?"Modifier utilisateur":"Nouvel utilisateur"}),o.jsx("button",{type:"button",onClick:pt,children:"Fermer"})]}),o.jsxs("label",{children:["Nom complet",o.jsx("input",{value:b.fullName,onChange:F=>w(q=>({...q,fullName:F.target.value})),required:!0})]}),o.jsxs("label",{children:["Email",o.jsx("input",{type:"email",value:b.email,onChange:F=>w(q=>({...q,email:F.target.value})),required:!0})]}),o.jsxs("label",{children:["Rôle",o.jsx("select",{value:b.role,onChange:F=>Bt(F.target.value),children:Object.entries(Lc).map(([F,q])=>o.jsx("option",{value:F,children:q},F))})]}),Ic.includes(b.role)&&o.jsxs("label",{children:["Hôtel",o.jsxs("select",{value:b.hotelId,onChange:F=>w(q=>({...q,hotelId:F.target.value})),required:!0,children:[o.jsx("option",{value:"",children:"Sélectionner un hôtel"}),a.map(F=>o.jsx("option",{value:F.id,children:F.name},F.id))]})]}),o.jsxs("label",{children:["Mot de passe",o.jsx("input",{type:"password",value:b.password,onChange:F=>w(q=>({...q,password:F.target.value})),required:!T})]}),o.jsxs("button",{className:"mboaPrimaryButton",disabled:y,children:[o.jsx(sh,{size:16}),T?"Enregistrer l'utilisateur":"Créer l'utilisateur"]})]})]}),o.jsxs("section",{id:"hotels",className:`mboaAdminSection ${Q==="hotel"?"hasForm":""}`,children:[o.jsxs("div",{className:"mboaAdminDataPanel",children:[o.jsx(Zr,{title:"Gestion des hôtels",subtitle:"Liste de tous les hôtels enregistrés",actionLabel:"Nouvel hôtel",onAction:ee}),o.jsxs("table",{className:"mboaAdminTable",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Nom de l'hôtel"}),o.jsx("th",{children:"Ville"}),o.jsx("th",{children:"Adresse"}),o.jsx("th",{children:"Statut"}),o.jsx("th",{children:"Date création"}),o.jsx("th",{children:"Actions"})]})}),o.jsx("tbody",{children:Et.map(F=>o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("strong",{children:F.name})}),o.jsx("td",{children:F.city}),o.jsx("td",{children:F.address}),o.jsx("td",{children:o.jsx("span",{className:"mboaStatusBadge active",children:F.status==="ACTIVE"?"Actif":F.status})}),o.jsx("td",{children:Dc(F.createdAt)}),o.jsx("td",{children:o.jsx(Kh,{onEdit:()=>C(F),onDelete:()=>Ee(F)})})]},F.id))})]}),o.jsx(Yh,{count:Et.length,label:"hôtel"})]}),Q==="hotel"&&o.jsxs("form",{className:"mboaAdminFormPanel",onSubmit:ke,children:[o.jsxs("div",{className:"mboaFormHeader",children:[o.jsx("h2",{children:Y?"Modifier hôtel":"Nouvel hôtel"}),o.jsx("button",{type:"button",onClick:pt,children:"Fermer"})]}),o.jsxs("label",{children:["Nom de l'hôtel",o.jsx("input",{value:N.name,onChange:F=>I(q=>({...q,name:F.target.value})),required:!0})]}),o.jsxs("div",{className:"mboaFormGrid",children:[o.jsxs("label",{children:["Ville",o.jsx("input",{value:N.city,onChange:F=>I(q=>({...q,city:F.target.value})),required:!0})]}),o.jsxs("label",{children:["Pays",o.jsx("input",{value:N.country,onChange:F=>I(q=>({...q,country:F.target.value})),required:!0})]})]}),o.jsxs("label",{children:["Adresse",o.jsx("input",{value:N.address,onChange:F=>I(q=>({...q,address:F.target.value})),required:!0})]}),o.jsxs("label",{children:["Description",o.jsx("textarea",{value:N.description,onChange:F=>I(q=>({...q,description:F.target.value}))})]}),o.jsxs("button",{className:"mboaPrimaryButton",disabled:y,children:[o.jsx(sh,{size:16}),Y?"Enregistrer l'hôtel":"Créer l'hôtel"]})]})]}),o.jsxs("section",{id:"devices",className:`mboaAdminSection ${Q==="device"?"hasForm":""}`,children:[o.jsxs("div",{className:"mboaAdminDataPanel",children:[o.jsxs("div",{className:"mboaPanelHeader",children:[o.jsxs("div",{children:[o.jsx("h2",{children:"Gestion des équipements réseau"}),o.jsx("p",{children:"Routeurs, switchs, points d'accès et contrôleurs par hôtel"})]}),o.jsxs("div",{className:"mboaPanelFilters",children:[o.jsxs("select",{value:v,onChange:F=>x(F.target.value),children:[o.jsx("option",{value:"all",children:"Tous les hôtels"}),a.map(F=>o.jsx("option",{value:F.id,children:F.name},F.id))]}),o.jsxs("select",{value:g,onChange:F=>M(F.target.value),children:[o.jsx("option",{value:"all",children:"Tous les statuts"}),o.jsx("option",{value:"ONLINE",children:"En ligne"}),o.jsx("option",{value:"OFFLINE",children:"Hors ligne"}),o.jsx("option",{value:"UNSTABLE",children:"Instable"})]}),o.jsx("button",{type:"button",onClick:zt,children:"Nouvel équipement"})]})]}),o.jsxs("table",{className:"mboaAdminTable",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Nom de l'équipement"}),o.jsx("th",{children:"Type"}),o.jsx("th",{children:"Hôtel"}),o.jsx("th",{children:"Adresse IP"}),o.jsx("th",{children:"Statut"}),o.jsx("th",{children:"Dernier heartbeat"}),o.jsx("th",{children:"Actions"})]})}),o.jsx("tbody",{children:it.map(F=>{var q,Me,$e;return o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("strong",{children:F.model||F.serialNumber||F.macAddress})}),o.jsx("td",{children:(q=F.model)!=null&&q.toLowerCase().includes("switch")?"Switch":(Me=F.model)!=null&&Me.toLowerCase().includes("router")?"Routeur":"Point d'accès"}),o.jsx("td",{children:(($e=F.hotel)==null?void 0:$e.name)||"-"}),o.jsx("td",{children:F.localIp||"-"}),o.jsx("td",{children:o.jsx("span",{className:`mboaStatusBadge ${F.status.toLowerCase()}`,children:F.status==="ONLINE"?"En ligne":F.status==="UNSTABLE"?"Instable":"Hors ligne"})}),o.jsx("td",{children:Dc(F.lastHeartbeatAt)}),o.jsx("td",{children:o.jsx(Kh,{onEdit:()=>ae(F),onDelete:()=>alert("Suppression équipement à valider côté backend.")})})]},F.id)})})]}),o.jsx(Yh,{count:it.length,label:"équipement"})]}),Q==="device"&&o.jsxs("form",{className:"mboaAdminFormPanel",onSubmit:Vt,children:[o.jsxs("div",{className:"mboaFormHeader",children:[o.jsx("h2",{children:J?"Modifier équipement réseau":"Nouvel équipement réseau"}),o.jsx("button",{type:"button",onClick:pt,children:"Fermer"})]}),o.jsxs("label",{children:["Hôtel",o.jsxs("select",{value:L.hotelId,onChange:F=>k(q=>({...q,hotelId:F.target.value})),required:!0,children:[o.jsx("option",{value:"",children:"Sélectionner un hôtel"}),a.map(F=>o.jsx("option",{value:F.id,children:F.name},F.id))]})]}),o.jsxs("label",{children:["Nom / modèle",o.jsx("input",{value:L.model,onChange:F=>k(q=>({...q,model:F.target.value})),placeholder:"AP-RECEPTION-01"})]}),o.jsxs("label",{children:["Adresse MAC",o.jsx("input",{value:L.macAddress,onChange:F=>k(q=>({...q,macAddress:F.target.value})),disabled:!!J,required:!0})]}),o.jsxs("label",{children:["Adresse IP",o.jsx("input",{value:L.localIp,onChange:F=>k(q=>({...q,localIp:F.target.value})),placeholder:"192.168.1.100"})]}),o.jsxs("div",{className:"mboaFormGrid",children:[o.jsxs("label",{children:["Zone",o.jsx("input",{value:L.zone,onChange:F=>k(q=>({...q,zone:F.target.value}))})]}),o.jsxs("label",{children:["Étage",o.jsx("input",{type:"number",value:L.floor,onChange:F=>k(q=>({...q,floor:F.target.value}))})]})]}),o.jsxs("button",{className:"mboaPrimaryButton",disabled:y,children:[o.jsx(sh,{size:16}),J?"Enregistrer l'équipement":"Créer l'équipement"]})]})]}),o.jsxs("section",{id:"codes",className:"mboaAdminUtilitySection",children:[o.jsx(Zr,{title:"Codes WiFi",subtitle:"Pilotage global des accès clients par hôtel",actionLabel:"Voir les codes",onAction:()=>x("all")}),o.jsxs("div",{className:"mboaUtilityGrid",children:[o.jsx(Hn,{icon:o.jsx(eE,{size:18}),title:"Codes actifs",value:`${Qe.users}`,detail:"Les codes restent administrés depuis les hôtels concernés."}),o.jsx(Hn,{icon:o.jsx(af,{size:18}),title:"Filtrage hôtel",value:a.length?"Disponible":"À configurer",detail:"Le super admin conserve la vue globale et peut filtrer par hôtel."}),o.jsx(Hn,{icon:o.jsx(jc,{size:18}),title:"Contrôle",value:"Admin",detail:"Création, révocation et suivi seront consolidés ici."})]})]}),o.jsxs("section",{id:"connections",className:"mboaAdminUtilitySection",children:[o.jsx(Zr,{title:"Connexions",subtitle:"Suivi administrateur des clients connectés, hors ligne ou expirés",actionLabel:"Actualiser",onAction:Ce}),o.jsxs("div",{className:"mboaUtilityGrid",children:[o.jsx(Hn,{icon:o.jsx(rh,{size:18}),title:"Équipements en ligne",value:String(Qe.onlineDevices),detail:"Indicateur réseau disponible depuis les équipements remontés."}),o.jsx(Hn,{icon:o.jsx(Fo,{size:18}),title:"Hôtels couverts",value:String(Qe.hotels),detail:"Les connexions seront filtrables par hôtel dans cette section."}),o.jsx(Hn,{icon:o.jsx(yx,{size:18}),title:"Historique",value:"Prévu",detail:"Journal des sessions et expirations à consolider côté API."})]})]}),o.jsxs("section",{id:"admin-notifications",className:"mboaAdminUtilitySection",children:[o.jsxs("div",{className:"mboaNotificationHeader",children:[o.jsxs("div",{children:[o.jsx("h2",{children:"Notifications internes"}),o.jsx("p",{children:"Messages de service, maintenances, consignes et alertes internes MboaLink."})]}),o.jsxs("div",{className:"notificationCounter",children:[o.jsx("strong",{children:ht}),o.jsxs("span",{children:["non lue",ht!==1?"s":""]})]})]}),o.jsxs("div",{className:"notificationsGrid mboaAdminNotificationsGrid",children:[o.jsxs("form",{className:"notificationComposer",onSubmit:ge,children:[o.jsx("h2",{children:"Nouveau message"}),o.jsxs("label",{children:["Titre",o.jsx("input",{value:Te.title,onChange:F=>Re(q=>({...q,title:F.target.value})),required:!0,maxLength:140,placeholder:"Ex : Maintenance programmée"})]}),o.jsxs("label",{children:["Message",o.jsx("textarea",{value:Te.message,onChange:F=>Re(q=>({...q,message:F.target.value})),required:!0,maxLength:4e3,rows:6,placeholder:"Détaillez la consigne ou l'incident..."})]}),o.jsxs("div",{className:"notificationFormRow",children:[o.jsxs("label",{children:["Priorité",o.jsx("select",{value:Te.priority,onChange:F=>Re(q=>({...q,priority:F.target.value})),children:Object.entries(Wh).map(([F,q])=>o.jsx("option",{value:F,children:q},F))})]}),o.jsxs("label",{children:["Catégorie",o.jsx("input",{value:Te.category,onChange:F=>Re(q=>({...q,category:F.target.value})),placeholder:"Maintenance, incident..."})]})]}),o.jsxs("label",{children:["Destinataires",o.jsxs("select",{value:Te.targetMode,onChange:F=>Ue(F.target.value),children:[o.jsx("option",{value:"ALL",children:"Tous les acteurs"}),o.jsx("option",{value:"HOTEL",children:"Acteurs d'un hôtel"}),o.jsx("option",{value:"ROLE",children:"Un rôle précis"}),o.jsx("option",{value:"USERS",children:"Utilisateurs précis"})]})]}),Te.targetMode==="HOTEL"&&o.jsxs("label",{children:["Hôtel",o.jsxs("select",{value:Te.hotelId,onChange:F=>Re(q=>({...q,hotelId:F.target.value})),required:!0,children:[o.jsx("option",{value:"",children:"Sélectionner un hôtel"}),a.map(F=>o.jsx("option",{value:F.id,children:F.name},F.id))]})]}),Te.targetMode==="ROLE"&&o.jsxs("label",{children:["Rôle",o.jsx("select",{value:Te.role,onChange:F=>Re(q=>({...q,role:F.target.value})),children:Object.entries(P0).map(([F,q])=>o.jsx("option",{value:F,children:q},F))})]}),Te.targetMode==="USERS"&&o.jsx("div",{className:"recipientPicker",children:re.map(F=>{var q;return o.jsxs("label",{className:"recipientOption",children:[o.jsx("input",{type:"checkbox",checked:Te.userIds.includes(F.id),onChange:()=>Ne(F.id)}),o.jsxs("span",{children:[o.jsx("strong",{children:F.fullName}),o.jsxs("small",{children:[P0[F.role]||F.role,(q=F.hotel)!=null&&q.name?` - ${F.hotel.name}`:""]})]})]},F.id)})}),o.jsx("button",{className:"btn btnPrimary",disabled:fe,children:fe?"Envoi...":"Envoyer la notification"})]}),o.jsxs("section",{className:"notificationPanel",children:[o.jsxs("div",{className:"notificationTabs",children:[o.jsx("button",{type:"button",className:O==="inbox"?"active":"",onClick:()=>V("inbox"),children:"Réception"}),o.jsx("button",{type:"button",className:O==="sent"?"active":"",onClick:()=>V("sent"),children:"Envoyés"}),o.jsx("input",{value:W,onChange:F=>me(F.target.value),placeholder:"Rechercher..."})]}),E&&o.jsx("p",{className:"notificationEmpty",children:"Chargement..."}),!E&&O==="inbox"&&o.jsx("div",{className:"notificationList",children:_t.length===0?o.jsx("p",{className:"notificationEmpty",children:"Aucune notification reçue."}):_t.map(F=>{var Me,$e,at,ft;const q=!(($e=(Me=F.recipients)==null?void 0:Me[0])!=null&&$e.readAt);return o.jsxs("article",{className:`notificationItem ${F.priority.toLowerCase()} ${q?"unread":""}`,children:[o.jsxs("div",{className:"notificationItemTop",children:[o.jsx("span",{className:`priorityBadge ${F.priority.toLowerCase()}`,children:Wh[F.priority]}),o.jsx("small",{children:Dc(F.createdAt)})]}),o.jsx("h3",{children:F.title}),o.jsx("p",{children:F.message}),o.jsxs("div",{className:"notificationMeta",children:[o.jsxs("span",{children:["De : ",((at=F.sender)==null?void 0:at.fullName)||"Système"]}),((ft=F.hotel)==null?void 0:ft.name)&&o.jsxs("span",{children:["Hôtel : ",F.hotel.name]}),F.category&&o.jsx("span",{children:F.category})]}),q&&o.jsx("button",{type:"button",className:"markReadBtn",onClick:()=>ye(F),children:"Marquer comme lu"})]},F.id)})}),!E&&O==="sent"&&o.jsx("div",{className:"notificationList",children:se.length===0?o.jsx("p",{className:"notificationEmpty",children:"Aucun message envoyé."}):se.map(F=>{var q;return o.jsxs("article",{className:`notificationItem ${F.priority.toLowerCase()}`,children:[o.jsxs("div",{className:"notificationItemTop",children:[o.jsx("span",{className:`priorityBadge ${F.priority.toLowerCase()}`,children:Wh[F.priority]}),o.jsx("small",{children:Dc(F.createdAt)})]}),o.jsx("h3",{children:F.title}),o.jsx("p",{children:F.message}),o.jsxs("div",{className:"notificationMeta",children:[o.jsxs("span",{children:[F.recipients.length," destinataire",F.recipients.length!==1?"s":""]}),((q=F.hotel)==null?void 0:q.name)&&o.jsxs("span",{children:["Hôtel : ",F.hotel.name]})]})]},F.id)})})]})]})]}),o.jsxs("section",{id:"reports",className:"mboaAdminUtilitySection",children:[o.jsx(Zr,{title:"Rapports",subtitle:"Vue de synthèse pour suivre l'exploitation MboaLink",actionLabel:"Exporter",onAction:je}),o.jsxs("div",{className:"mboaUtilityGrid",children:[o.jsx(Hn,{icon:o.jsx(ah,{size:18}),title:"Utilisateurs",value:String(Qe.users),detail:"Volume total d'acteurs enregistrés."}),o.jsx(Hn,{icon:o.jsx(sf,{size:18}),title:"Hôtels",value:String(Qe.hotels),detail:"Hôtels actifs dans la plateforme."}),o.jsx(Hn,{icon:o.jsx(Bo,{size:18}),title:"Réseau",value:String(Qe.devices),detail:"Équipements déclarés dans MboaLink."})]})]}),o.jsxs("section",{id:"settings",className:"mboaAdminUtilitySection",children:[o.jsx(Zr,{title:"Paramètres",subtitle:"Configuration globale de la plateforme",actionLabel:"Enregistrer",onAction:()=>alert("Paramètres globaux à connecter à une API dédiée.")}),o.jsxs("div",{className:"mboaUtilityGrid",children:[o.jsx(Hn,{icon:o.jsx(Ex,{size:18}),title:"Environnement",value:"Production",detail:"Paramètres applicatifs et valeurs de déploiement."}),o.jsx(Hn,{icon:o.jsx(ih,{size:18}),title:"Base de données",value:"PostgreSQL",detail:"Postgres stabilisé avec initialisation durable du mot de passe."}),o.jsx(Hn,{icon:o.jsx(jc,{size:18}),title:"Sécurité",value:"Rôles",detail:"Accès séparés entre admin, support, IT hôtel et réception."})]})]}),o.jsxs("section",{id:"roles",className:"mboaAdminUtilitySection",children:[o.jsx(Zr,{title:"Rôles & Permissions",subtitle:"Résumé des droits principaux",actionLabel:"Synchroniser",onAction:Ce}),o.jsxs("div",{className:"mboaPermissionList",children:[o.jsx(Uc,{role:"ADMIN",description:"Super admin MboaLink, gestion complète depuis cette interface."}),o.jsx(Uc,{role:"SUPPORT",description:"Vue opérationnelle sans Hotel Manager ni Device Manager."}),o.jsx(Uc,{role:"HOTEL_IT",description:"Gestion technique limitée à son hôtel."}),o.jsx(Uc,{role:"RECEPTIONIST",description:"Accès limité à Manual Login pour son hôtel."})]})]}),o.jsxs("section",{id:"integrations",className:"mboaAdminUtilitySection",children:[o.jsx(Zr,{title:"Intégrations",subtitle:"Services connectés à MboaLink",actionLabel:"Tester",onAction:()=>alert("Tests d’intégration à connecter aux endpoints de santé.")}),o.jsxs("div",{className:"mboaUtilityGrid",children:[o.jsx(Hn,{icon:o.jsx(ih,{size:18}),title:"Swagger API",value:"Disponible",detail:"Documentation backend accessible via /api-docs."}),o.jsx(Hn,{icon:o.jsx(Fo,{size:18}),title:"FreeRADIUS",value:"En cours",detail:"Intégration réseau à stabiliser avec l'équipe radius."}),o.jsx(Hn,{icon:o.jsx(rh,{size:18}),title:"Portail captif",value:"Actif",detail:"Authentification client par UUID, code WiFi, nom et chambre."})]})]}),E&&o.jsx("div",{className:"mboaLoading",children:"Chargement de l'administration..."})]})]})}function Zr({title:i,subtitle:e,actionLabel:t,onAction:s}){return o.jsxs("div",{className:"mboaPanelHeader",children:[o.jsxs("div",{children:[o.jsx("h2",{children:i}),o.jsx("p",{children:e})]}),o.jsx("button",{type:"button",onClick:s,children:t})]})}function Yh({count:i,label:e}){return o.jsxs("div",{className:"mboaPanelFooter",children:["Affichage de 1 à ",i," sur ",i," ",e,i>1?"s":""]})}function pR({name:i}){return o.jsxs("div",{className:"mboaUserCell",children:[o.jsx("span",{children:Xv(i)}),o.jsx("strong",{children:i})]})}function Kh({onEdit:i,onDelete:e,deleteTitle:t="Supprimer"}){return o.jsxs("div",{className:"mboaRowActions",children:[o.jsx("button",{type:"button",onClick:i,title:"Modifier",children:o.jsx(cE,{size:15})}),o.jsx("button",{type:"button",onClick:e,title:t,className:"danger",children:o.jsx(SE,{size:15})})]})}function Hn({icon:i,title:e,value:t,detail:s}){return o.jsxs("article",{className:"mboaUtilityCard",children:[o.jsx("span",{children:i}),o.jsx("strong",{children:t}),o.jsx("h3",{children:e}),o.jsx("p",{children:s})]})}function Uc({role:i,description:e}){return o.jsxs("div",{className:"mboaPermissionRow",children:[o.jsx("strong",{children:i}),o.jsx("span",{children:e})]})}const D0={ADMIN:"Admins MboaLink",SUPPORT:"Support IT MboaLink",HOTEL_IT:"IT hôtel",RECEPTIONIST:"Réceptionnistes"},Zh={INFO:"Information",WARNING:"Attention",URGENT:"Urgent"},Jh={title:"",message:"",priority:"INFO",category:"",targetMode:"ALL",hotelId:"",role:"RECEPTIONIST",userIds:[]};function U0(i){return new Date(i).toLocaleString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}function mR(){const i=Mi.getStoredUser(),e=(i==null?void 0:i.role)==="ADMIN"||(i==null?void 0:i.role)==="SUPPORT"||(i==null?void 0:i.role)==="HOTEL_IT",t=(i==null?void 0:i.role)==="HOTEL_IT",[s,a]=j.useState("inbox"),[c,d]=j.useState([]),[h,f]=j.useState([]),[m,v]=j.useState([]),[x,g]=j.useState([]),[M,E]=j.useState(Jh),[A,y]=j.useState(!0),[S,b]=j.useState(!1),[w,N]=j.useState(""),I=async()=>{try{const H=[nt.listNotificationsInbox(),nt.listNotificationRecipients()];e&&H.push(nt.listSentNotifications()),t||H.push(nt.listHotels());const[Q,X,O,V]=await Promise.all(H);d(Q),v(X),e&&f(O||[]),t?(g([]),E($=>({...$,targetMode:"HOTEL"}))):g((e?V:O)||[])}catch(H){alert(H.message||"Chargement des notifications impossible")}finally{y(!1)}};j.useEffect(()=>{I()},[]);const L=j.useMemo(()=>{const H=w.trim().toLowerCase();return H?c.filter(Q=>{var X,O;return`${Q.title} ${Q.message} ${((X=Q.sender)==null?void 0:X.fullName)||""} ${((O=Q.hotel)==null?void 0:O.name)||""}`.toLowerCase().includes(H)}):c},[c,w]),k=j.useMemo(()=>c.filter(H=>{var Q,X;return!((X=(Q=H.recipients)==null?void 0:Q[0])!=null&&X.readAt)}).length,[c]),T=H=>{E(Q=>({...Q,userIds:Q.userIds.includes(H)?Q.userIds.filter(X=>X!==H):[...Q.userIds,H]}))},U=H=>{E(Q=>({...Q,targetMode:H,userIds:[]}))},Y=async H=>{if(H.preventDefault(),!!e){if(M.targetMode==="HOTEL"&&!t&&!M.hotelId){alert("Sélectionnez un hôtel.");return}if(M.targetMode==="USERS"&&M.userIds.length===0){alert("Sélectionnez au moins un destinataire.");return}try{b(!0),await nt.createNotification({title:M.title,message:M.message,priority:M.priority,category:M.category,targetMode:M.targetMode,hotelId:M.hotelId,role:M.role,userIds:M.userIds}),E(t?{...Jh,targetMode:"HOTEL"}:Jh),await I(),a("sent")}catch(Q){alert(Q.message||"Envoi impossible")}finally{b(!1)}}},G=async H=>{var Q,X;if(!((X=(Q=H.recipients)==null?void 0:Q[0])!=null&&X.readAt))try{await nt.markNotificationRead(H.id),await I()}catch(O){alert(O.message||"Action impossible")}},J=h;return o.jsx(wr,{activePage:"NOTIFICATIONS",activeSubPage:"Messages",children:o.jsxs("div",{className:"notificationsPage",children:[o.jsxs("div",{className:"pageHeader",children:[o.jsxs("div",{children:[o.jsx("h1",{className:"pageTitle",children:"Notifications internes"}),o.jsx("p",{className:"pageSubtitle",children:"Messages de service, maintenances, consignes et alertes internes MboaLink."})]}),o.jsxs("div",{className:"notificationCounter",children:[o.jsx("strong",{children:k}),o.jsxs("span",{children:["non lue",k!==1?"s":""]})]})]}),o.jsxs("div",{className:"notificationsGrid",children:[e&&o.jsxs("form",{className:"notificationComposer",onSubmit:Y,children:[o.jsx("h2",{children:"Nouveau message"}),o.jsxs("label",{children:["Titre",o.jsx("input",{value:M.title,onChange:H=>E(Q=>({...Q,title:H.target.value})),required:!0,maxLength:140,placeholder:"Ex : Maintenance programmée"})]}),o.jsxs("label",{children:["Message",o.jsx("textarea",{value:M.message,onChange:H=>E(Q=>({...Q,message:H.target.value})),required:!0,maxLength:4e3,rows:6,placeholder:"Détaillez la consigne ou l'incident..."})]}),o.jsxs("div",{className:"notificationFormRow",children:[o.jsxs("label",{children:["Priorité",o.jsx("select",{value:M.priority,onChange:H=>E(Q=>({...Q,priority:H.target.value})),children:Object.entries(Zh).map(([H,Q])=>o.jsx("option",{value:H,children:Q},H))})]}),o.jsxs("label",{children:["Catégorie",o.jsx("input",{value:M.category,onChange:H=>E(Q=>({...Q,category:H.target.value})),placeholder:"Maintenance, incident..."})]})]}),o.jsxs("label",{children:["Destinataires",o.jsxs("select",{value:M.targetMode,onChange:H=>U(H.target.value),disabled:t,children:[!t&&o.jsx("option",{value:"ALL",children:"Tous les acteurs"}),o.jsx("option",{value:"HOTEL",children:t?"Réceptionnistes de mon hôtel":"Acteurs d’un hôtel"}),!t&&o.jsx("option",{value:"ROLE",children:"Un rôle précis"}),o.jsx("option",{value:"USERS",children:"Utilisateurs précis"})]})]}),M.targetMode==="HOTEL"&&!t&&o.jsxs("label",{children:["Hôtel",o.jsxs("select",{value:M.hotelId,onChange:H=>E(Q=>({...Q,hotelId:H.target.value})),required:!0,children:[o.jsx("option",{value:"",children:"Sélectionner un hôtel"}),x.map(H=>o.jsx("option",{value:H.id,children:H.name},H.id))]})]}),M.targetMode==="ROLE"&&o.jsxs("label",{children:["Rôle",o.jsx("select",{value:M.role,onChange:H=>E(Q=>({...Q,role:H.target.value})),children:Object.entries(D0).map(([H,Q])=>o.jsx("option",{value:H,children:Q},H))})]}),M.targetMode==="USERS"&&o.jsx("div",{className:"recipientPicker",children:m.map(H=>{var Q;return o.jsxs("label",{className:"recipientOption",children:[o.jsx("input",{type:"checkbox",checked:M.userIds.includes(H.id),onChange:()=>T(H.id)}),o.jsxs("span",{children:[o.jsx("strong",{children:H.fullName}),o.jsxs("small",{children:[D0[H.role]||H.role,(Q=H.hotel)!=null&&Q.name?` - ${H.hotel.name}`:""]})]})]},H.id)})}),o.jsx("button",{className:"btn btnPrimary",disabled:S,children:S?"Envoi...":"Envoyer la notification"})]}),o.jsxs("section",{className:"notificationPanel",children:[o.jsxs("div",{className:"notificationTabs",children:[o.jsx("button",{type:"button",className:s==="inbox"?"active":"",onClick:()=>a("inbox"),children:"Réception"}),e&&o.jsx("button",{type:"button",className:s==="sent"?"active":"",onClick:()=>a("sent"),children:"Envoyés"}),o.jsx("input",{value:w,onChange:H=>N(H.target.value),placeholder:"Rechercher..."})]}),A&&o.jsx("p",{className:"notificationEmpty",children:"Chargement..."}),!A&&s==="inbox"&&o.jsx("div",{className:"notificationList",children:L.length===0?o.jsx("p",{className:"notificationEmpty",children:"Aucune notification reçue."}):L.map(H=>{var X,O,V,$;const Q=!((O=(X=H.recipients)==null?void 0:X[0])!=null&&O.readAt);return o.jsxs("article",{className:`notificationItem ${H.priority.toLowerCase()} ${Q?"unread":""}`,children:[o.jsxs("div",{className:"notificationItemTop",children:[o.jsx("span",{className:`priorityBadge ${H.priority.toLowerCase()}`,children:Zh[H.priority]}),o.jsx("small",{children:U0(H.createdAt)})]}),o.jsx("h3",{children:H.title}),o.jsx("p",{children:H.message}),o.jsxs("div",{className:"notificationMeta",children:[o.jsxs("span",{children:["De : ",((V=H.sender)==null?void 0:V.fullName)||"Système"]}),(($=H.hotel)==null?void 0:$.name)&&o.jsxs("span",{children:["Hôtel : ",H.hotel.name]}),H.category&&o.jsx("span",{children:H.category})]}),Q&&o.jsx("button",{type:"button",className:"markReadBtn",onClick:()=>G(H),children:"Marquer comme lu"})]},H.id)})}),!A&&s==="sent"&&e&&o.jsx("div",{className:"notificationList",children:J.length===0?o.jsx("p",{className:"notificationEmpty",children:"Aucun message envoyé."}):J.map(H=>{var Q;return o.jsxs("article",{className:`notificationItem ${H.priority.toLowerCase()}`,children:[o.jsxs("div",{className:"notificationItemTop",children:[o.jsx("span",{className:`priorityBadge ${H.priority.toLowerCase()}`,children:Zh[H.priority]}),o.jsx("small",{children:U0(H.createdAt)})]}),o.jsx("h3",{children:H.title}),o.jsx("p",{children:H.message}),o.jsxs("div",{className:"notificationMeta",children:[o.jsxs("span",{children:[H.recipients.length," destinataire",H.recipients.length!==1?"s":""]}),((Q=H.hotel)==null?void 0:Q.name)&&o.jsxs("span",{children:["Hôtel : ",H.hotel.name]})]})]},H.id)})})]})]})]})})}function gR(i){return i==="RECEPTIONIST"?st.public.manualLogin:i==="ADMIN"?st.public.adminMboa:i==="SUPPORT"||i==="HOTEL_IT"?st.public.dashboard:st.public.home}function Dn({children:i,allowedRoles:e}){const t=dp(),s=Oi();if(!t){const a=`${s.pathname}${s.search}`;return o.jsx(Jr,{to:`${st.public.login}?redirect=${encodeURIComponent(a)}`,replace:!0})}return e!=null&&e.length&&!e.includes(t.role)?o.jsx(Jr,{to:gR(t.role),replace:!0}):i}const xR=()=>o.jsx(rM,{children:o.jsxs(DS,{children:[o.jsx(ln,{path:st.public.login,element:o.jsx(vM,{})}),o.jsx(ln,{path:st.public.mfa,element:o.jsx(_M,{})}),o.jsx(ln,{path:st.public.home,element:o.jsx(Dn,{children:o.jsx(RM,{})})}),o.jsx(ln,{path:st.public.dashboard,element:o.jsx(Dn,{allowedRoles:["SUPPORT","HOTEL_IT"],children:o.jsx(AE,{})})}),o.jsx(ln,{path:st.public.networkMap,element:o.jsx(Dn,{allowedRoles:["SUPPORT","HOTEL_IT"],children:o.jsx(hR,{})})}),o.jsx(ln,{path:st.public.devices,element:o.jsx(Dn,{allowedRoles:["ADMIN"],children:o.jsx(Jr,{to:st.public.adminMboa,replace:!0})})}),o.jsx(ln,{path:st.public.wifiCode,element:o.jsx(Dn,{allowedRoles:["SUPPORT","HOTEL_IT"],children:o.jsx(nv,{})})}),o.jsx(ln,{path:st.public.loginByAddress,element:o.jsx(Dn,{allowedRoles:["SUPPORT"],children:o.jsx(NM,{})})}),o.jsx(ln,{path:st.public.statusLogins,element:o.jsx(Dn,{allowedRoles:["SUPPORT","HOTEL_IT"],children:o.jsx(PM,{})})}),o.jsx(ln,{path:st.public.manualLogin,element:o.jsx(Dn,{allowedRoles:["SUPPORT","RECEPTIONIST"],children:o.jsx(DM,{})})}),o.jsx(ln,{path:st.public.websitesManager,element:o.jsx(Dn,{allowedRoles:["SUPPORT","HOTEL_IT"],children:o.jsx(UM,{})})}),o.jsx(ln,{path:st.public.configCode,element:o.jsx(Dn,{allowedRoles:["SUPPORT"],children:o.jsx(FM,{})})}),o.jsx(ln,{path:st.public.hotels,element:o.jsx(Dn,{allowedRoles:["ADMIN"],children:o.jsx(Jr,{to:st.public.adminMboa,replace:!0})})}),o.jsx(ln,{path:st.public.rooms,element:o.jsx(Dn,{allowedRoles:["ADMIN"],children:o.jsx(Jr,{to:st.public.adminMboa,replace:!0})})}),o.jsx(ln,{path:st.public.configWifi,element:o.jsx(Dn,{allowedRoles:["ADMIN"],children:o.jsx(Jr,{to:st.public.adminMboa,replace:!0})})}),o.jsx(ln,{path:st.public.adminMboa,element:o.jsx(Dn,{allowedRoles:["ADMIN"],children:o.jsx(I0,{})})}),o.jsx(ln,{path:st.public.users,element:o.jsx(Dn,{allowedRoles:["ADMIN"],children:o.jsx(I0,{})})}),o.jsx(ln,{path:st.public.notifications,element:o.jsx(Dn,{allowedRoles:["SUPPORT","HOTEL_IT","RECEPTIONIST"],children:o.jsx(mR,{})})}),o.jsx(ln,{path:"/",element:o.jsx(Jr,{to:st.public.login,replace:!0})}),o.jsx(ln,{path:"*",element:o.jsx(Jr,{to:st.public.login,replace:!0})})]})});function vR(){return o.jsx(xR,{})}Oy.createRoot(document.getElementById("root")).render(o.jsx(Ny.StrictMode,{children:o.jsx(vR,{})}));
