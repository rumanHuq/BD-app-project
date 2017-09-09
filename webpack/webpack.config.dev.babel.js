import StyleLintPlugin from 'stylelint-webpack-plugin';
import Webpack from 'webpack';
import { resolve } from 'path';
import { entry, devServer } from './webpack.config.properties';
import { Client } from './webpack.config.platform';

const dev = {
  entry,
  devServer,
  devtool: 'cheap-eval-source-map',
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        exclude: /node_modules/,
        loader: [
          'style-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                // Put postcss plugins
              ],
            },
          },
          'sass-loader',
        ],
      },
      {
        enforce: 'pre',
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: ['eslint-loader', 'stylelint-custom-processor-loader'],
      },
    ],
  },
  output: {},
  plugins: [
    new StyleLintPlugin({
      configFile: resolve(__dirname, '..', '.stylelintrc'),
      files: ['../src/Client/**/*.sass', '../src/Client/**/*.scss', '../src/Client/**/*.css'],
      quiet: false,
      emitErrors: false,
    }),
  ],
};
// Platform specific plugin
if (Client) {
  dev.plugins.push(new Webpack.HotModuleReplacementPlugin(), new Webpack.NamedModulesPlugin());
  dev.output.publicPath = `/${Client}/`;
}
export default dev;
