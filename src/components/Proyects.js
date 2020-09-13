import React from 'react';
import '../stylesheets/proyects.scss';
import { useTranslation } from 'react-i18next';

import Project from './Proyect';

import projects from '../content/projects.json';

function Proyects() {
  const { t } = useTranslation();

  const adalabProjects = projects.adalab.map((project) => {
    return (
      <Project
        key={project.description}
        githubUrl={project.urlGithub}
        webUrl={project.webUrl}
        description={project.description}
        technologies={project.technologies}
      />
    );
  });

  const personalProjects = projects.personal.map((project) => {
    return (
      <Project
        key={project.description}
        githubUrl={project.urlGithub}
        webUrl={project.webUrl}
        description={project.description}
        technologies={project.technologies}
      />
    );
  });

  return (
    <section id="projects" className="proyects-main">
      <h1>{t('menu.nav-projects')}</h1>
      <h3>{t('projects.personal')}</h3>
      <article className="projects-container">{personalProjects}</article>

      <h3 className="projects-adalab">{t('projects.adalab')}</h3>
      <article className="projects-container">{adalabProjects}</article>
    </section>
  );
}

export default Proyects;
