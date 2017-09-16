// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setLocale } from '../../../Actions-n-Reducers/language';
import LanguageMenu from './style';

class Language extends Component {
  componentWillMount() {
    const locale = (navigator.languages && navigator.languages[0]) || navigator.language || 'bn';
    this.props.setLocale(locale);
  }

  setLanguage = (e: KeyboardEvent) =>
    (e.target.innerText === 'English' ? this.props.setLocale('En') : this.props.setLocale('বাং'));

  props: {
    setLocale: Function,
    locale: string,
    getLocale: Function,
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
          <p>{this.props.locale.startsWith('en-US') ? 'En' : this.props.locale}</p>
        </li>
        <li>
          <span onClick={e => this.setLanguage(e) && this.props.getLocale('বাং')}>বাংলা</span>
        </li>
        <li>
          <span onClick={e => this.setLanguage(e) && this.props.getLocale('En')}>English</span>
        </li>
      </LanguageMenu>
    );
  }
}

const mapDispatchToProps = state => ({
  locale: state.localeReducer.locale,
});

export default connect(mapDispatchToProps, { setLocale })(Language);
