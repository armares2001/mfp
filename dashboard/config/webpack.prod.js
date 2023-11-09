const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const Mfp = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./../package.json").dependencies;

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: "production",
  output: {
    publicPath: "/dashboard/latest/",
  },
  devServer: {
    historyApiFallback: {
      historyApiFallback: true,
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
  ],
};

const config = merge(commonConfig, prodConfig);
console.log(config);

module.exports = config;
