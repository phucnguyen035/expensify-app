import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

const mapDispatchToProps = dispatch => ({ addExpense: expense => dispatch(addExpense(expense)) });

export class AddExpense extends Component {
  onSubmit = (expense) => {
    this.props.addExpense(expense);
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
  addExpense: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired
};

export default connect(
  undefined,
  mapDispatchToProps
)(AddExpense);
