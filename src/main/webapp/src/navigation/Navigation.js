import React from "react";
import { NavLink } from "react-router-dom";

function Navigation({ isLoggedIn }) {
  return (
    <nav>
      <NavLink to="/cart">Go to Cart</NavLink>
      <NavLink to={isLoggedIn ? "/logout" : "/login"}>
        {isLoggedIn ? "Logout" : "Login"}
      </NavLink>
    </nav>
  );
}

export default Navigation;
