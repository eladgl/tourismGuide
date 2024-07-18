import styled from "styled-components";
import Label from "../components/label";
import Button from "../components/button";
import ProductCard from "../components/productCard";

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
  const dropdownData = [
    { label: "Regency", options: [] },
    { label: "Duration", options: [] },
    { label: "Month", options: [] },
    {
      label: "Price Range",
      options: [],
    },
  ];

  const products = [
    {
      id: 1,
      name: "Walet White",
      location: "north",
      price: 29.99,
      photoUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgNTNrqitAo9BCXO8tjunbLzDpeZ1vUSlMfzxaKloeuQAc9nVNToDa4btcAivFOdNnzC4jvo8YdwpXoqHHMlepBGwqxv2Hhdm3Lj9jlFFHYTmGzG4sX1QK-wcv0FqhN2PLvMmPrGaoWqCY/s1600/Walter+White.jpg",
      Description: "normal old walter",
    },
    {
      id: 2,
      name: "Heisenberg",
      location: "south",
      price: 149.99,
      photoUrl: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/streams/2013/August/130808/6C8558749-130808-walter-white-tease.jpg",
      Description: "The Heisenberg",
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
            {products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                location={product.location}
                price={product.price}
                photoUrl={product.photoUrl}
                Description={product.Description}
              />
            ))}
          </div>
        </SectionWrapper>
      </ProductsSection>
    </Row>
  );
};

export default GuidePage;