const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    context: __dirname + "/frontend",

    entry: {
      main: "./main"
    },

    output: {
      path: path.resolve(__dirname, 'public'),
      filename: '[name].js',
      library: "[name]"
    },

    watch: NODE_ENV == "development",

    devtool: NODE_ENV == "development" ? "inline-source-map" : null,

    module: {
      rules: [{
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
            options: {
              plugins: [require("babel-plugin-transform-es2015-classes")]
            }
          }
        }, { // BABEL!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
          test: /\.pug$/,
          use: "pug-loader"
        }, {
          test: /\.styl$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use:[
              { 
                loader: "css-loader",
                options: {
                  sourceMap: true
                }
              },
              {
                loader: "postcss-loader",
                options: {
                  sourceMap: true,
                  ident: 'postcss',
                  plugins: (loader) => [
                    require('autoprefixer')({
                      browsers: "last 2 version"
                    })
                  ]
                }
              },
              {
                loader: "stylus-loader?resolve url"
              }
            ]
              
          })
          
        }, {
          test: /\.(svg|png)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            }  
          }
        }


      ]
    },

    plugins: [
      new webpack.NoEmitOnErrorsPlugin(),
      new HtmlWebpackPlugin({
        title: "Authorization page",
        inject: "head",
        meta: {
          viewport: "width=device-width,initial-scale=1",
          "X-UA-Compatible": "ie=edge"
        }
      }),
      new ScriptExtHtmlWebpackPlugin({
        defaultAttribute: "defer"
      }),
      new BrowserSyncPlugin({
        host: 'localhost',
        port: 3000,
        server: {
          baseDir: ['public']
        }
      }), 
      new ExtractTextPlugin('[name].css')
    ]
  }

