import styles from '../css/ItemBar.module.scss';
import {css, checkProp, checkClass} from '../../../helpers';

export default function ItemBar(props) {
  const disabled = props.disabled ? 'disabled' : '';
  const classes = css(styles, 'item', disabled).trim() + checkClass(props.className);
  const inline = {
    justifyContent: checkProp(props.hor, 'auto'),
    alignItems: checkProp(props.ver, 'center'),
    gap: props.gap ? `${props.gap}rem` : 0,
    aspectRatio: checkProp(props.ar, '1 / 0.22'),
    padding: props.pad ? props.pad + 'rem' : null,
    height: checkProp(props.height),
  };

  if (props.element == 'div')
    return (
      <div className={classes.trim()} style={inline} data-btn={props.data}>
        {props.children}
      </div>
    );
  else
    return (
      <button className={classes} style={inline} onClick={props.onClick} data-btn={props.data}>
        {props.children}
      </button>
    );
}
