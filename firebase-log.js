// firebase-log.js
import {
  collection,
  addDoc,
  query,
  where,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";
import { db } from "./firebase-init.js";

// This function logs a sign-in entry to Firestore,
// checking for duplicates within the last 10 seconds.
export async function logSignInToFirebase(data) {
  
  try {
    const signInCollection = collection(db, "signIns");
    const tenSecondsAgo = Date.now() - 10000;
    const q = query(
      signInCollection,
      where("email", "==", data.email),
      where("timestamp", ">", tenSecondsAgo)
    );
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      // Duplicate found – do not log.
      return false;
    }
    await addDoc(signInCollection, data);
    return true;
  } catch (error) {
    console.error("Error logging sign-in:", error);
    return false;
  }
}