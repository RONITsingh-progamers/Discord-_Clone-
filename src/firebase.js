import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCp2LPzCO3GjhLF_9tKL7H1m4HAe0AMdcQ",
    authDomain: "discord-clone-f2abb.firebaseapp.com",
    projectId: "discord-clone-f2abb",
    storageBucket: "discord-clone-f2abb.appspot.com",
    messagingSenderId: "792965908878",
    appId: "1:792965908878:web:6c4d68c00535cee0967cdf",
    measurementId: "G-FK4P3XJH3Y"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth , provider};
  export default db;