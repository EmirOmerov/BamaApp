import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmLBDLuSyd3Aez2oGfn5EO41k4sSm_-VE",
  authDomain: "nextjsbama.firebaseapp.com",
  projectId: "nextjsbama",
  storageBucket: "nextjsbama.appspot.com",
  messagingSenderId: "214605723166",
  appId: "1:214605723166:web:28d0aaa25a8ab917ea600f",
  measurementId: "G-7HYS3PS46R",
};

const firestore = firebase.initializeApp(firebaseConfig);

export { firestore };
