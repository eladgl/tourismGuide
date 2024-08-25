import React from "react";
import Label from "./label";

import {
  CardContainer,
  ProductPhoto,
  ProductDetails,
} from "../styles/components/card";

// GuideCard is a stateless functional component that displays information about a guide.

// Props:
// - photoUrl (string): The URL of the guide's photo, which will be displayed as the image source.
// - name (string): The name of the guide.
// - location (string): The location where the guide operates.
// - price (number): The daily rate of the guide in Israeli Shekels (₪).
// - Description (string): A short description of the guide.
// - contact_info (string): The contact information for the guide.
// - rating (number): The rating of the guide, on a scale from 0 to 5.

// Returns:
// - A card component that displays the guide's photo, name, location, price, description, rating, and contact information.
const GuideCard = ({
  photoUrl,
  name,
  location,
  price,
  Description,
  contact_info,
  rating,
}) => {
  return (
    <CardContainer>
      <ProductPhoto src={photoUrl} alt={name} />
      <ProductDetails>
        <h2>{name}</h2>
        <Label>Location: {location}</Label>
        <Label>Daily Rate: ₪{price}</Label>
        <Label>Small Description: {Description}</Label>
        <Label>Rating: {rating}/5</Label>
        <Label>Contact me: {contact_info}</Label>
      </ProductDetails>
    </CardContainer>
  );
};

export default GuideCard;
