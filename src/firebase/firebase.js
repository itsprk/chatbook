import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC7BnUMNRDRVDMiV-kPRgX_c546NEjiseo",
  authDomain: "whatsapp-clone-38891.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-38891.firebaseio.com",
  projectId: "whatsapp-clone-38891",
  storageBucket: "whatsapp-clone-38891.appspot.com",
  messagingSenderId: "537354404348",
  appId: "1:537354404348:web:a444699b08c45b4d977279",
  measurementId: "G-H7RFKRPN34",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
