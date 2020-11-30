import React from "react";
import CardItem from "./card-item";
import "../styles/cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC FG Family Pictures!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/IMG_2750.JPG"
              text="Fast Garage Team before 2020 Utah Enduro"
              label="Race"
              path="/about"
            />
            <CardItem
              src="images/IMG_2751.JPG"
              text="Helder and Enzo always rocking the FG brand"
              label="People"
              path="/about"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/IMG_2752.JPG"
              text="Fast Garage Team after placing 2nd at the 2020 Utah Enduro"
              label="Race"
              path="/about"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
