import styled from "styled-components";
import Label from "../components/label";
import Button from "../components/button";
import ProductCard from "../components/productCard";
import review2 from "../assets/images/reviews2.png";
import review3 from "../assets/images/reviews3.png";

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

const EventsPage = () => {
  const dropdownData = [
    { label: "Regency", options: [] },
    { label: "Duration", options: [] },
    { label: "Departure Month", options: [] },
    {
      label: "Price Range",
      options: [],
    },
  ];

  const products = [
    {
      id: 1,
      name: "Tea And Snacks",
      location: "north",
      price: 29.99,
      photoUrl: review2,
    },
    {
      id: 2,
      name: "Relic View",
      location: "Los Angeles",
      price: 149.99,
      photoUrl: review3,
    },
  ];

  const handleSearch = () => {
    // Handle the search action here
    alert("Search button clicked!");
  };

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
              <label>{dropdown.label}</label>
              {index < dropdownData.length - 1 && (
                <hr style={{ width: "50%", margin: "8px 0" }} />
              )}
            </div>
          ))}
          <Button
            className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-yellow-700 transition duration-300 inline-block"
            onClick={handleSearch}
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
        <p className="text-2xl text-primary text-center mb-4">Events</p>
        <SectionWrapper>
          <div className="container text-primary">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                location={product.location}
                price={product.price}
                photoUrl={product.photoUrl}
              />
            ))}
          </div>
        </SectionWrapper>
      </ProductsSection>
    </Row>
  );
};

export default EventsPage;
