"use strict";
const resolve = require("resolve");
const path = require("path");
const nodeExternals = require("webpack-node-externals");


let isEnvDevelopment = true;

module.exports = (env, argv) => {
  if (argv.mode === "development") isEnvDevelopment = true;
  if (argv.mode === "production") isEnvDevelopment = false;
  
  let serverConfig = {
    ...require('./webpack.config')(isEnvDevelopment, ),
    watch: !!argv.watch,
    entry: "./server/server.js",
    output: {
      path: path.resolve(__dirname, "../", "build/server"),
      filename: "server.js",
      publicPath: "/"
    },
    target: "node",
    externals: [nodeExternals()],
    node: {
      console: false,
      global: false,
      process: false,
      Buffer: false,
      __filename: false,
      __dirname: false,
      setImmediate: false
    }
  }
  return serverConfig
};
