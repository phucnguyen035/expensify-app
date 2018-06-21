import db from '../database/firebase';

// ADD_EXPENSE
const addExpense = newExpense => ({
  type: 'ADD_EXPENSE',
  expense: newExpense
});

const startAddExpense = (expenseData = {}) => (dispatch) => {
  const { amount = 0, createdAt = 0, desc = '', note = '' } = expenseData;
  const newExpense = { amount, createdAt, desc, note };

  return db
    .ref('expenses')
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
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

export { addExpense, startAddExpense, removeExpense, editExpense };
