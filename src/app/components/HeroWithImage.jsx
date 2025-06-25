import Link from "next/link";

export default function HeroWithImage() {
  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-2 lg:px-0">
        <div className="px-6 md:pb-10 pt-10 md:pt-0 lg:pb-24 md:col-span-6 sm:pb-32 lg:col-span-6 lg:px-8 lg:pt-16 lg:pb-48 xl:col-span-6">
          <div className="mx-auto max-w-lg lg:mx-0">
            <h1 className="text-left xs:text-center lg:text-left sm:mt-24 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:mt-10 sm:text-7xl">
              Tervezd meg és építsd fel álmaid otthonát!
            </h1>
            <p className="mt-8 mb-2 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              A Deckbae prémium minőségű könnyűszerkezetes házakat kínál modern
              és fenntartható kivitelben. Gyors kivitelezés, energiatakarékos
              megoldások és időtálló dizájn – minden, amit egy tökéletes otthon
              nyújthat.
            </p>
          </div>
        </div>
        <div className="relative p-4 sm:pt-0 xs:p-4 lg:p-0 lg:h-[85%] lg:col-span-6 lg:-mr-0 xl:absolute xl:inset-0 xl:left-1/2 xl:bottom-1/4 xl:mr-0 2xl:w-160">
          <img
            alt="DECKBAE"
            src="/pictures/dock.jpg"
            className="aspect-3/2 w-full bg-gray-50 object-cover rounded-md lg:absolute lg:inset-0 lg:aspect-auto lg:h-full lg:min-h-full object-right-top"
          />
        </div>
      </div>
    </div>
  );
}
