import React from "react";
import styled from "styled-components";
import ReservationIcon from "../theme/images/restauranfood.jpg";
import Button from "../common/Button";
const Reservation = () => {
  return (
    <ReservationConatiner>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 text-section">
            <h3>Little Lemon</h3>
            <span>Chicago</span>
            <section>
              We are a Family owned Meals are generally served and eaten on the
              premises Some restaurants are a chain, meaning that there are
              restaurants which have the same name and serve the same food.
              McDonald's, Burger King, and Pizza Hut are examples of chain
              restaurants that are all over the world. These restaurants serve
              fast food, that is, inexpensive food, prepared and served quickly.
              At some, you do not have to even get out of the car to eat. You
              can pay and get your order from a window. These places are called
              drive-throughs.
            </section>
            <Button type="submit" style={{ marginTop: "0px" }}>
              Reserve a Table
            </Button>
          </div>
          <div className="col-lg-6">
            <img
              src={ReservationIcon}
              alt={ReservationIcon}
              height="500vh"
              width="500vh"
            />
          </div>
        </div>
      </div>
    </ReservationConatiner>
  );
};
const ReservationConatiner = styled.div`
  background-color: #495e49;
  height: 540px;
  color: #ffff;
  h3 {
    color: #f4ce14;
    margin-bottom: 20px;
  }
  span {
    font-weight: bold;
  }
  section {
    margin-top: 20px;
  }
  img {
    border-radius: 53px;
    padding: 29px;
  }
  .text-section {
    padding: 60px 10px 0 20px;
  }
  /* button {
    margin-top: 20px;
    padding: 18px 70px;
    color: #000;
    background-color: #f4ce14;
    border: none;
    border-radius: 20px;
  } */
`;
export default Reservation;