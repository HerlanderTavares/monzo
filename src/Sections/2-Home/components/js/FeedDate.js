import styles from '../css/Feed.module.scss';
import {css, checkProp} from '../../../helpers';

export default function FeedDate(props) {
  const today = new Date();
  const propDate = new Date(props.user.date);
  const time = propDate.toLocaleTimeString('EN-uk', {hour: '2-digit', minute: '2-digit'});

  let date;
  if (
    propDate.getFullYear() === today.getFullYear() &&
    propDate.getMonth() === today.getMonth() &&
    propDate.getDate() === today.getDate()
  ) {
    date = 'Today';
  } else if (
    propDate.getFullYear() === today.getFullYear() &&
    propDate.getMonth() === today.getMonth() &&
    propDate.getDate() === today.getDate() - 1
  ) {
    date = 'Yesterday';
  } else if (
    propDate.getFullYear() === today.getFullYear() &&
    propDate.getMonth() === today.getMonth() &&
    propDate.getDate() >= today.getDate() - 5
  ) {
    date = `${today.getDate() - propDate.getDate()} days ago`;
  } else {
    date = propDate.toLocaleDateString('EN-uk');
  }

  return (
    <span className={css(styles, 'feed__date')}>
      {date} • {time}
    </span>
  );
}
