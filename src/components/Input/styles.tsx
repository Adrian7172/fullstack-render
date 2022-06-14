import styled from "styled-components";

export const InputComponent = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: max-content;
  padding: 1.75rem 0;
  /* background-color: #ff794f; */

  @media screen and (max-width: 800px) {
    margin-left: 1rem;
    width: 100%;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: max-content;
    position: relative;
    box-sizing: border-box;
    /* background-color: green; */
    @media screen and (max-width: 800px) {
    flex-direction: column;
  }
  }

  .label {
    font-size: 16px;
    line-height: 1.4;
    width: 29.3rem;
    vertical-align: middle;
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

  .error {
    padding-left: 22.5rem;
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

  .display {
    display: none !important;
  }
`;

export const TakeInput = styled.div`
  display: flex;
  box-sizing: border-box;
  padding-left: 15px;
  width: max-content;
  padding-left: 1.5rem;
  height: max-content;

  .input {
    line-height: 1.4;
    color: #515357;
    font: normal 400 16px/1.8 Lato;
    outline: none;
    border-radius: 0.3rem;
    border-width: 0.1rem;
    border-style: solid;
    width: 100%;
    width: 47.4rem;
    height: 4rem;
    padding: 0.4rem 0.4rem 0.4rem 1.5rem;
    border-color: #e2e2e2;

    &:focus {
      border: 1px solid black;
    }
  }
  .border {
    border: 1px solid red !important;
  }
`;
