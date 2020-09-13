import React from 'react';
import '../stylesheets/footer.scss';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();
  return (
    <section className="footer-main">
      <p className="footer-text"> {t('footer.develop')}</p>
      <p className="footer-text"> {t('footer.code')}</p>
    </section>
  );
}

export default Footer;
