import styled from "styled-components";

export const FullstackComponent = styled.section`
  max-width: 76rem;
  width: 100%;
  height: max-content;
  margin: auto;
  margin-bottom: 4.5rem;
  /* background-color: green; */

  @media screen and (max-width: 800px) {
    margin-left: 1rem;
  }
`;

export const Heading = styled.h1`
  width: 100%;
  font: normal 400 36px/1.4 Lato;
  color: #515357;
  text-transform: none;
  letter-spacing: 0px;
  margin: 1.8rem 0;
`;

export const SubHeading = styled.div`
  color: #808080;
  font: normal 700 14.2px/1.4 Lato;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 2.5rem 0;
`;
