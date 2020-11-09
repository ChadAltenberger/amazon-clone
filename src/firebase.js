import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyB7fnWLvuQhRN_Pc26jgM20yjn-PsrswJA',
  authDomain: 'clone-302fb.firebaseapp.com',
  databaseURL: 'https://clone-302fb.firebaseio.com',
  projectId: 'clone-302fb',
  storageBucket: 'clone-302fb.appspot.com',
  messagingSenderId: '452393513253',
  appId: '1:452393513253:web:1ec0c16e47a5d6b2deaacc'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
