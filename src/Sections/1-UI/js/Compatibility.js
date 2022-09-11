import styles from '../css/Prompt.module.scss';
import {css, checkProp} from '../../helpers';

export default function Compatibility(props) {
  const close = () => props.close(false);

  return (
    <div className={css(styles, 'prompt')}>
      <img
        src={require('../css/monzo_logo.png')}
        alt="monzo logo"
        className={css(styles, 'prompt__logo')}
      />

      <p style={{fontSize: '2.5rem'}}>
        This demo is not yet optimized for mobile, we are working on it. Please open this page on a
        bigger device
      </p>
    </div>
  );
}
