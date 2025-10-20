import grace from "../assets/images/grace.jpg"; // ✅ apni image ka path

const GraceSection = () => {
  return (
    <section className="bg-[#f8f8f8] flex flex-col md:flex-row items-center justify-between h-[500px]">
      {/* Left Content */}
      <div className="md:w-1/2 flex flex-col justify-center pl-10 md:pl-20">
        <h3 className="text-gray-700 tracking-widest uppercase  leading-tight relative inline-block">
          Designs That Tempt You!
          <span className="absolute left-0 bottom-[-6px] w-25 h-[2px] bg-black"></span>
        </h3>

        <h1 className="text-6xl font-light text-gray-900 leading-tight mt-6">
          Grace Your <br /> Personality
        </h1>

        {/* Buttons */}
        <div className="flex space-x-4 pt-8">
          <button className="bg-black text-white px-6 py-3 text-sm tracking-wide hover:bg-transparent hover:text-black border border-black transition duration-300">
            SHOP NOW
          </button>
          <button className="border border-black text-black px-6 py-3 text-sm tracking-wide hover:bg-black hover:text-white transition duration-300">
            ABOUT US
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 h-full">
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
