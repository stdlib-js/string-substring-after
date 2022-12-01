<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# substringAfter

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return the part of a string after a specified substring.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import substringAfter from 'https://cdn.jsdelivr.net/gh/stdlib-js/string-substring-after@deno/mod.js';
```

#### substringAfter( str, search\[, fromIndex] )

Returns the part of a string after a specified substring.

```javascript
var str = 'beep boop';
var out = substringAfter( str, 'o' );
// returns 'op'

out = substringAfter( str, ' ' );
// returns 'boop'
```

By default, the search starts at the beginning of the string. To start searching from a different index, provide a `fromIndex` argument:

```javascript
var str = 'boop baz boop';
var out = substringAfter( str, 'o', 3 );
// returns 'op'
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If a substring is not present in a provided string, the function returns an empty string.
-   If provided an empty substring, the function returns the input string.
-   If `fromIndex` is less than `0` or greater than `str.length`, the search starts at index `0` and `str.length`, respectively.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import substringAfter from 'https://cdn.jsdelivr.net/gh/stdlib-js/string-substring-after@deno/mod.js';

var str = 'To be, or not to be, that is the question.';
var out = substringAfter( str, ', ' );
// returns 'or not to be, that is the question.'

out = substringAfter( str, 'to be' );
// returns ', that is the question.'

out = substringAfter( str, 'question.' );
// returns ''

out = substringAfter( str, 'xyz' );
// returns ''

out = substringAfter( str, '' );
// returns 'To be, or not to be, that is the question.'
```

</section>

<!-- /.examples -->

<!-- Section for describing a command-line interface. -->



<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/string/substring-before`][@stdlib/string/substring-before]</span><span class="delimiter">: </span><span class="description">return the part of a string before a specified substring.</span>
-   <span class="package-name">[`@stdlib/string/substring-before-last`][@stdlib/string/substring-before-last]</span><span class="delimiter">: </span><span class="description">return the part of a string before the last occurrence of a specified substring.</span>
-   <span class="package-name">[`@stdlib/string/substring-after-last`][@stdlib/string/substring-after-last]</span><span class="delimiter">: </span><span class="description">return the part of a string after the last occurrence of a specified substring.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/string-substring-after.svg
[npm-url]: https://npmjs.org/package/@stdlib/string-substring-after

[test-image]: https://github.com/stdlib-js/string-substring-after/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/string-substring-after/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/string-substring-after/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/string-substring-after?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/string-substring-after.svg
[dependencies-url]: https://david-dm.org/stdlib-js/string-substring-after/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/string-substring-after/tree/deno
[umd-url]: https://github.com/stdlib-js/string-substring-after/tree/umd
[esm-url]: https://github.com/stdlib-js/string-substring-after/tree/esm
[branches-url]: https://github.com/stdlib-js/string-substring-after/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/string-substring-after/main/LICENSE

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

<!-- <related-links> -->

[@stdlib/string/substring-before]: https://github.com/stdlib-js/string-substring-before/tree/deno

[@stdlib/string/substring-before-last]: https://github.com/stdlib-js/string-substring-before-last/tree/deno

[@stdlib/string/substring-after-last]: https://github.com/stdlib-js/string-substring-after-last/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
