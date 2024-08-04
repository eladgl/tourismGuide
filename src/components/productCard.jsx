import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

import config from "../access/configs/config";

import Label from "../components/label";

const CardContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  padding: 10px;
  &:hover {
    transform: scale(1.05);
  }
`;

const ProductPhoto = styled.img`
  width: 200px; /* Adjust as needed */
  height: auto; /* Maintain aspect ratio */
  margin-right: 20px;
`;

const ProductDetails = styled.div`
  flex: 1;
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
          <button
            className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-yellow-700 transition duration-300 inline-block"
            onClick={handleSignUpClick}
          >
            Sign Up
          </button>
        )}
        {signed === 2 && (
          <button className="mt-4 px-4 py-2 bg-primary text-white rounded ">
            You are signed up to this event!
          </button>
        )}
      </ProductDetails>
    </CardContainer>
  );
};

export default ProductCard;
