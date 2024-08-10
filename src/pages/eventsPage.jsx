import styled from "styled-components";
import Label from "../components/label";
import Button from "../components/button";
import ProductCard from "../components/productCard";
import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import config from "../access/configs/config";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between; /* Align items to opposite ends */
  width: 80%;
`;

const SectionWrapper = styled.div`
  flex: 1; /* Make sure each section takes up equal space */
  padding: 10px; /* Optional: Add some padding for spacing */
`;

const SearchSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const ProductsSection = styled.div`
  flex: 1; /* Take remaining space */
`;
const Dropdown = styled.select`
  margin-left: 10px;
  padding: 5px;
  pointer-events: none; /* Disable pointer events */
  opacity: 0.6; /* Optionally reduce opacity to indicate disabled state */
`;

const EventsPage = () => {
  const [events, setEvents] = useState(null);
  const email = localStorage.getItem("currentUser");

  const dropdownData = [
    { label: "Regency", options: [] },
    { label: "Duration", options: [] },
    { label: "Departure Month", options: [] },
    {
      label: "Price Range",
      options: [],
    },
  ];

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`${config.URL}/api/events/getEvents`);
        setEvents(response.data.events);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <Row>
      <SearchSection>
        <SectionWrapper>
          <p className="text-2xl text-primary text-center mb-4">Search</p>
          {dropdownData?.map((dropdown, index) => (
            <div
              key={index}
              style={{ marginBottom: "10px", textAlign: "left" }}
            >
              <Label>{dropdown.label}</Label>
              {index < dropdownData.length - 1 && (
                <hr style={{ width: "50%", margin: "8px 0" }} />
              )}
            </div>
          ))}
          <Button
            className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-yellow-700 transition duration-300 inline-block"
            style={{
              maxWidth: "150px",
              overflowWrap: "break-word",
              textAlign: "center",
            }}
          >
            Search Package
          </Button>
        </SectionWrapper>
      </SearchSection>
      <ProductsSection>
        <p className="text-4xl text-primary text-center mb-4">Events</p>
        <SectionWrapper>
          <div className="container text-primary">
            {events?.map((event) => (
              <ProductCard
                key={event.event_id}
                name={event.event_name}
                location={event.event_location}
                date={event.event_date}
                host={event.event_host}
                price={event.event_price}
                photoUrl={event.event_photo_url}
                Description={event.event_description}
                showSignUp={
                  email === null
                    ? 0
                    : event.signed_up_emails.includes(email)
                    ? 2
                    : 1
                } //0 dont show , 1 means show , 2 means already signed up
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
