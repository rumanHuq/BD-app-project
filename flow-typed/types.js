// flow

declare var module: {
  hot: {
    accept(path: string, callback: () => void): void
  }
};

declare type ACTIONS = 'SET_LOCALE';
declare type ACTION_CREATORS<A: ACTIONS, P> = {|
  type: A,
  payload: P
|};

export type Action = ACTION_CREATORS<'SET_LOCALE', string>;
