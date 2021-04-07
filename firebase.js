import firebase from './firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAJxG_6rwXA3IEV6TytBagq0vloKreoKY",
  authDomain: "whatsapp2-cbcb1.firebaseapp.com",
  projectId: "whatsapp2-cbcb1",
  storageBucket: "whatsapp2-cbcb1.appspot.com",
  messagingSenderId: "778987569906",
  appId: "1:778987569906:web:a2320007fb6cf96c04866b",
  measurementId: "G-RZYTXSETY5"
};

//initiate the app. 
// check if the app has been initiatlised, if already initiated, just go ahead with the initialised one or otherwise initiate the app
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig): firebase.app();

const db = app.firestore();  // access the database
const auth = app.auth();  // access the authentication
const provider = new firebase.auth.GoogleAuthProvider();
export{db, auth, provider};