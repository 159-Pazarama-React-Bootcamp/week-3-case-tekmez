import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import keys from './config';
const firebaseConfig = {
    apiKey: keys.api_key,
    authDomain: keys.auth_domain,
    projectId: keys.project_ıd,
    storageBucket: keys.storage_bucket,
    messagingSenderId: keys.messaging_SenderId,
    appId: keys.app_ıd
  };
const app = initializeApp(firebaseConfig);
const db= getFirestore(app);
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

export default db;
export {auth, googleProvider};