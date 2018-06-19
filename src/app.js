import 'normalize.css';
import 'react-dates/lib/css/_datepicker.css';
// import 'react-dates/initialize'; Remnant of new react-dates || Update when you have the time
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routes/AppRouter';
import configStore from './store/configStore';
import './styles/styles.scss';
<<<<<<< HEAD
import 'react-dates/lib/css/_datepicker.css';
import './database/firebase';
=======
>>>>>>> 55959bedd41c9868431d0f2e4fa56ab4a6c7ccc8

const store = configStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.querySelector('#appRoot'));
