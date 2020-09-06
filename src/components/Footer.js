import React from 'react';
import '../stylesheets/footer.scss';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();
  return (
    <section className="footer-main">
      <p>{t('sections.main.menu.nav1')}</p>
      <p>{t('sections.main.menu.nav1')}</p>
    </section>
  );
}

export default Footer;
