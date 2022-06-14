import styled from "styled-components";

export const FormComponent = styled.form`
background: #f9f9f9;
width: 100%;
height: max-content;

`;


export const ButtonContainer = styled.div`
    max-width: 76rem;
    height: max-content;
    margin: auto;
    padding-left: 25.5rem;
    padding-bottom: 10rem;

    @media screen and (max-width: 800px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  }


    .button{
        text-transform: uppercase;
        font: normal 400 14px/1.4 Lato;
        letter-spacing: 2px;
    }
`;