import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

const mapDispatchToProps = dispatch => ({
  loginHandler: () => dispatch(startLogin())
});

export const LoginPage = ({ loginHandler }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expensify</h1>
      <p>{"It's"} time to get your expenses under control</p>

      <button onClick={loginHandler} className="button">
        Login with Goggle
      </button>
    </div>
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
