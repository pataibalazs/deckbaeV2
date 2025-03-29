"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HomeIcon } from "@heroicons/react/24/outline";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <main className="flex flex-col items-center p-8 bg-white shadow-md rounded-lg w-11/12 max-w-4xl my-10">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center">
                {/* Logo image instead of text */}
                <Link href="/">
                  <Image
                    src="/pictures/logo.png"
                    alt="DECKBAE Logo"
                    width={120}
                    height={40}
                    className="h-10 w-auto"
                  />
                </Link>
              </div>
              <h1 className="mt-6 text-6xl font-bold text-gray-900">404</h1>
              <h2 className="mt-4 text-2xl font-semibold text-gray-800">
                Az oldal nem található
              </h2>
              <p className="mt-4 text-md text-gray-600 max-w-md">
                Sajnáljuk, a keresett oldal nem elérhető. Lehet, hogy a tartalom
                áthelyezésre került vagy az URL hibás.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-colors"
                >
                  <HomeIcon className="w-5 h-5" />
                  Vissza a főoldalra
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-5 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors"
                >
                  Kapcsolatfelvétel
                </Link>
              </div>
            </div>

            <div className="order-first md:order-last">
              <img
                className="w-full h-auto rounded-lg shadow-lg object-cover max-h-80"
                src="/pictures/houses/oslo/haz.png"
                alt="Deckbae ház"
              />
              <p className="text-sm text-gray-500 mt-2 text-center">
                Fedezzen fel inkább egy gyönyörű házat
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
