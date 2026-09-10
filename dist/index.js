"use strict";var g=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var s=g(function(f,a){
var u=require('@stdlib/assert-is-string/dist').isPrimitive,m=require('@stdlib/assert-is-integer/dist').isPrimitive,n=require('@stdlib/error-tools-fmtprodmsg/dist');function v(e,r,i){var t;if(!u(e))throw new TypeError(n('1Pd3F',e));if(!u(r))throw new TypeError(n('1Pd39',r));if(arguments.length>2){if(!m(i))throw new TypeError(n('1Pd2z',i));t=e.indexOf(r,i)}else t=e.indexOf(r);return t===-1?"":e.substring(t+r.length)}a.exports=v
});var l=s();module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
