import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import Layout from "../../component/Layout";
import { useRouter } from "next/router";
import Hienthimovie from "../../component/Hienthimovie/Hienthimovie";

function srearcresults() {
  const [movie, setMovie] = useState<any>([]);
  const [moviebo, setMoviebo] = useState<any>([]);
  const [pepleoall, setPepleoall] = useState<any>([]);

  const router = useRouter();

  const getMovieall = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=3c1bf0483c51b75e06103209573b6162&language=en-US&query=${router.query.q}&page=1&include_adult=false`
      );
      setMovie(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const getMovieboall = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/tv?api_key=3c1bf0483c51b75e06103209573b6162&language=en-US&page=1&query=${router.query.q}&include_adult=false`
      );
      setMoviebo(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const setPepleoallitem = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/person?api_key=3c1bf0483c51b75e06103209573b6162&language=en-US&query=${router.query.q}&page=1&include_adult=false`
      );
      setPepleoall(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieall();
    getMovieboall();
    setPepleoallitem();
  }, [router.query.q]);

  return (
    <Layout>
      <Hienthimovie
        movie={movie}
        GENRES={["SEARCH", "MOVIE"]}
        type={"chi-tiet"}
      ></Hienthimovie>
      <Hienthimovie
        movie={moviebo}
        GENRES={["SEARCH", "TV SHOW"]}
        type={"PhimBo"}
      ></Hienthimovie>
      <Hienthimovie
        movie={pepleoall}
        GENRES={["SEARCH", "PEPLEO"]}
        type={"Dienvien"}
        peopleo
      ></Hienthimovie>
    </Layout>
  );
}

export default srearcresults;
