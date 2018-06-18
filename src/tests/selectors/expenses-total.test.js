import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

// TESTS
describe('Expense total', () => {
  test('should return 0 if no expense', () => {
    const total = getExpensesTotal([]);

    expect(total).toBe(0);
  });

  test('should correctly add up single expense', () => {
    const total = getExpensesTotal([expenses[1]]);

    expect(total).toBe(1000);
  });

  test('should correctly add up multiple expenses', () => {
    const total = getExpensesTotal(expenses);

    expect(total).toBe(1700);
  });
});
