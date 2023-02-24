const path = require('path');
const nodeExternals = require('webpack-node-externals');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');


const NODE_ENV = process.env.NODE_ENV;
const PORT = process.env.PORT;

// Webpack configurations
module.exports = {
    name: 'express-server',
    entry: './src/index.ts',
    // You have to specify the kind engine or runtime env you're using
    target: 'node',
    mode: NODE_ENV,
    externals: [nodeExternals()],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    resolve: {
        // Extension files we're working with
        extensions: ['.ts', '.js']
    },
    // Module to work with babel
    // which will translate the code
    // from JSX to JS
    module: {
        rules: [
            {
                // This rule determines which files will be affected by
                // this module. Those that matches with .js will be affected
                test: /\.(js)$/,
                // It will avoid applying the module over the files in the folder below
                // no matter whether they are JS files or not
                exclude: /node_modules/,
                use: {
                    // Here is where our loader, babel, goes
                    loader: 'babel-loader'
                }
            },
            {
                // Use ts-loader over .ts files
                test: /\.(ts|tsx)$/,
                use: [
                    'ts-loader'
                ]
            },
            {
                // You can also use webpack with assets
                test: /\.(png|jpg|gif|pdf)$/i,
                type: 'asset'
              }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            // You can use these plugins to optimize the assets.
            // Some optimization levels or options might alter the
            // quality of the assets. Recommended to review the documentation
            // to install the plugins
            // npm install image-minimizer-webpack-plugin imagemin-optipng  imagemin -D
            new ImageMinimizerPlugin({
              minimizer: {
                implementation:ImageMinimizerPlugin.imageminMinify,
                options: {
                  plugins: [
                    ["optipng", { optimizationLevel:5 }],
                  ]
                }
              }
            }),
        ]
      },
}

