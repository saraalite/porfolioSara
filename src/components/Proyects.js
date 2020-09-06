import React from 'react';
import '../stylesheets/proyects.scss';
import { useTranslation } from 'react-i18next';

function Proyects() {
  const { t } = useTranslation();
  return (
    <section className="proyects-main">
      <p>{t('sections.main.menu.nav2')}</p>
    </section>
  );
}

export default Proyects;
