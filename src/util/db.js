import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAdofE_6c8BnKKPbBQmV1QvLPPrZ0v1hsw",
    authDomain: "dariaradu-website.firebaseapp.com",
    databaseURL: "https://dariaradu-website-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "dariaradu-website",
    storageBucket: "dariaradu-website.appspot.com",
    messagingSenderId: "717115304054",
    appId: "1:717115304054:web:7abd2a07eb02e070519757"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
const database = firebase.database().ref();

export default database;
