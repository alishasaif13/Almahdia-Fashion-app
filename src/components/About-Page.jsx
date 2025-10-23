import collection3 from "../assets/images/collection3.webp";
import AboutStory from "./About-Story";
import FeatureSection from "./Feature-About";
import Testimonials from "./Feedback";

function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="w-full h-[350px] sm:h-[450px] md:h-[550px] overflow-hidden">
        <img
          src={collection3}
          alt="About Hero"
          className="w-full h-full object-cover object-center sm:object-top"
        />
      </div>

      {/* Other Sections */}
      <FeatureSection />
      <AboutStory />
      <Testimonials />
    </div>
  );
}

export default AboutPage;
