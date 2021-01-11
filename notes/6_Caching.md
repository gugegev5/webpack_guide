# [Caching](https://en.wikipedia.org/wiki/Cache_(computing))

## Output Filenames
`output.filename` [substitutions setting](https://webpack.js.org/configuration/output/#outputfilename) to define the names of our output files => `[contenthash]`

`npm run build` 2次, hash不同  
This is because webpack includes certain `boilerplate`, specifically the `runtime` and `manifest`, in the entry chunk

## Extracting Boilerplate
### create a single runtime bundle for all chunks:
```js
optimization: {
    runtimeChunk: 'single',
}
```
### extract third-party libraries, such as `lodash` or `react`, to a separate vendor chunk 
```js
splitChunks: {
  cacheGroups: {
    vendor: {
    test: /[\\/]node_modules[\\/]/,
    name: 'vendors',
    chunks: 'all',
    },
  },
},
```