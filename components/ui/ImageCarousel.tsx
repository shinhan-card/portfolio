"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Image from "next/image";

export interface CarouselImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  externalLink?: string;
  autoPlay?: boolean;
  interval?: number;
}

export default function ImageCarousel({
  images,
  externalLink,
  autoPlay = false,
  interval = 5000,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play logic
  // useEffect(() => {
  //   if (!autoPlay) return;
  //   const timer = setInterval(handleNext, interval);
  //   return () => clearInterval(timer);
  // }, [currentIndex, autoPlay, interval]);

  if (images.length === 0) return null;

  return (
    <div className="relative w-full">
      {/* Image container */}
      <div className="relative aspect-[16/10] bg-surface2 rounded-lg overflow-hidden shadow-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              className="object-contain"
              priority={currentIndex === 0}
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-bg/90 hover:bg-bg border border-border rounded-full flex items-center justify-center transition-all hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 text-text" strokeWidth={2.5} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-bg/90 hover:bg-bg border border-border rounded-full flex items-center justify-center transition-all hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 text-text" strokeWidth={2.5} />
            </button>
          </>
        )}

        {/* External link button */}
        {externalLink && (
          <a
            href={externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 px-3 py-2 bg-bg/90 hover:bg-accent border border-border hover:border-accent rounded-lg flex items-center gap-2 text-xs font-medium text-text hover:text-white transition-all z-10 group"
          >
            <span>View Live</span>
            <ExternalLink className="w-3 h-3 group-hover:rotate-12 transition-transform" />
          </a>
        )}
      </div>

      {/* Caption */}
      {images[currentIndex].caption && (
        <div className="mt-3 text-center">
          <p className="text-sm text-muted">{images[currentIndex].caption}</p>
        </div>
      )}

      {/* Dots navigation */}
      {images.length > 1 && (
        <div className="flex items-center justify-center gap-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-accent w-8"
                  : "bg-border hover:bg-muted"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-bg/90 border border-border rounded-full text-xs font-mono text-muted">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
