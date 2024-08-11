import styled from "styled-components";
import Label from "../components/label";
import Button from "../components/button";
import ReviewCardPage from "../components/ReviewCardPage";
import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import config from "../access/configs/config";

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

const convertTimestampToDate = (timestamp) => {
  if (timestamp && timestamp._seconds) {
    const date = new Date(timestamp._seconds * 1000);
    return date.toLocaleDateString();
  }
  return "";
};

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `${config.URL}/api/reviews/getReviews`
        );
        setReviews(response.data.reviews);
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  const dropdownData = [
    { label: "Regency", options: [] },
    { label: "Duration", options: [] },
    { label: "Type", options: [] },
    {
      label: "Price Range",
      options: [],
    },
  ];

  return (
    <Row>
      <SearchSection>
        <SectionWrapper>
          <p className="text-3xl text-primary text-center mb-4">Search</p>
          {dropdownData?.map((dropdown, index) => (
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
        <p className="text-4xl text-primary text-center mb-4">Reviews</p>
        <SectionWrapper>
          <div className="container text-primary">
            {reviews?.map((review) => (
              <ReviewCardPage
                name={review.title}
                location={review.location}
                date={convertTimestampToDate(review.date)}
                photoUrl={review.img}
                description={review.content}
                category={review.category}
                rating={review.rating}
                cords={review.cords}
              />
            ))}
          </div>
        </SectionWrapper>
      </ProductsSection>
    </Row>
  );
};

export default ReviewsPage;
