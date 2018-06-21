import { firebase, googleAuthProvider } from '../database/firebase';

const login = uid => ({
  type: 'LOGIN',
  uid
});
const startLogin = () => () => firebase.auth().signInWithPopup(googleAuthProvider);

const logout = () => ({
  type: 'LOGOUT'
});
const startLogout = () => () => firebase.auth().signOut();

export { login, startLogin, logout, startLogout };
