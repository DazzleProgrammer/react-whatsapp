import {firebase} from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyDYfvKpl3XdAXbwJ7VGac5gRdI-0itx5lU",
  authDomain: "dazzle-whatsapp.firebaseapp.com",
  projectId: "dazzle-whatsapp",
  storageBucket: "dazzle-whatsapp.appspot.com",
  messagingSenderId: "793647305988",
  appId: "1:793647305988:web:0c475ef2bfe3ce1ecf6c51",
  measurementId: "G-TGE7KFMGKX"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;