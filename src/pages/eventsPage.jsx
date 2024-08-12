import styled from "styled-components";
import Label from "../components/label";
import Button from "../components/button";
import ProductCard from "../components/productCard";
import axios from "axios";
import { useState, useEffect } from "react";
import config from "../access/configs/config";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
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
  margin-bottom: 10px;
  width: 100%;
  max-width: 400px;
  border-radius: 4px;
  background-color: var(--background);
  color: var(--text);
  border: 1px solid var(--border);
`;

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [priceRangeFilter, setPriceRangeFilter] = useState("");
  const email = localStorage.getItem("currentUser");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`${config.URL}/api/events/getEvents`);
        setEvents(response.data.events);
        setFilteredEvents(response.data.events); // Initialize filtered events
      } catch (error) {
        console.error("Failed to fetch events:", error);
      }
    };

    fetchEvents();
  }, []);

  const handleSearch = () => {
    let filtered = events;

    if (searchQuery) {
      filtered = filtered.filter((event) =>
        event.event_name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (locationFilter) {
      filtered = filtered.filter((event) =>
        event.event_location.toLowerCase().includes(locationFilter.toLowerCase())
      );
    }

    if (startDate && endDate) {
      filtered = filtered.filter((event) => {
        const eventDate = new Date(event.event_date);
        return eventDate >= new Date(startDate) && eventDate <= new Date(endDate);
      });
    }

    if (priceRangeFilter) {
      // Assuming priceRangeFilter is in the format "min-max"
      const [minPrice, maxPrice] = priceRangeFilter.split("-").map(Number);
      filtered = filtered.filter(
        (event) => event.event_price >= minPrice && event.event_price <= maxPrice
      );
    }

    setFilteredEvents(filtered);
  };

  return (
    <Row>
      <SearchSection>
        <SectionWrapper>
          <p className="text-2xl text-primary text-center mb-4">Search</p>
          <SearchInput
            type="text"
            placeholder="Search for an event..."
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
              <option value="North">North</option>
              <option value="South">South</option>
              <option value="Central">Central</option>
            </Dropdown>
          </div>
          <div style={{ marginBottom: "10px", textAlign: "left" }}>
            <Label>Event Date Range</Label>
            <DateInput
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              placeholder="Start Date"
            />
            <DateInput
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              placeholder="End Date"
            />
          </div>
          <div style={{ marginBottom: "10px", textAlign: "left" }}>
            <Label>Price Range</Label>
            <Dropdown
              value={priceRangeFilter}
              onChange={(e) => setPriceRangeFilter(e.target.value)}
            >
              <option value="">All</option>
              <option value="0-100">0 - 100</option>
              <option value="101-500">101 - 500</option>
              <option value="501-1000">501 - 1000</option>
            </Dropdown>
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
        <p className="text-4xl text-primary text-center mb-4">Events</p>
        <SectionWrapper>
          <div className="container text-primary">
            {filteredEvents?.map((event) => (
              <ProductCard
                key={event.event_id}
                name={event.event_name}
                location={event.event_location}
                date={event.event_date}
                host={event.event_host}
                price={event.event_price}
                photoUrl={event.event_photo_url}
                Description={event.event_description}
                cords={event.cords}
                showSignUp={
                  email === null
                    ? 0
                    : event.signed_up_emails.includes(email)
                    ? 2
                    : 1
                } 
                eventId={event.event_id}
              />
            ))}
          </div>
        </SectionWrapper>
      </ProductsSection>
    </Row>
  );
};

export default EventsPage;
