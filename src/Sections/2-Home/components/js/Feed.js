import {useContext} from 'react';
import styles from '../css/Feed.module.scss';
import {css, checkProp} from '../../../helpers';
import Item from '../../../1-UI/reusable/js/Item';
import FeedDate from './FeedDate';
import IconCircle from '../../../1-UI/reusable/js/IconCircle';
import State from '../../../0-API/state';

function Movement(props) {
  const initials = `${props.user.firstName[0]}${props.user.lastName[0]}`;
  const name = `${props.user.firstName} ${props.user.lastName}`;
  const operator = props.user.amount > 0 ? '+' : '-';
  const amount = Math.abs(props.user.amount).toLocaleString('EN-uk', {
    style: 'currency',
    currency: 'GBP',
  });

  const openReceipt = () => props.setReceipt(props.user);
  const amountColor = props.user.amount > 0 ? '#56cb29' : null;

  return (
    <Item gap="1" onClick={openReceipt} className={css(styles, 'feed__container')}>
      <IconCircle size="3" font="1.5">
        {initials}
      </IconCircle>

      <div className={css(styles, 'feed__info')}>
        <FeedDate user={props.user} />
        <span className={css(styles, 'feed__name')}>{name}</span>
      </div>

      <span className={css(styles, 'feed__amount')} style={{color: amountColor}}>
        {operator} {amount}
      </span>
    </Item>
  );
}

export default function Feed(props) {
  const state = useContext(State);
  const movements = state.transactions.map(trans => (
    <Movement key={trans.id} user={trans} setReceipt={state.setReceipt} />
  ));

  return <div className={css(styles, 'feed')}>{movements}</div>;
}
