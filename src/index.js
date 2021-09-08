import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAH6gc_UYpTbBiwrfpXCCigM1iaouE-t2k",
  authDomain: "react-chat-app-cf5f5.firebaseapp.com",
  databaseURL: "https://react-chat-app-cf5f5-default-rtdb.firebaseio.com",
  projectId: "react-chat-app-cf5f5",
  storageBucket: "react-chat-app-cf5f5.appspot.com",
  messagingSenderId: "405755936751",
  appId: "1:405755936751:web:5272d5078f495c1b13001a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
