import { useEffect, useState } from 'react';

export const useThemeMode = () => {
  const [theme, setTheme] = useState('light');

  const setMode = (mode: string) => {
    window.localStorage.setItem('@SPB-WEB.theme', mode);
    setTheme(mode);
  };

  const themeToggler = () =>
    theme === 'light' ? setMode('dark') : setMode('light');

  useEffect(() => {
    const localTheme = window.localStorage.getItem('@SPB-WEB.theme');
    localTheme && setTheme(localTheme);
  }, [theme]);

  return { theme, themeToggler };
};
