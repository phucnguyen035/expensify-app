import db from '../database/firebase';

// ADD_EXPENSE
const addExpense = newExpense => ({
  type: 'ADD_EXPENSE',
  expense: newExpense
});

// Start ADD_EXPENSE
const startAddExpense = (expenseData = {}) => (dispatch, getState) => {
  const { uid } = getState().auth;
  const { amount = 0, createdAt = 0, desc = '', note = '' } = expenseData;
  const newExpense = { amount, createdAt, desc, note };

  return db
    .ref(`users/${uid}/expenses`)
    .push(newExpense)
    .then((ref) => {
      dispatch(
        addExpense({
          id: ref.key,
          ...newExpense
        })
      );
    });
};

// REMOVE_EXPENSE
const removeExpense = ({ id }) => ({
  type: 'REMOVE_EXPENSE',
  id
});

const startRemoveExpense = ({ id } = {}) => (dispatch, getState) => {
  const { uid } = getState().auth;

  return db
    .ref(`users/${uid}/expenses/${id}`)
    .remove()
    .then(() => {
      dispatch(removeExpense({ id }));
    });
};

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

const startEditExpense = (id, updates) => (dispatch, getState) => {
  const { uid } = getState().auth;

  return db
    .ref(`users/${uid}/expenses/${id}`)
    .update(updates)
    .then(() => {
      dispatch(editExpense(id, updates));
    });
};

// SET_EXPENSES
const setExpenses = expenses => ({
  type: 'SET_EXPENSES',
  expenses
});

// Start SET_EXPENSES
const startSetExpenses = () => (dispatch, getState) => {
  const { uid } = getState().auth;
  const expenses = [];

  return db
    .ref(`users/${uid}/expenses`)
    .once('value')
    .then(snapshot =>
      snapshot.forEach((child) => {
        expenses.push({
          id: child.key,
          ...child.val()
        });
      }))
    .then(dispatch(setExpenses(expenses)));
};

export {
  addExpense,
  startAddExpense,
  removeExpense,
  startRemoveExpense,
  editExpense,
  startEditExpense,
  setExpenses,
  startSetExpenses
};
