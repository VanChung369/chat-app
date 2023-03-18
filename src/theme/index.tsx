import { ReactNode, useMemo } from 'react';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider as MUIThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import useSettings from '../hooks/useSettings';
import palette from './palette';
import typography from './typography';
import breakpoints from './breakpoints';
import shadows, { customShadows } from './shadows';
import componentsOverride from './overrides';

type themeProviderProps = {
  children?: ReactNode;
};
export default function ThemeProvider({ children }: themeProviderProps) {
  const { themeMode, themeDirection } = useSettings();

  const isLight = themeMode === 'light';

  const themeOptions: any = {
    palette: isLight ? palette.light : palette.dark,
    typography,
    breakpoints,
    shape: { borderRadius: 8 },
    direction: themeDirection,
    shadows: isLight ? shadows.light : shadows.dark,
    customShadows: isLight ? customShadows.light : customShadows.dark,
  };

  const theme = createTheme(themeOptions);

  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
