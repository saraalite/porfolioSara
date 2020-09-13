import React from 'react';
import '../stylesheets/proyect.scss';
import { useTranslation } from 'react-i18next';
import github from '../assets/images/icons/github.svg';
import link from '../assets/images/icons/link.svg';

function Proyect({ githubUrl, webUrl, technologies, description }) {
  const { t } = useTranslation();
  const technologiesUrls = {
    javascript:
      'https://img.shields.io/badge/Javascript-grey?logo=javascript&logoColor=yellow',
    css: 'https://img.shields.io/badge/CSS3-blue?logo=css3&logoColor=white',
    html: 'https://img.shields.io/badge/HTML5-grey?logo=html5&logoColor=orange',
    mobile_first: 'https://img.shields.io/badge/Mobile_First-green',
    responsive: 'https://img.shields.io/badge/Responsive-blue',
    react: 'https://img.shields.io/badge/React-blue?logo=react&logoColor=white',
    sass: 'https://img.shields.io/badge/SASS-ff69b4?logo=SASS&logoColor=white',
  };

  const technologiesBadges = technologies.map((technology) => {
    return (
      <img
        className="tech-badge"
        key={technology}
        src={technologiesUrls[technology]}
        alt={technology}
      />
    );
  });

  let image;
  try {
    image = require(`../assets/images/projects/${description}.jpg`);
  } catch (err) {
    image = require(`../assets/images/projects/notFound.jpg`);
  }

  return (
    <div className="project">
      <div className="project-image">
        <a href={webUrl} target="_blank">
          <img src={image} alt={description} />
        </a>
      </div>
      <nav>
        <a href={githubUrl} target="_blank">
          <img className="project-link" src={github} alt="github logo" />
        </a>
        <a href={webUrl} target="_blank">
          <img className="project-link" src={link} alt="external link" />
        </a>
      </nav>
      <p>{t(description)}</p>
      {technologiesBadges}
    </div>
  );
}

export default Proyect;
