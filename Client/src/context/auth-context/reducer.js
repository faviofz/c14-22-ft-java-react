import { authActions } from './actions';

export const initialState = {
  user: JSON.parse(localStorage.getItem('userLogger')) || null,
  isLogged: JSON.parse(localStorage.getItem('isLogged')) || false,
  errorMessage: null,
};

export function authReducer(state, action) {
  if (action.type === authActions.GETUSER) {
    localStorage.setItem(
      'userLogger',
      JSON.stringify({ ...state.user, ...action.payload })
    );
    return {
      ...state,
      user: { ...state.user, ...action.payload },
    };
  }
  if (action.type === authActions.CREATE) {
    return {
      ...state,
      created: action.payload,
    };
  }

  if (action.type === authActions.LOGIN) {
    localStorage.setItem('userLogger', JSON.stringify(action.payload));
    localStorage.setItem('isLogged', JSON.stringify(true));
    return {
      ...state,
      user: action.payload,
      isLogged: true,
      errorMessage: null,
    };
  }

  if (action.type === authActions.LOGOUT) {
    localStorage.setItem('userLogger', JSON.stringify(null));
    localStorage.setItem('isLogged', JSON.stringify(false));
    return { ...initialState };
  }

  if (action.type === authActions.ERROR) {
    return { ...state, errorMessage: action.payload };
  }

  if (action.type === authActions.LOADING) {
    return { ...state, loading: action.payload };
  }

  // ? UPDATE USER
  if (action.type === authActions.UPDATEUSER) {
    const userMofication = { ...state.user, ...action.payload };
    localStorage.setItem('userLogger', JSON.stringify(userMofication));
    return { ...state, user: userMofication };
  }

  throw Error('Unknown action: ' + action.type);
}
