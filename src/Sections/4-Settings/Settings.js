import {useContext, useRef, useEffect} from 'react';
import styles from './Settings.module.scss';
import Header from './components/js/Header';
import {css} from '../helpers';
import Main from './components/js/Main';
import Account from './components/js/Account';
import State from '../0-API/state';
import ChangeAccount from './components/js/ChangeAccount';

export default function Settings() {
  const state = useContext(State);
  const screen = state.settings;
  const settingsRef = useRef();

  useEffect(() => {
    if (typeof settingsRef?.current?.scrollTop == 'number') settingsRef.current.scrollTop = 0;
  }, [state.settings]);

  return (
    <div className={css(styles, 'settings')} ref={settingsRef}>
      <Header />
      <div className={css(styles, 'settings__container')}>
        {screen == 'main' && <Main />}
        {screen == 'account' && <Account />}
        {screen == 'change' && <ChangeAccount />}
      </div>
    </div>
  );
}
