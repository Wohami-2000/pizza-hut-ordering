// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCF0SMItVr2WhLBajHbDCce6NR20hmBtz0",
  authDomain: "pizzahut-orders.firebaseapp.com",
  databaseURL: "https://pizzahut-orders-default-rtdb.firebaseio.com",
  projectId: "pizzahut-orders",
  storageBucket: "pizzahut-orders.firebasestorage.app",
  messagingSenderId: "359550320714",
  appId: "1:359550320714:web:e7314466808d4ed4e326b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);