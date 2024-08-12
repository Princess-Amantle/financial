// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDO7DI9ZaZw2ixAa2ZzuLMzUeI6jiEvJl0",
  authDomain: "onboarding-7181e.firebaseapp.com",
  projectId: "onboarding-7181e",
  storageBucket: "onboarding-7181e.appspot.com",
  messagingSenderId: "1098259486356",
  appId: "1:1098259486356:web:56d07afbd3800063b38681"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;