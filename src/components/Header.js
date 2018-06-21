import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../actions/auth';

const mapDispatchToProps = dispatch => ({
  logoutHandler: () => dispatch(startLogout())
});

export const Header = ({ logoutHandler }) => (
  <header>
    <h1>Expensify</h1>
    <NavLink exact activeClassName="is-active" to="/dashboard">
      Dashboard
    </NavLink>

    <NavLink activeClassName="is-active" to="/create">
      Create Expense
    </NavLink>

    <button onClick={logoutHandler}>Logout</button>
  </header>
);

Header.propTypes = {
  logoutHandler: PropTypes.func
};
Header.defaultProps = undefined;

export default connect(
  undefined,
  mapDispatchToProps
)(Header);
