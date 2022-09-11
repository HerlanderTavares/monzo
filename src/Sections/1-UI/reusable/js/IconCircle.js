import styles from '../css/IconCircle.module.scss';
import {css, checkProp} from '../../../helpers';

export default function IconCircle(props) {
  const inline = {
    height: props.size ? `${props.size}rem` : '2rem',
    width: props.size ? `${props.size}rem` : '2rem',
    backgroundColor: props.color ? props.color : null,
  };

  const disabled = props.disabled ? 'disabled' : '';
  const span = {
    fontSize: props.font ? `${props.font}rem` : '2rem',
    color: checkProp(props.fontColor, null),
  };

  const classes = css(styles, 'icon-circle', checkProp(props.className), disabled);

  if (props.element == 'button') {
    return (
      <button className={classes} style={inline} onClick={props.onClick} data-btn={props.data}>
        <span style={span}>{props.children}</span>
      </button>
    );
  } else {
    return (
      <div className={classes} style={inline}>
        <span style={span}>{props.children}</span>
      </div>
    );
  }
}
