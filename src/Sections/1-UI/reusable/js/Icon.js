import styles from '../css/Icon.module.scss';
import icons from '../css/icons.svg';
import {checkProp, css} from '../../../helpers';

export default function Icon(props) {
  const disabled = props.disabled ? 'disabled' : '';
  const classes = css(styles, 'icon', disabled) + ' ' + checkProp(props.className);
  const color = checkProp(props.color, '#f08080');

  const inline = {
    fill: props.fill == true ? color : 'none',
    stroke: props.stroke == 'none' ? 'none' : color,
    width: checkProp(props.size, '100%'),
    height: checkProp(props.size, '100%'),
  };

  return (
    <svg className={classes} style={inline}>
      <use href={icons + `#${props.id}`} />
    </svg>
  );
}
