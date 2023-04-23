import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection, addDoc } from "firebase/firestore";

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
initializeApp(firebaseConfig);

//init service
const db = getFirestore();

//collection ref
const colRef = collection(db, "society")

//get collection data
getDocs(colRef)
    .then((snapshot) => {
        let society = []
        snapshot.docs.forEach((doc) => {
            society.push({ ...doc.data(), id: doc.id })
        })
        console.log(society)
    }).catch(error => {
        console.log(error.message)
    })

//adding docs
const addSociety = document.querySelector('.registration')
addSociety.addEventListener('submit', (e) => {
    e.preventDefault()
    addDoc(colRef, {
        society_name: addSociety.socname.value,
    })
        .then(() => {
            addSociety.reset()
        })
})

  //deleting docs