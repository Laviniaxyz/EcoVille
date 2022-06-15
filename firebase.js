// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPrLOYjfxBAPRp0Q44bnJl60YACTudxUk",
  authDomain: "eco-ville-82600.firebaseapp.com",
  projectId: "eco-ville-82600",
  storageBucket: "eco-ville-82600.appspot.com",
  messagingSenderId: "287894196144",
  appId: "1:287894196144:web:97744f1531b06e46511075",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
export { auth };
