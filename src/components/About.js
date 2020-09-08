import React from 'react';
import '../stylesheets/about.scss';
import { useTranslation } from 'react-i18next';
import fotoSara from '../assets/images/fotosara.jpeg';

function About() {
  const { t } = useTranslation();
  return (
    <section className="about-main">
      <h1 className="about-title">{t('sections.main.menu.nav1')}</h1>
      <article className="about-flex">
        <img className="foto-sara" src={fotoSara} alt="Sara Alite" />
        <article className="about-text">
          <p>{t('about.p1')}</p>
          <p>{t('about.p2')}</p>
          <p>{t('about.p3')}</p>
          <p>{t('about.p4')}</p>
          <p>{t('about.p5')}</p>
          <p>{t('about.p6')}</p>
        </article>
      </article>
    </section>
  );
}

export default About;
