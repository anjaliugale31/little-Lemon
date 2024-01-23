import React from "react";
import styled from "styled-components";
import Food1 from "../theme/images/food1.jpg";
import Food2 from "../theme/images/food2.jpg";
import Food3 from "../theme/images/food3.jpg";
import Button from "../common/Button";

const Special = () => {
  return (
    <SpecialContainer>
      <div className="container">
        <div className="header-containt">
          <h2>Special</h2>
          <Button type="submit">Online Menu</Button>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="first-img">
              <img src={Food1} alt="food" height="400vh" width="400vh" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="second-img">
              <img src={Food2} alt="food" height="400vh" width="400vh" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="third-img">
              <img src={Food3} alt="food" height="400vh" width="400vh" />
            </div>
          </div>
        </div>
      </div>
    </SpecialContainer>
  );
};
const SpecialContainer = styled.div`
  margin-top: 80px;
  .header-containt {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
  }
  h2 {
    color: black;
    margin-bottom: 30px;
  }
`;
export default Special;
