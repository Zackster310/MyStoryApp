import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyD8w8B6a0Sjhv3ctNrQ-KgIBA7telnNh5A",
    authDomain: "mystoryapp-a8de8.firebaseapp.com",
    projectId: "mystoryapp-a8de8",
    storageBucket: "mystoryapp-a8de8.appspot.com",
    messagingSenderId: "570267703255",
    appId: "1:570267703255:web:90bde6c2a98b9143c29d92"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore()