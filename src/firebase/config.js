// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3A5up_jwlEL3s56StGx94QR8xCrqRioU",
  authDomain: "clothesell-7e2eb.firebaseapp.com",
  projectId: "clothesell-7e2eb",
  storageBucket: "clothesell-7e2eb.appspot.com",
  messagingSenderId: "134683994370",
  appId: "1:134683994370:web:f080db88679192777b7a1b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
