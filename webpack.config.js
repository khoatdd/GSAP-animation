var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: path.join(__dirname, "src"),
    devtool: debug ? "inline-sourcemap" : false,
    entry: "./js/index.js",
    module: {
        loaders: [{
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-0'],
                    plugins: ['transform-decorators-legacy', 'transform-class-properties'],
                }
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    output: {
        path: __dirname + "/src/",
        filename: "client.min.js"
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            sourcemap: false
        }),
    ],
    node: {
        fs: "empty",
        child_process: "empty"
    }
};