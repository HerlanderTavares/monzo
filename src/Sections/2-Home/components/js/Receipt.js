import {useContext} from 'react';
import styles from '../css/Receipt.module.scss';
import {css} from '../../../helpers';
import Icon from '../../../1-UI/reusable/js/Icon';
import Item from '../../../1-UI/reusable/js/Item';
import State from '../../../0-API/state';
import BackBtn from '../../../1-UI/reusable/js/BackBtn';

function Entry(props) {
  return (
    <Item className={css(styles, 'receipt__info-container')} element="div">
      <span className={css(styles, 'receipt__info--title')}>{props.title}</span>
      <span className={css(styles, 'receipt__info--detail')}>{props.info}</span>
    </Item>
  );
}

export default function Receipt(props) {
  const state = useContext(State);
  const transaction = state.receipt;

  const dateFormat = {
    weekday: 'long',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };

  const amountFormat = {
    style: 'currency',
    currency: 'GBP',
  };

  const title = transaction.amount < 0 ? 'Payment to:' : 'Payment from';
  const name = transaction.firstName + ' ' + transaction.lastName;
  const initials = transaction.firstName[0] + transaction.lastName[0];
  const amount = Math.abs(transaction.amount).toLocaleString('EN-uk', amountFormat);
  const date = new Date(transaction.date).toLocaleDateString('EN-uk', dateFormat);

  const reset = () => state.setReceipt(undefined);

  return (
    <div className={css(styles, 'receipt')}>
      <BackBtn onClick={reset} />
      <div className={css(styles, 'receipt__contact')}>
        <div className={css(styles, 'receipt__icon')}>
          <span>{initials}</span>
        </div>

        <div className={css(styles, 'receipt__heading')}>
          <span className={css(styles, 'receipt__title')}>{title}</span>
          <h2 className={css(styles, 'receipt__name')}>{name}</h2>
        </div>
      </div>

      <div className={css(styles, 'receipt__info')}>
        <Entry title="Date & Time" info={date} />
        <Entry title="Sort Code" info={transaction.sortCode} />
        <Entry title="Account Number" info={transaction.accountNum} />
        <Entry title="Amount" info={amount} />
        <Entry title="Reference" info={transaction.reference} />
      </div>
    </div>
  );
}
