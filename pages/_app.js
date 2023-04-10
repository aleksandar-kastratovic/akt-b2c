import Footer from "@/components/Footer/Footer";
import NavigationDesktop from "@/components/Navigation/NavigationDesktop";
import NavigationMobile from "@/components/Navigation/NavigationMobile";
import { CartContextProvider } from "../app/api/cartContext";
import "../styles/globals.css";
export default function App({ Component, pageProps }) {
  return (
    <CartContextProvider>
      <div className="4xl:container mx-auto">
        {" "}
        <NavigationDesktop />
        <NavigationMobile />
        <Component {...pageProps} />
        <Footer />
      </div>
    </CartContextProvider>
  );
}
