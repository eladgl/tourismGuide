// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhBnAbS-KSJbQFYZHqzhD-7WGiSMeocJI",
  authDomain: "tourismguide-be9e9.firebaseapp.com",
  projectId: "tourismguide-be9e9",
  storageBucket: "tourismguide-be9e9.appspot.com",
  messagingSenderId: "246729515443",
  appId: "1:246729515443:web:2386a11d2fb1dca9872bc6",
  measurementId: "G-5Z7HP8FGTJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };