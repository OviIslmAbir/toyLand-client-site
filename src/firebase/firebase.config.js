import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAThwV6Z-GtDWe2kGswEE_7MOSkn6wSGCc",
  authDomain: "toy-land-28b08.firebaseapp.com",
  projectId: "toy-land-28b08",
  storageBucket: "toy-land-28b08.appspot.com",
  messagingSenderId: "125298593116",
  appId: "1:125298593116:web:59952734f0409ba9e00599"
};

const app = initializeApp(firebaseConfig);
export default app