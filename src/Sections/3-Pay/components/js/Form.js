import {useState, useEffect, useReducer, useContext, forwardRef, useRef} from 'react';
import styles from '../css/Form.module.scss';
import {css, checkProp, formatSortCode, capitalize} from '../../../helpers';
import ItemBar from '../../../1-UI/reusable/js/ItemBar';
import State from '../../../0-API/state';
import PayState from '../../payState';

import {reducer, validation, initError} from './formReducer';

const Input = forwardRef((props, ref) => {
  const disabled = checkProp(props.disabled, false);

  return (
    <ItemBar element="div" disabled={disabled} className={css(styles, 'form__input')}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={checkProp(props.type, 'text')}
        name={props.id}
        id={props.id}
        spellCheck="false"
        onChange={props.onChange}
        defaultValue={props.default}
        maxLength={props.max}
        pattern={props.pattern}
        step=".01"
        ref={ref}
      />
      <span className={css(styles, 'form__error')}>{props.error}</span>
    </ItemBar>
  );
});

export default function Form(props) {
  // States & variables
  const state = useContext(State);
  const payState = useContext(PayState);
  const initObj = props.transaction;
  const [error, setError] = useState(initError);

  // Use refs
  const recipient = useRef();
  const sortCode = useRef();
  const accountNum = useRef();
  const amount = useRef();
  const reference = useRef();

  // Functions
  const submitForm = e => {
    e.preventDefault();

    const name = recipient.current.value.trim().split(' ');
    const obj = {
      ...initObj,
      firstName: name[0],
      lastName: name.length > 2 ? name[name.length - 1] : name[1],
      sortCode: sortCode.current.value,
      accountNum: accountNum.current.value,
      amount: +amount.current.value,
      reference: reference.current.value,
    };

    const submit = obj => {
      payState.setTransaction(obj);
      payState.setScreen('submit');
    };

    validation(obj, state, setError, submit);
  };

  return (
    <form className={css(styles, 'form')} onSubmit={submitForm}>
      <div className={css(styles, 'form__container')}>
        <Input
          onChange={() => {}}
          label="Recipient"
          id="recipient"
          default={`${initObj.firstName} ${initObj.lastName}`}
          ref={recipient}
          error={error.recipient}
        />

        <Input
          onChange={() => {}}
          label="Sort Code"
          id="sortCode"
          type="number"
          default={initObj.sortCode}
          ref={sortCode}
          error={error.sortCode}
        />

        <Input
          onChange={() => {}}
          label="Account Number"
          id="accountNum"
          type="number"
          default={initObj.accountNum}
          ref={accountNum}
          error={error.accountNum}
        />

        <Input
          onChange={() => {}}
          label="Amount (£)"
          id="amount"
          ref={amount}
          error={error.amount}
        />

        <Input onChange={() => {}} label="Reference" id="reference" ref={reference} max="30" />
      </div>

      <button className={css(styles, 'form__submit')} type="submit">
        Confirm
      </button>
    </form>
  );
}
