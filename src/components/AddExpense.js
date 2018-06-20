import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

const mapDispatchToProps = dispatch => ({
  startAddExpense: expense => dispatch(startAddExpense(expense))
});

export class AddExpense extends Component {
  onSubmit = (expense) => {
    this.props.startAddExpense(expense);
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <h1>This is from my add expense component</h1>

        <ExpenseForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

AddExpense.propTypes = {
  startAddExpense: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired
};

AddExpense.defaultProps = undefined;

export default connect(
  undefined,
  mapDispatchToProps
)(AddExpense);
