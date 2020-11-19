import firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyDMPfkel4EiOxXs2_xbwVHXMGYes3dq7RU",
  authDomain: "iep-stranka.firebaseapp.com",
  databaseURL: "https://iep-stranka.firebaseio.com/",
  storageBucket: "bucket.appspot.com"
})

const database = firebase.database();

export default database;