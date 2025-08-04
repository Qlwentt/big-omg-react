import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";

import useFetchBigO from "../hooks/useFetchBigO";
import AppContext from "../helpers/appContext";

const AnalyzeButton = styled.button`
  background-color: #4a2afa;
  color: #fff;
  padding: 5px 10px;
  outline: none;
  border-radius: 4px;
  border: 1px solid transparent;
  transition: 0.5s;
  font-family: "Rubik", sans-serif;
  height: 40px;
  margin: 0;
  width: 200px;
`;

const CodeArea = styled.textarea`
  border: 1px solid #ffffff;
  border-radius: 5px;
  width: 100%;
  flex: 1 1 0;
  min-height: 0;
  background-color: #02000f;
  color: #ffffff;
  font-family: "Source Code Pro", monospace;
  resize: none;
  overflow: auto;
`;
const ModelArea = styled.select`
  width: 100%;
  height: 40px;
  border: 1px solid #ffffff;
  border-radius: 5px;
  background-color: #02000f;
  color: #ffffff;
`;

const FormWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  gap: 10px;
`;
function Form() {
  const [code, setCode] = useState("");
  const [model, setModel] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({ code, model });
  };
  const handleChange = (e) => {
    setCode(e.target.value);
  };

  const handleModelChange = (e) => {
    setModel(e.target.value);
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

  const defaultCode = "code goes here";

  useEffect(() => {
    setBigOData(data);
  }, [data, setBigOData]);

  useEffect(() => {
    setIsLoading(isLoading);
  }, [isLoading, setIsLoading]);

  return (
    <FormWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <ModelArea
          id="model-area"
          name="model-area"
          onChange={handleModelChange}
          value={model}
          required
        >
          <option value="" disabled hidden>
            Choose your model
          </option>

          <option value="claude-opus-4-20250514">Claude Opus 4</option>
          <option value="gpt-4.1">GPT-4.1</option>
        </ModelArea>
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
    </FormWrapper>
  );
}

export default Form;
