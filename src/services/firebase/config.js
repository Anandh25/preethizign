import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCCtq7hzslQVzzYTtx3-G-VTFr6BByHc8k",
  authDomain: "preethizign.firebaseapp.com",
  projectId: "preethizign",
  storageBucket: "preethizign.firebasestorage.app",
  messagingSenderId: "336995312974",
  appId: "1:336995312974:web:52b1ae435e79be94dfea1f",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
