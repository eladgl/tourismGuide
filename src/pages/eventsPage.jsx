import ProductCard from "../components/productCard";
import axios from "axios";
import { useState, useEffect } from "react";
import config from "../access/configs/config";

import { Column } from "../styles/common/containers";
import { Container, SectionWrapper } from "../styles/pages/eventsPage";
import { ProductsSection } from "../styles/common/containers";

import SearchSection from "../components/searchSection";
import { handleSearchGeneric } from "../utils/search";
import { eventsSearchFields } from "../schemas/search/eventsSearchSchema";
import { Title } from "../styles/components/title";

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);

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
              {filteredEvents?.map((event) => (
                <ProductCard
                  key={event.id}
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
      </Container>
    </Column>
  );
};

export default EventsPage;
