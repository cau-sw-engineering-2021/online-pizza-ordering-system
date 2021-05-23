import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const Container = styled.div`
  width: 1280px;
  height: 720px;
  margin: auto;
  background-color: #FAFCEA;
`
const Header = styled.div`
  height: 10%;
  display: flex;
  justify-content: center;
  align-items:  center;
  font: 30px bold sans-serif;
`
const NavContainer = styled.div`
  margin-top: 5%;
  display: flex;
  justify-content: space-around;
`
const Nav = styled(NavLink)`
  width: 300px;
  height: 300px;
  display: flex;
  border-radius: 10%;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: #FFD685;
  font: 35px bold sans-serif;
`
const Main = () => {
    return (
        <Container>
            <Header>
                <span>MANAGEMENT</span>
            </Header>
            <NavContainer>
                <Nav key={} to="">Manage<br/>User</Nav>
                <Nav key={} to="">Manage<br/>Pizza</Nav>
                <Nav key={} to="">Manage<br/>Sales</Nav>
            </NavContainer>
        </Container>
    );
}

export default Main;