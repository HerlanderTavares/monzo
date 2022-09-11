import {useContext} from 'react';
import styles from '../css/Main.module.scss';
import {css, splitCardNum, formatNumber} from '../../../helpers';
import BankCard from '../../../1-UI/reusable/js/BankCard';
import State from '../../../0-API/state';

export default function Main(props) {
  const state = useContext(State);
  const cardNum = splitCardNum(state.user.cardNum, 4);

  return (
    <div className={css(styles, 'main')}>
      <div className={css(styles, 'container')}>
        <div className={css(styles, 'main__heading')}>
          <h3 className={css(styles, 'main__title')}>Current Account</h3>
          <span className={css(styles, 'main__details')}>
            {state.user.sortCode} • {state.user.accountNum}
          </span>
        </div>
        <h2 className={css(styles, 'main__balance')}>{formatNumber(state.balance)}</h2>

        <BankCard className={css(styles, 'card')} color="lightcoral" w="70%">
          <span className={css(styles, 'card__logo')}>monzo</span>
          <span className={css(styles, 'card__num')}>{cardNum}</span>
          <span className={css(styles, 'card__name')}>{state.user.fullName}</span>
        </BankCard>
      </div>
    </div>
  );
}
