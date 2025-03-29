"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import {
  MinusIcon,
  PlusIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState, useEffect } from "react";

function formatPrice(price) {
  return new Intl.NumberFormat("hu-HU").format(price || 0);
}

export default function Item({ product }) {
  const basePrice = product?.basePrice || 0;
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [totalPrice, setTotalPrice] = useState(basePrice);

  const extras = product?.extras || [];

  useEffect(() => {
    if (!product) return;

    const extrasTotal = selectedExtras.reduce((sum, id) => {
      const extra = extras.find((e) => e.id === id);
      return sum + (extra?.price || 0);
    }, 0);

    setTotalPrice(basePrice + extrasTotal);
  }, [selectedExtras, product, basePrice, extras]);

  const toggleExtra = (id) => {
    setSelectedExtras((prev) =>
      prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]
    );
  };

  const isExtraSelected = (id) => selectedExtras.includes(id);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl sm:px-6 sm:py-2 xl:px-8">
        <div className="xl:flex xl:flex-col">
          {/* Top section with image and basic info */}
          <div className="xl:grid xl:grid-cols-2 xl:items-start xl:gap-x-8">
            {/* Image gallery */}
            <TabGroup className="flex flex-col-reverse">
              {/* Thumbnails */}
              <div className="mt-6 w-full sm:block">
                <TabList className="grid grid-cols-4 gap-4 sm:justify-items-start">
                  {product.images.map((image) => (
                    <Tab
                      key={image.id}
                      className="relative cursor-pointer w-full sm:w-auto"
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="rounded-md object-cover w-full h-16 sm:h-20"
                      />
                    </Tab>
                  ))}
                </TabList>
              </div>

              {/* Main images */}
              <TabPanels>
                {product.images.map((image) => (
                  <TabPanel key={image.id}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="aspect-video w-full object-cover rounded-sm"
                    />
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>

            {/* Product Info - Basic */}
            <div className="mt-10 sm:px-4 sm:mt-16 sm:px-0 xl:mt-0">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                {product.name}
              </h1>

              <p className="text-3xl tracking-tight text-gray-900 mt-2">
                Bruttó: {formatPrice(totalPrice)} Ft
              </p>
              <p className="text-sm text-gray-500">
                Alap ár: {formatPrice(basePrice)} Ft
              </p>

              <div
                className="mt-6 space-y-6 text-base text-gray-700 sm:text-left text-justify"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />

              {/* Tulajdonságok / Properties */}
              <section className="mt-8">
                <div className="divide-y divide-gray-200 border-t">
                  {product.details.map((section) => (
                    <Disclosure key={section.name} as="div">
                      <h3>
                        <DisclosureButton className="group relative flex w-full items-center justify-between py-6 text-left">
                          <span className="text-lg font-medium text-gray-900 group-data-open:text-green-600">
                            {section.name}
                          </span>
                          <span className="ml-6 flex items-center">
                            <PlusIcon
                              className="block h-6 w-6 text-gray-400 group-hover:text-gray-500 group-data-open:hidden"
                              aria-hidden="true"
                            />
                            <MinusIcon
                              className="hidden h-6 w-6 text-green-500 group-hover:text-green-600 group-data-open:block"
                              aria-hidden="true"
                            />
                          </span>
                        </DisclosureButton>
                      </h3>
                      <DisclosurePanel className="pb-6">
                        <ul className="list-disc space-y-1 pl-5 text-sm/6 text-gray-700 marker:text-green-600">
                          {section.items.map((item, index) => (
                            <li key={index} className="pl-2">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </DisclosurePanel>
                    </Disclosure>
                  ))}
                </div>
              </section>
            </div>
          </div>

          {/* Full width Extras section */}
          {extras.length > 0 && (
            <div className="mt-12 pt-6">
              <h3 className="text-2xl font-medium text-gray-900 mb-6">
                Kiegészítők
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {extras.map((extra) => (
                  <button
                    key={extra.id}
                    onClick={() => toggleExtra(extra.id)}
                    className={`p-4 border rounded-lg text-left transition-colors ${
                      isExtraSelected(extra.id)
                        ? "border-green-600 bg-green-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="text-lg font-medium text-gray-900">
                        {extra.name}
                      </h4>
                      {isExtraSelected(extra.id) ? (
                        <CheckCircleIcon className="h-6 w-6 text-green-600" />
                      ) : (
                        <XCircleIcon className="h-6 w-6 text-gray-400" />
                      )}
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                      {extra.description}
                    </p>
                    <p className="mt-2 text-gray-900 font-medium">
                      + {formatPrice(extra.price)} Ft
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mt-10 border-b pb-6 pt-6">
            <div className="flex flex-col lg:flex-row justify-between items-center sm:gap-0">
              {/* Left side: Összesen and price */}
              <div className="flex items-center justify-center sm:justify-start mb-3 lg:mb-0">
                <h3 className="text-xl font-medium text-gray-900 mr-2">
                  Összesen:
                </h3>
                <p className="text-xl xs:text-2xl font-bold text-gray-900">
                  {formatPrice(totalPrice)} Ft
                </p>
              </div>

              {/* Right side: Button */}
              <div>
                <Link
                  href="/contact"
                  className="text-center inline-flex justify-center rounded-md bg-green-600 px-5 xs:px-8 xs:py-5 py-2 text-white text-lg xs:text-xl font-medium hover:bg-green-700 transition-colors shadow-sm"
                >
                  Felkeresem a DECKBAE csapatát
                </Link>
              </div>
            </div>

            {/* Optional: Disclaimer text */}
            <p className="text-sm text-gray-500 mt-3 text-center lg:text-left lg:max-w-72 xl:max-w-2xl">
              A feltüntetett ár tartalmazza az alapárat és a kiválasztott
              kiegészítőket.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
