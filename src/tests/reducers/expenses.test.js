import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

// Test default expenses values
test('should set up default expenses values', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });

  expect(state).toEqual([]);
});

// Test add expense
test('should add expense', () => {
  const expense = {
    id: '4',
    desc: 'test 4',
    amount: 4,
    note: 'test 4 note',
    createdAt: 0
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual([...expenses, expense]);
});

// Test remove expense
test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should NOT remove expense if no id found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: -1
  };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses);
});

// Test edit expense
test('should edit expense by id', () => {
  const updates = {
    id: expenses[2].id,
    desc: 'New test 3',
    amount: 3,
    note: 'test 3 note',
    createdAt: 100
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: updates.id,
    updates
  };

  const state = expensesReducer(expenses, action);

  expect(state).toEqual([expenses[0], expenses[1], updates]);
});

test('should NOT edit expense if id not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: -1
  };

  const state = expensesReducer(expenses, action);

  expect(state).toEqual([...expenses]);
});
