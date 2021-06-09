import Link from "next/link";
import styles from "../../styles/Ninjas.module.css";

export const getStaticProps = async () => {
  const ninjas = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (res) => res.json()
  );

  return {
    props: {
      ninjas,
    },
  };
};

const Ninjas = (props) => {
  const { ninjas } = props;

  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas.map((ninja) => (
        <Link key={ninja.id} href={`/ninjas/${ninja.id}`}>
          <a className={styles.single}>
            <h3>{ninja.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Ninjas;
