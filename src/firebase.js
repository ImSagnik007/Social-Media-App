import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAUp4xQuz-YC5njU2QQQI8aeGZXGCZNlFo",
    authDomain: "facebook-clone-2e824.firebaseapp.com",
    projectId: "facebook-clone-2e824",
    storageBucket: "facebook-clone-2e824.appspot.com",
    messagingSenderId: "539137372330",
    appId: "1:539137372330:web:53a1fabfbe2698c1b320d3",
    measurementId: "G-RT4EQPDDLW"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;
