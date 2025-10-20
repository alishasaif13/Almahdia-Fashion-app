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
}, []); // no dependencies needed

  return (
    <section className="relative w-full h-[540px] overflow-hidden">
      {/* ---------- Image Carousel ---------- */}
      <div className="w-full h-[550px] overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover object-top"
        />

        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-opacity-50 bg-black text-white p-3 rounded-full hover:bg-black-80 transition"
        >
          &#10094;
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-opacity-50 bg-black text-white p-3 rounded-full hover:bg-black-80 transition"
        >
          &#10095;
        </button>
      </div>

      {/* ---------- Overlay Text (Right Side) ---------- */}
      <div className="absolute right-19 top-1/2 transform -translate-y-1/2 w-70 bg-[#edeae1] bg-opacity-80 p-8 rounded-lg shadow-lg max-w-sm text-right">
        <h2 className="text-3xl md:text-4xl text-black mb-4 text-center">
          LOOK <br />
          YOUR <br />
          BEST THIS <br />
          WINTER
        </h2>

        <div className="flex justify-center">
          <button className="border-2 border-black text-black p-2 w-25 rounded-md hover:bg-black hover:text-white transition-all duration-300">
            Explore
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
