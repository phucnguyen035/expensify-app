import React from 'react';
import { shallow } from 'enzyme';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

describe('Expense form ', () => {
  test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);

    expect(wrapper).toMatchSnapshot();
  });

  test('should render ExpenseForm with expense data', () => {
    const wrapper = shallow(<ExpenseForm {...expenses[1]} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();

    wrapper.find('form').simulate('submit', {
      preventDefault() {}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
  });

  test('should set desc on input change', () => {
    const value = 'new description';
    const wrapper = shallow(<ExpenseForm />);

    wrapper
      .find('input')
      .at(0)
      .simulate('change', {
        target: { value }
      });
    expect(wrapper.state('desc')).toBe(value);
  });

  test('should set note on textarea change', () => {
    const value = 'new note goes here';
    const wrapper = shallow(<ExpenseForm />);

    wrapper.find('textarea').simulate('change', {
      target: { value }
    });
    expect(wrapper.state('note')).toBe(value);
  });

  test('should set amount if valid input change', () => {
    const value = '31.54';
    const wrapper = shallow(<ExpenseForm />);

    wrapper
      .find('input')
      .at(1)
      .simulate('change', {
        target: { value }
      });
    expect(wrapper.state('amount')).toBe(value);
  });

  test('should NOT set amount if invalid input change', () => {
    const value = '71.322';
    const wrapper = shallow(<ExpenseForm />);

    wrapper
      .find('input')
      .at(1)
      .simulate('change', {
        target: { value }
      });
    expect(wrapper.state('amount')).toBe('');
  });

  test('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm {...expenses[0]} onSubmit={onSubmitSpy} />);

    wrapper.find('form').simulate('submit', {
      preventDefault() {}
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
      desc: expenses[0].desc,
      amount: expenses[0].amount,
      note: expenses[0].note,
      createdAt: expenses[0].createdAt
    });
  });

  test('should set new date onDateChange', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);

    wrapper.find(SingleDatePicker).prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
  });

  test('should set focus on change', () => {
    const wrapper = shallow(<ExpenseForm />);

    wrapper.find(SingleDatePicker).prop('onFocusChange')({ focused: true });
    expect(wrapper.state('focused')).toBe(true);
  });
});
