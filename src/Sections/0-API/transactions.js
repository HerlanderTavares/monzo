const today = new Date();
const yesterday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1, 14, 45);
const days3 = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 3, 22, 11);
const days5 = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 5, 15, 27);

export const transactions = {
  johnS: {
    main: [
      {
        id: 'T0001',
        firstName: 'Dougie',
        lastName: 'Gaines',
        date: 'Fri, 01 Jul 2022 08:45:00 GMT',
        amount: -391.19,
        sortCode: '48-53-46',
        accountNum: 55411511,
        reference: 'Son of a Gun',
      },
      {
        id: 'T0002',
        firstName: 'Elaina',
        lastName: 'McGrath',
        date: 'Mon, 18 Jul 2022 23:27:00 GMT',
        amount: -39.91,
        sortCode: '01-00-01',
        accountNum: 87654321,
        reference: 'Back To the Drawing Board',
      },
      {
        id: 'T0003',
        firstName: 'Darragh',
        lastName: 'Miller',
        date: 'Thu, 28 Jul 2022 07:09:00 GMT',
        amount: -63.28,
        sortCode: '06-66-78',
        accountNum: 57582635,
        reference: 'Long In The Tooth',
      },
      {
        id: 'T0004',
        firstName: 'Leia',
        lastName: 'Mora',
        date: 'Tue, 30 Aug 2022 08:10:56 GMT',
        amount: -349.89,
        sortCode: '85-06-87',
        accountNum: 54188026,
        reference: 'Everything But The Kitchen Sink',
      },
      {
        id: 'T0005',
        firstName: 'Avni',
        lastName: 'Buxton',
        date: 'Wed, 27 Jul 2022 23:55:00 GMT',
        amount: -254.48,
        sortCode: '52-15-88',
        accountNum: 5943904,
        reference: 'Cut The Mustard',
      },
      {
        id: 'T0006',
        firstName: 'Lachlan',
        lastName: 'Ramsey',
        date: 'Fri, 26 Aug 2022 16:22:00 GMT',
        amount: -73.06,
        sortCode: '28-31-77',
        accountNum: 53368941,
        reference: 'Scot-free',
      },
      {
        id: 'T0007',
        firstName: 'Mihai',
        lastName: 'Shelton',
        date: 'Thu, 07 Jul 2022 23:17:00 GMT',
        amount: 212.6,
        sortCode: '55-95-72',
        accountNum: 55379624,
        reference: 'Lovey Dovey',
      },
      {
        id: 'T0008',
        firstName: 'Aliesha',
        lastName: 'Broughton',
        date: 'Mon, 22 Aug 2022 20:46:00 GMT',
        amount: 444.64,
        sortCode: '89-56-06',
        accountNum: 59093226,
        reference: 'Burst Your Bubble',
      },
      {
        id: 'T0009',
        firstName: 'Zara',
        lastName: 'Mccormack',
        date: 'Mon, 01 Aug 2022 01:35:00 GMT',
        amount: 460.03,
        sortCode: '81-63-35',
        accountNum: 57355849,
        reference: "There's No I in Team",
      },
      {
        id: 'T0010',
        firstName: 'Joely',
        lastName: 'Torres',
        date: yesterday,
        amount: -62.85,
        sortCode: '30-72-52',
        accountNum: 52416319,
        reference: 'A Guinea Pig',
      },
      {
        id: 'T0011',
        firstName: 'Rhiannon',
        lastName: 'Grainger',
        date: 'Sun, 03 Jul 2022 16:29:00 GMT',
        amount: -75.44,
        sortCode: '39-31-04',
        accountNum: 54719460,
        reference: 'A Home Bird',
      },
      {
        id: 'T0012',
        firstName: 'Manuel',
        lastName: 'Spence',
        date: 'Thu, 11 Aug 2022 17:23:00 GMT',
        amount: 59.82,
        sortCode: '25-78-80',
        accountNum: 58122224,
        reference: 'A Cold Fish',
      },
      {
        id: 'T0013',
        firstName: 'Firat',
        lastName: 'Tate',
        date: days3,
        amount: 336.46,
        sortCode: '36-46-02',
        accountNum: 52999878,
        reference: 'Ring Any Bells?',
      },
      {
        id: 'T0014',
        firstName: 'Flynn',
        lastName: 'Barrera',
        date: 'Tue, 16 Aug 2022 05:55:00 GMT',
        amount: -82.6,
        sortCode: '84-33-78',
        accountNum: 59273517,
        reference: 'Put a Sock In It',
      },
      {
        id: 'T0015',
        firstName: 'Natasha',
        lastName: 'Franco',
        date: 'Fri, 26 Aug 2022 09:39:00 GMT',
        amount: 302.99,
        sortCode: '32-80-63',
        accountNum: 58473619,
        reference: 'A Chip on Your Shoulder',
      },
      {
        id: 'T0016',
        firstName: 'Yara',
        lastName: 'Marsh',
        date: days5,
        amount: -154.54,
        sortCode: '75-59-59',
        accountNum: 53370021,
        reference: 'Barking Up The Wrong Tree',
      },
      {
        id: 'T0017',
        firstName: 'Ellie-May',
        lastName: 'Hackett',
        date: 'Fri, 05 Aug 2022 17:32:00 GMT',
        amount: 50.92,
        sortCode: '21-18-14',
        accountNum: 52038552,
        reference: 'Hard Pill to Swallow',
      },
      {
        id: 'T0018',
        firstName: 'Yousaf',
        lastName: 'Mcarthur',
        date: 'Thu, 21 Jul 2022 12:31:00 GMT',
        amount: 406.13,
        sortCode: '94-21-05',
        accountNum: 59047235,
        reference: 'Roll With the Punches',
      },
      {
        id: 'T0019',
        firstName: 'Abul',
        lastName: 'Jeffery',
        date: 'Sun, 28 Aug 2022 09:43:00 GMT',
        amount: -183.5,
        sortCode: '87-26-96',
        accountNum: 51844034,
        reference: 'Tug of War',
      },
      {
        id: 'T0020',
        firstName: 'Esmae',
        lastName: 'Goddard',
        date: 'Fri, 19 Aug 2022 05:05:00 GMT',
        amount: -275.65,
        sortCode: '18-69-30',
        accountNum: 53742990,
        reference: 'When the Rubber Hits the Road',
      },
      {
        id: 'T0021',
        firstName: 'Cosmo',
        lastName: 'Sparks',
        date: 'Sun, 17 Jul 2022 13:11:00 GMT',
        amount: -494.89,
        sortCode: '23-40-19',
        accountNum: 51036820,
        reference: 'Elvis Has Left The Building',
      },
      {
        id: 'T0022',
        firstName: 'Shannan',
        lastName: 'Sullivan',
        date: 'Mon, 01 Aug 2022 09:39:00 GMT',
        amount: -379.86,
        sortCode: '81-50-16',
        accountNum: 55973900,
        reference: "Wouldn't Harm a Fly",
      },
      {
        id: 'T0023',
        firstName: 'Tyreese',
        lastName: 'Villalobos',
        date: 'Fri, 12 Aug 2022 11:25:00 GMT',
        amount: 411.54,
        sortCode: '96-10-74',
        accountNum: 52370061,
        reference: 'A Bite at the Cherry',
      },
      {
        id: 'T0024',
        firstName: 'Allen',
        lastName: 'Kirk',
        date: 'Wed, 03 Aug 2022 16:33:00 GMT',
        amount: -25.48,
        sortCode: '23-59-35',
        accountNum: 5335606,
        reference: 'A Cut Above',
      },
      {
        id: 'T0025',
        firstName: 'Abdi',
        lastName: 'Carr',
        date: 'Wed, 20 Jul 2022 19:22:00 GMT',
        amount: 402.68,
        sortCode: '72-85-37',
        accountNum: 54820042,
        reference: 'No Ifs, Ands, or Buts',
      },
      {
        id: 'T0026',
        firstName: 'Weronika',
        lastName: 'Atkins',
        date: 'Fri, 29 Jul 2022 15:57:00 GMT',
        amount: 473.61,
        sortCode: '21-40-56',
        accountNum: 59032216,
        reference: 'Know the Ropes',
      },
      {
        id: 'T0027',
        firstName: 'Roland',
        lastName: 'Mcdaniel',
        date: 'Sun, 10 Jul 2022 16:50:00 GMT',
        amount: -2.16,
        sortCode: '15-50-64',
        accountNum: 57002403,
        reference: 'Let Her Rip',
      },
      {
        id: 'T0028',
        firstName: 'Ralphy',
        lastName: 'Mercado',
        date: 'Sun, 17 Jul 2022 02:05:00 GMT',
        amount: -299.95,
        sortCode: '35-10-09',
        accountNum: 52771955,
        reference: 'Swinging For the Fences',
      },
      {
        id: 'T0029',
        firstName: 'Vanesa',
        lastName: 'Reed',
        date: 'Wed, 13 Jul 2022 21:01:00 GMT',
        amount: 121.19,
        sortCode: '43-45-31',
        accountNum: 53530249,
        reference: "If You Can't Stand the Heat, Get Out of the Kitchen",
      },
      {
        id: 'T0030',
        firstName: 'Alyce',
        lastName: 'Liu',
        date: 'Thu, 18 Aug 2022 04:19:00 GMT',
        amount: -62.17,
        sortCode: '82-58-60',
        accountNum: 52724957,
        reference: 'Easy As Pie',
      },
    ],

    pots: {
      P0001: [
        {date: 'Tue, 05 Jul 2022 11:16:00 GMT', amount: 275.11},
        {date: 'Sat, 23 Jul 2022 16:51:00 GMT', amount: -275.11},
      ],

      P0002: [
        {date: 'Tue, 05 Jul 2022 11:16:00 GMT', amount: 275.11},
        {date: 'Sat, 23 Jul 2022 16:51:00 GMT', amount: -275.11},
      ],
    },
  },

  elainaM: {
    main: [
      {
        id: 'T0001',
        firstName: 'Lena',
        lastName: "O'Gallagher",
        date: 'Sun, 21 Aug 2022 06:40:00 GMT',
        amount: -351.82,
        sortCode: '38-74-72',
        accountNum: 51112397,
        reference: 'Jaws of Death',
      },
      {
        id: 'T0002',
        firstName: 'Sherry',
        lastName: 'Manning',
        date: 'Thu, 18 Aug 2022 21:54:00 GMT',
        amount: -232.66,
        sortCode: '84-53-03',
        accountNum: 54181839,
        reference: 'A Cold Day in Hell',
      },
      {
        id: 'T0003',
        firstName: 'Ayaana',
        lastName: 'Ross',
        date: 'Fri, 05 Aug 2022 02:34:00 GMT',
        amount: -75.62,
        sortCode: '56-65-34',
        accountNum: 59024052,
        reference: 'Every Cloud Has a Silver Lining',
      },
      {
        id: 'T0004',
        firstName: 'Elle',
        lastName: 'Bouvet',
        date: 'Fri, 29 Jul 2022 16:36:00 GMT',
        amount: 46.13,
        sortCode: '05-57-91',
        accountNum: 5232476,
        reference: 'Flea Market',
      },
      {
        id: 'T0005',
        firstName: 'Mathias',
        lastName: 'Pittman',
        date: 'Fri, 22 Jul 2022 01:50:00 GMT',
        amount: 3.79,
        sortCode: '83-52-37',
        accountNum: 53753698,
        reference: 'A Lone Wolf',
      },
      {
        id: 'T0006',
        firstName: 'Luciano',
        lastName: 'Quintero',
        date: 'Mon, 25 Jul 2022 21:03:00 GMT',
        amount: -31.22,
        sortCode: '79-90-95',
        accountNum: 56684854,
        reference: 'Break The Ice',
      },
      {
        id: 'T0007',
        firstName: 'Havin',
        lastName: 'Guest',
        date: 'Wed, 27 Jul 2022 23:08:00 GMT',
        amount: 324.83,
        sortCode: '39-51-59',
        accountNum: 57033059,
        reference: 'Jaws of Life',
      },
      {
        id: 'T0008',
        firstName: 'Colby',
        lastName: 'Knight',
        date: 'Sun, 24 Jul 2022 21:43:00 GMT',
        amount: 402.79,
        sortCode: '39-29-41',
        accountNum: 54559677,
        reference: 'A Little Bird Told Me',
      },
      {
        id: 'T0009',
        firstName: 'Radhika',
        lastName: 'Enriquez',
        date: 'Tue, 05 Jul 2022 04:46:00 GMT',
        amount: -471.67,
        sortCode: '38-33-51',
        accountNum: 57794531,
        reference: 'Cut To The Chase',
      },
      {
        id: 'T0010',
        firstName: 'Mattie',
        lastName: 'Martinez',
        date: 'Wed, 17 Aug 2022 06:52:00 GMT',
        amount: -410.89,
        sortCode: '15-70-83',
        accountNum: 55582382,
        reference: 'A Cut Above',
      },
      {
        id: 'T0011',
        firstName: 'Margaret',
        lastName: 'Bush',
        date: 'Tue, 30 Aug 2022 08:10:56 GMT',
        amount: -476.6,
        sortCode: '17-56-87',
        accountNum: 5547537,
        reference: 'Jig Is Up',
      },
      {
        id: 'T0012',
        firstName: 'Hadi',
        lastName: 'Hudson',
        date: 'Mon, 25 Jul 2022 14:58:00 GMT',
        amount: 37.87,
        sortCode: '69-91-22',
        accountNum: 57268729,
        reference: 'Tough It Out',
      },
      {
        id: 'T0013',
        firstName: 'Idris',
        lastName: 'Hess',
        date: yesterday,
        amount: 359.83,
        sortCode: '89-37-22',
        accountNum: 53207481,
        reference: 'A Fool and His Money Are Soon Parted',
      },
      {
        id: 'T0014',
        firstName: 'Fatema',
        lastName: 'Villalobos',
        date: 'Fri, 26 Aug 2022 03:07:00 GMT',
        amount: 20.17,
        sortCode: '18-47-82',
        accountNum: 56334588,
        reference: 'Everything But The Kitchen Sink',
      },
      {
        id: 'T0015',
        firstName: 'Maison',
        lastName: 'Bowers',
        date: 'Tue, 02 Aug 2022 09:42:00 GMT',
        amount: -417.75,
        sortCode: '87-33-77',
        accountNum: 56450196,
        reference: 'Cry Wolf',
      },
      {
        id: 'T0016',
        firstName: 'Mitchell',
        lastName: 'Beltran',
        date: days3,
        amount: 41.84,
        sortCode: '97-55-03',
        accountNum: 58193108,
        reference: 'A Few Sandwiches Short of a Picnic',
      },
      {
        id: 'T0017',
        firstName: 'Orion',
        lastName: 'Bishop',
        date: 'Tue, 26 Jul 2022 09:29:00 GMT',
        amount: -5.63,
        sortCode: '15-42-74',
        accountNum: 55900390,
        reference: 'Under the Weather',
      },
      {
        id: 'T0018',
        firstName: 'Inaya',
        lastName: 'Horne',
        date: days5,
        amount: 209.29,
        sortCode: '11-22-26',
        accountNum: 51789511,
        reference: 'Quality Time',
      },
      {
        id: 'T0019',
        firstName: 'Sumayyah',
        lastName: 'Hoover',
        date: 'Sat, 20 Aug 2022 18:14:00 GMT',
        amount: -164.69,
        sortCode: '80-19-23',
        accountNum: 58691838,
        reference: 'A Dime a Dozen',
      },
      {
        id: 'T0020',
        firstName: 'Hadiya',
        lastName: 'Farrington',
        date: 'Mon, 22 Aug 2022 12:29:00 GMT',
        amount: 191.56,
        sortCode: '48-34-79',
        accountNum: 53642843,
        reference: "Money Doesn't Grow On Trees",
      },
      {
        id: 'T0021',
        firstName: 'Roshni',
        lastName: 'Reese',
        date: 'Sat, 16 Jul 2022 17:42:00 GMT',
        amount: 304.02,
        sortCode: '05-46-02',
        accountNum: 58937884,
        reference: 'Down And Out',
      },
      {
        id: 'T0022',
        firstName: 'Naveed',
        lastName: 'Shepard',
        date: 'Thu, 07 Jul 2022 04:29:00 GMT',
        amount: -477.28,
        sortCode: '24-06-52',
        accountNum: 56035563,
        reference: 'A Cut Below',
      },
      {
        id: 'T0023',
        firstName: 'Garin',
        lastName: 'Burgess',
        date: 'Wed, 10 Aug 2022 13:08:00 GMT',
        amount: 186.36,
        sortCode: '13-37-54',
        accountNum: 58881383,
        reference: "There's No I in Team",
      },
      {
        id: 'T0024',
        firstName: 'Jasmin',
        lastName: 'Firth',
        date: 'Sun, 14 Aug 2022 16:39:00 GMT',
        amount: 167.6,
        sortCode: '78-14-27',
        accountNum: 51601435,
        reference: 'In a Pickle',
      },
      {
        id: 'T0025',
        firstName: 'Noa',
        lastName: 'Phillips',
        date: 'Fri, 01 Jul 2022 21:44:00 GMT',
        amount: -316.71,
        sortCode: '48-81-22',
        accountNum: 58571687,
        reference: "Off One's Base",
      },
      {
        id: 'T0026',
        firstName: 'Antoinette',
        lastName: 'Montgomery',
        date: 'Sat, 02 Jul 2022 21:50:00 GMT',
        amount: -486.24,
        sortCode: '17-76-20',
        accountNum: 55578828,
        reference: 'Barking Up The Wrong Tree',
      },
      {
        id: 'T0027',
        firstName: 'Emyr',
        lastName: 'Gardner',
        date: 'Sat, 23 Jul 2022 16:51:00 GMT',
        amount: -208.5,
        sortCode: '49-81-33',
        accountNum: 53100599,
        reference: 'A Cold Fish',
      },
      {
        id: 'T0028',
        firstName: 'Trystan',
        lastName: 'Herman',
        date: 'Mon, 11 Jul 2022 21:38:00 GMT',
        amount: 142.22,
        sortCode: '33-58-19',
        accountNum: 57125298,
        reference: 'Let Her Rip',
      },
      {
        id: 'T0029',
        firstName: 'Abbas',
        lastName: 'Brennan',
        date: 'Tue, 05 Jul 2022 11:16:00 GMT',
        amount: 275.11,
        sortCode: '26-88-42',
        accountNum: 57005935,
        reference: 'Cut The Mustard',
      },
      {
        id: 'T0030',
        firstName: 'Ammaar',
        lastName: 'Cuevas',
        date: 'Fri, 26 Aug 2022 19:50:00 GMT',
        amount: 490.88,
        sortCode: '71-33-67',
        accountNum: 52861133,
        reference: 'Like Father Like Son',
      },
    ],

    pots: {
      P0001: [
        {date: 'Tue, 05 Jul 2022 11:16:00 GMT', amount: 275.11},
        {date: 'Sat, 23 Jul 2022 16:51:00 GMT', amount: -275.11},
      ],

      P0002: [
        {date: 'Tue, 05 Jul 2022 11:16:00 GMT', amount: 275.11},
        {date: 'Sat, 23 Jul 2022 16:51:00 GMT', amount: -275.11},
      ],
    },
  },
};