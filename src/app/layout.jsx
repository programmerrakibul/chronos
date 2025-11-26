import "./globals.css";
import Providers from "@/components/Providers/Providers";

export const metadata = {
  title: "Home Chronos",
  description: "Welcome to chronos",
};

const RootLayout = ({ children }) => {
  return (
    <>
      <html lang="en">
        <body>
          <Providers>{children}</Providers>
        </body>
      </html>
    </>
  );
};

export default RootLayout;
