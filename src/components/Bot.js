import React, { useState } from 'react';
import '../stylesheets/bot.scss';
import { useTranslation } from 'react-i18next';
import { ReactComponent as PersonHello } from '../assets/images/botHello.svg';
import { ReactComponent as Person } from '../assets/images/bot.svg';

function Bot() {
  const { t } = useTranslation();
  const [isTalking, setIsTalking] = useState('bot.thing1');
  const [timesTalk, setTimesTalk] = useState(0);
  const [timeOut, setTimesOut] = useState(() => {});

  const thingToSay = ['bot.thing2', 'bot.thing3'];

  const saySomething = () => {
    let nextToSay = timesTalk;
    if (timesTalk > thingToSay.length - 1) {
      nextToSay = 0;
    }
    setIsTalking(thingToSay[nextToSay]);
    setTimesTalk(nextToSay + 1);
    clearTimeout(timeOut);

    setTimesOut(
      setTimeout(() => {
        setIsTalking('');
      }, 2000)
    );
  };

  return (
    <>
      {isTalking !== '' && <div className="dialog">{t(isTalking)}</div>}
      <div className="bot">
        {(isTalking === '' && (
          <Person onClick={saySomething} className="bot person" />
        )) || <PersonHello onClick={saySomething} className="bot person" />}
      </div>
    </>
  );
}

export default Bot;
