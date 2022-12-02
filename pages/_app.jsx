import '../styles/globals.scss';
import Header from '../components/layout/Header';
import MainContainer from '../components/layout/MainContainer';
import Footer from '../components/layout/Footer';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { SSRProvider } from 'react-bootstrap';
import { CartContextProvider } from './api/cartContext';
// import { ApiHandler } from './api/api';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import { ApiHandler } from './api/api';

function MyApp({ Component, pageProps }) {
  //GET TO HASH ELEMENT
  const { pathname, hash, key, asPath } = useRouter();

  useEffect(() => {
    // if not a hash link, scroll to top
    document.body.scrollTo({ top: 0, behavior: 'smooth' });

    // else scroll to id
  }); // do this on route change

  return (
    <>
      <CartContextProvider>
        <SSRProvider>
          <Header />
          <ToastContainer className="toastContainer" />
          <MainContainer>
            <Component {...pageProps} />
          </MainContainer>
          <Footer />
        </SSRProvider>
      </CartContextProvider>
    </>
  );
}

export default MyApp;
