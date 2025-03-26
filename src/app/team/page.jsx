const people = [
  {
    name: "Molnár Patrik",
    role: "Kivetelező",
    imageUrl: "/pictures/david.jpg",
    bio: "Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.",
    xUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Rőczei Gellért Dávid",
    role: "Kivetelező",
    imageUrl: "/pictures/david.jpg",
    bio: "Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.",
    xUrl: "#",
    linkedinUrl: "#",
  },
];

export default function Team() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <main className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg w-11/12 mt-10">
        <div className="bg-white">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-5xl lg:text-center">
              <p className="mt-2 text-md font-bold tracking-tight text-red-600">
                Csapat
              </p>
              <p className="mt-2 mb-4 text-xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl sm:text-balance">
                Ismerd meg a Deckbae csapatát!
              </p>
            </div>
            <div className="bg-white py-10">
              <div className="mx-auto grid max-w-8xl grid-cols-1 gap-20 px-2 lg:px-8 xl:grid-cols-3">
                <div className="mx-auto max-w-3xl lg:mx-0">
                  <p className="mt-6 text-lg text-gray-600">
                    Csapatunk dinamikus, szenvedélyes szakemberekből áll, akik
                    elkötelezettek a munkájuk iránt és arra törekednek, hogy a
                    legjobb eredményeket nyújtsák ügyfeleinknek. Többéves
                    tapasztalattal rendelkezünk az építőipar területén, ami
                    lehetővé teszi számunkra, hogy innovatív, minőségi
                    megoldásokat kínáljunk minden projekthez. Büszkék vagyunk a
                    részletekre való odafigyelésünkre és a megbízható, időben
                    történő kivitelezésre. Célunk, hogy minden ügyfelünk álmát
                    valósággá változtassuk, miközben egyedi igényeiket és
                    elképzeléseiket helyezzük a középpontba.
                  </p>
                </div>
                <ul
                  role="list"
                  className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
                >
                  {people.map((person) => (
                    <li key={person.name}>
                      <img
                        alt=""
                        src={person.imageUrl}
                        className="aspect-3/2 w-full rounded-2xl object-cover"
                      />
                      <h3 className="mt-6 text-lg/8 font-semibold text-gray-900">
                        {person.name}
                      </h3>
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
