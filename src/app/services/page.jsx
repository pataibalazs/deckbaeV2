"use client";

import Head from "next/head";
import ReferenceImageSection from "../components/ReferenceImageSection";

const services = [
  {
    title: "Lakásfelújítás",
    description:
      "Modern, kényelmes és értékálló otthont teremtünk teljes vagy részleges felújítással, igényeihez igazítva.",
    image: "/pictures/references/main_pics/1.webp",
    hasReferences: true,
  },
  {
    title: "Fa és kőteraszok tervezése és építése",
    description:
      "Teraszokat építünk fa vagy kő burkolattal, a tervezéstől a kivitelezésig, időtálló és esztétikus megoldásokkal.",
    image: "/pictures/references/main_pics/2.webp",
    hasReferences: true,
  },
  {
    title: "Kertépítés és kert tervezés",
    description:
      "Egyedi stílusú kerteket tervezünk és építünk – akár modern, akár természetes hangulatot szeretne.",
    image: "/pictures/references/main_pics/3.webp",
    hasReferences: false,
  },
  {
    title: "Épületgépészeti Szolgáltatások",
    description:
      "Teljes körű gépészeti megoldások: fűtés, hűtés, vízellátás, szellőzés – biztonságos, hatékony rendszerekkel.",
    image: "/pictures/references/main_pics/4.webp",
    hasReferences: true,
  },
  {
    title: "Konyha Tervezés és Szerelés",
    description:
      "Funkcionális és hangulatos konyhákat tervezünk, modern és hagyományos stílusban egyaránt.",
    image: "/pictures/references/main_pics/5.webp",
    hasReferences: false,
  },
  {
    title: "Napelem",
    description:
      "Teljes körű napelemrendszer-telepítést kínálunk, a villanyszámla csökkentéséért és fenntartható energiahasználatért.",
    image: "/pictures/references/main_pics/6.webp",
    hasReferences: false,
  },
];

const referencesList = {
  Lakásfelújítás: [
    "/pictures/references/lakasfel/1.webp",
    "/pictures/references/lakasfel/2.webp",
    "/pictures/references/lakasfel/3.webp",
    "/pictures/references/lakasfel/4.webp",
    "/pictures/references/lakasfel/5.webp",
    "/pictures/references/lakasfel/6.webp",
    "/pictures/references/lakasfel/7.webp",
    "/pictures/references/lakasfel/8.webp",
    "/pictures/references/lakasfel/9.webp",
    "/pictures/references/lakasfel/10.webp",
    "/pictures/references/lakasfel/11.webp",
    "/pictures/references/lakasfel/12.webp",
    "/pictures/references/lakasfel/13.webp",
    "/pictures/references/lakasfel/14.webp",
    "/pictures/references/lakasfel/15.webp",
    "/pictures/references/lakasfel/16.webp",
    "/pictures/references/lakasfel/17.webp",
    "/pictures/references/lakasfel/18.webp",
    "/pictures/references/lakasfel/20.webp",
    "/pictures/references/lakasfel/21.webp",
    "/pictures/references/lakasfel/22.webp",
    "/pictures/references/lakasfel/23.webp",
    "/pictures/references/lakasfel/24.webp",
    "/pictures/references/lakasfel/26.webp",
    "/pictures/references/lakasfel/27.webp",
    "/pictures/references/lakasfel/28.webp",
  ],
  "Fa és kőteraszok tervezése és építése": [
    "/pictures/references/fa_terasz/1.webp",
    "/pictures/references/fa_terasz/2.webp",
    "/pictures/references/fa_terasz/3.webp",
    "/pictures/references/fa_terasz/4.webp",
    "/pictures/references/fa_terasz/5.webp",
    "/pictures/references/fa_terasz/6.webp",
    "/pictures/references/fa_terasz/7.webp",
    "/pictures/references/fa_terasz/8.webp",
    "/pictures/references/fa_terasz/9.webp",
    "/pictures/references/fa_terasz/10.webp",
    "/pictures/references/fa_terasz/11.webp",
    "/pictures/references/fa_terasz/12.webp",
    "/pictures/references/fa_terasz/13.webp",
    "/pictures/references/fa_terasz/14.webp",
    "/pictures/references/fa_terasz/15.webp",
    "/pictures/references/fa_terasz/16.webp",
    "/pictures/references/fa_terasz/17.webp",
    "/pictures/references/fa_terasz/18.webp",
    "/pictures/references/fa_terasz/19.webp",
    "/pictures/references/fa_terasz/20.webp",
  ],
  "Épületgépészeti Szolgáltatások": [
    "/pictures/references/epulet_gepeszet/1.webp",
    "/pictures/references/epulet_gepeszet/2.webp",
    "/pictures/references/epulet_gepeszet/3.webp",
    "/pictures/references/epulet_gepeszet/4.webp",
    "/pictures/references/epulet_gepeszet/5.webp",
    "/pictures/references/epulet_gepeszet/6.webp",
    "/pictures/references/epulet_gepeszet/7.webp",
    "/pictures/references/epulet_gepeszet/8.webp",
    "/pictures/references/epulet_gepeszet/9.webp",
    "/pictures/references/epulet_gepeszet/10.webp",
    "/pictures/references/epulet_gepeszet/11.webp",
    "/pictures/references/epulet_gepeszet/12.webp",
    "/pictures/references/epulet_gepeszet/13.webp",
    "/pictures/references/epulet_gepeszet/14.webp",
    "/pictures/references/epulet_gepeszet/15.webp",
    "/pictures/references/epulet_gepeszet/16.webp",
    "/pictures/references/epulet_gepeszet/17.webp",
    "/pictures/references/epulet_gepeszet/18.webp",
    "/pictures/references/epulet_gepeszet/20.webp",
    "/pictures/references/epulet_gepeszet/21.webp",
    "/pictures/references/epulet_gepeszet/22.webp",
    "/pictures/references/epulet_gepeszet/23.webp",
    "/pictures/references/epulet_gepeszet/24.webp",
    "/pictures/references/epulet_gepeszet/25.webp",
  ],
};

export default function Services() {
  const scrollToReferences = (serviceTitle) => {
    const element = document.getElementById(
      `references-${serviceTitle.replace(/\s+/g, "-").toLowerCase()}`
    );
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
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
                className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow flex flex-col items-center p-6 ${
                  service.hasReferences ? "cursor-pointer" : ""
                }`}
                onClick={() =>
                  service.hasReferences && scrollToReferences(service.title)
                }
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-[#C41E3A] mb-2 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-center">
                  {service.description}
                </p>
                {service.hasReferences && (
                  <p className="text-sm text-gray-500 mt-2 italic">
                    Kattints a referenciák megtekintéséhez
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Reference sections with service names as titles */}
          <div className="mt-16 flex flex-col gap-16">
            {services
              .filter((service) => service.hasReferences)
              .map((service) => (
                <div
                  key={service.title}
                  id={`references-${service.title
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`}
                >
                  <ReferenceImageSection
                    title={service.title}
                    references={referencesList[service.title]}
                  />
                </div>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
}
