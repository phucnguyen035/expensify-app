import React, { Fragment } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboard from '../components/ExpenseDashboard';
import NotFoundPage from '../components/NotFoundPage';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <Fragment>
      <Switch>
        <PublicRoute exact path="/" component={LoginPage} />
        <PrivateRoute path="/dashboard" component={ExpenseDashboard} />
        <PrivateRoute path="/create" component={AddExpense} />
        <PrivateRoute path="/edit/:id" component={EditExpense} />
        <Route component={NotFoundPage} />
      </Switch>
    </Fragment>
  </Router>
);

export default AppRouter;
