
import { Action, AuthState } from './type';

const initState: AuthState = {
  auth: undefined,
};

export const authReducer = (state: AuthState = initState, action: Action): AuthState => {
  switch (action.type) {
    case 'auth/registration':
      return {
        ...state,
        auth: action.payload,
      };
    case 'auth/login':
      return {
        ...state,
        auth: action.payload,
      };
    case 'auth/logout':
      return {
        ...state,
        auth: undefined,
      };
    default:
      return state;
  }
};
