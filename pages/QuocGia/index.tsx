import Layout from "../../component/Layout";
import axios from "axios";
import Hienthimovie from "../../component/Hienthimovie/Hienthimovie";
import { useEffect, useState } from "react";


function Quocgia() {

  const[movienation,setMovienation]=useState([])

  const movienationall= async()=>{
    try {

      const res= await axios.get('https://api.themoviedb.org/3/collection/10?api_key=3c1bf0483c51b75e06103209573b6162&language=en-US')
      setMovienation(res.data.parts)
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{movienationall()},[])
  return(
    <Layout>
        <Hienthimovie type={'chi-tiet'} GENRES={['MOVIE','Star Wars']} movie={movienation}></Hienthimovie>
    </Layout>
  )
}

export default Quocgia;
