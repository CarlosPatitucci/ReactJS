import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi14EFzJnO32R-auAsXwfS590FdXK3fh8",
  authDomain: "proyecto-final-patitucci.firebaseapp.com",
  projectId: "proyecto-final-patitucci",
  storageBucket: "proyecto-final-patitucci.appspot.com",
  messagingSenderId: "134407194156",
  appId: "1:134407194156:web:052b8001e4742bdf63b389"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)