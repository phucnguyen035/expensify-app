import React from 'react';
import { AddExpense } from '../../components/AddExpense';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';

describe('Add expense page', () => {
  let addExpense, history, wrapper;

  beforeEach(() => {
    addExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpense addExpense={addExpense} history={history} />);
  });

  test('should render correctly', () => expect(wrapper).toMatchSnapshot());

  test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);

    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
  });
});