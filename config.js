import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyC2_qWaKRCWI-aa85F9JFXyry5rCj19HyM",
  authDomain: "barter-system-app-d223b.firebaseapp.com",
  projectId: "barter-system-app-d223b",
  storageBucket: "barter-system-app-d223b.appspot.com",
  messagingSenderId: "360609485736",
  appId: "1:360609485736:web:254ed405d259c4a2d8039d",
  measurementId: "G-EF6T92VQ5K"
  };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
