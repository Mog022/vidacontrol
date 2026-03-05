import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCdXsLgjODMa4xv42qiTXlpxoN8NyCWm3s",
  authDomain: "vidacontrol-5e9fb.firebaseapp.com",
  projectId: "vidacontrol-5e9fb",
  storageBucket: "vidacontrol-5e9fb.firebasestorage.app",
  messagingSenderId: "802011236913",
  appId: "1:802011236913:web:daf33be5d11c0159352310"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
