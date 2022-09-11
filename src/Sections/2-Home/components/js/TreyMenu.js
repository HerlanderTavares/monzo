import styles from '../css/TreyMenu.module.scss';
import {css, checkProp} from '../../../helpers';
import Icon from '../../../1-UI/reusable/js/Icon';
import {useRef} from 'react';

export default function TreyMenu(props) {
  const activeFeed = props.state.screen == 'feed' ? 'active' : '';
  const activeOptions = props.state.screen == 'options' ? 'active' : '';
  const openTrey = () => props.state.setOpenTrey(prevState => !prevState);

  const changeScreen = e => {
    const btn = e.target.dataset.btn;
    props.state.onSetScreen(e.target.dataset.btn);
    if (btn == 'options') props.state.setOpenTrey(true);
  };

  return (
    <div className={css(styles, 'trey__menu')}>
      <button className={css(styles, 'trey__btn')} onClick={openTrey}>
        {!props.state.isOpen && <Icon id="arrow-up" />}
        {props.state.isOpen && <span className={css(styles, 'open-icon')}></span>}
      </button>

      <div className={css(styles, 'trey__options')}>
        <button
          data-btn="feed"
          className={css(styles, 'trey__optionsBtn', activeFeed)}
          onClick={changeScreen}
        >
          Feed
        </button>
        <button
          data-btn="options"
          className={css(styles, 'trey__optionsBtn', activeOptions)}
          onClick={changeScreen}
        >
          Options
        </button>
      </div>
    </div>
  );
}
