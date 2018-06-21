import React from 'react';
import { shallow } from 'enzyme';
import { AddExpense } from '../../components/AddExpense';
import expenses from '../fixtures/expenses';

describe('Add expense page', () => {
  let startAddExpense;
  let history;
  let wrapper;

  beforeEach(() => {
    startAddExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpense startAddExpense={startAddExpense} history={history} />);
  });

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);

    expect(history.push).toHaveBeenLastCalledWith('/dashboard');
    expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1]);
  });
});
