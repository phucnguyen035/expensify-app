import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id)
});
const mapDispatchToProps = dispatch => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: id => dispatch(removeExpense(id))
});

export class EditExpense extends Component {
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };
  onClick = () => {
    this.props.removeExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <ExpenseForm {...this.props.expense} onSubmit={this.onSubmit} />
        <button onClick={this.onClick}>Remove</button>
      </div>
    );
  }
}

EditExpense.propTypes = {
  editExpense: PropTypes.func.isRequired,
  removeExpense: PropTypes.func.isRequired,

  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired,

  expense: PropTypes.shape({
    id: PropTypes.string
  }).isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpense);
