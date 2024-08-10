import React from "react";
import styled from "styled-components";

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
  font-size: 16px;
`;

const GuideCard = ({ photoUrl, name, location, price, Description , Id, contact_info, rating }) => {
  return (
    <CardContainer>
      <ProductPhoto src={photoUrl} alt={name} />
      <ProductDetails>
        <h2>{name}</h2>
        <p>Location: {location}</p>
        <p>Daily Rate: ₪{price}</p>
        <p>Small Description: {Description}</p>
        <p>Rating:  {rating}/5</p>
        <p>Contact me: {contact_info}</p>
      </ProductDetails>
    </CardContainer>
  );
};

export default GuideCard;
