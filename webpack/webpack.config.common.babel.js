import NodeExternals from 'webpack-node-externals';
import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin';
import OfflinePlugin from 'offline-plugin';
import WebpackCopyPlugin from 'copy-webpack-plugin';
import { Client, Server } from './webpack.config.platform';
import { WebpackCopySetting } from './webpack.config.properties';

const Extension = Client ? 'jsx' : 'js';
const Platform = Client || Server;

const common = {
  entry: ['babel-polyfill', resolve(__dirname, '..', 'src', Platform, `${Platform}.${Extension}`)],
  externals: [(Server && NodeExternals({})) || {}],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.json?$/,
        exclude: /node_modules/,
        loader: 'json-loader',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: ['url-loader?limit=10000', 'img-loader'],
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
        },
      },
    ],
  },
  output: {
    filename: `${Platform}.js`,
    path: resolve(__dirname, '..', 'dist', Platform),
  },
  plugins: [
    new WebpackCopyPlugin(Server ? [WebpackCopySetting] : []),
    new FriendlyErrorsWebpackPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  stats: {
    colors: true,
  },
  target: Client ? 'web' : 'node',
};

// Platform specific plugins
if (Client) {
  common.plugins.push(
    new HtmlWebpackPlugin({
      filename: resolve(__dirname, '..', 'dist', 'index.html'),
      inject: false,
      hash: true,
      template: resolve(__dirname, '..', 'src', 'index.html'),
    }),
    new OfflinePlugin(),
  );
}
// bundled file uses output.publicPath as context
// below code will render actual path,instead of publicPath
if (Server) {
  common.node = {
    __filename: false,
    __dirname: false,
  };
}
export default common;
