import axios from "axios";

import { useState, useEffect, useCallback } from "react";

import styled from "styled-components";
import Label from "../../components/label";
import ReviewCard from "../../components/reviewCard";

import config from "../../access/configs/config";

import { Title } from "../../styles/components/title";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

/**
 * ReviewsSection component to display a list of user reviews.
 *
 * This component fetches reviews from an API and displays them in pairs using the ReviewCard component.
 */
const ReviewsSection = () => {
  // State to store the fetched reviews
  const [reviews, setReviews] = useState(null);

  // useEffect to fetch reviews when the component mounts
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `${config.URL}/api/reviews/getReviews`
        );
        console.log("reviews ", response);
        setReviews(response.data.reviews);
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  /**
   * Function to group reviews into pairs for rendering.
   *
   * @param {Array} array - The array of reviews to be grouped.
   * @returns {Array} - An array of arrays, where each inner array contains two reviews.
   */
  const groupInPairs = (array) => {
    const pairs = [];
    for (let i = 0; i < array?.length; i += 2) {
      pairs.push(array.slice(i, i + 2));
    }
    return pairs;
  };

  /**
   * Callback function to render review cards in pairs.
   *
   * @returns {Array} - An array of Row components, each containing two ReviewCard components.
   */
  const renderReviewCards = useCallback(() => {
    const pairs = groupInPairs(reviews);
    return pairs?.map((pair, index) => (
      <Row key={`row-${index}`}>
        {pair?.map((cardProps, index) => (
          <ReviewCard key={`card-${index}`} {...cardProps} />
        ))}
      </Row>
    ));
  }, [reviews]);

  return (
    <div className="reviewsSection">
      <Title
        className="reviewsSection-label"
        fontSize="3rem"
        margin="3rem auto"
        textTransform="uppercase"
      >
        user reviews
      </Title>
      {renderReviewCards()}
    </div>
  );
};

export default ReviewsSection;
