import styled from "styled-components";
import Label from "../components/label";
import Button from "../components/button";
import ProductCard from "../components/productCard";
import review2 from "../assets/images/reviews2.png";

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

const ReviewsPage = () => {
  const dropdownData = [
    { label: "Regency", options: [] },
    { label: "Duration", options: [] },
    { label: "Type", options: [] },
    {
      label: "Price Range",
      options: [],
    },
  ];

  const reviews = [
    {
      id: 1,
      name: "John Doe",
      location: "North, Karmiel at the restaurant Tegalos",
      price: 120,
      photoUrl: review2,
      description: "The food was superb, and the service was great! Would recommend everyone to try this out!",
    },
    {
      id: 2,
      name: "Jane Smith",
      location: "South, Eilat at the beach resort Oasis",
      price: 200,
      photoUrl: review2,
      description: "Amazing experience! The view was breathtaking and the amenities were top-notch.",
    },
    {
      id: 3,
      name: "Emily Johnson",
      location: "Central, Tel Aviv at the hotel Grand Plaza",
      price: 150,
      photoUrl: review2,
      description: "Great location and friendly staff. The rooms were clean and comfortable.",
    }
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
        <p className="text-2xl text-primary text-center mb-4">Reviews</p>
        <SectionWrapper>
          <div className="container text-primary">
            {reviews.map((review) => (
              <ProductCard
                key={review.id}
                name={review.name}
                location={review.location}
                price={review.price}
                photoUrl={review.photoUrl}
                Description={review.description}
              />
            ))}
          </div>
        </SectionWrapper>
      </ProductsSection>
    </Row>
  );
  };
  
  export default ReviewsPage;