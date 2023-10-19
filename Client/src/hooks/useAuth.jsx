import { useContext } from 'react';
import { AuthContext } from '@/context';

export function useAuth() {
  const { userState, loginUser, logoutUser } = useContext(AuthContext);
  return { userState, loginUser, logoutUser };
}
