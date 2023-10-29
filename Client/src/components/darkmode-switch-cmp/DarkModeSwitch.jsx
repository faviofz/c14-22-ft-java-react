import { useDarkMode } from '@/hooks';
import { LightIcon, DarkIcon } from '@/assets/svg';
import PropTypes from 'prop-types';

export function DarkModeSwitch({ icons = false }) {
  const { darkmode, changeThemeMode } = useDarkMode();

  return (
    <div className='flex items-center justify-between gap-[.5rem]'>
      {darkmode ? (
        icons ? (
          <DarkIcon className='[&>path]:fill-secondary-content' />
        ) : (
          'Modo oscuro'
        )
      ) : icons ? (
        <LightIcon className='[&>path]:fill-secondary-content' />
      ) : (
        'Modo claro'
      )}
      <input
        type='checkbox'
        className='toggle toggle-xs toggle-primary'
        checked={darkmode}
        onChange={changeThemeMode}
      />
    </div>
  );
}

DarkModeSwitch.propTypes = {
  icons: PropTypes.bool,
};
