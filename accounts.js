// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
   firebaseConfig = {
    apiKey: "AIzaSyDN6J8OMON2LWsQy52yUDISQehDMTsk1bw",
    authDomain: "futurestar-08.firebaseapp.com",
    projectId: "futurestar-08",
    storageBucket: "futurestar-08.firebasestorage.app",
    messagingSenderId: "465929730039",
    appId: "1:465929730039:web:54a6d51a3a8fb6ccb720f2",
    measurementId: "G-MDX2WDZV0Y"
  };

  // Initialize Firebase
   app = initializeApp(firebaseConfig);
   analytics = getAnalytics(app);

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

// 🟢 Auto-login: redirect if user is already signed in
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User already signed in:", user.email);
    if (!window.location.pathname.includes("home.html")) {
      window.location.href = "home.html";
    }
  }
});

// 🟣 Sign Up button
if (signupBtn) {
  signupBtn.addEventListener("click", async () => {
    const email = emailInput.value;
    const password = passwordInput.value;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User signed up:", user.email);
      window.location.href = "Home/home.html";
    } catch (error) {
      console.error(error.code, error.message);
      alert(error.message);
    }
  });
}

  // Signup logic
  document.addEventListener("DOMContentLoaded", () => {
    const signupBtn = document.getElementById('signupBtn');
    signupBtn.addEventListener('click', async () => {
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log("User created:", user.email);

        // Redirect to home page
        window.location.href = 'Home/home.html';
      } catch (error) {
        console.error("Error signing up:", error.message);
        alert(error.message);
      }
    });
  });

