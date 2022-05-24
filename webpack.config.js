const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader,'css-loader']
            }
        ]
    },
    resolve: {
        extensions: [".js", ".json", ".jsx", ".css"],
        fallback: {
            "fs": false
        }
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 4200,
    },
    plugins: [
        new HTMLPlugin({
            filename: "index.html",
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: "./src/assets/avatar",
                    to: "assets/avatar"
                },
                {
                    from: "./src/assets/icon",
                    to: "assets/icon"
                }
            ]
        })
    ]
}