import 'normalize.css';
import 'react-dates/lib/css/_datepicker.css';
// import 'react-dates/initialize'; Remnant of new react-dates || Update when you have the time
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routes/AppRouter';
import configStore from './store/configStore';
import { startSetExpenses } from './actions/expenses';
import './styles/styles.scss';
import './database/firebase';

const store = configStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.querySelector('#appRoot'));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.querySelector('#appRoot'));
});
