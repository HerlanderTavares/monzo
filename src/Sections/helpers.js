export const checkProp = (prop, defaultValue = null) => (prop ? prop : defaultValue);

export const checkClass = className => {
  if (!className) return ''.trim();
  else return ' ' + className;
};

export const css = (styles, ...classes) => {
  return `${[...classes].map(cl => eval(styles)[cl]).join(' ')}`;
};

export const formatNumber = (number, symbol = true) => {
  if (!symbol) {
    const value = Math.abs(+number.toFixed(2)).toLocaleString('EN-uk');
    const integer = value.split('.')[0];
    const decimals = value.split('.')[1];
    if (decimals) return integer + '.' + decimals.padEnd(2, '0');
    else return integer;
  } else {
    const value = Math.abs(number).toLocaleString('EN-uk', {style: 'currency', currency: 'GBP'});
    return value;
  }
};

export const formatSortCode = code => code.replace(/.{2}/g, '$&-').slice(0, -1);

export const capitalize = name => name[0].toUpperCase() + name.toLowerCase().slice(1);

export const sortTransactions = (a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf();

export const splitCardNum = (number, split) => {
  const num = number.toString();
  const numArr = [];

  for (let i = 0; i < split; i++) {
    const number = num.slice(i * split, i * split + split);
    numArr.push(<span key={`${i}`}>{number}</span>);
  }

  return numArr;
};
