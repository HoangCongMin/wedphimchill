import Layout from "../../component/Layout";
import axios from "axios";
import { useEffect, useState } from "react";
import Paganate from "../../component/Paganate/Paganate";
import Hienthimovie from "../../component/Hienthimovie/Hienthimovie";
function PhimBo() {
  const [movie, setMovie] = useState<any>([]);
  const [moviepagenew, setmMviepagenew] = useState<any>(1);

  const setphimbo = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/tv/popular?api_key=3c1bf0483c51b75e06103209573b6162&language=en-US&page=${moviepagenew}`
      );
      setMovie(res.data.results);
      console.log(movie);
    } catch (error) {
      console.log(error);
    }
  };

  const paginate = (pagenumber: any) => setmMviepagenew(pagenumber);

  useEffect(() => {
    setphimbo();
  }, [moviepagenew]);
  return (
    <Layout>
      <Hienthimovie type={'PhimBo'} GENRES={["MOVIE", "TV SHOW"]} movie={movie}></Hienthimovie>
      <Paganate paginate={paginate}></Paganate>
    </Layout>
  );
}

export default PhimBo;
