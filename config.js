import * as firebase from 'firebase'
require('@firebase/firestore')

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyATpZA_anzczyXuzisWmiTvNmT21lQNicY",
  authDomain: "wili-app-cfb1b.firebaseapp.com",
  databaseURL: "https://wili-app-cfb1b.firebaseio.com",
  projectId: "wili-app-cfb1b",
  storageBucket: "wili-app-cfb1b.appspot.com",
  messagingSenderId: "56121034787",
  appId: "1:56121034787:web:24ab0df66241f3ef880996"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
