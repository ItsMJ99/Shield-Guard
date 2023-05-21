import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
import { getFirestore, getDocs, collection, addDoc, deleteDoc, doc, updateDoc, query, where, orderBy, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD5t1c_-5hy0mwAlmNngRI2QOnA8XJgYwg",
    authDomain: "shield-guard-44ecf.firebaseapp.com",
    databaseURL: "https://shield-guard-44ecf-default-rtdb.firebaseio.com",
    projectId: "shield-guard-44ecf",
    storageBucket: "shield-guard-44ecf.appspot.com",
    messagingSenderId: "792292181818",
    appId: "1:792292181818:web:e5f05e1714526cc0e2b203"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//auth and firestore references
const webAdminAuth = getAuth(app);

//firestore DB
const db = getFirestore(app);

// Get the logout anchor tag
const logoutAnchor = document.getElementById('webadmin-logout');

// Add click event listener to logout anchor tag
logoutAnchor.addEventListener('click', (e) => {
    e.preventDefault();
    signOut(webAdminAuth)
        .then(() => {
            // Perform any additional actions after logout
            window.location.href = '../../ShieldGuard.html'; // Redirect to login page
            alert('Webpage Admin Logged out');
        })
        .catch((error) => {
            // Handle any errors during logout
            console.log(error);
        });
});


//subscribe to auth changes that occur
// onAuthStateChange(webAdminAuth, (user) => {
//     console.log('user state changed : ', user)
// })





