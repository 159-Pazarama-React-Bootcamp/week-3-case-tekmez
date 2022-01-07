import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBGlZQ_bTQM0qFLoiEnXC9GqWukj84upNY",
    authDomain: "f-auths.firebaseapp.com",
    projectId: "f-auths",
    storageBucket: "f-auths.appspot.com",
    messagingSenderId: "432882586802",
    appId: "1:432882586802:web:7fb208d768d4aba08da5ab"
  };
const app = initializeApp(firebaseConfig);
const db= getFirestore(app);
const googleAuth = getAuth();
const googleProvider = new GoogleAuthProvider();

export default db;
export {googleAuth, googleProvider};