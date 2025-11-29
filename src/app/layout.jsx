import "./globals.css";
import Providers from "@/components/Providers/Providers";

import { Raleway, Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-raleway",
});

export const metadata = {
  title: "CHRONOS",
  description: "Welcome to CHRONOS",
};

const RootLayout = ({ children }) => {
  return (
    <>
      <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
        <body
          className={`text-neutral/80 text-sm md:text-base font-normal bg-accent/15 min-h-dvh ${openSans.className} ${raleway.variable}`}
        >
          <Providers>{children}</Providers>
        </body>
      </html>
    </>
  );
};

export default RootLayout;
