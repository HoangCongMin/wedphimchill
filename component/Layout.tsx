import Head from "next/head";
import Napbar from "./Napbar";
import styles from "../component/Backgrondnapbar.module.css";
import Footter from "./Footter/Footter";

function Layout({ children }: any) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My next app</title>
      </Head>

      <header className={styles.backgrondnapbar}>
        <Napbar></Napbar>
      </header>
      <main className={styles.backgrondmain}>{children}</main>
      <footer className={styles.bacgroundfootter}>
        <Footter></Footter>
      </footer>
    </>
  );
}

export default Layout;
