import { HomeIcon } from "@heroicons/react/24/outline";
import { BuildingOffice2Icon } from "@heroicons/react/24/outline";
import { HomeModernIcon } from "@heroicons/react/24/outline";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Options() {
  return (
    <div className="container mx-auto px-10 pb-10 sm:pb-20 lg:pt-0 pt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link
          href="/houses"
          className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
        >
          <HomeIcon className="w-16 h-16 text-red-600 mb-4" />
          <span className="text-xl font-semibold text-gray-800">Házak</span>
        </Link>

        <Link
          href="/pergolas"
          className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
        >
          <BuildingOffice2Icon className="w-16 h-16 text-red-600 mb-4" />
          <span className="text-xl font-semibold text-gray-800">Pergolák</span>
        </Link>

        <Link
          href="/garages"
          className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
        >
          <HomeModernIcon className="w-16 h-16 text-red-600 mb-4" />
          <span className="text-xl font-semibold text-gray-800">Garázsok</span>
        </Link>

        <Link
          href="/szolgaltatasok"
          className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
        >
          <WrenchScrewdriverIcon className="w-16 h-16 text-red-600 mb-4" />
          <span className="text-xl font-semibold text-gray-800">
            Szolgáltatások
          </span>
        </Link>
      </div>
    </div>
  );
}
