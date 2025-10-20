import arrival1 from "../assets/images/arrivel1.webp";
import arrival2 from "../assets/images/arrivel2.webp";
import arrival3 from "../assets/images/arrivel3.webp";
import arrival4 from "../assets/images/arrivel4.webp";
import collection1 from "../assets/images/arrivel1.webp";
import collection2 from "../assets/images/arrivel2.webp";
import collection3 from "../assets/images/arrivel3.webp";
import collection4 from "../assets/images/arrivel4.webp";

// ---------- PRODUCT CARD ----------
const ProductCard = ({ image, title, price, oldPrice, isSale, isOutOfStock }) => {
  return (
    <div className="relative group flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
      {/* Image Box */}
      <div className="w-full h-[400px] overflow-hidden shadow-lg relative">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover ${isOutOfStock ? "opacity-80" : ""}`}
        />

        {/* Sale Badge */}
        {isSale && (
          <span className="absolute top-3 left-3 bg-[#722F37] text-white text-sm font-semibold px-3 py-1 rounded-full">
            Sale!
          </span>
        )}

        {/* Out of Stock Overlay */}
        {isOutOfStock && (
          <div className="h-20 mt-40 absolute inset-0 bg-white/70 flex items-center justify-center">
            <p className="text-gray-900 font-semibold text-lg uppercase tracking-wide">
              OUT OF STOCK
            </p>
          </div>
        )}
      </div>

      {/* Title */}
      <p className="mt-5 text-xl font-semibold text-gray-800 uppercase tracking-wide">
        {title}
      </p>

      {/* Price */}
      <div className="mt-2">
        {oldPrice && <span className="text-gray-500 line-through mr-2">{oldPrice}</span>}
        <span className="font-bold text-black">{price}</span>
      </div>
    </div>
  );
};

// ---------- LATEST ARRIVALS ----------
export const LatestArrival = () => {
  const arrivals = [
    {
      image: arrival1,
      title: "Coco Winter Unstitched Collection – 4A",
      price: "Rs9,490.00",
      isOutOfStock: true,
    },
    {
      image: arrival2,
      title: "Coco Winter Unstitched Collection – 8B",
      oldPrice: "Rs10,490.00",
      price: "Rs8,916.00",
      isSale: true,
    },
    {
      image: arrival3,
      title: "Coco Winter Unstitched Collection – 8A",
      oldPrice: "Rs10,490.00",
      price: "Rs8,916.00",
      isSale: true,
    },
    {
      image: arrival4,
      title: "Coco Winter Unstitched Collection – 7B",
      price: "Rs9,990.00",
      isOutOfStock: true,
    },
  ];

  return (
    <section className="py-20 bg-white text-center w-full">
      <h1 className="text-4xl font-semibold mb-12 text-gray-900">
        Latest Arrivals
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-4 sm:px-8 lg:px-2">
        {arrivals.map((item, index) => (
          <ProductCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

// ---------- BEST SELLERS ----------
export const BestSeller = () => {
  const bestSellers = [
    {
      image: collection2,
      title: "Coco Winter Unstitched Collection – 8B",
      oldPrice: "Rs10,490.00",
      price: "Rs8,916.00",
      isSale: true,
    },
    {
      image: collection3,
      title: "Coco Winter Unstitched Collection – 8A",
      oldPrice: "Rs10,490.00",
      price: "Rs8,916.00",
      isSale: true,
    },
    {
      image: collection1,
      title: "Coco Winter Unstitched Collection – 4A",
      price: "Rs9,490.00",
      isOutOfStock: true,
    },
    {
      image: collection4,
      title: "Coco Winter Unstitched Collection – 7B",
      price: "Rs9,990.00",
      isOutOfStock: true,
    },
  ];

  return (
    <section className="py-20 bg-white text-center w-full">
      <h1 className="text-4xl font-semibold mb-12 text-gray-900">
        Best Sellers
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-4 sm:px-8 lg:px-2">
        {bestSellers.map((item, index) => (
          <ProductCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};
