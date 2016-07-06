'use strict';

// Modules
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

// Identify the environment by npm lifecycle event
var isProd = process.env.npm_lifecycle_event === 'build';

/**
 * Config
 * Reference: http://webpack.github.io/docs/configuration.html
 */
module.exports = function () {
  var config = {
    entry: {
      app: './src/app.js'
    },
    output: {
      path: './www',
      publicPath: '/',
      filename: isProd ? '[name].[hash:8].js' : '[name].bundle.js',
      chunkFilename: isProd ? '[name].[hash:8].js' : '[name].bundle.js'
    },
    module: {
      /**
       * Loaders
       * Reference: http://webpack.github.io/docs/configuration.html#module-loaders
       * List: http://webpack.github.io/docs/list-of-loaders.html
       */
      loaders: [
        // JS LOADER
        // Reference: https://github.com/babel/babel-loader
        // Compiles ES6 and ES7 into ES5 code
        {
          test: /\.js$/, loader: 'babel', exclude: /node_modules/,
          query: {
            presets: ['es2015']
          }
        },
        // CSS LOADER
        // Reference: https://github.com/webpack/css-loader
        // Allow loading css through js
        //
        // Reference: https://github.com/webpack/style-loader
        // Adds CSS to the DOM by injecting a <style> tag
        //
        // Reference: https://github.com/postcss/postcss-loader
        // Postprocess your css with PostCSS plugins
        //
        // Reference: https://github.com/webpack/extract-text-webpack-plugin
        // Extract css files in production builds
        { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css!postcss') },

        // HTML LOADER
        // Reference: https://github.com/webpack/html-loader
        // Allow loading html through js
        { test: /\.html$/, loader: 'html?root=/&attrs=img:src img:data-src link:href' },

        // FILE LOADER
        // Reference: https://github.com/webpack/file-loader
        // Copy resource files to output
        {
          test: /\.(png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$/i,
          loader: 'file?name=resources/[name].[ext]?[hash:8]'
        }
      ]
    },
    /**
     * PostCSS
     * Reference: https://github.com/postcss/autoprefixer-core
     */
    postcss: [
      autoprefixer({
        browsers: ['last 2 version']
      })
    ],
    /**
     * Plugins
     * Reference: http://webpack.github.io/docs/configuration.html#plugins
     * List: http://webpack.github.io/docs/list-of-plugins.html
     */
    plugins: [
      // Reference: https://github.com/ampedandwired/html-webpack-plugin
      // Render index.html
      new HtmlWebpackPlugin({
        template: isProd ? './src/index.prod.html' : './src/index.html',
        inject: 'body'
      }),
      // Reference: https://github.com/webpack/extract-text-webpack-plugin
      // Extract css files
      new ExtractTextPlugin('[name].[hash:8].css', { disable: !isProd })
    ],
    /**
     * Dev server configuration
     * Reference: http://webpack.github.io/docs/configuration.html#devserver
     * Reference: http://webpack.github.io/docs/webpack-dev-server.html
     */
    devServer: {
      // Base path for the serve content.
      contentBase: 'src',
      // Minimize output infomation
      stats: 'minimal',
      // Server port
      port: 8080
    }
  };

  // Add build specific configuration
  if (isProd) {
    config.plugins.push(
      // Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
      // Only emit files when there are no errors
      new webpack.NoErrorsPlugin(),
      // Reference: http://webpack.github.io/docs/list-of-plugins.html#dedupeplugin
      // Dedupe modules in the output
      new webpack.optimize.DedupePlugin(),
      // Reference: http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
      // Minify all javascript, switch loaders to minimizing mode
      new webpack.optimize.UglifyJsPlugin()
    );
    // Reference: http://webpack.github.io/docs/configuration.html#externals
    // Specify dependencies that shouldn’t be resolved by webpack
    config.externals = {
      angular: 'angular',
      uiRouter: 'angular-ui-router'
    };
  }

  return config;
} ();
