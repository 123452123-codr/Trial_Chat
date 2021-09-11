// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-analytics.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-database.js";

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

var message = document.getElementById('m');
var text = document.getElementById('t').value;
var send = document.getElementById('s');

send.addEventListener('click', function(){
    var oldscrollheight = $("#message")[0].scrollheight - 20;

    const db = getDatabase();
    set(ref(db, 'Chat'), {
        Name: text
    });

    onValue(ref(db, 'Chat'), (snapshot) => {
        const data = snapshot.val();
        var newMessage = document.createElement("li");
        newMessage.classList.add("list-group");
        newMessage.innerHTML = data.value;
        var newscrollheight = $("#message")[0].scrollheight = 20;
        if(newscrollheight > oldscrollheight)
        {
            $("#message").animate({scrollTop: newscrollheight}, 'normal');
            message.appendChild(newMessage);
            text.value = "";
        }
    });
});
