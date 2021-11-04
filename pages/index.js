import Head from "next/head";
//import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nextjs Developers - Home</title>
        <meta name="description" content="Nextjs Developers" />
        <link rel="icon" href="/lightning-bolt.svg" />
      </Head>

      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est,
          voluptatum quisquam. Odio, sunt veritatis? Harum delectus architecto
          laboriosam nesciunt perspiciatis numquam nemo vitae ducimus ipsam
          beatae, pariatur aut, sed vel.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est,
          voluptatum quisquam. Odio, sunt veritatis? Harum delectus architecto
          laboriosam nesciunt perspiciatis numquam nemo vitae ducimus ipsam
          beatae, pariatur aut, sed vel.
        </p>
      </div>
      <Link href="/devs">
        <a className={styles.btn}>See Developer Listings</a>
      </Link>
    </div>
  );
}
