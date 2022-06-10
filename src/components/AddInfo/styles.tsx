import styled from "styled-components";

export const AddInfoComponent = styled.section`
  width: 100%;
  background: #f9f9f9;
  padding-top: 10rem;
  height: max-content;
`;

export const Content = styled.div`
  width: 76rem;
  height: max-content;
  margin: auto;

  h1 {
    font: normal 700 1.6rem/1.4 Lato;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    color: #515357;
    margin-bottom: 4rem;
  }

  hr{
    margin-top: 5rem;
    margin-bottom: 5rem;
    border: 1px solid #e3e4e6;
  }
`;

export const TextArea = styled.textarea`
  resize: vertical;
  width: 100%;
  height: 13rem;
  line-height: 1.4;
  color: #515357;
  font: normal 400 16px/1.8 Lato;
  padding: 0.4rem 0.4rem 0.4rem 1.5rem;
  border: 1px solid;
  border-radius: 0.3rem;
  border-color: #e2e2e2;
  outline: none;
  &:focus {
    border: 1px solid black;
  }
`;
