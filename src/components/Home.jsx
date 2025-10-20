import { BestSeller, LatestArrival } from "./arrival-best-seller";
import Collection from "./Collection";
import GraceSection from "./Grace";
import Hero from "./Hero";
import TopCategories from "./Top-cat";

const Home = () => {
  return (
    <div>
      <Hero />
      <Collection />
      <LatestArrival />
      <TopCategories />
      <GraceSection />
      <BestSeller />
    </div>
  );
};

export default Home;
