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

document.addEventListener("DOMContentLoaded", () => {
  const passwordInput = document.getElementById("password");
  const toggle = document.getElementById("togglePassword");
  const eyeOpen = document.getElementById("eyeOpen");
  const eyeClosed = document.getElementById("eyeClosed");

  if (toggle && passwordInput) {
    toggle.addEventListener("click", () => {
      const show = passwordInput.type === "password";
      passwordInput.type = show ? "text" : "password";
      eyeOpen.style.display = show ? "inline" : "none";
      eyeClosed.style.display = show ? "none" : "inline";
    });
  }

  const signupBtn = document.getElementById("signupBtn");
  if (signupBtn) {
    signupBtn.addEventListener("click", async (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
      if (!email || !password) return alert("Please fill all fields");

      try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Account created successfully!");
        window.location.href = "Home/home.html";
      } catch (error) {
        alert("Error: " + error.message);
      }
    });
  }

  const signinBtn = document.getElementById("signinBtn");
  if (signinBtn) {
    signinBtn.addEventListener("click", async (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
      if (!email || !password) return alert("Please fill all fields");

      try {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Signed in successfully!");
        window.location.href = "Home/home.html";
      } catch (error) {
        alert("Error: " + error.message);
      }
    });
  }
});
