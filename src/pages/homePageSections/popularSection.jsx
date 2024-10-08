import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import Label from "../../components/label";
import config from "../../access/configs/config";

const Row = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const ReviewItem = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border);
  padding: 10px;
  margin-bottom: 10px;
  font-size: 16px;
`;

const StarRating = styled.div`
  display: flex;
`;

const Star = styled.span`
  color: ${(props) => (props.filled ? "gold" : "lightgray")};
  font-size: 20px;
`;

/**
 * PopularSection component to display a list of popular reviews.
 *
 * This component fetches popular reviews from an API and displays them along with their star ratings.
 */
const PopularSection = () => {
  // State to store the popular reviews fetched from the API
  const [popularReviews, setPopularReviews] = useState([]);

  // useEffect to fetch popular reviews when the component mounts
  useEffect(() => {
    const fetchPopularReviews = async () => {
      try {
        const response = await axios.get(
          `${config.URL}/api/reviews/getPopular`
        );
        setPopularReviews(response.data.reviews);
      } catch (error) {
        console.error("Failed to fetch popular reviews:", error);
      }
    };

    fetchPopularReviews();
  }, []);

  /**
   * Function to render star rating based on the review's rating.
   *
   * @param {number} rating - The rating of the review (from 1 to 5).
   * @returns {Array} - An array of star elements representing the rating.
   */
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star key={i} filled={i <= rating}>
          ★
        </Star>
      );
    }
    return stars;
  };

  return (
    <div className="popularSection">
      <Label className="popularSection-label text-2xl">Popular Reviews</Label>
      {popularReviews?.map((review, index) => (
        <ReviewItem key={index}>
          <h3>{review.title}</h3>
          <p>{review.category}</p>
          <StarRating>{renderStars(review.rating)}</StarRating>
        </ReviewItem>
      ))}
    </div>
  );
};

export default PopularSection;
