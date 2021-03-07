import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDK0w4b3_xwmAxVSsFBggknEPvTWSur4Fo",
  authDomain: "my-lms-tuit-uz.firebaseapp.com",
  projectId: "my-lms-tuit-uz",
  storageBucket: "my-lms-tuit-uz.appspot.com",
  messagingSenderId: "221075715005",
  appId: "1:221075715005:web:6c5bf931812e6aec9398d4",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
