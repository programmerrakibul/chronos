import Navbar from "@/components/shared/Navbar/Navbar";
import "./globals.css";
import AuthProvider from "@/contexts/Auth/AuthProvider";
import { Toaster } from "sonner";
import Footer from "@/components/shared/Footer/Footer";

export const metadata = {
  title: "Home Chronos",
  description: "Welcome to chronos",
};

const RootLayout = ({ children }) => {
  return (
    <>
      <html lang="en">
        <body>
          <AuthProvider>
            <header>
              <Navbar />
            </header>
            <main>{children}</main>
            <Footer />
          </AuthProvider>
          <Toaster position="top-center" richColors closeButton />
        </body>
      </html>
    </>
  );
};

export default RootLayout;
