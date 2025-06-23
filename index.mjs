// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.2-esm/index.mjs";import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function t(t,i,n){var d;if(!r(t))throw new TypeError(s("1Pd3F",t));if(!r(i))throw new TypeError(s("1Pd39",i));if(arguments.length>2){if(!e(n))throw new TypeError(s("1Pd2z",n));d=t.indexOf(i,n)}else d=t.indexOf(i);return-1===d?"":t.substring(d+i.length)}export{t as default};
//# sourceMappingURL=index.mjs.map
