import {useState, useContext, useEffect} from 'react';
import styles from './Pay.module.scss';
import {css} from '../helpers';
import Header from './components/js/Header';
import Main from './components/js/Main';
import Form from './components/js/Form';
import Submit from './components/js/Submit';
import Confirm from './components/js/Confirm';
import State from '../0-API/state';
import PayState from './payState';

export default function Pay() {
  const state = useContext(State);
  const [screen, setScreen] = useState('main');

  const defaultTrans = {
    id: '',
    date: new Date().toUTCString(),
    firstName: '',
    lastName: '',
    sortCode: '',
    accountNum: '',
    amount: '',
    reference: '',
  };

  const [transaction, setTransaction] = useState(defaultTrans);

  useEffect(() => {
    const transNum = state.transactions.length + 1;
    setTransaction(prevState => ({...prevState, id: 'T' + `${transNum}`.padStart(4, '0')}));
  }, [state.transactions.length]);

  const contexts = {
    transaction: transaction,
    setTransaction: setTransaction,
    screen: screen,
    setScreen: setScreen,
  };

  return (
    <div className={css(styles, 'pay')}>
      <Header />

      <div className={css(styles, 'pay__container')}>
        <PayState.Provider value={contexts}>
          {screen == 'main' && <Main />}
          {screen == 'form' && <Form transaction={transaction} />}
          {screen == 'submit' && <Submit transaction={transaction} />}
          {screen == 'confirm' && <Confirm />}
        </PayState.Provider>
      </div>
    </div>
  );
}
