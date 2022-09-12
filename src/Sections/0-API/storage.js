export const setStorage = (user, itemName, obj) => {
  localStorage.removeItem(`${user.username}_${itemName}`);
  localStorage.setItem(`${user.username}_${itemName}`, JSON.stringify(obj));
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
