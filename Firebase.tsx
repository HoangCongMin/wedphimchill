// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import {getFirestore} from'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
import { getApps,getApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/analytics";
import { EmailAuthProvider, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyCT7k4PVS93yQS_68oaBvGFofttPRFOBGw",
//     authDomain: "wedphimchill123.firebaseapp.com",
//     projectId: "wedphimchill123",
//     storageBucket: "wedphimchill123.appspot.com",
//     messagingSenderId: "561067670442",
//     appId: "1:561067670442:web:a1896625356a71b41c89d3",
//     measurementId: "G-GKF7MK5TP0"
// };

// // Initialize Firebase
// const app = getApps().length? getApp(): initializeApp(firebaseConfig)
// const db= getFirestore(app)
// const auth=getAuth(app)
// const provider= new EmailAuthProvider()
// const providergoogle= new GoogleAuthProvider()
// const providerfacebook= new FacebookAuthProvider()
// const providergitup= new GithubAuthProvider()

// // const analytics = getAnalytics(app);

// export default app

// export{db,auth,provider,providergoogle,providerfacebook,providergitup}



import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCgPbTFrZMv2J_fb0rNFUki0veHOTkkqs0",
  authDomain: "apifilebase.firebaseapp.com",
  projectId: "apifilebase",
  storageBucket: "apifilebase.appspot.com",
  messagingSenderId: "650158069250",
  appId: "1:650158069250:web:854154656992dca8dd391b"
};

 const app = getApps().length? getApp(): initializeApp(firebaseConfig)
const db= getFirestore(app)
const auth=getAuth(app)
const provider= new EmailAuthProvider()
const providergoogle= new GoogleAuthProvider()
const providerfacebook= new FacebookAuthProvider()
const providergitup= new GithubAuthProvider()

// const analytics = getAnalytics(app);

export default app

export{db,auth,provider,providergoogle,providerfacebook,providergitup}