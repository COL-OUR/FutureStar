
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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

/* --------- DOM logic when ready ---------- */
document.addEventListener("DOMContentLoaded", () => {
  // 1) attach show/hide toggle to every .password-wrap
  document.querySelectorAll(".password-wrap").forEach(wrap => {
    const input = wrap.querySelector("input[type='password'], input[type='text']");
    const toggle = wrap.querySelector(".toggle-password");
    const eyeOpen = wrap.querySelector(".eye-open");
    const eyeClosed = wrap.querySelector(".eye-closed");

    if (!input || !toggle) return;

    // initial state: password type, closed eye visible
    let shown = false;

    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      shown = !shown;
      input.type = shown ? "text" : "password";
      if (eyeOpen && eyeClosed) {
        eyeOpen.style.display = shown ? "inline" : "none";
        eyeClosed.style.display = shown ? "none" : "inline";
      }
      // keep focus on input after toggle
      input.focus();
      // move caret to end
      const val = input.value;
      input.setSelectionRange(val.length, val.length);
    });
  });

  // 2) signup button (if on signup page)
  const signupBtn = document.getElementById("signupBtn");
  if (signupBtn) {
    signupBtn.addEventListener("click", async (e) => {
      e.preventDefault();
      const emailEl = document.getElementById("email");
      const passEl = document.getElementById("password");
      const email = emailEl?.value?.trim() || "";
      const password = passEl?.value?.trim() || "";
      if (!email || !password) { alert("Please fill email and password"); return; }
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        // on success redirect to your home page
        window.location.href = "Home/home.html";
      } catch (err) {
        alert("Sign up error: " + err.message);
      }
    });
  }

  // 3) signin button (if on signin page)
  const signinBtn = document.getElementById("signinBtn");
  if (signinBtn) {
    signinBtn.addEventListener("click", async (e) => {
      e.preventDefault();
      const emailEl = document.getElementById("email");
      const passEl = document.getElementById("password");
      const email = emailEl?.value?.trim() || "";
      const password = passEl?.value?.trim() || "";
      if (!email || !password) { alert("Please fill email and password"); return; }
      try {
        await signInWithEmailAndPassword(auth, email, password);
        window.location.href = "Home/home.html";
      } catch (err) {
        alert("Sign in error: " + err.message);
      }
    });
  }
});
