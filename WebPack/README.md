# WebPack

## Installation

Webpack is a development compiler library used to optimize JS projects for production purposes. For this reason, this library must be considered as a Development dependency

```
        npm install webpack webpack-cli -D
```
### Options
- **webpack**: the library itself
- **webpack-cli**: it's used to manage webpack through the command line 
- **D flag**: the flag -D indicates npm the libary will be installed as a development dependency

## Runing Webpack
It's possible to run webpack for development purposes 
```
    npx webpack --mode development
```
or for production purposes
```
    npx webpack --mode production
```

## Configuration file
**webpack.config.js**: this is a file that exports an object which in turn contains the setting. By default, webpack search this file in the project root folder.

to make webpack use the config file with other name or search it in other folder, it could be used: --config 
```
    npx webpack --mode production --config src/webpack-conf.js
```

## Add Babel to the webpack process
Install babel as a development dependency
```
    npm install -D babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime
```

## Webpack for HTML
Webpack by itself is not able to optimize html. Nevertheless it's possible to add plug-ins to it in order to extend its functionalities.

For HTML purposes it's necessary to install html-webpack-plugin library
```
    npm i html-webpack-plugin -D
```

The library must be imported in webpack.config.js file and must be added to the plugins section
```
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
            filename: './index.html'
        })
    ]
```

## CSS and Pre-processors

css plug-in

```
    npm install mini-css-extract-plugin css-loader -D
```

css loader config
```
        module: {
        rules: [
            // CSS Files
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
```

css pre-processors

In this situation, the preprocessor user is stylus, so it's necessary to search and download the plugin for it and install it 

```
    npm install stylus stylus-loader -D
```

pre-processor loader: when working with preprocessors it's necessary to have the css plugin installed
```
    module: {
        rules: [
            // CSS Files
            {
                // The pipeline in the regex indicates that webpack will search both css and styl files
                test: /\.css|.styl$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'stylus-loader']
            }
        ]
    },
```

## Files

It is also possible to use webpack to copy files from development project folder to the production code

```
    npm install copy-webpack-plugin -D
```

Plugin configuration

```
        plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src', 'assets/images'),
                    to: 'assets/images'
                }
            ]
        }),
    ]
```

it's also possible to copy images without using a plugin by using a webpack built-in

```
    {
        test: /\.png/,
        type: 'asset/resource'
    }
```

## Fonts (woff|woff2)

The fonts are usually imported through CDNs, but import them this way could affect the performance of the application, because of the http CDN request. For this reason it's better off to have the fonts locally in a woff or woff2 format which is a format font web optimized format.

To download google fonts in woff format: http://google-webfonts-helper.herokuapp.com/fonts/ubuntu?subsets=cyrillic,latin

Font loader Plugin
```
    npm install url-loader file-loader -D
```

setup

```
            {
                test: /\.(woff|woff2)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        mimeType: 'aplication/font-woff',
                        name: "[name].[ext]",
                        outputPath: './assets/fonts/',
                        publicPath: './assets/fonts/',
                        esModule: false
                    }
                }
            }
```

without installing the plugin
```
  {
        test: /\.(woff|woff2)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name][ext]"
        }
  }
```

## CSS & JS minimizers

css and js minimizer

```
    npm install css-minimizer-webpack-plugin terser-webpack-plugin -D
```

They must be added into with the key optimization in the root of the webpack object configuration
```
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ]
    }
```


## Env variables

Dotenv pluging

```
    npm install -D dotenv-webpack
```

The instance of the plugin should be added to the plugins array. Once it is instanciated it will search a file .env into the root of the project and will load all into the environment variables the content there

## Clean Dist folder

Plugin

```
    npm install clean-webpack-plugin -D
```

## Dev Server

```
    npm install webpack-dev-server -D
```

## Dev tools


## Bundler Analyzer

```
    npm install webpack-bundle-analyzer -D
```

Indetify performance issues and optimize the project 
https://platzi.com/blog/analizar-dependencias-webpack-bundle-analyzer/

```
    npx webpack --profile --json > stats.json

    webpack-bundle-analyzer stats.json
```

