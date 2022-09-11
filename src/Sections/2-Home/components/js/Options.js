import {useState, useContext} from 'react';
import styles from '../css/Options.module.scss';
import {css, checkProp} from '../../../helpers';
import Item from '../../../1-UI/reusable/js/Item';
import State from '../../../0-API/state';

function Detail(props) {
  const copyInfo = () => {
    navigator.clipboard.writeText(props.info);
    props.onSetAlert('small', 'Copied to clipboard');
  };

  return (
    <Item element="div" hor="space-between" pad="1.5">
      <div className={css(styles, 'options__details')}>
        <span className={css(styles, 'options__title')}>{props.title}</span>
        <span className={css(styles, 'options__info')}>{props.info}</span>
      </div>

      <button className={css(styles, 'options__copy')} onClick={copyInfo}>
        Copy
      </button>
    </Item>
  );
}

function Action(props) {
  const disabled = props.disabled ? 'disabled' : '';

  return (
    <Item disabled={disabled}>
      <span className={css(styles, 'options__action')}>{props.children}</span>
    </Item>
  );
}

export default function Options(props) {
  const state = useContext(State);

  return (
    <div className={css(styles, 'options')}>
      <div className={css(styles, 'options-section')}>
        <h3 className={css(styles, 'options__heading')}>Account Details</h3>
        <Detail onSetAlert={state.setNotification} title="Sort Code" info={state.user.sortCode} />
        {/* prettier-ignore */}
        <Detail onSetAlert={state.setNotification} title="Account Number" info={state.user.accountNum} />
        <Detail onSetAlert={state.setNotification} title="BIC" info={state.user.bic} />
      </div>

      <div className={css(styles, 'options-section')}>
        <h3 className={css(styles, 'options__heading')}>Actions</h3>
        <Action disabled={true}>Create a saving pot</Action>
        <Action disabled={true}>Card Options</Action>
        <Action disabled={true}>Transaction Statistics</Action>
        <Action disabled={true}>Help</Action>
      </div>
    </div>
  );
}
