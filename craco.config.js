module.exports = {
  babel: {
    plugins: [['babel-plugin-styled-components', { displayName: true }]],
    loaderOptions: (babelLoaderOptions, { env, paths }) => { return babelLoaderOptions; }
},
}