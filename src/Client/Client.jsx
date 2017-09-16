// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
// import * as OfflinePluginRuntime from 'offline-plugin/runtime';
import App from './App';

const render = (Component) => {
  // OfflinePluginRuntime.install();
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app'),
  );
};

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default; // eslint-disable-line global-require
    render(NextApp);
  });
}
render(App);
