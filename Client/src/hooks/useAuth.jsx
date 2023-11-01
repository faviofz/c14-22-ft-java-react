import { useContext } from 'react';
import { AuthContext } from '@/context';

export function useAuth() {
  const { authState, signUp, onLogin, onLogout, setErrorMessage, getUser, updateUser } =
    useContext(AuthContext);
  return { authState, signUp, onLogin, onLogout, setErrorMessage, getUser, updateUser };
}
