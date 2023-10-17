import { createContext, useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const DarkmodeContext = createContext();

export function DarkmodeProvider({ children }) {
  const [darkmode, setDarkmode] = useState(
    JSON.parse(localStorage.getItem('darkmode'))
  );

  const changeThemeMode = e => {
    localStorage.setItem('darkmode', JSON.stringify(e.target.checked));
    setDarkmode(e.target.checked);
  };

  useEffect(() => {
    document
      .querySelector('html')
      .setAttribute('data-theme', darkmode ? 'projectDark' : 'projectLight');
  }, [darkmode]);

  const valueMemo = useMemo(
    () => ({
      darkmode,
      changeThemeMode,
    }),
    [darkmode]
  );

  return (
    <DarkmodeContext.Provider value={valueMemo}>
      {children}
    </DarkmodeContext.Provider>
  );
}

DarkmodeProvider.propTypes = {
  children: PropTypes.node,
};
