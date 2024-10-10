import styled from "styled-components";

export const Input = styled.input`
  margin: 5px 0;
  padding: 10px;
  border: none;
  border-radius: 10px;
  box-shadow: inset 4px 4px 8px #b0b0b0, inset -4px -4px 8px #ffffff;

  &:hover#submit {
    cursor: pointer;
  }
`;

export const TextArea = styled.textarea`
  margin: 5px 0;
  padding: 10px;
  border: none;
  border-radius: 10px;
  box-shadow: inset 4px 4px 8px #b0b0b0, inset -4px -4px 8px #ffffff;
`;
