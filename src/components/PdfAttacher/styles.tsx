import styled from "styled-components";

export const AttacherComponent = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: max-content;
  /* background-color: blue; */
  @media screen and (max-width: 800px) {
    margin-left: 1rem;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    padding: 0;
    justify-content: flex-start;
  }

  .label {
    font-size: 16px;
    line-height: 1.4;
    width: 21rem;
    vertical-align: middle;
    margin: 1.75rem 0;
    /* background-color: yellow; */
  }
  .star {
    width: max-content;
    height: max-content;
    display: inline-block;
    color: #ff794f;
    margin-left: 0.4rem;
    font-size: 0.9rem;
    padding-bottom: 0px;
    position: absolute;
  }
`;

export const TakeInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding-left: 15px;
  width: 48.9rem;
  padding-left: 1.5rem;
  height: max-content;
  @media screen and (max-width: 800px) {
    padding: 0;
    /* background-color: red; */
    margin: 0;
  }

  .error {
    margin-left: 1rem;
    width: max-content;
    height: max-content;
    overflow-x: hidden;
    font-size: 14px;
    letter-spacing: 0.05rem;
    color: red;
  }
  .display {
    display: none;
  }

  input {
    position: absolute;
    cursor: pointer;
    width: 23rem;
    height: 2rem;
    border-radius: 0.3rem;
    opacity: 0;
  }

  .border{
    border: 1px solid red !important;
    color: red !important;

background-color: #ebecf0;
  
      fill: red !important; 
  
  }

  .attachButton {
    display: flex;
    align-items: center;
    width: 23rem;
    height: 4rem;
    padding: 0 1.2rem;
    background: #ebecf0;
    border-radius: 0.3rem;
    color: #9696a2;
    fill: #9696a2;
    border: 1px solid #dfe0e4;

    font: normal 400 16px/1.8 Lato;
    cursor: pointer;

    svg {
      margin-right: 1rem;
    }
    .attachButton__text {
      overflow: hidden;
      white-space: nowrap;
      /* text-overflow: ; */
      font: normal 400 1.45rem/1.8 Lato;
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      text-align: center;
      text-transform: uppercase;
      /* text-overflow: ellipsis; */
    }

    &:hover {
      transition: all 0.1s ease;
      background-color: #dfe0e4;
      svg {
        transition: all 0.1s ease;
        fill: #515357;
      }
      .attachButton__text {
        transition: all 0.1s ease;
        color: #515357;
      }
    }
  }
`;
