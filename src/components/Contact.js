import React from 'react';
import { useTranslation } from 'react-i18next';
import '../stylesheets/contact.scss';
import github from '../assets/images/icons/github.svg';
import email from '../assets/images/icons/email.svg';
import linkedin from '../assets/images/icons/linkedin.svg';

function Contact() {
  const { t } = useTranslation();
  return (
    <main id="contact" className="contact-section">
      <h1 className="contact-title">{t('menu.nav-contact')}</h1>
      <div>{t('contact.intro')}</div>
      <div className="socialmedia-container">
        <img className="contact-icon" src={github} alt="github logo" />
        <p className="contact-url">https://github.com/saraalite</p>
        <img className="contact-icon" src={linkedin} alt="linkedin logo" />
        <p className="contact-url">
          https://www.linkedin.com/in/saraalitevillodre/
        </p>
        <img className="contact-icon" src={email} alt="email icon" />
        <p className="contact-url">saraalite@gmail.com</p>
      </div>
    </main>
  );
}

export default Contact;
