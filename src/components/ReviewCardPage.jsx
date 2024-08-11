import React from "react";
import styled from "styled-components";
import Button from "../components/button";

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


const ReviewCardPage = ({ photoUrl, name, location, date, description, category ,rating, cords }) => {
  const handleNavigation = () => {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(cords ? cords:'Braude College')}`;
    window.open(googleMapsUrl, '_blank'); // Opens in a new tab
  };

  return (
    <CardContainer>
      <ProductPhoto src={photoUrl} alt={name} />
      <ProductDetails>
        <h2>{name}</h2>
        <p>Category: {category}</p>
        <p>Location: {location}</p>
        <p>Review Date: {date}</p>
        <p>Rating: {rating}/5</p>
        <p>Small Description: {description}</p>
        <Button onClick={handleNavigation}
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
