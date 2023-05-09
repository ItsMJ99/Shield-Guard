import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
import { getFirestore, getDocs, collection, addDoc, deleteDoc, doc, onSnapshot, updateDoc, query, where, orderBy, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-storage.js";
//import { initializeApp } from "firebase/app";
//import { getFirestore, getDocs, collection, addDoc, deleteDoc, doc, onSnapshot, updateDoc, query, where, orderBy, serverTimestamp } from "firebase/firestore";

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

//init storage
const storage = getStorage();

//refers to the collection to access
const colRef = collection(db, 'society registration requests')

//add records to Firestore
const addSocReq = document.querySelector('.societyRegistration')
addSocReq.addEventListener('submit', (e) => {
    e.preventDefault()
    const file = addSocReq.ownerdoc.files[0];
    const storageRef = ref(storage, 'Ownership Documents/' + file.name);
    const uploadTask = uploadBytes(storageRef, file);

    uploadTask
        .then((snapshot) => {
            console.log('File uploaded successfully.');

            // Get the file URL
            const fileRef = ref(storage, snapshot.ref.fullPath);
            getDownloadURL(fileRef)
                .then((url) => {
                    // Store the file URL in Firestore
                    addDoc(collection(db, 'society registration requests'), {
                        owner_fname: addSocReq.o_fname.value,
                        owner_mname: addSocReq.o_mname.value,
                        owner_lname: addSocReq.o_lname.value,
                        owner_email: addSocReq.o_email.value,
                        owner_password: addSocReq.o_password.value,
                        owner_confirm_password: addSocReq.o_confirm_password.value,
                        owner_phoneno: addSocReq.o_phoneno.value,
                        owner_gender: addSocReq.o_gender.value,
                        owner_dob: addSocReq.o_dob.value,
                        owner_address: addSocReq.o_address.value,
                        owner_state: addSocReq.o_state.value,
                        owner_district: addSocReq.o_district.value,
                        owner_pincode: addSocReq.o_pincode.value,
                        society_name: addSocReq.s_name.value,
                        society_address: addSocReq.s_address.value,
                        society_state: addSocReq.s_state.value,
                        society_district: addSocReq.s_district.value,
                        society_pincode: addSocReq.s_pincode.value,
                        society_document: url,
                        society_email: addSocReq.s_email.value,
                        society_phoneno: addSocReq.s_phoneno.value,
                        society_FoundingDay: addSocReq.s_date.value,
                        society_admins: addSocReq.s_admins.value
                    })
                        .then(() => {
                            addSocReq.reset()
                            console.log('File URL stored in Firestore successfully.');
                        })
                        .catch((error) => {
                            console.error('Error storing file URL in Firestore:', error);
                        });
                })
                .catch((error) => {
                    console.error('Error getting file URL:', error);
                });
        })
        .catch((error) => {
            console.error('Error uploading file:', error);
        });
})

//used to check if the firestore is connected to see data in dev console
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

export { db };

