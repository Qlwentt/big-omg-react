import React, { useContext } from "react";
import styled from "styled-components";

import AppContext from "../helpers/appContext";

const Wrapper = styled.div`
  margin-bottom: 2rem;
`;

const Label = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  color: #ffffff;
`;

const TimeComplexity = styled.div`
  border: 1px solid #797979;
  color: #ffffff;
`;

const Explanation = styled.div`
  border: 1px solid #797979;
  color: #ffffff;
  height: 400px;
  overflow: scroll;
  padding: 15px;
`;

const TCWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ExWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

function AnswerArea() {
  const { bigOData } = useContext(AppContext);
  const defaultExplanation =
    "The time complexity of this code is O(n), where n is the length of the input list `nums`. This is because the code iterates through the list once in the for loop, performing constant time operations for each element. \n\nWithin the for loop, the `get` method of the dictionary is used to check if the complement of the current element exists in the dictionary. The `get` method has a time complexity of O(1) on average, so it doesn't affect the overall time complexity of the code.\n\nTherefore, the time complexity of this code is dominated by the for loop, which has a time complexity of O(n).";
  const defaultTimeComplexity = "O(n)";

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
        <Explanation>{bigOData?.explanation || defaultExplanation}</Explanation>
      </ExWrapper>
    </Wrapper>
  );
}

export default AnswerArea;
