import firebase from "firebase"
import "@react-firebase/auth"

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  senderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  firebaseId: process.env.REACT_APP_FIREBASE_ID,
});

export default app