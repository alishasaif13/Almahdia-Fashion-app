import collection3 from "../assets/images/collection3.webp";
import AboutStory from "./About-Story";
import FeatureSection from "./Feature-About";
import Testimonials from "./Feedback";
function AboutPage() {
  return (
    <div>
      <div className="w-full h-[550px] overflow-hidden">
        <img
          src={collection3}
          alt={""}
          className="w-full h-full object-cover object-top"
        />
      </div>
      <FeatureSection />
      <AboutStory />
      <Testimonials />
    </div>
  );
}

export default AboutPage;
