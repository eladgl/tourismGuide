import Search from "../components/search";
import HeroSection from "./homePageSections/heroSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <div>
        <Search />
      </div>
    </>
  );
};

export default HomePage;
