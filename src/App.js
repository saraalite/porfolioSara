import React from 'react';
import { useTranslation } from 'react-i18next';
import MyFirstComponent from './components/MyFirstComponent';

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <button type="button" onClick={() => i18n.changeLanguage('es')}>
        es-ES
      </button>
      <button type="button" onClick={() => i18n.changeLanguage('en')}>
        en-US
      </button>
      <MyFirstComponent />
      <h1>{t('welcome')}</h1>
    </div>
  );
}

export default App;
