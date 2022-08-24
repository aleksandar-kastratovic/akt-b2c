import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import MainContainer from "../components/layout/MainContainer";
import { useRouter } from "next/router";
import "../styles/globals.scss";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  //GET TO HASH ELEMENT
  const { pathname, hash, key } = useRouter();

  useEffect(() => {
    // if not a hash link, scroll to top

    window.scrollTo(0, 0);

    // else scroll to id
  }, [pathname, hash, key]); // do this on route change

  return (
    <>
      <Header />
      <MainContainer>
        <Component {...pageProps} />
        <Footer />
      </MainContainer>
    </>
  );
}

export default MyApp;
