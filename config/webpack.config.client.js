const path = require("path");

let isEnvDevelopment = true;

module.exports = (env, argv)=>{
  if (argv.mode === "development") isEnvDevelopment = true;
  if (argv.mode === "production") isEnvDevelopment = false;

  let clientConfig =  require("./webpack.config")(isEnvDevelopment)
  clientConfig.devtool = 'cheap-module-source-map',
  clientConfig.entry = "./src/Client.js",
  clientConfig.output = {
    pathinfo: true,
    path: path.resolve(__dirname, "../", "build/server"),
    filename: isEnvDevelopment
      ? "static/js/bundle.js"
      : "static/js/[name].[contenthash:8].js",

    futureEmitAssets: true,

    // There are also additional JS chunk files if you use code splitting.
    chunkFilename: isEnvDevelopment
      ? "static/js/[name].chunk.js"
      : "static/js/[name].[contenthash:8].chunk.js",

    publicPath: '/',
    hotUpdateChunkFilename: 'static/js/[id].[hash].hot-update.js',
    hotUpdateMainFilename: 'static/js/[hash].hot-update.json',
  }
  clientConfig.devServer = {
    port: 3000,
    open: false, // cause we not use react frontend site. 
    // host: host,
    historyApiFallback: true,
    hot: true,
    // for react router dom ........
    contentBase: 'public',
    // By default files from `contentBase` will not trigger a page reload.
    watchContentBase: true,
    quiet: true,
    watchOptions: {
      ignored: /node_modules/
    },
    clientLogLevel: "silent",
    compress: true
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:4001',
    //     secure: false
    //   }
    // }
  }


  

  return clientConfig
}
