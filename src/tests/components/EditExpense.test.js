import React from 'react';
import { EditExpense } from '../../components/EditExpense';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';

describe('Edit expense page', () => {
  let wrapper, history, editExpense, removeExpense;

  beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
      <EditExpense
        expense={expenses[0]}
        history={history}
        editExpense={editExpense}
        removeExpense={removeExpense}
      />
    );
  });

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should handle editExpense onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);

    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenCalledWith(expenses[0].id, expenses[0]);
  });

  test('should handle removeExpense onClick', () => {
    wrapper.find('button').simulate('click');

    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({ id: expenses[0].id });
  });
});
