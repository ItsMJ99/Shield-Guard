import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyD5t1c_-5hy0mwAlmNngRI2QOnA8XJgYwg",
    authDomain: "shield-guard-44ecf.firebaseapp.com",
    databaseURL: "https://shield-guard-44ecf-default-rtdb.firebaseio.com",
    projectId: "shield-guard-44ecf",
    storageBucket: "shield-guard-44ecf.appspot.com",
    messagingSenderId: "792292181818",
    appId: "1:792292181818:web:e5f05e1714526cc0e2b203"
};

//init firebase
const app = initializeApp(firebaseConfig);

//init service
const db = getFirestore(app);

//refers to the collection to access
const colRef = collection(db, 'contact-us');

const contactus = document.querySelector('.form');
contactus.addEventListener('submit', (e) => {
    e.preventDefault();
    addDoc(colRef, {
        username: contactus.username.value,
        phone_no: contactus.phone.value,
        email: contactus.email.value,
        message: contactus.message.value
    }).then(() => {
        alert("Request sent successfully, We will contact you as soon as possible");
        contactus.reset()
        console.log('Problem Submitted');
    })
        .catch((error) => {
            console.error('Request not sent :', error);
        });
});