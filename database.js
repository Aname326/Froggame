 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyDKvV1UJgnMr0i9VRCaIrcG_OSgmhpDAZc",
   authDomain: "real-frog-game-2.firebaseapp.com",
   databaseURL: "https://real-frog-game-2-default-rtdb.asia-southeast1.firebasedatabase.app",
   projectId: "real-frog-game-2",
   storageBucket: "real-frog-game-2.appspot.com",
   messagingSenderId: "596703894774",
   appId: "1:596703894774:web:754cd69024da09c1ed20d7"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

   import {getDatabase, set, get, update, remove, ref, child}
   from "https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js"

   const db = getDatabase();

   var createBtn = document.querySelector("#createBtn");
   var loginBtn = document.querySelector("#loginBtn");

   var createName = document.getElementById("createName");
   var createId = document.getElementById("createId");
   var loginName = document.getElementById("loginName");
   var loginId = document.getElementById("loginId");

   var highscore = document.querySelector("#highscore");


   function createAcc() {
       console.log(createId.value)
       console.log(createName.value)
       set(ref(db, "Users/" + createId.value), {
           Name: createName.value,
           ID: createId.value,
           Highscore: 0
       })
       .then(() => {
           alert ("Welcome!")
       })
       .catch((error) => {
           alert(error)
           // allows to catch any error 
       });
   }

   function login() {
       const dbref = ref(db);

       get(child(dbref), "Users/" + loginId.value)

       .then((snapshot) => {
           if (snapshot.exists()) {
               console.log(snapshot.val().Name);
               console.log(snapshot.val().ID);
               console.log(snapshot.val().Highscore);
           } else {
               alert("data not found");
           }
       })

       .catch((error) => {
           alert(error)
       })
   }

   createBtn.addEventListener('click', createAcc);
   loginBtn.addEventListener('click',login)
