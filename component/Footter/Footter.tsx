import Link from "next/link";
import Styles from "../Footter/Footter.module.css";
import FootterItem from "../FootterItem/FootterItem";

function Footter() {
  const PHIMMOI = [
    { id: 1, name: "Phim chieu rap", link: "" },
    { id: 2, name: "Phim lẻ", link: "PhimLe" },
    { id: 3, name: "Phim bộ", link: "PhimBo" },
    { id: 4, name: "Phim hành động", link: "" },
    { id: 5, name: "Phim viễn tưởng", link: "" },
    { id: 6, name: "Phim tâm lý", link: "" },
    { id: 7, name: "Phim hài hước", link: "" },
  ];

  const PHIMHAY = [
    { id: 1, name: "Phim Mỹ", link: "" },
    { id: 2, name: "Phim Hàn Quốc", link: "" },
    { id: 3, name: "Phim Trung Quốc", link: "" },
    { id: 4, name: "Phim Việt Nam", link: "" },
    { id: 5, name: "Phim Thái Lan", link: "" },
    { id: 6, name: "Phim Ma", link: "" },
    { id: 7, name: "Phim hoạt hình", link: "" },
  ];

  const PHIMHOT = [
    {
      id: 1,
      name: "Phim mới",
      link: "PhimMoi",
    },
    {
      id: 2,
      name: "Sitemap",
      link: "",
    },
  ];

  const TROGIUP = [
    {
      id: 1,
      name: "Hỏi đáp",
      link: "",
    },
    {
      id: 2,
      name: "Liên hệ",
      link: "",
    },
    {
      id: 3,
      name: "Tin tức",
      link: "",
    },
  ];

  const THONGTIN = [
    {
      id: 1,
      name: "Điều khoả sử dụng",
      link: "",
    },

    {
      id: 2,
      name: "Chính sách riêng tư",
      link: "",
    },

    {
      id: 3,
      name: "Khiếu nại bản quyền",
      link: "",
    },

    {
      id: 4,
      name: "2021 Phimmoichill.net",
      link: "",
    },
  ];

  return (
    <div className={Styles.Footerwapper}>
      <div className={Styles.Footter}>
        <div>
          <img className={Styles.Logo} src="/logo.png" alt="" />
        </div>

        <FootterItem title={"Phim moi"} phim={PHIMMOI} />
        <FootterItem title={"Phim hay"} phim={PHIMHAY} />
        <FootterItem title={"Phim hot"} phim={PHIMHOT} />
        <FootterItem title={"Trợ giup"} phim={TROGIUP} />
        <FootterItem title={"Thông tin"} phim={THONGTIN} />
      </div>
    </div>
  );
}

export default Footter;
