import React, { Component } from 'react';
import LanguageMenu from './style';

export default class extends Component {
  state = {
    ln: 'En',
  };
  setLanguage = (e) => {
    if (e.target.innerText === 'English') this.setState({ ln: 'En' });
    else this.setState({ ln: 'বাং' });
    return this.state;
  };
  render() {
    return (
      <LanguageMenu>
        <li>
          <p>{this.state.ln}</p>
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
