import styles from '../css/Header.module.scss';
import {css, formatNumber} from '../../../helpers';
import IconCircle from '../../../1-UI/reusable/js/IconCircle';
import {useContext} from 'react';
import State from '../../../0-API/state';
import Button from '../../../4-Settings/components/js/Button';

export default function Header() {
  const state = useContext(State);
  const balance = formatNumber(state.balance);

  return (
    <div className={css(styles, 'header')}>
      <Button size="3rem" close={() => state.setScreen('home')} className={css(styles, 'btn')} />
      <IconCircle size="4.5">{state.user.initials}</IconCircle>
      <div className={css(styles, 'header__account')}>
        <span className={css(styles, 'header__name')}>{state.user.fullName}</span>
        <span className={css(styles, 'header__balance')}>
          <b>Balance</b> {balance}
        </span>
      </div>
    </div>
  );
}
