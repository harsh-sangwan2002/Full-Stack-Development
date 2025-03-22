// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/storage'
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAlsgiwnG-TeNZQnAR7bEd9-DiDZSS0uTs",
    authDomain: "fir-demo-f2f33.firebaseapp.com",
    projectId: "fir-demo-f2f33",
    storageBucket: "fir-demo-f2f33.firebasestorage.app",
    messagingSenderId: "999369582956",
    appId: "1:999369582956:web:3bcb54a0d873e2f1d5ab49",
    measurementId: "G-B77JNM75W9"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
getAnalytics(app);

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
    users: firestore.collection('users'),
}

export const storage = firebase.storage();