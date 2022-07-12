const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');


/*
    This is the file from which webpack will get
    the settings to run. This file must export an
    object that later will be read by webpack to
    set the configuration
*/

module.exports = {
    // Application entry point
    entry: './src/index.js',
    // Webpack destination folder. The standarized name for
    // this folder is dist/ 
    output: {
        // Project path. The node path native library
        // Is used here to get the name of the current
        // folder along with the destination one 
        path: path.resolve(__dirname, 'dist'),
        // Exit file name
        filename: '[name].[contenthash].js',
        // Without this, webpack will import the images in the root of the project
        // instead of the assets folder
       assetModuleFilename: 'assets/images/[hash][ext][query]'
    },
    mode: 'development',
    devtool: 'source-map',
    resolve: {
        // Which kind of extensions webpack will use
        extensions: ['.js'],
        // Alias to short the files path
        alias: {
            '@utils': path.resolve(__dirname, 'src/utils/'),
            '@templates': path.resolve(__dirname, 'src/templates/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@images': path.resolve(__dirname, 'src/assets/images/'),
          }
    },
    module: {
        rules: [
            // To use babel loader
            {
                test: /\.m?js$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            },
            // CSS Files
            {
                // The pipeline in the regex indicates that webpack will search both css and styl files
                test: /\.css|.styl$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'stylus-loader']
            },
            // native webpack assets import
            // with this it's not necessary to install or user plugins to copy images to the prod folder
            {
                test: /\.png/,
                type: 'asset/resource'
            },
            {
                test: /\.(woff|woff2)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        mimeType: 'application/font-woff',
                        name: "[name].[contenthash].[ext]",
                        outputPath: './assets/fonts/',
                        publicPath: './assets/fonts/',
                        esModule: false
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            // This is to indicate webpack that need to add the bundle or the js
            // optimized files to the HTML template
            inject: true,
            // HTML template folder
            template: './public/index.html',
            // output HTML file name
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].[contenthash].css'
        }),
        // This is to copy files
        new CopyPlugin({
            patterns: [
                // This array contains objects with variables from and to
                // that are used to tell the plugin what kind of folder or files it needs to copy
                {
                    // where the files will be taken
                    from: path.resolve(__dirname, 'src', 'assets/images'),
                    // where the files will be put
                    to: 'assets/images'
                }
            ]
        }),
        new Dotenv(),
        new BundleAnalyzerPlugin()
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        historyApiFallback: true,
        port: 3005,
        open: true 
    }
}