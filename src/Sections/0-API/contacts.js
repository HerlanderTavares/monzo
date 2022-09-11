import {users} from './accounts';

export const contacts = {
  johnS: {
    favourites: [
      {
        username: 'elainaM',
        firstName: 'Elaina',
        lastName: 'McGrath',
        account: {},
      },
    ],

    all: [
      {
        username: 'elainaM',
        firstName: 'Elaina',
        lastName: 'McGrath',
        account: {},
      },
    ],
    dummy: ['Mum', 'Dad', 'Brother'],
  },

  elainaM: {
    favourites: [
      {
        username: 'johnS',
        firstName: 'John',
        lastName: 'Smith',
        account: {},
      },
    ],
    all: [
      {
        username: 'johnS',
        firstName: 'John',
        lastName: 'Smith',
        account: {},
      },
    ],
    dummy: ['Mum', 'Dad', 'Brother'],
  },
};
