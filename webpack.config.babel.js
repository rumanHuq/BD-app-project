import merge from 'webpack-merge';
import common from './webpack/webpack.config.common.babel';

export default () => {
  const ENV = process.env.NODE_ENV;
  const BUILD = require(`./webpack/webpack.config.${ENV}.babel`).default; //eslint-disable-line
  return merge.strategy({ entry: 'prepend' })(common, BUILD);
};
