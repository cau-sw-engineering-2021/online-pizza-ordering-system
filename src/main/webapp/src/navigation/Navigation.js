import { Button } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { JwtConsumer } from "../contexts/JwtProvider";

const Nav = styled.nav`
  position: fixed;
  top: 16px;
  right: 16px;
`;

function Navigation() {
  return (
    <JwtConsumer>
      {({state}) => {
        const isLoggedIn = Boolean(state.jwt);
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
      }}
    </JwtConsumer>
  );
}

export default Navigation;
