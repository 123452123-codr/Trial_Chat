// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCX_J_3OFvZd0Yk4zkWR_aaIaf5UMLWZGY",
    authDomain: "trial-chat-pro.firebaseapp.com",
    databaseURL: "https://trial-chat-pro-default-rtdb.firebaseio.com",
    projectId: "trial-chat-pro",
    storageBucket: "trial-chat-pro.appspot.com",
    messagingSenderId: "646594064526",
    appId: "1:646594064526:web:a3c0301e921af03d59d9df",
    measurementId: "G-YEF7ZR6HRF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
