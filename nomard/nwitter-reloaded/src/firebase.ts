
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCA2GeewtX9sCqZ5BncPskXJsyRrn42Bl4",
  authDomain: "nwitter-reloaded-bfe9c.firebaseapp.com",
  projectId: "nwitter-reloaded-bfe9c",
  storageBucket: "nwitter-reloaded-bfe9c.appspot.com",
  messagingSenderId: "335597108666",
  appId: "1:335597108666:web:ee72edc353145ea873f183"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const storage = getStorage(app)

export const db = getFirestore(app)