import "./globals.css";
import Providers from "@/components/Providers/Providers";

export const metadata = {
  title: "CHRONOS",
  description: "Welcome to CHRONOS",
};

const RootLayout = ({ children }) => {
  return (
    <>
      <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
        <body className="text-neutral/80 text-sm md:text-base font-normal bg-accent/15 min-h-dvh">
          <Providers>{children}</Providers>
        </body>
      </html>
    </>
  );
};

export default RootLayout;
