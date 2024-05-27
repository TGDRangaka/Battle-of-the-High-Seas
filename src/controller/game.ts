import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";
import { child, get, getDatabase, ref, set, update } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAL0AmcXBH1zr7EKL8pE3-Joge0Pxyljfg",
    authDomain: "battle-of-the-high-seas.firebaseapp.com",
    databaseURL: "https://battle-of-the-high-seas-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "battle-of-the-high-seas",
    storageBucket: "battle-of-the-high-seas.appspot.com",
    messagingSenderId: "95988470782",
    appId: "1:95988470782:web:b745e9ce5edeeebbe566af",
    measurementId: "G-ZVDQNVR4JY"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const database = getDatabase();
const auth = getAuth();

// Get Room Id from URL
const urlParams = new URLSearchParams(window.location.search);
let roomId:string | null =  urlParams.get("roomId");
console.log(roomId);

// Sign in
signInAnonymously(auth);

auth.onAuthStateChanged(user => {
    if (user) {
        console.log(user.uid);
    } else {
        console.log("User not found");
    }
})

// Get Room Data

// Get Players Date

// Create Boards

// Creade Ships

// Set values

// Drag and Drop ships
const ship = document.getElementById("drop-ship");
const dropzone = document.getElementById("dropzone");

// ship?.addEventListener('dragstart', function(e) {
//     console.log(e);
// })

dropzone?.addEventListener('dragover', function(e) {
    e.preventDefault();
})

dropzone?.addEventListener('drop', function(e) {
    ship && dropzone.prepend(ship);
})