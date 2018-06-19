import moment from 'moment';
import filtersReducer from '../../reducers/filters';

// Test default filter values
test('should set up default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });

  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

// Test sort by amount
test('should set sort by to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });

  expect(state.sortBy).toBe('amount');
});

// Test sort by date
test('should set sort by to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  };
  const action = { type: 'SORT_BY_DATE' };
  const state = filtersReducer(currentState, action);

  expect(state.sortBy).toBe('date');
});

// Test set text filters
test('should set text filters', () => {
  const text = 'abc';
  const state = filtersReducer(undefined, {
    type: 'SET_TEXT_FILTER',
    text
  });

  expect(state.text).toBe(text);
});

// Test set start date filters
test('should set start date filters', () => {
  const startDate = moment();
  const state = filtersReducer(undefined, {
    type: 'SET_START_DATE',
    startDate
  });

  expect(state.startDate).toBe(startDate);
});

// Test set end date filters
test('should set end date filters', () => {
  const endDate = moment();
  const state = filtersReducer(undefined, {
    type: 'SET_END_DATE',
    endDate
  });

  expect(state.endDate).toBe(endDate);
});
