type="module"
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAc1ixmC0rgp2NLwWk5h2lfqs66lIY4BjI",
    authDomain: "frog-game-300fa.firebaseapp.com",
    projectId: "frog-game-300fa",
    storageBucket: "frog-game-300fa.appspot.com",
    messagingSenderId: "311969586464",
    appId: "1:311969586464:web:d86a712ca4750629384b45",
    measurementId: "G-417THSVKCG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import {getDatabase, set, get, update, remove, red, child}
from "https://www.gstatic.com/firebasejs/9.9.0/firebase-database.js"

const db = getDatabase();
