# [Code Splitting](https://webpack.js.org/guides/code-splitting/)

* `Entry Points`: Manually split code using [entry](https://webpack.js.org/configuration/entry-context) configuration.

* `Prevent Duplication`: Use [Entry dependencies](https://webpack.js.org/configuration/entry-context/#dependencies) or [SplitChunksPlugin](https://webpack.js.org/plugins/split-chunks-plugin/) to dedupe and split chunks.

* `Dynamic Imports`: Split code via inline function calls within modules

## Entry Points

some pitfalls to this approach:

* If there are any duplicated modules between entry chunks they will be included in both bundles.

* It isn't as flexible and can't be used to dynamically split code with the core application logic.