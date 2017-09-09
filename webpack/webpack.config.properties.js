import { resolve } from 'path';
import { Client, Server } from './webpack.config.platform';

export const devServer = Client
  ? {
    port: 8000,
    hot: true,
    contentBase: resolve(__dirname, '..', 'src'),
    quiet: true,
    historyApiFallback: true,
  }
  : {};
export const entry = Client
  ? [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8000',
    'webpack/hot/only-dev-server/',
  ]
  : [];

export const WebpackCopySetting = Server && {
  from: resolve(__dirname, '..', 'src', Server, 'templates'),
  to: resolve(__dirname, '..', 'dist', Server, 'templates'),
};
