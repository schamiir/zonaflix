import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

//Firebase Key
const firebaseConfig = {
    apiKey: "AIzaSyDRndcWYyBLfv1m6atEHjFBeQ6tT3VjA4k",
    authDomain: "netflix-clone-951f4.firebaseapp.com",
    projectId: "netflix-clone-951f4",
    storageBucket: "netflix-clone-951f4.appspot.com",
    messagingSenderId: "957895191634",
    appId: "1:957895191634:web:d2626adb9b291c2197038b"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;