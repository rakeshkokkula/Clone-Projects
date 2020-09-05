import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA0aGt8HAfZNshQEoCtKC-zxmnXU88GbHc",
  authDomain: "instagram-clone-472b7.firebaseapp.com",
  databaseURL: "https://instagram-clone-472b7.firebaseio.com",
  projectId: "instagram-clone-472b7",
  storageBucket: "instagram-clone-472b7.appspot.com",
  messagingSenderId: "992886658797",
  appId: "1:992886658797:web:32b9d55352695bc8fe5ee4",
  measurementId: "G-QYQJ6MCX3T",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
