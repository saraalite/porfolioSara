import React from 'react';
import '../stylesheets/menu.scss';
import { useTranslation } from 'react-i18next';
import Scrollspy from 'react-scrollspy';

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
      <Scrollspy
        className="section-menu"
        items={['about', 'projects', 'contact']}
        currentClassName="is-current"
      >
        <li>
          <a href="#about">{t('menu.nav-about')}</a>
        </li>
        <li>
          <a href="#projects">{t('menu.nav-projects')}</a>
        </li>
        <li>
          <a href="#contact">{t('menu.nav-contact')}</a>
        </li>
      </Scrollspy>
    </header>
  );
}

export default Menu;
