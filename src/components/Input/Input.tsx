import React from "react";
import { InputComponent, TakeInput } from "./styles";

const Input = ({
  type,
  title,
  errorMessage,
  required,
  onChange,
  name,
  Focus,
  handleFocus,
}: {
  type: string;
  title: string;
  errorMessage: string;
  required: Boolean;
  onChange: any;
  name: any;
  Focus: any;
  handleFocus: any;
}) => {
  errorMessage = "";
  return (
    <InputComponent>
      <div>
        <span className="label">
          {title} {required && <span className="star">✱</span>}
        </span>

        <TakeInput>
          <input
            type={type}
            className={errorMessage ? "input border" : "input"}
            onChange={onChange}
            name={name}
            onBlur={handleFocus}
            data-focused={Focus.toString()}
          >



          </input>
        </TakeInput>
      </div>
      <div className={errorMessage ? "error" : "display error"}>
        Please Enter a valid email address
      </div>
    </InputComponent>
  );
};

export default Input;
