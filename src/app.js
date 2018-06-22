import 'normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routes/AppRouter';
import configStore from './store/configStore';
import { login, logout } from './actions/auth';
import { startSetExpenses } from './actions/expenses';
import './styles/styles.scss';
import { firebase } from './database/firebase';
import LoadingPage from './components/LoadingPage';

const store = configStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
const renderApp = () => {
  let hasRendered = false;
  if (!hasRendered) {
    ReactDOM.render(jsx, document.querySelector('#appRoot'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.querySelector('#appRoot'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    // Only set expenses when logged in
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      // redirect to dashboard after loging in
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else {
    // Logout, render app and push visitor to login page
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});
