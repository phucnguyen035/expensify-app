import moment from 'moment';
// Visible expenses
export default (expenses, { text, startDate, endDate, sortBy }) =>
  expenses
    .filter((expense) => {
      const startDateMatch = startDate ? startDate.isSameOrBefore(moment(expense.createdAt)) : true;
      const endDateMatch = endDate ? endDate.isSameOrAfter(moment(expense.createdAt)) : true;
      const textMatch = expense.desc.toLowerCase().includes(text.toLowerCase());

      return textMatch && startDateMatch && endDateMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1;
      }
      // Default return latest item
      return a.createdAt < b.createdAt ? 1 : -1;
    });
