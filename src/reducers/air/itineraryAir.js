const uniqueCarriers = [
  { code: 'OA', name: 'Olympic Air' },
  { code: 'A3', name: 'Aegean' },
  { code: 'SK', name: 'SAS' },
  { code: 'LH', name: 'Lufthansa' },
];

const legs = [
  {
    id: 0,
    segKey: '5EcNePgOZ1Fn',
    from: 'Rhodes',
    to: 'Athens',
    legId: 0,
    carrier: 'OA',
    cabinList: [{ class: 'Y', price: 45, age: 'ADT' },
      { class: 'Y', price: 35, age: 'CNN' },
      { class: 'Y', price: 15, age: 'INF' },
    ],
  },
  {
    id: 1,
    segKey: 'qKubKKs4NzXQ',
    from: 'Athens',
    to: 'Frankfurt',
    legId: 0,
    carrier: 'A3',
    cabinList: [{ class: 'Y', price: 145, age: 'ADT' },
      { class: 'Y', price: 135, age: 'CNN' },
      { class: 'Y', price: 85, age: 'INF' },
      { class: 'W', price: 155, age: 'ADT' },
      { class: 'W', price: 135, age: 'CNN' },
      { class: 'C', price: 170, age: 'ADT' },
      { class: 'C', price: 3155, age: 'CNN' },
      { class: 'F', price: 180, age: 'ADT' },
      { class: 'F', price: 160, age: 'CNN' },
    ],
  },
  {
    id: 2,
    segKey: 'qKubKKffgfgfs4NzXQ',
    from: 'Frankfurt',
    to: 'Oslo',
    legId: 0,
    carrier: 'SK',
    cabinList: [{ class: 'Y', price: 145, age: 'ADT' },
      { class: 'Y', price: 135, age: 'CNN' },
      { class: 'Y', price: 85, age: 'INF' },
      { class: 'W', price: 155, age: 'ADT' },
      { class: 'W', price: 135, age: 'CNN' },
      { class: 'C', price: 170, age: 'ADT' },
      { class: 'C', price: 3155, age: 'CNN' },
      { class: 'F', price: 180, age: 'ADT' },
      { class: 'F', price: 160, age: 'CNN' },
    ],
  },
  {
    id: 3,
    segKey: 'fOnJlSTWRZDy',
    from: 'Oslo',
    to: 'Rhodes',
    legId: 1,
    carrier: 'LH',
    cabinList: [{ class: 'Y', price: 70, age: 'ADT' },
      { class: 'Y', price: 60, age: 'CNN' },
      { class: 'Y', price: 35, age: 'INF' },
      { class: 'W', price: 90, age: 'ADT' },
      { class: 'W', price: 70, age: 'CNN' },
    ],
  },
];

const trip = [
  {
    id: 0,
    legId: 0,
    from: {
      iata: 'RHO',
      city: 'Rhodes',
      name: 'Diagoras Arpt',
      flyTime: '08:00',
      flyTimeGMT: '08:00',
      day: 'Tues',
      date: '15/06/2018',
    },
    to: {
      iata: 'TRF',
      city: 'Oslo',
      name: 'Oslo Arpt',
      flyTime: '20:00',
      flyTimeGMT: '20:00',
      day: 'Tues',
      date: '15/06/2018',
    },
    stops: 2,
    duration: {
      h: 5,
      m: 35,
    },
    waiting: {
      total: 130,
      h: 2,
      m: 10,
    },
    segments: [
      {
        segId: 0,
        from: {
          iata: 'RHO',
          city: 'Rhodes',
          name: 'Diagoras Arpt',
          flyTime: '08:00',
          flyTimeGMT: '08:00',
          day: 'Tues',
          date: '15/06/2018',
        },
        to: {
          iata: 'ATH',
          city: 'Athens',
          name: 'Venizelos Arpt',
          flyTime: '08:50',
          flyTimeGMT: '08:50',
          day: 'Tues',
          date: '15/06/2018',
        },
        airline: 'OA,OlympicAir',
        img: {
          url: '/logos/OA.jpg',
          width: 100,
        },
        waitTime: { hours: 3, minutes: 0, total: 180 },
        durationTime: { hours: 0, minutes: 50 },
      },
      {
        segId: 1,
        from: {
          iata: 'ATH',
          city: 'Athens',
          name: 'Venizelos Arpt',
          flyTime: '15:00',
          flyTimeGMT: '15:00',
          day: 'Tues',
          date: '15/06/2018',
        },
        to: {
          iata: 'FRA',
          city: 'Frankfurt',
          name: 'Frankfurt Arpt',
          flyTime: '17:00',
          flyTimeGMT: '17:00',
          day: 'Tues',
          date: '15/06/2018',
        },
        airline: 'A3,Aegean',
        img: {
          url: '/logos/A3.png',
          width: 100,
        },
        waitTime: { hours: 0, minutes: 0, total: 0 },
        durationTime: { hours: 3, minutes: 0 },
      },
      {
        segId: 2,
        from: {
          iata: 'FRA',
          city: 'Frankfurt',
          name: 'Frankfurt Arpt',
          flyTime: '15:00',
          flyTimeGMT: '15:00',
          day: 'Tues',
          date: '15/06/2018',
        },
        to: {
          iata: 'TRF',
          city: 'Oslo',
          name: 'Oslo Arpt',
          flyTime: '17:00',
          flyTimeGMT: '17:00',
          day: 'Tues',
          date: '15/06/2018',
        },
        airline: 'SK,SAS',
        img: {
          url: '/logos/SK.png',
          width: 100,
        },
        waitTime: { hours: 0, minutes: 0, total: 0 },
        durationTime: { hours: 3, minutes: 0 },
      },
    ],
  },
  {
    id: 1,
    legId: 1,
    from: {
      iata: 'TRF',
      city: 'Oslo',
      name: 'Oslo Arpt',
      flyTime: '09:00',
      flyTimeGMT: '09:00',
      day: 'Tues',
      date: '22/06/2018',
    },
    to: {
      iata: 'RHO',
      city: 'Rhodes',
      name: 'Diagoras Arpt',
      flyTime: '13:00',
      flyTimeGMT: '14:00',
      day: 'Tues',
      date: '22/06/2018',
    },
    stops: 0,
    duration: {
      h: 2,
      m: 45,
    },
    waiting: {
      total: 0,
      h: 0,
      m: 0,
    },
    segments: [
      {
        segId: 3,
        from: {
          iata: 'TRF',
          city: 'Oslo',
          name: 'Oslo Arpt',
          flyTime: '09:00',
          flyTimeGMT: '09:00',
          day: 'Tues',
          date: '22/06/2018',
        },
        to: {
          iata: 'RHO',
          city: 'Rhodes',
          name: 'Diagoras Arpt',
          flyTime: '10:00',
          flyTimeGMT: '10:00',
          day: 'Tues',
          date: '15/06/2018',
        },
        airline: 'LH,Lufthansa',
        img: {
          url: '/logos/LH.jpg',
          width: 100,
        },
        waitTime: { hours: 0, minutes: 0, total: 0 },
        durationTime: { hours: 0, minutes: 0 },
      },
    ],

  },
];


export function airTripReducer(state = trip, action) {
  return state;
}


export function getLegsReducer(state = legs, action) {
  return state;
}


export function uniqueCarriersReducer(state = uniqueCarriers, action) {
  return state;
}
