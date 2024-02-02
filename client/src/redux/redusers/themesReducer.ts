/* eslint-disable @typescript-eslint/default-param-last */
/* eslint-disable import/prefer-default-export */
import type { Action, State } from '../types';

const initState: State = {
    themes: [],
};

export const themesReducer = (state: State = initState, action: Action): State => {
  switch (action.type) {
    case 'themes/load':
      return {
        ...state,
        themes: action.payload,
      };
    case 'answer':
      return {
        ...state,
        themes: action.payload,
      };
      default:
          return state;
  }
};
