import ReviewCardPage from "../components/ReviewCardPage";
import axios from "axios";
import { useState, useEffect } from "react";
import config from "../access/configs/config";

import { reviewsPageSearchFields } from "../schemas/search/reviewSearchSchema";

import { Column } from "../styles/common/containers";
import { Container, SectionWrapper } from "../styles/pages/eventsPage";
import { ProductsSection } from "../styles/common/containers";

import SearchSection from "../components/searchSection";
import { handleSearchGeneric, convertTimestampToDate } from "../utils/search";
import { Title } from "../styles/components/title";

/**
 * ReviewsPage component to display and filter a list of reviews.
 *
 * This component fetches reviews from an API, provides search functionality,
 * and displays the reviews in a structured layout using the ReviewCardPage component.
 */
const ReviewsPage = () => {
  // State to store the fetched reviews
  const [reviews, setReviews] = useState([]);
  // State to store the filtered reviews based on the search criteria
  const [filteredReviews, setFilteredReviews] = useState([]);

  // useEffect to fetch reviews when the component mounts
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `${config.URL}/api/reviews/getReviews`
        );
        setReviews(response.data.reviews);
        setFilteredReviews(response.data.reviews); // Initialize filtered reviews
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  /**
   * Handle search functionality to filter reviews based on search criteria.
   *
   * @param {Object} searchState - The state containing the search criteria.
   */
  const handleSearch = (searchState) => {
    handleSearchGeneric(searchState, reviews, setFilteredReviews);
  };

  return (
    <Column>
      <Title
        className="text-2xl text-primary text-center mb-4"
        mediaWidth="767px"
        mediaMargin="1rem"
      >
        Reviews
      </Title>
      <Container>
        <SearchSection
          searchFields={reviewsPageSearchFields}
          onSearch={handleSearch}
        />
        <ProductsSection>
          <SectionWrapper>
            <div className="container text-primary">
              {filteredReviews?.map((review) => (
                <ReviewCardPage
                  key={review.id}
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
      </Container>
    </Column>
  );
};

export default ReviewsPage;
