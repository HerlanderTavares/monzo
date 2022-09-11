import {useState, useEffect} from 'react';
import {users} from './0-API/accounts';
import State from './0-API/state';
import {sortTransactions} from './helpers';
import {getStorage} from './0-API/storage';

import Navbar from './1-UI/js/Navbar';
import Phone from './1-UI/js/Phone';
import Startup from './1-UI/js/Startup';
import Prompt from './1-UI/js/Prompt';
import Home from './2-Home/Home';
import Pay from './3-Pay/Pay';
import Settings from './4-Settings/Settings';
import Notification from './1-UI/reusable/js/Notifications';
import Reset from './1-UI/js/Reset';
import Compatibility from './1-UI/js/Compatibility';

export default function App() {
  //Current User
  const [currentUser, setCurrentUser] = useState('johnS');
  const user = users[currentUser];

  // Account Info
  const [balance, setBalance] = useState();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const startingBalance = getStorage(user, 'balance') || user.balance;
    const startingTransactions = getStorage(user, 'transactions') || user.transactions;

    setBalance(startingBalance);
    setTransactions(startingTransactions);
  }, [user]);

  //Notifications
  const [notification, setNotification] = useState({type: undefined, message: undefined});
  const isNotifying = notification.type !== undefined && notification.message !== undefined;
  let removeNotification;

  const timeoutNotification = (type, message) => {
    clearTimeout(removeNotification);
    setNotification({type: type, message: message});
    removeNotification = setTimeout(
      () => setNotification({type: undefined, message: undefined}),
      1000 * 3
    );
  };

  //Main Screen
  const [screen, setScreen] = useState('home');
  const [receipt, setReceipt] = useState(undefined);
  const [settings, setSettings] = useState();
  const [pay, setPay] = useState('main');

  //Loading Screen
  const [resetPage, setResetPage] = useState(false);
  const [prompt, setPrompt] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (balance < 100) setTimeout(() => setResetPage(true), 1000 * 10);
  }, [balance]);

  const loadingScreen = loadingTime => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000 * loadingTime);
  };

  useEffect(() => loadingScreen(3), []);

  // Observe Window Size
  const [tooSmall, setTooSmall] = useState(false);
  const body = document.body;

  const size = new ResizeObserver(entries => {
    const width = body.getBoundingClientRect().width;
    const height = body.getBoundingClientRect().height;

    if (width < 500 || height < 750) setTooSmall(true);
    else setTooSmall(false);
  });

  size.observe(body);

  //Reset App
  const resetApp = () => {
    localStorage.clear();
    window.location.reload();
  };

  // All States
  const state = {
    user: user,
    setUser: setCurrentUser,
    balance: balance,
    setBalance: setBalance,
    transactions: transactions.sort(sortTransactions),
    setTransactions: setTransactions,
    addTransaction: transaction =>
      setTransactions(prevState => [...prevState, transaction].sort(sortTransactions)),
    notification: notification,
    setNotification: timeoutNotification,
    screen: screen,
    setScreen: setScreen,
    receipt: receipt,
    setReceipt: setReceipt,
    settings: settings,
    setSettings: setSettings,
    payScreen: pay,
    setPayScreen: setPay,
    setLoading: loadingScreen,
    resetApp: resetApp,
  };

  if (tooSmall) {
    return <Compatibility />;
  } else {
    return (
      <State.Provider value={state}>
        <Phone>
          {loading && <Startup />}
          {prompt && <Prompt close={setPrompt} />}
          {resetPage && <Reset reset={resetApp} />}
          {screen == 'home' && <Home />}
          {screen == 'pay' && <Pay />}
          {screen == 'settings' && <Settings />}
          <Navbar />
          {isNotifying && <Notification type={notification.type} message={notification.message} />}
        </Phone>
      </State.Provider>
    );
  }
}
