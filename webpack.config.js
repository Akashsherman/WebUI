var webpack = require('webpack');
var path = require('path');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var bs = require("browser-sync").create();

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    publicPath: '/src/client',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        include : APP_DIR,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            cacheDirectory: true,
          }
        }
      },
      {
        test: /\.(scss)$/,
        use: [{
          loader: 'style-loader', // inject CSS to page
        }, {
          loader: 'css-loader', // translates CSS into CommonJS modules
        }, {
          loader: 'postcss-loader', // Run post css actions
          options: {
            plugins: function () { // post css plugins, can be exported to postcss.config.js
              return [
                require('precss'),
                require('autoprefixer')
              ];
            }
          }
        }, {
          loader: 'sass-loader' // compiles SASS to CSS
        }]
      },
    ]
  },
  // module : {
  //   loaders : [
  //               {
  //                   test : /\.jsx?/,
  //                   exclude : /node_modules/,
  //                   include : APP_DIR,
  //                   loader : 'babel',
  //                   // Options to configure babel with
  //                   query: {
  //                     plugins: ['transform-runtime'],
  //                     presets: ['es2015', 'stage-0'],
  //                   }
  //               }
  //           ]
  //           },
  plugins: [
  // new webpack.optimize.OccurenceOrderPlugin(),
  // new webpack.NoErrorsPlugin(),
  new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['src/client'] }
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default'],
      // In case you imported plugins individually, you must also require them here:
      Util: "exports-loader?Util!bootstrap/js/dist/util",
      Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
    })
   // new BrowserSyncPlugin({
   //      host: 'localhost',
   //      port: 3000,
   //      proxy: 'http://localhost:8080/'
   //  },
   //    // plugin options
   //    {
   //      // prevent BrowserSync from reloading the page
   //      // and let Webpack Dev Server take care of this
   //      reload: false
   //    }
   //  )
  ]
};

module.exports = config;