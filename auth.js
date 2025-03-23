import { auth } from "./firebase-init.js";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

// Login Function
async function login(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = "log.html"; // Redirect on success
  } catch (error) {
    alert("Login failed: " + error.message);
  }
}

// Logout Function
function logout() {
  signOut(auth)
    .then(() => {
      // Add a small delay before redirect to let Firebase process the signout
      setTimeout(() => {
        window.location.href = "index.html"; // Redirect to home after logout
      }, 300);
    })
    .catch((error) => {
      alert("Logout failed: " + error.message);
    });
}

// Check Authentication State
function requireAuth() {
  onAuthStateChanged(auth, (user) => {
    if (!user || user.isAnonymous) {
      window.location.href = "admin-login.html"; // Redirect anonymous users to admin login
    }
  });
}

export { requireAuth, login, logout };