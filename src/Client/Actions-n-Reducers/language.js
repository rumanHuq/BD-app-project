// @flow
const actionType = {
  SET_LOCALE: 'SET_LOCALE',
};

export const setLocale = (payload: string) => ({
  type: actionType.SET_LOCALE,
  payload,
});

type State = { locale: string };
type Action = { type: string, payload: string };

export const LocaleReducer = (state: State = { locale: '' }, action: Action) => {
  switch (action.type) {
    case actionType.SET_LOCALE:
      return { ...state, locale: action.payload };
    default:
      return state;
  }
};
