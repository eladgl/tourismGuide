import styled from "styled-components";
import Label from "../components/label";
import Button from "../components/button";
import ReviewCardPage from "../components/ReviewCardPage";
import axios from "axios";
import { useState, useEffect } from "react";
import config from "../access/configs/config";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const SectionWrapper = styled.div`
  flex: 1;
  padding: 10px;
`;

const SearchSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const ProductsSection = styled.div`
  flex: 1;
`;

const Dropdown = styled.select`
  margin-left: 10px;
  padding: 5px;
  border-radius: 4px;
  background-color: var(--background);
  color: var(--text);
  border: 1px solid var(--border);
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
`;

const SearchInput = styled.input`
  padding: 8px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 400px;
  border-radius: 4px;
  background-color: var(--background);
  color: var(--text);
  border: 1px solid var(--border);
`;

const DateInput = styled.input`
  padding: 8px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 200px;
  border-radius: 4px;
  background-color: var(--background);
  color: var(--text);
  border: 1px solid var(--border);
`;

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

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

  const handleSearch = () => {
    let filtered = reviews;

    if (searchQuery) {
      filtered = filtered.filter((review) =>
        review.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (locationFilter) {
      filtered = filtered.filter((review) =>
        review.location.toLowerCase().includes(locationFilter.toLowerCase())
      );
    }

    if (ratingFilter) {
      filtered = filtered.filter(
        (review) => review.rating === ratingFilter // Compare as strings
      );
    }

    if (categoryFilter) {
      filtered = filtered.filter((review) =>
        review.category.toLowerCase().includes(categoryFilter.toLowerCase())
      );
    }

    if (startDate && endDate) {
      filtered = filtered.filter((review) => {
        const reviewDate = convertTimestampToDate(review.date);
        return reviewDate >= startDate && reviewDate <= endDate;
      });
    }

    setFilteredReviews(filtered);
  };

  const convertTimestampToDate = (timestamp) => {
    if (timestamp && timestamp._seconds) {
      const date = new Date(timestamp._seconds * 1000);
      return date.toISOString().split("T")[0]; // Format date as YYYY-MM-DD
    }
    return "";
  };

  // Manually define options for dropdowns
  const locations = ["North", "South", "Central"];
  const ratings = ["0", "1", "2", "3", "4", "5"];
  const categories = ["Adventure", "Culinary", "Historical", "Leisure"];

  return (
    <Row>
      <SearchSection>
        <SectionWrapper>
          <p className="text-2xl text-primary text-center mb-4">Search</p>
          <SearchInput
            type="text"
            placeholder="Search by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div style={{ marginBottom: "10px", textAlign: "left" }}>
            <Label>Location</Label>
            <Dropdown
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
            >
              <option value="">All</option>
              {locations.map((location, index) => (
                <option key={index} value={location}>
                  {location}
                </option>
              ))}
            </Dropdown>
          </div>
          <div style={{ marginBottom: "10px", textAlign: "left" }}>
            <Label>Rating</Label>
            <Dropdown
              value={ratingFilter}
              onChange={(e) => setRatingFilter(e.target.value)}
            >
              <option value="">All</option>
              {ratings.map((rating, index) => (
                <option key={index} value={rating}>
                  {rating}
                </option>
              ))}
            </Dropdown>
          </div>
          <div style={{ marginBottom: "10px", textAlign: "left" }}>
            <Label>Category</Label>
            <Dropdown
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="">All</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </Dropdown>
          </div>
          <div style={{ marginBottom: "10px", textAlign: "left" }}>
            <Label>Date Range</Label>
            <div style={{ display: "flex", gap: "10px" }}>
              <DateInput
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
              <DateInput
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>
          <Button
            className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-yellow-700 transition duration-300 inline-block"
            style={{
              maxWidth: "150px",
              overflowWrap: "break-word",
              textAlign: "center",
            }}
            onClick={handleSearch}
          >
            Search Package
          </Button>
        </SectionWrapper>
      </SearchSection>
      <ProductsSection>
        <p className="text-4xl text-primary text-center mb-4">Reviews</p>
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
    </Row>
  );
};

export default ReviewsPage;
