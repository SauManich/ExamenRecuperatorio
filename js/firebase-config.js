/* =====================================================
   🔥 CONFIGURACIÓN COMPARTIDA DE FIREBASE
   Reemplaza los valores con los de tu proyecto Firebase.
   Encuentra estos valores en:
   Firebase Console → Configuración del proyecto → Tus apps → Config
===================================================== */
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore }   from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

export const firebaseConfig = {
  apiKey:            "AIzaSyC5qA-m-kORCy2VtLd0fTwf_RLC1Tm7BHI",
  authDomain:        "exameneth.firebaseapp.com",
  projectId:         "exameneth",
  storageBucket:     "exameneth.firebasestorage.app",
  messagingSenderId: "410129641652",
  appId:             "1:410129641652:web:2e9b2c885f7717c92667e1"
};

export const app = initializeApp(firebaseConfig);
export const db  = getFirestore(app);
