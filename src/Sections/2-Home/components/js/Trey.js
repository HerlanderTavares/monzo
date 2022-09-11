import {useRef, useState, useEffect} from 'react';
import styles from '../css/Trey.module.scss';
import {css, checkProp} from '../../../helpers';
import Feed from './Feed';
import Options from './Options';
import TreyMenu from './TreyMenu';

export default function Trey(props) {
  const [screen, setScreen] = useState('feed');
  const [openTrey, setOpenTrey] = useState(false);
  const open = openTrey ? 'open' : '';
  const treyRef = useRef();

  if (!openTrey) {
    if (typeof treyRef?.current?.scrollTop == 'number') treyRef.current.scrollTop = 0;
  }

  const scrollOpen = e => {
    const scroll = e.target.scrollTop;
    if (!openTrey && scroll > 0) setOpenTrey(true);
    if (openTrey && scroll < 1) setOpenTrey(false);
  };

  const state = {
    isOpen: openTrey,
    setOpenTrey: setOpenTrey,
    screen: screen,
    onSetScreen: setScreen,
  };

  return (
    <div className={css(styles, 'trey', open)}>
      <TreyMenu state={state} />
      <div className={css(styles, 'trey__info')} onScroll={scrollOpen} ref={treyRef}>
        {screen == 'feed' && <Feed />}
        {screen == 'options' && <Options />}
      </div>
    </div>
  );
}
