// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeygfYceHou7BMfIv6BFcUr2tr2A52prQ",
  authDomain: "monk-tv-d1a07.firebaseapp.com",
  projectId: "monk-tv-d1a07",
  storageBucket: "monk-tv-d1a07.appspot.com",
  messagingSenderId: "251352049496",
  appId: "1:251352049496:web:92d03220438d07d7eb272d",
  measurementId: "G-NT8QBCPCV7",
};
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();
const analytics = getAnalytics(app);
export default app;
export { auth };
export { db };
export { analytics };

function getFirestore() {
  throw new Error("Function not implemented.");
}

function getAuth() {
  throw new Error("Function not implemented.");
}
