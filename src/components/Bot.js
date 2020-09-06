import React, { useState } from 'react';
import '../stylesheets/bot.scss';
import { useTranslation } from 'react-i18next';
import { ReactComponent as PersonHello } from '../assets/images/botHello.svg';
import { ReactComponent as Person } from '../assets/images/bot.svg';

function Bot() {
  const { t } = useTranslation();
  const [isTalking, setIsTalking] = useState([]);
  const [timesTalk, setTimesTalk] = useState(0);

  const thingToSay = ['bot.thing1', 'bot.thing2'];

  const saySomething = () => {
    if (timesTalk > thingToSay.length - 1) {
      setIsTalking([...isTalking, thingToSay[0]]);
      setTimesTalk(0);
    } else {
      setIsTalking([...isTalking, thingToSay[timesTalk]]);
      setTimesTalk(timesTalk + 1);
    }
    setTimeout(() => {
      setIsTalking([]);
    }, 3000);
  };

  return (
    <>
      <div className="bot">{t(isTalking[0])}</div>
      {(isTalking === '' && (
        <Person
          onTouchMove={saySomething}
          onTouchStart={saySomething}
          onClick={saySomething}
          onMouseOver={saySomething}
          className="bot"
        />
      )) || (
        <PersonHello
          onTouchMove={saySomething}
          onTouchStart={saySomething}
          onClick={saySomething}
          onMouseOver={saySomething}
          className="bot"
        />
      )}
    </>
  );
}

export default Bot;
