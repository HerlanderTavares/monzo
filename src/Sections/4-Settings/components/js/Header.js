import styles from '../../Settings.module.scss';
import {css, checkProp} from '../../../helpers';
import {useContext} from 'react';
import IconCircle from '../../../1-UI/reusable/js/IconCircle';
import State from '../../../0-API/state';
import Back from './Button';

export default function Header(props) {
  const state = useContext(State);
  const prevScreen = () => state.setScreen('home');

  return (
    <div className={css(styles, 'settings__header')}>
      {state.settings == 'change' && <Back size={'3.5rem'} close={prevScreen} />}
      <div className={css(styles, 'settings__details')}>
        <IconCircle size="6" font="2">
          {state.user.initials}
        </IconCircle>
        <span>{state.user.fullName}</span>
      </div>
    </div>
  );
}
