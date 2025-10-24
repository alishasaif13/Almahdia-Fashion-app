import { useState, useEffect } from "react";
import arrivel1 from "../assets/images/hero1.jpeg";
import arrivel2 from "../assets/images/collection2.webp";
import arrivel3 from "../assets/images/collection1.webp";

const images = [arrivel1, arrivel2, arrivel3];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[420px] sm:h-[500px] md:h-[600px] overflow-hidden">
      {/* ---------- Image Carousel ---------- */}
      <div className="w-full h-full relative">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover object-top"
        />

        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-3 md:left-6 top-1/2 -translate-y-1/2 bg-black/40 text-white p-1.5 sm:p-3 rounded-full hover:bg-black transition-all duration-300 text-sm sm:text-base"
        >
          &#10094;
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-3 md:right-6 top-1/2 -translate-y-1/2 bg-black/40 text-white p-1.5 sm:p-3 rounded-full hover:bg-black transition-all duration-300 text-sm sm:text-base"
        >
          &#10095;
        </button>
      </div>

      {/* ---------- Overlay Text ---------- */}
      <div
        className="
          absolute 
          bottom-4 sm:bottom-auto sm:top-1/2 
          sm:-translate-y-1/2 
          right-1/2 sm:right-8 md:right-16 
          translate-x-1/2 sm:translate-x-0
          w-[85%] sm:w-[70%] md:w-72 
          bg-[#edeae1]/90 
          p-3 sm:p-6 md:p-8 
          rounded-lg shadow-lg 
          text-center sm:text-right
        "
      >
        <h2 className="text-lg xs:text-xl sm:text-3xl md:text-4xl text-black mb-2 sm:mb-4 leading-tight sm:leading-snug">
          LOOK <br />
          YOUR <br />
          BEST THIS <br />
          WINTER
        </h2>

        <div className="flex justify-center sm:justify-end">
          <button className="border-2 border-black text-black px-3 sm:px-4 py-1.5 sm:py-2 rounded-md hover:bg-black hover:text-white transition-all duration-300 text-xs sm:text-base">
            Explore
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
