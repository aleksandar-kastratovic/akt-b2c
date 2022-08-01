import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import MainContainer from '../components/layout/MainContainer'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return <>
    <Header/>
    <MainContainer>
    <Component {...pageProps} />
    <Footer/>
    </MainContainer>
  </>
}

export default MyApp
