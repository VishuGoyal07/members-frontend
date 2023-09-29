import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyC6Ij2_vT_QMGgtWADcPUox1M_09RFf4vU",
  authDomain: "members-only-app-b7505.firebaseapp.com",
  projectId: "members-only-app-b7505",
  storageBucket: "members-only-app-b7505.appspot.com",
  messagingSenderId: "705705111678",
  appId: "1:705705111678:web:af13dc3ce793ae1478682f",
  measurementId: "G-4RTK11K8CR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
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
