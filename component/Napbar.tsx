import Link from "next/link";
import styles from "../component/Napbar.module.css";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase";
import { FaBars, FaTimes } from "react-icons/fa";

function Napbarmenu() {
  const [inputmovie, setIputmovie] = useState("");

  const handleinput = (e: any) => setIputmovie(e.target.value);

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={styles.napbarallbackground}>
        <div className={styles.napmenuall}>
          <div className={styles.napbarlogo}>
            <Link href="/PhimMoi">
              <Image src="/logo.png" width={171} alt="logo" height="40" />
            </Link>
          </div>

          <ul className={styles.napmenu}>
            <li>
              <Link href="/PhimMoi">PhimMoi</Link>{" "}
            </li>
            <li>
              <Link href="/PhimLe">Phim lẻ</Link>
            </li>
            <li>
              <Link href="/PhimBo">Phim bộ</Link>
            </li>
            <li>
              <Link href="/TheLoai">Thể Loại</Link>
            </li>
            <li>
              <Link href="/QuocGia">Bộ Sưu Tập</Link>
            </li>
            <li>
              <Link href="/Dienvien">Diễn Viên</Link>
            </li>
            <li>
              <Link href="/TopPhim">Top Phim</Link>
            </li>
            <li>
              <Link href="/Trailer">DS Yêu Thích</Link>
            </li>
            <li>
              <p onClick={logout}>Đăng Xuất</p>
            </li>
          </ul>

          <form className={styles.napbarinput}>
            <input
              value={inputmovie}
              onChange={handleinput}
              type="text"
              placeholder="Tìm tên phim, diễn viên..."
            />

            <Link href={`/srearcresults?q=${inputmovie}`}>
              <SearchIcon />
            </Link>
          </form>
          <label htmlFor="navinput" className={styles.mobilenavnar}>
            <FaBars></FaBars>
          </label>
          <input type="checkbox" className={styles.inputcheck} id="navinput" />
          <label htmlFor="navinput" className={styles.overlay}></label>
          <div className={styles.napmenumobile}>
            <label htmlFor="navinput" className={styles.close}>
              <FaTimes></FaTimes>
            </label>

            <ul>
              <li>
                <Link href="/PhimMoi">PhimMoi</Link>{" "}
              </li>
              <li>
                <Link href="/PhimLe">Phim lẻ</Link>
              </li>
              <li>
                <Link href="/PhimBo">Phim bộ</Link>
              </li>
              <li>
                <Link href="/TheLoai">Thể Loại</Link>
              </li>
              <li>
                <Link href="/QuocGia">Bộ Sưu Tập</Link>
              </li>
              <li>
                <Link href="/Dienvien">Diễn Viên</Link>
              </li>
              <li>
                <Link href="/TopPhim">Top Phim</Link>
              </li>
              <li>
                <Link href="/Trailer">DS Yêu Thích</Link>
              </li>
              <li>
                <p onClick={logout}>Đăng Xuất</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Napbarmenu;
