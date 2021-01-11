# [Code Splitting](https://webpack.js.org/guides/code-splitting/)

* `Entry Points`: Manually split code using [entry](https://webpack.js.org/configuration/entry-context) configuration.

* `Prevent Duplication`: Use [Entry dependencies](https://webpack.js.org/configuration/entry-context/#dependencies) or [SplitChunksPlugin](https://webpack.js.org/plugins/split-chunks-plugin/) to dedupe and split chunks.

* `Dynamic Imports`: Split code via inline function calls within modules

## Entry Points

some pitfalls to this approach:

* If there are any duplicated modules between entry chunks they will be included in both bundles.

* It isn't as flexible and can't be used to dynamically split code with the core application logic.

todotodo: shared.bundle.js runtime.bundle.js?

## Prevent Duplication

### Entry dependencies
[dependOn option](https://webpack.js.org/configuration/entry-context/#dependencies)

If we're going to use multiple entry points on a single HTML page, optimization.runtimeChunk: 'single' is needed too, otherwise we could get into trouble described [here](https://bundlers.tooling.report/code-splitting/multi-entry/).

Although using multiple entry points per page is allowed in webpack, it should be avoided when possible in favor of an entry point with multiple imports: `entry: { page: ['./analytics', './app'] }`. This results in a better optimization and consistent execution order when using async script tags