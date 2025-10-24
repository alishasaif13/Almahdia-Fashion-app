import grace from "../assets/images/grace.jpg"; // ✅ apni image ka path

const GraceSection = () => {
  return (
    <section className="bg-[#f8f8f8] flex flex-col-reverse md:flex-row items-center justify-between min-h-[500px]">
      {/* Left Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-10 md:pl-20 py-10 text-center md:text-left">
        <h3 className="text-gray-700 tracking-widest uppercase leading-tight relative inline-block mx-auto md:mx-0">
          Designs That Tempt You!
          <span className="absolute left-0 bottom-[-6px] w-20 h-[2px] bg-black"></span>
        </h3>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 leading-tight mt-6">
          Grace Your <br /> Personality
        </h1>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-8">
          <button className="bg-black text-white px-6 py-3 text-sm tracking-wide hover:bg-transparent hover:text-black border border-black transition duration-300">
            SHOP NOW
          </button>
          <button className="border border-black text-black px-6 py-3 text-sm tracking-wide hover:bg-black hover:text-white transition duration-300">
            ABOUT US
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 h-[300px] md:h-full">
        <img
          src={grace}
          alt="Grace Your Personality"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default GraceSection;
