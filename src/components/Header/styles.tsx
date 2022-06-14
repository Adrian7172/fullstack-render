import styled from "styled-components";

export const Header = styled.div`
  position: fixed;
  z-index: 1000;
  background-color: #fff;
  top: 0;
  width: 100%;
  overflow: hidden;
  height: 11rem;
  box-sizing: border-box;


`;

export const HeaderContent = styled.div`
  max-width: 76rem;
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;

  @media screen and (max-width: 800px) {
    margin-left: 1rem;
  }

  img {
    height: 7.7rem;
  }
`;
