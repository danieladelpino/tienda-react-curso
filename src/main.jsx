import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIzA4SgmBmPr_YNLosee1wluS0wt9Xvpo",
  authDomain: "tienda-react-1fde0.firebaseapp.com",
  projectId: "tienda-react-1fde0",
  storageBucket: "tienda-react-1fde0.appspot.com",
  messagingSenderId: "512460666413",
  appId: "1:512460666413:web:c2286a60a9083fa91f6aa4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
