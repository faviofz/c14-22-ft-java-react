import { authActions } from './actions';

export const initialState = {
  user: JSON.parse(localStorage.getItem('userLogger')) || {},
  isLogged: JSON.parse(localStorage.getItem('isLogged')) || false,
};

export function authReducer(state, action) {
  if (action.type === authActions.LOGIN) {
    localStorage.setItem('userLogger', JSON.stringify(action.payload));
    localStorage.setItem('isLogged', JSON.stringify(true));

    return { ...state, user: action.payload, isLogged: true };
  }
  if (action.type === authActions.LOGOUT) {
    localStorage.setItem('userLogger', JSON.stringify({}));
    localStorage.setItem('isLogged', JSON.stringify(false));

    return { ...initialState };
  }
  throw Error('Unknown action: ' + action.type);
}
