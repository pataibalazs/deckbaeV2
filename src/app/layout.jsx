import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Deckbae - Könnyűszerkezetes házak gyorsan és elérhető áron",
  description:
    "Gyors házépítés prémium minőségben: a Deckbae modern, energiatakarékos könnyűszerkezetes házakat kínál elérhető áron. Akár néhány hét alatt beköltözhetsz!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hu">
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
