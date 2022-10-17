
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyC3gb7ZaHGruMr5BgbYnNG-k1Sg8h1CsBc",
    authDomain: "geekstudio-8351c.firebaseapp.com",
    projectId: "geekstudio-8351c",
    storageBucket: "geekstudio-8351c.appspot.com",
    messagingSenderId: "161136575547",
    appId: "1:161136575547:web:4b3cc94e2f33ecd4c9481e"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();


const docRef = doc(db, "SectoresEconomicos", "Agricola");
const docSnap = await getDoc(docRef);

export function Ver(){
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}