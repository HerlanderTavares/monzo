import styles from '../css/Phone.module.scss';
import {css} from '../../helpers';

export default function Phone(props) {
  return (
    <div className={css(styles, 'phone')}>
      <div className={css(styles, 'phone__border')}>
        <div className={css(styles, 'phone__screen')}>
          <div className={css(styles, 'phone__notch')}>
            <div className={css(styles, 'phone__camera')}></div>
          </div>
          {props.children}
        </div>
      </div>
    </div>
  );
}
