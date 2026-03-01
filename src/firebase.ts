import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/,
  authDomain: "com-heavyquest-app.firebaseapp.com",
  projectId: "com-heavyquest-app",
  storageBucket: "com-heavyquest-app.firebasestorage.app",
  messagingSenderId: "874202168241",
  appId: "1:874202168241:web:bb5d2f227c39236a32db90"
};

const app = initializeApp(firebaseConfig);

// 🔥 QUI CREIAMO FIRESTORE
export const db = getFirestore(app);
