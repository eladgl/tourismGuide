import styled from "styled-components";
import Label from "../../components/label";
import ReviewCard from "../../components/reviewCard";

import { reviewsSchema } from "./reviewsSchema";
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const ReviewsSection = () => {
  const groupInPairs = (array) => {
    const pairs = [];
    for (let i = 0; i < array.length; i += 2) {
      pairs.push(array.slice(i, i + 2));
    }
    return pairs;
  };

  const renderReviewCards = () => {
    const pairs = groupInPairs(reviewsSchema);
    return pairs.map((pair, index) => (
      <Row key={`row-${index}`}>
        {pair.map((cardProps, index) => (
          <ReviewCard key={`card-${index}`} {...cardProps} />
        ))}
      </Row>
    ));
  };
  return (
    <div className="reviewsSection">
      <Label className="reviewsSection-label">user reviews</Label>
      {renderReviewCards()}
    </div>
  );
};

export default ReviewsSection;
