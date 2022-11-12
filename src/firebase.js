// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";
// import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBo0GIKDVGCl-s7TnzexSKAU0GQ-YD9Xx8",
  authDomain: "chatapp-be090.firebaseapp.com",
  projectId: "chatapp-be090",
  storageBucket: "chatapp-be090.appspot.com",
  messagingSenderId: "327736832776",
  appId: "1:327736832776:web:7254c6a7f56d4ec483f2bd",
};

// export const app = initializeApp(firebaseConfig);
// export const auth = getAuth();
// export const storage = getStorage();
// export const db = getFirestore();
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
