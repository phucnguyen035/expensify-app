import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

const mapDispatchToProps = dispatch => ({
  loginHandler: () => dispatch(startLogin())
});

export const LoginPage = ({ loginHandler }) => (
  <div>
    <h3>Login</h3>
    <button onClick={loginHandler}>Login</button>
  </div>
);

LoginPage.propTypes = {
  loginHandler: PropTypes.func
};
LoginPage.defaultProps = undefined;

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
