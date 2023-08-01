// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function t(t,i,n){var o;if(!r(t))throw new TypeError(s("0hf3R",t));if(!r(i))throw new TypeError(s("0hf3L",i));if(arguments.length>2){if(!e(n))throw new TypeError(s("0hf3B",n));o=t.indexOf(i,n)}else o=t.indexOf(i);return-1===o?"":t.substring(o+i.length)}export{t as default};
//# sourceMappingURL=index.mjs.map
