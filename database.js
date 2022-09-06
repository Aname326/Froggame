// firebase copy and paste codes for setup

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
 
    import {getDatabase, set, get, update, remove, ref, child, push}
    from "https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js"
 
    const db = getDatabase();
 
     // firebase setup code ends here
 
     var buttons = document.getElementById("buttons")
     var idInput = document.getElementById("idInput")
     var createBtn = document.getElementById("createBtn")
     var loginBtn = document.getElementById("loginBtn")
     var playerInput = document.getElementById("playerInput")
     var playerId = document.getElementById("playerId")
     var playerName = document.getElementById("playerName")
     var playerNameInput = document.getElementById("playerNameInput")
     var nameBtn = document.getElementById("nameBtn")
     var createName = document.getElementById("createName")
     var nameInput = document.getElementById("nameInput")
 
 
     buttons.style.display = "none"
     playerNameInput.style.display = "none"
 
     function create() {
 
 
             
             if (idInput.value == "" || idInput.value == null) {
                 alert ("the input field is emptyyyy")
                 
             } else {
                 buttons.style.display = "block";
                 playerNameInput.style.display = "block";
                 playerInput.style.display = "none";
 
 
                 playerId.innerHTML = "player ID: " + idInput.value
                 // when player creates with an empty input field, all data in firebase gets deleted. IDK WHYYYYY
                 
                 set(ref(db, "Users/" + idInput.value), {
                     Name: idInput.value,
                     ID: idInput.value,
                     Highscore: 0
                 })
                 .catch((error) => {
                     alert(error)
                     // allows to catch any error 
                 });
             }
 
             
 
         
         
         
     }
 
     function login() {
 
 
         const dbref = ref(db);
 
        get(child(dbref, "Users/" + idInput.value))
         
        .then((snapshot) => {
            if (snapshot.exists()) {
                playerName.innerHTML = "player name: " + snapshot.val().Name;
                playerId.innerHTML = "player ID: " + snapshot.val().ID;
                buttons.style.display = "block";
                playerInput.style.display = "none";
                
            } else {
                alert("data not found");
            }
        })
 
        .catch((error) => {
            alert(error)
        })
     }
 
     function addName() {
 
         update(ref(db, "Users/" + nameInput.value), {
             Name: nameInput.value,
         })
         .then(() => {
             playerName.innerHTML = "player name: " + nameInput.value
             playerNameInput.style.display = "none"
         })
         .catch((error) => {
             alert(error);
         });
     }
 
     createBtn.addEventListener('click', create)
     loginBtn.addEventListener('click', login)
     nameBtn.addEventListener('click', addName)