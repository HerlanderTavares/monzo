import styles from '../css/Main.module.scss';
import {css, checkProp} from '../../../helpers';
import BackBtn from '../../../1-UI/reusable/js/BackBtn';
import Button from './Button';

export default function Features(props) {
  return (
    <div className={css(styles, 'features')}>
      <div className={css(styles, 'features__heading')}>
        <Button size="3rem" close={props.close} />
        <h2>Main Features</h2>
      </div>

      <p>
        This is a simple solo project, created for my portfolio. This aims to showcase some basic
        React and CSS skills (SASS). This is not a finished prototype, but contains the main basic
        features. This project will be updated periodically, and most of the disabled features will
        become functional.
      </p>

      <div className={css(styles, 'features__block')}>
        <h3>Main Features</h3>
        <ul>
          <li>Send and receive money</li>
          <li>Switch accounts</li>
          <li>View completed payments</li>
          <li>Copy account details</li>
          <li>Persist data after reloading</li>
          <li>Reset App</li>
        </ul>
      </div>

      <div className={css(styles, 'features__block')}>
        <h3>Upcoming Features</h3>
        <ul>
          <li>Mobile compatibility</li>
          <li>Dedicated desktop design</li>
          <li>Saving pots</li>
          <li>Apply for loans and credit</li>
          <li>Make brand new accounts</li>
          <li>Notifications</li>
        </ul>
      </div>
    </div>
  );
}
