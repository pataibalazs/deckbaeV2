"use client";

import Head from "next/head";
import { useState } from "react";

const services = [
  {
    title: "Lakásfelújítás",
    description:
      "A lakásfelújítás lehetőséget ad arra, hogy otthonunk igazodjon megváltozott igényeinkhez, stílusunkhoz és a mai kor kényelmi elvárásaihoz. Legyen szó teljes körű felújításról, vagy csak egy-egy helyiség modernizálásáról, a cél mindig ugyanaz: esztétikus, funkcionális és értékálló életteret teremteni. A jól megtervezett felújítás nemcsak komfortérzetünket növeli, de az ingatlan értékét is jelentősen emeli.",
  },
  {
    title: "Fa és kőteraszok tervezése és építése",
    description:
      " A terasz az otthon természetbe nyúló meghosszabbítása – egy hely, ahol a pihenés, a vendégfogadás és a szabadtéri élet találkozik. Legyen szó meleg hangulatú fa burkolatról vagy időtálló, elegáns kőfelületről, a megfelelő anyagválasztás és gondos tervezés alapvető a tartós és esztétikus végeredményhez. Csapatunk a terasz kialakítását az Ön igényeire szabva végzi: az ötlettől a látványterven át a precíz kivitelezésig biztosítjuk, hogy új terasza nemcsak szép, hanem időtálló és praktikus is legyen.",
  },
  {
    title: "Kertépítés és kert tervezés",
    description:
      "Egy jól megtervezett kert nem csupán dísz, hanem a nyugalom, feltöltődés és közösségi élmények tere. A kertépítéssel értéket, harmóniát és egyedi hangulatot viszünk az otthonába – legyen szó pihenőkertől, modern minimalizmusról vagy természetes vadvirágos stílusról. Álmodja meg, mi pedig megvalósítjuk!",
  },
  {
    title: "Épületgépészeti Szolgáltatások",
    description:
      "Az épületgépészet az otthonok és épületek működésének láthatatlan, de nélkülözhetetlen része. Fűtés, hűtés, szellőzés, vízellátás és csatornázás – mind olyan rendszerek, amelyek biztonságos és kényelmes életteret teremtenek. Teljes körű épületgépészeti megoldásainkkal a tervezéstől a kivitelezésig garantáljuk az energiahatékonyságot, a megbízható működést és a hosszú távú megtérülést – lakossági és ipari projektek esetén egyaránt.",
  },
  {
    title: "Konyha Tervezés és Szerelés",
    description:
      "Az amerikai konyhás elrendezés tágas, világos és közösségi – összeköti a főzést az együttléttel. A magyar hagyományos stílus pedig otthonos, meleg hangulatot teremt természetes anyagokkal, rusztikus részletekkel. Konyhatervezés során ezeket ötvözzük: a nyitott tér kényelmét és a magyar vidéki konyhák lelkesítő hangulatát. Így születik egy olyan tér, ami egyszerre praktikus, meghitt és vendégváró.",
  },
  {
  title: "Napelem",
  description:
    "Szeretnél kevesebbet fizetni a villanyszámláért, miközben környezetbarát energiát használsz? Teljes körű napelemrendszer-tervezést és kivitelezést kínálunk, az igényeidhez igazítva.",
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
        <title>Deckbae Szolgáltatások - Teljes körű megoldások</title>
        <meta
          name="description"
          content="Fedezd fel a Deckbae szolgáltatásait: tanácsadás, tervezés, gyártás, kivitelezés és szállítás - mindent egy helyen!"
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
          <div className="mx-auto max-w-5xl text-center">
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
            className="fixed left-6 top-1/2 -translate-y-1/2 bg-white bg-opacity-60 hover:bg-opacity-90 rounded-full p-3 shadow-lg cursor-pointer"
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
            className="fixed right-6 top-1/2 -translate-y-1/2 bg-white bg-opacity-60 hover:bg-opacity-90 rounded-full p-3 shadow-lg cursor-pointer"
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
