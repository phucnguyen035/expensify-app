import 'normalize.css';
import 'react-dates/lib/css/_datepicker.css';
// import 'react-dates/initialize'; Remnant of new react-dates || Update when you have the time
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routes/AppRouter';
import configStore from './store/configStore';
import './styles/styles.scss';

const store = configStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.querySelector('#appRoot'));
