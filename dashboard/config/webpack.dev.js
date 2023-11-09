const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonConfig = require("./webpack.common");
const Mfp = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./../package.json").dependencies;

const devConfig = {
  mode: "development",
  output: {
    publicPath: "http://localhost:8083/",
  },
  devServer: {
    port: 8083,
    historyApiFallback: {
      historyApiFallback: true,
      index: "/index.html",
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  plugins: [
    new Mfp({
      name: "dashboard",
      filename: "remoteEntry.js",
      exposes: {
        "./DashboardApp": "./src/bootstrap",
      },
      shared: {
        ...deps,
        vue: {
          singleton: true,
          requiredVersion: deps.vue,
        },
        primevue: {
          singleton: true,
          requiredVersion: deps.primevue,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

const config = merge(commonConfig, devConfig);
console.log(config);

module.exports = config;
