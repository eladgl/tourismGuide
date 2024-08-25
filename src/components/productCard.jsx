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
import Label from "./label";

// ProductCard is a stateful functional component that displays information about a product/event and allows users to sign up for the event.

// Props:
// - photoUrl (string): The URL of the product/event photo.
// - showSignUp (number): A flag indicating whether the "Sign Up" button should be displayed.
//   1 means the sign-up button is shown, and 2 means the user is already signed up.
// - eventId (string): The unique identifier for the event, used when signing up.
// - cords (object): The coordinates for the event location, used for navigation.
// - title (string): The title of the product/event.
// - rest (object): Any additional props that are rendered as labels using the `renderLabels` function.
const ProductCard = ({
  photoUrl,
  showSignUp,
  eventId,
  cords,
  title,
  ...rest
}) => {
  const [signed, setSigned] = useState(showSignUp);
  // Function to handle the "Sign Up" button click.
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

  // Function to render additional labels based on the `rest` props.
  const renderLabels = () => (
    <>
      {Object.entries(rest).map(([key, value]) => (
        <Label key={key}>
          {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
        </Label>
      ))}
    </>
  );

  // Returns:
  // - A card component displaying the product/event photo, title, and additional labels.
  // - Conditional rendering of the "Sign Up" button if the user is not yet signed up.
  // - A "Get Directions" button that triggers navigation using the `handleNavigation` function with the provided coordinates.
  return (
    <CardContainer>
      <ProductPhoto src={photoUrl} alt={title} />
      <ProductDetails direction>
        <h2>{title}</h2>
        {renderLabels()}
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
