import styles from '../../Settings.module.scss';
import {css, checkProp, checkClass} from '../../../helpers';
import Icon from '../../../1-UI/reusable/js/Icon';

export default function Button(props) {
  const closePage = () => props.close(undefined);

  const classes = css(styles, 'settings__btn') + checkClass(props.className);
  const inline = {
    width: checkProp(props.size, '2rem'),
    height: checkProp(props.size, '2rem'),
    transform: props.moveY ? `translateY(${props.moveY})` : null,
  };
  return (
    <button className={classes} style={inline} onClick={closePage}>
      <Icon id="arrow-back" color={props.color} />
    </button>
  );
}
