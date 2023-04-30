//queries
//const q = query(colRef)//add --> , where("owner", "==", "Peter")), orderBy('owner', 'desc') after ") to order

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
