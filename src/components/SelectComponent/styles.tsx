import styled from "styled-components";

export const SelectComp = styled.section`
  width: 100%;
  height: max-content;
  background: #f9f9f9;
  @media screen and (max-width: 800px) {
   padding-left: 1.5rem;
  }
`;

export const Content = styled.div`
  max-width: 76rem;
  width: 100%;
  height: max-content;
  margin: auto;

  h1 {
    display: block;
    font: normal 700 1.6rem/1.4 Lato;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    color: #515357;
    margin-bottom: 4rem;

  }
  .inner-text {
    text-transform: none;
    color: #555659;
    font: normal 400 1.6rem/1.4 Lato;
    letter-spacing: normal;
  }
`;
