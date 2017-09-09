_*HMR setup*_
1. entry should be updated with
```
entry: ['react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:8000',
      'webpack/hot/only-dev-server/',
      'SRC_FILE']
```
2. Plugins to be included

```
new Webpack.HotModuleReplacementPlugin(),
    new Webpack.NamedModulesPlugin(),
```
3. 
```
plugins: [
   new Webpack.HotModuleReplacementPlugin(),
   new Webpack.NamedModulesPlugin(),
]
```
4. .babelrc needs to be updated
```
"plugins": ["react-hot-loader/babel"]
```

5. entry js needs to be updated
```
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default; // eslint-disable-line global-require
    render(NextApp);
  });
}
```