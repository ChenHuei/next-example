import { gql, useQuery } from "@apollo/client";
import { initializeApollo } from "../lib/apolloClient";
import Head from "next/head";

const LIST_QUERY = gql`
  query queryList {
    list {
      title
    }
  }
`;

export const getStaticProps = async () => {
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: LIST_QUERY,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
};

const Todo = (props) => {
  /* client */
  const { loading, data } = useQuery(LIST_QUERY);

  if (loading) return <p>Loading ...</p>;

  return (
    <>
      <Head>
        <title>Ninja List | Todo</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1>Todo</h1>
        {/* server */}
        {props.initialApolloState.ROOT_QUERY.list.map((item) => (
          <p key={item.title}>{item.title}</p>
        ))}
        {/* client */}
        {data.list.map((item) => (
          <p key={item.title}>{item.title}</p>
        ))}
      </div>
    </>
  );
};

export default Todo;
