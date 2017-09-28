// @flow;

import React from 'react';
import styled, { injectGlobal, ThemeProvider } from 'styled-components/';
import { Provider } from 'react-redux';

import { globalStyle, theme } from './Styles/globalStyle';

import Store from './Store';

import Content from './Components/Content';

injectGlobal`${globalStyle}`; //eslint-disable-line

const Container: Function = styled.div`min-height: 100vh;`;
const App: Function = () => (
  <Provider store={Store}>
    <ThemeProvider theme={theme}>
      <Container>
        <Content />
      </Container>
    </ThemeProvider>
  </Provider>
);
export default App;
