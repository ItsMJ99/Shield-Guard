import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js";
//import { db } from 'config.js';

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
const auth = getAuth(app);

//update firestore settings
//db.settings({ timestampsInSnapshots: true })

//login admin
const adminlogin = document.querySelector('#adminlogin');
adminlogin.addEventListener('submit', (e) => {
    e.preventDefault()
    const email = adminlogin.adminemail.value;
    const password = adminlogin.adminpassword.value;
    console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
        .then(cred => {
            console.log('user logged in = ', cred.user)
            //const modal=document.querySelector('#adminloginbox');
            //M.Modal.getInstance(modal).close();
            adminlogin.reset();
        })
        .catch((err) => {
            console.log(err.message);
        })
})