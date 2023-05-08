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
const userAuth = getAuth(app);

//update firestore settings
//db.settings({ timestampsInSnapshots: true })

//user register/signup 
const signup = document.querySelector('#signUpForm');
signup.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Signed Up Successfully');
    //get user info
    const email = signup.email.value;
    const password = signup.password.value;
    console.log(email, password);
    //signup user
    createUserWithEmailAndPassword(userAuth, email, password).then(cred => {
        console.log(cred.user);
        //const modal = document.querySelector('#modalSignUp');//for popup to close
        //M.Modal.getInstance(modal).close();
        signup.reset();
    });
});

//user login 
const userlogin = document.querySelector('#userlogin');
userlogin.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = userlogin.useremail.value;
    const password = userlogin.userpassword.value;
    console.log(email, password);
    signInWithEmailAndPassword(userAuth, email, password)
        .then(cred => {
            alert('User Login Successful !!!');
            console.log('User logged in = ', cred.user)
            //const modal = document.querySelector('.loginbox');
            //M.Modal.getInstance(modal).close();
            userlogin.reset();
        })
        .catch((err) => {
            console.log(err.message);
        })
})

//user logout 
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        alert('User Logged out');
    });
});

