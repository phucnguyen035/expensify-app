import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import numeral from 'numeral';
import { Link } from 'react-router-dom';
import getExpensesTotal from '../selectors/expenses-total';
import getVisibleExpenses from '../selectors/expenses';

const mapStatetoProps = (state) => {
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: getExpensesTotal(visibleExpenses)
  };
};

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
  const expenseWord = expenseCount > 1 ? 'expenses ' : 'expense ';

  return (
    <div className="page-header">
      <div className="container">
        <h2 className="page-header__title">
          Showing <span>{expenseCount}</span> {expenseWord}
          {expenseCount !== 0 && <span>totaling {formattedExpensesTotal}</span>}
        </h2>

        <div className="page-header__actions">
          <Link to="/create" className="button">
            Add Expense
          </Link>
        </div>
      </div>
    </div>
  );
};

ExpensesSummary.propTypes = {
  expenseCount: PropTypes.number,
  expensesTotal: PropTypes.number
};

ExpensesSummary.defaultProps = {
  expenseCount: undefined,
  expensesTotal: undefined
};

export default connect(mapStatetoProps)(ExpensesSummary);
