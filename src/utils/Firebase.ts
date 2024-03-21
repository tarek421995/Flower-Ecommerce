import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

// const firebaseConfig = {
//   apiKey: "AIzaSyAcdzlZMD01e-x9teKIWJD4Rj8IymOLbiA",
//   authDomain: "socialapp-9b83f.firebaseapp.com",
//   projectId: "socialapp-9b83f",
//   storageBucket: "socialapp-9b83f.appspot.com",
//   messagingSenderId: "635004374736",
//   appId: "1:635004374736:web:b02daf40b9b19856f9d8d5",
//   measurementId: "G-PS5QJC1GDC"
// };

const firebaseConfig = {
  apiKey: "AIzaSyDFfBNyXVgmfr3uK_jKlblieSlpD3aRzE8",
  authDomain: "ecommercenext-2a599.firebaseapp.com",
  projectId: "ecommercenext-2a599",
  storageBucket: "ecommercenext-2a599.appspot.com",
  messagingSenderId: "287511849567",
  appId: "1:287511849567:web:a3beb57d3e90aaaf0b49ea"
};


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app , "gs://ecommercenext-2a599.appspot.com");

