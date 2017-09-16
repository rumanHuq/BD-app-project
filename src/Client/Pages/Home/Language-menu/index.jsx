// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setLocale } from './actions';
import LanguageMenu from './style';

class Language extends Component {
  componentWillMount() {
    this.props.setLocale('En');
  }

  setLanguage = (e: KeyboardEvent) =>
    (e.target.innerText === 'English' ? this.props.setLocale('En') : this.props.setLocale('বাং'));

  props: {
    setLocale: Function,
    locale: string,
  };

  render() {
    if (!this.props.locale) {
      return (
        <LanguageMenu>
          <li>
            <p>Region Not set Yet</p>
          </li>
        </LanguageMenu>
      );
    }

    return (
      <LanguageMenu>
        <li>
          <p>{this.props.locale}</p>
        </li>
        <li>
          <span onClick={this.setLanguage}>বাংলা</span>
        </li>
        <li>
          <span onClick={this.setLanguage}>English</span>
        </li>
      </LanguageMenu>
    );
  }
}

const mapDispatchToProps = state => ({
  locale: state.localeReducer.locale,
});

export default connect(mapDispatchToProps, { setLocale })(Language);
