import {useState, useContext} from 'react';
import styles from '../css/Main.module.scss';
import {css} from '../../../helpers';
import Item from '../../../1-UI/reusable/js/Item';
import Features from './Features';
import State from '../../../0-API/state';

const Option = props => {
  const state = useContext(State);

  const openPage = e => {
    if (e.target.dataset.item == 'reset') state.resetApp();
    else props.setScreen(e.target.dataset.item);
  };

  return (
    <Item onClick={openPage} data={props.data} disabled={!props.data}>
      <span className={css(styles, 'main__option')}>{props.label}</span>
    </Item>
  );
};

export default function Main() {
  const [screen, setScreen] = useState('main');

  return (
    <div className={css(styles, 'main')}>
      <Option label="All demo features" data="features" setScreen={setScreen} />
      <Option label="Reset app" data="reset" setScreen={setScreen} />
      <Option label="Privacy & Security" setScreen={setScreen} />
      <Option label="Legal Documents" setScreen={setScreen} />
      <Option label="Bank Statements" setScreen={setScreen} />
      <Option label="Upgrades and perks" setScreen={setScreen} />
      <Option label="See all our products" setScreen={setScreen} />
      <Option label="Invest your money" setScreen={setScreen} />
      <Option label="Help and support" setScreen={setScreen} />
      <Option label="Close account" setScreen={setScreen} />

      <>{screen == 'features' && <Features close={setScreen} />}</>
    </div>
  );
}
