
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyBahXy3xKBKc2w6cjZ6-o6ssNzlovoDnZM",
  authDomain: "native-project-5a36c.firebaseapp.com",
  projectId: "native-project-5a36c",
  storageBucket: "native-project-5a36c.appspot.com",
  messagingSenderId: "821469642273",
  appId: "1:821469642273:web:7c56817ca2583c4c3ead60",
  measurementId: "G-ZBST1LE5SV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);

