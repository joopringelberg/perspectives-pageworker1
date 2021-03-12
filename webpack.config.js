const path = require("path");

module.exports = {
  entry: {
    pageworker: "./src/page.js"
  },
  output: {
    library: 'perspectives-[name]',
    filename: 'perspectives-[name].js',
    path: path.join(__dirname, "dist"),
    libraryTarget: "umd"
  },
  watch: false,
  mode: "development",
  target: "webworker",
  resolve: {
      alias: {
        sharedworker: path.resolve(__dirname, 'node_modules/perspectives-sharedworker/dist')
      },
    },
  module: {
    rules: [{
        test: /.js?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                '@babel/preset-env'
              ]
            }
          }
        ]
      }]
  },
  externals: {
    // These are Affjax dependencies when running on node.
    "xhr2-cookies": {
      commonjs: "xhr2-cookies",
      commonjs2: "xhr2-cookies",
      amd: "xhr2-cookies",
      root: "xhr2-cookies"
    },
    "url": {
      commonjs: "url",
      commonjs2: "url",
      amd: "url",
      root: "url"
    },
    "perspectives-core": {
      commonjs: "perspectives-core",
      commonjs2: "perspectives-core",
      amd: "perspectives-core",
      root: "perspectives-core"
    },
    "perspectives-proxy": {
      commonjs: 'perspectives-proxy',
      commonjs2: 'perspectives-proxy',
      amd: 'perspectives-proxy',
      root: 'perspectives-proxy'
    }
  }
};
