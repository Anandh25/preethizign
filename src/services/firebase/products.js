import {
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

import { db } from "./config";

// GET ALL PRODUCTS
export const getProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));

    const products = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return products;
  } catch (error) {
    console.error("Error fetching products:", error);

    return [];
  }
};

// GET SINGLE PRODUCT
export const getSingleProduct = async (id) => {
  try {
    const docRef = doc(db, "products", id);

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data(),
      };
    }

    return null;
  } catch (error) {
    console.error("Error fetching product:", error);

    return null;
  }
};

// ADD PRODUCT
export const addProduct = async (productData) => {
  try {
    const docRef = await addDoc(collection(db, "products"), productData);

    return docRef.id;
  } catch (error) {
    console.error("Error adding product:", error);

    throw error;
  }
};

// DELETE PRODUCT
export const deleteProduct = async (id) => {
  try {
    const productRef = doc(db, "products", id);

    await deleteDoc(productRef);
  } catch (error) {
    console.error("Error deleting product:", error);

    throw error;
  }
};

// UPDATE PRODUCT
export const updateProduct = async (id, updatedData) => {
  try {
    const productRef = doc(db, "products", id);

    await updateDoc(productRef, updatedData);
  } catch (error) {
    console.error("Error updating product:", error);

    throw error;
  }
};
