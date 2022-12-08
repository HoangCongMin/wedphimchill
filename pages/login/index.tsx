import Head from "next/head";
import { useEffect, useState } from "react";
import app from "../../Firebase";
import styles from "../../styles/Login.module.css";
import Logo from "../../public/logo.png";
import Image from "next/image";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";

import {
  useSendSignInLinkToEmail,
  useSignInWithGoogle,
  useSignInWithFacebook,
  useSignInWithGithub,
} from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import { GrFacebookOption } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";

import {providerfacebook} from'../../Firebase'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(app);
  const [sendSignInLinkToEmail, _user, _error] = useSendSignInLinkToEmail(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithFacebook] = useSignInWithFacebook(auth);
  const [signInWithGithub] = useSignInWithGithub(auth);



  const logingitup = () => {
    signInWithGithub();
  };
  
  const loginfacebook = () => {
    signInWithPopup(auth,providerfacebook)
    .then((re)=>{
      console.log(re)
    })
    .catch((err)=>{
       console.log(err.message)
    })
  };

  const loginall = () => {
    sendSignInLinkToEmail;

    login();
  };

  const logingogle = () => {
    signInWithGoogle();
  };

  const signup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        // ..
      });
  };

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
      });
  };

  return (
    <div className={styles.loginall}>
      {/* <Head>Login</Head> */}
      <div className={styles.loginitem}>
        <Image src="/logo.png" width={171} alt="logo" height="40" />
        <input
          className={styles.loginiteminput}
          placeholder="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={styles.loginiteminput}
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className={styles.loginbutton}>
          <button onClick={loginall}>login</button>
          <button onClick={signup}> creact</button>
        </div>
        <div className={styles.loginapp}>
          <FcGoogle onClick={logingogle}></FcGoogle>
          <GrFacebookOption
            onClick={loginfacebook}
            className={styles.iconfacebook}
          ></GrFacebookOption>
          <AiFillGithub
            onClick={logingitup}
            className={styles.gitup}
          ></AiFillGithub>
        </div>
      </div>
    </div>
  );
}

export default Login;
