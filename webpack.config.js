const HtmlPlugin = require("html-webpack-plugin")
const path = require("path")
const webpack = require("webpack")
module.exports = {
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundel.js"
    },
    resolve: {
        extensions: [".ts.",".tsx",".jsx",".js"]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node-modules/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node-modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlPlugin({
            filename: "index.html",
            template: "./src/index.html"
        }),
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify(process.env.NODE_ENV)
            }
        })
    ],
    devServer: {
        historyApiFallback: true,
        port: 9000
    }
}