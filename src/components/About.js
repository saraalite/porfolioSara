import React from 'react';
import '../stylesheets/about.scss';
import { useTranslation } from 'react-i18next';
import fotoSara from '../assets/images/fotosara.jpeg';
import gulp from '../assets/images/gulp.svg';
import css from '../assets/images/css.svg';
import html from '../assets/images/html5.svg';
import javascript from '../assets/images/javascriptlogo.svg';
import sass from '../assets/images/sass.svg';
import react from '../assets/images/react.svg';
import git from '../assets/images/git.svg';
import github from '../assets/images/github.svg';

function About() {
  const { t } = useTranslation();
  return (
    <section className="about-main">
      <h1 className="about-title">{t('sections.main.menu.nav1')}</h1>
      <article className="about-flex">
        <img className="foto-sara" src={fotoSara} alt="Sara Alite" />
        <article className="about-text">
          <p>{t('about.p-hello')}</p>
          <p>{t('about.p-studies')}</p>
          <p>{t('about.p-tech')}</p>
          <p>{t('about.p-hobbies')}</p>
        </article>
      </article>
      <article>
        <h4 className="about-secondary-title">{t('about.p-whatcanIdo')}</h4>
        <p className="about-secondary-title">{t('about.p-title-tech')}</p>
        <div className="about-grid-container">
          <img className="tech-icon" src={css} alt="css logo" />
          <img className="tech-icon" src={html} alt="html logo" />
          <img className="tech-icon" src={sass} alt="sass logo" />
          <img className="tech-icon" src={gulp} alt="gulp logo" />
          <img className="tech-icon" src={javascript} alt="javascript logo" />
          <img className="tech-icon" src={react} alt="react logo" />
          <img className="tech-icon" src={git} alt="git logo" />
          <img className="tech-icon" src={github} alt="github logo" />
        </div>
      </article>
    </section>
  );
}

export default About;
