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
  register,
  errors,
}: {
  type: string;
  title: string;
  errorMessage: string;
  required: Boolean;
  onChange: any;
  name: any;
  Focus: any;
  handleFocus: any;
  register: any;
  errors: any;
}) => {
  console.log(errors.fullName);
  return (
    <InputComponent>
      <div>
        <span className="label">
          {title} {required && <span className="star">✱</span>}
        </span>

        <TakeInput>
          <input
            {...register(`${name}`, { required: required })}
            type={type}
            className={errors.name ? "input border" : "input"}
            onChange={onChange}
            name={name}
            onBlur={handleFocus}
            data-focused={Focus.toString()}
          ></input>
        </TakeInput>
      </div>
      {errors.name && <div className="error">{errorMessage}</div>}
    </InputComponent>
  );
};

export default Input;
