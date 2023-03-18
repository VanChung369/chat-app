import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import useLocales from '../../hooks/useLocales';
import { ReactNode } from 'react';

type themeLocalizationProps = {
  children: ReactNode;
};

export default function ThemeLocalization({ children }: themeLocalizationProps) {
  const defaultTheme = useTheme();

  const { currentLang } = useLocales();
  const theme = createTheme(defaultTheme, currentLang.systemValue);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
