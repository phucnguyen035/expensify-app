import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getVisibleExpenses from '../selectors/expenses';
import { ExpenseListItem } from './ExpenseListItem';

const mapStateToProps = state => ({
  expenses: getVisibleExpenses(state.expenses, state.filters)
});

export const ExpenseList = props => (
  <div className="container">
    <div className="list-header">
      <div className="show-for-mobile">Expenses</div>
      <div className="show-for-desktop">Expense</div>
      <div className="show-for-desktop">Amount</div>
    </div>

    <div className="list-body">
      {props.expenses.length === 0 ? (
        <div className="list-item list-item--no-data">
          <span>No expenses</span>
        </div>
      ) : (
        props.expenses.map(expense => <ExpenseListItem {...expense} key={expense.id} />)
      )}
    </div>
  </div>
);

ExpenseList.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.any)
};

ExpenseList.defaultProps = undefined;

export default connect(mapStateToProps)(ExpenseList);
