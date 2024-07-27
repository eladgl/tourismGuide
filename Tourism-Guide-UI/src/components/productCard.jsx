import React from "react";
import styled from "styled-components";
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

const ProductCard = ({ photoUrl, name, location, date, host, price, Description ,showSignUp, eventId }) => {
  const handleSignUpClick = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/events/signUpToEvent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: localStorage.getItem("currentUser"),
          eventId: eventId,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Success:', data);
      // Handle success (e.g., show a message or redirect)
      alert(`Sign Up To ${name} Event Is Successful`);
      

      setTimeout(() => {
        window.location.reload(); // Reload the page after a short delay
      }, 1000); // 1 seconds delay

    } catch (error) {
      console.error('Error:', error);
      // Handle error
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
        {showSignUp === 1 && (
          <button
            className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-yellow-700 transition duration-300 inline-block"
            onClick={handleSignUpClick}
          >
            Sign Up
          </button>
        )}
        {showSignUp === 2 && (
          <button
          className="mt-4 px-4 py-2 bg-primary text-white rounded "
        >
          You are signed up to this event!
        </button>
        )}
      </ProductDetails>
    </CardContainer>
  );
};

export default ProductCard;
