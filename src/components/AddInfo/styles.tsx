import styled from "styled-components";

export const AddInfoComponent = styled.section`
  width: 100%;
  background: #f9f9f9;
  padding-top: 10rem;
  height: max-content;

  @media screen and (max-width: 800px) {
   padding-left: 1.5rem;
  }
`;

export const Content = styled.div`
  width: 76rem;
  height: max-content;
  margin: auto;

  @media screen and (max-width: 800px) {
   width: 100%;
  }

  .border{
    border: 1px solid red !important;
  }

  .error {
    width: max-content;
    height: max-content;
    word-wrap: break-word !important;
    overflow-wrap: break-word;
    overflow-x: hidden;
    margin-top: 0.5rem;
    font-size: 14px;
    letter-spacing: 0.05rem;
    color: red;
    width: 100%;
  }

  h1 {
    font: normal 700 1.6rem/1.4 Lato;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    color: #515357;
    margin-bottom: 4rem;
  }

  hr {
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

  @media screen and (max-width: 800px) {
    width: 100%;
  }
  &:focus {
    border: 1px solid black;
  }
`;
