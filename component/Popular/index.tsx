import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import React from "react";
// import Slider from "react-slick";
import styles from "../../styles/Popular.module.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Slyder } from "../utils";
import { BiCaretRight } from "react-icons/bi";
import { ListItem } from "@mui/material";
import { time } from "console";

function Popular({ Popular, title, skyblue, release_date,titlename }: any) {
  let style: any = {};
  if (skyblue) {
    style = { width: "100%" };
  }

  
  


  // const [Popular, setPopular] = useState([]);

  // const getPopular = async () => {
  //   try {
  //     const res = await axios.get(
  //       "https://api.themoviedb.org/3/movie/popular?api_key=3c1bf0483c51b75e06103209573b6162&language=en-US&page=1"
  //     );

  //     setPopular(res.data.results);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getPopular();
  // }, []);

  // {console.log(props)}

  const moviewrapper: any = useRef();
  const Popularitem: any = useRef();


  const handlecrollright = () => {
    const maxmoviewrapper =
      moviewrapper.current.scrollWidth - moviewrapper.current.clientWidth;

    const ma = Popularitem.current.clientWidth;
    const mb = moviewrapper.current.scrollLeft;
    const mc = moviewrapper.current;

    {
      mb < maxmoviewrapper && Slyder(mc, 250, ma, mb);
    }
  };

  const handlecrollleft = () => {
    {
      moviewrapper.current.scrollLeft > 0 &&
        Slyder(
          moviewrapper.current,
          250,
          -Popularitem.current.clientWidth,
          moviewrapper.current.scrollLeft
        );
    }
  };

  Popular.length=20

  return (
    <div style={style} className={styles.Popularwrapper}>
      {/* {recomendationsmovie&&recomendationsmovie.map((item:any)=>(<li key={item.id}>{item.id}</li>))} */}
      <h4  className={styles.titlePopular}>{title}</h4>
      <div className={styles.moviewrapper} ref={moviewrapper}>
        { Popular.map((item: any) => (
          <div key={item.id} className={styles.Popularitem} ref={Popularitem}>
            <span className={styles.month}>
              {release_date && true
                ? release_date
                : item.title || item.original_name}
            </span>
            <Link href={`/${titlename}/${item.id}`}>
              <img
                className={styles.imgpopular}
                src={`https://image.tmdb.org/t/p/original/${item.backdrop_path||item.profile_path}`}
                alt=""
              />
              <BiCaretRight className={styles.iconstart} />
              <h3 className={styles.backgroundtitilename}>
                {item.original_title || item.original_name}
              </h3>
            </Link>
          </div>
        ))}
      </div>
      <div className={styles.btnleft} onClick={handlecrollleft}>
        <FiChevronLeft />
      </div>
      <div className={styles.btnRight} onClick={handlecrollright}>
        <FiChevronRight />
      </div>
    </div>
  );
}

export default Popular;
