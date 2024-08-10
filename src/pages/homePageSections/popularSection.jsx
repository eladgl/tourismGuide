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

const PopularSection = () => {
  const [popularReviews, setPopularReviews] = useState([]);

  useEffect(() => {
    console.log("PopularSection mounted");

    const fetchPopularReviews = async () => {
      try {
        console.log("Fetching popular reviews...");
        const response = await axios.get(
          `${config.URL}/api/reviews/getPopular`
        );
        console.log("Popular reviews response:", response.data.reviews);
        setPopularReviews(response.data.reviews);
      } catch (error) {
        console.error("Failed to fetch popular reviews:", error);
      }
    };

    fetchPopularReviews();
  }, []);

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
