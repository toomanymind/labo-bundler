const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const postCssAutoprefixer = require('autoprefixer')

const styleLoader = {
  loader: 'style-loader'
}
const cssExtractLoader = {
  loader: MiniCssExtractPlugin.loader,
  options: {
    publicPath: '../'
  }
}
const cssLoader = {
  loader: 'css-loader',
    options: {
    sourceMap: true
  }
}
const postCssLoader = {
  loader: 'postcss-loader',
    options: {
    ident: 'postcss',
    plugins: [
      postCssAutoprefixer()
    ],
    sourceMap: true
  }
}

module.exports = {
  mode: 'none',
  entry: {
    app: './src/main.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.NamedChunksPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'output'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/app.[hash:8].css',
    })
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // styleLoader,
          cssExtractLoader,
          cssLoader,
          postCssLoader
        ]
      },
      {
        test: /\.less$/,
        use: [
          // styleLoader,
          cssExtractLoader,
          cssLoader,
          postCssLoader,
          {
            loader: 'less-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10 * 1024,
              name: '[name].[hash:8].[ext]',
              outputPath: 'images',
            }
          }
        ]
      }
    ]
  }
}