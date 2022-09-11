import styles from '../css/Item.module.scss';
import {css, checkProp, checkClass} from '../../../helpers';

export default function Item(props) {
  const disabled = props.disabled ? 'disabled' : '';
  const classes = css(styles, 'item', disabled).trim() + checkClass(props.className);
  const inline = {
    gap: props.gap ? `${props.gap}rem` : 0,
    padding: props.pad ? `${props.pad}rem 0` : '2rem 0',
    justifyContent: checkProp(props.hor, 'start'),
  };

  if (props.element == 'div') {
    return (
      <div className={classes} style={inline} data-item={checkProp(props.data)}>
        {props.children}
      </div>
    );
  } else {
    return (
      <button
        className={classes}
        style={inline}
        data-item={checkProp(props.data)}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    );
  }
}
