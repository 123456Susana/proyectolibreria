// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvqQ4FVFVvxnYoVE5ZPbRzC5GSsXaEdsg",
  authDomain: "saltiendatcc.firebaseapp.com",
  projectId: "saltiendatcc",
  storageBucket: "saltiendatcc.appspot.com",
  messagingSenderId: "712887856894",
  appId: "1:712887856894:web:faec7042f825fb15ddbfaf",
  measurementId: "G-QT4E9RGQGC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

