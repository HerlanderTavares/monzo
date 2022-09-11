import React, {createContext} from 'react';

const init = {
  transaction: '',
  setTransaction: '',
};

const PayState = createContext(init);
export default PayState;

/****************************************
     STATE IN USE
****************************************/
