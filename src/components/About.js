import React from 'react';
import '../stylesheets/about.scss';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();
  return (
    <section className="about-main">
      <p>{t('sections.main.menu.nav1')}</p>
    </section>
  );
}

export default About;
