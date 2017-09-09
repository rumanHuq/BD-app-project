// @flow

import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../../Pages/Home';

import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar';
import Footer from '../../Components/Footer';

const Page = styled.article`
  background: #da0;
  grid-area: Page;
`;
export default () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          render={() => (
            <Router>
              <div>
                <Header />
                <Sidebar />
                <Page>
                  <Switch>
                    <Route exact path="/anywhere" component={Home} />
                  </Switch>
                </Page>
                <Footer />
              </div>
            </Router>
          )}
        />
      </Switch>
    </div>
  </Router>
);
