import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/CSS/styles.css";
import Register from "./components/Register";
import Login from "./components/Login";
import { pizzas } from "./data/pizzas.js";
import "./App.css";

function App() {
  return (
    <div className="galeria">
      {/* <Navbar></Navbar> */}
      {pizzas.map((pizza, index) => {
        return (
          <div>
            <h4>{pizza.name}</h4>
            <hr />
            <p>{pizza.desc}</p>
          </div>
        );
      })}
      {/* <Header></Header> */}
      {/* <Home></Home> */}
      {/* <Register></Register> */}
      {/* <Login></Login> */}
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
