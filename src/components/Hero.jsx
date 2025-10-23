import { useState, useEffect } from "react";
import arrivel1 from "../assets/images/hero1.jpeg";
import arrivel2 from "../assets/images/collection2.webp";
import arrivel3 from "../assets/images/collection1.webp";

const images = [arrivel1, arrivel2, arrivel3];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // ---------- Previous Slide ----------
  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  // ---------- Next Slide ----------
  const nextSlide = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  // ---------- Auto Slide every 3 seconds ----------
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[540px] md:h-[600px] overflow-hidden">
      {/* ---------- Image Carousel ---------- */}
      <div className="w-full h-full">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover object-top"
        />

        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 sm:p-3 rounded-full hover:bg-black transition"
        >
          &#10094;
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 sm:p-3 rounded-full hover:bg-black transition"
        >
          &#10095;
        </button>
      </div>

      {/* ---------- Overlay Text (Right Side) ---------- */}
      <div
        className="
          absolute 
          top-1/2 
          transform -translate-y-1/2 
          right-4 sm:right-10 md:right-20 
          w-[80%] sm:w-[60%] md:w-72 
          bg-[#edeae1] bg-opacity-80 
          p-4 sm:p-6 md:p-8 
          rounded-lg shadow-lg 
          text-center md:text-right
        "
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-black mb-4 leading-snug">
          LOOK <br />
          YOUR <br />
          BEST THIS <br />
          WINTER
        </h2>

        <div className="flex justify-center md:justify-end">
          <button className="border-2 border-black text-black px-4 py-2 rounded-md hover:bg-black hover:text-white transition-all duration-300">
            Explore
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
