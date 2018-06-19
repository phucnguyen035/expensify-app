import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import {
  setTextFilters,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from '../actions/filters';

const mapStateToProps = state => ({
  filters: state.filters
});
const mapDispatchtoProps = dispatch => ({
  setTextFilters: text => dispatch(setTextFilters(text)),
  sortByAmount: () => dispatch(sortByAmount()),
  sortByDate: () => dispatch(sortByDate()),
  setStartDate: startDate => dispatch(setStartDate(startDate)),
  setEndDate: endDate => dispatch(setEndDate(endDate))
});

export class ExpenseListFilter extends Component {
  state = {
    focusedInput: null
  };

  // Sort function
  onSortChange = (sortValue) => {
    if (sortValue === 'date') {
      this.props.sortByDate();
    } else if (sortValue === 'amount') {
      this.props.sortByAmount();
    }
  };

  onTextChange = (text) => {
    this.props.setTextFilters(text);
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  focusedInput = (focusedInput) => {
    this.setState(() => ({ focusedInput }));
  };

  render() {
    return (
      <Fragment>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={e => this.onTextChange(e.target.value)}
        />
        <select value={this.props.filters.sortBy} onChange={e => this.onSortChange(e.target.value)}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>

        <DateRangePicker
          startDate={this.props.filters.startDate}
          // startDateId="startDate_filters"
          endDate={this.props.filters.endDate}
          // endDateId="endDate_filters"
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.focusedInput}
          onFocusChange={this.focusedInput}
          isOutsideRange={() => false}
          numberOfMonths={1}
          showClearDates
          displayFormat="DD/MM/YYYY"
        />
      </Fragment>
    );
  }
}

ExpenseListFilter.propTypes = {
  filters: PropTypes.objectOf(PropTypes.any),
  sortByDate: PropTypes.func,
  sortByAmount: PropTypes.func,
  setTextFilters: PropTypes.func,
  setStartDate: PropTypes.func,
  setEndDate: PropTypes.func
};

ExpenseListFilter.defaultProps = undefined;

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(ExpenseListFilter);
