// @flow

import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../../Pages/Home';

import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar';
import Footer from '../../Components/Footer';

const Page = styled.section`
  background: #da9;
  grid-area: Page;
`;
const NestedRouter = () => (
  <Router>
    <article>
      <Header />
      <Sidebar />
      <Page>
        <Switch>
          <Route exact path="/anywhere" component={Home} />
          <Route render={() => <div>404</div>} />
        </Switch>
      </Page>
      <Footer />
    </article>
  </Router>
);

export default () => (
  <Router>
    <article>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route render={NestedRouter} />
      </Switch>
    </article>
  </Router>
);
