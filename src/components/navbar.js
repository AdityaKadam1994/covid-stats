import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <ul className="navlist">
          <li className="navlinks">
            <NavLink to="/" active exact>
              Home
            </NavLink>
          </li>
          <li className="navlinks">
            <NavLink to="/world_stats" exact>
              World Stats
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
