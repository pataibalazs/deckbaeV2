"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  HomeModernIcon,
  BuildingStorefrontIcon,
  FireIcon,
  SwatchIcon,
  WrenchScrewdriverIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import { PhoneIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

const products = [
  {
    name: "Házak",
    description: "Modern, energiahatékony könnyűszerkezetes házak",
    href: "/houses",
    icon: HomeModernIcon,
  },
  {
    name: "Pergolák",
    description: "Elegáns, időtálló kerti és teraszmegoldások",
    href: "/pergolas",
    icon: SunIcon,
  },
  {
    name: "Garázs",
    description: "Praktikus tárolók és többcélú melléképületek",
    href: "/garages",
    icon: BuildingStorefrontIcon,
  },
];

const accessories = [
  {
    name: "Házak",
    description: "Modern, energiahatékony könnyűszerkezetes házak",
    href: "/house-extra",
    icon: HomeModernIcon,
  },
  {
    name: "Pergolák",
    description: "Elegáns, időtálló kerti és teraszmegoldások",
    href: "/pergola-extra",
    icon: SunIcon,
  },
  {
    name: "Garázs",
    description: "Praktikus tárolók és többcélú melléképületek",
    href: "/garage-extra",
    icon: BuildingStorefrontIcon,
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [accessoriesOpen, setAccessoriesOpen] = useState(false);

  const productsRef = useRef(null);
  const accessoriesRef = useRef(null);

  // Handle click outside to close dropdowns
  useEffect(() => {
    function handleClickOutside(event) {
      if (productsRef.current && !productsRef.current.contains(event.target)) {
        setProductsOpen(false);
      }
      if (
        accessoriesRef.current &&
        !accessoriesRef.current.contains(event.target)
      ) {
        setAccessoriesOpen(false);
      }
    }

    // Add scroll fix
    document.documentElement.style.overflowY = "scroll";

    // Add outside click handler
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.documentElement.style.overflowY = "";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-xl">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1 mr-5">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">DECKBAE</span>
            <img
              src="/pictures/logo.png"
              alt="DECKBAE Logo"
              className="h-7 w-auto hover:h-11 transition-all duration-200 ease-in-out"
            />
          </Link>
        </div>
        <div className="flex xl:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden xl:flex lg:gap-x-10">
          <Link
            href="/"
            className="text-lg font-semibold italic text-black hover:text-slate-500"
          >
            Főoldal
          </Link>

          <Link
            href="/houses"
            className="text-lg font-semibold italic text-black hover:text-slate-500"
          >
            Házak
          </Link>

          <Link
            href="/pergolas"
            className="text-lg font-semibold italic text-black hover:text-slate-500"
          >
            Pergolák
          </Link>
          <Link
            href="/garages"
            className="text-lg font-semibold italic text-black hover:text-slate-500"
          >
            Garázsok
          </Link>
          <Link
            href="/services"
            className="text-lg font-semibold italic text-black hover:text-slate-500"
          >
            Szolgáltatások
          </Link>
          <Link
            href="/team"
            className="text-lg font-semibold italic text-black hover:text-slate-500"
          >
            Csapat
          </Link>
          <Link
            href="/contact"
            className="text-lg font-semibold italic text-black hover:text-slate-500"
          >
            Kontakt
          </Link>
        </div>

        <div className="hidden xl:flex xl:flex-1 xl:justify-end">
          <a
            href="tel:+36306127858"
            className="flex items-center gap-2 text-red-600 hover:text-red-800 font-semibold italic group"
          >
            <PhoneIcon className="h-5 w-5 text-red-600 group-hover:text-red-800 transition-colors" />
            <span className="group-hover:text-red-800 transition-colors">
              +36 30 612 7858
            </span>
          </a>
        </div>
      </nav>

      {/* Mobile menu */}
      <Dialog
        as="div"
        className="xl:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">DECKBAE</span>
              <img
                className="h-8 w-auto"
                src="/pictures/logo.png"
                alt="DECKBAE Logo"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Főoldal
                </Link>
                <Link
                  href="/houses"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Házak
                </Link>
                <Link
                  href="/pergolas"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pergolák
                </Link>
                <Link
                  href="/garages"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Garázsok
                </Link>
                <Link
                  href="/services"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Szolgáltatások
                </Link>
                <Link
                  href="/team"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Csapat
                </Link>
                <Link
                  href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Kontakt
                </Link>
              </div>
              <div className="py-6">
                <a
                  href="tel:+36306127858"
                  className="flex items-center gap-2 text-red-600 hover:text-red-800 font-semibold italic group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <PhoneIcon className="h-5 w-5 text-red-600 group-hover:text-red-800 transition-colors" />
                  <span className="group-hover:text-red-800 transition-colors">
                    +36 30 612 7858
                  </span>
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
