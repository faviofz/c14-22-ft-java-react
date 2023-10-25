import PropTypes from 'prop-types';
import { createContext, useMemo, useReducer } from 'react';
import { authReducer, initialState } from './reducer';
import { authActions } from './actions';
import { serviceLogin } from '@/services/auth.services';
import { userToUserApi } from '../../adapters';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [authState, dispatch] = useReducer(authReducer, initialState);

  const onLogin = async user => {
    try {
      const userApi = userToUserApi(user);
      const { token } = await serviceLogin(userApi);
      user.token = token;
      dispatch({ type: authActions.LOGIN, payload: user });
    } catch (error) {
      dispatch({ type: authActions.ERROR, payload: 'Error de autenticación' });
    }
  };

  const onLogout = () => {
    dispatch({ type: authActions.LOGOUT });
  };

  const valueMemo = useMemo(
    () => ({ authState, onLogin, onLogout }),
    [authState]
  );

  return (
    <AuthContext.Provider value={valueMemo}>{children}</AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node,
};
