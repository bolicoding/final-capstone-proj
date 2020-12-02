import React from "react";
import CardItem from "./card-item";
import "../styles/cards.css";
import family1 from "../images/IMG_2750.JPG";
import family2 from "../images/IMG_2751.JPG";
import family3 from "../images/IMG_2752.JPG";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC FG Family Pictures!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              image={family1}
              text="Fast Garage Team before 2020 Utah Enduro"
              label="Race"
              path="/about"
            />
            <CardItem
              image={family2}
              text="Helder and Enzo always rocking the FG brand"
              label="People"
              path="/about"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              image={family3}
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
