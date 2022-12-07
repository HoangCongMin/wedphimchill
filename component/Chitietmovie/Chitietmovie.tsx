import styles from "../../styles/Chitiet.module.css";
import {
  AiFillHome,
  AiOutlineRight,
  AiFillStar,
  AiFillYoutube,
} from "react-icons/ai";
import Link from "next/link";
import Popularitem from "../../component/Popular";
import { useEffect, useState } from "react";
import Trailervideo from "../Trailervideo";

function Chitietmovie({
  moviedetail,
  recomendations,
  trending,
  video,
  KnownFor,
  gender,
}: any) {
  function timeConvert() {
    if (moviedetail.runtime || moviedetail.last_episode_to_air) {
      var num = moviedetail.runtime || moviedetail.last_episode_to_air.runtime;
      var hours = num / 60;
      var rhours = Math.floor(hours);
      var minutes = (hours - rhours) * 60;
      var rminutes = Math.round(minutes);
      return num > 60 && true
        ? rhours + " hour and " + rminutes + " minute."
        : num + " minutes ";
    } else {
      return "DANG CAP NHAT";
    }
  }

  const [trailermovie, setTrailermovie] = useState(false);

  const handletrailer = () => setTrailermovie(true);

  return (
    <div className={styles.chitietcontentall}>
      <div className={styles.breadcrumb}>
        <li className={styles.breadcrumbitem}>
          <AiFillHome />
        </li>
        <li className={styles.breadcrumbitem}>
          <p>xem phim</p>

          <AiOutlineRight />
        </li>

        {moviedetail.genres &&
          moviedetail.genres.map((item: any) => (
            <li className={styles.breadcrumbitem} key={item.id}>
              {item.name} <AiOutlineRight />{" "}
            </li>
          ))}
        <li className={styles.breadcrumbitem}>{moviedetail.original_title}</li>
      </div>
      <div className={styles.chitietcontent}>
        <img
          className={styles.imgchitet}
          src={`https://image.tmdb.org/t/p/original/${
            moviedetail.backdrop_path || moviedetail.profile_path
          }`}
          alt=""
        />

        <div className={styles.chitietthongtin}>
          <img
            className={styles.chitietthongtinimg}
            src={`https://image.tmdb.org/t/p/original/${
              moviedetail.backdrop_path || moviedetail.profile_path
            }`}
          />
          <div className={styles.titleh1}>
            <h1>{moviedetail.original_title || moviedetail.name}</h1>
            <h2>
              {moviedetail.release_date ||
                moviedetail.last_air_date ||
                moviedetail.birthday}
            </h2>

            <div className={styles.genres}>
              <label>genres:</label>
              {moviedetail.genres &&
                moviedetail.genres.map((items: any) => (
                  <span key={items.id}>{items.name} ,</span>
                ))}
            </div>
            <button onClick={handletrailer} className={styles.trailermovie}>
              <AiFillYoutube></AiFillYoutube>
              Trailer
            </button>
          </div>
        </div>
      </div>
      <div className={styles.revewialltotal}>
        <div className={styles.revewiall}>
          <ul>
            <p>
              <label>GENRES:</label>
              {moviedetail.genres &&
                moviedetail.genres.map((items: any) => (
                  <span key={items.id}>{items.name} ,</span>
                ))}
            </p>
            <p>
              <label>releasedate:</label>
              <span>
                {moviedetail.release_date || moviedetail.last_air_date}
              </span>
            </p>
          </ul>
          <ul>
            <p>
              <label>TIME:</label>
              <span>{timeConvert()}</span>
            </p>
            <p>
              <label>production companies:</label>
              <span>
                {moviedetail.production_companies &&
                  moviedetail.production_companies.map((item: any) => (
                    <span key={item.id}>{item.name} ,</span>
                  ))}
              </span>
            </p>
          </ul>
          <ul>
            <p className={styles.votestart}>
              <label>vote average:</label>
              <span className={styles.votestartitem}>
                <AiFillStar></AiFillStar>
                {moviedetail.vote_average || moviedetail.popularity}
              </span>
            </p>
            <p>
              <label>production countries:</label>
              <span>
                {moviedetail.production_countries &&
                  moviedetail.production_countries.map(
                    (item: any, index: any) => (
                      <span key={index}>{item.name}</span>
                    )
                  )}
                {moviedetail.place_of_birth}
              </span>
            </p>
          </ul>
        </div>
        <div className={styles.contentblock}>
          <h3 className={styles.titleovervewi}>overview and review</h3>
          <p className={styles.contentvewi}>
            {moviedetail.overview || moviedetail.biography}
          </p>
        </div>
        <div className={styles.tagname}>
          <h3 className={styles.titleovervewi}>tags</h3>
          <h3>
            <Link href={`/srearcresults?q=${moviedetail.original_title}`}>
              {moviedetail.original_title || moviedetail.name}
            </Link>
          </h3>
        </div>
      </div>
      <div className={styles.Recommendationsall}>
        <div className={styles.Recommendations}>
          <Popularitem
            release_date={moviedetail.release_date || moviedetail.last_air_date}
            skyblue
            titlename={
              moviedetail.original_title == undefined ? "PhimBo" : "chi-tiet"
            }
            title="Recommendations"
            Popular={recomendations}
          ></Popularitem>
        </div>
      </div>

      <div className={styles.Recommendationsalltow}>
        <div className={styles.Recommendations}>
          <Popularitem
            titlename={"chi-tiet"}
            skyblue
            title="trending"
            Popular={trending}
          ></Popularitem>
        </div>
      </div>
      <div>
        {trailermovie && (
          <Trailervideo
            hienthitrailer={setTrailermovie}
            video={video}
          ></Trailervideo>
        )}
      </div>
    </div>
  );
}
export default Chitietmovie;
