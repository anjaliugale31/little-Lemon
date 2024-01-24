import React from "react";
import styled from "styled-components";
import Button from "../common/Button";

const BookingPage = () => {
  return (
    <BookingContainer>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <form>
              <label for="res-date">Choose Date</label>&nbsp;&nbsp;&nbsp;
              <input type="date" id="res-date" />
              <br />
              <label for="res-time">Choose Time</label>&nbsp;&nbsp;&nbsp;
              <select id="res-time">
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
              </select>
              <br />
              <label for="guests"> Number of guest</label>&nbsp;&nbsp;&nbsp;
              <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
              />
              <br />
              <label for="occasion">Occasion</label>&nbsp;&nbsp;&nbsp;
              <select id="occasion">
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>
              <br />
              <Button
                type="submit"
                value="Make Your reservation"
                className="btnvalue"
              >
                Make your Reservation
              </Button>
              {/* <input type="submit" value="Make Your reservation" /> */}
            </form>
          </div>
        </div>
      </div>
    </BookingContainer>
  );
};
const BookingContainer = styled.div`
  background-color: white;
  text-align: center;
  color: black;
  padding: 100px;
  text-align: left;
  select {
    margin-bottom: 20px;
  }
  input {
    width: 50%;
    margin-bottom: 20px;
    padding: 20px;
  }
  .btnvalue {
    text-align: center;
    margin-left: 350px;
    padding: 5px 39px;
  }
`;
export default BookingPage;
