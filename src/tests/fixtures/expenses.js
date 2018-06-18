import moment from 'moment';

export default [
  {
    id: '1',
    desc: 'test 1',
    amount: 500,
    note: 'test 1 note',
    createdAt: 0
  },
  {
    id: '2',
    desc: 'test 2',
    amount: 1000,
    note: 'test 2 note',
    createdAt: moment(0)
      .subtract(4, 'days')
      .valueOf()
  },
  {
    id: '3',
    desc: 'test 3',
    amount: 200,
    note: 'test 3 note',
    createdAt: moment(0)
      .add(4, 'days')
      .valueOf()
  }
];
