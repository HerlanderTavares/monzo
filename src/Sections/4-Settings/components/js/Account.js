import styles from '../css/Account.module.scss';
import {css, checkProp, formatNumber} from '../../../helpers';
import ItemBar from '../../../1-UI/reusable/js/ItemBar';
import BankCard from '../../../1-UI/reusable/js/BankCard';
import {useContext} from 'react';
import State from '../../../0-API/state';
import Item from '../../../1-UI/reusable/js/Item';

export const Button = props => {
  return (
    <ItemBar pad="1.5" gap=".7" disabled={props.disabled} onClick={props.onClick} data={props.data}>
      <BankCard radius="0.4" h="100%" shadow="none" color={props.color} />
      <div className={css(styles, 'account__info')}>
        <span className={css(styles, 'account__label')}>{props.label}</span>
        {props.details && <span className={css(styles, 'account__details')}>{props.details}</span>}
      </div>
      <span className={css(styles, 'account__amount')}>{props.amount}</span>
    </ItemBar>
  );
};

export default function Account(props) {
  const state = useContext(State);
  const goToAccount = () => state.setScreen('home');
  const changeAccount = () => state.setSettings('change');

  return (
    <div className={css(styles, 'account')}>
      <div className={css(styles, 'account__block')}>
        <Button
          label="Current Account"
          amount={formatNumber(state.balance)}
          onClick={goToAccount}
        />
      </div>

      <div className={css(styles, 'account__block')}>
        <span className={css(styles, 'account__subtitle')}>Pots</span>
        <Button label="Rent" amount={formatNumber(1950)} disabled={true} color="#d9d9d9" />
        <Button label="Bills" amount={formatNumber(650)} disabled={true} color="#d9d9d9" />
        <Button label="Credit Cards" amount={formatNumber(475)} disabled={true} color="#d9d9d9" />
      </div>

      <div className={css(styles, 'account__options')}>
        <Item onClick={changeAccount}>
          <span>Switch Accounts</span>
        </Item>
        <Item disabled={true}>
          <span>Sign Out</span>
        </Item>
      </div>
    </div>
  );
}
