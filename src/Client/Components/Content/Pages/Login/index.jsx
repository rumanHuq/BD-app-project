// @flow

import React, { Component } from 'react';
import styled from 'styled-components';
import isEmail from 'validator/lib/isEmail';

import toEM from '../../../../Styles/helpers';

const Login = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  margin: auto;
  width: ${toEM(500)};

  form {
    width: inherit;
  }

  .input-group {
    margin-top: ${toEM(28)};
    position: relative;
    width: 100%;
  }

  input {
    background: none;
    border: ${toEM(1)} solid ${({ theme }) => theme.green};
    display: inline-block;
    font-size: ${toEM(18)};
    width: 100%;

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

  span {
    color: ${({ theme }) => theme.red};
  }
`;
export default class extends Component {
  state = {
    error: {
      email: '',
      password: '',
    },
    input: {
      email: '',
      password: '',
    },
  };
  onSubmit = (e: KeyboardEvent) => {
    const error = {};
    e.preventDefault();
    if (!isEmail(this.state.input.email)) error.email = 'Please Provide a Valid Email';
    if (this.state.input.password.length < 8) {
      error.password = 'Password Should be minimum of 8 charaacter';
    }
    this.setState({ error });
  };
  email: { value: string };
  password: { value: string };
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
      <Login onSubmit={this.onSubmit}>
        <form className="flex-wrapper">
          <h2>Login</h2>
          <div className="input-group">
            <input
              ref={(element) => {
                this.email = element;
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
          <span>{this.state.error.email && this.state.error.email} &nbsp;</span>
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
          <span>{this.state.error.password && this.state.error.password} &nbsp;</span>
          <input type="submit" value="Yup!!" />
        </form>
      </Login>
    );
  }
}
