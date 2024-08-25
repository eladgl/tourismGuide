import GuideCard from "../components/GuideCard";
import axios from "axios";
import { useState, useEffect } from "react";
import config from "../access/configs/config";

import { Column } from "../styles/common/containers";
import { Container, SectionWrapper } from "../styles/pages/eventsPage";
import { ProductsSection } from "../styles/common/containers";

import SearchSection from "../components/searchSection";
import { handleSearchGeneric } from "../utils/search";

import { Title } from "../styles/components/title";
import { guidePageSearchFields } from "../schemas/search/guidesSearchSchema";

/**
 * GuidePage component to display and filter a list of travel guides.
 *
 * This component fetches guides from an API, provides search functionality,
 * and displays the guides in a structured layout using the GuideCard component.
 */
const GuidePage = () => {
  // State to store the fetched guides
  const [guides, setGuides] = useState([]);
  // State to store the filtered guides based on the search criteria
  const [filteredGuides, setFilteredGuides] = useState([]);

  // useEffect to fetch guides when the component mounts
  useEffect(() => {
    const fetchGuides = async () => {
      try {
        const response = await axios.get(`${config.URL}/api/guides/getGuides`);
        setGuides(response.data.guides);
        setFilteredGuides(response.data.guides); // Initialize filtered guides
      } catch (error) {
        console.error("Failed to fetch guides:", error);
      }
    };

    fetchGuides();
  }, []);

  /**
   * Handle search functionality to filter guides based on search criteria.
   *
   * @param {Object} searchState - The state containing the search criteria.
   */
  const handleSearch = (searchState) => {
    handleSearchGeneric(searchState, guides, setFilteredGuides);
  };

  return (
    <Column>
      <Title className="text-4xl text-primary text-center mb-4">Guides</Title>
      <Container>
        <SearchSection
          searchFields={guidePageSearchFields}
          onSearch={handleSearch}
        />

        <ProductsSection>
          <SectionWrapper>
            <div className="container text-primary">
              {filteredGuides?.map((guide) => (
                <GuideCard
                  key={guide.Id}
                  name={guide.name}
                  location={guide.Location}
                  price={guide.Rate}
                  photoUrl={guide.img}
                  Description={guide.description}
                  contact_info={guide.contact_info}
                  rating={guide.rating}
                />
              ))}
            </div>
          </SectionWrapper>
        </ProductsSection>
      </Container>
    </Column>
  );
};

export default GuidePage;
