import React from "react";
import { UseFormRegister, FieldErrors, Path } from "react-hook-form";
import { Inputs } from "../Form/Form";
import { InputComponent, TakeInput } from "./styles";

const Input = ({
  type,
  title,
  errorMessage,
  required,
  name,
  register,
  errors,
  pattern,
}: {
  type: string;
  title: string;
  errorMessage: string;
  required: boolean;
  // types for these
  name: Path<Inputs>;
  register: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
  pattern: RegExp;
}) => {
  return (
    <InputComponent>
      <div>
        <span className="label">
          {title} {required && <span className="star">✱</span>}
        </span>

        <TakeInput>
          <input
            {...register(`${name}`, { required: required, pattern: pattern })}
            type={type}
            // need to be dynamic key allocation error.fullName won't work
            className={errors[name] ? "input border" : "input"}
            name={name}
          ></input>
        </TakeInput>
      </div>
      {errors[name] && <div className="error">{errorMessage}</div>}
    </InputComponent>
  );
};

export default Input;
