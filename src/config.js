import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
import { getFirestore, getDocs, collection, addDoc, deleteDoc, doc, onSnapshot, updateDoc, query, where, orderBy, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-firestore.js";
// import { initializeApp } from "firebase/app";
// import { getFirestore, getDocs, collection, addDoc, onAuthStateChanged } from "firebase/firestore";

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
const auth = getAuth(app);

//refers to the collection to access
const colRef = collection(db, 'society')

//queries
const q = query(colRef, where("owner", "==", "Peter"))//add --> , orderBy('owner', 'desc') after ") to order

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

//get a single document
const docRef = doc(db, 'society', '3iK2mrwzaqml7OmN0wjC')
// getDocs(docRef)
//     .then((doc) => {
//         console.log(doc.data(), doc.id)
//     })
onSnapshot(docRef, (doc) => {
    console.log(doc.data(), doc.id)
})

//replace the colRef with q to get only a specific record else you will get entire records
onSnapshot(q, (snapshot) => {
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

const dRef = doc(db, 'society', updateForm.id.value)//docRef
updateDoc(dRef, {
    owner: 'updated owner'
}).then(() => {
    updateForm.reset()
})

//Firebase Authentication

//signup
const signupForm = document.querySelector('.signup')
signupForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const email = signupForm.email.value
    const password = signupForm.password.value
    createUserWithEmailAndPassword(auth, email, password)
        .then((cred) => {
            console.log('User Created = ', cred.user)
            signupForm.reset()
        }).catch((err) => {
            console.log(err.message)
        })
})

//log in/out
const logoutBtn = documnet.querySelector('.logout')
logoutBtn.addEventListener('click', () => {
    signOut(auth).then(() => {
        console.log('User logged out ')
    })
        .catch((err) => {
            console.log(err.message)
        })
})

const loginForm = document.querySelector('.login')
loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const email = loginForm.email.value
    const password = loginForm.password.value
    signInWithEmailAndPassword(auth, email, password)
        .then((cred) => {
            console.log('user logged in = ', cred.user)
        })
        .catch((err) => {
            console.log(err.message)
        })
})

//subscribe to auth changes that occur
onAuthStateChange(auth, (user) => {
    console.log('user state changed : ', user)
})

//from real time data records in firestore part
const unsubCol = onSnapshot(q, (snapshot) => {
    //take from firestore real time records part
    //can also be done for unsubDoc
    //and for unsubAuth
})

//unsubscribe from changes auth and db
const unsubBtn = document.querySelector('.unsub')//unsub is btn class
unsubBtn.addEventListener('click', () => {
    console.log('unsubscribing')
    unsubCol()
    unsubDoc()
    unsubAuth()
})

export { db };
