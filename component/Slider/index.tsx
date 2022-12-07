import axios from "axios";
import { useEffect, useState } from "react";
import PopularTAG from "../Popular";

function Slider() {
  const [Popular, setPopular] = useState([]);

  const getPopular = async () => {
    try {
      const res = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=3c1bf0483c51b75e06103209573b6162&language=en-US&page=1"
      );

      setPopular(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPopular();
  }, []);

  return (
    <div>
      <PopularTAG
        titlename={"chi-tiet"}
        title="Whats Popular"
        Popular={Popular}
      ></PopularTAG>
    </div>
  );
}

export default Slider;
