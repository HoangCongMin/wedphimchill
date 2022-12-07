import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../../component/Layout";
import { useRouter } from "next/router";


import Chitietmovie from "../../component/Chitietmovie/Chitietmovie";

const Chitiet = () => {
  const [recomendations, setrecomendations] = useState<any>([]);
  const [trending, setTrending] = useState([]);
  const [videole, setVideole] = useState<any>([]);

  const [moviedetail, setMoviedetail] = useState<any>({});

  const router = useRouter();

  const getmoviedetail = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${router.query.id}?api_key=3c1bf0483c51b75e06103209573b6162&language=en-US`
      );
      setMoviedetail(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getrecomendations = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${router.query.id}/recommendations?api_key=3c1bf0483c51b75e06103209573b6162&language=en-US&page=2`
      );
      setrecomendations(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const getvideomoviele = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${router.query.id}/videos?api_key=3c1bf0483c51b75e06103209573b6162&language=en-US`
      );
      setVideole(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const gettrending = async () => {
    try {
      const res = await axios.get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=3c1bf0483c51b75e06103209573b6162"
      );
      setTrending(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getmoviedetail();
    getrecomendations();
    gettrending();
    getvideomoviele();
  }, [router.query]);

  return (
    <Layout>
      <Chitietmovie
        moviedetail={moviedetail}
        recomendations={recomendations}
        trending={trending}
        video={videole}
      ></Chitietmovie>
    </Layout>
  );
};

export default Chitiet;
