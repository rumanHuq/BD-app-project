// @flow;

import React from 'react';
import styled, { injectGlobal } from 'styled-components/';

import globalStyle from './Styles/globalStyle';

import Content from './Components/Content';

injectGlobal`${globalStyle}`; //eslint-disable-line

const Container: Function = styled.div`min-height: 100vh;`;
const App: Function = () => (
  <Container>
    <Content />
  </Container>
);
export default App;
