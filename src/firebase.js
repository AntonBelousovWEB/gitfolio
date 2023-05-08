
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GithubAuthProvider, getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "gitfolio-95d87.firebaseapp.com",
  projectId: "gitfolio-95d87",
  storageBucket: "gitfolio-95d87.appspot.com",
  messagingSenderId: "816096534127",
  appId: "1:816096534127:web:9d276307617d61de85379a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const githubProvider = new GithubAuthProvider();
export const auth = getAuth(app);

export default db;