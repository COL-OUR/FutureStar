// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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

// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  onAuthStateChanged, 
  signOut 
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";


// Get page elements if they exist
// const signupBtn = document.getElementById("signupBtn");
// const signinBtn = document.getElementById("signinBtn");
// const emailInput = document.getElementById("email");
// const passwordInput = document.getElementById("password");

// accounts.js
// Firebase Sign Up Authentication

// Import the Firebase SDK (these URLs are official CDN modules)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";

// Handle sign-up button click
document.addEventListener("DOMContentLoaded", () => {
  const signupBtn = document.getElementById("signupBtn");

  signupBtn.addEventListener("click", async () => {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
      alert("Please fill in both email and password.");
      return;
    }

    try {
      // Create the user in Firebase
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      console.log("User created:", user.email);
      alert("Account created successfully!");
      window.location.href = "Home/home.html"; // Redirect to home
    } catch (error) {
      console.error("Error signing up:", error.message);
      alert(error.message);
    }
  });
});
