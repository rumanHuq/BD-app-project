// @flow

import { combineReducers, createStore, compose } from 'redux';

import { LocaleReducer } from './Actions-n-Reducers/language';

export default createStore(
  combineReducers({ localeReducer: LocaleReducer }),
  compose(typeof window === 'object' && window.devToolsExtension ? window.devToolsExtension() : f => f),
);
