import * as firebase from 'firebase';
import moment from 'moment';

const config = {
  apiKey: 'AIzaSyBYBMpHR5SKM5LIgotUWhTvjTkIkdGkT3w',
  authDomain: 'expensify-4542d.firebaseapp.com',
  databaseURL: 'https://expensify-4542d.firebaseio.com',
  projectId: 'expensify-4542d',
  storageBucket: 'expensify-4542d.appspot.com',
  messagingSenderId: '741819858984'
};
firebase.initializeApp(config);

const db = firebase.database();

export { firebase, db as default };
