const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const indexJs = path.join(__dirname, 'src/index.js');
const mainCSS = path.join(__dirname, 'src/sass/main.scss');

module.exports = {
    mode: 'development',
    watch: true,
    devServer: {
        static: './dist',
    },
    entry: ['./src/index.js','./src/sass/main.scss'],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
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
        new MiniCssExtractPlugin({
            filename: '[name].css',
        })
    ]
};