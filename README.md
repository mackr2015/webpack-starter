## Webpack Starter Kit

- SASS, JS, Live Reload
- current version [Webpack v5](https://webpack.js.org/concepts/)
- Webpack [style-loader](https://webpack.js.org/loaders/style-loader/#recommend)
- Webpack [sass-loader](https://webpack.js.org/loaders/sass-loader/)


### Update 2025
- updated all npm dependecy packages to the latest
- added cssmin script for minimizing css in dist/ ready for production
- updated sass with the latest `@forward` and `@use`
- check the package.json for multiple option on how to run the project


### Install

- `npm install` to install dependencies

### Explanation
- by default webpack will look for `src` to compile the code into `dist`
- create configuration file in the project root `webpack.config.js`
- inside of `webpack.config.js` Set 'mode' option to 'development' or 'production'
- setup the 'script' inside of package.json for 'dev','build' etc... . then we can run `npm run dev`
- setup webpack-dev-server, gives ability to live reload on changes and provides webpack server for local development
- install webpack `npm install --save-dev webpack-dev-server`
- in `webpack.config.js` tell dev server where to look for files 
    ``` Example: tell webpack server to serve files from dist director on localhost:8080
    devServer: {
        static: './dist',
    },  
    ```
- Let's add a script to package.json to easily run the dev server as well:
    ``` "start": "webpack serve --open"```
- webpack [Sass Loader](https://webpack.js.org/loaders/sass-loader/)
- install `npm install sass-loader sass css-loader style-loader --save-dev`
- follow with the package.json install all packages
- check the config for compiling sass with loaders
- run webpack server for live reloading and server run `npm run start`