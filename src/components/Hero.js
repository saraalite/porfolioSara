import React from 'react';
import '../stylesheets/hero.scss';
import { ReactComponent as HeroDesktop } from '../assets/images/herodesktop.svg';
import { ReactComponent as HeroIpad } from '../assets/images/heroipad.svg';
import { ReactComponent as HeroMobile } from '../assets/images/heromobile.svg';

function Hero() {
  return (
    <main className="hero-container">
      <HeroDesktop className="image desktop" />
      <HeroIpad className="image ipad" />
      <HeroMobile className="image mobile" />
      <p className="test-text" />
    </main>
  );
}

export default Hero;
