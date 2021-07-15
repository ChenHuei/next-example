import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";

// components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <main className="content">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </ApolloProvider>
  );
}

export default MyApp;
