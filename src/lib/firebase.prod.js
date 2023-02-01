import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { seedDatabase } from '../seed';


// Seed file import from database 👇🏼


// Config here 👇🏼

const config = {
  apiKey: "AIzaSyAOHsghBRQ471qXhODR7Ew03rjSafjZg4w",
  authDomain: "netphlix-d853e.firebaseapp.com",
  projectId: "netphlix-d853e",
  storageBucket: "netphlix-d853e.appspot.com",
  messagingSenderId: "315180748591",
  appId: "1:315180748591:web:a324ab57b2d49dae521bda",
  measurementId: "G-L86PL67QNP"
};

const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);

export { firebase };