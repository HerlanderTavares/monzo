import Submit from './Submit';
import {formatSortCode, capitalize} from '../../../helpers';

const format = /[`!@#$%^&*()_+\-=\[\]{};:"\\|,.<>\/?~1234567890]/;

export const initError = {
  recipient: '',
  sortCode: '',
  accountNum: '',
  amount: '',
};

export function validation(obj, state, setError, submit) {
  setError(initError);

  // Recipient Validation
  switch (true) {
    case !obj.firstName:
    case !obj.lastName:
      setError(prevState => ({...prevState, recipient: 'Please enter full name'}));
      break;
    case obj.firstName.length < 3:
    case obj.lastName.length < 3:
      setError(prevState => ({...prevState, recipient: 'First or last name is too short'}));
      obj.firstName = undefined;
      obj.lastName = undefined;
      break;
    case format.test(obj.firstName):
    case format.test(obj.lastName):
      setError(prevState => ({
        ...prevState,
        recipient: 'Name cannot have numbers or special characters',
      }));
      obj.firstName = undefined;
      obj.lastName = undefined;
      break;
  }

  // SortCode Validation
  switch (true) {
    case !obj.sortCode:
      setError(prevState => ({...prevState, sortCode: 'Please enter sort code'}));
      break;
    case obj.sortCode.length < 6:
    case obj.sortCode.length > 6:
      setError(prevState => ({...prevState, sortCode: 'Sort code must be 6 digits'}));
      obj.sortCode = undefined;
      break;
  }

  // AccountNum Validation
  switch (true) {
    case !obj.accountNum:
      setError(prevState => ({...prevState, accountNum: 'Please enter account number'}));
      break;
    case obj.accountNum.length < 8:
    case obj.accountNum.length > 8:
      setError(prevState => ({...prevState, accountNum: 'Account number must be 8 digits'}));
      obj.accountNum = undefined;
      break;
  }

  // Amount Validation
  switch (true) {
    case !obj.amount:
      setError(prevState => ({...prevState, amount: 'Please enter amount'}));
      break;
    case obj.amount > state.balance:
      setError(prevState => ({
        ...prevState,
        amount: 'You cannot send more than the account balance',
      }));
      obj.amount = undefined;
      break;
  }

  if (obj.firstName && obj.lastName && obj.sortCode && obj.accountNum && obj.amount) {
    if (!obj.sortCode.includes('-')) {
      obj.sortCode = formatSortCode(obj.sortCode);
    }
    obj.amount = Math.abs(+obj.amount);
    obj.firstName = capitalize(obj.firstName);
    obj.lastName = capitalize(obj.lastName);
    submit(obj);
  }
}
