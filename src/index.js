import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const firebase = require('firebase');
require('firebase/firestore');

// Initialize Firebase
firebase.initializeApp({
  apiKey: '<api-key>',
  authDomain: '<auth-domain>',
  databaseURL: '<database-url>',
  projectId: '<project-id>',
  storageBucket: '<storage-bucket>',
  messagingSenderId: '<messaging-sender-id>',
  appId: '<app-id>'
});

ReactDOM.render(<App />, document.getElementById('evernote-container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
