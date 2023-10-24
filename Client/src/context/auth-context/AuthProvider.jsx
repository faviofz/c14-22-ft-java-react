import PropTypes from 'prop-types';
import { createContext, useMemo, useReducer } from 'react';
import { authReducer, initialState } from './reducer';
import { authActions } from './actions';
import { serviceLogin } from '@/services/auth.services';
import { userToUserApi } from '../../adapters';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [userState, dispatch] = useReducer(authReducer, initialState);

  const onLogin = async user => {
    try {
      const userApi = userToUserApi(user);
      const { token } = await serviceLogin(userApi);
      user.token = token;
      dispatch({ type: authActions.LOGIN, payload: user });
    } catch (error) {
      console.log('error de autenticacion');
    }
  };

  const onLogout = () => {
    dispatch({ type: authActions.LOGOUT });
  };

  const valueMemo = useMemo(
    () => ({ userState, onLogin, onLogout }),
    [userState]
  );

  return (
    <AuthContext.Provider value={valueMemo}>{children}</AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node,
};
