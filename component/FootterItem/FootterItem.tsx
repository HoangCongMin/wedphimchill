import Link from "next/link";
import Styles from "../FootterItem/FootterItem.module.css";

function FootterItem({ phim, title }: any) {
  return (
    <div className={Styles.FootterItemwarpper}>
      <p>{title}</p>
      <ul>
        {phim.map((item: any) => (
          <li key={item.id}>
            <Link href={`./${item.link}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FootterItem;
