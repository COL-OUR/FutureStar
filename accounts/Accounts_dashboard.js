import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import {getAuth, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import{getFirestore, getDoc, doc} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js"

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

  const auth=getAuth();
  const db=getFirestore();

  onAuthStateChanged(auth, (user)=>{
    const loggedInUserId=localStorage.getItem('loggedInUserId');
    if(loggedInUserId){
        console.log(user);
        const docRef = doc(db, "users", loggedInUserId);
        getDoc(docRef)
        .then((docSnap)=>{
            if(docSnap.exists()){
                const userData=docSnap.data();
                document.getElementById('loggedUserFName').innerText=userData.firstName;
                document.getElementById('loggedUserEmail').innerText=userData.email;
                document.getElementById('loggedUserLName').innerText=userData.lastName;

            }
            else{
                console.log("no document found matching id")
            }
        })
        .catch((error)=>{
            console.log("Error getting document");
        })
    }
    else{
        console.log("User Id not Found in Local storage")
    }
  })

  const logoutButton=document.getElementById('logout');

  logoutButton.addEventListener('click',()=>{
    localStorage.removeItem('loggedInUserId');
    signOut(auth)
    .then(()=>{
        window.location.href='index.html';
    })
    .catch((error)=>{
        console.error('Error Signing out:', error);
    })
  })
