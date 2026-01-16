const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const wpThemeHeader = require('./wp-css-build/wp-theme-header');


const indexJs = path.join(__dirname, 'src/index.js');
const mainCSS = path.join(__dirname, 'src/sass/main.scss');

module.exports = (env = {}) => {
    const isWordPress = env.wordpress === 'true' || env.wordpress === true;


    const outputPath = isWordPress
    ? path.resolve(__dirname, 'wp-css-build')
    : path.resolve(__dirname, 'dist');

    const plugins = [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body',
            chunks: ['main'],
        }),
        new MiniCssExtractPlugin({
            filename: '[name].min.css',
        })
    ];

    if(isWordPress) {
            plugins.push(
                new webpack.BannerPlugin({
                    banner: wpThemeHeader,
                    raw: true,               //  don't wrap in /* */
                    test: /\.css$/i,         //  apply ONLY to CSS
                })
            );
        }

    return {
        mode: 'development',
        watch: (isWordPress) ? false : true,

        entry: {
            main: './src/index.js',
        },

        output: {
            filename: 'index.js',
            path: outputPath,
            clean: true, // Cleans the dist folder before each build
        },

        devServer: {
            static: {
                directory: path.join(__dirname, './dist'),
            },
            watchFiles: ['src/**/*.html'], // watch HTML templates
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
                    use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
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
        
        plugins
        
    };
};