
import grace from "../assets/images/About-Story.jpg";
import { Phone, MessageCircle } from "lucide-react";
import QuestionForm from "./ContactForm";
                            
function ContactPage() {
  return (
    <>
   <section
  className="h-120 relative w-full"
  style={{
    backgroundImage: `url(${grace})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>

  <div className="relative flex flex-col items-center justify-center text-center text-white py-24 px-4">
    <h2 className="text-4xl font-light mb-4 tracking-wide">Get in touch</h2>
    <p className="max-w-2xl text-lg mb-12 text-gray-200">
      Want to get in touch? We’d love to hear from you. Here’s how you can
      reach us…
    </p>

    {/* Contact cards */}
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-5xl">
      {/* Talk to sales */}
      <div className="bg-white/95 text-black rounded-2xl shadow-xl backdrop-blur-md w-full md:w-1/2 py-10 px-6 flex flex-col items-center hover:shadow-2xl transition-all -mb-130">
        <div className="bg-gray-100 p-4 rounded-full mb-4 shadow-md">
          <Phone size={40} />
        </div>
        <h3 className="text-xl font-medium mb-2">Talk to sales</h3>
        <p className="text-sm text-gray-600 mb-4 text-center">
          Interested in shopping? Just pick up the phone and call us.
          <br/>We’re here for you.
        </p>
        <button className="bg-[#111827] text-white py-2 px-6 rounded-md text-sm hover:bg-gray-800 transition ">
          +92 311 1122144
        </button>
      </div>

      {/* Contact support */}
      <div className="bg-white/95 text-black rounded-2xl shadow-xl backdrop-blur-md w-full md:w-1/2 py-10 px-6 flex flex-col items-center hover:shadow-2xl transition-all -mb-130">
        <div className="bg-gray-100 p-4 rounded-full mb-4 shadow-md">
          <MessageCircle size={40} />
        </div>
        <h3 className="text-xl font-medium mb-2">Contact support</h3>
        <p className="text-sm text-gray-600 mb-4 text-center">
          Sometimes you need a little help. Don’t worry,<br/> we’re here for you.
        </p>
        <button className="bg-[#111827] text-white py-2 px-6 rounded-md text-sm hover:bg-gray-800 transition">
          CONTACT SUPPORT
        </button>
      </div>
    </div>
  </div>
</section>

    <QuestionForm/>
    </>
  );
};

export default ContactPage;
