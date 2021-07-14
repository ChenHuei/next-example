import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";

// components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    // <ApolloProvider client={client}>
    <main className="content">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
    // </ApolloProvider>
  );
}

export default MyApp;
