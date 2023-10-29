const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonConfig = require("./webpack.common");
const Mfp = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./../package.json").dependencies;

const devConfig = {
  mode: "development",
  devServer: {
    port: 8081,
    historyApiFallback: {
      historyApiFallback: true,
    },
  },
  plugins: [
    new Mfp({
      name: "marketing",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/bootstrap",
        "./jsx": "./src/App",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
        "react-router-dom": {
          singleton: true,
          requiredVersion: deps["react-router-dom"],
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
