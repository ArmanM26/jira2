import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGEWiILSuoRdBC1d6PKtvbsOy9ksEvHX4",
  authDomain: "jira-ea7d9.firebaseapp.com",
  databaseURL: "https://jira-ea7d9-default-rtdb.firebaseio.com",
  projectId: "jira-ea7d9",
  storageBucket: "jira-ea7d9.appspot.com",
  messagingSenderId: "1049598568351",
  appId: "1:1049598568351:web:b08a6d018271b707c53faa",
  measurementId: "G-8ENQQTPDBY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Analytics = getAnalytics(app);
// Initialize Firebase
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
