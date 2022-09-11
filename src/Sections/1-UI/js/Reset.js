import styles from '../css/Reset.module.scss';
import {css, checkProp} from '../../helpers';

export default function Reset(props) {
  const reset = () => props.reset();

  return (
    <div className={css(styles, 'prompt')}>
      <img
        src={require('../css/monzo_logo.png')}
        alt="monzo logo"
        className={css(styles, 'prompt__logo')}
      />

      <span>Aren't we glad this isn't a real bank!</span>

      <p>
        You've spent all your money! Go ahead and reset the app so you can get it back. Don't we all
        wish life was like this as well!
      </p>

      <button className={css(styles, 'prompt__btn')} onClick={reset}>
        Reset App
      </button>
    </div>
  );
}
