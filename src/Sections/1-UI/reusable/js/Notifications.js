import styles from '../css/Notifications.module.scss';
import {css} from '../../../helpers';

export default function Notifications(props) {
  if (props.type == 'small') {
    return (
      <div className={styles.container}>
        <div className={css(styles, 'small')}>
          <span>{props.message}</span>
        </div>
      </div>
    );
  }
}
