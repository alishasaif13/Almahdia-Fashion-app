// src/components/Sidebar.jsx
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

const ProductSidebar
 = () => {
  return (
    <aside className="md:w-1/4 pr-8 sticky top-0 self-start">
      <h3 className="text-sm font-semibold tracking-wide mb-3 text-gray-700 uppercase">
        Products
      </h3>
      <div className="w-8 h-0.5 bg-amber-700 mb-4"></div>

      <ul className="space-y-4">
        {products.map((p) => (
          <li key={p.id}>
            <Link to={p.link} className="flex items-center gap-3 hover:text-amber-700">
              <img src={p.image} alt={p.name} className="w-14 h-14 object-cover rounded" />
              <div>
                <p className="text-xs font-medium text-gray-800">{p.name}</p>
                <p className="text-sm font-semibold text-black">Rs{p.price.toLocaleString()}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default ProductSidebar 
;
