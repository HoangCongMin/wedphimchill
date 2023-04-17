import "../styles/globals.css";
import type { AppProps } from "next/app";
import Login from "./login";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../Firebase";
import { useEffect } from "react";
import { serverTimestamp, setDoc, doc } from "firebase/firestore";

import Head from "next/head";
import { style } from "@mui/system";

export default function App({ Component, pageProps }: AppProps) {
  const [loggedInUser, _error] = useAuthState(auth);

  const setuserid = async () => {
    try {
      await setDoc(
        doc(db as any, "user", loggedInUser?.uid as any),
        {
          uid: loggedInUser?.uid,
          lastSeen: serverTimestamp(),
        },
        { merge: true }
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (loggedInUser) {
      setuserid();
      console.log(loggedInUser);
    }
  }, [loggedInUser]);

  if(!loggedInUser)return<Login></Login>


  return <Component {...pageProps} />

}
