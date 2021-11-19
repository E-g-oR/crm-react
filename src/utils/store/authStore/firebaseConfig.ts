import 'firebase/auth';
import 'firebase/database';
  
const env = process.env;
const firebaseConfig = {
  apiKey: env.REACT_APP_FIREBASE_API_KEY,
  authDomain: env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.REACT_APP_FIREBASE_APP_ID,
  databaseURL: env.REACT_APP_FIREBASE_DATABASE_URL,
  measurementId: env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

export default firebaseConfig;