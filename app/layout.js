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
import { UserProvider } from "@/context/userContext";
import { QueryProvider } from "@/components/QueryProvider";
import { ToastContainer } from "react-toastify";
import Loader from "@/components/Loader"

export const metadata = {
  title: `${process.env.COMPANY} Web prodavnica`,
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <QueryProvider>
      <UserProvider>
        <CartContextProvider>
          <html lang="en">
            <head>
              <Script
                src="https://kit.fontawesome.com/f141ac3909.js"
                crossorigin="anonymous"
              ></Script>
            </head>

            <body className="4xl:container mx-auto">
              <Suspense>
                <Analytics />
              </Suspense>
              <CookieAlert />
              <NavigationDesktop />
              <NavigationMobile />
              <div className="min-h-[600px] md:min-h-[700px]">
              {children}
              </div>
              <ToastContainer/>
              <Footer />
            </body>
          </html>
      
        </CartContextProvider>
      </UserProvider>
    </QueryProvider>
  );
}
