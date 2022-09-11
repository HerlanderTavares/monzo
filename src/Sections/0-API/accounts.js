import {transactions} from './transactions';
import {contacts} from './contacts';

export const users = {
  johnS: {
    id: 'c001',
    username: '',
    initials: '',
    firstName: 'John',
    lastName: 'Smith',
    balance: 13526.32,
    sortCode: '01-00-01',
    accountNum: 12345678,
    bic: 'MONZGB5L',
    cardNum: 1234567890987654,
    transactions: {},
    contacts: {},

    pots: [
      {
        id: 'P0001',
        name: 'Rent',
        amount: 0,
        transactions: transactions.johnS.pots.P0001,
        color: '#ffec96',
      },

      {
        id: 'P0002',
        name: 'Holidays',
        amount: 0,
        transactions: transactions.johnS.pots.P0002,
        color: '#96cfff',
      },
    ],
  },

  elainaM: {
    id: 'c002',
    username: '',
    initials: '',
    firstName: 'Elaina',
    lastName: 'McGrath',
    fullName: '',
    balance: 26872.96,
    sortCode: '01-00-01',
    accountNum: 87654321,
    bic: 'MONZGB5L',
    cardNum: 4567890987654321,
    transactions: transactions.elainaM,
    contacts: {},

    pots: [
      {
        id: 'P0001',
        name: 'Rent',
        amount: 0,
        transactions: transactions.elainaM.pots.P0001,
        color: '#ffec96',
      },

      {
        id: 'P0002',
        name: 'Holidays',
        amount: 0,
        transactions: transactions.elainaM.pots.P0002,
        color: '#96cfff',
      },
    ],
  },
};

/************** Set Attributes **************/

//Set Usernames
for (const user in users) users[user].username = user;

//Set Transactions
for (const user in users) users[user].transactions = transactions[user].main;

//Set Contacts
for (const user in users) users[user].contacts = contacts[user];

//Set Initials
for (const user in users)
  users[user].initials = `${users[user].firstName[0]}${users[user].lastName[0]}`;

//Set Full Name
for (const user in users) users[user].fullName = `${users[user].firstName} ${users[user].lastName}`;

//Set Favourite Accounts
for (const user in users) {
  users[user].contacts.favourites.map(contact => {
    contact.account = function () {
      return this[contact.username];
    }.bind(users)();
  });
}

for (const user in users) {
  users[user].contacts.all.map(contact => {
    contact.account = function () {
      return this[contact.username];
    }.bind(users)();
  });
}

/****************************************
     OBJECT KEYS INCEPTION
****************************************/
//How to set object keys with already existing keys

//Flat objects
const objFlat = {
  key1: 'it ',
  key2: function () {
    return this.key1 + ' works!';
  },
};

//Nested Objects
const objNested = {
  key1: 'hello',
  nested: {
    func: {},
  },
};

//Bind method to bind the 'this' keyword to the original object. Parenthisis at the end to call immediatly
objNested.nested.func = function () {
  return this.key1;
}.bind(objNested)();
