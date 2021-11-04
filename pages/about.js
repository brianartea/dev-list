import styles from "../styles/Home.module.css";
import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>Nextjs Developers - About</title>
        <meta name="description" content="Nextjs Developers" />
        <link rel="icon" href="/lightning-bolt.svg" />
      </Head>

      <div>
        <h1 className={styles.title}>About</h1>
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
    </div>
  );
};

export default About;
