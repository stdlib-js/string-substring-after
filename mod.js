// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty,e=Object.prototype,n=e.toString,o=e.__defineGetter__,i=e.__defineSetter__,u=e.__lookupGetter__,a=e.__lookupSetter__;var c=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,r,c){var l,f,p,y;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof c||null===c||"[object Array]"===n.call(c))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+c+"`.");if((f="value"in c)&&(u.call(t,r)||a.call(t,r)?(l=t.__proto__,t.__proto__=e,delete t[r],t[r]=c.value,t.__proto__=l):t[r]=c.value),p="get"in c,y="set"in c,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(t,r,c.get),y&&i&&i.call(t,r,c.set),t};function l(t,r,e){c(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function f(t){return"string"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;var _="function"==typeof Symbol?Symbol.toStringTag:"";var s=y()?function(t){var r,e,n,o,i;if(null==t)return b.call(t);e=t[_],i=_,r=null!=(o=t)&&v.call(o,i);try{t[_]=void 0}catch(r){return b.call(t)}return n=b.call(t),r?t[_]=e:delete t[_],n}:function(t){return b.call(t)},g=String.prototype.valueOf;var m=y();function h(t){return"object"==typeof t&&(t instanceof String||(m?function(t){try{return g.call(t),!0}catch(t){return!1}}(t):"[object String]"===s(t)))}function d(t){return f(t)||h(t)}function j(t){return"number"==typeof t}l(d,"isPrimitive",f),l(d,"isObject",h);var S=Number,w=S.prototype.toString;var O=y();function T(t){return"object"==typeof t&&(t instanceof S||(O?function(t){try{return w.call(t),!0}catch(t){return!1}}(t):"[object Number]"===s(t)))}function I(t){return j(t)||T(t)}l(I,"isPrimitive",j),l(I,"isObject",T);var E=Number.POSITIVE_INFINITY,P=S.NEGATIVE_INFINITY,N=Math.floor;function x(t){return t<E&&t>P&&N(r=t)===r;var r}function V(t){return j(t)&&x(t)}function A(t){return T(t)&&x(t.valueOf())}function F(t){return V(t)||A(t)}function G(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}function k(t,r,e){var n;if(!f(t))throw new TypeError(G("0hf3R",t));if(!f(r))throw new TypeError(G("0hf3L",r));if(arguments.length>2){if(!V(e))throw new TypeError(G("0hf3B",e));n=t.indexOf(r,e)}else n=t.indexOf(r);return-1===n?"":t.substring(n+r.length)}l(F,"isPrimitive",V),l(F,"isObject",A);export{k as default};
//# sourceMappingURL=mod.js.map