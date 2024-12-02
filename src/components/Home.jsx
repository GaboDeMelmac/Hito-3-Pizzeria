import CardPizza from "./CardPizza";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";
import "../assets/CSS/styles.css";
import { pizzas } from "../data/pizzas.js";
import { useState } from "react";
import "../assets/CSS/styles.css";
import React from "react";

const Home = () => {
  const [pizzasMenu, setPizasMenu] = useState(pizzas);

  return (
    <div className="Home_page">
      {pizzasMenu.map((pizza, index) => {
        return <CardPizza key={pizza.id} pizza={pizza}></CardPizza>;
      })}
    </div>
  );
};

export default Home;
