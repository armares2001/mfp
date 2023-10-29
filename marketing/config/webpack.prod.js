const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const Mfp = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./../package.json").dependencies;

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/marketing/latest/",
  },
  devServer: {
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
  ],
};

const config = merge(commonConfig, prodConfig);
console.log(config);

module.exports = config;
