import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDYRK0jnJ1eU77NK9S72JPQNGIl-IRhgLQ",
    authDomain: "fitness-e6f4c.firebaseapp.com",
    projectId: "fitness-e6f4c",
    storageBucket: "fitness-e6f4c.appspot.com",
    messagingSenderId: "938397994711",
    appId: "1:938397994711:web:ebf9159ce17b34b2d22a92",
    measurementId: "G-2BK96EJRE0"
  };

  let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export {auth};