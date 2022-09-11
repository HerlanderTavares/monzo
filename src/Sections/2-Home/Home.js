import {useContext} from 'react';
import styles from './Home.module.scss';
import Header from './components/js/Header';
import Main from './components/js/Main';
import Trey from './components/js/Trey';
import Receipt from './components/js/Receipt';
import State from '../0-API/state';

export default function Home(props) {
  const state = useContext(State);

  return (
    <div className={styles.home}>
      <Header />
      <Main />
      <Trey />
      {state.receipt && <Receipt />}
    </div>
  );
}
