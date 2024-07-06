import Search from "../components/search";
import HeroSection from "./homePageSections/heroSection";
import ReviewsSection from "./homePageSections/reviewsSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <div>
        <Search />
      </div>
      <ReviewsSection />
    </>
  );
};

export default HomePage;
