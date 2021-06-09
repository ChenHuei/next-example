import "../styles/globals.css";

// components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <main className="content">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}

export default MyApp;
