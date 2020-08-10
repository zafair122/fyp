// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCOjEryDXIA_DobtuJQGvNjYZtv1rHHOhA",
  authDomain: "al-jue-food.firebaseapp.com",
  databaseURL: "https://al-jue-food.firebaseio.com",
  projectId: "al-jue-food",
  storageBucket: "al-jue-food.appspot.com",
  messagingSenderId: "568323562285",
  appId: "1:568323562285:web:d67d4b48b2fbd8c95651a4",
  measurementId: "G-PFXR0RNHLK",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
