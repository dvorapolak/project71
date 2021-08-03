import firebase from 'firebase'
require("@firebase/firestore")

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBt6lK6XeIPpmGRs-0L2Y_lxmMgY2MIYSI",
  authDomain: "project72-edce1.firebaseapp.com",
  projectId: "project72-edce1",
  storageBucket: "project72-edce1.appspot.com",
  messagingSenderId: "370741283007",
  appId: "1:370741283007:web:ab92a5b80ef17c40d9de0a",
  measurementId: "G-32JY4QYN0L"
};  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

