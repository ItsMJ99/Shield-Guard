//config.js
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, addDoc, collection, updateDoc } from "firebase/firestore";
// import {initializeApp} from "firebase/app";
// import {getFirestore, doc, setDoc, addDoc, collection, updateDoc} from "firebase/firestore";

// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyD5t1c_-5hy0mwAlmNngRI2QOnA8XJgYwg",
    authDomain: "shield-guard-44ecf.firebaseapp.com",
    projectId: "shield-guard-44ecf",
    storageBucket: "shield-guard-44ecf.appspot.com",
    messagingSenderId: "792292181818",
    appId: "1:792292181818:web:e5f05e1714526cc0e2b203"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.getFirestore(app);

// Add a new document in collection "cities"
async function sendRequest() {
    var sn = document.getElementById("socname").value;
    // var st = document.getElementById("state").value;
    // var dist = document.getElementById("district").value;
    // var pin = document.getElementById("pincode").value;
    // var country = document.getElementById("country").value;
    // var adds = document.getElementById("address").value;
    try {
        const docRef = await addDoc(collection(db, "society"), {
            society_name: sn,
            // state: st,
            // district: dist,
            // pincode: pin,
            // country: country,
            // address: adds
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }

}



// setDoc(doc(db, "society"), {
//     socname: socname,
//     state: state,
//     dist: district,
//     pincode: pincode,
//     country: country,
//     address: address
// });

//     <script>
//     import {initializeApp} from "firebase/app";
//     import {getFirestore, doc, setDoc, addDoc, collection, updateDoc} from "firebase/firestore";
//         // import {initializeApp} from "firebase/app";
//         // import {getFirestore, doc, setDoc, addDoc, collection, updateDoc} from "firebase/firestore";

//     // See: https://support.google.com/firebase/answer/7015592
//     const firebaseConfig = {
//         apiKey: "AIzaSyD5t1c_-5hy0mwAlmNngRI2QOnA8XJgYwg",
//     authDomain: "shield-guard-44ecf.firebaseapp.com",
//     projectId: "shield-guard-44ecf",
//     storageBucket: "shield-guard-44ecf.appspot.com",
//     messagingSenderId: "792292181818",
//     appId: "1:792292181818:web:e5f05e1714526cc0e2b203"
//         };

//     // Initialize Firebase
//     const app = initializeApp(firebaseConfig);

//     // Initialize Cloud Firestore and get a reference to the service
//     const db = firebase.getFirestore(app);

//     // Add a new document in collection "cities"
//     async function sendRequest() {
//             var sn = document.getElementById("socname").value;
//     // var st = document.getElementById("state").value;
//     // var dist = document.getElementById("district").value;
//     // var pin = document.getElementById("pincode").value;
//     // var country = document.getElementById("country").value;
//     // var adds = document.getElementById("address").value;
//     try {
//                 const docRef = await addDoc(collection(db, "society"), {
//         society_name: sn,
//                     // state: st,
//                     // district: dist,
//                     // pincode: pin,
//                     // country: country,
//                     // address: adds
//                 });
//     console.log("Document written with ID: ", docRef.id);
//             } catch (e) {
//         console.error("Error adding document: ", e);
//             }

//         }
// </script>
