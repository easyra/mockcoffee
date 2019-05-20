import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDMJO0nixP1iiqdodrrkAyjXYzULrPx2NM',
  authDomain: 'mockcoffee-1557995671684.firebaseapp.com',
  databaseURL: 'https://mockcoffee-1557995671684.firebaseio.com',
  projectId: 'mockcoffee-1557995671684',
  storageBucket: 'mockcoffee-1557995671684.appspot.com',
  messagingSenderId: '227941824086',
  appId: '1:227941824086:web:faa912a6eb6fdb2f'
};
firebase.initializeApp(firebaseConfig);

export const database = firebase.database();
export const auth = firebase.auth();
export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const TwitterProvider = new firebase.auth.TwitterAuthProvider();
export const firestore = firebase.firestore();
export const arrayUnion = firebase.firestore.FieldValue.arrayUnion;
export const arrayRemove = firebase.firestore.FieldValue.arrayRemove;
// firebase.auth.AuthCredential
