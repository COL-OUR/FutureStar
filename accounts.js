// Import Firebase SDK modules from CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";

import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

// Firebase configuration
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
const auth = getAuth(app);

// Wait for DOM to load before accessing elements
document.addEventListener("DOMContentLoaded", () => {
  const signupBtn = document.getElementById("signupBtn");

  signupBtn.addEventListener("click", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
      alert("Please fill out both fields.");
      return;
    }

    try {
      console.log("Attempting sign up with:", email);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      console.log("User successfully created:", user.email);
      alert("Account created successfully!");
      window.location.href = "Home/home.html";
    } catch (error) {
      console.error("Firebase Error:", error.code, error.message);
      alert("Error: " + error.message);
    }
  });
});
