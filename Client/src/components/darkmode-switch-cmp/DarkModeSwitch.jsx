import { useDarkMode } from '@/hooks';

export function DarkModeSwitch() {
  const { darkmode, changeThemeMode } = useDarkMode();

  return (
    <div className='flex items-center justify-between gap-[.5rem]'>
      {darkmode ? 'Modo oscuro' : 'Modo claro'}
      <input
        type='checkbox'
        className='toggle toggle-xs toggle-primary'
        checked={darkmode}
        onChange={changeThemeMode}
      />
    </div>
  );
}
