import { useContext } from 'react';
import { AuthContext } from '@/context';

export function useAuth() {
  const { authState, onLogin, onLogout } = useContext(AuthContext);
  return { authState, onLogin, onLogout };
}
