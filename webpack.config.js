const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    publicPath: 'https://host-app-xois.vercel.app/',
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,  
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'host_app',
      filename: 'remoteEntry.js',
      // remotes: {
      //   remote_app: 'remote_app@http://localhost:3001/remoteEntry.js',
      // },
        shared: {
    react: {
      singleton: true,
      eager: false,
      requiredVersion: '^18.2.0', // версия из твоего package.json
    },
    'react-dom': {
      singleton: true,
      eager: false,
      requiredVersion: '^18.2.0',
    },
  },

    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  devServer: {
    static: './dist',
    hot: true,
    port: 3000,
    open: true,
  },
};
