import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Button from "../components/button";
import config from "../access/configs/config";

import Label from "../components/label";

const CardContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  padding: 10px;
  font-size: 16px;
  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const ProductPhoto = styled.img`
  width: 200px; /* Adjust as needed */
  height: auto; /* Maintain aspect ratio */
  margin-right: 20px;
`;

const ProductDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProductCard = ({
  photoUrl,
  name,
  location,
  date,
  host,
  price,
  Description,
  showSignUp,
  eventId,
  cords,
}) => {
  const [signed, setSigned] = useState(showSignUp);
  const handleSignUpClick = async () => {
    try {
      const response = await axios.post(
        `${config.URL}/api/events/signUpToEvent`,
        {
          email: localStorage.getItem("currentUser"),
          eventId,
        }
      );
      setSigned(2);
    } catch (error) {
      console.error("Could not sign up to event:", error);
    }
  };

  const handleNavigation = () => {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
      cords ? cords : "Braude College"
    )}`;
    window.open(googleMapsUrl, "_blank"); // Opens in a new tab
  };
  return (
    <CardContainer>
      <ProductPhoto src={photoUrl} alt={name} />
      <ProductDetails>
        <h2>{name}</h2>
        <p>Location: {location}</p>
        <p>Date: {date}</p>
        <p>Host: {host}</p>
        <p>Price: ₪{price}</p>
        <p>Small Description: {Description}</p>
        {signed === 1 && (
          <Button
            className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-yellow-700 transition duration-300 inline-block max-w-[150px]"
            onClick={handleSignUpClick}
          >
            Sign Up
          </Button>
        )}
        {signed === 2 && (
          <Button className="mt-4 px-4 py-2 bg-primary text-white rounded max-w-[150px] ">
            You are signed up to this event!
          </Button>
        )}
        <Button
          onClick={handleNavigation}
          className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-yellow-700 transition duration-300 inline-block max-w-[150px]"
          style={{
            maxWidth: "150px",
            overflowWrap: "break-word",
            textAlign: "center",
          }}
        >
          Get Directions
        </Button>
      </ProductDetails>
    </CardContainer>
  );
};

export default ProductCard;
