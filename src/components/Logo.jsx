import React from "react";
import styled from "styled-components";
import { FaCode } from "react-icons/fa";

const StyledLogo = styled.span`
  h1 {
    color: #ffffff;
    display: inline-block;
  }
`;

const IconWrapper = styled.span`
  color: #0d6efd;
  font-size: 2rem;
  margin-right: 10px;
`;

function Logo() {
  return (
    <StyledLogo>
      <IconWrapper>
        <FaCode />
      </IconWrapper>
      <h1>Big OMG</h1>
    </StyledLogo>
  );
}

export default Logo;
