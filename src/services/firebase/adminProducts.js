import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./config";

export const addProduct = async (productData) => {
  try {
    const docRef = await addDoc(collection(db, "products"), productData);

    return docRef.id;
  } catch (error) {
    console.error("Error adding product:", error);

    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    await deleteDoc(doc(db, "products", id));
  } catch (error) {
    console.error("Error deleting product:", error);

    throw error;
  }
};

export const updateProduct = async (id, updatedData) => {
  try {
    const productRef = doc(db, "products", id);

    await updateDoc(productRef, updatedData);

    return true;
  } catch (error) {
    console.error("Error updating product:", error);

    return false;
  }
};
