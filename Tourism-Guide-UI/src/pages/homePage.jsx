import Search from "../components/search";
import HeroSection from "./homePageSections/heroSection";
import ReviewsSection from "./homePageSections/reviewsSection";
import SidebarSection from "./homePageSections/sidebarSection";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between; /* Align items to opposite ends */
  width: 100%;
`;

const SectionWrapper = styled.div`
  flex: 1; /* Make sure each section takes up equal space */
  padding: 10px; /* Optional: Add some padding for spacing */
`;

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
          <SidebarSection />
        </SectionWrapper>
      </Row>
    </>
  );
};

export default HomePage;
