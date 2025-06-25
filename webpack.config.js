const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const HtmlLoader = require('html-loader');

const indexJs = path.join(__dirname, 'src/index.js');
const mainCSS = path.join(__dirname, 'src/sass/main.scss');

module.exports = {
    mode: 'development',
    watch: true,
    entry: [ './src/index.js' ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
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
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        })
    ]
};