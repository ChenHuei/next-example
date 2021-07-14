export const getStaticPaths = async () => {
  const paths = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((res) =>
      res.map((ninja) => ({ params: { id: ninja.id.toString() } }))
    );

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const ninja = await fetch(
    `https://jsonplaceholder.typicode.com/users/${context.params.id}`
  ).then((res) => res.json());

  return {
    props: {
      ninja,
    },
  };
};

// export const getServerSideProps = async (context) => {
//   const ninja = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${context.query.id}`
//   ).then((res) => res.json());

//   return {
//     props: {
//       ninja,
//     },
//   };
// };

const NinjaDetail = (props) => {
  if (Object.keys(props).length === 0) {
    return <div>loading...</div>;
  }
  const { ninja } = props;
  const { name, email, website, address } = ninja;

  return (
    <div>
      <h1>{name}</h1>
      <p>{email}</p>
      <p>{website}</p>
      <p>{address.city}</p>
    </div>
  );
};

export default NinjaDetail;
