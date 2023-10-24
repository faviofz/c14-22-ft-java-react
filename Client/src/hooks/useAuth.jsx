import { useContext } from 'react';
import { AuthContext } from '@/context';

export function useAuth() {
  const { userState, onLogin, onLogout } = useContext(AuthContext);
  return { userState, onLogin, onLogout };
}
