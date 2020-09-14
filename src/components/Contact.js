import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../stylesheets/contact.scss';
import github from '../assets/images/icons/github.svg';
import email from '../assets/images/icons/email.svg';
import linkedin from '../assets/images/icons/linkedin.svg';

import { ReactComponent as ContactBackground } from '../assets/images/backgrounds/contact.svg';

function Contact() {
  const [changeColorFormAndImage, setChangeColorFormAndImage] = useState(false);
  const { t } = useTranslation();
  return (
    <div
      onTouchStart={() => setChangeColorFormAndImage(true)}
      onTouchEnd={() => setChangeColorFormAndImage(false)}
      onMouseEnter={() => setChangeColorFormAndImage(true)}
      onMouseLeave={() => setChangeColorFormAndImage(false)}
      style={{
        '--change-background': changeColorFormAndImage
          ? 'var(--primary-color)'
          : 'var(--fourth-color)',
      }}
    >
      <main id="contact" className="contact-section">
        <ContactBackground className="contact-background" />
        <h1 className="contact-title">{t('menu.nav-contact')}</h1>
        <div className="contact-wrapper">
          <section className="contact-flex">
            <div className="contact-text">{t('contact.intro')}</div>
            <div className="socialmedia-container">
              <article className="contact-block">
                <a href="https://github.com/saraalite" target="_blank">
                  <div className="contact-image-container">
                    <img
                      className="contact-icon"
                      src={github}
                      alt="github logo"
                    />
                  </div>
                </a>
                <a href="https://github.com/saraalite" target="_blank">
                  <p className="contact-url">https://github.com/saraalite</p>
                </a>
              </article>
              <article className="contact-block">
                <a
                  href="https://www.linkedin.com/in/saraalitevillodre/"
                  target="_blank"
                >
                  <div className="contact-image-container">
                    <img
                      className="contact-icon"
                      src={linkedin}
                      alt="linkedin logo"
                    />
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/saraalitevillodre/"
                  target="_blank"
                >
                  <p className="contact-url">
                    https://www.linkedin.com/in/saraalitevillodre/
                  </p>
                </a>
              </article>
              <article className="contact-block">
                <a href="mailto:saraalite@gmail.com" target="_blank">
                  <div className="contact-image-container">
                    <img
                      className="contact-icon"
                      src={email}
                      alt="email icon"
                    />
                  </div>
                </a>
                <a href="mailto:saraalite@gmail.com" target="_blank">
                  <p className="contact-url">saraalite@gmail.com</p>
                </a>
              </article>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Contact;
