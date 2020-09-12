import React from 'react';
import { useTranslation } from 'react-i18next';
import '../stylesheets/contact.scss';
import github from '../assets/images/github.svg';
import email from '../assets/images/email.svg';
import linkedin from '../assets/images/linkedin.svg';

function Contact() {
  const { t } = useTranslation();
  return (
    <main className="contact-section">
      <h1 className="contact-title">{t('contact.p-contact-title')}</h1>
      <p>{t('contact.p-contact-intro')}</p>
      <div className="socialmedia-container">
        <img className="contact-icon" src={github} alt="github logo" />
        <p>https://github.com/saraalite</p>
        <img className="contact-icon" src={linkedin} alt="linkedin logo" />
        <p>https://www.linkedin.com/ in/saraalitevillodre/</p>
        <img className="contact-icon" src={email} alt="email icon" />
        <p>saraalite@gmail.com</p>
      </div>
    </main>
  );
}

export default Contact;
