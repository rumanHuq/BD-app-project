import CompressionPlugin from 'compression-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import UglifyJs from 'uglifyjs-webpack-plugin';
import OfflinePlugin from 'offline-plugin';
import chalk from 'chalk';
import BabelMinify from 'babel-minify-webpack-plugin';

export default {
  resolve: {
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat',
    },
  },
  devtool: 'sourcemap',
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract([
          {
            loader: 'css-loader',
            options: {
              url: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [require('autoprefixer'), require('cssnano')],
            },
          },
          'sass-loader',
        ]),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('./css/styles.css'),
    new BabelMinify({
      removeConsole: true,
    }),
    new UglifyJs({
      sourceMap: true,
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|jsx|html|css)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    // new OfflinePlugin(),
  ],
};

console.log(`${chalk.red('⚠️️️️️️️ ⚠️ OFFLINE PLUGIN NOT IMPLEMENTED')} ⚠️️️️️️️ ⚠️`);
