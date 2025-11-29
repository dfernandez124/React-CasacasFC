// Import Firebase core
import { initializeApp } from "firebase/app";

// Import Firestore
import { getFirestore } from "firebase/firestore";

// Configuración de tu proyecto
const firebaseConfig = {
  apiKey: "AIzaSyCiQJso9CXSeP5fKGAkC27CY_CL1fnQTtY",
  authDomain: "casacasfc-15553.firebaseapp.com",
  projectId: "casacasfc-15553",
  storageBucket: "casacasfc-15553.firebasestorage.app",
  messagingSenderId: "520436621886",
  appId: "1:520436621886:web:0a1018841414e80ba2e76f"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar Firestore
export const db = getFirestore(app);