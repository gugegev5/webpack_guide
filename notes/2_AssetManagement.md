# [Asset Management](https://webpack.js.org/guides/asset-management/)

 webpack will `dynamically bundle` all dependencies (creating what's known as a [`dependency graph`](https://webpack.js.org/concepts/dependency-graph))

 ## Loading CSS

 Module loaders can be chained  
 A chain is executed in reverse order  
 The first loader passes its result (resource with applied transformations) to the next one, and so forth. Finally, webpack expects JavaScript to be returned by the last loader in the chain.

 css-loader: `import './style.css'`  
 style-loader: `<style>` tag with the stringified css will be inserted into the `<head>` of your html file.

 > `<style>` tag is *dynamically* created by JavaScript  
 > [minimize css](https://webpack.js.org/plugins/mini-css-extract-plugin/#minimizing-for-production), [less](https://webpack.js.org/loaders/less-loader), [postcss](https://webpack.js.org/loaders/postcss-loader)


 ## Loading Data

```js
// No warning
import data from './data.json';

// Warning shown, this is not allowed by the spec.
import { foo } from './data.json';
```