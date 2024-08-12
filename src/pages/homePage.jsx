import Search from "../components/search";
import HeroSection from "./homePageSections/heroSection";
import ReviewsSection from "./homePageSections/reviewsSection";
import PopularSection from "./homePageSections/popularSection";

import { SectionWrapper, Row } from "../styles/pages/homePage";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <div>
        <Search />
      </div>
      <Row>
        <SectionWrapper>
          <ReviewsSection />
        </SectionWrapper>
        <SectionWrapper>
          <PopularSection />
        </SectionWrapper>
      </Row>
    </>
  );
};

export default HomePage;
