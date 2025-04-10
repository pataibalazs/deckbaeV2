import Head from "next/head";

const people = [
  {
    name: "Molnár Patrik",
    role: "Kivitelező",
    imageUrl: "/pictures/patrik.jpg",
    bio: "Molnár Patrik vagyok, több mint 20 éve dolgozom asztalosként. Nemzetközi tapasztalataimat Kanadában, Ausztráliában és az USA-ban szereztem, különösen pergolák, teraszok és prémium kültéri megoldások kivitelezésében. Jelenleg a Deckbae kültéri bútorait és pergoláit tervezem és gyártom, ahol a modern design és a precíz kézművesség találkozik.",
    xUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Rőczei Gellért Dávid",
    role: "Kivitelező",
    imageUrl: "/pictures/david.jpg",
    bio: "Precíz, pontos, gyors és rugalmas épületgépésztechnikus vagyok, 7 éves tapasztalattal a szakmában. Ács végzettséggel is rendelkezem, és széleskörű tapasztalattal bírok légkezelők, központi fűtés, klímák, gázkazánok és vegyestüzelésű kazánok kivitelezésében és tervezésében, mind lakossági, mind ipari környezetben. Alapszerelések mestereként mottóm: „Úgy állj hozzá a munkához, hogy más is odaférjen.”",
    xUrl: "#",
    linkedinUrl: "#",
  },
];

export default function Team() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <Head>
        <title>
          Deckbae csapat - Kivitelező szakemberek könnyűszerkezetes házakhoz
        </title>
        <meta
          name="description"
          content="Ismerd meg a Deckbae kivitelezői csapatát: tapasztalt, megbízható szakemberek könnyűszerkezetes házak, pergolák és kültéri megoldások területén."
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <main className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg mt-10 max-w-80 xs:max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl">
        <div className="bg-white">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-5xl text-center">
              <p className="mt-2 text-md font-bold tracking-tight text-red-600">
                Csapat
              </p>
              <h1 className="mt-2 mb-1 sm:mb-4 font-semibold tracking-tight text-pretty text-gray-900 text-4xl text-balance">
                Ismerd meg a Deckbae kivitelezői csapatát!
              </h1>
            </div>

            <div className="bg-white py-2 lg:py-10">
              <div className="mx-auto grid max-w-8xl grid-cols-1 gap-20 sm:px-2 lg:px-8 xl:grid-cols-3">
                <div className="mx-auto max-w-3xl lg:mx-0">
                  <p className="mt-6 text-lg text-gray-600 text-left sm:text-justify xl:text-left">
                    Csapatunk tapasztalt kivitelező szakemberekből áll, akik
                    elkötelezettek a minőségi, gyors és modern könnyűszerkezetes
                    házak építése iránt. Többéves tapasztalatunk van az
                    építőipar különböző területein, beleértve az
                    asztalosmunkákat, épületgépészetet, pergolák és prémium
                    kültéri szerkezetek kivitelezését is. Minden projektünk
                    során kiemelt figyelmet fordítunk az ügyfeleink igényeire és
                    az esztétikai részletekre.
                  </p>
                </div>

                <ul
                  role="list"
                  className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
                >
                  {people.map((person) => (
                    <li key={person.name}>
                      <img
                        alt={`${person.name} - ${person.role}`}
                        src={person.imageUrl}
                        className="aspect-3/2 w-full rounded-2xl object-cover"
                      />
                      <h2 className="mt-6 text-lg/8 font-semibold text-gray-900">
                        {person.name}
                      </h2>
                      <p className="text-base/7 text-gray-600">{person.role}</p>
                      <p className="mt-4 text-base/7 text-gray-600">
                        {person.bio}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
