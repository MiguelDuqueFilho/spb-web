import { ReactNode, createContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { useThemeMode } from '../../hook/useThemeMode';
import { darkTheme, lightTheme } from '../../styles/themes';

interface CustomThemeContextProviderProps {
  children: ReactNode;
}

export const CustomThemeContext = createContext({
  theme: '',
  themeMode: lightTheme,
  themeToggler: () => {},
});

export const CustomThemeProvider = ({
  children,
}: CustomThemeContextProviderProps) => {
  const { theme, themeToggler } = useThemeMode();

  const themeMode = theme === 'dark' ? darkTheme : lightTheme;

  return (
    <CustomThemeContext.Provider
      value={{
        theme,
        themeMode,
        themeToggler,
      }}
    >
      <ThemeProvider theme={themeMode}>{children}</ThemeProvider>;
    </CustomThemeContext.Provider>
  );
};
