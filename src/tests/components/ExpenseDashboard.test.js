import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboard from '../../components/ExpenseDashboard';

describe('Expense Dashboard', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<ExpenseDashboard />);

    expect(wrapper).toMatchSnapshot();
  });
});
