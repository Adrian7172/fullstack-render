import styled from "styled-components";

export const RecaptchaCompo = styled.section`
max-width: 76rem;
width: 100%;
height: max-content;
margin: auto;
padding-left: 22.4rem;
margin-bottom: 5rem;

@media screen and (max-width: 800px) {
    width: 100%;
    padding: 1.5rem;
    display: flex;
    align-items: center;
    flex-direction: column;
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
    width: max-content;
  }



`;