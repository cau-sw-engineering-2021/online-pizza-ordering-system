import React from "react";
import styled from "styled-components";

const LoadingContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 999;
`;

const LoadingText = styled.h1`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function Loading() {
  return (
    <LoadingContainer>
      <LoadingText>Loading...</LoadingText>
    </LoadingContainer>
  );
}

export default Loading;
