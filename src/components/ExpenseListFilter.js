import React, { Component } from 'react';
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
      <div className="container">
        <div className="input-group">
          <div className="input-group__item">
            <input
              className="text-input"
              type="text"
              placeholder="Search by name"
              value={this.props.filters.text}
              onChange={e => this.onTextChange(e.target.value)}
            />
          </div>

          <div className="input-group__item">
            <select
              className="select"
              defaultValue="sortby"
              onChange={e => this.onSortChange(e.target.value)}
            >
              <option value="sortby" disabled>
                Sort by
              </option>
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>

          <div className="input-group__item">
            <DateRangePicker
              startDate={this.props.filters.startDate}
              endDate={this.props.filters.endDate}
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.focusedInput}
              onFocusChange={this.focusedInput}
              isOutsideRange={() => false}
              numberOfMonths={1}
              showClearDates
              displayFormat="DD/MM/YYYY"
            />
          </div>
        </div>
      </div>
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
