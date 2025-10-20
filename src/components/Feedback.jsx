import React from "react";
import arrivel1 from "../assets/images/hero1.jpeg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Qurat Ul Ain",
      title: "Outstanding!",
      text: "I am absolutely in love with Al Mahdia! The exquisite fabrics, intricate embroidery, and impeccable fit make me feel like a queen. Thank you for creating such a remarkable Pakistani brand!",
    },
    {
      name: "Haram Ashraf",
      title: "Excellent!",
      text: "Al Mahdia is my ultimate destination for women’s fashion. Their collection is always in vogue, and the staff is friendly and knowledgeable. I’ve been a loyal customer for years and can’t recommend Al Mahdia enough.",
    },
    {
      name: "Maham Naeem",
      title: "Awesome!",
      text: "Al Mahdia is a women’s fashion haven. Their clothing is not only stylish but also built to last. I trust Al Mahdia to keep my wardrobe up to date, and I constantly receive compliments on their outfits.",
    },
  ];

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 px-6 md:px-16"
      style={{
        backgroundImage: `url(${arrivel1})`,
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-8 text-center transition-transform transform hover:-translate-y-2 duration-300"
          >
            {/* Avatar */}
            <div className="flex justify-center mb-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/219/219970.png"
                alt="User avatar"
                className="w-16 h-16"
              />
            </div>

            {/* Title */}
            <h3 className="text-lg italic font-medium text-gray-800 mb-3">
              {t.title}
            </h3>

            {/* Text */}
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              {t.text}
            </p>

            {/* Name */}
            <h4 className="text-gray-900 font-semibold">{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
