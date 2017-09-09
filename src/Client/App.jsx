// @flow;

import React from 'react';
import styled, { injectGlobal, ThemeProvider } from 'styled-components/';

import { globalStyle, theme } from './Styles/globalStyle';

import Content from './Components/Content';

injectGlobal`${globalStyle}`; //eslint-disable-line

const Container: Function = styled.div`min-height: 100vh;`;
const App: Function = () => (
  <ThemeProvider theme={theme}>
    <Container>
      <Content />
    </Container>
  </ThemeProvider>
);
export default App;
