// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setLocale } from '../../../../../Actions-n-Reducers/language';
import LanguageMenu from './style';

// @flow
type Props = {
  setLocale: Function,
  locale: string,
  getLocale: Function,
};
class Language extends Component<Props> {
  componentWillMount() {
    const locale = (navigator.languages && navigator.languages[0]) || navigator.language || 'bn';
    this.props.setLocale(locale);
  }

  setLanguage: Function = (e: KeyboardEvent) =>
    e.target.innerText === 'English' ? this.props.setLocale('En') : this.props.setLocale('বাং');

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
          <span>
            <button onClick={(e: KeyboardEvent) => this.setLanguage(e) && this.props.getLocale('বাং')}>বাংলা</button>
          </span>
        </li>
        <li>
          <span>
            <button onClick={(e: KeyboardEvent) => this.setLanguage(e) && this.props.getLocale('En')}>English</button>
          </span>
        </li>
      </LanguageMenu>
    );
  }
}

const mapDispatchToProps = state => ({
  locale: state.localeReducer.locale,
});

export default connect(mapDispatchToProps, { setLocale })(Language);
