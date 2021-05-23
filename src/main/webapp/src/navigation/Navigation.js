import { Button } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  top: 16px;
  right: 16px;
`;

function Navigation({ isLoggedIn }) {
  return (
    <Nav>
      <NavLink to="/cart">
        <Button>Go to Cart</Button>
      </NavLink>
      <NavLink to={isLoggedIn ? "/logout" : "/login"}>
        <Button>{isLoggedIn ? "Logout" : "Login"}</Button>
      </NavLink>
    </Nav>
  );
}

export default Navigation;
