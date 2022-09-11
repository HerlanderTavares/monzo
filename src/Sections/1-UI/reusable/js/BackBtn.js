import styles from '../css/BackBtn.module.scss';
import {css, checkProp} from '../../../helpers';
import Icon from './Icon';

export default function BackBtn(props) {
  const classes = css(styles, 'back-btn') + ' ' + checkProp(props.className);
  const inline = {
    fontSize: props.size ? props.size + 'rem' : null,
    color: checkProp(props.color),
    alignSelf: checkProp(props.align),
    transform: props.moveY ? `translateY(${props.moveY})` : null,
  };

  return (
    <button className={classes} onClick={props.onClick} style={inline}>
      <Icon id="arrow-back" size="1em" color={props.color} />
      <span>{checkProp(props.label, 'Back')}</span>
    </button>
  );
}
