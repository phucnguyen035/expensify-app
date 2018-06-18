import React from 'react';
import { connect } from 'react-redux';
import getExpensesTotal from '../selectors/expenses-total';
import getVisibleExpenses from '../selectors/expenses';
import numeral from 'numeral';

const mapStatetoProps = state => {
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
    <h2>
      Showing {expenseCount} {expenseWord}
      {expenseCount !== 0 && <span>totaling {formattedExpensesTotal}</span>}
    </h2>
  );
};

export default connect(mapStatetoProps)(ExpensesSummary);
