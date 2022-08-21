// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIj3YwpMFTfTSguajAPuKPHt_vPHCI81A",
  authDomain: "frog-game-database.firebaseapp.com",
  databaseURL: "https://frog-game-database-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "frog-game-database",
  storageBucket: "frog-game-database.appspot.com",
  messagingSenderId: "768338091230",
  appId: "1:768338091230:web:8f7401fe13ca7fe203764f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import {getDatabase, set, get, update, remove, ref, child}
from "https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js"

const db = getDatabase();

var createBtn = document.querySelector("#createBtn");
var loginBtn = document.querySelector("#loginBtn");

var createName = document.getElementsByClassName("createName");
var createPw = document.getElementsByClassName("createPw");
var loginName = document.getElementsByClassName("loginName");
var loginPw = document.getElementsByClassName("loginPw");

var highscore = document.querySelector("#highscore");


function createAcc() {
    set(ref(db, "Users/" + createName.value + createPw.value), {
        Name: createName.value,
        Pw: createPw.value,
        Highscore: 0
    })
    .then(() => {
        alert ("Welcome!")
    })
    .catch((error) => {
        alert(error)
    });
}


createBtn.addEventListener('click', createAcc);


console.log("database connected")