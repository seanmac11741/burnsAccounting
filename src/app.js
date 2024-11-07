// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCRIkG35xLBTDKkrUNh-3LvEtABgGxC8sc",
    authDomain: "burnsaccounting.firebaseapp.com",
    projectId: "burnsaccounting",
    storageBucket: "burnsaccounting.firebasestorage.app",
    messagingSenderId: "257944877475",
    appId: "1:257944877475:web:38f5ae788625cc6d4f8216",
    measurementId: "G-C2TRT8VM7G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log('app.js running...');
console.log(analytics);


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        //  else {
        //     //this will allow the animation to happen again after it is off-screen
        //     entry.target.classList.remove('show');
        // }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));