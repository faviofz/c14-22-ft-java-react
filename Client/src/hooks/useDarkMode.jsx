import { useContext } from 'react';
import { DarkmodeContext } from '@/context';

export function useDarkMode() {
  const { darkmode, changeThemeMode } = useContext(DarkmodeContext);
  return { darkmode, changeThemeMode };
}
