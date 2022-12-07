import Styles from "../Trailervideo/Trailervideo.module.css";

function Trailervideo({ video, hienthitrailer }: any) {
//   let style: any = {};
//   if (trailermovie == true) {
//     style = { display: "none" };
//   } else {
//     style = { display: "block" };
//   }
  const ma = video[0];
  return (
    <div onClick={()=>hienthitrailer(false)} className={Styles.wapper}>
      <iframe
        className={Styles.wapperone}
        src={`https://www.youtube-nocookie.com/embed/${ma && ma.key}`}
      ></iframe>
    </div>
  );
}

export default Trailervideo;
