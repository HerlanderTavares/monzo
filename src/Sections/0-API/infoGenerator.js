import {users} from './accounts';

/****************************************
     INFORMATION
****************************************/
const today = new Date();
const yesterday = today.getDate() - 1;

const months = [today.getMonth(), today.getMonth() - 1];

const names = [
  "Lena O'Gallagher",
  'Sherry Manning',
  'Ayaana Ross',
  'Elle Bouvet',
  'Mathias Pittman',
  'Luciano Quintero',
  'Havin Guest',
  'Colby Knight',
  'Radhika Enriquez',
  'Mattie Martinez',
  'Margaret Bush',
  'Hadi Hudson',
  'Idris Hess',
  'Fatema Villalobos',
  'Maison Bowers',
  'Mitchell Beltran',
  'Orion Bishop',
  'Inaya Horne',
  'Sumayyah Hoover',
  'Hadiya Farrington',
  'Roshni Reese',
  'Naveed Shepard',
  'Garin Burgess',
  'Jasmin Firth',
  'Noa Phillips',
  'Antoinette Montgomery',
  'Emyr Gardner',
  'Trystan Herman',
  'Abbas Brennan',
  'Ammaar Cuevas',
];

const references = [
  'Jaws of Death',
  'Meaning: Being in a dangerous or very deadly situation.',
  'A Cold Day in Hell',
  'Meaning: Something that will never happen.',
  'Every Cloud Has a Silver Lining',
  'Meaning: To be optimistic, even in difficullt times.',
  'Flea Market',
  'Meaning: A type of bazaar where inexpensive goods are sold or bartered.',
  'A Lone Wolf',
  "Meaning: Someone who's solitary or independent.",
  'Break The Ice',
  'Meaning: Breaking down a social stiffness.',
  'Jaws of Life',
  'Meaning: Usually this references a tool used by rescuers when they pry or cut open a car to save the occupant.',
  'A Little Bird Told Me',
  "Meaning: Used when you don't wish to divulge where you got the information.",
  'Cut To The Chase',
  'Meaning: To get to the point, leaving out all of the unnecessary details.',
  'A Cut Above',
  "Meaning: Something that's better to the surrounding others.",
  'Jig Is Up',
  'Meaning: For a ruse or trick to be discovered; to be caught.',
  'Tough It Out',
  'Meaning: To remain resillient even in hard times; enduring.',
  'A Fool and His Money Are Soon Parted',
  'Meaning: Someone who spends their money foolishly.',
  'Everything But The Kitchen Sink',
  'Meaning: Including nearly everything possible.',
  'Cry Wolf',
  'Meaning: Someone that calls for help when it is not needed. Someone who is lying.',
  'A Few Sandwiches Short of a Picnic',
  "Meaning: Someone who's not intelligent or has questionable mental capacity.",
  'Under the Weather',
  'Meaning: Not feeling well, in health or mood.',
  'Quality Time',
  'Meaning: Spending time with another to strengthen the relationship.',
  'A Dime a Dozen',
  'Meaning: Something that is extremely common.',
  "Money Doesn't Grow On Trees",
  "Meaning: Suggests that money is a resource that must be earned and is not one that's easily acquired.",
  'Down And Out',
  'Meaning: (1) A term used in a boxing. (2) Someone who has become incapacitated.',
  'A Cut Below',
  "Meaning: Something that's inferior to the surrounding others.",
  "There's No I in Team",
  'Meaning: To not work alone, but rather, together with others in order to achieve a certain goal.',
  'In a Pickle',
  'Meaning: Being in a difficult predicament; a mess; an undesirable situation.',
  "Off One's Base",
  'Meaning: A person that is crazy or behaving in idiotic ways',
  'Barking Up The Wrong Tree',
  'Meaning: To make a wrong assumption about something.',
  'A Cold Fish',
  'Meaning: Someone who lacks empathy and emotion.',
  'Let Her Rip',
  "Meaning: Permission to start, or it could mean 'go faster!'",
  'Cut The Mustard',
  'Meaning: To cut the mustard is to meet a required standard, or to meet expectations.',
  'Like Father Like Son',
  "Meaning: Resembling one's parents in terms of appearance or behavior.",
];

for (let i = 0; i < references.length; i++) {
  references.splice(i + 1, 1);
}

// console.log(references);

/****************************************
     GENERATOR
****************************************/
const array = [];
const instances = 30;

const john = [users.johnS.firstName, users.johnS.lastName];
const elaina = [users.elainaM.firstName, users.elainaM.lastName];

const deets = (firstName, lastName) => {
  let sortCode;
  let accNum;

  if (firstName == john[0] && lastName == john[1]) {
    sortCode = users.johnS.sortCode;
    accNum = users.johnS.accountNum;
  } else if (firstName == elaina[0] && lastName == elaina[1]) {
    sortCode = users.elainaM.sortCode;
    accNum = users.elainaM.accountNum;
  } else {
    sortCode =
      `${Math.trunc(Math.random() * 99)}`.padStart(2, '0') +
      '-' +
      `${Math.trunc(Math.random() * 99)}`.padStart(2, '0') +
      '-' +
      `${Math.trunc(Math.random() * 99)}`.padStart(2, '0');

    accNum = +('5' + Math.trunc(Math.random() * 9999999));
  }

  return [sortCode, accNum];
};

for (let i = 0; i < instances; i++) {
  const year = today.getFullYear();
  const month = months[Math.floor(Math.random() * months.length)];
  const day = Math.ceil(Math.random() * today.getDate());
  const hour = Math.floor(Math.random() * 23);
  const minute = Math.floor(Math.random() * 59);
  const firstName = names[i].split(' ')[0];
  const lastName = names[i].split(' ')[1];
  const amountRange = [500, -500][Math.floor(Math.random() * 2)];
  const amount = (Math.random() * amountRange).toFixed(2);

  const obj = {
    id: 'T' + `${array.length + 1}`.padStart(4, '0'),
    firstName: firstName,
    lastName: lastName,
    date: new Date(year, month, day, hour, minute).toUTCString(),
    amount: +amount,
    sortCode: deets(firstName, lastName)[0],
    accountNum: deets(firstName, lastName)[1],
    reference: references[i],
  };

  array.push(obj);
}

// console.log(array)
// console.log(JSON.stringify(array));
