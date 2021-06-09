import Head from "next/head";
import Link from "next/link";

// styles
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis,
          quaerat. Sed ullam veniam excepturi sunt, minima laudantium minus
          ducimus culpa unde hic earum aliquam rem obcaecati, facilis illum quam
          saepe, tempore eveniet expedita libero veritatis ut quos! Aperiam
          magni iusto ex? Laborum odit beatae corrupti, placeat ducimus ad a
          esse.
        </p>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis,
          quaerat. Sed ullam veniam excepturi sunt, minima laudantium minus
          ducimus culpa unde hic earum aliquam rem obcaecati, facilis illum quam
          saepe, tempore eveniet expedita libero veritatis ut quos! Aperiam
          magni iusto ex? Laborum odit beatae corrupti, placeat ducimus ad a
          esse.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
};

export default Home;
