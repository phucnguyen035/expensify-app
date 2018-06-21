import React from 'react';
import { shallow } from 'enzyme';
import { EditExpense } from '../../components/EditExpense';
import expenses from '../fixtures/expenses';

describe('Edit expense page', () => {
  let wrapper;
  let history;
  let startEditExpense;
  let startRemoveExpense;

  beforeEach(() => {
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
      <EditExpense
        expense={expenses[0]}
        history={history}
        startEditExpense={startEditExpense}
        startRemoveExpense={startRemoveExpense}
      />
    );
  });

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should handle editExpense onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);

    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpense).toHaveBeenCalledWith(expenses[0].id, expenses[0]);
  });

  test('should handle removeExpense onClick', () => {
    wrapper.find('button').simulate('click');

    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expenses[0].id });
  });
});
