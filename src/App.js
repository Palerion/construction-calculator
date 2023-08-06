import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
} from "react-router-dom";
import Calculator from "./components/Calculator";
import Geometry from "./components/Geometry";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/geometry">Construction Shapes Calculator</NavLink>
            </li>
          </ul>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Calculator />} />
            <Route path="/geometry" element={<Geometry />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
