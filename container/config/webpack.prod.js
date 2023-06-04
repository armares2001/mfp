const {merge}=require("webpack-merge");
const commonConfig=require("./webpack.common");
const Mfp=require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./../package.json").dependencies;

const domain=process.env.PRODUCTION_DOMAIN;

const prodConfig={
    mode:"production",
    output:{
        filename:"[name].[contenthash].js"
    },
    plugins:[
        new Mfp({
            name:"container",
            remotes:{
                marketing:`marketing@${domain}/marketing/remoteEntry.js`
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
    ]
};

const config=merge(commonConfig,prodConfig);
console.log(config)

module.exports=config;