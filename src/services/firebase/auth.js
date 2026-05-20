import { signInWithEmailAndPassword, signOut } from "firebase/auth";

import { auth } from "./config";

export const loginAdmin = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );

    return userCredential.user;
  } catch (error) {
    console.error("Login Error:", error);

    throw error;
  }
};

export const logoutAdmin = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Logout Error:", error);
  }
};
