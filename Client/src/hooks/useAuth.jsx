import { useContext } from 'react';
import { AuthContext } from '@/context';

export function useAuth() {
  const {
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
  } = useContext(AuthContext);
  return {
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
  };
}
