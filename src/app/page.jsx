import HeroWithImage from "./components/HeroWithImage";
import Features from "./components/Features";
import Options from "./components/Options";

export const metadata = {
  title: "Deckbae - Gyors könnyűszerkezetes házépítés",
  description:
    "Prémium minőségű könnyűszerkezetes házak modern és fenntartható kivitelben. Gyorsan és költséghatékonyan!",
};

export default function Homepage() {
  return (
    <div>
      <div className="bg-gray-100 flex justify-center">
        <main className="flex flex-col items-center bg-white shadow-md rounded-xl mt-10 max-w-80 xs:max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl">
          <HeroWithImage />
          <Options />
          <Features />

          <div className="mx-auto w-11/12 lg:text-center mt-10 mb-10">
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl text-center">
              Rólunk
            </p>
            <p className="mt-6 mb-4 text-lg/8 text-gray-600 max-w-3xl mx-auto text-center md:text-left">
              Ismerd meg a Deckbae mögött álló filozófiánkat. Elkötelezettek
              vagyunk a minőségi kivitelezés és az ügyfeleink álmainak
              megvalósítása mellett.
            </p>
            <div className="flex flex-col xl:flex-row justify-between items-center gap-8">
              <div className="xl:w-1/2">
                <p className="mt-6 text-lg leading-8 text-gray-900 text-justify xl:text-left">
                  A Deckbae könnyűszerkezetes házak, pergolák, pavilonok és
                  melléképületek kivitelezésével foglalkozik. Termékeink modern,
                  energiatakarékos és esztétikailag kifinomult megoldásokat
                  kínálnak, amelyek tökéletesen illeszkednek a természetes
                  környezetbe. A széles választékunk lehetőséget ad arra, hogy
                  mindenki megtalálja az igényeinek megfelelő otthont vagy
                  kiegészítő épületet. Minőségi alapanyagokat és korszerű
                  technológiákat használunk annak érdekében, hogy ügyfeleink
                  maximális komfortot élvezhessenek otthonukban vagy
                  nyaralójukban.
                </p>
              </div>
              <div className="xl:w-1/2 mt-8 md:mt-0">
                <img
                  className="w-full rounded-lg shadow-xl hover:scale-[1.02] transition-transform duration-300"
                  src="/pictures/houses/oslo/1.webp"
                  alt="Könnyűszerkezetes modern ház - Deckbae"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
