# [Code Splitting](https://webpack.js.org/guides/code-splitting/)

* `Entry Points`: Manually split code using [entry](https://webpack.js.org/configuration/entry-context) configuration.

* `Prevent Duplication`: Use [Entry dependencies](https://webpack.js.org/configuration/entry-context/#dependencies) or [SplitChunksPlugin](https://webpack.js.org/plugins/split-chunks-plugin/) to dedupe and split chunks.

* `Dynamic Imports`: Split code via inline function calls within modules

## Entry Points

some pitfalls to this approach:

* If there are any duplicated modules between entry chunks they will be included in both bundles.

* It isn't as flexible and can't be used to dynamically split code with the core application logic.

`todotodo`: shared.bundle.js runtime.bundle.js?

## Prevent Duplication

### Entry dependencies
[dependOn option](https://webpack.js.org/configuration/entry-context/#dependencies)

If we're going to use multiple entry points on a single HTML page, optimization.runtimeChunk: 'single' is needed too, otherwise we could get into trouble described [here](https://bundlers.tooling.report/code-splitting/multi-entry/).

Although using multiple entry points per page is allowed in webpack, it should be avoided when possible in favor of an entry point with multiple imports: `entry: { page: ['./analytics', './app'] }`. This results in a better optimization and consistent execution order when using async script tags


## Dynamic Imports

* [import() syntax](https://webpack.js.org/api/module-methods/#import-1): conforms to the [ECMAScript proposal](https://github.com/tc39/proposal-dynamic-import) for dynamic imports

* [require.ensure](https://webpack.js.org/api/module-methods/#requireensure): The legacy, webpack-specific approach

> `import()` calls use [promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) internally. (shim Promise: [es6-promise](https://github.com/stefanpenner/es6-promise), [promise-polyfill](https://github.com/taylorhakes/promise-polyfill))

```js 
return import('lodash')
    .then(({ default: _ }) => {...
```
> `default`原因: since webpack 4, when importing a ***CommonJS module***, the import will no longer resolve to the value of `module.exports`, it will instead create an artificial namespace object for the CommonJS module

> `todotodo`: For more information on the reason behind this, read [webpack 4: import() and CommonJs](https://medium.com/webpack/webpack-4-import-and-commonjs-d619d626b655).

> [dynamic expression](https://webpack.js.org/api/module-methods/#dynamic-expressions-in-import) to import()


## Prefetching/Preloading modules

Using these inline directives while declaring your imports allows webpack to output `“Resource Hint”` which tells the browser that for:

* prefetch: resource is probably needed for some navigation in the future

* preload: resource will also be needed during the current navigation

### prefetch:
```js
import(/* webpackPrefetch: true */ './path/to/LoginModal.js');
```
==>
```html
<link rel="prefetch" href="login-modal-chunk.js"> //  instruct the browser to prefetch in idle time the login-modal-chunk.js file
```
> `todotodo:` webpack will add the prefetch hint once the parent chunk has been loaded.

### preload
```js
import(/* webpackPreload: true */ 'ChartingLibrary');
```
==>
```html
<link rel="preload">
```
> `todotodo:` Using webpackPreload incorrectly can actually hurt performance

### preload prefetch区别

* A preloaded chunk starts loading in parallel to the parent chunk. A prefetched chunk starts after the parent chunk finishes loading.

* A preloaded chunk has medium priority and is instantly downloaded. A prefetched chunk is downloaded while the browser is idle.

* A preloaded chunk should be instantly requested by the parent chunk. A prefetched chunk can be used anytime in the future.

* Browser support is different.

## Bundle Analysis: check where modules have ended up

* [official analyze tool](https://github.com/webpack/analyse)

* [webpack-chart](https://alexkuz.github.io/webpack-chart/): Interactive pie chart for webpack stats.

* [webpack-visualizer](https://chrisbateman.github.io/webpack-visualizer/): Visualize and analyze your bundles to see which modules are taking up space and which might be duplicates.

* [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer): A plugin and CLI utility that represents bundle content as a convenient interactive zoomable treemap.

* [webpack bundle optimize helper](https://webpack.jakoblind.no/optimize): This tool will analyze your bundle and give you actionable suggestions on what to improve to reduce your bundle size.

* [bundle-stats](https://github.com/bundle-stats/bundle-stats): Generate a bundle report(bundle size, assets, modules) and compare the results between different builds