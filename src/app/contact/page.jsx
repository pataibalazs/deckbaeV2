"use client";

import Head from "next/head";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactPage = () => {
  const [state, handleSubmit] = useForm("xrbpaake");

  return (
    <div className="bg-gray-100 flex flex-col items-center">
      <Head>
        <title>Kapcsolat | Deckbae – Gyors házépítés ajánlatkérés</title>
        <meta
          name="description"
          content="Lépj kapcsolatba velünk modern és gyors könnyűszerkezetes házak építéséhez! Írj üzenetet és kérj személyre szabott ajánlatot."
        />
        <meta
          name="keywords"
          content="kapcsolat deckbae, házépítés kapcsolat, ajánlatkérés könnyűszerkezetes ház, kapcsolatfelvétel modern házhoz"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Kapcsolat | Deckbae" />
        <meta
          property="og:description"
          content="Vedd fel velünk a kapcsolatot! Könnyűszerkezetes házak, garázsok és pergolák kivitelezése. Egyedi ajánlatkérés néhány kattintással."
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://deckbae.hu/contact" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kapcsolat | Deckbae" />
        <meta
          name="twitter:description"
          content="Lépj kapcsolatba a Deckbae csapatával gyors házépítési megoldásokért!"
        />
        <meta name="twitter:image" content="/og-image.jpg" />
        <link rel="canonical" href="https://deckbae.hu/contact" />
      </Head>

      <main className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg mt-10 mb-10 max-w-80 xs:max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl">
        <div className="bg-white">
          <div className="mx-auto max-w-7xl mb-10">
            <div className="mx-auto max-w-5xl text-center">
              <p className="mt-2 text-md font-bold tracking-tight text-red-600">
                Kapcsolatfelvétel
              </p>
              <h1 className="mt-2 mb-4 text-4xl font-semibold tracking-tight text-pretty text-gray-900">
                Kérdésed van a gyors házépítéssel, típusházainkkal vagy
                pergoláinkkal kapcsolatban?
              </h1>
              <p className="text-gray-600 text-lg">
                Írj nekünk üzenetet, és hamarosan jelentkezünk egy személyre
                szabott válasszal vagy ajánlattal.
              </p>

              <div className="bg-white text-left">
                {state.succeeded ? (
                  <div className="mx-auto mt-14 mb-14 max-w-xl text-center p-8 border border-green-200 bg-green-50 rounded-lg shadow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16 mx-auto text-green-600 mb-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <h3 className="text-2xl font-bold text-green-800 mb-2">
                      Köszönjük!
                    </h3>
                    <p className="text-lg text-green-700">
                      Az üzeneted sikeresen elküldtük. Hamarosan felvesszük
                      veled a kapcsolatot.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="mx-auto mt-14 mb-14 max-w-xl"
                  >
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                          Email cím
                        </label>
                        <div className="mt-2.5">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                          />
                          <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                            className="text-red-600 text-sm mt-1"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="product"
                          className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                          Melyik termék érdekel?
                        </label>
                        <select
                          id="product"
                          name="product"
                          className="mt-2 block bg-white w-full rounded-md border-0 py-3 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-red-600 sm:text-sm sm:leading-6"
                        >
                          <option>Santa Cruz</option>
                          <option>Oslo</option>
                          <option>Montana</option>
                          <option>Dallas</option>
                          <option>Helsinki</option>
                          <option>Malibu</option>
                          <option>MalibuXL</option>
                          <option>Yukon</option>
                          <option>Saint-Tropez</option>
                          <option>Modena</option>
                          <option>Munich</option>
                          <option>Tihany</option>
                          <option>Toronto</option>
                          <option>Nincs specifikus</option>
                        </select>
                      </div>

                      <div className="sm:col-span-2">
                        <label
                          htmlFor="message"
                          className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                          Üzenet
                        </label>
                        <div className="mt-2.5">
                          <textarea
                            id="message"
                            name="message"
                            rows={4}
                            required
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                          />
                          <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                            className="text-red-600 text-sm mt-1"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-10">
                      <button
                        type="submit"
                        disabled={state.submitting}
                        className={`block w-full rounded-md bg-red-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200 ${
                          state.submitting
                            ? "opacity-70 cursor-not-allowed"
                            : ""
                        }`}
                      >
                        {state.submitting ? "Küldés folyamatban..." : "Küldés"}
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Céges információ blokk */}
              <div className="grid gap-8 mt-10 text-left">
                <div className="bg-white border border-gray-200 p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="mr-4 p-3 bg-red-100 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-red-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        Deckbae Global Kft.
                      </h3>
                      <p className="text-md font-medium text-red-600">Europe</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-gray-500 mr-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        <div>
                          <p className="text-sm text-gray-500">Telefon</p>
                          <p className="text-md font-medium text-gray-800">
                            +36 30 612 7858
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-gray-500 mr-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>
                        <div>
                          <p className="text-sm text-gray-500">WhatsApp</p>
                          <p className="text-md font-medium text-gray-800">
                            +36 30 612 7858
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-gray-500 mr-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <div>
                          <p className="text-sm text-gray-500">Cím</p>
                          <p className="text-md font-medium text-gray-800">
                            2073 Tök, Fő utca 1, Magyarország
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-gray-500 mr-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        <div>
                          <p className="text-sm text-gray-500">Email</p>
                          <a
                            href="mailto:deckbaesales@gmail.com"
                            className="text-md font-medium text-red-600 hover:underline"
                          >
                            deckbaesales@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Vége céginfóknak */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
