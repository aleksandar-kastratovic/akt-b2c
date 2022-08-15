import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import MainContainer from "../components/layout/MainContainer";
import { useRouter } from "next/router";
import "../styles/globals.scss";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
