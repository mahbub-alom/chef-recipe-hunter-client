// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCv0qo3JjSYuVAJNxT5yqoKYItD5UGBI2o",
    authDomain: "gourmet-place-chef.firebaseapp.com",
    projectId: "gourmet-place-chef",
    storageBucket: "gourmet-place-chef.appspot.com",
    messagingSenderId: "92947908037",
    appId: "1:92947908037:web:94cfd666079928aa20f7ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;