import React from "react";

import Button from "../components/button";
import Label from "./label";

import { handleNavigation } from "../utils/navigation";

import {
  CardContainer,
  ProductPhoto,
  ProductDetails,
} from "../styles/components/card";

// ReviewCardPage is a stateless functional component that displays a detailed review card, including a photo,
// review details, and a button to get directions to the location.

// Props:
// - photoUrl (string): The URL of the product/review photo.
// - name (string): The name/title of the product or review.
// - location (string): The location associated with the review.
// - date (string): The date of the review.
// - description (string): A brief description of the review content.
// - category (string): The category of the product/review, e.g., "Food", "Travel", etc.
// - rating (number): The rating given in the review, on a scale from 0 to 5.
// - cords (object): The coordinates (latitude and longitude) for the location, used for navigation.

// Returns:
// - A card component that displays the review details, including the product photo, name, category, location, date, rating,
//   and description. It also includes a "Get Directions" button that, when clicked, triggers the `handleNavigation` function
//   with the provided coordinates.

const ReviewCardPage = ({
  photoUrl,
  name,
  location,
  date,
  description,
  category,
  rating,
  cords,
}) => {
  return (
    <CardContainer>
      <ProductPhoto
        src={photoUrl}
        alt={name}
        className="reviewCard-productPhoto"
      />
      <ProductDetails>
        <Label className="reviewCard-titleCard">{name}</Label>
        <Label>Category: {category}</Label>
        <Label>Location: {location}</Label>
        <Label>Review Date: {date}</Label>
        <Label>Rating: {rating}/5</Label>
        <Label>Small Description: {description}</Label>
        <Button
          onClick={() => handleNavigation(cords)}
          className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-yellow-700 transition duration-300 inline-block"
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

export default ReviewCardPage;
