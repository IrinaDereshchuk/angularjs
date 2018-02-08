var webpack = require('webpack');
var WebpackDevServer = require("webpack-dev-server");
var path = require("path");

module.exports = {
    entry: {
        "bundle": "./src/app.js",
    },
    output: {
        path: path.join(__dirname, "./"),
        publicPath: '/',
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    },
    devServer: {
        port: 3000,
        historyApiFallback: {
            index: '/index.html'
        },
        inline: true,
        hot: true
    }
};

