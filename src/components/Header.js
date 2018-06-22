import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { startLogout } from '../actions/auth';

const mapDispatchToProps = dispatch => ({
  logoutHandler: () => dispatch(startLogout())
});

export const Header = ({ logoutHandler }) => (
  <header className="header">
    <div className="container">
      <div className="header__content">
        <Link to="/dashboard" className="header__title">
          <h1>Expensify</h1>{' '}
        </Link>

        <button className="button button--link" onClick={logoutHandler}>
          Logout
        </button>
      </div>
    </div>
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
