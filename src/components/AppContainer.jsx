import React, { useContext } from "react";
import { Container, Row, Col } from "styled-bootstrap-grid";
import styled, { createGlobalStyle } from "styled-components";
import Spinner from "react-bootstrap/Spinner";

import AppContext from "../helpers/appContext";
import AnswerArea from "./AnswerArea";
import Form from "./Form";
import Logo from "./Logo";

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    min-height: 0;
  }
  body {
    background-color: #02000f;
    margin: 0;
    font-family: sans-serif;
  }
`;

const StyledContainer = styled(Container)`
  width: 100vw;
  height: 100vh;
  min-height: 0;
  display: flex;
  flex-direction: column;
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

const LogoRow = styled(Row)`
  flex: 0 0 auto;
  min-height: 0;
`;

const FullHeightRow = styled(Row)`
  flex: 1;
  min-height: 0;
  align-items: stretch;
`;

const FullHeightCol = styled(Col)`
  margin-bottom: 15px;
`;

function AppContainer() {
  const { isLoading } = useContext(AppContext);

  return (
    <>
      <GlobalStyle />
      <StyledContainer>
        <LogoRow>
          <Col xl="12" lg="12" md="12" sm="6">
            <Logo />
          </Col>
        </LogoRow>
        <FullHeightRow>
          <FullHeightCol xl="6" lg="6" md="6" sm="12">
            <Form />
          </FullHeightCol>
          <FullHeightCol xl="6" lg="6" md="6" sm="12">
            <AnswerArea />
          </FullHeightCol>
        </FullHeightRow>
      </StyledContainer>
      {isLoading && <LoadingOverlay />}
    </>
  );
}

export default AppContainer;
