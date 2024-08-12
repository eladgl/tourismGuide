import React from "react";

import Button from "../components/button";
import Label from "./label";

import { handleNavigation } from "../utils/navigation";

import {
  CardContainer,
  ProductPhoto,
  ProductDetails,
} from "../styles/components/card";

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
