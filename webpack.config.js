const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const HtmlLoader = require('html-loader');

const indexJs = path.join(__dirname, 'src/index.js');
const mainCSS = path.join(__dirname, 'src/sass/main.scss');

module.exports = {
    mode: 'development',
    watch: true,
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true, // Cleans the dist folder before each build
    },
    devServer: {
        static: {
            directory: path.join(__dirname, './dist'),
        },
        watchFiles: ['src/**/*.html'], // 👈 watch HTML templates
        liveReload: true,
        hot: true,
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
                    // { loader: 'css-loader', options: { sourceMap: true } }, 
                    // { loader: 'sass-loader', options: { sourceMap: true } },
                // { 
                //     loader: 'css-loader', options: { sourceMap: true } },
                // { 
                //     loader: 'postcss-loader', options: { sourceMap: true } },
                // { 
                //     loader: 'sass-loader', options: { sourceMap: true } },
            },
        ],
    },
    plugins: [
         new HtmlWebpackPlugin({
            template: './src/index.html', // your source HTML
            filename: 'index.html',       // output file in dist/
            inject: 'body', // or 'head', if you want it in <head>
            chunks: ['main'], // only include the 'main' chunk
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        })
    ]
};