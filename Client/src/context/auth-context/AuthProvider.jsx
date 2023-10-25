import PropTypes from 'prop-types';
import { createContext, useMemo, useReducer } from 'react';
import { authReducer, initialState } from './reducer';
import { authActions } from './actions';
import { serviceLogin, serviceSignUp } from '@/services/auth.services';
import { userApiToUser, userToUserApi } from '@/adapters';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [authState, dispatch] = useReducer(authReducer, initialState);

  const signUp = async newUser => {
    try {
      dispatch({ type: authActions.ERROR, payload: null });
      dispatch({ type: authActions.LOADING, payload: true });

      const userApi = userToUserApi(newUser);
      await serviceSignUp(userApi);
      dispatch({ type: authActions.CREATE, payload: userApiToUser(userApi) });
      // login after register
      onLogin(userApiToUser(userApi));
    } catch (error) {
      dispatch({ type: authActions.ERROR, payload: 'Error de registro' });
    } finally {
      dispatch({ type: authActions.LOADING, payload: false });
    }
  };

  const onLogin = async user => {
    try {
      dispatch({ type: authActions.ERROR, payload: null });
      dispatch({ type: authActions.LOADING, payload: true });

      const currentUser = { ...user };
      const userApi = userToUserApi(currentUser);
      const { token } = await serviceLogin(userApi);
      currentUser.token = token;
      delete currentUser.password;

      dispatch({ type: authActions.LOGIN, payload: currentUser });
    } catch (error) {
      dispatch({
        type: authActions.ERROR,
        payload: 'Datos de autenticación inválidos',
      });
    } finally {
      dispatch({ type: authActions.LOADING, payload: false });
    }
  };

  const onLogout = () => {
    dispatch({ type: authActions.LOGOUT });
  };

  const setErrorMessage = message => {
    dispatch({ type: authActions.ERROR, payload: message });
  };

  const valueMemo = useMemo(
    () => ({ authState, signUp, onLogin, onLogout, setErrorMessage }),
    [authState]
  );

  return (
    <AuthContext.Provider value={valueMemo}>{children}</AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node,
};
