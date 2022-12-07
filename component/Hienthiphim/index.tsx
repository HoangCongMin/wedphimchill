import { Numbers } from "@mui/icons-material";
import Link from "next/link";
import { useEffect, useState } from "react";
import Styles from "../Hienthiphim/Hienthiphim.module.css";
import { AiFillHome, AiFillHeart } from "react-icons/ai";
import { BiCaretRight } from "react-icons/bi";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../Firebase";
import { serverTimestamp, setDoc, doc ,addDoc,collection,deleteDoc} from "firebase/firestore";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { RiDeleteBack2Fill } from "react-icons/ri";




function Hienthiphim({ trending, title, genres, type,setuseridphimleALL,itemmovie ,icon}: any) {
  const [items, setItem] = useState<any>([]);
  const [iditems, setIditems] = useState<any>([]);

  const [loggedInUser, _error] = useAuthState(auth);
  const [uid, setUid] = useState<any>(null);


  const total = iditems > 0 ? items : trending;

  total.length = 11;

  const handle = (item:any) => {
    setIditems(item.id)
    setItem(trending.filter((item: any) => item.genre_ids.includes(iditems)));
  };




  let Products

  const addtocart = (product: any) => {
    if (uid !== null) {
      Products=product
      addDoc(collection(db, "cart" + uid),{
        backdrop_path: product.backdrop_path,
        genre_ids: product.genre_ids,
        id: product.id,
        original_language: product.original_language,
        original_title: product.original_title || product.name,
        overview: product.overview,
        popularity: product.popularity,
        poster_path: product.poster_path,
        release_date: product.release_date || product.first_air_date,
        vote_average: product.vote_average,
        vote_count: product.vote_count,
        itemidname: "",

      }
      ) 
    }
  };


  const setuserphimbo = (product: any) => {
    if (uid !== null) {
      Products=product
      addDoc(collection(db, "carttvshow" + uid),{
        backdrop_path: product.backdrop_path,
        genre_ids: product.genre_ids,
        id: product.id,
        original_language: product.original_language,
        original_title: product.original_title || product.name,
        overview: product.overview,
        popularity: product.popularity,
        poster_path: product.poster_path,
        release_date: product.release_date || product.first_air_date,
        vote_average: product.vote_average,
        vote_count: product.vote_count,
        itemidname: "",

      }
      ) 
    }
  };

  const setpepleoall = (product: any) => {
    if (uid !== null) {
      Products=product
      addDoc(collection(db, "pepleolisall" + uid),{
        gender: product.gender,
        id: product.id,
        known_for_department: product.known_for_department,
        name: product.name,
        popularity: product.popularity,
        profile_path: product.profile_path,
        itemidname: "",

      }
      ) 
    }
  };

  const setitemusermovie = (item: any) => {
    if (type === "chi-tiet") {
      addtocart(item);
    }
    if (type === "PhimBo") {
      setuserphimbo(item);
    }
    if (type === "Dienvien") {
      setpepleoall(item);
    }
  };

  const revomeitemphim = async (item: any) => {
    try {
      await deleteDoc(doc(db, `${itemmovie}`+uid, item.itemidname));
      setuseridphimleALL();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
   
    if(loggedInUser){
      setUid(loggedInUser.uid)
    }
  }, [iditems,loggedInUser]);

  return (
    <div className={Styles.Hienthiphimwrapper}>
      <h3 className={Styles.Hienthiphimwrappertitle}>{title}</h3>
      <div className={Styles.titlehienthi}>
        {genres.map((item: any) => (
          <button
            className={Styles.active}
            onClick={() => handle(item)}
            key={item.id}
          >
            <p>{item.name}</p>
          </button>
        ))}
      </div>

      <div className={Styles.itemall}>
        <div className={Styles.itemonelage}>
          <div className={Styles.titlespanlagenew}>
            <p className={Styles.titlespanlage}>
              {(total[0] && total[0].title) ||
                (total[0] && total[0].original_name)}
            </p>
          </div>
          <Link href={`/${type}/${total[0] && total[0].id}`}>
            <img
              src={`https://image.tmdb.org/t/p/original/${
                total[0] && total[0].backdrop_path
              }`}
              alt=""
            />
            <BiCaretRight className={Styles.iconstartlage} />

            <p className={Styles.totaltitlelage}>
              {(total[0] && total[0].title) ||
                (total[0] && total[0].original_name)}
            </p>
          </Link>
        </div>
        {total.map((item: any) => (
          <div className={Styles.itemone} key={item.id}>
            <div className={Styles.titlespannew}>
              <p className={Styles.titlespan}>
                {item.title || item.original_name}
              </p>
            </div>{" "}
            
            <div className={Styles.titlespanicon}>
                <BiDotsHorizontalRounded></BiDotsHorizontalRounded>
                <div className={Styles.titlespaniconitem}>
                  <AiFillHeart
                    onClick={() => {
                      setitemusermovie(item);
                    }}
                  ></AiFillHeart>
                  {icon && (
                    <RiDeleteBack2Fill
                      onClick={() => {
                        revomeitemphim(item);
                      }}
                    ></RiDeleteBack2Fill>
                  )}
                </div>
              </div>
            <Link href={`/${type}/${item.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                alt=""
              />
              <BiCaretRight className={Styles.iconstart} />

              <p className={Styles.totaltitle}>
                {item.title || item.original_name}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hienthiphim;
