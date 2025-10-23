import { Link } from "react-router-dom";
import shop1 from "../assets/images/shop1.webp";
import shop2 from "../assets/images/shop2.webp";
import shop3 from "../assets/images/shop3.webp";
import shop4 from "../assets/images/shop4.webp";
import shop5 from "../assets/images/shop5.webp";

const products = [
  { id: 1, name: "Coco Winter Unstitched Collection - 4A", price: 9490, image: shop1, link: "/Product1" },
  { id: 2, name: "Coco Winter Unstitched Collection - 8B", price: 8916, image: shop2, link: "/Product2" },
  { id: 3, name: "Coco Winter Unstitched Collection - 8A", price: 8916, image: shop3, link: "/Product3" },
  { id: 4, name: "Coco Winter Unstitched Collection - 7B", price: 9990, image: shop4, link: "/Product4" },
  { id: 5, name: "Coco Winter Unstitched Collection - 7A", price: 9990, image: shop5, link: "/Product5" },
];

const ProductSidebar = () => {
  return (
    <aside className="sticky top-4 bg-white md:bg-transparent md:shadow-none shadow-sm rounded-lg p-4 md:p-0">
      <h3 className="text-sm font-semibold tracking-wide mb-3 text-gray-700 uppercase text-center md:text-left">
        Products
      </h3>
      <div className="w-8 h-0.5 bg-amber-700 mx-auto md:mx-0 mb-4"></div>

      <ul className="space-y-4">
        {products.map((p) => (
          <li key={p.id} className="flex justify-center md:justify-start">
            <Link
              to={p.link}
              className="flex items-center gap-3 hover:text-amber-700 transition w-full max-w-sm"
            >
              <img
                src={p.image}
                alt={p.name}
                className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded"
              />
              <div className="flex flex-col">
                <p className="text-xs sm:text-sm font-medium text-gray-800 leading-tight">
                  {p.name}
                </p>
                <p className="text-sm sm:text-base font-semibold text-black">
                  Rs{p.price.toLocaleString()}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default ProductSidebar;
