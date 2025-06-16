"use client";

import Head from "next/head";
import { useState } from "react";

const services = [
  {
    title: "Tanácsadás",
    description:
      "Segítünk a megfelelő ház, garázs vagy pergola kiválasztásában, hogy az igényeidhez legjobban illő megoldást kapd.",
  },
  {
    title: "Tervezés",
    description:
      "Egyedi igények alapján tervezzük meg álmaid épületét, legyen szó házról, garázsról vagy pergoláról.",
  },
  {
    title: "Gyártás",
    description:
      "Modern technológiával, prémium anyagokból készítjük el a szerkezeteket, hogy tartós és esztétikus legyen a végeredmény.",
  },
  {
    title: "Kivitelezés",
    description:
      "Gyors és precíz helyszíni szerelés, teljes körű lebonyolítással, hogy neked csak az új épület öröme maradjon.",
  },
  {
    title: "Szállítás",
    description:
      "Az elkészült szerkezeteket biztonságosan, gyorsan és országosan szállítjuk a helyszínre.",
  },
];

const references = [
  "/pictures/dock.jpg",
  "/pictures/david.jpg",
  "/pictures/dock.jpg",
  "/pictures/dock.jpg",
  "/pictures/dock.jpg",
  "/pictures/dock.jpg",
];

export default function Services() {
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev === 0 ? references.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev === references.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <Head>
        <title>Deckbae Szolgáltatások – Teljes körű megoldások</title>
        <meta
          name="description"
          content="Fedezd fel a Deckbae szolgáltatásait: tanácsadás, tervezés, gyártás, kivitelezés és szállítás – mindent egy helyen!"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Deckbae Szolgáltatások" />
        <meta
          property="og:description"
          content="Prémium szolgáltatások a könnyűszerkezetes építésben. Tanácsadás, tervezés, gyártás, kivitelezés, szállítás."
        />
        <meta property="og:image" content="/pictures/dock.jpg" />
        <meta property="og:url" content="https://deckbae.hu/services" />
        <link rel="canonical" href="https://deckbae.hu/services" />
      </Head>

      <main className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg mt-10 max-w-80 xs:max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl w-full">
        <div className="bg-white w-full">
          <div className="mx-auto max-w-5xl lg:text-center">
            <p className="mt-2 text-md font-bold tracking-tight text-red-600">
              Szolgáltatásaink
            </p>
            <h1 className="mt-2 mb-4 text-4xl font-semibold tracking-tight text-pretty text-gray-900">
              Teljes körű megoldások egy helyen
            </h1>
            <p className="text-lg text-gray-600 mt-4">
              A Deckbae csapata minden lépésben támogat: a tanácsadástól a
              tervezésen és gyártáson át a kivitelezésig és szállításig. Ismerd
              meg szolgáltatásainkat!
            </p>
          </div>

          {/* Szolgáltatások listázása */}
          <div className="grid gap-10 mt-10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow flex flex-col items-center p-6"
              >
                <img
                  src="/pictures/dock.jpg"
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-[#C41E3A] mb-2 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-center">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Referencia szekció */}
          <div className="mt-16">
            <div className="mx-auto max-w-5xl lg:text-center">
              <p className="mt-2 text-md font-bold tracking-tight text-red-600">
                Referenciáink
              </p>
              <h1 className="mt-2 mb-4 text-4xl font-semibold tracking-tight text-pretty text-gray-900">
                Büszkék vagyunk elkészült munkáinkra
              </h1>
              <p className="text-lg text-gray-600 mt-4">
                Tekintsd meg néhány kiemelt projektünket! Minőség, megbízhatóság
                és precizitás jellemzi munkánkat.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 pt-4">
              {references.map((img, idx) => (
                <div
                  key={idx}
                  className="overflow-hidden rounded-lg shadow cursor-pointer"
                  onClick={() => {
                    setActiveIdx(idx);
                    setOpen(true);
                  }}
                >
                  <img
                    src={img}
                    alt={`Referencia ${idx + 1}`}
                    className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Lightbox navigációval, fix oldalsó nyilakkal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={() => setOpen(false)}
        >
          {/* Bal nyíl - fixen a bal oldalon */}
          <button
            onClick={handlePrev}
            className="fixed left-6 top-1/2 -translate-y-1/2 bg-white bg-opacity-60 hover:bg-opacity-90 rounded-full p-3 shadow-lg"
            style={{ zIndex: 60 }}
            aria-label="Előző kép"
          >
            <svg
              className="w-8 h-8 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          {/* Kép középen */}
          <img
            src={references[activeIdx]}
            alt="Nagyított referencia"
            className="max-h-[90vh] max-w-[95vw] rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />
          {/* Jobb nyíl - fixen a jobb oldalon */}
          <button
            onClick={handleNext}
            className="fixed right-6 top-1/2 -translate-y-1/2 bg-white bg-opacity-60 hover:bg-opacity-90 rounded-full p-3 shadow-lg"
            style={{ zIndex: 60 }}
            aria-label="Következő kép"
          >
            <svg
              className="w-8 h-8 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
