import {
  setTextFilters,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from '../../actions/filters';
import moment from 'moment';

test('should return text filter action object with value', () => {
  const text = 'abc';
  const action = setTextFilters(text);

  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  });
});

test('should return text filter action object with NO value', () => {
  const action = setTextFilters();

  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('should return sort by amount action object', () => {
  const action = sortByAmount();

  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});

test('should return sort by date action object', () => {
  const action = sortByDate();

  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  });
});

test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));

  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('should generate set end date action object', () => {
  const action = setEndDate(moment(100));

  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(100)
  });
});
