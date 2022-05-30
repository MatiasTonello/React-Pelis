import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <ul className="container">
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "noActive")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "noActive")}
            to="/AboutPeli"
          >
            More Info
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
