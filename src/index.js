import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './firebase/config';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVu_YNOnH0FvxvQjzKOoJkzBRwhACrYok",
  authDomain: "rostagnoreact-54e20.firebaseapp.com",
  projectId: "rostagnoreact-54e20",
  storageBucket: "rostagnoreact-54e20.appspot.com",
  messagingSenderId: "939213339466",
  appId: "1:939213339466:web:c792e158ba402896ccdfb3"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
