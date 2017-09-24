// @flow

import React, { Component } from 'react';
import styled from 'styled-components';

import toEM from '../../../../Styles/helpers';

const Login = styled.form`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;

  .input-group {
    margin-top: ${toEM(28)};
    position: relative;
  }

  input {
    background: none;
    border: ${toEM(1)} solid ${({ theme }) => theme.green};
    display: inline-block;
    font-size: ${toEM(18)};

    &:focus,
    &:active {
      outline: none;
    }

    &:focus + label,
    &.has-value + label {
      transform: translateY(-100%);
    }

    &[type='text'],
    &[type='password'] {
      border: 0;
      border-bottom: ${toEM(1)} solid ${({ theme }) => theme.green};
      padding: 0 0 ${toEM(5)} ${toEM(5)};
    }

    &[type='submit'] {
      color: ${({ theme }) => theme.green};
      display: inline-block;
      margin-top: ${toEM(25)};
      width: 100%;

      &:active {
        background: ${({ theme }) => theme.green};
        color: #fff;
      }
    }
  }

  label {
    color: #999;
    font-weight: italic;
    left: 0;
    padding: 0 0 ${toEM(5)} ${toEM(5)};
    pointer-events: none;
    position: absolute;
  }
`;
export default class extends Component {
  state = {
    error: {},
    input: {
      email: '',
      password: '',
    },
  };
  renderInput = () => {
    this.setState({
      input: {
        email: this.email.value || '',
        password: this.password.value || '',
      },
    });
  };
  render() {
    return (
      <Login>
        <div className="flex-wrapper">
          <h2>Login</h2>
          <div className="input-group">
            <input
              ref={(node) => {
                this.email = node;
              }}
              type="text"
              name="email"
              id="email"
              className={this.state.input.email && 'has-value'}
              onChange={this.renderInput}
              value={this.state.input.email}
            />
            <label htmlFor="email">E-mail:</label>
          </div>
          <div className="input-group">
            <input
              ref={(node) => {
                this.password = node;
              }}
              type="password"
              name="password"
              id="password"
              className={this.state.input.password && 'has-value'}
              onChange={this.renderInput}
              value={this.state.input.password}
            />
            <label htmlFor="password">Password:</label>
          </div>
          <input type="submit" value="Login" />
        </div>
      </Login>
    );
  }
}
