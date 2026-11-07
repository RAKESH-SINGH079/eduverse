import { initializeApp } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBfzDG-ZsvMI8sAzrA1ziCt0LZ8SgTNFzk",
    authDomain: "eduverse-32edf.firebaseapp.com",
    projectId: "eduverse-32edf",
    storageBucket: "eduverse-32edf.firebasestorage.app",
    messagingSenderId: "249121542560",
    appId: "1:249121542560:web:ef43ac9f70bda21cc394c5",
    measurementId: "G-QYT2W0015F"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);