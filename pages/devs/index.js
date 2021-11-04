import styles from "../../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { devs: data },
  };
};

const Ninjas = ({ devs }) => {
  return (
    <div>
      <Head>
        <title>Nextjs Developers - Devs List</title>
        <meta name="description" content="Nextjs Developers" />
        <link rel="icon" href="/lightning-bolt.svg" />
      </Head>
      <div>
        <h1 className={styles.title}>All Devs</h1>
        {devs.map((dev) => (
          <Link href={`/devs/${dev.id}`} key={dev.id}>
            <a className={styles.single}>
              <h3>{dev.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Ninjas;
