/* @flow */

import React from 'react';
import { injectGlobal, ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import { globalStyle, theme } from './Styles/globalStyle';

import Store from './Store';

import Content from './Components/Content';

injectGlobal`${globalStyle}`; //eslint-disable-line

const App: Function = () => (
  <Provider store={Store}>
    <ThemeProvider theme={theme}>
      <div style={{ minWidth: '100vh' }}>
        <Content />
      </div>
    </ThemeProvider>
  </Provider>
);

export default App;
