import Head from "next/head";
import Item from "../components/HouseItem";
import { products } from "../data/houses";

const Houses = () => {
  const packages = [
    {
      title: "Gázfűtési csomag",
      items: ["Gázkazán", "Gáz vízmelegítő", "Padlófűtés"],
      icon: "🔥",
    },
    {
      title: "Hőszivattyú és napelem csomag",
      items: [
        "Napelem rendszer 7-20 kW",
        "Akkumulátor visszatáplálás 5-15 kW",
        "Hőszivattyú",
        "Padlófűtés",
      ],
      icon: "☀️",
    },
    {
      title: "Hagyományos magyar csomag",
      items: [
        "10 cm szigetelés (összesen 25 cm)",
        "Nemes vakolat",
        "Vörös cserépfedés",
        "Fa ablakok és ajtók",
      ],
      icon: "🏡",
    },
    {
      title: "Modern belső tér csomag",
      items: [
        "Szürke dizájn tónusok",
        "Modern konyha és fürdőszoba",
        "Kerámia burkolat",
        "Beépített világítás",
      ],
      icon: "🏠",
    },
    {
      title: "Rusztikus belső tér csomag",
      items: [
        "Barna színpaletta",
        "Kivágott felújított gerendák",
        "Felújított tégla falak és konyhai hátfal",
        "Természetes fa konyhabútorok csempe munkalappal",
      ],
      icon: "🪵",
    },
    {
      title: "Prémium csomag",
      items: [
        "Prémium konyha és fürdőszoba",
        "Parketta",
        "Thermo tölgy borítás",
      ],
      icon: "✨",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <Head>
        <title>Deckbae Típusházak – Könnyűszerkezetes házépítés gyorsan</title>
        <meta
          name="description"
          content="Fedezd fel a Deckbae típusházait! Gyors, modern, és költséghatékony könnyűszerkezetes házépítés testreszabható csomagokkal és dizájnmegoldásokkal."
        />
        <meta
          name="keywords"
          content="könnyűszerkezetes ház, típusház, gyors házépítés, modern családi ház, olcsó ház építés, energiatakarékos ház"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Deckbae Típusházak – Könnyűszerkezetes házépítés gyorsan"
        />
        <meta
          property="og:description"
          content="Modern típusházak és testreszabható csomagok a Deckbae-nél. Építsd fel álmaid otthonát gyorsan és megfizethetően!"
        />
        <meta property="og:image" content="/pictures/houses/cover.jpg" />
        <meta property="og:url" content="https://deckbae.hu/houses" />
        <link rel="canonical" href="https://deckbae.hu/houses" />
      </Head>

      <main className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg mt-10 max-w-80 xs:max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl">
        <div className="bg-white w-full">
          <div className="mx-auto max-w-5xl lg:text-center">
            <p className="mt-2 text-md font-bold tracking-tight text-red-600">
              Típusházaink
            </p>
            <h1 className="mt-2 mb-4 text-4xl font-semibold tracking-tight text-pretty text-gray-900">
              Készen állsz az új otthonodra?
            </h1>
            <p className="text-lg text-gray-600 mt-4">
              Modern könnyűszerkezetes házak gyors kivitelezéssel, alacsony
              fenntartási költségekkel és rugalmas dizájnlehetőségekkel. Fedezd
              fel kínálatunkat és válassz testreszabható csomagjaink közül!
            </p>
          </div>

          {/* Render all houses */}
          <div className="flex flex-col gap-20 mt-10">
            {Object.entries(products).map(([slug, product]) => (
              <Item key={slug} product={product} />
            ))}
          </div>

          {/* Packages section */}
          <div className="mt-24 mb-10">
            <div className="mx-auto max-w-5xl text-center">
              <p className="text-md font-bold tracking-tight text-red-600">
                Választható csomagok
              </p>
              <h2 className="mt-2 mb-10 text-3xl font-semibold tracking-tight text-pretty text-gray-900">
                Testreszabható kiegészítők minden házunkhoz
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-6 hover:border-red-400 transition-all hover:shadow-md"
                >
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">{pkg.icon}</span>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {pkg.title}
                    </h3>
                  </div>
                  <ul className="list-disc pl-5 space-y-2">
                    {pkg.items.map((item, idx) => (
                      <li key={idx} className="text-gray-700">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="text-gray-600 max-w-2xl mx-auto">
                Minden csomagunk és házunk egyedi igényekre szabható. Vegye fel
                velünk a kapcsolatot a részletekért és egy személyre szabott
                árajánlatért.
              </p>
              <a
                href="/contact"
                className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all"
              >
                Kapcsolatfelvétel
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Houses;
