import React from "react";
import styled from "styled-components";
import Rating1 from "../theme/images/rating1.jpg";
import Rating2 from "../theme/images/rating2.jpg";
import Rating3 from "../theme/images/rating3.jpg";
import Rating4 from "../theme/images/rating4.jpg";
import Start from "../theme/images/rating-star.jpg";

const Rating = () => {
  return (
    <>
      <h3
        style={{
          textAlign: "center",
          marginTop: "30px",
          fontWeight: "bold",
          color: "black",
        }}
      >
        Rating
      </h3>
      <RatingContainer>
        <div className="grid-item">
          {[...Array(5)].map((star, index) => (
            <img
              key={index}
              src={Start}
              alt={`rating${index + 1}`}
              height="70px"
              width="50px"
            />
          ))}
          <img src={Rating1} alt="rating1" className="ratingpeople" />
        </div>
        <div className="grid-item">
          {[...Array(5)].map((star, index) => (
            <img
              key={index}
              src={Start}
              alt={`rating${index + 1}`}
              height="70px"
              width="50px"
            />
          ))}
          <img src={Rating2} alt="rating1" className="ratingpeople" />
        </div>
        <div className="grid-item">
          {[...Array(5)].map((star, index) => (
            <img
              key={index}
              src={Start}
              alt={`rating${index + 1}`}
              height="70px"
              width="50px"
            />
          ))}
          <img src={Rating3} alt="rating1" className="ratingpeople" />
        </div>
        <div className="grid-item">
          {[...Array(5)].map((star, index) => (
            <img
              key={index}
              src={Start}
              alt={`rating${index + 1}`}
              height="70px"
              width="50px"
            />
          ))}
          <img src={Rating4} alt="rating1" className="ratingpeople" />
        </div>
      </RatingContainer>
    </>
  );
};
const RatingContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  column-gap: 25px;
  padding: 43px;
  text-align: center;
  grid-template-columns: repeat(4, 1fr);
  .grid-item {
    padding: 60px 50px;
    background-color: #e8e8e8;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .ratingpeople {
      height: 200px;
      width: 200px;
    }
    img {
      text-align: center;
    }
  }
`;

export default Rating;
