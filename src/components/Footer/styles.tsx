import styled from "styled-components";

export const FooterComponent = styled.section`
  background: #edeef1;
  padding-top: 4rem, 3rem;
  width: 100%;
  height: max-content;
`;

export const Content = styled.div`
  max-width: 76rem;
  width: 100%;
  height: max-content;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    font: normal 400 16px/1.8 Lato;
    margin: 4rem 0;
    border: none;
    text-decoration: none;
    border-bottom: 1px solid #78b1f1;
    color: #579eee;
    cursor: pointer;
    /* background-color: blue; */
  }

  .footer-logo {
    /* margin-top: 1rem; */
    width: max-content;
    height: max-content;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    margin-bottom: 12rem;

    span {
      width: max-content;
      white-space: nowrap;
      font: normal 400 1.6rem/1.8 Lato;
      color: #7f838a;
    }
    img {
      display: inline-block;
      position: relative;
      height: 24px;
      width: max-content;
      margin-left: 1rem;
    }
  }
`;
