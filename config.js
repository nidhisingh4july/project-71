import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCbPqBQ-hKVZDuEFmnHJCJkx1SEld-qu_8",
    authDomain: "e-ride-4-181a4.firebaseapp.com",
    projectId: "e-ride-4-181a4",
    storageBucket: "e-ride-4-181a4.appspot.com",
    messagingSenderId: "166716936858",
    appId: "1:166716936858:web:cd16a85e2f64866d6b4523"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


