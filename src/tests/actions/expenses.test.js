import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import db from '../../database/firebase';
import {
  addExpense,
  startAddExpense,
  removeExpense,
  editExpense,
  setExpenses,
  startSetExpenses,
  startRemoveExpense,
  startEditExpense
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';

const uid = 'fakeUID';
const defaultAuthState = { auth: { uid } };
const mockStore = configureStore([thunk]);

beforeEach((done) => {
  const expensesData = {};

  expenses.forEach(({ id, desc, amount, note, createdAt }) => {
    expensesData[id] = { desc, amount, note, createdAt };
  });

  db.ref(`users/${uid}/expenses`)
    .set(expensesData)
    .then(() => done());
});

describe('Expense Action', () => {
  test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });

    expect(action).toEqual({
      type: 'REMOVE_EXPENSE',
      id: '123abc'
    });
  });

  test('should remove expense from database and store', (done) => {
    const store = mockStore(defaultAuthState);
    const { id } = expenses[1];

    store
      .dispatch(startRemoveExpense({ id }))
      .then(() => {
        const actions = store.getActions();

        expect(actions[0]).toEqual({
          type: 'REMOVE_EXPENSE',
          id
        });

        return db.ref(`users/${uid}/expenses/${id}`).once('value');
      })
      .then((snapshot) => {
        expect(snapshot.val()).toBeNull();
        done();
      });
  });

  test('should setup edit expense action object', () => {
    const action = editExpense('123abc', { note: 'updated note' });

    expect(action).toEqual({
      type: 'EDIT_EXPENSE',
      id: '123abc',
      updates: { note: 'updated note' }
    });
  });

  test('should edit expense from database and store', (done) => {
    const store = mockStore(defaultAuthState);
    const { id } = expenses[2];
    const updates = { amount: 500000 };

    store
      .dispatch(startEditExpense(id, updates))
      .then(() => {
        const actions = store.getActions();

        expect(actions[0]).toEqual({
          type: 'EDIT_EXPENSE',
          id,
          updates
        });

        return db.ref(`users/${uid}/expenses/${id}`).once('value');
      })
      .then((snapshot) => {
        expect(snapshot.val().amount).toBe(updates.amount);
        done();
      });
  });

  test('should setup add expense action object with provided value', () => {
    const action = addExpense(expenses[2]);

    expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense: expenses[2]
    });
  });

  test('should add expense to database and store', (done) => {
    const store = mockStore(defaultAuthState);
    const expenseData = {
      amount: 50,
      createdAt: 100,
      desc: 'Test',
      note: 'Test note'
    };

    store
      .dispatch(startAddExpense(expenseData))
      .then(() => {
        const actions = store.getActions();

        expect(actions[0]).toEqual({
          type: 'ADD_EXPENSE',
          expense: {
            id: expect.any(String),
            ...expenseData
          }
        });

        return db.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
      })
      .then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
      });
  });

  test('should add expense with default values to database and store', (done) => {
    const store = mockStore(defaultAuthState);
    const expenseDefaults = {
      amount: 0,
      createdAt: 0,
      desc: '',
      note: ''
    };

    store
      .dispatch(startAddExpense())
      .then(() => {
        const actions = store.getActions();

        expect(actions[0]).toEqual({
          type: 'ADD_EXPENSE',
          expense: {
            id: expect.any(String),
            ...expenseDefaults
          }
        });

        return db.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
      })
      .then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefaults);
        done();
      });
  });

  test('should setup set expenses action object with data', () => {
    const action = setExpenses(expenses);

    expect(action).toEqual({
      type: 'SET_EXPENSES',
      expenses
    });
  });

  test('should fetch expenses from database', (done) => {
    const store = mockStore(defaultAuthState);

    store.dispatch(startSetExpenses()).then(() => {
      const actions = store.getActions();

      expect(actions[0]).toEqual({
        type: 'SET_EXPENSES',
        expenses
      });
      done();
    });
  });
});
