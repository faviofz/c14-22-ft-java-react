import { useContext } from 'react';
import { AuthContext } from '@/context';

export function useAuth() {
  const { userLogged, loginUser, logoutUser } = useContext(AuthContext);
  return { userLogged, loginUser, logoutUser };
}
