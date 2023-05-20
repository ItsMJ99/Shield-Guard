import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
import { getFirestore, getDocs, collection, addDoc, deleteDoc, doc, updateDoc, query, where, orderBy, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-storage.js";

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
const webAdminAuth = getAuth(app);

//init storage
const storage = getStorage();

//firestore DB
const db = getFirestore(app);

//webAdmin login
const webAdmin = document.querySelector('#web-admin-login');
webAdmin.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = webAdmin.webAdminEmail.value;
    const password = webAdmin.webAdminPassword.value;
    console.log(email, password);
    signInWithEmailAndPassword(webAdminAuth, email, password)
        .then(cred => {
            alert('Webpage Admin Logged in Successful !!!');
            console.log('User logged in = ', cred.user)
            userlogin.reset();
        })
        .catch((err) => {
            webAdmin.log(err.message);
        })
})

//webAdmin logout
// const logout = document.querySelector('#logout');
// logout.addEventListener('click', (e) => {
//     e.preventDefault();
//     auth.signOut().then(() => {
//         alert('Webpage Admin Logged out');
//     });
// });

//refers to the collection to access
const regSocieties = collection(db, 'registered societies')

//add records to Firestore
const regSoc = document.querySelector('#admin-reg-res')
regSoc.addEventListener('submit', (e) => {
    e.preventDefault()
    const file = regSoc.ownerdoc.files[0];
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
                    addDoc(collection(db, 'registered societies'), {//collection(db, 'society registration requests')
                        owner_fname: regSoc.o_fname.value,
                        owner_mname: regSoc.o_mname.value,
                        owner_lname: regSoc.o_lname.value,
                        owner_email: regSoc.o_email.value,
                        owner_phoneno: regSoc.o_phoneno.value,
                        owner_password: regSoc.o_password.value,
                        owner_confirm_password: regSoc.o_confirm_password.value,
                        owner_gender: regSoc.o_gender.value,
                        owner_occupation: regSoc.o_occupation.value,
                        owner_dob: regSoc.o_dob.value,
                        owner_address: regSoc.o_address.value,
                        owner_state: regSoc.o_state.value,
                        owner_district: regSoc.o_district.value,
                        owner_pincode: regSoc.o_pincode.value,
                        society_name: regSoc.s_name.value,
                        society_address: regSoc.s_address.value,
                        society_state: regSoc.s_state.value,
                        society_district: regSoc.s_district.value,
                        society_pincode: regSoc.s_pincode.value,
                        society_document: url,
                        society_phoneno: regSoc.s_phoneno.value,
                        society_FoundingDay: regSoc.s_date.value,
                        society_admins: regSoc.s_admins.value,
                        society_email: regSoc.s_email.value
                    })
                        .then(() => {
                            regSoc.reset()
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

//refers to the collection to access
// const colRef = collection(db, 'society registration requests')

// const table = document.getElementsByClassName('.table datatable');
// //const table = document.querySelector('#society-records');

// document.addEventListener('DOMContentLoaded', () => {
//     // The script code goes here

//     getDocs(colRef)
//         .then((snapshot) => {
//             snapshot.docs.forEach((doc) => {
//                 const data = doc.data();
//                 const ownername = data.owner_fname + " " + data.owner_mname + " " + data.owner_lname;
//                 const socname = data.society_name;
//                 const owneroccupation = data.owner_occupation;
//                 const ownerdob = data.owner_dob;
//                 const ownerfoundingday = data.society_FoundingDay;

//                 // Create table row and cells
//                 const row = document.createElement('tr');
//                 const ownernameCell = document.createElement('td');
//                 ownernameCell.textContent = ownername;
//                 const socnameCell = document.createElement('td');
//                 socnameCell.textContent = socname;
//                 const owneroccupationCell = document.createElement('td');
//                 owneroccupationCell.textContent = owneroccupation;
//                 const ownerdobCell = document.createElement('td');
//                 ownerdobCell.textContent = ownerdob;
//                 const ownerfoundingdayCell = document.createElement('td');
//                 ownerfoundingdayCell.textContent = ownerfoundingday;

//                 // Append cells to the row
//                 row.appendChild(ownernameCell);
//                 row.appendChild(socnameCell);
//                 row.appendChild(owneroccupationCell);
//                 row.appendChild(ownerdobCell);
//                 row.appendChild(ownerfoundingdayCell);

//                 // Append the row to the table
//                 //var tab = document.createElement('table');
//                 alert(table);
//                 table.appendChild(row);

//             });
//         })
//         .catch((error) => {
//             console.log(error.message);
//         });
// });
















