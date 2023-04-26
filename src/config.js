import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
import { getFirestore, getDocs, collection, addDoc, deleteDoc, doc, onSnapshot } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-firestore.js";
// import { initializeApp } from "firebase/app";
// import { getFirestore, getDocs, collection, addDoc } from "firebase/firestore";

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
const colRef = collection(db, 'society')

//fetch/real time data records from Firestore
// getDocs(colRef)
//     .then((snapshot) => {
//         let societies = []
//         snapshot.docs.forEach((doc) => {
//             societies.push({ ...doc.data(), id: doc.id })
//         })
//         console.log(societies) 
//     })
//     .catch(error => {
//         console.log(error.message)
//     })

onSnapshot(colRef, (snapshot) => {
    let societies = []
    snapshot.docs.forEach((doc) => {
        societies.push({ ...doc.data(), id: doc.id })
    })
    console.log(societies)
})

//add records to Firestore
const addSocReq = document.querySelector('.socReg')
addSocReq.addEventListener('submit', (e) => {
    e.preventDefault()
    addDoc(colRef, {
        society_name: addSocReq.socname.value,
        owner: addSocReq.firstname.value,
    }).then(() => {
        addSocReq.reset()
    })
})

//delete records from Firestore
//create a seperate form for deletion refer the net ninja tutorial playlist on youtube
const delSocForm = document.querySelect('.socReg')
delSocForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const docRef = doc(db, 'society', '4S6KsFCaZLt1Kmbfj8To')
    deleteDoc(docRef).then(() => {
        delSocReq.reset()
    })
})

export { db };
