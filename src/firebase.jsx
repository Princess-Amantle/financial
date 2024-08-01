// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDQPosae30TTBeeMJlw6zI7_FGLa5RGiM",
  authDomain: "login-115de.firebaseapp.com",
  projectId: "login-115de",
  storageBucket: "login-115de.appspot.com",
  messagingSenderId: "933388993396",
  appId: "1:933388993396:web:8d84bd062c4d7e4273a221"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut };