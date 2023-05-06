import React, { useContext } from "react";
import { Container, Row, Col } from "styled-bootstrap-grid";
import styled, { createGlobalStyle } from "styled-components";
import Spinner from "react-bootstrap/Spinner";

import AppContext from "../helpers/appContext";
import AnswerArea from "./AnswerArea";
import Form from "./Form";
import Logo from "./Logo";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #222120;
    margin: 0;
    height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  }
`;

const StyledContainer = styled(Container)`
  width: 100vw;
`;

const LoadingOverlay = styled(Spinner)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 9999;
  background-color: white;
`;

function AppContainer() {
  const { isLoading } = useContext(AppContext);

  return (
    <>
      <GlobalStyle />
      <StyledContainer>
        <Row>
          <Col xl="12" lg="12" md="12" sm="6">
            <Logo />
          </Col>
        </Row>
        <Row>
          <Col xl="6" lg="6" md="6" sm="12">
            <Form />
          </Col>
          <Col xl="6" lg="6" md="6" sm="12">
            <AnswerArea />
          </Col>
        </Row>
      </StyledContainer>
      {isLoading && <LoadingOverlay />}
    </>
  );
}

export default AppContainer;
