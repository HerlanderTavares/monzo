import {useContext} from 'react';
import styles from '../css/Recent.module.scss';
import {css, checkProp} from '../../../helpers';
import Item from '../../../1-UI/reusable/js/Item';
import IconCircle from '../../../1-UI/reusable/js/IconCircle';
import PayState from '../../payState';
import State from '../../../0-API/state';

export default function Recent(props) {
  const state = useContext(State);
  const payState = useContext(PayState);
  const transactions = state.user.transactions.sort(
    (a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf()
  );

  const openForm = contact => {
    payState.setTransaction(prevState => {
      return {
        ...prevState,
        firstName: contact.firstName,
        lastName: contact.lastName,
        sortCode: contact.sortCode.split('-').join(''),
        accountNum: contact.accountNum,
      };
    });

    payState.setScreen('form');
  };

  const recent = transactions.map((contact, i) => {
    const name = `${contact.firstName} ${contact.lastName}`;
    const initials = `${contact.firstName[0]}${contact.lastName[0]}`;

    if (i < 10)
      return (
        <Item key={i} gap="1" onClick={() => openForm(contact)}>
          <IconCircle size="3.25" font="1.3" fontColor="white">
            {initials}
          </IconCircle>
          <span className={css(styles, 'recent__name')}>{name}</span>
        </Item>
      );
  });

  return (
    <div className={css(styles, 'recent')}>
      <span className={css(styles, 'pay__subheading')}>Recent</span>

      <div className={css(styles, 'recent__container')}>{recent}</div>
    </div>
  );
}
