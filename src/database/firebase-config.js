import { initializeApp } from "firebase/app/dist/app";
import { getFirestore } from "firebase/firestore/dist/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCX_0KOo5eAvhA_cEWglTjNC2VNz6djOJk",
  authDomain: "sartori-corretora.firebaseapp.com",
  projectId: "sartori-corretora",
  storageBucket: "sartori-corretora.appspot.com",
  messagingSenderId: "365210902023",
  appId: "1:365210902023:web:1686f95284688738ed14a2",
  measurementId: "G-7WXKRERN87"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };