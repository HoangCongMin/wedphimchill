import Layout from "../../component/Layout";
import axios from "axios";
import Hienthimovie from "../../component/Hienthimovie/Hienthimovie";
import { useEffect, useState } from "react";
import Paganate from "../../component/Paganate/Paganate";

function PhimLe() {
  const [movieitem, setMovieitem] = useState([]);
  const [page, setPage] = useState([]);
  
  

  const setmoviephimle = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=3c1bf0483c51b75e06103209573b6162&language=en-US&page=${page}`
      );
      setMovieitem(res.data.results);

    } catch (error) {
      console.log(error);
    }
  };

  const setqagenew = (item: any) => {
    setPage(item);
  };

  useEffect(() => {
    setmoviephimle();
  }, [page]);
  return (
    <Layout>
      <Hienthimovie
      type={'chi-tiet'}
        movie={movieitem}
        GENRES={["MOVIE", "POPULAR"]}
        paginate={setqagenew}
      ></Hienthimovie>
      <Paganate paginate={setqagenew}></Paganate>
    </Layout>
  );
}

export default PhimLe;
