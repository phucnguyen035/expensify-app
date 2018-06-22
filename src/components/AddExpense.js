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
    this.props.history.push('/dashboard');
  };

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="container">
            <h2 className="page-header__title">Add expense</h2>
          </div>
        </div>

        <div className="container">
          <button className="button button--back" onClick={this.props.history.goBack}>
            Back
          </button>
          <ExpenseForm onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  }
}

AddExpense.propTypes = {
  startAddExpense: PropTypes.func,
  history: PropTypes.shape({
    goBack: PropTypes.func,
    push: PropTypes.func
  }).isRequired
};

AddExpense.defaultProps = undefined;

export default connect(
  undefined,
  mapDispatchToProps
)(AddExpense);
