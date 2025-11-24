import "./globals.css";




export const metadata = {
  title: "Home Chronos",
  description: "Welcome to chronos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body

      >
        {children}
      </body>
    </html>
  );
}
