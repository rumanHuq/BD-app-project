// @flow
// absolute import is implemented, but relative-import is recommended
// as VSCODE can jump into file in relative imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { IntlProvider, addLocaleData } from 'react-intl';
import bn from 'react-intl/locale-data/bn';
import en from 'react-intl/locale-data/en';
import { setLocale } from '../../Actions-n-Reducers/language';
import flattenMessages from '../../Language/flattenMessage';
import messages from '../../Language/messages';

import Home from './Pages/Home';
import Login from './Pages/Login';

import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar';
import Footer from '../../Components/Footer';

const Page = styled.section`
  background: #da9;
  grid-area: Page;
`;

let locale = (navigator.languages && navigator.languages[0]) || navigator.language || 'bn';
addLocaleData([...en, ...bn]);
const getLocale = (language) => {
  locale = language === 'En' ? 'en-US' : 'bn';
  return locale;
};

const NestedRouter = () => (
  <Router>
    <article>
      <Header />
      <Sidebar />
      <Page>
        <Switch>
          <Route exact path="/immigration" render={() => <div>immigration</div>} />
          <Route render={() => <div>404</div>} />
        </Switch>
      </Page>
      <Footer />
    </article>
  </Router>
);

class Content extends Component {
  componentWillMount() {}
  render() {
    return (
      <IntlProvider locale={locale} messages={flattenMessages(messages[locale])}>
        <Router>
          <article>
            <Switch>
              <Route exact path="/" render={() => <Home getLocale={getLocale} />} />
              <Route path="/login" component={Login} />
              <Route render={NestedRouter} />
            </Switch>
          </article>
        </Router>
      </IntlProvider>
    );
  }
}

const mapDispatchToProps = state => ({ locale: state });

export default connect(mapDispatchToProps, { setLocale })(Content);
