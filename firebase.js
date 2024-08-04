// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCT8KicL4mMq_wsQhbGlcPLYYgpJnaSwNQ",
  authDomain: "studytimer-8b30a.firebaseapp.com",
  projectId: "studytimer-8b30a",
  storageBucket: "studytimer-8b30a.appspot.com",
  messagingSenderId: "558952340161",
  appId: "1:558952340161:web:03f368a277ba854ee75240",
  measurementId: "G-M4B5ZKVWYF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);