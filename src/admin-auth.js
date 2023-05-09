import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js";
//import { db } from 'config.js';

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
const adminAuth = getAuth(app);

//admin login 
const adminlogin = document.querySelector('#adminlogin');
adminlogin.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = adminlogin.adminemail.value;
    const password = adminlogin.adminpassword.value;
    console.log(email, password);
    signInWithEmailAndPassword(adminAuth, email, password)
        .then(cred => {
            alert('Admin Login Successful !!!');
            console.log('Admin logged in = ', cred.user)
            //const modal = document.querySelector('.loginbox');
            //M.Modal.getInstance(modal).close();
            adminlogin.reset();
        })
        .catch((err) => {
            console.log(err.message);
        })
})

//admin logout
const logout = document.querySelector('#adminlogout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        alert('Admin Logged out');
    });
});

//admin auth status change
// adminAuth.onAuthStateChanged(user => {
//     console.log(user);
//     if (user) {
//         alert('user logged in');
//used to retrieve a particular record, update as per your application
// db.collection('guides').get().then(snapshot => {
//     setupguide(snapshot.docs);
// })
//     }
//     else {
//         alert('user logged out');
//         setupGuides([]);
//     }
// });


// was used in diff index.js file 
const setupguides = (data) => {
    var html = '';
    data.forEach(doc => {
        const guide = doc.data();
        console.log(guide)
        //const li=`<li><div class='collapse'>${guide.title}</div></li>`;//use this to add data to the drop down view which is hidden
        html += li;
    })
    guideList.innerHTML = html;
}