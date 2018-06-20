import uuidv4 from 'uuid/v4';
import db from '../database/firebase';

// ADD_EXPENSE
const addExpense = newExpense => ({
  type: 'ADD_EXPENSE',
  expense: newExpense
});

const startAddExpense = (expenseData = {}) => (dispatch) => {
  const { amount, createdAt, desc, note } = expenseData;
  const newExpense = { amount, createdAt, desc, note };

  db.ref('expenses')
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
