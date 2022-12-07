import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Chitietmovie from "../../component/Chitietmovie/Chitietmovie";
import Layout from "../../component/Layout";

function Chitietphimbo() {
  const [chitet, setChitiet] = useState({});
  const [recomendationsmovie, setRecomendationsmovie] = useState<any>([]);
  const [trendingmovie, setTrendingmovie] = useState<any>([]);
  const [trailermoviebo, setTrailermoviebo] = useState([]);

  const router = useRouter();

  const setphimbo = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/tv/${router.query.id}?api_key=3c1bf0483c51b75e06103209573b6162&language=en-US`
      );
      setChitiet(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const setrecommenall = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/tv/${router.query.id}/recommendations?api_key=3c1bf0483c51b75e06103209573b6162&language=en-US&page=1`
      );
      setRecomendationsmovie(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const settrendingall = async () => {
    try {
      const res = await axios.get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=3c1bf0483c51b75e06103209573b6162"
      );
      setTrendingmovie(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const settrailermovieboall = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/tv/${router.query.id}/videos?api_key=3c1bf0483c51b75e06103209573b6162&language=en-US`
      );
      setTrailermoviebo(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setphimbo();
    setrecommenall();
    settrendingall();
    settrailermovieboall();
  }, [router.query]);
  return (
    <Layout>
      <Chitietmovie
        moviedetail={chitet}
        recomendations={recomendationsmovie}
        video={trailermoviebo}
        trending={trendingmovie}
      ></Chitietmovie>
    </Layout>
  );
}

export default Chitietphimbo;
