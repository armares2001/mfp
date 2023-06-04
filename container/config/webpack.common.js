const path = require('path');
module.exports={
    // resolve: {
    //     alias: {
    //         react: path.resolve('./node_modules/react'),
    //     },
    // },
    module:{
        rules:[
            {
                test:/\.m?js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:[
                            '@babel/preset-react',
                            '@babel/preset-env'
                        ],
                        plugins:[
                            '@babel/plugin-transform-runtime'
                        ]
                    }
                }
            }
        ]
    }
};