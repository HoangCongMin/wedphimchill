import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../component/Layout";
import Chitietdienvien from "../../component/Chitietdienvien";

function Chitietpepleo() {
  const [pepleo, setPepleo] = useState<any>({});
  const [pepleorecomendations, setPepleorecomendations] = useState<any>([]);

  const router = useRouter();

  const [movie, setMovie] = useState<any>(21);

  const setpeoplechitiet = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/person/${router.query.id}?api_key=3c1bf0483c51b75e06103209573b6162&language=en-US`
      );
      setPepleo(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const setdanhsachpeople = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/person/${router.query.id}/combined_credits?api_key=3c1bf0483c51b75e06103209573b6162&language=en-US`
      );
      setPepleorecomendations(res.data.cast);
    } catch (error) {
      console.log(error);
    }
  };

  function handle(number: any) {
    setMovie(number);
  }

  useEffect(() => {
    setpeoplechitiet();
    setdanhsachpeople();
  }, [router.query, movie]); 

  return (
    <Layout>
      <Chitietdienvien
        handle={handle}
        movie={movie}
        title={"chi-tiet"}
        titlenumber="PhimBo"
        pepleo={pepleo}
        pepleorecomendations={pepleorecomendations}
      ></Chitietdienvien>
    </Layout>
  );
}

export default Chitietpepleo;
