import {Fragment, useContext} from 'react';
import styles from '../css/Main.module.scss';
import {css} from '../../../helpers';
import ItemBar from '../../../1-UI/reusable/js/ItemBar';
import IconCircle from '../../../1-UI/reusable/js/IconCircle';
import Icon from '../../../1-UI/reusable/js/Icon';
import Favourites from './Contacts_Favourites';
import Recent from './Contacts_Recent';
import State from '../../../0-API/state';
import PayState from '../../payState';

export default function Main(props) {
  const state = useContext(State);
  const payState = useContext(PayState);
  const openForm = () => payState.setScreen('form');

  return (
    <div className={css(styles, 'main')}>
      <div className={css(styles, 'main__btns')}>
        <ItemBar hor="start" ver="center" gap="1" onClick={openForm}>
          <IconCircle size="3.5" color="#5fa3ff">
            <Icon id="arrow-redo" fill={true} stroke="none" color="white" size="60%" />
          </IconCircle>

          <div className={css(styles, 'main__heading')}>
            <span className={css(styles, 'main__title')}>Send a payment</span>
            <span className={css(styles, 'main__subtitle')}>Make a bank transfer</span>
          </div>
        </ItemBar>

        <ItemBar hor="start" ver="center" gap="1" disabled={true}>
          <IconCircle size="3.5" color="#6bdf88" disabled={true}>
            <Icon id="arrow-undo" fill={true} stroke="none" color="white" size="60%" />
          </IconCircle>

          <div className={css(styles, 'main__heading')}>
            <span className={css(styles, 'main__title')}>Request money</span>
            <span className={css(styles, 'main__subtitle')}>Ask someone for money</span>
          </div>
        </ItemBar>
      </div>

      <>
        <Favourites />
        <Recent />
      </>
    </div>
  );
}
