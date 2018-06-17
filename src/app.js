import React from 'react';
import ReactDOM from 'react-dom';
import 'react-dates/initialize';
import { Provider } from 'react-redux';
import AppRouter from './routes/AppRouter';
import configStore from './store/configStore';
import 'normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.querySelector('#appRoot'));
