// firebase-init.js
// Import the functions you need from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";


// Your Firebase configuration (consider moving sensitive info to Glitch’s .env file)
const firebaseConfig = {
  apiKey: "AIzaSyD1SwwS89dP2-r_Xk9WMSoCerJ9FdO_5Ys",
  authDomain: "hillelsigninv5.firebaseapp.com",
  projectId: "hillelsigninv5",
  storageBucket: "hillelsigninv5.firebasestorage.app",
  messagingSenderId: "496141742753",
  appId: "1:496141742753:web:166f135d7914aa9c09b6e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);