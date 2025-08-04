import React, { useContext } from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

import AppContext from "../helpers/appContext";

const Wrapper = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Label = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  color: #ffffff;
  font-family: "Rubik", sans-serif;
`;

const TimeComplexity = styled.div`
  border: 1px solid #797979;
  color: #ffffff;
`;

const Explanation = styled.div`
  border: 1px solid #797979;
  color: #ffffff;
  flex: 1 1 auto;
  min-height: 0;
  overflow: scroll;
  padding: 15px;
  max-height: 100%;

  /* Markdown styling */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #ffffff;
    margin-top: 1em;
    margin-bottom: 0.5em;
  }

  p {
    margin-bottom: 1em;
    line-height: 1.6;
  }

  code {
    background-color: #2a2a2a;
    padding: 2px 4px;
    border-radius: 3px;
    font-family: "Source Code Pro", monospace;
  }

  pre {
    background-color: #2a2a2a;
    padding: 1em;
    border-radius: 5px;
    overflow-x: auto;
  }

  pre code {
    background-color: transparent;
    padding: 0;
  }

  ul,
  ol {
    margin-bottom: 1em;
    padding-left: 2em;
  }

  li {
    margin-bottom: 0.5em;
  }

  blockquote {
    border-left: 4px solid #4a2afa;
    padding-left: 1em;
    margin: 1em 0;
    color: #cccccc;
  }
`;

const TCWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
`;

const ExWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`;

function AnswerArea() {
  const { bigOData } = useContext(AppContext);
  const defaultExplanation = "Explanation goes here";
  const defaultTimeComplexity = "Time Complexity goes here";

  return (
    <Wrapper>
      <TCWrapper>
        <Label>Time Complexity</Label>
        <TimeComplexity>
          {bigOData?.big_o || defaultTimeComplexity}
        </TimeComplexity>
      </TCWrapper>
      <ExWrapper>
        <Label>Explanation</Label>
        <Explanation>
          <ReactMarkdown>
            {bigOData?.explanation || defaultExplanation}
          </ReactMarkdown>
        </Explanation>
      </ExWrapper>
    </Wrapper>
  );
}

export default AnswerArea;
