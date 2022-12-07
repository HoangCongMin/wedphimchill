import Link from "next/link";
import Styles from "../Hienthimovie/Hienthimovie.module.css";
import { BiCaretRight } from "react-icons/bi";
import { AiFillHome, AiFillHeart } from "react-icons/ai";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";
import { auth, db } from "../../Firebase";
import { addDoc, doc, collection, deleteDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import Image from "next/image";

function Hienthimovie({
  movie,
  GENRES,
  type,
  icon,
  setuseridphimleALL,
  idyeuthichphimle,
  itemmovie,
}: any) {
  const [movieValue, setMovieValue] = useState<any>([]);
  const [originallanguage, setoriginallanguage] = useState<any>([]);
  const [origincountry, setOrigincountry] = useState([]);
  const [date, setDate] = useState([]);

  const total = movieValue.length ? movieValue : movie;

  const [loggedInUser, _error] = useAuthState(auth);

  const [uid, setUid] = useState<any>(null);

  useEffect(() => {
    if (loggedInUser) {
      setUid(loggedInUser.uid);
    }
  }, [loggedInUser]);

  let Products;

  const addtocart = (product: any) => {
    if (uid !== null) {
      Products = product;
      addDoc(collection(db, "cart" + uid), {
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
      });
    }
  };

  const setuserphimbo = (product: any) => {
    if (uid !== null) {
      Products = product;
      addDoc(collection(db, "carttvshow" + uid), {
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
      });
    }
  };

  const setpepleoall = (product: any) => {
    if (uid !== null) {
      Products = product;
      addDoc(collection(db, "pepleolisall" + uid), {
        gender: product.gender,
        id: product.id,
        known_for_department: product.known_for_department,
        name: product.name,
        popularity: product.popularity,
        profile_path: product.profile_path,
        itemidname: "",
      });
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
      await deleteDoc(doc(db, `${itemmovie}` + uid, item.itemidname));
      setuseridphimleALL();
    } catch (error) {
      console.log(error);
    }
  };

  function hanldlesearch() {
    setMovieValue(
      movie.filter((item: any) => {
        if (item.original_language == originallanguage) return item;

        if (item.origin_country == origincountry) return item;

        if (item.first_air_date == date) return item;

        if (
          item.original_language == originallanguage &&
          item.origin_country == origincountry &&
          item.first_air_date == date
        )
          return item;
      })
    );
  }

  return (
    <div className={Styles.Hienthimoviewrapperall}>
      <div className={Styles.filterall}>
        <select
          className={Styles.filteitem}
          onChange={(e: any) => setoriginallanguage(e.target.value)}
          name=""
          id=""
        >
          {movie.map((item: any) => (
            <option
              value={item.original_language || item.origin_country}
              key={item.id}
            >
              {item.original_language || item.origin_country}
            </option>
          ))}
        </select>
        <select
          className={Styles.filteitem}
          onChange={(e: any) => setOrigincountry(e.target.value)}
          name=""
          id=""
        >
          {movie.map((item: any) => (
            <option
              value={item.origin_country || item.original_language}
              key={item.id}
            >
              {item.origin_country || item.original_language}
            </option>
          ))}
        </select>
        <select
          className={Styles.filteitem}
          onChange={(e: any) => setDate(e.target.value)}
          name=""
          id=""
        >
          {movie.map((item: any) => (
            <option
              value={item.first_air_date || item.release_date}
              key={item.id}
            >
              {item.first_air_date || item.release_date}
            </option>
          ))}
        </select>
        <button className={Styles.buttonitem} onClick={hanldlesearch}>
          search
        </button>
      </div>
      <div className={Styles.titlehome}>
        <div className={Styles.titlehomeone}>
          <AiFillHome></AiFillHome>
          {GENRES.map((item: any, index: any) => (
            <div className={Styles.ptitle} key={index}>
              <p>{item}</p> <IoIosArrowForward></IoIosArrowForward>
            </div>
          ))}
        </div>
      </div>
      <div className={Styles.Hienthimoviewrapper}>
        {total.map((item: any) => (
          <div className={Styles.Hienthimoviewrapperitem} key={item.id}>
            <div className={Styles.titlespannumnerone}>
              <div className={Styles.titlespan}>
                <p className={Styles.titlep}>
                  {item.name || item.original_title}
                </p>
              </div>
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
            </div>
            <Link href={`/${type}/${item.id}`}>
              <img
                className={Styles.imgmage}
                src={`https://image.tmdb.org/t/p/original/${
                  item.backdrop_path || item.profile_path
                }`}
                alt=""
              />
              <p className={Styles.title}>{item.name || item.original_title}</p>
              <BiCaretRight className={Styles.icon}></BiCaretRight>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hienthimovie;
