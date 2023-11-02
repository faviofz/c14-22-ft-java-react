import PropTypes from 'prop-types';
import { createContext, useMemo, useReducer } from 'react';
import { authReducer, initialState } from './reducer';
import { authActions } from './actions';
import {
  serviceLogin,
  serviceSignUp,
  serviceGetUser,
  serviceUpdateUser,
  serviceResetPassword,
  serviceChangePassword,
} from '@/services/auth.services';
import { userApiToUser, userToUserApi } from '@/adapters';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [authState, dispatch] = useReducer(authReducer, initialState);

  const getUser = async () => {
    try {
      dispatch({ type: authActions.ERROR, payload: null });
      dispatch({ type: authActions.LOADING, payload: true });

      const userApi = await serviceGetUser();
      const user = userApiToUser(userApi);
      delete user.password;
      dispatch({ type: authActions.GETUSER, payload: user });
    } catch (error) {
      dispatch({ type: authActions.ERROR, payload: error });
    } finally {
      dispatch({ type: authActions.LOADING, payload: false });
    }
  };

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

      const userApi = userToUserApi(user);
      const { token } = await serviceLogin(userApi);

      dispatch({ type: authActions.LOGIN, payload: { token } });
    } catch (error) {
      dispatch({
        type: authActions.ERROR,
        payload: 'Datos de autenticación inválidos',
      });
    } finally {
      dispatch({ type: authActions.LOADING, payload: false });
    }
  };

  const updateUser = async user => {
    try {
      dispatch({ type: authActions.ERROR, payload: null });
      dispatch({ type: authActions.LOADING, payload: true });

      const userApi = userToUserApi(user);
      const response = await serviceUpdateUser(userApi);
      const userResponse = userApiToUser(response);
      dispatch({ type: authActions.UPDATEUSER, payload: userResponse });
    } catch (error) {
      dispatch({
        type: authActions.ERROR,
        payload: 'Datos inválidos',
      });
    } finally {
      dispatch({ type: authActions.LOADING, payload: false });
    }
  };

  const resetPassword = async email => {
    try {
      dispatch({ type: authActions.ERROR, payload: null });
      dispatch({ type: authActions.MESSAGE, payload: null });
      dispatch({ type: authActions.LOADING, payload: true });

      await serviceResetPassword(email);

      dispatch({
        type: authActions.MESSAGE,
        payload:
          'Le hemos enviado por correo electrónico un enlace para restablecer su contraseña',
      });
    } catch (error) {
      dispatch({
        type: authActions.ERROR,
        payload: 'Vuelve a intertarlo',
      });
    } finally {
      dispatch({ type: authActions.LOADING, payload: false });
    }
  };

  const changePassword = async objectOfChange => {
    try {
      dispatch({ type: authActions.ERROR, payload: null });
      dispatch({ type: authActions.MESSAGE, payload: null });
      dispatch({ type: authActions.LOADING, payload: true });

      dispatch({
        type: authActions.MESSAGE,
        payload: 'Contraseña cambiada',
      });

      const hasChanged = await serviceChangePassword(objectOfChange);
      return hasChanged;
    } catch (error) {
      dispatch({
        type: authActions.ERROR,
        payload: 'Enlace no válido',
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

  const setMessage = message => {
    dispatch({ type: authActions.MESSAGE, payload: message });
  };

  const valueMemo = useMemo(
    () => ({
      authState,
      signUp,
      onLogin,
      onLogout,
      setErrorMessage,
      setMessage,
      getUser,
      updateUser,
      resetPassword,
      changePassword,
    }),
    [authState]
  );

  return (
    <AuthContext.Provider value={valueMemo}>{children}</AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node,
};
