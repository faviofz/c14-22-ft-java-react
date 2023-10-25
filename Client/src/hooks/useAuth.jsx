import { useContext } from 'react';
import { AuthContext } from '@/context';

export function useAuth() {
  const { authState, onLogin, onLogout, setErrorMessage } =
    useContext(AuthContext);
  return { authState, onLogin, onLogout, setErrorMessage };
}
