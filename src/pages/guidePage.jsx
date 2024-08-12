import styled from "styled-components";
import Label from "../components/label";
import Button from "../components/button";
import GuideCard from "../components/GuideCard";
import axios from "axios";
import { useState, useEffect } from "react";
import config from "../access/configs/config";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const SectionWrapper = styled.div`
  flex: 1;
  padding: 10px;
`;

const SearchSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const ProductsSection = styled.div`
  flex: 1;
`;

const Dropdown = styled.select`
  margin-left: 10px;
  padding: 5px;
  border-radius: 4px;
  background-color: var(--background);
  color: var(--text);
  border: 1px solid var(--border);
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
`;

const SearchInput = styled.input`
  padding: 8px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 400px;
  border-radius: 4px;
  background-color: var(--background);
  color: var(--text);
  border: 1px solid var(--border);
`;

const GuidePage = () => {
  const [guides, setGuides] = useState([]);
  const [filteredGuides, setFilteredGuides] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [dailyRateFilter, setDailyRateFilter] = useState("");
  const [minRating, setMinRating] = useState("0");
  const [maxRating, setMaxRating] = useState("5");

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

  const handleSearch = () => {
    let filtered = guides;

    if (searchQuery) {
      filtered = filtered.filter((guide) =>
        guide.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (locationFilter) {
      filtered = filtered.filter((guide) =>
        guide.Location.toLowerCase().includes(locationFilter.toLowerCase())
      );
    }

    if (dailyRateFilter) {
      const [minRate, maxRate] = dailyRateFilter.split("-").map(Number);
      filtered = filtered.filter(
        (guide) => guide.Rate >= minRate && guide.Rate <= maxRate
      );
    }

    if (minRating || maxRating) {
      filtered = filtered.filter((guide) => {
        const rating = parseFloat(guide.rating);
        const min = parseFloat(minRating);
        const max = parseFloat(maxRating);
        return rating >= min && rating <= max;
      });
    }

    setFilteredGuides(filtered);
  };

  return (
    <Row>
      <SearchSection>
        <SectionWrapper>
          <p className="text-2xl text-primary text-center mb-4">Search</p>
          <SearchInput
            type="text"
            placeholder="Search by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div style={{ marginBottom: "10px", textAlign: "left" }}>
            <Label>Location</Label>
            <Dropdown
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
            >
              <option value="">All</option>
              <option value="North">North</option>
              <option value="South">South</option>
              <option value="Central">Central</option>
            </Dropdown>
          </div>
          <div style={{ marginBottom: "10px", textAlign: "left" }}>
            <Label>Daily Rate</Label>
            <Dropdown
              value={dailyRateFilter}
              onChange={(e) => setDailyRateFilter(e.target.value)}
            >
              <option value="">All</option>
              <option value="0-200">0 - 200</option>
              <option value="201-400">201 - 400</option>
              <option value="401-600">401 - 600</option>
            </Dropdown>
          </div>
          <div style={{ marginBottom: "10px", textAlign: "left" }}>
            <Label>Rating Range</Label>
            <Dropdown
              value={minRating}
              onChange={(e) => setMinRating(e.target.value)}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Dropdown>
            <Dropdown
              value={maxRating}
              onChange={(e) => setMaxRating(e.target.value)}
              style={{ marginTop: "10px" }}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Dropdown>
          </div>
          <Button
            className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-yellow-700 transition duration-300 inline-block"
            style={{
              maxWidth: "150px",
              overflowWrap: "break-word",
              textAlign: "center",
            }}
            onClick={handleSearch}
          >
            Search Package
          </Button>
        </SectionWrapper>
      </SearchSection>
      <ProductsSection>
        <p className="text-4xl text-primary text-center mb-4">Guides</p>
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
    </Row>
  );
};

export default GuidePage;
