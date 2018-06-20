import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { ExpenseListItem } from '../../components/ExpenseListItem';

describe('Expense item', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);

    expect(wrapper).toMatchSnapshot();
  });
});
