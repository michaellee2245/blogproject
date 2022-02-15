// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIHdaeBXF5KWK9wCYqGAYRqcKEAlkWxJI",
  authDomain: "blogproject-b264c.firebaseapp.com",
  projectId: "blogproject-b264c",
  storageBucket: "blogproject-b264c.appspot.com",
  messagingSenderId: "409682803972",
  appId: "1:409682803972:web:197cc4951884795e132451"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
