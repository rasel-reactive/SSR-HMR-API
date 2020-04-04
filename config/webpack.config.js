"use strict";
const resolve = require("resolve");
const path = require("path");
const webpack = require("webpack");
const TerserJSPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const host = process.env.HOST || "0.0.0.0";
let isEnvDevelopment = true;

module.exports = mode => {
  isEnvDevelopment = mode;
  return {
    mode: isEnvDevelopment ? "development" : "production",
    entry: {},
    output: {},
    // optimization: {
    //   nodeEnv: !isEnvDevelopment ? "production" : false,
    //   splitChunks: {
    //     chunks: "all"
    //   },
    //   minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
    // },
    resolve: {
      extensions: ["*", ".js", ".jsx"]
    },

    module: {
      rules: [
        {
          test: /\.(jsx|js)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env", "@babel/preset-react"],
                plugins: [
                  "@babel/plugin-proposal-class-properties",
                  "@babel/plugin-transform-runtime"
                ]
              }
            }
          ]
          // cacheDirectory: true
        },
        {
          test: /\.(css|scss|sass)$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: isEnvDevelopment
                // if hmr not work, it force reload
                // reloadAll: true
              }
            },
            "css-loader",
            "sass-loader"
          ]
        },
        {
          test: /\.(woff2|woff|ttf|eot|svg|jpg|png|gif)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[hash].[ext]",
                outputPath: "static/media"
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "static/css/[name].css",
        chunkFilename: "[id].css"
      })
    ]
  };
};
