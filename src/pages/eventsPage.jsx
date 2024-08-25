import ProductCard from "../components/productCard";
import axios from "axios";
import { useState, useEffect } from "react";
import config from "../access/configs/config";

import { Column } from "../styles/common/containers";
import { Container, SectionWrapper } from "../styles/pages/eventsPage";
import { ProductsSection } from "../styles/common/containers";

import SearchSection from "../components/searchSection";
import { handleSearchGeneric, convertTimestampToDate } from "../utils/search";
import { eventsSearchFields } from "../schemas/search/eventsSearchSchema";
import { Title } from "../styles/components/title";

/**
 * EventsPage component to display and filter a list of events.
 *
 * This component fetches events from an API, provides search functionality,
 * and displays the events in a structured layout using the ProductCard component.
 */
const EventsPage = () => {
  // State to store the fetched events
  const [events, setEvents] = useState([]);
  // State to store the filtered events based on the search criteria
  const [filteredEvents, setFilteredEvents] = useState([]);

  const email = localStorage.getItem("currentUser");

  // useEffect to fetch events when the component mounts
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

  /**
   * Handle search functionality to filter events based on search criteria.
   *
   * @param {Object} searchState - The state containing the search criteria.
   */
  const handleSearch = (searchState) => {
    handleSearchGeneric(searchState, events, setFilteredEvents, "event_");
  };

  return (
    <Column>
      <Title className="text-4xl text-primary text-center mb-4">Events</Title>
      <Container>
        <SearchSection
          searchFields={eventsSearchFields}
          onSearch={handleSearch}
        />
        <ProductsSection>
          <SectionWrapper>
            <div className="container text-primary">
              {filteredEvents?.map(
                ({ id, showSignUp, img, signed_up_emails, date, ...rest }) => (
                  <ProductCard
                    key={id}
                    eventId={id}
                    photoUrl={img}
                    date={convertTimestampToDate(date)}
                    showSignUp={
                      email === null
                        ? 0
                        : signed_up_emails.includes(email)
                        ? 2
                        : 1
                    }
                    {...rest}
                  />
                )
              )}
            </div>
          </SectionWrapper>
        </ProductsSection>
      </Container>
    </Column>
  );
};

export default EventsPage;
