import Navbar from "@/components/shared/Navbar/Navbar";
import "./globals.css";

export const metadata = {
  title: "Home Chronos",
  description: "Welcome to chronos",
};

const RootLayout = ({ children }) => {
  return (
    <>
      <html lang="en">
        <body>
          <header>
            <Navbar />
          </header>
          <main>{children}</main>
        </body>
      </html>
    </>
  );
};

export default RootLayout;
