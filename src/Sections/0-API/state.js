import {createContext} from 'react';
import {users} from './accounts';

const init = {
  user: users.johnS,
  balance: '',
  transactions: '',
  notification: '',
  screen: 'home',
};

const setInit = (...keys) => keys.forEach(key => (init[key] = init.user[key]));
setInit('balance', 'transactions');

const State = createContext(init);
export default State;

/****************************************
     STATE IN USE
****************************************/
// user
// setUser
// balance
// setBalance
// transactions
// addTransaction
// notification
// setNotification
// screen
// setScreen
// receipt
// setReceipt
// settings
// setSettings
// payScreen
// setPayScreen
// setLoading
