import React from "react";
import Header from "./Header";
import "./styles.css";
import Reservation from "./Reservation";
import Special from "./Special";
import Rating from "./Rating";
import LittleLemon from "./LittleLemon";

const Home = () => {
  return (
    <div className="outer-container">
      <div className="container">
        <Header data-testid="header-component" />
      </div>
      <div className="row w-100 bgcolor">
        <Reservation />
      </div>
      <div className="row w-100">
        <Special />
      </div>
      <div className="row w-100">
        <Rating />
      </div>
      <div className="row w-100">
        <LittleLemon />
      </div>
    </div>
  );
};

export default Home;
