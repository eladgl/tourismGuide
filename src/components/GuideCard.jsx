import React from "react";
import Label from "./label";

import {
  CardContainer,
  ProductPhoto,
  ProductDetails,
} from "../styles/components/card";

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
