import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Cart from "./components/Cart";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/CSS/styles.css";
import Register from "./components/Register";
import Login from "./components/Login";
import { pizzas, pizzaCart } from "./data/pizzas.js";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div>
      {/* Pizza Card */}
      <Navbar></Navbar>
      {/* <Header></Header> */}
      {/* <Home></Home> */}
      <Cart></Cart>
      {/* <Register></Register> */}
      {/* <Login></Login> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
