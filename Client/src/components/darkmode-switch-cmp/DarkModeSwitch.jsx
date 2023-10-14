import { useEffect, useState } from 'react';

export function DarkModeSwitch() {
  const [darkmode, setDarkmode] = useState(
    JSON.parse(localStorage.getItem('darkmode'))
  );

  const handleChange = e => {
    localStorage.setItem('darkmode', JSON.stringify(e.target.checked));
    setDarkmode(e.target.checked);
  };

  useEffect(() => {
    document
      .querySelector('html')
      .setAttribute('data-theme', darkmode ? 'projectDark' : 'projectLight');
  }, [darkmode]);
  return (
    <div className='flex items-center justify-between gap-[.5rem]'>
      {darkmode ? 'Modo oscuro' : 'Modo claro'}
      <input
        type='checkbox'
        className='toggle toggle-xs toggle-primary'
        checked={darkmode}
        onChange={handleChange}
      />
    </div>

  );
}
