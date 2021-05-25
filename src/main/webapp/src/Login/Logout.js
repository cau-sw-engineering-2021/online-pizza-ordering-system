import React from 'react';
import { Redirect } from 'react-router-dom';
import { JwtConsumer } from '../contexts/JwtProvider';

const Logout = () => {
  return (
    <JwtConsumer>
      {({actions}) => {
        actions.setJwt(false);
        return (
          <Redirect to='/' />
        );
      }}
    </JwtConsumer>
  );
}
export default Logout;
