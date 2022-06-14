import styled from "styled-components";

export const InputFormComponent = styled.section`
  max-width: 76rem;
  width: 100%;
  height: max-content;
  margin: auto;
  padding: 2rem 0;

  @media screen and (max-width: 800px) {
    padding-left: 1.5rem;
    width: 100%;
  }
`;

export const Heading = styled.h1`
  width: 100%;
  margin: 4rem 0;
  font: normal 700 1.6rem/1.4 Lato;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  color: #515357;
`;
