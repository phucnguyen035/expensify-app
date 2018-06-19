import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

describe('Expenses Summary', () => {
  test('should render correctly with no expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={0} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('should render correctly with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={2000} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('should render correctly with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={5} expensesTotal={10000000} />);

    expect(wrapper).toMatchSnapshot();
  });
});
