// getExpensesTotal
export default (expenses) => {
  const expensesAmount = expenses.map(expense => expense.amount);
  const reducer = (sum, value) => sum + value;

  return expensesAmount.reduce(reducer, 0);
};
