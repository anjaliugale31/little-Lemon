import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

// import {
//   fetchAPI,
//   submitAPI,
// } from "https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js";

const FormDataValidationSchema = Yup.object({
  date: Yup.string().required("Select date!"),
  timeValue: Yup.string().required("Select time!"),
  guests: Yup.string().required("Select How Many guest users are allowed to!"),
  occasion: Yup.string().required("Select occasion!"),
});
const BookingPage = ({ availableTimes, dispatch }) => {
  const [date, setDate] = useState("");
  const [timeValue, setTimeValue] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const navigate = useNavigate();

  const handleDateChange = (e) => {
    dispatch({ type: "UPDATE_TIMES", payload: e.target.value });
    // setDate(e.target.value);
    setFieldValue("date", e.target.value);
  };
  const handleTimeChange = (e) => {
    // setTimeValue(e.target.value);
    setFieldValue("timeValue", e.target.value);
  };
  const handleGustsChange = (e) => {
    // setGuests(parseInt(e.target.value, 10));
    setFieldValue("timeValue", e.target.value);
  };
  const handleOccasion = (e) => {
    // setOccasion(e.target.value);
    setFieldValue("occasion", e.target.value);
  };

  const { values, handleSubmit, errors, setFieldValue } = useFormik({
    initialValues: { date: "", timeValue: "", guests: "1", occasion: "" },
    validationSchema: FormDataValidationSchema,
    onSubmit: async () => {
      const formData = {
        date,
        time: timeValue,
        guests,
        occasion,
      };
      try {
        // const isBookingSuccessful = await submitAPI(formData);
        // if (isBookingSuccessful) {
        //   console.log("Booking successful!");
        //   navigate("/confirmed-booking");
        // } else {
        //   console.log("Booking failed.");
        // }
      } catch (error) {
        console.error("Error submitting booking:", error);
      }
    },
  });

  return (
    <BookingContainer>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <h1 style={{ color: "#495e49", marginBottom: "30px" }}>
              Reservation Table
            </h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="res-date">Choose Date</label>&nbsp;&nbsp;&nbsp;
              <input
                type="date"
                id="res-date"
                value={values.date}
                onChange={handleDateChange}
                required
              />
              {errors.date ? <p className="form-error">{errors.date}</p> : null}
              <br />
              <label htmlFor="res-time">Choose Time</label>&nbsp;&nbsp;&nbsp;
              <select
                type="select-one"
                id="res-time"
                value={values.timeValue}
                onChange={handleTimeChange}
                required
              >
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
              </select>
              {errors.timeValue ? (
                <p className="form-error">{errors.timeValue}</p>
              ) : null}
              <br />
              <label htmlFor="guests"> Number of guest</label>&nbsp;&nbsp;&nbsp;
              <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                value={values.guests}
                onChange={handleGustsChange}
              />
              <br />
              {errors.guests ? (
                <p className="form-error">{errors.guests}</p>
              ) : null}
              <label htmlFor="occasion">Occasion</label>&nbsp;&nbsp;&nbsp;
              <select
                id="occasion"
                value={values.occasion}
                onChange={handleOccasion}
              >
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>
              <br />
              <button
                type="submit"
                value="Make Your reservation"
                className="btnvalue"
              >
                Make your Reservation
              </button>
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
  .form-error {
    color: red;
  }
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
  button {
    margin-top: 20px;
    padding: 18px 70px;
    color: #000;
    background-color: #f4ce14;
    border: none;
    border-radius: 20px;
    width: 100%;
    max-width: 300px;
  }
`;
export default BookingPage;
