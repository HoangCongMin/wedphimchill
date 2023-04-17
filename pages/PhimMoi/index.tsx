import Layout from "../../component/Layout";
import Slider from "../../component/Slider";
import Hienthiphim from "../../component/Hienthiphim";
import axios from "axios";
import styles from "../../styles/PhimMoi.module.css";
import { useEffect, useState } from "react";
function PhimMoi() {
  const [trending, settrending] = useState([]);
  const [genres, setgenres] = useState([]);
  const [rate, setRate] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  const settrendinghienthi = async () => {
    try {
      const res = await axios.get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=3c1bf0483c51b75e06103209573b6162"
      );
      settrending(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const settheloaiphim = async () => {
    try {
      const res = await axios.get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US"
      );
      setgenres(res.data.genres);
    } catch (error) {
      console.log(error);
    }
  };

  const settoprate = async () => {
    try {
      const res = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=1"
      );
      setRate(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const upcomeing = async () => {
    try {
      const res = await axios.get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=3c1bf0483c51b75e06103209573b6162&language=en-US&page=1"
      );
      setUpcoming(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  trending.length = 11;
  rate.length = 11;
  upcoming.length = 11;

  useEffect(() => {
    settrendinghienthi();
    settheloaiphim();
    settoprate();
    upcomeing();
  }, []);

  return (
    <Layout>
      
      <Slider></Slider>
      <Hienthiphim
        type={"chi-tiet"}
        title={"trending"}
        genres={genres}
        trending={trending}
      ></Hienthiphim>

      <Hienthiphim
        type={"chi-tiet"}
        trending={rate}
        genres={genres}
        title={"top rated"}
      ></Hienthiphim>
      <Hienthiphim
        type={"chi-tiet"}
        trending={upcoming}
        genres={genres}
        title={"upcoming"}
      ></Hienthiphim>
    </Layout>
  );
}

export default PhimMoi;
