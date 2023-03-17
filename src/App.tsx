import Router from './routes';
import ThemeProvider from './theme';
import ThemeSettings from './components/settings';
import './i18n/i18n';
import { withTranslation } from 'react-i18next';
import 'simplebar-react/dist/simplebar.min.css';

function App() {
  return (
    <ThemeProvider>
      <ThemeSettings>
        <Router />
      </ThemeSettings>
    </ThemeProvider>
  );
}

export default withTranslation()(App);
