import React from 'react';
import { ExpenseList } from './ExpenseList';
import { ExpensesSummary } from './ExpensesSummary';

const ExpenseDashboard = () => (
  <div>
    <ExpensesSummary />
    <ExpenseList />
  </div>
);

export default ExpenseDashboard;
