import Search from "../components/search";
import HeroSection from "./homePageSections/heroSection";
import ReviewsSection from "./homePageSections/reviewsSection";
import PopularSection from "./homePageSections/popularSection";

import { SectionWrapper, Row } from "../styles/pages/homePage";

/**
 * HomePage component to render the main sections of the homepage.
 *
 * This component includes a hero section, reviews section, and popular section,
 * organized in a responsive layout.
 */
const HomePage = () => {
  return (
    <>
      <HeroSection />
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
