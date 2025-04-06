import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // Ensure global styles are imported
import Footer from "./components/Footer";
import Header from "./components/Header";
import Head from "next/head";

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
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="/og-image.jpg" />
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Deckbae",
              url: "https://deckbae.hu",
              description: metadata.description,
            }),
          }}
        />
      </Head>
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
