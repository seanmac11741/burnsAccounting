// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyBhqerwrNoUD78rEPcARV3ToCoFPtpWRIQ',
    authDomain: 'mactechservice-2c9a1.firebaseapp.com',
    projectId: 'mactechservice-2c9a1',
    storageBucket: 'mactechservice-2c9a1.appspot.com',
    messagingSenderId: '277793122806',
    appId: '1:277793122806:web:a944383838773151f2bfd7',
    measurementId: 'G-DJQEQP1MPS'
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