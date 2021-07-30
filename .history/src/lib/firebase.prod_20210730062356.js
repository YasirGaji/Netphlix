import Firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import { seedDatabase } from "../seed"


const config = {
  apiKey: "AIzaSyA93IoR_H4vMr_NzTiObtdZohb75OFo8js",
    authDomain: "netphlix-d6b17.firebaseapp.com",
    projectId: "netphlix-d6b17",
    storageBucket: "netphlix-d6b17.appspot.com",
    messagingSenderId: "924256165408",
    appId: "1:924256165408:web:9294752c26f7e01c78a645"
};

const firebase = Firebase.initializeApp(config);

seedDatabase(firebase);

export { firebase };