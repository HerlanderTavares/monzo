import {useState, useContext} from 'react';
import styles from '../css/Navbar.module.scss';
import Icon from '../reusable/js/Icon';
import {checkProp, css} from '../../helpers';
import State from '../../0-API/state';

const NavBtn = props => {
  const activeBtn = dataset => (props.state == dataset ? 'active' : '');
  const disabled = checkProp(props.disabled, false);
  const classes = css(styles, 'navbar__btn', activeBtn(props.id), disabled ? 'disabled' : null);

  const iconSize = '2.5rem';
  return (
    <button className={classes} data-btn={props.id} onClick={props.onClick}>
      <Icon
        size={iconSize}
        stroke={checkProp(props.stroke, 'none')}
        fill={checkProp(props.fill, true)}
        id={props.id}
        disabled={disabled}
      />
      {props.label}
    </button>
  );
};

export default function Navbar(props) {
  const state = useContext(State);
  const changeScreen = e => {
    const btn = e.target.dataset.btn;

    if (btn == 'pay') {
      state.setPayScreen('main');
      state.setScreen(btn);
    } else {
      state.setScreen(btn);
    }
  };

  return (
    <div className={css(styles, 'navbar')}>
      <NavBtn id="home" label="Home" onClick={changeScreen} state={state.screen} />
      {/* prettier-ignore */}
      <NavBtn id="pay" stroke={true} label="Pay" onClick={changeScreen} state={state.screen} disabled={state.balance <= 0}/>
      <NavBtn id="apply" label="Apply" state={state.screen} disabled={true} />
    </div>
  );
}
