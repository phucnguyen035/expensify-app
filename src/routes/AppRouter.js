import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import ExpenseDashboard from '../components/ExpenseDashboard';
import NotFoundPage from '../components/NotFoundPage';
import { AddExpense } from '../components/AddExpense';
import { EditExpense } from '../components/EditExpense';

const AppRouter = () => (
  <Router>
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={ExpenseDashboard} />
        <Route path="/create" component={AddExpense} />
        <Route path="/edit/:id" component={EditExpense} />
        <Route component={NotFoundPage} />
      </Switch>
    </React.Fragment>
  </Router>
);

export default AppRouter;
