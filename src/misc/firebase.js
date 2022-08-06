/* eslint-disable no-unused-vars */
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyDuYfZkRBNc85TVeS3xXkk5FEcsyixSDws',
  authDomain: 'chat-web-app-c1b8b.firebaseapp.com',
  databaseURL: 'https://chat-web-app-c1b8b-default-rtdb.firebaseio.com',
  projectId: 'chat-web-app-c1b8b',
  storageBucket: 'chat-web-app-c1b8b.appspot.com',
  messagingSenderId: '595463344165',
  appId: '1:595463344165:web:ec88d053238cf1f641afcc',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
