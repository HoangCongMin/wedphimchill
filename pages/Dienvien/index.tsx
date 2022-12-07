import Layout from "../../component/Layout";
import axios from "axios";
import Hienthimovie from "../../component/Hienthimovie/Hienthimovie";
import { useEffect, useState } from "react";
import Paganate from "../../component/Paganate/Paganate";


function Namphathanh() {
  const [peopleall, setPeopleall] = useState([]);
  const [moviepagenew, setmMviepagenew] = useState(1);

  const setPeoplealltotal = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/person/popular?api_key=3c1bf0483c51b75e06103209573b6162&language=en-US&page=${moviepagenew}`
      );
      setPeopleall(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const paginate = (pagenumber: any) => setmMviepagenew(pagenumber);

  useEffect(() => {
    setPeoplealltotal();
  }, [moviepagenew]);
  return (
    <Layout>
      <Hienthimovie
      type={'Dienvien'}
        
        movie={peopleall}
        GENRES={["PEOPLE"]}
      ></Hienthimovie>
      <Paganate paginate={paginate}></Paganate>
    </Layout>
  );
}

export default Namphathanh;
