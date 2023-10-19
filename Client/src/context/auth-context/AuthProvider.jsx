import PropTypes from 'prop-types';
import { createContext, useMemo, useReducer } from 'react';
import { authReducer, initialState } from './reducer';
import { authActions } from './actions';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [userLogged, dispatch] = useReducer(authReducer, initialState);

  const loginUser = user => {
    console.log('aaaaa');
    dispatch({ type: authActions.LOGIN, payload: user });
  };

  const logoutUser = () => {
    dispatch({ type: authActions.LOGOUT });
  };

  const valueMemo = useMemo(
    () => ({ userLogged, loginUser, logoutUser }),
    [userLogged]
  );

  return (
    <AuthContext.Provider value={valueMemo}>{children}</AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node,
};
