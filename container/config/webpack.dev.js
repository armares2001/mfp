const {merge}=require("webpack-merge");
const HtmlWebpackPlugin=require("html-webpack-plugin");
const commonConfig=require("./webpack.common");
const Mfp=require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./../package.json").dependencies;

const devConfig={
    mode:"development",
    devServer:{
        port:8080,
        historyApiFallback:{
            index:"index.html"
        }
    },
    plugins:[
        new Mfp({
            name:"container",
            remotes:{
                marketing:"marketing@http://localhost:8081/remoteEntry.js"
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
            },
        }),
        new HtmlWebpackPlugin({
            template:"./public/index.html"
        })
    ]
};

const config=merge(commonConfig,devConfig);
console.log(config)

module.exports=config;