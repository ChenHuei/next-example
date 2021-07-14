import { gql, useQuery } from "@apollo/client";
import client from "../apollo-client";
import Head from "next/head";

const LIST_QUERY = gql`
  query {
    list {
      title
    }
  }
`;

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: LIST_QUERY,
  });

  return {
    props: {
      data: data.list.map((item) => ({
        ...item,
        title: `server ${item.title}`,
      })),
    },
  };
};

const Todo = (props) => {
  /* client */
  // const { loading, data } = useQuery(LIST_QUERY);

  // if (loading) return <p>Loading ...</p>;

  return (
    <>
      <Head>
        <title>Ninja List | Todo</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1>Todo</h1>
        {/* server */}
        {props.data.map((item) => (
          <p key={item.title}>{item.title}</p>
        ))}
        {/* client */}
        {/* {data.list.map((item) => (
          <p key={item.title}>{item.title}</p>
        ))} */}
      </div>
    </>
  );
};

export default Todo;
