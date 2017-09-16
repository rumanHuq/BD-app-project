import { combineReducers, createStore } from 'redux';

import { LocaleReducer } from './Actions-n-Reducers/language';

export default createStore(combineReducers({ localeReducer: LocaleReducer }));
