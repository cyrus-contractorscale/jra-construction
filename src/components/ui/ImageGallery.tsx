"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import { AnimateOnScroll } from "./AnimateOnScroll";

interface ImageGalleryProps {
  images: string[];
  title?: string;
  description?: string;
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
      />
    </svg>
  );
}

export function ImageGallery({ images, title, description }: ImageGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openModal = (index: number) => {
    setCurrentImage(index);
    setIsOpen(true);
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "unset"; // Re-enable background scrolling
  };

  const navigateImages = (direction: "prev" | "next") => {
    if (direction === "prev") {
      setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    } else {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, i) => (
          <AnimateOnScroll key={image} variant="fade-up" delay={i * 50}>
            <button
              type="button"
              onClick={() => openModal(i)}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-lg transition duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              <Image
                src={image}
                alt={`Gallery Image ${i + 1}`}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </button>
          </AnimateOnScroll>
        ))}
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-md px-4 py-8">
          <button
            onClick={closeModal}
            className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/30"
            aria-label="Close gallery"
          >
            <XIcon className="h-6 w-6" />
          </button>

          <div className="relative h-full w-full max-w-5xl max-h-[80vh]">
            <Image
              src={images[currentImage]}
              alt={`Gallery Image ${currentImage + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
            <button
              onClick={() => navigateImages("prev")}
              className="absolute left-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/30"
              aria-label="Previous image"
            >
              ←
            </button>
            <button
              onClick={() => navigateImages("next")}
              className="absolute right-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/30"
              aria-label="Next image"
            >
              →
            </button>
          </div>
        </div>
      )}
    </>
  );
}
