import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";

import useFetchBigO from "../hooks/useFetchBigO";
import AppContext from "../helpers/appContext";

const AnalyzeButton = styled.button`
  margin: 15px;
  background-color: #4a2afa;
  color: #fff;
  padding 5px 10px;
  outline: none;
  border-radius: 4px;
  border: 1px solid transparent;
  transition: 0.5s;
  font-family: "Rubik", sans-serif;
`;

const CodeArea = styled.textarea`
  border: 1px solid #ffffff;
  border-radius: 5px;
  width: 100%;
  min-height: 500px;
  background-color: #02000f;
  color: #ffffff;
  font-family: "Source Code Pro", monospace;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
function Form() {
  const [code, setCode] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({ code });
  };
  const handleChange = (e) => {
    setCode(e.target.value);
  };

  const triggerAlert = () => {
    alert("There was an error");
  };

  const { mutate, isLoading, data } = useFetchBigO({
    url: "get-big-o",
    name: "big_o",
    sideEffect: triggerAlert,
  });

  const { setBigOData, setIsLoading } = useContext(AppContext);

  const defaultCode =
    "class Solution:\n    def twoSum(self, nums: List[int], target: int) -> List[int]:\n        numsDict = {}\n        for i, num in enumerate(nums):\n            complement = target - num\n            foundIndex = numsDict.get(complement, None)\n            if foundIndex is not None:\n                return [foundIndex, i]\n            else:\n                numsDict[num] = i";

  useEffect(() => {
    setBigOData(data);
  }, [data, setBigOData]);

  useEffect(() => {
    setIsLoading(isLoading);
  }, [isLoading, setIsLoading]);

  return (
    <div>
      <StyledForm onSubmit={handleSubmit}>
        <CodeArea
          id="code-area"
          type="text"
          name="code_area"
          onChange={handleChange}
          value={code}
          placeholder={defaultCode}
          required
        />
        <AnalyzeButton type="submit">Analyze</AnalyzeButton>
      </StyledForm>
    </div>
  );
}

export default Form;
