import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import SettingsProvider from './contexts/SettingsContext';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <SettingsProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SettingsProvider>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>,
);
