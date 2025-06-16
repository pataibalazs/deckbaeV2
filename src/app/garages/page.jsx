import Head from "next/head";
import Item from "../components/HouseItem";
import FAQGarage from "../components/FAQ-garage";
import { products } from "../data/garages";

const Garages = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <Head>
        <title>
          Deckbae Garázsok – Előre gyártott könnyűszerkezetes garázsok
        </title>
        <meta
          name="description"
          content="Fedezd fel a Deckbae modern, könnyűszerkezetes garázsait! Gyors kivitelezés, prémium minőség, stílusos megjelenés és teljesen testreszabható megoldások."
        />
        <meta
          name="keywords"
          content="garázs, modern garázs, előre gyártott garázs, könnyűszerkezetes garázs, garázs építés, garázs házhoz szállítva"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Deckbae Garázsok – Előre gyártott könnyűszerkezetes garázsok"
        />
        <meta
          property="og:description"
          content="Könnyűszerkezetes garázsaink gyorsan telepíthetők, tartósak és modern megjelenést kínálnak. Válassz a típusaink közül vagy kérj egyedi megoldást!"
        />
        <meta property="og:image" content="/pictures/garages/cover.jpg" />
        <meta property="og:url" content="https://deckbae.hu/garages" />
        <link rel="canonical" href="https://deckbae.hu/garages" />
      </Head>

      <main className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg mt-10 max-w-80 xs:max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl">
        <div className="bg-white w-full">
          <div className="mx-auto max-w-5xl lg:text-center">
            <p className="mt-2 text-md font-bold tracking-tight text-red-600">
              Garázsok
            </p>
            <h1 className="mt-2 mb-4 text-4xl font-semibold tracking-tight text-pretty text-gray-900">
              Készen állsz az új garázsodra?
            </h1>
            <p className="text-lg text-gray-600 mt-4">
              Ismerd meg garázs kínálatunkat: modern, tartós és letisztult
              stílusú könnyűszerkezetes garázsok, amelyeket akár néhány napon
              belül telepítünk. Ideális megoldás autó, szerszám vagy tárolóhely
              számára.
            </p>
          </div>

          {/* Render all garages */}
          <div className="flex flex-col gap-20 mt-10">
            {Object.entries(products).map(([slug, product]) => (
              <Item key={slug} product={product} />
            ))}
          </div>
          <FAQGarage />
        </div>
      </main>
    </div>
  );
};

export default Garages;
