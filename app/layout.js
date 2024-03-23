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
import Loader from "@/components/Loader";

export const metadata = {
  title: `Kućni tekstil - posteljine, jastuci i jorgani - Stefan kućni tekstil Arilje`,
  description:
    "AKT doo Arilje proizvodi i prodaje kvalitetan kućni tekstil. Posetite naš online shop i kupite brzo, jednostavno i povoljno.",
  keywords: ["stefan, arilje, tekstil, posteljina, jastuci, disney"],
  openGraph: {
    title:
      "Kućni tekstil - posteljine, jastuci i jorgani - Stefan kućni tekstil Arilje",
    description:
      "AKT doo Arilje proizvodi i prodaje kvalitetan kućni tekstil. Posetite naš online shop i kupite brzo, jednostavno i povoljno.",
    keywords: ["stefan, arilje, tekstil, posteljina, jastuci, disney"],
    images: [
      {
        url: "https://api.akt.croonus.com/croonus-uploads/config/b2c/logo-8c7036530160c621f3c546cba20d65dd.png",
        width: 800,
        height: 600,
      },
    ],
  },
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
              <div className="min-h-[600px] md:min-h-[700px]">{children}</div>
              <ToastContainer />
              <Footer />
            </body>
          </html>
        </CartContextProvider>
      </UserProvider>
    </QueryProvider>
  );
}
