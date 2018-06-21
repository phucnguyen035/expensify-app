import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid
});

export const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={props =>
      (isAuthenticated ? (
        <Fragment>
          <Header />
          <Component {...props} />
        </Fragment>
      ) : (
        <Redirect to="/" />
      ))
    }
  />
);

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(PrivateRoute);
