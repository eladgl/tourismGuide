import React, { useState } from "react";
import axios from "axios";

import Button from "../components/button";
import config from "../access/configs/config";

import {
  CardContainer,
  ProductPhoto,
  ProductDetails,
} from "../styles/components/card";

import { handleNavigation } from "../utils/navigation";

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

  return (
    <CardContainer>
      <ProductPhoto src={photoUrl} alt={name} />
      <ProductDetails direction>
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
          onClick={() => handleNavigation(cords)}
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
