import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getVisibleExpenses from '../selectors/expenses';
import { ExpenseListItem } from './ExpenseListItem';
import ExpenseListFilter from './ExpenseListFilter';

const mapStateToProps = state => ({
  expenses: getVisibleExpenses(state.expenses, state.filters)
});

export const ExpenseList = props => (
  <Fragment>
    <ExpenseListFilter />

    {props.expenses.length === 0 ? (
      <p>No expenses</p>
    ) : (
      props.expenses.map(expense => <ExpenseListItem {...expense} key={expense.id} />)
    )}
  </Fragment>
);

ExpenseList.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.any)
};

ExpenseList.defaultProps = undefined;

export default connect(mapStateToProps)(ExpenseList);
