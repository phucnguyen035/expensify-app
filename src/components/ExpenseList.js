import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import getVisibleExpenses from '../selectors/expenses';
import ExpenseListItem from './ExpenseListItem';
import ExpenseListFilter from './ExpenseListFilter';

const mapStateToProps = state => ({
  expenses: getVisibleExpenses(state.expenses, state.filters)
});

export const ExpenseList = props => {
  return (
    <Fragment>
      <ExpenseListFilter />

      {props.expenses.length === 0 ? (
        <p>No expenses</p>
      ) : (
        props.expenses.map(expense => (
          <ExpenseListItem {...expense} key={expense.id} />
        ))
      )}
    </Fragment>
  );
};

export default connect(mapStateToProps)(ExpenseList);
