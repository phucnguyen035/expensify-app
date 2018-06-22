import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id)
});
const mapDispatchToProps = dispatch => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: id => dispatch(startRemoveExpense(id))
});

export class EditExpense extends Component {
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/dashboard');
  };
  onClick = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push('/dashboard');
  };

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="container">
            <h2 className="page-header__title">Edit Expense</h2>
          </div>
        </div>

        <div className="container">
          <button className="button button--back" onClick={this.props.history.goBack}>
            Back
          </button>

          <ExpenseForm {...this.props.expense} onSubmit={this.onSubmit} />

          <button className="button button--secondary" onClick={this.onClick}>
            Remove Expense
          </button>
        </div>
      </div>
    );
  }
}

EditExpense.propTypes = {
  startEditExpense: PropTypes.func.isRequired,
  startRemoveExpense: PropTypes.func.isRequired,

  history: PropTypes.shape({
    goBack: PropTypes.func,
    push: PropTypes.func
  }).isRequired,

  expense: PropTypes.objectOf(PropTypes.any).isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpense);
