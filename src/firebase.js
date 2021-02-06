import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBJdOzrGyX-isCIDEHPVzxm58NkJUTeg5M",
    authDomain: "facebook-messenger-22ce9.firebaseapp.com",
    projectId: "facebook-messenger-22ce9",
    storageBucket: "facebook-messenger-22ce9.appspot.com",
    messagingSenderId: "196846644336",
    appId: "1:196846644336:web:c310f52d2c8747116ed8b5",
    measurementId: "G-QB1L0WVBVH"
  });

const db = firebaseApp.firestore();

export default db;