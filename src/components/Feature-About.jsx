import React from "react";

const FeatureSection = () => {
  const features = [
    {
      img: "/customer-service.png",
      title: "Customer Care",
    },
    {
      img: "/delivery-status.png",
      title: "Exchange Policy",
    },
    {
      img: "/shipped.png",
      title: "Free Shipping",
    },
    {
      img: "/offer.png",
      title: "Discount",
    },
  ];

  return (
    <section className="relative w-full flex justify-center z-20 -mt-28">
      <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-8 w-[90%] md:w-[80%]">
        {features.map((f, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center bg-gray-100 rounded-xl p-12 transition-transform transform hover:-translate-y-2 duration-300"
          >
            <img
              src={f.img}
              alt={f.title}
              className="w-16 h-16 mb-4 object-contain"
            />
            <h3 className="text-gray-800 font-medium text-lg">{f.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
