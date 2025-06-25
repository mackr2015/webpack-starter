## Webpack Starter Kit

- SASS, JS, Live Reload
- current version [Webpack v5](https://webpack.js.org/concepts/)
- Webpack [style-loader](https://webpack.js.org/loaders/style-loader/#recommend)
- Webpack [sass-loader](https://webpack.js.org/loaders/sass-loader/)


### Updates 2025
- updated all npm dependecy packages to the latest
- added cssmin script for minimizing css in dist/ ready for production
- updated sass with the latest `@forward` and `@use`
- check the package.json scripts for multiple options on how to run the project
    #### Issues
    - Live reload only worked for JS and SASS changes — not for HTML
    - Adding `index.html` to `entry` caused a Webpack build error
    - `HtmlWebpackPlugin` alone didn't trigger live reload on HTML edits
    #### Fixes
    - installed and configured `npm install --save-dev html-webpack-plugin` 
    - imported scss to index.js so the webpack.config.js has one entry point `./src/index.js`
    - live reload fix for `./src/index.html` was done with manual watching in the devServer webpack.config.js section


### Install

- `npm install` to install dependencies
- check updates and install all npm dependecies `ncu` then `ncu -u` to upgrade and then `npm install`

