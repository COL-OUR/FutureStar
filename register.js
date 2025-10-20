// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDN6J8OMON2LWsQy52yUDISQehDMTsk1bw",
    authDomain: "futurestar-08.firebaseapp.com",
    projectId: "futurestar-08",
    storageBucket: "futurestar-08.firebasestorage.app",
    messagingSenderId: "465929730039",
    appId: "1:465929730039:web:54a6d51a3a8fb6ccb720f2",
    measurementId: "G-MDX2WDZV0Y"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
