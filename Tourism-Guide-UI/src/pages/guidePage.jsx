import styled from "styled-components";
import Label from "../components/label";
import Button from "../components/button";
import GuideCard from "../components/GuideCard";
import { useState, useEffect, useCallback } from "react";
import config from "../access/configs/config";
import axios from "axios";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between; /* Align items to opposite ends */
  width: 80%;
`;

const SectionWrapper = styled.div`
  flex: 1; /* Make sure each section takes up equal space */
  padding: 10px; /* Optional: Add some padding for spacing */
`;

const SearchSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const ProductsSection = styled.div`
  flex: 1; /* Take remaining space */
`;
const Dropdown = styled.select`
  margin-left: 10px;
  padding: 5px;
  pointer-events: none; /* Disable pointer events */
  opacity: 0.6; /* Optionally reduce opacity to indicate disabled state */
`;

const GuidePage = () => {

  const [guides, setGuides] = useState([]);

  useEffect(() => {
    const fetchGuides = async () => {
      try {
        const response = await axios.get(`${config.URL}/api/guides/getguides`);
        setGuides(response.data.guides);
      } catch (error) {
        console.error("Failed to fetch guides:", error);
      }
    };

    fetchGuides();
  }, []);

  const dropdownData = [
    { label: "Regency", options: [] },
    { label: "Duration", options: [] },
    { label: "Month", options: [] },
    {
      label: "Price Range",
      options: [],
    },
  ];

  return (
    <Row>
      <SearchSection>
        <SectionWrapper>
          <p className="text-2xl text-primary text-center mb-4">Search</p>
          {dropdownData.map((dropdown, index) => (
            <div
              key={index}
              style={{ marginBottom: "10px", textAlign: "left" }}
            >
              <Label>{dropdown.label}</Label>
              {index < dropdownData.length - 1 && (
                <hr style={{ width: "50%", margin: "8px 0" }} />
              )}
            </div>
          ))}
          <Button
            className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-yellow-700 transition duration-300 inline-block"
            style={{
              maxWidth: "150px",
              overflowWrap: "break-word",
              textAlign: "center",
            }}
          >
            Search Package
          </Button>
        </SectionWrapper>
      </SearchSection>
      <ProductsSection>
        <p className="text-2xl text-primary text-center mb-4">Guide</p>
        <SectionWrapper>
          <div className="container text-primary">
            {guides.map((product) => (
              <GuideCard
                key={product.Id}
                name={product.name}
                location={product.Location}
                price={product.Rate}
                photoUrl={product.img}
                Description={product.description}
                contact_info = {product.contact_info}
                rating = {product.rating}
              />
            ))}
          </div>
        </SectionWrapper>
      </ProductsSection>
    </Row>
  );
};

export default GuidePage;