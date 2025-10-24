import grace from "../assets/images/About-Story.jpg";
import arrival1 from "../assets/images/arrivel1.webp";

const AboutStory = () => {
  return (
    <>
      {/* ===== STORY BEHIND SECTION ===== */}
      <section className="bg-white flex flex-col md:flex-row items-center justify-between py-10 px-4 sm:px-8 md:px-16">
        {/* Left Side Content */}
        <div className="md:w-1/2 text-gray-800 order-2 md:order-1 mt-6 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#9A3E2E] mb-4 sm:mb-6">
            Story Behind
          </h1>

          <p className="leading-relaxed m-5 text-justify text-[14px] sm:text-[15px] text-gray-700">
            Al Mahdia Collection Pakistan was established in 2015. The brand
            offers a fusion of traditional and contemporary designs,
            incorporating vibrant colors and intricate embroideries. Al Mahdia
            has gained recognition for its commitment to promoting local artisans
            and creating employment opportunities in the fashion industry.
          </p>

          <div className="w-24 sm:w-28 h-[3px] bg-[#9A3E2E] mt-6 mb-6 sm:mb-8"></div>

          <div className="flex items-start space-x-4">
            <div className="text-[#9A3E2E] text-3xl"></div>
            <div>
              <h2 className="text-base sm:text-lg font-semibold mb-2 text-gray-900">
                Unique Team
              </h2>
              <p className="text-gray-700 m-5 leading-relaxed text-[14px] sm:text-[15px]">
                The unique team at Al Mahdia Clothing brand is a harmonious blend
                of creative minds, dedicated to crafting fashion-forward designs
                that embody elegance, comfort, and cultural fusion.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="md:w-1/2 order-1 md:order-2">
          <img
            src={grace}
            alt="About Al Mahdia Collection"
            className="w-full h-[250px] sm:h-[350px] md:h-[500px] object-cover rounded-md"
          />
        </div>
      </section>

      {/* ===== OUR COMPANY & VALUES SECTION ===== */}
      <section className="relative w-full bg-gray-50 flex flex-col md:flex-row items-center justify-center p-8 sm:p-10 md:p-14">
        {/* Left Side Image */}
        <div className="md:w-1/2 w-full h-[250px] sm:h-[350px] md:h-[570px] overflow-hidden">
          <img
            src={arrival1}
            alt="Our Company and Values"
            className="w-full h-full object-cover object-center rounded-md"
          />
        </div>

        {/* Right Side Content Box */}
        <div className="md:w-1/2 w-full flex justify-center items-center px-4 sm:px-8 md:px-10 py-8 md:py-12">
          <div className="bg-white shadow-sm rounded-md text-center p-6 sm:p-8 md:p-10 max-w-lg">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 mb-3 sm:mb-4">
              Our Company & Values
            </h2>

            <p className="text-gray-700 leading-relaxed text-[14px] sm:text-[15px] mb-6 sm:mb-8">
              With a focus on timeless pieces that blend comfort and style,
              Al Mahdia has become a go-to choice for modern individuals
              seeking sophisticated and versatile wardrobe staples.
            </p>

            <button className="border border-black px-6 sm:px-8 py-2 sm:py-3 text-sm tracking-wide hover:bg-black hover:text-white transition duration-300">
              GET IN TOUCH
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutStory;
