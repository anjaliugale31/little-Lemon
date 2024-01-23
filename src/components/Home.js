import React from "react";
import Header from "./Header";
import "./styles.css";
import Reservation from "./Reservation";
import Special from "./Special";
const Home = () => {
  return (
    <div className="outer-container">
      <div className="container">
        <Header />
      </div>
      <div className="row w-100 bgcolor">
        <Reservation />
      </div>
      <div className="row w-100">
        <Special />
      </div>
    </div>
  );
};

export default Home;
