import styles from "../../styles/Home.module.css";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((dev) => {
    return {
      params: { id: dev.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();
  return {
    props: { dev: data },
  };
};

const Details = ({ dev }) => {
  return (
    <div>
      <h1 className={styles.title}>{dev.name}</h1>
      <p className={styles.text}>{dev.email}</p>
      <p className={styles.text}>{dev.website}</p>
      <p className={styles.text}>{dev.address.city}</p>
    </div>
  );
};

export default Details;
