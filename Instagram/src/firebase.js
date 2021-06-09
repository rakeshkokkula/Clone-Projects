import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
//  ...credentails
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
