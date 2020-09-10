import React from 'react';
import '../stylesheets/proyects.scss';
import { useTranslation } from 'react-i18next';
import github from '../assets/images/github.svg';
import link from '../assets/images/link.svg';

function Proyects() {
  const { t } = useTranslation();
  return (
    <section className="proyects-main">
      <h1>{t('sections.main.menu.nav2')}</h1>
      {t('projects.p-personal')}
      <article className="projects-container">
        <div className="project">
          <div className="project-test" />
          <nav>
            <img className="project-link" src={github} alt="github logo" />
            <img className="project-link" src={link} alt="external link" />
          </nav>
          <p>{t('projects.p-porfolio')}</p>
        </div>
        <div className="project">
          <div className="project-test" />
          <nav>
            <img className="project-link" src={github} alt="github logo" />
            <img className="project-link" src={link} alt="external link" />
          </nav>
          <p>{t('projects.p-recipes')}</p>
        </div>
      </article>

      {t('projects.p-adalab')}
      <article className="projects-container">
        <div className="project">
          <div className="project-test" />
          <nav>
            <a
              href="https://github.com/Adalab/modulo-1-evaluacion-final-saraalite"
              target="_blank"
            >
              <img className="project-link" src={github} alt="github logo" />
            </a>
            <a
              href="https://beta.adalab.es/modulo-1-evaluacion-final-saraalite/"
              target="_blank"
            >
              <img className="project-link" src={link} alt="external link" />
            </a>
          </nav>
          <p>{t('projects.p-css')}</p>
        </div>
        <div className="project">
          <div className="project-test" />
          <nav>
            <a
              href="https://github.com/Adalab/project-promo-j-module-1-team-4"
              target="_blank"
            >
              <img className="project-link" src={github} alt="github logo" />
            </a>
            <a
              href="https://beta.adalab.es/project-promo-j-module-1-team-4/"
              target="_blank"
            >
              <img className="project-link" src={link} alt="external link" />
            </a>
          </nav>
          <p>{t('projects.p-css-group')}</p>
        </div>
        <div className="project">
          <div className="project-test" />
          <nav>
            <a
              href="https://github.com/Adalab/project-promo-j-module-2-team-3-morning"
              target="_blank"
            >
              <img className="project-link" src={github} alt="github logo" />
            </a>
            <a
              href="https://beta.adalab.es/project-promo-j-module-2-team-3-morning/"
              target="_blank"
            >
              <img className="project-link" src={link} alt="external link" />
            </a>
          </nav>
          <p>{t('projects.p-javascript-group')}</p>
        </div>
        <div className="project">
          <div className="project-test" />
          <nav>
            <a
              href="https://github.com/Adalab/modulo-2-evaluacion-intermedia-saraalite"
              target="_blank"
            >
              <img className="project-link" src={github} alt="github logo" />
            </a>
            <a
              href="https://beta.adalab.es/modulo-2-evaluacion-intermedia-saraalite/"
              target="_blank"
            >
              <img className="project-link" src={link} alt="external link" />
            </a>
          </nav>
          <p>{t('projects.p-javascript')}</p>
        </div>
        <div className="project">
          <div className="project-test" />
          <nav>
            <a
              href="https://github.com/Adalab/project-promo-j-module-3-team-2"
              target="_blank"
            >
              <img className="project-link" src={github} alt="github logo" />
            </a>
            <a
              href="https://beta.adalab.es/project-promo-j-module-3-team-2/#/"
              target="_blank"
            >
              <img className="project-link" src={link} alt="external link" />
            </a>
          </nav>
          <p>{t('projects.p-react-group')}</p>
        </div>
        <div className="project">
          <div className="project-test" />
          <nav>
            <a
              href="https://github.com/Adalab/modulo-3-evaluacion-final-saraalite"
              target="_blank"
            >
              <img className="project-link" src={github} alt="github logo" />
            </a>
            <a
              href="https://beta.adalab.es/modulo-3-evaluacion-final-saraalite/#/"
              target="_blank"
            >
              <img className="project-link" src={link} alt="external link" />
            </a>
          </nav>
          <p>{t('projects.p-react')}</p>
        </div>
      </article>
    </section>
  );
}

export default Proyects;
