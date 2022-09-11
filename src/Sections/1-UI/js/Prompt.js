import styles from '../css/Prompt.module.scss';
import {css, checkProp} from '../../helpers';

export default function Prompt(props) {
  const close = () => props.close(false);

  return (
    <div className={css(styles, 'prompt')}>
      <img
        src={require('../css/monzo_logo.png')}
        alt="monzo logo"
        className={css(styles, 'prompt__logo')}
      />

      <p>
        This is the Monzo Clone App, created for demonstration purposes. It is currently only
        compatible with desktop, but future updates will make it available on all platforms. Check
        the settings for more info.
      </p>

      <button className={css(styles, 'prompt__btn')} onClick={close}>
        Ok
      </button>
    </div>
  );
}
