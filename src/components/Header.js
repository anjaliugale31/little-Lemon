import React from "react";
import "./styles.css";
import Logo from "../theme/images/logo.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Header = () => {
  return (
    <HeaderStyling>
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <img src={Logo} alt="logo" height="50px" width="200px" />
        </div>
        <div className="col-lg-6 col-md-6">
          <nav>
            <ul>
              <Link to="/home">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Menu</Link>
              <Link to="/reservation">Reservation</Link>
              <Link to="/reservation">Login</Link>
            </ul>
          </nav>
        </div>
      </div>
    </HeaderStyling>
  );
};

const HeaderStyling = styled.div`
  margin-top: 20px;
  img {
    text-align: left;
  }
`;
export default Header;
