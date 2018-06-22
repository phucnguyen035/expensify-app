import React from 'react';
import ExpenseList from './ExpenseList';
import ExpensesSummary from './ExpensesSummary';
import ExpenseListFilter from './ExpenseListFilter';

const ExpenseDashboard = () => (
  <div>
    <ExpensesSummary />
    <ExpenseListFilter />
    <ExpenseList />
  </div>
);

export default ExpenseDashboard;
