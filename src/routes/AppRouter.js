import React, { Fragment } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Header from '../components/Header';
import ExpenseDashboard from '../components/ExpenseDashboard';
import NotFoundPage from '../components/NotFoundPage';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import LoginPage from '../components/LoginPage';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/dashboard" component={ExpenseDashboard} />
        <Route path="/create" component={AddExpense} />
        <Route path="/edit/:id" component={EditExpense} />
        <Route path="/login" component={LoginPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Fragment>
  </Router>
);

export default AppRouter;
