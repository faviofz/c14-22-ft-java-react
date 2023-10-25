import { useContext } from 'react';
import { AuthContext } from '@/context';

export function useAuth() {
  const { authState, signUp, onLogin, onLogout, setErrorMessage } =
    useContext(AuthContext);
  return { authState, signUp, onLogin, onLogout, setErrorMessage };
}
