export const setStorage = (user, accountObj = user) => {
  localStorage.removeItem(`${user.username}_balance`);
  localStorage.removeItem(`${user.username}_transactions`);
  localStorage.setItem(`${user.username}_balance`, JSON.stringify(accountObj['balance']));
  // prettier-ignore
  localStorage.setItem(`${user.username}_transactions`, JSON.stringify(accountObj['transactions']));
};

export const setStateStorage = state => {
  state.setBalance(prevState => {
    localStorage.setItem(`${state.user.username}_balance`, JSON.stringify(prevState));
    return prevState;
  });
  state.setTransactions(prevState => {
    localStorage.setItem(`${state.user.username}_transactions`, JSON.stringify(prevState));
    return prevState;
  });
};

export const getStorage = (user, item) => {
  const storageItem = localStorage.getItem(`${user.username}_${item}`);
  return JSON.parse(storageItem);
};
