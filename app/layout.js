import Footer from "@/components/Footer/Footer";
import NavigationDesktop from "@/components/Navigation/NavigationDesktop";
import NavigationMobile from "@/components/Navigation/NavigationMobile";
import { CartContextProvider } from "./api/cartContext";
import "./globals.css";
import CookieAlert from "@/components/CookieAlert/CookieAlert";
import "react-toastify/dist/ReactToastify.css";
import Analytics, {
  GoogleTagManager,
} from "@/components/GoogleTagManager/GoogleTagManager";
import Script from "next/script";
import { Suspense } from "react";
export const metadata = {
  title: `${process.env.COMPANY} Web prodavnica`,
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <CartContextProvider>
      <head>
        <script
          src="https://kit.fontawesome.com/f141ac3909.js"
          crossorigin="anonymous"
        ></script>
      </head>
      <html lang="en">
        <body className="4xl:container mx-auto">
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-KZMS3QG"
              height="0"
              width="0"
              style="display:none;visibility:hidden"
            ></iframe>
          </noscript>
          <Suspense>
            <Analytics />
          </Suspense>
          <CookieAlert />
          <NavigationDesktop />
          <NavigationMobile />
          {children}
          <Footer />
        </body>
      </html>
    </CartContextProvider>
  );
}
