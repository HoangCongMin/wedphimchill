import Layout from "../../component/Layout";
import axios from "axios";
import { useEffect, useState } from "react";
import Hienthimovie from "../../component/Hienthimovie/Hienthimovie";
import Paganate from "../../component/Paganate/Paganate";

function TopPhim() {
  const [topphimborate, setTopphimborate] = useState([]);
  const [topphimlerate, setTopphimlerate] = useState([]);
  const [pageitem, setPageitem] = useState(1);

  const setTopphimborateall = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=3c1bf0483c51b75e06103209573b6162&language=en-US&page=${pageitem}`
      );
      setTopphimborate(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const setTopphimlerateall = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=3c1bf0483c51b75e06103209573b6162&language=en-US&page=${pageitem}`
      );
      setTopphimlerate(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const handlepaganate = (item: any) => setPageitem(item);

  useEffect(() => {
    setTopphimborateall();
    setTopphimlerateall();
  }, [pageitem]);
  return (
    <Layout>
      <Hienthimovie
        movie={topphimborate}
        GENRES={["MOVIE", "TV SHOW", "TOP RATE"]}
        type={"PhimBo"}
      ></Hienthimovie>
      <Hienthimovie
        movie={topphimlerate}
        GENRES={["MOVIE", "TOP RATE"]}
        type={"chi-tiet"}
      ></Hienthimovie>
      <Paganate paginate={handlepaganate}></Paganate>
    </Layout>
  );
}

export default TopPhim;
