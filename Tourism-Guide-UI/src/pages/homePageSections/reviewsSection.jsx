import axios from "axios";

import { useState, useEffect, useCallback } from "react";

import styled from "styled-components";
import Label from "../../components/label";
import ReviewCard from "../../components/reviewCard";

import config from "../../access/configs/config";

import { reviewsSchema } from "./reviewsSchema";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const ReviewsSection = () => {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`${config.URL}:3001/getReviews`);
        console.log(response.data.reviews);
        setReviews(response.data.reviews);
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  useEffect;

  const groupInPairs = (array) => {
    const pairs = [];
    for (let i = 0; i < array?.length; i += 2) {
      pairs.push(array.slice(i, i + 2));
    }
    return pairs;
  };

  const renderReviewCards = useCallback(() => {
    const pairs = groupInPairs(reviews);
    return pairs.map((pair, index) => (
      <Row key={`row-${index}`}>
        {pair.map((cardProps, index) => (
          <ReviewCard key={`card-${index}`} {...cardProps} />
        ))}
      </Row>
    ));
  }, [reviews]);

  return (
    <div className="reviewsSection">
      <Label className="reviewsSection-label">user reviews</Label>
      {renderReviewCards()}
    </div>
  );
};

export default ReviewsSection;
