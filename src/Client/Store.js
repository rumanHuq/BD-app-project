import { combineReducers, createStore } from 'redux';

import { LocaleReducer } from './Pages/Home/Language-menu/actions';

export default createStore(combineReducers({ localeReducer: LocaleReducer }));
