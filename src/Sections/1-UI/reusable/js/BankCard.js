import styles from '../css/BankCard.module.scss';
import {css, checkProp} from '../../../helpers';

export default function BankCard(props) {
  const classes = css(styles, 'card') + ' ' + props.className;
  const inline = {
    backgroundColor: checkProp(props.color, 'lightcoral'),
    width: checkProp(props.w),
    height: checkProp(props.h),
    borderRadius: props.radius ? props.radius + 'rem' : null,
    boxShadow: checkProp(props.shadow),
  };

  return (
    <div className={classes} style={inline}>
      {props.children}
    </div>
  );
}
