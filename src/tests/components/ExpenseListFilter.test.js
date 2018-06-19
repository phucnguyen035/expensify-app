import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import { DateRangePicker } from 'react-dates';
import { ExpenseListFilter } from '../../components/ExpenseListFilter';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilters;
let sortByDate;
let sortByAmount;
let setStartDate;
let setEndDate;
let wrapper;

beforeEach(() => {
  setTextFilters = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();

  wrapper = shallow(<ExpenseListFilter
      filters={filters}
      setTextFilters={setTextFilters}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
  />);
});

describe('Expense List Filter', () => {
  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render correctly with altFilters', () => {
    wrapper.setProps({
      filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
  });

  test('should handle text change', () => {
    const value = 'new text filter';
    wrapper
      .find('input')
      .at(0)
      .simulate('change', {
        target: { value }
      });

    expect(setTextFilters).toHaveBeenLastCalledWith(value);
  });

  test('should sort by date', () => {
    wrapper.setProps({
      filters: altFilters
    });

    wrapper.find('select').simulate('change', {
      target: { value: 'date' }
    });

    expect(sortByDate).toHaveBeenCalled();
  });

  test('should sort by amount', () => {
    wrapper.find('select').simulate('change', {
      target: { value: 'amount' }
    });

    expect(sortByAmount).toHaveBeenCalled();
  });

  test('should handle date changes', () => {
    const startDate = moment().subtract(1, 'week');
    const endDate = moment();
    wrapper.find(DateRangePicker).prop('onDatesChange')({ startDate, endDate });

    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
  });

  test('should handle date focus change', () => {
    wrapper.find(DateRangePicker).prop('onFocusChange')('endDate');

    expect(wrapper.state('focusedInput')).toBe('endDate');
  });
});
