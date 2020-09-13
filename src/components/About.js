import React, { useState } from 'react';
import '../stylesheets/about.scss';
import { useTranslation } from 'react-i18next';
import reflective from '../assets/images/me/reflective.png';
import serius from '../assets/images/me/serius.png';
import gulp from '../assets/images/technologies/gulp.svg';
import css from '../assets/images/technologies/css.svg';
import html from '../assets/images/technologies/html5.svg';
import javascript from '../assets/images/technologies/javascript.svg';
import sass from '../assets/images/technologies/sass.svg';
import react from '../assets/images/technologies/react.svg';
import git from '../assets/images/technologies/git.svg';
import github from '../assets/images/icons/github.svg';

import { ReactComponent as AboutBackground } from '../assets/images/backgrounds/about.svg';

function About() {
  const [chancheColorFormAndImage, setChancheColorFormAndImage] = useState(
    false
  );
  const { t } = useTranslation();

  return (
    <div
      onTouchStart={() => setChancheColorFormAndImage(true)}
      onTouchEnd={() => setChancheColorFormAndImage(false)}
      onMouseEnter={() => setChancheColorFormAndImage(true)}
      onMouseLeave={() => setChancheColorFormAndImage(false)}
      style={{
        '--change-background': chancheColorFormAndImage ? 'white' : 'black',
      }}
    >
      <section id="about" className="about-main">
        <h1 className="about-title">{t('menu.nav-about')}</h1>
        <AboutBackground className="about-background" />
        <article className="about-flex">
          <img
            className="me-image"
            src={chancheColorFormAndImage ? serius : reflective}
            alt="Sara Alite"
          />
          <article className="about-text">
            <p>{t('about.hello')}</p>
            <p>{t('about.studies')}</p>
            <p>{t('about.tech')}</p>
            <p>{t('about.hobbies')}</p>
          </article>
        </article>
        <article>
          <h4 className="about-secondary-title">{t('about.whatcanIdo')}</h4>
          <p className="about-secondary-title">{t('about.title-tech')}</p>
          <div className="about-flex-container">
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
    </div>
  );
}

export default About;
