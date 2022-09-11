import {useContext} from 'react';
import styles from '../css/Header.module.scss';
import {css} from '../../../helpers';
import IconCircle from '../../../1-UI/reusable/js/IconCircle';
import Icon from '../../../1-UI/reusable/js/Icon';
import State from '../../../0-API/state';

export default function Header(props) {
  const state = useContext(State);
  const iconSize = 3;

  const openSettings = e => {
    state.setScreen('settings');
    state.setSettings(e.target.dataset.btn);
  };

  return (
    <div className={css(styles, 'header')}>
      <IconCircle
        className={css(styles, 'btn')}
        element="button"
        font="1.4"
        size={iconSize}
        onClick={openSettings}
        data="account"
      >
        {state.user.initials}
      </IconCircle>

      <span>{state.user.fullName}</span>

      <IconCircle
        className={css(styles, 'btn')}
        element="button"
        font="1.4"
        size={iconSize}
        color="transparent"
        onClick={openSettings}
        data="main"
      >
        <Icon id="cog" fill={true} />
      </IconCircle>
    </div>
  );
}
