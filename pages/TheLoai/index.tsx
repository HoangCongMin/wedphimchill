import Layout from "../../component/Layout";
import axios from "axios";
import { useEffect, useState } from "react";
import Hienthiphim from "../../component/Hienthiphim";
import Paganate from "../../component/Paganate/Paganate";

function TheLoai() {
  const [movieall, setMovieall] = useState([]);
  const [genres, setGenres] = useState([]);
  const [tvshowall, setTvshowall] = useState([]);

  const [page, setPage] = useState([]);

  const movieshow = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=3c1bf0483c51b75e06103209573b6162&language=en-US&page=${page}`
      );
      setMovieall(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const settheloaiphim = async () => {
    try {
      const res = await axios.get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US"
      );
      setGenres(res.data.genres);
    } catch (error) {
      console.log(error);
    }
  };

  const settvshow = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/tv/airing_today?api_key=3c1bf0483c51b75e06103209573b6162&language=en-US&page=${page}`
      );
      setTvshowall(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const setpagetheloai = (item: any) => setPage(item);

  useEffect(() => {
    movieshow();
    settheloaiphim();
    settvshow();
  }, [page]);

  return (
    <Layout>
      <Hienthiphim
        type={"PhimBo"}
        genres={genres}
        title="tv show"
        trending={tvshowall}
      ></Hienthiphim>
      <Hienthiphim
        type={"chi-tiet"}
        genres={genres}
        title="movie"
        trending={movieall}
      ></Hienthiphim>

      <Paganate paginate={setpagetheloai}></Paganate>
    </Layout>
  );
}

export default TheLoai;
