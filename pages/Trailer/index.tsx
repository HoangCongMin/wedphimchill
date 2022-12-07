import { useEffect, useState } from "react";
import Layout from "../../component/Layout";
import Popular from "../../component/Popular";
import axios from "axios";
import { useRouter } from "next/router";
import Hienthimovie from "../../component/Hienthimovie/Hienthimovie";
import {
  doc,
  getDoc,
  getDocFromCache,
  collection,
  DocumentReference,
  getDocs,
  addDoc
} from "firebase/firestore";
import { auth, db } from "../../Firebase";
import { useAuthState } from "react-firebase-hooks/auth";


function Trailer() {
  const [yeuthich, setYeuthich] = useState<any>([]);
  const [yeuthichtvshow, setYeuthichtvshow] = useState<any>([]);
  const [pepleo, setPepleo] = useState<any>([]);

  const [loggedInUser, _error] = useAuthState(auth);

  const [uid, setUid] = useState<any>(null);

  
  
  
  const dsphimall = (docrs: any) =>
  docrs
  .map((e: any) => e["id"])
  .map((e: any, i: any, final: any) => final.indexOf(e) === i && i)
  .filter((obj: any) => docrs[obj])
  .map((e: any) => docrs[e]);
  
  const setuseridphimleALL = async () => {
    try {
      const res = await getDocs(collection(db, "cart"+uid));
      const docrs = res.docs.map((doc: any) => {
        const data = doc.data();
        data.itemidname = doc.id;
        return data;
      });
      setYeuthich(dsphimall(docrs));
    } catch (error) {
      console.log(error);
    }
  };
  
  const setuseridphimleALLtvshow = async () => {
    try {
      const res = await getDocs(collection(db, "carttvshow"+uid));
      const docrs = res.docs.map((doc: any) => {
        const data = doc.data();
        data.itemidname = doc.id;
        return data;
      });
      setYeuthichtvshow(dsphimall(docrs));
    } catch (error) {
      console.log(error);
    }
  };
  
  const setpeoplealllist = async () => {
    try {
      const res = await getDocs(collection(db, "pepleolisall"+uid));
      const docrt = res.docs.map((doc: any) => {
        const data = doc.data();
        data.itemidname = doc.id;
        return data;
      });
      setPepleo(dsphimall(docrt));
    } catch (error) {
      console.log(error);
    }
  };
  
  console.log(uid);
 
  useEffect(() => {
    if(loggedInUser){
      setUid(loggedInUser.uid)
    }
    setuseridphimleALL();
    setuseridphimleALLtvshow();
    setpeoplealllist();
  }, [uid]);


  

  return (
    <Layout>
      <Hienthimovie
        type={"chi-tiet"}
        movie={yeuthich}
        GENRES={["MOVIE", "FAVORITE LIST"]}
        icon
        setuseridphimleALL={setuseridphimleALL}
        itemmovie="cart"
        
      ></Hienthimovie>
      <Hienthimovie
        type={"PhimBo"}
        movie={yeuthichtvshow}
        GENRES={["MOVIE", " TV SHOW LIST"]}
        icon
        setuseridphimleALL={setuseridphimleALLtvshow}
        itemmovie="carttvshow"
      ></Hienthimovie>
      <Hienthimovie
        type={"Dienvien"}
        movie={pepleo}
        GENRES={["MOVIE", " PEPLEO"]}
        icon
        setuseridphimleALL={setpeoplealllist}
        itemmovie="pepleolisall"
        peopleo
      ></Hienthimovie>
    </Layout>
  );
}

export default Trailer;
