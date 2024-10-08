import "./globals.css";
import "./components/Header";
import Head from "next/head";
import Header from "./components/Header";
export const metadata = {
  title: "Maandag middag App",
  description: "monday ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
