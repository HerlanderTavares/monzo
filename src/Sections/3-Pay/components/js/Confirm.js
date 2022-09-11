import {useContext} from 'react';
import styles from '../css/Submit.module.scss';
import {css, checkProp} from '../../../helpers';
import State from '../../../0-API/state';

export default function Confirm(props) {
  const state = useContext(State);

  return (
    <div className={css(styles, 'submit', 'confirm')}>
      <span className={css(styles, 'confirm__text')}>
        Payment Completed <br /> Successfully
      </span>

      <button className={css(styles, 'submit__btn')} onClick={() => state.setScreen('home')}>
        Ok
      </button>
    </div>
  );
}
