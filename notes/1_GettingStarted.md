# [Getting Started](https://webpack.js.org/guides/getting-started/)

## Basic Setup
There are problems with managing JavaScript projects this way:

* It is not immediately apparent that the script depends on an external library.  
* If a dependency is missing, or included in the wrong order, the application will not function properly.  
* If a dependency is included but not used, the browser will be forced to download unnecessary code.  


## Creating a Bundle
By stating what dependencies a module needs, webpack can use this information to build a `dependency graph` ==> scripts will be executed in the correct order.  


## Modules
Note that webpack will not alter any code other than `import` and `export` statements. If you are using other ES2015 features, make sure to use a transpiler such as Babel or Bublé via webpack's [loader system](https://webpack.js.org/concepts/loaders/).


## Using a Configuration