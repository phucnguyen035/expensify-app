import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      desc: props.desc ? props.desc : '',
      note: props.note ? props.note : '',
      amount: props.amount ? (props.amount / 100).toString() : '',
      createdAt: props.createdAt ? moment(props.createdAt) : moment(),
      focused: false,
      error: ''
    };
  }

  onDescChange = (e) => {
    const desc = e.target.value;

    this.setState(() => ({ desc }));
  };

  onNoteChange = (e) => {
    const note = e.target.value;

    this.setState(() => ({ note }));
  };

  onAmountChange = (e) => {
    const amount = e.target.value;
    // Match amount with number only with 2 decimal places
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ focused }));
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    if (!this.state.desc || !this.state.amount) {
      this.setState(() => ({
        error: 'Please provide description and amount.'
      }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        desc: this.state.desc,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };

  render() {
    return (
      <Fragment>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            value={this.state.desc}
            placeholder="Description"
            onChange={this.onDescChange}
          />

          <input
            type="text"
            value={this.state.amount}
            placeholder="Amount"
            onChange={this.onAmountChange}
          />

          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.focused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
            displayFormat="D/M/YYYY"
          />

          <textarea
            value={this.state.note}
            onChange={this.onNoteChange}
            placeholder="Add a note for this expense (optional)"
          />

          <button>Submit</button>
        </form>
      </Fragment>
    );
  }
}

ExpenseForm.propTypes = {
  desc: PropTypes.string,
  amount: PropTypes.number,
  note: PropTypes.string,
  onSubmit: PropTypes.func,
  createdAt: PropTypes.number
};

ExpenseForm.defaultProps = undefined;
