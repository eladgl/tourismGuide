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
`;

const ProductCard = ({ photoUrl, name, location, price, Description }) => {
  return (
    <CardContainer>
      <ProductPhoto src={photoUrl} alt={name} />
      <ProductDetails>
        <h2>{name}</h2>
        <p>Location: {location}</p>
        <p>Price: ₪{price}</p>
        <p>Small Description: {Description}</p>
      </ProductDetails>
    </CardContainer>
  );
};

export default ProductCard;
