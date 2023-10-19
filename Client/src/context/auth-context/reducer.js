import { authActions } from './actions';

export const initialState = {
  user: {},
  logged: false,
};

export function authReducer(state, action) {
  if (action.type === authActions.LOGIN) {
    return { ...state, user: action.payload, logged: true };
  }
  if (action.type === authActions.LOGOUT) {
    return initialState;
  }
  throw Error('Unknown action: ' + action.type);
}
