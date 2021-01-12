
## The usage specification for the library use
* ES2015 module import:
```js
import * as webpackNumbers from 'webpack-numbers';
// ...
webpackNumbers.wordToNum('Two');
```
* CommonJS module require:
```js
const webpackNumbers = require('webpack-numbers');
// ...
webpackNumbers.wordToNum('Two');
```
* AMD module require:
```js
require(['webpackNumbers'], function (webpackNumbers) {
  // ...
  webpackNumbers.wordToNum('Two');
});
```
* html
```html
<!doctype html>
<html>
  ...
  <script src="https://unpkg.com/webpack-numbers"></script>
  <script>
    // ...
    // Global variable
    webpackNumbers.wordToNum('Five')
    // Property in the window object
    window.webpackNumbers.wordToNum('Five')
    // ...
  </script>
</html>
```

### [webpack-library-example](https://github.com/kalcifer/webpack-library-example)

### todotodo: peerDependency
```js
externals: {
  lodash: {
    commonjs: 'lodash',
    commonjs2: 'lodash',
    amd: 'lodash',
    root: '_',
  },
}
```
This means that your library expects a dependency named lodash to be available in the consumer's environment

> 只做引用的话, externals 设为array

### todotodo:  While [multi-part libraries](https://github.com/webpack/webpack/tree/master/examples/multi-part-library) are possible, it is simpler to expose partial exports through an [index script](https://stackoverflow.com/questions/34072598/es6-exporting-importing-in-index-file) that serves as a single entry point

## Expose the Library `library` `libraryTarget`
* Variable: as a global variable made available by a script tag (`libraryTarget:'var'`).

* This: available through the this object (`libraryTarget:'this'`).

* Window: available through the window object, in the browser (`libraryTarget:'window'`).

* UMD: available after AMD or CommonJS require (`libraryTarget:'umd'`).
