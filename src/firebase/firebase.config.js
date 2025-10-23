import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCrr9Gs6Lqs9TkNvP5HVhe8k-wIHHnWeM4",
  authDomain: "skills-swap-189eb.firebaseapp.com",
  projectId: "skills-swap-189eb",
  storageBucket: "skills-swap-189eb.firebasestorage.app",
  messagingSenderId: "408153106361",
  appId: "1:408153106361:web:f79f4ee7819af529b33868"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export default app;