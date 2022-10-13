import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAuRLKWMDcXghTBUoq-l2Tyz9v4rPk3AUA",
    authDomain: "clone-d2aeb.firebaseapp.com",
    databaseURL: "https://clone-d2aeb.firebaseio.com",
    projectId: "clone-d2aeb",
    storageBucket: "clone-d2aeb.appspot.com",
    messagingSenderId: "209003837537",
    appId: "1:209003837537:web:28b347ad7c196b31b65220",
    measurementId: "G-WXVL0EJLX1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };