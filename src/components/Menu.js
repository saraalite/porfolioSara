import React from 'react';
import '../stylesheets/menu.scss';
import { useTranslation } from 'react-i18next';

function Menu() {
  const { t, i18n } = useTranslation();
  return (
    <header className="main-menu">
      <div className="language-button-container">
        <button
          className="language-button button-es"
          type="button"
          onClick={() => i18n.changeLanguage('es')}
        >
          ES
        </button>
        <button
          className="language-button"
          type="button"
          onClick={() => i18n.changeLanguage('en')}
        >
          EN
        </button>
      </div>
      <p>{t('sections.main.menu.nav1')}</p>
      <p>{t('sections.main.menu.nav2')}</p>
    </header>
  );
}

export default Menu;
