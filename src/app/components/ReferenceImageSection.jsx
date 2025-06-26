"use client";

import { useState } from "react";
import Image from "next/image";

export default function ReferenceImageSection({ references, title }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (imageSrc) => {
    const index = references.findIndex((img) => img === imageSrc);
    setCurrentIndex(index);
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      setSelectedImage(references[newIndex]);
    }
  };

  const goToNext = () => {
    if (currentIndex < references.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      setSelectedImage(references[newIndex]);
    }
  };

  return (
    <div className="w-full">
      <h1 className="mt-2 mb-4 text-2xl font-semibold tracking-tight text-pretty text-gray-900 text-center">
        {title}
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 pt-4">
        {references.map((img, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-lg shadow cursor-pointer"
          >
            <Image
              src={img}
              alt={`Referencia ${idx + 1}`}
              width={300}
              height={160}
              className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
              onClick={() => openModal(img)}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </div>
        ))}
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-gray-300 z-20 bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center"
            onClick={closeModal}
          >
            ×
          </button>

          {/* Previous arrow */}
          {currentIndex > 0 && (
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-6xl font-bold hover:text-gray-300 z-20 bg-black bg-opacity-50 rounded-full w-16 h-16 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
            >
              ‹
            </button>
          )}

          {/* Next arrow */}
          {currentIndex < references.length - 1 && (
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-6xl font-bold hover:text-gray-300 z-20 bg-black bg-opacity-50 rounded-full w-16 h-16 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
            >
              ›
            </button>
          )}

          <div className="relative max-w-4xl max-h-screen p-4">
            <Image
              src={selectedImage}
              alt="Enlarged reference"
              width={800}
              height={600}
              className="max-w-full max-h-full object-contain rounded-lg transition-opacity duration-300"
              onClick={(e) => e.stopPropagation()}
              priority={true}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-3 py-1 rounded-full text-sm">
              {currentIndex + 1} / {references.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
