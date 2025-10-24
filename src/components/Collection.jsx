import collection1 from "../assets/images/collection1.webp";
import collection2 from "../assets/images/collection2.webp";
import collection3 from "../assets/images/collection3.webp";
import collection4 from "../assets/images/collection4.webp";

const collections = [
  {
    image: collection1,
    title: "Winter Collection",
  },
  {
    image: collection2,
    title: "Ethnic",
  },
  {
    image: collection3,
    title: "Shawls",
  },
  {
    image: collection4,
    title: "Swati Wool Shawls",
  },
];

const Collection = () => {
  return (
    <section className="py-15 pb-0.5 bg-white text-center w-full">
      {/* ---------- Title ---------- */}
      <h1 className="text-4xl font-semibold mb-12 text-gray-900 pb-2">
        Our Collection
      </h1>

      {/* ---------- Cards Grid ---------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-4 sm:px-8 lg:px-2">
        {collections.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            {/* Image Box */}
            <div className="w-full h-[400px] overflow-hidden  shadow-lg">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title */}
            <p className="mt-5 text-xl font-semibold text-gray-800 uppercase tracking-wide">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collection;
