import Head from "next/head";
import Item from "../components/HouseItem";
import FAQPergola from "../components/FAQ-pergolas";
import { products } from "../data/pergolas";

const Pergolas = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <Head>
        <title>Deckbae Pergolák – Modern, időtálló kültéri megoldások</title>
        <meta
          name="description"
          content="Fedezd fel a Deckbae prémium minőségű pergoláit! Modern és időtálló megoldások a kertedbe vagy teraszodra. Egyedi méretre szabható kültéri szerkezetek."
        />
        <meta
          name="keywords"
          content="pergola, modern pergola, kültéri pergola, fa pergola, fémszerkezetes pergola, árnyékoló, terasz tető"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Deckbae Pergolák – Modern, időtálló kültéri megoldások"
        />
        <meta
          property="og:description"
          content="Prémium pergolák kültérre – modern, esztétikus és tartós kivitelben, akár egyedi méretben is!"
        />
        <meta property="og:image" content="/pictures/pergolas/cover.jpg" />
        <meta property="og:url" content="https://deckbae.hu/pergolas" />
        <link rel="canonical" href="https://deckbae.hu/pergolas" />
      </Head>

      <main className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg mt-10 max-w-80 xs:max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl">
        <div className="bg-white w-full">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mt-2 text-md font-bold tracking-tight text-red-600">
              Pergolák
            </p>
            <h1 className="mt-2 mb-4 text-4xl font-semibold tracking-tight text-pretty text-gray-900">
              Készen állsz az új pergoládra?
            </h1>
            <p className="text-lg text-gray-600 mt-4">
              Modern, időtálló pergolák fa vagy fémszerkezetes kivitelben.
              Fedezd fel kínálatunkat, és alakítsd át a kerted vagy teraszod egy
              stílusos kültéri térré!
            </p>
          </div>

          {/* Render all pergolas */}
          <div className="flex flex-col gap-20 mt-10">
            {Object.entries(products).map(([slug, product]) => (
              <Item key={slug} product={product} />
            ))}
          </div>
          <FAQPergola />
        </div>
      </main>
    </div>
  );
};

export default Pergolas;
