import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBFSSFrRHGHgL4bPBGWBACj_83-kZi7PIM",
  authDomain: "lemonads-9fbfb.firebaseapp.com",
  projectId: "lemonads-9fbfb",
  storageBucket: "lemonads-9fbfb.appspot.com",
  messagingSenderId: "564630840177",
  appId: "1:564630840177:web:ad6b15ace8bef6cde00cd0",
  measurementId: "G-5JN8F6Y7H0",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
provider.setCustomParameters({
  prompt: "select_account",
});

export const getCities = async () => {
  const citiesCol = collection(db, "cities");
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => {
    console.log(doc.data());
    doc.data();
  });
  return cityList;
};

export const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log(user);
    return user;
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (email, password) => {
  console.log(email, password);
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log(user);
    return user;
  } catch (error) {
    console.log(error);
  }
};

export const getUser = () => {
  console.log(auth.currentUser);
  return auth.currentUser;
};

export const logoutUser = () => {
  auth.signOut();
};

export const loginWithGoogle = async () => {
  try {
    const userCredential = await signInWithPopup(auth, provider);
    const user = userCredential.user;
    console.log(user);
    return user;
  } catch (error) {
    console.log(error);
  }
};
