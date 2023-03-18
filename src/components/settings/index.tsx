import SettingsDrawer from './drawer';
import ThemeContrast from './ThemeContrast';
import ThemeColorPresets from './ThemeColorPresets';
import ThemeLocalization from './ThemeLocalization';
import { ReactNode } from 'react';

type themeSettingsProps = {
  children: ReactNode;
};

export default function ThemeSettings({ children }: themeSettingsProps) {
  return (
    <ThemeColorPresets>
      <ThemeContrast>
        <ThemeLocalization>
          {children}
          <SettingsDrawer />
        </ThemeLocalization>
      </ThemeContrast>
    </ThemeColorPresets>
  );
}
