import "./globals.css";
import { Inter } from "next/font/google";
import img from "@/assets/page-not-found.svg";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <section className="min-h-dvh w-full grid place-items-center p-7">
          <div className="max-w-md text-center space-y-6">
            <img src={img.src} alt="Page Not Found" className="animate-pulse" />
            <h1 className="font-bold text-4xl text-neutral">
              404 - Page Not Found
            </h1>
            <p>
              Oops! The page you&apos;re looking for doesn&apos;t exist or has
              been moved.
            </p>
          </div>
        </section>
      </body>
    </html>
  );
}
