import React, { useState } from 'react';
import '../stylesheets/bot.scss';
import { useTranslation } from 'react-i18next';
import { ReactComponent as PersonHello } from '../assets/images/botHello.svg';
import { ReactComponent as Person } from '../assets/images/bot.svg';

function Bot() {
  const { t } = useTranslation();
  const [isTalking, setIsTalking] = useState('');
  const [timesTalk, setTimesTalk] = useState(0);
  const [timeOut, setTimesOut] = useState(setTimeout(() => {}, 0));

  const thingToSay = ['bot.thing1', 'bot.thing2', 'bot.thing3'];

  const saySomething = () => {
    let nextToSay = timesTalk;
    let nextTimeToTalk = timesTalk + 1;
    if (timesTalk > thingToSay.length - 1) {
      nextToSay = 0;
      nextTimeToTalk = 0;
    }
    setIsTalking(thingToSay[nextToSay]);
    setTimesTalk(nextTimeToTalk);
    clearTimeout(timeOut);

    setTimesOut(
      setTimeout(() => {
        setIsTalking('');
      }, 1000)
    );
  };

  return (
    <>
      <div className="dialog">{t(isTalking)}</div>
      <div className="bot">
        {(isTalking === '' && (
          <Person
            onTouchMove={saySomething}
            onTouchStart={saySomething}
            onClick={saySomething}
            className="bot person"
          />
        )) || (
          <PersonHello
            onTouchMove={saySomething}
            onTouchStart={saySomething}
            onClick={saySomething}
            className="bot person"
          />
        )}
      </div>
    </>
  );
}

export default Bot;
