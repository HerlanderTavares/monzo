import {useContext} from 'react';
import styles from '../css/Submit.module.scss';
import {css, formatNumber} from '../../../helpers';
import State from '../../../0-API/state';
import PayState from '../../payState';
import Item from '../../../1-UI/reusable/js/Item';
import BackBtn from '../../../1-UI/reusable/js/BackBtn';
import Icon from '../../../1-UI/reusable/js/Icon';
import IconCircle from '../../../1-UI/reusable/js/IconCircle';
import {setStorage, setStateStorage} from '../../../0-API/storage';

const Entry = props => {
  return (
    <Item className={css(styles, 'submit__container')} element="div">
      <span className={css(styles, 'submit__label')}>{props.label}</span>
      <span className={css(styles, 'submit__info')}>{props.info}</span>
    </Item>
  );
};

export default function Submit(props) {
  const state = useContext(State);
  const payState = useContext(PayState);
  const sender = state.user;
  const transaction = props.transaction;

  const recipientName = `${transaction.firstName} ${transaction.lastName}`;
  const recipientInitials = `${transaction.firstName[0]}${transaction.lastName[0]}`;
  const amount = formatNumber(+props.transaction.amount, false);

  // Is the recipient a user?
  let contact;
  const name = recipientName.split(' ');
  const username = name[0].toLowerCase() + name[1][0].toUpperCase();
  sender.contacts.all.forEach(user => {
    if (user.username == username) contact = user.account;
  });

  const submit = () => {
    // Subtract from balance
    state.setBalance(prevState => +(prevState - transaction.amount).toFixed(2));

    // Update state transactions
    const senderObj = {...transaction, amount: transaction.amount * -1};
    state.addTransaction(senderObj);

    // Set local storage
    setStateStorage(state);

    // If is a user, update balance and transactions
    if (contact) {
      const recipientObj = {
        ...transaction,
        id: 'T' + `${contact.transactions.length + 1}`.padStart(4, '0'),
        firstName: sender.firstName,
        lastName: sender.lastName,
        sortCode: sender.sortCode,
        accountNum: sender.accountNum,
      };

      contact.balance += recipientObj.amount;
      contact.transactions.push(recipientObj);
      setStorage(contact);
    }

    // Go to confirmation screen
    payState.setScreen('confirm');
  };

  return (
    <div className={css(styles, 'submit')}>
      <BackBtn onClick={() => state.setScreen('home')} />

      <div className={css(styles, 'submit__header')}>
        <div className={css(styles, 'submit__user')}>
          <IconCircle size="6" font="2.2">
            {sender.initials}
          </IconCircle>
          <span>{sender.firstName}</span>
        </div>

        <Icon id="arrow-forward" size="4rem" className={styles.icon} />

        <div className={css(styles, 'submit__user')}>
          <IconCircle size="6" font="2.2">
            {recipientInitials}
          </IconCircle>
          <span>{transaction.firstName}</span>
        </div>
      </div>

      <div className={css(styles, 'submit__info')}>
        <Entry label="Date & Time" info="Now" />
        <Entry label="Sort Code" info={transaction.sortCode} />
        <Entry label="Account Number" info={transaction.accountNum} />
        <Entry label="Amount (£)" info={amount} />
        <Entry label="Reference" info={transaction.reference} />
      </div>

      <button className={css(styles, 'submit__btn')} onClick={submit}>
        Complete Payment
      </button>
    </div>
  );
}
